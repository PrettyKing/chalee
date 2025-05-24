# Chalee

<div align="center">
  <img alt="logo" src="https://img.shields.io/badge/Chalee-Vue3-brightgreen" />
  <img alt="npm" src="https://img.shields.io/npm/v/chalee?color=brightgreen" />
  <img alt="npm download" src="https://img.shields.io/npm/dm/chalee?color=brightgreen" />
  <img alt="jsdelivr" src="https://img.shields.io/jsdelivr/npm/hm/chalee?color=brightgreen" />
  <img alt="license" src="https://img.shields.io/npm/l/chalee?color=brightgreen" />
</div>

<div align="center">
  <h3>🚀 A Modern Vue 3 Mobile Component Library</h3>
  <p>轻量、可靠的移动端 Vue 3 组件库</p>
</div>

---

## ✨ 特性

- 🚀 **Vue 3 + TypeScript** - 现代化技术栈，完整类型支持
- 📱 **移动端优先** - 专为移动端设计，触控友好
- 🎨 **主题定制** - 支持深度主题定制和样式覆盖
- 📦 **按需引入** - 支持 Tree Shaking，减小打包体积
- 🌍 **国际化** - 内置多语言支持
- 🔧 **开发友好** - 完整的开发工具链和文档

## 📦 安装

```bash
# 使用 npm
npm install chalee

# 使用 yarn
yarn add chalee

# 使用 pnpm
pnpm add chalee
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
  <div class="demo">
    <ch-button type="primary" @click="onClick">
      点击按钮
    </ch-button>
    
    <ch-cell title="单元格" value="内容" />
    
    <ch-field
      v-model="value"
      label="输入框"
      placeholder="请输入内容"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')

const onClick = () => {
  console.log('按钮被点击了！')
}
</script>
```

## 📚 组件列表

### 基础组件
- Button 按钮
- Cell 单元格
- Icon 图标
- Image 图片
- Layout 布局
- Popup 弹出层

### 表单组件
- Field 输入框
- NumberKeyboard 数字键盘
- PasswordInput 密码输入框
- Radio 单选框
- Checkbox 复选框
- Switch 开关
- Stepper 步进器
- Rate 评分
- Slider 滑块
- Uploader 文件上传

### 反馈组件
- ActionSheet 动作面板
- Dialog 弹出框
- DropdownMenu 下拉菜单
- Loading 加载
- Notify 消息通知
- Overlay 遮罩层
- PullRefresh 下拉刷新
- SwipeCell 滑动单元格
- Toast 轻提示

### 展示组件
- Circle 环形进度条
- Collapse 折叠面板
- CountDown 倒计时
- Divider 分割线
- Empty 空状态
- ImagePreview 图片预览
- Lazyload 懒加载
- List 列表
- NoticeBar 通知栏
- Progress 进度条
- Skeleton 骨架屏
- Steps 步骤条
- Sticky 粘性定位
- Swipe 轮播
- Tag 标签

### 导航组件
- Grid 宫格
- IndexBar 索引栏
- NavBar 导航栏
- Pagination 分页
- Sidebar 侧边导航
- Tab 标签页
- Tabbar 标签栏
- TreeSelect 分类选择

### 业务组件
- AddressEdit 地址编辑
- AddressList 地址列表
- Area 省市区选择
- Card 商品卡片
- Contact 联系人
- Coupon 优惠券
- GoodsAction 商品导航
- SubmitBar 提交订单栏

## 🎨 主题定制

Chalee 支持深度主题定制，你可以通过 CSS 变量来自定义组件样式：

```css
:root {
  --ch-primary-color: #1989fa;
  --ch-success-color: #07c160;
  --ch-danger-color: #ee0a24;
  --ch-warning-color: #ff976a;
  --ch-text-color: #323233;
  --ch-active-color: #f2f3f5;
  --ch-background-color: #f7f8fa;
  --ch-background-color-light: #fafafa;
  --ch-text-color-2: #646566;
  --ch-text-color-3: #969799;
  --ch-border-color: #ebedf0;
  --ch-active-opacity: 0.7;
  --ch-disabled-opacity: 0.5;
  --ch-animation-duration-base: 0.3s;
  --ch-animation-duration-fast: 0.2s;
  --ch-animation-timing-function-enter: ease-out;
  --ch-animation-timing-function-leave: ease-in;
}
```

## 🌍 浏览器支持

现代浏览器以及 Android >= 4.0、iOS >= 8.0。

| Chrome | Safari | Edge | Firefox |
| --- | --- | --- | --- |
| >= 51 | >= 10 | >= 15 | >= 55 |

## 📖 文档

访问我们的[在线文档](https://prettyking.github.io/chalee)了解详细用法和 API。

## 🔗 相关链接

- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集
- [Vite](https://vitejs.dev/) - 下一代前端构建工具

## 📄 许可证

本项目基于 [MIT](https://github.com/PrettyKing/chalee/blob/main/LICENSE) 许可证开源。

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/PrettyKing">PrettyKing</a>
</div>