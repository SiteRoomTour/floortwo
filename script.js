TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "gyroscopeEnabled": true,
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15",
  "mapLocations": [
   {
    "x": 840.98,
    "map": {
     "thumbnailUrl": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_t.png",
     "fieldOfViewOverlayInsideOpacity": 0.25,
     "width": 5400,
     "fieldOfViewOverlayInsideColor": "#FEE507",
     "height": 4000,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "minimumZoomFactor": 0.5,
     "image": {
      "levels": [
       {
        "height": 1185,
        "width": 1600,
        "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256.png",
        "class": "ImageResourceLevel"
       },
       {
        "height": 592,
        "grayscale": true,
        "width": 800,
        "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_lq.png",
        "class": "ImageResourceLevel"
       }
      ],
      "class": "ImageResource"
     },
     "id": "map_B18DC891_BE47_F2A6_41DE_54A73B03D256",
     "label": "\u041f\u043b\u0430\u043d 2 \u044d\u0442\u0430\u0436\u0430",
     "maximumZoomFactor": 1.2,
     "overlays": [
      {
       "areas": [
        {
         "click": "this.playList_FCD2F1F4_DD52_C414_41D0_404AC1510DEC.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_B18D6891_BE47_F2A6_41CB_DF13CCDE4C0C",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1370.11,
        "width": 119.93,
        "y": 2242.12,
        "height": 138.67,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 20,
           "width": 17,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_2_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 1370.11,
        "y": 2242.12,
        "width": 119.93,
        "height": 138.67,
        "image": {
         "levels": [
          {
           "height": 41,
           "width": 35,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_2.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.playList_FC50E1F7_DD52_C414_41DE_5C72A1FC2966.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_B18D4891_BE47_F2A6_41E5_8B441A608D41",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 2671.91,
        "width": 111.13,
        "y": 2090.43,
        "height": 117.03,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 17,
           "width": 16,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_3_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 2671.91,
        "y": 2090.43,
        "width": 111.13,
        "height": 117.03,
        "image": {
         "levels": [
          {
           "height": 34,
           "width": 32,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_3.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.playList_FC5771F7_DD52_C414_41DD_1C2737E45968.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_B18CA891_BE47_F2A6_41DC_C00982A3EBB5",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 2196.95,
        "width": 98.08,
        "y": 1165.54,
        "height": 99.58,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 14,
           "width": 14,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_4_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 2196.95,
        "y": 1165.54,
        "width": 98.08,
        "height": 99.58,
        "image": {
         "levels": [
          {
           "height": 29,
           "width": 29,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_4.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.playList_FC57E1F8_DD52_C41C_41E0_9EA04A8DB085.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_B18C9891_BE47_F2A6_41BB_93C5F6C58F04",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1414.57,
        "width": 114.23,
        "y": 1765.24,
        "height": 110.17,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_5_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 1414.57,
        "y": 1765.24,
        "width": 114.23,
        "height": 110.17,
        "image": {
         "levels": [
          {
           "height": 32,
           "width": 33,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_5.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.playList_FC5641F8_DD52_C41C_41E0_44C889ADD87C.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_B18C8891_BE47_F2A6_41BC_277AF44A5442",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 2120.09,
        "width": 137.06,
        "y": 3009.72,
        "height": 118.33,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 17,
           "width": 20,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_6_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 2120.09,
        "y": 3009.72,
        "width": 137.06,
        "height": 118.33,
        "image": {
         "levels": [
          {
           "height": 35,
           "width": 40,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_6.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.playList_FC5691F8_DD52_C41C_41DA_CA95F03F4AD1.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_B18CF891_BE47_F2A6_41DF_913CCAE3DC89",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1641.6,
        "width": 130.85,
        "y": 2501.91,
        "height": 124.53,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 18,
           "width": 19,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_7_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 1641.6,
        "y": 2501.91,
        "width": 130.85,
        "height": 124.53,
        "image": {
         "levels": [
          {
           "height": 36,
           "width": 38,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_7.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.playList_FC5561F9_DD52_C41C_41EA_983901ABEB21.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_B18C2891_BE47_F2A6_41CD_D4DAD782762A",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 2532.34,
        "width": 130.85,
        "y": 3002.06,
        "height": 126.02,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 18,
           "width": 19,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_8_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 2532.34,
        "y": 3002.06,
        "width": 130.85,
        "height": 126.02,
        "image": {
         "levels": [
          {
           "height": 37,
           "width": 38,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_8.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.playList_FC5581F9_DD52_C41C_41E4_B5D620009116.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_B18C1891_BE47_F2A6_41D6_FBE9C27AAAE7",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 3707.81,
        "width": 105.27,
        "y": 1934.02,
        "height": 113.09,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 15,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_9_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 3707.81,
        "y": 1934.02,
        "width": 105.27,
        "height": 113.09,
        "image": {
         "levels": [
          {
           "height": 33,
           "width": 31,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_9.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.playList_FC5461F9_DD52_C41C_41D3_B52EEFEC2044.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_B18FB891_BE47_F2A6_41BE_AA69D28AEEB1",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 4042.61,
        "width": 113.65,
        "y": 1068.04,
        "height": 96.84,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 14,
           "width": 16,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_10_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 4042.61,
        "y": 1068.04,
        "width": 113.65,
        "height": 96.84,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 33,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_10.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.playList_FC5491FA_DD52_C41C_41E9_30BA682FED90.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_B18F9891_BE47_F2A6_41CC_5BEB02683D7F",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 4045.85,
        "width": 120.05,
        "y": 2443,
        "height": 99.46,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 14,
           "width": 17,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_11_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 4045.85,
        "y": 2443,
        "width": 120.05,
        "height": 99.46,
        "image": {
         "levels": [
          {
           "height": 29,
           "width": 35,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_11.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.playList_FC5B11FB_DD52_C41C_41DD_F3B381D58AF8.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_B18F8891_BE47_F2A6_416B_EA8A7C129102",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 3490.79,
        "width": 119.65,
        "y": 1233.28,
        "height": 96.45,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 14,
           "width": 17,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_12_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 3490.79,
        "y": 1233.28,
        "width": 119.65,
        "height": 96.45,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 35,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_12.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.playList_FC5BE1FB_DD52_C41C_41DE_40EDC75F3831.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_B18FF891_BE47_F2A6_41CF_F9D438DBCA2D",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 2581.22,
        "width": 113.7,
        "y": 1169.66,
        "height": 105.03,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 15,
           "width": 16,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_13_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 2581.22,
        "y": 1169.66,
        "width": 113.7,
        "height": 105.03,
        "image": {
         "levels": [
          {
           "height": 31,
           "width": 33,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_13.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.playList_FC5A61FC_DD52_C414_41C8_57E12C0A122B.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_B18FC891_BE47_F2A6_41D5_F0060334E0E9",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 4870.92,
        "width": 101.03,
        "y": 1715.46,
        "height": 104.36,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 15,
           "width": 14,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_14_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 4870.92,
        "y": 1715.46,
        "width": 101.03,
        "height": 104.36,
        "image": {
         "levels": [
          {
           "height": 30,
           "width": 29,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_14.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.playList_FC5AB1FD_DD52_C414_41C6_007E522DCC59.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_B18F3891_BE47_F2A6_41A6_514E7434CBF4",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 4823.22,
        "width": 100.32,
        "y": 2333.43,
        "height": 104.17,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 15,
           "width": 14,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_15_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 4823.22,
        "y": 2333.43,
        "width": 100.32,
        "height": 104.17,
        "image": {
         "levels": [
          {
           "height": 30,
           "width": 29,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_15.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.playList_FC5921FD_DD52_C414_41D7_4AAEB64B0F95.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_B18F2891_BE47_F2A6_41DA_47EFCEEE9523",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 5192.76,
        "width": 119.86,
        "y": 3746.69,
        "height": 115.15,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 17,
           "width": 17,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_16_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 5192.76,
        "y": 3746.69,
        "width": 119.86,
        "height": 115.15,
        "image": {
         "levels": [
          {
           "height": 34,
           "width": 35,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_16.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_AC9EA376_BE45_F643_41AD_29464090B9C9",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 782.96,
        "width": 116.03,
        "y": 2222.39,
        "height": 115.94,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_17_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 782.96,
        "y": 2222.39,
        "width": 116.03,
        "height": 115.94,
        "image": {
         "levels": [
          {
           "height": 34,
           "width": 34,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_17.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.playList_FCD261F4_DD52_C414_41DC_85D8A7FFB092.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_AC9BFE71_BE4C_AE44_41D1_9E761F12726B",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 786.79,
        "width": 117.4,
        "y": 2709.28,
        "height": 125.44,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 17,
           "width": 16,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_18_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
       },
       "image": {
        "x": 786.79,
        "y": 2709.28,
        "width": 117.4,
        "height": 125.44,
        "image": {
         "levels": [
          {
           "height": 37,
           "width": 34,
           "url": "media/map_B18DC891_BE47_F2A6_41DE_54A73B03D256_HS_18.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      }
     ],
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayOutsideOpacity": 0.15,
     "initialZoomFactor": 1,
     "fieldOfViewOverlayRadiusScale": 0.08,
     "class": "Map"
    },
    "y": 2280.35,
    "angle": 177.23,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041b\u0435\u0441\u0442\u043d\u0438\u0446\u0430 ( 13)",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 93.6,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AAD83D98_8443_0EFE_41D0_E4FB5E8B95A4, this.camera_FC6E922D_DD52_C435_41C7_59180B9017DA); this.setMediaBehaviour(this.playList_FCD261F4_DD52_C414_41DC_85D8A7FFB092, 0, this.panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_855603EB_8A67_CC30_41DC_00D7620B02E9",
      "maps": [
       {
        "hfov": 34.32,
        "yaw": 46.44,
        "image": {
         "levels": [
          {
           "height": 167,
           "width": 200,
           "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 3.33
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 46.44,
        "hfov": 34.32,
        "image": {
         "levels": [
          {
           "height": 428,
           "width": 513,
           "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 3.33
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B, this.camera_FC9A423B_DD52_C41C_41E0_CC6A68B1A32C); this.setMediaBehaviour(this.playList_FCD2F1F4_DD52_C414_41D0_404AC1510DEC, 0, this.panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_859D25FF_8A7A_3410_41D7_A8AC4CD9F24D",
      "maps": [
       {
        "hfov": 11.01,
        "yaw": -73.42,
        "image": {
         "levels": [
          {
           "height": 118,
           "width": 94,
           "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -30.04
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -73.42,
        "hfov": 11.01,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 189,
           "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -30.04
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_t.jpg"
 },
 {
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "class": "MapPlayer",
  "viewerArea": "this.MapViewer"
 },
 {
  "id": "panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": -61.39,
   "class": "PanoramaCameraPosition",
   "pitch": -2.84
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_camera",
    "media": "this.panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15",
    "end": "this.trigger('tourEnded')",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_FC4A5206_DD52_C7F4_41E1_A927B1EEB662, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_FC4A5206_DD52_C7F4_41E1_A927B1EEB662",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_AAD83D98_8443_0EFE_41D0_E4FB5E8B95A4",
  "mapLocations": [
   {
    "x": 845.49,
    "map": "this.map_B18DC891_BE47_F2A6_41DE_54A73B03D256",
    "y": 2772,
    "angle": 178.63,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041c\u0430\u0441\u0441\u0430\u0436\u043d\u0430\u044f  6.7 \u043a\u0432.\u043c.",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_AAD83D98_8443_0EFE_41D0_E4FB5E8B95A4_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_AAD83D98_8443_0EFE_41D0_E4FB5E8B95A4_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_AAD83D98_8443_0EFE_41D0_E4FB5E8B95A4.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_AAD83D98_8443_0EFE_41D0_E4FB5E8B95A4_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 93.6,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15, this.camera_FE03B3DC_DD52_C41B_41E5_8E1F51E9C6DA); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_85A65ED4_8A79_D410_41DD_1361E5B8F807",
      "maps": [
       {
        "hfov": 24.1,
        "yaw": -177.58,
        "image": {
         "levels": [
          {
           "height": 169,
           "width": 182,
           "url": "media/panorama_AAD83D98_8443_0EFE_41D0_E4FB5E8B95A4_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.51
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -177.58,
        "hfov": 24.1,
        "image": {
         "levels": [
          {
           "height": 338,
           "width": 364,
           "url": "media/panorama_AAD83D98_8443_0EFE_41D0_E4FB5E8B95A4_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -9.51
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_AAD83D98_8443_0EFE_41D0_E4FB5E8B95A4_t.jpg"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_AAD83D98_8443_0EFE_41D0_E4FB5E8B95A4_camera",
  "timeToIdle": 10000,
  "initialPosition": {
   "hfov": 120,
   "yaw": 154.73,
   "class": "PanoramaCameraPosition",
   "pitch": -19.07
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "playList_FCD261F4_DD52_C414_41DC_85D8A7FFB092",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_AAD83D98_8443_0EFE_41D0_E4FB5E8B95A4_camera",
    "media": "this.panorama_AAD83D98_8443_0EFE_41D0_E4FB5E8B95A4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_FC4AD206_DD52_C7F4_41C8_B54F7CB7B839, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_FC4AD206_DD52_C7F4_41C8_B54F7CB7B839",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B",
  "mapLocations": [
   {
    "x": 1326.57,
    "map": "this.map_B18DC891_BE47_F2A6_41DE_54A73B03D256",
    "y": 2322.5,
    "angle": 251.68,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041a\u043e\u0440\u0438\u0434\u043e\u0440 - 4  15.1 \u043a\u0432.\u043c.",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 93.6,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AAD2C628_8443_1DDE_41CF_95DA47F59BAB, this.camera_FCA85295_DD52_C414_4192_12C071EB6C55); this.setMediaBehaviour(this.playList_FC5641F8_DD52_C41C_41E0_44C889ADD87C, 0, this.panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B341DE00_84C7_0DCF_41DF_E47AC751C389",
      "maps": [
       {
        "hfov": 26.88,
        "yaw": -83.37,
        "image": {
         "levels": [
          {
           "height": 158,
           "width": 200,
           "url": "media/panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -3.86
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -83.37,
        "hfov": 26.88,
        "image": {
         "levels": [
          {
           "height": 319,
           "width": 402,
           "url": "media/panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -3.86
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AAC5D95D_8443_1676_41B0_A85142D761FF, this.camera_FCD682A0_DD52_C42C_41E9_A192C55C9893); this.setMediaBehaviour(this.playList_FC5771F7_DD52_C414_41DD_1C2737E45968, 0, this.panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B1041DA7_84C1_0ED0_41DF_4DB788BF4B43",
      "maps": [
       {
        "hfov": 21.5,
        "yaw": 166.47,
        "image": {
         "levels": [
          {
           "height": 129,
           "width": 161,
           "url": "media/panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -7.13
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 166.47,
        "hfov": 21.5,
        "image": {
         "levels": [
          {
           "height": 259,
           "width": 323,
           "url": "media/panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -7.13
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AADD816A_8443_1652_41DB_865339C41F5D, this.camera_FCB4F27B_DD52_C41C_41E7_89F6C6CE9D7B); this.setMediaBehaviour(this.playList_FC5581F9_DD52_C41C_41E4_B5D620009116, 0, this.panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B071D262_84C6_FA53_41CF_1622F3D5146C",
      "maps": [
       {
        "hfov": 6.15,
        "yaw": -174.73,
        "image": {
         "levels": [
          {
           "height": 37,
           "width": 47,
           "url": "media/panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -15.98
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -174.73,
        "hfov": 6.15,
        "image": {
         "levels": [
          {
           "height": 75,
           "width": 95,
           "url": "media/panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -15.98
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15, this.camera_FCC362AA_DD52_C43C_41C0_25DF8D0D9482); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_9B7A89FC_8A7E_7C10_41C8_73257A53F220",
      "maps": [
       {
        "hfov": 16.61,
        "yaw": -22.8,
        "image": {
         "levels": [
          {
           "height": 151,
           "width": 149,
           "url": "media/panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -33.85
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -22.8,
        "hfov": 16.61,
        "image": {
         "levels": [
          {
           "height": 303,
           "width": 298,
           "url": "media/panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -33.85
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AAC24342_8443_3A52_419B_779DD42F4C04, this.camera_FCA31286_DD52_C4F4_41D4_97DD27CED600); this.setMediaBehaviour(this.playList_FC50E1F7_DD52_C414_41DE_5C72A1FC2966, 0, this.panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_963EB246_8B9B_D366_41C9_2AD39283465B",
      "maps": [
       {
        "hfov": 9.81,
        "yaw": -175.49,
        "image": {
         "levels": [
          {
           "height": 61,
           "width": 82,
           "url": "media/panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -27.21
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -175.49,
        "hfov": 9.81,
        "image": {
         "levels": [
          {
           "height": 123,
           "width": 164,
           "url": "media/panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -27.21
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B_t.jpg"
 },
 {
  "id": "panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": -173.38,
   "class": "PanoramaCameraPosition",
   "pitch": -10.04
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "playList_FCD2F1F4_DD52_C414_41D0_404AC1510DEC",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B_camera",
    "media": "this.panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_FC4AB206_DD52_C7F4_41E1_C6A5440DE938, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_FC4AB206_DD52_C7F4_41E1_C6A5440DE938",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_AAC24342_8443_3A52_419B_779DD42F4C04",
  "mapLocations": [
   {
    "x": 2740.28,
    "map": "this.map_B18DC891_BE47_F2A6_41DE_54A73B03D256",
    "y": 2159.06,
    "angle": 335.54,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041a\u043e\u0440\u0438\u0434\u043e\u0440 -1  15.1 \u043a\u0432.\u043c.",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_AAC24342_8443_3A52_419B_779DD42F4C04_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_AAC24342_8443_3A52_419B_779DD42F4C04_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_AAC24342_8443_3A52_419B_779DD42F4C04.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_AAC24342_8443_3A52_419B_779DD42F4C04_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 93.6,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B, this.camera_FF1512E3_DD52_C42C_41B5_DDE569756551); this.setMediaBehaviour(this.playList_FCD2F1F4_DD52_C414_41D0_404AC1510DEC, 0, this.panorama_AAC24342_8443_3A52_419B_779DD42F4C04)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B043F1AD_84C1_76D1_41A1_88E5C1B7639D",
      "maps": [
       {
        "hfov": 11.65,
        "yaw": -39.42,
        "image": {
         "levels": [
          {
           "height": 115,
           "width": 103,
           "url": "media/panorama_AAC24342_8443_3A52_419B_779DD42F4C04_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -33.19
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -39.42,
        "hfov": 11.65,
        "image": {
         "levels": [
          {
           "height": 231,
           "width": 207,
           "url": "media/panorama_AAC24342_8443_3A52_419B_779DD42F4C04_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -33.19
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AADA8CB5_8443_0E36_41DE_DD7648560343, this.camera_FCEB62D0_DD52_C46C_41EB_2876C215FE4E); this.setMediaBehaviour(this.playList_FC5561F9_DD52_C41C_41EA_983901ABEB21, 0, this.panorama_AAC24342_8443_3A52_419B_779DD42F4C04)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_BCB7A134_84C1_7630_4196_DBDB58A29D5F",
      "maps": [
       {
        "hfov": 37.83,
        "yaw": -152.33,
        "image": {
         "levels": [
          {
           "height": 184,
           "width": 199,
           "url": "media/panorama_AAC24342_8443_3A52_419B_779DD42F4C04_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.53
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -152.33,
        "hfov": 37.83,
        "image": {
         "levels": [
          {
           "height": 533,
           "width": 578,
           "url": "media/panorama_AAC24342_8443_3A52_419B_779DD42F4C04_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -12.53
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AADD816A_8443_1652_41DB_865339C41F5D, this.camera_FCF9D2BF_DD52_C414_41E5_602ED927C21F); this.setMediaBehaviour(this.playList_FC5581F9_DD52_C41C_41E4_B5D620009116, 0, this.panorama_AAC24342_8443_3A52_419B_779DD42F4C04)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_9093FEDA_8BEF_F368_41C7_65BB6EDB7CB4",
      "maps": [
       {
        "hfov": 25.23,
        "yaw": 92.94,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 185,
           "url": "media/panorama_AAC24342_8443_3A52_419B_779DD42F4C04_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -5.59
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 92.94,
        "hfov": 25.23,
        "image": {
         "levels": [
          {
           "height": 408,
           "width": 378,
           "url": "media/panorama_AAC24342_8443_3A52_419B_779DD42F4C04_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -5.59
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_AAC24342_8443_3A52_419B_779DD42F4C04_t.jpg"
 },
 {
  "id": "panorama_AAC24342_8443_3A52_419B_779DD42F4C04_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": -157.44,
   "class": "PanoramaCameraPosition",
   "pitch": -4.41
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "playList_FC50E1F7_DD52_C414_41DE_5C72A1FC2966",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_AAC24342_8443_3A52_419B_779DD42F4C04_camera",
    "media": "this.panorama_AAC24342_8443_3A52_419B_779DD42F4C04",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_FC493206_DD52_C7F5_41DD_E82E6D807C9D, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_FC493206_DD52_C7F5_41DD_E82E6D807C9D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_AAC5D95D_8443_1676_41B0_A85142D761FF",
  "mapLocations": [
   {
    "x": 2224.87,
    "map": "this.map_B18DC891_BE47_F2A6_41DE_54A73B03D256",
    "y": 1201.33,
    "angle": 39,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041a\u0430\u0431\u0438\u043d\u0435\u0442 1(2)  15.5 \u043a\u0432.\u043c.",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_AAC5D95D_8443_1676_41B0_A85142D761FF_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_AAC5D95D_8443_1676_41B0_A85142D761FF_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_AAC5D95D_8443_1676_41B0_A85142D761FF.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_AAC5D95D_8443_1676_41B0_A85142D761FF_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B, this.camera_FC8E326C_DD52_C43B_41CC_D6C1A653B83A); this.setMediaBehaviour(this.playList_FCD2F1F4_DD52_C414_41D0_404AC1510DEC, 0, this.panorama_AAC5D95D_8443_1676_41B0_A85142D761FF)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B08EB473_84C3_3E31_41B8_20F064D2D858",
      "maps": [
       {
        "hfov": 19.14,
        "yaw": 139.84,
        "image": {
         "levels": [
          {
           "height": 154,
           "width": 143,
           "url": "media/panorama_AAC5D95D_8443_1676_41B0_A85142D761FF_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.98
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 139.84,
        "hfov": 19.14,
        "image": {
         "levels": [
          {
           "height": 308,
           "width": 286,
           "url": "media/panorama_AAC5D95D_8443_1676_41B0_A85142D761FF_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -1.98
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AADFBBB8_8443_0A3E_41BB_0C444201F1AC, this.camera_FC80724F_DD52_C474_41D0_F264DE0114EB); this.setMediaBehaviour(this.playList_FC57E1F8_DD52_C41C_41E0_9EA04A8DB085, 0, this.panorama_AAC5D95D_8443_1676_41B0_A85142D761FF)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_BFE0F5DB_84C1_1E71_41D6_51A846F44495",
      "maps": [
       {
        "hfov": 14.05,
        "yaw": 156.5,
        "image": {
         "levels": [
          {
           "height": 91,
           "width": 114,
           "url": "media/panorama_AAC5D95D_8443_1676_41B0_A85142D761FF_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -23.41
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 156.5,
        "hfov": 14.05,
        "image": {
         "levels": [
          {
           "height": 183,
           "width": 228,
           "url": "media/panorama_AAC5D95D_8443_1676_41B0_A85142D761FF_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -23.41
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_AAC5D95D_8443_1676_41B0_A85142D761FF_t.jpg"
 },
 {
  "id": "panorama_AAC5D95D_8443_1676_41B0_A85142D761FF_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": -177.36,
   "class": "PanoramaCameraPosition",
   "pitch": -7.38
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "playList_FC5771F7_DD52_C414_41DD_1C2737E45968",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_AAC5D95D_8443_1676_41B0_A85142D761FF_camera",
    "media": "this.panorama_AAC5D95D_8443_1676_41B0_A85142D761FF",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_FC499207_DD52_C7F4_41C4_8955C66140FD, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_FC499207_DD52_C7F4_41C4_8955C66140FD",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_AADFBBB8_8443_0A3E_41BB_0C444201F1AC",
  "mapLocations": [
   {
    "x": 1486.41,
    "map": "this.map_B18DC891_BE47_F2A6_41DE_54A73B03D256",
    "y": 1830.42,
    "angle": -133.29,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041a\u0430\u0431\u0438\u043d\u0435\u0442 1   15,5 \u043a\u0432.\u043c.",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_AADFBBB8_8443_0A3E_41BB_0C444201F1AC_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_AADFBBB8_8443_0A3E_41BB_0C444201F1AC_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_AADFBBB8_8443_0A3E_41BB_0C444201F1AC.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_AADFBBB8_8443_0A3E_41BB_0C444201F1AC_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 90,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B, this.camera_FF815366_DD52_C434_419E_B0BE1753DB4C); this.setMediaBehaviour(this.playList_FCD2F1F4_DD52_C414_41D0_404AC1510DEC, 0, this.panorama_AADFBBB8_8443_0A3E_41BB_0C444201F1AC)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B028AD53_84C7_0E71_41C2_0D189C8BBF37",
      "maps": [
       {
        "hfov": 16.99,
        "yaw": -131.5,
        "image": {
         "levels": [
          {
           "height": 154,
           "width": 128,
           "url": "media/panorama_AADFBBB8_8443_0A3E_41BB_0C444201F1AC_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -7.76
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -131.5,
        "hfov": 16.99,
        "image": {
         "levels": [
          {
           "height": 308,
           "width": 256,
           "url": "media/panorama_AADFBBB8_8443_0A3E_41BB_0C444201F1AC_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -7.76
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AAC5D95D_8443_1676_41B0_A85142D761FF, this.camera_FF97035D_DD52_C414_41E3_529F36A020E6); this.setMediaBehaviour(this.playList_FC5771F7_DD52_C414_41DD_1C2737E45968, 0, this.panorama_AADFBBB8_8443_0A3E_41BB_0C444201F1AC)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_A1367A51_BE5C_F626_41D8_75293133B699",
      "maps": [
       {
        "hfov": 12.65,
        "yaw": -177.89,
        "image": {
         "levels": [
          {
           "height": 92,
           "width": 102,
           "url": "media/panorama_AADFBBB8_8443_0A3E_41BB_0C444201F1AC_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -22.95
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -177.89,
        "hfov": 12.65,
        "image": {
         "levels": [
          {
           "height": 185,
           "width": 205,
           "url": "media/panorama_AADFBBB8_8443_0A3E_41BB_0C444201F1AC_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -22.95
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_AADFBBB8_8443_0A3E_41BB_0C444201F1AC_t.jpg"
 },
 {
  "id": "panorama_AADFBBB8_8443_0A3E_41BB_0C444201F1AC_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": 157.43,
   "class": "PanoramaCameraPosition",
   "pitch": 0.49
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "playList_FC57E1F8_DD52_C41C_41E0_9EA04A8DB085",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_AADFBBB8_8443_0A3E_41BB_0C444201F1AC_camera",
    "media": "this.panorama_AADFBBB8_8443_0A3E_41BB_0C444201F1AC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_FC486207_DD52_C7F4_41DC_3E324058B585, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_FC486207_DD52_C7F4_41DC_3E324058B585",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_AAD2C628_8443_1DDE_41CF_95DA47F59BAB",
  "mapLocations": [
   {
    "x": 2217.4,
    "map": "this.map_B18DC891_BE47_F2A6_41DE_54A73B03D256",
    "y": 3112.28,
    "angle": -215.12,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041a\u0430\u0431\u0438\u043d\u0435\u0442 4 (1)  13.7 \u043a\u0432.\u043c.",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_AAD2C628_8443_1DDE_41CF_95DA47F59BAB_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_AAD2C628_8443_1DDE_41CF_95DA47F59BAB_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_AAD2C628_8443_1DDE_41CF_95DA47F59BAB.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_AAD2C628_8443_1DDE_41CF_95DA47F59BAB_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 93.6,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.setMediaBehaviour(this.playList_FC5691F8_DD52_C41C_41DA_CA95F03F4AD1, 0, this.panorama_AAD2C628_8443_1DDE_41CF_95DA47F59BAB)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B6AFFABA_84C1_0A33_41CF_BD0F5C158098",
      "maps": [
       {
        "hfov": 13.33,
        "yaw": 175.85,
        "image": {
         "levels": [
          {
           "height": 101,
           "width": 118,
           "url": "media/panorama_AAD2C628_8443_1DDE_41CF_95DA47F59BAB_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -32.6
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 175.85,
        "hfov": 13.33,
        "image": {
         "levels": [
          {
           "height": 202,
           "width": 236,
           "url": "media/panorama_AAD2C628_8443_1DDE_41CF_95DA47F59BAB_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -32.6
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B, this.camera_FF66934F_DD52_C474_41C8_A291D91B5F18); this.setMediaBehaviour(this.playList_FCD2F1F4_DD52_C414_41D0_404AC1510DEC, 0, this.panorama_AAD2C628_8443_1DDE_41CF_95DA47F59BAB)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_BF13D725_84C3_3BD1_41D1_522AE1C64921",
      "maps": [
       {
        "hfov": 18.48,
        "yaw": 176.66,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 138,
           "url": "media/panorama_AAD2C628_8443_1DDE_41CF_95DA47F59BAB_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.99
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 176.66,
        "hfov": 18.48,
        "image": {
         "levels": [
          {
           "height": 264,
           "width": 277,
           "url": "media/panorama_AAD2C628_8443_1DDE_41CF_95DA47F59BAB_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -6.99
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_AAD2C628_8443_1DDE_41CF_95DA47F59BAB_t.jpg"
 },
 {
  "id": "panorama_AAD2C628_8443_1DDE_41CF_95DA47F59BAB_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": 176.95,
   "class": "PanoramaCameraPosition",
   "pitch": -10.7
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "playList_FC5641F8_DD52_C41C_41E0_44C889ADD87C",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_AAD2C628_8443_1DDE_41CF_95DA47F59BAB_camera",
    "media": "this.panorama_AAD2C628_8443_1DDE_41CF_95DA47F59BAB",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_FC48F207_DD52_C7F4_41DB_705AEB6FFF09, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_FC48F207_DD52_C7F4_41DB_705AEB6FFF09",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_AADBB70A_8443_3BD3_419C_F8D55F4880C0",
  "mapLocations": [
   {
    "x": 1724.76,
    "map": "this.map_B18DC891_BE47_F2A6_41DE_54A73B03D256",
    "y": 2588.16,
    "angle": 302.15,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041a\u0430\u0431\u0438\u043d\u0435\u0442 4  13.7 \u043a\u0432.\u043c.",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_AADBB70A_8443_3BD3_419C_F8D55F4880C0_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_AADBB70A_8443_3BD3_419C_F8D55F4880C0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_AADBB70A_8443_3BD3_419C_F8D55F4880C0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_AADBB70A_8443_3BD3_419C_F8D55F4880C0_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 92.4,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AAD9E418_8443_1DFE_41D4_644ADF80DA9B, this.camera_FF58B32D_DD52_C434_41C7_2B3C8054479F); this.setMediaBehaviour(this.playList_FCD2F1F4_DD52_C414_41D0_404AC1510DEC, 0, this.panorama_AADBB70A_8443_3BD3_419C_F8D55F4880C0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_9B93E555_8A66_54EE_41D7_AF4D109AE08F",
      "maps": [
       {
        "hfov": 30.65,
        "yaw": 110.07,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 172,
           "url": "media/panorama_AADBB70A_8443_3BD3_419C_F8D55F4880C0_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -8.13
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 110.07,
        "hfov": 30.65,
        "image": {
         "levels": [
          {
           "height": 537,
           "width": 462,
           "url": "media/panorama_AADBB70A_8443_3BD3_419C_F8D55F4880C0_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -8.13
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AAD2C628_8443_1DDE_41CF_95DA47F59BAB, this.camera_FF2C2322_DD52_C42C_41A7_743042125E81); this.setMediaBehaviour(this.playList_FC5641F8_DD52_C41C_41E0_44C889ADD87C, 0, this.panorama_AADBB70A_8443_3BD3_419C_F8D55F4880C0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_A11B7607_BE5C_9E2A_41B4_3108A0AD5A63",
      "maps": [
       {
        "hfov": 16.58,
        "yaw": -175.7,
        "image": {
         "levels": [
          {
           "height": 133,
           "width": 133,
           "url": "media/panorama_AADBB70A_8443_3BD3_419C_F8D55F4880C0_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -21.84
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -175.7,
        "hfov": 16.58,
        "image": {
         "levels": [
          {
           "height": 266,
           "width": 266,
           "url": "media/panorama_AADBB70A_8443_3BD3_419C_F8D55F4880C0_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -21.84
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_AADBB70A_8443_3BD3_419C_F8D55F4880C0_t.jpg"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_AADBB70A_8443_3BD3_419C_F8D55F4880C0_camera",
  "timeToIdle": 10000,
  "initialPosition": {
   "hfov": 120,
   "yaw": -148.62,
   "class": "PanoramaCameraPosition",
   "pitch": -11.48
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "playList_FC5691F8_DD52_C41C_41DA_CA95F03F4AD1",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_AADBB70A_8443_3BD3_419C_F8D55F4880C0_camera",
    "media": "this.panorama_AADBB70A_8443_3BD3_419C_F8D55F4880C0",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_FC4F5207_DD52_C7F4_41E4_A3E321D621F9, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_FC4F5207_DD52_C7F4_41E4_A3E321D621F9",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_AADA8CB5_8443_0E36_41DE_DD7648560343",
  "mapLocations": [
   {
    "x": 2615.55,
    "map": "this.map_B18DC891_BE47_F2A6_41DE_54A73B03D256",
    "y": 3096.43,
    "angle": 224.19,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041a\u0430\u0431\u0438\u043d\u0435\u0442 - 3   15.3 \u043a\u0432.\u043c.",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_AADA8CB5_8443_0E36_41DE_DD7648560343_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_AADA8CB5_8443_0E36_41DE_DD7648560343_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_AADA8CB5_8443_0E36_41DE_DD7648560343.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_AADA8CB5_8443_0E36_41DE_DD7648560343_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AAC24342_8443_3A52_419B_779DD42F4C04, this.camera_FCCF02B4_DD52_C414_41D4_6100F73ACE65); this.setMediaBehaviour(this.playList_FC50E1F7_DD52_C414_41DE_5C72A1FC2966, 0, this.panorama_AADA8CB5_8443_0E36_41DE_DD7648560343)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B3F25511_84FF_3FF0_41DE_FCFFA6651926",
      "maps": [
       {
        "hfov": 13.46,
        "yaw": 135.96,
        "image": {
         "levels": [
          {
           "height": 108,
           "width": 100,
           "url": "media/panorama_AADA8CB5_8443_0E36_41DE_DD7648560343_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -0.91
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 135.96,
        "hfov": 13.46,
        "image": {
         "levels": [
          {
           "height": 217,
           "width": 201,
           "url": "media/panorama_AADA8CB5_8443_0E36_41DE_DD7648560343_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -0.91
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_AADA8CB5_8443_0E36_41DE_DD7648560343_t.jpg"
 },
 {
  "id": "panorama_AADA8CB5_8443_0E36_41DE_DD7648560343_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": 165.74,
   "class": "PanoramaCameraPosition",
   "pitch": 2.51
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "playList_FC5561F9_DD52_C41C_41EA_983901ABEB21",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_AADA8CB5_8443_0E36_41DE_DD7648560343_camera",
    "media": "this.panorama_AADA8CB5_8443_0E36_41DE_DD7648560343",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_FC49B208_DD52_C7FC_41A5_52C7C64C93AB, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_FC49B208_DD52_C7FC_41A5_52C7C64C93AB",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_AADD816A_8443_1652_41DB_865339C41F5D",
  "mapLocations": [
   {
    "x": 3768.38,
    "map": "this.map_B18DC891_BE47_F2A6_41DE_54A73B03D256",
    "y": 1998.65,
    "angle": 89.9,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041a\u043e\u0440\u0438\u0434\u043e\u0440 -2  15.1 \u043a\u0432.\u043c.",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_AADD816A_8443_1652_41DB_865339C41F5D_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_AADD816A_8443_1652_41DB_865339C41F5D_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_AADD816A_8443_1652_41DB_865339C41F5D.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_AADD816A_8443_1652_41DB_865339C41F5D_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 93.6,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AAD775D1_8443_FE71_41DA_C09F572587A0, this.camera_FFCAC3A4_DD52_C434_41B0_F191C02FD5D1); this.setMediaBehaviour(this.playList_FC5491FA_DD52_C41C_41E9_30BA682FED90, 0, this.panorama_AADD816A_8443_1652_41DB_865339C41F5D)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_BC058EE2_84DF_0A53_41C6_322B35588EB1",
      "maps": [
       {
        "hfov": 42,
        "yaw": 53.03,
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 200,
           "url": "media/panorama_AADD816A_8443_1652_41DB_865339C41F5D_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.71
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 53.03,
        "hfov": 42,
        "image": {
         "levels": [
          {
           "height": 421,
           "width": 627,
           "url": "media/panorama_AADD816A_8443_1652_41DB_865339C41F5D_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -1.71
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AAD8ACE6_8443_0E53_41C4_FCDA69D81231, this.camera_FFF4A3B5_DD52_C415_41E6_D5CB505F64A9); this.setMediaBehaviour(this.playList_FC5461F9_DD52_C41C_41D3_B52EEFEC2044, 0, this.panorama_AADD816A_8443_1652_41DB_865339C41F5D)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_BE253FA7_84C1_0AD1_4187_7266321D4E5A",
      "maps": [
       {
        "hfov": 16.31,
        "yaw": -46.7,
        "image": {
         "levels": [
          {
           "height": 120,
           "width": 122,
           "url": "media/panorama_AADD816A_8443_1652_41DB_865339C41F5D_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -5.75
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -46.7,
        "hfov": 16.31,
        "image": {
         "levels": [
          {
           "height": 241,
           "width": 244,
           "url": "media/panorama_AADD816A_8443_1652_41DB_865339C41F5D_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -5.75
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_B7C49195_8443_36F1_41DF_67D52DBACFD6, this.camera_FFAEE38B_DD52_C4FD_41E1_E7218DC4AA33); this.setMediaBehaviour(this.playList_FC5B11FB_DD52_C41C_41DD_F3B381D58AF8, 0, this.panorama_AADD816A_8443_1652_41DB_865339C41F5D)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_BEF8FD06_84C1_0FD3_41C6_B4C8ACE7364A",
      "maps": [
       {
        "hfov": 16.35,
        "yaw": -142.91,
        "image": {
         "levels": [
          {
           "height": 137,
           "width": 122,
           "url": "media/panorama_AADD816A_8443_1652_41DB_865339C41F5D_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -4.11
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -142.91,
        "hfov": 16.35,
        "image": {
         "levels": [
          {
           "height": 274,
           "width": 244,
           "url": "media/panorama_AADD816A_8443_1652_41DB_865339C41F5D_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -4.11
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AAC24342_8443_3A52_419B_779DD42F4C04, this.camera_FFD8F395_DD52_C415_419E_59562F15A996); this.setMediaBehaviour(this.playList_FC50E1F7_DD52_C414_41DE_5C72A1FC2966, 0, this.panorama_AADD816A_8443_1652_41DB_865339C41F5D)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B82FFAB7_84C1_0A31_41AC_1388CE4BEE66",
      "maps": [
       {
        "hfov": 13.27,
        "yaw": -169.97,
        "image": {
         "levels": [
          {
           "height": 110,
           "width": 104,
           "url": "media/panorama_AADD816A_8443_1652_41DB_865339C41F5D_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.16
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -169.97,
        "hfov": 13.27,
        "image": {
         "levels": [
          {
           "height": 221,
           "width": 209,
           "url": "media/panorama_AADD816A_8443_1652_41DB_865339C41F5D_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -19.16
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_B5B7E7EC_847F_7A57_41E0_A42EC37CFDAD, this.camera_FFBC2381_DD52_C4ED_41DB_8CCBCABEC4C5); this.setMediaBehaviour(this.playList_FC5A61FC_DD52_C414_41C8_57E12C0A122B, 0, this.panorama_AADD816A_8443_1652_41DB_865339C41F5D)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_91841B4F_8BFA_716A_41C7_75650D1302C1",
      "maps": [
       {
        "hfov": 23.07,
        "yaw": -21.36,
        "image": {
         "levels": [
          {
           "height": 189,
           "width": 174,
           "url": "media/panorama_AADD816A_8443_1652_41DB_865339C41F5D_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -8.86
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -21.36,
        "hfov": 23.07,
        "image": {
         "levels": [
          {
           "height": 378,
           "width": 348,
           "url": "media/panorama_AADD816A_8443_1652_41DB_865339C41F5D_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -8.86
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_AADD816A_8443_1652_41DB_865339C41F5D_t.jpg"
 },
 {
  "id": "panorama_AADD816A_8443_1652_41DB_865339C41F5D_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": -22.82,
   "class": "PanoramaCameraPosition",
   "pitch": -2.19
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "playList_FC5581F9_DD52_C41C_41E4_B5D620009116",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_AADD816A_8443_1652_41DB_865339C41F5D_camera",
    "media": "this.panorama_AADD816A_8443_1652_41DB_865339C41F5D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_FC486208_DD52_C7FC_41E9_35465CA7DAD9, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_FC486208_DD52_C7FC_41E9_35465CA7DAD9",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_AAD8ACE6_8443_0E53_41C4_FCDA69D81231",
  "mapLocations": [
   {
    "x": 4124,
    "map": "this.map_B18DC891_BE47_F2A6_41DE_54A73B03D256",
    "y": 1135.07,
    "angle": 339.24,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u0421.\u0423. 5.9 \u043a\u0432.\u043c.",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_AAD8ACE6_8443_0E53_41C4_FCDA69D81231_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_AAD8ACE6_8443_0E53_41C4_FCDA69D81231_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_AAD8ACE6_8443_0E53_41C4_FCDA69D81231.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_AAD8ACE6_8443_0E53_41C4_FCDA69D81231_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 93.6,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AADD816A_8443_1652_41DB_865339C41F5D, this.camera_FF22C317_DD52_C414_41DB_2C81DD3585E2); this.setMediaBehaviour(this.playList_FC5581F9_DD52_C41C_41E4_B5D620009116, 0, this.panorama_AAD8ACE6_8443_0E53_41C4_FCDA69D81231)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B2EE2BE7_84C1_0A51_41B3_929955009FD7",
      "maps": [
       {
        "hfov": 17.73,
        "yaw": -137.26,
        "image": {
         "levels": [
          {
           "height": 156,
           "width": 135,
           "url": "media/panorama_AAD8ACE6_8443_0E53_41C4_FCDA69D81231_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.4
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -137.26,
        "hfov": 17.73,
        "image": {
         "levels": [
          {
           "height": 312,
           "width": 271,
           "url": "media/panorama_AAD8ACE6_8443_0E53_41C4_FCDA69D81231_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -12.4
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_AAD8ACE6_8443_0E53_41C4_FCDA69D81231_t.jpg"
 },
 {
  "id": "panorama_AAD8ACE6_8443_0E53_41C4_FCDA69D81231_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": 157.75,
   "class": "PanoramaCameraPosition",
   "pitch": -3.01
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "playList_FC5461F9_DD52_C41C_41D3_B52EEFEC2044",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_AAD8ACE6_8443_0E53_41C4_FCDA69D81231_camera",
    "media": "this.panorama_AAD8ACE6_8443_0E53_41C4_FCDA69D81231",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_FC489208_DD52_C7FC_41E9_7D3AB43B2610, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_FC489208_DD52_C7FC_41E9_7D3AB43B2610",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_AAD775D1_8443_FE71_41DA_C09F572587A0",
  "mapLocations": [
   {
    "x": 4124,
    "map": "this.map_B18DC891_BE47_F2A6_41DE_54A73B03D256",
    "y": 2518.3,
    "angle": 31.61,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041a\u043e\u043c\u043d\u0430\u0442\u0430 \u043e\u0445\u0440\u0430\u043d\u044b 12 \u043a\u0432.\u043c.",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_AAD775D1_8443_FE71_41DA_C09F572587A0_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_AAD775D1_8443_FE71_41DA_C09F572587A0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_AAD775D1_8443_FE71_41DA_C09F572587A0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_AAD775D1_8443_FE71_41DA_C09F572587A0_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 91.2,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AADD816A_8443_1652_41DB_865339C41F5D, this.camera_FFB21374_DD52_C414_41C4_E977A436FACB); this.setMediaBehaviour(this.playList_FC5581F9_DD52_C41C_41E4_B5D620009116, 0, this.panorama_AAD775D1_8443_FE71_41DA_C09F572587A0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_BD6FEAED_84C3_0A50_41DC_E411E3E315CB",
      "maps": [
       {
        "hfov": 16.38,
        "yaw": -71.06,
        "image": {
         "levels": [
          {
           "height": 126,
           "width": 122,
           "url": "media/panorama_AAD775D1_8443_FE71_41DA_C09F572587A0_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.1
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -71.06,
        "hfov": 16.38,
        "image": {
         "levels": [
          {
           "height": 252,
           "width": 244,
           "url": "media/panorama_AAD775D1_8443_FE71_41DA_C09F572587A0_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -2.1
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_AAD775D1_8443_FE71_41DA_C09F572587A0_t.jpg"
 },
 {
  "id": "panorama_AAD775D1_8443_FE71_41DA_C09F572587A0_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": 162.75,
   "class": "PanoramaCameraPosition",
   "pitch": -11.33
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "playList_FC5491FA_DD52_C41C_41E9_30BA682FED90",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_AAD775D1_8443_FE71_41DA_C09F572587A0_camera",
    "media": "this.panorama_AAD775D1_8443_FE71_41DA_C09F572587A0",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_FC4F4208_DD52_C7FC_41C1_0040F75B6BF8, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_FC4F4208_DD52_C7FC_41C1_0040F75B6BF8",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_B7C49195_8443_36F1_41DF_67D52DBACFD6",
  "mapLocations": [
   {
    "x": 3631.67,
    "map": "this.map_B18DC891_BE47_F2A6_41DE_54A73B03D256",
    "y": 1209.42,
    "angle": 398.8,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041a\u0430\u0431\u0438\u043d\u0435\u0442 - 2   16.7 \u043a\u0432.\u043c.",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B7C49195_8443_36F1_41DF_67D52DBACFD6_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_B7C49195_8443_36F1_41DF_67D52DBACFD6_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B7C49195_8443_36F1_41DF_67D52DBACFD6.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_B7C49195_8443_36F1_41DF_67D52DBACFD6_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 88.8,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AADD816A_8443_1652_41DB_865339C41F5D, this.camera_FFE573C6_DD52_C477_41D4_DE86CE4C7624); this.setMediaBehaviour(this.playList_FC5581F9_DD52_C41C_41E4_B5D620009116, 0, this.panorama_B7C49195_8443_36F1_41DF_67D52DBACFD6)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_BC0BCDEF_84C7_0E51_41D7_D38BEA5DC28B",
      "maps": [
       {
        "hfov": 14.11,
        "yaw": 126.52,
        "image": {
         "levels": [
          {
           "height": 96,
           "width": 105,
           "url": "media/panorama_B7C49195_8443_36F1_41DF_67D52DBACFD6_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.86
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 126.52,
        "hfov": 14.11,
        "image": {
         "levels": [
          {
           "height": 192,
           "width": 211,
           "url": "media/panorama_B7C49195_8443_36F1_41DF_67D52DBACFD6_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -2.86
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_B6698EE4_8443_0A56_41DD_450D49B6335F, this.camera_FE11E3D2_DD52_C46C_41C1_A3F1497C2033); this.setMediaBehaviour(this.playList_FC5BE1FB_DD52_C41C_41DE_40EDC75F3831, 0, this.panorama_B7C49195_8443_36F1_41DF_67D52DBACFD6)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_A05A3023_BE5C_926A_41B7_EC8626C6FF18",
      "maps": [
       {
        "hfov": 11.5,
        "yaw": -152.61,
        "image": {
         "levels": [
          {
           "height": 97,
           "width": 88,
           "url": "media/panorama_B7C49195_8443_36F1_41DF_67D52DBACFD6_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -13.49
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -152.61,
        "hfov": 11.5,
        "image": {
         "levels": [
          {
           "height": 195,
           "width": 176,
           "url": "media/panorama_B7C49195_8443_36F1_41DF_67D52DBACFD6_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -13.49
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_B7C49195_8443_36F1_41DF_67D52DBACFD6_t.jpg"
 },
 {
  "id": "panorama_B7C49195_8443_36F1_41DF_67D52DBACFD6_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": 166.1,
   "class": "PanoramaCameraPosition",
   "pitch": 1.04
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "playList_FC5B11FB_DD52_C41C_41DD_F3B381D58AF8",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_B7C49195_8443_36F1_41DF_67D52DBACFD6_camera",
    "media": "this.panorama_B7C49195_8443_36F1_41DF_67D52DBACFD6",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_FC4F3208_DD52_C7FC_41E7_4197E7C6F266, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_FC4F3208_DD52_C7FC_41E7_4197E7C6F266",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_B6698EE4_8443_0A56_41DD_450D49B6335F",
  "mapLocations": [
   {
    "x": 2599.66,
    "map": "this.map_B18DC891_BE47_F2A6_41DE_54A73B03D256",
    "y": 1165.96,
    "angle": -41.31,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041a\u0430\u0431\u0438\u043d\u0435\u0442 - 2(1)   16.7 \u043a\u0432.\u043c.",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6698EE4_8443_0A56_41DD_450D49B6335F_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_B6698EE4_8443_0A56_41DD_450D49B6335F_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B6698EE4_8443_0A56_41DD_450D49B6335F.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_B6698EE4_8443_0A56_41DD_450D49B6335F_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 93.6,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_B7C49195_8443_36F1_41DF_67D52DBACFD6, this.camera_FE3EA3F2_DD52_C42C_41EB_516FD306C8F2); this.setMediaBehaviour(this.playList_FC5B11FB_DD52_C41C_41DD_F3B381D58AF8, 0, this.panorama_B6698EE4_8443_0A56_41DD_450D49B6335F)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_BF416641_84C3_1A51_41C8_FF246FF821E5",
      "maps": [
       {
        "hfov": 9.53,
        "yaw": 139.04,
        "image": {
         "levels": [
          {
           "height": 88,
           "width": 74,
           "url": "media/panorama_B6698EE4_8443_0A56_41DD_450D49B6335F_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -18.14
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 139.04,
        "hfov": 9.53,
        "image": {
         "levels": [
          {
           "height": 176,
           "width": 149,
           "url": "media/panorama_B6698EE4_8443_0A56_41DD_450D49B6335F_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -18.14
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AAC24342_8443_3A52_419B_779DD42F4C04, this.camera_FE0CA3E8_DD52_C43B_41C3_E766C1372993); this.setMediaBehaviour(this.playList_FC50E1F7_DD52_C414_41DE_5C72A1FC2966, 0, this.panorama_B6698EE4_8443_0A56_41DD_450D49B6335F)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B9178A35_84C3_0A31_41BA_CE3AAABFF115",
      "maps": [
       {
        "hfov": 13.78,
        "yaw": 177.86,
        "image": {
         "levels": [
          {
           "height": 150,
           "width": 103,
           "url": "media/panorama_B6698EE4_8443_0A56_41DD_450D49B6335F_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -4.21
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 177.86,
        "hfov": 13.78,
        "image": {
         "levels": [
          {
           "height": 300,
           "width": 206,
           "url": "media/panorama_B6698EE4_8443_0A56_41DD_450D49B6335F_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -4.21
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_B6698EE4_8443_0A56_41DD_450D49B6335F_t.jpg"
 },
 {
  "id": "panorama_B6698EE4_8443_0A56_41DD_450D49B6335F_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": 169.53,
   "class": "PanoramaCameraPosition",
   "pitch": -1.85
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "playList_FC5BE1FB_DD52_C41C_41DE_40EDC75F3831",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_B6698EE4_8443_0A56_41DD_450D49B6335F_camera",
    "media": "this.panorama_B6698EE4_8443_0A56_41DD_450D49B6335F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_FC4FA208_DD52_C7FC_41DD_815FF177041F, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_FC4FA208_DD52_C7FC_41DD_815FF177041F",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_B5B7E7EC_847F_7A57_41E0_A42EC37CFDAD",
  "mapLocations": [
   {
    "x": 4942.99,
    "map": "this.map_B18DC891_BE47_F2A6_41DE_54A73B03D256",
    "y": 1782.46,
    "angle": 11.32,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041f\u043e\u0436\u0430\u0440\u043d\u0430\u044f \u043b\u0435\u0441\u0442\u043d\u0438\u0446\u0430 (18)",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B5B7E7EC_847F_7A57_41E0_A42EC37CFDAD_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_B5B7E7EC_847F_7A57_41E0_A42EC37CFDAD_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B5B7E7EC_847F_7A57_41E0_A42EC37CFDAD.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AADD816A_8443_1652_41DB_865339C41F5D, this.camera_FF0762F0_DD52_C42C_41BE_42ECDC2EAC1D); this.setMediaBehaviour(this.playList_FC5581F9_DD52_C41C_41E4_B5D620009116, 0, this.panorama_B5B7E7EC_847F_7A57_41E0_A42EC37CFDAD)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_BE39111B_84C1_17F0_41BE_1F68AB992C16",
      "maps": [
       {
        "hfov": 28.43,
        "yaw": -94.68,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 170,
           "url": "media/panorama_B5B7E7EC_847F_7A57_41E0_A42EC37CFDAD_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.1
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -94.68,
        "hfov": 28.43,
        "image": {
         "levels": [
          {
           "height": 499,
           "width": 424,
           "url": "media/panorama_B5B7E7EC_847F_7A57_41E0_A42EC37CFDAD_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -2.1
       }
      ]
     },
     {
      "id": "panorama_B5B7E7EC_847F_7A57_41E0_A42EC37CFDAD_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 88.8,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_B529F01D_847F_75F6_41DA_A2DCD3B549B1, this.camera_FF30C305_DD52_C5F4_41CF_44729E920347); this.setMediaBehaviour(this.playList_FC5AB1FD_DD52_C414_41C6_007E522DCC59, 0, this.panorama_B5B7E7EC_847F_7A57_41E0_A42EC37CFDAD)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_952AF712_8BBA_32FD_41D5_BBC5DDEAE506",
      "maps": [
       {
        "hfov": 23.35,
        "yaw": -138.13,
        "image": {
         "levels": [
          {
           "height": 175,
           "width": 186,
           "url": "media/panorama_B5B7E7EC_847F_7A57_41E0_A42EC37CFDAD_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -20.82
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -138.13,
        "hfov": 23.35,
        "image": {
         "levels": [
          {
           "height": 350,
           "width": 373,
           "url": "media/panorama_B5B7E7EC_847F_7A57_41E0_A42EC37CFDAD_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -20.82
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_B5B7E7EC_847F_7A57_41E0_A42EC37CFDAD_t.jpg"
 },
 {
  "id": "panorama_B5B7E7EC_847F_7A57_41E0_A42EC37CFDAD_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": -162.42,
   "class": "PanoramaCameraPosition",
   "pitch": -3.03
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "playList_FC5A61FC_DD52_C414_41C8_57E12C0A122B",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_B5B7E7EC_847F_7A57_41E0_A42EC37CFDAD_camera",
    "media": "this.panorama_B5B7E7EC_847F_7A57_41E0_A42EC37CFDAD",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_FC4E1209_DD52_C7FC_41D5_1569491FA071, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_FC4E1209_DD52_C7FC_41D5_1569491FA071",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_B529F01D_847F_75F6_41DA_A2DCD3B549B1",
  "mapLocations": [
   {
    "x": 4890.05,
    "map": "this.map_B18DC891_BE47_F2A6_41DE_54A73B03D256",
    "y": 2409.45,
    "angle": 200,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041f\u043e\u0436\u0430\u0440\u043d\u0430\u044f \u043b\u0435\u0441\u0442\u043d\u0438\u0446\u0430 ( 17 )",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B529F01D_847F_75F6_41DA_A2DCD3B549B1_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_B529F01D_847F_75F6_41DA_A2DCD3B549B1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B529F01D_847F_75F6_41DA_A2DCD3B549B1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_B529F01D_847F_75F6_41DA_A2DCD3B549B1_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 80.4,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.setMediaBehaviour(this.playList_FC5A61FC_DD52_C414_41C8_57E12C0A122B, 0, this.panorama_B529F01D_847F_75F6_41DA_A2DCD3B549B1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_B9ED1453_84C3_1E71_41DE_6B4D5D986231",
      "maps": [
       {
        "hfov": 11.97,
        "yaw": -140.94,
        "image": {
         "levels": [
          {
           "height": 113,
           "width": 134,
           "url": "media/panorama_B529F01D_847F_75F6_41DA_A2DCD3B549B1_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -48.51
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -140.94,
        "hfov": 11.97,
        "image": {
         "levels": [
          {
           "height": 226,
           "width": 269,
           "url": "media/panorama_B529F01D_847F_75F6_41DA_A2DCD3B549B1_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -48.51
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_955107BE_8BA6_3122_41D8_F7DE47CD0C6F, this.camera_FF4AB336_DD52_C414_41AD_7DA1C1D68F1C); this.setMediaBehaviour(this.playList_FC5921FD_DD52_C414_41D7_4AAEB64B0F95, 0, this.panorama_B529F01D_847F_75F6_41DA_A2DCD3B549B1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_AA9C56F2_8BA7_F33D_41D0_9C07960164B5",
      "maps": [
       {
        "hfov": 9.21,
        "yaw": -26.26,
        "image": {
         "levels": [
          {
           "height": 81,
           "width": 71,
           "url": "media/panorama_B529F01D_847F_75F6_41DA_A2DCD3B549B1_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.72
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -26.26,
        "hfov": 9.21,
        "image": {
         "levels": [
          {
           "height": 163,
           "width": 142,
           "url": "media/panorama_B529F01D_847F_75F6_41DA_A2DCD3B549B1_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -14.72
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u0430\u043d\u043e\u0440\u0430\u043c\u0443 \u0437\u0430\u043d\u043e\u0432\u043e",
        "displayTooltipInTouchScreens": true,
        "click": "this.startPanoramaWithCamera(this.panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15, this.camera_FF7B6340_DD52_C46C_41E7_5ABA0887DB84); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_95FE566B_8B9A_5321_41CC_38B69238A396",
      "maps": [
       {
        "hfov": 52.41,
        "yaw": -142.51,
        "image": {
         "levels": [
          {
           "height": 165,
           "width": 200,
           "url": "media/panorama_B529F01D_847F_75F6_41DA_A2DCD3B549B1_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 26.19
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -142.51,
        "hfov": 52.41,
        "image": {
         "levels": [
          {
           "height": 720,
           "width": 872,
           "url": "media/panorama_B529F01D_847F_75F6_41DA_A2DCD3B549B1_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 26.19
       }
      ]
     },
     {
      "bleachingDistance": 0.4,
      "id": "overlay_DFF615C1_CEBC_599A_41DA_5CCB952EE37A",
      "bleaching": 0.7,
      "yaw": -91.32,
      "class": "LensFlarePanoramaOverlay",
      "pitch": 51.31
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_B529F01D_847F_75F6_41DA_A2DCD3B549B1_t.jpg"
 },
 {
  "id": "panorama_B529F01D_847F_75F6_41DA_A2DCD3B549B1_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": -27.63,
   "class": "PanoramaCameraPosition",
   "pitch": 3.18
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "playList_FC5AB1FD_DD52_C414_41C6_007E522DCC59",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_B529F01D_847F_75F6_41DA_A2DCD3B549B1_camera",
    "media": "this.panorama_B529F01D_847F_75F6_41DA_A2DCD3B549B1",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_FC4EC20A_DD52_C7FC_41E5_5C82C1D2C44B, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_FC4EC20A_DD52_C7FC_41E5_5C82C1D2C44B",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "vfov": 180,
  "partial": false,
  "id": "panorama_955107BE_8BA6_3122_41D8_F7DE47CD0C6F",
  "mapLocations": [
   {
    "x": 5265.42,
    "map": "this.map_B18DC891_BE47_F2A6_41DE_54A73B03D256",
    "y": 3818.73,
    "angle": -49.5,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "label": "\u041f\u043b\u043e\u0449\u0430\u0434\u043a\u0430 2",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_955107BE_8BA6_3122_41D8_F7DE47CD0C6F_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 1344,
       "width": 2688,
       "url": "media/panorama_955107BE_8BA6_3122_41D8_F7DE47CD0C6F_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_B529F01D_847F_75F6_41DA_A2DCD3B549B1, this.camera_FC60F221_DD52_C42D_41A5_3C3468BFBA98); this.setMediaBehaviour(this.playList_FC5AB1FD_DD52_C414_41C6_007E522DCC59, 0, this.panorama_955107BE_8BA6_3122_41D8_F7DE47CD0C6F)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_94702FAB_8B9B_F121_41DC_7AB4CD0FAA65",
      "maps": [
       {
        "hfov": 5.48,
        "yaw": -0.78,
        "image": {
         "levels": [
          {
           "height": 24,
           "width": 23,
           "url": "media/panorama_955107BE_8BA6_3122_41D8_F7DE47CD0C6F_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 28.61
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -0.78,
        "hfov": 5.48,
        "image": {
         "levels": [
          {
           "height": 48,
           "width": 46,
           "url": "media/panorama_955107BE_8BA6_3122_41D8_F7DE47CD0C6F_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 28.61
       }
      ]
     },
     {
      "id": "panorama_955107BE_8BA6_3122_41D8_F7DE47CD0C6F_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 92.4,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_85DB4E05_8A6E_37F0_4196_57D6AC1BBA15_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_D89E2A6B_CBB6_6A45_41C3_7783B0627BC6, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'backgroundOpacity':1,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':1,'paddingRight':5,'pressedIconHeight':20,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':1,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_DFF110C3_CBB2_3644_41C5_58C7BB4BE779, this.ImageResource_DFF170C3_CBB2_3644_41E0_4E3483874F7C, null, 5000, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D89D8738_CBD3_DBCC_41D0_F54FA1F8C496",
      "maps": [
       {
        "hfov": 16.36,
        "yaw": 90.01,
        "image": {
         "levels": [
          {
           "height": 52,
           "width": 61,
           "url": "media/panorama_955107BE_8BA6_3122_41D8_F7DE47CD0C6F_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.65
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 90.01,
        "hfov": 16.36,
        "image": {
         "levels": [
          {
           "height": 104,
           "width": 122,
           "url": "media/panorama_955107BE_8BA6_3122_41D8_F7DE47CD0C6F_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -6.65
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "popupMaxWidth": "100%",
      "rotationY": 0,
      "popupMaxHeight": "100%",
      "hfov": 16.36,
      "yaw": 90.01,
      "hideEasing": "linear",
      "id": "popup_D89E2A6B_CBB6_6A45_41C3_7783B0627BC6",
      "hideDuration": 2000,
      "showDuration": 2000,
      "image": {
       "levels": [
        {
         "height": 739,
         "width": 1024,
         "url": "media/popup_D89E2A6B_CBB6_6A45_41C3_7783B0627BC6_0_1.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "showEasing": "linear",
      "class": "PopupPanoramaOverlay",
      "pitch": -6.65
     }
    ]
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_955107BE_8BA6_3122_41D8_F7DE47CD0C6F_t.jpg"
 },
 {
  "id": "panorama_955107BE_8BA6_3122_41D8_F7DE47CD0C6F_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": -1.14,
   "class": "PanoramaCameraPosition",
   "pitch": 13.22
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "playList_FC5921FD_DD52_C414_41D7_4AAEB64B0F95",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_955107BE_8BA6_3122_41D8_F7DE47CD0C6F_camera",
    "media": "this.panorama_955107BE_8BA6_3122_41D8_F7DE47CD0C6F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_FC4EA20A_DD52_C7FC_41CD_65B7994F6BFE, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_FC4EA20A_DD52_C7FC_41CD_65B7994F6BFE",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.map_B18DC891_BE47_F2A6_41DE_54A73B03D256",
 {
  "id": "playList_FC44B205_DD52_C7F4_41CB_9E0764F8D0BF",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B18DC891_BE47_F2A6_41DE_54A73B03D256",
    "class": "MapPlayListItem"
   }
  ]
 },
 {
  "id": "playList_FC4B4205_DD52_C7F4_41D7_D1C8812EBDED",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B18DC891_BE47_F2A6_41DE_54A73B03D256",
    "class": "MapPlayListItem"
   }
  ]
 },
 "this.popup_D89E2A6B_CBB6_6A45_41C3_7783B0627BC6",
 {
  "levels": [
   {
    "height": 840,
    "width": 1163,
    "url": "media/popup_D89E2A6B_CBB6_6A45_41C3_7783B0627BC6_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 739,
    "width": 1024,
    "url": "media/popup_D89E2A6B_CBB6_6A45_41C3_7783B0627BC6_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 369,
    "width": 512,
    "url": "media/popup_D89E2A6B_CBB6_6A45_41C3_7783B0627BC6_0_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_DFF110C3_CBB2_3644_41C5_58C7BB4BE779",
  "class": "ImageResource"
 },
 {
  "levels": [
   {
    "height": 441,
    "width": 1012,
    "url": "media/popup_D89E2A6B_CBB6_6A45_41C3_7783B0627BC6_1_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 223,
    "width": 511,
    "url": "media/popup_D89E2A6B_CBB6_6A45_41C3_7783B0627BC6_1_1.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_DFF170C3_CBB2_3644_41E0_4E3483874F7C",
  "class": "ImageResource"
 },
 {
  "id": "camera_FC60F221_DD52_C42D_41A5_3C3468BFBA98",
  "initialPosition": {
   "hfov": 120,
   "yaw": -10.29,
   "class": "PanoramaCameraPosition",
   "pitch": -15.43
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_FC6E922D_DD52_C435_41C7_59180B9017DA",
  "timeToIdle": 10000,
  "initialPosition": {
   "hfov": 120,
   "yaw": 163.84,
   "class": "PanoramaCameraPosition",
   "pitch": -2.94
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FC9A423B_DD52_C41C_41E0_CC6A68B1A32C",
  "initialPosition": {
   "hfov": 120,
   "yaw": -173.39,
   "class": "PanoramaCameraPosition",
   "pitch": -5.88
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FC80724F_DD52_C474_41D0_F264DE0114EB",
  "initialPosition": {
   "hfov": 120,
   "yaw": 162.37,
   "class": "PanoramaCameraPosition",
   "pitch": -1.47
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FC8E326C_DD52_C43B_41CC_D6C1A653B83A",
  "initialPosition": {
   "hfov": 120,
   "yaw": 165.99,
   "class": "PanoramaCameraPosition",
   "pitch": -6.61
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FCB4F27B_DD52_C41C_41E7_89F6C6CE9D7B",
  "initialPosition": {
   "hfov": 120,
   "yaw": -169.71,
   "class": "PanoramaCameraPosition",
   "pitch": -1.47
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FCA31286_DD52_C4F4_41D4_97DD27CED600",
  "initialPosition": {
   "hfov": 120,
   "yaw": 90.32,
   "class": "PanoramaCameraPosition",
   "pitch": -8.82
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FCA85295_DD52_C414_4192_12C071EB6C55",
  "initialPosition": {
   "hfov": 120,
   "yaw": 152.08,
   "class": "PanoramaCameraPosition",
   "pitch": -8.82
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FCD682A0_DD52_C42C_41E9_A192C55C9893",
  "initialPosition": {
   "hfov": 120,
   "yaw": -171.18,
   "class": "PanoramaCameraPosition",
   "pitch": -2.2
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FCC362AA_DD52_C43C_41C0_25DF8D0D9482",
  "initialPosition": {
   "hfov": 120,
   "yaw": 105.06,
   "class": "PanoramaCameraPosition",
   "pitch": -8.08
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FCCF02B4_DD52_C414_41D4_6100F73ACE65",
  "initialPosition": {
   "hfov": 120,
   "yaw": -153.55,
   "class": "PanoramaCameraPosition",
   "pitch": -6.61
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FCF9D2BF_DD52_C414_41E5_602ED927C21F",
  "initialPosition": {
   "hfov": 120,
   "yaw": -22.82,
   "class": "PanoramaCameraPosition",
   "pitch": -9.55
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FCEB62D0_DD52_C46C_41EB_2876C215FE4E",
  "initialPosition": {
   "hfov": 120,
   "yaw": 151.35,
   "class": "PanoramaCameraPosition",
   "pitch": -1.47
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FF1512E3_DD52_C42C_41B5_DDE569756551",
  "initialPosition": {
   "hfov": 120,
   "yaw": -18.41,
   "class": "PanoramaCameraPosition",
   "pitch": -5.14
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FF0762F0_DD52_C42C_41BE_42ECDC2EAC1D",
  "initialPosition": {
   "hfov": 120,
   "yaw": -18.37,
   "class": "PanoramaCameraPosition",
   "pitch": -5.14
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FF30C305_DD52_C5F4_41CF_44729E920347",
  "initialPosition": {
   "hfov": 120,
   "yaw": -159.43,
   "class": "PanoramaCameraPosition",
   "pitch": -55.1
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FF22C317_DD52_C414_41DB_2C81DD3585E2",
  "initialPosition": {
   "hfov": 120,
   "yaw": -49.22,
   "class": "PanoramaCameraPosition",
   "pitch": 2.2
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FF2C2322_DD52_C42C_41A7_743042125E81",
  "initialPosition": {
   "hfov": 120,
   "yaw": 156.49,
   "class": "PanoramaCameraPosition",
   "pitch": -2.2
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FF58B32D_DD52_C434_41C7_2B3C8054479F",
  "initialPosition": {
   "hfov": 120,
   "yaw": 165.99,
   "class": "PanoramaCameraPosition",
   "pitch": -2.94
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FF4AB336_DD52_C414_41AD_7DA1C1D68F1C",
  "initialPosition": {
   "hfov": 120,
   "yaw": 1.47,
   "class": "PanoramaCameraPosition",
   "pitch": 20.57
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FF7B6340_DD52_C46C_41E7_5ABA0887DB84",
  "initialPosition": {
   "hfov": 120,
   "yaw": -72,
   "class": "PanoramaCameraPosition",
   "pitch": -1.47
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FF66934F_DD52_C474_41C8_A291D91B5F18",
  "initialPosition": {
   "hfov": 120,
   "yaw": -94.78,
   "class": "PanoramaCameraPosition",
   "pitch": 7.35
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FF97035D_DD52_C414_41E3_529F36A020E6",
  "initialPosition": {
   "hfov": 120,
   "yaw": -171.18,
   "class": "PanoramaCameraPosition",
   "pitch": -3.67
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FF815366_DD52_C434_419E_B0BE1753DB4C",
  "initialPosition": {
   "hfov": 120,
   "yaw": 166.04,
   "class": "PanoramaCameraPosition",
   "pitch": -6.61
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FFB21374_DD52_C414_41C4_E977A436FACB",
  "initialPosition": {
   "hfov": 120,
   "yaw": 48.49,
   "class": "PanoramaCameraPosition",
   "pitch": 30.12
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FFBC2381_DD52_C4ED_41DB_8CCBCABEC4C5",
  "initialPosition": {
   "hfov": 120,
   "yaw": 146.94,
   "class": "PanoramaCameraPosition",
   "pitch": -5.14
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FFAEE38B_DD52_C4FD_41E1_E7218DC4AA33",
  "initialPosition": {
   "hfov": 120,
   "yaw": 138.86,
   "class": "PanoramaCameraPosition",
   "pitch": -2.2
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FFD8F395_DD52_C415_419E_59562F15A996",
  "initialPosition": {
   "hfov": 120,
   "yaw": -48.49,
   "class": "PanoramaCameraPosition",
   "pitch": -21.31
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FFCAC3A4_DD52_C434_41B0_F191C02FD5D1",
  "initialPosition": {
   "hfov": 120,
   "yaw": 161.63,
   "class": "PanoramaCameraPosition",
   "pitch": -16.16
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FFF4A3B5_DD52_C415_41E6_D5CB505F64A9",
  "initialPosition": {
   "hfov": 120,
   "yaw": 168.98,
   "class": "PanoramaCameraPosition",
   "pitch": 5.14
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FFE573C6_DD52_C477_41D4_DE86CE4C7624",
  "initialPosition": {
   "hfov": 120,
   "yaw": -141.06,
   "class": "PanoramaCameraPosition",
   "pitch": -1.47
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FE11E3D2_DD52_C46C_41C1_A3F1497C2033",
  "initialPosition": {
   "hfov": 120,
   "yaw": 150.61,
   "class": "PanoramaCameraPosition",
   "pitch": -7.35
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FE03B3DC_DD52_C41B_41E5_8E1F51E9C6DA",
  "initialPosition": {
   "hfov": 120,
   "yaw": 57.26,
   "class": "PanoramaCameraPosition",
   "pitch": 6.61
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FE0CA3E8_DD52_C43B_41C3_E766C1372993",
  "initialPosition": {
   "hfov": 120,
   "yaw": -157.22,
   "class": "PanoramaCameraPosition",
   "pitch": -5.14
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_FE3EA3F2_DD52_C42C_41EB_516FD306C8F2",
  "initialPosition": {
   "hfov": 120,
   "yaw": 135.92,
   "class": "PanoramaCameraPosition",
   "pitch": -3.67
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 }
], "children": [
 {
  "progressHeight": 20,
  "toolTipOpacity": 1,
  "progressBottom": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderRadius": 0,
  "paddingRight": 0,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#606060",
  "minWidth": 100,
  "borderRadius": 0,
  "progressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "shadow": false,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "class": "ViewerArea",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBottom": 5,
  "playbackBarProgressOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColor": [
   "#990000"
  ],
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "height": "100%",
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarLeft": 0,
  "width": "100%",
  "progressBackgroundColorRatios": [
   1
  ],
  "paddingLeft": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadHeight": 15,
  "progressRight": 0,
  "minHeight": 50,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   1
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipBorderRadius": 3,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeight": 10,
  "progressBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressLeft": 0,
  "toolTipBorderColor": "#767676",
  "id": "MainViewer",
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadWidth": 6,
  "progressBorderColor": "#000000",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarBorderRadius": 0,
  "progressOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "transitionDuration": 500,
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "toolTipBorderSize": 1,
  "borderSize": 0,
  "toolTipPaddingRight": 6
 },
 {
  "progressHeight": 20,
  "toolTipOpacity": 1,
  "right": "0%",
  "progressBottom": 2,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderRadius": 0,
  "paddingRight": 0,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#606060",
  "minWidth": 1,
  "borderRadius": 0,
  "progressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "shadow": false,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "class": "ViewerArea",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBottom": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColor": [
   "#990000"
  ],
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "height": "42.61%",
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarLeft": 0,
  "width": "31.41%",
  "progressBackgroundColorRatios": [
   1
  ],
  "paddingLeft": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadHeight": 15,
  "progressRight": 0,
  "minHeight": 1,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   1
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipBorderRadius": 3,
  "progressBackgroundOpacity": 1,
  "top": "0.06%",
  "playbackBarHeight": 10,
  "progressBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressLeft": 0,
  "toolTipBorderColor": "#767676",
  "id": "MapViewer",
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadWidth": 6,
  "progressBorderColor": "#000000",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarBorderRadius": 0,
  "progressOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "transitionDuration": 500,
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "toolTipBorderSize": 1,
  "borderSize": 0,
  "toolTipPaddingRight": 6
 },
 {
  "borderSize": 0,
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "minWidth": 0,
  "paddingTop": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "backgroundColorRatios": [
   0
  ],
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "backgroundColorDirection": "vertical",
  "minHeight": 0,
  "shadow": false,
  "class": "UIComponent",
  "top": 0,
  "visible": false,
  "backgroundOpacity": 0.55,
  "id": "veilPopupPanorama",
  "data": {
   "name": "UIComponent16329"
  },
  "bottom": 0,
  "paddingBottom": 0,
  "left": 0,
  "right": 0
 },
 {
  "borderSize": 0,
  "paddingRight": 0,
  "backgroundColor": [],
  "minWidth": 0,
  "paddingTop": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "backgroundColorRatios": [],
  "backgroundColorDirection": "vertical",
  "minHeight": 0,
  "shadow": false,
  "scaleMode": "custom",
  "class": "ZoomImage",
  "top": 0,
  "visible": false,
  "backgroundOpacity": 1,
  "id": "zoomImagePopupPanorama",
  "data": {
   "name": "ZoomImage16330"
  },
  "bottom": 0,
  "paddingBottom": 0,
  "left": 0,
  "right": 0
 },
 {
  "pressedIconColor": "#888888",
  "verticalAlign": "middle",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "paddingRight": 5,
  "iconWidth": 20,
  "iconColor": "#000000",
  "fontSize": 12,
  "mode": "push",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "iconHeight": 20,
  "textDecoration": "none",
  "paddingTop": 5,
  "minWidth": 0,
  "shadowSpread": 1,
  "borderRadius": 0,
  "paddingLeft": 5,
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "gap": 5,
  "backgroundColorDirection": "vertical",
  "minHeight": 0,
  "shadow": false,
  "class": "CloseButton",
  "rollOverIconColor": "#666666",
  "top": 10,
  "fontWeight": "normal",
  "cursor": "hand",
  "visible": false,
  "borderColor": "#000000",
  "iconLineWidth": 5,
  "backgroundOpacity": 0.3,
  "id": "closeButtonPopupPanorama",
  "fontStyle": "normal",
  "data": {
   "name": "CloseButton16331"
  },
  "layout": "horizontal",
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "fontColor": "#FFFFFF",
  "paddingBottom": 5,
  "iconBeforeLabel": true,
  "label": "",
  "right": 10
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_FC4B4205_DD52_C7F4_41D7_D1C8812EBDED.set('selectedIndex', 0)",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "vrPolyfillScale": 1,
 "height": "100%",
 "paddingTop": 0,
 "minWidth": 20,
 "creationPolicy": "delayed",
 "borderRadius": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "minHeight": 20,
 "shadow": false,
 "class": "Player",
 "scrollBarMargin": 2,
 "scripts": {
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "existsKey": function(key){  return key in window; },
  "getKey": function(key){  return window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); }
 },
 "id": "rootPlayer",
 "data": {
  "name": "Player60927"
 },
 "layout": "absolute",
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "overflow": "visible"
})