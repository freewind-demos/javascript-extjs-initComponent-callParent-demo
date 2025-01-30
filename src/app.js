// 定义一个自定义窗口类
Ext.define('My.Custom.Window', {
    extend: 'Ext.window.Window',

    // 基础配置，这些可以直接在类定义中设置
    title: 'ExtJS Window',
    width: 400,
    height: 300,
    layout: 'fit',
    modal: true,
    draggable: true,
    resizable: true,
    closeAction: 'destroy',
    constrain: true,

    // 面板配置
    items: [{
        xtype: 'panel',
        border: false,
        bodyPadding: 20,
        html: '<div>This is a custom ExtJS window!</div>',
        bodyStyle: {
            background: '#f0f0f0'
        }
    }],

    // 按钮配置
    buttons: [{
        text: 'Close',
        handler: function (btn) {
            var win = btn.up('window');
            win.close();
        }
    }],

    // 初始化方法
    initComponent: function () {
        // 调用父类方法
        this.callParent();
    }
});

// 等待DOM准备就绪
Ext.onReady(function () {
    var win = Ext.create('My.Custom.Window');
    win.show();
}); 