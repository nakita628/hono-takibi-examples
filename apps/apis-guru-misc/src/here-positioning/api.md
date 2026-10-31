<h1 id="here-network-positioning-api-v2">HERE Network Positioning API v2 v2.1.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Positioning API accepts requests with radio network measurements and replies with corresponding location estimate. For more details and examples, see [Developer's Guide](https://developer.here.com/documentation/positioning). Cellular measurements are given in terms defined in 3GPP and 3GGP2 specifications, see the corresponsing documentation at http://www.3gpp.org.

Breaking changes from v1:
  - JSON fields
    `altaccuracy`, `baselat`, `baselng`, `cellparams`, `pilotpower`, `pnoffset`, `powrx`, `rxlevel`,
    have been deprecated and replaced with
    `altAccuracy`, `baseLat`, `baseLng`, `cellParams`, `pilotPower`, `pnOffset`, `rss`, `rxLevel`
    respectively.
  - Dependent parameters combined as a subobject.
    - CDMA, GSM, WCDMA, TD-SCDMA and LTE local identification parameters for serving cell moved under `localId` property.
    - GSM neighbor global ID: `lac` and `cid` for neighbor cell moved under `globalIdentity` property.

Base URLs:

* <a href="https://positioning.hereapi.com/v2">https://positioning.hereapi.com/v2</a> - Production Server

* <a href="https://az.positioning.hereapi.com/v2">https://az.positioning.hereapi.com/v2</a> - Production Server on Azure

<a href="http://developer.here.com/terms-conditions">Terms of service</a>
License: <a href="https://legal.here.com/en-gb/terms/documentation-license">HERE Documentation License</a>

# Authentication

* API Key (APIKey)
    - Parameter Name: **apiKey**, in: query. A 43-byte Base64 URL-safe encoded string used for the authentication of the client application. As a logged in user, you can generate it at your [Projects](https://developer.here.com/projects). API Keys never expire but you can invalidate your API Keys at any time. You cannot have more than two API Keys for one app at the same time. You must include API key with every request, unless bearer token is provided.

See the [Identity & Access Management Developer Guide](https://developer.here.com/documentation/identity-access-management/dev_guide/index.html) for more details.

- HTTP Authentication, scheme: bearer HERE Account bearer token. Required unless API Key provided in the query string parameters.
See the [Identity & Access Management Developer Guide](https://developer.here.com/documentation/identity-access-management/dev_guide/index.html) for more details.

<h1 id="here-network-positioning-api-v2-location">Location</h1>

Obtaining location information using radio measurements

## Location query

<a id="opIdpostLocate"></a>

> Code samples

```bash
curl "https://example.com/locate?apiKey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "client": {
      "manufacturer": "Lemon",
      "model": "Flagship X1",
      "name": "FinderApp",
      "version": "2.0.31"
    },
    "lte": [
      {
        "cid": 2898945,
        "mcc": 262,
        "mnc": 2
      }
    ],
    "wlan": [
      {
        "mac": "F4-55-95-11-2C-C1"
      }
    ]
  }'
```

`POST /locate`

Request WGS-84 compliant geocoordinates for a location based on 2G/3G/4G cell and/or WLAN measurements.

> Body parameter

```json
{
  "client": {
    "manufacturer": "Lemon",
    "model": "Flagship X1",
    "name": "FinderApp",
    "version": "2.0.31"
  },
  "lte": [
    {
      "cid": 2898945,
      "mcc": 262,
      "mnc": 2
    }
  ],
  "wlan": [
    {
      "mac": "F4-55-95-11-2C-C1"
    }
  ]
}
```

<h3 id="location-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|confidence|query|integer|false|Confidence level in percent for the accuracy/uncertainty in the location estimate response. If not specified, the default is 68 (this corresponds to a 68% probability that the true position is within the accuracy/uncertainty radius of the location estimate: the higher the number, the greater the confidence level).<br>|
|Content-Encoding|header|string|false|Indicates that the data in the body is gzip-encoded.|
|fallback|query|[string]|false|Acceptable fallback options for cell and WLAN positioning. Values `area` and `any` apply to cell based positioning, and value `singleWifi` applies to WLAN based positioning. Both cell and WLAN options may be specified in the same request. If both `area` and `any` are specified, then `area` is ignored.<br><br>By default, cell based positioning returns cell tower level location estimates only. If you allow a WGS-84 compliant geocoordinate location estimate based on LAC, RNC, TAC, NID, or RZ areas, use the `fallback=area` setting. If you use the `fallback=any` setting, the service uses all available cell fallback methods and therefore the location estimate in the response may be at the MNC, SID, or MCC level.<br><br>For privacy reasons, the precise positioning based on a single WLAN AP is not possible. You can use the `fallback=singleWifi` setting to allow less accurate positioning based on a single WLAN AP. In that case, the center location of the position estimate will be deviated and the reported accuracy radius will be larger.<br>|
|desired|query|[string]|false|Comma-separated list of additional data fields that the service should include in the response if data is available. The query parameter supports the value `altitude`.<br>|
|X-Request-ID|header|string|false|ID used for correlating customer requests within HERE services. Used for logging and error reporting. Can be any string, but UUID is recommended. It will be echoed in the response.<br>|
|required|query|[string]|false|Comma-separated list of additional data fields that the service should include in the response. If the data is not available, the response contains an error message. The query parameter supports the value `altitude`.<br>|
|body|body|[Locate](#schemalocate)|true|Request body containing cell and/or WLAN measurement data. Cellular measurements are given in terms defined in 3GPP and 3GGP2 specifications, see the corresponsing documentation at http://www.3gpp.org.<br>|
|» cdma|body|[[Cdma](#schemacdma)]|false|CDMA cells (CDMA2000)|
|» client|body|[ClientInfo](#schemaclientinfo)|false|Information about the client|
|» gsm|body|[[Gsm](#schemagsm)]|false|GSM cells (GERAN)|
|» lte|body|[[Lte](#schemalte)]|false|LTE cells (E-UTRA, 4G)|
|» tdscdma|body|[[Tdscdma](#schematdscdma)]|false|TD-SCDMA cells (UTRA-TDD, 3G UMTS TDD)|
|» wcdma|body|[[Wcdma](#schemawcdma)]|false|WCDMA cells (UTRA-FDD, 3G UMTS)|
|» wlan|body|[[WlanLocate](#schemawlanlocate)]|false|WLAN access positions. For privacy reasons positioning based on a single WLAN AP is not possible; there has to be at least one other matching wlan or cell. Alternatively, you can allow fallbacks to less accurate single WLAN AP location estimates by using the setting `fallback=singleWifi`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Encoding|gzip|
|fallback|any|
|fallback|area|
|fallback|singleWifi|
|desired|altitude|
|required|altitude|

> Example responses

> 200 Response

```json
{
  "location": {
    "accuracy": 829,
    "alt": 142,
    "altAccuracy": 20,
    "lat": 61.4706194,
    "lng": 23.72265816
  }
}
```

> 400 Response

```json
{
  "action": "Please correct the request and retry",
  "cause": "Validation error in body",
  "code": "E606400",
  "correlationId": "4199533b-6290-41db-8d79-edf4f4019a74",
  "status": 400,
  "title": "Bad Request"
}
```

> 401 Response

```json
{
  "error": "Unauthorized",
  "error_description": "Token Validation Failure - invalid time in token"
}
```

> 403 Response

```json
{
  "error": "Forbidden",
  "error_description": "These credentials do not authorize access. Please contact your customer representative or submit a request here https://developer.here.com/contact-us to upgrade your account. You can also get valid credentials by registering for a free trial license on https://developer.here.com.\n"
}
```

> 404 Response

```json
{
  "action": "Try with new measurements",
  "cause": "Position cannot be found for given measurements",
  "code": "E606404",
  "correlationId": "4199533b-6290-41db-8d79-edf4f4019a74",
  "status": 404,
  "title": "Position not found"
}
```

> 405 Response

```json
{
  "action": "Send request using HTTP POST method",
  "cause": "Only HTTP POST method supported",
  "code": "E606405",
  "correlationId": "4199533b-6290-41db-8d79-edf4f4019a74",
  "status": 405,
  "title": "Not supported"
}
```

> 413 Response

```json
{
  "action": "Check the request correctness and/or remove some measurements to reduce request size",
  "cause": "The request body exceeds the maximum size limit",
  "code": "E606413",
  "correlationId": "4199533b-6290-41db-8d79-edf4f4019a74",
  "status": 413,
  "title": "Payload Too Large"
}
```

> 414 Response

```json
{
  "action": "Fix the URI (remove extra parameters?)",
  "cause": "URI Too Long",
  "code": "E606414",
  "correlationId": "4199533b-6290-41db-8d79-edf4f4019a74",
  "status": 414,
  "title": "URI Too Long"
}
```

> 415 Response

```json
{
  "action": "Provide request body in application/json content type and/or correct Content-Type header",
  "cause": "Content-Type should be application/json.",
  "code": "E606415",
  "correlationId": "4199533b-6290-41db-8d79-edf4f4019a74",
  "status": 415,
  "title": "Unsupported Media Type"
}
```

> 500 Response

```json
{
  "action": "System administrators have been notified about the problem. Please try again later.",
  "cause": "Something unexpected happened.",
  "code": "E606500",
  "correlationId": "4199533b-6290-41db-8d79-edf4f4019a74",
  "status": 500,
  "title": "Internal Server Error"
}
```

> 503 Response

```json
{
  "action": "Please try again later",
  "cause": "The service is currently unavailable",
  "code": "E606503",
  "correlationId": "4199533b-6290-41db-8d79-edf4f4019a74",
  "status": 503,
  "title": "Service Unavailable"
}
```

<h3 id="location-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request processed successfully and a WGS-84 compliant geocoordinate location estimate was included in the response.|Inline|
|400|Bad Request|The request is malformed. The URL query parameters or the JSON POST body in the request is invalid. Check the message in the response for additional troubleshooting information.<br>|[Error](#schemaerror)|
|401|Unauthorized|Authentication failed.|[AuthError](#schemaautherror)|
|403|Forbidden|Access denied.|[AuthError](#schemaautherror)|
|404|Not Found|The values provided in the request cannot produce any content for the response. The location of the WLANs and cells in the request is unknown or the locations of the radio measurements are so widely scattered that the location cannot be determined. Make sure that the network measurements are correct and consistent. Try allowing fallbacks `area` or `any` for cell positioning and `singleWifi` for WLAN positioning.<br>|[Error](#schemaerror)|
|405|Method Not Allowed|Method not allowed. Only POST is supported.|[Error](#schemaerror)|
|413|Payload Too Large|Too large request.|[Error](#schemaerror)|
|414|URI Too Long|Too long URI.|[Error](#schemaerror)|
|415|Unsupported Media Type|Invalid request content type.|[Error](#schemaerror)|
|500|Internal Server Error|An unexpected server error has occurred, try again later.|[Error](#schemaerror)|
|503|Service Unavailable|Service is unavailable, try again later.|[Error](#schemaerror)|

<h3 id="location-query-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|[PositionLocate](#schemapositionlocate)|true|none|Object containing information on a location where a measurement was taken.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-ID|string|uuid|Correlation ID of current request within HERE services.|
|200|X-Request-ID|string||Value of X-Request-ID header parameter supplied in the request.|
|400|X-Correlation-ID|string|uuid|Correlation ID of current request within HERE services.|
|400|X-Request-ID|string||Value of X-Request-ID header parameter supplied in the request.|
|404|X-Correlation-ID|string|uuid|Correlation ID of current request within HERE services.|
|404|X-Request-ID|string||Value of X-Request-ID header parameter supplied in the request.|
|405|X-Correlation-ID|string|uuid|Correlation ID of current request within HERE services.|
|405|X-Request-ID|string||Value of X-Request-ID header parameter supplied in the request.|
|413|X-Correlation-ID|string|uuid|Correlation ID of current request within HERE services.|
|413|X-Request-ID|string||Value of X-Request-ID header parameter supplied in the request.|
|414|X-Correlation-ID|string|uuid|Correlation ID of current request within HERE services.|
|414|X-Request-ID|string||Value of X-Request-ID header parameter supplied in the request.|
|415|X-Correlation-ID|string|uuid|Correlation ID of current request within HERE services.|
|415|X-Request-ID|string||Value of X-Request-ID header parameter supplied in the request.|
|500|X-Correlation-ID|string|uuid|Correlation ID of current request within HERE services.|
|500|X-Request-ID|string||Value of X-Request-ID header parameter supplied in the request.|
|503|X-Correlation-ID|string|uuid|Correlation ID of current request within HERE services.|
|503|X-Request-ID|string||Value of X-Request-ID header parameter supplied in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKey, AccessToken
</aside>

<h1 id="here-network-positioning-api-v2-api-information">API Information</h1>

Additional API Information

## Service health

<a id="opIdgetHealth"></a>

> Code samples

```bash
curl "https://example.com/health?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /health`

Tests basic health of the service

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="service-health-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health status|[ApiHealthStatus](#schemaapihealthstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKey, AccessToken
</aside>

## API version

<a id="opIdgetApiVersion"></a>

> Code samples

```bash
curl "https://example.com/version?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /version`

Retrieves API Specification version information

> Example responses

> 200 Response

```json
{
  "apiVersion": "2.0.3",
  "serviceVersion": "2.0.20"
}
```

<h3 id="api-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Version of API|[ApiVersion](#schemaapiversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKey, AccessToken
</aside>

# Schemas

<h2 id="tocS_ApiHealthStatus">ApiHealthStatus</h2>
<!-- backwards compatibility -->
<a id="schemaapihealthstatus"></a>
<a id="schema_ApiHealthStatus"></a>
<a id="tocSapihealthstatus"></a>
<a id="tocsapihealthstatus"></a>

```json
{
  "status": "OK"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Health status of API|

<h2 id="tocS_ApiVersion">ApiVersion</h2>
<!-- backwards compatibility -->
<a id="schemaapiversion"></a>
<a id="schema_ApiVersion"></a>
<a id="tocSapiversion"></a>
<a id="tocsapiversion"></a>

```json
{
  "apiVersion": "2.0.3",
  "serviceVersion": "2.0.20"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|Version of API|
|serviceVersion|string|false|none|Version of the Service|

<h2 id="tocS_AuthError">AuthError</h2>
<!-- backwards compatibility -->
<a id="schemaautherror"></a>
<a id="schema_AuthError"></a>
<a id="tocSautherror"></a>
<a id="tocsautherror"></a>

```json
{
  "error": "Unauthorized",
  "error_description": "ApiKey invalid. ApiKey not found."
}
```

Error object reported in case of authentication or authorization errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error message|
|error_description|string|false|none|Detailed information about the error|

<h2 id="tocS_BaseLat">BaseLat</h2>
<!-- backwards compatibility -->
<a id="schemabaselat"></a>
<a id="schema_BaseLat"></a>
<a id="tocSbaselat"></a>
<a id="tocsbaselat"></a>

```json
40.689249
```

Base station latitude

<h2 id="tocS_BaseLng">BaseLng</h2>
<!-- backwards compatibility -->
<a id="schemabaselng"></a>
<a id="schema_BaseLng"></a>
<a id="tocSbaselng"></a>
<a id="tocsbaselng"></a>

```json
-74.0445
```

Base station longitude

<h2 id="tocS_Bcch">Bcch</h2>
<!-- backwards compatibility -->
<a id="schemabcch"></a>
<a id="schema_Bcch"></a>
<a id="tocSbcch"></a>
<a id="tocsbcch"></a>

```json
82
```

Broadcast Control Channel (BCCH, synonymous to ARFCN = Absolute Radio Frequency Channel)

<h2 id="tocS_Bsic">Bsic</h2>
<!-- backwards compatibility -->
<a id="schemabsic"></a>
<a id="schema_Bsic"></a>
<a id="tocSbsic"></a>
<a id="tocsbsic"></a>

```json
6
```

Base Station Identity Code (BSIC, for instance, color code)

<h2 id="tocS_Bsid">Bsid</h2>
<!-- backwards compatibility -->
<a id="schemabsid"></a>
<a id="schema_Bsid"></a>
<a id="tocSbsid"></a>
<a id="tocsbsid"></a>

```json
8584
```

Base Station ID (CDMA BSID, BID)

<h2 id="tocS_Cdma">Cdma</h2>
<!-- backwards compatibility -->
<a id="schemacdma"></a>
<a id="schema_Cdma"></a>
<a id="tocScdma"></a>
<a id="tocscdma"></a>

```json
{
  "bsid": 8583,
  "localId": {
    "channel": 0,
    "pnOffset": 247
  },
  "nid": 10,
  "nmr": [
    {
      "channel": 0,
      "pnOffset": 357
    },
    {
      "channel": 0,
      "pnOffset": 366
    }
  ],
  "sid": 4162
}
```

CDMA measurement

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseLat|[BaseLat](#schemabaselat)|false|none|Base station latitude|
|baseLng|[BaseLng](#schemabaselng)|false|none|Base station longitude|
|bsid|[Bsid](#schemabsid)|true|none|Base Station ID (CDMA BSID, BID)|
|localId|[CdmaLocalId](#schemacdmalocalid)|false|none|Local identification parameters of CDMA serving cell|
|nid|[Nid](#schemanid)|true|none|Network ID (NID)|
|nmr|[CdmaNmrArray](#schemacdmanmrarray)|false|none|CDMA Network measurements|
|pilotPower|[PilotPower](#schemapilotpower)|false|none|Pilot Power (dBm). If Pilot Power is not available directly, it needs to be calculated from Total Power in the band and Pilot Strength with respect to the Total Power. Pilot power less than -142dBm should be mapped to -142. Pilot power greater than -49dBm should be mapped to -49.<br>|
|rz|[RegistrationZone](#schemaregistrationzone)|false|none|CDMA Registration Zone (RZ)|
|sid|[Sid](#schemasid)|true|none|System ID (SID)|

<h2 id="tocS_CdmaLocalId">CdmaLocalId</h2>
<!-- backwards compatibility -->
<a id="schemacdmalocalid"></a>
<a id="schema_CdmaLocalId"></a>
<a id="tocScdmalocalid"></a>
<a id="tocscdmalocalid"></a>

```json
{
  "channel": 0,
  "pnOffset": 247
}
```

Local identification parameters of CDMA serving cell

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|[Channel](#schemachannel)|true|none|CDMA channel frequency|
|pnOffset|[PnOffset](#schemapnoffset)|true|none|Pseudonoise offset. This field and CDMA channel frequency together allow for the locally unique identification of the cell.<br>|

<h2 id="tocS_CdmaNmr">CdmaNmr</h2>
<!-- backwards compatibility -->
<a id="schemacdmanmr"></a>
<a id="schema_CdmaNmr"></a>
<a id="tocScdmanmr"></a>
<a id="tocscdmanmr"></a>

```json
{
  "channel": 0,
  "pnOffset": 357
}
```

CDMA Network measurement

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bsid|[Bsid](#schemabsid)|false|none|Base Station ID (CDMA BSID, BID)|
|channel|[Channel](#schemachannel)|true|none|CDMA channel frequency|
|pilotPower|[PilotPower](#schemapilotpower)|false|none|Pilot Power (dBm). If Pilot Power is not available directly, it needs to be calculated from Total Power in the band and Pilot Strength with respect to the Total Power. Pilot power less than -142dBm should be mapped to -142. Pilot power greater than -49dBm should be mapped to -49.<br>|
|pnOffset|[PnOffset](#schemapnoffset)|true|none|Pseudonoise offset. This field and CDMA channel frequency together allow for the locally unique identification of the cell.<br>|

<h2 id="tocS_CdmaNmrArray">CdmaNmrArray</h2>
<!-- backwards compatibility -->
<a id="schemacdmanmrarray"></a>
<a id="schema_CdmaNmrArray"></a>
<a id="tocScdmanmrarray"></a>
<a id="tocscdmanmrarray"></a>

```json
[
  {
    "channel": 0,
    "pnOffset": 357
  },
  {
    "channel": 0,
    "pnOffset": 366
  }
]
```

CDMA Network measurements

<h2 id="tocS_CellParams">CellParams</h2>
<!-- backwards compatibility -->
<a id="schemacellparams"></a>
<a id="schema_CellParams"></a>
<a id="tocScellparams"></a>
<a id="tocscellparams"></a>

```json
86
```

Cell Parameters ID (CDMA Spreading Code ID)

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
1
```

CDMA channel frequency

<h2 id="tocS_ClientInfo">ClientInfo</h2>
<!-- backwards compatibility -->
<a id="schemaclientinfo"></a>
<a id="schema_ClientInfo"></a>
<a id="tocSclientinfo"></a>
<a id="tocsclientinfo"></a>

```json
{
  "manufacturer": "Lemon",
  "model": "Flagship X1",
  "name": "FinderApp",
  "version": "2.0.31"
}
```

Information about the client

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firmware|string|false|none|Device firmware version information|
|manufacturer|string|true|none|Manufacturer of the device (hardware)|
|model|string|true|none|Model of the device (hardware)|
|name|string|true|none|Name of the client software accessing the HERE API|
|platform|string|false|none|Software platform information of the device, for example operating system name and version.|
|version|string(version)|true|none|Version of the client software in format X.Y.Z, where X [0..255] is a major, Y [0..255] is a minor, and Z [0..65535] is a build version number. Increase the version/build number for each release of the client.|

<h2 id="tocS_Earfcn">Earfcn</h2>
<!-- backwards compatibility -->
<a id="schemaearfcn"></a>
<a id="schema_Earfcn"></a>
<a id="tocSearfcn"></a>
<a id="tocsearfcn"></a>

```json
6300
```

Evolved Absolute Radio Frequency Channel (E-ARFCN)

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "action": "Actionable instructions for the user",
  "cause": "The input data in question does not meet validation rules",
  "code": "E606101",
  "correlationId": "4199533b-6290-41db-8d79-edf4f4019a74",
  "details": [
    {
      "message": "Size must be between 3 and 64",
      "messagePlaceholders": {
        "field": "size",
        "max": 64,
        "min": 3
      },
      "messageTemplate": "validation.constraint.between",
      "source": "$.data.attributes[0].size",
      "title": "Invalid size value"
    }
  ],
  "status": 400,
  "title": "Input data failed validation"
}
```

Object wrapper for the error response to a request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|Actionable instructions for the user|
|cause|string|true|none|Reason for the error|
|code|string|true|none|Error code|
|correlationId|string(uuid)|true|none|Copy from X-Correlation-ID header for logging|
|details|[[ErrorDetail](#schemaerrordetail)]|false|none|none|
|status|number|true|none|Equals HTTP status code|
|title|string|true|none|Localized error string|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
{
  "message": "Size must be between 3 and 64",
  "messagePlaceholders": null,
  "messageTemplate": "validation.constraint.between",
  "source": "$.data.attributes[0].size",
  "title": "Invalid size value"
}
```

Detail about an error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Localize message|
|messagePlaceholders|object|false|none|none|
|messageTemplate|string|false|none|none|
|source|string|false|none|Source of the error, using JSONPath|
|title|string|false|none|Title for the detail|

<h2 id="tocS_EutranCid">EutranCid</h2>
<!-- backwards compatibility -->
<a id="schemaeutrancid"></a>
<a id="schema_EutranCid"></a>
<a id="tocSeutrancid"></a>
<a id="tocseutrancid"></a>

```json
2898945
```

E-UTRA Cell Identifier (UC-Id), 28 bits (20 bits eNodeB and 8 bits Cell ID). MCC + MNC + CID uniquely identifies the LTE cell, TAC is optional.

<h2 id="tocS_EutranCidNmr">EutranCidNmr</h2>
<!-- backwards compatibility -->
<a id="schemaeutrancidnmr"></a>
<a id="schema_EutranCidNmr"></a>
<a id="tocSeutrancidnmr"></a>
<a id="tocseutrancidnmr"></a>

```json
2898945
```

E-UTRA Cell Identifier (UC-Id), 28 bits (20 bits eNodeB and 8 bits Cell ID).

<h2 id="tocS_GeranCid">GeranCid</h2>
<!-- backwards compatibility -->
<a id="schemagerancid"></a>
<a id="schema_GeranCid"></a>
<a id="tocSgerancid"></a>
<a id="tocsgerancid"></a>

```json
16503
```

Cell identifier (GERAN CID)

<h2 id="tocS_Gsm">Gsm</h2>
<!-- backwards compatibility -->
<a id="schemagsm"></a>
<a id="schema_Gsm"></a>
<a id="tocSgsm"></a>
<a id="tocsgsm"></a>

```json
{
  "cid": 16504,
  "lac": 5126,
  "localId": {
    "bcch": 80,
    "bsic": 5
  },
  "mcc": 262,
  "mnc": 1,
  "nmr": [
    {
      "bcch": 82,
      "bsic": 6
    },
    {
      "bcch": 85,
      "bsic": 7
    },
    {
      "bcch": 93,
      "bsic": 12
    },
    {
      "bcch": 88,
      "bsic": 13
    },
    {
      "bcch": 88,
      "bsic": 19
    }
  ]
}
```

GSM measurement

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cid|[GeranCid](#schemagerancid)|true|none|Cell identifier (GERAN CID)|
|lac|[Lac](#schemalac)|true|none|Location Area Code (LAC). Note, value 65534 is invalid.|
|localId|[GsmLocalId](#schemagsmlocalid)|false|none|Local identification parameters of GSM serving cell|
|mcc|[Mcc](#schemamcc)|true|none|Mobile Country Code (MCC). Note: 0xx is for test networks, 1xx and 8xx are not used<br>|
|mnc|[Mnc](#schemamnc)|true|none|Mobile Network Code (MNC).|
|nmr|[GsmNmrArray](#schemagsmnmrarray)|false|none|GSM Network measurements|
|rxLevel|[RxLevel](#schemarxlevel)|false|none|Received Signal power (dBm). Power less than -110dBm should be mapped to -110. Power greater than -25dBm should be mapped to -25.<br>|
|ta|[GsmTimingAdvance](#schemagsmtimingadvance)|false|none|Timing advance (TA). Expressed in the units of GSM bits equaling to 48/13 μs ~ 1107 meters.|

<h2 id="tocS_GsmLocalId">GsmLocalId</h2>
<!-- backwards compatibility -->
<a id="schemagsmlocalid"></a>
<a id="schema_GsmLocalId"></a>
<a id="tocSgsmlocalid"></a>
<a id="tocsgsmlocalid"></a>

```json
{
  "bcch": 80,
  "bsic": 5
}
```

Local identification parameters of GSM serving cell

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bcch|[Bcch](#schemabcch)|true|none|Broadcast Control Channel (BCCH, synonymous to ARFCN = Absolute Radio Frequency Channel)|
|bsic|[Bsic](#schemabsic)|true|none|Base Station Identity Code (BSIC, for instance, color code)|

<h2 id="tocS_GsmNmr">GsmNmr</h2>
<!-- backwards compatibility -->
<a id="schemagsmnmr"></a>
<a id="schema_GsmNmr"></a>
<a id="tocSgsmnmr"></a>
<a id="tocsgsmnmr"></a>

```json
{
  "bcch": 82,
  "bsic": 6
}
```

GSM Network measurements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bcch|[Bcch](#schemabcch)|true|none|Broadcast Control Channel (BCCH, synonymous to ARFCN = Absolute Radio Frequency Channel)|
|bsic|[Bsic](#schemabsic)|true|none|Base Station Identity Code (BSIC, for instance, color code)|
|globalIdentity|[GsmNmrGlobalId](#schemagsmnmrglobalid)|false|none|The `lac` and `cid` parameters of global ID for GSM neighbor measurement. They should be from the same PLMN (MCC+MNC) as the serving cell.<br>|
|rxLevel|[RxLevel](#schemarxlevel)|false|none|Received Signal power (dBm). Power less than -110dBm should be mapped to -110. Power greater than -25dBm should be mapped to -25.<br>|

<h2 id="tocS_GsmNmrArray">GsmNmrArray</h2>
<!-- backwards compatibility -->
<a id="schemagsmnmrarray"></a>
<a id="schema_GsmNmrArray"></a>
<a id="tocSgsmnmrarray"></a>
<a id="tocsgsmnmrarray"></a>

```json
[
  {
    "bcch": 82,
    "bsic": 6
  }
]
```

GSM Network measurements

<h2 id="tocS_GsmNmrGlobalId">GsmNmrGlobalId</h2>
<!-- backwards compatibility -->
<a id="schemagsmnmrglobalid"></a>
<a id="schema_GsmNmrGlobalId"></a>
<a id="tocSgsmnmrglobalid"></a>
<a id="tocsgsmnmrglobalid"></a>

```json
{
  "cid": 16503,
  "lac": 5126
}
```

The `lac` and `cid` parameters of global ID for GSM neighbor measurement. They should be from the same PLMN (MCC+MNC) as the serving cell.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cid|[GeranCid](#schemagerancid)|true|none|Cell identifier (GERAN CID)|
|lac|[Lac](#schemalac)|true|none|Location Area Code (LAC). Note, value 65534 is invalid.|

<h2 id="tocS_GsmTimingAdvance">GsmTimingAdvance</h2>
<!-- backwards compatibility -->
<a id="schemagsmtimingadvance"></a>
<a id="schema_GsmTimingAdvance"></a>
<a id="tocSgsmtimingadvance"></a>
<a id="tocsgsmtimingadvance"></a>

```json
3
```

Timing advance (TA). Expressed in the units of GSM bits equaling to 48/13 μs ~ 1107 meters.

<h2 id="tocS_Lac">Lac</h2>
<!-- backwards compatibility -->
<a id="schemalac"></a>
<a id="schema_Lac"></a>
<a id="tocSlac"></a>
<a id="tocslac"></a>

```json
5126
```

Location Area Code (LAC). Note, value 65534 is invalid.

<h2 id="tocS_Latitude">Latitude</h2>
<!-- backwards compatibility -->
<a id="schemalatitude"></a>
<a id="schema_Latitude"></a>
<a id="tocSlatitude"></a>
<a id="tocslatitude"></a>

```json
61.4706194
```

Latitude in WGS-84 format, decimal representation ranging from -90 to 90.

<h2 id="tocS_Locate">Locate</h2>
<!-- backwards compatibility -->
<a id="schemalocate"></a>
<a id="schema_Locate"></a>
<a id="tocSlocate"></a>
<a id="tocslocate"></a>

```json
{
  "client": {
    "manufacturer": "Lemon",
    "model": "Flagship X1",
    "name": "FinderApp",
    "version": "2.0.31"
  },
  "lte": [
    {
      "cid": 2898945,
      "mcc": 262,
      "mnc": 2
    }
  ],
  "wlan": [
    {
      "mac": "F4-55-95-11-2C-C1"
    }
  ]
}
```

Object wrapping the location data submitted in a request for a position. At least one of `gsm`, `wcdma`, `tdscdma`, `lte`, `cdma`, or `wlan` elements is required. Array elements should be unique within the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cdma|[[Cdma](#schemacdma)]|false|none|CDMA cells (CDMA2000)|
|client|[ClientInfo](#schemaclientinfo)|false|none|Information about the client|
|gsm|[[Gsm](#schemagsm)]|false|none|GSM cells (GERAN)|
|lte|[[Lte](#schemalte)]|false|none|LTE cells (E-UTRA, 4G)|
|tdscdma|[[Tdscdma](#schematdscdma)]|false|none|TD-SCDMA cells (UTRA-TDD, 3G UMTS TDD)|
|wcdma|[[Wcdma](#schemawcdma)]|false|none|WCDMA cells (UTRA-FDD, 3G UMTS)|
|wlan|[[WlanLocate](#schemawlanlocate)]|false|none|WLAN access positions. For privacy reasons positioning based on a single WLAN AP is not possible; there has to be at least one other matching wlan or cell. Alternatively, you can allow fallbacks to less accurate single WLAN AP location estimates by using the setting `fallback=singleWifi`.<br>|

<h2 id="tocS_Longitude">Longitude</h2>
<!-- backwards compatibility -->
<a id="schemalongitude"></a>
<a id="schema_Longitude"></a>
<a id="tocSlongitude"></a>
<a id="tocslongitude"></a>

```json
23.72265816
```

Longitude in WGS-84 format, decimal representation ranging from -180 to 180.

<h2 id="tocS_Lte">Lte</h2>
<!-- backwards compatibility -->
<a id="schemalte"></a>
<a id="schema_Lte"></a>
<a id="tocSlte"></a>
<a id="tocslte"></a>

```json
{
  "cid": 2898945,
  "localId": {
    "earfcn": 6300,
    "pci": 123
  },
  "mcc": 262,
  "mnc": 2,
  "nmr": [
    {
      "earfcn": 6300,
      "pci": 237
    },
    {
      "earfcn": 6300,
      "pci": 442
    }
  ]
}
```

LTE measurement

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cid|[EutranCid](#schemaeutrancid)|true|none|E-UTRA Cell Identifier (UC-Id), 28 bits (20 bits eNodeB and 8 bits Cell ID). MCC + MNC + CID uniquely identifies the LTE cell, TAC is optional.<br>|
|localId|[LteLocalId](#schemaltelocalid)|false|none|Local identification parameters of LTE serving cell|
|mcc|[Mcc](#schemamcc)|true|none|Mobile Country Code (MCC). Note: 0xx is for test networks, 1xx and 8xx are not used<br>|
|mnc|[Mnc](#schemamnc)|true|none|Mobile Network Code (MNC).|
|nmr|[LteNmrArray](#schemaltenmrarray)|false|none|LTE Network measurements|
|rsrp|[Rsrp](#schemarsrp)|false|none|Reference Signal Received Power (RSRP) in dBm. Power less than -140dBm should be mapped to -140. Power greater than -44dBm should be mapped to -44.<br>|
|rsrq|[Rsrq](#schemarsrq)|false|none|Reference Signal Received Quality (RSRQ) in dBm. Values less than -19.5dB should be mapped to -19.5, and values greater than -3dB should be mapped to -3dB.<br>|
|ta|[LteTimingAdvance](#schemaltetimingadvance)|false|none|Timing Advance. Expressed in the units of 16*Ts (16 Basic time units) = 16/(15000*2048) seconds ~ 156meters. For reference see 3GPP TS 36.213 and 36.211.<br>|
|tac|[Tac](#schematac)|false|none|Tracking Area Code (TAC)|

<h2 id="tocS_LteLocalId">LteLocalId</h2>
<!-- backwards compatibility -->
<a id="schemaltelocalid"></a>
<a id="schema_LteLocalId"></a>
<a id="tocSltelocalid"></a>
<a id="tocsltelocalid"></a>

```json
{
  "earfcn": 6300,
  "pci": 123
}
```

Local identification parameters of LTE serving cell

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|earfcn|[Earfcn](#schemaearfcn)|true|none|Evolved Absolute Radio Frequency Channel (E-ARFCN)|
|pci|[Pci](#schemapci)|true|none|Physical Cell Identity (PCI)|

<h2 id="tocS_LteNmr">LteNmr</h2>
<!-- backwards compatibility -->
<a id="schemaltenmr"></a>
<a id="schema_LteNmr"></a>
<a id="tocSltenmr"></a>
<a id="tocsltenmr"></a>

```json
{
  "earfcn": 6300,
  "pci": 237,
  "rsrp": -95,
  "rsrq": -12
}
```

LTE Network measurement

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cid|[EutranCid](#schemaeutrancid)|false|none|E-UTRA Cell Identifier (UC-Id), 28 bits (20 bits eNodeB and 8 bits Cell ID). MCC + MNC + CID uniquely identifies the LTE cell, TAC is optional.<br>|
|earfcn|[Earfcn](#schemaearfcn)|true|none|Evolved Absolute Radio Frequency Channel (E-ARFCN)|
|pci|[Pci](#schemapci)|true|none|Physical Cell Identity (PCI)|
|rsrp|[Rsrp](#schemarsrp)|false|none|Reference Signal Received Power (RSRP) in dBm. Power less than -140dBm should be mapped to -140. Power greater than -44dBm should be mapped to -44.<br>|
|rsrq|[Rsrq](#schemarsrq)|false|none|Reference Signal Received Quality (RSRQ) in dBm. Values less than -19.5dB should be mapped to -19.5, and values greater than -3dB should be mapped to -3dB.<br>|

<h2 id="tocS_LteNmrArray">LteNmrArray</h2>
<!-- backwards compatibility -->
<a id="schemaltenmrarray"></a>
<a id="schema_LteNmrArray"></a>
<a id="tocSltenmrarray"></a>
<a id="tocsltenmrarray"></a>

```json
[
  {
    "earfcn": 6300,
    "pci": 237
  },
  {
    "earfcn": 6300,
    "pci": 442
  }
]
```

LTE Network measurements

<h2 id="tocS_LteTimingAdvance">LteTimingAdvance</h2>
<!-- backwards compatibility -->
<a id="schemaltetimingadvance"></a>
<a id="schema_LteTimingAdvance"></a>
<a id="tocSltetimingadvance"></a>
<a id="tocsltetimingadvance"></a>

```json
40
```

Timing Advance. Expressed in the units of 16*Ts (16 Basic time units) = 16/(15000*2048) seconds ~ 156meters. For reference see 3GPP TS 36.213 and 36.211.

<h2 id="tocS_Mcc">Mcc</h2>
<!-- backwards compatibility -->
<a id="schemamcc"></a>
<a id="schema_Mcc"></a>
<a id="tocSmcc"></a>
<a id="tocsmcc"></a>

```json
262
```

Mobile Country Code (MCC). Note: 0xx is for test networks, 1xx and 8xx are not used

<h2 id="tocS_Mnc">Mnc</h2>
<!-- backwards compatibility -->
<a id="schemamnc"></a>
<a id="schema_Mnc"></a>
<a id="tocSmnc"></a>
<a id="tocsmnc"></a>

```json
2
```

Mobile Network Code (MNC).

<h2 id="tocS_Nid">Nid</h2>
<!-- backwards compatibility -->
<a id="schemanid"></a>
<a id="schema_Nid"></a>
<a id="tocSnid"></a>
<a id="tocsnid"></a>

```json
10
```

Network ID (NID)

<h2 id="tocS_Pathloss">Pathloss</h2>
<!-- backwards compatibility -->
<a id="schemapathloss"></a>
<a id="schema_Pathloss"></a>
<a id="tocSpathloss"></a>
<a id="tocspathloss"></a>

```json
80
```

UTRAN pathloss (dBm)

<h2 id="tocS_Pci">Pci</h2>
<!-- backwards compatibility -->
<a id="schemapci"></a>
<a id="schema_Pci"></a>
<a id="tocSpci"></a>
<a id="tocspci"></a>

```json
237
```

Physical Cell Identity (PCI)

<h2 id="tocS_PilotPower">PilotPower</h2>
<!-- backwards compatibility -->
<a id="schemapilotpower"></a>
<a id="schema_PilotPower"></a>
<a id="tocSpilotpower"></a>
<a id="tocspilotpower"></a>

```json
-99
```

Pilot Power (dBm). If Pilot Power is not available directly, it needs to be calculated from Total Power in the band and Pilot Strength with respect to the Total Power. Pilot power less than -142dBm should be mapped to -142. Pilot power greater than -49dBm should be mapped to -49.

<h2 id="tocS_PnOffset">PnOffset</h2>
<!-- backwards compatibility -->
<a id="schemapnoffset"></a>
<a id="schema_PnOffset"></a>
<a id="tocSpnoffset"></a>
<a id="tocspnoffset"></a>

```json
357
```

Pseudonoise offset. This field and CDMA channel frequency together allow for the locally unique identification of the cell.

<h2 id="tocS_PositionLocate">PositionLocate</h2>
<!-- backwards compatibility -->
<a id="schemapositionlocate"></a>
<a id="schema_PositionLocate"></a>
<a id="tocSpositionlocate"></a>
<a id="tocspositionlocate"></a>

```json
{
  "accuracy": 829,
  "alt": 142,
  "altAccuracy": 20,
  "lat": 61.4706194,
  "lng": 23.72265816
}
```

Object containing information on a location where a measurement was taken.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accuracy|number|true|none|Uncertainty circle radius in meters (degree of confidence according to the `confidence` parameter).|
|alt|number|false|none|Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive.|
|altAccuracy|number|false|none|Uncertainty of the altitude estimate in meters (degree of confidence according to the `confidence` parameter). This field superceeds old `altaccuracy`.<br>|
|lat|[Latitude](#schemalatitude)|true|none|Latitude in WGS-84 format, decimal representation ranging from -90 to 90.|
|lng|[Longitude](#schemalongitude)|true|none|Longitude in WGS-84 format, decimal representation ranging from -180 to 180.|

<h2 id="tocS_Psc">Psc</h2>
<!-- backwards compatibility -->
<a id="schemapsc"></a>
<a id="schema_Psc"></a>
<a id="tocSpsc"></a>
<a id="tocspsc"></a>

```json
149
```

Primary Scrambling Code (PSC, Primary CPICH, Primary Control Pilot Channel).

<h2 id="tocS_RegistrationZone">RegistrationZone</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationzone"></a>
<a id="schema_RegistrationZone"></a>
<a id="tocSregistrationzone"></a>
<a id="tocsregistrationzone"></a>

```json
1234
```

CDMA Registration Zone (RZ)

<h2 id="tocS_Rscp">Rscp</h2>
<!-- backwards compatibility -->
<a id="schemarscp"></a>
<a id="schema_Rscp"></a>
<a id="tocSrscp"></a>
<a id="tocsrscp"></a>

```json
-50
```

Received Signal Code Power (RSCP) in dBm. Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.

<h2 id="tocS_Rsrp">Rsrp</h2>
<!-- backwards compatibility -->
<a id="schemarsrp"></a>
<a id="schema_Rsrp"></a>
<a id="tocSrsrp"></a>
<a id="tocsrsrp"></a>

```json
-95
```

Reference Signal Received Power (RSRP) in dBm. Power less than -140dBm should be mapped to -140. Power greater than -44dBm should be mapped to -44.

<h2 id="tocS_Rsrq">Rsrq</h2>
<!-- backwards compatibility -->
<a id="schemarsrq"></a>
<a id="schema_Rsrq"></a>
<a id="tocSrsrq"></a>
<a id="tocsrsrq"></a>

```json
-12
```

Reference Signal Received Quality (RSRQ) in dBm. Values less than -19.5dB should be mapped to -19.5, and values greater than -3dB should be mapped to -3dB.

<h2 id="tocS_Rss">Rss</h2>
<!-- backwards compatibility -->
<a id="schemarss"></a>
<a id="schema_Rss"></a>
<a id="tocSrss"></a>
<a id="tocsrss"></a>

```json
-76
```

Received signal level (dBm) at the terminal

<h2 id="tocS_RxLevel">RxLevel</h2>
<!-- backwards compatibility -->
<a id="schemarxlevel"></a>
<a id="schema_RxLevel"></a>
<a id="tocSrxlevel"></a>
<a id="tocsrxlevel"></a>

```json
-77
```

Received Signal power (dBm). Power less than -110dBm should be mapped to -110. Power greater than -25dBm should be mapped to -25.

<h2 id="tocS_Sid">Sid</h2>
<!-- backwards compatibility -->
<a id="schemasid"></a>
<a id="schema_Sid"></a>
<a id="tocSsid"></a>
<a id="tocssid"></a>

```json
4162
```

System ID (SID)

<h2 id="tocS_Tac">Tac</h2>
<!-- backwards compatibility -->
<a id="schematac"></a>
<a id="schema_Tac"></a>
<a id="tocStac"></a>
<a id="tocstac"></a>

```json
1
```

Tracking Area Code (TAC)

<h2 id="tocS_Tdscdma">Tdscdma</h2>
<!-- backwards compatibility -->
<a id="schematdscdma"></a>
<a id="schema_Tdscdma"></a>
<a id="tocStdscdma"></a>
<a id="tocstdscdma"></a>

```json
{
  "cid": 18563770,
  "localId": {
    "cellParams": 56,
    "uarfcn": 10101
  },
  "mcc": 460,
  "mnc": 0,
  "nmr": [
    {
      "cellParams": 86,
      "uarfcn": 10100
    },
    {
      "cellParams": 14,
      "uarfcn": 10121
    }
  ]
}
```

TD-SCDMA measurement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cid|[UtranCid](#schemautrancid)|true|none|UTRAN Cell Identifier (UC-Id), 28 bits (12 bits RNC and 16 bits Cell ID). MCC + MNC + CID uniquely identifies the WCDMA cell, LAC is optional.<br>|
|lac|[Lac](#schemalac)|false|none|Location Area Code (LAC). Note, value 65534 is invalid.|
|localId|[TdscdmaLocalId](#schematdscdmalocalid)|false|none|Local identification parameters of TD-SCDMA serving cell|
|mcc|[Mcc](#schemamcc)|true|none|Mobile Country Code (MCC). Note: 0xx is for test networks, 1xx and 8xx are not used<br>|
|mnc|[Mnc](#schemamnc)|true|none|Mobile Network Code (MNC).|
|nmr|[TdscdmaNmrArray](#schematdscdmanmrarray)|false|none|TD-SCDMA Network measurements. Maximum of 8 distinct uarfcn frequencies.|
|pathloss|[Pathloss](#schemapathloss)|false|none|UTRAN pathloss (dBm)|
|rscp|[Rscp](#schemarscp)|false|none|Received Signal Code Power (RSCP) in dBm. Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.<br>|
|ta|[TdscdmaTimingAdvance](#schematdscdmatimingadvance)|false|none|Timing advance (TA). Round-Trip distance presented in the units of 4*c/7.68e6 ~156 meters. That is, the scaling factor is 4 times the chip length at chip rate of 7.68 Mchips/s. Note that at chip rates 1.28 Mchips/s and 3.84 Mchips/s you need to scale according to chip length of 7.68 Mchips/s, that is, multiply by 6 or 2 if needed.<br>|

<h2 id="tocS_TdscdmaLocalId">TdscdmaLocalId</h2>
<!-- backwards compatibility -->
<a id="schematdscdmalocalid"></a>
<a id="schema_TdscdmaLocalId"></a>
<a id="tocStdscdmalocalid"></a>
<a id="tocstdscdmalocalid"></a>

```json
{
  "cellParams": 56,
  "uarfcn": 10101
}
```

Local identification parameters of TD-SCDMA serving cell

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cellParams|[CellParams](#schemacellparams)|true|none|Cell Parameters ID (CDMA Spreading Code ID)|
|uarfcn|[Uarfcn](#schemauarfcn)|true|none|UTRAN Absolute Radio Frequency (U-ARFCN)|

<h2 id="tocS_TdscdmaNmr">TdscdmaNmr</h2>
<!-- backwards compatibility -->
<a id="schematdscdmanmr"></a>
<a id="schema_TdscdmaNmr"></a>
<a id="tocStdscdmanmr"></a>
<a id="tocstdscdmanmr"></a>

```json
{
  "cellParams": 86,
  "pathloss": 80,
  "rcsp": -50,
  "uarfcn": 10100
}
```

TD-SCDMA Network measurement

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cellParams|[CellParams](#schemacellparams)|true|none|Cell Parameters ID (CDMA Spreading Code ID)|
|cid|[UtranCid](#schemautrancid)|false|none|UTRAN Cell Identifier (UC-Id), 28 bits (12 bits RNC and 16 bits Cell ID). MCC + MNC + CID uniquely identifies the WCDMA cell, LAC is optional.<br>|
|pathloss|[Pathloss](#schemapathloss)|false|none|UTRAN pathloss (dBm)|
|rscp|[Rscp](#schemarscp)|false|none|Received Signal Code Power (RSCP) in dBm. Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.<br>|
|uarfcn|[Uarfcn](#schemauarfcn)|true|none|UTRAN Absolute Radio Frequency (U-ARFCN)|

<h2 id="tocS_TdscdmaNmrArray">TdscdmaNmrArray</h2>
<!-- backwards compatibility -->
<a id="schematdscdmanmrarray"></a>
<a id="schema_TdscdmaNmrArray"></a>
<a id="tocStdscdmanmrarray"></a>
<a id="tocstdscdmanmrarray"></a>

```json
[
  {
    "cellParams": 86,
    "uarfcn": 10100
  },
  {
    "cellParams": 14,
    "uarfcn": 10121
  }
]
```

TD-SCDMA Network measurements. Maximum of 8 distinct uarfcn frequencies.

<h2 id="tocS_TdscdmaTimingAdvance">TdscdmaTimingAdvance</h2>
<!-- backwards compatibility -->
<a id="schematdscdmatimingadvance"></a>
<a id="schema_TdscdmaTimingAdvance"></a>
<a id="tocStdscdmatimingadvance"></a>
<a id="tocstdscdmatimingadvance"></a>

```json
20
```

Timing advance (TA). Round-Trip distance presented in the units of 4*c/7.68e6 ~156 meters. That is, the scaling factor is 4 times the chip length at chip rate of 7.68 Mchips/s. Note that at chip rates 1.28 Mchips/s and 3.84 Mchips/s you need to scale according to chip length of 7.68 Mchips/s, that is, multiply by 6 or 2 if needed.

<h2 id="tocS_Uarfcn">Uarfcn</h2>
<!-- backwards compatibility -->
<a id="schemauarfcn"></a>
<a id="schema_Uarfcn"></a>
<a id="tocSuarfcn"></a>
<a id="tocsuarfcn"></a>

```json
10100
```

UTRAN Absolute Radio Frequency (U-ARFCN)

<h2 id="tocS_Uarfcndl">Uarfcndl</h2>
<!-- backwards compatibility -->
<a id="schemauarfcndl"></a>
<a id="schema_Uarfcndl"></a>
<a id="tocSuarfcndl"></a>
<a id="tocsuarfcndl"></a>

```json
10786
```

UTRAN Absolute Radio Frequency Downlink (UARFCN-DL)

<h2 id="tocS_UtranCid">UtranCid</h2>
<!-- backwards compatibility -->
<a id="schemautrancid"></a>
<a id="schema_UtranCid"></a>
<a id="tocSutrancid"></a>
<a id="tocsutrancid"></a>

```json
14674663
```

UTRAN Cell Identifier (UC-Id), 28 bits (12 bits RNC and 16 bits Cell ID). MCC + MNC + CID uniquely identifies the WCDMA cell, LAC is optional.

<h2 id="tocS_UtranCidNmr">UtranCidNmr</h2>
<!-- backwards compatibility -->
<a id="schemautrancidnmr"></a>
<a id="schema_UtranCidNmr"></a>
<a id="tocSutrancidnmr"></a>
<a id="tocsutrancidnmr"></a>

```json
14674662
```

UTRAN Cell Identifier (UC-Id), 28 bits (12 bits RNC and 16 bits Cell ID).

<h2 id="tocS_Wcdma">Wcdma</h2>
<!-- backwards compatibility -->
<a id="schemawcdma"></a>
<a id="schema_Wcdma"></a>
<a id="tocSwcdma"></a>
<a id="tocswcdma"></a>

```json
{
  "cid": 14674663,
  "localId": {
    "psc": 140,
    "uarfcndl": 10780
  },
  "mcc": 262,
  "mnc": 7,
  "nmr": [
    {
      "psc": 149,
      "uarfcndl": 10786
    },
    {
      "psc": 211,
      "uarfcndl": 10762
    }
  ]
}
```

WCDMA measurement

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cid|[UtranCid](#schemautrancid)|true|none|UTRAN Cell Identifier (UC-Id), 28 bits (12 bits RNC and 16 bits Cell ID). MCC + MNC + CID uniquely identifies the WCDMA cell, LAC is optional.<br>|
|lac|[Lac](#schemalac)|false|none|Location Area Code (LAC). Note, value 65534 is invalid.|
|localId|[WcdmaLocalId](#schemawcdmalocalid)|false|none|Local identification parameters of WCDMA serving cell|
|mcc|[Mcc](#schemamcc)|true|none|Mobile Country Code (MCC). Note: 0xx is for test networks, 1xx and 8xx are not used<br>|
|mnc|[Mnc](#schemamnc)|true|none|Mobile Network Code (MNC).|
|nmr|[WcdmaNmrArray](#schemawcdmanmrarray)|false|none|WCDMA Network measurements. Maximum of 8 distinct uarfcndl frequencies.|
|pathloss|[Pathloss](#schemapathloss)|false|none|UTRAN pathloss (dBm)|
|rscp|[Rscp](#schemarscp)|false|none|Received Signal Code Power (RSCP) in dBm. Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.<br>|

<h2 id="tocS_WcdmaLocalId">WcdmaLocalId</h2>
<!-- backwards compatibility -->
<a id="schemawcdmalocalid"></a>
<a id="schema_WcdmaLocalId"></a>
<a id="tocSwcdmalocalid"></a>
<a id="tocswcdmalocalid"></a>

```json
{
  "psc": 140,
  "uarfcndl": 10780
}
```

Local identification parameters of WCDMA serving cell

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|psc|[Psc](#schemapsc)|true|none|Primary Scrambling Code (PSC, Primary CPICH, Primary Control Pilot Channel).|
|uarfcndl|[Uarfcndl](#schemauarfcndl)|true|none|UTRAN Absolute Radio Frequency Downlink (UARFCN-DL)|

<h2 id="tocS_WcdmaNmr">WcdmaNmr</h2>
<!-- backwards compatibility -->
<a id="schemawcdmanmr"></a>
<a id="schema_WcdmaNmr"></a>
<a id="tocSwcdmanmr"></a>
<a id="tocswcdmanmr"></a>

```json
{
  "pathloss": 80,
  "psc": 149,
  "rcsp": -50,
  "uarfcndl": 10786
}
```

WCDMA Network measurement

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cid|[UtranCid](#schemautrancid)|false|none|UTRAN Cell Identifier (UC-Id), 28 bits (12 bits RNC and 16 bits Cell ID). MCC + MNC + CID uniquely identifies the WCDMA cell, LAC is optional.<br>|
|pathloss|[Pathloss](#schemapathloss)|false|none|UTRAN pathloss (dBm)|
|psc|[Psc](#schemapsc)|true|none|Primary Scrambling Code (PSC, Primary CPICH, Primary Control Pilot Channel).|
|rscp|[Rscp](#schemarscp)|false|none|Received Signal Code Power (RSCP) in dBm. Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.<br>|
|uarfcndl|[Uarfcndl](#schemauarfcndl)|true|none|UTRAN Absolute Radio Frequency Downlink (UARFCN-DL)|

<h2 id="tocS_WcdmaNmrArray">WcdmaNmrArray</h2>
<!-- backwards compatibility -->
<a id="schemawcdmanmrarray"></a>
<a id="schema_WcdmaNmrArray"></a>
<a id="tocSwcdmanmrarray"></a>
<a id="tocswcdmanmrarray"></a>

```json
[
  {
    "psc": 149,
    "uarfcndl": 10786
  },
  {
    "psc": 211,
    "uarfcndl": 10762
  }
]
```

WCDMA Network measurements. Maximum of 8 distinct uarfcndl frequencies.

<h2 id="tocS_WlanLocate">WlanLocate</h2>
<!-- backwards compatibility -->
<a id="schemawlanlocate"></a>
<a id="schema_WlanLocate"></a>
<a id="tocSwlanlocate"></a>
<a id="tocswlanlocate"></a>

```json
{
  "mac": "8C-1A-BF-20-66-AD"
}
```

WLAN measurement

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mac|string(regex)|true|none|The MAC address of the WLAN access point. MAC-48 address with colon (:) or hyphen (-) separators, upper or lower case hex digits. Note that if the SSID contains postfix "_nomap", the AP should not be used for positioning.<br>|
|rss|[Rss](#schemarss)|false|none|Received signal level (dBm) at the terminal|
