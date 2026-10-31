<h1 id="geomark-web-service-rest-api">GeoMark Web Service REST API v4.1.2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Geomark Web Service allows you to create and share geographic areas of interest over the web in a variety of formats and coordinate systems. This service is especially helpful when you need to share an area of interest with people who require that the data be in a different format, or they use different mapping software. 

Please note that you may experience issues when submitting requests to the delivery or test environment if using this [OpenAPI specification](https://github.com/bcgov/api-specs/tree/master/geomark) in other API console viewers.

Base URLs:

* <a href="https://apps.gov.bc.ca/pub/geomark">https://apps.gov.bc.ca/pub/geomark</a> - Production

* <a href="https://test.apps.gov.bc.ca/pub/geomark">https://test.apps.gov.bc.ca/pub/geomark</a> - Test

* <a href="https://delivery.apps.gov.bc.ca/pub/geomark">https://delivery.apps.gov.bc.ca/pub/geomark</a> - Delivery

<a href="https://www2.gov.bc.ca/gov/content?id=D1EE0A405E584363B205CD4353E02C88">Terms of service</a>
Web: <a href="https://dpdd.atlassian.net/servicedesk/customer/portal/1/group/7/">Contact DataBC</a> 
License: <a href="https://www2.gov.bc.ca/gov/content?id=A519A56BC2BF44E4A008B33FCF527F61">Open Government License - British Columbia</a>

<a href="https://www2.gov.bc.ca/gov/content?id=F6BAF45131954020BCFD2EBCC456F084">Geomark Web Service</a>

<h1 id="geomark-web-service-rest-api-create">create</h1>

## Create a new geomark by copying the geometries from one or more existing geomarks from the current server.

> Code samples

```bash
curl 'https://example.com/geomarks/copy?geomarkUrl=https%3A%2F%2Fapps.gov.bc.ca%2Fpub%2Fgeomark%2Fgeomarks%2Fgm-abcdefghijklmnopqrstuv0bcislands' \
  -X POST
```

`POST /geomarks/copy`

The source geomarks can be specified by with the geomarkUrl parameter.  Repeat the parameter if sourcing from multiple geomarks

<h3 id="create-a-new-geomark-by-copying-the-geometries-from-one-or-more-existing-geomarks-from-the-current-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geomarkUrl|query|string|true|One or more geomark URLs or identifiers to create the new geomark from.|
|resultFormat|query|string|false|The file format the geomark info resource should be returned using.|
|allowOverlap|query|boolean|false|Select this option to allow overlapping geometries|
|callback|query|string|false|The callback function a JSON result format would be wrapped in to support Ajax requests.|
|redirectUrl|query|string|false|The optional external URL to redirect the user to when the geomark is created rather than showing the geomark info page. The geomarkId and geomarkUrl query string parameters will be added to the redirectUrl so that the target application gets a reference to the geomark.|
|failureRedirectUrl|query|string|false|The url to redirect if the geomark could not be created. The URL will include a <fieldName>_Error parameter with the error message for the field that caused the error.|
|bufferMetres|query|integer|false|The amount to buffer the geometry in metres, must only contain numerical digits (e.g 10). Leave blank and no buffer will be added to input geometries. If blank then any Point, LineString, MultiPoint and MultiLineString geometries will be ignored.|
|bufferJoin|query|string|false|If bufferMetres is specified, The style of buffer to use for joins between the line segments for lines and polygons.|
|bufferCap|query|string|false|If bufferMetres is specified, The style of buffer to use at the ends of a buffered line.|
|bufferMitreLimit|query|integer|false|If bufferMetres is specified, the maximum ratio of distance from the original geometry to a mitre buffer point and the buffer amount. If the ratio is greater than this a bevel will be used instead. This prevents infinite distances when the angle between the two lines at a join is small. Must be > 0.|
|bufferSegments|query|integer|false|If bufferMetres is specified, the number of line segments used in each quadrant to approximate the curve for round end-cap and join styles. Must be > 0.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resultFormat|json|
|resultFormat|xml|
|resultFormat|kml|
|resultFormat|kmz|
|resultFormat|shp|
|resultFormat|shpz|
|resultFormat|geojson|
|resultFormat|gml|
|resultFormat|gpkg|
|resultFormat|wkt|
|allowOverlap|false|
|allowOverlap|true|
|bufferJoin|ROUND|
|bufferJoin|MITRE|
|bufferJoin|BEVEL|
|bufferCap|ROUND|
|bufferCap|SQUARE|
|bufferCap|FLAT|

<h3 id="create-a-new-geomark-by-copying-the-geometries-from-one-or-more-existing-geomarks-from-the-current-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|If the geomark was created via a web service call.|None|
|302|Found|If the geomark was created and a redirectUrl was specified then the response will redirect to the redirectUrl with the query string parameters geomarkId and geomarkUrl of the created geomark.<br><br>Additional reasons for this status code can be found in the [Geomark Web Service Developer Guide](https://apps.gov.bc.ca/pub/geomark/docs/rest-api/)|None|
|400|Bad Request|**Couldn't create Geomark.**<br><br>Possible reasons:<br><br>* No Polygon, Multi-Polygon, or folder(set) of Polygons provided.<br>* A point or line was provided without a buffer width.<br><br>Additional reasons for this status code can be found in the [Geomark Web Service Developer Guide](https://apps.gov.bc.ca/pub/geomark/docs/rest-api/)|None|
|500|Internal Server Error|**Internal Server Error**|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new geomark

> Code samples

```bash
curl https://example.com/geomarks/new \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'allowOverlap=false&body=string&bufferCap=ROUND&bufferJoin=ROUND&bufferMetres=0&bufferMitreLimit=5&bufferSegments=8&callback=string&failureRedirectUrl=string&format=json&multiple=false&redirectUrl=string&resultFormat=json&srid=4326'
```

`POST /geomarks/new`

Create a new geomark from the geometries read from the 'body' parameter or file.

> Body parameter

```yaml
allowOverlap: false
body: string
bufferCap: ROUND
bufferJoin: ROUND
bufferMetres: 0
bufferMitreLimit: 5
bufferSegments: 8
callback: string
failureRedirectUrl: string
format: json
multiple: false
redirectUrl: string
resultFormat: json
srid: 4326
```

<h3 id="create-a-new-geomark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» allowOverlap|body|boolean|false|When multiple=true select this option to allow overlapping geometries|
|» body|body|string|false|The binary or character content representing the geometry or geometries|
|» bufferCap|body|string|false|If bufferMetres is specified, The style of buffer to use at the ends of a buffered line.|
|» bufferJoin|body|string|false|If bufferMetres is specified, The style of buffer to use for joins between the line segments for lines and polygons.|
|» bufferMetres|body|integer|false|The amount to buffer the geometry in metres, must only contain numerical digits (e.g 10). Leave blank and no buffer will be added to input geometries. If blank then any Point, LineString, MultiPoint and MultiLineString geometries will be ignored.|
|» bufferMitreLimit|body|integer|false|If bufferMetres is specified, the maximum ratio of distance from the original geometry to a mitre buffer point and the buffer amount. If the ratio is greater than this a bevel will be used instead. This prevents infinite distances when the angle between the two lines at a join is small. Must be > 0.|
|» bufferSegments|body|integer|false|If bufferMetres is specified, the number of line segments used in each quadrant to approximate the curve for round end-cap and join styles. Must be > 0.|
|» callback|body|string|false|The callback function a JSON result format would be wrapped in to support Ajax requests.|
|» failureRedirectUrl|body|string|false|The url to redirect if the geomark could not be created. The URL will include a <fieldName>_Error parameter with the error message for the field that caused the error.|
|» format|body|string|false|The file format name extension of the input geometry.|
|» multiple|body|boolean|false|Boolean flag indicating if multiple geometries are to be used for the geomark (true) or only a single geometry from the first geometry (false).|
|» redirectUrl|body|string|false|The optional external URL to redirect the user to when the geomark is created rather than showing the geomark info page. The geomarkId and geomarkUrl query string parameters will be added to the redirectUrl so that the target application gets a reference to the geomark.|
|» resultFormat|body|string|false|The file format the geomark info resource should be returned using.|
|» srid|body|integer|false|The srid of the coordinate system the input geometries are in. If the file includes a coordinate system definition that will be used.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» allowOverlap|false|
|» allowOverlap|true|
|» bufferCap|ROUND|
|» bufferCap|SQUARE|
|» bufferCap|FLAT|
|» bufferJoin|ROUND|
|» bufferJoin|MITRE|
|» bufferJoin|BEVEL|
|» format|json|
|» format|xml|
|» format|kml|
|» format|kmz|
|» format|shp|
|» format|shpz|
|» format|geojson|
|» format|gml|
|» format|gpkg|
|» format|wkt|
|» multiple|false|
|» multiple|true|
|» resultFormat|json|
|» resultFormat|xml|
|» resultFormat|kml|
|» resultFormat|kmz|
|» resultFormat|shp|
|» resultFormat|shpz|
|» resultFormat|geojson|
|» resultFormat|gml|
|» resultFormat|gpkg|
|» resultFormat|wkt|
|» srid|4326|
|» srid|3005|
|» srid|3857|
|» srid|26907|
|» srid|26908|
|» srid|26909|
|» srid|26910|
|» srid|26911|

<h3 id="create-a-new-geomark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|If the geomark was created via a web service call.|None|
|302|Found|If the geomark was created and a redirectUrl was specified then the response will redirect to the redirectUrl with the query string parameters geomarkId and geomarkUrl of the created geomark.<br><br>Additional reasons for this status code can be found in the [Geomark Web Service Developer Guide](https://apps.gov.bc.ca/pub/geomark/docs/rest-api/)|None|
|400|Bad Request|**Couldn't create Geomark.**<br><br>Possible reasons:<br><br>* No Polygon, Multi-Polygon, or folder(set) of Polygons provided.<br>* A point or line was provided without a buffer width.<br><br>Additional reasons for this status code can be found in the [Geomark Web Service Developer Guide](https://apps.gov.bc.ca/pub/geomark/docs/rest-api/)|None|
|500|Internal Server Error|**Internal Server Error**|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geomark-web-service-rest-api-boundingbox">boundingBox</h1>

## Gets the bounding box of the geomark

> Code samples

```bash
curl https://example.com/geomarks/gm-abcdefghijklmnopqrstuv0bcislands/boundingBox.json
```

`GET /geomarks/{geomarkId}/boundingBox.{fileFormatExtension}`

The source geomarks can be specified by with the geomarkUrl parameter.  Repeat the parameter if sourcing from multiple geomarks

<h3 id="gets-the-bounding-box-of-the-geomark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geomarkId|path|string|true|The unique identifier for the geomark|
|fileFormatExtension|path|string|true|The file format name extension used to represent the geomark download.|
|srid|query|integer|false|The srid of the coordinate system the geometry should be converted to.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fileFormatExtension|json|
|fileFormatExtension|xml|
|fileFormatExtension|kml|
|fileFormatExtension|kmz|
|fileFormatExtension|shp|
|fileFormatExtension|shpz|
|fileFormatExtension|geojson|
|fileFormatExtension|gml|
|fileFormatExtension|gpkg|
|fileFormatExtension|wkt|
|srid|4326|
|srid|3005|
|srid|3857|
|srid|26907|
|srid|26908|
|srid|26909|
|srid|26910|
|srid|26911|

<h3 id="gets-the-bounding-box-of-the-geomark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The geomark will be returned in the body of the HTTP response encoded in the requested [file format](https://apps.gov.bc.ca/pub/geomark/docs/fileFormats.html).|None|
|400|Bad Request|**Coordinate system with srid = <srid> is not supported.**<br><br>Check the list of supported [coordinate systems](https://apps.gov.bc.ca/pub/geomark/docs/coordinateSystems.html).|None|
|404|Not Found|**The geomark <geomarkId> could not be found.**<br><br>Check for extra characters on the end of the URL. The geomark may have expired and been deleted.|None|
|500|Internal Server Error|**Internal Server Error**|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geomark-web-service-rest-api-feature">feature</h1>

## Get the feature and attribution of the geomark

> Code samples

```bash
curl https://example.com/geomarks/gm-abcdefghijklmnopqrstuv0bcislands/feature.json
```

`GET /geomarks/{geomarkId}/feature.{fileFormatExtension}`

The geomark feature resource returns a single spatial feature with either a single (Point, LineString, Polygon) or multi-part geometry (MultiPoint, MultiLineString, MultiPolygon) and the geomark attribution.  The geometry and attribution can be downloaded as a spatial download file format in a supported coordinate system. The download files can then be used in a desktop GIS application (e.g. ArcMap), Google Earth or a web mapping application.

<h3 id="get-the-feature-and-attribution-of-the-geomark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geomarkId|path|string|true|The unique identifier for the geomark|
|fileFormatExtension|path|string|true|The file format name extension used to represent the geomark download.|
|srid|query|integer|false|The srid of the coordinate system the geometry should be converted to.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fileFormatExtension|json|
|fileFormatExtension|xml|
|fileFormatExtension|kml|
|fileFormatExtension|kmz|
|fileFormatExtension|shp|
|fileFormatExtension|shpz|
|fileFormatExtension|geojson|
|fileFormatExtension|gml|
|fileFormatExtension|gpkg|
|fileFormatExtension|wkt|
|srid|4326|
|srid|3005|
|srid|3857|
|srid|26907|
|srid|26908|
|srid|26909|
|srid|26910|
|srid|26911|

<h3 id="get-the-feature-and-attribution-of-the-geomark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The geomark will be returned in the body of the HTTP response encoded in the requested [file format](https://apps.gov.bc.ca/pub/geomark/docs/fileFormats.html).|None|
|400|Bad Request|**Coordinate system with srid = <srid> is not supported.**<br><br>Check the list of supported [coordinate systems](https://apps.gov.bc.ca/pub/geomark/docs/coordinateSystems.html).|None|
|404|Not Found|**The geomark <geomarkId> could not be found.**<br><br>Check for extra characters on the end of the URL. The geomark may have expired and been deleted.|None|
|500|Internal Server Error|**Internal Server Error**|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geomark-web-service-rest-api-info">info</h1>

## Get information about a particular geomark

> Code samples

```bash
curl https://example.com/geomarks/gm-abcdefghijklmnopqrstuv0bcislands.json
```

`GET /geomarks/{geomarkId}.{fileFormatExtension}`

The attribution can be downloaded as a info file format. The download files can then be processed by a client application to access the geomark info fields and to get the URLs to the geometry download resources.

<h3 id="get-information-about-a-particular-geomark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geomarkId|path|string|true|The unique identifier for the geomark.|
|fileFormatExtension|path|string|true|The file format name extension used to represent the geomark download.|
|srid|query|integer|false|The srid of the coordinate system the geometry should be converted to.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fileFormatExtension|json|
|fileFormatExtension|xml|
|fileFormatExtension|kml|
|fileFormatExtension|kmz|
|fileFormatExtension|shp|
|fileFormatExtension|shpz|
|fileFormatExtension|geojson|
|fileFormatExtension|gml|
|fileFormatExtension|gpkg|
|fileFormatExtension|wkt|
|srid|4326|
|srid|3005|
|srid|3857|
|srid|26907|
|srid|26908|
|srid|26909|
|srid|26910|
|srid|26911|

<h3 id="get-information-about-a-particular-geomark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The geomark will be returned in the body of the HTTP response encoded in the requested [file format](https://apps.gov.bc.ca/pub/geomark/docs/fileFormats.html).|None|
|404|Not Found|**The geomark <geomarkId> could not be found.**<br><br>Check for extra characters on the end of the URL. The geomark may have expired and been deleted.|None|
|500|Internal Server Error|**Internal Server Error**|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geomark-web-service-rest-api-parts">parts</h1>

## Get the individual geometries within a multi-part geometry

> Code samples

```bash
curl https://example.com/geomarks/gm-abcdefghijklmnopqrstuv0bcislands/parts.json
```

`GET /geomarks/{geomarkId}/parts.{fileFormatExtension}`

The geomark parts resource returns a one or more spatial features. One for each part of the Geomark's geomerty. Each part contains a single (Point, LineString, Polygon) geometry and the geomark attribution.

<h3 id="get-the-individual-geometries-within-a-multi-part-geometry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geomarkId|path|string|true|The unique identifier for the geomark|
|fileFormatExtension|path|string|true|The file format name extension used to represent the geomark download.|
|srid|query|integer|false|The srid of the coordinate system the geometry should be converted to.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fileFormatExtension|json|
|fileFormatExtension|xml|
|fileFormatExtension|kml|
|fileFormatExtension|kmz|
|fileFormatExtension|shp|
|fileFormatExtension|shpz|
|fileFormatExtension|geojson|
|fileFormatExtension|gml|
|fileFormatExtension|gpkg|
|fileFormatExtension|wkt|
|srid|4326|
|srid|3005|
|srid|3857|
|srid|26907|
|srid|26908|
|srid|26909|
|srid|26910|
|srid|26911|

<h3 id="get-the-individual-geometries-within-a-multi-part-geometry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The geomark will be returned in the body of the HTTP response encoded in the requested [file format](https://apps.gov.bc.ca/pub/geomark/docs/fileFormats.html).|None|
|400|Bad Request|**Coordinate system with srid = <srid> is not supported.**<br><br>Check the list of supported [coordinate systems](https://apps.gov.bc.ca/pub/geomark/docs/coordinateSystems.html).|None|
|404|Not Found|**The geomark <geomarkId> could not be found.**<br><br>Check for extra characters on the end of the URL. The geomark may have expired and been deleted.|None|
|500|Internal Server Error|**Internal Server Error**|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geomark-web-service-rest-api-point">point</h1>

## Gets a single spatial point representative of the geomark.

> Code samples

```bash
curl https://example.com/geomarks/gm-abcdefghijklmnopqrstuv0bcislands/point.json
```

`GET /geomarks/{geomarkId}/point.{fileFormatExtension}`

The geomark point resource returns a single spatial feature with a single Point and the geomark attribution.  The point geometry will be created from the first geometry part of the Geomark. Point geomarks will return the first Point part in the geomark.  LineString geomarks will return the first coordinate of the first LineString part in the geomark. Polygon geomarks will return the centroid or another point inside the first Polygon part in the geomark. The geometry and attribution can be downloaded as a spatial download file format in a supported coordinate system. The download files can then be used in a desktop GIS application (e.g. ArcMap), Google Earth or a web mapping application.

<h3 id="gets-a-single-spatial-point-representative-of-the-geomark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geomarkId|path|string|true|The unique identifier for the geomark.|
|fileFormatExtension|path|string|true|The file format name extension used to represent the geomark download.|
|srid|query|integer|false|The srid of the coordinate system the geometry should be converted to.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fileFormatExtension|json|
|fileFormatExtension|xml|
|fileFormatExtension|kml|
|fileFormatExtension|kmz|
|fileFormatExtension|shp|
|fileFormatExtension|shpz|
|fileFormatExtension|geojson|
|fileFormatExtension|gml|
|fileFormatExtension|gpkg|
|fileFormatExtension|wkt|
|srid|4326|
|srid|3005|
|srid|3857|
|srid|26907|
|srid|26908|
|srid|26909|
|srid|26910|
|srid|26911|

<h3 id="gets-a-single-spatial-point-representative-of-the-geomark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The geomark will be returned in the body of the HTTP response encoded in the requested [file format](https://apps.gov.bc.ca/pub/geomark/docs/fileFormats.html).|None|
|400|Bad Request|**Coordinate system with srid = <srid> is not supported.**<br><br>Check the list of supported [coordinate systems](https://apps.gov.bc.ca/pub/geomark/docs/coordinateSystems.html).|None|
|404|Not Found|**The geomark <geomarkId> could not be found.**<br><br>Check for extra characters on the end of the URL. The geomark may have expired and been deleted.|None|
|500|Internal Server Error|**Internal Server Error**|None|

<aside class="success">
This operation does not require authentication
</aside>
