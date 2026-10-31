<h1 id="reisezentren-api">Reisezentren-API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This REST-API enables you to query information about travel centers in Germany.

Base URLs:

* <a href="https://api.deutschebahn.com/reisezentren/v1">https://api.deutschebahn.com/reisezentren/v1</a>

* <a href="http://api.deutschebahn.com/reisezentren/v1">http://api.deutschebahn.com/reisezentren/v1</a>

<a href="https://developer.deutschebahn.com/store/">Terms of service</a>
Email: <a href="mailto:Joachim.Schirrmacher@deutschebahn.com">DB Systel GmbH</a> 

<h1 id="reisezentren-api-default">Default</h1>

## Get all station infos

> Code samples

```bash
curl https://apis.deutschebahn.com/reisezentren \
  -H 'Accept: application/json'
```

`GET /reisezentren`

Get all station infos

<h3 id="get-all-station-infos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|A station name or part of it|

> Example responses

> 200 Response

```json
[
  {
    "address": "string",
    "city": "string",
    "id": 0,
    "lat": 0,
    "lon": 0,
    "name": "string",
    "openingTimes": {
      "fri": [
        "string"
      ],
      "mon": [
        "string"
      ],
      "sat": [
        "string"
      ],
      "sun": [
        "string"
      ],
      "thu": [
        "string"
      ],
      "tue": [
        "string"
      ],
      "wed": [
        "string"
      ]
    },
    "postCode": "string",
    "type": "Reisezentrum"
  }
]
```

> 404 Response

```json
{
  "code": 0,
  "message": "string"
}
```

> 416 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-all-station-infos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List has been created|[TravelCenterList](#schematravelcenterlist)|
|404|Not Found|No travel centers could be found matching the given name|[Error](#schemaerror)|
|416|Range Not Satisfiable|Filtering required - specify a name fragment of at least 3 characters|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get information about a station near a location

> Code samples

```bash
curl https://apis.deutschebahn.com/reisezentren/loc/0/0 \
  -H 'Accept: application/json'
```

`GET /reisezentren/loc/{lat}/{lon}`

Get information about a station near a location

<h3 id="get-information-about-a-station-near-a-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|lat|path|number(float)|true|Latitude|
|lon|path|number(float)|true|Longitude|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "city": "string",
  "id": 0,
  "lat": 0,
  "lon": 0,
  "name": "string",
  "openingTimes": {
    "fri": [
      "string"
    ],
    "mon": [
      "string"
    ],
    "sat": [
      "string"
    ],
    "sun": [
      "string"
    ],
    "thu": [
      "string"
    ],
    "tue": [
      "string"
    ],
    "wed": [
      "string"
    ]
  },
  "postCode": "string",
  "type": "Reisezentrum"
}
```

<h3 id="get-information-about-a-station-near-a-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A station was found|[TravelCenter](#schematravelcenter)|

<aside class="success">
This operation does not require authentication
</aside>

## Get stations in a given radius

> Code samples

```bash
curl https://apis.deutschebahn.com/reisezentren/loc/0/0/0 \
  -H 'Accept: application/json'
```

`GET /reisezentren/loc/{lat}/{lon}/{dist}`

Get stations in a given radius

<h3 id="get-stations-in-a-given-radius-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|lat|path|number(float)|true|Latitude|
|lon|path|number(float)|true|Longitude|
|dist|path|number(float)|true|Radius|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "city": "string",
  "id": 0,
  "lat": 0,
  "lon": 0,
  "name": "string",
  "openingTimes": {
    "fri": [
      "string"
    ],
    "mon": [
      "string"
    ],
    "sat": [
      "string"
    ],
    "sun": [
      "string"
    ],
    "thu": [
      "string"
    ],
    "tue": [
      "string"
    ],
    "wed": [
      "string"
    ]
  },
  "postCode": "string",
  "type": "Reisezentrum"
}
```

<h3 id="get-stations-in-a-given-radius-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A station was found|[TravelCenter](#schematravelcenter)|

<aside class="success">
This operation does not require authentication
</aside>

## Get information about a specific station

> Code samples

```bash
curl https://apis.deutschebahn.com/reisezentren/string
```

`GET /reisezentren/{id}`

Get information about a specific station

<h3 id="get-information-about-a-specific-station-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Station id|

<h3 id="get-information-about-a-specific-station-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The travel center was found|[TravelCenter](#schematravelcenter)|
|404|Not Found|No travel center found|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_OpeningTime">OpeningTime</h2>
<!-- backwards compatibility -->
<a id="schemaopeningtime"></a>
<a id="schema_OpeningTime"></a>
<a id="tocSopeningtime"></a>
<a id="tocsopeningtime"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TravelCenter">TravelCenter</h2>
<!-- backwards compatibility -->
<a id="schematravelcenter"></a>
<a id="schema_TravelCenter"></a>
<a id="tocStravelcenter"></a>
<a id="tocstravelcenter"></a>

```json
{
  "address": "string",
  "city": "string",
  "id": 0,
  "lat": 0,
  "lon": 0,
  "name": "string",
  "openingTimes": {
    "fri": [
      "string"
    ],
    "mon": [
      "string"
    ],
    "sat": [
      "string"
    ],
    "sun": [
      "string"
    ],
    "thu": [
      "string"
    ],
    "tue": [
      "string"
    ],
    "wed": [
      "string"
    ]
  },
  "postCode": "string",
  "type": "Reisezentrum"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|Street address of travel center|
|city|string|false|none|City of travel center|
|id|integer|false|none|Identifying number|
|lat|number|false|none|Latitude of travel center location|
|lon|number|false|none|Longitude of travel center location|
|name|string|false|none|Name of travel center|
|openingTimes|object|false|none|Opening times of the travel center, ordered by week day|
|postCode|string|false|none|Post code of travel center|
|type|string|false|none|Type of travel center|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Reisezentrum|
|type|Mobility Center|

<h2 id="tocS_TravelCenterList">TravelCenterList</h2>
<!-- backwards compatibility -->
<a id="schematravelcenterlist"></a>
<a id="schema_TravelCenterList"></a>
<a id="tocStravelcenterlist"></a>
<a id="tocstravelcenterlist"></a>

```json
[
  {
    "address": "string",
    "city": "string",
    "id": 0,
    "lat": 0,
    "lon": 0,
    "name": "string",
    "openingTimes": {
      "fri": [
        "string"
      ],
      "mon": [
        "string"
      ],
      "sat": [
        "string"
      ],
      "sun": [
        "string"
      ],
      "thu": [
        "string"
      ],
      "tue": [
        "string"
      ],
      "wed": [
        "string"
      ]
    },
    "postCode": "string",
    "type": "Reisezentrum"
  }
]
```
