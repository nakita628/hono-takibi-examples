<h1 id="semantic-tile-api">Semantic Tile API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Serves vector tiles containing geospatial data.

Base URLs:

* <a href="https://vectortile.googleapis.com/">https://vectortile.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/maps/contact-sales/">External documentation</a>

<h1 id="semantic-tile-api-terraintiles">terraintiles</h1>

## vectortile.terraintiles.get

<a id="opIdvectortile.terraintiles.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json'
```

`GET /v1/{name}`

Gets a terrain tile by its tile resource name.

<h3 id="vectortileterraintilesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of the tile. The tile resource name is prefixed by its collection ID `terraintiles/` followed by the resource ID, which encodes the tile's global x and y coordinates and zoom level as `@,,z`. For example, `terraintiles/@1,2,3z`.|
|altitudePrecisionCentimeters|query|integer|false|The precision of terrain altitudes in centimeters. Possible values: between 1 (cm level precision) and 1,000,000 (10-kilometer level precision).|
|clientInfo.apiClient|query|string|false|API client name and version. For example, the SDK calling the API. The exact format is up to the client.|
|clientInfo.applicationId|query|string|false|Application ID, such as the package name on Android and the bundle identifier on iOS platforms.|
|clientInfo.applicationVersion|query|string|false|Application version number, such as "1.2.3". The exact format is application-dependent.|
|clientInfo.deviceModel|query|string|false|Device model as reported by the device. The exact format is platform-dependent.|
|clientInfo.operatingSystem|query|string|false|Operating system name and version as reported by the OS. For example, "Mac OS X 10.10.4". The exact format is platform-dependent.|
|clientInfo.platform|query|string|false|Platform where the application is running.|
|clientInfo.userId|query|string|false|Required. A client-generated user ID. The ID should be generated and persisted during the first user session or whenever a pre-existing ID is not found. The exact format is up to the client. This must be non-empty in a GetFeatureTileRequest (whether via the header or GetFeatureTileRequest.client_info).|
|maxElevationResolutionCells|query|integer|false|The maximum allowed resolution for the returned elevation heightmap. Possible values: between 1 and 1024 (and not less than min_elevation_resolution_cells). Over-sized heightmaps will be non-uniformly down-sampled such that each edge is no longer than this value. Non-uniformity is chosen to maximise the amount of preserved data. For example: Original resolution: 100px (width) * 30px (height) max_elevation_resolution: 30 New resolution: 30px (width) * 30px (height)|
|minElevationResolutionCells|query|integer|false| api-linter: core::0131::request-unknown-fields=disabled aip.dev/not-precedent: Maintaining existing request parameter pattern. The minimum allowed resolution for the returned elevation heightmap. Possible values: between 0 and 1024 (and not more than max_elevation_resolution_cells). Zero is supported for backward compatibility. Under-sized heightmaps will be non-uniformly up-sampled such that each edge is no shorter than this value. Non-uniformity is chosen to maximise the amount of preserved data. For example: Original resolution: 30px (width) * 10px (height) min_elevation_resolution: 30 New resolution: 30px (width) * 30px (height)|
|terrainFormats|query|[string]|false|Terrain formats that the client understands.|
|enableModeledVolumes|query|boolean|false|Flag indicating whether 3D building models should be enabled. If this is set structures will be returned as 3D modeled volumes rather than 2.5D extruded areas where possible.|
|enablePoliticalFeatures|query|boolean|false|Flag indicating whether political features should be returned.|
|enablePrivateRoads|query|boolean|false|Flag indicating whether the returned tile will contain road features that are marked private. Private roads are indicated by the Feature.segment_info.road_info.is_private field.|
|enableUnclippedBuildings|query|boolean|false|Flag indicating whether unclipped buildings should be returned. If this is set, building render ops will extend beyond the tile boundary. Buildings will only be returned on the tile that contains their centroid.|
|languageCode|query|string|false|Required. The BCP-47 language code corresponding to the language in which the name was requested, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|
|regionCode|query|string|false|Required. The Unicode country/region code (CLDR) of the location from which the request is coming from, such as "US" and "419". For more information, see http://www.unicode.org/reports/tr35/#unicode_region_subtag.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|clientInfo.platform|PLATFORM_UNSPECIFIED|
|clientInfo.platform|EDITOR|
|clientInfo.platform|MAC_OS|
|clientInfo.platform|WINDOWS|
|clientInfo.platform|LINUX|
|clientInfo.platform|ANDROID|
|clientInfo.platform|IOS|
|clientInfo.platform|WEB_GL|
|terrainFormats|TERRAIN_FORMAT_UNKNOWN|
|terrainFormats|FIRST_DERIVATIVE|
|terrainFormats|SECOND_DERIVATIVE|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "coordinates": {
    "x": 0,
    "y": 0,
    "zoom": 0
  },
  "firstDerivative": {
    "altitudeMultiplier": 0,
    "rows": [
      {
        "altitudeDiffs": [
          0
        ]
      }
    ]
  },
  "name": "string",
  "secondDerivative": {
    "altitudeMultiplier": 0,
    "columnCount": 0,
    "encodedData": "string",
    "rowCount": 0
  }
}
```

<h3 id="vectortileterraintilesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TerrainTile](#schematerraintile)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Area">Area</h2>
<!-- backwards compatibility -->
<a id="schemaarea"></a>
<a id="schema_Area"></a>
<a id="tocSarea"></a>
<a id="tocsarea"></a>

```json
{
  "basemapZOrder": {
    "zGrade": 0,
    "zPlane": 0,
    "zWithinGrade": 0
  },
  "hasExternalEdges": true,
  "internalEdges": [
    0
  ],
  "loopBreaks": [
    0
  ],
  "triangleIndices": [
    0
  ],
  "type": "TRIANGLE_FAN",
  "vertexOffsets": {
    "xOffsets": [
      0
    ],
    "yOffsets": [
      0
    ]
  },
  "zOrder": 0
}
```

Represents an area. Used to represent regions such as water, parks, etc. Next ID: 10

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basemapZOrder|[BasemapZOrder](#schemabasemapzorder)|false|none|The z-order of this geometry when rendered on a flat basemap. Geometry with a lower z-order should be rendered beneath geometry with a higher z-order. This z-ordering does not imply anything about the altitude of the area relative to the ground, but it can be used to prevent z-fighting. Unlike Area.z_order this can be used to compare with Line.basemap_z_order, and in fact may yield more accurate rendering (where a line may be rendered beneath an area).|
|hasExternalEdges|boolean|false|none|True if the polygon is not entirely internal to the feature that it belongs to: that is, some of the edges are bordering another feature.|
|internalEdges|[integer(int32)]|false|none|When has_external_edges is true, the polygon has some edges that border another feature. This field indicates the internal edges that do not border another feature. Each value is an index into the vertices array, and denotes the start vertex of the internal edge (the next vertex in the boundary loop is the end of the edge). If the selected vertex is the last vertex in the boundary loop, then the edge between that vertex and the starting vertex of the loop is internal. This field may be used for styling. For example, building parapets could be placed only on the external edges of a building polygon, or water could be lighter colored near the external edges of a body of water. If has_external_edges is false, all edges are internal and this field will be empty.|
|loopBreaks|[integer(int32)]|false|none|Identifies the boundary loops of the polygon. Only set for INDEXED_TRIANGLE polygons. Each value is an index into the vertices array indicating the beginning of a loop. For instance, values of [2, 5] would indicate loop_data contained 3 loops with indices 0-1, 2-4, and 5-end. This may be used in conjunction with the internal_edges field for styling polygon boundaries. Note that an edge may be on a polygon boundary but still internal to the feature. For example, a feature split across multiple tiles will have an internal polygon boundary edge along the edge of the tile.|
|triangleIndices|[integer(int32)]|false|none|When the polygon encoding is of type INDEXED_TRIANGLES, this contains the indices of the triangle vertices in the vertex_offsets field. There are 3 vertex indices per triangle.|
|type|string|false|none|The polygon encoding type used for this area.|
|vertexOffsets|[Vertex2DList](#schemavertex2dlist)|false|none|The vertices present in the polygon defining the area.|
|zOrder|integer(int32)|false|none|The z-ordering of this area. Areas with a lower z-order should be rendered beneath areas with a higher z-order. This z-ordering does not imply anything about the altitude of the line relative to the ground, but it can be used to prevent z-fighting during rendering on the client. This z-ordering can only be used to compare areas, and cannot be compared with the z_order field in the Line message. The z-order may be negative or zero. Prefer Area.basemap_z_order.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TRIANGLE_FAN|
|type|INDEXED_TRIANGLES|
|type|TRIANGLE_STRIP|

<h2 id="tocS_BasemapZOrder">BasemapZOrder</h2>
<!-- backwards compatibility -->
<a id="schemabasemapzorder"></a>
<a id="schema_BasemapZOrder"></a>
<a id="tocSbasemapzorder"></a>
<a id="tocsbasemapzorder"></a>

```json
{
  "zGrade": 0,
  "zPlane": 0,
  "zWithinGrade": 0
}
```

Metadata necessary to determine the ordering of a particular basemap element relative to others. To render the basemap correctly, sort by z-plane, then z-grade, then z-within-grade.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|zGrade|integer(int32)|false|none|The second most significant component of the ordering of a component to be rendered onto the basemap.|
|zPlane|integer(int32)|false|none|The most significant component of the ordering of a component to be rendered onto the basemap.|
|zWithinGrade|integer(int32)|false|none|The least significant component of the ordering of a component to be rendered onto the basemap.|

<h2 id="tocS_ExtrudedArea">ExtrudedArea</h2>
<!-- backwards compatibility -->
<a id="schemaextrudedarea"></a>
<a id="schema_ExtrudedArea"></a>
<a id="tocSextrudedarea"></a>
<a id="tocsextrudedarea"></a>

```json
{
  "area": {
    "basemapZOrder": {
      "zGrade": 0,
      "zPlane": 0,
      "zWithinGrade": 0
    },
    "hasExternalEdges": true,
    "internalEdges": [
      0
    ],
    "loopBreaks": [
      0
    ],
    "triangleIndices": [
      0
    ],
    "type": "TRIANGLE_FAN",
    "vertexOffsets": {
      "xOffsets": [
        0
      ],
      "yOffsets": [
        0
      ]
    },
    "zOrder": 0
  },
  "maxZ": 0,
  "minZ": 0
}
```

Represents a height-extruded area: a 3D prism with a constant X-Y plane cross section. Used to represent extruded buildings. A single building may consist of several extruded areas. The min_z and max_z fields are scaled to the size of the tile. An extruded area with a max_z value of 4096 has the same height as the width of the tile that it is on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|area|[Area](#schemaarea)|false|none|The area representing the footprint of the extruded area.|
|maxZ|integer(int32)|false|none|The z-value in local tile coordinates where the extruded area ends.|
|minZ|integer(int32)|false|none|The z-value in local tile coordinates where the extruded area begins. This is non-zero for extruded areas that begin off the ground. For example, a building with a skybridge may have an extruded area component with a non-zero min_z.|

<h2 id="tocS_Feature">Feature</h2>
<!-- backwards compatibility -->
<a id="schemafeature"></a>
<a id="schema_Feature"></a>
<a id="tocSfeature"></a>
<a id="tocsfeature"></a>

```json
{
  "displayName": "string",
  "geometry": {
    "areas": [
      {
        "basemapZOrder": {
          "zGrade": 0,
          "zPlane": 0,
          "zWithinGrade": 0
        },
        "hasExternalEdges": true,
        "internalEdges": [
          0
        ],
        "loopBreaks": [
          0
        ],
        "triangleIndices": [
          0
        ],
        "type": "TRIANGLE_FAN",
        "vertexOffsets": {
          "xOffsets": [
            0
          ],
          "yOffsets": [
            0
          ]
        },
        "zOrder": 0
      }
    ],
    "extrudedAreas": [
      {
        "area": {
          "basemapZOrder": {
            "zGrade": 0,
            "zPlane": 0,
            "zWithinGrade": 0
          },
          "hasExternalEdges": true,
          "internalEdges": [
            0
          ],
          "loopBreaks": [
            0
          ],
          "triangleIndices": [
            0
          ],
          "type": "TRIANGLE_FAN",
          "vertexOffsets": {
            "xOffsets": [
              0
            ],
            "yOffsets": [
              0
            ]
          },
          "zOrder": 0
        },
        "maxZ": 0,
        "minZ": 0
      }
    ],
    "lines": [
      {
        "basemapZOrder": {
          "zGrade": 0,
          "zPlane": 0,
          "zWithinGrade": 0
        },
        "vertexOffsets": {
          "xOffsets": [
            0
          ],
          "yOffsets": [
            0
          ]
        },
        "zOrder": 0
      }
    ],
    "modeledVolumes": [
      {
        "strips": [
          {
            "vertexIndices": [
              0
            ]
          }
        ],
        "vertexOffsets": {
          "xOffsets": [
            0
          ],
          "yOffsets": [
            0
          ],
          "zOffsets": [
            0
          ]
        }
      }
    ]
  },
  "placeId": "string",
  "relations": [
    {
      "relatedFeatureIndex": 0,
      "relationType": "RELATION_TYPE_UNSPECIFIED"
    }
  ],
  "segmentInfo": {
    "roadInfo": {
      "isPrivate": true
    }
  },
  "type": "FEATURE_TYPE_UNSPECIFIED"
}
```

A feature representing a single geographic entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The localized name of this feature. Currently only returned for roads.|
|geometry|[Geometry](#schemageometry)|false|none|The geometry of this feature, representing the space that it occupies in the world.|
|placeId|string|false|none|Place ID of this feature, suitable for use in Places API details requests.|
|relations|[[Relation](#schemarelation)]|false|none|Relations to other features.|
|segmentInfo|[SegmentInfo](#schemasegmentinfo)|false|none|Metadata for features with the SEGMENT FeatureType.|
|type|string|false|none|The type of this feature.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FEATURE_TYPE_UNSPECIFIED|
|type|STRUCTURE|
|type|BAR|
|type|BANK|
|type|LODGING|
|type|CAFE|
|type|RESTAURANT|
|type|EVENT_VENUE|
|type|TOURIST_DESTINATION|
|type|SHOPPING|
|type|SCHOOL|
|type|SEGMENT|
|type|ROAD|
|type|LOCAL_ROAD|
|type|ARTERIAL_ROAD|
|type|HIGHWAY|
|type|CONTROLLED_ACCESS_HIGHWAY|
|type|FOOTPATH|
|type|RAIL|
|type|FERRY|
|type|REGION|
|type|PARK|
|type|BEACH|
|type|FOREST|
|type|POLITICAL|
|type|ADMINISTRATIVE_AREA1|
|type|LOCALITY|
|type|SUBLOCALITY|
|type|WATER|

<h2 id="tocS_FeatureTile">FeatureTile</h2>
<!-- backwards compatibility -->
<a id="schemafeaturetile"></a>
<a id="schema_FeatureTile"></a>
<a id="tocSfeaturetile"></a>
<a id="tocsfeaturetile"></a>

```json
{
  "coordinates": {
    "x": 0,
    "y": 0,
    "zoom": 0
  },
  "features": [
    {
      "displayName": "string",
      "geometry": {
        "areas": [
          {
            "basemapZOrder": {
              "zGrade": 0,
              "zPlane": 0,
              "zWithinGrade": 0
            },
            "hasExternalEdges": true,
            "internalEdges": [
              0
            ],
            "loopBreaks": [
              0
            ],
            "triangleIndices": [
              0
            ],
            "type": "TRIANGLE_FAN",
            "vertexOffsets": {
              "xOffsets": [
                0
              ],
              "yOffsets": [
                0
              ]
            },
            "zOrder": 0
          }
        ],
        "extrudedAreas": [
          {
            "area": {
              "basemapZOrder": {
                "zGrade": 0,
                "zPlane": 0,
                "zWithinGrade": 0
              },
              "hasExternalEdges": true,
              "internalEdges": [
                0
              ],
              "loopBreaks": [
                0
              ],
              "triangleIndices": [
                0
              ],
              "type": "TRIANGLE_FAN",
              "vertexOffsets": {
                "xOffsets": [
                  0
                ],
                "yOffsets": [
                  0
                ]
              },
              "zOrder": 0
            },
            "maxZ": 0,
            "minZ": 0
          }
        ],
        "lines": [
          {
            "basemapZOrder": {
              "zGrade": 0,
              "zPlane": 0,
              "zWithinGrade": 0
            },
            "vertexOffsets": {
              "xOffsets": [
                0
              ],
              "yOffsets": [
                0
              ]
            },
            "zOrder": 0
          }
        ],
        "modeledVolumes": [
          {
            "strips": [
              {
                "vertexIndices": [
                  0
                ]
              }
            ],
            "vertexOffsets": {
              "xOffsets": [
                0
              ],
              "yOffsets": [
                0
              ],
              "zOffsets": [
                0
              ]
            }
          }
        ]
      },
      "placeId": "string",
      "relations": [
        {
          "relatedFeatureIndex": 0,
          "relationType": "RELATION_TYPE_UNSPECIFIED"
        }
      ],
      "segmentInfo": {
        "roadInfo": {
          "isPrivate": true
        }
      },
      "type": "FEATURE_TYPE_UNSPECIFIED"
    }
  ],
  "name": "string",
  "providers": [
    {
      "description": "string"
    }
  ],
  "status": "STATUS_OK",
  "versionId": "string"
}
```

A tile containing information about the map features located in the region it covers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coordinates|[TileCoordinates](#schematilecoordinates)|false|none|The global tile coordinates that uniquely identify this tile.|
|features|[[Feature](#schemafeature)]|false|none|Features present on this map tile.|
|name|string|false|none|Resource name of the tile. The tile resource name is prefixed by its collection ID `tiles/` followed by the resource ID, which encodes the tile's global x and y coordinates and zoom level as `@,,z`. For example, `tiles/@1,2,3z`.|
|providers|[[ProviderInfo](#schemaproviderinfo)]|false|none|Data providers for the data contained in this tile.|
|status|string|false|none|Tile response status code to support tile caching.|
|versionId|string|false|none|An opaque value, usually less than 30 characters, that contains version info about this tile and the data that was used to generate it. The client should store this value in its tile cache and pass it back to the API in the client_tile_version_id field of subsequent tile requests in order to enable the API to detect when the new tile would be the same as the one the client already has in its cache. Also see STATUS_OK_DATA_UNCHANGED.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STATUS_OK|
|status|STATUS_OK_DATA_UNCHANGED|

<h2 id="tocS_FirstDerivativeElevationGrid">FirstDerivativeElevationGrid</h2>
<!-- backwards compatibility -->
<a id="schemafirstderivativeelevationgrid"></a>
<a id="schema_FirstDerivativeElevationGrid"></a>
<a id="tocSfirstderivativeelevationgrid"></a>
<a id="tocsfirstderivativeelevationgrid"></a>

```json
{
  "altitudeMultiplier": 0,
  "rows": [
    {
      "altitudeDiffs": [
        0
      ]
    }
  ]
}
```

A packed representation of a 2D grid of uniformly spaced points containing elevation data. Each point within the grid represents the altitude in meters above average sea level at that location within the tile. Elevations provided are (generally) relative to the EGM96 geoid, however some areas will be relative to NAVD88. EGM96 and NAVD88 are off by no more than 2 meters. The grid is oriented north-west to south-east, as illustrated: rows[0].a[0] rows[0].a[m] +-----------------+ | | | N | | ^ | | | | | W <-----> E | | | | | v | | S | | | +-----------------+ rows[n].a[0] rows[n].a[m] Rather than storing the altitudes directly, we store the diffs between them as integers at some requested level of precision to take advantage of integer packing. The actual altitude values a[] can be reconstructed using the scale and each row's first_altitude and altitude_diff fields. More details in go/elevation-encoding-options-for-enduro under "Recommended implementation".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|altitudeMultiplier|number(float)|false|none|A multiplier applied to the altitude fields below to extract the actual altitudes in meters from the elevation grid.|
|rows|[[Row](#schemarow)]|false|none|Rows of points containing altitude data making up the elevation grid. Each row is the same length. Rows are ordered from north to south. E.g: rows[0] is the north-most row, and rows[n] is the south-most row.|

<h2 id="tocS_Geometry">Geometry</h2>
<!-- backwards compatibility -->
<a id="schemageometry"></a>
<a id="schema_Geometry"></a>
<a id="tocSgeometry"></a>
<a id="tocsgeometry"></a>

```json
{
  "areas": [
    {
      "basemapZOrder": {
        "zGrade": 0,
        "zPlane": 0,
        "zWithinGrade": 0
      },
      "hasExternalEdges": true,
      "internalEdges": [
        0
      ],
      "loopBreaks": [
        0
      ],
      "triangleIndices": [
        0
      ],
      "type": "TRIANGLE_FAN",
      "vertexOffsets": {
        "xOffsets": [
          0
        ],
        "yOffsets": [
          0
        ]
      },
      "zOrder": 0
    }
  ],
  "extrudedAreas": [
    {
      "area": {
        "basemapZOrder": {
          "zGrade": 0,
          "zPlane": 0,
          "zWithinGrade": 0
        },
        "hasExternalEdges": true,
        "internalEdges": [
          0
        ],
        "loopBreaks": [
          0
        ],
        "triangleIndices": [
          0
        ],
        "type": "TRIANGLE_FAN",
        "vertexOffsets": {
          "xOffsets": [
            0
          ],
          "yOffsets": [
            0
          ]
        },
        "zOrder": 0
      },
      "maxZ": 0,
      "minZ": 0
    }
  ],
  "lines": [
    {
      "basemapZOrder": {
        "zGrade": 0,
        "zPlane": 0,
        "zWithinGrade": 0
      },
      "vertexOffsets": {
        "xOffsets": [
          0
        ],
        "yOffsets": [
          0
        ]
      },
      "zOrder": 0
    }
  ],
  "modeledVolumes": [
    {
      "strips": [
        {
          "vertexIndices": [
            0
          ]
        }
      ],
      "vertexOffsets": {
        "xOffsets": [
          0
        ],
        "yOffsets": [
          0
        ],
        "zOffsets": [
          0
        ]
      }
    }
  ]
}
```

Represents the geometry of a feature, that is, the shape that it has on the map. The local tile coordinate system has the origin at the north-west (upper-left) corner of the tile, and is scaled to 4096 units across each edge. The height (Z) axis has the same scale factor: an extruded area with a max_z value of 4096 has the same height as the width of the tile that it is on. There is no clipping boundary, so it is possible that some coordinates will lie outside the tile boundaries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|areas|[[Area](#schemaarea)]|false|none|The areas present in this geometry.|
|extrudedAreas|[[ExtrudedArea](#schemaextrudedarea)]|false|none|The extruded areas present in this geometry. Not populated if modeled_volumes are included in this geometry unless always_include_building_footprints is set in GetFeatureTileRequest, in which case the client should decide which (extruded areas or modeled volumes) should be used (they should not be rendered together).|
|lines|[[Line](#schemaline)]|false|none|The lines present in this geometry.|
|modeledVolumes|[[ModeledVolume](#schemamodeledvolume)]|false|none|The modeled volumes present in this geometry. Not populated unless enable_modeled_volumes has been set in GetFeatureTileRequest.|

<h2 id="tocS_Line">Line</h2>
<!-- backwards compatibility -->
<a id="schemaline"></a>
<a id="schema_Line"></a>
<a id="tocSline"></a>
<a id="tocsline"></a>

```json
{
  "basemapZOrder": {
    "zGrade": 0,
    "zPlane": 0,
    "zWithinGrade": 0
  },
  "vertexOffsets": {
    "xOffsets": [
      0
    ],
    "yOffsets": [
      0
    ]
  },
  "zOrder": 0
}
```

Represents a 2D polyline. Used to represent segments such as roads, train tracks, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basemapZOrder|[BasemapZOrder](#schemabasemapzorder)|false|none|The z-order of this geometry when rendered on a flat basemap. Geometry with a lower z-order should be rendered beneath geometry with a higher z-order. This z-ordering does not imply anything about the altitude of the area relative to the ground, but it can be used to prevent z-fighting. Unlike Line.z_order this can be used to compare with Area.basemap_z_order, and in fact may yield more accurate rendering (where a line may be rendered beneath an area).|
|vertexOffsets|[Vertex2DList](#schemavertex2dlist)|false|none|The vertices present in the polyline.|
|zOrder|integer(int32)|false|none|The z-order of the line. Lines with a lower z-order should be rendered beneath lines with a higher z-order. This z-ordering does not imply anything about the altitude of the area relative to the ground, but it can be used to prevent z-fighting during rendering on the client. In general, larger and more important road features will have a higher z-order line associated with them. This z-ordering can only be used to compare lines, and cannot be compared with the z_order field in the Area message. The z-order may be negative or zero. Prefer Line.basemap_z_order.|

<h2 id="tocS_ModeledVolume">ModeledVolume</h2>
<!-- backwards compatibility -->
<a id="schemamodeledvolume"></a>
<a id="schema_ModeledVolume"></a>
<a id="tocSmodeledvolume"></a>
<a id="tocsmodeledvolume"></a>

```json
{
  "strips": [
    {
      "vertexIndices": [
        0
      ]
    }
  ],
  "vertexOffsets": {
    "xOffsets": [
      0
    ],
    "yOffsets": [
      0
    ],
    "zOffsets": [
      0
    ]
  }
}
```

Represents a modeled volume in 3D space. Used to represent 3D buildings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|strips|[[TriangleStrip](#schematrianglestrip)]|false|none|The triangle strips present in this mesh.|
|vertexOffsets|[Vertex3DList](#schemavertex3dlist)|false|none|The vertices present in the mesh defining the modeled volume.|

<h2 id="tocS_ProviderInfo">ProviderInfo</h2>
<!-- backwards compatibility -->
<a id="schemaproviderinfo"></a>
<a id="schema_ProviderInfo"></a>
<a id="tocSproviderinfo"></a>
<a id="tocsproviderinfo"></a>

```json
{
  "description": "string"
}
```

Information about the data providers that should be included in the attribution string shown by the client.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Attribution string for this provider. This string is not localized.|

<h2 id="tocS_Relation">Relation</h2>
<!-- backwards compatibility -->
<a id="schemarelation"></a>
<a id="schema_Relation"></a>
<a id="tocSrelation"></a>
<a id="tocsrelation"></a>

```json
{
  "relatedFeatureIndex": 0,
  "relationType": "RELATION_TYPE_UNSPECIFIED"
}
```

Represents a relation to another feature in the tile. For example, a building might be occupied by a given POI. The related feature can be retrieved using the related feature index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relatedFeatureIndex|integer(int32)|false|none|Zero-based index to look up the related feature from the list of features in the tile.|
|relationType|string|false|none|Relation type between the origin feature to the related feature.|

#### Enumerated Values

|Property|Value|
|---|---|
|relationType|RELATION_TYPE_UNSPECIFIED|
|relationType|OCCUPIES|
|relationType|PRIMARILY_OCCUPIED_BY|

<h2 id="tocS_RoadInfo">RoadInfo</h2>
<!-- backwards compatibility -->
<a id="schemaroadinfo"></a>
<a id="schema_RoadInfo"></a>
<a id="tocSroadinfo"></a>
<a id="tocsroadinfo"></a>

```json
{
  "isPrivate": true
}
```

Extra metadata relating to roads.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isPrivate|boolean|false|none|Road has signage discouraging or prohibiting use by the general public. E.g., roads with signs that say "Private", or "No trespassing."|

<h2 id="tocS_Row">Row</h2>
<!-- backwards compatibility -->
<a id="schemarow"></a>
<a id="schema_Row"></a>
<a id="tocSrow"></a>
<a id="tocsrow"></a>

```json
{
  "altitudeDiffs": [
    0
  ]
}
```

A row of altitude points in the elevation grid, ordered from west to east.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|altitudeDiffs|[integer(int32)]|false|none|The difference between each successive pair of altitudes, from west to east. The first, westmost point, is just the altitude rather than a diff. The units are specified by the altitude_multiplier parameter above; the value in meters is given by altitude_multiplier * altitude_diffs[n]. The altitude row (in metres above sea level) can be reconstructed with: a[0] = altitude_diffs[0] * altitude_multiplier when n > 0, a[n] = a[n-1] + altitude_diffs[n-1] * altitude_multiplier.|

<h2 id="tocS_SecondDerivativeElevationGrid">SecondDerivativeElevationGrid</h2>
<!-- backwards compatibility -->
<a id="schemasecondderivativeelevationgrid"></a>
<a id="schema_SecondDerivativeElevationGrid"></a>
<a id="tocSsecondderivativeelevationgrid"></a>
<a id="tocssecondderivativeelevationgrid"></a>

```json
{
  "altitudeMultiplier": 0,
  "columnCount": 0,
  "encodedData": "string",
  "rowCount": 0
}
```

A packed representation of a 2D grid of uniformly spaced points containing elevation data. Each point within the grid represents the altitude in meters above average sea level at that location within the tile. Elevations provided are (generally) relative to the EGM96 geoid, however some areas will be relative to NAVD88. EGM96 and NAVD88 are off by no more than 2 meters. The grid is oriented north-west to south-east, as illustrated: rows[0].a[0] rows[0].a[m] +-----------------+ | | | N | | ^ | | | | | W <-----> E | | | | | v | | S | | | +-----------------+ rows[n].a[0] rows[n].a[m] Rather than storing the altitudes directly, we store the diffs of the diffs between them as integers at some requested level of precision to take advantage of integer packing. Note that the data is packed in such a way that is fast to decode in Unity and that further optimizes wire size.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|altitudeMultiplier|number(float)|false|none|A multiplier applied to the elements in the encoded data to extract the actual altitudes in meters.|
|columnCount|integer(int32)|false|none|The number of columns included in the encoded elevation data (i.e. the horizontal resolution of the grid).|
|encodedData|string(byte)|false|none|A stream of elements each representing a point on the tile running across each row from left to right, top to bottom. There will be precisely horizontal_resolution * vertical_resolution elements in the stream. The elements are not the heights, rather the second order derivative of the values one would expect in a stream of height data. Each element is a varint with the following encoding: ------------------------------------------------------------------------\| \| Head Nibble \| ------------------------------------------------------------------------\| \| Bit 0 \| Bit 1 \| Bits 2-3 \| \| Terminator\| Sign (1=neg) \| Least significant 2 bits of absolute error \| ------------------------------------------------------------------------\| \| Tail Nibble #1 \| ------------------------------------------------------------------------\| \| Bit 0 \| Bit 1-3 \| \| Terminator\| Least significant 3 bits of absolute error \| ------------------------------------------------------------------------\| \| ... \| Tail Nibble #n \| ------------------------------------------------------------------------\| \| Bit 0 \| Bit 1-3 \| \| Terminator\| Least significant 3 bits of absolute error \| ------------------------------------------------------------------------\||
|rowCount|integer(int32)|false|none|The number of rows included in the encoded elevation data (i.e. the vertical resolution of the grid).|

<h2 id="tocS_SegmentInfo">SegmentInfo</h2>
<!-- backwards compatibility -->
<a id="schemasegmentinfo"></a>
<a id="schema_SegmentInfo"></a>
<a id="tocSsegmentinfo"></a>
<a id="tocssegmentinfo"></a>

```json
{
  "roadInfo": {
    "isPrivate": true
  }
}
```

Extra metadata relating to segments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roadInfo|[RoadInfo](#schemaroadinfo)|false|none|Metadata for features with the ROAD FeatureType.|

<h2 id="tocS_TerrainTile">TerrainTile</h2>
<!-- backwards compatibility -->
<a id="schematerraintile"></a>
<a id="schema_TerrainTile"></a>
<a id="tocSterraintile"></a>
<a id="tocsterraintile"></a>

```json
{
  "coordinates": {
    "x": 0,
    "y": 0,
    "zoom": 0
  },
  "firstDerivative": {
    "altitudeMultiplier": 0,
    "rows": [
      {
        "altitudeDiffs": [
          0
        ]
      }
    ]
  },
  "name": "string",
  "secondDerivative": {
    "altitudeMultiplier": 0,
    "columnCount": 0,
    "encodedData": "string",
    "rowCount": 0
  }
}
```

A tile containing information about the terrain located in the region it covers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coordinates|[TileCoordinates](#schematilecoordinates)|false|none|The global tile coordinates that uniquely identify this tile.|
|firstDerivative|[FirstDerivativeElevationGrid](#schemafirstderivativeelevationgrid)|false|none|Terrain elevation data encoded as a FirstDerivativeElevationGrid. cs/symbol:FirstDerivativeElevationGrid.|
|name|string|false|none|Resource name of the tile. The tile resource name is prefixed by its collection ID `terrain/` followed by the resource ID, which encodes the tile's global x and y coordinates and zoom level as `@,,z`. For example, `terrain/@1,2,3z`.|
|secondDerivative|[SecondDerivativeElevationGrid](#schemasecondderivativeelevationgrid)|false|none|Terrain elevation data encoded as a SecondDerivativeElevationGrid. cs/symbol:SecondDerivativeElevationGrid. See go/byte-encoded-terrain for more details.|

<h2 id="tocS_TileCoordinates">TileCoordinates</h2>
<!-- backwards compatibility -->
<a id="schematilecoordinates"></a>
<a id="schema_TileCoordinates"></a>
<a id="tocStilecoordinates"></a>
<a id="tocstilecoordinates"></a>

```json
{
  "x": 0,
  "y": 0,
  "zoom": 0
}
```

Global tile coordinates. Global tile coordinates reference a specific tile on the map at a specific zoom level. The origin of this coordinate system is always at the northwest corner of the map, with x values increasing from west to east and y values increasing from north to south. Tiles are indexed using x, y coordinates from that origin. The zoom level containing the entire world in a tile is 0, and it increases as you zoom in. Zoom level n + 1 will contain 4 times as many tiles as zoom level n. The zoom level controls the level of detail of the data that is returned. In particular, this affects the set of feature types returned, their density, and geometry simplification. The exact tile contents may change over time, but care will be taken to keep supporting the most important use cases. For example, zoom level 15 shows roads for orientation and planning in the local neighborhood and zoom level 17 shows buildings to give users on foot a sense of situational awareness.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|integer(int32)|false|none|Required. The x coordinate.|
|y|integer(int32)|false|none|Required. The y coordinate.|
|zoom|integer(int32)|false|none|Required. The Google Maps API zoom level.|

<h2 id="tocS_TriangleStrip">TriangleStrip</h2>
<!-- backwards compatibility -->
<a id="schematrianglestrip"></a>
<a id="schema_TriangleStrip"></a>
<a id="tocStrianglestrip"></a>
<a id="tocstrianglestrip"></a>

```json
{
  "vertexIndices": [
    0
  ]
}
```

Represents a strip of triangles. Each triangle uses the last edge of the previous one. The following diagram shows an example of a triangle strip, with each vertex labeled with its index in the vertex_index array. (1)-----(3) / \ / \ / \ / \ / \ / \ (0)-----(2)-----(4) Vertices may be in either clockwise or counter-clockwise order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vertexIndices|[integer(int32)]|false|none|Index into the vertex_offset array representing the next vertex in the triangle strip.|

<h2 id="tocS_Vertex2DList">Vertex2DList</h2>
<!-- backwards compatibility -->
<a id="schemavertex2dlist"></a>
<a id="schema_Vertex2DList"></a>
<a id="tocSvertex2dlist"></a>
<a id="tocsvertex2dlist"></a>

```json
{
  "xOffsets": [
    0
  ],
  "yOffsets": [
    0
  ]
}
```

2D vertex list used for lines and areas. Each entry represents an offset from the previous one in local tile coordinates. The first entry is offset from (0, 0). For example, the list of vertices [(1,1), (2, 2), (1, 2)] would be encoded in vertex offsets as [(1, 1), (1, 1), (-1, 0)].

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|xOffsets|[integer(int32)]|false|none|List of x-offsets in local tile coordinates.|
|yOffsets|[integer(int32)]|false|none|List of y-offsets in local tile coordinates.|

<h2 id="tocS_Vertex3DList">Vertex3DList</h2>
<!-- backwards compatibility -->
<a id="schemavertex3dlist"></a>
<a id="schema_Vertex3DList"></a>
<a id="tocSvertex3dlist"></a>
<a id="tocsvertex3dlist"></a>

```json
{
  "xOffsets": [
    0
  ],
  "yOffsets": [
    0
  ],
  "zOffsets": [
    0
  ]
}
```

3D vertex list used for modeled volumes. Each entry represents an offset from the previous one in local tile coordinates. The first coordinate is offset from (0, 0, 0).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|xOffsets|[integer(int32)]|false|none|List of x-offsets in local tile coordinates.|
|yOffsets|[integer(int32)]|false|none|List of y-offsets in local tile coordinates.|
|zOffsets|[integer(int32)]|false|none|List of z-offsets in local tile coordinates.|
