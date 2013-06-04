Ext.define('SampleApp.view.SampleView', {
	extend: 'Ext.panel.Panel',
	requires: ['Ext.ux.LeafletMapView'],
	alias: 'widget.sampleview',
	title: 'Leaflet Sample App',
	titleAlign: 'center',
	layout:{
		type: 'hbox',
		pack: 'start',
		align: 'stretch'
	},
	initComponent: function(){
		var me = this;
		this.items = [
			{
				xtype: 'panel',
				flex: 1,
				layout: 'fit',
				tbar: [
					{
						xtype: 'button',
						text: 'Boston',
						listeners:{
							click: function(){
								me.updateMapLocation([42.3583, -71.0603], 13);
							}
						}
					},
					{
						xtype: 'button',
						text: 'Buffalo',
						listeners:{
							click: function(){
								me.updateMapLocation([42.8864, -78.8786], 13);
							}
						}
					},
					{
						xtype: 'button',
						text: 'NYC',
						listeners:{
							click: function(){
								me.updateMapLocation([40.7142, -74.0064], 13);
							}
						}
					}
				],
				items:[
					{
						itemId: 'locationmap',
						xtype: 'leafletmapview',
						initialLocation: [39.50, -98.35],
						initialZoomLevel: 3
					}
				]
			},
			{
				xtype: 'splitter',
				size: 10
			},
			{
				xtype: 'panel',
				title: 'Current Location',
				titleAlign: 'center',
				layout: 'fit',
				flex: 1,
				items: [
					{
						xtype: 'leafletmapview',
						useCurrentLocation: true,
						tileLayerStyle: 33332
					}
				]
			}
		];
		this.callParent(arguments);
	},
	updateMapLocation: function(location, zoom){
		var map = this.query('#locationmap')[0];
		map.getMap().setView(location, zoom);
	}
});