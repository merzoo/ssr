# ssr 服务端同构应用基础 demo

## 项目结构

```
├── README.md
├── package.json
├── src
│   ├── client
│   ├── server
│   ├── components
│   └── container
├── webpack.base.js
├── webpack.client.js
├── webpack.server.js
└── yarn.lock
```

## todos

- [x] 构建基础架构，目录分层，webpack 基础打包配置
- [x] 客户端/服务端首屏 DOM
- [x] 添加客户端事件
- [x] 共享路由配置，实现路由功能
- [x] 共享数据
- [x] 异步请求数据，服务端渲染首屏
  - [x] 服务端匹配对应路由页面，加载数据
  - [x] 客户端检查服务端是否已经加载数据，避免重复加载
