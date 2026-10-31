<h1 id="travel-recommendations-api">Travel Recommendations API v1.0.3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Before using this API, we recommend you read our **[Authorization Guide](https://developers.amadeus.com/self-service/apis-docs/guides/authorization-262)** for more information on how to generate an access token.

Base URLs:

* <a href="https://test.api.amadeus.com/v1">https://test.api.amadeus.com/v1</a>

<h1 id="travel-recommendations-api-recommended-locations">recommended-locations</h1>

## GET recommended destinations

<a id="opIdgetRecommendedLocation"></a>

> Code samples

```bash
curl 'https://test.api.amadeus.com/reference-data/recommended-locations?cityCodes=PAR' \
  -H 'Accept: application/vnd.amadeus+json'
```

`GET /reference-data/recommended-locations`

<h3 id="get-recommended-destinations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cityCodes|query|string|true|City used by the algorythm to recommend new destination. Several cities can be specified using comma.<br><br>City codes follow [IATA standard](http://www.iata.org/publications/Pages/code-search.aspx)|
|travelerCountryCode|query|string|false|Origin country of the traveler following [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code format (e.g. US)|
|destinationCountryCodes|query|string|false|List of country the traveler want to visit, separated with comma.<br><br>Country codes follow [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code format (e.g. US)|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "geoCode": {
        "latitude": 48.85755,
        "longiture": 2.34276
      },
      "iataCode": "PAR",
      "name": "PARIS",
      "relevance": 0.71,
      "subtype": "CITY",
      "type": "recommended-location"
    },
    {
      "geoCode": {
        "latitude": 40.41654,
        "longiture": 3.70348
      },
      "iataCode": "MAD",
      "name": "MADRID",
      "relevance": 0.68,
      "subtype": "CITY",
      "type": "recommended-location"
    }
  ],
  "meta": {
    "count": 2,
    "links": {
      "self": "https://test.api.amadeus.com/v1/reference-data/recommended-locations?cityCodes=LON&travelerCountryCode=FR"
    }
  }
}
```

> 400 Response

```json
{
  "errors": [
    {
      "code": 477,
      "detail": "invalid query parameter format",
      "source": {
        "example": "PAR",
        "parameter": "cityCodes"
      },
      "status": 400,
      "title": "INVALID FORMAT"
    }
  ]
}
```

> 500 Response

```json
{
  "errors": [
    {
      "code": 141,
      "status": 500,
      "title": "SYSTEM ERROR HAS OCCURRED"
    }
  ]
}
```

<h3 id="get-recommended-destinations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful reply|Inline|
|400|Bad Request|code    \| title                                 <br>------- \| ------------------------------------- <br>477     \| INVALID FORMAT<br>572     \| INVALID OPTION                            <br>32171   \| MANDATORY DATA MISSING |[Error_400](#schemaerror_400)|
|500|Internal Server Error|Internal Server Error|[Error_500](#schemaerror_500)|

<h3 id="get-recommended-destinations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[RecommendedLocation](#schemarecommendedlocation)]|false|none|none|
|meta|[Meta](#schemameta)|false|none|Meta information about the returned object(s) in "data"|
|warnings|[[Warning](#schemawarning)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Error_400">Error_400</h2>
<!-- backwards compatibility -->
<a id="schemaerror_400"></a>
<a id="schema_Error_400"></a>
<a id="tocSerror_400"></a>
<a id="tocserror_400"></a>

```json
{
  "errors": [
    {
      "code": 0,
      "detail": "string",
      "source": {
        "example": "string",
        "parameter": "string",
        "pointer": "string"
      },
      "status": 0,
      "title": "string"
    }
  ]
}
```

A set of errors

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|false|none|none|

<h2 id="tocS_Error_500">Error_500</h2>
<!-- backwards compatibility -->
<a id="schemaerror_500"></a>
<a id="schema_Error_500"></a>
<a id="tocSerror_500"></a>
<a id="tocserror_500"></a>

```json
{
  "errors": [
    {
      "code": 0,
      "detail": "string",
      "source": {
        "example": "string",
        "parameter": "string",
        "pointer": "string"
      },
      "status": 0,
      "title": "string"
    }
  ]
}
```

A set of errors

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|false|none|none|

<h2 id="tocS_Meta">Meta</h2>
<!-- backwards compatibility -->
<a id="schemameta"></a>
<a id="schema_Meta"></a>
<a id="tocSmeta"></a>
<a id="tocsmeta"></a>

```json
{
  "count": 0,
  "links": {
    "self": "http://example.com"
  }
}
```

Meta information about the returned object(s) in "data"

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|false|none|Total number of object(s) retrieved|
|links|object|false|none|Links related to the returned object(s)|

<h2 id="tocS_RecommendedLocation">RecommendedLocation</h2>
<!-- backwards compatibility -->
<a id="schemarecommendedlocation"></a>
<a id="schema_RecommendedLocation"></a>
<a id="tocSrecommendedlocation"></a>
<a id="tocsrecommendedlocation"></a>

```json
{
  "geoCode": {
    "latitude": 48.85837,
    "longitude": 2.294481
  },
  "iataCode": "PAR",
  "name": "Eiffel Tower",
  "subtype": "string",
  "relevance": 0,
  "type": "string"
}
```

Similar Location

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geoCode|object|false|none|Geographic coordinates describing the position of any location on the surface of Earth|
|iataCode|string|false|none|IATA location code|
|name|string|false|none|Label associated to the location (e.g. Eiffel Tower, Madison Square)|
|subtype|string|false|none|Location sub-type (e.g. airport, port, rail-station, restaurant, atm...)|
|relevance|number|false|none|percentage of similarity.<br><br>0 for not similar to 1 for exactly the same|
|type|string|false|none|Ressource type|

<h2 id="tocS_Warning">Warning</h2>
<!-- backwards compatibility -->
<a id="schemawarning"></a>
<a id="schema_Warning"></a>
<a id="tocSwarning"></a>
<a id="tocswarning"></a>

```json
{
  "code": 0,
  "detail": "string",
  "source": {
    "example": "string",
    "parameter": "string",
    "pointer": "string"
  },
  "title": "string"
}
```

The Warning Definition

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|A machine-readable error code from the Canned Messages table, that will enable the API Consumers code to handle this type of error|
|detail|string|false|none|An easy-to-read explanation specific to this occurrence of the problem. It should give the API consumer an idea of what went wrong and how to recover from it. Like the title, this field’s value can be localized.|
|source|object|false|none|The Warning Source Definition|
|title|string|true|none|An error title from the Canned Messages table with a 1:1 correspondence to the error code. This may be localized|
