var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from 'fs-extra';
import glob from 'fast-glob';
import color from 'picocolors';
import { logger } from 'rslog';
import { prompt } from 'enquirer';
import { sep, join } from 'node:path';
import { CWD, GENERATOR_DIR } from './constant';
const PROMPTS = [
    {
        name: 'vueVersion',
        message: 'Select Vue version',
        type: 'select',
        choices: [
            {
                name: 'vue3',
                message: 'Vue 3',
            },
        ],
    },
    {
        name: 'preprocessor',
        message: 'Select css preprocessor',
        type: 'select',
        choices: ['Less', 'Sass'],
    },
];
export class ChaleeGenerator {
    constructor(name) {
        this.outputDir = '';
        this.inputs = {
            name: '',
            cssLang: '',
            vueVersion: '',
            preprocessor: '',
        };
        this.inputs.name = name;
        this.outputDir = join(CWD, name);
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prompting();
            this.writing();
            this.end();
        });
    }
    prompting() {
        return __awaiter(this, void 0, void 0, function* () {
            return prompt(PROMPTS).then((inputs) => {
                const preprocessor = inputs.preprocessor.toLowerCase();
                const cssLang = preprocessor === 'sass' ? 'scss' : preprocessor;
                this.inputs.cssLang = cssLang;
                this.inputs.vueVersion = inputs.vueVersion;
                this.inputs.preprocessor = preprocessor;
            });
        });
    }
    writing() {
        console.log();
        logger.info(`Creating project in ${color.green(this.outputDir)}\n`);
        // see https://github.com/mrmlnc/fast-glob#how-to-write-patterns-on-windows
        const templatePath = join(GENERATOR_DIR, this.inputs.vueVersion).replace(/\\/g, '/');
        const templateFiles = glob.sync(join(templatePath, '**', '*').replace(/\\/g, '/'), {
            dot: true,
        });
        templateFiles.forEach((filePath) => {
            const outputPath = filePath
                .replace('.tpl', '')
                .replace(templatePath, this.outputDir);
            this.copyTpl(filePath, outputPath, this.inputs);
        });
    }
    copyTpl(from, to, args) {
        fs.copySync(from, to);
        let content = fs.readFileSync(to, 'utf-8');
        Object.keys(args).forEach((key) => {
            const regexp = new RegExp(`<%= ${key} %>`, 'g');
            content = content.replace(regexp, args[key]);
        });
        fs.writeFileSync(to, content);
        const name = to.replace(this.outputDir + sep, '');
        logger.success(`${color.green('create')} ${name}`);
    }
    end() {
        const { name } = this.inputs;
        console.log();
        logger.success(`Successfully created ${color.yellow(name)}.`);
        logger.success(`Run ${color.yellow(`cd ${name} && git init && yarn && yarn dev`)} to start development!`);
    }
}
