<h1 id="bc-geographical-names-web-service---rest-api">BC Geographical Names Web Service - REST API v3.x.x</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This REST API provides searchable access to information about geographical names in the province of British Columbia, including name status and details about the corresponding geographic feature. 

Please note that you may experience issues when submitting requests to the delivery or test environment if using this [OpenAPI specification](https://github.com/bcgov/api-specs) in other API console viewers.

Base URLs:

* <a href="https://apps.gov.bc.ca/pub/bcgnws">https://apps.gov.bc.ca/pub/bcgnws</a> - Production

* <a href="https://test.apps.gov.bc.ca/pub/bcgnws">https://test.apps.gov.bc.ca/pub/bcgnws</a> - Test

* <a href="https://delivery.apps.gov.bc.ca/pub/bcgnws">https://delivery.apps.gov.bc.ca/pub/bcgnws</a> - Delivery

Email: <a href="mailto:geographical.names@gov.bc.ca">BC Geographical Names Office</a> 
Web: <a href="https://www2.gov.bc.ca/gov/content?id=A3C60F17CE934B1ABFA366F28C66E370">BC Geographical Names Office</a> 
License: <a href="https://www2.gov.bc.ca/gov/content?id=1AAACC9C65754E4D89A118B875E0FBDA">Crown Copyright</a>

<h1 id="bc-geographical-names-web-service---rest-api-search">search</h1>

## Search for names with metadata changes in a given period

> Code samples

```bash
curl 'https://example.com/names/changes?outputFormat=json&fromDate=2017-01-01&toDate=2017-06-30'
```

`GET /names/changes`

Search for information about geographical names which have changed most recently within a specified time window.  Changes may include status cupdates and metadata corrections.

<h3 id="search-for-names-with-metadata-changes-in-a-given-period-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|query|string|true|The format of the output.|
|fromDate|query|integer|true|Defines the earliest date (YYYY-MM-DD format) of the change time window for the search|
|toDate|query|integer|true|Defines the latest date (YYYY-MM-DD format) of the change time window for the search|
|featureClass|query|string|false|A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.|
|featureCategory|query|string|false|A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.|
|featureType|query|string|false|A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included|
|sortBy|query|string|false|The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries.|
|embed|query|integer|false|A flag to indicate whether to embed the corresponding 'feature' into each matching name|
|outputStyle|query|string|false|A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)|
|itemsPerPage|query|integer|false|The number of search results to return (1-200)|
|startIndex|query|integer|false|The index of the first record to be returned (>= 1)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|xml|
|outputFormat|kml|
|outputFormat|csv|
|sortBy|name|
|sortBy|featureType|
|sortBy|decisionDate|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|3857|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|embed|0|
|embed|1|
|outputStyle|summary|
|outputStyle|detail|

<h3 id="search-for-names-with-metadata-changes-in-a-given-period-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of names matching the search criteria|None|
|400|Bad Request|A required parameter is missing or invalid|None|

<aside class="success">
This operation does not require authentication
</aside>

## Search for names affected by recent naming decision

> Code samples

```bash
curl 'https://example.com/names/decisions/recent?outputFormat=json&days=30'
```

`GET /names/decisions/recent`

Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) within the last X days.

<h3 id="search-for-names-affected-by-recent-naming-decision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|query|string|true|The format of the output.|
|days|query|integer|true|The number of days used to define the time window of naming decisions to search.  The number is interpreted as searching for 'names affected by decisions within the last X days'.|
|featureClass|query|string|false|A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.|
|featureCategory|query|string|false|A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.|
|featureType|query|string|false|A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included|
|sortBy|query|string|false|The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries.|
|embed|query|integer|false|A flag to indicate whether to embed the corresponding 'feature' into each matching name|
|outputStyle|query|string|false|A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)|
|itemsPerPage|query|integer|false|The number of search results to return (1-200)|
|startIndex|query|integer|false|The index of the first record to be returned (>= 1)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|xml|
|outputFormat|kml|
|outputFormat|csv|
|sortBy|name|
|sortBy|featureType|
|sortBy|decisionDate|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|3857|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|embed|0|
|embed|1|
|outputStyle|summary|
|outputStyle|detail|

<h3 id="search-for-names-affected-by-recent-naming-decision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of names matching the search criteria|None|
|400|Bad Request|A required parameter is missing or invalid|None|

<aside class="success">
This operation does not require authentication
</aside>

## Search for names affected by naming decisions in a given year

> Code samples

```bash
curl 'https://example.com/names/decisions/year?outputFormat=json&year=2007'
```

`GET /names/decisions/year`

Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) in a given year.

<h3 id="search-for-names-affected-by-naming-decisions-in-a-given-year-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|query|string|true|The format of the output.|
|year|query|integer|true|The year in which to search for names affected by naming decisions'.|
|featureClass|query|string|false|A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.|
|featureCategory|query|string|false|A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.|
|featureType|query|string|false|A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included|
|sortBy|query|string|false|The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries.|
|embed|query|integer|false|A flag to indicate whether to embed the corresponding 'feature' into each matching name|
|outputStyle|query|string|false|A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)|
|itemsPerPage|query|integer|false|The number of search results to return (1-200)|
|startIndex|query|integer|false|The index of the first record to be returned (>= 1)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|xml|
|outputFormat|kml|
|outputFormat|csv|
|sortBy|name|
|sortBy|featureType|
|sortBy|decisionDate|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|3857|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|embed|0|
|embed|1|
|outputStyle|summary|
|outputStyle|detail|

<h3 id="search-for-names-affected-by-naming-decisions-in-a-given-year-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of names matching the search criteria|None|
|400|Bad Request|A required parameter is missing or invalid|None|

<aside class="success">
This operation does not require authentication
</aside>

## Search in a geographic area

> Code samples

```bash
curl 'https://example.com/names/inside?outputFormat=json&bbox=-119%2C49%2C-118%2C50'
```

`GET /names/inside`

Search for information about geographical names that correspond to features within a geographic bounding box.  Various options and filter parameters are available to refine the search.

<h3 id="search-in-a-geographic-area-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|query|string|true|The format of the output.|
|bbox|query|string|true|A geographic bounding box defining the search area.  Must be specified as a string of the form 'minLongitude,minLatitude,maxLongitude,maxLatitude' (WGS84). e.g. -119,49,-118,50|
|featureClass|query|string|false|A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.|
|featureCategory|query|string|false|A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.|
|featureType|query|string|false|A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included|
|sortBy|query|string|false|The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries.|
|embed|query|integer|false|A flag to indicate whether to embed the corresponding 'feature' into each matching name|
|outputStyle|query|string|false|A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)|
|itemsPerPage|query|integer|false|The number of search results to return (1-200)|
|startIndex|query|integer|false|The index of the first record to be returned (>= 1)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|xml|
|outputFormat|kml|
|outputFormat|csv|
|sortBy|name|
|sortBy|featureType|
|sortBy|decisionDate|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|3857|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|embed|0|
|embed|1|
|outputStyle|summary|
|outputStyle|detail|

<h3 id="search-in-a-geographic-area-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of names matching the search criteria|None|
|400|Bad Request|A required parameter is missing or invalid|None|

<aside class="success">
This operation does not require authentication
</aside>

## Search near to a geographic point

> Code samples

```bash
curl 'https://example.com/names/near?outputFormat=-119%2C49%2C-118%2C50&featurePoint=-120%2C51&distance=string'
```

`GET /names/near`

Search for information about geographical names that correspond to features within a geographic area defined by a centre point and a radius.  Various options and filter parameters are available to refine the search.

<h3 id="search-near-to-a-geographic-point-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|query|string|true|The format of the output.|
|featurePoint|query|string|true|A geographic coordinate specifying the centre point of the search area.  Must be specified as a string of the form 'longitude,latitude' (WGS84).  e.g. -120,51|
|distance|query|string|true|A radius (in kilometres) around the centre point.|
|featureClass|query|string|false|A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.|
|featureCategory|query|string|false|A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.|
|featureType|query|string|false|A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included|
|sortBy|query|string|false|The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries.|
|embed|query|integer|false|A flag to indicate whether to embed the corresponding 'feature' into each matching name|
|outputStyle|query|string|false|A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)|
|itemsPerPage|query|integer|false|The number of search results to return (1-200)|
|startIndex|query|integer|false|The index of the first record to be returned (>= 1)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|xml|
|outputFormat|kml|
|outputFormat|csv|
|sortBy|name|
|sortBy|featureType|
|sortBy|decisionDate|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|3857|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|embed|0|
|embed|1|
|outputStyle|summary|
|outputStyle|detail|

<h3 id="search-near-to-a-geographic-point-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of names matching the search criteria|None|
|400|Bad Request|A required parameter is missing or invalid|None|

<aside class="success">
This operation does not require authentication
</aside>

## Search by name, limit to unofficial names only

> Code samples

```bash
curl 'https://example.com/names/notOfficial/search?outputFormat=json&name=Victoria'
```

`GET /names/notOfficial/search`

Search for information about unofficial geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.

<h3 id="search-by-name-limit-to-unofficial-names-only-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|query|string|true|The format of the output.|
|name|query|string|true|A filter to search based on the the text of the name itself.  Use the asterisk (*) as a wildcard character.  For example 'vancouv*'|
|exactSpelling|query|integer|false|If the 'name' parameter is specified, 'exactSpelling' specifies whether to include only names that exactly match the search text (exactSpelling=1), or whether to also include names with similar spellings (exactSpelling=0)|
|featureClass|query|string|false|A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.|
|featureCategory|query|string|false|A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.|
|featureType|query|string|false|A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included|
|sortBy|query|string|false|The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries.|
|embed|query|integer|false|A flag to indicate whether to embed the corresponding 'feature' into each matching name|
|outputStyle|query|string|false|A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)|
|itemsPerPage|query|integer|false|The number of search results to return (1-200)|
|startIndex|query|integer|false|The index of the first record to be returned (>= 1)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|xml|
|outputFormat|kml|
|outputFormat|csv|
|exactSpelling|0|
|exactSpelling|1|
|sortBy|relevance|
|sortBy|name|
|sortBy|featureType|
|sortBy|decisionDate|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|3857|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|embed|0|
|embed|1|
|outputStyle|summary|
|outputStyle|detail|

<h3 id="search-by-name-limit-to-unofficial-names-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of names matching the search criteria|None|
|400|Bad Request|A required parameter is missing or invalid|None|

<aside class="success">
This operation does not require authentication
</aside>

## Search by name, limit to official names only

> Code samples

```bash
curl 'https://example.com/names/official/search?outputFormat=json&name=Victoria'
```

`GET /names/official/search`

Search for information about official geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.

<h3 id="search-by-name-limit-to-official-names-only-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|query|string|true|The format of the output.|
|name|query|string|true|A filter to search based on the the text of the name itself.  Use the asterisk (*) as a wildcard character.  For example 'vancouv*'|
|exactSpelling|query|integer|false|If the 'name' parameter is specified, 'exactSpelling' specifies whether to include only names that exactly match the search text (exactSpelling=1), or whether to also include names with similar spellings (exactSpelling=0)|
|featureClass|query|string|false|A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.|
|featureCategory|query|string|false|A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.|
|featureType|query|string|false|A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included|
|sortBy|query|string|false|The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries.|
|embed|query|integer|false|A flag to indicate whether to embed the corresponding 'feature' into each matching name|
|outputStyle|query|string|false|A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)|
|itemsPerPage|query|integer|false|The number of search results to return (1-200)|
|startIndex|query|integer|false|The index of the first record to be returned (>= 1)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|xml|
|outputFormat|kml|
|outputFormat|csv|
|exactSpelling|0|
|exactSpelling|1|
|sortBy|relevance|
|sortBy|name|
|sortBy|featureType|
|sortBy|decisionDate|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|3857|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|embed|0|
|embed|1|
|outputStyle|summary|
|outputStyle|detail|

<h3 id="search-by-name-limit-to-official-names-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of names matching the search criteria|None|
|400|Bad Request|A required parameter is missing or invalid|None|

<aside class="success">
This operation does not require authentication
</aside>

## Search by name

> Code samples

```bash
curl 'https://example.com/names/search?outputFormat=json&name=Victoria'
```

`GET /names/search`

Search for information about geographical names by the text of the name itself.  The response will include both official and unofficial names.  Various options and filter parameters are available to refine the search.

<h3 id="search-by-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|query|string|true|The format of the output.|
|name|query|string|true|A filter to search based on the the text of the name itself.  Use the asterisk (*) as a wildcard character.  For example 'vancouv*'|
|exactSpelling|query|integer|false|If the 'name' parameter is specified, 'exactSpelling' specifies whether to include only names that exactly match the search text (exactSpelling=1), or whether to also include names with similar spellings (exactSpelling=0)|
|featureClass|query|string|false|A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.|
|featureCategory|query|string|false|A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.|
|featureType|query|string|false|A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included|
|sortBy|query|string|false|The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries.|
|embed|query|integer|false|A flag to indicate whether to embed the corresponding 'feature' into each matching name|
|outputStyle|query|string|false|A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)|
|itemsPerPage|query|integer|false|The number of search results to return (1-200)|
|startIndex|query|integer|false|The index of the first record to be returned (>= 1)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|xml|
|outputFormat|kml|
|outputFormat|csv|
|exactSpelling|0|
|exactSpelling|1|
|sortBy|relevance|
|sortBy|name|
|sortBy|featureType|
|sortBy|decisionDate|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|3857|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|embed|0|
|embed|1|
|outputStyle|summary|
|outputStyle|detail|

<h3 id="search-by-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of names matching the search criteria|None|
|400|Bad Request|A required parameter is missing or invalid|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bc-geographical-names-web-service---rest-api-name">name</h1>

## Get a name by its nameId

> Code samples

```bash
curl https://example.com/names/22474.json
```

`GET /names/{nameId}.{outputFormat}`

Get information about the geographical name with the specified nameId.

<h3 id="get-a-name-by-its-nameid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nameId|path|integer|true|The unique identifier for a name|
|outputFormat|path|string|true|The format of the output.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|xml|
|outputFormat|kml|
|outputFormat|csv|
|outputFormat|html|

<h3 id="get-a-name-by-its-nameid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information about the name with the specified nameId|None|
|404|Not Found|The name with the given nameId doesn't exist, or the output format is invalid.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bc-geographical-names-web-service---rest-api-feature">feature</h1>

## Get a feature by its featureId

> Code samples

```bash
curl https://example.com/features/8879
```

`GET /features/{featureId}`

Get information about the geographical feature with the specified featureId.

<h3 id="get-a-feature-by-its-featureid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|featureId|path|integer|true|The unique identifier for a feature|

<h3 id="get-a-feature-by-its-featureid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information about the feature with the specified featureId (XML format only)|None|
|404|Not Found|The feature with the given featureId doesn't exist|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bc-geographical-names-web-service---rest-api-feature-taxonomy">feature taxonomy</h1>

## Get all feature categories

> Code samples

```bash
curl 'https://example.com/featureCategories?outputFormat=json'
```

`GET /featureCategories`

Gets a list of all feature categories used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.

<h3 id="get-all-feature-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|query|string|true|The format of the output.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|xml|

<h3 id="get-all-feature-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of feature categories|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all feature classes

> Code samples

```bash
curl 'https://example.com/featureClasses?outputFormat=json'
```

`GET /featureClasses`

Gets a list of all feature classes used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.

<h3 id="get-all-feature-classes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|query|string|true|The format of the output.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|xml|

<h3 id="get-all-feature-classes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of feature classes|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all feature types

> Code samples

```bash
curl 'https://example.com/featureTypes?outputFormat=json'
```

`GET /featureTypes`

Gets a list of all feature types used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.

<h3 id="get-all-feature-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|query|string|true|The format of the output.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|xml|

<h3 id="get-all-feature-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of feature types|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bc-geographical-names-web-service---rest-api-name-authority">name authority</h1>

## Get all name authorities

> Code samples

```bash
curl 'https://example.com/nameAuthorities?outputFormat=json'
```

`GET /nameAuthorities`

Gets a list of all name authorities responsible for naming decisions of the geographical names in the BC Geographical Names Information System (BCGNIS)

<h3 id="get-all-name-authorities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|query|string|true|The format of the output.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|xml|

<h3 id="get-all-name-authorities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of name authorities|None|

<aside class="success">
This operation does not require authentication
</aside>
