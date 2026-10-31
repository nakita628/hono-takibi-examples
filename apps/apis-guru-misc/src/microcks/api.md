<h1 id="microcks-api-v17">Microcks API v1.7 v1.7.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API offered by Microcks, the Kuebrnetes native tools for API and microservices mocking and testing (microcks.io)

Base URLs:

* <a href="http://microcks.local">http://microcks.local</a>

* <a href="http://microcks.example.com/api">http://microcks.example.com/api</a>

Email: <a href="mailto:laurent@microcks.io">Laurent Broudoux</a> 
Web: <a href="https://github.com/microcks">Laurent Broudoux</a> 
License: <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a>

# Authentication

- oAuth2 authentication. JWT Bearer acquired using OAuth 2 Authentication flow or Direct Access Grant

    - Flow: clientCredentials
    - Token URL = [https://keycloak.example.com/realms/microcks/protocol/openid-connect/token](https://keycloak.example.com/realms/microcks/protocol/openid-connect/token)
    - Refresh URL = [https://keycloak.example.com/realms/microcks/protocol/openid-connect/token](https://keycloak.example.com/realms/microcks/protocol/openid-connect/token)

|Scope|Scope Description|
|---|---|
|admin|Administrator of the Microcks instance|
|manager|Services & APIs content manager|
|user|Simple authenticated user|

<h1 id="microcks-api-v17-mock">mock</h1>

Operations related to API and Services mocks

## Export a snapshot

<a id="opIdexportSnapshot"></a>

> Code samples

```bash
curl 'https://example.com/export?serviceIds=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /export`

Export a repostiory snapshot with requested services

<h3 id="export-a-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceIds|query|[string]|true|List of service identifiers to export|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="export-a-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Snapshot file representing the export of requested services|Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Content-Disposition|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: admin )
</aside>

## Import a snapshot

<a id="opIdimportSnapshot"></a>

> Code samples

```bash
curl https://example.com/import \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'file=@/path/to/file'
```

`POST /import`

Import a repository snapshot previsouly exported into Microcks

> Body parameter

```yaml
file: string
```

<h3 id="import-a-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SnapshotUpload](#schemasnapshotupload)|true|none|
|» file|body|string(binary)|true|The repository snapshot file|

<h3 id="import-a-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Snasphot has been correctly imported|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: admin )
</aside>

## Get Services and APIs

<a id="opIdGetServices"></a>

> Code samples

```bash
curl https://example.com/services \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /services`

<h3 id="get-services-and-apis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page of Services to retrieve (starts at and defaults to 0)|
|size|query|integer|false|Size of a page. Maximum number of Services to include in a response (defaults to 20)|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "metadata": {
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "createdOn": 0,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lastUpdate": 0
  },
  "name": "string",
  "operations": [
    {
      "bindings": {
        "property1": {
          "destinationName": "string",
          "destinationType": "string",
          "keyType": "string",
          "method": "string",
          "persistent": true,
          "qoS": "string",
          "type": "KAFKA"
        },
        "property2": {
          "destinationName": "string",
          "destinationType": "string",
          "keyType": "string",
          "method": "string",
          "persistent": true,
          "qoS": "string",
          "type": "KAFKA"
        }
      },
      "defaultDelay": 0,
      "dispatcher": "string",
      "dispatcherRules": "string",
      "inputName": "string",
      "method": "string",
      "name": "string",
      "outputName": "string",
      "parameterContraints": [
        {
          "in": "path",
          "mustMatchRegexp": "string",
          "name": "string",
          "recopy": true,
          "required": true
        }
      ],
      "resourcePaths": [
        "string"
      ]
    }
  ],
  "type": "REST",
  "version": "string",
  "xmlNS": "string"
}
```

<h3 id="get-services-and-apis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of found Services|[Service](#schemaservice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: user )
</aside>

## Get the Services counter

<a id="opIdGetServicesCounter"></a>

> Code samples

```bash
curl https://example.com/services/count \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /services/count`

> Example responses

> 200 Response

```json
"{\n    \"counter\": 12\n}"
```

<h3 id="get-the-services-counter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Number of Services in datastore|[Counter](#schemacounter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: user )
</aside>

## Get the already used labels for Services

<a id="opIdGetServicesLabels"></a>

> Code samples

```bash
curl https://example.com/services/labels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /services/labels`

> Example responses

> 200 Response

```json
{
  "property1": [
    "string"
  ],
  "property2": [
    "string"
  ]
}
```

<h3 id="get-the-already-used-labels-for-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Already used labels: keys are label Keys, values are array of label Values|[LabelsMap](#schemalabelsmap)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: admin )
</aside>

## Search for Services and APIs

<a id="opIdSearchServices"></a>

> Code samples

```bash
curl 'https://example.com/services/search?property1=string&property2=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /services/search`

<h3 id="search-for-services-and-apis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queryMap|query|object|true|Map of criterion. Key can be simply 'name' with value as the searched string. You can also search by label using keys like 'labels.x' where 'x' is the label and value the label value|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "metadata": {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "createdOn": 0,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "lastUpdate": 0
    },
    "name": "string",
    "operations": [
      {
        "bindings": {
          "property1": {
            "destinationName": "string",
            "destinationType": "string",
            "keyType": "string",
            "method": "string",
            "persistent": true,
            "qoS": "string",
            "type": "KAFKA"
          },
          "property2": {
            "destinationName": "string",
            "destinationType": "string",
            "keyType": "string",
            "method": "string",
            "persistent": true,
            "qoS": "string",
            "type": "KAFKA"
          }
        },
        "defaultDelay": 0,
        "dispatcher": "string",
        "dispatcherRules": "string",
        "inputName": "string",
        "method": "string",
        "name": "string",
        "outputName": "string",
        "parameterContraints": [
          {
            "in": "path",
            "mustMatchRegexp": "string",
            "name": "string",
            "recopy": true,
            "required": true
          }
        ],
        "resourcePaths": [
          "string"
        ]
      }
    ],
    "type": "REST",
    "version": "string",
    "xmlNS": "string"
  }
]
```

<h3 id="search-for-services-and-apis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of found Services (filtered according search criteria)|Inline|

<h3 id="search-for-services-and-apis-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Service](#schemaservice)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: user )
</aside>

## Get Service

<a id="opIdGetService"></a>

> Code samples

```bash
curl https://example.com/services/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /services/{id}`

<h3 id="get-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messages|query|boolean|false|Whether to include details on services messages into result. Default is false|
|id|path|string|true|Unique identifier of Service to managed|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "metadata": {
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "createdOn": 0,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lastUpdate": 0
  },
  "name": "string",
  "operations": [
    {
      "bindings": {
        "property1": {
          "destinationName": "string",
          "destinationType": "string",
          "keyType": "string",
          "method": "string",
          "persistent": true,
          "qoS": "string",
          "type": "KAFKA"
        },
        "property2": {
          "destinationName": "string",
          "destinationType": "string",
          "keyType": "string",
          "method": "string",
          "persistent": true,
          "qoS": "string",
          "type": "KAFKA"
        }
      },
      "defaultDelay": 0,
      "dispatcher": "string",
      "dispatcherRules": "string",
      "inputName": "string",
      "method": "string",
      "name": "string",
      "outputName": "string",
      "parameterContraints": [
        {
          "in": "path",
          "mustMatchRegexp": "string",
          "name": "string",
          "recopy": true,
          "required": true
        }
      ],
      "resourcePaths": [
        "string"
      ]
    }
  ],
  "type": "REST",
  "version": "string",
  "xmlNS": "string"
}
```

<h3 id="get-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-service-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Service](#schemaservice)|false|none|Represents a Service or API definition as registred into Microcks repository|
|*oneOf*|[ServiceView](#schemaserviceview)|false|none|Aggregate bean for grouping a Service an its messages pairs|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: user )
</aside>

## Delete Service

<a id="opIdDeleteService"></a>

> Code samples

```bash
curl https://example.com/services/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /services/{id}`

Delete a Service

<h3 id="delete-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier of Service to managed|

<h3 id="delete-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Service has been deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: admin manager )
</aside>

## Update Service Metadata

<a id="opIdUpdateServiceMetadata"></a>

> Code samples

```bash
curl https://example.com/services/string/metadata \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "createdOn": 0,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lastUpdate": 0
  }'
```

`PUT /services/{id}/metadata`

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "createdOn": 0,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "lastUpdate": 0
}
```

<h3 id="update-service-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier of Service to managed|
|body|body|[Metadata](#schemametadata)|true|none|
|» annotations|body|object|false|Annotations of attached object|
|» » **additionalProperties**|body|string|false|none|
|» createdOn|body|integer|true|Creation date of attached object|
|» labels|body|object|false|Labels put on attached object|
|» » **additionalProperties**|body|string|false|none|
|» lastUpdate|body|integer|true|Last update of attached object|

<h3 id="update-service-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Service metadata has been updated|None|
|500|Internal Server Error|Update of metadata failed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: admin manager )
</aside>

## Override Service Operation

<a id="opIdOverrideServiceOperation"></a>

> Code samples

```bash
curl 'https://example.com/services/string/operation?operationName=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "defaultDelay": 0,
    "dispatcher": "string",
    "dispatcherRules": "string",
    "parameterConstraints": [
      {
        "in": "path",
        "mustMatchRegexp": "string",
        "name": "string",
        "recopy": true,
        "required": true
      }
    ]
  }'
```

`PUT /services/{id}/operation`

> Body parameter

```json
{
  "defaultDelay": 0,
  "dispatcher": "string",
  "dispatcherRules": "string",
  "parameterConstraints": [
    {
      "in": "path",
      "mustMatchRegexp": "string",
      "name": "string",
      "recopy": true,
      "required": true
    }
  ]
}
```

<h3 id="override-service-operation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operationName|query|string|true|Name of operation to update|
|id|path|string|true|Unique identifier of Service to managed|
|body|body|[OperationOverrideDTO](#schemaoperationoverridedto)|true|none|
|» defaultDelay|body|integer|false|Default delay in milliseconds to apply to mock responses on this operation|
|» dispatcher|body|string|false|Type of dispatcher to apply for this operation|
|» dispatcherRules|body|string|false|Rules of dispatcher for this operation|
|» parameterConstraints|body|[[ParameterConstraint](#schemaparameterconstraint)]|false|Constraints that may apply to incoming parameters on this operation|

<h3 id="override-service-operation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Operation has been updated|None|
|500|Internal Server Error|Operation cannot be updated|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: admin manager )
</aside>

<h1 id="microcks-api-v17-test">test</h1>

Operations related to API and Services tests

## Create a new Test

<a id="opIdCreateTest"></a>

> Code samples

```bash
curl https://example.com/tests \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filteredOperations": [
      "string"
    ],
    "operationHeaders": {
      "property1": [
        {
          "name": "string",
          "values": "string"
        }
      ],
      "property2": [
        {
          "name": "string",
          "values": "string"
        }
      ]
    },
    "runnerType": "HTTP",
    "secretName": "string",
    "serviceId": "string",
    "testEndpoint": "string",
    "timeout": 0
  }'
```

`POST /tests`

> Body parameter

```json
{
  "filteredOperations": [
    "string"
  ],
  "operationHeaders": {
    "property1": [
      {
        "name": "string",
        "values": "string"
      }
    ],
    "property2": [
      {
        "name": "string",
        "values": "string"
      }
    ]
  },
  "runnerType": "HTTP",
  "secretName": "string",
  "serviceId": "string",
  "testEndpoint": "string",
  "timeout": 0
}
```

<h3 id="create-a-new-test-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TestRequest](#schematestrequest)|true|none|
|» filteredOperations|body|[string]|false|A restriction on service operations to test|
|» operationHeaders|body|[OperationHeaders](#schemaoperationheaders)|false|This test operations headers override|
|» runnerType|body|[TestRunnerType](#schematestrunnertype)|true|Runner used for this test|
|» secretName|body|string|false|The name of Secret to use for connecting the test endpoint|
|» serviceId|body|string|true|Unique identifier of service to test|
|» testEndpoint|body|string|true|Endpoint to test for this service|
|» timeout|body|integer|true|The maximum time (in milliseconds) to wait for this test ends|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» runnerType|HTTP|
|» runnerType|SOAP_HTTP|
|» runnerType|SOAP_UI|
|» runnerType|POSTMAN|
|» runnerType|OPEN_API_SCHEMA|
|» runnerType|ASYNC_API_SCHEMA|
|» runnerType|GRPC_PROTOBUF|
|» runnerType|GRAPHQL_SCHEMA|

> Example responses

> 201 Response

```json
{
  "elapsedTime": 0,
  "id": "string",
  "inProgress": true,
  "operationHeaders": {
    "property1": [
      {
        "name": "string",
        "values": "string"
      }
    ],
    "property2": [
      {
        "name": "string",
        "values": "string"
      }
    ]
  },
  "runnerType": "HTTP",
  "secretRef": "{\n    \"secretId\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\"\n}",
  "serviceId": "string",
  "success": true,
  "testCaseResults": [
    {
      "elapsedTime": 0,
      "operationName": "string",
      "success": true,
      "testStepResults": [
        {
          "elapsedTime": 0,
          "eventMessageName": "string",
          "message": "string",
          "requestName": "string",
          "success": true
        }
      ]
    }
  ],
  "testDate": 0,
  "testNumber": 0,
  "testedEndpoint": "string",
  "timeout": 0,
  "version": 0
}
```

<h3 id="create-a-new-test-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created TestResult (empty shell cause tests are executed asynchronously)|[TestResult](#schematestresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: user )
</aside>

## Get TestResults by Service

<a id="opIdGetTestResultsByService"></a>

> Code samples

```bash
curl https://example.com/tests/service/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tests/service/{serviceId}`

<h3 id="get-testresults-by-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|Unique identifier of Service to manage TestResults for|

> Example responses

> 200 Response

```json
[
  {
    "elapsedTime": 0,
    "id": "string",
    "inProgress": true,
    "operationHeaders": {
      "property1": [
        {
          "name": "string",
          "values": "string"
        }
      ],
      "property2": [
        {
          "name": "string",
          "values": "string"
        }
      ]
    },
    "runnerType": "HTTP",
    "secretRef": "{\n    \"secretId\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\"\n}",
    "serviceId": "string",
    "success": true,
    "testCaseResults": [
      {
        "elapsedTime": 0,
        "operationName": "string",
        "success": true,
        "testStepResults": [
          {
            "elapsedTime": 0,
            "eventMessageName": "string",
            "message": "string",
            "requestName": "string",
            "success": true
          }
        ]
      }
    ],
    "testDate": 0,
    "testNumber": 0,
    "testedEndpoint": "string",
    "timeout": 0,
    "version": 0
  }
]
```

<h3 id="get-testresults-by-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of TestResults for the Service having the requested id|Inline|

<h3 id="get-testresults-by-service-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TestResult](#schematestresult)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: user )
</aside>

## Get the TestResults for Service counter

<a id="opIdGetTestResultsByServiceCounter"></a>

> Code samples

```bash
curl https://example.com/tests/service/string/count \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tests/service/{serviceId}/count`

<h3 id="get-the-testresults-for-service-counter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|Unique identifier of Service to manage TestResults for|

> Example responses

> 200 Response

```json
"{\n    \"counter\": 12\n}"
```

<h3 id="get-the-testresults-for-service-counter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Number of TestResults for this Service in datastore|[Counter](#schemacounter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: user )
</aside>

## Get TestResult

<a id="opIdGetTestResult"></a>

> Code samples

```bash
curl https://example.com/tests/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tests/{id}`

<h3 id="get-testresult-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier of TestResult to manage|

> Example responses

> 200 Response

```json
{
  "elapsedTime": 0,
  "id": "string",
  "inProgress": true,
  "operationHeaders": {
    "property1": [
      {
        "name": "string",
        "values": "string"
      }
    ],
    "property2": [
      {
        "name": "string",
        "values": "string"
      }
    ]
  },
  "runnerType": "HTTP",
  "secretRef": "{\n    \"secretId\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\"\n}",
  "serviceId": "string",
  "success": true,
  "testCaseResults": [
    {
      "elapsedTime": 0,
      "operationName": "string",
      "success": true,
      "testStepResults": [
        {
          "elapsedTime": 0,
          "eventMessageName": "string",
          "message": "string",
          "requestName": "string",
          "success": true
        }
      ]
    }
  ],
  "testDate": 0,
  "testNumber": 0,
  "testedEndpoint": "string",
  "timeout": 0,
  "version": 0
}
```

<h3 id="get-testresult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Requested TestResult|[TestResult](#schematestresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: user )
</aside>

## Get events for TestCase

<a id="opIdGetEventsByTestCase"></a>

> Code samples

```bash
curl https://example.com/tests/string/events/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tests/{id}/events/{testCaseId}`

<h3 id="get-events-for-testcase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier of TestResult to manage|
|testCaseId|path|string|true|Unique identifier of TetsCaseResult to manage|

> Example responses

> 200 Response

```json
[
  {
    "eventMessage": {
      "content": "string",
      "headers": [
        {
          "name": "string",
          "values": [
            "string"
          ]
        }
      ],
      "id": "string",
      "mediaType": "string",
      "name": "string",
      "operationId": "string",
      "testCaseId": "string"
    },
    "type": "reqRespPair"
  }
]
```

<h3 id="get-events-for-testcase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of event messages for this TestCase|Inline|

<h3 id="get-events-for-testcase-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UnidirectionalEvent](#schemaunidirectionalevent)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer
</aside>

## Get messages for TestCase

<a id="opIdGetMessagesByTestCase"></a>

> Code samples

```bash
curl https://example.com/tests/string/messages/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tests/{id}/messages/{testCaseId}`

<h3 id="get-messages-for-testcase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier of TestResult to manage|
|testCaseId|path|string|true|Unique identifier of TetsCaseResult to manage|

> Example responses

> 200 Response

```json
[
  {
    "request": {
      "content": "string",
      "headers": [
        {
          "name": "string",
          "values": [
            "string"
          ]
        }
      ],
      "id": "string",
      "name": "string",
      "operationId": "string",
      "testCaseId": "string"
    },
    "response": {
      "content": "string",
      "headers": [
        {
          "name": "string",
          "values": [
            "string"
          ]
        }
      ],
      "id": "string",
      "name": "string",
      "operationId": "string",
      "testCaseId": "string"
    },
    "type": "reqRespPair"
  }
]
```

<h3 id="get-messages-for-testcase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of request and response messages for this TestCase|Inline|

<h3 id="get-messages-for-testcase-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RequestResponsePair](#schemarequestresponsepair)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: user )
</aside>

## Report and create a new TestCaseResult

<a id="opIdReportTestCaseResult"></a>

> Code samples

```bash
curl https://example.com/tests/string/testCaseResult \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "operationName": "string"
  }'
```

`POST /tests/{id}/testCaseResult`

Report a TestCaseResult (typically used by a Test runner)

> Body parameter

```json
{
  "operationName": "string"
}
```

<h3 id="report-and-create-a-new-testcaseresult-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier of TestResult to manage|
|body|body|[TestCaseReturnDTO](#schematestcasereturndto)|true|TestCase return wrapper object|
|» operationName|body|string|true|Name of related operation for this TestCase|

> Example responses

> 200 Response

```json
{
  "elapsedTime": 0,
  "operationName": "string",
  "success": true,
  "testStepResults": [
    {
      "elapsedTime": 0,
      "eventMessageName": "string",
      "message": "string",
      "requestName": "string",
      "success": true
    }
  ]
}
```

<h3 id="report-and-create-a-new-testcaseresult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|TestCaseResult is reported|[TestCaseResult](#schematestcaseresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer
</aside>

<h1 id="microcks-api-v17-job">job</h1>

Operations related to Jobs for discovering mocks and tests

## Upload an artifact

<a id="opIduploadArtifact"></a>

> Code samples

```bash
curl 'https://example.com/artifact/upload?mainArtifact=true' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /artifact/upload`

Uploads an artifact to be imported by Microcks.

> Body parameter

```yaml
"POST /api/artifact/upload HTTP/1.1\nHost: microcks\nUser-Agent: curl/7.54.0\nAccept: */*\nAuthorization: Bearer <REDACTED>\nContent-Length: 2743\nExpect: 100-continue\nContent-Type: multipart/form-data; boundary=------------------------8af8cbb56dd4bde0\n\n--------------------------8af8cbb56dd4bde0\nContent-Disposition: form-data; name=\"file\"; filename=\"github.json\"\nContent-Type: application/octet-stream\n\nTHE ARTIFACT HERE\n\n--------------------------8af8cbb56dd4bde0--\n"
```

<h3 id="upload-an-artifact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mainArtifact|query|boolean|true|Flag telling if this should be considered as primary or secondary artifact. Default to 'true'|
|body|body|[ArtifactUpload](#schemaartifactupload)|true|none|
|» file|body|string(binary)|true|The artifact to upload|

<h3 id="upload-an-artifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Artifact was imported and Service found|Inline|
|204|No Content|No file attribute found in uploaded data|None|
|400|Bad Request|Artifact content is invalid and not understood|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: user )
</aside>

## Get ImportJobs

<a id="opIdGetImportJobs"></a>

> Code samples

```bash
curl https://example.com/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /jobs`

Retrieve a list of ImportJobs

<h3 id="get-importjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page of ImportJobs to retrieve (starts at and defaults to 0)|
|size|query|integer|false|Size of a page. Maximum number of ImportJobs to include in a response (defaults to 20)|
|name|query|string|false|Name like criterion for query|

> Example responses

> 200 Response

```json
[
  {
    "active": true,
    "createdDate": "1970-01-01T00:00:00Z",
    "etag": "string",
    "frequency": "string",
    "id": "string",
    "lastImportDate": "1970-01-01T00:00:00Z",
    "lastImportError": "string",
    "mainArtifact": true,
    "metadata": {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "createdOn": 0,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "lastUpdate": 0
    },
    "name": "string",
    "repositoryDisableSSLValidation": true,
    "repositoryUrl": "string",
    "secretRef": "{\n    \"secretId\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\"\n}",
    "serviceRefs": [
      {
        "name": "string",
        "serviceId": "string",
        "version": "string"
      }
    ]
  }
]
```

<h3 id="get-importjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of found ImportJobs|Inline|

<h3 id="get-importjobs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ImportJob](#schemaimportjob)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: user )
</aside>

## Create ImportJob

<a id="opIdCreateImportJob"></a>

> Code samples

```bash
curl https://example.com/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "active": true,
    "createdDate": "1970-01-01T00:00:00Z",
    "etag": "string",
    "frequency": "string",
    "id": "string",
    "lastImportDate": "1970-01-01T00:00:00Z",
    "lastImportError": "string",
    "mainArtifact": true,
    "metadata": {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "createdOn": 0,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "lastUpdate": 0
    },
    "name": "string",
    "repositoryDisableSSLValidation": true,
    "repositoryUrl": "string",
    "secretRef": "{\n    \"secretId\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\"\n}",
    "serviceRefs": [
      {
        "name": "string",
        "serviceId": "string",
        "version": "string"
      }
    ]
  }'
```

`POST /jobs`

Create a new ImportJob

> Body parameter

```json
{
  "active": true,
  "createdDate": "1970-01-01T00:00:00Z",
  "etag": "string",
  "frequency": "string",
  "id": "string",
  "lastImportDate": "1970-01-01T00:00:00Z",
  "lastImportError": "string",
  "mainArtifact": true,
  "metadata": {
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "createdOn": 0,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lastUpdate": 0
  },
  "name": "string",
  "repositoryDisableSSLValidation": true,
  "repositoryUrl": "string",
  "secretRef": "{\n    \"secretId\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\"\n}",
  "serviceRefs": [
    {
      "name": "string",
      "serviceId": "string",
      "version": "string"
    }
  ]
}
```

<h3 id="create-importjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImportJob](#schemaimportjob)|true|none|
|» active|body|boolean|false|Whether this ImportJob is active (ie. scheduled for execution)|
|» createdDate|body|string(date-time)|false|Creation date for this ImportJob|
|» etag|body|string|false|Etag of repository URL during previous import. Is used for not re-importing if no recent changes|
|» frequency|body|string|false|Reserved for future usage|
|» id|body|string|false|Unique identifier of ImportJob|
|» lastImportDate|body|string(date-time)|false|Date last import was done|
|» lastImportError|body|string|false|Error message of last import (if any)|
|» mainArtifact|body|boolean|false|Flag telling if considered as primary or secondary artifact. Default to `true`|
|» metadata|body|[Metadata](#schemametadata)|false|Metadata of ImportJob|
|» name|body|string|true|Unique distinct name of this ImportJob|
|» repositoryDisableSSLValidation|body|boolean|false|Whether to disable SSL certificate verification when checking repository|
|» repositoryUrl|body|string|true|URL of mocks and tests repository artifact|
|» secretRef|body|[SecretRef](#schemasecretref)|false|Reference of a Secret to used when checking repository|
|» serviceRefs|body|[[ServiceRef](#schemaserviceref)]|false|References of Services discovered when checking repository|

> Example responses

> 201 Response

```json
{
  "active": true,
  "createdDate": "1970-01-01T00:00:00Z",
  "etag": "string",
  "frequency": "string",
  "id": "string",
  "lastImportDate": "1970-01-01T00:00:00Z",
  "lastImportError": "string",
  "mainArtifact": true,
  "metadata": {
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "createdOn": 0,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lastUpdate": 0
  },
  "name": "string",
  "repositoryDisableSSLValidation": true,
  "repositoryUrl": "string",
  "secretRef": "{\n    \"secretId\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\"\n}",
  "serviceRefs": [
    {
      "name": "string",
      "serviceId": "string",
      "version": "string"
    }
  ]
}
```

<h3 id="create-importjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created ImportJob|[ImportJob](#schemaimportjob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: user )
</aside>

## Get the ImportJobs counter

<a id="opIdGetImportJobCounter"></a>

> Code samples

```bash
curl https://example.com/jobs/count \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /jobs/count`

> Example responses

> 200 Response

```json
"{\n    \"counter\": 12\n}"
```

<h3 id="get-the-importjobs-counter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Number of ImportJobs in datastore|[Counter](#schemacounter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: user )
</aside>

## Get ImportJob

> Code samples

```bash
curl https://example.com/jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /jobs/{id}`

Retrieve an ImportJob using its identifier

<h3 id="get-importjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier of ImportJob to manage|

> Example responses

> 200 Response

```json
{
  "active": true,
  "createdDate": "1970-01-01T00:00:00Z",
  "etag": "string",
  "frequency": "string",
  "id": "string",
  "lastImportDate": "1970-01-01T00:00:00Z",
  "lastImportError": "string",
  "mainArtifact": true,
  "metadata": {
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "createdOn": 0,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lastUpdate": 0
  },
  "name": "string",
  "repositoryDisableSSLValidation": true,
  "repositoryUrl": "string",
  "secretRef": "{\n    \"secretId\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\"\n}",
  "serviceRefs": [
    {
      "name": "string",
      "serviceId": "string",
      "version": "string"
    }
  ]
}
```

<h3 id="get-importjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Found ImportJob|[ImportJob](#schemaimportjob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: user )
</aside>

## Update ImportJob

> Code samples

```bash
curl https://example.com/jobs/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "active": true,
    "createdDate": "1970-01-01T00:00:00Z",
    "etag": "string",
    "frequency": "string",
    "id": "string",
    "lastImportDate": "1970-01-01T00:00:00Z",
    "lastImportError": "string",
    "mainArtifact": true,
    "metadata": {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "createdOn": 0,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "lastUpdate": 0
    },
    "name": "string",
    "repositoryDisableSSLValidation": true,
    "repositoryUrl": "string",
    "secretRef": "{\n    \"secretId\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\"\n}",
    "serviceRefs": [
      {
        "name": "string",
        "serviceId": "string",
        "version": "string"
      }
    ]
  }'
```

`POST /jobs/{id}`

Update an ImportJob

> Body parameter

```json
{
  "active": true,
  "createdDate": "1970-01-01T00:00:00Z",
  "etag": "string",
  "frequency": "string",
  "id": "string",
  "lastImportDate": "1970-01-01T00:00:00Z",
  "lastImportError": "string",
  "mainArtifact": true,
  "metadata": {
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "createdOn": 0,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lastUpdate": 0
  },
  "name": "string",
  "repositoryDisableSSLValidation": true,
  "repositoryUrl": "string",
  "secretRef": "{\n    \"secretId\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\"\n}",
  "serviceRefs": [
    {
      "name": "string",
      "serviceId": "string",
      "version": "string"
    }
  ]
}
```

<h3 id="update-importjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier of ImportJob to manage|
|body|body|[ImportJob](#schemaimportjob)|true|none|
|» active|body|boolean|false|Whether this ImportJob is active (ie. scheduled for execution)|
|» createdDate|body|string(date-time)|false|Creation date for this ImportJob|
|» etag|body|string|false|Etag of repository URL during previous import. Is used for not re-importing if no recent changes|
|» frequency|body|string|false|Reserved for future usage|
|» id|body|string|false|Unique identifier of ImportJob|
|» lastImportDate|body|string(date-time)|false|Date last import was done|
|» lastImportError|body|string|false|Error message of last import (if any)|
|» mainArtifact|body|boolean|false|Flag telling if considered as primary or secondary artifact. Default to `true`|
|» metadata|body|[Metadata](#schemametadata)|false|Metadata of ImportJob|
|» name|body|string|true|Unique distinct name of this ImportJob|
|» repositoryDisableSSLValidation|body|boolean|false|Whether to disable SSL certificate verification when checking repository|
|» repositoryUrl|body|string|true|URL of mocks and tests repository artifact|
|» secretRef|body|[SecretRef](#schemasecretref)|false|Reference of a Secret to used when checking repository|
|» serviceRefs|body|[[ServiceRef](#schemaserviceref)]|false|References of Services discovered when checking repository|

> Example responses

> 200 Response

```json
{
  "active": true,
  "createdDate": "1970-01-01T00:00:00Z",
  "etag": "string",
  "frequency": "string",
  "id": "string",
  "lastImportDate": "1970-01-01T00:00:00Z",
  "lastImportError": "string",
  "mainArtifact": true,
  "metadata": {
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "createdOn": 0,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lastUpdate": 0
  },
  "name": "string",
  "repositoryDisableSSLValidation": true,
  "repositoryUrl": "string",
  "secretRef": "{\n    \"secretId\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\"\n}",
  "serviceRefs": [
    {
      "name": "string",
      "serviceId": "string",
      "version": "string"
    }
  ]
}
```

<h3 id="update-importjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated ImportJob|[ImportJob](#schemaimportjob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer
</aside>

## Delete ImportJob

<a id="opIdDeleteImportJob"></a>

> Code samples

```bash
curl https://example.com/jobs/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /jobs/{id}`

Delete an ImportJob

<h3 id="delete-importjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier of ImportJob to manage|

<h3 id="delete-importjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ImportJob deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: admin )
</aside>

## Activate an ImportJob

<a id="opIdActivateImportJob"></a>

> Code samples

```bash
curl https://example.com/jobs/string/activate \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /jobs/{id}/activate`

Make an ImportJob active, so that it is executed

<h3 id="activate-an-importjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier of ImportJob to manage|

> Example responses

> 200 Response

```json
{
  "active": true,
  "createdDate": "1970-01-01T00:00:00Z",
  "etag": "string",
  "frequency": "string",
  "id": "string",
  "lastImportDate": "1970-01-01T00:00:00Z",
  "lastImportError": "string",
  "mainArtifact": true,
  "metadata": {
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "createdOn": 0,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lastUpdate": 0
  },
  "name": "string",
  "repositoryDisableSSLValidation": true,
  "repositoryUrl": "string",
  "secretRef": "{\n    \"secretId\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\"\n}",
  "serviceRefs": [
    {
      "name": "string",
      "serviceId": "string",
      "version": "string"
    }
  ]
}
```

<h3 id="activate-an-importjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ImportJob is activated|[ImportJob](#schemaimportjob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: user )
</aside>

## Start an ImportJob

<a id="opIdStartImportJob"></a>

> Code samples

```bash
curl https://example.com/jobs/string/start \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /jobs/{id}/start`

Starting an ImportJob forces it to immediatly import mock definitions

<h3 id="start-an-importjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier of ImportJob to manage|

> Example responses

> 200 Response

```json
{
  "active": true,
  "createdDate": "1970-01-01T00:00:00Z",
  "etag": "string",
  "frequency": "string",
  "id": "string",
  "lastImportDate": "1970-01-01T00:00:00Z",
  "lastImportError": "string",
  "mainArtifact": true,
  "metadata": {
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "createdOn": 0,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lastUpdate": 0
  },
  "name": "string",
  "repositoryDisableSSLValidation": true,
  "repositoryUrl": "string",
  "secretRef": "{\n    \"secretId\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\"\n}",
  "serviceRefs": [
    {
      "name": "string",
      "serviceId": "string",
      "version": "string"
    }
  ]
}
```

<h3 id="start-an-importjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Started ImportJob|[ImportJob](#schemaimportjob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: user )
</aside>

## Stop an ImportJob

<a id="opIdStopImportJob"></a>

> Code samples

```bash
curl https://example.com/jobs/string/stop \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /jobs/{id}/stop`

Stopping an ImportJob desactivate it, so that it won't execute at next schedule

<h3 id="stop-an-importjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier of ImportJob to manage|

> Example responses

> 200 Response

```json
{
  "active": true,
  "createdDate": "1970-01-01T00:00:00Z",
  "etag": "string",
  "frequency": "string",
  "id": "string",
  "lastImportDate": "1970-01-01T00:00:00Z",
  "lastImportError": "string",
  "mainArtifact": true,
  "metadata": {
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "createdOn": 0,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lastUpdate": 0
  },
  "name": "string",
  "repositoryDisableSSLValidation": true,
  "repositoryUrl": "string",
  "secretRef": "{\n    \"secretId\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\"\n}",
  "serviceRefs": [
    {
      "name": "string",
      "serviceId": "string",
      "version": "string"
    }
  ]
}
```

<h3 id="stop-an-importjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stopped ImportJob|[ImportJob](#schemaimportjob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: user )
</aside>

<h1 id="microcks-api-v17-config">config</h1>

Operations related to configuration

## Get features configuration

<a id="opIdGetFeaturesConfiguration"></a>

> Code samples

```bash
curl https://example.com/features/config \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /features/config`

<h3 id="get-features-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get features configuration|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer
</aside>

## Get authentification configuration

<a id="opIdGetKeycloakConfig"></a>

> Code samples

```bash
curl https://example.com/keycloak/config \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /keycloak/config`

> Example responses

> 200 Response

```json
{
  "auth-server-url": "string",
  "enabled": true,
  "public-client": "string",
  "realm": "string",
  "resource": "string",
  "ssl-required": "none"
}
```

<h3 id="get-authentification-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get current configuration|[KeycloakConfig](#schemakeycloakconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer
</aside>

## Get Secrets

<a id="opIdGetSecrets"></a>

> Code samples

```bash
curl https://example.com/secrets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /secrets`

<h3 id="get-secrets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page of Secrets to retrieve (starts at and defaults to 0)|
|size|query|integer|false|Size of a page. Maximum number of Secrets to include in a response (defaults to 20)|

> Example responses

> 200 Response

```json
[
  "{\n    \"id\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\",\n    \"description\": \"Gogs internal corporate repository\",\n    \"username\": \"team\",\n    \"password\": \"team\",\n    \"caCertPem\": \"-----BEGIN CERTIFICATE-----\\nMIIC6jCCAdKgAwIBAgIBATANBgkqhkiG9w0BAQsFADAmMSQwIgYDVQQDDBtvcGVu\\nc2hpZnQtc2lnbmVyQDE1MzE5MTA5MDIwHhcNMTgwNzE4MTA0ODIyWhcNMjMwNzE3\\nMTA0ODIzWjAmMSQwIgYDVQQDDBtvcGVuc2hpZnQtc2lnbmVyQDE1MzE5MTA5MDIw\\nggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCyaP1jlpnm8WpfCSnUa8Qt\\nhdUynOLLgElUtpWoW25wB9tO2ZmEj+fVsTyzEsW8+nfXXfRsBEzPm2ze9uEMTPTB\\nAY0k7DbLZfjmF1lCckUvvh1rR/8hoPuXETjXUuOdtm7gRHTOxLQyH2Qi/q0DYJAn\\nprKyRCLa35pRnykL6v4bHkqFnqDEho63i29XHhm2703moh4YCl1iYa2Rh6D44cjn\\n8lBCq6o7zoZSmc/aBamRkQrfZYcolR8OUtDS4oEB0zMftmea2ycashsLEMB+Cq4r\\n64NI2QM7qOxdTuXsDivHfLl7RTuWEOozGaJXoiPaGU/3d/KnY0gKJ2TC1KXt6Xjn\\nAgMBAAGjIzAhMA4GA1UdDwEB/wQEAwICpDAPBgNVHRMBAf8EBTADAQH/MA0GCSqG\\nSIb3DQEBCwUAA4IBAQCeUmxfUzw0VAFG6HvVYIsfvumiIvsSWmclGIZqNJyfMHFD\\nMy6xzPRNNfWe5aumGTJsuIzuXfDRcdO7KmH1d2/5brkvWpxp6svVrYPvcoXjl4VN\\nQR2mv5Di4KHfiiwvP3eeewjUZj+uREGqX2fcbJPHTPy32Kpb0H8Uy09BklhjC7QP\\ngRAGexPhU1oBL/CoOwbHKcQ6dxs/y1SxzI8gXEtec4z62CroI13iT7U0UjSqFBE4\\nKfrJombfz0d68781Z40ll+8my251ZNfbLBhQ3UHW0JnkBEQkE1aBorUoj2iakYvx\\nA2qZh+8q2b8MwMb2YsQ0dlxKd6c4tN3lmMnO4bnd\\n-----END CERTIFICATE-----\"\n}"
]
```

<h3 id="get-secrets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of found Secrets|Inline|

<h3 id="get-secrets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Secret](#schemasecret)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: user )
</aside>

## Create a new Secret

<a id="opIdCreateSecret"></a>

> Code samples

```bash
curl https://example.com/secrets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '"{\n    \"id\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\",\n    \"description\": \"Gogs internal corporate repository\",\n    \"username\": \"team\",\n    \"password\": \"team\",\n    \"caCertPem\": \"-----BEGIN CERTIFICATE-----\\nMIIC6jCCAdKgAwIBAgIBATANBgkqhkiG9w0BAQsFADAmMSQwIgYDVQQDDBtvcGVu\\nc2hpZnQtc2lnbmVyQDE1MzE5MTA5MDIwHhcNMTgwNzE4MTA0ODIyWhcNMjMwNzE3\\nMTA0ODIzWjAmMSQwIgYDVQQDDBtvcGVuc2hpZnQtc2lnbmVyQDE1MzE5MTA5MDIw\\nggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCyaP1jlpnm8WpfCSnUa8Qt\\nhdUynOLLgElUtpWoW25wB9tO2ZmEj+fVsTyzEsW8+nfXXfRsBEzPm2ze9uEMTPTB\\nAY0k7DbLZfjmF1lCckUvvh1rR/8hoPuXETjXUuOdtm7gRHTOxLQyH2Qi/q0DYJAn\\nprKyRCLa35pRnykL6v4bHkqFnqDEho63i29XHhm2703moh4YCl1iYa2Rh6D44cjn\\n8lBCq6o7zoZSmc/aBamRkQrfZYcolR8OUtDS4oEB0zMftmea2ycashsLEMB+Cq4r\\n64NI2QM7qOxdTuXsDivHfLl7RTuWEOozGaJXoiPaGU/3d/KnY0gKJ2TC1KXt6Xjn\\nAgMBAAGjIzAhMA4GA1UdDwEB/wQEAwICpDAPBgNVHRMBAf8EBTADAQH/MA0GCSqG\\nSIb3DQEBCwUAA4IBAQCeUmxfUzw0VAFG6HvVYIsfvumiIvsSWmclGIZqNJyfMHFD\\nMy6xzPRNNfWe5aumGTJsuIzuXfDRcdO7KmH1d2/5brkvWpxp6svVrYPvcoXjl4VN\\nQR2mv5Di4KHfiiwvP3eeewjUZj+uREGqX2fcbJPHTPy32Kpb0H8Uy09BklhjC7QP\\ngRAGexPhU1oBL/CoOwbHKcQ6dxs/y1SxzI8gXEtec4z62CroI13iT7U0UjSqFBE4\\nKfrJombfz0d68781Z40ll+8my251ZNfbLBhQ3UHW0JnkBEQkE1aBorUoj2iakYvx\\nA2qZh+8q2b8MwMb2YsQ0dlxKd6c4tN3lmMnO4bnd\\n-----END CERTIFICATE-----\"\n}"'
```

`POST /secrets`

> Body parameter

```json
"{\n    \"id\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\",\n    \"description\": \"Gogs internal corporate repository\",\n    \"username\": \"team\",\n    \"password\": \"team\",\n    \"caCertPem\": \"-----BEGIN CERTIFICATE-----\\nMIIC6jCCAdKgAwIBAgIBATANBgkqhkiG9w0BAQsFADAmMSQwIgYDVQQDDBtvcGVu\\nc2hpZnQtc2lnbmVyQDE1MzE5MTA5MDIwHhcNMTgwNzE4MTA0ODIyWhcNMjMwNzE3\\nMTA0ODIzWjAmMSQwIgYDVQQDDBtvcGVuc2hpZnQtc2lnbmVyQDE1MzE5MTA5MDIw\\nggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCyaP1jlpnm8WpfCSnUa8Qt\\nhdUynOLLgElUtpWoW25wB9tO2ZmEj+fVsTyzEsW8+nfXXfRsBEzPm2ze9uEMTPTB\\nAY0k7DbLZfjmF1lCckUvvh1rR/8hoPuXETjXUuOdtm7gRHTOxLQyH2Qi/q0DYJAn\\nprKyRCLa35pRnykL6v4bHkqFnqDEho63i29XHhm2703moh4YCl1iYa2Rh6D44cjn\\n8lBCq6o7zoZSmc/aBamRkQrfZYcolR8OUtDS4oEB0zMftmea2ycashsLEMB+Cq4r\\n64NI2QM7qOxdTuXsDivHfLl7RTuWEOozGaJXoiPaGU/3d/KnY0gKJ2TC1KXt6Xjn\\nAgMBAAGjIzAhMA4GA1UdDwEB/wQEAwICpDAPBgNVHRMBAf8EBTADAQH/MA0GCSqG\\nSIb3DQEBCwUAA4IBAQCeUmxfUzw0VAFG6HvVYIsfvumiIvsSWmclGIZqNJyfMHFD\\nMy6xzPRNNfWe5aumGTJsuIzuXfDRcdO7KmH1d2/5brkvWpxp6svVrYPvcoXjl4VN\\nQR2mv5Di4KHfiiwvP3eeewjUZj+uREGqX2fcbJPHTPy32Kpb0H8Uy09BklhjC7QP\\ngRAGexPhU1oBL/CoOwbHKcQ6dxs/y1SxzI8gXEtec4z62CroI13iT7U0UjSqFBE4\\nKfrJombfz0d68781Z40ll+8my251ZNfbLBhQ3UHW0JnkBEQkE1aBorUoj2iakYvx\\nA2qZh+8q2b8MwMb2YsQ0dlxKd6c4tN3lmMnO4bnd\\n-----END CERTIFICATE-----\"\n}"
```

<h3 id="create-a-new-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Secret](#schemasecret)|false|none|
|» caCertPem|body|string|false|none|
|» description|body|string|true|Description of this Secret|
|» id|body|string|false|Unique identifier of Secret|
|» name|body|string|true|Unique distinct name of Secret|
|» password|body|string|false|none|
|» token|body|string|false|none|
|» tokenHeader|body|string|false|none|
|» username|body|string|false|none|

> Example responses

> 201 Response

```json
"{\n    \"id\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\",\n    \"description\": \"Gogs internal corporate repository\",\n    \"username\": \"team\",\n    \"password\": \"team\",\n    \"caCertPem\": \"-----BEGIN CERTIFICATE-----\\nMIIC6jCCAdKgAwIBAgIBATANBgkqhkiG9w0BAQsFADAmMSQwIgYDVQQDDBtvcGVu\\nc2hpZnQtc2lnbmVyQDE1MzE5MTA5MDIwHhcNMTgwNzE4MTA0ODIyWhcNMjMwNzE3\\nMTA0ODIzWjAmMSQwIgYDVQQDDBtvcGVuc2hpZnQtc2lnbmVyQDE1MzE5MTA5MDIw\\nggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCyaP1jlpnm8WpfCSnUa8Qt\\nhdUynOLLgElUtpWoW25wB9tO2ZmEj+fVsTyzEsW8+nfXXfRsBEzPm2ze9uEMTPTB\\nAY0k7DbLZfjmF1lCckUvvh1rR/8hoPuXETjXUuOdtm7gRHTOxLQyH2Qi/q0DYJAn\\nprKyRCLa35pRnykL6v4bHkqFnqDEho63i29XHhm2703moh4YCl1iYa2Rh6D44cjn\\n8lBCq6o7zoZSmc/aBamRkQrfZYcolR8OUtDS4oEB0zMftmea2ycashsLEMB+Cq4r\\n64NI2QM7qOxdTuXsDivHfLl7RTuWEOozGaJXoiPaGU/3d/KnY0gKJ2TC1KXt6Xjn\\nAgMBAAGjIzAhMA4GA1UdDwEB/wQEAwICpDAPBgNVHRMBAf8EBTADAQH/MA0GCSqG\\nSIb3DQEBCwUAA4IBAQCeUmxfUzw0VAFG6HvVYIsfvumiIvsSWmclGIZqNJyfMHFD\\nMy6xzPRNNfWe5aumGTJsuIzuXfDRcdO7KmH1d2/5brkvWpxp6svVrYPvcoXjl4VN\\nQR2mv5Di4KHfiiwvP3eeewjUZj+uREGqX2fcbJPHTPy32Kpb0H8Uy09BklhjC7QP\\ngRAGexPhU1oBL/CoOwbHKcQ6dxs/y1SxzI8gXEtec4z62CroI13iT7U0UjSqFBE4\\nKfrJombfz0d68781Z40ll+8my251ZNfbLBhQ3UHW0JnkBEQkE1aBorUoj2iakYvx\\nA2qZh+8q2b8MwMb2YsQ0dlxKd6c4tN3lmMnO4bnd\\n-----END CERTIFICATE-----\"\n}"
```

<h3 id="create-a-new-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created Secret|[Secret](#schemasecret)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: admin )
</aside>

## Get the Secrets counter

<a id="opIdGetSecretsCounter"></a>

> Code samples

```bash
curl https://example.com/secrets/count \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /secrets/count`

> Example responses

> 200 Response

```json
"{\n    \"counter\": 12\n}"
```

<h3 id="get-the-secrets-counter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Number of Secrets in datastore|[Counter](#schemacounter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: user )
</aside>

## Get Secret

<a id="opIdGetSecret"></a>

> Code samples

```bash
curl https://example.com/secrets/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /secrets/{id}`

Retrieve a Secret

<h3 id="get-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier of Secret to manage|

> Example responses

> 200 Response

```json
"{\n    \"id\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\",\n    \"description\": \"Gogs internal corporate repository\",\n    \"username\": \"team\",\n    \"password\": \"team\",\n    \"caCertPem\": \"-----BEGIN CERTIFICATE-----\\nMIIC6jCCAdKgAwIBAgIBATANBgkqhkiG9w0BAQsFADAmMSQwIgYDVQQDDBtvcGVu\\nc2hpZnQtc2lnbmVyQDE1MzE5MTA5MDIwHhcNMTgwNzE4MTA0ODIyWhcNMjMwNzE3\\nMTA0ODIzWjAmMSQwIgYDVQQDDBtvcGVuc2hpZnQtc2lnbmVyQDE1MzE5MTA5MDIw\\nggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCyaP1jlpnm8WpfCSnUa8Qt\\nhdUynOLLgElUtpWoW25wB9tO2ZmEj+fVsTyzEsW8+nfXXfRsBEzPm2ze9uEMTPTB\\nAY0k7DbLZfjmF1lCckUvvh1rR/8hoPuXETjXUuOdtm7gRHTOxLQyH2Qi/q0DYJAn\\nprKyRCLa35pRnykL6v4bHkqFnqDEho63i29XHhm2703moh4YCl1iYa2Rh6D44cjn\\n8lBCq6o7zoZSmc/aBamRkQrfZYcolR8OUtDS4oEB0zMftmea2ycashsLEMB+Cq4r\\n64NI2QM7qOxdTuXsDivHfLl7RTuWEOozGaJXoiPaGU/3d/KnY0gKJ2TC1KXt6Xjn\\nAgMBAAGjIzAhMA4GA1UdDwEB/wQEAwICpDAPBgNVHRMBAf8EBTADAQH/MA0GCSqG\\nSIb3DQEBCwUAA4IBAQCeUmxfUzw0VAFG6HvVYIsfvumiIvsSWmclGIZqNJyfMHFD\\nMy6xzPRNNfWe5aumGTJsuIzuXfDRcdO7KmH1d2/5brkvWpxp6svVrYPvcoXjl4VN\\nQR2mv5Di4KHfiiwvP3eeewjUZj+uREGqX2fcbJPHTPy32Kpb0H8Uy09BklhjC7QP\\ngRAGexPhU1oBL/CoOwbHKcQ6dxs/y1SxzI8gXEtec4z62CroI13iT7U0UjSqFBE4\\nKfrJombfz0d68781Z40ll+8my251ZNfbLBhQ3UHW0JnkBEQkE1aBorUoj2iakYvx\\nA2qZh+8q2b8MwMb2YsQ0dlxKd6c4tN3lmMnO4bnd\\n-----END CERTIFICATE-----\"\n}"
```

<h3 id="get-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Found Secret|[Secret](#schemasecret)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: admin )
</aside>

## Update Secret

<a id="opIdUpdateSecret"></a>

> Code samples

```bash
curl https://example.com/secrets/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /secrets/{id}`

Update a Secret

<h3 id="update-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier of Secret to manage|

<h3 id="update-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated Secret|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: admin )
</aside>

## Delete Secret

<a id="opIdDeleteSecret"></a>

> Code samples

```bash
curl https://example.com/secrets/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /secrets/{id}`

Delete a Secret

<h3 id="delete-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier of Secret to manage|

<h3 id="delete-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Secret has been deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: admin )
</aside>

<h1 id="microcks-api-v17-metrics">metrics</h1>

Operations related to metrics

## Get aggregation of conformance metrics

<a id="opIdGetConformanceMetricsAggregation"></a>

> Code samples

```bash
curl https://example.com/metrics/conformance/aggregate \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /metrics/conformance/aggregate`

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "value": 0,
    "weight": 0
  }
]
```

<h3 id="get-aggregation-of-conformance-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get aggregated coverage metric value|Inline|

<h3 id="get-aggregation-of-conformance-metrics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[WeightedMetricValue](#schemaweightedmetricvalue)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer
</aside>

## Get conformance metrics for a Service

<a id="opIdGetServiceTestConformanceMetric"></a>

> Code samples

```bash
curl https://example.com/metrics/conformance/service/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /metrics/conformance/service/{serviceId}`

<h3 id="get-conformance-metrics-for-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|Unique Services identifier this metrics are related to|

> Example responses

> 200 Response

```json
{
  "aggregationLabelValue": "string",
  "currentScore": 0,
  "id": "string",
  "lastUpdateDay": "string",
  "latestScores": {
    "property1": 0,
    "property2": 0
  },
  "latestTrend": "DOWN",
  "maxPossibleScore": 0,
  "serviceId": "string"
}
```

<h3 id="get-conformance-metrics-for-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Test coverage metric for Service|[TestConformanceMetric](#schematestconformancemetric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer
</aside>

## Get aggregated invocation statistics for a day

<a id="opIdGetAggregatedInvocationsStats"></a>

> Code samples

```bash
curl https://example.com/metrics/invocations/global \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /metrics/invocations/global`

<h3 id="get-aggregated-invocation-statistics-for-a-day-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|day|query|string|false|The day to get statistics for (formatted with yyyyMMdd pattern). Default to today if not provided.|

> Example responses

> 200 Response

```json
{
  "dailyCount": 0,
  "day": "string",
  "hourlyCount": {},
  "id": "string",
  "minuteCount": {},
  "serviceName": "string",
  "serviceVersion": "string"
}
```

<h3 id="get-aggregated-invocation-statistics-for-a-day-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Aggregated invocation statistics for specified day|[DailyInvocationStatistic](#schemadailyinvocationstatistic)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer
</aside>

## Get aggregated invocations statistics for latest days

<a id="opIdGetLatestAggregatedInvocationsStats"></a>

> Code samples

```bash
curl https://example.com/metrics/invocations/global/latest \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /metrics/invocations/global/latest`

<h3 id="get-aggregated-invocations-statistics-for-latest-days-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of days to get back in time. Default is 20.|

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="get-aggregated-invocations-statistics-for-latest-days-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A map where keys are day (formatted using yyyyMMdd pattern) and values are counter of invocations on this day|[CounterMap](#schemacountermap)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer
</aside>

## Get top invocation statistics for a day

<a id="opIdGetTopIvnocationsStatsByDay"></a>

> Code samples

```bash
curl https://example.com/metrics/invocations/top \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /metrics/invocations/top`

<h3 id="get-top-invocation-statistics-for-a-day-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|day|query|string|false|The day to get statistics for (formatted with yyyyMMdd pattern). Default to today if not provided.|
|limit|query|integer|false|The number of top invoked mocks to return|

> Example responses

> 200 Response

```json
[
  {
    "dailyCount": 0,
    "day": "string",
    "hourlyCount": {},
    "id": "string",
    "minuteCount": {},
    "serviceName": "string",
    "serviceVersion": "string"
  }
]
```

<h3 id="get-top-invocation-statistics-for-a-day-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Top invocations for a defined day|Inline|

<h3 id="get-top-invocation-statistics-for-a-day-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DailyInvocationStatistic](#schemadailyinvocationstatistic)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer
</aside>

## Get invocation statistics for Service

<a id="opIdGetInvocationStatsByService"></a>

> Code samples

```bash
curl https://example.com/metrics/invocations/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /metrics/invocations/{serviceName}/{serviceVersion}`

<h3 id="get-invocation-statistics-for-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|day|query|string|false|The day to get statistics for (formatted with yyyyMMdd pattern). Default to today if not provided.|
|serviceName|path|string|true|Name of service to get statistics for|
|serviceVersion|path|string|true|Version of service to get statistics for|

> Example responses

> 200 Response

```json
{
  "dailyCount": 0,
  "day": "string",
  "hourlyCount": {},
  "id": "string",
  "minuteCount": {},
  "serviceName": "string",
  "serviceVersion": "string"
}
```

<h3 id="get-invocation-statistics-for-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Invocation statistics for service for specified day|[DailyInvocationStatistic](#schemadailyinvocationstatistic)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer
</aside>

## Get latest tests results

<a id="opIdGetLatestTestResults"></a>

> Code samples

```bash
curl https://example.com/metrics/tests/latest \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /metrics/tests/latest`

<h3 id="get-latest-tests-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of days to consider for test results to return. Default is 7 (one week)|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "serviceId": "string",
    "success": true,
    "testDate": 0
  }
]
```

<h3 id="get-latest-tests-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Test results summary for specified <limit> last days.|Inline|

<h3 id="get-latest-tests-results-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TestResultSummary](#schematestresultsummary)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer
</aside>

<h1 id="microcks-api-v17-default">Default</h1>

## Get Resources by Service

<a id="opIdGetResourcesByService"></a>

> Code samples

```bash
curl https://example.com/resources/service/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /resources/service/{serviceId}`

<h3 id="get-resources-by-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|Unique identifier of the Service or API the resources are attached to|

> Example responses

> 200 Response

```json
[
  {
    "content": "string",
    "id": "string",
    "name": "string",
    "path": "string",
    "serviceId": "string",
    "sourceArtifact": "string",
    "type": "WSDL"
  }
]
```

<h3 id="get-resources-by-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List the resources attached to a Service or API|Inline|

<h3 id="get-resources-by-service-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Resource](#schemaresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: user )
</aside>

## Get Resource

<a id="opIdGetResource"></a>

> Code samples

```bash
curl https://example.com/resources/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /resources/{name}`

<h3 id="get-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Unique name/business identifier of the Service or API resource|

> Example responses

> 200 Response

```json
{
  "content": "string",
  "id": "string",
  "name": "string",
  "path": "string",
  "serviceId": "string",
  "sourceArtifact": "string",
  "type": "WSDL"
}
```

<h3 id="get-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve the resource having this name|[Resource](#schemaresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt-bearer ( Scopes: user )
</aside>

# Schemas

<h2 id="tocS_AbstractExchange">AbstractExchange</h2>
<!-- backwards compatibility -->
<a id="schemaabstractexchange"></a>
<a id="schema_AbstractExchange"></a>
<a id="tocSabstractexchange"></a>
<a id="tocsabstractexchange"></a>

```json
{
  "type": "reqRespPair"
}
```

Abstract bean representing a Service or API Exchange.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Discriminant type for identifying kind of exchange|

#### Enumerated Values

|Property|Value|
|---|---|
|type|reqRespPair|
|type|unidirEvent|

<h2 id="tocS_ArtifactUpload">ArtifactUpload</h2>
<!-- backwards compatibility -->
<a id="schemaartifactupload"></a>
<a id="schema_ArtifactUpload"></a>
<a id="tocSartifactupload"></a>
<a id="tocsartifactupload"></a>

```json
{
  "file": "string"
}
```

Artifact to be imported by Microcks.
This structure represents a mime-multipart file upload (as specified here: https://swagger.io/docs/specification/describing-request-body/file-upload/)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string(binary)|true|none|The artifact to upload|

<h2 id="tocS_Binding">Binding</h2>
<!-- backwards compatibility -->
<a id="schemabinding"></a>
<a id="schema_Binding"></a>
<a id="tocSbinding"></a>
<a id="tocsbinding"></a>

```json
{
  "destinationName": "string",
  "destinationType": "string",
  "keyType": "string",
  "method": "string",
  "persistent": true,
  "qoS": "string",
  "type": "KAFKA"
}
```

Protocol binding details for asynchronous operations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationName|string|true|none|Name of destination for asynchronous messages of this operation|
|destinationType|string|false|none|Type of destination for asynchronous messages of this operation|
|keyType|string|false|none|Type of key for Kafka messages|
|method|string|false|none|HTTP method for WebSocket binding|
|persistent|boolean|false|none|Persistent attribute for MQTT binding|
|qoS|string|false|none|Quality of Service attribute for MQTT binding|
|type|string|true|none|Protocol binding identifier|

#### Enumerated Values

|Property|Value|
|---|---|
|type|KAFKA|
|type|MQTT|
|type|WS|
|type|AMQP|
|type|NATS|
|type|GOOGLEPUBSUB|

<h2 id="tocS_Counter">Counter</h2>
<!-- backwards compatibility -->
<a id="schemacounter"></a>
<a id="schema_Counter"></a>
<a id="tocScounter"></a>
<a id="tocscounter"></a>

```json
"{\n    \"counter\": 12\n}"
```

A simple Counter type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counter|integer(int32)|false|none|Number of items in a resource collection|

<h2 id="tocS_CounterMap">CounterMap</h2>
<!-- backwards compatibility -->
<a id="schemacountermap"></a>
<a id="schema_CounterMap"></a>
<a id="tocScountermap"></a>
<a id="tocscountermap"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

A generic map of counter

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|number(integer)|false|none|none|

<h2 id="tocS_DailyInvocationStatistic">DailyInvocationStatistic</h2>
<!-- backwards compatibility -->
<a id="schemadailyinvocationstatistic"></a>
<a id="schema_DailyInvocationStatistic"></a>
<a id="tocSdailyinvocationstatistic"></a>
<a id="tocsdailyinvocationstatistic"></a>

```json
{
  "dailyCount": 0,
  "day": "string",
  "hourlyCount": {},
  "id": "string",
  "minuteCount": {},
  "serviceName": "string",
  "serviceVersion": "string"
}
```

The daily statistic of a service mock invocations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyCount|number|true|none|The number of service mock invocations on this day|
|day|string|true|none|The day (formatted as yyyyMMdd string) represented by this statistic|
|hourlyCount|object|false|none|The number of service mock invocations per hour of the day (keys range from 0 to 23)|
|id|string|true|none|Unique identifier of this statistic object|
|minuteCount|object|false|none|The number of service mock invocations per minute of the day (keys range from 0 to 1439)|
|serviceName|string|true|none|The name of the service this statistic is related to|
|serviceVersion|string|true|none|The version of the service this statistic is related to|

<h2 id="tocS_EventMessage">EventMessage</h2>
<!-- backwards compatibility -->
<a id="schemaeventmessage"></a>
<a id="schema_EventMessage"></a>
<a id="tocSeventmessage"></a>
<a id="tocseventmessage"></a>

```json
{
  "content": "string",
  "headers": [
    {
      "name": "string",
      "values": [
        "string"
      ]
    }
  ],
  "id": "string",
  "mediaType": "string",
  "name": "string",
  "operationId": "string",
  "testCaseId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|Body content for this message|
|headers|[[Header](#schemaheader)]|false|none|Headers for this message|
|id|string|true|none|Unique identifier of this message|
|mediaType|string|true|none|Content type of message|
|name|string|false|none|Unique distinct name of this message|
|operationId|string|false|none|Identifier of Operation this message is associated to|
|testCaseId|string|false|none|Unique identifier of TestCase this message is attached (in case of a test)|

<h2 id="tocS_Exchange">Exchange</h2>
<!-- backwards compatibility -->
<a id="schemaexchange"></a>
<a id="schema_Exchange"></a>
<a id="tocSexchange"></a>
<a id="tocsexchange"></a>

```json
{
  "request": {
    "content": "string",
    "headers": [
      {
        "name": "string",
        "values": [
          "string"
        ]
      }
    ],
    "id": "string",
    "name": "string",
    "operationId": "string",
    "testCaseId": "string"
  },
  "response": {
    "content": "string",
    "headers": [
      {
        "name": "string",
        "values": [
          "string"
        ]
      }
    ],
    "id": "string",
    "name": "string",
    "operationId": "string",
    "testCaseId": "string"
  },
  "type": "reqRespPair"
}
```

Abstract representation of a Service or API exchange type (request/response, event based, ...)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[RequestResponsePair](#schemarequestresponsepair)|false|none|Request associated with corresponding Response|
|*oneOf*|[UnidirectionalEvent](#schemaunidirectionalevent)|false|none|Representation of an unidirectional exchange as an event message|

<h2 id="tocS_FeaturesConfig">FeaturesConfig</h2>
<!-- backwards compatibility -->
<a id="schemafeaturesconfig"></a>
<a id="schema_FeaturesConfig"></a>
<a id="tocSfeaturesconfig"></a>
<a id="tocsfeaturesconfig"></a>

```json
{
  "async-api": {
    "default-binding": "KAFKA",
    "enabled": "false",
    "endpoint-KAFKA": "my-cluster-kafka-bootstrap.apps.try.microcks.io",
    "endpoint-MQTT": "my-mqtt-broker.apps.try.microcks.io",
    "endpoint-WS": "localhost:8081",
    "frequencies": "3,10,30"
  },
  "microcks-hub": {
    "allowed-roles": "admin,manager,manager-any",
    "enabled": "true",
    "endpoint": "https://hub.microcks.io/api"
  },
  "repository-filter": {
    "enabled": "true",
    "label-key": "domain",
    "label-label": "Domain",
    "label-list": "domain,status"
  },
  "repository-tenancy": {
    "artifact-import-allowed-roles": "admin,manager,manager-any",
    "enabled": "false"
  }
}
```

Representation of optional features configuration used by Microcks server

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|async-api|object|false|none|Asynchronous feature properties|
|microcks-hub|object|false|none|Microcks Hub feature properties|
|repository-filter|object|false|none|Repository filtering feature properties|
|repository-tenancy|object|false|none|Repository tenancy feature properties|

<h2 id="tocS_Header">Header</h2>
<!-- backwards compatibility -->
<a id="schemaheader"></a>
<a id="schema_Header"></a>
<a id="tocSheader"></a>
<a id="tocsheader"></a>

```json
{
  "name": "string",
  "values": [
    "string"
  ]
}
```

Transport headers for both Requests and Responses

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Unique distinct name of this Header|
|values|[string]|true|none|Values for this Header|

<h2 id="tocS_HeaderDTO">HeaderDTO</h2>
<!-- backwards compatibility -->
<a id="schemaheaderdto"></a>
<a id="schema_HeaderDTO"></a>
<a id="tocSheaderdto"></a>
<a id="tocsheaderdto"></a>

```json
{
  "name": "string",
  "values": "string"
}
```

Data Transfert Object for headers of both Requests and Responses

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Unique distinct name of this Header|
|values|string|true|none|Values for this header (comma separated strings)|

<h2 id="tocS_ImportJob">ImportJob</h2>
<!-- backwards compatibility -->
<a id="schemaimportjob"></a>
<a id="schema_ImportJob"></a>
<a id="tocSimportjob"></a>
<a id="tocsimportjob"></a>

```json
{
  "active": true,
  "createdDate": "1970-01-01T00:00:00Z",
  "etag": "string",
  "frequency": "string",
  "id": "string",
  "lastImportDate": "1970-01-01T00:00:00Z",
  "lastImportError": "string",
  "mainArtifact": true,
  "metadata": {
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "createdOn": 0,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lastUpdate": 0
  },
  "name": "string",
  "repositoryDisableSSLValidation": true,
  "repositoryUrl": "string",
  "secretRef": "{\n    \"secretId\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\"\n}",
  "serviceRefs": [
    {
      "name": "string",
      "serviceId": "string",
      "version": "string"
    }
  ]
}
```

An ImportJob allow defining a repository artifact to poll for discovering Services and APIs mocks and tests

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|Whether this ImportJob is active (ie. scheduled for execution)|
|createdDate|string(date-time)|false|none|Creation date for this ImportJob|
|etag|string|false|none|Etag of repository URL during previous import. Is used for not re-importing if no recent changes|
|frequency|string|false|none|Reserved for future usage|
|id|string|false|none|Unique identifier of ImportJob|
|lastImportDate|string(date-time)|false|none|Date last import was done|
|lastImportError|string|false|none|Error message of last import (if any)|
|mainArtifact|boolean|false|none|Flag telling if considered as primary or secondary artifact. Default to `true`|
|metadata|[Metadata](#schemametadata)|false|none|Metadata of ImportJob|
|name|string|true|none|Unique distinct name of this ImportJob|
|repositoryDisableSSLValidation|boolean|false|none|Whether to disable SSL certificate verification when checking repository|
|repositoryUrl|string|true|none|URL of mocks and tests repository artifact|
|secretRef|[SecretRef](#schemasecretref)|false|none|Reference of a Secret to used when checking repository|
|serviceRefs|[[ServiceRef](#schemaserviceref)]|false|none|References of Services discovered when checking repository|

<h2 id="tocS_KeycloakConfig">KeycloakConfig</h2>
<!-- backwards compatibility -->
<a id="schemakeycloakconfig"></a>
<a id="schema_KeycloakConfig"></a>
<a id="tocSkeycloakconfig"></a>
<a id="tocskeycloakconfig"></a>

```json
{
  "auth-server-url": "string",
  "enabled": true,
  "public-client": "string",
  "realm": "string",
  "resource": "string",
  "ssl-required": "none"
}
```

Representation of Keycloak / SSO configuration used by Microcks server

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth-server-url|string|true|none|SSO Server authentication url|
|enabled|boolean|true|none|Whether Keycloak authentification and usage is enabled|
|public-client|string|true|none|Name of public-client that can be used for requesting OAuth token|
|realm|string|true|none|Authentication realm name|
|resource|string|true|none|Name of Keycloak resource/application used on client side|
|ssl-required|string|true|none|SSL certificates requirements|

#### Enumerated Values

|Property|Value|
|---|---|
|ssl-required|none|
|ssl-required|external|

<h2 id="tocS_LabelsMap">LabelsMap</h2>
<!-- backwards compatibility -->
<a id="schemalabelsmap"></a>
<a id="schema_LabelsMap"></a>
<a id="tocSlabelsmap"></a>
<a id="tocslabelsmap"></a>

```json
{
  "property1": [
    "string"
  ],
  "property2": [
    "string"
  ]
}
```

A map which keys are already used labels keys and values are already used values for this key

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StringArray](#schemastringarray)|false|none|A simple array of String|

<h2 id="tocS_MessageArray">MessageArray</h2>
<!-- backwards compatibility -->
<a id="schemamessagearray"></a>
<a id="schema_MessageArray"></a>
<a id="tocSmessagearray"></a>
<a id="tocsmessagearray"></a>

```json
[
  {
    "request": {
      "content": "string",
      "headers": [
        {
          "name": "string",
          "values": [
            "string"
          ]
        }
      ],
      "id": "string",
      "name": "string",
      "operationId": "string",
      "testCaseId": "string"
    },
    "response": {
      "content": "string",
      "headers": [
        {
          "name": "string",
          "values": [
            "string"
          ]
        }
      ],
      "id": "string",
      "name": "string",
      "operationId": "string",
      "testCaseId": "string"
    },
    "type": "reqRespPair"
  }
]
```

Array of Message for Service operations

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "createdOn": 0,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "lastUpdate": 0
}
```

Commodity object for holding metadata on any entity. This object is inspired by Kubernetes metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|Annotations of attached object|
|createdOn|integer|true|none|Creation date of attached object|
|labels|object|false|none|Labels put on attached object|
|lastUpdate|integer|true|none|Last update of attached object|

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
{
  "bindings": {
    "property1": {
      "destinationName": "string",
      "destinationType": "string",
      "keyType": "string",
      "method": "string",
      "persistent": true,
      "qoS": "string",
      "type": "KAFKA"
    },
    "property2": {
      "destinationName": "string",
      "destinationType": "string",
      "keyType": "string",
      "method": "string",
      "persistent": true,
      "qoS": "string",
      "type": "KAFKA"
    }
  },
  "defaultDelay": 0,
  "dispatcher": "string",
  "dispatcherRules": "string",
  "inputName": "string",
  "method": "string",
  "name": "string",
  "outputName": "string",
  "parameterContraints": [
    {
      "in": "path",
      "mustMatchRegexp": "string",
      "name": "string",
      "recopy": true,
      "required": true
    }
  ],
  "resourcePaths": [
    "string"
  ]
}
```

An Operation of a Service or API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bindings|object|false|none|Map of protocol binding details for this operation|
|defaultDelay|number|false|none|Default response time delay for mocks|
|dispatcher|string|false|none|Dispatcher strategy used for mocks|
|dispatcherRules|string|false|none|DispatcherRules used for mocks|
|inputName|string|false|none|Name of input parameters in case of Xml based Service|
|method|string|true|none|Represents transport method|
|name|string|true|none|Unique name of this Operation within Service scope|
|outputName|string|false|none|Name of output parameters in case of Xml based Service|
|parameterContraints|[[ParameterConstraint](#schemaparameterconstraint)]|false|none|Contraints that may apply to mock invocatino on this operation|
|resourcePaths|[string]|false|none|Paths the mocks endpoints are mapped on|

<h2 id="tocS_OperationHeaders">OperationHeaders</h2>
<!-- backwards compatibility -->
<a id="schemaoperationheaders"></a>
<a id="schema_OperationHeaders"></a>
<a id="tocSoperationheaders"></a>
<a id="tocsoperationheaders"></a>

```json
{
  "property1": [
    {
      "name": "string",
      "values": "string"
    }
  ],
  "property2": [
    {
      "name": "string",
      "values": "string"
    }
  ]
}
```

Specification of additional headers for a Service/API operations. Keys are operation name or "globals" (if header applies to all), values are Header objects DTO.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[[HeaderDTO](#schemaheaderdto)]|false|none|none|

<h2 id="tocS_OperationOverrideDTO">OperationOverrideDTO</h2>
<!-- backwards compatibility -->
<a id="schemaoperationoverridedto"></a>
<a id="schema_OperationOverrideDTO"></a>
<a id="tocSoperationoverridedto"></a>
<a id="tocsoperationoverridedto"></a>

```json
{
  "defaultDelay": 0,
  "dispatcher": "string",
  "dispatcherRules": "string",
  "parameterConstraints": [
    {
      "in": "path",
      "mustMatchRegexp": "string",
      "name": "string",
      "recopy": true,
      "required": true
    }
  ]
}
```

Data Transfer object for grouping the mutable properties of an Operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultDelay|integer|false|none|Default delay in milliseconds to apply to mock responses on this operation|
|dispatcher|string|false|none|Type of dispatcher to apply for this operation|
|dispatcherRules|string|false|none|Rules of dispatcher for this operation|
|parameterConstraints|[[ParameterConstraint](#schemaparameterconstraint)]|false|none|Constraints that may apply to incoming parameters on this operation|

<h2 id="tocS_ParameterConstraint">ParameterConstraint</h2>
<!-- backwards compatibility -->
<a id="schemaparameterconstraint"></a>
<a id="schema_ParameterConstraint"></a>
<a id="tocSparameterconstraint"></a>
<a id="tocsparameterconstraint"></a>

```json
{
  "in": "path",
  "mustMatchRegexp": "string",
  "name": "string",
  "recopy": true,
  "required": true
}
```

Companion object for Operation that may be used to express constraints on request parameters

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|in|string|false|none|Parameter location|
|mustMatchRegexp|string|false|none|Whether it's a regular expression matching constraint|
|name|string|true|none|Parameter name|
|recopy|boolean|false|none|Whether it's a recopy constraint|
|required|boolean|false|none|Whether it's a required constraint|

#### Enumerated Values

|Property|Value|
|---|---|
|in|path|
|in|query|
|in|header|

<h2 id="tocS_Request">Request</h2>
<!-- backwards compatibility -->
<a id="schemarequest"></a>
<a id="schema_Request"></a>
<a id="tocSrequest"></a>
<a id="tocsrequest"></a>

```json
{
  "content": "string",
  "headers": [
    {
      "name": "string",
      "values": [
        "string"
      ]
    }
  ],
  "id": "string",
  "name": "string",
  "operationId": "string",
  "testCaseId": "string"
}
```

A mock invocation or test request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|Body content for this request|
|headers|[[Header](#schemaheader)]|false|none|Headers for this Request|
|id|string|false|none|Unique identifier of Request|
|name|string|true|none|Unique distinct name of this Request|
|operationId|string|true|none|Identifier of Operation this Request is associated to|
|testCaseId|string|false|none|Unique identifier of TestCase this Request is attached (in case of a test)|

<h2 id="tocS_RequestResponsePair">RequestResponsePair</h2>
<!-- backwards compatibility -->
<a id="schemarequestresponsepair"></a>
<a id="schema_RequestResponsePair"></a>
<a id="tocSrequestresponsepair"></a>
<a id="tocsrequestresponsepair"></a>

```json
{
  "request": {
    "content": "string",
    "headers": [
      {
        "name": "string",
        "values": [
          "string"
        ]
      }
    ],
    "id": "string",
    "name": "string",
    "operationId": "string",
    "testCaseId": "string"
  },
  "response": {
    "content": "string",
    "headers": [
      {
        "name": "string",
        "values": [
          "string"
        ]
      }
    ],
    "id": "string",
    "name": "string",
    "operationId": "string",
    "testCaseId": "string"
  },
  "type": "reqRespPair"
}
```

Request associated with corresponding Response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request|[Request](#schemarequest)|true|none|The request part of the pair|
|response|[Response](#schemaresponse)|true|none|The Response part of the pair|
|type|string|true|none|Discriminant type for identifying kind of exchange|

#### Enumerated Values

|Property|Value|
|---|---|
|type|reqRespPair|
|type|unidirEvent|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "content": "string",
  "id": "string",
  "name": "string",
  "path": "string",
  "serviceId": "string",
  "sourceArtifact": "string",
  "type": "WSDL"
}
```

Resource represents a Service or API artifacts such as specification, contract

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|String content of this resource|
|id|string|true|none|Uniquer identifier of this Service or API Resource|
|name|string|true|none|Unique name/business identifier for this Service or API resource|
|path|string|false|none|Relatvie path of this resource regarding main resource|
|serviceId|string|true|none|Unique identifier of the Servoce or API this resource is attached to|
|sourceArtifact|string|false|none|Short name of the artifact this resource was extracted from|
|type|[ResourceType](#schemaresourcetype)|true|none|Type of this Service or API resource|

#### Enumerated Values

|Property|Value|
|---|---|
|type|WSDL|
|type|XSD|
|type|JSON_SCHEMA|
|type|OPEN_API_SPEC|
|type|OPEN_API_SCHEMA|
|type|ASYNC_API_SPEC|
|type|ASYNC_API_SCHEMA|
|type|AVRO_SCHEMA|
|type|PROTOBUF_SCHEMA|
|type|PROTOBUF_DESCRIPTION|
|type|GRAPHQL_SCHEMA|

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"WSDL"
```

Types of managed resources for Services or APIs

<h2 id="tocS_Response">Response</h2>
<!-- backwards compatibility -->
<a id="schemaresponse"></a>
<a id="schema_Response"></a>
<a id="tocSresponse"></a>
<a id="tocsresponse"></a>

```json
{
  "content": "string",
  "headers": [
    {
      "name": "string",
      "values": [
        "string"
      ]
    }
  ],
  "id": "string",
  "name": "string",
  "operationId": "string",
  "testCaseId": "string"
}
```

A mock invocation or test response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|Body content of this Response|
|headers|[[Header](#schemaheader)]|false|none|Headers for this Response|
|id|string|false|none|Unique identifier of Response|
|name|string|true|none|Unique distinct name of this Response|
|operationId|string|true|none|Identifier of Operation this Response is associated to|
|testCaseId|string|false|none|Unique identifier of TestCase this Response is attached (in case of a test)|

<h2 id="tocS_Secret">Secret</h2>
<!-- backwards compatibility -->
<a id="schemasecret"></a>
<a id="schema_Secret"></a>
<a id="tocSsecret"></a>
<a id="tocssecret"></a>

```json
"{\n    \"id\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\",\n    \"description\": \"Gogs internal corporate repository\",\n    \"username\": \"team\",\n    \"password\": \"team\",\n    \"caCertPem\": \"-----BEGIN CERTIFICATE-----\\nMIIC6jCCAdKgAwIBAgIBATANBgkqhkiG9w0BAQsFADAmMSQwIgYDVQQDDBtvcGVu\\nc2hpZnQtc2lnbmVyQDE1MzE5MTA5MDIwHhcNMTgwNzE4MTA0ODIyWhcNMjMwNzE3\\nMTA0ODIzWjAmMSQwIgYDVQQDDBtvcGVuc2hpZnQtc2lnbmVyQDE1MzE5MTA5MDIw\\nggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCyaP1jlpnm8WpfCSnUa8Qt\\nhdUynOLLgElUtpWoW25wB9tO2ZmEj+fVsTyzEsW8+nfXXfRsBEzPm2ze9uEMTPTB\\nAY0k7DbLZfjmF1lCckUvvh1rR/8hoPuXETjXUuOdtm7gRHTOxLQyH2Qi/q0DYJAn\\nprKyRCLa35pRnykL6v4bHkqFnqDEho63i29XHhm2703moh4YCl1iYa2Rh6D44cjn\\n8lBCq6o7zoZSmc/aBamRkQrfZYcolR8OUtDS4oEB0zMftmea2ycashsLEMB+Cq4r\\n64NI2QM7qOxdTuXsDivHfLl7RTuWEOozGaJXoiPaGU/3d/KnY0gKJ2TC1KXt6Xjn\\nAgMBAAGjIzAhMA4GA1UdDwEB/wQEAwICpDAPBgNVHRMBAf8EBTADAQH/MA0GCSqG\\nSIb3DQEBCwUAA4IBAQCeUmxfUzw0VAFG6HvVYIsfvumiIvsSWmclGIZqNJyfMHFD\\nMy6xzPRNNfWe5aumGTJsuIzuXfDRcdO7KmH1d2/5brkvWpxp6svVrYPvcoXjl4VN\\nQR2mv5Di4KHfiiwvP3eeewjUZj+uREGqX2fcbJPHTPy32Kpb0H8Uy09BklhjC7QP\\ngRAGexPhU1oBL/CoOwbHKcQ6dxs/y1SxzI8gXEtec4z62CroI13iT7U0UjSqFBE4\\nKfrJombfz0d68781Z40ll+8my251ZNfbLBhQ3UHW0JnkBEQkE1aBorUoj2iakYvx\\nA2qZh+8q2b8MwMb2YsQ0dlxKd6c4tN3lmMnO4bnd\\n-----END CERTIFICATE-----\"\n}"
```

A Secret allows grouping informations on how to access a restricted resource such as a repsoitory URL. Secrets are typically used by ImpoortJobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caCertPem|string|false|none|none|
|description|string|true|none|Description of this Secret|
|id|string|false|none|Unique identifier of Secret|
|name|string|true|none|Unique distinct name of Secret|
|password|string|false|none|none|
|token|string|false|none|none|
|tokenHeader|string|false|none|none|
|username|string|false|none|none|

<h2 id="tocS_SecretRef">SecretRef</h2>
<!-- backwards compatibility -->
<a id="schemasecretref"></a>
<a id="schema_SecretRef"></a>
<a id="tocSsecretref"></a>
<a id="tocssecretref"></a>

```json
"{\n    \"secretId\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\"\n}"
```

Lightweight reference for an existing Secret

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Distinct name of the referenced Secret|
|secretId|string|true|none|Unique identifier or referenced Secret|

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "id": "string",
  "metadata": {
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "createdOn": 0,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lastUpdate": 0
  },
  "name": "string",
  "operations": [
    {
      "bindings": {
        "property1": {
          "destinationName": "string",
          "destinationType": "string",
          "keyType": "string",
          "method": "string",
          "persistent": true,
          "qoS": "string",
          "type": "KAFKA"
        },
        "property2": {
          "destinationName": "string",
          "destinationType": "string",
          "keyType": "string",
          "method": "string",
          "persistent": true,
          "qoS": "string",
          "type": "KAFKA"
        }
      },
      "defaultDelay": 0,
      "dispatcher": "string",
      "dispatcherRules": "string",
      "inputName": "string",
      "method": "string",
      "name": "string",
      "outputName": "string",
      "parameterContraints": [
        {
          "in": "path",
          "mustMatchRegexp": "string",
          "name": "string",
          "recopy": true,
          "required": true
        }
      ],
      "resourcePaths": [
        "string"
      ]
    }
  ],
  "type": "REST",
  "version": "string",
  "xmlNS": "string"
}
```

Represents a Service or API definition as registred into Microcks repository

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier for this Service or API|
|metadata|[Metadata](#schemametadata)|false|none|Metadata of Service|
|name|string|true|none|Distinct name for this Service or API (maybe shared among many versions)|
|operations|[[Operation](#schemaoperation)]|false|none|Set of Operations for Service or API|
|type|string|true|none|Service or API Type|
|version|string|true|none|Distinct version for a named Service or API|
|xmlNS|string|false|none|Associated Xml Namespace in case of Xml based Service|

#### Enumerated Values

|Property|Value|
|---|---|
|type|REST|
|type|SOAP_HTTP|
|type|GENERIC_REST|
|type|GENERIC_EVENT|
|type|EVENT|
|type|GRPC|
|type|GRAPHQL|

<h2 id="tocS_ServiceRef">ServiceRef</h2>
<!-- backwards compatibility -->
<a id="schemaserviceref"></a>
<a id="schema_ServiceRef"></a>
<a id="tocSserviceref"></a>
<a id="tocsserviceref"></a>

```json
{
  "name": "string",
  "serviceId": "string",
  "version": "string"
}
```

Lightweight reference of an existing Service

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The Service name|
|serviceId|string|true|none|Unique reference of a Service|
|version|string|true|none|The Service version|

<h2 id="tocS_ServiceView">ServiceView</h2>
<!-- backwards compatibility -->
<a id="schemaserviceview"></a>
<a id="schema_ServiceView"></a>
<a id="tocSserviceview"></a>
<a id="tocsserviceview"></a>

```json
{
  "messagesMap": {
    "property1": [
      {
        "request": {
          "content": "string",
          "headers": [
            {
              "name": "string",
              "values": [
                "string"
              ]
            }
          ],
          "id": "string",
          "name": "string",
          "operationId": "string",
          "testCaseId": "string"
        },
        "response": {
          "content": "string",
          "headers": [
            {
              "name": "string",
              "values": [
                "string"
              ]
            }
          ],
          "id": "string",
          "name": "string",
          "operationId": "string",
          "testCaseId": "string"
        },
        "type": "reqRespPair"
      }
    ],
    "property2": [
      {
        "request": {
          "content": "string",
          "headers": [
            {
              "name": "string",
              "values": [
                "string"
              ]
            }
          ],
          "id": "string",
          "name": "string",
          "operationId": "string",
          "testCaseId": "string"
        },
        "response": {
          "content": "string",
          "headers": [
            {
              "name": "string",
              "values": [
                "string"
              ]
            }
          ],
          "id": "string",
          "name": "string",
          "operationId": "string",
          "testCaseId": "string"
        },
        "type": "reqRespPair"
      }
    ]
  },
  "service": {
    "id": "string",
    "metadata": {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "createdOn": 0,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "lastUpdate": 0
    },
    "name": "string",
    "operations": [
      {
        "bindings": {
          "property1": {
            "destinationName": "string",
            "destinationType": "string",
            "keyType": "string",
            "method": "string",
            "persistent": true,
            "qoS": "string",
            "type": "KAFKA"
          },
          "property2": {
            "destinationName": "string",
            "destinationType": "string",
            "keyType": "string",
            "method": "string",
            "persistent": true,
            "qoS": "string",
            "type": "KAFKA"
          }
        },
        "defaultDelay": 0,
        "dispatcher": "string",
        "dispatcherRules": "string",
        "inputName": "string",
        "method": "string",
        "name": "string",
        "outputName": "string",
        "parameterContraints": [
          {
            "in": "path",
            "mustMatchRegexp": "string",
            "name": "string",
            "recopy": true,
            "required": true
          }
        ],
        "resourcePaths": [
          "string"
        ]
      }
    ],
    "type": "REST",
    "version": "string",
    "xmlNS": "string"
  }
}
```

Aggregate bean for grouping a Service an its messages pairs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messagesMap|object|true|none|Map of messages for this Service. Keys are operation name, values are array of messages for this operation|
|service|[Service](#schemaservice)|true|none|Wrapped service description|

<h2 id="tocS_SnapshotUpload">SnapshotUpload</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotupload"></a>
<a id="schema_SnapshotUpload"></a>
<a id="tocSsnapshotupload"></a>
<a id="tocssnapshotupload"></a>

```json
{
  "file": "string"
}
```

Upload of a repository snapshot file

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string(binary)|true|none|The repository snapshot file|

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

A simple array of String

<h2 id="tocS_TestCaseResult">TestCaseResult</h2>
<!-- backwards compatibility -->
<a id="schematestcaseresult"></a>
<a id="schema_TestCaseResult"></a>
<a id="tocStestcaseresult"></a>
<a id="tocstestcaseresult"></a>

```json
{
  "elapsedTime": 0,
  "operationName": "string",
  "success": true,
  "testStepResults": [
    {
      "elapsedTime": 0,
      "eventMessageName": "string",
      "message": "string",
      "requestName": "string",
      "success": true
    }
  ]
}
```

Companion objects for TestResult. Each TestCaseResult correspond to a particuliar service operation / action reference by the operationName field. TestCaseResults owns a collection of TestStepResults (one for every request associated to service operation / action).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elapsedTime|number|true|none|Elapsed time in milliseconds since the test case beginning|
|operationName|string|true|none|Name of operation this test case is bound to|
|success|boolean|true|none|Flag telling if test case is a success|
|testStepResults|[[TestStepResult](#schemateststepresult)]|false|none|Test steps associated to this test case|

<h2 id="tocS_TestCaseReturnDTO">TestCaseReturnDTO</h2>
<!-- backwards compatibility -->
<a id="schematestcasereturndto"></a>
<a id="schema_TestCaseReturnDTO"></a>
<a id="tocStestcasereturndto"></a>
<a id="tocstestcasereturndto"></a>

```json
{
  "operationName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operationName|string|true|none|Name of related operation for this TestCase|

<h2 id="tocS_TestConformanceMetric">TestConformanceMetric</h2>
<!-- backwards compatibility -->
<a id="schematestconformancemetric"></a>
<a id="schema_TestConformanceMetric"></a>
<a id="tocStestconformancemetric"></a>
<a id="tocstestconformancemetric"></a>

```json
{
  "aggregationLabelValue": "string",
  "currentScore": 0,
  "id": "string",
  "lastUpdateDay": "string",
  "latestScores": {
    "property1": 0,
    "property2": 0
  },
  "latestTrend": "DOWN",
  "maxPossibleScore": 0,
  "serviceId": "string"
}
```

Represents the test conformance metrics (current score, history and evolution trend) of a Service

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregationLabelValue|string|false|none|Value of the label used for metrics aggregation (if any)|
|currentScore|number(double)|true|none|Current test conformance score for the related Service|
|id|string|true|none|Unique identifier of coverage metric|
|lastUpdateDay|string|false|none|The day of latest score update (in yyyyMMdd format)|
|latestScores|object|false|none|History of latest scores (key is date with format yyyyMMdd, value is score as double)|
|latestTrend|[Trend](#schematrend)|false|none|Evolution trend of currentScore|
|maxPossibleScore|number(double)|true|none|Maximum conformance score that can be reached (depends on samples expresiveness)|
|serviceId|string|true|none|Unique identifier of the Service this metric is related to|

#### Enumerated Values

|Property|Value|
|---|---|
|latestTrend|DOWN|
|latestTrend|LOW_DOWN|
|latestTrend|STABLE|
|latestTrend|LOW_UP|
|latestTrend|UP|

<h2 id="tocS_TestRequest">TestRequest</h2>
<!-- backwards compatibility -->
<a id="schematestrequest"></a>
<a id="schema_TestRequest"></a>
<a id="tocStestrequest"></a>
<a id="tocstestrequest"></a>

```json
{
  "filteredOperations": [
    "string"
  ],
  "operationHeaders": {
    "property1": [
      {
        "name": "string",
        "values": "string"
      }
    ],
    "property2": [
      {
        "name": "string",
        "values": "string"
      }
    ]
  },
  "runnerType": "HTTP",
  "secretName": "string",
  "serviceId": "string",
  "testEndpoint": "string",
  "timeout": 0
}
```

Test request is a minimalist wrapper for requesting the launch of a new test

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filteredOperations|[string]|false|none|A restriction on service operations to test|
|operationHeaders|[OperationHeaders](#schemaoperationheaders)|false|none|This test operations headers override|
|runnerType|[TestRunnerType](#schematestrunnertype)|true|none|Runner used for this test|
|secretName|string|false|none|The name of Secret to use for connecting the test endpoint|
|serviceId|string|true|none|Unique identifier of service to test|
|testEndpoint|string|true|none|Endpoint to test for this service|
|timeout|integer|true|none|The maximum time (in milliseconds) to wait for this test ends|

#### Enumerated Values

|Property|Value|
|---|---|
|runnerType|HTTP|
|runnerType|SOAP_HTTP|
|runnerType|SOAP_UI|
|runnerType|POSTMAN|
|runnerType|OPEN_API_SCHEMA|
|runnerType|ASYNC_API_SCHEMA|
|runnerType|GRPC_PROTOBUF|
|runnerType|GRAPHQL_SCHEMA|

<h2 id="tocS_TestResult">TestResult</h2>
<!-- backwards compatibility -->
<a id="schematestresult"></a>
<a id="schema_TestResult"></a>
<a id="tocStestresult"></a>
<a id="tocstestresult"></a>

```json
{
  "elapsedTime": 0,
  "id": "string",
  "inProgress": true,
  "operationHeaders": {
    "property1": [
      {
        "name": "string",
        "values": "string"
      }
    ],
    "property2": [
      {
        "name": "string",
        "values": "string"
      }
    ]
  },
  "runnerType": "HTTP",
  "secretRef": "{\n    \"secretId\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\"\n}",
  "serviceId": "string",
  "success": true,
  "testCaseResults": [
    {
      "elapsedTime": 0,
      "operationName": "string",
      "success": true,
      "testStepResults": [
        {
          "elapsedTime": 0,
          "eventMessageName": "string",
          "message": "string",
          "requestName": "string",
          "success": true
        }
      ]
    }
  ],
  "testDate": 0,
  "testNumber": 0,
  "testedEndpoint": "string",
  "timeout": 0,
  "version": 0
}
```

Represents the result of a Service or API test run by Microcks. Tests are related to a service and made of multiple test cases corresponding to each operations / actions composing service. Tests are run against a specific endpoint named testedEndpoint. It holds global markers telling if test still ran, is a success, how many times is has taken and so on ...

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elapsedTime|number|false|none|Elapsed time in milliseconds since test beginning|
|id|string|true|none|Unique identifier of TestResult|
|inProgress|boolean|true|none|Flag telling is test is still in progress|
|operationHeaders|[OperationHeaders](#schemaoperationheaders)|false|none|This test operations headers override|
|runnerType|[TestRunnerType](#schematestrunnertype)|true|none|Runner used for this test|
|secretRef|[SecretRef](#schemasecretref)|false|none|The referrence of the Secret used for connecting to test endpoint|
|serviceId|string|true|none|Unique identifier of service tested|
|success|boolean|true|none|Flag telling if test is a success|
|testCaseResults|[[TestCaseResult](#schematestcaseresult)]|false|none|TestCase results associated to this test|
|testDate|integer(int64)|true|none|Timestamp of creation date of this service|
|testNumber|number|true|none|Incremental number for tracking number of tests of a service|
|testedEndpoint|string|true|none|Endpoint used during test|
|timeout|integer|false|none|The maximum time (in milliseconds) to wait for this test ends|
|version|number|true|none|Revision number of this test|

#### Enumerated Values

|Property|Value|
|---|---|
|runnerType|HTTP|
|runnerType|SOAP_HTTP|
|runnerType|SOAP_UI|
|runnerType|POSTMAN|
|runnerType|OPEN_API_SCHEMA|
|runnerType|ASYNC_API_SCHEMA|
|runnerType|GRPC_PROTOBUF|
|runnerType|GRAPHQL_SCHEMA|

<h2 id="tocS_TestResultSummary">TestResultSummary</h2>
<!-- backwards compatibility -->
<a id="schematestresultsummary"></a>
<a id="schema_TestResultSummary"></a>
<a id="tocStestresultsummary"></a>
<a id="tocstestresultsummary"></a>

```json
{
  "id": "string",
  "serviceId": "string",
  "success": true,
  "testDate": 0
}
```

Represents the summary result of a Service or API test run by Microcks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier of TestResult|
|serviceId|string|true|none|Unique identifier of service tested|
|success|boolean|true|none|Flag telling if test is a success|
|testDate|integer(int64)|true|none|Timestamp of creation date of this service|

<h2 id="tocS_TestReturn">TestReturn</h2>
<!-- backwards compatibility -->
<a id="schematestreturn"></a>
<a id="schema_TestReturn"></a>
<a id="tocStestreturn"></a>
<a id="tocstestreturn"></a>

```json
{
  "code": 0,
  "elapsedTime": 0,
  "eventMessage": {
    "content": "string",
    "headers": [
      {
        "name": "string",
        "values": [
          "string"
        ]
      }
    ],
    "id": "string",
    "mediaType": "string",
    "name": "string",
    "operationId": "string",
    "testCaseId": "string"
  },
  "message": "string",
  "request": {
    "content": "string",
    "headers": [
      {
        "name": "string",
        "values": [
          "string"
        ]
      }
    ],
    "id": "string",
    "name": "string",
    "operationId": "string",
    "testCaseId": "string"
  },
  "response": {
    "content": "string",
    "headers": [
      {
        "name": "string",
        "values": [
          "string"
        ]
      }
    ],
    "id": "string",
    "name": "string",
    "operationId": "string",
    "testCaseId": "string"
  }
}
```

TestReturn is used for wrapping the return code of a test step execution

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|Return code for test (0 means Success, 1 means Failure)|
|elapsedTime|integer(int64)|true|none|Elapsed time in milliseconds|
|eventMessage|[EventMessage](#schemaeventmessage)|false|none|Event Message received for this test|
|message|string|false|none|Error message if any|
|request|[Request](#schemarequest)|false|none|Request sent for this test|
|response|[Response](#schemaresponse)|false|none|Response returned for this test|

<h2 id="tocS_TestRunnerType">TestRunnerType</h2>
<!-- backwards compatibility -->
<a id="schematestrunnertype"></a>
<a id="schema_TestRunnerType"></a>
<a id="tocStestrunnertype"></a>
<a id="tocstestrunnertype"></a>

```json
"HTTP"
```

Type of test strategy (different strategies are implemented by different runners)

<h2 id="tocS_TestStepResult">TestStepResult</h2>
<!-- backwards compatibility -->
<a id="schemateststepresult"></a>
<a id="schema_TestStepResult"></a>
<a id="tocSteststepresult"></a>
<a id="tocsteststepresult"></a>

```json
{
  "elapsedTime": 0,
  "eventMessageName": "string",
  "message": "string",
  "requestName": "string",
  "success": true
}
```

TestStepResult is an entity embedded within TestCaseResult. They are created for each request associated with an operation / action of a microservice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elapsedTime|number|false|none|Elapsed time in milliseconds since the test step beginning|
|eventMessageName|string|false|none|Name of event this test step is bound to|
|message|string|false|none|Error message that may be associated to this test step|
|requestName|string|false|none|Name of request this test step is bound to|
|success|boolean|true|none|Flag telling if test case is a success|

<h2 id="tocS_Trend">Trend</h2>
<!-- backwards compatibility -->
<a id="schematrend"></a>
<a id="schema_Trend"></a>
<a id="tocStrend"></a>
<a id="tocstrend"></a>

```json
"DOWN"
```

Evolution trend qualifier

<h2 id="tocS_UnidirectionalEvent">UnidirectionalEvent</h2>
<!-- backwards compatibility -->
<a id="schemaunidirectionalevent"></a>
<a id="schema_UnidirectionalEvent"></a>
<a id="tocSunidirectionalevent"></a>
<a id="tocsunidirectionalevent"></a>

```json
{
  "eventMessage": {
    "content": "string",
    "headers": [
      {
        "name": "string",
        "values": [
          "string"
        ]
      }
    ],
    "id": "string",
    "mediaType": "string",
    "name": "string",
    "operationId": "string",
    "testCaseId": "string"
  },
  "type": "reqRespPair"
}
```

Representation of an unidirectional exchange as an event message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventMessage|[EventMessage](#schemaeventmessage)|true|none|Asynchronous message for this unidirectional event|
|type|string|true|none|Discriminant type for identifying kind of exchange|

#### Enumerated Values

|Property|Value|
|---|---|
|type|reqRespPair|
|type|unidirEvent|

<h2 id="tocS_WeightedMetricValue">WeightedMetricValue</h2>
<!-- backwards compatibility -->
<a id="schemaweightedmetricvalue"></a>
<a id="schema_WeightedMetricValue"></a>
<a id="tocSweightedmetricvalue"></a>
<a id="tocsweightedmetricvalue"></a>

```json
{
  "name": "string",
  "value": 0,
  "weight": 0
}
```

Value of a metric with an associated weight

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Metric name or serie name|
|value|integer|true|none|The value of this metric|
|weight|integer|true|none|Weight of this metric value (typically a percentage)|
