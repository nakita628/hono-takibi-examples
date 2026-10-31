<h1 id="geocoder-rest-api">Geocoder REST API v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API represents address cleaning, correction, completion, geocoding, reverse geocoding, and proximity resources for intersection addresses, physical addresses and their occupants in British Columbia. Please read our [data collection notice](https://github.com/bcgov/api-specs/blob/master/COLLECTION_NOTICE.md#collection-notice).  

Please note that you may experience issues when submitting requests to the delivery or test environment if using this [OpenAPI specification](https://github.com/bcgov/api-specs) in other API console viewers. 

[API keys](https://api.gov.bc.ca/devportal/api-directory/273) are unique and can be acquired with a GitHub or IDIR account. 

 **Notification:** If you have applications or web pages that link to the BC Address Geocoder you must use the following URL. 

 *https://geocoder.api.gov.bc.ca* 

 Please note that the following URLs were deprecated in September 2018 [More Details](https://www2.gov.bc.ca/gov/content?id=103ADC5A956842828554238DEF28D6E5). 

 - http://apps.gov.bc.ca/pub/geocoder 
 - https://apps.gov.bc.ca/pub/geocoder
\
\

Base URLs:

* <a href="https://geocoder.api.gov.bc.ca/">https://geocoder.api.gov.bc.ca/</a> - Production (gated)

* <a href="https://geocodertst.api.gov.bc.ca/">https://geocodertst.api.gov.bc.ca/</a> - Test (gated)

* <a href="https://geocoderdlv.api.gov.bc.ca/">https://geocoderdlv.api.gov.bc.ca/</a> - Delivery (gated)

<a href="https://www2.gov.bc.ca/gov/content?id=D1EE0A405E584363B205CD4353E02C88">Terms of service</a>
Web: <a href="https://dpdd.atlassian.net/servicedesk/customer/portal/1/group/7/">Contact DataBC</a> 
License: <a href="https://www2.gov.bc.ca/gov/content?id=A519A56BC2BF44E4A008B33FCF527F61">Open Government License - British Columbia</a>

<a href="https://www2.gov.bc.ca/gov/content?id=118DD57CD9674D57BDBD511C2E78DC0D">BC Address Geocoder</a>

# Authentication

* API Key (apikey)
    - Parameter Name: **apikey**, in: header.

<h1 id="geocoder-rest-api-sites">sites</h1>

## Geocode an address

> Code samples

```bash
curl https://example.com/addresses.json \
  -H "apikey: ${API_KEY}"
```

`GET /addresses.{outputFormat}`

Represents the set of geocoded and standardized sites and intersections whose address best matches a given query address.

<h3 id="geocode-an-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. <br><br>Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)|
|addressString|query|string|false|Civic or intersection address as a single string. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#addressString target="_blank">addressString</a>|
|locationDescriptor|query|string|false|Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>|
|maxResults|query|integer|false|The maximum number of search results to return.|
|interpolation|query|string|false|accessPoint interpolation method. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#interpolation target="_blank">interpolation</a>|
|echo|query|boolean|false|If true, include unmatched address details such as site name in results.|
|brief|query|boolean|false|If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.|
|autoComplete|query|boolean|false|If true, addressString is expected to contain a partial address that requires completion. Not supported for shp, csv, gml formats.|
|setBack|query|integer|false|The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|minScore|query|integer|false|The minimum score required for a match to be returned. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#minScore target="_blank">minScore</a>|
|matchPrecision|query|string|false|Example: street,locality.  A comma separated list of individual match precision levels to include in results. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#matchPrecision target="_blank">matchPrecision</a>|
|matchPrecisionNot|query|string|false|Example: street,locality.  A comma separated list of individual match precision levels to exclude from results. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#matchPrecisionNot target="_blank">matchPrecisionNot</a>|
|siteName|query|string|false|A string containing the name of the building, facility, or institution (e.g., Duck Building, Casa Del Mar, Crystal Garden, Bluebird House).See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#siteName target="_blank">siteName</a>|
|unitDesignator|query|string|false|The type of unit within a house or building. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#unitDesignator target="_blank">unitDesignator</a>|
|unitNumber|query|string|false|The number of the unit, suite, or apartment within a house or building.|
|unitNumberSuffix|query|string|false|A letter that follows the unit number as in Unit 1A or Suite 302B.|
|civicNumber|query|string|false|The official number assigned to a site by an address authority. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#civicNumber target="_blank">civicNumber</a>|
|civicNumberSuffix|query|string|false|A letter or fraction that follows the civic number (e.g., the A in 1039A Bledsoe St). See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#civicNumberSuffix target="_blank">civicNumberSuffix</a>|
|streetName|query|string|false|The official name of the street as assigned by an address authority (e.g., the Douglas in 1175 Douglas Street). See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetName target="_blank">streetName</a>|
|streetType|query|string|false|The type of street as assigned by a municipality (e.g., the ST in 1175 DOUGLAS St). See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetType target="_blank">streetType</a>|
|streetDirection|query|string|false|The abbreviated compass direction as defined by Canada Post and B.C. civic addressing authorities. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetDirection target="_blank">streetDirection</a>|
|streetQualifier|query|string|false|Example: the Bridge in Johnson St Bridge. The qualifier of a street name. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetQualifier target="_blank">streetQualifier</a>|
|localityName|query|string|false|The name of the locality assigned to a given site by an address authority. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#localityName target="_blank">localityName</a>|
|provinceCode|query|string|false|The ISO 3166-2 Sub-Country Code. The code for British Columbia is BC.|
|localities|query|string|false|A comma separated list of locality names that matched addresses must belong to. For example, setting localities to Nanaimo only returns addresses in Nanaimo|
|notLocalities|query|string|false|A comma-separated list of localities to exclude from the search.|
|bbox|query|string|false|Example: -126.07929,49.7628,-126.0163,49.7907.  A bounding box (xmin,ymin,xmax,ymax) that limits the search area. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#bbox target="_blank">bbox</a>|
|centre|query|string|false|Example: -124.0165926,49.2296251 .  The coordinates of a centre point (x,y) used to define a bounding circle that will limit the search area. This parameter must be specified together with 'maxDistance'. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#centre target='_blank'>centre</a>|
|maxDistance|query|number|false|The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.|
|extrapolate|query|boolean|false|If true, uses supplied parcelPoint to derive an appropriate accessPoint.           See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#extrapolate target="_blank">extrapolate</a>|
|parcelPoint|query|string|false|The coordinates of a point (x,y) known to be inside the parcel containing a given address. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#parcelPoint target="_blank">parcelPoint</a>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|geojson|
|outputFormat|xhtml|
|outputFormat|kml|
|outputFormat|gml|
|outputFormat|csv|
|outputFormat|shpz|
|locationDescriptor|any|
|locationDescriptor|accessPoint|
|locationDescriptor|frontDoorPoint|
|locationDescriptor|parcelPoint|
|locationDescriptor|rooftopPoint|
|locationDescriptor|routingPoint|
|interpolation|adaptive|
|interpolation|linear|
|interpolation|none|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|unitDesignator|APT|
|unitDesignator|BLDG|
|unitDesignator|BSMT|
|unitDesignator|FLR|
|unitDesignator|LOBBY|
|unitDesignator|LWR|
|unitDesignator|PAD|
|unitDesignator|PH|
|unitDesignator|REAR|
|unitDesignator|RM|
|unitDesignator|SIDE|
|unitDesignator|SITE|
|unitDesignator|SUITE|
|unitDesignator|TH|
|unitDesignator|UNIT|
|unitDesignator|UPPR|
|streetDirection|N|
|streetDirection|S|
|streetDirection|E|
|streetDirection|W|
|streetDirection|O|
|streetDirection|NE|
|streetDirection|NO|
|streetDirection|NW|
|streetDirection|SE|
|streetDirection|SO|
|streetDirection|SW|

<h3 id="geocode-an-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of matching sites or intersections and their physical locations. See <a href='https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#resource-representations-in-http-responses' target="_blank">addresses response</a>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Find sites near to a geographic point

> Code samples

```bash
curl 'https://example.com/sites/near.json?point=-122.377%2C50.121' \
  -H "apikey: ${API_KEY}"
```

`GET /sites/near.{outputFormat}`

Represents sites near a given point in the order of closest to farthest

<h3 id="find-sites-near-to-a-geographic-point-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. <br><br>Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)|
|point|query|string|true|The point (x,y) from which the nearby sites will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.|
|maxDistance|query|integer|false|The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|maxResults|query|integer|false|The maximum number of search results to return.|
|locationDescriptor|query|string|false|Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>|
|setBack|query|integer|false|The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.|
|brief|query|boolean|false|If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.|
|excludeUnits|query|boolean|false|If true, excludes sites that are units of a parent site|
|onlyCivic|query|boolean|false|If true, excludes sites without a civic address|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|geojson|
|outputFormat|xhtml|
|outputFormat|kml|
|outputFormat|gml|
|outputFormat|csv|
|outputFormat|shpz|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|locationDescriptor|any|
|locationDescriptor|accessPoint|
|locationDescriptor|frontDoorPoint|
|locationDescriptor|parcelPoint|
|locationDescriptor|rooftopPoint|
|locationDescriptor|routingPoint|

<h3 id="find-sites-near-to-a-geographic-point-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of selected sites that are near a given point in order of closest to farther. Each site in the response document is structured as a <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#site-address-representation" target="_blank">Site Address Representation</a>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Find the site nearest to a geographic point

> Code samples

```bash
curl 'https://example.com/sites/nearest.json?point=-122.377%2C50.121' \
  -H "apikey: ${API_KEY}"
```

`GET /sites/nearest.{outputFormat}`

Represents the site nearest a given point

<h3 id="find-the-site-nearest-to-a-geographic-point-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. <br><br>Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)|
|point|query|string|true|Centre point of search. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#point target="_blank">point</a>|
|maxDistance|query|integer|false|The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|locationDescriptor|query|string|false|Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>|
|setBack|query|integer|false|The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.|
|brief|query|boolean|false|If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.|
|excludeUnits|query|boolean|false|If true, excludes sites that are units of a parent site|
|onlyCivic|query|boolean|false|If true, excludes sites without a civic address|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|geojson|
|outputFormat|xhtml|
|outputFormat|kml|
|outputFormat|gml|
|outputFormat|csv|
|outputFormat|shpz|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|locationDescriptor|any|
|locationDescriptor|accessPoint|
|locationDescriptor|frontDoorPoint|
|locationDescriptor|parcelPoint|
|locationDescriptor|rooftopPoint|
|locationDescriptor|routingPoint|

<h3 id="find-the-site-nearest-to-a-geographic-point-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The nearest site in <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#site-address-representation" target="_blank">Site Address Representation</a>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Find sites in a geographic area

> Code samples

```bash
curl 'https://example.com/sites/within.json?bbox=-119.51%2C49.48%2C-119.53%2C49.50' \
  -H "apikey: ${API_KEY}"
```

`GET /sites/within.{outputFormat}`

Represents sites within a given area

<h3 id="find-sites-in-a-geographic-area-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. <br><br>Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)|
|bbox|query|string|true|A bounding box (xmin,ymin,xmax,ymax) used to limit the search area. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#bbox target="_blank">bbox</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|maxResults|query|integer|false|The maximum number of search results to return.|
|locationDescriptor|query|string|false|Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>|
|setBack|query|integer|false|The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.|
|brief|query|boolean|false|If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.|
|excludeUnits|query|boolean|false|If true, excludes sites that are units of a parent site|
|onlyCivic|query|boolean|false|If true, excludes sites without a civic address|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|geojson|
|outputFormat|xhtml|
|outputFormat|kml|
|outputFormat|gml|
|outputFormat|csv|
|outputFormat|shpz|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|locationDescriptor|any|
|locationDescriptor|accessPoint|
|locationDescriptor|frontDoorPoint|
|locationDescriptor|parcelPoint|
|locationDescriptor|rooftopPoint|
|locationDescriptor|routingPoint|

<h3 id="find-sites-in-a-geographic-area-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of selected sites within a given area. Each site in the response document is structured as a <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#site-address-representation" target="_blank">Site Address Representation</a>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get a site by its unique ID

> Code samples

```bash
curl https://example.com/sites/string.json \
  -H "apikey: ${API_KEY}"
```

`GET /sites/{siteID}.{outputFormat}`

Represents an individual site

<h3 id="get-a-site-by-its-unique-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteID|path|string|true|A unique, but not immutable, site identifier.|
|outputFormat|path|string|true|Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. <br><br>Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|locationDescriptor|query|string|false|Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>|
|brief|query|boolean|false|If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.|
|setBack|query|integer|false|The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|geojson|
|outputFormat|xhtml|
|outputFormat|kml|
|outputFormat|gml|
|outputFormat|csv|
|outputFormat|shpz|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|locationDescriptor|any|
|locationDescriptor|accessPoint|
|locationDescriptor|frontDoorPoint|
|locationDescriptor|parcelPoint|
|locationDescriptor|rooftopPoint|
|locationDescriptor|routingPoint|

<h3 id="get-a-site-by-its-unique-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The site with the requested siteID in <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#site-address-representation" target="_blank">Site Address Representation</a>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Represents all subsites of a given site

> Code samples

```bash
curl https://example.com/sites/string/subsites.json \
  -H "apikey: ${API_KEY}"
```

`GET /sites/{siteID}/subsites.{outputFormat}`

Represents all subsites of a given site

<h3 id="represents-all-subsites-of-a-given-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteID|path|string|true|A unique, but not immutable, site identifier.|
|outputFormat|path|string|true|Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. <br><br>Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|locationDescriptor|query|string|false|Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>|
|brief|query|boolean|false|If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.|
|setBack|query|integer|false|The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|geojson|
|outputFormat|xhtml|
|outputFormat|kml|
|outputFormat|gml|
|outputFormat|csv|
|outputFormat|shpz|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|locationDescriptor|any|
|locationDescriptor|accessPoint|
|locationDescriptor|frontDoorPoint|
|locationDescriptor|parcelPoint|
|locationDescriptor|rooftopPoint|
|locationDescriptor|routingPoint|

<h3 id="represents-all-subsites-of-a-given-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns all subsites of a given site in <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#site-address-representation" target="_blank">Site Address Representation</a>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

<h1 id="geocoder-rest-api-intersections">intersections</h1>

## Find intersections near to a geographic point

> Code samples

```bash
curl 'https://example.com/intersections/near.json?point=-122.377%2C50.121&outputSRS=4326' \
  -H "apikey: ${API_KEY}"
```

`GET /intersections/near.{outputFormat}`

Represents intersections near a given point

<h3 id="find-intersections-near-to-a-geographic-point-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. <br><br>Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)|
|point|query|string|true|The point (x,y) from which the nearest site will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.|
|maxDistance|query|integer|false|The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.|
|outputSRS|query|integer|true|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|maxResults|query|integer|false|The maximum number of search results to return.|
|minDegree|query|integer|false|The minimum degree an intersection can have to be included in results. A dead-end has a degree of 1.|
|maxDegree|query|integer|false|The maximum degree an interesection can have to be included in results. A four-way stop has a degree of 4.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|geojson|
|outputFormat|xhtml|
|outputFormat|kml|
|outputFormat|gml|
|outputFormat|csv|
|outputFormat|shpz|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|

<h3 id="find-intersections-near-to-a-geographic-point-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of selected intersections near a given point. Each intersection is in <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#intersection-address-representation" target="_blank">Intersection Address Representation</a>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Find nearest intersection to a geographic point

> Code samples

```bash
curl 'https://example.com/intersections/nearest.json?point=-122.377%2C50.121' \
  -H "apikey: ${API_KEY}"
```

`GET /intersections/nearest.{outputFormat}`

Represents the closest intersection to a given point

<h3 id="find-nearest-intersection-to-a-geographic-point-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. <br><br>Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)|
|point|query|string|true|Example: -122.377,50.121  The point (x,y) from which the nearest site will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.|
|maxDistance|query|integer|false|The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|minDegree|query|integer|false|The minimum degree an intersection can have to be included in results. A dead-end has a degree of 1.|
|maxDegree|query|integer|false|The maximum degree an interesection can have to be included in results. A four-way stop has a degree of 4.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|geojson|
|outputFormat|xhtml|
|outputFormat|kml|
|outputFormat|gml|
|outputFormat|csv|
|outputFormat|shpz|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|

<h3 id="find-nearest-intersection-to-a-geographic-point-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The nearest intersection in <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#intersection-address-representation" target="_blank">Intersection Address Representation</a>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Find intersections in a geographic area

> Code samples

```bash
curl 'https://example.com/intersections/within.json?bbox=-119.51%2C49.48%2C-119.53%2C49.50' \
  -H "apikey: ${API_KEY}"
```

`GET /intersections/within.{outputFormat}`

Represents all intersections within a given area

<h3 id="find-intersections-in-a-geographic-area-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. <br><br>Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)|
|bbox|query|string|true|A bounding box (xmin,ymin,xmax,ymax) used to limit the search area. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#bbox target="_blank">bbox</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|maxResults|query|integer|false|The maximum number of search results|
|minDegree|query|integer|false|The minimum degree an intersection can have to be included in results. A dead-end has a degree of 1.|
|maxDegree|query|integer|false|The maximum degree an interesection can have to be included in results. A four-way stop has a degree of 4.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|geojson|
|outputFormat|xhtml|
|outputFormat|kml|
|outputFormat|gml|
|outputFormat|csv|
|outputFormat|shpz|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|

<h3 id="find-intersections-in-a-geographic-area-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of selected intersections within the given area. Each intersection is in Each intersection is in <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#intersection-address-representation" target="_blank">Intersection Address Representation</a>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get an intersection by its unique ID

> Code samples

```bash
curl https://example.com/intersections/string.json \
  -H "apikey: ${API_KEY}"
```

`GET /intersections/{intersectionID}.{outputFormat}`

Represents a individual intersection

<h3 id="get-an-intersection-by-its-unique-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|intersectionID|path|string|true|A unique intersection identifier|
|outputFormat|path|string|true|Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. <br><br>Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|geojson|
|outputFormat|xhtml|
|outputFormat|kml|
|outputFormat|gml|
|outputFormat|csv|
|outputFormat|shpz|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|

<h3 id="get-an-intersection-by-its-unique-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Intersection with the requested intersectionID in <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#intersection-address-representation" target="_blank">Intersection Address Representation</a>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

<h1 id="geocoder-rest-api-occupants">occupants</h1>

## Geocode an address and identify site occupants

> Code samples

```bash
curl https://example.com/occupants/addresses.json \
  -H "apikey: ${API_KEY}"
```

`GET /occupants/addresses.{outputFormat}`

Represents the set of occupants whose addresses best match a given query address. Every occupant has an associated site which has a standardized address and a coordinate location on the Earth.

<h3 id="geocode-an-address-and-identify-site-occupants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. <br><br>Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)|
|addressString|query|string|false|Occupant name OR Occupant name ** address|
|tags|query|string|false|Example: schools;courts;employment<br>A list of tags separated by semicolons.|
|locationDescriptor|query|string|false|Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>|
|maxResults|query|integer|false|The maximum number of search results to return.|
|interpolation|query|string|false|accessPoint interpolation method. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#interpolation target="_blank">interpolation</a>|
|echo|query|boolean|false|If true, include unmatched address details such as site name in results.|
|brief|query|boolean|false|If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.|
|autoComplete|query|boolean|false|If true, addressString is expected to contain a partial address that requires completion. Not supported for shp, csv, gml formats.|
|setBack|query|integer|false|The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|minScore|query|integer|false|The minimum score required for a match to be returned. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#minScore target="_blank">minScore</a>|
|matchPrecision|query|string|false|Example: street,locality.  A comma separated list of individual match precision levels to include in results. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#matchPrecision target="_blank">matchPrecision</a>|
|matchPrecisionNot|query|string|false|Example: street,locality.  A comma separated list of individual match precision levels to exclude from results. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#matchPrecisionNot target="_blank">matchPrecisionNot</a>|
|siteName|query|string|false|A string containing the name of the building, facility, or institution (e.g., Duck Building, Casa Del Mar, Crystal Garden, Bluebird House).See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#siteName target="_blank">siteName</a>|
|unitDesignator|query|string|false|The type of unit within a house or building. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#unitDesignator target="_blank">unitDesignator</a>|
|unitNumber|query|string|false|The number of the unit, suite, or apartment within a house or building.|
|unitNumberSuffix|query|string|false|A letter that follows the unit number as in Unit 1A or Suite 302B.|
|civicNumber|query|string|false|The official number assigned to a site by an address authority. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#civicNumber target="_blank">civicNumber</a>|
|civicNumberSuffix|query|string|false|A letter or fraction that follows the civic number (e.g., the A in 1039A Bledsoe St). See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#civicNumberSuffix target="_blank">civicNumberSuffix</a>|
|streetName|query|string|false|The official name of the street as assigned by an address authority (e.g., the Douglas in 1175 Douglas Street). See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetName target="_blank">streetName</a>|
|streetType|query|string|false|The type of street as assigned by a municipality (e.g., the ST in 1175 DOUGLAS St). See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetType target="_blank">streetType</a>|
|streetDirection|query|string|false|The abbreviated compass direction as defined by Canada Post and B.C. civic addressing authorities. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetDirection target="_blank">streetDirection</a>|
|streetQualifier|query|string|false|The qualifier of a street name (e.g., the Bridge in Johnson St Bridge)|
|localityName|query|string|false|The name of the locality assigned to a given site by an address authority. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetDirection target="_blank">streetDirection</a>|
|provinceCode|query|string|false|The ISO 3166-2 Sub-Country Code. The code for British Columbia is BC.|
|localities|query|string|false|A comma separated list of locality names that matched addresses must belong to. For example, setting localities to Nanaimo only returns addresses in Nanaimo|
|notLocalities|query|string|false|A comma-separated list of localities to exclude from the search.|
|bbox|query|string|false|Example: -126.07929,49.7628,-126.0163,49.7907.  A bounding box (xmin,ymin,xmax,ymax) that limits the search area. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#bbox target="_blank">bbox</a>|
|centre|query|string|false|Example: -124.0165926,49.2296251 .  The coordinates of a centre point (x,y) used to define a bounding circle that will limit the search area. This parameter must be specified together with 'maxDistance'. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#centre target='_blank'>centre</a>|
|maxDistance|query|number|false|The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.|
|extrapolate|query|boolean|false|If true, uses supplied parcelPoint to derive an appropriate accessPoint.           See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#extrapolate target="_blank">extrapolate</a>|
|parcelPoint|query|string|false|The coordinates of a point (x,y) known to be inside the parcel containing a given address. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#parcelPoint target="_blank">parcelPoint</a>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|geojson|
|outputFormat|xhtml|
|outputFormat|kml|
|outputFormat|gml|
|outputFormat|csv|
|outputFormat|shpz|
|locationDescriptor|any|
|locationDescriptor|accessPoint|
|locationDescriptor|frontDoorPoint|
|locationDescriptor|parcelPoint|
|locationDescriptor|rooftopPoint|
|locationDescriptor|routingPoint|
|interpolation|adaptive|
|interpolation|linear|
|interpolation|none|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|unitDesignator|APT|
|unitDesignator|BLDG|
|unitDesignator|BSMT|
|unitDesignator|FLR|
|unitDesignator|LOBBY|
|unitDesignator|LWR|
|unitDesignator|PAD|
|unitDesignator|PH|
|unitDesignator|REAR|
|unitDesignator|RM|
|unitDesignator|SIDE|
|unitDesignator|SITE|
|unitDesignator|SUITE|
|unitDesignator|TH|
|unitDesignator|UNIT|
|unitDesignator|UPPR|
|streetDirection|N|
|streetDirection|S|
|streetDirection|E|
|streetDirection|W|
|streetDirection|O|
|streetDirection|NE|
|streetDirection|NO|
|streetDirection|NW|
|streetDirection|SE|
|streetDirection|SO|
|streetDirection|SW|

<h3 id="geocode-an-address-and-identify-site-occupants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of matching occupants, sites, and their physical locations. Response document will contain one <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#about-query-representation" target="_blank">About Query Representation</a> and one <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#site-address-representation" target="_blank">Site Address Representation</a> plus <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#occupant-representation" target="_blank">Occupant Representation</a> for each matching occupant.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Find occupants of sites near to a geographic point

> Code samples

```bash
curl 'https://example.com/occupants/near.json?point=-122.377%2C50.121' \
  -H "apikey: ${API_KEY}"
```

`GET /occupants/near.{outputFormat}`

Represents occupants near a given point in order of closest to farthest

<h3 id="find-occupants-of-sites-near-to-a-geographic-point-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. <br><br>Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)|
|point|query|string|true|The point (x,y) from which the nearest site will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.|
|tags|query|string|false|Example: schools;courts;employment<br>A list of tags separated by semicolons.|
|maxDistance|query|integer|false|The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|maxResults|query|integer|false|The maximum number of search results to return.|
|locationDescriptor|query|string|false|Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>|
|brief|query|boolean|false|If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.|
|setBack|query|integer|false|The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|geojson|
|outputFormat|xhtml|
|outputFormat|kml|
|outputFormat|gml|
|outputFormat|csv|
|outputFormat|shpz|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|locationDescriptor|any|
|locationDescriptor|accessPoint|
|locationDescriptor|frontDoorPoint|
|locationDescriptor|parcelPoint|
|locationDescriptor|rooftopPoint|
|locationDescriptor|routingPoint|

<h3 id="find-occupants-of-sites-near-to-a-geographic-point-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of selected occupants that are near a given point in order of closest to farther. Each occupant is returned as a <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#site-address-representation" target="_blank">Site Address Representation</a> plus a <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#occupant-representation" target="_blank">Occupant Representation</a>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Find occupants of the site nearest to a geographic point

> Code samples

```bash
curl 'https://example.com/occupants/nearest.json?point=-122.377%2C50.121' \
  -H "apikey: ${API_KEY}"
```

`GET /occupants/nearest.{outputFormat}`

Represents the closest occupant to a given point

<h3 id="find-occupants-of-the-site-nearest-to-a-geographic-point-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. <br><br>Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)|
|point|query|string|true|The point (x,y) from which the nearest site will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.|
|maxDistance|query|integer|false|The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.|
|tags|query|string|false|Example: schools;courts;employment<br>A list of tags separated by semicolons.|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|locationDescriptor|query|string|false|Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>|
|brief|query|boolean|false|If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.|
|setBack|query|integer|false|The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|geojson|
|outputFormat|xhtml|
|outputFormat|kml|
|outputFormat|gml|
|outputFormat|csv|
|outputFormat|shpz|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|locationDescriptor|any|
|locationDescriptor|accessPoint|
|locationDescriptor|frontDoorPoint|
|locationDescriptor|parcelPoint|
|locationDescriptor|rooftopPoint|
|locationDescriptor|routingPoint|

<h3 id="find-occupants-of-the-site-nearest-to-a-geographic-point-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The nearest occupant in <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#site-address-representation" target="_blank">Site Address Representation</a> plus <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#occupant-representation" target="_blank">Occupant Representation</a>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Find occupants of sites in a geographic area

> Code samples

```bash
curl 'https://example.com/occupants/within.json?bbox=-123.14%2C49.28%2C-123.13%2C49.29' \
  -H "apikey: ${API_KEY}"
```

`GET /occupants/within.{outputFormat}`

Represents all occupants within a given area

<h3 id="find-occupants-of-sites-in-a-geographic-area-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. <br><br>Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)|
|bbox|query|string|true|A bounding box (xmin,ymin,xmax,ymax) used to limit the search area. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#bbox target="_blank">bbox</a>|
|tags|query|string|false|Example: schools;courts;employment<br>A list of tags separated by semicolons.|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|maxResults|query|integer|false|The maximum number of search results to return.|
|locationDescriptor|query|string|false|Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>|
|brief|query|boolean|false|If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.|
|setBack|query|integer|false|The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|geojson|
|outputFormat|xhtml|
|outputFormat|kml|
|outputFormat|gml|
|outputFormat|csv|
|outputFormat|shpz|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|locationDescriptor|any|
|locationDescriptor|accessPoint|
|locationDescriptor|frontDoorPoint|
|locationDescriptor|parcelPoint|
|locationDescriptor|rooftopPoint|
|locationDescriptor|routingPoint|

<h3 id="find-occupants-of-sites-in-a-geographic-area-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of selected occupants within the given area. Each occupant is returned in a <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#site-address-representation" target="_blank">Site Address Representation</a> plus <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#occupant-representation" target="_blank">Occupant Representation</a>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get an occupant (of a site) by its unique ID

> Code samples

```bash
curl https://example.com/occupants/string.json \
  -H "apikey: ${API_KEY}"
```

`GET /occupants/{occupantID}.{outputFormat}`

Represents an individual occupant

<h3 id="get-an-occupant-of-a-site-by-its-unique-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|occupantID|path|string|true|Occupant identifier|
|outputFormat|path|string|true|Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. <br><br>Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|locationDescriptor|query|string|false|Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>|
|brief|query|boolean|false|If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.|
|setBack|query|integer|false|The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|geojson|
|outputFormat|xhtml|
|outputFormat|kml|
|outputFormat|gml|
|outputFormat|csv|
|outputFormat|shpz|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|locationDescriptor|any|
|locationDescriptor|accessPoint|
|locationDescriptor|frontDoorPoint|
|locationDescriptor|parcelPoint|
|locationDescriptor|rooftopPoint|
|locationDescriptor|routingPoint|

<h3 id="get-an-occupant-of-a-site-by-its-unique-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The occupant with the requested occupantID in <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#site-address-representation" target="_blank">Site Address Representation</a> plus <a href="https://github.com/bcgov/ols-geocoder/blob/gh-pages/geocoder-developer-guide.md#occupant-representation" target="_blank">Occupant Representation</a>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

<h1 id="geocoder-rest-api-parcels">parcels</h1>

## Get a comma-separated string of all pids for a given site

> Code samples

```bash
curl https://example.com/parcels/pids/string.json \
  -H "apikey: ${API_KEY}"
```

`GET /parcels/pids/{siteID}.{outputFormat}`

Represents all parcel identifiers associated with an individual site

<h3 id="get-a-comma-separated-string-of-all-pids-for-a-given-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteID|path|string|true|A unique, but not immutable, site identifier.|
|outputFormat|path|string|true|Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>. <br><br>Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|geojson|
|outputFormat|xhtml|
|outputFormat|kml|
|outputFormat|gml|
|outputFormat|csv|
|outputFormat|shpz|

<h3 id="get-a-comma-separated-string-of-all-pids-for-a-given-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A comma-separated string containing all the parcel identifiers associated with the requested siteID|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>
