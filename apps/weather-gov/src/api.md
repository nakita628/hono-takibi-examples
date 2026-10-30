<h1 id="weathergov-api">weather.gov API v3.12.2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

weather.gov API

Base URLs:

* <a href="https://api.weather.gov">https://api.weather.gov</a> - Production server

<a href="https://www.weather.gov/documentation/services-web-api">Full API documentation</a>

# Authentication

* API Key (userAgent)
    - Parameter Name: **User-Agent**, in: header. We require that all consumers of the API include a User-Agent header in requests. This is due to a high number of scripts exhibiting abusive behavior (intentional or unintentional). We recommend setting the value to something that identifies your application and includes a contact email. This will help us contact you if we notice unusual behavior and also aid in troubleshooting issues.
The API remains open and free to use and there are no limits imposed based on the User-Agent string.
This mechanism will be replaced with a more typical API key system at a later date.

* API Key (apiKeyAuth)
    - Parameter Name: **API-Key**, in: header. We are testing including a more traditional API Key system on certain endpoints.  This is due to a large change in the weather.gov site.
The API remains open and free to use and there are no limits imposed based on the X-Api-Key string.

<h1 id="weathergov-api-default">Default</h1>

## alerts_query

<a id="opIdalerts_query"></a>

> Code samples

```bash
curl https://api.weather.gov/alerts \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /alerts`

Returns all alerts

<h3 id="alertsquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|active|query|boolean|false|**Deprecated.** List only active alerts (use /alerts/active endpoints instead)|
|start|query|string(date-time)|false|Start time|
|end|query|string(date-time)|false|End time|
|status|query|[string]|false|Status (actual, exercise, system, test, draft)|
|message_type|query|[string]|false|Message type (alert, update, cancel)|
|event|query|[string]|false|Event name|
|code|query|[string]|false|Event code|
|area|query|[[AreaCode](#schemaareacode)]|false|State/territory code or marine area code<br>This parameter is incompatible with the following parameters: point, region, region_type, zone<br>|
|point|query|[PointString](#schemapointstring)|false|Point (latitude,longitude)<br>This parameter is incompatible with the following parameters: area, region, region_type, zone<br>|
|region|query|[[MarineRegionCode](#schemamarineregioncode)]|false|Marine region code<br>This parameter is incompatible with the following parameters: area, point, region_type, zone<br>|
|region_type|query|string|false|Region type (land or marine)<br>This parameter is incompatible with the following parameters: area, point, region, zone<br>|
|zone|query|[[NWSZoneID](#schemanwszoneid)]|false|Zone ID (forecast or county)<br>This parameter is incompatible with the following parameters: area, point, region, region_type<br>|
|urgency|query|[[AlertUrgency](#schemaalerturgency)]|false|Urgency (immediate, expected, future, past, unknown)|
|severity|query|[[AlertSeverity](#schemaalertseverity)]|false|Severity (extreme, severe, moderate, minor, unknown)|
|certainty|query|[[AlertCertainty](#schemaalertcertainty)]|false|Certainty (observed, likely, possible, unlikely, unknown)|
|limit|query|integer|false|Limit|
|cursor|query|string|false|Pagination cursor|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|actual|
|status|exercise|
|status|system|
|status|test|
|status|draft|
|message_type|alert|
|message_type|update|
|message_type|cancel|
|region|AL|
|region|AT|
|region|GL|
|region|GM|
|region|PA|
|region|PI|
|region_type|land|
|region_type|marine|
|urgency|Immediate|
|urgency|Expected|
|urgency|Future|
|urgency|Past|
|urgency|Unknown|
|severity|Extreme|
|severity|Severe|
|severity|Moderate|
|severity|Minor|
|severity|Unknown|
|certainty|Observed|
|certainty|Likely|
|certainty|Possible|
|certainty|Unlikely|
|certainty|Unknown|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "id": "string",
        "areaDesc": "string",
        "geocode": {
          "UGC": [
            "string"
          ],
          "SAME": [
            "string"
          ]
        },
        "affectedZones": [
          "http://example.com"
        ],
        "references": [
          {
            "@id": "http://example.com",
            "identifier": "string",
            "sender": "string",
            "sent": "1970-01-01T00:00:00Z"
          }
        ],
        "sent": "1970-01-01T00:00:00Z",
        "effective": "1970-01-01T00:00:00Z",
        "onset": "1970-01-01T00:00:00Z",
        "expires": "1970-01-01T00:00:00Z",
        "ends": "1970-01-01T00:00:00Z",
        "status": "Actual",
        "messageType": "Alert",
        "category": "Met",
        "severity": "Extreme",
        "certainty": "Observed",
        "urgency": "Immediate",
        "event": "string",
        "sender": "string",
        "senderName": "string",
        "headline": "string",
        "description": "string",
        "instruction": "string",
        "note": "string",
        "response": "Shelter",
        "parameters": {
          "property1": [
            null
          ],
          "property2": [
            null
          ]
        },
        "scope": "Public",
        "code": "string",
        "language": "string",
        "web": "string",
        "eventCode": {
          "property1": [
            null
          ],
          "property2": [
            null
          ]
        }
      }
    }
  ],
  "title": "string",
  "updated": "1970-01-01T00:00:00Z",
  "pagination": {
    "next": "http://example.com"
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="alertsquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A collection of alerts.|[AlertCollectionGeoJson](#schemaalertcollectiongeojson)|
|301|Moved Permanently|Certain common queries may be redirected to discrete URLs|None|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## alerts_active

<a id="opIdalerts_active"></a>

> Code samples

```bash
curl https://api.weather.gov/alerts/active \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /alerts/active`

Returns all currently active alerts

<h3 id="alertsactive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|[string]|false|Status (actual, exercise, system, test, draft)|
|message_type|query|[string]|false|Message type (alert, update, cancel)|
|event|query|[string]|false|Event name|
|code|query|[string]|false|Event code|
|area|query|[[AreaCode](#schemaareacode)]|false|State/territory code or marine area code<br>This parameter is incompatible with the following parameters: point, region, region_type, zone<br>|
|point|query|[PointString](#schemapointstring)|false|Point (latitude,longitude)<br>This parameter is incompatible with the following parameters: area, region, region_type, zone<br>|
|region|query|[[MarineRegionCode](#schemamarineregioncode)]|false|Marine region code<br>This parameter is incompatible with the following parameters: area, point, region_type, zone<br>|
|region_type|query|string|false|Region type (land or marine)<br>This parameter is incompatible with the following parameters: area, point, region, zone<br>|
|zone|query|[[NWSZoneID](#schemanwszoneid)]|false|Zone ID (forecast or county)<br>This parameter is incompatible with the following parameters: area, point, region, region_type<br>|
|urgency|query|[[AlertUrgency](#schemaalerturgency)]|false|Urgency (immediate, expected, future, past, unknown)|
|severity|query|[[AlertSeverity](#schemaalertseverity)]|false|Severity (extreme, severe, moderate, minor, unknown)|
|certainty|query|[[AlertCertainty](#schemaalertcertainty)]|false|Certainty (observed, likely, possible, unlikely, unknown)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|actual|
|status|exercise|
|status|system|
|status|test|
|status|draft|
|message_type|alert|
|message_type|update|
|message_type|cancel|
|region|AL|
|region|AT|
|region|GL|
|region|GM|
|region|PA|
|region|PI|
|region_type|land|
|region_type|marine|
|urgency|Immediate|
|urgency|Expected|
|urgency|Future|
|urgency|Past|
|urgency|Unknown|
|severity|Extreme|
|severity|Severe|
|severity|Moderate|
|severity|Minor|
|severity|Unknown|
|certainty|Observed|
|certainty|Likely|
|certainty|Possible|
|certainty|Unlikely|
|certainty|Unknown|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "id": "string",
        "areaDesc": "string",
        "geocode": {
          "UGC": [
            "string"
          ],
          "SAME": [
            "string"
          ]
        },
        "affectedZones": [
          "http://example.com"
        ],
        "references": [
          {
            "@id": "http://example.com",
            "identifier": "string",
            "sender": "string",
            "sent": "1970-01-01T00:00:00Z"
          }
        ],
        "sent": "1970-01-01T00:00:00Z",
        "effective": "1970-01-01T00:00:00Z",
        "onset": "1970-01-01T00:00:00Z",
        "expires": "1970-01-01T00:00:00Z",
        "ends": "1970-01-01T00:00:00Z",
        "status": "Actual",
        "messageType": "Alert",
        "category": "Met",
        "severity": "Extreme",
        "certainty": "Observed",
        "urgency": "Immediate",
        "event": "string",
        "sender": "string",
        "senderName": "string",
        "headline": "string",
        "description": "string",
        "instruction": "string",
        "note": "string",
        "response": "Shelter",
        "parameters": {
          "property1": [
            null
          ],
          "property2": [
            null
          ]
        },
        "scope": "Public",
        "code": "string",
        "language": "string",
        "web": "string",
        "eventCode": {
          "property1": [
            null
          ],
          "property2": [
            null
          ]
        }
      }
    }
  ],
  "title": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="alertsactive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A collection of active alerts.|[ActiveAlertCollectionGeoJson](#schemaactivealertcollectiongeojson)|
|301|Moved Permanently|Certain common queries may be redirected to discrete URLs|None|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## alerts_active_count

<a id="opIdalerts_active_count"></a>

> Code samples

```bash
curl https://api.weather.gov/alerts/active/count \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /alerts/active/count`

Returns info on the number of active alerts

> Example responses

> 200 Response

```json
{
  "total": 0,
  "land": 0,
  "marine": 0,
  "regions": {
    "property1": 1,
    "property2": 1
  },
  "areas": {
    "property1": 1,
    "property2": 1
  },
  "zones": {
    "property1": 1,
    "property2": 1
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="alertsactivecount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A data structure showing the counts of active alerts broken down by various categories|Inline|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

<h3 id="alertsactivecount-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|The total number of active alerts|
|land|integer|false|none|The total number of active alerts affecting land zones|
|marine|integer|false|none|The total number of active alerts affecting marine zones|
|regions|object|false|none|Active alerts by marine region|
|» **additionalProperties**|integer|false|none|none|
|areas|object|false|none|Active alerts by area (state/territory)|
|» **additionalProperties**|integer|false|none|none|
|zones|object|false|none|Active alerts by NWS public zone or county code|
|» **additionalProperties**|integer|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## alerts_active_zone

<a id="opIdalerts_active_zone"></a>

> Code samples

```bash
curl https://api.weather.gov/alerts/active/zone/string \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /alerts/active/zone/{zoneId}`

Returns active alerts for the given NWS public zone or county

<h3 id="alertsactivezone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|zoneId|path|[NWSZoneID](#schemanwszoneid)|true|NWS public zone/county identifier|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "id": "string",
        "areaDesc": "string",
        "geocode": {
          "UGC": [
            "string"
          ],
          "SAME": [
            "string"
          ]
        },
        "affectedZones": [
          "http://example.com"
        ],
        "references": [
          {
            "@id": "http://example.com",
            "identifier": "string",
            "sender": "string",
            "sent": "1970-01-01T00:00:00Z"
          }
        ],
        "sent": "1970-01-01T00:00:00Z",
        "effective": "1970-01-01T00:00:00Z",
        "onset": "1970-01-01T00:00:00Z",
        "expires": "1970-01-01T00:00:00Z",
        "ends": "1970-01-01T00:00:00Z",
        "status": "Actual",
        "messageType": "Alert",
        "category": "Met",
        "severity": "Extreme",
        "certainty": "Observed",
        "urgency": "Immediate",
        "event": "string",
        "sender": "string",
        "senderName": "string",
        "headline": "string",
        "description": "string",
        "instruction": "string",
        "note": "string",
        "response": "Shelter",
        "parameters": {
          "property1": [
            null
          ],
          "property2": [
            null
          ]
        },
        "scope": "Public",
        "code": "string",
        "language": "string",
        "web": "string",
        "eventCode": {
          "property1": [
            null
          ],
          "property2": [
            null
          ]
        }
      }
    }
  ],
  "title": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="alertsactivezone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A collection of active alerts.|[ActiveAlertCollectionGeoJson](#schemaactivealertcollectiongeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## alerts_active_area

<a id="opIdalerts_active_area"></a>

> Code samples

```bash
curl https://api.weather.gov/alerts/active/area/AL \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /alerts/active/area/{area}`

Returns active alerts for the given area (state or marine area)

<h3 id="alertsactivearea-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|area|path|[AreaCode](#schemaareacode)|true|State/area ID|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "id": "string",
        "areaDesc": "string",
        "geocode": {
          "UGC": [
            "string"
          ],
          "SAME": [
            "string"
          ]
        },
        "affectedZones": [
          "http://example.com"
        ],
        "references": [
          {
            "@id": "http://example.com",
            "identifier": "string",
            "sender": "string",
            "sent": "1970-01-01T00:00:00Z"
          }
        ],
        "sent": "1970-01-01T00:00:00Z",
        "effective": "1970-01-01T00:00:00Z",
        "onset": "1970-01-01T00:00:00Z",
        "expires": "1970-01-01T00:00:00Z",
        "ends": "1970-01-01T00:00:00Z",
        "status": "Actual",
        "messageType": "Alert",
        "category": "Met",
        "severity": "Extreme",
        "certainty": "Observed",
        "urgency": "Immediate",
        "event": "string",
        "sender": "string",
        "senderName": "string",
        "headline": "string",
        "description": "string",
        "instruction": "string",
        "note": "string",
        "response": "Shelter",
        "parameters": {
          "property1": [
            null
          ],
          "property2": [
            null
          ]
        },
        "scope": "Public",
        "code": "string",
        "language": "string",
        "web": "string",
        "eventCode": {
          "property1": [
            null
          ],
          "property2": [
            null
          ]
        }
      }
    }
  ],
  "title": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="alertsactivearea-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A collection of active alerts.|[ActiveAlertCollectionGeoJson](#schemaactivealertcollectiongeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## alerts_active_region

<a id="opIdalerts_active_region"></a>

> Code samples

```bash
curl https://api.weather.gov/alerts/active/region/AL \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /alerts/active/region/{region}`

Returns active alerts for the given marine region

<h3 id="alertsactiveregion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|region|path|[MarineRegionCode](#schemamarineregioncode)|true|Marine region ID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|region|AL|
|region|AT|
|region|GL|
|region|GM|
|region|PA|
|region|PI|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "id": "string",
        "areaDesc": "string",
        "geocode": {
          "UGC": [
            "string"
          ],
          "SAME": [
            "string"
          ]
        },
        "affectedZones": [
          "http://example.com"
        ],
        "references": [
          {
            "@id": "http://example.com",
            "identifier": "string",
            "sender": "string",
            "sent": "1970-01-01T00:00:00Z"
          }
        ],
        "sent": "1970-01-01T00:00:00Z",
        "effective": "1970-01-01T00:00:00Z",
        "onset": "1970-01-01T00:00:00Z",
        "expires": "1970-01-01T00:00:00Z",
        "ends": "1970-01-01T00:00:00Z",
        "status": "Actual",
        "messageType": "Alert",
        "category": "Met",
        "severity": "Extreme",
        "certainty": "Observed",
        "urgency": "Immediate",
        "event": "string",
        "sender": "string",
        "senderName": "string",
        "headline": "string",
        "description": "string",
        "instruction": "string",
        "note": "string",
        "response": "Shelter",
        "parameters": {
          "property1": [
            null
          ],
          "property2": [
            null
          ]
        },
        "scope": "Public",
        "code": "string",
        "language": "string",
        "web": "string",
        "eventCode": {
          "property1": [
            null
          ],
          "property2": [
            null
          ]
        }
      }
    }
  ],
  "title": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="alertsactiveregion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A collection of active alerts.|[ActiveAlertCollectionGeoJson](#schemaactivealertcollectiongeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## alerts_types

<a id="opIdalerts_types"></a>

> Code samples

```bash
curl https://api.weather.gov/alerts/types \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /alerts/types`

Returns a list of alert types

> Example responses

> 200 Response

```json
{
  "eventTypes": [
    "string"
  ]
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="alertstypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of recognized event types|Inline|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

<h3 id="alertstypes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTypes|[string]|false|none|A list of recognized event types|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## alerts_single

<a id="opIdalerts_single"></a>

> Code samples

```bash
curl https://api.weather.gov/alerts/string \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /alerts/{id}`

Returns a specific alert

<h3 id="alertssingle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[AlertId](#schemaalertid)|true|Alert identifier|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "id": "string",
    "areaDesc": "string",
    "geocode": {
      "UGC": [
        "string"
      ],
      "SAME": [
        "string"
      ]
    },
    "affectedZones": [
      "http://example.com"
    ],
    "references": [
      {
        "@id": "http://example.com",
        "identifier": "string",
        "sender": "string",
        "sent": "1970-01-01T00:00:00Z"
      }
    ],
    "sent": "1970-01-01T00:00:00Z",
    "effective": "1970-01-01T00:00:00Z",
    "onset": "1970-01-01T00:00:00Z",
    "expires": "1970-01-01T00:00:00Z",
    "ends": "1970-01-01T00:00:00Z",
    "status": "Actual",
    "messageType": "Alert",
    "category": "Met",
    "severity": "Extreme",
    "certainty": "Observed",
    "urgency": "Immediate",
    "event": "string",
    "sender": "string",
    "senderName": "string",
    "headline": "string",
    "description": "string",
    "instruction": "string",
    "note": "string",
    "response": "Shelter",
    "parameters": {
      "property1": [
        null
      ],
      "property2": [
        null
      ]
    },
    "scope": "Public",
    "code": "string",
    "language": "string",
    "web": "string",
    "eventCode": {
      "property1": [
        null
      ],
      "property2": [
        null
      ]
    }
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="alertssingle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An alert record|[AlertGeoJson](#schemaalertgeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## cwsu

<a id="opIdcwsu"></a>

> Code samples

```bash
curl https://api.weather.gov/aviation/cwsus/ZAB \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /aviation/cwsus/{cwsuId}`

Returns metadata about a Center Weather Service Unit

<h3 id="cwsu-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cwsuId|path|[NWSCenterWeatherServiceUnitId](#schemanwscenterweatherserviceunitid)|true|NWS CWSU ID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|cwsuId|ZAB|
|cwsuId|ZAN|
|cwsuId|ZAU|
|cwsuId|ZBW|
|cwsuId|ZDC|
|cwsuId|ZDV|
|cwsuId|ZFA|
|cwsuId|ZFW|
|cwsuId|ZHU|
|cwsuId|ZID|
|cwsuId|ZJX|
|cwsuId|ZKC|
|cwsuId|ZLA|
|cwsuId|ZLC|
|cwsuId|ZMA|
|cwsuId|ZME|
|cwsuId|ZMP|
|cwsuId|ZNY|
|cwsuId|ZOA|
|cwsuId|ZOB|
|cwsuId|ZSE|
|cwsuId|ZTL|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "@type": "GovernmentOrganization",
  "@id": "http://example.com",
  "id": "string",
  "name": "string",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "postalCode": "string"
  },
  "telephone": "string",
  "faxNumber": "string",
  "email": "string",
  "sameAs": "http://example.com",
  "nwsRegion": "string",
  "parentOrganization": "http://example.com",
  "responsibleCounties": [
    "http://example.com"
  ],
  "responsibleForecastZones": [
    "http://example.com"
  ],
  "responsibleFireZones": [
    "http://example.com"
  ],
  "approvedObservationStations": [
    "http://example.com"
  ]
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="cwsu-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[Office](#schemaoffice)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## cwas

<a id="opIdcwas"></a>

> Code samples

```bash
curl https://api.weather.gov/aviation/cwsus/ZAB/cwas \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /aviation/cwsus/{cwsuId}/cwas`

Returns a list of Center Weather Advisories from a CWSU

<h3 id="cwas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cwsuId|path|[NWSCenterWeatherServiceUnitId](#schemanwscenterweatherserviceunitid)|true|NWS CWSU ID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|cwsuId|ZAB|
|cwsuId|ZAN|
|cwsuId|ZAU|
|cwsuId|ZBW|
|cwsuId|ZDC|
|cwsuId|ZDV|
|cwsuId|ZFA|
|cwsuId|ZFW|
|cwsuId|ZHU|
|cwsuId|ZID|
|cwsuId|ZJX|
|cwsuId|ZKC|
|cwsuId|ZLA|
|cwsuId|ZLC|
|cwsuId|ZMA|
|cwsuId|ZME|
|cwsuId|ZMP|
|cwsuId|ZNY|
|cwsuId|ZOA|
|cwsuId|ZOB|
|cwsuId|ZSE|
|cwsuId|ZTL|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "id": "string",
        "issueTime": "1970-01-01T00:00:00Z",
        "cwsu": "ZAB",
        "sequence": 101,
        "start": "1970-01-01T00:00:00Z",
        "end": "1970-01-01T00:00:00Z",
        "observedProperty": "string",
        "text": "string"
      }
    }
  ]
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="cwas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[CenterWeatherAdvisoryCollectionGeoJson](#schemacenterweatheradvisorycollectiongeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## cwa

<a id="opIdcwa"></a>

> Code samples

```bash
curl https://api.weather.gov/aviation/cwsus/ZAB/cwas/1970-01-01/100 \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /aviation/cwsus/{cwsuId}/cwas/{date}/{sequence}`

Returns a list of Center Weather Advisories from a CWSU

<h3 id="cwa-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cwsuId|path|[NWSCenterWeatherServiceUnitId](#schemanwscenterweatherserviceunitid)|true|NWS CWSU ID|
|date|path|[Date](#schemadate)|true|Date (YYYY-MM-DD format)|
|sequence|path|integer|true|Sequence number|

#### Enumerated Values

|Parameter|Value|
|---|---|
|cwsuId|ZAB|
|cwsuId|ZAN|
|cwsuId|ZAU|
|cwsuId|ZBW|
|cwsuId|ZDC|
|cwsuId|ZDV|
|cwsuId|ZFA|
|cwsuId|ZFW|
|cwsuId|ZHU|
|cwsuId|ZID|
|cwsuId|ZJX|
|cwsuId|ZKC|
|cwsuId|ZLA|
|cwsuId|ZLC|
|cwsuId|ZMA|
|cwsuId|ZME|
|cwsuId|ZMP|
|cwsuId|ZNY|
|cwsuId|ZOA|
|cwsuId|ZOB|
|cwsuId|ZSE|
|cwsuId|ZTL|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "id": "string",
    "issueTime": "1970-01-01T00:00:00Z",
    "cwsu": "ZAB",
    "sequence": 101,
    "start": "1970-01-01T00:00:00Z",
    "end": "1970-01-01T00:00:00Z",
    "observedProperty": "string",
    "text": "string"
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="cwa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[CenterWeatherAdvisoryGeoJson](#schemacenterweatheradvisorygeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## sigmetQuery

<a id="opIdsigmetQuery"></a>

> Code samples

```bash
curl https://api.weather.gov/aviation/sigmets \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /aviation/sigmets`

Returns a list of SIGMET/AIRMETs

<h3 id="sigmetquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|string(date-time)|false|Start time|
|end|query|string(date-time)|false|End time|
|date|query|[Date](#schemadate)|false|Date (YYYY-MM-DD format)|
|atsu|query|[ATSUIdentifier](#schemaatsuidentifier)|false|ATSU identifier|
|sequence|query|[SigmetSequenceNumber](#schemasigmetsequencenumber)|false|SIGMET sequence number|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "@context": [
        null
      ],
      "id": "http://example.com",
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ],
        "bbox": [
          0,
          0,
          0,
          0
        ]
      },
      "properties": {
        "id": "http://example.com",
        "issueTime": "1970-01-01T00:00:00Z",
        "fir": "string",
        "atsu": "string",
        "sequence": "string",
        "phenomenon": "http://example.com",
        "start": "1970-01-01T00:00:00Z",
        "end": "1970-01-01T00:00:00Z"
      }
    }
  ]
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="sigmetquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[SigmetCollectionGeoJson](#schemasigmetcollectiongeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## sigmetsByATSU

<a id="opIdsigmetsByATSU"></a>

> Code samples

```bash
curl https://api.weather.gov/aviation/sigmets/string \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /aviation/sigmets/{atsu}`

Returns a list of SIGMET/AIRMETs for the specified ATSU

<h3 id="sigmetsbyatsu-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|atsu|path|[ATSUIdentifier](#schemaatsuidentifier)|true|ATSU identifier|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "@context": [
        null
      ],
      "id": "http://example.com",
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ],
        "bbox": [
          0,
          0,
          0,
          0
        ]
      },
      "properties": {
        "id": "http://example.com",
        "issueTime": "1970-01-01T00:00:00Z",
        "fir": "string",
        "atsu": "string",
        "sequence": "string",
        "phenomenon": "http://example.com",
        "start": "1970-01-01T00:00:00Z",
        "end": "1970-01-01T00:00:00Z"
      }
    }
  ]
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="sigmetsbyatsu-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[SigmetCollectionGeoJson](#schemasigmetcollectiongeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## sigmetsByATSUByDate

<a id="opIdsigmetsByATSUByDate"></a>

> Code samples

```bash
curl https://api.weather.gov/aviation/sigmets/string/1970-01-01 \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /aviation/sigmets/{atsu}/{date}`

Returns a list of SIGMET/AIRMETs for the specified ATSU for the specified date

<h3 id="sigmetsbyatsubydate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|atsu|path|[ATSUIdentifier](#schemaatsuidentifier)|true|ATSU identifier|
|date|path|[Date](#schemadate)|true|Date (YYYY-MM-DD format)|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "@context": [
        null
      ],
      "id": "http://example.com",
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ],
        "bbox": [
          0,
          0,
          0,
          0
        ]
      },
      "properties": {
        "id": "http://example.com",
        "issueTime": "1970-01-01T00:00:00Z",
        "fir": "string",
        "atsu": "string",
        "sequence": "string",
        "phenomenon": "http://example.com",
        "start": "1970-01-01T00:00:00Z",
        "end": "1970-01-01T00:00:00Z"
      }
    }
  ]
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="sigmetsbyatsubydate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[SigmetCollectionGeoJson](#schemasigmetcollectiongeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## sigmet

<a id="opIdsigmet"></a>

> Code samples

```bash
curl https://api.weather.gov/aviation/sigmets/string/1970-01-01/string \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /aviation/sigmets/{atsu}/{date}/{time}`

Returns a specific SIGMET/AIRMET

<h3 id="sigmet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|atsu|path|[ATSUIdentifier](#schemaatsuidentifier)|true|ATSU identifier|
|date|path|[Date](#schemadate)|true|Date (YYYY-MM-DD format)|
|time|path|[Time](#schematime)|true|Time (HHMM format). This time is always specified in UTC (Zulu) time.|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "id": "http://example.com",
    "issueTime": "1970-01-01T00:00:00Z",
    "fir": "string",
    "atsu": "string",
    "sequence": "string",
    "phenomenon": "http://example.com",
    "start": "1970-01-01T00:00:00Z",
    "end": "1970-01-01T00:00:00Z"
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="sigmet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[SigmetGeoJson](#schemasigmetgeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## glossary

<a id="opIdglossary"></a>

> Code samples

```bash
curl https://api.weather.gov/glossary \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /glossary`

Returns glossary terms

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "glossary": [
    {
      "term": "string",
      "definition": "string"
    }
  ]
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="glossary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A set of glossary terms|Inline|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

<h3 id="glossary-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|glossary|[object]|false|none|A list of glossary terms|
|» term|string|false|none|The term being defined|
|» definition|string|false|none|A definition for the term|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## gridpoint

<a id="opIdgridpoint"></a>

> Code samples

```bash
curl https://api.weather.gov/gridpoints/AKQ/0,0 \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /gridpoints/{wfo}/{x},{y}`

Returns raw numerical forecast data for a 2.5km grid area

<h3 id="gridpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|wfo|path|[NWSForecastOfficeId](#schemanwsforecastofficeid)|true|Forecast office ID|
|x|path|integer|true|Forecast grid X coordinate|
|y|path|integer|true|Forecast grid Y coordinate|

#### Enumerated Values

|Parameter|Value|
|---|---|
|wfo|AKQ|
|wfo|ALY|
|wfo|BGM|
|wfo|BOX|
|wfo|BTV|
|wfo|BUF|
|wfo|CAE|
|wfo|CAR|
|wfo|CHS|
|wfo|CLE|
|wfo|CTP|
|wfo|GSP|
|wfo|GYX|
|wfo|ILM|
|wfo|ILN|
|wfo|LWX|
|wfo|MHX|
|wfo|OKX|
|wfo|PBZ|
|wfo|PHI|
|wfo|RAH|
|wfo|RLX|
|wfo|RNK|
|wfo|ABQ|
|wfo|AMA|
|wfo|BMX|
|wfo|BRO|
|wfo|CRP|
|wfo|EPZ|
|wfo|EWX|
|wfo|FFC|
|wfo|FWD|
|wfo|HGX|
|wfo|HUN|
|wfo|JAN|
|wfo|JAX|
|wfo|KEY|
|wfo|LCH|
|wfo|LIX|
|wfo|LUB|
|wfo|LZK|
|wfo|MAF|
|wfo|MEG|
|wfo|MFL|
|wfo|MLB|
|wfo|MOB|
|wfo|MRX|
|wfo|OHX|
|wfo|OUN|
|wfo|SHV|
|wfo|SJT|
|wfo|SJU|
|wfo|TAE|
|wfo|TBW|
|wfo|TSA|
|wfo|ABR|
|wfo|APX|
|wfo|ARX|
|wfo|BIS|
|wfo|BOU|
|wfo|CYS|
|wfo|DDC|
|wfo|DLH|
|wfo|DMX|
|wfo|DTX|
|wfo|DVN|
|wfo|EAX|
|wfo|FGF|
|wfo|FSD|
|wfo|GID|
|wfo|GJT|
|wfo|GLD|
|wfo|GRB|
|wfo|GRR|
|wfo|ICT|
|wfo|ILX|
|wfo|IND|
|wfo|IWX|
|wfo|JKL|
|wfo|LBF|
|wfo|LMK|
|wfo|LOT|
|wfo|LSX|
|wfo|MKX|
|wfo|MPX|
|wfo|MQT|
|wfo|OAX|
|wfo|PAH|
|wfo|PUB|
|wfo|RIW|
|wfo|SGF|
|wfo|TOP|
|wfo|UNR|
|wfo|BOI|
|wfo|BYZ|
|wfo|EKA|
|wfo|FGZ|
|wfo|GGW|
|wfo|HNX|
|wfo|LKN|
|wfo|LOX|
|wfo|MFR|
|wfo|MSO|
|wfo|MTR|
|wfo|OTX|
|wfo|PDT|
|wfo|PIH|
|wfo|PQR|
|wfo|PSR|
|wfo|REV|
|wfo|SEW|
|wfo|SGX|
|wfo|SLC|
|wfo|STO|
|wfo|TFX|
|wfo|TWC|
|wfo|VEF|
|wfo|AER|
|wfo|AFC|
|wfo|AFG|
|wfo|AJK|
|wfo|ALU|
|wfo|GUM|
|wfo|HPA|
|wfo|HFO|
|wfo|PPG|
|wfo|PQE|
|wfo|PQW|
|wfo|STU|
|wfo|NH1|
|wfo|NH2|
|wfo|ONA|
|wfo|ONP|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "@context": [
      null
    ],
    "geometry": "string",
    "@id": "http://example.com",
    "@type": "wx:Gridpoint",
    "updateTime": "1970-01-01T00:00:00Z",
    "validTimes": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
    "elevation": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "forecastOffice": "http://example.com",
    "gridId": "string",
    "gridX": 0,
    "gridY": 0,
    "weather": {
      "values": [
        {
          "validTime": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
          "value": [
            {
              "coverage": "areas",
              "weather": "blowing_dust",
              "intensity": "very_light",
              "visibility": {
                "value": 0,
                "maxValue": 0,
                "minValue": 0,
                "unitCode": "string",
                "qualityControl": "Z"
              },
              "attributes": [
                "damaging_wind"
              ]
            }
          ]
        }
      ]
    },
    "hazards": {
      "values": [
        {
          "validTime": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
          "value": [
            {
              "phenomenon": "string",
              "significance": "string",
              "event_number": 0
            }
          ]
        }
      ]
    },
    "property1": {
      "uom": "string",
      "values": [
        {
          "validTime": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
          "value": 0
        }
      ]
    },
    "property2": {
      "uom": "string",
      "values": [
        {
          "validTime": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
          "value": 0
        }
      ]
    }
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="gridpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gridpoint forecast data|[GridpointGeoJson](#schemagridpointgeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## gridpoint_forecast

<a id="opIdgridpoint_forecast"></a>

> Code samples

```bash
curl https://api.weather.gov/gridpoints/AKQ/0,0/forecast \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /gridpoints/{wfo}/{x},{y}/forecast`

Returns a textual forecast for a 2.5km grid area

<h3 id="gridpointforecast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Feature-Flags|header|[string]|false|Enable future and experimental features (see documentation for more info):<br>* forecast_temperature_qv: Represent temperature as QuantitativeValue<br>* forecast_wind_speed_qv: Represent wind speed as QuantitativeValue<br>|
|units|query|[GridpointForecastUnits](#schemagridpointforecastunits)|false|Use US customary or SI (metric) units in textual output|
|wfo|path|[NWSForecastOfficeId](#schemanwsforecastofficeid)|true|Forecast office ID|
|x|path|integer|true|Forecast grid X coordinate|
|y|path|integer|true|Forecast grid Y coordinate|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Feature-Flags|forecast_temperature_qv|
|Feature-Flags|forecast_wind_speed_qv|
|units|us|
|units|si|
|wfo|AKQ|
|wfo|ALY|
|wfo|BGM|
|wfo|BOX|
|wfo|BTV|
|wfo|BUF|
|wfo|CAE|
|wfo|CAR|
|wfo|CHS|
|wfo|CLE|
|wfo|CTP|
|wfo|GSP|
|wfo|GYX|
|wfo|ILM|
|wfo|ILN|
|wfo|LWX|
|wfo|MHX|
|wfo|OKX|
|wfo|PBZ|
|wfo|PHI|
|wfo|RAH|
|wfo|RLX|
|wfo|RNK|
|wfo|ABQ|
|wfo|AMA|
|wfo|BMX|
|wfo|BRO|
|wfo|CRP|
|wfo|EPZ|
|wfo|EWX|
|wfo|FFC|
|wfo|FWD|
|wfo|HGX|
|wfo|HUN|
|wfo|JAN|
|wfo|JAX|
|wfo|KEY|
|wfo|LCH|
|wfo|LIX|
|wfo|LUB|
|wfo|LZK|
|wfo|MAF|
|wfo|MEG|
|wfo|MFL|
|wfo|MLB|
|wfo|MOB|
|wfo|MRX|
|wfo|OHX|
|wfo|OUN|
|wfo|SHV|
|wfo|SJT|
|wfo|SJU|
|wfo|TAE|
|wfo|TBW|
|wfo|TSA|
|wfo|ABR|
|wfo|APX|
|wfo|ARX|
|wfo|BIS|
|wfo|BOU|
|wfo|CYS|
|wfo|DDC|
|wfo|DLH|
|wfo|DMX|
|wfo|DTX|
|wfo|DVN|
|wfo|EAX|
|wfo|FGF|
|wfo|FSD|
|wfo|GID|
|wfo|GJT|
|wfo|GLD|
|wfo|GRB|
|wfo|GRR|
|wfo|ICT|
|wfo|ILX|
|wfo|IND|
|wfo|IWX|
|wfo|JKL|
|wfo|LBF|
|wfo|LMK|
|wfo|LOT|
|wfo|LSX|
|wfo|MKX|
|wfo|MPX|
|wfo|MQT|
|wfo|OAX|
|wfo|PAH|
|wfo|PUB|
|wfo|RIW|
|wfo|SGF|
|wfo|TOP|
|wfo|UNR|
|wfo|BOI|
|wfo|BYZ|
|wfo|EKA|
|wfo|FGZ|
|wfo|GGW|
|wfo|HNX|
|wfo|LKN|
|wfo|LOX|
|wfo|MFR|
|wfo|MSO|
|wfo|MTR|
|wfo|OTX|
|wfo|PDT|
|wfo|PIH|
|wfo|PQR|
|wfo|PSR|
|wfo|REV|
|wfo|SEW|
|wfo|SGX|
|wfo|SLC|
|wfo|STO|
|wfo|TFX|
|wfo|TWC|
|wfo|VEF|
|wfo|AER|
|wfo|AFC|
|wfo|AFG|
|wfo|AJK|
|wfo|ALU|
|wfo|GUM|
|wfo|HPA|
|wfo|HFO|
|wfo|PPG|
|wfo|PQE|
|wfo|PQW|
|wfo|STU|
|wfo|NH1|
|wfo|NH2|
|wfo|ONA|
|wfo|ONP|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "@context": [
      null
    ],
    "geometry": "string",
    "units": "us",
    "forecastGenerator": "string",
    "generatedAt": "1970-01-01T00:00:00Z",
    "updateTime": "1970-01-01T00:00:00Z",
    "validTimes": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
    "elevation": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "periods": [
      {
        "number": 1,
        "name": "Tuesday Night",
        "startTime": "1970-01-01T00:00:00Z",
        "endTime": "1970-01-01T00:00:00Z",
        "isDaytime": true,
        "temperature": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "temperatureUnit": "F",
        "temperatureTrend": "rising",
        "probabilityOfPrecipitation": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windSpeed": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windGust": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windDirection": "N",
        "icon": "http://example.com",
        "shortForecast": "string",
        "detailedForecast": "string"
      }
    ]
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="gridpointforecast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A forecast for a gridpoint.|[Gridpoint12hForecastGeoJson](#schemagridpoint12hforecastgeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## gridpoint_forecast_hourly

<a id="opIdgridpoint_forecast_hourly"></a>

> Code samples

```bash
curl https://api.weather.gov/gridpoints/AKQ/0,0/forecast/hourly \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /gridpoints/{wfo}/{x},{y}/forecast/hourly`

Returns a textual hourly forecast for a 2.5km grid area

<h3 id="gridpointforecasthourly-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Feature-Flags|header|[string]|false|Enable future and experimental features (see documentation for more info):<br>* forecast_temperature_qv: Represent temperature as QuantitativeValue<br>* forecast_wind_speed_qv: Represent wind speed as QuantitativeValue<br>|
|units|query|[GridpointForecastUnits](#schemagridpointforecastunits)|false|Use US customary or SI (metric) units in textual output|
|wfo|path|[NWSForecastOfficeId](#schemanwsforecastofficeid)|true|Forecast office ID|
|x|path|integer|true|Forecast grid X coordinate|
|y|path|integer|true|Forecast grid Y coordinate|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Feature-Flags|forecast_temperature_qv|
|Feature-Flags|forecast_wind_speed_qv|
|units|us|
|units|si|
|wfo|AKQ|
|wfo|ALY|
|wfo|BGM|
|wfo|BOX|
|wfo|BTV|
|wfo|BUF|
|wfo|CAE|
|wfo|CAR|
|wfo|CHS|
|wfo|CLE|
|wfo|CTP|
|wfo|GSP|
|wfo|GYX|
|wfo|ILM|
|wfo|ILN|
|wfo|LWX|
|wfo|MHX|
|wfo|OKX|
|wfo|PBZ|
|wfo|PHI|
|wfo|RAH|
|wfo|RLX|
|wfo|RNK|
|wfo|ABQ|
|wfo|AMA|
|wfo|BMX|
|wfo|BRO|
|wfo|CRP|
|wfo|EPZ|
|wfo|EWX|
|wfo|FFC|
|wfo|FWD|
|wfo|HGX|
|wfo|HUN|
|wfo|JAN|
|wfo|JAX|
|wfo|KEY|
|wfo|LCH|
|wfo|LIX|
|wfo|LUB|
|wfo|LZK|
|wfo|MAF|
|wfo|MEG|
|wfo|MFL|
|wfo|MLB|
|wfo|MOB|
|wfo|MRX|
|wfo|OHX|
|wfo|OUN|
|wfo|SHV|
|wfo|SJT|
|wfo|SJU|
|wfo|TAE|
|wfo|TBW|
|wfo|TSA|
|wfo|ABR|
|wfo|APX|
|wfo|ARX|
|wfo|BIS|
|wfo|BOU|
|wfo|CYS|
|wfo|DDC|
|wfo|DLH|
|wfo|DMX|
|wfo|DTX|
|wfo|DVN|
|wfo|EAX|
|wfo|FGF|
|wfo|FSD|
|wfo|GID|
|wfo|GJT|
|wfo|GLD|
|wfo|GRB|
|wfo|GRR|
|wfo|ICT|
|wfo|ILX|
|wfo|IND|
|wfo|IWX|
|wfo|JKL|
|wfo|LBF|
|wfo|LMK|
|wfo|LOT|
|wfo|LSX|
|wfo|MKX|
|wfo|MPX|
|wfo|MQT|
|wfo|OAX|
|wfo|PAH|
|wfo|PUB|
|wfo|RIW|
|wfo|SGF|
|wfo|TOP|
|wfo|UNR|
|wfo|BOI|
|wfo|BYZ|
|wfo|EKA|
|wfo|FGZ|
|wfo|GGW|
|wfo|HNX|
|wfo|LKN|
|wfo|LOX|
|wfo|MFR|
|wfo|MSO|
|wfo|MTR|
|wfo|OTX|
|wfo|PDT|
|wfo|PIH|
|wfo|PQR|
|wfo|PSR|
|wfo|REV|
|wfo|SEW|
|wfo|SGX|
|wfo|SLC|
|wfo|STO|
|wfo|TFX|
|wfo|TWC|
|wfo|VEF|
|wfo|AER|
|wfo|AFC|
|wfo|AFG|
|wfo|AJK|
|wfo|ALU|
|wfo|GUM|
|wfo|HPA|
|wfo|HFO|
|wfo|PPG|
|wfo|PQE|
|wfo|PQW|
|wfo|STU|
|wfo|NH1|
|wfo|NH2|
|wfo|ONA|
|wfo|ONP|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "@context": [
      null
    ],
    "geometry": "string",
    "units": "us",
    "forecastGenerator": "string",
    "generatedAt": "1970-01-01T00:00:00Z",
    "updateTime": "1970-01-01T00:00:00Z",
    "validTimes": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
    "elevation": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "periods": [
      {
        "number": 1,
        "name": "Tuesday Night",
        "startTime": "1970-01-01T00:00:00Z",
        "endTime": "1970-01-01T00:00:00Z",
        "isDaytime": true,
        "temperature": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "temperatureUnit": "F",
        "temperatureTrend": "rising",
        "probabilityOfPrecipitation": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "dewpoint": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "relativeHumidity": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windSpeed": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windGust": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windDirection": "N",
        "icon": "http://example.com",
        "shortForecast": "string",
        "detailedForecast": "string"
      }
    ]
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="gridpointforecasthourly-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A forecast for a gridpoint.|[GridpointHourlyForecastGeoJson](#schemagridpointhourlyforecastgeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## gridpoint_stations

<a id="opIdgridpoint_stations"></a>

> Code samples

```bash
curl https://api.weather.gov/gridpoints/AKQ/0,0/stations \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /gridpoints/{wfo}/{x},{y}/stations`

Returns a list of observation stations usable for a given 2.5km grid area

<h3 id="gridpointstations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|wfo|path|[NWSForecastOfficeId](#schemanwsforecastofficeid)|true|Forecast office ID|
|x|path|integer|true|Forecast grid X coordinate|
|y|path|integer|true|Forecast grid Y coordinate|
|limit|query|integer|false|Limit|

#### Enumerated Values

|Parameter|Value|
|---|---|
|wfo|AKQ|
|wfo|ALY|
|wfo|BGM|
|wfo|BOX|
|wfo|BTV|
|wfo|BUF|
|wfo|CAE|
|wfo|CAR|
|wfo|CHS|
|wfo|CLE|
|wfo|CTP|
|wfo|GSP|
|wfo|GYX|
|wfo|ILM|
|wfo|ILN|
|wfo|LWX|
|wfo|MHX|
|wfo|OKX|
|wfo|PBZ|
|wfo|PHI|
|wfo|RAH|
|wfo|RLX|
|wfo|RNK|
|wfo|ABQ|
|wfo|AMA|
|wfo|BMX|
|wfo|BRO|
|wfo|CRP|
|wfo|EPZ|
|wfo|EWX|
|wfo|FFC|
|wfo|FWD|
|wfo|HGX|
|wfo|HUN|
|wfo|JAN|
|wfo|JAX|
|wfo|KEY|
|wfo|LCH|
|wfo|LIX|
|wfo|LUB|
|wfo|LZK|
|wfo|MAF|
|wfo|MEG|
|wfo|MFL|
|wfo|MLB|
|wfo|MOB|
|wfo|MRX|
|wfo|OHX|
|wfo|OUN|
|wfo|SHV|
|wfo|SJT|
|wfo|SJU|
|wfo|TAE|
|wfo|TBW|
|wfo|TSA|
|wfo|ABR|
|wfo|APX|
|wfo|ARX|
|wfo|BIS|
|wfo|BOU|
|wfo|CYS|
|wfo|DDC|
|wfo|DLH|
|wfo|DMX|
|wfo|DTX|
|wfo|DVN|
|wfo|EAX|
|wfo|FGF|
|wfo|FSD|
|wfo|GID|
|wfo|GJT|
|wfo|GLD|
|wfo|GRB|
|wfo|GRR|
|wfo|ICT|
|wfo|ILX|
|wfo|IND|
|wfo|IWX|
|wfo|JKL|
|wfo|LBF|
|wfo|LMK|
|wfo|LOT|
|wfo|LSX|
|wfo|MKX|
|wfo|MPX|
|wfo|MQT|
|wfo|OAX|
|wfo|PAH|
|wfo|PUB|
|wfo|RIW|
|wfo|SGF|
|wfo|TOP|
|wfo|UNR|
|wfo|BOI|
|wfo|BYZ|
|wfo|EKA|
|wfo|FGZ|
|wfo|GGW|
|wfo|HNX|
|wfo|LKN|
|wfo|LOX|
|wfo|MFR|
|wfo|MSO|
|wfo|MTR|
|wfo|OTX|
|wfo|PDT|
|wfo|PIH|
|wfo|PQR|
|wfo|PSR|
|wfo|REV|
|wfo|SEW|
|wfo|SGX|
|wfo|SLC|
|wfo|STO|
|wfo|TFX|
|wfo|TWC|
|wfo|VEF|
|wfo|AER|
|wfo|AFC|
|wfo|AFG|
|wfo|AJK|
|wfo|ALU|
|wfo|GUM|
|wfo|HPA|
|wfo|HFO|
|wfo|PPG|
|wfo|PQE|
|wfo|PQW|
|wfo|STU|
|wfo|NH1|
|wfo|NH2|
|wfo|ONA|
|wfo|ONP|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "@context": [
          null
        ],
        "geometry": "string",
        "@id": "http://example.com",
        "@type": "wx:ObservationStation",
        "elevation": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "stationIdentifier": "string",
        "name": "string",
        "timeZone": "string",
        "provider": "string",
        "subProvider": "string",
        "forecast": "http://example.com",
        "county": "http://example.com",
        "fireWeatherZone": "http://example.com",
        "distance": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "bearing": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        }
      }
    }
  ],
  "observationStations": [
    "http://example.com"
  ],
  "pagination": {
    "next": "http://example.com"
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="gridpointstations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A collection of observation stations.|[ObservationStationCollectionGeoJson](#schemaobservationstationcollectiongeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## icons

<a id="opIdicons"></a>

> Code samples

```bash
curl https://api.weather.gov/icons/string/string/string \
  -H 'Accept: application/problem+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /icons/{set}/{timeOfDay}/{first}`

<aside class="warning">
This operation is deprecated
</aside>

Returns a forecast icon. Icon services in API are deprecated.

<h3 id="icons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|set|path|string|true|.|
|timeOfDay|path|string|true|.|
|first|path|string|true|.|
|size|query|string \| integer|false|Font size|
|fontsize|query|integer|false|Font size|

> Example responses

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="icons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[BinaryFile](#schemabinaryfile)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## iconsDualCondition

<a id="opIdiconsDualCondition"></a>

> Code samples

```bash
curl https://api.weather.gov/icons/string/string/string/string \
  -H 'Accept: application/problem+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /icons/{set}/{timeOfDay}/{first}/{second}`

<aside class="warning">
This operation is deprecated
</aside>

Returns a forecast icon. Icon services in API are deprecated.

<h3 id="iconsdualcondition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|set|path|string|true|.|
|timeOfDay|path|string|true|.|
|first|path|string|true|.|
|second|path|string|true|.|
|size|query|string \| integer|false|Font size|
|fontsize|query|integer|false|Font size|

> Example responses

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="iconsdualcondition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[BinaryFile](#schemabinaryfile)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## icons_summary

<a id="opIdicons_summary"></a>

> Code samples

```bash
curl https://api.weather.gov/icons \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /icons`

<aside class="warning">
This operation is deprecated
</aside>

Returns a list of icon codes and textual descriptions. Icon services in API are deprecated.

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "icons": {
    "property1": {
      "description": "string"
    },
    "property2": {
      "description": "string"
    }
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="iconssummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

<h3 id="iconssummary-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|icons|object|true|none|none|
|» **additionalProperties**|object|false|none|none|
|» » description|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## satellite_thumbnails

<a id="opIdsatellite_thumbnails"></a>

> Code samples

```bash
curl https://api.weather.gov/thumbnails/satellite/a \
  -H 'Accept: application/problem+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /thumbnails/satellite/{area}`

<aside class="warning">
This operation is deprecated
</aside>

Returns a thumbnail image for a satellite region. Image services in API are deprecated.

<h3 id="satellitethumbnails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|area|path|string|true|.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|area|a|
|area|e|
|area|g|
|area|h|
|area|p|
|area|s|
|area|w|

> Example responses

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="satellitethumbnails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An image file|[BinaryFile](#schemabinaryfile)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## station_observation_list

<a id="opIdstation_observation_list"></a>

> Code samples

```bash
curl https://api.weather.gov/stations/string/observations \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /stations/{stationId}/observations`

Returns a list of observations for a given station

<h3 id="stationobservationlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|string(date-time)|false|Start time|
|end|query|string(date-time)|false|End time|
|cursor|query|string|false|Pagination cursor|
|limit|query|integer|false|Limit|
|stationId|path|string|true|Observation station ID|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "@context": [
          null
        ],
        "geometry": "string",
        "@id": "http://example.com",
        "@type": "wx:ObservationStation",
        "elevation": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "station": "http://example.com",
        "stationId": "string",
        "stationName": "string",
        "timestamp": "1970-01-01T00:00:00Z",
        "rawMessage": "string",
        "textDescription": "string",
        "icon": "http://example.com",
        "presentWeather": [
          {
            "intensity": "light",
            "modifier": "patches",
            "weather": "fog_mist",
            "rawString": "string",
            "inVicinity": true
          }
        ],
        "temperature": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "dewpoint": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windDirection": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windSpeed": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windGust": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "barometricPressure": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "seaLevelPressure": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "visibility": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "maxTemperatureLast24Hours": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "minTemperatureLast24Hours": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "precipitationLastHour": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "precipitationLast3Hours": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "precipitationLast6Hours": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "relativeHumidity": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windChill": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "heatIndex": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "cloudLayers": [
          {
            "base": {
              "value": 0,
              "maxValue": 0,
              "minValue": 0,
              "unitCode": "string",
              "qualityControl": "Z"
            },
            "amount": "OVC"
          }
        ]
      }
    }
  ],
  "pagination": {
    "next": "http://example.com"
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="stationobservationlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A collection of observation records.|[ObservationCollectionGeoJson](#schemaobservationcollectiongeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## station_observation_latest

<a id="opIdstation_observation_latest"></a>

> Code samples

```bash
curl https://api.weather.gov/stations/string/observations/latest \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /stations/{stationId}/observations/latest`

Returns the latest observation for a station

<h3 id="stationobservationlatest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|require_qc|query|boolean|false|Require QC|
|stationId|path|string|true|Observation station ID|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "@context": [
      null
    ],
    "geometry": "string",
    "@id": "http://example.com",
    "@type": "wx:ObservationStation",
    "elevation": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "station": "http://example.com",
    "stationId": "string",
    "stationName": "string",
    "timestamp": "1970-01-01T00:00:00Z",
    "rawMessage": "string",
    "textDescription": "string",
    "icon": "http://example.com",
    "presentWeather": [
      {
        "intensity": "light",
        "modifier": "patches",
        "weather": "fog_mist",
        "rawString": "string",
        "inVicinity": true
      }
    ],
    "temperature": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "dewpoint": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "windDirection": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "windSpeed": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "windGust": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "barometricPressure": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "seaLevelPressure": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "visibility": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "maxTemperatureLast24Hours": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "minTemperatureLast24Hours": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "precipitationLastHour": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "precipitationLast3Hours": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "precipitationLast6Hours": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "relativeHumidity": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "windChill": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "heatIndex": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "cloudLayers": [
      {
        "base": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "amount": "OVC"
      }
    ]
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="stationobservationlatest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An observation record.|[ObservationGeoJson](#schemaobservationgeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## station_observation_time

<a id="opIdstation_observation_time"></a>

> Code samples

```bash
curl https://api.weather.gov/stations/string/observations/1970-01-01T00%3A00%3A00Z \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /stations/{stationId}/observations/{time}`

Returns a single observation.

<h3 id="stationobservationtime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|time|path|string(date-time)|true|Timestamp of requested observation|
|stationId|path|string|true|Observation station ID|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "@context": [
      null
    ],
    "geometry": "string",
    "@id": "http://example.com",
    "@type": "wx:ObservationStation",
    "elevation": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "station": "http://example.com",
    "stationId": "string",
    "stationName": "string",
    "timestamp": "1970-01-01T00:00:00Z",
    "rawMessage": "string",
    "textDescription": "string",
    "icon": "http://example.com",
    "presentWeather": [
      {
        "intensity": "light",
        "modifier": "patches",
        "weather": "fog_mist",
        "rawString": "string",
        "inVicinity": true
      }
    ],
    "temperature": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "dewpoint": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "windDirection": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "windSpeed": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "windGust": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "barometricPressure": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "seaLevelPressure": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "visibility": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "maxTemperatureLast24Hours": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "minTemperatureLast24Hours": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "precipitationLastHour": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "precipitationLast3Hours": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "precipitationLast6Hours": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "relativeHumidity": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "windChill": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "heatIndex": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "cloudLayers": [
      {
        "base": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "amount": "OVC"
      }
    ]
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="stationobservationtime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An observation record.|[ObservationGeoJson](#schemaobservationgeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## tafs

<a id="opIdtafs"></a>

> Code samples

```bash
curl https://api.weather.gov/stations/string/tafs \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /stations/{stationId}/tafs`

Returns Terminal Aerodrome Forecasts for the specified airport station.

<h3 id="tafs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stationId|path|string|true|Observation station ID|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="tafs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## taf

<a id="opIdtaf"></a>

> Code samples

```bash
curl https://api.weather.gov/stations/string/tafs/1970-01-01/string \
  -H 'Accept: application/problem+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /stations/{stationId}/tafs/{date}/{time}`

Returns a single Terminal Aerodrome Forecast.

<h3 id="taf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stationId|path|string|true|Observation station ID|
|date|path|[Date](#schemadate)|true|Date (YYYY-MM-DD format)|
|time|path|[Time](#schematime)|true|Time (HHMM format). This time is always specified in UTC (Zulu) time.|

> Example responses

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="taf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## obs_stations

<a id="opIdobs_stations"></a>

> Code samples

```bash
curl https://api.weather.gov/stations \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /stations`

Returns a list of observation stations.

<h3 id="obsstations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Filter by observation station ID|
|state|query|[[AreaCode](#schemaareacode)]|false|Filter by state/marine area code|
|limit|query|integer|false|Limit|
|cursor|query|string|false|Pagination cursor|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "@context": [
          null
        ],
        "geometry": "string",
        "@id": "http://example.com",
        "@type": "wx:ObservationStation",
        "elevation": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "stationIdentifier": "string",
        "name": "string",
        "timeZone": "string",
        "provider": "string",
        "subProvider": "string",
        "forecast": "http://example.com",
        "county": "http://example.com",
        "fireWeatherZone": "http://example.com",
        "distance": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "bearing": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        }
      }
    }
  ],
  "observationStations": [
    "http://example.com"
  ],
  "pagination": {
    "next": "http://example.com"
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="obsstations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A collection of observation stations.|[ObservationStationCollectionGeoJson](#schemaobservationstationcollectiongeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## obs_station

<a id="opIdobs_station"></a>

> Code samples

```bash
curl https://api.weather.gov/stations/string \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /stations/{stationId}`

Returns metadata about a given observation station

<h3 id="obsstation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stationId|path|string|true|Observation station ID|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "@context": [
      null
    ],
    "geometry": "string",
    "@id": "http://example.com",
    "@type": "wx:ObservationStation",
    "elevation": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "stationIdentifier": "string",
    "name": "string",
    "timeZone": "string",
    "provider": "string",
    "subProvider": "string",
    "forecast": "http://example.com",
    "county": "http://example.com",
    "fireWeatherZone": "http://example.com",
    "distance": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "bearing": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    }
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="obsstation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[ObservationStationGeoJson](#schemaobservationstationgeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## office

<a id="opIdoffice"></a>

> Code samples

```bash
curl https://api.weather.gov/offices/AKQ \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /offices/{officeId}`

Returns metadata about a NWS forecast office

<h3 id="office-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|officeId|path|[NWSOfficeId](#schemanwsofficeid)|true|NWS office ID|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "@type": "GovernmentOrganization",
  "@id": "http://example.com",
  "id": "string",
  "name": "string",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "postalCode": "string"
  },
  "telephone": "string",
  "faxNumber": "string",
  "email": "string",
  "sameAs": "http://example.com",
  "nwsRegion": "string",
  "parentOrganization": "http://example.com",
  "responsibleCounties": [
    "http://example.com"
  ],
  "responsibleForecastZones": [
    "http://example.com"
  ],
  "responsibleFireZones": [
    "http://example.com"
  ],
  "approvedObservationStations": [
    "http://example.com"
  ]
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="office-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[Office](#schemaoffice)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## office_briefing

<a id="opIdoffice_briefing"></a>

> Code samples

```bash
curl https://api.weather.gov/offices/AKQ/briefing \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /offices/{officeId}/briefing`

Returns active briefing for an NWS office

<h3 id="officebriefing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|officeId|path|[NWSOfficeId](#schemanwsofficeid)|true|NWS office ID|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "startTime": "1970-01-01T00:00:00Z",
  "endTime": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z",
  "title": "string",
  "description": "string",
  "priority": true,
  "download": "http://example.com"
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="officebriefing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[NWSConnectDocumentMetadata](#schemanwsconnectdocumentmetadata)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## office_briefing_download_latest

<a id="opIdoffice_briefing_download_latest"></a>

> Code samples

```bash
curl https://api.weather.gov/offices/AKQ/briefing/download/latest \
  -H 'Accept: application/problem+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /offices/{officeId}/briefing/download/latest`

Returns the latest briefing for an office

<h3 id="officebriefingdownloadlatest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|officeId|path|[NWSOfficeId](#schemanwsofficeid)|true|NWS office ID|

> Example responses

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="officebriefingdownloadlatest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|success|None|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|302|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|302|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## office_briefing_download

<a id="opIdoffice_briefing_download"></a>

> Code samples

```bash
curl https://api.weather.gov/offices/AKQ/briefing/download/string \
  -H 'Accept: application/problem+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /offices/{officeId}/briefing/download/{briefingId}`

Returns a briefing for an office

<h3 id="officebriefingdownload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|officeId|path|[NWSOfficeId](#schemanwsofficeid)|true|NWS office ID|
|briefingId|path|string|true|.|

> Example responses

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="officebriefingdownload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[BinaryFile](#schemabinaryfile)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## office_headline

<a id="opIdoffice_headline"></a>

> Code samples

```bash
curl https://api.weather.gov/offices/AKQ/headlines/string \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /offices/{officeId}/headlines/{headlineId}`

Returns a specific news headline for a given NWS office

<h3 id="officeheadline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|officeId|path|[NWSOfficeId](#schemanwsofficeid)|true|NWS office ID|
|headlineId|path|string|true|Headline record ID|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "@id": "http://example.com",
  "id": "string",
  "office": "http://example.com",
  "important": true,
  "issuanceTime": "1970-01-01T00:00:00Z",
  "link": "http://example.com",
  "name": "string",
  "title": "string",
  "summary": "string",
  "content": "string"
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="officeheadline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[OfficeHeadline](#schemaofficeheadline)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## office_headlines

<a id="opIdoffice_headlines"></a>

> Code samples

```bash
curl https://api.weather.gov/offices/AKQ/headlines \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /offices/{officeId}/headlines`

Returns a list of news headlines for a given NWS office

<h3 id="officeheadlines-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|officeId|path|[NWSOfficeId](#schemanwsofficeid)|true|NWS office ID|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "@graph": [
    {
      "@context": [
        null
      ],
      "@id": "http://example.com",
      "id": "string",
      "office": "http://example.com",
      "important": true,
      "issuanceTime": "1970-01-01T00:00:00Z",
      "link": "http://example.com",
      "name": "string",
      "title": "string",
      "summary": "string",
      "content": "string"
    }
  ]
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="officeheadlines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[OfficeHeadlineCollection](#schemaofficeheadlinecollection)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## office_weatherstory

<a id="opIdoffice_weatherstory"></a>

> Code samples

```bash
curl https://api.weather.gov/offices/AKQ/weatherstories \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /offices/{officeId}/weatherstories`

Returns active weather stories for an NWS office

<h3 id="officeweatherstory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|officeId|path|[NWSOfficeId](#schemanwsofficeid)|true|NWS office ID|

> Example responses

> 200 Response

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "startTime": "1970-01-01T00:00:00Z",
    "endTime": "1970-01-01T00:00:00Z",
    "updateTime": "1970-01-01T00:00:00Z",
    "title": "string",
    "description": "string",
    "priority": true,
    "download": "http://example.com",
    "altText": "string",
    "order": 1
  }
]
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="officeweatherstory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[OfficeWeatherStoryCollection](#schemaofficeweatherstorycollection)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## office_weatherstory_image

<a id="opIdoffice_weatherstory_image"></a>

> Code samples

```bash
curl https://api.weather.gov/offices/AKQ/weatherstories/download/string \
  -H 'Accept: application/problem+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /offices/{officeId}/weatherstories/download/{imageId}`

Returns the image for a weather story

<h3 id="officeweatherstoryimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|officeId|path|[NWSOfficeId](#schemanwsofficeid)|true|NWS office ID|
|imageId|path|string|true|.|

> Example responses

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="officeweatherstoryimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[BinaryFile](#schemabinaryfile)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## point

<a id="opIdpoint"></a>

> Code samples

```bash
curl https://api.weather.gov/points/-90,-180 \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /points/{latitude},{longitude}`

Returns metadata about a given latitude/longitude point

<h3 id="point-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|latitude|path|number|true|Latitude|
|longitude|path|number|true|Longitude|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "@context": [
      null
    ],
    "geometry": "string",
    "@id": "http://example.com",
    "@type": "wx:Point",
    "cwa": "AKQ",
    "type": "land",
    "forecastOffice": "http://example.com",
    "gridId": "AKQ",
    "gridX": 0,
    "gridY": 0,
    "forecast": "http://example.com",
    "forecastHourly": "http://example.com",
    "forecastGridData": "http://example.com",
    "observationStations": "http://example.com",
    "relativeLocation": {
      "@context": [
        null
      ],
      "id": "http://example.com",
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ],
        "bbox": [
          0,
          0,
          0,
          0
        ]
      },
      "properties": {
        "city": "string",
        "state": "string",
        "distance": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "bearing": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        }
      }
    },
    "forecastZone": "http://example.com",
    "county": "http://example.com",
    "fireWeatherZone": "http://example.com",
    "timeZone": "string",
    "radarStation": "string",
    "astronomicalData": {
      "sunrise": "1970-01-01T00:00:00Z",
      "sunset": "1970-01-01T00:00:00Z",
      "transit": "1970-01-01T00:00:00Z",
      "civilTwilightBegin": "1970-01-01T00:00:00Z",
      "civilTwilightEnd": "1970-01-01T00:00:00Z",
      "nauticalTwilightBegin": "1970-01-01T00:00:00Z",
      "nauticalTwilightEnd": "1970-01-01T00:00:00Z",
      "astronomicalTwilightBegin": "1970-01-01T00:00:00Z",
      "astronomicalTwilightEnd": "1970-01-01T00:00:00Z"
    },
    "nwr": {
      "transmitter": "string",
      "sameCode": "string",
      "areaBroadcast": "http://example.com",
      "pointBroadcast": "http://example.com"
    }
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="point-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[PointGeoJson](#schemapointgeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## point_radio

<a id="opIdpoint_radio"></a>

> Code samples

```bash
curl https://api.weather.gov/points/-90,-180/radio \
  -H 'Accept: application/problem+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /points/{latitude},{longitude}/radio`

Returns NOAA Weather Radio broadcast script for a latitude/longitude point

<a href="https://www.w3.org/TR/speech-synthesis/">External documentation</a>

<h3 id="pointradio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|latitude|path|number|true|Latitude|
|longitude|path|number|true|Longitude|

> Example responses

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="pointradio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## point_stations

<a id="opIdpoint_stations"></a>

> Code samples

```bash
curl https://api.weather.gov/points/-90,-180/stations \
  -H 'Accept: application/problem+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /points/{latitude},{longitude}/stations`

<aside class="warning">
This operation is deprecated
</aside>

Returns a list of observation stations for a given point

<h3 id="pointstations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|latitude|path|number|true|Latitude|
|longitude|path|number|true|Longitude|

> Example responses

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="pointstations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|301|Moved Permanently|redirect to gridpoint stations|None|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## radar_servers

<a id="opIdradar_servers"></a>

> Code samples

```bash
curl https://api.weather.gov/radar/servers \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /radar/servers`

Returns a list of radar servers

<h3 id="radarservers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportingHost|query|string|false|Show records from specific reporting host|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="radarservers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Api-Key|string||A token that a client provides when making API calls.  Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## radar_server

<a id="opIdradar_server"></a>

> Code samples

```bash
curl https://api.weather.gov/radar/servers/string \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /radar/servers/{id}`

Returns metadata about a given radar server

<h3 id="radarserver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportingHost|query|string|false|Show records from specific reporting host|
|id|path|string|true|Server ID|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="radarserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## radar_spgds

<a id="opIdradar_spgds"></a>

> Code samples

```bash
curl https://api.weather.gov/radar/spgds \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /radar/spgds`

Returns a list of radar spgds

<h3 id="radarspgds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|published|query|[ISO8601Interval](#schemaiso8601interval)|false|Range for publish time|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="radarspgds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## radar_stations

<a id="opIdradar_stations"></a>

> Code samples

```bash
curl https://api.weather.gov/radar/stations \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /radar/stations`

Returns a list of radar stations

<h3 id="radarstations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stationType|query|[string]|false|Limit results to a specific station type or types|
|reportingHost|query|string|false|Show RDA and latency info from specific reporting host|
|host|query|string|false|Show latency info from specific LDM host|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="radarstations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## radar_station

<a id="opIdradar_station"></a>

> Code samples

```bash
curl https://api.weather.gov/radar/stations/string \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /radar/stations/{stationId}`

Returns metadata about a given radar station

<h3 id="radarstation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportingHost|query|string|false|Show RDA and latency info from specific reporting host|
|host|query|string|false|Show latency info from specific LDM host|
|stationId|path|string|true|Radar station ID|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="radarstation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## radar_station_alarms

<a id="opIdradar_station_alarms"></a>

> Code samples

```bash
curl https://api.weather.gov/radar/stations/string/alarms \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /radar/stations/{stationId}/alarms`

Returns metadata about a given radar station alarms

<h3 id="radarstationalarms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stationId|path|string|true|Radar station ID|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="radarstationalarms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## radar_queue

<a id="opIdradar_queue"></a>

> Code samples

```bash
curl https://api.weather.gov/radar/queues/rds \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /radar/queues/{host}`

Returns metadata about a given radar queue

<h3 id="radarqueue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Record limit|
|arrived|query|[ISO8601Interval](#schemaiso8601interval)|false|Range for arrival time|
|created|query|[ISO8601Interval](#schemaiso8601interval)|false|Range for creation time|
|published|query|[ISO8601Interval](#schemaiso8601interval)|false|Range for publish time|
|station|query|string|false|Station identifier|
|type|query|string|false|Record type|
|feed|query|string|false|Originating product feed|
|resolution|query|integer|false|Resolution version|
|host|path|string|true|LDM host|

#### Enumerated Values

|Parameter|Value|
|---|---|
|host|rds|
|host|tds|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="radarqueue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## radar_profiler

<a id="opIdradar_profiler"></a>

> Code samples

```bash
curl https://api.weather.gov/radar/profilers/string \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /radar/profilers/{stationId}`

Returns metadata about a given radar wind profiler

<h3 id="radarprofiler-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|time|query|[ISO8601Interval](#schemaiso8601interval)|false|Time interval|
|interval|query|[ISO8601Duration](#schemaiso8601duration)|false|Averaging interval|
|stationId|path|string|true|Profiler station ID|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="radarprofiler-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## transmitters

<a id="opIdtransmitters"></a>

> Code samples

```bash
curl https://api.weather.gov/radio \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /radio`

Returns a collection of transmitters

<a href="https://www.w3.org/TR/speech-synthesis/">External documentation</a>

<h3 id="transmitters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Pagination cursor|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="transmitters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## transmitter

<a id="opIdtransmitter"></a>

> Code samples

```bash
curl https://api.weather.gov/radio/string \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /radio/{callSign}`

Returns a single transmitter

<a href="https://www.w3.org/TR/speech-synthesis/">External documentation</a>

<h3 id="transmitter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|callSign|path|string|true|The call sign identifier for a NOAA transmitter station.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="transmitter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## area_radio

<a id="opIdarea_radio"></a>

> Code samples

```bash
curl https://api.weather.gov/radio/string/broadcast \
  -H 'Accept: application/problem+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /radio/{callSign}/broadcast`

Returns NOAA Weather Radio broadcast script for a transmitter

<a href="https://www.w3.org/TR/speech-synthesis/">External documentation</a>

<h3 id="arearadio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|callSign|path|string|true|The call sign identifier for a NOAA transmitter station.|

> Example responses

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="arearadio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## products_query

<a id="opIdproducts_query"></a>

> Code samples

```bash
curl https://api.weather.gov/products \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /products`

Returns a list of text products

<h3 id="productsquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location|query|[string]|false|Location id|
|start|query|string(date-time)|false|Start time|
|end|query|string(date-time)|false|End time|
|office|query|[string]|false|Issuing office|
|wmoid|query|[string]|false|WMO id code|
|type|query|[string]|false|Product code|
|limit|query|integer|false|Limit|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "@graph": [
    {
      "@context": [
        null
      ],
      "@id": "http://example.com",
      "id": "string",
      "wmoCollectiveId": "string",
      "issuingOffice": "string",
      "issuanceTime": "1970-01-01T00:00:00Z",
      "productCode": "string",
      "productName": "string",
      "productText": "string"
    }
  ]
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="productsquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[TextProductCollection](#schematextproductcollection)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## product_locations

<a id="opIdproduct_locations"></a>

> Code samples

```bash
curl https://api.weather.gov/products/locations \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /products/locations`

Returns a list of valid text product issuance locations

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "locations": {
    "property1": "string",
    "property2": "string"
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="productlocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[TextProductLocationCollection](#schematextproductlocationcollection)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## product_types

<a id="opIdproduct_types"></a>

> Code samples

```bash
curl https://api.weather.gov/products/types \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /products/types`

Returns a list of valid text product types and codes

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "@graph": [
    {
      "productCode": "string",
      "productName": "string"
    }
  ]
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="producttypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[TextProductTypeCollection](#schematextproducttypecollection)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## product

<a id="opIdproduct"></a>

> Code samples

```bash
curl https://api.weather.gov/products/string \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /products/{productId}`

Returns a specific text product

<h3 id="product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string|true|.|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "@id": "http://example.com",
  "id": "string",
  "wmoCollectiveId": "string",
  "issuingOffice": "string",
  "issuanceTime": "1970-01-01T00:00:00Z",
  "productCode": "string",
  "productName": "string",
  "productText": "string"
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[TextProduct](#schematextproduct)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## products_type

<a id="opIdproducts_type"></a>

> Code samples

```bash
curl https://api.weather.gov/products/types/string \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /products/types/{typeId}`

Returns a list of text products of a given type

<h3 id="productstype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|typeId|path|string|true|.|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "@graph": [
    {
      "@context": [
        null
      ],
      "@id": "http://example.com",
      "id": "string",
      "wmoCollectiveId": "string",
      "issuingOffice": "string",
      "issuanceTime": "1970-01-01T00:00:00Z",
      "productCode": "string",
      "productName": "string",
      "productText": "string"
    }
  ]
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="productstype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[TextProductCollection](#schematextproductcollection)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## products_type_locations

<a id="opIdproducts_type_locations"></a>

> Code samples

```bash
curl https://api.weather.gov/products/types/string/locations \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /products/types/{typeId}/locations`

Returns a list of valid text product issuance locations for a given product type

<h3 id="productstypelocations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|typeId|path|string|true|.|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "locations": {
    "property1": "string",
    "property2": "string"
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="productstypelocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[TextProductLocationCollection](#schematextproductlocationcollection)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## location_products

<a id="opIdlocation_products"></a>

> Code samples

```bash
curl https://api.weather.gov/products/locations/string/types \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /products/locations/{locationId}/types`

Returns a list of valid text product types for a given issuance location

<h3 id="locationproducts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locationId|path|string|true|.|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "@graph": [
    {
      "productCode": "string",
      "productName": "string"
    }
  ]
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="locationproducts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[TextProductTypeCollection](#schematextproducttypecollection)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## products_type_location

<a id="opIdproducts_type_location"></a>

> Code samples

```bash
curl https://api.weather.gov/products/types/string/locations/string \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /products/types/{typeId}/locations/{locationId}`

Returns a list of text products of a given type for a given issuance location

<h3 id="productstypelocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|typeId|path|string|true|.|
|locationId|path|string|true|.|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "@graph": [
    {
      "@context": [
        null
      ],
      "@id": "http://example.com",
      "id": "string",
      "wmoCollectiveId": "string",
      "issuingOffice": "string",
      "issuanceTime": "1970-01-01T00:00:00Z",
      "productCode": "string",
      "productName": "string",
      "productText": "string"
    }
  ]
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="productstypelocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[TextProductCollection](#schematextproductcollection)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## latest_product_type_location

<a id="opIdlatest_product_type_location"></a>

> Code samples

```bash
curl https://api.weather.gov/products/types/string/locations/string/latest \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /products/types/{typeId}/locations/{locationId}/latest`

Returns latest text products of a given type for a given issuance location with product text

<h3 id="latestproducttypelocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|typeId|path|string|true|.|
|locationId|path|string|true|.|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "@id": "http://example.com",
  "id": "string",
  "wmoCollectiveId": "string",
  "issuingOffice": "string",
  "issuanceTime": "1970-01-01T00:00:00Z",
  "productCode": "string",
  "productName": "string",
  "productText": "string"
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="latestproducttypelocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[TextProduct](#schematextproduct)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## zone_list

<a id="opIdzone_list"></a>

> Code samples

```bash
curl https://api.weather.gov/zones \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /zones`

Returns a list of zones

<h3 id="zonelist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[[NWSZoneID](#schemanwszoneid)]|false|Zone ID (forecast or county)|
|area|query|[[AreaCode](#schemaareacode)]|false|State/marine area code|
|region|query|[[RegionCode](#schemaregioncode)]|false|Region code|
|type|query|[[NWSZoneType](#schemanwszonetype)]|false|Zone type|
|point|query|[PointString](#schemapointstring)|false|Point (latitude,longitude)|
|include_geometry|query|boolean|false|Include geometry in results (true/false)|
|limit|query|integer|false|Limit|
|effective|query|string(date-time)|false|Effective date/time|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|land|
|type|marine|
|type|forecast|
|type|public|
|type|coastal|
|type|offshore|
|type|fire|
|type|county|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "@context": [
          null
        ],
        "geometry": "string",
        "@id": "http://example.com",
        "@type": "wx:Zone",
        "id": "string",
        "type": "land",
        "name": "string",
        "effectiveDate": "1970-01-01T00:00:00Z",
        "expirationDate": "1970-01-01T00:00:00Z",
        "state": "AL",
        "forecastOffice": "http://example.com",
        "gridIdentifier": "string",
        "awipsLocationIdentifier": "string",
        "cwa": [
          "AKQ"
        ],
        "forecastOffices": [
          "http://example.com"
        ],
        "timeZone": [
          "string"
        ],
        "observationStations": [
          "http://example.com"
        ],
        "radarStation": "string"
      }
    }
  ]
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="zonelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[ZoneCollectionGeoJson](#schemazonecollectiongeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## zone_list_type

<a id="opIdzone_list_type"></a>

> Code samples

```bash
curl https://api.weather.gov/zones/land \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /zones/{type}`

Returns a list of zones of a given type

<h3 id="zonelisttype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[[NWSZoneID](#schemanwszoneid)]|false|Zone ID (forecast or county)|
|area|query|[[AreaCode](#schemaareacode)]|false|State/marine area code|
|region|query|[[RegionCode](#schemaregioncode)]|false|Region code|
|type|query|[[NWSZoneType](#schemanwszonetype)]|false|Zone type|
|point|query|[PointString](#schemapointstring)|false|Point (latitude,longitude)|
|include_geometry|query|boolean|false|Include geometry in results (true/false)|
|limit|query|integer|false|Limit|
|effective|query|string(date-time)|false|Effective date/time|
|type|path|[NWSZoneType](#schemanwszonetype)|true|Zone type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|land|
|type|marine|
|type|forecast|
|type|public|
|type|coastal|
|type|offshore|
|type|fire|
|type|county|
|type|land|
|type|marine|
|type|forecast|
|type|public|
|type|coastal|
|type|offshore|
|type|fire|
|type|county|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "@context": [
          null
        ],
        "geometry": "string",
        "@id": "http://example.com",
        "@type": "wx:Zone",
        "id": "string",
        "type": "land",
        "name": "string",
        "effectiveDate": "1970-01-01T00:00:00Z",
        "expirationDate": "1970-01-01T00:00:00Z",
        "state": "AL",
        "forecastOffice": "http://example.com",
        "gridIdentifier": "string",
        "awipsLocationIdentifier": "string",
        "cwa": [
          "AKQ"
        ],
        "forecastOffices": [
          "http://example.com"
        ],
        "timeZone": [
          "string"
        ],
        "observationStations": [
          "http://example.com"
        ],
        "radarStation": "string"
      }
    }
  ]
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="zonelisttype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[ZoneCollectionGeoJson](#schemazonecollectiongeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## zone

<a id="opIdzone"></a>

> Code samples

```bash
curl https://api.weather.gov/zones/land/string \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /zones/{type}/{zoneId}`

Returns metadata about a given zone

<h3 id="zone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|effective|query|string(date-time)|false|Effective date/time|
|type|path|[NWSZoneType](#schemanwszonetype)|true|Zone type|
|zoneId|path|[NWSZoneID](#schemanwszoneid)|true|NWS public zone/county identifier|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|land|
|type|marine|
|type|forecast|
|type|public|
|type|coastal|
|type|offshore|
|type|fire|
|type|county|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "@context": [
      null
    ],
    "geometry": "string",
    "@id": "http://example.com",
    "@type": "wx:Zone",
    "id": "string",
    "type": "land",
    "name": "string",
    "effectiveDate": "1970-01-01T00:00:00Z",
    "expirationDate": "1970-01-01T00:00:00Z",
    "state": "AL",
    "forecastOffice": "http://example.com",
    "gridIdentifier": "string",
    "awipsLocationIdentifier": "string",
    "cwa": [
      "AKQ"
    ],
    "forecastOffices": [
      "http://example.com"
    ],
    "timeZone": [
      "string"
    ],
    "observationStations": [
      "http://example.com"
    ],
    "radarStation": "string"
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="zone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[ZoneGeoJson](#schemazonegeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## zone_forecast

<a id="opIdzone_forecast"></a>

> Code samples

```bash
curl https://api.weather.gov/zones/string/string/forecast \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /zones/{type}/{zoneId}/forecast`

Returns the current zone forecast for a given zone

<h3 id="zoneforecast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|Zone type|
|zoneId|path|[NWSZoneID](#schemanwszoneid)|true|NWS public zone/county identifier|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "@context": [
      null
    ],
    "geometry": "string",
    "zone": "http://example.com",
    "updated": "1970-01-01T00:00:00Z",
    "periods": [
      {
        "number": 0,
        "name": "This Afternoon",
        "detailedForecast": "string"
      }
    ]
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="zoneforecast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[ZoneForecastGeoJson](#schemazoneforecastgeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## transmitter_zone

<a id="opIdtransmitter_zone"></a>

> Code samples

```bash
curl https://api.weather.gov/zones/county/string/radio \
  -H 'Accept: application/ld+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /zones/{type}/{zoneId}/radio`

Returns transmitter object for a given zone

<h3 id="transmitterzone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|Must be value 'county'.|
|zoneId|path|[NWSZoneID](#schemanwszoneid)|true|NWS public zone/county identifier|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|county|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="transmitterzone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## zone_obs

<a id="opIdzone_obs"></a>

> Code samples

```bash
curl https://api.weather.gov/zones/forecast/string/observations \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /zones/forecast/{zoneId}/observations`

Returns a list of observations for a given zone

<h3 id="zoneobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|string(date-time)|false|Start date/time|
|end|query|string(date-time)|false|End date/time|
|limit|query|integer|false|Limit|
|zoneId|path|[NWSZoneID](#schemanwszoneid)|true|NWS public zone/county identifier|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "@context": [
          null
        ],
        "geometry": "string",
        "@id": "http://example.com",
        "@type": "wx:ObservationStation",
        "elevation": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "station": "http://example.com",
        "stationId": "string",
        "stationName": "string",
        "timestamp": "1970-01-01T00:00:00Z",
        "rawMessage": "string",
        "textDescription": "string",
        "icon": "http://example.com",
        "presentWeather": [
          {
            "intensity": "light",
            "modifier": "patches",
            "weather": "fog_mist",
            "rawString": "string",
            "inVicinity": true
          }
        ],
        "temperature": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "dewpoint": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windDirection": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windSpeed": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windGust": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "barometricPressure": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "seaLevelPressure": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "visibility": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "maxTemperatureLast24Hours": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "minTemperatureLast24Hours": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "precipitationLastHour": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "precipitationLast3Hours": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "precipitationLast6Hours": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "relativeHumidity": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windChill": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "heatIndex": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "cloudLayers": [
          {
            "base": {
              "value": 0,
              "maxValue": 0,
              "minValue": 0,
              "unitCode": "string",
              "qualityControl": "Z"
            },
            "amount": "OVC"
          }
        ]
      }
    }
  ],
  "pagination": {
    "next": "http://example.com"
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="zoneobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[ObservationCollectionGeoJson](#schemaobservationcollectiongeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

## zone_stations

<a id="opIdzone_stations"></a>

> Code samples

```bash
curl https://api.weather.gov/zones/forecast/string/stations \
  -H 'Accept: application/geo+json' \
  -H "User-Agent: ${API_KEY}"
```

`GET /zones/forecast/{zoneId}/stations`

Returns a list of observation stations for a given zone

<h3 id="zonestations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|zoneId|path|[NWSZoneID](#schemanwszoneid)|true|NWS public zone/county identifier|
|limit|query|integer|false|Limit|
|cursor|query|string|false|Pagination cursor|

> Example responses

> 200 Response

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "@context": [
          null
        ],
        "geometry": "string",
        "@id": "http://example.com",
        "@type": "wx:ObservationStation",
        "elevation": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "stationIdentifier": "string",
        "name": "string",
        "timeZone": "string",
        "provider": "string",
        "subProvider": "string",
        "forecast": "http://example.com",
        "county": "http://example.com",
        "fireWeatherZone": "http://example.com",
        "distance": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "bearing": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        }
      }
    }
  ],
  "observationStations": [
    "http://example.com"
  ],
  "pagination": {
    "next": "http://example.com"
  }
}
```

> default Response

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

<h3 id="zonestations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A collection of observation stations.|[ObservationStationCollectionGeoJson](#schemaobservationstationcollectiongeojson)|
|default|Default|An error response.|[ProblemDetail](#schemaproblemdetail)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|200|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Correlation-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Request-Id|string||A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|
|default|X-Server-Id|string||The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
userAgent, apiKeyAuth
</aside>

# Schemas

<h2 id="tocS_Alert">Alert</h2>
<!-- backwards compatibility -->
<a id="schemaalert"></a>
<a id="schema_Alert"></a>
<a id="tocSalert"></a>
<a id="tocsalert"></a>

```json
{
  "id": "string",
  "areaDesc": "string",
  "geocode": {
    "UGC": [
      "string"
    ],
    "SAME": [
      "string"
    ]
  },
  "affectedZones": [
    "http://example.com"
  ],
  "references": [
    {
      "@id": "http://example.com",
      "identifier": "string",
      "sender": "string",
      "sent": "1970-01-01T00:00:00Z"
    }
  ],
  "sent": "1970-01-01T00:00:00Z",
  "effective": "1970-01-01T00:00:00Z",
  "onset": "1970-01-01T00:00:00Z",
  "expires": "1970-01-01T00:00:00Z",
  "ends": "1970-01-01T00:00:00Z",
  "status": "Actual",
  "messageType": "Alert",
  "category": "Met",
  "severity": "Extreme",
  "certainty": "Observed",
  "urgency": "Immediate",
  "event": "string",
  "sender": "string",
  "senderName": "string",
  "headline": "string",
  "description": "string",
  "instruction": "string",
  "note": "string",
  "response": "Shelter",
  "parameters": {
    "property1": [
      null
    ],
    "property2": [
      null
    ]
  },
  "scope": "Public",
  "code": "string",
  "language": "string",
  "web": "string",
  "eventCode": {
    "property1": [
      null
    ],
    "property2": [
      null
    ]
  }
}
```

An object representing a public alert message.
Unless otherwise noted, the fields in this object correspond to the National Weather Service CAP v1.2 specification, which extends the OASIS Common Alerting Protocol (CAP) v1.2 specification and USA Integrated Public Alert and Warning System (IPAWS) Profile v1.0. Refer to this documentation for more complete information.
http://docs.oasis-open.org/emergency/cap/v1.2/CAP-v1.2-os.html http://docs.oasis-open.org/emergency/cap/v1.2/ipaws-profile/v1.0/cs01/cap-v1.2-ipaws-profile-cs01.html https://vlab.noaa.gov/web/nws-common-alerting-protocol/cap-documentation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[AlertId](#schemaalertid)|false|none|The identifier of the alert message.|
|areaDesc|string|false|none|A textual description of the area affected by the alert.|
|geocode|object|false|none|Lists of codes for NWS public zones and counties affected by the alert.|
|affectedZones|[string(uri)]|false|none|An array of API links for zones affected by the alert. This is an API-specific extension field and is not part of the CAP specification.<br>|
|references|[object]|false|none|A list of prior alerts that this alert updates or replaces.|
|sent|string(date-time)|false|none|The time of the origination of the alert message.|
|effective|string(date-time)|false|none|The effective time of the information of the alert message.|
|onset|string \| null(date-time)|false|none|The expected time of the beginning of the subject event of the alert message.|
|expires|string(date-time)|false|none|The expiry time of the information of the alert message.|
|ends|string \| null(date-time)|false|none|The expected end time of the subject event of the alert message.|
|status|[AlertStatus](#schemaalertstatus)|false|none|none|
|messageType|[AlertMessageType](#schemaalertmessagetype)|false|none|none|
|category|string|false|none|The code denoting the category of the subject event of the alert message.|
|severity|[AlertSeverity](#schemaalertseverity)|false|none|none|
|certainty|[AlertCertainty](#schemaalertcertainty)|false|none|none|
|urgency|[AlertUrgency](#schemaalerturgency)|false|none|none|
|event|string|false|none|The text denoting the type of the subject event of the alert message.|
|sender|string|false|none|Email address of the NWS webmaster.|
|senderName|string|false|none|The text naming the originator of the alert message.|
|headline|string \| null|false|none|The text headline of the alert message.|
|description|string|false|none|The text describing the subject event of the alert message.|
|instruction|string \| null|false|none|The text describing the recommended action to be taken by recipients of the alert message.<br>|
|note|string \| null|false|none|The text note accompanying the alert message. Per CAP spec, this should accompany alerts with a status of "Test".<br>|
|response|string|false|none|The code denoting the type of action recommended for the target audience.<br>This corresponds to responseType in the CAP specification.<br>|
|parameters|object|false|none|System-specific additional parameters associated with the alert message.<br>The keys in this object correspond to parameter definitions in the NWS CAP specification.<br>|
|scope|string|false|none|The code denoting the intended distribution of the alert message.|
|code|string|false|none|The code denoting the special handling of the alert message.|
|language|string|false|none|The code denoting the language of the info sub-element of the alert message.|
|web|string|false|none|The identifier of the hyperlink associating additional information within the alert message.|
|eventCode|object|false|none|System-specific code identifiying the event type of the alert message The keys in this object correspond to eventCode definitions in the NWS CAP specification.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Actual|
|status|Exercise|
|status|System|
|status|Test|
|status|Draft|
|messageType|Alert|
|messageType|Update|
|messageType|Cancel|
|messageType|Ack|
|messageType|Error|
|category|Met|
|category|Geo|
|category|Safety|
|category|Security|
|category|Rescue|
|category|Fire|
|category|Health|
|category|Env|
|category|Transport|
|category|Infra|
|category|CBRNE|
|category|Other|
|severity|Extreme|
|severity|Severe|
|severity|Moderate|
|severity|Minor|
|severity|Unknown|
|certainty|Observed|
|certainty|Likely|
|certainty|Possible|
|certainty|Unlikely|
|certainty|Unknown|
|urgency|Immediate|
|urgency|Expected|
|urgency|Future|
|urgency|Past|
|urgency|Unknown|
|response|Shelter|
|response|Evacuate|
|response|Prepare|
|response|Execute|
|response|Avoid|
|response|Monitor|
|response|Assess|
|response|AllClear|
|response|None|
|scope|Public|
|scope|Restricted|
|scope|Private|

<h2 id="tocS_ActiveAlertCollection">ActiveAlertCollection</h2>
<!-- backwards compatibility -->
<a id="schemaactivealertcollection"></a>
<a id="schema_ActiveAlertCollection"></a>
<a id="tocSactivealertcollection"></a>
<a id="tocsactivealertcollection"></a>

```json
{
  "title": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|A title describing the alert collection|
|updated|string(date-time)|false|none|The last time a change occurred to this collection|

<h2 id="tocS_AlertCollection">AlertCollection</h2>
<!-- backwards compatibility -->
<a id="schemaalertcollection"></a>
<a id="schema_AlertCollection"></a>
<a id="tocSalertcollection"></a>
<a id="tocsalertcollection"></a>

```json
{
  "title": "string",
  "updated": "1970-01-01T00:00:00Z",
  "pagination": {
    "next": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|A title describing the alert collection|
|updated|string(date-time)|false|none|The last time a change occurred to this collection|
|pagination|[PaginationInfo](#schemapaginationinfo)|false|none|Links for retrieving more data from paged data sets|

<h2 id="tocS_ActiveAlertCollectionGeoJson">ActiveAlertCollectionGeoJson</h2>
<!-- backwards compatibility -->
<a id="schemaactivealertcollectiongeojson"></a>
<a id="schema_ActiveAlertCollectionGeoJson"></a>
<a id="tocSactivealertcollectiongeojson"></a>
<a id="tocsactivealertcollectiongeojson"></a>

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "id": "string",
        "areaDesc": "string",
        "geocode": {
          "UGC": [
            "string"
          ],
          "SAME": [
            "string"
          ]
        },
        "affectedZones": [
          "http://example.com"
        ],
        "references": [
          {
            "@id": "http://example.com",
            "identifier": "string",
            "sender": "string",
            "sent": "1970-01-01T00:00:00Z"
          }
        ],
        "sent": "1970-01-01T00:00:00Z",
        "effective": "1970-01-01T00:00:00Z",
        "onset": "1970-01-01T00:00:00Z",
        "expires": "1970-01-01T00:00:00Z",
        "ends": "1970-01-01T00:00:00Z",
        "status": "Actual",
        "messageType": "Alert",
        "category": "Met",
        "severity": "Extreme",
        "certainty": "Observed",
        "urgency": "Immediate",
        "event": "string",
        "sender": "string",
        "senderName": "string",
        "headline": "string",
        "description": "string",
        "instruction": "string",
        "note": "string",
        "response": "Shelter",
        "parameters": {
          "property1": [
            null
          ],
          "property2": [
            null
          ]
        },
        "scope": "Public",
        "code": "string",
        "language": "string",
        "web": "string",
        "eventCode": {
          "property1": [
            null
          ],
          "property2": [
            null
          ]
        }
      }
    }
  ],
  "title": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|type|string|true|none|none|
|features|[[GeoJsonFeature](#schemageojsonfeature)]|true|none|none|
|features|[object]|true|none|none|
|title|string|false|none|A title describing the alert collection|
|updated|string(date-time)|false|none|The last time a change occurred to this collection|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FeatureCollection|

<h2 id="tocS_AlertCollectionGeoJson">AlertCollectionGeoJson</h2>
<!-- backwards compatibility -->
<a id="schemaalertcollectiongeojson"></a>
<a id="schema_AlertCollectionGeoJson"></a>
<a id="tocSalertcollectiongeojson"></a>
<a id="tocsalertcollectiongeojson"></a>

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "id": "string",
        "areaDesc": "string",
        "geocode": {
          "UGC": [
            "string"
          ],
          "SAME": [
            "string"
          ]
        },
        "affectedZones": [
          "http://example.com"
        ],
        "references": [
          {
            "@id": "http://example.com",
            "identifier": "string",
            "sender": "string",
            "sent": "1970-01-01T00:00:00Z"
          }
        ],
        "sent": "1970-01-01T00:00:00Z",
        "effective": "1970-01-01T00:00:00Z",
        "onset": "1970-01-01T00:00:00Z",
        "expires": "1970-01-01T00:00:00Z",
        "ends": "1970-01-01T00:00:00Z",
        "status": "Actual",
        "messageType": "Alert",
        "category": "Met",
        "severity": "Extreme",
        "certainty": "Observed",
        "urgency": "Immediate",
        "event": "string",
        "sender": "string",
        "senderName": "string",
        "headline": "string",
        "description": "string",
        "instruction": "string",
        "note": "string",
        "response": "Shelter",
        "parameters": {
          "property1": [
            null
          ],
          "property2": [
            null
          ]
        },
        "scope": "Public",
        "code": "string",
        "language": "string",
        "web": "string",
        "eventCode": {
          "property1": [
            null
          ],
          "property2": [
            null
          ]
        }
      }
    }
  ],
  "title": "string",
  "updated": "1970-01-01T00:00:00Z",
  "pagination": {
    "next": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|type|string|true|none|none|
|features|[[GeoJsonFeature](#schemageojsonfeature)]|true|none|none|
|features|[object]|true|none|none|
|title|string|false|none|A title describing the alert collection|
|updated|string(date-time)|false|none|The last time a change occurred to this collection|
|pagination|[PaginationInfo](#schemapaginationinfo)|false|none|Links for retrieving more data from paged data sets|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FeatureCollection|

<h2 id="tocS_ActiveAlertCollectionJsonLd">ActiveAlertCollectionJsonLd</h2>
<!-- backwards compatibility -->
<a id="schemaactivealertcollectionjsonld"></a>
<a id="schema_ActiveAlertCollectionJsonLd"></a>
<a id="tocSactivealertcollectionjsonld"></a>
<a id="tocsactivealertcollectionjsonld"></a>

```json
{
  "title": "string",
  "updated": "1970-01-01T00:00:00Z",
  "@context": [
    null
  ],
  "@graph": [
    {
      "id": "string",
      "areaDesc": "string",
      "geocode": {
        "UGC": [
          "string"
        ],
        "SAME": [
          "string"
        ]
      },
      "affectedZones": [
        "http://example.com"
      ],
      "references": [
        {
          "@id": "http://example.com",
          "identifier": "string",
          "sender": "string",
          "sent": "1970-01-01T00:00:00Z"
        }
      ],
      "sent": "1970-01-01T00:00:00Z",
      "effective": "1970-01-01T00:00:00Z",
      "onset": "1970-01-01T00:00:00Z",
      "expires": "1970-01-01T00:00:00Z",
      "ends": "1970-01-01T00:00:00Z",
      "status": "Actual",
      "messageType": "Alert",
      "category": "Met",
      "severity": "Extreme",
      "certainty": "Observed",
      "urgency": "Immediate",
      "event": "string",
      "sender": "string",
      "senderName": "string",
      "headline": "string",
      "description": "string",
      "instruction": "string",
      "note": "string",
      "response": "Shelter",
      "parameters": {
        "property1": [
          null
        ],
        "property2": [
          null
        ]
      },
      "scope": "Public",
      "code": "string",
      "language": "string",
      "web": "string",
      "eventCode": {
        "property1": [
          null
        ],
        "property2": [
          null
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|A title describing the alert collection|
|updated|string(date-time)|false|none|The last time a change occurred to this collection|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|@graph|[[Alert](#schemaalert)]|false|none|none|

<h2 id="tocS_AlertCollectionJsonLd">AlertCollectionJsonLd</h2>
<!-- backwards compatibility -->
<a id="schemaalertcollectionjsonld"></a>
<a id="schema_AlertCollectionJsonLd"></a>
<a id="tocSalertcollectionjsonld"></a>
<a id="tocsalertcollectionjsonld"></a>

```json
{
  "title": "string",
  "updated": "1970-01-01T00:00:00Z",
  "pagination": {
    "next": "http://example.com"
  },
  "@context": [
    null
  ],
  "@graph": [
    {
      "id": "string",
      "areaDesc": "string",
      "geocode": {
        "UGC": [
          "string"
        ],
        "SAME": [
          "string"
        ]
      },
      "affectedZones": [
        "http://example.com"
      ],
      "references": [
        {
          "@id": "http://example.com",
          "identifier": "string",
          "sender": "string",
          "sent": "1970-01-01T00:00:00Z"
        }
      ],
      "sent": "1970-01-01T00:00:00Z",
      "effective": "1970-01-01T00:00:00Z",
      "onset": "1970-01-01T00:00:00Z",
      "expires": "1970-01-01T00:00:00Z",
      "ends": "1970-01-01T00:00:00Z",
      "status": "Actual",
      "messageType": "Alert",
      "category": "Met",
      "severity": "Extreme",
      "certainty": "Observed",
      "urgency": "Immediate",
      "event": "string",
      "sender": "string",
      "senderName": "string",
      "headline": "string",
      "description": "string",
      "instruction": "string",
      "note": "string",
      "response": "Shelter",
      "parameters": {
        "property1": [
          null
        ],
        "property2": [
          null
        ]
      },
      "scope": "Public",
      "code": "string",
      "language": "string",
      "web": "string",
      "eventCode": {
        "property1": [
          null
        ],
        "property2": [
          null
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|A title describing the alert collection|
|updated|string(date-time)|false|none|The last time a change occurred to this collection|
|pagination|[PaginationInfo](#schemapaginationinfo)|false|none|Links for retrieving more data from paged data sets|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|@graph|[[Alert](#schemaalert)]|false|none|none|

<h2 id="tocS_AlertCap">AlertCap</h2>
<!-- backwards compatibility -->
<a id="schemaalertcap"></a>
<a id="schema_AlertCap"></a>
<a id="tocSalertcap"></a>
<a id="tocsalertcap"></a>

```json
{}
```

<h2 id="tocS_AlertGeoJson">AlertGeoJson</h2>
<!-- backwards compatibility -->
<a id="schemaalertgeojson"></a>
<a id="schema_AlertGeoJson"></a>
<a id="tocSalertgeojson"></a>
<a id="tocsalertgeojson"></a>

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "id": "string",
    "areaDesc": "string",
    "geocode": {
      "UGC": [
        "string"
      ],
      "SAME": [
        "string"
      ]
    },
    "affectedZones": [
      "http://example.com"
    ],
    "references": [
      {
        "@id": "http://example.com",
        "identifier": "string",
        "sender": "string",
        "sent": "1970-01-01T00:00:00Z"
      }
    ],
    "sent": "1970-01-01T00:00:00Z",
    "effective": "1970-01-01T00:00:00Z",
    "onset": "1970-01-01T00:00:00Z",
    "expires": "1970-01-01T00:00:00Z",
    "ends": "1970-01-01T00:00:00Z",
    "status": "Actual",
    "messageType": "Alert",
    "category": "Met",
    "severity": "Extreme",
    "certainty": "Observed",
    "urgency": "Immediate",
    "event": "string",
    "sender": "string",
    "senderName": "string",
    "headline": "string",
    "description": "string",
    "instruction": "string",
    "note": "string",
    "response": "Shelter",
    "parameters": {
      "property1": [
        null
      ],
      "property2": [
        null
      ]
    },
    "scope": "Public",
    "code": "string",
    "language": "string",
    "web": "string",
    "eventCode": {
      "property1": [
        null
      ],
      "property2": [
        null
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|id|string(uri)|false|none|none|
|type|string|true|none|none|
|geometry|[GeoJsonGeometry](#schemageojsongeometry)|true|none|A GeoJSON geometry object. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|properties|object|true|none|none|
|properties|[Alert](#schemaalert)|true|none|An object representing a public alert message.<br>Unless otherwise noted, the fields in this object correspond to the National Weather Service CAP v1.2 specification, which extends the OASIS Common Alerting Protocol (CAP) v1.2 specification and USA Integrated Public Alert and Warning System (IPAWS) Profile v1.0. Refer to this documentation for more complete information.<br>http://docs.oasis-open.org/emergency/cap/v1.2/CAP-v1.2-os.html http://docs.oasis-open.org/emergency/cap/v1.2/ipaws-profile/v1.0/cs01/cap-v1.2-ipaws-profile-cs01.html https://vlab.noaa.gov/web/nws-common-alerting-protocol/cap-documentation<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|

<h2 id="tocS_AlertJsonLd">AlertJsonLd</h2>
<!-- backwards compatibility -->
<a id="schemaalertjsonld"></a>
<a id="schema_AlertJsonLd"></a>
<a id="tocSalertjsonld"></a>
<a id="tocsalertjsonld"></a>

```json
{
  "@graph": [
    {
      "id": "string",
      "areaDesc": "string",
      "geocode": {
        "UGC": [
          "string"
        ],
        "SAME": [
          "string"
        ]
      },
      "affectedZones": [
        "http://example.com"
      ],
      "references": [
        {
          "@id": "http://example.com",
          "identifier": "string",
          "sender": "string",
          "sent": "1970-01-01T00:00:00Z"
        }
      ],
      "sent": "1970-01-01T00:00:00Z",
      "effective": "1970-01-01T00:00:00Z",
      "onset": "1970-01-01T00:00:00Z",
      "expires": "1970-01-01T00:00:00Z",
      "ends": "1970-01-01T00:00:00Z",
      "status": "Actual",
      "messageType": "Alert",
      "category": "Met",
      "severity": "Extreme",
      "certainty": "Observed",
      "urgency": "Immediate",
      "event": "string",
      "sender": "string",
      "senderName": "string",
      "headline": "string",
      "description": "string",
      "instruction": "string",
      "note": "string",
      "response": "Shelter",
      "parameters": {
        "property1": [
          null
        ],
        "property2": [
          null
        ]
      },
      "scope": "Public",
      "code": "string",
      "language": "string",
      "web": "string",
      "eventCode": {
        "property1": [
          null
        ],
        "property2": [
          null
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@graph|[[Alert](#schemaalert)]|false|none|none|

<h2 id="tocS_AlertId">AlertId</h2>
<!-- backwards compatibility -->
<a id="schemaalertid"></a>
<a id="schema_AlertId"></a>
<a id="tocSalertid"></a>
<a id="tocsalertid"></a>

```json
"string"
```

The identifier of the alert message.

<h2 id="tocS_AlertCertainty">AlertCertainty</h2>
<!-- backwards compatibility -->
<a id="schemaalertcertainty"></a>
<a id="schema_AlertCertainty"></a>
<a id="tocSalertcertainty"></a>
<a id="tocsalertcertainty"></a>

```json
"Observed"
```

<h2 id="tocS_AlertMessageType">AlertMessageType</h2>
<!-- backwards compatibility -->
<a id="schemaalertmessagetype"></a>
<a id="schema_AlertMessageType"></a>
<a id="tocSalertmessagetype"></a>
<a id="tocsalertmessagetype"></a>

```json
"Alert"
```

<h2 id="tocS_AlertSeverity">AlertSeverity</h2>
<!-- backwards compatibility -->
<a id="schemaalertseverity"></a>
<a id="schema_AlertSeverity"></a>
<a id="tocSalertseverity"></a>
<a id="tocsalertseverity"></a>

```json
"Extreme"
```

<h2 id="tocS_AlertStatus">AlertStatus</h2>
<!-- backwards compatibility -->
<a id="schemaalertstatus"></a>
<a id="schema_AlertStatus"></a>
<a id="tocSalertstatus"></a>
<a id="tocsalertstatus"></a>

```json
"Actual"
```

<h2 id="tocS_AlertUrgency">AlertUrgency</h2>
<!-- backwards compatibility -->
<a id="schemaalerturgency"></a>
<a id="schema_AlertUrgency"></a>
<a id="tocSalerturgency"></a>
<a id="tocsalerturgency"></a>

```json
"Immediate"
```

<h2 id="tocS_AlertAtomEntry">AlertAtomEntry</h2>
<!-- backwards compatibility -->
<a id="schemaalertatomentry"></a>
<a id="schema_AlertAtomEntry"></a>
<a id="tocSalertatomentry"></a>
<a id="tocsalertatomentry"></a>

```json
{
  "id": "string",
  "updated": "string",
  "published": "string",
  "author": {
    "name": "string"
  },
  "summary": "string",
  "event": "string",
  "sent": "string",
  "effective": "string",
  "expires": "string",
  "status": "string",
  "msgType": "string",
  "category": "string",
  "urgency": "string",
  "severity": "string",
  "certainty": "string",
  "areaDesc": "string",
  "polygon": "string",
  "geocode": [
    {
      "valueName": "string",
      "value": "string"
    }
  ],
  "parameter": [
    {
      "valueName": "string",
      "value": "string"
    }
  ]
}
```

An alert entry in an Atom feed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|updated|string|false|none|none|
|published|string|false|none|none|
|author|object|false|none|none|
|summary|string|false|none|none|
|event|string|false|none|none|
|sent|string|false|none|none|
|effective|string|false|none|none|
|expires|string|false|none|none|
|status|string|false|none|none|
|msgType|string|false|none|none|
|category|string|false|none|none|
|urgency|string|false|none|none|
|severity|string|false|none|none|
|certainty|string|false|none|none|
|areaDesc|string|false|none|none|
|polygon|string|false|none|none|
|geocode|[[AlertXMLParameter](#schemaalertxmlparameter)]|false|none|none|
|parameter|[[AlertXMLParameter](#schemaalertxmlparameter)]|false|none|none|

<h2 id="tocS_AlertXMLParameter">AlertXMLParameter</h2>
<!-- backwards compatibility -->
<a id="schemaalertxmlparameter"></a>
<a id="schema_AlertXMLParameter"></a>
<a id="tocSalertxmlparameter"></a>
<a id="tocsalertxmlparameter"></a>

```json
{
  "valueName": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|valueName|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_AlertAtomFeed">AlertAtomFeed</h2>
<!-- backwards compatibility -->
<a id="schemaalertatomfeed"></a>
<a id="schema_AlertAtomFeed"></a>
<a id="tocSalertatomfeed"></a>
<a id="tocsalertatomfeed"></a>

```json
{
  "id": "string",
  "generator": "string",
  "updated": "string",
  "author": {
    "name": "string"
  },
  "title": "string",
  "entry": [
    {
      "id": "string",
      "updated": "string",
      "published": "string",
      "author": {
        "name": "string"
      },
      "summary": "string",
      "event": "string",
      "sent": "string",
      "effective": "string",
      "expires": "string",
      "status": "string",
      "msgType": "string",
      "category": "string",
      "urgency": "string",
      "severity": "string",
      "certainty": "string",
      "areaDesc": "string",
      "polygon": "string",
      "geocode": [
        {
          "valueName": "string",
          "value": "string"
        }
      ],
      "parameter": [
        {
          "valueName": "string",
          "value": "string"
        }
      ]
    }
  ]
}
```

An alert feed in Atom format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|generator|string|false|none|none|
|updated|string|false|none|none|
|author|object|false|none|none|
|title|string|false|none|none|
|entry|[[AlertAtomEntry](#schemaalertatomentry)]|false|none|none|

<h2 id="tocS_AreaCode">AreaCode</h2>
<!-- backwards compatibility -->
<a id="schemaareacode"></a>
<a id="schema_AreaCode"></a>
<a id="tocSareacode"></a>
<a id="tocsareacode"></a>

```json
"AL"
```

State/territory codes and marine area codes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[StateTerritoryCode](#schemastateterritorycode)|false|none|none|
|*oneOf*|[MarineAreaCode](#schemamarineareacode)|false|none|Marine area code as defined in NWS Directive 10-302:<br>* AM: Western North Atlantic Ocean and along U.S. East Coast south of Currituck Beach Light NC following the coastline into Gulf of Mexico to Ocean Reef FL including the Caribbean<br>* AN: Western North Atlantic Ocean and along U.S. East Coast from Canadian border south to Currituck Beach Light NC<br>* GM: Gulf of Mexico and along the U.S. Gulf Coast from the Mexican border to Ocean Reef FL<br>* LC: Lake St. Clair<br>* LE: Lake Erie<br>* LH: Lake Huron<br>* LM: Lake Michigan<br>* LO: Lake Ontario<br>* LS: Lake Superior<br>* PH: Central Pacific Ocean including Hawaiian waters<br>* PK: North Pacific Ocean near Alaska and along Alaska coastline including the Bering Sea and the Gulf of Alaska<br>* PM: Western Pacific Ocean including Mariana Island waters<br>* PS: South Central Pacific Ocean including American Samoa waters<br>* PZ: Eastern North Pacific Ocean and along U.S. West Coast from Canadian border to Mexican border<br>* SL: St. Lawrence River above St. Regis<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|AL|
|*oneOf*|AK|
|*oneOf*|AS|
|*oneOf*|AR|
|*oneOf*|AZ|
|*oneOf*|CA|
|*oneOf*|CO|
|*oneOf*|CT|
|*oneOf*|DE|
|*oneOf*|DC|
|*oneOf*|FL|
|*oneOf*|GA|
|*oneOf*|GU|
|*oneOf*|HI|
|*oneOf*|ID|
|*oneOf*|IL|
|*oneOf*|IN|
|*oneOf*|IA|
|*oneOf*|KS|
|*oneOf*|KY|
|*oneOf*|LA|
|*oneOf*|ME|
|*oneOf*|MD|
|*oneOf*|MA|
|*oneOf*|MI|
|*oneOf*|MN|
|*oneOf*|MS|
|*oneOf*|MO|
|*oneOf*|MT|
|*oneOf*|NE|
|*oneOf*|NV|
|*oneOf*|NH|
|*oneOf*|NJ|
|*oneOf*|NM|
|*oneOf*|NY|
|*oneOf*|NC|
|*oneOf*|ND|
|*oneOf*|OH|
|*oneOf*|OK|
|*oneOf*|OR|
|*oneOf*|PA|
|*oneOf*|PR|
|*oneOf*|RI|
|*oneOf*|SC|
|*oneOf*|SD|
|*oneOf*|TN|
|*oneOf*|TX|
|*oneOf*|UT|
|*oneOf*|VT|
|*oneOf*|VI|
|*oneOf*|VA|
|*oneOf*|WA|
|*oneOf*|WV|
|*oneOf*|WI|
|*oneOf*|WY|
|*oneOf*|MP|
|*oneOf*|PW|
|*oneOf*|FM|
|*oneOf*|MH|
|*oneOf*|AM|
|*oneOf*|AN|
|*oneOf*|GM|
|*oneOf*|LC|
|*oneOf*|LE|
|*oneOf*|LH|
|*oneOf*|LM|
|*oneOf*|LO|
|*oneOf*|LS|
|*oneOf*|PH|
|*oneOf*|PK|
|*oneOf*|PM|
|*oneOf*|PS|
|*oneOf*|PZ|
|*oneOf*|SL|

<h2 id="tocS_AstronomicalData">AstronomicalData</h2>
<!-- backwards compatibility -->
<a id="schemaastronomicaldata"></a>
<a id="schema_AstronomicalData"></a>
<a id="tocSastronomicaldata"></a>
<a id="tocsastronomicaldata"></a>

```json
{
  "sunrise": "1970-01-01T00:00:00Z",
  "sunset": "1970-01-01T00:00:00Z",
  "transit": "1970-01-01T00:00:00Z",
  "civilTwilightBegin": "1970-01-01T00:00:00Z",
  "civilTwilightEnd": "1970-01-01T00:00:00Z",
  "nauticalTwilightBegin": "1970-01-01T00:00:00Z",
  "nauticalTwilightEnd": "1970-01-01T00:00:00Z",
  "astronomicalTwilightBegin": "1970-01-01T00:00:00Z",
  "astronomicalTwilightEnd": "1970-01-01T00:00:00Z"
}
```

An object representing sunrise, sunset, and twilight information for a location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sunrise|string(date-time) \| null|false|none|The timestamp of sunrise, defined as when the sun angle is 90°35' from vertical.<br>|
|sunset|string(date-time) \| null|false|none|The timestamp of sunset, defined as when the sun angle is 90°35' from vertical.<br>|
|transit|string(date-time) \| null|false|none|The timestamp when the sun reaches its zenith.<br>|
|civilTwilightBegin|string(date-time) \| null|false|none|The timestamp of the onset of civil twilight, defined as when the sun angle is 96° from vertical. This is the beginning of civil dawn and lasts until sunrise.<br>|
|civilTwilightEnd|string(date-time) \| null|false|none|The timestamp of the end of civil twilight, defined as when the sun angle is 96° from vertical. This is the end of civil dusk, which begins at sunset.<br>|
|nauticalTwilightBegin|string(date-time) \| null|false|none|The timestamp of the onset of nautical twilight, defined as when the sun angle is 102° from vertical. This is the beginning of nautical dawn and lasts until the civil dawn.<br>|
|nauticalTwilightEnd|string(date-time) \| null|false|none|The timestamp of the end of nautical twilight, defined as when the sun angle is 102° from vertical. This is the end of nautical dusk, which begins at the end of civil twilight.<br>|
|astronomicalTwilightBegin|string(date-time) \| null|false|none|The timestamp of the onset of astronomical twilight, defined as when the sun angle is 108° from vertical. This is the beginning of astronomical dawn and lasts until the nautical dawn.<br>|
|astronomicalTwilightEnd|string(date-time) \| null|false|none|The timestamp of the end of astronomical twilight, defined as when the sun angle is 108° from vertical. This is the end of astronomical dusk, which begins at the end of nautical twilight.<br>|

<h2 id="tocS_ATSUIdentifier">ATSUIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaatsuidentifier"></a>
<a id="schema_ATSUIdentifier"></a>
<a id="tocSatsuidentifier"></a>
<a id="tocsatsuidentifier"></a>

```json
"string"
```

ATSU Identifier

<h2 id="tocS_BinaryFile">BinaryFile</h2>
<!-- backwards compatibility -->
<a id="schemabinaryfile"></a>
<a id="schema_BinaryFile"></a>
<a id="tocSbinaryfile"></a>
<a id="tocsbinaryfile"></a>

```json
"string"
```

<h2 id="tocS_CenterWeatherAdvisoryCollectionGeoJson">CenterWeatherAdvisoryCollectionGeoJson</h2>
<!-- backwards compatibility -->
<a id="schemacenterweatheradvisorycollectiongeojson"></a>
<a id="schema_CenterWeatherAdvisoryCollectionGeoJson"></a>
<a id="tocScenterweatheradvisorycollectiongeojson"></a>
<a id="tocscenterweatheradvisorycollectiongeojson"></a>

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "id": "string",
        "issueTime": "1970-01-01T00:00:00Z",
        "cwsu": "ZAB",
        "sequence": 101,
        "start": "1970-01-01T00:00:00Z",
        "end": "1970-01-01T00:00:00Z",
        "observedProperty": "string",
        "text": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|type|string|true|none|none|
|features|[[GeoJsonFeature](#schemageojsonfeature)]|true|none|none|
|features|[object]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FeatureCollection|

<h2 id="tocS_CenterWeatherAdvisoryGeoJson">CenterWeatherAdvisoryGeoJson</h2>
<!-- backwards compatibility -->
<a id="schemacenterweatheradvisorygeojson"></a>
<a id="schema_CenterWeatherAdvisoryGeoJson"></a>
<a id="tocScenterweatheradvisorygeojson"></a>
<a id="tocscenterweatheradvisorygeojson"></a>

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "id": "string",
    "issueTime": "1970-01-01T00:00:00Z",
    "cwsu": "ZAB",
    "sequence": 101,
    "start": "1970-01-01T00:00:00Z",
    "end": "1970-01-01T00:00:00Z",
    "observedProperty": "string",
    "text": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|id|string(uri)|false|none|none|
|type|string|true|none|none|
|geometry|[GeoJsonGeometry](#schemageojsongeometry)|true|none|A GeoJSON geometry object. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|properties|object|true|none|none|
|properties|[CenterWeatherAdvisory](#schemacenterweatheradvisory)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|

<h2 id="tocS_CenterWeatherAdvisory">CenterWeatherAdvisory</h2>
<!-- backwards compatibility -->
<a id="schemacenterweatheradvisory"></a>
<a id="schema_CenterWeatherAdvisory"></a>
<a id="tocScenterweatheradvisory"></a>
<a id="tocscenterweatheradvisory"></a>

```json
{
  "id": "string",
  "issueTime": "1970-01-01T00:00:00Z",
  "cwsu": "ZAB",
  "sequence": 101,
  "start": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z",
  "observedProperty": "string",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|issueTime|string(date-time)|false|none|none|
|cwsu|[NWSCenterWeatherServiceUnitId](#schemanwscenterweatherserviceunitid)|false|none|Three-letter identifier for a Center Weather Service Unit (CWSU).|
|sequence|integer|false|none|none|
|start|string(date-time)|false|none|none|
|end|string(date-time)|false|none|none|
|observedProperty|string|false|none|none|
|text|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|cwsu|ZAB|
|cwsu|ZAN|
|cwsu|ZAU|
|cwsu|ZBW|
|cwsu|ZDC|
|cwsu|ZDV|
|cwsu|ZFA|
|cwsu|ZFW|
|cwsu|ZHU|
|cwsu|ZID|
|cwsu|ZJX|
|cwsu|ZKC|
|cwsu|ZLA|
|cwsu|ZLC|
|cwsu|ZMA|
|cwsu|ZME|
|cwsu|ZMP|
|cwsu|ZNY|
|cwsu|ZOA|
|cwsu|ZOB|
|cwsu|ZSE|
|cwsu|ZTL|

<h2 id="tocS_CenterWeatherServiceUnitJsonLd">CenterWeatherServiceUnitJsonLd</h2>
<!-- backwards compatibility -->
<a id="schemacenterweatherserviceunitjsonld"></a>
<a id="schema_CenterWeatherServiceUnitJsonLd"></a>
<a id="tocScenterweatherserviceunitjsonld"></a>
<a id="tocscenterweatherserviceunitjsonld"></a>

```json
{
  "@context": [
    null
  ],
  "@type": "GovernmentOrganization",
  "@id": "http://example.com",
  "id": "string",
  "name": "string",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "postalCode": "string"
  },
  "telephone": "string",
  "faxNumber": "string",
  "email": "string",
  "sameAs": "http://example.com",
  "nwsRegion": "string",
  "parentOrganization": "http://example.com",
  "responsibleCounties": [
    "http://example.com"
  ],
  "responsibleForecastZones": [
    "http://example.com"
  ],
  "responsibleFireZones": [
    "http://example.com"
  ],
  "approvedObservationStations": [
    "http://example.com"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|@type|string|false|none|none|
|@id|string(uri)|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|address|object|false|none|none|
|telephone|string|false|none|none|
|faxNumber|string|false|none|none|
|email|string|false|none|none|
|sameAs|string(uri)|false|none|none|
|nwsRegion|string|false|none|none|
|parentOrganization|string(uri)|false|none|none|
|responsibleCounties|[string(uri)]|false|none|none|
|responsibleForecastZones|[string(uri)]|false|none|none|
|responsibleFireZones|[string(uri)]|false|none|none|
|approvedObservationStations|[string(uri)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|@type|GovernmentOrganization|

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"1970-01-01"
```

Date (in YYYY-MM-DD format).

<h2 id="tocS_GeometryString">GeometryString</h2>
<!-- backwards compatibility -->
<a id="schemageometrystring"></a>
<a id="schema_GeometryString"></a>
<a id="tocSgeometrystring"></a>
<a id="tocsgeometrystring"></a>

```json
"string"
```

A geometry represented in Well-Known Text (WKT) format.

<h2 id="tocS_GeoJsonBoundingBox">GeoJsonBoundingBox</h2>
<!-- backwards compatibility -->
<a id="schemageojsonboundingbox"></a>
<a id="schema_GeoJsonBoundingBox"></a>
<a id="tocSgeojsonboundingbox"></a>
<a id="tocsgeojsonboundingbox"></a>

```json
[
  0,
  0,
  0,
  0
]
```

A GeoJSON bounding box. Please refer to IETF RFC 7946 for information on the GeoJSON format.

<h2 id="tocS_GeoJsonCoordinate">GeoJsonCoordinate</h2>
<!-- backwards compatibility -->
<a id="schemageojsoncoordinate"></a>
<a id="schema_GeoJsonCoordinate"></a>
<a id="tocSgeojsoncoordinate"></a>
<a id="tocsgeojsoncoordinate"></a>

```json
[
  0,
  0
]
```

A GeoJSON coordinate. Please refer to IETF RFC 7946 for information on the GeoJSON format.

<h2 id="tocS_GeoJsonGeometry">GeoJsonGeometry</h2>
<!-- backwards compatibility -->
<a id="schemageojsongeometry"></a>
<a id="schema_GeoJsonGeometry"></a>
<a id="tocSgeojsongeometry"></a>
<a id="tocsgeojsongeometry"></a>

```json
{
  "type": "Point",
  "coordinates": [
    0,
    0
  ],
  "bbox": [
    0,
    0,
    0,
    0
  ]
}
```

A GeoJSON geometry object. Please refer to IETF RFC 7946 for information on the GeoJSON format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|coordinates|[GeoJsonCoordinate](#schemageojsoncoordinate)|true|none|A GeoJSON coordinate. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|bbox|[GeoJsonBoundingBox](#schemageojsonboundingbox)|false|none|A GeoJSON bounding box. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|coordinates|[GeoJsonLineString](#schemageojsonlinestring)|true|none|A GeoJSON line string. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|bbox|[GeoJsonBoundingBox](#schemageojsonboundingbox)|false|none|A GeoJSON bounding box. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|coordinates|[GeoJsonPolygon](#schemageojsonpolygon)|true|none|A GeoJSON polygon. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|bbox|[GeoJsonBoundingBox](#schemageojsonboundingbox)|false|none|A GeoJSON bounding box. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|coordinates|[[GeoJsonCoordinate](#schemageojsoncoordinate)]|true|none|none|
|bbox|[GeoJsonBoundingBox](#schemageojsonboundingbox)|false|none|A GeoJSON bounding box. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|coordinates|[[GeoJsonLineString](#schemageojsonlinestring)]|true|none|none|
|bbox|[GeoJsonBoundingBox](#schemageojsonboundingbox)|false|none|A GeoJSON bounding box. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|coordinates|[[GeoJsonPolygon](#schemageojsonpolygon)]|true|none|none|
|bbox|[GeoJsonBoundingBox](#schemageojsonboundingbox)|false|none|A GeoJSON bounding box. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|*oneOf*|null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Point|
|type|LineString|
|type|Polygon|
|type|MultiPoint|
|type|MultiLineString|
|type|MultiPolygon|

<h2 id="tocS_GeoJsonFeature">GeoJsonFeature</h2>
<!-- backwards compatibility -->
<a id="schemageojsonfeature"></a>
<a id="schema_GeoJsonFeature"></a>
<a id="tocSgeojsonfeature"></a>
<a id="tocsgeojsonfeature"></a>

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {}
}
```

A GeoJSON feature. Please refer to IETF RFC 7946 for information on the GeoJSON format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|id|string(uri)|false|none|none|
|type|string|true|none|none|
|geometry|[GeoJsonGeometry](#schemageojsongeometry)|true|none|A GeoJSON geometry object. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|properties|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|

<h2 id="tocS_GeoJsonFeatureCollection">GeoJsonFeatureCollection</h2>
<!-- backwards compatibility -->
<a id="schemageojsonfeaturecollection"></a>
<a id="schema_GeoJsonFeatureCollection"></a>
<a id="tocSgeojsonfeaturecollection"></a>
<a id="tocsgeojsonfeaturecollection"></a>

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "@context": [
        null
      ],
      "id": "http://example.com",
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ],
        "bbox": [
          0,
          0,
          0,
          0
        ]
      },
      "properties": {}
    }
  ]
}
```

A GeoJSON feature collection. Please refer to IETF RFC 7946 for information on the GeoJSON format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|type|string|true|none|none|
|features|[[GeoJsonFeature](#schemageojsonfeature)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FeatureCollection|

<h2 id="tocS_GeoJsonLineString">GeoJsonLineString</h2>
<!-- backwards compatibility -->
<a id="schemageojsonlinestring"></a>
<a id="schema_GeoJsonLineString"></a>
<a id="tocSgeojsonlinestring"></a>
<a id="tocsgeojsonlinestring"></a>

```json
[
  [
    0,
    0
  ],
  [
    0,
    0
  ]
]
```

A GeoJSON line string. Please refer to IETF RFC 7946 for information on the GeoJSON format.

<h2 id="tocS_GeoJsonPolygon">GeoJsonPolygon</h2>
<!-- backwards compatibility -->
<a id="schemageojsonpolygon"></a>
<a id="schema_GeoJsonPolygon"></a>
<a id="tocSgeojsonpolygon"></a>
<a id="tocsgeojsonpolygon"></a>

```json
[
  [
    [
      0,
      0
    ],
    [
      0,
      0
    ],
    [
      0,
      0
    ],
    [
      0,
      0
    ]
  ]
]
```

A GeoJSON polygon. Please refer to IETF RFC 7946 for information on the GeoJSON format.

<h2 id="tocS_Gridpoint">Gridpoint</h2>
<!-- backwards compatibility -->
<a id="schemagridpoint"></a>
<a id="schema_Gridpoint"></a>
<a id="tocSgridpoint"></a>
<a id="tocsgridpoint"></a>

```json
{
  "@context": [
    null
  ],
  "geometry": "string",
  "@id": "http://example.com",
  "@type": "wx:Gridpoint",
  "updateTime": "1970-01-01T00:00:00Z",
  "validTimes": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
  "elevation": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "forecastOffice": "http://example.com",
  "gridId": "string",
  "gridX": 0,
  "gridY": 0,
  "weather": {
    "values": [
      {
        "validTime": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
        "value": [
          {
            "coverage": "areas",
            "weather": "blowing_dust",
            "intensity": "very_light",
            "visibility": {
              "value": 0,
              "maxValue": 0,
              "minValue": 0,
              "unitCode": "string",
              "qualityControl": "Z"
            },
            "attributes": [
              "damaging_wind"
            ]
          }
        ]
      }
    ]
  },
  "hazards": {
    "values": [
      {
        "validTime": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
        "value": [
          {
            "phenomenon": "string",
            "significance": "string",
            "event_number": 0
          }
        ]
      }
    ]
  },
  "property1": {
    "uom": "string",
    "values": [
      {
        "validTime": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
        "value": 0
      }
    ]
  },
  "property2": {
    "uom": "string",
    "values": [
      {
        "validTime": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
        "value": 0
      }
    ]
  }
}
```

Raw forecast data for a 2.5km grid square.
This is a list of all potential data layers that may appear. Some layers may not be present in all areas.
* temperature
* dewpoint
* maxTemperature
* minTemperature
* relativeHumidity
* apparentTemperature
* heatIndex
* windChill
* wetBulbGlobeTemperature
* skyCover
* windDirection
* windSpeed
* windGust
* weather
* hazards: Watch and advisory products in effect
* heatRisk
* probabilityOfPrecipitation
* quantitativePrecipitation
* iceAccumulation
* snowfallAmount
* snowLevel
* ceilingHeight
* visibility
* transportWindSpeed
* transportWindDirection
* mixingHeight
* hainesIndex
* lightningActivityLevel
* twentyFootWindSpeed
* twentyFootWindDirection
* waveHeight
* wavePeriod
* waveDirection
* primarySwellHeight
* primarySwellDirection
* secondarySwellHeight
* secondarySwellDirection
* wavePeriod2
* windWaveHeight
* dispersionIndex
* pressure: Barometric pressure
* probabilityOfTropicalStormWinds
* probabilityOfHurricaneWinds
* potentialOf15mphWinds
* potentialOf25mphWinds
* potentialOf35mphWinds
* potentialOf45mphWinds
* potentialOf20mphWindGusts
* potentialOf30mphWindGusts
* potentialOf40mphWindGusts
* potentialOf50mphWindGusts
* potentialOf60mphWindGusts
* grasslandFireDangerIndex
* probabilityOfThunder
* davisStabilityIndex
* atmosphericDispersionIndex
* lowVisibilityOccurrenceRiskIndex
* stability
* redFlagThreatIndex

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|geometry|[GeometryString](#schemageometrystring)|false|none|A geometry represented in Well-Known Text (WKT) format.|
|@id|string(uri)|false|none|none|
|@type|string|false|none|none|
|updateTime|string(date-time)|false|none|none|
|validTimes|[ISO8601Interval](#schemaiso8601interval)|false|none|A time interval in ISO 8601 format. This can be one of:<br><br>    1. Start and end time<br>    2. Start time and duration<br>    3. Duration and end time<br>The string "NOW" can also be used in place of a start/end time.<br>|
|elevation|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|forecastOffice|string(uri)|false|none|none|
|gridId|string|false|none|none|
|gridX|integer|false|none|none|
|gridY|integer|false|none|none|
|weather|object|false|none|none|
|hazards|object|false|none|none|
|**additionalProperties**|[GridpointQuantitativeValueLayer](#schemagridpointquantitativevaluelayer)|false|none|A gridpoint layer consisting of quantitative values (numeric values with associated units of measure).<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|@type|wx:Gridpoint|

<h2 id="tocS_GridpointQuantitativeValueLayer">GridpointQuantitativeValueLayer</h2>
<!-- backwards compatibility -->
<a id="schemagridpointquantitativevaluelayer"></a>
<a id="schema_GridpointQuantitativeValueLayer"></a>
<a id="tocSgridpointquantitativevaluelayer"></a>
<a id="tocsgridpointquantitativevaluelayer"></a>

```json
{
  "uom": "string",
  "values": [
    {
      "validTime": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
      "value": 0
    }
  ]
}
```

A gridpoint layer consisting of quantitative values (numeric values with associated units of measure).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uom|[UnitOfMeasure](#schemaunitofmeasure)|false|none|A string denoting a unit of measure, expressed in the format "{unit}" or "{namespace}:{unit}".<br>Units with the namespace "wmo" or "wmoUnit" are defined in the World Meteorological Organization Codes Registry at http://codes.wmo.int/common/unit and should be canonically resolvable to http://codes.wmo.int/common/unit/{unit}.<br>Units with the namespace "nwsUnit" are currently custom and do not align to any standard.<br>Units with no namespace or the namespace "uc" are compliant with the Unified Code for Units of Measure syntax defined at https://unitsofmeasure.org/. This also aligns with recent versions of the Geographic Markup Language (GML) standard, the IWXXM standard, and OGC Observations and Measurements v2.0 (ISO/DIS 19156).<br>Namespaced units are considered deprecated. We will be aligning API to use the same standards as GML/IWXXM in the future.<br>|
|values|[object]|true|none|none|

<h2 id="tocS_GridpointGeoJson">GridpointGeoJson</h2>
<!-- backwards compatibility -->
<a id="schemagridpointgeojson"></a>
<a id="schema_GridpointGeoJson"></a>
<a id="tocSgridpointgeojson"></a>
<a id="tocsgridpointgeojson"></a>

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "@context": [
      null
    ],
    "geometry": "string",
    "@id": "http://example.com",
    "@type": "wx:Gridpoint",
    "updateTime": "1970-01-01T00:00:00Z",
    "validTimes": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
    "elevation": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "forecastOffice": "http://example.com",
    "gridId": "string",
    "gridX": 0,
    "gridY": 0,
    "weather": {
      "values": [
        {
          "validTime": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
          "value": [
            {
              "coverage": "areas",
              "weather": "blowing_dust",
              "intensity": "very_light",
              "visibility": {
                "value": 0,
                "maxValue": 0,
                "minValue": 0,
                "unitCode": "string",
                "qualityControl": "Z"
              },
              "attributes": [
                "damaging_wind"
              ]
            }
          ]
        }
      ]
    },
    "hazards": {
      "values": [
        {
          "validTime": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
          "value": [
            {
              "phenomenon": "string",
              "significance": "string",
              "event_number": 0
            }
          ]
        }
      ]
    },
    "property1": {
      "uom": "string",
      "values": [
        {
          "validTime": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
          "value": 0
        }
      ]
    },
    "property2": {
      "uom": "string",
      "values": [
        {
          "validTime": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
          "value": 0
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|id|string(uri)|false|none|none|
|type|string|true|none|none|
|geometry|[GeoJsonGeometry](#schemageojsongeometry)|true|none|A GeoJSON geometry object. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|properties|object|true|none|none|
|properties|[Gridpoint](#schemagridpoint)|true|none|Raw forecast data for a 2.5km grid square.<br>This is a list of all potential data layers that may appear. Some layers may not be present in all areas.<br>* temperature<br>* dewpoint<br>* maxTemperature<br>* minTemperature<br>* relativeHumidity<br>* apparentTemperature<br>* heatIndex<br>* windChill<br>* wetBulbGlobeTemperature<br>* skyCover<br>* windDirection<br>* windSpeed<br>* windGust<br>* weather<br>* hazards: Watch and advisory products in effect<br>* heatRisk<br>* probabilityOfPrecipitation<br>* quantitativePrecipitation<br>* iceAccumulation<br>* snowfallAmount<br>* snowLevel<br>* ceilingHeight<br>* visibility<br>* transportWindSpeed<br>* transportWindDirection<br>* mixingHeight<br>* hainesIndex<br>* lightningActivityLevel<br>* twentyFootWindSpeed<br>* twentyFootWindDirection<br>* waveHeight<br>* wavePeriod<br>* waveDirection<br>* primarySwellHeight<br>* primarySwellDirection<br>* secondarySwellHeight<br>* secondarySwellDirection<br>* wavePeriod2<br>* windWaveHeight<br>* dispersionIndex<br>* pressure: Barometric pressure<br>* probabilityOfTropicalStormWinds<br>* probabilityOfHurricaneWinds<br>* potentialOf15mphWinds<br>* potentialOf25mphWinds<br>* potentialOf35mphWinds<br>* potentialOf45mphWinds<br>* potentialOf20mphWindGusts<br>* potentialOf30mphWindGusts<br>* potentialOf40mphWindGusts<br>* potentialOf50mphWindGusts<br>* potentialOf60mphWindGusts<br>* grasslandFireDangerIndex<br>* probabilityOfThunder<br>* davisStabilityIndex<br>* atmosphericDispersionIndex<br>* lowVisibilityOccurrenceRiskIndex<br>* stability<br>* redFlagThreatIndex<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|

<h2 id="tocS_GridpointJsonLd">GridpointJsonLd</h2>
<!-- backwards compatibility -->
<a id="schemagridpointjsonld"></a>
<a id="schema_GridpointJsonLd"></a>
<a id="tocSgridpointjsonld"></a>
<a id="tocsgridpointjsonld"></a>

```json
{
  "@context": [
    null
  ],
  "geometry": "string",
  "@id": "http://example.com",
  "@type": "wx:Gridpoint",
  "updateTime": "1970-01-01T00:00:00Z",
  "validTimes": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
  "elevation": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "forecastOffice": "http://example.com",
  "gridId": "string",
  "gridX": 0,
  "gridY": 0,
  "weather": {
    "values": [
      {
        "validTime": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
        "value": [
          {
            "coverage": "areas",
            "weather": "blowing_dust",
            "intensity": "very_light",
            "visibility": {
              "value": 0,
              "maxValue": 0,
              "minValue": 0,
              "unitCode": "string",
              "qualityControl": "Z"
            },
            "attributes": [
              "damaging_wind"
            ]
          }
        ]
      }
    ]
  },
  "hazards": {
    "values": [
      {
        "validTime": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
        "value": [
          {
            "phenomenon": "string",
            "significance": "string",
            "event_number": 0
          }
        ]
      }
    ]
  },
  "property1": {
    "uom": "string",
    "values": [
      {
        "validTime": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
        "value": 0
      }
    ]
  },
  "property2": {
    "uom": "string",
    "values": [
      {
        "validTime": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
        "value": 0
      }
    ]
  }
}
```

Raw forecast data for a 2.5km grid square.
This is a list of all potential data layers that may appear. Some layers may not be present in all areas.
* temperature
* dewpoint
* maxTemperature
* minTemperature
* relativeHumidity
* apparentTemperature
* heatIndex
* windChill
* wetBulbGlobeTemperature
* skyCover
* windDirection
* windSpeed
* windGust
* weather
* hazards: Watch and advisory products in effect
* heatRisk
* probabilityOfPrecipitation
* quantitativePrecipitation
* iceAccumulation
* snowfallAmount
* snowLevel
* ceilingHeight
* visibility
* transportWindSpeed
* transportWindDirection
* mixingHeight
* hainesIndex
* lightningActivityLevel
* twentyFootWindSpeed
* twentyFootWindDirection
* waveHeight
* wavePeriod
* waveDirection
* primarySwellHeight
* primarySwellDirection
* secondarySwellHeight
* secondarySwellDirection
* wavePeriod2
* windWaveHeight
* dispersionIndex
* pressure: Barometric pressure
* probabilityOfTropicalStormWinds
* probabilityOfHurricaneWinds
* potentialOf15mphWinds
* potentialOf25mphWinds
* potentialOf35mphWinds
* potentialOf45mphWinds
* potentialOf20mphWindGusts
* potentialOf30mphWindGusts
* potentialOf40mphWindGusts
* potentialOf50mphWindGusts
* potentialOf60mphWindGusts
* grasslandFireDangerIndex
* probabilityOfThunder
* davisStabilityIndex
* atmosphericDispersionIndex
* lowVisibilityOccurrenceRiskIndex
* stability
* redFlagThreatIndex

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|geometry|[GeometryString](#schemageometrystring)|false|none|A geometry represented in Well-Known Text (WKT) format.|
|@id|string(uri)|false|none|none|
|@type|string|false|none|none|
|updateTime|string(date-time)|false|none|none|
|validTimes|[ISO8601Interval](#schemaiso8601interval)|false|none|A time interval in ISO 8601 format. This can be one of:<br><br>    1. Start and end time<br>    2. Start time and duration<br>    3. Duration and end time<br>The string "NOW" can also be used in place of a start/end time.<br>|
|elevation|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|forecastOffice|string(uri)|false|none|none|
|gridId|string|false|none|none|
|gridX|integer|false|none|none|
|gridY|integer|false|none|none|
|weather|object|false|none|none|
|hazards|object|false|none|none|
|**additionalProperties**|[GridpointQuantitativeValueLayer](#schemagridpointquantitativevaluelayer)|false|none|A gridpoint layer consisting of quantitative values (numeric values with associated units of measure).<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|@type|wx:Gridpoint|

<h2 id="tocS_Gridpoint12hForecast">Gridpoint12hForecast</h2>
<!-- backwards compatibility -->
<a id="schemagridpoint12hforecast"></a>
<a id="schema_Gridpoint12hForecast"></a>
<a id="tocSgridpoint12hforecast"></a>
<a id="tocsgridpoint12hforecast"></a>

```json
{
  "@context": [
    null
  ],
  "geometry": "string",
  "units": "us",
  "forecastGenerator": "string",
  "generatedAt": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z",
  "validTimes": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
  "elevation": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "periods": [
    {
      "number": 1,
      "name": "Tuesday Night",
      "startTime": "1970-01-01T00:00:00Z",
      "endTime": "1970-01-01T00:00:00Z",
      "isDaytime": true,
      "temperature": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "temperatureUnit": "F",
      "temperatureTrend": "rising",
      "probabilityOfPrecipitation": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "windSpeed": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "windGust": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "windDirection": "N",
      "icon": "http://example.com",
      "shortForecast": "string",
      "detailedForecast": "string"
    }
  ]
}
```

A multi-day forecast for a 2.5km grid square.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|geometry|[GeometryString](#schemageometrystring)|false|none|A geometry represented in Well-Known Text (WKT) format.|
|units|[GridpointForecastUnits](#schemagridpointforecastunits)|false|none|Denotes the units used in the textual portions of the forecast.|
|forecastGenerator|string|false|none|The internal generator class used to create the forecast text (used for NWS debugging).|
|generatedAt|string(date-time)|false|none|The time this forecast data was generated.|
|updateTime|string(date-time)|false|none|The last update time of the data this forecast was generated from.|
|validTimes|[ISO8601Interval](#schemaiso8601interval)|false|none|A time interval in ISO 8601 format. This can be one of:<br><br>    1. Start and end time<br>    2. Start time and duration<br>    3. Duration and end time<br>The string "NOW" can also be used in place of a start/end time.<br>|
|elevation|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|periods|[[Gridpoint12hForecastPeriod](#schemagridpoint12hforecastperiod)]|false|none|An array of forecast periods.|

#### Enumerated Values

|Property|Value|
|---|---|
|units|us|
|units|si|

<h2 id="tocS_GridpointHourlyForecast">GridpointHourlyForecast</h2>
<!-- backwards compatibility -->
<a id="schemagridpointhourlyforecast"></a>
<a id="schema_GridpointHourlyForecast"></a>
<a id="tocSgridpointhourlyforecast"></a>
<a id="tocsgridpointhourlyforecast"></a>

```json
{
  "@context": [
    null
  ],
  "geometry": "string",
  "units": "us",
  "forecastGenerator": "string",
  "generatedAt": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z",
  "validTimes": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
  "elevation": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "periods": [
    {
      "number": 1,
      "name": "Tuesday Night",
      "startTime": "1970-01-01T00:00:00Z",
      "endTime": "1970-01-01T00:00:00Z",
      "isDaytime": true,
      "temperature": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "temperatureUnit": "F",
      "temperatureTrend": "rising",
      "probabilityOfPrecipitation": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "dewpoint": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "relativeHumidity": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "windSpeed": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "windGust": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "windDirection": "N",
      "icon": "http://example.com",
      "shortForecast": "string",
      "detailedForecast": "string"
    }
  ]
}
```

An hourly forecast for a 2.5km grid square.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|geometry|[GeometryString](#schemageometrystring)|false|none|A geometry represented in Well-Known Text (WKT) format.|
|units|[GridpointForecastUnits](#schemagridpointforecastunits)|false|none|Denotes the units used in the textual portions of the forecast.|
|forecastGenerator|string|false|none|The internal generator class used to create the forecast text (used for NWS debugging).|
|generatedAt|string(date-time)|false|none|The time this forecast data was generated.|
|updateTime|string(date-time)|false|none|The last update time of the data this forecast was generated from.|
|validTimes|[ISO8601Interval](#schemaiso8601interval)|false|none|A time interval in ISO 8601 format. This can be one of:<br><br>    1. Start and end time<br>    2. Start time and duration<br>    3. Duration and end time<br>The string "NOW" can also be used in place of a start/end time.<br>|
|elevation|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|periods|[[GridpointHourlyForecastPeriod](#schemagridpointhourlyforecastperiod)]|false|none|An array of forecast periods.|

#### Enumerated Values

|Property|Value|
|---|---|
|units|us|
|units|si|

<h2 id="tocS_GridpointHourlyForecastPeriod">GridpointHourlyForecastPeriod</h2>
<!-- backwards compatibility -->
<a id="schemagridpointhourlyforecastperiod"></a>
<a id="schema_GridpointHourlyForecastPeriod"></a>
<a id="tocSgridpointhourlyforecastperiod"></a>
<a id="tocsgridpointhourlyforecastperiod"></a>

```json
{
  "number": 1,
  "name": "Tuesday Night",
  "startTime": "1970-01-01T00:00:00Z",
  "endTime": "1970-01-01T00:00:00Z",
  "isDaytime": true,
  "temperature": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "temperatureUnit": "F",
  "temperatureTrend": "rising",
  "probabilityOfPrecipitation": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "dewpoint": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "relativeHumidity": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "windSpeed": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "windGust": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "windDirection": "N",
  "icon": "http://example.com",
  "shortForecast": "string",
  "detailedForecast": "string"
}
```

An object containing forecast information for a specific time period (generally 12-hour or 1-hour).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|integer|false|none|Sequential period number.|
|name|string|false|none|A textual identifier for the period. This value will not be present for hourly forecasts.<br>|
|startTime|string(date-time)|false|none|The starting time that this forecast period is valid for.|
|endTime|string(date-time)|false|none|The ending time that this forecast period is valid for.|
|isDaytime|boolean|false|none|Indicates whether this period is daytime or nighttime.|
|temperature|[QuantitativeValue](#schemaquantitativevalue) \| integer|false|none|High/low temperature for the period, depending on whether the period is day or night.<br>This property as an integer value is deprecated. Future versions will express this value as a quantitative value object. To make use of the future standard format now, set the "forecast_temperature_qv" feature flag on the request.<br>|
|temperatureUnit|string|false|none|**Deprecated.** The unit of the temperature value (Fahrenheit or Celsius).<br>This property is deprecated. Future versions will indicate the unit within the quantitative value object for the temperature property. To make use of the future standard format now, set the "forecast_temperature_qv" feature flag on the request.<br>|
|temperatureTrend|string \| null|false|none|If not null, indicates a non-diurnal temperature trend for the period (either rising temperature overnight, or falling temperature during the day)<br>|
|probabilityOfPrecipitation|[QuantitativeValue](#schemaquantitativevalue)|false|none|Probability of precipitation for the period.|
|dewpoint|[QuantitativeValue](#schemaquantitativevalue)|false|none|Dewpoint. Only provided in hourly forecasts.<br>|
|relativeHumidity|[QuantitativeValue](#schemaquantitativevalue)|false|none|Relative humidity. Only provided in hourly forecasts.<br>|
|windSpeed|[QuantitativeValue](#schemaquantitativevalue) \| string|false|none|Wind speed for the period.<br>This property as an string value is deprecated. Future versions will express this value as a quantitative value object. To make use of the future standard format now, set the "forecast_wind_speed_qv" feature flag on the request.<br>|
|windGust|[QuantitativeValue](#schemaquantitativevalue) \| string \| null|false|none|Peak wind gust for the period.<br>This property as an string value is deprecated. Future versions will express this value as a quantitative value object. To make use of the future standard format now, set the "forecast_wind_speed_qv" feature flag on the request.<br>|
|windDirection|string|false|none|The prevailing direction of the wind for the period, using a 16-point compass.|
|icon|string(uri)|false|none|**Deprecated.** A link to an icon representing the forecast summary.|
|shortForecast|string|false|none|A brief textual forecast summary for the period.|
|detailedForecast|string|false|none|A detailed textual forecast for the period.|

#### Enumerated Values

|Property|Value|
|---|---|
|temperatureUnit|F|
|temperatureUnit|C|
|temperatureTrend|rising|
|temperatureTrend|falling|
|windDirection|N|
|windDirection|NNE|
|windDirection|NE|
|windDirection|ENE|
|windDirection|E|
|windDirection|ESE|
|windDirection|SE|
|windDirection|SSE|
|windDirection|S|
|windDirection|SSW|
|windDirection|SW|
|windDirection|WSW|
|windDirection|W|
|windDirection|WNW|
|windDirection|NW|
|windDirection|NNW|

<h2 id="tocS_Gridpoint12hForecastPeriod">Gridpoint12hForecastPeriod</h2>
<!-- backwards compatibility -->
<a id="schemagridpoint12hforecastperiod"></a>
<a id="schema_Gridpoint12hForecastPeriod"></a>
<a id="tocSgridpoint12hforecastperiod"></a>
<a id="tocsgridpoint12hforecastperiod"></a>

```json
{
  "number": 1,
  "name": "Tuesday Night",
  "startTime": "1970-01-01T00:00:00Z",
  "endTime": "1970-01-01T00:00:00Z",
  "isDaytime": true,
  "temperature": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "temperatureUnit": "F",
  "temperatureTrend": "rising",
  "probabilityOfPrecipitation": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "windSpeed": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "windGust": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "windDirection": "N",
  "icon": "http://example.com",
  "shortForecast": "string",
  "detailedForecast": "string"
}
```

An object containing forecast information for a specific time period (generally 12-hour or 1-hour).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|integer|false|none|Sequential period number.|
|name|string|false|none|A textual identifier for the period. This value will not be present for hourly forecasts.<br>|
|startTime|string(date-time)|false|none|The starting time that this forecast period is valid for.|
|endTime|string(date-time)|false|none|The ending time that this forecast period is valid for.|
|isDaytime|boolean|false|none|Indicates whether this period is daytime or nighttime.|
|temperature|[QuantitativeValue](#schemaquantitativevalue) \| integer|false|none|High/low temperature for the period, depending on whether the period is day or night.<br>This property as an integer value is deprecated. Future versions will express this value as a quantitative value object. To make use of the future standard format now, set the "forecast_temperature_qv" feature flag on the request.<br>|
|temperatureUnit|string|false|none|**Deprecated.** The unit of the temperature value (Fahrenheit or Celsius).<br>This property is deprecated. Future versions will indicate the unit within the quantitative value object for the temperature property. To make use of the future standard format now, set the "forecast_temperature_qv" feature flag on the request.<br>|
|temperatureTrend|string \| null|false|none|If not null, indicates a non-diurnal temperature trend for the period (either rising temperature overnight, or falling temperature during the day)<br>|
|probabilityOfPrecipitation|[QuantitativeValue](#schemaquantitativevalue)|false|none|Probability of precipitation for the period.|
|windSpeed|[QuantitativeValue](#schemaquantitativevalue) \| string|false|none|Wind speed for the period.<br>This property as an string value is deprecated. Future versions will express this value as a quantitative value object. To make use of the future standard format now, set the "forecast_wind_speed_qv" feature flag on the request.<br>|
|windGust|[QuantitativeValue](#schemaquantitativevalue) \| string \| null|false|none|Peak wind gust for the period.<br>This property as an string value is deprecated. Future versions will express this value as a quantitative value object. To make use of the future standard format now, set the "forecast_wind_speed_qv" feature flag on the request.<br>|
|windDirection|string|false|none|The prevailing direction of the wind for the period, using a 16-point compass.|
|icon|string(uri)|false|none|**Deprecated.** A link to an icon representing the forecast summary.|
|shortForecast|string|false|none|A brief textual forecast summary for the period.|
|detailedForecast|string|false|none|A detailed textual forecast for the period.|

#### Enumerated Values

|Property|Value|
|---|---|
|temperatureUnit|F|
|temperatureUnit|C|
|temperatureTrend|rising|
|temperatureTrend|falling|
|windDirection|N|
|windDirection|NNE|
|windDirection|NE|
|windDirection|ENE|
|windDirection|E|
|windDirection|ESE|
|windDirection|SE|
|windDirection|SSE|
|windDirection|S|
|windDirection|SSW|
|windDirection|SW|
|windDirection|WSW|
|windDirection|W|
|windDirection|WNW|
|windDirection|NW|
|windDirection|NNW|

<h2 id="tocS_GridpointForecastUnits">GridpointForecastUnits</h2>
<!-- backwards compatibility -->
<a id="schemagridpointforecastunits"></a>
<a id="schema_GridpointForecastUnits"></a>
<a id="tocSgridpointforecastunits"></a>
<a id="tocsgridpointforecastunits"></a>

```json
"us"
```

Denotes the units used in the textual portions of the forecast.

<h2 id="tocS_Gridpoint12hForecastGeoJson">Gridpoint12hForecastGeoJson</h2>
<!-- backwards compatibility -->
<a id="schemagridpoint12hforecastgeojson"></a>
<a id="schema_Gridpoint12hForecastGeoJson"></a>
<a id="tocSgridpoint12hforecastgeojson"></a>
<a id="tocsgridpoint12hforecastgeojson"></a>

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "@context": [
      null
    ],
    "geometry": "string",
    "units": "us",
    "forecastGenerator": "string",
    "generatedAt": "1970-01-01T00:00:00Z",
    "updateTime": "1970-01-01T00:00:00Z",
    "validTimes": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
    "elevation": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "periods": [
      {
        "number": 1,
        "name": "Tuesday Night",
        "startTime": "1970-01-01T00:00:00Z",
        "endTime": "1970-01-01T00:00:00Z",
        "isDaytime": true,
        "temperature": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "temperatureUnit": "F",
        "temperatureTrend": "rising",
        "probabilityOfPrecipitation": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windSpeed": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windGust": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windDirection": "N",
        "icon": "http://example.com",
        "shortForecast": "string",
        "detailedForecast": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|id|string(uri)|false|none|none|
|type|string|true|none|none|
|geometry|[GeoJsonGeometry](#schemageojsongeometry)|true|none|A GeoJSON geometry object. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|properties|object|true|none|none|
|properties|[Gridpoint12hForecast](#schemagridpoint12hforecast)|true|none|A multi-day forecast for a 2.5km grid square.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|

<h2 id="tocS_GridpointHourlyForecastGeoJson">GridpointHourlyForecastGeoJson</h2>
<!-- backwards compatibility -->
<a id="schemagridpointhourlyforecastgeojson"></a>
<a id="schema_GridpointHourlyForecastGeoJson"></a>
<a id="tocSgridpointhourlyforecastgeojson"></a>
<a id="tocsgridpointhourlyforecastgeojson"></a>

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "@context": [
      null
    ],
    "geometry": "string",
    "units": "us",
    "forecastGenerator": "string",
    "generatedAt": "1970-01-01T00:00:00Z",
    "updateTime": "1970-01-01T00:00:00Z",
    "validTimes": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
    "elevation": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "periods": [
      {
        "number": 1,
        "name": "Tuesday Night",
        "startTime": "1970-01-01T00:00:00Z",
        "endTime": "1970-01-01T00:00:00Z",
        "isDaytime": true,
        "temperature": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "temperatureUnit": "F",
        "temperatureTrend": "rising",
        "probabilityOfPrecipitation": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "dewpoint": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "relativeHumidity": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windSpeed": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windGust": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windDirection": "N",
        "icon": "http://example.com",
        "shortForecast": "string",
        "detailedForecast": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|id|string(uri)|false|none|none|
|type|string|true|none|none|
|geometry|[GeoJsonGeometry](#schemageojsongeometry)|true|none|A GeoJSON geometry object. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|properties|object|true|none|none|
|properties|[GridpointHourlyForecast](#schemagridpointhourlyforecast)|true|none|An hourly forecast for a 2.5km grid square.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|

<h2 id="tocS_Gridpoint12hForecastJsonLd">Gridpoint12hForecastJsonLd</h2>
<!-- backwards compatibility -->
<a id="schemagridpoint12hforecastjsonld"></a>
<a id="schema_Gridpoint12hForecastJsonLd"></a>
<a id="tocSgridpoint12hforecastjsonld"></a>
<a id="tocsgridpoint12hforecastjsonld"></a>

```json
{
  "@context": [
    null
  ],
  "geometry": "string",
  "units": "us",
  "forecastGenerator": "string",
  "generatedAt": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z",
  "validTimes": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
  "elevation": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "periods": [
    {
      "number": 1,
      "name": "Tuesday Night",
      "startTime": "1970-01-01T00:00:00Z",
      "endTime": "1970-01-01T00:00:00Z",
      "isDaytime": true,
      "temperature": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "temperatureUnit": "F",
      "temperatureTrend": "rising",
      "probabilityOfPrecipitation": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "windSpeed": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "windGust": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "windDirection": "N",
      "icon": "http://example.com",
      "shortForecast": "string",
      "detailedForecast": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|true|none|none|
|geometry|[GeometryString](#schemageometrystring)|true|none|A geometry represented in Well-Known Text (WKT) format.|
|units|[GridpointForecastUnits](#schemagridpointforecastunits)|false|none|Denotes the units used in the textual portions of the forecast.|
|forecastGenerator|string|false|none|The internal generator class used to create the forecast text (used for NWS debugging).|
|generatedAt|string(date-time)|false|none|The time this forecast data was generated.|
|updateTime|string(date-time)|false|none|The last update time of the data this forecast was generated from.|
|validTimes|[ISO8601Interval](#schemaiso8601interval)|false|none|A time interval in ISO 8601 format. This can be one of:<br><br>    1. Start and end time<br>    2. Start time and duration<br>    3. Duration and end time<br>The string "NOW" can also be used in place of a start/end time.<br>|
|elevation|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|periods|[[Gridpoint12hForecastPeriod](#schemagridpoint12hforecastperiod)]|false|none|An array of forecast periods.|
|@context|[JsonLdContext](#schemajsonldcontext)|true|none|none|
|geometry|[GeometryString](#schemageometrystring)|true|none|A geometry represented in Well-Known Text (WKT) format.|

#### Enumerated Values

|Property|Value|
|---|---|
|units|us|
|units|si|

<h2 id="tocS_GridpointHourlyForecastJsonLd">GridpointHourlyForecastJsonLd</h2>
<!-- backwards compatibility -->
<a id="schemagridpointhourlyforecastjsonld"></a>
<a id="schema_GridpointHourlyForecastJsonLd"></a>
<a id="tocSgridpointhourlyforecastjsonld"></a>
<a id="tocsgridpointhourlyforecastjsonld"></a>

```json
{
  "@context": [
    null
  ],
  "geometry": "string",
  "units": "us",
  "forecastGenerator": "string",
  "generatedAt": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z",
  "validTimes": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
  "elevation": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "periods": [
    {
      "number": 1,
      "name": "Tuesday Night",
      "startTime": "1970-01-01T00:00:00Z",
      "endTime": "1970-01-01T00:00:00Z",
      "isDaytime": true,
      "temperature": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "temperatureUnit": "F",
      "temperatureTrend": "rising",
      "probabilityOfPrecipitation": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "dewpoint": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "relativeHumidity": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "windSpeed": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "windGust": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "windDirection": "N",
      "icon": "http://example.com",
      "shortForecast": "string",
      "detailedForecast": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|true|none|none|
|geometry|[GeometryString](#schemageometrystring)|true|none|A geometry represented in Well-Known Text (WKT) format.|
|units|[GridpointForecastUnits](#schemagridpointforecastunits)|false|none|Denotes the units used in the textual portions of the forecast.|
|forecastGenerator|string|false|none|The internal generator class used to create the forecast text (used for NWS debugging).|
|generatedAt|string(date-time)|false|none|The time this forecast data was generated.|
|updateTime|string(date-time)|false|none|The last update time of the data this forecast was generated from.|
|validTimes|[ISO8601Interval](#schemaiso8601interval)|false|none|A time interval in ISO 8601 format. This can be one of:<br><br>    1. Start and end time<br>    2. Start time and duration<br>    3. Duration and end time<br>The string "NOW" can also be used in place of a start/end time.<br>|
|elevation|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|periods|[[GridpointHourlyForecastPeriod](#schemagridpointhourlyforecastperiod)]|false|none|An array of forecast periods.|
|@context|[JsonLdContext](#schemajsonldcontext)|true|none|none|
|geometry|[GeometryString](#schemageometrystring)|true|none|A geometry represented in Well-Known Text (WKT) format.|

#### Enumerated Values

|Property|Value|
|---|---|
|units|us|
|units|si|

<h2 id="tocS_ISO8601Duration">ISO8601Duration</h2>
<!-- backwards compatibility -->
<a id="schemaiso8601duration"></a>
<a id="schema_ISO8601Duration"></a>
<a id="tocSiso8601duration"></a>
<a id="tocsiso8601duration"></a>

```json
"P2DT12H"
```

A time duration in ISO 8601 format.

<h2 id="tocS_ISO8601Interval">ISO8601Interval</h2>
<!-- backwards compatibility -->
<a id="schemaiso8601interval"></a>
<a id="schema_ISO8601Interval"></a>
<a id="tocSiso8601interval"></a>
<a id="tocsiso8601interval"></a>

```json
"2007-03-01T13:00:00Z/2008-05-11T15:30:00Z"
```

A time interval in ISO 8601 format. This can be one of:

    1. Start and end time
    2. Start time and duration
    3. Duration and end time
The string "NOW" can also be used in place of a start/end time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|string|false|none|none|
|*oneOf*|string|false|none|none|

<h2 id="tocS_JsonLdContext">JsonLdContext</h2>
<!-- backwards compatibility -->
<a id="schemajsonldcontext"></a>
<a id="schema_JsonLdContext"></a>
<a id="tocSjsonldcontext"></a>
<a id="tocsjsonldcontext"></a>

```json
[
  null
]
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[object]|false|none|none|
|*anyOf*|object|false|none|none|

<h2 id="tocS_LandRegionCode">LandRegionCode</h2>
<!-- backwards compatibility -->
<a id="schemalandregioncode"></a>
<a id="schema_LandRegionCode"></a>
<a id="tocSlandregioncode"></a>
<a id="tocslandregioncode"></a>

```json
"AR"
```

Land region code. These correspond to the six NWS regional headquarters:
* AR: Alaska Region
* CR: Central Region
* ER: Eastern Region
* PR: Pacific Region
* SR: Southern Region
* WR: Western Region

<h2 id="tocS_MarineAreaCode">MarineAreaCode</h2>
<!-- backwards compatibility -->
<a id="schemamarineareacode"></a>
<a id="schema_MarineAreaCode"></a>
<a id="tocSmarineareacode"></a>
<a id="tocsmarineareacode"></a>

```json
"AM"
```

Marine area code as defined in NWS Directive 10-302:
* AM: Western North Atlantic Ocean and along U.S. East Coast south of Currituck Beach Light NC following the coastline into Gulf of Mexico to Ocean Reef FL including the Caribbean
* AN: Western North Atlantic Ocean and along U.S. East Coast from Canadian border south to Currituck Beach Light NC
* GM: Gulf of Mexico and along the U.S. Gulf Coast from the Mexican border to Ocean Reef FL
* LC: Lake St. Clair
* LE: Lake Erie
* LH: Lake Huron
* LM: Lake Michigan
* LO: Lake Ontario
* LS: Lake Superior
* PH: Central Pacific Ocean including Hawaiian waters
* PK: North Pacific Ocean near Alaska and along Alaska coastline including the Bering Sea and the Gulf of Alaska
* PM: Western Pacific Ocean including Mariana Island waters
* PS: South Central Pacific Ocean including American Samoa waters
* PZ: Eastern North Pacific Ocean and along U.S. West Coast from Canadian border to Mexican border
* SL: St. Lawrence River above St. Regis

<h2 id="tocS_MarineRegionCode">MarineRegionCode</h2>
<!-- backwards compatibility -->
<a id="schemamarineregioncode"></a>
<a id="schema_MarineRegionCode"></a>
<a id="tocSmarineregioncode"></a>
<a id="tocsmarineregioncode"></a>

```json
"AL"
```

Marine region code. These are groups of marine areas combined.
* AL: Alaska waters (PK)
* AT: Atlantic Ocean (AM, AN)
* GL: Great Lakes (LC, LE, LH, LM, LO, LS, SL)
* GM: Gulf of Mexico (GM)
* PA: Eastern Pacific Ocean and U.S. West Coast (PZ)
* PI: Central and Western Pacific (PH, PM, PS)

<h2 id="tocS_MetarPhenomenon">MetarPhenomenon</h2>
<!-- backwards compatibility -->
<a id="schemametarphenomenon"></a>
<a id="schema_MetarPhenomenon"></a>
<a id="tocSmetarphenomenon"></a>
<a id="tocsmetarphenomenon"></a>

```json
{
  "intensity": "light",
  "modifier": "patches",
  "weather": "fog_mist",
  "rawString": "string",
  "inVicinity": true
}
```

An object representing a decoded METAR phenomenon string.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|intensity|string \| null|true|none|none|
|modifier|string \| null|true|none|none|
|weather|string|true|none|none|
|rawString|string|true|none|none|
|inVicinity|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|intensity|light|
|intensity|heavy|
|modifier|patches|
|modifier|blowing|
|modifier|low_drifting|
|modifier|freezing|
|modifier|shallow|
|modifier|partial|
|modifier|showers|
|weather|fog_mist|
|weather|dust_storm|
|weather|dust|
|weather|drizzle|
|weather|funnel_cloud|
|weather|fog|
|weather|smoke|
|weather|hail|
|weather|snow_pellets|
|weather|haze|
|weather|ice_crystals|
|weather|ice_pellets|
|weather|dust_whirls|
|weather|spray|
|weather|rain|
|weather|sand|
|weather|snow_grains|
|weather|snow|
|weather|squalls|
|weather|sand_storm|
|weather|thunderstorms|
|weather|unknown|
|weather|volcanic_ash|

<h2 id="tocS_MetarSkyCoverage">MetarSkyCoverage</h2>
<!-- backwards compatibility -->
<a id="schemametarskycoverage"></a>
<a id="schema_MetarSkyCoverage"></a>
<a id="tocSmetarskycoverage"></a>
<a id="tocsmetarskycoverage"></a>

```json
"OVC"
```

<h2 id="tocS_NWSCenterWeatherServiceUnitId">NWSCenterWeatherServiceUnitId</h2>
<!-- backwards compatibility -->
<a id="schemanwscenterweatherserviceunitid"></a>
<a id="schema_NWSCenterWeatherServiceUnitId"></a>
<a id="tocSnwscenterweatherserviceunitid"></a>
<a id="tocsnwscenterweatherserviceunitid"></a>

```json
"ZAB"
```

Three-letter identifier for a Center Weather Service Unit (CWSU).

<h2 id="tocS_NWSConnectDocumentMetadata">NWSConnectDocumentMetadata</h2>
<!-- backwards compatibility -->
<a id="schemanwsconnectdocumentmetadata"></a>
<a id="schema_NWSConnectDocumentMetadata"></a>
<a id="tocSnwsconnectdocumentmetadata"></a>
<a id="tocsnwsconnectdocumentmetadata"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "startTime": "1970-01-01T00:00:00Z",
  "endTime": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z",
  "title": "string",
  "description": "string",
  "priority": true,
  "download": "http://example.com"
}
```

Metadata for an NWS Connect document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|startTime|string(date-time)|false|none|The time when the document becomes active. ISO8601 datetime.|
|endTime|string(date-time)|false|none|The time when the document becomes inactive. ISO8601 datetime.|
|updateTime|string(date-time)|false|none|When the document was last updated. ISO8601 datetime.|
|title|string|false|none|A short title.|
|description|string|false|none|A longer description and/or caption.|
|priority|boolean|false|none|An indicator that a weather story should be emphasized.|
|download|string(uri)|false|none|The URL of the media content for the weather story.|

<h2 id="tocS_NWSForecastOfficeId">NWSForecastOfficeId</h2>
<!-- backwards compatibility -->
<a id="schemanwsforecastofficeid"></a>
<a id="schema_NWSForecastOfficeId"></a>
<a id="tocSnwsforecastofficeid"></a>
<a id="tocsnwsforecastofficeid"></a>

```json
"AKQ"
```

Three-letter identifier for a NWS office.

<h2 id="tocS_NWSNationalHQId">NWSNationalHQId</h2>
<!-- backwards compatibility -->
<a id="schemanwsnationalhqid"></a>
<a id="schema_NWSNationalHQId"></a>
<a id="tocSnwsnationalhqid"></a>
<a id="tocsnwsnationalhqid"></a>

```json
"NWS"
```

Three-letter identifier for NWS National HQ.

<h2 id="tocS_NWSOfficeId">NWSOfficeId</h2>
<!-- backwards compatibility -->
<a id="schemanwsofficeid"></a>
<a id="schema_NWSOfficeId"></a>
<a id="tocSnwsofficeid"></a>
<a id="tocsnwsofficeid"></a>

```json
"AKQ"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[NWSForecastOfficeId](#schemanwsforecastofficeid)|false|none|Three-letter identifier for a NWS office.|
|*oneOf*|[NWSRegionalHQId](#schemanwsregionalhqid)|false|none|Three-letter identifier for a NWS Regional HQ.|
|*oneOf*|[NWSNationalHQId](#schemanwsnationalhqid)|false|none|Three-letter identifier for NWS National HQ.|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|AKQ|
|*oneOf*|ALY|
|*oneOf*|BGM|
|*oneOf*|BOX|
|*oneOf*|BTV|
|*oneOf*|BUF|
|*oneOf*|CAE|
|*oneOf*|CAR|
|*oneOf*|CHS|
|*oneOf*|CLE|
|*oneOf*|CTP|
|*oneOf*|GSP|
|*oneOf*|GYX|
|*oneOf*|ILM|
|*oneOf*|ILN|
|*oneOf*|LWX|
|*oneOf*|MHX|
|*oneOf*|OKX|
|*oneOf*|PBZ|
|*oneOf*|PHI|
|*oneOf*|RAH|
|*oneOf*|RLX|
|*oneOf*|RNK|
|*oneOf*|ABQ|
|*oneOf*|AMA|
|*oneOf*|BMX|
|*oneOf*|BRO|
|*oneOf*|CRP|
|*oneOf*|EPZ|
|*oneOf*|EWX|
|*oneOf*|FFC|
|*oneOf*|FWD|
|*oneOf*|HGX|
|*oneOf*|HUN|
|*oneOf*|JAN|
|*oneOf*|JAX|
|*oneOf*|KEY|
|*oneOf*|LCH|
|*oneOf*|LIX|
|*oneOf*|LUB|
|*oneOf*|LZK|
|*oneOf*|MAF|
|*oneOf*|MEG|
|*oneOf*|MFL|
|*oneOf*|MLB|
|*oneOf*|MOB|
|*oneOf*|MRX|
|*oneOf*|OHX|
|*oneOf*|OUN|
|*oneOf*|SHV|
|*oneOf*|SJT|
|*oneOf*|SJU|
|*oneOf*|TAE|
|*oneOf*|TBW|
|*oneOf*|TSA|
|*oneOf*|ABR|
|*oneOf*|APX|
|*oneOf*|ARX|
|*oneOf*|BIS|
|*oneOf*|BOU|
|*oneOf*|CYS|
|*oneOf*|DDC|
|*oneOf*|DLH|
|*oneOf*|DMX|
|*oneOf*|DTX|
|*oneOf*|DVN|
|*oneOf*|EAX|
|*oneOf*|FGF|
|*oneOf*|FSD|
|*oneOf*|GID|
|*oneOf*|GJT|
|*oneOf*|GLD|
|*oneOf*|GRB|
|*oneOf*|GRR|
|*oneOf*|ICT|
|*oneOf*|ILX|
|*oneOf*|IND|
|*oneOf*|IWX|
|*oneOf*|JKL|
|*oneOf*|LBF|
|*oneOf*|LMK|
|*oneOf*|LOT|
|*oneOf*|LSX|
|*oneOf*|MKX|
|*oneOf*|MPX|
|*oneOf*|MQT|
|*oneOf*|OAX|
|*oneOf*|PAH|
|*oneOf*|PUB|
|*oneOf*|RIW|
|*oneOf*|SGF|
|*oneOf*|TOP|
|*oneOf*|UNR|
|*oneOf*|BOI|
|*oneOf*|BYZ|
|*oneOf*|EKA|
|*oneOf*|FGZ|
|*oneOf*|GGW|
|*oneOf*|HNX|
|*oneOf*|LKN|
|*oneOf*|LOX|
|*oneOf*|MFR|
|*oneOf*|MSO|
|*oneOf*|MTR|
|*oneOf*|OTX|
|*oneOf*|PDT|
|*oneOf*|PIH|
|*oneOf*|PQR|
|*oneOf*|PSR|
|*oneOf*|REV|
|*oneOf*|SEW|
|*oneOf*|SGX|
|*oneOf*|SLC|
|*oneOf*|STO|
|*oneOf*|TFX|
|*oneOf*|TWC|
|*oneOf*|VEF|
|*oneOf*|AER|
|*oneOf*|AFC|
|*oneOf*|AFG|
|*oneOf*|AJK|
|*oneOf*|ALU|
|*oneOf*|GUM|
|*oneOf*|HPA|
|*oneOf*|HFO|
|*oneOf*|PPG|
|*oneOf*|PQE|
|*oneOf*|PQW|
|*oneOf*|STU|
|*oneOf*|NH1|
|*oneOf*|NH2|
|*oneOf*|ONA|
|*oneOf*|ONP|
|*oneOf*|ARH|
|*oneOf*|CRH|
|*oneOf*|ERH|
|*oneOf*|PRH|
|*oneOf*|SRH|
|*oneOf*|WRH|
|*oneOf*|NWS|

<h2 id="tocS_NWSRegionalHQId">NWSRegionalHQId</h2>
<!-- backwards compatibility -->
<a id="schemanwsregionalhqid"></a>
<a id="schema_NWSRegionalHQId"></a>
<a id="tocSnwsregionalhqid"></a>
<a id="tocsnwsregionalhqid"></a>

```json
"ARH"
```

Three-letter identifier for a NWS Regional HQ.

<h2 id="tocS_NWSZoneID">NWSZoneID</h2>
<!-- backwards compatibility -->
<a id="schemanwszoneid"></a>
<a id="schema_NWSZoneID"></a>
<a id="tocSnwszoneid"></a>
<a id="tocsnwszoneid"></a>

```json
"string"
```

UGC identifier for a NWS forecast zone or county.
The first two letters will correspond to either a state code or marine area code (see #/components/schemas/StateTerritoryCode and #/components/schemas/MarineAreaCode for lists of valid letter combinations).
The third letter will be Z for public/fire zone or C for county.

<h2 id="tocS_NWSZoneType">NWSZoneType</h2>
<!-- backwards compatibility -->
<a id="schemanwszonetype"></a>
<a id="schema_NWSZoneType"></a>
<a id="tocSnwszonetype"></a>
<a id="tocsnwszonetype"></a>

```json
"land"
```

<h2 id="tocS_Observation">Observation</h2>
<!-- backwards compatibility -->
<a id="schemaobservation"></a>
<a id="schema_Observation"></a>
<a id="tocSobservation"></a>
<a id="tocsobservation"></a>

```json
{
  "@context": [
    null
  ],
  "geometry": "string",
  "@id": "http://example.com",
  "@type": "wx:ObservationStation",
  "elevation": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "station": "http://example.com",
  "stationId": "string",
  "stationName": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "rawMessage": "string",
  "textDescription": "string",
  "icon": "http://example.com",
  "presentWeather": [
    {
      "intensity": "light",
      "modifier": "patches",
      "weather": "fog_mist",
      "rawString": "string",
      "inVicinity": true
    }
  ],
  "temperature": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "dewpoint": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "windDirection": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "windSpeed": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "windGust": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "barometricPressure": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "seaLevelPressure": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "visibility": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "maxTemperatureLast24Hours": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "minTemperatureLast24Hours": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "precipitationLastHour": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "precipitationLast3Hours": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "precipitationLast6Hours": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "relativeHumidity": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "windChill": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "heatIndex": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "cloudLayers": [
    {
      "base": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "amount": "OVC"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|geometry|[GeometryString](#schemageometrystring)|false|none|A geometry represented in Well-Known Text (WKT) format.|
|@id|string(uri)|false|none|none|
|@type|string|false|none|none|
|elevation|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|station|string(uri)|false|none|none|
|stationId|string|false|none|none|
|stationName|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|rawMessage|string|false|none|none|
|textDescription|string|false|none|none|
|icon|string \| null(uri)|false|none|**Deprecated.**|
|presentWeather|[[MetarPhenomenon](#schemametarphenomenon)]|false|none|none|
|temperature|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|dewpoint|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|windDirection|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|windSpeed|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|windGust|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|barometricPressure|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|seaLevelPressure|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|visibility|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|maxTemperatureLast24Hours|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|minTemperatureLast24Hours|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|precipitationLastHour|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|precipitationLast3Hours|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|precipitationLast6Hours|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|relativeHumidity|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|windChill|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|heatIndex|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|cloudLayers|[object]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|@type|wx:ObservationStation|

<h2 id="tocS_ObservationGeoJson">ObservationGeoJson</h2>
<!-- backwards compatibility -->
<a id="schemaobservationgeojson"></a>
<a id="schema_ObservationGeoJson"></a>
<a id="tocSobservationgeojson"></a>
<a id="tocsobservationgeojson"></a>

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "@context": [
      null
    ],
    "geometry": "string",
    "@id": "http://example.com",
    "@type": "wx:ObservationStation",
    "elevation": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "station": "http://example.com",
    "stationId": "string",
    "stationName": "string",
    "timestamp": "1970-01-01T00:00:00Z",
    "rawMessage": "string",
    "textDescription": "string",
    "icon": "http://example.com",
    "presentWeather": [
      {
        "intensity": "light",
        "modifier": "patches",
        "weather": "fog_mist",
        "rawString": "string",
        "inVicinity": true
      }
    ],
    "temperature": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "dewpoint": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "windDirection": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "windSpeed": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "windGust": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "barometricPressure": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "seaLevelPressure": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "visibility": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "maxTemperatureLast24Hours": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "minTemperatureLast24Hours": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "precipitationLastHour": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "precipitationLast3Hours": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "precipitationLast6Hours": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "relativeHumidity": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "windChill": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "heatIndex": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "cloudLayers": [
      {
        "base": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "amount": "OVC"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|id|string(uri)|false|none|none|
|type|string|true|none|none|
|geometry|[GeoJsonGeometry](#schemageojsongeometry)|true|none|A GeoJSON geometry object. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|properties|object|true|none|none|
|properties|[Observation](#schemaobservation)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|

<h2 id="tocS_ObservationJsonLd">ObservationJsonLd</h2>
<!-- backwards compatibility -->
<a id="schemaobservationjsonld"></a>
<a id="schema_ObservationJsonLd"></a>
<a id="tocSobservationjsonld"></a>
<a id="tocsobservationjsonld"></a>

```json
{
  "@context": [
    null
  ],
  "geometry": "string",
  "@id": "http://example.com",
  "@type": "wx:ObservationStation",
  "elevation": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "station": "http://example.com",
  "stationId": "string",
  "stationName": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "rawMessage": "string",
  "textDescription": "string",
  "icon": "http://example.com",
  "presentWeather": [
    {
      "intensity": "light",
      "modifier": "patches",
      "weather": "fog_mist",
      "rawString": "string",
      "inVicinity": true
    }
  ],
  "temperature": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "dewpoint": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "windDirection": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "windSpeed": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "windGust": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "barometricPressure": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "seaLevelPressure": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "visibility": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "maxTemperatureLast24Hours": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "minTemperatureLast24Hours": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "precipitationLastHour": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "precipitationLast3Hours": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "precipitationLast6Hours": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "relativeHumidity": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "windChill": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "heatIndex": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "cloudLayers": [
    {
      "base": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "amount": "OVC"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|geometry|[GeometryString](#schemageometrystring)|false|none|A geometry represented in Well-Known Text (WKT) format.|
|@id|string(uri)|false|none|none|
|@type|string|false|none|none|
|elevation|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|station|string(uri)|false|none|none|
|stationId|string|false|none|none|
|stationName|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|rawMessage|string|false|none|none|
|textDescription|string|false|none|none|
|icon|string \| null(uri)|false|none|**Deprecated.**|
|presentWeather|[[MetarPhenomenon](#schemametarphenomenon)]|false|none|none|
|temperature|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|dewpoint|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|windDirection|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|windSpeed|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|windGust|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|barometricPressure|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|seaLevelPressure|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|visibility|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|maxTemperatureLast24Hours|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|minTemperatureLast24Hours|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|precipitationLastHour|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|precipitationLast3Hours|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|precipitationLast6Hours|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|relativeHumidity|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|windChill|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|heatIndex|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|cloudLayers|[object]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|@type|wx:ObservationStation|

<h2 id="tocS_ObservationCollectionGeoJson">ObservationCollectionGeoJson</h2>
<!-- backwards compatibility -->
<a id="schemaobservationcollectiongeojson"></a>
<a id="schema_ObservationCollectionGeoJson"></a>
<a id="tocSobservationcollectiongeojson"></a>
<a id="tocsobservationcollectiongeojson"></a>

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "@context": [
          null
        ],
        "geometry": "string",
        "@id": "http://example.com",
        "@type": "wx:ObservationStation",
        "elevation": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "station": "http://example.com",
        "stationId": "string",
        "stationName": "string",
        "timestamp": "1970-01-01T00:00:00Z",
        "rawMessage": "string",
        "textDescription": "string",
        "icon": "http://example.com",
        "presentWeather": [
          {
            "intensity": "light",
            "modifier": "patches",
            "weather": "fog_mist",
            "rawString": "string",
            "inVicinity": true
          }
        ],
        "temperature": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "dewpoint": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windDirection": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windSpeed": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windGust": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "barometricPressure": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "seaLevelPressure": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "visibility": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "maxTemperatureLast24Hours": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "minTemperatureLast24Hours": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "precipitationLastHour": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "precipitationLast3Hours": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "precipitationLast6Hours": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "relativeHumidity": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "windChill": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "heatIndex": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "cloudLayers": [
          {
            "base": {
              "value": 0,
              "maxValue": 0,
              "minValue": 0,
              "unitCode": "string",
              "qualityControl": "Z"
            },
            "amount": "OVC"
          }
        ]
      }
    }
  ],
  "pagination": {
    "next": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|type|string|true|none|none|
|features|[[GeoJsonFeature](#schemageojsonfeature)]|true|none|none|
|features|[object]|true|none|none|
|pagination|[PaginationInfo](#schemapaginationinfo)|false|none|Links for retrieving more data from paged data sets|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FeatureCollection|

<h2 id="tocS_ObservationCollectionJsonLd">ObservationCollectionJsonLd</h2>
<!-- backwards compatibility -->
<a id="schemaobservationcollectionjsonld"></a>
<a id="schema_ObservationCollectionJsonLd"></a>
<a id="tocSobservationcollectionjsonld"></a>
<a id="tocsobservationcollectionjsonld"></a>

```json
{
  "@context": [
    null
  ],
  "@graph": [
    {
      "@context": [
        null
      ],
      "geometry": "string",
      "@id": "http://example.com",
      "@type": "wx:ObservationStation",
      "elevation": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "station": "http://example.com",
      "stationId": "string",
      "stationName": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "rawMessage": "string",
      "textDescription": "string",
      "icon": "http://example.com",
      "presentWeather": [
        {
          "intensity": "light",
          "modifier": "patches",
          "weather": "fog_mist",
          "rawString": "string",
          "inVicinity": true
        }
      ],
      "temperature": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "dewpoint": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "windDirection": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "windSpeed": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "windGust": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "barometricPressure": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "seaLevelPressure": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "visibility": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "maxTemperatureLast24Hours": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "minTemperatureLast24Hours": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "precipitationLastHour": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "precipitationLast3Hours": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "precipitationLast6Hours": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "relativeHumidity": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "windChill": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "heatIndex": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "cloudLayers": [
        {
          "base": {
            "value": 0,
            "maxValue": 0,
            "minValue": 0,
            "unitCode": "string",
            "qualityControl": "Z"
          },
          "amount": "OVC"
        }
      ]
    }
  ],
  "pagination": {
    "next": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|@graph|[[Observation](#schemaobservation)]|false|none|none|
|pagination|[PaginationInfo](#schemapaginationinfo)|false|none|Links for retrieving more data from paged data sets|

<h2 id="tocS_ObservationStation">ObservationStation</h2>
<!-- backwards compatibility -->
<a id="schemaobservationstation"></a>
<a id="schema_ObservationStation"></a>
<a id="tocSobservationstation"></a>
<a id="tocsobservationstation"></a>

```json
{
  "@context": [
    null
  ],
  "geometry": "string",
  "@id": "http://example.com",
  "@type": "wx:ObservationStation",
  "elevation": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "stationIdentifier": "string",
  "name": "string",
  "timeZone": "string",
  "provider": "string",
  "subProvider": "string",
  "forecast": "http://example.com",
  "county": "http://example.com",
  "fireWeatherZone": "http://example.com",
  "distance": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "bearing": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|geometry|[GeometryString](#schemageometrystring)|false|none|A geometry represented in Well-Known Text (WKT) format.|
|@id|string(uri)|false|none|none|
|@type|string|false|none|none|
|elevation|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|stationIdentifier|string|false|none|none|
|name|string|false|none|none|
|timeZone|string(iana-time-zone-identifier)|false|none|none|
|provider|string|false|none|The data provider for this station. E.g., "ASOS," "MesoWest," etc.|
|subProvider|string|false|none|The sub-provider of for this station. E.g., "FAA," "DOT," etc.|
|forecast|string(uri)|false|none|A link to the NWS public forecast zone containing this station.|
|county|string(uri)|false|none|A link to the NWS county zone containing this station.|
|fireWeatherZone|string(uri)|false|none|A link to the NWS fire weather forecast zone containing this station.|
|distance|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|bearing|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|@type|wx:ObservationStation|

<h2 id="tocS_ObservationStationGeoJson">ObservationStationGeoJson</h2>
<!-- backwards compatibility -->
<a id="schemaobservationstationgeojson"></a>
<a id="schema_ObservationStationGeoJson"></a>
<a id="tocSobservationstationgeojson"></a>
<a id="tocsobservationstationgeojson"></a>

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "@context": [
      null
    ],
    "geometry": "string",
    "@id": "http://example.com",
    "@type": "wx:ObservationStation",
    "elevation": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "stationIdentifier": "string",
    "name": "string",
    "timeZone": "string",
    "provider": "string",
    "subProvider": "string",
    "forecast": "http://example.com",
    "county": "http://example.com",
    "fireWeatherZone": "http://example.com",
    "distance": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "bearing": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|id|string(uri)|false|none|none|
|type|string|true|none|none|
|geometry|[GeoJsonGeometry](#schemageojsongeometry)|true|none|A GeoJSON geometry object. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|properties|object|true|none|none|
|properties|[ObservationStation](#schemaobservationstation)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|

<h2 id="tocS_ObservationStationJsonLd">ObservationStationJsonLd</h2>
<!-- backwards compatibility -->
<a id="schemaobservationstationjsonld"></a>
<a id="schema_ObservationStationJsonLd"></a>
<a id="tocSobservationstationjsonld"></a>
<a id="tocsobservationstationjsonld"></a>

```json
{
  "@context": [
    null
  ],
  "geometry": "string",
  "@id": "http://example.com",
  "@type": "wx:ObservationStation",
  "elevation": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "stationIdentifier": "string",
  "name": "string",
  "timeZone": "string",
  "provider": "string",
  "subProvider": "string",
  "forecast": "http://example.com",
  "county": "http://example.com",
  "fireWeatherZone": "http://example.com",
  "distance": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "bearing": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|true|none|none|
|geometry|[GeometryString](#schemageometrystring)|true|none|A geometry represented in Well-Known Text (WKT) format.|
|@id|string(uri)|false|none|none|
|@type|string|false|none|none|
|elevation|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|stationIdentifier|string|false|none|none|
|name|string|false|none|none|
|timeZone|string(iana-time-zone-identifier)|false|none|none|
|provider|string|false|none|The data provider for this station. E.g., "ASOS," "MesoWest," etc.|
|subProvider|string|false|none|The sub-provider of for this station. E.g., "FAA," "DOT," etc.|
|forecast|string(uri)|false|none|A link to the NWS public forecast zone containing this station.|
|county|string(uri)|false|none|A link to the NWS county zone containing this station.|
|fireWeatherZone|string(uri)|false|none|A link to the NWS fire weather forecast zone containing this station.|
|distance|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|bearing|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|@context|[JsonLdContext](#schemajsonldcontext)|true|none|none|
|geometry|[GeometryString](#schemageometrystring)|true|none|A geometry represented in Well-Known Text (WKT) format.|

#### Enumerated Values

|Property|Value|
|---|---|
|@type|wx:ObservationStation|

<h2 id="tocS_ObservationStationCollectionGeoJson">ObservationStationCollectionGeoJson</h2>
<!-- backwards compatibility -->
<a id="schemaobservationstationcollectiongeojson"></a>
<a id="schema_ObservationStationCollectionGeoJson"></a>
<a id="tocSobservationstationcollectiongeojson"></a>
<a id="tocsobservationstationcollectiongeojson"></a>

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "@context": [
          null
        ],
        "geometry": "string",
        "@id": "http://example.com",
        "@type": "wx:ObservationStation",
        "elevation": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "stationIdentifier": "string",
        "name": "string",
        "timeZone": "string",
        "provider": "string",
        "subProvider": "string",
        "forecast": "http://example.com",
        "county": "http://example.com",
        "fireWeatherZone": "http://example.com",
        "distance": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "bearing": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        }
      }
    }
  ],
  "observationStations": [
    "http://example.com"
  ],
  "pagination": {
    "next": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|type|string|true|none|none|
|features|[[GeoJsonFeature](#schemageojsonfeature)]|true|none|none|
|features|[object]|true|none|none|
|observationStations|[string(uri)]|false|none|none|
|pagination|[PaginationInfo](#schemapaginationinfo)|false|none|Links for retrieving more data from paged data sets|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FeatureCollection|

<h2 id="tocS_ObservationStationCollectionJsonLd">ObservationStationCollectionJsonLd</h2>
<!-- backwards compatibility -->
<a id="schemaobservationstationcollectionjsonld"></a>
<a id="schema_ObservationStationCollectionJsonLd"></a>
<a id="tocSobservationstationcollectionjsonld"></a>
<a id="tocsobservationstationcollectionjsonld"></a>

```json
{
  "@context": [
    null
  ],
  "@graph": [
    {
      "@context": [
        null
      ],
      "geometry": "string",
      "@id": "http://example.com",
      "@type": "wx:ObservationStation",
      "elevation": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "stationIdentifier": "string",
      "name": "string",
      "timeZone": "string",
      "provider": "string",
      "subProvider": "string",
      "forecast": "http://example.com",
      "county": "http://example.com",
      "fireWeatherZone": "http://example.com",
      "distance": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "bearing": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      }
    }
  ],
  "observationStations": [
    "http://example.com"
  ],
  "pagination": {
    "next": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|@graph|[[ObservationStation](#schemaobservationstation)]|false|none|none|
|observationStations|[string(uri)]|false|none|none|
|pagination|[PaginationInfo](#schemapaginationinfo)|false|none|Links for retrieving more data from paged data sets|

<h2 id="tocS_Office">Office</h2>
<!-- backwards compatibility -->
<a id="schemaoffice"></a>
<a id="schema_Office"></a>
<a id="tocSoffice"></a>
<a id="tocsoffice"></a>

```json
{
  "@context": [
    null
  ],
  "@type": "GovernmentOrganization",
  "@id": "http://example.com",
  "id": "string",
  "name": "string",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "postalCode": "string"
  },
  "telephone": "string",
  "faxNumber": "string",
  "email": "string",
  "sameAs": "http://example.com",
  "nwsRegion": "string",
  "parentOrganization": "http://example.com",
  "responsibleCounties": [
    "http://example.com"
  ],
  "responsibleForecastZones": [
    "http://example.com"
  ],
  "responsibleFireZones": [
    "http://example.com"
  ],
  "approvedObservationStations": [
    "http://example.com"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|@type|string|false|none|none|
|@id|string(uri)|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|address|object|false|none|none|
|telephone|string|false|none|none|
|faxNumber|string|false|none|none|
|email|string|false|none|none|
|sameAs|string(uri)|false|none|none|
|nwsRegion|string|false|none|none|
|parentOrganization|string(uri)|false|none|none|
|responsibleCounties|[string(uri)]|false|none|none|
|responsibleForecastZones|[string(uri)]|false|none|none|
|responsibleFireZones|[string(uri)]|false|none|none|
|approvedObservationStations|[string(uri)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|@type|GovernmentOrganization|

<h2 id="tocS_OfficeBriefing">OfficeBriefing</h2>
<!-- backwards compatibility -->
<a id="schemaofficebriefing"></a>
<a id="schema_OfficeBriefing"></a>
<a id="tocSofficebriefing"></a>
<a id="tocsofficebriefing"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "startTime": "1970-01-01T00:00:00Z",
  "endTime": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z",
  "title": "string",
  "description": "string",
  "priority": true,
  "download": "http://example.com"
}
```

Metadata for an NWS Connect document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|startTime|string(date-time)|false|none|The time when the document becomes active. ISO8601 datetime.|
|endTime|string(date-time)|false|none|The time when the document becomes inactive. ISO8601 datetime.|
|updateTime|string(date-time)|false|none|When the document was last updated. ISO8601 datetime.|
|title|string|false|none|A short title.|
|description|string|false|none|A longer description and/or caption.|
|priority|boolean|false|none|An indicator that a weather story should be emphasized.|
|download|string(uri)|false|none|The URL of the media content for the weather story.|

<h2 id="tocS_OfficeHeadline">OfficeHeadline</h2>
<!-- backwards compatibility -->
<a id="schemaofficeheadline"></a>
<a id="schema_OfficeHeadline"></a>
<a id="tocSofficeheadline"></a>
<a id="tocsofficeheadline"></a>

```json
{
  "@context": [
    null
  ],
  "@id": "http://example.com",
  "id": "string",
  "office": "http://example.com",
  "important": true,
  "issuanceTime": "1970-01-01T00:00:00Z",
  "link": "http://example.com",
  "name": "string",
  "title": "string",
  "summary": "string",
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|@id|string(uri)|false|none|none|
|id|string|false|none|none|
|office|string(uri)|false|none|none|
|important|boolean|false|none|none|
|issuanceTime|string(date-time)|false|none|none|
|link|string(uri)|false|none|none|
|name|string|false|none|none|
|title|string|false|none|none|
|summary|string \| null|false|none|none|
|content|string|false|none|none|

<h2 id="tocS_OfficeHeadlineCollection">OfficeHeadlineCollection</h2>
<!-- backwards compatibility -->
<a id="schemaofficeheadlinecollection"></a>
<a id="schema_OfficeHeadlineCollection"></a>
<a id="tocSofficeheadlinecollection"></a>
<a id="tocsofficeheadlinecollection"></a>

```json
{
  "@context": [
    null
  ],
  "@graph": [
    {
      "@context": [
        null
      ],
      "@id": "http://example.com",
      "id": "string",
      "office": "http://example.com",
      "important": true,
      "issuanceTime": "1970-01-01T00:00:00Z",
      "link": "http://example.com",
      "name": "string",
      "title": "string",
      "summary": "string",
      "content": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|true|none|none|
|@graph|[[OfficeHeadline](#schemaofficeheadline)]|true|none|none|

<h2 id="tocS_OfficeWeatherStory">OfficeWeatherStory</h2>
<!-- backwards compatibility -->
<a id="schemaofficeweatherstory"></a>
<a id="schema_OfficeWeatherStory"></a>
<a id="tocSofficeweatherstory"></a>
<a id="tocsofficeweatherstory"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "startTime": "1970-01-01T00:00:00Z",
  "endTime": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z",
  "title": "string",
  "description": "string",
  "priority": true,
  "download": "http://example.com",
  "altText": "string",
  "order": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|startTime|string(date-time)|true|none|The time when the document becomes active. ISO8601 datetime.|
|endTime|string(date-time)|true|none|The time when the document becomes inactive. ISO8601 datetime.|
|updateTime|string(date-time)|true|none|When the document was last updated. ISO8601 datetime.|
|title|string|true|none|A short title.|
|description|string|true|none|A longer description and/or caption.|
|priority|boolean|true|none|An indicator that a weather story should be emphasized.|
|download|string(uri)|true|none|The URL of the media content for the weather story.|
|altText|string|true|none|Alternative text description of the content of the image for assistive technology.|
|order|integer|true|none|The order in which a weather story should be displayed. Unique for each object.|

<h2 id="tocS_OfficeWeatherStoryCollection">OfficeWeatherStoryCollection</h2>
<!-- backwards compatibility -->
<a id="schemaofficeweatherstorycollection"></a>
<a id="schema_OfficeWeatherStoryCollection"></a>
<a id="tocSofficeweatherstorycollection"></a>
<a id="tocsofficeweatherstorycollection"></a>

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "startTime": "1970-01-01T00:00:00Z",
    "endTime": "1970-01-01T00:00:00Z",
    "updateTime": "1970-01-01T00:00:00Z",
    "title": "string",
    "description": "string",
    "priority": true,
    "download": "http://example.com",
    "altText": "string",
    "order": 1
  }
]
```

<h2 id="tocS_PaginationInfo">PaginationInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaginationinfo"></a>
<a id="schema_PaginationInfo"></a>
<a id="tocSpaginationinfo"></a>
<a id="tocspaginationinfo"></a>

```json
{
  "next": "http://example.com"
}
```

Links for retrieving more data from paged data sets

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|string(uri)|true|none|A link to the next page of records|

<h2 id="tocS_Point">Point</h2>
<!-- backwards compatibility -->
<a id="schemapoint"></a>
<a id="schema_Point"></a>
<a id="tocSpoint"></a>
<a id="tocspoint"></a>

```json
{
  "@context": [
    null
  ],
  "geometry": "string",
  "@id": "http://example.com",
  "@type": "wx:Point",
  "cwa": "AKQ",
  "type": "land",
  "forecastOffice": "http://example.com",
  "gridId": "AKQ",
  "gridX": 0,
  "gridY": 0,
  "forecast": "http://example.com",
  "forecastHourly": "http://example.com",
  "forecastGridData": "http://example.com",
  "observationStations": "http://example.com",
  "relativeLocation": {
    "@context": [
      null
    ],
    "id": "http://example.com",
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        0,
        0
      ],
      "bbox": [
        0,
        0,
        0,
        0
      ]
    },
    "properties": {
      "city": "string",
      "state": "string",
      "distance": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "bearing": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      }
    }
  },
  "forecastZone": "http://example.com",
  "county": "http://example.com",
  "fireWeatherZone": "http://example.com",
  "timeZone": "string",
  "radarStation": "string",
  "astronomicalData": {
    "sunrise": "1970-01-01T00:00:00Z",
    "sunset": "1970-01-01T00:00:00Z",
    "transit": "1970-01-01T00:00:00Z",
    "civilTwilightBegin": "1970-01-01T00:00:00Z",
    "civilTwilightEnd": "1970-01-01T00:00:00Z",
    "nauticalTwilightBegin": "1970-01-01T00:00:00Z",
    "nauticalTwilightEnd": "1970-01-01T00:00:00Z",
    "astronomicalTwilightBegin": "1970-01-01T00:00:00Z",
    "astronomicalTwilightEnd": "1970-01-01T00:00:00Z"
  },
  "nwr": {
    "transmitter": "string",
    "sameCode": "string",
    "areaBroadcast": "http://example.com",
    "pointBroadcast": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|geometry|[GeometryString](#schemageometrystring)|false|none|A geometry represented in Well-Known Text (WKT) format.|
|@id|string(uri)|false|none|none|
|@type|string|false|none|none|
|cwa|[NWSForecastOfficeId](#schemanwsforecastofficeid)|false|none|Three-letter identifier for a NWS office.|
|type|string|false|none|Whether the specific point is on land or marine|
|forecastOffice|string(uri)|false|none|none|
|gridId|[NWSForecastOfficeId](#schemanwsforecastofficeid)|false|none|Three-letter identifier for a NWS office.|
|gridX|integer|false|none|none|
|gridY|integer|false|none|none|
|forecast|string(uri)|false|none|none|
|forecastHourly|string(uri)|false|none|none|
|forecastGridData|string(uri)|false|none|none|
|observationStations|string(uri)|false|none|none|
|relativeLocation|[RelativeLocationGeoJson](#schemarelativelocationgeojson) \| [RelativeLocationJsonLd](#schemarelativelocationjsonld)|false|none|none|
|forecastZone|string(uri)|false|none|none|
|county|string(uri)|false|none|none|
|fireWeatherZone|string(uri)|false|none|none|
|timeZone|string|false|none|none|
|radarStation|string|false|none|none|
|astronomicalData|[AstronomicalData](#schemaastronomicaldata)|false|none|An object representing sunrise, sunset, and twilight information for a location.<br>|
|nwr|object|false|none|NOAA Weather Radio metadata for this point|

#### Enumerated Values

|Property|Value|
|---|---|
|@type|wx:Point|
|cwa|AKQ|
|cwa|ALY|
|cwa|BGM|
|cwa|BOX|
|cwa|BTV|
|cwa|BUF|
|cwa|CAE|
|cwa|CAR|
|cwa|CHS|
|cwa|CLE|
|cwa|CTP|
|cwa|GSP|
|cwa|GYX|
|cwa|ILM|
|cwa|ILN|
|cwa|LWX|
|cwa|MHX|
|cwa|OKX|
|cwa|PBZ|
|cwa|PHI|
|cwa|RAH|
|cwa|RLX|
|cwa|RNK|
|cwa|ABQ|
|cwa|AMA|
|cwa|BMX|
|cwa|BRO|
|cwa|CRP|
|cwa|EPZ|
|cwa|EWX|
|cwa|FFC|
|cwa|FWD|
|cwa|HGX|
|cwa|HUN|
|cwa|JAN|
|cwa|JAX|
|cwa|KEY|
|cwa|LCH|
|cwa|LIX|
|cwa|LUB|
|cwa|LZK|
|cwa|MAF|
|cwa|MEG|
|cwa|MFL|
|cwa|MLB|
|cwa|MOB|
|cwa|MRX|
|cwa|OHX|
|cwa|OUN|
|cwa|SHV|
|cwa|SJT|
|cwa|SJU|
|cwa|TAE|
|cwa|TBW|
|cwa|TSA|
|cwa|ABR|
|cwa|APX|
|cwa|ARX|
|cwa|BIS|
|cwa|BOU|
|cwa|CYS|
|cwa|DDC|
|cwa|DLH|
|cwa|DMX|
|cwa|DTX|
|cwa|DVN|
|cwa|EAX|
|cwa|FGF|
|cwa|FSD|
|cwa|GID|
|cwa|GJT|
|cwa|GLD|
|cwa|GRB|
|cwa|GRR|
|cwa|ICT|
|cwa|ILX|
|cwa|IND|
|cwa|IWX|
|cwa|JKL|
|cwa|LBF|
|cwa|LMK|
|cwa|LOT|
|cwa|LSX|
|cwa|MKX|
|cwa|MPX|
|cwa|MQT|
|cwa|OAX|
|cwa|PAH|
|cwa|PUB|
|cwa|RIW|
|cwa|SGF|
|cwa|TOP|
|cwa|UNR|
|cwa|BOI|
|cwa|BYZ|
|cwa|EKA|
|cwa|FGZ|
|cwa|GGW|
|cwa|HNX|
|cwa|LKN|
|cwa|LOX|
|cwa|MFR|
|cwa|MSO|
|cwa|MTR|
|cwa|OTX|
|cwa|PDT|
|cwa|PIH|
|cwa|PQR|
|cwa|PSR|
|cwa|REV|
|cwa|SEW|
|cwa|SGX|
|cwa|SLC|
|cwa|STO|
|cwa|TFX|
|cwa|TWC|
|cwa|VEF|
|cwa|AER|
|cwa|AFC|
|cwa|AFG|
|cwa|AJK|
|cwa|ALU|
|cwa|GUM|
|cwa|HPA|
|cwa|HFO|
|cwa|PPG|
|cwa|PQE|
|cwa|PQW|
|cwa|STU|
|cwa|NH1|
|cwa|NH2|
|cwa|ONA|
|cwa|ONP|
|type|land|
|type|marine|
|gridId|AKQ|
|gridId|ALY|
|gridId|BGM|
|gridId|BOX|
|gridId|BTV|
|gridId|BUF|
|gridId|CAE|
|gridId|CAR|
|gridId|CHS|
|gridId|CLE|
|gridId|CTP|
|gridId|GSP|
|gridId|GYX|
|gridId|ILM|
|gridId|ILN|
|gridId|LWX|
|gridId|MHX|
|gridId|OKX|
|gridId|PBZ|
|gridId|PHI|
|gridId|RAH|
|gridId|RLX|
|gridId|RNK|
|gridId|ABQ|
|gridId|AMA|
|gridId|BMX|
|gridId|BRO|
|gridId|CRP|
|gridId|EPZ|
|gridId|EWX|
|gridId|FFC|
|gridId|FWD|
|gridId|HGX|
|gridId|HUN|
|gridId|JAN|
|gridId|JAX|
|gridId|KEY|
|gridId|LCH|
|gridId|LIX|
|gridId|LUB|
|gridId|LZK|
|gridId|MAF|
|gridId|MEG|
|gridId|MFL|
|gridId|MLB|
|gridId|MOB|
|gridId|MRX|
|gridId|OHX|
|gridId|OUN|
|gridId|SHV|
|gridId|SJT|
|gridId|SJU|
|gridId|TAE|
|gridId|TBW|
|gridId|TSA|
|gridId|ABR|
|gridId|APX|
|gridId|ARX|
|gridId|BIS|
|gridId|BOU|
|gridId|CYS|
|gridId|DDC|
|gridId|DLH|
|gridId|DMX|
|gridId|DTX|
|gridId|DVN|
|gridId|EAX|
|gridId|FGF|
|gridId|FSD|
|gridId|GID|
|gridId|GJT|
|gridId|GLD|
|gridId|GRB|
|gridId|GRR|
|gridId|ICT|
|gridId|ILX|
|gridId|IND|
|gridId|IWX|
|gridId|JKL|
|gridId|LBF|
|gridId|LMK|
|gridId|LOT|
|gridId|LSX|
|gridId|MKX|
|gridId|MPX|
|gridId|MQT|
|gridId|OAX|
|gridId|PAH|
|gridId|PUB|
|gridId|RIW|
|gridId|SGF|
|gridId|TOP|
|gridId|UNR|
|gridId|BOI|
|gridId|BYZ|
|gridId|EKA|
|gridId|FGZ|
|gridId|GGW|
|gridId|HNX|
|gridId|LKN|
|gridId|LOX|
|gridId|MFR|
|gridId|MSO|
|gridId|MTR|
|gridId|OTX|
|gridId|PDT|
|gridId|PIH|
|gridId|PQR|
|gridId|PSR|
|gridId|REV|
|gridId|SEW|
|gridId|SGX|
|gridId|SLC|
|gridId|STO|
|gridId|TFX|
|gridId|TWC|
|gridId|VEF|
|gridId|AER|
|gridId|AFC|
|gridId|AFG|
|gridId|AJK|
|gridId|ALU|
|gridId|GUM|
|gridId|HPA|
|gridId|HFO|
|gridId|PPG|
|gridId|PQE|
|gridId|PQW|
|gridId|STU|
|gridId|NH1|
|gridId|NH2|
|gridId|ONA|
|gridId|ONP|

<h2 id="tocS_PointGeoJson">PointGeoJson</h2>
<!-- backwards compatibility -->
<a id="schemapointgeojson"></a>
<a id="schema_PointGeoJson"></a>
<a id="tocSpointgeojson"></a>
<a id="tocspointgeojson"></a>

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "@context": [
      null
    ],
    "geometry": "string",
    "@id": "http://example.com",
    "@type": "wx:Point",
    "cwa": "AKQ",
    "type": "land",
    "forecastOffice": "http://example.com",
    "gridId": "AKQ",
    "gridX": 0,
    "gridY": 0,
    "forecast": "http://example.com",
    "forecastHourly": "http://example.com",
    "forecastGridData": "http://example.com",
    "observationStations": "http://example.com",
    "relativeLocation": {
      "@context": [
        null
      ],
      "id": "http://example.com",
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ],
        "bbox": [
          0,
          0,
          0,
          0
        ]
      },
      "properties": {
        "city": "string",
        "state": "string",
        "distance": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        },
        "bearing": {
          "value": 0,
          "maxValue": 0,
          "minValue": 0,
          "unitCode": "string",
          "qualityControl": "Z"
        }
      }
    },
    "forecastZone": "http://example.com",
    "county": "http://example.com",
    "fireWeatherZone": "http://example.com",
    "timeZone": "string",
    "radarStation": "string",
    "astronomicalData": {
      "sunrise": "1970-01-01T00:00:00Z",
      "sunset": "1970-01-01T00:00:00Z",
      "transit": "1970-01-01T00:00:00Z",
      "civilTwilightBegin": "1970-01-01T00:00:00Z",
      "civilTwilightEnd": "1970-01-01T00:00:00Z",
      "nauticalTwilightBegin": "1970-01-01T00:00:00Z",
      "nauticalTwilightEnd": "1970-01-01T00:00:00Z",
      "astronomicalTwilightBegin": "1970-01-01T00:00:00Z",
      "astronomicalTwilightEnd": "1970-01-01T00:00:00Z"
    },
    "nwr": {
      "transmitter": "string",
      "sameCode": "string",
      "areaBroadcast": "http://example.com",
      "pointBroadcast": "http://example.com"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|id|string(uri)|false|none|none|
|type|string|true|none|none|
|geometry|[GeoJsonGeometry](#schemageojsongeometry)|true|none|A GeoJSON geometry object. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|properties|object|true|none|none|
|properties|[Point](#schemapoint)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|

<h2 id="tocS_PointJsonLd">PointJsonLd</h2>
<!-- backwards compatibility -->
<a id="schemapointjsonld"></a>
<a id="schema_PointJsonLd"></a>
<a id="tocSpointjsonld"></a>
<a id="tocspointjsonld"></a>

```json
{
  "@context": [
    null
  ],
  "geometry": "string",
  "@id": "http://example.com",
  "@type": "wx:Point",
  "cwa": "AKQ",
  "type": "land",
  "forecastOffice": "http://example.com",
  "gridId": "AKQ",
  "gridX": 0,
  "gridY": 0,
  "forecast": "http://example.com",
  "forecastHourly": "http://example.com",
  "forecastGridData": "http://example.com",
  "observationStations": "http://example.com",
  "relativeLocation": {
    "@context": [
      null
    ],
    "id": "http://example.com",
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        0,
        0
      ],
      "bbox": [
        0,
        0,
        0,
        0
      ]
    },
    "properties": {
      "city": "string",
      "state": "string",
      "distance": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      },
      "bearing": {
        "value": 0,
        "maxValue": 0,
        "minValue": 0,
        "unitCode": "string",
        "qualityControl": "Z"
      }
    }
  },
  "forecastZone": "http://example.com",
  "county": "http://example.com",
  "fireWeatherZone": "http://example.com",
  "timeZone": "string",
  "radarStation": "string",
  "astronomicalData": {
    "sunrise": "1970-01-01T00:00:00Z",
    "sunset": "1970-01-01T00:00:00Z",
    "transit": "1970-01-01T00:00:00Z",
    "civilTwilightBegin": "1970-01-01T00:00:00Z",
    "civilTwilightEnd": "1970-01-01T00:00:00Z",
    "nauticalTwilightBegin": "1970-01-01T00:00:00Z",
    "nauticalTwilightEnd": "1970-01-01T00:00:00Z",
    "astronomicalTwilightBegin": "1970-01-01T00:00:00Z",
    "astronomicalTwilightEnd": "1970-01-01T00:00:00Z"
  },
  "nwr": {
    "transmitter": "string",
    "sameCode": "string",
    "areaBroadcast": "http://example.com",
    "pointBroadcast": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|true|none|none|
|geometry|[GeometryString](#schemageometrystring)|true|none|A geometry represented in Well-Known Text (WKT) format.|
|@id|string(uri)|false|none|none|
|@type|string|false|none|none|
|cwa|[NWSForecastOfficeId](#schemanwsforecastofficeid)|false|none|Three-letter identifier for a NWS office.|
|type|string|false|none|Whether the specific point is on land or marine|
|forecastOffice|string(uri)|false|none|none|
|gridId|[NWSForecastOfficeId](#schemanwsforecastofficeid)|false|none|Three-letter identifier for a NWS office.|
|gridX|integer|false|none|none|
|gridY|integer|false|none|none|
|forecast|string(uri)|false|none|none|
|forecastHourly|string(uri)|false|none|none|
|forecastGridData|string(uri)|false|none|none|
|observationStations|string(uri)|false|none|none|
|relativeLocation|[RelativeLocationGeoJson](#schemarelativelocationgeojson) \| [RelativeLocationJsonLd](#schemarelativelocationjsonld)|false|none|none|
|forecastZone|string(uri)|false|none|none|
|county|string(uri)|false|none|none|
|fireWeatherZone|string(uri)|false|none|none|
|timeZone|string|false|none|none|
|radarStation|string|false|none|none|
|astronomicalData|[AstronomicalData](#schemaastronomicaldata)|false|none|An object representing sunrise, sunset, and twilight information for a location.<br>|
|nwr|object|false|none|NOAA Weather Radio metadata for this point|
|@context|[JsonLdContext](#schemajsonldcontext)|true|none|none|
|geometry|[GeometryString](#schemageometrystring)|true|none|A geometry represented in Well-Known Text (WKT) format.|

#### Enumerated Values

|Property|Value|
|---|---|
|@type|wx:Point|
|cwa|AKQ|
|cwa|ALY|
|cwa|BGM|
|cwa|BOX|
|cwa|BTV|
|cwa|BUF|
|cwa|CAE|
|cwa|CAR|
|cwa|CHS|
|cwa|CLE|
|cwa|CTP|
|cwa|GSP|
|cwa|GYX|
|cwa|ILM|
|cwa|ILN|
|cwa|LWX|
|cwa|MHX|
|cwa|OKX|
|cwa|PBZ|
|cwa|PHI|
|cwa|RAH|
|cwa|RLX|
|cwa|RNK|
|cwa|ABQ|
|cwa|AMA|
|cwa|BMX|
|cwa|BRO|
|cwa|CRP|
|cwa|EPZ|
|cwa|EWX|
|cwa|FFC|
|cwa|FWD|
|cwa|HGX|
|cwa|HUN|
|cwa|JAN|
|cwa|JAX|
|cwa|KEY|
|cwa|LCH|
|cwa|LIX|
|cwa|LUB|
|cwa|LZK|
|cwa|MAF|
|cwa|MEG|
|cwa|MFL|
|cwa|MLB|
|cwa|MOB|
|cwa|MRX|
|cwa|OHX|
|cwa|OUN|
|cwa|SHV|
|cwa|SJT|
|cwa|SJU|
|cwa|TAE|
|cwa|TBW|
|cwa|TSA|
|cwa|ABR|
|cwa|APX|
|cwa|ARX|
|cwa|BIS|
|cwa|BOU|
|cwa|CYS|
|cwa|DDC|
|cwa|DLH|
|cwa|DMX|
|cwa|DTX|
|cwa|DVN|
|cwa|EAX|
|cwa|FGF|
|cwa|FSD|
|cwa|GID|
|cwa|GJT|
|cwa|GLD|
|cwa|GRB|
|cwa|GRR|
|cwa|ICT|
|cwa|ILX|
|cwa|IND|
|cwa|IWX|
|cwa|JKL|
|cwa|LBF|
|cwa|LMK|
|cwa|LOT|
|cwa|LSX|
|cwa|MKX|
|cwa|MPX|
|cwa|MQT|
|cwa|OAX|
|cwa|PAH|
|cwa|PUB|
|cwa|RIW|
|cwa|SGF|
|cwa|TOP|
|cwa|UNR|
|cwa|BOI|
|cwa|BYZ|
|cwa|EKA|
|cwa|FGZ|
|cwa|GGW|
|cwa|HNX|
|cwa|LKN|
|cwa|LOX|
|cwa|MFR|
|cwa|MSO|
|cwa|MTR|
|cwa|OTX|
|cwa|PDT|
|cwa|PIH|
|cwa|PQR|
|cwa|PSR|
|cwa|REV|
|cwa|SEW|
|cwa|SGX|
|cwa|SLC|
|cwa|STO|
|cwa|TFX|
|cwa|TWC|
|cwa|VEF|
|cwa|AER|
|cwa|AFC|
|cwa|AFG|
|cwa|AJK|
|cwa|ALU|
|cwa|GUM|
|cwa|HPA|
|cwa|HFO|
|cwa|PPG|
|cwa|PQE|
|cwa|PQW|
|cwa|STU|
|cwa|NH1|
|cwa|NH2|
|cwa|ONA|
|cwa|ONP|
|type|land|
|type|marine|
|gridId|AKQ|
|gridId|ALY|
|gridId|BGM|
|gridId|BOX|
|gridId|BTV|
|gridId|BUF|
|gridId|CAE|
|gridId|CAR|
|gridId|CHS|
|gridId|CLE|
|gridId|CTP|
|gridId|GSP|
|gridId|GYX|
|gridId|ILM|
|gridId|ILN|
|gridId|LWX|
|gridId|MHX|
|gridId|OKX|
|gridId|PBZ|
|gridId|PHI|
|gridId|RAH|
|gridId|RLX|
|gridId|RNK|
|gridId|ABQ|
|gridId|AMA|
|gridId|BMX|
|gridId|BRO|
|gridId|CRP|
|gridId|EPZ|
|gridId|EWX|
|gridId|FFC|
|gridId|FWD|
|gridId|HGX|
|gridId|HUN|
|gridId|JAN|
|gridId|JAX|
|gridId|KEY|
|gridId|LCH|
|gridId|LIX|
|gridId|LUB|
|gridId|LZK|
|gridId|MAF|
|gridId|MEG|
|gridId|MFL|
|gridId|MLB|
|gridId|MOB|
|gridId|MRX|
|gridId|OHX|
|gridId|OUN|
|gridId|SHV|
|gridId|SJT|
|gridId|SJU|
|gridId|TAE|
|gridId|TBW|
|gridId|TSA|
|gridId|ABR|
|gridId|APX|
|gridId|ARX|
|gridId|BIS|
|gridId|BOU|
|gridId|CYS|
|gridId|DDC|
|gridId|DLH|
|gridId|DMX|
|gridId|DTX|
|gridId|DVN|
|gridId|EAX|
|gridId|FGF|
|gridId|FSD|
|gridId|GID|
|gridId|GJT|
|gridId|GLD|
|gridId|GRB|
|gridId|GRR|
|gridId|ICT|
|gridId|ILX|
|gridId|IND|
|gridId|IWX|
|gridId|JKL|
|gridId|LBF|
|gridId|LMK|
|gridId|LOT|
|gridId|LSX|
|gridId|MKX|
|gridId|MPX|
|gridId|MQT|
|gridId|OAX|
|gridId|PAH|
|gridId|PUB|
|gridId|RIW|
|gridId|SGF|
|gridId|TOP|
|gridId|UNR|
|gridId|BOI|
|gridId|BYZ|
|gridId|EKA|
|gridId|FGZ|
|gridId|GGW|
|gridId|HNX|
|gridId|LKN|
|gridId|LOX|
|gridId|MFR|
|gridId|MSO|
|gridId|MTR|
|gridId|OTX|
|gridId|PDT|
|gridId|PIH|
|gridId|PQR|
|gridId|PSR|
|gridId|REV|
|gridId|SEW|
|gridId|SGX|
|gridId|SLC|
|gridId|STO|
|gridId|TFX|
|gridId|TWC|
|gridId|VEF|
|gridId|AER|
|gridId|AFC|
|gridId|AFG|
|gridId|AJK|
|gridId|ALU|
|gridId|GUM|
|gridId|HPA|
|gridId|HFO|
|gridId|PPG|
|gridId|PQE|
|gridId|PQW|
|gridId|STU|
|gridId|NH1|
|gridId|NH2|
|gridId|ONA|
|gridId|ONP|

<h2 id="tocS_PointString">PointString</h2>
<!-- backwards compatibility -->
<a id="schemapointstring"></a>
<a id="schema_PointString"></a>
<a id="tocSpointstring"></a>
<a id="tocspointstring"></a>

```json
"string"
```

<h2 id="tocS_ProblemDetail">ProblemDetail</h2>
<!-- backwards compatibility -->
<a id="schemaproblemdetail"></a>
<a id="schema_ProblemDetail"></a>
<a id="tocSproblemdetail"></a>
<a id="tocsproblemdetail"></a>

```json
{
  "type": "urn:noaa:nws:api:UnexpectedProblem",
  "title": "Unexpected Problem",
  "status": 500,
  "detail": "An unexpected problem has occurred.",
  "instance": "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
  "correlationId": "493c3a1d-f87e-407f-ae2c-24483f5aab63"
}
```

Detail about an error. This document conforms to RFC 7807 (Problem Details for HTTP APIs).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string(uri)|true|none|A URI reference (RFC 3986) that identifies the problem type. This is only an identifier and is not necessarily a resolvable URL.<br>|
|title|string|true|none|A short, human-readable summary of the problem type.|
|status|number|true|none|The HTTP status code (RFC 7231, Section 6) generated by the origin server for this occurrence of the problem.<br>|
|detail|string|true|none|A human-readable explanation specific to this occurrence of the problem.|
|instance|string(uri)|true|none|A URI reference (RFC 3986) that identifies the specific occurrence of the problem. This is only an identifier and is not necessarily a resolvable URL.<br>|
|correlationId|string|true|none|A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.<br>|

<h2 id="tocS_QuantitativeValue">QuantitativeValue</h2>
<!-- backwards compatibility -->
<a id="schemaquantitativevalue"></a>
<a id="schema_QuantitativeValue"></a>
<a id="tocSquantitativevalue"></a>
<a id="tocsquantitativevalue"></a>

```json
{
  "value": 0,
  "maxValue": 0,
  "minValue": 0,
  "unitCode": "string",
  "qualityControl": "Z"
}
```

A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|number \| null|false|none|A measured value|
|maxValue|number|false|none|The maximum value of a range of measured values|
|minValue|number|false|none|The minimum value of a range of measured values|
|unitCode|[UnitOfMeasure](#schemaunitofmeasure)|false|none|A string denoting a unit of measure, expressed in the format "{unit}" or "{namespace}:{unit}".<br>Units with the namespace "wmo" or "wmoUnit" are defined in the World Meteorological Organization Codes Registry at http://codes.wmo.int/common/unit and should be canonically resolvable to http://codes.wmo.int/common/unit/{unit}.<br>Units with the namespace "nwsUnit" are currently custom and do not align to any standard.<br>Units with no namespace or the namespace "uc" are compliant with the Unified Code for Units of Measure syntax defined at https://unitsofmeasure.org/. This also aligns with recent versions of the Geographic Markup Language (GML) standard, the IWXXM standard, and OGC Observations and Measurements v2.0 (ISO/DIS 19156).<br>Namespaced units are considered deprecated. We will be aligning API to use the same standards as GML/IWXXM in the future.<br>|
|qualityControl|string|false|none|For values in observation records, the quality control flag from the MADIS system. The definitions of these flags can be found at https://madis.ncep.noaa.gov/madis_sfc_qc_notes.shtml<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|qualityControl|Z|
|qualityControl|C|
|qualityControl|S|
|qualityControl|V|
|qualityControl|X|
|qualityControl|Q|
|qualityControl|G|
|qualityControl|B|
|qualityControl|T|

<h2 id="tocS_RegionCode">RegionCode</h2>
<!-- backwards compatibility -->
<a id="schemaregioncode"></a>
<a id="schema_RegionCode"></a>
<a id="tocSregioncode"></a>
<a id="tocsregioncode"></a>

```json
"AR"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[LandRegionCode](#schemalandregioncode)|false|none|Land region code. These correspond to the six NWS regional headquarters:<br>* AR: Alaska Region<br>* CR: Central Region<br>* ER: Eastern Region<br>* PR: Pacific Region<br>* SR: Southern Region<br>* WR: Western Region<br>|
|*oneOf*|[MarineRegionCode](#schemamarineregioncode)|false|none|Marine region code. These are groups of marine areas combined.<br>* AL: Alaska waters (PK)<br>* AT: Atlantic Ocean (AM, AN)<br>* GL: Great Lakes (LC, LE, LH, LM, LO, LS, SL)<br>* GM: Gulf of Mexico (GM)<br>* PA: Eastern Pacific Ocean and U.S. West Coast (PZ)<br>* PI: Central and Western Pacific (PH, PM, PS)<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|AR|
|*oneOf*|CR|
|*oneOf*|ER|
|*oneOf*|PR|
|*oneOf*|SR|
|*oneOf*|WR|
|*oneOf*|AL|
|*oneOf*|AT|
|*oneOf*|GL|
|*oneOf*|GM|
|*oneOf*|PA|
|*oneOf*|PI|

<h2 id="tocS_RelativeLocation">RelativeLocation</h2>
<!-- backwards compatibility -->
<a id="schemarelativelocation"></a>
<a id="schema_RelativeLocation"></a>
<a id="tocSrelativelocation"></a>
<a id="tocsrelativelocation"></a>

```json
{
  "city": "string",
  "state": "string",
  "distance": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "bearing": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|none|
|state|string|false|none|none|
|distance|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|bearing|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|

<h2 id="tocS_RelativeLocationGeoJson">RelativeLocationGeoJson</h2>
<!-- backwards compatibility -->
<a id="schemarelativelocationgeojson"></a>
<a id="schema_RelativeLocationGeoJson"></a>
<a id="tocSrelativelocationgeojson"></a>
<a id="tocsrelativelocationgeojson"></a>

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "city": "string",
    "state": "string",
    "distance": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    },
    "bearing": {
      "value": 0,
      "maxValue": 0,
      "minValue": 0,
      "unitCode": "string",
      "qualityControl": "Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|id|string(uri)|false|none|none|
|type|string|true|none|none|
|geometry|[GeoJsonGeometry](#schemageojsongeometry)|true|none|A GeoJSON geometry object. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|properties|object|true|none|none|
|properties|[RelativeLocation](#schemarelativelocation)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|

<h2 id="tocS_RelativeLocationJsonLd">RelativeLocationJsonLd</h2>
<!-- backwards compatibility -->
<a id="schemarelativelocationjsonld"></a>
<a id="schema_RelativeLocationJsonLd"></a>
<a id="tocSrelativelocationjsonld"></a>
<a id="tocsrelativelocationjsonld"></a>

```json
{
  "city": "string",
  "state": "string",
  "distance": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "bearing": {
    "value": 0,
    "maxValue": 0,
    "minValue": 0,
    "unitCode": "string",
    "qualityControl": "Z"
  },
  "geometry": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|none|
|state|string|false|none|none|
|distance|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|bearing|[QuantitativeValue](#schemaquantitativevalue)|false|none|A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue<br>|
|geometry|[GeometryString](#schemageometrystring)|true|none|A geometry represented in Well-Known Text (WKT) format.|

<h2 id="tocS_Sigmet">Sigmet</h2>
<!-- backwards compatibility -->
<a id="schemasigmet"></a>
<a id="schema_Sigmet"></a>
<a id="tocSsigmet"></a>
<a id="tocssigmet"></a>

```json
{
  "id": "http://example.com",
  "issueTime": "1970-01-01T00:00:00Z",
  "fir": "string",
  "atsu": "string",
  "sequence": "string",
  "phenomenon": "http://example.com",
  "start": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uri)|false|none|none|
|issueTime|string(date-time)|false|none|none|
|fir|string \| null|false|none|none|
|atsu|[ATSUIdentifier](#schemaatsuidentifier)|false|none|ATSU Identifier|
|sequence|string \| null|false|none|none|
|phenomenon|string \| null(uri)|false|none|none|
|start|string(date-time)|false|none|none|
|end|string(date-time)|false|none|none|

<h2 id="tocS_SigmetCollectionGeoJson">SigmetCollectionGeoJson</h2>
<!-- backwards compatibility -->
<a id="schemasigmetcollectiongeojson"></a>
<a id="schema_SigmetCollectionGeoJson"></a>
<a id="tocSsigmetcollectiongeojson"></a>
<a id="tocssigmetcollectiongeojson"></a>

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "@context": [
        null
      ],
      "id": "http://example.com",
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ],
        "bbox": [
          0,
          0,
          0,
          0
        ]
      },
      "properties": {
        "id": "http://example.com",
        "issueTime": "1970-01-01T00:00:00Z",
        "fir": "string",
        "atsu": "string",
        "sequence": "string",
        "phenomenon": "http://example.com",
        "start": "1970-01-01T00:00:00Z",
        "end": "1970-01-01T00:00:00Z"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|type|string|true|none|none|
|features|[[GeoJsonFeature](#schemageojsonfeature)]|true|none|none|
|features|[[SigmetGeoJson](#schemasigmetgeojson)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FeatureCollection|

<h2 id="tocS_SigmetGeoJson">SigmetGeoJson</h2>
<!-- backwards compatibility -->
<a id="schemasigmetgeojson"></a>
<a id="schema_SigmetGeoJson"></a>
<a id="tocSsigmetgeojson"></a>
<a id="tocssigmetgeojson"></a>

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "id": "http://example.com",
    "issueTime": "1970-01-01T00:00:00Z",
    "fir": "string",
    "atsu": "string",
    "sequence": "string",
    "phenomenon": "http://example.com",
    "start": "1970-01-01T00:00:00Z",
    "end": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|id|string(uri)|false|none|none|
|type|string|true|none|none|
|geometry|[GeoJsonGeometry](#schemageojsongeometry)|true|none|A GeoJSON geometry object. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|properties|object|true|none|none|
|properties|[Sigmet](#schemasigmet)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|

<h2 id="tocS_SigmetSequenceNumber">SigmetSequenceNumber</h2>
<!-- backwards compatibility -->
<a id="schemasigmetsequencenumber"></a>
<a id="schema_SigmetSequenceNumber"></a>
<a id="tocSsigmetsequencenumber"></a>
<a id="tocssigmetsequencenumber"></a>

```json
"string"
```

<h2 id="tocS_StateTerritoryCode">StateTerritoryCode</h2>
<!-- backwards compatibility -->
<a id="schemastateterritorycode"></a>
<a id="schema_StateTerritoryCode"></a>
<a id="tocSstateterritorycode"></a>
<a id="tocsstateterritorycode"></a>

```json
"AL"
```

<h2 id="tocS_TextProduct">TextProduct</h2>
<!-- backwards compatibility -->
<a id="schematextproduct"></a>
<a id="schema_TextProduct"></a>
<a id="tocStextproduct"></a>
<a id="tocstextproduct"></a>

```json
{
  "@context": [
    null
  ],
  "@id": "http://example.com",
  "id": "string",
  "wmoCollectiveId": "string",
  "issuingOffice": "string",
  "issuanceTime": "1970-01-01T00:00:00Z",
  "productCode": "string",
  "productName": "string",
  "productText": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|@id|string(uri)|false|none|none|
|id|string|false|none|none|
|wmoCollectiveId|string|false|none|none|
|issuingOffice|string|false|none|none|
|issuanceTime|string(date-time)|false|none|none|
|productCode|string|false|none|none|
|productName|string|false|none|none|
|productText|string|false|none|none|

<h2 id="tocS_TextProductCollection">TextProductCollection</h2>
<!-- backwards compatibility -->
<a id="schematextproductcollection"></a>
<a id="schema_TextProductCollection"></a>
<a id="tocStextproductcollection"></a>
<a id="tocstextproductcollection"></a>

```json
{
  "@context": [
    null
  ],
  "@graph": [
    {
      "@context": [
        null
      ],
      "@id": "http://example.com",
      "id": "string",
      "wmoCollectiveId": "string",
      "issuingOffice": "string",
      "issuanceTime": "1970-01-01T00:00:00Z",
      "productCode": "string",
      "productName": "string",
      "productText": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|@graph|[[TextProduct](#schematextproduct)]|false|none|none|

<h2 id="tocS_TextProductTypeCollection">TextProductTypeCollection</h2>
<!-- backwards compatibility -->
<a id="schematextproducttypecollection"></a>
<a id="schema_TextProductTypeCollection"></a>
<a id="tocStextproducttypecollection"></a>
<a id="tocstextproducttypecollection"></a>

```json
{
  "@context": [
    null
  ],
  "@graph": [
    {
      "productCode": "string",
      "productName": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|@graph|[object]|false|none|none|

<h2 id="tocS_TextProductLocationCollection">TextProductLocationCollection</h2>
<!-- backwards compatibility -->
<a id="schematextproductlocationcollection"></a>
<a id="schema_TextProductLocationCollection"></a>
<a id="tocStextproductlocationcollection"></a>
<a id="tocstextproductlocationcollection"></a>

```json
{
  "@context": [
    null
  ],
  "locations": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|locations|object|false|none|none|

<h2 id="tocS_Time">Time</h2>
<!-- backwards compatibility -->
<a id="schematime"></a>
<a id="schema_Time"></a>
<a id="tocStime"></a>
<a id="tocstime"></a>

```json
"string"
```

A time (in HHMM format). This is always specified in UTC (Zulu) time.

<h2 id="tocS_UnitOfMeasure">UnitOfMeasure</h2>
<!-- backwards compatibility -->
<a id="schemaunitofmeasure"></a>
<a id="schema_UnitOfMeasure"></a>
<a id="tocSunitofmeasure"></a>
<a id="tocsunitofmeasure"></a>

```json
"string"
```

A string denoting a unit of measure, expressed in the format "{unit}" or "{namespace}:{unit}".
Units with the namespace "wmo" or "wmoUnit" are defined in the World Meteorological Organization Codes Registry at http://codes.wmo.int/common/unit and should be canonically resolvable to http://codes.wmo.int/common/unit/{unit}.
Units with the namespace "nwsUnit" are currently custom and do not align to any standard.
Units with no namespace or the namespace "uc" are compliant with the Unified Code for Units of Measure syntax defined at https://unitsofmeasure.org/. This also aligns with recent versions of the Geographic Markup Language (GML) standard, the IWXXM standard, and OGC Observations and Measurements v2.0 (ISO/DIS 19156).
Namespaced units are considered deprecated. We will be aligning API to use the same standards as GML/IWXXM in the future.

<h2 id="tocS_Zone">Zone</h2>
<!-- backwards compatibility -->
<a id="schemazone"></a>
<a id="schema_Zone"></a>
<a id="tocSzone"></a>
<a id="tocszone"></a>

```json
{
  "@context": [
    null
  ],
  "geometry": "string",
  "@id": "http://example.com",
  "@type": "wx:Zone",
  "id": "string",
  "type": "land",
  "name": "string",
  "effectiveDate": "1970-01-01T00:00:00Z",
  "expirationDate": "1970-01-01T00:00:00Z",
  "state": "AL",
  "forecastOffice": "http://example.com",
  "gridIdentifier": "string",
  "awipsLocationIdentifier": "string",
  "cwa": [
    "AKQ"
  ],
  "forecastOffices": [
    "http://example.com"
  ],
  "timeZone": [
    "string"
  ],
  "observationStations": [
    "http://example.com"
  ],
  "radarStation": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|geometry|[GeometryString](#schemageometrystring)|false|none|A geometry represented in Well-Known Text (WKT) format.|
|@id|string(uri)|false|none|none|
|@type|string|false|none|none|
|id|[NWSZoneID](#schemanwszoneid)|false|none|UGC identifier for a NWS forecast zone or county.<br>The first two letters will correspond to either a state code or marine area code (see #/components/schemas/StateTerritoryCode and #/components/schemas/MarineAreaCode for lists of valid letter combinations).<br>The third letter will be Z for public/fire zone or C for county.<br>|
|type|[NWSZoneType](#schemanwszonetype)|false|none|none|
|name|string|false|none|none|
|effectiveDate|string(date-time)|false|none|none|
|expirationDate|string(date-time)|false|none|none|
|state|[StateTerritoryCode](#schemastateterritorycode) \| string \| null|false|none|none|
|forecastOffice|string(uri)|false|none|none|
|gridIdentifier|string|false|none|none|
|awipsLocationIdentifier|string|false|none|none|
|cwa|[[NWSForecastOfficeId](#schemanwsforecastofficeid)]|false|none|**Deprecated.**|
|forecastOffices|[string(uri)]|false|none|**Deprecated.**|
|timeZone|[string(iana-time-zone-identifier)]|false|none|none|
|observationStations|[string(uri)]|false|none|none|
|radarStation|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|@type|wx:Zone|
|type|land|
|type|marine|
|type|forecast|
|type|public|
|type|coastal|
|type|offshore|
|type|fire|
|type|county|
|cwa|AKQ|
|cwa|ALY|
|cwa|BGM|
|cwa|BOX|
|cwa|BTV|
|cwa|BUF|
|cwa|CAE|
|cwa|CAR|
|cwa|CHS|
|cwa|CLE|
|cwa|CTP|
|cwa|GSP|
|cwa|GYX|
|cwa|ILM|
|cwa|ILN|
|cwa|LWX|
|cwa|MHX|
|cwa|OKX|
|cwa|PBZ|
|cwa|PHI|
|cwa|RAH|
|cwa|RLX|
|cwa|RNK|
|cwa|ABQ|
|cwa|AMA|
|cwa|BMX|
|cwa|BRO|
|cwa|CRP|
|cwa|EPZ|
|cwa|EWX|
|cwa|FFC|
|cwa|FWD|
|cwa|HGX|
|cwa|HUN|
|cwa|JAN|
|cwa|JAX|
|cwa|KEY|
|cwa|LCH|
|cwa|LIX|
|cwa|LUB|
|cwa|LZK|
|cwa|MAF|
|cwa|MEG|
|cwa|MFL|
|cwa|MLB|
|cwa|MOB|
|cwa|MRX|
|cwa|OHX|
|cwa|OUN|
|cwa|SHV|
|cwa|SJT|
|cwa|SJU|
|cwa|TAE|
|cwa|TBW|
|cwa|TSA|
|cwa|ABR|
|cwa|APX|
|cwa|ARX|
|cwa|BIS|
|cwa|BOU|
|cwa|CYS|
|cwa|DDC|
|cwa|DLH|
|cwa|DMX|
|cwa|DTX|
|cwa|DVN|
|cwa|EAX|
|cwa|FGF|
|cwa|FSD|
|cwa|GID|
|cwa|GJT|
|cwa|GLD|
|cwa|GRB|
|cwa|GRR|
|cwa|ICT|
|cwa|ILX|
|cwa|IND|
|cwa|IWX|
|cwa|JKL|
|cwa|LBF|
|cwa|LMK|
|cwa|LOT|
|cwa|LSX|
|cwa|MKX|
|cwa|MPX|
|cwa|MQT|
|cwa|OAX|
|cwa|PAH|
|cwa|PUB|
|cwa|RIW|
|cwa|SGF|
|cwa|TOP|
|cwa|UNR|
|cwa|BOI|
|cwa|BYZ|
|cwa|EKA|
|cwa|FGZ|
|cwa|GGW|
|cwa|HNX|
|cwa|LKN|
|cwa|LOX|
|cwa|MFR|
|cwa|MSO|
|cwa|MTR|
|cwa|OTX|
|cwa|PDT|
|cwa|PIH|
|cwa|PQR|
|cwa|PSR|
|cwa|REV|
|cwa|SEW|
|cwa|SGX|
|cwa|SLC|
|cwa|STO|
|cwa|TFX|
|cwa|TWC|
|cwa|VEF|
|cwa|AER|
|cwa|AFC|
|cwa|AFG|
|cwa|AJK|
|cwa|ALU|
|cwa|GUM|
|cwa|HPA|
|cwa|HFO|
|cwa|PPG|
|cwa|PQE|
|cwa|PQW|
|cwa|STU|
|cwa|NH1|
|cwa|NH2|
|cwa|ONA|
|cwa|ONP|

<h2 id="tocS_ZoneGeoJson">ZoneGeoJson</h2>
<!-- backwards compatibility -->
<a id="schemazonegeojson"></a>
<a id="schema_ZoneGeoJson"></a>
<a id="tocSzonegeojson"></a>
<a id="tocszonegeojson"></a>

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "@context": [
      null
    ],
    "geometry": "string",
    "@id": "http://example.com",
    "@type": "wx:Zone",
    "id": "string",
    "type": "land",
    "name": "string",
    "effectiveDate": "1970-01-01T00:00:00Z",
    "expirationDate": "1970-01-01T00:00:00Z",
    "state": "AL",
    "forecastOffice": "http://example.com",
    "gridIdentifier": "string",
    "awipsLocationIdentifier": "string",
    "cwa": [
      "AKQ"
    ],
    "forecastOffices": [
      "http://example.com"
    ],
    "timeZone": [
      "string"
    ],
    "observationStations": [
      "http://example.com"
    ],
    "radarStation": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|id|string(uri)|false|none|none|
|type|string|true|none|none|
|geometry|[GeoJsonGeometry](#schemageojsongeometry)|true|none|A GeoJSON geometry object. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|properties|object|true|none|none|
|properties|[Zone](#schemazone)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|

<h2 id="tocS_ZoneJsonLd">ZoneJsonLd</h2>
<!-- backwards compatibility -->
<a id="schemazonejsonld"></a>
<a id="schema_ZoneJsonLd"></a>
<a id="tocSzonejsonld"></a>
<a id="tocszonejsonld"></a>

```json
{
  "@context": [
    null
  ],
  "geometry": "string",
  "@id": "http://example.com",
  "@type": "wx:Zone",
  "id": "string",
  "type": "land",
  "name": "string",
  "effectiveDate": "1970-01-01T00:00:00Z",
  "expirationDate": "1970-01-01T00:00:00Z",
  "state": "AL",
  "forecastOffice": "http://example.com",
  "gridIdentifier": "string",
  "awipsLocationIdentifier": "string",
  "cwa": [
    "AKQ"
  ],
  "forecastOffices": [
    "http://example.com"
  ],
  "timeZone": [
    "string"
  ],
  "observationStations": [
    "http://example.com"
  ],
  "radarStation": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|geometry|[GeometryString](#schemageometrystring)|false|none|A geometry represented in Well-Known Text (WKT) format.|
|@id|string(uri)|false|none|none|
|@type|string|false|none|none|
|id|[NWSZoneID](#schemanwszoneid)|false|none|UGC identifier for a NWS forecast zone or county.<br>The first two letters will correspond to either a state code or marine area code (see #/components/schemas/StateTerritoryCode and #/components/schemas/MarineAreaCode for lists of valid letter combinations).<br>The third letter will be Z for public/fire zone or C for county.<br>|
|type|[NWSZoneType](#schemanwszonetype)|false|none|none|
|name|string|false|none|none|
|effectiveDate|string(date-time)|false|none|none|
|expirationDate|string(date-time)|false|none|none|
|state|[StateTerritoryCode](#schemastateterritorycode) \| string \| null|false|none|none|
|forecastOffice|string(uri)|false|none|none|
|gridIdentifier|string|false|none|none|
|awipsLocationIdentifier|string|false|none|none|
|cwa|[[NWSForecastOfficeId](#schemanwsforecastofficeid)]|false|none|**Deprecated.**|
|forecastOffices|[string(uri)]|false|none|**Deprecated.**|
|timeZone|[string(iana-time-zone-identifier)]|false|none|none|
|observationStations|[string(uri)]|false|none|none|
|radarStation|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|@type|wx:Zone|
|type|land|
|type|marine|
|type|forecast|
|type|public|
|type|coastal|
|type|offshore|
|type|fire|
|type|county|
|cwa|AKQ|
|cwa|ALY|
|cwa|BGM|
|cwa|BOX|
|cwa|BTV|
|cwa|BUF|
|cwa|CAE|
|cwa|CAR|
|cwa|CHS|
|cwa|CLE|
|cwa|CTP|
|cwa|GSP|
|cwa|GYX|
|cwa|ILM|
|cwa|ILN|
|cwa|LWX|
|cwa|MHX|
|cwa|OKX|
|cwa|PBZ|
|cwa|PHI|
|cwa|RAH|
|cwa|RLX|
|cwa|RNK|
|cwa|ABQ|
|cwa|AMA|
|cwa|BMX|
|cwa|BRO|
|cwa|CRP|
|cwa|EPZ|
|cwa|EWX|
|cwa|FFC|
|cwa|FWD|
|cwa|HGX|
|cwa|HUN|
|cwa|JAN|
|cwa|JAX|
|cwa|KEY|
|cwa|LCH|
|cwa|LIX|
|cwa|LUB|
|cwa|LZK|
|cwa|MAF|
|cwa|MEG|
|cwa|MFL|
|cwa|MLB|
|cwa|MOB|
|cwa|MRX|
|cwa|OHX|
|cwa|OUN|
|cwa|SHV|
|cwa|SJT|
|cwa|SJU|
|cwa|TAE|
|cwa|TBW|
|cwa|TSA|
|cwa|ABR|
|cwa|APX|
|cwa|ARX|
|cwa|BIS|
|cwa|BOU|
|cwa|CYS|
|cwa|DDC|
|cwa|DLH|
|cwa|DMX|
|cwa|DTX|
|cwa|DVN|
|cwa|EAX|
|cwa|FGF|
|cwa|FSD|
|cwa|GID|
|cwa|GJT|
|cwa|GLD|
|cwa|GRB|
|cwa|GRR|
|cwa|ICT|
|cwa|ILX|
|cwa|IND|
|cwa|IWX|
|cwa|JKL|
|cwa|LBF|
|cwa|LMK|
|cwa|LOT|
|cwa|LSX|
|cwa|MKX|
|cwa|MPX|
|cwa|MQT|
|cwa|OAX|
|cwa|PAH|
|cwa|PUB|
|cwa|RIW|
|cwa|SGF|
|cwa|TOP|
|cwa|UNR|
|cwa|BOI|
|cwa|BYZ|
|cwa|EKA|
|cwa|FGZ|
|cwa|GGW|
|cwa|HNX|
|cwa|LKN|
|cwa|LOX|
|cwa|MFR|
|cwa|MSO|
|cwa|MTR|
|cwa|OTX|
|cwa|PDT|
|cwa|PIH|
|cwa|PQR|
|cwa|PSR|
|cwa|REV|
|cwa|SEW|
|cwa|SGX|
|cwa|SLC|
|cwa|STO|
|cwa|TFX|
|cwa|TWC|
|cwa|VEF|
|cwa|AER|
|cwa|AFC|
|cwa|AFG|
|cwa|AJK|
|cwa|ALU|
|cwa|GUM|
|cwa|HPA|
|cwa|HFO|
|cwa|PPG|
|cwa|PQE|
|cwa|PQW|
|cwa|STU|
|cwa|NH1|
|cwa|NH2|
|cwa|ONA|
|cwa|ONP|

<h2 id="tocS_ZoneCollectionGeoJson">ZoneCollectionGeoJson</h2>
<!-- backwards compatibility -->
<a id="schemazonecollectiongeojson"></a>
<a id="schema_ZoneCollectionGeoJson"></a>
<a id="tocSzonecollectiongeojson"></a>
<a id="tocszonecollectiongeojson"></a>

```json
{
  "@context": [
    null
  ],
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "@context": [
          null
        ],
        "geometry": "string",
        "@id": "http://example.com",
        "@type": "wx:Zone",
        "id": "string",
        "type": "land",
        "name": "string",
        "effectiveDate": "1970-01-01T00:00:00Z",
        "expirationDate": "1970-01-01T00:00:00Z",
        "state": "AL",
        "forecastOffice": "http://example.com",
        "gridIdentifier": "string",
        "awipsLocationIdentifier": "string",
        "cwa": [
          "AKQ"
        ],
        "forecastOffices": [
          "http://example.com"
        ],
        "timeZone": [
          "string"
        ],
        "observationStations": [
          "http://example.com"
        ],
        "radarStation": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|type|string|true|none|none|
|features|[[GeoJsonFeature](#schemageojsonfeature)]|true|none|none|
|features|[object]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FeatureCollection|

<h2 id="tocS_ZoneCollectionJsonLd">ZoneCollectionJsonLd</h2>
<!-- backwards compatibility -->
<a id="schemazonecollectionjsonld"></a>
<a id="schema_ZoneCollectionJsonLd"></a>
<a id="tocSzonecollectionjsonld"></a>
<a id="tocszonecollectionjsonld"></a>

```json
{
  "@context": [
    null
  ],
  "@graph": [
    {
      "@context": [
        null
      ],
      "geometry": "string",
      "@id": "http://example.com",
      "@type": "wx:Zone",
      "id": "string",
      "type": "land",
      "name": "string",
      "effectiveDate": "1970-01-01T00:00:00Z",
      "expirationDate": "1970-01-01T00:00:00Z",
      "state": "AL",
      "forecastOffice": "http://example.com",
      "gridIdentifier": "string",
      "awipsLocationIdentifier": "string",
      "cwa": [
        "AKQ"
      ],
      "forecastOffices": [
        "http://example.com"
      ],
      "timeZone": [
        "string"
      ],
      "observationStations": [
        "http://example.com"
      ],
      "radarStation": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|@graph|[[Zone](#schemazone)]|false|none|none|

<h2 id="tocS_ZoneForecast">ZoneForecast</h2>
<!-- backwards compatibility -->
<a id="schemazoneforecast"></a>
<a id="schema_ZoneForecast"></a>
<a id="tocSzoneforecast"></a>
<a id="tocszoneforecast"></a>

```json
{
  "@context": [
    null
  ],
  "geometry": "string",
  "zone": "http://example.com",
  "updated": "1970-01-01T00:00:00Z",
  "periods": [
    {
      "number": 0,
      "name": "This Afternoon",
      "detailedForecast": "string"
    }
  ]
}
```

An object representing a zone area forecast.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|geometry|[GeometryString](#schemageometrystring)|false|none|A geometry represented in Well-Known Text (WKT) format.|
|zone|string(uri)|false|none|An API link to the zone this forecast is for.|
|updated|string(date-time)|false|none|The time this zone forecast product was published.|
|periods|[object]|false|none|An array of forecast periods.|

<h2 id="tocS_ZoneForecastGeoJson">ZoneForecastGeoJson</h2>
<!-- backwards compatibility -->
<a id="schemazoneforecastgeojson"></a>
<a id="schema_ZoneForecastGeoJson"></a>
<a id="tocSzoneforecastgeojson"></a>
<a id="tocszoneforecastgeojson"></a>

```json
{
  "@context": [
    null
  ],
  "id": "http://example.com",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      0,
      0
    ],
    "bbox": [
      0,
      0,
      0,
      0
    ]
  },
  "properties": {
    "@context": [
      null
    ],
    "geometry": "string",
    "zone": "http://example.com",
    "updated": "1970-01-01T00:00:00Z",
    "periods": [
      {
        "number": 0,
        "name": "This Afternoon",
        "detailedForecast": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|id|string(uri)|false|none|none|
|type|string|true|none|none|
|geometry|[GeoJsonGeometry](#schemageojsongeometry)|true|none|A GeoJSON geometry object. Please refer to IETF RFC 7946 for information on the GeoJSON format.|
|properties|object|true|none|none|
|properties|[ZoneForecast](#schemazoneforecast)|true|none|An object representing a zone area forecast.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|

<h2 id="tocS_ZoneForecastJsonLd">ZoneForecastJsonLd</h2>
<!-- backwards compatibility -->
<a id="schemazoneforecastjsonld"></a>
<a id="schema_ZoneForecastJsonLd"></a>
<a id="tocSzoneforecastjsonld"></a>
<a id="tocszoneforecastjsonld"></a>

```json
{
  "@context": [
    null
  ],
  "geometry": "string",
  "zone": "http://example.com",
  "updated": "1970-01-01T00:00:00Z",
  "periods": [
    {
      "number": 0,
      "name": "This Afternoon",
      "detailedForecast": "string"
    }
  ]
}
```

An object representing a zone area forecast.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[JsonLdContext](#schemajsonldcontext)|false|none|none|
|geometry|[GeometryString](#schemageometrystring)|false|none|A geometry represented in Well-Known Text (WKT) format.|
|zone|string(uri)|false|none|An API link to the zone this forecast is for.|
|updated|string(date-time)|false|none|The time this zone forecast product was published.|
|periods|[object]|false|none|An array of forecast periods.|
