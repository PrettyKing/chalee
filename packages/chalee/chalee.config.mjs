export default {
  name: 'chalee',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/chalee/',
    },
    vetur: {
      tagPrefix: 'ch',
    },
  },
  site: {
    title: 'chalee',
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'button',
            title: 'Button 按钮',
          },
          {
            path: 'tag',
            title: 'Tag 标签',
          },
        ],
      },
    ],
  },
};
