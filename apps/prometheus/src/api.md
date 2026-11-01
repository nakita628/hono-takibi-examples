<h1 id="prometheus-api">Prometheus API v0.0.1-undefined</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Prometheus is an Open-Source monitoring system with a dimensional data model, flexible query language, efficient time series database and modern alerting approach.

Base URLs:

* <a href="https://raw.githubusercontent.com/api/v1">https://raw.githubusercontent.com/api/v1</a>

Web: <a href="https://prometheus.io/community/">Prometheus Community</a> 

<h1 id="prometheus-api-query">query</h1>

Query and evaluate PromQL expressions.

## Evaluate an instant query

<a id="opIdquery"></a>

> Code samples

```bash
curl 'http://localhost:9090/api/v1/query?query=up' \
  -H 'Accept: application/json'
```

`GET /query`

<h3 id="evaluate-an-instant-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int64)|false|The maximum number of metrics to return.|
|time|query|string(date-time) \| number(unixtime)|false|The evaluation timestamp (optional, defaults to current time).|
|query|query|string|true|The PromQL query to execute.|
|timeout|query|string(duration) \| number(float)|false|Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.|
|lookback_delta|query|string(duration) \| number(float)|false|Override the lookback period for this query. Optional.|
|stats|query|string|false|Include query statistics in the response. Supported values: 'true' (basic statistics) and 'all' (basic plus per-step statistics). Other non-empty values are deprecated (they behave like 'true') and will be rejected in the next major release.|
|cost|query|boolean|false|When true, include an estimated-vs-actual cost comparison in the response. Any non-boolean value is an error. Requires the query-cost feature flag (--enable-feature=query-cost).|
|max_series|query|integer(int64)|false|Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.|
|max_samples_read|query|integer(int64)|false|Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.|
|max_query_duration|query|string(duration) \| number(float)|false|Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "resultType": "vector",
    "result": [
      {
        "metric": {
          "__name__": "up",
          "instance": "demo.prometheus.io:9090",
          "job": "prometheus"
        },
        "value": [
          1767436620,
          "1"
        ]
      },
      {
        "metric": {
          "__name__": "up",
          "env": "demo",
          "instance": "demo.prometheus.io:9093",
          "job": "alertmanager"
        },
        "value": [
          1767436620,
          "1"
        ]
      }
    ]
  }
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="evaluate-an-instant-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query executed successfully.|[QueryOutputBody](#schemaqueryoutputbody)|
|default|Default|Error executing query.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Evaluate an instant query

<a id="opIdquery-post"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/query \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'query=up'
```

`POST /query`

> Body parameter

```yaml
query: up
```

<h3 id="evaluate-an-instant-query-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[QueryPostInputBody](#schemaquerypostinputbody)|true|Submit an instant query. This endpoint accepts the same parameters as the GET version.|
|» query|body|string|true|Form field: The PromQL query to execute.|
|» time|body|string|false|Form field: The evaluation timestamp (optional, defaults to current time).|
|» limit|body|integer(int64)|false|Form field: The maximum number of metrics to return.|
|» timeout|body|string|false|Form field: Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.|
|» lookback_delta|body|string|false|Form field: Override the lookback period for this query (optional).|
|» stats|body|string|false|Form field: When provided, include query statistics in the response (the special value 'all' enables more comprehensive statistics).|
|» cost|body|boolean|false|Form field: When true, include an estimated-vs-actual cost comparison in the response. Any non-boolean value is an error. Requires the query-cost feature flag (--enable-feature=query-cost).|
|» max_series|body|integer(int64)|false|Form field: Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.|
|» max_samples_read|body|integer(int64)|false|Form field: Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.|
|» max_query_duration|body|string|false|Form field: Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "resultType": "vector",
    "result": [
      {
        "metric": {
          "__name__": "up",
          "instance": "demo.prometheus.io:9090",
          "job": "prometheus"
        },
        "value": [
          1767436620,
          "1"
        ]
      },
      {
        "metric": {
          "__name__": "up",
          "env": "demo",
          "instance": "demo.prometheus.io:9093",
          "job": "alertmanager"
        },
        "value": [
          1767436620,
          "1"
        ]
      }
    ]
  }
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="evaluate-an-instant-query-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Instant query executed successfully.|[QueryOutputBody](#schemaqueryoutputbody)|
|default|Default|Error executing instant query.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Evaluate a range query

<a id="opIdquery-range"></a>

> Code samples

```bash
curl 'http://localhost:9090/api/v1/query_range?start=2026-01-02T12%3A37%3A00Z&end=2026-01-02T13%3A37%3A00Z&step=15s&query=rate(prometheus_http_requests_total%7Bhandler%3D%22%2Fapi%2Fv1%2Fquery%22%7D%5B5m%5D)' \
  -H 'Accept: application/json'
```

`GET /query_range`

<h3 id="evaluate-a-range-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int64)|false|The maximum number of metrics to return.|
|start|query|string(date-time) \| number(unixtime)|true|The start time of the query.|
|end|query|string(date-time) \| number(unixtime)|true|The end time of the query.|
|step|query|string(duration) \| number(float)|true|The step size of the query.|
|query|query|string|true|The query to execute.|
|timeout|query|string(duration) \| number(float)|false|Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.|
|lookback_delta|query|string(duration) \| number(float)|false|Override the lookback period for this query. Optional.|
|stats|query|string|false|Include query statistics in the response. Supported values: 'true' (basic statistics) and 'all' (basic plus per-step statistics). Other non-empty values are deprecated (they behave like 'true') and will be rejected in the next major release.|
|cost|query|boolean|false|When true, include an estimated-vs-actual cost comparison in the response. Any non-boolean value is an error. Requires the query-cost feature flag (--enable-feature=query-cost).|
|max_series|query|integer(int64)|false|Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.|
|max_samples_read|query|integer(int64)|false|Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.|
|max_query_duration|query|string(duration) \| number(float)|false|Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "resultType": "matrix",
    "result": [
      {
        "metric": {
          "__name__": "up",
          "instance": "demo.prometheus.io:9090",
          "job": "prometheus"
        },
        "values": [
          [
            1767433020,
            "1"
          ],
          [
            1767434820,
            "1"
          ],
          [
            1767436620,
            "1"
          ]
        ]
      }
    ]
  }
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="evaluate-a-range-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Range query executed successfully.|[QueryRangeOutputBody](#schemaqueryrangeoutputbody)|
|default|Default|Error executing range query.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Evaluate a range query

<a id="opIdquery-range-post"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/query_range \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'end=2026-01-02T13%3A37%3A00.000Z&query=up&start=2026-01-02T12%3A37%3A00.000Z&step=15s'
```

`POST /query_range`

> Body parameter

```yaml
end: "2026-01-02T13:37:00.000Z"
query: up
start: "2026-01-02T12:37:00.000Z"
step: "15s"
```

<h3 id="evaluate-a-range-query-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[QueryRangePostInputBody](#schemaqueryrangepostinputbody)|true|Submit a range query. This endpoint accepts the same parameters as the GET version.|
|» query|body|string|true|Form field: The query to execute.|
|» start|body|string|true|Form field: The start time of the query.|
|» end|body|string|true|Form field: The end time of the query.|
|» step|body|string|true|Form field: The step size of the query.|
|» limit|body|integer(int64)|false|Form field: The maximum number of metrics to return.|
|» timeout|body|string|false|Form field: Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.|
|» lookback_delta|body|string|false|Form field: Override the lookback period for this query (optional).|
|» stats|body|string|false|Form field: When provided, include query statistics in the response (the special value 'all' enables more comprehensive statistics).|
|» cost|body|boolean|false|Form field: When true, include an estimated-vs-actual cost comparison in the response. Any non-boolean value is an error. Requires the query-cost feature flag (--enable-feature=query-cost).|
|» max_series|body|integer(int64)|false|Form field: Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.|
|» max_samples_read|body|integer(int64)|false|Form field: Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.|
|» max_query_duration|body|string|false|Form field: Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "resultType": "matrix",
    "result": [
      {
        "metric": {
          "__name__": "up",
          "instance": "demo.prometheus.io:9090",
          "job": "prometheus"
        },
        "values": [
          [
            1767433020,
            "1"
          ],
          [
            1767434820,
            "1"
          ],
          [
            1767436620,
            "1"
          ]
        ]
      }
    ]
  }
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="evaluate-a-range-query-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Range query executed successfully.|[QueryRangeOutputBody](#schemaqueryrangeoutputbody)|
|default|Default|Error executing range query.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Estimate the cost of an instant query

<a id="opIdquery-cost"></a>

> Code samples

```bash
curl 'http://localhost:9090/api/v1/query_cost?query=up' \
  -H 'Accept: application/json'
```

`GET /query_cost`

Estimates the resource cost of an instant query without executing it. Requires the query-cost feature flag (--enable-feature=query-cost).

<h3 id="estimate-the-cost-of-an-instant-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|time|query|string(date-time) \| number(unixtime)|false|The evaluation timestamp (optional, defaults to current time).|
|query|query|string|true|The PromQL query to estimate.|
|timeout|query|string(duration) \| number(float)|false|Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.|
|lookback_delta|query|string(duration) \| number(float)|false|Override the lookback period for this query. Optional.|
|limit|query|integer(int64)|false|The maximum number of metrics to return. Validated identically to /api/v1/query but ignored, as no series are returned.|
|stats|query|string|false|Validated identically to /api/v1/query but ignored, as no query statistics are returned.|
|cost|query|boolean|false|Validated identically to /api/v1/query but ignored, as the response is already a cost estimate. Any non-boolean value is an error.|
|max_series|query|integer(int64)|false|Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.|
|max_samples_read|query|integer(int64)|false|Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.|
|max_query_duration|query|string(duration) \| number(float)|false|Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.|

> Example responses

> 200 Response

```json
{
  "data": {
    "estimate": {
      "samplesRead": 5040,
      "seriesTouched": 42
    }
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="estimate-the-cost-of-an-instant-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query cost estimated successfully.|[QueryCostOutputBody](#schemaquerycostoutputbody)|
|default|Default|Error estimating query cost.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Estimate the cost of an instant query

<a id="opIdquery-cost-post"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/query_cost \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'query=up'
```

`POST /query_cost`

Estimates the resource cost of an instant query without executing it. Requires the query-cost feature flag (--enable-feature=query-cost).

> Body parameter

```yaml
query: up
```

<h3 id="estimate-the-cost-of-an-instant-query-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[QueryCostPostInputBody](#schemaquerycostpostinputbody)|true|Submit an instant query for cost estimation. This endpoint accepts the same parameters as the GET version.|
|» query|body|string|true|Form field: The PromQL query to estimate.|
|» time|body|string|false|Form field: The evaluation timestamp (optional, defaults to current time).|
|» timeout|body|string|false|Form field: Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.|
|» lookback_delta|body|string|false|Form field: Override the lookback period for this query (optional).|
|» limit|body|integer(int64)|false|Form field: The maximum number of metrics to return. Validated identically to /api/v1/query but ignored, as no series are returned.|
|» stats|body|string|false|Form field: Validated identically to /api/v1/query but ignored, as no query statistics are returned.|
|» cost|body|boolean|false|Form field: Validated identically to /api/v1/query but ignored, as the response is already a cost estimate. Any non-boolean value is an error.|
|» max_series|body|integer(int64)|false|Form field: Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.|
|» max_samples_read|body|integer(int64)|false|Form field: Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.|
|» max_query_duration|body|string|false|Form field: Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.|

> Example responses

> 200 Response

```json
{
  "data": {
    "estimate": {
      "samplesRead": 5040,
      "seriesTouched": 42
    }
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="estimate-the-cost-of-an-instant-query-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query cost estimated successfully.|[QueryCostOutputBody](#schemaquerycostoutputbody)|
|default|Default|Error estimating query cost.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Estimate the cost of a range query

<a id="opIdquery-range-cost"></a>

> Code samples

```bash
curl 'http://localhost:9090/api/v1/query_range_cost?start=2026-01-02T12%3A37%3A00Z&end=2026-01-02T13%3A37%3A00Z&step=15s&query=rate(prometheus_http_requests_total%7Bhandler%3D%22%2Fapi%2Fv1%2Fquery%22%7D%5B5m%5D)' \
  -H 'Accept: application/json'
```

`GET /query_range_cost`

Estimates the resource cost of a range query without executing it. Requires the query-cost feature flag (--enable-feature=query-cost).

<h3 id="estimate-the-cost-of-a-range-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|string(date-time) \| number(unixtime)|true|The start time of the query.|
|end|query|string(date-time) \| number(unixtime)|true|The end time of the query.|
|step|query|string(duration) \| number(float)|true|The step size of the query.|
|query|query|string|true|The PromQL query to estimate.|
|timeout|query|string(duration) \| number(float)|false|Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.|
|lookback_delta|query|string(duration) \| number(float)|false|Override the lookback period for this query. Optional.|
|limit|query|integer(int64)|false|The maximum number of metrics to return. Validated identically to /api/v1/query but ignored, as no series are returned.|
|stats|query|string|false|Validated identically to /api/v1/query but ignored, as no query statistics are returned.|
|cost|query|boolean|false|Validated identically to /api/v1/query but ignored, as the response is already a cost estimate. Any non-boolean value is an error.|
|max_series|query|integer(int64)|false|Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.|
|max_samples_read|query|integer(int64)|false|Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.|
|max_query_duration|query|string(duration) \| number(float)|false|Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.|

> Example responses

> 200 Response

```json
{
  "data": {
    "estimate": {
      "samplesRead": 5040,
      "seriesTouched": 42
    }
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="estimate-the-cost-of-a-range-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Range query cost estimated successfully.|[QueryCostOutputBody](#schemaquerycostoutputbody)|
|default|Default|Error estimating range query cost.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Estimate the cost of a range query

<a id="opIdquery-range-cost-post"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/query_range_cost \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'end=2026-01-02T13%3A37%3A00.000Z&query=rate(prometheus_http_requests_total%5B5m%5D)&start=2026-01-02T12%3A37%3A00.000Z&step=30s'
```

`POST /query_range_cost`

Estimates the resource cost of a range query without executing it. Requires the query-cost feature flag (--enable-feature=query-cost).

> Body parameter

```yaml
end: "2026-01-02T13:37:00.000Z"
query: "rate(prometheus_http_requests_total[5m])"
start: "2026-01-02T12:37:00.000Z"
step: "30s"
```

<h3 id="estimate-the-cost-of-a-range-query-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[QueryRangeCostPostInputBody](#schemaqueryrangecostpostinputbody)|true|Submit a range query for cost estimation. This endpoint accepts the same parameters as the GET version.|
|» query|body|string|true|Form field: The PromQL query to estimate.|
|» start|body|string|true|Form field: The start time of the query.|
|» end|body|string|true|Form field: The end time of the query.|
|» step|body|string|true|Form field: The step size of the query.|
|» timeout|body|string|false|Form field: Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.|
|» lookback_delta|body|string|false|Form field: Override the lookback period for this query (optional).|
|» limit|body|integer(int64)|false|Form field: The maximum number of metrics to return. Validated identically to /api/v1/query but ignored, as no series are returned.|
|» stats|body|string|false|Form field: Validated identically to /api/v1/query but ignored, as no query statistics are returned.|
|» cost|body|boolean|false|Form field: Validated identically to /api/v1/query but ignored, as the response is already a cost estimate. Any non-boolean value is an error.|
|» max_series|body|integer(int64)|false|Form field: Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.|
|» max_samples_read|body|integer(int64)|false|Form field: Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.|
|» max_query_duration|body|string|false|Form field: Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.|

> Example responses

> 200 Response

```json
{
  "data": {
    "estimate": {
      "samplesRead": 5040,
      "seriesTouched": 42
    }
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="estimate-the-cost-of-a-range-query-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Range query cost estimated successfully.|[QueryCostOutputBody](#schemaquerycostoutputbody)|
|default|Default|Error estimating range query cost.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Query exemplars

<a id="opIdquery-exemplars"></a>

> Code samples

```bash
curl 'http://localhost:9090/api/v1/query_exemplars?query=prometheus_http_requests_total' \
  -H 'Accept: application/json'
```

`GET /query_exemplars`

<h3 id="query-exemplars-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|string(date-time) \| number(unixtime)|false|Start timestamp for exemplars query.|
|end|query|string(date-time) \| number(unixtime)|false|End timestamp for exemplars query.|
|query|query|string|true|PromQL query to extract exemplars for.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "exemplars": [
        {
          "labels": {
            "traceID": "abc123def456"
          },
          "timestamp": 1689956451.781,
          "value": "1.5"
        }
      ],
      "seriesLabels": {
        "__name__": "http_requests_total",
        "job": "api-server",
        "method": "GET"
      }
    }
  ],
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="query-exemplars-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Exemplars retrieved successfully.|[QueryExemplarsOutputBody](#schemaqueryexemplarsoutputbody)|
|default|Default|Error retrieving exemplars.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Query exemplars

<a id="opIdquery-exemplars-post"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/query_exemplars \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'query=prometheus_http_requests_total'
```

`POST /query_exemplars`

> Body parameter

```yaml
query: prometheus_http_requests_total
```

<h3 id="query-exemplars-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[QueryExemplarsPostInputBody](#schemaqueryexemplarspostinputbody)|true|Submit an exemplars query. This endpoint accepts the same parameters as the GET version.|
|» query|body|string|true|Form field: The query to execute.|
|» start|body|string|false|Form field: The start time of the query.|
|» end|body|string|false|Form field: The end time of the query.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "exemplars": [
        {
          "labels": {
            "traceID": "abc123def456"
          },
          "timestamp": 1689956451.781,
          "value": "1.5"
        }
      ],
      "seriesLabels": {
        "__name__": "http_requests_total",
        "job": "api-server",
        "method": "GET"
      }
    }
  ],
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="query-exemplars-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Exemplars query completed successfully.|[QueryExemplarsOutputBody](#schemaqueryexemplarsoutputbody)|
|default|Default|Error processing exemplars query.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Format a PromQL query

<a id="opIdformat-query"></a>

> Code samples

```bash
curl 'http://localhost:9090/api/v1/format_query?query=sum(rate(http_requests_total%5B5m%5D))%20by%20(job)' \
  -H 'Accept: application/json'
```

`GET /format_query`

<h3 id="format-a-promql-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|PromQL expression to format.|

> Example responses

> 200 Response

```json
{
  "data": "sum by(job, status) (rate(http_requests_total[5m]))",
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="format-a-promql-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query formatted successfully.|[FormatQueryOutputBody](#schemaformatqueryoutputbody)|
|default|Default|Error formatting query.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Format a PromQL query

<a id="opIdformat-query-post"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/format_query \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'query=up%7Bjob%3D%22prometheus%22%7D'
```

`POST /format_query`

> Body parameter

```yaml
query: "up{job=\"prometheus\"}"
```

<h3 id="format-a-promql-query-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FormatQueryPostInputBody](#schemaformatquerypostinputbody)|true|Submit a PromQL query to format. This endpoint accepts the same parameters as the GET version.|
|» query|body|string|true|Form field: The query to format.|

> Example responses

> 200 Response

```json
{
  "data": "sum by(job, status) (rate(http_requests_total[5m]))",
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="format-a-promql-query-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query formatting completed successfully.|[FormatQueryOutputBody](#schemaformatqueryoutputbody)|
|default|Default|Error formatting query.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Parse a PromQL query

<a id="opIdparse-query"></a>

> Code samples

```bash
curl 'http://localhost:9090/api/v1/parse_query?query=up%7Bjob%3D%22prometheus%22%7D' \
  -H 'Accept: application/json'
```

`GET /parse_query`

<h3 id="parse-a-promql-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|PromQL expression to parse.|

> Example responses

> 200 Response

```json
{
  "data": {
    "resultType": "vector"
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="parse-a-promql-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query parsed successfully.|[ParseQueryOutputBody](#schemaparsequeryoutputbody)|
|default|Default|Error parsing query.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Parse a PromQL query

<a id="opIdparse-query-post"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/parse_query \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'query=up'
```

`POST /parse_query`

> Body parameter

```yaml
query: up
```

<h3 id="parse-a-promql-query-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ParseQueryPostInputBody](#schemaparsequerypostinputbody)|true|Submit a PromQL query to parse. This endpoint accepts the same parameters as the GET version.|
|» query|body|string|true|Form field: The query to parse.|

> Example responses

> 200 Response

```json
{
  "data": {
    "resultType": "vector"
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="parse-a-promql-query-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query parsed successfully via POST.|[ParseQueryOutputBody](#schemaparsequeryoutputbody)|
|default|Default|Error parsing query via POST.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="prometheus-api-metadata">metadata</h1>

Retrieve metric metadata such as type and unit.

## Search metric names

<a id="opIdsearch-metric-names"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/search/metric_names \
  -H 'Accept: application/json'
```

`GET /search/metric_names`

<h3 id="search-metric-names-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|match[]|query|[string]|false|Series selector argument used to scope metric discovery.|
|search[]|query|[string]|false|One or more search terms matched against metric names (OR logic).|
|fuzz_threshold|query|integer(int64)|false|Fuzzy threshold in the range 0-100. A value of 0 is the lowest fuzzy threshold.|
|fuzz_alg|query|string|false|Fuzzy algorithm. Supported values are subsequence (default) and jarowinkler.|
|case_sensitive|query|boolean|false|Whether matching is case-sensitive.|
|sort_by|query|string|false|Sort mode. Supported values are alpha and score.|
|sort_dir|query|string|false|Sort direction. Only valid with sort_by=alpha. Supported values are asc and dsc.|
|include_score|query|boolean|false|Include the relevance score in each result.|
|include_metadata|query|boolean|false|Include metric metadata in each result.|
|start|query|string(date-time) \| number(unixtime)|false|Start timestamp for metric name search.|
|end|query|string(date-time) \| number(unixtime)|false|End timestamp for metric name search.|
|limit|query|integer(int64)|false|Maximum number of metric names to return.|
|batch_size|query|integer(int64)|false|Preferred number of results per NDJSON batch. Clamped to 1000 and the effective result limit.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fuzz_alg|subsequence|
|fuzz_alg|jarowinkler|
|sort_by|alpha|
|sort_by|score|
|sort_dir|asc|
|sort_dir|dsc|

> Example responses

> 200 Response

```text
{"results":[{"name":"http_requests_total","type":"counter","help":"Total HTTP requests."}]}
{"status":"success","has_more":false}

```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="search-metric-names-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Metric names streamed successfully.|Inline|
|default|Default|Error searching metric names.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Search metric names

<a id="opIdsearch-metric-names-post"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/search/metric_names \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'include_metadata=true&limit=20&search%5B%5D=%5B%22http_req%22%5D&sort_by=score'
```

`POST /search/metric_names`

> Body parameter

```yaml
include_metadata: true
limit: 20
"search[]":
  - http_req
sort_by: score
```

<h3 id="search-metric-names-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchMetricNamesPostInputBody](#schemasearchmetricnamespostinputbody)|true|Submit a metric name search. This endpoint accepts the same parameters as the GET version.|
|» match[]|body|[string]|false|Form field: Series selector argument used to scope metric discovery.|
|» search[]|body|[string]|false|Form field: One or more search terms matched against metric names (OR logic).|
|» fuzz_threshold|body|integer(int64)|false|Form field: Fuzzy threshold in the range 0-100. Default is 0, the lowest fuzzy threshold.|
|» fuzz_alg|body|string|false|Form field: Fuzzy algorithm. Supported values are subsequence (default) and jarowinkler.|
|» case_sensitive|body|boolean|false|Form field: Whether matching is case-sensitive.|
|» sort_by|body|string|false|Form field: Sort mode. Supported values are alpha and score. If unset, results are returned in natural order.|
|» sort_dir|body|string|false|Form field: Sort direction. Only valid with sort_by=alpha. Supported values are asc and dsc.|
|» include_score|body|boolean|false|Form field: Include the relevance score in each result record.|
|» start|body|string|false|Form field: The start time of the query.|
|» end|body|string|false|Form field: The end time of the query.|
|» limit|body|integer(int64)|false|Form field: The maximum number of results to return.|
|» batch_size|body|integer(int64)|false|Form field: Preferred number of results per NDJSON batch. Clamped to 1000 and the effective result limit.|
|» include_metadata|body|boolean|false|Form field: Include metric metadata in each result.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» fuzz_alg|subsequence|
|» fuzz_alg|jarowinkler|
|» sort_by|alpha|
|» sort_by|score|
|» sort_dir|asc|
|» sort_dir|dsc|

> Example responses

> 200 Response

```text
{"results":[{"name":"http_requests_total","type":"counter","help":"Total HTTP requests."}]}
{"status":"success","has_more":false}

```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="search-metric-names-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Metric names streamed successfully via POST.|Inline|
|default|Default|Error searching metric names via POST.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get metadata

<a id="opIdget-metadata"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/metadata \
  -H 'Accept: application/json'
```

`GET /metadata`

<h3 id="get-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int64)|false|The maximum number of metrics to return.|
|limit_per_metric|query|integer(int64)|false|The maximum number of metadata entries per metric.|
|metric|query|string|false|A metric name to filter metadata for.|

> Example responses

> 200 Response

```json
{
  "data": {
    "go_gc_stack_starting_size_bytes": [
      {
        "help": "The stack size of new goroutines. Sourced from /gc/stack/starting-size:bytes.",
        "type": "gauge",
        "unit": ""
      }
    ],
    "prometheus_rule_group_iterations_missed_total": [
      {
        "help": "The total number of rule group evaluations missed due to slow rule group evaluation.",
        "type": "counter",
        "unit": ""
      }
    ],
    "prometheus_sd_updates_total": [
      {
        "help": "Total number of update events sent to the SD consumers.",
        "type": "counter",
        "unit": ""
      }
    ]
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Metric metadata retrieved successfully.|[MetadataOutputBody](#schemametadataoutputbody)|
|default|Default|Error retrieving metadata.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="prometheus-api-labels">labels</h1>

Query label names and values.

## Get label names

<a id="opIdlabels"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/labels \
  -H 'Accept: application/json'
```

`GET /labels`

<h3 id="get-label-names-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|string(date-time) \| number(unixtime)|false|Start timestamp for label names query.|
|end|query|string(date-time) \| number(unixtime)|false|End timestamp for label names query.|
|match[]|query|[string]|false|Series selector argument.|
|limit|query|integer(int64)|false|Maximum number of label names to return.|

> Example responses

> 200 Response

```json
{
  "data": [
    "__name__",
    "active",
    "address",
    "alertmanager",
    "alertname",
    "alertstate",
    "backend",
    "branch",
    "code",
    "collector",
    "component",
    "device",
    "env",
    "endpoint",
    "fstype",
    "handler",
    "instance",
    "job",
    "le",
    "method",
    "mode",
    "name"
  ],
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-label-names-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Label names retrieved successfully.|[LabelsOutputBody](#schemalabelsoutputbody)|
|default|Default|Error retrieving label names.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get label names

<a id="opIdlabels-post"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/labels \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
```

`POST /labels`

> Body parameter

```yaml

```

<h3 id="get-label-names-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LabelsPostInputBody](#schemalabelspostinputbody)|true|Submit a label names query. This endpoint accepts the same parameters as the GET version.|
|» start|body|string|false|Form field: The start time of the query.|
|» end|body|string|false|Form field: The end time of the query.|
|» match[]|body|[string]|false|Form field: Series selector argument that selects the series from which to read the label names.|
|» limit|body|integer(int64)|false|Form field: The maximum number of label names to return.|

> Example responses

> 200 Response

```json
{
  "data": [
    "__name__",
    "active",
    "address",
    "alertmanager",
    "alertname",
    "alertstate",
    "backend",
    "branch",
    "code",
    "collector",
    "component",
    "device",
    "env",
    "endpoint",
    "fstype",
    "handler",
    "instance",
    "job",
    "le",
    "method",
    "mode",
    "name"
  ],
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-label-names-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Label names retrieved successfully via POST.|[LabelsOutputBody](#schemalabelsoutputbody)|
|default|Default|Error retrieving label names via POST.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get label values

<a id="opIdlabel-values"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/label/string/values \
  -H 'Accept: application/json'
```

`GET /label/{name}/values`

<h3 id="get-label-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Label name.|
|start|query|string(date-time) \| number(unixtime)|false|Start timestamp for label values query.|
|end|query|string(date-time) \| number(unixtime)|false|End timestamp for label values query.|
|match[]|query|[string]|false|Series selector argument.|
|limit|query|integer(int64)|false|Maximum number of label values to return.|

> Example responses

> 200 Response

```json
{
  "data": [
    "alertmanager",
    "blackbox",
    "caddy",
    "cadvisor",
    "grafana",
    "node",
    "prometheus",
    "random"
  ],
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-label-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Label values retrieved successfully.|[LabelValuesOutputBody](#schemalabelvaluesoutputbody)|
|default|Default|Error retrieving label values.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Search label names

<a id="opIdsearch-label-names"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/search/label_names \
  -H 'Accept: application/json'
```

`GET /search/label_names`

<h3 id="search-label-names-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|match[]|query|[string]|false|Series selector argument used to scope label discovery.|
|search[]|query|[string]|false|One or more search terms matched against label names (OR logic).|
|fuzz_threshold|query|integer(int64)|false|Fuzzy threshold in the range 0-100. A value of 0 is the lowest fuzzy threshold.|
|fuzz_alg|query|string|false|Fuzzy algorithm. Supported values are subsequence (default) and jarowinkler.|
|case_sensitive|query|boolean|false|Whether matching is case-sensitive.|
|sort_by|query|string|false|Sort mode. Supported values are alpha and score.|
|sort_dir|query|string|false|Sort direction. Only valid with sort_by=alpha. Supported values are asc and dsc.|
|include_score|query|boolean|false|Include the relevance score in each result.|
|start|query|string(date-time) \| number(unixtime)|false|Start timestamp for label name search.|
|end|query|string(date-time) \| number(unixtime)|false|End timestamp for label name search.|
|limit|query|integer(int64)|false|Maximum number of label names to return.|
|batch_size|query|integer(int64)|false|Preferred number of results per NDJSON batch. Clamped to 1000 and the effective result limit.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fuzz_alg|subsequence|
|fuzz_alg|jarowinkler|
|sort_by|alpha|
|sort_by|score|
|sort_dir|asc|
|sort_dir|dsc|

> Example responses

> 200 Response

```text
{"results":[{"name":"instance"},{"name":"job"}]}
{"status":"success","has_more":false}

```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="search-label-names-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Label names streamed successfully.|Inline|
|default|Default|Error searching label names.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Search label names

<a id="opIdsearch-label-names-post"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/search/label_names \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'limit=20&match%5B%5D=%5B%22%7B__name__%3D%5C%22http_requests_total%5C%22%7D%22%5D&search%5B%5D=%5B%22sta%22%5D&sort_by=score'
```

`POST /search/label_names`

> Body parameter

```yaml
limit: 20
"match[]":
  - "{__name__=\"http_requests_total\"}"
"search[]":
  - sta
sort_by: score
```

<h3 id="search-label-names-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchLabelNamesPostInputBody](#schemasearchlabelnamespostinputbody)|true|Submit a label name search. This endpoint accepts the same parameters as the GET version.|
|» match[]|body|[string]|false|Form field: Series selector argument used to scope label discovery.|
|» search[]|body|[string]|false|Form field: One or more search terms matched against label names (OR logic).|
|» fuzz_threshold|body|integer(int64)|false|Form field: Fuzzy threshold in the range 0-100. Default is 0, the lowest fuzzy threshold.|
|» fuzz_alg|body|string|false|Form field: Fuzzy algorithm. Supported values are subsequence (default) and jarowinkler.|
|» case_sensitive|body|boolean|false|Form field: Whether matching is case-sensitive.|
|» sort_by|body|string|false|Form field: Sort mode. Supported values are alpha and score. If unset, results are returned in natural order.|
|» sort_dir|body|string|false|Form field: Sort direction. Only valid with sort_by=alpha. Supported values are asc and dsc.|
|» include_score|body|boolean|false|Form field: Include the relevance score in each result record.|
|» start|body|string|false|Form field: The start time of the query.|
|» end|body|string|false|Form field: The end time of the query.|
|» limit|body|integer(int64)|false|Form field: The maximum number of results to return.|
|» batch_size|body|integer(int64)|false|Form field: Preferred number of results per NDJSON batch. Clamped to 1000 and the effective result limit.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» fuzz_alg|subsequence|
|» fuzz_alg|jarowinkler|
|» sort_by|alpha|
|» sort_by|score|
|» sort_dir|asc|
|» sort_dir|dsc|

> Example responses

> 200 Response

```text
{"results":[{"name":"instance"},{"name":"job"}]}
{"status":"success","has_more":false}

```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="search-label-names-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Label names streamed successfully via POST.|Inline|
|default|Default|Error searching label names via POST.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Search label values

<a id="opIdsearch-label-values"></a>

> Code samples

```bash
curl 'http://localhost:9090/api/v1/search/label_values?label=instance' \
  -H 'Accept: application/json'
```

`GET /search/label_values`

<h3 id="search-label-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|query|string|true|Label name whose values should be searched.|
|match[]|query|[string]|false|Series selector argument used to scope label value discovery.|
|search[]|query|[string]|false|One or more search terms matched against label values (OR logic).|
|fuzz_threshold|query|integer(int64)|false|Fuzzy threshold in the range 0-100. A value of 0 is the lowest fuzzy threshold.|
|fuzz_alg|query|string|false|Fuzzy algorithm. Supported values are subsequence (default) and jarowinkler.|
|case_sensitive|query|boolean|false|Whether matching is case-sensitive.|
|sort_by|query|string|false|Sort mode. Supported values are alpha and score.|
|sort_dir|query|string|false|Sort direction. Only valid with sort_by=alpha. Supported values are asc and dsc.|
|include_score|query|boolean|false|Include the relevance score in each result.|
|start|query|string(date-time) \| number(unixtime)|false|Start timestamp for label value search.|
|end|query|string(date-time) \| number(unixtime)|false|End timestamp for label value search.|
|limit|query|integer(int64)|false|Maximum number of label values to return.|
|batch_size|query|integer(int64)|false|Preferred number of results per NDJSON batch. Clamped to 1000 and the effective result limit.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fuzz_alg|subsequence|
|fuzz_alg|jarowinkler|
|sort_by|alpha|
|sort_by|score|
|sort_dir|asc|
|sort_dir|dsc|

> Example responses

> 200 Response

```text
{"results":[{"value":"localhost:9090"},{"value":"localhost:9091"}]}
{"status":"success","has_more":true}

```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="search-label-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Label values streamed successfully.|Inline|
|default|Default|Error searching label values.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Search label values

<a id="opIdsearch-label-values-post"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/search/label_values \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'label=instance&limit=10&match%5B%5D=%5B%22up%22%5D&search%5B%5D=%5B%22909%22%5D&sort_by=score'
```

`POST /search/label_values`

> Body parameter

```yaml
label: instance
limit: 10
"match[]":
  - up
"search[]":
  - "909"
sort_by: score
```

<h3 id="search-label-values-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchLabelValuesPostInputBody](#schemasearchlabelvaluespostinputbody)|true|Submit a label value search. This endpoint accepts the same parameters as the GET version.|
|» label|body|string|true|Form field: Label name whose values should be searched.|
|» match[]|body|[string]|false|Form field: Series selector argument used to scope label value discovery.|
|» search[]|body|[string]|false|Form field: One or more search terms matched against label values (OR logic).|
|» fuzz_threshold|body|integer(int64)|false|Form field: Fuzzy threshold in the range 0-100. Default is 0, the lowest fuzzy threshold.|
|» fuzz_alg|body|string|false|Form field: Fuzzy algorithm. Supported values are subsequence (default) and jarowinkler.|
|» case_sensitive|body|boolean|false|Form field: Whether matching is case-sensitive.|
|» sort_by|body|string|false|Form field: Sort mode. Supported values are alpha and score. If unset, results are returned in natural order.|
|» sort_dir|body|string|false|Form field: Sort direction. Only valid with sort_by=alpha. Supported values are asc and dsc.|
|» include_score|body|boolean|false|Form field: Include the relevance score in each result record.|
|» start|body|string|false|Form field: The start time of the query.|
|» end|body|string|false|Form field: The end time of the query.|
|» limit|body|integer(int64)|false|Form field: The maximum number of results to return.|
|» batch_size|body|integer(int64)|false|Form field: Preferred number of results per NDJSON batch. Clamped to 1000 and the effective result limit.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» fuzz_alg|subsequence|
|» fuzz_alg|jarowinkler|
|» sort_by|alpha|
|» sort_by|score|
|» sort_dir|asc|
|» sort_dir|dsc|

> Example responses

> 200 Response

```text
{"results":[{"value":"localhost:9090"},{"value":"localhost:9091"}]}
{"status":"success","has_more":true}

```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="search-label-values-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Label values streamed successfully via POST.|Inline|
|default|Default|Error searching label values via POST.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="prometheus-api-series">series</h1>

Query and manage time series.

## Find series by label matchers

<a id="opIdseries"></a>

> Code samples

```bash
curl 'http://localhost:9090/api/v1/series?match%5B%5D=%7Bjob%3D%22prometheus%22%7D' \
  -H 'Accept: application/json'
```

`GET /series`

<h3 id="find-series-by-label-matchers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|string(date-time) \| number(unixtime)|false|Start timestamp for series query.|
|end|query|string(date-time) \| number(unixtime)|false|End timestamp for series query.|
|match[]|query|[string]|true|Series selector argument.|
|limit|query|integer(int64)|false|Maximum number of series to return.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "__name__": "up",
      "env": "demo",
      "instance": "demo.prometheus.io:8080",
      "job": "cadvisor"
    },
    {
      "__name__": "up",
      "env": "demo",
      "instance": "demo.prometheus.io:9093",
      "job": "alertmanager"
    },
    {
      "__name__": "up",
      "env": "demo",
      "instance": "demo.prometheus.io:9100",
      "job": "node"
    },
    {
      "__name__": "up",
      "instance": "demo.prometheus.io:3000",
      "job": "grafana"
    },
    {
      "__name__": "up",
      "instance": "demo.prometheus.io:8996",
      "job": "random"
    }
  ],
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="find-series-by-label-matchers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Series returned matching the provided label matchers.|[SeriesOutputBody](#schemaseriesoutputbody)|
|default|Default|Error retrieving series.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Find series by label matchers

<a id="opIdseries-post"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/series \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'match%5B%5D=%5B%22up%22%5D'
```

`POST /series`

> Body parameter

```yaml
"match[]":
  - up
```

<h3 id="find-series-by-label-matchers-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SeriesPostInputBody](#schemaseriespostinputbody)|true|Submit a series query. This endpoint accepts the same parameters as the GET version.|
|» start|body|string|false|Form field: The start time of the query.|
|» end|body|string|false|Form field: The end time of the query.|
|» match[]|body|[string]|true|Form field: Series selector argument that selects the series to return.|
|» limit|body|integer(int64)|false|Form field: The maximum number of series to return.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "__name__": "up",
      "env": "demo",
      "instance": "demo.prometheus.io:8080",
      "job": "cadvisor"
    },
    {
      "__name__": "up",
      "env": "demo",
      "instance": "demo.prometheus.io:9093",
      "job": "alertmanager"
    },
    {
      "__name__": "up",
      "env": "demo",
      "instance": "demo.prometheus.io:9100",
      "job": "node"
    },
    {
      "__name__": "up",
      "instance": "demo.prometheus.io:3000",
      "job": "grafana"
    },
    {
      "__name__": "up",
      "instance": "demo.prometheus.io:8996",
      "job": "random"
    }
  ],
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="find-series-by-label-matchers-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Series returned matching the provided label matchers via POST.|[SeriesOutputBody](#schemaseriesoutputbody)|
|default|Default|Error retrieving series via POST.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="prometheus-api-targets">targets</h1>

Retrieve target and scrape pool information.

## Get scrape pools

<a id="opIdget-scrape-pools"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/scrape_pools \
  -H 'Accept: application/json'
```

`GET /scrape_pools`

> Example responses

> 200 Response

```json
{
  "data": {
    "scrapePools": [
      "alertmanager",
      "blackbox",
      "caddy",
      "cadvisor",
      "grafana",
      "node",
      "prometheus",
      "random"
    ]
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-scrape-pools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scrape pools retrieved successfully.|[ScrapePoolsOutputBody](#schemascrapepoolsoutputbody)|
|default|Default|Error retrieving scrape pools.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get scrape pool configuration

<a id="opIdget-scrape-pool-config"></a>

> Code samples

```bash
curl 'http://localhost:9090/api/v1/scrape_pools/config?scrapePool=prometheus' \
  -H 'Accept: application/json'
```

`GET /scrape_pools/config`

<h3 id="get-scrape-pool-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scrapePool|query|string|true|Name of the scrape pool.|

> Example responses

> 200 Response

```json
{
  "data": {
    "yaml": "job_name: prometheus\nscrape_interval: 15s\nscrape_timeout: 10s\nmetrics_path: /metrics\nscheme: http\n"
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-scrape-pool-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scrape pool configuration retrieved successfully.|[ScrapePoolConfigOutputBody](#schemascrapepoolconfigoutputbody)|
|default|Default|Error retrieving scrape pool configuration.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get targets

<a id="opIdget-targets"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/targets \
  -H 'Accept: application/json'
```

`GET /targets`

<h3 id="get-targets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scrapePool|query|string|false|Filter targets by scrape pool name.|
|state|query|string|false|Filter by state: active, dropped, or any.|

> Example responses

> 200 Response

```json
{
  "data": {
    "activeTargets": [
      {
        "discoveredLabels": {
          "__address__": "demo.prometheus.io:9093",
          "__meta_filepath": "/etc/prometheus/file_sd/alertmanager.yml",
          "__metrics_path__": "/metrics",
          "__scheme__": "http",
          "env": "demo",
          "job": "alertmanager"
        },
        "globalUrl": "http://demo.prometheus.io:9093/metrics",
        "health": "up",
        "labels": {
          "env": "demo",
          "instance": "demo.prometheus.io:9093",
          "job": "alertmanager"
        },
        "lastError": "",
        "lastScrape": "2026-01-02T13:36:40.200Z",
        "lastScrapeDuration": 0.006576866,
        "scrapeInterval": "15s",
        "scrapePool": "alertmanager",
        "scrapeTimeout": "10s",
        "scrapeUrl": "http://demo.prometheus.io:9093/metrics"
      }
    ],
    "droppedTargetCounts": {
      "alertmanager": 0,
      "blackbox": 0,
      "caddy": 0,
      "cadvisor": 0,
      "grafana": 0,
      "node": 0,
      "prometheus": 0,
      "random": 0
    },
    "droppedTargets": []
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-targets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Target discovery information retrieved successfully.|[TargetsOutputBody](#schematargetsoutputbody)|
|default|Default|Error retrieving targets.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get targets metadata

<a id="opIdget-targets-metadata"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/targets/metadata \
  -H 'Accept: application/json'
```

`GET /targets/metadata`

<h3 id="get-targets-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|match_target|query|string|false|Label selector to filter targets.|
|metric|query|string|false|Metric name to retrieve metadata for.|
|limit|query|integer(int64)|false|Maximum number of targets to match.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "help": "The current health status of the target",
      "metric": "up",
      "target": {
        "instance": "localhost:9090",
        "job": "prometheus"
      },
      "type": "gauge",
      "unit": ""
    }
  ],
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-targets-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Target metadata retrieved successfully.|[TargetMetadataOutputBody](#schematargetmetadataoutputbody)|
|default|Default|Error retrieving target metadata.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get targets relabel steps

<a id="opIdget-targets-relabel-steps"></a>

> Code samples

```bash
curl 'http://localhost:9090/api/v1/targets/relabel_steps?scrapePool=prometheus&labels=%7B%22__address__%22%3A%22localhost%3A9090%22%2C%22job%22%3A%22prometheus%22%7D' \
  -H 'Accept: application/json'
```

`GET /targets/relabel_steps`

<h3 id="get-targets-relabel-steps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scrapePool|query|string|true|Name of the scrape pool.|
|labels|query|string|true|JSON-encoded labels to apply relabel rules to.|

> Example responses

> 200 Response

```json
{
  "data": {
    "steps": [
      {
        "keep": true,
        "output": {
          "__address__": "localhost:9090",
          "instance": "localhost:9090",
          "job": "prometheus"
        },
        "rule": {
          "action": "replace",
          "regex": "(.*)",
          "replacement": "$1",
          "source_labels": [
            "__address__"
          ],
          "target_label": "instance"
        }
      }
    ]
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-targets-relabel-steps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Relabel steps retrieved successfully.|[TargetRelabelStepsOutputBody](#schematargetrelabelstepsoutputbody)|
|default|Default|Error retrieving relabel steps.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="prometheus-api-rules">rules</h1>

Query recording and alerting rules.

## Get alerting and recording rules

<a id="opIdrules"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/rules \
  -H 'Accept: application/json'
```

`GET /rules`

<h3 id="get-alerting-and-recording-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|Filter by rule type: alert or record.|
|rule_name[]|query|[string]|false|Filter by rule name.|
|rule_group[]|query|[string]|false|Filter by rule group name.|
|file[]|query|[string]|false|Filter by file path.|
|match[]|query|[string]|false|Label matchers to filter rules.|
|exclude_alerts|query|string|false|Exclude active alerts from response.|
|group_limit|query|integer(int64)|false|Maximum number of rule groups to return.|
|group_next_token|query|string|false|Pagination token for next page.|

> Example responses

> 200 Response

```json
{
  "data": {
    "groups": [
      {
        "evaluationTime": 0.000561635,
        "file": "/etc/prometheus/rules/ansible_managed.yml",
        "interval": 15,
        "lastEvaluation": "2026-01-02T13:36:56.874Z",
        "limit": 0,
        "name": "ansible managed alert rules",
        "rules": [
          {
            "annotations": {
              "description": "This is an alert meant to ensure that the entire alerting pipeline is functional. This alert is always firing, therefore it should always be firing in Alertmanager and always fire against a receiver. There are integrations with various notification mechanisms that send a notification when this alert is not firing. For example the \"DeadMansSnitch\" integration in PagerDuty.",
              "summary": "Ensure entire alerting pipeline is functional"
            },
            "duration": 600,
            "evaluationTime": 0.000356688,
            "health": "ok",
            "keepFiringFor": 0,
            "labels": {
              "severity": "warning"
            },
            "lastEvaluation": "2026-01-02T13:36:56.874Z",
            "name": "Watchdog",
            "query": "vector(1)",
            "state": "firing",
            "type": "alerting"
          }
        ]
      }
    ]
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-alerting-and-recording-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rules retrieved successfully.|[RulesOutputBody](#schemarulesoutputbody)|
|default|Default|Error retrieving rules.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="prometheus-api-alerts">alerts</h1>

Query active alerts and alertmanager discovery.

## Get active alerts

<a id="opIdalerts"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/alerts \
  -H 'Accept: application/json'
```

`GET /alerts`

> Example responses

> 200 Response

```json
{
  "data": {
    "alerts": [
      {
        "activeAt": "2026-01-02T13:30:00.000Z",
        "annotations": {
          "description": "This is an alert meant to ensure that the entire alerting pipeline is functional. This alert is always firing, therefore it should always be firing in Alertmanager and always fire against a receiver. There are integrations with various notification mechanisms that send a notification when this alert is not firing. For example the \"DeadMansSnitch\" integration in PagerDuty.",
          "summary": "Ensure entire alerting pipeline is functional"
        },
        "labels": {
          "alertname": "Watchdog",
          "severity": "warning"
        },
        "state": "firing",
        "value": "1e+00"
      }
    ]
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-active-alerts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Active alerts retrieved successfully.|[AlertsOutputBody](#schemaalertsoutputbody)|
|default|Default|Error retrieving alerts.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Alertmanager discovery

<a id="opIdalertmanagers"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/alertmanagers \
  -H 'Accept: application/json'
```

`GET /alertmanagers`

> Example responses

> 200 Response

```json
{
  "data": {
    "activeAlertmanagers": [
      {
        "url": "http://demo.prometheus.io:9093/api/v2/alerts"
      }
    ],
    "droppedAlertmanagers": []
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-alertmanager-discovery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Alertmanager targets retrieved successfully.|[AlertmanagersOutputBody](#schemaalertmanagersoutputbody)|
|default|Default|Error retrieving Alertmanager targets.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="prometheus-api-status">status</h1>

Retrieve server status and configuration.

## Get status config

<a id="opIdget-status-config"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/status/config \
  -H 'Accept: application/json'
```

`GET /status/config`

> Example responses

> 200 Response

```json
{
  "data": {
    "yaml": "global:\n  scrape_interval: 15s\n  scrape_timeout: 10s\n  evaluation_interval: 15s\n  external_labels:\n    environment: demo-prometheus-io\nalerting:\n  alertmanagers:\n  - scheme: http\n    static_configs:\n    - targets:\n      - demo.prometheus.io:9093\nrule_files:\n- /etc/prometheus/rules/*.yml\n"
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-status-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Configuration retrieved successfully.|[StatusConfigOutputBody](#schemastatusconfigoutputbody)|
|default|Default|Error retrieving configuration.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get status runtimeinfo

<a id="opIdget-status-runtimeinfo"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/status/runtimeinfo \
  -H 'Accept: application/json'
```

`GET /status/runtimeinfo`

> Example responses

> 200 Response

```json
{
  "data": {
    "CWD": "/",
    "GODEBUG": "",
    "GOGC": "75",
    "GOMAXPROCS": 2,
    "GOMEMLIMIT": 3703818240,
    "corruptionCount": 0,
    "goroutineCount": 88,
    "hostname": "demo-prometheus-io",
    "lastConfigTime": "2026-01-01T13:37:00.000Z",
    "reloadConfigSuccess": true,
    "serverTime": "2026-01-02T13:37:00.000Z",
    "startTime": "2026-01-01T13:37:00.000Z",
    "storageRetention": "31d"
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-status-runtimeinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Runtime information retrieved successfully.|[StatusRuntimeInfoOutputBody](#schemastatusruntimeinfooutputbody)|
|default|Default|Error retrieving runtime information.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get status buildinfo

<a id="opIdget-status-buildinfo"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/status/buildinfo \
  -H 'Accept: application/json'
```

`GET /status/buildinfo`

> Example responses

> 200 Response

```json
{
  "data": {
    "branch": "HEAD",
    "buildDate": "20251030-07:26:10",
    "buildUser": "root@08c890a84441",
    "goVersion": "go1.25.3",
    "revision": "0a41f0000705c69ab8e0f9a723fc73e39ed62b07",
    "version": "3.7.3"
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-status-buildinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Build information retrieved successfully.|[StatusBuildInfoOutputBody](#schemastatusbuildinfooutputbody)|
|default|Default|Error retrieving build information.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get status flags

<a id="opIdget-status-flags"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/status/flags \
  -H 'Accept: application/json'
```

`GET /status/flags`

> Example responses

> 200 Response

```json
{
  "data": {
    "agent": "false",
    "alertmanager.notification-queue-capacity": "10000",
    "config.file": "/etc/prometheus/prometheus.yml",
    "enable-feature": "exemplar-storage,native-histograms",
    "query.max-concurrency": "20",
    "query.timeout": "2m",
    "storage.tsdb.path": "/prometheus",
    "storage.tsdb.retention.time": "15d",
    "web.console.libraries": "/usr/share/prometheus/console_libraries",
    "web.console.templates": "/usr/share/prometheus/consoles",
    "web.enable-admin-api": "true",
    "web.enable-lifecycle": "true",
    "web.listen-address": "0.0.0.0:9090",
    "web.page-title": "Prometheus Time Series Collection and Processing Server"
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-status-flags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Command-line flags retrieved successfully.|[StatusFlagsOutputBody](#schemastatusflagsoutputbody)|
|default|Default|Error retrieving flags.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get TSDB status

<a id="opIdstatus-tsdb"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/status/tsdb \
  -H 'Accept: application/json'
```

`GET /status/tsdb`

<h3 id="get-tsdb-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int64)|false|The maximum number of items to return per category.|

> Example responses

> 200 Response

```json
{
  "data": {
    "headStats": {
      "chunkCount": 37525,
      "maxTime": 1767436620000,
      "minTime": 1767362400712,
      "numLabelPairs": 2512,
      "numSeries": 9925
    },
    "labelValueCountByLabelName": [
      {
        "name": "__name__",
        "value": 5
      },
      {
        "name": "job",
        "value": 3
      }
    ],
    "memoryInBytesByLabelName": [
      {
        "name": "__name__",
        "value": 1024
      },
      {
        "name": "job",
        "value": 512
      }
    ],
    "seriesCountByLabelValuePair": [
      {
        "name": "job=prometheus",
        "value": 100
      },
      {
        "name": "instance=localhost:9090",
        "value": 100
      }
    ],
    "seriesCountByMetricName": [
      {
        "name": "up",
        "value": 100
      },
      {
        "name": "http_requests_total",
        "value": 500
      }
    ]
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-tsdb-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|TSDB status retrieved successfully.|[StatusTSDBOutputBody](#schemastatustsdboutputbody)|
|default|Default|Error retrieving TSDB status.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get TSDB blocks information

<a id="opIdstatus-tsdb-blocks"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/status/tsdb/blocks \
  -H 'Accept: application/json'
```

`GET /status/tsdb/blocks`

> Example responses

> 200 Response

```json
{
  "data": {
    "blocks": [
      {
        "compaction": {
          "level": 4,
          "sources": [
            "01KBCJ7TR8A4QAJ3AA1J651P5S",
            "01KBCS3J0E34567YPB8Y5W0E24",
            "01KBCZZ9KRTYGG3E7HVQFGC3S3"
          ]
        },
        "maxTime": 1764763200000,
        "minTime": 1764568801099,
        "stats": {
          "numChunks": 1073962,
          "numSamples": 129505582,
          "numSeries": 10661
        },
        "ulid": "01KC4D6GXQA4CRHYKV78NEBVAE",
        "version": 1
      }
    ]
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-tsdb-blocks-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|TSDB blocks information retrieved successfully.|[StatusTSDBBlocksOutputBody](#schemastatustsdbblocksoutputbody)|
|default|Default|Error retrieving TSDB blocks.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get status walreplay

<a id="opIdget-status-walreplay"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/status/walreplay \
  -H 'Accept: application/json'
```

`GET /status/walreplay`

> Example responses

> 200 Response

```json
{
  "data": {
    "current": 3214,
    "max": 3214,
    "min": 3209
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-status-walreplay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|WAL replay status retrieved successfully.|[StatusWALReplayOutputBody](#schemastatuswalreplayoutputbody)|
|default|Default|Error retrieving WAL replay status.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Prometheus self-instrumentation metrics

<a id="opIdget-status-self-metrics"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/status/self_metrics \
  -H 'Accept: application/json'
```

`GET /status/self_metrics`

Returns Prometheus' own instrumentation metrics from its internal client registry, as structured JSON. Supports optional regex filtering via the metric_name_pattern parameter.

<h3 id="get-prometheus-self-instrumentation-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|metric_name_pattern|query|string|false|Regular expression filter for metric names (fully anchored, like PromQL label matchers). Only metric families whose names fully match the pattern are returned.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "help": "A metric with a constant '1' value labeled by version, revision, branch, goversion from which prometheus was built, and the goos and goarch for the build.",
      "metric": [
        {
          "gauge": {
            "value": 1
          },
          "label": [
            {
              "name": "branch",
              "value": "HEAD"
            },
            {
              "name": "goarch",
              "value": "amd64"
            },
            {
              "name": "goos",
              "value": "linux"
            },
            {
              "name": "goversion",
              "value": "go1.23.0"
            },
            {
              "name": "revision",
              "value": "abc1234"
            },
            {
              "name": "tags",
              "value": "netgo,builtinassets,stringlabels"
            },
            {
              "name": "version",
              "value": "3.0.0"
            }
          ]
        }
      ],
      "name": "prometheus_build_info",
      "type": "GAUGE"
    },
    {
      "help": "Total number of chunks in the head block.",
      "metric": [
        {
          "gauge": {
            "value": 1024
          }
        }
      ],
      "name": "prometheus_tsdb_head_chunks",
      "type": "GAUGE"
    }
  ],
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-prometheus-self-instrumentation-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Self metrics retrieved successfully.|[StatusSelfMetricsOutputBody](#schemastatusselfmetricsoutputbody)|
|default|Default|Error retrieving self metrics.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="prometheus-api-admin">admin</h1>

Administrative operations for TSDB management.

## Delete series matching selectors via PUT

<a id="opIddeleteSeriesPut"></a>

> Code samples

```bash
curl 'http://localhost:9090/api/v1/admin/tsdb/delete_series?match%5B%5D=%7B__name__%3D~%22test.*%22%7D' \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /admin/tsdb/delete_series`

Deletes data for a selection of series in a time range using PUT method.

<h3 id="delete-series-matching-selectors-via-put-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|match[]|query|[string]|true|Series selectors to identify series to delete.|
|start|query|string(date-time) \| number(unixtime)|false|Start timestamp for deletion.|
|end|query|string(date-time) \| number(unixtime)|false|End timestamp for deletion.|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="delete-series-matching-selectors-via-put-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Series deleted successfully via PUT.|[DeleteSeriesOutputBody](#schemadeleteseriesoutputbody)|
|default|Default|Error deleting series via PUT.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete series matching selectors

<a id="opIddeleteSeriesPost"></a>

> Code samples

```bash
curl 'http://localhost:9090/api/v1/admin/tsdb/delete_series?match%5B%5D=%7B__name__%3D~%22test.*%22%7D' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /admin/tsdb/delete_series`

Deletes data for a selection of series in a time range.

<h3 id="delete-series-matching-selectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|match[]|query|[string]|true|Series selectors to identify series to delete.|
|start|query|string(date-time) \| number(unixtime)|false|Start timestamp for deletion.|
|end|query|string(date-time) \| number(unixtime)|false|End timestamp for deletion.|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="delete-series-matching-selectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Series deleted successfully.|[DeleteSeriesOutputBody](#schemadeleteseriesoutputbody)|
|default|Default|Error deleting series.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Clean tombstones in the TSDB via PUT

<a id="opIdcleanTombstonesPut"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/admin/tsdb/clean_tombstones \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /admin/tsdb/clean_tombstones`

Removes deleted data from disk and cleans up existing tombstones using PUT method.

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="clean-tombstones-in-the-tsdb-via-put-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tombstones cleaned successfully via PUT.|[CleanTombstonesOutputBody](#schemacleantombstonesoutputbody)|
|default|Default|Error cleaning tombstones via PUT.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Clean tombstones in the TSDB

<a id="opIdcleanTombstonesPost"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/admin/tsdb/clean_tombstones \
  -X POST \
  -H 'Accept: application/json'
```

`POST /admin/tsdb/clean_tombstones`

Removes deleted data from disk and cleans up existing tombstones.

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="clean-tombstones-in-the-tsdb-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tombstones cleaned successfully.|[CleanTombstonesOutputBody](#schemacleantombstonesoutputbody)|
|default|Default|Error cleaning tombstones.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a snapshot of the TSDB via PUT

<a id="opIdsnapshotPut"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/admin/tsdb/snapshot \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /admin/tsdb/snapshot`

Creates a snapshot of all current data using PUT method.

<h3 id="create-a-snapshot-of-the-tsdb-via-put-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|skip_head|query|string|false|If true, do not snapshot data in the head block.|

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "20260102T133700Z-a1b2c3d4e5f67890"
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="create-a-snapshot-of-the-tsdb-via-put-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Snapshot created successfully via PUT.|[SnapshotOutputBody](#schemasnapshotoutputbody)|
|default|Default|Error creating snapshot via PUT.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a snapshot of the TSDB

<a id="opIdsnapshotPost"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/admin/tsdb/snapshot \
  -X POST \
  -H 'Accept: application/json'
```

`POST /admin/tsdb/snapshot`

Creates a snapshot of all current data.

<h3 id="create-a-snapshot-of-the-tsdb-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|skip_head|query|string|false|If true, do not snapshot data in the head block.|

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "20260102T133700Z-a1b2c3d4e5f67890"
  },
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="create-a-snapshot-of-the-tsdb-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Snapshot created successfully.|[SnapshotOutputBody](#schemasnapshotoutputbody)|
|default|Default|Error creating snapshot.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="prometheus-api-features">features</h1>

Query enabled features.

## Get features

<a id="opIdget-features"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/features \
  -H 'Accept: application/json'
```

`GET /features`

> Example responses

> 200 Response

```json
{
  "data": [
    "exemplar-storage",
    "remote-write-receiver"
  ],
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-features-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Feature flags retrieved successfully.|[FeaturesOutputBody](#schemafeaturesoutputbody)|
|default|Default|Error retrieving features.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="prometheus-api-remote">remote</h1>

Remote read and write endpoints.

## Remote read endpoint

<a id="opIdremoteRead"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/read \
  -X POST \
  -H 'Accept: application/json'
```

`POST /read`

Prometheus remote read endpoint for federated queries. Accepts and returns Protocol Buffer encoded data.

> Example responses

> default Response

```json
{
  "status": "success",
  "errorType": "bad_data",
  "error": "invalid parameter"
}
```

<h3 id="remote-read-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Remote write endpoint

<a id="opIdremoteWrite"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/write \
  -X POST \
  -H 'Accept: application/json'
```

`POST /write`

Prometheus remote write endpoint for sending metrics. Accepts Protocol Buffer encoded write requests.

> Example responses

> default Response

```json
{
  "status": "success",
  "errorType": "bad_data",
  "error": "invalid parameter"
}
```

<h3 id="remote-write-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="prometheus-api-otlp">otlp</h1>

OpenTelemetry Protocol metrics ingestion.

## OTLP metrics write endpoint

<a id="opIdotlpWrite"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/otlp/v1/metrics \
  -X POST \
  -H 'Accept: application/json'
```

`POST /otlp/v1/metrics`

OpenTelemetry Protocol metrics ingestion endpoint. Accepts OTLP/HTTP metrics in Protocol Buffer format.

> Example responses

> default Response

```json
{
  "status": "success",
  "errorType": "bad_data",
  "error": "invalid parameter"
}
```

<h3 id="otlp-metrics-write-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="prometheus-api-notifications">notifications</h1>

Server notifications and events.

## Get notifications

<a id="opIdget-notifications"></a>

> Code samples

```bash
curl http://localhost:9090/api/v1/notifications \
  -H 'Accept: application/json'
```

`GET /notifications`

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "active": true,
      "date": "2026-01-02T16:14:50.046Z",
      "text": "Configuration reload has failed."
    }
  ],
  "status": "success"
}
```

> default Response

```json
{
  "error": "TSDB not ready",
  "errorType": "internal",
  "status": "error"
}
```

<h3 id="get-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Notifications retrieved successfully.|[NotificationsOutputBody](#schemanotificationsoutputbody)|
|default|Default|Error retrieving notifications.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "status": "success",
  "errorType": "bad_data",
  "error": "invalid parameter"
}
```

Error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|errorType|string|true|none|Type of error that occurred.|
|error|string|true|none|Human-readable error message.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_Labels">Labels</h2>
<!-- backwards compatibility -->
<a id="schemalabels"></a>
<a id="schema_Labels"></a>
<a id="tocSlabels"></a>
<a id="tocslabels"></a>

```json
{}
```

Label set represented as a key-value map.

<h2 id="tocS_QueryOutputBody">QueryOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemaqueryoutputbody"></a>
<a id="schema_QueryOutputBody"></a>
<a id="tocSqueryoutputbody"></a>
<a id="tocsqueryoutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "result": [
      {
        "metric": {
          "__name__": "up",
          "job": "prometheus"
        },
        "value": [
          1627845600,
          "1"
        ]
      }
    ],
    "resultType": "vector"
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body for instant query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[QueryData](#schemaquerydata)|true|none|Query result data. The structure of 'result' depends on 'resultType'.|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_QueryRangeOutputBody">QueryRangeOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemaqueryrangeoutputbody"></a>
<a id="schema_QueryRangeOutputBody"></a>
<a id="tocSqueryrangeoutputbody"></a>
<a id="tocsqueryrangeoutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "result": [
      {
        "metric": {
          "__name__": "up",
          "job": "prometheus"
        },
        "value": [
          1627845600,
          "1"
        ]
      }
    ],
    "resultType": "vector"
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body for range query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[QueryData](#schemaquerydata)|true|none|Query result data. The structure of 'result' depends on 'resultType'.|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_QueryPostInputBody">QueryPostInputBody</h2>
<!-- backwards compatibility -->
<a id="schemaquerypostinputbody"></a>
<a id="schema_QueryPostInputBody"></a>
<a id="tocSquerypostinputbody"></a>
<a id="tocsquerypostinputbody"></a>

```json
{
  "query": "up",
  "time": "2023-07-21T20:10:51.781Z",
  "limit": 100,
  "timeout": "30s",
  "lookback_delta": "5m",
  "stats": "all",
  "cost": true,
  "max_series": 1000,
  "max_samples_read": 100000,
  "max_query_duration": "30s"
}
```

POST request body for instant query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|Form field: The PromQL query to execute.|
|time|string|false|none|Form field: The evaluation timestamp (optional, defaults to current time).|
|limit|integer(int64)|false|none|Form field: The maximum number of metrics to return.|
|timeout|string|false|none|Form field: Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.|
|lookback_delta|string|false|none|Form field: Override the lookback period for this query (optional).|
|stats|string|false|none|Form field: When provided, include query statistics in the response (the special value 'all' enables more comprehensive statistics).|
|cost|boolean|false|none|Form field: When true, include an estimated-vs-actual cost comparison in the response. Any non-boolean value is an error. Requires the query-cost feature flag (--enable-feature=query-cost).|
|max_series|integer(int64)|false|none|Form field: Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.|
|max_samples_read|integer(int64)|false|none|Form field: Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.|
|max_query_duration|string|false|none|Form field: Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.|

<h2 id="tocS_QueryRangePostInputBody">QueryRangePostInputBody</h2>
<!-- backwards compatibility -->
<a id="schemaqueryrangepostinputbody"></a>
<a id="schema_QueryRangePostInputBody"></a>
<a id="tocSqueryrangepostinputbody"></a>
<a id="tocsqueryrangepostinputbody"></a>

```json
{
  "query": "rate(http_requests_total[5m])",
  "start": "2023-07-21T20:10:30.781Z",
  "end": "2023-07-21T20:20:30.781Z",
  "step": "15s",
  "limit": 100,
  "timeout": "30s",
  "lookback_delta": "5m",
  "stats": "all",
  "cost": true,
  "max_series": 1000,
  "max_samples_read": 100000,
  "max_query_duration": "30s"
}
```

POST request body for range query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|Form field: The query to execute.|
|start|string|true|none|Form field: The start time of the query.|
|end|string|true|none|Form field: The end time of the query.|
|step|string|true|none|Form field: The step size of the query.|
|limit|integer(int64)|false|none|Form field: The maximum number of metrics to return.|
|timeout|string|false|none|Form field: Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.|
|lookback_delta|string|false|none|Form field: Override the lookback period for this query (optional).|
|stats|string|false|none|Form field: When provided, include query statistics in the response (the special value 'all' enables more comprehensive statistics).|
|cost|boolean|false|none|Form field: When true, include an estimated-vs-actual cost comparison in the response. Any non-boolean value is an error. Requires the query-cost feature flag (--enable-feature=query-cost).|
|max_series|integer(int64)|false|none|Form field: Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.|
|max_samples_read|integer(int64)|false|none|Form field: Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.|
|max_query_duration|string|false|none|Form field: Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.|

<h2 id="tocS_QueryExemplarsOutputBody">QueryExemplarsOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemaqueryexemplarsoutputbody"></a>
<a id="schema_QueryExemplarsOutputBody"></a>
<a id="tocSqueryexemplarsoutputbody"></a>
<a id="tocsqueryexemplarsoutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "result": "ok"
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Generic response body.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|object|true|none|Response data (structure varies by endpoint).|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_QueryExemplarsPostInputBody">QueryExemplarsPostInputBody</h2>
<!-- backwards compatibility -->
<a id="schemaqueryexemplarspostinputbody"></a>
<a id="schema_QueryExemplarsPostInputBody"></a>
<a id="tocSqueryexemplarspostinputbody"></a>
<a id="tocsqueryexemplarspostinputbody"></a>

```json
{
  "query": "http_requests_total",
  "start": "2023-07-21T20:00:00.000Z",
  "end": "2023-07-21T21:00:00.000Z"
}
```

POST request body for exemplars query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|Form field: The query to execute.|
|start|string|false|none|Form field: The start time of the query.|
|end|string|false|none|Form field: The end time of the query.|

<h2 id="tocS_FormatQueryOutputBody">FormatQueryOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemaformatqueryoutputbody"></a>
<a id="schema_FormatQueryOutputBody"></a>
<a id="tocSformatqueryoutputbody"></a>
<a id="tocsformatqueryoutputbody"></a>

```json
{
  "status": "success",
  "data": "sum by(status) (rate(http_requests_total[5m]))",
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body for format query endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|string|true|none|Formatted query string.|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_FormatQueryPostInputBody">FormatQueryPostInputBody</h2>
<!-- backwards compatibility -->
<a id="schemaformatquerypostinputbody"></a>
<a id="schema_FormatQueryPostInputBody"></a>
<a id="tocSformatquerypostinputbody"></a>
<a id="tocsformatquerypostinputbody"></a>

```json
{
  "query": "sum(rate(http_requests_total[5m])) by (status)"
}
```

POST request body for format query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|Form field: The query to format.|

<h2 id="tocS_ParseQueryOutputBody">ParseQueryOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemaparsequeryoutputbody"></a>
<a id="schema_ParseQueryOutputBody"></a>
<a id="tocSparsequeryoutputbody"></a>
<a id="tocsparsequeryoutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "result": "ok"
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Generic response body.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|object|true|none|Response data (structure varies by endpoint).|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_ParseQueryPostInputBody">ParseQueryPostInputBody</h2>
<!-- backwards compatibility -->
<a id="schemaparsequerypostinputbody"></a>
<a id="schema_ParseQueryPostInputBody"></a>
<a id="tocSparsequerypostinputbody"></a>
<a id="tocsparsequerypostinputbody"></a>

```json
{
  "query": "sum(rate(http_requests_total[5m]))"
}
```

POST request body for parse query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|Form field: The query to parse.|

<h2 id="tocS_QueryData">QueryData</h2>
<!-- backwards compatibility -->
<a id="schemaquerydata"></a>
<a id="schema_QueryData"></a>
<a id="tocSquerydata"></a>
<a id="tocsquerydata"></a>

```json
{
  "result": [
    {
      "metric": {
        "__name__": "up",
        "job": "prometheus"
      },
      "value": [
        1627845600,
        "1"
      ]
    }
  ],
  "resultType": "vector"
}
```

Query result data. The structure of 'result' depends on 'resultType'.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|resultType|string|true|none|none|
|result|[[FloatSample](#schemafloatsample) \| [HistogramSample](#schemahistogramsample)]|true|none|Array of samples (either float or histogram).|
|stats|[QueryStats](#schemaquerystats)|false|none|Query execution statistics (included when the stats query parameter is provided).|
|cost|[QueryCostComparison](#schemaquerycostcomparison)|false|none|Estimated storage input paired with the actual cost measured during execution. The estimated cost has no peakSamples; the actual cost includes it. Requires the query-cost feature flag (--enable-feature=query-cost).|
|*anyOf*|object|false|none|none|
|resultType|string|true|none|none|
|result|[[FloatSeries](#schemafloatseries) \| [HistogramSeries](#schemahistogramseries)]|true|none|Array of time series (either float or histogram).|
|stats|[QueryStats](#schemaquerystats)|false|none|Query execution statistics (included when the stats query parameter is provided).|
|cost|[QueryCostComparison](#schemaquerycostcomparison)|false|none|Estimated storage input paired with the actual cost measured during execution. The estimated cost has no peakSamples; the actual cost includes it. Requires the query-cost feature flag (--enable-feature=query-cost).|
|*anyOf*|object|false|none|none|
|resultType|string|true|none|none|
|result|[number \| string]|true|none|Scalar value as [timestamp, stringValue].|
|stats|[QueryStats](#schemaquerystats)|false|none|Query execution statistics (included when the stats query parameter is provided).|
|cost|[QueryCostComparison](#schemaquerycostcomparison)|false|none|Estimated storage input paired with the actual cost measured during execution. The estimated cost has no peakSamples; the actual cost includes it. Requires the query-cost feature flag (--enable-feature=query-cost).|
|*anyOf*|object|false|none|none|
|resultType|string|true|none|none|
|result|[string]|true|none|String value as [timestamp, stringValue].|
|stats|[QueryStats](#schemaquerystats)|false|none|Query execution statistics (included when the stats query parameter is provided).|
|cost|[QueryCostComparison](#schemaquerycostcomparison)|false|none|Estimated storage input paired with the actual cost measured during execution. The estimated cost has no peakSamples; the actual cost includes it. Requires the query-cost feature flag (--enable-feature=query-cost).|

#### Enumerated Values

|Property|Value|
|---|---|
|resultType|vector|
|resultType|matrix|
|resultType|scalar|
|resultType|string|

<h2 id="tocS_QueryStats">QueryStats</h2>
<!-- backwards compatibility -->
<a id="schemaquerystats"></a>
<a id="schema_QueryStats"></a>
<a id="tocSquerystats"></a>
<a id="tocsquerystats"></a>

```json
{
  "timings": {
    "evalTotalTime": 0,
    "resultSortTime": 0,
    "queryPreparationTime": 0,
    "innerEvalTime": 0,
    "execQueueTime": 0,
    "execTotalTime": 0
  },
  "samples": {
    "totalQueryableSamples": 0,
    "peakSamples": 0,
    "totalQueryableSamplesPerStep": [
      [
        0,
        0
      ]
    ],
    "seriesTouched": 0,
    "samplesRead": 0,
    "samplesReadPerStep": [
      [
        0,
        0
      ]
    ]
  }
}
```

Query execution statistics (included when the stats query parameter is provided).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timings|object|false|none|none|
|samples|object|false|none|none|

<h2 id="tocS_CostEstimate">CostEstimate</h2>
<!-- backwards compatibility -->
<a id="schemacostestimate"></a>
<a id="schema_CostEstimate"></a>
<a id="tocScostestimate"></a>
<a id="tocscostestimate"></a>

```json
{
  "seriesTouched": 0,
  "samplesRead": 0
}
```

Estimated storage input. Values may overestimate or underestimate actual cost; warnings identify incomplete estimates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|seriesTouched|integer(int64)|true|none|Estimated series reads, summed across explicit selectors. Shared series may be counted repeatedly; implicit info() reads are omitted with a warning.|
|samplesRead|integer(int64)|true|none|Storage input in sample units: one per float, weighted by in-memory size for native histograms.|

<h2 id="tocS_ActualCost">ActualCost</h2>
<!-- backwards compatibility -->
<a id="schemaactualcost"></a>
<a id="schema_ActualCost"></a>
<a id="tocSactualcost"></a>
<a id="tocsactualcost"></a>

```json
{
  "seriesTouched": 0,
  "samplesRead": 0,
  "peakSamples": 0
}
```

Actual resource cost measured while the query executed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|seriesTouched|integer(int64)|true|none|Number of series the query loaded, summed per selector. Series shared between selectors may be counted more than once, so this is an upper bound.|
|samplesRead|integer(int64)|true|none|Samples read by the evaluator in the engine's sample units; the same quantity as the samplesRead query statistic.|
|peakSamples|integer(int64)|false|none|Highest number of samples held in memory at once. Omitted when zero.|

<h2 id="tocS_QueryCostComparison">QueryCostComparison</h2>
<!-- backwards compatibility -->
<a id="schemaquerycostcomparison"></a>
<a id="schema_QueryCostComparison"></a>
<a id="tocSquerycostcomparison"></a>
<a id="tocsquerycostcomparison"></a>

```json
{
  "estimated": {
    "seriesTouched": 0,
    "samplesRead": 0
  },
  "actual": {
    "seriesTouched": 0,
    "samplesRead": 0,
    "peakSamples": 0
  }
}
```

Estimated storage input paired with the actual cost measured during execution. The estimated cost has no peakSamples; the actual cost includes it. Requires the query-cost feature flag (--enable-feature=query-cost).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimated|[CostEstimate](#schemacostestimate)|true|none|Estimated storage input. Values may overestimate or underestimate actual cost; warnings identify incomplete estimates.|
|actual|[ActualCost](#schemaactualcost)|true|none|Actual resource cost measured while the query executed.|

<h2 id="tocS_QueryCostData">QueryCostData</h2>
<!-- backwards compatibility -->
<a id="schemaquerycostdata"></a>
<a id="schema_QueryCostData"></a>
<a id="tocSquerycostdata"></a>
<a id="tocsquerycostdata"></a>

```json
{
  "estimate": {
    "seriesTouched": 0,
    "samplesRead": 0
  }
}
```

Estimated cost of a query computed without executing it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimate|[CostEstimate](#schemacostestimate)|true|none|Estimated storage input. Values may overestimate or underestimate actual cost; warnings identify incomplete estimates.|

<h2 id="tocS_QueryCostOutputBody">QueryCostOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemaquerycostoutputbody"></a>
<a id="schema_QueryCostOutputBody"></a>
<a id="tocSquerycostoutputbody"></a>
<a id="tocsquerycostoutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "estimate": {
      "seriesTouched": 0,
      "samplesRead": 0
    }
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body for query cost estimation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[QueryCostData](#schemaquerycostdata)|true|none|Estimated cost of a query computed without executing it.|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_QueryCostPostInputBody">QueryCostPostInputBody</h2>
<!-- backwards compatibility -->
<a id="schemaquerycostpostinputbody"></a>
<a id="schema_QueryCostPostInputBody"></a>
<a id="tocSquerycostpostinputbody"></a>
<a id="tocsquerycostpostinputbody"></a>

```json
{
  "query": "up",
  "time": "2023-07-21T20:10:51.781Z",
  "timeout": "30s",
  "lookback_delta": "5m",
  "limit": 100,
  "stats": "all",
  "cost": true,
  "max_series": 1000,
  "max_samples_read": 100000,
  "max_query_duration": "30s"
}
```

POST request body for instant query cost estimation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|Form field: The PromQL query to estimate.|
|time|string|false|none|Form field: The evaluation timestamp (optional, defaults to current time).|
|timeout|string|false|none|Form field: Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.|
|lookback_delta|string|false|none|Form field: Override the lookback period for this query (optional).|
|limit|integer(int64)|false|none|Form field: The maximum number of metrics to return. Validated identically to /api/v1/query but ignored, as no series are returned.|
|stats|string|false|none|Form field: Validated identically to /api/v1/query but ignored, as no query statistics are returned.|
|cost|boolean|false|none|Form field: Validated identically to /api/v1/query but ignored, as the response is already a cost estimate. Any non-boolean value is an error.|
|max_series|integer(int64)|false|none|Form field: Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.|
|max_samples_read|integer(int64)|false|none|Form field: Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.|
|max_query_duration|string|false|none|Form field: Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.|

<h2 id="tocS_QueryRangeCostPostInputBody">QueryRangeCostPostInputBody</h2>
<!-- backwards compatibility -->
<a id="schemaqueryrangecostpostinputbody"></a>
<a id="schema_QueryRangeCostPostInputBody"></a>
<a id="tocSqueryrangecostpostinputbody"></a>
<a id="tocsqueryrangecostpostinputbody"></a>

```json
{
  "query": "rate(http_requests_total[5m])",
  "start": "2023-07-21T20:10:30.781Z",
  "end": "2023-07-21T20:20:30.781Z",
  "step": "15s",
  "timeout": "30s",
  "lookback_delta": "5m",
  "limit": 100,
  "stats": "all",
  "cost": true,
  "max_series": 1000,
  "max_samples_read": 100000,
  "max_query_duration": "30s"
}
```

POST request body for range query cost estimation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|Form field: The PromQL query to estimate.|
|start|string|true|none|Form field: The start time of the query.|
|end|string|true|none|Form field: The end time of the query.|
|step|string|true|none|Form field: The step size of the query.|
|timeout|string|false|none|Form field: Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.|
|lookback_delta|string|false|none|Form field: Override the lookback period for this query (optional).|
|limit|integer(int64)|false|none|Form field: The maximum number of metrics to return. Validated identically to /api/v1/query but ignored, as no series are returned.|
|stats|string|false|none|Form field: Validated identically to /api/v1/query but ignored, as no query statistics are returned.|
|cost|boolean|false|none|Form field: Validated identically to /api/v1/query but ignored, as the response is already a cost estimate. Any non-boolean value is an error.|
|max_series|integer(int64)|false|none|Form field: Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.|
|max_samples_read|integer(int64)|false|none|Form field: Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.|
|max_query_duration|string|false|none|Form field: Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.|

<h2 id="tocS_FloatSample">FloatSample</h2>
<!-- backwards compatibility -->
<a id="schemafloatsample"></a>
<a id="schema_FloatSample"></a>
<a id="tocSfloatsample"></a>
<a id="tocsfloatsample"></a>

```json
{
  "metric": {},
  "value": [
    1767436620,
    "1"
  ]
}
```

A sample with a float value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metric|[Labels](#schemalabels)|true|none|Label set represented as a key-value map.|
|value|[number \| string]|true|none|Timestamp and float value as [unixTimestamp, stringValue].|

<h2 id="tocS_HistogramSample">HistogramSample</h2>
<!-- backwards compatibility -->
<a id="schemahistogramsample"></a>
<a id="schema_HistogramSample"></a>
<a id="tocShistogramsample"></a>
<a id="tocshistogramsample"></a>

```json
{
  "metric": {},
  "histogram": [
    1767436620,
    {
      "buckets": [],
      "count": "60",
      "sum": "120"
    }
  ]
}
```

A sample with a native histogram value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metric|[Labels](#schemalabels)|true|none|Label set represented as a key-value map.|
|histogram|[number \| [HistogramValue](#schemahistogramvalue)]|true|none|Timestamp and histogram value as [unixTimestamp, histogramObject].|

<h2 id="tocS_FloatSeries">FloatSeries</h2>
<!-- backwards compatibility -->
<a id="schemafloatseries"></a>
<a id="schema_FloatSeries"></a>
<a id="tocSfloatseries"></a>
<a id="tocsfloatseries"></a>

```json
{
  "metric": {},
  "values": [
    [
      0,
      0
    ]
  ]
}
```

A time series with float values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metric|[Labels](#schemalabels)|true|none|Label set represented as a key-value map.|
|values|[[number \| string]]|true|none|Array of [timestamp, stringValue] pairs for float values.|

<h2 id="tocS_HistogramSeries">HistogramSeries</h2>
<!-- backwards compatibility -->
<a id="schemahistogramseries"></a>
<a id="schema_HistogramSeries"></a>
<a id="tocShistogramseries"></a>
<a id="tocshistogramseries"></a>

```json
{
  "metric": {},
  "histograms": [
    [
      0,
      0
    ]
  ]
}
```

A time series with native histogram values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metric|[Labels](#schemalabels)|true|none|Label set represented as a key-value map.|
|histograms|[[number \| [HistogramValue](#schemahistogramvalue)]]|true|none|Array of [timestamp, histogramObject] pairs for histogram values.|

<h2 id="tocS_HistogramValue">HistogramValue</h2>
<!-- backwards compatibility -->
<a id="schemahistogramvalue"></a>
<a id="schema_HistogramValue"></a>
<a id="tocShistogramvalue"></a>
<a id="tocshistogramvalue"></a>

```json
{
  "count": "string",
  "sum": "string",
  "buckets": [
    [
      0
    ]
  ]
}
```

Native histogram value representation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|string|true|none|Total count of observations.|
|sum|string|true|none|Sum of all observed values.|
|buckets|[[number \| string]]|false|none|Histogram buckets as [boundary_rule, lower, upper, count].|

<h2 id="tocS_LabelsOutputBody">LabelsOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemalabelsoutputbody"></a>
<a id="schema_LabelsOutputBody"></a>
<a id="tocSlabelsoutputbody"></a>
<a id="tocslabelsoutputbody"></a>

```json
{
  "status": "success",
  "data": [
    "__name__",
    "job",
    "instance"
  ],
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body with an array of strings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[string]|true|none|none|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_LabelsPostInputBody">LabelsPostInputBody</h2>
<!-- backwards compatibility -->
<a id="schemalabelspostinputbody"></a>
<a id="schema_LabelsPostInputBody"></a>
<a id="tocSlabelspostinputbody"></a>
<a id="tocslabelspostinputbody"></a>

```json
{
  "start": "2023-07-21T20:00:00.000Z",
  "end": "2023-07-21T21:00:00.000Z",
  "match[]": [
    "{job=\"prometheus\"}"
  ],
  "limit": 100
}
```

POST request body for labels query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|string|false|none|Form field: The start time of the query.|
|end|string|false|none|Form field: The end time of the query.|
|match[]|[string]|false|none|Form field: Series selector argument that selects the series from which to read the label names.|
|limit|integer(int64)|false|none|Form field: The maximum number of label names to return.|

<h2 id="tocS_LabelValuesOutputBody">LabelValuesOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemalabelvaluesoutputbody"></a>
<a id="schema_LabelValuesOutputBody"></a>
<a id="tocSlabelvaluesoutputbody"></a>
<a id="tocslabelvaluesoutputbody"></a>

```json
{
  "status": "success",
  "data": [
    "__name__",
    "job",
    "instance"
  ],
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body with an array of strings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[string]|true|none|none|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_SearchMetricNamesPostInputBody">SearchMetricNamesPostInputBody</h2>
<!-- backwards compatibility -->
<a id="schemasearchmetricnamespostinputbody"></a>
<a id="schema_SearchMetricNamesPostInputBody"></a>
<a id="tocSsearchmetricnamespostinputbody"></a>
<a id="tocssearchmetricnamespostinputbody"></a>

```json
{
  "match[]": [
    "{job=\"prometheus\"}"
  ],
  "search[]": [
    "http_req"
  ],
  "fuzz_threshold": 80,
  "fuzz_alg": "subsequence",
  "case_sensitive": true,
  "sort_by": "alpha",
  "sort_dir": "asc",
  "include_score": true,
  "start": "2026-01-02T12:37:00.000Z",
  "end": "2026-01-02T13:37:00.000Z",
  "limit": 20,
  "batch_size": 20,
  "include_metadata": true
}
```

POST request body for metric name search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|match[]|[string]|false|none|Form field: Series selector argument used to scope metric discovery.|
|search[]|[string]|false|none|Form field: One or more search terms matched against metric names (OR logic).|
|fuzz_threshold|integer(int64)|false|none|Form field: Fuzzy threshold in the range 0-100. Default is 0, the lowest fuzzy threshold.|
|fuzz_alg|string|false|none|Form field: Fuzzy algorithm. Supported values are subsequence (default) and jarowinkler.|
|case_sensitive|boolean|false|none|Form field: Whether matching is case-sensitive.|
|sort_by|string|false|none|Form field: Sort mode. Supported values are alpha and score. If unset, results are returned in natural order.|
|sort_dir|string|false|none|Form field: Sort direction. Only valid with sort_by=alpha. Supported values are asc and dsc.|
|include_score|boolean|false|none|Form field: Include the relevance score in each result record.|
|start|string|false|none|Form field: The start time of the query.|
|end|string|false|none|Form field: The end time of the query.|
|limit|integer(int64)|false|none|Form field: The maximum number of results to return.|
|batch_size|integer(int64)|false|none|Form field: Preferred number of results per NDJSON batch. Clamped to 1000 and the effective result limit.|
|include_metadata|boolean|false|none|Form field: Include metric metadata in each result.|

#### Enumerated Values

|Property|Value|
|---|---|
|fuzz_alg|subsequence|
|fuzz_alg|jarowinkler|
|sort_by|alpha|
|sort_by|score|
|sort_dir|asc|
|sort_dir|dsc|

<h2 id="tocS_SearchLabelNamesPostInputBody">SearchLabelNamesPostInputBody</h2>
<!-- backwards compatibility -->
<a id="schemasearchlabelnamespostinputbody"></a>
<a id="schema_SearchLabelNamesPostInputBody"></a>
<a id="tocSsearchlabelnamespostinputbody"></a>
<a id="tocssearchlabelnamespostinputbody"></a>

```json
{
  "match[]": [
    "{__name__=\"up\"}"
  ],
  "search[]": [
    "inst"
  ],
  "fuzz_threshold": 80,
  "fuzz_alg": "subsequence",
  "case_sensitive": true,
  "sort_by": "alpha",
  "sort_dir": "asc",
  "include_score": true,
  "start": "2026-01-02T12:37:00.000Z",
  "end": "2026-01-02T13:37:00.000Z",
  "limit": 20,
  "batch_size": 20
}
```

POST request body for label name search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|match[]|[string]|false|none|Form field: Series selector argument used to scope label discovery.|
|search[]|[string]|false|none|Form field: One or more search terms matched against label names (OR logic).|
|fuzz_threshold|integer(int64)|false|none|Form field: Fuzzy threshold in the range 0-100. Default is 0, the lowest fuzzy threshold.|
|fuzz_alg|string|false|none|Form field: Fuzzy algorithm. Supported values are subsequence (default) and jarowinkler.|
|case_sensitive|boolean|false|none|Form field: Whether matching is case-sensitive.|
|sort_by|string|false|none|Form field: Sort mode. Supported values are alpha and score. If unset, results are returned in natural order.|
|sort_dir|string|false|none|Form field: Sort direction. Only valid with sort_by=alpha. Supported values are asc and dsc.|
|include_score|boolean|false|none|Form field: Include the relevance score in each result record.|
|start|string|false|none|Form field: The start time of the query.|
|end|string|false|none|Form field: The end time of the query.|
|limit|integer(int64)|false|none|Form field: The maximum number of results to return.|
|batch_size|integer(int64)|false|none|Form field: Preferred number of results per NDJSON batch. Clamped to 1000 and the effective result limit.|

#### Enumerated Values

|Property|Value|
|---|---|
|fuzz_alg|subsequence|
|fuzz_alg|jarowinkler|
|sort_by|alpha|
|sort_by|score|
|sort_dir|asc|
|sort_dir|dsc|

<h2 id="tocS_SearchLabelValuesPostInputBody">SearchLabelValuesPostInputBody</h2>
<!-- backwards compatibility -->
<a id="schemasearchlabelvaluespostinputbody"></a>
<a id="schema_SearchLabelValuesPostInputBody"></a>
<a id="tocSsearchlabelvaluespostinputbody"></a>
<a id="tocssearchlabelvaluespostinputbody"></a>

```json
{
  "label": "instance",
  "match[]": [
    "up"
  ],
  "search[]": [
    "909"
  ],
  "fuzz_threshold": 80,
  "fuzz_alg": "subsequence",
  "case_sensitive": true,
  "sort_by": "alpha",
  "sort_dir": "asc",
  "include_score": true,
  "start": "2026-01-02T12:37:00.000Z",
  "end": "2026-01-02T13:37:00.000Z",
  "limit": 20,
  "batch_size": 20
}
```

POST request body for label value search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|Form field: Label name whose values should be searched.|
|match[]|[string]|false|none|Form field: Series selector argument used to scope label value discovery.|
|search[]|[string]|false|none|Form field: One or more search terms matched against label values (OR logic).|
|fuzz_threshold|integer(int64)|false|none|Form field: Fuzzy threshold in the range 0-100. Default is 0, the lowest fuzzy threshold.|
|fuzz_alg|string|false|none|Form field: Fuzzy algorithm. Supported values are subsequence (default) and jarowinkler.|
|case_sensitive|boolean|false|none|Form field: Whether matching is case-sensitive.|
|sort_by|string|false|none|Form field: Sort mode. Supported values are alpha and score. If unset, results are returned in natural order.|
|sort_dir|string|false|none|Form field: Sort direction. Only valid with sort_by=alpha. Supported values are asc and dsc.|
|include_score|boolean|false|none|Form field: Include the relevance score in each result record.|
|start|string|false|none|Form field: The start time of the query.|
|end|string|false|none|Form field: The end time of the query.|
|limit|integer(int64)|false|none|Form field: The maximum number of results to return.|
|batch_size|integer(int64)|false|none|Form field: Preferred number of results per NDJSON batch. Clamped to 1000 and the effective result limit.|

#### Enumerated Values

|Property|Value|
|---|---|
|fuzz_alg|subsequence|
|fuzz_alg|jarowinkler|
|sort_by|alpha|
|sort_by|score|
|sort_dir|asc|
|sort_dir|dsc|

<h2 id="tocS_SeriesOutputBody">SeriesOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemaseriesoutputbody"></a>
<a id="schema_SeriesOutputBody"></a>
<a id="tocSseriesoutputbody"></a>
<a id="tocsseriesoutputbody"></a>

```json
{
  "status": "success",
  "data": [
    {
      "__name__": "up",
      "instance": "localhost:9090",
      "job": "prometheus"
    }
  ],
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body with an array of label sets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[[Labels](#schemalabels)]|true|none|none|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_SeriesPostInputBody">SeriesPostInputBody</h2>
<!-- backwards compatibility -->
<a id="schemaseriespostinputbody"></a>
<a id="schema_SeriesPostInputBody"></a>
<a id="tocSseriespostinputbody"></a>
<a id="tocsseriespostinputbody"></a>

```json
{
  "start": "2023-07-21T20:00:00.000Z",
  "end": "2023-07-21T21:00:00.000Z",
  "match[]": [
    "{job=\"prometheus\"}"
  ],
  "limit": 100
}
```

POST request body for series query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|string|false|none|Form field: The start time of the query.|
|end|string|false|none|Form field: The end time of the query.|
|match[]|[string]|true|none|Form field: Series selector argument that selects the series to return.|
|limit|integer(int64)|false|none|Form field: The maximum number of series to return.|

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "type": "string",
  "unit": "string",
  "help": "string"
}
```

Metric metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Metric type (counter, gauge, histogram, summary, or untyped).|
|unit|string|true|none|Unit of the metric.|
|help|string|true|none|Help text describing the metric.|

<h2 id="tocS_MetadataOutputBody">MetadataOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemametadataoutputbody"></a>
<a id="schema_MetadataOutputBody"></a>
<a id="tocSmetadataoutputbody"></a>
<a id="tocsmetadataoutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "property1": [
      {
        "type": "string",
        "unit": "string",
        "help": "string"
      }
    ],
    "property2": [
      {
        "type": "string",
        "unit": "string",
        "help": "string"
      }
    ]
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body for metadata endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|object|true|none|none|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_MetricMetadata">MetricMetadata</h2>
<!-- backwards compatibility -->
<a id="schemametricmetadata"></a>
<a id="schema_MetricMetadata"></a>
<a id="tocSmetricmetadata"></a>
<a id="tocsmetricmetadata"></a>

```json
{
  "target": {},
  "metric": "string",
  "type": "string",
  "help": "string",
  "unit": "string"
}
```

Target metric metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target|[Labels](#schemalabels)|true|none|Label set represented as a key-value map.|
|metric|string|false|none|Metric name.|
|type|string|true|none|Metric type (counter, gauge, histogram, summary, or untyped).|
|help|string|true|none|Help text describing the metric.|
|unit|string|true|none|Unit of the metric.|

<h2 id="tocS_Target">Target</h2>
<!-- backwards compatibility -->
<a id="schematarget"></a>
<a id="schema_Target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

```json
{
  "discoveredLabels": {},
  "labels": {},
  "scrapePool": "string",
  "scrapeUrl": "string",
  "globalUrl": "string",
  "lastError": "string",
  "lastScrape": "1970-01-01T00:00:00Z",
  "lastScrapeDuration": 0,
  "health": "string",
  "scrapeInterval": "string",
  "scrapeTimeout": "string"
}
```

Scrape target information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discoveredLabels|[Labels](#schemalabels)|true|none|Label set represented as a key-value map.|
|labels|[Labels](#schemalabels)|true|none|Label set represented as a key-value map.|
|scrapePool|string|true|none|Name of the scrape pool.|
|scrapeUrl|string|true|none|URL of the target.|
|globalUrl|string|true|none|Global URL of the target.|
|lastError|string|true|none|Last error message from scraping.|
|lastScrape|string(date-time)|true|none|Timestamp of the last scrape.|
|lastScrapeDuration|number(double)|true|none|Duration of the last scrape in seconds.|
|health|string|true|none|Health status of the target (up, down, or unknown).|
|scrapeInterval|string|true|none|Scrape interval for this target.|
|scrapeTimeout|string|true|none|Scrape timeout for this target.|

<h2 id="tocS_DroppedTarget">DroppedTarget</h2>
<!-- backwards compatibility -->
<a id="schemadroppedtarget"></a>
<a id="schema_DroppedTarget"></a>
<a id="tocSdroppedtarget"></a>
<a id="tocsdroppedtarget"></a>

```json
{
  "discoveredLabels": {},
  "scrapePool": "string"
}
```

Dropped target information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discoveredLabels|[Labels](#schemalabels)|true|none|Label set represented as a key-value map.|
|scrapePool|string|true|none|Name of the scrape pool.|

<h2 id="tocS_TargetDiscovery">TargetDiscovery</h2>
<!-- backwards compatibility -->
<a id="schematargetdiscovery"></a>
<a id="schema_TargetDiscovery"></a>
<a id="tocStargetdiscovery"></a>
<a id="tocstargetdiscovery"></a>

```json
{
  "activeTargets": [
    {
      "discoveredLabels": {},
      "labels": {},
      "scrapePool": "string",
      "scrapeUrl": "string",
      "globalUrl": "string",
      "lastError": "string",
      "lastScrape": "1970-01-01T00:00:00Z",
      "lastScrapeDuration": 0,
      "health": "string",
      "scrapeInterval": "string",
      "scrapeTimeout": "string"
    }
  ],
  "droppedTargets": [
    {
      "discoveredLabels": {},
      "scrapePool": "string"
    }
  ],
  "droppedTargetCounts": {
    "property1": 0,
    "property2": 0
  }
}
```

Target discovery information including active and dropped targets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeTargets|[[Target](#schematarget)]|true|none|none|
|droppedTargets|[[DroppedTarget](#schemadroppedtarget)]|true|none|none|
|droppedTargetCounts|object|true|none|none|

<h2 id="tocS_TargetsOutputBody">TargetsOutputBody</h2>
<!-- backwards compatibility -->
<a id="schematargetsoutputbody"></a>
<a id="schema_TargetsOutputBody"></a>
<a id="tocStargetsoutputbody"></a>
<a id="tocstargetsoutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "activeTargets": [
      {
        "discoveredLabels": {},
        "labels": {},
        "scrapePool": "string",
        "scrapeUrl": "string",
        "globalUrl": "string",
        "lastError": "string",
        "lastScrape": "1970-01-01T00:00:00Z",
        "lastScrapeDuration": 0,
        "health": "string",
        "scrapeInterval": "string",
        "scrapeTimeout": "string"
      }
    ],
    "droppedTargets": [
      {
        "discoveredLabels": {},
        "scrapePool": "string"
      }
    ],
    "droppedTargetCounts": {
      "property1": 0,
      "property2": 0
    }
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body for targets endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[TargetDiscovery](#schematargetdiscovery)|true|none|Target discovery information including active and dropped targets.|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_TargetMetadataOutputBody">TargetMetadataOutputBody</h2>
<!-- backwards compatibility -->
<a id="schematargetmetadataoutputbody"></a>
<a id="schema_TargetMetadataOutputBody"></a>
<a id="tocStargetmetadataoutputbody"></a>
<a id="tocstargetmetadataoutputbody"></a>

```json
{
  "status": "success",
  "data": [
    {
      "help": "The current health status of the target",
      "metric": "up",
      "target": {
        "instance": "localhost:9090",
        "job": "prometheus"
      },
      "type": "gauge",
      "unit": ""
    }
  ],
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body with an array of metric metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[[MetricMetadata](#schemametricmetadata)]|true|none|none|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_ScrapePoolsDiscovery">ScrapePoolsDiscovery</h2>
<!-- backwards compatibility -->
<a id="schemascrapepoolsdiscovery"></a>
<a id="schema_ScrapePoolsDiscovery"></a>
<a id="tocSscrapepoolsdiscovery"></a>
<a id="tocsscrapepoolsdiscovery"></a>

```json
{
  "scrapePools": [
    "string"
  ]
}
```

List of all configured scrape pools.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scrapePools|[string]|true|none|none|

<h2 id="tocS_ScrapePoolsOutputBody">ScrapePoolsOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemascrapepoolsoutputbody"></a>
<a id="schema_ScrapePoolsOutputBody"></a>
<a id="tocSscrapepoolsoutputbody"></a>
<a id="tocsscrapepoolsoutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "scrapePools": [
      "string"
    ]
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body for scrape pools endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[ScrapePoolsDiscovery](#schemascrapepoolsdiscovery)|true|none|List of all configured scrape pools.|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_ScrapePoolConfigData">ScrapePoolConfigData</h2>
<!-- backwards compatibility -->
<a id="schemascrapepoolconfigdata"></a>
<a id="schema_ScrapePoolConfigData"></a>
<a id="tocSscrapepoolconfigdata"></a>
<a id="tocsscrapepoolconfigdata"></a>

```json
{
  "yaml": "string"
}
```

Effective configuration for a scrape pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|yaml|string|true|none|Effective scrape pool configuration in YAML format.|

<h2 id="tocS_ScrapePoolConfigOutputBody">ScrapePoolConfigOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemascrapepoolconfigoutputbody"></a>
<a id="schema_ScrapePoolConfigOutputBody"></a>
<a id="tocSscrapepoolconfigoutputbody"></a>
<a id="tocsscrapepoolconfigoutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "yaml": "string"
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body for scrape pool config endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[ScrapePoolConfigData](#schemascrapepoolconfigdata)|true|none|Effective configuration for a scrape pool.|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_Config">Config</h2>
<!-- backwards compatibility -->
<a id="schemaconfig"></a>
<a id="schema_Config"></a>
<a id="tocSconfig"></a>
<a id="tocsconfig"></a>

```json
{
  "source_labels": [
    "string"
  ],
  "separator": "string",
  "regex": "string",
  "modulus": 0,
  "target_label": "string",
  "replacement": "string",
  "action": "string"
}
```

Relabel configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_labels|[string]|false|none|Source labels for relabeling.|
|separator|string|false|none|Separator for source label values.|
|regex|string|false|none|Regular expression for matching.|
|modulus|integer(int64)|false|none|Modulus for hash-based relabeling.|
|target_label|string|false|none|Target label name.|
|replacement|string|false|none|Replacement value.|
|action|string|false|none|Relabel action.|

<h2 id="tocS_RelabelStep">RelabelStep</h2>
<!-- backwards compatibility -->
<a id="schemarelabelstep"></a>
<a id="schema_RelabelStep"></a>
<a id="tocSrelabelstep"></a>
<a id="tocsrelabelstep"></a>

```json
{
  "rule": {
    "source_labels": [
      "string"
    ],
    "separator": "string",
    "regex": "string",
    "modulus": 0,
    "target_label": "string",
    "replacement": "string",
    "action": "string"
  },
  "output": {},
  "keep": true
}
```

Relabel step showing the rule, output, and whether the target was kept.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rule|[Config](#schemaconfig)|true|none|Relabel configuration.|
|output|[Labels](#schemalabels)|true|none|Label set represented as a key-value map.|
|keep|boolean|true|none|none|

<h2 id="tocS_RelabelStepsResponse">RelabelStepsResponse</h2>
<!-- backwards compatibility -->
<a id="schemarelabelstepsresponse"></a>
<a id="schema_RelabelStepsResponse"></a>
<a id="tocSrelabelstepsresponse"></a>
<a id="tocsrelabelstepsresponse"></a>

```json
{
  "steps": [
    {
      "rule": {
        "source_labels": [
          "string"
        ],
        "separator": "string",
        "regex": "string",
        "modulus": 0,
        "target_label": "string",
        "replacement": "string",
        "action": "string"
      },
      "output": {},
      "keep": true
    }
  ]
}
```

Relabeling steps response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|steps|[[RelabelStep](#schemarelabelstep)]|true|none|none|

<h2 id="tocS_TargetRelabelStepsOutputBody">TargetRelabelStepsOutputBody</h2>
<!-- backwards compatibility -->
<a id="schematargetrelabelstepsoutputbody"></a>
<a id="schema_TargetRelabelStepsOutputBody"></a>
<a id="tocStargetrelabelstepsoutputbody"></a>
<a id="tocstargetrelabelstepsoutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "steps": [
      {
        "rule": {
          "source_labels": [
            "string"
          ],
          "separator": "string",
          "regex": "string",
          "modulus": 0,
          "target_label": "string",
          "replacement": "string",
          "action": "string"
        },
        "output": {},
        "keep": true
      }
    ]
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body for target relabel steps endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[RelabelStepsResponse](#schemarelabelstepsresponse)|true|none|Relabeling steps response.|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_RuleGroup">RuleGroup</h2>
<!-- backwards compatibility -->
<a id="schemarulegroup"></a>
<a id="schema_RuleGroup"></a>
<a id="tocSrulegroup"></a>
<a id="tocsrulegroup"></a>

```json
{
  "name": "string",
  "file": "string",
  "rules": [
    {}
  ],
  "interval": 0,
  "limit": 0,
  "evaluationTime": 0,
  "lastEvaluation": "1970-01-01T00:00:00Z"
}
```

Rule group information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the rule group.|
|file|string|true|none|File containing the rule group.|
|rules|[object]|true|none|Rules in this group.|
|interval|number(double)|true|none|Evaluation interval in seconds.|
|limit|integer(int64)|true|none|Maximum number of alerts for this group.|
|evaluationTime|number(double)|true|none|Time taken to evaluate the group in seconds.|
|lastEvaluation|string(date-time)|true|none|Timestamp of the last evaluation.|

<h2 id="tocS_RuleDiscovery">RuleDiscovery</h2>
<!-- backwards compatibility -->
<a id="schemarulediscovery"></a>
<a id="schema_RuleDiscovery"></a>
<a id="tocSrulediscovery"></a>
<a id="tocsrulediscovery"></a>

```json
{
  "groups": [
    {
      "name": "string",
      "file": "string",
      "rules": [
        {}
      ],
      "interval": 0,
      "limit": 0,
      "evaluationTime": 0,
      "lastEvaluation": "1970-01-01T00:00:00Z"
    }
  ],
  "groupNextToken": "string"
}
```

Rule discovery information containing all rule groups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groups|[[RuleGroup](#schemarulegroup)]|true|none|none|
|groupNextToken|string|false|none|Pagination token for the next page of groups.|

<h2 id="tocS_RulesOutputBody">RulesOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemarulesoutputbody"></a>
<a id="schema_RulesOutputBody"></a>
<a id="tocSrulesoutputbody"></a>
<a id="tocsrulesoutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "groups": [
      {
        "name": "string",
        "file": "string",
        "rules": [
          {}
        ],
        "interval": 0,
        "limit": 0,
        "evaluationTime": 0,
        "lastEvaluation": "1970-01-01T00:00:00Z"
      }
    ],
    "groupNextToken": "string"
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body for rules endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[RuleDiscovery](#schemarulediscovery)|true|none|Rule discovery information containing all rule groups.|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_Alert">Alert</h2>
<!-- backwards compatibility -->
<a id="schemaalert"></a>
<a id="schema_Alert"></a>
<a id="tocSalert"></a>
<a id="tocsalert"></a>

```json
{
  "labels": {},
  "annotations": {},
  "state": "string",
  "value": "string",
  "activeAt": "1970-01-01T00:00:00Z",
  "keepFiringSince": "1970-01-01T00:00:00Z"
}
```

Alert information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[Labels](#schemalabels)|true|none|Label set represented as a key-value map.|
|annotations|[Labels](#schemalabels)|true|none|Label set represented as a key-value map.|
|state|string|true|none|State of the alert (pending, firing, or inactive).|
|value|string|true|none|Value of the alert expression.|
|activeAt|string(date-time)|false|none|Timestamp when the alert became active.|
|keepFiringSince|string(date-time)|false|none|Timestamp since the alert has been kept firing.|

<h2 id="tocS_AlertDiscovery">AlertDiscovery</h2>
<!-- backwards compatibility -->
<a id="schemaalertdiscovery"></a>
<a id="schema_AlertDiscovery"></a>
<a id="tocSalertdiscovery"></a>
<a id="tocsalertdiscovery"></a>

```json
{
  "alerts": [
    {
      "labels": {},
      "annotations": {},
      "state": "string",
      "value": "string",
      "activeAt": "1970-01-01T00:00:00Z",
      "keepFiringSince": "1970-01-01T00:00:00Z"
    }
  ]
}
```

Alert discovery information containing all active alerts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alerts|[[Alert](#schemaalert)]|true|none|none|

<h2 id="tocS_AlertsOutputBody">AlertsOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemaalertsoutputbody"></a>
<a id="schema_AlertsOutputBody"></a>
<a id="tocSalertsoutputbody"></a>
<a id="tocsalertsoutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "alerts": [
      {
        "labels": {},
        "annotations": {},
        "state": "string",
        "value": "string",
        "activeAt": "1970-01-01T00:00:00Z",
        "keepFiringSince": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body for alerts endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[AlertDiscovery](#schemaalertdiscovery)|true|none|Alert discovery information containing all active alerts.|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_AlertmanagerTarget">AlertmanagerTarget</h2>
<!-- backwards compatibility -->
<a id="schemaalertmanagertarget"></a>
<a id="schema_AlertmanagerTarget"></a>
<a id="tocSalertmanagertarget"></a>
<a id="tocsalertmanagertarget"></a>

```json
{
  "url": "string"
}
```

Alertmanager target information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|URL of the Alertmanager instance.|

<h2 id="tocS_AlertmanagerDiscovery">AlertmanagerDiscovery</h2>
<!-- backwards compatibility -->
<a id="schemaalertmanagerdiscovery"></a>
<a id="schema_AlertmanagerDiscovery"></a>
<a id="tocSalertmanagerdiscovery"></a>
<a id="tocsalertmanagerdiscovery"></a>

```json
{
  "activeAlertmanagers": [
    {
      "url": "string"
    }
  ],
  "droppedAlertmanagers": [
    {
      "url": "string"
    }
  ]
}
```

Alertmanager discovery information including active and dropped instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeAlertmanagers|[[AlertmanagerTarget](#schemaalertmanagertarget)]|true|none|none|
|droppedAlertmanagers|[[AlertmanagerTarget](#schemaalertmanagertarget)]|true|none|none|

<h2 id="tocS_AlertmanagersOutputBody">AlertmanagersOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemaalertmanagersoutputbody"></a>
<a id="schema_AlertmanagersOutputBody"></a>
<a id="tocSalertmanagersoutputbody"></a>
<a id="tocsalertmanagersoutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "activeAlertmanagers": [
      {
        "url": "string"
      }
    ],
    "droppedAlertmanagers": [
      {
        "url": "string"
      }
    ]
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body for alertmanagers endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[AlertmanagerDiscovery](#schemaalertmanagerdiscovery)|true|none|Alertmanager discovery information including active and dropped instances.|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_StatusConfigData">StatusConfigData</h2>
<!-- backwards compatibility -->
<a id="schemastatusconfigdata"></a>
<a id="schema_StatusConfigData"></a>
<a id="tocSstatusconfigdata"></a>
<a id="tocsstatusconfigdata"></a>

```json
{
  "yaml": "string"
}
```

Prometheus configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|yaml|string|true|none|Prometheus configuration in YAML format.|

<h2 id="tocS_StatusConfigOutputBody">StatusConfigOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemastatusconfigoutputbody"></a>
<a id="schema_StatusConfigOutputBody"></a>
<a id="tocSstatusconfigoutputbody"></a>
<a id="tocsstatusconfigoutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "yaml": "string"
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body for status config endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[StatusConfigData](#schemastatusconfigdata)|true|none|Prometheus configuration.|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_RuntimeInfo">RuntimeInfo</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeinfo"></a>
<a id="schema_RuntimeInfo"></a>
<a id="tocSruntimeinfo"></a>
<a id="tocsruntimeinfo"></a>

```json
{
  "startTime": "1970-01-01T00:00:00Z",
  "CWD": "string",
  "hostname": "string",
  "serverTime": "1970-01-01T00:00:00Z",
  "reloadConfigSuccess": true,
  "lastConfigTime": "1970-01-01T00:00:00Z",
  "corruptionCount": 0,
  "goroutineCount": 0,
  "GOMAXPROCS": 0,
  "GOMEMLIMIT": 0,
  "GOGC": "string",
  "GODEBUG": "string",
  "storageRetention": "string"
}
```

Prometheus runtime information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startTime|string(date-time)|true|none|none|
|CWD|string|true|none|none|
|hostname|string|true|none|none|
|serverTime|string(date-time)|true|none|none|
|reloadConfigSuccess|boolean|true|none|none|
|lastConfigTime|string(date-time)|true|none|none|
|corruptionCount|integer(int64)|true|none|none|
|goroutineCount|integer(int64)|true|none|none|
|GOMAXPROCS|integer(int64)|true|none|none|
|GOMEMLIMIT|integer(int64)|true|none|none|
|GOGC|string|true|none|none|
|GODEBUG|string|true|none|none|
|storageRetention|string|true|none|none|

<h2 id="tocS_StatusRuntimeInfoOutputBody">StatusRuntimeInfoOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemastatusruntimeinfooutputbody"></a>
<a id="schema_StatusRuntimeInfoOutputBody"></a>
<a id="tocSstatusruntimeinfooutputbody"></a>
<a id="tocsstatusruntimeinfooutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "startTime": "1970-01-01T00:00:00Z",
    "CWD": "string",
    "hostname": "string",
    "serverTime": "1970-01-01T00:00:00Z",
    "reloadConfigSuccess": true,
    "lastConfigTime": "1970-01-01T00:00:00Z",
    "corruptionCount": 0,
    "goroutineCount": 0,
    "GOMAXPROCS": 0,
    "GOMEMLIMIT": 0,
    "GOGC": "string",
    "GODEBUG": "string",
    "storageRetention": "string"
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body for status runtime info endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[RuntimeInfo](#schemaruntimeinfo)|true|none|Prometheus runtime information.|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_PrometheusVersion">PrometheusVersion</h2>
<!-- backwards compatibility -->
<a id="schemaprometheusversion"></a>
<a id="schema_PrometheusVersion"></a>
<a id="tocSprometheusversion"></a>
<a id="tocsprometheusversion"></a>

```json
{
  "version": "string",
  "revision": "string",
  "branch": "string",
  "buildUser": "string",
  "buildDate": "string",
  "goVersion": "string"
}
```

Prometheus version information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|true|none|none|
|revision|string|true|none|none|
|branch|string|true|none|none|
|buildUser|string|true|none|none|
|buildDate|string|true|none|none|
|goVersion|string|true|none|none|

<h2 id="tocS_StatusBuildInfoOutputBody">StatusBuildInfoOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemastatusbuildinfooutputbody"></a>
<a id="schema_StatusBuildInfoOutputBody"></a>
<a id="tocSstatusbuildinfooutputbody"></a>
<a id="tocsstatusbuildinfooutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "version": "string",
    "revision": "string",
    "branch": "string",
    "buildUser": "string",
    "buildDate": "string",
    "goVersion": "string"
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body for status build info endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[PrometheusVersion](#schemaprometheusversion)|true|none|Prometheus version information.|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_StatusFlagsOutputBody">StatusFlagsOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemastatusflagsoutputbody"></a>
<a id="schema_StatusFlagsOutputBody"></a>
<a id="tocSstatusflagsoutputbody"></a>
<a id="tocsstatusflagsoutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "property1": "string",
    "property2": "string"
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body for status flags endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|object|true|none|none|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_HeadStats">HeadStats</h2>
<!-- backwards compatibility -->
<a id="schemaheadstats"></a>
<a id="schema_HeadStats"></a>
<a id="tocSheadstats"></a>
<a id="tocsheadstats"></a>

```json
{
  "numSeries": 0,
  "numLabelPairs": 0,
  "chunkCount": 0,
  "minTime": 0,
  "maxTime": 0
}
```

TSDB head statistics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numSeries|integer(int64)|true|none|none|
|numLabelPairs|integer(int64)|true|none|none|
|chunkCount|integer(int64)|true|none|none|
|minTime|integer(int64)|true|none|none|
|maxTime|integer(int64)|true|none|none|

<h2 id="tocS_TSDBStat">TSDBStat</h2>
<!-- backwards compatibility -->
<a id="schematsdbstat"></a>
<a id="schema_TSDBStat"></a>
<a id="tocStsdbstat"></a>
<a id="tocstsdbstat"></a>

```json
{
  "name": "string",
  "value": 0
}
```

TSDB statistic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|value|integer(int64)|true|none|none|

<h2 id="tocS_TSDBStatus">TSDBStatus</h2>
<!-- backwards compatibility -->
<a id="schematsdbstatus"></a>
<a id="schema_TSDBStatus"></a>
<a id="tocStsdbstatus"></a>
<a id="tocstsdbstatus"></a>

```json
{
  "headStats": {
    "numSeries": 0,
    "numLabelPairs": 0,
    "chunkCount": 0,
    "minTime": 0,
    "maxTime": 0
  },
  "seriesCountByMetricName": [
    {
      "name": "string",
      "value": 0
    }
  ],
  "labelValueCountByLabelName": [
    {
      "name": "string",
      "value": 0
    }
  ],
  "memoryInBytesByLabelName": [
    {
      "name": "string",
      "value": 0
    }
  ],
  "seriesCountByLabelValuePair": [
    {
      "name": "string",
      "value": 0
    }
  ]
}
```

TSDB status information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headStats|[HeadStats](#schemaheadstats)|true|none|TSDB head statistics.|
|seriesCountByMetricName|[[TSDBStat](#schematsdbstat)]|true|none|none|
|labelValueCountByLabelName|[[TSDBStat](#schematsdbstat)]|true|none|none|
|memoryInBytesByLabelName|[[TSDBStat](#schematsdbstat)]|true|none|none|
|seriesCountByLabelValuePair|[[TSDBStat](#schematsdbstat)]|true|none|none|

<h2 id="tocS_StatusTSDBOutputBody">StatusTSDBOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemastatustsdboutputbody"></a>
<a id="schema_StatusTSDBOutputBody"></a>
<a id="tocSstatustsdboutputbody"></a>
<a id="tocsstatustsdboutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "headStats": {
      "numSeries": 0,
      "numLabelPairs": 0,
      "chunkCount": 0,
      "minTime": 0,
      "maxTime": 0
    },
    "seriesCountByMetricName": [
      {
        "name": "string",
        "value": 0
      }
    ],
    "labelValueCountByLabelName": [
      {
        "name": "string",
        "value": 0
      }
    ],
    "memoryInBytesByLabelName": [
      {
        "name": "string",
        "value": 0
      }
    ],
    "seriesCountByLabelValuePair": [
      {
        "name": "string",
        "value": 0
      }
    ]
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body for status TSDB endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[TSDBStatus](#schematsdbstatus)|true|none|TSDB status information.|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_BlockDesc">BlockDesc</h2>
<!-- backwards compatibility -->
<a id="schemablockdesc"></a>
<a id="schema_BlockDesc"></a>
<a id="tocSblockdesc"></a>
<a id="tocsblockdesc"></a>

```json
{
  "ulid": "string",
  "minTime": 0,
  "maxTime": 0
}
```

Block descriptor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ulid|string|true|none|none|
|minTime|integer(int64)|true|none|none|
|maxTime|integer(int64)|true|none|none|

<h2 id="tocS_BlockStats">BlockStats</h2>
<!-- backwards compatibility -->
<a id="schemablockstats"></a>
<a id="schema_BlockStats"></a>
<a id="tocSblockstats"></a>
<a id="tocsblockstats"></a>

```json
{
  "numSamples": 0,
  "numSeries": 0,
  "numChunks": 0,
  "numTombstones": 0,
  "numFloatSamples": 0,
  "numHistogramSamples": 0
}
```

Block statistics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numSamples|integer(int64)|false|none|none|
|numSeries|integer(int64)|false|none|none|
|numChunks|integer(int64)|false|none|none|
|numTombstones|integer(int64)|false|none|none|
|numFloatSamples|integer(int64)|false|none|none|
|numHistogramSamples|integer(int64)|false|none|none|

<h2 id="tocS_BlockMetaCompaction">BlockMetaCompaction</h2>
<!-- backwards compatibility -->
<a id="schemablockmetacompaction"></a>
<a id="schema_BlockMetaCompaction"></a>
<a id="tocSblockmetacompaction"></a>
<a id="tocsblockmetacompaction"></a>

```json
{
  "level": 0,
  "sources": [
    "string"
  ],
  "parents": [
    {
      "ulid": "string",
      "minTime": 0,
      "maxTime": 0
    }
  ],
  "failed": true,
  "deletable": true,
  "hints": [
    "string"
  ]
}
```

Block compaction metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|level|integer(int64)|true|none|none|
|sources|[string]|false|none|none|
|parents|[[BlockDesc](#schemablockdesc)]|false|none|none|
|failed|boolean|false|none|none|
|deletable|boolean|false|none|none|
|hints|[string]|false|none|none|

<h2 id="tocS_BlockMeta">BlockMeta</h2>
<!-- backwards compatibility -->
<a id="schemablockmeta"></a>
<a id="schema_BlockMeta"></a>
<a id="tocSblockmeta"></a>
<a id="tocsblockmeta"></a>

```json
{
  "ulid": "string",
  "minTime": 0,
  "maxTime": 0,
  "stats": {
    "numSamples": 0,
    "numSeries": 0,
    "numChunks": 0,
    "numTombstones": 0,
    "numFloatSamples": 0,
    "numHistogramSamples": 0
  },
  "compaction": {
    "level": 0,
    "sources": [
      "string"
    ],
    "parents": [
      {
        "ulid": "string",
        "minTime": 0,
        "maxTime": 0
      }
    ],
    "failed": true,
    "deletable": true,
    "hints": [
      "string"
    ]
  },
  "version": 0
}
```

Block metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ulid|string|true|none|none|
|minTime|integer(int64)|true|none|none|
|maxTime|integer(int64)|true|none|none|
|stats|[BlockStats](#schemablockstats)|false|none|Block statistics.|
|compaction|[BlockMetaCompaction](#schemablockmetacompaction)|true|none|Block compaction metadata.|
|version|integer(int64)|true|none|none|

<h2 id="tocS_StatusTSDBBlocksData">StatusTSDBBlocksData</h2>
<!-- backwards compatibility -->
<a id="schemastatustsdbblocksdata"></a>
<a id="schema_StatusTSDBBlocksData"></a>
<a id="tocSstatustsdbblocksdata"></a>
<a id="tocsstatustsdbblocksdata"></a>

```json
{
  "blocks": [
    {
      "ulid": "string",
      "minTime": 0,
      "maxTime": 0,
      "stats": {
        "numSamples": 0,
        "numSeries": 0,
        "numChunks": 0,
        "numTombstones": 0,
        "numFloatSamples": 0,
        "numHistogramSamples": 0
      },
      "compaction": {
        "level": 0,
        "sources": [
          "string"
        ],
        "parents": [
          {
            "ulid": "string",
            "minTime": 0,
            "maxTime": 0
          }
        ],
        "failed": true,
        "deletable": true,
        "hints": [
          "string"
        ]
      },
      "version": 0
    }
  ]
}
```

TSDB blocks information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocks|[[BlockMeta](#schemablockmeta)]|true|none|none|

<h2 id="tocS_StatusTSDBBlocksOutputBody">StatusTSDBBlocksOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemastatustsdbblocksoutputbody"></a>
<a id="schema_StatusTSDBBlocksOutputBody"></a>
<a id="tocSstatustsdbblocksoutputbody"></a>
<a id="tocsstatustsdbblocksoutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "blocks": [
      {
        "ulid": "string",
        "minTime": 0,
        "maxTime": 0,
        "stats": {
          "numSamples": 0,
          "numSeries": 0,
          "numChunks": 0,
          "numTombstones": 0,
          "numFloatSamples": 0,
          "numHistogramSamples": 0
        },
        "compaction": {
          "level": 0,
          "sources": [
            "string"
          ],
          "parents": [
            {
              "ulid": "string",
              "minTime": 0,
              "maxTime": 0
            }
          ],
          "failed": true,
          "deletable": true,
          "hints": [
            "string"
          ]
        },
        "version": 0
      }
    ]
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body for status TSDB blocks endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[StatusTSDBBlocksData](#schemastatustsdbblocksdata)|true|none|TSDB blocks information.|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_StatusWALReplayData">StatusWALReplayData</h2>
<!-- backwards compatibility -->
<a id="schemastatuswalreplaydata"></a>
<a id="schema_StatusWALReplayData"></a>
<a id="tocSstatuswalreplaydata"></a>
<a id="tocsstatuswalreplaydata"></a>

```json
{
  "min": 0,
  "max": 0,
  "current": 0
}
```

WAL replay status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|min|integer(int64)|true|none|none|
|max|integer(int64)|true|none|none|
|current|integer(int64)|true|none|none|

<h2 id="tocS_StatusWALReplayOutputBody">StatusWALReplayOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemastatuswalreplayoutputbody"></a>
<a id="schema_StatusWALReplayOutputBody"></a>
<a id="tocSstatuswalreplayoutputbody"></a>
<a id="tocsstatuswalreplayoutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "min": 0,
    "max": 0,
    "current": 0
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body for status WAL replay endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[StatusWALReplayData](#schemastatuswalreplaydata)|true|none|WAL replay status.|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_StatusSelfMetricsOutputBody">StatusSelfMetricsOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemastatusselfmetricsoutputbody"></a>
<a id="schema_StatusSelfMetricsOutputBody"></a>
<a id="tocSstatusselfmetricsoutputbody"></a>
<a id="tocsstatusselfmetricsoutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "result": "ok"
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Generic response body.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|object|true|none|Response data (structure varies by endpoint).|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_DeleteSeriesOutputBody">DeleteSeriesOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemadeleteseriesoutputbody"></a>
<a id="schema_DeleteSeriesOutputBody"></a>
<a id="tocSdeleteseriesoutputbody"></a>
<a id="tocsdeleteseriesoutputbody"></a>

```json
{
  "status": "success",
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body containing only status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_CleanTombstonesOutputBody">CleanTombstonesOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemacleantombstonesoutputbody"></a>
<a id="schema_CleanTombstonesOutputBody"></a>
<a id="tocScleantombstonesoutputbody"></a>
<a id="tocscleantombstonesoutputbody"></a>

```json
{
  "status": "success",
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body containing only status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_DataStruct">DataStruct</h2>
<!-- backwards compatibility -->
<a id="schemadatastruct"></a>
<a id="schema_DataStruct"></a>
<a id="tocSdatastruct"></a>
<a id="tocsdatastruct"></a>

```json
{
  "name": "string"
}
```

Generic data structure with a name field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|

<h2 id="tocS_SnapshotOutputBody">SnapshotOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotoutputbody"></a>
<a id="schema_SnapshotOutputBody"></a>
<a id="tocSsnapshotoutputbody"></a>
<a id="tocssnapshotoutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "name": "string"
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body for snapshot endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[DataStruct](#schemadatastruct)|true|none|Generic data structure with a name field.|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "text": "string",
  "date": "1970-01-01T00:00:00Z",
  "active": true
}
```

Server notification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|none|
|date|string(date-time)|true|none|none|
|active|boolean|true|none|none|

<h2 id="tocS_NotificationsOutputBody">NotificationsOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemanotificationsoutputbody"></a>
<a id="schema_NotificationsOutputBody"></a>
<a id="tocSnotificationsoutputbody"></a>
<a id="tocsnotificationsoutputbody"></a>

```json
{
  "status": "success",
  "data": [
    {
      "active": true,
      "date": "2023-07-21T20:00:00.000Z",
      "text": "Server is running"
    }
  ],
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Response body with an array of notifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|[[Notification](#schemanotification)]|true|none|none|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_FeaturesOutputBody">FeaturesOutputBody</h2>
<!-- backwards compatibility -->
<a id="schemafeaturesoutputbody"></a>
<a id="schema_FeaturesOutputBody"></a>
<a id="tocSfeaturesoutputbody"></a>
<a id="tocsfeaturesoutputbody"></a>

```json
{
  "status": "success",
  "data": {
    "result": "ok"
  },
  "warnings": [
    "string"
  ],
  "infos": [
    "string"
  ]
}
```

Generic response body.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status.|
|data|object|true|none|Response data (structure varies by endpoint).|
|warnings|[string]|false|none|Only set if there were warnings while executing the request. There will still be data in the data field.|
|infos|[string]|false|none|Only set if there were info-level annotations while executing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|
