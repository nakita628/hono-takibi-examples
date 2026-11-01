<h1 id="martin">Martin v2.0.0-beta.5</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Blazing-fast tile server with PostGIS, MBTiles, and PMTiles support.

Email: <a href="mailto:to.stepan.kuzmin@gmail.com">Stepan Kuzmin</a> 
License: MIT OR Apache-2.0

<h1 id="martin-cratesrv">crate::srv</h1>

## get_source_info

<a id="opIdget_source_info"></a>

> Code samples

```bash
curl http://localhost:3000/string \
  -H 'Accept: application/json'
```

`GET /{source_ids}`

<h3 id="getsourceinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_ids|path|string|true|none|

<h3 id="getsourceinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|TileJSON 3.0.0 metadata for the requested source(s)|None|
|404|Not Found|No matching source|None|

<aside class="success">
This operation does not require authentication
</aside>

## get_tile

<a id="opIdget_tile"></a>

> Code samples

```bash
curl http://localhost:3000/string/0/0/0
```

`GET /{source_ids}/{z}/{x}/{y}`

<h3 id="gettile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_ids|path|string|true|none|
|z|path|integer(int32)|true|none|
|x|path|integer(int32)|true|none|
|y|path|integer(int32)|true|none|

<h3 id="gettile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Encoded vector or raster tile|None|
|204|No Content|Source(s) returned an empty tile|None|
|304|Not Modified|ETag matched If-None-Match|None|
|404|Not Found|No matching source|None|
|406|Not Acceptable|No supported tile format in Accept header|None|

<aside class="success">
This operation does not require authentication
</aside>

## purge_source

<a id="opIdpurge_source"></a>

> Code samples

```bash
curl http://localhost:3000/cache/string \
  -X DELETE
```

`DELETE /cache/{source_id}`

<h3 id="purgesource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_id|path|string|true|Source ID|

<h3 id="purgesource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The source's cached tiles are gone, or tile cacheing is disabled.|Inline|
|404|Not Found|No such source|None|

<aside class="success">
This operation does not require authentication
</aside>

## get_catalog

<a id="opIdget_catalog"></a>

> Code samples

```bash
curl http://localhost:3000/catalog \
  -H 'Accept: application/json'
```

`GET /catalog`

> Example responses

> 200 Response

```json
{
  "fonts": {
    "property1": {
      "end": 0,
      "family": "string",
      "format": "otf",
      "glyphs": 0,
      "last_modified_at": "1970-01-01T00:00:00Z",
      "start": 0,
      "style": "string"
    },
    "property2": {
      "end": 0,
      "family": "string",
      "format": "otf",
      "glyphs": 0,
      "last_modified_at": "1970-01-01T00:00:00Z",
      "start": 0,
      "style": "string"
    }
  },
  "settings": {
    "rendering": true
  },
  "sprites": {
    "property1": {
      "images": [
        "string"
      ],
      "last_modified_at": "1970-01-01T00:00:00Z",
      "size_in_bytes": 1
    },
    "property2": {
      "images": [
        "string"
      ],
      "last_modified_at": "1970-01-01T00:00:00Z",
      "size_in_bytes": 1
    }
  },
  "styles": {
    "property1": {
      "colors": [
        "string"
      ],
      "last_modified_at": "1970-01-01T00:00:00Z",
      "layer_count": 0,
      "path": "string",
      "type": "vector",
      "version_hash": "string"
    },
    "property2": {
      "colors": [
        "string"
      ],
      "last_modified_at": "1970-01-01T00:00:00Z",
      "layer_count": 0,
      "path": "string",
      "type": "vector",
      "version_hash": "string"
    }
  },
  "tiles": {
    "property1": {
      "attribution": "string",
      "content_encoding": "string",
      "content_type": "string",
      "description": "string",
      "last_modified_at": "1970-01-01T00:00:00Z",
      "layer_count": 0,
      "name": "string",
      "tile_grid": "string"
    },
    "property2": {
      "attribution": "string",
      "content_encoding": "string",
      "content_type": "string",
      "description": "string",
      "last_modified_at": "1970-01-01T00:00:00Z",
      "layer_count": 0,
      "name": "string",
      "tile_grid": "string"
    }
  }
}
```

<h3 id="getcatalog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Catalog of all configured sources|[Catalog](#schemacatalog)|

<aside class="success">
This operation does not require authentication
</aside>

## get_font

<a id="opIdget_font"></a>

> Code samples

```bash
curl http://localhost:3000/font/string/0-0
```

`GET /font/{fontstack}/{start}-{end}`

<h3 id="getfont-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fontstack|path|string|true|none|
|start|path|integer(int32)|true|none|
|end|path|integer(int32)|true|none|

<h3 id="getfont-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Glyph PBF range|None|
|400|Bad Request|Invalid glyph range|None|
|404|Not Found|No matching font|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return 200 OK if healthy. Used for readiness and liveness probes.

<a id="opIdget_health"></a>

> Code samples

```bash
curl http://localhost:3000/health
```

`GET /health`

<h3 id="return-200-ok-if-healthy-used-for-readiness-and-liveness-probes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Service healthy|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## ogc.dataset.getStyle

<a id="opIdogc.dataset.getStyle"></a>

> Code samples

```bash
curl http://localhost:3000/ogc/styles/string \
  -H 'Accept: application/json'
```

`GET /ogc/styles/{style_id}`

Alias of `/style/{style_id}`, as OGC API - Styles.

<h3 id="ogcdatasetgetstyle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_id|path|string|true|none|

<h3 id="ogcdatasetgetstyle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|MapLibre Style Spec JSON document|None|
|400|Bad Request|Style file is malformed|None|
|404|Not Found|No matching style|None|

<aside class="success">
This operation does not require authentication
</aside>

## get_sprite_sdf_json

<a id="opIdget_sprite_sdf_json"></a>

> Code samples

```bash
curl http://localhost:3000/sdf_sprite/string.json \
  -H 'Accept: application/json'
```

`GET /sdf_sprite/{source_ids}.json`

<h3 id="getspritesdfjson-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_ids|path|string|true|none|

<h3 id="getspritesdfjson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SDF sprite index JSON|None|
|404|Not Found|No matching sprite source|None|

<aside class="success">
This operation does not require authentication
</aside>

## get_sprite_sdf_png

<a id="opIdget_sprite_sdf_png"></a>

> Code samples

```bash
curl http://localhost:3000/sdf_sprite/string.png
```

`GET /sdf_sprite/{source_ids}.png`

<h3 id="getspritesdfpng-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_ids|path|string|true|none|

<h3 id="getspritesdfpng-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Combined signed-distance-field sprite image|None|
|404|Not Found|No matching sprite source|None|

<aside class="success">
This operation does not require authentication
</aside>

## get_sprite_json

<a id="opIdget_sprite_json"></a>

> Code samples

```bash
curl http://localhost:3000/sprite/string.json \
  -H 'Accept: application/json'
```

`GET /sprite/{source_ids}.json`

<h3 id="getspritejson-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_ids|path|string|true|none|

<h3 id="getspritejson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sprite index JSON|None|
|404|Not Found|No matching sprite source|None|

<aside class="success">
This operation does not require authentication
</aside>

## get_sprite_png

<a id="opIdget_sprite_png"></a>

> Code samples

```bash
curl http://localhost:3000/sprite/string.png
```

`GET /sprite/{source_ids}.png`

<h3 id="getspritepng-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_ids|path|string|true|none|

<h3 id="getspritepng-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Combined sprite image|None|
|404|Not Found|No matching sprite source|None|

<aside class="success">
This operation does not require authentication
</aside>

## get_style_json

<a id="opIdget_style_json"></a>

> Code samples

```bash
curl http://localhost:3000/style/string \
  -H 'Accept: application/json'
```

`GET /style/{style_id}`

<h3 id="getstylejson-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_id|path|string|true|none|

<h3 id="getstylejson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|MapLibre Style Spec JSON document|None|
|400|Bad Request|Style file is malformed|None|
|404|Not Found|No matching style|None|

<aside class="success">
This operation does not require authentication
</aside>

## get_rendered_tile_style

<a id="opIdget_rendered_tile_style"></a>

> Code samples

```bash
curl http://localhost:3000/style/string/0/0/0.png
```

`GET /style/{style_id}/{z}/{x}/{y}.{format}`

Append `@{n}x` to `{y}` (`/style/{style_id}/{z}/{x}/{y}@2x.png`) to draw the tile at `n` times the pixels.

<h3 id="getrenderedtilestyle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_id|path|string|true|none|
|z|path|integer(int32)|true|none|
|x|path|integer(int32)|true|none|
|y|path|integer(int32)|true|none|
|format|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|png|
|format|jpg|
|format|webp|

<h3 id="getrenderedtilestyle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Server-side rendered style tile (PNG/JPEG/WebP)|None|
|400|Bad Request|Invalid tile coordinates, or a pixel ratio not listed in `pixel_ratios`|None|
|403|Forbidden|Rendering is disabled|None|
|404|Not Found|No matching style|None|
|500|Internal Server Error|Renderer or encoder failure|None|

<aside class="success">
This operation does not require authentication
</aside>

## Render a static map image at an arbitrary camera into `{size}.{format}`.

<a id="opIdget_rendered_static_style"></a>

> Code samples

```bash
curl http://localhost:3000/style/string/static/string/string.png
```

`GET /style/{style_id}/static/{camera}/{size}.{format}`

<h3 id="render-a-static-map-image-at-an-arbitrary-camera-into-sizeformat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_id|path|string|true|none|
|camera|path|string|true|`lon,lat,zoom[@bearing[,pitch]]` or `minLon,minLat,maxLon,maxLat`.|
|size|path|string|true|`WIDTHxHEIGHT[@SCALEx]` - e.g. `800x600` or `400x300@2x`.|
|format|path|string|true|Output encoding. `png`, `jpg`, or `webp` (canonical names only;<br>`.jpeg` is redirected to `.jpg` via [`redirect_static_jpeg`]).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|png|
|format|jpg|
|format|webp|

<h3 id="render-a-static-map-image-at-an-arbitrary-camera-into-sizeformat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rendered static map image|None|
|400|Bad Request|Invalid params or size, or a pixel ratio not listed in `pixel_ratios`|None|
|403|Forbidden|Rendering is disabled|None|
|404|Not Found|No matching style|None|
|500|Internal Server Error|Renderer or encoder failure|None|

<aside class="success">
This operation does not require authentication
</aside>

## Render a static map image with optional vector overlays. See [our documentation](https://maplibre.org/martin/sources-styles/) for the supported overlay body -- a `GeoJSON` `FeatureCollection` with style properties on each feature.

<a id="opIdpost_rendered_static_style"></a>

> Code samples

```bash
curl http://localhost:3000/style/string/static/string/string.png \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "features": [
      {
        "geometry": null,
        "properties": {
          "circle-color": "#285DAA",
          "circle-opacity": 0,
          "circle-radius": 8,
          "circle-stroke-color": "string",
          "circle-stroke-opacity": 0,
          "circle-stroke-width": 0,
          "fill-color": "#95BEFA",
          "fill-opacity": 0,
          "fill-outline-color": "string",
          "line-cap": "round",
          "line-color": "#285DAA",
          "line-join": "round",
          "line-opacity": 0,
          "line-width": 2
        },
        "type": "Feature"
      }
    ],
    "type": "FeatureCollection"
  }'
```

`POST /style/{style_id}/static/{camera}/{size}.{format}`

An empty or missing body renders the base map alone.

> Body parameter

```json
{
  "features": [
    {
      "geometry": null,
      "properties": {
        "circle-color": "#285DAA",
        "circle-opacity": 0,
        "circle-radius": 8,
        "circle-stroke-color": "string",
        "circle-stroke-opacity": 0,
        "circle-stroke-width": 0,
        "fill-color": "#95BEFA",
        "fill-opacity": 0,
        "fill-outline-color": "string",
        "line-cap": "round",
        "line-color": "#285DAA",
        "line-join": "round",
        "line-opacity": 0,
        "line-width": 2
      },
      "type": "Feature"
    }
  ],
  "type": "FeatureCollection"
}
```

<h3 id="render-a-static-map-image-with-optional-vector-overlays-see-our-documentationhttpsmaplibreorgmartinsources-styles-for-the-supported-overlay-body----a-geojson-featurecollection-with-style-properties-on-each-feature-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_id|path|string|true|none|
|camera|path|string|true|`lon,lat,zoom[@bearing[,pitch]]` or `minLon,minLat,maxLon,maxLat`.|
|size|path|string|true|`WIDTHxHEIGHT[@SCALEx]` - e.g. `800x600` or `400x300@2x`.|
|format|path|string|true|Output encoding. `png`, `jpg`, or `webp` (canonical names only;<br>`.jpeg` is redirected to `.jpg` via [`redirect_static_jpeg`]).|
|body|body|[StaticStyleOverlay](#schemastaticstyleoverlay)|true|GeoJSON FeatureCollection. Each feature's `properties` carries MapLibre canonical paint/layout property names (`circle-color`, `line-width`, `fill-color`, …). Unknown property keys are ignored.|
|» features|body|[[StaticOverlayFeature](#schemastaticoverlayfeature)]|true|Features to overlay on the rendered base map, in draw order.|
|» type|body|[FeatureCollectionTag](#schemafeaturecollectiontag)|true|`GeoJSON` type discriminator. Must be `"FeatureCollection"`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|png|
|format|jpg|
|format|webp|
|» type|FeatureCollection|

<h3 id="render-a-static-map-image-with-optional-vector-overlays-see-our-documentationhttpsmaplibreorgmartinsources-styles-for-the-supported-overlay-body----a-geojson-featurecollection-with-style-properties-on-each-feature-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rendered static map image|None|
|400|Bad Request|Invalid params, size, or overlay body|None|
|403|Forbidden|Rendering is disabled|None|
|404|Not Found|No matching style|None|
|500|Internal Server Error|Renderer or encoder failure|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="martin-cratesrvogcapi">crate::srv::ogcapi</h1>

## The OGC API landing page, at `/ogc` and `/ogc/`.

<a id="opIdgetLandingPage"></a>

> Code samples

```bash
curl http://localhost:3000/ogc \
  -H 'Accept: application/json'
```

`GET /ogc`

> Example responses

> 200 Response

```json
{
  "description": "string",
  "extent": {
    "spatial": {
      "bbox": [
        [
          0
        ]
      ],
      "crs": "string",
      "storageCrsBbox": [
        [
          0
        ]
      ]
    }
  },
  "links": [
    {
      "href": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ],
  "title": "string"
}
```

<h3 id="the-ogc-api-landing-page-at-ogc-and-ogc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OGC API landing page|[LandingPage](#schemalandingpage)|

<aside class="success">
This operation does not require authentication
</aside>

## The OGC API part of Martin's `OpenAPI` 3.1 definition, as JSON or, for clients preferring HTML, as a page showing it.

<a id="opIdgetAPI"></a>

> Code samples

```bash
curl http://localhost:3000/ogc/api \
  -H 'Accept: application/vnd.oai.openapi+json'
```

`GET /ogc/api`

<h3 id="the-ogc-api-part-of-martins-openapi-31-definition-as-json-or-for-clients-preferring-html-as-a-page-showing-it-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OpenAPI 3.1 definition of the OGC API paths this server answers, or an HTML page showing it|None|

<aside class="success">
This operation does not require authentication
</aside>

## Every tile source on a tile matrix set with an OGC definition, as a collection.

<a id="opIdgetCollectionsList"></a>

> Code samples

```bash
curl http://localhost:3000/ogc/collections \
  -H 'Accept: application/json'
```

`GET /ogc/collections`

> Example responses

> 200 Response

```json
{
  "collections": [
    {
      "crs": [
        "string"
      ],
      "description": "string",
      "extent": {
        "spatial": {
          "bbox": [
            [
              0
            ]
          ],
          "crs": "string",
          "storageCrsBbox": [
            [
              0
            ]
          ]
        }
      },
      "id": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "templated": true,
          "title": "string",
          "type": "string"
        }
      ],
      "storageCrs": "string",
      "title": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="every-tile-source-on-a-tile-matrix-set-with-an-ogc-definition-as-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Every tile source on a tile matrix set with an OGC definition|[Collections](#schemacollections)|

<aside class="success">
This operation does not require authentication
</aside>

## One collection.

<a id="opIdgetCollection"></a>

> Code samples

```bash
curl http://localhost:3000/ogc/collections/string \
  -H 'Accept: application/json'
```

`GET /ogc/collections/{collection_id}`

<h3 id="one-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|Collection ID, the ID of a source|

> Example responses

> 200 Response

```json
{
  "crs": [
    "string"
  ],
  "description": "string",
  "extent": {
    "spatial": {
      "bbox": [
        [
          0
        ]
      ],
      "crs": "string",
      "storageCrsBbox": [
        [
          0
        ]
      ]
    }
  },
  "id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ],
  "storageCrs": "string",
  "title": "string"
}
```

<h3 id="one-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collection|[Collection](#schemacollection)|
|404|Not Found|No such collection|None|

<aside class="success">
This operation does not require authentication
</aside>

## A raster collection rendered as a map.

<a id="opIdogc.collection.getMap"></a>

> Code samples

```bash
curl http://localhost:3000/ogc/collections/string/map
```

`GET /ogc/collections/{collection_id}/map`

<h3 id="a-raster-collection-rendered-as-a-map-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|Collection ID, the ID of a source|
|width|query|integer \| null(int32)|false|Width of the map in pixels.|
|height|query|integer \| null(int32)|false|Height of the map in pixels.|
|bbox|query|string \| null|false|Area to show as `minx,miny,maxx,maxy` in `bbox-crs`.|
|bbox-crs|query|string \| null|false|CRS of `bbox`, `CRS84` when not given.|
|center|query|string \| null|false|Point to center the map on as `x,y` in `center-crs`.|
|center-crs|query|string \| null|false|CRS of `center`, `CRS84` when not given.|
|scale-denominator|query|number \| null(double)|false|Scale of the map.|

<h3 id="a-raster-collection-rendered-as-a-map-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Map of the collection|None|
|400|Bad Request|Invalid map parameters|None|
|404|Not Found|No such collection, or it can't be drawn as a map|None|
|406|Not Acceptable|No supported map format in Accept header|None|

<aside class="success">
This operation does not require authentication
</aside>

## The tilesets of one collection, one per tile matrix set it is served on.

<a id="opIdogc.collection.vector.getTileSetsList"></a>

> Code samples

```bash
curl http://localhost:3000/ogc/collections/string/tiles \
  -H 'Accept: application/json'
```

`GET /ogc/collections/{collection_id}/tiles`

<h3 id="the-tilesets-of-one-collection-one-per-tile-matrix-set-it-is-served-on-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|Collection ID, the ID of a source|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ],
  "tilesets": [
    {
      "crs": "string",
      "dataType": "map",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "templated": true,
          "title": "string",
          "type": "string"
        }
      ],
      "tileMatrixSetURI": "string",
      "title": "string"
    }
  ]
}
```

<h3 id="the-tilesets-of-one-collection-one-per-tile-matrix-set-it-is-served-on-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tilesets of the collection|[TileSets](#schematilesets)|
|404|Not Found|No such collection|None|

<aside class="success">
This operation does not require authentication
</aside>

## The metadata of one tileset, with the template of its tile URLs.

<a id="opIdogc.collection.vector.getTileSet"></a>

> Code samples

```bash
curl http://localhost:3000/ogc/collections/string/tiles/string \
  -H 'Accept: application/json'
```

`GET /ogc/collections/{collection_id}/tiles/{tile_matrix_set_id}`

<h3 id="the-metadata-of-one-tileset-with-the-template-of-its-tile-urls-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|none|
|tile_matrix_set_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "crs": "string",
  "dataType": "map",
  "layers": [
    {
      "dataType": "map",
      "id": "string",
      "maxTileMatrix": "string",
      "minTileMatrix": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ],
  "tileMatrixSetLimits": [
    {
      "maxTileCol": 0,
      "maxTileRow": 0,
      "minTileCol": 0,
      "minTileRow": 0,
      "tileMatrix": "string"
    }
  ],
  "tileMatrixSetURI": "string",
  "title": "string"
}
```

<h3 id="the-metadata-of-one-tileset-with-the-template-of-its-tile-urls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tileset metadata with the tile URL template|[TileSet](#schematileset)|
|404|Not Found|No such collection or tileset|None|

<aside class="success">
This operation does not require authentication
</aside>

## One tile of a collection, answered as the `/{source_ids}/{z}/{x}/{y}` route answers it.

<a id="opIdogc.collection.vector.getTile"></a>

> Code samples

```bash
curl http://localhost:3000/ogc/collections/string/tiles/string/0/0/0
```

`GET /ogc/collections/{collection_id}/tiles/{tile_matrix_set_id}/{tile_matrix}/{tile_row}/{tile_col}`

<h3 id="one-tile-of-a-collection-answered-as-the-sourceidszxy-route-answers-it-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|none|
|tile_matrix_set_id|path|string|true|none|
|tile_matrix|path|integer(int32)|true|none|
|tile_row|path|integer(int32)|true|none|
|tile_col|path|integer(int32)|true|none|

<h3 id="one-tile-of-a-collection-answered-as-the-sourceidszxy-route-answers-it-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Encoded vector or raster tile|None|
|204|No Content|Source returned an empty tile|None|
|304|Not Modified|ETag matched If-None-Match|None|
|404|Not Found|No such collection, tileset or tile|None|
|406|Not Acceptable|No supported tile format in Accept header|None|

<aside class="success">
This operation does not require authentication
</aside>

## The conformance classes the OGC API implements.

<a id="opIdgetConformance"></a>

> Code samples

```bash
curl http://localhost:3000/ogc/conformance \
  -H 'Accept: application/json'
```

`GET /ogc/conformance`

> Example responses

> 200 Response

```json
{
  "conformsTo": [
    "string"
  ]
}
```

<h3 id="the-conformance-classes-the-ogc-api-implements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Conformance classes the OGC API implements|[Conformance](#schemaconformance)|

<aside class="success">
This operation does not require authentication
</aside>

## The collections of the dataset drawn as one map, in the order `collections` names them.

<a id="opIdogc.dataset.getMap"></a>

> Code samples

```bash
curl http://localhost:3000/ogc/map
```

`GET /ogc/map`

<h3 id="the-collections-of-the-dataset-drawn-as-one-map-in-the-order-collections-names-them-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|width|query|integer \| null(int32)|false|Width of the map in pixels.|
|height|query|integer \| null(int32)|false|Height of the map in pixels.|
|bbox|query|string \| null|false|Area to show as `minx,miny,maxx,maxy` in `bbox-crs`.|
|bbox-crs|query|string \| null|false|CRS of `bbox`, `CRS84` when not given.|
|center|query|string \| null|false|Point to center the map on as `x,y` in `center-crs`.|
|center-crs|query|string \| null|false|CRS of `center`, `CRS84` when not given.|
|scale-denominator|query|number \| null(double)|false|Scale of the map.|
|collections|query|string \| null|false|Comma-separated IDs or URLs of the collections to draw, all of them when not given; a repeated one is drawn once.|

<h3 id="the-collections-of-the-dataset-drawn-as-one-map-in-the-order-collections-names-them-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Map of the dataset|None|
|400|Bad Request|Invalid map parameters, or a collection that can't be drawn|None|

<aside class="success">
This operation does not require authentication
</aside>

## The map tilesets of all collections drawn together.

<a id="opIdogc.dataset.map.getTileSetsList"></a>

> Code samples

```bash
curl http://localhost:3000/ogc/map/tiles \
  -H 'Accept: application/json'
```

`GET /ogc/map/tiles`

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ],
  "tilesets": [
    {
      "crs": "string",
      "dataType": "map",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "templated": true,
          "title": "string",
          "type": "string"
        }
      ],
      "tileMatrixSetURI": "string",
      "title": "string"
    }
  ]
}
```

<h3 id="the-map-tilesets-of-all-collections-drawn-together-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Map tilesets of all collections drawn together|[TileSets](#schematilesets)|

<aside class="success">
This operation does not require authentication
</aside>

## The map tileset of all collections drawn together, on `WebMercatorQuad`.

<a id="opIdogc.dataset.map.getTileSet"></a>

> Code samples

```bash
curl http://localhost:3000/ogc/map/tiles/string \
  -H 'Accept: application/json'
```

`GET /ogc/map/tiles/{tile_matrix_set_id}`

<h3 id="the-map-tileset-of-all-collections-drawn-together-on-webmercatorquad-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tile_matrix_set_id|path|string|true|Tile matrix set ID, only `WebMercatorQuad`|

> Example responses

> 200 Response

```json
{
  "crs": "string",
  "dataType": "map",
  "layers": [
    {
      "dataType": "map",
      "id": "string",
      "maxTileMatrix": "string",
      "minTileMatrix": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ],
  "tileMatrixSetLimits": [
    {
      "maxTileCol": 0,
      "maxTileRow": 0,
      "minTileCol": 0,
      "minTileRow": 0,
      "tileMatrix": "string"
    }
  ],
  "tileMatrixSetURI": "string",
  "title": "string"
}
```

<h3 id="the-map-tileset-of-all-collections-drawn-together-on-webmercatorquad-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Map tileset metadata with the tile URL template|[TileSet](#schematileset)|
|404|Not Found|No such tileset|None|

<aside class="success">
This operation does not require authentication
</aside>

## A map tile of all collections drawn together.

<a id="opIdogc.dataset.map.getTile"></a>

> Code samples

```bash
curl http://localhost:3000/ogc/map/tiles/string/0/0/0
```

`GET /ogc/map/tiles/{tile_matrix_set_id}/{tile_matrix}/{tile_row}/{tile_col}`

<h3 id="a-map-tile-of-all-collections-drawn-together-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tile_matrix_set_id|path|string|true|none|
|tile_matrix|path|integer(int32)|true|none|
|tile_row|path|integer(int32)|true|none|
|tile_col|path|integer(int32)|true|none|

<h3 id="a-map-tile-of-all-collections-drawn-together-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Map tile of all collections drawn together|None|
|404|Not Found|No such tileset or tile|None|
|406|Not Acceptable|No supported image format in Accept header|None|

<aside class="success">
This operation does not require authentication
</aside>

## Every style Martin serves.

<a id="opIdogc.dataset.getStyles"></a>

> Code samples

```bash
curl http://localhost:3000/ogc/styles \
  -H 'Accept: application/json'
```

`GET /ogc/styles`

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ],
  "styles": [
    {
      "id": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "templated": true,
          "title": "string",
          "type": "string"
        }
      ],
      "title": "string"
    }
  ]
}
```

<h3 id="every-style-martin-serves-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Every style Martin serves|[Styles](#schemastyles)|

<aside class="success">
This operation does not require authentication
</aside>

## A style rendered as a map.

<a id="opIdogc.dataset.style.getMap"></a>

> Code samples

```bash
curl http://localhost:3000/ogc/styles/string/map
```

`GET /ogc/styles/{style_id}/map`

<h3 id="a-style-rendered-as-a-map-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_id|path|string|true|Style ID|
|width|query|integer \| null(int32)|false|Width of the map in pixels.|
|height|query|integer \| null(int32)|false|Height of the map in pixels.|
|bbox|query|string \| null|false|Area to show as `minx,miny,maxx,maxy` in `bbox-crs`.|
|bbox-crs|query|string \| null|false|CRS of `bbox`, `CRS84` when not given.|
|center|query|string \| null|false|Point to center the map on as `x,y` in `center-crs`.|
|center-crs|query|string \| null|false|CRS of `center`, `CRS84` when not given.|
|scale-denominator|query|number \| null(double)|false|Scale of the map.|

<h3 id="a-style-rendered-as-a-map-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Map of the style|None|
|400|Bad Request|Invalid map parameters|None|
|404|Not Found|No such style|None|
|406|Not Acceptable|No supported map format in Accept header|None|

<aside class="success">
This operation does not require authentication
</aside>

## The map tilesets of a style.

<a id="opIdogc.dataset.style.map.getTileSetsList"></a>

> Code samples

```bash
curl http://localhost:3000/ogc/styles/string/map/tiles \
  -H 'Accept: application/json'
```

`GET /ogc/styles/{style_id}/map/tiles`

<h3 id="the-map-tilesets-of-a-style-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_id|path|string|true|Style ID|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ],
  "tilesets": [
    {
      "crs": "string",
      "dataType": "map",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "templated": true,
          "title": "string",
          "type": "string"
        }
      ],
      "tileMatrixSetURI": "string",
      "title": "string"
    }
  ]
}
```

<h3 id="the-map-tilesets-of-a-style-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Map tilesets of the style|[TileSets](#schematilesets)|
|404|Not Found|No such style|None|

<aside class="success">
This operation does not require authentication
</aside>

## The map tileset of a style on `WebMercatorQuad`.

<a id="opIdogc.dataset.style.map.getTileSet"></a>

> Code samples

```bash
curl http://localhost:3000/ogc/styles/string/map/tiles/string \
  -H 'Accept: application/json'
```

`GET /ogc/styles/{style_id}/map/tiles/{tile_matrix_set_id}`

<h3 id="the-map-tileset-of-a-style-on-webmercatorquad-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_id|path|string|true|Style ID|
|tile_matrix_set_id|path|string|true|Tile matrix set ID, only `WebMercatorQuad`|

> Example responses

> 200 Response

```json
{
  "crs": "string",
  "dataType": "map",
  "layers": [
    {
      "dataType": "map",
      "id": "string",
      "maxTileMatrix": "string",
      "minTileMatrix": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ],
  "tileMatrixSetLimits": [
    {
      "maxTileCol": 0,
      "maxTileRow": 0,
      "minTileCol": 0,
      "minTileRow": 0,
      "tileMatrix": "string"
    }
  ],
  "tileMatrixSetURI": "string",
  "title": "string"
}
```

<h3 id="the-map-tileset-of-a-style-on-webmercatorquad-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Map tileset metadata with the tile URL template|[TileSet](#schematileset)|
|404|Not Found|No such style or tileset|None|

<aside class="success">
This operation does not require authentication
</aside>

## A map tile of a style.

<a id="opIdogc.dataset.style.map.getTile"></a>

> Code samples

```bash
curl http://localhost:3000/ogc/styles/string/map/tiles/string/0/0/0
```

`GET /ogc/styles/{style_id}/map/tiles/{tile_matrix_set_id}/{tile_matrix}/{tile_row}/{tile_col}`

<h3 id="a-map-tile-of-a-style-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_id|path|string|true|none|
|tile_matrix_set_id|path|string|true|none|
|tile_matrix|path|integer(int32)|true|none|
|tile_row|path|integer(int32)|true|none|
|tile_col|path|integer(int32)|true|none|

<h3 id="a-map-tile-of-a-style-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Map tile of the style|None|
|404|Not Found|No such style, tileset or tile|None|
|406|Not Acceptable|No supported image format in Accept header|None|

<aside class="success">
This operation does not require authentication
</aside>

## The tile matrix sets of the served sources.

<a id="opIdgetTileMatrixSetsList"></a>

> Code samples

```bash
curl http://localhost:3000/ogc/tileMatrixSets \
  -H 'Accept: application/json'
```

`GET /ogc/tileMatrixSets`

> Example responses

> 200 Response

```json
{
  "tileMatrixSets": [
    {
      "crs": "string",
      "id": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "templated": true,
          "title": "string",
          "type": "string"
        }
      ],
      "uri": "string"
    }
  ]
}
```

<h3 id="the-tile-matrix-sets-of-the-served-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tile matrix sets of the served sources|[TileMatrixSets](#schematilematrixsets)|

<aside class="success">
This operation does not require authentication
</aside>

## The definition of one tile matrix set.

<a id="opIdgetTileMatrixSet"></a>

> Code samples

```bash
curl http://localhost:3000/ogc/tileMatrixSets/string \
  -H 'Accept: application/json'
```

`GET /ogc/tileMatrixSets/{tile_matrix_set_id}`

<h3 id="the-definition-of-one-tile-matrix-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tile_matrix_set_id|path|string|true|Tile matrix set ID|

> Example responses

> 200 Response

```json
{
  "crs": "string",
  "id": "string",
  "orderedAxes": [
    "string"
  ],
  "tileMatrices": [
    {
      "cellSize": 0,
      "id": "string",
      "matrixHeight": 0,
      "matrixWidth": 0,
      "pointOfOrigin": [
        0
      ],
      "scaleDenominator": 0,
      "tileHeight": 0,
      "tileWidth": 0
    }
  ],
  "uri": "string"
}
```

<h3 id="the-definition-of-one-tile-matrix-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tile matrix set definition|[TileMatrixSet](#schematilematrixset)|
|404|Not Found|No served grid with this ID has an OGC definition|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Catalog">Catalog</h2>
<!-- backwards compatibility -->
<a id="schemacatalog"></a>
<a id="schema_Catalog"></a>
<a id="tocScatalog"></a>
<a id="tocscatalog"></a>

```json
{
  "fonts": {
    "property1": {
      "end": 0,
      "family": "string",
      "format": "otf",
      "glyphs": 0,
      "last_modified_at": "1970-01-01T00:00:00Z",
      "start": 0,
      "style": "string"
    },
    "property2": {
      "end": 0,
      "family": "string",
      "format": "otf",
      "glyphs": 0,
      "last_modified_at": "1970-01-01T00:00:00Z",
      "start": 0,
      "style": "string"
    }
  },
  "settings": {
    "rendering": true
  },
  "sprites": {
    "property1": {
      "images": [
        "string"
      ],
      "last_modified_at": "1970-01-01T00:00:00Z",
      "size_in_bytes": 1
    },
    "property2": {
      "images": [
        "string"
      ],
      "last_modified_at": "1970-01-01T00:00:00Z",
      "size_in_bytes": 1
    }
  },
  "styles": {
    "property1": {
      "colors": [
        "string"
      ],
      "last_modified_at": "1970-01-01T00:00:00Z",
      "layer_count": 0,
      "path": "string",
      "type": "vector",
      "version_hash": "string"
    },
    "property2": {
      "colors": [
        "string"
      ],
      "last_modified_at": "1970-01-01T00:00:00Z",
      "layer_count": 0,
      "path": "string",
      "type": "vector",
      "version_hash": "string"
    }
  },
  "tiles": {
    "property1": {
      "attribution": "string",
      "content_encoding": "string",
      "content_type": "string",
      "description": "string",
      "last_modified_at": "1970-01-01T00:00:00Z",
      "layer_count": 0,
      "name": "string",
      "tile_grid": "string"
    },
    "property2": {
      "attribution": "string",
      "content_encoding": "string",
      "content_type": "string",
      "description": "string",
      "last_modified_at": "1970-01-01T00:00:00Z",
      "layer_count": 0,
      "name": "string",
      "tile_grid": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fonts|object|true|none|none|
|settings|object|true|none|Server-wide capability flags|
|sprites|object|true|none|none|
|styles|object|true|none|none|
|tiles|object|true|none|none|

<h2 id="tocS_Collection">Collection</h2>
<!-- backwards compatibility -->
<a id="schemacollection"></a>
<a id="schema_Collection"></a>
<a id="tocScollection"></a>
<a id="tocscollection"></a>

```json
{
  "crs": [
    "string"
  ],
  "description": "string",
  "extent": {
    "spatial": {
      "bbox": [
        [
          0
        ]
      ],
      "crs": "string",
      "storageCrsBbox": [
        [
          0
        ]
      ]
    }
  },
  "id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ],
  "storageCrs": "string",
  "title": "string"
}
```

A tile source as an OGC API collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crs|[string]|true|none|The CRSs the collection is served in, only the CRS of its grid.|
|description|string \| null|false|none|none|
|extent|[Extent](#schemaextent)|true|none|Where a collection's or the dataset's data lies.|
|id|string|true|none|none|
|links|[[Link](#schemalink)]|true|none|none|
|storageCrs|string|true|none|The CRS of the collection's grid.|
|title|string|true|none|none|

<h2 id="tocS_Collections">Collections</h2>
<!-- backwards compatibility -->
<a id="schemacollections"></a>
<a id="schema_Collections"></a>
<a id="tocScollections"></a>
<a id="tocscollections"></a>

```json
{
  "collections": [
    {
      "crs": [
        "string"
      ],
      "description": "string",
      "extent": {
        "spatial": {
          "bbox": [
            [
              0
            ]
          ],
          "crs": "string",
          "storageCrsBbox": [
            [
              0
            ]
          ]
        }
      },
      "id": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "templated": true,
          "title": "string",
          "type": "string"
        }
      ],
      "storageCrs": "string",
      "title": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ]
}
```

The collections the OGC API serves.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collections|[[Collection](#schemacollection)]|true|none|none|
|links|[[Link](#schemalink)]|true|none|none|

<h2 id="tocS_Conformance">Conformance</h2>
<!-- backwards compatibility -->
<a id="schemaconformance"></a>
<a id="schema_Conformance"></a>
<a id="tocSconformance"></a>
<a id="tocsconformance"></a>

```json
{
  "conformsTo": [
    "string"
  ]
}
```

The conformance declaration of the OGC API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conformsTo|[string]|true|none|none|

<h2 id="tocS_DataType">DataType</h2>
<!-- backwards compatibility -->
<a id="schemadatatype"></a>
<a id="schema_DataType"></a>
<a id="tocSdatatype"></a>
<a id="tocsdatatype"></a>

```json
"map"
```

What a source's tiles hold, in the terms of OGC API - Tiles.

<h2 id="tocS_Extent">Extent</h2>
<!-- backwards compatibility -->
<a id="schemaextent"></a>
<a id="schema_Extent"></a>
<a id="tocSextent"></a>
<a id="tocsextent"></a>

```json
{
  "spatial": {
    "bbox": [
      [
        0
      ]
    ],
    "crs": "string",
    "storageCrsBbox": [
      [
        0
      ]
    ]
  }
}
```

Where a collection's or the dataset's data lies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spatial|[SpatialExtent](#schemaspatialextent)|true|none|The bounding box of a collection or the dataset, in longitude and latitude and in the CRS of a collection's grid.|

<h2 id="tocS_FeatureCollectionTag">FeatureCollectionTag</h2>
<!-- backwards compatibility -->
<a id="schemafeaturecollectiontag"></a>
<a id="schema_FeatureCollectionTag"></a>
<a id="tocSfeaturecollectiontag"></a>
<a id="tocsfeaturecollectiontag"></a>

```json
"FeatureCollection"
```

`"FeatureCollection"` discriminator for the top-level body. A unit enum so
any other `type` (a bare `Feature`, `Geometry`, or garbage) fails to
deserialize with a clear serde error.

<h2 id="tocS_FeatureTag">FeatureTag</h2>
<!-- backwards compatibility -->
<a id="schemafeaturetag"></a>
<a id="schema_FeatureTag"></a>
<a id="tocSfeaturetag"></a>
<a id="tocsfeaturetag"></a>

```json
"Feature"
```

`"Feature"` discriminator for each member of the collection.

<h2 id="tocS_FontFormat">FontFormat</h2>
<!-- backwards compatibility -->
<a id="schemafontformat"></a>
<a id="schema_FontFormat"></a>
<a id="tocSfontformat"></a>
<a id="tocsfontformat"></a>

```json
"otf"
```

Source font file container format.

The string serialization (serde and `strum`) is the lowercase file
extension, so [`FontFormat::VARIANTS`] doubles as the list of recognised
font extensions and [`str::parse`] maps an extension back to a variant.

<h2 id="tocS_LandingPage">LandingPage</h2>
<!-- backwards compatibility -->
<a id="schemalandingpage"></a>
<a id="schema_LandingPage"></a>
<a id="tocSlandingpage"></a>
<a id="tocslandingpage"></a>

```json
{
  "description": "string",
  "extent": {
    "spatial": {
      "bbox": [
        [
          0
        ]
      ],
      "crs": "string",
      "storageCrsBbox": [
        [
          0
        ]
      ]
    }
  },
  "links": [
    {
      "href": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ],
  "title": "string"
}
```

The entry point of the OGC API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|extent|[Extent](#schemaextent)|true|none|Where the data of all collections lies.|
|links|[[Link](#schemalink)]|true|none|none|
|title|string|true|none|none|

<h2 id="tocS_Layer">Layer</h2>
<!-- backwards compatibility -->
<a id="schemalayer"></a>
<a id="schema_Layer"></a>
<a id="tocSlayer"></a>
<a id="tocslayer"></a>

```json
{
  "dataType": "map",
  "id": "string",
  "maxTileMatrix": "string",
  "minTileMatrix": "string"
}
```

A layer of a vector tileset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataType|[DataType](#schemadatatype)|true|none|What a source's tiles hold, in the terms of OGC API - Tiles.|
|id|string|true|none|none|
|maxTileMatrix|string \| null|false|none|none|
|minTileMatrix|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|map|
|dataType|vector|

<h2 id="tocS_Link">Link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "href": "string",
  "rel": "string",
  "templated": true,
  "title": "string",
  "type": "string"
}
```

A link from one OGC API resource to another.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|none|
|rel|string|true|none|none|
|templated|boolean|false|none|Whether `href` is a URI template.|
|title|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_SpatialExtent">SpatialExtent</h2>
<!-- backwards compatibility -->
<a id="schemaspatialextent"></a>
<a id="schema_SpatialExtent"></a>
<a id="tocSspatialextent"></a>
<a id="tocsspatialextent"></a>

```json
{
  "bbox": [
    [
      0
    ]
  ],
  "crs": "string",
  "storageCrsBbox": [
    [
      0
    ]
  ]
}
```

The bounding box of a collection or the dataset, in longitude and latitude and in the CRS of a collection's grid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bbox|[[number(double)]]|true|none|none|
|crs|string|true|none|none|
|storageCrsBbox|[[number(double)]]|false|none|`bbox` in the CRS of the collection's grid, in its axis order.|

<h2 id="tocS_StaticOverlayFeature">StaticOverlayFeature</h2>
<!-- backwards compatibility -->
<a id="schemastaticoverlayfeature"></a>
<a id="schema_StaticOverlayFeature"></a>
<a id="tocSstaticoverlayfeature"></a>
<a id="tocsstaticoverlayfeature"></a>

```json
{
  "geometry": null,
  "properties": {
    "circle-color": "#285DAA",
    "circle-opacity": 0,
    "circle-radius": 8,
    "circle-stroke-color": "string",
    "circle-stroke-opacity": 0,
    "circle-stroke-width": 0,
    "fill-color": "#95BEFA",
    "fill-opacity": 0,
    "fill-outline-color": "string",
    "line-cap": "round",
    "line-color": "#285DAA",
    "line-join": "round",
    "line-opacity": 0,
    "line-width": 2
  },
  "type": "Feature"
}
```

Wire shape of one `GeoJSON` `Feature`. A `null`/missing geometry is kept as
`None` and skipped at apply time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geometry|object|false|none|`GeoJSON` geometry. `Point`/`MultiPoint` -> circle layer;<br>`LineString`/`MultiLineString` -> line layer;<br>`Polygon`/`MultiPolygon` -> fill (and optionally outline-line) layer.<br>`GeometryCollection` and `null` are silently skipped.|
|properties|[StaticOverlayProperties](#schemastaticoverlayproperties) \| null|false|none|none|
|type|[FeatureTag](#schemafeaturetag)|true|none|`GeoJSON` type discriminator. Must be `"Feature"`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|

<h2 id="tocS_StaticOverlayProperties">StaticOverlayProperties</h2>
<!-- backwards compatibility -->
<a id="schemastaticoverlayproperties"></a>
<a id="schema_StaticOverlayProperties"></a>
<a id="tocSstaticoverlayproperties"></a>
<a id="tocsstaticoverlayproperties"></a>

```json
{
  "circle-color": "#285DAA",
  "circle-opacity": 0,
  "circle-radius": 8,
  "circle-stroke-color": "string",
  "circle-stroke-opacity": 0,
  "circle-stroke-width": 0,
  "fill-color": "#95BEFA",
  "fill-opacity": 0,
  "fill-outline-color": "string",
  "line-cap": "round",
  "line-color": "#285DAA",
  "line-join": "round",
  "line-opacity": 0,
  "line-width": 2
}
```

Wire shape of a feature's `properties`, keyed by canonical `MapLibre`
paint/layout names. Colors arrive as strings and are parsed in [`TryFrom`];
enums and numbers are validated by serde. Unknown keys (`id`, `name`,
`title`, …) are ignored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|circle-color|string \| null|false|none|CSS color for `Point` geometries.|
|circle-opacity|number \| null(float)|false|none|none|
|circle-radius|number \| null(float)|false|none|Radius in pixels at the rendered scale.|
|circle-stroke-color|string \| null|false|none|none|
|circle-stroke-opacity|number \| null(float)|false|none|none|
|circle-stroke-width|number \| null(float)|false|none|none|
|fill-color|string \| null|false|none|CSS color for `Polygon` fills.|
|fill-opacity|number \| null(float)|false|none|none|
|fill-outline-color|string \| null|false|none|none|
|line-cap|string \| null|false|none|One of `butt`, `round`, `square`.|
|line-color|string \| null|false|none|CSS color for `LineString` geometries (and `Polygon` outlines).|
|line-join|string \| null|false|none|One of `miter`, `bevel`, `round`.|
|line-opacity|number \| null(float)|false|none|none|
|line-width|number \| null(float)|false|none|Line width in pixels at the rendered scale.|

<h2 id="tocS_StaticStyleOverlay">StaticStyleOverlay</h2>
<!-- backwards compatibility -->
<a id="schemastaticstyleoverlay"></a>
<a id="schema_StaticStyleOverlay"></a>
<a id="tocSstaticstyleoverlay"></a>
<a id="tocsstaticstyleoverlay"></a>

```json
{
  "features": [
    {
      "geometry": null,
      "properties": {
        "circle-color": "#285DAA",
        "circle-opacity": 0,
        "circle-radius": 8,
        "circle-stroke-color": "string",
        "circle-stroke-opacity": 0,
        "circle-stroke-width": 0,
        "fill-color": "#95BEFA",
        "fill-opacity": 0,
        "fill-outline-color": "string",
        "line-cap": "round",
        "line-color": "#285DAA",
        "line-join": "round",
        "line-opacity": 0,
        "line-width": 2
      },
      "type": "Feature"
    }
  ],
  "type": "FeatureCollection"
}
```

Wire shape of the top-level body: a `GeoJSON` `FeatureCollection`. Doubles as
the `OpenAPI` request-body schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|features|[[StaticOverlayFeature](#schemastaticoverlayfeature)]|true|none|Features to overlay on the rendered base map, in draw order.|
|type|[FeatureCollectionTag](#schemafeaturecollectiontag)|true|none|`GeoJSON` type discriminator. Must be `"FeatureCollection"`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FeatureCollection|

<h2 id="tocS_StyleDescription">StyleDescription</h2>
<!-- backwards compatibility -->
<a id="schemastyledescription"></a>
<a id="schema_StyleDescription"></a>
<a id="tocSstyledescription"></a>
<a id="tocsstyledescription"></a>

```json
{
  "id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ],
  "title": "string"
}
```

A style in the list, linking to its stylesheets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|links|[[Link](#schemalink)]|true|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_StyleKind">StyleKind</h2>
<!-- backwards compatibility -->
<a id="schemastylekind"></a>
<a id="schema_StyleKind"></a>
<a id="tocSstylekind"></a>
<a id="tocsstylekind"></a>

```json
"vector"
```

What kind of layers a `MapLibre` style draws.

<h2 id="tocS_Styles">Styles</h2>
<!-- backwards compatibility -->
<a id="schemastyles"></a>
<a id="schema_Styles"></a>
<a id="tocSstyles"></a>
<a id="tocsstyles"></a>

```json
{
  "links": [
    {
      "href": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ],
  "styles": [
    {
      "id": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "templated": true,
          "title": "string",
          "type": "string"
        }
      ],
      "title": "string"
    }
  ]
}
```

The styles the OGC API serves.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|true|none|none|
|styles|[[StyleDescription](#schemastyledescription)]|true|none|none|

<h2 id="tocS_TileMatrix">TileMatrix</h2>
<!-- backwards compatibility -->
<a id="schematilematrix"></a>
<a id="schema_TileMatrix"></a>
<a id="tocStilematrix"></a>
<a id="tocstilematrix"></a>

```json
{
  "cellSize": 0,
  "id": "string",
  "matrixHeight": 0,
  "matrixWidth": 0,
  "pointOfOrigin": [
    0
  ],
  "scaleDenominator": 0,
  "tileHeight": 0,
  "tileWidth": 0
}
```

One zoom level of a tile matrix set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cellSize|number(double)|true|none|none|
|id|string|true|none|none|
|matrixHeight|integer(int64)|true|none|none|
|matrixWidth|integer(int64)|true|none|none|
|pointOfOrigin|[number(double)]|true|none|none|
|scaleDenominator|number(double)|true|none|none|
|tileHeight|integer(int32)|true|none|none|
|tileWidth|integer(int32)|true|none|none|

<h2 id="tocS_TileMatrixLimits">TileMatrixLimits</h2>
<!-- backwards compatibility -->
<a id="schematilematrixlimits"></a>
<a id="schema_TileMatrixLimits"></a>
<a id="tocStilematrixlimits"></a>
<a id="tocstilematrixlimits"></a>

```json
{
  "maxTileCol": 0,
  "maxTileRow": 0,
  "minTileCol": 0,
  "minTileRow": 0,
  "tileMatrix": "string"
}
```

The tiles of one zoom that hold data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxTileCol|integer(int32)|true|none|none|
|maxTileRow|integer(int32)|true|none|none|
|minTileCol|integer(int32)|true|none|none|
|minTileRow|integer(int32)|true|none|none|
|tileMatrix|string|true|none|none|

<h2 id="tocS_TileMatrixSet">TileMatrixSet</h2>
<!-- backwards compatibility -->
<a id="schematilematrixset"></a>
<a id="schema_TileMatrixSet"></a>
<a id="tocStilematrixset"></a>
<a id="tocstilematrixset"></a>

```json
{
  "crs": "string",
  "id": "string",
  "orderedAxes": [
    "string"
  ],
  "tileMatrices": [
    {
      "cellSize": 0,
      "id": "string",
      "matrixHeight": 0,
      "matrixWidth": 0,
      "pointOfOrigin": [
        0
      ],
      "scaleDenominator": 0,
      "tileHeight": 0,
      "tileWidth": 0
    }
  ],
  "uri": "string"
}
```

A tile matrix set in the JSON encoding of OGC Two Dimensional Tile Matrix Set 2.0.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crs|string|true|none|none|
|id|string|true|none|none|
|orderedAxes|[string]|true|none|none|
|tileMatrices|[[TileMatrix](#schematilematrix)]|true|none|none|
|uri|string \| null|false|none|none|

<h2 id="tocS_TileMatrixSetItem">TileMatrixSetItem</h2>
<!-- backwards compatibility -->
<a id="schematilematrixsetitem"></a>
<a id="schema_TileMatrixSetItem"></a>
<a id="tocStilematrixsetitem"></a>
<a id="tocstilematrixsetitem"></a>

```json
{
  "crs": "string",
  "id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ],
  "uri": "string"
}
```

One tile matrix set in the list, linking to its definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crs|string|true|none|none|
|id|string|true|none|none|
|links|[[Link](#schemalink)]|true|none|none|
|uri|string \| null|false|none|none|

<h2 id="tocS_TileMatrixSets">TileMatrixSets</h2>
<!-- backwards compatibility -->
<a id="schematilematrixsets"></a>
<a id="schema_TileMatrixSets"></a>
<a id="tocStilematrixsets"></a>
<a id="tocstilematrixsets"></a>

```json
{
  "tileMatrixSets": [
    {
      "crs": "string",
      "id": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "templated": true,
          "title": "string",
          "type": "string"
        }
      ],
      "uri": "string"
    }
  ]
}
```

The tile matrix sets the OGC API serves.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tileMatrixSets|[[TileMatrixSetItem](#schematilematrixsetitem)]|true|none|none|

<h2 id="tocS_TileSet">TileSet</h2>
<!-- backwards compatibility -->
<a id="schematileset"></a>
<a id="schema_TileSet"></a>
<a id="tocStileset"></a>
<a id="tocstileset"></a>

```json
{
  "crs": "string",
  "dataType": "map",
  "layers": [
    {
      "dataType": "map",
      "id": "string",
      "maxTileMatrix": "string",
      "minTileMatrix": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ],
  "tileMatrixSetLimits": [
    {
      "maxTileCol": 0,
      "maxTileRow": 0,
      "minTileCol": 0,
      "minTileRow": 0,
      "tileMatrix": "string"
    }
  ],
  "tileMatrixSetURI": "string",
  "title": "string"
}
```

The metadata of a tileset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crs|string|true|none|none|
|dataType|[DataType](#schemadatatype)|true|none|What a source's tiles hold, in the terms of OGC API - Tiles.|
|layers|[[Layer](#schemalayer)]|false|none|none|
|links|[[Link](#schemalink)]|true|none|none|
|tileMatrixSetLimits|[[TileMatrixLimits](#schematilematrixlimits)]|true|none|none|
|tileMatrixSetURI|string \| null|false|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|map|
|dataType|vector|

<h2 id="tocS_TileSetItem">TileSetItem</h2>
<!-- backwards compatibility -->
<a id="schematilesetitem"></a>
<a id="schema_TileSetItem"></a>
<a id="tocStilesetitem"></a>
<a id="tocstilesetitem"></a>

```json
{
  "crs": "string",
  "dataType": "map",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ],
  "tileMatrixSetURI": "string",
  "title": "string"
}
```

A tileset in a list, linking to its metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crs|string|true|none|none|
|dataType|[DataType](#schemadatatype)|true|none|What a source's tiles hold, in the terms of OGC API - Tiles.|
|links|[[Link](#schemalink)]|true|none|none|
|tileMatrixSetURI|string \| null|false|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|map|
|dataType|vector|

<h2 id="tocS_TileSets">TileSets</h2>
<!-- backwards compatibility -->
<a id="schematilesets"></a>
<a id="schema_TileSets"></a>
<a id="tocStilesets"></a>
<a id="tocstilesets"></a>

```json
{
  "links": [
    {
      "href": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ],
  "tilesets": [
    {
      "crs": "string",
      "dataType": "map",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "templated": true,
          "title": "string",
          "type": "string"
        }
      ],
      "tileMatrixSetURI": "string",
      "title": "string"
    }
  ]
}
```

The tilesets of a collection, map or style.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|true|none|none|
|tilesets|[[TileSetItem](#schematilesetitem)]|true|none|none|
