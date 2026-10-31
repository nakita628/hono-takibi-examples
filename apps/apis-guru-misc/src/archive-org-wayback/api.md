<h1 id="wayback-api">Wayback API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for Internet Archive's Wayback Machine

Base URLs:

* <a href="https://api.archive.org">https://api.archive.org</a>

<h1 id="wayback-api-default">Default</h1>

## get/wayback/v1/available

> Code samples

```bash
curl 'https://example.com/wayback/v1/available?url=string' \
  -H 'Accept: application/json'
```

`GET /wayback/v1/available`

<h3 id="getwaybackv1available-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|A single URL to query.|
|timestamp|query|string|false|Timestamp requested in ISO 8601 format. The following formats are acceptable:<br> - YYYY<br> - YYYY-MM<br> - YYYY-MM-DD<br> - YYYY-MM-DDTHH:mm:SSz<br> - YYYY-MM-DD:HH:mm+00:00<br>|
|callback|query|string|false|Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.<br>|
|timeout|query|number|false|Timeout is the maximum number of seconds to wait for the availability API to get its underlying results from the CDX server. The default value is 5.0.<br>|
|closest|query|string|false|The direction specifies whether to match archived timestamps that are before the provided one, after, or the default either (closest in either direction). Must be before, after, or either. May be overidden by individual requests.<br>|
|status_code|query|integer|false|HTTP status codes to filter by. Only results with these codes will be returned<br>|
|tag|query|string|false|The optional tag can have any value, and is returned with the results; it can be used to help collate input and output values.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|closest|either|
|closest|before|
|closest|after|
|status_code|200|
|status_code|201|
|status_code|202|
|status_code|203|
|status_code|204|
|status_code|205|
|status_code|206|
|status_code|300|
|status_code|301|
|status_code|302|
|status_code|303|
|status_code|304|
|status_code|305|
|status_code|306|
|status_code|307|
|status_code|308|
|status_code|400|
|status_code|401|
|status_code|402|
|status_code|403|
|status_code|404|
|status_code|405|
|status_code|406|
|status_code|407|
|status_code|408|
|status_code|409|
|status_code|410|
|status_code|411|
|status_code|412|
|status_code|413|
|status_code|414|
|status_code|415|
|status_code|416|
|status_code|417|
|status_code|418|
|status_code|421|
|status_code|426|
|status_code|428|
|status_code|429|
|status_code|431|
|status_code|500|
|status_code|501|
|status_code|502|
|status_code|503|
|status_code|504|
|status_code|505|
|status_code|506|
|status_code|507|
|status_code|511|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "snapshot": {
        "status": 0,
        "timestamp": "string",
        "url": "string"
      },
      "tag": "string",
      "timestamp": "string",
      "url": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="getwaybackv1available-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Nominal Availability results|[AvailabilityResults](#schemaavailabilityresults)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/wayback/v1/available

> Code samples

```bash
curl 'https://example.com/wayback/v1/available?url=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "tag": "0",
      "timestamp": "2016-04-07T19:39:18Z",
      "url": "http://www.entish.org"
    },
    {
      "tag": "1",
      "url": "http://www.cnn.com/"
    },
    {
      "tag": "2",
      "timestamp": "2016-04-07T19:39:18Z",
      "url": "http://www.youcantfindthis.cat"
    }
  ]'
```

`POST /wayback/v1/available`

> Body parameter

```json
[
  {
    "tag": "0",
    "timestamp": "2016-04-07T19:39:18Z",
    "url": "http://www.entish.org"
  },
  {
    "tag": "1",
    "url": "http://www.cnn.com/"
  },
  {
    "tag": "2",
    "timestamp": "2016-04-07T19:39:18Z",
    "url": "http://www.youcantfindthis.cat"
  }
]
```

<h3 id="postwaybackv1available-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|A single URL to query.|
|timestamp|query|string|false|Timestamp requested in ISO 8601 format. The following formats are acceptable:<br> - YYYY<br> - YYYY-MM<br> - YYYY-MM-DD<br> - YYYY-MM-DDTHH:mm:SSz<br> - YYYY-MM-DD:HH:mm+00:00<br>|
|callback|query|string|false|Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.<br>|
|timeout|query|number|false|Timeout is the maximum number of seconds to wait for the availability API to get its underlying results from the CDX server. The default value is 5.0.<br>|
|closest|query|string|false|The direction specifies whether to match archived timestamps that are before the provided one, after, or the default either (closest in either direction). Must be before, after, or either. May be overidden by individual requests.<br>|
|status_code|query|integer|false|HTTP status codes to filter by. Only results with these codes will be returned<br>|
|tag|query|string|false|The optional tag can have any value, and is returned with the results; it can be used to help collate input and output values.<br>|
|body|body|[AvailabilityRequests](#schemaavailabilityrequests)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|closest|either|
|closest|before|
|closest|after|
|status_code|200|
|status_code|201|
|status_code|202|
|status_code|203|
|status_code|204|
|status_code|205|
|status_code|206|
|status_code|300|
|status_code|301|
|status_code|302|
|status_code|303|
|status_code|304|
|status_code|305|
|status_code|306|
|status_code|307|
|status_code|308|
|status_code|400|
|status_code|401|
|status_code|402|
|status_code|403|
|status_code|404|
|status_code|405|
|status_code|406|
|status_code|407|
|status_code|408|
|status_code|409|
|status_code|410|
|status_code|411|
|status_code|412|
|status_code|413|
|status_code|414|
|status_code|415|
|status_code|416|
|status_code|417|
|status_code|418|
|status_code|421|
|status_code|426|
|status_code|428|
|status_code|429|
|status_code|431|
|status_code|500|
|status_code|501|
|status_code|502|
|status_code|503|
|status_code|504|
|status_code|505|
|status_code|506|
|status_code|507|
|status_code|511|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "snapshot": {
        "status": 0,
        "timestamp": "string",
        "url": "string"
      },
      "tag": "string",
      "timestamp": "string",
      "url": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="postwaybackv1available-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Nominal Availability results|[AvailabilityResults](#schemaavailabilityresults)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ArchivedResult">ArchivedResult</h2>
<!-- backwards compatibility -->
<a id="schemaarchivedresult"></a>
<a id="schema_ArchivedResult"></a>
<a id="tocSarchivedresult"></a>
<a id="tocsarchivedresult"></a>

```json
{
  "snapshot": {
    "status": 0,
    "timestamp": "string",
    "url": "string"
  },
  "tag": "string",
  "timestamp": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snapshot|[Snapshot](#schemasnapshot)|true|none|none|
|tag|string|false|none|The user-supplied tag for use in collation|
|timestamp|string(dateTime)|true|none|The _intepreted_ timestamp requested, in [RFC 3339](http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html) format|
|url|string|true|none|The URL requested|

<h2 id="tocS_AvailabilityRequest">AvailabilityRequest</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityrequest"></a>
<a id="schema_AvailabilityRequest"></a>
<a id="tocSavailabilityrequest"></a>
<a id="tocsavailabilityrequest"></a>

```json
{
  "closest": "either",
  "tag": "string",
  "timestamp": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|closest|string|false|none|The direction to find the closest snapshot to the requested timestamp|
|tag|string|false|none|A user-supplied tag, used for collation|
|timestamp|string|false|none|Timestamp requested in ISO 8601 format. The following formats are acceptable: - YYYY - YYYY-MM - YYYY-MM-DD - YYYY-MM-DDTHH:mm:SSz - YYYY-MM-DD:HH:mm+00:00<br>|
|url|string|true|none|The URL requested|

#### Enumerated Values

|Property|Value|
|---|---|
|closest|either|
|closest|after|
|closest|before|

<h2 id="tocS_AvailabilityRequests">AvailabilityRequests</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityrequests"></a>
<a id="schema_AvailabilityRequests"></a>
<a id="tocSavailabilityrequests"></a>
<a id="tocsavailabilityrequests"></a>

```json
[
  {
    "tag": "0",
    "timestamp": "2016-04-07T19:39:18Z",
    "url": "http://www.entish.org"
  },
  {
    "tag": "1",
    "url": "http://www.cnn.com/"
  },
  {
    "tag": "2",
    "timestamp": "2016-04-07T19:39:18Z",
    "url": "http://www.youcantfindthis.cat"
  }
]
```

<h2 id="tocS_AvailabilityResults">AvailabilityResults</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityresults"></a>
<a id="schema_AvailabilityResults"></a>
<a id="tocSavailabilityresults"></a>
<a id="tocsavailabilityresults"></a>

```json
{
  "results": [
    {
      "snapshot": {
        "status": 0,
        "timestamp": "string",
        "url": "string"
      },
      "tag": "string",
      "timestamp": "string",
      "url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[ArchivedResult](#schemaarchivedresult)]|true|none|A list of results|

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
|code|integer(integer)|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_Snapshot">Snapshot</h2>
<!-- backwards compatibility -->
<a id="schemasnapshot"></a>
<a id="schema_Snapshot"></a>
<a id="tocSsnapshot"></a>
<a id="tocssnapshot"></a>

```json
{
  "status": 0,
  "timestamp": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|The HTTP status of the URL requested|
|timestamp|string(dateTime)|false|none|The timestamp of the snapshot in [RFC 3339](http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html) format|
|url|string|false|none|The URL requested|
