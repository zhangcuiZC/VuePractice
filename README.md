# Vue-project template

## 一个基于 vue+vue-router+vuex 的后台管理界面模板

- 三级菜单：root/parent/child 分别对应顶部菜单/左侧主菜单/左侧子菜单
- config 文件下定义顶部和左侧菜单及权限
- router 中定义路由和权限（和 config 下权限一致）
- 权限目前采用基于角色的权限控制

### 备忘：

1. 登录界面，404 界面未做
2. 路由懒加载未处理

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
