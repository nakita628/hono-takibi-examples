<h1 id="location-score">Location Score v1.0.2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Before using this API, we recommend you read our **[Authorization Guide](https://developers.amadeus.com/self-service/apis-docs/guides/authorization-262)** for more information on how to generate an access token. 
  
Please also be aware that our test environment is based on a subset of the production, this API in test only returns a few selected cities. You can find the list in our **[data collection](https://github.com/amadeus4dev/data-collection)**.

Base URLs:

* <a href="https://test.api.amadeus.com/v1">https://test.api.amadeus.com/v1</a>

<h1 id="location-score-category-rated-areas">category-rated-areas</h1>

## GET category rated areas

<a id="opIdget-category-rated-areas"></a>

> Code samples

```bash
curl 'https://test.api.amadeus.com/location/analytics/category-rated-areas?latitude=41.397158&longitude=2.160873' \
  -H 'Accept: application/vnd.amadeus+json'
```

`GET /location/analytics/category-rated-areas`

<h3 id="get-category-rated-areas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|latitude|query|number|true|Latitude in decimal coordinates|
|longitude|query|number|true|Longitude in decimal coordinates|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "categoryScores": {
        "nightLife": {
          "overall": 93
        },
        "restaurant": {
          "overall": 99,
          "vegetarian": 82
        },
        "shopping": {
          "luxury": 97,
          "overall": 99
        },
        "sight": {
          "beachAndPark": 0,
          "historical": 86,
          "overall": 90
        }
      },
      "geoCode": {
        "latitude": 2.160873,
        "longitude": 41.397158
      },
      "radius": 200,
      "type": "category-rated-area"
    },
    {
      "categoryScores": {
        "nightLife": {
          "overall": 96
        },
        "restaurant": {
          "overall": 99,
          "vegetarian": 92
        },
        "shopping": {
          "luxury": 99,
          "overall": 99
        },
        "sight": {
          "beachAndPark": 0,
          "historical": 89,
          "overall": 99
        }
      },
      "geoCode": {
        "latitude": 2.160873,
        "longitude": 41.397158
      },
      "radius": 500,
      "type": "category-rated-area"
    },
    {
      "categoryScores": {
        "nightLife": {
          "overall": 99
        },
        "restaurant": {
          "overall": 99,
          "vegetarian": 99
        },
        "shopping": {
          "luxury": 99,
          "overall": 99
        },
        "sight": {
          "beachAndPark": 58,
          "historical": 99,
          "overall": 99
        }
      },
      "geoCode": {
        "latitude": 2.160873,
        "longitude": 41.397158
      },
      "radius": 1500,
      "type": "category-rated-area"
    }
  ],
  "meta": {
    "count": 3,
    "links": {
      "self": "https://test.api.amadeus.com/v1/location/analytics/category-rated-areas?latitude=41.397158&longitude=2.160873"
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
        "example": "41.397158",
        "parameter": "latitude"
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

<h3 id="get-category-rated-areas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Reply|Inline|
|400|Bad Request|code    \| title                                 <br>------- \| ------------------------------------- <br>477     \| INVALID FORMAT<br>572     \| INVALID OPTION                            <br>32171   \| MANDATORY DATA MISSING |[Error_400](#schemaerror_400)|
|500|Internal Server Error|Internal Server Error|[Error_500](#schemaerror_500)|

<h3 id="get-category-rated-areas-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[category-rated-areas](#schemacategory-rated-areas)]|false|none|none|
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

<h2 id="tocS_category-rated-areas">category-rated-areas</h2>
<!-- backwards compatibility -->
<a id="schemacategory-rated-areas"></a>
<a id="schema_category-rated-areas"></a>
<a id="tocScategory-rated-areas"></a>
<a id="tocscategory-rated-areas"></a>

```json
{
  "categoryScores": {
    "nightLife": {
      "overall": 0
    },
    "restaurant": {
      "overall": 0,
      "vegetarian": 0
    },
    "shopping": {
      "luxury": 0,
      "overall": 0
    },
    "sight": {
      "beachAndPark": 0,
      "historical": 0,
      "overall": 0
    }
  },
  "geoCode": {
    "latitude": 48.85837,
    "longitude": 2.294481
  },
  "radius": 0,
  "type": "PNR"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryScores|object|false|none|category scoring of the location|
|geoCode|object|false|none|Geographic coordinates describing the position of any location on the surface of Earth|
|radius|integer|false|none|Radius of the area in meters|
|type|string|false|none|Type of the manipulatd resource|
