# Chalee

<div align="center">
  <img alt="logo" src="https://img.shields.io/badge/Chalee-Vue3-brightgreen" />
  <img alt="npm" src="https://img.shields.io/npm/v/chalee?color=brightgreen" />
  <img alt="npm download" src="https://img.shields.io/npm/dm/chalee?color=brightgreen" />
  <img alt="jsdelivr" src="https://img.shields.io/jsdelivr/npm/hm/chalee?color=brightgreen" />
</div>

<div align="center">
  <h3>🚀 A Modern Vue 3 Mobile Component Library</h3>
  <p>轻量、可靠的移动端 Vue 3 组件库</p>
</div>

---

## ✨ 特性

- 🚀 **现代化架构** - 基于 Vue 3 + TypeScript 构建
- 📱 **移动端优先** - 专为移动端设计，触控友好
- 🎨 **主题定制** - 支持深度主题定制和样式覆盖
- 🔧 **开发友好** - 完整的 TypeScript 支持，优秀的开发体验
- 📦 **按需引入** - 支持 Tree Shaking，减小打包体积
- 🌍 **国际化** - 内置多语言支持
- 🛠️ **工具链完整** - 包含 CLI、ESLint 配置等开发工具

## 📦 安装

### npm 安装

```bash
npm install chalee
```

### CDN 引入

```html
<script src="https://cdn.jsdelivr.net/npm/chalee/lib/chalee.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/chalee/lib/index.css">
```

## 🚀 快速开始

### 完整引入

```typescript
import { createApp } from 'vue'
import Chalee from 'chalee'
import 'chalee/lib/index.css'

const app = createApp()
app.use(Chalee)
```

### 按需引入

```typescript
import { createApp } from 'vue'
import { Button, Cell } from 'chalee'
import 'chalee/lib/index.css'

const app = createApp()
app.use(Button).use(Cell)
```

### 使用组件

```vue
<template>
  <ch-button type="primary" @click="onClick">
    点击按钮
  </ch-button>
</template>

<script setup>
const onClick = () => {
  console.log('按钮被点击了！')
}
</script>
```

## 📚 文档

访问我们的[在线文档](https://prettyking.github.io/chalee)了解详细用法和 API。

## 🏗️ 开发

这是一个基于 pnpm 的 monorepo 项目，包含以下包：

```
packages/
├── chalee/                    # 核心组件库
├── chalee-cli/                # 开发工具 CLI
├── chalee-eslint-config/      # ESLint 配置
├── chalee-use/                # Vue 3 Hooks 库
├── chalee-touch-emulator/     # 触控模拟器
└── create-chalee-cli-app/     # 项目脚手架
```

### 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 运行测试
pnpm test

# 构建项目
pnpm build

# 构建文档站点
pnpm build:site
```

### 环境要求

- Node.js >= 16.0.0
- pnpm >= 8.8.0

## 🧪 测试

```bash
# 运行测试
pnpm test

# 监听模式运行测试
pnpm test:watch

# 生成测试覆盖率报告
pnpm test:coverage
```

## 🔧 工具链

### CLI 工具

使用我们的 CLI 工具快速创建和管理 Chalee 项目：

```bash
# 全局安装 CLI
npm install -g @chalee/cli

# 创建新项目
chalee-cli create my-project

# 开发模式
chalee-cli dev

# 构建项目
chalee-cli build
```

### ESLint 配置

使用统一的 ESLint 配置保证代码质量：

```bash
npm install -D @chalee/eslint-config
```

```json
{
  "extends": ["@chalee"]
}
```

## 🎨 主题定制

Chalee 支持深度主题定制，你可以通过 CSS 变量来自定义组件样式：

```css
:root {
  --ch-primary-color: #1989fa;
  --ch-text-color: #323233;
  --ch-background-color: #f7f8fa;
  /* 更多变量... */
}
```

## 🌍 浏览器支持

现代浏览器以及 Android >= 4.0、iOS >= 8.0。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox |
| --------- | --------- | --------- | --------- |
| Chrome >= 51 | iOS >= 10 | Edge >= 15 | Firefox >= 55 |

## 🤝 贡献

感谢所有贡献者的付出！

### 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

### 开发规范

- 遵循 [Vue 3 风格指南](https://vuejs.org/style-guide/)
- 使用 TypeScript 进行开发
- 编写单元测试
- 保持代码风格一致

## 📄 许可证

本项目基于 [MIT](./LICENSE) 许可证开源。

## 🙏 致谢

- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Vant](https://vant-contrib.gitee.io/vant/) - 设计灵感来源
- 所有贡献者和使用者

---

<div align="center">
  <p>如果这个项目对你有帮助，请给一个 ⭐️ 支持一下！</p>
  
  Made with ❤️ by [PrettyKing](https://github.com/PrettyKing)
</div>