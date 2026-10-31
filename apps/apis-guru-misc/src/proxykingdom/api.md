<h1 id="proxykingdom-api">ProxyKingdom-Api v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.proxykingdom.com/">https://api.proxykingdom.com/</a>

<a href="https://proxykingdom.com/documentation">ProxyKingdom's Documentation</a>

<h1 id="proxykingdom-api-proxy">Proxy</h1>

## Gets a random proxy for chosen parameters.

> Code samples

```bash
curl https://example.com/proxy \
  -H 'Accept: application/json' \
  -H 'correlation_id: d85ab6a3-51a9-4359-b9d3-41f5dffb366e'
```

`GET /proxy`

<h3 id="gets-a-random-proxy-for-chosen-parameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|query|string|false|none|
|Address|query|string|false|none|
|Port|query|string|false|none|
|Protocol|query|string|false|none|
|AccessType|query|string|false|none|
|ResponseTime|query|string|false|none|
|IsSsl|query|string|false|none|
|Uptime|query|string|false|none|
|Country|query|string|false|none|
|Continent|query|string|false|none|
|Timezone|query|string|false|none|
|LastTested|query|string|false|none|
|correlation_id|header|string|true|Correlation Id header field|

> Example responses

> 200 Response

```json
{
  "accessType": "Elite",
  "address": "86.125.112.230",
  "isSsl": true,
  "isp": {
    "id": 10232,
    "name": "Comcast"
  },
  "lastTested": "2023-03-20T18:36:08Z",
  "location": {
    "accuracyRadius": 1,
    "cityName": "Timișoara",
    "continent": {
      "code": "EU",
      "name": "Europe"
    },
    "country": {
      "code": "RO",
      "name": "Romania"
    },
    "latitude": 45.7537,
    "longitude": 21.7537,
    "postalCode": "300011",
    "subdivisions": [
      {
        "code": "TM",
        "name": "Timis"
      }
    ],
    "timezone": "Europe/Bucharest"
  },
  "port": 30897,
  "protocol": "Socks4",
  "timings": {
    "connectTime": 0.506,
    "firstByteTime": 0.607,
    "responseTime": 1.092
  },
  "uptime": 0.88
}
```

<h3 id="gets-a-random-proxy-for-chosen-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Proxy](#schemaproxy)|
|400|Bad Request|Invalid proxy filter provided.|None|
|404|Not Found|No Proxy found for GetProxy by filter.|None|
|429|Too Many Requests|Subscription limit reached.|None|
|500|Internal Server Error|Technical Error.|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Continent">Continent</h2>
<!-- backwards compatibility -->
<a id="schemacontinent"></a>
<a id="schema_Continent"></a>
<a id="tocScontinent"></a>
<a id="tocscontinent"></a>

```json
{
  "code": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|read-only|none|
|name|string \| null|false|read-only|none|

<h2 id="tocS_Country">Country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
{
  "code": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|read-only|none|
|name|string \| null|false|read-only|none|

<h2 id="tocS_Isp">Isp</h2>
<!-- backwards compatibility -->
<a id="schemaisp"></a>
<a id="schema_Isp"></a>
<a id="tocSisp"></a>
<a id="tocsisp"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|read-only|none|
|name|string \| null|false|read-only|none|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "accuracyRadius": 0,
  "cityName": "string",
  "continent": {
    "code": "string",
    "name": "string"
  },
  "country": {
    "code": "string",
    "name": "string"
  },
  "latitude": 0,
  "longitude": 0,
  "postalCode": "string",
  "subdivisions": [
    {
      "code": "string",
      "name": "string"
    }
  ],
  "timezone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accuracyRadius|integer(int32)|false|read-only|none|
|cityName|string \| null|false|read-only|none|
|continent|[Continent](#schemacontinent)|false|none|none|
|country|[Country](#schemacountry)|false|none|none|
|latitude|number(float)|false|read-only|none|
|longitude|number(float)|false|read-only|none|
|postalCode|string \| null|false|read-only|none|
|subdivisions|[[Subdivision](#schemasubdivision)]|false|read-only|none|
|timezone|string \| null|false|read-only|none|

<h2 id="tocS_Proxy">Proxy</h2>
<!-- backwards compatibility -->
<a id="schemaproxy"></a>
<a id="schema_Proxy"></a>
<a id="tocSproxy"></a>
<a id="tocsproxy"></a>

```json
{
  "accessType": "string",
  "address": "string",
  "isSsl": true,
  "isp": {
    "id": 0,
    "name": "string"
  },
  "lastTested": "string",
  "location": {
    "accuracyRadius": 0,
    "cityName": "string",
    "continent": {
      "code": "string",
      "name": "string"
    },
    "country": {
      "code": "string",
      "name": "string"
    },
    "latitude": 0,
    "longitude": 0,
    "postalCode": "string",
    "subdivisions": [
      {
        "code": "string",
        "name": "string"
      }
    ],
    "timezone": "string"
  },
  "port": 0,
  "protocol": "string",
  "timings": {
    "connectTime": 0,
    "firstByteTime": 0,
    "responseTime": 0
  },
  "uptime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessType|string \| null|false|read-only|none|
|address|string \| null|false|read-only|none|
|isSsl|boolean|false|read-only|none|
|isp|[Isp](#schemaisp)|false|none|none|
|lastTested|string \| null|false|read-only|none|
|location|[Location](#schemalocation)|false|none|none|
|port|integer(int32)|false|read-only|none|
|protocol|string \| null|false|read-only|none|
|timings|[Timings](#schematimings)|false|none|none|
|uptime|number(float)|false|read-only|none|

<h2 id="tocS_Subdivision">Subdivision</h2>
<!-- backwards compatibility -->
<a id="schemasubdivision"></a>
<a id="schema_Subdivision"></a>
<a id="tocSsubdivision"></a>
<a id="tocssubdivision"></a>

```json
{
  "code": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|read-only|none|
|name|string \| null|false|read-only|none|

<h2 id="tocS_Timings">Timings</h2>
<!-- backwards compatibility -->
<a id="schematimings"></a>
<a id="schema_Timings"></a>
<a id="tocStimings"></a>
<a id="tocstimings"></a>

```json
{
  "connectTime": 0,
  "firstByteTime": 0,
  "responseTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectTime|number(float)|false|read-only|none|
|firstByteTime|number(float)|false|read-only|none|
|responseTime|number(float)|false|read-only|none|
