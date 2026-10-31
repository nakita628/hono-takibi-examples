<h1 id="wiremock">WireMock v2.35.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.apis.guru/">https://api.apis.guru/</a>

<a href="http://wiremock.org/docs/">WireMock user documentation</a>

<h1 id="wiremock-stub-mappings">Stub Mappings</h1>

Operations on stub mappings

<a href="http://wiremock.org/docs/stubbing/">User documentation</a>

## Get all stub mappings

> Code samples

```bash
curl https://example.com/__admin/mappings \
  -H 'Accept: application/json'
```

`GET /__admin/mappings`

<h3 id="get-all-stub-mappings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The maximum number of results to return|
|offset|query|integer|false|The start index of the results to return|

> Example responses

> 200 Response

```json
{
  "mappings": [
    {
      "id": "76ada7b0-49ae-4229-91c4-396a36f18e09",
      "request": {
        "headers": {
          "Accept": {
            "equalTo": "application/json"
          }
        },
        "method": "GET",
        "url": "/search?q=things"
      },
      "response": {
        "headers": {
          "Content-Type": "application/json"
        },
        "jsonBody": [
          "thing1",
          "thing2"
        ],
        "status": 200
      },
      "uuid": "76ada7b0-49ae-4229-91c4-396a36f18e09"
    },
    {
      "request": {
        "bodyPatterns": [
          {
            "equalToXml": "<stuff />"
          }
        ],
        "method": "POST",
        "urlPath": "/some/things"
      },
      "response": {
        "status": 201
      }
    }
  ],
  "meta": {
    "total": 2
  }
}
```

<h3 id="get-all-stub-mappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All stub mappings|Inline|

<h3 id="get-all-stub-mappings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mappings|[object]|false|none|none|
|» id|string|false|none|This stub mapping's unique identifier|
|» metadata|object|false|none|Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.|
|» name|string|false|none|The stub mapping's name|
|» newScenarioState|string|false|none|The new state for the scenario to be updated to after this stub is served.|
|» persistent|boolean|false|none|Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.|
|» postServeActions|object|false|none|A map of the names of post serve action extensions to trigger and their parameters.|
|» priority|integer|false|none|This stub mapping's priority relative to others. 1 is highest.|
|» request|object|false|none|none|
|» » basicAuthCredentials|object|false|none|Pre-emptive basic auth credentials to match against|
|» » » password|string|true|none|none|
|» » » username|string|true|none|none|
|» » bodyPatterns|[object]|false|none|Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » cookies|object|false|none|Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » headers|object|false|none|Header patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » method|string|false|none|The HTTP request method e.g. GET|
|» » queryParameters|object|false|none|Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » url|string|false|none|The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPath|string|false|none|The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPathPattern|string|false|none|The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPattern|string|false|none|The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» requiredScenarioState|string|false|none|The required state of the scenario in order for this stub to be matched.|
|» response|object|false|none|none|
|» » additionalProxyRequestHeaders|object|false|none|Extra request headers to send when proxying to another host.|
|» » base64Body|string|false|none|The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » body|string|false|none|The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » bodyFileName|string|false|none|The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » delayDistribution|object|false|none|The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.|
|» » » *oneOf*|object|false|none|Log normal randomly distributed response delay.|
|» » » median|integer|false|none|none|
|» » » sigma|number|false|none|none|
|» » » type|string|false|none|none|
|» » » *oneOf*|object|false|none|Uniformly distributed random response delay.|
|» » » lower|integer|false|none|none|
|» » » type|string|false|none|none|
|» » » upper|integer|false|none|none|
|» » fault|string|false|none|The fault to apply (instead of a full, valid response).|
|» » fixedDelayMilliseconds|integer|false|none|Number of milliseconds to delay be before sending the response.|
|» » fromConfiguredStub|boolean|false|none|Read-only flag indicating false if this was the default, unmatched response. Not present otherwise.|
|» » headers|object|false|none|Map of response headers to send|
|» » jsonBody|object|false|none|The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » proxyBaseUrl|string|false|none|The base URL of the target to proxy matching requests to.|
|» » status|integer|false|none|The HTTP status code to be returned|
|» » statusMessage|string|false|none|The HTTP status message to be returned|
|» » transformerParameters|object|false|none|Parameters to apply to response transformers.|
|» » transformers|[string]|false|none|List of names of transformers to apply to this response.|
|» scenarioName|string|false|none|The name of the scenario that this stub mapping is part of|
|» uuid|string|false|none|Alias for the id|
|meta|object|false|none|none|
|» total|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » » type|lognormal|
|» » » type|uniform|
|» » fault|CONNECTION_RESET_BY_PEER|
|» » fault|EMPTY_RESPONSE|
|» » fault|MALFORMED_RESPONSE_CHUNK|
|» » fault|RANDOM_DATA_THEN_CLOSE|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new stub mapping

> Code samples

```bash
curl https://example.com/__admin/mappings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "request": {
      "method": "GET",
      "url": "/some/thing"
    },
    "response": {
      "body": "Hello world!",
      "headers": {
        "Content-Type": "text/plain"
      },
      "status": 200
    }
  }'
```

`POST /__admin/mappings`

> Body parameter

```json
{
  "request": {
    "method": "GET",
    "url": "/some/thing"
  },
  "response": {
    "body": "Hello world!",
    "headers": {
      "Content-Type": "text/plain"
    },
    "status": 200
  }
}
```

<h3 id="create-a-new-stub-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|false|This stub mapping's unique identifier|
|» metadata|body|object|false|Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.|
|» name|body|string|false|The stub mapping's name|
|» newScenarioState|body|string|false|The new state for the scenario to be updated to after this stub is served.|
|» persistent|body|boolean|false|Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.|
|» postServeActions|body|object|false|A map of the names of post serve action extensions to trigger and their parameters.|
|» priority|body|integer|false|This stub mapping's priority relative to others. 1 is highest.|
|» request|body|object|false|none|
|» » basicAuthCredentials|body|object|false|Pre-emptive basic auth credentials to match against|
|» » » password|body|string|true|none|
|» » » username|body|string|true|none|
|» » bodyPatterns|body|[object]|false|Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » cookies|body|object|false|Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » headers|body|object|false|Header patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » method|body|string|false|The HTTP request method e.g. GET|
|» » queryParameters|body|object|false|Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » url|body|string|false|The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPath|body|string|false|The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPathPattern|body|string|false|The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPattern|body|string|false|The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» requiredScenarioState|body|string|false|The required state of the scenario in order for this stub to be matched.|
|» response|body|object|false|none|
|» » additionalProxyRequestHeaders|body|object|false|Extra request headers to send when proxying to another host.|
|» » base64Body|body|string|false|The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » body|body|string|false|The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » bodyFileName|body|string|false|The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » delayDistribution|body|object|false|The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.|
|» » » *oneOf*|body|object|false|Log normal randomly distributed response delay.|
|» » » median|body|integer|false|none|
|» » » sigma|body|number|false|none|
|» » » type|body|string|false|none|
|» » » *oneOf*|body|object|false|Uniformly distributed random response delay.|
|» » » lower|body|integer|false|none|
|» » » type|body|string|false|none|
|» » » upper|body|integer|false|none|
|» » fault|body|string|false|The fault to apply (instead of a full, valid response).|
|» » fixedDelayMilliseconds|body|integer|false|Number of milliseconds to delay be before sending the response.|
|» » fromConfiguredStub|body|boolean|false|Read-only flag indicating false if this was the default, unmatched response. Not present otherwise.|
|» » headers|body|object|false|Map of response headers to send|
|» » jsonBody|body|object|false|The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » proxyBaseUrl|body|string|false|The base URL of the target to proxy matching requests to.|
|» » status|body|integer|false|The HTTP status code to be returned|
|» » statusMessage|body|string|false|The HTTP status message to be returned|
|» » transformerParameters|body|object|false|Parameters to apply to response transformers.|
|» » transformers|body|[string]|false|List of names of transformers to apply to this response.|
|» scenarioName|body|string|false|The name of the scenario that this stub mapping is part of|
|» uuid|body|string|false|Alias for the id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » type|lognormal|
|» » » type|uniform|
|» » fault|CONNECTION_RESET_BY_PEER|
|» » fault|EMPTY_RESPONSE|
|» » fault|MALFORMED_RESPONSE_CHUNK|
|» » fault|RANDOM_DATA_THEN_CLOSE|

> Example responses

> 201 Response

```json
{
  "id": "76ada7b0-49ae-4229-91c4-396a36f18e09",
  "priority": 3,
  "request": {
    "headers": {
      "Accept": {
        "equalTo": "text/plain"
      }
    },
    "method": "GET",
    "url": "/some/thing"
  },
  "response": {
    "body": "Hello world!",
    "headers": {
      "Content-Type": "text/plain"
    },
    "status": 200
  }
}
```

<h3 id="create-a-new-stub-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The stub mapping|Inline|

<h3 id="create-a-new-stub-mapping-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|This stub mapping's unique identifier|
|metadata|object|false|none|Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.|
|name|string|false|none|The stub mapping's name|
|newScenarioState|string|false|none|The new state for the scenario to be updated to after this stub is served.|
|persistent|boolean|false|none|Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.|
|postServeActions|object|false|none|A map of the names of post serve action extensions to trigger and their parameters.|
|priority|integer|false|none|This stub mapping's priority relative to others. 1 is highest.|
|request|object|false|none|none|
|» basicAuthCredentials|object|false|none|Pre-emptive basic auth credentials to match against|
|» » password|string|true|none|none|
|» » username|string|true|none|none|
|» bodyPatterns|[object]|false|none|Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» cookies|object|false|none|Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» headers|object|false|none|Header patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» method|string|false|none|The HTTP request method e.g. GET|
|» queryParameters|object|false|none|Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» url|string|false|none|The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» urlPath|string|false|none|The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» urlPathPattern|string|false|none|The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» urlPattern|string|false|none|The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|requiredScenarioState|string|false|none|The required state of the scenario in order for this stub to be matched.|
|response|object|false|none|none|
|» additionalProxyRequestHeaders|object|false|none|Extra request headers to send when proxying to another host.|
|» base64Body|string|false|none|The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» body|string|false|none|The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» bodyFileName|string|false|none|The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» delayDistribution|object|false|none|The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.|
|» » *oneOf*|object|false|none|Log normal randomly distributed response delay.|
|» » median|integer|false|none|none|
|» » sigma|number|false|none|none|
|» » type|string|false|none|none|
|» » *oneOf*|object|false|none|Uniformly distributed random response delay.|
|» » lower|integer|false|none|none|
|» » type|string|false|none|none|
|» » upper|integer|false|none|none|
|» fault|string|false|none|The fault to apply (instead of a full, valid response).|
|» fixedDelayMilliseconds|integer|false|none|Number of milliseconds to delay be before sending the response.|
|» fromConfiguredStub|boolean|false|none|Read-only flag indicating false if this was the default, unmatched response. Not present otherwise.|
|» headers|object|false|none|Map of response headers to send|
|» jsonBody|object|false|none|The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» proxyBaseUrl|string|false|none|The base URL of the target to proxy matching requests to.|
|» status|integer|false|none|The HTTP status code to be returned|
|» statusMessage|string|false|none|The HTTP status message to be returned|
|» transformerParameters|object|false|none|Parameters to apply to response transformers.|
|» transformers|[string]|false|none|List of names of transformers to apply to this response.|
|scenarioName|string|false|none|The name of the scenario that this stub mapping is part of|
|uuid|string|false|none|Alias for the id|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|lognormal|
|» » type|uniform|
|» fault|CONNECTION_RESET_BY_PEER|
|» fault|EMPTY_RESPONSE|
|» fault|MALFORMED_RESPONSE_CHUNK|
|» fault|RANDOM_DATA_THEN_CLOSE|

<aside class="success">
This operation does not require authentication
</aside>

## Delete all stub mappings

> Code samples

```bash
curl https://example.com/__admin/mappings \
  -X DELETE
```

`DELETE /__admin/mappings`

<h3 id="delete-all-stub-mappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully deleted|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/__admin/mappings/find-by-metadata

> Code samples

```bash
curl https://example.com/__admin/mappings/find-by-metadata \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "matchesJsonPath": {
      "equalToJson": "{ \"inner\": 42 }",
      "expression": "$.outer"
    }
  }'
```

`POST /__admin/mappings/find-by-metadata`

Find stubs by matching on their metadata

> Body parameter

```json
{
  "matchesJsonPath": {
    "equalToJson": "{ \"inner\": 42 }",
    "expression": "$.outer"
  }
}
```

<h3 id="postadminmappingsfind-by-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» *oneOf*|body|object|false|none|
|» caseInsensitive|body|boolean|false|none|
|» equalTo|body|boolean|true|none|
|» *oneOf*|body|object|false|none|
|» contains|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» matches|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» doesNotMatch|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» equalToJson|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» ignoreArrayOrder|body|boolean|false|none|
|» ignoreExtraElements|body|boolean|false|none|
|» matchesJsonPath|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» equalToXml|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» matchesXpath|body|string|true|none|
|» namespaces|body|object|false|none|
|» valuePattern|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "mappings": [
    {
      "id": "76ada7b0-49ae-4229-91c4-396a36f18e09",
      "request": {
        "headers": {
          "Accept": {
            "equalTo": "application/json"
          }
        },
        "method": "GET",
        "url": "/search?q=things"
      },
      "response": {
        "headers": {
          "Content-Type": "application/json"
        },
        "jsonBody": [
          "thing1",
          "thing2"
        ],
        "status": 200
      },
      "uuid": "76ada7b0-49ae-4229-91c4-396a36f18e09"
    },
    {
      "request": {
        "bodyPatterns": [
          {
            "equalToXml": "<stuff />"
          }
        ],
        "method": "POST",
        "urlPath": "/some/things"
      },
      "response": {
        "status": 201
      }
    }
  ],
  "meta": {
    "total": 2
  }
}
```

<h3 id="postadminmappingsfind-by-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Matched stub mappings|Inline|

<h3 id="postadminmappingsfind-by-metadata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mappings|[object]|false|none|none|
|» id|string|false|none|This stub mapping's unique identifier|
|» metadata|object|false|none|Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.|
|» name|string|false|none|The stub mapping's name|
|» newScenarioState|string|false|none|The new state for the scenario to be updated to after this stub is served.|
|» persistent|boolean|false|none|Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.|
|» postServeActions|object|false|none|A map of the names of post serve action extensions to trigger and their parameters.|
|» priority|integer|false|none|This stub mapping's priority relative to others. 1 is highest.|
|» request|object|false|none|none|
|» » basicAuthCredentials|object|false|none|Pre-emptive basic auth credentials to match against|
|» » » password|string|true|none|none|
|» » » username|string|true|none|none|
|» » bodyPatterns|[object]|false|none|Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » cookies|object|false|none|Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » headers|object|false|none|Header patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » method|string|false|none|The HTTP request method e.g. GET|
|» » queryParameters|object|false|none|Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » url|string|false|none|The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPath|string|false|none|The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPathPattern|string|false|none|The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPattern|string|false|none|The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» requiredScenarioState|string|false|none|The required state of the scenario in order for this stub to be matched.|
|» response|object|false|none|none|
|» » additionalProxyRequestHeaders|object|false|none|Extra request headers to send when proxying to another host.|
|» » base64Body|string|false|none|The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » body|string|false|none|The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » bodyFileName|string|false|none|The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » delayDistribution|object|false|none|The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.|
|» » » *oneOf*|object|false|none|Log normal randomly distributed response delay.|
|» » » median|integer|false|none|none|
|» » » sigma|number|false|none|none|
|» » » type|string|false|none|none|
|» » » *oneOf*|object|false|none|Uniformly distributed random response delay.|
|» » » lower|integer|false|none|none|
|» » » type|string|false|none|none|
|» » » upper|integer|false|none|none|
|» » fault|string|false|none|The fault to apply (instead of a full, valid response).|
|» » fixedDelayMilliseconds|integer|false|none|Number of milliseconds to delay be before sending the response.|
|» » fromConfiguredStub|boolean|false|none|Read-only flag indicating false if this was the default, unmatched response. Not present otherwise.|
|» » headers|object|false|none|Map of response headers to send|
|» » jsonBody|object|false|none|The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » proxyBaseUrl|string|false|none|The base URL of the target to proxy matching requests to.|
|» » status|integer|false|none|The HTTP status code to be returned|
|» » statusMessage|string|false|none|The HTTP status message to be returned|
|» » transformerParameters|object|false|none|Parameters to apply to response transformers.|
|» » transformers|[string]|false|none|List of names of transformers to apply to this response.|
|» scenarioName|string|false|none|The name of the scenario that this stub mapping is part of|
|» uuid|string|false|none|Alias for the id|
|meta|object|false|none|none|
|» total|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » » type|lognormal|
|» » » type|uniform|
|» » fault|CONNECTION_RESET_BY_PEER|
|» » fault|EMPTY_RESPONSE|
|» » fault|MALFORMED_RESPONSE_CHUNK|
|» » fault|RANDOM_DATA_THEN_CLOSE|

<aside class="success">
This operation does not require authentication
</aside>

## Import stub mappings

> Code samples

```bash
curl https://example.com/__admin/mappings/import \
  -X POST
```

`POST /__admin/mappings/import`

Import given stub mappings to the backing store

<h3 id="import-stub-mappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully imported|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete stub mappings matching metadata

> Code samples

```bash
curl https://example.com/__admin/mappings/remove-by-metadata \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "matchesJsonPath": {
      "equalToJson": "{ \"inner\": 42 }",
      "expression": "$.outer"
    }
  }'
```

`POST /__admin/mappings/remove-by-metadata`

> Body parameter

```json
{
  "matchesJsonPath": {
    "equalToJson": "{ \"inner\": 42 }",
    "expression": "$.outer"
  }
}
```

<h3 id="delete-stub-mappings-matching-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» caseInsensitive|body|boolean|false|none|
|» equalTo|body|boolean|true|none|
|» *oneOf*|body|object|false|none|
|» contains|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» matches|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» doesNotMatch|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» equalToJson|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» ignoreArrayOrder|body|boolean|false|none|
|» ignoreExtraElements|body|boolean|false|none|
|» matchesJsonPath|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» equalToXml|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» matchesXpath|body|string|true|none|
|» namespaces|body|object|false|none|
|» valuePattern|body|object|false|none|

<h3 id="delete-stub-mappings-matching-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The stub mappings were successfully removed|None|

<aside class="success">
This operation does not require authentication
</aside>

## Reset stub mappings

> Code samples

```bash
curl https://example.com/__admin/mappings/reset \
  -X POST
```

`POST /__admin/mappings/reset`

Restores stub mappings to the defaults defined back in the backing store

<h3 id="reset-stub-mappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully reset|None|

<aside class="success">
This operation does not require authentication
</aside>

## Persist stub mappings

> Code samples

```bash
curl https://example.com/__admin/mappings/save \
  -X POST
```

`POST /__admin/mappings/save`

Save all persistent stub mappings to the backing store

<h3 id="persist-stub-mappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully saved|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get stub mapping by ID

> Code samples

```bash
curl https://example.com/__admin/mappings/730d3e32-d098-4169-a20c-554c3bedce58 \
  -H 'Accept: application/json'
```

`GET /__admin/mappings/{stubMappingId}`

<h3 id="get-stub-mapping-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stubMappingId|path|string|true|The UUID of stub mapping|

> Example responses

> 200 Response

```json
{
  "id": "76ada7b0-49ae-4229-91c4-396a36f18e09",
  "priority": 3,
  "request": {
    "headers": {
      "Accept": {
        "equalTo": "text/plain"
      }
    },
    "method": "GET",
    "url": "/some/thing"
  },
  "response": {
    "body": "Hello world!",
    "headers": {
      "Content-Type": "text/plain"
    },
    "status": 200
  }
}
```

<h3 id="get-stub-mapping-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The stub mapping|Inline|
|404|Not Found|Stub mapping not found|None|

<h3 id="get-stub-mapping-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|This stub mapping's unique identifier|
|metadata|object|false|none|Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.|
|name|string|false|none|The stub mapping's name|
|newScenarioState|string|false|none|The new state for the scenario to be updated to after this stub is served.|
|persistent|boolean|false|none|Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.|
|postServeActions|object|false|none|A map of the names of post serve action extensions to trigger and their parameters.|
|priority|integer|false|none|This stub mapping's priority relative to others. 1 is highest.|
|request|object|false|none|none|
|» basicAuthCredentials|object|false|none|Pre-emptive basic auth credentials to match against|
|» » password|string|true|none|none|
|» » username|string|true|none|none|
|» bodyPatterns|[object]|false|none|Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» cookies|object|false|none|Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» headers|object|false|none|Header patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» method|string|false|none|The HTTP request method e.g. GET|
|» queryParameters|object|false|none|Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» url|string|false|none|The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» urlPath|string|false|none|The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» urlPathPattern|string|false|none|The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» urlPattern|string|false|none|The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|requiredScenarioState|string|false|none|The required state of the scenario in order for this stub to be matched.|
|response|object|false|none|none|
|» additionalProxyRequestHeaders|object|false|none|Extra request headers to send when proxying to another host.|
|» base64Body|string|false|none|The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» body|string|false|none|The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» bodyFileName|string|false|none|The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» delayDistribution|object|false|none|The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.|
|» » *oneOf*|object|false|none|Log normal randomly distributed response delay.|
|» » median|integer|false|none|none|
|» » sigma|number|false|none|none|
|» » type|string|false|none|none|
|» » *oneOf*|object|false|none|Uniformly distributed random response delay.|
|» » lower|integer|false|none|none|
|» » type|string|false|none|none|
|» » upper|integer|false|none|none|
|» fault|string|false|none|The fault to apply (instead of a full, valid response).|
|» fixedDelayMilliseconds|integer|false|none|Number of milliseconds to delay be before sending the response.|
|» fromConfiguredStub|boolean|false|none|Read-only flag indicating false if this was the default, unmatched response. Not present otherwise.|
|» headers|object|false|none|Map of response headers to send|
|» jsonBody|object|false|none|The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» proxyBaseUrl|string|false|none|The base URL of the target to proxy matching requests to.|
|» status|integer|false|none|The HTTP status code to be returned|
|» statusMessage|string|false|none|The HTTP status message to be returned|
|» transformerParameters|object|false|none|Parameters to apply to response transformers.|
|» transformers|[string]|false|none|List of names of transformers to apply to this response.|
|scenarioName|string|false|none|The name of the scenario that this stub mapping is part of|
|uuid|string|false|none|Alias for the id|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|lognormal|
|» » type|uniform|
|» fault|CONNECTION_RESET_BY_PEER|
|» fault|EMPTY_RESPONSE|
|» fault|MALFORMED_RESPONSE_CHUNK|
|» fault|RANDOM_DATA_THEN_CLOSE|

<aside class="success">
This operation does not require authentication
</aside>

## Update a stub mapping

> Code samples

```bash
curl https://example.com/__admin/mappings/730d3e32-d098-4169-a20c-554c3bedce58 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "request": {
      "method": "GET",
      "url": "/some/thing"
    },
    "response": {
      "body": "Hello world!",
      "headers": {
        "Content-Type": "text/plain"
      },
      "status": 200
    }
  }'
```

`PUT /__admin/mappings/{stubMappingId}`

> Body parameter

```json
{
  "request": {
    "method": "GET",
    "url": "/some/thing"
  },
  "response": {
    "body": "Hello world!",
    "headers": {
      "Content-Type": "text/plain"
    },
    "status": 200
  }
}
```

<h3 id="update-a-stub-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stubMappingId|path|string|true|The UUID of stub mapping|
|body|body|object|false|none|
|» id|body|string|false|This stub mapping's unique identifier|
|» metadata|body|object|false|Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.|
|» name|body|string|false|The stub mapping's name|
|» newScenarioState|body|string|false|The new state for the scenario to be updated to after this stub is served.|
|» persistent|body|boolean|false|Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.|
|» postServeActions|body|object|false|A map of the names of post serve action extensions to trigger and their parameters.|
|» priority|body|integer|false|This stub mapping's priority relative to others. 1 is highest.|
|» request|body|object|false|none|
|» » basicAuthCredentials|body|object|false|Pre-emptive basic auth credentials to match against|
|» » » password|body|string|true|none|
|» » » username|body|string|true|none|
|» » bodyPatterns|body|[object]|false|Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » cookies|body|object|false|Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » headers|body|object|false|Header patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » method|body|string|false|The HTTP request method e.g. GET|
|» » queryParameters|body|object|false|Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » url|body|string|false|The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPath|body|string|false|The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPathPattern|body|string|false|The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPattern|body|string|false|The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» requiredScenarioState|body|string|false|The required state of the scenario in order for this stub to be matched.|
|» response|body|object|false|none|
|» » additionalProxyRequestHeaders|body|object|false|Extra request headers to send when proxying to another host.|
|» » base64Body|body|string|false|The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » body|body|string|false|The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » bodyFileName|body|string|false|The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » delayDistribution|body|object|false|The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.|
|» » » *oneOf*|body|object|false|Log normal randomly distributed response delay.|
|» » » median|body|integer|false|none|
|» » » sigma|body|number|false|none|
|» » » type|body|string|false|none|
|» » » *oneOf*|body|object|false|Uniformly distributed random response delay.|
|» » » lower|body|integer|false|none|
|» » » type|body|string|false|none|
|» » » upper|body|integer|false|none|
|» » fault|body|string|false|The fault to apply (instead of a full, valid response).|
|» » fixedDelayMilliseconds|body|integer|false|Number of milliseconds to delay be before sending the response.|
|» » fromConfiguredStub|body|boolean|false|Read-only flag indicating false if this was the default, unmatched response. Not present otherwise.|
|» » headers|body|object|false|Map of response headers to send|
|» » jsonBody|body|object|false|The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » proxyBaseUrl|body|string|false|The base URL of the target to proxy matching requests to.|
|» » status|body|integer|false|The HTTP status code to be returned|
|» » statusMessage|body|string|false|The HTTP status message to be returned|
|» » transformerParameters|body|object|false|Parameters to apply to response transformers.|
|» » transformers|body|[string]|false|List of names of transformers to apply to this response.|
|» scenarioName|body|string|false|The name of the scenario that this stub mapping is part of|
|» uuid|body|string|false|Alias for the id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » type|lognormal|
|» » » type|uniform|
|» » fault|CONNECTION_RESET_BY_PEER|
|» » fault|EMPTY_RESPONSE|
|» » fault|MALFORMED_RESPONSE_CHUNK|
|» » fault|RANDOM_DATA_THEN_CLOSE|

> Example responses

> 200 Response

```json
{
  "id": "76ada7b0-49ae-4229-91c4-396a36f18e09",
  "priority": 3,
  "request": {
    "headers": {
      "Accept": {
        "equalTo": "text/plain"
      }
    },
    "method": "GET",
    "url": "/some/thing"
  },
  "response": {
    "body": "Hello world!",
    "headers": {
      "Content-Type": "text/plain"
    },
    "status": 200
  }
}
```

<h3 id="update-a-stub-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The stub mapping|Inline|
|404|Not Found|Stub mapping not found|None|

<h3 id="update-a-stub-mapping-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|This stub mapping's unique identifier|
|metadata|object|false|none|Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.|
|name|string|false|none|The stub mapping's name|
|newScenarioState|string|false|none|The new state for the scenario to be updated to after this stub is served.|
|persistent|boolean|false|none|Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.|
|postServeActions|object|false|none|A map of the names of post serve action extensions to trigger and their parameters.|
|priority|integer|false|none|This stub mapping's priority relative to others. 1 is highest.|
|request|object|false|none|none|
|» basicAuthCredentials|object|false|none|Pre-emptive basic auth credentials to match against|
|» » password|string|true|none|none|
|» » username|string|true|none|none|
|» bodyPatterns|[object]|false|none|Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» cookies|object|false|none|Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» headers|object|false|none|Header patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» method|string|false|none|The HTTP request method e.g. GET|
|» queryParameters|object|false|none|Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» url|string|false|none|The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» urlPath|string|false|none|The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» urlPathPattern|string|false|none|The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» urlPattern|string|false|none|The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|requiredScenarioState|string|false|none|The required state of the scenario in order for this stub to be matched.|
|response|object|false|none|none|
|» additionalProxyRequestHeaders|object|false|none|Extra request headers to send when proxying to another host.|
|» base64Body|string|false|none|The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» body|string|false|none|The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» bodyFileName|string|false|none|The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» delayDistribution|object|false|none|The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.|
|» » *oneOf*|object|false|none|Log normal randomly distributed response delay.|
|» » median|integer|false|none|none|
|» » sigma|number|false|none|none|
|» » type|string|false|none|none|
|» » *oneOf*|object|false|none|Uniformly distributed random response delay.|
|» » lower|integer|false|none|none|
|» » type|string|false|none|none|
|» » upper|integer|false|none|none|
|» fault|string|false|none|The fault to apply (instead of a full, valid response).|
|» fixedDelayMilliseconds|integer|false|none|Number of milliseconds to delay be before sending the response.|
|» fromConfiguredStub|boolean|false|none|Read-only flag indicating false if this was the default, unmatched response. Not present otherwise.|
|» headers|object|false|none|Map of response headers to send|
|» jsonBody|object|false|none|The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» proxyBaseUrl|string|false|none|The base URL of the target to proxy matching requests to.|
|» status|integer|false|none|The HTTP status code to be returned|
|» statusMessage|string|false|none|The HTTP status message to be returned|
|» transformerParameters|object|false|none|Parameters to apply to response transformers.|
|» transformers|[string]|false|none|List of names of transformers to apply to this response.|
|scenarioName|string|false|none|The name of the scenario that this stub mapping is part of|
|uuid|string|false|none|Alias for the id|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|lognormal|
|» » type|uniform|
|» fault|CONNECTION_RESET_BY_PEER|
|» fault|EMPTY_RESPONSE|
|» fault|MALFORMED_RESPONSE_CHUNK|
|» fault|RANDOM_DATA_THEN_CLOSE|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a stub mapping

> Code samples

```bash
curl https://example.com/__admin/mappings/730d3e32-d098-4169-a20c-554c3bedce58 \
  -X DELETE
```

`DELETE /__admin/mappings/{stubMappingId}`

<h3 id="delete-a-stub-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stubMappingId|path|string|true|The UUID of stub mapping|

<h3 id="delete-a-stub-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|404|Not Found|Stub mapping not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wiremock-requests">Requests</h1>

Logged requests and responses received by the mock service

<a href="http://wiremock.org/docs/verifying/">User documentation</a>

## Get all requests in journal

> Code samples

```bash
curl https://example.com/__admin/requests \
  -H 'Accept: application/json'
```

`GET /__admin/requests`

<h3 id="get-all-requests-in-journal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|The maximum number of results to return|
|since|query|string|false|Only return logged requests after this date|

> Example responses

> 200 Response

```json
{
  "meta": {
    "total": 9
  },
  "requestJournalDisabled": false,
  "requests": [
    {
      "id": "45760a03-eebb-4387-ad0d-bb89b5d3d662",
      "request": {
        "absoluteUrl": "http://localhost:56715/received-request/9",
        "body": "",
        "bodyAsBase64": "",
        "browserProxyRequest": false,
        "clientIp": "127.0.0.1",
        "cookies": {},
        "headers": {
          "Connection": "keep-alive",
          "Host": "localhost:56715",
          "User-Agent": "Apache-HttpClient/4.5.1 (Java/1.7.0_51)"
        },
        "loggedDate": 1471442494809,
        "loggedDateString": "2016-08-17T14:01:34Z",
        "method": "GET",
        "url": "/received-request/9"
      },
      "responseDefinition": {
        "fromConfiguredStub": false,
        "status": 404,
        "transformerParameters": {},
        "transformers": []
      }
    },
    {
      "id": "6ae78311-0178-46c9-987a-fbfc528d54d8",
      "request": {
        "absoluteUrl": "http://localhost:56715/received-request/8",
        "body": "",
        "bodyAsBase64": "",
        "browserProxyRequest": false,
        "clientIp": "127.0.0.1",
        "cookies": {},
        "headers": {
          "Connection": "keep-alive",
          "Host": "localhost:56715",
          "User-Agent": "Apache-HttpClient/4.5.1 (Java/1.7.0_51)"
        },
        "loggedDate": 1471442494802,
        "loggedDateString": "2016-08-17T14:01:34Z",
        "method": "GET",
        "url": "/received-request/8"
      },
      "responseDefinition": {
        "fromConfiguredStub": false,
        "status": 404,
        "transformerParameters": {},
        "transformers": []
      }
    },
    {
      "id": "aba8e4ad-1b5b-4518-8f05-b2170a24de35",
      "request": {
        "absoluteUrl": "http://localhost:56715/received-request/7",
        "body": "",
        "bodyAsBase64": "",
        "browserProxyRequest": false,
        "clientIp": "127.0.0.1",
        "cookies": {},
        "headers": {
          "Connection": "keep-alive",
          "Host": "localhost:56715",
          "User-Agent": "Apache-HttpClient/4.5.1 (Java/1.7.0_51)"
        },
        "loggedDate": 1471442494795,
        "loggedDateString": "2016-08-17T14:01:34Z",
        "method": "GET",
        "url": "/received-request/7"
      },
      "responseDefinition": {
        "fromConfiguredStub": false,
        "status": 404,
        "transformerParameters": {},
        "transformers": []
      }
    }
  ]
}
```

<h3 id="get-all-requests-in-journal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of received requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete all requests in journal

> Code samples

```bash
curl https://example.com/__admin/requests \
  -X DELETE
```

`DELETE /__admin/requests`

<h3 id="delete-all-requests-in-journal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully deleted|None|

<aside class="success">
This operation does not require authentication
</aside>

## Count requests by criteria

> Code samples

```bash
curl https://example.com/__admin/requests/count \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "headers": {
      "Content-Type": {
        "matches": ".*/xml"
      }
    },
    "method": "POST",
    "url": "/resource"
  }'
```

`POST /__admin/requests/count`

Count requests logged in the journal matching the specified criteria

> Body parameter

```json
{
  "headers": {
    "Content-Type": {
      "matches": ".*/xml"
    }
  },
  "method": "POST",
  "url": "/resource"
}
```

<h3 id="count-requests-by-criteria-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» basicAuthCredentials|body|object|false|Pre-emptive basic auth credentials to match against|
|» » password|body|string|true|none|
|» » username|body|string|true|none|
|» bodyPatterns|body|[object]|false|Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» cookies|body|object|false|Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» headers|body|object|false|Header patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» method|body|string|false|The HTTP request method e.g. GET|
|» queryParameters|body|object|false|Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» url|body|string|false|The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» urlPath|body|string|false|The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» urlPathPattern|body|string|false|The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» urlPattern|body|string|false|The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|

> Example responses

> 200 Response

```json
{
  "count": 4
}
```

<h3 id="count-requests-by-criteria-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Number of matching requests|Inline|

<h3 id="count-requests-by-criteria-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Find requests by criteria

> Code samples

```bash
curl https://example.com/__admin/requests/find \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "headers": {
      "Content-Type": {
        "matches": ".*/xml"
      }
    },
    "method": "POST",
    "url": "/resource"
  }'
```

`POST /__admin/requests/find`

Retrieve details of requests logged in the journal matching the specified criteria

> Body parameter

```json
{
  "headers": {
    "Content-Type": {
      "matches": ".*/xml"
    }
  },
  "method": "POST",
  "url": "/resource"
}
```

<h3 id="find-requests-by-criteria-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» basicAuthCredentials|body|object|false|Pre-emptive basic auth credentials to match against|
|» » password|body|string|true|none|
|» » username|body|string|true|none|
|» bodyPatterns|body|[object]|false|Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» cookies|body|object|false|Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» headers|body|object|false|Header patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» method|body|string|false|The HTTP request method e.g. GET|
|» queryParameters|body|object|false|Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» url|body|string|false|The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» urlPath|body|string|false|The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» urlPathPattern|body|string|false|The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» urlPattern|body|string|false|The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|

> Example responses

> 200 Response

```json
{
  "requests": [
    {
      "absoluteUrl": "http://mydomain.com/my/url",
      "body": "",
      "browserProxyRequest": true,
      "headers": {
        "Accept": "image/png,image/*;q=0.8,*/*;q=0.5",
        "Accept-Language": "en-us,en;q=0.5",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:9.0) Gecko/20100101 Firefox/9.0"
      },
      "loggedDate": 1339083581823,
      "loggedDateString": "2012-06-07 16:39:41",
      "method": "GET",
      "url": "/my/url"
    },
    {
      "absoluteUrl": "http://my.other.domain.com/my/other/url",
      "body": "My text",
      "browserProxyRequest": false,
      "headers": {
        "Accept": "text/plain",
        "Content-Type": "text/plain"
      },
      "loggedDate": 1339083581823,
      "loggedDateString": "2012-06-07 16:39:41",
      "method": "POST",
      "url": "/my/other/url"
    }
  ]
}
```

<h3 id="find-requests-by-criteria-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Matching request details|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove requests by criteria

> Code samples

```bash
curl https://example.com/__admin/requests/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "headers": {
      "Content-Type": {
        "matches": ".*/xml"
      }
    },
    "method": "POST",
    "url": "/resource"
  }'
```

`POST /__admin/requests/remove`

Removed requests logged in the journal matching the specified criteria

> Body parameter

```json
{
  "headers": {
    "Content-Type": {
      "matches": ".*/xml"
    }
  },
  "method": "POST",
  "url": "/resource"
}
```

<h3 id="remove-requests-by-criteria-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» basicAuthCredentials|body|object|false|Pre-emptive basic auth credentials to match against|
|» » password|body|string|true|none|
|» » username|body|string|true|none|
|» bodyPatterns|body|[object]|false|Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» cookies|body|object|false|Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» headers|body|object|false|Header patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» method|body|string|false|The HTTP request method e.g. GET|
|» queryParameters|body|object|false|Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» url|body|string|false|The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» urlPath|body|string|false|The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» urlPathPattern|body|string|false|The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» urlPattern|body|string|false|The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|

> Example responses

> 200 Response

```json
{
  "requests": [
    {
      "absoluteUrl": "http://mydomain.com/my/url",
      "body": "",
      "browserProxyRequest": true,
      "headers": {
        "Accept": "image/png,image/*;q=0.8,*/*;q=0.5",
        "Accept-Language": "en-us,en;q=0.5",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:9.0) Gecko/20100101 Firefox/9.0"
      },
      "loggedDate": 1339083581823,
      "loggedDateString": "2012-06-07 16:39:41",
      "method": "GET",
      "url": "/my/url"
    },
    {
      "absoluteUrl": "http://my.other.domain.com/my/other/url",
      "body": "My text",
      "browserProxyRequest": false,
      "headers": {
        "Accept": "text/plain",
        "Content-Type": "text/plain"
      },
      "loggedDate": 1339083581823,
      "loggedDateString": "2012-06-07 16:39:41",
      "method": "POST",
      "url": "/my/other/url"
    }
  ]
}
```

<h3 id="remove-requests-by-criteria-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Removed request details|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete requests mappings matching metadata

> Code samples

```bash
curl https://example.com/__admin/requests/remove-by-metadata \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "matchesJsonPath": {
      "equalToJson": "{ \"inner\": 42 }",
      "expression": "$.outer"
    }
  }'
```

`POST /__admin/requests/remove-by-metadata`

> Body parameter

```json
{
  "matchesJsonPath": {
    "equalToJson": "{ \"inner\": 42 }",
    "expression": "$.outer"
  }
}
```

<h3 id="delete-requests-mappings-matching-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» caseInsensitive|body|boolean|false|none|
|» equalTo|body|boolean|true|none|
|» *oneOf*|body|object|false|none|
|» contains|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» matches|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» doesNotMatch|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» equalToJson|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» ignoreArrayOrder|body|boolean|false|none|
|» ignoreExtraElements|body|boolean|false|none|
|» matchesJsonPath|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» equalToXml|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» matchesXpath|body|string|true|none|
|» namespaces|body|object|false|none|
|» valuePattern|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "requests": [
    {
      "absoluteUrl": "http://mydomain.com/my/url",
      "body": "",
      "browserProxyRequest": true,
      "headers": {
        "Accept": "image/png,image/*;q=0.8,*/*;q=0.5",
        "Accept-Language": "en-us,en;q=0.5",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:9.0) Gecko/20100101 Firefox/9.0"
      },
      "loggedDate": 1339083581823,
      "loggedDateString": "2012-06-07 16:39:41",
      "method": "GET",
      "url": "/my/url"
    },
    {
      "absoluteUrl": "http://my.other.domain.com/my/other/url",
      "body": "My text",
      "browserProxyRequest": false,
      "headers": {
        "Accept": "text/plain",
        "Content-Type": "text/plain"
      },
      "loggedDate": 1339083581823,
      "loggedDateString": "2012-06-07 16:39:41",
      "method": "POST",
      "url": "/my/other/url"
    }
  ]
}
```

<h3 id="delete-requests-mappings-matching-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Removed request details|None|

<aside class="success">
This operation does not require authentication
</aside>

## Empty the request journal

> Code samples

```bash
curl https://example.com/__admin/requests/reset \
  -X POST
```

`POST /__admin/requests/reset`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="empty-the-request-journal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully reset|None|

<aside class="success">
This operation does not require authentication
</aside>

## Find unmatched requests

> Code samples

```bash
curl https://example.com/__admin/requests/unmatched \
  -H 'Accept: application/json'
```

`GET /__admin/requests/unmatched`

Get details of logged requests that weren't matched by any stub mapping

> Example responses

> 200 Response

```json
{
  "requests": [
    {
      "absoluteUrl": "http://mydomain.com/my/url",
      "body": "",
      "browserProxyRequest": true,
      "headers": {
        "Accept": "image/png,image/*;q=0.8,*/*;q=0.5",
        "Accept-Language": "en-us,en;q=0.5",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:9.0) Gecko/20100101 Firefox/9.0"
      },
      "loggedDate": 1339083581823,
      "loggedDateString": "2012-06-07 16:39:41",
      "method": "GET",
      "url": "/my/url"
    },
    {
      "absoluteUrl": "http://my.other.domain.com/my/other/url",
      "body": "My text",
      "browserProxyRequest": false,
      "headers": {
        "Accept": "text/plain",
        "Content-Type": "text/plain"
      },
      "loggedDate": 1339083581823,
      "loggedDateString": "2012-06-07 16:39:41",
      "method": "POST",
      "url": "/my/other/url"
    }
  ]
}
```

<h3 id="find-unmatched-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Unmatched request details|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get request by ID

> Code samples

```bash
curl https://example.com/__admin/requests/12fb14bb-600e-4bfa-bd8d-be7f12562c99 \
  -H 'Accept: application/json'
```

`GET /__admin/requests/{requestId}`

<h3 id="get-request-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestId|path|string|true|The UUID of the logged request|

> Example responses

> 200 Response

```json
{
  "id": "12fb14bb-600e-4bfa-bd8d-be7f12562c99",
  "request": {
    "absoluteUrl": "http://localhost:56738/received-request/2",
    "body": "",
    "bodyAsBase64": "",
    "browserProxyRequest": false,
    "clientIp": "127.0.0.1",
    "cookies": {},
    "headers": {
      "Connection": "keep-alive",
      "Host": "localhost:56738",
      "User-Agent": "Apache-HttpClient/4.5.1 (Java/1.7.0_51)"
    },
    "loggedDate": 1471442557047,
    "loggedDateString": "2016-08-17T14:02:37Z",
    "method": "GET",
    "url": "/received-request/2"
  },
  "responseDefinition": {
    "fromConfiguredStub": false,
    "status": 404,
    "transformerParameters": {},
    "transformers": []
  }
}
```

<h3 id="get-request-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|404|Not Found|Request not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete request by ID

> Code samples

```bash
curl https://example.com/__admin/requests/12fb14bb-600e-4bfa-bd8d-be7f12562c99 \
  -X DELETE
```

`DELETE /__admin/requests/{requestId}`

<h3 id="delete-request-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestId|path|string|true|The UUID of the logged request|

<h3 id="delete-request-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully deleted|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wiremock-near-misses">Near Misses</h1>

Near misses allow querying of received requests or request patterns according to similarity

<a href="http://wiremock.org/docs/verifying/#near-misses">User documentation</a>

## Find near misses matching specific request

> Code samples

```bash
curl https://example.com/__admin/near-misses/request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "absoluteUrl": "http://localhost:8080/actual",
    "body": "",
    "bodyAsBase64": "",
    "browserProxyRequest": false,
    "clientIp": "0:0:0:0:0:0:0:1",
    "cookies": {},
    "headers": {
      "Accept": "*/*",
      "Host": "localhost:8080",
      "User-Agent": "curl/7.30.0"
    },
    "loggedDate": 1467402464520,
    "loggedDateString": "2016-07-01T19:47:44Z",
    "method": "GET",
    "url": "/actual"
  }'
```

`POST /__admin/near-misses/request`

Find at most 3 near misses for closest stub mappings to the specified request

> Body parameter

```json
{
  "absoluteUrl": "http://localhost:8080/actual",
  "body": "",
  "bodyAsBase64": "",
  "browserProxyRequest": false,
  "clientIp": "0:0:0:0:0:0:0:1",
  "cookies": {},
  "headers": {
    "Accept": "*/*",
    "Host": "localhost:8080",
    "User-Agent": "curl/7.30.0"
  },
  "loggedDate": 1467402464520,
  "loggedDateString": "2016-07-01T19:47:44Z",
  "method": "GET",
  "url": "/actual"
}
```

<h3 id="find-near-misses-matching-specific-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» absoluteUrl|body|string|false|The full URL to match against|
|» body|body|string|false|Body string to match against|
|» cookies|body|object|false|Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» headers|body|object|false|Header patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» method|body|string|false|The HTTP request method|
|» url|body|string|false|The path and query to match exactly against|

> Example responses

> 200 Response

```json
{
  "nearMisses": [
    {
      "matchResult": {
        "distance": 0.06944444444444445
      },
      "request": {
        "absoluteUrl": "http://localhost:8080/nomatch",
        "body": "",
        "bodyAsBase64": "",
        "browserProxyRequest": false,
        "clientIp": "0:0:0:0:0:0:0:1",
        "cookies": {},
        "headers": {
          "Accept": "*/*",
          "Host": "localhost:8080",
          "User-Agent": "curl/7.30.0"
        },
        "loggedDate": 1467402464520,
        "loggedDateString": "2016-07-01T19:47:44Z",
        "method": "GET",
        "url": "/nomatch"
      },
      "requestPattern": {
        "method": "GET",
        "url": "/almostmatch"
      }
    }
  ]
}
```

<h3 id="find-near-misses-matching-specific-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Near misses matching criteria|Inline|

<h3 id="find-near-misses-matching-specific-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nearMisses|[object]|false|none|none|
|» absoluteUrl|string|false|none|The full URL to match against|
|» body|string|false|none|Body string to match against|
|» cookies|object|false|none|Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» headers|object|false|none|Header patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» method|string|false|none|The HTTP request method|
|» url|string|false|none|The path and query to match exactly against|

<aside class="success">
This operation does not require authentication
</aside>

## Find near misses matching request pattern

> Code samples

```bash
curl https://example.com/__admin/near-misses/request-pattern \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "headers": {
      "Content-Type": {
        "matches": ".*/xml"
      }
    },
    "method": "POST",
    "url": "/resource"
  }'
```

`POST /__admin/near-misses/request-pattern`

Find at most 3 near misses for closest logged requests to the specified request pattern

> Body parameter

```json
{
  "headers": {
    "Content-Type": {
      "matches": ".*/xml"
    }
  },
  "method": "POST",
  "url": "/resource"
}
```

<h3 id="find-near-misses-matching-request-pattern-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» basicAuthCredentials|body|object|false|Pre-emptive basic auth credentials to match against|
|» » password|body|string|true|none|
|» » username|body|string|true|none|
|» bodyPatterns|body|[object]|false|Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» cookies|body|object|false|Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» headers|body|object|false|Header patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» method|body|string|false|The HTTP request method e.g. GET|
|» queryParameters|body|object|false|Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» url|body|string|false|The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» urlPath|body|string|false|The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» urlPathPattern|body|string|false|The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» urlPattern|body|string|false|The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|

> Example responses

> 200 Response

```json
{
  "nearMisses": [
    {
      "matchResult": {
        "distance": 0.06944444444444445
      },
      "request": {
        "absoluteUrl": "http://localhost:8080/nomatch",
        "body": "",
        "bodyAsBase64": "",
        "browserProxyRequest": false,
        "clientIp": "0:0:0:0:0:0:0:1",
        "cookies": {},
        "headers": {
          "Accept": "*/*",
          "Host": "localhost:8080",
          "User-Agent": "curl/7.30.0"
        },
        "loggedDate": 1467402464520,
        "loggedDateString": "2016-07-01T19:47:44Z",
        "method": "GET",
        "url": "/nomatch"
      },
      "requestPattern": {
        "method": "GET",
        "url": "/almostmatch"
      }
    }
  ]
}
```

<h3 id="find-near-misses-matching-request-pattern-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Near misses matching criteria|Inline|

<h3 id="find-near-misses-matching-request-pattern-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nearMisses|[object]|false|none|none|
|» absoluteUrl|string|false|none|The full URL to match against|
|» body|string|false|none|Body string to match against|
|» cookies|object|false|none|Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» headers|object|false|none|Header patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» method|string|false|none|The HTTP request method|
|» url|string|false|none|The path and query to match exactly against|

<aside class="success">
This operation does not require authentication
</aside>

## get/__admin/requests/unmatched/near-misses

> Code samples

```bash
curl https://example.com/__admin/requests/unmatched/near-misses \
  -H 'Accept: application/json'
```

`GET /__admin/requests/unmatched/near-misses`

Retrieve near-misses for all unmatched requests

> Example responses

> 200 Response

```json
{
  "nearMisses": [
    {
      "matchResult": {
        "distance": 0.06944444444444445
      },
      "request": {
        "absoluteUrl": "http://localhost:8080/nomatch",
        "body": "",
        "bodyAsBase64": "",
        "browserProxyRequest": false,
        "clientIp": "0:0:0:0:0:0:0:1",
        "cookies": {},
        "headers": {
          "Accept": "*/*",
          "Host": "localhost:8080",
          "User-Agent": "curl/7.30.0"
        },
        "loggedDate": 1467402464520,
        "loggedDateString": "2016-07-01T19:47:44Z",
        "method": "GET",
        "url": "/nomatch"
      },
      "requestPattern": {
        "method": "GET",
        "url": "/almostmatch"
      }
    }
  ]
}
```

<h3 id="getadminrequestsunmatchednear-misses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Near misses matching criteria|Inline|

<h3 id="getadminrequestsunmatchednear-misses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nearMisses|[object]|false|none|none|
|» absoluteUrl|string|false|none|The full URL to match against|
|» body|string|false|none|Body string to match against|
|» cookies|object|false|none|Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» headers|object|false|none|Header patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» method|string|false|none|The HTTP request method|
|» url|string|false|none|The path and query to match exactly against|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wiremock-recordings">Recordings</h1>

Stub mapping record and snapshot functions

<a href="http://wiremock.org/docs/record-playback/">User documentation</a>

## Take a snapshot recording

> Code samples

```bash
curl https://example.com/__admin/recordings/snapshot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "captureHeaders": {
      "Accept": {},
      "Content-Type": {
        "caseInsensitive": true
      }
    },
    "extractBodyCriteria": {
      "binarySizeThreshold": "1 Mb",
      "textSizeThreshold": "2 kb"
    },
    "filters": {
      "ids": [
        "40a93c4a-d378-4e07-8321-6158d5dbcb29"
      ],
      "method": "GET",
      "urlPathPattern": "/api/.*"
    },
    "outputFormat": "FULL",
    "persist": false,
    "repeatsAsScenarios": false,
    "requestBodyPattern": {
      "ignoreArrayOrder": false,
      "ignoreExtraElements": true,
      "matcher": "equalToJson"
    },
    "transformerParameters": {
      "headerValue": "123"
    },
    "transformers": [
      "modify-response-header"
    ]
  }'
```

`POST /__admin/recordings/snapshot`

> Body parameter

```json
{
  "captureHeaders": {
    "Accept": {},
    "Content-Type": {
      "caseInsensitive": true
    }
  },
  "extractBodyCriteria": {
    "binarySizeThreshold": "1 Mb",
    "textSizeThreshold": "2 kb"
  },
  "filters": {
    "ids": [
      "40a93c4a-d378-4e07-8321-6158d5dbcb29"
    ],
    "method": "GET",
    "urlPathPattern": "/api/.*"
  },
  "outputFormat": "FULL",
  "persist": false,
  "repeatsAsScenarios": false,
  "requestBodyPattern": {
    "ignoreArrayOrder": false,
    "ignoreExtraElements": true,
    "matcher": "equalToJson"
  },
  "transformerParameters": {
    "headerValue": "123"
  },
  "transformers": [
    "modify-response-header"
  ]
}
```

<h3 id="take-a-snapshot-recording-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» captureHeaders|body|object|false|Headers from the request to include in the generated stub mappings, mapped to parameter objects. The only parameter available is "caseInsensitive", which defaults to false|
|» » **additionalProperties**|body|object|false|none|
|» » » caseInsensitive|body|boolean|false|none|
|» extractBodyCriteria|body|object|false|Criteria for extracting response bodies to a separate file instead of including it in the stub mapping|
|» » binarySizeThreshold|body|string|false|Size threshold for extracting binary response bodies. Supports humanized size strings, e.g. "56 Mb". Default unit is bytes.|
|» » textSizeThreshold|body|string|false|Size threshold for extracting binary response bodies. Supports humanized size strings, e.g. "56 Mb". Default unit is bytes.|
|» persist|body|boolean|false|Whether to save stub mappings to the file system or just return them|
|» repeatsAsScenarios|body|boolean|false|When true, duplicate requests will be added to a Scenario. When false, duplicates are discarded|
|» requestBodyPattern|body|object|false|Control the request body matcher used in generated stub mappings|
|» » *oneOf*|body|object|false|Automatically determine matcher based on content type (the default)|
|» » caseInsensitive|body|boolean|false|If equalTo is used, match body use case-insensitive string comparison|
|» » ignoreArrayOrder|body|boolean|false|If equalToJson is used, ignore order of array elements|
|» » ignoreExtraElements|body|boolean|false|If equalToJson is used, matcher ignores extra elements in objects|
|» » matcher|body|string|false|none|
|» » *oneOf*|body|object|false|Always match request bodies using equalTo|
|» » caseInsensitive|body|boolean|false|Match body using case-insensitive string comparison|
|» » matcher|body|string|false|none|
|» » *oneOf*|body|object|false|Always match request bodies using equalToJson|
|» » ignoreArrayOrder|body|boolean|false|Ignore order of array elements|
|» » ignoreExtraElements|body|boolean|false|Ignore extra elements in objects|
|» » matcher|body|string|false|none|
|» » *oneOf*|body|object|false|Always match request bodies using equalToXml|
|» » matcher|body|string|false|none|
|» transformerParameters|body|object|false|List of names of stub mappings transformers to apply to generated stubs|
|» transformers|body|[string]|false|Parameters to pass to stub mapping transformers|
|» filters|body|object|false|none|
|» » ids|body|[string]|false|none|
|» » basicAuthCredentials|body|object|false|Pre-emptive basic auth credentials to match against|
|» » » password|body|string|true|none|
|» » » username|body|string|true|none|
|» » bodyPatterns|body|[object]|false|Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » cookies|body|object|false|Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » headers|body|object|false|Header patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » method|body|string|false|The HTTP request method e.g. GET|
|» » queryParameters|body|object|false|Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » url|body|string|false|The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPath|body|string|false|The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPathPattern|body|string|false|The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPattern|body|string|false|The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » matcher|auto|
|» » matcher|equalTo|
|» » matcher|equalToJson|
|» » matcher|equalToXml|

> Example responses

> 200 Response

```json
{
  "mappings": [
    {
      "id": "093f1027-e5e0-4921-9e6d-e619dfd5d2c7",
      "name": "recordables_123",
      "persistent": true,
      "request": {
        "method": "GET",
        "url": "/recordables/123"
      },
      "response": {
        "body": "{\n  \"message\": \"Congratulations on your first recording!\"\n}",
        "headers": {
          "Content-Type": "application/json"
        },
        "status": 200
      },
      "uuid": "093f1027-e5e0-4921-9e6d-e619dfd5d2c7"
    }
  ]
}
```

<h3 id="take-a-snapshot-recording-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully took a snapshot recording|Inline|

<h3 id="take-a-snapshot-recording-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mappings|[object]|false|none|none|
|» id|string|false|none|This stub mapping's unique identifier|
|» metadata|object|false|none|Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.|
|» name|string|false|none|The stub mapping's name|
|» newScenarioState|string|false|none|The new state for the scenario to be updated to after this stub is served.|
|» persistent|boolean|false|none|Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.|
|» postServeActions|object|false|none|A map of the names of post serve action extensions to trigger and their parameters.|
|» priority|integer|false|none|This stub mapping's priority relative to others. 1 is highest.|
|» request|object|false|none|none|
|» » basicAuthCredentials|object|false|none|Pre-emptive basic auth credentials to match against|
|» » » password|string|true|none|none|
|» » » username|string|true|none|none|
|» » bodyPatterns|[object]|false|none|Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » cookies|object|false|none|Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » headers|object|false|none|Header patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » method|string|false|none|The HTTP request method e.g. GET|
|» » queryParameters|object|false|none|Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » url|string|false|none|The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPath|string|false|none|The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPathPattern|string|false|none|The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPattern|string|false|none|The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» requiredScenarioState|string|false|none|The required state of the scenario in order for this stub to be matched.|
|» response|object|false|none|none|
|» » additionalProxyRequestHeaders|object|false|none|Extra request headers to send when proxying to another host.|
|» » base64Body|string|false|none|The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » body|string|false|none|The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » bodyFileName|string|false|none|The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » delayDistribution|object|false|none|The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.|
|» » » *oneOf*|object|false|none|Log normal randomly distributed response delay.|
|» » » median|integer|false|none|none|
|» » » sigma|number|false|none|none|
|» » » type|string|false|none|none|
|» » » *oneOf*|object|false|none|Uniformly distributed random response delay.|
|» » » lower|integer|false|none|none|
|» » » type|string|false|none|none|
|» » » upper|integer|false|none|none|
|» » fault|string|false|none|The fault to apply (instead of a full, valid response).|
|» » fixedDelayMilliseconds|integer|false|none|Number of milliseconds to delay be before sending the response.|
|» » fromConfiguredStub|boolean|false|none|Read-only flag indicating false if this was the default, unmatched response. Not present otherwise.|
|» » headers|object|false|none|Map of response headers to send|
|» » jsonBody|object|false|none|The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » proxyBaseUrl|string|false|none|The base URL of the target to proxy matching requests to.|
|» » status|integer|false|none|The HTTP status code to be returned|
|» » statusMessage|string|false|none|The HTTP status message to be returned|
|» » transformerParameters|object|false|none|Parameters to apply to response transformers.|
|» » transformers|[string]|false|none|List of names of transformers to apply to this response.|
|» scenarioName|string|false|none|The name of the scenario that this stub mapping is part of|
|» uuid|string|false|none|Alias for the id|
|meta|object|false|none|none|
|» total|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » » type|lognormal|
|» » » type|uniform|
|» » fault|CONNECTION_RESET_BY_PEER|
|» » fault|EMPTY_RESPONSE|
|» » fault|MALFORMED_RESPONSE_CHUNK|
|» » fault|RANDOM_DATA_THEN_CLOSE|

<aside class="success">
This operation does not require authentication
</aside>

## Start recording

> Code samples

```bash
curl https://example.com/__admin/recordings/start \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "captureHeaders": {
      "Accept": {},
      "Content-Type": {
        "caseInsensitive": true
      }
    },
    "extractBodyCriteria": {
      "binarySizeThreshold": "10240",
      "textSizeThreshold": "2048"
    },
    "filters": {
      "method": "GET",
      "urlPathPattern": "/api/.*"
    },
    "persist": false,
    "repeatsAsScenarios": false,
    "requestBodyPattern": {
      "ignoreArrayOrder": false,
      "ignoreExtraElements": true,
      "matcher": "equalToJson"
    },
    "targetBaseUrl": "http://example.mocklab.io",
    "transformerParameters": {
      "headerValue": "123"
    },
    "transformers": [
      "modify-response-header"
    ]
  }'
```

`POST /__admin/recordings/start`

Begin recording stub mappings

> Body parameter

```json
{
  "captureHeaders": {
    "Accept": {},
    "Content-Type": {
      "caseInsensitive": true
    }
  },
  "extractBodyCriteria": {
    "binarySizeThreshold": "10240",
    "textSizeThreshold": "2048"
  },
  "filters": {
    "method": "GET",
    "urlPathPattern": "/api/.*"
  },
  "persist": false,
  "repeatsAsScenarios": false,
  "requestBodyPattern": {
    "ignoreArrayOrder": false,
    "ignoreExtraElements": true,
    "matcher": "equalToJson"
  },
  "targetBaseUrl": "http://example.mocklab.io",
  "transformerParameters": {
    "headerValue": "123"
  },
  "transformers": [
    "modify-response-header"
  ]
}
```

<h3 id="start-recording-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» captureHeaders|body|object|false|Headers from the request to include in the generated stub mappings, mapped to parameter objects. The only parameter available is "caseInsensitive", which defaults to false|
|» » **additionalProperties**|body|object|false|none|
|» » » caseInsensitive|body|boolean|false|none|
|» extractBodyCriteria|body|object|false|Criteria for extracting response bodies to a separate file instead of including it in the stub mapping|
|» » binarySizeThreshold|body|string|false|Size threshold for extracting binary response bodies. Supports humanized size strings, e.g. "56 Mb". Default unit is bytes.|
|» » textSizeThreshold|body|string|false|Size threshold for extracting binary response bodies. Supports humanized size strings, e.g. "56 Mb". Default unit is bytes.|
|» persist|body|boolean|false|Whether to save stub mappings to the file system or just return them|
|» repeatsAsScenarios|body|boolean|false|When true, duplicate requests will be added to a Scenario. When false, duplicates are discarded|
|» requestBodyPattern|body|object|false|Control the request body matcher used in generated stub mappings|
|» » *oneOf*|body|object|false|Automatically determine matcher based on content type (the default)|
|» » caseInsensitive|body|boolean|false|If equalTo is used, match body use case-insensitive string comparison|
|» » ignoreArrayOrder|body|boolean|false|If equalToJson is used, ignore order of array elements|
|» » ignoreExtraElements|body|boolean|false|If equalToJson is used, matcher ignores extra elements in objects|
|» » matcher|body|string|false|none|
|» » *oneOf*|body|object|false|Always match request bodies using equalTo|
|» » caseInsensitive|body|boolean|false|Match body using case-insensitive string comparison|
|» » matcher|body|string|false|none|
|» » *oneOf*|body|object|false|Always match request bodies using equalToJson|
|» » ignoreArrayOrder|body|boolean|false|Ignore order of array elements|
|» » ignoreExtraElements|body|boolean|false|Ignore extra elements in objects|
|» » matcher|body|string|false|none|
|» » *oneOf*|body|object|false|Always match request bodies using equalToXml|
|» » matcher|body|string|false|none|
|» transformerParameters|body|object|false|List of names of stub mappings transformers to apply to generated stubs|
|» transformers|body|[string]|false|Parameters to pass to stub mapping transformers|
|» filters|body|object|false|none|
|» » basicAuthCredentials|body|object|false|Pre-emptive basic auth credentials to match against|
|» » » password|body|string|true|none|
|» » » username|body|string|true|none|
|» » bodyPatterns|body|[object]|false|Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » cookies|body|object|false|Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » headers|body|object|false|Header patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » method|body|string|false|The HTTP request method e.g. GET|
|» » queryParameters|body|object|false|Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » url|body|string|false|The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPath|body|string|false|The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPathPattern|body|string|false|The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPattern|body|string|false|The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» targetBaseUrl|body|string|false|Target URL when using the record and playback API|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » matcher|auto|
|» » matcher|equalTo|
|» » matcher|equalToJson|
|» » matcher|equalToXml|

<h3 id="start-recording-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully started recording|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get recording status

> Code samples

```bash
curl https://example.com/__admin/recordings/status \
  -H 'Accept: application/json'
```

`GET /__admin/recordings/status`

> Example responses

> 200 Response

```json
{
  "status": "Stopped"
}
```

<h3 id="get-recording-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully got the record status|Inline|

<h3 id="get-recording-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|NeverStarted|
|status|Recording|
|status|Stopped|

<aside class="success">
This operation does not require authentication
</aside>

## Stop recording

> Code samples

```bash
curl https://example.com/__admin/recordings/stop \
  -X POST \
  -H 'Accept: application/json'
```

`POST /__admin/recordings/stop`

End recording of stub mappings

> Example responses

> 200 Response

```json
{
  "mappings": [
    {
      "id": "093f1027-e5e0-4921-9e6d-e619dfd5d2c7",
      "name": "recordables_123",
      "persistent": true,
      "request": {
        "method": "GET",
        "url": "/recordables/123"
      },
      "response": {
        "body": "{\n  \"message\": \"Congratulations on your first recording!\"\n}",
        "headers": {
          "Content-Type": "application/json"
        },
        "status": 200
      },
      "uuid": "093f1027-e5e0-4921-9e6d-e619dfd5d2c7"
    }
  ]
}
```

<h3 id="stop-recording-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully stopped recording|Inline|

<h3 id="stop-recording-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mappings|[object]|false|none|none|
|» id|string|false|none|This stub mapping's unique identifier|
|» metadata|object|false|none|Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.|
|» name|string|false|none|The stub mapping's name|
|» newScenarioState|string|false|none|The new state for the scenario to be updated to after this stub is served.|
|» persistent|boolean|false|none|Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.|
|» postServeActions|object|false|none|A map of the names of post serve action extensions to trigger and their parameters.|
|» priority|integer|false|none|This stub mapping's priority relative to others. 1 is highest.|
|» request|object|false|none|none|
|» » basicAuthCredentials|object|false|none|Pre-emptive basic auth credentials to match against|
|» » » password|string|true|none|none|
|» » » username|string|true|none|none|
|» » bodyPatterns|[object]|false|none|Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » cookies|object|false|none|Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » headers|object|false|none|Header patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » method|string|false|none|The HTTP request method e.g. GET|
|» » queryParameters|object|false|none|Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form|
|» » url|string|false|none|The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPath|string|false|none|The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPathPattern|string|false|none|The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» » urlPattern|string|false|none|The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.|
|» requiredScenarioState|string|false|none|The required state of the scenario in order for this stub to be matched.|
|» response|object|false|none|none|
|» » additionalProxyRequestHeaders|object|false|none|Extra request headers to send when proxying to another host.|
|» » base64Body|string|false|none|The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » body|string|false|none|The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » bodyFileName|string|false|none|The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » delayDistribution|object|false|none|The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.|
|» » » *oneOf*|object|false|none|Log normal randomly distributed response delay.|
|» » » median|integer|false|none|none|
|» » » sigma|number|false|none|none|
|» » » type|string|false|none|none|
|» » » *oneOf*|object|false|none|Uniformly distributed random response delay.|
|» » » lower|integer|false|none|none|
|» » » type|string|false|none|none|
|» » » upper|integer|false|none|none|
|» » fault|string|false|none|The fault to apply (instead of a full, valid response).|
|» » fixedDelayMilliseconds|integer|false|none|Number of milliseconds to delay be before sending the response.|
|» » fromConfiguredStub|boolean|false|none|Read-only flag indicating false if this was the default, unmatched response. Not present otherwise.|
|» » headers|object|false|none|Map of response headers to send|
|» » jsonBody|object|false|none|The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified.|
|» » proxyBaseUrl|string|false|none|The base URL of the target to proxy matching requests to.|
|» » status|integer|false|none|The HTTP status code to be returned|
|» » statusMessage|string|false|none|The HTTP status message to be returned|
|» » transformerParameters|object|false|none|Parameters to apply to response transformers.|
|» » transformers|[string]|false|none|List of names of transformers to apply to this response.|
|» scenarioName|string|false|none|The name of the scenario that this stub mapping is part of|
|» uuid|string|false|none|Alias for the id|
|meta|object|false|none|none|
|» total|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » » type|lognormal|
|» » » type|uniform|
|» » fault|CONNECTION_RESET_BY_PEER|
|» » fault|EMPTY_RESPONSE|
|» » fault|MALFORMED_RESPONSE_CHUNK|
|» » fault|RANDOM_DATA_THEN_CLOSE|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wiremock-scenarios">Scenarios</h1>

Scenarios support modelling of stateful behaviour

<a href="http://wiremock.org/docs/stateful-behaviour/">User documentation</a>

## Get all scenarios

> Code samples

```bash
curl https://example.com/__admin/scenarios \
  -H 'Accept: application/json'
```

`GET /__admin/scenarios`

> Example responses

> 200 Response

```json
{
  "scenarios": [
    {
      "id": "c8d249ec-d86d-48b1-88a8-a660e6848042",
      "name": "my_scenario",
      "possibleStates": [
        "Started",
        "state_1",
        "state_2"
      ],
      "state": "state_2"
    }
  ]
}
```

<h3 id="get-all-scenarios-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All scenarios|Inline|

<h3 id="get-all-scenarios-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scenarios|[object]|false|none|none|
|» id|string|false|none|The scenario ID|
|» name|string|false|none|The scenario name|
|» possibleStates|[string]|false|none|none|
|» state|string|false|none|The current state of this scenario|

<aside class="success">
This operation does not require authentication
</aside>

## Reset the state of all scenarios

> Code samples

```bash
curl https://example.com/__admin/scenarios/reset \
  -X POST
```

`POST /__admin/scenarios/reset`

<h3 id="reset-the-state-of-all-scenarios-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully reset|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wiremock-system">System</h1>

Global operations

## Reset mappings and request journal

> Code samples

```bash
curl https://example.com/__admin/reset \
  -X POST
```

`POST /__admin/reset`

Reset mappings to the default state and reset the request journal

<h3 id="reset-mappings-and-request-journal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully reset|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update global settings

> Code samples

```bash
curl https://example.com/__admin/settings \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "median": 0,
    "sigma": 0,
    "type": "lognormal",
    "fixedDelay": 500
  }'
```

`POST /__admin/settings`

> Body parameter

```json
{
  "median": 0,
  "sigma": 0,
  "type": "lognormal",
  "fixedDelay": 500
}
```

<h3 id="update-global-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» *oneOf*|body|object|false|Log normal randomly distributed response delay.|
|» median|body|integer|false|none|
|» sigma|body|number|false|none|
|» type|body|string|false|none|
|» *oneOf*|body|object|false|Uniformly distributed random response delay.|
|» lower|body|integer|false|none|
|» type|body|string|false|none|
|» upper|body|integer|false|none|
|» fixedDelay|body|number|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|lognormal|
|» type|uniform|

<h3 id="update-global-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Settings successfully updated|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/__admin/shutdown

> Code samples

```bash
curl https://example.com/__admin/shutdown \
  -X POST
```

`POST /__admin/shutdown`

Shutdown the WireMock server

<h3 id="postadminshutdown-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Server will be shut down|None|

<aside class="success">
This operation does not require authentication
</aside>
