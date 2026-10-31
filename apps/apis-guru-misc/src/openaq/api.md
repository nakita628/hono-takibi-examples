<h1 id="openaq">OpenAQ v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for OpenAQ LCS

Base URLs:

* <a href="http://openaq.local">http://openaq.local</a>

<h1 id="openaq-default">Default</h1>

## Favico

<a id="opIdfavico_favicon_ico_get"></a>

> Code samples

```bash
curl https://example.com/favicon.ico \
  -H 'Accept: application/json'
```

`GET /favicon.ico`

> Example responses

> 200 Response

```json
null
```

<h3 id="favico-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Pong

<a id="opIdpong_ping_get"></a>

> Code samples

```bash
curl https://example.com/ping \
  -H 'Accept: application/json'
```

`GET /ping`

Sanity check.
This will let the user know that the service is operational.
And this path operation will:
* show a lifesign

> Example responses

> 200 Response

```json
null
```

<h3 id="pong-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="openaq-v1">v1</h1>

## Provides a simple listing of cities within the platform

<a id="opIdcities_getv1_v1_cities_get"></a>

> Code samples

```bash
curl https://example.com/v1/cities \
  -H 'Accept: application/json'
```

`GET /v1/cities`

<h3 id="provides-a-simple-listing-of-cities-within-the-platform-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Change the number of results returned.|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|Define sort order.|
|country_id|query|string|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. /US)<br>        |
|country|query|[string]|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. ?country=US or ?country=US&country=MX)<br>        |
|city|query|[string]|false|<br>        Limit results by a certain city or cities.<br>        (ex. ?city=Chicago or ?city=Chicago&city=Boston)<br>        |
|order_by|query|object|false|Order by a field|
|entity|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": [
    {
      "city": "string",
      "count": 0,
      "country": "string",
      "firstUpdated": "1970-01-01T00:00:00Z",
      "lastUpdated": "1970-01-01T00:00:00Z",
      "locations": 0,
      "parameters": [
        "string"
      ]
    }
  ]
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="provides-a-simple-listing-of-cities-within-the-platform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQCitiesResult](#schemaopenaqcitiesresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Countries Getv1

<a id="opIdcountries_getv1_v1_countries_get"></a>

> Code samples

```bash
curl https://example.com/v1/countries \
  -H 'Accept: application/json'
```

`GET /v1/countries`

<h3 id="countries-getv1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|Define sort order.|
|country_id|query|string|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. /US)<br>        |
|country|query|[string]|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. ?country=US or ?country=US&country=MX)<br>        |
|order_by|query|object|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": [
    {
      "cities": 0,
      "code": "string",
      "count": 0,
      "firstUpdated": "1970-01-01T00:00:00Z",
      "lastUpdated": "1970-01-01T00:00:00Z",
      "locations": 0,
      "name": "string",
      "parameters": [
        "string"
      ],
      "sources": 0
    }
  ]
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="countries-getv1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQCountriesResult](#schemaopenaqcountriesresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Countries Get

<a id="opIdcountries_get_v1_countries__country_id__get"></a>

> Code samples

```bash
curl https://example.com/v1/countries/st \
  -H 'Accept: application/json'
```

`GET /v1/countries/{country_id}`

<h3 id="countries-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country_id|path|string|true|none|
|limit|query|integer|false|none|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|Define sort order.|
|country|query|[string]|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. ?country=US or ?country=US&country=MX)<br>        |
|order_by|query|object|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": [
    {
      "cities": 0,
      "code": "string",
      "count": 0,
      "firstUpdated": "1970-01-01T00:00:00Z",
      "lastUpdated": "1970-01-01T00:00:00Z",
      "locations": 0,
      "name": "string",
      "parameters": [
        "string"
      ],
      "sources": 0
    }
  ]
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="countries-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQCountriesResult](#schemaopenaqcountriesresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Latest V1 Get

<a id="opIdlatest_v1_get_v1_latest_get"></a>

> Code samples

```bash
curl https://example.com/v1/latest \
  -H 'Accept: application/json'
```

`GET /v1/latest`

<h3 id="latest-v1-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Change the number of results returned.|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|Sort Direction|
|has_geo|query|boolean|false|none|
|parameter_id|query|integer|false|none|
|parameter|query|[integer \| string]|false|none|
|unit|query|[string]|false|none|
|coordinates|query|string|false|none|
|radius|query|integer|false|none|
|country_id|query|string|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. /US)<br>        |
|country|query|[string]|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. ?country=US or ?country=US&country=MX)<br>        |
|city|query|[string]|false|<br>        Limit results by a certain city or cities.<br>        (ex. ?city=Chicago or ?city=Chicago&city=Boston)<br>        |
|location_id|query|integer|false|none|
|location|query|[integer \| string]|false|none|
|order_by|query|object|false|Order by a field|
|isMobile|query|boolean|false|Location is mobile|
|isAnalysis|query|boolean|false|Data is the product of a previous analysis/aggregation and not raw measurements|
|sourceName|query|[string]|false|Name of the data source|
|entity|query|object|false|Source entity type.|
|sensorType|query|object|false|Type of Sensor|
|modelName|query|[string]|false|Model Name of Sensor|
|manufacturerName|query|[string]|false|Manufacturer of Sensor|
|dumpRaw|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": []
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="latest-v1-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQResult](#schemaopenaqresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Latest V1 Get

<a id="opIdlatest_v1_get_v1_latest__location_id__get"></a>

> Code samples

```bash
curl https://example.com/v1/latest/0 \
  -H 'Accept: application/json'
```

`GET /v1/latest/{location_id}`

<h3 id="latest-v1-get-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|integer|true|none|
|limit|query|integer|false|Change the number of results returned.|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|Sort Direction|
|has_geo|query|boolean|false|none|
|parameter_id|query|integer|false|none|
|parameter|query|[integer \| string]|false|none|
|unit|query|[string]|false|none|
|coordinates|query|string|false|none|
|radius|query|integer|false|none|
|country_id|query|string|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. /US)<br>        |
|country|query|[string]|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. ?country=US or ?country=US&country=MX)<br>        |
|city|query|[string]|false|<br>        Limit results by a certain city or cities.<br>        (ex. ?city=Chicago or ?city=Chicago&city=Boston)<br>        |
|location|query|[integer \| string]|false|none|
|order_by|query|object|false|Order by a field|
|isMobile|query|boolean|false|Location is mobile|
|isAnalysis|query|boolean|false|Data is the product of a previous analysis/aggregation and not raw measurements|
|sourceName|query|[string]|false|Name of the data source|
|entity|query|object|false|Source entity type.|
|sensorType|query|object|false|Type of Sensor|
|modelName|query|[string]|false|Model Name of Sensor|
|manufacturerName|query|[string]|false|Manufacturer of Sensor|
|dumpRaw|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": []
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="latest-v1-get-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQResult](#schemaopenaqresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Locationsv1 Get

<a id="opIdlocationsv1_get_v1_locations_get"></a>

> Code samples

```bash
curl https://example.com/v1/locations \
  -H 'Accept: application/json'
```

`GET /v1/locations`

<h3 id="locationsv1-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Change the number of results returned.|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|Sort Direction|
|has_geo|query|boolean|false|none|
|parameter_id|query|integer|false|none|
|parameter|query|[integer \| string]|false|none|
|unit|query|[string]|false|none|
|coordinates|query|string|false|none|
|radius|query|integer|false|none|
|country_id|query|string|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. /US)<br>        |
|country|query|[string]|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. ?country=US or ?country=US&country=MX)<br>        |
|city|query|[string]|false|<br>        Limit results by a certain city or cities.<br>        (ex. ?city=Chicago or ?city=Chicago&city=Boston)<br>        |
|location_id|query|integer|false|none|
|location|query|[integer \| string]|false|none|
|order_by|query|object|false|Order by a field|
|isMobile|query|boolean|false|Location is mobile|
|isAnalysis|query|boolean|false|Data is the product of a previous analysis/aggregation and not raw measurements|
|sourceName|query|[string]|false|Name of the data source|
|entity|query|object|false|Source entity type.|
|sensorType|query|object|false|Type of Sensor|
|modelName|query|[string]|false|Model Name of Sensor|
|manufacturerName|query|[string]|false|Manufacturer of Sensor|
|dumpRaw|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": []
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="locationsv1-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQResult](#schemaopenaqresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Locationsv1 Get

<a id="opIdlocationsv1_get_v1_locations__location_id__get"></a>

> Code samples

```bash
curl https://example.com/v1/locations/0 \
  -H 'Accept: application/json'
```

`GET /v1/locations/{location_id}`

<h3 id="locationsv1-get-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|integer|true|none|
|limit|query|integer|false|Change the number of results returned.|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|Sort Direction|
|has_geo|query|boolean|false|none|
|parameter_id|query|integer|false|none|
|parameter|query|[integer \| string]|false|none|
|unit|query|[string]|false|none|
|coordinates|query|string|false|none|
|radius|query|integer|false|none|
|country_id|query|string|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. /US)<br>        |
|country|query|[string]|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. ?country=US or ?country=US&country=MX)<br>        |
|city|query|[string]|false|<br>        Limit results by a certain city or cities.<br>        (ex. ?city=Chicago or ?city=Chicago&city=Boston)<br>        |
|location|query|[integer \| string]|false|none|
|order_by|query|object|false|Order by a field|
|isMobile|query|boolean|false|Location is mobile|
|isAnalysis|query|boolean|false|Data is the product of a previous analysis/aggregation and not raw measurements|
|sourceName|query|[string]|false|Name of the data source|
|entity|query|object|false|Source entity type.|
|sensorType|query|object|false|Type of Sensor|
|modelName|query|[string]|false|Model Name of Sensor|
|manufacturerName|query|[string]|false|Manufacturer of Sensor|
|dumpRaw|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": []
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="locationsv1-get-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQResult](#schemaopenaqresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Measurements Get V1

<a id="opIdmeasurements_get_v1_v1_measurements_get"></a>

> Code samples

```bash
curl https://example.com/v1/measurements \
  -H 'Accept: application/json'
```

`GET /v1/measurements`

<h3 id="measurements-get-v1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|none|
|date_from|query|string(date-time) \| string(date)|false|none|
|date_to|query|string(date-time) \| string(date)|false|none|
|limit|query|integer|false|Change the number of results returned.|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|none|
|has_geo|query|boolean|false|none|
|parameter_id|query|integer|false|none|
|parameter|query|[integer \| string]|false|none|
|unit|query|[string]|false|none|
|coordinates|query|string|false|none|
|radius|query|integer|false|none|
|country_id|query|string|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. /US)<br>        |
|country|query|[string]|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. ?country=US or ?country=US&country=MX)<br>        |
|city|query|[string]|false|<br>        Limit results by a certain city or cities.<br>        (ex. ?city=Chicago or ?city=Chicago&city=Boston)<br>        |
|location_id|query|integer|false|none|
|location|query|[integer \| string]|false|none|
|order_by|query|object|false|none|
|isMobile|query|boolean|false|none|
|isAnalysis|query|boolean|false|none|
|project|query|integer|false|none|
|entity|query|[EntityTypes](#schemaentitytypes)|false|none|
|sensorType|query|[SensorTypes](#schemasensortypes)|false|none|
|value_from|query|number|false|none|
|value_to|query|number|false|none|
|include_fields|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|entity|government|
|entity|community|
|entity|research|
|sensorType|reference grade|
|sensorType|low-cost sensor|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="measurements-get-v1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Parameters Getv1

<a id="opIdparameters_getv1_v1_parameters_get"></a>

> Code samples

```bash
curl https://example.com/v1/parameters \
  -H 'Accept: application/json'
```

`GET /v1/parameters`

<h3 id="parameters-getv1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Change the number of results returned.|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|Define sort order.|
|sourceName|query|[string]|false|none|
|sourceId|query|[integer]|false|none|
|sourceSlug|query|[string]|false|none|
|order_by|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": [
    {
      "description": "string",
      "displayName": "string",
      "id": 0,
      "isCore": true,
      "maxColorValue": 0,
      "name": "string",
      "preferredUnit": "string"
    }
  ]
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="parameters-getv1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQParametersResult](#schemaopenaqparametersresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Sources V1 Get

<a id="opIdsources_v1_get_v1_sources_get"></a>

> Code samples

```bash
curl https://example.com/v1/sources \
  -H 'Accept: application/json'
```

`GET /v1/sources`

<h3 id="sources-v1-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Change the number of results returned.|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|Define sort order.|
|name|query|string|false|none|
|order_by|query|object|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": []
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="sources-v1-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQResult](#schemaopenaqresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="openaq-v2">v2</h1>

## Averages V2 Get

<a id="opIdaverages_v2_get_v2_averages_get"></a>

> Code samples

```bash
curl 'https://example.com/v2/averages?spatial=country&temporal=day' \
  -H 'Accept: application/json'
```

`GET /v2/averages`

<h3 id="averages-v2-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date_from|query|string(date-time) \| string(date)|false|none|
|date_to|query|string(date-time) \| string(date)|false|none|
|parameter_id|query|integer|false|none|
|parameter|query|[integer \| string]|false|none|
|unit|query|[string]|false|none|
|project_id|query|integer|false|none|
|project|query|[integer \| string]|false|none|
|country_id|query|string|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. /US)<br>        |
|country|query|[string]|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. ?country=US or ?country=US&country=MX)<br>        |
|limit|query|integer|false|Change the number of results returned.|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|Define sort order.|
|spatial|query|[Spatial](#schemaspatial)|true|none|
|temporal|query|[Temporal](#schematemporal)|true|none|
|location|query|[string]|false|none|
|group|query|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|spatial|country|
|spatial|location|
|spatial|project|
|spatial|total|
|temporal|day|
|temporal|month|
|temporal|year|
|temporal|moy|
|temporal|dow|
|temporal|hour|
|temporal|hod|

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": []
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="averages-v2-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQResult](#schemaopenaqresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Provides a simple listing of cities within the platform

<a id="opIdcities_get_v2_cities_get"></a>

> Code samples

```bash
curl https://example.com/v2/cities \
  -H 'Accept: application/json'
```

`GET /v2/cities`

<h3 id="provides-a-simple-listing-of-cities-within-the-platform-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Change the number of results returned.|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|Define sort order.|
|country_id|query|string|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. /US)<br>        |
|country|query|[string]|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. ?country=US or ?country=US&country=MX)<br>        |
|city|query|[string]|false|<br>        Limit results by a certain city or cities.<br>        (ex. ?city=Chicago or ?city=Chicago&city=Boston)<br>        |
|order_by|query|object|false|Order by a field|
|entity|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": [
    {
      "city": "string",
      "count": 0,
      "country": "string",
      "firstUpdated": "1970-01-01T00:00:00Z",
      "lastUpdated": "1970-01-01T00:00:00Z",
      "locations": 0,
      "parameters": [
        "string"
      ]
    }
  ]
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="provides-a-simple-listing-of-cities-within-the-platform-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQCitiesResult](#schemaopenaqcitiesresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Countries Get

<a id="opIdcountries_get_v2_countries_get"></a>

> Code samples

```bash
curl https://example.com/v2/countries \
  -H 'Accept: application/json'
```

`GET /v2/countries`

<h3 id="countries-get-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|Define sort order.|
|country_id|query|string|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. /US)<br>        |
|country|query|[string]|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. ?country=US or ?country=US&country=MX)<br>        |
|order_by|query|object|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": [
    {
      "cities": 0,
      "code": "string",
      "count": 0,
      "firstUpdated": "1970-01-01T00:00:00Z",
      "lastUpdated": "1970-01-01T00:00:00Z",
      "locations": 0,
      "name": "string",
      "parameters": [
        "string"
      ],
      "sources": 0
    }
  ]
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="countries-get-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQCountriesResult](#schemaopenaqcountriesresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Countries Get

<a id="opIdcountries_get_v2_countries__country_id__get"></a>

> Code samples

```bash
curl https://example.com/v2/countries/st \
  -H 'Accept: application/json'
```

`GET /v2/countries/{country_id}`

<h3 id="countries-get-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country_id|path|string|true|none|
|limit|query|integer|false|none|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|Define sort order.|
|country|query|[string]|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. ?country=US or ?country=US&country=MX)<br>        |
|order_by|query|object|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": [
    {
      "cities": 0,
      "code": "string",
      "count": 0,
      "firstUpdated": "1970-01-01T00:00:00Z",
      "lastUpdated": "1970-01-01T00:00:00Z",
      "locations": 0,
      "name": "string",
      "parameters": [
        "string"
      ],
      "sources": 0
    }
  ]
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="countries-get-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQCountriesResult](#schemaopenaqcountriesresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Latest Get

<a id="opIdlatest_get_v2_latest_get"></a>

> Code samples

```bash
curl https://example.com/v2/latest \
  -H 'Accept: application/json'
```

`GET /v2/latest`

<h3 id="latest-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Change the number of results returned.|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|Sort Direction|
|has_geo|query|boolean|false|none|
|parameter_id|query|integer|false|none|
|parameter|query|[integer \| string]|false|none|
|unit|query|[string]|false|none|
|coordinates|query|string|false|none|
|radius|query|integer|false|none|
|country_id|query|string|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. /US)<br>        |
|country|query|[string]|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. ?country=US or ?country=US&country=MX)<br>        |
|city|query|[string]|false|<br>        Limit results by a certain city or cities.<br>        (ex. ?city=Chicago or ?city=Chicago&city=Boston)<br>        |
|location_id|query|integer|false|none|
|location|query|[integer \| string]|false|none|
|order_by|query|object|false|Order by a field|
|isMobile|query|boolean|false|Location is mobile|
|isAnalysis|query|boolean|false|Data is the product of a previous analysis/aggregation and not raw measurements|
|sourceName|query|[string]|false|Name of the data source|
|entity|query|object|false|Source entity type.|
|sensorType|query|object|false|Type of Sensor|
|modelName|query|[string]|false|Model Name of Sensor|
|manufacturerName|query|[string]|false|Manufacturer of Sensor|
|dumpRaw|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": []
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="latest-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQResult](#schemaopenaqresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Latest Get

<a id="opIdlatest_get_v2_latest__location_id__get"></a>

> Code samples

```bash
curl https://example.com/v2/latest/0 \
  -H 'Accept: application/json'
```

`GET /v2/latest/{location_id}`

<h3 id="latest-get-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|integer|true|none|
|limit|query|integer|false|Change the number of results returned.|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|Sort Direction|
|has_geo|query|boolean|false|none|
|parameter_id|query|integer|false|none|
|parameter|query|[integer \| string]|false|none|
|unit|query|[string]|false|none|
|coordinates|query|string|false|none|
|radius|query|integer|false|none|
|country_id|query|string|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. /US)<br>        |
|country|query|[string]|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. ?country=US or ?country=US&country=MX)<br>        |
|city|query|[string]|false|<br>        Limit results by a certain city or cities.<br>        (ex. ?city=Chicago or ?city=Chicago&city=Boston)<br>        |
|location|query|[integer \| string]|false|none|
|order_by|query|object|false|Order by a field|
|isMobile|query|boolean|false|Location is mobile|
|isAnalysis|query|boolean|false|Data is the product of a previous analysis/aggregation and not raw measurements|
|sourceName|query|[string]|false|Name of the data source|
|entity|query|object|false|Source entity type.|
|sensorType|query|object|false|Type of Sensor|
|modelName|query|[string]|false|Model Name of Sensor|
|manufacturerName|query|[string]|false|Manufacturer of Sensor|
|dumpRaw|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": []
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="latest-get-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQResult](#schemaopenaqresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Locations Get

<a id="opIdlocations_get_v2_locations_get"></a>

> Code samples

```bash
curl https://example.com/v2/locations \
  -H 'Accept: application/json'
```

`GET /v2/locations`

<h3 id="locations-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Change the number of results returned.|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|Sort Direction|
|has_geo|query|boolean|false|none|
|parameter_id|query|integer|false|none|
|parameter|query|[integer \| string]|false|none|
|unit|query|[string]|false|none|
|coordinates|query|string|false|none|
|radius|query|integer|false|none|
|country_id|query|string|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. /US)<br>        |
|country|query|[string]|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. ?country=US or ?country=US&country=MX)<br>        |
|city|query|[string]|false|<br>        Limit results by a certain city or cities.<br>        (ex. ?city=Chicago or ?city=Chicago&city=Boston)<br>        |
|location_id|query|integer|false|none|
|location|query|[integer \| string]|false|none|
|order_by|query|object|false|Order by a field|
|isMobile|query|boolean|false|Location is mobile|
|isAnalysis|query|boolean|false|Data is the product of a previous analysis/aggregation and not raw measurements|
|sourceName|query|[string]|false|Name of the data source|
|entity|query|object|false|Source entity type.|
|sensorType|query|object|false|Type of Sensor|
|modelName|query|[string]|false|Model Name of Sensor|
|manufacturerName|query|[string]|false|Manufacturer of Sensor|
|dumpRaw|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": []
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="locations-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQResult](#schemaopenaqresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Mobilegentilejson

<a id="opIdmobilegentilejson_v2_locations_tiles_mobile_generalized_tiles_json_get"></a>

> Code samples

```bash
curl https://example.com/v2/locations/tiles/mobile-generalized/tiles.json \
  -H 'Accept: application/json'
```

`GET /v2/locations/tiles/mobile-generalized/tiles.json`

> Example responses

> 200 Response

```json
{
  "attribution": "string",
  "bounds": [
    -180,
    -90,
    180,
    90
  ],
  "data": [],
  "description": "string",
  "grids": [],
  "legend": "string",
  "maxzoom": 30,
  "minzoom": 0,
  "name": "string",
  "scheme": "xyz",
  "template": "string",
  "tilejson": "2.2.0",
  "tiles": [
    "string"
  ],
  "version": "1.0.0"
}
```

<h3 id="mobilegentilejson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a tilejson|[TileJSON](#schematilejson)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Mobilegentile

<a id="opIdget_mobilegentile_v2_locations_tiles_mobile_generalized__z___x___y__pbf_get"></a>

> Code samples

```bash
curl https://example.com/v2/locations/tiles/mobile-generalized/0/0/0.pbf \
  -H 'Accept: application/json'
```

`GET /v2/locations/tiles/mobile-generalized/{z}/{x}/{y}.pbf`

<h3 id="get-mobilegentile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|z|path|integer|true|none|
|x|path|integer|true|none|
|y|path|integer|true|none|
|parameter|query|integer \| string|false|none|
|location|query|[integer]|false|limit data to location id|
|lastUpdatedFrom|query|string(date-time) \| string(date)|false|none|
|lastUpdatedTo|query|string(date-time) \| string(date)|false|none|
|isMobile|query|boolean|false|none|
|project|query|integer|false|none|
|isAnalysis|query|boolean|false|none|

> Example responses

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-mobilegentile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Mobiletilejson

<a id="opIdmobiletilejson_v2_locations_tiles_mobile_tiles_json_get"></a>

> Code samples

```bash
curl https://example.com/v2/locations/tiles/mobile/tiles.json \
  -H 'Accept: application/json'
```

`GET /v2/locations/tiles/mobile/tiles.json`

> Example responses

> 200 Response

```json
{
  "attribution": "string",
  "bounds": [
    -180,
    -90,
    180,
    90
  ],
  "data": [],
  "description": "string",
  "grids": [],
  "legend": "string",
  "maxzoom": 30,
  "minzoom": 0,
  "name": "string",
  "scheme": "xyz",
  "template": "string",
  "tilejson": "2.2.0",
  "tiles": [
    "string"
  ],
  "version": "1.0.0"
}
```

<h3 id="mobiletilejson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a tilejson|[TileJSON](#schematilejson)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Mobiletile

<a id="opIdget_mobiletile_v2_locations_tiles_mobile__z___x___y__pbf_get"></a>

> Code samples

```bash
curl 'https://example.com/v2/locations/tiles/mobile/0/0/0.pbf?dateFrom=1970-01-01T00%3A00%3A00Z&dateTo=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json'
```

`GET /v2/locations/tiles/mobile/{z}/{x}/{y}.pbf`

<h3 id="get-mobiletile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|z|path|integer|true|none|
|x|path|integer|true|none|
|y|path|integer|true|none|
|dateFrom|query|string(date-time) \| string(date)|true|none|
|dateTo|query|string(date-time) \| string(date)|true|none|
|parameter|query|integer \| string|false|none|
|location|query|[integer]|false|limit data to location id|
|lastUpdatedFrom|query|string(date-time) \| string(date)|false|none|
|lastUpdatedTo|query|string(date-time) \| string(date)|false|none|
|isMobile|query|boolean|false|none|
|project|query|integer|false|none|
|isAnalysis|query|boolean|false|none|

> Example responses

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-mobiletile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Tilejson

<a id="opIdtilejson_v2_locations_tiles_tiles_json_get"></a>

> Code samples

```bash
curl https://example.com/v2/locations/tiles/tiles.json \
  -H 'Accept: application/json'
```

`GET /v2/locations/tiles/tiles.json`

> Example responses

> 200 Response

```json
{
  "attribution": "string",
  "bounds": [
    -180,
    -90,
    180,
    90
  ],
  "data": [],
  "description": "string",
  "grids": [],
  "legend": "string",
  "maxzoom": 30,
  "minzoom": 0,
  "name": "string",
  "scheme": "xyz",
  "template": "string",
  "tilejson": "2.2.0",
  "tiles": [
    "string"
  ],
  "version": "1.0.0"
}
```

<h3 id="tilejson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a tilejson|[TileJSON](#schematilejson)|

<aside class="success">
This operation does not require authentication
</aside>

## Demo

<a id="opIddemo_v2_locations_tiles_viewer_get"></a>

> Code samples

```bash
curl https://example.com/v2/locations/tiles/viewer
```

`GET /v2/locations/tiles/viewer`

<h3 id="demo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get Tile

<a id="opIdget_tile_v2_locations_tiles__z___x___y__pbf_get"></a>

> Code samples

```bash
curl https://example.com/v2/locations/tiles/0/0/0.pbf \
  -H 'Accept: application/json'
```

`GET /v2/locations/tiles/{z}/{x}/{y}.pbf`

<h3 id="get-tile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|z|path|integer|true|none|
|x|path|integer|true|none|
|y|path|integer|true|none|
|parameter|query|integer \| string|false|none|
|location|query|[integer]|false|limit data to location id|
|lastUpdatedFrom|query|string(date-time) \| string(date)|false|none|
|lastUpdatedTo|query|string(date-time) \| string(date)|false|none|
|isMobile|query|boolean|false|none|
|project|query|integer|false|none|
|isAnalysis|query|boolean|false|none|

> Example responses

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-tile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Locations Get

<a id="opIdlocations_get_v2_locations__location_id__get"></a>

> Code samples

```bash
curl https://example.com/v2/locations/0 \
  -H 'Accept: application/json'
```

`GET /v2/locations/{location_id}`

<h3 id="locations-get-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|integer|true|none|
|limit|query|integer|false|Change the number of results returned.|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|Sort Direction|
|has_geo|query|boolean|false|none|
|parameter_id|query|integer|false|none|
|parameter|query|[integer \| string]|false|none|
|unit|query|[string]|false|none|
|coordinates|query|string|false|none|
|radius|query|integer|false|none|
|country_id|query|string|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. /US)<br>        |
|country|query|[string]|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. ?country=US or ?country=US&country=MX)<br>        |
|city|query|[string]|false|<br>        Limit results by a certain city or cities.<br>        (ex. ?city=Chicago or ?city=Chicago&city=Boston)<br>        |
|location|query|[integer \| string]|false|none|
|order_by|query|object|false|Order by a field|
|isMobile|query|boolean|false|Location is mobile|
|isAnalysis|query|boolean|false|Data is the product of a previous analysis/aggregation and not raw measurements|
|sourceName|query|[string]|false|Name of the data source|
|entity|query|object|false|Source entity type.|
|sensorType|query|object|false|Type of Sensor|
|modelName|query|[string]|false|Model Name of Sensor|
|manufacturerName|query|[string]|false|Manufacturer of Sensor|
|dumpRaw|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": []
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="locations-get-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQResult](#schemaopenaqresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Mfr Get

<a id="opIdmfr_get_v2_manufacturers_get"></a>

> Code samples

```bash
curl https://example.com/v2/manufacturers \
  -H 'Accept: application/json'
```

`GET /v2/manufacturers`

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": []
}
```

<h3 id="mfr-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQResult](#schemaopenaqresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Measurements Get

<a id="opIdmeasurements_get_v2_measurements_get"></a>

> Code samples

```bash
curl https://example.com/v2/measurements \
  -H 'Accept: application/json'
```

`GET /v2/measurements`

<h3 id="measurements-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|none|
|date_from|query|string(date-time) \| string(date)|false|none|
|date_to|query|string(date-time) \| string(date)|false|none|
|limit|query|integer|false|Change the number of results returned.|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|none|
|has_geo|query|boolean|false|none|
|parameter_id|query|integer|false|none|
|parameter|query|[integer \| string]|false|none|
|unit|query|[string]|false|none|
|coordinates|query|string|false|none|
|radius|query|integer|false|none|
|country_id|query|string|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. /US)<br>        |
|country|query|[string]|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. ?country=US or ?country=US&country=MX)<br>        |
|city|query|[string]|false|<br>        Limit results by a certain city or cities.<br>        (ex. ?city=Chicago or ?city=Chicago&city=Boston)<br>        |
|location_id|query|integer|false|none|
|location|query|[integer \| string]|false|none|
|order_by|query|object|false|none|
|isMobile|query|boolean|false|none|
|isAnalysis|query|boolean|false|none|
|project|query|integer|false|none|
|entity|query|[EntityTypes](#schemaentitytypes)|false|none|
|sensorType|query|[SensorTypes](#schemasensortypes)|false|none|
|value_from|query|number|false|none|
|value_to|query|number|false|none|
|include_fields|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|entity|government|
|entity|community|
|entity|research|
|sensorType|reference grade|
|sensorType|low-cost sensor|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="measurements-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Model Get

<a id="opIdmodel_get_v2_models_get"></a>

> Code samples

```bash
curl https://example.com/v2/models \
  -H 'Accept: application/json'
```

`GET /v2/models`

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": []
}
```

<h3 id="model-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQResult](#schemaopenaqresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Parameters Get

<a id="opIdparameters_get_v2_parameters_get"></a>

> Code samples

```bash
curl https://example.com/v2/parameters \
  -H 'Accept: application/json'
```

`GET /v2/parameters`

<h3 id="parameters-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Change the number of results returned.|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|Define sort order.|
|sourceName|query|[string]|false|none|
|sourceId|query|[integer]|false|none|
|sourceSlug|query|[string]|false|none|
|order_by|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": [
    {
      "description": "string",
      "displayName": "string",
      "id": 0,
      "isCore": true,
      "maxColorValue": 0,
      "name": "string",
      "preferredUnit": "string"
    }
  ]
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="parameters-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQParametersResult](#schemaopenaqparametersresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Projects Get

<a id="opIdprojects_get_v2_projects_get"></a>

> Code samples

```bash
curl https://example.com/v2/projects \
  -H 'Accept: application/json'
```

`GET /v2/projects`

<h3 id="projects-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country_id|query|string|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. /US)<br>        |
|country|query|[string]|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. ?country=US or ?country=US&country=MX)<br>        |
|limit|query|integer|false|Change the number of results returned.|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|Define sort order.|
|parameter_id|query|integer|false|none|
|parameter|query|[integer \| string]|false|none|
|unit|query|[string]|false|none|
|project_id|query|integer|false|none|
|project|query|[integer \| string]|false|none|
|order_by|query|object|false|none|
|isMobile|query|boolean|false|none|
|isAnalysis|query|boolean|false|none|
|entity|query|string|false|none|
|sensorType|query|string|false|none|
|sourceName|query|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": [
    {
      "bbox": [
        0
      ],
      "countries": [
        "string"
      ],
      "entity": "string",
      "firstUpdated": "1970-01-01T00:00:00Z",
      "id": 0,
      "isAnalysis": true,
      "isMobile": true,
      "lastUpdated": "1970-01-01T00:00:00Z",
      "locationIds": [
        0
      ],
      "locations": 0,
      "measurements": 0,
      "name": "string",
      "parameters": [
        {
          "average": 0,
          "count": 0,
          "displayName": "string",
          "firstUpdated": "1970-01-01T00:00:00Z",
          "lastUpdated": "1970-01-01T00:00:00Z",
          "lastValue": 0,
          "locations": 0,
          "parameter": "string",
          "parameterId": 0,
          "unit": "string"
        }
      ],
      "sensorType": "string",
      "sources": [
        null
      ],
      "subtitle": "string"
    }
  ]
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="projects-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQProjectsResult](#schemaopenaqprojectsresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Projects Get

<a id="opIdprojects_get_v2_projects__project_id__get"></a>

> Code samples

```bash
curl https://example.com/v2/projects/0 \
  -H 'Accept: application/json'
```

`GET /v2/projects/{project_id}`

<h3 id="projects-get-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|integer|true|none|
|country_id|query|string|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. /US)<br>        |
|country|query|[string]|false|<br>        Limit results by a certain country using two letter country code.<br>        (ex. ?country=US or ?country=US&country=MX)<br>        |
|limit|query|integer|false|Change the number of results returned.|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|Define sort order.|
|parameter_id|query|integer|false|none|
|parameter|query|[integer \| string]|false|none|
|unit|query|[string]|false|none|
|project|query|[integer \| string]|false|none|
|order_by|query|object|false|none|
|isMobile|query|boolean|false|none|
|isAnalysis|query|boolean|false|none|
|entity|query|string|false|none|
|sensorType|query|string|false|none|
|sourceName|query|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": [
    {
      "bbox": [
        0
      ],
      "countries": [
        "string"
      ],
      "entity": "string",
      "firstUpdated": "1970-01-01T00:00:00Z",
      "id": 0,
      "isAnalysis": true,
      "isMobile": true,
      "lastUpdated": "1970-01-01T00:00:00Z",
      "locationIds": [
        0
      ],
      "locations": 0,
      "measurements": 0,
      "name": "string",
      "parameters": [
        {
          "average": 0,
          "count": 0,
          "displayName": "string",
          "firstUpdated": "1970-01-01T00:00:00Z",
          "lastUpdated": "1970-01-01T00:00:00Z",
          "lastValue": 0,
          "locations": 0,
          "parameter": "string",
          "parameterId": 0,
          "unit": "string"
        }
      ],
      "sensorType": "string",
      "sources": [
        null
      ],
      "subtitle": "string"
    }
  ]
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="projects-get-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQProjectsResult](#schemaopenaqprojectsresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Sources Get

<a id="opIdsources_get_v2_sources_get"></a>

> Code samples

```bash
curl https://example.com/v2/sources \
  -H 'Accept: application/json'
```

`GET /v2/sources`

<h3 id="sources-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Change the number of results returned.|
|page|query|integer|false|Paginate through results.|
|offset|query|integer|false|none|
|sort|query|object|false|Define sort order.|
|sourceName|query|[string]|false|none|
|sourceId|query|[integer]|false|none|
|sourceSlug|query|[string]|false|none|
|order_by|query|object|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": []
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="sources-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQResult](#schemaopenaqresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Readme Get

<a id="opIdreadme_get_v2_sources_readme__slug__get"></a>

> Code samples

```bash
curl https://example.com/v2/sources/readme/string \
  -H 'Accept: application/json'
```

`GET /v2/sources/readme/{slug}`

<h3 id="readme-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="readme-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Summary Get

<a id="opIdsummary_get_v2_summary_get"></a>

> Code samples

```bash
curl https://example.com/v2/summary \
  -H 'Accept: application/json'
```

`GET /v2/summary`

> Example responses

> 200 Response

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": []
}
```

<h3 id="summary-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAQResult](#schemaopenaqresult)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CitiesOrder">CitiesOrder</h2>
<!-- backwards compatibility -->
<a id="schemacitiesorder"></a>
<a id="schema_CitiesOrder"></a>
<a id="tocScitiesorder"></a>
<a id="tocscitiesorder"></a>

```json
"city"
```

An enumeration.

<h2 id="tocS_CitiesRow">CitiesRow</h2>
<!-- backwards compatibility -->
<a id="schemacitiesrow"></a>
<a id="schema_CitiesRow"></a>
<a id="tocScitiesrow"></a>
<a id="tocscitiesrow"></a>

```json
{
  "city": "string",
  "count": 0,
  "country": "string",
  "firstUpdated": "1970-01-01T00:00:00Z",
  "lastUpdated": "1970-01-01T00:00:00Z",
  "locations": 0,
  "parameters": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|none|
|count|integer|true|none|none|
|country|string|false|none|none|
|firstUpdated|string(date-time)|true|none|none|
|lastUpdated|string(date-time)|true|none|none|
|locations|integer|true|none|none|
|parameters|[string]|true|none|none|

<h2 id="tocS_CountriesOrder">CountriesOrder</h2>
<!-- backwards compatibility -->
<a id="schemacountriesorder"></a>
<a id="schema_CountriesOrder"></a>
<a id="tocScountriesorder"></a>
<a id="tocscountriesorder"></a>

```json
"country"
```

An enumeration.

<h2 id="tocS_CountriesRow">CountriesRow</h2>
<!-- backwards compatibility -->
<a id="schemacountriesrow"></a>
<a id="schema_CountriesRow"></a>
<a id="tocScountriesrow"></a>
<a id="tocscountriesrow"></a>

```json
{
  "cities": 0,
  "code": "string",
  "count": 0,
  "firstUpdated": "1970-01-01T00:00:00Z",
  "lastUpdated": "1970-01-01T00:00:00Z",
  "locations": 0,
  "name": "string",
  "parameters": [
    "string"
  ],
  "sources": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cities|integer|true|none|none|
|code|string|true|none|none|
|count|integer|true|none|none|
|firstUpdated|string(date-time)|true|none|none|
|lastUpdated|string(date-time)|true|none|none|
|locations|integer|true|none|none|
|name|string|true|none|none|
|parameters|[string]|true|none|none|
|sources|integer|true|none|none|

<h2 id="tocS_EntityTypes">EntityTypes</h2>
<!-- backwards compatibility -->
<a id="schemaentitytypes"></a>
<a id="schema_EntityTypes"></a>
<a id="tocSentitytypes"></a>
<a id="tocsentitytypes"></a>

```json
"government"
```

An enumeration.

<h2 id="tocS_HTTPValidationError">HTTPValidationError</h2>
<!-- backwards compatibility -->
<a id="schemahttpvalidationerror"></a>
<a id="schema_HTTPValidationError"></a>
<a id="tocShttpvalidationerror"></a>
<a id="tocshttpvalidationerror"></a>

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|[[ValidationError](#schemavalidationerror)]|false|none|none|

<h2 id="tocS_LocationsOrder">LocationsOrder</h2>
<!-- backwards compatibility -->
<a id="schemalocationsorder"></a>
<a id="schema_LocationsOrder"></a>
<a id="tocSlocationsorder"></a>
<a id="tocslocationsorder"></a>

```json
"city"
```

An enumeration.

<h2 id="tocS_MeasOrder">MeasOrder</h2>
<!-- backwards compatibility -->
<a id="schemameasorder"></a>
<a id="schema_MeasOrder"></a>
<a id="tocSmeasorder"></a>
<a id="tocsmeasorder"></a>

```json
"city"
```

An enumeration.

<h2 id="tocS_Meta">Meta</h2>
<!-- backwards compatibility -->
<a id="schemameta"></a>
<a id="schema_Meta"></a>
<a id="tocSmeta"></a>
<a id="tocsmeta"></a>

```json
{
  "found": 0,
  "license": "CC BY 4.0d",
  "limit": 100,
  "name": "openaq-api",
  "page": 1,
  "website": "/"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|found|integer|false|none|none|
|license|string|false|none|none|
|limit|integer|false|none|none|
|name|string|false|none|none|
|page|integer|false|none|none|
|website|string|false|none|none|

<h2 id="tocS_OpenAQCitiesResult">OpenAQCitiesResult</h2>
<!-- backwards compatibility -->
<a id="schemaopenaqcitiesresult"></a>
<a id="schema_OpenAQCitiesResult"></a>
<a id="tocSopenaqcitiesresult"></a>
<a id="tocsopenaqcitiesresult"></a>

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": [
    {
      "city": "string",
      "count": 0,
      "country": "string",
      "firstUpdated": "1970-01-01T00:00:00Z",
      "lastUpdated": "1970-01-01T00:00:00Z",
      "locations": 0,
      "parameters": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|none|
|results|[[CitiesRow](#schemacitiesrow)]|true|none|none|

<h2 id="tocS_OpenAQCountriesResult">OpenAQCountriesResult</h2>
<!-- backwards compatibility -->
<a id="schemaopenaqcountriesresult"></a>
<a id="schema_OpenAQCountriesResult"></a>
<a id="tocSopenaqcountriesresult"></a>
<a id="tocsopenaqcountriesresult"></a>

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": [
    {
      "cities": 0,
      "code": "string",
      "count": 0,
      "firstUpdated": "1970-01-01T00:00:00Z",
      "lastUpdated": "1970-01-01T00:00:00Z",
      "locations": 0,
      "name": "string",
      "parameters": [
        "string"
      ],
      "sources": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|none|
|results|[[CountriesRow](#schemacountriesrow)]|true|none|none|

<h2 id="tocS_OpenAQParametersResult">OpenAQParametersResult</h2>
<!-- backwards compatibility -->
<a id="schemaopenaqparametersresult"></a>
<a id="schema_OpenAQParametersResult"></a>
<a id="tocSopenaqparametersresult"></a>
<a id="tocsopenaqparametersresult"></a>

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": [
    {
      "description": "string",
      "displayName": "string",
      "id": 0,
      "isCore": true,
      "maxColorValue": 0,
      "name": "string",
      "preferredUnit": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|none|
|results|[[ParametersRow](#schemaparametersrow)]|true|none|none|

<h2 id="tocS_OpenAQProjectsResult">OpenAQProjectsResult</h2>
<!-- backwards compatibility -->
<a id="schemaopenaqprojectsresult"></a>
<a id="schema_OpenAQProjectsResult"></a>
<a id="tocSopenaqprojectsresult"></a>
<a id="tocsopenaqprojectsresult"></a>

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": [
    {
      "bbox": [
        0
      ],
      "countries": [
        "string"
      ],
      "entity": "string",
      "firstUpdated": "1970-01-01T00:00:00Z",
      "id": 0,
      "isAnalysis": true,
      "isMobile": true,
      "lastUpdated": "1970-01-01T00:00:00Z",
      "locationIds": [
        0
      ],
      "locations": 0,
      "measurements": 0,
      "name": "string",
      "parameters": [
        {
          "average": 0,
          "count": 0,
          "displayName": "string",
          "firstUpdated": "1970-01-01T00:00:00Z",
          "lastUpdated": "1970-01-01T00:00:00Z",
          "lastValue": 0,
          "locations": 0,
          "parameter": "string",
          "parameterId": 0,
          "unit": "string"
        }
      ],
      "sensorType": "string",
      "sources": [
        null
      ],
      "subtitle": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|none|
|results|[[ProjectsRow](#schemaprojectsrow)]|true|none|none|

<h2 id="tocS_OpenAQResult">OpenAQResult</h2>
<!-- backwards compatibility -->
<a id="schemaopenaqresult"></a>
<a id="schema_OpenAQResult"></a>
<a id="tocSopenaqresult"></a>
<a id="tocsopenaqresult"></a>

```json
{
  "meta": {
    "found": 0,
    "license": "CC BY 4.0d",
    "limit": 100,
    "name": "openaq-api",
    "page": 1,
    "website": "/"
  },
  "results": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|none|
|results|[object]|false|none|none|

<h2 id="tocS_ParametersRow">ParametersRow</h2>
<!-- backwards compatibility -->
<a id="schemaparametersrow"></a>
<a id="schema_ParametersRow"></a>
<a id="tocSparametersrow"></a>
<a id="tocsparametersrow"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "id": 0,
  "isCore": true,
  "maxColorValue": 0,
  "name": "string",
  "preferredUnit": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|displayName|string|true|none|none|
|id|integer|true|none|none|
|isCore|boolean|false|none|none|
|maxColorValue|number|false|none|none|
|name|string|true|none|none|
|preferredUnit|string|true|none|none|

<h2 id="tocS_ProjectParameterDetails">ProjectParameterDetails</h2>
<!-- backwards compatibility -->
<a id="schemaprojectparameterdetails"></a>
<a id="schema_ProjectParameterDetails"></a>
<a id="tocSprojectparameterdetails"></a>
<a id="tocsprojectparameterdetails"></a>

```json
{
  "average": 0,
  "count": 0,
  "displayName": "string",
  "firstUpdated": "1970-01-01T00:00:00Z",
  "lastUpdated": "1970-01-01T00:00:00Z",
  "lastValue": 0,
  "locations": 0,
  "parameter": "string",
  "parameterId": 0,
  "unit": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|average|number|true|none|none|
|count|integer|true|none|none|
|displayName|string|false|none|none|
|firstUpdated|string(date-time)|true|none|none|
|lastUpdated|string(date-time)|true|none|none|
|lastValue|number|true|none|none|
|locations|integer|true|none|none|
|parameter|string|true|none|none|
|parameterId|integer|true|none|none|
|unit|string|true|none|none|

<h2 id="tocS_ProjectsOrder">ProjectsOrder</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsorder"></a>
<a id="schema_ProjectsOrder"></a>
<a id="tocSprojectsorder"></a>
<a id="tocsprojectsorder"></a>

```json
"id"
```

An enumeration.

<h2 id="tocS_ProjectsRow">ProjectsRow</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsrow"></a>
<a id="schema_ProjectsRow"></a>
<a id="tocSprojectsrow"></a>
<a id="tocsprojectsrow"></a>

```json
{
  "bbox": [
    0
  ],
  "countries": [
    "string"
  ],
  "entity": "string",
  "firstUpdated": "1970-01-01T00:00:00Z",
  "id": 0,
  "isAnalysis": true,
  "isMobile": true,
  "lastUpdated": "1970-01-01T00:00:00Z",
  "locationIds": [
    0
  ],
  "locations": 0,
  "measurements": 0,
  "name": "string",
  "parameters": [
    {
      "average": 0,
      "count": 0,
      "displayName": "string",
      "firstUpdated": "1970-01-01T00:00:00Z",
      "lastUpdated": "1970-01-01T00:00:00Z",
      "lastValue": 0,
      "locations": 0,
      "parameter": "string",
      "parameterId": 0,
      "unit": "string"
    }
  ],
  "sensorType": "string",
  "sources": [
    null
  ],
  "subtitle": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bbox|[number]|false|none|none|
|countries|[string]|false|none|none|
|entity|string|false|none|none|
|firstUpdated|string(date-time)|true|none|none|
|id|integer|true|none|none|
|isAnalysis|boolean|false|none|none|
|isMobile|boolean|false|none|none|
|lastUpdated|string(date-time)|true|none|none|
|locationIds|[integer]|true|none|none|
|locations|integer|true|none|none|
|measurements|integer|true|none|none|
|name|string|true|none|none|
|parameters|[[ProjectParameterDetails](#schemaprojectparameterdetails)]|true|none|none|
|sensorType|string|false|none|none|
|sources|[object]|false|none|none|
|subtitle|string|true|none|none|

<h2 id="tocS_SensorTypes">SensorTypes</h2>
<!-- backwards compatibility -->
<a id="schemasensortypes"></a>
<a id="schema_SensorTypes"></a>
<a id="tocSsensortypes"></a>
<a id="tocssensortypes"></a>

```json
"reference grade"
```

An enumeration.

<h2 id="tocS_Sort">Sort</h2>
<!-- backwards compatibility -->
<a id="schemasort"></a>
<a id="schema_Sort"></a>
<a id="tocSsort"></a>
<a id="tocssort"></a>

```json
"asc"
```

An enumeration.

<h2 id="tocS_SourcesOrder">SourcesOrder</h2>
<!-- backwards compatibility -->
<a id="schemasourcesorder"></a>
<a id="schema_SourcesOrder"></a>
<a id="tocSsourcesorder"></a>
<a id="tocssourcesorder"></a>

```json
"sourceName"
```

An enumeration.

<h2 id="tocS_SourcesV1Order">SourcesV1Order</h2>
<!-- backwards compatibility -->
<a id="schemasourcesv1order"></a>
<a id="schema_SourcesV1Order"></a>
<a id="tocSsourcesv1order"></a>
<a id="tocssourcesv1order"></a>

```json
"name"
```

An enumeration.

<h2 id="tocS_Spatial">Spatial</h2>
<!-- backwards compatibility -->
<a id="schemaspatial"></a>
<a id="schema_Spatial"></a>
<a id="tocSspatial"></a>
<a id="tocsspatial"></a>

```json
"country"
```

An enumeration.

<h2 id="tocS_Temporal">Temporal</h2>
<!-- backwards compatibility -->
<a id="schematemporal"></a>
<a id="schema_Temporal"></a>
<a id="tocStemporal"></a>
<a id="tocstemporal"></a>

```json
"day"
```

An enumeration.

<h2 id="tocS_TileJSON">TileJSON</h2>
<!-- backwards compatibility -->
<a id="schematilejson"></a>
<a id="schema_TileJSON"></a>
<a id="tocStilejson"></a>
<a id="tocstilejson"></a>

```json
{
  "attribution": "string",
  "bounds": [
    -180,
    -90,
    180,
    90
  ],
  "data": [],
  "description": "string",
  "grids": [],
  "legend": "string",
  "maxzoom": 30,
  "minzoom": 0,
  "name": "string",
  "scheme": "xyz",
  "template": "string",
  "tilejson": "2.2.0",
  "tiles": [
    "string"
  ],
  "version": "1.0.0"
}
```

TileJSON model.
Based on https://github.com/mapbox/tilejson-spec/tree/master/2.2.0

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribution|string|false|none|none|
|bounds|[number]|false|none|none|
|data|[string]|false|none|none|
|description|string|false|none|none|
|grids|[string]|false|none|none|
|legend|string|false|none|none|
|maxzoom|integer|false|none|none|
|minzoom|integer|false|none|none|
|name|string|false|none|none|
|scheme|string|false|none|none|
|template|string|false|none|none|
|tilejson|string|false|none|none|
|tiles|[string]|true|none|none|
|version|string|false|none|none|

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "loc": [
    "string"
  ],
  "msg": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loc|[string]|true|none|none|
|msg|string|true|none|none|
|type|string|true|none|none|
