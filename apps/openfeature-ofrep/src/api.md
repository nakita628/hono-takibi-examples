<h1 id="openfeature-remote-evaluation-protocol-ofrep">OpenFeature Remote Evaluation Protocol (OFREP) v0.4.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

---
The **OpenFeature Remote Evaluation Protocol (OFREP)** is an API specification for feature flagging 
that enables vendor-agnostic communication between applications and flag management systems. 

OFREP defines a standard API layer between OpenFeature providers and flag management systems, 
allowing any flag management system to implement the protocol and be compatible with 
community-maintained providers.

For more information, see the [OFREP documentation](https://openfeature.dev/docs/reference/other-technologies/ofrep/).

Base URLs:

* <a href="https://raw.githubusercontent.com/">https://raw.githubusercontent.com/</a>

Web: <a href="https://github.com/open-feature/protocol">https://github.com/open-feature/protocol</a> 
License: Apache 2.0

# Authentication

- HTTP Authentication, scheme: bearer Optional Bearer token authentication. If supported by the flag management system, 
clients can authenticate using a Bearer token in the `Authorization` header following 
the format: `Authorization: Bearer <token>`.

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header. Optional API key authentication. If supported by the flag management system, clients 
can authenticate by providing an API key in the `X-API-Key` header.

<h1 id="openfeature-remote-evaluation-protocol-ofrep-ofrep-core">OFREP Core</h1>

**Required**: Core APIs to implement to support OFREP.  
*This is the minimum set of APIs required for a flag management system to be OFREP compatible.*


## Evaluate A Single Feature Flag

<a id="opIdevaluateFlag"></a>

> Code samples

```bash
curl http://localhost:3000/ofrep/v1/evaluate/flags/discount-banner \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "context": {
      "targetingKey": "user-123",
      "email": "user@example.com",
      "custom-plan": "premium",
      "country": "CA"
    }
  }'
```

`POST /ofrep/v1/evaluate/flags/{key}`

Evaluates a single feature flag by its key. This endpoint is used by **server-side providers** 
for dynamic context evaluation, where each evaluation request includes the evaluation context.

The endpoint returns the evaluated flag value along with metadata including the evaluation 
reason, variant, and any flag-specific metadata. The flag value can be one of several types: 
boolean, string, integer, float, object, or a code default (indicating the provider should 
use the code default value).

**Use Case**: Server-side applications where evaluation context may change between requests 
and real-time targeting decisions are required.


> Body parameter

```json
{
  "context": {
    "targetingKey": "user-123",
    "email": "user@example.com",
    "custom-plan": "premium",
    "country": "CA"
  }
}
```

<h3 id="evaluate-a-single-feature-flag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|The unique identifier (key) of the feature flag|
|body|body|[evaluationRequest](#schemaevaluationrequest)|true|Evaluation request containing the context for flag evaluation|
|» context|body|[context](#schemacontext)|true|Evaluation context containing information used to evaluate feature flags. The context<br>may include an optional `targetingKey` identifying the subject of the evaluation, along<br>with additional properties such as user attributes, session data, or request metadata<br>that can be used for targeting rules.<br>|

> Example responses

> 200 Response

```json
{
  "key": "discount-banner",
  "value": true,
  "reason": "TARGETING_MATCH",
  "variant": "enabled"
}
```

> 400 Response

```json
{
  "key": "my-flag",
  "errorCode": "INVALID_CONTEXT",
  "errorDetails": "Context property 'plan' must be a string"
}
```

> 404 Response

```json
{
  "key": "non-existent-flag",
  "errorCode": "FLAG_NOT_FOUND",
  "errorDetails": "Flag 'non-existent-flag' was not found"
}
```

> 500 Response

```json
{
  "errorDetails": "An internal server error occurred while processing the request"
}
```

<h3 id="evaluate-a-single-feature-flag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful flag evaluation. Returns the evaluated flag value with metadata.|[serverEvaluationSuccess](#schemaserverevaluationsuccess)|
|400|Bad Request|Bad evaluation request. The request is malformed or contains invalid context.|[evaluationFailure](#schemaevaluationfailure)|
|401|Unauthorized|Unauthorized. Authentication credentials are missing, invalid, or expired.|None|
|403|Forbidden|Forbidden. The client does not have permission to access the requested resource.|None|
|404|Not Found|Flag not found. The specified flag key does not exist in the flag management system.|[flagNotFound](#schemaflagnotfound)|
|429|Too Many Requests|Too Many Requests. Rate limit has been exceeded.|None|
|500|Internal Server Error|Internal Server Error. An unexpected error occurred on the server that prevented flag evaluation.|[generalErrorResponse](#schemageneralerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|string|date-time|Indicates when to retry the request again. Can be either a date-time string <br>or a number of seconds to wait.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Bulk Evaluate All Feature Flags

<a id="opIdevaluateFlagsBulk"></a>

> Code samples

```bash
curl http://localhost:3000/ofrep/v1/evaluate/flags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "context": {
      "targetingKey": "user-456",
      "email": "user@example.com",
      "plan": "free",
      "country": "CA"
    }
  }'
```

`POST /ofrep/v1/evaluate/flags`

Evaluates all feature flags in a single request using a static context. This endpoint is 
used by **client-side providers** for static context evaluation, where all flags are evaluated 
once and then cached locally for subsequent use.

The endpoint returns an array of all flag evaluations, where each flag can be either a 
successful evaluation or an evaluation failure. The response includes an ETag header for 
cache validation, allowing clients to use the `If-None-Match` header to avoid unnecessary 
re-evaluation when flags haven't changed.


> Body parameter

```json
{
  "context": {
    "targetingKey": "user-456",
    "email": "user@example.com",
    "plan": "free",
    "country": "CA"
  }
}
```

<h3 id="bulk-evaluate-all-feature-flags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional ETag value from a previous bulk evaluation response. If provided and the <br>ETag matches the current flag set, the server will return a 304 Not Modified response, <br>indicating that flags haven't changed since the last evaluation.<br>|
|flagConfigEtag|query|string|false|Optional ETag metadata provided by an event stream for change-triggered<br>re-fetches (see ADR-0008). This is not a standard HTTP conditional request<br>header; it is metadata for server-side cache validation and freshness<br>checks. It should only be included when the request is directly triggered<br>by a received change notification event.<br>|
|flagConfigLastModified|query|integer \| string(date-time)|false|Optional last-modified metadata provided by an event stream for<br>change-triggered re-fetches (see ADR-0008). Supports Unix timestamp in<br>seconds (recommended) or an ISO 8601 date-time string, and is<br>transported as query metadata rather than `If-Modified-Since`. It should<br>only be included when the request is directly triggered by a received<br>change notification event.<br>|
|body|body|[bulkEvaluationRequest](#schemabulkevaluationrequest)|true|none|
|» context|body|[context](#schemacontext)|true|Evaluation context containing information used to evaluate feature flags. The context<br>may include an optional `targetingKey` identifying the subject of the evaluation, along<br>with additional properties such as user attributes, session data, or request metadata<br>that can be used for targeting rules.<br>|

> Example responses

> 200 Response

```json
{
  "flags": [
    {
      "key": "discount-banner",
      "value": true,
      "reason": "TARGETING_MATCH",
      "variant": "enabled"
    },
    {
      "key": "theme-color",
      "value": "blue",
      "reason": "STATIC",
      "variant": "default"
    },
    {
      "key": "non-existent-flag",
      "errorCode": "FLAG_NOT_FOUND",
      "errorDetails": "Flag 'non-existent-flag' was not found"
    }
  ],
  "eventStreams": [
    {
      "type": "sse",
      "url": "https://sse.example.com/event-stream?channels=env_abc123_v1",
      "inactivityDelaySec": 120
    }
  ],
  "metadata": {
    "version": "v12"
  }
}
```

> 400 Response

```json
{
  "errorCode": "INVALID_CONTEXT",
  "errorDetails": "Context property 'plan' must be a string"
}
```

> 500 Response

```json
{
  "errorDetails": "An internal server error occurred while processing the request"
}
```

<h3 id="bulk-evaluate-all-feature-flags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful bulk evaluation.|[bulkEvaluationSuccess](#schemabulkevaluationsuccess)|
|304|Not Modified|Not Modified. The flags haven't changed since the last evaluation (ETag matches). No response body is returned.<br>|None|
|400|Bad Request|Bad evaluation request. The request is malformed or contains invalid context.|[bulkEvaluationFailure](#schemabulkevaluationfailure)|
|401|Unauthorized|Unauthorized. Authentication credentials are missing, invalid, or expired.|None|
|403|Forbidden|Forbidden. The client does not have permission to access the requested resource.|None|
|429|Too Many Requests|Too Many Requests. Rate limit has been exceeded.|None|
|500|Internal Server Error|Internal server error. An unexpected error occurred on the server that prevented flag evaluation.|[generalErrorResponse](#schemageneralerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Entity tag (ETag) representing the current state of all flags. Clients should <br>include this value in subsequent requests using the `If-None-Match` header for <br>cache validation.<br>|
|429|Retry-After|string(date-time) \| integer||Indicates when to retry the request again. Can be either a date-time string <br>or a number of seconds to wait.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

# Schemas

<h2 id="tocS_bulkEvaluationRequest">bulkEvaluationRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkevaluationrequest"></a>
<a id="schema_bulkEvaluationRequest"></a>
<a id="tocSbulkevaluationrequest"></a>
<a id="tocsbulkevaluationrequest"></a>

```json
{
  "context": {
    "targetingKey": "user-123",
    "email": "user@example.com",
    "plan": "premium",
    "country": "CA"
  }
}
```

Request body for bulk flag evaluation. Contains a static context that will be used 
to evaluate all flags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[context](#schemacontext)|true|none|Evaluation context containing information used to evaluate feature flags. The context<br>may include an optional `targetingKey` identifying the subject of the evaluation, along<br>with additional properties such as user attributes, session data, or request metadata<br>that can be used for targeting rules.<br>|

<h2 id="tocS_bulkEvaluationSuccess">bulkEvaluationSuccess</h2>
<!-- backwards compatibility -->
<a id="schemabulkevaluationsuccess"></a>
<a id="schema_bulkEvaluationSuccess"></a>
<a id="tocSbulkevaluationsuccess"></a>
<a id="tocsbulkevaluationsuccess"></a>

```json
{
  "flags": [
    {
      "key": "discount-banner",
      "reason": "STATIC",
      "variant": "string",
      "metadata": {
        "property1": true,
        "property2": true,
        "team": "ecommerce",
        "businessPurpose": "experiment",
        "owner": "product-team"
      },
      "value": true
    }
  ],
  "metadata": {
    "property1": true,
    "property2": true
  },
  "eventStreams": [
    {
      "type": "sse",
      "url": "https://sse.example.com/event-stream?channels=env_abc123_v1",
      "endpoint": {
        "origin": "https://sse.example.com",
        "requestUri": "/event-stream?channels=env_abc123_v1"
      },
      "inactivityDelaySec": 120
    }
  ]
}
```

Success response for bulk flag evaluation. Contains an array of flag evaluations, 
where each item can be either a successful evaluation or an evaluation failure. 
This allows partial success scenarios where some flags may fail while others succeed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flags|[[evaluationSuccess](#schemaevaluationsuccess) \| [evaluationFailure](#schemaevaluationfailure)]|true|none|Array of flag evaluations. Each evaluation can be a success or failure.|
|metadata|[metadata](#schemametadata)|false|none|Arbitrary metadata for the flag set, useful for telemetry and documentary purposes.<br>|
|eventStreams|[[eventStream](#schemaeventstream)]|false|none|Optional array of real-time change notification connections. When present,<br>the provider should connect to any entries with a known type and re-fetch<br>flag evaluations when notified of changes. If not present, the provider<br>should continue using polling for change detection. Entries with unknown<br>types must be ignored for forward compatibility.<br>|

<h2 id="tocS_bulkEvaluationFailure">bulkEvaluationFailure</h2>
<!-- backwards compatibility -->
<a id="schemabulkevaluationfailure"></a>
<a id="schema_bulkEvaluationFailure"></a>
<a id="tocSbulkevaluationfailure"></a>
<a id="tocsbulkevaluationfailure"></a>

```json
{
  "errorCode": "INVALID_CONTEXT",
  "errorDetails": "Context property 'plan' must be a string"
}
```

Failure response for bulk evaluation. Returned when the entire bulk evaluation request 
fails (e.g., invalid context, parse errors). Individual flag failures within a successful 
bulk evaluation are represented as evaluationFailure items in the flags array.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|true|none|An error code specific to the bulk evaluation error. See <br>https://openfeature.dev/specification/types#error-code for error code definitions.<br>|
|errorDetails|string|false|none|Optional error details description for logging or debugging purposes|

<h2 id="tocS_evaluationRequest">evaluationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationrequest"></a>
<a id="schema_evaluationRequest"></a>
<a id="tocSevaluationrequest"></a>
<a id="tocsevaluationrequest"></a>

```json
{
  "context": {
    "targetingKey": "user-123",
    "email": "user@example.com",
    "plan": "premium",
    "country": "CA"
  }
}
```

Request body for single feature flag evaluation. Contains the evaluation context that will be 
used to evaluate the feature flag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[context](#schemacontext)|true|none|Evaluation context containing information used to evaluate feature flags. The context<br>may include an optional `targetingKey` identifying the subject of the evaluation, along<br>with additional properties such as user attributes, session data, or request metadata<br>that can be used for targeting rules.<br>|

<h2 id="tocS_serverEvaluationSuccess">serverEvaluationSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaserverevaluationsuccess"></a>
<a id="schema_serverEvaluationSuccess"></a>
<a id="tocSserverevaluationsuccess"></a>
<a id="tocsserverevaluationsuccess"></a>

```json
{
  "key": "discount-banner",
  "reason": "STATIC",
  "variant": "string",
  "metadata": {
    "property1": true,
    "property2": true,
    "team": "ecommerce",
    "businessPurpose": "experiment",
    "owner": "product-team"
  },
  "value": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|[key](#schemakey)|true|none|The unique identifier (key) of the feature flag. This is used to reference a specific <br>flag in the flag management system.<br>|
|reason|string|true|none|An OpenFeature reason code indicating why the flag was evaluated to this value. <br>See https://openfeature.dev/specification/types/#resolution-reason for reason code definitions.<br>|
|variant|string|false|none|Variant identifier for the evaluated feature flag value. Represents a specific variation <br>or configuration of the feature flag.<br>|
|metadata|object|false|none|none|
|*oneOf*|[booleanFlag](#schemabooleanflag)|false|none|A boolean typed flag value. Used for simple on/off feature flags.|
|*oneOf*|[stringFlag](#schemastringflag)|false|none|A string typed flag value.|
|*oneOf*|[integerFlag](#schemaintegerflag)|false|none|An integer typed flag value.|
|*oneOf*|[floatFlag](#schemafloatflag)|false|none|A float typed flag value.|
|*oneOf*|[objectFlag](#schemaobjectflag)|false|none|An object typed flag value.|
|*oneOf*|[codeDefaultFlag](#schemacodedefaultflag)|false|none|A flag evaluation that defers to the code default value. When a flag evaluation returns <br>this type, it indicates that the provider should use the default value specified in the <br>application code rather than a value from the flag management system.<br><br>**Note**: This schema has no `value` property. The provider must use the code default <br>value when processing this response.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|STATIC|
|reason|TARGETING_MATCH|
|reason|SPLIT|
|reason|DISABLED|
|reason|UNKNOWN|

<h2 id="tocS_eventStream">eventStream</h2>
<!-- backwards compatibility -->
<a id="schemaeventstream"></a>
<a id="schema_eventStream"></a>
<a id="tocSeventstream"></a>
<a id="tocseventstream"></a>

```json
{
  "type": "sse",
  "url": "https://sse.example.com/event-stream?channels=env_abc123_v1",
  "endpoint": {
    "origin": "https://sse.example.com",
    "requestUri": "/event-stream?channels=env_abc123_v1"
  },
  "inactivityDelaySec": 120
}
```

A real-time change notification connection endpoint. The `type` field
identifies the push mechanism; currently only `sse` is defined. Providers
must ignore entries with unknown types for forward compatibility.
Exactly one of `url` or `endpoint` must be provided.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The connection type identifying the push mechanism to use.<br>Currently only `sse` is defined. Providers must ignore entries<br>with unknown types for forward compatibility.<br>|
|url|string(uri)|false|none|The endpoint URL the client should connect to for real-time<br>flag change notifications. This is the default representation and<br>is opaque to the provider. The URL may include authentication tokens,<br>channel identifiers, or other query parameters as needed by the<br>vendor's infrastructure. Implementations must treat this value as<br>sensitive and must not log or persist the full URL including its<br>query string.<br>|
|endpoint|[eventStreamEndpoint](#schemaeventstreamendpoint)|false|none|Structured endpoint components for deployments that need to override<br>the origin cleanly while preserving the request target. When present,<br>providers construct the connection URL as `origin + requestUri`. If<br>`origin` is absent, providers should use their configured OFREP base<br>URL origin.<br>|
|inactivityDelaySec|integer|false|none|Number of seconds of client inactivity (e.g., browser tab hidden,<br>mobile app backgrounded) after which the connection should be closed<br>to conserve resources. The client must reconnect and perform a full<br>unconditional re-fetch when activity resumes. When determining the<br>effective inactivity timeout, providers should use a client-side<br>override if configured; otherwise use this value when present;<br>otherwise default to 120 seconds.<br>|
|*oneOf*|object|false|none|none|
|*oneOf*|object|false|none|none|

<h2 id="tocS_eventStreamEndpoint">eventStreamEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaeventstreamendpoint"></a>
<a id="schema_eventStreamEndpoint"></a>
<a id="tocSeventstreamendpoint"></a>
<a id="tocseventstreamendpoint"></a>

```json
{
  "origin": "https://sse.example.com",
  "requestUri": "/event-stream?channels=env_abc123_v1"
}
```

Structured endpoint components for deployments that need to override
the origin cleanly while preserving the request target. When present,
providers construct the connection URL as `origin + requestUri`. If
`origin` is absent, providers should use their configured OFREP base
URL origin.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|origin|string(uri)|false|none|The scheme + host + optional port portion of the endpoint URL.<br>If absent, providers should use their configured OFREP base URL origin.<br>|
|requestUri|string|true|none|The path + query portion of the endpoint URL. Must start with `/`.<br>|

<h2 id="tocS_sseEvent">sseEvent</h2>
<!-- backwards compatibility -->
<a id="schemasseevent"></a>
<a id="schema_sseEvent"></a>
<a id="tocSsseevent"></a>
<a id="tocssseevent"></a>

```json
{
  "data": "string",
  "event": "message",
  "id": "evt-1234",
  "retry": 0
}
```

Schema for a single Server-Sent Event in the flag configuration change
notification stream. The `data` field contains a JSON-encoded payload
that providers must parse to determine the event type and any metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|true|none|JSON-encoded event payload. Providers must parse this string as JSON<br>and inspect the `type` field to determine behavior.<br>|
|event|string|false|none|The SSE event type. Always `message` for OFREP events. Providers<br>must inspect `data.type` rather than this field for event routing.<br>|
|id|string|false|none|Event identifier used by SSE clients for resume semantics via<br>`Last-Event-ID`.<br>|
|retry|integer|false|none|Reconnection time in milliseconds suggested by the server.<br>|

<h2 id="tocS_sseEventData">sseEventData</h2>
<!-- backwards compatibility -->
<a id="schemasseeventdata"></a>
<a id="schema_sseEventData"></a>
<a id="tocSsseeventdata"></a>
<a id="tocssseeventdata"></a>

```json
{
  "type": "refetchEvaluation",
  "etag": "abc123",
  "lastModified": 1771622898
}
```

JSON payload inside the event `data` field. The `type` field determines
the event semantics. Providers must handle `refetchEvaluation` and
ignore unknown values for forward compatibility.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The OFREP event type. Currently only `refetchEvaluation` is defined.<br>Providers must ignore unknown values for forward compatibility.<br>|
|etag|string|false|none|Latest flag configuration cache validation token. If present,<br>providers should include it as the `flagConfigEtag` query parameter<br>on the re-fetch request.<br>|
|lastModified|integer \| string(date-time)|false|none|Latest flag configuration timestamp. Supports Unix timestamp in<br>seconds (recommended) or an ISO 8601 date-time string.<br>If present, providers should include it as the `flagConfigLastModified`<br>query parameter on the re-fetch request.<br>|

<h2 id="tocS_evaluationSuccess">evaluationSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationsuccess"></a>
<a id="schema_evaluationSuccess"></a>
<a id="tocSevaluationsuccess"></a>
<a id="tocsevaluationsuccess"></a>

```json
{
  "key": "discount-banner",
  "reason": "STATIC",
  "variant": "string",
  "metadata": {
    "property1": true,
    "property2": true,
    "team": "ecommerce",
    "businessPurpose": "experiment",
    "owner": "product-team"
  },
  "value": true
}
```

Successful feature flag evaluation response. The value property is present 
for all flag types except `codeDefaultFlag`, which indicates the provider should use the 
code default value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|[key](#schemakey)|true|none|The unique identifier (key) of the feature flag. This is used to reference a specific <br>flag in the flag management system.<br>|
|reason|string|true|none|An OpenFeature reason code indicating why the flag was evaluated to this value. <br>See https://openfeature.dev/specification/types/#resolution-reason for reason code definitions.<br>|
|variant|string|false|none|Variant identifier for the evaluated feature flag value. Represents a specific variation <br>or configuration of the feature flag.<br>|
|metadata|object|false|none|none|
|*oneOf*|[booleanFlag](#schemabooleanflag)|false|none|A boolean typed flag value. Used for simple on/off feature flags.|
|*oneOf*|[stringFlag](#schemastringflag)|false|none|A string typed flag value.|
|*oneOf*|[integerFlag](#schemaintegerflag)|false|none|An integer typed flag value.|
|*oneOf*|[floatFlag](#schemafloatflag)|false|none|A float typed flag value.|
|*oneOf*|[objectFlag](#schemaobjectflag)|false|none|An object typed flag value.|
|*oneOf*|[codeDefaultFlag](#schemacodedefaultflag)|false|none|A flag evaluation that defers to the code default value. When a flag evaluation returns <br>this type, it indicates that the provider should use the default value specified in the <br>application code rather than a value from the flag management system.<br><br>**Note**: This schema has no `value` property. The provider must use the code default <br>value when processing this response.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|STATIC|
|reason|TARGETING_MATCH|
|reason|SPLIT|
|reason|DISABLED|
|reason|UNKNOWN|

<h2 id="tocS_evaluationFailure">evaluationFailure</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationfailure"></a>
<a id="schema_evaluationFailure"></a>
<a id="tocSevaluationfailure"></a>
<a id="tocsevaluationfailure"></a>

```json
{
  "key": "discount-banner",
  "errorCode": "PARSE_ERROR",
  "errorDetails": "string",
  "metadata": {
    "property1": true,
    "property2": true,
    "team": "ecommerce",
    "businessPurpose": "experiment",
    "owner": "product-team"
  }
}
```

Feature flag evaluation failure response. Returned when a feature flag evaluation fails, such as when 
the context is invalid, required targeting keys are missing, or parsing errors occur.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|[key](#schemakey)|true|none|The unique identifier (key) of the feature flag. This is used to reference a specific <br>flag in the flag management system.<br>|
|errorCode|string|true|none|OpenFeature compatible error code indicating the type of error. See <br>https://openfeature.dev/specification/types#error-code for error code definitions.<br>|
|errorDetails|[errorDetails](#schemaerrordetails)|false|none|A human-readable error description providing additional context about the evaluation <br>failure. Useful for logging, debugging, and monitoring purposes.<br>|
|metadata|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|errorCode|PARSE_ERROR|
|errorCode|TARGETING_KEY_MISSING|
|errorCode|INVALID_CONTEXT|
|errorCode|GENERAL|

<h2 id="tocS_flagNotFound">flagNotFound</h2>
<!-- backwards compatibility -->
<a id="schemaflagnotfound"></a>
<a id="schema_flagNotFound"></a>
<a id="tocSflagnotfound"></a>
<a id="tocsflagnotfound"></a>

```json
{
  "key": "discount-banner",
  "errorCode": "FLAG_NOT_FOUND",
  "errorDetails": "string",
  "metadata": {
    "property1": true,
    "property2": true,
    "team": "ecommerce",
    "businessPurpose": "experiment",
    "owner": "product-team"
  }
}
```

Feature flag not found response. Returned when a requested feature flag key does not exist in the 
flag management system. This can be an expected response in certain flag management systems. 
This is distinct from evaluation failures, which occur when a flag exists but cannot be evaluated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|[key](#schemakey)|true|none|The unique identifier (key) of the feature flag. This is used to reference a specific <br>flag in the flag management system.<br>|
|errorCode|string|true|none|Error code indicating the flag was not found|
|errorDetails|[errorDetails](#schemaerrordetails)|false|none|A human-readable error description providing additional context about the evaluation <br>failure. Useful for logging, debugging, and monitoring purposes.<br>|
|metadata|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|errorCode|FLAG_NOT_FOUND|

<h2 id="tocS_generalErrorResponse">generalErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemageneralerrorresponse"></a>
<a id="schema_generalErrorResponse"></a>
<a id="tocSgeneralerrorresponse"></a>
<a id="tocsgeneralerrorresponse"></a>

```json
{
  "errorDetails": "string"
}
```

General error response for unexpected server errors (500 status). Used when the 
server encounters an internal error that prevents flag evaluation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorDetails|[errorDetails](#schemaerrordetails)|false|none|A human-readable error description providing additional context about the evaluation <br>failure. Useful for logging, debugging, and monitoring purposes.<br>|

<h2 id="tocS_key">key</h2>
<!-- backwards compatibility -->
<a id="schemakey"></a>
<a id="schema_key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

```json
"discount-banner"
```

The unique identifier (key) of the feature flag. This is used to reference a specific 
flag in the flag management system.

<h2 id="tocS_context">context</h2>
<!-- backwards compatibility -->
<a id="schemacontext"></a>
<a id="schema_context"></a>
<a id="tocScontext"></a>
<a id="tocscontext"></a>

```json
{
  "targetingKey": "user-123",
  "email": "user@example.com",
  "plan": "premium",
  "country": "CA"
}
```

Evaluation context containing information used to evaluate feature flags. The context
may include an optional `targetingKey` identifying the subject of the evaluation, along
with additional properties such as user attributes, session data, or request metadata
that can be used for targeting rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetingKey|string|false|none|none|

<h2 id="tocS_booleanFlag">booleanFlag</h2>
<!-- backwards compatibility -->
<a id="schemabooleanflag"></a>
<a id="schema_booleanFlag"></a>
<a id="tocSbooleanflag"></a>
<a id="tocsbooleanflag"></a>

```json
{
  "value": true
}
```

A boolean typed flag value. Used for simple on/off feature flags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|boolean|true|none|none|

<h2 id="tocS_stringFlag">stringFlag</h2>
<!-- backwards compatibility -->
<a id="schemastringflag"></a>
<a id="schema_stringFlag"></a>
<a id="tocSstringflag"></a>
<a id="tocsstringflag"></a>

```json
{
  "value": "string"
}
```

A string typed flag value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|none|

<h2 id="tocS_integerFlag">integerFlag</h2>
<!-- backwards compatibility -->
<a id="schemaintegerflag"></a>
<a id="schema_integerFlag"></a>
<a id="tocSintegerflag"></a>
<a id="tocsintegerflag"></a>

```json
{
  "value": 0
}
```

An integer typed flag value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|integer|true|none|none|

<h2 id="tocS_floatFlag">floatFlag</h2>
<!-- backwards compatibility -->
<a id="schemafloatflag"></a>
<a id="schema_floatFlag"></a>
<a id="tocSfloatflag"></a>
<a id="tocsfloatflag"></a>

```json
{
  "value": 0
}
```

A float typed flag value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|number(float)|true|none|none|

<h2 id="tocS_objectFlag">objectFlag</h2>
<!-- backwards compatibility -->
<a id="schemaobjectflag"></a>
<a id="schema_objectFlag"></a>
<a id="tocSobjectflag"></a>
<a id="tocsobjectflag"></a>

```json
{
  "value": {}
}
```

An object typed flag value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|true|none|none|

<h2 id="tocS_codeDefaultFlag">codeDefaultFlag</h2>
<!-- backwards compatibility -->
<a id="schemacodedefaultflag"></a>
<a id="schema_codeDefaultFlag"></a>
<a id="tocScodedefaultflag"></a>
<a id="tocscodedefaultflag"></a>

```json
{}
```

A flag evaluation that defers to the code default value. When a flag evaluation returns 
this type, it indicates that the provider should use the default value specified in the 
application code rather than a value from the flag management system.

**Note**: This schema has no `value` property. The provider must use the code default 
value when processing this response.

<h2 id="tocS_errorDetails">errorDetails</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetails"></a>
<a id="schema_errorDetails"></a>
<a id="tocSerrordetails"></a>
<a id="tocserrordetails"></a>

```json
"string"
```

A human-readable error description providing additional context about the evaluation 
failure. Useful for logging, debugging, and monitoring purposes.

<h2 id="tocS_metadata">metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "property1": true,
  "property2": true
}
```

Arbitrary metadata object that can contain any additional information about flags or 
flag sets. This metadata is useful for debugging and telemetry purposes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|boolean \| string \| number|false|none|none|

<h2 id="tocS_flagMetadataExamples">flagMetadataExamples</h2>
<!-- backwards compatibility -->
<a id="schemaflagmetadataexamples"></a>
<a id="schema_flagMetadataExamples"></a>
<a id="tocSflagmetadataexamples"></a>
<a id="tocsflagmetadataexamples"></a>

```json
{
  "team": "ecommerce",
  "businessPurpose": "experiment",
  "owner": "product-team"
}
```

Example metadata structure for flags

<h2 id="tocS_flagMetadataDescription">flagMetadataDescription</h2>
<!-- backwards compatibility -->
<a id="schemaflagmetadatadescription"></a>
<a id="schema_flagMetadataDescription"></a>
<a id="tocSflagmetadatadescription"></a>
<a id="tocsflagmetadatadescription"></a>

```json
null
```

Arbitrary metadata for the flag, useful for telemetry and documentary purposes.
