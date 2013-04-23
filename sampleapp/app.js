Ext.Loader.setConfig({
	enabled:true,
	paths:{
		'SampleApp':'sampleapp',
		'Ext.ux':'ux'
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