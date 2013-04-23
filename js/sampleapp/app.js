Ext.Loader.setConfig({
	enabled:true,
	paths:{
		'SampleApp':'js/sampleapp',
		'Ext.ux':'js/ux'
	}
});

Ext.require([
	'SampleApp.view.SampleView'
]);

Ext.onReady(function () {
	Ext.create('Ext.container.Viewport', {
		layout: 'fit',
		items: [
			{
				xtype: 'sampleview'
			}
		]
	})
});