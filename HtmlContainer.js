Ext.define('Shared.HtmlContainer', {
    extend: 'Ext.Container',
    xtype: 'htmlcntr',

    // Just a test
    styleHtmlContent: true ,

    config: {
        url: false
    },

    updateUrl: function (url) {
        
        if (url) {
            this.setHidden(true);
            this.setMasked({
                xtype: 'loadmask', message: 'Loading...'
            });
            Ext.Ajax.request({
                url: url,
                scope: this,
                success: function (response) {
                    this.setHtml(response.responseText);
                    this.setMasked(false);
                    this.setHidden(false);
                }
            });
        }
    },

    reload: function () {
        this.updateUrl(this.getUrl());
    },
    
});