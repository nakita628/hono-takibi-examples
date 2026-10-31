<h1 id="redact-api">Redact API v1.0.6</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The [Redact API](/redact/overview) helps organisations meet their privacy compliance obligations. It provides controlled, on-demand redaction of private information from transactional records in the long-term storage. Note, Redact API does not have the capability to redact the short-lived server logs that are retained for a few weeks. For SMS customers that need immediate redaction, Vonage suggests using [Advanced Auto-redact](/redact/overview#auto-redact-vs-redact-api).

Base URLs:

* <a href="https://api.nexmo.com/v1/redact">https://api.nexmo.com/v1/redact</a>

Email: <a href="mailto:devrel@vonage.com">Vonage DevRel</a> 
Web: <a href="https://developer.nexmo.com/">Vonage DevRel</a> 

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="redact-api-default">Default</h1>

## Redact a specific message

<a id="opIdredact-message"></a>

> Code samples

```bash
curl https://api.nexmo.com/transaction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "id": "209ab3c7536542b91e8b5aef032f6861",
    "product": "sms",
    "type": "outbound"
  }'
```

`POST /transaction`

> Body parameter

```json
{
  "id": "209ab3c7536542b91e8b5aef032f6861",
  "product": "sms",
  "type": "outbound"
}
```

<h3 id="redact-a-specific-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RedactTransaction](#schemaredacttransaction)|true|none|
|» id|body|string|true|The transaction ID to redact|
|» product|body|string|true|Product name that the ID provided relates to|
|» type|body|string|true|Required if redacting SMS data|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» product|sms|
|» product|voice|
|» product|number-insight|
|» product|verify|
|» product|verify-sdk|
|» product|messages|
|» type|inbound|
|» type|outbound|

> Example responses

> 401 Response

```json
{
  "error_title": "Unauthorized",
  "type": "UNAUTHORIZED"
}
```

> 403 Response

```json
{
  "detail": "You must wait 60 minutes before redacting ID '0A000000B0C9A1234'",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Premature Redaction",
  "type": "https://developer.nexmo.com/api-errors/redact#premature-redaction"
}
```

> 404 Response

```json
{
  "detail": "ID '0A000000B0C9A1234' could not be found (type=MT)",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Invalid ID",
  "type": "https://developer.nexmo.com/api-errors#invalid-id"
}
```

> 422 Response

```json
{
  "detail": "Unexpected character ('\"' (code 34)): was expecting comma to separate Object entries",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Invalid JSON",
  "type": "https://developer.nexmo.com/api-errors#invalid-json"
}
```

> 429 Response

```json
{
  "detail": "Please wait, then retry your request",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Rate Limit Hit",
  "type": "https://developer.nexmo.com/api-errors/redact#rate-limit"
}
```

<h3 id="redact-a-specific-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized|Authentication failure|[ErrorUnauthorized](#schemaerrorunauthorized)|
|403|Forbidden|Authorisation denied|Inline|
|404|Not Found|No such record|[ErrorInvalidId](#schemaerrorinvalidid)|
|422|Unprocessable Entity|Invalid JSON body|Inline|
|429|Too Many Requests|Rate Limited|[ErrorThrottled](#schemaerrorthrottled)|

<h3 id="redact-a-specific-message-responseschema">Response Schema</h3>

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorPrematureRedaction](#schemaerrorprematureredaction)|false|none|Premature Redaction|
|*oneOf*|[ErrorUnprovisioned](#schemaerrorunprovisioned)|false|none|Unprovisioned|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorInvalidJson](#schemaerrorinvalidjson)|false|none|Invalid JSON|
|*oneOf*|[ErrorUnsupportedProduct](#schemaerrorunsupportedproduct)|false|none|Unsupported Product|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

# Schemas

<h2 id="tocS_ErrorInvalidId">ErrorInvalidId</h2>
<!-- backwards compatibility -->
<a id="schemaerrorinvalidid"></a>
<a id="schema_ErrorInvalidId"></a>
<a id="tocSerrorinvalidid"></a>
<a id="tocserrorinvalidid"></a>

```json
{
  "detail": "ID '0A000000B0C9A1234' could not be found (type=MT)",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Invalid ID",
  "type": "https://developer.nexmo.com/api-errors#invalid-id"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|Additional information about the error|
|instance|string|true|none|Internal Trace ID|
|title|string|true|none|Generic error message|
|type|string|true|none|Link to error / remediation options|

<h2 id="tocS_ErrorInvalidJson">ErrorInvalidJson</h2>
<!-- backwards compatibility -->
<a id="schemaerrorinvalidjson"></a>
<a id="schema_ErrorInvalidJson"></a>
<a id="tocSerrorinvalidjson"></a>
<a id="tocserrorinvalidjson"></a>

```json
{
  "detail": "Unexpected character ('\"' (code 34)): was expecting comma to separate Object entries",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Invalid JSON",
  "type": "https://developer.nexmo.com/api-errors#invalid-json"
}
```

Invalid JSON

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|Additional information about the error|
|instance|string|true|none|Internal Trace ID|
|title|string|true|none|Generic error message|
|type|string|true|none|Link to error / remediation options|

<h2 id="tocS_ErrorPrematureRedaction">ErrorPrematureRedaction</h2>
<!-- backwards compatibility -->
<a id="schemaerrorprematureredaction"></a>
<a id="schema_ErrorPrematureRedaction"></a>
<a id="tocSerrorprematureredaction"></a>
<a id="tocserrorprematureredaction"></a>

```json
{
  "detail": "You must wait 60 minutes before redacting ID '0A000000B0C9A1234'",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Premature Redaction",
  "type": "https://developer.nexmo.com/api-errors/redact#premature-redaction"
}
```

Premature Redaction

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|Additional information about the error|
|instance|string|true|none|Internal Trace ID|
|title|string|true|none|Generic error message|
|type|string|true|none|Link to error / remediation options|

<h2 id="tocS_ErrorThrottled">ErrorThrottled</h2>
<!-- backwards compatibility -->
<a id="schemaerrorthrottled"></a>
<a id="schema_ErrorThrottled"></a>
<a id="tocSerrorthrottled"></a>
<a id="tocserrorthrottled"></a>

```json
{
  "detail": "Please wait, then retry your request",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Rate Limit Hit",
  "type": "https://developer.nexmo.com/api-errors/redact#rate-limit"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|Additional information about the error|
|instance|string|true|none|Internal Trace ID|
|title|string|true|none|Generic error message|
|type|string|true|none|Link to error / remediation options|

<h2 id="tocS_ErrorUnauthorized">ErrorUnauthorized</h2>
<!-- backwards compatibility -->
<a id="schemaerrorunauthorized"></a>
<a id="schema_ErrorUnauthorized"></a>
<a id="tocSerrorunauthorized"></a>
<a id="tocserrorunauthorized"></a>

```json
{
  "error_title": "Unauthorized",
  "type": "UNAUTHORIZED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_title|string|true|none|Error title|
|type|string|true|none|Machine readable error type|

<h2 id="tocS_ErrorUnprovisioned">ErrorUnprovisioned</h2>
<!-- backwards compatibility -->
<a id="schemaerrorunprovisioned"></a>
<a id="schema_ErrorUnprovisioned"></a>
<a id="tocSerrorunprovisioned"></a>
<a id="tocserrorunprovisioned"></a>

```json
{
  "detail": "User=ABC123 is not provisioned to redact product=SMS",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Authorisation error",
  "type": "https://developer.nexmo.com/api-errors#unprovisioned"
}
```

Unprovisioned

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|Additional information about the error|
|instance|string|true|none|Internal Trace ID|
|title|string|true|none|Generic error message|
|type|string|true|none|Link to error / remediation options|

<h2 id="tocS_ErrorUnsupportedProduct">ErrorUnsupportedProduct</h2>
<!-- backwards compatibility -->
<a id="schemaerrorunsupportedproduct"></a>
<a id="schema_ErrorUnsupportedProduct"></a>
<a id="tocSerrorunsupportedproduct"></a>
<a id="tocserrorunsupportedproduct"></a>

```json
{
  "detail": "No product corresponding to supplied string sms2!",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Invalid Product",
  "type": "https://developer.nexmo.com/api-errors/redact#invalid-product"
}
```

Unsupported Product

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|Additional information about the error|
|instance|string|true|none|Internal Trace ID|
|title|string|true|none|Generic error message|
|type|string|true|none|Link to error / remediation options|

<h2 id="tocS_RedactTransaction">RedactTransaction</h2>
<!-- backwards compatibility -->
<a id="schemaredacttransaction"></a>
<a id="schema_RedactTransaction"></a>
<a id="tocSredacttransaction"></a>
<a id="tocsredacttransaction"></a>

```json
{
  "id": "209ab3c7536542b91e8b5aef032f6861",
  "product": "sms",
  "type": "outbound"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The transaction ID to redact|
|product|string|true|none|Product name that the ID provided relates to|
|type|string|true|none|Required if redacting SMS data|

#### Enumerated Values

|Property|Value|
|---|---|
|product|sms|
|product|voice|
|product|number-insight|
|product|verify|
|product|verify-sdk|
|product|messages|
|type|inbound|
|type|outbound|
