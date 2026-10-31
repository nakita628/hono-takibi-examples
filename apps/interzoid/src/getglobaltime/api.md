<h1 id="interzoid-get-global-time-api">Interzoid Get Global Time API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API retrieves the current time for a city or geographic location around the globe.

Base URLs:

* <a href="https://api.interzoid.com">https://api.interzoid.com</a>

<a href="https://www.interzoid.com/terms">Terms of service</a>
Email: <a href="mailto:support@interzoid.com">API Support</a> 
Web: <a href="https://www.interzoid.com">API Support</a> 
License: <a href="https://www.interzoid.com/license">Interzoid license</a>

<a href="https://www.interzoid.com/services/getglobaltime">API home page and documentation</a>

<h1 id="interzoid-get-global-time-api-current-global-time">Current Global Time</h1>

## Gets the current time for a global locale

<a id="opIdgetglobaltime"></a>

> Code samples

```bash
curl 'https://example.com/getglobaltime?license=string&locale=string' \
  -H 'Accept: application/json'
```

`GET /getglobaltime`

Gets the current time for a global locale (city, state, region, or country such as Chicago, London, Paris, Seoul, Spain, Buenos Aires, Hawaii, Moscow, Tokyo, Hanoi, etc.)

<h3 id="gets-the-current-time-for-a-global-locale-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|license|query|string|true|Your Interzoid license API key. Register at www.interzoid.com/register|
|locale|query|string|true|Geographic locale to get the current time for|

> Example responses

> 200 Response

```json
{
  "ClockTime": "string",
  "Code": "string",
  "Credits": "string",
  "CurrentDate": "string",
  "CurrentTime": "string",
  "Day": "string",
  "Hour": "string",
  "Locale": "string",
  "Minute": "string",
  "Month": "string",
  "MonthNumber": "string",
  "Second": "string",
  "TimeStamp": "string",
  "Weekday": "string",
  "Year": "string",
  "Zone": "string"
}
```

<h3 id="gets-the-current-time-for-a-global-locale-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current global time in many forms and related information|Inline|
|400|Bad Request|bad request - insufficient parameters|None|
|402|Payment Required|credits exhausted|None|
|403|Forbidden|invalid license API key|None|
|404|Not Found|locale not found|None|
|405|Method Not Allowed|method not allowed|None|
|500|Internal Server Error|internal server error|None|

<h3 id="gets-the-current-time-for-a-global-locale-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClockTime|string|false|none|none|
|Code|string|false|none|none|
|Credits|string|false|none|none|
|CurrentDate|string|false|none|none|
|CurrentTime|string|false|none|none|
|Day|string|false|none|none|
|Hour|string|false|none|none|
|Locale|string|false|none|none|
|Minute|string|false|none|none|
|Month|string|false|none|none|
|MonthNumber|string|false|none|none|
|Second|string|false|none|none|
|TimeStamp|string|false|none|none|
|Weekday|string|false|none|none|
|Year|string|false|none|none|
|Zone|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
