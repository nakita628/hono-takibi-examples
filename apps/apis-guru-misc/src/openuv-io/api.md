<h1 id="openuv---global-real-time-uv-index-forecast-api">OpenUV - Global Real-Time UV Index Forecast API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The missing minimalistic JSON real-time UV Index API for awesome Developers, Innovators and Smart Home Enthusiasts

Base URLs:

* <a href="https://api.openuv.io/api/v1">https://api.openuv.io/api/v1</a>

<h1 id="openuv---global-real-time-uv-index-forecast-api-default">Default</h1>

## get/forecast

> Code samples

```bash
curl 'https://example.com/forecast?lat=78.67&lng=115.67' \
  -H 'Accept: application/json' \
  -H 'x-access-token: string'
```

`GET /forecast`

Get hourly UV Index Forecast by location and date. Optional altitude, ozone level and datetime could be provided.

<h3 id="getforecast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|lat|query|number|true|latitude, from -90.00 to 90.00|
|lng|query|number|true|longitude, from -180.00 to 180.00|
|alt|query|number|false|Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value.|
|ozone|query|number|false|Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default.|
|dt|query|string(date-time)|false|UTC datetime in ISO-8601 format, now by default. Use that parameter to get UV Index Forecast for any point in time.|
|x-access-token|header|string|true|This header is used to send data that contains your OpenUV API key|

> Example responses

> 200 Response

```json
[
  [
    {
      "uv": 0,
      "uv_time": "string"
    }
  ]
]
```

<h3 id="getforecast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="getforecast-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[forecastResult](#schemaforecastresult)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/protection

> Code samples

```bash
curl 'https://example.com/protection?lat=78.67&lng=115.67&from=2.5&to=3.6' \
  -H 'Accept: application/json' \
  -H 'x-access-token: string'
```

`GET /protection`

Get daily protection time by location, UV Index from and UV Index to with 10 minutes accuracy. Optional altitide and ozone level could be provided.

<h3 id="getprotection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|lat|query|number|true|latitude, from -90.00 to 90.00|
|lng|query|number|true|longitude, from -180.00 to 180.00|
|from|query|number|true|UV Index from value for protection datetime lookup. From 0 to 40.|
|to|query|number|true|UV Index to value for protection datetime lookup. From 0 to 40.|
|alt|query|number|false|Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value.|
|ozone|query|number|false|Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default.|
|x-access-token|header|string|true|This header is used to send data that contains your OpenUV API key|

> Example responses

> 200 Response

```json
{
  "ozone": 0,
  "ozone_time": "string",
  "uv": 0,
  "uv_max": 0,
  "uv_max_time": "string",
  "uv_time": "string"
}
```

<h3 id="getprotection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[protectionResult](#schemaprotectionresult)|

<aside class="success">
This operation does not require authentication
</aside>

## get/uv

> Code samples

```bash
curl 'https://example.com/uv?lat=78.67&lng=115.67' \
  -H 'Accept: application/json' \
  -H 'x-access-token: string'
```

`GET /uv`

Get real-time UV Index by location. Optional altitude, ozone level and datetime could be provided.

<h3 id="getuv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|lat|query|number|true|latitude, from -90.00 to 90.00|
|lng|query|number|true|longitude, from -180.00 to 180.00|
|alt|query|number|false|Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value.|
|ozone|query|number|false|Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default.|
|dt|query|string(date-time)|false|UTC datetime in ISO-8601 format, now by default. Use that parameter to get UV Index Forecast for any point in time.|
|x-access-token|header|string|true|This header is used to send data that contains your OpenUV API key|

> Example responses

> 200 Response

```json
{
  "from_time": "string",
  "from_uv": 0,
  "to_time": "string",
  "to_uv": 0
}
```

<h3 id="getuv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[uvIndexResult](#schemauvindexresult)|

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
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

<h2 id="tocS_forecast">forecast</h2>
<!-- backwards compatibility -->
<a id="schemaforecast"></a>
<a id="schema_forecast"></a>
<a id="tocSforecast"></a>
<a id="tocsforecast"></a>

```json
{
  "uv": 0,
  "uv_time": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uv|number|true|none|none|
|uv_time|string(date-time-only)|true|none|none|

<h2 id="tocS_forecastResult">forecastResult</h2>
<!-- backwards compatibility -->
<a id="schemaforecastresult"></a>
<a id="schema_forecastResult"></a>
<a id="tocSforecastresult"></a>
<a id="tocsforecastresult"></a>

```json
[
  {
    "uv": 0,
    "uv_time": "string"
  }
]
```

<h2 id="tocS_protectionResult">protectionResult</h2>
<!-- backwards compatibility -->
<a id="schemaprotectionresult"></a>
<a id="schema_protectionResult"></a>
<a id="tocSprotectionresult"></a>
<a id="tocsprotectionresult"></a>

```json
{
  "ozone": 0,
  "ozone_time": "string",
  "uv": 0,
  "uv_max": 0,
  "uv_max_time": "string",
  "uv_time": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ozone|number|true|none|none|
|ozone_time|string(date-time-only)|true|none|none|
|uv|number|true|none|none|
|uv_max|number|true|none|none|
|uv_max_time|string(date-time-only)|true|none|none|
|uv_time|string(date-time-only)|true|none|none|

<h2 id="tocS_uvIndexResult">uvIndexResult</h2>
<!-- backwards compatibility -->
<a id="schemauvindexresult"></a>
<a id="schema_uvIndexResult"></a>
<a id="tocSuvindexresult"></a>
<a id="tocsuvindexresult"></a>

```json
{
  "from_time": "string",
  "from_uv": 0,
  "to_time": "string",
  "to_uv": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from_time|string(date-time-only)|true|none|none|
|from_uv|number|true|none|none|
|to_time|string(date-time-only)|true|none|none|
|to_uv|number|true|none|none|
