<h1 id="world-time-api">World Time API v20210108</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A simple API to get the current time based on a request with a timezone.

Base URLs:

* <a href="http://worldtimeapi.org/api/">http://worldtimeapi.org/api/</a>

<h1 id="world-time-api-default">Default</h1>

## request the current time based on the ip of the request. note: this is a &quot;best guess&quot; obtained from open-source data.

> Code samples

```bash
curl https://example.com/ip \
  -H 'Accept: application/json'
```

`GET /ip`

> Example responses

> 200 Response

```json
{
  "abbreviation": "string",
  "client_ip": "string",
  "datetime": "string",
  "day_of_week": 0,
  "day_of_year": 0,
  "dst": true,
  "dst_from": "string",
  "dst_offset": 0,
  "dst_until": "string",
  "raw_offset": 0,
  "timezone": "string",
  "unixtime": 0,
  "utc_datetime": "string",
  "utc_offset": "string",
  "week_number": 0
}
```

> default Response

```json
{
  "error": "string"
}
```

<h3 id="request-the-current-time-based-on-the-ip-of-the-request-note-this-is-a-best-guess-obtained-from-open-source-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the current time for the timezone requested in JSON format|[DateTimeJsonResponse](#schemadatetimejsonresponse)|
|default|Default|an error response in JSON format|[ErrorJsonResponse](#schemaerrorjsonresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## request the current time based on the ip of the request. note: this is a &quot;best guess&quot; obtained from open-source data.

> Code samples

```bash
curl https://example.com/ip.txt
```

`GET /ip.txt`

<h3 id="request-the-current-time-based-on-the-ip-of-the-request-note-this-is-a-best-guess-obtained-from-open-source-data-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the current time for the timezone requested in plain text|[DateTimeTextResponse](#schemadatetimetextresponse)|
|default|Default|an error response in plain text|[ErrorTextResponse](#schemaerrortextresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## request the current time based on the ip of the request. note: this is a &quot;best guess&quot; obtained from open-source data.

> Code samples

```bash
curl https://example.com/ip/string \
  -H 'Accept: application/json'
```

`GET /ip/{ipv4}`

<h3 id="request-the-current-time-based-on-the-ip-of-the-request-note-this-is-a-best-guess-obtained-from-open-source-data-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ipv4|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "abbreviation": "string",
  "client_ip": "string",
  "datetime": "string",
  "day_of_week": 0,
  "day_of_year": 0,
  "dst": true,
  "dst_from": "string",
  "dst_offset": 0,
  "dst_until": "string",
  "raw_offset": 0,
  "timezone": "string",
  "unixtime": 0,
  "utc_datetime": "string",
  "utc_offset": "string",
  "week_number": 0
}
```

> default Response

```json
{
  "error": "string"
}
```

<h3 id="request-the-current-time-based-on-the-ip-of-the-request-note-this-is-a-best-guess-obtained-from-open-source-data-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the current time for the timezone requested in JSON format|[DateTimeJsonResponse](#schemadatetimejsonresponse)|
|default|Default|an error response in JSON format|[ErrorJsonResponse](#schemaerrorjsonresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## request the current time based on the ip of the request. note: this is a &quot;best guess&quot; obtained from open-source data.

> Code samples

```bash
curl https://example.com/ip/string.txt
```

`GET /ip/{ipv4}.txt`

<h3 id="request-the-current-time-based-on-the-ip-of-the-request-note-this-is-a-best-guess-obtained-from-open-source-data-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ipv4|path|string|true|none|

<h3 id="request-the-current-time-based-on-the-ip-of-the-request-note-this-is-a-best-guess-obtained-from-open-source-data-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the current time for the timezone requested in plain text|[DateTimeTextResponse](#schemadatetimetextresponse)|
|default|Default|an error response in plain text|[ErrorTextResponse](#schemaerrortextresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## a listing of all timezones.

> Code samples

```bash
curl https://example.com/timezone \
  -H 'Accept: application/json'
```

`GET /timezone`

> Example responses

> default Response

```json
[
  "string"
]
```

<h3 id="a-listing-of-all-timezones-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|the list of available timezones in JSON format|[ListJsonResponse](#schemalistjsonresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## a listing of all timezones.

> Code samples

```bash
curl https://example.com/timezone.txt
```

`GET /timezone.txt`

<h3 id="a-listing-of-all-timezones-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|the list of available timezones in plain text|[ListTextResponse](#schemalisttextresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## a listing of all timezones available for that area.

> Code samples

```bash
curl https://example.com/timezone/string \
  -H 'Accept: application/json'
```

`GET /timezone/{area}`

<h3 id="a-listing-of-all-timezones-available-for-that-area-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|area|path|string|true|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

> default Response

```json
{
  "error": "string"
}
```

<h3 id="a-listing-of-all-timezones-available-for-that-area-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the list of available timezones in JSON format|[ListJsonResponse](#schemalistjsonresponse)|
|default|Default|an error response in JSON format|[ErrorJsonResponse](#schemaerrorjsonresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## a listing of all timezones available for that area.

> Code samples

```bash
curl https://example.com/timezone/string.txt
```

`GET /timezone/{area}.txt`

<h3 id="a-listing-of-all-timezones-available-for-that-area-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|area|path|string|true|none|

<h3 id="a-listing-of-all-timezones-available-for-that-area-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the list of available timezones in plain text|[ListTextResponse](#schemalisttextresponse)|
|default|Default|an error response in plain text|[ErrorTextResponse](#schemaerrortextresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## request the current time for a timezone.

> Code samples

```bash
curl https://example.com/timezone/string/string \
  -H 'Accept: application/json'
```

`GET /timezone/{area}/{location}`

<h3 id="request-the-current-time-for-a-timezone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|area|path|string|true|none|
|location|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "abbreviation": "string",
  "client_ip": "string",
  "datetime": "string",
  "day_of_week": 0,
  "day_of_year": 0,
  "dst": true,
  "dst_from": "string",
  "dst_offset": 0,
  "dst_until": "string",
  "raw_offset": 0,
  "timezone": "string",
  "unixtime": 0,
  "utc_datetime": "string",
  "utc_offset": "string",
  "week_number": 0
}
```

> default Response

```json
{
  "error": "string"
}
```

<h3 id="request-the-current-time-for-a-timezone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the current time for the timezone requested in JSON format|[DateTimeJsonResponse](#schemadatetimejsonresponse)|
|default|Default|an error response in JSON format|[ErrorJsonResponse](#schemaerrorjsonresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## request the current time for a timezone.

> Code samples

```bash
curl https://example.com/timezone/string/string.txt
```

`GET /timezone/{area}/{location}.txt`

<h3 id="request-the-current-time-for-a-timezone-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|area|path|string|true|none|
|location|path|string|true|none|

<h3 id="request-the-current-time-for-a-timezone-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the current time for the timezone requested in plain text|[DateTimeTextResponse](#schemadatetimetextresponse)|
|default|Default|an error response in plain text|[ErrorTextResponse](#schemaerrortextresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## request the current time for a timezone.

> Code samples

```bash
curl https://example.com/timezone/string/string/string \
  -H 'Accept: application/json'
```

`GET /timezone/{area}/{location}/{region}`

<h3 id="request-the-current-time-for-a-timezone-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|area|path|string|true|none|
|location|path|string|true|none|
|region|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "abbreviation": "string",
  "client_ip": "string",
  "datetime": "string",
  "day_of_week": 0,
  "day_of_year": 0,
  "dst": true,
  "dst_from": "string",
  "dst_offset": 0,
  "dst_until": "string",
  "raw_offset": 0,
  "timezone": "string",
  "unixtime": 0,
  "utc_datetime": "string",
  "utc_offset": "string",
  "week_number": 0
}
```

> default Response

```json
{
  "error": "string"
}
```

<h3 id="request-the-current-time-for-a-timezone-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the current time for the timezone requested in JSON format|[DateTimeJsonResponse](#schemadatetimejsonresponse)|
|default|Default|an error response in JSON format|[ErrorJsonResponse](#schemaerrorjsonresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## request the current time for a timezone.

> Code samples

```bash
curl https://example.com/timezone/string/string/string.txt
```

`GET /timezone/{area}/{location}/{region}.txt`

<h3 id="request-the-current-time-for-a-timezone-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|area|path|string|true|none|
|location|path|string|true|none|
|region|path|string|true|none|

<h3 id="request-the-current-time-for-a-timezone-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the current time for the timezone requested in plain text|[DateTimeTextResponse](#schemadatetimetextresponse)|
|default|Default|an error response in plain text|[ErrorTextResponse](#schemaerrortextresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_DateTimeJsonResponse">DateTimeJsonResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatetimejsonresponse"></a>
<a id="schema_DateTimeJsonResponse"></a>
<a id="tocSdatetimejsonresponse"></a>
<a id="tocsdatetimejsonresponse"></a>

```json
{
  "abbreviation": "string",
  "client_ip": "string",
  "datetime": "string",
  "day_of_week": 0,
  "day_of_year": 0,
  "dst": true,
  "dst_from": "string",
  "dst_offset": 0,
  "dst_until": "string",
  "raw_offset": 0,
  "timezone": "string",
  "unixtime": 0,
  "utc_datetime": "string",
  "utc_offset": "string",
  "week_number": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abbreviation|string|true|none|the abbreviated name of the timezone|
|client_ip|string|true|none|the IP of the client making the request|
|datetime|string|true|none|an ISO8601-valid string representing the current, local date/time|
|day_of_week|integer|true|none|current day number of the week, where sunday is 0|
|day_of_year|integer|true|none|ordinal date of the current year|
|dst|boolean|true|none|flag indicating whether the local time is in daylight savings|
|dst_from|string|false|none|an ISO8601-valid string representing the datetime when daylight savings started for this timezone|
|dst_offset|integer|true|none|the difference in seconds between the current local time and daylight saving time for the location|
|dst_until|string|false|none|an ISO8601-valid string representing the datetime when daylight savings will end for this timezone|
|raw_offset|integer|false|none|the difference in seconds between the current local time and the time in UTC, excluding any daylight saving difference (see dst_offset)|
|timezone|string|true|none|timezone in `Area/Location` or `Area/Location/Region` format|
|unixtime|integer|true|none|number of seconds since the Epoch|
|utc_datetime|string|true|none|an ISO8601-valid string representing the current date/time in UTC|
|utc_offset|string|true|none|an ISO8601-valid string representing the offset from UTC|
|week_number|integer|true|none|the current week number|

<h2 id="tocS_DateTimeTextResponse">DateTimeTextResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatetimetextresponse"></a>
<a id="schema_DateTimeTextResponse"></a>
<a id="tocSdatetimetextresponse"></a>
<a id="tocsdatetimetextresponse"></a>

```json
"string"
```

time zone details, as per the DateTimeJsonResponse response, in the format `key: value`, one item per line

<h2 id="tocS_ErrorJsonResponse">ErrorJsonResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorjsonresponse"></a>
<a id="schema_ErrorJsonResponse"></a>
<a id="tocSerrorjsonresponse"></a>
<a id="tocserrorjsonresponse"></a>

```json
{
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|details about the error encountered|

<h2 id="tocS_ErrorTextResponse">ErrorTextResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrortextresponse"></a>
<a id="schema_ErrorTextResponse"></a>
<a id="tocSerrortextresponse"></a>
<a id="tocserrortextresponse"></a>

```json
"string"
```

details about the error encountered in plain text

<h2 id="tocS_ListJsonResponse">ListJsonResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistjsonresponse"></a>
<a id="schema_ListJsonResponse"></a>
<a id="tocSlistjsonresponse"></a>
<a id="tocslistjsonresponse"></a>

```json
[
  "string"
]
```

a list of available timezones

<h2 id="tocS_ListTextResponse">ListTextResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttextresponse"></a>
<a id="schema_ListTextResponse"></a>
<a id="tocSlisttextresponse"></a>
<a id="tocslisttextresponse"></a>

```json
"string"
```

a list of available timezones, one per line
