<h1 id="supabase-api-v1">Supabase API (v1) v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Supabase API generated from the OpenAPI specification.<br>Visit [https://supabase.com/docs](https://supabase.com/docs) for a complete documentation.

Base URLs:

* <a href="https://api.supabase.com">https://api.supabase.com</a>

# Authentication

- HTTP Authentication, scheme: bearer

- oAuth2 authentication. OAuth 2.0 authorization code flow for Supabase OAuth apps. Tokens carry the scopes approved for the app by the organization.

    - Flow: authorizationCode
    - Authorization URL = [https://api.supabase.com/v1/oauth/authorize](https://api.supabase.com/v1/oauth/authorize)
    - Token URL = [https://api.supabase.com/v1/oauth/token](https://api.supabase.com/v1/oauth/token)

|Scope|Scope Description|
|---|---|
|analytics:read|Read access to analytics|
|analytics:write|Write access to analytics|
|analytics_config:read|Read access to analytics config|
|analytics_config:write|Write access to analytics config|
|auth:read|Read access to auth|
|auth:write|Write access to auth|
|database:read|Read access to database|
|database:write|Write access to database|
|domains:read|Read access to domains|
|domains:write|Write access to domains|
|edge_functions:read|Read access to edge functions|
|edge_functions:write|Write access to edge functions|
|environment:read|Read access to environment|
|environment:write|Write access to environment|
|organizations:read|Read access to organizations|
|organizations:write|Write access to organizations|
|projects:read|Read access to projects|
|projects:write|Write access to projects|
|rest:read|Read access to rest|
|rest:write|Write access to rest|
|secrets:read|Read access to secrets|
|secrets:write|Write access to secrets|
|storage:read|Read access to storage|
|storage:write|Write access to storage|

<h1 id="supabase-api-v1-advisors">Advisors</h1>

Advisors related endpoints

## Gets project performance advisors.

<a id="opIdv1-get-performance-advisors"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/advisors/performance \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/advisors/performance`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

<h3 id="gets-project-performance-advisors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "lints": [
    {
      "name": "unindexed_foreign_keys",
      "title": "string",
      "level": "ERROR",
      "facing": "EXTERNAL",
      "categories": [
        "PERFORMANCE"
      ],
      "description": "string",
      "detail": "string",
      "remediation": "string",
      "metadata": {
        "schema": "string",
        "name": "string",
        "entity": "string",
        "type": "table",
        "fkey_name": "string",
        "fkey_columns": [
          0
        ]
      },
      "cache_key": "string",
      "observed_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="gets-project-performance-advisors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[V1ProjectAdvisorsResponse_Output](#schemav1projectadvisorsresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets project security advisors.

<a id="opIdv1-get-security-advisors"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/advisors/security \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/advisors/security`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

<h3 id="gets-project-security-advisors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|lint_type|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lint_type|sql|

> Example responses

> 200 Response

```json
{
  "lints": [
    {
      "name": "unindexed_foreign_keys",
      "title": "string",
      "level": "ERROR",
      "facing": "EXTERNAL",
      "categories": [
        "PERFORMANCE"
      ],
      "description": "string",
      "detail": "string",
      "remediation": "string",
      "metadata": {
        "schema": "string",
        "name": "string",
        "entity": "string",
        "type": "table",
        "fkey_name": "string",
        "fkey_columns": [
          0
        ]
      },
      "cache_key": "string",
      "observed_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="gets-project-security-advisors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[V1ProjectAdvisorsResponse_Output](#schemav1projectadvisorsresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="supabase-api-v1-analytics">Analytics</h1>

Analytics related endpoints

## Gets project's logs

<a id="opIdv1-get-project-logs-all"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/analytics/endpoints/logs.all \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/analytics/endpoints/logs.all`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint has been removed and always responds with `410 Gone`. Use `GET /v1/projects/{ref}/analytics/endpoints/logs` instead. See the [migration guide](https://supabase.com/changelog/48235-migration-of-supabase-management-api-logs-all-analytics-endpoint-to-logs-endpoint).

<h3 id="gets-projects-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

<h3 id="gets-projects-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|410|Gone|This endpoint has been removed|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets all project's logs in a single log stream

<a id="opIdv1-get-project-logs"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/analytics/endpoints/logs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/analytics/endpoints/logs`

Executes an SQL or LQL query on the project's unified logs stream.

Either the `iso_timestamp_start` and `iso_timestamp_end` parameters must be provided.
If both are not provided, only the last 1 minute of logs will be queried.
The timestamp range must be no more than 24 hours and is rounded to the nearest minute. If the range is more than 24 hours, a validation error will be thrown.

Filter by the `source` column to specify specific log sources, such as edge_logs, postgres_logs, etc.

Note: SQL must be written in **ClickHouse SQL dialect**.


<h3 id="gets-all-projects-logs-in-a-single-log-stream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|sql|query|string|false|Custom SQL query to execute on the logs. See [querying logs](https://supabase.com/docs/guides/monitoring-and-debugging/logs#querying-with-the-logs-explorer) for more details.|
|iso_timestamp_start|query|string(date-time)|false|none|
|iso_timestamp_end|query|string(date-time)|false|none|

> Example responses

> 200 Response

```json
{
  "result": [
    null
  ],
  "error": "string"
}
```

<h3 id="gets-all-projects-logs-in-a-single-log-stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AnalyticsResponse_Output](#schemaanalyticsresponse_output)|
|401|Unauthorized|Unauthorized|None|
|402|Payment Required|Usage exceeded. Enable additional usage to continue querying|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets project's usage api counts

<a id="opIdv1-get-project-usage-api-count"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/analytics/endpoints/usage.api-counts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/analytics/endpoints/usage.api-counts`

<h3 id="gets-projects-usage-api-counts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|interval|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|interval|15min|
|interval|30min|
|interval|1hr|
|interval|3hr|
|interval|1day|
|interval|3day|
|interval|7day|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "timestamp": "1970-01-01T00:00:00Z",
      "total_auth_requests": 0,
      "total_realtime_requests": 0,
      "total_rest_requests": 0,
      "total_storage_requests": 0
    }
  ],
  "error": "string"
}
```

<h3 id="gets-projects-usage-api-counts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[V1GetUsageApiCountResponse_Output](#schemav1getusageapicountresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to get project's usage api counts|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets project's usage api requests count

<a id="opIdv1-get-project-usage-request-count"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/analytics/endpoints/usage.api-requests-count \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/analytics/endpoints/usage.api-requests-count`

<h3 id="gets-projects-usage-api-requests-count-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "count": 0
    }
  ],
  "error": "string"
}
```

<h3 id="gets-projects-usage-api-requests-count-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[V1GetUsageApiRequestsCountResponse_Output](#schemav1getusageapirequestscountresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to get project's usage api requests count|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets a project's function combined statistics

<a id="opIdv1-get-project-function-combined-stats"></a>

> Code samples

```bash
curl 'https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/analytics/endpoints/functions.combined-stats?interval=1hr&function_id=3c078cce-ad70-4148-9f37-4da362789053' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/analytics/endpoints/functions.combined-stats`

<h3 id="gets-a-projects-function-combined-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|interval|query|string|true|none|
|function_id|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|interval|15min|
|interval|1hr|
|interval|3hr|
|interval|1day|

> Example responses

> 200 Response

```json
{
  "result": [
    null
  ],
  "error": "string"
}
```

<h3 id="gets-a-projects-function-combined-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AnalyticsResponse_Output](#schemaanalyticsresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to get project's function combined statistics|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Scrape a project's metrics

<a id="opIdv1-scrape-project-metrics"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/analytics/endpoints/metrics \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/analytics/endpoints/metrics`

Prometheus scrape endpoint. Returns metrics of a customer project in the Prometheus open exposition format.

<h3 id="scrape-a-projects-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

<h3 id="scrape-a-projects-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Prometheus / OpenMetrics text exposition|Inline|
|400|Bad Request|Project must be active and healthy, or metrics are not available for this project|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to fetch project's metrics|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="supabase-api-v1-auth">Auth</h1>

Auth related endpoints

## Get the signing key information for the JWT secret imported as signing key for this project. This endpoint will be removed in the future, check for HTTP 404 Not Found.

<a id="opIdv1-get-legacy-signing-key"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/auth/signing-keys/legacy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/config/auth/signing-keys/legacy`

<h3 id="get-the-signing-key-information-for-the-jwt-secret-imported-as-signing-key-for-this-project-this-endpoint-will-be-removed-in-the-future-check-for-http-404-not-found-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "algorithm": "EdDSA",
  "status": "in_use",
  "public_jwk": null,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-the-signing-key-information-for-the-jwt-secret-imported-as-signing-key-for-this-project-this-endpoint-will-be-removed-in-the-future-check-for-http-404-not-found-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SigningKeyResponse_Output](#schemasigningkeyresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Set up the project's existing JWT secret as an in_use JWT signing key. This endpoint will be removed in the future always check for HTTP 404 Not Found.

<a id="opIdv1-create-legacy-signing-key"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/auth/signing-keys/legacy \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/projects/{ref}/config/auth/signing-keys/legacy`

<h3 id="set-up-the-projects-existing-jwt-secret-as-an-inuse-jwt-signing-key-this-endpoint-will-be-removed-in-the-future-always-check-for-http-404-not-found-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 201 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "algorithm": "EdDSA",
  "status": "in_use",
  "public_jwk": null,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="set-up-the-projects-existing-jwt-secret-as-an-inuse-jwt-signing-key-this-endpoint-will-be-removed-in-the-future-always-check-for-http-404-not-found-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[SigningKeyResponse_Output](#schemasigningkeyresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## List all signing keys for the project

<a id="opIdv1-get-project-signing-keys"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/auth/signing-keys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/config/auth/signing-keys`

<h3 id="list-all-signing-keys-for-the-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "keys": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "algorithm": "EdDSA",
      "status": "in_use",
      "public_jwk": null,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-all-signing-keys-for-the-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SigningKeysResponse_Output](#schemasigningkeysresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Create a new signing key for the project in standby status

<a id="opIdv1-create-project-signing-key"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/auth/signing-keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "algorithm": "RS256",
    "status": "standby"
  }'
```

`POST /v1/projects/{ref}/config/auth/signing-keys`

> Body parameter

```json
{
  "algorithm": "RS256",
  "status": "standby"
}
```

<h3 id="create-a-new-signing-key-for-the-project-in-standby-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[CreateSigningKeyBody](#schemacreatesigningkeybody)|true|none|
|» algorithm|body|string|true|none|
|» status|body|string|false|none|
|» private_jwk|body|object|false|none|
|» » *oneOf*|body|object|false|none|
|» » kid|body|string(uuid)|false|none|
|» » use|body|string|false|none|
|» » key_ops|body|[string]|false|none|
|» » ext|body|boolean|false|none|
|» » kty|body|string|true|none|
|» » alg|body|string|false|none|
|» » n|body|string|true|none|
|» » e|body|string|true|none|
|» » d|body|string|true|none|
|» » p|body|string|true|none|
|» » q|body|string|true|none|
|» » dp|body|string|true|none|
|» » dq|body|string|true|none|
|» » qi|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » kid|body|string(uuid)|false|none|
|» » use|body|string|false|none|
|» » key_ops|body|[string]|false|none|
|» » ext|body|boolean|false|none|
|» » kty|body|string|true|none|
|» » alg|body|string|false|none|
|» » crv|body|string|true|none|
|» » x|body|string|true|none|
|» » y|body|string|true|none|
|» » d|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » kid|body|string(uuid)|false|none|
|» » use|body|string|false|none|
|» » key_ops|body|[string]|false|none|
|» » ext|body|boolean|false|none|
|» » kty|body|string|true|none|
|» » alg|body|string|false|none|
|» » crv|body|string|true|none|
|» » x|body|string|true|none|
|» » d|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » kid|body|string(uuid)|false|none|
|» » use|body|string|false|none|
|» » key_ops|body|[string]|false|none|
|» » ext|body|boolean|false|none|
|» » kty|body|string|true|none|
|» » alg|body|string|false|none|
|» » k|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» algorithm|EdDSA|
|» algorithm|ES256|
|» algorithm|RS256|
|» algorithm|HS256|
|» status|in_use|
|» status|standby|
|» » use|sig|
|» » key_ops|sign|
|» » key_ops|verify|
|» » ext|true|
|» » kty|RSA|
|» » alg|RS256|
|» » e|AQAB|
|» » use|sig|
|» » key_ops|sign|
|» » key_ops|verify|
|» » ext|true|
|» » kty|EC|
|» » alg|ES256|
|» » crv|P-256|
|» » use|sig|
|» » key_ops|sign|
|» » key_ops|verify|
|» » ext|true|
|» » kty|OKP|
|» » alg|EdDSA|
|» » crv|Ed25519|
|» » use|sig|
|» » key_ops|sign|
|» » key_ops|verify|
|» » ext|true|
|» » kty|oct|
|» » alg|HS256|

> Example responses

> 201 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "algorithm": "EdDSA",
  "status": "in_use",
  "public_jwk": null,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-a-new-signing-key-for-the-project-in-standby-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[SigningKeyResponse_Output](#schemasigningkeyresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get information about a signing key

<a id="opIdv1-get-project-signing-key"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/auth/signing-keys/33333333-3333-4333-8333-333333333333 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/config/auth/signing-keys/{id}`

<h3 id="get-information-about-a-signing-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "algorithm": "EdDSA",
  "status": "in_use",
  "public_jwk": null,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-information-about-a-signing-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SigningKeyResponse_Output](#schemasigningkeyresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Remove a signing key from a project. Only possible if the key has been in revoked status for a while.

<a id="opIdv1-remove-project-signing-key"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/auth/signing-keys/33333333-3333-4333-8333-333333333333 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/projects/{ref}/config/auth/signing-keys/{id}`

<h3 id="remove-a-signing-key-from-a-project-only-possible-if-the-key-has-been-in-revoked-status-for-a-while-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "algorithm": "EdDSA",
  "status": "in_use",
  "public_jwk": null,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="remove-a-signing-key-from-a-project-only-possible-if-the-key-has-been-in-revoked-status-for-a-while-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SigningKeyResponse_Output](#schemasigningkeyresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Update a signing key, mainly its status

<a id="opIdv1-update-project-signing-key"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/auth/signing-keys/33333333-3333-4333-8333-333333333333 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "status": "standby"
  }'
```

`PATCH /v1/projects/{ref}/config/auth/signing-keys/{id}`

> Body parameter

```json
{
  "status": "standby"
}
```

<h3 id="update-a-signing-key-mainly-its-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|ref|path|string|true|Project ref|
|body|body|[UpdateSigningKeyBody](#schemaupdatesigningkeybody)|true|none|
|» status|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|in_use|
|» status|previously_used|
|» status|revoked|
|» status|standby|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "algorithm": "EdDSA",
  "status": "in_use",
  "public_jwk": null,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-a-signing-key-mainly-its-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SigningKeyResponse_Output](#schemasigningkeyresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets project's auth config

<a id="opIdv1-get-auth-service-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/auth \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/config/auth`

<h3 id="gets-projects-auth-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "api_max_request_duration": -9007199254740000,
  "db_max_pool_size": -9007199254740000,
  "db_max_pool_size_unit": "connections",
  "disable_signup": true,
  "external_anonymous_users_enabled": true,
  "external_apple_additional_client_ids": "string",
  "external_apple_client_id": "string",
  "external_apple_email_optional": true,
  "external_apple_enabled": true,
  "external_apple_secret": "string",
  "external_azure_client_id": "string",
  "external_azure_email_optional": true,
  "external_azure_enabled": true,
  "external_azure_secret": "string",
  "external_azure_url": "string",
  "external_bitbucket_client_id": "string",
  "external_bitbucket_email_optional": true,
  "external_bitbucket_enabled": true,
  "external_bitbucket_secret": "string",
  "external_discord_client_id": "string",
  "external_discord_email_optional": true,
  "external_discord_enabled": true,
  "external_discord_secret": "string",
  "external_email_enabled": true,
  "external_facebook_client_id": "string",
  "external_facebook_email_optional": true,
  "external_facebook_enabled": true,
  "external_facebook_secret": "string",
  "external_figma_client_id": "string",
  "external_figma_email_optional": true,
  "external_figma_enabled": true,
  "external_figma_secret": "string",
  "external_github_client_id": "string",
  "external_github_email_optional": true,
  "external_github_enabled": true,
  "external_github_secret": "string",
  "external_gitlab_client_id": "string",
  "external_gitlab_email_optional": true,
  "external_gitlab_enabled": true,
  "external_gitlab_secret": "string",
  "external_gitlab_url": "string",
  "external_google_additional_client_ids": "string",
  "external_google_client_id": "string",
  "external_google_email_optional": true,
  "external_google_enabled": true,
  "external_google_secret": "string",
  "external_google_skip_nonce_check": true,
  "external_kakao_client_id": "string",
  "external_kakao_email_optional": true,
  "external_kakao_enabled": true,
  "external_kakao_secret": "string",
  "external_keycloak_client_id": "string",
  "external_keycloak_email_optional": true,
  "external_keycloak_enabled": true,
  "external_keycloak_secret": "string",
  "external_keycloak_url": "string",
  "external_linkedin_oidc_client_id": "string",
  "external_linkedin_oidc_email_optional": true,
  "external_linkedin_oidc_enabled": true,
  "external_linkedin_oidc_secret": "string",
  "external_slack_oidc_client_id": "string",
  "external_slack_oidc_email_optional": true,
  "external_slack_oidc_enabled": true,
  "external_slack_oidc_secret": "string",
  "external_notion_client_id": "string",
  "external_notion_email_optional": true,
  "external_notion_enabled": true,
  "external_notion_secret": "string",
  "external_phone_enabled": true,
  "external_slack_client_id": "string",
  "external_slack_email_optional": true,
  "external_slack_enabled": true,
  "external_slack_secret": "string",
  "external_spotify_client_id": "string",
  "external_spotify_email_optional": true,
  "external_spotify_enabled": true,
  "external_spotify_secret": "string",
  "external_twitch_client_id": "string",
  "external_twitch_email_optional": true,
  "external_twitch_enabled": true,
  "external_twitch_secret": "string",
  "external_twitter_client_id": "string",
  "external_twitter_email_optional": true,
  "external_twitter_enabled": true,
  "external_twitter_secret": "string",
  "external_x_client_id": "string",
  "external_x_email_optional": true,
  "external_x_enabled": true,
  "external_x_secret": "string",
  "external_workos_client_id": "string",
  "external_workos_enabled": true,
  "external_workos_secret": "string",
  "external_workos_url": "string",
  "external_web3_solana_enabled": true,
  "external_web3_ethereum_enabled": true,
  "external_zoom_client_id": "string",
  "external_zoom_email_optional": true,
  "external_zoom_enabled": true,
  "external_zoom_secret": "string",
  "hook_custom_access_token_enabled": true,
  "hook_custom_access_token_uri": "string",
  "hook_custom_access_token_secrets": "string",
  "hook_mfa_verification_attempt_enabled": true,
  "hook_mfa_verification_attempt_uri": "string",
  "hook_mfa_verification_attempt_secrets": "string",
  "hook_password_verification_attempt_enabled": true,
  "hook_password_verification_attempt_uri": "string",
  "hook_password_verification_attempt_secrets": "string",
  "hook_send_sms_enabled": true,
  "hook_send_sms_uri": "string",
  "hook_send_sms_secrets": "string",
  "hook_send_email_enabled": true,
  "hook_send_email_uri": "string",
  "hook_send_email_secrets": "string",
  "hook_before_user_created_enabled": true,
  "hook_before_user_created_uri": "string",
  "hook_before_user_created_secrets": "string",
  "hook_after_user_created_enabled": true,
  "hook_after_user_created_uri": "string",
  "hook_after_user_created_secrets": "string",
  "jwt_exp": -9007199254740000,
  "mailer_allow_unverified_email_sign_ins": true,
  "mailer_autoconfirm": true,
  "mailer_otp_exp": -9007199254740000,
  "mailer_otp_length": -9007199254740000,
  "mailer_secure_email_change_enabled": true,
  "mailer_subjects_confirmation": "string",
  "mailer_subjects_email_change": "string",
  "mailer_subjects_invite": "string",
  "mailer_subjects_magic_link": "string",
  "mailer_subjects_reauthentication": "string",
  "mailer_subjects_recovery": "string",
  "mailer_subjects_password_changed_notification": "string",
  "mailer_subjects_email_changed_notification": "string",
  "mailer_subjects_phone_changed_notification": "string",
  "mailer_subjects_mfa_factor_enrolled_notification": "string",
  "mailer_subjects_mfa_factor_unenrolled_notification": "string",
  "mailer_subjects_identity_linked_notification": "string",
  "mailer_subjects_identity_unlinked_notification": "string",
  "mailer_templates_confirmation_content": "string",
  "mailer_templates_email_change_content": "string",
  "mailer_templates_invite_content": "string",
  "mailer_templates_magic_link_content": "string",
  "mailer_templates_reauthentication_content": "string",
  "mailer_templates_recovery_content": "string",
  "mailer_templates_password_changed_notification_content": "string",
  "mailer_templates_email_changed_notification_content": "string",
  "mailer_templates_phone_changed_notification_content": "string",
  "mailer_templates_mfa_factor_enrolled_notification_content": "string",
  "mailer_templates_mfa_factor_unenrolled_notification_content": "string",
  "mailer_templates_identity_linked_notification_content": "string",
  "mailer_templates_identity_unlinked_notification_content": "string",
  "mailer_notifications_password_changed_enabled": true,
  "mailer_notifications_email_changed_enabled": true,
  "mailer_notifications_phone_changed_enabled": true,
  "mailer_notifications_mfa_factor_enrolled_enabled": true,
  "mailer_notifications_mfa_factor_unenrolled_enabled": true,
  "mailer_notifications_identity_linked_enabled": true,
  "mailer_notifications_identity_unlinked_enabled": true,
  "mfa_max_enrolled_factors": -9007199254740000,
  "mfa_totp_enroll_enabled": true,
  "mfa_totp_verify_enabled": true,
  "mfa_phone_enroll_enabled": true,
  "mfa_phone_verify_enabled": true,
  "mfa_web_authn_enroll_enabled": true,
  "mfa_web_authn_verify_enabled": true,
  "passkey_enabled": true,
  "webauthn_rp_display_name": "string",
  "webauthn_rp_id": "string",
  "webauthn_rp_origins": "string",
  "mfa_phone_otp_length": -9007199254740000,
  "mfa_phone_template": "string",
  "mfa_phone_max_frequency": -9007199254740000,
  "nimbus_oauth_client_id": "string",
  "nimbus_oauth_email_optional": true,
  "nimbus_oauth_client_secret": "string",
  "password_hibp_enabled": true,
  "password_min_length": -9007199254740000,
  "password_required_characters": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789",
  "rate_limit_anonymous_users": -9007199254740000,
  "rate_limit_email_sent": -9007199254740000,
  "rate_limit_sms_sent": -9007199254740000,
  "rate_limit_token_refresh": -9007199254740000,
  "rate_limit_verify": -9007199254740000,
  "rate_limit_otp": -9007199254740000,
  "rate_limit_web3": -9007199254740000,
  "refresh_token_rotation_enabled": true,
  "saml_enabled": true,
  "saml_external_url": "string",
  "saml_allow_encrypted_assertions": true,
  "security_sb_forwarded_for_enabled": true,
  "security_captcha_enabled": true,
  "security_captcha_provider": "turnstile",
  "security_captcha_secret": "string",
  "security_manual_linking_enabled": true,
  "security_refresh_token_reuse_interval": -9007199254740000,
  "security_update_password_require_current_password": true,
  "security_update_password_require_reauthentication": true,
  "sessions_inactivity_timeout": 0,
  "sessions_single_per_user": true,
  "sessions_tags": "string",
  "sessions_timebox": 0,
  "site_url": "string",
  "sms_autoconfirm": true,
  "sms_max_frequency": -9007199254740000,
  "sms_messagebird_access_key": "string",
  "sms_messagebird_originator": "string",
  "sms_otp_exp": -9007199254740000,
  "sms_otp_length": -9007199254740000,
  "sms_provider": "messagebird",
  "sms_template": "string",
  "sms_test_otp": "string",
  "sms_test_otp_valid_until": "1970-01-01T00:00:00Z",
  "sms_textlocal_api_key": "string",
  "sms_textlocal_sender": "string",
  "sms_twilio_account_sid": "string",
  "sms_twilio_auth_token": "string",
  "sms_twilio_content_sid": "string",
  "sms_twilio_message_service_sid": "string",
  "sms_twilio_verify_account_sid": "string",
  "sms_twilio_verify_auth_token": "string",
  "sms_twilio_verify_message_service_sid": "string",
  "sms_vonage_api_key": "string",
  "sms_vonage_api_secret": "string",
  "sms_vonage_from": "string",
  "smtp_admin_email": "user@example.com",
  "smtp_host": "string",
  "smtp_max_frequency": -9007199254740000,
  "smtp_pass": "string",
  "smtp_port": "string",
  "smtp_sender_name": "string",
  "smtp_user": "string",
  "uri_allow_list": "string",
  "oauth_server_enabled": true,
  "oauth_server_allow_dynamic_registration": true,
  "oauth_server_authorization_path": "string",
  "custom_oauth_enabled": true,
  "custom_oauth_max_providers": -9007199254740000
}
```

<h3 id="gets-projects-auth-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AuthConfigResponse_Output](#schemaauthconfigresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve project's auth config|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Updates a project's auth config

<a id="opIdv1-update-auth-service-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/auth \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "site_url": "https://app.example.com",
    "disable_signup": false,
    "jwt_exp": 3600
  }'
```

`PATCH /v1/projects/{ref}/config/auth`

> Body parameter

```json
{
  "site_url": "https://app.example.com",
  "disable_signup": false,
  "jwt_exp": 3600
}
```

<h3 id="updates-a-projects-auth-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[UpdateAuthConfigBody](#schemaupdateauthconfigbody)|true|none|
|» site_url|body|string \| null|false|none|
|» disable_signup|body|boolean \| null|false|none|
|» jwt_exp|body|integer \| null|false|none|
|» smtp_admin_email|body|string(email) \| null|false|none|
|» smtp_host|body|string \| null|false|none|
|» smtp_port|body|string \| null|false|none|
|» smtp_user|body|string \| null|false|none|
|» smtp_pass|body|string \| null|false|none|
|» smtp_max_frequency|body|integer \| null|false|none|
|» smtp_sender_name|body|string \| null|false|none|
|» mailer_allow_unverified_email_sign_ins|body|boolean \| null|false|none|
|» mailer_autoconfirm|body|boolean \| null|false|none|
|» mailer_subjects_invite|body|string \| null|false|none|
|» mailer_subjects_confirmation|body|string \| null|false|none|
|» mailer_subjects_recovery|body|string \| null|false|none|
|» mailer_subjects_email_change|body|string \| null|false|none|
|» mailer_subjects_magic_link|body|string \| null|false|none|
|» mailer_subjects_reauthentication|body|string \| null|false|none|
|» mailer_subjects_password_changed_notification|body|string \| null|false|none|
|» mailer_subjects_email_changed_notification|body|string \| null|false|none|
|» mailer_subjects_phone_changed_notification|body|string \| null|false|none|
|» mailer_subjects_mfa_factor_enrolled_notification|body|string \| null|false|none|
|» mailer_subjects_mfa_factor_unenrolled_notification|body|string \| null|false|none|
|» mailer_subjects_identity_linked_notification|body|string \| null|false|none|
|» mailer_subjects_identity_unlinked_notification|body|string \| null|false|none|
|» mailer_templates_invite_content|body|string \| null|false|none|
|» mailer_templates_confirmation_content|body|string \| null|false|none|
|» mailer_templates_recovery_content|body|string \| null|false|none|
|» mailer_templates_email_change_content|body|string \| null|false|none|
|» mailer_templates_magic_link_content|body|string \| null|false|none|
|» mailer_templates_reauthentication_content|body|string \| null|false|none|
|» mailer_templates_password_changed_notification_content|body|string \| null|false|none|
|» mailer_templates_email_changed_notification_content|body|string \| null|false|none|
|» mailer_templates_phone_changed_notification_content|body|string \| null|false|none|
|» mailer_templates_mfa_factor_enrolled_notification_content|body|string \| null|false|none|
|» mailer_templates_mfa_factor_unenrolled_notification_content|body|string \| null|false|none|
|» mailer_templates_identity_linked_notification_content|body|string \| null|false|none|
|» mailer_templates_identity_unlinked_notification_content|body|string \| null|false|none|
|» mailer_notifications_password_changed_enabled|body|boolean \| null|false|none|
|» mailer_notifications_email_changed_enabled|body|boolean \| null|false|none|
|» mailer_notifications_phone_changed_enabled|body|boolean \| null|false|none|
|» mailer_notifications_mfa_factor_enrolled_enabled|body|boolean \| null|false|none|
|» mailer_notifications_mfa_factor_unenrolled_enabled|body|boolean \| null|false|none|
|» mailer_notifications_identity_linked_enabled|body|boolean \| null|false|none|
|» mailer_notifications_identity_unlinked_enabled|body|boolean \| null|false|none|
|» mfa_max_enrolled_factors|body|integer \| null|false|none|
|» uri_allow_list|body|string \| null|false|none|
|» external_anonymous_users_enabled|body|boolean \| null|false|none|
|» external_email_enabled|body|boolean \| null|false|none|
|» external_phone_enabled|body|boolean \| null|false|none|
|» saml_enabled|body|boolean \| null|false|none|
|» saml_external_url|body|string \| null|false|none|
|» security_sb_forwarded_for_enabled|body|boolean \| null|false|none|
|» security_captcha_enabled|body|boolean \| null|false|none|
|» security_captcha_provider|body|string \| null|false|none|
|» security_captcha_secret|body|string \| null|false|none|
|» sessions_timebox|body|number \| null|false|Session timebox in hours. Maximum 8760 hours (1 year).|
|» sessions_inactivity_timeout|body|number \| null|false|Session inactivity timeout in hours. Maximum 8760 hours (1 year).|
|» sessions_single_per_user|body|boolean \| null|false|none|
|» sessions_tags|body|string \| null|false|none|
|» rate_limit_anonymous_users|body|integer \| null|false|none|
|» rate_limit_email_sent|body|integer \| null|false|none|
|» rate_limit_sms_sent|body|integer \| null|false|none|
|» rate_limit_verify|body|integer \| null|false|none|
|» rate_limit_token_refresh|body|integer \| null|false|none|
|» rate_limit_otp|body|integer \| null|false|none|
|» rate_limit_web3|body|integer \| null|false|none|
|» mailer_secure_email_change_enabled|body|boolean \| null|false|none|
|» refresh_token_rotation_enabled|body|boolean \| null|false|none|
|» password_hibp_enabled|body|boolean \| null|false|none|
|» password_min_length|body|integer \| null|false|none|
|» password_required_characters|body|string \| null|false|none|
|» security_manual_linking_enabled|body|boolean \| null|false|none|
|» security_update_password_require_reauthentication|body|boolean \| null|false|none|
|» security_update_password_require_current_password|body|boolean \| null|false|Require the user's current password when updating their password.|
|» security_refresh_token_reuse_interval|body|integer \| null|false|Refresh token reuse interval in seconds. Maximum 300 seconds (5 minutes).|
|» mailer_otp_exp|body|integer|false|none|
|» mailer_otp_length|body|integer \| null|false|none|
|» sms_autoconfirm|body|boolean \| null|false|none|
|» sms_max_frequency|body|integer \| null|false|none|
|» sms_otp_exp|body|integer \| null|false|none|
|» sms_otp_length|body|integer|false|none|
|» sms_provider|body|string \| null|false|none|
|» sms_messagebird_access_key|body|string \| null|false|none|
|» sms_messagebird_originator|body|string \| null|false|none|
|» sms_test_otp|body|string \| null|false|none|
|» sms_test_otp_valid_until|body|string(date-time) \| null|false|none|
|» sms_textlocal_api_key|body|string \| null|false|none|
|» sms_textlocal_sender|body|string \| null|false|none|
|» sms_twilio_account_sid|body|string \| null|false|none|
|» sms_twilio_auth_token|body|string \| null|false|none|
|» sms_twilio_content_sid|body|string \| null|false|none|
|» sms_twilio_message_service_sid|body|string \| null|false|none|
|» sms_twilio_verify_account_sid|body|string \| null|false|none|
|» sms_twilio_verify_auth_token|body|string \| null|false|none|
|» sms_twilio_verify_message_service_sid|body|string \| null|false|none|
|» sms_vonage_api_key|body|string \| null|false|none|
|» sms_vonage_api_secret|body|string \| null|false|none|
|» sms_vonage_from|body|string \| null|false|none|
|» sms_template|body|string \| null|false|none|
|» hook_mfa_verification_attempt_enabled|body|boolean \| null|false|none|
|» hook_mfa_verification_attempt_uri|body|string \| null|false|none|
|» hook_mfa_verification_attempt_secrets|body|string \| null|false|none|
|» hook_password_verification_attempt_enabled|body|boolean \| null|false|none|
|» hook_password_verification_attempt_uri|body|string \| null|false|none|
|» hook_password_verification_attempt_secrets|body|string \| null|false|none|
|» hook_custom_access_token_enabled|body|boolean \| null|false|none|
|» hook_custom_access_token_uri|body|string \| null|false|none|
|» hook_custom_access_token_secrets|body|string \| null|false|none|
|» hook_send_sms_enabled|body|boolean \| null|false|none|
|» hook_send_sms_uri|body|string \| null|false|none|
|» hook_send_sms_secrets|body|string \| null|false|none|
|» hook_send_email_enabled|body|boolean \| null|false|none|
|» hook_send_email_uri|body|string \| null|false|none|
|» hook_send_email_secrets|body|string \| null|false|none|
|» hook_before_user_created_enabled|body|boolean \| null|false|none|
|» hook_before_user_created_uri|body|string \| null|false|none|
|» hook_before_user_created_secrets|body|string \| null|false|none|
|» hook_after_user_created_enabled|body|boolean \| null|false|none|
|» hook_after_user_created_uri|body|string \| null|false|none|
|» hook_after_user_created_secrets|body|string \| null|false|none|
|» external_apple_enabled|body|boolean \| null|false|none|
|» external_apple_client_id|body|string \| null|false|none|
|» external_apple_email_optional|body|boolean \| null|false|none|
|» external_apple_secret|body|string \| null|false|none|
|» external_apple_additional_client_ids|body|string \| null|false|none|
|» external_azure_enabled|body|boolean \| null|false|none|
|» external_azure_client_id|body|string \| null|false|none|
|» external_azure_email_optional|body|boolean \| null|false|none|
|» external_azure_secret|body|string \| null|false|none|
|» external_azure_url|body|string \| null|false|none|
|» external_bitbucket_enabled|body|boolean \| null|false|none|
|» external_bitbucket_client_id|body|string \| null|false|none|
|» external_bitbucket_email_optional|body|boolean \| null|false|none|
|» external_bitbucket_secret|body|string \| null|false|none|
|» external_discord_enabled|body|boolean \| null|false|none|
|» external_discord_client_id|body|string \| null|false|none|
|» external_discord_email_optional|body|boolean \| null|false|none|
|» external_discord_secret|body|string \| null|false|none|
|» external_facebook_enabled|body|boolean \| null|false|none|
|» external_facebook_client_id|body|string \| null|false|none|
|» external_facebook_email_optional|body|boolean \| null|false|none|
|» external_facebook_secret|body|string \| null|false|none|
|» external_figma_enabled|body|boolean \| null|false|none|
|» external_figma_client_id|body|string \| null|false|none|
|» external_figma_email_optional|body|boolean \| null|false|none|
|» external_figma_secret|body|string \| null|false|none|
|» external_github_enabled|body|boolean \| null|false|none|
|» external_github_client_id|body|string \| null|false|none|
|» external_github_email_optional|body|boolean \| null|false|none|
|» external_github_secret|body|string \| null|false|none|
|» external_gitlab_enabled|body|boolean \| null|false|none|
|» external_gitlab_client_id|body|string \| null|false|none|
|» external_gitlab_email_optional|body|boolean \| null|false|none|
|» external_gitlab_secret|body|string \| null|false|none|
|» external_gitlab_url|body|string \| null|false|none|
|» external_google_enabled|body|boolean \| null|false|none|
|» external_google_client_id|body|string \| null|false|none|
|» external_google_email_optional|body|boolean \| null|false|none|
|» external_google_secret|body|string \| null|false|none|
|» external_google_additional_client_ids|body|string \| null|false|none|
|» external_google_skip_nonce_check|body|boolean \| null|false|none|
|» external_kakao_enabled|body|boolean \| null|false|none|
|» external_kakao_client_id|body|string \| null|false|none|
|» external_kakao_email_optional|body|boolean \| null|false|none|
|» external_kakao_secret|body|string \| null|false|none|
|» external_keycloak_enabled|body|boolean \| null|false|none|
|» external_keycloak_client_id|body|string \| null|false|none|
|» external_keycloak_email_optional|body|boolean \| null|false|none|
|» external_keycloak_secret|body|string \| null|false|none|
|» external_keycloak_url|body|string \| null|false|none|
|» external_linkedin_oidc_enabled|body|boolean \| null|false|none|
|» external_linkedin_oidc_client_id|body|string \| null|false|none|
|» external_linkedin_oidc_email_optional|body|boolean \| null|false|none|
|» external_linkedin_oidc_secret|body|string \| null|false|none|
|» external_slack_oidc_enabled|body|boolean \| null|false|none|
|» external_slack_oidc_client_id|body|string \| null|false|none|
|» external_slack_oidc_email_optional|body|boolean \| null|false|none|
|» external_slack_oidc_secret|body|string \| null|false|none|
|» external_notion_enabled|body|boolean \| null|false|none|
|» external_notion_client_id|body|string \| null|false|none|
|» external_notion_email_optional|body|boolean \| null|false|none|
|» external_notion_secret|body|string \| null|false|none|
|» external_slack_enabled|body|boolean \| null|false|none|
|» external_slack_client_id|body|string \| null|false|none|
|» external_slack_email_optional|body|boolean \| null|false|none|
|» external_slack_secret|body|string \| null|false|none|
|» external_spotify_enabled|body|boolean \| null|false|none|
|» external_spotify_client_id|body|string \| null|false|none|
|» external_spotify_email_optional|body|boolean \| null|false|none|
|» external_spotify_secret|body|string \| null|false|none|
|» external_twitch_enabled|body|boolean \| null|false|none|
|» external_twitch_client_id|body|string \| null|false|none|
|» external_twitch_email_optional|body|boolean \| null|false|none|
|» external_twitch_secret|body|string \| null|false|none|
|» external_twitter_enabled|body|boolean \| null|false|none|
|» external_twitter_client_id|body|string \| null|false|none|
|» external_twitter_email_optional|body|boolean \| null|false|none|
|» external_twitter_secret|body|string \| null|false|none|
|» external_x_enabled|body|boolean \| null|false|none|
|» external_x_client_id|body|string \| null|false|none|
|» external_x_email_optional|body|boolean \| null|false|none|
|» external_x_secret|body|string \| null|false|none|
|» external_workos_enabled|body|boolean \| null|false|none|
|» external_workos_client_id|body|string \| null|false|none|
|» external_workos_secret|body|string \| null|false|none|
|» external_workos_url|body|string \| null|false|none|
|» external_web3_solana_enabled|body|boolean \| null|false|none|
|» external_web3_ethereum_enabled|body|boolean \| null|false|none|
|» external_zoom_enabled|body|boolean \| null|false|none|
|» external_zoom_client_id|body|string \| null|false|none|
|» external_zoom_email_optional|body|boolean \| null|false|none|
|» external_zoom_secret|body|string \| null|false|none|
|» db_max_pool_size|body|integer \| null|false|none|
|» db_max_pool_size_unit|body|string \| null|false|none|
|» api_max_request_duration|body|integer \| null|false|none|
|» mfa_totp_enroll_enabled|body|boolean \| null|false|none|
|» mfa_totp_verify_enabled|body|boolean \| null|false|none|
|» mfa_web_authn_enroll_enabled|body|boolean \| null|false|none|
|» mfa_web_authn_verify_enabled|body|boolean \| null|false|none|
|» passkey_enabled|body|boolean|false|none|
|» webauthn_rp_display_name|body|string \| null|false|none|
|» webauthn_rp_id|body|string \| null|false|none|
|» webauthn_rp_origins|body|string \| null|false|none|
|» mfa_phone_enroll_enabled|body|boolean \| null|false|none|
|» mfa_phone_verify_enabled|body|boolean \| null|false|none|
|» mfa_phone_max_frequency|body|integer \| null|false|none|
|» mfa_phone_otp_length|body|integer \| null|false|none|
|» mfa_phone_template|body|string \| null|false|none|
|» nimbus_oauth_client_id|body|string \| null|false|none|
|» nimbus_oauth_client_secret|body|string \| null|false|none|
|» oauth_server_enabled|body|boolean \| null|false|none|
|» oauth_server_allow_dynamic_registration|body|boolean \| null|false|none|
|» oauth_server_authorization_path|body|string \| null|false|none|
|» custom_oauth_enabled|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» security_captcha_provider|turnstile|
|» security_captcha_provider|hcaptcha|
|» security_captcha_provider|null|
|» password_required_characters|abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789|
|» password_required_characters|abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789|
|» password_required_characters|abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789:!@#$%^&*()_+-=[]{};'\\:"\|<>?,./`~|
|» password_required_characters|""|
|» password_required_characters|null|
|» sms_provider|messagebird|
|» sms_provider|textlocal|
|» sms_provider|twilio|
|» sms_provider|twilio_verify|
|» sms_provider|vonage|
|» sms_provider|null|
|» db_max_pool_size_unit|connections|
|» db_max_pool_size_unit|percent|
|» db_max_pool_size_unit|null|

> Example responses

> 200 Response

```json
{
  "api_max_request_duration": -9007199254740000,
  "db_max_pool_size": -9007199254740000,
  "db_max_pool_size_unit": "connections",
  "disable_signup": true,
  "external_anonymous_users_enabled": true,
  "external_apple_additional_client_ids": "string",
  "external_apple_client_id": "string",
  "external_apple_email_optional": true,
  "external_apple_enabled": true,
  "external_apple_secret": "string",
  "external_azure_client_id": "string",
  "external_azure_email_optional": true,
  "external_azure_enabled": true,
  "external_azure_secret": "string",
  "external_azure_url": "string",
  "external_bitbucket_client_id": "string",
  "external_bitbucket_email_optional": true,
  "external_bitbucket_enabled": true,
  "external_bitbucket_secret": "string",
  "external_discord_client_id": "string",
  "external_discord_email_optional": true,
  "external_discord_enabled": true,
  "external_discord_secret": "string",
  "external_email_enabled": true,
  "external_facebook_client_id": "string",
  "external_facebook_email_optional": true,
  "external_facebook_enabled": true,
  "external_facebook_secret": "string",
  "external_figma_client_id": "string",
  "external_figma_email_optional": true,
  "external_figma_enabled": true,
  "external_figma_secret": "string",
  "external_github_client_id": "string",
  "external_github_email_optional": true,
  "external_github_enabled": true,
  "external_github_secret": "string",
  "external_gitlab_client_id": "string",
  "external_gitlab_email_optional": true,
  "external_gitlab_enabled": true,
  "external_gitlab_secret": "string",
  "external_gitlab_url": "string",
  "external_google_additional_client_ids": "string",
  "external_google_client_id": "string",
  "external_google_email_optional": true,
  "external_google_enabled": true,
  "external_google_secret": "string",
  "external_google_skip_nonce_check": true,
  "external_kakao_client_id": "string",
  "external_kakao_email_optional": true,
  "external_kakao_enabled": true,
  "external_kakao_secret": "string",
  "external_keycloak_client_id": "string",
  "external_keycloak_email_optional": true,
  "external_keycloak_enabled": true,
  "external_keycloak_secret": "string",
  "external_keycloak_url": "string",
  "external_linkedin_oidc_client_id": "string",
  "external_linkedin_oidc_email_optional": true,
  "external_linkedin_oidc_enabled": true,
  "external_linkedin_oidc_secret": "string",
  "external_slack_oidc_client_id": "string",
  "external_slack_oidc_email_optional": true,
  "external_slack_oidc_enabled": true,
  "external_slack_oidc_secret": "string",
  "external_notion_client_id": "string",
  "external_notion_email_optional": true,
  "external_notion_enabled": true,
  "external_notion_secret": "string",
  "external_phone_enabled": true,
  "external_slack_client_id": "string",
  "external_slack_email_optional": true,
  "external_slack_enabled": true,
  "external_slack_secret": "string",
  "external_spotify_client_id": "string",
  "external_spotify_email_optional": true,
  "external_spotify_enabled": true,
  "external_spotify_secret": "string",
  "external_twitch_client_id": "string",
  "external_twitch_email_optional": true,
  "external_twitch_enabled": true,
  "external_twitch_secret": "string",
  "external_twitter_client_id": "string",
  "external_twitter_email_optional": true,
  "external_twitter_enabled": true,
  "external_twitter_secret": "string",
  "external_x_client_id": "string",
  "external_x_email_optional": true,
  "external_x_enabled": true,
  "external_x_secret": "string",
  "external_workos_client_id": "string",
  "external_workos_enabled": true,
  "external_workos_secret": "string",
  "external_workos_url": "string",
  "external_web3_solana_enabled": true,
  "external_web3_ethereum_enabled": true,
  "external_zoom_client_id": "string",
  "external_zoom_email_optional": true,
  "external_zoom_enabled": true,
  "external_zoom_secret": "string",
  "hook_custom_access_token_enabled": true,
  "hook_custom_access_token_uri": "string",
  "hook_custom_access_token_secrets": "string",
  "hook_mfa_verification_attempt_enabled": true,
  "hook_mfa_verification_attempt_uri": "string",
  "hook_mfa_verification_attempt_secrets": "string",
  "hook_password_verification_attempt_enabled": true,
  "hook_password_verification_attempt_uri": "string",
  "hook_password_verification_attempt_secrets": "string",
  "hook_send_sms_enabled": true,
  "hook_send_sms_uri": "string",
  "hook_send_sms_secrets": "string",
  "hook_send_email_enabled": true,
  "hook_send_email_uri": "string",
  "hook_send_email_secrets": "string",
  "hook_before_user_created_enabled": true,
  "hook_before_user_created_uri": "string",
  "hook_before_user_created_secrets": "string",
  "hook_after_user_created_enabled": true,
  "hook_after_user_created_uri": "string",
  "hook_after_user_created_secrets": "string",
  "jwt_exp": -9007199254740000,
  "mailer_allow_unverified_email_sign_ins": true,
  "mailer_autoconfirm": true,
  "mailer_otp_exp": -9007199254740000,
  "mailer_otp_length": -9007199254740000,
  "mailer_secure_email_change_enabled": true,
  "mailer_subjects_confirmation": "string",
  "mailer_subjects_email_change": "string",
  "mailer_subjects_invite": "string",
  "mailer_subjects_magic_link": "string",
  "mailer_subjects_reauthentication": "string",
  "mailer_subjects_recovery": "string",
  "mailer_subjects_password_changed_notification": "string",
  "mailer_subjects_email_changed_notification": "string",
  "mailer_subjects_phone_changed_notification": "string",
  "mailer_subjects_mfa_factor_enrolled_notification": "string",
  "mailer_subjects_mfa_factor_unenrolled_notification": "string",
  "mailer_subjects_identity_linked_notification": "string",
  "mailer_subjects_identity_unlinked_notification": "string",
  "mailer_templates_confirmation_content": "string",
  "mailer_templates_email_change_content": "string",
  "mailer_templates_invite_content": "string",
  "mailer_templates_magic_link_content": "string",
  "mailer_templates_reauthentication_content": "string",
  "mailer_templates_recovery_content": "string",
  "mailer_templates_password_changed_notification_content": "string",
  "mailer_templates_email_changed_notification_content": "string",
  "mailer_templates_phone_changed_notification_content": "string",
  "mailer_templates_mfa_factor_enrolled_notification_content": "string",
  "mailer_templates_mfa_factor_unenrolled_notification_content": "string",
  "mailer_templates_identity_linked_notification_content": "string",
  "mailer_templates_identity_unlinked_notification_content": "string",
  "mailer_notifications_password_changed_enabled": true,
  "mailer_notifications_email_changed_enabled": true,
  "mailer_notifications_phone_changed_enabled": true,
  "mailer_notifications_mfa_factor_enrolled_enabled": true,
  "mailer_notifications_mfa_factor_unenrolled_enabled": true,
  "mailer_notifications_identity_linked_enabled": true,
  "mailer_notifications_identity_unlinked_enabled": true,
  "mfa_max_enrolled_factors": -9007199254740000,
  "mfa_totp_enroll_enabled": true,
  "mfa_totp_verify_enabled": true,
  "mfa_phone_enroll_enabled": true,
  "mfa_phone_verify_enabled": true,
  "mfa_web_authn_enroll_enabled": true,
  "mfa_web_authn_verify_enabled": true,
  "passkey_enabled": true,
  "webauthn_rp_display_name": "string",
  "webauthn_rp_id": "string",
  "webauthn_rp_origins": "string",
  "mfa_phone_otp_length": -9007199254740000,
  "mfa_phone_template": "string",
  "mfa_phone_max_frequency": -9007199254740000,
  "nimbus_oauth_client_id": "string",
  "nimbus_oauth_email_optional": true,
  "nimbus_oauth_client_secret": "string",
  "password_hibp_enabled": true,
  "password_min_length": -9007199254740000,
  "password_required_characters": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789",
  "rate_limit_anonymous_users": -9007199254740000,
  "rate_limit_email_sent": -9007199254740000,
  "rate_limit_sms_sent": -9007199254740000,
  "rate_limit_token_refresh": -9007199254740000,
  "rate_limit_verify": -9007199254740000,
  "rate_limit_otp": -9007199254740000,
  "rate_limit_web3": -9007199254740000,
  "refresh_token_rotation_enabled": true,
  "saml_enabled": true,
  "saml_external_url": "string",
  "saml_allow_encrypted_assertions": true,
  "security_sb_forwarded_for_enabled": true,
  "security_captcha_enabled": true,
  "security_captcha_provider": "turnstile",
  "security_captcha_secret": "string",
  "security_manual_linking_enabled": true,
  "security_refresh_token_reuse_interval": -9007199254740000,
  "security_update_password_require_current_password": true,
  "security_update_password_require_reauthentication": true,
  "sessions_inactivity_timeout": 0,
  "sessions_single_per_user": true,
  "sessions_tags": "string",
  "sessions_timebox": 0,
  "site_url": "string",
  "sms_autoconfirm": true,
  "sms_max_frequency": -9007199254740000,
  "sms_messagebird_access_key": "string",
  "sms_messagebird_originator": "string",
  "sms_otp_exp": -9007199254740000,
  "sms_otp_length": -9007199254740000,
  "sms_provider": "messagebird",
  "sms_template": "string",
  "sms_test_otp": "string",
  "sms_test_otp_valid_until": "1970-01-01T00:00:00Z",
  "sms_textlocal_api_key": "string",
  "sms_textlocal_sender": "string",
  "sms_twilio_account_sid": "string",
  "sms_twilio_auth_token": "string",
  "sms_twilio_content_sid": "string",
  "sms_twilio_message_service_sid": "string",
  "sms_twilio_verify_account_sid": "string",
  "sms_twilio_verify_auth_token": "string",
  "sms_twilio_verify_message_service_sid": "string",
  "sms_vonage_api_key": "string",
  "sms_vonage_api_secret": "string",
  "sms_vonage_from": "string",
  "smtp_admin_email": "user@example.com",
  "smtp_host": "string",
  "smtp_max_frequency": -9007199254740000,
  "smtp_pass": "string",
  "smtp_port": "string",
  "smtp_sender_name": "string",
  "smtp_user": "string",
  "uri_allow_list": "string",
  "oauth_server_enabled": true,
  "oauth_server_allow_dynamic_registration": true,
  "oauth_server_authorization_path": "string",
  "custom_oauth_enabled": true,
  "custom_oauth_max_providers": -9007199254740000
}
```

<h3 id="updates-a-projects-auth-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AuthConfigResponse_Output](#schemaauthconfigresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to update project's auth config|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Lists all third-party auth integrations

<a id="opIdv1-list-project-tpa-integrations"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/auth/third-party-auth \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/config/auth/third-party-auth`

<h3 id="lists-all-third-party-auth-integrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "type": "string",
    "oidc_issuer_url": "string",
    "jwks_url": "string",
    "custom_jwks": null,
    "resolved_jwks": null,
    "inserted_at": "string",
    "updated_at": "string",
    "resolved_at": "string"
  }
]
```

<h3 id="lists-all-third-party-auth-integrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<h3 id="lists-all-third-party-auth-integrations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ThirdPartyAuth_Output](#schemathirdpartyauth_output)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Creates a new third-party auth integration

<a id="opIdv1-create-project-tpa-integration"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/auth/third-party-auth \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "oidc_issuer_url": "https://login.acme.com",
    "jwks_url": "https://login.acme.com/.well-known/jwks.json"
  }'
```

`POST /v1/projects/{ref}/config/auth/third-party-auth`

> Body parameter

```json
{
  "oidc_issuer_url": "https://login.acme.com",
  "jwks_url": "https://login.acme.com/.well-known/jwks.json"
}
```

<h3 id="creates-a-new-third-party-auth-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[CreateThirdPartyAuthBody](#schemacreatethirdpartyauthbody)|true|none|
|» oidc_issuer_url|body|string|false|none|
|» jwks_url|body|string|false|none|
|» custom_jwks|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "string",
  "oidc_issuer_url": "string",
  "jwks_url": "string",
  "custom_jwks": null,
  "resolved_jwks": null,
  "inserted_at": "string",
  "updated_at": "string",
  "resolved_at": "string"
}
```

<h3 id="creates-a-new-third-party-auth-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[ThirdPartyAuth_Output](#schemathirdpartyauth_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get a third-party integration

<a id="opIdv1-get-project-tpa-integration"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/auth/third-party-auth/88888888-8888-4888-8888-888888888888 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}`

<h3 id="get-a-third-party-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|tpa_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "string",
  "oidc_issuer_url": "string",
  "jwks_url": "string",
  "custom_jwks": null,
  "resolved_jwks": null,
  "inserted_at": "string",
  "updated_at": "string",
  "resolved_at": "string"
}
```

<h3 id="get-a-third-party-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ThirdPartyAuth_Output](#schemathirdpartyauth_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Removes a third-party auth integration

<a id="opIdv1-delete-project-tpa-integration"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/auth/third-party-auth/88888888-8888-4888-8888-888888888888 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}`

<h3 id="removes-a-third-party-auth-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|tpa_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "string",
  "oidc_issuer_url": "string",
  "jwks_url": "string",
  "custom_jwks": null,
  "resolved_jwks": null,
  "inserted_at": "string",
  "updated_at": "string",
  "resolved_at": "string"
}
```

<h3 id="removes-a-third-party-auth-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ThirdPartyAuth_Output](#schemathirdpartyauth_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Lists all SSO providers

<a id="opIdv1-list-all-sso-provider"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/auth/sso/providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/config/auth/sso/providers`

<h3 id="lists-all-sso-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "string",
      "saml": {
        "entity_id": "string",
        "metadata_url": "string",
        "metadata_xml": "string",
        "attribute_mapping": {
          "keys": {
            "property1": {
              "name": "string",
              "names": [
                "string"
              ],
              "array": true,
              "default": {}
            },
            "property2": {
              "name": "string",
              "names": [
                "string"
              ],
              "array": true,
              "default": {}
            }
          }
        },
        "name_id_format": "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"
      },
      "domains": [
        {
          "domain": "string",
          "created_at": "string",
          "updated_at": "string"
        }
      ],
      "created_at": "string",
      "updated_at": "string"
    }
  ]
}
```

<h3 id="lists-all-sso-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListProvidersResponse_Output](#schemalistprovidersresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|404|Not Found|SAML 2.0 support is not enabled for this project|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Creates a new SSO provider

<a id="opIdv1-create-a-sso-provider"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/auth/sso/providers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "type": "saml",
    "metadata_url": "https://sso.acme.com/metadata.xml",
    "domains": [
      "acme.com"
    ],
    "attribute_mapping": {
      "keys": {
        "email": {
          "name": "email"
        },
        "first_name": {
          "name": "first_name"
        },
        "last_name": {
          "name": "last_name"
        }
      }
    }
  }'
```

`POST /v1/projects/{ref}/config/auth/sso/providers`

> Body parameter

```json
{
  "type": "saml",
  "metadata_url": "https://sso.acme.com/metadata.xml",
  "domains": [
    "acme.com"
  ],
  "attribute_mapping": {
    "keys": {
      "email": {
        "name": "email"
      },
      "first_name": {
        "name": "first_name"
      },
      "last_name": {
        "name": "last_name"
      }
    }
  }
}
```

<h3 id="creates-a-new-sso-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[CreateProviderBody](#schemacreateproviderbody)|true|none|
|» type|body|string|true|What type of provider will be created|
|» metadata_xml|body|string|false|none|
|» metadata_url|body|string|false|none|
|» domains|body|[string]|false|none|
|» attribute_mapping|body|object|false|none|
|» » keys|body|object|true|none|
|» » » **additionalProperties**|body|object|false|none|
|» » » » name|body|string|false|none|
|» » » » names|body|[string]|false|none|
|» » » » array|body|boolean|false|none|
|» » » » default|body|object \| number \| string \| boolean|false|none|
|» » » » » *anyOf*|body|object|false|none|
|» » » » » *anyOf*|body|number|false|none|
|» » » » » *anyOf*|body|string|false|none|
|» » » » » *anyOf*|body|boolean|false|none|
|» name_id_format|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|saml|
|» name_id_format|urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified|
|» name_id_format|urn:oasis:names:tc:SAML:2.0:nameid-format:transient|
|» name_id_format|urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress|
|» name_id_format|urn:oasis:names:tc:SAML:2.0:nameid-format:persistent|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "saml": {
    "entity_id": "string",
    "metadata_url": "string",
    "metadata_xml": "string",
    "attribute_mapping": {
      "keys": {
        "property1": {
          "name": "string",
          "names": [
            "string"
          ],
          "array": true,
          "default": {}
        },
        "property2": {
          "name": "string",
          "names": [
            "string"
          ],
          "array": true,
          "default": {}
        }
      }
    },
    "name_id_format": "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"
  },
  "domains": [
    {
      "domain": "string",
      "created_at": "string",
      "updated_at": "string"
    }
  ],
  "created_at": "string",
  "updated_at": "string"
}
```

<h3 id="creates-a-new-sso-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[CreateProviderResponse_Output](#schemacreateproviderresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|404|Not Found|SAML 2.0 support is not enabled for this project|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets a SSO provider by its UUID

<a id="opIdv1-get-a-sso-provider"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/auth/sso/providers/77777777-7777-4777-8777-777777777777 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/config/auth/sso/providers/{provider_id}`

<h3 id="gets-a-sso-provider-by-its-uuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|provider_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "saml": {
    "entity_id": "string",
    "metadata_url": "string",
    "metadata_xml": "string",
    "attribute_mapping": {
      "keys": {
        "property1": {
          "name": "string",
          "names": [
            "string"
          ],
          "array": true,
          "default": {}
        },
        "property2": {
          "name": "string",
          "names": [
            "string"
          ],
          "array": true,
          "default": {}
        }
      }
    },
    "name_id_format": "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"
  },
  "domains": [
    {
      "domain": "string",
      "created_at": "string",
      "updated_at": "string"
    }
  ],
  "created_at": "string",
  "updated_at": "string"
}
```

<h3 id="gets-a-sso-provider-by-its-uuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetProviderResponse_Output](#schemagetproviderresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|404|Not Found|Either SAML 2.0 was not enabled for this project, or the provider does not exist|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Updates a SSO provider by its UUID

<a id="opIdv1-update-a-sso-provider"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/auth/sso/providers/77777777-7777-4777-8777-777777777777 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "metadata_url": "https://sso.acme.com/metadata.xml",
    "domains": [
      "acme.com",
      "contractors.acme.com"
    ]
  }'
```

`PUT /v1/projects/{ref}/config/auth/sso/providers/{provider_id}`

> Body parameter

```json
{
  "metadata_url": "https://sso.acme.com/metadata.xml",
  "domains": [
    "acme.com",
    "contractors.acme.com"
  ]
}
```

<h3 id="updates-a-sso-provider-by-its-uuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|provider_id|path|string(uuid)|true|none|
|body|body|[UpdateProviderBody](#schemaupdateproviderbody)|true|none|
|» metadata_xml|body|string|false|none|
|» metadata_url|body|string|false|none|
|» domains|body|[string]|false|none|
|» attribute_mapping|body|object|false|none|
|» » keys|body|object|true|none|
|» » » **additionalProperties**|body|object|false|none|
|» » » » name|body|string|false|none|
|» » » » names|body|[string]|false|none|
|» » » » array|body|boolean|false|none|
|» » » » default|body|object \| number \| string \| boolean|false|none|
|» » » » » *anyOf*|body|object|false|none|
|» » » » » *anyOf*|body|number|false|none|
|» » » » » *anyOf*|body|string|false|none|
|» » » » » *anyOf*|body|boolean|false|none|
|» name_id_format|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» name_id_format|urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified|
|» name_id_format|urn:oasis:names:tc:SAML:2.0:nameid-format:transient|
|» name_id_format|urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress|
|» name_id_format|urn:oasis:names:tc:SAML:2.0:nameid-format:persistent|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "saml": {
    "entity_id": "string",
    "metadata_url": "string",
    "metadata_xml": "string",
    "attribute_mapping": {
      "keys": {
        "property1": {
          "name": "string",
          "names": [
            "string"
          ],
          "array": true,
          "default": {}
        },
        "property2": {
          "name": "string",
          "names": [
            "string"
          ],
          "array": true,
          "default": {}
        }
      }
    },
    "name_id_format": "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"
  },
  "domains": [
    {
      "domain": "string",
      "created_at": "string",
      "updated_at": "string"
    }
  ],
  "created_at": "string",
  "updated_at": "string"
}
```

<h3 id="updates-a-sso-provider-by-its-uuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UpdateProviderResponse_Output](#schemaupdateproviderresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|404|Not Found|Either SAML 2.0 was not enabled for this project, or the provider does not exist|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Removes a SSO provider by its UUID

<a id="opIdv1-delete-a-sso-provider"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/auth/sso/providers/77777777-7777-4777-8777-777777777777 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/projects/{ref}/config/auth/sso/providers/{provider_id}`

<h3 id="removes-a-sso-provider-by-its-uuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|provider_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "saml": {
    "entity_id": "string",
    "metadata_url": "string",
    "metadata_xml": "string",
    "attribute_mapping": {
      "keys": {
        "property1": {
          "name": "string",
          "names": [
            "string"
          ],
          "array": true,
          "default": {}
        },
        "property2": {
          "name": "string",
          "names": [
            "string"
          ],
          "array": true,
          "default": {}
        }
      }
    },
    "name_id_format": "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"
  },
  "domains": [
    {
      "domain": "string",
      "created_at": "string",
      "updated_at": "string"
    }
  ],
  "created_at": "string",
  "updated_at": "string"
}
```

<h3 id="removes-a-sso-provider-by-its-uuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeleteProviderResponse_Output](#schemadeleteproviderresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|404|Not Found|Either SAML 2.0 was not enabled for this project, or the provider does not exist|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="supabase-api-v1-billing">Billing</h1>

Billing related endpoints

## List billing addons and compute instance selections

<a id="opIdv1-list-project-addons"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/billing/addons \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/billing/addons`

Returns the billing addons that are currently applied, including the active compute instance size, and lists every addon option that can be provisioned with pricing metadata.

<h3 id="list-billing-addons-and-compute-instance-selections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "selected_addons": [
    {
      "type": "custom_domain",
      "variant": {
        "id": "ci_micro",
        "name": "string",
        "price": {
          "description": "string",
          "type": "fixed",
          "interval": "monthly",
          "amount": 0
        },
        "meta": "string"
      }
    }
  ],
  "available_addons": [
    {
      "type": "custom_domain",
      "name": "string",
      "variants": [
        {
          "id": "ci_micro",
          "name": "string",
          "price": {
            "description": "string",
            "type": "fixed",
            "interval": "monthly",
            "amount": 0
          },
          "meta": "string"
        }
      ]
    }
  ]
}
```

<h3 id="list-billing-addons-and-compute-instance-selections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListProjectAddonsResponse_Output](#schemalistprojectaddonsresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to list project addons|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Apply or update billing addons, including compute instance size

<a id="opIdv1-apply-project-addon"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/billing/addons \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addon_variant": "pitr_7",
    "addon_type": "pitr"
  }'
```

`PATCH /v1/projects/{ref}/billing/addons`

Selects an addon variant, for example scaling the project’s compute instance up or down, and applies it to the project.

> Body parameter

```json
{
  "addon_variant": "pitr_7",
  "addon_type": "pitr"
}
```

<h3 id="apply-or-update-billing-addons-including-compute-instance-size-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[ApplyProjectAddonBody](#schemaapplyprojectaddonbody)|true|none|
|» addon_variant|body|string|true|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|string|false|none|
|» addon_type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|ci_micro|
|» » *anyOf*|ci_small|
|» » *anyOf*|ci_medium|
|» » *anyOf*|ci_large|
|» » *anyOf*|ci_xlarge|
|» » *anyOf*|ci_2xlarge|
|» » *anyOf*|ci_4xlarge|
|» » *anyOf*|ci_8xlarge|
|» » *anyOf*|ci_12xlarge|
|» » *anyOf*|ci_16xlarge|
|» » *anyOf*|ci_24xlarge|
|» » *anyOf*|ci_24xlarge_optimized_cpu|
|» » *anyOf*|ci_24xlarge_optimized_memory|
|» » *anyOf*|ci_24xlarge_high_memory|
|» » *anyOf*|ci_48xlarge|
|» » *anyOf*|ci_48xlarge_optimized_cpu|
|» » *anyOf*|ci_48xlarge_optimized_memory|
|» » *anyOf*|ci_48xlarge_high_memory|
|» » *anyOf*|cd_default|
|» » *anyOf*|pitr_7|
|» » *anyOf*|pitr_14|
|» » *anyOf*|pitr_28|
|» » *anyOf*|ipv4_default|
|» addon_type|custom_domain|
|» addon_type|compute_instance|
|» addon_type|pitr|
|» addon_type|ipv4|
|» addon_type|auth_mfa_phone|
|» addon_type|auth_mfa_web_authn|
|» addon_type|log_drain|
|» addon_type|etl_pipeline|

<h3 id="apply-or-update-billing-addons-including-compute-instance-size-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to apply project addon|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Remove billing addons or revert compute instance sizing

<a id="opIdv1-remove-project-addon"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/billing/addons/pitr_7 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/projects/{ref}/billing/addons/{addon_variant}`

Disables the selected addon variant, including rolling the compute instance back to its previous size.

<h3 id="remove-billing-addons-or-revert-compute-instance-sizing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|addon_variant|path|string|true|none|

<h3 id="remove-billing-addons-or-revert-compute-instance-sizing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to remove project addon|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="supabase-api-v1-database">Database</h1>

Database related endpoints

## Lists SQL snippets for the logged in user

<a id="opIdv1-list-all-snippets"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/snippets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/snippets`

<h3 id="lists-sql-snippets-for-the-logged-in-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_ref|query|string|false|Project ref|
|cursor|query|string|false|none|
|limit|query|string|false|none|
|sort_by|query|string|false|none|
|sort_order|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_by|name|
|sort_by|inserted_at|
|sort_order|asc|
|sort_order|desc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "inserted_at": "string",
      "updated_at": "string",
      "type": "sql",
      "visibility": "user",
      "name": "string",
      "description": "string",
      "project": {
        "id": 0,
        "name": "string"
      },
      "owner": {
        "id": 0,
        "username": "string"
      },
      "updated_by": {
        "id": 0,
        "username": "string"
      },
      "favorite": true
    }
  ],
  "cursor": "string"
}
```

<h3 id="lists-sql-snippets-for-the-logged-in-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SnippetList_Output](#schemasnippetlist_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to list user's SQL snippets|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets a specific SQL snippet

<a id="opIdv1-get-a-snippet"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/snippets/44444444-4444-4444-8444-444444444444 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/snippets/{id}`

<h3 id="gets-a-specific-sql-snippet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "inserted_at": "string",
  "updated_at": "string",
  "type": "sql",
  "visibility": "user",
  "name": "string",
  "description": "string",
  "project": {
    "id": 0,
    "name": "string"
  },
  "owner": {
    "id": 0,
    "username": "string"
  },
  "updated_by": {
    "id": 0,
    "username": "string"
  },
  "favorite": true,
  "content": {
    "favorite": true,
    "schema_version": "string",
    "sql": "string"
  }
}
```

<h3 id="gets-a-specific-sql-snippet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SnippetResponse_Output](#schemasnippetresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve SQL snippet|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get project's temporary access configuration.

<a id="opIdv1-get-jit-access-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/jit-access \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/jit-access`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

<h3 id="get-projects-temporary-access-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "state": "enabled",
  "appliedSuccessfully": true
}
```

<h3 id="get-projects-temporary-access-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve project's temporary access configuration.|None|

<h3 id="get-projects-temporary-access-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|state|string|true|none|none|
|appliedSuccessfully|boolean|false|none|none|
|*oneOf*|object|false|none|none|
|state|string|true|none|none|
|unavailableReason|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|enabled|
|state|disabled|
|unavailableReason|platform_unsupported|
|unavailableReason|postgres_upgrade_required|
|unavailableReason|ssl_enforcement_required|
|unavailableReason|temporarily_unavailable|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Update project's temporary access configuration.

<a id="opIdv1-update-jit-access-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/jit-access \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "state": "enabled"
  }'
```

`PUT /v1/projects/{ref}/jit-access`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

> Body parameter

```json
{
  "state": "enabled"
}
```

<h3 id="update-projects-temporary-access-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[JitAccessRequestRequest](#schemajitaccessrequestrequest)|true|none|
|» state|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» state|enabled|
|» state|disabled|

> Example responses

> 200 Response

```json
{
  "state": "enabled",
  "appliedSuccessfully": true
}
```

<h3 id="update-projects-temporary-access-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to update project's temporary access configuration.|None|

<h3 id="update-projects-temporary-access-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|state|string|true|none|none|
|appliedSuccessfully|boolean|false|none|none|
|*oneOf*|object|false|none|none|
|state|string|true|none|none|
|unavailableReason|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|enabled|
|state|disabled|
|unavailableReason|platform_unsupported|
|unavailableReason|postgres_upgrade_required|
|unavailableReason|ssl_enforcement_required|
|unavailableReason|temporarily_unavailable|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get project's SSL enforcement configuration.

<a id="opIdv1-get-ssl-enforcement-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/ssl-enforcement \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/ssl-enforcement`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

<h3 id="get-projects-ssl-enforcement-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "currentConfig": {
    "database": true
  },
  "appliedSuccessfully": true
}
```

<h3 id="get-projects-ssl-enforcement-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SslEnforcementResponse_Output](#schemasslenforcementresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve project's SSL enforcement config|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Update project's SSL enforcement configuration.

<a id="opIdv1-update-ssl-enforcement-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/ssl-enforcement \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requestedConfig": {
      "database": true
    }
  }'
```

`PUT /v1/projects/{ref}/ssl-enforcement`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

> Body parameter

```json
{
  "requestedConfig": {
    "database": true
  }
}
```

<h3 id="update-projects-ssl-enforcement-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[SslEnforcementRequest](#schemasslenforcementrequest)|true|none|
|» requestedConfig|body|object|true|none|
|» » database|body|boolean|true|none|

> Example responses

> 200 Response

```json
{
  "currentConfig": {
    "database": true
  },
  "appliedSuccessfully": true
}
```

<h3 id="update-projects-ssl-enforcement-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SslEnforcementResponse_Output](#schemasslenforcementresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to update project's SSL enforcement configuration.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Generate TypeScript types

<a id="opIdv1-generate-typescript-types"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/types/typescript \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/types/typescript`

Returns the TypeScript types of your schema for use with supabase-js.

<h3 id="generate-typescript-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|included_schemas|query|string|false|none|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "types": "string"
}
```

<h3 id="generate-typescript-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[TypescriptResponse_Output](#schematypescriptresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to generate TypeScript types|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Returns project's readonly mode status

<a id="opIdv1-get-readonly-mode-status"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/readonly \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/readonly`

<h3 id="returns-projects-readonly-mode-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "override_enabled": true,
  "override_active_until": "string"
}
```

<h3 id="returns-projects-readonly-mode-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ReadOnlyStatusResponse_Output](#schemareadonlystatusresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to get project readonly mode status|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Disables project's readonly mode for the next 15 minutes

<a id="opIdv1-disable-readonly-mode-temporarily"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/readonly/temporary-disable \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/projects/{ref}/readonly/temporary-disable`

<h3 id="disables-projects-readonly-mode-for-the-next-15-minutes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

<h3 id="disables-projects-readonly-mode-for-the-next-15-minutes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to disable project's readonly mode|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Set up a read replica

<a id="opIdv1-setup-a-read-replica"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/read-replicas/setup \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "read_replica_region": "us-west-1"
  }'
```

`POST /v1/projects/{ref}/read-replicas/setup`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

> Body parameter

```json
{
  "read_replica_region": "us-west-1"
}
```

<h3 id="set-up-a-read-replica-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[SetUpReadReplicaBody](#schemasetupreadreplicabody)|true|none|
|» read_replica_region|body|string|true|Region you want your read replica to reside in|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» read_replica_region|us-east-1|
|» read_replica_region|us-east-2|
|» read_replica_region|us-west-1|
|» read_replica_region|us-west-2|
|» read_replica_region|ap-east-1|
|» read_replica_region|ap-southeast-1|
|» read_replica_region|ap-northeast-1|
|» read_replica_region|ap-northeast-2|
|» read_replica_region|ap-southeast-2|
|» read_replica_region|eu-west-1|
|» read_replica_region|eu-west-2|
|» read_replica_region|eu-west-3|
|» read_replica_region|eu-north-1|
|» read_replica_region|eu-central-1|
|» read_replica_region|eu-central-2|
|» read_replica_region|ca-central-1|
|» read_replica_region|ap-south-1|
|» read_replica_region|sa-east-1|

> Example responses

> 402 Response

```json
{
  "message": "string",
  "error": {
    "code": "entitlement_required",
    "feature": "string",
    "upgrade_url": "string"
  }
}
```

<h3 id="set-up-a-read-replica-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|
|401|Unauthorized|Unauthorized|None|
|402|Payment Required|This feature requires the Pro, Team, or Enterprise organization plan.|[PlanGateErrorBody](#schemaplangateerrorbody)|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to set up read replica|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Remove a read replica

<a id="opIdv1-remove-a-read-replica"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/read-replicas/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "database_identifier": "abcdefghijklmnopqrst-rr-us-west-1-abcde"
  }'
```

`POST /v1/projects/{ref}/read-replicas/remove`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

> Body parameter

```json
{
  "database_identifier": "abcdefghijklmnopqrst-rr-us-west-1-abcde"
}
```

<h3 id="remove-a-read-replica-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[RemoveReadReplicaBody](#schemaremovereadreplicabody)|true|none|
|» database_identifier|body|string|true|none|

<h3 id="remove-a-read-replica-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to remove read replica|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Create a login role for CLI with temporary password

<a id="opIdv1-create-login-role"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/cli/login-role \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "read_only": true
  }'
```

`POST /v1/projects/{ref}/cli/login-role`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

> Body parameter

```json
{
  "read_only": true
}
```

<h3 id="create-a-login-role-for-cli-with-temporary-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[CreateRoleBody](#schemacreaterolebody)|true|none|
|» read_only|body|boolean|true|none|

> Example responses

> 201 Response

```json
{
  "role": "string",
  "password": "string",
  "ttl_seconds": 1
}
```

<h3 id="create-a-login-role-for-cli-with-temporary-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[CreateRoleResponse_Output](#schemacreateroleresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to create login role|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Delete existing login roles used by CLI

<a id="opIdv1-delete-login-roles"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/cli/login-role \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/projects/{ref}/cli/login-role`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

<h3 id="delete-existing-login-roles-used-by-cli-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "message": "ok"
}
```

<h3 id="delete-existing-login-roles-used-by-cli-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeleteRolesResponse_Output](#schemadeleterolesresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to delete login roles|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## List applied migration versions

<a id="opIdv1-list-migration-history"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/migrations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/database/migrations`

<h3 id="list-applied-migration-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
[
  {
    "version": "string",
    "name": "string"
  }
]
```

<h3 id="list-applied-migration-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[V1ListMigrationsResponse_Output](#schemav1listmigrationsresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to list database migrations|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Upsert a database migration without applying

<a id="opIdv1-upsert-a-migration"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/migrations \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "query": "create table public.widgets(id bigint primary key);",
    "name": "create_widgets_table",
    "rollback": "drop table if exists public.widgets;"
  }'
```

`PUT /v1/projects/{ref}/database/migrations`

> Body parameter

```json
{
  "query": "create table public.widgets(id bigint primary key);",
  "name": "create_widgets_table",
  "rollback": "drop table if exists public.widgets;"
}
```

<h3 id="upsert-a-database-migration-without-applying-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|Idempotency-Key|header|string|false|A unique key to ensure the same migration is tracked only once.|
|body|body|[V1UpsertMigrationBody](#schemav1upsertmigrationbody)|true|none|
|» query|body|string|true|none|
|» name|body|string|false|none|
|» rollback|body|string|false|none|

<h3 id="upsert-a-database-migration-without-applying-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to upsert database migration|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Apply a database migration

<a id="opIdv1-apply-a-migration"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/migrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "query": "create table public.widgets(id bigint primary key);",
    "name": "create_widgets_table",
    "rollback": "drop table if exists public.widgets;"
  }'
```

`POST /v1/projects/{ref}/database/migrations`

> Body parameter

```json
{
  "query": "create table public.widgets(id bigint primary key);",
  "name": "create_widgets_table",
  "rollback": "drop table if exists public.widgets;"
}
```

<h3 id="apply-a-database-migration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|Idempotency-Key|header|string|false|A unique key to ensure the same migration is tracked only once.|
|body|body|[V1CreateMigrationBody](#schemav1createmigrationbody)|true|none|
|» query|body|string|true|none|
|» name|body|string|false|none|
|» rollback|body|string|false|none|

<h3 id="apply-a-database-migration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to apply database migration|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Rollback database migrations and remove them from history table

<a id="opIdv1-rollback-migrations"></a>

> Code samples

```bash
curl 'https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/migrations?gte=20250312000000' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/projects/{ref}/database/migrations`

<h3 id="rollback-database-migrations-and-remove-them-from-history-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|gte|query|string|true|Rollback migrations greater or equal to this version|

<h3 id="rollback-database-migrations-and-remove-them-from-history-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to rollback database migration|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Fetch an existing entry from migration history

<a id="opIdv1-get-a-migration"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/migrations/20250312000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/database/migrations/{version}`

<h3 id="fetch-an-existing-entry-from-migration-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|version|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "version": "string",
  "name": "string",
  "statements": [
    "string"
  ],
  "rollback": [
    "string"
  ],
  "created_by": "string",
  "idempotency_key": "string"
}
```

<h3 id="fetch-an-existing-entry-from-migration-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[V1GetMigrationResponse_Output](#schemav1getmigrationresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to get database migration|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Patch an existing entry in migration history

<a id="opIdv1-patch-a-migration"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/migrations/20250312000000 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "create_widgets_table",
    "rollback": "drop table if exists public.widgets;"
  }'
```

`PATCH /v1/projects/{ref}/database/migrations/{version}`

> Body parameter

```json
{
  "name": "create_widgets_table",
  "rollback": "drop table if exists public.widgets;"
}
```

<h3 id="patch-an-existing-entry-in-migration-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|version|path|string|true|none|
|body|body|[V1PatchMigrationBody](#schemav1patchmigrationbody)|true|none|
|» name|body|string|false|none|
|» rollback|body|string|false|none|

<h3 id="patch-an-existing-entry-in-migration-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to patch database migration|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Run sql query

<a id="opIdv1-run-a-query"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "query": "select * from pg_stat_activity limit 1;",
    "read_only": true
  }'
```

`POST /v1/projects/{ref}/database/query`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

> Body parameter

```json
{
  "query": "select * from pg_stat_activity limit 1;",
  "read_only": true
}
```

<h3 id="run-sql-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[V1RunQueryBody](#schemav1runquerybody)|true|none|
|» query|body|string|true|none|
|» parameters|body|[object]|false|none|
|» read_only|body|boolean|false|none|

<h3 id="run-sql-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to run sql query|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Run a sql query as supabase_read_only_user

<a id="opIdv1-read-only-query"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/query/read-only \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "query": "select * from pg_stat_activity limit 1;"
  }'
```

`POST /v1/projects/{ref}/database/query/read-only`

All entity references must be schema qualified.

This endpoint is currently in its **Beta** stage.

> Body parameter

```json
{
  "query": "select * from pg_stat_activity limit 1;"
}
```

<h3 id="run-a-sql-query-as-supabasereadonlyuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[V1ReadOnlyQueryBody](#schemav1readonlyquerybody)|true|none|
|» query|body|string|true|none|
|» parameters|body|[object]|false|none|

<h3 id="run-a-sql-query-as-supabasereadonlyuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to run read-only sql query|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Enables Database Webhooks on the project

<a id="opIdv1-enable-database-webhook"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/webhooks/enable \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/projects/{ref}/database/webhooks/enable`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

<h3 id="enables-database-webhooks-on-the-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

<h3 id="enables-database-webhooks-on-the-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to enable Database Webhooks on the project|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets database metadata for the given project.

<a id="opIdv1-get-database-metadata"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/context \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/database/context`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

<h3 id="gets-database-metadata-for-the-given-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "databases": [
    {
      "name": "string",
      "schemas": [
        {
          "name": "string"
        }
      ]
    }
  ]
}
```

<h3 id="gets-database-metadata-for-the-given-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetProjectDbMetadataResponse_Output](#schemagetprojectdbmetadataresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Updates the database password

<a id="opIdv1-update-database-password"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/password \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "password": "correct-horse-battery-staple"
  }'
```

`PATCH /v1/projects/{ref}/database/password`

> Body parameter

```json
{
  "password": "correct-horse-battery-staple"
}
```

<h3 id="updates-the-database-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[V1UpdatePasswordBody](#schemav1updatepasswordbody)|true|none|
|» password|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

<h3 id="updates-the-database-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[V1UpdatePasswordResponse_Output](#schemav1updatepasswordresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to update database password|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get user-id to role mappings for JIT access

<a id="opIdv1-get-jit-access"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/jit \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/database/jit`

Mappings of roles a user can assume in the project database

<h3 id="get-user-id-to-role-mappings-for-jit-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user_roles": [
    {
      "role": "string",
      "expires_at": 0,
      "allowed_networks": {
        "allowed_cidrs": [
          {
            "cidr": "string"
          }
        ],
        "allowed_cidrs_v6": [
          {
            "cidr": "string"
          }
        ]
      },
      "branches_only": true
    }
  ]
}
```

<h3 id="get-user-id-to-role-mappings-for-jit-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[JitAccessResponse_Output](#schemajitaccessresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to list database jit access|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Updates a user mapping for JIT access

<a id="opIdv1-update-jit-access"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/jit \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "user_id": "55555555-5555-4555-8555-555555555555",
    "roles": [
      {
        "role": "postgres",
        "expires_at": 1740787200,
        "allowed_networks": {
          "allowed_cidrs": [
            {
              "cidr": "203.0.113.0/24"
            }
          ]
        },
        "branches_only": false
      }
    ]
  }'
```

`PUT /v1/projects/{ref}/database/jit`

Modifies the roles that can be assumed and for how long

> Body parameter

```json
{
  "user_id": "55555555-5555-4555-8555-555555555555",
  "roles": [
    {
      "role": "postgres",
      "expires_at": 1740787200,
      "allowed_networks": {
        "allowed_cidrs": [
          {
            "cidr": "203.0.113.0/24"
          }
        ]
      },
      "branches_only": false
    }
  ]
}
```

<h3 id="updates-a-user-mapping-for-jit-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[UpdateJitAccessBody](#schemaupdatejitaccessbody)|true|none|
|» user_id|body|string(uuid)|true|none|
|» roles|body|[object]|true|none|
|» » role|body|string|true|none|
|» » expires_at|body|number|false|none|
|» » allowed_networks|body|object|false|none|
|» » » allowed_cidrs|body|[object]|false|none|
|» » » » cidr|body|string(cidrv4)|true|none|
|» » » allowed_cidrs_v6|body|[object]|false|none|
|» » » » cidr|body|string(cidrv6)|true|none|
|» » branches_only|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user_roles": [
    {
      "role": "string",
      "expires_at": 0,
      "allowed_networks": {
        "allowed_cidrs": [
          {
            "cidr": "string"
          }
        ],
        "allowed_cidrs_v6": [
          {
            "cidr": "string"
          }
        ]
      },
      "branches_only": true
    }
  ]
}
```

<h3 id="updates-a-user-mapping-for-jit-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[JitAccessResponse_Output](#schemajitaccessresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to update JIT access|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Authorize user-id to role mappings for JIT access

<a id="opIdv1-authorize-jit-access"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/jit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "role": "postgres",
    "rhost": "203.0.113.10"
  }'
```

`POST /v1/projects/{ref}/database/jit`

Authorizes the request to assume a role in the project database

> Body parameter

```json
{
  "role": "postgres",
  "rhost": "203.0.113.10"
}
```

<h3 id="authorize-user-id-to-role-mappings-for-jit-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[AuthorizeJitAccessBody](#schemaauthorizejitaccessbody)|true|none|
|» role|body|string|true|none|
|» rhost|body|string(ipv4) \| string(ipv6)|true|none|
|» » *anyOf*|body|string(ipv4)|false|none|
|» » *anyOf*|body|string(ipv6)|false|none|

> Example responses

> 200 Response

```json
{
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "act": "string",
  "user_role": {
    "role": "string",
    "expires_at": 0,
    "allowed_networks": {
      "allowed_cidrs": [
        {
          "cidr": "string"
        }
      ],
      "allowed_cidrs_v6": [
        {
          "cidr": "string"
        }
      ]
    },
    "branches_only": true
  }
}
```

<h3 id="authorize-user-id-to-role-mappings-for-jit-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[JitAuthorizeAccessResponse_Output](#schemajitauthorizeaccessresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to authorize database jit access|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## List all user-id to role mappings for JIT access

<a id="opIdv1-list-jit-access"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/jit/list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/database/jit/list`

Mappings of roles a user can assume in the project database

<h3 id="list-all-user-id-to-role-mappings-for-jit-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "primary_email": "string",
      "invite_id": null,
      "expires_at": null,
      "user_roles": [
        {
          "role": "string",
          "expires_at": 0,
          "allowed_networks": {
            "allowed_cidrs": [
              {
                "cidr": "string"
              }
            ],
            "allowed_cidrs_v6": [
              {
                "cidr": "string"
              }
            ]
          },
          "branches_only": true
        }
      ]
    }
  ]
}
```

<h3 id="list-all-user-id-to-role-mappings-for-jit-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[JitListAccessResponse_Output](#schemajitlistaccessresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to list database jit access|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Invites an external user to a database for JIT access

<a id="opIdv1-invite-external-jit-access"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/jit/invite \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "external-user@somedomain.xyz",
    "roles": [
      {
        "role": "postgres",
        "expires_at": 1740787200,
        "allowed_networks": {
          "allowed_cidrs": [
            {
              "cidr": "203.0.113.0/24"
            }
          ]
        },
        "branches_only": false
      }
    ]
  }'
```

`POST /v1/projects/{ref}/database/jit/invite`

Invites the external user and sets initial roles that can be assumed and for how long

> Body parameter

```json
{
  "email": "external-user@somedomain.xyz",
  "roles": [
    {
      "role": "postgres",
      "expires_at": 1740787200,
      "allowed_networks": {
        "allowed_cidrs": [
          {
            "cidr": "203.0.113.0/24"
          }
        ]
      },
      "branches_only": false
    }
  ]
}
```

<h3 id="invites-an-external-user-to-a-database-for-jit-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[InviteExternalUserJitAccessBody](#schemainviteexternaluserjitaccessbody)|true|none|
|» email|body|string(email)|true|none|
|» roles|body|[object]|true|none|
|» » role|body|string|true|none|
|» » expires_at|body|number|false|none|
|» » allowed_networks|body|object|false|none|
|» » » allowed_cidrs|body|[object]|false|none|
|» » » » cidr|body|string(cidrv4)|true|none|
|» » » allowed_cidrs_v6|body|[object]|false|none|
|» » » » cidr|body|string(cidrv6)|true|none|
|» » branches_only|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "email": "user@example.com",
  "invite_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user_roles": [
    {
      "role": "string",
      "expires_at": 0,
      "allowed_networks": {
        "allowed_cidrs": [
          {
            "cidr": "string"
          }
        ],
        "allowed_cidrs_v6": [
          {
            "cidr": "string"
          }
        ]
      },
      "branches_only": true
    }
  ]
}
```

<h3 id="invites-an-external-user-to-a-database-for-jit-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[InviteExternalUserJitResponse_Output](#schemainviteexternaluserjitresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to invite external user|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Accepts invitation for JIT database access

<a id="opIdv1-accept-invite-external-jit-access"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/jit/invite/accept \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "external-user@somedomain.xyz",
    "token": ""
  }'
```

`POST /v1/projects/{ref}/database/jit/invite/accept`

Accepts the invitation to JIT database access

> Body parameter

```json
{
  "email": "external-user@somedomain.xyz",
  "token": ""
}
```

<h3 id="accepts-invitation-for-jit-database-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[AcceptInviteExternalUserJitAccessBody](#schemaacceptinviteexternaluserjitaccessbody)|true|none|
|» email|body|string(email)|true|none|
|» token|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user_roles": [
    {
      "role": "string",
      "expires_at": 0,
      "allowed_networks": {
        "allowed_cidrs": [
          {
            "cidr": "string"
          }
        ],
        "allowed_cidrs_v6": [
          {
            "cidr": "string"
          }
        ]
      },
      "branches_only": true
    }
  ]
}
```

<h3 id="accepts-invitation-for-jit-database-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[JitAccessResponse_Output](#schemajitaccessresponse_output)|
|500|Internal Server Error|Failed to accept invitation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Deletes the invite for an external user to a database for JIT access

<a id="opIdv1-delete-invite-external-jit-access"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/jit/invite/55555555-5555-4555-8555-555555555555 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/projects/{ref}/database/jit/invite/{invite_id}`

Revokes and deletes the invitation

<h3 id="deletes-the-invite-for-an-external-user-to-a-database-for-jit-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|invite_id|path|string(uuid)|true|none|

<h3 id="deletes-the-invite-for-an-external-user-to-a-database-for-jit-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to revoke invite for external user|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Delete JIT access by user-id

<a id="opIdv1-delete-jit-access"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/jit/55555555-5555-4555-8555-555555555555 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/projects/{ref}/database/jit/{user_id}`

Remove JIT mappings of a user, revoking all JIT database access

<h3 id="delete-jit-access-by-user-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|user_id|path|string(uuid)|true|none|

<h3 id="delete-jit-access-by-user-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to remove JIT access|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get PostgREST OpenAPI spec

<a id="opIdv1-get-database-openapi"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/openapi \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/database/openapi`

Returns the PostgREST OpenAPI specification for the project. This is the replacement for querying `/rest/v1/` directly with the anon key.

<h3 id="get-postgrest-openapi-spec-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|schema|query|string|false|The database schema to generate the OpenAPI spec for|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-postgrest-openapi-spec-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to fetch PostgREST OpenAPI spec|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get project's pgbouncer config

<a id="opIdv1-get-project-pgbouncer-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/database/pgbouncer \
  -H 'Accept: application/json'
```

`GET /v1/projects/{ref}/config/database/pgbouncer`

<h3 id="get-projects-pgbouncer-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "default_pool_size": -9007199254740000,
  "ignore_startup_parameters": "string",
  "max_client_conn": -9007199254740000,
  "pool_mode": "transaction",
  "connection_string": "string",
  "server_idle_timeout": -9007199254740000,
  "server_lifetime": -9007199254740000,
  "query_wait_timeout": -9007199254740000,
  "reserve_pool_size": -9007199254740000
}
```

<h3 id="get-projects-pgbouncer-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[V1PgbouncerConfigResponse_Output](#schemav1pgbouncerconfigresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve project's pgbouncer config|None|

<aside class="success">
This operation does not require authentication
</aside>

## Gets project's supavisor config

<a id="opIdv1-get-pooler-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/database/pooler \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/config/database/pooler`

<h3 id="gets-projects-supavisor-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
[
  {
    "identifier": "string",
    "database_type": "PRIMARY",
    "is_using_scram_auth": true,
    "db_user": "string",
    "db_host": "string",
    "db_port": -9007199254740000,
    "db_name": "string",
    "connection_string": "string",
    "connectionString": "string",
    "default_pool_size": -9007199254740000,
    "max_client_conn": -9007199254740000,
    "pool_mode": "transaction"
  }
]
```

<h3 id="gets-projects-supavisor-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve project's supavisor config|None|

<h3 id="gets-projects-supavisor-config-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SupavisorConfigResponse_Output](#schemasupavisorconfigresponse_output)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Updates project's supavisor config

<a id="opIdv1-update-pooler-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/database/pooler \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "default_pool_size": 25,
    "pool_mode": "transaction"
  }'
```

`PATCH /v1/projects/{ref}/config/database/pooler`

> Body parameter

```json
{
  "default_pool_size": 25,
  "pool_mode": "transaction"
}
```

<h3 id="updates-projects-supavisor-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[UpdateSupavisorConfigBody](#schemaupdatesupavisorconfigbody)|true|none|
|» default_pool_size|body|integer \| null|false|none|
|» pool_mode|body|string|false|Dedicated pooler mode for the project|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» pool_mode|transaction|
|» pool_mode|session|

> Example responses

> 200 Response

```json
{
  "default_pool_size": -9007199254740000,
  "pool_mode": "string"
}
```

<h3 id="updates-projects-supavisor-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UpdateSupavisorConfigResponse_Output](#schemaupdatesupavisorconfigresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to update project's supavisor config|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets project's Postgres config

<a id="opIdv1-get-postgres-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/database/postgres \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/config/database/postgres`

<h3 id="gets-projects-postgres-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "effective_cache_size": "string",
  "logical_decoding_work_mem": "string",
  "pg_stat_statements.max": 100,
  "pg_net.batch_size": 0,
  "autovacuum_max_workers": 1,
  "autovacuum_work_mem": "string",
  "cron.log_statement": true,
  "log_autovacuum_min_duration": "string",
  "log_checkpoints": true,
  "log_connections": true,
  "log_disconnections": true,
  "log_duration": true,
  "log_lock_waits": true,
  "log_recovery_conflict_waits": true,
  "log_replication_commands": true,
  "log_startup_progress_interval": "string",
  "log_temp_files": "string",
  "maintenance_work_mem": "string",
  "track_activity_query_size": "string",
  "max_connections": 1,
  "max_locks_per_transaction": 10,
  "max_logical_replication_workers": 0,
  "max_parallel_maintenance_workers": 0,
  "max_parallel_workers": 0,
  "max_parallel_workers_per_gather": 0,
  "max_replication_slots": -9007199254740000,
  "max_slot_wal_keep_size": "string",
  "max_standby_archive_delay": "string",
  "max_standby_streaming_delay": "string",
  "max_sync_workers_per_subscription": 0,
  "max_wal_size": "string",
  "max_wal_senders": -9007199254740000,
  "max_worker_processes": 0,
  "session_replication_role": "origin",
  "shared_buffers": "string",
  "statement_timeout": "string",
  "track_commit_timestamp": true,
  "wal_keep_size": "string",
  "wal_sender_timeout": "string",
  "work_mem": "string",
  "checkpoint_timeout": "string",
  "hot_standby_feedback": true
}
```

<h3 id="gets-projects-postgres-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PostgresConfigResponse_Output](#schemapostgresconfigresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve project's Postgres config|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Updates project's Postgres config

<a id="opIdv1-update-postgres-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/database/postgres \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "max_connections": 120,
    "shared_buffers": "256MB",
    "work_mem": "4MB",
    "statement_timeout": "60000ms"
  }'
```

`PUT /v1/projects/{ref}/config/database/postgres`

> Body parameter

```json
{
  "max_connections": 120,
  "shared_buffers": "256MB",
  "work_mem": "4MB",
  "statement_timeout": "60000ms"
}
```

<h3 id="updates-projects-postgres-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[UpdatePostgresConfigBody](#schemaupdatepostgresconfigbody)|true|none|
|» effective_cache_size|body|string|false|none|
|» logical_decoding_work_mem|body|string|false|none|
|» pg_stat_statements.max|body|integer|false|none|
|» pg_net.batch_size|body|integer|false|none|
|» autovacuum_max_workers|body|integer|false|none|
|» autovacuum_work_mem|body|string|false|none|
|» cron.log_statement|body|boolean|false|none|
|» log_autovacuum_min_duration|body|string|false|Default unit: ms|
|» log_checkpoints|body|boolean|false|none|
|» log_connections|body|boolean|false|none|
|» log_disconnections|body|boolean|false|none|
|» log_duration|body|boolean|false|none|
|» log_lock_waits|body|boolean|false|none|
|» log_recovery_conflict_waits|body|boolean|false|none|
|» log_replication_commands|body|boolean|false|none|
|» log_startup_progress_interval|body|string|false|Default unit: ms|
|» log_temp_files|body|string|false|none|
|» maintenance_work_mem|body|string|false|none|
|» track_activity_query_size|body|string|false|none|
|» max_connections|body|integer|false|none|
|» max_locks_per_transaction|body|integer|false|none|
|» max_logical_replication_workers|body|integer|false|none|
|» max_parallel_maintenance_workers|body|integer|false|none|
|» max_parallel_workers|body|integer|false|none|
|» max_parallel_workers_per_gather|body|integer|false|none|
|» max_replication_slots|body|integer|false|none|
|» max_slot_wal_keep_size|body|string|false|none|
|» max_standby_archive_delay|body|string|false|none|
|» max_standby_streaming_delay|body|string|false|none|
|» max_sync_workers_per_subscription|body|integer|false|none|
|» max_wal_size|body|string|false|none|
|» max_wal_senders|body|integer|false|none|
|» max_worker_processes|body|integer|false|none|
|» session_replication_role|body|string|false|none|
|» shared_buffers|body|string|false|none|
|» statement_timeout|body|string|false|Default unit: ms|
|» track_commit_timestamp|body|boolean|false|none|
|» wal_keep_size|body|string|false|none|
|» wal_sender_timeout|body|string|false|Default unit: ms|
|» work_mem|body|string|false|none|
|» checkpoint_timeout|body|string|false|Default unit: s|
|» hot_standby_feedback|body|boolean|false|none|
|» restart_database|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» session_replication_role|origin|
|» session_replication_role|replica|
|» session_replication_role|local|

> Example responses

> 200 Response

```json
{
  "effective_cache_size": "string",
  "logical_decoding_work_mem": "string",
  "pg_stat_statements.max": 100,
  "pg_net.batch_size": 0,
  "autovacuum_max_workers": 1,
  "autovacuum_work_mem": "string",
  "cron.log_statement": true,
  "log_autovacuum_min_duration": "string",
  "log_checkpoints": true,
  "log_connections": true,
  "log_disconnections": true,
  "log_duration": true,
  "log_lock_waits": true,
  "log_recovery_conflict_waits": true,
  "log_replication_commands": true,
  "log_startup_progress_interval": "string",
  "log_temp_files": "string",
  "maintenance_work_mem": "string",
  "track_activity_query_size": "string",
  "max_connections": 1,
  "max_locks_per_transaction": 10,
  "max_logical_replication_workers": 0,
  "max_parallel_maintenance_workers": 0,
  "max_parallel_workers": 0,
  "max_parallel_workers_per_gather": 0,
  "max_replication_slots": -9007199254740000,
  "max_slot_wal_keep_size": "string",
  "max_standby_archive_delay": "string",
  "max_standby_streaming_delay": "string",
  "max_sync_workers_per_subscription": 0,
  "max_wal_size": "string",
  "max_wal_senders": -9007199254740000,
  "max_worker_processes": 0,
  "session_replication_role": "origin",
  "shared_buffers": "string",
  "statement_timeout": "string",
  "track_commit_timestamp": true,
  "wal_keep_size": "string",
  "wal_sender_timeout": "string",
  "work_mem": "string",
  "checkpoint_timeout": "string",
  "hot_standby_feedback": true
}
```

<h3 id="updates-projects-postgres-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PostgresConfigResponse_Output](#schemapostgresconfigresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to update project's Postgres config|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Lists all backups

<a id="opIdv1-list-all-backups"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/backups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/database/backups`

<h3 id="lists-all-backups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "region": "string",
  "walg_enabled": true,
  "pitr_enabled": true,
  "backups": [
    {
      "id": -9007199254740000,
      "is_physical_backup": true,
      "status": "COMPLETED",
      "inserted_at": "string"
    }
  ],
  "physical_backup_data": {
    "earliest_physical_backup_date_unix": -9007199254740000,
    "latest_physical_backup_date_unix": -9007199254740000
  }
}
```

<h3 id="lists-all-backups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[V1BackupsResponse_Output](#schemav1backupsresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to get backups|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Restores a PITR backup for a database

<a id="opIdv1-restore-pitr-backup"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/backups/restore-pitr \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "recovery_time_target_unix": 1740787200
  }'
```

`POST /v1/projects/{ref}/database/backups/restore-pitr`

> Body parameter

```json
{
  "recovery_time_target_unix": 1740787200
}
```

<h3 id="restores-a-pitr-backup-for-a-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[V1RestorePitrBody](#schemav1restorepitrbody)|true|none|
|» recovery_time_target_unix|body|integer(int64)|true|none|

<h3 id="restores-a-pitr-backup-for-a-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get restore points for project

<a id="opIdv1-get-restore-point"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/backups/restore-point \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/database/backups/restore-point`

<h3 id="get-restore-points-for-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|name|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "status": "AVAILABLE",
  "completed_on": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-restore-points-for-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[V1RestorePointResponse](#schemav1restorepointresponse)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to get requested restore points|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Initiates a creation of a restore point for a database

<a id="opIdv1-create-restore-point"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/backups/restore-point \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "before-upgrade"
  }'
```

`POST /v1/projects/{ref}/database/backups/restore-point`

> Body parameter

```json
{
  "name": "before-upgrade"
}
```

<h3 id="initiates-a-creation-of-a-restore-point-for-a-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[V1RestorePointPostBody](#schemav1restorepointpostbody)|true|none|
|» name|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "name": "string",
  "status": "AVAILABLE",
  "completed_on": "1970-01-01T00:00:00Z"
}
```

<h3 id="initiates-a-creation-of-a-restore-point-for-a-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[V1RestorePointResponse](#schemav1restorepointresponse)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Restores a physical backup for a database

<a id="opIdv1-restore-physical-backup"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/backups/restore \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": 12345
  }'
```

`POST /v1/projects/{ref}/database/backups/restore`

> Body parameter

```json
{
  "id": 12345
}
```

<h3 id="restores-a-physical-backup-for-a-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[V1RestoreBackupBody](#schemav1restorebackupbody)|true|none|
|» id|body|integer|true|none|

<h3 id="restores-a-physical-backup-for-a-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets the backup schedule for a project

<a id="opIdv1-get-backup-schedule"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/backups/schedule \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/database/backups/schedule`

<h3 id="gets-the-backup-schedule-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "schedule_for": "04:00:00",
  "updated_at": "2026-05-04T14:40:44+00:00"
}
```

> 402 Response

```json
{
  "message": "string",
  "error": {
    "code": "entitlement_required",
    "feature": "string",
    "upgrade_url": "string"
  }
}
```

<h3 id="gets-the-backup-schedule-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[V1BackupScheduleResponse_Output](#schemav1backupscheduleresponse_output)|
|401|Unauthorized|Unauthorized|None|
|402|Payment Required|This feature requires the Enterprise organization plan.|[PlanGateErrorBody](#schemaplangateerrorbody)|
|403|Forbidden|Forbidden action|None|
|404|Not Found|Project or backup schedule not found|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve backup schedule|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Updates the backup schedule time for a project

<a id="opIdv1-update-backup-schedule"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/backups/schedule \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "schedule_for": "04:00:00"
  }'
```

`PATCH /v1/projects/{ref}/database/backups/schedule`

Sets the time at which the daily backup runs. The change takes effect on the next backup window that includes the new time. If the new time has already passed for today, the first backup at the new time will occur the following day. It can only be updated 3 times per 24 hours.

> Body parameter

```json
{
  "schedule_for": "04:00:00"
}
```

<h3 id="updates-the-backup-schedule-time-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[V1UpdateBackupScheduleBody](#schemav1updatebackupschedulebody)|true|none|
|» schedule_for|body|string|true|Time of day to schedule daily backups, in UTC. Format: HH:MM:SS.|

> Example responses

> 200 Response

```json
{
  "schedule_for": "04:00:00",
  "updated_at": "2026-05-04T14:40:44+00:00"
}
```

> 402 Response

```json
{
  "message": "string",
  "error": {
    "code": "entitlement_required",
    "feature": "string",
    "upgrade_url": "string"
  }
}
```

<h3 id="updates-the-backup-schedule-time-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[V1BackupScheduleResponse_Output](#schemav1backupscheduleresponse_output)|
|400|Bad Request|Invalid schedule_for format|None|
|401|Unauthorized|Unauthorized|None|
|402|Payment Required|This feature requires the Enterprise organization plan.|[PlanGateErrorBody](#schemaplangateerrorbody)|
|403|Forbidden|Forbidden action|None|
|404|Not Found|Project or backup schedule not found|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to update backup schedule|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Initiates an undo to a given restore point

<a id="opIdv1-undo"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/database/backups/undo \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "before-upgrade"
  }'
```

`POST /v1/projects/{ref}/database/backups/undo`

> Body parameter

```json
{
  "name": "before-upgrade"
}
```

<h3 id="initiates-an-undo-to-a-given-restore-point-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[V1UndoBody](#schemav1undobody)|true|none|
|» name|body|string|true|none|

<h3 id="initiates-an-undo-to-a-given-restore-point-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="supabase-api-v1-domains">Domains</h1>

Domains related endpoints

## Gets project's custom hostname config

<a id="opIdv1-get-hostname-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/custom-hostname \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/custom-hostname`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

<h3 id="gets-projects-custom-hostname-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "status": "1_not_started",
  "custom_hostname": "string",
  "data": {
    "success": true,
    "errors": [
      "string"
    ],
    "messages": [
      "string"
    ],
    "result": {
      "id": "string",
      "hostname": "string",
      "ssl": {
        "status": "string",
        "validation_records": [
          {
            "txt_name": "string",
            "txt_value": "string"
          }
        ],
        "validation_errors": [
          {
            "message": "string"
          }
        ]
      },
      "ownership_verification": {
        "type": "string",
        "name": "string",
        "value": "string"
      },
      "custom_origin_server": "string",
      "verification_errors": [
        "string"
      ],
      "status": "string"
    }
  }
}
```

<h3 id="gets-projects-custom-hostname-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UpdateCustomHostnameResponse_Output](#schemaupdatecustomhostnameresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve project's custom hostname config|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Deletes a project's custom hostname configuration

<a id="opIdv1-Delete hostname config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/custom-hostname \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/projects/{ref}/custom-hostname`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

<h3 id="deletes-a-projects-custom-hostname-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|remove_addon|query|string|false|If true, also removes the custom domain add-on from the project subscription.|

<h3 id="deletes-a-projects-custom-hostname-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to delete project custom hostname configuration|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Updates project's custom hostname configuration

<a id="opIdv1-update-hostname-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/custom-hostname/initialize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "custom_hostname": "docs.example.com"
  }'
```

`POST /v1/projects/{ref}/custom-hostname/initialize`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

> Body parameter

```json
{
  "custom_hostname": "docs.example.com"
}
```

<h3 id="updates-projects-custom-hostname-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[UpdateCustomHostnameBody](#schemaupdatecustomhostnamebody)|true|none|
|» custom_hostname|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "status": "1_not_started",
  "custom_hostname": "string",
  "data": {
    "success": true,
    "errors": [
      "string"
    ],
    "messages": [
      "string"
    ],
    "result": {
      "id": "string",
      "hostname": "string",
      "ssl": {
        "status": "string",
        "validation_records": [
          {
            "txt_name": "string",
            "txt_value": "string"
          }
        ],
        "validation_errors": [
          {
            "message": "string"
          }
        ]
      },
      "ownership_verification": {
        "type": "string",
        "name": "string",
        "value": "string"
      },
      "custom_origin_server": "string",
      "verification_errors": [
        "string"
      ],
      "status": "string"
    }
  }
}
```

<h3 id="updates-projects-custom-hostname-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[UpdateCustomHostnameResponse_Output](#schemaupdatecustomhostnameresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to update project custom hostname configuration|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Attempts to verify the DNS configuration for project's custom hostname configuration

<a id="opIdv1-verify-dns-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/custom-hostname/reverify \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/projects/{ref}/custom-hostname/reverify`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

<h3 id="attempts-to-verify-the-dns-configuration-for-projects-custom-hostname-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 201 Response

```json
{
  "status": "1_not_started",
  "custom_hostname": "string",
  "data": {
    "success": true,
    "errors": [
      "string"
    ],
    "messages": [
      "string"
    ],
    "result": {
      "id": "string",
      "hostname": "string",
      "ssl": {
        "status": "string",
        "validation_records": [
          {
            "txt_name": "string",
            "txt_value": "string"
          }
        ],
        "validation_errors": [
          {
            "message": "string"
          }
        ]
      },
      "ownership_verification": {
        "type": "string",
        "name": "string",
        "value": "string"
      },
      "custom_origin_server": "string",
      "verification_errors": [
        "string"
      ],
      "status": "string"
    }
  }
}
```

<h3 id="attempts-to-verify-the-dns-configuration-for-projects-custom-hostname-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[UpdateCustomHostnameResponse_Output](#schemaupdatecustomhostnameresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to verify project custom hostname configuration|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Activates a custom hostname for a project.

<a id="opIdv1-activate-custom-hostname"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/custom-hostname/activate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/projects/{ref}/custom-hostname/activate`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

<h3 id="activates-a-custom-hostname-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 201 Response

```json
{
  "status": "1_not_started",
  "custom_hostname": "string",
  "data": {
    "success": true,
    "errors": [
      "string"
    ],
    "messages": [
      "string"
    ],
    "result": {
      "id": "string",
      "hostname": "string",
      "ssl": {
        "status": "string",
        "validation_records": [
          {
            "txt_name": "string",
            "txt_value": "string"
          }
        ],
        "validation_errors": [
          {
            "message": "string"
          }
        ]
      },
      "ownership_verification": {
        "type": "string",
        "name": "string",
        "value": "string"
      },
      "custom_origin_server": "string",
      "verification_errors": [
        "string"
      ],
      "status": "string"
    }
  }
}
```

<h3 id="activates-a-custom-hostname-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[UpdateCustomHostnameResponse_Output](#schemaupdatecustomhostnameresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to activate project custom hostname configuration|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets current vanity subdomain config

<a id="opIdv1-get-vanity-subdomain-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/vanity-subdomain \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/vanity-subdomain`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

<h3 id="gets-current-vanity-subdomain-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "status": "not-used",
  "custom_domain": "string"
}
```

> 400 Response

```json
{
  "message": "string",
  "error": {
    "code": "entitlement_required",
    "feature": "string",
    "upgrade_url": "string"
  }
}
```

<h3 id="gets-current-vanity-subdomain-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VanitySubdomainConfigResponse_Output](#schemavanitysubdomainconfigresponse_output)|
|400|Bad Request|This feature requires the Pro, Team, or Enterprise organization plan.|[PlanGateErrorBody](#schemaplangateerrorbody)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to get project vanity subdomain configuration|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Deletes a project's vanity subdomain configuration

<a id="opIdv1-deactivate-vanity-subdomain-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/vanity-subdomain \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/projects/{ref}/vanity-subdomain`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

<h3 id="deletes-a-projects-vanity-subdomain-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

<h3 id="deletes-a-projects-vanity-subdomain-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to delete project vanity subdomain configuration|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Checks vanity subdomain availability

<a id="opIdv1-check-vanity-subdomain-availability"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/vanity-subdomain/check-availability \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "vanity_subdomain": "acme-prod"
  }'
```

`POST /v1/projects/{ref}/vanity-subdomain/check-availability`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

> Body parameter

```json
{
  "vanity_subdomain": "acme-prod"
}
```

<h3 id="checks-vanity-subdomain-availability-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[VanitySubdomainBody](#schemavanitysubdomainbody)|true|none|
|» vanity_subdomain|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "available": true
}
```

> 400 Response

```json
{
  "message": "string",
  "error": {
    "code": "entitlement_required",
    "feature": "string",
    "upgrade_url": "string"
  }
}
```

<h3 id="checks-vanity-subdomain-availability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[SubdomainAvailabilityResponse_Output](#schemasubdomainavailabilityresponse_output)|
|400|Bad Request|This feature requires the Pro, Team, or Enterprise organization plan.|[PlanGateErrorBody](#schemaplangateerrorbody)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to check project vanity subdomain configuration|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Activates a vanity subdomain for a project.

<a id="opIdv1-activate-vanity-subdomain-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/vanity-subdomain/activate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "vanity_subdomain": "acme-prod"
  }'
```

`POST /v1/projects/{ref}/vanity-subdomain/activate`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

> Body parameter

```json
{
  "vanity_subdomain": "acme-prod"
}
```

<h3 id="activates-a-vanity-subdomain-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[VanitySubdomainBody](#schemavanitysubdomainbody)|true|none|
|» vanity_subdomain|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "custom_domain": "string"
}
```

> 400 Response

```json
{
  "message": "string",
  "error": {
    "code": "entitlement_required",
    "feature": "string",
    "upgrade_url": "string"
  }
}
```

<h3 id="activates-a-vanity-subdomain-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[ActivateVanitySubdomainResponse_Output](#schemaactivatevanitysubdomainresponse_output)|
|400|Bad Request|This feature requires the Pro, Team, or Enterprise organization plan.|[PlanGateErrorBody](#schemaplangateerrorbody)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to activate project vanity subdomain configuration|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="supabase-api-v1-edge-functions">Edge Functions</h1>

Edge related endpoints

## List all functions

<a id="opIdv1-list-all-functions"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/functions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/functions`

Returns all functions you've previously added to the specified project.

<h3 id="list-all-functions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "slug": "string",
    "name": "string",
    "status": "ACTIVE",
    "version": -9007199254740000,
    "created_at": -9007199254740000,
    "updated_at": -9007199254740000,
    "verify_jwt": true,
    "import_map": true,
    "entrypoint_path": "string",
    "import_map_path": "string",
    "ezbr_sha256": "string"
  }
]
```

<h3 id="list-all-functions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve project's functions|None|

<h3 id="list-all-functions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FunctionResponse_Output](#schemafunctionresponse_output)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Bulk update functions

<a id="opIdv1-bulk-update-functions"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/functions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "id": "3c078cce-ad70-4148-9f37-4da362789053",
      "slug": "hello-world",
      "name": "Hello World",
      "status": "ACTIVE",
      "version": 2,
      "verify_jwt": true,
      "entrypoint_path": "index.ts"
    }
  ]'
```

`PUT /v1/projects/{ref}/functions`

Bulk update functions. It will create a new function or replace existing. The operation is idempotent. NOTE: You will need to manually bump the version.

> Body parameter

```json
[
  {
    "id": "3c078cce-ad70-4148-9f37-4da362789053",
    "slug": "hello-world",
    "name": "Hello World",
    "status": "ACTIVE",
    "version": 2,
    "verify_jwt": true,
    "entrypoint_path": "index.ts"
  }
]
```

<h3 id="bulk-update-functions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[BulkUpdateFunctionBody](#schemabulkupdatefunctionbody)|true|none|
|» id|body|string|true|none|
|» slug|body|string|true|none|
|» name|body|string|true|none|
|» status|body|string|true|none|
|» version|body|integer|true|none|
|» created_at|body|integer(int64)|false|none|
|» verify_jwt|body|boolean|false|none|
|» import_map|body|boolean|false|none|
|» entrypoint_path|body|string|false|none|
|» import_map_path|body|string|false|none|
|» ezbr_sha256|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|ACTIVE|
|» status|REMOVED|
|» status|THROTTLED|

> Example responses

> 200 Response

```json
{
  "functions": [
    {
      "id": "string",
      "slug": "string",
      "name": "string",
      "status": "ACTIVE",
      "version": -9007199254740000,
      "created_at": -9007199254740000,
      "updated_at": -9007199254740000,
      "verify_jwt": true,
      "import_map": true,
      "entrypoint_path": "string",
      "import_map_path": "string",
      "ezbr_sha256": "string"
    }
  ]
}
```

<h3 id="bulk-update-functions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BulkUpdateFunctionResponse_Output](#schemabulkupdatefunctionresponse_output)|
|401|Unauthorized|Unauthorized|None|
|402|Payment Required|Maximum number of functions reached for Plan|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to update functions|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Create a function

<a id="opIdv1-create-a-function"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/functions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "slug": "hello-world",
    "name": "Hello World",
    "body": "Deno.serve(() => new Response('\''Hello, world!'\''))",
    "verify_jwt": true
  }'
```

`POST /v1/projects/{ref}/functions`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint is deprecated - use the deploy endpoint. Creates a function and adds it to the specified project.

> Body parameter

```json
{
  "slug": "hello-world",
  "name": "Hello World",
  "body": "Deno.serve(() => new Response('Hello, world!'))",
  "verify_jwt": true
}
```

<h3 id="create-a-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|slug|query|string|false|none|
|name|query|string|false|none|
|verify_jwt|query|string|false|none|
|import_map|query|string|false|none|
|entrypoint_path|query|string|false|none|
|import_map_path|query|string|false|none|
|ezbr_sha256|query|string|false|none|
|body|body|[V1CreateFunctionBody](#schemav1createfunctionbody)|true|none|
|» slug|body|string|true|none|
|» name|body|string|true|none|
|» body|body|string|true|none|
|» verify_jwt|body|boolean|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "slug": "string",
  "name": "string",
  "status": "ACTIVE",
  "version": -9007199254740000,
  "created_at": -9007199254740000,
  "updated_at": -9007199254740000,
  "verify_jwt": true,
  "import_map": true,
  "entrypoint_path": "string",
  "import_map_path": "string",
  "ezbr_sha256": "string"
}
```

<h3 id="create-a-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[FunctionResponse_Output](#schemafunctionresponse_output)|
|401|Unauthorized|Unauthorized|None|
|402|Payment Required|Maximum number of functions reached for Plan|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to create project's function|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Deploy a function

<a id="opIdv1-deploy-a-function"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/functions/deploy \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'file=["./supabase/functions/hello-world/index.ts"]' \
  -F 'metadata={"entrypoint_path":"index.ts","verify_jwt":true,"name":"Hello World"}'
```

`POST /v1/projects/{ref}/functions/deploy`

A new endpoint to deploy functions. It will create if function does not exist.

> Body parameter

```yaml
file:
  - "./supabase/functions/hello-world/index.ts"
metadata:
  entrypoint_path: index.ts
  verify_jwt: true
  name: Hello World
```

<h3 id="deploy-a-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|slug|query|string|false|none|
|bundleOnly|query|string|false|none|
|body|body|[FunctionDeployBody](#schemafunctiondeploybody)|true|none|
|» file|body|[string(binary)]|true|none|
|» metadata|body|object|true|none|
|» » entrypoint_path|body|string|true|none|
|» » import_map_path|body|string|false|none|
|» » static_patterns|body|[string]|false|none|
|» » verify_jwt|body|boolean|false|none|
|» » name|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "slug": "string",
  "name": "string",
  "status": "ACTIVE",
  "version": -9007199254740000,
  "created_at": -9007199254740000,
  "updated_at": -9007199254740000,
  "verify_jwt": true,
  "import_map": true,
  "entrypoint_path": "string",
  "import_map_path": "string",
  "ezbr_sha256": "string"
}
```

<h3 id="deploy-a-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[DeployFunctionResponse_Output](#schemadeployfunctionresponse_output)|
|401|Unauthorized|Unauthorized|None|
|402|Payment Required|Maximum number of functions reached for Plan|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to deploy function|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Retrieve a function

<a id="opIdv1-get-a-function"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/functions/hello-world \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/functions/{function_slug}`

Retrieves a function with the specified slug and project.

<h3 id="retrieve-a-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|function_slug|path|string|true|Function slug|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "slug": "string",
  "name": "string",
  "status": "ACTIVE",
  "version": -9007199254740000,
  "created_at": -9007199254740000,
  "updated_at": -9007199254740000,
  "verify_jwt": true,
  "import_map": true,
  "entrypoint_path": "string",
  "import_map_path": "string",
  "ezbr_sha256": "string"
}
```

<h3 id="retrieve-a-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[FunctionSlugResponse_Output](#schemafunctionslugresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve function with given slug|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Delete a function

<a id="opIdv1-delete-a-function"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/functions/hello-world \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/projects/{ref}/functions/{function_slug}`

Deletes a function with the specified slug from the specified project.

<h3 id="delete-a-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|function_slug|path|string|true|Function slug|

<h3 id="delete-a-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to delete function with given slug|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Update a function

<a id="opIdv1-update-a-function"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/functions/hello-world \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Hello World",
    "body": "Deno.serve(() => new Response('\''Hello again!'\''))",
    "verify_jwt": true
  }'
```

`PATCH /v1/projects/{ref}/functions/{function_slug}`

Updates a function with the specified slug and project.

> Body parameter

```json
{
  "name": "Hello World",
  "body": "Deno.serve(() => new Response('Hello again!'))",
  "verify_jwt": true
}
```

<h3 id="update-a-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|function_slug|path|string|true|Function slug|
|slug|query|string|false|none|
|name|query|string|false|none|
|verify_jwt|query|string|false|none|
|import_map|query|string|false|none|
|entrypoint_path|query|string|false|none|
|import_map_path|query|string|false|none|
|ezbr_sha256|query|string|false|none|
|body|body|[V1UpdateFunctionBodyJson](#schemav1updatefunctionbodyjson)|true|none|
|» name|body|string|false|none|
|» body|body|string|false|none|
|» verify_jwt|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "slug": "string",
  "name": "string",
  "status": "ACTIVE",
  "version": -9007199254740000,
  "created_at": -9007199254740000,
  "updated_at": -9007199254740000,
  "verify_jwt": true,
  "import_map": true,
  "entrypoint_path": "string",
  "import_map_path": "string",
  "ezbr_sha256": "string"
}
```

<h3 id="update-a-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[FunctionSlugResponse_Output](#schemafunctionslugresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to update function with given slug|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Retrieve a function body

<a id="opIdv1-get-a-function-body"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/functions/hello-world/body \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/functions/{function_slug}/body`

Retrieves a function body for the specified slug and project.

<h3 id="retrieve-a-function-body-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|function_slug|path|string|true|Function slug|

> Example responses

> 200 Response

```json
{}
```

<h3 id="retrieve-a-function-body-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[StreamableFile](#schemastreamablefile)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve function body with given slug|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="supabase-api-v1-environments">Environments</h1>

Environments related endpoints

## Get database branch config

<a id="opIdv1-get-a-branch-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/branches/abcdefghijklmnopqrst \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/branches/{branch_id_or_ref}`

Fetches configurations of the specified database branch

<h3 id="get-database-branch-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|branch_id_or_ref|path|string \| string(uuid)|true|Branch ref or deprecated branch ID|

> Example responses

> 200 Response

```json
{
  "ref": "string",
  "postgres_version": "string",
  "postgres_engine": "string",
  "release_channel": "string",
  "status": "INACTIVE",
  "db_host": "string",
  "db_port": 1,
  "db_user": "string",
  "db_pass": "string",
  "jwt_secret": "string"
}
```

<h3 id="get-database-branch-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BranchDetailResponse_Output](#schemabranchdetailresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve database branch|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Delete a database branch

<a id="opIdv1-delete-a-branch"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/branches/abcdefghijklmnopqrst \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/branches/{branch_id_or_ref}`

Deletes the specified database branch. By default, deletes immediately. Use force=false to schedule deletion with 1-hour grace period (only when soft deletion is enabled).

<h3 id="delete-a-database-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|branch_id_or_ref|path|string \| string(uuid)|true|Branch ref or deprecated branch ID|
|force|query|string|false|If set to false, schedule deletion with 1-hour grace period (only when soft deletion is enabled).|

> Example responses

> 200 Response

```json
{
  "message": "ok"
}
```

<h3 id="delete-a-database-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BranchDeleteResponse_Output](#schemabranchdeleteresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to delete database branch|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Update database branch config

<a id="opIdv1-update-a-branch-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/branches/abcdefghijklmnopqrst \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "branch_name": "preview-login-page",
    "git_branch": "feature/login-page",
    "persistent": true,
    "request_review": true,
    "notify_url": "https://example.com/webhooks/branches"
  }'
```

`PATCH /v1/branches/{branch_id_or_ref}`

Updates the configuration of the specified database branch

> Body parameter

```json
{
  "branch_name": "preview-login-page",
  "git_branch": "feature/login-page",
  "persistent": true,
  "request_review": true,
  "notify_url": "https://example.com/webhooks/branches"
}
```

<h3 id="update-database-branch-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|branch_id_or_ref|path|string \| string(uuid)|true|Branch ref or deprecated branch ID|
|body|body|[UpdateBranchBody](#schemaupdatebranchbody)|true|none|
|» branch_name|body|string|false|none|
|» git_branch|body|string|false|none|
|» reset_on_push|body|boolean|false|**Deprecated.** This field is deprecated and will be ignored. Use v1-reset-a-branch endpoint directly instead.|
|» persistent|body|boolean|false|none|
|» status|body|string|false|none|
|» request_review|body|boolean|false|none|
|» notify_url|body|string(uri)|false|HTTP endpoint to receive branch status updates.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|CREATING_PROJECT|
|» status|RUNNING_MIGRATIONS|
|» status|MIGRATIONS_PASSED|
|» status|MIGRATIONS_FAILED|
|» status|FUNCTIONS_DEPLOYED|
|» status|FUNCTIONS_FAILED|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "project_ref": "string",
  "parent_project_ref": "string",
  "is_default": true,
  "git_branch": "string",
  "pr_number": -9007199254740000,
  "latest_check_run_id": 0,
  "persistent": true,
  "status": "CREATING_PROJECT",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "review_requested_at": "1970-01-01T00:00:00Z",
  "with_data": true,
  "notify_url": "http://example.com",
  "deletion_scheduled_at": "1970-01-01T00:00:00Z",
  "preview_project_status": "INACTIVE"
}
```

<h3 id="update-database-branch-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BranchResponse_Output](#schemabranchresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to update database branch|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Pushes a database branch

<a id="opIdv1-push-a-branch"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/branches/abcdefghijklmnopqrst/push \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "migration_version": "20250312000000"
  }'
```

`POST /v1/branches/{branch_id_or_ref}/push`

Pushes the specified database branch

> Body parameter

```json
{
  "migration_version": "20250312000000"
}
```

<h3 id="pushes-a-database-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|branch_id_or_ref|path|string \| string(uuid)|true|Branch ref or deprecated branch ID|
|body|body|[BranchActionBody](#schemabranchactionbody)|true|none|
|» migration_version|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "workflow_run_id": "string",
  "message": "ok"
}
```

<h3 id="pushes-a-database-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[BranchUpdateResponse_Output](#schemabranchupdateresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to push database branch|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Merges a database branch

<a id="opIdv1-merge-a-branch"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/branches/abcdefghijklmnopqrst/merge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "migration_version": "20250312000000"
  }'
```

`POST /v1/branches/{branch_id_or_ref}/merge`

Merges the specified database branch

> Body parameter

```json
{
  "migration_version": "20250312000000"
}
```

<h3 id="merges-a-database-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|branch_id_or_ref|path|string \| string(uuid)|true|Branch ref or deprecated branch ID|
|body|body|[BranchActionBody](#schemabranchactionbody)|true|none|
|» migration_version|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "workflow_run_id": "string",
  "message": "ok"
}
```

<h3 id="merges-a-database-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[BranchUpdateResponse_Output](#schemabranchupdateresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to merge database branch|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Resets a database branch

<a id="opIdv1-reset-a-branch"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/branches/abcdefghijklmnopqrst/reset \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "migration_version": "20250312000000"
  }'
```

`POST /v1/branches/{branch_id_or_ref}/reset`

Resets the specified database branch

> Body parameter

```json
{
  "migration_version": "20250312000000"
}
```

<h3 id="resets-a-database-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|branch_id_or_ref|path|string \| string(uuid)|true|Branch ref or deprecated branch ID|
|body|body|[BranchActionBody](#schemabranchactionbody)|true|none|
|» migration_version|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "workflow_run_id": "string",
  "message": "ok"
}
```

<h3 id="resets-a-database-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[BranchUpdateResponse_Output](#schemabranchupdateresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to reset database branch|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Restore a scheduled branch deletion

<a id="opIdv1-restore-a-branch"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/branches/abcdefghijklmnopqrst/restore \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/branches/{branch_id_or_ref}/restore`

Cancels scheduled deletion and restores the branch to active state

<h3 id="restore-a-scheduled-branch-deletion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|branch_id_or_ref|path|string \| string(uuid)|true|Branch ref or deprecated branch ID|

> Example responses

> 201 Response

```json
{
  "message": "Branch restoration initiated"
}
```

<h3 id="restore-a-scheduled-branch-deletion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[BranchRestoreResponse_Output](#schemabranchrestoreresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to restore database branch|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Diffs a database branch

<a id="opIdv1-diff-a-branch"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/branches/abcdefghijklmnopqrst/diff \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/branches/{branch_id_or_ref}/diff`

Diffs the specified database branch

This endpoint is currently in its **Beta** stage.

<h3 id="diffs-a-database-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|branch_id_or_ref|path|string \| string(uuid)|true|Branch ref or deprecated branch ID|
|included_schemas|query|string|false|none|
|pgdelta|query|string|false|Use pg-delta instead of Migra for diffing when true. <br>Boolean string.<br><br>Truthy values: `true`, `1`, `yes`, `on`, `y`, `enabled`<br><br>Falsy values: `false`, `0`, `no`, `off`, `n`, `disabled`|

<h3 id="diffs-a-database-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to diff database branch|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## List all action runs

<a id="opIdv1-list-action-runs"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/actions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/actions`

Returns a paginated list of action runs of the specified project.

<h3 id="list-all-action-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|offset|query|number|false|none|
|limit|query|number|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "branch_id": "string",
    "run_steps": [
      {
        "name": "clone",
        "status": "CREATED",
        "created_at": "string",
        "updated_at": "string"
      }
    ],
    "git_config": null,
    "workdir": "string",
    "check_run_id": 0,
    "created_at": "string",
    "updated_at": "string"
  }
]
```

<h3 id="list-all-action-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListActionRunResponse_Output](#schemalistactionrunresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to list action runs|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Count the number of action runs

<a id="opIdv1-count-action-runs"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/actions \
  -X HEAD \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`HEAD /v1/projects/{ref}/actions`

Returns the total number of action runs of the specified project.

<h3 id="count-the-number-of-action-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

<h3 id="count-the-number-of-action-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to count action runs|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Total-Count|integer|int64|total count value|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get the status of an action run

<a id="opIdv1-get-action-run"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/actions/run_01hq3q9m7y5q7e4a7x2c8m1p4n \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/actions/{run_id}`

Returns the current status of the specified action run.

<h3 id="get-the-status-of-an-action-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|run_id|path|string|true|Action Run ID|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "branch_id": "string",
  "run_steps": [
    {
      "name": "clone",
      "status": "CREATED",
      "created_at": "string",
      "updated_at": "string"
    }
  ],
  "git_config": null,
  "workdir": "string",
  "check_run_id": 0,
  "created_at": "string",
  "updated_at": "string"
}
```

<h3 id="get-the-status-of-an-action-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ActionRunResponse_Output](#schemaactionrunresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to get action run status|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Update the status of an action run

<a id="opIdv1-update-action-run-status"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/actions/run_01hq3q9m7y5q7e4a7x2c8m1p4n/status \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clone": "RUNNING",
    "configure": "RUNNING",
    "migrate": "RUNNING",
    "deploy": "CREATED"
  }'
```

`PATCH /v1/projects/{ref}/actions/{run_id}/status`

Updates the status of an ongoing action run.

> Body parameter

```json
{
  "clone": "RUNNING",
  "configure": "RUNNING",
  "migrate": "RUNNING",
  "deploy": "CREATED"
}
```

<h3 id="update-the-status-of-an-action-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|run_id|path|string|true|Action Run ID|
|body|body|[UpdateRunStatusBody](#schemaupdaterunstatusbody)|true|none|
|» clone|body|string|false|none|
|» pull|body|string|false|none|
|» health|body|string|false|none|
|» configure|body|string|false|none|
|» migrate|body|string|false|none|
|» seed|body|string|false|none|
|» deploy|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» clone|CREATED|
|» clone|DEAD|
|» clone|EXITED|
|» clone|PAUSED|
|» clone|REMOVING|
|» clone|RESTARTING|
|» clone|RUNNING|
|» pull|CREATED|
|» pull|DEAD|
|» pull|EXITED|
|» pull|PAUSED|
|» pull|REMOVING|
|» pull|RESTARTING|
|» pull|RUNNING|
|» health|CREATED|
|» health|DEAD|
|» health|EXITED|
|» health|PAUSED|
|» health|REMOVING|
|» health|RESTARTING|
|» health|RUNNING|
|» configure|CREATED|
|» configure|DEAD|
|» configure|EXITED|
|» configure|PAUSED|
|» configure|REMOVING|
|» configure|RESTARTING|
|» configure|RUNNING|
|» migrate|CREATED|
|» migrate|DEAD|
|» migrate|EXITED|
|» migrate|PAUSED|
|» migrate|REMOVING|
|» migrate|RESTARTING|
|» migrate|RUNNING|
|» seed|CREATED|
|» seed|DEAD|
|» seed|EXITED|
|» seed|PAUSED|
|» seed|REMOVING|
|» seed|RESTARTING|
|» seed|RUNNING|
|» deploy|CREATED|
|» deploy|DEAD|
|» deploy|EXITED|
|» deploy|PAUSED|
|» deploy|REMOVING|
|» deploy|RESTARTING|
|» deploy|RUNNING|

> Example responses

> 200 Response

```json
{
  "message": "ok"
}
```

<h3 id="update-the-status-of-an-action-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UpdateRunStatusResponse_Output](#schemaupdaterunstatusresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to update action run status|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get the logs of an action run

<a id="opIdv1-get-action-run-logs"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/actions/run_01hq3q9m7y5q7e4a7x2c8m1p4n/logs \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/actions/{run_id}/logs`

Returns the logs from the specified action run.

<h3 id="get-the-logs-of-an-action-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|run_id|path|string|true|Action Run ID|

<h3 id="get-the-logs-of-an-action-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to get action run logs|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## List all database branches

<a id="opIdv1-list-all-branches"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/branches \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/branches`

Returns all database branches of the specified project.

<h3 id="list-all-database-branches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "project_ref": "string",
    "parent_project_ref": "string",
    "is_default": true,
    "git_branch": "string",
    "pr_number": -9007199254740000,
    "latest_check_run_id": 0,
    "persistent": true,
    "status": "CREATING_PROJECT",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "review_requested_at": "1970-01-01T00:00:00Z",
    "with_data": true,
    "notify_url": "http://example.com",
    "deletion_scheduled_at": "1970-01-01T00:00:00Z",
    "preview_project_status": "INACTIVE"
  }
]
```

<h3 id="list-all-database-branches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve database branches|None|

<h3 id="list-all-database-branches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BranchResponse_Output](#schemabranchresponse_output)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Create a database branch

<a id="opIdv1-create-a-branch"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/branches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "branch_name": "preview-login-page",
    "git_branch": "feature/login-page",
    "persistent": true,
    "with_data": false,
    "notify_url": "https://example.com/webhooks/branches"
  }'
```

`POST /v1/projects/{ref}/branches`

Creates a database branch from the specified project.

> Body parameter

```json
{
  "branch_name": "preview-login-page",
  "git_branch": "feature/login-page",
  "persistent": true,
  "with_data": false,
  "notify_url": "https://example.com/webhooks/branches"
}
```

<h3 id="create-a-database-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[CreateBranchBody](#schemacreatebranchbody)|true|none|
|» branch_name|body|string|true|none|
|» git_branch|body|string|false|none|
|» is_default|body|boolean|false|none|
|» persistent|body|boolean|false|none|
|» region|body|string|false|none|
|» desired_instance_size|body|string|false|none|
|» release_channel|body|string|false|Release channel. If not provided, GA will be used.|
|» postgres_engine|body|string|false|Postgres engine version. If not provided, the latest version will be used.|
|» secrets|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» with_data|body|boolean|false|none|
|» notify_url|body|string(uri)|false|HTTP endpoint to receive branch status updates.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» desired_instance_size|pico|
|» desired_instance_size|nano|
|» desired_instance_size|micro|
|» desired_instance_size|small|
|» desired_instance_size|medium|
|» desired_instance_size|large|
|» desired_instance_size|xlarge|
|» desired_instance_size|2xlarge|
|» desired_instance_size|4xlarge|
|» desired_instance_size|8xlarge|
|» desired_instance_size|12xlarge|
|» desired_instance_size|16xlarge|
|» desired_instance_size|24xlarge|
|» desired_instance_size|24xlarge_optimized_memory|
|» desired_instance_size|24xlarge_optimized_cpu|
|» desired_instance_size|24xlarge_high_memory|
|» desired_instance_size|48xlarge|
|» desired_instance_size|48xlarge_optimized_memory|
|» desired_instance_size|48xlarge_optimized_cpu|
|» desired_instance_size|48xlarge_high_memory|
|» release_channel|internal|
|» release_channel|alpha|
|» release_channel|beta|
|» release_channel|ga|
|» release_channel|withdrawn|
|» release_channel|preview|
|» postgres_engine|15|
|» postgres_engine|17|
|» postgres_engine|17-oriole|

> Example responses

> 201 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "project_ref": "string",
  "parent_project_ref": "string",
  "is_default": true,
  "git_branch": "string",
  "pr_number": -9007199254740000,
  "latest_check_run_id": 0,
  "persistent": true,
  "status": "CREATING_PROJECT",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "review_requested_at": "1970-01-01T00:00:00Z",
  "with_data": true,
  "notify_url": "http://example.com",
  "deletion_scheduled_at": "1970-01-01T00:00:00Z",
  "preview_project_status": "INACTIVE"
}
```

<h3 id="create-a-database-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[BranchResponse_Output](#schemabranchresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to create database branch|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Disables preview branching

<a id="opIdv1-disable-preview-branching"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/branches \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/projects/{ref}/branches`

Disables preview branching for the specified project

<h3 id="disables-preview-branching-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

<h3 id="disables-preview-branching-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to disable preview branching|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get a database branch

<a id="opIdv1-get-a-branch"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/branches/preview-login-page \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/branches/{name}`

Fetches the specified database branch by its name.

<h3 id="get-a-database-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "project_ref": "string",
  "parent_project_ref": "string",
  "is_default": true,
  "git_branch": "string",
  "pr_number": -9007199254740000,
  "latest_check_run_id": 0,
  "persistent": true,
  "status": "CREATING_PROJECT",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "review_requested_at": "1970-01-01T00:00:00Z",
  "with_data": true,
  "notify_url": "http://example.com",
  "deletion_scheduled_at": "1970-01-01T00:00:00Z",
  "preview_project_status": "INACTIVE"
}
```

<h3 id="get-a-database-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BranchResponse_Output](#schemabranchresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to fetch database branch|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="supabase-api-v1-oauth">OAuth</h1>

OAuth related endpoints

## Authorize user through oauth

<a id="opIdv1-authorize-user"></a>

> Code samples

```bash
curl 'https://api.supabase.com/v1/oauth/authorize?client_id=66666666-6666-4666-8666-666666666666&response_type=code&redirect_uri=https%3A%2F%2Fapp.acme.com%2Fauth%2Fcallback'
```

`GET /v1/oauth/authorize`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

<h3 id="authorize-user-through-oauth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|query|string(uuid)|true|none|
|response_type|query|string|true|none|
|redirect_uri|query|string|true|none|
|scope|query|string|false|none|
|state|query|string|false|none|
|response_mode|query|string|false|none|
|code_challenge|query|string|false|none|
|code_challenge_method|query|string|false|none|
|organization_slug|query|string|false|Organization slug|
|target_flow|query|string|false|none|
|resource|query|string(uri)|false|Resource indicator for MCP (Model Context Protocol) clients|

#### Enumerated Values

|Parameter|Value|
|---|---|
|response_type|code|
|response_type|token|
|response_type|id_token token|
|code_challenge_method|plain|
|code_challenge_method|sha256|
|code_challenge_method|S256|

<h3 id="authorize-user-through-oauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="success">
This operation does not require authentication
</aside>

## Exchange auth code for user's access and refresh token

<a id="opIdv1-exchange-oauth-token"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/oauth/token \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'grant_type=authorization_code&client_id=66666666-6666-4666-8666-666666666666&client_secret=sb_secret_live_example_9f4d3a206b2e4a7e8c91&code=oauth_code_9f4d3a206b2e4a7e8c91&code_verifier=qW0Z6d9pQnW0mL1dK1q9wFq6Yz2nV5rA8jT3mP7sH4c&redirect_uri=https%3A%2F%2Fapp.acme.com%2Fauth%2Fcallback&scope=projects%3Aread%20projects%3Awrite'
```

`POST /v1/oauth/token`

Supports `authorization_code`, `refresh_token`, and `urn:ietf:params:oauth:grant-type:jwt-bearer` grant types. The `jwt-bearer` grant type (IDJAG — identity-directed JWT assertion) is in beta and available on Team and Enterprise plans only.

This endpoint is currently in its **Beta** stage.

> Body parameter

```yaml
grant_type: authorization_code
client_id: "66666666-6666-4666-8666-666666666666"
client_secret: sb_secret_live_example_9f4d3a206b2e4a7e8c91
code: oauth_code_9f4d3a206b2e4a7e8c91
code_verifier: qW0Z6d9pQnW0mL1dK1q9wFq6Yz2nV5rA8jT3mP7sH4c
redirect_uri: "https://app.acme.com/auth/callback"
scope: "projects:read projects:write"
```

<h3 id="exchange-auth-code-for-users-access-and-refresh-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OAuthTokenBody](#schemaoauthtokenbody)|true|none|
|» grant_type|body|string|false|none|
|» client_id|body|string(uuid)|false|none|
|» client_secret|body|string|false|none|
|» code|body|string|false|none|
|» code_verifier|body|string|false|none|
|» redirect_uri|body|string|false|none|
|» refresh_token|body|string|false|none|
|» assertion|body|string|false|IDJAG assertion JWT for grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer. Beta - available on Team and Enterprise plans only.|
|» resource|body|string(uri)|false|Resource indicator for MCP (Model Context Protocol) clients|
|» scope|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» grant_type|authorization_code|
|» grant_type|refresh_token|
|» grant_type|urn:ietf:params:oauth:grant-type:jwt-bearer|

> Example responses

> 200 Response

```json
{
  "access_token": "string",
  "refresh_token": "string",
  "expires_in": -9007199254740000,
  "token_type": "Bearer"
}
```

<h3 id="exchange-auth-code-for-users-access-and-refresh-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[OAuthTokenResponse_Output](#schemaoauthtokenresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="success">
This operation does not require authentication
</aside>

## Revoke oauth app authorization and it's corresponding tokens

<a id="opIdv1-revoke-token"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/oauth/revoke \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "client_id": "66666666-6666-4666-8666-666666666666",
    "client_secret": "sb_secret_live_example_9f4d3a206b2e4a7e8c91",
    "refresh_token": "oauth_refresh_9f4d3a206b2e4a7e8c91"
  }'
```

`POST /v1/oauth/revoke`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

> Body parameter

```json
{
  "client_id": "66666666-6666-4666-8666-666666666666",
  "client_secret": "sb_secret_live_example_9f4d3a206b2e4a7e8c91",
  "refresh_token": "oauth_refresh_9f4d3a206b2e4a7e8c91"
}
```

<h3 id="revoke-oauth-app-authorization-and-its-corresponding-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OAuthRevokeTokenBody](#schemaoauthrevoketokenbody)|true|none|
|» client_id|body|string(uuid)|true|none|
|» client_secret|body|string|true|none|
|» refresh_token|body|string|true|none|

<h3 id="revoke-oauth-app-authorization-and-its-corresponding-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="success">
This operation does not require authentication
</aside>

## Authorize user through oauth and claim a project

<a id="opIdv1-oauth-authorize-project-claim"></a>

> Code samples

```bash
curl 'https://api.supabase.com/v1/oauth/authorize/project-claim?project_ref=abcdefghijklmnopqrst&client_id=66666666-6666-4666-8666-666666666666&response_type=code&redirect_uri=https%3A%2F%2Fapp.acme.com%2Fauth%2Fcallback' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/oauth/authorize/project-claim`

Initiates the OAuth authorization flow for the specified provider. After successful authentication, the user can claim ownership of the specified project.

<h3 id="authorize-user-through-oauth-and-claim-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_ref|query|string|true|Project ref|
|client_id|query|string(uuid)|true|none|
|response_type|query|string|true|none|
|redirect_uri|query|string|true|none|
|state|query|string|false|none|
|response_mode|query|string|false|none|
|code_challenge|query|string|false|none|
|code_challenge_method|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|response_type|code|
|response_type|token|
|response_type|id_token token|
|code_challenge_method|plain|
|code_challenge_method|sha256|
|code_challenge_method|S256|

<h3 id="authorize-user-through-oauth-and-claim-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="supabase-api-v1-organizations">Organizations</h1>

Organizations related endpoints

## List all organizations

<a id="opIdv1-list-all-organizations"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/organizations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/organizations`

Returns a list of organizations that you currently belong to.

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "slug": "tsrqponmlkjihgfedcba",
    "name": "string"
  }
]
```

<h3 id="list-all-organizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Unexpected error listing organizations|None|

<h3 id="list-all-organizations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OrganizationResponseV1_Output](#schemaorganizationresponsev1_output)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Create an organization

<a id="opIdv1-create-an-organization"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/organizations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Acme"
  }'
```

`POST /v1/organizations`

> Body parameter

```json
{
  "name": "Acme"
}
```

<h3 id="create-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateOrganizationV1](#schemacreateorganizationv1)|true|none|
|» name|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "slug": "tsrqponmlkjihgfedcba",
  "name": "string"
}
```

<h3 id="create-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[OrganizationResponseV1_Output](#schemaorganizationresponsev1_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Unexpected error creating an organization|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get entitlements for an organization

<a id="opIdv1-get-organization-entitlements"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/organizations/tsrqponmlkjihgfedcba/entitlements \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/organizations/{slug}/entitlements`

Returns the entitlements available to the organization based on their plan and any overrides.

<h3 id="get-entitlements-for-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|Organization slug|

> Example responses

> 200 Response

```json
{
  "entitlements": [
    {
      "feature": {
        "key": "instances.compute_update_available_sizes",
        "type": "boolean"
      },
      "hasAccess": true,
      "type": "boolean",
      "config": {
        "enabled": true
      }
    }
  ]
}
```

<h3 id="get-entitlements-for-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[V1ListEntitlementsResponse_Output](#schemav1listentitlementsresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## List members of an organization

<a id="opIdv1-list-organization-members"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/organizations/tsrqponmlkjihgfedcba/members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/organizations/{slug}/members`

<h3 id="list-members-of-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|Organization slug|

> Example responses

> 200 Response

```json
[
  {
    "user_id": "string",
    "user_name": "string",
    "email": "string",
    "role_name": "string",
    "mfa_enabled": true,
    "avatar_url": "string"
  }
]
```

<h3 id="list-members-of-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<h3 id="list-members-of-an-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[V1OrganizationMemberResponse_Output](#schemav1organizationmemberresponse_output)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets information about the organization

<a id="opIdv1-get-an-organization"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/organizations/tsrqponmlkjihgfedcba \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/organizations/{slug}`

<h3 id="gets-information-about-the-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|Organization slug|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "plan": "free",
  "opt_in_tags": [
    "AI_SQL_GENERATOR_OPT_IN"
  ],
  "allowed_release_channels": [
    "internal"
  ]
}
```

<h3 id="gets-information-about-the-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[V1OrganizationSlugResponse_Output](#schemav1organizationslugresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets project details for the specified organization and claim token

<a id="opIdv1-get-organization-project-claim"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/organizations/tsrqponmlkjihgfedcba/project-claim/0123456789abcdef0123456789abcdef01234567 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/organizations/{slug}/project-claim/{token}`

<h3 id="gets-project-details-for-the-specified-organization-and-claim-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|Organization slug|
|token|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "project": {
    "ref": "string",
    "name": "string"
  },
  "preview": {
    "valid": true,
    "warnings": [
      {
        "key": "string",
        "message": "string"
      }
    ],
    "errors": [
      {
        "key": "string",
        "message": "string"
      }
    ],
    "info": [
      {
        "key": "string",
        "message": "string"
      }
    ],
    "members_exceeding_free_project_limit": [
      {
        "name": "string",
        "limit": 0
      }
    ],
    "source_subscription_plan": "free",
    "target_subscription_plan": "free"
  },
  "expires_at": "string",
  "created_at": "string",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="gets-project-details-for-the-specified-organization-and-claim-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[OrganizationProjectClaimResponse_Output](#schemaorganizationprojectclaimresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Claims project for the specified organization

<a id="opIdv1-claim-project-for-organization"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/organizations/tsrqponmlkjihgfedcba/project-claim/0123456789abcdef0123456789abcdef01234567 \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/organizations/{slug}/project-claim/{token}`

<h3 id="claims-project-for-the-specified-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|Organization slug|
|token|path|string|true|none|

<h3 id="claims-project-for-the-specified-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="supabase-api-v1-projects">Projects</h1>

Projects related endpoints

## List all projects

<a id="opIdv1-list-all-projects"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects`

Returns a list of all projects you've previously created.

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "ref": "abcdefghijklmnopqrst",
    "organization_id": "string",
    "organization_slug": "tsrqponmlkjihgfedcba",
    "name": "string",
    "region": "string",
    "created_at": "string",
    "status": "INACTIVE",
    "database": {
      "host": "string",
      "version": "string",
      "postgres_engine": "string",
      "release_channel": "string"
    }
  }
]
```

<h3 id="list-all-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<h3 id="list-all-projects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[V1ProjectWithDatabaseResponse_Output](#schemav1projectwithdatabaseresponse_output)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Create a project

<a id="opIdv1-create-a-project"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "db_pass": "correct-horse-battery-staple",
    "name": "acme-prod",
    "organization_slug": "tsrqponmlkjihgfedcba",
    "region": "us-east-1"
  }'
```

`POST /v1/projects`

> Body parameter

```json
{
  "db_pass": "correct-horse-battery-staple",
  "name": "acme-prod",
  "organization_slug": "tsrqponmlkjihgfedcba",
  "region": "us-east-1"
}
```

<h3 id="create-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[V1CreateProjectBody](#schemav1createprojectbody)|true|none|
|» db_pass|body|string|true|Database password|
|» name|body|string|true|Name of your project|
|» organization_id|body|string|false|**Deprecated.** Deprecated: Use `organization_slug` instead.|
|» organization_slug|body|string|true|Organization slug|
|» plan|body|string|false|**Deprecated.** Subscription Plan is now set on organization level and is ignored in this request|
|» region|body|string|false|**Deprecated.** Region you want your server to reside in. Use region_selection instead.|
|» region_selection|body|object|false|Region selection. Only one of region or region_selection can be specified.|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » code|body|string|true|Specific region code. The codes supported are not a stable API, and should be retrieved from the /available-regions endpoint.|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » code|body|string|true|The Smart Region Group's code. The codes supported are not a stable API, and should be retrieved from the /available-regions endpoint.|
|» kps_enabled|body|boolean|false|**Deprecated.** This field is deprecated and is ignored in this request|
|» desired_instance_size|body|string|false|Desired instance size. Omit this field to always default to the smallest possible size.|
|» template_url|body|string(uri)|false|Template URL used to create the project from the CLI.|
|» release_channel|body|null|false|**Deprecated.**|
|» postgres_engine|body|null|false|**Deprecated.**|
|» high_availability|body|boolean|false|[Experimental] Whether to enable high availability for the project.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» plan|free|
|» plan|pro|
|» region|us-east-1|
|» region|us-east-2|
|» region|us-west-1|
|» region|us-west-2|
|» region|ap-east-1|
|» region|ap-southeast-1|
|» region|ap-northeast-1|
|» region|ap-northeast-2|
|» region|ap-southeast-2|
|» region|eu-west-1|
|» region|eu-west-2|
|» region|eu-west-3|
|» region|eu-north-1|
|» region|eu-central-1|
|» region|eu-central-2|
|» region|ca-central-1|
|» region|ap-south-1|
|» region|sa-east-1|
|» » type|specific|
|» » code|us-east-1|
|» » code|us-east-2|
|» » code|us-west-1|
|» » code|us-west-2|
|» » code|ap-east-1|
|» » code|ap-southeast-1|
|» » code|ap-northeast-1|
|» » code|ap-northeast-2|
|» » code|ap-southeast-2|
|» » code|eu-west-1|
|» » code|eu-west-2|
|» » code|eu-west-3|
|» » code|eu-north-1|
|» » code|eu-central-1|
|» » code|eu-central-2|
|» » code|ca-central-1|
|» » code|ap-south-1|
|» » code|sa-east-1|
|» » type|smartGroup|
|» » code|americas|
|» » code|emea|
|» » code|apac|
|» desired_instance_size|nano|
|» desired_instance_size|micro|
|» desired_instance_size|small|
|» desired_instance_size|medium|
|» desired_instance_size|large|
|» desired_instance_size|xlarge|
|» desired_instance_size|2xlarge|
|» desired_instance_size|4xlarge|
|» desired_instance_size|8xlarge|
|» desired_instance_size|12xlarge|
|» desired_instance_size|16xlarge|
|» desired_instance_size|24xlarge|
|» desired_instance_size|24xlarge_optimized_memory|
|» desired_instance_size|24xlarge_optimized_cpu|
|» desired_instance_size|24xlarge_high_memory|
|» desired_instance_size|48xlarge|
|» desired_instance_size|48xlarge_optimized_memory|
|» desired_instance_size|48xlarge_optimized_cpu|
|» desired_instance_size|48xlarge_high_memory|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "ref": "abcdefghijklmnopqrst",
  "organization_id": "string",
  "organization_slug": "tsrqponmlkjihgfedcba",
  "name": "string",
  "region": "string",
  "created_at": "string",
  "status": "INACTIVE"
}
```

<h3 id="create-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[V1ProjectResponse_Output](#schemav1projectresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets the list of available regions that can be used for a new project

<a id="opIdv1-get-available-regions"></a>

> Code samples

```bash
curl 'https://api.supabase.com/v1/projects/available-regions?organization_slug=tsrqponmlkjihgfedcba' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/available-regions`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

<h3 id="gets-the-list-of-available-regions-that-can-be-used-for-a-new-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organization_slug|query|string|true|Slug of your organization|
|continent|query|string|false|Continent code to determine regional recommendations: NA (North America), SA (South America), EU (Europe), AF (Africa), AS (Asia), OC (Oceania), AN (Antarctica)|
|desired_instance_size|query|string|false|Desired instance size. Omit this field to always default to the smallest possible size.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|continent|NA|
|continent|SA|
|continent|EU|
|continent|AF|
|continent|AS|
|continent|OC|
|continent|AN|
|desired_instance_size|nano|
|desired_instance_size|micro|
|desired_instance_size|small|
|desired_instance_size|medium|
|desired_instance_size|large|
|desired_instance_size|xlarge|
|desired_instance_size|2xlarge|
|desired_instance_size|4xlarge|
|desired_instance_size|8xlarge|
|desired_instance_size|12xlarge|
|desired_instance_size|16xlarge|
|desired_instance_size|24xlarge|
|desired_instance_size|24xlarge_optimized_memory|
|desired_instance_size|24xlarge_optimized_cpu|
|desired_instance_size|24xlarge_high_memory|
|desired_instance_size|48xlarge|
|desired_instance_size|48xlarge_optimized_memory|
|desired_instance_size|48xlarge_optimized_cpu|
|desired_instance_size|48xlarge_high_memory|

> Example responses

> 200 Response

```json
{
  "recommendations": {
    "smartGroup": {
      "name": "string",
      "code": "americas",
      "type": "smartGroup"
    },
    "specific": [
      {
        "name": "string",
        "code": "us-east-1",
        "type": "specific",
        "provider": "AWS",
        "status": "capacity"
      }
    ]
  },
  "all": {
    "smartGroup": [
      {
        "name": "string",
        "code": "americas",
        "type": "smartGroup"
      }
    ],
    "specific": [
      {
        "name": "string",
        "code": "us-east-1",
        "type": "specific",
        "provider": "AWS",
        "status": "capacity"
      }
    ]
  }
}
```

<h3 id="gets-the-list-of-available-regions-that-can-be-used-for-a-new-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RegionsInfoV1_Output](#schemaregionsinfov1_output)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets project's network bans

<a id="opIdv1-list-all-network-bans"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/network-bans/retrieve \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/projects/{ref}/network-bans/retrieve`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

<h3 id="gets-projects-network-bans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 201 Response

```json
{
  "banned_ipv4_addresses": [
    "string"
  ]
}
```

<h3 id="gets-projects-network-bans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[NetworkBanResponse_Output](#schemanetworkbanresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve project's network bans|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets project's network bans with additional information about which databases they affect

<a id="opIdv1-list-all-network-bans-enriched"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/network-bans/retrieve/enriched \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/projects/{ref}/network-bans/retrieve/enriched`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

<h3 id="gets-projects-network-bans-with-additional-information-about-which-databases-they-affect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 201 Response

```json
{
  "banned_ipv4_addresses": [
    {
      "banned_address": "string",
      "identifier": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="gets-projects-network-bans-with-additional-information-about-which-databases-they-affect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[NetworkBanResponseEnriched_Output](#schemanetworkbanresponseenriched_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve project's enriched network bans|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Remove network bans.

<a id="opIdv1-delete-network-bans"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/network-bans \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ipv4_addresses": [
      "203.0.113.10"
    ],
    "requester_ip": false
  }'
```

`DELETE /v1/projects/{ref}/network-bans`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

> Body parameter

```json
{
  "ipv4_addresses": [
    "203.0.113.10"
  ],
  "requester_ip": false
}
```

<h3 id="remove-network-bans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[RemoveNetworkBanRequest](#schemaremovenetworkbanrequest)|true|none|
|» ipv4_addresses|body|[string]|true|List of IP addresses to unban.|
|» requester_ip|body|boolean|false|Include requester's public IP in the list of addresses to unban.|
|» identifier|body|string|false|none|

<h3 id="remove-network-bans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to remove network bans.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets project's network restrictions

<a id="opIdv1-get-network-restrictions"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/network-restrictions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/network-restrictions`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

<h3 id="gets-projects-network-restrictions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "entitlement": "disallowed",
  "config": {
    "dbAllowedCidrs": [
      "203.0.113.0/24"
    ],
    "dbAllowedCidrsV6": [
      "2001:db8::/32"
    ]
  },
  "old_config": {
    "dbAllowedCidrs": [
      "203.0.113.0/24"
    ],
    "dbAllowedCidrsV6": [
      "2001:db8::/32"
    ]
  },
  "status": "stored",
  "updated_at": "1970-01-01T00:00:00Z",
  "applied_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="gets-projects-network-restrictions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[NetworkRestrictionsResponse_Output](#schemanetworkrestrictionsresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve project's network restrictions|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Updates project's network restrictions by adding or removing CIDRs

<a id="opIdv1-patch-network-restrictions"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/network-restrictions \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "add": {
      "dbAllowedCidrs": [
        "203.0.113.0/24"
      ]
    },
    "remove": {
      "dbAllowedCidrs": [
        "198.51.100.0/24"
      ]
    }
  }'
```

`PATCH /v1/projects/{ref}/network-restrictions`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Alpha** stage.

> Body parameter

```json
{
  "add": {
    "dbAllowedCidrs": [
      "203.0.113.0/24"
    ]
  },
  "remove": {
    "dbAllowedCidrs": [
      "198.51.100.0/24"
    ]
  }
}
```

<h3 id="updates-projects-network-restrictions-by-adding-or-removing-cidrs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[NetworkRestrictionsPatchRequest](#schemanetworkrestrictionspatchrequest)|true|none|
|» add|body|object|false|none|
|» » dbAllowedCidrs|body|[string]|false|none|
|» » dbAllowedCidrsV6|body|[string]|false|none|
|» remove|body|object|false|none|
|» » dbAllowedCidrs|body|[string]|false|none|
|» » dbAllowedCidrsV6|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "entitlement": "disallowed",
  "config": {
    "dbAllowedCidrs": [
      {
        "address": "string",
        "type": "v4"
      }
    ]
  },
  "old_config": {
    "dbAllowedCidrs": [
      {
        "address": "string",
        "type": "v4"
      }
    ]
  },
  "updated_at": "1970-01-01T00:00:00Z",
  "applied_at": "1970-01-01T00:00:00Z",
  "status": "stored"
}
```

<h3 id="updates-projects-network-restrictions-by-adding-or-removing-cidrs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[NetworkRestrictionsV2Response_Output](#schemanetworkrestrictionsv2response_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to update project network restrictions|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Updates project's network restrictions

<a id="opIdv1-update-network-restrictions"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/network-restrictions/apply \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dbAllowedCidrs": [
      "203.0.113.0/24"
    ],
    "dbAllowedCidrsV6": [
      "2001:db8::/32"
    ]
  }'
```

`POST /v1/projects/{ref}/network-restrictions/apply`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

> Body parameter

```json
{
  "dbAllowedCidrs": [
    "203.0.113.0/24"
  ],
  "dbAllowedCidrsV6": [
    "2001:db8::/32"
  ]
}
```

<h3 id="updates-projects-network-restrictions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[NetworkRestrictionsRequest](#schemanetworkrestrictionsrequest)|true|none|
|» dbAllowedCidrs|body|[string]|false|none|
|» dbAllowedCidrsV6|body|[string]|false|none|

> Example responses

> 201 Response

```json
{
  "entitlement": "disallowed",
  "config": {
    "dbAllowedCidrs": [
      "203.0.113.0/24"
    ],
    "dbAllowedCidrsV6": [
      "2001:db8::/32"
    ]
  },
  "old_config": {
    "dbAllowedCidrs": [
      "203.0.113.0/24"
    ],
    "dbAllowedCidrsV6": [
      "2001:db8::/32"
    ]
  },
  "status": "stored",
  "updated_at": "1970-01-01T00:00:00Z",
  "applied_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="updates-projects-network-restrictions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[NetworkRestrictionsResponse_Output](#schemanetworkrestrictionsresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to update project network restrictions|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets a specific project that belongs to the authenticated user

<a id="opIdv1-get-project"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}`

<h3 id="gets-a-specific-project-that-belongs-to-the-authenticated-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "ref": "abcdefghijklmnopqrst",
  "organization_id": "string",
  "organization_slug": "tsrqponmlkjihgfedcba",
  "name": "string",
  "region": "string",
  "created_at": "string",
  "status": "INACTIVE",
  "database": {
    "host": "string",
    "version": "string",
    "postgres_engine": "string",
    "release_channel": "string"
  }
}
```

<h3 id="gets-a-specific-project-that-belongs-to-the-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[V1ProjectWithDatabaseResponse_Output](#schemav1projectwithdatabaseresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve project|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Deletes the given project

<a id="opIdv1-delete-a-project"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/projects/{ref}`

<h3 id="deletes-the-given-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "id": -9007199254740000,
  "ref": "string",
  "name": "string"
}
```

<h3 id="deletes-the-given-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[V1ProjectRefResponse_Output](#schemav1projectrefresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Updates the given project

<a id="opIdv1-update-a-project"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Acme Platform"
  }'
```

`PATCH /v1/projects/{ref}`

> Body parameter

```json
{
  "name": "Acme Platform"
}
```

<h3 id="updates-the-given-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[V1UpdateProjectBody](#schemav1updateprojectbody)|true|none|
|» name|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": -9007199254740000,
  "ref": "string",
  "name": "string"
}
```

<h3 id="updates-the-given-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[V1ProjectRefResponse_Output](#schemav1projectrefresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to update project|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Upgrades the project's Postgres version

<a id="opIdv1-upgrade-postgres-version"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/upgrade \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "target_version": "17",
    "release_channel": "ga"
  }'
```

`POST /v1/projects/{ref}/upgrade`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

> Body parameter

```json
{
  "target_version": "17",
  "release_channel": "ga"
}
```

<h3 id="upgrades-the-projects-postgres-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[UpgradeDatabaseBody](#schemaupgradedatabasebody)|true|none|
|» target_version|body|string|true|none|
|» release_channel|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» release_channel|internal|
|» release_channel|alpha|
|» release_channel|beta|
|» release_channel|ga|
|» release_channel|withdrawn|
|» release_channel|preview|

> Example responses

> 201 Response

```json
{
  "tracking_id": "string"
}
```

<h3 id="upgrades-the-projects-postgres-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[ProjectUpgradeInitiateResponse_Output](#schemaprojectupgradeinitiateresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to initiate project upgrade|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Returns the project's eligibility for upgrades

<a id="opIdv1-get-postgres-upgrade-eligibility"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/upgrade/eligibility \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/upgrade/eligibility`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

<h3 id="returns-the-projects-eligibility-for-upgrades-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "eligible": true,
  "current_app_version": "string",
  "current_app_version_release_channel": "internal",
  "latest_app_version": "string",
  "target_upgrade_versions": [
    {
      "postgres_version": "13",
      "release_channel": "internal",
      "app_version": "string"
    }
  ],
  "duration_estimate_hours": 0,
  "legacy_auth_custom_roles": [
    "string"
  ],
  "objects_to_be_dropped": [
    "string"
  ],
  "unsupported_extensions": [
    "string"
  ],
  "user_defined_objects_in_internal_schemas": [
    "string"
  ],
  "validation_errors": [
    {
      "type": "objects_depending_on_pg_cron",
      "dependents": [
        "string"
      ]
    }
  ],
  "warnings": [
    {
      "type": "pg_graphql_introspection_change"
    }
  ]
}
```

<h3 id="returns-the-projects-eligibility-for-upgrades-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ProjectUpgradeEligibilityResponse_Output](#schemaprojectupgradeeligibilityresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to determine project upgrade eligibility|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets the latest status of the project's upgrade

<a id="opIdv1-get-postgres-upgrade-status"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/upgrade/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/upgrade/status`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

<h3 id="gets-the-latest-status-of-the-projects-upgrade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|tracking_id|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "databaseUpgradeStatus": {
    "initiated_at": "string",
    "latest_status_at": "string",
    "target_version": "string",
    "error": "1_upgraded_instance_launch_failed",
    "progress": "0_requested",
    "status": 0
  }
}
```

<h3 id="gets-the-latest-status-of-the-projects-upgrade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DatabaseUpgradeStatusResponse_Output](#schemadatabaseupgradestatusresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve project upgrade status|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets project's service health status

<a id="opIdv1-get-services-health"></a>

> Code samples

```bash
curl 'https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/health?services=auth%2Cdb&services=auth' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/health`

<h3 id="gets-projects-service-health-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|services|query|string \| [string]|true|Comma-separated list of enums or array of enums.|
|timeout_ms|query|integer|false|none|

> Example responses

> 200 Response

```json
[
  {
    "name": "auth",
    "healthy": true,
    "status": "COMING_UP",
    "info": {
      "name": "GoTrue",
      "version": "string",
      "description": "string"
    },
    "error": "string"
  }
]
```

<h3 id="gets-projects-service-health-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve project's service health status|None|

<h3 id="gets-projects-service-health-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[V1ServiceHealthResponse_Output](#schemav1servicehealthresponse_output)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Pauses the given project

<a id="opIdv1-pause-a-project"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/pause \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/projects/{ref}/pause`

<h3 id="pauses-the-given-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

<h3 id="pauses-the-given-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Restarts the given project

<a id="opIdv1-restart-a-project"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/restart \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/projects/{ref}/restart`

<h3 id="restarts-the-given-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

<h3 id="restarts-the-given-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Lists available restore versions for the given project

<a id="opIdv1-list-available-restore-versions"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/restore \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/restore`

<h3 id="lists-available-restore-versions-for-the-given-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "available_versions": [
    {
      "version": "string",
      "release_channel": "internal",
      "postgres_engine": "13"
    }
  ]
}
```

<h3 id="lists-available-restore-versions-for-the-given-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetProjectAvailableRestoreVersionsResponse_Output](#schemagetprojectavailablerestoreversionsresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Restores the given project

<a id="opIdv1-restore-a-project"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/restore \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/projects/{ref}/restore`

<h3 id="restores-the-given-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

<h3 id="restores-the-given-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Cancels the given project restoration

<a id="opIdv1-cancel-a-project-restoration"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/restore/cancel \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/projects/{ref}/restore/cancel`

<h3 id="cancels-the-given-project-restoration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

<h3 id="cancels-the-given-project-restoration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets project claim token

<a id="opIdv1-get-project-claim-token"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/claim-token \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/claim-token`

<h3 id="gets-project-claim-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "token_alias": "string",
  "expires_at": "string",
  "created_at": "string",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="gets-project-claim-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ProjectClaimTokenResponse_Output](#schemaprojectclaimtokenresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Creates project claim token

<a id="opIdv1-create-project-claim-token"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/claim-token \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/projects/{ref}/claim-token`

<h3 id="creates-project-claim-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "token": "string",
  "token_alias": "string",
  "expires_at": "string",
  "created_at": "string",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="creates-project-claim-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CreateProjectClaimTokenResponse_Output](#schemacreateprojectclaimtokenresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Revokes project claim token

<a id="opIdv1-delete-project-claim-token"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/claim-token \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/projects/{ref}/claim-token`

<h3 id="revokes-project-claim-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

<h3 id="revokes-project-claim-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get database disk attributes

<a id="opIdv1-get-database-disk"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/disk \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/config/disk`

<h3 id="get-database-disk-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "attributes": {
    "iops": 1,
    "size_gb": 1,
    "throughput_mibps": 1,
    "type": "gp3"
  },
  "last_modified_at": "string"
}
```

<h3 id="get-database-disk-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DiskResponse_Output](#schemadiskresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to get database disk attributes|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Modify database disk

<a id="opIdv1-modify-database-disk"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/disk \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attributes": {
      "type": "gp3",
      "size_gb": 100,
      "iops": 3000,
      "throughput_mibps": 125
    }
  }'
```

`POST /v1/projects/{ref}/config/disk`

> Body parameter

```json
{
  "attributes": {
    "type": "gp3",
    "size_gb": 100,
    "iops": 3000,
    "throughput_mibps": 125
  }
}
```

<h3 id="modify-database-disk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[DiskRequestBody](#schemadiskrequestbody)|true|none|
|» attributes|body|object|true|none|
|» » *oneOf*|body|object|false|none|
|» » iops|body|integer|true|none|
|» » size_gb|body|integer|true|none|
|» » throughput_mibps|body|integer|false|none|
|» » type|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » iops|body|integer|true|none|
|» » size_gb|body|integer|true|none|
|» » type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|gp3|
|» » type|io2|

<h3 id="modify-database-disk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to modify database disk|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get disk utilization

<a id="opIdv1-get-disk-utilization"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/disk/util \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/config/disk/util`

<h3 id="get-disk-utilization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "timestamp": "string",
  "metrics": {
    "fs_size_bytes": 0,
    "fs_avail_bytes": 0,
    "fs_used_bytes": 0
  }
}
```

<h3 id="get-disk-utilization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DiskUtilMetricsResponse_Output](#schemadiskutilmetricsresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to get disk utilization|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets project disk autoscale config

<a id="opIdv1-get-project-disk-autoscale-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/disk/autoscale \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/config/disk/autoscale`

<h3 id="gets-project-disk-autoscale-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "growth_percent": 1,
  "min_increment_gb": 1,
  "max_size_gb": 1
}
```

<h3 id="gets-project-disk-autoscale-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DiskAutoscaleConfig_Output](#schemadiskautoscaleconfig_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to get project disk autoscale config|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets all projects for the given organization

<a id="opIdv1-get-all-projects-for-organization"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/organizations/tsrqponmlkjihgfedcba/projects \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/organizations/{slug}/projects`

Returns a paginated list of projects for the specified organization.

This endpoint uses offset-based pagination. Use the `offset` parameter to skip a number of projects and the `limit` parameter to control the number of projects returned per page.

<h3 id="gets-all-projects-for-the-given-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|Organization slug|
|offset|query|integer|false|Number of projects to skip|
|limit|query|integer|false|Number of projects to return per page|
|search|query|string|false|Search projects by name|
|sort|query|string|false|Sort order for projects|
|statuses|query|string|false|A comma-separated list of project statuses to filter by.<br><br>The following values are supported: `ACTIVE_HEALTHY`, `INACTIVE`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|name_asc|
|sort|name_desc|
|sort|created_asc|
|sort|created_desc|

> Example responses

> 200 Response

```json
{
  "projects": [
    {
      "ref": "string",
      "name": "string",
      "cloud_provider": "string",
      "region": "string",
      "is_branch": true,
      "status": "INACTIVE",
      "inserted_at": "string",
      "databases": [
        {
          "infra_compute_size": "pico",
          "region": "string",
          "status": "ACTIVE_HEALTHY",
          "cloud_provider": "string",
          "identifier": "string",
          "type": "PRIMARY",
          "disk_volume_size_gb": 0,
          "disk_type": "gp3",
          "disk_throughput_mbps": 0,
          "disk_last_modified_at": "string"
        }
      ]
    }
  ],
  "pagination": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

<h3 id="gets-all-projects-for-the-given-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[OrganizationProjectsResponse_Output](#schemaorganizationprojectsresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve projects|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="supabase-api-v1-rest">Rest</h1>

Rest related endpoints

## Gets project's postgrest config

<a id="opIdv1-get-postgrest-service-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/postgrest \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/postgrest`

<h3 id="gets-projects-postgrest-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "db_schema": "string",
  "max_rows": -9007199254740000,
  "db_extra_search_path": "string",
  "db_pool": -9007199254740000,
  "db_pool_acquisition_timeout": -9007199254740000,
  "db_pool_max_lifetime": 0,
  "db_pool_max_idletime": 0,
  "jwt_secret": "string"
}
```

<h3 id="gets-projects-postgrest-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PostgrestConfigWithJWTSecretResponse_Output](#schemapostgrestconfigwithjwtsecretresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve project's postgrest config|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Updates project's postgrest config

<a id="opIdv1-update-postgrest-service-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/postgrest \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "db_schema": "public,storage",
    "db_pool": 20,
    "max_rows": 1000
  }'
```

`PATCH /v1/projects/{ref}/postgrest`

> Body parameter

```json
{
  "db_schema": "public,storage",
  "db_pool": 20,
  "max_rows": 1000
}
```

<h3 id="updates-projects-postgrest-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[V1UpdatePostgrestConfigBody](#schemav1updatepostgrestconfigbody)|true|none|
|» db_extra_search_path|body|string|false|none|
|» db_schema|body|string|false|none|
|» max_rows|body|integer|false|none|
|» db_pool|body|integer|false|none|
|» db_pool_acquisition_timeout|body|integer|false|none|
|» db_pool_max_lifetime|body|integer|false|none|
|» db_pool_max_idletime|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "db_schema": "string",
  "max_rows": -9007199254740000,
  "db_extra_search_path": "string",
  "db_pool": -9007199254740000,
  "db_pool_acquisition_timeout": -9007199254740000,
  "db_pool_max_lifetime": 0,
  "db_pool_max_idletime": 0
}
```

<h3 id="updates-projects-postgrest-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[V1PostgrestConfigResponse_Output](#schemav1postgrestconfigresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to update project's postgrest config|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="supabase-api-v1-secrets">Secrets</h1>

Secrets related endpoints

## Get project api keys

<a id="opIdv1-get-project-api-keys"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/api-keys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/api-keys`

<h3 id="get-project-api-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|reveal|query|string|false|Boolean string.<br><br>Truthy values: `true`, `1`, `yes`, `on`, `y`, `enabled`<br><br>Falsy values: `false`, `0`, `no`, `off`, `n`, `disabled`|

> Example responses

> 200 Response

```json
[
  {
    "api_key": "string",
    "id": "string",
    "type": "legacy",
    "prefix": "string",
    "name": "string",
    "description": "string",
    "hash": "string",
    "secret_jwt_template": {
      "property1": null,
      "property2": null
    },
    "inserted_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="get-project-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<h3 id="get-project-api-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiKeyResponse_Output](#schemaapikeyresponse_output)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Creates a new API key for the project

<a id="opIdv1-create-project-api-key"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/api-keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "type": "secret",
    "name": "ci_secret_key",
    "description": "CI deploy key"
  }'
```

`POST /v1/projects/{ref}/api-keys`

> Body parameter

```json
{
  "type": "secret",
  "name": "ci_secret_key",
  "description": "CI deploy key"
}
```

<h3 id="creates-a-new-api-key-for-the-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|reveal|query|string|false|Boolean string.<br><br>Truthy values: `true`, `1`, `yes`, `on`, `y`, `enabled`<br><br>Falsy values: `false`, `0`, `no`, `off`, `n`, `disabled`|
|body|body|[CreateApiKeyBody](#schemacreateapikeybody)|true|none|
|» type|body|string|true|none|
|» name|body|string|true|none|
|» description|body|string \| null|false|none|
|» secret_jwt_template|body|object \| null|false|none|
|» » **additionalProperties**|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|publishable|
|» type|secret|

> Example responses

> 201 Response

```json
{
  "api_key": "string",
  "id": "string",
  "type": "legacy",
  "prefix": "string",
  "name": "string",
  "description": "string",
  "hash": "string",
  "secret_jwt_template": {
    "property1": null,
    "property2": null
  },
  "inserted_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="creates-a-new-api-key-for-the-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[ApiKeyResponse_Output](#schemaapikeyresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Check whether JWT based legacy (anon, service_role) API keys are enabled. This API endpoint will be removed in the future, check for HTTP 404 Not Found.

<a id="opIdv1-get-project-legacy-api-keys"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/api-keys/legacy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/api-keys/legacy`

<h3 id="check-whether-jwt-based-legacy-anon-servicerole-api-keys-are-enabled-this-api-endpoint-will-be-removed-in-the-future-check-for-http-404-not-found-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "enabled": true
}
```

<h3 id="check-whether-jwt-based-legacy-anon-servicerole-api-keys-are-enabled-this-api-endpoint-will-be-removed-in-the-future-check-for-http-404-not-found-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[LegacyApiKeysResponse_Output](#schemalegacyapikeysresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Disable or re-enable JWT based legacy (anon, service_role) API keys. This API endpoint will be removed in the future, check for HTTP 404 Not Found.

<a id="opIdv1-update-project-legacy-api-keys"></a>

> Code samples

```bash
curl 'https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/api-keys/legacy?enabled=true' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/projects/{ref}/api-keys/legacy`

<h3 id="disable-or-re-enable-jwt-based-legacy-anon-servicerole-api-keys-this-api-endpoint-will-be-removed-in-the-future-check-for-http-404-not-found-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|enabled|query|string|true|Boolean string.<br><br>Truthy values: `true`, `1`, `yes`, `on`, `y`, `enabled`<br><br>Falsy values: `false`, `0`, `no`, `off`, `n`, `disabled`|

> Example responses

> 200 Response

```json
{
  "enabled": true
}
```

<h3 id="disable-or-re-enable-jwt-based-legacy-anon-servicerole-api-keys-this-api-endpoint-will-be-removed-in-the-future-check-for-http-404-not-found-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[LegacyApiKeysResponse_Output](#schemalegacyapikeysresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get API key

<a id="opIdv1-get-project-api-key"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/api-keys/22222222-2222-4222-8222-222222222222 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/api-keys/{id}`

<h3 id="get-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|id|path|string(uuid)|true|none|
|reveal|query|string|false|Boolean string.<br><br>Truthy values: `true`, `1`, `yes`, `on`, `y`, `enabled`<br><br>Falsy values: `false`, `0`, `no`, `off`, `n`, `disabled`|

> Example responses

> 200 Response

```json
{
  "api_key": "string",
  "id": "string",
  "type": "legacy",
  "prefix": "string",
  "name": "string",
  "description": "string",
  "hash": "string",
  "secret_jwt_template": {
    "property1": null,
    "property2": null
  },
  "inserted_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ApiKeyResponse_Output](#schemaapikeyresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|404|Not Found|API key not found for project|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Deletes an API key for the project

<a id="opIdv1-delete-project-api-key"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/api-keys/22222222-2222-4222-8222-222222222222 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/projects/{ref}/api-keys/{id}`

<h3 id="deletes-an-api-key-for-the-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|id|path|string(uuid)|true|none|
|reveal|query|string|false|Boolean string, true or false|
|was_compromised|query|string|false|Boolean string, true or false|
|reason|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "api_key": "string",
  "id": "string",
  "type": "legacy",
  "prefix": "string",
  "name": "string",
  "description": "string",
  "hash": "string",
  "secret_jwt_template": {
    "property1": null,
    "property2": null
  },
  "inserted_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="deletes-an-api-key-for-the-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ApiKeyResponse_Output](#schemaapikeyresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|404|Not Found|API key not found for project|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Updates an API key for the project

<a id="opIdv1-update-project-api-key"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/api-keys/22222222-2222-4222-8222-222222222222 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "ci_secret_key_rotated",
    "description": "Rotated after March release"
  }'
```

`PATCH /v1/projects/{ref}/api-keys/{id}`

> Body parameter

```json
{
  "name": "ci_secret_key_rotated",
  "description": "Rotated after March release"
}
```

<h3 id="updates-an-api-key-for-the-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|id|path|string(uuid)|true|none|
|reveal|query|string|false|Boolean string.<br><br>Truthy values: `true`, `1`, `yes`, `on`, `y`, `enabled`<br><br>Falsy values: `false`, `0`, `no`, `off`, `n`, `disabled`|
|body|body|[UpdateApiKeyBody](#schemaupdateapikeybody)|true|none|
|» name|body|string|false|none|
|» description|body|string \| null|false|none|
|» secret_jwt_template|body|object \| null|false|none|
|» » **additionalProperties**|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "api_key": "string",
  "id": "string",
  "type": "legacy",
  "prefix": "string",
  "name": "string",
  "description": "string",
  "hash": "string",
  "secret_jwt_template": {
    "property1": null,
    "property2": null
  },
  "inserted_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="updates-an-api-key-for-the-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ApiKeyResponse_Output](#schemaapikeyresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|404|Not Found|API key not found for project|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets project's pgsodium config

<a id="opIdv1-get-pgsodium-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/pgsodium \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/pgsodium`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

<h3 id="gets-projects-pgsodium-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "root_key": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
}
```

<h3 id="gets-projects-pgsodium-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PgsodiumConfigResponse_Output](#schemapgsodiumconfigresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve project's pgsodium config|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Updates project's pgsodium config. Updating the root_key can cause all data encrypted with the older key to become inaccessible.

<a id="opIdv1-update-pgsodium-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/pgsodium \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "root_key": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
  }'
```

`PUT /v1/projects/{ref}/pgsodium`

This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.

This endpoint is currently in its **Beta** stage.

> Body parameter

```json
{
  "root_key": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
}
```

<h3 id="updates-projects-pgsodium-config-updating-the-rootkey-can-cause-all-data-encrypted-with-the-older-key-to-become-inaccessible-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[UpdatePgsodiumConfigBody](#schemaupdatepgsodiumconfigbody)|true|none|
|» root_key|body|string|true|The pgsodium root key: 32 bytes, hex-encoded (64 characters).|

> Example responses

> 200 Response

```json
{
  "root_key": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
}
```

<h3 id="updates-projects-pgsodium-config-updating-the-rootkey-can-cause-all-data-encrypted-with-the-older-key-to-become-inaccessible-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PgsodiumConfigResponse_Output](#schemapgsodiumconfigresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to update project's pgsodium config|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## List all secrets

<a id="opIdv1-list-all-secrets"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/secrets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/secrets`

Returns all secrets you've previously added to the specified project.

<h3 id="list-all-secrets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "value": "string",
    "updated_at": "string"
  }
]
```

<h3 id="list-all-secrets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve project's secrets|None|

<h3 id="list-all-secrets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SecretResponse_Output](#schemasecretresponse_output)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Bulk create secrets

<a id="opIdv1-bulk-create-secrets"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/secrets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "name": "OPENAI_API_KEY",
      "value": "sk-example-secret"
    },
    {
      "name": "STRIPE_WEBHOOK_SECRET",
      "value": "whsec_example"
    }
  ]'
```

`POST /v1/projects/{ref}/secrets`

Creates multiple secrets and adds them to the specified project.

> Body parameter

```json
[
  {
    "name": "OPENAI_API_KEY",
    "value": "sk-example-secret"
  },
  {
    "name": "STRIPE_WEBHOOK_SECRET",
    "value": "whsec_example"
  }
]
```

<h3 id="bulk-create-secrets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[CreateSecretBody](#schemacreatesecretbody)|true|none|
|» name|body|string|true|Secret name must not start with the SUPABASE_ prefix.|
|» value|body|string|true|none|

<h3 id="bulk-create-secrets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to create project's secrets|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Bulk delete secrets

<a id="opIdv1-bulk-delete-secrets"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/secrets \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "OPENAI_API_KEY"
  ]'
```

`DELETE /v1/projects/{ref}/secrets`

Deletes all secrets with the given names from the specified project

> Body parameter

```json
[
  "OPENAI_API_KEY"
]
```

<h3 id="bulk-delete-secrets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[DeleteSecretsBody](#schemadeletesecretsbody)|true|none|

<h3 id="bulk-delete-secrets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to delete secrets with given names|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="supabase-api-v1-storage">Storage</h1>

Visit [https://supabase.github.io/storage/](https://supabase.github.io/storage/) for complete documentation.

## Lists all buckets

<a id="opIdv1-list-all-buckets"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/storage/buckets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/storage/buckets`

<h3 id="lists-all-buckets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "owner": "string",
    "created_at": "string",
    "updated_at": "string",
    "public": true
  }
]
```

<h3 id="lists-all-buckets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to get list of buckets|None|

<h3 id="lists-all-buckets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[V1StorageBucketResponse_Output](#schemav1storagebucketresponse_output)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Gets project's storage config

<a id="opIdv1-get-storage-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/storage \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/config/storage`

<h3 id="gets-projects-storage-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "fileSizeLimit": -9007199254740000,
  "features": {
    "imageTransformation": {
      "enabled": true
    },
    "s3Protocol": {
      "enabled": true
    },
    "purgeCache": {
      "enabled": true
    },
    "icebergCatalog": {
      "enabled": true,
      "maxNamespaces": 0,
      "maxTables": 0,
      "maxCatalogs": 0
    },
    "vectorBuckets": {
      "enabled": true,
      "maxBuckets": 0,
      "maxIndexes": 0
    }
  },
  "capabilities": {
    "list_v2": true,
    "iceberg_catalog": true,
    "object_versioning": true
  },
  "external": {
    "upstreamTarget": "main"
  },
  "migrationVersion": "string"
}
```

<h3 id="gets-projects-storage-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[StorageConfigResponse_Output](#schemastorageconfigresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to retrieve project's storage config|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Updates project's storage config

<a id="opIdv1-update-storage-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/storage \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "fileSizeLimit": 10485760,
    "features": {
      "imageTransformation": {
        "enabled": true
      }
    }
  }'
```

`PATCH /v1/projects/{ref}/config/storage`

> Body parameter

```json
{
  "fileSizeLimit": 10485760,
  "features": {
    "imageTransformation": {
      "enabled": true
    }
  }
}
```

<h3 id="updates-projects-storage-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[UpdateStorageConfigBody](#schemaupdatestorageconfigbody)|true|none|
|» fileSizeLimit|body|integer(int64)|false|none|
|» features|body|object|false|none|
|» » imageTransformation|body|object|false|none|
|» » » enabled|body|boolean|true|none|
|» » s3Protocol|body|object|false|none|
|» » » enabled|body|boolean|true|none|
|» » purgeCache|body|object|false|none|
|» » » enabled|body|boolean|true|none|
|» » icebergCatalog|body|object|false|none|
|» » » enabled|body|boolean|true|none|
|» » » maxNamespaces|body|integer|true|none|
|» » » maxTables|body|integer|true|none|
|» » » maxCatalogs|body|integer|true|none|
|» » vectorBuckets|body|object|false|none|
|» » » enabled|body|boolean|true|none|
|» » » maxBuckets|body|integer|true|none|
|» » » maxIndexes|body|integer|true|none|
|» external|body|object|false|none|
|» » upstreamTarget|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » upstreamTarget|main|
|» » upstreamTarget|canary|

<h3 id="updates-projects-storage-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Failed to update project's storage config|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="supabase-api-v1-profile">Profile</h1>

## Gets the user's profile

<a id="opIdv1-get-profile"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/profile \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/profile`

> Example responses

> 200 Response

```json
{
  "gotrue_id": "string",
  "primary_email": "string",
  "username": "string"
}
```

<h3 id="gets-the-users-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[V1ProfileResponse_Output](#schemav1profileresponse_output)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="supabase-api-v1-realtime">Realtime</h1>

## Gets realtime configuration

<a id="opIdv1-get-realtime-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/realtime \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{ref}/config/realtime`

<h3 id="gets-realtime-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

> Example responses

> 200 Response

```json
{
  "private_only": true,
  "connection_pool": 1,
  "postgres_changes_pool": 1,
  "max_concurrent_users": 1,
  "max_events_per_second": 1,
  "max_bytes_per_second": 1,
  "max_channels_per_client": 1,
  "max_joins_per_second": 1,
  "max_presence_events_per_second": 1,
  "max_payload_size_in_kb": 1,
  "suspend": true,
  "presence_enabled": true,
  "admin_suspended_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="gets-realtime-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gets project's realtime configuration|[RealtimeConfigResponse_Output](#schemarealtimeconfigresponse_output)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Updates realtime configuration

<a id="opIdv1-update-realtime-config"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/realtime \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "private_only": false,
    "max_concurrent_users": 1000,
    "max_channels_per_client": 100
  }'
```

`PATCH /v1/projects/{ref}/config/realtime`

> Body parameter

```json
{
  "private_only": false,
  "max_concurrent_users": 1000,
  "max_channels_per_client": 100
}
```

<h3 id="updates-realtime-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|
|body|body|[UpdateRealtimeConfigBody](#schemaupdaterealtimeconfigbody)|true|none|
|» private_only|body|boolean|false|Whether to only allow private channels|
|» connection_pool|body|integer|false|Sets connection pool size for Realtime Authorization|
|» postgres_changes_pool|body|integer|false|Sets connection pool size used to create Postgres Changes subscriptions|
|» max_concurrent_users|body|integer|false|Sets maximum number of concurrent users rate limit|
|» max_events_per_second|body|integer|false|Sets maximum number of events per second rate per channel limit|
|» max_bytes_per_second|body|integer|false|Sets maximum number of bytes per second rate per channel limit|
|» max_channels_per_client|body|integer|false|Sets maximum number of channels per client rate limit|
|» max_joins_per_second|body|integer|false|Sets maximum number of joins per second rate limit|
|» max_presence_events_per_second|body|integer|false|Sets maximum number of presence events per second rate limit|
|» max_payload_size_in_kb|body|integer|false|Sets maximum number of payload size in KB rate limit|
|» suspend|body|boolean|false|Disables the Realtime service for this project when true. Set to false to re-enable it.|
|» presence_enabled|body|boolean|false|Whether to enable presence|

<h3 id="updates-realtime-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Shutdowns realtime connections for a project

<a id="opIdv1-shutdown-realtime"></a>

> Code samples

```bash
curl https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/config/realtime/shutdown \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/projects/{ref}/config/realtime/shutdown`

<h3 id="shutdowns-realtime-connections-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|path|string|true|Project ref|

<h3 id="shutdowns-realtime-connections-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Realtime connections shutdown successfully|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden action|None|
|404|Not Found|Tenant not found|None|
|429|Too Many Requests|Rate limit exceeded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

# Schemas

<h2 id="tocS_BranchDetailResponse_Output">BranchDetailResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemabranchdetailresponse_output"></a>
<a id="schema_BranchDetailResponse_Output"></a>
<a id="tocSbranchdetailresponse_output"></a>
<a id="tocsbranchdetailresponse_output"></a>

```json
{
  "ref": "string",
  "postgres_version": "string",
  "postgres_engine": "string",
  "release_channel": "string",
  "status": "INACTIVE",
  "db_host": "string",
  "db_port": 1,
  "db_user": "string",
  "db_pass": "string",
  "jwt_secret": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ref|string|true|none|none|
|postgres_version|string|true|none|none|
|postgres_engine|string|true|none|none|
|release_channel|string|true|none|none|
|status|string|true|none|none|
|db_host|string|true|none|none|
|db_port|integer|true|none|none|
|db_user|string|false|none|none|
|db_pass|string|false|none|none|
|jwt_secret|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|INACTIVE|
|status|ACTIVE_HEALTHY|
|status|ACTIVE_UNHEALTHY|
|status|COMING_UP|
|status|UNKNOWN|
|status|GOING_DOWN|
|status|INIT_FAILED|
|status|REMOVED|
|status|RESTORING|
|status|UPGRADING|
|status|PAUSING|
|status|RESTORE_FAILED|
|status|RESTARTING|
|status|PAUSE_FAILED|
|status|RESIZING|

<h2 id="tocS_UpdateBranchBody">UpdateBranchBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebranchbody"></a>
<a id="schema_UpdateBranchBody"></a>
<a id="tocSupdatebranchbody"></a>
<a id="tocsupdatebranchbody"></a>

```json
{
  "branch_name": "preview-login-page",
  "git_branch": "feature/login-page",
  "persistent": true,
  "request_review": true,
  "notify_url": "https://example.com/webhooks/branches"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch_name|string|false|none|none|
|git_branch|string|false|none|none|
|reset_on_push|boolean|false|none|**Deprecated.** This field is deprecated and will be ignored. Use v1-reset-a-branch endpoint directly instead.|
|persistent|boolean|false|none|none|
|status|string|false|none|none|
|request_review|boolean|false|none|none|
|notify_url|string(uri)|false|none|HTTP endpoint to receive branch status updates.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CREATING_PROJECT|
|status|RUNNING_MIGRATIONS|
|status|MIGRATIONS_PASSED|
|status|MIGRATIONS_FAILED|
|status|FUNCTIONS_DEPLOYED|
|status|FUNCTIONS_FAILED|

<h2 id="tocS_BranchResponse_Output">BranchResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemabranchresponse_output"></a>
<a id="schema_BranchResponse_Output"></a>
<a id="tocSbranchresponse_output"></a>
<a id="tocsbranchresponse_output"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "project_ref": "string",
  "parent_project_ref": "string",
  "is_default": true,
  "git_branch": "string",
  "pr_number": -9007199254740000,
  "latest_check_run_id": 0,
  "persistent": true,
  "status": "CREATING_PROJECT",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "review_requested_at": "1970-01-01T00:00:00Z",
  "with_data": true,
  "notify_url": "http://example.com",
  "deletion_scheduled_at": "1970-01-01T00:00:00Z",
  "preview_project_status": "INACTIVE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|name|string|true|none|none|
|project_ref|string|true|none|none|
|parent_project_ref|string|true|none|none|
|is_default|boolean|true|none|none|
|git_branch|string|false|none|none|
|pr_number|integer(int32)|false|none|none|
|latest_check_run_id|number|false|none|**Deprecated.** This field is deprecated and will not be populated.|
|persistent|boolean|true|none|none|
|status|string|true|none|**Deprecated.** This field is deprecated. List action runs to get branch status instead.|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|review_requested_at|string(date-time)|false|none|none|
|with_data|boolean|true|none|none|
|notify_url|string(uri)|false|none|none|
|deletion_scheduled_at|string(date-time)|false|none|none|
|preview_project_status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CREATING_PROJECT|
|status|RUNNING_MIGRATIONS|
|status|MIGRATIONS_PASSED|
|status|MIGRATIONS_FAILED|
|status|FUNCTIONS_DEPLOYED|
|status|FUNCTIONS_FAILED|
|preview_project_status|INACTIVE|
|preview_project_status|ACTIVE_HEALTHY|
|preview_project_status|ACTIVE_UNHEALTHY|
|preview_project_status|COMING_UP|
|preview_project_status|UNKNOWN|
|preview_project_status|GOING_DOWN|
|preview_project_status|INIT_FAILED|
|preview_project_status|REMOVED|
|preview_project_status|RESTORING|
|preview_project_status|UPGRADING|
|preview_project_status|PAUSING|
|preview_project_status|RESTORE_FAILED|
|preview_project_status|RESTARTING|
|preview_project_status|PAUSE_FAILED|
|preview_project_status|RESIZING|

<h2 id="tocS_BranchDeleteResponse_Output">BranchDeleteResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemabranchdeleteresponse_output"></a>
<a id="schema_BranchDeleteResponse_Output"></a>
<a id="tocSbranchdeleteresponse_output"></a>
<a id="tocsbranchdeleteresponse_output"></a>

```json
{
  "message": "ok"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|message|ok|

<h2 id="tocS_BranchActionBody">BranchActionBody</h2>
<!-- backwards compatibility -->
<a id="schemabranchactionbody"></a>
<a id="schema_BranchActionBody"></a>
<a id="tocSbranchactionbody"></a>
<a id="tocsbranchactionbody"></a>

```json
{
  "migration_version": "20250312000000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|migration_version|string|false|none|none|

<h2 id="tocS_BranchUpdateResponse_Output">BranchUpdateResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemabranchupdateresponse_output"></a>
<a id="schema_BranchUpdateResponse_Output"></a>
<a id="tocSbranchupdateresponse_output"></a>
<a id="tocsbranchupdateresponse_output"></a>

```json
{
  "workflow_run_id": "string",
  "message": "ok"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow_run_id|string|true|none|none|
|message|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|message|ok|

<h2 id="tocS_BranchRestoreResponse_Output">BranchRestoreResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemabranchrestoreresponse_output"></a>
<a id="schema_BranchRestoreResponse_Output"></a>
<a id="tocSbranchrestoreresponse_output"></a>
<a id="tocsbranchrestoreresponse_output"></a>

```json
{
  "message": "Branch restoration initiated"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|message|Branch restoration initiated|

<h2 id="tocS_V1ProjectWithDatabaseResponse_Output">V1ProjectWithDatabaseResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemav1projectwithdatabaseresponse_output"></a>
<a id="schema_V1ProjectWithDatabaseResponse_Output"></a>
<a id="tocSv1projectwithdatabaseresponse_output"></a>
<a id="tocsv1projectwithdatabaseresponse_output"></a>

```json
{
  "id": "string",
  "ref": "abcdefghijklmnopqrst",
  "organization_id": "string",
  "organization_slug": "tsrqponmlkjihgfedcba",
  "name": "string",
  "region": "string",
  "created_at": "string",
  "status": "INACTIVE",
  "database": {
    "host": "string",
    "version": "string",
    "postgres_engine": "string",
    "release_channel": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|**Deprecated.** Deprecated: Use `ref` instead.|
|ref|string|true|none|Project ref|
|organization_id|string|true|none|**Deprecated.** Deprecated: Use `organization_slug` instead.|
|organization_slug|string|true|none|Organization slug|
|name|string|true|none|Name of your project|
|region|string|true|none|Region of your project|
|created_at|string|true|none|Creation timestamp|
|status|string|true|none|none|
|database|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|INACTIVE|
|status|ACTIVE_HEALTHY|
|status|ACTIVE_UNHEALTHY|
|status|COMING_UP|
|status|UNKNOWN|
|status|GOING_DOWN|
|status|INIT_FAILED|
|status|REMOVED|
|status|RESTORING|
|status|UPGRADING|
|status|PAUSING|
|status|RESTORE_FAILED|
|status|RESTARTING|
|status|PAUSE_FAILED|
|status|RESIZING|

<h2 id="tocS_V1CreateProjectBody">V1CreateProjectBody</h2>
<!-- backwards compatibility -->
<a id="schemav1createprojectbody"></a>
<a id="schema_V1CreateProjectBody"></a>
<a id="tocSv1createprojectbody"></a>
<a id="tocsv1createprojectbody"></a>

```json
{
  "db_pass": "correct-horse-battery-staple",
  "name": "acme-prod",
  "organization_slug": "tsrqponmlkjihgfedcba",
  "region": "us-east-1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|db_pass|string|true|none|Database password|
|name|string|true|none|Name of your project|
|organization_id|string|false|none|**Deprecated.** Deprecated: Use `organization_slug` instead.|
|organization_slug|string|true|none|Organization slug|
|plan|string|false|none|**Deprecated.** Subscription Plan is now set on organization level and is ignored in this request|
|region|string|false|none|**Deprecated.** Region you want your server to reside in. Use region_selection instead.|
|region_selection|object|false|none|Region selection. Only one of region or region_selection can be specified.|
|kps_enabled|boolean|false|none|**Deprecated.** This field is deprecated and is ignored in this request|
|desired_instance_size|string|false|none|Desired instance size. Omit this field to always default to the smallest possible size.|
|template_url|string(uri)|false|none|Template URL used to create the project from the CLI.|
|release_channel|null|false|none|**Deprecated.**|
|postgres_engine|null|false|none|**Deprecated.**|
|high_availability|boolean|false|none|[Experimental] Whether to enable high availability for the project.|

#### Enumerated Values

|Property|Value|
|---|---|
|plan|free|
|plan|pro|
|region|us-east-1|
|region|us-east-2|
|region|us-west-1|
|region|us-west-2|
|region|ap-east-1|
|region|ap-southeast-1|
|region|ap-northeast-1|
|region|ap-northeast-2|
|region|ap-southeast-2|
|region|eu-west-1|
|region|eu-west-2|
|region|eu-west-3|
|region|eu-north-1|
|region|eu-central-1|
|region|eu-central-2|
|region|ca-central-1|
|region|ap-south-1|
|region|sa-east-1|
|desired_instance_size|nano|
|desired_instance_size|micro|
|desired_instance_size|small|
|desired_instance_size|medium|
|desired_instance_size|large|
|desired_instance_size|xlarge|
|desired_instance_size|2xlarge|
|desired_instance_size|4xlarge|
|desired_instance_size|8xlarge|
|desired_instance_size|12xlarge|
|desired_instance_size|16xlarge|
|desired_instance_size|24xlarge|
|desired_instance_size|24xlarge_optimized_memory|
|desired_instance_size|24xlarge_optimized_cpu|
|desired_instance_size|24xlarge_high_memory|
|desired_instance_size|48xlarge|
|desired_instance_size|48xlarge_optimized_memory|
|desired_instance_size|48xlarge_optimized_cpu|
|desired_instance_size|48xlarge_high_memory|

<h2 id="tocS_V1ProjectResponse_Output">V1ProjectResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemav1projectresponse_output"></a>
<a id="schema_V1ProjectResponse_Output"></a>
<a id="tocSv1projectresponse_output"></a>
<a id="tocsv1projectresponse_output"></a>

```json
{
  "id": "string",
  "ref": "abcdefghijklmnopqrst",
  "organization_id": "string",
  "organization_slug": "tsrqponmlkjihgfedcba",
  "name": "string",
  "region": "string",
  "created_at": "string",
  "status": "INACTIVE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|**Deprecated.** Deprecated: Use `ref` instead.|
|ref|string|true|none|Project ref|
|organization_id|string|true|none|**Deprecated.** Deprecated: Use `organization_slug` instead.|
|organization_slug|string|true|none|Organization slug|
|name|string|true|none|Name of your project|
|region|string|true|none|Region of your project|
|created_at|string|true|none|Creation timestamp|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|INACTIVE|
|status|ACTIVE_HEALTHY|
|status|ACTIVE_UNHEALTHY|
|status|COMING_UP|
|status|UNKNOWN|
|status|GOING_DOWN|
|status|INIT_FAILED|
|status|REMOVED|
|status|RESTORING|
|status|UPGRADING|
|status|PAUSING|
|status|RESTORE_FAILED|
|status|RESTARTING|
|status|PAUSE_FAILED|
|status|RESIZING|

<h2 id="tocS_RegionsInfoV1_Output">RegionsInfoV1_Output</h2>
<!-- backwards compatibility -->
<a id="schemaregionsinfov1_output"></a>
<a id="schema_RegionsInfoV1_Output"></a>
<a id="tocSregionsinfov1_output"></a>
<a id="tocsregionsinfov1_output"></a>

```json
{
  "recommendations": {
    "smartGroup": {
      "name": "string",
      "code": "americas",
      "type": "smartGroup"
    },
    "specific": [
      {
        "name": "string",
        "code": "us-east-1",
        "type": "specific",
        "provider": "AWS",
        "status": "capacity"
      }
    ]
  },
  "all": {
    "smartGroup": [
      {
        "name": "string",
        "code": "americas",
        "type": "smartGroup"
      }
    ],
    "specific": [
      {
        "name": "string",
        "code": "us-east-1",
        "type": "specific",
        "provider": "AWS",
        "status": "capacity"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommendations|object|true|none|none|
|all|object|true|none|none|

<h2 id="tocS_OrganizationResponseV1_Output">OrganizationResponseV1_Output</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationresponsev1_output"></a>
<a id="schema_OrganizationResponseV1_Output"></a>
<a id="tocSorganizationresponsev1_output"></a>
<a id="tocsorganizationresponsev1_output"></a>

```json
{
  "id": "string",
  "slug": "tsrqponmlkjihgfedcba",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|**Deprecated.** Deprecated: Use `slug` instead.|
|slug|string|true|none|Organization slug|
|name|string|true|none|none|

<h2 id="tocS_CreateOrganizationV1">CreateOrganizationV1</h2>
<!-- backwards compatibility -->
<a id="schemacreateorganizationv1"></a>
<a id="schema_CreateOrganizationV1"></a>
<a id="tocScreateorganizationv1"></a>
<a id="tocscreateorganizationv1"></a>

```json
{
  "name": "Acme"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|

<h2 id="tocS_OAuthTokenBody">OAuthTokenBody</h2>
<!-- backwards compatibility -->
<a id="schemaoauthtokenbody"></a>
<a id="schema_OAuthTokenBody"></a>
<a id="tocSoauthtokenbody"></a>
<a id="tocsoauthtokenbody"></a>

```json
{
  "grant_type": "authorization_code",
  "client_id": "66666666-6666-4666-8666-666666666666",
  "client_secret": "sb_secret_live_example_9f4d3a206b2e4a7e8c91",
  "code": "oauth_code_9f4d3a206b2e4a7e8c91",
  "code_verifier": "qW0Z6d9pQnW0mL1dK1q9wFq6Yz2nV5rA8jT3mP7sH4c",
  "redirect_uri": "https://app.acme.com/auth/callback",
  "scope": "projects:read projects:write"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grant_type|string|false|none|none|
|client_id|string(uuid)|false|none|none|
|client_secret|string|false|none|none|
|code|string|false|none|none|
|code_verifier|string|false|none|none|
|redirect_uri|string|false|none|none|
|refresh_token|string|false|none|none|
|assertion|string|false|none|IDJAG assertion JWT for grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer. Beta - available on Team and Enterprise plans only.|
|resource|string(uri)|false|none|Resource indicator for MCP (Model Context Protocol) clients|
|scope|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|grant_type|authorization_code|
|grant_type|refresh_token|
|grant_type|urn:ietf:params:oauth:grant-type:jwt-bearer|

<h2 id="tocS_OAuthTokenResponse_Output">OAuthTokenResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemaoauthtokenresponse_output"></a>
<a id="schema_OAuthTokenResponse_Output"></a>
<a id="tocSoauthtokenresponse_output"></a>
<a id="tocsoauthtokenresponse_output"></a>

```json
{
  "access_token": "string",
  "refresh_token": "string",
  "expires_in": -9007199254740000,
  "token_type": "Bearer"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|none|
|refresh_token|string|false|none|The `urn:ietf:params:oauth:grant-type:jwt-bearer` grant type issues access tokens only, no refresh token is returned and the token cannot be revoked via `/v1/oauth/revoke`.|
|expires_in|integer|true|none|none|
|token_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|token_type|Bearer|

<h2 id="tocS_OAuthRevokeTokenBody">OAuthRevokeTokenBody</h2>
<!-- backwards compatibility -->
<a id="schemaoauthrevoketokenbody"></a>
<a id="schema_OAuthRevokeTokenBody"></a>
<a id="tocSoauthrevoketokenbody"></a>
<a id="tocsoauthrevoketokenbody"></a>

```json
{
  "client_id": "66666666-6666-4666-8666-666666666666",
  "client_secret": "sb_secret_live_example_9f4d3a206b2e4a7e8c91",
  "refresh_token": "oauth_refresh_9f4d3a206b2e4a7e8c91"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string(uuid)|true|none|none|
|client_secret|string|true|none|none|
|refresh_token|string|true|none|none|

<h2 id="tocS_SnippetList_Output">SnippetList_Output</h2>
<!-- backwards compatibility -->
<a id="schemasnippetlist_output"></a>
<a id="schema_SnippetList_Output"></a>
<a id="tocSsnippetlist_output"></a>
<a id="tocssnippetlist_output"></a>

```json
{
  "data": [
    {
      "id": "string",
      "inserted_at": "string",
      "updated_at": "string",
      "type": "sql",
      "visibility": "user",
      "name": "string",
      "description": "string",
      "project": {
        "id": 0,
        "name": "string"
      },
      "owner": {
        "id": 0,
        "username": "string"
      },
      "updated_by": {
        "id": 0,
        "username": "string"
      },
      "favorite": true
    }
  ],
  "cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|cursor|string|false|none|none|

<h2 id="tocS_SnippetResponse_Output">SnippetResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemasnippetresponse_output"></a>
<a id="schema_SnippetResponse_Output"></a>
<a id="tocSsnippetresponse_output"></a>
<a id="tocssnippetresponse_output"></a>

```json
{
  "id": "string",
  "inserted_at": "string",
  "updated_at": "string",
  "type": "sql",
  "visibility": "user",
  "name": "string",
  "description": "string",
  "project": {
    "id": 0,
    "name": "string"
  },
  "owner": {
    "id": 0,
    "username": "string"
  },
  "updated_by": {
    "id": 0,
    "username": "string"
  },
  "favorite": true,
  "content": {
    "favorite": true,
    "schema_version": "string",
    "sql": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|inserted_at|string|true|none|none|
|updated_at|string|true|none|none|
|type|string|true|none|none|
|visibility|string|true|none|none|
|name|string|true|none|none|
|description|string \| null|true|none|none|
|project|object|true|none|none|
|owner|object|true|none|none|
|updated_by|object|true|none|none|
|favorite|boolean|true|none|none|
|content|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sql|
|visibility|user|
|visibility|project|
|visibility|org|
|visibility|public|

<h2 id="tocS_V1ProfileResponse_Output">V1ProfileResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemav1profileresponse_output"></a>
<a id="schema_V1ProfileResponse_Output"></a>
<a id="tocSv1profileresponse_output"></a>
<a id="tocsv1profileresponse_output"></a>

```json
{
  "gotrue_id": "string",
  "primary_email": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gotrue_id|string|true|none|none|
|primary_email|string|true|none|none|
|username|string|true|none|none|

<h2 id="tocS_ListActionRunResponse_Output">ListActionRunResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemalistactionrunresponse_output"></a>
<a id="schema_ListActionRunResponse_Output"></a>
<a id="tocSlistactionrunresponse_output"></a>
<a id="tocslistactionrunresponse_output"></a>

```json
[
  {
    "id": "string",
    "branch_id": "string",
    "run_steps": [
      {
        "name": "clone",
        "status": "CREATED",
        "created_at": "string",
        "updated_at": "string"
      }
    ],
    "git_config": null,
    "workdir": "string",
    "check_run_id": 0,
    "created_at": "string",
    "updated_at": "string"
  }
]
```

<h2 id="tocS_ActionRunResponse_Output">ActionRunResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemaactionrunresponse_output"></a>
<a id="schema_ActionRunResponse_Output"></a>
<a id="tocSactionrunresponse_output"></a>
<a id="tocsactionrunresponse_output"></a>

```json
{
  "id": "string",
  "branch_id": "string",
  "run_steps": [
    {
      "name": "clone",
      "status": "CREATED",
      "created_at": "string",
      "updated_at": "string"
    }
  ],
  "git_config": null,
  "workdir": "string",
  "check_run_id": 0,
  "created_at": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|branch_id|string|true|none|none|
|run_steps|[object]|true|none|none|
|git_config|object \| null|false|none|none|
|workdir|string \| null|true|none|none|
|check_run_id|number \| null|true|none|none|
|created_at|string|true|none|none|
|updated_at|string|true|none|none|

<h2 id="tocS_UpdateRunStatusBody">UpdateRunStatusBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterunstatusbody"></a>
<a id="schema_UpdateRunStatusBody"></a>
<a id="tocSupdaterunstatusbody"></a>
<a id="tocsupdaterunstatusbody"></a>

```json
{
  "clone": "RUNNING",
  "configure": "RUNNING",
  "migrate": "RUNNING",
  "deploy": "CREATED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clone|string|false|none|none|
|pull|string|false|none|none|
|health|string|false|none|none|
|configure|string|false|none|none|
|migrate|string|false|none|none|
|seed|string|false|none|none|
|deploy|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|clone|CREATED|
|clone|DEAD|
|clone|EXITED|
|clone|PAUSED|
|clone|REMOVING|
|clone|RESTARTING|
|clone|RUNNING|
|pull|CREATED|
|pull|DEAD|
|pull|EXITED|
|pull|PAUSED|
|pull|REMOVING|
|pull|RESTARTING|
|pull|RUNNING|
|health|CREATED|
|health|DEAD|
|health|EXITED|
|health|PAUSED|
|health|REMOVING|
|health|RESTARTING|
|health|RUNNING|
|configure|CREATED|
|configure|DEAD|
|configure|EXITED|
|configure|PAUSED|
|configure|REMOVING|
|configure|RESTARTING|
|configure|RUNNING|
|migrate|CREATED|
|migrate|DEAD|
|migrate|EXITED|
|migrate|PAUSED|
|migrate|REMOVING|
|migrate|RESTARTING|
|migrate|RUNNING|
|seed|CREATED|
|seed|DEAD|
|seed|EXITED|
|seed|PAUSED|
|seed|REMOVING|
|seed|RESTARTING|
|seed|RUNNING|
|deploy|CREATED|
|deploy|DEAD|
|deploy|EXITED|
|deploy|PAUSED|
|deploy|REMOVING|
|deploy|RESTARTING|
|deploy|RUNNING|

<h2 id="tocS_UpdateRunStatusResponse_Output">UpdateRunStatusResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterunstatusresponse_output"></a>
<a id="schema_UpdateRunStatusResponse_Output"></a>
<a id="tocSupdaterunstatusresponse_output"></a>
<a id="tocsupdaterunstatusresponse_output"></a>

```json
{
  "message": "ok"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|message|ok|

<h2 id="tocS_ApiKeyResponse_Output">ApiKeyResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyresponse_output"></a>
<a id="schema_ApiKeyResponse_Output"></a>
<a id="tocSapikeyresponse_output"></a>
<a id="tocsapikeyresponse_output"></a>

```json
{
  "api_key": "string",
  "id": "string",
  "type": "legacy",
  "prefix": "string",
  "name": "string",
  "description": "string",
  "hash": "string",
  "secret_jwt_template": {
    "property1": null,
    "property2": null
  },
  "inserted_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key|string \| null|false|none|none|
|id|string \| null|false|none|none|
|type|string \| null|false|none|none|
|prefix|string \| null|false|none|none|
|name|string|true|none|none|
|description|string \| null|false|none|none|
|hash|string \| null|false|none|none|
|secret_jwt_template|object \| null|false|none|none|
|inserted_at|string(date-time) \| null|false|none|none|
|updated_at|string(date-time) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|legacy|
|type|publishable|
|type|secret|
|type|null|

<h2 id="tocS_LegacyApiKeysResponse_Output">LegacyApiKeysResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemalegacyapikeysresponse_output"></a>
<a id="schema_LegacyApiKeysResponse_Output"></a>
<a id="tocSlegacyapikeysresponse_output"></a>
<a id="tocslegacyapikeysresponse_output"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|none|

<h2 id="tocS_CreateApiKeyBody">CreateApiKeyBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateapikeybody"></a>
<a id="schema_CreateApiKeyBody"></a>
<a id="tocScreateapikeybody"></a>
<a id="tocscreateapikeybody"></a>

```json
{
  "type": "secret",
  "name": "ci_secret_key",
  "description": "CI deploy key"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|name|string|true|none|none|
|description|string \| null|false|none|none|
|secret_jwt_template|object \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|publishable|
|type|secret|

<h2 id="tocS_UpdateApiKeyBody">UpdateApiKeyBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapikeybody"></a>
<a id="schema_UpdateApiKeyBody"></a>
<a id="tocSupdateapikeybody"></a>
<a id="tocsupdateapikeybody"></a>

```json
{
  "name": "ci_secret_key_rotated",
  "description": "Rotated after March release"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|description|string \| null|false|none|none|
|secret_jwt_template|object \| null|false|none|none|

<h2 id="tocS_CreateBranchBody">CreateBranchBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatebranchbody"></a>
<a id="schema_CreateBranchBody"></a>
<a id="tocScreatebranchbody"></a>
<a id="tocscreatebranchbody"></a>

```json
{
  "branch_name": "preview-login-page",
  "git_branch": "feature/login-page",
  "persistent": true,
  "with_data": false,
  "notify_url": "https://example.com/webhooks/branches"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch_name|string|true|none|none|
|git_branch|string|false|none|none|
|is_default|boolean|false|none|none|
|persistent|boolean|false|none|none|
|region|string|false|none|none|
|desired_instance_size|string|false|none|none|
|release_channel|string|false|none|Release channel. If not provided, GA will be used.|
|postgres_engine|string|false|none|Postgres engine version. If not provided, the latest version will be used.|
|secrets|object|false|none|none|
|with_data|boolean|false|none|none|
|notify_url|string(uri)|false|none|HTTP endpoint to receive branch status updates.|

#### Enumerated Values

|Property|Value|
|---|---|
|desired_instance_size|pico|
|desired_instance_size|nano|
|desired_instance_size|micro|
|desired_instance_size|small|
|desired_instance_size|medium|
|desired_instance_size|large|
|desired_instance_size|xlarge|
|desired_instance_size|2xlarge|
|desired_instance_size|4xlarge|
|desired_instance_size|8xlarge|
|desired_instance_size|12xlarge|
|desired_instance_size|16xlarge|
|desired_instance_size|24xlarge|
|desired_instance_size|24xlarge_optimized_memory|
|desired_instance_size|24xlarge_optimized_cpu|
|desired_instance_size|24xlarge_high_memory|
|desired_instance_size|48xlarge|
|desired_instance_size|48xlarge_optimized_memory|
|desired_instance_size|48xlarge_optimized_cpu|
|desired_instance_size|48xlarge_high_memory|
|release_channel|internal|
|release_channel|alpha|
|release_channel|beta|
|release_channel|ga|
|release_channel|withdrawn|
|release_channel|preview|
|postgres_engine|15|
|postgres_engine|17|
|postgres_engine|17-oriole|

<h2 id="tocS_JsonValue_Output">JsonValue_Output</h2>
<!-- backwards compatibility -->
<a id="schemajsonvalue_output"></a>
<a id="schema_JsonValue_Output"></a>
<a id="tocSjsonvalue_output"></a>
<a id="tocsjsonvalue_output"></a>

```json
"string"
```

Any JSON-serializable value

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|string \| number \| boolean \| null|false|none|none|
|*anyOf*|string|false|none|none|
|*anyOf*|number|false|none|none|
|*anyOf*|boolean|false|none|none|
|*anyOf*|[[JsonValue_Output](#schemajsonvalue_output)]|false|none|none|
|*anyOf*|object|false|none|none|
|**additionalProperties**|[JsonValue_Output](#schemajsonvalue_output)|false|none|Any JSON-serializable value|

<h2 id="tocS_UpdateCustomHostnameResponse_Output">UpdateCustomHostnameResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecustomhostnameresponse_output"></a>
<a id="schema_UpdateCustomHostnameResponse_Output"></a>
<a id="tocSupdatecustomhostnameresponse_output"></a>
<a id="tocsupdatecustomhostnameresponse_output"></a>

```json
{
  "status": "1_not_started",
  "custom_hostname": "string",
  "data": {
    "success": true,
    "errors": [
      "string"
    ],
    "messages": [
      "string"
    ],
    "result": {
      "id": "string",
      "hostname": "string",
      "ssl": {
        "status": "string",
        "validation_records": [
          {
            "txt_name": "string",
            "txt_value": "string"
          }
        ],
        "validation_errors": [
          {
            "message": "string"
          }
        ]
      },
      "ownership_verification": {
        "type": "string",
        "name": "string",
        "value": "string"
      },
      "custom_origin_server": "string",
      "verification_errors": [
        "string"
      ],
      "status": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|custom_hostname|string|false|none|none|
|data|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|1_not_started|
|status|2_initiated|
|status|3_challenge_verified|
|status|4_origin_setup_completed|
|status|5_services_reconfigured|

<h2 id="tocS_UpdateCustomHostnameBody">UpdateCustomHostnameBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecustomhostnamebody"></a>
<a id="schema_UpdateCustomHostnameBody"></a>
<a id="tocSupdatecustomhostnamebody"></a>
<a id="tocsupdatecustomhostnamebody"></a>

```json
{
  "custom_hostname": "docs.example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_hostname|string|true|none|none|

<h2 id="tocS_JitAccessRequestRequest">JitAccessRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemajitaccessrequestrequest"></a>
<a id="schema_JitAccessRequestRequest"></a>
<a id="tocSjitaccessrequestrequest"></a>
<a id="tocsjitaccessrequestrequest"></a>

```json
{
  "state": "enabled"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|enabled|
|state|disabled|

<h2 id="tocS_NetworkBanResponse_Output">NetworkBanResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemanetworkbanresponse_output"></a>
<a id="schema_NetworkBanResponse_Output"></a>
<a id="tocSnetworkbanresponse_output"></a>
<a id="tocsnetworkbanresponse_output"></a>

```json
{
  "banned_ipv4_addresses": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|banned_ipv4_addresses|[string]|true|none|none|

<h2 id="tocS_NetworkBanResponseEnriched_Output">NetworkBanResponseEnriched_Output</h2>
<!-- backwards compatibility -->
<a id="schemanetworkbanresponseenriched_output"></a>
<a id="schema_NetworkBanResponseEnriched_Output"></a>
<a id="tocSnetworkbanresponseenriched_output"></a>
<a id="tocsnetworkbanresponseenriched_output"></a>

```json
{
  "banned_ipv4_addresses": [
    {
      "banned_address": "string",
      "identifier": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|banned_ipv4_addresses|[object]|true|none|none|

<h2 id="tocS_RemoveNetworkBanRequest">RemoveNetworkBanRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovenetworkbanrequest"></a>
<a id="schema_RemoveNetworkBanRequest"></a>
<a id="tocSremovenetworkbanrequest"></a>
<a id="tocsremovenetworkbanrequest"></a>

```json
{
  "ipv4_addresses": [
    "203.0.113.10"
  ],
  "requester_ip": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipv4_addresses|[string]|true|none|List of IP addresses to unban.|
|requester_ip|boolean|false|none|Include requester's public IP in the list of addresses to unban.|
|identifier|string|false|none|none|

<h2 id="tocS_NetworkRestrictionsResponse_Output">NetworkRestrictionsResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemanetworkrestrictionsresponse_output"></a>
<a id="schema_NetworkRestrictionsResponse_Output"></a>
<a id="tocSnetworkrestrictionsresponse_output"></a>
<a id="tocsnetworkrestrictionsresponse_output"></a>

```json
{
  "entitlement": "disallowed",
  "config": {
    "dbAllowedCidrs": [
      "203.0.113.0/24"
    ],
    "dbAllowedCidrsV6": [
      "2001:db8::/32"
    ]
  },
  "old_config": {
    "dbAllowedCidrs": [
      "203.0.113.0/24"
    ],
    "dbAllowedCidrsV6": [
      "2001:db8::/32"
    ]
  },
  "status": "stored",
  "updated_at": "1970-01-01T00:00:00Z",
  "applied_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entitlement|string|true|none|none|
|config|object|true|none|At any given point in time, this is the config that the user has requested be applied to their project. The `status` field indicates if it has been applied to the project, or is pending. When an updated config is received, the applied config is moved to `old_config`.|
|old_config|object|false|none|Populated when a new config has been received, but not registered as successfully applied to a project.|
|status|string|true|none|none|
|updated_at|string(date-time)|false|none|none|
|applied_at|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entitlement|disallowed|
|entitlement|allowed|
|status|stored|
|status|applied|

<h2 id="tocS_NetworkRestrictionsRequest">NetworkRestrictionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemanetworkrestrictionsrequest"></a>
<a id="schema_NetworkRestrictionsRequest"></a>
<a id="tocSnetworkrestrictionsrequest"></a>
<a id="tocsnetworkrestrictionsrequest"></a>

```json
{
  "dbAllowedCidrs": [
    "203.0.113.0/24"
  ],
  "dbAllowedCidrsV6": [
    "2001:db8::/32"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dbAllowedCidrs|[string]|false|none|none|
|dbAllowedCidrsV6|[string]|false|none|none|

<h2 id="tocS_NetworkRestrictionsPatchRequest">NetworkRestrictionsPatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemanetworkrestrictionspatchrequest"></a>
<a id="schema_NetworkRestrictionsPatchRequest"></a>
<a id="tocSnetworkrestrictionspatchrequest"></a>
<a id="tocsnetworkrestrictionspatchrequest"></a>

```json
{
  "add": {
    "dbAllowedCidrs": [
      "203.0.113.0/24"
    ]
  },
  "remove": {
    "dbAllowedCidrs": [
      "198.51.100.0/24"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add|object|false|none|none|
|remove|object|false|none|none|

<h2 id="tocS_NetworkRestrictionsV2Response_Output">NetworkRestrictionsV2Response_Output</h2>
<!-- backwards compatibility -->
<a id="schemanetworkrestrictionsv2response_output"></a>
<a id="schema_NetworkRestrictionsV2Response_Output"></a>
<a id="tocSnetworkrestrictionsv2response_output"></a>
<a id="tocsnetworkrestrictionsv2response_output"></a>

```json
{
  "entitlement": "disallowed",
  "config": {
    "dbAllowedCidrs": [
      {
        "address": "string",
        "type": "v4"
      }
    ]
  },
  "old_config": {
    "dbAllowedCidrs": [
      {
        "address": "string",
        "type": "v4"
      }
    ]
  },
  "updated_at": "1970-01-01T00:00:00Z",
  "applied_at": "1970-01-01T00:00:00Z",
  "status": "stored"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entitlement|string|true|none|none|
|config|object|true|none|At any given point in time, this is the config that the user has requested be applied to their project. The `status` field indicates if it has been applied to the project, or is pending. When an updated config is received, the applied config is moved to `old_config`.|
|old_config|object|false|none|Populated when a new config has been received, but not registered as successfully applied to a project.|
|updated_at|string(date-time)|false|none|none|
|applied_at|string(date-time)|false|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entitlement|disallowed|
|entitlement|allowed|
|status|stored|
|status|applied|

<h2 id="tocS_PgsodiumConfigResponse_Output">PgsodiumConfigResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemapgsodiumconfigresponse_output"></a>
<a id="schema_PgsodiumConfigResponse_Output"></a>
<a id="tocSpgsodiumconfigresponse_output"></a>
<a id="tocspgsodiumconfigresponse_output"></a>

```json
{
  "root_key": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|root_key|string|true|none|The pgsodium root key: 32 bytes, hex-encoded (64 characters).|

<h2 id="tocS_UpdatePgsodiumConfigBody">UpdatePgsodiumConfigBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepgsodiumconfigbody"></a>
<a id="schema_UpdatePgsodiumConfigBody"></a>
<a id="tocSupdatepgsodiumconfigbody"></a>
<a id="tocsupdatepgsodiumconfigbody"></a>

```json
{
  "root_key": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|root_key|string|true|none|The pgsodium root key: 32 bytes, hex-encoded (64 characters).|

<h2 id="tocS_PostgrestConfigWithJWTSecretResponse_Output">PostgrestConfigWithJWTSecretResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemapostgrestconfigwithjwtsecretresponse_output"></a>
<a id="schema_PostgrestConfigWithJWTSecretResponse_Output"></a>
<a id="tocSpostgrestconfigwithjwtsecretresponse_output"></a>
<a id="tocspostgrestconfigwithjwtsecretresponse_output"></a>

```json
{
  "db_schema": "string",
  "max_rows": -9007199254740000,
  "db_extra_search_path": "string",
  "db_pool": -9007199254740000,
  "db_pool_acquisition_timeout": -9007199254740000,
  "db_pool_max_lifetime": 0,
  "db_pool_max_idletime": 0,
  "jwt_secret": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|db_schema|string|true|none|none|
|max_rows|integer|true|none|none|
|db_extra_search_path|string|true|none|none|
|db_pool|integer \| null|true|none|If `null`, the value is automatically configured based on compute size.|
|db_pool_acquisition_timeout|integer \| null|true|none|If `null`, the value is automatically configured to 10.|
|db_pool_max_lifetime|integer \| null|true|none|If `null`, the value is automatically configured to 1800.|
|db_pool_max_idletime|integer \| null|true|none|If `null`, the value is automatically configured to 30.|
|jwt_secret|string|false|none|none|

<h2 id="tocS_V1UpdatePostgrestConfigBody">V1UpdatePostgrestConfigBody</h2>
<!-- backwards compatibility -->
<a id="schemav1updatepostgrestconfigbody"></a>
<a id="schema_V1UpdatePostgrestConfigBody"></a>
<a id="tocSv1updatepostgrestconfigbody"></a>
<a id="tocsv1updatepostgrestconfigbody"></a>

```json
{
  "db_schema": "public,storage",
  "db_pool": 20,
  "max_rows": 1000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|db_extra_search_path|string|false|none|none|
|db_schema|string|false|none|none|
|max_rows|integer|false|none|none|
|db_pool|integer|false|none|none|
|db_pool_acquisition_timeout|integer|false|none|none|
|db_pool_max_lifetime|integer|false|none|none|
|db_pool_max_idletime|integer|false|none|none|

<h2 id="tocS_V1PostgrestConfigResponse_Output">V1PostgrestConfigResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemav1postgrestconfigresponse_output"></a>
<a id="schema_V1PostgrestConfigResponse_Output"></a>
<a id="tocSv1postgrestconfigresponse_output"></a>
<a id="tocsv1postgrestconfigresponse_output"></a>

```json
{
  "db_schema": "string",
  "max_rows": -9007199254740000,
  "db_extra_search_path": "string",
  "db_pool": -9007199254740000,
  "db_pool_acquisition_timeout": -9007199254740000,
  "db_pool_max_lifetime": 0,
  "db_pool_max_idletime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|db_schema|string|true|none|none|
|max_rows|integer|true|none|none|
|db_extra_search_path|string|true|none|none|
|db_pool|integer \| null|true|none|If `null`, the value is automatically configured based on compute size.|
|db_pool_acquisition_timeout|integer \| null|true|none|If `null`, the value is automatically configured to 10.|
|db_pool_max_lifetime|integer \| null|true|none|If `null`, the value is automatically configured to 1800.|
|db_pool_max_idletime|integer \| null|true|none|If `null`, the value is automatically configured to 30.|

<h2 id="tocS_V1ProjectRefResponse_Output">V1ProjectRefResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemav1projectrefresponse_output"></a>
<a id="schema_V1ProjectRefResponse_Output"></a>
<a id="tocSv1projectrefresponse_output"></a>
<a id="tocsv1projectrefresponse_output"></a>

```json
{
  "id": -9007199254740000,
  "ref": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|ref|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_V1UpdateProjectBody">V1UpdateProjectBody</h2>
<!-- backwards compatibility -->
<a id="schemav1updateprojectbody"></a>
<a id="schema_V1UpdateProjectBody"></a>
<a id="tocSv1updateprojectbody"></a>
<a id="tocsv1updateprojectbody"></a>

```json
{
  "name": "Acme Platform"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|

<h2 id="tocS_SecretResponse_Output">SecretResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemasecretresponse_output"></a>
<a id="schema_SecretResponse_Output"></a>
<a id="tocSsecretresponse_output"></a>
<a id="tocssecretresponse_output"></a>

```json
{
  "name": "string",
  "value": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|value|string|true|none|none|
|updated_at|string|false|none|none|

<h2 id="tocS_CreateSecretBody">CreateSecretBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatesecretbody"></a>
<a id="schema_CreateSecretBody"></a>
<a id="tocScreatesecretbody"></a>
<a id="tocscreatesecretbody"></a>

```json
[
  {
    "name": "OPENAI_API_KEY",
    "value": "sk-example-secret"
  },
  {
    "name": "STRIPE_WEBHOOK_SECRET",
    "value": "whsec_example"
  }
]
```

<h2 id="tocS_DeleteSecretsBody">DeleteSecretsBody</h2>
<!-- backwards compatibility -->
<a id="schemadeletesecretsbody"></a>
<a id="schema_DeleteSecretsBody"></a>
<a id="tocSdeletesecretsbody"></a>
<a id="tocsdeletesecretsbody"></a>

```json
[
  "OPENAI_API_KEY"
]
```

<h2 id="tocS_SslEnforcementResponse_Output">SslEnforcementResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemasslenforcementresponse_output"></a>
<a id="schema_SslEnforcementResponse_Output"></a>
<a id="tocSsslenforcementresponse_output"></a>
<a id="tocssslenforcementresponse_output"></a>

```json
{
  "currentConfig": {
    "database": true
  },
  "appliedSuccessfully": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentConfig|object|true|none|none|
|appliedSuccessfully|boolean|true|none|none|

<h2 id="tocS_SslEnforcementRequest">SslEnforcementRequest</h2>
<!-- backwards compatibility -->
<a id="schemasslenforcementrequest"></a>
<a id="schema_SslEnforcementRequest"></a>
<a id="tocSsslenforcementrequest"></a>
<a id="tocssslenforcementrequest"></a>

```json
{
  "requestedConfig": {
    "database": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestedConfig|object|true|none|none|

<h2 id="tocS_TypescriptResponse_Output">TypescriptResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schematypescriptresponse_output"></a>
<a id="schema_TypescriptResponse_Output"></a>
<a id="tocStypescriptresponse_output"></a>
<a id="tocstypescriptresponse_output"></a>

```json
{
  "types": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|types|string|true|none|none|

<h2 id="tocS_VanitySubdomainConfigResponse_Output">VanitySubdomainConfigResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemavanitysubdomainconfigresponse_output"></a>
<a id="schema_VanitySubdomainConfigResponse_Output"></a>
<a id="tocSvanitysubdomainconfigresponse_output"></a>
<a id="tocsvanitysubdomainconfigresponse_output"></a>

```json
{
  "status": "not-used",
  "custom_domain": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|custom_domain|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|not-used|
|status|custom-domain-used|
|status|active|

<h2 id="tocS_PlanGateErrorBody">PlanGateErrorBody</h2>
<!-- backwards compatibility -->
<a id="schemaplangateerrorbody"></a>
<a id="schema_PlanGateErrorBody"></a>
<a id="tocSplangateerrorbody"></a>
<a id="tocsplangateerrorbody"></a>

```json
{
  "message": "string",
  "error": {
    "code": "entitlement_required",
    "feature": "string",
    "upgrade_url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Human-readable explanation of the plan gate|
|error|object|false|none|Present on entitlement denials. Other errors with this status code (validation, billing state) carry only message.|

<h2 id="tocS_VanitySubdomainBody">VanitySubdomainBody</h2>
<!-- backwards compatibility -->
<a id="schemavanitysubdomainbody"></a>
<a id="schema_VanitySubdomainBody"></a>
<a id="tocSvanitysubdomainbody"></a>
<a id="tocsvanitysubdomainbody"></a>

```json
{
  "vanity_subdomain": "acme-prod"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vanity_subdomain|string|true|none|none|

<h2 id="tocS_SubdomainAvailabilityResponse_Output">SubdomainAvailabilityResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemasubdomainavailabilityresponse_output"></a>
<a id="schema_SubdomainAvailabilityResponse_Output"></a>
<a id="tocSsubdomainavailabilityresponse_output"></a>
<a id="tocssubdomainavailabilityresponse_output"></a>

```json
{
  "available": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|boolean|true|none|none|

<h2 id="tocS_ActivateVanitySubdomainResponse_Output">ActivateVanitySubdomainResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemaactivatevanitysubdomainresponse_output"></a>
<a id="schema_ActivateVanitySubdomainResponse_Output"></a>
<a id="tocSactivatevanitysubdomainresponse_output"></a>
<a id="tocsactivatevanitysubdomainresponse_output"></a>

```json
{
  "custom_domain": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_domain|string|true|none|none|

<h2 id="tocS_UpgradeDatabaseBody">UpgradeDatabaseBody</h2>
<!-- backwards compatibility -->
<a id="schemaupgradedatabasebody"></a>
<a id="schema_UpgradeDatabaseBody"></a>
<a id="tocSupgradedatabasebody"></a>
<a id="tocsupgradedatabasebody"></a>

```json
{
  "target_version": "17",
  "release_channel": "ga"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target_version|string|true|none|none|
|release_channel|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|release_channel|internal|
|release_channel|alpha|
|release_channel|beta|
|release_channel|ga|
|release_channel|withdrawn|
|release_channel|preview|

<h2 id="tocS_ProjectUpgradeInitiateResponse_Output">ProjectUpgradeInitiateResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemaprojectupgradeinitiateresponse_output"></a>
<a id="schema_ProjectUpgradeInitiateResponse_Output"></a>
<a id="tocSprojectupgradeinitiateresponse_output"></a>
<a id="tocsprojectupgradeinitiateresponse_output"></a>

```json
{
  "tracking_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tracking_id|string|true|none|none|

<h2 id="tocS_ProjectUpgradeEligibilityResponse_Output">ProjectUpgradeEligibilityResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemaprojectupgradeeligibilityresponse_output"></a>
<a id="schema_ProjectUpgradeEligibilityResponse_Output"></a>
<a id="tocSprojectupgradeeligibilityresponse_output"></a>
<a id="tocsprojectupgradeeligibilityresponse_output"></a>

```json
{
  "eligible": true,
  "current_app_version": "string",
  "current_app_version_release_channel": "internal",
  "latest_app_version": "string",
  "target_upgrade_versions": [
    {
      "postgres_version": "13",
      "release_channel": "internal",
      "app_version": "string"
    }
  ],
  "duration_estimate_hours": 0,
  "legacy_auth_custom_roles": [
    "string"
  ],
  "objects_to_be_dropped": [
    "string"
  ],
  "unsupported_extensions": [
    "string"
  ],
  "user_defined_objects_in_internal_schemas": [
    "string"
  ],
  "validation_errors": [
    {
      "type": "objects_depending_on_pg_cron",
      "dependents": [
        "string"
      ]
    }
  ],
  "warnings": [
    {
      "type": "pg_graphql_introspection_change"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eligible|boolean|true|none|none|
|current_app_version|string|true|none|none|
|current_app_version_release_channel|string|true|none|none|
|latest_app_version|string|true|none|none|
|target_upgrade_versions|[object]|true|none|none|
|duration_estimate_hours|number|true|none|none|
|legacy_auth_custom_roles|[string]|true|none|none|
|objects_to_be_dropped|[string]|true|none|**Deprecated.** Use validation_errors instead.|
|unsupported_extensions|[string]|true|none|**Deprecated.** Use validation_errors instead.|
|user_defined_objects_in_internal_schemas|[string]|true|none|**Deprecated.** Use validation_errors instead.|
|validation_errors|[object]|true|none|none|
|warnings|[object]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|current_app_version_release_channel|internal|
|current_app_version_release_channel|alpha|
|current_app_version_release_channel|beta|
|current_app_version_release_channel|ga|
|current_app_version_release_channel|withdrawn|
|current_app_version_release_channel|preview|

<h2 id="tocS_DatabaseUpgradeStatusResponse_Output">DatabaseUpgradeStatusResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseupgradestatusresponse_output"></a>
<a id="schema_DatabaseUpgradeStatusResponse_Output"></a>
<a id="tocSdatabaseupgradestatusresponse_output"></a>
<a id="tocsdatabaseupgradestatusresponse_output"></a>

```json
{
  "databaseUpgradeStatus": {
    "initiated_at": "string",
    "latest_status_at": "string",
    "target_version": "string",
    "error": "1_upgraded_instance_launch_failed",
    "progress": "0_requested",
    "status": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|databaseUpgradeStatus|object \| null|true|none|none|

<h2 id="tocS_ReadOnlyStatusResponse_Output">ReadOnlyStatusResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemareadonlystatusresponse_output"></a>
<a id="schema_ReadOnlyStatusResponse_Output"></a>
<a id="tocSreadonlystatusresponse_output"></a>
<a id="tocsreadonlystatusresponse_output"></a>

```json
{
  "enabled": true,
  "override_enabled": true,
  "override_active_until": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|none|
|override_enabled|boolean|true|none|none|
|override_active_until|string|true|none|none|

<h2 id="tocS_SetUpReadReplicaBody">SetUpReadReplicaBody</h2>
<!-- backwards compatibility -->
<a id="schemasetupreadreplicabody"></a>
<a id="schema_SetUpReadReplicaBody"></a>
<a id="tocSsetupreadreplicabody"></a>
<a id="tocssetupreadreplicabody"></a>

```json
{
  "read_replica_region": "us-west-1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|read_replica_region|string|true|none|Region you want your read replica to reside in|

#### Enumerated Values

|Property|Value|
|---|---|
|read_replica_region|us-east-1|
|read_replica_region|us-east-2|
|read_replica_region|us-west-1|
|read_replica_region|us-west-2|
|read_replica_region|ap-east-1|
|read_replica_region|ap-southeast-1|
|read_replica_region|ap-northeast-1|
|read_replica_region|ap-northeast-2|
|read_replica_region|ap-southeast-2|
|read_replica_region|eu-west-1|
|read_replica_region|eu-west-2|
|read_replica_region|eu-west-3|
|read_replica_region|eu-north-1|
|read_replica_region|eu-central-1|
|read_replica_region|eu-central-2|
|read_replica_region|ca-central-1|
|read_replica_region|ap-south-1|
|read_replica_region|sa-east-1|

<h2 id="tocS_RemoveReadReplicaBody">RemoveReadReplicaBody</h2>
<!-- backwards compatibility -->
<a id="schemaremovereadreplicabody"></a>
<a id="schema_RemoveReadReplicaBody"></a>
<a id="tocSremovereadreplicabody"></a>
<a id="tocsremovereadreplicabody"></a>

```json
{
  "database_identifier": "abcdefghijklmnopqrst-rr-us-west-1-abcde"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database_identifier|string|true|none|none|

<h2 id="tocS_V1ServiceHealthResponse_Output">V1ServiceHealthResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemav1servicehealthresponse_output"></a>
<a id="schema_V1ServiceHealthResponse_Output"></a>
<a id="tocSv1servicehealthresponse_output"></a>
<a id="tocsv1servicehealthresponse_output"></a>

```json
{
  "name": "auth",
  "healthy": true,
  "status": "COMING_UP",
  "info": {
    "name": "GoTrue",
    "version": "string",
    "description": "string"
  },
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|healthy|boolean|true|none|**Deprecated.** Deprecated. Use `status` instead.|
|status|string|true|none|none|
|info|object|false|none|none|
|error|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|auth|
|name|db|
|name|db_postgres_user|
|name|pooler|
|name|realtime|
|name|rest|
|name|storage|
|name|pg_bouncer|
|status|COMING_UP|
|status|ACTIVE_HEALTHY|
|status|UNHEALTHY|

<h2 id="tocS_SigningKeyResponse_Output">SigningKeyResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemasigningkeyresponse_output"></a>
<a id="schema_SigningKeyResponse_Output"></a>
<a id="tocSsigningkeyresponse_output"></a>
<a id="tocssigningkeyresponse_output"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "algorithm": "EdDSA",
  "status": "in_use",
  "public_jwk": null,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|algorithm|string|true|none|none|
|status|string|true|none|none|
|public_jwk|object \| null|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|algorithm|EdDSA|
|algorithm|ES256|
|algorithm|RS256|
|algorithm|HS256|
|status|in_use|
|status|previously_used|
|status|revoked|
|status|standby|

<h2 id="tocS_CreateSigningKeyBody">CreateSigningKeyBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatesigningkeybody"></a>
<a id="schema_CreateSigningKeyBody"></a>
<a id="tocScreatesigningkeybody"></a>
<a id="tocscreatesigningkeybody"></a>

```json
{
  "algorithm": "RS256",
  "status": "standby"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|true|none|none|
|status|string|false|none|none|
|private_jwk|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|algorithm|EdDSA|
|algorithm|ES256|
|algorithm|RS256|
|algorithm|HS256|
|status|in_use|
|status|standby|

<h2 id="tocS_SigningKeysResponse_Output">SigningKeysResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemasigningkeysresponse_output"></a>
<a id="schema_SigningKeysResponse_Output"></a>
<a id="tocSsigningkeysresponse_output"></a>
<a id="tocssigningkeysresponse_output"></a>

```json
{
  "keys": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "algorithm": "EdDSA",
      "status": "in_use",
      "public_jwk": null,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[object]|true|none|none|

<h2 id="tocS_UpdateSigningKeyBody">UpdateSigningKeyBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesigningkeybody"></a>
<a id="schema_UpdateSigningKeyBody"></a>
<a id="tocSupdatesigningkeybody"></a>
<a id="tocsupdatesigningkeybody"></a>

```json
{
  "status": "standby"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|in_use|
|status|previously_used|
|status|revoked|
|status|standby|

<h2 id="tocS_AuthConfigResponse_Output">AuthConfigResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemaauthconfigresponse_output"></a>
<a id="schema_AuthConfigResponse_Output"></a>
<a id="tocSauthconfigresponse_output"></a>
<a id="tocsauthconfigresponse_output"></a>

```json
{
  "api_max_request_duration": -9007199254740000,
  "db_max_pool_size": -9007199254740000,
  "db_max_pool_size_unit": "connections",
  "disable_signup": true,
  "external_anonymous_users_enabled": true,
  "external_apple_additional_client_ids": "string",
  "external_apple_client_id": "string",
  "external_apple_email_optional": true,
  "external_apple_enabled": true,
  "external_apple_secret": "string",
  "external_azure_client_id": "string",
  "external_azure_email_optional": true,
  "external_azure_enabled": true,
  "external_azure_secret": "string",
  "external_azure_url": "string",
  "external_bitbucket_client_id": "string",
  "external_bitbucket_email_optional": true,
  "external_bitbucket_enabled": true,
  "external_bitbucket_secret": "string",
  "external_discord_client_id": "string",
  "external_discord_email_optional": true,
  "external_discord_enabled": true,
  "external_discord_secret": "string",
  "external_email_enabled": true,
  "external_facebook_client_id": "string",
  "external_facebook_email_optional": true,
  "external_facebook_enabled": true,
  "external_facebook_secret": "string",
  "external_figma_client_id": "string",
  "external_figma_email_optional": true,
  "external_figma_enabled": true,
  "external_figma_secret": "string",
  "external_github_client_id": "string",
  "external_github_email_optional": true,
  "external_github_enabled": true,
  "external_github_secret": "string",
  "external_gitlab_client_id": "string",
  "external_gitlab_email_optional": true,
  "external_gitlab_enabled": true,
  "external_gitlab_secret": "string",
  "external_gitlab_url": "string",
  "external_google_additional_client_ids": "string",
  "external_google_client_id": "string",
  "external_google_email_optional": true,
  "external_google_enabled": true,
  "external_google_secret": "string",
  "external_google_skip_nonce_check": true,
  "external_kakao_client_id": "string",
  "external_kakao_email_optional": true,
  "external_kakao_enabled": true,
  "external_kakao_secret": "string",
  "external_keycloak_client_id": "string",
  "external_keycloak_email_optional": true,
  "external_keycloak_enabled": true,
  "external_keycloak_secret": "string",
  "external_keycloak_url": "string",
  "external_linkedin_oidc_client_id": "string",
  "external_linkedin_oidc_email_optional": true,
  "external_linkedin_oidc_enabled": true,
  "external_linkedin_oidc_secret": "string",
  "external_slack_oidc_client_id": "string",
  "external_slack_oidc_email_optional": true,
  "external_slack_oidc_enabled": true,
  "external_slack_oidc_secret": "string",
  "external_notion_client_id": "string",
  "external_notion_email_optional": true,
  "external_notion_enabled": true,
  "external_notion_secret": "string",
  "external_phone_enabled": true,
  "external_slack_client_id": "string",
  "external_slack_email_optional": true,
  "external_slack_enabled": true,
  "external_slack_secret": "string",
  "external_spotify_client_id": "string",
  "external_spotify_email_optional": true,
  "external_spotify_enabled": true,
  "external_spotify_secret": "string",
  "external_twitch_client_id": "string",
  "external_twitch_email_optional": true,
  "external_twitch_enabled": true,
  "external_twitch_secret": "string",
  "external_twitter_client_id": "string",
  "external_twitter_email_optional": true,
  "external_twitter_enabled": true,
  "external_twitter_secret": "string",
  "external_x_client_id": "string",
  "external_x_email_optional": true,
  "external_x_enabled": true,
  "external_x_secret": "string",
  "external_workos_client_id": "string",
  "external_workos_enabled": true,
  "external_workos_secret": "string",
  "external_workos_url": "string",
  "external_web3_solana_enabled": true,
  "external_web3_ethereum_enabled": true,
  "external_zoom_client_id": "string",
  "external_zoom_email_optional": true,
  "external_zoom_enabled": true,
  "external_zoom_secret": "string",
  "hook_custom_access_token_enabled": true,
  "hook_custom_access_token_uri": "string",
  "hook_custom_access_token_secrets": "string",
  "hook_mfa_verification_attempt_enabled": true,
  "hook_mfa_verification_attempt_uri": "string",
  "hook_mfa_verification_attempt_secrets": "string",
  "hook_password_verification_attempt_enabled": true,
  "hook_password_verification_attempt_uri": "string",
  "hook_password_verification_attempt_secrets": "string",
  "hook_send_sms_enabled": true,
  "hook_send_sms_uri": "string",
  "hook_send_sms_secrets": "string",
  "hook_send_email_enabled": true,
  "hook_send_email_uri": "string",
  "hook_send_email_secrets": "string",
  "hook_before_user_created_enabled": true,
  "hook_before_user_created_uri": "string",
  "hook_before_user_created_secrets": "string",
  "hook_after_user_created_enabled": true,
  "hook_after_user_created_uri": "string",
  "hook_after_user_created_secrets": "string",
  "jwt_exp": -9007199254740000,
  "mailer_allow_unverified_email_sign_ins": true,
  "mailer_autoconfirm": true,
  "mailer_otp_exp": -9007199254740000,
  "mailer_otp_length": -9007199254740000,
  "mailer_secure_email_change_enabled": true,
  "mailer_subjects_confirmation": "string",
  "mailer_subjects_email_change": "string",
  "mailer_subjects_invite": "string",
  "mailer_subjects_magic_link": "string",
  "mailer_subjects_reauthentication": "string",
  "mailer_subjects_recovery": "string",
  "mailer_subjects_password_changed_notification": "string",
  "mailer_subjects_email_changed_notification": "string",
  "mailer_subjects_phone_changed_notification": "string",
  "mailer_subjects_mfa_factor_enrolled_notification": "string",
  "mailer_subjects_mfa_factor_unenrolled_notification": "string",
  "mailer_subjects_identity_linked_notification": "string",
  "mailer_subjects_identity_unlinked_notification": "string",
  "mailer_templates_confirmation_content": "string",
  "mailer_templates_email_change_content": "string",
  "mailer_templates_invite_content": "string",
  "mailer_templates_magic_link_content": "string",
  "mailer_templates_reauthentication_content": "string",
  "mailer_templates_recovery_content": "string",
  "mailer_templates_password_changed_notification_content": "string",
  "mailer_templates_email_changed_notification_content": "string",
  "mailer_templates_phone_changed_notification_content": "string",
  "mailer_templates_mfa_factor_enrolled_notification_content": "string",
  "mailer_templates_mfa_factor_unenrolled_notification_content": "string",
  "mailer_templates_identity_linked_notification_content": "string",
  "mailer_templates_identity_unlinked_notification_content": "string",
  "mailer_notifications_password_changed_enabled": true,
  "mailer_notifications_email_changed_enabled": true,
  "mailer_notifications_phone_changed_enabled": true,
  "mailer_notifications_mfa_factor_enrolled_enabled": true,
  "mailer_notifications_mfa_factor_unenrolled_enabled": true,
  "mailer_notifications_identity_linked_enabled": true,
  "mailer_notifications_identity_unlinked_enabled": true,
  "mfa_max_enrolled_factors": -9007199254740000,
  "mfa_totp_enroll_enabled": true,
  "mfa_totp_verify_enabled": true,
  "mfa_phone_enroll_enabled": true,
  "mfa_phone_verify_enabled": true,
  "mfa_web_authn_enroll_enabled": true,
  "mfa_web_authn_verify_enabled": true,
  "passkey_enabled": true,
  "webauthn_rp_display_name": "string",
  "webauthn_rp_id": "string",
  "webauthn_rp_origins": "string",
  "mfa_phone_otp_length": -9007199254740000,
  "mfa_phone_template": "string",
  "mfa_phone_max_frequency": -9007199254740000,
  "nimbus_oauth_client_id": "string",
  "nimbus_oauth_email_optional": true,
  "nimbus_oauth_client_secret": "string",
  "password_hibp_enabled": true,
  "password_min_length": -9007199254740000,
  "password_required_characters": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789",
  "rate_limit_anonymous_users": -9007199254740000,
  "rate_limit_email_sent": -9007199254740000,
  "rate_limit_sms_sent": -9007199254740000,
  "rate_limit_token_refresh": -9007199254740000,
  "rate_limit_verify": -9007199254740000,
  "rate_limit_otp": -9007199254740000,
  "rate_limit_web3": -9007199254740000,
  "refresh_token_rotation_enabled": true,
  "saml_enabled": true,
  "saml_external_url": "string",
  "saml_allow_encrypted_assertions": true,
  "security_sb_forwarded_for_enabled": true,
  "security_captcha_enabled": true,
  "security_captcha_provider": "turnstile",
  "security_captcha_secret": "string",
  "security_manual_linking_enabled": true,
  "security_refresh_token_reuse_interval": -9007199254740000,
  "security_update_password_require_current_password": true,
  "security_update_password_require_reauthentication": true,
  "sessions_inactivity_timeout": 0,
  "sessions_single_per_user": true,
  "sessions_tags": "string",
  "sessions_timebox": 0,
  "site_url": "string",
  "sms_autoconfirm": true,
  "sms_max_frequency": -9007199254740000,
  "sms_messagebird_access_key": "string",
  "sms_messagebird_originator": "string",
  "sms_otp_exp": -9007199254740000,
  "sms_otp_length": -9007199254740000,
  "sms_provider": "messagebird",
  "sms_template": "string",
  "sms_test_otp": "string",
  "sms_test_otp_valid_until": "1970-01-01T00:00:00Z",
  "sms_textlocal_api_key": "string",
  "sms_textlocal_sender": "string",
  "sms_twilio_account_sid": "string",
  "sms_twilio_auth_token": "string",
  "sms_twilio_content_sid": "string",
  "sms_twilio_message_service_sid": "string",
  "sms_twilio_verify_account_sid": "string",
  "sms_twilio_verify_auth_token": "string",
  "sms_twilio_verify_message_service_sid": "string",
  "sms_vonage_api_key": "string",
  "sms_vonage_api_secret": "string",
  "sms_vonage_from": "string",
  "smtp_admin_email": "user@example.com",
  "smtp_host": "string",
  "smtp_max_frequency": -9007199254740000,
  "smtp_pass": "string",
  "smtp_port": "string",
  "smtp_sender_name": "string",
  "smtp_user": "string",
  "uri_allow_list": "string",
  "oauth_server_enabled": true,
  "oauth_server_allow_dynamic_registration": true,
  "oauth_server_authorization_path": "string",
  "custom_oauth_enabled": true,
  "custom_oauth_max_providers": -9007199254740000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_max_request_duration|integer \| null|true|none|none|
|db_max_pool_size|integer \| null|true|none|none|
|db_max_pool_size_unit|string \| null|true|none|none|
|disable_signup|boolean \| null|true|none|none|
|external_anonymous_users_enabled|boolean \| null|true|none|none|
|external_apple_additional_client_ids|string \| null|true|none|none|
|external_apple_client_id|string \| null|true|none|none|
|external_apple_email_optional|boolean \| null|true|none|none|
|external_apple_enabled|boolean \| null|true|none|none|
|external_apple_secret|string \| null|true|none|none|
|external_azure_client_id|string \| null|true|none|none|
|external_azure_email_optional|boolean \| null|true|none|none|
|external_azure_enabled|boolean \| null|true|none|none|
|external_azure_secret|string \| null|true|none|none|
|external_azure_url|string \| null|true|none|none|
|external_bitbucket_client_id|string \| null|true|none|none|
|external_bitbucket_email_optional|boolean \| null|true|none|none|
|external_bitbucket_enabled|boolean \| null|true|none|none|
|external_bitbucket_secret|string \| null|true|none|none|
|external_discord_client_id|string \| null|true|none|none|
|external_discord_email_optional|boolean \| null|true|none|none|
|external_discord_enabled|boolean \| null|true|none|none|
|external_discord_secret|string \| null|true|none|none|
|external_email_enabled|boolean \| null|true|none|none|
|external_facebook_client_id|string \| null|true|none|none|
|external_facebook_email_optional|boolean \| null|true|none|none|
|external_facebook_enabled|boolean \| null|true|none|none|
|external_facebook_secret|string \| null|true|none|none|
|external_figma_client_id|string \| null|true|none|none|
|external_figma_email_optional|boolean \| null|true|none|none|
|external_figma_enabled|boolean \| null|true|none|none|
|external_figma_secret|string \| null|true|none|none|
|external_github_client_id|string \| null|true|none|none|
|external_github_email_optional|boolean \| null|true|none|none|
|external_github_enabled|boolean \| null|true|none|none|
|external_github_secret|string \| null|true|none|none|
|external_gitlab_client_id|string \| null|true|none|none|
|external_gitlab_email_optional|boolean \| null|true|none|none|
|external_gitlab_enabled|boolean \| null|true|none|none|
|external_gitlab_secret|string \| null|true|none|none|
|external_gitlab_url|string \| null|true|none|none|
|external_google_additional_client_ids|string \| null|true|none|none|
|external_google_client_id|string \| null|true|none|none|
|external_google_email_optional|boolean \| null|true|none|none|
|external_google_enabled|boolean \| null|true|none|none|
|external_google_secret|string \| null|true|none|none|
|external_google_skip_nonce_check|boolean \| null|true|none|none|
|external_kakao_client_id|string \| null|true|none|none|
|external_kakao_email_optional|boolean \| null|true|none|none|
|external_kakao_enabled|boolean \| null|true|none|none|
|external_kakao_secret|string \| null|true|none|none|
|external_keycloak_client_id|string \| null|true|none|none|
|external_keycloak_email_optional|boolean \| null|true|none|none|
|external_keycloak_enabled|boolean \| null|true|none|none|
|external_keycloak_secret|string \| null|true|none|none|
|external_keycloak_url|string \| null|true|none|none|
|external_linkedin_oidc_client_id|string \| null|true|none|none|
|external_linkedin_oidc_email_optional|boolean \| null|true|none|none|
|external_linkedin_oidc_enabled|boolean \| null|true|none|none|
|external_linkedin_oidc_secret|string \| null|true|none|none|
|external_slack_oidc_client_id|string \| null|true|none|none|
|external_slack_oidc_email_optional|boolean \| null|true|none|none|
|external_slack_oidc_enabled|boolean \| null|true|none|none|
|external_slack_oidc_secret|string \| null|true|none|none|
|external_notion_client_id|string \| null|true|none|none|
|external_notion_email_optional|boolean \| null|true|none|none|
|external_notion_enabled|boolean \| null|true|none|none|
|external_notion_secret|string \| null|true|none|none|
|external_phone_enabled|boolean \| null|true|none|none|
|external_slack_client_id|string \| null|true|none|none|
|external_slack_email_optional|boolean \| null|true|none|none|
|external_slack_enabled|boolean \| null|true|none|none|
|external_slack_secret|string \| null|true|none|none|
|external_spotify_client_id|string \| null|true|none|none|
|external_spotify_email_optional|boolean \| null|true|none|none|
|external_spotify_enabled|boolean \| null|true|none|none|
|external_spotify_secret|string \| null|true|none|none|
|external_twitch_client_id|string \| null|true|none|none|
|external_twitch_email_optional|boolean \| null|true|none|none|
|external_twitch_enabled|boolean \| null|true|none|none|
|external_twitch_secret|string \| null|true|none|none|
|external_twitter_client_id|string \| null|true|none|none|
|external_twitter_email_optional|boolean \| null|true|none|none|
|external_twitter_enabled|boolean \| null|true|none|none|
|external_twitter_secret|string \| null|true|none|none|
|external_x_client_id|string \| null|true|none|none|
|external_x_email_optional|boolean \| null|true|none|none|
|external_x_enabled|boolean \| null|true|none|none|
|external_x_secret|string \| null|true|none|none|
|external_workos_client_id|string \| null|true|none|none|
|external_workos_enabled|boolean \| null|true|none|none|
|external_workos_secret|string \| null|true|none|none|
|external_workos_url|string \| null|true|none|none|
|external_web3_solana_enabled|boolean \| null|true|none|none|
|external_web3_ethereum_enabled|boolean \| null|true|none|none|
|external_zoom_client_id|string \| null|true|none|none|
|external_zoom_email_optional|boolean \| null|true|none|none|
|external_zoom_enabled|boolean \| null|true|none|none|
|external_zoom_secret|string \| null|true|none|none|
|hook_custom_access_token_enabled|boolean \| null|true|none|none|
|hook_custom_access_token_uri|string \| null|true|none|none|
|hook_custom_access_token_secrets|string \| null|true|none|none|
|hook_mfa_verification_attempt_enabled|boolean \| null|true|none|none|
|hook_mfa_verification_attempt_uri|string \| null|true|none|none|
|hook_mfa_verification_attempt_secrets|string \| null|true|none|none|
|hook_password_verification_attempt_enabled|boolean \| null|true|none|none|
|hook_password_verification_attempt_uri|string \| null|true|none|none|
|hook_password_verification_attempt_secrets|string \| null|true|none|none|
|hook_send_sms_enabled|boolean \| null|true|none|none|
|hook_send_sms_uri|string \| null|true|none|none|
|hook_send_sms_secrets|string \| null|true|none|none|
|hook_send_email_enabled|boolean \| null|true|none|none|
|hook_send_email_uri|string \| null|true|none|none|
|hook_send_email_secrets|string \| null|true|none|none|
|hook_before_user_created_enabled|boolean \| null|true|none|none|
|hook_before_user_created_uri|string \| null|true|none|none|
|hook_before_user_created_secrets|string \| null|true|none|none|
|hook_after_user_created_enabled|boolean \| null|true|none|none|
|hook_after_user_created_uri|string \| null|true|none|none|
|hook_after_user_created_secrets|string \| null|true|none|none|
|jwt_exp|integer \| null|true|none|none|
|mailer_allow_unverified_email_sign_ins|boolean \| null|true|none|none|
|mailer_autoconfirm|boolean \| null|true|none|none|
|mailer_otp_exp|integer|true|none|none|
|mailer_otp_length|integer \| null|true|none|none|
|mailer_secure_email_change_enabled|boolean \| null|true|none|none|
|mailer_subjects_confirmation|string \| null|true|none|none|
|mailer_subjects_email_change|string \| null|true|none|none|
|mailer_subjects_invite|string \| null|true|none|none|
|mailer_subjects_magic_link|string \| null|true|none|none|
|mailer_subjects_reauthentication|string \| null|true|none|none|
|mailer_subjects_recovery|string \| null|true|none|none|
|mailer_subjects_password_changed_notification|string \| null|true|none|none|
|mailer_subjects_email_changed_notification|string \| null|true|none|none|
|mailer_subjects_phone_changed_notification|string \| null|true|none|none|
|mailer_subjects_mfa_factor_enrolled_notification|string \| null|true|none|none|
|mailer_subjects_mfa_factor_unenrolled_notification|string \| null|true|none|none|
|mailer_subjects_identity_linked_notification|string \| null|true|none|none|
|mailer_subjects_identity_unlinked_notification|string \| null|true|none|none|
|mailer_templates_confirmation_content|string \| null|true|none|none|
|mailer_templates_email_change_content|string \| null|true|none|none|
|mailer_templates_invite_content|string \| null|true|none|none|
|mailer_templates_magic_link_content|string \| null|true|none|none|
|mailer_templates_reauthentication_content|string \| null|true|none|none|
|mailer_templates_recovery_content|string \| null|true|none|none|
|mailer_templates_password_changed_notification_content|string \| null|true|none|none|
|mailer_templates_email_changed_notification_content|string \| null|true|none|none|
|mailer_templates_phone_changed_notification_content|string \| null|true|none|none|
|mailer_templates_mfa_factor_enrolled_notification_content|string \| null|true|none|none|
|mailer_templates_mfa_factor_unenrolled_notification_content|string \| null|true|none|none|
|mailer_templates_identity_linked_notification_content|string \| null|true|none|none|
|mailer_templates_identity_unlinked_notification_content|string \| null|true|none|none|
|mailer_notifications_password_changed_enabled|boolean \| null|true|none|none|
|mailer_notifications_email_changed_enabled|boolean \| null|true|none|none|
|mailer_notifications_phone_changed_enabled|boolean \| null|true|none|none|
|mailer_notifications_mfa_factor_enrolled_enabled|boolean \| null|true|none|none|
|mailer_notifications_mfa_factor_unenrolled_enabled|boolean \| null|true|none|none|
|mailer_notifications_identity_linked_enabled|boolean \| null|true|none|none|
|mailer_notifications_identity_unlinked_enabled|boolean \| null|true|none|none|
|mfa_max_enrolled_factors|integer \| null|true|none|none|
|mfa_totp_enroll_enabled|boolean \| null|true|none|none|
|mfa_totp_verify_enabled|boolean \| null|true|none|none|
|mfa_phone_enroll_enabled|boolean \| null|true|none|none|
|mfa_phone_verify_enabled|boolean \| null|true|none|none|
|mfa_web_authn_enroll_enabled|boolean \| null|true|none|none|
|mfa_web_authn_verify_enabled|boolean \| null|true|none|none|
|passkey_enabled|boolean|true|none|none|
|webauthn_rp_display_name|string \| null|true|none|none|
|webauthn_rp_id|string \| null|true|none|none|
|webauthn_rp_origins|string \| null|true|none|none|
|mfa_phone_otp_length|integer|true|none|none|
|mfa_phone_template|string \| null|true|none|none|
|mfa_phone_max_frequency|integer \| null|true|none|none|
|nimbus_oauth_client_id|string \| null|true|none|none|
|nimbus_oauth_email_optional|boolean \| null|true|none|none|
|nimbus_oauth_client_secret|string \| null|true|none|none|
|password_hibp_enabled|boolean \| null|true|none|none|
|password_min_length|integer \| null|true|none|none|
|password_required_characters|string \| null|true|none|none|
|rate_limit_anonymous_users|integer \| null|true|none|none|
|rate_limit_email_sent|integer \| null|true|none|none|
|rate_limit_sms_sent|integer \| null|true|none|none|
|rate_limit_token_refresh|integer \| null|true|none|none|
|rate_limit_verify|integer \| null|true|none|none|
|rate_limit_otp|integer \| null|true|none|none|
|rate_limit_web3|integer \| null|true|none|none|
|refresh_token_rotation_enabled|boolean \| null|true|none|none|
|saml_enabled|boolean \| null|true|none|none|
|saml_external_url|string \| null|true|none|none|
|saml_allow_encrypted_assertions|boolean \| null|true|none|none|
|security_sb_forwarded_for_enabled|boolean \| null|true|none|none|
|security_captcha_enabled|boolean \| null|true|none|none|
|security_captcha_provider|string \| null|true|none|none|
|security_captcha_secret|string \| null|true|none|none|
|security_manual_linking_enabled|boolean \| null|true|none|none|
|security_refresh_token_reuse_interval|integer \| null|true|none|none|
|security_update_password_require_current_password|boolean \| null|true|none|none|
|security_update_password_require_reauthentication|boolean \| null|true|none|none|
|sessions_inactivity_timeout|number \| null|true|none|none|
|sessions_single_per_user|boolean \| null|true|none|none|
|sessions_tags|string \| null|true|none|none|
|sessions_timebox|number \| null|true|none|none|
|site_url|string \| null|true|none|none|
|sms_autoconfirm|boolean \| null|true|none|none|
|sms_max_frequency|integer \| null|true|none|none|
|sms_messagebird_access_key|string \| null|true|none|none|
|sms_messagebird_originator|string \| null|true|none|none|
|sms_otp_exp|integer \| null|true|none|none|
|sms_otp_length|integer|true|none|none|
|sms_provider|string \| null|true|none|none|
|sms_template|string \| null|true|none|none|
|sms_test_otp|string \| null|true|none|none|
|sms_test_otp_valid_until|string(date-time) \| null|true|none|none|
|sms_textlocal_api_key|string \| null|true|none|none|
|sms_textlocal_sender|string \| null|true|none|none|
|sms_twilio_account_sid|string \| null|true|none|none|
|sms_twilio_auth_token|string \| null|true|none|none|
|sms_twilio_content_sid|string \| null|true|none|none|
|sms_twilio_message_service_sid|string \| null|true|none|none|
|sms_twilio_verify_account_sid|string \| null|true|none|none|
|sms_twilio_verify_auth_token|string \| null|true|none|none|
|sms_twilio_verify_message_service_sid|string \| null|true|none|none|
|sms_vonage_api_key|string \| null|true|none|none|
|sms_vonage_api_secret|string \| null|true|none|none|
|sms_vonage_from|string \| null|true|none|none|
|smtp_admin_email|string(email) \| null|true|none|none|
|smtp_host|string \| null|true|none|none|
|smtp_max_frequency|integer \| null|true|none|none|
|smtp_pass|string \| null|true|none|none|
|smtp_port|string \| null|true|none|none|
|smtp_sender_name|string \| null|true|none|none|
|smtp_user|string \| null|true|none|none|
|uri_allow_list|string \| null|true|none|none|
|oauth_server_enabled|boolean|true|none|none|
|oauth_server_allow_dynamic_registration|boolean|true|none|none|
|oauth_server_authorization_path|string \| null|true|none|none|
|custom_oauth_enabled|boolean|true|none|none|
|custom_oauth_max_providers|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|db_max_pool_size_unit|connections|
|db_max_pool_size_unit|percent|
|db_max_pool_size_unit|null|
|password_required_characters|abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789|
|password_required_characters|abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789|
|password_required_characters|abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789:!@#$%^&*()_+-=[]{};'\\:"\|<>?,./`~|
|password_required_characters|""|
|password_required_characters|null|
|security_captcha_provider|turnstile|
|security_captcha_provider|hcaptcha|
|security_captcha_provider|null|
|sms_provider|messagebird|
|sms_provider|textlocal|
|sms_provider|twilio|
|sms_provider|twilio_verify|
|sms_provider|vonage|
|sms_provider|null|

<h2 id="tocS_UpdateAuthConfigBody">UpdateAuthConfigBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateauthconfigbody"></a>
<a id="schema_UpdateAuthConfigBody"></a>
<a id="tocSupdateauthconfigbody"></a>
<a id="tocsupdateauthconfigbody"></a>

```json
{
  "site_url": "https://app.example.com",
  "disable_signup": false,
  "jwt_exp": 3600
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|site_url|string \| null|false|none|none|
|disable_signup|boolean \| null|false|none|none|
|jwt_exp|integer \| null|false|none|none|
|smtp_admin_email|string(email) \| null|false|none|none|
|smtp_host|string \| null|false|none|none|
|smtp_port|string \| null|false|none|none|
|smtp_user|string \| null|false|none|none|
|smtp_pass|string \| null|false|none|none|
|smtp_max_frequency|integer \| null|false|none|none|
|smtp_sender_name|string \| null|false|none|none|
|mailer_allow_unverified_email_sign_ins|boolean \| null|false|none|none|
|mailer_autoconfirm|boolean \| null|false|none|none|
|mailer_subjects_invite|string \| null|false|none|none|
|mailer_subjects_confirmation|string \| null|false|none|none|
|mailer_subjects_recovery|string \| null|false|none|none|
|mailer_subjects_email_change|string \| null|false|none|none|
|mailer_subjects_magic_link|string \| null|false|none|none|
|mailer_subjects_reauthentication|string \| null|false|none|none|
|mailer_subjects_password_changed_notification|string \| null|false|none|none|
|mailer_subjects_email_changed_notification|string \| null|false|none|none|
|mailer_subjects_phone_changed_notification|string \| null|false|none|none|
|mailer_subjects_mfa_factor_enrolled_notification|string \| null|false|none|none|
|mailer_subjects_mfa_factor_unenrolled_notification|string \| null|false|none|none|
|mailer_subjects_identity_linked_notification|string \| null|false|none|none|
|mailer_subjects_identity_unlinked_notification|string \| null|false|none|none|
|mailer_templates_invite_content|string \| null|false|none|none|
|mailer_templates_confirmation_content|string \| null|false|none|none|
|mailer_templates_recovery_content|string \| null|false|none|none|
|mailer_templates_email_change_content|string \| null|false|none|none|
|mailer_templates_magic_link_content|string \| null|false|none|none|
|mailer_templates_reauthentication_content|string \| null|false|none|none|
|mailer_templates_password_changed_notification_content|string \| null|false|none|none|
|mailer_templates_email_changed_notification_content|string \| null|false|none|none|
|mailer_templates_phone_changed_notification_content|string \| null|false|none|none|
|mailer_templates_mfa_factor_enrolled_notification_content|string \| null|false|none|none|
|mailer_templates_mfa_factor_unenrolled_notification_content|string \| null|false|none|none|
|mailer_templates_identity_linked_notification_content|string \| null|false|none|none|
|mailer_templates_identity_unlinked_notification_content|string \| null|false|none|none|
|mailer_notifications_password_changed_enabled|boolean \| null|false|none|none|
|mailer_notifications_email_changed_enabled|boolean \| null|false|none|none|
|mailer_notifications_phone_changed_enabled|boolean \| null|false|none|none|
|mailer_notifications_mfa_factor_enrolled_enabled|boolean \| null|false|none|none|
|mailer_notifications_mfa_factor_unenrolled_enabled|boolean \| null|false|none|none|
|mailer_notifications_identity_linked_enabled|boolean \| null|false|none|none|
|mailer_notifications_identity_unlinked_enabled|boolean \| null|false|none|none|
|mfa_max_enrolled_factors|integer \| null|false|none|none|
|uri_allow_list|string \| null|false|none|none|
|external_anonymous_users_enabled|boolean \| null|false|none|none|
|external_email_enabled|boolean \| null|false|none|none|
|external_phone_enabled|boolean \| null|false|none|none|
|saml_enabled|boolean \| null|false|none|none|
|saml_external_url|string \| null|false|none|none|
|security_sb_forwarded_for_enabled|boolean \| null|false|none|none|
|security_captcha_enabled|boolean \| null|false|none|none|
|security_captcha_provider|string \| null|false|none|none|
|security_captcha_secret|string \| null|false|none|none|
|sessions_timebox|number \| null|false|none|Session timebox in hours. Maximum 8760 hours (1 year).|
|sessions_inactivity_timeout|number \| null|false|none|Session inactivity timeout in hours. Maximum 8760 hours (1 year).|
|sessions_single_per_user|boolean \| null|false|none|none|
|sessions_tags|string \| null|false|none|none|
|rate_limit_anonymous_users|integer \| null|false|none|none|
|rate_limit_email_sent|integer \| null|false|none|none|
|rate_limit_sms_sent|integer \| null|false|none|none|
|rate_limit_verify|integer \| null|false|none|none|
|rate_limit_token_refresh|integer \| null|false|none|none|
|rate_limit_otp|integer \| null|false|none|none|
|rate_limit_web3|integer \| null|false|none|none|
|mailer_secure_email_change_enabled|boolean \| null|false|none|none|
|refresh_token_rotation_enabled|boolean \| null|false|none|none|
|password_hibp_enabled|boolean \| null|false|none|none|
|password_min_length|integer \| null|false|none|none|
|password_required_characters|string \| null|false|none|none|
|security_manual_linking_enabled|boolean \| null|false|none|none|
|security_update_password_require_reauthentication|boolean \| null|false|none|none|
|security_update_password_require_current_password|boolean \| null|false|none|Require the user's current password when updating their password.|
|security_refresh_token_reuse_interval|integer \| null|false|none|Refresh token reuse interval in seconds. Maximum 300 seconds (5 minutes).|
|mailer_otp_exp|integer|false|none|none|
|mailer_otp_length|integer \| null|false|none|none|
|sms_autoconfirm|boolean \| null|false|none|none|
|sms_max_frequency|integer \| null|false|none|none|
|sms_otp_exp|integer \| null|false|none|none|
|sms_otp_length|integer|false|none|none|
|sms_provider|string \| null|false|none|none|
|sms_messagebird_access_key|string \| null|false|none|none|
|sms_messagebird_originator|string \| null|false|none|none|
|sms_test_otp|string \| null|false|none|none|
|sms_test_otp_valid_until|string(date-time) \| null|false|none|none|
|sms_textlocal_api_key|string \| null|false|none|none|
|sms_textlocal_sender|string \| null|false|none|none|
|sms_twilio_account_sid|string \| null|false|none|none|
|sms_twilio_auth_token|string \| null|false|none|none|
|sms_twilio_content_sid|string \| null|false|none|none|
|sms_twilio_message_service_sid|string \| null|false|none|none|
|sms_twilio_verify_account_sid|string \| null|false|none|none|
|sms_twilio_verify_auth_token|string \| null|false|none|none|
|sms_twilio_verify_message_service_sid|string \| null|false|none|none|
|sms_vonage_api_key|string \| null|false|none|none|
|sms_vonage_api_secret|string \| null|false|none|none|
|sms_vonage_from|string \| null|false|none|none|
|sms_template|string \| null|false|none|none|
|hook_mfa_verification_attempt_enabled|boolean \| null|false|none|none|
|hook_mfa_verification_attempt_uri|string \| null|false|none|none|
|hook_mfa_verification_attempt_secrets|string \| null|false|none|none|
|hook_password_verification_attempt_enabled|boolean \| null|false|none|none|
|hook_password_verification_attempt_uri|string \| null|false|none|none|
|hook_password_verification_attempt_secrets|string \| null|false|none|none|
|hook_custom_access_token_enabled|boolean \| null|false|none|none|
|hook_custom_access_token_uri|string \| null|false|none|none|
|hook_custom_access_token_secrets|string \| null|false|none|none|
|hook_send_sms_enabled|boolean \| null|false|none|none|
|hook_send_sms_uri|string \| null|false|none|none|
|hook_send_sms_secrets|string \| null|false|none|none|
|hook_send_email_enabled|boolean \| null|false|none|none|
|hook_send_email_uri|string \| null|false|none|none|
|hook_send_email_secrets|string \| null|false|none|none|
|hook_before_user_created_enabled|boolean \| null|false|none|none|
|hook_before_user_created_uri|string \| null|false|none|none|
|hook_before_user_created_secrets|string \| null|false|none|none|
|hook_after_user_created_enabled|boolean \| null|false|none|none|
|hook_after_user_created_uri|string \| null|false|none|none|
|hook_after_user_created_secrets|string \| null|false|none|none|
|external_apple_enabled|boolean \| null|false|none|none|
|external_apple_client_id|string \| null|false|none|none|
|external_apple_email_optional|boolean \| null|false|none|none|
|external_apple_secret|string \| null|false|none|none|
|external_apple_additional_client_ids|string \| null|false|none|none|
|external_azure_enabled|boolean \| null|false|none|none|
|external_azure_client_id|string \| null|false|none|none|
|external_azure_email_optional|boolean \| null|false|none|none|
|external_azure_secret|string \| null|false|none|none|
|external_azure_url|string \| null|false|none|none|
|external_bitbucket_enabled|boolean \| null|false|none|none|
|external_bitbucket_client_id|string \| null|false|none|none|
|external_bitbucket_email_optional|boolean \| null|false|none|none|
|external_bitbucket_secret|string \| null|false|none|none|
|external_discord_enabled|boolean \| null|false|none|none|
|external_discord_client_id|string \| null|false|none|none|
|external_discord_email_optional|boolean \| null|false|none|none|
|external_discord_secret|string \| null|false|none|none|
|external_facebook_enabled|boolean \| null|false|none|none|
|external_facebook_client_id|string \| null|false|none|none|
|external_facebook_email_optional|boolean \| null|false|none|none|
|external_facebook_secret|string \| null|false|none|none|
|external_figma_enabled|boolean \| null|false|none|none|
|external_figma_client_id|string \| null|false|none|none|
|external_figma_email_optional|boolean \| null|false|none|none|
|external_figma_secret|string \| null|false|none|none|
|external_github_enabled|boolean \| null|false|none|none|
|external_github_client_id|string \| null|false|none|none|
|external_github_email_optional|boolean \| null|false|none|none|
|external_github_secret|string \| null|false|none|none|
|external_gitlab_enabled|boolean \| null|false|none|none|
|external_gitlab_client_id|string \| null|false|none|none|
|external_gitlab_email_optional|boolean \| null|false|none|none|
|external_gitlab_secret|string \| null|false|none|none|
|external_gitlab_url|string \| null|false|none|none|
|external_google_enabled|boolean \| null|false|none|none|
|external_google_client_id|string \| null|false|none|none|
|external_google_email_optional|boolean \| null|false|none|none|
|external_google_secret|string \| null|false|none|none|
|external_google_additional_client_ids|string \| null|false|none|none|
|external_google_skip_nonce_check|boolean \| null|false|none|none|
|external_kakao_enabled|boolean \| null|false|none|none|
|external_kakao_client_id|string \| null|false|none|none|
|external_kakao_email_optional|boolean \| null|false|none|none|
|external_kakao_secret|string \| null|false|none|none|
|external_keycloak_enabled|boolean \| null|false|none|none|
|external_keycloak_client_id|string \| null|false|none|none|
|external_keycloak_email_optional|boolean \| null|false|none|none|
|external_keycloak_secret|string \| null|false|none|none|
|external_keycloak_url|string \| null|false|none|none|
|external_linkedin_oidc_enabled|boolean \| null|false|none|none|
|external_linkedin_oidc_client_id|string \| null|false|none|none|
|external_linkedin_oidc_email_optional|boolean \| null|false|none|none|
|external_linkedin_oidc_secret|string \| null|false|none|none|
|external_slack_oidc_enabled|boolean \| null|false|none|none|
|external_slack_oidc_client_id|string \| null|false|none|none|
|external_slack_oidc_email_optional|boolean \| null|false|none|none|
|external_slack_oidc_secret|string \| null|false|none|none|
|external_notion_enabled|boolean \| null|false|none|none|
|external_notion_client_id|string \| null|false|none|none|
|external_notion_email_optional|boolean \| null|false|none|none|
|external_notion_secret|string \| null|false|none|none|
|external_slack_enabled|boolean \| null|false|none|none|
|external_slack_client_id|string \| null|false|none|none|
|external_slack_email_optional|boolean \| null|false|none|none|
|external_slack_secret|string \| null|false|none|none|
|external_spotify_enabled|boolean \| null|false|none|none|
|external_spotify_client_id|string \| null|false|none|none|
|external_spotify_email_optional|boolean \| null|false|none|none|
|external_spotify_secret|string \| null|false|none|none|
|external_twitch_enabled|boolean \| null|false|none|none|
|external_twitch_client_id|string \| null|false|none|none|
|external_twitch_email_optional|boolean \| null|false|none|none|
|external_twitch_secret|string \| null|false|none|none|
|external_twitter_enabled|boolean \| null|false|none|none|
|external_twitter_client_id|string \| null|false|none|none|
|external_twitter_email_optional|boolean \| null|false|none|none|
|external_twitter_secret|string \| null|false|none|none|
|external_x_enabled|boolean \| null|false|none|none|
|external_x_client_id|string \| null|false|none|none|
|external_x_email_optional|boolean \| null|false|none|none|
|external_x_secret|string \| null|false|none|none|
|external_workos_enabled|boolean \| null|false|none|none|
|external_workos_client_id|string \| null|false|none|none|
|external_workos_secret|string \| null|false|none|none|
|external_workos_url|string \| null|false|none|none|
|external_web3_solana_enabled|boolean \| null|false|none|none|
|external_web3_ethereum_enabled|boolean \| null|false|none|none|
|external_zoom_enabled|boolean \| null|false|none|none|
|external_zoom_client_id|string \| null|false|none|none|
|external_zoom_email_optional|boolean \| null|false|none|none|
|external_zoom_secret|string \| null|false|none|none|
|db_max_pool_size|integer \| null|false|none|none|
|db_max_pool_size_unit|string \| null|false|none|none|
|api_max_request_duration|integer \| null|false|none|none|
|mfa_totp_enroll_enabled|boolean \| null|false|none|none|
|mfa_totp_verify_enabled|boolean \| null|false|none|none|
|mfa_web_authn_enroll_enabled|boolean \| null|false|none|none|
|mfa_web_authn_verify_enabled|boolean \| null|false|none|none|
|passkey_enabled|boolean|false|none|none|
|webauthn_rp_display_name|string \| null|false|none|none|
|webauthn_rp_id|string \| null|false|none|none|
|webauthn_rp_origins|string \| null|false|none|none|
|mfa_phone_enroll_enabled|boolean \| null|false|none|none|
|mfa_phone_verify_enabled|boolean \| null|false|none|none|
|mfa_phone_max_frequency|integer \| null|false|none|none|
|mfa_phone_otp_length|integer \| null|false|none|none|
|mfa_phone_template|string \| null|false|none|none|
|nimbus_oauth_client_id|string \| null|false|none|none|
|nimbus_oauth_client_secret|string \| null|false|none|none|
|oauth_server_enabled|boolean \| null|false|none|none|
|oauth_server_allow_dynamic_registration|boolean \| null|false|none|none|
|oauth_server_authorization_path|string \| null|false|none|none|
|custom_oauth_enabled|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|security_captcha_provider|turnstile|
|security_captcha_provider|hcaptcha|
|security_captcha_provider|null|
|password_required_characters|abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789|
|password_required_characters|abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789|
|password_required_characters|abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789:!@#$%^&*()_+-=[]{};'\\:"\|<>?,./`~|
|password_required_characters|""|
|password_required_characters|null|
|sms_provider|messagebird|
|sms_provider|textlocal|
|sms_provider|twilio|
|sms_provider|twilio_verify|
|sms_provider|vonage|
|sms_provider|null|
|db_max_pool_size_unit|connections|
|db_max_pool_size_unit|percent|
|db_max_pool_size_unit|null|

<h2 id="tocS_CreateThirdPartyAuthBody">CreateThirdPartyAuthBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatethirdpartyauthbody"></a>
<a id="schema_CreateThirdPartyAuthBody"></a>
<a id="tocScreatethirdpartyauthbody"></a>
<a id="tocscreatethirdpartyauthbody"></a>

```json
{
  "oidc_issuer_url": "https://login.acme.com",
  "jwks_url": "https://login.acme.com/.well-known/jwks.json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oidc_issuer_url|string|false|none|none|
|jwks_url|string|false|none|none|
|custom_jwks|object|false|none|none|

<h2 id="tocS_ThirdPartyAuth_Output">ThirdPartyAuth_Output</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartyauth_output"></a>
<a id="schema_ThirdPartyAuth_Output"></a>
<a id="tocSthirdpartyauth_output"></a>
<a id="tocsthirdpartyauth_output"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "string",
  "oidc_issuer_url": "string",
  "jwks_url": "string",
  "custom_jwks": null,
  "resolved_jwks": null,
  "inserted_at": "string",
  "updated_at": "string",
  "resolved_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|type|string|true|none|none|
|oidc_issuer_url|string \| null|false|none|none|
|jwks_url|string \| null|false|none|none|
|custom_jwks|object \| null|false|none|none|
|resolved_jwks|object \| null|false|none|none|
|inserted_at|string|true|none|none|
|updated_at|string|true|none|none|
|resolved_at|string \| null|false|none|none|

<h2 id="tocS_GetProjectAvailableRestoreVersionsResponse_Output">GetProjectAvailableRestoreVersionsResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemagetprojectavailablerestoreversionsresponse_output"></a>
<a id="schema_GetProjectAvailableRestoreVersionsResponse_Output"></a>
<a id="tocSgetprojectavailablerestoreversionsresponse_output"></a>
<a id="tocsgetprojectavailablerestoreversionsresponse_output"></a>

```json
{
  "available_versions": [
    {
      "version": "string",
      "release_channel": "internal",
      "postgres_engine": "13"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available_versions|[object]|true|none|none|

<h2 id="tocS_ListProjectAddonsResponse_Output">ListProjectAddonsResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectaddonsresponse_output"></a>
<a id="schema_ListProjectAddonsResponse_Output"></a>
<a id="tocSlistprojectaddonsresponse_output"></a>
<a id="tocslistprojectaddonsresponse_output"></a>

```json
{
  "selected_addons": [
    {
      "type": "custom_domain",
      "variant": {
        "id": "ci_micro",
        "name": "string",
        "price": {
          "description": "string",
          "type": "fixed",
          "interval": "monthly",
          "amount": 0
        },
        "meta": "string"
      }
    }
  ],
  "available_addons": [
    {
      "type": "custom_domain",
      "name": "string",
      "variants": [
        {
          "id": "ci_micro",
          "name": "string",
          "price": {
            "description": "string",
            "type": "fixed",
            "interval": "monthly",
            "amount": 0
          },
          "meta": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|selected_addons|[object]|true|none|none|
|available_addons|[object]|true|none|none|

<h2 id="tocS_ApplyProjectAddonBody">ApplyProjectAddonBody</h2>
<!-- backwards compatibility -->
<a id="schemaapplyprojectaddonbody"></a>
<a id="schema_ApplyProjectAddonBody"></a>
<a id="tocSapplyprojectaddonbody"></a>
<a id="tocsapplyprojectaddonbody"></a>

```json
{
  "addon_variant": "pitr_7",
  "addon_type": "pitr"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addon_variant|string|true|none|none|
|addon_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|addon_type|custom_domain|
|addon_type|compute_instance|
|addon_type|pitr|
|addon_type|ipv4|
|addon_type|auth_mfa_phone|
|addon_type|auth_mfa_web_authn|
|addon_type|log_drain|
|addon_type|etl_pipeline|

<h2 id="tocS_ProjectClaimTokenResponse_Output">ProjectClaimTokenResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemaprojectclaimtokenresponse_output"></a>
<a id="schema_ProjectClaimTokenResponse_Output"></a>
<a id="tocSprojectclaimtokenresponse_output"></a>
<a id="tocsprojectclaimtokenresponse_output"></a>

```json
{
  "token_alias": "string",
  "expires_at": "string",
  "created_at": "string",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token_alias|string|true|none|none|
|expires_at|string|true|none|none|
|created_at|string|true|none|none|
|created_by|string(uuid)|true|none|none|

<h2 id="tocS_CreateProjectClaimTokenResponse_Output">CreateProjectClaimTokenResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectclaimtokenresponse_output"></a>
<a id="schema_CreateProjectClaimTokenResponse_Output"></a>
<a id="tocScreateprojectclaimtokenresponse_output"></a>
<a id="tocscreateprojectclaimtokenresponse_output"></a>

```json
{
  "token": "string",
  "token_alias": "string",
  "expires_at": "string",
  "created_at": "string",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|none|
|token_alias|string|true|none|none|
|expires_at|string|true|none|none|
|created_at|string|true|none|none|
|created_by|string(uuid)|true|none|none|

<h2 id="tocS_V1ProjectAdvisorsResponse_Output">V1ProjectAdvisorsResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemav1projectadvisorsresponse_output"></a>
<a id="schema_V1ProjectAdvisorsResponse_Output"></a>
<a id="tocSv1projectadvisorsresponse_output"></a>
<a id="tocsv1projectadvisorsresponse_output"></a>

```json
{
  "lints": [
    {
      "name": "unindexed_foreign_keys",
      "title": "string",
      "level": "ERROR",
      "facing": "EXTERNAL",
      "categories": [
        "PERFORMANCE"
      ],
      "description": "string",
      "detail": "string",
      "remediation": "string",
      "metadata": {
        "schema": "string",
        "name": "string",
        "entity": "string",
        "type": "table",
        "fkey_name": "string",
        "fkey_columns": [
          0
        ]
      },
      "cache_key": "string",
      "observed_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lints|[object]|true|none|none|

<h2 id="tocS_AnalyticsResponse_Output">AnalyticsResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticsresponse_output"></a>
<a id="schema_AnalyticsResponse_Output"></a>
<a id="tocSanalyticsresponse_output"></a>
<a id="tocsanalyticsresponse_output"></a>

```json
{
  "result": [
    null
  ],
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[object]|false|none|none|
|error|string \| object|false|none|none|

<h2 id="tocS_V1GetUsageApiCountResponse_Output">V1GetUsageApiCountResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemav1getusageapicountresponse_output"></a>
<a id="schema_V1GetUsageApiCountResponse_Output"></a>
<a id="tocSv1getusageapicountresponse_output"></a>
<a id="tocsv1getusageapicountresponse_output"></a>

```json
{
  "result": [
    {
      "timestamp": "1970-01-01T00:00:00Z",
      "total_auth_requests": 0,
      "total_realtime_requests": 0,
      "total_rest_requests": 0,
      "total_storage_requests": 0
    }
  ],
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[object]|false|none|none|
|error|string \| object|false|none|none|

<h2 id="tocS_V1GetUsageApiRequestsCountResponse_Output">V1GetUsageApiRequestsCountResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemav1getusageapirequestscountresponse_output"></a>
<a id="schema_V1GetUsageApiRequestsCountResponse_Output"></a>
<a id="tocSv1getusageapirequestscountresponse_output"></a>
<a id="tocsv1getusageapirequestscountresponse_output"></a>

```json
{
  "result": [
    {
      "count": 0
    }
  ],
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[object]|false|none|none|
|error|string \| object|false|none|none|

<h2 id="tocS_CreateRoleBody">CreateRoleBody</h2>
<!-- backwards compatibility -->
<a id="schemacreaterolebody"></a>
<a id="schema_CreateRoleBody"></a>
<a id="tocScreaterolebody"></a>
<a id="tocscreaterolebody"></a>

```json
{
  "read_only": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|read_only|boolean|true|none|none|

<h2 id="tocS_CreateRoleResponse_Output">CreateRoleResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemacreateroleresponse_output"></a>
<a id="schema_CreateRoleResponse_Output"></a>
<a id="tocScreateroleresponse_output"></a>
<a id="tocscreateroleresponse_output"></a>

```json
{
  "role": "string",
  "password": "string",
  "ttl_seconds": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|true|none|none|
|password|string|true|none|none|
|ttl_seconds|integer(int64)|true|none|none|

<h2 id="tocS_DeleteRolesResponse_Output">DeleteRolesResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemadeleterolesresponse_output"></a>
<a id="schema_DeleteRolesResponse_Output"></a>
<a id="tocSdeleterolesresponse_output"></a>
<a id="tocsdeleterolesresponse_output"></a>

```json
{
  "message": "ok"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|message|ok|

<h2 id="tocS_V1ListMigrationsResponse_Output">V1ListMigrationsResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemav1listmigrationsresponse_output"></a>
<a id="schema_V1ListMigrationsResponse_Output"></a>
<a id="tocSv1listmigrationsresponse_output"></a>
<a id="tocsv1listmigrationsresponse_output"></a>

```json
[
  {
    "version": "string",
    "name": "string"
  }
]
```

<h2 id="tocS_V1CreateMigrationBody">V1CreateMigrationBody</h2>
<!-- backwards compatibility -->
<a id="schemav1createmigrationbody"></a>
<a id="schema_V1CreateMigrationBody"></a>
<a id="tocSv1createmigrationbody"></a>
<a id="tocsv1createmigrationbody"></a>

```json
{
  "query": "create table public.widgets(id bigint primary key);",
  "name": "create_widgets_table",
  "rollback": "drop table if exists public.widgets;"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|none|
|name|string|false|none|none|
|rollback|string|false|none|none|

<h2 id="tocS_V1UpsertMigrationBody">V1UpsertMigrationBody</h2>
<!-- backwards compatibility -->
<a id="schemav1upsertmigrationbody"></a>
<a id="schema_V1UpsertMigrationBody"></a>
<a id="tocSv1upsertmigrationbody"></a>
<a id="tocsv1upsertmigrationbody"></a>

```json
{
  "query": "create table public.widgets(id bigint primary key);",
  "name": "create_widgets_table",
  "rollback": "drop table if exists public.widgets;"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|none|
|name|string|false|none|none|
|rollback|string|false|none|none|

<h2 id="tocS_V1GetMigrationResponse_Output">V1GetMigrationResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemav1getmigrationresponse_output"></a>
<a id="schema_V1GetMigrationResponse_Output"></a>
<a id="tocSv1getmigrationresponse_output"></a>
<a id="tocsv1getmigrationresponse_output"></a>

```json
{
  "version": "string",
  "name": "string",
  "statements": [
    "string"
  ],
  "rollback": [
    "string"
  ],
  "created_by": "string",
  "idempotency_key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|true|none|none|
|name|string|false|none|none|
|statements|[string]|false|none|none|
|rollback|[string]|false|none|none|
|created_by|string|false|none|none|
|idempotency_key|string|false|none|none|

<h2 id="tocS_V1PatchMigrationBody">V1PatchMigrationBody</h2>
<!-- backwards compatibility -->
<a id="schemav1patchmigrationbody"></a>
<a id="schema_V1PatchMigrationBody"></a>
<a id="tocSv1patchmigrationbody"></a>
<a id="tocsv1patchmigrationbody"></a>

```json
{
  "name": "create_widgets_table",
  "rollback": "drop table if exists public.widgets;"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|rollback|string|false|none|none|

<h2 id="tocS_V1RunQueryBody">V1RunQueryBody</h2>
<!-- backwards compatibility -->
<a id="schemav1runquerybody"></a>
<a id="schema_V1RunQueryBody"></a>
<a id="tocSv1runquerybody"></a>
<a id="tocsv1runquerybody"></a>

```json
{
  "query": "select * from pg_stat_activity limit 1;",
  "read_only": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|none|
|parameters|[object]|false|none|none|
|read_only|boolean|false|none|none|

<h2 id="tocS_V1ReadOnlyQueryBody">V1ReadOnlyQueryBody</h2>
<!-- backwards compatibility -->
<a id="schemav1readonlyquerybody"></a>
<a id="schema_V1ReadOnlyQueryBody"></a>
<a id="tocSv1readonlyquerybody"></a>
<a id="tocsv1readonlyquerybody"></a>

```json
{
  "query": "select * from pg_stat_activity limit 1;"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|none|
|parameters|[object]|false|none|none|

<h2 id="tocS_GetProjectDbMetadataResponse_Output">GetProjectDbMetadataResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemagetprojectdbmetadataresponse_output"></a>
<a id="schema_GetProjectDbMetadataResponse_Output"></a>
<a id="tocSgetprojectdbmetadataresponse_output"></a>
<a id="tocsgetprojectdbmetadataresponse_output"></a>

```json
{
  "databases": [
    {
      "name": "string",
      "schemas": [
        {
          "name": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|databases|[object]|true|none|none|

<h2 id="tocS_V1UpdatePasswordBody">V1UpdatePasswordBody</h2>
<!-- backwards compatibility -->
<a id="schemav1updatepasswordbody"></a>
<a id="schema_V1UpdatePasswordBody"></a>
<a id="tocSv1updatepasswordbody"></a>
<a id="tocsv1updatepasswordbody"></a>

```json
{
  "password": "correct-horse-battery-staple"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|true|none|none|

<h2 id="tocS_V1UpdatePasswordResponse_Output">V1UpdatePasswordResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemav1updatepasswordresponse_output"></a>
<a id="schema_V1UpdatePasswordResponse_Output"></a>
<a id="tocSv1updatepasswordresponse_output"></a>
<a id="tocsv1updatepasswordresponse_output"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<h2 id="tocS_JitAccessResponse_Output">JitAccessResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemajitaccessresponse_output"></a>
<a id="schema_JitAccessResponse_Output"></a>
<a id="tocSjitaccessresponse_output"></a>
<a id="tocsjitaccessresponse_output"></a>

```json
{
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user_roles": [
    {
      "role": "string",
      "expires_at": 0,
      "allowed_networks": {
        "allowed_cidrs": [
          {
            "cidr": "string"
          }
        ],
        "allowed_cidrs_v6": [
          {
            "cidr": "string"
          }
        ]
      },
      "branches_only": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string(uuid)|false|none|none|
|user_roles|[object]|true|none|none|

<h2 id="tocS_AuthorizeJitAccessBody">AuthorizeJitAccessBody</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizejitaccessbody"></a>
<a id="schema_AuthorizeJitAccessBody"></a>
<a id="tocSauthorizejitaccessbody"></a>
<a id="tocsauthorizejitaccessbody"></a>

```json
{
  "role": "postgres",
  "rhost": "203.0.113.10"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|true|none|none|
|rhost|string(ipv4) \| string(ipv6)|true|none|none|

<h2 id="tocS_JitAuthorizeAccessResponse_Output">JitAuthorizeAccessResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemajitauthorizeaccessresponse_output"></a>
<a id="schema_JitAuthorizeAccessResponse_Output"></a>
<a id="tocSjitauthorizeaccessresponse_output"></a>
<a id="tocsjitauthorizeaccessresponse_output"></a>

```json
{
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "act": "string",
  "user_role": {
    "role": "string",
    "expires_at": 0,
    "allowed_networks": {
      "allowed_cidrs": [
        {
          "cidr": "string"
        }
      ],
      "allowed_cidrs_v6": [
        {
          "cidr": "string"
        }
      ]
    },
    "branches_only": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string(uuid)|false|none|none|
|act|string|false|none|none|
|user_role|object|true|none|none|

<h2 id="tocS_JitListAccessResponse_Output">JitListAccessResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemajitlistaccessresponse_output"></a>
<a id="schema_JitListAccessResponse_Output"></a>
<a id="tocSjitlistaccessresponse_output"></a>
<a id="tocsjitlistaccessresponse_output"></a>

```json
{
  "items": [
    {
      "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "primary_email": "string",
      "invite_id": null,
      "expires_at": null,
      "user_roles": [
        {
          "role": "string",
          "expires_at": 0,
          "allowed_networks": {
            "allowed_cidrs": [
              {
                "cidr": "string"
              }
            ],
            "allowed_cidrs_v6": [
              {
                "cidr": "string"
              }
            ]
          },
          "branches_only": true
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|none|

<h2 id="tocS_UpdateJitAccessBody">UpdateJitAccessBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatejitaccessbody"></a>
<a id="schema_UpdateJitAccessBody"></a>
<a id="tocSupdatejitaccessbody"></a>
<a id="tocsupdatejitaccessbody"></a>

```json
{
  "user_id": "55555555-5555-4555-8555-555555555555",
  "roles": [
    {
      "role": "postgres",
      "expires_at": 1740787200,
      "allowed_networks": {
        "allowed_cidrs": [
          {
            "cidr": "203.0.113.0/24"
          }
        ]
      },
      "branches_only": false
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string(uuid)|true|none|none|
|roles|[object]|true|none|none|

<h2 id="tocS_InviteExternalUserJitAccessBody">InviteExternalUserJitAccessBody</h2>
<!-- backwards compatibility -->
<a id="schemainviteexternaluserjitaccessbody"></a>
<a id="schema_InviteExternalUserJitAccessBody"></a>
<a id="tocSinviteexternaluserjitaccessbody"></a>
<a id="tocsinviteexternaluserjitaccessbody"></a>

```json
{
  "email": "external-user@somedomain.xyz",
  "roles": [
    {
      "role": "postgres",
      "expires_at": 1740787200,
      "allowed_networks": {
        "allowed_cidrs": [
          {
            "cidr": "203.0.113.0/24"
          }
        ]
      },
      "branches_only": false
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|none|
|roles|[object]|true|none|none|

<h2 id="tocS_InviteExternalUserJitResponse_Output">InviteExternalUserJitResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemainviteexternaluserjitresponse_output"></a>
<a id="schema_InviteExternalUserJitResponse_Output"></a>
<a id="tocSinviteexternaluserjitresponse_output"></a>
<a id="tocsinviteexternaluserjitresponse_output"></a>

```json
{
  "email": "user@example.com",
  "invite_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user_roles": [
    {
      "role": "string",
      "expires_at": 0,
      "allowed_networks": {
        "allowed_cidrs": [
          {
            "cidr": "string"
          }
        ],
        "allowed_cidrs_v6": [
          {
            "cidr": "string"
          }
        ]
      },
      "branches_only": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|none|
|invite_id|string(uuid)|true|none|none|
|user_roles|[object]|true|none|none|

<h2 id="tocS_AcceptInviteExternalUserJitAccessBody">AcceptInviteExternalUserJitAccessBody</h2>
<!-- backwards compatibility -->
<a id="schemaacceptinviteexternaluserjitaccessbody"></a>
<a id="schema_AcceptInviteExternalUserJitAccessBody"></a>
<a id="tocSacceptinviteexternaluserjitaccessbody"></a>
<a id="tocsacceptinviteexternaluserjitaccessbody"></a>

```json
{
  "email": "external-user@somedomain.xyz",
  "token": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|none|
|token|string|true|none|none|

<h2 id="tocS_FunctionResponse_Output">FunctionResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemafunctionresponse_output"></a>
<a id="schema_FunctionResponse_Output"></a>
<a id="tocSfunctionresponse_output"></a>
<a id="tocsfunctionresponse_output"></a>

```json
{
  "id": "string",
  "slug": "string",
  "name": "string",
  "status": "ACTIVE",
  "version": -9007199254740000,
  "created_at": -9007199254740000,
  "updated_at": -9007199254740000,
  "verify_jwt": true,
  "import_map": true,
  "entrypoint_path": "string",
  "import_map_path": "string",
  "ezbr_sha256": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|slug|string|true|none|none|
|name|string|true|none|none|
|status|string|true|none|none|
|version|integer|true|none|none|
|created_at|integer(int64)|true|none|none|
|updated_at|integer(int64)|true|none|none|
|verify_jwt|boolean|false|none|none|
|import_map|boolean|false|none|none|
|entrypoint_path|string|false|none|none|
|import_map_path|string|false|none|none|
|ezbr_sha256|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|REMOVED|
|status|THROTTLED|

<h2 id="tocS_V1CreateFunctionBody">V1CreateFunctionBody</h2>
<!-- backwards compatibility -->
<a id="schemav1createfunctionbody"></a>
<a id="schema_V1CreateFunctionBody"></a>
<a id="tocSv1createfunctionbody"></a>
<a id="tocsv1createfunctionbody"></a>

```json
{
  "slug": "hello-world",
  "name": "Hello World",
  "body": "Deno.serve(() => new Response('Hello, world!'))",
  "verify_jwt": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|true|none|none|
|name|string|true|none|none|
|body|string|true|none|none|
|verify_jwt|boolean|false|none|none|

<h2 id="tocS_BulkUpdateFunctionBody">BulkUpdateFunctionBody</h2>
<!-- backwards compatibility -->
<a id="schemabulkupdatefunctionbody"></a>
<a id="schema_BulkUpdateFunctionBody"></a>
<a id="tocSbulkupdatefunctionbody"></a>
<a id="tocsbulkupdatefunctionbody"></a>

```json
[
  {
    "id": "3c078cce-ad70-4148-9f37-4da362789053",
    "slug": "hello-world",
    "name": "Hello World",
    "status": "ACTIVE",
    "version": 2,
    "verify_jwt": true,
    "entrypoint_path": "index.ts"
  }
]
```

<h2 id="tocS_BulkUpdateFunctionResponse_Output">BulkUpdateFunctionResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemabulkupdatefunctionresponse_output"></a>
<a id="schema_BulkUpdateFunctionResponse_Output"></a>
<a id="tocSbulkupdatefunctionresponse_output"></a>
<a id="tocsbulkupdatefunctionresponse_output"></a>

```json
{
  "functions": [
    {
      "id": "string",
      "slug": "string",
      "name": "string",
      "status": "ACTIVE",
      "version": -9007199254740000,
      "created_at": -9007199254740000,
      "updated_at": -9007199254740000,
      "verify_jwt": true,
      "import_map": true,
      "entrypoint_path": "string",
      "import_map_path": "string",
      "ezbr_sha256": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functions|[object]|true|none|none|

<h2 id="tocS_FunctionDeployBody">FunctionDeployBody</h2>
<!-- backwards compatibility -->
<a id="schemafunctiondeploybody"></a>
<a id="schema_FunctionDeployBody"></a>
<a id="tocSfunctiondeploybody"></a>
<a id="tocsfunctiondeploybody"></a>

```json
{
  "file": [
    "./supabase/functions/hello-world/index.ts"
  ],
  "metadata": {
    "entrypoint_path": "index.ts",
    "verify_jwt": true,
    "name": "Hello World"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|[string(binary)]|true|none|none|
|metadata|object|true|none|none|

<h2 id="tocS_DeployFunctionResponse_Output">DeployFunctionResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemadeployfunctionresponse_output"></a>
<a id="schema_DeployFunctionResponse_Output"></a>
<a id="tocSdeployfunctionresponse_output"></a>
<a id="tocsdeployfunctionresponse_output"></a>

```json
{
  "id": "string",
  "slug": "string",
  "name": "string",
  "status": "ACTIVE",
  "version": -9007199254740000,
  "created_at": -9007199254740000,
  "updated_at": -9007199254740000,
  "verify_jwt": true,
  "import_map": true,
  "entrypoint_path": "string",
  "import_map_path": "string",
  "ezbr_sha256": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|slug|string|true|none|none|
|name|string|true|none|none|
|status|string|true|none|none|
|version|integer|true|none|none|
|created_at|integer(int64)|false|none|none|
|updated_at|integer(int64)|false|none|none|
|verify_jwt|boolean|false|none|none|
|import_map|boolean|false|none|none|
|entrypoint_path|string|false|none|none|
|import_map_path|string|false|none|none|
|ezbr_sha256|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|REMOVED|
|status|THROTTLED|

<h2 id="tocS_FunctionSlugResponse_Output">FunctionSlugResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemafunctionslugresponse_output"></a>
<a id="schema_FunctionSlugResponse_Output"></a>
<a id="tocSfunctionslugresponse_output"></a>
<a id="tocsfunctionslugresponse_output"></a>

```json
{
  "id": "string",
  "slug": "string",
  "name": "string",
  "status": "ACTIVE",
  "version": -9007199254740000,
  "created_at": -9007199254740000,
  "updated_at": -9007199254740000,
  "verify_jwt": true,
  "import_map": true,
  "entrypoint_path": "string",
  "import_map_path": "string",
  "ezbr_sha256": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|slug|string|true|none|none|
|name|string|true|none|none|
|status|string|true|none|none|
|version|integer|true|none|none|
|created_at|integer(int64)|true|none|none|
|updated_at|integer(int64)|true|none|none|
|verify_jwt|boolean|false|none|none|
|import_map|boolean|false|none|none|
|entrypoint_path|string|false|none|none|
|import_map_path|string|false|none|none|
|ezbr_sha256|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|REMOVED|
|status|THROTTLED|

<h2 id="tocS_StreamableFile">StreamableFile</h2>
<!-- backwards compatibility -->
<a id="schemastreamablefile"></a>
<a id="schema_StreamableFile"></a>
<a id="tocSstreamablefile"></a>
<a id="tocsstreamablefile"></a>

```json
{}
```

<h2 id="tocS_V1UpdateFunctionBodyJson">V1UpdateFunctionBodyJson</h2>
<!-- backwards compatibility -->
<a id="schemav1updatefunctionbodyjson"></a>
<a id="schema_V1UpdateFunctionBodyJson"></a>
<a id="tocSv1updatefunctionbodyjson"></a>
<a id="tocsv1updatefunctionbodyjson"></a>

```json
{
  "name": "Hello World",
  "body": "Deno.serve(() => new Response('Hello again!'))",
  "verify_jwt": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|body|string|false|none|none|
|verify_jwt|boolean|false|none|none|

<h2 id="tocS_V1UpdateFunctionBodyEszip">V1UpdateFunctionBodyEszip</h2>
<!-- backwards compatibility -->
<a id="schemav1updatefunctionbodyeszip"></a>
<a id="schema_V1UpdateFunctionBodyEszip"></a>
<a id="tocSv1updatefunctionbodyeszip"></a>
<a id="tocsv1updatefunctionbodyeszip"></a>

```json
"Binary Brotli-compressed ESZIP file"
```

Raw Brotli-compressed ESZIP binary file.

**Validation requirements** - The file must start with the four magic bytes `EZBR` (hex: `45 5A 42 52`).
- The `ezbr_sha256` query parameter must contain the SHA-256 hash of the uploaded ESZIP payload.

**Example**
```javascript
import { readFile } from 'node:fs/promises';
import { brotliCompress } from 'node:zlib';
import { promisify } from 'node:util';
import { createHash } from 'node:crypto';

const compress = promisify(brotliCompress);
const marker = Buffer.from('EZBR', 'ascii');

const file = await readFile('./function.eszip');
const compressed = await compress(file);

const payload = Buffer.concat([marker, compressed]);

const ezbr_sha256 = createHash('sha256')
  .update(payload)
  .digest('hex');

console.log(ezbr_sha256);
```

<h2 id="tocS_V1StorageBucketResponse_Output">V1StorageBucketResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemav1storagebucketresponse_output"></a>
<a id="schema_V1StorageBucketResponse_Output"></a>
<a id="tocSv1storagebucketresponse_output"></a>
<a id="tocsv1storagebucketresponse_output"></a>

```json
{
  "id": "string",
  "name": "string",
  "owner": "string",
  "created_at": "string",
  "updated_at": "string",
  "public": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|owner|string|true|none|none|
|created_at|string|true|none|none|
|updated_at|string|true|none|none|
|public|boolean|true|none|none|

<h2 id="tocS_DiskResponse_Output">DiskResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemadiskresponse_output"></a>
<a id="schema_DiskResponse_Output"></a>
<a id="tocSdiskresponse_output"></a>
<a id="tocsdiskresponse_output"></a>

```json
{
  "attributes": {
    "iops": 1,
    "size_gb": 1,
    "throughput_mibps": 1,
    "type": "gp3"
  },
  "last_modified_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|true|none|none|
|last_modified_at|string|false|none|none|

<h2 id="tocS_DiskRequestBody">DiskRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemadiskrequestbody"></a>
<a id="schema_DiskRequestBody"></a>
<a id="tocSdiskrequestbody"></a>
<a id="tocsdiskrequestbody"></a>

```json
{
  "attributes": {
    "type": "gp3",
    "size_gb": 100,
    "iops": 3000,
    "throughput_mibps": 125
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|true|none|none|

<h2 id="tocS_DiskUtilMetricsResponse_Output">DiskUtilMetricsResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemadiskutilmetricsresponse_output"></a>
<a id="schema_DiskUtilMetricsResponse_Output"></a>
<a id="tocSdiskutilmetricsresponse_output"></a>
<a id="tocsdiskutilmetricsresponse_output"></a>

```json
{
  "timestamp": "string",
  "metrics": {
    "fs_size_bytes": 0,
    "fs_avail_bytes": 0,
    "fs_used_bytes": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string|true|none|none|
|metrics|object|true|none|none|

<h2 id="tocS_DiskAutoscaleConfig_Output">DiskAutoscaleConfig_Output</h2>
<!-- backwards compatibility -->
<a id="schemadiskautoscaleconfig_output"></a>
<a id="schema_DiskAutoscaleConfig_Output"></a>
<a id="tocSdiskautoscaleconfig_output"></a>
<a id="tocsdiskautoscaleconfig_output"></a>

```json
{
  "growth_percent": 1,
  "min_increment_gb": 1,
  "max_size_gb": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|growth_percent|integer \| null|true|none|Growth percentage for disk autoscaling|
|min_increment_gb|integer \| null|true|none|Minimum increment size for disk autoscaling in GB|
|max_size_gb|integer \| null|true|none|Maximum limit the disk size will grow to in GB|

<h2 id="tocS_StorageConfigResponse_Output">StorageConfigResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemastorageconfigresponse_output"></a>
<a id="schema_StorageConfigResponse_Output"></a>
<a id="tocSstorageconfigresponse_output"></a>
<a id="tocsstorageconfigresponse_output"></a>

```json
{
  "fileSizeLimit": -9007199254740000,
  "features": {
    "imageTransformation": {
      "enabled": true
    },
    "s3Protocol": {
      "enabled": true
    },
    "purgeCache": {
      "enabled": true
    },
    "icebergCatalog": {
      "enabled": true,
      "maxNamespaces": 0,
      "maxTables": 0,
      "maxCatalogs": 0
    },
    "vectorBuckets": {
      "enabled": true,
      "maxBuckets": 0,
      "maxIndexes": 0
    }
  },
  "capabilities": {
    "list_v2": true,
    "iceberg_catalog": true,
    "object_versioning": true
  },
  "external": {
    "upstreamTarget": "main"
  },
  "migrationVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileSizeLimit|integer(int64)|true|none|none|
|features|object|true|none|none|
|capabilities|object|true|none|none|
|external|object|true|none|none|
|migrationVersion|string \| null|true|none|none|

<h2 id="tocS_UpdateStorageConfigBody">UpdateStorageConfigBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestorageconfigbody"></a>
<a id="schema_UpdateStorageConfigBody"></a>
<a id="tocSupdatestorageconfigbody"></a>
<a id="tocsupdatestorageconfigbody"></a>

```json
{
  "fileSizeLimit": 10485760,
  "features": {
    "imageTransformation": {
      "enabled": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileSizeLimit|integer(int64)|false|none|none|
|features|object|false|none|none|
|external|object|false|none|none|

<h2 id="tocS_V1PgbouncerConfigResponse_Output">V1PgbouncerConfigResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemav1pgbouncerconfigresponse_output"></a>
<a id="schema_V1PgbouncerConfigResponse_Output"></a>
<a id="tocSv1pgbouncerconfigresponse_output"></a>
<a id="tocsv1pgbouncerconfigresponse_output"></a>

```json
{
  "default_pool_size": -9007199254740000,
  "ignore_startup_parameters": "string",
  "max_client_conn": -9007199254740000,
  "pool_mode": "transaction",
  "connection_string": "string",
  "server_idle_timeout": -9007199254740000,
  "server_lifetime": -9007199254740000,
  "query_wait_timeout": -9007199254740000,
  "reserve_pool_size": -9007199254740000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default_pool_size|integer|false|none|none|
|ignore_startup_parameters|string|false|none|none|
|max_client_conn|integer|false|none|none|
|pool_mode|string|false|none|none|
|connection_string|string|false|none|none|
|server_idle_timeout|integer|false|none|none|
|server_lifetime|integer|false|none|none|
|query_wait_timeout|integer|false|none|none|
|reserve_pool_size|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|pool_mode|transaction|
|pool_mode|session|
|pool_mode|statement|

<h2 id="tocS_SupavisorConfigResponse_Output">SupavisorConfigResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemasupavisorconfigresponse_output"></a>
<a id="schema_SupavisorConfigResponse_Output"></a>
<a id="tocSsupavisorconfigresponse_output"></a>
<a id="tocssupavisorconfigresponse_output"></a>

```json
{
  "identifier": "string",
  "database_type": "PRIMARY",
  "is_using_scram_auth": true,
  "db_user": "string",
  "db_host": "string",
  "db_port": -9007199254740000,
  "db_name": "string",
  "connection_string": "string",
  "connectionString": "string",
  "default_pool_size": -9007199254740000,
  "max_client_conn": -9007199254740000,
  "pool_mode": "transaction"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|string|true|none|none|
|database_type|string|true|none|none|
|is_using_scram_auth|boolean|true|none|none|
|db_user|string|true|none|none|
|db_host|string|true|none|none|
|db_port|integer|true|none|none|
|db_name|string|true|none|none|
|connection_string|string|true|none|none|
|connectionString|string|true|none|Use connection_string instead|
|default_pool_size|integer \| null|true|none|none|
|max_client_conn|integer \| null|true|none|none|
|pool_mode|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|database_type|PRIMARY|
|database_type|READ_REPLICA|
|pool_mode|transaction|
|pool_mode|session|

<h2 id="tocS_UpdateSupavisorConfigBody">UpdateSupavisorConfigBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesupavisorconfigbody"></a>
<a id="schema_UpdateSupavisorConfigBody"></a>
<a id="tocSupdatesupavisorconfigbody"></a>
<a id="tocsupdatesupavisorconfigbody"></a>

```json
{
  "default_pool_size": 25,
  "pool_mode": "transaction"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default_pool_size|integer \| null|false|none|none|
|pool_mode|string|false|none|Dedicated pooler mode for the project|

#### Enumerated Values

|Property|Value|
|---|---|
|pool_mode|transaction|
|pool_mode|session|

<h2 id="tocS_UpdateSupavisorConfigResponse_Output">UpdateSupavisorConfigResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesupavisorconfigresponse_output"></a>
<a id="schema_UpdateSupavisorConfigResponse_Output"></a>
<a id="tocSupdatesupavisorconfigresponse_output"></a>
<a id="tocsupdatesupavisorconfigresponse_output"></a>

```json
{
  "default_pool_size": -9007199254740000,
  "pool_mode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default_pool_size|integer \| null|true|none|none|
|pool_mode|string|true|none|none|

<h2 id="tocS_PostgresConfigResponse_Output">PostgresConfigResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemapostgresconfigresponse_output"></a>
<a id="schema_PostgresConfigResponse_Output"></a>
<a id="tocSpostgresconfigresponse_output"></a>
<a id="tocspostgresconfigresponse_output"></a>

```json
{
  "effective_cache_size": "string",
  "logical_decoding_work_mem": "string",
  "pg_stat_statements.max": 100,
  "pg_net.batch_size": 0,
  "autovacuum_max_workers": 1,
  "autovacuum_work_mem": "string",
  "cron.log_statement": true,
  "log_autovacuum_min_duration": "string",
  "log_checkpoints": true,
  "log_connections": true,
  "log_disconnections": true,
  "log_duration": true,
  "log_lock_waits": true,
  "log_recovery_conflict_waits": true,
  "log_replication_commands": true,
  "log_startup_progress_interval": "string",
  "log_temp_files": "string",
  "maintenance_work_mem": "string",
  "track_activity_query_size": "string",
  "max_connections": 1,
  "max_locks_per_transaction": 10,
  "max_logical_replication_workers": 0,
  "max_parallel_maintenance_workers": 0,
  "max_parallel_workers": 0,
  "max_parallel_workers_per_gather": 0,
  "max_replication_slots": -9007199254740000,
  "max_slot_wal_keep_size": "string",
  "max_standby_archive_delay": "string",
  "max_standby_streaming_delay": "string",
  "max_sync_workers_per_subscription": 0,
  "max_wal_size": "string",
  "max_wal_senders": -9007199254740000,
  "max_worker_processes": 0,
  "session_replication_role": "origin",
  "shared_buffers": "string",
  "statement_timeout": "string",
  "track_commit_timestamp": true,
  "wal_keep_size": "string",
  "wal_sender_timeout": "string",
  "work_mem": "string",
  "checkpoint_timeout": "string",
  "hot_standby_feedback": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effective_cache_size|string|false|none|none|
|logical_decoding_work_mem|string|false|none|none|
|pg_stat_statements.max|integer|false|none|none|
|pg_net.batch_size|integer|false|none|none|
|autovacuum_max_workers|integer|false|none|none|
|autovacuum_work_mem|string|false|none|none|
|cron.log_statement|boolean|false|none|none|
|log_autovacuum_min_duration|string|false|none|Default unit: ms|
|log_checkpoints|boolean|false|none|none|
|log_connections|boolean|false|none|none|
|log_disconnections|boolean|false|none|none|
|log_duration|boolean|false|none|none|
|log_lock_waits|boolean|false|none|none|
|log_recovery_conflict_waits|boolean|false|none|none|
|log_replication_commands|boolean|false|none|none|
|log_startup_progress_interval|string|false|none|Default unit: ms|
|log_temp_files|string|false|none|none|
|maintenance_work_mem|string|false|none|none|
|track_activity_query_size|string|false|none|none|
|max_connections|integer|false|none|none|
|max_locks_per_transaction|integer|false|none|none|
|max_logical_replication_workers|integer|false|none|none|
|max_parallel_maintenance_workers|integer|false|none|none|
|max_parallel_workers|integer|false|none|none|
|max_parallel_workers_per_gather|integer|false|none|none|
|max_replication_slots|integer|false|none|none|
|max_slot_wal_keep_size|string|false|none|none|
|max_standby_archive_delay|string|false|none|none|
|max_standby_streaming_delay|string|false|none|none|
|max_sync_workers_per_subscription|integer|false|none|none|
|max_wal_size|string|false|none|none|
|max_wal_senders|integer|false|none|none|
|max_worker_processes|integer|false|none|none|
|session_replication_role|string|false|none|none|
|shared_buffers|string|false|none|none|
|statement_timeout|string|false|none|Default unit: ms|
|track_commit_timestamp|boolean|false|none|none|
|wal_keep_size|string|false|none|none|
|wal_sender_timeout|string|false|none|Default unit: ms|
|work_mem|string|false|none|none|
|checkpoint_timeout|string|false|none|Default unit: s|
|hot_standby_feedback|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|session_replication_role|origin|
|session_replication_role|replica|
|session_replication_role|local|

<h2 id="tocS_UpdatePostgresConfigBody">UpdatePostgresConfigBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepostgresconfigbody"></a>
<a id="schema_UpdatePostgresConfigBody"></a>
<a id="tocSupdatepostgresconfigbody"></a>
<a id="tocsupdatepostgresconfigbody"></a>

```json
{
  "max_connections": 120,
  "shared_buffers": "256MB",
  "work_mem": "4MB",
  "statement_timeout": "60000ms"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effective_cache_size|string|false|none|none|
|logical_decoding_work_mem|string|false|none|none|
|pg_stat_statements.max|integer|false|none|none|
|pg_net.batch_size|integer|false|none|none|
|autovacuum_max_workers|integer|false|none|none|
|autovacuum_work_mem|string|false|none|none|
|cron.log_statement|boolean|false|none|none|
|log_autovacuum_min_duration|string|false|none|Default unit: ms|
|log_checkpoints|boolean|false|none|none|
|log_connections|boolean|false|none|none|
|log_disconnections|boolean|false|none|none|
|log_duration|boolean|false|none|none|
|log_lock_waits|boolean|false|none|none|
|log_recovery_conflict_waits|boolean|false|none|none|
|log_replication_commands|boolean|false|none|none|
|log_startup_progress_interval|string|false|none|Default unit: ms|
|log_temp_files|string|false|none|none|
|maintenance_work_mem|string|false|none|none|
|track_activity_query_size|string|false|none|none|
|max_connections|integer|false|none|none|
|max_locks_per_transaction|integer|false|none|none|
|max_logical_replication_workers|integer|false|none|none|
|max_parallel_maintenance_workers|integer|false|none|none|
|max_parallel_workers|integer|false|none|none|
|max_parallel_workers_per_gather|integer|false|none|none|
|max_replication_slots|integer|false|none|none|
|max_slot_wal_keep_size|string|false|none|none|
|max_standby_archive_delay|string|false|none|none|
|max_standby_streaming_delay|string|false|none|none|
|max_sync_workers_per_subscription|integer|false|none|none|
|max_wal_size|string|false|none|none|
|max_wal_senders|integer|false|none|none|
|max_worker_processes|integer|false|none|none|
|session_replication_role|string|false|none|none|
|shared_buffers|string|false|none|none|
|statement_timeout|string|false|none|Default unit: ms|
|track_commit_timestamp|boolean|false|none|none|
|wal_keep_size|string|false|none|none|
|wal_sender_timeout|string|false|none|Default unit: ms|
|work_mem|string|false|none|none|
|checkpoint_timeout|string|false|none|Default unit: s|
|hot_standby_feedback|boolean|false|none|none|
|restart_database|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|session_replication_role|origin|
|session_replication_role|replica|
|session_replication_role|local|

<h2 id="tocS_RealtimeConfigResponse_Output">RealtimeConfigResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemarealtimeconfigresponse_output"></a>
<a id="schema_RealtimeConfigResponse_Output"></a>
<a id="tocSrealtimeconfigresponse_output"></a>
<a id="tocsrealtimeconfigresponse_output"></a>

```json
{
  "private_only": true,
  "connection_pool": 1,
  "postgres_changes_pool": 1,
  "max_concurrent_users": 1,
  "max_events_per_second": 1,
  "max_bytes_per_second": 1,
  "max_channels_per_client": 1,
  "max_joins_per_second": 1,
  "max_presence_events_per_second": 1,
  "max_payload_size_in_kb": 1,
  "suspend": true,
  "presence_enabled": true,
  "admin_suspended_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|private_only|boolean \| null|true|none|Whether to only allow private channels|
|connection_pool|integer \| null|true|none|Sets connection pool size for Realtime Authorization|
|postgres_changes_pool|integer \| null|true|none|Sets connection pool size used to create Postgres Changes subscriptions|
|max_concurrent_users|integer \| null|true|none|Sets maximum number of concurrent users rate limit|
|max_events_per_second|integer \| null|true|none|Sets maximum number of events per second rate per channel limit|
|max_bytes_per_second|integer \| null|true|none|Sets maximum number of bytes per second rate per channel limit|
|max_channels_per_client|integer \| null|true|none|Sets maximum number of channels per client rate limit|
|max_joins_per_second|integer \| null|true|none|Sets maximum number of joins per second rate limit|
|max_presence_events_per_second|integer \| null|true|none|Sets maximum number of presence events per second rate limit|
|max_payload_size_in_kb|integer \| null|true|none|Sets maximum number of payload size in KB rate limit|
|suspend|boolean \| null|true|none|Disables the Realtime service for this project when true. Set to false to re-enable it.|
|presence_enabled|boolean|true|none|Whether to enable presence|
|admin_suspended_at|string(date-time) \| null|true|none|If set, the Realtime service has been suspended by an admin.|

<h2 id="tocS_UpdateRealtimeConfigBody">UpdateRealtimeConfigBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterealtimeconfigbody"></a>
<a id="schema_UpdateRealtimeConfigBody"></a>
<a id="tocSupdaterealtimeconfigbody"></a>
<a id="tocsupdaterealtimeconfigbody"></a>

```json
{
  "private_only": false,
  "max_concurrent_users": 1000,
  "max_channels_per_client": 100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|private_only|boolean|false|none|Whether to only allow private channels|
|connection_pool|integer|false|none|Sets connection pool size for Realtime Authorization|
|postgres_changes_pool|integer|false|none|Sets connection pool size used to create Postgres Changes subscriptions|
|max_concurrent_users|integer|false|none|Sets maximum number of concurrent users rate limit|
|max_events_per_second|integer|false|none|Sets maximum number of events per second rate per channel limit|
|max_bytes_per_second|integer|false|none|Sets maximum number of bytes per second rate per channel limit|
|max_channels_per_client|integer|false|none|Sets maximum number of channels per client rate limit|
|max_joins_per_second|integer|false|none|Sets maximum number of joins per second rate limit|
|max_presence_events_per_second|integer|false|none|Sets maximum number of presence events per second rate limit|
|max_payload_size_in_kb|integer|false|none|Sets maximum number of payload size in KB rate limit|
|suspend|boolean|false|none|Disables the Realtime service for this project when true. Set to false to re-enable it.|
|presence_enabled|boolean|false|none|Whether to enable presence|

<h2 id="tocS_CreateProviderBody">CreateProviderBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateproviderbody"></a>
<a id="schema_CreateProviderBody"></a>
<a id="tocScreateproviderbody"></a>
<a id="tocscreateproviderbody"></a>

```json
{
  "type": "saml",
  "metadata_url": "https://sso.acme.com/metadata.xml",
  "domains": [
    "acme.com"
  ],
  "attribute_mapping": {
    "keys": {
      "email": {
        "name": "email"
      },
      "first_name": {
        "name": "first_name"
      },
      "last_name": {
        "name": "last_name"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|What type of provider will be created|
|metadata_xml|string|false|none|none|
|metadata_url|string|false|none|none|
|domains|[string]|false|none|none|
|attribute_mapping|object|false|none|none|
|name_id_format|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|saml|
|name_id_format|urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified|
|name_id_format|urn:oasis:names:tc:SAML:2.0:nameid-format:transient|
|name_id_format|urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress|
|name_id_format|urn:oasis:names:tc:SAML:2.0:nameid-format:persistent|

<h2 id="tocS_CreateProviderResponse_Output">CreateProviderResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemacreateproviderresponse_output"></a>
<a id="schema_CreateProviderResponse_Output"></a>
<a id="tocScreateproviderresponse_output"></a>
<a id="tocscreateproviderresponse_output"></a>

```json
{
  "id": "string",
  "saml": {
    "entity_id": "string",
    "metadata_url": "string",
    "metadata_xml": "string",
    "attribute_mapping": {
      "keys": {
        "property1": {
          "name": "string",
          "names": [
            "string"
          ],
          "array": true,
          "default": {}
        },
        "property2": {
          "name": "string",
          "names": [
            "string"
          ],
          "array": true,
          "default": {}
        }
      }
    },
    "name_id_format": "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"
  },
  "domains": [
    {
      "domain": "string",
      "created_at": "string",
      "updated_at": "string"
    }
  ],
  "created_at": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|saml|object|false|none|none|
|domains|[object]|false|none|none|
|created_at|string|false|none|none|
|updated_at|string|false|none|none|

<h2 id="tocS_ListProvidersResponse_Output">ListProvidersResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemalistprovidersresponse_output"></a>
<a id="schema_ListProvidersResponse_Output"></a>
<a id="tocSlistprovidersresponse_output"></a>
<a id="tocslistprovidersresponse_output"></a>

```json
{
  "items": [
    {
      "id": "string",
      "saml": {
        "entity_id": "string",
        "metadata_url": "string",
        "metadata_xml": "string",
        "attribute_mapping": {
          "keys": {
            "property1": {
              "name": "string",
              "names": [
                "string"
              ],
              "array": true,
              "default": {}
            },
            "property2": {
              "name": "string",
              "names": [
                "string"
              ],
              "array": true,
              "default": {}
            }
          }
        },
        "name_id_format": "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"
      },
      "domains": [
        {
          "domain": "string",
          "created_at": "string",
          "updated_at": "string"
        }
      ],
      "created_at": "string",
      "updated_at": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|none|

<h2 id="tocS_GetProviderResponse_Output">GetProviderResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemagetproviderresponse_output"></a>
<a id="schema_GetProviderResponse_Output"></a>
<a id="tocSgetproviderresponse_output"></a>
<a id="tocsgetproviderresponse_output"></a>

```json
{
  "id": "string",
  "saml": {
    "entity_id": "string",
    "metadata_url": "string",
    "metadata_xml": "string",
    "attribute_mapping": {
      "keys": {
        "property1": {
          "name": "string",
          "names": [
            "string"
          ],
          "array": true,
          "default": {}
        },
        "property2": {
          "name": "string",
          "names": [
            "string"
          ],
          "array": true,
          "default": {}
        }
      }
    },
    "name_id_format": "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"
  },
  "domains": [
    {
      "domain": "string",
      "created_at": "string",
      "updated_at": "string"
    }
  ],
  "created_at": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|saml|object|false|none|none|
|domains|[object]|false|none|none|
|created_at|string|false|none|none|
|updated_at|string|false|none|none|

<h2 id="tocS_UpdateProviderBody">UpdateProviderBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateproviderbody"></a>
<a id="schema_UpdateProviderBody"></a>
<a id="tocSupdateproviderbody"></a>
<a id="tocsupdateproviderbody"></a>

```json
{
  "metadata_url": "https://sso.acme.com/metadata.xml",
  "domains": [
    "acme.com",
    "contractors.acme.com"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata_xml|string|false|none|none|
|metadata_url|string|false|none|none|
|domains|[string]|false|none|none|
|attribute_mapping|object|false|none|none|
|name_id_format|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name_id_format|urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified|
|name_id_format|urn:oasis:names:tc:SAML:2.0:nameid-format:transient|
|name_id_format|urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress|
|name_id_format|urn:oasis:names:tc:SAML:2.0:nameid-format:persistent|

<h2 id="tocS_UpdateProviderResponse_Output">UpdateProviderResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemaupdateproviderresponse_output"></a>
<a id="schema_UpdateProviderResponse_Output"></a>
<a id="tocSupdateproviderresponse_output"></a>
<a id="tocsupdateproviderresponse_output"></a>

```json
{
  "id": "string",
  "saml": {
    "entity_id": "string",
    "metadata_url": "string",
    "metadata_xml": "string",
    "attribute_mapping": {
      "keys": {
        "property1": {
          "name": "string",
          "names": [
            "string"
          ],
          "array": true,
          "default": {}
        },
        "property2": {
          "name": "string",
          "names": [
            "string"
          ],
          "array": true,
          "default": {}
        }
      }
    },
    "name_id_format": "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"
  },
  "domains": [
    {
      "domain": "string",
      "created_at": "string",
      "updated_at": "string"
    }
  ],
  "created_at": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|saml|object|false|none|none|
|domains|[object]|false|none|none|
|created_at|string|false|none|none|
|updated_at|string|false|none|none|

<h2 id="tocS_DeleteProviderResponse_Output">DeleteProviderResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemadeleteproviderresponse_output"></a>
<a id="schema_DeleteProviderResponse_Output"></a>
<a id="tocSdeleteproviderresponse_output"></a>
<a id="tocsdeleteproviderresponse_output"></a>

```json
{
  "id": "string",
  "saml": {
    "entity_id": "string",
    "metadata_url": "string",
    "metadata_xml": "string",
    "attribute_mapping": {
      "keys": {
        "property1": {
          "name": "string",
          "names": [
            "string"
          ],
          "array": true,
          "default": {}
        },
        "property2": {
          "name": "string",
          "names": [
            "string"
          ],
          "array": true,
          "default": {}
        }
      }
    },
    "name_id_format": "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"
  },
  "domains": [
    {
      "domain": "string",
      "created_at": "string",
      "updated_at": "string"
    }
  ],
  "created_at": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|saml|object|false|none|none|
|domains|[object]|false|none|none|
|created_at|string|false|none|none|
|updated_at|string|false|none|none|

<h2 id="tocS_V1BackupsResponse_Output">V1BackupsResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemav1backupsresponse_output"></a>
<a id="schema_V1BackupsResponse_Output"></a>
<a id="tocSv1backupsresponse_output"></a>
<a id="tocsv1backupsresponse_output"></a>

```json
{
  "region": "string",
  "walg_enabled": true,
  "pitr_enabled": true,
  "backups": [
    {
      "id": -9007199254740000,
      "is_physical_backup": true,
      "status": "COMPLETED",
      "inserted_at": "string"
    }
  ],
  "physical_backup_data": {
    "earliest_physical_backup_date_unix": -9007199254740000,
    "latest_physical_backup_date_unix": -9007199254740000
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|region|string|true|none|none|
|walg_enabled|boolean|true|none|none|
|pitr_enabled|boolean|true|none|none|
|backups|[object]|true|none|none|
|physical_backup_data|object|true|none|none|

<h2 id="tocS_V1RestorePitrBody">V1RestorePitrBody</h2>
<!-- backwards compatibility -->
<a id="schemav1restorepitrbody"></a>
<a id="schema_V1RestorePitrBody"></a>
<a id="tocSv1restorepitrbody"></a>
<a id="tocsv1restorepitrbody"></a>

```json
{
  "recovery_time_target_unix": 1740787200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recovery_time_target_unix|integer(int64)|true|none|none|

<h2 id="tocS_V1RestorePointPostBody">V1RestorePointPostBody</h2>
<!-- backwards compatibility -->
<a id="schemav1restorepointpostbody"></a>
<a id="schema_V1RestorePointPostBody"></a>
<a id="tocSv1restorepointpostbody"></a>
<a id="tocsv1restorepointpostbody"></a>

```json
{
  "name": "before-upgrade"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|

<h2 id="tocS_V1RestorePointResponse">V1RestorePointResponse</h2>
<!-- backwards compatibility -->
<a id="schemav1restorepointresponse"></a>
<a id="schema_V1RestorePointResponse"></a>
<a id="tocSv1restorepointresponse"></a>
<a id="tocsv1restorepointresponse"></a>

```json
{
  "name": "string",
  "status": "AVAILABLE",
  "completed_on": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|status|string|true|none|none|
|completed_on|string(date-time) \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|AVAILABLE|
|status|PENDING|
|status|REMOVED|
|status|FAILED|

<h2 id="tocS_V1RestoreBackupBody">V1RestoreBackupBody</h2>
<!-- backwards compatibility -->
<a id="schemav1restorebackupbody"></a>
<a id="schema_V1RestoreBackupBody"></a>
<a id="tocSv1restorebackupbody"></a>
<a id="tocsv1restorebackupbody"></a>

```json
{
  "id": 12345
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|

<h2 id="tocS_V1BackupScheduleResponse_Output">V1BackupScheduleResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemav1backupscheduleresponse_output"></a>
<a id="schema_V1BackupScheduleResponse_Output"></a>
<a id="tocSv1backupscheduleresponse_output"></a>
<a id="tocsv1backupscheduleresponse_output"></a>

```json
{
  "schedule_for": "04:00:00",
  "updated_at": "2026-05-04T14:40:44+00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedule_for|string|true|none|Time of day to schedule daily backups, in UTC. Format: HH:MM:SS.|
|updated_at|string(date-time)|true|none|Timestamp of when the backup schedule was last updated.|

<h2 id="tocS_V1UpdateBackupScheduleBody">V1UpdateBackupScheduleBody</h2>
<!-- backwards compatibility -->
<a id="schemav1updatebackupschedulebody"></a>
<a id="schema_V1UpdateBackupScheduleBody"></a>
<a id="tocSv1updatebackupschedulebody"></a>
<a id="tocsv1updatebackupschedulebody"></a>

```json
{
  "schedule_for": "04:00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedule_for|string|true|none|Time of day to schedule daily backups, in UTC. Format: HH:MM:SS.|

<h2 id="tocS_V1UndoBody">V1UndoBody</h2>
<!-- backwards compatibility -->
<a id="schemav1undobody"></a>
<a id="schema_V1UndoBody"></a>
<a id="tocSv1undobody"></a>
<a id="tocsv1undobody"></a>

```json
{
  "name": "before-upgrade"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|

<h2 id="tocS_V1ListEntitlementsResponse_Output">V1ListEntitlementsResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemav1listentitlementsresponse_output"></a>
<a id="schema_V1ListEntitlementsResponse_Output"></a>
<a id="tocSv1listentitlementsresponse_output"></a>
<a id="tocsv1listentitlementsresponse_output"></a>

```json
{
  "entitlements": [
    {
      "feature": {
        "key": "instances.compute_update_available_sizes",
        "type": "boolean"
      },
      "hasAccess": true,
      "type": "boolean",
      "config": {
        "enabled": true
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entitlements|[object]|true|none|none|

<h2 id="tocS_V1OrganizationMemberResponse_Output">V1OrganizationMemberResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemav1organizationmemberresponse_output"></a>
<a id="schema_V1OrganizationMemberResponse_Output"></a>
<a id="tocSv1organizationmemberresponse_output"></a>
<a id="tocsv1organizationmemberresponse_output"></a>

```json
{
  "user_id": "string",
  "user_name": "string",
  "email": "string",
  "role_name": "string",
  "mfa_enabled": true,
  "avatar_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|true|none|none|
|user_name|string|true|none|none|
|email|string|false|none|none|
|role_name|string|false|none|none|
|mfa_enabled|boolean|true|none|none|
|avatar_url|string \| null|true|none|none|

<h2 id="tocS_V1OrganizationSlugResponse_Output">V1OrganizationSlugResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemav1organizationslugresponse_output"></a>
<a id="schema_V1OrganizationSlugResponse_Output"></a>
<a id="tocSv1organizationslugresponse_output"></a>
<a id="tocsv1organizationslugresponse_output"></a>

```json
{
  "id": "string",
  "name": "string",
  "plan": "free",
  "opt_in_tags": [
    "AI_SQL_GENERATOR_OPT_IN"
  ],
  "allowed_release_channels": [
    "internal"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|plan|string|false|none|none|
|opt_in_tags|[string]|true|none|none|
|allowed_release_channels|[string]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|plan|free|
|plan|pro|
|plan|team|
|plan|enterprise|
|plan|platform|
|opt_in_tags|AI_SQL_GENERATOR_OPT_IN|
|opt_in_tags|AI_DATA_GENERATOR_OPT_IN|
|opt_in_tags|AI_LOG_GENERATOR_OPT_IN|
|allowed_release_channels|internal|
|allowed_release_channels|alpha|
|allowed_release_channels|beta|
|allowed_release_channels|ga|
|allowed_release_channels|withdrawn|
|allowed_release_channels|preview|

<h2 id="tocS_OrganizationProjectClaimResponse_Output">OrganizationProjectClaimResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationprojectclaimresponse_output"></a>
<a id="schema_OrganizationProjectClaimResponse_Output"></a>
<a id="tocSorganizationprojectclaimresponse_output"></a>
<a id="tocsorganizationprojectclaimresponse_output"></a>

```json
{
  "project": {
    "ref": "string",
    "name": "string"
  },
  "preview": {
    "valid": true,
    "warnings": [
      {
        "key": "string",
        "message": "string"
      }
    ],
    "errors": [
      {
        "key": "string",
        "message": "string"
      }
    ],
    "info": [
      {
        "key": "string",
        "message": "string"
      }
    ],
    "members_exceeding_free_project_limit": [
      {
        "name": "string",
        "limit": 0
      }
    ],
    "source_subscription_plan": "free",
    "target_subscription_plan": "free"
  },
  "expires_at": "string",
  "created_at": "string",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project|object|true|none|none|
|preview|object|true|none|none|
|expires_at|string|true|none|none|
|created_at|string|true|none|none|
|created_by|string(uuid)|true|none|none|

<h2 id="tocS_OrganizationProjectsResponse_Output">OrganizationProjectsResponse_Output</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationprojectsresponse_output"></a>
<a id="schema_OrganizationProjectsResponse_Output"></a>
<a id="tocSorganizationprojectsresponse_output"></a>
<a id="tocsorganizationprojectsresponse_output"></a>

```json
{
  "projects": [
    {
      "ref": "string",
      "name": "string",
      "cloud_provider": "string",
      "region": "string",
      "is_branch": true,
      "status": "INACTIVE",
      "inserted_at": "string",
      "databases": [
        {
          "infra_compute_size": "pico",
          "region": "string",
          "status": "ACTIVE_HEALTHY",
          "cloud_provider": "string",
          "identifier": "string",
          "type": "PRIMARY",
          "disk_volume_size_gb": 0,
          "disk_type": "gp3",
          "disk_throughput_mbps": 0,
          "disk_last_modified_at": "string"
        }
      ]
    }
  ],
  "pagination": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projects|[object]|true|none|none|
|pagination|object|true|none|none|
