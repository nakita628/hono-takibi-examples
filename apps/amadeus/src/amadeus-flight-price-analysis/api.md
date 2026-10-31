<h1 id="flight-price-analysis-api">Flight Price Analysis API v1.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Before using this API, we recommend you read our **[Authorization Guide](https://developers.amadeus.com/self-service/apis-docs/guides/authorization-262)** for more information on how to generate an access token.

Base URLs:

* <a href="https://test.api.amadeus.com/v1">https://test.api.amadeus.com/v1</a>

<h1 id="flight-price-analysis-api-price-metrics">price-metrics</h1>

## GET itinerary price metric

<a id="opIdget-itinerary-price-metrics"></a>

> Code samples

```bash
curl 'https://test.api.amadeus.com/analytics/itinerary-price-metrics?originIataCode=MAD&destinationIataCode=CDG&departureDate=2021-03-21' \
  -H 'Accept: application/vnd.amadeus+json'
```

`GET /analytics/itinerary-price-metrics`

<h3 id="get-itinerary-price-metric-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|originIataCode|query|string|true|airport code, following [IATA standard](http://www.iata.org/publications/Pages/code-search.aspx), from which the traveler will depart<br>|
|destinationIataCode|query|string|true|airport code, following [IATA standard](http://www.iata.org/publications/Pages/code-search.aspx), to which the traveler is going.|
|departureDate|query|string|true|The date on which the traveler will depart from the origin to go to the destination. <br><br>Dates are specified in the[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format.|
|currencyCode|query|string|false|the preferred currency for display. Currency is specified in the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format, e.g. EUR for Euro|
|oneWay|query|boolean|false|true to get price metrics for a one way trip,<br>false to get price metrics for a round trip|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "currencyCode": "EUR",
      "departureDate": "2021-03-21",
      "destination": {
        "iataCode": "CDG"
      },
      "oneWay": false,
      "origin": {
        "iataCode": "MAD"
      },
      "priceMetrics": [
        {
          "amount": "43.27",
          "quartileRanking": "MINIMUM"
        },
        {
          "amount": "228.65",
          "quartileRanking": "FIRST"
        },
        {
          "amount": "231.03",
          "quartileRanking": "MEDIUM"
        },
        {
          "amount": "234.48",
          "quartileRanking": "THIRD"
        },
        {
          "amount": "442.62",
          "quartileRanking": "MAXIMUM"
        }
      ],
      "transportType": "FLIGHT",
      "type": "itinerary-price-metric"
    }
  ],
  "meta": {
    "count": 1,
    "links": {
      "self": "https://test.api.amadeus.com/v1/analytics/itinerary-price-metrics?originIataCode=MAD&destinationIataCode=CDG&departureDate=2021-03-21&currencyCode=EUR&oneWay=false"
    }
  }
}
```

> 400 Response

```json
{
  "errors": [
    {
      "code": 32171,
      "detail": "Missing mandatory query parameter",
      "status": 400,
      "title": "MANDATORY DATA MISSING"
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

<h3 id="get-itinerary-price-metric-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful reply|Inline|
|400|Bad Request|code    \| title                                 <br>------- \| ------------------------------------- <br>477     \| INVALID FORMAT<br>572     \| INVALID OPTION                            <br>32171   \| MANDATORY DATA MISSING |[Error_400](#schemaerror_400)|
|500|Internal Server Error|Internal Server Error|[Error_500](#schemaerror_500)|

<h3 id="get-itinerary-price-metric-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[itinerary-price-metric](#schemaitinerary-price-metric)]|false|none|none|
|meta|object|false|none|Links related to the returned objects(s)|
|» href|string(url)|false|none|URL value|
|» methods|[string]|false|none|HTTP methods supported by the sibling URI|
|warnings|[[Warning](#schemawarning)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» methods|GET|
|» methods|POST|
|» methods|PUT|
|» methods|PATCH|
|» methods|DELETE|
|» methods|OPTIONS|

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

<h2 id="tocS_itinerary-price-metric">itinerary-price-metric</h2>
<!-- backwards compatibility -->
<a id="schemaitinerary-price-metric"></a>
<a id="schema_itinerary-price-metric"></a>
<a id="tocSitinerary-price-metric"></a>
<a id="tocsitinerary-price-metric"></a>

```json
{
  "currencyCode": "string",
  "departureDate": "string",
  "destination": {
    "iataCode": "PAR"
  },
  "oneWay": true,
  "origin": {
    "iataCode": "PAR"
  },
  "priceMetrics": [
    {
      "amount": "string",
      "quartileRanking": "MINIMUM"
    }
  ],
  "transportType": "FLIGHT",
  "type": "string"
}
```

price metric

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|false|none|currency of the prices.<br><br>Currency is specified in the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format, e.g. EUR for Euro|
|departureDate|string|false|none|The date on which the traveler will depart from the origin to go to the destination. <br><br>Dates are specified in the[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format.|
|destination|object|false|none|Description of a particular point or place in physical space|
|oneWay|boolean|false|none|true for a one way trip,<br>false for a round trip|
|origin|object|false|none|Description of a particular point or place in physical space|
|priceMetrics|[object]|false|none|none|
|transportType|string|false|none|transportation type|
|type|string|false|none|ressource type - always price-metrics|

#### Enumerated Values

|Property|Value|
|---|---|
|transportType|FLIGHT|
