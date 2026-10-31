<h1 id="meshery-api">Meshery API. v0.4.27</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

the purpose of this application is to provide an application
that is using plain go code to define an API

This should demonstrate all the possible comment annotations
that are available to turn go code into a fully compliant swagger 2.0 spec

Base URLs:

* <a href="http://meshery.local">http://meshery.local</a>

* <a href="https://api.apis.guru/">https://api.apis.guru/</a>

License: <a href="http://www.apache.org/licenses/LICENSE-2.0.txt">Apache-2.0</a>

# Authentication

* API Key (token)
    - Parameter Name: **token**, in: cookie.

<h1 id="meshery-api-applicationsapi">ApplicationsAPI</h1>

## Handle GET request for Application Files

<a id="opIdidGetApplicationFileRequest"></a>

> Code samples

```bash
curl https://example.com/api/application/ \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/application/`

Returns requests for all Meshery Applications

> Example responses

> 200 Response

```json
{
  "applications": [
    {
      "application_file": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "id": [
        0
      ],
      "location": {
        "property1": {},
        "property2": {}
      },
      "name": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "user_id": "string"
    }
  ],
  "page": 0,
  "page_size": 0,
  "total_count": 0
}
```

<h3 id="handle-get-request-for-application-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns all meshery applications|[ApplicationsAPIResponse](#schemaapplicationsapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle POST request for Application Files

<a id="opIdidPostApplicationFileRequest"></a>

> Code samples

```bash
curl https://example.com/api/application/ \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`POST /api/application/`

Save attached Meshery Application File

> Example responses

> 200 Response

```json
{
  "application_file": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "id": [
    0
  ],
  "location": {
    "property1": {},
    "property2": {}
  },
  "name": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "user_id": "string"
}
```

<h3 id="handle-post-request-for-application-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Fetches a single Meshery Application|[MesheryApplication](#schemamesheryapplication)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle POST request for Application File Deploy

<a id="opIdidPostDeployApplicationFile"></a>

> Code samples

```bash
curl https://example.com/api/application/deploy \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}" \
  -F 'Upload Yaml/Yml File=@/path/to/file'
```

`POST /api/application/deploy`

Deploy an attached application file with the request

> Body parameter

```yaml
Upload Yaml/Yml File: string
```

<h3 id="handle-post-request-for-application-file-deploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» Upload Yaml/Yml File|body|string(binary)|false|none|

> Example responses

> 200 Response

```json
{
  "application_file": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "id": [
    0
  ],
  "location": {
    "property1": {},
    "property2": {}
  },
  "name": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "user_id": "string"
}
```

<h3 id="handle-post-request-for-application-file-deploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the response of the application files|[MesheryApplication](#schemamesheryapplication)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle DELETE request for Application File Deploy

<a id="opIdidDeleteApplicationFile"></a>

> Code samples

```bash
curl https://example.com/api/application/deploy \
  -X DELETE \
  -H "Cookie: token=${API_KEY}"
```

`DELETE /api/application/deploy`

Delete a deployed application file with the request

<h3 id="handle-delete-request-for-application-file-deploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for Meshery Application with the given id

<a id="opIdidGetMesheryApplication"></a>

> Code samples

```bash
curl https://example.com/api/application/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/application/{id}`

Fetches the list of all applications saved by the current user

<h3 id="handle-get-request-for-meshery-application-with-the-given-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|id for a specific|

> Example responses

> 200 Response

```json
{
  "application_file": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "id": [
    0
  ],
  "location": {
    "property1": {},
    "property2": {}
  },
  "name": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "user_id": "string"
}
```

<h3 id="handle-get-request-for-meshery-application-with-the-given-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Fetches a single Meshery Application|[MesheryApplication](#schemamesheryapplication)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle Delete for a Meshery Application File

<a id="opIdidDeleteMesheryApplicationFile"></a>

> Code samples

```bash
curl https://example.com/api/application/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Cookie: token=${API_KEY}"
```

`DELETE /api/application/{id}`

Deletes a meshery application file with ID: id

<h3 id="handle-delete-for-a-meshery-application-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|id for a specific|

<h3 id="handle-delete-for-a-meshery-application-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

<h1 id="meshery-api-filtersapi">FiltersAPI</h1>

## Handle GET request for all filters

<a id="opIdidGetFilterFile"></a>

> Code samples

```bash
curl https://example.com/api/filter \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/filter`

Returns all the Meshery Filters saved by the current user

> Example responses

> 200 Response

```json
{
  "filters": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "filter_file": "string",
      "id": [
        0
      ],
      "location": {
        "property1": {},
        "property2": {}
      },
      "name": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "user_id": "string"
    }
  ],
  "page": 0,
  "page_size": 0,
  "total_count": 0
}
```

<h3 id="handle-get-request-for-all-filters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns all meshery filters|[FiltersAPIResponse](#schemafiltersapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle POST requests for Meshery Filters

<a id="opIdidPostFilterFile"></a>

> Code samples

```bash
curl https://example.com/api/filter \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`POST /api/filter`

Used to save/update a Meshery Filter

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "filter_file": "string",
  "id": [
    0
  ],
  "location": {
    "property1": {},
    "property2": {}
  },
  "name": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "user_id": "string"
}
```

<h3 id="handle-post-requests-for-meshery-filters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a single meshery filter|[MesheryFilter](#schemamesheryfilter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for filter file with given id

<a id="opIdidGetFilterFiles"></a>

> Code samples

```bash
curl https://example.com/api/filter/file/string \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/filter/file/{id}`

Returns the Meshery Filter file saved by the current user with the given id

<h3 id="handle-get-request-for-filter-file-with-given-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "filter_file": "string",
  "id": [
    0
  ],
  "location": {
    "property1": {},
    "property2": {}
  },
  "name": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "user_id": "string"
}
```

<h3 id="handle-get-request-for-filter-file-with-given-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a single meshery filter|[MesheryFilter](#schemamesheryfilter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for a Meshery Filter

<a id="opIdidGetMesheryFilter"></a>

> Code samples

```bash
curl https://example.com/api/filter/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/filter/{id}`

Fetches the Meshery Filter with the given id

<h3 id="handle-get-request-for-a-meshery-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|id for a specific|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "filter_file": "string",
  "id": [
    0
  ],
  "location": {
    "property1": {},
    "property2": {}
  },
  "name": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "user_id": "string"
}
```

<h3 id="handle-get-request-for-a-meshery-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a single meshery filter|[MesheryFilter](#schemamesheryfilter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle Delete for a Meshery Filter

<a id="opIdidDeleteMesheryFilter"></a>

> Code samples

```bash
curl https://example.com/api/filter/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Cookie: token=${API_KEY}"
```

`DELETE /api/filter/{id}`

Deletes a meshery filter with ID: id

<h3 id="handle-delete-for-a-meshery-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|id for a specific|

<h3 id="handle-delete-for-a-meshery-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

<h1 id="meshery-api-patternsapi">PatternsAPI</h1>

## Handles the get requests for the OAM objects

<a id="opIdidGETOAMMesheryPattern"></a>

> Code samples

```bash
curl https://example.com/api/oam/string \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/oam/{type}`

Getting list of workloads/traits/scopes

{type} being of either trait, scope, workload; registration of adapter capabilities.

<h3 id="handles-the-get-requests-for-the-oam-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|Automatically added|

<h3 id="handles-the-get-requests-for-the-oam-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handles registering OMA objects

<a id="opIdidPOSTOAMMesheryPattern"></a>

> Code samples

```bash
curl https://example.com/api/oam/string \
  -X POST \
  -H "Cookie: token=${API_KEY}"
```

`POST /api/oam/{type}`

Adding a workload/trait/scope

{type} being of either trait, scope, workload; registration of adapter capabilities.

<h3 id="handles-registering-oma-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|Automatically added|

<h3 id="handles-registering-oma-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for patterns

<a id="opIdidGetPatternFiles"></a>

> Code samples

```bash
curl https://example.com/api/pattern \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/pattern`

Returns the list of all the patterns saved by the current user
This will return all the patterns with their details

> Example responses

> 200 Response

```json
{
  "page": 0,
  "page_size": 0,
  "patterns": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "id": [
        0
      ],
      "location": {
        "property1": {},
        "property2": {}
      },
      "name": "string",
      "pattern_file": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "user_id": "string"
    }
  ],
  "total_count": 0
}
```

<h3 id="handle-get-request-for-patterns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns all meshery patterns|[PatternsAPIResponse](#schemapatternsapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle POST requests for patterns

<a id="opIdidPostPatternFile"></a>

> Code samples

```bash
curl https://example.com/api/pattern \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`POST /api/pattern`

Edit/update a meshery pattern

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "id": [
    0
  ],
  "location": {
    "property1": {},
    "property2": {}
  },
  "name": "string",
  "pattern_file": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "user_id": "string"
}
```

<h3 id="handle-post-requests-for-patterns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a single meshery pattern|[MesheryPattern](#schemamesherypattern)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle POST request for Pattern Deploy

<a id="opIdidPostDeployPattern"></a>

> Code samples

```bash
curl https://example.com/api/pattern/deploy \
  -X POST \
  -H "Cookie: token=${API_KEY}" \
  -F 'Upload Yaml/Yml File=@/path/to/file'
```

`POST /api/pattern/deploy`

Deploy an attached pattern with the request

> Body parameter

```yaml
Upload Yaml/Yml File: string
```

<h3 id="handle-post-request-for-pattern-deploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» Upload Yaml/Yml File|body|string(binary)|false|none|

<h3 id="handle-post-request-for-pattern-deploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle DELETE request for Pattern Deploy

<a id="opIdidDeleteDeployPattern"></a>

> Code samples

```bash
curl https://example.com/api/pattern/deploy \
  -X DELETE \
  -H "Cookie: token=${API_KEY}"
```

`DELETE /api/pattern/deploy`

Delete a deployed pattern with the request

<h3 id="handle-delete-request-for-pattern-deploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET for a Meshery Pattern

<a id="opIdidGetMesheryPattern"></a>

> Code samples

```bash
curl https://example.com/api/pattern/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/pattern/{id}`

Fetches the pattern with the given id

<h3 id="handle-get-for-a-meshery-pattern-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|id for a specific|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "id": [
    0
  ],
  "location": {
    "property1": {},
    "property2": {}
  },
  "name": "string",
  "pattern_file": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "user_id": "string"
}
```

<h3 id="handle-get-for-a-meshery-pattern-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a single meshery pattern|[MesheryPattern](#schemamesherypattern)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle Delete for a Meshery Pattern

<a id="opIdidDeleteMesheryPattern"></a>

> Code samples

```bash
curl https://example.com/api/pattern/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Cookie: token=${API_KEY}"
```

`DELETE /api/pattern/{id}`

Deletes a meshery pattern with ID: id

<h3 id="handle-delete-for-a-meshery-pattern-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|id for a specific|

<h3 id="handle-delete-for-a-meshery-pattern-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

<h1 id="meshery-api-perfapi">PerfAPI</h1>

## Handle GET request to run a test

<a id="opIdidRunPerfTest"></a>

> Code samples

```bash
curl https://example.com/api/perf/profile \
  -H 'Content-Type: application/json' \
  -H "Cookie: token=${API_KEY}" \
  -d '{
    "clients": [
      {
        "body": "string",
        "connections": 0,
        "content_type": "string",
        "cookies": {
          "property1": "string",
          "property2": "string"
        },
        "endpoint_urls": [
          "string"
        ],
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "internal": true,
        "load_generator": "string",
        "protocol": 0,
        "rps": 0
      }
    ],
    "duration": "string",
    "id": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "smp_version": "string"
  }'
```

`GET /api/perf/profile`

Runs the load test with the given parameters

> Body parameter

```json
{
  "clients": [
    {
      "body": "string",
      "connections": 0,
      "content_type": "string",
      "cookies": {
        "property1": "string",
        "property2": "string"
      },
      "endpoint_urls": [
        "string"
      ],
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "internal": true,
      "load_generator": "string",
      "protocol": 0,
      "rps": 0
    }
  ],
  "duration": "string",
  "id": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "smp_version": "string"
}
```

<h3 id="handle-get-request-to-run-a-test-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PerformanceTestConfig](#schemaperformancetestconfig)|false|none|
|» clients|body|[[PerformanceTestConfig_Client](#schemaperformancetestconfig_client)]|false|Single or distributed load generators|
|» duration|body|string|false|Length of time the endpoint will be under load|
|» id|body|string|false|none|
|» labels|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|none|
|» smp_version|body|string|false|Spec version|

<h3 id="handle-get-request-to-run-a-test-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handles GET requests for perf results

<a id="opIdidGetAllPerfResults"></a>

> Code samples

```bash
curl https://example.com/api/perf/profile/result \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/perf/profile/result`

Returns pages of all the perf results from Remote Provider

> Example responses

> 200 Response

```json
{
  "page": 0,
  "page_size": 0,
  "results": [
    {
      "mesh": "string",
      "meshery_id": [
        0
      ],
      "name": "string",
      "performance_profile": [
        0
      ],
      "runner_results": {
        "ActualDuration": 0,
        "ActualQPS": 0,
        "DurationHistogram": {
          "Avg": 0,
          "Max": 0,
          "Min": 0,
          "Percentiles": [
            {
              "Percentile": 0,
              "Value": 0
            }
          ]
        },
        "StartTime": "1970-01-01T00:00:00Z",
        "URL": "string",
        "load-generator": "string"
      },
      "server_board_config": {},
      "server_metrics": {},
      "test_start_time": "1970-01-01T00:00:00Z",
      "user_id": [
        0
      ]
    }
  ],
  "total_count": 0
}
```

<h3 id="handles-get-requests-for-perf-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns all performance results|[PerformanceResultsAPIResponse](#schemaperformanceresultsapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handles GET requests for perf result

<a id="opIdidGetSinglePerfResult"></a>

> Code samples

```bash
curl https://example.com/api/perf/profile/result/string \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/perf/profile/result/{id}`

Returns an individual result from provider

<h3 id="handles-get-requests-for-perf-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{
  "ActualQPS": 0,
  "DetailsURI": "string",
  "EndTime": "1970-01-01T00:00:00Z",
  "EnvID": "string",
  "Latencies": {
    "Average": 0,
    "Max": 0,
    "Min": 0,
    "P50": 0,
    "P90": 0,
    "P99": 0
  },
  "MeshConfigID": "string",
  "SMPVersion": "string",
  "StartTime": "1970-01-01T00:00:00Z",
  "TestID": "string"
}
```

<h3 id="handles-get-requests-for-perf-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns Single test result|[PerformanceSpec](#schemaperformancespec)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

<h1 id="meshery-api-providersapi">ProvidersAPI</h1>

## Handle GET request for the choice of provider

<a id="opIdidChoiceProvider"></a>

> Code samples

```bash
curl https://example.com/api/provider \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/provider`

Update the choice of provider in system

<h3 id="handle-get-request-for-the-choice-of-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|query|string|false|none|

<h3 id="handle-get-request-for-the-choice-of-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET requests for Provider

<a id="opIdidGetProviderCapabilities"></a>

> Code samples

```bash
curl https://example.com/api/provider/capabilities \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/provider/capabilities`

Returns the capabilities.json for the provider

<h3 id="handle-get-requests-for-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for React Components

<a id="opIdidReactComponents"></a>

> Code samples

```bash
curl https://example.com/api/provider/extension \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/provider/extension`

handles the requests to serve react components from the provider package

<h3 id="handle-get-request-for-react-components-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for list of providers

<a id="opIdidGetProvidersList"></a>

> Code samples

```bash
curl https://example.com/api/providers \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/providers`

Returns the available list of providers

> Example responses

> 200 Response

```json
{
  "property1": {
    "capabilities": [
      {
        "endpoint": "string",
        "feature": "string"
      }
    ],
    "extensions": {
      "graphql": [
        {
          "component": "string",
          "path": "string"
        }
      ],
      "navigator": [
        {}
      ],
      "user_prefs": [
        {
          "component": "string"
        }
      ]
    },
    "package_url": "string",
    "package_version": "string",
    "provider_description": [
      "string"
    ],
    "provider_name": "string",
    "provider_type": "string",
    "provider_url": "string"
  },
  "property2": {
    "capabilities": [
      {
        "endpoint": "string",
        "feature": "string"
      }
    ],
    "extensions": {
      "graphql": [
        {
          "component": "string",
          "path": "string"
        }
      ],
      "navigator": [
        {}
      ],
      "user_prefs": [
        {
          "component": "string"
        }
      ]
    },
    "package_url": "string",
    "package_version": "string",
    "provider_description": [
      "string"
    ],
    "provider_name": "string",
    "provider_type": "string",
    "provider_url": "string"
  }
}
```

<h3 id="handle-get-request-for-list-of-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of available providers|Inline|

<h3 id="handle-get-request-for-list-of-providers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ProviderProperties](#schemaproviderproperties)|false|none|ProviderProperties represents the structure of properties that a provider has|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request to provider UI

<a id="opIdidProvider"></a>

> Code samples

```bash
curl https://example.com/provider \
  -H "Cookie: token=${API_KEY}"
```

`GET /provider`

Servers providers UI

<h3 id="handle-get-request-to-provider-ui-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

<h1 id="meshery-api-systemapi">SystemAPI</h1>

## Handle POST requests to persist adapter config

<a id="opIdidPostAdapterConfig"></a>

> Code samples

```bash
curl https://example.com/api/system/adapter/manage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}" \
  -d '"string"'
```

`POST /api/system/adapter/manage`

Used to persist adapter config

> Body parameter

```json
"string"
```

<h3 id="handle-post-requests-to-persist-adapter-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "adapter_location": "string",
    "git_commit_sha": "string",
    "name": "string",
    "ops": [
      {
        "category": 0,
        "key": "string",
        "value": "string"
      }
    ],
    "version": "string"
  }
]
```

<h3 id="handle-post-requests-to-persist-adapter-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns all the meshery adapters|Inline|

<h3 id="handle-post-requests-to-persist-adapter-config-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Adapter](#schemaadapter)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle DELETE requests to delete adapter config

<a id="opIdidDeleteAdapterConfig"></a>

> Code samples

```bash
curl https://example.com/api/system/adapter/manage \
  -X DELETE \
  -H "Cookie: token=${API_KEY}"
```

`DELETE /api/system/adapter/manage`

Used to delete adapter configuration

<h3 id="handle-delete-requests-to-delete-adapter-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adapter|query|string|false|none|

<h3 id="handle-delete-requests-to-delete-adapter-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle POST requests for Adapter Operations

<a id="opIdidPostAdapterOperation"></a>

> Code samples

```bash
curl https://example.com/api/system/adapter/operation \
  -X POST \
  -H "Cookie: token=${API_KEY}"
```

`POST /api/system/adapter/operation`

Used to send operations to the adapters

<h3 id="handle-post-requests-for-adapter-operations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adapter|query|string|false|none|
|query|query|string|false|none|
|customBody|query|string|false|none|
|namespace|query|string|false|none|
|deleteOp|query|string|false|none|

<h3 id="handle-post-requests-for-adapter-operations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for adapters

<a id="opIdidGetSystemAdapters"></a>

> Code samples

```bash
curl https://example.com/api/system/adapters \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/system/adapters`

Fetches and returns all the adapters and ping adapters

<h3 id="handle-get-request-for-adapters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adapter|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "adapter_location": "string",
    "git_commit_sha": "string",
    "name": "string",
    "ops": [
      {
        "category": 0,
        "key": "string",
        "value": "string"
      }
    ],
    "version": "string"
  }
]
```

<h3 id="handle-get-request-for-adapters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return all the adapters|Inline|

<h3 id="handle-get-request-for-adapters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Adapter](#schemaadapter)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle POST request for Kubernetes Config

<a id="opIdidPostK8SConfig"></a>

> Code samples

```bash
curl https://example.com/api/system/kubernetes \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`POST /api/system/kubernetes`

Used to add kubernetes config to System

> Example responses

> 200 Response

```json
{
  "clusterConfigured": true,
  "config": [
    0
  ],
  "configuredServer": "string",
  "contextName": "string",
  "inClusterConfig": true,
  "k8sfile": "string",
  "nodes": [
    {
      "allocatable_cpu": "string",
      "allocatable_memory": "string",
      "architecture": "string",
      "capacity_cpu": "string",
      "capacity_memory": "string",
      "container_runtime_version": "string",
      "hostname": "string",
      "internal_ip": "string",
      "kubelet_version": "string",
      "kubeproxy_version": "string",
      "operating_system": "string",
      "os_image": "string"
    }
  ],
  "server_version": "string"
}
```

<h3 id="handle-post-request-for-kubernetes-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns saved kubernetes config|[K8SConfig](#schemak8sconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle DELETE request for Kubernetes Config

<a id="opIdidDeleteK8SConfig"></a>

> Code samples

```bash
curl https://example.com/api/system/kubernetes \
  -X DELETE \
  -H "Cookie: token=${API_KEY}"
```

`DELETE /api/system/kubernetes`

Used to delete kubernetes config to System

<h3 id="handle-delete-request-for-kubernetes-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle POST requests for Kubernetes Context list

<a id="opIdidPostK8SContexts"></a>

> Code samples

```bash
curl https://example.com/api/system/kubernetes/contexts \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`POST /api/system/kubernetes/contexts`

Returns the context list for a given k8s config

> Example responses

> 200 Response

```json
[
  {
    "clusterName": "string",
    "contextName": "string",
    "currentContext": true
  }
]
```

<h3 id="handle-post-requests-for-kubernetes-context-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns kubernetes context list|Inline|

<h3 id="handle-post-requests-for-kubernetes-context-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[K8SContext](#schemak8scontext)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for Kubernetes ping

<a id="opIdidGetKubernetesPing"></a>

> Code samples

```bash
curl https://example.com/api/system/kubernetes/ping \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/system/kubernetes/ping`

Fetches server version to simulate ping

<h3 id="handle-get-request-for-kubernetes-ping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for mesh-sync grafana

<a id="opIdidMeshSyncGrafana"></a>

> Code samples

```bash
curl https://example.com/api/system/meshsync/grafana \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/system/meshsync/grafana`

Fetches Prometheus and Grafana

> Example responses

> 200 Response

```json
{
  "property1": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "apiVersion": "string",
      "clusterName": "string",
      "creationTimestamp": {},
      "deletionGracePeriodSeconds": 0,
      "deletionTimestamp": {},
      "finalizers": [
        "string"
      ],
      "generateName": "string",
      "generation": 0,
      "kind": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "managedFields": [
        {
          "apiVersion": "string",
          "fieldsType": "string",
          "fieldsV1": {},
          "manager": "string",
          "operation": "string",
          "time": {}
        }
      ],
      "name": "string",
      "namespace": "string",
      "ownerReferences": [
        {
          "apiVersion": "string",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "string",
          "name": "string",
          "uid": "string"
        }
      ],
      "resourceVersion": "string",
      "selfLink": "string",
      "spec": {
        "clusterIP": "string",
        "externalIPs": [
          "string"
        ],
        "externalName": "string",
        "externalTrafficPolicy": "string",
        "healthCheckNodePort": 0,
        "ipFamily": "string",
        "loadBalancerIP": "string",
        "loadBalancerSourceRanges": [
          "string"
        ],
        "ports": [
          {
            "appProtocol": "string",
            "name": "string",
            "nodePort": 0,
            "port": 0,
            "protocol": "string",
            "targetPort": {
              "IntVal": 0,
              "StrVal": "string",
              "Type": 0
            }
          }
        ],
        "publishNotReadyAddresses": true,
        "selector": {
          "property1": "string",
          "property2": "string"
        },
        "sessionAffinity": "string",
        "sessionAffinityConfig": {
          "clientIP": {
            "timeoutSeconds": 0
          }
        },
        "topologyKeys": [
          "string"
        ],
        "type": "string"
      },
      "status": {
        "loadBalancer": {
          "ingress": [
            {
              "hostname": "string",
              "ip": "string"
            }
          ]
        }
      },
      "uid": "string"
    }
  ],
  "property2": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "apiVersion": "string",
      "clusterName": "string",
      "creationTimestamp": {},
      "deletionGracePeriodSeconds": 0,
      "deletionTimestamp": {},
      "finalizers": [
        "string"
      ],
      "generateName": "string",
      "generation": 0,
      "kind": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "managedFields": [
        {
          "apiVersion": "string",
          "fieldsType": "string",
          "fieldsV1": {},
          "manager": "string",
          "operation": "string",
          "time": {}
        }
      ],
      "name": "string",
      "namespace": "string",
      "ownerReferences": [
        {
          "apiVersion": "string",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "string",
          "name": "string",
          "uid": "string"
        }
      ],
      "resourceVersion": "string",
      "selfLink": "string",
      "spec": {
        "clusterIP": "string",
        "externalIPs": [
          "string"
        ],
        "externalName": "string",
        "externalTrafficPolicy": "string",
        "healthCheckNodePort": 0,
        "ipFamily": "string",
        "loadBalancerIP": "string",
        "loadBalancerSourceRanges": [
          "string"
        ],
        "ports": [
          {
            "appProtocol": "string",
            "name": "string",
            "nodePort": 0,
            "port": 0,
            "protocol": "string",
            "targetPort": {
              "IntVal": 0,
              "StrVal": "string",
              "Type": 0
            }
          }
        ],
        "publishNotReadyAddresses": true,
        "selector": {
          "property1": "string",
          "property2": "string"
        },
        "sessionAffinity": "string",
        "sessionAffinityConfig": {
          "clientIP": {
            "timeoutSeconds": 0
          }
        },
        "topologyKeys": [
          "string"
        ],
        "type": "string"
      },
      "status": {
        "loadBalancer": {
          "ingress": [
            {
              "hostname": "string",
              "ip": "string"
            }
          ]
        }
      },
      "uid": "string"
    }
  ]
}
```

<h3 id="handle-get-request-for-mesh-sync-grafana-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a map for v1 services|Inline|

<h3 id="handle-get-request-for-mesh-sync-grafana-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[[Service](#schemaservice)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for fetching prometheus

<a id="opIdidMeshSyncPrometheus"></a>

> Code samples

```bash
curl https://example.com/api/system/meshsync/prometheus \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/system/meshsync/prometheus`

Fetches Prometheus

> Example responses

> 200 Response

```json
{
  "property1": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "apiVersion": "string",
      "clusterName": "string",
      "creationTimestamp": {},
      "deletionGracePeriodSeconds": 0,
      "deletionTimestamp": {},
      "finalizers": [
        "string"
      ],
      "generateName": "string",
      "generation": 0,
      "kind": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "managedFields": [
        {
          "apiVersion": "string",
          "fieldsType": "string",
          "fieldsV1": {},
          "manager": "string",
          "operation": "string",
          "time": {}
        }
      ],
      "name": "string",
      "namespace": "string",
      "ownerReferences": [
        {
          "apiVersion": "string",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "string",
          "name": "string",
          "uid": "string"
        }
      ],
      "resourceVersion": "string",
      "selfLink": "string",
      "spec": {
        "clusterIP": "string",
        "externalIPs": [
          "string"
        ],
        "externalName": "string",
        "externalTrafficPolicy": "string",
        "healthCheckNodePort": 0,
        "ipFamily": "string",
        "loadBalancerIP": "string",
        "loadBalancerSourceRanges": [
          "string"
        ],
        "ports": [
          {
            "appProtocol": "string",
            "name": "string",
            "nodePort": 0,
            "port": 0,
            "protocol": "string",
            "targetPort": {
              "IntVal": 0,
              "StrVal": "string",
              "Type": 0
            }
          }
        ],
        "publishNotReadyAddresses": true,
        "selector": {
          "property1": "string",
          "property2": "string"
        },
        "sessionAffinity": "string",
        "sessionAffinityConfig": {
          "clientIP": {
            "timeoutSeconds": 0
          }
        },
        "topologyKeys": [
          "string"
        ],
        "type": "string"
      },
      "status": {
        "loadBalancer": {
          "ingress": [
            {
              "hostname": "string",
              "ip": "string"
            }
          ]
        }
      },
      "uid": "string"
    }
  ],
  "property2": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "apiVersion": "string",
      "clusterName": "string",
      "creationTimestamp": {},
      "deletionGracePeriodSeconds": 0,
      "deletionTimestamp": {},
      "finalizers": [
        "string"
      ],
      "generateName": "string",
      "generation": 0,
      "kind": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "managedFields": [
        {
          "apiVersion": "string",
          "fieldsType": "string",
          "fieldsV1": {},
          "manager": "string",
          "operation": "string",
          "time": {}
        }
      ],
      "name": "string",
      "namespace": "string",
      "ownerReferences": [
        {
          "apiVersion": "string",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "string",
          "name": "string",
          "uid": "string"
        }
      ],
      "resourceVersion": "string",
      "selfLink": "string",
      "spec": {
        "clusterIP": "string",
        "externalIPs": [
          "string"
        ],
        "externalName": "string",
        "externalTrafficPolicy": "string",
        "healthCheckNodePort": 0,
        "ipFamily": "string",
        "loadBalancerIP": "string",
        "loadBalancerSourceRanges": [
          "string"
        ],
        "ports": [
          {
            "appProtocol": "string",
            "name": "string",
            "nodePort": 0,
            "port": 0,
            "protocol": "string",
            "targetPort": {
              "IntVal": 0,
              "StrVal": "string",
              "Type": 0
            }
          }
        ],
        "publishNotReadyAddresses": true,
        "selector": {
          "property1": "string",
          "property2": "string"
        },
        "sessionAffinity": "string",
        "sessionAffinityConfig": {
          "clientIP": {
            "timeoutSeconds": 0
          }
        },
        "topologyKeys": [
          "string"
        ],
        "type": "string"
      },
      "status": {
        "loadBalancer": {
          "ingress": [
            {
              "hostname": "string",
              "ip": "string"
            }
          ]
        }
      },
      "uid": "string"
    }
  ]
}
```

<h3 id="handle-get-request-for-fetching-prometheus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a map for v1 services|Inline|

<h3 id="handle-get-request-for-fetching-prometheus-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[[Service](#schemaservice)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for config sync

<a id="opIdidSystemSync"></a>

> Code samples

```bash
curl https://example.com/api/system/sync \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/system/sync`

Used to send session data to the UI for initial sync

> Example responses

> 200 Response

```json
{
  "anonymousPerfResults": true,
  "anonymousUsageStats": true,
  "grafana": {
    "grafanaAPIKey": "string",
    "grafanaURL": "string",
    "selectedBoardsConfigs": [
      {
        "board": {
          "org_id": 0,
          "panels": [
            {
              "alert": {
                "alertRuleTags": {
                  "property1": "string",
                  "property2": "string"
                },
                "conditions": [
                  {
                    "evaluator": {
                      "params": [
                        0
                      ],
                      "type": "string"
                    },
                    "operator": {
                      "type": "string"
                    },
                    "query": {
                      "params": [
                        "string"
                      ]
                    },
                    "reducer": {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    },
                    "type": "string"
                  }
                ],
                "executionErrorState": "string",
                "for": "string",
                "frequency": "string",
                "handler": 0,
                "message": "string",
                "name": "string",
                "noDataState": "string",
                "notifications": [
                  {
                    "disableResolveMessage": true,
                    "frequency": "string",
                    "id": 0,
                    "isDefault": true,
                    "name": "string",
                    "sendReminder": true,
                    "settings": {},
                    "type": "string",
                    "uid": "string"
                  }
                ]
              },
              "aliasColors": {},
              "bars": true,
              "cards": {
                "cardPadding": 0,
                "cardRound": 0
              },
              "collapsed": true,
              "color": {
                "cardColor": "string",
                "colorScale": "string",
                "colorScheme": "string",
                "exponent": 0,
                "max": 0,
                "min": 0,
                "mode": "string"
              },
              "colorBackground": true,
              "colorValue": true,
              "colors": [
                "string"
              ],
              "columns": [
                {
                  "text": "string",
                  "value": "string"
                }
              ],
              "content": "string",
              "dashLength": 0,
              "dashboardTags": [
                "string"
              ],
              "dashes": true,
              "dataFormat": "string",
              "datasource": "string",
              "decimals": 0,
              "description": "string",
              "editable": true,
              "error": true,
              "fieldConfig": {
                "defaults": {
                  "threshold": {
                    "mode": "string",
                    "steps": [
                      {
                        "color": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "unit": "string"
                }
              },
              "fill": 0,
              "folderId": 0,
              "format": "string",
              "gauge": {
                "maxValue": 0,
                "minValue": 0,
                "show": true,
                "thresholdLabels": true,
                "thresholdMarkers": true
              },
              "gridPos": {
                "h": 0,
                "w": 0,
                "x": 0,
                "y": 0
              },
              "headings": true,
              "height": {},
              "hideTimeOverride": true,
              "hideZeroBuckets": true,
              "highlightCards": true,
              "id": 0,
              "isNew": true,
              "leftYAxisLabel": "string",
              "legend": {
                "alignAsTable": true,
                "avg": true,
                "current": true,
                "hideEmpty": true,
                "hideZero": true,
                "max": true,
                "min": true,
                "rightSide": true,
                "show": true,
                "sideWidth": 0,
                "total": true,
                "values": true
              },
              "limit": 0,
              "lines": true,
              "linewidth": 0,
              "links": [
                {
                  "asDropdown": true,
                  "dashUri": "string",
                  "dashboard": "string",
                  "icon": "string",
                  "includeVars": true,
                  "keepTime": true,
                  "params": "string",
                  "tags": [
                    "string"
                  ],
                  "targetBlank": true,
                  "title": "string",
                  "tooltip": "string",
                  "type": "string",
                  "url": "string"
                }
              ],
              "mappingType": 0,
              "mappingTypes": [
                {
                  "name": "string",
                  "value": 0
                }
              ],
              "maxDataPoints": {
                "Valid": true,
                "Value": 0
              },
              "minSpan": 0,
              "mode": "string",
              "nameFilter": "string",
              "nullPointMode": "string",
              "onlyAlertsOnDashboard": true,
              "options": {
                "colorMode": "string",
                "content": "string",
                "displayMode": "string",
                "graphMode": "string",
                "justifyMode": "string",
                "mode": "string",
                "orientation": "string",
                "reduceOptions": {
                  "calcs": [
                    "string"
                  ],
                  "fields": "string",
                  "values": true
                },
                "textMode": "string"
              },
              "pageSize": 0,
              "panels": [
                {}
              ],
              "percentage": true,
              "pointradius": 0,
              "points": true,
              "postfix": "string",
              "postfixFontSize": "string",
              "prefix": "string",
              "prefixFontSize": "string",
              "query": "string",
              "rangeMaps": [
                {
                  "from": "string",
                  "text": "string",
                  "to": "string"
                }
              ],
              "recent": true,
              "renderer": "string",
              "repeat": "string",
              "repeatPanelId": 0,
              "reverseYBuckets": true,
              "rightYAxisLabel": "string",
              "scopedVars": {
                "property1": {
                  "selected": true,
                  "text": "string",
                  "value": "string"
                },
                "property2": {
                  "selected": true,
                  "text": "string",
                  "value": "string"
                }
              },
              "scroll": true,
              "search": true,
              "seriesOverrides": [
                {
                  "alias": "string",
                  "bars": true,
                  "color": "string",
                  "dashes": true,
                  "fill": 0,
                  "fillBelowTo": "string",
                  "legend": true,
                  "lines": true,
                  "linewidth": 0,
                  "nullPointMode": "string",
                  "stack": {
                    "Flag": true,
                    "Value": "string"
                  },
                  "transform": "string",
                  "yaxis": 0,
                  "zindex": 0
                }
              ],
              "show": "string",
              "showHeader": true,
              "sort": {
                "col": 0,
                "desc": true
              },
              "sortOrder": 0,
              "spaceLength": 0,
              "span": 0,
              "sparkline": {
                "fillColor": "string",
                "full": true,
                "lineColor": "string",
                "show": true,
                "ymax": 0,
                "ymin": 0
              },
              "stack": true,
              "starred": true,
              "stateFilter": [
                "string"
              ],
              "steppedLine": true,
              "styles": [
                {
                  "alias": "string",
                  "colorMode": "string",
                  "colors": [
                    "string"
                  ],
                  "dateFormat": "string",
                  "decimals": 0,
                  "link": true,
                  "linkTargetBlank": true,
                  "linkTooltip": "string",
                  "linkUrl": "string",
                  "mappingType": 0,
                  "pattern": "string",
                  "thresholds": [
                    "string"
                  ],
                  "type": "string",
                  "unit": "string",
                  "valueMaps": [
                    {
                      "op": "string",
                      "text": "string",
                      "value": "string"
                    }
                  ]
                }
              ],
              "tags": [
                "string"
              ],
              "targets": [
                {
                  "alias": "string",
                  "aliasBy": "string",
                  "alignOptions": [
                    {
                      "expanded": true,
                      "label": "string",
                      "options": [
                        {
                          "label": "string",
                          "metricKinds": [
                            "string"
                          ],
                          "text": "string",
                          "value": "string",
                          "valueTypes": [
                            "string"
                          ]
                        }
                      ]
                    }
                  ],
                  "alignmentPeriod": "string",
                  "bucketAggs": [
                    {
                      "field": "string",
                      "id": "string",
                      "settings": {
                        "interval": "string",
                        "min_doc_count": {},
                        "order": "string",
                        "orderBy": "string",
                        "size": "string"
                      },
                      "type": "string"
                    }
                  ],
                  "crossSeriesReducer": "string",
                  "datasource": "string",
                  "dimensions": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "dsType": "string",
                  "expr": "string",
                  "filters": [
                    "string"
                  ],
                  "format": "string",
                  "group": [
                    {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ],
                  "groupBys": [
                    "string"
                  ],
                  "hide": true,
                  "instant": true,
                  "interval": "string",
                  "intervalFactor": 0,
                  "legendFormat": "string",
                  "measurement": "string",
                  "metricColumn": "string",
                  "metricKind": "string",
                  "metricName": "string",
                  "metricType": "string",
                  "metrics": [
                    {
                      "field": "string",
                      "id": "string",
                      "type": "string"
                    }
                  ],
                  "namespace": "string",
                  "perSeriesAligner": "string",
                  "period": "string",
                  "projectName": "string",
                  "query": "string",
                  "rawQuery": true,
                  "rawSql": "string",
                  "refId": "string",
                  "region": "string",
                  "select": [
                    [
                      {
                        "params": [
                          "string"
                        ],
                        "type": "string"
                      }
                    ]
                  ],
                  "statistics": [
                    "string"
                  ],
                  "step": 0,
                  "table": "string",
                  "target": "string",
                  "timeColumn": "string",
                  "timeField": "string",
                  "valueType": "string",
                  "where": [
                    {
                      "datatype": "string",
                      "name": "string",
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ]
                }
              ],
              "thresholds": "string",
              "timeFrom": "string",
              "timeShift": "string",
              "title": "string",
              "tooltip": {
                "msResolution": true,
                "shared": true,
                "sort": 0,
                "value_type": "string"
              },
              "tooltipDecimals": 0,
              "transform": "string",
              "transparent": true,
              "type": "string",
              "valueFontSize": "string",
              "valueMaps": [
                {
                  "op": "string",
                  "text": "string",
                  "value": "string"
                }
              ],
              "valueName": "string",
              "x-axis": true,
              "xAxis": {
                "show": true
              },
              "xBucketNumber": 0,
              "xBucketSize": "string",
              "xaxis": {
                "decimals": 0,
                "format": "string",
                "label": "string",
                "logBase": 0,
                "max": {
                  "Valid": true,
                  "Value": 0
                },
                "min": {
                  "Valid": true,
                  "Value": 0
                },
                "show": true
              },
              "y-axis": true,
              "yAxis": {
                "decimals": 0,
                "format": "string",
                "logBase": 0,
                "max": "string",
                "min": "string",
                "show": true,
                "splitFactor": 0
              },
              "yBucketBound": "string",
              "yBucketNumber": 0,
              "yBucketSize": 0,
              "y_formats": [
                "string"
              ],
              "yaxes": [
                {
                  "decimals": 0,
                  "format": "string",
                  "label": "string",
                  "logBase": 0,
                  "max": {
                    "Valid": true,
                    "Value": 0
                  },
                  "min": {
                    "Valid": true,
                    "Value": 0
                  },
                  "show": true
                }
              ]
            }
          ],
          "slug": "string",
          "template_vars": [
            {
              "datasource": {
                "id": 0,
                "name": "string"
              },
              "hide": 0,
              "name": "string",
              "query": "string",
              "value": {}
            }
          ],
          "title": "string",
          "uid": "string",
          "uri": "string"
        },
        "panels": [
          {
            "alert": {
              "alertRuleTags": {
                "property1": "string",
                "property2": "string"
              },
              "conditions": [
                {
                  "evaluator": {
                    "params": [
                      0
                    ],
                    "type": "string"
                  },
                  "operator": {
                    "type": "string"
                  },
                  "query": {
                    "params": [
                      "string"
                    ]
                  },
                  "reducer": {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  },
                  "type": "string"
                }
              ],
              "executionErrorState": "string",
              "for": "string",
              "frequency": "string",
              "handler": 0,
              "message": "string",
              "name": "string",
              "noDataState": "string",
              "notifications": [
                {
                  "disableResolveMessage": true,
                  "frequency": "string",
                  "id": 0,
                  "isDefault": true,
                  "name": "string",
                  "sendReminder": true,
                  "settings": {},
                  "type": "string",
                  "uid": "string"
                }
              ]
            },
            "aliasColors": {},
            "bars": true,
            "cards": {
              "cardPadding": 0,
              "cardRound": 0
            },
            "collapsed": true,
            "color": {
              "cardColor": "string",
              "colorScale": "string",
              "colorScheme": "string",
              "exponent": 0,
              "max": 0,
              "min": 0,
              "mode": "string"
            },
            "colorBackground": true,
            "colorValue": true,
            "colors": [
              "string"
            ],
            "columns": [
              {
                "text": "string",
                "value": "string"
              }
            ],
            "content": "string",
            "dashLength": 0,
            "dashboardTags": [
              "string"
            ],
            "dashes": true,
            "dataFormat": "string",
            "datasource": "string",
            "decimals": 0,
            "description": "string",
            "editable": true,
            "error": true,
            "fieldConfig": {
              "defaults": {
                "threshold": {
                  "mode": "string",
                  "steps": [
                    {
                      "color": "string",
                      "value": "string"
                    }
                  ]
                },
                "unit": "string"
              }
            },
            "fill": 0,
            "folderId": 0,
            "format": "string",
            "gauge": {
              "maxValue": 0,
              "minValue": 0,
              "show": true,
              "thresholdLabels": true,
              "thresholdMarkers": true
            },
            "gridPos": {
              "h": 0,
              "w": 0,
              "x": 0,
              "y": 0
            },
            "headings": true,
            "height": {},
            "hideTimeOverride": true,
            "hideZeroBuckets": true,
            "highlightCards": true,
            "id": 0,
            "isNew": true,
            "leftYAxisLabel": "string",
            "legend": {
              "alignAsTable": true,
              "avg": true,
              "current": true,
              "hideEmpty": true,
              "hideZero": true,
              "max": true,
              "min": true,
              "rightSide": true,
              "show": true,
              "sideWidth": 0,
              "total": true,
              "values": true
            },
            "limit": 0,
            "lines": true,
            "linewidth": 0,
            "links": [
              {
                "asDropdown": true,
                "dashUri": "string",
                "dashboard": "string",
                "icon": "string",
                "includeVars": true,
                "keepTime": true,
                "params": "string",
                "tags": [
                  "string"
                ],
                "targetBlank": true,
                "title": "string",
                "tooltip": "string",
                "type": "string",
                "url": "string"
              }
            ],
            "mappingType": 0,
            "mappingTypes": [
              {
                "name": "string",
                "value": 0
              }
            ],
            "maxDataPoints": {
              "Valid": true,
              "Value": 0
            },
            "minSpan": 0,
            "mode": "string",
            "nameFilter": "string",
            "nullPointMode": "string",
            "onlyAlertsOnDashboard": true,
            "options": {
              "colorMode": "string",
              "content": "string",
              "displayMode": "string",
              "graphMode": "string",
              "justifyMode": "string",
              "mode": "string",
              "orientation": "string",
              "reduceOptions": {
                "calcs": [
                  "string"
                ],
                "fields": "string",
                "values": true
              },
              "textMode": "string"
            },
            "pageSize": 0,
            "panels": [
              {}
            ],
            "percentage": true,
            "pointradius": 0,
            "points": true,
            "postfix": "string",
            "postfixFontSize": "string",
            "prefix": "string",
            "prefixFontSize": "string",
            "query": "string",
            "rangeMaps": [
              {
                "from": "string",
                "text": "string",
                "to": "string"
              }
            ],
            "recent": true,
            "renderer": "string",
            "repeat": "string",
            "repeatPanelId": 0,
            "reverseYBuckets": true,
            "rightYAxisLabel": "string",
            "scopedVars": {
              "property1": {
                "selected": true,
                "text": "string",
                "value": "string"
              },
              "property2": {
                "selected": true,
                "text": "string",
                "value": "string"
              }
            },
            "scroll": true,
            "search": true,
            "seriesOverrides": [
              {
                "alias": "string",
                "bars": true,
                "color": "string",
                "dashes": true,
                "fill": 0,
                "fillBelowTo": "string",
                "legend": true,
                "lines": true,
                "linewidth": 0,
                "nullPointMode": "string",
                "stack": {
                  "Flag": true,
                  "Value": "string"
                },
                "transform": "string",
                "yaxis": 0,
                "zindex": 0
              }
            ],
            "show": "string",
            "showHeader": true,
            "sort": {
              "col": 0,
              "desc": true
            },
            "sortOrder": 0,
            "spaceLength": 0,
            "span": 0,
            "sparkline": {
              "fillColor": "string",
              "full": true,
              "lineColor": "string",
              "show": true,
              "ymax": 0,
              "ymin": 0
            },
            "stack": true,
            "starred": true,
            "stateFilter": [
              "string"
            ],
            "steppedLine": true,
            "styles": [
              {
                "alias": "string",
                "colorMode": "string",
                "colors": [
                  "string"
                ],
                "dateFormat": "string",
                "decimals": 0,
                "link": true,
                "linkTargetBlank": true,
                "linkTooltip": "string",
                "linkUrl": "string",
                "mappingType": 0,
                "pattern": "string",
                "thresholds": [
                  "string"
                ],
                "type": "string",
                "unit": "string",
                "valueMaps": [
                  {
                    "op": "string",
                    "text": "string",
                    "value": "string"
                  }
                ]
              }
            ],
            "tags": [
              "string"
            ],
            "targets": [
              {
                "alias": "string",
                "aliasBy": "string",
                "alignOptions": [
                  {
                    "expanded": true,
                    "label": "string",
                    "options": [
                      {
                        "label": "string",
                        "metricKinds": [
                          "string"
                        ],
                        "text": "string",
                        "value": "string",
                        "valueTypes": [
                          "string"
                        ]
                      }
                    ]
                  }
                ],
                "alignmentPeriod": "string",
                "bucketAggs": [
                  {
                    "field": "string",
                    "id": "string",
                    "settings": {
                      "interval": "string",
                      "min_doc_count": {},
                      "order": "string",
                      "orderBy": "string",
                      "size": "string"
                    },
                    "type": "string"
                  }
                ],
                "crossSeriesReducer": "string",
                "datasource": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "dsType": "string",
                "expr": "string",
                "filters": [
                  "string"
                ],
                "format": "string",
                "group": [
                  {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ],
                "groupBys": [
                  "string"
                ],
                "hide": true,
                "instant": true,
                "interval": "string",
                "intervalFactor": 0,
                "legendFormat": "string",
                "measurement": "string",
                "metricColumn": "string",
                "metricKind": "string",
                "metricName": "string",
                "metricType": "string",
                "metrics": [
                  {
                    "field": "string",
                    "id": "string",
                    "type": "string"
                  }
                ],
                "namespace": "string",
                "perSeriesAligner": "string",
                "period": "string",
                "projectName": "string",
                "query": "string",
                "rawQuery": true,
                "rawSql": "string",
                "refId": "string",
                "region": "string",
                "select": [
                  [
                    {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ]
                ],
                "statistics": [
                  "string"
                ],
                "step": 0,
                "table": "string",
                "target": "string",
                "timeColumn": "string",
                "timeField": "string",
                "valueType": "string",
                "where": [
                  {
                    "datatype": "string",
                    "name": "string",
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ]
              }
            ],
            "thresholds": "string",
            "timeFrom": "string",
            "timeShift": "string",
            "title": "string",
            "tooltip": {
              "msResolution": true,
              "shared": true,
              "sort": 0,
              "value_type": "string"
            },
            "tooltipDecimals": 0,
            "transform": "string",
            "transparent": true,
            "type": "string",
            "valueFontSize": "string",
            "valueMaps": [
              {
                "op": "string",
                "text": "string",
                "value": "string"
              }
            ],
            "valueName": "string",
            "x-axis": true,
            "xAxis": {
              "show": true
            },
            "xBucketNumber": 0,
            "xBucketSize": "string",
            "xaxis": {
              "decimals": 0,
              "format": "string",
              "label": "string",
              "logBase": 0,
              "max": {
                "Valid": true,
                "Value": 0
              },
              "min": {
                "Valid": true,
                "Value": 0
              },
              "show": true
            },
            "y-axis": true,
            "yAxis": {
              "decimals": 0,
              "format": "string",
              "logBase": 0,
              "max": "string",
              "min": "string",
              "show": true,
              "splitFactor": 0
            },
            "yBucketBound": "string",
            "yBucketNumber": 0,
            "yBucketSize": 0,
            "y_formats": [
              "string"
            ],
            "yaxes": [
              {
                "decimals": 0,
                "format": "string",
                "label": "string",
                "logBase": 0,
                "max": {
                  "Valid": true,
                  "Value": 0
                },
                "min": {
                  "Valid": true,
                  "Value": 0
                },
                "show": true
              }
            ]
          }
        ],
        "templateVars": [
          "string"
        ]
      }
    ]
  },
  "k8sConfig": {
    "clusterConfigured": true,
    "config": [
      0
    ],
    "configuredServer": "string",
    "contextName": "string",
    "inClusterConfig": true,
    "k8sfile": "string",
    "nodes": [
      {
        "allocatable_cpu": "string",
        "allocatable_memory": "string",
        "architecture": "string",
        "capacity_cpu": "string",
        "capacity_memory": "string",
        "container_runtime_version": "string",
        "hostname": "string",
        "internal_ip": "string",
        "kubelet_version": "string",
        "kubeproxy_version": "string",
        "operating_system": "string",
        "os_image": "string"
      }
    ],
    "server_version": "string"
  },
  "loadTestPrefs": {
    "c": 0,
    "gen": "string",
    "qps": 0,
    "t": "string"
  },
  "meshAdapters": [
    {
      "adapter_location": "string",
      "git_commit_sha": "string",
      "name": "string",
      "ops": [
        {
          "category": 0,
          "key": "string",
          "value": "string"
        }
      ],
      "version": "string"
    }
  ],
  "prometheus": {
    "prometheusURL": "string",
    "selectedPrometheusBoardsConfigs": [
      {
        "board": {
          "org_id": 0,
          "panels": [
            {
              "alert": {
                "alertRuleTags": {
                  "property1": "string",
                  "property2": "string"
                },
                "conditions": [
                  {
                    "evaluator": {
                      "params": [
                        0
                      ],
                      "type": "string"
                    },
                    "operator": {
                      "type": "string"
                    },
                    "query": {
                      "params": [
                        "string"
                      ]
                    },
                    "reducer": {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    },
                    "type": "string"
                  }
                ],
                "executionErrorState": "string",
                "for": "string",
                "frequency": "string",
                "handler": 0,
                "message": "string",
                "name": "string",
                "noDataState": "string",
                "notifications": [
                  {
                    "disableResolveMessage": true,
                    "frequency": "string",
                    "id": 0,
                    "isDefault": true,
                    "name": "string",
                    "sendReminder": true,
                    "settings": {},
                    "type": "string",
                    "uid": "string"
                  }
                ]
              },
              "aliasColors": {},
              "bars": true,
              "cards": {
                "cardPadding": 0,
                "cardRound": 0
              },
              "collapsed": true,
              "color": {
                "cardColor": "string",
                "colorScale": "string",
                "colorScheme": "string",
                "exponent": 0,
                "max": 0,
                "min": 0,
                "mode": "string"
              },
              "colorBackground": true,
              "colorValue": true,
              "colors": [
                "string"
              ],
              "columns": [
                {
                  "text": "string",
                  "value": "string"
                }
              ],
              "content": "string",
              "dashLength": 0,
              "dashboardTags": [
                "string"
              ],
              "dashes": true,
              "dataFormat": "string",
              "datasource": "string",
              "decimals": 0,
              "description": "string",
              "editable": true,
              "error": true,
              "fieldConfig": {
                "defaults": {
                  "threshold": {
                    "mode": "string",
                    "steps": [
                      {
                        "color": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "unit": "string"
                }
              },
              "fill": 0,
              "folderId": 0,
              "format": "string",
              "gauge": {
                "maxValue": 0,
                "minValue": 0,
                "show": true,
                "thresholdLabels": true,
                "thresholdMarkers": true
              },
              "gridPos": {
                "h": 0,
                "w": 0,
                "x": 0,
                "y": 0
              },
              "headings": true,
              "height": {},
              "hideTimeOverride": true,
              "hideZeroBuckets": true,
              "highlightCards": true,
              "id": 0,
              "isNew": true,
              "leftYAxisLabel": "string",
              "legend": {
                "alignAsTable": true,
                "avg": true,
                "current": true,
                "hideEmpty": true,
                "hideZero": true,
                "max": true,
                "min": true,
                "rightSide": true,
                "show": true,
                "sideWidth": 0,
                "total": true,
                "values": true
              },
              "limit": 0,
              "lines": true,
              "linewidth": 0,
              "links": [
                {
                  "asDropdown": true,
                  "dashUri": "string",
                  "dashboard": "string",
                  "icon": "string",
                  "includeVars": true,
                  "keepTime": true,
                  "params": "string",
                  "tags": [
                    "string"
                  ],
                  "targetBlank": true,
                  "title": "string",
                  "tooltip": "string",
                  "type": "string",
                  "url": "string"
                }
              ],
              "mappingType": 0,
              "mappingTypes": [
                {
                  "name": "string",
                  "value": 0
                }
              ],
              "maxDataPoints": {
                "Valid": true,
                "Value": 0
              },
              "minSpan": 0,
              "mode": "string",
              "nameFilter": "string",
              "nullPointMode": "string",
              "onlyAlertsOnDashboard": true,
              "options": {
                "colorMode": "string",
                "content": "string",
                "displayMode": "string",
                "graphMode": "string",
                "justifyMode": "string",
                "mode": "string",
                "orientation": "string",
                "reduceOptions": {
                  "calcs": [
                    "string"
                  ],
                  "fields": "string",
                  "values": true
                },
                "textMode": "string"
              },
              "pageSize": 0,
              "panels": [
                {}
              ],
              "percentage": true,
              "pointradius": 0,
              "points": true,
              "postfix": "string",
              "postfixFontSize": "string",
              "prefix": "string",
              "prefixFontSize": "string",
              "query": "string",
              "rangeMaps": [
                {
                  "from": "string",
                  "text": "string",
                  "to": "string"
                }
              ],
              "recent": true,
              "renderer": "string",
              "repeat": "string",
              "repeatPanelId": 0,
              "reverseYBuckets": true,
              "rightYAxisLabel": "string",
              "scopedVars": {
                "property1": {
                  "selected": true,
                  "text": "string",
                  "value": "string"
                },
                "property2": {
                  "selected": true,
                  "text": "string",
                  "value": "string"
                }
              },
              "scroll": true,
              "search": true,
              "seriesOverrides": [
                {
                  "alias": "string",
                  "bars": true,
                  "color": "string",
                  "dashes": true,
                  "fill": 0,
                  "fillBelowTo": "string",
                  "legend": true,
                  "lines": true,
                  "linewidth": 0,
                  "nullPointMode": "string",
                  "stack": {
                    "Flag": true,
                    "Value": "string"
                  },
                  "transform": "string",
                  "yaxis": 0,
                  "zindex": 0
                }
              ],
              "show": "string",
              "showHeader": true,
              "sort": {
                "col": 0,
                "desc": true
              },
              "sortOrder": 0,
              "spaceLength": 0,
              "span": 0,
              "sparkline": {
                "fillColor": "string",
                "full": true,
                "lineColor": "string",
                "show": true,
                "ymax": 0,
                "ymin": 0
              },
              "stack": true,
              "starred": true,
              "stateFilter": [
                "string"
              ],
              "steppedLine": true,
              "styles": [
                {
                  "alias": "string",
                  "colorMode": "string",
                  "colors": [
                    "string"
                  ],
                  "dateFormat": "string",
                  "decimals": 0,
                  "link": true,
                  "linkTargetBlank": true,
                  "linkTooltip": "string",
                  "linkUrl": "string",
                  "mappingType": 0,
                  "pattern": "string",
                  "thresholds": [
                    "string"
                  ],
                  "type": "string",
                  "unit": "string",
                  "valueMaps": [
                    {
                      "op": "string",
                      "text": "string",
                      "value": "string"
                    }
                  ]
                }
              ],
              "tags": [
                "string"
              ],
              "targets": [
                {
                  "alias": "string",
                  "aliasBy": "string",
                  "alignOptions": [
                    {
                      "expanded": true,
                      "label": "string",
                      "options": [
                        {
                          "label": "string",
                          "metricKinds": [
                            "string"
                          ],
                          "text": "string",
                          "value": "string",
                          "valueTypes": [
                            "string"
                          ]
                        }
                      ]
                    }
                  ],
                  "alignmentPeriod": "string",
                  "bucketAggs": [
                    {
                      "field": "string",
                      "id": "string",
                      "settings": {
                        "interval": "string",
                        "min_doc_count": {},
                        "order": "string",
                        "orderBy": "string",
                        "size": "string"
                      },
                      "type": "string"
                    }
                  ],
                  "crossSeriesReducer": "string",
                  "datasource": "string",
                  "dimensions": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "dsType": "string",
                  "expr": "string",
                  "filters": [
                    "string"
                  ],
                  "format": "string",
                  "group": [
                    {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ],
                  "groupBys": [
                    "string"
                  ],
                  "hide": true,
                  "instant": true,
                  "interval": "string",
                  "intervalFactor": 0,
                  "legendFormat": "string",
                  "measurement": "string",
                  "metricColumn": "string",
                  "metricKind": "string",
                  "metricName": "string",
                  "metricType": "string",
                  "metrics": [
                    {
                      "field": "string",
                      "id": "string",
                      "type": "string"
                    }
                  ],
                  "namespace": "string",
                  "perSeriesAligner": "string",
                  "period": "string",
                  "projectName": "string",
                  "query": "string",
                  "rawQuery": true,
                  "rawSql": "string",
                  "refId": "string",
                  "region": "string",
                  "select": [
                    [
                      {
                        "params": [
                          "string"
                        ],
                        "type": "string"
                      }
                    ]
                  ],
                  "statistics": [
                    "string"
                  ],
                  "step": 0,
                  "table": "string",
                  "target": "string",
                  "timeColumn": "string",
                  "timeField": "string",
                  "valueType": "string",
                  "where": [
                    {
                      "datatype": "string",
                      "name": "string",
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ]
                }
              ],
              "thresholds": "string",
              "timeFrom": "string",
              "timeShift": "string",
              "title": "string",
              "tooltip": {
                "msResolution": true,
                "shared": true,
                "sort": 0,
                "value_type": "string"
              },
              "tooltipDecimals": 0,
              "transform": "string",
              "transparent": true,
              "type": "string",
              "valueFontSize": "string",
              "valueMaps": [
                {
                  "op": "string",
                  "text": "string",
                  "value": "string"
                }
              ],
              "valueName": "string",
              "x-axis": true,
              "xAxis": {
                "show": true
              },
              "xBucketNumber": 0,
              "xBucketSize": "string",
              "xaxis": {
                "decimals": 0,
                "format": "string",
                "label": "string",
                "logBase": 0,
                "max": {
                  "Valid": true,
                  "Value": 0
                },
                "min": {
                  "Valid": true,
                  "Value": 0
                },
                "show": true
              },
              "y-axis": true,
              "yAxis": {
                "decimals": 0,
                "format": "string",
                "logBase": 0,
                "max": "string",
                "min": "string",
                "show": true,
                "splitFactor": 0
              },
              "yBucketBound": "string",
              "yBucketNumber": 0,
              "yBucketSize": 0,
              "y_formats": [
                "string"
              ],
              "yaxes": [
                {
                  "decimals": 0,
                  "format": "string",
                  "label": "string",
                  "logBase": 0,
                  "max": {
                    "Valid": true,
                    "Value": 0
                  },
                  "min": {
                    "Valid": true,
                    "Value": 0
                  },
                  "show": true
                }
              ]
            }
          ],
          "slug": "string",
          "template_vars": [
            {
              "datasource": {
                "id": 0,
                "name": "string"
              },
              "hide": 0,
              "name": "string",
              "query": "string",
              "value": {}
            }
          ],
          "title": "string",
          "uid": "string",
          "uri": "string"
        },
        "panels": [
          {
            "alert": {
              "alertRuleTags": {
                "property1": "string",
                "property2": "string"
              },
              "conditions": [
                {
                  "evaluator": {
                    "params": [
                      0
                    ],
                    "type": "string"
                  },
                  "operator": {
                    "type": "string"
                  },
                  "query": {
                    "params": [
                      "string"
                    ]
                  },
                  "reducer": {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  },
                  "type": "string"
                }
              ],
              "executionErrorState": "string",
              "for": "string",
              "frequency": "string",
              "handler": 0,
              "message": "string",
              "name": "string",
              "noDataState": "string",
              "notifications": [
                {
                  "disableResolveMessage": true,
                  "frequency": "string",
                  "id": 0,
                  "isDefault": true,
                  "name": "string",
                  "sendReminder": true,
                  "settings": {},
                  "type": "string",
                  "uid": "string"
                }
              ]
            },
            "aliasColors": {},
            "bars": true,
            "cards": {
              "cardPadding": 0,
              "cardRound": 0
            },
            "collapsed": true,
            "color": {
              "cardColor": "string",
              "colorScale": "string",
              "colorScheme": "string",
              "exponent": 0,
              "max": 0,
              "min": 0,
              "mode": "string"
            },
            "colorBackground": true,
            "colorValue": true,
            "colors": [
              "string"
            ],
            "columns": [
              {
                "text": "string",
                "value": "string"
              }
            ],
            "content": "string",
            "dashLength": 0,
            "dashboardTags": [
              "string"
            ],
            "dashes": true,
            "dataFormat": "string",
            "datasource": "string",
            "decimals": 0,
            "description": "string",
            "editable": true,
            "error": true,
            "fieldConfig": {
              "defaults": {
                "threshold": {
                  "mode": "string",
                  "steps": [
                    {
                      "color": "string",
                      "value": "string"
                    }
                  ]
                },
                "unit": "string"
              }
            },
            "fill": 0,
            "folderId": 0,
            "format": "string",
            "gauge": {
              "maxValue": 0,
              "minValue": 0,
              "show": true,
              "thresholdLabels": true,
              "thresholdMarkers": true
            },
            "gridPos": {
              "h": 0,
              "w": 0,
              "x": 0,
              "y": 0
            },
            "headings": true,
            "height": {},
            "hideTimeOverride": true,
            "hideZeroBuckets": true,
            "highlightCards": true,
            "id": 0,
            "isNew": true,
            "leftYAxisLabel": "string",
            "legend": {
              "alignAsTable": true,
              "avg": true,
              "current": true,
              "hideEmpty": true,
              "hideZero": true,
              "max": true,
              "min": true,
              "rightSide": true,
              "show": true,
              "sideWidth": 0,
              "total": true,
              "values": true
            },
            "limit": 0,
            "lines": true,
            "linewidth": 0,
            "links": [
              {
                "asDropdown": true,
                "dashUri": "string",
                "dashboard": "string",
                "icon": "string",
                "includeVars": true,
                "keepTime": true,
                "params": "string",
                "tags": [
                  "string"
                ],
                "targetBlank": true,
                "title": "string",
                "tooltip": "string",
                "type": "string",
                "url": "string"
              }
            ],
            "mappingType": 0,
            "mappingTypes": [
              {
                "name": "string",
                "value": 0
              }
            ],
            "maxDataPoints": {
              "Valid": true,
              "Value": 0
            },
            "minSpan": 0,
            "mode": "string",
            "nameFilter": "string",
            "nullPointMode": "string",
            "onlyAlertsOnDashboard": true,
            "options": {
              "colorMode": "string",
              "content": "string",
              "displayMode": "string",
              "graphMode": "string",
              "justifyMode": "string",
              "mode": "string",
              "orientation": "string",
              "reduceOptions": {
                "calcs": [
                  "string"
                ],
                "fields": "string",
                "values": true
              },
              "textMode": "string"
            },
            "pageSize": 0,
            "panels": [
              {}
            ],
            "percentage": true,
            "pointradius": 0,
            "points": true,
            "postfix": "string",
            "postfixFontSize": "string",
            "prefix": "string",
            "prefixFontSize": "string",
            "query": "string",
            "rangeMaps": [
              {
                "from": "string",
                "text": "string",
                "to": "string"
              }
            ],
            "recent": true,
            "renderer": "string",
            "repeat": "string",
            "repeatPanelId": 0,
            "reverseYBuckets": true,
            "rightYAxisLabel": "string",
            "scopedVars": {
              "property1": {
                "selected": true,
                "text": "string",
                "value": "string"
              },
              "property2": {
                "selected": true,
                "text": "string",
                "value": "string"
              }
            },
            "scroll": true,
            "search": true,
            "seriesOverrides": [
              {
                "alias": "string",
                "bars": true,
                "color": "string",
                "dashes": true,
                "fill": 0,
                "fillBelowTo": "string",
                "legend": true,
                "lines": true,
                "linewidth": 0,
                "nullPointMode": "string",
                "stack": {
                  "Flag": true,
                  "Value": "string"
                },
                "transform": "string",
                "yaxis": 0,
                "zindex": 0
              }
            ],
            "show": "string",
            "showHeader": true,
            "sort": {
              "col": 0,
              "desc": true
            },
            "sortOrder": 0,
            "spaceLength": 0,
            "span": 0,
            "sparkline": {
              "fillColor": "string",
              "full": true,
              "lineColor": "string",
              "show": true,
              "ymax": 0,
              "ymin": 0
            },
            "stack": true,
            "starred": true,
            "stateFilter": [
              "string"
            ],
            "steppedLine": true,
            "styles": [
              {
                "alias": "string",
                "colorMode": "string",
                "colors": [
                  "string"
                ],
                "dateFormat": "string",
                "decimals": 0,
                "link": true,
                "linkTargetBlank": true,
                "linkTooltip": "string",
                "linkUrl": "string",
                "mappingType": 0,
                "pattern": "string",
                "thresholds": [
                  "string"
                ],
                "type": "string",
                "unit": "string",
                "valueMaps": [
                  {
                    "op": "string",
                    "text": "string",
                    "value": "string"
                  }
                ]
              }
            ],
            "tags": [
              "string"
            ],
            "targets": [
              {
                "alias": "string",
                "aliasBy": "string",
                "alignOptions": [
                  {
                    "expanded": true,
                    "label": "string",
                    "options": [
                      {
                        "label": "string",
                        "metricKinds": [
                          "string"
                        ],
                        "text": "string",
                        "value": "string",
                        "valueTypes": [
                          "string"
                        ]
                      }
                    ]
                  }
                ],
                "alignmentPeriod": "string",
                "bucketAggs": [
                  {
                    "field": "string",
                    "id": "string",
                    "settings": {
                      "interval": "string",
                      "min_doc_count": {},
                      "order": "string",
                      "orderBy": "string",
                      "size": "string"
                    },
                    "type": "string"
                  }
                ],
                "crossSeriesReducer": "string",
                "datasource": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "dsType": "string",
                "expr": "string",
                "filters": [
                  "string"
                ],
                "format": "string",
                "group": [
                  {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ],
                "groupBys": [
                  "string"
                ],
                "hide": true,
                "instant": true,
                "interval": "string",
                "intervalFactor": 0,
                "legendFormat": "string",
                "measurement": "string",
                "metricColumn": "string",
                "metricKind": "string",
                "metricName": "string",
                "metricType": "string",
                "metrics": [
                  {
                    "field": "string",
                    "id": "string",
                    "type": "string"
                  }
                ],
                "namespace": "string",
                "perSeriesAligner": "string",
                "period": "string",
                "projectName": "string",
                "query": "string",
                "rawQuery": true,
                "rawSql": "string",
                "refId": "string",
                "region": "string",
                "select": [
                  [
                    {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ]
                ],
                "statistics": [
                  "string"
                ],
                "step": 0,
                "table": "string",
                "target": "string",
                "timeColumn": "string",
                "timeField": "string",
                "valueType": "string",
                "where": [
                  {
                    "datatype": "string",
                    "name": "string",
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ]
              }
            ],
            "thresholds": "string",
            "timeFrom": "string",
            "timeShift": "string",
            "title": "string",
            "tooltip": {
              "msResolution": true,
              "shared": true,
              "sort": 0,
              "value_type": "string"
            },
            "tooltipDecimals": 0,
            "transform": "string",
            "transparent": true,
            "type": "string",
            "valueFontSize": "string",
            "valueMaps": [
              {
                "op": "string",
                "text": "string",
                "value": "string"
              }
            ],
            "valueName": "string",
            "x-axis": true,
            "xAxis": {
              "show": true
            },
            "xBucketNumber": 0,
            "xBucketSize": "string",
            "xaxis": {
              "decimals": 0,
              "format": "string",
              "label": "string",
              "logBase": 0,
              "max": {
                "Valid": true,
                "Value": 0
              },
              "min": {
                "Valid": true,
                "Value": 0
              },
              "show": true
            },
            "y-axis": true,
            "yAxis": {
              "decimals": 0,
              "format": "string",
              "logBase": 0,
              "max": "string",
              "min": "string",
              "show": true,
              "splitFactor": 0
            },
            "yBucketBound": "string",
            "yBucketNumber": 0,
            "yBucketSize": 0,
            "y_formats": [
              "string"
            ],
            "yaxes": [
              {
                "decimals": 0,
                "format": "string",
                "label": "string",
                "logBase": 0,
                "max": {
                  "Valid": true,
                  "Value": 0
                },
                "min": {
                  "Valid": true,
                  "Value": 0
                },
                "show": true
              }
            ]
          }
        ],
        "templateVars": [
          "string"
        ]
      }
    ]
  },
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="handle-get-request-for-config-sync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns User Load Test Preferencee|[Preference](#schemapreference)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for system/server version

<a id="opIdidGetSystemVersion"></a>

> Code samples

```bash
curl https://example.com/api/system/version \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/system/version`

Returns the running Meshery version

> Example responses

> 200 Response

```json
{
  "build": "string",
  "commitsha": "string",
  "latest": "string",
  "outdated": true,
  "release_channel": "string"
}
```

<h3 id="handle-get-request-for-systemserver-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns Meshery version|[Version](#schemaversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

<h1 id="meshery-api-prometheusapi">PrometheusAPI</h1>

## Handle POST request for Prometheus board import

<a id="opIdidPostPrometheusBoardImport"></a>

> Code samples

```bash
curl https://example.com/api/telemetry/metrics/board_import \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`POST /api/telemetry/metrics/board_import`

Used for importing Grafana board for Prometheus

> Example responses

> 200 Response

```json
{
  "org_id": 0,
  "panels": [
    {
      "alert": {
        "alertRuleTags": {
          "property1": "string",
          "property2": "string"
        },
        "conditions": [
          {
            "evaluator": {
              "params": [
                0
              ],
              "type": "string"
            },
            "operator": {
              "type": "string"
            },
            "query": {
              "params": [
                "string"
              ]
            },
            "reducer": {
              "params": [
                "string"
              ],
              "type": "string"
            },
            "type": "string"
          }
        ],
        "executionErrorState": "string",
        "for": "string",
        "frequency": "string",
        "handler": 0,
        "message": "string",
        "name": "string",
        "noDataState": "string",
        "notifications": [
          {
            "disableResolveMessage": true,
            "frequency": "string",
            "id": 0,
            "isDefault": true,
            "name": "string",
            "sendReminder": true,
            "settings": {},
            "type": "string",
            "uid": "string"
          }
        ]
      },
      "aliasColors": {},
      "bars": true,
      "cards": {
        "cardPadding": 0,
        "cardRound": 0
      },
      "collapsed": true,
      "color": {
        "cardColor": "string",
        "colorScale": "string",
        "colorScheme": "string",
        "exponent": 0,
        "max": 0,
        "min": 0,
        "mode": "string"
      },
      "colorBackground": true,
      "colorValue": true,
      "colors": [
        "string"
      ],
      "columns": [
        {
          "text": "string",
          "value": "string"
        }
      ],
      "content": "string",
      "dashLength": 0,
      "dashboardTags": [
        "string"
      ],
      "dashes": true,
      "dataFormat": "string",
      "datasource": "string",
      "decimals": 0,
      "description": "string",
      "editable": true,
      "error": true,
      "fieldConfig": {
        "defaults": {
          "threshold": {
            "mode": "string",
            "steps": [
              {
                "color": "string",
                "value": "string"
              }
            ]
          },
          "unit": "string"
        }
      },
      "fill": 0,
      "folderId": 0,
      "format": "string",
      "gauge": {
        "maxValue": 0,
        "minValue": 0,
        "show": true,
        "thresholdLabels": true,
        "thresholdMarkers": true
      },
      "gridPos": {
        "h": 0,
        "w": 0,
        "x": 0,
        "y": 0
      },
      "headings": true,
      "height": {},
      "hideTimeOverride": true,
      "hideZeroBuckets": true,
      "highlightCards": true,
      "id": 0,
      "isNew": true,
      "leftYAxisLabel": "string",
      "legend": {
        "alignAsTable": true,
        "avg": true,
        "current": true,
        "hideEmpty": true,
        "hideZero": true,
        "max": true,
        "min": true,
        "rightSide": true,
        "show": true,
        "sideWidth": 0,
        "total": true,
        "values": true
      },
      "limit": 0,
      "lines": true,
      "linewidth": 0,
      "links": [
        {
          "asDropdown": true,
          "dashUri": "string",
          "dashboard": "string",
          "icon": "string",
          "includeVars": true,
          "keepTime": true,
          "params": "string",
          "tags": [
            "string"
          ],
          "targetBlank": true,
          "title": "string",
          "tooltip": "string",
          "type": "string",
          "url": "string"
        }
      ],
      "mappingType": 0,
      "mappingTypes": [
        {
          "name": "string",
          "value": 0
        }
      ],
      "maxDataPoints": {
        "Valid": true,
        "Value": 0
      },
      "minSpan": 0,
      "mode": "string",
      "nameFilter": "string",
      "nullPointMode": "string",
      "onlyAlertsOnDashboard": true,
      "options": {
        "colorMode": "string",
        "content": "string",
        "displayMode": "string",
        "graphMode": "string",
        "justifyMode": "string",
        "mode": "string",
        "orientation": "string",
        "reduceOptions": {
          "calcs": [
            "string"
          ],
          "fields": "string",
          "values": true
        },
        "textMode": "string"
      },
      "pageSize": 0,
      "panels": [
        {}
      ],
      "percentage": true,
      "pointradius": 0,
      "points": true,
      "postfix": "string",
      "postfixFontSize": "string",
      "prefix": "string",
      "prefixFontSize": "string",
      "query": "string",
      "rangeMaps": [
        {
          "from": "string",
          "text": "string",
          "to": "string"
        }
      ],
      "recent": true,
      "renderer": "string",
      "repeat": "string",
      "repeatPanelId": 0,
      "reverseYBuckets": true,
      "rightYAxisLabel": "string",
      "scopedVars": {
        "property1": {
          "selected": true,
          "text": "string",
          "value": "string"
        },
        "property2": {
          "selected": true,
          "text": "string",
          "value": "string"
        }
      },
      "scroll": true,
      "search": true,
      "seriesOverrides": [
        {
          "alias": "string",
          "bars": true,
          "color": "string",
          "dashes": true,
          "fill": 0,
          "fillBelowTo": "string",
          "legend": true,
          "lines": true,
          "linewidth": 0,
          "nullPointMode": "string",
          "stack": {
            "Flag": true,
            "Value": "string"
          },
          "transform": "string",
          "yaxis": 0,
          "zindex": 0
        }
      ],
      "show": "string",
      "showHeader": true,
      "sort": {
        "col": 0,
        "desc": true
      },
      "sortOrder": 0,
      "spaceLength": 0,
      "span": 0,
      "sparkline": {
        "fillColor": "string",
        "full": true,
        "lineColor": "string",
        "show": true,
        "ymax": 0,
        "ymin": 0
      },
      "stack": true,
      "starred": true,
      "stateFilter": [
        "string"
      ],
      "steppedLine": true,
      "styles": [
        {
          "alias": "string",
          "colorMode": "string",
          "colors": [
            "string"
          ],
          "dateFormat": "string",
          "decimals": 0,
          "link": true,
          "linkTargetBlank": true,
          "linkTooltip": "string",
          "linkUrl": "string",
          "mappingType": 0,
          "pattern": "string",
          "thresholds": [
            "string"
          ],
          "type": "string",
          "unit": "string",
          "valueMaps": [
            {
              "op": "string",
              "text": "string",
              "value": "string"
            }
          ]
        }
      ],
      "tags": [
        "string"
      ],
      "targets": [
        {
          "alias": "string",
          "aliasBy": "string",
          "alignOptions": [
            {
              "expanded": true,
              "label": "string",
              "options": [
                {
                  "label": "string",
                  "metricKinds": [
                    "string"
                  ],
                  "text": "string",
                  "value": "string",
                  "valueTypes": [
                    "string"
                  ]
                }
              ]
            }
          ],
          "alignmentPeriod": "string",
          "bucketAggs": [
            {
              "field": "string",
              "id": "string",
              "settings": {
                "interval": "string",
                "min_doc_count": {},
                "order": "string",
                "orderBy": "string",
                "size": "string"
              },
              "type": "string"
            }
          ],
          "crossSeriesReducer": "string",
          "datasource": "string",
          "dimensions": {
            "property1": "string",
            "property2": "string"
          },
          "dsType": "string",
          "expr": "string",
          "filters": [
            "string"
          ],
          "format": "string",
          "group": [
            {
              "params": [
                "string"
              ],
              "type": "string"
            }
          ],
          "groupBys": [
            "string"
          ],
          "hide": true,
          "instant": true,
          "interval": "string",
          "intervalFactor": 0,
          "legendFormat": "string",
          "measurement": "string",
          "metricColumn": "string",
          "metricKind": "string",
          "metricName": "string",
          "metricType": "string",
          "metrics": [
            {
              "field": "string",
              "id": "string",
              "type": "string"
            }
          ],
          "namespace": "string",
          "perSeriesAligner": "string",
          "period": "string",
          "projectName": "string",
          "query": "string",
          "rawQuery": true,
          "rawSql": "string",
          "refId": "string",
          "region": "string",
          "select": [
            [
              {
                "params": [
                  "string"
                ],
                "type": "string"
              }
            ]
          ],
          "statistics": [
            "string"
          ],
          "step": 0,
          "table": "string",
          "target": "string",
          "timeColumn": "string",
          "timeField": "string",
          "valueType": "string",
          "where": [
            {
              "datatype": "string",
              "name": "string",
              "params": [
                "string"
              ],
              "type": "string"
            }
          ]
        }
      ],
      "thresholds": "string",
      "timeFrom": "string",
      "timeShift": "string",
      "title": "string",
      "tooltip": {
        "msResolution": true,
        "shared": true,
        "sort": 0,
        "value_type": "string"
      },
      "tooltipDecimals": 0,
      "transform": "string",
      "transparent": true,
      "type": "string",
      "valueFontSize": "string",
      "valueMaps": [
        {
          "op": "string",
          "text": "string",
          "value": "string"
        }
      ],
      "valueName": "string",
      "x-axis": true,
      "xAxis": {
        "show": true
      },
      "xBucketNumber": 0,
      "xBucketSize": "string",
      "xaxis": {
        "decimals": 0,
        "format": "string",
        "label": "string",
        "logBase": 0,
        "max": {
          "Valid": true,
          "Value": 0
        },
        "min": {
          "Valid": true,
          "Value": 0
        },
        "show": true
      },
      "y-axis": true,
      "yAxis": {
        "decimals": 0,
        "format": "string",
        "logBase": 0,
        "max": "string",
        "min": "string",
        "show": true,
        "splitFactor": 0
      },
      "yBucketBound": "string",
      "yBucketNumber": 0,
      "yBucketSize": 0,
      "y_formats": [
        "string"
      ],
      "yaxes": [
        {
          "decimals": 0,
          "format": "string",
          "label": "string",
          "logBase": 0,
          "max": {
            "Valid": true,
            "Value": 0
          },
          "min": {
            "Valid": true,
            "Value": 0
          },
          "show": true
        }
      ]
    }
  ],
  "slug": "string",
  "template_vars": [
    {
      "datasource": {
        "id": 0,
        "name": "string"
      },
      "hide": 0,
      "name": "string",
      "query": "string",
      "value": {}
    }
  ],
  "title": "string",
  "uid": "string",
  "uri": "string"
}
```

<h3 id="handle-post-request-for-prometheus-board-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response for prometheus board import|[GrafanaBoard](#schemagrafanaboard)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle POST request for Prometheus board

<a id="opIdidPostPrometheusBoard"></a>

> Code samples

```bash
curl https://example.com/api/telemetry/metrics/boards \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Cookie: token=${API_KEY}" \
  -d '[
    {
      "board": {
        "org_id": 0,
        "panels": [
          {
            "alert": {
              "alertRuleTags": {
                "property1": "string",
                "property2": "string"
              },
              "conditions": [
                {
                  "evaluator": {
                    "params": [
                      0
                    ],
                    "type": "string"
                  },
                  "operator": {
                    "type": "string"
                  },
                  "query": {
                    "params": [
                      "string"
                    ]
                  },
                  "reducer": {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  },
                  "type": "string"
                }
              ],
              "executionErrorState": "string",
              "for": "string",
              "frequency": "string",
              "handler": 0,
              "message": "string",
              "name": "string",
              "noDataState": "string",
              "notifications": [
                {
                  "disableResolveMessage": true,
                  "frequency": "string",
                  "id": 0,
                  "isDefault": true,
                  "name": "string",
                  "sendReminder": true,
                  "settings": {},
                  "type": "string",
                  "uid": "string"
                }
              ]
            },
            "aliasColors": {},
            "bars": true,
            "cards": {
              "cardPadding": 0,
              "cardRound": 0
            },
            "collapsed": true,
            "color": {
              "cardColor": "string",
              "colorScale": "string",
              "colorScheme": "string",
              "exponent": 0,
              "max": 0,
              "min": 0,
              "mode": "string"
            },
            "colorBackground": true,
            "colorValue": true,
            "colors": [
              "string"
            ],
            "columns": [
              {
                "text": "string",
                "value": "string"
              }
            ],
            "content": "string",
            "dashLength": 0,
            "dashboardTags": [
              "string"
            ],
            "dashes": true,
            "dataFormat": "string",
            "datasource": "string",
            "decimals": 0,
            "description": "string",
            "editable": true,
            "error": true,
            "fieldConfig": {
              "defaults": {
                "threshold": {
                  "mode": "string",
                  "steps": [
                    {
                      "color": "string",
                      "value": "string"
                    }
                  ]
                },
                "unit": "string"
              }
            },
            "fill": 0,
            "folderId": 0,
            "format": "string",
            "gauge": {
              "maxValue": 0,
              "minValue": 0,
              "show": true,
              "thresholdLabels": true,
              "thresholdMarkers": true
            },
            "gridPos": {
              "h": 0,
              "w": 0,
              "x": 0,
              "y": 0
            },
            "headings": true,
            "height": {},
            "hideTimeOverride": true,
            "hideZeroBuckets": true,
            "highlightCards": true,
            "id": 0,
            "isNew": true,
            "leftYAxisLabel": "string",
            "legend": {
              "alignAsTable": true,
              "avg": true,
              "current": true,
              "hideEmpty": true,
              "hideZero": true,
              "max": true,
              "min": true,
              "rightSide": true,
              "show": true,
              "sideWidth": 0,
              "total": true,
              "values": true
            },
            "limit": 0,
            "lines": true,
            "linewidth": 0,
            "links": [
              {
                "asDropdown": true,
                "dashUri": "string",
                "dashboard": "string",
                "icon": "string",
                "includeVars": true,
                "keepTime": true,
                "params": "string",
                "tags": [
                  "string"
                ],
                "targetBlank": true,
                "title": "string",
                "tooltip": "string",
                "type": "string",
                "url": "string"
              }
            ],
            "mappingType": 0,
            "mappingTypes": [
              {
                "name": "string",
                "value": 0
              }
            ],
            "maxDataPoints": {
              "Valid": true,
              "Value": 0
            },
            "minSpan": 0,
            "mode": "string",
            "nameFilter": "string",
            "nullPointMode": "string",
            "onlyAlertsOnDashboard": true,
            "options": {
              "colorMode": "string",
              "content": "string",
              "displayMode": "string",
              "graphMode": "string",
              "justifyMode": "string",
              "mode": "string",
              "orientation": "string",
              "reduceOptions": {
                "calcs": [
                  "string"
                ],
                "fields": "string",
                "values": true
              },
              "textMode": "string"
            },
            "pageSize": 0,
            "panels": [
              {}
            ],
            "percentage": true,
            "pointradius": 0,
            "points": true,
            "postfix": "string",
            "postfixFontSize": "string",
            "prefix": "string",
            "prefixFontSize": "string",
            "query": "string",
            "rangeMaps": [
              {
                "from": "string",
                "text": "string",
                "to": "string"
              }
            ],
            "recent": true,
            "renderer": "string",
            "repeat": "string",
            "repeatPanelId": 0,
            "reverseYBuckets": true,
            "rightYAxisLabel": "string",
            "scopedVars": {
              "property1": {
                "selected": true,
                "text": "string",
                "value": "string"
              },
              "property2": {
                "selected": true,
                "text": "string",
                "value": "string"
              }
            },
            "scroll": true,
            "search": true,
            "seriesOverrides": [
              {
                "alias": "string",
                "bars": true,
                "color": "string",
                "dashes": true,
                "fill": 0,
                "fillBelowTo": "string",
                "legend": true,
                "lines": true,
                "linewidth": 0,
                "nullPointMode": "string",
                "stack": {
                  "Flag": true,
                  "Value": "string"
                },
                "transform": "string",
                "yaxis": 0,
                "zindex": 0
              }
            ],
            "show": "string",
            "showHeader": true,
            "sort": {
              "col": 0,
              "desc": true
            },
            "sortOrder": 0,
            "spaceLength": 0,
            "span": 0,
            "sparkline": {
              "fillColor": "string",
              "full": true,
              "lineColor": "string",
              "show": true,
              "ymax": 0,
              "ymin": 0
            },
            "stack": true,
            "starred": true,
            "stateFilter": [
              "string"
            ],
            "steppedLine": true,
            "styles": [
              {
                "alias": "string",
                "colorMode": "string",
                "colors": [
                  "string"
                ],
                "dateFormat": "string",
                "decimals": 0,
                "link": true,
                "linkTargetBlank": true,
                "linkTooltip": "string",
                "linkUrl": "string",
                "mappingType": 0,
                "pattern": "string",
                "thresholds": [
                  "string"
                ],
                "type": "string",
                "unit": "string",
                "valueMaps": [
                  {
                    "op": "string",
                    "text": "string",
                    "value": "string"
                  }
                ]
              }
            ],
            "tags": [
              "string"
            ],
            "targets": [
              {
                "alias": "string",
                "aliasBy": "string",
                "alignOptions": [
                  {
                    "expanded": true,
                    "label": "string",
                    "options": [
                      {
                        "label": "string",
                        "metricKinds": [
                          "string"
                        ],
                        "text": "string",
                        "value": "string",
                        "valueTypes": [
                          "string"
                        ]
                      }
                    ]
                  }
                ],
                "alignmentPeriod": "string",
                "bucketAggs": [
                  {
                    "field": "string",
                    "id": "string",
                    "settings": {
                      "interval": "string",
                      "min_doc_count": {},
                      "order": "string",
                      "orderBy": "string",
                      "size": "string"
                    },
                    "type": "string"
                  }
                ],
                "crossSeriesReducer": "string",
                "datasource": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "dsType": "string",
                "expr": "string",
                "filters": [
                  "string"
                ],
                "format": "string",
                "group": [
                  {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ],
                "groupBys": [
                  "string"
                ],
                "hide": true,
                "instant": true,
                "interval": "string",
                "intervalFactor": 0,
                "legendFormat": "string",
                "measurement": "string",
                "metricColumn": "string",
                "metricKind": "string",
                "metricName": "string",
                "metricType": "string",
                "metrics": [
                  {
                    "field": "string",
                    "id": "string",
                    "type": "string"
                  }
                ],
                "namespace": "string",
                "perSeriesAligner": "string",
                "period": "string",
                "projectName": "string",
                "query": "string",
                "rawQuery": true,
                "rawSql": "string",
                "refId": "string",
                "region": "string",
                "select": [
                  [
                    {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ]
                ],
                "statistics": [
                  "string"
                ],
                "step": 0,
                "table": "string",
                "target": "string",
                "timeColumn": "string",
                "timeField": "string",
                "valueType": "string",
                "where": [
                  {
                    "datatype": "string",
                    "name": "string",
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ]
              }
            ],
            "thresholds": "string",
            "timeFrom": "string",
            "timeShift": "string",
            "title": "string",
            "tooltip": {
              "msResolution": true,
              "shared": true,
              "sort": 0,
              "value_type": "string"
            },
            "tooltipDecimals": 0,
            "transform": "string",
            "transparent": true,
            "type": "string",
            "valueFontSize": "string",
            "valueMaps": [
              {
                "op": "string",
                "text": "string",
                "value": "string"
              }
            ],
            "valueName": "string",
            "x-axis": true,
            "xAxis": {
              "show": true
            },
            "xBucketNumber": 0,
            "xBucketSize": "string",
            "xaxis": {
              "decimals": 0,
              "format": "string",
              "label": "string",
              "logBase": 0,
              "max": {
                "Valid": true,
                "Value": 0
              },
              "min": {
                "Valid": true,
                "Value": 0
              },
              "show": true
            },
            "y-axis": true,
            "yAxis": {
              "decimals": 0,
              "format": "string",
              "logBase": 0,
              "max": "string",
              "min": "string",
              "show": true,
              "splitFactor": 0
            },
            "yBucketBound": "string",
            "yBucketNumber": 0,
            "yBucketSize": 0,
            "y_formats": [
              "string"
            ],
            "yaxes": [
              {
                "decimals": 0,
                "format": "string",
                "label": "string",
                "logBase": 0,
                "max": {
                  "Valid": true,
                  "Value": 0
                },
                "min": {
                  "Valid": true,
                  "Value": 0
                },
                "show": true
              }
            ]
          }
        ],
        "slug": "string",
        "template_vars": [
          {
            "datasource": {
              "id": 0,
              "name": "string"
            },
            "hide": 0,
            "name": "string",
            "query": "string",
            "value": {}
          }
        ],
        "title": "string",
        "uid": "string",
        "uri": "string"
      },
      "panels": [
        {
          "alert": {
            "alertRuleTags": {
              "property1": "string",
              "property2": "string"
            },
            "conditions": [
              {
                "evaluator": {
                  "params": [
                    0
                  ],
                  "type": "string"
                },
                "operator": {
                  "type": "string"
                },
                "query": {
                  "params": [
                    "string"
                  ]
                },
                "reducer": {
                  "params": [
                    "string"
                  ],
                  "type": "string"
                },
                "type": "string"
              }
            ],
            "executionErrorState": "string",
            "for": "string",
            "frequency": "string",
            "handler": 0,
            "message": "string",
            "name": "string",
            "noDataState": "string",
            "notifications": [
              {
                "disableResolveMessage": true,
                "frequency": "string",
                "id": 0,
                "isDefault": true,
                "name": "string",
                "sendReminder": true,
                "settings": {},
                "type": "string",
                "uid": "string"
              }
            ]
          },
          "aliasColors": {},
          "bars": true,
          "cards": {
            "cardPadding": 0,
            "cardRound": 0
          },
          "collapsed": true,
          "color": {
            "cardColor": "string",
            "colorScale": "string",
            "colorScheme": "string",
            "exponent": 0,
            "max": 0,
            "min": 0,
            "mode": "string"
          },
          "colorBackground": true,
          "colorValue": true,
          "colors": [
            "string"
          ],
          "columns": [
            {
              "text": "string",
              "value": "string"
            }
          ],
          "content": "string",
          "dashLength": 0,
          "dashboardTags": [
            "string"
          ],
          "dashes": true,
          "dataFormat": "string",
          "datasource": "string",
          "decimals": 0,
          "description": "string",
          "editable": true,
          "error": true,
          "fieldConfig": {
            "defaults": {
              "threshold": {
                "mode": "string",
                "steps": [
                  {
                    "color": "string",
                    "value": "string"
                  }
                ]
              },
              "unit": "string"
            }
          },
          "fill": 0,
          "folderId": 0,
          "format": "string",
          "gauge": {
            "maxValue": 0,
            "minValue": 0,
            "show": true,
            "thresholdLabels": true,
            "thresholdMarkers": true
          },
          "gridPos": {
            "h": 0,
            "w": 0,
            "x": 0,
            "y": 0
          },
          "headings": true,
          "height": {},
          "hideTimeOverride": true,
          "hideZeroBuckets": true,
          "highlightCards": true,
          "id": 0,
          "isNew": true,
          "leftYAxisLabel": "string",
          "legend": {
            "alignAsTable": true,
            "avg": true,
            "current": true,
            "hideEmpty": true,
            "hideZero": true,
            "max": true,
            "min": true,
            "rightSide": true,
            "show": true,
            "sideWidth": 0,
            "total": true,
            "values": true
          },
          "limit": 0,
          "lines": true,
          "linewidth": 0,
          "links": [
            {
              "asDropdown": true,
              "dashUri": "string",
              "dashboard": "string",
              "icon": "string",
              "includeVars": true,
              "keepTime": true,
              "params": "string",
              "tags": [
                "string"
              ],
              "targetBlank": true,
              "title": "string",
              "tooltip": "string",
              "type": "string",
              "url": "string"
            }
          ],
          "mappingType": 0,
          "mappingTypes": [
            {
              "name": "string",
              "value": 0
            }
          ],
          "maxDataPoints": {
            "Valid": true,
            "Value": 0
          },
          "minSpan": 0,
          "mode": "string",
          "nameFilter": "string",
          "nullPointMode": "string",
          "onlyAlertsOnDashboard": true,
          "options": {
            "colorMode": "string",
            "content": "string",
            "displayMode": "string",
            "graphMode": "string",
            "justifyMode": "string",
            "mode": "string",
            "orientation": "string",
            "reduceOptions": {
              "calcs": [
                "string"
              ],
              "fields": "string",
              "values": true
            },
            "textMode": "string"
          },
          "pageSize": 0,
          "panels": [
            {}
          ],
          "percentage": true,
          "pointradius": 0,
          "points": true,
          "postfix": "string",
          "postfixFontSize": "string",
          "prefix": "string",
          "prefixFontSize": "string",
          "query": "string",
          "rangeMaps": [
            {
              "from": "string",
              "text": "string",
              "to": "string"
            }
          ],
          "recent": true,
          "renderer": "string",
          "repeat": "string",
          "repeatPanelId": 0,
          "reverseYBuckets": true,
          "rightYAxisLabel": "string",
          "scopedVars": {
            "property1": {
              "selected": true,
              "text": "string",
              "value": "string"
            },
            "property2": {
              "selected": true,
              "text": "string",
              "value": "string"
            }
          },
          "scroll": true,
          "search": true,
          "seriesOverrides": [
            {
              "alias": "string",
              "bars": true,
              "color": "string",
              "dashes": true,
              "fill": 0,
              "fillBelowTo": "string",
              "legend": true,
              "lines": true,
              "linewidth": 0,
              "nullPointMode": "string",
              "stack": {
                "Flag": true,
                "Value": "string"
              },
              "transform": "string",
              "yaxis": 0,
              "zindex": 0
            }
          ],
          "show": "string",
          "showHeader": true,
          "sort": {
            "col": 0,
            "desc": true
          },
          "sortOrder": 0,
          "spaceLength": 0,
          "span": 0,
          "sparkline": {
            "fillColor": "string",
            "full": true,
            "lineColor": "string",
            "show": true,
            "ymax": 0,
            "ymin": 0
          },
          "stack": true,
          "starred": true,
          "stateFilter": [
            "string"
          ],
          "steppedLine": true,
          "styles": [
            {
              "alias": "string",
              "colorMode": "string",
              "colors": [
                "string"
              ],
              "dateFormat": "string",
              "decimals": 0,
              "link": true,
              "linkTargetBlank": true,
              "linkTooltip": "string",
              "linkUrl": "string",
              "mappingType": 0,
              "pattern": "string",
              "thresholds": [
                "string"
              ],
              "type": "string",
              "unit": "string",
              "valueMaps": [
                {
                  "op": "string",
                  "text": "string",
                  "value": "string"
                }
              ]
            }
          ],
          "tags": [
            "string"
          ],
          "targets": [
            {
              "alias": "string",
              "aliasBy": "string",
              "alignOptions": [
                {
                  "expanded": true,
                  "label": "string",
                  "options": [
                    {
                      "label": "string",
                      "metricKinds": [
                        "string"
                      ],
                      "text": "string",
                      "value": "string",
                      "valueTypes": [
                        "string"
                      ]
                    }
                  ]
                }
              ],
              "alignmentPeriod": "string",
              "bucketAggs": [
                {
                  "field": "string",
                  "id": "string",
                  "settings": {
                    "interval": "string",
                    "min_doc_count": {},
                    "order": "string",
                    "orderBy": "string",
                    "size": "string"
                  },
                  "type": "string"
                }
              ],
              "crossSeriesReducer": "string",
              "datasource": "string",
              "dimensions": {
                "property1": "string",
                "property2": "string"
              },
              "dsType": "string",
              "expr": "string",
              "filters": [
                "string"
              ],
              "format": "string",
              "group": [
                {
                  "params": [
                    "string"
                  ],
                  "type": "string"
                }
              ],
              "groupBys": [
                "string"
              ],
              "hide": true,
              "instant": true,
              "interval": "string",
              "intervalFactor": 0,
              "legendFormat": "string",
              "measurement": "string",
              "metricColumn": "string",
              "metricKind": "string",
              "metricName": "string",
              "metricType": "string",
              "metrics": [
                {
                  "field": "string",
                  "id": "string",
                  "type": "string"
                }
              ],
              "namespace": "string",
              "perSeriesAligner": "string",
              "period": "string",
              "projectName": "string",
              "query": "string",
              "rawQuery": true,
              "rawSql": "string",
              "refId": "string",
              "region": "string",
              "select": [
                [
                  {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ]
              ],
              "statistics": [
                "string"
              ],
              "step": 0,
              "table": "string",
              "target": "string",
              "timeColumn": "string",
              "timeField": "string",
              "valueType": "string",
              "where": [
                {
                  "datatype": "string",
                  "name": "string",
                  "params": [
                    "string"
                  ],
                  "type": "string"
                }
              ]
            }
          ],
          "thresholds": "string",
          "timeFrom": "string",
          "timeShift": "string",
          "title": "string",
          "tooltip": {
            "msResolution": true,
            "shared": true,
            "sort": 0,
            "value_type": "string"
          },
          "tooltipDecimals": 0,
          "transform": "string",
          "transparent": true,
          "type": "string",
          "valueFontSize": "string",
          "valueMaps": [
            {
              "op": "string",
              "text": "string",
              "value": "string"
            }
          ],
          "valueName": "string",
          "x-axis": true,
          "xAxis": {
            "show": true
          },
          "xBucketNumber": 0,
          "xBucketSize": "string",
          "xaxis": {
            "decimals": 0,
            "format": "string",
            "label": "string",
            "logBase": 0,
            "max": {
              "Valid": true,
              "Value": 0
            },
            "min": {
              "Valid": true,
              "Value": 0
            },
            "show": true
          },
          "y-axis": true,
          "yAxis": {
            "decimals": 0,
            "format": "string",
            "logBase": 0,
            "max": "string",
            "min": "string",
            "show": true,
            "splitFactor": 0
          },
          "yBucketBound": "string",
          "yBucketNumber": 0,
          "yBucketSize": 0,
          "y_formats": [
            "string"
          ],
          "yaxes": [
            {
              "decimals": 0,
              "format": "string",
              "label": "string",
              "logBase": 0,
              "max": {
                "Valid": true,
                "Value": 0
              },
              "min": {
                "Valid": true,
                "Value": 0
              },
              "show": true
            }
          ]
        }
      ],
      "templateVars": [
        "string"
      ]
    }
  ]'
```

`POST /api/telemetry/metrics/boards`

Used to persist selected board and panels

> Body parameter

```json
[
  {
    "board": {
      "org_id": 0,
      "panels": [
        {
          "alert": {
            "alertRuleTags": {
              "property1": "string",
              "property2": "string"
            },
            "conditions": [
              {
                "evaluator": {
                  "params": [
                    0
                  ],
                  "type": "string"
                },
                "operator": {
                  "type": "string"
                },
                "query": {
                  "params": [
                    "string"
                  ]
                },
                "reducer": {
                  "params": [
                    "string"
                  ],
                  "type": "string"
                },
                "type": "string"
              }
            ],
            "executionErrorState": "string",
            "for": "string",
            "frequency": "string",
            "handler": 0,
            "message": "string",
            "name": "string",
            "noDataState": "string",
            "notifications": [
              {
                "disableResolveMessage": true,
                "frequency": "string",
                "id": 0,
                "isDefault": true,
                "name": "string",
                "sendReminder": true,
                "settings": {},
                "type": "string",
                "uid": "string"
              }
            ]
          },
          "aliasColors": {},
          "bars": true,
          "cards": {
            "cardPadding": 0,
            "cardRound": 0
          },
          "collapsed": true,
          "color": {
            "cardColor": "string",
            "colorScale": "string",
            "colorScheme": "string",
            "exponent": 0,
            "max": 0,
            "min": 0,
            "mode": "string"
          },
          "colorBackground": true,
          "colorValue": true,
          "colors": [
            "string"
          ],
          "columns": [
            {
              "text": "string",
              "value": "string"
            }
          ],
          "content": "string",
          "dashLength": 0,
          "dashboardTags": [
            "string"
          ],
          "dashes": true,
          "dataFormat": "string",
          "datasource": "string",
          "decimals": 0,
          "description": "string",
          "editable": true,
          "error": true,
          "fieldConfig": {
            "defaults": {
              "threshold": {
                "mode": "string",
                "steps": [
                  {
                    "color": "string",
                    "value": "string"
                  }
                ]
              },
              "unit": "string"
            }
          },
          "fill": 0,
          "folderId": 0,
          "format": "string",
          "gauge": {
            "maxValue": 0,
            "minValue": 0,
            "show": true,
            "thresholdLabels": true,
            "thresholdMarkers": true
          },
          "gridPos": {
            "h": 0,
            "w": 0,
            "x": 0,
            "y": 0
          },
          "headings": true,
          "height": {},
          "hideTimeOverride": true,
          "hideZeroBuckets": true,
          "highlightCards": true,
          "id": 0,
          "isNew": true,
          "leftYAxisLabel": "string",
          "legend": {
            "alignAsTable": true,
            "avg": true,
            "current": true,
            "hideEmpty": true,
            "hideZero": true,
            "max": true,
            "min": true,
            "rightSide": true,
            "show": true,
            "sideWidth": 0,
            "total": true,
            "values": true
          },
          "limit": 0,
          "lines": true,
          "linewidth": 0,
          "links": [
            {
              "asDropdown": true,
              "dashUri": "string",
              "dashboard": "string",
              "icon": "string",
              "includeVars": true,
              "keepTime": true,
              "params": "string",
              "tags": [
                "string"
              ],
              "targetBlank": true,
              "title": "string",
              "tooltip": "string",
              "type": "string",
              "url": "string"
            }
          ],
          "mappingType": 0,
          "mappingTypes": [
            {
              "name": "string",
              "value": 0
            }
          ],
          "maxDataPoints": {
            "Valid": true,
            "Value": 0
          },
          "minSpan": 0,
          "mode": "string",
          "nameFilter": "string",
          "nullPointMode": "string",
          "onlyAlertsOnDashboard": true,
          "options": {
            "colorMode": "string",
            "content": "string",
            "displayMode": "string",
            "graphMode": "string",
            "justifyMode": "string",
            "mode": "string",
            "orientation": "string",
            "reduceOptions": {
              "calcs": [
                "string"
              ],
              "fields": "string",
              "values": true
            },
            "textMode": "string"
          },
          "pageSize": 0,
          "panels": [
            {}
          ],
          "percentage": true,
          "pointradius": 0,
          "points": true,
          "postfix": "string",
          "postfixFontSize": "string",
          "prefix": "string",
          "prefixFontSize": "string",
          "query": "string",
          "rangeMaps": [
            {
              "from": "string",
              "text": "string",
              "to": "string"
            }
          ],
          "recent": true,
          "renderer": "string",
          "repeat": "string",
          "repeatPanelId": 0,
          "reverseYBuckets": true,
          "rightYAxisLabel": "string",
          "scopedVars": {
            "property1": {
              "selected": true,
              "text": "string",
              "value": "string"
            },
            "property2": {
              "selected": true,
              "text": "string",
              "value": "string"
            }
          },
          "scroll": true,
          "search": true,
          "seriesOverrides": [
            {
              "alias": "string",
              "bars": true,
              "color": "string",
              "dashes": true,
              "fill": 0,
              "fillBelowTo": "string",
              "legend": true,
              "lines": true,
              "linewidth": 0,
              "nullPointMode": "string",
              "stack": {
                "Flag": true,
                "Value": "string"
              },
              "transform": "string",
              "yaxis": 0,
              "zindex": 0
            }
          ],
          "show": "string",
          "showHeader": true,
          "sort": {
            "col": 0,
            "desc": true
          },
          "sortOrder": 0,
          "spaceLength": 0,
          "span": 0,
          "sparkline": {
            "fillColor": "string",
            "full": true,
            "lineColor": "string",
            "show": true,
            "ymax": 0,
            "ymin": 0
          },
          "stack": true,
          "starred": true,
          "stateFilter": [
            "string"
          ],
          "steppedLine": true,
          "styles": [
            {
              "alias": "string",
              "colorMode": "string",
              "colors": [
                "string"
              ],
              "dateFormat": "string",
              "decimals": 0,
              "link": true,
              "linkTargetBlank": true,
              "linkTooltip": "string",
              "linkUrl": "string",
              "mappingType": 0,
              "pattern": "string",
              "thresholds": [
                "string"
              ],
              "type": "string",
              "unit": "string",
              "valueMaps": [
                {
                  "op": "string",
                  "text": "string",
                  "value": "string"
                }
              ]
            }
          ],
          "tags": [
            "string"
          ],
          "targets": [
            {
              "alias": "string",
              "aliasBy": "string",
              "alignOptions": [
                {
                  "expanded": true,
                  "label": "string",
                  "options": [
                    {
                      "label": "string",
                      "metricKinds": [
                        "string"
                      ],
                      "text": "string",
                      "value": "string",
                      "valueTypes": [
                        "string"
                      ]
                    }
                  ]
                }
              ],
              "alignmentPeriod": "string",
              "bucketAggs": [
                {
                  "field": "string",
                  "id": "string",
                  "settings": {
                    "interval": "string",
                    "min_doc_count": {},
                    "order": "string",
                    "orderBy": "string",
                    "size": "string"
                  },
                  "type": "string"
                }
              ],
              "crossSeriesReducer": "string",
              "datasource": "string",
              "dimensions": {
                "property1": "string",
                "property2": "string"
              },
              "dsType": "string",
              "expr": "string",
              "filters": [
                "string"
              ],
              "format": "string",
              "group": [
                {
                  "params": [
                    "string"
                  ],
                  "type": "string"
                }
              ],
              "groupBys": [
                "string"
              ],
              "hide": true,
              "instant": true,
              "interval": "string",
              "intervalFactor": 0,
              "legendFormat": "string",
              "measurement": "string",
              "metricColumn": "string",
              "metricKind": "string",
              "metricName": "string",
              "metricType": "string",
              "metrics": [
                {
                  "field": "string",
                  "id": "string",
                  "type": "string"
                }
              ],
              "namespace": "string",
              "perSeriesAligner": "string",
              "period": "string",
              "projectName": "string",
              "query": "string",
              "rawQuery": true,
              "rawSql": "string",
              "refId": "string",
              "region": "string",
              "select": [
                [
                  {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ]
              ],
              "statistics": [
                "string"
              ],
              "step": 0,
              "table": "string",
              "target": "string",
              "timeColumn": "string",
              "timeField": "string",
              "valueType": "string",
              "where": [
                {
                  "datatype": "string",
                  "name": "string",
                  "params": [
                    "string"
                  ],
                  "type": "string"
                }
              ]
            }
          ],
          "thresholds": "string",
          "timeFrom": "string",
          "timeShift": "string",
          "title": "string",
          "tooltip": {
            "msResolution": true,
            "shared": true,
            "sort": 0,
            "value_type": "string"
          },
          "tooltipDecimals": 0,
          "transform": "string",
          "transparent": true,
          "type": "string",
          "valueFontSize": "string",
          "valueMaps": [
            {
              "op": "string",
              "text": "string",
              "value": "string"
            }
          ],
          "valueName": "string",
          "x-axis": true,
          "xAxis": {
            "show": true
          },
          "xBucketNumber": 0,
          "xBucketSize": "string",
          "xaxis": {
            "decimals": 0,
            "format": "string",
            "label": "string",
            "logBase": 0,
            "max": {
              "Valid": true,
              "Value": 0
            },
            "min": {
              "Valid": true,
              "Value": 0
            },
            "show": true
          },
          "y-axis": true,
          "yAxis": {
            "decimals": 0,
            "format": "string",
            "logBase": 0,
            "max": "string",
            "min": "string",
            "show": true,
            "splitFactor": 0
          },
          "yBucketBound": "string",
          "yBucketNumber": 0,
          "yBucketSize": 0,
          "y_formats": [
            "string"
          ],
          "yaxes": [
            {
              "decimals": 0,
              "format": "string",
              "label": "string",
              "logBase": 0,
              "max": {
                "Valid": true,
                "Value": 0
              },
              "min": {
                "Valid": true,
                "Value": 0
              },
              "show": true
            }
          ]
        }
      ],
      "slug": "string",
      "template_vars": [
        {
          "datasource": {
            "id": 0,
            "name": "string"
          },
          "hide": 0,
          "name": "string",
          "query": "string",
          "value": {}
        }
      ],
      "title": "string",
      "uid": "string",
      "uri": "string"
    },
    "panels": [
      {
        "alert": {
          "alertRuleTags": {
            "property1": "string",
            "property2": "string"
          },
          "conditions": [
            {
              "evaluator": {
                "params": [
                  0
                ],
                "type": "string"
              },
              "operator": {
                "type": "string"
              },
              "query": {
                "params": [
                  "string"
                ]
              },
              "reducer": {
                "params": [
                  "string"
                ],
                "type": "string"
              },
              "type": "string"
            }
          ],
          "executionErrorState": "string",
          "for": "string",
          "frequency": "string",
          "handler": 0,
          "message": "string",
          "name": "string",
          "noDataState": "string",
          "notifications": [
            {
              "disableResolveMessage": true,
              "frequency": "string",
              "id": 0,
              "isDefault": true,
              "name": "string",
              "sendReminder": true,
              "settings": {},
              "type": "string",
              "uid": "string"
            }
          ]
        },
        "aliasColors": {},
        "bars": true,
        "cards": {
          "cardPadding": 0,
          "cardRound": 0
        },
        "collapsed": true,
        "color": {
          "cardColor": "string",
          "colorScale": "string",
          "colorScheme": "string",
          "exponent": 0,
          "max": 0,
          "min": 0,
          "mode": "string"
        },
        "colorBackground": true,
        "colorValue": true,
        "colors": [
          "string"
        ],
        "columns": [
          {
            "text": "string",
            "value": "string"
          }
        ],
        "content": "string",
        "dashLength": 0,
        "dashboardTags": [
          "string"
        ],
        "dashes": true,
        "dataFormat": "string",
        "datasource": "string",
        "decimals": 0,
        "description": "string",
        "editable": true,
        "error": true,
        "fieldConfig": {
          "defaults": {
            "threshold": {
              "mode": "string",
              "steps": [
                {
                  "color": "string",
                  "value": "string"
                }
              ]
            },
            "unit": "string"
          }
        },
        "fill": 0,
        "folderId": 0,
        "format": "string",
        "gauge": {
          "maxValue": 0,
          "minValue": 0,
          "show": true,
          "thresholdLabels": true,
          "thresholdMarkers": true
        },
        "gridPos": {
          "h": 0,
          "w": 0,
          "x": 0,
          "y": 0
        },
        "headings": true,
        "height": {},
        "hideTimeOverride": true,
        "hideZeroBuckets": true,
        "highlightCards": true,
        "id": 0,
        "isNew": true,
        "leftYAxisLabel": "string",
        "legend": {
          "alignAsTable": true,
          "avg": true,
          "current": true,
          "hideEmpty": true,
          "hideZero": true,
          "max": true,
          "min": true,
          "rightSide": true,
          "show": true,
          "sideWidth": 0,
          "total": true,
          "values": true
        },
        "limit": 0,
        "lines": true,
        "linewidth": 0,
        "links": [
          {
            "asDropdown": true,
            "dashUri": "string",
            "dashboard": "string",
            "icon": "string",
            "includeVars": true,
            "keepTime": true,
            "params": "string",
            "tags": [
              "string"
            ],
            "targetBlank": true,
            "title": "string",
            "tooltip": "string",
            "type": "string",
            "url": "string"
          }
        ],
        "mappingType": 0,
        "mappingTypes": [
          {
            "name": "string",
            "value": 0
          }
        ],
        "maxDataPoints": {
          "Valid": true,
          "Value": 0
        },
        "minSpan": 0,
        "mode": "string",
        "nameFilter": "string",
        "nullPointMode": "string",
        "onlyAlertsOnDashboard": true,
        "options": {
          "colorMode": "string",
          "content": "string",
          "displayMode": "string",
          "graphMode": "string",
          "justifyMode": "string",
          "mode": "string",
          "orientation": "string",
          "reduceOptions": {
            "calcs": [
              "string"
            ],
            "fields": "string",
            "values": true
          },
          "textMode": "string"
        },
        "pageSize": 0,
        "panels": [
          {}
        ],
        "percentage": true,
        "pointradius": 0,
        "points": true,
        "postfix": "string",
        "postfixFontSize": "string",
        "prefix": "string",
        "prefixFontSize": "string",
        "query": "string",
        "rangeMaps": [
          {
            "from": "string",
            "text": "string",
            "to": "string"
          }
        ],
        "recent": true,
        "renderer": "string",
        "repeat": "string",
        "repeatPanelId": 0,
        "reverseYBuckets": true,
        "rightYAxisLabel": "string",
        "scopedVars": {
          "property1": {
            "selected": true,
            "text": "string",
            "value": "string"
          },
          "property2": {
            "selected": true,
            "text": "string",
            "value": "string"
          }
        },
        "scroll": true,
        "search": true,
        "seriesOverrides": [
          {
            "alias": "string",
            "bars": true,
            "color": "string",
            "dashes": true,
            "fill": 0,
            "fillBelowTo": "string",
            "legend": true,
            "lines": true,
            "linewidth": 0,
            "nullPointMode": "string",
            "stack": {
              "Flag": true,
              "Value": "string"
            },
            "transform": "string",
            "yaxis": 0,
            "zindex": 0
          }
        ],
        "show": "string",
        "showHeader": true,
        "sort": {
          "col": 0,
          "desc": true
        },
        "sortOrder": 0,
        "spaceLength": 0,
        "span": 0,
        "sparkline": {
          "fillColor": "string",
          "full": true,
          "lineColor": "string",
          "show": true,
          "ymax": 0,
          "ymin": 0
        },
        "stack": true,
        "starred": true,
        "stateFilter": [
          "string"
        ],
        "steppedLine": true,
        "styles": [
          {
            "alias": "string",
            "colorMode": "string",
            "colors": [
              "string"
            ],
            "dateFormat": "string",
            "decimals": 0,
            "link": true,
            "linkTargetBlank": true,
            "linkTooltip": "string",
            "linkUrl": "string",
            "mappingType": 0,
            "pattern": "string",
            "thresholds": [
              "string"
            ],
            "type": "string",
            "unit": "string",
            "valueMaps": [
              {
                "op": "string",
                "text": "string",
                "value": "string"
              }
            ]
          }
        ],
        "tags": [
          "string"
        ],
        "targets": [
          {
            "alias": "string",
            "aliasBy": "string",
            "alignOptions": [
              {
                "expanded": true,
                "label": "string",
                "options": [
                  {
                    "label": "string",
                    "metricKinds": [
                      "string"
                    ],
                    "text": "string",
                    "value": "string",
                    "valueTypes": [
                      "string"
                    ]
                  }
                ]
              }
            ],
            "alignmentPeriod": "string",
            "bucketAggs": [
              {
                "field": "string",
                "id": "string",
                "settings": {
                  "interval": "string",
                  "min_doc_count": {},
                  "order": "string",
                  "orderBy": "string",
                  "size": "string"
                },
                "type": "string"
              }
            ],
            "crossSeriesReducer": "string",
            "datasource": "string",
            "dimensions": {
              "property1": "string",
              "property2": "string"
            },
            "dsType": "string",
            "expr": "string",
            "filters": [
              "string"
            ],
            "format": "string",
            "group": [
              {
                "params": [
                  "string"
                ],
                "type": "string"
              }
            ],
            "groupBys": [
              "string"
            ],
            "hide": true,
            "instant": true,
            "interval": "string",
            "intervalFactor": 0,
            "legendFormat": "string",
            "measurement": "string",
            "metricColumn": "string",
            "metricKind": "string",
            "metricName": "string",
            "metricType": "string",
            "metrics": [
              {
                "field": "string",
                "id": "string",
                "type": "string"
              }
            ],
            "namespace": "string",
            "perSeriesAligner": "string",
            "period": "string",
            "projectName": "string",
            "query": "string",
            "rawQuery": true,
            "rawSql": "string",
            "refId": "string",
            "region": "string",
            "select": [
              [
                {
                  "params": [
                    "string"
                  ],
                  "type": "string"
                }
              ]
            ],
            "statistics": [
              "string"
            ],
            "step": 0,
            "table": "string",
            "target": "string",
            "timeColumn": "string",
            "timeField": "string",
            "valueType": "string",
            "where": [
              {
                "datatype": "string",
                "name": "string",
                "params": [
                  "string"
                ],
                "type": "string"
              }
            ]
          }
        ],
        "thresholds": "string",
        "timeFrom": "string",
        "timeShift": "string",
        "title": "string",
        "tooltip": {
          "msResolution": true,
          "shared": true,
          "sort": 0,
          "value_type": "string"
        },
        "tooltipDecimals": 0,
        "transform": "string",
        "transparent": true,
        "type": "string",
        "valueFontSize": "string",
        "valueMaps": [
          {
            "op": "string",
            "text": "string",
            "value": "string"
          }
        ],
        "valueName": "string",
        "x-axis": true,
        "xAxis": {
          "show": true
        },
        "xBucketNumber": 0,
        "xBucketSize": "string",
        "xaxis": {
          "decimals": 0,
          "format": "string",
          "label": "string",
          "logBase": 0,
          "max": {
            "Valid": true,
            "Value": 0
          },
          "min": {
            "Valid": true,
            "Value": 0
          },
          "show": true
        },
        "y-axis": true,
        "yAxis": {
          "decimals": 0,
          "format": "string",
          "logBase": 0,
          "max": "string",
          "min": "string",
          "show": true,
          "splitFactor": 0
        },
        "yBucketBound": "string",
        "yBucketNumber": 0,
        "yBucketSize": 0,
        "y_formats": [
          "string"
        ],
        "yaxes": [
          {
            "decimals": 0,
            "format": "string",
            "label": "string",
            "logBase": 0,
            "max": {
              "Valid": true,
              "Value": 0
            },
            "min": {
              "Valid": true,
              "Value": 0
            },
            "show": true
          }
        ]
      }
    ],
    "templateVars": [
      "string"
    ]
  }
]
```

<h3 id="handle-post-request-for-prometheus-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[SelectedGrafanaConfig](#schemaselectedgrafanaconfig)]|true|none|

<h3 id="handle-post-request-for-prometheus-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET for Prometheus configuration

<a id="opIdidGetPrometheusConfig"></a>

> Code samples

```bash
curl https://example.com/api/telemetry/metrics/config \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/telemetry/metrics/config`

Used for fetching Prometheus configuration

> Example responses

> 200 Response

```json
{
  "prometheusURL": "string",
  "selectedPrometheusBoardsConfigs": [
    {
      "board": {
        "org_id": 0,
        "panels": [
          {
            "alert": {
              "alertRuleTags": {
                "property1": "string",
                "property2": "string"
              },
              "conditions": [
                {
                  "evaluator": {
                    "params": [
                      0
                    ],
                    "type": "string"
                  },
                  "operator": {
                    "type": "string"
                  },
                  "query": {
                    "params": [
                      "string"
                    ]
                  },
                  "reducer": {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  },
                  "type": "string"
                }
              ],
              "executionErrorState": "string",
              "for": "string",
              "frequency": "string",
              "handler": 0,
              "message": "string",
              "name": "string",
              "noDataState": "string",
              "notifications": [
                {
                  "disableResolveMessage": true,
                  "frequency": "string",
                  "id": 0,
                  "isDefault": true,
                  "name": "string",
                  "sendReminder": true,
                  "settings": {},
                  "type": "string",
                  "uid": "string"
                }
              ]
            },
            "aliasColors": {},
            "bars": true,
            "cards": {
              "cardPadding": 0,
              "cardRound": 0
            },
            "collapsed": true,
            "color": {
              "cardColor": "string",
              "colorScale": "string",
              "colorScheme": "string",
              "exponent": 0,
              "max": 0,
              "min": 0,
              "mode": "string"
            },
            "colorBackground": true,
            "colorValue": true,
            "colors": [
              "string"
            ],
            "columns": [
              {
                "text": "string",
                "value": "string"
              }
            ],
            "content": "string",
            "dashLength": 0,
            "dashboardTags": [
              "string"
            ],
            "dashes": true,
            "dataFormat": "string",
            "datasource": "string",
            "decimals": 0,
            "description": "string",
            "editable": true,
            "error": true,
            "fieldConfig": {
              "defaults": {
                "threshold": {
                  "mode": "string",
                  "steps": [
                    {
                      "color": "string",
                      "value": "string"
                    }
                  ]
                },
                "unit": "string"
              }
            },
            "fill": 0,
            "folderId": 0,
            "format": "string",
            "gauge": {
              "maxValue": 0,
              "minValue": 0,
              "show": true,
              "thresholdLabels": true,
              "thresholdMarkers": true
            },
            "gridPos": {
              "h": 0,
              "w": 0,
              "x": 0,
              "y": 0
            },
            "headings": true,
            "height": {},
            "hideTimeOverride": true,
            "hideZeroBuckets": true,
            "highlightCards": true,
            "id": 0,
            "isNew": true,
            "leftYAxisLabel": "string",
            "legend": {
              "alignAsTable": true,
              "avg": true,
              "current": true,
              "hideEmpty": true,
              "hideZero": true,
              "max": true,
              "min": true,
              "rightSide": true,
              "show": true,
              "sideWidth": 0,
              "total": true,
              "values": true
            },
            "limit": 0,
            "lines": true,
            "linewidth": 0,
            "links": [
              {
                "asDropdown": true,
                "dashUri": "string",
                "dashboard": "string",
                "icon": "string",
                "includeVars": true,
                "keepTime": true,
                "params": "string",
                "tags": [
                  "string"
                ],
                "targetBlank": true,
                "title": "string",
                "tooltip": "string",
                "type": "string",
                "url": "string"
              }
            ],
            "mappingType": 0,
            "mappingTypes": [
              {
                "name": "string",
                "value": 0
              }
            ],
            "maxDataPoints": {
              "Valid": true,
              "Value": 0
            },
            "minSpan": 0,
            "mode": "string",
            "nameFilter": "string",
            "nullPointMode": "string",
            "onlyAlertsOnDashboard": true,
            "options": {
              "colorMode": "string",
              "content": "string",
              "displayMode": "string",
              "graphMode": "string",
              "justifyMode": "string",
              "mode": "string",
              "orientation": "string",
              "reduceOptions": {
                "calcs": [
                  "string"
                ],
                "fields": "string",
                "values": true
              },
              "textMode": "string"
            },
            "pageSize": 0,
            "panels": [
              {}
            ],
            "percentage": true,
            "pointradius": 0,
            "points": true,
            "postfix": "string",
            "postfixFontSize": "string",
            "prefix": "string",
            "prefixFontSize": "string",
            "query": "string",
            "rangeMaps": [
              {
                "from": "string",
                "text": "string",
                "to": "string"
              }
            ],
            "recent": true,
            "renderer": "string",
            "repeat": "string",
            "repeatPanelId": 0,
            "reverseYBuckets": true,
            "rightYAxisLabel": "string",
            "scopedVars": {
              "property1": {
                "selected": true,
                "text": "string",
                "value": "string"
              },
              "property2": {
                "selected": true,
                "text": "string",
                "value": "string"
              }
            },
            "scroll": true,
            "search": true,
            "seriesOverrides": [
              {
                "alias": "string",
                "bars": true,
                "color": "string",
                "dashes": true,
                "fill": 0,
                "fillBelowTo": "string",
                "legend": true,
                "lines": true,
                "linewidth": 0,
                "nullPointMode": "string",
                "stack": {
                  "Flag": true,
                  "Value": "string"
                },
                "transform": "string",
                "yaxis": 0,
                "zindex": 0
              }
            ],
            "show": "string",
            "showHeader": true,
            "sort": {
              "col": 0,
              "desc": true
            },
            "sortOrder": 0,
            "spaceLength": 0,
            "span": 0,
            "sparkline": {
              "fillColor": "string",
              "full": true,
              "lineColor": "string",
              "show": true,
              "ymax": 0,
              "ymin": 0
            },
            "stack": true,
            "starred": true,
            "stateFilter": [
              "string"
            ],
            "steppedLine": true,
            "styles": [
              {
                "alias": "string",
                "colorMode": "string",
                "colors": [
                  "string"
                ],
                "dateFormat": "string",
                "decimals": 0,
                "link": true,
                "linkTargetBlank": true,
                "linkTooltip": "string",
                "linkUrl": "string",
                "mappingType": 0,
                "pattern": "string",
                "thresholds": [
                  "string"
                ],
                "type": "string",
                "unit": "string",
                "valueMaps": [
                  {
                    "op": "string",
                    "text": "string",
                    "value": "string"
                  }
                ]
              }
            ],
            "tags": [
              "string"
            ],
            "targets": [
              {
                "alias": "string",
                "aliasBy": "string",
                "alignOptions": [
                  {
                    "expanded": true,
                    "label": "string",
                    "options": [
                      {
                        "label": "string",
                        "metricKinds": [
                          "string"
                        ],
                        "text": "string",
                        "value": "string",
                        "valueTypes": [
                          "string"
                        ]
                      }
                    ]
                  }
                ],
                "alignmentPeriod": "string",
                "bucketAggs": [
                  {
                    "field": "string",
                    "id": "string",
                    "settings": {
                      "interval": "string",
                      "min_doc_count": {},
                      "order": "string",
                      "orderBy": "string",
                      "size": "string"
                    },
                    "type": "string"
                  }
                ],
                "crossSeriesReducer": "string",
                "datasource": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "dsType": "string",
                "expr": "string",
                "filters": [
                  "string"
                ],
                "format": "string",
                "group": [
                  {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ],
                "groupBys": [
                  "string"
                ],
                "hide": true,
                "instant": true,
                "interval": "string",
                "intervalFactor": 0,
                "legendFormat": "string",
                "measurement": "string",
                "metricColumn": "string",
                "metricKind": "string",
                "metricName": "string",
                "metricType": "string",
                "metrics": [
                  {
                    "field": "string",
                    "id": "string",
                    "type": "string"
                  }
                ],
                "namespace": "string",
                "perSeriesAligner": "string",
                "period": "string",
                "projectName": "string",
                "query": "string",
                "rawQuery": true,
                "rawSql": "string",
                "refId": "string",
                "region": "string",
                "select": [
                  [
                    {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ]
                ],
                "statistics": [
                  "string"
                ],
                "step": 0,
                "table": "string",
                "target": "string",
                "timeColumn": "string",
                "timeField": "string",
                "valueType": "string",
                "where": [
                  {
                    "datatype": "string",
                    "name": "string",
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ]
              }
            ],
            "thresholds": "string",
            "timeFrom": "string",
            "timeShift": "string",
            "title": "string",
            "tooltip": {
              "msResolution": true,
              "shared": true,
              "sort": 0,
              "value_type": "string"
            },
            "tooltipDecimals": 0,
            "transform": "string",
            "transparent": true,
            "type": "string",
            "valueFontSize": "string",
            "valueMaps": [
              {
                "op": "string",
                "text": "string",
                "value": "string"
              }
            ],
            "valueName": "string",
            "x-axis": true,
            "xAxis": {
              "show": true
            },
            "xBucketNumber": 0,
            "xBucketSize": "string",
            "xaxis": {
              "decimals": 0,
              "format": "string",
              "label": "string",
              "logBase": 0,
              "max": {
                "Valid": true,
                "Value": 0
              },
              "min": {
                "Valid": true,
                "Value": 0
              },
              "show": true
            },
            "y-axis": true,
            "yAxis": {
              "decimals": 0,
              "format": "string",
              "logBase": 0,
              "max": "string",
              "min": "string",
              "show": true,
              "splitFactor": 0
            },
            "yBucketBound": "string",
            "yBucketNumber": 0,
            "yBucketSize": 0,
            "y_formats": [
              "string"
            ],
            "yaxes": [
              {
                "decimals": 0,
                "format": "string",
                "label": "string",
                "logBase": 0,
                "max": {
                  "Valid": true,
                  "Value": 0
                },
                "min": {
                  "Valid": true,
                  "Value": 0
                },
                "show": true
              }
            ]
          }
        ],
        "slug": "string",
        "template_vars": [
          {
            "datasource": {
              "id": 0,
              "name": "string"
            },
            "hide": 0,
            "name": "string",
            "query": "string",
            "value": {}
          }
        ],
        "title": "string",
        "uid": "string",
        "uri": "string"
      },
      "panels": [
        {
          "alert": {
            "alertRuleTags": {
              "property1": "string",
              "property2": "string"
            },
            "conditions": [
              {
                "evaluator": {
                  "params": [
                    0
                  ],
                  "type": "string"
                },
                "operator": {
                  "type": "string"
                },
                "query": {
                  "params": [
                    "string"
                  ]
                },
                "reducer": {
                  "params": [
                    "string"
                  ],
                  "type": "string"
                },
                "type": "string"
              }
            ],
            "executionErrorState": "string",
            "for": "string",
            "frequency": "string",
            "handler": 0,
            "message": "string",
            "name": "string",
            "noDataState": "string",
            "notifications": [
              {
                "disableResolveMessage": true,
                "frequency": "string",
                "id": 0,
                "isDefault": true,
                "name": "string",
                "sendReminder": true,
                "settings": {},
                "type": "string",
                "uid": "string"
              }
            ]
          },
          "aliasColors": {},
          "bars": true,
          "cards": {
            "cardPadding": 0,
            "cardRound": 0
          },
          "collapsed": true,
          "color": {
            "cardColor": "string",
            "colorScale": "string",
            "colorScheme": "string",
            "exponent": 0,
            "max": 0,
            "min": 0,
            "mode": "string"
          },
          "colorBackground": true,
          "colorValue": true,
          "colors": [
            "string"
          ],
          "columns": [
            {
              "text": "string",
              "value": "string"
            }
          ],
          "content": "string",
          "dashLength": 0,
          "dashboardTags": [
            "string"
          ],
          "dashes": true,
          "dataFormat": "string",
          "datasource": "string",
          "decimals": 0,
          "description": "string",
          "editable": true,
          "error": true,
          "fieldConfig": {
            "defaults": {
              "threshold": {
                "mode": "string",
                "steps": [
                  {
                    "color": "string",
                    "value": "string"
                  }
                ]
              },
              "unit": "string"
            }
          },
          "fill": 0,
          "folderId": 0,
          "format": "string",
          "gauge": {
            "maxValue": 0,
            "minValue": 0,
            "show": true,
            "thresholdLabels": true,
            "thresholdMarkers": true
          },
          "gridPos": {
            "h": 0,
            "w": 0,
            "x": 0,
            "y": 0
          },
          "headings": true,
          "height": {},
          "hideTimeOverride": true,
          "hideZeroBuckets": true,
          "highlightCards": true,
          "id": 0,
          "isNew": true,
          "leftYAxisLabel": "string",
          "legend": {
            "alignAsTable": true,
            "avg": true,
            "current": true,
            "hideEmpty": true,
            "hideZero": true,
            "max": true,
            "min": true,
            "rightSide": true,
            "show": true,
            "sideWidth": 0,
            "total": true,
            "values": true
          },
          "limit": 0,
          "lines": true,
          "linewidth": 0,
          "links": [
            {
              "asDropdown": true,
              "dashUri": "string",
              "dashboard": "string",
              "icon": "string",
              "includeVars": true,
              "keepTime": true,
              "params": "string",
              "tags": [
                "string"
              ],
              "targetBlank": true,
              "title": "string",
              "tooltip": "string",
              "type": "string",
              "url": "string"
            }
          ],
          "mappingType": 0,
          "mappingTypes": [
            {
              "name": "string",
              "value": 0
            }
          ],
          "maxDataPoints": {
            "Valid": true,
            "Value": 0
          },
          "minSpan": 0,
          "mode": "string",
          "nameFilter": "string",
          "nullPointMode": "string",
          "onlyAlertsOnDashboard": true,
          "options": {
            "colorMode": "string",
            "content": "string",
            "displayMode": "string",
            "graphMode": "string",
            "justifyMode": "string",
            "mode": "string",
            "orientation": "string",
            "reduceOptions": {
              "calcs": [
                "string"
              ],
              "fields": "string",
              "values": true
            },
            "textMode": "string"
          },
          "pageSize": 0,
          "panels": [
            {}
          ],
          "percentage": true,
          "pointradius": 0,
          "points": true,
          "postfix": "string",
          "postfixFontSize": "string",
          "prefix": "string",
          "prefixFontSize": "string",
          "query": "string",
          "rangeMaps": [
            {
              "from": "string",
              "text": "string",
              "to": "string"
            }
          ],
          "recent": true,
          "renderer": "string",
          "repeat": "string",
          "repeatPanelId": 0,
          "reverseYBuckets": true,
          "rightYAxisLabel": "string",
          "scopedVars": {
            "property1": {
              "selected": true,
              "text": "string",
              "value": "string"
            },
            "property2": {
              "selected": true,
              "text": "string",
              "value": "string"
            }
          },
          "scroll": true,
          "search": true,
          "seriesOverrides": [
            {
              "alias": "string",
              "bars": true,
              "color": "string",
              "dashes": true,
              "fill": 0,
              "fillBelowTo": "string",
              "legend": true,
              "lines": true,
              "linewidth": 0,
              "nullPointMode": "string",
              "stack": {
                "Flag": true,
                "Value": "string"
              },
              "transform": "string",
              "yaxis": 0,
              "zindex": 0
            }
          ],
          "show": "string",
          "showHeader": true,
          "sort": {
            "col": 0,
            "desc": true
          },
          "sortOrder": 0,
          "spaceLength": 0,
          "span": 0,
          "sparkline": {
            "fillColor": "string",
            "full": true,
            "lineColor": "string",
            "show": true,
            "ymax": 0,
            "ymin": 0
          },
          "stack": true,
          "starred": true,
          "stateFilter": [
            "string"
          ],
          "steppedLine": true,
          "styles": [
            {
              "alias": "string",
              "colorMode": "string",
              "colors": [
                "string"
              ],
              "dateFormat": "string",
              "decimals": 0,
              "link": true,
              "linkTargetBlank": true,
              "linkTooltip": "string",
              "linkUrl": "string",
              "mappingType": 0,
              "pattern": "string",
              "thresholds": [
                "string"
              ],
              "type": "string",
              "unit": "string",
              "valueMaps": [
                {
                  "op": "string",
                  "text": "string",
                  "value": "string"
                }
              ]
            }
          ],
          "tags": [
            "string"
          ],
          "targets": [
            {
              "alias": "string",
              "aliasBy": "string",
              "alignOptions": [
                {
                  "expanded": true,
                  "label": "string",
                  "options": [
                    {
                      "label": "string",
                      "metricKinds": [
                        "string"
                      ],
                      "text": "string",
                      "value": "string",
                      "valueTypes": [
                        "string"
                      ]
                    }
                  ]
                }
              ],
              "alignmentPeriod": "string",
              "bucketAggs": [
                {
                  "field": "string",
                  "id": "string",
                  "settings": {
                    "interval": "string",
                    "min_doc_count": {},
                    "order": "string",
                    "orderBy": "string",
                    "size": "string"
                  },
                  "type": "string"
                }
              ],
              "crossSeriesReducer": "string",
              "datasource": "string",
              "dimensions": {
                "property1": "string",
                "property2": "string"
              },
              "dsType": "string",
              "expr": "string",
              "filters": [
                "string"
              ],
              "format": "string",
              "group": [
                {
                  "params": [
                    "string"
                  ],
                  "type": "string"
                }
              ],
              "groupBys": [
                "string"
              ],
              "hide": true,
              "instant": true,
              "interval": "string",
              "intervalFactor": 0,
              "legendFormat": "string",
              "measurement": "string",
              "metricColumn": "string",
              "metricKind": "string",
              "metricName": "string",
              "metricType": "string",
              "metrics": [
                {
                  "field": "string",
                  "id": "string",
                  "type": "string"
                }
              ],
              "namespace": "string",
              "perSeriesAligner": "string",
              "period": "string",
              "projectName": "string",
              "query": "string",
              "rawQuery": true,
              "rawSql": "string",
              "refId": "string",
              "region": "string",
              "select": [
                [
                  {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ]
              ],
              "statistics": [
                "string"
              ],
              "step": 0,
              "table": "string",
              "target": "string",
              "timeColumn": "string",
              "timeField": "string",
              "valueType": "string",
              "where": [
                {
                  "datatype": "string",
                  "name": "string",
                  "params": [
                    "string"
                  ],
                  "type": "string"
                }
              ]
            }
          ],
          "thresholds": "string",
          "timeFrom": "string",
          "timeShift": "string",
          "title": "string",
          "tooltip": {
            "msResolution": true,
            "shared": true,
            "sort": 0,
            "value_type": "string"
          },
          "tooltipDecimals": 0,
          "transform": "string",
          "transparent": true,
          "type": "string",
          "valueFontSize": "string",
          "valueMaps": [
            {
              "op": "string",
              "text": "string",
              "value": "string"
            }
          ],
          "valueName": "string",
          "x-axis": true,
          "xAxis": {
            "show": true
          },
          "xBucketNumber": 0,
          "xBucketSize": "string",
          "xaxis": {
            "decimals": 0,
            "format": "string",
            "label": "string",
            "logBase": 0,
            "max": {
              "Valid": true,
              "Value": 0
            },
            "min": {
              "Valid": true,
              "Value": 0
            },
            "show": true
          },
          "y-axis": true,
          "yAxis": {
            "decimals": 0,
            "format": "string",
            "logBase": 0,
            "max": "string",
            "min": "string",
            "show": true,
            "splitFactor": 0
          },
          "yBucketBound": "string",
          "yBucketNumber": 0,
          "yBucketSize": 0,
          "y_formats": [
            "string"
          ],
          "yaxes": [
            {
              "decimals": 0,
              "format": "string",
              "label": "string",
              "logBase": 0,
              "max": {
                "Valid": true,
                "Value": 0
              },
              "min": {
                "Valid": true,
                "Value": 0
              },
              "show": true
            }
          ]
        }
      ],
      "templateVars": [
        "string"
      ]
    }
  ]
}
```

<h3 id="handle-get-for-prometheus-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns prometheus configuration|[Prometheus](#schemaprometheus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle POST for Prometheus configuration

<a id="opIdidPostPrometheusConfig"></a>

> Code samples

```bash
curl https://example.com/api/telemetry/metrics/config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Cookie: token=${API_KEY}" \
  -d '"string"'
```

`POST /api/telemetry/metrics/config`

Used for persisting Prometheus configuration

> Body parameter

```json
"string"
```

<h3 id="handle-post-for-prometheus-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|false|none|

<h3 id="handle-post-for-prometheus-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle DELETE for Prometheus configuration

<a id="opIdidDeletePrometheusConfig"></a>

> Code samples

```bash
curl https://example.com/api/telemetry/metrics/config \
  -X DELETE \
  -H "Cookie: token=${API_KEY}"
```

`DELETE /api/telemetry/metrics/config`

Used for deleting Prometheus configuration

<h3 id="handle-delete-for-prometheus-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for Prometheus Ping

<a id="opIdidGetPrometheusPing"></a>

> Code samples

```bash
curl https://example.com/api/telemetry/metrics/ping \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/telemetry/metrics/ping`

Used to ping prometheus

<h3 id="handle-get-request-for-prometheus-ping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for Prometheus Query

<a id="opIdidGetPrometheusQuery"></a>

> Code samples

```bash
curl https://example.com/api/telemetry/metrics/query \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/telemetry/metrics/query`

Used to prometheus queries

<h3 id="handle-get-request-for-prometheus-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for Prometheus static board

<a id="opIdidGetPrometheusStaticBoard"></a>

> Code samples

```bash
curl https://example.com/api/telemetry/metrics/static-board \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/telemetry/metrics/static-board`

Used to fetch the static board

> Example responses

> 200 Response

```json
{
  "property1": {
    "org_id": 0,
    "panels": [
      {
        "alert": {
          "alertRuleTags": {
            "property1": "string",
            "property2": "string"
          },
          "conditions": [
            {
              "evaluator": {
                "params": [
                  0
                ],
                "type": "string"
              },
              "operator": {
                "type": "string"
              },
              "query": {
                "params": [
                  "string"
                ]
              },
              "reducer": {
                "params": [
                  "string"
                ],
                "type": "string"
              },
              "type": "string"
            }
          ],
          "executionErrorState": "string",
          "for": "string",
          "frequency": "string",
          "handler": 0,
          "message": "string",
          "name": "string",
          "noDataState": "string",
          "notifications": [
            {
              "disableResolveMessage": true,
              "frequency": "string",
              "id": 0,
              "isDefault": true,
              "name": "string",
              "sendReminder": true,
              "settings": {},
              "type": "string",
              "uid": "string"
            }
          ]
        },
        "aliasColors": {},
        "bars": true,
        "cards": {
          "cardPadding": 0,
          "cardRound": 0
        },
        "collapsed": true,
        "color": {
          "cardColor": "string",
          "colorScale": "string",
          "colorScheme": "string",
          "exponent": 0,
          "max": 0,
          "min": 0,
          "mode": "string"
        },
        "colorBackground": true,
        "colorValue": true,
        "colors": [
          "string"
        ],
        "columns": [
          {
            "text": "string",
            "value": "string"
          }
        ],
        "content": "string",
        "dashLength": 0,
        "dashboardTags": [
          "string"
        ],
        "dashes": true,
        "dataFormat": "string",
        "datasource": "string",
        "decimals": 0,
        "description": "string",
        "editable": true,
        "error": true,
        "fieldConfig": {
          "defaults": {
            "threshold": {
              "mode": "string",
              "steps": [
                {
                  "color": "string",
                  "value": "string"
                }
              ]
            },
            "unit": "string"
          }
        },
        "fill": 0,
        "folderId": 0,
        "format": "string",
        "gauge": {
          "maxValue": 0,
          "minValue": 0,
          "show": true,
          "thresholdLabels": true,
          "thresholdMarkers": true
        },
        "gridPos": {
          "h": 0,
          "w": 0,
          "x": 0,
          "y": 0
        },
        "headings": true,
        "height": {},
        "hideTimeOverride": true,
        "hideZeroBuckets": true,
        "highlightCards": true,
        "id": 0,
        "isNew": true,
        "leftYAxisLabel": "string",
        "legend": {
          "alignAsTable": true,
          "avg": true,
          "current": true,
          "hideEmpty": true,
          "hideZero": true,
          "max": true,
          "min": true,
          "rightSide": true,
          "show": true,
          "sideWidth": 0,
          "total": true,
          "values": true
        },
        "limit": 0,
        "lines": true,
        "linewidth": 0,
        "links": [
          {
            "asDropdown": true,
            "dashUri": "string",
            "dashboard": "string",
            "icon": "string",
            "includeVars": true,
            "keepTime": true,
            "params": "string",
            "tags": [
              "string"
            ],
            "targetBlank": true,
            "title": "string",
            "tooltip": "string",
            "type": "string",
            "url": "string"
          }
        ],
        "mappingType": 0,
        "mappingTypes": [
          {
            "name": "string",
            "value": 0
          }
        ],
        "maxDataPoints": {
          "Valid": true,
          "Value": 0
        },
        "minSpan": 0,
        "mode": "string",
        "nameFilter": "string",
        "nullPointMode": "string",
        "onlyAlertsOnDashboard": true,
        "options": {
          "colorMode": "string",
          "content": "string",
          "displayMode": "string",
          "graphMode": "string",
          "justifyMode": "string",
          "mode": "string",
          "orientation": "string",
          "reduceOptions": {
            "calcs": [
              "string"
            ],
            "fields": "string",
            "values": true
          },
          "textMode": "string"
        },
        "pageSize": 0,
        "panels": [
          {}
        ],
        "percentage": true,
        "pointradius": 0,
        "points": true,
        "postfix": "string",
        "postfixFontSize": "string",
        "prefix": "string",
        "prefixFontSize": "string",
        "query": "string",
        "rangeMaps": [
          {
            "from": "string",
            "text": "string",
            "to": "string"
          }
        ],
        "recent": true,
        "renderer": "string",
        "repeat": "string",
        "repeatPanelId": 0,
        "reverseYBuckets": true,
        "rightYAxisLabel": "string",
        "scopedVars": {
          "property1": {
            "selected": true,
            "text": "string",
            "value": "string"
          },
          "property2": {
            "selected": true,
            "text": "string",
            "value": "string"
          }
        },
        "scroll": true,
        "search": true,
        "seriesOverrides": [
          {
            "alias": "string",
            "bars": true,
            "color": "string",
            "dashes": true,
            "fill": 0,
            "fillBelowTo": "string",
            "legend": true,
            "lines": true,
            "linewidth": 0,
            "nullPointMode": "string",
            "stack": {
              "Flag": true,
              "Value": "string"
            },
            "transform": "string",
            "yaxis": 0,
            "zindex": 0
          }
        ],
        "show": "string",
        "showHeader": true,
        "sort": {
          "col": 0,
          "desc": true
        },
        "sortOrder": 0,
        "spaceLength": 0,
        "span": 0,
        "sparkline": {
          "fillColor": "string",
          "full": true,
          "lineColor": "string",
          "show": true,
          "ymax": 0,
          "ymin": 0
        },
        "stack": true,
        "starred": true,
        "stateFilter": [
          "string"
        ],
        "steppedLine": true,
        "styles": [
          {
            "alias": "string",
            "colorMode": "string",
            "colors": [
              "string"
            ],
            "dateFormat": "string",
            "decimals": 0,
            "link": true,
            "linkTargetBlank": true,
            "linkTooltip": "string",
            "linkUrl": "string",
            "mappingType": 0,
            "pattern": "string",
            "thresholds": [
              "string"
            ],
            "type": "string",
            "unit": "string",
            "valueMaps": [
              {
                "op": "string",
                "text": "string",
                "value": "string"
              }
            ]
          }
        ],
        "tags": [
          "string"
        ],
        "targets": [
          {
            "alias": "string",
            "aliasBy": "string",
            "alignOptions": [
              {
                "expanded": true,
                "label": "string",
                "options": [
                  {
                    "label": "string",
                    "metricKinds": [
                      "string"
                    ],
                    "text": "string",
                    "value": "string",
                    "valueTypes": [
                      "string"
                    ]
                  }
                ]
              }
            ],
            "alignmentPeriod": "string",
            "bucketAggs": [
              {
                "field": "string",
                "id": "string",
                "settings": {
                  "interval": "string",
                  "min_doc_count": {},
                  "order": "string",
                  "orderBy": "string",
                  "size": "string"
                },
                "type": "string"
              }
            ],
            "crossSeriesReducer": "string",
            "datasource": "string",
            "dimensions": {
              "property1": "string",
              "property2": "string"
            },
            "dsType": "string",
            "expr": "string",
            "filters": [
              "string"
            ],
            "format": "string",
            "group": [
              {
                "params": [
                  "string"
                ],
                "type": "string"
              }
            ],
            "groupBys": [
              "string"
            ],
            "hide": true,
            "instant": true,
            "interval": "string",
            "intervalFactor": 0,
            "legendFormat": "string",
            "measurement": "string",
            "metricColumn": "string",
            "metricKind": "string",
            "metricName": "string",
            "metricType": "string",
            "metrics": [
              {
                "field": "string",
                "id": "string",
                "type": "string"
              }
            ],
            "namespace": "string",
            "perSeriesAligner": "string",
            "period": "string",
            "projectName": "string",
            "query": "string",
            "rawQuery": true,
            "rawSql": "string",
            "refId": "string",
            "region": "string",
            "select": [
              [
                {
                  "params": [
                    "string"
                  ],
                  "type": "string"
                }
              ]
            ],
            "statistics": [
              "string"
            ],
            "step": 0,
            "table": "string",
            "target": "string",
            "timeColumn": "string",
            "timeField": "string",
            "valueType": "string",
            "where": [
              {
                "datatype": "string",
                "name": "string",
                "params": [
                  "string"
                ],
                "type": "string"
              }
            ]
          }
        ],
        "thresholds": "string",
        "timeFrom": "string",
        "timeShift": "string",
        "title": "string",
        "tooltip": {
          "msResolution": true,
          "shared": true,
          "sort": 0,
          "value_type": "string"
        },
        "tooltipDecimals": 0,
        "transform": "string",
        "transparent": true,
        "type": "string",
        "valueFontSize": "string",
        "valueMaps": [
          {
            "op": "string",
            "text": "string",
            "value": "string"
          }
        ],
        "valueName": "string",
        "x-axis": true,
        "xAxis": {
          "show": true
        },
        "xBucketNumber": 0,
        "xBucketSize": "string",
        "xaxis": {
          "decimals": 0,
          "format": "string",
          "label": "string",
          "logBase": 0,
          "max": {
            "Valid": true,
            "Value": 0
          },
          "min": {
            "Valid": true,
            "Value": 0
          },
          "show": true
        },
        "y-axis": true,
        "yAxis": {
          "decimals": 0,
          "format": "string",
          "logBase": 0,
          "max": "string",
          "min": "string",
          "show": true,
          "splitFactor": 0
        },
        "yBucketBound": "string",
        "yBucketNumber": 0,
        "yBucketSize": 0,
        "y_formats": [
          "string"
        ],
        "yaxes": [
          {
            "decimals": 0,
            "format": "string",
            "label": "string",
            "logBase": 0,
            "max": {
              "Valid": true,
              "Value": 0
            },
            "min": {
              "Valid": true,
              "Value": 0
            },
            "show": true
          }
        ]
      }
    ],
    "slug": "string",
    "template_vars": [
      {
        "datasource": {
          "id": 0,
          "name": "string"
        },
        "hide": 0,
        "name": "string",
        "query": "string",
        "value": {}
      }
    ],
    "title": "string",
    "uid": "string",
    "uri": "string"
  },
  "property2": {
    "org_id": 0,
    "panels": [
      {
        "alert": {
          "alertRuleTags": {
            "property1": "string",
            "property2": "string"
          },
          "conditions": [
            {
              "evaluator": {
                "params": [
                  0
                ],
                "type": "string"
              },
              "operator": {
                "type": "string"
              },
              "query": {
                "params": [
                  "string"
                ]
              },
              "reducer": {
                "params": [
                  "string"
                ],
                "type": "string"
              },
              "type": "string"
            }
          ],
          "executionErrorState": "string",
          "for": "string",
          "frequency": "string",
          "handler": 0,
          "message": "string",
          "name": "string",
          "noDataState": "string",
          "notifications": [
            {
              "disableResolveMessage": true,
              "frequency": "string",
              "id": 0,
              "isDefault": true,
              "name": "string",
              "sendReminder": true,
              "settings": {},
              "type": "string",
              "uid": "string"
            }
          ]
        },
        "aliasColors": {},
        "bars": true,
        "cards": {
          "cardPadding": 0,
          "cardRound": 0
        },
        "collapsed": true,
        "color": {
          "cardColor": "string",
          "colorScale": "string",
          "colorScheme": "string",
          "exponent": 0,
          "max": 0,
          "min": 0,
          "mode": "string"
        },
        "colorBackground": true,
        "colorValue": true,
        "colors": [
          "string"
        ],
        "columns": [
          {
            "text": "string",
            "value": "string"
          }
        ],
        "content": "string",
        "dashLength": 0,
        "dashboardTags": [
          "string"
        ],
        "dashes": true,
        "dataFormat": "string",
        "datasource": "string",
        "decimals": 0,
        "description": "string",
        "editable": true,
        "error": true,
        "fieldConfig": {
          "defaults": {
            "threshold": {
              "mode": "string",
              "steps": [
                {
                  "color": "string",
                  "value": "string"
                }
              ]
            },
            "unit": "string"
          }
        },
        "fill": 0,
        "folderId": 0,
        "format": "string",
        "gauge": {
          "maxValue": 0,
          "minValue": 0,
          "show": true,
          "thresholdLabels": true,
          "thresholdMarkers": true
        },
        "gridPos": {
          "h": 0,
          "w": 0,
          "x": 0,
          "y": 0
        },
        "headings": true,
        "height": {},
        "hideTimeOverride": true,
        "hideZeroBuckets": true,
        "highlightCards": true,
        "id": 0,
        "isNew": true,
        "leftYAxisLabel": "string",
        "legend": {
          "alignAsTable": true,
          "avg": true,
          "current": true,
          "hideEmpty": true,
          "hideZero": true,
          "max": true,
          "min": true,
          "rightSide": true,
          "show": true,
          "sideWidth": 0,
          "total": true,
          "values": true
        },
        "limit": 0,
        "lines": true,
        "linewidth": 0,
        "links": [
          {
            "asDropdown": true,
            "dashUri": "string",
            "dashboard": "string",
            "icon": "string",
            "includeVars": true,
            "keepTime": true,
            "params": "string",
            "tags": [
              "string"
            ],
            "targetBlank": true,
            "title": "string",
            "tooltip": "string",
            "type": "string",
            "url": "string"
          }
        ],
        "mappingType": 0,
        "mappingTypes": [
          {
            "name": "string",
            "value": 0
          }
        ],
        "maxDataPoints": {
          "Valid": true,
          "Value": 0
        },
        "minSpan": 0,
        "mode": "string",
        "nameFilter": "string",
        "nullPointMode": "string",
        "onlyAlertsOnDashboard": true,
        "options": {
          "colorMode": "string",
          "content": "string",
          "displayMode": "string",
          "graphMode": "string",
          "justifyMode": "string",
          "mode": "string",
          "orientation": "string",
          "reduceOptions": {
            "calcs": [
              "string"
            ],
            "fields": "string",
            "values": true
          },
          "textMode": "string"
        },
        "pageSize": 0,
        "panels": [
          {}
        ],
        "percentage": true,
        "pointradius": 0,
        "points": true,
        "postfix": "string",
        "postfixFontSize": "string",
        "prefix": "string",
        "prefixFontSize": "string",
        "query": "string",
        "rangeMaps": [
          {
            "from": "string",
            "text": "string",
            "to": "string"
          }
        ],
        "recent": true,
        "renderer": "string",
        "repeat": "string",
        "repeatPanelId": 0,
        "reverseYBuckets": true,
        "rightYAxisLabel": "string",
        "scopedVars": {
          "property1": {
            "selected": true,
            "text": "string",
            "value": "string"
          },
          "property2": {
            "selected": true,
            "text": "string",
            "value": "string"
          }
        },
        "scroll": true,
        "search": true,
        "seriesOverrides": [
          {
            "alias": "string",
            "bars": true,
            "color": "string",
            "dashes": true,
            "fill": 0,
            "fillBelowTo": "string",
            "legend": true,
            "lines": true,
            "linewidth": 0,
            "nullPointMode": "string",
            "stack": {
              "Flag": true,
              "Value": "string"
            },
            "transform": "string",
            "yaxis": 0,
            "zindex": 0
          }
        ],
        "show": "string",
        "showHeader": true,
        "sort": {
          "col": 0,
          "desc": true
        },
        "sortOrder": 0,
        "spaceLength": 0,
        "span": 0,
        "sparkline": {
          "fillColor": "string",
          "full": true,
          "lineColor": "string",
          "show": true,
          "ymax": 0,
          "ymin": 0
        },
        "stack": true,
        "starred": true,
        "stateFilter": [
          "string"
        ],
        "steppedLine": true,
        "styles": [
          {
            "alias": "string",
            "colorMode": "string",
            "colors": [
              "string"
            ],
            "dateFormat": "string",
            "decimals": 0,
            "link": true,
            "linkTargetBlank": true,
            "linkTooltip": "string",
            "linkUrl": "string",
            "mappingType": 0,
            "pattern": "string",
            "thresholds": [
              "string"
            ],
            "type": "string",
            "unit": "string",
            "valueMaps": [
              {
                "op": "string",
                "text": "string",
                "value": "string"
              }
            ]
          }
        ],
        "tags": [
          "string"
        ],
        "targets": [
          {
            "alias": "string",
            "aliasBy": "string",
            "alignOptions": [
              {
                "expanded": true,
                "label": "string",
                "options": [
                  {
                    "label": "string",
                    "metricKinds": [
                      "string"
                    ],
                    "text": "string",
                    "value": "string",
                    "valueTypes": [
                      "string"
                    ]
                  }
                ]
              }
            ],
            "alignmentPeriod": "string",
            "bucketAggs": [
              {
                "field": "string",
                "id": "string",
                "settings": {
                  "interval": "string",
                  "min_doc_count": {},
                  "order": "string",
                  "orderBy": "string",
                  "size": "string"
                },
                "type": "string"
              }
            ],
            "crossSeriesReducer": "string",
            "datasource": "string",
            "dimensions": {
              "property1": "string",
              "property2": "string"
            },
            "dsType": "string",
            "expr": "string",
            "filters": [
              "string"
            ],
            "format": "string",
            "group": [
              {
                "params": [
                  "string"
                ],
                "type": "string"
              }
            ],
            "groupBys": [
              "string"
            ],
            "hide": true,
            "instant": true,
            "interval": "string",
            "intervalFactor": 0,
            "legendFormat": "string",
            "measurement": "string",
            "metricColumn": "string",
            "metricKind": "string",
            "metricName": "string",
            "metricType": "string",
            "metrics": [
              {
                "field": "string",
                "id": "string",
                "type": "string"
              }
            ],
            "namespace": "string",
            "perSeriesAligner": "string",
            "period": "string",
            "projectName": "string",
            "query": "string",
            "rawQuery": true,
            "rawSql": "string",
            "refId": "string",
            "region": "string",
            "select": [
              [
                {
                  "params": [
                    "string"
                  ],
                  "type": "string"
                }
              ]
            ],
            "statistics": [
              "string"
            ],
            "step": 0,
            "table": "string",
            "target": "string",
            "timeColumn": "string",
            "timeField": "string",
            "valueType": "string",
            "where": [
              {
                "datatype": "string",
                "name": "string",
                "params": [
                  "string"
                ],
                "type": "string"
              }
            ]
          }
        ],
        "thresholds": "string",
        "timeFrom": "string",
        "timeShift": "string",
        "title": "string",
        "tooltip": {
          "msResolution": true,
          "shared": true,
          "sort": 0,
          "value_type": "string"
        },
        "tooltipDecimals": 0,
        "transform": "string",
        "transparent": true,
        "type": "string",
        "valueFontSize": "string",
        "valueMaps": [
          {
            "op": "string",
            "text": "string",
            "value": "string"
          }
        ],
        "valueName": "string",
        "x-axis": true,
        "xAxis": {
          "show": true
        },
        "xBucketNumber": 0,
        "xBucketSize": "string",
        "xaxis": {
          "decimals": 0,
          "format": "string",
          "label": "string",
          "logBase": 0,
          "max": {
            "Valid": true,
            "Value": 0
          },
          "min": {
            "Valid": true,
            "Value": 0
          },
          "show": true
        },
        "y-axis": true,
        "yAxis": {
          "decimals": 0,
          "format": "string",
          "logBase": 0,
          "max": "string",
          "min": "string",
          "show": true,
          "splitFactor": 0
        },
        "yBucketBound": "string",
        "yBucketNumber": 0,
        "yBucketSize": 0,
        "y_formats": [
          "string"
        ],
        "yaxes": [
          {
            "decimals": 0,
            "format": "string",
            "label": "string",
            "logBase": 0,
            "max": {
              "Valid": true,
              "Value": 0
            },
            "min": {
              "Valid": true,
              "Value": 0
            },
            "show": true
          }
        ]
      }
    ],
    "slug": "string",
    "template_vars": [
      {
        "datasource": {
          "id": 0,
          "name": "string"
        },
        "hide": 0,
        "name": "string",
        "query": "string",
        "value": {}
      }
    ],
    "title": "string",
    "uid": "string",
    "uri": "string"
  }
}
```

<h3 id="handle-get-request-for-prometheus-static-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns Prometheus static board|Inline|

<h3 id="handle-get-request-for-prometheus-static-board-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[GrafanaBoard](#schemagrafanaboard)|false|none|GrafanaBoard represents a Grafana board|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

<h1 id="meshery-api-grafanaapi">GrafanaAPI</h1>

## Handle GET request for Grafana boards

<a id="opIdidGetGrafanaBoards"></a>

> Code samples

```bash
curl https://example.com/api/telemetry/metrics/grafana/boards \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/telemetry/metrics/grafana/boards`

Used for fetching Grafana boards and panels

<h3 id="handle-get-request-for-grafana-boards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dashboardSearch|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "org_id": 0,
    "panels": [
      {
        "alert": {
          "alertRuleTags": {
            "property1": "string",
            "property2": "string"
          },
          "conditions": [
            {
              "evaluator": {
                "params": [
                  0
                ],
                "type": "string"
              },
              "operator": {
                "type": "string"
              },
              "query": {
                "params": [
                  "string"
                ]
              },
              "reducer": {
                "params": [
                  "string"
                ],
                "type": "string"
              },
              "type": "string"
            }
          ],
          "executionErrorState": "string",
          "for": "string",
          "frequency": "string",
          "handler": 0,
          "message": "string",
          "name": "string",
          "noDataState": "string",
          "notifications": [
            {
              "disableResolveMessage": true,
              "frequency": "string",
              "id": 0,
              "isDefault": true,
              "name": "string",
              "sendReminder": true,
              "settings": {},
              "type": "string",
              "uid": "string"
            }
          ]
        },
        "aliasColors": {},
        "bars": true,
        "cards": {
          "cardPadding": 0,
          "cardRound": 0
        },
        "collapsed": true,
        "color": {
          "cardColor": "string",
          "colorScale": "string",
          "colorScheme": "string",
          "exponent": 0,
          "max": 0,
          "min": 0,
          "mode": "string"
        },
        "colorBackground": true,
        "colorValue": true,
        "colors": [
          "string"
        ],
        "columns": [
          {
            "text": "string",
            "value": "string"
          }
        ],
        "content": "string",
        "dashLength": 0,
        "dashboardTags": [
          "string"
        ],
        "dashes": true,
        "dataFormat": "string",
        "datasource": "string",
        "decimals": 0,
        "description": "string",
        "editable": true,
        "error": true,
        "fieldConfig": {
          "defaults": {
            "threshold": {
              "mode": "string",
              "steps": [
                {
                  "color": "string",
                  "value": "string"
                }
              ]
            },
            "unit": "string"
          }
        },
        "fill": 0,
        "folderId": 0,
        "format": "string",
        "gauge": {
          "maxValue": 0,
          "minValue": 0,
          "show": true,
          "thresholdLabels": true,
          "thresholdMarkers": true
        },
        "gridPos": {
          "h": 0,
          "w": 0,
          "x": 0,
          "y": 0
        },
        "headings": true,
        "height": {},
        "hideTimeOverride": true,
        "hideZeroBuckets": true,
        "highlightCards": true,
        "id": 0,
        "isNew": true,
        "leftYAxisLabel": "string",
        "legend": {
          "alignAsTable": true,
          "avg": true,
          "current": true,
          "hideEmpty": true,
          "hideZero": true,
          "max": true,
          "min": true,
          "rightSide": true,
          "show": true,
          "sideWidth": 0,
          "total": true,
          "values": true
        },
        "limit": 0,
        "lines": true,
        "linewidth": 0,
        "links": [
          {
            "asDropdown": true,
            "dashUri": "string",
            "dashboard": "string",
            "icon": "string",
            "includeVars": true,
            "keepTime": true,
            "params": "string",
            "tags": [
              "string"
            ],
            "targetBlank": true,
            "title": "string",
            "tooltip": "string",
            "type": "string",
            "url": "string"
          }
        ],
        "mappingType": 0,
        "mappingTypes": [
          {
            "name": "string",
            "value": 0
          }
        ],
        "maxDataPoints": {
          "Valid": true,
          "Value": 0
        },
        "minSpan": 0,
        "mode": "string",
        "nameFilter": "string",
        "nullPointMode": "string",
        "onlyAlertsOnDashboard": true,
        "options": {
          "colorMode": "string",
          "content": "string",
          "displayMode": "string",
          "graphMode": "string",
          "justifyMode": "string",
          "mode": "string",
          "orientation": "string",
          "reduceOptions": {
            "calcs": [
              "string"
            ],
            "fields": "string",
            "values": true
          },
          "textMode": "string"
        },
        "pageSize": 0,
        "panels": [
          {}
        ],
        "percentage": true,
        "pointradius": 0,
        "points": true,
        "postfix": "string",
        "postfixFontSize": "string",
        "prefix": "string",
        "prefixFontSize": "string",
        "query": "string",
        "rangeMaps": [
          {
            "from": "string",
            "text": "string",
            "to": "string"
          }
        ],
        "recent": true,
        "renderer": "string",
        "repeat": "string",
        "repeatPanelId": 0,
        "reverseYBuckets": true,
        "rightYAxisLabel": "string",
        "scopedVars": {
          "property1": {
            "selected": true,
            "text": "string",
            "value": "string"
          },
          "property2": {
            "selected": true,
            "text": "string",
            "value": "string"
          }
        },
        "scroll": true,
        "search": true,
        "seriesOverrides": [
          {
            "alias": "string",
            "bars": true,
            "color": "string",
            "dashes": true,
            "fill": 0,
            "fillBelowTo": "string",
            "legend": true,
            "lines": true,
            "linewidth": 0,
            "nullPointMode": "string",
            "stack": {
              "Flag": true,
              "Value": "string"
            },
            "transform": "string",
            "yaxis": 0,
            "zindex": 0
          }
        ],
        "show": "string",
        "showHeader": true,
        "sort": {
          "col": 0,
          "desc": true
        },
        "sortOrder": 0,
        "spaceLength": 0,
        "span": 0,
        "sparkline": {
          "fillColor": "string",
          "full": true,
          "lineColor": "string",
          "show": true,
          "ymax": 0,
          "ymin": 0
        },
        "stack": true,
        "starred": true,
        "stateFilter": [
          "string"
        ],
        "steppedLine": true,
        "styles": [
          {
            "alias": "string",
            "colorMode": "string",
            "colors": [
              "string"
            ],
            "dateFormat": "string",
            "decimals": 0,
            "link": true,
            "linkTargetBlank": true,
            "linkTooltip": "string",
            "linkUrl": "string",
            "mappingType": 0,
            "pattern": "string",
            "thresholds": [
              "string"
            ],
            "type": "string",
            "unit": "string",
            "valueMaps": [
              {
                "op": "string",
                "text": "string",
                "value": "string"
              }
            ]
          }
        ],
        "tags": [
          "string"
        ],
        "targets": [
          {
            "alias": "string",
            "aliasBy": "string",
            "alignOptions": [
              {
                "expanded": true,
                "label": "string",
                "options": [
                  {
                    "label": "string",
                    "metricKinds": [
                      "string"
                    ],
                    "text": "string",
                    "value": "string",
                    "valueTypes": [
                      "string"
                    ]
                  }
                ]
              }
            ],
            "alignmentPeriod": "string",
            "bucketAggs": [
              {
                "field": "string",
                "id": "string",
                "settings": {
                  "interval": "string",
                  "min_doc_count": {},
                  "order": "string",
                  "orderBy": "string",
                  "size": "string"
                },
                "type": "string"
              }
            ],
            "crossSeriesReducer": "string",
            "datasource": "string",
            "dimensions": {
              "property1": "string",
              "property2": "string"
            },
            "dsType": "string",
            "expr": "string",
            "filters": [
              "string"
            ],
            "format": "string",
            "group": [
              {
                "params": [
                  "string"
                ],
                "type": "string"
              }
            ],
            "groupBys": [
              "string"
            ],
            "hide": true,
            "instant": true,
            "interval": "string",
            "intervalFactor": 0,
            "legendFormat": "string",
            "measurement": "string",
            "metricColumn": "string",
            "metricKind": "string",
            "metricName": "string",
            "metricType": "string",
            "metrics": [
              {
                "field": "string",
                "id": "string",
                "type": "string"
              }
            ],
            "namespace": "string",
            "perSeriesAligner": "string",
            "period": "string",
            "projectName": "string",
            "query": "string",
            "rawQuery": true,
            "rawSql": "string",
            "refId": "string",
            "region": "string",
            "select": [
              [
                {
                  "params": [
                    "string"
                  ],
                  "type": "string"
                }
              ]
            ],
            "statistics": [
              "string"
            ],
            "step": 0,
            "table": "string",
            "target": "string",
            "timeColumn": "string",
            "timeField": "string",
            "valueType": "string",
            "where": [
              {
                "datatype": "string",
                "name": "string",
                "params": [
                  "string"
                ],
                "type": "string"
              }
            ]
          }
        ],
        "thresholds": "string",
        "timeFrom": "string",
        "timeShift": "string",
        "title": "string",
        "tooltip": {
          "msResolution": true,
          "shared": true,
          "sort": 0,
          "value_type": "string"
        },
        "tooltipDecimals": 0,
        "transform": "string",
        "transparent": true,
        "type": "string",
        "valueFontSize": "string",
        "valueMaps": [
          {
            "op": "string",
            "text": "string",
            "value": "string"
          }
        ],
        "valueName": "string",
        "x-axis": true,
        "xAxis": {
          "show": true
        },
        "xBucketNumber": 0,
        "xBucketSize": "string",
        "xaxis": {
          "decimals": 0,
          "format": "string",
          "label": "string",
          "logBase": 0,
          "max": {
            "Valid": true,
            "Value": 0
          },
          "min": {
            "Valid": true,
            "Value": 0
          },
          "show": true
        },
        "y-axis": true,
        "yAxis": {
          "decimals": 0,
          "format": "string",
          "logBase": 0,
          "max": "string",
          "min": "string",
          "show": true,
          "splitFactor": 0
        },
        "yBucketBound": "string",
        "yBucketNumber": 0,
        "yBucketSize": 0,
        "y_formats": [
          "string"
        ],
        "yaxes": [
          {
            "decimals": 0,
            "format": "string",
            "label": "string",
            "logBase": 0,
            "max": {
              "Valid": true,
              "Value": 0
            },
            "min": {
              "Valid": true,
              "Value": 0
            },
            "show": true
          }
        ]
      }
    ],
    "slug": "string",
    "template_vars": [
      {
        "datasource": {
          "id": 0,
          "name": "string"
        },
        "hide": 0,
        "name": "string",
        "query": "string",
        "value": {}
      }
    ],
    "title": "string",
    "uid": "string",
    "uri": "string"
  }
]
```

<h3 id="handle-get-request-for-grafana-boards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns Grafana boards and panels|Inline|

<h3 id="handle-get-request-for-grafana-boards-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GrafanaBoard](#schemagrafanaboard)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle POST request for Grafana boards

<a id="opIdidPostGrafanaBoards"></a>

> Code samples

```bash
curl https://example.com/api/telemetry/metrics/grafana/boards \
  -X POST \
  -H "Cookie: token=${API_KEY}"
```

`POST /api/telemetry/metrics/grafana/boards`

Used for persist Grafana boards and panel selections

<h3 id="handle-post-request-for-grafana-boards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for Grafana configuration

<a id="opIdidGetGrafanaConfig"></a>

> Code samples

```bash
curl https://example.com/api/telemetry/metrics/grafana/config \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/telemetry/metrics/grafana/config`

Used for fetching Grafana configuration

> Example responses

> 200 Response

```json
{
  "grafanaAPIKey": "string",
  "grafanaURL": "string",
  "selectedBoardsConfigs": [
    {
      "board": {
        "org_id": 0,
        "panels": [
          {
            "alert": {
              "alertRuleTags": {
                "property1": "string",
                "property2": "string"
              },
              "conditions": [
                {
                  "evaluator": {
                    "params": [
                      0
                    ],
                    "type": "string"
                  },
                  "operator": {
                    "type": "string"
                  },
                  "query": {
                    "params": [
                      "string"
                    ]
                  },
                  "reducer": {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  },
                  "type": "string"
                }
              ],
              "executionErrorState": "string",
              "for": "string",
              "frequency": "string",
              "handler": 0,
              "message": "string",
              "name": "string",
              "noDataState": "string",
              "notifications": [
                {
                  "disableResolveMessage": true,
                  "frequency": "string",
                  "id": 0,
                  "isDefault": true,
                  "name": "string",
                  "sendReminder": true,
                  "settings": {},
                  "type": "string",
                  "uid": "string"
                }
              ]
            },
            "aliasColors": {},
            "bars": true,
            "cards": {
              "cardPadding": 0,
              "cardRound": 0
            },
            "collapsed": true,
            "color": {
              "cardColor": "string",
              "colorScale": "string",
              "colorScheme": "string",
              "exponent": 0,
              "max": 0,
              "min": 0,
              "mode": "string"
            },
            "colorBackground": true,
            "colorValue": true,
            "colors": [
              "string"
            ],
            "columns": [
              {
                "text": "string",
                "value": "string"
              }
            ],
            "content": "string",
            "dashLength": 0,
            "dashboardTags": [
              "string"
            ],
            "dashes": true,
            "dataFormat": "string",
            "datasource": "string",
            "decimals": 0,
            "description": "string",
            "editable": true,
            "error": true,
            "fieldConfig": {
              "defaults": {
                "threshold": {
                  "mode": "string",
                  "steps": [
                    {
                      "color": "string",
                      "value": "string"
                    }
                  ]
                },
                "unit": "string"
              }
            },
            "fill": 0,
            "folderId": 0,
            "format": "string",
            "gauge": {
              "maxValue": 0,
              "minValue": 0,
              "show": true,
              "thresholdLabels": true,
              "thresholdMarkers": true
            },
            "gridPos": {
              "h": 0,
              "w": 0,
              "x": 0,
              "y": 0
            },
            "headings": true,
            "height": {},
            "hideTimeOverride": true,
            "hideZeroBuckets": true,
            "highlightCards": true,
            "id": 0,
            "isNew": true,
            "leftYAxisLabel": "string",
            "legend": {
              "alignAsTable": true,
              "avg": true,
              "current": true,
              "hideEmpty": true,
              "hideZero": true,
              "max": true,
              "min": true,
              "rightSide": true,
              "show": true,
              "sideWidth": 0,
              "total": true,
              "values": true
            },
            "limit": 0,
            "lines": true,
            "linewidth": 0,
            "links": [
              {
                "asDropdown": true,
                "dashUri": "string",
                "dashboard": "string",
                "icon": "string",
                "includeVars": true,
                "keepTime": true,
                "params": "string",
                "tags": [
                  "string"
                ],
                "targetBlank": true,
                "title": "string",
                "tooltip": "string",
                "type": "string",
                "url": "string"
              }
            ],
            "mappingType": 0,
            "mappingTypes": [
              {
                "name": "string",
                "value": 0
              }
            ],
            "maxDataPoints": {
              "Valid": true,
              "Value": 0
            },
            "minSpan": 0,
            "mode": "string",
            "nameFilter": "string",
            "nullPointMode": "string",
            "onlyAlertsOnDashboard": true,
            "options": {
              "colorMode": "string",
              "content": "string",
              "displayMode": "string",
              "graphMode": "string",
              "justifyMode": "string",
              "mode": "string",
              "orientation": "string",
              "reduceOptions": {
                "calcs": [
                  "string"
                ],
                "fields": "string",
                "values": true
              },
              "textMode": "string"
            },
            "pageSize": 0,
            "panels": [
              {}
            ],
            "percentage": true,
            "pointradius": 0,
            "points": true,
            "postfix": "string",
            "postfixFontSize": "string",
            "prefix": "string",
            "prefixFontSize": "string",
            "query": "string",
            "rangeMaps": [
              {
                "from": "string",
                "text": "string",
                "to": "string"
              }
            ],
            "recent": true,
            "renderer": "string",
            "repeat": "string",
            "repeatPanelId": 0,
            "reverseYBuckets": true,
            "rightYAxisLabel": "string",
            "scopedVars": {
              "property1": {
                "selected": true,
                "text": "string",
                "value": "string"
              },
              "property2": {
                "selected": true,
                "text": "string",
                "value": "string"
              }
            },
            "scroll": true,
            "search": true,
            "seriesOverrides": [
              {
                "alias": "string",
                "bars": true,
                "color": "string",
                "dashes": true,
                "fill": 0,
                "fillBelowTo": "string",
                "legend": true,
                "lines": true,
                "linewidth": 0,
                "nullPointMode": "string",
                "stack": {
                  "Flag": true,
                  "Value": "string"
                },
                "transform": "string",
                "yaxis": 0,
                "zindex": 0
              }
            ],
            "show": "string",
            "showHeader": true,
            "sort": {
              "col": 0,
              "desc": true
            },
            "sortOrder": 0,
            "spaceLength": 0,
            "span": 0,
            "sparkline": {
              "fillColor": "string",
              "full": true,
              "lineColor": "string",
              "show": true,
              "ymax": 0,
              "ymin": 0
            },
            "stack": true,
            "starred": true,
            "stateFilter": [
              "string"
            ],
            "steppedLine": true,
            "styles": [
              {
                "alias": "string",
                "colorMode": "string",
                "colors": [
                  "string"
                ],
                "dateFormat": "string",
                "decimals": 0,
                "link": true,
                "linkTargetBlank": true,
                "linkTooltip": "string",
                "linkUrl": "string",
                "mappingType": 0,
                "pattern": "string",
                "thresholds": [
                  "string"
                ],
                "type": "string",
                "unit": "string",
                "valueMaps": [
                  {
                    "op": "string",
                    "text": "string",
                    "value": "string"
                  }
                ]
              }
            ],
            "tags": [
              "string"
            ],
            "targets": [
              {
                "alias": "string",
                "aliasBy": "string",
                "alignOptions": [
                  {
                    "expanded": true,
                    "label": "string",
                    "options": [
                      {
                        "label": "string",
                        "metricKinds": [
                          "string"
                        ],
                        "text": "string",
                        "value": "string",
                        "valueTypes": [
                          "string"
                        ]
                      }
                    ]
                  }
                ],
                "alignmentPeriod": "string",
                "bucketAggs": [
                  {
                    "field": "string",
                    "id": "string",
                    "settings": {
                      "interval": "string",
                      "min_doc_count": {},
                      "order": "string",
                      "orderBy": "string",
                      "size": "string"
                    },
                    "type": "string"
                  }
                ],
                "crossSeriesReducer": "string",
                "datasource": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "dsType": "string",
                "expr": "string",
                "filters": [
                  "string"
                ],
                "format": "string",
                "group": [
                  {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ],
                "groupBys": [
                  "string"
                ],
                "hide": true,
                "instant": true,
                "interval": "string",
                "intervalFactor": 0,
                "legendFormat": "string",
                "measurement": "string",
                "metricColumn": "string",
                "metricKind": "string",
                "metricName": "string",
                "metricType": "string",
                "metrics": [
                  {
                    "field": "string",
                    "id": "string",
                    "type": "string"
                  }
                ],
                "namespace": "string",
                "perSeriesAligner": "string",
                "period": "string",
                "projectName": "string",
                "query": "string",
                "rawQuery": true,
                "rawSql": "string",
                "refId": "string",
                "region": "string",
                "select": [
                  [
                    {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ]
                ],
                "statistics": [
                  "string"
                ],
                "step": 0,
                "table": "string",
                "target": "string",
                "timeColumn": "string",
                "timeField": "string",
                "valueType": "string",
                "where": [
                  {
                    "datatype": "string",
                    "name": "string",
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ]
              }
            ],
            "thresholds": "string",
            "timeFrom": "string",
            "timeShift": "string",
            "title": "string",
            "tooltip": {
              "msResolution": true,
              "shared": true,
              "sort": 0,
              "value_type": "string"
            },
            "tooltipDecimals": 0,
            "transform": "string",
            "transparent": true,
            "type": "string",
            "valueFontSize": "string",
            "valueMaps": [
              {
                "op": "string",
                "text": "string",
                "value": "string"
              }
            ],
            "valueName": "string",
            "x-axis": true,
            "xAxis": {
              "show": true
            },
            "xBucketNumber": 0,
            "xBucketSize": "string",
            "xaxis": {
              "decimals": 0,
              "format": "string",
              "label": "string",
              "logBase": 0,
              "max": {
                "Valid": true,
                "Value": 0
              },
              "min": {
                "Valid": true,
                "Value": 0
              },
              "show": true
            },
            "y-axis": true,
            "yAxis": {
              "decimals": 0,
              "format": "string",
              "logBase": 0,
              "max": "string",
              "min": "string",
              "show": true,
              "splitFactor": 0
            },
            "yBucketBound": "string",
            "yBucketNumber": 0,
            "yBucketSize": 0,
            "y_formats": [
              "string"
            ],
            "yaxes": [
              {
                "decimals": 0,
                "format": "string",
                "label": "string",
                "logBase": 0,
                "max": {
                  "Valid": true,
                  "Value": 0
                },
                "min": {
                  "Valid": true,
                  "Value": 0
                },
                "show": true
              }
            ]
          }
        ],
        "slug": "string",
        "template_vars": [
          {
            "datasource": {
              "id": 0,
              "name": "string"
            },
            "hide": 0,
            "name": "string",
            "query": "string",
            "value": {}
          }
        ],
        "title": "string",
        "uid": "string",
        "uri": "string"
      },
      "panels": [
        {
          "alert": {
            "alertRuleTags": {
              "property1": "string",
              "property2": "string"
            },
            "conditions": [
              {
                "evaluator": {
                  "params": [
                    0
                  ],
                  "type": "string"
                },
                "operator": {
                  "type": "string"
                },
                "query": {
                  "params": [
                    "string"
                  ]
                },
                "reducer": {
                  "params": [
                    "string"
                  ],
                  "type": "string"
                },
                "type": "string"
              }
            ],
            "executionErrorState": "string",
            "for": "string",
            "frequency": "string",
            "handler": 0,
            "message": "string",
            "name": "string",
            "noDataState": "string",
            "notifications": [
              {
                "disableResolveMessage": true,
                "frequency": "string",
                "id": 0,
                "isDefault": true,
                "name": "string",
                "sendReminder": true,
                "settings": {},
                "type": "string",
                "uid": "string"
              }
            ]
          },
          "aliasColors": {},
          "bars": true,
          "cards": {
            "cardPadding": 0,
            "cardRound": 0
          },
          "collapsed": true,
          "color": {
            "cardColor": "string",
            "colorScale": "string",
            "colorScheme": "string",
            "exponent": 0,
            "max": 0,
            "min": 0,
            "mode": "string"
          },
          "colorBackground": true,
          "colorValue": true,
          "colors": [
            "string"
          ],
          "columns": [
            {
              "text": "string",
              "value": "string"
            }
          ],
          "content": "string",
          "dashLength": 0,
          "dashboardTags": [
            "string"
          ],
          "dashes": true,
          "dataFormat": "string",
          "datasource": "string",
          "decimals": 0,
          "description": "string",
          "editable": true,
          "error": true,
          "fieldConfig": {
            "defaults": {
              "threshold": {
                "mode": "string",
                "steps": [
                  {
                    "color": "string",
                    "value": "string"
                  }
                ]
              },
              "unit": "string"
            }
          },
          "fill": 0,
          "folderId": 0,
          "format": "string",
          "gauge": {
            "maxValue": 0,
            "minValue": 0,
            "show": true,
            "thresholdLabels": true,
            "thresholdMarkers": true
          },
          "gridPos": {
            "h": 0,
            "w": 0,
            "x": 0,
            "y": 0
          },
          "headings": true,
          "height": {},
          "hideTimeOverride": true,
          "hideZeroBuckets": true,
          "highlightCards": true,
          "id": 0,
          "isNew": true,
          "leftYAxisLabel": "string",
          "legend": {
            "alignAsTable": true,
            "avg": true,
            "current": true,
            "hideEmpty": true,
            "hideZero": true,
            "max": true,
            "min": true,
            "rightSide": true,
            "show": true,
            "sideWidth": 0,
            "total": true,
            "values": true
          },
          "limit": 0,
          "lines": true,
          "linewidth": 0,
          "links": [
            {
              "asDropdown": true,
              "dashUri": "string",
              "dashboard": "string",
              "icon": "string",
              "includeVars": true,
              "keepTime": true,
              "params": "string",
              "tags": [
                "string"
              ],
              "targetBlank": true,
              "title": "string",
              "tooltip": "string",
              "type": "string",
              "url": "string"
            }
          ],
          "mappingType": 0,
          "mappingTypes": [
            {
              "name": "string",
              "value": 0
            }
          ],
          "maxDataPoints": {
            "Valid": true,
            "Value": 0
          },
          "minSpan": 0,
          "mode": "string",
          "nameFilter": "string",
          "nullPointMode": "string",
          "onlyAlertsOnDashboard": true,
          "options": {
            "colorMode": "string",
            "content": "string",
            "displayMode": "string",
            "graphMode": "string",
            "justifyMode": "string",
            "mode": "string",
            "orientation": "string",
            "reduceOptions": {
              "calcs": [
                "string"
              ],
              "fields": "string",
              "values": true
            },
            "textMode": "string"
          },
          "pageSize": 0,
          "panels": [
            {}
          ],
          "percentage": true,
          "pointradius": 0,
          "points": true,
          "postfix": "string",
          "postfixFontSize": "string",
          "prefix": "string",
          "prefixFontSize": "string",
          "query": "string",
          "rangeMaps": [
            {
              "from": "string",
              "text": "string",
              "to": "string"
            }
          ],
          "recent": true,
          "renderer": "string",
          "repeat": "string",
          "repeatPanelId": 0,
          "reverseYBuckets": true,
          "rightYAxisLabel": "string",
          "scopedVars": {
            "property1": {
              "selected": true,
              "text": "string",
              "value": "string"
            },
            "property2": {
              "selected": true,
              "text": "string",
              "value": "string"
            }
          },
          "scroll": true,
          "search": true,
          "seriesOverrides": [
            {
              "alias": "string",
              "bars": true,
              "color": "string",
              "dashes": true,
              "fill": 0,
              "fillBelowTo": "string",
              "legend": true,
              "lines": true,
              "linewidth": 0,
              "nullPointMode": "string",
              "stack": {
                "Flag": true,
                "Value": "string"
              },
              "transform": "string",
              "yaxis": 0,
              "zindex": 0
            }
          ],
          "show": "string",
          "showHeader": true,
          "sort": {
            "col": 0,
            "desc": true
          },
          "sortOrder": 0,
          "spaceLength": 0,
          "span": 0,
          "sparkline": {
            "fillColor": "string",
            "full": true,
            "lineColor": "string",
            "show": true,
            "ymax": 0,
            "ymin": 0
          },
          "stack": true,
          "starred": true,
          "stateFilter": [
            "string"
          ],
          "steppedLine": true,
          "styles": [
            {
              "alias": "string",
              "colorMode": "string",
              "colors": [
                "string"
              ],
              "dateFormat": "string",
              "decimals": 0,
              "link": true,
              "linkTargetBlank": true,
              "linkTooltip": "string",
              "linkUrl": "string",
              "mappingType": 0,
              "pattern": "string",
              "thresholds": [
                "string"
              ],
              "type": "string",
              "unit": "string",
              "valueMaps": [
                {
                  "op": "string",
                  "text": "string",
                  "value": "string"
                }
              ]
            }
          ],
          "tags": [
            "string"
          ],
          "targets": [
            {
              "alias": "string",
              "aliasBy": "string",
              "alignOptions": [
                {
                  "expanded": true,
                  "label": "string",
                  "options": [
                    {
                      "label": "string",
                      "metricKinds": [
                        "string"
                      ],
                      "text": "string",
                      "value": "string",
                      "valueTypes": [
                        "string"
                      ]
                    }
                  ]
                }
              ],
              "alignmentPeriod": "string",
              "bucketAggs": [
                {
                  "field": "string",
                  "id": "string",
                  "settings": {
                    "interval": "string",
                    "min_doc_count": {},
                    "order": "string",
                    "orderBy": "string",
                    "size": "string"
                  },
                  "type": "string"
                }
              ],
              "crossSeriesReducer": "string",
              "datasource": "string",
              "dimensions": {
                "property1": "string",
                "property2": "string"
              },
              "dsType": "string",
              "expr": "string",
              "filters": [
                "string"
              ],
              "format": "string",
              "group": [
                {
                  "params": [
                    "string"
                  ],
                  "type": "string"
                }
              ],
              "groupBys": [
                "string"
              ],
              "hide": true,
              "instant": true,
              "interval": "string",
              "intervalFactor": 0,
              "legendFormat": "string",
              "measurement": "string",
              "metricColumn": "string",
              "metricKind": "string",
              "metricName": "string",
              "metricType": "string",
              "metrics": [
                {
                  "field": "string",
                  "id": "string",
                  "type": "string"
                }
              ],
              "namespace": "string",
              "perSeriesAligner": "string",
              "period": "string",
              "projectName": "string",
              "query": "string",
              "rawQuery": true,
              "rawSql": "string",
              "refId": "string",
              "region": "string",
              "select": [
                [
                  {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ]
              ],
              "statistics": [
                "string"
              ],
              "step": 0,
              "table": "string",
              "target": "string",
              "timeColumn": "string",
              "timeField": "string",
              "valueType": "string",
              "where": [
                {
                  "datatype": "string",
                  "name": "string",
                  "params": [
                    "string"
                  ],
                  "type": "string"
                }
              ]
            }
          ],
          "thresholds": "string",
          "timeFrom": "string",
          "timeShift": "string",
          "title": "string",
          "tooltip": {
            "msResolution": true,
            "shared": true,
            "sort": 0,
            "value_type": "string"
          },
          "tooltipDecimals": 0,
          "transform": "string",
          "transparent": true,
          "type": "string",
          "valueFontSize": "string",
          "valueMaps": [
            {
              "op": "string",
              "text": "string",
              "value": "string"
            }
          ],
          "valueName": "string",
          "x-axis": true,
          "xAxis": {
            "show": true
          },
          "xBucketNumber": 0,
          "xBucketSize": "string",
          "xaxis": {
            "decimals": 0,
            "format": "string",
            "label": "string",
            "logBase": 0,
            "max": {
              "Valid": true,
              "Value": 0
            },
            "min": {
              "Valid": true,
              "Value": 0
            },
            "show": true
          },
          "y-axis": true,
          "yAxis": {
            "decimals": 0,
            "format": "string",
            "logBase": 0,
            "max": "string",
            "min": "string",
            "show": true,
            "splitFactor": 0
          },
          "yBucketBound": "string",
          "yBucketNumber": 0,
          "yBucketSize": 0,
          "y_formats": [
            "string"
          ],
          "yaxes": [
            {
              "decimals": 0,
              "format": "string",
              "label": "string",
              "logBase": 0,
              "max": {
                "Valid": true,
                "Value": 0
              },
              "min": {
                "Valid": true,
                "Value": 0
              },
              "show": true
            }
          ]
        }
      ],
      "templateVars": [
        "string"
      ]
    }
  ]
}
```

<h3 id="handle-get-request-for-grafana-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns Grafana configs|[Grafana](#schemagrafana)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle POST request for Grafana configuration

<a id="opIdidPostGrafanaConfig"></a>

> Code samples

```bash
curl https://example.com/api/telemetry/metrics/grafana/config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Cookie: token=${API_KEY}" \
  -d '{
    "grafanaAPIKey": "string",
    "grafanaURL": "string"
  }'
```

`POST /api/telemetry/metrics/grafana/config`

Used for persisting Grafana configuration

> Body parameter

```json
{
  "grafanaAPIKey": "string",
  "grafanaURL": "string"
}
```

<h3 id="handle-post-request-for-grafana-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GrafanaConfigParams](#schemagrafanaconfigparams)|true|none|
|» grafanaAPIKey|body|string|false|none|
|» grafanaURL|body|string|false|none|

<h3 id="handle-post-request-for-grafana-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle DELETE request for Grafana configuration

<a id="opIdidDeleteGrafanaConfig"></a>

> Code samples

```bash
curl https://example.com/api/telemetry/metrics/grafana/config \
  -X DELETE \
  -H "Cookie: token=${API_KEY}"
```

`DELETE /api/telemetry/metrics/grafana/config`

Used for Delete Grafana configuration

<h3 id="handle-delete-request-for-grafana-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for Grafana ping

<a id="opIdidGetGrafanaPing"></a>

> Code samples

```bash
curl https://example.com/api/telemetry/metrics/grafana/ping \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/telemetry/metrics/grafana/ping`

Used to initiate a Grafana ping

<h3 id="handle-get-request-for-grafana-ping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for Grafana queries

<a id="opIdidGetGrafanaQuery"></a>

> Code samples

```bash
curl https://example.com/api/telemetry/metrics/grafana/query \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/telemetry/metrics/grafana/query`

Used for handling Grafana queries

<h3 id="handle-get-request-for-grafana-queries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for Grafana

<a id="opIdidGetGrafana"></a>

> Code samples

```bash
curl https://example.com/api/telemetry/metrics/grafana/scan \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/telemetry/metrics/grafana/scan`

Fetches and returns Grafana

> Example responses

> 200 Response

```json
{
  "property1": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "apiVersion": "string",
      "clusterName": "string",
      "creationTimestamp": {},
      "deletionGracePeriodSeconds": 0,
      "deletionTimestamp": {},
      "finalizers": [
        "string"
      ],
      "generateName": "string",
      "generation": 0,
      "kind": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "managedFields": [
        {
          "apiVersion": "string",
          "fieldsType": "string",
          "fieldsV1": {},
          "manager": "string",
          "operation": "string",
          "time": {}
        }
      ],
      "name": "string",
      "namespace": "string",
      "ownerReferences": [
        {
          "apiVersion": "string",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "string",
          "name": "string",
          "uid": "string"
        }
      ],
      "resourceVersion": "string",
      "selfLink": "string",
      "spec": {
        "clusterIP": "string",
        "externalIPs": [
          "string"
        ],
        "externalName": "string",
        "externalTrafficPolicy": "string",
        "healthCheckNodePort": 0,
        "ipFamily": "string",
        "loadBalancerIP": "string",
        "loadBalancerSourceRanges": [
          "string"
        ],
        "ports": [
          {
            "appProtocol": "string",
            "name": "string",
            "nodePort": 0,
            "port": 0,
            "protocol": "string",
            "targetPort": {
              "IntVal": 0,
              "StrVal": "string",
              "Type": 0
            }
          }
        ],
        "publishNotReadyAddresses": true,
        "selector": {
          "property1": "string",
          "property2": "string"
        },
        "sessionAffinity": "string",
        "sessionAffinityConfig": {
          "clientIP": {
            "timeoutSeconds": 0
          }
        },
        "topologyKeys": [
          "string"
        ],
        "type": "string"
      },
      "status": {
        "loadBalancer": {
          "ingress": [
            {
              "hostname": "string",
              "ip": "string"
            }
          ]
        }
      },
      "uid": "string"
    }
  ],
  "property2": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "apiVersion": "string",
      "clusterName": "string",
      "creationTimestamp": {},
      "deletionGracePeriodSeconds": 0,
      "deletionTimestamp": {},
      "finalizers": [
        "string"
      ],
      "generateName": "string",
      "generation": 0,
      "kind": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "managedFields": [
        {
          "apiVersion": "string",
          "fieldsType": "string",
          "fieldsV1": {},
          "manager": "string",
          "operation": "string",
          "time": {}
        }
      ],
      "name": "string",
      "namespace": "string",
      "ownerReferences": [
        {
          "apiVersion": "string",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "string",
          "name": "string",
          "uid": "string"
        }
      ],
      "resourceVersion": "string",
      "selfLink": "string",
      "spec": {
        "clusterIP": "string",
        "externalIPs": [
          "string"
        ],
        "externalName": "string",
        "externalTrafficPolicy": "string",
        "healthCheckNodePort": 0,
        "ipFamily": "string",
        "loadBalancerIP": "string",
        "loadBalancerSourceRanges": [
          "string"
        ],
        "ports": [
          {
            "appProtocol": "string",
            "name": "string",
            "nodePort": 0,
            "port": 0,
            "protocol": "string",
            "targetPort": {
              "IntVal": 0,
              "StrVal": "string",
              "Type": 0
            }
          }
        ],
        "publishNotReadyAddresses": true,
        "selector": {
          "property1": "string",
          "property2": "string"
        },
        "sessionAffinity": "string",
        "sessionAffinityConfig": {
          "clientIP": {
            "timeoutSeconds": 0
          }
        },
        "topologyKeys": [
          "string"
        ],
        "type": "string"
      },
      "status": {
        "loadBalancer": {
          "ingress": [
            {
              "hostname": "string",
              "ip": "string"
            }
          ]
        }
      },
      "uid": "string"
    }
  ]
}
```

<h3 id="handle-get-request-for-grafana-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a map for v1 services|Inline|

<h3 id="handle-get-request-for-grafana-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[[Service](#schemaservice)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

<h1 id="meshery-api-userapi">UserAPI</h1>

## Handlers GET request for User login

<a id="opIdidGetUserLogin"></a>

> Code samples

```bash
curl https://example.com/api/user/login \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/user/login`

Redirects user for auth or issues session

<h3 id="handlers-get-request-for-user-login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handlers GET request for User logout

<a id="opIdidGetUserLogout"></a>

> Code samples

```bash
curl https://example.com/api/user/logout \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/user/logout`

Redirects user for auth or issues session

<h3 id="handlers-get-request-for-user-logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET for User Load Test Preferences

<a id="opIdidGetUserTestPrefs"></a>

> Code samples

```bash
curl https://example.com/api/user/prefs \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/user/prefs`

Returns User Load Test Preferences

> Example responses

> 200 Response

```json
{
  "anonymousPerfResults": true,
  "anonymousUsageStats": true,
  "grafana": {
    "grafanaAPIKey": "string",
    "grafanaURL": "string",
    "selectedBoardsConfigs": [
      {
        "board": {
          "org_id": 0,
          "panels": [
            {
              "alert": {
                "alertRuleTags": {
                  "property1": "string",
                  "property2": "string"
                },
                "conditions": [
                  {
                    "evaluator": {
                      "params": [
                        0
                      ],
                      "type": "string"
                    },
                    "operator": {
                      "type": "string"
                    },
                    "query": {
                      "params": [
                        "string"
                      ]
                    },
                    "reducer": {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    },
                    "type": "string"
                  }
                ],
                "executionErrorState": "string",
                "for": "string",
                "frequency": "string",
                "handler": 0,
                "message": "string",
                "name": "string",
                "noDataState": "string",
                "notifications": [
                  {
                    "disableResolveMessage": true,
                    "frequency": "string",
                    "id": 0,
                    "isDefault": true,
                    "name": "string",
                    "sendReminder": true,
                    "settings": {},
                    "type": "string",
                    "uid": "string"
                  }
                ]
              },
              "aliasColors": {},
              "bars": true,
              "cards": {
                "cardPadding": 0,
                "cardRound": 0
              },
              "collapsed": true,
              "color": {
                "cardColor": "string",
                "colorScale": "string",
                "colorScheme": "string",
                "exponent": 0,
                "max": 0,
                "min": 0,
                "mode": "string"
              },
              "colorBackground": true,
              "colorValue": true,
              "colors": [
                "string"
              ],
              "columns": [
                {
                  "text": "string",
                  "value": "string"
                }
              ],
              "content": "string",
              "dashLength": 0,
              "dashboardTags": [
                "string"
              ],
              "dashes": true,
              "dataFormat": "string",
              "datasource": "string",
              "decimals": 0,
              "description": "string",
              "editable": true,
              "error": true,
              "fieldConfig": {
                "defaults": {
                  "threshold": {
                    "mode": "string",
                    "steps": [
                      {
                        "color": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "unit": "string"
                }
              },
              "fill": 0,
              "folderId": 0,
              "format": "string",
              "gauge": {
                "maxValue": 0,
                "minValue": 0,
                "show": true,
                "thresholdLabels": true,
                "thresholdMarkers": true
              },
              "gridPos": {
                "h": 0,
                "w": 0,
                "x": 0,
                "y": 0
              },
              "headings": true,
              "height": {},
              "hideTimeOverride": true,
              "hideZeroBuckets": true,
              "highlightCards": true,
              "id": 0,
              "isNew": true,
              "leftYAxisLabel": "string",
              "legend": {
                "alignAsTable": true,
                "avg": true,
                "current": true,
                "hideEmpty": true,
                "hideZero": true,
                "max": true,
                "min": true,
                "rightSide": true,
                "show": true,
                "sideWidth": 0,
                "total": true,
                "values": true
              },
              "limit": 0,
              "lines": true,
              "linewidth": 0,
              "links": [
                {
                  "asDropdown": true,
                  "dashUri": "string",
                  "dashboard": "string",
                  "icon": "string",
                  "includeVars": true,
                  "keepTime": true,
                  "params": "string",
                  "tags": [
                    "string"
                  ],
                  "targetBlank": true,
                  "title": "string",
                  "tooltip": "string",
                  "type": "string",
                  "url": "string"
                }
              ],
              "mappingType": 0,
              "mappingTypes": [
                {
                  "name": "string",
                  "value": 0
                }
              ],
              "maxDataPoints": {
                "Valid": true,
                "Value": 0
              },
              "minSpan": 0,
              "mode": "string",
              "nameFilter": "string",
              "nullPointMode": "string",
              "onlyAlertsOnDashboard": true,
              "options": {
                "colorMode": "string",
                "content": "string",
                "displayMode": "string",
                "graphMode": "string",
                "justifyMode": "string",
                "mode": "string",
                "orientation": "string",
                "reduceOptions": {
                  "calcs": [
                    "string"
                  ],
                  "fields": "string",
                  "values": true
                },
                "textMode": "string"
              },
              "pageSize": 0,
              "panels": [
                {}
              ],
              "percentage": true,
              "pointradius": 0,
              "points": true,
              "postfix": "string",
              "postfixFontSize": "string",
              "prefix": "string",
              "prefixFontSize": "string",
              "query": "string",
              "rangeMaps": [
                {
                  "from": "string",
                  "text": "string",
                  "to": "string"
                }
              ],
              "recent": true,
              "renderer": "string",
              "repeat": "string",
              "repeatPanelId": 0,
              "reverseYBuckets": true,
              "rightYAxisLabel": "string",
              "scopedVars": {
                "property1": {
                  "selected": true,
                  "text": "string",
                  "value": "string"
                },
                "property2": {
                  "selected": true,
                  "text": "string",
                  "value": "string"
                }
              },
              "scroll": true,
              "search": true,
              "seriesOverrides": [
                {
                  "alias": "string",
                  "bars": true,
                  "color": "string",
                  "dashes": true,
                  "fill": 0,
                  "fillBelowTo": "string",
                  "legend": true,
                  "lines": true,
                  "linewidth": 0,
                  "nullPointMode": "string",
                  "stack": {
                    "Flag": true,
                    "Value": "string"
                  },
                  "transform": "string",
                  "yaxis": 0,
                  "zindex": 0
                }
              ],
              "show": "string",
              "showHeader": true,
              "sort": {
                "col": 0,
                "desc": true
              },
              "sortOrder": 0,
              "spaceLength": 0,
              "span": 0,
              "sparkline": {
                "fillColor": "string",
                "full": true,
                "lineColor": "string",
                "show": true,
                "ymax": 0,
                "ymin": 0
              },
              "stack": true,
              "starred": true,
              "stateFilter": [
                "string"
              ],
              "steppedLine": true,
              "styles": [
                {
                  "alias": "string",
                  "colorMode": "string",
                  "colors": [
                    "string"
                  ],
                  "dateFormat": "string",
                  "decimals": 0,
                  "link": true,
                  "linkTargetBlank": true,
                  "linkTooltip": "string",
                  "linkUrl": "string",
                  "mappingType": 0,
                  "pattern": "string",
                  "thresholds": [
                    "string"
                  ],
                  "type": "string",
                  "unit": "string",
                  "valueMaps": [
                    {
                      "op": "string",
                      "text": "string",
                      "value": "string"
                    }
                  ]
                }
              ],
              "tags": [
                "string"
              ],
              "targets": [
                {
                  "alias": "string",
                  "aliasBy": "string",
                  "alignOptions": [
                    {
                      "expanded": true,
                      "label": "string",
                      "options": [
                        {
                          "label": "string",
                          "metricKinds": [
                            "string"
                          ],
                          "text": "string",
                          "value": "string",
                          "valueTypes": [
                            "string"
                          ]
                        }
                      ]
                    }
                  ],
                  "alignmentPeriod": "string",
                  "bucketAggs": [
                    {
                      "field": "string",
                      "id": "string",
                      "settings": {
                        "interval": "string",
                        "min_doc_count": {},
                        "order": "string",
                        "orderBy": "string",
                        "size": "string"
                      },
                      "type": "string"
                    }
                  ],
                  "crossSeriesReducer": "string",
                  "datasource": "string",
                  "dimensions": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "dsType": "string",
                  "expr": "string",
                  "filters": [
                    "string"
                  ],
                  "format": "string",
                  "group": [
                    {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ],
                  "groupBys": [
                    "string"
                  ],
                  "hide": true,
                  "instant": true,
                  "interval": "string",
                  "intervalFactor": 0,
                  "legendFormat": "string",
                  "measurement": "string",
                  "metricColumn": "string",
                  "metricKind": "string",
                  "metricName": "string",
                  "metricType": "string",
                  "metrics": [
                    {
                      "field": "string",
                      "id": "string",
                      "type": "string"
                    }
                  ],
                  "namespace": "string",
                  "perSeriesAligner": "string",
                  "period": "string",
                  "projectName": "string",
                  "query": "string",
                  "rawQuery": true,
                  "rawSql": "string",
                  "refId": "string",
                  "region": "string",
                  "select": [
                    [
                      {
                        "params": [
                          "string"
                        ],
                        "type": "string"
                      }
                    ]
                  ],
                  "statistics": [
                    "string"
                  ],
                  "step": 0,
                  "table": "string",
                  "target": "string",
                  "timeColumn": "string",
                  "timeField": "string",
                  "valueType": "string",
                  "where": [
                    {
                      "datatype": "string",
                      "name": "string",
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ]
                }
              ],
              "thresholds": "string",
              "timeFrom": "string",
              "timeShift": "string",
              "title": "string",
              "tooltip": {
                "msResolution": true,
                "shared": true,
                "sort": 0,
                "value_type": "string"
              },
              "tooltipDecimals": 0,
              "transform": "string",
              "transparent": true,
              "type": "string",
              "valueFontSize": "string",
              "valueMaps": [
                {
                  "op": "string",
                  "text": "string",
                  "value": "string"
                }
              ],
              "valueName": "string",
              "x-axis": true,
              "xAxis": {
                "show": true
              },
              "xBucketNumber": 0,
              "xBucketSize": "string",
              "xaxis": {
                "decimals": 0,
                "format": "string",
                "label": "string",
                "logBase": 0,
                "max": {
                  "Valid": true,
                  "Value": 0
                },
                "min": {
                  "Valid": true,
                  "Value": 0
                },
                "show": true
              },
              "y-axis": true,
              "yAxis": {
                "decimals": 0,
                "format": "string",
                "logBase": 0,
                "max": "string",
                "min": "string",
                "show": true,
                "splitFactor": 0
              },
              "yBucketBound": "string",
              "yBucketNumber": 0,
              "yBucketSize": 0,
              "y_formats": [
                "string"
              ],
              "yaxes": [
                {
                  "decimals": 0,
                  "format": "string",
                  "label": "string",
                  "logBase": 0,
                  "max": {
                    "Valid": true,
                    "Value": 0
                  },
                  "min": {
                    "Valid": true,
                    "Value": 0
                  },
                  "show": true
                }
              ]
            }
          ],
          "slug": "string",
          "template_vars": [
            {
              "datasource": {
                "id": 0,
                "name": "string"
              },
              "hide": 0,
              "name": "string",
              "query": "string",
              "value": {}
            }
          ],
          "title": "string",
          "uid": "string",
          "uri": "string"
        },
        "panels": [
          {
            "alert": {
              "alertRuleTags": {
                "property1": "string",
                "property2": "string"
              },
              "conditions": [
                {
                  "evaluator": {
                    "params": [
                      0
                    ],
                    "type": "string"
                  },
                  "operator": {
                    "type": "string"
                  },
                  "query": {
                    "params": [
                      "string"
                    ]
                  },
                  "reducer": {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  },
                  "type": "string"
                }
              ],
              "executionErrorState": "string",
              "for": "string",
              "frequency": "string",
              "handler": 0,
              "message": "string",
              "name": "string",
              "noDataState": "string",
              "notifications": [
                {
                  "disableResolveMessage": true,
                  "frequency": "string",
                  "id": 0,
                  "isDefault": true,
                  "name": "string",
                  "sendReminder": true,
                  "settings": {},
                  "type": "string",
                  "uid": "string"
                }
              ]
            },
            "aliasColors": {},
            "bars": true,
            "cards": {
              "cardPadding": 0,
              "cardRound": 0
            },
            "collapsed": true,
            "color": {
              "cardColor": "string",
              "colorScale": "string",
              "colorScheme": "string",
              "exponent": 0,
              "max": 0,
              "min": 0,
              "mode": "string"
            },
            "colorBackground": true,
            "colorValue": true,
            "colors": [
              "string"
            ],
            "columns": [
              {
                "text": "string",
                "value": "string"
              }
            ],
            "content": "string",
            "dashLength": 0,
            "dashboardTags": [
              "string"
            ],
            "dashes": true,
            "dataFormat": "string",
            "datasource": "string",
            "decimals": 0,
            "description": "string",
            "editable": true,
            "error": true,
            "fieldConfig": {
              "defaults": {
                "threshold": {
                  "mode": "string",
                  "steps": [
                    {
                      "color": "string",
                      "value": "string"
                    }
                  ]
                },
                "unit": "string"
              }
            },
            "fill": 0,
            "folderId": 0,
            "format": "string",
            "gauge": {
              "maxValue": 0,
              "minValue": 0,
              "show": true,
              "thresholdLabels": true,
              "thresholdMarkers": true
            },
            "gridPos": {
              "h": 0,
              "w": 0,
              "x": 0,
              "y": 0
            },
            "headings": true,
            "height": {},
            "hideTimeOverride": true,
            "hideZeroBuckets": true,
            "highlightCards": true,
            "id": 0,
            "isNew": true,
            "leftYAxisLabel": "string",
            "legend": {
              "alignAsTable": true,
              "avg": true,
              "current": true,
              "hideEmpty": true,
              "hideZero": true,
              "max": true,
              "min": true,
              "rightSide": true,
              "show": true,
              "sideWidth": 0,
              "total": true,
              "values": true
            },
            "limit": 0,
            "lines": true,
            "linewidth": 0,
            "links": [
              {
                "asDropdown": true,
                "dashUri": "string",
                "dashboard": "string",
                "icon": "string",
                "includeVars": true,
                "keepTime": true,
                "params": "string",
                "tags": [
                  "string"
                ],
                "targetBlank": true,
                "title": "string",
                "tooltip": "string",
                "type": "string",
                "url": "string"
              }
            ],
            "mappingType": 0,
            "mappingTypes": [
              {
                "name": "string",
                "value": 0
              }
            ],
            "maxDataPoints": {
              "Valid": true,
              "Value": 0
            },
            "minSpan": 0,
            "mode": "string",
            "nameFilter": "string",
            "nullPointMode": "string",
            "onlyAlertsOnDashboard": true,
            "options": {
              "colorMode": "string",
              "content": "string",
              "displayMode": "string",
              "graphMode": "string",
              "justifyMode": "string",
              "mode": "string",
              "orientation": "string",
              "reduceOptions": {
                "calcs": [
                  "string"
                ],
                "fields": "string",
                "values": true
              },
              "textMode": "string"
            },
            "pageSize": 0,
            "panels": [
              {}
            ],
            "percentage": true,
            "pointradius": 0,
            "points": true,
            "postfix": "string",
            "postfixFontSize": "string",
            "prefix": "string",
            "prefixFontSize": "string",
            "query": "string",
            "rangeMaps": [
              {
                "from": "string",
                "text": "string",
                "to": "string"
              }
            ],
            "recent": true,
            "renderer": "string",
            "repeat": "string",
            "repeatPanelId": 0,
            "reverseYBuckets": true,
            "rightYAxisLabel": "string",
            "scopedVars": {
              "property1": {
                "selected": true,
                "text": "string",
                "value": "string"
              },
              "property2": {
                "selected": true,
                "text": "string",
                "value": "string"
              }
            },
            "scroll": true,
            "search": true,
            "seriesOverrides": [
              {
                "alias": "string",
                "bars": true,
                "color": "string",
                "dashes": true,
                "fill": 0,
                "fillBelowTo": "string",
                "legend": true,
                "lines": true,
                "linewidth": 0,
                "nullPointMode": "string",
                "stack": {
                  "Flag": true,
                  "Value": "string"
                },
                "transform": "string",
                "yaxis": 0,
                "zindex": 0
              }
            ],
            "show": "string",
            "showHeader": true,
            "sort": {
              "col": 0,
              "desc": true
            },
            "sortOrder": 0,
            "spaceLength": 0,
            "span": 0,
            "sparkline": {
              "fillColor": "string",
              "full": true,
              "lineColor": "string",
              "show": true,
              "ymax": 0,
              "ymin": 0
            },
            "stack": true,
            "starred": true,
            "stateFilter": [
              "string"
            ],
            "steppedLine": true,
            "styles": [
              {
                "alias": "string",
                "colorMode": "string",
                "colors": [
                  "string"
                ],
                "dateFormat": "string",
                "decimals": 0,
                "link": true,
                "linkTargetBlank": true,
                "linkTooltip": "string",
                "linkUrl": "string",
                "mappingType": 0,
                "pattern": "string",
                "thresholds": [
                  "string"
                ],
                "type": "string",
                "unit": "string",
                "valueMaps": [
                  {
                    "op": "string",
                    "text": "string",
                    "value": "string"
                  }
                ]
              }
            ],
            "tags": [
              "string"
            ],
            "targets": [
              {
                "alias": "string",
                "aliasBy": "string",
                "alignOptions": [
                  {
                    "expanded": true,
                    "label": "string",
                    "options": [
                      {
                        "label": "string",
                        "metricKinds": [
                          "string"
                        ],
                        "text": "string",
                        "value": "string",
                        "valueTypes": [
                          "string"
                        ]
                      }
                    ]
                  }
                ],
                "alignmentPeriod": "string",
                "bucketAggs": [
                  {
                    "field": "string",
                    "id": "string",
                    "settings": {
                      "interval": "string",
                      "min_doc_count": {},
                      "order": "string",
                      "orderBy": "string",
                      "size": "string"
                    },
                    "type": "string"
                  }
                ],
                "crossSeriesReducer": "string",
                "datasource": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "dsType": "string",
                "expr": "string",
                "filters": [
                  "string"
                ],
                "format": "string",
                "group": [
                  {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ],
                "groupBys": [
                  "string"
                ],
                "hide": true,
                "instant": true,
                "interval": "string",
                "intervalFactor": 0,
                "legendFormat": "string",
                "measurement": "string",
                "metricColumn": "string",
                "metricKind": "string",
                "metricName": "string",
                "metricType": "string",
                "metrics": [
                  {
                    "field": "string",
                    "id": "string",
                    "type": "string"
                  }
                ],
                "namespace": "string",
                "perSeriesAligner": "string",
                "period": "string",
                "projectName": "string",
                "query": "string",
                "rawQuery": true,
                "rawSql": "string",
                "refId": "string",
                "region": "string",
                "select": [
                  [
                    {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ]
                ],
                "statistics": [
                  "string"
                ],
                "step": 0,
                "table": "string",
                "target": "string",
                "timeColumn": "string",
                "timeField": "string",
                "valueType": "string",
                "where": [
                  {
                    "datatype": "string",
                    "name": "string",
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ]
              }
            ],
            "thresholds": "string",
            "timeFrom": "string",
            "timeShift": "string",
            "title": "string",
            "tooltip": {
              "msResolution": true,
              "shared": true,
              "sort": 0,
              "value_type": "string"
            },
            "tooltipDecimals": 0,
            "transform": "string",
            "transparent": true,
            "type": "string",
            "valueFontSize": "string",
            "valueMaps": [
              {
                "op": "string",
                "text": "string",
                "value": "string"
              }
            ],
            "valueName": "string",
            "x-axis": true,
            "xAxis": {
              "show": true
            },
            "xBucketNumber": 0,
            "xBucketSize": "string",
            "xaxis": {
              "decimals": 0,
              "format": "string",
              "label": "string",
              "logBase": 0,
              "max": {
                "Valid": true,
                "Value": 0
              },
              "min": {
                "Valid": true,
                "Value": 0
              },
              "show": true
            },
            "y-axis": true,
            "yAxis": {
              "decimals": 0,
              "format": "string",
              "logBase": 0,
              "max": "string",
              "min": "string",
              "show": true,
              "splitFactor": 0
            },
            "yBucketBound": "string",
            "yBucketNumber": 0,
            "yBucketSize": 0,
            "y_formats": [
              "string"
            ],
            "yaxes": [
              {
                "decimals": 0,
                "format": "string",
                "label": "string",
                "logBase": 0,
                "max": {
                  "Valid": true,
                  "Value": 0
                },
                "min": {
                  "Valid": true,
                  "Value": 0
                },
                "show": true
              }
            ]
          }
        ],
        "templateVars": [
          "string"
        ]
      }
    ]
  },
  "k8sConfig": {
    "clusterConfigured": true,
    "config": [
      0
    ],
    "configuredServer": "string",
    "contextName": "string",
    "inClusterConfig": true,
    "k8sfile": "string",
    "nodes": [
      {
        "allocatable_cpu": "string",
        "allocatable_memory": "string",
        "architecture": "string",
        "capacity_cpu": "string",
        "capacity_memory": "string",
        "container_runtime_version": "string",
        "hostname": "string",
        "internal_ip": "string",
        "kubelet_version": "string",
        "kubeproxy_version": "string",
        "operating_system": "string",
        "os_image": "string"
      }
    ],
    "server_version": "string"
  },
  "loadTestPrefs": {
    "c": 0,
    "gen": "string",
    "qps": 0,
    "t": "string"
  },
  "meshAdapters": [
    {
      "adapter_location": "string",
      "git_commit_sha": "string",
      "name": "string",
      "ops": [
        {
          "category": 0,
          "key": "string",
          "value": "string"
        }
      ],
      "version": "string"
    }
  ],
  "prometheus": {
    "prometheusURL": "string",
    "selectedPrometheusBoardsConfigs": [
      {
        "board": {
          "org_id": 0,
          "panels": [
            {
              "alert": {
                "alertRuleTags": {
                  "property1": "string",
                  "property2": "string"
                },
                "conditions": [
                  {
                    "evaluator": {
                      "params": [
                        0
                      ],
                      "type": "string"
                    },
                    "operator": {
                      "type": "string"
                    },
                    "query": {
                      "params": [
                        "string"
                      ]
                    },
                    "reducer": {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    },
                    "type": "string"
                  }
                ],
                "executionErrorState": "string",
                "for": "string",
                "frequency": "string",
                "handler": 0,
                "message": "string",
                "name": "string",
                "noDataState": "string",
                "notifications": [
                  {
                    "disableResolveMessage": true,
                    "frequency": "string",
                    "id": 0,
                    "isDefault": true,
                    "name": "string",
                    "sendReminder": true,
                    "settings": {},
                    "type": "string",
                    "uid": "string"
                  }
                ]
              },
              "aliasColors": {},
              "bars": true,
              "cards": {
                "cardPadding": 0,
                "cardRound": 0
              },
              "collapsed": true,
              "color": {
                "cardColor": "string",
                "colorScale": "string",
                "colorScheme": "string",
                "exponent": 0,
                "max": 0,
                "min": 0,
                "mode": "string"
              },
              "colorBackground": true,
              "colorValue": true,
              "colors": [
                "string"
              ],
              "columns": [
                {
                  "text": "string",
                  "value": "string"
                }
              ],
              "content": "string",
              "dashLength": 0,
              "dashboardTags": [
                "string"
              ],
              "dashes": true,
              "dataFormat": "string",
              "datasource": "string",
              "decimals": 0,
              "description": "string",
              "editable": true,
              "error": true,
              "fieldConfig": {
                "defaults": {
                  "threshold": {
                    "mode": "string",
                    "steps": [
                      {
                        "color": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "unit": "string"
                }
              },
              "fill": 0,
              "folderId": 0,
              "format": "string",
              "gauge": {
                "maxValue": 0,
                "minValue": 0,
                "show": true,
                "thresholdLabels": true,
                "thresholdMarkers": true
              },
              "gridPos": {
                "h": 0,
                "w": 0,
                "x": 0,
                "y": 0
              },
              "headings": true,
              "height": {},
              "hideTimeOverride": true,
              "hideZeroBuckets": true,
              "highlightCards": true,
              "id": 0,
              "isNew": true,
              "leftYAxisLabel": "string",
              "legend": {
                "alignAsTable": true,
                "avg": true,
                "current": true,
                "hideEmpty": true,
                "hideZero": true,
                "max": true,
                "min": true,
                "rightSide": true,
                "show": true,
                "sideWidth": 0,
                "total": true,
                "values": true
              },
              "limit": 0,
              "lines": true,
              "linewidth": 0,
              "links": [
                {
                  "asDropdown": true,
                  "dashUri": "string",
                  "dashboard": "string",
                  "icon": "string",
                  "includeVars": true,
                  "keepTime": true,
                  "params": "string",
                  "tags": [
                    "string"
                  ],
                  "targetBlank": true,
                  "title": "string",
                  "tooltip": "string",
                  "type": "string",
                  "url": "string"
                }
              ],
              "mappingType": 0,
              "mappingTypes": [
                {
                  "name": "string",
                  "value": 0
                }
              ],
              "maxDataPoints": {
                "Valid": true,
                "Value": 0
              },
              "minSpan": 0,
              "mode": "string",
              "nameFilter": "string",
              "nullPointMode": "string",
              "onlyAlertsOnDashboard": true,
              "options": {
                "colorMode": "string",
                "content": "string",
                "displayMode": "string",
                "graphMode": "string",
                "justifyMode": "string",
                "mode": "string",
                "orientation": "string",
                "reduceOptions": {
                  "calcs": [
                    "string"
                  ],
                  "fields": "string",
                  "values": true
                },
                "textMode": "string"
              },
              "pageSize": 0,
              "panels": [
                {}
              ],
              "percentage": true,
              "pointradius": 0,
              "points": true,
              "postfix": "string",
              "postfixFontSize": "string",
              "prefix": "string",
              "prefixFontSize": "string",
              "query": "string",
              "rangeMaps": [
                {
                  "from": "string",
                  "text": "string",
                  "to": "string"
                }
              ],
              "recent": true,
              "renderer": "string",
              "repeat": "string",
              "repeatPanelId": 0,
              "reverseYBuckets": true,
              "rightYAxisLabel": "string",
              "scopedVars": {
                "property1": {
                  "selected": true,
                  "text": "string",
                  "value": "string"
                },
                "property2": {
                  "selected": true,
                  "text": "string",
                  "value": "string"
                }
              },
              "scroll": true,
              "search": true,
              "seriesOverrides": [
                {
                  "alias": "string",
                  "bars": true,
                  "color": "string",
                  "dashes": true,
                  "fill": 0,
                  "fillBelowTo": "string",
                  "legend": true,
                  "lines": true,
                  "linewidth": 0,
                  "nullPointMode": "string",
                  "stack": {
                    "Flag": true,
                    "Value": "string"
                  },
                  "transform": "string",
                  "yaxis": 0,
                  "zindex": 0
                }
              ],
              "show": "string",
              "showHeader": true,
              "sort": {
                "col": 0,
                "desc": true
              },
              "sortOrder": 0,
              "spaceLength": 0,
              "span": 0,
              "sparkline": {
                "fillColor": "string",
                "full": true,
                "lineColor": "string",
                "show": true,
                "ymax": 0,
                "ymin": 0
              },
              "stack": true,
              "starred": true,
              "stateFilter": [
                "string"
              ],
              "steppedLine": true,
              "styles": [
                {
                  "alias": "string",
                  "colorMode": "string",
                  "colors": [
                    "string"
                  ],
                  "dateFormat": "string",
                  "decimals": 0,
                  "link": true,
                  "linkTargetBlank": true,
                  "linkTooltip": "string",
                  "linkUrl": "string",
                  "mappingType": 0,
                  "pattern": "string",
                  "thresholds": [
                    "string"
                  ],
                  "type": "string",
                  "unit": "string",
                  "valueMaps": [
                    {
                      "op": "string",
                      "text": "string",
                      "value": "string"
                    }
                  ]
                }
              ],
              "tags": [
                "string"
              ],
              "targets": [
                {
                  "alias": "string",
                  "aliasBy": "string",
                  "alignOptions": [
                    {
                      "expanded": true,
                      "label": "string",
                      "options": [
                        {
                          "label": "string",
                          "metricKinds": [
                            "string"
                          ],
                          "text": "string",
                          "value": "string",
                          "valueTypes": [
                            "string"
                          ]
                        }
                      ]
                    }
                  ],
                  "alignmentPeriod": "string",
                  "bucketAggs": [
                    {
                      "field": "string",
                      "id": "string",
                      "settings": {
                        "interval": "string",
                        "min_doc_count": {},
                        "order": "string",
                        "orderBy": "string",
                        "size": "string"
                      },
                      "type": "string"
                    }
                  ],
                  "crossSeriesReducer": "string",
                  "datasource": "string",
                  "dimensions": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "dsType": "string",
                  "expr": "string",
                  "filters": [
                    "string"
                  ],
                  "format": "string",
                  "group": [
                    {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ],
                  "groupBys": [
                    "string"
                  ],
                  "hide": true,
                  "instant": true,
                  "interval": "string",
                  "intervalFactor": 0,
                  "legendFormat": "string",
                  "measurement": "string",
                  "metricColumn": "string",
                  "metricKind": "string",
                  "metricName": "string",
                  "metricType": "string",
                  "metrics": [
                    {
                      "field": "string",
                      "id": "string",
                      "type": "string"
                    }
                  ],
                  "namespace": "string",
                  "perSeriesAligner": "string",
                  "period": "string",
                  "projectName": "string",
                  "query": "string",
                  "rawQuery": true,
                  "rawSql": "string",
                  "refId": "string",
                  "region": "string",
                  "select": [
                    [
                      {
                        "params": [
                          "string"
                        ],
                        "type": "string"
                      }
                    ]
                  ],
                  "statistics": [
                    "string"
                  ],
                  "step": 0,
                  "table": "string",
                  "target": "string",
                  "timeColumn": "string",
                  "timeField": "string",
                  "valueType": "string",
                  "where": [
                    {
                      "datatype": "string",
                      "name": "string",
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ]
                }
              ],
              "thresholds": "string",
              "timeFrom": "string",
              "timeShift": "string",
              "title": "string",
              "tooltip": {
                "msResolution": true,
                "shared": true,
                "sort": 0,
                "value_type": "string"
              },
              "tooltipDecimals": 0,
              "transform": "string",
              "transparent": true,
              "type": "string",
              "valueFontSize": "string",
              "valueMaps": [
                {
                  "op": "string",
                  "text": "string",
                  "value": "string"
                }
              ],
              "valueName": "string",
              "x-axis": true,
              "xAxis": {
                "show": true
              },
              "xBucketNumber": 0,
              "xBucketSize": "string",
              "xaxis": {
                "decimals": 0,
                "format": "string",
                "label": "string",
                "logBase": 0,
                "max": {
                  "Valid": true,
                  "Value": 0
                },
                "min": {
                  "Valid": true,
                  "Value": 0
                },
                "show": true
              },
              "y-axis": true,
              "yAxis": {
                "decimals": 0,
                "format": "string",
                "logBase": 0,
                "max": "string",
                "min": "string",
                "show": true,
                "splitFactor": 0
              },
              "yBucketBound": "string",
              "yBucketNumber": 0,
              "yBucketSize": 0,
              "y_formats": [
                "string"
              ],
              "yaxes": [
                {
                  "decimals": 0,
                  "format": "string",
                  "label": "string",
                  "logBase": 0,
                  "max": {
                    "Valid": true,
                    "Value": 0
                  },
                  "min": {
                    "Valid": true,
                    "Value": 0
                  },
                  "show": true
                }
              ]
            }
          ],
          "slug": "string",
          "template_vars": [
            {
              "datasource": {
                "id": 0,
                "name": "string"
              },
              "hide": 0,
              "name": "string",
              "query": "string",
              "value": {}
            }
          ],
          "title": "string",
          "uid": "string",
          "uri": "string"
        },
        "panels": [
          {
            "alert": {
              "alertRuleTags": {
                "property1": "string",
                "property2": "string"
              },
              "conditions": [
                {
                  "evaluator": {
                    "params": [
                      0
                    ],
                    "type": "string"
                  },
                  "operator": {
                    "type": "string"
                  },
                  "query": {
                    "params": [
                      "string"
                    ]
                  },
                  "reducer": {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  },
                  "type": "string"
                }
              ],
              "executionErrorState": "string",
              "for": "string",
              "frequency": "string",
              "handler": 0,
              "message": "string",
              "name": "string",
              "noDataState": "string",
              "notifications": [
                {
                  "disableResolveMessage": true,
                  "frequency": "string",
                  "id": 0,
                  "isDefault": true,
                  "name": "string",
                  "sendReminder": true,
                  "settings": {},
                  "type": "string",
                  "uid": "string"
                }
              ]
            },
            "aliasColors": {},
            "bars": true,
            "cards": {
              "cardPadding": 0,
              "cardRound": 0
            },
            "collapsed": true,
            "color": {
              "cardColor": "string",
              "colorScale": "string",
              "colorScheme": "string",
              "exponent": 0,
              "max": 0,
              "min": 0,
              "mode": "string"
            },
            "colorBackground": true,
            "colorValue": true,
            "colors": [
              "string"
            ],
            "columns": [
              {
                "text": "string",
                "value": "string"
              }
            ],
            "content": "string",
            "dashLength": 0,
            "dashboardTags": [
              "string"
            ],
            "dashes": true,
            "dataFormat": "string",
            "datasource": "string",
            "decimals": 0,
            "description": "string",
            "editable": true,
            "error": true,
            "fieldConfig": {
              "defaults": {
                "threshold": {
                  "mode": "string",
                  "steps": [
                    {
                      "color": "string",
                      "value": "string"
                    }
                  ]
                },
                "unit": "string"
              }
            },
            "fill": 0,
            "folderId": 0,
            "format": "string",
            "gauge": {
              "maxValue": 0,
              "minValue": 0,
              "show": true,
              "thresholdLabels": true,
              "thresholdMarkers": true
            },
            "gridPos": {
              "h": 0,
              "w": 0,
              "x": 0,
              "y": 0
            },
            "headings": true,
            "height": {},
            "hideTimeOverride": true,
            "hideZeroBuckets": true,
            "highlightCards": true,
            "id": 0,
            "isNew": true,
            "leftYAxisLabel": "string",
            "legend": {
              "alignAsTable": true,
              "avg": true,
              "current": true,
              "hideEmpty": true,
              "hideZero": true,
              "max": true,
              "min": true,
              "rightSide": true,
              "show": true,
              "sideWidth": 0,
              "total": true,
              "values": true
            },
            "limit": 0,
            "lines": true,
            "linewidth": 0,
            "links": [
              {
                "asDropdown": true,
                "dashUri": "string",
                "dashboard": "string",
                "icon": "string",
                "includeVars": true,
                "keepTime": true,
                "params": "string",
                "tags": [
                  "string"
                ],
                "targetBlank": true,
                "title": "string",
                "tooltip": "string",
                "type": "string",
                "url": "string"
              }
            ],
            "mappingType": 0,
            "mappingTypes": [
              {
                "name": "string",
                "value": 0
              }
            ],
            "maxDataPoints": {
              "Valid": true,
              "Value": 0
            },
            "minSpan": 0,
            "mode": "string",
            "nameFilter": "string",
            "nullPointMode": "string",
            "onlyAlertsOnDashboard": true,
            "options": {
              "colorMode": "string",
              "content": "string",
              "displayMode": "string",
              "graphMode": "string",
              "justifyMode": "string",
              "mode": "string",
              "orientation": "string",
              "reduceOptions": {
                "calcs": [
                  "string"
                ],
                "fields": "string",
                "values": true
              },
              "textMode": "string"
            },
            "pageSize": 0,
            "panels": [
              {}
            ],
            "percentage": true,
            "pointradius": 0,
            "points": true,
            "postfix": "string",
            "postfixFontSize": "string",
            "prefix": "string",
            "prefixFontSize": "string",
            "query": "string",
            "rangeMaps": [
              {
                "from": "string",
                "text": "string",
                "to": "string"
              }
            ],
            "recent": true,
            "renderer": "string",
            "repeat": "string",
            "repeatPanelId": 0,
            "reverseYBuckets": true,
            "rightYAxisLabel": "string",
            "scopedVars": {
              "property1": {
                "selected": true,
                "text": "string",
                "value": "string"
              },
              "property2": {
                "selected": true,
                "text": "string",
                "value": "string"
              }
            },
            "scroll": true,
            "search": true,
            "seriesOverrides": [
              {
                "alias": "string",
                "bars": true,
                "color": "string",
                "dashes": true,
                "fill": 0,
                "fillBelowTo": "string",
                "legend": true,
                "lines": true,
                "linewidth": 0,
                "nullPointMode": "string",
                "stack": {
                  "Flag": true,
                  "Value": "string"
                },
                "transform": "string",
                "yaxis": 0,
                "zindex": 0
              }
            ],
            "show": "string",
            "showHeader": true,
            "sort": {
              "col": 0,
              "desc": true
            },
            "sortOrder": 0,
            "spaceLength": 0,
            "span": 0,
            "sparkline": {
              "fillColor": "string",
              "full": true,
              "lineColor": "string",
              "show": true,
              "ymax": 0,
              "ymin": 0
            },
            "stack": true,
            "starred": true,
            "stateFilter": [
              "string"
            ],
            "steppedLine": true,
            "styles": [
              {
                "alias": "string",
                "colorMode": "string",
                "colors": [
                  "string"
                ],
                "dateFormat": "string",
                "decimals": 0,
                "link": true,
                "linkTargetBlank": true,
                "linkTooltip": "string",
                "linkUrl": "string",
                "mappingType": 0,
                "pattern": "string",
                "thresholds": [
                  "string"
                ],
                "type": "string",
                "unit": "string",
                "valueMaps": [
                  {
                    "op": "string",
                    "text": "string",
                    "value": "string"
                  }
                ]
              }
            ],
            "tags": [
              "string"
            ],
            "targets": [
              {
                "alias": "string",
                "aliasBy": "string",
                "alignOptions": [
                  {
                    "expanded": true,
                    "label": "string",
                    "options": [
                      {
                        "label": "string",
                        "metricKinds": [
                          "string"
                        ],
                        "text": "string",
                        "value": "string",
                        "valueTypes": [
                          "string"
                        ]
                      }
                    ]
                  }
                ],
                "alignmentPeriod": "string",
                "bucketAggs": [
                  {
                    "field": "string",
                    "id": "string",
                    "settings": {
                      "interval": "string",
                      "min_doc_count": {},
                      "order": "string",
                      "orderBy": "string",
                      "size": "string"
                    },
                    "type": "string"
                  }
                ],
                "crossSeriesReducer": "string",
                "datasource": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "dsType": "string",
                "expr": "string",
                "filters": [
                  "string"
                ],
                "format": "string",
                "group": [
                  {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ],
                "groupBys": [
                  "string"
                ],
                "hide": true,
                "instant": true,
                "interval": "string",
                "intervalFactor": 0,
                "legendFormat": "string",
                "measurement": "string",
                "metricColumn": "string",
                "metricKind": "string",
                "metricName": "string",
                "metricType": "string",
                "metrics": [
                  {
                    "field": "string",
                    "id": "string",
                    "type": "string"
                  }
                ],
                "namespace": "string",
                "perSeriesAligner": "string",
                "period": "string",
                "projectName": "string",
                "query": "string",
                "rawQuery": true,
                "rawSql": "string",
                "refId": "string",
                "region": "string",
                "select": [
                  [
                    {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ]
                ],
                "statistics": [
                  "string"
                ],
                "step": 0,
                "table": "string",
                "target": "string",
                "timeColumn": "string",
                "timeField": "string",
                "valueType": "string",
                "where": [
                  {
                    "datatype": "string",
                    "name": "string",
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ]
              }
            ],
            "thresholds": "string",
            "timeFrom": "string",
            "timeShift": "string",
            "title": "string",
            "tooltip": {
              "msResolution": true,
              "shared": true,
              "sort": 0,
              "value_type": "string"
            },
            "tooltipDecimals": 0,
            "transform": "string",
            "transparent": true,
            "type": "string",
            "valueFontSize": "string",
            "valueMaps": [
              {
                "op": "string",
                "text": "string",
                "value": "string"
              }
            ],
            "valueName": "string",
            "x-axis": true,
            "xAxis": {
              "show": true
            },
            "xBucketNumber": 0,
            "xBucketSize": "string",
            "xaxis": {
              "decimals": 0,
              "format": "string",
              "label": "string",
              "logBase": 0,
              "max": {
                "Valid": true,
                "Value": 0
              },
              "min": {
                "Valid": true,
                "Value": 0
              },
              "show": true
            },
            "y-axis": true,
            "yAxis": {
              "decimals": 0,
              "format": "string",
              "logBase": 0,
              "max": "string",
              "min": "string",
              "show": true,
              "splitFactor": 0
            },
            "yBucketBound": "string",
            "yBucketNumber": 0,
            "yBucketSize": 0,
            "y_formats": [
              "string"
            ],
            "yaxes": [
              {
                "decimals": 0,
                "format": "string",
                "label": "string",
                "logBase": 0,
                "max": {
                  "Valid": true,
                  "Value": 0
                },
                "min": {
                  "Valid": true,
                  "Value": 0
                },
                "show": true
              }
            ]
          }
        ],
        "templateVars": [
          "string"
        ]
      }
    ]
  },
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="handle-get-for-user-load-test-preferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns User Load Test Preferencee|[Preference](#schemapreference)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET for User Load Test Preferences

<a id="opIdidPostUserTestPrefs"></a>

> Code samples

```bash
curl https://example.com/api/user/prefs \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`POST /api/user/prefs`

Updates User Load Test Preferences

> Example responses

> 200 Response

```json
{
  "anonymousPerfResults": true,
  "anonymousUsageStats": true,
  "grafana": {
    "grafanaAPIKey": "string",
    "grafanaURL": "string",
    "selectedBoardsConfigs": [
      {
        "board": {
          "org_id": 0,
          "panels": [
            {
              "alert": {
                "alertRuleTags": {
                  "property1": "string",
                  "property2": "string"
                },
                "conditions": [
                  {
                    "evaluator": {
                      "params": [
                        0
                      ],
                      "type": "string"
                    },
                    "operator": {
                      "type": "string"
                    },
                    "query": {
                      "params": [
                        "string"
                      ]
                    },
                    "reducer": {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    },
                    "type": "string"
                  }
                ],
                "executionErrorState": "string",
                "for": "string",
                "frequency": "string",
                "handler": 0,
                "message": "string",
                "name": "string",
                "noDataState": "string",
                "notifications": [
                  {
                    "disableResolveMessage": true,
                    "frequency": "string",
                    "id": 0,
                    "isDefault": true,
                    "name": "string",
                    "sendReminder": true,
                    "settings": {},
                    "type": "string",
                    "uid": "string"
                  }
                ]
              },
              "aliasColors": {},
              "bars": true,
              "cards": {
                "cardPadding": 0,
                "cardRound": 0
              },
              "collapsed": true,
              "color": {
                "cardColor": "string",
                "colorScale": "string",
                "colorScheme": "string",
                "exponent": 0,
                "max": 0,
                "min": 0,
                "mode": "string"
              },
              "colorBackground": true,
              "colorValue": true,
              "colors": [
                "string"
              ],
              "columns": [
                {
                  "text": "string",
                  "value": "string"
                }
              ],
              "content": "string",
              "dashLength": 0,
              "dashboardTags": [
                "string"
              ],
              "dashes": true,
              "dataFormat": "string",
              "datasource": "string",
              "decimals": 0,
              "description": "string",
              "editable": true,
              "error": true,
              "fieldConfig": {
                "defaults": {
                  "threshold": {
                    "mode": "string",
                    "steps": [
                      {
                        "color": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "unit": "string"
                }
              },
              "fill": 0,
              "folderId": 0,
              "format": "string",
              "gauge": {
                "maxValue": 0,
                "minValue": 0,
                "show": true,
                "thresholdLabels": true,
                "thresholdMarkers": true
              },
              "gridPos": {
                "h": 0,
                "w": 0,
                "x": 0,
                "y": 0
              },
              "headings": true,
              "height": {},
              "hideTimeOverride": true,
              "hideZeroBuckets": true,
              "highlightCards": true,
              "id": 0,
              "isNew": true,
              "leftYAxisLabel": "string",
              "legend": {
                "alignAsTable": true,
                "avg": true,
                "current": true,
                "hideEmpty": true,
                "hideZero": true,
                "max": true,
                "min": true,
                "rightSide": true,
                "show": true,
                "sideWidth": 0,
                "total": true,
                "values": true
              },
              "limit": 0,
              "lines": true,
              "linewidth": 0,
              "links": [
                {
                  "asDropdown": true,
                  "dashUri": "string",
                  "dashboard": "string",
                  "icon": "string",
                  "includeVars": true,
                  "keepTime": true,
                  "params": "string",
                  "tags": [
                    "string"
                  ],
                  "targetBlank": true,
                  "title": "string",
                  "tooltip": "string",
                  "type": "string",
                  "url": "string"
                }
              ],
              "mappingType": 0,
              "mappingTypes": [
                {
                  "name": "string",
                  "value": 0
                }
              ],
              "maxDataPoints": {
                "Valid": true,
                "Value": 0
              },
              "minSpan": 0,
              "mode": "string",
              "nameFilter": "string",
              "nullPointMode": "string",
              "onlyAlertsOnDashboard": true,
              "options": {
                "colorMode": "string",
                "content": "string",
                "displayMode": "string",
                "graphMode": "string",
                "justifyMode": "string",
                "mode": "string",
                "orientation": "string",
                "reduceOptions": {
                  "calcs": [
                    "string"
                  ],
                  "fields": "string",
                  "values": true
                },
                "textMode": "string"
              },
              "pageSize": 0,
              "panels": [
                {}
              ],
              "percentage": true,
              "pointradius": 0,
              "points": true,
              "postfix": "string",
              "postfixFontSize": "string",
              "prefix": "string",
              "prefixFontSize": "string",
              "query": "string",
              "rangeMaps": [
                {
                  "from": "string",
                  "text": "string",
                  "to": "string"
                }
              ],
              "recent": true,
              "renderer": "string",
              "repeat": "string",
              "repeatPanelId": 0,
              "reverseYBuckets": true,
              "rightYAxisLabel": "string",
              "scopedVars": {
                "property1": {
                  "selected": true,
                  "text": "string",
                  "value": "string"
                },
                "property2": {
                  "selected": true,
                  "text": "string",
                  "value": "string"
                }
              },
              "scroll": true,
              "search": true,
              "seriesOverrides": [
                {
                  "alias": "string",
                  "bars": true,
                  "color": "string",
                  "dashes": true,
                  "fill": 0,
                  "fillBelowTo": "string",
                  "legend": true,
                  "lines": true,
                  "linewidth": 0,
                  "nullPointMode": "string",
                  "stack": {
                    "Flag": true,
                    "Value": "string"
                  },
                  "transform": "string",
                  "yaxis": 0,
                  "zindex": 0
                }
              ],
              "show": "string",
              "showHeader": true,
              "sort": {
                "col": 0,
                "desc": true
              },
              "sortOrder": 0,
              "spaceLength": 0,
              "span": 0,
              "sparkline": {
                "fillColor": "string",
                "full": true,
                "lineColor": "string",
                "show": true,
                "ymax": 0,
                "ymin": 0
              },
              "stack": true,
              "starred": true,
              "stateFilter": [
                "string"
              ],
              "steppedLine": true,
              "styles": [
                {
                  "alias": "string",
                  "colorMode": "string",
                  "colors": [
                    "string"
                  ],
                  "dateFormat": "string",
                  "decimals": 0,
                  "link": true,
                  "linkTargetBlank": true,
                  "linkTooltip": "string",
                  "linkUrl": "string",
                  "mappingType": 0,
                  "pattern": "string",
                  "thresholds": [
                    "string"
                  ],
                  "type": "string",
                  "unit": "string",
                  "valueMaps": [
                    {
                      "op": "string",
                      "text": "string",
                      "value": "string"
                    }
                  ]
                }
              ],
              "tags": [
                "string"
              ],
              "targets": [
                {
                  "alias": "string",
                  "aliasBy": "string",
                  "alignOptions": [
                    {
                      "expanded": true,
                      "label": "string",
                      "options": [
                        {
                          "label": "string",
                          "metricKinds": [
                            "string"
                          ],
                          "text": "string",
                          "value": "string",
                          "valueTypes": [
                            "string"
                          ]
                        }
                      ]
                    }
                  ],
                  "alignmentPeriod": "string",
                  "bucketAggs": [
                    {
                      "field": "string",
                      "id": "string",
                      "settings": {
                        "interval": "string",
                        "min_doc_count": {},
                        "order": "string",
                        "orderBy": "string",
                        "size": "string"
                      },
                      "type": "string"
                    }
                  ],
                  "crossSeriesReducer": "string",
                  "datasource": "string",
                  "dimensions": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "dsType": "string",
                  "expr": "string",
                  "filters": [
                    "string"
                  ],
                  "format": "string",
                  "group": [
                    {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ],
                  "groupBys": [
                    "string"
                  ],
                  "hide": true,
                  "instant": true,
                  "interval": "string",
                  "intervalFactor": 0,
                  "legendFormat": "string",
                  "measurement": "string",
                  "metricColumn": "string",
                  "metricKind": "string",
                  "metricName": "string",
                  "metricType": "string",
                  "metrics": [
                    {
                      "field": "string",
                      "id": "string",
                      "type": "string"
                    }
                  ],
                  "namespace": "string",
                  "perSeriesAligner": "string",
                  "period": "string",
                  "projectName": "string",
                  "query": "string",
                  "rawQuery": true,
                  "rawSql": "string",
                  "refId": "string",
                  "region": "string",
                  "select": [
                    [
                      {
                        "params": [
                          "string"
                        ],
                        "type": "string"
                      }
                    ]
                  ],
                  "statistics": [
                    "string"
                  ],
                  "step": 0,
                  "table": "string",
                  "target": "string",
                  "timeColumn": "string",
                  "timeField": "string",
                  "valueType": "string",
                  "where": [
                    {
                      "datatype": "string",
                      "name": "string",
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ]
                }
              ],
              "thresholds": "string",
              "timeFrom": "string",
              "timeShift": "string",
              "title": "string",
              "tooltip": {
                "msResolution": true,
                "shared": true,
                "sort": 0,
                "value_type": "string"
              },
              "tooltipDecimals": 0,
              "transform": "string",
              "transparent": true,
              "type": "string",
              "valueFontSize": "string",
              "valueMaps": [
                {
                  "op": "string",
                  "text": "string",
                  "value": "string"
                }
              ],
              "valueName": "string",
              "x-axis": true,
              "xAxis": {
                "show": true
              },
              "xBucketNumber": 0,
              "xBucketSize": "string",
              "xaxis": {
                "decimals": 0,
                "format": "string",
                "label": "string",
                "logBase": 0,
                "max": {
                  "Valid": true,
                  "Value": 0
                },
                "min": {
                  "Valid": true,
                  "Value": 0
                },
                "show": true
              },
              "y-axis": true,
              "yAxis": {
                "decimals": 0,
                "format": "string",
                "logBase": 0,
                "max": "string",
                "min": "string",
                "show": true,
                "splitFactor": 0
              },
              "yBucketBound": "string",
              "yBucketNumber": 0,
              "yBucketSize": 0,
              "y_formats": [
                "string"
              ],
              "yaxes": [
                {
                  "decimals": 0,
                  "format": "string",
                  "label": "string",
                  "logBase": 0,
                  "max": {
                    "Valid": true,
                    "Value": 0
                  },
                  "min": {
                    "Valid": true,
                    "Value": 0
                  },
                  "show": true
                }
              ]
            }
          ],
          "slug": "string",
          "template_vars": [
            {
              "datasource": {
                "id": 0,
                "name": "string"
              },
              "hide": 0,
              "name": "string",
              "query": "string",
              "value": {}
            }
          ],
          "title": "string",
          "uid": "string",
          "uri": "string"
        },
        "panels": [
          {
            "alert": {
              "alertRuleTags": {
                "property1": "string",
                "property2": "string"
              },
              "conditions": [
                {
                  "evaluator": {
                    "params": [
                      0
                    ],
                    "type": "string"
                  },
                  "operator": {
                    "type": "string"
                  },
                  "query": {
                    "params": [
                      "string"
                    ]
                  },
                  "reducer": {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  },
                  "type": "string"
                }
              ],
              "executionErrorState": "string",
              "for": "string",
              "frequency": "string",
              "handler": 0,
              "message": "string",
              "name": "string",
              "noDataState": "string",
              "notifications": [
                {
                  "disableResolveMessage": true,
                  "frequency": "string",
                  "id": 0,
                  "isDefault": true,
                  "name": "string",
                  "sendReminder": true,
                  "settings": {},
                  "type": "string",
                  "uid": "string"
                }
              ]
            },
            "aliasColors": {},
            "bars": true,
            "cards": {
              "cardPadding": 0,
              "cardRound": 0
            },
            "collapsed": true,
            "color": {
              "cardColor": "string",
              "colorScale": "string",
              "colorScheme": "string",
              "exponent": 0,
              "max": 0,
              "min": 0,
              "mode": "string"
            },
            "colorBackground": true,
            "colorValue": true,
            "colors": [
              "string"
            ],
            "columns": [
              {
                "text": "string",
                "value": "string"
              }
            ],
            "content": "string",
            "dashLength": 0,
            "dashboardTags": [
              "string"
            ],
            "dashes": true,
            "dataFormat": "string",
            "datasource": "string",
            "decimals": 0,
            "description": "string",
            "editable": true,
            "error": true,
            "fieldConfig": {
              "defaults": {
                "threshold": {
                  "mode": "string",
                  "steps": [
                    {
                      "color": "string",
                      "value": "string"
                    }
                  ]
                },
                "unit": "string"
              }
            },
            "fill": 0,
            "folderId": 0,
            "format": "string",
            "gauge": {
              "maxValue": 0,
              "minValue": 0,
              "show": true,
              "thresholdLabels": true,
              "thresholdMarkers": true
            },
            "gridPos": {
              "h": 0,
              "w": 0,
              "x": 0,
              "y": 0
            },
            "headings": true,
            "height": {},
            "hideTimeOverride": true,
            "hideZeroBuckets": true,
            "highlightCards": true,
            "id": 0,
            "isNew": true,
            "leftYAxisLabel": "string",
            "legend": {
              "alignAsTable": true,
              "avg": true,
              "current": true,
              "hideEmpty": true,
              "hideZero": true,
              "max": true,
              "min": true,
              "rightSide": true,
              "show": true,
              "sideWidth": 0,
              "total": true,
              "values": true
            },
            "limit": 0,
            "lines": true,
            "linewidth": 0,
            "links": [
              {
                "asDropdown": true,
                "dashUri": "string",
                "dashboard": "string",
                "icon": "string",
                "includeVars": true,
                "keepTime": true,
                "params": "string",
                "tags": [
                  "string"
                ],
                "targetBlank": true,
                "title": "string",
                "tooltip": "string",
                "type": "string",
                "url": "string"
              }
            ],
            "mappingType": 0,
            "mappingTypes": [
              {
                "name": "string",
                "value": 0
              }
            ],
            "maxDataPoints": {
              "Valid": true,
              "Value": 0
            },
            "minSpan": 0,
            "mode": "string",
            "nameFilter": "string",
            "nullPointMode": "string",
            "onlyAlertsOnDashboard": true,
            "options": {
              "colorMode": "string",
              "content": "string",
              "displayMode": "string",
              "graphMode": "string",
              "justifyMode": "string",
              "mode": "string",
              "orientation": "string",
              "reduceOptions": {
                "calcs": [
                  "string"
                ],
                "fields": "string",
                "values": true
              },
              "textMode": "string"
            },
            "pageSize": 0,
            "panels": [
              {}
            ],
            "percentage": true,
            "pointradius": 0,
            "points": true,
            "postfix": "string",
            "postfixFontSize": "string",
            "prefix": "string",
            "prefixFontSize": "string",
            "query": "string",
            "rangeMaps": [
              {
                "from": "string",
                "text": "string",
                "to": "string"
              }
            ],
            "recent": true,
            "renderer": "string",
            "repeat": "string",
            "repeatPanelId": 0,
            "reverseYBuckets": true,
            "rightYAxisLabel": "string",
            "scopedVars": {
              "property1": {
                "selected": true,
                "text": "string",
                "value": "string"
              },
              "property2": {
                "selected": true,
                "text": "string",
                "value": "string"
              }
            },
            "scroll": true,
            "search": true,
            "seriesOverrides": [
              {
                "alias": "string",
                "bars": true,
                "color": "string",
                "dashes": true,
                "fill": 0,
                "fillBelowTo": "string",
                "legend": true,
                "lines": true,
                "linewidth": 0,
                "nullPointMode": "string",
                "stack": {
                  "Flag": true,
                  "Value": "string"
                },
                "transform": "string",
                "yaxis": 0,
                "zindex": 0
              }
            ],
            "show": "string",
            "showHeader": true,
            "sort": {
              "col": 0,
              "desc": true
            },
            "sortOrder": 0,
            "spaceLength": 0,
            "span": 0,
            "sparkline": {
              "fillColor": "string",
              "full": true,
              "lineColor": "string",
              "show": true,
              "ymax": 0,
              "ymin": 0
            },
            "stack": true,
            "starred": true,
            "stateFilter": [
              "string"
            ],
            "steppedLine": true,
            "styles": [
              {
                "alias": "string",
                "colorMode": "string",
                "colors": [
                  "string"
                ],
                "dateFormat": "string",
                "decimals": 0,
                "link": true,
                "linkTargetBlank": true,
                "linkTooltip": "string",
                "linkUrl": "string",
                "mappingType": 0,
                "pattern": "string",
                "thresholds": [
                  "string"
                ],
                "type": "string",
                "unit": "string",
                "valueMaps": [
                  {
                    "op": "string",
                    "text": "string",
                    "value": "string"
                  }
                ]
              }
            ],
            "tags": [
              "string"
            ],
            "targets": [
              {
                "alias": "string",
                "aliasBy": "string",
                "alignOptions": [
                  {
                    "expanded": true,
                    "label": "string",
                    "options": [
                      {
                        "label": "string",
                        "metricKinds": [
                          "string"
                        ],
                        "text": "string",
                        "value": "string",
                        "valueTypes": [
                          "string"
                        ]
                      }
                    ]
                  }
                ],
                "alignmentPeriod": "string",
                "bucketAggs": [
                  {
                    "field": "string",
                    "id": "string",
                    "settings": {
                      "interval": "string",
                      "min_doc_count": {},
                      "order": "string",
                      "orderBy": "string",
                      "size": "string"
                    },
                    "type": "string"
                  }
                ],
                "crossSeriesReducer": "string",
                "datasource": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "dsType": "string",
                "expr": "string",
                "filters": [
                  "string"
                ],
                "format": "string",
                "group": [
                  {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ],
                "groupBys": [
                  "string"
                ],
                "hide": true,
                "instant": true,
                "interval": "string",
                "intervalFactor": 0,
                "legendFormat": "string",
                "measurement": "string",
                "metricColumn": "string",
                "metricKind": "string",
                "metricName": "string",
                "metricType": "string",
                "metrics": [
                  {
                    "field": "string",
                    "id": "string",
                    "type": "string"
                  }
                ],
                "namespace": "string",
                "perSeriesAligner": "string",
                "period": "string",
                "projectName": "string",
                "query": "string",
                "rawQuery": true,
                "rawSql": "string",
                "refId": "string",
                "region": "string",
                "select": [
                  [
                    {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ]
                ],
                "statistics": [
                  "string"
                ],
                "step": 0,
                "table": "string",
                "target": "string",
                "timeColumn": "string",
                "timeField": "string",
                "valueType": "string",
                "where": [
                  {
                    "datatype": "string",
                    "name": "string",
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ]
              }
            ],
            "thresholds": "string",
            "timeFrom": "string",
            "timeShift": "string",
            "title": "string",
            "tooltip": {
              "msResolution": true,
              "shared": true,
              "sort": 0,
              "value_type": "string"
            },
            "tooltipDecimals": 0,
            "transform": "string",
            "transparent": true,
            "type": "string",
            "valueFontSize": "string",
            "valueMaps": [
              {
                "op": "string",
                "text": "string",
                "value": "string"
              }
            ],
            "valueName": "string",
            "x-axis": true,
            "xAxis": {
              "show": true
            },
            "xBucketNumber": 0,
            "xBucketSize": "string",
            "xaxis": {
              "decimals": 0,
              "format": "string",
              "label": "string",
              "logBase": 0,
              "max": {
                "Valid": true,
                "Value": 0
              },
              "min": {
                "Valid": true,
                "Value": 0
              },
              "show": true
            },
            "y-axis": true,
            "yAxis": {
              "decimals": 0,
              "format": "string",
              "logBase": 0,
              "max": "string",
              "min": "string",
              "show": true,
              "splitFactor": 0
            },
            "yBucketBound": "string",
            "yBucketNumber": 0,
            "yBucketSize": 0,
            "y_formats": [
              "string"
            ],
            "yaxes": [
              {
                "decimals": 0,
                "format": "string",
                "label": "string",
                "logBase": 0,
                "max": {
                  "Valid": true,
                  "Value": 0
                },
                "min": {
                  "Valid": true,
                  "Value": 0
                },
                "show": true
              }
            ]
          }
        ],
        "templateVars": [
          "string"
        ]
      }
    ]
  },
  "k8sConfig": {
    "clusterConfigured": true,
    "config": [
      0
    ],
    "configuredServer": "string",
    "contextName": "string",
    "inClusterConfig": true,
    "k8sfile": "string",
    "nodes": [
      {
        "allocatable_cpu": "string",
        "allocatable_memory": "string",
        "architecture": "string",
        "capacity_cpu": "string",
        "capacity_memory": "string",
        "container_runtime_version": "string",
        "hostname": "string",
        "internal_ip": "string",
        "kubelet_version": "string",
        "kubeproxy_version": "string",
        "operating_system": "string",
        "os_image": "string"
      }
    ],
    "server_version": "string"
  },
  "loadTestPrefs": {
    "c": 0,
    "gen": "string",
    "qps": 0,
    "t": "string"
  },
  "meshAdapters": [
    {
      "adapter_location": "string",
      "git_commit_sha": "string",
      "name": "string",
      "ops": [
        {
          "category": 0,
          "key": "string",
          "value": "string"
        }
      ],
      "version": "string"
    }
  ],
  "prometheus": {
    "prometheusURL": "string",
    "selectedPrometheusBoardsConfigs": [
      {
        "board": {
          "org_id": 0,
          "panels": [
            {
              "alert": {
                "alertRuleTags": {
                  "property1": "string",
                  "property2": "string"
                },
                "conditions": [
                  {
                    "evaluator": {
                      "params": [
                        0
                      ],
                      "type": "string"
                    },
                    "operator": {
                      "type": "string"
                    },
                    "query": {
                      "params": [
                        "string"
                      ]
                    },
                    "reducer": {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    },
                    "type": "string"
                  }
                ],
                "executionErrorState": "string",
                "for": "string",
                "frequency": "string",
                "handler": 0,
                "message": "string",
                "name": "string",
                "noDataState": "string",
                "notifications": [
                  {
                    "disableResolveMessage": true,
                    "frequency": "string",
                    "id": 0,
                    "isDefault": true,
                    "name": "string",
                    "sendReminder": true,
                    "settings": {},
                    "type": "string",
                    "uid": "string"
                  }
                ]
              },
              "aliasColors": {},
              "bars": true,
              "cards": {
                "cardPadding": 0,
                "cardRound": 0
              },
              "collapsed": true,
              "color": {
                "cardColor": "string",
                "colorScale": "string",
                "colorScheme": "string",
                "exponent": 0,
                "max": 0,
                "min": 0,
                "mode": "string"
              },
              "colorBackground": true,
              "colorValue": true,
              "colors": [
                "string"
              ],
              "columns": [
                {
                  "text": "string",
                  "value": "string"
                }
              ],
              "content": "string",
              "dashLength": 0,
              "dashboardTags": [
                "string"
              ],
              "dashes": true,
              "dataFormat": "string",
              "datasource": "string",
              "decimals": 0,
              "description": "string",
              "editable": true,
              "error": true,
              "fieldConfig": {
                "defaults": {
                  "threshold": {
                    "mode": "string",
                    "steps": [
                      {
                        "color": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "unit": "string"
                }
              },
              "fill": 0,
              "folderId": 0,
              "format": "string",
              "gauge": {
                "maxValue": 0,
                "minValue": 0,
                "show": true,
                "thresholdLabels": true,
                "thresholdMarkers": true
              },
              "gridPos": {
                "h": 0,
                "w": 0,
                "x": 0,
                "y": 0
              },
              "headings": true,
              "height": {},
              "hideTimeOverride": true,
              "hideZeroBuckets": true,
              "highlightCards": true,
              "id": 0,
              "isNew": true,
              "leftYAxisLabel": "string",
              "legend": {
                "alignAsTable": true,
                "avg": true,
                "current": true,
                "hideEmpty": true,
                "hideZero": true,
                "max": true,
                "min": true,
                "rightSide": true,
                "show": true,
                "sideWidth": 0,
                "total": true,
                "values": true
              },
              "limit": 0,
              "lines": true,
              "linewidth": 0,
              "links": [
                {
                  "asDropdown": true,
                  "dashUri": "string",
                  "dashboard": "string",
                  "icon": "string",
                  "includeVars": true,
                  "keepTime": true,
                  "params": "string",
                  "tags": [
                    "string"
                  ],
                  "targetBlank": true,
                  "title": "string",
                  "tooltip": "string",
                  "type": "string",
                  "url": "string"
                }
              ],
              "mappingType": 0,
              "mappingTypes": [
                {
                  "name": "string",
                  "value": 0
                }
              ],
              "maxDataPoints": {
                "Valid": true,
                "Value": 0
              },
              "minSpan": 0,
              "mode": "string",
              "nameFilter": "string",
              "nullPointMode": "string",
              "onlyAlertsOnDashboard": true,
              "options": {
                "colorMode": "string",
                "content": "string",
                "displayMode": "string",
                "graphMode": "string",
                "justifyMode": "string",
                "mode": "string",
                "orientation": "string",
                "reduceOptions": {
                  "calcs": [
                    "string"
                  ],
                  "fields": "string",
                  "values": true
                },
                "textMode": "string"
              },
              "pageSize": 0,
              "panels": [
                {}
              ],
              "percentage": true,
              "pointradius": 0,
              "points": true,
              "postfix": "string",
              "postfixFontSize": "string",
              "prefix": "string",
              "prefixFontSize": "string",
              "query": "string",
              "rangeMaps": [
                {
                  "from": "string",
                  "text": "string",
                  "to": "string"
                }
              ],
              "recent": true,
              "renderer": "string",
              "repeat": "string",
              "repeatPanelId": 0,
              "reverseYBuckets": true,
              "rightYAxisLabel": "string",
              "scopedVars": {
                "property1": {
                  "selected": true,
                  "text": "string",
                  "value": "string"
                },
                "property2": {
                  "selected": true,
                  "text": "string",
                  "value": "string"
                }
              },
              "scroll": true,
              "search": true,
              "seriesOverrides": [
                {
                  "alias": "string",
                  "bars": true,
                  "color": "string",
                  "dashes": true,
                  "fill": 0,
                  "fillBelowTo": "string",
                  "legend": true,
                  "lines": true,
                  "linewidth": 0,
                  "nullPointMode": "string",
                  "stack": {
                    "Flag": true,
                    "Value": "string"
                  },
                  "transform": "string",
                  "yaxis": 0,
                  "zindex": 0
                }
              ],
              "show": "string",
              "showHeader": true,
              "sort": {
                "col": 0,
                "desc": true
              },
              "sortOrder": 0,
              "spaceLength": 0,
              "span": 0,
              "sparkline": {
                "fillColor": "string",
                "full": true,
                "lineColor": "string",
                "show": true,
                "ymax": 0,
                "ymin": 0
              },
              "stack": true,
              "starred": true,
              "stateFilter": [
                "string"
              ],
              "steppedLine": true,
              "styles": [
                {
                  "alias": "string",
                  "colorMode": "string",
                  "colors": [
                    "string"
                  ],
                  "dateFormat": "string",
                  "decimals": 0,
                  "link": true,
                  "linkTargetBlank": true,
                  "linkTooltip": "string",
                  "linkUrl": "string",
                  "mappingType": 0,
                  "pattern": "string",
                  "thresholds": [
                    "string"
                  ],
                  "type": "string",
                  "unit": "string",
                  "valueMaps": [
                    {
                      "op": "string",
                      "text": "string",
                      "value": "string"
                    }
                  ]
                }
              ],
              "tags": [
                "string"
              ],
              "targets": [
                {
                  "alias": "string",
                  "aliasBy": "string",
                  "alignOptions": [
                    {
                      "expanded": true,
                      "label": "string",
                      "options": [
                        {
                          "label": "string",
                          "metricKinds": [
                            "string"
                          ],
                          "text": "string",
                          "value": "string",
                          "valueTypes": [
                            "string"
                          ]
                        }
                      ]
                    }
                  ],
                  "alignmentPeriod": "string",
                  "bucketAggs": [
                    {
                      "field": "string",
                      "id": "string",
                      "settings": {
                        "interval": "string",
                        "min_doc_count": {},
                        "order": "string",
                        "orderBy": "string",
                        "size": "string"
                      },
                      "type": "string"
                    }
                  ],
                  "crossSeriesReducer": "string",
                  "datasource": "string",
                  "dimensions": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "dsType": "string",
                  "expr": "string",
                  "filters": [
                    "string"
                  ],
                  "format": "string",
                  "group": [
                    {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ],
                  "groupBys": [
                    "string"
                  ],
                  "hide": true,
                  "instant": true,
                  "interval": "string",
                  "intervalFactor": 0,
                  "legendFormat": "string",
                  "measurement": "string",
                  "metricColumn": "string",
                  "metricKind": "string",
                  "metricName": "string",
                  "metricType": "string",
                  "metrics": [
                    {
                      "field": "string",
                      "id": "string",
                      "type": "string"
                    }
                  ],
                  "namespace": "string",
                  "perSeriesAligner": "string",
                  "period": "string",
                  "projectName": "string",
                  "query": "string",
                  "rawQuery": true,
                  "rawSql": "string",
                  "refId": "string",
                  "region": "string",
                  "select": [
                    [
                      {
                        "params": [
                          "string"
                        ],
                        "type": "string"
                      }
                    ]
                  ],
                  "statistics": [
                    "string"
                  ],
                  "step": 0,
                  "table": "string",
                  "target": "string",
                  "timeColumn": "string",
                  "timeField": "string",
                  "valueType": "string",
                  "where": [
                    {
                      "datatype": "string",
                      "name": "string",
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ]
                }
              ],
              "thresholds": "string",
              "timeFrom": "string",
              "timeShift": "string",
              "title": "string",
              "tooltip": {
                "msResolution": true,
                "shared": true,
                "sort": 0,
                "value_type": "string"
              },
              "tooltipDecimals": 0,
              "transform": "string",
              "transparent": true,
              "type": "string",
              "valueFontSize": "string",
              "valueMaps": [
                {
                  "op": "string",
                  "text": "string",
                  "value": "string"
                }
              ],
              "valueName": "string",
              "x-axis": true,
              "xAxis": {
                "show": true
              },
              "xBucketNumber": 0,
              "xBucketSize": "string",
              "xaxis": {
                "decimals": 0,
                "format": "string",
                "label": "string",
                "logBase": 0,
                "max": {
                  "Valid": true,
                  "Value": 0
                },
                "min": {
                  "Valid": true,
                  "Value": 0
                },
                "show": true
              },
              "y-axis": true,
              "yAxis": {
                "decimals": 0,
                "format": "string",
                "logBase": 0,
                "max": "string",
                "min": "string",
                "show": true,
                "splitFactor": 0
              },
              "yBucketBound": "string",
              "yBucketNumber": 0,
              "yBucketSize": 0,
              "y_formats": [
                "string"
              ],
              "yaxes": [
                {
                  "decimals": 0,
                  "format": "string",
                  "label": "string",
                  "logBase": 0,
                  "max": {
                    "Valid": true,
                    "Value": 0
                  },
                  "min": {
                    "Valid": true,
                    "Value": 0
                  },
                  "show": true
                }
              ]
            }
          ],
          "slug": "string",
          "template_vars": [
            {
              "datasource": {
                "id": 0,
                "name": "string"
              },
              "hide": 0,
              "name": "string",
              "query": "string",
              "value": {}
            }
          ],
          "title": "string",
          "uid": "string",
          "uri": "string"
        },
        "panels": [
          {
            "alert": {
              "alertRuleTags": {
                "property1": "string",
                "property2": "string"
              },
              "conditions": [
                {
                  "evaluator": {
                    "params": [
                      0
                    ],
                    "type": "string"
                  },
                  "operator": {
                    "type": "string"
                  },
                  "query": {
                    "params": [
                      "string"
                    ]
                  },
                  "reducer": {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  },
                  "type": "string"
                }
              ],
              "executionErrorState": "string",
              "for": "string",
              "frequency": "string",
              "handler": 0,
              "message": "string",
              "name": "string",
              "noDataState": "string",
              "notifications": [
                {
                  "disableResolveMessage": true,
                  "frequency": "string",
                  "id": 0,
                  "isDefault": true,
                  "name": "string",
                  "sendReminder": true,
                  "settings": {},
                  "type": "string",
                  "uid": "string"
                }
              ]
            },
            "aliasColors": {},
            "bars": true,
            "cards": {
              "cardPadding": 0,
              "cardRound": 0
            },
            "collapsed": true,
            "color": {
              "cardColor": "string",
              "colorScale": "string",
              "colorScheme": "string",
              "exponent": 0,
              "max": 0,
              "min": 0,
              "mode": "string"
            },
            "colorBackground": true,
            "colorValue": true,
            "colors": [
              "string"
            ],
            "columns": [
              {
                "text": "string",
                "value": "string"
              }
            ],
            "content": "string",
            "dashLength": 0,
            "dashboardTags": [
              "string"
            ],
            "dashes": true,
            "dataFormat": "string",
            "datasource": "string",
            "decimals": 0,
            "description": "string",
            "editable": true,
            "error": true,
            "fieldConfig": {
              "defaults": {
                "threshold": {
                  "mode": "string",
                  "steps": [
                    {
                      "color": "string",
                      "value": "string"
                    }
                  ]
                },
                "unit": "string"
              }
            },
            "fill": 0,
            "folderId": 0,
            "format": "string",
            "gauge": {
              "maxValue": 0,
              "minValue": 0,
              "show": true,
              "thresholdLabels": true,
              "thresholdMarkers": true
            },
            "gridPos": {
              "h": 0,
              "w": 0,
              "x": 0,
              "y": 0
            },
            "headings": true,
            "height": {},
            "hideTimeOverride": true,
            "hideZeroBuckets": true,
            "highlightCards": true,
            "id": 0,
            "isNew": true,
            "leftYAxisLabel": "string",
            "legend": {
              "alignAsTable": true,
              "avg": true,
              "current": true,
              "hideEmpty": true,
              "hideZero": true,
              "max": true,
              "min": true,
              "rightSide": true,
              "show": true,
              "sideWidth": 0,
              "total": true,
              "values": true
            },
            "limit": 0,
            "lines": true,
            "linewidth": 0,
            "links": [
              {
                "asDropdown": true,
                "dashUri": "string",
                "dashboard": "string",
                "icon": "string",
                "includeVars": true,
                "keepTime": true,
                "params": "string",
                "tags": [
                  "string"
                ],
                "targetBlank": true,
                "title": "string",
                "tooltip": "string",
                "type": "string",
                "url": "string"
              }
            ],
            "mappingType": 0,
            "mappingTypes": [
              {
                "name": "string",
                "value": 0
              }
            ],
            "maxDataPoints": {
              "Valid": true,
              "Value": 0
            },
            "minSpan": 0,
            "mode": "string",
            "nameFilter": "string",
            "nullPointMode": "string",
            "onlyAlertsOnDashboard": true,
            "options": {
              "colorMode": "string",
              "content": "string",
              "displayMode": "string",
              "graphMode": "string",
              "justifyMode": "string",
              "mode": "string",
              "orientation": "string",
              "reduceOptions": {
                "calcs": [
                  "string"
                ],
                "fields": "string",
                "values": true
              },
              "textMode": "string"
            },
            "pageSize": 0,
            "panels": [
              {}
            ],
            "percentage": true,
            "pointradius": 0,
            "points": true,
            "postfix": "string",
            "postfixFontSize": "string",
            "prefix": "string",
            "prefixFontSize": "string",
            "query": "string",
            "rangeMaps": [
              {
                "from": "string",
                "text": "string",
                "to": "string"
              }
            ],
            "recent": true,
            "renderer": "string",
            "repeat": "string",
            "repeatPanelId": 0,
            "reverseYBuckets": true,
            "rightYAxisLabel": "string",
            "scopedVars": {
              "property1": {
                "selected": true,
                "text": "string",
                "value": "string"
              },
              "property2": {
                "selected": true,
                "text": "string",
                "value": "string"
              }
            },
            "scroll": true,
            "search": true,
            "seriesOverrides": [
              {
                "alias": "string",
                "bars": true,
                "color": "string",
                "dashes": true,
                "fill": 0,
                "fillBelowTo": "string",
                "legend": true,
                "lines": true,
                "linewidth": 0,
                "nullPointMode": "string",
                "stack": {
                  "Flag": true,
                  "Value": "string"
                },
                "transform": "string",
                "yaxis": 0,
                "zindex": 0
              }
            ],
            "show": "string",
            "showHeader": true,
            "sort": {
              "col": 0,
              "desc": true
            },
            "sortOrder": 0,
            "spaceLength": 0,
            "span": 0,
            "sparkline": {
              "fillColor": "string",
              "full": true,
              "lineColor": "string",
              "show": true,
              "ymax": 0,
              "ymin": 0
            },
            "stack": true,
            "starred": true,
            "stateFilter": [
              "string"
            ],
            "steppedLine": true,
            "styles": [
              {
                "alias": "string",
                "colorMode": "string",
                "colors": [
                  "string"
                ],
                "dateFormat": "string",
                "decimals": 0,
                "link": true,
                "linkTargetBlank": true,
                "linkTooltip": "string",
                "linkUrl": "string",
                "mappingType": 0,
                "pattern": "string",
                "thresholds": [
                  "string"
                ],
                "type": "string",
                "unit": "string",
                "valueMaps": [
                  {
                    "op": "string",
                    "text": "string",
                    "value": "string"
                  }
                ]
              }
            ],
            "tags": [
              "string"
            ],
            "targets": [
              {
                "alias": "string",
                "aliasBy": "string",
                "alignOptions": [
                  {
                    "expanded": true,
                    "label": "string",
                    "options": [
                      {
                        "label": "string",
                        "metricKinds": [
                          "string"
                        ],
                        "text": "string",
                        "value": "string",
                        "valueTypes": [
                          "string"
                        ]
                      }
                    ]
                  }
                ],
                "alignmentPeriod": "string",
                "bucketAggs": [
                  {
                    "field": "string",
                    "id": "string",
                    "settings": {
                      "interval": "string",
                      "min_doc_count": {},
                      "order": "string",
                      "orderBy": "string",
                      "size": "string"
                    },
                    "type": "string"
                  }
                ],
                "crossSeriesReducer": "string",
                "datasource": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "dsType": "string",
                "expr": "string",
                "filters": [
                  "string"
                ],
                "format": "string",
                "group": [
                  {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ],
                "groupBys": [
                  "string"
                ],
                "hide": true,
                "instant": true,
                "interval": "string",
                "intervalFactor": 0,
                "legendFormat": "string",
                "measurement": "string",
                "metricColumn": "string",
                "metricKind": "string",
                "metricName": "string",
                "metricType": "string",
                "metrics": [
                  {
                    "field": "string",
                    "id": "string",
                    "type": "string"
                  }
                ],
                "namespace": "string",
                "perSeriesAligner": "string",
                "period": "string",
                "projectName": "string",
                "query": "string",
                "rawQuery": true,
                "rawSql": "string",
                "refId": "string",
                "region": "string",
                "select": [
                  [
                    {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ]
                ],
                "statistics": [
                  "string"
                ],
                "step": 0,
                "table": "string",
                "target": "string",
                "timeColumn": "string",
                "timeField": "string",
                "valueType": "string",
                "where": [
                  {
                    "datatype": "string",
                    "name": "string",
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ]
              }
            ],
            "thresholds": "string",
            "timeFrom": "string",
            "timeShift": "string",
            "title": "string",
            "tooltip": {
              "msResolution": true,
              "shared": true,
              "sort": 0,
              "value_type": "string"
            },
            "tooltipDecimals": 0,
            "transform": "string",
            "transparent": true,
            "type": "string",
            "valueFontSize": "string",
            "valueMaps": [
              {
                "op": "string",
                "text": "string",
                "value": "string"
              }
            ],
            "valueName": "string",
            "x-axis": true,
            "xAxis": {
              "show": true
            },
            "xBucketNumber": 0,
            "xBucketSize": "string",
            "xaxis": {
              "decimals": 0,
              "format": "string",
              "label": "string",
              "logBase": 0,
              "max": {
                "Valid": true,
                "Value": 0
              },
              "min": {
                "Valid": true,
                "Value": 0
              },
              "show": true
            },
            "y-axis": true,
            "yAxis": {
              "decimals": 0,
              "format": "string",
              "logBase": 0,
              "max": "string",
              "min": "string",
              "show": true,
              "splitFactor": 0
            },
            "yBucketBound": "string",
            "yBucketNumber": 0,
            "yBucketSize": 0,
            "y_formats": [
              "string"
            ],
            "yaxes": [
              {
                "decimals": 0,
                "format": "string",
                "label": "string",
                "logBase": 0,
                "max": {
                  "Valid": true,
                  "Value": 0
                },
                "min": {
                  "Valid": true,
                  "Value": 0
                },
                "show": true
              }
            ]
          }
        ],
        "templateVars": [
          "string"
        ]
      }
    ]
  },
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="handle-get-for-user-load-test-preferences-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns User Load Test Preferencee|[Preference](#schemapreference)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for load test preferences

<a id="opIdidGetLoadPreferences"></a>

> Code samples

```bash
curl https://example.com/api/user/prefs/perf \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/user/prefs/perf`

Used for fetching load test preferences

<h3 id="handle-get-request-for-load-test-preferences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|query|string(uuid)|false|none|

> Example responses

> 200 Response

```json
{
  "clients": [
    {
      "body": "string",
      "connections": 0,
      "content_type": "string",
      "cookies": {
        "property1": "string",
        "property2": "string"
      },
      "endpoint_urls": [
        "string"
      ],
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "internal": true,
      "load_generator": "string",
      "protocol": 0,
      "rps": 0
    }
  ],
  "duration": "string",
  "id": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "smp_version": "string"
}
```

<h3 id="handle-get-request-for-load-test-preferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns load test preferences|[PerformanceTestConfig](#schemaperformancetestconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle POST request for load test preferences

<a id="opIdidPostLoadPreferences"></a>

> Code samples

```bash
curl https://example.com/api/user/prefs/perf \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Cookie: token=${API_KEY}" \
  -d '{
    "clients": [
      {
        "body": "string",
        "connections": 0,
        "content_type": "string",
        "cookies": {
          "property1": "string",
          "property2": "string"
        },
        "endpoint_urls": [
          "string"
        ],
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "internal": true,
        "load_generator": "string",
        "protocol": 0,
        "rps": 0
      }
    ],
    "duration": "string",
    "id": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "smp_version": "string"
  }'
```

`POST /api/user/prefs/perf`

Used for persisting load test preferences

> Body parameter

```json
{
  "clients": [
    {
      "body": "string",
      "connections": 0,
      "content_type": "string",
      "cookies": {
        "property1": "string",
        "property2": "string"
      },
      "endpoint_urls": [
        "string"
      ],
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "internal": true,
      "load_generator": "string",
      "protocol": 0,
      "rps": 0
    }
  ],
  "duration": "string",
  "id": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "smp_version": "string"
}
```

<h3 id="handle-post-request-for-load-test-preferences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PerformanceTestConfig](#schemaperformancetestconfig)|false|none|
|» clients|body|[[PerformanceTestConfig_Client](#schemaperformancetestconfig_client)]|false|Single or distributed load generators|
|» duration|body|string|false|Length of time the endpoint will be under load|
|» id|body|string|false|none|
|» labels|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|none|
|» smp_version|body|string|false|Spec version|

<h3 id="handle-post-request-for-load-test-preferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle DELETE request for load test preferences

<a id="opIdidDeleteLoadPreferences"></a>

> Code samples

```bash
curl https://example.com/api/user/prefs/perf \
  -X DELETE \
  -H "Cookie: token=${API_KEY}"
```

`DELETE /api/user/prefs/perf`

Used for deleting load test preferences

<h3 id="handle-delete-request-for-load-test-preferences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|query|string(uuid)|false|none|

<h3 id="handle-delete-request-for-load-test-preferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for tokens

<a id="opIdidGetTokenProvider"></a>

> Code samples

```bash
curl https://example.com/api/user/token \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/user/token`

Returns token from the actual provider in a file
resposese:
200:

<h3 id="handle-get-request-for-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle POST request for tokens

<a id="opIdidPostTokenProvider"></a>

> Code samples

```bash
curl https://example.com/api/user/token \
  -X POST \
  -H "Cookie: token=${API_KEY}"
```

`POST /api/user/token`

Receives token from the actual provider
resposese:
200:

<h3 id="handle-post-request-for-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

<h1 id="meshery-api-performanceapi">PerformanceAPI</h1>

## Handle GET requests for performance profiles

<a id="opIdidGetPerformanceProfiles"></a>

> Code samples

```bash
curl https://example.com/api/user/performance/profiles \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/user/performance/profiles`

Returns the list of all the performance profiles saved by the current user

> Example responses

> 200 Response

```json
{
  "page": 0,
  "page_size": 0,
  "profiles": [
    {
      "concurrent_request": 0,
      "content_type": "string",
      "created_at": {},
      "duration": "string",
      "endpoints": [
        "string"
      ],
      "id": [
        0
      ],
      "last_run": {},
      "load_generators": [
        "string"
      ],
      "name": "string",
      "qps": 0,
      "request_body": "string",
      "request_cookies": "string",
      "request_headers": "string",
      "schedule": [
        0
      ],
      "service_mesh": "string",
      "total_results": 0,
      "updated_at": {}
    }
  ],
  "total_count": 0
}
```

<h3 id="handle-get-requests-for-performance-profiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns all the performance profiles|[PerformanceProfilesAPIResponse](#schemaperformanceprofilesapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle POST requests for saving performance profile

<a id="opIdidSavePerformanceProfile"></a>

> Code samples

```bash
curl https://example.com/api/user/performance/profiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}" \
  -d '{
    "concurrent_request": 0,
    "duration": "string",
    "endpoints": [
      "string"
    ],
    "load_generators": [
      "string"
    ],
    "name": "string",
    "qps": 0,
    "service_mesh": "string"
  }'
```

`POST /api/user/performance/profiles`

Save performance profile using the current provider's persistence mechanism

> Body parameter

```json
{
  "concurrent_request": 0,
  "duration": "string",
  "endpoints": [
    "string"
  ],
  "load_generators": [
    "string"
  ],
  "name": "string",
  "qps": 0,
  "service_mesh": "string"
}
```

<h3 id="handle-post-requests-for-saving-performance-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PerformanceProfileParameters](#schemaperformanceprofileparameters)|false|none|
|» concurrent_request|body|integer(int64)|false|number of concurrent requests|
|» duration|body|string|false|duration of tests e.g. 30s|
|» endpoints|body|[string]|false|array of urls of performance results|
|» load_generators|body|[string]|false|array of load generators|
|» name|body|string|false|name of performance profile|
|» qps|body|integer(int64)|false|qps in integer|
|» service_mesh|body|string|false|service mesh for performance tests|

> Example responses

> 200 Response

```json
{
  "concurrent_request": 0,
  "content_type": "string",
  "created_at": {},
  "duration": "string",
  "endpoints": [
    "string"
  ],
  "id": [
    0
  ],
  "last_run": {},
  "load_generators": [
    "string"
  ],
  "name": "string",
  "qps": 0,
  "request_body": "string",
  "request_cookies": "string",
  "request_headers": "string",
  "schedule": [
    0
  ],
  "service_mesh": "string",
  "total_results": 0,
  "updated_at": {}
}
```

<h3 id="handle-post-requests-for-saving-performance-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a single performance profile|[PerformanceProfile](#schemaperformanceprofile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handles GET requests for performance results

<a id="opIdidGetAllPerformanceResults"></a>

> Code samples

```bash
curl https://example.com/api/user/performance/profiles/results \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/user/performance/profiles/results`

Returns pages of all the performance results from Remote Provider

> Example responses

> 200 Response

```json
{
  "page": 0,
  "page_size": 0,
  "results": [
    {
      "mesh": "string",
      "meshery_id": [
        0
      ],
      "name": "string",
      "performance_profile": [
        0
      ],
      "runner_results": {
        "ActualDuration": 0,
        "ActualQPS": 0,
        "DurationHistogram": {
          "Avg": 0,
          "Max": 0,
          "Min": 0,
          "Percentiles": [
            {
              "Percentile": 0,
              "Value": 0
            }
          ]
        },
        "StartTime": "1970-01-01T00:00:00Z",
        "URL": "string",
        "load-generator": "string"
      },
      "server_board_config": {},
      "server_metrics": {},
      "test_start_time": "1970-01-01T00:00:00Z",
      "user_id": [
        0
      ]
    }
  ],
  "total_count": 0
}
```

<h3 id="handles-get-requests-for-performance-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns all performance results|[PerformanceResultsAPIResponse](#schemaperformanceresultsapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET requests for performance results of a profile

<a id="opIdidGetSinglePerformanceProfile"></a>

> Code samples

```bash
curl https://example.com/api/user/performance/profiles/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/user/performance/profiles/{id}`

Returns single performance profile with the given id

<h3 id="handle-get-requests-for-performance-results-of-a-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|id for a specific|

> Example responses

> 200 Response

```json
{
  "concurrent_request": 0,
  "content_type": "string",
  "created_at": {},
  "duration": "string",
  "endpoints": [
    "string"
  ],
  "id": [
    0
  ],
  "last_run": {},
  "load_generators": [
    "string"
  ],
  "name": "string",
  "qps": 0,
  "request_body": "string",
  "request_cookies": "string",
  "request_headers": "string",
  "schedule": [
    0
  ],
  "service_mesh": "string",
  "total_results": 0,
  "updated_at": {}
}
```

<h3 id="handle-get-requests-for-performance-results-of-a-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a single performance profile|[PerformanceProfile](#schemaperformanceprofile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle Delete requests for performance profiles

<a id="opIdidDeletePerformanceProfile"></a>

> Code samples

```bash
curl https://example.com/api/user/performance/profiles/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Cookie: token=${API_KEY}"
```

`DELETE /api/user/performance/profiles/{id}`

Deletes a performance profile with the given id

<h3 id="handle-delete-requests-for-performance-profiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|id for a specific|

<h3 id="handle-delete-requests-for-performance-profiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request for results of a profile

<a id="opIdidGETProfileResults"></a>

> Code samples

```bash
curl https://example.com/api/user/performance/profiles/497f6eca-6276-4993-bfeb-53cbbbba6f08/results \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/user/performance/profiles/{id}/results`

Fetchs pages of results from Remote Provider for the given id

<h3 id="handle-get-request-for-results-of-a-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|id for a specific|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "page_size": 0,
  "results": [
    {
      "mesh": "string",
      "meshery_id": [
        0
      ],
      "name": "string",
      "performance_profile": [
        0
      ],
      "runner_results": {
        "ActualDuration": 0,
        "ActualQPS": 0,
        "DurationHistogram": {
          "Avg": 0,
          "Max": 0,
          "Min": 0,
          "Percentiles": [
            {
              "Percentile": 0,
              "Value": 0
            }
          ]
        },
        "StartTime": "1970-01-01T00:00:00Z",
        "URL": "string",
        "load-generator": "string"
      },
      "server_board_config": {},
      "server_metrics": {},
      "test_start_time": "1970-01-01T00:00:00Z",
      "user_id": [
        0
      ]
    }
  ],
  "total_count": 0
}
```

<h3 id="handle-get-request-for-results-of-a-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns all performance results|[PerformanceResultsAPIResponse](#schemaperformanceresultsapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET request to run a performance test

<a id="opIdidRunPerformanceTest"></a>

> Code samples

```bash
curl https://example.com/api/user/performance/profiles/string/run \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/user/performance/profiles/{id}/run`

Runs the load test with the given parameters

<h3 id="handle-get-request-to-run-a-performance-test-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Automatically added|

<h3 id="handle-get-request-to-run-a-performance-test-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

<h1 id="meshery-api-schedulesapi">SchedulesAPI</h1>

## Handle GET reqeuest for Schedules

<a id="opIdidGetSchedules"></a>

> Code samples

```bash
curl https://example.com/api/user/schedules \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/user/schedules`

Returns the list of all the schedules saved by the current user

> Example responses

> 200 Response

```json
{
  "page": 0,
  "page_size": 0,
  "schedules": [
    {
      "cron_expression": "string",
      "id": [
        0
      ]
    }
  ],
  "total_count": 0
}
```

<h3 id="handle-get-reqeuest-for-schedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns List of saved schedules|[SchedulesAPIResponse](#schemaschedulesapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle POST reqeuest for Schedules

<a id="opIdidPostSchedules"></a>

> Code samples

```bash
curl https://example.com/api/user/schedules \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`POST /api/user/schedules`

Save schedule using the current provider's persistence mechanism

> Example responses

> 200 Response

```json
{
  "cron_expression": "string",
  "id": [
    0
  ]
}
```

<h3 id="handle-post-reqeuest-for-schedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a single schedules|[Schedule](#schemaschedule)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle GET reqeuest for Schedules

<a id="opIdidGetSingleSchedule"></a>

> Code samples

```bash
curl https://example.com/api/user/schedules/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`GET /api/user/schedules/{id}`

Fetches and returns the schedule with the given id

<h3 id="handle-get-reqeuest-for-schedules-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|id for a specific|

> Example responses

> 200 Response

```json
{
  "cron_expression": "string",
  "id": [
    0
  ]
}
```

<h3 id="handle-get-reqeuest-for-schedules-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a single schedules|[Schedule](#schemaschedule)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Handle DELETE reqeuest for Schedules

<a id="opIdidDeleteSchedules"></a>

> Code samples

```bash
curl https://example.com/api/user/schedules/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: token=${API_KEY}"
```

`DELETE /api/user/schedules/{id}`

Deletes a schedule with the given id

<h3 id="handle-delete-reqeuest-for-schedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|id for a specific|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "page_size": 0,
  "schedules": [
    {
      "cron_expression": "string",
      "id": [
        0
      ]
    }
  ],
  "total_count": 0
}
```

<h3 id="handle-delete-reqeuest-for-schedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns List of saved schedules|[SchedulesAPIResponse](#schemaschedulesapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

# Schemas

<h2 id="tocS_Adapter">Adapter</h2>
<!-- backwards compatibility -->
<a id="schemaadapter"></a>
<a id="schema_Adapter"></a>
<a id="tocSadapter"></a>
<a id="tocsadapter"></a>

```json
{
  "adapter_location": "string",
  "git_commit_sha": "string",
  "name": "string",
  "ops": [
    {
      "category": 0,
      "key": "string",
      "value": "string"
    }
  ],
  "version": "string"
}
```

Adapter represents an adapter in Meshery

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adapter_location|string|false|none|none|
|git_commit_sha|string|false|none|none|
|name|string|false|none|none|
|ops|[[SupportedOperation](#schemasupportedoperation)]|false|none|none|
|version|string|false|none|none|

<h2 id="tocS_Alert">Alert</h2>
<!-- backwards compatibility -->
<a id="schemaalert"></a>
<a id="schema_Alert"></a>
<a id="tocSalert"></a>
<a id="tocsalert"></a>

```json
{
  "alertRuleTags": {
    "property1": "string",
    "property2": "string"
  },
  "conditions": [
    {
      "evaluator": {
        "params": [
          0
        ],
        "type": "string"
      },
      "operator": {
        "type": "string"
      },
      "query": {
        "params": [
          "string"
        ]
      },
      "reducer": {
        "params": [
          "string"
        ],
        "type": "string"
      },
      "type": "string"
    }
  ],
  "executionErrorState": "string",
  "for": "string",
  "frequency": "string",
  "handler": 0,
  "message": "string",
  "name": "string",
  "noDataState": "string",
  "notifications": [
    {
      "disableResolveMessage": true,
      "frequency": "string",
      "id": 0,
      "isDefault": true,
      "name": "string",
      "sendReminder": true,
      "settings": {},
      "type": "string",
      "uid": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alertRuleTags|object|false|none|none|
|conditions|[[AlertCondition](#schemaalertcondition)]|false|none|none|
|executionErrorState|string|false|none|none|
|for|string|false|none|none|
|frequency|string|false|none|none|
|handler|integer(int64)|false|none|none|
|message|string|false|none|none|
|name|string|false|none|none|
|noDataState|string|false|none|none|
|notifications|[[AlertNotification](#schemaalertnotification)]|false|none|none|

<h2 id="tocS_AlertCondition">AlertCondition</h2>
<!-- backwards compatibility -->
<a id="schemaalertcondition"></a>
<a id="schema_AlertCondition"></a>
<a id="tocSalertcondition"></a>
<a id="tocsalertcondition"></a>

```json
{
  "evaluator": {
    "params": [
      0
    ],
    "type": "string"
  },
  "operator": {
    "type": "string"
  },
  "query": {
    "params": [
      "string"
    ]
  },
  "reducer": {
    "params": [
      "string"
    ],
    "type": "string"
  },
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluator|[AlertEvaluator](#schemaalertevaluator)|false|none|none|
|operator|[AlertOperator](#schemaalertoperator)|false|none|none|
|query|[AlertQuery](#schemaalertquery)|false|none|none|
|reducer|[AlertReducer](#schemaalertreducer)|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_AlertEvaluator">AlertEvaluator</h2>
<!-- backwards compatibility -->
<a id="schemaalertevaluator"></a>
<a id="schema_AlertEvaluator"></a>
<a id="tocSalertevaluator"></a>
<a id="tocsalertevaluator"></a>

```json
{
  "params": [
    0
  ],
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|params|[number(double)]|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_AlertNotification">AlertNotification</h2>
<!-- backwards compatibility -->
<a id="schemaalertnotification"></a>
<a id="schema_AlertNotification"></a>
<a id="tocSalertnotification"></a>
<a id="tocsalertnotification"></a>

```json
{
  "disableResolveMessage": true,
  "frequency": "string",
  "id": 0,
  "isDefault": true,
  "name": "string",
  "sendReminder": true,
  "settings": {},
  "type": "string",
  "uid": "string"
}
```

AlertNotification as described in the doc
https://grafana.com/docs/grafana/latest/http_api/alerting_notification_channels/

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disableResolveMessage|boolean|false|none|none|
|frequency|string|false|none|none|
|id|integer(int64)|false|none|none|
|isDefault|boolean|false|none|none|
|name|string|false|none|none|
|sendReminder|boolean|false|none|none|
|settings|object|false|none|none|
|type|string|false|none|none|
|uid|string|false|none|none|

<h2 id="tocS_AlertOperator">AlertOperator</h2>
<!-- backwards compatibility -->
<a id="schemaalertoperator"></a>
<a id="schema_AlertOperator"></a>
<a id="tocSalertoperator"></a>
<a id="tocsalertoperator"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|

<h2 id="tocS_AlertQuery">AlertQuery</h2>
<!-- backwards compatibility -->
<a id="schemaalertquery"></a>
<a id="schema_AlertQuery"></a>
<a id="tocSalertquery"></a>
<a id="tocsalertquery"></a>

```json
{
  "params": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|params|[string]|false|none|none|

<h2 id="tocS_AlertReducer">AlertReducer</h2>
<!-- backwards compatibility -->
<a id="schemaalertreducer"></a>
<a id="schema_AlertReducer"></a>
<a id="tocSalertreducer"></a>
<a id="tocsalertreducer"></a>

```json
{
  "params": [
    "string"
  ],
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|params|[string]|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_ApplicationsAPIResponse">ApplicationsAPIResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationsapiresponse"></a>
<a id="schema_ApplicationsAPIResponse"></a>
<a id="tocSapplicationsapiresponse"></a>
<a id="tocsapplicationsapiresponse"></a>

```json
{
  "applications": [
    {
      "application_file": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "id": [
        0
      ],
      "location": {
        "property1": {},
        "property2": {}
      },
      "name": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "user_id": "string"
    }
  ],
  "page": 0,
  "page_size": 0,
  "total_count": 0
}
```

ApplicationsAPIResponse response retruned by patternfile endpoint on meshery server

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applications|[[MesheryApplication](#schemamesheryapplication)]|false|none|none|
|page|integer(uint64)|false|none|none|
|page_size|integer(uint64)|false|none|none|
|total_count|integer(uint64)|false|none|none|

<h2 id="tocS_AuthenticateOKBody">AuthenticateOKBody</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticateokbody"></a>
<a id="schema_AuthenticateOKBody"></a>
<a id="tocSauthenticateokbody"></a>
<a id="tocsauthenticateokbody"></a>

```json
{
  "IdentityToken": "string",
  "Status": "string"
}
```

AuthenticateOKBody authenticate o k body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityToken|string|true|none|An opaque token used to authenticate a user after a successful login|
|Status|string|true|none|The status of the authentication|

<h2 id="tocS_Axis">Axis</h2>
<!-- backwards compatibility -->
<a id="schemaaxis"></a>
<a id="schema_Axis"></a>
<a id="tocSaxis"></a>
<a id="tocsaxis"></a>

```json
{
  "decimals": 0,
  "format": "string",
  "label": "string",
  "logBase": 0,
  "max": {
    "Valid": true,
    "Value": 0
  },
  "min": {
    "Valid": true,
    "Value": 0
  },
  "show": true
}
```

for a graph panel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|decimals|integer(int64)|false|none|none|
|format|string|false|none|none|
|label|string|false|none|none|
|logBase|integer(int64)|false|none|none|
|max|[FloatString](#schemafloatstring)|false|none|none|
|min|[FloatString](#schemafloatstring)|false|none|none|
|show|boolean|false|none|none|

<h2 id="tocS_BoolString">BoolString</h2>
<!-- backwards compatibility -->
<a id="schemaboolstring"></a>
<a id="schema_BoolString"></a>
<a id="tocSboolstring"></a>
<a id="tocsboolstring"></a>

```json
{
  "Flag": true,
  "Value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Flag|boolean|false|none|none|
|Value|string|false|none|none|

<h2 id="tocS_Capabilities">Capabilities</h2>
<!-- backwards compatibility -->
<a id="schemacapabilities"></a>
<a id="schema_Capabilities"></a>
<a id="tocScapabilities"></a>
<a id="tocscapabilities"></a>

```json
[
  {
    "endpoint": "string",
    "feature": "string"
  }
]
```

Capabilities is the collection of capability

<h2 id="tocS_Capability">Capability</h2>
<!-- backwards compatibility -->
<a id="schemacapability"></a>
<a id="schema_Capability"></a>
<a id="tocScapability"></a>
<a id="tocscapability"></a>

```json
{
  "endpoint": "string",
  "feature": "string"
}
```

Capability is a capability of Provider indicating whether a feature is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|false|none|none|
|feature|[Feature](#schemafeature)|false|none|Feature is a type to store the features of the provider|

<h2 id="tocS_ClientIPConfig">ClientIPConfig</h2>
<!-- backwards compatibility -->
<a id="schemaclientipconfig"></a>
<a id="schema_ClientIPConfig"></a>
<a id="tocSclientipconfig"></a>
<a id="tocsclientipconfig"></a>

```json
{
  "timeoutSeconds": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeoutSeconds|integer(int32)|false|none|timeoutSeconds specifies the seconds of ClientIP type session sticky time.<br>The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP".<br>Default value is 10800(for 3 hours).<br>+optional|

<h2 id="tocS_Column">Column</h2>
<!-- backwards compatibility -->
<a id="schemacolumn"></a>
<a id="schema_Column"></a>
<a id="tocScolumn"></a>
<a id="tocscolumn"></a>

```json
{
  "text": "string",
  "value": "string"
}
```

for a table

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_ColumnStyle">ColumnStyle</h2>
<!-- backwards compatibility -->
<a id="schemacolumnstyle"></a>
<a id="schema_ColumnStyle"></a>
<a id="tocScolumnstyle"></a>
<a id="tocscolumnstyle"></a>

```json
{
  "alias": "string",
  "colorMode": "string",
  "colors": [
    "string"
  ],
  "dateFormat": "string",
  "decimals": 0,
  "link": true,
  "linkTargetBlank": true,
  "linkTooltip": "string",
  "linkUrl": "string",
  "mappingType": 0,
  "pattern": "string",
  "thresholds": [
    "string"
  ],
  "type": "string",
  "unit": "string",
  "valueMaps": [
    {
      "op": "string",
      "text": "string",
      "value": "string"
    }
  ]
}
```

for a table

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|none|none|
|colorMode|string|false|none|none|
|colors|[string]|false|none|none|
|dateFormat|string|false|none|none|
|decimals|integer(uint64)|false|none|none|
|link|boolean|false|none|none|
|linkTargetBlank|boolean|false|none|none|
|linkTooltip|string|false|none|none|
|linkUrl|string|false|none|none|
|mappingType|integer(int64)|false|none|none|
|pattern|string|false|none|none|
|thresholds|[string]|false|none|none|
|type|string|false|none|none|
|unit|string|false|none|none|
|valueMaps|[[ValueMap](#schemavaluemap)]|false|none|none|

<h2 id="tocS_ContainerChangeResponseItem">ContainerChangeResponseItem</h2>
<!-- backwards compatibility -->
<a id="schemacontainerchangeresponseitem"></a>
<a id="schema_ContainerChangeResponseItem"></a>
<a id="tocScontainerchangeresponseitem"></a>
<a id="tocscontainerchangeresponseitem"></a>

```json
{
  "Kind": 0,
  "Path": "string"
}
```

ContainerChangeResponseItem change item in response to ContainerChanges operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Kind|integer(uint8)|true|none|Kind of change|
|Path|string|true|none|Path to file that has changed|

<h2 id="tocS_ContainerCreateCreatedBody">ContainerCreateCreatedBody</h2>
<!-- backwards compatibility -->
<a id="schemacontainercreatecreatedbody"></a>
<a id="schema_ContainerCreateCreatedBody"></a>
<a id="tocScontainercreatecreatedbody"></a>
<a id="tocscontainercreatecreatedbody"></a>

```json
{
  "Id": "string",
  "Warnings": [
    "string"
  ]
}
```

ContainerCreateCreatedBody OK response to ContainerCreate operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|true|none|The ID of the created container|
|Warnings|[string]|true|none|Warnings encountered when creating the container|

<h2 id="tocS_ContainerTopOKBody">ContainerTopOKBody</h2>
<!-- backwards compatibility -->
<a id="schemacontainertopokbody"></a>
<a id="schema_ContainerTopOKBody"></a>
<a id="tocScontainertopokbody"></a>
<a id="tocscontainertopokbody"></a>

```json
{
  "Processes": [
    [
      "string"
    ]
  ],
  "Titles": [
    "string"
  ]
}
```

ContainerTopOKBody OK response to ContainerTop operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Processes|[[string]]|true|none|Each process running in the container, where each is process is an array of values corresponding to the titles|
|Titles|[string]|true|none|The ps column titles|

<h2 id="tocS_ContainerUpdateOKBody">ContainerUpdateOKBody</h2>
<!-- backwards compatibility -->
<a id="schemacontainerupdateokbody"></a>
<a id="schema_ContainerUpdateOKBody"></a>
<a id="tocScontainerupdateokbody"></a>
<a id="tocscontainerupdateokbody"></a>

```json
{
  "Warnings": [
    "string"
  ]
}
```

ContainerUpdateOKBody OK response to ContainerUpdate operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Warnings|[string]|true|none|warnings|

<h2 id="tocS_ContainerWaitOKBody">ContainerWaitOKBody</h2>
<!-- backwards compatibility -->
<a id="schemacontainerwaitokbody"></a>
<a id="schema_ContainerWaitOKBody"></a>
<a id="tocScontainerwaitokbody"></a>
<a id="tocscontainerwaitokbody"></a>

```json
{
  "Error": {
    "Message": "string"
  },
  "StatusCode": 0
}
```

ContainerWaitOKBody OK response to ContainerWait operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Error|[ContainerWaitOKBodyError](#schemacontainerwaitokbodyerror)|true|none|ContainerWaitOKBodyError container waiting error, if any|
|StatusCode|integer(int64)|true|none|Exit code of the container|

<h2 id="tocS_ContainerWaitOKBodyError">ContainerWaitOKBodyError</h2>
<!-- backwards compatibility -->
<a id="schemacontainerwaitokbodyerror"></a>
<a id="schema_ContainerWaitOKBodyError"></a>
<a id="tocScontainerwaitokbodyerror"></a>
<a id="tocscontainerwaitokbodyerror"></a>

```json
{
  "Message": "string"
}
```

ContainerWaitOKBodyError container waiting error, if any

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|Details of an error|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|The error message.|

<h2 id="tocS_Extensions">Extensions</h2>
<!-- backwards compatibility -->
<a id="schemaextensions"></a>
<a id="schema_Extensions"></a>
<a id="tocSextensions"></a>
<a id="tocsextensions"></a>

```json
{
  "graphql": [
    {
      "component": "string",
      "path": "string"
    }
  ],
  "navigator": [
    {}
  ],
  "user_prefs": [
    {
      "component": "string"
    }
  ]
}
```

Extensions defines the UI extension points

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|graphql|[GraphQLExtensions](#schemagraphqlextensions)|false|none|GraphQLExtensions is a collection of GraphQLExtension endpoints|
|navigator|[NavigatorExtensions](#schemanavigatorextensions)|false|none|NavigatorExtensions is a collection of NavigatorExtension|
|user_prefs|[UserPrefsExtensions](#schemauserprefsextensions)|false|none|UserPrefsExtensions is a collection of UserPrefsExtension|

<h2 id="tocS_Feature">Feature</h2>
<!-- backwards compatibility -->
<a id="schemafeature"></a>
<a id="schema_Feature"></a>
<a id="tocSfeature"></a>
<a id="tocsfeature"></a>

```json
"string"
```

Feature is a type to store the features of the provider

<h2 id="tocS_FieldConfig">FieldConfig</h2>
<!-- backwards compatibility -->
<a id="schemafieldconfig"></a>
<a id="schema_FieldConfig"></a>
<a id="tocSfieldconfig"></a>
<a id="tocsfieldconfig"></a>

```json
{
  "defaults": {
    "threshold": {
      "mode": "string",
      "steps": [
        {
          "color": "string",
          "value": "string"
        }
      ]
    },
    "unit": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaults|object|false|none|none|

<h2 id="tocS_FieldsV1">FieldsV1</h2>
<!-- backwards compatibility -->
<a id="schemafieldsv1"></a>
<a id="schema_FieldsV1"></a>
<a id="tocSfieldsv1"></a>
<a id="tocsfieldsv1"></a>

```json
{}
```

Each key is either a '.' representing the field itself, and will always map to an empty set,
or a string representing a sub-field or item. The string will follow one of these four formats:
'f:<name>', where <name> is the name of a field in a struct, or key in a map
'v:<value>', where <value> is the exact json formatted value of a list item
'i:<index>', where <index> is position of a item in a list
'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values
If a key maps to an empty Fields value, the field that key represents is part of the set.

The exact format is defined in sigs.k8s.io/structured-merge-diff

<h2 id="tocS_FiltersAPIResponse">FiltersAPIResponse</h2>
<!-- backwards compatibility -->
<a id="schemafiltersapiresponse"></a>
<a id="schema_FiltersAPIResponse"></a>
<a id="tocSfiltersapiresponse"></a>
<a id="tocsfiltersapiresponse"></a>

```json
{
  "filters": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "filter_file": "string",
      "id": [
        0
      ],
      "location": {
        "property1": {},
        "property2": {}
      },
      "name": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "user_id": "string"
    }
  ],
  "page": 0,
  "page_size": 0,
  "total_count": 0
}
```

FiltersAPIResponse response retruned by filterfile endpoint on meshery server

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|[[MesheryFilter](#schemamesheryfilter)]|false|none|none|
|page|integer(uint64)|false|none|none|
|page_size|integer(uint64)|false|none|none|
|total_count|integer(uint64)|false|none|none|

<h2 id="tocS_FloatString">FloatString</h2>
<!-- backwards compatibility -->
<a id="schemafloatstring"></a>
<a id="schema_FloatString"></a>
<a id="tocSfloatstring"></a>
<a id="tocsfloatstring"></a>

```json
{
  "Valid": true,
  "Value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Valid|boolean|false|none|none|
|Value|number(double)|false|none|none|

<h2 id="tocS_Gauge">Gauge</h2>
<!-- backwards compatibility -->
<a id="schemagauge"></a>
<a id="schema_Gauge"></a>
<a id="tocSgauge"></a>
<a id="tocsgauge"></a>

```json
{
  "maxValue": 0,
  "minValue": 0,
  "show": true,
  "thresholdLabels": true,
  "thresholdMarkers": true
}
```

for a stat

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxValue|number(float)|false|none|none|
|minValue|number(float)|false|none|none|
|show|boolean|false|none|none|
|thresholdLabels|boolean|false|none|none|
|thresholdMarkers|boolean|false|none|none|

<h2 id="tocS_Grafana">Grafana</h2>
<!-- backwards compatibility -->
<a id="schemagrafana"></a>
<a id="schema_Grafana"></a>
<a id="tocSgrafana"></a>
<a id="tocsgrafana"></a>

```json
{
  "grafanaAPIKey": "string",
  "grafanaURL": "string",
  "selectedBoardsConfigs": [
    {
      "board": {
        "org_id": 0,
        "panels": [
          {
            "alert": {
              "alertRuleTags": {
                "property1": "string",
                "property2": "string"
              },
              "conditions": [
                {
                  "evaluator": {
                    "params": [
                      0
                    ],
                    "type": "string"
                  },
                  "operator": {
                    "type": "string"
                  },
                  "query": {
                    "params": [
                      "string"
                    ]
                  },
                  "reducer": {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  },
                  "type": "string"
                }
              ],
              "executionErrorState": "string",
              "for": "string",
              "frequency": "string",
              "handler": 0,
              "message": "string",
              "name": "string",
              "noDataState": "string",
              "notifications": [
                {
                  "disableResolveMessage": true,
                  "frequency": "string",
                  "id": 0,
                  "isDefault": true,
                  "name": "string",
                  "sendReminder": true,
                  "settings": {},
                  "type": "string",
                  "uid": "string"
                }
              ]
            },
            "aliasColors": {},
            "bars": true,
            "cards": {
              "cardPadding": 0,
              "cardRound": 0
            },
            "collapsed": true,
            "color": {
              "cardColor": "string",
              "colorScale": "string",
              "colorScheme": "string",
              "exponent": 0,
              "max": 0,
              "min": 0,
              "mode": "string"
            },
            "colorBackground": true,
            "colorValue": true,
            "colors": [
              "string"
            ],
            "columns": [
              {
                "text": "string",
                "value": "string"
              }
            ],
            "content": "string",
            "dashLength": 0,
            "dashboardTags": [
              "string"
            ],
            "dashes": true,
            "dataFormat": "string",
            "datasource": "string",
            "decimals": 0,
            "description": "string",
            "editable": true,
            "error": true,
            "fieldConfig": {
              "defaults": {
                "threshold": {
                  "mode": "string",
                  "steps": [
                    {
                      "color": "string",
                      "value": "string"
                    }
                  ]
                },
                "unit": "string"
              }
            },
            "fill": 0,
            "folderId": 0,
            "format": "string",
            "gauge": {
              "maxValue": 0,
              "minValue": 0,
              "show": true,
              "thresholdLabels": true,
              "thresholdMarkers": true
            },
            "gridPos": {
              "h": 0,
              "w": 0,
              "x": 0,
              "y": 0
            },
            "headings": true,
            "height": {},
            "hideTimeOverride": true,
            "hideZeroBuckets": true,
            "highlightCards": true,
            "id": 0,
            "isNew": true,
            "leftYAxisLabel": "string",
            "legend": {
              "alignAsTable": true,
              "avg": true,
              "current": true,
              "hideEmpty": true,
              "hideZero": true,
              "max": true,
              "min": true,
              "rightSide": true,
              "show": true,
              "sideWidth": 0,
              "total": true,
              "values": true
            },
            "limit": 0,
            "lines": true,
            "linewidth": 0,
            "links": [
              {
                "asDropdown": true,
                "dashUri": "string",
                "dashboard": "string",
                "icon": "string",
                "includeVars": true,
                "keepTime": true,
                "params": "string",
                "tags": [
                  "string"
                ],
                "targetBlank": true,
                "title": "string",
                "tooltip": "string",
                "type": "string",
                "url": "string"
              }
            ],
            "mappingType": 0,
            "mappingTypes": [
              {
                "name": "string",
                "value": 0
              }
            ],
            "maxDataPoints": {
              "Valid": true,
              "Value": 0
            },
            "minSpan": 0,
            "mode": "string",
            "nameFilter": "string",
            "nullPointMode": "string",
            "onlyAlertsOnDashboard": true,
            "options": {
              "colorMode": "string",
              "content": "string",
              "displayMode": "string",
              "graphMode": "string",
              "justifyMode": "string",
              "mode": "string",
              "orientation": "string",
              "reduceOptions": {
                "calcs": [
                  "string"
                ],
                "fields": "string",
                "values": true
              },
              "textMode": "string"
            },
            "pageSize": 0,
            "panels": [
              {}
            ],
            "percentage": true,
            "pointradius": 0,
            "points": true,
            "postfix": "string",
            "postfixFontSize": "string",
            "prefix": "string",
            "prefixFontSize": "string",
            "query": "string",
            "rangeMaps": [
              {
                "from": "string",
                "text": "string",
                "to": "string"
              }
            ],
            "recent": true,
            "renderer": "string",
            "repeat": "string",
            "repeatPanelId": 0,
            "reverseYBuckets": true,
            "rightYAxisLabel": "string",
            "scopedVars": {
              "property1": {
                "selected": true,
                "text": "string",
                "value": "string"
              },
              "property2": {
                "selected": true,
                "text": "string",
                "value": "string"
              }
            },
            "scroll": true,
            "search": true,
            "seriesOverrides": [
              {
                "alias": "string",
                "bars": true,
                "color": "string",
                "dashes": true,
                "fill": 0,
                "fillBelowTo": "string",
                "legend": true,
                "lines": true,
                "linewidth": 0,
                "nullPointMode": "string",
                "stack": {
                  "Flag": true,
                  "Value": "string"
                },
                "transform": "string",
                "yaxis": 0,
                "zindex": 0
              }
            ],
            "show": "string",
            "showHeader": true,
            "sort": {
              "col": 0,
              "desc": true
            },
            "sortOrder": 0,
            "spaceLength": 0,
            "span": 0,
            "sparkline": {
              "fillColor": "string",
              "full": true,
              "lineColor": "string",
              "show": true,
              "ymax": 0,
              "ymin": 0
            },
            "stack": true,
            "starred": true,
            "stateFilter": [
              "string"
            ],
            "steppedLine": true,
            "styles": [
              {
                "alias": "string",
                "colorMode": "string",
                "colors": [
                  "string"
                ],
                "dateFormat": "string",
                "decimals": 0,
                "link": true,
                "linkTargetBlank": true,
                "linkTooltip": "string",
                "linkUrl": "string",
                "mappingType": 0,
                "pattern": "string",
                "thresholds": [
                  "string"
                ],
                "type": "string",
                "unit": "string",
                "valueMaps": [
                  {
                    "op": "string",
                    "text": "string",
                    "value": "string"
                  }
                ]
              }
            ],
            "tags": [
              "string"
            ],
            "targets": [
              {
                "alias": "string",
                "aliasBy": "string",
                "alignOptions": [
                  {
                    "expanded": true,
                    "label": "string",
                    "options": [
                      {
                        "label": "string",
                        "metricKinds": [
                          "string"
                        ],
                        "text": "string",
                        "value": "string",
                        "valueTypes": [
                          "string"
                        ]
                      }
                    ]
                  }
                ],
                "alignmentPeriod": "string",
                "bucketAggs": [
                  {
                    "field": "string",
                    "id": "string",
                    "settings": {
                      "interval": "string",
                      "min_doc_count": {},
                      "order": "string",
                      "orderBy": "string",
                      "size": "string"
                    },
                    "type": "string"
                  }
                ],
                "crossSeriesReducer": "string",
                "datasource": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "dsType": "string",
                "expr": "string",
                "filters": [
                  "string"
                ],
                "format": "string",
                "group": [
                  {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ],
                "groupBys": [
                  "string"
                ],
                "hide": true,
                "instant": true,
                "interval": "string",
                "intervalFactor": 0,
                "legendFormat": "string",
                "measurement": "string",
                "metricColumn": "string",
                "metricKind": "string",
                "metricName": "string",
                "metricType": "string",
                "metrics": [
                  {
                    "field": "string",
                    "id": "string",
                    "type": "string"
                  }
                ],
                "namespace": "string",
                "perSeriesAligner": "string",
                "period": "string",
                "projectName": "string",
                "query": "string",
                "rawQuery": true,
                "rawSql": "string",
                "refId": "string",
                "region": "string",
                "select": [
                  [
                    {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ]
                ],
                "statistics": [
                  "string"
                ],
                "step": 0,
                "table": "string",
                "target": "string",
                "timeColumn": "string",
                "timeField": "string",
                "valueType": "string",
                "where": [
                  {
                    "datatype": "string",
                    "name": "string",
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ]
              }
            ],
            "thresholds": "string",
            "timeFrom": "string",
            "timeShift": "string",
            "title": "string",
            "tooltip": {
              "msResolution": true,
              "shared": true,
              "sort": 0,
              "value_type": "string"
            },
            "tooltipDecimals": 0,
            "transform": "string",
            "transparent": true,
            "type": "string",
            "valueFontSize": "string",
            "valueMaps": [
              {
                "op": "string",
                "text": "string",
                "value": "string"
              }
            ],
            "valueName": "string",
            "x-axis": true,
            "xAxis": {
              "show": true
            },
            "xBucketNumber": 0,
            "xBucketSize": "string",
            "xaxis": {
              "decimals": 0,
              "format": "string",
              "label": "string",
              "logBase": 0,
              "max": {
                "Valid": true,
                "Value": 0
              },
              "min": {
                "Valid": true,
                "Value": 0
              },
              "show": true
            },
            "y-axis": true,
            "yAxis": {
              "decimals": 0,
              "format": "string",
              "logBase": 0,
              "max": "string",
              "min": "string",
              "show": true,
              "splitFactor": 0
            },
            "yBucketBound": "string",
            "yBucketNumber": 0,
            "yBucketSize": 0,
            "y_formats": [
              "string"
            ],
            "yaxes": [
              {
                "decimals": 0,
                "format": "string",
                "label": "string",
                "logBase": 0,
                "max": {
                  "Valid": true,
                  "Value": 0
                },
                "min": {
                  "Valid": true,
                  "Value": 0
                },
                "show": true
              }
            ]
          }
        ],
        "slug": "string",
        "template_vars": [
          {
            "datasource": {
              "id": 0,
              "name": "string"
            },
            "hide": 0,
            "name": "string",
            "query": "string",
            "value": {}
          }
        ],
        "title": "string",
        "uid": "string",
        "uri": "string"
      },
      "panels": [
        {
          "alert": {
            "alertRuleTags": {
              "property1": "string",
              "property2": "string"
            },
            "conditions": [
              {
                "evaluator": {
                  "params": [
                    0
                  ],
                  "type": "string"
                },
                "operator": {
                  "type": "string"
                },
                "query": {
                  "params": [
                    "string"
                  ]
                },
                "reducer": {
                  "params": [
                    "string"
                  ],
                  "type": "string"
                },
                "type": "string"
              }
            ],
            "executionErrorState": "string",
            "for": "string",
            "frequency": "string",
            "handler": 0,
            "message": "string",
            "name": "string",
            "noDataState": "string",
            "notifications": [
              {
                "disableResolveMessage": true,
                "frequency": "string",
                "id": 0,
                "isDefault": true,
                "name": "string",
                "sendReminder": true,
                "settings": {},
                "type": "string",
                "uid": "string"
              }
            ]
          },
          "aliasColors": {},
          "bars": true,
          "cards": {
            "cardPadding": 0,
            "cardRound": 0
          },
          "collapsed": true,
          "color": {
            "cardColor": "string",
            "colorScale": "string",
            "colorScheme": "string",
            "exponent": 0,
            "max": 0,
            "min": 0,
            "mode": "string"
          },
          "colorBackground": true,
          "colorValue": true,
          "colors": [
            "string"
          ],
          "columns": [
            {
              "text": "string",
              "value": "string"
            }
          ],
          "content": "string",
          "dashLength": 0,
          "dashboardTags": [
            "string"
          ],
          "dashes": true,
          "dataFormat": "string",
          "datasource": "string",
          "decimals": 0,
          "description": "string",
          "editable": true,
          "error": true,
          "fieldConfig": {
            "defaults": {
              "threshold": {
                "mode": "string",
                "steps": [
                  {
                    "color": "string",
                    "value": "string"
                  }
                ]
              },
              "unit": "string"
            }
          },
          "fill": 0,
          "folderId": 0,
          "format": "string",
          "gauge": {
            "maxValue": 0,
            "minValue": 0,
            "show": true,
            "thresholdLabels": true,
            "thresholdMarkers": true
          },
          "gridPos": {
            "h": 0,
            "w": 0,
            "x": 0,
            "y": 0
          },
          "headings": true,
          "height": {},
          "hideTimeOverride": true,
          "hideZeroBuckets": true,
          "highlightCards": true,
          "id": 0,
          "isNew": true,
          "leftYAxisLabel": "string",
          "legend": {
            "alignAsTable": true,
            "avg": true,
            "current": true,
            "hideEmpty": true,
            "hideZero": true,
            "max": true,
            "min": true,
            "rightSide": true,
            "show": true,
            "sideWidth": 0,
            "total": true,
            "values": true
          },
          "limit": 0,
          "lines": true,
          "linewidth": 0,
          "links": [
            {
              "asDropdown": true,
              "dashUri": "string",
              "dashboard": "string",
              "icon": "string",
              "includeVars": true,
              "keepTime": true,
              "params": "string",
              "tags": [
                "string"
              ],
              "targetBlank": true,
              "title": "string",
              "tooltip": "string",
              "type": "string",
              "url": "string"
            }
          ],
          "mappingType": 0,
          "mappingTypes": [
            {
              "name": "string",
              "value": 0
            }
          ],
          "maxDataPoints": {
            "Valid": true,
            "Value": 0
          },
          "minSpan": 0,
          "mode": "string",
          "nameFilter": "string",
          "nullPointMode": "string",
          "onlyAlertsOnDashboard": true,
          "options": {
            "colorMode": "string",
            "content": "string",
            "displayMode": "string",
            "graphMode": "string",
            "justifyMode": "string",
            "mode": "string",
            "orientation": "string",
            "reduceOptions": {
              "calcs": [
                "string"
              ],
              "fields": "string",
              "values": true
            },
            "textMode": "string"
          },
          "pageSize": 0,
          "panels": [
            {}
          ],
          "percentage": true,
          "pointradius": 0,
          "points": true,
          "postfix": "string",
          "postfixFontSize": "string",
          "prefix": "string",
          "prefixFontSize": "string",
          "query": "string",
          "rangeMaps": [
            {
              "from": "string",
              "text": "string",
              "to": "string"
            }
          ],
          "recent": true,
          "renderer": "string",
          "repeat": "string",
          "repeatPanelId": 0,
          "reverseYBuckets": true,
          "rightYAxisLabel": "string",
          "scopedVars": {
            "property1": {
              "selected": true,
              "text": "string",
              "value": "string"
            },
            "property2": {
              "selected": true,
              "text": "string",
              "value": "string"
            }
          },
          "scroll": true,
          "search": true,
          "seriesOverrides": [
            {
              "alias": "string",
              "bars": true,
              "color": "string",
              "dashes": true,
              "fill": 0,
              "fillBelowTo": "string",
              "legend": true,
              "lines": true,
              "linewidth": 0,
              "nullPointMode": "string",
              "stack": {
                "Flag": true,
                "Value": "string"
              },
              "transform": "string",
              "yaxis": 0,
              "zindex": 0
            }
          ],
          "show": "string",
          "showHeader": true,
          "sort": {
            "col": 0,
            "desc": true
          },
          "sortOrder": 0,
          "spaceLength": 0,
          "span": 0,
          "sparkline": {
            "fillColor": "string",
            "full": true,
            "lineColor": "string",
            "show": true,
            "ymax": 0,
            "ymin": 0
          },
          "stack": true,
          "starred": true,
          "stateFilter": [
            "string"
          ],
          "steppedLine": true,
          "styles": [
            {
              "alias": "string",
              "colorMode": "string",
              "colors": [
                "string"
              ],
              "dateFormat": "string",
              "decimals": 0,
              "link": true,
              "linkTargetBlank": true,
              "linkTooltip": "string",
              "linkUrl": "string",
              "mappingType": 0,
              "pattern": "string",
              "thresholds": [
                "string"
              ],
              "type": "string",
              "unit": "string",
              "valueMaps": [
                {
                  "op": "string",
                  "text": "string",
                  "value": "string"
                }
              ]
            }
          ],
          "tags": [
            "string"
          ],
          "targets": [
            {
              "alias": "string",
              "aliasBy": "string",
              "alignOptions": [
                {
                  "expanded": true,
                  "label": "string",
                  "options": [
                    {
                      "label": "string",
                      "metricKinds": [
                        "string"
                      ],
                      "text": "string",
                      "value": "string",
                      "valueTypes": [
                        "string"
                      ]
                    }
                  ]
                }
              ],
              "alignmentPeriod": "string",
              "bucketAggs": [
                {
                  "field": "string",
                  "id": "string",
                  "settings": {
                    "interval": "string",
                    "min_doc_count": {},
                    "order": "string",
                    "orderBy": "string",
                    "size": "string"
                  },
                  "type": "string"
                }
              ],
              "crossSeriesReducer": "string",
              "datasource": "string",
              "dimensions": {
                "property1": "string",
                "property2": "string"
              },
              "dsType": "string",
              "expr": "string",
              "filters": [
                "string"
              ],
              "format": "string",
              "group": [
                {
                  "params": [
                    "string"
                  ],
                  "type": "string"
                }
              ],
              "groupBys": [
                "string"
              ],
              "hide": true,
              "instant": true,
              "interval": "string",
              "intervalFactor": 0,
              "legendFormat": "string",
              "measurement": "string",
              "metricColumn": "string",
              "metricKind": "string",
              "metricName": "string",
              "metricType": "string",
              "metrics": [
                {
                  "field": "string",
                  "id": "string",
                  "type": "string"
                }
              ],
              "namespace": "string",
              "perSeriesAligner": "string",
              "period": "string",
              "projectName": "string",
              "query": "string",
              "rawQuery": true,
              "rawSql": "string",
              "refId": "string",
              "region": "string",
              "select": [
                [
                  {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ]
              ],
              "statistics": [
                "string"
              ],
              "step": 0,
              "table": "string",
              "target": "string",
              "timeColumn": "string",
              "timeField": "string",
              "valueType": "string",
              "where": [
                {
                  "datatype": "string",
                  "name": "string",
                  "params": [
                    "string"
                  ],
                  "type": "string"
                }
              ]
            }
          ],
          "thresholds": "string",
          "timeFrom": "string",
          "timeShift": "string",
          "title": "string",
          "tooltip": {
            "msResolution": true,
            "shared": true,
            "sort": 0,
            "value_type": "string"
          },
          "tooltipDecimals": 0,
          "transform": "string",
          "transparent": true,
          "type": "string",
          "valueFontSize": "string",
          "valueMaps": [
            {
              "op": "string",
              "text": "string",
              "value": "string"
            }
          ],
          "valueName": "string",
          "x-axis": true,
          "xAxis": {
            "show": true
          },
          "xBucketNumber": 0,
          "xBucketSize": "string",
          "xaxis": {
            "decimals": 0,
            "format": "string",
            "label": "string",
            "logBase": 0,
            "max": {
              "Valid": true,
              "Value": 0
            },
            "min": {
              "Valid": true,
              "Value": 0
            },
            "show": true
          },
          "y-axis": true,
          "yAxis": {
            "decimals": 0,
            "format": "string",
            "logBase": 0,
            "max": "string",
            "min": "string",
            "show": true,
            "splitFactor": 0
          },
          "yBucketBound": "string",
          "yBucketNumber": 0,
          "yBucketSize": 0,
          "y_formats": [
            "string"
          ],
          "yaxes": [
            {
              "decimals": 0,
              "format": "string",
              "label": "string",
              "logBase": 0,
              "max": {
                "Valid": true,
                "Value": 0
              },
              "min": {
                "Valid": true,
                "Value": 0
              },
              "show": true
            }
          ]
        }
      ],
      "templateVars": [
        "string"
      ]
    }
  ]
}
```

Grafana represents the Grafana session config

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grafanaAPIKey|string|false|none|none|
|grafanaURL|string|false|none|none|
|selectedBoardsConfigs|[[SelectedGrafanaConfig](#schemaselectedgrafanaconfig)]|false|none|GrafanaBoardSearch string          `json:"grafanaBoardSearch,omitempty"`|

<h2 id="tocS_GrafanaBoard">GrafanaBoard</h2>
<!-- backwards compatibility -->
<a id="schemagrafanaboard"></a>
<a id="schema_GrafanaBoard"></a>
<a id="tocSgrafanaboard"></a>
<a id="tocsgrafanaboard"></a>

```json
{
  "org_id": 0,
  "panels": [
    {
      "alert": {
        "alertRuleTags": {
          "property1": "string",
          "property2": "string"
        },
        "conditions": [
          {
            "evaluator": {
              "params": [
                0
              ],
              "type": "string"
            },
            "operator": {
              "type": "string"
            },
            "query": {
              "params": [
                "string"
              ]
            },
            "reducer": {
              "params": [
                "string"
              ],
              "type": "string"
            },
            "type": "string"
          }
        ],
        "executionErrorState": "string",
        "for": "string",
        "frequency": "string",
        "handler": 0,
        "message": "string",
        "name": "string",
        "noDataState": "string",
        "notifications": [
          {
            "disableResolveMessage": true,
            "frequency": "string",
            "id": 0,
            "isDefault": true,
            "name": "string",
            "sendReminder": true,
            "settings": {},
            "type": "string",
            "uid": "string"
          }
        ]
      },
      "aliasColors": {},
      "bars": true,
      "cards": {
        "cardPadding": 0,
        "cardRound": 0
      },
      "collapsed": true,
      "color": {
        "cardColor": "string",
        "colorScale": "string",
        "colorScheme": "string",
        "exponent": 0,
        "max": 0,
        "min": 0,
        "mode": "string"
      },
      "colorBackground": true,
      "colorValue": true,
      "colors": [
        "string"
      ],
      "columns": [
        {
          "text": "string",
          "value": "string"
        }
      ],
      "content": "string",
      "dashLength": 0,
      "dashboardTags": [
        "string"
      ],
      "dashes": true,
      "dataFormat": "string",
      "datasource": "string",
      "decimals": 0,
      "description": "string",
      "editable": true,
      "error": true,
      "fieldConfig": {
        "defaults": {
          "threshold": {
            "mode": "string",
            "steps": [
              {
                "color": "string",
                "value": "string"
              }
            ]
          },
          "unit": "string"
        }
      },
      "fill": 0,
      "folderId": 0,
      "format": "string",
      "gauge": {
        "maxValue": 0,
        "minValue": 0,
        "show": true,
        "thresholdLabels": true,
        "thresholdMarkers": true
      },
      "gridPos": {
        "h": 0,
        "w": 0,
        "x": 0,
        "y": 0
      },
      "headings": true,
      "height": {},
      "hideTimeOverride": true,
      "hideZeroBuckets": true,
      "highlightCards": true,
      "id": 0,
      "isNew": true,
      "leftYAxisLabel": "string",
      "legend": {
        "alignAsTable": true,
        "avg": true,
        "current": true,
        "hideEmpty": true,
        "hideZero": true,
        "max": true,
        "min": true,
        "rightSide": true,
        "show": true,
        "sideWidth": 0,
        "total": true,
        "values": true
      },
      "limit": 0,
      "lines": true,
      "linewidth": 0,
      "links": [
        {
          "asDropdown": true,
          "dashUri": "string",
          "dashboard": "string",
          "icon": "string",
          "includeVars": true,
          "keepTime": true,
          "params": "string",
          "tags": [
            "string"
          ],
          "targetBlank": true,
          "title": "string",
          "tooltip": "string",
          "type": "string",
          "url": "string"
        }
      ],
      "mappingType": 0,
      "mappingTypes": [
        {
          "name": "string",
          "value": 0
        }
      ],
      "maxDataPoints": {
        "Valid": true,
        "Value": 0
      },
      "minSpan": 0,
      "mode": "string",
      "nameFilter": "string",
      "nullPointMode": "string",
      "onlyAlertsOnDashboard": true,
      "options": {
        "colorMode": "string",
        "content": "string",
        "displayMode": "string",
        "graphMode": "string",
        "justifyMode": "string",
        "mode": "string",
        "orientation": "string",
        "reduceOptions": {
          "calcs": [
            "string"
          ],
          "fields": "string",
          "values": true
        },
        "textMode": "string"
      },
      "pageSize": 0,
      "panels": [
        {}
      ],
      "percentage": true,
      "pointradius": 0,
      "points": true,
      "postfix": "string",
      "postfixFontSize": "string",
      "prefix": "string",
      "prefixFontSize": "string",
      "query": "string",
      "rangeMaps": [
        {
          "from": "string",
          "text": "string",
          "to": "string"
        }
      ],
      "recent": true,
      "renderer": "string",
      "repeat": "string",
      "repeatPanelId": 0,
      "reverseYBuckets": true,
      "rightYAxisLabel": "string",
      "scopedVars": {
        "property1": {
          "selected": true,
          "text": "string",
          "value": "string"
        },
        "property2": {
          "selected": true,
          "text": "string",
          "value": "string"
        }
      },
      "scroll": true,
      "search": true,
      "seriesOverrides": [
        {
          "alias": "string",
          "bars": true,
          "color": "string",
          "dashes": true,
          "fill": 0,
          "fillBelowTo": "string",
          "legend": true,
          "lines": true,
          "linewidth": 0,
          "nullPointMode": "string",
          "stack": {
            "Flag": true,
            "Value": "string"
          },
          "transform": "string",
          "yaxis": 0,
          "zindex": 0
        }
      ],
      "show": "string",
      "showHeader": true,
      "sort": {
        "col": 0,
        "desc": true
      },
      "sortOrder": 0,
      "spaceLength": 0,
      "span": 0,
      "sparkline": {
        "fillColor": "string",
        "full": true,
        "lineColor": "string",
        "show": true,
        "ymax": 0,
        "ymin": 0
      },
      "stack": true,
      "starred": true,
      "stateFilter": [
        "string"
      ],
      "steppedLine": true,
      "styles": [
        {
          "alias": "string",
          "colorMode": "string",
          "colors": [
            "string"
          ],
          "dateFormat": "string",
          "decimals": 0,
          "link": true,
          "linkTargetBlank": true,
          "linkTooltip": "string",
          "linkUrl": "string",
          "mappingType": 0,
          "pattern": "string",
          "thresholds": [
            "string"
          ],
          "type": "string",
          "unit": "string",
          "valueMaps": [
            {
              "op": "string",
              "text": "string",
              "value": "string"
            }
          ]
        }
      ],
      "tags": [
        "string"
      ],
      "targets": [
        {
          "alias": "string",
          "aliasBy": "string",
          "alignOptions": [
            {
              "expanded": true,
              "label": "string",
              "options": [
                {
                  "label": "string",
                  "metricKinds": [
                    "string"
                  ],
                  "text": "string",
                  "value": "string",
                  "valueTypes": [
                    "string"
                  ]
                }
              ]
            }
          ],
          "alignmentPeriod": "string",
          "bucketAggs": [
            {
              "field": "string",
              "id": "string",
              "settings": {
                "interval": "string",
                "min_doc_count": {},
                "order": "string",
                "orderBy": "string",
                "size": "string"
              },
              "type": "string"
            }
          ],
          "crossSeriesReducer": "string",
          "datasource": "string",
          "dimensions": {
            "property1": "string",
            "property2": "string"
          },
          "dsType": "string",
          "expr": "string",
          "filters": [
            "string"
          ],
          "format": "string",
          "group": [
            {
              "params": [
                "string"
              ],
              "type": "string"
            }
          ],
          "groupBys": [
            "string"
          ],
          "hide": true,
          "instant": true,
          "interval": "string",
          "intervalFactor": 0,
          "legendFormat": "string",
          "measurement": "string",
          "metricColumn": "string",
          "metricKind": "string",
          "metricName": "string",
          "metricType": "string",
          "metrics": [
            {
              "field": "string",
              "id": "string",
              "type": "string"
            }
          ],
          "namespace": "string",
          "perSeriesAligner": "string",
          "period": "string",
          "projectName": "string",
          "query": "string",
          "rawQuery": true,
          "rawSql": "string",
          "refId": "string",
          "region": "string",
          "select": [
            [
              {
                "params": [
                  "string"
                ],
                "type": "string"
              }
            ]
          ],
          "statistics": [
            "string"
          ],
          "step": 0,
          "table": "string",
          "target": "string",
          "timeColumn": "string",
          "timeField": "string",
          "valueType": "string",
          "where": [
            {
              "datatype": "string",
              "name": "string",
              "params": [
                "string"
              ],
              "type": "string"
            }
          ]
        }
      ],
      "thresholds": "string",
      "timeFrom": "string",
      "timeShift": "string",
      "title": "string",
      "tooltip": {
        "msResolution": true,
        "shared": true,
        "sort": 0,
        "value_type": "string"
      },
      "tooltipDecimals": 0,
      "transform": "string",
      "transparent": true,
      "type": "string",
      "valueFontSize": "string",
      "valueMaps": [
        {
          "op": "string",
          "text": "string",
          "value": "string"
        }
      ],
      "valueName": "string",
      "x-axis": true,
      "xAxis": {
        "show": true
      },
      "xBucketNumber": 0,
      "xBucketSize": "string",
      "xaxis": {
        "decimals": 0,
        "format": "string",
        "label": "string",
        "logBase": 0,
        "max": {
          "Valid": true,
          "Value": 0
        },
        "min": {
          "Valid": true,
          "Value": 0
        },
        "show": true
      },
      "y-axis": true,
      "yAxis": {
        "decimals": 0,
        "format": "string",
        "logBase": 0,
        "max": "string",
        "min": "string",
        "show": true,
        "splitFactor": 0
      },
      "yBucketBound": "string",
      "yBucketNumber": 0,
      "yBucketSize": 0,
      "y_formats": [
        "string"
      ],
      "yaxes": [
        {
          "decimals": 0,
          "format": "string",
          "label": "string",
          "logBase": 0,
          "max": {
            "Valid": true,
            "Value": 0
          },
          "min": {
            "Valid": true,
            "Value": 0
          },
          "show": true
        }
      ]
    }
  ],
  "slug": "string",
  "template_vars": [
    {
      "datasource": {
        "id": 0,
        "name": "string"
      },
      "hide": 0,
      "name": "string",
      "query": "string",
      "value": {}
    }
  ],
  "title": "string",
  "uid": "string",
  "uri": "string"
}
```

GrafanaBoard represents a Grafana board

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|org_id|integer(uint64)|false|none|none|
|panels|[[Panel](#schemapanel)]|false|none|none|
|slug|string|false|none|none|
|template_vars|[[GrafanaTemplateVars](#schemagrafanatemplatevars)]|false|none|none|
|title|string|false|none|none|
|uid|string|false|none|none|
|uri|string|false|none|none|

<h2 id="tocS_GrafanaConfigParams">GrafanaConfigParams</h2>
<!-- backwards compatibility -->
<a id="schemagrafanaconfigparams"></a>
<a id="schema_GrafanaConfigParams"></a>
<a id="tocSgrafanaconfigparams"></a>
<a id="tocsgrafanaconfigparams"></a>

```json
{
  "grafanaAPIKey": "string",
  "grafanaURL": "string"
}
```

Parameters to save Grafana configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grafanaAPIKey|string|false|none|none|
|grafanaURL|string|false|none|none|

<h2 id="tocS_GrafanaDataSource">GrafanaDataSource</h2>
<!-- backwards compatibility -->
<a id="schemagrafanadatasource"></a>
<a id="schema_GrafanaDataSource"></a>
<a id="tocSgrafanadatasource"></a>
<a id="tocsgrafanadatasource"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

GrafanaDataSource represents a Grafana datasource like Prometheus

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(uint64)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_GrafanaTemplateVars">GrafanaTemplateVars</h2>
<!-- backwards compatibility -->
<a id="schemagrafanatemplatevars"></a>
<a id="schema_GrafanaTemplateVars"></a>
<a id="tocSgrafanatemplatevars"></a>
<a id="tocsgrafanatemplatevars"></a>

```json
{
  "datasource": {
    "id": 0,
    "name": "string"
  },
  "hide": 0,
  "name": "string",
  "query": "string",
  "value": {}
}
```

GrafanaTemplateVars represents template variables in a bboard

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasource|[GrafanaDataSource](#schemagrafanadatasource)|false|none|GrafanaDataSource represents a Grafana datasource like Prometheus|
|hide|integer(uint8)|false|none|none|
|name|string|false|none|none|
|query|string|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_GraphDriverData">GraphDriverData</h2>
<!-- backwards compatibility -->
<a id="schemagraphdriverdata"></a>
<a id="schema_GraphDriverData"></a>
<a id="tocSgraphdriverdata"></a>
<a id="tocsgraphdriverdata"></a>

```json
{
  "Data": {
    "property1": "string",
    "property2": "string"
  },
  "Name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|data|
|Name|string|true|none|name|

<h2 id="tocS_GraphQLExtension">GraphQLExtension</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlextension"></a>
<a id="schema_GraphQLExtension"></a>
<a id="tocSgraphqlextension"></a>
<a id="tocsgraphqlextension"></a>

```json
{
  "component": "string",
  "path": "string"
}
```

GraphQLExtension describes the graphql server extension point in the backend

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|component|string|false|none|none|
|path|string|false|none|none|

<h2 id="tocS_GraphQLExtensions">GraphQLExtensions</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlextensions"></a>
<a id="schema_GraphQLExtensions"></a>
<a id="tocSgraphqlextensions"></a>
<a id="tocsgraphqlextensions"></a>

```json
[
  {
    "component": "string",
    "path": "string"
  }
]
```

GraphQLExtensions is a collection of GraphQLExtension endpoints

<h2 id="tocS_HistoryResponseItem">HistoryResponseItem</h2>
<!-- backwards compatibility -->
<a id="schemahistoryresponseitem"></a>
<a id="schema_HistoryResponseItem"></a>
<a id="tocShistoryresponseitem"></a>
<a id="tocshistoryresponseitem"></a>

```json
{
  "Comment": "string",
  "Created": 0,
  "CreatedBy": "string",
  "Id": "string",
  "Size": 0,
  "Tags": [
    "string"
  ]
}
```

HistoryResponseItem individual image layer information in response to ImageHistory operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|string|true|none|comment|
|Created|integer(int64)|true|none|created|
|CreatedBy|string|true|none|created by|
|Id|string|true|none|Id|
|Size|integer(int64)|true|none|size|
|Tags|[string]|true|none|tags|

<h2 id="tocS_Href">Href</h2>
<!-- backwards compatibility -->
<a id="schemahref"></a>
<a id="schema_Href"></a>
<a id="tocShref"></a>
<a id="tocshref"></a>

```json
{
  "external": true,
  "uri": "string"
}
```

Href describes a link along with its type

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|external|boolean|false|none|none|
|uri|string|false|none|none|

<h2 id="tocS_IPFamily">IPFamily</h2>
<!-- backwards compatibility -->
<a id="schemaipfamily"></a>
<a id="schema_IPFamily"></a>
<a id="tocSipfamily"></a>
<a id="tocsipfamily"></a>

```json
"string"
```

IPFamily represents the IP Family (IPv4 or IPv6). This type is used
to express the family of an IP expressed by a type (i.e. service.Spec.IPFamily)

<h2 id="tocS_IdResponse">IdResponse</h2>
<!-- backwards compatibility -->
<a id="schemaidresponse"></a>
<a id="schema_IdResponse"></a>
<a id="tocSidresponse"></a>
<a id="tocsidresponse"></a>

```json
{
  "Id": "string"
}
```

IDResponse Response to an API call that returns just an Id

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|true|none|The id of the newly created object.|

<h2 id="tocS_ImageDeleteResponseItem">ImageDeleteResponseItem</h2>
<!-- backwards compatibility -->
<a id="schemaimagedeleteresponseitem"></a>
<a id="schema_ImageDeleteResponseItem"></a>
<a id="tocSimagedeleteresponseitem"></a>
<a id="tocsimagedeleteresponseitem"></a>

```json
{
  "Deleted": "string",
  "Untagged": "string"
}
```

ImageDeleteResponseItem image delete response item

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Deleted|string|false|none|The image ID of an image that was deleted|
|Untagged|string|false|none|The image ID of an image that was untagged|

<h2 id="tocS_ImageSummary">ImageSummary</h2>
<!-- backwards compatibility -->
<a id="schemaimagesummary"></a>
<a id="schema_ImageSummary"></a>
<a id="tocSimagesummary"></a>
<a id="tocsimagesummary"></a>

```json
{
  "Containers": 0,
  "Created": 0,
  "Id": "string",
  "Labels": {
    "property1": "string",
    "property2": "string"
  },
  "ParentId": "string",
  "RepoDigests": [
    "string"
  ],
  "RepoTags": [
    "string"
  ],
  "SharedSize": 0,
  "Size": 0,
  "VirtualSize": 0
}
```

ImageSummary image summary

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Containers|integer(int64)|true|none|containers|
|Created|integer(int64)|true|none|created|
|Id|string|true|none|Id|
|Labels|object|true|none|labels|
|ParentId|string|true|none|parent Id|
|RepoDigests|[string]|true|none|repo digests|
|RepoTags|[string]|true|none|repo tags|
|SharedSize|integer(int64)|true|none|shared size|
|Size|integer(int64)|true|none|size|
|VirtualSize|integer(int64)|true|none|virtual size|

<h2 id="tocS_IntOrString">IntOrString</h2>
<!-- backwards compatibility -->
<a id="schemaintorstring"></a>
<a id="schema_IntOrString"></a>
<a id="tocSintorstring"></a>
<a id="tocsintorstring"></a>

```json
{
  "IntVal": 0,
  "StrVal": "string",
  "Type": 0
}
```

+protobuf=true
+protobuf.options.(gogoproto.goproto_stringer)=false
+k8s:openapi-gen=true

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IntVal|integer(int32)|false|none|none|
|StrVal|string|false|none|none|
|Type|[Type](#schematype)|false|none|none|

<h2 id="tocS_IntString">IntString</h2>
<!-- backwards compatibility -->
<a id="schemaintstring"></a>
<a id="schema_IntString"></a>
<a id="tocSintstring"></a>
<a id="tocsintstring"></a>

```json
{
  "Valid": true,
  "Value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Valid|boolean|false|none|none|
|Value|integer(int64)|false|none|none|

<h2 id="tocS_K8SConfig">K8SConfig</h2>
<!-- backwards compatibility -->
<a id="schemak8sconfig"></a>
<a id="schema_K8SConfig"></a>
<a id="tocSk8sconfig"></a>
<a id="tocsk8sconfig"></a>

```json
{
  "clusterConfigured": true,
  "config": [
    0
  ],
  "configuredServer": "string",
  "contextName": "string",
  "inClusterConfig": true,
  "k8sfile": "string",
  "nodes": [
    {
      "allocatable_cpu": "string",
      "allocatable_memory": "string",
      "architecture": "string",
      "capacity_cpu": "string",
      "capacity_memory": "string",
      "container_runtime_version": "string",
      "hostname": "string",
      "internal_ip": "string",
      "kubelet_version": "string",
      "kubeproxy_version": "string",
      "operating_system": "string",
      "os_image": "string"
    }
  ],
  "server_version": "string"
}
```

K8SConfig represents all the k8s session config

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterConfigured|boolean|false|none|none|
|config|[integer(uint8)]|false|none|none|
|configuredServer|string|false|none|none|
|contextName|string|false|none|none|
|inClusterConfig|boolean|false|none|none|
|k8sfile|string|false|none|none|
|nodes|[[K8SNode](#schemak8snode)]|false|none|none|
|server_version|string|false|none|none|

<h2 id="tocS_K8SContext">K8SContext</h2>
<!-- backwards compatibility -->
<a id="schemak8scontext"></a>
<a id="schema_K8SContext"></a>
<a id="tocSk8scontext"></a>
<a id="tocsk8scontext"></a>

```json
{
  "clusterName": "string",
  "contextName": "string",
  "currentContext": true
}
```

K8SContext is just used to send contexts to the UI

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterName|string|false|none|none|
|contextName|string|false|none|none|
|currentContext|boolean|false|none|ContextDisplayName string `json:"context-display-name"`|

<h2 id="tocS_K8SNode">K8SNode</h2>
<!-- backwards compatibility -->
<a id="schemak8snode"></a>
<a id="schema_K8SNode"></a>
<a id="tocSk8snode"></a>
<a id="tocsk8snode"></a>

```json
{
  "allocatable_cpu": "string",
  "allocatable_memory": "string",
  "architecture": "string",
  "capacity_cpu": "string",
  "capacity_memory": "string",
  "container_runtime_version": "string",
  "hostname": "string",
  "internal_ip": "string",
  "kubelet_version": "string",
  "kubeproxy_version": "string",
  "operating_system": "string",
  "os_image": "string"
}
```

K8SNode - represents a kubernetes node

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocatable_cpu|string|false|none|none|
|allocatable_memory|string|false|none|none|
|architecture|string|false|none|none|
|capacity_cpu|string|false|none|none|
|capacity_memory|string|false|none|none|
|container_runtime_version|string|false|none|none|
|hostname|string|false|none|none|
|internal_ip|string|false|none|none|
|kubelet_version|string|false|none|none|
|kubeproxy_version|string|false|none|none|
|operating_system|string|false|none|none|
|os_image|string|false|none|none|

<h2 id="tocS_LatenciesMs">LatenciesMs</h2>
<!-- backwards compatibility -->
<a id="schemalatenciesms"></a>
<a id="schema_LatenciesMs"></a>
<a id="tocSlatenciesms"></a>
<a id="tocslatenciesms"></a>

```json
{
  "Average": 0,
  "Max": 0,
  "Min": 0,
  "P50": 0,
  "P90": 0,
  "P99": 0
}
```

LatenciesMs - represents a collection of important latencies

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Average|number(double)|false|none|none|
|Max|number(double)|false|none|none|
|Min|number(double)|false|none|none|
|P50|number(double)|false|none|none|
|P90|number(double)|false|none|none|
|P99|number(double)|false|none|none|

<h2 id="tocS_Legend">Legend</h2>
<!-- backwards compatibility -->
<a id="schemalegend"></a>
<a id="schema_Legend"></a>
<a id="tocSlegend"></a>
<a id="tocslegend"></a>

```json
{
  "alignAsTable": true,
  "avg": true,
  "current": true,
  "hideEmpty": true,
  "hideZero": true,
  "max": true,
  "min": true,
  "rightSide": true,
  "show": true,
  "sideWidth": 0,
  "total": true,
  "values": true
}
```

for a graph panel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alignAsTable|boolean|false|none|none|
|avg|boolean|false|none|none|
|current|boolean|false|none|none|
|hideEmpty|boolean|false|none|none|
|hideZero|boolean|false|none|none|
|max|boolean|false|none|none|
|min|boolean|false|none|none|
|rightSide|boolean|false|none|none|
|show|boolean|false|none|none|
|sideWidth|integer(uint64)|false|none|none|
|total|boolean|false|none|none|
|values|boolean|false|none|none|

<h2 id="tocS_Link">Link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "asDropdown": true,
  "dashUri": "string",
  "dashboard": "string",
  "icon": "string",
  "includeVars": true,
  "keepTime": true,
  "params": "string",
  "tags": [
    "string"
  ],
  "targetBlank": true,
  "title": "string",
  "tooltip": "string",
  "type": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asDropdown|boolean|false|none|none|
|dashUri|string|false|none|none|
|dashboard|string|false|none|none|
|icon|string|false|none|none|
|includeVars|boolean|false|none|none|
|keepTime|boolean|false|none|none|
|params|string|false|none|none|
|tags|[string]|false|none|none|
|targetBlank|boolean|false|none|none|
|title|string|false|none|none|
|tooltip|string|false|none|none|
|type|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_LoadBalancerIngress">LoadBalancerIngress</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalanceringress"></a>
<a id="schema_LoadBalancerIngress"></a>
<a id="tocSloadbalanceringress"></a>
<a id="tocsloadbalanceringress"></a>

```json
{
  "hostname": "string",
  "ip": "string"
}
```

traffic intended for the service should be sent to an ingress point.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|string|false|none|Hostname is set for load-balancer ingress points that are DNS based<br>(typically AWS load-balancers)<br>+optional|
|ip|string|false|none|IP is set for load-balancer ingress points that are IP based<br>(typically GCE or OpenStack load-balancers)<br>+optional|

<h2 id="tocS_LoadBalancerStatus">LoadBalancerStatus</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerstatus"></a>
<a id="schema_LoadBalancerStatus"></a>
<a id="tocSloadbalancerstatus"></a>
<a id="tocsloadbalancerstatus"></a>

```json
{
  "ingress": [
    {
      "hostname": "string",
      "ip": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ingress|[[LoadBalancerIngress](#schemaloadbalanceringress)]|false|none|Ingress is a list containing ingress points for the load-balancer.<br>Traffic intended for the service should be sent to these ingress points.<br>+optional|

<h2 id="tocS_LoadTestPreferences">LoadTestPreferences</h2>
<!-- backwards compatibility -->
<a id="schemaloadtestpreferences"></a>
<a id="schema_LoadTestPreferences"></a>
<a id="tocSloadtestpreferences"></a>
<a id="tocsloadtestpreferences"></a>

```json
{
  "c": 0,
  "gen": "string",
  "qps": 0,
  "t": "string"
}
```

LoadTestPreferences represents the load test preferences

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|c|integer(int64)|false|none|none|
|gen|string|false|none|none|
|qps|integer(int64)|false|none|none|
|t|string|false|none|none|

<h2 id="tocS_ManagedFieldsEntry">ManagedFieldsEntry</h2>
<!-- backwards compatibility -->
<a id="schemamanagedfieldsentry"></a>
<a id="schema_ManagedFieldsEntry"></a>
<a id="tocSmanagedfieldsentry"></a>
<a id="tocsmanagedfieldsentry"></a>

```json
{
  "apiVersion": "string",
  "fieldsType": "string",
  "fieldsV1": {},
  "manager": "string",
  "operation": "string",
  "time": {}
}
```

ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource
that the fieldset applies to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion defines the version of this resource that this field set<br>applies to. The format is "group/version" just like the top-level<br>APIVersion field. It is necessary to track the version of a field<br>set because it cannot be automatically converted.|
|fieldsType|string|false|none|FieldsType is the discriminator for the different fields format and version.<br>There is currently only one possible value: "FieldsV1"|
|fieldsV1|[FieldsV1](#schemafieldsv1)|false|none|Each key is either a '.' representing the field itself, and will always map to an empty set,<br>or a string representing a sub-field or item. The string will follow one of these four formats:<br>'f:<name>', where <name> is the name of a field in a struct, or key in a map<br>'v:<value>', where <value> is the exact json formatted value of a list item<br>'i:<index>', where <index> is position of a item in a list<br>'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values<br>If a key maps to an empty Fields value, the field that key represents is part of the set.<br><br>The exact format is defined in sigs.k8s.io/structured-merge-diff|
|manager|string|false|none|Manager is an identifier of the workflow managing these fields.|
|operation|[ManagedFieldsOperationType](#schemamanagedfieldsoperationtype)|false|none|none|
|time|[Time](#schematime)|false|none|+protobuf.options.marshal=false<br>+protobuf.as=Timestamp<br>+protobuf.options.(gogoproto.goproto_stringer)=false|

<h2 id="tocS_ManagedFieldsOperationType">ManagedFieldsOperationType</h2>
<!-- backwards compatibility -->
<a id="schemamanagedfieldsoperationtype"></a>
<a id="schema_ManagedFieldsOperationType"></a>
<a id="tocSmanagedfieldsoperationtype"></a>
<a id="tocsmanagedfieldsoperationtype"></a>

```json
"string"
```

<h2 id="tocS_Map">Map</h2>
<!-- backwards compatibility -->
<a id="schemamap"></a>
<a id="schema_Map"></a>
<a id="tocSmap"></a>
<a id="tocsmap"></a>

```json
{
  "property1": {},
  "property2": {}
}
```

It implements native SQL driver interfaces and hence can
be used for SQL json or jsonb types as a drop in replacement
of golang native maps

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_MapType">MapType</h2>
<!-- backwards compatibility -->
<a id="schemamaptype"></a>
<a id="schema_MapType"></a>
<a id="tocSmaptype"></a>
<a id="tocsmaptype"></a>

```json
{
  "name": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|value|integer(int64)|false|none|none|

<h2 id="tocS_MesheryApplication">MesheryApplication</h2>
<!-- backwards compatibility -->
<a id="schemamesheryapplication"></a>
<a id="schema_MesheryApplication"></a>
<a id="tocSmesheryapplication"></a>
<a id="tocsmesheryapplication"></a>

```json
{
  "application_file": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "id": [
    0
  ],
  "location": {
    "property1": {},
    "property2": {}
  },
  "name": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "user_id": "string"
}
```

MesheryApplication represents the applications that needs to be saved

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application_file|string|false|none|none|
|created_at|string(date-time)|false|none|none|
|id|[UUID](#schemauuid)|false|none|none|
|location|[Map](#schemamap)|false|none|It implements native SQL driver interfaces and hence can<br>be used for SQL json or jsonb types as a drop in replacement<br>of golang native maps|
|name|string|false|none|none|
|updated_at|string(date-time)|false|none|none|
|user_id|string|false|none|Meshery doesn't have the user id fields<br>but the remote provider is allowed to provide one|

<h2 id="tocS_MesheryFilter">MesheryFilter</h2>
<!-- backwards compatibility -->
<a id="schemamesheryfilter"></a>
<a id="schema_MesheryFilter"></a>
<a id="tocSmesheryfilter"></a>
<a id="tocsmesheryfilter"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "filter_file": "string",
  "id": [
    0
  ],
  "location": {
    "property1": {},
    "property2": {}
  },
  "name": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "user_id": "string"
}
```

MesheryFilter represents the filters that needs to be saved

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|filter_file|string|false|none|none|
|id|[UUID](#schemauuid)|false|none|none|
|location|[Map](#schemamap)|false|none|It implements native SQL driver interfaces and hence can<br>be used for SQL json or jsonb types as a drop in replacement<br>of golang native maps|
|name|string|false|none|none|
|updated_at|string(date-time)|false|none|none|
|user_id|string|false|none|Meshery doesn't have the user id fields<br>but the remote provider is allowed to provide one|

<h2 id="tocS_MesheryPattern">MesheryPattern</h2>
<!-- backwards compatibility -->
<a id="schemamesherypattern"></a>
<a id="schema_MesheryPattern"></a>
<a id="tocSmesherypattern"></a>
<a id="tocsmesherypattern"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "id": [
    0
  ],
  "location": {
    "property1": {},
    "property2": {}
  },
  "name": "string",
  "pattern_file": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "user_id": "string"
}
```

MesheryPattern represents the patterns that needs to be saved

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|id|[UUID](#schemauuid)|false|none|none|
|location|[Map](#schemamap)|false|none|It implements native SQL driver interfaces and hence can<br>be used for SQL json or jsonb types as a drop in replacement<br>of golang native maps|
|name|string|false|none|none|
|pattern_file|string|false|none|none|
|updated_at|string(date-time)|false|none|none|
|user_id|string|false|none|Meshery doesn't have the user id fields<br>but the remote provider is allowed to provide one|

<h2 id="tocS_NavigatorExtension">NavigatorExtension</h2>
<!-- backwards compatibility -->
<a id="schemanavigatorextension"></a>
<a id="schema_NavigatorExtension"></a>
<a id="tocSnavigatorextension"></a>
<a id="tocsnavigatorextension"></a>

```json
{
  "children": [
    {}
  ],
  "component": "string",
  "href": {
    "external": true,
    "uri": "string"
  },
  "icon": "string",
  "link": true,
  "show": true,
  "title": "string"
}
```

NavigatorExtension describes the Navigator extension point in the UI

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|children|[NavigatorExtensions](#schemanavigatorextensions)|false|none|NavigatorExtensions is a collection of NavigatorExtension|
|component|string|false|none|none|
|href|[Href](#schemahref)|false|none|Href describes a link along with its type|
|icon|string|false|none|none|
|link|boolean|false|none|none|
|show|boolean|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_NavigatorExtensions">NavigatorExtensions</h2>
<!-- backwards compatibility -->
<a id="schemanavigatorextensions"></a>
<a id="schema_NavigatorExtensions"></a>
<a id="tocSnavigatorextensions"></a>
<a id="tocsnavigatorextensions"></a>

```json
[
  {
    "children": {},
    "component": "string",
    "href": {
      "external": true,
      "uri": "string"
    },
    "icon": "string",
    "link": true,
    "show": true,
    "title": "string"
  }
]
```

NavigatorExtensions is a collection of NavigatorExtension

<h2 id="tocS_OpCategory">OpCategory</h2>
<!-- backwards compatibility -->
<a id="schemaopcategory"></a>
<a id="schema_OpCategory"></a>
<a id="tocSopcategory"></a>
<a id="tocsopcategory"></a>

```json
0
```

<h2 id="tocS_Options">Options</h2>
<!-- backwards compatibility -->
<a id="schemaoptions"></a>
<a id="schema_Options"></a>
<a id="tocSoptions"></a>
<a id="tocsoptions"></a>

```json
{
  "colorMode": "string",
  "content": "string",
  "displayMode": "string",
  "graphMode": "string",
  "justifyMode": "string",
  "mode": "string",
  "orientation": "string",
  "reduceOptions": {
    "calcs": [
      "string"
    ],
    "fields": "string",
    "values": true
  },
  "textMode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colorMode|string|false|none|none|
|content|string|false|none|none|
|displayMode|string|false|none|none|
|graphMode|string|false|none|none|
|justifyMode|string|false|none|none|
|mode|string|false|none|none|
|orientation|string|false|none|none|
|reduceOptions|object|false|none|none|
|textMode|string|false|none|none|

<h2 id="tocS_OwnerReference">OwnerReference</h2>
<!-- backwards compatibility -->
<a id="schemaownerreference"></a>
<a id="schema_OwnerReference"></a>
<a id="tocSownerreference"></a>
<a id="tocsownerreference"></a>

```json
{
  "apiVersion": "string",
  "blockOwnerDeletion": true,
  "controller": true,
  "kind": "string",
  "name": "string",
  "uid": "string"
}
```

OwnerReference contains enough information to let you identify an owning
object. An owning object must be in the same namespace as the dependent, or
be cluster-scoped, so there is no namespace field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|API version of the referent.|
|blockOwnerDeletion|boolean|false|none|If true, AND if the owner has the "foregroundDeletion" finalizer, then<br>the owner cannot be deleted from the key-value store until this<br>reference is removed.<br>Defaults to false.<br>To set this field, a user needs "delete" permission of the owner,<br>otherwise 422 (Unprocessable Entity) will be returned.<br>+optional|
|controller|boolean|false|none|If true, this reference points to the managing controller.<br>+optional|
|kind|string|false|none|Kind of the referent.<br>More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds|
|name|string|false|none|Name of the referent.<br>More info: http://kubernetes.io/docs/user-guide/identifiers#names|
|uid|[UID](#schemauid)|false|none|UID is a type that holds unique ID values, including UUIDs.  Because we<br>don't ONLY use UUIDs, this is an alias to string.  Being a type captures<br>intent and helps make sure that UIDs and names do not get conflated.|

<h2 id="tocS_Panel">Panel</h2>
<!-- backwards compatibility -->
<a id="schemapanel"></a>
<a id="schema_Panel"></a>
<a id="tocSpanel"></a>
<a id="tocspanel"></a>

```json
{
  "alert": {
    "alertRuleTags": {
      "property1": "string",
      "property2": "string"
    },
    "conditions": [
      {
        "evaluator": {
          "params": [
            0
          ],
          "type": "string"
        },
        "operator": {
          "type": "string"
        },
        "query": {
          "params": [
            "string"
          ]
        },
        "reducer": {
          "params": [
            "string"
          ],
          "type": "string"
        },
        "type": "string"
      }
    ],
    "executionErrorState": "string",
    "for": "string",
    "frequency": "string",
    "handler": 0,
    "message": "string",
    "name": "string",
    "noDataState": "string",
    "notifications": [
      {
        "disableResolveMessage": true,
        "frequency": "string",
        "id": 0,
        "isDefault": true,
        "name": "string",
        "sendReminder": true,
        "settings": {},
        "type": "string",
        "uid": "string"
      }
    ]
  },
  "aliasColors": {},
  "bars": true,
  "cards": {
    "cardPadding": 0,
    "cardRound": 0
  },
  "collapsed": true,
  "color": {
    "cardColor": "string",
    "colorScale": "string",
    "colorScheme": "string",
    "exponent": 0,
    "max": 0,
    "min": 0,
    "mode": "string"
  },
  "colorBackground": true,
  "colorValue": true,
  "colors": [
    "string"
  ],
  "columns": [
    {
      "text": "string",
      "value": "string"
    }
  ],
  "content": "string",
  "dashLength": 0,
  "dashboardTags": [
    "string"
  ],
  "dashes": true,
  "dataFormat": "string",
  "datasource": "string",
  "decimals": 0,
  "description": "string",
  "editable": true,
  "error": true,
  "fieldConfig": {
    "defaults": {
      "threshold": {
        "mode": "string",
        "steps": [
          {
            "color": "string",
            "value": "string"
          }
        ]
      },
      "unit": "string"
    }
  },
  "fill": 0,
  "folderId": 0,
  "format": "string",
  "gauge": {
    "maxValue": 0,
    "minValue": 0,
    "show": true,
    "thresholdLabels": true,
    "thresholdMarkers": true
  },
  "gridPos": {
    "h": 0,
    "w": 0,
    "x": 0,
    "y": 0
  },
  "headings": true,
  "height": {},
  "hideTimeOverride": true,
  "hideZeroBuckets": true,
  "highlightCards": true,
  "id": 0,
  "isNew": true,
  "leftYAxisLabel": "string",
  "legend": {
    "alignAsTable": true,
    "avg": true,
    "current": true,
    "hideEmpty": true,
    "hideZero": true,
    "max": true,
    "min": true,
    "rightSide": true,
    "show": true,
    "sideWidth": 0,
    "total": true,
    "values": true
  },
  "limit": 0,
  "lines": true,
  "linewidth": 0,
  "links": [
    {
      "asDropdown": true,
      "dashUri": "string",
      "dashboard": "string",
      "icon": "string",
      "includeVars": true,
      "keepTime": true,
      "params": "string",
      "tags": [
        "string"
      ],
      "targetBlank": true,
      "title": "string",
      "tooltip": "string",
      "type": "string",
      "url": "string"
    }
  ],
  "mappingType": 0,
  "mappingTypes": [
    {
      "name": "string",
      "value": 0
    }
  ],
  "maxDataPoints": {
    "Valid": true,
    "Value": 0
  },
  "minSpan": 0,
  "mode": "string",
  "nameFilter": "string",
  "nullPointMode": "string",
  "onlyAlertsOnDashboard": true,
  "options": {
    "colorMode": "string",
    "content": "string",
    "displayMode": "string",
    "graphMode": "string",
    "justifyMode": "string",
    "mode": "string",
    "orientation": "string",
    "reduceOptions": {
      "calcs": [
        "string"
      ],
      "fields": "string",
      "values": true
    },
    "textMode": "string"
  },
  "pageSize": 0,
  "panels": [
    {
      "alert": {
        "alertRuleTags": {
          "property1": "string",
          "property2": "string"
        },
        "conditions": [
          {
            "evaluator": {
              "params": [
                0
              ],
              "type": "string"
            },
            "operator": {
              "type": "string"
            },
            "query": {
              "params": [
                "string"
              ]
            },
            "reducer": {
              "params": [
                "string"
              ],
              "type": "string"
            },
            "type": "string"
          }
        ],
        "executionErrorState": "string",
        "for": "string",
        "frequency": "string",
        "handler": 0,
        "message": "string",
        "name": "string",
        "noDataState": "string",
        "notifications": [
          {
            "disableResolveMessage": true,
            "frequency": "string",
            "id": 0,
            "isDefault": true,
            "name": "string",
            "sendReminder": true,
            "settings": {},
            "type": "string",
            "uid": "string"
          }
        ]
      },
      "aliasColors": {},
      "bars": true,
      "cards": {
        "cardPadding": 0,
        "cardRound": 0
      },
      "collapsed": true,
      "color": {
        "cardColor": "string",
        "colorScale": "string",
        "colorScheme": "string",
        "exponent": 0,
        "max": 0,
        "min": 0,
        "mode": "string"
      },
      "colorBackground": true,
      "colorValue": true,
      "colors": [
        "string"
      ],
      "columns": [
        {
          "text": "string",
          "value": "string"
        }
      ],
      "content": "string",
      "dashLength": 0,
      "dashboardTags": [
        "string"
      ],
      "dashes": true,
      "dataFormat": "string",
      "datasource": "string",
      "decimals": 0,
      "description": "string",
      "editable": true,
      "error": true,
      "fieldConfig": {
        "defaults": {
          "threshold": {
            "mode": "string",
            "steps": [
              {
                "color": "string",
                "value": "string"
              }
            ]
          },
          "unit": "string"
        }
      },
      "fill": 0,
      "folderId": 0,
      "format": "string",
      "gauge": {
        "maxValue": 0,
        "minValue": 0,
        "show": true,
        "thresholdLabels": true,
        "thresholdMarkers": true
      },
      "gridPos": {
        "h": 0,
        "w": 0,
        "x": 0,
        "y": 0
      },
      "headings": true,
      "height": {},
      "hideTimeOverride": true,
      "hideZeroBuckets": true,
      "highlightCards": true,
      "id": 0,
      "isNew": true,
      "leftYAxisLabel": "string",
      "legend": {
        "alignAsTable": true,
        "avg": true,
        "current": true,
        "hideEmpty": true,
        "hideZero": true,
        "max": true,
        "min": true,
        "rightSide": true,
        "show": true,
        "sideWidth": 0,
        "total": true,
        "values": true
      },
      "limit": 0,
      "lines": true,
      "linewidth": 0,
      "links": [
        {
          "asDropdown": true,
          "dashUri": "string",
          "dashboard": "string",
          "icon": "string",
          "includeVars": true,
          "keepTime": true,
          "params": "string",
          "tags": [
            "string"
          ],
          "targetBlank": true,
          "title": "string",
          "tooltip": "string",
          "type": "string",
          "url": "string"
        }
      ],
      "mappingType": 0,
      "mappingTypes": [
        {
          "name": "string",
          "value": 0
        }
      ],
      "maxDataPoints": {
        "Valid": true,
        "Value": 0
      },
      "minSpan": 0,
      "mode": "string",
      "nameFilter": "string",
      "nullPointMode": "string",
      "onlyAlertsOnDashboard": true,
      "options": {
        "colorMode": "string",
        "content": "string",
        "displayMode": "string",
        "graphMode": "string",
        "justifyMode": "string",
        "mode": "string",
        "orientation": "string",
        "reduceOptions": {
          "calcs": [
            "string"
          ],
          "fields": "string",
          "values": true
        },
        "textMode": "string"
      },
      "pageSize": 0,
      "panels": [
        {}
      ],
      "percentage": true,
      "pointradius": 0,
      "points": true,
      "postfix": "string",
      "postfixFontSize": "string",
      "prefix": "string",
      "prefixFontSize": "string",
      "query": "string",
      "rangeMaps": [
        {
          "from": "string",
          "text": "string",
          "to": "string"
        }
      ],
      "recent": true,
      "renderer": "string",
      "repeat": "string",
      "repeatPanelId": 0,
      "reverseYBuckets": true,
      "rightYAxisLabel": "string",
      "scopedVars": {
        "property1": {
          "selected": true,
          "text": "string",
          "value": "string"
        },
        "property2": {
          "selected": true,
          "text": "string",
          "value": "string"
        }
      },
      "scroll": true,
      "search": true,
      "seriesOverrides": [
        {
          "alias": "string",
          "bars": true,
          "color": "string",
          "dashes": true,
          "fill": 0,
          "fillBelowTo": "string",
          "legend": true,
          "lines": true,
          "linewidth": 0,
          "nullPointMode": "string",
          "stack": {
            "Flag": true,
            "Value": "string"
          },
          "transform": "string",
          "yaxis": 0,
          "zindex": 0
        }
      ],
      "show": "string",
      "showHeader": true,
      "sort": {
        "col": 0,
        "desc": true
      },
      "sortOrder": 0,
      "spaceLength": 0,
      "span": 0,
      "sparkline": {
        "fillColor": "string",
        "full": true,
        "lineColor": "string",
        "show": true,
        "ymax": 0,
        "ymin": 0
      },
      "stack": true,
      "starred": true,
      "stateFilter": [
        "string"
      ],
      "steppedLine": true,
      "styles": [
        {
          "alias": "string",
          "colorMode": "string",
          "colors": [
            "string"
          ],
          "dateFormat": "string",
          "decimals": 0,
          "link": true,
          "linkTargetBlank": true,
          "linkTooltip": "string",
          "linkUrl": "string",
          "mappingType": 0,
          "pattern": "string",
          "thresholds": [
            "string"
          ],
          "type": "string",
          "unit": "string",
          "valueMaps": [
            {
              "op": "string",
              "text": "string",
              "value": "string"
            }
          ]
        }
      ],
      "tags": [
        "string"
      ],
      "targets": [
        {
          "alias": "string",
          "aliasBy": "string",
          "alignOptions": [
            {
              "expanded": true,
              "label": "string",
              "options": [
                {
                  "label": "string",
                  "metricKinds": [
                    "string"
                  ],
                  "text": "string",
                  "value": "string",
                  "valueTypes": [
                    "string"
                  ]
                }
              ]
            }
          ],
          "alignmentPeriod": "string",
          "bucketAggs": [
            {
              "field": "string",
              "id": "string",
              "settings": {
                "interval": "string",
                "min_doc_count": {},
                "order": "string",
                "orderBy": "string",
                "size": "string"
              },
              "type": "string"
            }
          ],
          "crossSeriesReducer": "string",
          "datasource": "string",
          "dimensions": {
            "property1": "string",
            "property2": "string"
          },
          "dsType": "string",
          "expr": "string",
          "filters": [
            "string"
          ],
          "format": "string",
          "group": [
            {
              "params": [
                "string"
              ],
              "type": "string"
            }
          ],
          "groupBys": [
            "string"
          ],
          "hide": true,
          "instant": true,
          "interval": "string",
          "intervalFactor": 0,
          "legendFormat": "string",
          "measurement": "string",
          "metricColumn": "string",
          "metricKind": "string",
          "metricName": "string",
          "metricType": "string",
          "metrics": [
            {
              "field": "string",
              "id": "string",
              "type": "string"
            }
          ],
          "namespace": "string",
          "perSeriesAligner": "string",
          "period": "string",
          "projectName": "string",
          "query": "string",
          "rawQuery": true,
          "rawSql": "string",
          "refId": "string",
          "region": "string",
          "select": [
            [
              {
                "params": [
                  "string"
                ],
                "type": "string"
              }
            ]
          ],
          "statistics": [
            "string"
          ],
          "step": 0,
          "table": "string",
          "target": "string",
          "timeColumn": "string",
          "timeField": "string",
          "valueType": "string",
          "where": [
            {
              "datatype": "string",
              "name": "string",
              "params": [
                "string"
              ],
              "type": "string"
            }
          ]
        }
      ],
      "thresholds": "string",
      "timeFrom": "string",
      "timeShift": "string",
      "title": "string",
      "tooltip": {
        "msResolution": true,
        "shared": true,
        "sort": 0,
        "value_type": "string"
      },
      "tooltipDecimals": 0,
      "transform": "string",
      "transparent": true,
      "type": "string",
      "valueFontSize": "string",
      "valueMaps": [
        {
          "op": "string",
          "text": "string",
          "value": "string"
        }
      ],
      "valueName": "string",
      "x-axis": true,
      "xAxis": {
        "show": true
      },
      "xBucketNumber": 0,
      "xBucketSize": "string",
      "xaxis": {
        "decimals": 0,
        "format": "string",
        "label": "string",
        "logBase": 0,
        "max": {
          "Valid": true,
          "Value": 0
        },
        "min": {
          "Valid": true,
          "Value": 0
        },
        "show": true
      },
      "y-axis": true,
      "yAxis": {
        "decimals": 0,
        "format": "string",
        "logBase": 0,
        "max": "string",
        "min": "string",
        "show": true,
        "splitFactor": 0
      },
      "yBucketBound": "string",
      "yBucketNumber": 0,
      "yBucketSize": 0,
      "y_formats": [
        "string"
      ],
      "yaxes": [
        {
          "decimals": 0,
          "format": "string",
          "label": "string",
          "logBase": 0,
          "max": {
            "Valid": true,
            "Value": 0
          },
          "min": {
            "Valid": true,
            "Value": 0
          },
          "show": true
        }
      ]
    }
  ],
  "percentage": true,
  "pointradius": 0,
  "points": true,
  "postfix": "string",
  "postfixFontSize": "string",
  "prefix": "string",
  "prefixFontSize": "string",
  "query": "string",
  "rangeMaps": [
    {
      "from": "string",
      "text": "string",
      "to": "string"
    }
  ],
  "recent": true,
  "renderer": "string",
  "repeat": "string",
  "repeatPanelId": 0,
  "reverseYBuckets": true,
  "rightYAxisLabel": "string",
  "scopedVars": {
    "property1": {
      "selected": true,
      "text": "string",
      "value": "string"
    },
    "property2": {
      "selected": true,
      "text": "string",
      "value": "string"
    }
  },
  "scroll": true,
  "search": true,
  "seriesOverrides": [
    {
      "alias": "string",
      "bars": true,
      "color": "string",
      "dashes": true,
      "fill": 0,
      "fillBelowTo": "string",
      "legend": true,
      "lines": true,
      "linewidth": 0,
      "nullPointMode": "string",
      "stack": {
        "Flag": true,
        "Value": "string"
      },
      "transform": "string",
      "yaxis": 0,
      "zindex": 0
    }
  ],
  "show": "string",
  "showHeader": true,
  "sort": {
    "col": 0,
    "desc": true
  },
  "sortOrder": 0,
  "spaceLength": 0,
  "span": 0,
  "sparkline": {
    "fillColor": "string",
    "full": true,
    "lineColor": "string",
    "show": true,
    "ymax": 0,
    "ymin": 0
  },
  "stack": true,
  "starred": true,
  "stateFilter": [
    "string"
  ],
  "steppedLine": true,
  "styles": [
    {
      "alias": "string",
      "colorMode": "string",
      "colors": [
        "string"
      ],
      "dateFormat": "string",
      "decimals": 0,
      "link": true,
      "linkTargetBlank": true,
      "linkTooltip": "string",
      "linkUrl": "string",
      "mappingType": 0,
      "pattern": "string",
      "thresholds": [
        "string"
      ],
      "type": "string",
      "unit": "string",
      "valueMaps": [
        {
          "op": "string",
          "text": "string",
          "value": "string"
        }
      ]
    }
  ],
  "tags": [
    "string"
  ],
  "targets": [
    {
      "alias": "string",
      "aliasBy": "string",
      "alignOptions": [
        {
          "expanded": true,
          "label": "string",
          "options": [
            {
              "label": "string",
              "metricKinds": [
                "string"
              ],
              "text": "string",
              "value": "string",
              "valueTypes": [
                "string"
              ]
            }
          ]
        }
      ],
      "alignmentPeriod": "string",
      "bucketAggs": [
        {
          "field": "string",
          "id": "string",
          "settings": {
            "interval": "string",
            "min_doc_count": {},
            "order": "string",
            "orderBy": "string",
            "size": "string"
          },
          "type": "string"
        }
      ],
      "crossSeriesReducer": "string",
      "datasource": "string",
      "dimensions": {
        "property1": "string",
        "property2": "string"
      },
      "dsType": "string",
      "expr": "string",
      "filters": [
        "string"
      ],
      "format": "string",
      "group": [
        {
          "params": [
            "string"
          ],
          "type": "string"
        }
      ],
      "groupBys": [
        "string"
      ],
      "hide": true,
      "instant": true,
      "interval": "string",
      "intervalFactor": 0,
      "legendFormat": "string",
      "measurement": "string",
      "metricColumn": "string",
      "metricKind": "string",
      "metricName": "string",
      "metricType": "string",
      "metrics": [
        {
          "field": "string",
          "id": "string",
          "type": "string"
        }
      ],
      "namespace": "string",
      "perSeriesAligner": "string",
      "period": "string",
      "projectName": "string",
      "query": "string",
      "rawQuery": true,
      "rawSql": "string",
      "refId": "string",
      "region": "string",
      "select": [
        [
          {
            "params": [
              "string"
            ],
            "type": "string"
          }
        ]
      ],
      "statistics": [
        "string"
      ],
      "step": 0,
      "table": "string",
      "target": "string",
      "timeColumn": "string",
      "timeField": "string",
      "valueType": "string",
      "where": [
        {
          "datatype": "string",
          "name": "string",
          "params": [
            "string"
          ],
          "type": "string"
        }
      ]
    }
  ],
  "thresholds": "string",
  "timeFrom": "string",
  "timeShift": "string",
  "title": "string",
  "tooltip": {
    "msResolution": true,
    "shared": true,
    "sort": 0,
    "value_type": "string"
  },
  "tooltipDecimals": 0,
  "transform": "string",
  "transparent": true,
  "type": "string",
  "valueFontSize": "string",
  "valueMaps": [
    {
      "op": "string",
      "text": "string",
      "value": "string"
    }
  ],
  "valueName": "string",
  "x-axis": true,
  "xAxis": {
    "show": true
  },
  "xBucketNumber": 0,
  "xBucketSize": "string",
  "xaxis": {
    "decimals": 0,
    "format": "string",
    "label": "string",
    "logBase": 0,
    "max": {
      "Valid": true,
      "Value": 0
    },
    "min": {
      "Valid": true,
      "Value": 0
    },
    "show": true
  },
  "y-axis": true,
  "yAxis": {
    "decimals": 0,
    "format": "string",
    "logBase": 0,
    "max": "string",
    "min": "string",
    "show": true,
    "splitFactor": 0
  },
  "yBucketBound": "string",
  "yBucketNumber": 0,
  "yBucketSize": 0,
  "y_formats": [
    "string"
  ],
  "yaxes": [
    {
      "decimals": 0,
      "format": "string",
      "label": "string",
      "logBase": 0,
      "max": {
        "Valid": true,
        "Value": 0
      },
      "min": {
        "Valid": true,
        "Value": 0
      },
      "show": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alert|[Alert](#schemaalert)|false|none|none|
|aliasColors|object|false|none|none|
|bars|boolean|false|none|none|
|cards|object|false|none|none|
|collapsed|boolean|false|none|none|
|color|object|false|none|none|
|colorBackground|boolean|false|none|none|
|colorValue|boolean|false|none|none|
|colors|[string]|false|none|none|
|columns|[[Column](#schemacolumn)]|false|none|none|
|content|string|false|none|none|
|dashLength|integer(uint64)|false|none|none|
|dashboardTags|[string]|false|none|none|
|dashes|boolean|false|none|none|
|dataFormat|string|false|none|none|
|datasource|string|false|none|none|
|decimals|integer(int64)|false|none|none|
|description|string|false|none|none|
|editable|boolean|false|none|none|
|error|boolean|false|none|none|
|fieldConfig|[FieldConfig](#schemafieldconfig)|false|none|none|
|fill|integer(int64)|false|none|none|
|folderId|integer(int64)|false|none|none|
|format|string|false|none|none|
|gauge|[Gauge](#schemagauge)|false|none|for a stat|
|gridPos|object|false|none|none|
|headings|boolean|false|none|none|
|height|object|false|none|none|
|hideTimeOverride|boolean|false|none|none|
|hideZeroBuckets|boolean|false|none|none|
|highlightCards|boolean|false|none|none|
|id|integer(uint64)|false|none|none|
|isNew|boolean|false|none|none|
|leftYAxisLabel|string|false|none|none|
|legend|[Legend](#schemalegend)|false|none|for a graph panel|
|limit|integer(int64)|false|none|none|
|lines|boolean|false|none|none|
|linewidth|integer(uint64)|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|mappingType|integer(uint64)|false|none|none|
|mappingTypes|[[MapType](#schemamaptype)]|false|none|none|
|maxDataPoints|[IntString](#schemaintstring)|false|none|none|
|minSpan|number(float)|false|none|none|
|mode|string|false|none|none|
|nameFilter|string|false|none|none|
|nullPointMode|string|false|none|none|
|onlyAlertsOnDashboard|boolean|false|none|none|
|options|[Options](#schemaoptions)|false|none|none|
|pageSize|integer(uint64)|false|none|none|
|panels|[[Panel](#schemapanel)]|false|none|none|
|percentage|boolean|false|none|none|
|pointradius|number(float)|false|none|none|
|points|boolean|false|none|none|
|postfix|string|false|none|none|
|postfixFontSize|string|false|none|none|
|prefix|string|false|none|none|
|prefixFontSize|string|false|none|none|
|query|string|false|none|none|
|rangeMaps|[[RangeMap](#schemarangemap)]|false|none|none|
|recent|boolean|false|none|none|
|renderer|string|false|none|none|
|repeat|string|false|none|none|
|repeatPanelId|integer(uint64)|false|none|RepeatIteration *int64   `json:"repeatIteration,omitempty"`|
|reverseYBuckets|boolean|false|none|none|
|rightYAxisLabel|string|false|none|none|
|scopedVars|object|false|none|none|
|scroll|boolean|false|none|none|
|search|boolean|false|none|none|
|seriesOverrides|[[SeriesOverride](#schemaseriesoverride)]|false|none|none|
|show|string|false|none|none|
|showHeader|boolean|false|none|none|
|sort|[Sort](#schemasort)|false|none|for a graph panel|
|sortOrder|integer(int64)|false|none|none|
|spaceLength|integer(uint64)|false|none|none|
|span|number(float)|false|none|none|
|sparkline|[SparkLine](#schemasparkline)|false|none|for a stat|
|stack|boolean|false|none|none|
|starred|boolean|false|none|none|
|stateFilter|[string]|false|none|none|
|steppedLine|boolean|false|none|none|
|styles|[[ColumnStyle](#schemacolumnstyle)]|false|none|none|
|tags|[string]|false|none|none|
|targets|[[Target](#schematarget)]|false|none|none|
|thresholds|string|false|none|none|
|timeFrom|string|false|none|none|
|timeShift|string|false|none|none|
|title|string|false|none|none|
|tooltip|[Tooltip](#schematooltip)|false|none|none|
|tooltipDecimals|integer(int64)|false|none|none|
|transform|string|false|none|none|
|transparent|boolean|false|none|none|
|type|string|false|none|none|
|valueFontSize|string|false|none|none|
|valueMaps|[[ValueMap](#schemavaluemap)]|false|none|none|
|valueName|string|false|none|none|
|x-axis|boolean|false|none|none|
|xAxis|object|false|none|none|
|xBucketNumber|number(double)|false|none|none|
|xBucketSize|string|false|none|none|
|xaxis|[Axis](#schemaaxis)|false|none|for a graph panel|
|y-axis|boolean|false|none|none|
|yAxis|object|false|none|none|
|yBucketBound|string|false|none|none|
|yBucketNumber|number(double)|false|none|none|
|yBucketSize|number(double)|false|none|none|
|y_formats|[string]|false|none|none|
|yaxes|[[Axis](#schemaaxis)]|false|none|none|

<h2 id="tocS_PatternsAPIResponse">PatternsAPIResponse</h2>
<!-- backwards compatibility -->
<a id="schemapatternsapiresponse"></a>
<a id="schema_PatternsAPIResponse"></a>
<a id="tocSpatternsapiresponse"></a>
<a id="tocspatternsapiresponse"></a>

```json
{
  "page": 0,
  "page_size": 0,
  "patterns": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "id": [
        0
      ],
      "location": {
        "property1": {},
        "property2": {}
      },
      "name": "string",
      "pattern_file": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "user_id": "string"
    }
  ],
  "total_count": 0
}
```

PatternsAPIResponse response retruned by patternfile endpoint on meshery server

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer(uint64)|false|none|none|
|page_size|integer(uint64)|false|none|none|
|patterns|[[MesheryPattern](#schemamesherypattern)]|false|none|none|
|total_count|integer(uint64)|false|none|none|

<h2 id="tocS_PerformanceProfile">PerformanceProfile</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceprofile"></a>
<a id="schema_PerformanceProfile"></a>
<a id="tocSperformanceprofile"></a>
<a id="tocsperformanceprofile"></a>

```json
{
  "concurrent_request": 0,
  "content_type": "string",
  "created_at": {},
  "duration": "string",
  "endpoints": [
    "string"
  ],
  "id": [
    0
  ],
  "last_run": {},
  "load_generators": [
    "string"
  ],
  "name": "string",
  "qps": 0,
  "request_body": "string",
  "request_cookies": "string",
  "request_headers": "string",
  "schedule": [
    0
  ],
  "service_mesh": "string",
  "total_results": 0,
  "updated_at": {}
}
```

PerformanceProfile represents the performance profile that needs
to be saved

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|concurrent_request|integer(int64)|false|none|none|
|content_type|string|false|none|none|
|created_at|[Time](#schematime)|false|none|+protobuf.options.marshal=false<br>+protobuf.as=Timestamp<br>+protobuf.options.(gogoproto.goproto_stringer)=false|
|duration|string|false|none|none|
|endpoints|[StringArray](#schemastringarray)|false|none|none|
|id|[UUID](#schemauuid)|false|none|none|
|last_run|[Time](#schematime)|false|none|+protobuf.options.marshal=false<br>+protobuf.as=Timestamp<br>+protobuf.options.(gogoproto.goproto_stringer)=false|
|load_generators|[StringArray](#schemastringarray)|false|none|none|
|name|string|false|none|none|
|qps|integer(int64)|false|none|none|
|request_body|string|false|none|none|
|request_cookies|string|false|none|none|
|request_headers|string|false|none|none|
|schedule|[UUID](#schemauuid)|false|none|none|
|service_mesh|string|false|none|none|
|total_results|integer(int64)|false|none|none|
|updated_at|[Time](#schematime)|false|none|+protobuf.options.marshal=false<br>+protobuf.as=Timestamp<br>+protobuf.options.(gogoproto.goproto_stringer)=false|

<h2 id="tocS_PerformanceProfileParameters">PerformanceProfileParameters</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceprofileparameters"></a>
<a id="schema_PerformanceProfileParameters"></a>
<a id="tocSperformanceprofileparameters"></a>
<a id="tocsperformanceprofileparameters"></a>

```json
{
  "concurrent_request": 0,
  "duration": "string",
  "endpoints": [
    "string"
  ],
  "load_generators": [
    "string"
  ],
  "name": "string",
  "qps": 0,
  "service_mesh": "string"
}
```

PerformanceProfileParameters structs contains parameters to save a performance profile

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|concurrent_request|integer(int64)|false|none|number of concurrent requests|
|duration|string|false|none|duration of tests e.g. 30s|
|endpoints|[string]|false|none|array of urls of performance results|
|load_generators|[string]|false|none|array of load generators|
|name|string|false|none|name of performance profile|
|qps|integer(int64)|false|none|qps in integer|
|service_mesh|string|false|none|service mesh for performance tests|

<h2 id="tocS_PerformanceProfilesAPIResponse">PerformanceProfilesAPIResponse</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceprofilesapiresponse"></a>
<a id="schema_PerformanceProfilesAPIResponse"></a>
<a id="tocSperformanceprofilesapiresponse"></a>
<a id="tocsperformanceprofilesapiresponse"></a>

```json
{
  "page": 0,
  "page_size": 0,
  "profiles": [
    {
      "concurrent_request": 0,
      "content_type": "string",
      "created_at": {},
      "duration": "string",
      "endpoints": [
        "string"
      ],
      "id": [
        0
      ],
      "last_run": {},
      "load_generators": [
        "string"
      ],
      "name": "string",
      "qps": 0,
      "request_body": "string",
      "request_cookies": "string",
      "request_headers": "string",
      "schedule": [
        0
      ],
      "service_mesh": "string",
      "total_results": 0,
      "updated_at": {}
    }
  ],
  "total_count": 0
}
```

PerformanceProfilesAPIResponse response retruned by performance endpoint on meshery server

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer(uint64)|false|none|none|
|page_size|integer(uint64)|false|none|none|
|profiles|[[PerformanceProfile](#schemaperformanceprofile)]|false|none|none|
|total_count|integer(uint64)|false|none|none|

<h2 id="tocS_PerformanceResult">PerformanceResult</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceresult"></a>
<a id="schema_PerformanceResult"></a>
<a id="tocSperformanceresult"></a>
<a id="tocsperformanceresult"></a>

```json
{
  "mesh": "string",
  "meshery_id": [
    0
  ],
  "name": "string",
  "performance_profile": [
    0
  ],
  "runner_results": {
    "ActualDuration": 0,
    "ActualQPS": 0,
    "DurationHistogram": {
      "Avg": 0,
      "Max": 0,
      "Min": 0,
      "Percentiles": [
        {
          "Percentile": 0,
          "Value": 0
        }
      ]
    },
    "StartTime": "1970-01-01T00:00:00Z",
    "URL": "string",
    "load-generator": "string"
  },
  "server_board_config": {},
  "server_metrics": {},
  "test_start_time": "1970-01-01T00:00:00Z",
  "user_id": [
    0
  ]
}
```

PerformanceResult represents the result of a performance test

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mesh|string|false|none|none|
|meshery_id|[UUID](#schemauuid)|false|none|none|
|name|string|false|none|none|
|performance_profile|[UUID](#schemauuid)|false|none|none|
|runner_results|[RunnerResults](#schemarunnerresults)|false|none|none|
|server_board_config|object|false|none|none|
|server_metrics|object|false|none|none|
|test_start_time|string(date-time)|false|none|none|
|user_id|[UUID](#schemauuid)|false|none|none|

<h2 id="tocS_PerformanceResultsAPIResponse">PerformanceResultsAPIResponse</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceresultsapiresponse"></a>
<a id="schema_PerformanceResultsAPIResponse"></a>
<a id="tocSperformanceresultsapiresponse"></a>
<a id="tocsperformanceresultsapiresponse"></a>

```json
{
  "page": 0,
  "page_size": 0,
  "results": [
    {
      "mesh": "string",
      "meshery_id": [
        0
      ],
      "name": "string",
      "performance_profile": [
        0
      ],
      "runner_results": {
        "ActualDuration": 0,
        "ActualQPS": 0,
        "DurationHistogram": {
          "Avg": 0,
          "Max": 0,
          "Min": 0,
          "Percentiles": [
            {
              "Percentile": 0,
              "Value": 0
            }
          ]
        },
        "StartTime": "1970-01-01T00:00:00Z",
        "URL": "string",
        "load-generator": "string"
      },
      "server_board_config": {},
      "server_metrics": {},
      "test_start_time": "1970-01-01T00:00:00Z",
      "user_id": [
        0
      ]
    }
  ],
  "total_count": 0
}
```

PerformanceResultsAPIResponse response retruned by performance endpoint on meshery server

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer(uint64)|false|none|none|
|page_size|integer(uint64)|false|none|none|
|results|[[PerformanceResult](#schemaperformanceresult)]|false|none|none|
|total_count|integer(uint64)|false|none|none|

<h2 id="tocS_PerformanceSpec">PerformanceSpec</h2>
<!-- backwards compatibility -->
<a id="schemaperformancespec"></a>
<a id="schema_PerformanceSpec"></a>
<a id="tocSperformancespec"></a>
<a id="tocsperformancespec"></a>

```json
{
  "ActualQPS": 0,
  "DetailsURI": "string",
  "EndTime": "1970-01-01T00:00:00Z",
  "EnvID": "string",
  "Latencies": {
    "Average": 0,
    "Max": 0,
    "Min": 0,
    "P50": 0,
    "P90": 0,
    "P99": 0
  },
  "MeshConfigID": "string",
  "SMPVersion": "string",
  "StartTime": "1970-01-01T00:00:00Z",
  "TestID": "string"
}
```

PerformanceSpec - represents SMP, see here https://github.com/layer5io/service-mesh-performance-specification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActualQPS|number(double)|false|none|none|
|DetailsURI|string|false|none|none|
|EndTime|string(date-time)|false|none|none|
|EnvID|string|false|none|none|
|Latencies|[LatenciesMs](#schemalatenciesms)|false|none|LatenciesMs - represents a collection of important latencies|
|MeshConfigID|string|false|none|none|
|SMPVersion|string|false|none|none|
|StartTime|string(date-time)|false|none|none|
|TestID|string|false|none|none|

<h2 id="tocS_PerformanceTestConfig">PerformanceTestConfig</h2>
<!-- backwards compatibility -->
<a id="schemaperformancetestconfig"></a>
<a id="schema_PerformanceTestConfig"></a>
<a id="tocSperformancetestconfig"></a>
<a id="tocsperformancetestconfig"></a>

```json
{
  "clients": [
    {
      "body": "string",
      "connections": 0,
      "content_type": "string",
      "cookies": {
        "property1": "string",
        "property2": "string"
      },
      "endpoint_urls": [
        "string"
      ],
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "internal": true,
      "load_generator": "string",
      "protocol": 0,
      "rps": 0
    }
  ],
  "duration": "string",
  "id": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "smp_version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clients|[[PerformanceTestConfig_Client](#schemaperformancetestconfig_client)]|false|none|Single or distributed load generators|
|duration|string|false|none|Length of time the endpoint will be under load|
|id|string|false|none|none|
|labels|object|false|none|none|
|name|string|false|none|none|
|smp_version|string|false|none|Spec version|

<h2 id="tocS_PerformanceTestConfig_Client">PerformanceTestConfig_Client</h2>
<!-- backwards compatibility -->
<a id="schemaperformancetestconfig_client"></a>
<a id="schema_PerformanceTestConfig_Client"></a>
<a id="tocSperformancetestconfig_client"></a>
<a id="tocsperformancetestconfig_client"></a>

```json
{
  "body": "string",
  "connections": 0,
  "content_type": "string",
  "cookies": {
    "property1": "string",
    "property2": "string"
  },
  "endpoint_urls": [
    "string"
  ],
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "internal": true,
  "load_generator": "string",
  "protocol": 0,
  "rps": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|none|
|connections|integer(int32)|false|none|none|
|content_type|string|false|none|none|
|cookies|object|false|none|none|
|endpoint_urls|[string]|false|none|none|
|headers|object|false|none|none|
|internal|boolean|false|none|none|
|load_generator|string|false|none|none|
|protocol|[PerformanceTestConfig_Client_Protocol](#schemaperformancetestconfig_client_protocol)|false|none|none|
|rps|integer(int64)|false|none|none|

<h2 id="tocS_PerformanceTestConfig_Client_Protocol">PerformanceTestConfig_Client_Protocol</h2>
<!-- backwards compatibility -->
<a id="schemaperformancetestconfig_client_protocol"></a>
<a id="schema_PerformanceTestConfig_Client_Protocol"></a>
<a id="tocSperformancetestconfig_client_protocol"></a>
<a id="tocsperformancetestconfig_client_protocol"></a>

```json
0
```

<h2 id="tocS_PerformanceTestParameters">PerformanceTestParameters</h2>
<!-- backwards compatibility -->
<a id="schemaperformancetestparameters"></a>
<a id="schema_PerformanceTestParameters"></a>
<a id="tocSperformancetestparameters"></a>
<a id="tocsperformancetestparameters"></a>

```json
{
  "c": 0,
  "dur": "string",
  "loadGenerator": "string",
  "mesh": "string",
  "name": "string",
  "qps": 0,
  "t": 0,
  "url": "string",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

PerformanceTestParameters contains parameters to run a performance test

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|c|integer(int64)|false|none|concurrent request in number|
|dur|string|false|none|duration e.g. s for second|
|loadGenerator|string|false|none|load generator for performance test|
|mesh|string|false|none|service mesh for performance test|
|name|string|false|none|name of performance test|
|qps|integer(int64)|false|none|qps in number|
|t|integer(int64)|false|none|time in integer e.g. 30|
|url|string|false|none|url for test|
|uuid|string(uuid)|false|none|test-id of pre-existing test|

<h2 id="tocS_Plugin">Plugin</h2>
<!-- backwards compatibility -->
<a id="schemaplugin"></a>
<a id="schema_Plugin"></a>
<a id="tocSplugin"></a>
<a id="tocsplugin"></a>

```json
{
  "Config": {
    "Args": {
      "Description": "string",
      "Name": "string",
      "Settable": [
        "string"
      ],
      "Value": [
        "string"
      ]
    },
    "Description": "string",
    "DockerVersion": "string",
    "Documentation": "string",
    "Entrypoint": [
      "string"
    ],
    "Env": [
      {
        "Description": "string",
        "Name": "string",
        "Settable": [
          "string"
        ],
        "Value": "string"
      }
    ],
    "Interface": {
      "ProtocolScheme": "string",
      "Socket": "string",
      "Types": [
        {
          "Capability": "string",
          "Prefix": "string",
          "Version": "string"
        }
      ]
    },
    "IpcHost": true,
    "Linux": {
      "AllowAllDevices": true,
      "Capabilities": [
        "string"
      ],
      "Devices": [
        {
          "Description": "string",
          "Name": "string",
          "Path": "string",
          "Settable": [
            "string"
          ]
        }
      ]
    },
    "Mounts": [
      {
        "Description": "string",
        "Destination": "string",
        "Name": "string",
        "Options": [
          "string"
        ],
        "Settable": [
          "string"
        ],
        "Source": "string",
        "Type": "string"
      }
    ],
    "Network": {
      "Type": "string"
    },
    "PidHost": true,
    "PropagatedMount": "string",
    "User": {
      "GID": 0,
      "UID": 0
    },
    "WorkDir": "string",
    "rootfs": {
      "diff_ids": [
        "string"
      ],
      "type": "string"
    }
  },
  "Enabled": true,
  "Id": "string",
  "Name": "string",
  "PluginReference": "string",
  "Settings": {
    "Args": [
      "string"
    ],
    "Devices": [
      {
        "Description": "string",
        "Name": "string",
        "Path": "string",
        "Settable": [
          "string"
        ]
      }
    ],
    "Env": [
      "string"
    ],
    "Mounts": [
      {
        "Description": "string",
        "Destination": "string",
        "Name": "string",
        "Options": [
          "string"
        ],
        "Settable": [
          "string"
        ],
        "Source": "string",
        "Type": "string"
      }
    ]
  }
}
```

Plugin A plugin for the Engine API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Config|[PluginConfig](#schemapluginconfig)|true|none|none|
|Enabled|boolean|true|none|True if the plugin is running. False if the plugin is not running, only installed.|
|Id|string|false|none|Id|
|Name|string|true|none|name|
|PluginReference|string|false|none|plugin remote reference used to push/pull the plugin|
|Settings|[PluginSettings](#schemapluginsettings)|true|none|none|

<h2 id="tocS_PluginConfig">PluginConfig</h2>
<!-- backwards compatibility -->
<a id="schemapluginconfig"></a>
<a id="schema_PluginConfig"></a>
<a id="tocSpluginconfig"></a>
<a id="tocspluginconfig"></a>

```json
{
  "Args": {
    "Description": "string",
    "Name": "string",
    "Settable": [
      "string"
    ],
    "Value": [
      "string"
    ]
  },
  "Description": "string",
  "DockerVersion": "string",
  "Documentation": "string",
  "Entrypoint": [
    "string"
  ],
  "Env": [
    {
      "Description": "string",
      "Name": "string",
      "Settable": [
        "string"
      ],
      "Value": "string"
    }
  ],
  "Interface": {
    "ProtocolScheme": "string",
    "Socket": "string",
    "Types": [
      {
        "Capability": "string",
        "Prefix": "string",
        "Version": "string"
      }
    ]
  },
  "IpcHost": true,
  "Linux": {
    "AllowAllDevices": true,
    "Capabilities": [
      "string"
    ],
    "Devices": [
      {
        "Description": "string",
        "Name": "string",
        "Path": "string",
        "Settable": [
          "string"
        ]
      }
    ]
  },
  "Mounts": [
    {
      "Description": "string",
      "Destination": "string",
      "Name": "string",
      "Options": [
        "string"
      ],
      "Settable": [
        "string"
      ],
      "Source": "string",
      "Type": "string"
    }
  ],
  "Network": {
    "Type": "string"
  },
  "PidHost": true,
  "PropagatedMount": "string",
  "User": {
    "GID": 0,
    "UID": 0
  },
  "WorkDir": "string",
  "rootfs": {
    "diff_ids": [
      "string"
    ],
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Args|[PluginConfigArgs](#schemapluginconfigargs)|true|none|PluginConfigArgs plugin config args|
|Description|string|true|none|description|
|DockerVersion|string|false|none|Docker Version used to create the plugin|
|Documentation|string|true|none|documentation|
|Entrypoint|[string]|true|none|entrypoint|
|Env|[[PluginEnv](#schemapluginenv)]|true|none|env|
|Interface|[PluginConfigInterface](#schemapluginconfiginterface)|true|none|PluginConfigInterface The interface between Docker and the plugin|
|IpcHost|boolean|true|none|ipc host|
|Linux|[PluginConfigLinux](#schemapluginconfiglinux)|true|none|PluginConfigLinux plugin config linux|
|Mounts|[[PluginMount](#schemapluginmount)]|true|none|mounts|
|Network|[PluginConfigNetwork](#schemapluginconfignetwork)|true|none|PluginConfigNetwork plugin config network|
|PidHost|boolean|true|none|pid host|
|PropagatedMount|string|true|none|propagated mount|
|User|[PluginConfigUser](#schemapluginconfiguser)|false|none|PluginConfigUser plugin config user|
|WorkDir|string|true|none|work dir|
|rootfs|[PluginConfigRootfs](#schemapluginconfigrootfs)|false|none|PluginConfigRootfs plugin config rootfs|

<h2 id="tocS_PluginConfigArgs">PluginConfigArgs</h2>
<!-- backwards compatibility -->
<a id="schemapluginconfigargs"></a>
<a id="schema_PluginConfigArgs"></a>
<a id="tocSpluginconfigargs"></a>
<a id="tocspluginconfigargs"></a>

```json
{
  "Description": "string",
  "Name": "string",
  "Settable": [
    "string"
  ],
  "Value": [
    "string"
  ]
}
```

PluginConfigArgs plugin config args

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|string|true|none|description|
|Name|string|true|none|name|
|Settable|[string]|true|none|settable|
|Value|[string]|true|none|value|

<h2 id="tocS_PluginConfigInterface">PluginConfigInterface</h2>
<!-- backwards compatibility -->
<a id="schemapluginconfiginterface"></a>
<a id="schema_PluginConfigInterface"></a>
<a id="tocSpluginconfiginterface"></a>
<a id="tocspluginconfiginterface"></a>

```json
{
  "ProtocolScheme": "string",
  "Socket": "string",
  "Types": [
    {
      "Capability": "string",
      "Prefix": "string",
      "Version": "string"
    }
  ]
}
```

PluginConfigInterface The interface between Docker and the plugin

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtocolScheme|string|false|none|Protocol to use for clients connecting to the plugin.|
|Socket|string|true|none|socket|
|Types|[[PluginInterfaceType](#schemaplugininterfacetype)]|true|none|types|

<h2 id="tocS_PluginConfigLinux">PluginConfigLinux</h2>
<!-- backwards compatibility -->
<a id="schemapluginconfiglinux"></a>
<a id="schema_PluginConfigLinux"></a>
<a id="tocSpluginconfiglinux"></a>
<a id="tocspluginconfiglinux"></a>

```json
{
  "AllowAllDevices": true,
  "Capabilities": [
    "string"
  ],
  "Devices": [
    {
      "Description": "string",
      "Name": "string",
      "Path": "string",
      "Settable": [
        "string"
      ]
    }
  ]
}
```

PluginConfigLinux plugin config linux

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowAllDevices|boolean|true|none|allow all devices|
|Capabilities|[string]|true|none|capabilities|
|Devices|[[PluginDevice](#schemaplugindevice)]|true|none|devices|

<h2 id="tocS_PluginConfigNetwork">PluginConfigNetwork</h2>
<!-- backwards compatibility -->
<a id="schemapluginconfignetwork"></a>
<a id="schema_PluginConfigNetwork"></a>
<a id="tocSpluginconfignetwork"></a>
<a id="tocspluginconfignetwork"></a>

```json
{
  "Type": "string"
}
```

PluginConfigNetwork plugin config network

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|string|true|none|type|

<h2 id="tocS_PluginConfigRootfs">PluginConfigRootfs</h2>
<!-- backwards compatibility -->
<a id="schemapluginconfigrootfs"></a>
<a id="schema_PluginConfigRootfs"></a>
<a id="tocSpluginconfigrootfs"></a>
<a id="tocspluginconfigrootfs"></a>

```json
{
  "diff_ids": [
    "string"
  ],
  "type": "string"
}
```

PluginConfigRootfs plugin config rootfs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diff_ids|[string]|false|none|diff ids|
|type|string|false|none|type|

<h2 id="tocS_PluginConfigUser">PluginConfigUser</h2>
<!-- backwards compatibility -->
<a id="schemapluginconfiguser"></a>
<a id="schema_PluginConfigUser"></a>
<a id="tocSpluginconfiguser"></a>
<a id="tocspluginconfiguser"></a>

```json
{
  "GID": 0,
  "UID": 0
}
```

PluginConfigUser plugin config user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GID|integer(uint32)|false|none|g ID|
|UID|integer(uint32)|false|none|UID|

<h2 id="tocS_PluginDevice">PluginDevice</h2>
<!-- backwards compatibility -->
<a id="schemaplugindevice"></a>
<a id="schema_PluginDevice"></a>
<a id="tocSplugindevice"></a>
<a id="tocsplugindevice"></a>

```json
{
  "Description": "string",
  "Name": "string",
  "Path": "string",
  "Settable": [
    "string"
  ]
}
```

PluginDevice plugin device

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|string|true|none|description|
|Name|string|true|none|name|
|Path|string|true|none|path|
|Settable|[string]|true|none|settable|

<h2 id="tocS_PluginEnv">PluginEnv</h2>
<!-- backwards compatibility -->
<a id="schemapluginenv"></a>
<a id="schema_PluginEnv"></a>
<a id="tocSpluginenv"></a>
<a id="tocspluginenv"></a>

```json
{
  "Description": "string",
  "Name": "string",
  "Settable": [
    "string"
  ],
  "Value": "string"
}
```

PluginEnv plugin env

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|string|true|none|description|
|Name|string|true|none|name|
|Settable|[string]|true|none|settable|
|Value|string|true|none|value|

<h2 id="tocS_PluginInterfaceType">PluginInterfaceType</h2>
<!-- backwards compatibility -->
<a id="schemaplugininterfacetype"></a>
<a id="schema_PluginInterfaceType"></a>
<a id="tocSplugininterfacetype"></a>
<a id="tocsplugininterfacetype"></a>

```json
{
  "Capability": "string",
  "Prefix": "string",
  "Version": "string"
}
```

PluginInterfaceType plugin interface type

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Capability|string|true|none|capability|
|Prefix|string|true|none|prefix|
|Version|string|true|none|version|

<h2 id="tocS_PluginMount">PluginMount</h2>
<!-- backwards compatibility -->
<a id="schemapluginmount"></a>
<a id="schema_PluginMount"></a>
<a id="tocSpluginmount"></a>
<a id="tocspluginmount"></a>

```json
{
  "Description": "string",
  "Destination": "string",
  "Name": "string",
  "Options": [
    "string"
  ],
  "Settable": [
    "string"
  ],
  "Source": "string",
  "Type": "string"
}
```

PluginMount plugin mount

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|string|true|none|description|
|Destination|string|true|none|destination|
|Name|string|true|none|name|
|Options|[string]|true|none|options|
|Settable|[string]|true|none|settable|
|Source|string|true|none|source|
|Type|string|true|none|type|

<h2 id="tocS_PluginSettings">PluginSettings</h2>
<!-- backwards compatibility -->
<a id="schemapluginsettings"></a>
<a id="schema_PluginSettings"></a>
<a id="tocSpluginsettings"></a>
<a id="tocspluginsettings"></a>

```json
{
  "Args": [
    "string"
  ],
  "Devices": [
    {
      "Description": "string",
      "Name": "string",
      "Path": "string",
      "Settable": [
        "string"
      ]
    }
  ],
  "Env": [
    "string"
  ],
  "Mounts": [
    {
      "Description": "string",
      "Destination": "string",
      "Name": "string",
      "Options": [
        "string"
      ],
      "Settable": [
        "string"
      ],
      "Source": "string",
      "Type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Args|[string]|true|none|args|
|Devices|[[PluginDevice](#schemaplugindevice)]|true|none|devices|
|Env|[string]|true|none|env|
|Mounts|[[PluginMount](#schemapluginmount)]|true|none|mounts|

<h2 id="tocS_Port">Port</h2>
<!-- backwards compatibility -->
<a id="schemaport"></a>
<a id="schema_Port"></a>
<a id="tocSport"></a>
<a id="tocsport"></a>

```json
{
  "IP": "string",
  "PrivatePort": 0,
  "PublicPort": 0,
  "Type": "string"
}
```

Port An open port on a container

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IP|string|false|none|Host IP address that the container's port is mapped to|
|PrivatePort|integer(uint16)|true|none|Port on the container|
|PublicPort|integer(uint16)|false|none|Port exposed on the host|
|Type|string|true|none|type|

<h2 id="tocS_Preference">Preference</h2>
<!-- backwards compatibility -->
<a id="schemapreference"></a>
<a id="schema_Preference"></a>
<a id="tocSpreference"></a>
<a id="tocspreference"></a>

```json
{
  "anonymousPerfResults": true,
  "anonymousUsageStats": true,
  "grafana": {
    "grafanaAPIKey": "string",
    "grafanaURL": "string",
    "selectedBoardsConfigs": [
      {
        "board": {
          "org_id": 0,
          "panels": [
            {
              "alert": {
                "alertRuleTags": {
                  "property1": "string",
                  "property2": "string"
                },
                "conditions": [
                  {
                    "evaluator": {
                      "params": [
                        0
                      ],
                      "type": "string"
                    },
                    "operator": {
                      "type": "string"
                    },
                    "query": {
                      "params": [
                        "string"
                      ]
                    },
                    "reducer": {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    },
                    "type": "string"
                  }
                ],
                "executionErrorState": "string",
                "for": "string",
                "frequency": "string",
                "handler": 0,
                "message": "string",
                "name": "string",
                "noDataState": "string",
                "notifications": [
                  {
                    "disableResolveMessage": true,
                    "frequency": "string",
                    "id": 0,
                    "isDefault": true,
                    "name": "string",
                    "sendReminder": true,
                    "settings": {},
                    "type": "string",
                    "uid": "string"
                  }
                ]
              },
              "aliasColors": {},
              "bars": true,
              "cards": {
                "cardPadding": 0,
                "cardRound": 0
              },
              "collapsed": true,
              "color": {
                "cardColor": "string",
                "colorScale": "string",
                "colorScheme": "string",
                "exponent": 0,
                "max": 0,
                "min": 0,
                "mode": "string"
              },
              "colorBackground": true,
              "colorValue": true,
              "colors": [
                "string"
              ],
              "columns": [
                {
                  "text": "string",
                  "value": "string"
                }
              ],
              "content": "string",
              "dashLength": 0,
              "dashboardTags": [
                "string"
              ],
              "dashes": true,
              "dataFormat": "string",
              "datasource": "string",
              "decimals": 0,
              "description": "string",
              "editable": true,
              "error": true,
              "fieldConfig": {
                "defaults": {
                  "threshold": {
                    "mode": "string",
                    "steps": [
                      {
                        "color": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "unit": "string"
                }
              },
              "fill": 0,
              "folderId": 0,
              "format": "string",
              "gauge": {
                "maxValue": 0,
                "minValue": 0,
                "show": true,
                "thresholdLabels": true,
                "thresholdMarkers": true
              },
              "gridPos": {
                "h": 0,
                "w": 0,
                "x": 0,
                "y": 0
              },
              "headings": true,
              "height": {},
              "hideTimeOverride": true,
              "hideZeroBuckets": true,
              "highlightCards": true,
              "id": 0,
              "isNew": true,
              "leftYAxisLabel": "string",
              "legend": {
                "alignAsTable": true,
                "avg": true,
                "current": true,
                "hideEmpty": true,
                "hideZero": true,
                "max": true,
                "min": true,
                "rightSide": true,
                "show": true,
                "sideWidth": 0,
                "total": true,
                "values": true
              },
              "limit": 0,
              "lines": true,
              "linewidth": 0,
              "links": [
                {
                  "asDropdown": true,
                  "dashUri": "string",
                  "dashboard": "string",
                  "icon": "string",
                  "includeVars": true,
                  "keepTime": true,
                  "params": "string",
                  "tags": [
                    "string"
                  ],
                  "targetBlank": true,
                  "title": "string",
                  "tooltip": "string",
                  "type": "string",
                  "url": "string"
                }
              ],
              "mappingType": 0,
              "mappingTypes": [
                {
                  "name": "string",
                  "value": 0
                }
              ],
              "maxDataPoints": {
                "Valid": true,
                "Value": 0
              },
              "minSpan": 0,
              "mode": "string",
              "nameFilter": "string",
              "nullPointMode": "string",
              "onlyAlertsOnDashboard": true,
              "options": {
                "colorMode": "string",
                "content": "string",
                "displayMode": "string",
                "graphMode": "string",
                "justifyMode": "string",
                "mode": "string",
                "orientation": "string",
                "reduceOptions": {
                  "calcs": [
                    "string"
                  ],
                  "fields": "string",
                  "values": true
                },
                "textMode": "string"
              },
              "pageSize": 0,
              "panels": [
                {}
              ],
              "percentage": true,
              "pointradius": 0,
              "points": true,
              "postfix": "string",
              "postfixFontSize": "string",
              "prefix": "string",
              "prefixFontSize": "string",
              "query": "string",
              "rangeMaps": [
                {
                  "from": "string",
                  "text": "string",
                  "to": "string"
                }
              ],
              "recent": true,
              "renderer": "string",
              "repeat": "string",
              "repeatPanelId": 0,
              "reverseYBuckets": true,
              "rightYAxisLabel": "string",
              "scopedVars": {
                "property1": {
                  "selected": true,
                  "text": "string",
                  "value": "string"
                },
                "property2": {
                  "selected": true,
                  "text": "string",
                  "value": "string"
                }
              },
              "scroll": true,
              "search": true,
              "seriesOverrides": [
                {
                  "alias": "string",
                  "bars": true,
                  "color": "string",
                  "dashes": true,
                  "fill": 0,
                  "fillBelowTo": "string",
                  "legend": true,
                  "lines": true,
                  "linewidth": 0,
                  "nullPointMode": "string",
                  "stack": {
                    "Flag": true,
                    "Value": "string"
                  },
                  "transform": "string",
                  "yaxis": 0,
                  "zindex": 0
                }
              ],
              "show": "string",
              "showHeader": true,
              "sort": {
                "col": 0,
                "desc": true
              },
              "sortOrder": 0,
              "spaceLength": 0,
              "span": 0,
              "sparkline": {
                "fillColor": "string",
                "full": true,
                "lineColor": "string",
                "show": true,
                "ymax": 0,
                "ymin": 0
              },
              "stack": true,
              "starred": true,
              "stateFilter": [
                "string"
              ],
              "steppedLine": true,
              "styles": [
                {
                  "alias": "string",
                  "colorMode": "string",
                  "colors": [
                    "string"
                  ],
                  "dateFormat": "string",
                  "decimals": 0,
                  "link": true,
                  "linkTargetBlank": true,
                  "linkTooltip": "string",
                  "linkUrl": "string",
                  "mappingType": 0,
                  "pattern": "string",
                  "thresholds": [
                    "string"
                  ],
                  "type": "string",
                  "unit": "string",
                  "valueMaps": [
                    {
                      "op": "string",
                      "text": "string",
                      "value": "string"
                    }
                  ]
                }
              ],
              "tags": [
                "string"
              ],
              "targets": [
                {
                  "alias": "string",
                  "aliasBy": "string",
                  "alignOptions": [
                    {
                      "expanded": true,
                      "label": "string",
                      "options": [
                        {
                          "label": "string",
                          "metricKinds": [
                            "string"
                          ],
                          "text": "string",
                          "value": "string",
                          "valueTypes": [
                            "string"
                          ]
                        }
                      ]
                    }
                  ],
                  "alignmentPeriod": "string",
                  "bucketAggs": [
                    {
                      "field": "string",
                      "id": "string",
                      "settings": {
                        "interval": "string",
                        "min_doc_count": {},
                        "order": "string",
                        "orderBy": "string",
                        "size": "string"
                      },
                      "type": "string"
                    }
                  ],
                  "crossSeriesReducer": "string",
                  "datasource": "string",
                  "dimensions": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "dsType": "string",
                  "expr": "string",
                  "filters": [
                    "string"
                  ],
                  "format": "string",
                  "group": [
                    {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ],
                  "groupBys": [
                    "string"
                  ],
                  "hide": true,
                  "instant": true,
                  "interval": "string",
                  "intervalFactor": 0,
                  "legendFormat": "string",
                  "measurement": "string",
                  "metricColumn": "string",
                  "metricKind": "string",
                  "metricName": "string",
                  "metricType": "string",
                  "metrics": [
                    {
                      "field": "string",
                      "id": "string",
                      "type": "string"
                    }
                  ],
                  "namespace": "string",
                  "perSeriesAligner": "string",
                  "period": "string",
                  "projectName": "string",
                  "query": "string",
                  "rawQuery": true,
                  "rawSql": "string",
                  "refId": "string",
                  "region": "string",
                  "select": [
                    [
                      {
                        "params": [
                          "string"
                        ],
                        "type": "string"
                      }
                    ]
                  ],
                  "statistics": [
                    "string"
                  ],
                  "step": 0,
                  "table": "string",
                  "target": "string",
                  "timeColumn": "string",
                  "timeField": "string",
                  "valueType": "string",
                  "where": [
                    {
                      "datatype": "string",
                      "name": "string",
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ]
                }
              ],
              "thresholds": "string",
              "timeFrom": "string",
              "timeShift": "string",
              "title": "string",
              "tooltip": {
                "msResolution": true,
                "shared": true,
                "sort": 0,
                "value_type": "string"
              },
              "tooltipDecimals": 0,
              "transform": "string",
              "transparent": true,
              "type": "string",
              "valueFontSize": "string",
              "valueMaps": [
                {
                  "op": "string",
                  "text": "string",
                  "value": "string"
                }
              ],
              "valueName": "string",
              "x-axis": true,
              "xAxis": {
                "show": true
              },
              "xBucketNumber": 0,
              "xBucketSize": "string",
              "xaxis": {
                "decimals": 0,
                "format": "string",
                "label": "string",
                "logBase": 0,
                "max": {
                  "Valid": true,
                  "Value": 0
                },
                "min": {
                  "Valid": true,
                  "Value": 0
                },
                "show": true
              },
              "y-axis": true,
              "yAxis": {
                "decimals": 0,
                "format": "string",
                "logBase": 0,
                "max": "string",
                "min": "string",
                "show": true,
                "splitFactor": 0
              },
              "yBucketBound": "string",
              "yBucketNumber": 0,
              "yBucketSize": 0,
              "y_formats": [
                "string"
              ],
              "yaxes": [
                {
                  "decimals": 0,
                  "format": "string",
                  "label": "string",
                  "logBase": 0,
                  "max": {
                    "Valid": true,
                    "Value": 0
                  },
                  "min": {
                    "Valid": true,
                    "Value": 0
                  },
                  "show": true
                }
              ]
            }
          ],
          "slug": "string",
          "template_vars": [
            {
              "datasource": {
                "id": 0,
                "name": "string"
              },
              "hide": 0,
              "name": "string",
              "query": "string",
              "value": {}
            }
          ],
          "title": "string",
          "uid": "string",
          "uri": "string"
        },
        "panels": [
          {
            "alert": {
              "alertRuleTags": {
                "property1": "string",
                "property2": "string"
              },
              "conditions": [
                {
                  "evaluator": {
                    "params": [
                      0
                    ],
                    "type": "string"
                  },
                  "operator": {
                    "type": "string"
                  },
                  "query": {
                    "params": [
                      "string"
                    ]
                  },
                  "reducer": {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  },
                  "type": "string"
                }
              ],
              "executionErrorState": "string",
              "for": "string",
              "frequency": "string",
              "handler": 0,
              "message": "string",
              "name": "string",
              "noDataState": "string",
              "notifications": [
                {
                  "disableResolveMessage": true,
                  "frequency": "string",
                  "id": 0,
                  "isDefault": true,
                  "name": "string",
                  "sendReminder": true,
                  "settings": {},
                  "type": "string",
                  "uid": "string"
                }
              ]
            },
            "aliasColors": {},
            "bars": true,
            "cards": {
              "cardPadding": 0,
              "cardRound": 0
            },
            "collapsed": true,
            "color": {
              "cardColor": "string",
              "colorScale": "string",
              "colorScheme": "string",
              "exponent": 0,
              "max": 0,
              "min": 0,
              "mode": "string"
            },
            "colorBackground": true,
            "colorValue": true,
            "colors": [
              "string"
            ],
            "columns": [
              {
                "text": "string",
                "value": "string"
              }
            ],
            "content": "string",
            "dashLength": 0,
            "dashboardTags": [
              "string"
            ],
            "dashes": true,
            "dataFormat": "string",
            "datasource": "string",
            "decimals": 0,
            "description": "string",
            "editable": true,
            "error": true,
            "fieldConfig": {
              "defaults": {
                "threshold": {
                  "mode": "string",
                  "steps": [
                    {
                      "color": "string",
                      "value": "string"
                    }
                  ]
                },
                "unit": "string"
              }
            },
            "fill": 0,
            "folderId": 0,
            "format": "string",
            "gauge": {
              "maxValue": 0,
              "minValue": 0,
              "show": true,
              "thresholdLabels": true,
              "thresholdMarkers": true
            },
            "gridPos": {
              "h": 0,
              "w": 0,
              "x": 0,
              "y": 0
            },
            "headings": true,
            "height": {},
            "hideTimeOverride": true,
            "hideZeroBuckets": true,
            "highlightCards": true,
            "id": 0,
            "isNew": true,
            "leftYAxisLabel": "string",
            "legend": {
              "alignAsTable": true,
              "avg": true,
              "current": true,
              "hideEmpty": true,
              "hideZero": true,
              "max": true,
              "min": true,
              "rightSide": true,
              "show": true,
              "sideWidth": 0,
              "total": true,
              "values": true
            },
            "limit": 0,
            "lines": true,
            "linewidth": 0,
            "links": [
              {
                "asDropdown": true,
                "dashUri": "string",
                "dashboard": "string",
                "icon": "string",
                "includeVars": true,
                "keepTime": true,
                "params": "string",
                "tags": [
                  "string"
                ],
                "targetBlank": true,
                "title": "string",
                "tooltip": "string",
                "type": "string",
                "url": "string"
              }
            ],
            "mappingType": 0,
            "mappingTypes": [
              {
                "name": "string",
                "value": 0
              }
            ],
            "maxDataPoints": {
              "Valid": true,
              "Value": 0
            },
            "minSpan": 0,
            "mode": "string",
            "nameFilter": "string",
            "nullPointMode": "string",
            "onlyAlertsOnDashboard": true,
            "options": {
              "colorMode": "string",
              "content": "string",
              "displayMode": "string",
              "graphMode": "string",
              "justifyMode": "string",
              "mode": "string",
              "orientation": "string",
              "reduceOptions": {
                "calcs": [
                  "string"
                ],
                "fields": "string",
                "values": true
              },
              "textMode": "string"
            },
            "pageSize": 0,
            "panels": [
              {}
            ],
            "percentage": true,
            "pointradius": 0,
            "points": true,
            "postfix": "string",
            "postfixFontSize": "string",
            "prefix": "string",
            "prefixFontSize": "string",
            "query": "string",
            "rangeMaps": [
              {
                "from": "string",
                "text": "string",
                "to": "string"
              }
            ],
            "recent": true,
            "renderer": "string",
            "repeat": "string",
            "repeatPanelId": 0,
            "reverseYBuckets": true,
            "rightYAxisLabel": "string",
            "scopedVars": {
              "property1": {
                "selected": true,
                "text": "string",
                "value": "string"
              },
              "property2": {
                "selected": true,
                "text": "string",
                "value": "string"
              }
            },
            "scroll": true,
            "search": true,
            "seriesOverrides": [
              {
                "alias": "string",
                "bars": true,
                "color": "string",
                "dashes": true,
                "fill": 0,
                "fillBelowTo": "string",
                "legend": true,
                "lines": true,
                "linewidth": 0,
                "nullPointMode": "string",
                "stack": {
                  "Flag": true,
                  "Value": "string"
                },
                "transform": "string",
                "yaxis": 0,
                "zindex": 0
              }
            ],
            "show": "string",
            "showHeader": true,
            "sort": {
              "col": 0,
              "desc": true
            },
            "sortOrder": 0,
            "spaceLength": 0,
            "span": 0,
            "sparkline": {
              "fillColor": "string",
              "full": true,
              "lineColor": "string",
              "show": true,
              "ymax": 0,
              "ymin": 0
            },
            "stack": true,
            "starred": true,
            "stateFilter": [
              "string"
            ],
            "steppedLine": true,
            "styles": [
              {
                "alias": "string",
                "colorMode": "string",
                "colors": [
                  "string"
                ],
                "dateFormat": "string",
                "decimals": 0,
                "link": true,
                "linkTargetBlank": true,
                "linkTooltip": "string",
                "linkUrl": "string",
                "mappingType": 0,
                "pattern": "string",
                "thresholds": [
                  "string"
                ],
                "type": "string",
                "unit": "string",
                "valueMaps": [
                  {
                    "op": "string",
                    "text": "string",
                    "value": "string"
                  }
                ]
              }
            ],
            "tags": [
              "string"
            ],
            "targets": [
              {
                "alias": "string",
                "aliasBy": "string",
                "alignOptions": [
                  {
                    "expanded": true,
                    "label": "string",
                    "options": [
                      {
                        "label": "string",
                        "metricKinds": [
                          "string"
                        ],
                        "text": "string",
                        "value": "string",
                        "valueTypes": [
                          "string"
                        ]
                      }
                    ]
                  }
                ],
                "alignmentPeriod": "string",
                "bucketAggs": [
                  {
                    "field": "string",
                    "id": "string",
                    "settings": {
                      "interval": "string",
                      "min_doc_count": {},
                      "order": "string",
                      "orderBy": "string",
                      "size": "string"
                    },
                    "type": "string"
                  }
                ],
                "crossSeriesReducer": "string",
                "datasource": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "dsType": "string",
                "expr": "string",
                "filters": [
                  "string"
                ],
                "format": "string",
                "group": [
                  {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ],
                "groupBys": [
                  "string"
                ],
                "hide": true,
                "instant": true,
                "interval": "string",
                "intervalFactor": 0,
                "legendFormat": "string",
                "measurement": "string",
                "metricColumn": "string",
                "metricKind": "string",
                "metricName": "string",
                "metricType": "string",
                "metrics": [
                  {
                    "field": "string",
                    "id": "string",
                    "type": "string"
                  }
                ],
                "namespace": "string",
                "perSeriesAligner": "string",
                "period": "string",
                "projectName": "string",
                "query": "string",
                "rawQuery": true,
                "rawSql": "string",
                "refId": "string",
                "region": "string",
                "select": [
                  [
                    {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ]
                ],
                "statistics": [
                  "string"
                ],
                "step": 0,
                "table": "string",
                "target": "string",
                "timeColumn": "string",
                "timeField": "string",
                "valueType": "string",
                "where": [
                  {
                    "datatype": "string",
                    "name": "string",
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ]
              }
            ],
            "thresholds": "string",
            "timeFrom": "string",
            "timeShift": "string",
            "title": "string",
            "tooltip": {
              "msResolution": true,
              "shared": true,
              "sort": 0,
              "value_type": "string"
            },
            "tooltipDecimals": 0,
            "transform": "string",
            "transparent": true,
            "type": "string",
            "valueFontSize": "string",
            "valueMaps": [
              {
                "op": "string",
                "text": "string",
                "value": "string"
              }
            ],
            "valueName": "string",
            "x-axis": true,
            "xAxis": {
              "show": true
            },
            "xBucketNumber": 0,
            "xBucketSize": "string",
            "xaxis": {
              "decimals": 0,
              "format": "string",
              "label": "string",
              "logBase": 0,
              "max": {
                "Valid": true,
                "Value": 0
              },
              "min": {
                "Valid": true,
                "Value": 0
              },
              "show": true
            },
            "y-axis": true,
            "yAxis": {
              "decimals": 0,
              "format": "string",
              "logBase": 0,
              "max": "string",
              "min": "string",
              "show": true,
              "splitFactor": 0
            },
            "yBucketBound": "string",
            "yBucketNumber": 0,
            "yBucketSize": 0,
            "y_formats": [
              "string"
            ],
            "yaxes": [
              {
                "decimals": 0,
                "format": "string",
                "label": "string",
                "logBase": 0,
                "max": {
                  "Valid": true,
                  "Value": 0
                },
                "min": {
                  "Valid": true,
                  "Value": 0
                },
                "show": true
              }
            ]
          }
        ],
        "templateVars": [
          "string"
        ]
      }
    ]
  },
  "k8sConfig": {
    "clusterConfigured": true,
    "config": [
      0
    ],
    "configuredServer": "string",
    "contextName": "string",
    "inClusterConfig": true,
    "k8sfile": "string",
    "nodes": [
      {
        "allocatable_cpu": "string",
        "allocatable_memory": "string",
        "architecture": "string",
        "capacity_cpu": "string",
        "capacity_memory": "string",
        "container_runtime_version": "string",
        "hostname": "string",
        "internal_ip": "string",
        "kubelet_version": "string",
        "kubeproxy_version": "string",
        "operating_system": "string",
        "os_image": "string"
      }
    ],
    "server_version": "string"
  },
  "loadTestPrefs": {
    "c": 0,
    "gen": "string",
    "qps": 0,
    "t": "string"
  },
  "meshAdapters": [
    {
      "adapter_location": "string",
      "git_commit_sha": "string",
      "name": "string",
      "ops": [
        {
          "category": 0,
          "key": "string",
          "value": "string"
        }
      ],
      "version": "string"
    }
  ],
  "prometheus": {
    "prometheusURL": "string",
    "selectedPrometheusBoardsConfigs": [
      {
        "board": {
          "org_id": 0,
          "panels": [
            {
              "alert": {
                "alertRuleTags": {
                  "property1": "string",
                  "property2": "string"
                },
                "conditions": [
                  {
                    "evaluator": {
                      "params": [
                        0
                      ],
                      "type": "string"
                    },
                    "operator": {
                      "type": "string"
                    },
                    "query": {
                      "params": [
                        "string"
                      ]
                    },
                    "reducer": {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    },
                    "type": "string"
                  }
                ],
                "executionErrorState": "string",
                "for": "string",
                "frequency": "string",
                "handler": 0,
                "message": "string",
                "name": "string",
                "noDataState": "string",
                "notifications": [
                  {
                    "disableResolveMessage": true,
                    "frequency": "string",
                    "id": 0,
                    "isDefault": true,
                    "name": "string",
                    "sendReminder": true,
                    "settings": {},
                    "type": "string",
                    "uid": "string"
                  }
                ]
              },
              "aliasColors": {},
              "bars": true,
              "cards": {
                "cardPadding": 0,
                "cardRound": 0
              },
              "collapsed": true,
              "color": {
                "cardColor": "string",
                "colorScale": "string",
                "colorScheme": "string",
                "exponent": 0,
                "max": 0,
                "min": 0,
                "mode": "string"
              },
              "colorBackground": true,
              "colorValue": true,
              "colors": [
                "string"
              ],
              "columns": [
                {
                  "text": "string",
                  "value": "string"
                }
              ],
              "content": "string",
              "dashLength": 0,
              "dashboardTags": [
                "string"
              ],
              "dashes": true,
              "dataFormat": "string",
              "datasource": "string",
              "decimals": 0,
              "description": "string",
              "editable": true,
              "error": true,
              "fieldConfig": {
                "defaults": {
                  "threshold": {
                    "mode": "string",
                    "steps": [
                      {
                        "color": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "unit": "string"
                }
              },
              "fill": 0,
              "folderId": 0,
              "format": "string",
              "gauge": {
                "maxValue": 0,
                "minValue": 0,
                "show": true,
                "thresholdLabels": true,
                "thresholdMarkers": true
              },
              "gridPos": {
                "h": 0,
                "w": 0,
                "x": 0,
                "y": 0
              },
              "headings": true,
              "height": {},
              "hideTimeOverride": true,
              "hideZeroBuckets": true,
              "highlightCards": true,
              "id": 0,
              "isNew": true,
              "leftYAxisLabel": "string",
              "legend": {
                "alignAsTable": true,
                "avg": true,
                "current": true,
                "hideEmpty": true,
                "hideZero": true,
                "max": true,
                "min": true,
                "rightSide": true,
                "show": true,
                "sideWidth": 0,
                "total": true,
                "values": true
              },
              "limit": 0,
              "lines": true,
              "linewidth": 0,
              "links": [
                {
                  "asDropdown": true,
                  "dashUri": "string",
                  "dashboard": "string",
                  "icon": "string",
                  "includeVars": true,
                  "keepTime": true,
                  "params": "string",
                  "tags": [
                    "string"
                  ],
                  "targetBlank": true,
                  "title": "string",
                  "tooltip": "string",
                  "type": "string",
                  "url": "string"
                }
              ],
              "mappingType": 0,
              "mappingTypes": [
                {
                  "name": "string",
                  "value": 0
                }
              ],
              "maxDataPoints": {
                "Valid": true,
                "Value": 0
              },
              "minSpan": 0,
              "mode": "string",
              "nameFilter": "string",
              "nullPointMode": "string",
              "onlyAlertsOnDashboard": true,
              "options": {
                "colorMode": "string",
                "content": "string",
                "displayMode": "string",
                "graphMode": "string",
                "justifyMode": "string",
                "mode": "string",
                "orientation": "string",
                "reduceOptions": {
                  "calcs": [
                    "string"
                  ],
                  "fields": "string",
                  "values": true
                },
                "textMode": "string"
              },
              "pageSize": 0,
              "panels": [
                {}
              ],
              "percentage": true,
              "pointradius": 0,
              "points": true,
              "postfix": "string",
              "postfixFontSize": "string",
              "prefix": "string",
              "prefixFontSize": "string",
              "query": "string",
              "rangeMaps": [
                {
                  "from": "string",
                  "text": "string",
                  "to": "string"
                }
              ],
              "recent": true,
              "renderer": "string",
              "repeat": "string",
              "repeatPanelId": 0,
              "reverseYBuckets": true,
              "rightYAxisLabel": "string",
              "scopedVars": {
                "property1": {
                  "selected": true,
                  "text": "string",
                  "value": "string"
                },
                "property2": {
                  "selected": true,
                  "text": "string",
                  "value": "string"
                }
              },
              "scroll": true,
              "search": true,
              "seriesOverrides": [
                {
                  "alias": "string",
                  "bars": true,
                  "color": "string",
                  "dashes": true,
                  "fill": 0,
                  "fillBelowTo": "string",
                  "legend": true,
                  "lines": true,
                  "linewidth": 0,
                  "nullPointMode": "string",
                  "stack": {
                    "Flag": true,
                    "Value": "string"
                  },
                  "transform": "string",
                  "yaxis": 0,
                  "zindex": 0
                }
              ],
              "show": "string",
              "showHeader": true,
              "sort": {
                "col": 0,
                "desc": true
              },
              "sortOrder": 0,
              "spaceLength": 0,
              "span": 0,
              "sparkline": {
                "fillColor": "string",
                "full": true,
                "lineColor": "string",
                "show": true,
                "ymax": 0,
                "ymin": 0
              },
              "stack": true,
              "starred": true,
              "stateFilter": [
                "string"
              ],
              "steppedLine": true,
              "styles": [
                {
                  "alias": "string",
                  "colorMode": "string",
                  "colors": [
                    "string"
                  ],
                  "dateFormat": "string",
                  "decimals": 0,
                  "link": true,
                  "linkTargetBlank": true,
                  "linkTooltip": "string",
                  "linkUrl": "string",
                  "mappingType": 0,
                  "pattern": "string",
                  "thresholds": [
                    "string"
                  ],
                  "type": "string",
                  "unit": "string",
                  "valueMaps": [
                    {
                      "op": "string",
                      "text": "string",
                      "value": "string"
                    }
                  ]
                }
              ],
              "tags": [
                "string"
              ],
              "targets": [
                {
                  "alias": "string",
                  "aliasBy": "string",
                  "alignOptions": [
                    {
                      "expanded": true,
                      "label": "string",
                      "options": [
                        {
                          "label": "string",
                          "metricKinds": [
                            "string"
                          ],
                          "text": "string",
                          "value": "string",
                          "valueTypes": [
                            "string"
                          ]
                        }
                      ]
                    }
                  ],
                  "alignmentPeriod": "string",
                  "bucketAggs": [
                    {
                      "field": "string",
                      "id": "string",
                      "settings": {
                        "interval": "string",
                        "min_doc_count": {},
                        "order": "string",
                        "orderBy": "string",
                        "size": "string"
                      },
                      "type": "string"
                    }
                  ],
                  "crossSeriesReducer": "string",
                  "datasource": "string",
                  "dimensions": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "dsType": "string",
                  "expr": "string",
                  "filters": [
                    "string"
                  ],
                  "format": "string",
                  "group": [
                    {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ],
                  "groupBys": [
                    "string"
                  ],
                  "hide": true,
                  "instant": true,
                  "interval": "string",
                  "intervalFactor": 0,
                  "legendFormat": "string",
                  "measurement": "string",
                  "metricColumn": "string",
                  "metricKind": "string",
                  "metricName": "string",
                  "metricType": "string",
                  "metrics": [
                    {
                      "field": "string",
                      "id": "string",
                      "type": "string"
                    }
                  ],
                  "namespace": "string",
                  "perSeriesAligner": "string",
                  "period": "string",
                  "projectName": "string",
                  "query": "string",
                  "rawQuery": true,
                  "rawSql": "string",
                  "refId": "string",
                  "region": "string",
                  "select": [
                    [
                      {
                        "params": [
                          "string"
                        ],
                        "type": "string"
                      }
                    ]
                  ],
                  "statistics": [
                    "string"
                  ],
                  "step": 0,
                  "table": "string",
                  "target": "string",
                  "timeColumn": "string",
                  "timeField": "string",
                  "valueType": "string",
                  "where": [
                    {
                      "datatype": "string",
                      "name": "string",
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ]
                }
              ],
              "thresholds": "string",
              "timeFrom": "string",
              "timeShift": "string",
              "title": "string",
              "tooltip": {
                "msResolution": true,
                "shared": true,
                "sort": 0,
                "value_type": "string"
              },
              "tooltipDecimals": 0,
              "transform": "string",
              "transparent": true,
              "type": "string",
              "valueFontSize": "string",
              "valueMaps": [
                {
                  "op": "string",
                  "text": "string",
                  "value": "string"
                }
              ],
              "valueName": "string",
              "x-axis": true,
              "xAxis": {
                "show": true
              },
              "xBucketNumber": 0,
              "xBucketSize": "string",
              "xaxis": {
                "decimals": 0,
                "format": "string",
                "label": "string",
                "logBase": 0,
                "max": {
                  "Valid": true,
                  "Value": 0
                },
                "min": {
                  "Valid": true,
                  "Value": 0
                },
                "show": true
              },
              "y-axis": true,
              "yAxis": {
                "decimals": 0,
                "format": "string",
                "logBase": 0,
                "max": "string",
                "min": "string",
                "show": true,
                "splitFactor": 0
              },
              "yBucketBound": "string",
              "yBucketNumber": 0,
              "yBucketSize": 0,
              "y_formats": [
                "string"
              ],
              "yaxes": [
                {
                  "decimals": 0,
                  "format": "string",
                  "label": "string",
                  "logBase": 0,
                  "max": {
                    "Valid": true,
                    "Value": 0
                  },
                  "min": {
                    "Valid": true,
                    "Value": 0
                  },
                  "show": true
                }
              ]
            }
          ],
          "slug": "string",
          "template_vars": [
            {
              "datasource": {
                "id": 0,
                "name": "string"
              },
              "hide": 0,
              "name": "string",
              "query": "string",
              "value": {}
            }
          ],
          "title": "string",
          "uid": "string",
          "uri": "string"
        },
        "panels": [
          {
            "alert": {
              "alertRuleTags": {
                "property1": "string",
                "property2": "string"
              },
              "conditions": [
                {
                  "evaluator": {
                    "params": [
                      0
                    ],
                    "type": "string"
                  },
                  "operator": {
                    "type": "string"
                  },
                  "query": {
                    "params": [
                      "string"
                    ]
                  },
                  "reducer": {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  },
                  "type": "string"
                }
              ],
              "executionErrorState": "string",
              "for": "string",
              "frequency": "string",
              "handler": 0,
              "message": "string",
              "name": "string",
              "noDataState": "string",
              "notifications": [
                {
                  "disableResolveMessage": true,
                  "frequency": "string",
                  "id": 0,
                  "isDefault": true,
                  "name": "string",
                  "sendReminder": true,
                  "settings": {},
                  "type": "string",
                  "uid": "string"
                }
              ]
            },
            "aliasColors": {},
            "bars": true,
            "cards": {
              "cardPadding": 0,
              "cardRound": 0
            },
            "collapsed": true,
            "color": {
              "cardColor": "string",
              "colorScale": "string",
              "colorScheme": "string",
              "exponent": 0,
              "max": 0,
              "min": 0,
              "mode": "string"
            },
            "colorBackground": true,
            "colorValue": true,
            "colors": [
              "string"
            ],
            "columns": [
              {
                "text": "string",
                "value": "string"
              }
            ],
            "content": "string",
            "dashLength": 0,
            "dashboardTags": [
              "string"
            ],
            "dashes": true,
            "dataFormat": "string",
            "datasource": "string",
            "decimals": 0,
            "description": "string",
            "editable": true,
            "error": true,
            "fieldConfig": {
              "defaults": {
                "threshold": {
                  "mode": "string",
                  "steps": [
                    {
                      "color": "string",
                      "value": "string"
                    }
                  ]
                },
                "unit": "string"
              }
            },
            "fill": 0,
            "folderId": 0,
            "format": "string",
            "gauge": {
              "maxValue": 0,
              "minValue": 0,
              "show": true,
              "thresholdLabels": true,
              "thresholdMarkers": true
            },
            "gridPos": {
              "h": 0,
              "w": 0,
              "x": 0,
              "y": 0
            },
            "headings": true,
            "height": {},
            "hideTimeOverride": true,
            "hideZeroBuckets": true,
            "highlightCards": true,
            "id": 0,
            "isNew": true,
            "leftYAxisLabel": "string",
            "legend": {
              "alignAsTable": true,
              "avg": true,
              "current": true,
              "hideEmpty": true,
              "hideZero": true,
              "max": true,
              "min": true,
              "rightSide": true,
              "show": true,
              "sideWidth": 0,
              "total": true,
              "values": true
            },
            "limit": 0,
            "lines": true,
            "linewidth": 0,
            "links": [
              {
                "asDropdown": true,
                "dashUri": "string",
                "dashboard": "string",
                "icon": "string",
                "includeVars": true,
                "keepTime": true,
                "params": "string",
                "tags": [
                  "string"
                ],
                "targetBlank": true,
                "title": "string",
                "tooltip": "string",
                "type": "string",
                "url": "string"
              }
            ],
            "mappingType": 0,
            "mappingTypes": [
              {
                "name": "string",
                "value": 0
              }
            ],
            "maxDataPoints": {
              "Valid": true,
              "Value": 0
            },
            "minSpan": 0,
            "mode": "string",
            "nameFilter": "string",
            "nullPointMode": "string",
            "onlyAlertsOnDashboard": true,
            "options": {
              "colorMode": "string",
              "content": "string",
              "displayMode": "string",
              "graphMode": "string",
              "justifyMode": "string",
              "mode": "string",
              "orientation": "string",
              "reduceOptions": {
                "calcs": [
                  "string"
                ],
                "fields": "string",
                "values": true
              },
              "textMode": "string"
            },
            "pageSize": 0,
            "panels": [
              {}
            ],
            "percentage": true,
            "pointradius": 0,
            "points": true,
            "postfix": "string",
            "postfixFontSize": "string",
            "prefix": "string",
            "prefixFontSize": "string",
            "query": "string",
            "rangeMaps": [
              {
                "from": "string",
                "text": "string",
                "to": "string"
              }
            ],
            "recent": true,
            "renderer": "string",
            "repeat": "string",
            "repeatPanelId": 0,
            "reverseYBuckets": true,
            "rightYAxisLabel": "string",
            "scopedVars": {
              "property1": {
                "selected": true,
                "text": "string",
                "value": "string"
              },
              "property2": {
                "selected": true,
                "text": "string",
                "value": "string"
              }
            },
            "scroll": true,
            "search": true,
            "seriesOverrides": [
              {
                "alias": "string",
                "bars": true,
                "color": "string",
                "dashes": true,
                "fill": 0,
                "fillBelowTo": "string",
                "legend": true,
                "lines": true,
                "linewidth": 0,
                "nullPointMode": "string",
                "stack": {
                  "Flag": true,
                  "Value": "string"
                },
                "transform": "string",
                "yaxis": 0,
                "zindex": 0
              }
            ],
            "show": "string",
            "showHeader": true,
            "sort": {
              "col": 0,
              "desc": true
            },
            "sortOrder": 0,
            "spaceLength": 0,
            "span": 0,
            "sparkline": {
              "fillColor": "string",
              "full": true,
              "lineColor": "string",
              "show": true,
              "ymax": 0,
              "ymin": 0
            },
            "stack": true,
            "starred": true,
            "stateFilter": [
              "string"
            ],
            "steppedLine": true,
            "styles": [
              {
                "alias": "string",
                "colorMode": "string",
                "colors": [
                  "string"
                ],
                "dateFormat": "string",
                "decimals": 0,
                "link": true,
                "linkTargetBlank": true,
                "linkTooltip": "string",
                "linkUrl": "string",
                "mappingType": 0,
                "pattern": "string",
                "thresholds": [
                  "string"
                ],
                "type": "string",
                "unit": "string",
                "valueMaps": [
                  {
                    "op": "string",
                    "text": "string",
                    "value": "string"
                  }
                ]
              }
            ],
            "tags": [
              "string"
            ],
            "targets": [
              {
                "alias": "string",
                "aliasBy": "string",
                "alignOptions": [
                  {
                    "expanded": true,
                    "label": "string",
                    "options": [
                      {
                        "label": "string",
                        "metricKinds": [
                          "string"
                        ],
                        "text": "string",
                        "value": "string",
                        "valueTypes": [
                          "string"
                        ]
                      }
                    ]
                  }
                ],
                "alignmentPeriod": "string",
                "bucketAggs": [
                  {
                    "field": "string",
                    "id": "string",
                    "settings": {
                      "interval": "string",
                      "min_doc_count": {},
                      "order": "string",
                      "orderBy": "string",
                      "size": "string"
                    },
                    "type": "string"
                  }
                ],
                "crossSeriesReducer": "string",
                "datasource": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "dsType": "string",
                "expr": "string",
                "filters": [
                  "string"
                ],
                "format": "string",
                "group": [
                  {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ],
                "groupBys": [
                  "string"
                ],
                "hide": true,
                "instant": true,
                "interval": "string",
                "intervalFactor": 0,
                "legendFormat": "string",
                "measurement": "string",
                "metricColumn": "string",
                "metricKind": "string",
                "metricName": "string",
                "metricType": "string",
                "metrics": [
                  {
                    "field": "string",
                    "id": "string",
                    "type": "string"
                  }
                ],
                "namespace": "string",
                "perSeriesAligner": "string",
                "period": "string",
                "projectName": "string",
                "query": "string",
                "rawQuery": true,
                "rawSql": "string",
                "refId": "string",
                "region": "string",
                "select": [
                  [
                    {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ]
                ],
                "statistics": [
                  "string"
                ],
                "step": 0,
                "table": "string",
                "target": "string",
                "timeColumn": "string",
                "timeField": "string",
                "valueType": "string",
                "where": [
                  {
                    "datatype": "string",
                    "name": "string",
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ]
              }
            ],
            "thresholds": "string",
            "timeFrom": "string",
            "timeShift": "string",
            "title": "string",
            "tooltip": {
              "msResolution": true,
              "shared": true,
              "sort": 0,
              "value_type": "string"
            },
            "tooltipDecimals": 0,
            "transform": "string",
            "transparent": true,
            "type": "string",
            "valueFontSize": "string",
            "valueMaps": [
              {
                "op": "string",
                "text": "string",
                "value": "string"
              }
            ],
            "valueName": "string",
            "x-axis": true,
            "xAxis": {
              "show": true
            },
            "xBucketNumber": 0,
            "xBucketSize": "string",
            "xaxis": {
              "decimals": 0,
              "format": "string",
              "label": "string",
              "logBase": 0,
              "max": {
                "Valid": true,
                "Value": 0
              },
              "min": {
                "Valid": true,
                "Value": 0
              },
              "show": true
            },
            "y-axis": true,
            "yAxis": {
              "decimals": 0,
              "format": "string",
              "logBase": 0,
              "max": "string",
              "min": "string",
              "show": true,
              "splitFactor": 0
            },
            "yBucketBound": "string",
            "yBucketNumber": 0,
            "yBucketSize": 0,
            "y_formats": [
              "string"
            ],
            "yaxes": [
              {
                "decimals": 0,
                "format": "string",
                "label": "string",
                "logBase": 0,
                "max": {
                  "Valid": true,
                  "Value": 0
                },
                "min": {
                  "Valid": true,
                  "Value": 0
                },
                "show": true
              }
            ]
          }
        ],
        "templateVars": [
          "string"
        ]
      }
    ]
  },
  "updated_at": "1970-01-01T00:00:00Z"
}
```

Preference represents the data stored in session / local DB

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|anonymousPerfResults|boolean|false|none|none|
|anonymousUsageStats|boolean|false|none|none|
|grafana|[Grafana](#schemagrafana)|false|none|Grafana represents the Grafana session config|
|k8sConfig|[K8SConfig](#schemak8sconfig)|false|none|K8SConfig represents all the k8s session config|
|loadTestPrefs|[LoadTestPreferences](#schemaloadtestpreferences)|false|none|LoadTestPreferences represents the load test preferences|
|meshAdapters|[[Adapter](#schemaadapter)]|false|none|none|
|prometheus|[Prometheus](#schemaprometheus)|false|none|Prometheus represents the prometheus session config|
|updated_at|string(date-time)|false|none|none|

<h2 id="tocS_PreferenceParams">PreferenceParams</h2>
<!-- backwards compatibility -->
<a id="schemapreferenceparams"></a>
<a id="schema_PreferenceParams"></a>
<a id="tocSpreferenceparams"></a>
<a id="tocspreferenceparams"></a>

```json
{
  "anonymousPerfResults": true,
  "anonymousUsageStats": true
}
```

Parameters to updates Anonymous stats

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|anonymousPerfResults|boolean|false|none|none|
|anonymousUsageStats|boolean|false|none|none|

<h2 id="tocS_Prometheus">Prometheus</h2>
<!-- backwards compatibility -->
<a id="schemaprometheus"></a>
<a id="schema_Prometheus"></a>
<a id="tocSprometheus"></a>
<a id="tocsprometheus"></a>

```json
{
  "prometheusURL": "string",
  "selectedPrometheusBoardsConfigs": [
    {
      "board": {
        "org_id": 0,
        "panels": [
          {
            "alert": {
              "alertRuleTags": {
                "property1": "string",
                "property2": "string"
              },
              "conditions": [
                {
                  "evaluator": {
                    "params": [
                      0
                    ],
                    "type": "string"
                  },
                  "operator": {
                    "type": "string"
                  },
                  "query": {
                    "params": [
                      "string"
                    ]
                  },
                  "reducer": {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  },
                  "type": "string"
                }
              ],
              "executionErrorState": "string",
              "for": "string",
              "frequency": "string",
              "handler": 0,
              "message": "string",
              "name": "string",
              "noDataState": "string",
              "notifications": [
                {
                  "disableResolveMessage": true,
                  "frequency": "string",
                  "id": 0,
                  "isDefault": true,
                  "name": "string",
                  "sendReminder": true,
                  "settings": {},
                  "type": "string",
                  "uid": "string"
                }
              ]
            },
            "aliasColors": {},
            "bars": true,
            "cards": {
              "cardPadding": 0,
              "cardRound": 0
            },
            "collapsed": true,
            "color": {
              "cardColor": "string",
              "colorScale": "string",
              "colorScheme": "string",
              "exponent": 0,
              "max": 0,
              "min": 0,
              "mode": "string"
            },
            "colorBackground": true,
            "colorValue": true,
            "colors": [
              "string"
            ],
            "columns": [
              {
                "text": "string",
                "value": "string"
              }
            ],
            "content": "string",
            "dashLength": 0,
            "dashboardTags": [
              "string"
            ],
            "dashes": true,
            "dataFormat": "string",
            "datasource": "string",
            "decimals": 0,
            "description": "string",
            "editable": true,
            "error": true,
            "fieldConfig": {
              "defaults": {
                "threshold": {
                  "mode": "string",
                  "steps": [
                    {
                      "color": "string",
                      "value": "string"
                    }
                  ]
                },
                "unit": "string"
              }
            },
            "fill": 0,
            "folderId": 0,
            "format": "string",
            "gauge": {
              "maxValue": 0,
              "minValue": 0,
              "show": true,
              "thresholdLabels": true,
              "thresholdMarkers": true
            },
            "gridPos": {
              "h": 0,
              "w": 0,
              "x": 0,
              "y": 0
            },
            "headings": true,
            "height": {},
            "hideTimeOverride": true,
            "hideZeroBuckets": true,
            "highlightCards": true,
            "id": 0,
            "isNew": true,
            "leftYAxisLabel": "string",
            "legend": {
              "alignAsTable": true,
              "avg": true,
              "current": true,
              "hideEmpty": true,
              "hideZero": true,
              "max": true,
              "min": true,
              "rightSide": true,
              "show": true,
              "sideWidth": 0,
              "total": true,
              "values": true
            },
            "limit": 0,
            "lines": true,
            "linewidth": 0,
            "links": [
              {
                "asDropdown": true,
                "dashUri": "string",
                "dashboard": "string",
                "icon": "string",
                "includeVars": true,
                "keepTime": true,
                "params": "string",
                "tags": [
                  "string"
                ],
                "targetBlank": true,
                "title": "string",
                "tooltip": "string",
                "type": "string",
                "url": "string"
              }
            ],
            "mappingType": 0,
            "mappingTypes": [
              {
                "name": "string",
                "value": 0
              }
            ],
            "maxDataPoints": {
              "Valid": true,
              "Value": 0
            },
            "minSpan": 0,
            "mode": "string",
            "nameFilter": "string",
            "nullPointMode": "string",
            "onlyAlertsOnDashboard": true,
            "options": {
              "colorMode": "string",
              "content": "string",
              "displayMode": "string",
              "graphMode": "string",
              "justifyMode": "string",
              "mode": "string",
              "orientation": "string",
              "reduceOptions": {
                "calcs": [
                  "string"
                ],
                "fields": "string",
                "values": true
              },
              "textMode": "string"
            },
            "pageSize": 0,
            "panels": [
              {}
            ],
            "percentage": true,
            "pointradius": 0,
            "points": true,
            "postfix": "string",
            "postfixFontSize": "string",
            "prefix": "string",
            "prefixFontSize": "string",
            "query": "string",
            "rangeMaps": [
              {
                "from": "string",
                "text": "string",
                "to": "string"
              }
            ],
            "recent": true,
            "renderer": "string",
            "repeat": "string",
            "repeatPanelId": 0,
            "reverseYBuckets": true,
            "rightYAxisLabel": "string",
            "scopedVars": {
              "property1": {
                "selected": true,
                "text": "string",
                "value": "string"
              },
              "property2": {
                "selected": true,
                "text": "string",
                "value": "string"
              }
            },
            "scroll": true,
            "search": true,
            "seriesOverrides": [
              {
                "alias": "string",
                "bars": true,
                "color": "string",
                "dashes": true,
                "fill": 0,
                "fillBelowTo": "string",
                "legend": true,
                "lines": true,
                "linewidth": 0,
                "nullPointMode": "string",
                "stack": {
                  "Flag": true,
                  "Value": "string"
                },
                "transform": "string",
                "yaxis": 0,
                "zindex": 0
              }
            ],
            "show": "string",
            "showHeader": true,
            "sort": {
              "col": 0,
              "desc": true
            },
            "sortOrder": 0,
            "spaceLength": 0,
            "span": 0,
            "sparkline": {
              "fillColor": "string",
              "full": true,
              "lineColor": "string",
              "show": true,
              "ymax": 0,
              "ymin": 0
            },
            "stack": true,
            "starred": true,
            "stateFilter": [
              "string"
            ],
            "steppedLine": true,
            "styles": [
              {
                "alias": "string",
                "colorMode": "string",
                "colors": [
                  "string"
                ],
                "dateFormat": "string",
                "decimals": 0,
                "link": true,
                "linkTargetBlank": true,
                "linkTooltip": "string",
                "linkUrl": "string",
                "mappingType": 0,
                "pattern": "string",
                "thresholds": [
                  "string"
                ],
                "type": "string",
                "unit": "string",
                "valueMaps": [
                  {
                    "op": "string",
                    "text": "string",
                    "value": "string"
                  }
                ]
              }
            ],
            "tags": [
              "string"
            ],
            "targets": [
              {
                "alias": "string",
                "aliasBy": "string",
                "alignOptions": [
                  {
                    "expanded": true,
                    "label": "string",
                    "options": [
                      {
                        "label": "string",
                        "metricKinds": [
                          "string"
                        ],
                        "text": "string",
                        "value": "string",
                        "valueTypes": [
                          "string"
                        ]
                      }
                    ]
                  }
                ],
                "alignmentPeriod": "string",
                "bucketAggs": [
                  {
                    "field": "string",
                    "id": "string",
                    "settings": {
                      "interval": "string",
                      "min_doc_count": {},
                      "order": "string",
                      "orderBy": "string",
                      "size": "string"
                    },
                    "type": "string"
                  }
                ],
                "crossSeriesReducer": "string",
                "datasource": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "dsType": "string",
                "expr": "string",
                "filters": [
                  "string"
                ],
                "format": "string",
                "group": [
                  {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ],
                "groupBys": [
                  "string"
                ],
                "hide": true,
                "instant": true,
                "interval": "string",
                "intervalFactor": 0,
                "legendFormat": "string",
                "measurement": "string",
                "metricColumn": "string",
                "metricKind": "string",
                "metricName": "string",
                "metricType": "string",
                "metrics": [
                  {
                    "field": "string",
                    "id": "string",
                    "type": "string"
                  }
                ],
                "namespace": "string",
                "perSeriesAligner": "string",
                "period": "string",
                "projectName": "string",
                "query": "string",
                "rawQuery": true,
                "rawSql": "string",
                "refId": "string",
                "region": "string",
                "select": [
                  [
                    {
                      "params": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ]
                ],
                "statistics": [
                  "string"
                ],
                "step": 0,
                "table": "string",
                "target": "string",
                "timeColumn": "string",
                "timeField": "string",
                "valueType": "string",
                "where": [
                  {
                    "datatype": "string",
                    "name": "string",
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ]
              }
            ],
            "thresholds": "string",
            "timeFrom": "string",
            "timeShift": "string",
            "title": "string",
            "tooltip": {
              "msResolution": true,
              "shared": true,
              "sort": 0,
              "value_type": "string"
            },
            "tooltipDecimals": 0,
            "transform": "string",
            "transparent": true,
            "type": "string",
            "valueFontSize": "string",
            "valueMaps": [
              {
                "op": "string",
                "text": "string",
                "value": "string"
              }
            ],
            "valueName": "string",
            "x-axis": true,
            "xAxis": {
              "show": true
            },
            "xBucketNumber": 0,
            "xBucketSize": "string",
            "xaxis": {
              "decimals": 0,
              "format": "string",
              "label": "string",
              "logBase": 0,
              "max": {
                "Valid": true,
                "Value": 0
              },
              "min": {
                "Valid": true,
                "Value": 0
              },
              "show": true
            },
            "y-axis": true,
            "yAxis": {
              "decimals": 0,
              "format": "string",
              "logBase": 0,
              "max": "string",
              "min": "string",
              "show": true,
              "splitFactor": 0
            },
            "yBucketBound": "string",
            "yBucketNumber": 0,
            "yBucketSize": 0,
            "y_formats": [
              "string"
            ],
            "yaxes": [
              {
                "decimals": 0,
                "format": "string",
                "label": "string",
                "logBase": 0,
                "max": {
                  "Valid": true,
                  "Value": 0
                },
                "min": {
                  "Valid": true,
                  "Value": 0
                },
                "show": true
              }
            ]
          }
        ],
        "slug": "string",
        "template_vars": [
          {
            "datasource": {
              "id": 0,
              "name": "string"
            },
            "hide": 0,
            "name": "string",
            "query": "string",
            "value": {}
          }
        ],
        "title": "string",
        "uid": "string",
        "uri": "string"
      },
      "panels": [
        {
          "alert": {
            "alertRuleTags": {
              "property1": "string",
              "property2": "string"
            },
            "conditions": [
              {
                "evaluator": {
                  "params": [
                    0
                  ],
                  "type": "string"
                },
                "operator": {
                  "type": "string"
                },
                "query": {
                  "params": [
                    "string"
                  ]
                },
                "reducer": {
                  "params": [
                    "string"
                  ],
                  "type": "string"
                },
                "type": "string"
              }
            ],
            "executionErrorState": "string",
            "for": "string",
            "frequency": "string",
            "handler": 0,
            "message": "string",
            "name": "string",
            "noDataState": "string",
            "notifications": [
              {
                "disableResolveMessage": true,
                "frequency": "string",
                "id": 0,
                "isDefault": true,
                "name": "string",
                "sendReminder": true,
                "settings": {},
                "type": "string",
                "uid": "string"
              }
            ]
          },
          "aliasColors": {},
          "bars": true,
          "cards": {
            "cardPadding": 0,
            "cardRound": 0
          },
          "collapsed": true,
          "color": {
            "cardColor": "string",
            "colorScale": "string",
            "colorScheme": "string",
            "exponent": 0,
            "max": 0,
            "min": 0,
            "mode": "string"
          },
          "colorBackground": true,
          "colorValue": true,
          "colors": [
            "string"
          ],
          "columns": [
            {
              "text": "string",
              "value": "string"
            }
          ],
          "content": "string",
          "dashLength": 0,
          "dashboardTags": [
            "string"
          ],
          "dashes": true,
          "dataFormat": "string",
          "datasource": "string",
          "decimals": 0,
          "description": "string",
          "editable": true,
          "error": true,
          "fieldConfig": {
            "defaults": {
              "threshold": {
                "mode": "string",
                "steps": [
                  {
                    "color": "string",
                    "value": "string"
                  }
                ]
              },
              "unit": "string"
            }
          },
          "fill": 0,
          "folderId": 0,
          "format": "string",
          "gauge": {
            "maxValue": 0,
            "minValue": 0,
            "show": true,
            "thresholdLabels": true,
            "thresholdMarkers": true
          },
          "gridPos": {
            "h": 0,
            "w": 0,
            "x": 0,
            "y": 0
          },
          "headings": true,
          "height": {},
          "hideTimeOverride": true,
          "hideZeroBuckets": true,
          "highlightCards": true,
          "id": 0,
          "isNew": true,
          "leftYAxisLabel": "string",
          "legend": {
            "alignAsTable": true,
            "avg": true,
            "current": true,
            "hideEmpty": true,
            "hideZero": true,
            "max": true,
            "min": true,
            "rightSide": true,
            "show": true,
            "sideWidth": 0,
            "total": true,
            "values": true
          },
          "limit": 0,
          "lines": true,
          "linewidth": 0,
          "links": [
            {
              "asDropdown": true,
              "dashUri": "string",
              "dashboard": "string",
              "icon": "string",
              "includeVars": true,
              "keepTime": true,
              "params": "string",
              "tags": [
                "string"
              ],
              "targetBlank": true,
              "title": "string",
              "tooltip": "string",
              "type": "string",
              "url": "string"
            }
          ],
          "mappingType": 0,
          "mappingTypes": [
            {
              "name": "string",
              "value": 0
            }
          ],
          "maxDataPoints": {
            "Valid": true,
            "Value": 0
          },
          "minSpan": 0,
          "mode": "string",
          "nameFilter": "string",
          "nullPointMode": "string",
          "onlyAlertsOnDashboard": true,
          "options": {
            "colorMode": "string",
            "content": "string",
            "displayMode": "string",
            "graphMode": "string",
            "justifyMode": "string",
            "mode": "string",
            "orientation": "string",
            "reduceOptions": {
              "calcs": [
                "string"
              ],
              "fields": "string",
              "values": true
            },
            "textMode": "string"
          },
          "pageSize": 0,
          "panels": [
            {}
          ],
          "percentage": true,
          "pointradius": 0,
          "points": true,
          "postfix": "string",
          "postfixFontSize": "string",
          "prefix": "string",
          "prefixFontSize": "string",
          "query": "string",
          "rangeMaps": [
            {
              "from": "string",
              "text": "string",
              "to": "string"
            }
          ],
          "recent": true,
          "renderer": "string",
          "repeat": "string",
          "repeatPanelId": 0,
          "reverseYBuckets": true,
          "rightYAxisLabel": "string",
          "scopedVars": {
            "property1": {
              "selected": true,
              "text": "string",
              "value": "string"
            },
            "property2": {
              "selected": true,
              "text": "string",
              "value": "string"
            }
          },
          "scroll": true,
          "search": true,
          "seriesOverrides": [
            {
              "alias": "string",
              "bars": true,
              "color": "string",
              "dashes": true,
              "fill": 0,
              "fillBelowTo": "string",
              "legend": true,
              "lines": true,
              "linewidth": 0,
              "nullPointMode": "string",
              "stack": {
                "Flag": true,
                "Value": "string"
              },
              "transform": "string",
              "yaxis": 0,
              "zindex": 0
            }
          ],
          "show": "string",
          "showHeader": true,
          "sort": {
            "col": 0,
            "desc": true
          },
          "sortOrder": 0,
          "spaceLength": 0,
          "span": 0,
          "sparkline": {
            "fillColor": "string",
            "full": true,
            "lineColor": "string",
            "show": true,
            "ymax": 0,
            "ymin": 0
          },
          "stack": true,
          "starred": true,
          "stateFilter": [
            "string"
          ],
          "steppedLine": true,
          "styles": [
            {
              "alias": "string",
              "colorMode": "string",
              "colors": [
                "string"
              ],
              "dateFormat": "string",
              "decimals": 0,
              "link": true,
              "linkTargetBlank": true,
              "linkTooltip": "string",
              "linkUrl": "string",
              "mappingType": 0,
              "pattern": "string",
              "thresholds": [
                "string"
              ],
              "type": "string",
              "unit": "string",
              "valueMaps": [
                {
                  "op": "string",
                  "text": "string",
                  "value": "string"
                }
              ]
            }
          ],
          "tags": [
            "string"
          ],
          "targets": [
            {
              "alias": "string",
              "aliasBy": "string",
              "alignOptions": [
                {
                  "expanded": true,
                  "label": "string",
                  "options": [
                    {
                      "label": "string",
                      "metricKinds": [
                        "string"
                      ],
                      "text": "string",
                      "value": "string",
                      "valueTypes": [
                        "string"
                      ]
                    }
                  ]
                }
              ],
              "alignmentPeriod": "string",
              "bucketAggs": [
                {
                  "field": "string",
                  "id": "string",
                  "settings": {
                    "interval": "string",
                    "min_doc_count": {},
                    "order": "string",
                    "orderBy": "string",
                    "size": "string"
                  },
                  "type": "string"
                }
              ],
              "crossSeriesReducer": "string",
              "datasource": "string",
              "dimensions": {
                "property1": "string",
                "property2": "string"
              },
              "dsType": "string",
              "expr": "string",
              "filters": [
                "string"
              ],
              "format": "string",
              "group": [
                {
                  "params": [
                    "string"
                  ],
                  "type": "string"
                }
              ],
              "groupBys": [
                "string"
              ],
              "hide": true,
              "instant": true,
              "interval": "string",
              "intervalFactor": 0,
              "legendFormat": "string",
              "measurement": "string",
              "metricColumn": "string",
              "metricKind": "string",
              "metricName": "string",
              "metricType": "string",
              "metrics": [
                {
                  "field": "string",
                  "id": "string",
                  "type": "string"
                }
              ],
              "namespace": "string",
              "perSeriesAligner": "string",
              "period": "string",
              "projectName": "string",
              "query": "string",
              "rawQuery": true,
              "rawSql": "string",
              "refId": "string",
              "region": "string",
              "select": [
                [
                  {
                    "params": [
                      "string"
                    ],
                    "type": "string"
                  }
                ]
              ],
              "statistics": [
                "string"
              ],
              "step": 0,
              "table": "string",
              "target": "string",
              "timeColumn": "string",
              "timeField": "string",
              "valueType": "string",
              "where": [
                {
                  "datatype": "string",
                  "name": "string",
                  "params": [
                    "string"
                  ],
                  "type": "string"
                }
              ]
            }
          ],
          "thresholds": "string",
          "timeFrom": "string",
          "timeShift": "string",
          "title": "string",
          "tooltip": {
            "msResolution": true,
            "shared": true,
            "sort": 0,
            "value_type": "string"
          },
          "tooltipDecimals": 0,
          "transform": "string",
          "transparent": true,
          "type": "string",
          "valueFontSize": "string",
          "valueMaps": [
            {
              "op": "string",
              "text": "string",
              "value": "string"
            }
          ],
          "valueName": "string",
          "x-axis": true,
          "xAxis": {
            "show": true
          },
          "xBucketNumber": 0,
          "xBucketSize": "string",
          "xaxis": {
            "decimals": 0,
            "format": "string",
            "label": "string",
            "logBase": 0,
            "max": {
              "Valid": true,
              "Value": 0
            },
            "min": {
              "Valid": true,
              "Value": 0
            },
            "show": true
          },
          "y-axis": true,
          "yAxis": {
            "decimals": 0,
            "format": "string",
            "logBase": 0,
            "max": "string",
            "min": "string",
            "show": true,
            "splitFactor": 0
          },
          "yBucketBound": "string",
          "yBucketNumber": 0,
          "yBucketSize": 0,
          "y_formats": [
            "string"
          ],
          "yaxes": [
            {
              "decimals": 0,
              "format": "string",
              "label": "string",
              "logBase": 0,
              "max": {
                "Valid": true,
                "Value": 0
              },
              "min": {
                "Valid": true,
                "Value": 0
              },
              "show": true
            }
          ]
        }
      ],
      "templateVars": [
        "string"
      ]
    }
  ]
}
```

Prometheus represents the prometheus session config

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prometheusURL|string|false|none|none|
|selectedPrometheusBoardsConfigs|[[SelectedGrafanaConfig](#schemaselectedgrafanaconfig)]|false|none|none|

<h2 id="tocS_Protocol">Protocol</h2>
<!-- backwards compatibility -->
<a id="schemaprotocol"></a>
<a id="schema_Protocol"></a>
<a id="tocSprotocol"></a>
<a id="tocsprotocol"></a>

```json
"string"
```

<h2 id="tocS_ProviderProperties">ProviderProperties</h2>
<!-- backwards compatibility -->
<a id="schemaproviderproperties"></a>
<a id="schema_ProviderProperties"></a>
<a id="tocSproviderproperties"></a>
<a id="tocsproviderproperties"></a>

```json
{
  "capabilities": [
    {
      "endpoint": "string",
      "feature": "string"
    }
  ],
  "extensions": {
    "graphql": [
      {
        "component": "string",
        "path": "string"
      }
    ],
    "navigator": [
      {}
    ],
    "user_prefs": [
      {
        "component": "string"
      }
    ]
  },
  "package_url": "string",
  "package_version": "string",
  "provider_description": [
    "string"
  ],
  "provider_name": "string",
  "provider_type": "string",
  "provider_url": "string"
}
```

ProviderProperties represents the structure of properties that a provider has

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|[Capabilities](#schemacapabilities)|false|none|Capabilities is the collection of capability|
|extensions|[Extensions](#schemaextensions)|false|none|Extensions defines the UI extension points|
|package_url|string|false|none|none|
|package_version|string|false|none|none|
|provider_description|[string]|false|none|none|
|provider_name|string|false|none|none|
|provider_type|[ProviderType](#schemaprovidertype)|false|none|ProviderType - for representing provider types|
|provider_url|string|false|none|none|

<h2 id="tocS_ProviderType">ProviderType</h2>
<!-- backwards compatibility -->
<a id="schemaprovidertype"></a>
<a id="schema_ProviderType"></a>
<a id="tocSprovidertype"></a>
<a id="tocsprovidertype"></a>

```json
"string"
```

ProviderType - for representing provider types

<h2 id="tocS_RangeMap">RangeMap</h2>
<!-- backwards compatibility -->
<a id="schemarangemap"></a>
<a id="schema_RangeMap"></a>
<a id="tocSrangemap"></a>
<a id="tocsrangemap"></a>

```json
{
  "from": "string",
  "text": "string",
  "to": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string|false|none|none|
|text|string|false|none|none|
|to|string|false|none|none|

<h2 id="tocS_RunnerResults">RunnerResults</h2>
<!-- backwards compatibility -->
<a id="schemarunnerresults"></a>
<a id="schema_RunnerResults"></a>
<a id="tocSrunnerresults"></a>
<a id="tocsrunnerresults"></a>

```json
{
  "ActualDuration": 0,
  "ActualQPS": 0,
  "DurationHistogram": {
    "Avg": 0,
    "Max": 0,
    "Min": 0,
    "Percentiles": [
      {
        "Percentile": 0,
        "Value": 0
      }
    ]
  },
  "StartTime": "1970-01-01T00:00:00Z",
  "URL": "string",
  "load-generator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActualDuration|integer(uint64)|false|none|none|
|ActualQPS|number(double)|false|none|none|
|DurationHistogram|object|false|none|none|
|StartTime|string(date-time)|false|none|none|
|URL|string|false|none|none|
|load-generator|string|false|none|none|

<h2 id="tocS_Schedule">Schedule</h2>
<!-- backwards compatibility -->
<a id="schemaschedule"></a>
<a id="schema_Schedule"></a>
<a id="tocSschedule"></a>
<a id="tocsschedule"></a>

```json
{
  "cron_expression": "string",
  "id": [
    0
  ]
}
```

Schedule is the struct for representing schedules

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cron_expression|string|false|none|CronExpression is the UNIX cron expression (quartz expression)|
|id|[UUID](#schemauuid)|false|none|none|

<h2 id="tocS_SchedulesAPIResponse">SchedulesAPIResponse</h2>
<!-- backwards compatibility -->
<a id="schemaschedulesapiresponse"></a>
<a id="schema_SchedulesAPIResponse"></a>
<a id="tocSschedulesapiresponse"></a>
<a id="tocsschedulesapiresponse"></a>

```json
{
  "page": 0,
  "page_size": 0,
  "schedules": [
    {
      "cron_expression": "string",
      "id": [
        0
      ]
    }
  ],
  "total_count": 0
}
```

API response model for SchedulesAPI

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer(uint64)|false|none|none|
|page_size|integer(uint64)|false|none|none|
|schedules|[[Schedule](#schemaschedule)]|false|none|none|
|total_count|integer(uint64)|false|none|none|

<h2 id="tocS_SelectedGrafanaConfig">SelectedGrafanaConfig</h2>
<!-- backwards compatibility -->
<a id="schemaselectedgrafanaconfig"></a>
<a id="schema_SelectedGrafanaConfig"></a>
<a id="tocSselectedgrafanaconfig"></a>
<a id="tocsselectedgrafanaconfig"></a>

```json
{
  "board": {
    "org_id": 0,
    "panels": [
      {
        "alert": {
          "alertRuleTags": {
            "property1": "string",
            "property2": "string"
          },
          "conditions": [
            {
              "evaluator": {
                "params": [
                  0
                ],
                "type": "string"
              },
              "operator": {
                "type": "string"
              },
              "query": {
                "params": [
                  "string"
                ]
              },
              "reducer": {
                "params": [
                  "string"
                ],
                "type": "string"
              },
              "type": "string"
            }
          ],
          "executionErrorState": "string",
          "for": "string",
          "frequency": "string",
          "handler": 0,
          "message": "string",
          "name": "string",
          "noDataState": "string",
          "notifications": [
            {
              "disableResolveMessage": true,
              "frequency": "string",
              "id": 0,
              "isDefault": true,
              "name": "string",
              "sendReminder": true,
              "settings": {},
              "type": "string",
              "uid": "string"
            }
          ]
        },
        "aliasColors": {},
        "bars": true,
        "cards": {
          "cardPadding": 0,
          "cardRound": 0
        },
        "collapsed": true,
        "color": {
          "cardColor": "string",
          "colorScale": "string",
          "colorScheme": "string",
          "exponent": 0,
          "max": 0,
          "min": 0,
          "mode": "string"
        },
        "colorBackground": true,
        "colorValue": true,
        "colors": [
          "string"
        ],
        "columns": [
          {
            "text": "string",
            "value": "string"
          }
        ],
        "content": "string",
        "dashLength": 0,
        "dashboardTags": [
          "string"
        ],
        "dashes": true,
        "dataFormat": "string",
        "datasource": "string",
        "decimals": 0,
        "description": "string",
        "editable": true,
        "error": true,
        "fieldConfig": {
          "defaults": {
            "threshold": {
              "mode": "string",
              "steps": [
                {
                  "color": "string",
                  "value": "string"
                }
              ]
            },
            "unit": "string"
          }
        },
        "fill": 0,
        "folderId": 0,
        "format": "string",
        "gauge": {
          "maxValue": 0,
          "minValue": 0,
          "show": true,
          "thresholdLabels": true,
          "thresholdMarkers": true
        },
        "gridPos": {
          "h": 0,
          "w": 0,
          "x": 0,
          "y": 0
        },
        "headings": true,
        "height": {},
        "hideTimeOverride": true,
        "hideZeroBuckets": true,
        "highlightCards": true,
        "id": 0,
        "isNew": true,
        "leftYAxisLabel": "string",
        "legend": {
          "alignAsTable": true,
          "avg": true,
          "current": true,
          "hideEmpty": true,
          "hideZero": true,
          "max": true,
          "min": true,
          "rightSide": true,
          "show": true,
          "sideWidth": 0,
          "total": true,
          "values": true
        },
        "limit": 0,
        "lines": true,
        "linewidth": 0,
        "links": [
          {
            "asDropdown": true,
            "dashUri": "string",
            "dashboard": "string",
            "icon": "string",
            "includeVars": true,
            "keepTime": true,
            "params": "string",
            "tags": [
              "string"
            ],
            "targetBlank": true,
            "title": "string",
            "tooltip": "string",
            "type": "string",
            "url": "string"
          }
        ],
        "mappingType": 0,
        "mappingTypes": [
          {
            "name": "string",
            "value": 0
          }
        ],
        "maxDataPoints": {
          "Valid": true,
          "Value": 0
        },
        "minSpan": 0,
        "mode": "string",
        "nameFilter": "string",
        "nullPointMode": "string",
        "onlyAlertsOnDashboard": true,
        "options": {
          "colorMode": "string",
          "content": "string",
          "displayMode": "string",
          "graphMode": "string",
          "justifyMode": "string",
          "mode": "string",
          "orientation": "string",
          "reduceOptions": {
            "calcs": [
              "string"
            ],
            "fields": "string",
            "values": true
          },
          "textMode": "string"
        },
        "pageSize": 0,
        "panels": [
          {}
        ],
        "percentage": true,
        "pointradius": 0,
        "points": true,
        "postfix": "string",
        "postfixFontSize": "string",
        "prefix": "string",
        "prefixFontSize": "string",
        "query": "string",
        "rangeMaps": [
          {
            "from": "string",
            "text": "string",
            "to": "string"
          }
        ],
        "recent": true,
        "renderer": "string",
        "repeat": "string",
        "repeatPanelId": 0,
        "reverseYBuckets": true,
        "rightYAxisLabel": "string",
        "scopedVars": {
          "property1": {
            "selected": true,
            "text": "string",
            "value": "string"
          },
          "property2": {
            "selected": true,
            "text": "string",
            "value": "string"
          }
        },
        "scroll": true,
        "search": true,
        "seriesOverrides": [
          {
            "alias": "string",
            "bars": true,
            "color": "string",
            "dashes": true,
            "fill": 0,
            "fillBelowTo": "string",
            "legend": true,
            "lines": true,
            "linewidth": 0,
            "nullPointMode": "string",
            "stack": {
              "Flag": true,
              "Value": "string"
            },
            "transform": "string",
            "yaxis": 0,
            "zindex": 0
          }
        ],
        "show": "string",
        "showHeader": true,
        "sort": {
          "col": 0,
          "desc": true
        },
        "sortOrder": 0,
        "spaceLength": 0,
        "span": 0,
        "sparkline": {
          "fillColor": "string",
          "full": true,
          "lineColor": "string",
          "show": true,
          "ymax": 0,
          "ymin": 0
        },
        "stack": true,
        "starred": true,
        "stateFilter": [
          "string"
        ],
        "steppedLine": true,
        "styles": [
          {
            "alias": "string",
            "colorMode": "string",
            "colors": [
              "string"
            ],
            "dateFormat": "string",
            "decimals": 0,
            "link": true,
            "linkTargetBlank": true,
            "linkTooltip": "string",
            "linkUrl": "string",
            "mappingType": 0,
            "pattern": "string",
            "thresholds": [
              "string"
            ],
            "type": "string",
            "unit": "string",
            "valueMaps": [
              {
                "op": "string",
                "text": "string",
                "value": "string"
              }
            ]
          }
        ],
        "tags": [
          "string"
        ],
        "targets": [
          {
            "alias": "string",
            "aliasBy": "string",
            "alignOptions": [
              {
                "expanded": true,
                "label": "string",
                "options": [
                  {
                    "label": "string",
                    "metricKinds": [
                      "string"
                    ],
                    "text": "string",
                    "value": "string",
                    "valueTypes": [
                      "string"
                    ]
                  }
                ]
              }
            ],
            "alignmentPeriod": "string",
            "bucketAggs": [
              {
                "field": "string",
                "id": "string",
                "settings": {
                  "interval": "string",
                  "min_doc_count": {},
                  "order": "string",
                  "orderBy": "string",
                  "size": "string"
                },
                "type": "string"
              }
            ],
            "crossSeriesReducer": "string",
            "datasource": "string",
            "dimensions": {
              "property1": "string",
              "property2": "string"
            },
            "dsType": "string",
            "expr": "string",
            "filters": [
              "string"
            ],
            "format": "string",
            "group": [
              {
                "params": [
                  "string"
                ],
                "type": "string"
              }
            ],
            "groupBys": [
              "string"
            ],
            "hide": true,
            "instant": true,
            "interval": "string",
            "intervalFactor": 0,
            "legendFormat": "string",
            "measurement": "string",
            "metricColumn": "string",
            "metricKind": "string",
            "metricName": "string",
            "metricType": "string",
            "metrics": [
              {
                "field": "string",
                "id": "string",
                "type": "string"
              }
            ],
            "namespace": "string",
            "perSeriesAligner": "string",
            "period": "string",
            "projectName": "string",
            "query": "string",
            "rawQuery": true,
            "rawSql": "string",
            "refId": "string",
            "region": "string",
            "select": [
              [
                {
                  "params": [
                    "string"
                  ],
                  "type": "string"
                }
              ]
            ],
            "statistics": [
              "string"
            ],
            "step": 0,
            "table": "string",
            "target": "string",
            "timeColumn": "string",
            "timeField": "string",
            "valueType": "string",
            "where": [
              {
                "datatype": "string",
                "name": "string",
                "params": [
                  "string"
                ],
                "type": "string"
              }
            ]
          }
        ],
        "thresholds": "string",
        "timeFrom": "string",
        "timeShift": "string",
        "title": "string",
        "tooltip": {
          "msResolution": true,
          "shared": true,
          "sort": 0,
          "value_type": "string"
        },
        "tooltipDecimals": 0,
        "transform": "string",
        "transparent": true,
        "type": "string",
        "valueFontSize": "string",
        "valueMaps": [
          {
            "op": "string",
            "text": "string",
            "value": "string"
          }
        ],
        "valueName": "string",
        "x-axis": true,
        "xAxis": {
          "show": true
        },
        "xBucketNumber": 0,
        "xBucketSize": "string",
        "xaxis": {
          "decimals": 0,
          "format": "string",
          "label": "string",
          "logBase": 0,
          "max": {
            "Valid": true,
            "Value": 0
          },
          "min": {
            "Valid": true,
            "Value": 0
          },
          "show": true
        },
        "y-axis": true,
        "yAxis": {
          "decimals": 0,
          "format": "string",
          "logBase": 0,
          "max": "string",
          "min": "string",
          "show": true,
          "splitFactor": 0
        },
        "yBucketBound": "string",
        "yBucketNumber": 0,
        "yBucketSize": 0,
        "y_formats": [
          "string"
        ],
        "yaxes": [
          {
            "decimals": 0,
            "format": "string",
            "label": "string",
            "logBase": 0,
            "max": {
              "Valid": true,
              "Value": 0
            },
            "min": {
              "Valid": true,
              "Value": 0
            },
            "show": true
          }
        ]
      }
    ],
    "slug": "string",
    "template_vars": [
      {
        "datasource": {
          "id": 0,
          "name": "string"
        },
        "hide": 0,
        "name": "string",
        "query": "string",
        "value": {}
      }
    ],
    "title": "string",
    "uid": "string",
    "uri": "string"
  },
  "panels": [
    {
      "alert": {
        "alertRuleTags": {
          "property1": "string",
          "property2": "string"
        },
        "conditions": [
          {
            "evaluator": {
              "params": [
                0
              ],
              "type": "string"
            },
            "operator": {
              "type": "string"
            },
            "query": {
              "params": [
                "string"
              ]
            },
            "reducer": {
              "params": [
                "string"
              ],
              "type": "string"
            },
            "type": "string"
          }
        ],
        "executionErrorState": "string",
        "for": "string",
        "frequency": "string",
        "handler": 0,
        "message": "string",
        "name": "string",
        "noDataState": "string",
        "notifications": [
          {
            "disableResolveMessage": true,
            "frequency": "string",
            "id": 0,
            "isDefault": true,
            "name": "string",
            "sendReminder": true,
            "settings": {},
            "type": "string",
            "uid": "string"
          }
        ]
      },
      "aliasColors": {},
      "bars": true,
      "cards": {
        "cardPadding": 0,
        "cardRound": 0
      },
      "collapsed": true,
      "color": {
        "cardColor": "string",
        "colorScale": "string",
        "colorScheme": "string",
        "exponent": 0,
        "max": 0,
        "min": 0,
        "mode": "string"
      },
      "colorBackground": true,
      "colorValue": true,
      "colors": [
        "string"
      ],
      "columns": [
        {
          "text": "string",
          "value": "string"
        }
      ],
      "content": "string",
      "dashLength": 0,
      "dashboardTags": [
        "string"
      ],
      "dashes": true,
      "dataFormat": "string",
      "datasource": "string",
      "decimals": 0,
      "description": "string",
      "editable": true,
      "error": true,
      "fieldConfig": {
        "defaults": {
          "threshold": {
            "mode": "string",
            "steps": [
              {
                "color": "string",
                "value": "string"
              }
            ]
          },
          "unit": "string"
        }
      },
      "fill": 0,
      "folderId": 0,
      "format": "string",
      "gauge": {
        "maxValue": 0,
        "minValue": 0,
        "show": true,
        "thresholdLabels": true,
        "thresholdMarkers": true
      },
      "gridPos": {
        "h": 0,
        "w": 0,
        "x": 0,
        "y": 0
      },
      "headings": true,
      "height": {},
      "hideTimeOverride": true,
      "hideZeroBuckets": true,
      "highlightCards": true,
      "id": 0,
      "isNew": true,
      "leftYAxisLabel": "string",
      "legend": {
        "alignAsTable": true,
        "avg": true,
        "current": true,
        "hideEmpty": true,
        "hideZero": true,
        "max": true,
        "min": true,
        "rightSide": true,
        "show": true,
        "sideWidth": 0,
        "total": true,
        "values": true
      },
      "limit": 0,
      "lines": true,
      "linewidth": 0,
      "links": [
        {
          "asDropdown": true,
          "dashUri": "string",
          "dashboard": "string",
          "icon": "string",
          "includeVars": true,
          "keepTime": true,
          "params": "string",
          "tags": [
            "string"
          ],
          "targetBlank": true,
          "title": "string",
          "tooltip": "string",
          "type": "string",
          "url": "string"
        }
      ],
      "mappingType": 0,
      "mappingTypes": [
        {
          "name": "string",
          "value": 0
        }
      ],
      "maxDataPoints": {
        "Valid": true,
        "Value": 0
      },
      "minSpan": 0,
      "mode": "string",
      "nameFilter": "string",
      "nullPointMode": "string",
      "onlyAlertsOnDashboard": true,
      "options": {
        "colorMode": "string",
        "content": "string",
        "displayMode": "string",
        "graphMode": "string",
        "justifyMode": "string",
        "mode": "string",
        "orientation": "string",
        "reduceOptions": {
          "calcs": [
            "string"
          ],
          "fields": "string",
          "values": true
        },
        "textMode": "string"
      },
      "pageSize": 0,
      "panels": [
        {}
      ],
      "percentage": true,
      "pointradius": 0,
      "points": true,
      "postfix": "string",
      "postfixFontSize": "string",
      "prefix": "string",
      "prefixFontSize": "string",
      "query": "string",
      "rangeMaps": [
        {
          "from": "string",
          "text": "string",
          "to": "string"
        }
      ],
      "recent": true,
      "renderer": "string",
      "repeat": "string",
      "repeatPanelId": 0,
      "reverseYBuckets": true,
      "rightYAxisLabel": "string",
      "scopedVars": {
        "property1": {
          "selected": true,
          "text": "string",
          "value": "string"
        },
        "property2": {
          "selected": true,
          "text": "string",
          "value": "string"
        }
      },
      "scroll": true,
      "search": true,
      "seriesOverrides": [
        {
          "alias": "string",
          "bars": true,
          "color": "string",
          "dashes": true,
          "fill": 0,
          "fillBelowTo": "string",
          "legend": true,
          "lines": true,
          "linewidth": 0,
          "nullPointMode": "string",
          "stack": {
            "Flag": true,
            "Value": "string"
          },
          "transform": "string",
          "yaxis": 0,
          "zindex": 0
        }
      ],
      "show": "string",
      "showHeader": true,
      "sort": {
        "col": 0,
        "desc": true
      },
      "sortOrder": 0,
      "spaceLength": 0,
      "span": 0,
      "sparkline": {
        "fillColor": "string",
        "full": true,
        "lineColor": "string",
        "show": true,
        "ymax": 0,
        "ymin": 0
      },
      "stack": true,
      "starred": true,
      "stateFilter": [
        "string"
      ],
      "steppedLine": true,
      "styles": [
        {
          "alias": "string",
          "colorMode": "string",
          "colors": [
            "string"
          ],
          "dateFormat": "string",
          "decimals": 0,
          "link": true,
          "linkTargetBlank": true,
          "linkTooltip": "string",
          "linkUrl": "string",
          "mappingType": 0,
          "pattern": "string",
          "thresholds": [
            "string"
          ],
          "type": "string",
          "unit": "string",
          "valueMaps": [
            {
              "op": "string",
              "text": "string",
              "value": "string"
            }
          ]
        }
      ],
      "tags": [
        "string"
      ],
      "targets": [
        {
          "alias": "string",
          "aliasBy": "string",
          "alignOptions": [
            {
              "expanded": true,
              "label": "string",
              "options": [
                {
                  "label": "string",
                  "metricKinds": [
                    "string"
                  ],
                  "text": "string",
                  "value": "string",
                  "valueTypes": [
                    "string"
                  ]
                }
              ]
            }
          ],
          "alignmentPeriod": "string",
          "bucketAggs": [
            {
              "field": "string",
              "id": "string",
              "settings": {
                "interval": "string",
                "min_doc_count": {},
                "order": "string",
                "orderBy": "string",
                "size": "string"
              },
              "type": "string"
            }
          ],
          "crossSeriesReducer": "string",
          "datasource": "string",
          "dimensions": {
            "property1": "string",
            "property2": "string"
          },
          "dsType": "string",
          "expr": "string",
          "filters": [
            "string"
          ],
          "format": "string",
          "group": [
            {
              "params": [
                "string"
              ],
              "type": "string"
            }
          ],
          "groupBys": [
            "string"
          ],
          "hide": true,
          "instant": true,
          "interval": "string",
          "intervalFactor": 0,
          "legendFormat": "string",
          "measurement": "string",
          "metricColumn": "string",
          "metricKind": "string",
          "metricName": "string",
          "metricType": "string",
          "metrics": [
            {
              "field": "string",
              "id": "string",
              "type": "string"
            }
          ],
          "namespace": "string",
          "perSeriesAligner": "string",
          "period": "string",
          "projectName": "string",
          "query": "string",
          "rawQuery": true,
          "rawSql": "string",
          "refId": "string",
          "region": "string",
          "select": [
            [
              {
                "params": [
                  "string"
                ],
                "type": "string"
              }
            ]
          ],
          "statistics": [
            "string"
          ],
          "step": 0,
          "table": "string",
          "target": "string",
          "timeColumn": "string",
          "timeField": "string",
          "valueType": "string",
          "where": [
            {
              "datatype": "string",
              "name": "string",
              "params": [
                "string"
              ],
              "type": "string"
            }
          ]
        }
      ],
      "thresholds": "string",
      "timeFrom": "string",
      "timeShift": "string",
      "title": "string",
      "tooltip": {
        "msResolution": true,
        "shared": true,
        "sort": 0,
        "value_type": "string"
      },
      "tooltipDecimals": 0,
      "transform": "string",
      "transparent": true,
      "type": "string",
      "valueFontSize": "string",
      "valueMaps": [
        {
          "op": "string",
          "text": "string",
          "value": "string"
        }
      ],
      "valueName": "string",
      "x-axis": true,
      "xAxis": {
        "show": true
      },
      "xBucketNumber": 0,
      "xBucketSize": "string",
      "xaxis": {
        "decimals": 0,
        "format": "string",
        "label": "string",
        "logBase": 0,
        "max": {
          "Valid": true,
          "Value": 0
        },
        "min": {
          "Valid": true,
          "Value": 0
        },
        "show": true
      },
      "y-axis": true,
      "yAxis": {
        "decimals": 0,
        "format": "string",
        "logBase": 0,
        "max": "string",
        "min": "string",
        "show": true,
        "splitFactor": 0
      },
      "yBucketBound": "string",
      "yBucketNumber": 0,
      "yBucketSize": 0,
      "y_formats": [
        "string"
      ],
      "yaxes": [
        {
          "decimals": 0,
          "format": "string",
          "label": "string",
          "logBase": 0,
          "max": {
            "Valid": true,
            "Value": 0
          },
          "min": {
            "Valid": true,
            "Value": 0
          },
          "show": true
        }
      ]
    }
  ],
  "templateVars": [
    "string"
  ]
}
```

SelectedGrafanaConfig represents the selected boards, panels, and template variables

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|board|[GrafanaBoard](#schemagrafanaboard)|false|none|GrafanaBoard represents a Grafana board|
|panels|[[Panel](#schemapanel)]|false|none|none|
|templateVars|[string]|false|none|none|

<h2 id="tocS_SeriesOverride">SeriesOverride</h2>
<!-- backwards compatibility -->
<a id="schemaseriesoverride"></a>
<a id="schema_SeriesOverride"></a>
<a id="tocSseriesoverride"></a>
<a id="tocsseriesoverride"></a>

```json
{
  "alias": "string",
  "bars": true,
  "color": "string",
  "dashes": true,
  "fill": 0,
  "fillBelowTo": "string",
  "legend": true,
  "lines": true,
  "linewidth": 0,
  "nullPointMode": "string",
  "stack": {
    "Flag": true,
    "Value": "string"
  },
  "transform": "string",
  "yaxis": 0,
  "zindex": 0
}
```

for a graph panel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|none|none|
|bars|boolean|false|none|none|
|color|string|false|none|none|
|dashes|boolean|false|none|none|
|fill|integer(int64)|false|none|none|
|fillBelowTo|string|false|none|none|
|legend|boolean|false|none|none|
|lines|boolean|false|none|none|
|linewidth|integer(int64)|false|none|none|
|nullPointMode|string|false|none|none|
|stack|[BoolString](#schemaboolstring)|false|none|none|
|transform|string|false|none|none|
|yaxis|integer(int64)|false|none|none|
|zindex|integer(int64)|false|none|none|

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "apiVersion": "string",
  "clusterName": "string",
  "creationTimestamp": {},
  "deletionGracePeriodSeconds": 0,
  "deletionTimestamp": {},
  "finalizers": [
    "string"
  ],
  "generateName": "string",
  "generation": 0,
  "kind": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "managedFields": [
    {
      "apiVersion": "string",
      "fieldsType": "string",
      "fieldsV1": {},
      "manager": "string",
      "operation": "string",
      "time": {}
    }
  ],
  "name": "string",
  "namespace": "string",
  "ownerReferences": [
    {
      "apiVersion": "string",
      "blockOwnerDeletion": true,
      "controller": true,
      "kind": "string",
      "name": "string",
      "uid": "string"
    }
  ],
  "resourceVersion": "string",
  "selfLink": "string",
  "spec": {
    "clusterIP": "string",
    "externalIPs": [
      "string"
    ],
    "externalName": "string",
    "externalTrafficPolicy": "string",
    "healthCheckNodePort": 0,
    "ipFamily": "string",
    "loadBalancerIP": "string",
    "loadBalancerSourceRanges": [
      "string"
    ],
    "ports": [
      {
        "appProtocol": "string",
        "name": "string",
        "nodePort": 0,
        "port": 0,
        "protocol": "string",
        "targetPort": {
          "IntVal": 0,
          "StrVal": "string",
          "Type": 0
        }
      }
    ],
    "publishNotReadyAddresses": true,
    "selector": {
      "property1": "string",
      "property2": "string"
    },
    "sessionAffinity": "string",
    "sessionAffinityConfig": {
      "clientIP": {
        "timeoutSeconds": 0
      }
    },
    "topologyKeys": [
      "string"
    ],
    "type": "string"
  },
  "status": {
    "loadBalancer": {
      "ingress": [
        {
          "hostname": "string",
          "ip": "string"
        }
      ]
    }
  },
  "uid": "string"
}
```

Service is a named abstraction of software service (for example, mysql) consisting of local port
(for example 3306) that the proxy listens on, and the selector that determines which pods
will answer requests sent through the proxy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|Annotations is an unstructured key value map stored with a resource that may be<br>set by external tools to store and retrieve arbitrary metadata. They are not<br>queryable and should be preserved when modifying objects.<br>More info: http://kubernetes.io/docs/user-guide/annotations<br>+optional|
|apiVersion|string|false|none|APIVersion defines the versioned schema of this representation of an object.<br>Servers should convert recognized schemas to the latest internal value, and<br>may reject unrecognized values.<br>More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources<br>+optional|
|clusterName|string|false|none|The name of the cluster which the object belongs to.<br>This is used to distinguish resources with same name and namespace in different clusters.<br>This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request.<br>+optional|
|creationTimestamp|[Time](#schematime)|false|none|+protobuf.options.marshal=false<br>+protobuf.as=Timestamp<br>+protobuf.options.(gogoproto.goproto_stringer)=false|
|deletionGracePeriodSeconds|integer(int64)|false|none|Number of seconds allowed for this object to gracefully terminate before<br>it will be removed from the system. Only set when deletionTimestamp is also set.<br>May only be shortened.<br>Read-only.<br>+optional|
|deletionTimestamp|[Time](#schematime)|false|none|+protobuf.options.marshal=false<br>+protobuf.as=Timestamp<br>+protobuf.options.(gogoproto.goproto_stringer)=false|
|finalizers|[string]|false|none|Must be empty before the object is deleted from the registry. Each entry<br>is an identifier for the responsible component that will remove the entry<br>from the list. If the deletionTimestamp of the object is non-nil, entries<br>in this list can only be removed.<br>Finalizers may be processed and removed in any order.  Order is NOT enforced<br>because it introduces significant risk of stuck finalizers.<br>finalizers is a shared field, any actor with permission can reorder it.<br>If the finalizer list is processed in order, then this can lead to a situation<br>in which the component responsible for the first finalizer in the list is<br>waiting for a signal (field value, external system, or other) produced by a<br>component responsible for a finalizer later in the list, resulting in a deadlock.<br>Without enforced ordering finalizers are free to order amongst themselves and<br>are not vulnerable to ordering changes in the list.<br>+optional<br>+patchStrategy=merge|
|generateName|string|false|none|GenerateName is an optional prefix, used by the server, to generate a unique<br>name ONLY IF the Name field has not been provided.<br>If this field is used, the name returned to the client will be different<br>than the name passed. This value will also be combined with a unique suffix.<br>The provided value has the same validation rules as the Name field,<br>and may be truncated by the length of the suffix required to make the value<br>unique on the server.<br><br>If this field is specified and the generated name exists, the server will<br>NOT return a 409 - instead, it will either return 201 Created or 500 with Reason<br>ServerTimeout indicating a unique name could not be found in the time allotted, and the client<br>should retry (optionally after the time indicated in the Retry-After header).<br><br>Applied only if Name is not specified.<br>More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency<br>+optional|
|generation|integer(int64)|false|none|A sequence number representing a specific generation of the desired state.<br>Populated by the system. Read-only.<br>+optional|
|kind|string|false|none|Kind is a string value representing the REST resource this object represents.<br>Servers may infer this from the endpoint the client submits requests to.<br>Cannot be updated.<br>In CamelCase.<br>More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds<br>+optional|
|labels|object|false|none|Map of string keys and values that can be used to organize and categorize<br>(scope and select) objects. May match selectors of replication controllers<br>and services.<br>More info: http://kubernetes.io/docs/user-guide/labels<br>+optional|
|managedFields|[[ManagedFieldsEntry](#schemamanagedfieldsentry)]|false|none|ManagedFields maps workflow-id and version to the set of fields<br>that are managed by that workflow. This is mostly for internal<br>housekeeping, and users typically shouldn't need to set or<br>understand this field. A workflow can be the user's name, a<br>controller's name, or the name of a specific apply path like<br>"ci-cd". The set of fields is always in the version that the<br>workflow used when modifying the object.<br><br>+optional|
|name|string|false|none|Name must be unique within a namespace. Is required when creating resources, although<br>some resources may allow a client to request the generation of an appropriate name<br>automatically. Name is primarily intended for creation idempotence and configuration<br>definition.<br>Cannot be updated.<br>More info: http://kubernetes.io/docs/user-guide/identifiers#names<br>+optional|
|namespace|string|false|none|Namespace defines the space within each name must be unique. An empty namespace is<br>equivalent to the "default" namespace, but "default" is the canonical representation.<br>Not all objects are required to be scoped to a namespace - the value of this field for<br>those objects will be empty.<br><br>Must be a DNS_LABEL.<br>Cannot be updated.<br>More info: http://kubernetes.io/docs/user-guide/namespaces<br>+optional|
|ownerReferences|[[OwnerReference](#schemaownerreference)]|false|none|List of objects depended by this object. If ALL objects in the list have<br>been deleted, this object will be garbage collected. If this object is managed by a controller,<br>then an entry in this list will point to this controller, with the controller field set to true.<br>There cannot be more than one managing controller.<br>+optional<br>+patchMergeKey=uid<br>+patchStrategy=merge|
|resourceVersion|string|false|none|An opaque value that represents the internal version of this object that can<br>be used by clients to determine when objects have changed. May be used for optimistic<br>concurrency, change detection, and the watch operation on a resource or set of resources.<br>Clients must treat these values as opaque and passed unmodified back to the server.<br>They may only be valid for a particular resource or set of resources.<br><br>Populated by the system.<br>Read-only.<br>Value must be treated as opaque by clients and .<br>More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency<br>+optional|
|selfLink|string|false|none|SelfLink is a URL representing this object.<br>Populated by the system.<br>Read-only.<br><br>DEPRECATED<br>Kubernetes will stop propagating this field in 1.20 release and the field is planned<br>to be removed in 1.21 release.<br>+optional|
|spec|[ServiceSpec](#schemaservicespec)|false|none|none|
|status|[ServiceStatus](#schemaservicestatus)|false|none|none|
|uid|[UID](#schemauid)|false|none|UID is a type that holds unique ID values, including UUIDs.  Because we<br>don't ONLY use UUIDs, this is an alias to string.  Being a type captures<br>intent and helps make sure that UIDs and names do not get conflated.|

<h2 id="tocS_ServiceAffinity">ServiceAffinity</h2>
<!-- backwards compatibility -->
<a id="schemaserviceaffinity"></a>
<a id="schema_ServiceAffinity"></a>
<a id="tocSserviceaffinity"></a>
<a id="tocsserviceaffinity"></a>

```json
"string"
```

Session Affinity Type string

<h2 id="tocS_ServiceExternalTrafficPolicyType">ServiceExternalTrafficPolicyType</h2>
<!-- backwards compatibility -->
<a id="schemaserviceexternaltrafficpolicytype"></a>
<a id="schema_ServiceExternalTrafficPolicyType"></a>
<a id="tocSserviceexternaltrafficpolicytype"></a>
<a id="tocsserviceexternaltrafficpolicytype"></a>

```json
"string"
```

Service External Traffic Policy Type string

<h2 id="tocS_ServicePort">ServicePort</h2>
<!-- backwards compatibility -->
<a id="schemaserviceport"></a>
<a id="schema_ServicePort"></a>
<a id="tocSserviceport"></a>
<a id="tocsserviceport"></a>

```json
{
  "appProtocol": "string",
  "name": "string",
  "nodePort": 0,
  "port": 0,
  "protocol": "string",
  "targetPort": {
    "IntVal": 0,
    "StrVal": "string",
    "Type": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appProtocol|string|false|none|The application protocol for this port.<br>This field follows standard Kubernetes label syntax.<br>Un-prefixed names are reserved for IANA standard service names (as per<br>RFC-6335 and http://www.iana.org/assignments/service-names).<br>Non-standard protocols should use prefixed names such as<br>mycompany.com/my-custom-protocol.<br>Field can be enabled with ServiceAppProtocol feature gate.<br>+optional|
|name|string|false|none|The name of this port within the service. This must be a DNS_LABEL.<br>All ports within a ServiceSpec must have unique names. When considering<br>the endpoints for a Service, this must match the 'name' field in the<br>EndpointPort.<br>Optional if only one ServicePort is defined on this service.<br>+optional|
|nodePort|integer(int32)|false|none|The port on each node on which this service is exposed when type=NodePort or LoadBalancer.<br>Usually assigned by the system. If specified, it will be allocated to the service<br>if unused or else creation of the service will fail.<br>Default is to auto-allocate a port if the ServiceType of this Service requires one.<br>More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport<br>+optional|
|port|integer(int32)|false|none|The port that will be exposed by this service.|
|protocol|[Protocol](#schemaprotocol)|false|none|none|
|targetPort|[IntOrString](#schemaintorstring)|false|none|+protobuf=true<br>+protobuf.options.(gogoproto.goproto_stringer)=false<br>+k8s:openapi-gen=true|

<h2 id="tocS_ServiceSpec">ServiceSpec</h2>
<!-- backwards compatibility -->
<a id="schemaservicespec"></a>
<a id="schema_ServiceSpec"></a>
<a id="tocSservicespec"></a>
<a id="tocsservicespec"></a>

```json
{
  "clusterIP": "string",
  "externalIPs": [
    "string"
  ],
  "externalName": "string",
  "externalTrafficPolicy": "string",
  "healthCheckNodePort": 0,
  "ipFamily": "string",
  "loadBalancerIP": "string",
  "loadBalancerSourceRanges": [
    "string"
  ],
  "ports": [
    {
      "appProtocol": "string",
      "name": "string",
      "nodePort": 0,
      "port": 0,
      "protocol": "string",
      "targetPort": {
        "IntVal": 0,
        "StrVal": "string",
        "Type": 0
      }
    }
  ],
  "publishNotReadyAddresses": true,
  "selector": {
    "property1": "string",
    "property2": "string"
  },
  "sessionAffinity": "string",
  "sessionAffinityConfig": {
    "clientIP": {
      "timeoutSeconds": 0
    }
  },
  "topologyKeys": [
    "string"
  ],
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterIP|string|false|none|clusterIP is the IP address of the service and is usually assigned<br>randomly by the master. If an address is specified manually and is not in<br>use by others, it will be allocated to the service; otherwise, creation<br>of the service will fail. This field can not be changed through updates.<br>Valid values are "None", empty string (""), or a valid IP address. "None"<br>can be specified for headless services when proxying is not required.<br>Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if<br>type is ExternalName.<br>More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies<br>+optional|
|externalIPs|[string]|false|none|externalIPs is a list of IP addresses for which nodes in the cluster<br>will also accept traffic for this service.  These IPs are not managed by<br>Kubernetes.  The user is responsible for ensuring that traffic arrives<br>at a node with this IP.  A common example is external load-balancers<br>that are not part of the Kubernetes system.<br>+optional|
|externalName|string|false|none|externalName is the external reference that kubedns or equivalent will<br>return as a CNAME record for this service. No proxying will be involved.<br>Must be a valid RFC-1123 hostname (https://tools.ietf.org/html/rfc1123)<br>and requires Type to be ExternalName.<br>+optional|
|externalTrafficPolicy|[ServiceExternalTrafficPolicyType](#schemaserviceexternaltrafficpolicytype)|false|none|Service External Traffic Policy Type string|
|healthCheckNodePort|integer(int32)|false|none|healthCheckNodePort specifies the healthcheck nodePort for the service.<br>If not specified, HealthCheckNodePort is created by the service api<br>backend with the allocated nodePort. Will use user-specified nodePort value<br>if specified by the client. Only effects when Type is set to LoadBalancer<br>and ExternalTrafficPolicy is set to Local.<br>+optional|
|ipFamily|[IPFamily](#schemaipfamily)|false|none|IPFamily represents the IP Family (IPv4 or IPv6). This type is used<br>to express the family of an IP expressed by a type (i.e. service.Spec.IPFamily)|
|loadBalancerIP|string|false|none|Only applies to Service Type: LoadBalancer<br>LoadBalancer will get created with the IP specified in this field.<br>This feature depends on whether the underlying cloud-provider supports specifying<br>the loadBalancerIP when a load balancer is created.<br>This field will be ignored if the cloud-provider does not support the feature.<br>+optional|
|loadBalancerSourceRanges|[string]|false|none|If specified and supported by the platform, this will restrict traffic through the cloud-provider<br>load-balancer will be restricted to the specified client IPs. This field will be ignored if the<br>cloud-provider does not support the feature."<br>More info: https://kubernetes.io/docs/tasks/access-application-cluster/configure-cloud-provider-firewall/<br>+optional|
|ports|[[ServicePort](#schemaserviceport)]|false|none|The list of ports that are exposed by this service.<br>More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies<br>+patchMergeKey=port<br>+patchStrategy=merge<br>+listType=map<br>+listMapKey=port<br>+listMapKey=protocol|
|publishNotReadyAddresses|boolean|false|none|publishNotReadyAddresses, when set to true, indicates that DNS implementations<br>must publish the notReadyAddresses of subsets for the Endpoints associated with<br>the Service. The default value is false.<br>The primary use case for setting this field is to use a StatefulSet's Headless Service<br>to propagate SRV records for its Pods without respect to their readiness for purpose<br>of peer discovery.<br>+optional|
|selector|object|false|none|Route service traffic to pods with label keys and values matching this<br>selector. If empty or not present, the service is assumed to have an<br>external process managing its endpoints, which Kubernetes will not<br>modify. Only applies to types ClusterIP, NodePort, and LoadBalancer.<br>Ignored if type is ExternalName.<br>More info: https://kubernetes.io/docs/concepts/services-networking/service/<br>+optional|
|sessionAffinity|[ServiceAffinity](#schemaserviceaffinity)|false|none|Session Affinity Type string|
|sessionAffinityConfig|[SessionAffinityConfig](#schemasessionaffinityconfig)|false|none|none|
|topologyKeys|[string]|false|none|topologyKeys is a preference-order list of topology keys which<br>implementations of services should use to preferentially sort endpoints<br>when accessing this Service, it can not be used at the same time as<br>externalTrafficPolicy=Local.<br>Topology keys must be valid label keys and at most 16 keys may be specified.<br>Endpoints are chosen based on the first topology key with available backends.<br>If this field is specified and all entries have no backends that match<br>the topology of the client, the service has no backends for that client<br>and connections should fail.<br>The special value "*" may be used to mean "any topology". This catch-all<br>value, if used, only makes sense as the last value in the list.<br>If this is not specified or empty, no topology constraints will be applied.<br>+optional|
|type|[ServiceType](#schemaservicetype)|false|none|Service Type string describes ingress methods for a service|

<h2 id="tocS_ServiceStatus">ServiceStatus</h2>
<!-- backwards compatibility -->
<a id="schemaservicestatus"></a>
<a id="schema_ServiceStatus"></a>
<a id="tocSservicestatus"></a>
<a id="tocsservicestatus"></a>

```json
{
  "loadBalancer": {
    "ingress": [
      {
        "hostname": "string",
        "ip": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loadBalancer|[LoadBalancerStatus](#schemaloadbalancerstatus)|false|none|none|

<h2 id="tocS_ServiceType">ServiceType</h2>
<!-- backwards compatibility -->
<a id="schemaservicetype"></a>
<a id="schema_ServiceType"></a>
<a id="tocSservicetype"></a>
<a id="tocsservicetype"></a>

```json
"string"
```

Service Type string describes ingress methods for a service

<h2 id="tocS_ServiceUpdateResponse">ServiceUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaserviceupdateresponse"></a>
<a id="schema_ServiceUpdateResponse"></a>
<a id="tocSserviceupdateresponse"></a>
<a id="tocsserviceupdateresponse"></a>

```json
{
  "Warnings": [
    "string"
  ]
}
```

ServiceUpdateResponse service update response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Warnings|[string]|false|none|Optional warning messages|

<h2 id="tocS_SessionAffinityConfig">SessionAffinityConfig</h2>
<!-- backwards compatibility -->
<a id="schemasessionaffinityconfig"></a>
<a id="schema_SessionAffinityConfig"></a>
<a id="tocSsessionaffinityconfig"></a>
<a id="tocssessionaffinityconfig"></a>

```json
{
  "clientIP": {
    "timeoutSeconds": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientIP|[ClientIPConfig](#schemaclientipconfig)|false|none|none|

<h2 id="tocS_Sort">Sort</h2>
<!-- backwards compatibility -->
<a id="schemasort"></a>
<a id="schema_Sort"></a>
<a id="tocSsort"></a>
<a id="tocssort"></a>

```json
{
  "col": 0,
  "desc": true
}
```

for a graph panel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|col|integer(int64)|false|none|none|
|desc|boolean|false|none|none|

<h2 id="tocS_SparkLine">SparkLine</h2>
<!-- backwards compatibility -->
<a id="schemasparkline"></a>
<a id="schema_SparkLine"></a>
<a id="tocSsparkline"></a>
<a id="tocssparkline"></a>

```json
{
  "fillColor": "string",
  "full": true,
  "lineColor": "string",
  "show": true,
  "ymax": 0,
  "ymin": 0
}
```

for a stat

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fillColor|string|false|none|none|
|full|boolean|false|none|none|
|lineColor|string|false|none|none|
|show|boolean|false|none|none|
|ymax|number(double)|false|none|none|
|ymin|number(double)|false|none|none|

<h2 id="tocS_StackdriverAlignOption">StackdriverAlignOption</h2>
<!-- backwards compatibility -->
<a id="schemastackdriveralignoption"></a>
<a id="schema_StackdriverAlignOption"></a>
<a id="tocSstackdriveralignoption"></a>
<a id="tocsstackdriveralignoption"></a>

```json
{
  "label": "string",
  "metricKinds": [
    "string"
  ],
  "text": "string",
  "value": "string",
  "valueTypes": [
    "string"
  ]
}
```

StackdriverAlignOption defines a single alignment option shown in Grafana
during query configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|none|
|metricKinds|[string]|false|none|none|
|text|string|false|none|none|
|value|string|false|none|none|
|valueTypes|[string]|false|none|none|

<h2 id="tocS_StackdriverAlignOptions">StackdriverAlignOptions</h2>
<!-- backwards compatibility -->
<a id="schemastackdriveralignoptions"></a>
<a id="schema_StackdriverAlignOptions"></a>
<a id="tocSstackdriveralignoptions"></a>
<a id="tocsstackdriveralignoptions"></a>

```json
{
  "expanded": true,
  "label": "string",
  "options": [
    {
      "label": "string",
      "metricKinds": [
        "string"
      ],
      "text": "string",
      "value": "string",
      "valueTypes": [
        "string"
      ]
    }
  ]
}
```

StackdriverAlignOptions defines the list of alignment options shown in
Grafana during query configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expanded|boolean|false|none|none|
|label|string|false|none|none|
|options|[[StackdriverAlignOption](#schemastackdriveralignoption)]|false|none|none|

<h2 id="tocS_StringArray">StringArray</h2>
<!-- backwards compatibility -->
<a id="schemastringarray"></a>
<a id="schema_StringArray"></a>
<a id="tocSstringarray"></a>
<a id="tocsstringarray"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SupportedOperation">SupportedOperation</h2>
<!-- backwards compatibility -->
<a id="schemasupportedoperation"></a>
<a id="schema_SupportedOperation"></a>
<a id="tocSsupportedoperation"></a>
<a id="tocssupportedoperation"></a>

```json
{
  "category": 0,
  "key": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[OpCategory](#schemaopcategory)|false|none|none|
|key|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_Target">Target</h2>
<!-- backwards compatibility -->
<a id="schematarget"></a>
<a id="schema_Target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

```json
{
  "alias": "string",
  "aliasBy": "string",
  "alignOptions": [
    {
      "expanded": true,
      "label": "string",
      "options": [
        {
          "label": "string",
          "metricKinds": [
            "string"
          ],
          "text": "string",
          "value": "string",
          "valueTypes": [
            "string"
          ]
        }
      ]
    }
  ],
  "alignmentPeriod": "string",
  "bucketAggs": [
    {
      "field": "string",
      "id": "string",
      "settings": {
        "interval": "string",
        "min_doc_count": {},
        "order": "string",
        "orderBy": "string",
        "size": "string"
      },
      "type": "string"
    }
  ],
  "crossSeriesReducer": "string",
  "datasource": "string",
  "dimensions": {
    "property1": "string",
    "property2": "string"
  },
  "dsType": "string",
  "expr": "string",
  "filters": [
    "string"
  ],
  "format": "string",
  "group": [
    {
      "params": [
        "string"
      ],
      "type": "string"
    }
  ],
  "groupBys": [
    "string"
  ],
  "hide": true,
  "instant": true,
  "interval": "string",
  "intervalFactor": 0,
  "legendFormat": "string",
  "measurement": "string",
  "metricColumn": "string",
  "metricKind": "string",
  "metricName": "string",
  "metricType": "string",
  "metrics": [
    {
      "field": "string",
      "id": "string",
      "type": "string"
    }
  ],
  "namespace": "string",
  "perSeriesAligner": "string",
  "period": "string",
  "projectName": "string",
  "query": "string",
  "rawQuery": true,
  "rawSql": "string",
  "refId": "string",
  "region": "string",
  "select": [
    [
      {
        "params": [
          "string"
        ],
        "type": "string"
      }
    ]
  ],
  "statistics": [
    "string"
  ],
  "step": 0,
  "table": "string",
  "target": "string",
  "timeColumn": "string",
  "timeField": "string",
  "valueType": "string",
  "where": [
    {
      "datatype": "string",
      "name": "string",
      "params": [
        "string"
      ],
      "type": "string"
    }
  ]
}
```

for an any panel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|none|none|
|aliasBy|string|false|none|none|
|alignOptions|[[StackdriverAlignOptions](#schemastackdriveralignoptions)]|false|none|none|
|alignmentPeriod|string|false|none|none|
|bucketAggs|[object]|false|none|none|
|crossSeriesReducer|string|false|none|none|
|datasource|string|false|none|none|
|dimensions|object|false|none|none|
|dsType|string|false|none|For Elasticsearch|
|expr|string|false|none|For Prometheus|
|filters|[string]|false|none|none|
|format|string|false|none|none|
|group|[object]|false|none|none|
|groupBys|[string]|false|none|none|
|hide|boolean|false|none|none|
|instant|boolean|false|none|none|
|interval|string|false|none|none|
|intervalFactor|integer(int64)|false|none|none|
|legendFormat|string|false|none|none|
|measurement|string|false|none|For InfluxDB|
|metricColumn|string|false|none|none|
|metricKind|string|false|none|none|
|metricName|string|false|none|none|
|metricType|string|false|none|none|
|metrics|[object]|false|none|none|
|namespace|string|false|none|For CloudWatch|
|perSeriesAligner|string|false|none|none|
|period|string|false|none|none|
|projectName|string|false|none|For the Stackdriver data source. Find out more information at<br>https:/grafana.com/docs/grafana/v6.0/features/datasources/stackdriver/|
|query|string|false|none|none|
|rawQuery|boolean|false|none|none|
|rawSql|string|false|none|none|
|refId|string|false|none|none|
|region|string|false|none|none|
|select|[[object]]|false|none|none|
|statistics|[string]|false|none|none|
|step|integer(int64)|false|none|none|
|table|string|false|none|For PostgreSQL|
|target|string|false|none|For Graphite|
|timeColumn|string|false|none|none|
|timeField|string|false|none|none|
|valueType|string|false|none|none|
|where|[object]|false|none|none|

<h2 id="tocS_Threshold">Threshold</h2>
<!-- backwards compatibility -->
<a id="schemathreshold"></a>
<a id="schema_Threshold"></a>
<a id="tocSthreshold"></a>
<a id="tocsthreshold"></a>

```json
{
  "colorMode": "string",
  "fill": true,
  "fillColor": "string",
  "line": true,
  "lineColor": "string",
  "op": "string",
  "value": 0,
  "yaxis": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colorMode|string|false|none|critical, warning, ok, custom|
|fill|boolean|false|none|none|
|fillColor|string|false|none|hexadecimal color (e.g. #629e51, only when ColorMode is "custom")|
|line|boolean|false|none|none|
|lineColor|string|false|none|hexadecimal color (e.g. #629e51, only when ColorMode is "custom")|
|op|string|false|none|gt or lt|
|value|number(float)|false|none|the alert threshold value, we do not omitempty, since 0 is a valid<br>threshold|
|yaxis|string|false|none|left or right|

<h2 id="tocS_Time">Time</h2>
<!-- backwards compatibility -->
<a id="schematime"></a>
<a id="schema_Time"></a>
<a id="tocStime"></a>
<a id="tocstime"></a>

```json
{}
```

+protobuf.options.marshal=false
+protobuf.as=Timestamp
+protobuf.options.(gogoproto.goproto_stringer)=false

<h2 id="tocS_Tooltip">Tooltip</h2>
<!-- backwards compatibility -->
<a id="schematooltip"></a>
<a id="schema_Tooltip"></a>
<a id="tocStooltip"></a>
<a id="tocstooltip"></a>

```json
{
  "msResolution": true,
  "shared": true,
  "sort": 0,
  "value_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msResolution|boolean|false|none|none|
|shared|boolean|false|none|none|
|sort|integer(int64)|false|none|none|
|value_type|string|false|none|none|

<h2 id="tocS_Type">Type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_Type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
0
```

<h2 id="tocS_UID">UID</h2>
<!-- backwards compatibility -->
<a id="schemauid"></a>
<a id="schema_UID"></a>
<a id="tocSuid"></a>
<a id="tocsuid"></a>

```json
"string"
```

UID is a type that holds unique ID values, including UUIDs.  Because we
don't ONLY use UUIDs, this is an alias to string.  Being a type captures
intent and helps make sure that UIDs and names do not get conflated.

<h2 id="tocS_UUID">UUID</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_UUID"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
[
  0
]
```

<h2 id="tocS_UserPrefsExtension">UserPrefsExtension</h2>
<!-- backwards compatibility -->
<a id="schemauserprefsextension"></a>
<a id="schema_UserPrefsExtension"></a>
<a id="tocSuserprefsextension"></a>
<a id="tocsuserprefsextension"></a>

```json
{
  "component": "string"
}
```

UserPrefsExtension describes the user preference extension point in the UI

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|component|string|false|none|none|

<h2 id="tocS_UserPrefsExtensions">UserPrefsExtensions</h2>
<!-- backwards compatibility -->
<a id="schemauserprefsextensions"></a>
<a id="schema_UserPrefsExtensions"></a>
<a id="tocSuserprefsextensions"></a>
<a id="tocsuserprefsextensions"></a>

```json
[
  {
    "component": "string"
  }
]
```

UserPrefsExtensions is a collection of UserPrefsExtension

<h2 id="tocS_ValueMap">ValueMap</h2>
<!-- backwards compatibility -->
<a id="schemavaluemap"></a>
<a id="schema_ValueMap"></a>
<a id="tocSvaluemap"></a>
<a id="tocsvaluemap"></a>

```json
{
  "op": "string",
  "text": "string",
  "value": "string"
}
```

for a stat

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|op|string|false|none|none|
|text|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
{
  "build": "string",
  "commitsha": "string",
  "latest": "string",
  "outdated": true,
  "release_channel": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|build|string|false|none|none|
|commitsha|string|false|none|none|
|latest|string|false|none|none|
|outdated|boolean|false|none|none|
|release_channel|string|false|none|none|

<h2 id="tocS_Volume">Volume</h2>
<!-- backwards compatibility -->
<a id="schemavolume"></a>
<a id="schema_Volume"></a>
<a id="tocSvolume"></a>
<a id="tocsvolume"></a>

```json
{
  "CreatedAt": "string",
  "Driver": "string",
  "Labels": {
    "property1": "string",
    "property2": "string"
  },
  "Mountpoint": "string",
  "Name": "string",
  "Options": {
    "property1": "string",
    "property2": "string"
  },
  "Scope": "string",
  "Status": {
    "property1": {},
    "property2": {}
  },
  "UsageData": {
    "RefCount": 0,
    "Size": 0
  }
}
```

Volume volume

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedAt|string|false|none|Date/Time the volume was created.|
|Driver|string|true|none|Name of the volume driver used by the volume.|
|Labels|object|true|none|User-defined key/value metadata.|
|Mountpoint|string|true|none|Mount path of the volume on the host.|
|Name|string|true|none|Name of the volume.|
|Options|object|true|none|The driver specific options used when creating the volume.|
|Scope|string|true|none|The level at which the volume exists. Either `global` for cluster-wide, or `local` for machine level.|
|Status|object|false|none|Low-level details about the volume, provided by the volume driver.<br>Details are returned as a map with key/value pairs:<br>`{"key":"value","key2":"value2"}`.<br><br>The `Status` field is optional, and is omitted if the volume driver<br>does not support this feature.|
|UsageData|[VolumeUsageData](#schemavolumeusagedata)|false|none|VolumeUsageData Usage details about the volume. This information is used by the<br>`GET /system/df` endpoint, and omitted in other endpoints.|

<h2 id="tocS_VolumeCreateBody">VolumeCreateBody</h2>
<!-- backwards compatibility -->
<a id="schemavolumecreatebody"></a>
<a id="schema_VolumeCreateBody"></a>
<a id="tocSvolumecreatebody"></a>
<a id="tocsvolumecreatebody"></a>

```json
{
  "Driver": "string",
  "DriverOpts": {
    "property1": "string",
    "property2": "string"
  },
  "Labels": {
    "property1": "string",
    "property2": "string"
  },
  "Name": "string"
}
```

VolumeCreateBody Volume configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Driver|string|true|none|Name of the volume driver to use.|
|DriverOpts|object|true|none|A mapping of driver options and values. These options are passed directly to the driver and are driver specific.|
|Labels|object|true|none|User-defined key/value metadata.|
|Name|string|true|none|The new volume's name. If not specified, Docker generates a name.|

<h2 id="tocS_VolumeListOKBody">VolumeListOKBody</h2>
<!-- backwards compatibility -->
<a id="schemavolumelistokbody"></a>
<a id="schema_VolumeListOKBody"></a>
<a id="tocSvolumelistokbody"></a>
<a id="tocsvolumelistokbody"></a>

```json
{
  "Volumes": [
    {
      "CreatedAt": "string",
      "Driver": "string",
      "Labels": {
        "property1": "string",
        "property2": "string"
      },
      "Mountpoint": "string",
      "Name": "string",
      "Options": {
        "property1": "string",
        "property2": "string"
      },
      "Scope": "string",
      "Status": {
        "property1": {},
        "property2": {}
      },
      "UsageData": {
        "RefCount": 0,
        "Size": 0
      }
    }
  ],
  "Warnings": [
    "string"
  ]
}
```

VolumeListOKBody Volume list response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Volumes|[[Volume](#schemavolume)]|true|none|List of volumes|
|Warnings|[string]|true|none|Warnings that occurred when fetching the list of volumes|

<h2 id="tocS_VolumeUsageData">VolumeUsageData</h2>
<!-- backwards compatibility -->
<a id="schemavolumeusagedata"></a>
<a id="schema_VolumeUsageData"></a>
<a id="tocSvolumeusagedata"></a>
<a id="tocsvolumeusagedata"></a>

```json
{
  "RefCount": 0,
  "Size": 0
}
```

VolumeUsageData Usage details about the volume. This information is used by the
`GET /system/df` endpoint, and omitted in other endpoints.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RefCount|integer(int64)|true|none|The number of containers referencing this volume. This field<br>is set to `-1` if the reference-count is not available.|
|Size|integer(int64)|true|none|Amount of disk space used by the volume (in bytes). This information<br>is only available for volumes created with the `"local"` volume<br>driver. For volumes created with other volume drivers, this field<br>is set to `-1` ("not available")|
