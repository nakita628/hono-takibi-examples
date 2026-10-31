<h1 id="groundhog-day-api">Groundhog Day API v1.2.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API returns all of North America’s prognosticating animals and their yearly weather predictions.

Base URLs:

* <a href="https://virtserver.swaggerhub.com/pcraig3/groundhog-day-api/1.2.1">https://virtserver.swaggerhub.com/pcraig3/groundhog-day-api/1.2.1</a> - SwaggerHub API Auto Mocking

* <a href="https://groundhog-day.com">https://groundhog-day.com</a>

Email: <a href="mailto:hello@groundhog-day.com">Paul Craig</a> 
Web: <a href="https://groundhog-day.com/api">Paul Craig</a> 
License: MIT

<h1 id="groundhog-day-api-info">info</h1>

## Root

<a id="opIdroot"></a>

> Code samples

```bash
curl https://example.com/api/v1 \
  -H 'Accept: application/json'
```

`GET /api/v1`

Returns a welcome message.

> Example responses

> 200 Response

```json
{
  "_links": {
    "groundhog": {
      "href": "https://groundhog-day.com/api/v1/groundhogs/wiarton-willie"
    },
    "groundhogs": {
      "href": "https://groundhog-day.com/api/v1/groundhogs"
    },
    "predictions": {
      "href": "https://groundhog-day.com/api/v1/predictions?year=2022"
    },
    "self": {
      "href": "https://groundhog-day.com/api/v1/"
    },
    "spec": {
      "href": "https://groundhog-day.com/api/v1/spec"
    }
  },
  "message": "Hello! Welcome to the Groundhog Day API: the leading Groundhog Day data source"
}
```

<h3 id="root-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="root-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|» groundhog|object|false|none|none|
|» » href|string|true|none|none|
|» groundhogs|object|false|none|none|
|» » href|string|true|none|none|
|» predictions|object|false|none|none|
|» » href|string|true|none|none|
|» self|object|false|none|none|
|» » href|string|true|none|none|
|» spec|object|false|none|none|
|» » href|string|true|none|none|
|message|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get JSON schema

<a id="opIdspec"></a>

> Code samples

```bash
curl https://example.com/api/v1/spec
```

`GET /api/v1/spec`

Gets the schema for the JSON API as a yaml file.

<h3 id="get-json-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|content-disposition|string||attachment; filename="Groundhog-Day-API.v1.yaml"|
|200|content-type|string||text/yaml; charset=UTF-8|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="groundhog-day-api-groundhogs">groundhogs</h1>

## Get all groundhogs

<a id="opIdgroundhogs"></a>

> Code samples

```bash
curl https://example.com/api/v1/groundhogs \
  -H 'Accept: application/json'
```

`GET /api/v1/groundhogs`

Returns all prognosticating animals with their known predictions.

<h3 id="get-all-groundhogs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|query|string|false|Filter groundhogs by country of origin (USA or Canada).|
|isGroundhog|query|string|false|Filter groundhogs by type (actual, alive groundhogs, or other prognosticators)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|isGroundhog|1|
|isGroundhog|0|
|isGroundhog|true|
|isGroundhog|false|

> Example responses

> 200 Response

```json
{
  "groundhogs": [
    {
      "active": 1,
      "city": "Punxsutawney",
      "contact": "",
      "coordinates": "40.9311988,-78.9622483",
      "country": "USA",
      "currentPrediction": "https://www.groundhog.org/prognostication",
      "description": "Punxsutawney Phil is a superstar prognosticating groundhog from Punxsutawney, Pennsylvania. He makes his predictions from his burrow on Gobler’s Knob. According to legend, Phil has made weather prognostications since 1886, owing his improbably long life to the miraculous “groundhog nog” administered at the annual Groundhog Picnic.",
      "id": 1,
      "image": "https://groundhog-day.com/images/ghogs/punxsutawney-phil.png",
      "isGroundhog": 1,
      "name": "Punxsutawney Phil",
      "predictions": [
        {
          "details": "At 7:25 a.m. with 18,000 Phil Phans present, Phil saw his shadow! Six More Weeks of Winter!",
          "shadow": 1,
          "year": 2018
        },
        {
          "details": "NO Shadow at 7:28 AM; 14º fog & mist with -1º Wind Chill.",
          "shadow": 0,
          "year": 2019
        },
        {
          "details": "NO Shadow at 7:26 AM; 30º with light snow falling.",
          "shadow": 0,
          "year": 2020
        },
        {
          "details": "Shadow at 7:25 AM; 19º with light snow. Coronavirus fear prohibits crowds on Gobbler’s Knob.",
          "shadow": 1,
          "year": 2021
        },
        {
          "details": "Shadow at 7:27 AM; 27º with clear skies. A loyal crowd of thousands returned to Gobbler’s Knob.",
          "shadow": 1,
          "year": 2022
        }
      ],
      "predictionsCount": 127,
      "region": "Pennsylvania",
      "shortname": "Phil",
      "slug": "punxsutawney-phil",
      "source": "https://www.groundhog.org/history-past-predictions",
      "type": "Groundhog"
    },
    {
      "active": 1,
      "city": "Barrington",
      "contact": "",
      "coordinates": "43.5623505,-65.5700017",
      "country": "Canada",
      "currentPrediction": "https://twitter.com/CailinONeil/status/1488894511107485702",
      "description": "Lucy the Lobster makes Groundhog Day predictions on February 2nd to kick off the Lobster Crawl festival in Barrington, Nova Scotia. The Municipality of Barrington says Lucy is the only prognosticating crustacean to make a prediction in Canada. Bill Murray was reported as being bemused by the idea of a lobster forecaster.",
      "id": 51,
      "image": "https://groundhog-day.com/images/ghogs/lucy-the-lobster.png",
      "isGroundhog": 0,
      "name": "Lucy the Lobster",
      "predictions": [
        {
          "details": "",
          "shadow": 0,
          "year": 2018
        },
        {
          "details": "",
          "shadow": 1,
          "year": 2019
        },
        {
          "details": "",
          "shadow": 1,
          "year": 2020
        },
        {
          "details": "",
          "shadow": null,
          "year": 2021
        },
        {
          "details": "",
          "shadow": 1,
          "year": 2022
        }
      ],
      "predictionsCount": 4,
      "region": "Nova Scotia",
      "shortname": "Lucy",
      "slug": "lucy-the-lobster",
      "source": "https://twitter.com/lucylobsterns",
      "type": "Atlantic lobster"
    }
  ]
}
```

<h3 id="get-all-groundhogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-all-groundhogs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groundhogs|[[Groundhog](#schemagroundhog)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a groundhog by slug

<a id="opIdgroundhog"></a>

> Code samples

```bash
curl https://example.com/api/v1/groundhogs/string \
  -H 'Accept: application/json'
```

`GET /api/v1/groundhogs/{slug}`

Returns a prognosticating animal and its known predictions.

<h3 id="get-a-groundhog-by-slug-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|Groundhog name in kebab-case: (eg, lucy-the-lobster)|

> Example responses

> 200 Response

```json
{
  "groundhog": {
    "active": 1,
    "city": "Barrington",
    "contact": "",
    "coordinates": "43.5623505,-65.5700017",
    "country": "Canada",
    "currentPrediction": "https://twitter.com/CailinONeil/status/1488894511107485702",
    "description": "Lucy the Lobster makes Groundhog Day predictions on February 2nd to kick off the Lobster Crawl festival in Barrington, Nova Scotia. The Municipality of Barrington says Lucy is the only prognosticating crustacean to make a prediction in Canada. Bill Murray was reported as being bemused by the idea of a lobster forecaster.",
    "id": 51,
    "image": "https://groundhog-day.com/images/ghogs/lucy-the-lobster.png",
    "isGroundhog": 0,
    "name": "Lucy the Lobster",
    "predictions": [
      {
        "details": "",
        "shadow": 0,
        "year": 2018
      },
      {
        "details": "",
        "shadow": 1,
        "year": 2019
      },
      {
        "details": "",
        "shadow": 1,
        "year": 2020
      },
      {
        "details": "",
        "shadow": null,
        "year": 2021
      },
      {
        "details": "",
        "shadow": 1,
        "year": 2022
      }
    ],
    "predictionsCount": 4,
    "region": "Nova Scotia",
    "shortname": "Lucy",
    "slug": "lucy-the-lobster",
    "source": "https://twitter.com/lucylobsterns",
    "type": "Atlantic lobster"
  }
}
```

> 400 Response

```json
{
  "error": {
    "message": "BadRequestError: Bad groundhog identifier ('punxsutawney-paul'), maybe you spelled it wrong?",
    "status": 400,
    "timestamp": "2022-10-03T03:37:51.567Z"
  }
}
```

<h3 id="get-a-groundhog-by-slug-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="get-a-groundhog-by-slug-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groundhog|[Groundhog](#schemagroundhog)|false|none|An animal that makes an annual prediction on Groundhog Day.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» message|string|true|none|none|
|» status|integer|true|none|none|
|» timestamp|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="groundhog-day-api-predictions">predictions</h1>

## Get predictions for a given year

<a id="opIdpredictions"></a>

> Code samples

```bash
curl https://example.com/api/v1/predictions \
  -H 'Accept: application/json'
```

`GET /api/v1/predictions`

Get all predictions for a given year.

<h3 id="get-predictions-for-a-given-year-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|A calendar year|

> Example responses

> 200 Response

```json
{
  "predictions": [
    {
      "details": "NO Shadow at 7:26 AM; 30º with light snow falling.",
      "groundhog": {
        "active": 1,
        "city": "Punxsutawney",
        "contact": "",
        "coordinates": "40.9311988,-78.9622483",
        "country": "USA",
        "currentPrediction": "https://www.groundhog.org/prognostication",
        "description": "Punxsutawney Phil is a superstar prognosticating groundhog from Punxsutawney, Pennsylvania. He makes his predictions from his burrow on Gobler’s Knob. According to legend, Phil has made weather prognostications since 1886, owing his improbably long life to the miraculous “groundhog nog” administered at the annual Groundhog Picnic.",
        "id": 1,
        "image": "https://groundhog-day.com/images/ghogs/punxsutawney-phil.png",
        "isGroundhog": 1,
        "name": "Punxsutawney Phil",
        "predictionsCount": 127,
        "region": "Pennsylvania",
        "shortname": "Phil",
        "slug": "punxsutawney-phil",
        "source": "https://www.groundhog.org/history-past-predictions",
        "type": "Groundhog"
      },
      "shadow": 0,
      "year": 2020
    },
    {
      "details": "",
      "groundhog": {
        "active": 1,
        "city": "Barrington",
        "contact": "",
        "coordinates": "43.5623505,-65.5700017",
        "country": "Canada",
        "currentPrediction": "https://twitter.com/CailinONeil/status/1488894511107485702",
        "description": "Lucy the Lobster makes Groundhog Day predictions on February 2nd to kick off the Lobster Crawl festival in Barrington, Nova Scotia. The Municipality of Barrington says Lucy is the only prognosticating crustacean to make a prediction in Canada. Bill Murray was reported as being bemused by the idea of a lobster forecaster.",
        "id": 51,
        "image": "https://groundhog-day.com/images/ghogs/lucy-the-lobster.png",
        "isGroundhog": 0,
        "name": "Lucy the Lobster",
        "predictionsCount": 127,
        "region": "Nova Scotia",
        "shortname": "Lucy",
        "slug": "lucy-the-lobster",
        "source": "https://twitter.com/lucylobsterns",
        "type": "Atlantic lobster"
      },
      "shadow": 1,
      "year": 2020
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "message": "BadRequestError: The 'year' must be between 1886 and 2022 (inclusive).",
    "status": 400,
    "timestamp": "2022-10-03T03:38:55.169Z"
  }
}
```

<h3 id="get-predictions-for-a-given-year-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|302|Found|Found|None|
|400|Bad Request|Bad Request|Inline|

<h3 id="get-predictions-for-a-given-year-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|predictions|[[Prediction](#schemaprediction)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» message|string|true|none|none|
|» status|integer|true|none|none|
|» timestamp|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|location|string||/api/v1/predictions?year=2022|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Groundhog">Groundhog</h2>
<!-- backwards compatibility -->
<a id="schemagroundhog"></a>
<a id="schema_Groundhog"></a>
<a id="tocSgroundhog"></a>
<a id="tocsgroundhog"></a>

```json
{
  "active": 0,
  "city": "string",
  "contact": "string",
  "coordinates": "string",
  "country": "string",
  "currentPrediction": "string",
  "description": "string",
  "id": 1,
  "image": "string",
  "isGroundhog": 0,
  "name": "string",
  "predictions": [
    {
      "details": "string",
      "groundhog": {},
      "shadow": 0,
      "year": 1886
    }
  ],
  "predictionsCount": 1,
  "region": "string",
  "shortname": "string",
  "slug": "string",
  "source": "string",
  "type": "string"
}
```

An animal that makes an annual prediction on Groundhog Day.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|integer|true|none|none|
|city|string|true|none|none|
|contact|string|true|none|none|
|coordinates|string|true|none|none|
|country|string|true|none|none|
|currentPrediction|string|true|none|none|
|description|string|true|none|none|
|id|integer|true|none|none|
|image|string|true|none|none|
|isGroundhog|integer|true|none|none|
|name|string|true|none|none|
|predictions|[[Prediction](#schemaprediction)]|false|none|none|
|predictionsCount|integer|false|none|All predictions, excluding nulls.|
|region|string|true|none|none|
|shortname|string|true|none|none|
|slug|string|true|none|none|
|source|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|active|0|
|active|1|

<h2 id="tocS_Prediction">Prediction</h2>
<!-- backwards compatibility -->
<a id="schemaprediction"></a>
<a id="schema_Prediction"></a>
<a id="tocSprediction"></a>
<a id="tocsprediction"></a>

```json
{
  "details": "string",
  "groundhog": {
    "active": 0,
    "city": "string",
    "contact": "string",
    "coordinates": "string",
    "country": "string",
    "currentPrediction": "string",
    "description": "string",
    "id": 1,
    "image": "string",
    "isGroundhog": 0,
    "name": "string",
    "predictions": [
      {}
    ],
    "predictionsCount": 1,
    "region": "string",
    "shortname": "string",
    "slug": "string",
    "source": "string",
    "type": "string"
  },
  "shadow": 0,
  "year": 1886
}
```

An annual prediction of an early spring or a longer winter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|true|none|none|
|groundhog|[Groundhog](#schemagroundhog)|false|none|An animal that makes an annual prediction on Groundhog Day.|
|shadow|integer \| null|true|none|none|
|year|integer|true|none|none|
