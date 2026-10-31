<h1 id="interzoid-get-weather-city-api">Interzoid Get Weather City API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API provides current weather information for US Cities, including temperatures, wind speeds, wind direction, relative humidity, and visibility.

Base URLs:

* <a href="https://api.interzoid.com">https://api.interzoid.com</a>

<a href="https://www.interzoid.com/terms">Terms of service</a>
Email: <a href="mailto:support@interzoid.com">API Support</a> 
Web: <a href="https://www.interzoid.com">API Support</a> 
License: <a href="https://www.interzoid.com/license">Interzoid license</a>

<a href="https://www.interzoid.com/services/getweathercity">API home page and documentation</a>

<h1 id="interzoid-get-weather-city-api-weather-by-city-and-state">Weather by City and State</h1>

## Gets current weather information for a US city and state

<a id="opIdgetweather"></a>

> Code samples

```bash
curl 'https://example.com/getweather?license=string&city=string&state=string' \
  -H 'Accept: application/json'
```

`GET /getweather`

Use city and state to retrieve current US weather information.

<h3 id="gets-current-weather-information-for-a-us-city-and-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|license|query|string|true|Your Interzoid license API key. Register at www.interzoid.com/register|
|city|query|string|true|City for weather information|
|state|query|string|true|State for weather information|

> Example responses

> 200 Response

```json
{
  "City": "string",
  "Code": "string",
  "Credits": "string",
  "RelativeHumidity": "string",
  "State": "string",
  "TempC": "string",
  "TempF": "string",
  "VisibilityMiles": "string",
  "Weather": "string",
  "WindDir": "string",
  "WindMPH": "string"
}
```

<h3 id="gets-current-weather-information-for-a-us-city-and-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current weather information for a US city|Inline|
|400|Bad Request|bad request - insufficient parameters|None|
|402|Payment Required|credits exhausted|None|
|403|Forbidden|invalid license API key|None|
|404|Not Found|city/state not found|None|
|405|Method Not Allowed|method not allowed|None|
|500|Internal Server Error|internal server error|None|

<h3 id="gets-current-weather-information-for-a-us-city-and-state-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|City|string|false|none|none|
|Code|string|false|none|none|
|Credits|string|false|none|none|
|RelativeHumidity|string|false|none|none|
|State|string|false|none|none|
|TempC|string|false|none|none|
|TempF|string|false|none|none|
|VisibilityMiles|string|false|none|none|
|Weather|string|false|none|none|
|WindDir|string|false|none|none|
|WindMPH|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
