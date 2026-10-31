<h1 id="search">Search v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Search API is a RESTful API that allows developers to run a single line fuzzy search for addresses and POIs. Search API returns the latitude/longitude of a specific address, cross street, geographic feature, or point of interest (POI).

Base URLs:

* <a href="https://api.tomtom.com">https://api.tomtom.com</a>

Web: <a href="https://developer.tomtom.com/contact-us">Contact Us</a> 

# Authentication

* API Key (api_key)
    - Parameter Name: **key**, in: query.

<h1 id="search-additional-data">Additional Data</h1>

## Additional Data

> Code samples

```bash
curl "https://example.com/search/2/additionalData.json?geometries=00004631-3400-3c00-0000-0000673c4d2e%2C00004631-3400-3c00-0000-0000673c42fe&key=${API_KEY}"
```

`GET /search/{versionNumber}/additionalData.{ext}`

<h3 id="additional-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 2.|
|ext|path|string|true|Expected response format.|
|geometries|query|string|true|Comma separated list of geometry UUIDs, previously retrieved from an Search API request.|
|geometriesZoom|query|integer|false|Defines the precision of the geometries.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|2|
|ext|json|
|geometriesZoom|0|
|geometriesZoom|1|
|geometriesZoom|2|
|geometriesZoom|3|
|geometriesZoom|4|
|geometriesZoom|5|
|geometriesZoom|6|
|geometriesZoom|7|
|geometriesZoom|8|
|geometriesZoom|9|
|geometriesZoom|10|
|geometriesZoom|11|
|geometriesZoom|12|
|geometriesZoom|13|
|geometriesZoom|14|
|geometriesZoom|15|
|geometriesZoom|16|
|geometriesZoom|17|
|geometriesZoom|18|
|geometriesZoom|19|
|geometriesZoom|20|
|geometriesZoom|21|
|geometriesZoom|22|

<h3 id="additional-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: additional data were retrieved and the body of the response contains requested data.|None|
|400|Bad Request|Bad request: one or more parameters(i.e. geometries, ext) were incorrectly specified.|None|
|403|Forbidden|Permission, capacity, or authentication issues:<br>  - Forbidden<br>  - Not authorized<br>  - Account inactive<br>  - Account over queries per second limit<br>  - Account over rate limit<br>  - Rate limit exceeded|None|
|404|Not Found|Not Found: the requested resource could not be found, but it may be available again in the future.|None|
|405|Method Not Allowed|Method Not Allowed: the client used a HTTP method other than GET.|None|
|408|Request Timeout|Request timeout.|None|
|414|URI Too Long|Requested uri is too long.|None|
|500|Internal Server Error|An error occurred while processing the request. Please try again later.|None|
|502|Bad Gateway|Internal network connectivity issue.|None|
|503|Service Unavailable|Service currently unavailable.|None|
|504|Gateway Timeout|Internal network connectivity issue or a request that has taken too long to complete.|None|
|596|596|Service not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="search-search">Search</h1>

## Low Bandwith Category Search

> Code samples

```bash
curl "https://example.com/search/2/cS/pizza.xml?key=${API_KEY}"
```

`GET /search/{versionNumber}/cS/{category}.{ext}`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="low-bandwith-category-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 2.|
|category|path|string|true|Query string. Must be properly URL encoded.|
|ext|path|string|true|Expected response format.|
|typeahead|query|boolean|false|If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.|
|limit|query|integer|false|Maximum number of search results that will be returned.|
|ofs|query|integer|false|Starting offset of the returned results within the full result set.|
|countrySet|query|string|false|Comma separated string of country codes. This will limit the search to the specified countries.|
|lat|query|number(float)|false|Latitude where results should be biased.<br>NOTE: supplying a lat/lon without a radius will return search results biased to that point.|
|lon|query|number(float)|false|Longitude where results should be biased<br>NOTE: supplying a lat/lon without a radius will return search results biased to that point.|
|radius|query|integer|false|If radius <b>and</b> position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.|
|topLeft|query|string|false|Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.|
|btmRight|query|string|false|Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.|
|language|query|string|false|Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.|
|idxSet|query|string|false|A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:<br>  - <b>Addr</b> = Address range interpolation (when there is no PAD)<br>  - <b>Geo</b> = Geographies<br>  - <b>PAD</b> = Point Addresses<br>  - <b>POI</b> = Points of interest<br>  - <b>Str</b> = Streets<br>  - <b>Xstr</b> = Cross Streets (intersections)|
|view|query|string|false|Geopolitical View.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|2|
|ext|json|
|ext|jsonp|
|ext|js|
|ext|xml|
|view|Unified|
|view|IN|
|view|PK|
|view|IL|
|view|MA|

<h3 id="low-bandwith-category-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: the search successfully returned zero or more results.|None|
|400|Bad Request|Bad Request: one or more parameters were incorrectly specified.|None|
|403|Forbidden|Forbidden: possible causes include:<br>  - Service requires SSL<br>  - Not authorized<br>  - Rate or volume limit exceeded<br>  - Unknown referer|None|
|405|Method Not Allowed|Method Not Allowed: the HTTP method (GET, POST, etc) is not supported for this request.|None|
|596|596|Not Found: the HTTP request method (GET, POST, etc) or path is incorrect.|None|
|5XX|Server Error|An error occurred while processing the request. Please try again later.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Category Search

> Code samples

```bash
curl "https://example.com/search/2/categorySearch/pizza.xml?key=${API_KEY}"
```

`GET /search/{versionNumber}/categorySearch/{query}.{ext}`

<h3 id="category-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 2.|
|query|path|string|true|Query string. Must be properly URL encoded.|
|ext|path|string|true|Expected response format.|
|typeahead|query|boolean|false|If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.|
|limit|query|integer|false|Maximum number of search results that will be returned.|
|ofs|query|integer|false|Starting offset of the returned results within the full result set.|
|countrySet|query|string|false|Comma separated string of country codes. This will limit the search to the specified countries.|
|lat|query|number(float)|false|Latitude where results should be biased.<br>NOTE: supplying a lat/lon without a radius will return search results biased to that point.|
|lon|query|number(float)|false|Longitude where results should be biased<br>NOTE: supplying a lat/lon without a radius will return search results biased to that point.|
|radius|query|integer|false|If radius <b>and</b> position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.|
|topLeft|query|string|false|Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.|
|btmRight|query|string|false|Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.|
|language|query|string|false|Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.|
|extendedPostalCodesFor|query|string|false|Indexes for which extended postal codes should be included in the results. Available indexes are:<br>  - <b>Addr</b> = Address ranges<br>  - <b>Geo</b> = Geographies<br>  - <b>PAD</b> = Point Addresses<br>  - <b>POI</b> = Points of Interest<br>  - <b>Str</b> = Streets<br>  - <b>XStr</b> = Cross Streets (intersections)|
|view|query|string|false|Geopolitical View.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|2|
|ext|json|
|ext|jsonp|
|ext|js|
|ext|xml|
|view|Unified|
|view|IN|
|view|PK|
|view|IL|
|view|MA|

<h3 id="category-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: the search successfully returned zero or more results.|None|
|400|Bad Request|Bad Request: one or more parameters were incorrectly specified.|None|
|403|Forbidden|Forbidden: possible causes include:<br>  - Service requires SSL<br>  - Not authorized<br>  - Rate or volume limit exceeded<br>  - Unknown referer|None|
|405|Method Not Allowed|Method Not Allowed: the HTTP method (GET, POST, etc) is not supported for this request.|None|
|596|596|Not Found: the HTTP request method (GET, POST, etc) or path is incorrect.|None|
|5XX|Server Error|An error occurred while processing the request. Please try again later.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Geometry Search

> Code samples

```bash
curl "https://example.com/search/2/geometrySearch/pizza.xml?key=${API_KEY}"
```

`GET /search/{versionNumber}/geometrySearch/{query}.{ext}`

<h3 id="geometry-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 2.|
|query|path|string|true|Query string. Must be properly URL encoded.|
|ext|path|string|true|Expected response format.|
|geometryList|query|string|false|List of geometries to filter by. Available types are CIRCLE (with the radius expressed in meters) and POLYGON.|
|limit|query|integer|false|Maximum number of search results that will be returned.|
|language|query|string|false|Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.|
|extendedPostalCodesFor|query|string|false|Indexes for which extended postal codes should be included in the results. Available indexes are:<br>  - <b>Addr</b> = Address ranges<br>  - <b>Geo</b> = Geographies<br>  - <b>PAD</b> = Point Addresses<br>  - <b>POI</b> = Points of Interest<br>  - <b>Str</b> = Streets<br>  - <b>XStr</b> = Cross Streets (intersections)|
|idxSet|query|string|false|A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:<br>  - <b>Addr</b> = Address range interpolation (when there is no PAD)<br>  - <b>Geo</b> = Geographies<br>  - <b>PAD</b> = Point Addresses<br>  - <b>POI</b> = Points of interest<br>  - <b>Str</b> = Streets<br>  - <b>Xstr</b> = Cross Streets (intersections)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|2|
|ext|json|
|ext|jsonp|
|ext|js|
|ext|xml|

<h3 id="geometry-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: the search successfully returned zero or more results.|None|
|400|Bad Request|Bad Request: one or more parameters were incorrectly specified.|None|
|403|Forbidden|Forbidden: possible causes include:<br>  - Service requires SSL<br>  - Not authorized<br>  - Rate or volume limit exceeded<br>  - Unknown referer|None|
|405|Method Not Allowed|Method Not Allowed: the HTTP method (GET, POST, etc) is not supported for this request.|None|
|596|596|Not Found: the HTTP request method (GET, POST, etc) or path is incorrect.|None|
|5XX|Server Error|An error occurred while processing the request. Please try again later.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Geometry Search

> Code samples

```bash
curl "https://example.com/search/2/geometrySearch/pizza.xml?key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "geometryList": [
      {
        "type": "POLYGON",
        "vertices": [
          "37.7524152343544,-122.43576049804686",
          "37.70660472542312,-122.43301391601562",
          "37.712059855877314,-122.36434936523438",
          "37.75350561243041,-122.37396240234374"
        ]
      },
      {
        "position": "37.71205,-121.36434",
        "radius": 6000,
        "type": "CIRCLE"
      },
      {
        "position": "37.31205,-121.36434",
        "radius": 1000,
        "type": "CIRCLE"
      }
    ]
  }'
```

`POST /search/{versionNumber}/geometrySearch/{query}.{ext}`

> Body parameter

```json
{
  "geometryList": [
    {
      "type": "POLYGON",
      "vertices": [
        "37.7524152343544,-122.43576049804686",
        "37.70660472542312,-122.43301391601562",
        "37.712059855877314,-122.36434936523438",
        "37.75350561243041,-122.37396240234374"
      ]
    },
    {
      "position": "37.71205,-121.36434",
      "radius": 6000,
      "type": "CIRCLE"
    },
    {
      "position": "37.31205,-121.36434",
      "radius": 1000,
      "type": "CIRCLE"
    }
  ]
}
```

<h3 id="geometry-search-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 2.|
|query|path|string|true|Query string. Must be properly URL encoded.|
|ext|path|string|true|Expected response format.|
|limit|query|integer|false|Maximum number of search results that will be returned.|
|language|query|string|false|Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.|
|extendedPostalCodesFor|query|string|false|Indexes for which extended postal codes should be included in the results. Available indexes are:<br>  - <b>Addr</b> = Address ranges<br>  - <b>Geo</b> = Geographies<br>  - <b>PAD</b> = Point Addresses<br>  - <b>POI</b> = Points of Interest<br>  - <b>Str</b> = Streets<br>  - <b>XStr</b> = Cross Streets (intersections)|
|idxSet|query|string|false|A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:<br>  - <b>Addr</b> = Address range interpolation (when there is no PAD)<br>  - <b>Geo</b> = Geographies<br>  - <b>PAD</b> = Point Addresses<br>  - <b>POI</b> = Points of interest<br>  - <b>Str</b> = Streets<br>  - <b>Xstr</b> = Cross Streets (intersections)|
|body|body|object|false|none|
|» geometryList|body|[object]|false|none|
|» » position|body|string|false|none|
|» » radius|body|integer|false|none|
|» » type|body|string|false|none|
|» » vertices|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|2|
|ext|json|
|ext|jsonp|
|ext|js|
|ext|xml|

<h3 id="geometry-search-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: the search successfully returned zero or more results.|None|
|400|Bad Request|Bad Request: one or more parameters were incorrectly specified.|None|
|403|Forbidden|Forbidden: possible causes include:<br>  - Service requires SSL<br>  - Not authorized<br>  - Rate or volume limit exceeded<br>  - Unknown referer|None|
|405|Method Not Allowed|Method Not Allowed: the HTTP method (GET, POST, etc) is not supported for this request.|None|
|596|596|Not Found: the HTTP request method (GET, POST, etc) or path is incorrect.|None|
|5XX|Server Error|An error occurred while processing the request. Please try again later.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Nearby Search

> Code samples

```bash
curl "https://example.com/search/2/nearbySearch/.xml?lat=37.337&lon=-121.89&key=${API_KEY}"
```

`GET /search/{versionNumber}/nearbySearch/.{ext}`

<h3 id="nearby-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 2.|
|ext|path|string|true|Expected response format.|
|lat|query|number(float)|true|Latitude where results should be biased.<br>NOTE: supplying a lat/lon without a radius will return search results biased to that point.|
|lon|query|number(float)|true|Longitude where results should be biased<br>NOTE: supplying a lat/lon without a radius will return search results biased to that point.|
|limit|query|integer|false|Maximum number of search results that will be returned.|
|ofs|query|integer|false|Starting offset of the returned results within the full result set.|
|countrySet|query|string|false|Comma separated string of country codes. This will limit the search to the specified countries.|
|radius|query|integer|false|If radius and position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.|
|topLeft|query|string|false|**Deprecated.** Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.|
|btmRight|query|string|false|**Deprecated.** Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.|
|language|query|string|false|Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.|
|extendedPostalCodesFor|query|string|false|Indexes for which extended postal codes should be included in the results. Available indexes are:<br>  - <b>Addr</b> = Address ranges<br>  - <b>Geo</b> = Geographies<br>  - <b>PAD</b> = Point Addresses<br>  - <b>POI</b> = Points of Interest<br>  - <b>Str</b> = Streets<br>  - <b>XStr</b> = Cross Streets (intersections)|
|minFuzzyLevel|query|integer|false|Minimum fuzziness level to be used.|
|maxFuzzyLevel|query|integer|false|Maximum fuzziness level to be used.|
|idxSet|query|string|false|A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:<br>  - <b>Addr</b> = Address range interpolation (when there is no PAD)<br>  - <b>Geo</b> = Geographies<br>  - <b>PAD</b> = Point Addresses<br>  - <b>POI</b> = Points of interest<br>  - <b>Str</b> = Streets<br>  - <b>Xstr</b> = Cross Streets (intersections)|
|view|query|string|false|Geopolitical View.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|2|
|ext|json|
|ext|jsonp|
|ext|js|
|ext|xml|
|view|Unified|
|view|IN|
|view|PK|
|view|IL|
|view|MA|

<h3 id="nearby-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: the search successfully returned zero or more results.|None|
|400|Bad Request|Bad Request: one or more parameters were incorrectly specified.|None|
|403|Forbidden|Forbidden: possible causes include:<br>  - Service requires SSL<br>  - Not authorized<br>  - Rate or volume limit exceeded<br>  - Unknown referer|None|
|405|Method Not Allowed|Method Not Allowed: the HTTP method (GET, POST, etc) is not supported for this request.|None|
|596|596|Not Found: the HTTP request method (GET, POST, etc) or path is incorrect.|None|
|5XX|Server Error|An error occurred while processing the request. Please try again later.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Points of Interest Search

> Code samples

```bash
curl "https://example.com/search/2/poiSearch/pizza.xml?key=${API_KEY}"
```

`GET /search/{versionNumber}/poiSearch/{query}.{ext}`

<h3 id="points-of-interest-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 2.|
|query|path|string|true|Query string. Must be properly URL encoded.|
|ext|path|string|true|Expected response format.|
|typeahead|query|boolean|false|If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.|
|limit|query|integer|false|Maximum number of search results that will be returned.|
|ofs|query|integer|false|Starting offset of the returned results within the full result set.|
|countrySet|query|string|false|Comma separated string of country codes. This will limit the search to the specified countries.|
|lat|query|number(float)|false|Latitude where results should be biased.<br>NOTE: supplying a lat/lon without a radius will return search results biased to that point.|
|lon|query|number(float)|false|Longitude where results should be biased<br>NOTE: supplying a lat/lon without a radius will return search results biased to that point.|
|radius|query|integer|false|If radius <b>and</b> position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.|
|topLeft|query|string|false|Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.|
|btmRight|query|string|false|Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.|
|language|query|string|false|Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.|
|extendedPostalCodesFor|query|string|false|Indexes for which extended postal codes should be included in the results. Available indexes are:<br>  - <b>Addr</b> = Address ranges<br>  - <b>Geo</b> = Geographies<br>  - <b>PAD</b> = Point Addresses<br>  - <b>POI</b> = Points of Interest<br>  - <b>Str</b> = Streets<br>  - <b>XStr</b> = Cross Streets (intersections)|
|view|query|string|false|Geopolitical View.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|2|
|ext|json|
|ext|jsonp|
|ext|js|
|ext|xml|
|view|Unified|
|view|IN|
|view|PK|
|view|IL|
|view|MA|

<h3 id="points-of-interest-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: the search successfully returned zero or more results.|None|
|400|Bad Request|Bad Request: one or more parameters were incorrectly specified.|None|
|403|Forbidden|Forbidden: possible causes include:<br>  - Service requires SSL<br>  - Not authorized<br>  - Rate or volume limit exceeded<br>  - Unknown referer|None|
|405|Method Not Allowed|Method Not Allowed: the HTTP method (GET, POST, etc) is not supported for this request.|None|
|596|596|Not Found: the HTTP request method (GET, POST, etc) or path is incorrect.|None|
|5XX|Server Error|An error occurred while processing the request. Please try again later.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Routed Search

> Code samples

```bash
curl "https://example.com/search/2/routedSearch/gas/37.8328%2C-122.27669/90.xml?key=${API_KEY}"
```

`GET /search/{versionNumber}/routedSearch/{query}/{position}/{heading}.{ext}`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="routed-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 2.|
|query|path|string|true|Query string. Must be properly URL encoded.|
|position|path|string|true|This is specified as a comma separated string composed of lat., lon.|
|heading|path|number(float)|true|The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)|
|ext|path|string|true|Expected response format.|
|typeahead|query|boolean|false|If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.|
|limit|query|integer|false|Maximum number of search results that will be returned.|
|multiplier|query|integer|false|Multiplies the limit by N to gather more candidate POIs, which will then be sorted by drive distance, returning only the top candidates according to the limit.|
|routingTimeout|query|integer|false|Only return results that arrive from routing engine within this time limit.|
|language|query|string|false|Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.|
|extendedPostalCodesFor|query|string|false|Indexes for which extended postal codes should be included in the results. Available indexes are:<br>  - <b>Addr</b> = Address ranges<br>  - <b>Geo</b> = Geographies<br>  - <b>PAD</b> = Point Addresses<br>  - <b>POI</b> = Points of Interest<br>  - <b>Str</b> = Streets<br>  - <b>XStr</b> = Cross Streets (intersections)|
|idxSet|query|string|false|A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:<br>  - <b>Addr</b> = Address range interpolation (when there is no PAD)<br>  - <b>Geo</b> = Geographies<br>  - <b>PAD</b> = Point Addresses<br>  - <b>POI</b> = Points of interest<br>  - <b>Str</b> = Streets<br>  - <b>Xstr</b> = Cross Streets (intersections)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|2|
|ext|json|
|ext|jsonp|
|ext|js|
|ext|xml|

<h3 id="routed-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: the search successfully returned zero or more results.|None|
|400|Bad Request|Bad Request: one or more parameters were incorrectly specified.|None|
|403|Forbidden|Forbidden: possible causes include:<br>  - Service requires SSL<br>  - Not authorized<br>  - Rate or volume limit exceeded<br>  - Unknown referer|None|
|405|Method Not Allowed|Method Not Allowed: the HTTP method (GET, POST, etc) is not supported for this request.|None|
|596|596|Not Found: the HTTP request method (GET, POST, etc) or path is incorrect.|None|
|5XX|Server Error|An error occurred while processing the request. Please try again later.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Low bandwith Search

> Code samples

```bash
curl "https://example.com/search/2/s/pizza.xml?key=${API_KEY}"
```

`GET /search/{versionNumber}/s/{query}.{ext}`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="low-bandwith-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 2.|
|query|path|string|true|Query string. Must be properly URL encoded.|
|ext|path|string|true|Expected response format.|
|typeahead|query|boolean|false|If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.|
|limit|query|integer|false|Maximum number of search results that will be returned.|
|ofs|query|integer|false|Starting offset of the returned results within the full result set.|
|countrySet|query|string|false|Comma separated string of country codes. This will limit the search to the specified countries.|
|lat|query|number(float)|false|Latitude where results should be biased.<br>NOTE: supplying a lat/lon without a radius will return search results biased to that point.|
|lon|query|number(float)|false|Longitude where results should be biased<br>NOTE: supplying a lat/lon without a radius will return search results biased to that point.|
|radius|query|integer|false|If radius <b>and</b> position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.|
|topLeft|query|string|false|Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.|
|btmRight|query|string|false|Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.|
|language|query|string|false|Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.|
|idxSet|query|string|false|A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:<br>  - <b>Addr</b> = Address range interpolation (when there is no PAD)<br>  - <b>Geo</b> = Geographies<br>  - <b>PAD</b> = Point Addresses<br>  - <b>POI</b> = Points of interest<br>  - <b>Str</b> = Streets<br>  - <b>Xstr</b> = Cross Streets (intersections)|
|view|query|string|false|Geopolitical View.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|2|
|ext|json|
|ext|jsonp|
|ext|js|
|ext|xml|
|view|Unified|
|view|IN|
|view|PK|
|view|IL|
|view|MA|

<h3 id="low-bandwith-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: the search successfully returned zero or more results.|None|
|400|Bad Request|Bad Request: one or more parameters were incorrectly specified.|None|
|403|Forbidden|Forbidden: possible causes include:<br>  - Service requires SSL<br>  - Not authorized<br>  - Rate or volume limit exceeded<br>  - Unknown referer|None|
|405|Method Not Allowed|Method Not Allowed: the HTTP method (GET, POST, etc) is not supported for this request.|None|
|596|596|Not Found: the HTTP request method (GET, POST, etc) or path is incorrect.|None|
|5XX|Server Error|An error occurred while processing the request. Please try again later.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Fuzzy Search

> Code samples

```bash
curl "https://example.com/search/2/search/pizza.xml?key=${API_KEY}"
```

`GET /search/{versionNumber}/search/{query}.{ext}`

<h3 id="fuzzy-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 2.|
|query|path|string|true|Query string. Must be properly URL encoded.<br><br>To perform a reverse geocode, the user can provide latitude and longitude coordinates directly in the query. More information can be found <a href="/search-api/search-api-documentation-search/fuzzy-search#AdditionalInfo">here</a>.|
|ext|path|string|true|Expected response format.|
|typeahead|query|boolean|false|If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.|
|limit|query|integer|false|Maximum number of search results that will be returned.|
|ofs|query|integer|false|Starting offset of the returned results within the full result set.|
|countrySet|query|string|false|Comma separated string of country codes. This will limit the search to the specified countries.|
|lat|query|number(float)|false|Latitude where results should be biased.<br>NOTE: supplying a lat/lon without a radius will return search results biased to that point.|
|lon|query|number(float)|false|Longitude where results should be biased<br>NOTE: supplying a lat/lon without a radius will return search results biased to that point.|
|radius|query|integer|false|If radius <b>and</b> position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.|
|topLeft|query|string|false|Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.|
|btmRight|query|string|false|Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.|
|language|query|string|false|Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.|
|extendedPostalCodesFor|query|string|false|Indexes for which extended postal codes should be included in the results. Available indexes are:<br>  - <b>Addr</b> = Address ranges<br>  - <b>Geo</b> = Geographies<br>  - <b>PAD</b> = Point Addresses<br>  - <b>POI</b> = Points of Interest<br>  - <b>Str</b> = Streets<br>  - <b>XStr</b> = Cross Streets (intersections)|
|minFuzzyLevel|query|integer|false|Minimum fuzziness level to be used.|
|maxFuzzyLevel|query|integer|false|Maximum fuzziness level to be used.|
|idxSet|query|string|false|A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:<br>  - <b>Addr</b> = Address range interpolation (when there is no PAD)<br>  - <b>Geo</b> = Geographies<br>  - <b>PAD</b> = Point Addresses<br>  - <b>POI</b> = Points of interest<br>  - <b>Str</b> = Streets<br>  - <b>Xstr</b> = Cross Streets (intersections)|
|view|query|string|false|Geopolitical View.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|2|
|ext|json|
|ext|jsonp|
|ext|js|
|ext|xml|
|view|Unified|
|view|IN|
|view|PK|
|view|IL|
|view|MA|

<h3 id="fuzzy-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: the search successfully returned zero or more results.|None|
|400|Bad Request|Bad Request: one or more parameters were incorrectly specified.|None|
|403|Forbidden|Forbidden: possible causes include:<br>  - Service requires SSL<br>  - Not authorized<br>  - Rate or volume limit exceeded<br>  - Unknown referer|None|
|405|Method Not Allowed|Method Not Allowed: the HTTP method (GET, POST, etc) is not supported for this request.|None|
|596|596|Not Found: the HTTP request method (GET, POST, etc) or path is incorrect.|None|
|5XX|Server Error|An error occurred while processing the request. Please try again later.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Along Route Search

> Code samples

```bash
curl "https://example.com/search/2/searchAlongRoute/pizza.xml?maxDetourTime=1200&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "route": {
      "points": [
        {
          "lat": 37.7524152343544,
          "lon": -122.43576049804686
        },
        {
          "lat": 37.70660472542312,
          "lon": -122.43301391601562
        },
        {
          "lat": 37.712059855877314,
          "lon": -122.36434936523438
        },
        {
          "lat": 37.75350561243041,
          "lon": -122.37396240234374
        }
      ]
    }
  }'
```

`POST /search/{versionNumber}/searchAlongRoute/{query}.{ext}`

> Body parameter

```json
{
  "route": {
    "points": [
      {
        "lat": 37.7524152343544,
        "lon": -122.43576049804686
      },
      {
        "lat": 37.70660472542312,
        "lon": -122.43301391601562
      },
      {
        "lat": 37.712059855877314,
        "lon": -122.36434936523438
      },
      {
        "lat": 37.75350561243041,
        "lon": -122.37396240234374
      }
    ]
  }
}
```

<h3 id="along-route-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 2.|
|query|path|string|true|Query string. Must be properly URL encoded.|
|ext|path|string|true|Expected response format.|
|maxDetourTime|query|integer|true|Maximum detour time|
|limit|query|integer|false|Maximum number of search results that will be returned.|
|body|body|object|false|none|
|» route|body|object|false|none|
|» » points|body|[object]|false|none|
|» » » lat|body|number(float)|false|none|
|» » » lon|body|number(float)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|2|
|ext|json|
|ext|jsonp|
|ext|js|
|ext|xml|

<h3 id="along-route-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: the search successfully returned zero or more results.|None|
|400|Bad Request|Bad Request: one or more parameters were incorrectly specified.|None|
|403|Forbidden|Forbidden: possible causes include:<br>  - Service requires SSL<br>  - Not authorized<br>  - Rate or volume limit exceeded<br>  - Unknown referer|None|
|405|Method Not Allowed|Method Not Allowed: the HTTP method (GET, POST, etc) is not supported for this request.|None|
|596|596|Not Found: the HTTP request method (GET, POST, etc) or path is incorrect.|None|
|5XX|Server Error|An error occurred while processing the request. Please try again later.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="search-geocoding">Geocoding</h1>

## Geocode

> Code samples

```bash
curl "https://example.com/search/2/geocode/4%20north%202nd%20street%20san%20jose.xml?key=${API_KEY}"
```

`GET /search/{versionNumber}/geocode/{query}.{ext}`

<h3 id="geocode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 2.|
|query|path|string|true|Query string. Must be properly URL encoded.|
|ext|path|string|true|Expected response format.|
|storeResult|query|boolean|false|**Deprecated.** If the "storeResult" flag is set, the query will be interpreted as a stored geocode and will be billed according to the terms of use.|
|typeahead|query|boolean|false|If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.|
|limit|query|integer|false|Maximum number of search results that will be returned.|
|ofs|query|integer|false|Starting offset of the returned results within the full result set.|
|countrySet|query|string|false|Comma separated string of country codes. This will limit the search to the specified countries.|
|lat|query|number(float)|false|Latitude where results should be biased.<br>NOTE: supplying a lat/lon without a radius will return search results biased to that point.|
|lon|query|number(float)|false|Longitude where results should be biased<br>NOTE: supplying a lat/lon without a radius will return search results biased to that point.|
|radius|query|integer|false|If radius <b>and</b> position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.|
|topLeft|query|string|false|Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.|
|btmRight|query|string|false|Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.|
|language|query|string|false|Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.|
|extendedPostalCodesFor|query|string|false|Indexes for which extended postal codes should be included in the results. Available indexes are:<br>  - <b>Addr</b> = Address ranges<br>  - <b>Geo</b> = Geographies<br>  - <b>PAD</b> = Point Addresses<br>  - <b>POI</b> = Points of Interest<br>  - <b>Str</b> = Streets<br>  - <b>XStr</b> = Cross Streets (intersections)|
|view|query|string|false|Geopolitical View.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|2|
|ext|json|
|ext|jsonp|
|ext|js|
|ext|xml|
|view|Unified|
|view|IN|
|view|PK|
|view|IL|
|view|MA|

<h3 id="geocode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: the search successfully returned zero or more results.|None|
|400|Bad Request|Bad Request: one or more parameters were incorrectly specified.|None|
|403|Forbidden|Forbidden: possible causes include:<br>  - Service requires SSL<br>  - Not authorized<br>  - Rate or volume limit exceeded<br>  - Unknown referer|None|
|405|Method Not Allowed|Method Not Allowed: the HTTP method (GET, POST, etc) is not supported for this request.|None|
|596|596|Not Found: the HTTP request method (GET, POST, etc) or path is incorrect.|None|
|5XX|Server Error|An error occurred while processing the request. Please try again later.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Structured Geocode

> Code samples

```bash
curl "https://example.com/search/2/structuredGeocode.xml?countryCode=NL&key=${API_KEY}"
```

`GET /search/{versionNumber}/structuredGeocode.{ext}`

<h3 id="structured-geocode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 2.|
|ext|path|string|true|Expected response format.|
|countryCode|query|string|true|2 or 3 letter country code (e.g.: FR, ES).|
|limit|query|integer|false|Maximum number of search results that will be returned.|
|ofs|query|integer|false|Starting offset of the returned results within the full result set.|
|streetNumber|query|string|false|The street number for the structured address.|
|streetName|query|string|false|The street name for the structured address.|
|crossStreet|query|string|false|The cross street name for the structured address.|
|municipality|query|string|false|The municipality (city/town) for the structured address.|
|municipalitySubdivision|query|string|false|The municipality subdivision (sub/super city) for the structured address.|
|countryTertiarySubdivision|query|string|false|The named area for the structured address.|
|countrySecondarySubdivision|query|string|false|The county for the structured address.|
|countrySubdivision|query|string|false|The state or province for the structured address.|
|postalCode|query|string|false|The zip code or postal code for the structured address.|
|language|query|string|false|Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.|
|extendedPostalCodesFor|query|string|false|Indexes for which extended postal codes should be included in the results. Available indexes are:<br>  - <b>Addr</b> = Address ranges<br>  - <b>Geo</b> = Geographies<br>  - <b>PAD</b> = Point Addresses<br>  - <b>POI</b> = Points of Interest<br>  - <b>Str</b> = Streets<br>  - <b>XStr</b> = Cross Streets (intersections)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|2|
|ext|json|
|ext|jsonp|
|ext|js|
|ext|xml|

<h3 id="structured-geocode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: the search successfully returned zero or more results.|None|
|400|Bad Request|Bad Request: one or more parameters were incorrectly specified.|None|
|403|Forbidden|Forbidden: possible causes include:<br>  - Service requires SSL<br>  - Not authorized<br>  - Rate or volume limit exceeded<br>  - Unknown referer|None|
|405|Method Not Allowed|Method Not Allowed: the HTTP method (GET, POST, etc) is not supported for this request.|None|
|596|596|Not Found: the HTTP request method (GET, POST, etc) or path is incorrect.|None|
|5XX|Server Error|An error occurred while processing the request. Please try again later.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="search-filters">Filters</h1>

## Geometry Filter

> Code samples

```bash
curl "https://example.com/search/2/geometryFilter.xml?geometryList=%5B%7B%22type%22%3A%22CIRCLE%22%2C%20%22position%22%3A%2240.80558%2C%20-73.96548%22%2C%20%22radius%22%3A100%7D%2C%20%7B%22type%22%3A%22POLYGON%22%2C%20%22vertices%22%3A%5B%2237.7524152343544%2C%20-122.43576049804686%22%2C%20%2237.70660472542312%2C%20-122.43301391601562%22%2C%20%2237.712059855877314%2C%20-122.36434936523438%22%2C%20%2237.75350561243041%2C%20-122.37396240234374%22%5D%7D%5D&poiList=%5B%7B%22poi%22%3A%7B%22name%22%3A%22S%20Restaurant%20Toms%22%7D%2C%22address%22%3A%7B%22freeformAddress%22%3A%222880%20Broadway%2C%20New%20York%2C%20NY%2010025%22%7D%2C%22position%22%3A%7B%22lat%22%3A40.80558%2C%22lon%22%3A-73.96548%7D%7D%2C%7B%22poi%22%3A%7B%22name%22%3A%22Yasha%20Raman%20Corporation%22%7D%2C%22address%22%3A%7B%22freeformAddress%22%3A%22940%20Amsterdam%20Ave%2C%20New%20York%2C%20NY%2010025%22%7D%2C%22position%22%3A%7B%22lat%22%3A40.80076%2C%22lon%22%3A-73.96556%7D%7D%5D&key=${API_KEY}"
```

`GET /search/{versionNumber}/geometryFilter.{ext}`

<h3 id="geometry-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 2.|
|ext|path|string|true|Expected response format.|
|geometryList|query|string|true|List of geometries to filter by. Available types are CIRCLE (with the radius expressed in meters) and POLYGON.|
|poiList|query|string|true|List of POIs to filter. The only required attribute of a POI is position, everything else is optional and will be echoed back when passed in.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|2|
|ext|json|
|ext|jsonp|
|ext|js|
|ext|xml|

<h3 id="geometry-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: the search successfully returned zero or more results.|None|
|400|Bad Request|Bad Request: one or more parameters were incorrectly specified.|None|
|403|Forbidden|Forbidden: possible causes include:<br>  - Service requires SSL<br>  - Not authorized<br>  - Rate or volume limit exceeded<br>  - Unknown referer|None|
|405|Method Not Allowed|Method Not Allowed: the HTTP method (GET, POST, etc) is not supported for this request.|None|
|596|596|Not Found: the HTTP request method (GET, POST, etc) or path is incorrect.|None|
|5XX|Server Error|An error occurred while processing the request. Please try again later.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Geometry Filter

> Code samples

```bash
curl "https://example.com/search/2/geometryFilter.xml?key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "geometryList": [
      {
        "position": "40.80558,-73.96548",
        "radius": 100,
        "type": "CIRCLE"
      },
      {
        "type": "POLYGON",
        "vertices": [
          "37.7524152343544,-122.43576049804686",
          "37.70660472542312,-122.43301391601562",
          "37.712059855877314,-122.36434936523438",
          "37.75350561243041,-122.37396240234374"
        ]
      }
    ],
    "poiList": [
      {
        "address": {
          "freeformAddress": "2880 Broadway, New York, NY 10025"
        },
        "poi": {
          "name": "S Restaurant Tom'\''s"
        },
        "position": {
          "lat": 40.80558,
          "lon": -73.96548
        }
      }
    ]
  }'
```

`POST /search/{versionNumber}/geometryFilter.{ext}`

> Body parameter

```json
{
  "geometryList": [
    {
      "position": "40.80558,-73.96548",
      "radius": 100,
      "type": "CIRCLE"
    },
    {
      "type": "POLYGON",
      "vertices": [
        "37.7524152343544,-122.43576049804686",
        "37.70660472542312,-122.43301391601562",
        "37.712059855877314,-122.36434936523438",
        "37.75350561243041,-122.37396240234374"
      ]
    }
  ],
  "poiList": [
    {
      "address": {
        "freeformAddress": "2880 Broadway, New York, NY 10025"
      },
      "poi": {
        "name": "S Restaurant Tom's"
      },
      "position": {
        "lat": 40.80558,
        "lon": -73.96548
      }
    }
  ]
}
```

<h3 id="geometry-filter-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 2.|
|ext|path|string|true|Expected response format.|
|body|body|object|false|none|
|» geometryList|body|[object]|false|none|
|» » position|body|string|false|none|
|» » radius|body|integer|false|none|
|» » type|body|string|false|none|
|» » vertices|body|[string]|false|none|
|» poiList|body|[object]|false|none|
|» » address|body|object|false|none|
|» » » freeformAddress|body|string|false|none|
|» » poi|body|object|false|none|
|» » » name|body|string|false|none|
|» » position|body|object|false|none|
|» » » lat|body|number(float)|false|none|
|» » » lon|body|number(float)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|2|
|ext|json|
|ext|jsonp|
|ext|js|
|ext|xml|

<h3 id="geometry-filter-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: the search successfully returned zero or more results.|None|
|400|Bad Request|Bad Request: one or more parameters were incorrectly specified.|None|
|403|Forbidden|Forbidden: possible causes include:<br>  - Service requires SSL<br>  - Not authorized<br>  - Rate or volume limit exceeded<br>  - Unknown referer|None|
|405|Method Not Allowed|Method Not Allowed: the HTTP method (GET, POST, etc) is not supported for this request.|None|
|596|596|Not Found: the HTTP request method (GET, POST, etc) or path is incorrect.|None|
|5XX|Server Error|An error occurred while processing the request. Please try again later.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Routed Filter

> Code samples

```bash
curl "https://example.com/search/2/routedFilter/37.8328%2C-122.27669/-15.6.xml?poiList=%5B%7B%22poi%22%3A%7B%22name%22%3A%22Cleaire%20Advanced%20Emission%20Controls%22%7D%2C%22address%22%3A%7B%22freeformAddress%22%3A%227220%20Trade%20St%2C%20San%20Diego%2C%20CA%2092121%22%7D%2C%22position%22%3A%7B%22lat%22%3A%2237.83274%22%2C%22lon%22%3A%22-122.27631%22%7D%7D%5D&key=${API_KEY}"
```

`GET /search/{versionNumber}/routedFilter/{position}/{heading}.{ext}`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="routed-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 2.|
|position|path|string|true|This is specified as a comma separated string composed of lat., lon.|
|heading|path|number(float)|true|The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)|
|ext|path|string|true|Expected response format.|
|poiList|query|string|true|List of POIs to filter. The only required attribute of a POI is position, everything else is optional and will be echoed back when passed in.|
|routingTimeout|query|integer|false|Only return results that arrive from routing engine within this time limit.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|2|
|ext|json|
|ext|jsonp|
|ext|js|
|ext|xml|

<h3 id="routed-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: the search successfully returned zero or more results.|None|
|400|Bad Request|Bad Request: one or more parameters were incorrectly specified.|None|
|403|Forbidden|Forbidden: possible causes include:<br>  - Service requires SSL<br>  - Not authorized<br>  - Rate or volume limit exceeded<br>  - Unknown referer|None|
|405|Method Not Allowed|Method Not Allowed: the HTTP method (GET, POST, etc) is not supported for this request.|None|
|596|596|Not Found: the HTTP request method (GET, POST, etc) or path is incorrect.|None|
|5XX|Server Error|An error occurred while processing the request. Please try again later.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Routed Filter

> Code samples

```bash
curl "https://example.com/search/2/routedFilter/37.8328%2C-122.27669/90.xml?key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "poiList": [
      {
        "address": {
          "freeformAddress": "9500 Gilman Dr, San Diego, CA 92037"
        },
        "poi": {
          "name": "University of California San Diego"
        },
        "position": {
          "lat": 32.87349,
          "lon": -117.2378
        }
      },
      {
        "address": {
          "freeformAddress": "7220 Trade St, San Diego, CA 92121"
        },
        "poi": {
          "name": "Cleaire Advanced Emission Controls"
        },
        "position": {
          "lat": 37.83274,
          "lon": -122.27631
        }
      }
    ]
  }'
```

`POST /search/{versionNumber}/routedFilter/{position}/{heading}.{ext}`

<aside class="warning">
This operation is deprecated
</aside>

> Body parameter

```json
{
  "poiList": [
    {
      "address": {
        "freeformAddress": "9500 Gilman Dr, San Diego, CA 92037"
      },
      "poi": {
        "name": "University of California San Diego"
      },
      "position": {
        "lat": 32.87349,
        "lon": -117.2378
      }
    },
    {
      "address": {
        "freeformAddress": "7220 Trade St, San Diego, CA 92121"
      },
      "poi": {
        "name": "Cleaire Advanced Emission Controls"
      },
      "position": {
        "lat": 37.83274,
        "lon": -122.27631
      }
    }
  ]
}
```

<h3 id="routed-filter-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 2.|
|position|path|string|true|This is specified as a comma separated string composed of lat., lon.|
|heading|path|number(float)|true|The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)|
|ext|path|string|true|Expected response format.|
|routingTimeout|query|integer|false|Only return results that arrive from routing engine within this time limit.|
|body|body|object|false|none|
|» poiList|body|[object]|false|none|
|» » address|body|object|false|none|
|» » » freeformAddress|body|string|false|none|
|» » poi|body|object|false|none|
|» » » name|body|string|false|none|
|» » position|body|object|false|none|
|» » » lat|body|number(float)|false|none|
|» » » lon|body|number(float)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|2|
|ext|json|
|ext|jsonp|
|ext|js|
|ext|xml|

<h3 id="routed-filter-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: the search successfully returned zero or more results.|None|
|400|Bad Request|Bad Request: one or more parameters were incorrectly specified.|None|
|403|Forbidden|Forbidden: possible causes include:<br>  - Service requires SSL<br>  - Not authorized<br>  - Rate or volume limit exceeded<br>  - Unknown referer|None|
|405|Method Not Allowed|Method Not Allowed: the HTTP method (GET, POST, etc) is not supported for this request.|None|
|596|596|Not Found: the HTTP request method (GET, POST, etc) or path is incorrect.|None|
|5XX|Server Error|An error occurred while processing the request. Please try again later.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="search-reverse-geocoding">Reverse Geocoding</h1>

## Cross Street lookup

> Code samples

```bash
curl "https://example.com/search/2/reverseGeocode/crossStreet/37.8328%2C-122.27669.xml?key=${API_KEY}"
```

`GET /search/{versionNumber}/reverseGeocode/crossStreet/{position}.{ext}`

<h3 id="cross-street-lookup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 2.|
|position|path|string|true|This is specified as a comma separated string composed of lat., lon.|
|ext|path|string|true|Expected response format.|
|limit|query|integer|false|Maximum number of cross-streets to return.|
|spatialKeys|query|boolean|false|**Deprecated.** If the "spatialKeys" flag is set, the response will also contain a proprietary geospatial keys for a specified location.|
|heading|query|number(float)|false|The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)|
|radius|query|integer|false|The maximum distance in meters from the specified position for the reverse geocoder to consider.|
|language|query|string|false|Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|2|
|ext|json|
|ext|jsonp|
|ext|js|
|ext|xml|

<h3 id="cross-street-lookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: the search successfully returned zero or more results.|None|
|400|Bad Request|Bad Request: one or more parameters were incorrectly specified.|None|
|403|Forbidden|Forbidden: possible causes include:<br>  - Service requires SSL<br>  - Not authorized<br>  - Rate or volume limit exceeded<br>  - Unknown referer|None|
|405|Method Not Allowed|Method Not Allowed: the HTTP method (GET, POST, etc) is not supported for this request.|None|
|596|596|Not Found: the HTTP request method (GET, POST, etc) or path is incorrect.|None|
|5XX|Server Error|An error occurred while processing the request. Please try again later.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Reverse Geocode

> Code samples

```bash
curl "https://example.com/search/2/reverseGeocode/37.8328%2C-122.27669.xml?key=${API_KEY}"
```

`GET /search/{versionNumber}/reverseGeocode/{position}.{ext}`

<h3 id="reverse-geocode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 2.|
|position|path|string|true|This is specified as a comma separated string composed of lat., lon.|
|ext|path|string|true|Expected response format.|
|spatialKeys|query|boolean|false|**Deprecated.** If the "spatialKeys" flag is set, the response will also contain a proprietary geospatial keys for a specified location.|
|returnSpeedLimit|query|boolean|false|To enable return of the posted speed limit (where available).|
|heading|query|number(float)|false|The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)|
|radius|query|integer|false|The maximum distance in meters from the specified position for the reverse geocoder to consider.|
|number|query|string|false|If a number is sent in along with the request, the response may include the side of the street (Left/Right) and an offset position for that number.|
|returnRoadUse|query|boolean|false|Enables return of the road use array for reverse geocodes at street level.|
|roadUse|query|string|false|Restricts reverse geocodes to a certain type of road use. The road use array for reverse geocodes can be one or more of: ["LimitedAccess", "Arterial", "Terminal", "Ramp", "Rotary", "LocalStreet"].|
|callback|query|string|false|Specifies the jsonp callback method.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|2|
|ext|json|
|ext|jsonp|
|ext|js|
|ext|xml|

<h3 id="reverse-geocode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: the search successfully returned zero or more results.|None|
|400|Bad Request|Bad Request: one or more parameters were incorrectly specified.|None|
|403|Forbidden|Forbidden: possible causes include:<br>  - Service requires SSL<br>  - Not authorized<br>  - Rate or volume limit exceeded<br>  - Unknown referer|None|
|405|Method Not Allowed|Method Not Allowed: the HTTP method (GET, POST, etc) is not supported for this request.|None|
|596|596|Not Found: the HTTP request method (GET, POST, etc) or path is incorrect.|None|
|5XX|Server Error|An error occurred while processing the request. Please try again later.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>
