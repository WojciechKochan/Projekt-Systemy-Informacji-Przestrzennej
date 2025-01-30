var wms_layers = [];

var lyr_Raster_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Raster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Raster',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Raster_0, 0]);
var format_Hexagonyrnicemidzywsztkiniokresami_1 = new ol.format.GeoJSON();
var features_Hexagonyrnicemidzywsztkiniokresami_1 = format_Hexagonyrnicemidzywsztkiniokresami_1.readFeatures(json_Hexagonyrnicemidzywsztkiniokresami_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hexagonyrnicemidzywsztkiniokresami_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hexagonyrnicemidzywsztkiniokresami_1.addFeatures(features_Hexagonyrnicemidzywsztkiniokresami_1);
var lyr_Hexagonyrnicemidzywsztkiniokresami_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hexagonyrnicemidzywsztkiniokresami_1, 
                style: style_Hexagonyrnicemidzywsztkiniokresami_1,
                popuplayertitle: 'Hexagony- różnice między wsztkini okresami',
                interactive: true,
    title: 'Hexagony- różnice między wsztkini okresami<br />\
    <img src="styles/legend/Hexagonyrnicemidzywsztkiniokresami_1_0.png" /> -173 - -96<br />\
    <img src="styles/legend/Hexagonyrnicemidzywsztkiniokresami_1_1.png" /> -96 - -52<br />\
    <img src="styles/legend/Hexagonyrnicemidzywsztkiniokresami_1_2.png" /> -52 - -17<br />\
    <img src="styles/legend/Hexagonyrnicemidzywsztkiniokresami_1_3.png" /> -17 - 17<br />\
    <img src="styles/legend/Hexagonyrnicemidzywsztkiniokresami_1_4.png" /> 17 - 60<br />'
        });
var format_VMAP_2 = new ol.format.GeoJSON();
var features_VMAP_2 = format_VMAP_2.readFeatures(json_VMAP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VMAP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VMAP_2.addFeatures(features_VMAP_2);
var lyr_VMAP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VMAP_2, 
                style: style_VMAP_2,
                popuplayertitle: 'VMAP',
                interactive: true,
                title: '<img src="styles/legend/VMAP_2.png" /> VMAP'
            });
var format_Zasiggdziekiedykolwiekpynarzeka_3 = new ol.format.GeoJSON();
var features_Zasiggdziekiedykolwiekpynarzeka_3 = format_Zasiggdziekiedykolwiekpynarzeka_3.readFeatures(json_Zasiggdziekiedykolwiekpynarzeka_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zasiggdziekiedykolwiekpynarzeka_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zasiggdziekiedykolwiekpynarzeka_3.addFeatures(features_Zasiggdziekiedykolwiekpynarzeka_3);
var lyr_Zasiggdziekiedykolwiekpynarzeka_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zasiggdziekiedykolwiekpynarzeka_3, 
                style: style_Zasiggdziekiedykolwiekpynarzeka_3,
                popuplayertitle: 'Zasięg gdzie kiedykolwiek płynęła rzeka',
                interactive: true,
                title: '<img src="styles/legend/Zasiggdziekiedykolwiekpynarzeka_3.png" /> Zasięg gdzie kiedykolwiek płynęła rzeka'
            });
var format_Zasiggdziezawszepynarzeka_4 = new ol.format.GeoJSON();
var features_Zasiggdziezawszepynarzeka_4 = format_Zasiggdziezawszepynarzeka_4.readFeatures(json_Zasiggdziezawszepynarzeka_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zasiggdziezawszepynarzeka_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zasiggdziezawszepynarzeka_4.addFeatures(features_Zasiggdziezawszepynarzeka_4);
var lyr_Zasiggdziezawszepynarzeka_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zasiggdziezawszepynarzeka_4, 
                style: style_Zasiggdziezawszepynarzeka_4,
                popuplayertitle: 'Zasięg gdzie zawsze płynęła rzeka',
                interactive: true,
                title: '<img src="styles/legend/Zasiggdziezawszepynarzeka_4.png" /> Zasięg gdzie zawsze płynęła rzeka'
            });
var format_Sentinel_5 = new ol.format.GeoJSON();
var features_Sentinel_5 = format_Sentinel_5.readFeatures(json_Sentinel_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentinel_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentinel_5.addFeatures(features_Sentinel_5);
var lyr_Sentinel_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentinel_5, 
                style: style_Sentinel_5,
                popuplayertitle: 'Sentinel',
                interactive: true,
                title: '<img src="styles/legend/Sentinel_5.png" /> Sentinel'
            });
var format_Mapahistoryczna_6 = new ol.format.GeoJSON();
var features_Mapahistoryczna_6 = format_Mapahistoryczna_6.readFeatures(json_Mapahistoryczna_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapahistoryczna_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapahistoryczna_6.addFeatures(features_Mapahistoryczna_6);
var lyr_Mapahistoryczna_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mapahistoryczna_6, 
                style: style_Mapahistoryczna_6,
                popuplayertitle: 'Mapa historyczna',
                interactive: true,
                title: '<img src="styles/legend/Mapahistoryczna_6.png" /> Mapa historyczna'
            });

lyr_Raster_0.setVisible(true);lyr_Hexagonyrnicemidzywsztkiniokresami_1.setVisible(true);lyr_VMAP_2.setVisible(true);lyr_Zasiggdziekiedykolwiekpynarzeka_3.setVisible(true);lyr_Zasiggdziezawszepynarzeka_4.setVisible(true);lyr_Sentinel_5.setVisible(true);lyr_Mapahistoryczna_6.setVisible(true);
var layersList = [lyr_Raster_0,lyr_Hexagonyrnicemidzywsztkiniokresami_1,lyr_VMAP_2,lyr_Zasiggdziekiedykolwiekpynarzeka_3,lyr_Zasiggdziezawszepynarzeka_4,lyr_Sentinel_5,lyr_Mapahistoryczna_6];
lyr_Hexagonyrnicemidzywsztkiniokresami_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GRID_ID': 'GRID_ID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Hexagony_sentinel_his': 'Hexagony_sentinel_his', 'Hexagony_sentinel_vmap': 'Hexagony_sentinel_vmap', 'Hexagony_vmap_his': 'Hexagony_vmap_his', 'Hexagony_roznica_wszystkie': 'Hexagony_roznica_wszystkie', });
lyr_VMAP_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Zasiggdziekiedykolwiekpynarzeka_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_RasterT_Slice__SmoothPolygon': 'FID_RasterT_Slice__SmoothPolygon', 'Id': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'FID_rzeka_kamienczyk_Merge': 'FID_rzeka_kamienczyk_Merge', 'Shape_Leng': 'Shape_Leng', 'FID_HYDRO_WODY_POWIERZCHNIO_Clip': 'FID_HYDRO_WODY_POWIERZCHNIO_Clip', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_1': 'ID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Zasiggdziezawszepynarzeka_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_rzeka_kamienczyk_Merge': 'FID_rzeka_kamienczyk_Merge', 'Shape_Leng': 'Shape_Leng', 'FID_HYDRO_WODY_POWIERZCHNIO_Clip': 'FID_HYDRO_WODY_POWIERZCHNIO_Clip', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'FID_RasterT_Slice__SmoothPolygon': 'FID_RasterT_Slice__SmoothPolygon', 'Id_1': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Nazwa_1': 'Nazwa_1', });
lyr_Sentinel_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'InPoly_FID': 'InPoly_FID', });
lyr_Mapahistoryczna_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Hexagonyrnicemidzywsztkiniokresami_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'GRID_ID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Hexagony_sentinel_his': 'TextEdit', 'Hexagony_sentinel_vmap': 'TextEdit', 'Hexagony_vmap_his': 'TextEdit', 'Hexagony_roznica_wszystkie': 'TextEdit', });
lyr_VMAP_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Zasiggdziekiedykolwiekpynarzeka_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_RasterT_Slice__SmoothPolygon': 'Range', 'Id': 'Range', 'gridcode': 'Range', 'InPoly_FID': 'Range', 'FID_rzeka_kamienczyk_Merge': 'Range', 'Shape_Leng': 'TextEdit', 'FID_HYDRO_WODY_POWIERZCHNIO_Clip': 'Range', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_1': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Zasiggdziezawszepynarzeka_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_rzeka_kamienczyk_Merge': 'Range', 'Shape_Leng': 'TextEdit', 'FID_HYDRO_WODY_POWIERZCHNIO_Clip': 'Range', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'Range', 'FID_RasterT_Slice__SmoothPolygon': 'Range', 'Id_1': 'Range', 'gridcode': 'Range', 'InPoly_FID': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Nazwa_1': 'TextEdit', });
lyr_Sentinel_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'Range', 'gridcode': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'InPoly_FID': 'Range', });
lyr_Mapahistoryczna_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Hexagonyrnicemidzywsztkiniokresami_1.set('fieldLabels', {'OBJECTID': 'no label', 'GRID_ID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'Hexagony_sentinel_his': 'no label', 'Hexagony_sentinel_vmap': 'no label', 'Hexagony_vmap_his': 'no label', 'Hexagony_roznica_wszystkie': 'no label', });
lyr_VMAP_2.set('fieldLabels', {'OBJECTID': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Zasiggdziekiedykolwiekpynarzeka_3.set('fieldLabels', {'OBJECTID': 'no label', 'FID_RasterT_Slice__SmoothPolygon': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'FID_rzeka_kamienczyk_Merge': 'no label', 'Shape_Leng': 'no label', 'FID_HYDRO_WODY_POWIERZCHNIO_Clip': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_1': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Zasiggdziezawszepynarzeka_4.set('fieldLabels', {'OBJECTID': 'no label', 'FID_rzeka_kamienczyk_Merge': 'no label', 'Shape_Leng': 'no label', 'FID_HYDRO_WODY_POWIERZCHNIO_Clip': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'FID_RasterT_Slice__SmoothPolygon': 'no label', 'Id_1': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'Nazwa_1': 'no label', });
lyr_Sentinel_5.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'InPoly_FID': 'no label', });
lyr_Mapahistoryczna_6.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Mapahistoryczna_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});