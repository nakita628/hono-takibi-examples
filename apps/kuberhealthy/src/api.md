<h1 id="kuberhealthy-api">Kuberhealthy API v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://raw.githubusercontent.com/">https://raw.githubusercontent.com/</a>

<h1 id="kuberhealthy-api-default">Default</h1>

## Retrieve Prometheus metrics for checks

> Code samples

```bash
curl http://localhost:8080/metrics
```

`GET /metrics`

<h3 id="retrieve-prometheus-metrics-for-checks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Metrics in Prometheus format|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Quick health check

> Code samples

```bash
curl http://localhost:8080/healthz
```

`GET /healthz`

<h3 id="quick-health-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Service is healthy|Inline|
|503|Service Unavailable|Dependencies unavailable|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get current status of all checks

> Code samples

```bash
curl http://localhost:8080/json \
  -H 'Accept: application/json'
```

`GET /json`

<h3 id="get-current-status-of-all-checks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|query|string|false|Comma-separated namespaces to filter by|

> Example responses

> 200 Response

```json
{
  "OK": true,
  "Errors": [
    "string"
  ],
  "CheckDetails": {
    "property1": {
      "ok": true,
      "errors": [
        "string"
      ],
      "consecutiveFailures": 0,
      "runDuration": 0,
      "namespace": "string",
      "currentUUID": "string",
      "lastRunUnix": 0,
      "successCount": 0,
      "failureCount": 0,
      "lastOKUnix": 0,
      "lastFailureUnix": 0,
      "additionalMetadata": "string",
      "nextRunUnix": 0,
      "podName": "string",
      "timeoutSeconds": 0,
      "runIntervalSeconds": 0
    },
    "property2": {
      "ok": true,
      "errors": [
        "string"
      ],
      "consecutiveFailures": 0,
      "runDuration": 0,
      "namespace": "string",
      "currentUUID": "string",
      "lastRunUnix": 0,
      "successCount": 0,
      "failureCount": 0,
      "lastOKUnix": 0,
      "lastFailureUnix": 0,
      "additionalMetadata": "string",
      "nextRunUnix": 0,
      "podName": "string",
      "timeoutSeconds": 0,
      "runIntervalSeconds": 0
    }
  },
  "CurrentMaster": "string",
  "Metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="get-current-status-of-all-checks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health status|[State](#schemastate)|

<aside class="success">
This operation does not require authentication
</aside>

## List Kubernetes events for a check

> Code samples

```bash
curl 'http://localhost:8080/api/events?namespace=string&healthcheck=string' \
  -H 'Accept: application/json'
```

`GET /api/events`

<h3 id="list-kubernetes-events-for-a-check-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|query|string|true|none|
|healthcheck|query|string|true|Name of the healthcheck to inspect.|

> Example responses

> 200 Response

```json
[
  {
    "message": "string",
    "reason": "string",
    "type": "string",
    "lastTimestamp": 0
  }
]
```

<h3 id="list-kubernetes-events-for-a-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Event list|Inline|
|400|Bad Request|Missing parameters|None|

<h3 id="list-kubernetes-events-for-a-check-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[EventSummary](#schemaeventsummary)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve logs for a checker pod

> Code samples

```bash
curl 'http://localhost:8080/api/logs?namespace=string&healthcheck=string&pod=string&format=text'
```

`GET /api/logs`

<h3 id="retrieve-logs-for-a-checker-pod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|query|string|true|none|
|healthcheck|query|string|true|Name of the healthcheck to inspect.|
|pod|query|string|true|none|
|format|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|text|

<h3 id="retrieve-logs-for-a-checker-pod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pod logs|Inline|
|400|Bad Request|Missing parameters|None|
|406|Not Acceptable|Unsupported format|None|

<aside class="success">
This operation does not require authentication
</aside>

## Stream logs for a running checker pod

> Code samples

```bash
curl 'http://localhost:8080/api/logs/stream?namespace=string&healthcheck=string&pod=string'
```

`GET /api/logs/stream`

<h3 id="stream-logs-for-a-running-checker-pod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|query|string|true|none|
|healthcheck|query|string|true|Name of the healthcheck to inspect.|
|pod|query|string|true|none|

<h3 id="stream-logs-for-a-running-checker-pod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Streaming pod logs|Inline|
|400|Bad Request|Missing parameters|None|
|409|Conflict|Pod not running|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get OpenAPI specification

> Code samples

```bash
curl http://localhost:8080/openapi.yaml
```

`GET /openapi.yaml`

<h3 id="get-openapi-specification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OpenAPI specification in YAML|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get OpenAPI specification

> Code samples

```bash
curl http://localhost:8080/openapi.json \
  -H 'Accept: application/json'
```

`GET /openapi.json`

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-openapi-specification-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OpenAPI specification in JSON|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Trigger an immediate healthcheck run

> Code samples

```bash
curl 'http://localhost:8080/api/run?namespace=string&healthcheck=string' \
  -X POST
```

`POST /api/run`

<h3 id="trigger-an-immediate-healthcheck-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|query|string|true|none|
|healthcheck|query|string|true|Name of the healthcheck to run.|

<h3 id="trigger-an-immediate-healthcheck-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Run started|None|
|400|Bad Request|Missing parameters|None|
|404|Not Found|Check not found|None|
|409|Conflict|Check already running|None|

<aside class="success">
This operation does not require authentication
</aside>

## Report an external check result

> Code samples

```bash
curl http://localhost:8080/check \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'kh-run-uuid: string' \
  -d '{
    "errors": [
      "string"
    ],
    "ok": true
  }'
```

`POST /check`

> Body parameter

```json
{
  "errors": [
    "string"
  ],
  "ok": true
}
```

<h3 id="report-an-external-check-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|kh-run-uuid|header|string|true|Run identifier injected into the check pod.|
|body|body|[Report](#schemareport)|true|none|
|» errors|body|[string]|false|none|
|» ok|body|boolean|true|none|

<h3 id="report-an-external-check-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Report accepted|None|
|400|Bad Request|Invalid report|None|

<aside class="success">
This operation does not require authentication
</aside>

## HTML status page

> Code samples

```bash
curl http://localhost:8080/
```

`GET /`

<h3 id="html-status-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status page|Inline|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_State">State</h2>
<!-- backwards compatibility -->
<a id="schemastate"></a>
<a id="schema_State"></a>
<a id="tocSstate"></a>
<a id="tocsstate"></a>

```json
{
  "OK": true,
  "Errors": [
    "string"
  ],
  "CheckDetails": {
    "property1": {
      "ok": true,
      "errors": [
        "string"
      ],
      "consecutiveFailures": 0,
      "runDuration": 0,
      "namespace": "string",
      "currentUUID": "string",
      "lastRunUnix": 0,
      "successCount": 0,
      "failureCount": 0,
      "lastOKUnix": 0,
      "lastFailureUnix": 0,
      "additionalMetadata": "string",
      "nextRunUnix": 0,
      "podName": "string",
      "timeoutSeconds": 0,
      "runIntervalSeconds": 0
    },
    "property2": {
      "ok": true,
      "errors": [
        "string"
      ],
      "consecutiveFailures": 0,
      "runDuration": 0,
      "namespace": "string",
      "currentUUID": "string",
      "lastRunUnix": 0,
      "successCount": 0,
      "failureCount": 0,
      "lastOKUnix": 0,
      "lastFailureUnix": 0,
      "additionalMetadata": "string",
      "nextRunUnix": 0,
      "podName": "string",
      "timeoutSeconds": 0,
      "runIntervalSeconds": 0
    }
  },
  "CurrentMaster": "string",
  "Metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OK|boolean|true|none|none|
|Errors|[string]|true|none|none|
|CheckDetails|object|true|none|none|
|CurrentMaster|string|false|none|none|
|Metadata|object|false|none|none|

<h2 id="tocS_CheckDetail">CheckDetail</h2>
<!-- backwards compatibility -->
<a id="schemacheckdetail"></a>
<a id="schema_CheckDetail"></a>
<a id="tocScheckdetail"></a>
<a id="tocscheckdetail"></a>

```json
{
  "ok": true,
  "errors": [
    "string"
  ],
  "consecutiveFailures": 0,
  "runDuration": 0,
  "namespace": "string",
  "currentUUID": "string",
  "lastRunUnix": 0,
  "successCount": 0,
  "failureCount": 0,
  "lastOKUnix": 0,
  "lastFailureUnix": 0,
  "additionalMetadata": "string",
  "nextRunUnix": 0,
  "podName": "string",
  "timeoutSeconds": 0,
  "runIntervalSeconds": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|errors|[string]|false|none|none|
|consecutiveFailures|integer|false|none|none|
|runDuration|integer(int64)|false|none|Execution time of the last run in nanoseconds|
|namespace|string|false|none|none|
|currentUUID|string|false|none|none|
|lastRunUnix|integer(int64)|false|none|none|
|successCount|integer|false|none|none|
|failureCount|integer|false|none|none|
|lastOKUnix|integer(int64)|false|none|none|
|lastFailureUnix|integer(int64)|false|none|none|
|additionalMetadata|string|false|none|none|
|nextRunUnix|integer(int64)|false|none|none|
|podName|string|false|none|none|
|timeoutSeconds|integer(int64)|false|none|none|
|runIntervalSeconds|integer(int64)|false|none|none|

<h2 id="tocS_Report">Report</h2>
<!-- backwards compatibility -->
<a id="schemareport"></a>
<a id="schema_Report"></a>
<a id="tocSreport"></a>
<a id="tocsreport"></a>

```json
{
  "errors": [
    "string"
  ],
  "ok": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[string]|false|none|none|
|ok|boolean|true|none|none|

<h2 id="tocS_EventSummary">EventSummary</h2>
<!-- backwards compatibility -->
<a id="schemaeventsummary"></a>
<a id="schema_EventSummary"></a>
<a id="tocSeventsummary"></a>
<a id="tocseventsummary"></a>

```json
{
  "message": "string",
  "reason": "string",
  "type": "string",
  "lastTimestamp": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|
|reason|string|true|none|none|
|type|string|true|none|none|
|lastTimestamp|integer(int64)|false|none|none|

<h2 id="tocS_AdmissionReview">AdmissionReview</h2>
<!-- backwards compatibility -->
<a id="schemaadmissionreview"></a>
<a id="schema_AdmissionReview"></a>
<a id="tocSadmissionreview"></a>
<a id="tocsadmissionreview"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "request": {},
  "response": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|none|
|kind|string|false|none|none|
|request|object|false|none|none|
|response|object|false|none|none|

<h2 id="tocS_ConversionReview">ConversionReview</h2>
<!-- backwards compatibility -->
<a id="schemaconversionreview"></a>
<a id="schema_ConversionReview"></a>
<a id="tocSconversionreview"></a>
<a id="tocsconversionreview"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "request": {},
  "response": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|none|
|kind|string|false|none|none|
|request|object|false|none|none|
|response|object|false|none|none|
