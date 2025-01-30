# TypeScript ExtJS Custom Window Demo

这是一个使用 TypeScript 和 ExtJS 创建自定义窗口的示例项目。项目展示了如何使用 ExtJS 的窗口组件，并结合 TypeScript 进行开发。

## 技术栈

- ExtJS 6.2.0
- TypeScript
- Vite (构建工具)

## 功能特点

- 自定义模态窗口
- 响应式布局
- 内置关闭按钮
- 简洁的界面设计

## 代码示例

```typescript
Ext.define('My.Custom.Window', {
    extend: 'Ext.window.Window',
    width: 400,
    height: 300,
    layout: 'fit',
    modal: true,
    items: [{
        xtype: 'panel',
        html: '<div style="padding: 20px;">This is a custom ExtJS window!</div>',
        bodyStyle: {
            background: '#f0f0f0'
        }
    }],
    buttons: [{
        text: 'Close',
        handler: function(btn) {
            const win = btn.up('window');
            win.close();
        }
    }]
});
```

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm start
```

服务器启动后会自动在浏览器中打开页面。

## 项目结构

```
/
├── src/
│   └── app.ts          # 主应用代码
├── index.html          # 入口HTML文件
├── package.json        # 项目配置
├── tsconfig.json       # TypeScript配置
└── vite.config.ts      # Vite配置
```

## 开发说明

- 项目使用 TypeScript 进行开发，提供类型安全
- 使用 ExtJS 的传统类定义方式创建窗口组件
- 窗口组件包含基本的面板和按钮配置
- 使用 Vite 作为开发服务器和构建工具
