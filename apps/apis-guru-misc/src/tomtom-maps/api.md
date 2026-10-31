<h1 id="maps">Maps v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Maps API web services suite offers the following APIs:
  - Raster
  The Maps Raster API renders map data that is divided into gridded sections called tiles. Tiles are square images (png or jpg format) in various sizes which are available at 19 different zoom levels, ranging from 0 to 20. For zoom level 0, the entire earth is displayed on one single tile, while at zoom level 20, the world is divided into 2<sup>40</sup> tiles.
  - Vector
  Similar to Maps Raster API, the Maps Vector API serves data on different zoom level ranging from 0 to 22. For zoom level 0, the entire earth is displayed on one single tile, while at zoom level 22, the world is divided into 2<sup>44</sup> tiles.
  The Maps Vector Service delivers geographic map data packaged in a vector representation of squared sections called vector tiles. Each tile includes pre-defined collections of map features (points, lines, road shapes, water polygons, building footprints, ect.) delivered in one of the specified vector formats. Format of the tile is formally described using protobuf schema.

Base URLs:

* <a href="https://api.tomtom.com">https://api.tomtom.com</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **key**, in: query.

<h1 id="maps-copyrights">Copyrights</h1>

## Copyrights whole world

> Code samples

```bash
curl "https://example.com/map/1/copyrights.xml?key=${API_KEY}"
```

`GET /map/{versionNumber}/copyrights.{format}`

The Copyrights API returns copyright information for
the Maps API Raster Tile Service in JSON, JSONP, or XML format.
This call returns copyright information for the whole world.

<h3 id="copyrights-whole-world-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Version of the service to call. The current version is 1|
|format|path|string|true|Format of the response|
|callback|query|string|false|Specifies the jsonp callback method. Only used when format is jsonp|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|1|
|format|json|
|format|jsonp|
|format|xml|

<h3 id="copyrights-whole-world-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|<b>OK</b>|None|
|304|Not Modified|<b>Not Modified</b>|None|
|400|Bad Request|<b>Malformed request</b>: malformed syntax. Possible causes include:<br>  - requested syntax is not available|None|
|403|Forbidden|<b>Forbidden</b>: Supplied API key is not valid for this request|None|
|410|Gone|<b>Gone</b>: Request for unsupported format|None|
|500|Internal Server Error|<b>Internal Server Error</b>: There is a problem with the TomTom Copyrights<br>API service|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Captions

> Code samples

```bash
curl "https://example.com/map/1/copyrights/caption.xml?key=${API_KEY}"
```

`GET /map/{versionNumber}/copyrights/caption.{format}`

This API returns copyright captions for the map service.

<h3 id="captions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Version of the service to call. The current version is 1.|
|format|path|string|true|Format of the response|
|callback|query|string|false|Specifies the jsonp callback method. Only used when format is jsonp|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|1|
|format|json|
|format|jsonp|
|format|xml|

<h3 id="captions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|<b>OK</b>|None|
|304|Not Modified|<b>Not Modified</b>|None|
|400|Bad Request|<b>Malformed request</b>: malformed syntax. Possible causes include:<br>  - requested syntax is not available|None|
|403|Forbidden|<b>Forbidden</b>: Supplied API key is not valid for this request|None|
|410|Gone|<b>Gone</b>: Request for unsupported format|None|
|500|Internal Server Error|<b>Internal Server Error</b>: There is a problem with the TomTom Copyrights<br>API service|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Copyrights bounding box

> Code samples

```bash
curl "https://example.com/map/1/copyrights/-179.1506/18.9117/-66.9406/71.441.xml?key=${API_KEY}"
```

`GET /map/{versionNumber}/copyrights/{minLon}/{minLat}/{maxLon}/{maxLat}.{format}`

The Copyrights API returns copyright information for
the Maps API Raster Tile Service in JSON, JSONP, or XML format.
This call returns copyright information for a specific bounding box.

<h3 id="copyrights-bounding-box-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Version of the service to call. The current version is 1|
|format|path|string|true|Format of the response|
|minLon|path|number|true|Minimum longitude coordinate of bounding box defined in terms of latitude/longitude.|
|minLat|path|number|true|Minimum latitude coordinate of bounding box defined in terms of latitude/longitude.|
|maxLon|path|number|true|Maximum longitude coordinate of bounding box defined in terms of latitude/longitude.|
|maxLat|path|number|true|Maximum latitude coordinate of bounding box defined in terms of latitude/longitude.|
|callback|query|string|false|Specifies the jsonp callback method. Only used when format is jsonp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|1|
|format|json|
|format|jsonp|
|format|xml|

<h3 id="copyrights-bounding-box-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|<b>OK</b>|None|
|304|Not Modified|<b>Not Modified</b>|None|
|400|Bad Request|<b>Malformed request</b>: malformed syntax. Possible causes include:<br>  - requested syntax is not available|None|
|401|Unauthorized|<b>Bad request</b>: Parameters out of range. Possible causes include:<br>  - minLon n is out of range [-180,180]: the requested minimum longitude coordinate is out of possible range<br>  - minLat n is out of range [-90,90]: the requested minimum latitude coordinate is out of possible range<br>  - maxLon n is out of range [-180,180]: the requested maximum longitude coordinate is out of possible range<br>  - maxLat n is out of range [-90,90]: the requested minimum latitude coordinate is out of possible range|None|
|403|Forbidden|<b>Forbidden</b>: Supplied API key is not valid for this request|None|
|410|Gone|<b>Gone</b>: Request for unsupported format|None|
|500|Internal Server Error|<b>Internal Server Error</b>: There is a problem with the TomTom Copyrights<br>API service|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Copyrights tile

> Code samples

```bash
curl "https://example.com/map/1/copyrights/0/0/0.xml?key=${API_KEY}"
```

`GET /map/{versionNumber}/copyrights/{zoom}/{X}/{Y}.{format}`

The Copyrights API returns copyright information for
the Maps API Raster Tile Service in JSON, JSONP, or XML format.
This call returns copyright information for the a specific map tile.

<h3 id="copyrights-tile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Version of the service to call. The current version is 1|
|format|path|string|true|Format of the response|
|zoom|path|integer|true|Zoom level of tile to be rendered. Only used for tile-level<br>copyright calls.|
|X|path|integer|true|X coordinate of the tile on zoom grid. Only used for tile-level<br>copyright calls.|
|Y|path|integer|true|Y coordinate of the tile on zoom grid. Only used for tile-level<br>copyright calls.|
|callback|query|string|false|Specifies the jsonp callback method. Only used when format is jsonp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|1|
|format|json|
|format|jsonp|
|format|xml|
|zoom|0|
|zoom|1|
|zoom|2|
|zoom|3|
|zoom|4|
|zoom|5|
|zoom|6|
|zoom|7|
|zoom|8|
|zoom|9|
|zoom|10|
|zoom|11|
|zoom|12|
|zoom|13|
|zoom|14|
|zoom|15|
|zoom|16|
|zoom|17|
|zoom|18|

<h3 id="copyrights-tile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|<b>OK</b>|None|
|304|Not Modified|<b>Not Modified</b>|None|
|400|Bad Request|<b>Malformed request</b>: malformed syntax. Possible causes include:<br>  - requested syntax is not available|None|
|401|Unauthorized|<b>Bad request</b>: Parameters out of range. Possible causes include:<br>  - zoom n is out of range 0 <= zoom < 19: the requested zoom level is out of the possible range<br>  - x n is out of range [0,m]: the requested x coordinate is out of the possible range (the value of m will vary depending on zoom level)<br>  - y n is out of range [0,m]: the requested y coordinate is out of the possible range (the value of m will vary depending on zoom level)|None|
|403|Forbidden|<b>Forbidden</b>: Supplied API key is not valid for this request|None|
|410|Gone|<b>Gone</b>: Request for unsupported format|None|
|500|Internal Server Error|<b>Internal Server Error</b>: There is a problem with the TomTom Copyrights<br>API service|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="maps-raster">Raster</h1>

## Static Image

> Code samples

```bash
curl "https://example.com/map/1/staticimage?key=${API_KEY}"
```

`GET /map/{versionNumber}/staticimage`

The Static Image service renders a rectangular raster image
in the style, size, and zoom level specified. The image can be requested
using either a center point plus width and height or a bounding box.

<h3 id="static-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Version of the service to call. The current version is 1.|
|layer|query|string|false|Layer of image to be rendered. <em>Hybrid</em> and <em>labels</em><br>are intended for layering with other data and are only available in <em>png</em> format.|
|style|query|string|false|Map style to be returned|
|format|query|string|false|Image format to be returned|
|zoom|query|integer|false|Zoom level of map image to be returned.|
|center|query|string|false|Coordinates for the center point of the image.<br>Must be used with the <strong>width</strong> and<br><strong>height</strong> parameters; cannot be used with <strong>bbox</strong>.<br>Uses EPSG:3857 projection (functionally equivalent to EPSG:900910).|
|width|query|integer|false|Width of the resulting image in pixels. Width must be a positive integer between 1 and 8192.|
|height|query|integer|false|Height of the resulting image in pixels. Height must be a positive integer between 1 and 8192.|
|bbox|query|string|false|Bounding box for the image, using EPSG:3857 projection (functionally equivalent to EPSG:900910).<br>Values <strong>must</strong> be in the order of minLon, minLat, maxLon, maxLat.<br>MaxLat must be greater than minLat. Longitude values can be on both sides of the 180th meridian.<br>Cannot be used with <strong>center</strong>, <strong>width</strong>, or <strong>height</strong> parameters.|
|view|query|string|false|Geopolitical view. Determines rendering of disputed areas. See the <a href="/maps-api/maps-api-documentation-raster/raster-tile">documentation</a> for an explanation of how this works in live services.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|1|
|layer|basic|
|layer|hybrid|
|layer|labels|
|style|main|
|style|night|
|format|png|
|format|jpg|
|format|jpeg|
|zoom|0|
|zoom|1|
|zoom|2|
|zoom|3|
|zoom|4|
|zoom|5|
|zoom|6|
|zoom|7|
|zoom|8|
|zoom|9|
|zoom|10|
|zoom|11|
|zoom|12|
|zoom|13|
|zoom|14|
|zoom|15|
|zoom|16|
|zoom|17|
|zoom|18|
|zoom|19|
|zoom|20|
|zoom|21|
|zoom|22|
|view|Unified|
|view|IN|

<h3 id="static-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|<b>OK</b>|None|
|400|Bad Request|<b>Bad Request</b>: Received by the interface, but there is an error<br>in the request, such as:<br>  - one or more of the required parameters is missing<br>  - unsupported or unrecognized parameter value<br>  - two or more mutually exclusive parameters are used in the same query (e.g. mixing center/width/height and bbox.)<br>  - minimum latitude is greater than maximum latitude in a bbox call<br>  - layer containing alpha channel is requested in format not supporting the alpha channel<br>This code is returned if the required parameters of the request were<br>malformed. A detailed exception explanation is returned in a<br>response in form of Service Exception Report.|None|
|403|Forbidden|<b>Forbidden</b>:<br>  - supplied API key is not valid for the request<br>  - the requested view is not available in the country where the request was sent from|None|
|500|Internal Server Error|<b>Internal Server Error</b>: There is a problem with the Static Map<br>Service.|None|
|503|Service Unavailable|<b>Service currently unavailable.</b>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Tile

> Code samples

```bash
curl "https://example.com/map/1/tile/basic/main/0/0/0.png?key=${API_KEY}"
```

`GET /map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.{format}`

The Maps API Raster Service delivers raster tiles, which are representations of square sections of map data.

<h3 id="tile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Version of the service to call. The current version is 1.|
|layer|path|string|true|Layer of tile to be rendered. <em>Hybrid</em> and <em>labels</em> are intended for layering with other data and are only available in <em>png</em> format.|
|style|path|string|true|Style of tile to be rendered|
|zoom|path|integer|true|Zoom level of tile to be rendered|
|X|path|integer|true|x coordinate of tile on zoom grid|
|Y|path|integer|true|y coordinate of tile on zoom grid|
|format|path|string|true|Format of the response.|
|tileSize|query|integer|false|Tile dimensions in pixels. <em>512</em> is only available for the <em>main</em> style and <em>basic</em> or <em>labels</em> layers.|
|view|query|string|false|Geopolitical view. Determines rendering of disputed areas. See the <a href="/maps-sdk-web/functional-examples#geopolitical-views">documentation</a> for an explanation of how this works in live services.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|1|
|layer|basic|
|layer|hybrid|
|layer|labels|
|style|main|
|style|night|
|zoom|0|
|zoom|1|
|zoom|2|
|zoom|3|
|zoom|4|
|zoom|5|
|zoom|6|
|zoom|7|
|zoom|8|
|zoom|9|
|zoom|10|
|zoom|11|
|zoom|12|
|zoom|13|
|zoom|14|
|zoom|15|
|zoom|16|
|zoom|17|
|zoom|18|
|zoom|19|
|zoom|20|
|zoom|21|
|zoom|22|
|format|jpg|
|format|png|
|tileSize|256|
|tileSize|512|
|view|Unified|
|view|IN|

<h3 id="tile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|<b>OK</b>|None|
|302|Found|<b>Found</b>: URL redirection|None|
|400|Bad Request|<b>Bad request</b>: Usually the result of malformed syntax:<br>  - the given combination of layer, style, and query parameters is not supported<br>  - zoom n is out of range 0 <= zoom < 19: the requested zoom level is out of the possible range<br>  - x n is out of range [0,m]: the requested x coordinate is out of the possible range (the value of m will vary depending on zoom level)<br>  - y n is out of range [0,m]: the requested y coordinate is out of the possible range (the value of m will vary depending on zoom level)<br>  - the requested view is not supported|None|
|403|Forbidden|<b>Forbidden</b>:<br>  - the supplied API key is not valid for this request<br>  - the requested view is not available in the country where the request was sent from|None|
|410|Gone|<b>Gone</b>: Request for unsupported format|None|
|500|Internal Server Error|<b>Internal Server Error</b>: There is a problem with the TomTom<br>Maps API Raster Tile service|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="maps-vector">Vector</h1>

## Tile

> Code samples

```bash
curl "https://example.com/map/1/tile/basic/main/0/0/0.pbf?key=${API_KEY}"
```

`GET /map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.pbf`

The Maps API Vector Service delivers vector tiles, which are representations of square sections of map data.

<h3 id="tile-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Version of the service to call. The current version is 1|
|layer|path|string|true|Layer of tile to be rendered|
|style|path|string|true|Style of tile to be rendered|
|zoom|path|integer|true|Zoom level of tile to be rendered|
|X|path|integer|true|x coordinate of tile on zoom grid|
|Y|path|integer|true|y coordinate of tile on zoom grid|
|view|query|string|false|Geopolitical view. Determines rendering of disputed areas. See the <a href="/maps-api/maps-api-documentation-vector/tile">documentation</a> for an explanation of how this works in live services.|
|language|query|string|false|Language to be used for labels in the response. The default is NGT: Neutral Ground Truth, which uses each place's local official language and script (where available). See the <a href="/maps-api/maps-api-documentation-vector/tile">documentation</a> for a full list of options.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|1|
|layer|basic|
|layer|hybrid|
|layer|labels|
|style|main|
|zoom|0|
|zoom|1|
|zoom|2|
|zoom|3|
|zoom|4|
|zoom|5|
|zoom|6|
|zoom|7|
|zoom|8|
|zoom|9|
|zoom|10|
|zoom|11|
|zoom|12|
|zoom|13|
|zoom|14|
|zoom|15|
|zoom|16|
|zoom|17|
|zoom|18|
|zoom|19|
|zoom|20|
|zoom|21|
|zoom|22|
|view|Unified|
|view|IL|
|view|IN|

<h3 id="tile-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|<b>OK</b>|None|
|400|Bad Request|<b>Bad request</b>: Usually the result of malformed syntax:<br>  - the given combination of layer, style, and query parameters is not supported<br>  - zoom n is out of range 0 <= zoom <= 22: the requested zoom level is out of the possible range<br>  - x n is out of range [0,m]: the requested x coordinate is out of the possible range (the value of m will vary depending on zoom level)<br>  - y n is out of range [0,m]: the requested y coordinate is out of the possible range (the value of m will vary depending on zoom level)<br>  - the requested view is not supported|None|
|403|Forbidden|<b>Forbidden</b>: <br>  - the supplied API key is not valid for this request<br>  - the requested view is not available in your country|None|
|500|Internal Server Error|<b>Internal Server Error</b>: There is a problem with the TomTom<br>Maps API Vector Tile service|None|
|503|Service Unavailable|<b>Service currently unavailable</b>.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="maps-wms-wmts">WMS / WMTS</h1>

## GetMap

<a id="opIdGetMap"></a>

> Code samples

```bash
curl "https://example.com/map/1/wms/?request=GetMap&srs=EPSG%3A4326&bbox=-0.489%2C51.28%2C0.236%2C51.686&width=512&height=512&format=image%2Fpng&layers=basic&version=1.1.1&key=${API_KEY}"
```

`GET /map/{versionNumber}/wms/`

The GetMap call implements the Web Map Service 1.1.1 standard
to access TomTom raster map tiles. This service is described
in the response to the GetCapabilities API call.

<h3 id="getmap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Version of the service to call. The current version is 1|
|request|query|string|true|Request type|
|srs|query|string|true|Projection used in describing the <b>bbox</b> EPSG:3857 is<br>recommended, particularly at higher zoom levels. (Note that<br>EPSG:3857 is functionally equivalent to EPSG:900913/EPSG:3785)|
|bbox|query|string|true|Bounding box in the projection stated in <b>srs</b><br>(minLon,minLat,maxLon,maxLat)|
|width|query|integer|true|Width of the resulting image, in pixels Maximum value is 2048|
|height|query|integer|true|Height of the resulting image, in pixels Maximum value is 2048|
|format|query|string|true|Image format to be returned|
|layers|query|string|true|Map layers requested Currently only the basic layer is available|
|styles|query|string|false|Map styles to be returned. Currently, no styles are available. This<br>parameter is present for forward compatibility; it must be used and<br>left blank.|
|service|query|string|false|Service type|
|version|query|string|true|WMS service version|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|1|
|request|GetMap|
|srs|EPSG:3857|
|srs|EPSG:4326|
|format|image/jpeg|
|format|image/png|
|layers|basic|
|styles|""|
|service|WMS|
|version|1.1.1|

<h3 id="getmap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|<b>OK</b>|None|
|202|Accepted|<b>Accepted</b>: Received by the interface, but there is a WMS exception in<br>processing it. Possible causes include:<br>  - one or more required parameters is missing<br>  - unsupported or unrecognized parameter value<br>  - malformed bounding box requested<br>  - invalid map dimensions requested<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>  <br>This code is returned if the parameters of the request were malformed.<br>The response includes a detailed explanation in the Service Exception Report.|None|
|401|Unauthorized|<b>Unauthorized</b>: Supplied API key is not valid for the request|None|
|500|Internal Server Error|<b>Internal Server Error</b>: There is a problem with the TomTom WMS<br>service|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## GetCapabilities

<a id="opIdGetCapabilities"></a>

> Code samples

```bash
curl "https://example.com/map/1/wms//?service=WMS&request=GetCapabilities&key=${API_KEY}"
```

`GET /map/{versionNumber}/wms//`

The GetCapabilities call is part of TomTom's implementation of version 1.1.1
the Web Map Service (WMS). It provides descriptions of the other calls
that are available in the implementation.

<h3 id="getcapabilities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|none|
|service|query|string|true|none|
|request|query|string|true|none|
|version|query|string|false|WMS service version|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|1|
|service|WMS|
|request|GetCapabilities|
|version|1.1.1|

<h3 id="getcapabilities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|<b>OK</b>|None|
|202|Accepted|<b>Accepted</b>: Received by the interface, but there is a WMS exception in<br>processing it. Possible causes include:<br>  - one or more required parameters is missing<br>  - unsupported or unrecognized parameter value<br>  - malformed bounding box requested<br>  - invalid map dimensions requested<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>  <br>This code is returned if the parameters of the request were malformed.<br>The response includes a detailed explanation in the Service Exception Report.|None|
|401|Unauthorized|<b>Unauthorized</b>: Supplied API key is not valid for the request|None|
|500|Internal Server Error|<b>Internal Server Error</b>: There is a problem with the TomTom WMS<br>service|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## WMTS

> Code samples

```bash
curl https://example.com/map/1/wmts/string/1.0.0/WMTSCapabilities.xml
```

`GET /map/{versionNumber}/wmts/{key}/{wmtsVersion}/WMTSCapabilities.xml`

The WMTS GetCapabilities call implements version 1.0.0 of
the <a href="http://www.opengeospatial.org/standards/wmts">Web Map Tile Service</a>
(WMTS) standard. It returns metadata that allows compatible calling systems to construct
calls to TomTom's raster map tile service. See the
<a href="/maps-api/maps-api-documentation-raster/wmts">documentation</a>
for more information on WMTS.

<h3 id="wmts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Version of the service to call. The current version is 1|
|key|path|string|true|Your API key for calling this service.|
|wmtsVersion|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|1|
|wmtsVersion|1.0.0|

<h3 id="wmts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|<b>OK</b>|None|
|400|Bad Request|<b>Bad request</b>: Probably malformed syntax|None|
|401|Unauthorized|<b>Unauthorized</b>: Supplied API key is not valid for this request|None|
|500|Internal Server Error|<b>Internal Server Error</b>: There is a problem with the TomTom WMTS service|None|

<aside class="success">
This operation does not require authentication
</aside>
