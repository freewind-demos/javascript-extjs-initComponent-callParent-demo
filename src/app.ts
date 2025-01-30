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
        handler: function (btn) {
            const win = btn.up('window');
            win.close();
        }
    }]
})

Ext.onReady(() => {
    const win = Ext.create('My.Custom.Window');
    win.show();
});
