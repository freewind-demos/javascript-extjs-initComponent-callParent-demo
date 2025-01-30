# JavaScript ExtJS Custom Window Demo

之前使用typescript开发extjs时，遇到了奇怪的错误：

```
Uncaught TypeError: Cannot read properties of null (reading '$owner')
    at constructor.callParent (ext-all-debug.js:12481:29)
    at constructor.initComponent (app.ts:31:14)
    at constructor (ext-all-debug.js:66354:12)
```

为了确定是什么原因，弄了这个纯js版的，发现了问题。

### 原因说明

这个错误**不是** TypeScript本身的问题,而是由于使用了基于ESM(ES Modules)的构建工具(如Vite)导致的:

1. 现代构建工具会强制使用`type="module"`
2. 这使得代码运行在独立的模块作用域中
3. 而ExtJS的类系统依赖于全局作用域才能正常工作
4. 因此会导致`$owner`相关错误

### 解决方案

1. **避免使用现代模块打包工具**
   - 不要使用Vite、Webpack等基于ESM的构建工具
   - 改用TypeScript编译器(tsc)直接编译
   - 使用传统的脚本加载方式(不带type="module")

2. **正确配置TypeScript**
   ```json
   {
     "compilerOptions": {
       "target": "ES5",        // 必须使用ES5
       "module": "none",       // 禁用模块系统
       "useDefineForClassFields": false,  // 避免使用现代类字段
       "strict": false         // ExtJS代码可能不符合严格模式
     }
   }
   ```

3. **保持传统的HTML引入方式**
   ```html
   <script src="ext-all.js"></script>
   <script src="app.js"></script>  <!-- 编译后的JS -->
   ```

## 技术栈

- ExtJS 6.2.0
- JavaScript
- Vite (不需要处理typescript则无所谓)

## 功能特点

- 自定义模态窗口
- 响应式布局
- 内置关闭按钮
- 简洁的界面设计

## 代码示例

```javascript
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

## 项目结构

```
/
├── src/
│   └── app.js          # 主应用代码
├── index.html          # 入口HTML文件
├── package.json        # 项目配置
└── vite.config.ts      # Vite配置
```

## 开发说明

- 这是一个用于验证问题的纯JavaScript版本
- 使用Vite构建以复现问题
- 实际开发中建议避免使用现代模块打包工具
- 推荐使用传统的脚本加载方式
