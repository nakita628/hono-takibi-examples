<h1 id="football-prediction-api">Football Prediction API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Football Prediction API allows developers to get predictions for upcoming football (soccer) matches, results for past matches, and performance monitoring for statistical models.

Base URLs:

* <a href="https://football-prediction-api.p.rapidapi.com">https://football-prediction-api.p.rapidapi.com</a>

<h1 id="football-prediction-api-default">Default</h1>

## get/api/v2/list-federations

> Code samples

```bash
curl https://example.com/api/v2/list-federations \
  -H 'Accept: application/json'
```

`GET /api/v2/list-federations`

Returns an array of all the available federations.

<h3 id="getapiv2list-federations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-RapidApi-Key|header|string(uuid)|false|Your key obtained from https://boggio-analytics.com/fp-api/|

> Example responses

> 200 Response

```json
"{\"data\": [\"UEFA\", \"OFC\", \"CAF\", \"CONCACAF\", \"CONMEBOL\", \"AFC\"]}"
```

> 404 Response

```json
{
  "errors": {}
}
```

<h3 id="getapiv2list-federations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Static response, shows available federations.|Inline|
|404|Not Found|Bad request, check response for detailed errors.|Inline|

<h3 id="getapiv2list-federations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[string]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/v2/list-markets

> Code samples

```bash
curl https://example.com/api/v2/list-markets \
  -H 'Accept: application/json'
```

`GET /api/v2/list-markets`

Returns an array of all the supported prediction markets

<h3 id="getapiv2list-markets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-RapidApi-Key|header|string(uuid)|false|Your key obtained from https://boggio-analytics.com/fp-api/|

> Example responses

> 200 Response

```json
"{\"data\": {\"all\": [\"over_25\", \"away_over_15\", \"away_over_05\", \"classic\", \"home_over_05\", \"home_over_15\", \"btts\", \"over_35\"], \"allowed_for_your_subscription\": [\"over_25\", \"away_over_15\", \"away_over_05\", \"classic\", \"home_over_05\", \"home_over_15\", \"btts\", \"over_35\"]}}"
```

> 404 Response

```json
{
  "errors": {}
}
```

<h3 id="getapiv2list-markets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Static response, shows available markets for the current subscription and all available markets in general.|Inline|
|404|Not Found|Bad request, check response for detailed errors.|Inline|

<h3 id="getapiv2list-markets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» all|[string]|false|none|none|
|» allowed_for_your_subscription|[string]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/v2/performance-stats

> Code samples

```bash
curl https://example.com/api/v2/performance-stats \
  -H 'Accept: application/json'
```

`GET /api/v2/performance-stats`

Returns predictions accuracy in the last 1, 7, 14, 30 days.

<h3 id="getapiv2performance-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-RapidApi-Key|header|string(uuid)|false|Your key obtained from https://boggio-analytics.com/fp-api/|

> Example responses

> 200 Response

```json
{
  "data": {
    "accuracy": {
      "last_14_days": 0,
      "last_30_days": 0,
      "last_7_days": 0,
      "yesterday": 0
    },
    "details": {
      "last_14_days": {
        "lost": 0,
        "pending": 0,
        "postponed": 0,
        "total": 0,
        "won": 0
      },
      "last_30_days": {
        "lost": 0,
        "pending": 0,
        "postponed": 0,
        "total": 0,
        "won": 0
      },
      "last_7_days": {
        "lost": 0,
        "pending": 0,
        "postponed": 0,
        "total": 0,
        "won": 0
      },
      "yesterday": {
        "lost": 0,
        "pending": 0,
        "postponed": 0,
        "total": 0,
        "won": 0
      }
    },
    "market": "string"
  }
}
```

> 404 Response

```json
{
  "errors": {}
}
```

<h3 id="getapiv2performance-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Good request, returns object that contains accuracy and other datails about predictions.|Inline|
|404|Not Found|Bad request, check response for detailed errors.|Inline|

<h3 id="getapiv2performance-stats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» accuracy|object|false|none|none|
|» » last_14_days|number|false|none|none|
|» » last_30_days|number|false|none|none|
|» » last_7_days|number|false|none|none|
|» » yesterday|number|false|none|none|
|» details|object|false|none|none|
|» » last_14_days|object|false|none|none|
|» » » lost|integer|false|none|none|
|» » » pending|integer|false|none|none|
|» » » postponed|integer|false|none|none|
|» » » total|integer|false|none|none|
|» » » won|integer|false|none|none|
|» » last_30_days|object|false|none|none|
|» » » lost|integer|false|none|none|
|» » » pending|integer|false|none|none|
|» » » postponed|integer|false|none|none|
|» » » total|integer|false|none|none|
|» » » won|integer|false|none|none|
|» » last_7_days|object|false|none|none|
|» » » lost|integer|false|none|none|
|» » » pending|integer|false|none|none|
|» » » postponed|integer|false|none|none|
|» » » total|integer|false|none|none|
|» » » won|integer|false|none|none|
|» » yesterday|object|false|none|none|
|» » » lost|integer|false|none|none|
|» » » pending|integer|false|none|none|
|» » » postponed|integer|false|none|none|
|» » » total|integer|false|none|none|
|» » » won|integer|false|none|none|
|» market|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/v2/predictions

> Code samples

```bash
curl https://example.com/api/v2/predictions \
  -H 'Accept: application/json'
```

`GET /api/v2/predictions`

This endpoint returns by default the next non-expired football predictions. URL parameters can be specified to show specific date in the past or future or to filter by federation and prediction market name.

<h3 id="getapiv2predictions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-RapidApi-Key|header|string(uuid)|false|Your key obtained from https://boggio-analytics.com/fp-api/|

> Example responses

> 404 Response

```json
{
  "errors": {}
}
```

<h3 id="getapiv2predictions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Good request, returns object that contains data array with all predictions.|None|
|404|Not Found|Bad request, check response for detailed errors.|Inline|

<h3 id="getapiv2predictions-responseschema">Response Schema</h3>

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/v2/predictions/{id}

> Code samples

```bash
curl https://example.com/api/v2/predictions/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/predictions/{id}`

Returns all predictions available for a match id.

<h3 id="getapiv2predictionsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of match|

> Example responses

> 200 Response

```json
{
  "data": [
    {}
  ]
}
```

> 404 Response

```json
{
  "errors": {}
}
```

<h3 id="getapiv2predictionsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Good request, returns object that contains all the predictions for a certain event.|Inline|
|404|Not Found|Bad request, check response for detailed errors.|Inline|

<h3 id="getapiv2predictionsid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
