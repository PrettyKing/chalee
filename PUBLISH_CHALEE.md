# 📦 Chalee Vue 3 组件库 NPM 发布指南

## 🎯 发布前准备

### ✅ 检查清单

- ✅ 已更新 `packages/chalee/package.json` 
- ✅ 已添加详细的 README 文档
- ✅ 包含完整的组件描述和使用示例
- ✅ 设置了正确的关键词和描述
- ✅ 配置了发布选项

## 🚀 发布步骤

### 1. 环境准备

```bash
# 确保使用正确的 Node.js 版本
node --version  # 应该 >= 16.0.0

# 确保使用 pnpm
pnpm --version  # 应该 >= 8.0.0

# 克隆项目到本地
git clone https://github.com/PrettyKing/chalee.git
cd chalee
```

### 2. 安装依赖

```bash
# 安装项目依赖
pnpm install
```

### 3. 构建项目

```bash
# 构建 chalee 组件库
pnpm build

# 或者进入 chalee 包目录构建
cd packages/chalee
pnpm build
```

### 4. 测试项目

```bash
# 运行测试确保一切正常
pnpm test

# 检查构建产物
ls -la lib/
ls -la es/
```

### 5. 登录 NPM

```bash
# 登录 npm 账户
npm login

# 验证登录状态
npm whoami
```

### 6. 检查包名可用性

```bash
# 检查 chalee 包名是否可用
npm view chalee

# 如果返回 404，说明包名可用
# 如果返回包信息，说明包名已被占用
```

### 7. 预览发布内容

```bash
# 在 packages/chalee 目录下预览要发布的文件
cd packages/chalee
npm pack --dry-run

# 检查打包后的文件大小
npm pack
tar -tf chalee-1.0.0.tgz
```

### 8. 发布到 NPM

```bash
# 在 packages/chalee 目录下发布
cd packages/chalee
npm publish

# 如果遇到权限问题
npm publish --access public
```

### 9. 验证发布

```bash
# 检查包是否成功发布
npm view chalee

# 测试安装
mkdir test-chalee && cd test-chalee
npm init -y
npm install chalee
```

## 🔧 如果包名被占用的解决方案

### 方案 1: 使用作用域包

修改 `packages/chalee/package.json`:

```json
{
  "name": "@prettyking/chalee",
  // ... 其他配置
}
```

然后发布：

```bash
npm publish --access public
```

### 方案 2: 使用其他包名

可选的包名：
- `chalee-ui`
- `chalee-mobile`
- `vue3-chalee`
- `chalee-components`
- `mobile-chalee`

## 📈 发布后的操作

### 1. 更新文档

确保以下文档都指向正确的包名：

- 主 README.md
- packages/chalee/README.md
- 在线文档（如果有）

### 2. 创建 GitHub Release

```bash
# 创建并推送 tag
git tag v1.0.0
git push origin v1.0.0
```

在 GitHub 上创建 Release，包含：
- 版本说明
- 更新内容
- 破坏性变更（如有）

### 3. 社交媒体推广

发布内容模板：

```
🎉 Chalee v1.0.0 发布！

✨ 特性：
📱 Vue 3 移动端组件库
🎨 丰富的组件集合
🔧 TypeScript 支持
📦 按需引入
🌍 主题定制

npm install chalee

#Vue3 #前端 #移动端 #组件库 #开源
```

## 🐛 常见问题解决

### 1. 构建失败

```bash
# 清理依赖重新安装
rm -rf node_modules pnpm-lock.yaml
pnpm install

# 检查 chalee-cli 是否正常工作
pnpm --dir ./packages/chalee-cli build
```

### 2. 发布权限错误

```bash
# 确保登录正确的账户
npm logout
npm login
npm whoami

# 检查包配置
cat packages/chalee/package.json | grep publishConfig
```

### 3. 包名冲突

```bash
# 搜索相似的可用包名
npm search chalee
npm view chalee-ui
npm view @prettyking/chalee
```

### 4. 文件缺失

确保 `packages/chalee/package.json` 中的 `files` 字段包含所有必要文件：

```json
{
  "files": [
    "lib",
    "es", 
    "README.md"
  ]
}
```

## 📊 发布成功验证

### 1. NPM 页面检查

访问 https://www.npmjs.com/package/chalee （或你的包名）

应该看到：
- ✅ 正确的版本号
- ✅ 完整的描述
- ✅ 关键词标签
- ✅ README 内容
- ✅ 依赖信息

### 2. 安装测试

```bash
# 创建测试项目
mkdir chalee-test && cd chalee-test
npm init -y
npm install chalee vue@^3.3.4

# 创建测试文件
echo '
import { createApp } from "vue"
import Chalee from "chalee"
import "chalee/lib/index.css"

const app = createApp({})
app.use(Chalee)
console.log("Chalee 安装成功！")
' > test.js

node test.js
```

### 3. CDN 测试

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/chalee/lib/index.css">
</head>
<body>
  <div id="app"></div>
  <script src="https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chalee/lib/chalee.js"></script>
  <script>
    console.log('Chalee CDN 加载成功！')
  </script>
</body>
</html>
```

## 🎉 发布完成

发布成功后，你的 Chalee Vue 3 组件库将可以通过以下方式使用：

```bash
# 安装
npm install chalee

# 或者 CDN 引入
https://cdn.jsdelivr.net/npm/chalee/lib/chalee.js
```

恭喜！你的组件库现在已经可以供全世界的 Vue 3 开发者使用了！🎊

---

💡 **提示**: 记得定期更新版本，修复 bug 和添加新功能，保持项目的活跃度。