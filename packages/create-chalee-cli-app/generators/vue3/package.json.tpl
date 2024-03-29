{
  "name": "<%= name %>",
  "version": "1.0.0",
  "description": "",
  "main": "lib/<%= name %>.js",
  "module": "es/index.js",
  "style": "lib/index.css",
  "typings": "lib/index.d.ts",
  "files": [
    "lib",
    "es"
  ],
  "scripts": {
    "dev": "chalee-cli dev",
    "lint": "chalee-cli lint",
    "test": "chalee-cli test",
    "build": "chalee-cli build",
    "build:site": "chalee-cli build-site",
    "release": "chalee-cli release --tag next",
    "release:site": "pnpm build:site && npx gh-pages -d site-dist",
    "test:watch": "chalee-cli test --watch",
    "test:coverage": "open test/coverage/index.html"
  },
  "author": "",
  "nano-staged": {
    "*.md": "prettier --write",
    "*.{ts,tsx,js,vue,less,scss}": "prettier --write",
    "*.{ts,tsx,js,vue}": "eslint --fix"
  },
  "peerDependencies": {
    "vue": "^3.3.4"
  },
  "devDependencies": {
    "@chalee/cli": "^6.0.0",
    "vue": "^3.3.4",
    "sass": "^1.49.7"
  },
  "eslintConfig": {
    "root": true,
    "extends": [
      "@chalee"
    ]
  },
  "prettier": {
    "singleQuote": true
  },
  "browserslist": [
    "Chrome >= 51",
    "iOS >= 10"
  ]
}
