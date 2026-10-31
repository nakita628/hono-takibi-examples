<h1 id="cloud-tool-results-api">Cloud Tool Results API v1beta3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API to publish and access results from developer tools.

Base URLs:

* <a href="https://toolresults.googleapis.com/">https://toolresults.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://firebase.google.com/docs/test-lab/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="cloud-tool-results-api-projects">projects</h1>

## toolresults.projects.histories.list

<a id="opIdtoolresults.projects.histories.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolresults/v1beta3/projects/{projectId}/histories`

Lists Histories for a given Project. The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist

<h3 id="toolresultsprojectshistorieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A Project id. Required.|
|filterByName|query|string|false|If set, only return histories with the given name. Optional.|
|pageSize|query|integer|false|The maximum number of Histories to fetch. Default value: 20. The server will use this default if the field is not set or has a value of 0. Any value greater than 100 will be treated as 100. Optional.|
|pageToken|query|string|false|A continuation token to resume the query at the next item. Optional.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "histories": [
    {
      "displayName": "string",
      "historyId": "string",
      "name": "string",
      "testPlatform": "unknownPlatform"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="toolresultsprojectshistorieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListHistoriesResponse](#schemalisthistoriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.create

<a id="opIdtoolresults.projects.histories.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "historyId": "string",
    "name": "string",
    "testPlatform": "unknownPlatform"
  }'
```

`POST /toolresults/v1beta3/projects/{projectId}/histories`

Creates a History. The returned History will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist

> Body parameter

```json
{
  "displayName": "string",
  "historyId": "string",
  "name": "string",
  "testPlatform": "unknownPlatform"
}
```

<h3 id="toolresultsprojectshistoriescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A Project id. Required.|
|requestId|query|string|false|A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[History](#schemahistory)|false|none|
|» displayName|body|string|false|A short human-readable (plain text) name to display in the UI. Maximum of 100 characters. - In response: present if set during create. - In create request: optional|
|» historyId|body|string|false|A unique identifier within a project for this History. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response always set - In create request: never set|
|» name|body|string|false|A name to uniquely identify a history within a project. Maximum of 200 characters. - In response always set - In create request: always set|
|» testPlatform|body|string|false|The platform of the test history. - In response: always set. Returns the platform of the last execution if unknown.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» testPlatform|unknownPlatform|
|» testPlatform|android|
|» testPlatform|ios|

> Example responses

> 200 Response

```json
{
  "displayName": "string",
  "historyId": "string",
  "name": "string",
  "testPlatform": "unknownPlatform"
}
```

<h3 id="toolresultsprojectshistoriescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[History](#schemahistory)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.get

<a id="opIdtoolresults.projects.histories.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolresults/v1beta3/projects/{projectId}/histories/{historyId}`

Gets a History. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist

<h3 id="toolresultsprojectshistoriesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A Project id. Required.|
|historyId|path|string|true|A History id. Required.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "displayName": "string",
  "historyId": "string",
  "name": "string",
  "testPlatform": "unknownPlatform"
}
```

<h3 id="toolresultsprojectshistoriesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[History](#schemahistory)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.list

<a id="opIdtoolresults.projects.histories.executions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions`

Lists Executions for a given History. The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist

<h3 id="toolresultsprojectshistoriesexecutionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A Project id. Required.|
|historyId|path|string|true|A History id. Required.|
|pageSize|query|integer|false|The maximum number of Executions to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. Optional.|
|pageToken|query|string|false|A continuation token to resume the query at the next item. Optional.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "executions": [
    {
      "completionTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "creationTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "dimensionDefinitions": [
        {}
      ],
      "executionId": "string",
      "outcome": {
        "failureDetail": {
          "crashed": true,
          "deviceOutOfMemory": true,
          "failedRoboscript": true,
          "notInstalled": true,
          "otherNativeCrash": true,
          "timedOut": true,
          "unableToCrawl": true
        },
        "inconclusiveDetail": {
          "abortedByUser": true,
          "hasErrorLogs": true,
          "infrastructureFailure": true
        },
        "skippedDetail": {
          "incompatibleAppVersion": true,
          "incompatibleArchitecture": true,
          "incompatibleDevice": true
        },
        "successDetail": {
          "otherNativeCrash": true
        },
        "summary": "unset"
      },
      "specification": {
        "androidTest": {
          "androidAppInfo": {
            "name": "string",
            "packageName": "string",
            "versionCode": "string",
            "versionName": "string"
          },
          "androidInstrumentationTest": {
            "testPackageId": "string",
            "testRunnerClass": "string",
            "testTargets": [
              "string"
            ],
            "useOrchestrator": true
          },
          "androidRoboTest": {
            "appInitialActivity": "string",
            "bootstrapPackageId": "string",
            "bootstrapRunnerClass": "string",
            "maxDepth": 0,
            "maxSteps": 0
          },
          "androidTestLoop": {},
          "testTimeout": {
            "nanos": 0,
            "seconds": "string"
          }
        },
        "iosTest": {
          "iosAppInfo": {
            "name": "string"
          },
          "iosRoboTest": {},
          "iosTestLoop": {
            "bundleId": "string"
          },
          "iosXcTest": {
            "bundleId": "string",
            "xcodeVersion": "string"
          },
          "testTimeout": {
            "nanos": 0,
            "seconds": "string"
          }
        }
      },
      "state": "unknownState",
      "testExecutionMatrixId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="toolresultsprojectshistoriesexecutionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListExecutionsResponse](#schemalistexecutionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.create

<a id="opIdtoolresults.projects.histories.executions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "completionTime": {
      "nanos": 0,
      "seconds": "string"
    },
    "creationTime": {
      "nanos": 0,
      "seconds": "string"
    },
    "dimensionDefinitions": [
      {}
    ],
    "executionId": "string",
    "outcome": {
      "failureDetail": {
        "crashed": true,
        "deviceOutOfMemory": true,
        "failedRoboscript": true,
        "notInstalled": true,
        "otherNativeCrash": true,
        "timedOut": true,
        "unableToCrawl": true
      },
      "inconclusiveDetail": {
        "abortedByUser": true,
        "hasErrorLogs": true,
        "infrastructureFailure": true
      },
      "skippedDetail": {
        "incompatibleAppVersion": true,
        "incompatibleArchitecture": true,
        "incompatibleDevice": true
      },
      "successDetail": {
        "otherNativeCrash": true
      },
      "summary": "unset"
    },
    "specification": {
      "androidTest": {
        "androidAppInfo": {
          "name": "string",
          "packageName": "string",
          "versionCode": "string",
          "versionName": "string"
        },
        "androidInstrumentationTest": {
          "testPackageId": "string",
          "testRunnerClass": "string",
          "testTargets": [
            "string"
          ],
          "useOrchestrator": true
        },
        "androidRoboTest": {
          "appInitialActivity": "string",
          "bootstrapPackageId": "string",
          "bootstrapRunnerClass": "string",
          "maxDepth": 0,
          "maxSteps": 0
        },
        "androidTestLoop": {},
        "testTimeout": {
          "nanos": 0,
          "seconds": "string"
        }
      },
      "iosTest": {
        "iosAppInfo": {
          "name": "string"
        },
        "iosRoboTest": {},
        "iosTestLoop": {
          "bundleId": "string"
        },
        "iosXcTest": {
          "bundleId": "string",
          "xcodeVersion": "string"
        },
        "testTimeout": {
          "nanos": 0,
          "seconds": "string"
        }
      }
    },
    "state": "unknownState",
    "testExecutionMatrixId": "string"
  }'
```

`POST /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions`

Creates an Execution. The returned Execution will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist

> Body parameter

```json
{
  "completionTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "creationTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "dimensionDefinitions": [
    {}
  ],
  "executionId": "string",
  "outcome": {
    "failureDetail": {
      "crashed": true,
      "deviceOutOfMemory": true,
      "failedRoboscript": true,
      "notInstalled": true,
      "otherNativeCrash": true,
      "timedOut": true,
      "unableToCrawl": true
    },
    "inconclusiveDetail": {
      "abortedByUser": true,
      "hasErrorLogs": true,
      "infrastructureFailure": true
    },
    "skippedDetail": {
      "incompatibleAppVersion": true,
      "incompatibleArchitecture": true,
      "incompatibleDevice": true
    },
    "successDetail": {
      "otherNativeCrash": true
    },
    "summary": "unset"
  },
  "specification": {
    "androidTest": {
      "androidAppInfo": {
        "name": "string",
        "packageName": "string",
        "versionCode": "string",
        "versionName": "string"
      },
      "androidInstrumentationTest": {
        "testPackageId": "string",
        "testRunnerClass": "string",
        "testTargets": [
          "string"
        ],
        "useOrchestrator": true
      },
      "androidRoboTest": {
        "appInitialActivity": "string",
        "bootstrapPackageId": "string",
        "bootstrapRunnerClass": "string",
        "maxDepth": 0,
        "maxSteps": 0
      },
      "androidTestLoop": {},
      "testTimeout": {
        "nanos": 0,
        "seconds": "string"
      }
    },
    "iosTest": {
      "iosAppInfo": {
        "name": "string"
      },
      "iosRoboTest": {},
      "iosTestLoop": {
        "bundleId": "string"
      },
      "iosXcTest": {
        "bundleId": "string",
        "xcodeVersion": "string"
      },
      "testTimeout": {
        "nanos": 0,
        "seconds": "string"
      }
    }
  },
  "state": "unknownState",
  "testExecutionMatrixId": "string"
}
```

<h3 id="toolresultsprojectshistoriesexecutionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A Project id. Required.|
|historyId|path|string|true|A History id. Required.|
|requestId|query|string|false|A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Execution](#schemaexecution)|false|none|
|» completionTime|body|[Timestamp](#schematimestamp)|false|The time when the Execution status transitioned to COMPLETE. This value will be set automatically when state transitions to COMPLETE. - In response: set if the execution state is COMPLETE. - In create/update request: never set|
|» creationTime|body|[Timestamp](#schematimestamp)|false|The time when the Execution was created. This value will be set automatically when CreateExecution is called. - In response: always set - In create/update request: never set|
|» dimensionDefinitions|body|[[MatrixDimensionDefinition](#schemamatrixdimensiondefinition)]|false|The dimensions along which different steps in this execution may vary. This must remain fixed over the life of the execution. Returns INVALID_ARGUMENT if this field is set in an update request. Returns INVALID_ARGUMENT if the same name occurs in more than one dimension_definition. Returns INVALID_ARGUMENT if the size of the list is over 100. - In response: present if set by create - In create request: optional - In update request: never set|
|» executionId|body|string|false|A unique identifier within a History for this Execution. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response always set - In create/update request: never set|
|» outcome|body|[Outcome](#schemaoutcome)|false|Classify the result, for example into SUCCESS or FAILURE - In response: present if set by create/update request - In create/update request: optional|
|» specification|body|[Specification](#schemaspecification)|false|Lightweight information about execution request. - In response: present if set by create - In create: optional - In update: optional|
|» state|body|string|false|The initial state is IN_PROGRESS. The only legal state transitions is from IN_PROGRESS to COMPLETE. A PRECONDITION_FAILED will be returned if an invalid transition is requested. The state can only be set to COMPLETE once. A FAILED_PRECONDITION will be returned if the state is set to COMPLETE multiple times. If the state is set to COMPLETE, all the in-progress steps within the execution will be set as COMPLETE. If the outcome of the step is not set, the outcome will be set to INCONCLUSIVE. - In response always set - In create/update request: optional|
|» testExecutionMatrixId|body|string|false|TestExecution Matrix ID that the TestExecutionService uses. - In response: present if set by create - In create: optional - In update: never set|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|unknownState|
|» state|pending|
|» state|inProgress|
|» state|complete|

> Example responses

> 200 Response

```json
{
  "completionTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "creationTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "dimensionDefinitions": [
    {}
  ],
  "executionId": "string",
  "outcome": {
    "failureDetail": {
      "crashed": true,
      "deviceOutOfMemory": true,
      "failedRoboscript": true,
      "notInstalled": true,
      "otherNativeCrash": true,
      "timedOut": true,
      "unableToCrawl": true
    },
    "inconclusiveDetail": {
      "abortedByUser": true,
      "hasErrorLogs": true,
      "infrastructureFailure": true
    },
    "skippedDetail": {
      "incompatibleAppVersion": true,
      "incompatibleArchitecture": true,
      "incompatibleDevice": true
    },
    "successDetail": {
      "otherNativeCrash": true
    },
    "summary": "unset"
  },
  "specification": {
    "androidTest": {
      "androidAppInfo": {
        "name": "string",
        "packageName": "string",
        "versionCode": "string",
        "versionName": "string"
      },
      "androidInstrumentationTest": {
        "testPackageId": "string",
        "testRunnerClass": "string",
        "testTargets": [
          "string"
        ],
        "useOrchestrator": true
      },
      "androidRoboTest": {
        "appInitialActivity": "string",
        "bootstrapPackageId": "string",
        "bootstrapRunnerClass": "string",
        "maxDepth": 0,
        "maxSteps": 0
      },
      "androidTestLoop": {},
      "testTimeout": {
        "nanos": 0,
        "seconds": "string"
      }
    },
    "iosTest": {
      "iosAppInfo": {
        "name": "string"
      },
      "iosRoboTest": {},
      "iosTestLoop": {
        "bundleId": "string"
      },
      "iosXcTest": {
        "bundleId": "string",
        "xcodeVersion": "string"
      },
      "testTimeout": {
        "nanos": 0,
        "seconds": "string"
      }
    }
  },
  "state": "unknownState",
  "testExecutionMatrixId": "string"
}
```

<h3 id="toolresultsprojectshistoriesexecutionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Execution](#schemaexecution)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.get

<a id="opIdtoolresults.projects.histories.executions.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}`

Gets an Execution. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist

<h3 id="toolresultsprojectshistoriesexecutionsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A Project id. Required.|
|historyId|path|string|true|A History id. Required.|
|executionId|path|string|true|An Execution id. Required.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "completionTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "creationTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "dimensionDefinitions": [
    {}
  ],
  "executionId": "string",
  "outcome": {
    "failureDetail": {
      "crashed": true,
      "deviceOutOfMemory": true,
      "failedRoboscript": true,
      "notInstalled": true,
      "otherNativeCrash": true,
      "timedOut": true,
      "unableToCrawl": true
    },
    "inconclusiveDetail": {
      "abortedByUser": true,
      "hasErrorLogs": true,
      "infrastructureFailure": true
    },
    "skippedDetail": {
      "incompatibleAppVersion": true,
      "incompatibleArchitecture": true,
      "incompatibleDevice": true
    },
    "successDetail": {
      "otherNativeCrash": true
    },
    "summary": "unset"
  },
  "specification": {
    "androidTest": {
      "androidAppInfo": {
        "name": "string",
        "packageName": "string",
        "versionCode": "string",
        "versionName": "string"
      },
      "androidInstrumentationTest": {
        "testPackageId": "string",
        "testRunnerClass": "string",
        "testTargets": [
          "string"
        ],
        "useOrchestrator": true
      },
      "androidRoboTest": {
        "appInitialActivity": "string",
        "bootstrapPackageId": "string",
        "bootstrapRunnerClass": "string",
        "maxDepth": 0,
        "maxSteps": 0
      },
      "androidTestLoop": {},
      "testTimeout": {
        "nanos": 0,
        "seconds": "string"
      }
    },
    "iosTest": {
      "iosAppInfo": {
        "name": "string"
      },
      "iosRoboTest": {},
      "iosTestLoop": {
        "bundleId": "string"
      },
      "iosXcTest": {
        "bundleId": "string",
        "xcodeVersion": "string"
      },
      "testTimeout": {
        "nanos": 0,
        "seconds": "string"
      }
    }
  },
  "state": "unknownState",
  "testExecutionMatrixId": "string"
}
```

<h3 id="toolresultsprojectshistoriesexecutionsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Execution](#schemaexecution)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.patch

<a id="opIdtoolresults.projects.histories.executions.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "completionTime": {
      "nanos": 0,
      "seconds": "string"
    },
    "creationTime": {
      "nanos": 0,
      "seconds": "string"
    },
    "dimensionDefinitions": [
      {}
    ],
    "executionId": "string",
    "outcome": {
      "failureDetail": {
        "crashed": true,
        "deviceOutOfMemory": true,
        "failedRoboscript": true,
        "notInstalled": true,
        "otherNativeCrash": true,
        "timedOut": true,
        "unableToCrawl": true
      },
      "inconclusiveDetail": {
        "abortedByUser": true,
        "hasErrorLogs": true,
        "infrastructureFailure": true
      },
      "skippedDetail": {
        "incompatibleAppVersion": true,
        "incompatibleArchitecture": true,
        "incompatibleDevice": true
      },
      "successDetail": {
        "otherNativeCrash": true
      },
      "summary": "unset"
    },
    "specification": {
      "androidTest": {
        "androidAppInfo": {
          "name": "string",
          "packageName": "string",
          "versionCode": "string",
          "versionName": "string"
        },
        "androidInstrumentationTest": {
          "testPackageId": "string",
          "testRunnerClass": "string",
          "testTargets": [
            "string"
          ],
          "useOrchestrator": true
        },
        "androidRoboTest": {
          "appInitialActivity": "string",
          "bootstrapPackageId": "string",
          "bootstrapRunnerClass": "string",
          "maxDepth": 0,
          "maxSteps": 0
        },
        "androidTestLoop": {},
        "testTimeout": {
          "nanos": 0,
          "seconds": "string"
        }
      },
      "iosTest": {
        "iosAppInfo": {
          "name": "string"
        },
        "iosRoboTest": {},
        "iosTestLoop": {
          "bundleId": "string"
        },
        "iosXcTest": {
          "bundleId": "string",
          "xcodeVersion": "string"
        },
        "testTimeout": {
          "nanos": 0,
          "seconds": "string"
        }
      }
    },
    "state": "unknownState",
    "testExecutionMatrixId": "string"
  }'
```

`PATCH /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}`

Updates an existing Execution with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist

> Body parameter

```json
{
  "completionTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "creationTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "dimensionDefinitions": [
    {}
  ],
  "executionId": "string",
  "outcome": {
    "failureDetail": {
      "crashed": true,
      "deviceOutOfMemory": true,
      "failedRoboscript": true,
      "notInstalled": true,
      "otherNativeCrash": true,
      "timedOut": true,
      "unableToCrawl": true
    },
    "inconclusiveDetail": {
      "abortedByUser": true,
      "hasErrorLogs": true,
      "infrastructureFailure": true
    },
    "skippedDetail": {
      "incompatibleAppVersion": true,
      "incompatibleArchitecture": true,
      "incompatibleDevice": true
    },
    "successDetail": {
      "otherNativeCrash": true
    },
    "summary": "unset"
  },
  "specification": {
    "androidTest": {
      "androidAppInfo": {
        "name": "string",
        "packageName": "string",
        "versionCode": "string",
        "versionName": "string"
      },
      "androidInstrumentationTest": {
        "testPackageId": "string",
        "testRunnerClass": "string",
        "testTargets": [
          "string"
        ],
        "useOrchestrator": true
      },
      "androidRoboTest": {
        "appInitialActivity": "string",
        "bootstrapPackageId": "string",
        "bootstrapRunnerClass": "string",
        "maxDepth": 0,
        "maxSteps": 0
      },
      "androidTestLoop": {},
      "testTimeout": {
        "nanos": 0,
        "seconds": "string"
      }
    },
    "iosTest": {
      "iosAppInfo": {
        "name": "string"
      },
      "iosRoboTest": {},
      "iosTestLoop": {
        "bundleId": "string"
      },
      "iosXcTest": {
        "bundleId": "string",
        "xcodeVersion": "string"
      },
      "testTimeout": {
        "nanos": 0,
        "seconds": "string"
      }
    }
  },
  "state": "unknownState",
  "testExecutionMatrixId": "string"
}
```

<h3 id="toolresultsprojectshistoriesexecutionspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A Project id. Required.|
|historyId|path|string|true|Required.|
|executionId|path|string|true|Required.|
|requestId|query|string|false|A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Execution](#schemaexecution)|false|none|
|» completionTime|body|[Timestamp](#schematimestamp)|false|The time when the Execution status transitioned to COMPLETE. This value will be set automatically when state transitions to COMPLETE. - In response: set if the execution state is COMPLETE. - In create/update request: never set|
|» creationTime|body|[Timestamp](#schematimestamp)|false|The time when the Execution was created. This value will be set automatically when CreateExecution is called. - In response: always set - In create/update request: never set|
|» dimensionDefinitions|body|[[MatrixDimensionDefinition](#schemamatrixdimensiondefinition)]|false|The dimensions along which different steps in this execution may vary. This must remain fixed over the life of the execution. Returns INVALID_ARGUMENT if this field is set in an update request. Returns INVALID_ARGUMENT if the same name occurs in more than one dimension_definition. Returns INVALID_ARGUMENT if the size of the list is over 100. - In response: present if set by create - In create request: optional - In update request: never set|
|» executionId|body|string|false|A unique identifier within a History for this Execution. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response always set - In create/update request: never set|
|» outcome|body|[Outcome](#schemaoutcome)|false|Classify the result, for example into SUCCESS or FAILURE - In response: present if set by create/update request - In create/update request: optional|
|» specification|body|[Specification](#schemaspecification)|false|Lightweight information about execution request. - In response: present if set by create - In create: optional - In update: optional|
|» state|body|string|false|The initial state is IN_PROGRESS. The only legal state transitions is from IN_PROGRESS to COMPLETE. A PRECONDITION_FAILED will be returned if an invalid transition is requested. The state can only be set to COMPLETE once. A FAILED_PRECONDITION will be returned if the state is set to COMPLETE multiple times. If the state is set to COMPLETE, all the in-progress steps within the execution will be set as COMPLETE. If the outcome of the step is not set, the outcome will be set to INCONCLUSIVE. - In response always set - In create/update request: optional|
|» testExecutionMatrixId|body|string|false|TestExecution Matrix ID that the TestExecutionService uses. - In response: present if set by create - In create: optional - In update: never set|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|unknownState|
|» state|pending|
|» state|inProgress|
|» state|complete|

> Example responses

> 200 Response

```json
{
  "completionTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "creationTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "dimensionDefinitions": [
    {}
  ],
  "executionId": "string",
  "outcome": {
    "failureDetail": {
      "crashed": true,
      "deviceOutOfMemory": true,
      "failedRoboscript": true,
      "notInstalled": true,
      "otherNativeCrash": true,
      "timedOut": true,
      "unableToCrawl": true
    },
    "inconclusiveDetail": {
      "abortedByUser": true,
      "hasErrorLogs": true,
      "infrastructureFailure": true
    },
    "skippedDetail": {
      "incompatibleAppVersion": true,
      "incompatibleArchitecture": true,
      "incompatibleDevice": true
    },
    "successDetail": {
      "otherNativeCrash": true
    },
    "summary": "unset"
  },
  "specification": {
    "androidTest": {
      "androidAppInfo": {
        "name": "string",
        "packageName": "string",
        "versionCode": "string",
        "versionName": "string"
      },
      "androidInstrumentationTest": {
        "testPackageId": "string",
        "testRunnerClass": "string",
        "testTargets": [
          "string"
        ],
        "useOrchestrator": true
      },
      "androidRoboTest": {
        "appInitialActivity": "string",
        "bootstrapPackageId": "string",
        "bootstrapRunnerClass": "string",
        "maxDepth": 0,
        "maxSteps": 0
      },
      "androidTestLoop": {},
      "testTimeout": {
        "nanos": 0,
        "seconds": "string"
      }
    },
    "iosTest": {
      "iosAppInfo": {
        "name": "string"
      },
      "iosRoboTest": {},
      "iosTestLoop": {
        "bundleId": "string"
      },
      "iosXcTest": {
        "bundleId": "string",
        "xcodeVersion": "string"
      },
      "testTimeout": {
        "nanos": 0,
        "seconds": "string"
      }
    }
  },
  "state": "unknownState",
  "testExecutionMatrixId": "string"
}
```

<h3 id="toolresultsprojectshistoriesexecutionspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Execution](#schemaexecution)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.clusters.list

<a id="opIdtoolresults.projects.histories.executions.clusters.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions/string/clusters \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters`

Lists Screenshot Clusters Returns the list of screenshot clusters corresponding to an execution. Screenshot clusters are created after the execution is finished. Clusters are created from a set of screenshots. Between any two screenshots, a matching score is calculated based off their metadata that determines how similar they are. Screenshots are placed in the cluster that has screens which have the highest matching scores.

<h3 id="toolresultsprojectshistoriesexecutionsclusterslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A Project id. Required.|
|historyId|path|string|true|A History id. Required.|
|executionId|path|string|true|An Execution id. Required.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "clusters": [
    {
      "activity": "string",
      "clusterId": "string",
      "keyScreen": {
        "fileReference": "string",
        "locale": "string",
        "model": "string",
        "version": "string"
      },
      "screens": [
        {
          "fileReference": "string",
          "locale": "string",
          "model": "string",
          "version": "string"
        }
      ]
    }
  ]
}
```

<h3 id="toolresultsprojectshistoriesexecutionsclusterslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListScreenshotClustersResponse](#schemalistscreenshotclustersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.clusters.get

<a id="opIdtoolresults.projects.histories.executions.clusters.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions/string/clusters/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters/{clusterId}`

Retrieves a single screenshot cluster by its ID

<h3 id="toolresultsprojectshistoriesexecutionsclustersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A Project id. Required.|
|historyId|path|string|true|A History id. Required.|
|executionId|path|string|true|An Execution id. Required.|
|clusterId|path|string|true|A Cluster id Required.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "activity": "string",
  "clusterId": "string",
  "keyScreen": {
    "fileReference": "string",
    "locale": "string",
    "model": "string",
    "version": "string"
  },
  "screens": [
    {
      "fileReference": "string",
      "locale": "string",
      "model": "string",
      "version": "string"
    }
  ]
}
```

<h3 id="toolresultsprojectshistoriesexecutionsclustersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ScreenshotCluster](#schemascreenshotcluster)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.environments.list

<a id="opIdtoolresults.projects.histories.executions.environments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions/string/environments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/environments`

Lists Environments for a given Execution. The Environments are sorted by display name. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Execution does not exist

<h3 id="toolresultsprojectshistoriesexecutionsenvironmentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. A Project id.|
|historyId|path|string|true|Required. A History id.|
|executionId|path|string|true|Required. An Execution id.|
|pageSize|query|integer|false|The maximum number of Environments to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0.|
|pageToken|query|string|false|A continuation token to resume the query at the next item.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "environments": [
    {
      "completionTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "creationTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "dimensionValue": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "displayName": "string",
      "environmentId": "string",
      "environmentResult": {
        "outcome": {
          "failureDetail": {
            "crashed": true,
            "deviceOutOfMemory": true,
            "failedRoboscript": true,
            "notInstalled": true,
            "otherNativeCrash": true,
            "timedOut": true,
            "unableToCrawl": true
          },
          "inconclusiveDetail": {
            "abortedByUser": true,
            "hasErrorLogs": true,
            "infrastructureFailure": true
          },
          "skippedDetail": {
            "incompatibleAppVersion": true,
            "incompatibleArchitecture": true,
            "incompatibleDevice": true
          },
          "successDetail": {
            "otherNativeCrash": true
          },
          "summary": "unset"
        },
        "state": "unknownState",
        "testSuiteOverviews": [
          {
            "elapsedTime": {
              "nanos": 0,
              "seconds": "string"
            },
            "errorCount": 0,
            "failureCount": 0,
            "flakyCount": 0,
            "name": "string",
            "skippedCount": 0,
            "totalCount": 0,
            "xmlSource": {
              "fileUri": "string"
            }
          }
        ]
      },
      "executionId": "string",
      "historyId": "string",
      "projectId": "string",
      "resultsStorage": {
        "resultsStoragePath": {
          "fileUri": "string"
        },
        "xunitXmlFile": {
          "fileUri": "string"
        }
      },
      "shardSummaries": [
        {
          "runs": [
            {}
          ],
          "shardResult": {
            "outcome": {
              "failureDetail": {
                "crashed": true,
                "deviceOutOfMemory": true,
                "failedRoboscript": true,
                "notInstalled": true,
                "otherNativeCrash": true,
                "timedOut": true,
                "unableToCrawl": true
              },
              "inconclusiveDetail": {
                "abortedByUser": true,
                "hasErrorLogs": true,
                "infrastructureFailure": true
              },
              "skippedDetail": {
                "incompatibleAppVersion": true,
                "incompatibleArchitecture": true,
                "incompatibleDevice": true
              },
              "successDetail": {
                "otherNativeCrash": true
              },
              "summary": "unset"
            },
            "state": "unknownState",
            "testSuiteOverviews": [
              {
                "elapsedTime": {
                  "nanos": 0,
                  "seconds": "string"
                },
                "errorCount": 0,
                "failureCount": 0,
                "flakyCount": 0,
                "name": "string",
                "skippedCount": 0,
                "totalCount": 0,
                "xmlSource": {
                  "fileUri": "string"
                }
              }
            ]
          }
        }
      ]
    }
  ],
  "executionId": "string",
  "historyId": "string",
  "nextPageToken": "string",
  "projectId": "string"
}
```

<h3 id="toolresultsprojectshistoriesexecutionsenvironmentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListEnvironmentsResponse](#schemalistenvironmentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.environments.get

<a id="opIdtoolresults.projects.histories.executions.environments.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions/string/environments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/environments/{environmentId}`

Gets an Environment. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Environment does not exist

<h3 id="toolresultsprojectshistoriesexecutionsenvironmentsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. A Project id.|
|historyId|path|string|true|Required. A History id.|
|executionId|path|string|true|Required. An Execution id.|
|environmentId|path|string|true|Required. An Environment id.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "completionTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "creationTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "dimensionValue": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "displayName": "string",
  "environmentId": "string",
  "environmentResult": {
    "outcome": {
      "failureDetail": {
        "crashed": true,
        "deviceOutOfMemory": true,
        "failedRoboscript": true,
        "notInstalled": true,
        "otherNativeCrash": true,
        "timedOut": true,
        "unableToCrawl": true
      },
      "inconclusiveDetail": {
        "abortedByUser": true,
        "hasErrorLogs": true,
        "infrastructureFailure": true
      },
      "skippedDetail": {
        "incompatibleAppVersion": true,
        "incompatibleArchitecture": true,
        "incompatibleDevice": true
      },
      "successDetail": {
        "otherNativeCrash": true
      },
      "summary": "unset"
    },
    "state": "unknownState",
    "testSuiteOverviews": [
      {
        "elapsedTime": {
          "nanos": 0,
          "seconds": "string"
        },
        "errorCount": 0,
        "failureCount": 0,
        "flakyCount": 0,
        "name": "string",
        "skippedCount": 0,
        "totalCount": 0,
        "xmlSource": {
          "fileUri": "string"
        }
      }
    ]
  },
  "executionId": "string",
  "historyId": "string",
  "projectId": "string",
  "resultsStorage": {
    "resultsStoragePath": {
      "fileUri": "string"
    },
    "xunitXmlFile": {
      "fileUri": "string"
    }
  },
  "shardSummaries": [
    {
      "runs": [
        {}
      ],
      "shardResult": {
        "outcome": {
          "failureDetail": {
            "crashed": true,
            "deviceOutOfMemory": true,
            "failedRoboscript": true,
            "notInstalled": true,
            "otherNativeCrash": true,
            "timedOut": true,
            "unableToCrawl": true
          },
          "inconclusiveDetail": {
            "abortedByUser": true,
            "hasErrorLogs": true,
            "infrastructureFailure": true
          },
          "skippedDetail": {
            "incompatibleAppVersion": true,
            "incompatibleArchitecture": true,
            "incompatibleDevice": true
          },
          "successDetail": {
            "otherNativeCrash": true
          },
          "summary": "unset"
        },
        "state": "unknownState",
        "testSuiteOverviews": [
          {
            "elapsedTime": {
              "nanos": 0,
              "seconds": "string"
            },
            "errorCount": 0,
            "failureCount": 0,
            "flakyCount": 0,
            "name": "string",
            "skippedCount": 0,
            "totalCount": 0,
            "xmlSource": {
              "fileUri": "string"
            }
          }
        ]
      }
    }
  ]
}
```

<h3 id="toolresultsprojectshistoriesexecutionsenvironmentsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Environment](#schemaenvironment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.steps.list

<a id="opIdtoolresults.projects.histories.executions.steps.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions/string/steps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps`

Lists Steps for a given Execution. The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist

<h3 id="toolresultsprojectshistoriesexecutionsstepslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A Project id. Required.|
|historyId|path|string|true|A History id. Required.|
|executionId|path|string|true|A Execution id. Required.|
|pageSize|query|integer|false|The maximum number of Steps to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. Optional.|
|pageToken|query|string|false|A continuation token to resume the query at the next item. Optional.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "steps": [
    {
      "completionTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "creationTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "description": "string",
      "deviceUsageDuration": {
        "nanos": 0,
        "seconds": "string"
      },
      "dimensionValue": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "hasImages": true,
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "multiStep": {
        "multistepNumber": 0,
        "primaryStep": {
          "individualOutcome": [
            {
              "multistepNumber": 0,
              "outcomeSummary": "unset",
              "runDuration": {
                "nanos": 0,
                "seconds": "string"
              },
              "stepId": "string"
            }
          ],
          "rollUp": "unset"
        },
        "primaryStepId": "string"
      },
      "name": "string",
      "outcome": {
        "failureDetail": {
          "crashed": true,
          "deviceOutOfMemory": true,
          "failedRoboscript": true,
          "notInstalled": true,
          "otherNativeCrash": true,
          "timedOut": true,
          "unableToCrawl": true
        },
        "inconclusiveDetail": {
          "abortedByUser": true,
          "hasErrorLogs": true,
          "infrastructureFailure": true
        },
        "skippedDetail": {
          "incompatibleAppVersion": true,
          "incompatibleArchitecture": true,
          "incompatibleDevice": true
        },
        "successDetail": {
          "otherNativeCrash": true
        },
        "summary": "unset"
      },
      "runDuration": {
        "nanos": 0,
        "seconds": "string"
      },
      "state": "unknownState",
      "stepId": "string",
      "testExecutionStep": {
        "testIssues": [
          {
            "category": "unspecifiedCategory",
            "errorMessage": "string",
            "severity": "unspecifiedSeverity",
            "stackTrace": {
              "exception": "string"
            },
            "type": "unspecifiedType",
            "warning": {
              "typeUrl": "string",
              "value": "string"
            }
          }
        ],
        "testSuiteOverviews": [
          {
            "elapsedTime": {
              "nanos": 0,
              "seconds": "string"
            },
            "errorCount": 0,
            "failureCount": 0,
            "flakyCount": 0,
            "name": "string",
            "skippedCount": 0,
            "totalCount": 0,
            "xmlSource": {
              "fileUri": "string"
            }
          }
        ],
        "testTiming": {
          "testProcessDuration": {
            "nanos": 0,
            "seconds": "string"
          }
        },
        "toolExecution": {
          "commandLineArguments": [
            "string"
          ],
          "exitCode": {
            "number": 0
          },
          "toolLogs": [
            {
              "fileUri": "string"
            }
          ],
          "toolOutputs": [
            {
              "creationTime": {
                "nanos": 0,
                "seconds": "string"
              },
              "output": {
                "fileUri": "string"
              },
              "testCase": {
                "className": "string",
                "name": "string",
                "testSuiteName": "string"
              }
            }
          ]
        }
      },
      "toolExecutionStep": {
        "toolExecution": {
          "commandLineArguments": [
            "string"
          ],
          "exitCode": {
            "number": 0
          },
          "toolLogs": [
            {
              "fileUri": "string"
            }
          ],
          "toolOutputs": [
            {
              "creationTime": {
                "nanos": 0,
                "seconds": "string"
              },
              "output": {
                "fileUri": "string"
              },
              "testCase": {
                "className": "string",
                "name": "string",
                "testSuiteName": "string"
              }
            }
          ]
        }
      }
    }
  ]
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListStepsResponse](#schemaliststepsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.steps.create

<a id="opIdtoolresults.projects.histories.executions.steps.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions/string/steps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "completionTime": {
      "nanos": 0,
      "seconds": "string"
    },
    "creationTime": {
      "nanos": 0,
      "seconds": "string"
    },
    "description": "string",
    "deviceUsageDuration": {
      "nanos": 0,
      "seconds": "string"
    },
    "dimensionValue": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "hasImages": true,
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "multiStep": {
      "multistepNumber": 0,
      "primaryStep": {
        "individualOutcome": [
          {
            "multistepNumber": 0,
            "outcomeSummary": "unset",
            "runDuration": {
              "nanos": 0,
              "seconds": "string"
            },
            "stepId": "string"
          }
        ],
        "rollUp": "unset"
      },
      "primaryStepId": "string"
    },
    "name": "string",
    "outcome": {
      "failureDetail": {
        "crashed": true,
        "deviceOutOfMemory": true,
        "failedRoboscript": true,
        "notInstalled": true,
        "otherNativeCrash": true,
        "timedOut": true,
        "unableToCrawl": true
      },
      "inconclusiveDetail": {
        "abortedByUser": true,
        "hasErrorLogs": true,
        "infrastructureFailure": true
      },
      "skippedDetail": {
        "incompatibleAppVersion": true,
        "incompatibleArchitecture": true,
        "incompatibleDevice": true
      },
      "successDetail": {
        "otherNativeCrash": true
      },
      "summary": "unset"
    },
    "runDuration": {
      "nanos": 0,
      "seconds": "string"
    },
    "state": "unknownState",
    "stepId": "string",
    "testExecutionStep": {
      "testIssues": [
        {
          "category": "unspecifiedCategory",
          "errorMessage": "string",
          "severity": "unspecifiedSeverity",
          "stackTrace": {
            "exception": "string"
          },
          "type": "unspecifiedType",
          "warning": {
            "typeUrl": "string",
            "value": "string"
          }
        }
      ],
      "testSuiteOverviews": [
        {
          "elapsedTime": {
            "nanos": 0,
            "seconds": "string"
          },
          "errorCount": 0,
          "failureCount": 0,
          "flakyCount": 0,
          "name": "string",
          "skippedCount": 0,
          "totalCount": 0,
          "xmlSource": {
            "fileUri": "string"
          }
        }
      ],
      "testTiming": {
        "testProcessDuration": {
          "nanos": 0,
          "seconds": "string"
        }
      },
      "toolExecution": {
        "commandLineArguments": [
          "string"
        ],
        "exitCode": {
          "number": 0
        },
        "toolLogs": [
          {
            "fileUri": "string"
          }
        ],
        "toolOutputs": [
          {
            "creationTime": {
              "nanos": 0,
              "seconds": "string"
            },
            "output": {
              "fileUri": "string"
            },
            "testCase": {
              "className": "string",
              "name": "string",
              "testSuiteName": "string"
            }
          }
        ]
      }
    },
    "toolExecutionStep": {
      "toolExecution": {
        "commandLineArguments": [
          "string"
        ],
        "exitCode": {
          "number": 0
        },
        "toolLogs": [
          {
            "fileUri": "string"
          }
        ],
        "toolOutputs": [
          {
            "creationTime": {
              "nanos": 0,
              "seconds": "string"
            },
            "output": {
              "fileUri": "string"
            },
            "testCase": {
              "className": "string",
              "name": "string",
              "testSuiteName": "string"
            }
          }
        ]
      }
    }
  }'
```

`POST /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps`

Creates a Step. The returned Step will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist

> Body parameter

```json
{
  "completionTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "creationTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "description": "string",
  "deviceUsageDuration": {
    "nanos": 0,
    "seconds": "string"
  },
  "dimensionValue": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "hasImages": true,
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "multiStep": {
    "multistepNumber": 0,
    "primaryStep": {
      "individualOutcome": [
        {
          "multistepNumber": 0,
          "outcomeSummary": "unset",
          "runDuration": {
            "nanos": 0,
            "seconds": "string"
          },
          "stepId": "string"
        }
      ],
      "rollUp": "unset"
    },
    "primaryStepId": "string"
  },
  "name": "string",
  "outcome": {
    "failureDetail": {
      "crashed": true,
      "deviceOutOfMemory": true,
      "failedRoboscript": true,
      "notInstalled": true,
      "otherNativeCrash": true,
      "timedOut": true,
      "unableToCrawl": true
    },
    "inconclusiveDetail": {
      "abortedByUser": true,
      "hasErrorLogs": true,
      "infrastructureFailure": true
    },
    "skippedDetail": {
      "incompatibleAppVersion": true,
      "incompatibleArchitecture": true,
      "incompatibleDevice": true
    },
    "successDetail": {
      "otherNativeCrash": true
    },
    "summary": "unset"
  },
  "runDuration": {
    "nanos": 0,
    "seconds": "string"
  },
  "state": "unknownState",
  "stepId": "string",
  "testExecutionStep": {
    "testIssues": [
      {
        "category": "unspecifiedCategory",
        "errorMessage": "string",
        "severity": "unspecifiedSeverity",
        "stackTrace": {
          "exception": "string"
        },
        "type": "unspecifiedType",
        "warning": {
          "typeUrl": "string",
          "value": "string"
        }
      }
    ],
    "testSuiteOverviews": [
      {
        "elapsedTime": {
          "nanos": 0,
          "seconds": "string"
        },
        "errorCount": 0,
        "failureCount": 0,
        "flakyCount": 0,
        "name": "string",
        "skippedCount": 0,
        "totalCount": 0,
        "xmlSource": {
          "fileUri": "string"
        }
      }
    ],
    "testTiming": {
      "testProcessDuration": {
        "nanos": 0,
        "seconds": "string"
      }
    },
    "toolExecution": {
      "commandLineArguments": [
        "string"
      ],
      "exitCode": {
        "number": 0
      },
      "toolLogs": [
        {
          "fileUri": "string"
        }
      ],
      "toolOutputs": [
        {
          "creationTime": {
            "nanos": 0,
            "seconds": "string"
          },
          "output": {
            "fileUri": "string"
          },
          "testCase": {
            "className": "string",
            "name": "string",
            "testSuiteName": "string"
          }
        }
      ]
    }
  },
  "toolExecutionStep": {
    "toolExecution": {
      "commandLineArguments": [
        "string"
      ],
      "exitCode": {
        "number": 0
      },
      "toolLogs": [
        {
          "fileUri": "string"
        }
      ],
      "toolOutputs": [
        {
          "creationTime": {
            "nanos": 0,
            "seconds": "string"
          },
          "output": {
            "fileUri": "string"
          },
          "testCase": {
            "className": "string",
            "name": "string",
            "testSuiteName": "string"
          }
        }
      ]
    }
  }
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. A Project id.|
|historyId|path|string|true|Required. A History id.|
|executionId|path|string|true|Required. An Execution id.|
|requestId|query|string|false|A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Step](#schemastep)|false|none|
|» completionTime|body|[Timestamp](#schematimestamp)|false|The time when the step status was set to complete. This value will be set automatically when state transitions to COMPLETE. - In response: set if the execution state is COMPLETE. - In create/update request: never set|
|» creationTime|body|[Timestamp](#schematimestamp)|false|The time when the step was created. - In response: always set - In create/update request: never set|
|» description|body|string|false|A description of this tool For example: mvn clean package -D skipTests=true - In response: present if set by create/update request - In create/update request: optional|
|» deviceUsageDuration|body|[Duration](#schemaduration)|false|How much the device resource is used to perform the test. This is the device usage used for billing purpose, which is different from the run_duration, for example, infrastructure failure won't be charged for device usage. PRECONDITION_FAILED will be returned if one attempts to set a device_usage on a step which already has this field set. - In response: present if previously set. - In create request: optional - In update request: optional|
|» dimensionValue|body|[[StepDimensionValueEntry](#schemastepdimensionvalueentry)]|false|If the execution containing this step has any dimension_definition set, then this field allows the child to specify the values of the dimensions. The keys must exactly match the dimension_definition of the execution. For example, if the execution has `dimension_definition = ['attempt', 'device']` then a step must define values for those dimensions, eg. `dimension_value = ['attempt': '1', 'device': 'Nexus 6']` If a step does not participate in one dimension of the matrix, the value for that dimension should be empty string. For example, if one of the tests is executed by a runner which does not support retries, the step could have `dimension_value = ['attempt': '', 'device': 'Nexus 6']` If the step does not participate in any dimensions of the matrix, it may leave dimension_value unset. A PRECONDITION_FAILED will be returned if any of the keys do not exist in the dimension_definition of the execution. A PRECONDITION_FAILED will be returned if another step in this execution already has the same name and dimension_value, but differs on other data fields, for example, step field is different. A PRECONDITION_FAILED will be returned if dimension_value is set, and there is a dimension_definition in the execution which is not specified as one of the keys. - In response: present if set by create - In create request: optional - In update request: never set|
|» hasImages|body|boolean|false|Whether any of the outputs of this step are images whose thumbnails can be fetched with ListThumbnails. - In response: always set - In create/update request: never set|
|» labels|body|[[StepLabelsEntry](#schemasteplabelsentry)]|false|Arbitrary user-supplied key/value pairs that are associated with the step. Users are responsible for managing the key namespace such that keys don't accidentally collide. An INVALID_ARGUMENT will be returned if the number of labels exceeds 100 or if the length of any of the keys or values exceeds 100 characters. - In response: always set - In create request: optional - In update request: optional; any new key/value pair will be added to the map, and any new value for an existing key will update that key's value|
|» multiStep|body|[MultiStep](#schemamultistep)|false|Details when multiple steps are run with the same configuration as a group. These details can be used identify which group this step is part of. It also identifies the groups 'primary step' which indexes all the group members. - In response: present if previously set. - In create request: optional, set iff this step was performed more than once. - In update request: optional|
|» name|body|string|false|A short human-readable name to display in the UI. Maximum of 100 characters. For example: Clean build A PRECONDITION_FAILED will be returned upon creating a new step if it shares its name and dimension_value with an existing step. If two steps represent a similar action, but have different dimension values, they should share the same name. For instance, if the same set of tests is run on two different platforms, the two steps should have the same name. - In response: always set - In create request: always set - In update request: never set|
|» outcome|body|[Outcome](#schemaoutcome)|false|Classification of the result, for example into SUCCESS or FAILURE - In response: present if set by create/update request - In create/update request: optional|
|» runDuration|body|[Duration](#schemaduration)|false|How long it took for this step to run. If unset, this is set to the difference between creation_time and completion_time when the step is set to the COMPLETE state. In some cases, it is appropriate to set this value separately: For instance, if a step is created, but the operation it represents is queued for a few minutes before it executes, it would be appropriate not to include the time spent queued in its run_duration. PRECONDITION_FAILED will be returned if one attempts to set a run_duration on a step which already has this field set. - In response: present if previously set; always present on COMPLETE step - In create request: optional - In update request: optional|
|» state|body|string|false|The initial state is IN_PROGRESS. The only legal state transitions are * IN_PROGRESS -> COMPLETE A PRECONDITION_FAILED will be returned if an invalid transition is requested. It is valid to create Step with a state set to COMPLETE. The state can only be set to COMPLETE once. A PRECONDITION_FAILED will be returned if the state is set to COMPLETE multiple times. - In response: always set - In create/update request: optional|
|» stepId|body|string|false|A unique identifier within a Execution for this Step. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response: always set - In create/update request: never set|
|» testExecutionStep|body|[TestExecutionStep](#schematestexecutionstep)|false|An execution of a test runner.|
|» toolExecutionStep|body|[ToolExecutionStep](#schematoolexecutionstep)|false|An execution of a tool (used for steps we don't explicitly support).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|unknownState|
|» state|pending|
|» state|inProgress|
|» state|complete|

> Example responses

> 200 Response

```json
{
  "completionTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "creationTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "description": "string",
  "deviceUsageDuration": {
    "nanos": 0,
    "seconds": "string"
  },
  "dimensionValue": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "hasImages": true,
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "multiStep": {
    "multistepNumber": 0,
    "primaryStep": {
      "individualOutcome": [
        {
          "multistepNumber": 0,
          "outcomeSummary": "unset",
          "runDuration": {
            "nanos": 0,
            "seconds": "string"
          },
          "stepId": "string"
        }
      ],
      "rollUp": "unset"
    },
    "primaryStepId": "string"
  },
  "name": "string",
  "outcome": {
    "failureDetail": {
      "crashed": true,
      "deviceOutOfMemory": true,
      "failedRoboscript": true,
      "notInstalled": true,
      "otherNativeCrash": true,
      "timedOut": true,
      "unableToCrawl": true
    },
    "inconclusiveDetail": {
      "abortedByUser": true,
      "hasErrorLogs": true,
      "infrastructureFailure": true
    },
    "skippedDetail": {
      "incompatibleAppVersion": true,
      "incompatibleArchitecture": true,
      "incompatibleDevice": true
    },
    "successDetail": {
      "otherNativeCrash": true
    },
    "summary": "unset"
  },
  "runDuration": {
    "nanos": 0,
    "seconds": "string"
  },
  "state": "unknownState",
  "stepId": "string",
  "testExecutionStep": {
    "testIssues": [
      {
        "category": "unspecifiedCategory",
        "errorMessage": "string",
        "severity": "unspecifiedSeverity",
        "stackTrace": {
          "exception": "string"
        },
        "type": "unspecifiedType",
        "warning": {
          "typeUrl": "string",
          "value": "string"
        }
      }
    ],
    "testSuiteOverviews": [
      {
        "elapsedTime": {
          "nanos": 0,
          "seconds": "string"
        },
        "errorCount": 0,
        "failureCount": 0,
        "flakyCount": 0,
        "name": "string",
        "skippedCount": 0,
        "totalCount": 0,
        "xmlSource": {
          "fileUri": "string"
        }
      }
    ],
    "testTiming": {
      "testProcessDuration": {
        "nanos": 0,
        "seconds": "string"
      }
    },
    "toolExecution": {
      "commandLineArguments": [
        "string"
      ],
      "exitCode": {
        "number": 0
      },
      "toolLogs": [
        {
          "fileUri": "string"
        }
      ],
      "toolOutputs": [
        {
          "creationTime": {
            "nanos": 0,
            "seconds": "string"
          },
          "output": {
            "fileUri": "string"
          },
          "testCase": {
            "className": "string",
            "name": "string",
            "testSuiteName": "string"
          }
        }
      ]
    }
  },
  "toolExecutionStep": {
    "toolExecution": {
      "commandLineArguments": [
        "string"
      ],
      "exitCode": {
        "number": 0
      },
      "toolLogs": [
        {
          "fileUri": "string"
        }
      ],
      "toolOutputs": [
        {
          "creationTime": {
            "nanos": 0,
            "seconds": "string"
          },
          "output": {
            "fileUri": "string"
          },
          "testCase": {
            "className": "string",
            "name": "string",
            "testSuiteName": "string"
          }
        }
      ]
    }
  }
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Step](#schemastep)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.steps.get

<a id="opIdtoolresults.projects.histories.executions.steps.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions/string/steps/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}`

Gets a Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist

<h3 id="toolresultsprojectshistoriesexecutionsstepsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A Project id. Required.|
|historyId|path|string|true|A History id. Required.|
|executionId|path|string|true|A Execution id. Required.|
|stepId|path|string|true|A Step id. Required.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "completionTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "creationTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "description": "string",
  "deviceUsageDuration": {
    "nanos": 0,
    "seconds": "string"
  },
  "dimensionValue": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "hasImages": true,
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "multiStep": {
    "multistepNumber": 0,
    "primaryStep": {
      "individualOutcome": [
        {
          "multistepNumber": 0,
          "outcomeSummary": "unset",
          "runDuration": {
            "nanos": 0,
            "seconds": "string"
          },
          "stepId": "string"
        }
      ],
      "rollUp": "unset"
    },
    "primaryStepId": "string"
  },
  "name": "string",
  "outcome": {
    "failureDetail": {
      "crashed": true,
      "deviceOutOfMemory": true,
      "failedRoboscript": true,
      "notInstalled": true,
      "otherNativeCrash": true,
      "timedOut": true,
      "unableToCrawl": true
    },
    "inconclusiveDetail": {
      "abortedByUser": true,
      "hasErrorLogs": true,
      "infrastructureFailure": true
    },
    "skippedDetail": {
      "incompatibleAppVersion": true,
      "incompatibleArchitecture": true,
      "incompatibleDevice": true
    },
    "successDetail": {
      "otherNativeCrash": true
    },
    "summary": "unset"
  },
  "runDuration": {
    "nanos": 0,
    "seconds": "string"
  },
  "state": "unknownState",
  "stepId": "string",
  "testExecutionStep": {
    "testIssues": [
      {
        "category": "unspecifiedCategory",
        "errorMessage": "string",
        "severity": "unspecifiedSeverity",
        "stackTrace": {
          "exception": "string"
        },
        "type": "unspecifiedType",
        "warning": {
          "typeUrl": "string",
          "value": "string"
        }
      }
    ],
    "testSuiteOverviews": [
      {
        "elapsedTime": {
          "nanos": 0,
          "seconds": "string"
        },
        "errorCount": 0,
        "failureCount": 0,
        "flakyCount": 0,
        "name": "string",
        "skippedCount": 0,
        "totalCount": 0,
        "xmlSource": {
          "fileUri": "string"
        }
      }
    ],
    "testTiming": {
      "testProcessDuration": {
        "nanos": 0,
        "seconds": "string"
      }
    },
    "toolExecution": {
      "commandLineArguments": [
        "string"
      ],
      "exitCode": {
        "number": 0
      },
      "toolLogs": [
        {
          "fileUri": "string"
        }
      ],
      "toolOutputs": [
        {
          "creationTime": {
            "nanos": 0,
            "seconds": "string"
          },
          "output": {
            "fileUri": "string"
          },
          "testCase": {
            "className": "string",
            "name": "string",
            "testSuiteName": "string"
          }
        }
      ]
    }
  },
  "toolExecutionStep": {
    "toolExecution": {
      "commandLineArguments": [
        "string"
      ],
      "exitCode": {
        "number": 0
      },
      "toolLogs": [
        {
          "fileUri": "string"
        }
      ],
      "toolOutputs": [
        {
          "creationTime": {
            "nanos": 0,
            "seconds": "string"
          },
          "output": {
            "fileUri": "string"
          },
          "testCase": {
            "className": "string",
            "name": "string",
            "testSuiteName": "string"
          }
        }
      ]
    }
  }
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Step](#schemastep)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.steps.patch

<a id="opIdtoolresults.projects.histories.executions.steps.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions/string/steps/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "completionTime": {
      "nanos": 0,
      "seconds": "string"
    },
    "creationTime": {
      "nanos": 0,
      "seconds": "string"
    },
    "description": "string",
    "deviceUsageDuration": {
      "nanos": 0,
      "seconds": "string"
    },
    "dimensionValue": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "hasImages": true,
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "multiStep": {
      "multistepNumber": 0,
      "primaryStep": {
        "individualOutcome": [
          {
            "multistepNumber": 0,
            "outcomeSummary": "unset",
            "runDuration": {
              "nanos": 0,
              "seconds": "string"
            },
            "stepId": "string"
          }
        ],
        "rollUp": "unset"
      },
      "primaryStepId": "string"
    },
    "name": "string",
    "outcome": {
      "failureDetail": {
        "crashed": true,
        "deviceOutOfMemory": true,
        "failedRoboscript": true,
        "notInstalled": true,
        "otherNativeCrash": true,
        "timedOut": true,
        "unableToCrawl": true
      },
      "inconclusiveDetail": {
        "abortedByUser": true,
        "hasErrorLogs": true,
        "infrastructureFailure": true
      },
      "skippedDetail": {
        "incompatibleAppVersion": true,
        "incompatibleArchitecture": true,
        "incompatibleDevice": true
      },
      "successDetail": {
        "otherNativeCrash": true
      },
      "summary": "unset"
    },
    "runDuration": {
      "nanos": 0,
      "seconds": "string"
    },
    "state": "unknownState",
    "stepId": "string",
    "testExecutionStep": {
      "testIssues": [
        {
          "category": "unspecifiedCategory",
          "errorMessage": "string",
          "severity": "unspecifiedSeverity",
          "stackTrace": {
            "exception": "string"
          },
          "type": "unspecifiedType",
          "warning": {
            "typeUrl": "string",
            "value": "string"
          }
        }
      ],
      "testSuiteOverviews": [
        {
          "elapsedTime": {
            "nanos": 0,
            "seconds": "string"
          },
          "errorCount": 0,
          "failureCount": 0,
          "flakyCount": 0,
          "name": "string",
          "skippedCount": 0,
          "totalCount": 0,
          "xmlSource": {
            "fileUri": "string"
          }
        }
      ],
      "testTiming": {
        "testProcessDuration": {
          "nanos": 0,
          "seconds": "string"
        }
      },
      "toolExecution": {
        "commandLineArguments": [
          "string"
        ],
        "exitCode": {
          "number": 0
        },
        "toolLogs": [
          {
            "fileUri": "string"
          }
        ],
        "toolOutputs": [
          {
            "creationTime": {
              "nanos": 0,
              "seconds": "string"
            },
            "output": {
              "fileUri": "string"
            },
            "testCase": {
              "className": "string",
              "name": "string",
              "testSuiteName": "string"
            }
          }
        ]
      }
    },
    "toolExecutionStep": {
      "toolExecution": {
        "commandLineArguments": [
          "string"
        ],
        "exitCode": {
          "number": 0
        },
        "toolLogs": [
          {
            "fileUri": "string"
          }
        ],
        "toolOutputs": [
          {
            "creationTime": {
              "nanos": 0,
              "seconds": "string"
            },
            "output": {
              "fileUri": "string"
            },
            "testCase": {
              "className": "string",
              "name": "string",
              "testSuiteName": "string"
            }
          }
        ]
      }
    }
  }'
```

`PATCH /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}`

Updates an existing Step with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist

> Body parameter

```json
{
  "completionTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "creationTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "description": "string",
  "deviceUsageDuration": {
    "nanos": 0,
    "seconds": "string"
  },
  "dimensionValue": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "hasImages": true,
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "multiStep": {
    "multistepNumber": 0,
    "primaryStep": {
      "individualOutcome": [
        {
          "multistepNumber": 0,
          "outcomeSummary": "unset",
          "runDuration": {
            "nanos": 0,
            "seconds": "string"
          },
          "stepId": "string"
        }
      ],
      "rollUp": "unset"
    },
    "primaryStepId": "string"
  },
  "name": "string",
  "outcome": {
    "failureDetail": {
      "crashed": true,
      "deviceOutOfMemory": true,
      "failedRoboscript": true,
      "notInstalled": true,
      "otherNativeCrash": true,
      "timedOut": true,
      "unableToCrawl": true
    },
    "inconclusiveDetail": {
      "abortedByUser": true,
      "hasErrorLogs": true,
      "infrastructureFailure": true
    },
    "skippedDetail": {
      "incompatibleAppVersion": true,
      "incompatibleArchitecture": true,
      "incompatibleDevice": true
    },
    "successDetail": {
      "otherNativeCrash": true
    },
    "summary": "unset"
  },
  "runDuration": {
    "nanos": 0,
    "seconds": "string"
  },
  "state": "unknownState",
  "stepId": "string",
  "testExecutionStep": {
    "testIssues": [
      {
        "category": "unspecifiedCategory",
        "errorMessage": "string",
        "severity": "unspecifiedSeverity",
        "stackTrace": {
          "exception": "string"
        },
        "type": "unspecifiedType",
        "warning": {
          "typeUrl": "string",
          "value": "string"
        }
      }
    ],
    "testSuiteOverviews": [
      {
        "elapsedTime": {
          "nanos": 0,
          "seconds": "string"
        },
        "errorCount": 0,
        "failureCount": 0,
        "flakyCount": 0,
        "name": "string",
        "skippedCount": 0,
        "totalCount": 0,
        "xmlSource": {
          "fileUri": "string"
        }
      }
    ],
    "testTiming": {
      "testProcessDuration": {
        "nanos": 0,
        "seconds": "string"
      }
    },
    "toolExecution": {
      "commandLineArguments": [
        "string"
      ],
      "exitCode": {
        "number": 0
      },
      "toolLogs": [
        {
          "fileUri": "string"
        }
      ],
      "toolOutputs": [
        {
          "creationTime": {
            "nanos": 0,
            "seconds": "string"
          },
          "output": {
            "fileUri": "string"
          },
          "testCase": {
            "className": "string",
            "name": "string",
            "testSuiteName": "string"
          }
        }
      ]
    }
  },
  "toolExecutionStep": {
    "toolExecution": {
      "commandLineArguments": [
        "string"
      ],
      "exitCode": {
        "number": 0
      },
      "toolLogs": [
        {
          "fileUri": "string"
        }
      ],
      "toolOutputs": [
        {
          "creationTime": {
            "nanos": 0,
            "seconds": "string"
          },
          "output": {
            "fileUri": "string"
          },
          "testCase": {
            "className": "string",
            "name": "string",
            "testSuiteName": "string"
          }
        }
      ]
    }
  }
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A Project id. Required.|
|historyId|path|string|true|A History id. Required.|
|executionId|path|string|true|A Execution id. Required.|
|stepId|path|string|true|A Step id. Required.|
|requestId|query|string|false|A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Step](#schemastep)|false|none|
|» completionTime|body|[Timestamp](#schematimestamp)|false|The time when the step status was set to complete. This value will be set automatically when state transitions to COMPLETE. - In response: set if the execution state is COMPLETE. - In create/update request: never set|
|» creationTime|body|[Timestamp](#schematimestamp)|false|The time when the step was created. - In response: always set - In create/update request: never set|
|» description|body|string|false|A description of this tool For example: mvn clean package -D skipTests=true - In response: present if set by create/update request - In create/update request: optional|
|» deviceUsageDuration|body|[Duration](#schemaduration)|false|How much the device resource is used to perform the test. This is the device usage used for billing purpose, which is different from the run_duration, for example, infrastructure failure won't be charged for device usage. PRECONDITION_FAILED will be returned if one attempts to set a device_usage on a step which already has this field set. - In response: present if previously set. - In create request: optional - In update request: optional|
|» dimensionValue|body|[[StepDimensionValueEntry](#schemastepdimensionvalueentry)]|false|If the execution containing this step has any dimension_definition set, then this field allows the child to specify the values of the dimensions. The keys must exactly match the dimension_definition of the execution. For example, if the execution has `dimension_definition = ['attempt', 'device']` then a step must define values for those dimensions, eg. `dimension_value = ['attempt': '1', 'device': 'Nexus 6']` If a step does not participate in one dimension of the matrix, the value for that dimension should be empty string. For example, if one of the tests is executed by a runner which does not support retries, the step could have `dimension_value = ['attempt': '', 'device': 'Nexus 6']` If the step does not participate in any dimensions of the matrix, it may leave dimension_value unset. A PRECONDITION_FAILED will be returned if any of the keys do not exist in the dimension_definition of the execution. A PRECONDITION_FAILED will be returned if another step in this execution already has the same name and dimension_value, but differs on other data fields, for example, step field is different. A PRECONDITION_FAILED will be returned if dimension_value is set, and there is a dimension_definition in the execution which is not specified as one of the keys. - In response: present if set by create - In create request: optional - In update request: never set|
|» hasImages|body|boolean|false|Whether any of the outputs of this step are images whose thumbnails can be fetched with ListThumbnails. - In response: always set - In create/update request: never set|
|» labels|body|[[StepLabelsEntry](#schemasteplabelsentry)]|false|Arbitrary user-supplied key/value pairs that are associated with the step. Users are responsible for managing the key namespace such that keys don't accidentally collide. An INVALID_ARGUMENT will be returned if the number of labels exceeds 100 or if the length of any of the keys or values exceeds 100 characters. - In response: always set - In create request: optional - In update request: optional; any new key/value pair will be added to the map, and any new value for an existing key will update that key's value|
|» multiStep|body|[MultiStep](#schemamultistep)|false|Details when multiple steps are run with the same configuration as a group. These details can be used identify which group this step is part of. It also identifies the groups 'primary step' which indexes all the group members. - In response: present if previously set. - In create request: optional, set iff this step was performed more than once. - In update request: optional|
|» name|body|string|false|A short human-readable name to display in the UI. Maximum of 100 characters. For example: Clean build A PRECONDITION_FAILED will be returned upon creating a new step if it shares its name and dimension_value with an existing step. If two steps represent a similar action, but have different dimension values, they should share the same name. For instance, if the same set of tests is run on two different platforms, the two steps should have the same name. - In response: always set - In create request: always set - In update request: never set|
|» outcome|body|[Outcome](#schemaoutcome)|false|Classification of the result, for example into SUCCESS or FAILURE - In response: present if set by create/update request - In create/update request: optional|
|» runDuration|body|[Duration](#schemaduration)|false|How long it took for this step to run. If unset, this is set to the difference between creation_time and completion_time when the step is set to the COMPLETE state. In some cases, it is appropriate to set this value separately: For instance, if a step is created, but the operation it represents is queued for a few minutes before it executes, it would be appropriate not to include the time spent queued in its run_duration. PRECONDITION_FAILED will be returned if one attempts to set a run_duration on a step which already has this field set. - In response: present if previously set; always present on COMPLETE step - In create request: optional - In update request: optional|
|» state|body|string|false|The initial state is IN_PROGRESS. The only legal state transitions are * IN_PROGRESS -> COMPLETE A PRECONDITION_FAILED will be returned if an invalid transition is requested. It is valid to create Step with a state set to COMPLETE. The state can only be set to COMPLETE once. A PRECONDITION_FAILED will be returned if the state is set to COMPLETE multiple times. - In response: always set - In create/update request: optional|
|» stepId|body|string|false|A unique identifier within a Execution for this Step. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response: always set - In create/update request: never set|
|» testExecutionStep|body|[TestExecutionStep](#schematestexecutionstep)|false|An execution of a test runner.|
|» toolExecutionStep|body|[ToolExecutionStep](#schematoolexecutionstep)|false|An execution of a tool (used for steps we don't explicitly support).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|unknownState|
|» state|pending|
|» state|inProgress|
|» state|complete|

> Example responses

> 200 Response

```json
{
  "completionTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "creationTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "description": "string",
  "deviceUsageDuration": {
    "nanos": 0,
    "seconds": "string"
  },
  "dimensionValue": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "hasImages": true,
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "multiStep": {
    "multistepNumber": 0,
    "primaryStep": {
      "individualOutcome": [
        {
          "multistepNumber": 0,
          "outcomeSummary": "unset",
          "runDuration": {
            "nanos": 0,
            "seconds": "string"
          },
          "stepId": "string"
        }
      ],
      "rollUp": "unset"
    },
    "primaryStepId": "string"
  },
  "name": "string",
  "outcome": {
    "failureDetail": {
      "crashed": true,
      "deviceOutOfMemory": true,
      "failedRoboscript": true,
      "notInstalled": true,
      "otherNativeCrash": true,
      "timedOut": true,
      "unableToCrawl": true
    },
    "inconclusiveDetail": {
      "abortedByUser": true,
      "hasErrorLogs": true,
      "infrastructureFailure": true
    },
    "skippedDetail": {
      "incompatibleAppVersion": true,
      "incompatibleArchitecture": true,
      "incompatibleDevice": true
    },
    "successDetail": {
      "otherNativeCrash": true
    },
    "summary": "unset"
  },
  "runDuration": {
    "nanos": 0,
    "seconds": "string"
  },
  "state": "unknownState",
  "stepId": "string",
  "testExecutionStep": {
    "testIssues": [
      {
        "category": "unspecifiedCategory",
        "errorMessage": "string",
        "severity": "unspecifiedSeverity",
        "stackTrace": {
          "exception": "string"
        },
        "type": "unspecifiedType",
        "warning": {
          "typeUrl": "string",
          "value": "string"
        }
      }
    ],
    "testSuiteOverviews": [
      {
        "elapsedTime": {
          "nanos": 0,
          "seconds": "string"
        },
        "errorCount": 0,
        "failureCount": 0,
        "flakyCount": 0,
        "name": "string",
        "skippedCount": 0,
        "totalCount": 0,
        "xmlSource": {
          "fileUri": "string"
        }
      }
    ],
    "testTiming": {
      "testProcessDuration": {
        "nanos": 0,
        "seconds": "string"
      }
    },
    "toolExecution": {
      "commandLineArguments": [
        "string"
      ],
      "exitCode": {
        "number": 0
      },
      "toolLogs": [
        {
          "fileUri": "string"
        }
      ],
      "toolOutputs": [
        {
          "creationTime": {
            "nanos": 0,
            "seconds": "string"
          },
          "output": {
            "fileUri": "string"
          },
          "testCase": {
            "className": "string",
            "name": "string",
            "testSuiteName": "string"
          }
        }
      ]
    }
  },
  "toolExecutionStep": {
    "toolExecution": {
      "commandLineArguments": [
        "string"
      ],
      "exitCode": {
        "number": 0
      },
      "toolLogs": [
        {
          "fileUri": "string"
        }
      ],
      "toolOutputs": [
        {
          "creationTime": {
            "nanos": 0,
            "seconds": "string"
          },
          "output": {
            "fileUri": "string"
          },
          "testCase": {
            "className": "string",
            "name": "string",
            "testSuiteName": "string"
          }
        }
      ]
    }
  }
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Step](#schemastep)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.steps.getPerfMetricsSummary

<a id="opIdtoolresults.projects.histories.executions.steps.getPerfMetricsSummary"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions/string/steps/string/perfMetricsSummary \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary`

Retrieves a PerfMetricsSummary. May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist

<h3 id="toolresultsprojectshistoriesexecutionsstepsgetperfmetricssummary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The cloud project|
|historyId|path|string|true|A tool results history ID.|
|executionId|path|string|true|A tool results execution ID.|
|stepId|path|string|true|A tool results step ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "appStartTime": {
    "fullyDrawnTime": {
      "nanos": 0,
      "seconds": "string"
    },
    "initialDisplayTime": {
      "nanos": 0,
      "seconds": "string"
    }
  },
  "executionId": "string",
  "graphicsStats": {
    "buckets": [
      {
        "frameCount": "string",
        "renderMillis": "string"
      }
    ],
    "highInputLatencyCount": "string",
    "jankyFrames": "string",
    "missedVsyncCount": "string",
    "p50Millis": "string",
    "p90Millis": "string",
    "p95Millis": "string",
    "p99Millis": "string",
    "slowBitmapUploadCount": "string",
    "slowDrawCount": "string",
    "slowUiThreadCount": "string",
    "totalFrames": "string"
  },
  "historyId": "string",
  "perfEnvironment": {
    "cpuInfo": {
      "cpuProcessor": "string",
      "cpuSpeedInGhz": 0,
      "numberOfCores": 0
    },
    "memoryInfo": {
      "memoryCapInKibibyte": "string",
      "memoryTotalInKibibyte": "string"
    }
  },
  "perfMetrics": [
    "perfMetricTypeUnspecified"
  ],
  "projectId": "string",
  "stepId": "string"
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepsgetperfmetricssummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PerfMetricsSummary](#schemaperfmetricssummary)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.steps.perfMetricsSummary.create

<a id="opIdtoolresults.projects.histories.executions.steps.perfMetricsSummary.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions/string/steps/string/perfMetricsSummary \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "appStartTime": {
      "fullyDrawnTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "initialDisplayTime": {
        "nanos": 0,
        "seconds": "string"
      }
    },
    "executionId": "string",
    "graphicsStats": {
      "buckets": [
        {
          "frameCount": "string",
          "renderMillis": "string"
        }
      ],
      "highInputLatencyCount": "string",
      "jankyFrames": "string",
      "missedVsyncCount": "string",
      "p50Millis": "string",
      "p90Millis": "string",
      "p95Millis": "string",
      "p99Millis": "string",
      "slowBitmapUploadCount": "string",
      "slowDrawCount": "string",
      "slowUiThreadCount": "string",
      "totalFrames": "string"
    },
    "historyId": "string",
    "perfEnvironment": {
      "cpuInfo": {
        "cpuProcessor": "string",
        "cpuSpeedInGhz": 0,
        "numberOfCores": 0
      },
      "memoryInfo": {
        "memoryCapInKibibyte": "string",
        "memoryTotalInKibibyte": "string"
      }
    },
    "perfMetrics": [
      "perfMetricTypeUnspecified"
    ],
    "projectId": "string",
    "stepId": "string"
  }'
```

`POST /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary`

Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created. May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist

> Body parameter

```json
{
  "appStartTime": {
    "fullyDrawnTime": {
      "nanos": 0,
      "seconds": "string"
    },
    "initialDisplayTime": {
      "nanos": 0,
      "seconds": "string"
    }
  },
  "executionId": "string",
  "graphicsStats": {
    "buckets": [
      {
        "frameCount": "string",
        "renderMillis": "string"
      }
    ],
    "highInputLatencyCount": "string",
    "jankyFrames": "string",
    "missedVsyncCount": "string",
    "p50Millis": "string",
    "p90Millis": "string",
    "p95Millis": "string",
    "p99Millis": "string",
    "slowBitmapUploadCount": "string",
    "slowDrawCount": "string",
    "slowUiThreadCount": "string",
    "totalFrames": "string"
  },
  "historyId": "string",
  "perfEnvironment": {
    "cpuInfo": {
      "cpuProcessor": "string",
      "cpuSpeedInGhz": 0,
      "numberOfCores": 0
    },
    "memoryInfo": {
      "memoryCapInKibibyte": "string",
      "memoryTotalInKibibyte": "string"
    }
  },
  "perfMetrics": [
    "perfMetricTypeUnspecified"
  ],
  "projectId": "string",
  "stepId": "string"
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepsperfmetricssummarycreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The cloud project|
|historyId|path|string|true|A tool results history ID.|
|executionId|path|string|true|A tool results execution ID.|
|stepId|path|string|true|A tool results step ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[PerfMetricsSummary](#schemaperfmetricssummary)|false|none|
|» appStartTime|body|[AppStartTime](#schemaappstarttime)|false|none|
|» executionId|body|string|false|A tool results execution ID. @OutputOnly|
|» graphicsStats|body|[GraphicsStats](#schemagraphicsstats)|false|Graphics statistics for the entire run. Statistics are reset at the beginning of the run and collected at the end of the run.|
|» historyId|body|string|false|A tool results history ID. @OutputOnly|
|» perfEnvironment|body|[PerfEnvironment](#schemaperfenvironment)|false|Describes the environment in which the performance metrics were collected|
|» perfMetrics|body|[string]|false|Set of resource collected|
|» projectId|body|string|false|The cloud project @OutputOnly|
|» stepId|body|string|false|A tool results step ID. @OutputOnly|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» perfMetrics|perfMetricTypeUnspecified|
|» perfMetrics|memory|
|» perfMetrics|cpu|
|» perfMetrics|network|
|» perfMetrics|graphics|

> Example responses

> 200 Response

```json
{
  "appStartTime": {
    "fullyDrawnTime": {
      "nanos": 0,
      "seconds": "string"
    },
    "initialDisplayTime": {
      "nanos": 0,
      "seconds": "string"
    }
  },
  "executionId": "string",
  "graphicsStats": {
    "buckets": [
      {
        "frameCount": "string",
        "renderMillis": "string"
      }
    ],
    "highInputLatencyCount": "string",
    "jankyFrames": "string",
    "missedVsyncCount": "string",
    "p50Millis": "string",
    "p90Millis": "string",
    "p95Millis": "string",
    "p99Millis": "string",
    "slowBitmapUploadCount": "string",
    "slowDrawCount": "string",
    "slowUiThreadCount": "string",
    "totalFrames": "string"
  },
  "historyId": "string",
  "perfEnvironment": {
    "cpuInfo": {
      "cpuProcessor": "string",
      "cpuSpeedInGhz": 0,
      "numberOfCores": 0
    },
    "memoryInfo": {
      "memoryCapInKibibyte": "string",
      "memoryTotalInKibibyte": "string"
    }
  },
  "perfMetrics": [
    "perfMetricTypeUnspecified"
  ],
  "projectId": "string",
  "stepId": "string"
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepsperfmetricssummarycreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PerfMetricsSummary](#schemaperfmetricssummary)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.steps.perfSampleSeries.list

<a id="opIdtoolresults.projects.histories.executions.steps.perfSampleSeries.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions/string/steps/string/perfSampleSeries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries`

Lists PerfSampleSeries for a given Step. The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids. May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist

<h3 id="toolresultsprojectshistoriesexecutionsstepsperfsampleserieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The cloud project|
|historyId|path|string|true|A tool results history ID.|
|executionId|path|string|true|A tool results execution ID.|
|stepId|path|string|true|A tool results step ID.|
|filter|query|[string]|false|Specify one or more PerfMetricType values such as CPU to filter the result|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|perfMetricTypeUnspecified|
|filter|memory|
|filter|cpu|
|filter|network|
|filter|graphics|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "perfSampleSeries": [
    {
      "basicPerfSampleSeries": {
        "perfMetricType": "perfMetricTypeUnspecified",
        "perfUnit": "perfUnitUnspecified",
        "sampleSeriesLabel": "sampleSeriesTypeUnspecified"
      },
      "executionId": "string",
      "historyId": "string",
      "projectId": "string",
      "sampleSeriesId": "string",
      "stepId": "string"
    }
  ]
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepsperfsampleserieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPerfSampleSeriesResponse](#schemalistperfsampleseriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.steps.perfSampleSeries.create

<a id="opIdtoolresults.projects.histories.executions.steps.perfSampleSeries.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions/string/steps/string/perfSampleSeries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "basicPerfSampleSeries": {
      "perfMetricType": "perfMetricTypeUnspecified",
      "perfUnit": "perfUnitUnspecified",
      "sampleSeriesLabel": "sampleSeriesTypeUnspecified"
    },
    "executionId": "string",
    "historyId": "string",
    "projectId": "string",
    "sampleSeriesId": "string",
    "stepId": "string"
  }'
```

`POST /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries`

Creates a PerfSampleSeries. May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist

> Body parameter

```json
{
  "basicPerfSampleSeries": {
    "perfMetricType": "perfMetricTypeUnspecified",
    "perfUnit": "perfUnitUnspecified",
    "sampleSeriesLabel": "sampleSeriesTypeUnspecified"
  },
  "executionId": "string",
  "historyId": "string",
  "projectId": "string",
  "sampleSeriesId": "string",
  "stepId": "string"
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepsperfsampleseriescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The cloud project|
|historyId|path|string|true|A tool results history ID.|
|executionId|path|string|true|A tool results execution ID.|
|stepId|path|string|true|A tool results step ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[PerfSampleSeries](#schemaperfsampleseries)|false|none|
|» basicPerfSampleSeries|body|[BasicPerfSampleSeries](#schemabasicperfsampleseries)|false|Basic series represented by a line chart|
|» executionId|body|string|false|A tool results execution ID. @OutputOnly|
|» historyId|body|string|false|A tool results history ID. @OutputOnly|
|» projectId|body|string|false|The cloud project @OutputOnly|
|» sampleSeriesId|body|string|false|A sample series id @OutputOnly|
|» stepId|body|string|false|A tool results step ID. @OutputOnly|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "basicPerfSampleSeries": {
    "perfMetricType": "perfMetricTypeUnspecified",
    "perfUnit": "perfUnitUnspecified",
    "sampleSeriesLabel": "sampleSeriesTypeUnspecified"
  },
  "executionId": "string",
  "historyId": "string",
  "projectId": "string",
  "sampleSeriesId": "string",
  "stepId": "string"
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepsperfsampleseriescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PerfSampleSeries](#schemaperfsampleseries)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.steps.perfSampleSeries.get

<a id="opIdtoolresults.projects.histories.executions.steps.perfSampleSeries.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions/string/steps/string/perfSampleSeries/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}`

Gets a PerfSampleSeries. May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist

<h3 id="toolresultsprojectshistoriesexecutionsstepsperfsampleseriesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The cloud project|
|historyId|path|string|true|A tool results history ID.|
|executionId|path|string|true|A tool results execution ID.|
|stepId|path|string|true|A tool results step ID.|
|sampleSeriesId|path|string|true|A sample series id|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "basicPerfSampleSeries": {
    "perfMetricType": "perfMetricTypeUnspecified",
    "perfUnit": "perfUnitUnspecified",
    "sampleSeriesLabel": "sampleSeriesTypeUnspecified"
  },
  "executionId": "string",
  "historyId": "string",
  "projectId": "string",
  "sampleSeriesId": "string",
  "stepId": "string"
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepsperfsampleseriesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PerfSampleSeries](#schemaperfsampleseries)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.steps.perfSampleSeries.samples.list

<a id="opIdtoolresults.projects.histories.executions.steps.perfSampleSeries.samples.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions/string/steps/string/perfSampleSeries/string/samples \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples`

Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist

<h3 id="toolresultsprojectshistoriesexecutionsstepsperfsampleseriessampleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The cloud project|
|historyId|path|string|true|A tool results history ID.|
|executionId|path|string|true|A tool results execution ID.|
|stepId|path|string|true|A tool results step ID.|
|sampleSeriesId|path|string|true|A sample series id|
|pageSize|query|integer|false|The default page size is 500 samples, and the maximum size is 5000. If the page_size is greater than 5000, the effective page size will be 5000|
|pageToken|query|string|false|Optional, the next_page_token returned in the previous response|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "perfSamples": [
    {
      "sampleTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "value": 0
    }
  ]
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepsperfsampleseriessampleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPerfSamplesResponse](#schemalistperfsamplesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.steps.perfSampleSeries.samples.batchCreate

<a id="opIdtoolresults.projects.histories.executions.steps.perfSampleSeries.samples.batchCreate"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions/string/steps/string/perfSampleSeries/string/samples:batchCreate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "perfSamples": [
      {
        "sampleTime": {
          "nanos": 0,
          "seconds": "string"
        },
        "value": 0
      }
    ]
  }'
```

`POST /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples:batchCreate`

Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database). May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist

> Body parameter

```json
{
  "perfSamples": [
    {
      "sampleTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "value": 0
    }
  ]
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepsperfsampleseriessamplesbatchcreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The cloud project|
|historyId|path|string|true|A tool results history ID.|
|executionId|path|string|true|A tool results execution ID.|
|stepId|path|string|true|A tool results step ID.|
|sampleSeriesId|path|string|true|A sample series id|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[BatchCreatePerfSamplesRequest](#schemabatchcreateperfsamplesrequest)|false|none|
|» perfSamples|body|[[PerfSample](#schemaperfsample)]|false|The set of PerfSamples to create should not include existing timestamps|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "perfSamples": [
    {
      "sampleTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "value": 0
    }
  ]
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepsperfsampleseriessamplesbatchcreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchCreatePerfSamplesResponse](#schemabatchcreateperfsamplesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.steps.testCases.list

<a id="opIdtoolresults.projects.histories.executions.steps.testCases.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions/string/steps/string/testCases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/testCases`

Lists Test Cases attached to a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Step does not exist

<h3 id="toolresultsprojectshistoriesexecutionsstepstestcaseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A Project id. Required.|
|historyId|path|string|true|A History id. Required.|
|executionId|path|string|true|A Execution id Required.|
|stepId|path|string|true|A Step id. Note: This step must include a TestExecutionStep. Required.|
|pageSize|query|integer|false|The maximum number of TestCases to fetch. Default value: 100. The server will use this default if the field is not set or has a value of 0. Optional.|
|pageToken|query|string|false|A continuation token to resume the query at the next item. Optional.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "testCases": [
    {
      "elapsedTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "endTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "skippedMessage": "string",
      "stackTraces": [
        {
          "exception": "string"
        }
      ],
      "startTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "status": "passed",
      "testCaseId": "string",
      "testCaseReference": {
        "className": "string",
        "name": "string",
        "testSuiteName": "string"
      },
      "toolOutputs": [
        {
          "creationTime": {
            "nanos": 0,
            "seconds": "string"
          },
          "output": {
            "fileUri": "string"
          },
          "testCase": {
            "className": "string",
            "name": "string",
            "testSuiteName": "string"
          }
        }
      ]
    }
  ]
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepstestcaseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTestCasesResponse](#schemalisttestcasesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.steps.testCases.get

<a id="opIdtoolresults.projects.histories.executions.steps.testCases.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions/string/steps/string/testCases/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/testCases/{testCaseId}`

Gets details of a Test Case for a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Test Case does not exist

<h3 id="toolresultsprojectshistoriesexecutionsstepstestcasesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A Project id. Required.|
|historyId|path|string|true|A History id. Required.|
|executionId|path|string|true|A Execution id Required.|
|stepId|path|string|true|A Step id. Note: This step must include a TestExecutionStep. Required.|
|testCaseId|path|string|true|A Test Case id. Required.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "elapsedTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "endTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "skippedMessage": "string",
  "stackTraces": [
    {
      "exception": "string"
    }
  ],
  "startTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "status": "passed",
  "testCaseId": "string",
  "testCaseReference": {
    "className": "string",
    "name": "string",
    "testSuiteName": "string"
  },
  "toolOutputs": [
    {
      "creationTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "output": {
        "fileUri": "string"
      },
      "testCase": {
        "className": "string",
        "name": "string",
        "testSuiteName": "string"
      }
    }
  ]
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepstestcasesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestCase](#schematestcase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.steps.thumbnails.list

<a id="opIdtoolresults.projects.histories.executions.steps.thumbnails.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions/string/steps/string/thumbnails \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/thumbnails`

Lists thumbnails of images attached to a step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist

<h3 id="toolresultsprojectshistoriesexecutionsstepsthumbnailslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A Project id. Required.|
|historyId|path|string|true|A History id. Required.|
|executionId|path|string|true|An Execution id. Required.|
|stepId|path|string|true|A Step id. Required.|
|pageSize|query|integer|false|The maximum number of thumbnails to fetch. Default value: 50. The server will use this default if the field is not set or has a value of 0. Optional.|
|pageToken|query|string|false|A continuation token to resume the query at the next item. Optional.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "thumbnails": [
    {
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "sourceImage": {
        "creationTime": {
          "nanos": 0,
          "seconds": "string"
        },
        "output": {
          "fileUri": "string"
        },
        "testCase": {
          "className": "string",
          "name": "string",
          "testSuiteName": "string"
        }
      },
      "stepId": "string",
      "thumbnail": {
        "contentType": "string",
        "data": "string",
        "heightPx": 0,
        "widthPx": 0
      }
    }
  ]
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepsthumbnailslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListStepThumbnailsResponse](#schemaliststepthumbnailsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.steps.publishXunitXmlFiles

<a id="opIdtoolresults.projects.histories.executions.steps.publishXunitXmlFiles"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/histories/string/executions/string/steps/string:publishXunitXmlFiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "xunitXmlFiles": [
      {
        "fileUri": "string"
      }
    ]
  }'
```

`POST /toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}:publishXunitXmlFiles`

Publish xml files to an existing Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g. try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist

> Body parameter

```json
{
  "xunitXmlFiles": [
    {
      "fileUri": "string"
    }
  ]
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepspublishxunitxmlfiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A Project id. Required.|
|historyId|path|string|true|A History id. Required.|
|executionId|path|string|true|A Execution id. Required.|
|stepId|path|string|true|A Step id. Note: This step must include a TestExecutionStep. Required.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[PublishXunitXmlFilesRequest](#schemapublishxunitxmlfilesrequest)|false|none|
|» xunitXmlFiles|body|[[FileReference](#schemafilereference)]|false|URI of the Xunit XML files to publish. The maximum size of the file this reference is pointing to is 50MB. Required.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "completionTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "creationTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "description": "string",
  "deviceUsageDuration": {
    "nanos": 0,
    "seconds": "string"
  },
  "dimensionValue": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "hasImages": true,
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "multiStep": {
    "multistepNumber": 0,
    "primaryStep": {
      "individualOutcome": [
        {
          "multistepNumber": 0,
          "outcomeSummary": "unset",
          "runDuration": {
            "nanos": 0,
            "seconds": "string"
          },
          "stepId": "string"
        }
      ],
      "rollUp": "unset"
    },
    "primaryStepId": "string"
  },
  "name": "string",
  "outcome": {
    "failureDetail": {
      "crashed": true,
      "deviceOutOfMemory": true,
      "failedRoboscript": true,
      "notInstalled": true,
      "otherNativeCrash": true,
      "timedOut": true,
      "unableToCrawl": true
    },
    "inconclusiveDetail": {
      "abortedByUser": true,
      "hasErrorLogs": true,
      "infrastructureFailure": true
    },
    "skippedDetail": {
      "incompatibleAppVersion": true,
      "incompatibleArchitecture": true,
      "incompatibleDevice": true
    },
    "successDetail": {
      "otherNativeCrash": true
    },
    "summary": "unset"
  },
  "runDuration": {
    "nanos": 0,
    "seconds": "string"
  },
  "state": "unknownState",
  "stepId": "string",
  "testExecutionStep": {
    "testIssues": [
      {
        "category": "unspecifiedCategory",
        "errorMessage": "string",
        "severity": "unspecifiedSeverity",
        "stackTrace": {
          "exception": "string"
        },
        "type": "unspecifiedType",
        "warning": {
          "typeUrl": "string",
          "value": "string"
        }
      }
    ],
    "testSuiteOverviews": [
      {
        "elapsedTime": {
          "nanos": 0,
          "seconds": "string"
        },
        "errorCount": 0,
        "failureCount": 0,
        "flakyCount": 0,
        "name": "string",
        "skippedCount": 0,
        "totalCount": 0,
        "xmlSource": {
          "fileUri": "string"
        }
      }
    ],
    "testTiming": {
      "testProcessDuration": {
        "nanos": 0,
        "seconds": "string"
      }
    },
    "toolExecution": {
      "commandLineArguments": [
        "string"
      ],
      "exitCode": {
        "number": 0
      },
      "toolLogs": [
        {
          "fileUri": "string"
        }
      ],
      "toolOutputs": [
        {
          "creationTime": {
            "nanos": 0,
            "seconds": "string"
          },
          "output": {
            "fileUri": "string"
          },
          "testCase": {
            "className": "string",
            "name": "string",
            "testSuiteName": "string"
          }
        }
      ]
    }
  },
  "toolExecutionStep": {
    "toolExecution": {
      "commandLineArguments": [
        "string"
      ],
      "exitCode": {
        "number": 0
      },
      "toolLogs": [
        {
          "fileUri": "string"
        }
      ],
      "toolOutputs": [
        {
          "creationTime": {
            "nanos": 0,
            "seconds": "string"
          },
          "output": {
            "fileUri": "string"
          },
          "testCase": {
            "className": "string",
            "name": "string",
            "testSuiteName": "string"
          }
        }
      ]
    }
  }
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepspublishxunitxmlfiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Step](#schemastep)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.getSettings

<a id="opIdtoolresults.projects.getSettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string/settings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolresults/v1beta3/projects/{projectId}/settings`

Gets the Tool Results settings for a project. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from project

<h3 id="toolresultsprojectsgetsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A Project id. Required.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "defaultBucket": "string",
  "name": "string"
}
```

<h3 id="toolresultsprojectsgetsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ProjectSettings](#schemaprojectsettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.initializeSettings

<a id="opIdtoolresults.projects.initializeSettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/projects/string:initializeSettings \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /toolresults/v1beta3/projects/{projectId}:initializeSettings`

Creates resources for settings which have not yet been set. Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days. The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details. If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created. May return any canonical error codes, including the following: - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage

<h3 id="toolresultsprojectsinitializesettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A Project id. Required.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "defaultBucket": "string",
  "name": "string"
}
```

<h3 id="toolresultsprojectsinitializesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ProjectSettings](#schemaprojectsettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## toolresults.projects.histories.executions.steps.accessibilityClusters

<a id="opIdtoolresults.projects.histories.executions.steps.accessibilityClusters"></a>

> Code samples

```bash
curl https://www.googleapis.com/toolresults/v1beta3/string:accessibilityClusters \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolresults/v1beta3/{name}:accessibilityClusters`

Lists accessibility clusters for a given Step May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if the locale format is incorrect - NOT_FOUND - if the containing Step does not exist

<h3 id="toolresultsprojectshistoriesexecutionsstepsaccessibilityclusters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|A full resource name of the step. For example, projects/my-project/histories/bh.1234567890abcdef/executions/ 1234567890123456789/steps/bs.1234567890abcdef Required.|
|locale|query|string|false|The accepted format is the canonical Unicode format with hyphen as a delimiter. Language must be lowercase, Language Script - Capitalized, Region - UPPERCASE. See http://www.unicode.org/reports/tr35/#Unicode_locale_identifier for details. Required.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "clusters": [
    {
      "category": "unknownCategory",
      "suggestions": [
        {
          "helpUrl": "string",
          "longMessage": {
            "privateDoNotAccessOrElseSafeHtmlWrappedValue": "string"
          },
          "priority": "unknownPriority",
          "pseudoResourceId": "string",
          "region": {
            "heightPx": 0,
            "leftPx": 0,
            "topPx": 0,
            "widthPx": 0
          },
          "resourceName": "string",
          "screenId": "string",
          "secondaryPriority": 0,
          "shortMessage": {
            "privateDoNotAccessOrElseSafeHtmlWrappedValue": "string"
          },
          "title": "string"
        }
      ]
    }
  ],
  "name": "string"
}
```

<h3 id="toolresultsprojectshistoriesexecutionsstepsaccessibilityclusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListStepAccessibilityClustersResponse](#schemaliststepaccessibilityclustersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_ANR">ANR</h2>
<!-- backwards compatibility -->
<a id="schemaanr"></a>
<a id="schema_ANR"></a>
<a id="tocSanr"></a>
<a id="tocsanr"></a>

```json
{
  "stackTrace": {
    "exception": "string"
  }
}
```

Additional details for an ANR crash.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stackTrace|[StackTrace](#schemastacktrace)|false|none|The stack trace of the ANR crash. Optional.|

<h2 id="tocS_AndroidAppInfo">AndroidAppInfo</h2>
<!-- backwards compatibility -->
<a id="schemaandroidappinfo"></a>
<a id="schema_AndroidAppInfo"></a>
<a id="tocSandroidappinfo"></a>
<a id="tocsandroidappinfo"></a>

```json
{
  "name": "string",
  "packageName": "string",
  "versionCode": "string",
  "versionName": "string"
}
```

Android app information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the app. Optional|
|packageName|string|false|none|The package name of the app. Required.|
|versionCode|string|false|none|The internal version code of the app. Optional.|
|versionName|string|false|none|The version name of the app. Optional.|

<h2 id="tocS_AndroidInstrumentationTest">AndroidInstrumentationTest</h2>
<!-- backwards compatibility -->
<a id="schemaandroidinstrumentationtest"></a>
<a id="schema_AndroidInstrumentationTest"></a>
<a id="tocSandroidinstrumentationtest"></a>
<a id="tocsandroidinstrumentationtest"></a>

```json
{
  "testPackageId": "string",
  "testRunnerClass": "string",
  "testTargets": [
    "string"
  ],
  "useOrchestrator": true
}
```

A test of an Android application that can control an Android component independently of its normal lifecycle. See for more information on types of Android tests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|testPackageId|string|false|none|The java package for the test to be executed. Required|
|testRunnerClass|string|false|none|The InstrumentationTestRunner class. Required|
|testTargets|[string]|false|none|Each target must be fully qualified with the package name or class name, in one of these formats: - "package package_name" - "class package_name.class_name" - "class package_name.class_name#method_name" If empty, all targets in the module will be run.|
|useOrchestrator|boolean|false|none|The flag indicates whether Android Test Orchestrator will be used to run test or not.|

<h2 id="tocS_AndroidRoboTest">AndroidRoboTest</h2>
<!-- backwards compatibility -->
<a id="schemaandroidrobotest"></a>
<a id="schema_AndroidRoboTest"></a>
<a id="tocSandroidrobotest"></a>
<a id="tocsandroidrobotest"></a>

```json
{
  "appInitialActivity": "string",
  "bootstrapPackageId": "string",
  "bootstrapRunnerClass": "string",
  "maxDepth": 0,
  "maxSteps": 0
}
```

A test of an android application that explores the application on a virtual or physical Android device, finding culprits and crashes as it goes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appInitialActivity|string|false|none|The initial activity that should be used to start the app. Optional|
|bootstrapPackageId|string|false|none|The java package for the bootstrap. Optional|
|bootstrapRunnerClass|string|false|none|The runner class for the bootstrap. Optional|
|maxDepth|integer(int32)|false|none|The max depth of the traversal stack Robo can explore. Optional|
|maxSteps|integer(int32)|false|none|The max number of steps/actions Robo can execute. Default is no limit (0). Optional|

<h2 id="tocS_AndroidTest">AndroidTest</h2>
<!-- backwards compatibility -->
<a id="schemaandroidtest"></a>
<a id="schema_AndroidTest"></a>
<a id="tocSandroidtest"></a>
<a id="tocsandroidtest"></a>

```json
{
  "androidAppInfo": {
    "name": "string",
    "packageName": "string",
    "versionCode": "string",
    "versionName": "string"
  },
  "androidInstrumentationTest": {
    "testPackageId": "string",
    "testRunnerClass": "string",
    "testTargets": [
      "string"
    ],
    "useOrchestrator": true
  },
  "androidRoboTest": {
    "appInitialActivity": "string",
    "bootstrapPackageId": "string",
    "bootstrapRunnerClass": "string",
    "maxDepth": 0,
    "maxSteps": 0
  },
  "androidTestLoop": {},
  "testTimeout": {
    "nanos": 0,
    "seconds": "string"
  }
}
```

An Android mobile test specification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidAppInfo|[AndroidAppInfo](#schemaandroidappinfo)|false|none|Information about the application under test.|
|androidInstrumentationTest|[AndroidInstrumentationTest](#schemaandroidinstrumentationtest)|false|none|An Android instrumentation test.|
|androidRoboTest|[AndroidRoboTest](#schemaandroidrobotest)|false|none|An Android robo test.|
|androidTestLoop|[AndroidTestLoop](#schemaandroidtestloop)|false|none|An Android test loop.|
|testTimeout|[Duration](#schemaduration)|false|none|Max time a test is allowed to run before it is automatically cancelled.|

<h2 id="tocS_AndroidTestLoop">AndroidTestLoop</h2>
<!-- backwards compatibility -->
<a id="schemaandroidtestloop"></a>
<a id="schema_AndroidTestLoop"></a>
<a id="tocSandroidtestloop"></a>
<a id="tocsandroidtestloop"></a>

```json
{}
```

Test Loops are tests that can be launched by the app itself, determining when to run by listening for an intent.

<h2 id="tocS_Any">Any</h2>
<!-- backwards compatibility -->
<a id="schemaany"></a>
<a id="schema_Any"></a>
<a id="tocSany"></a>
<a id="tocsany"></a>

```json
{
  "typeUrl": "string",
  "value": "string"
}
```

 `Any` contains an arbitrary serialized protocol buffer message along with a URL that describes the type of the serialized message. Protobuf library provides support to pack/unpack Any values in the form of utility functions or additional generated methods of the Any type. Example 1: Pack and unpack a message in C++. Foo foo = ...; Any any; any.PackFrom(foo); ... if (any.UnpackTo(&foo)) { ... } Example 2: Pack and unpack a message in Java. Foo foo = ...; Any any = Any.pack(foo); ... if (any.is(Foo.class)) { foo = any.unpack(Foo.class); } Example 3: Pack and unpack a message in Python. foo = Foo(...) any = Any() any.Pack(foo) ... if any.Is(Foo.DESCRIPTOR): any.Unpack(foo) ... Example 4: Pack and unpack a message in Go foo := &pb.Foo{...} any, err := ptypes.MarshalAny(foo) ... foo := &pb.Foo{} if err := ptypes.UnmarshalAny(any, foo); err != nil { ... } The pack methods provided by protobuf library will by default use 'type.googleapis.com/full.type.name' as the type URL and the unpack methods only use the fully qualified type name after the last '/' in the type URL, for example "foo.bar.com/x/y.z" will yield type name "y.z". # JSON The JSON representation of an `Any` value uses the regular representation of the deserialized, embedded message, with an additional field `@type` which contains the type URL. Example: package google.profile; message Person { string first_name = 1; string last_name = 2; } { "@type": "type.googleapis.com/google.profile.Person", "firstName": , "lastName": } If the embedded message type is well-known and has a custom JSON representation, that representation will be embedded adding a field `value` which holds the custom JSON in addition to the `@type` field. Example (for message google.protobuf.Duration): { "@type": "type.googleapis.com/google.protobuf.Duration", "value": "1.212s" }

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|typeUrl|string|false|none|A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one "/" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading "." is not accepted). In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows: * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a google.protobuf.Type value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the URL, or have them precompiled into a binary to avoid any lookup. Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics.|
|value|string(byte)|false|none|Must be a valid serialized protocol buffer of the above specified type.|

<h2 id="tocS_AppStartTime">AppStartTime</h2>
<!-- backwards compatibility -->
<a id="schemaappstarttime"></a>
<a id="schema_AppStartTime"></a>
<a id="tocSappstarttime"></a>
<a id="tocsappstarttime"></a>

```json
{
  "fullyDrawnTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "initialDisplayTime": {
    "nanos": 0,
    "seconds": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullyDrawnTime|[Duration](#schemaduration)|false|none|Optional. The time from app start to reaching the developer-reported "fully drawn" time. This is only stored if the app includes a call to Activity.reportFullyDrawn(). See https://developer.android.com/topic/performance/launch-time.html#time-full|
|initialDisplayTime|[Duration](#schemaduration)|false|none|The time from app start to the first displayed activity being drawn, as reported in Logcat. See https://developer.android.com/topic/performance/launch-time.html#time-initial|

<h2 id="tocS_AvailableDeepLinks">AvailableDeepLinks</h2>
<!-- backwards compatibility -->
<a id="schemaavailabledeeplinks"></a>
<a id="schema_AvailableDeepLinks"></a>
<a id="tocSavailabledeeplinks"></a>
<a id="tocsavailabledeeplinks"></a>

```json
{}
```

A suggestion to use deep links for a Robo run.

<h2 id="tocS_BasicPerfSampleSeries">BasicPerfSampleSeries</h2>
<!-- backwards compatibility -->
<a id="schemabasicperfsampleseries"></a>
<a id="schema_BasicPerfSampleSeries"></a>
<a id="tocSbasicperfsampleseries"></a>
<a id="tocsbasicperfsampleseries"></a>

```json
{
  "perfMetricType": "perfMetricTypeUnspecified",
  "perfUnit": "perfUnitUnspecified",
  "sampleSeriesLabel": "sampleSeriesTypeUnspecified"
}
```

Encapsulates the metadata for basic sample series represented by a line chart

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|perfMetricType|string|false|none|none|
|perfUnit|string|false|none|none|
|sampleSeriesLabel|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|perfMetricType|perfMetricTypeUnspecified|
|perfMetricType|memory|
|perfMetricType|cpu|
|perfMetricType|network|
|perfMetricType|graphics|
|perfUnit|perfUnitUnspecified|
|perfUnit|kibibyte|
|perfUnit|percent|
|perfUnit|bytesPerSecond|
|perfUnit|framesPerSecond|
|perfUnit|byte|
|sampleSeriesLabel|sampleSeriesTypeUnspecified|
|sampleSeriesLabel|memoryRssPrivate|
|sampleSeriesLabel|memoryRssShared|
|sampleSeriesLabel|memoryRssTotal|
|sampleSeriesLabel|memoryTotal|
|sampleSeriesLabel|cpuUser|
|sampleSeriesLabel|cpuKernel|
|sampleSeriesLabel|cpuTotal|
|sampleSeriesLabel|ntBytesTransferred|
|sampleSeriesLabel|ntBytesReceived|
|sampleSeriesLabel|networkSent|
|sampleSeriesLabel|networkReceived|
|sampleSeriesLabel|graphicsFrameRate|

<h2 id="tocS_BatchCreatePerfSamplesRequest">BatchCreatePerfSamplesRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreateperfsamplesrequest"></a>
<a id="schema_BatchCreatePerfSamplesRequest"></a>
<a id="tocSbatchcreateperfsamplesrequest"></a>
<a id="tocsbatchcreateperfsamplesrequest"></a>

```json
{
  "perfSamples": [
    {
      "sampleTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "value": 0
    }
  ]
}
```

The request must provide up to a maximum of 5000 samples to be created; a larger sample size will cause an INVALID_ARGUMENT error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|perfSamples|[[PerfSample](#schemaperfsample)]|false|none|The set of PerfSamples to create should not include existing timestamps|

<h2 id="tocS_BatchCreatePerfSamplesResponse">BatchCreatePerfSamplesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreateperfsamplesresponse"></a>
<a id="schema_BatchCreatePerfSamplesResponse"></a>
<a id="tocSbatchcreateperfsamplesresponse"></a>
<a id="tocsbatchcreateperfsamplesresponse"></a>

```json
{
  "perfSamples": [
    {
      "sampleTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "value": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|perfSamples|[[PerfSample](#schemaperfsample)]|false|none|none|

<h2 id="tocS_BlankScreen">BlankScreen</h2>
<!-- backwards compatibility -->
<a id="schemablankscreen"></a>
<a id="schema_BlankScreen"></a>
<a id="tocSblankscreen"></a>
<a id="tocsblankscreen"></a>

```json
{
  "screenId": "string"
}
```

A warning that Robo encountered a screen that was mostly blank; this may indicate a problem with the app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|screenId|string|false|none|The screen id of the element|

<h2 id="tocS_CPUInfo">CPUInfo</h2>
<!-- backwards compatibility -->
<a id="schemacpuinfo"></a>
<a id="schema_CPUInfo"></a>
<a id="tocScpuinfo"></a>
<a id="tocscpuinfo"></a>

```json
{
  "cpuProcessor": "string",
  "cpuSpeedInGhz": 0,
  "numberOfCores": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpuProcessor|string|false|none|description of the device processor ie '1.8 GHz hexa core 64-bit ARMv8-A'|
|cpuSpeedInGhz|number(float)|false|none|the CPU clock speed in GHz|
|numberOfCores|integer(int32)|false|none|the number of CPU cores|

<h2 id="tocS_CrashDialogError">CrashDialogError</h2>
<!-- backwards compatibility -->
<a id="schemacrashdialogerror"></a>
<a id="schema_CrashDialogError"></a>
<a id="tocScrashdialogerror"></a>
<a id="tocscrashdialogerror"></a>

```json
{
  "crashPackage": "string"
}
```

Crash dialog was detected during the test execution

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crashPackage|string|false|none|The name of the package that caused the dialog.|

<h2 id="tocS_DetectedAppSplashScreen">DetectedAppSplashScreen</h2>
<!-- backwards compatibility -->
<a id="schemadetectedappsplashscreen"></a>
<a id="schema_DetectedAppSplashScreen"></a>
<a id="tocSdetectedappsplashscreen"></a>
<a id="tocsdetectedappsplashscreen"></a>

```json
{}
```

A notification that Robo detected a splash screen provided by app (vs. Android OS splash screen).

<h2 id="tocS_DeviceOutOfMemory">DeviceOutOfMemory</h2>
<!-- backwards compatibility -->
<a id="schemadeviceoutofmemory"></a>
<a id="schema_DeviceOutOfMemory"></a>
<a id="tocSdeviceoutofmemory"></a>
<a id="tocsdeviceoutofmemory"></a>

```json
{}
```

A warning that device ran out of memory

<h2 id="tocS_Duration">Duration</h2>
<!-- backwards compatibility -->
<a id="schemaduration"></a>
<a id="schema_Duration"></a>
<a id="tocSduration"></a>
<a id="tocsduration"></a>

```json
{
  "nanos": 0,
  "seconds": "string"
}
```

 A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nanos|integer(int32)|false|none|Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 `seconds` field and a positive or negative `nanos` field. For durations of one second or more, a non-zero value for the `nanos` field must be of the same sign as the `seconds` field. Must be from -999,999,999 to +999,999,999 inclusive.|
|seconds|string(int64)|false|none|Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years|

<h2 id="tocS_EncounteredLoginScreen">EncounteredLoginScreen</h2>
<!-- backwards compatibility -->
<a id="schemaencounteredloginscreen"></a>
<a id="schema_EncounteredLoginScreen"></a>
<a id="tocSencounteredloginscreen"></a>
<a id="tocsencounteredloginscreen"></a>

```json
{
  "distinctScreens": 0,
  "screenIds": [
    "string"
  ]
}
```

Additional details about encountered login screens.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distinctScreens|integer(int32)|false|none|Number of encountered distinct login screens.|
|screenIds|[string]|false|none|Subset of login screens.|

<h2 id="tocS_EncounteredNonAndroidUiWidgetScreen">EncounteredNonAndroidUiWidgetScreen</h2>
<!-- backwards compatibility -->
<a id="schemaencounterednonandroiduiwidgetscreen"></a>
<a id="schema_EncounteredNonAndroidUiWidgetScreen"></a>
<a id="tocSencounterednonandroiduiwidgetscreen"></a>
<a id="tocsencounterednonandroiduiwidgetscreen"></a>

```json
{
  "distinctScreens": 0,
  "screenIds": [
    "string"
  ]
}
```

Additional details about encountered screens with elements that are not Android UI widgets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distinctScreens|integer(int32)|false|none|Number of encountered distinct screens with non Android UI widgets.|
|screenIds|[string]|false|none|Subset of screens which contain non Android UI widgets.|

<h2 id="tocS_Environment">Environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_Environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

```json
{
  "completionTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "creationTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "dimensionValue": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "displayName": "string",
  "environmentId": "string",
  "environmentResult": {
    "outcome": {
      "failureDetail": {
        "crashed": true,
        "deviceOutOfMemory": true,
        "failedRoboscript": true,
        "notInstalled": true,
        "otherNativeCrash": true,
        "timedOut": true,
        "unableToCrawl": true
      },
      "inconclusiveDetail": {
        "abortedByUser": true,
        "hasErrorLogs": true,
        "infrastructureFailure": true
      },
      "skippedDetail": {
        "incompatibleAppVersion": true,
        "incompatibleArchitecture": true,
        "incompatibleDevice": true
      },
      "successDetail": {
        "otherNativeCrash": true
      },
      "summary": "unset"
    },
    "state": "unknownState",
    "testSuiteOverviews": [
      {
        "elapsedTime": {
          "nanos": 0,
          "seconds": "string"
        },
        "errorCount": 0,
        "failureCount": 0,
        "flakyCount": 0,
        "name": "string",
        "skippedCount": 0,
        "totalCount": 0,
        "xmlSource": {
          "fileUri": "string"
        }
      }
    ]
  },
  "executionId": "string",
  "historyId": "string",
  "projectId": "string",
  "resultsStorage": {
    "resultsStoragePath": {
      "fileUri": "string"
    },
    "xunitXmlFile": {
      "fileUri": "string"
    }
  },
  "shardSummaries": [
    {
      "runs": [
        {}
      ],
      "shardResult": {
        "outcome": {
          "failureDetail": {
            "crashed": true,
            "deviceOutOfMemory": true,
            "failedRoboscript": true,
            "notInstalled": true,
            "otherNativeCrash": true,
            "timedOut": true,
            "unableToCrawl": true
          },
          "inconclusiveDetail": {
            "abortedByUser": true,
            "hasErrorLogs": true,
            "infrastructureFailure": true
          },
          "skippedDetail": {
            "incompatibleAppVersion": true,
            "incompatibleArchitecture": true,
            "incompatibleDevice": true
          },
          "successDetail": {
            "otherNativeCrash": true
          },
          "summary": "unset"
        },
        "state": "unknownState",
        "testSuiteOverviews": [
          {
            "elapsedTime": {
              "nanos": 0,
              "seconds": "string"
            },
            "errorCount": 0,
            "failureCount": 0,
            "flakyCount": 0,
            "name": "string",
            "skippedCount": 0,
            "totalCount": 0,
            "xmlSource": {
              "fileUri": "string"
            }
          }
        ]
      }
    }
  ]
}
```

An Environment represents the set of test runs (Steps) from the parent Execution that are configured with the same set of dimensions (Model, Version, Locale, and Orientation). Multiple such runs occur particularly because of features like sharding (splitting up a test suite to run in parallel across devices) and reruns (running a test multiple times to check for different outcomes).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completionTime|[Timestamp](#schematimestamp)|false|none|Output only. The time when the Environment status was set to complete. This value will be set automatically when state transitions to COMPLETE.|
|creationTime|[Timestamp](#schematimestamp)|false|none|Output only. The time when the Environment was created.|
|dimensionValue|[[EnvironmentDimensionValueEntry](#schemaenvironmentdimensionvalueentry)]|false|none|Dimension values describing the environment. Dimension values always consist of "Model", "Version", "Locale", and "Orientation". - In response: always set - In create request: always set - In update request: never set|
|displayName|string|false|none|A short human-readable name to display in the UI. Maximum of 100 characters. For example: Nexus 5, API 27.|
|environmentId|string|false|none|Output only. An Environment id.|
|environmentResult|[MergedResult](#schemamergedresult)|false|none|Merged result of the environment.|
|executionId|string|false|none|Output only. An Execution id.|
|historyId|string|false|none|Output only. A History id.|
|projectId|string|false|none|Output only. A Project id.|
|resultsStorage|[ResultsStorage](#schemaresultsstorage)|false|none|The location where output files are stored in the user bucket.|
|shardSummaries|[[ShardSummary](#schemashardsummary)]|false|none|Output only. Summaries of shards. Only one shard will present unless sharding feature is enabled in TestExecutionService.|

<h2 id="tocS_EnvironmentDimensionValueEntry">EnvironmentDimensionValueEntry</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentdimensionvalueentry"></a>
<a id="schema_EnvironmentDimensionValueEntry"></a>
<a id="tocSenvironmentdimensionvalueentry"></a>
<a id="tocsenvironmentdimensionvalueentry"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_Execution">Execution</h2>
<!-- backwards compatibility -->
<a id="schemaexecution"></a>
<a id="schema_Execution"></a>
<a id="tocSexecution"></a>
<a id="tocsexecution"></a>

```json
{
  "completionTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "creationTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "dimensionDefinitions": [
    {}
  ],
  "executionId": "string",
  "outcome": {
    "failureDetail": {
      "crashed": true,
      "deviceOutOfMemory": true,
      "failedRoboscript": true,
      "notInstalled": true,
      "otherNativeCrash": true,
      "timedOut": true,
      "unableToCrawl": true
    },
    "inconclusiveDetail": {
      "abortedByUser": true,
      "hasErrorLogs": true,
      "infrastructureFailure": true
    },
    "skippedDetail": {
      "incompatibleAppVersion": true,
      "incompatibleArchitecture": true,
      "incompatibleDevice": true
    },
    "successDetail": {
      "otherNativeCrash": true
    },
    "summary": "unset"
  },
  "specification": {
    "androidTest": {
      "androidAppInfo": {
        "name": "string",
        "packageName": "string",
        "versionCode": "string",
        "versionName": "string"
      },
      "androidInstrumentationTest": {
        "testPackageId": "string",
        "testRunnerClass": "string",
        "testTargets": [
          "string"
        ],
        "useOrchestrator": true
      },
      "androidRoboTest": {
        "appInitialActivity": "string",
        "bootstrapPackageId": "string",
        "bootstrapRunnerClass": "string",
        "maxDepth": 0,
        "maxSteps": 0
      },
      "androidTestLoop": {},
      "testTimeout": {
        "nanos": 0,
        "seconds": "string"
      }
    },
    "iosTest": {
      "iosAppInfo": {
        "name": "string"
      },
      "iosRoboTest": {},
      "iosTestLoop": {
        "bundleId": "string"
      },
      "iosXcTest": {
        "bundleId": "string",
        "xcodeVersion": "string"
      },
      "testTimeout": {
        "nanos": 0,
        "seconds": "string"
      }
    }
  },
  "state": "unknownState",
  "testExecutionMatrixId": "string"
}
```

An Execution represents a collection of Steps. For instance, it could represent: - a mobile test executed across a range of device configurations - a jenkins job with a build step followed by a test step The maximum size of an execution message is 1 MiB. An Execution can be updated until its state is set to COMPLETE at which point it becomes immutable. Next tag: 17

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completionTime|[Timestamp](#schematimestamp)|false|none|The time when the Execution status transitioned to COMPLETE. This value will be set automatically when state transitions to COMPLETE. - In response: set if the execution state is COMPLETE. - In create/update request: never set|
|creationTime|[Timestamp](#schematimestamp)|false|none|The time when the Execution was created. This value will be set automatically when CreateExecution is called. - In response: always set - In create/update request: never set|
|dimensionDefinitions|[[MatrixDimensionDefinition](#schemamatrixdimensiondefinition)]|false|none|The dimensions along which different steps in this execution may vary. This must remain fixed over the life of the execution. Returns INVALID_ARGUMENT if this field is set in an update request. Returns INVALID_ARGUMENT if the same name occurs in more than one dimension_definition. Returns INVALID_ARGUMENT if the size of the list is over 100. - In response: present if set by create - In create request: optional - In update request: never set|
|executionId|string|false|none|A unique identifier within a History for this Execution. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response always set - In create/update request: never set|
|outcome|[Outcome](#schemaoutcome)|false|none|Classify the result, for example into SUCCESS or FAILURE - In response: present if set by create/update request - In create/update request: optional|
|specification|[Specification](#schemaspecification)|false|none|Lightweight information about execution request. - In response: present if set by create - In create: optional - In update: optional|
|state|string|false|none|The initial state is IN_PROGRESS. The only legal state transitions is from IN_PROGRESS to COMPLETE. A PRECONDITION_FAILED will be returned if an invalid transition is requested. The state can only be set to COMPLETE once. A FAILED_PRECONDITION will be returned if the state is set to COMPLETE multiple times. If the state is set to COMPLETE, all the in-progress steps within the execution will be set as COMPLETE. If the outcome of the step is not set, the outcome will be set to INCONCLUSIVE. - In response always set - In create/update request: optional|
|testExecutionMatrixId|string|false|none|TestExecution Matrix ID that the TestExecutionService uses. - In response: present if set by create - In create: optional - In update: never set|

#### Enumerated Values

|Property|Value|
|---|---|
|state|unknownState|
|state|pending|
|state|inProgress|
|state|complete|

<h2 id="tocS_FailedToInstall">FailedToInstall</h2>
<!-- backwards compatibility -->
<a id="schemafailedtoinstall"></a>
<a id="schema_FailedToInstall"></a>
<a id="tocSfailedtoinstall"></a>
<a id="tocsfailedtoinstall"></a>

```json
{}
```

Failed to install the APK.

<h2 id="tocS_FailureDetail">FailureDetail</h2>
<!-- backwards compatibility -->
<a id="schemafailuredetail"></a>
<a id="schema_FailureDetail"></a>
<a id="tocSfailuredetail"></a>
<a id="tocsfailuredetail"></a>

```json
{
  "crashed": true,
  "deviceOutOfMemory": true,
  "failedRoboscript": true,
  "notInstalled": true,
  "otherNativeCrash": true,
  "timedOut": true,
  "unableToCrawl": true
}
```

Details for an outcome with a FAILURE outcome summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crashed|boolean|false|none|If the failure was severe because the system (app) under test crashed.|
|deviceOutOfMemory|boolean|false|none|If the device ran out of memory during a test, causing the test to crash.|
|failedRoboscript|boolean|false|none|If the Roboscript failed to complete successfully, e.g., because a Roboscript action or assertion failed or a Roboscript action could not be matched during the entire crawl.|
|notInstalled|boolean|false|none|If an app is not installed and thus no test can be run with the app. This might be caused by trying to run a test on an unsupported platform.|
|otherNativeCrash|boolean|false|none|If a native process (including any other than the app) crashed.|
|timedOut|boolean|false|none|If the test overran some time limit, and that is why it failed.|
|unableToCrawl|boolean|false|none|If the robo was unable to crawl the app; perhaps because the app did not start.|

<h2 id="tocS_FatalException">FatalException</h2>
<!-- backwards compatibility -->
<a id="schemafatalexception"></a>
<a id="schema_FatalException"></a>
<a id="tocSfatalexception"></a>
<a id="tocsfatalexception"></a>

```json
{
  "stackTrace": {
    "exception": "string"
  }
}
```

Additional details for a fatal exception.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stackTrace|[StackTrace](#schemastacktrace)|false|none|The stack trace of the fatal exception. Optional.|

<h2 id="tocS_FileReference">FileReference</h2>
<!-- backwards compatibility -->
<a id="schemafilereference"></a>
<a id="schema_FileReference"></a>
<a id="tocSfilereference"></a>
<a id="tocsfilereference"></a>

```json
{
  "fileUri": "string"
}
```

A reference to a file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileUri|string|false|none|The URI of a file stored in Google Cloud Storage. For example: http://storage.googleapis.com/mybucket/path/to/test.xml or in gsutil format: gs://mybucket/path/to/test.xml with version-specific info, gs://mybucket/path/to/test.xml#1360383693690000 An INVALID_ARGUMENT error will be returned if the URI format is not supported. - In response: always set - In create/update request: always set|

<h2 id="tocS_GraphicsStats">GraphicsStats</h2>
<!-- backwards compatibility -->
<a id="schemagraphicsstats"></a>
<a id="schema_GraphicsStats"></a>
<a id="tocSgraphicsstats"></a>
<a id="tocsgraphicsstats"></a>

```json
{
  "buckets": [
    {
      "frameCount": "string",
      "renderMillis": "string"
    }
  ],
  "highInputLatencyCount": "string",
  "jankyFrames": "string",
  "missedVsyncCount": "string",
  "p50Millis": "string",
  "p90Millis": "string",
  "p95Millis": "string",
  "p99Millis": "string",
  "slowBitmapUploadCount": "string",
  "slowDrawCount": "string",
  "slowUiThreadCount": "string",
  "totalFrames": "string"
}
```

Graphics statistics for the App. The information is collected from 'adb shell dumpsys graphicsstats'. For more info see: https://developer.android.com/training/testing/performance.html Statistics will only be present for API 23+.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buckets|[[GraphicsStatsBucket](#schemagraphicsstatsbucket)]|false|none|Histogram of frame render times. There should be 154 buckets ranging from [5ms, 6ms) to [4950ms, infinity)|
|highInputLatencyCount|string(int64)|false|none|Total "high input latency" events.|
|jankyFrames|string(int64)|false|none|Total frames with slow render time. Should be <= total_frames.|
|missedVsyncCount|string(int64)|false|none|Total "missed vsync" events.|
|p50Millis|string(int64)|false|none|50th percentile frame render time in milliseconds.|
|p90Millis|string(int64)|false|none|90th percentile frame render time in milliseconds.|
|p95Millis|string(int64)|false|none|95th percentile frame render time in milliseconds.|
|p99Millis|string(int64)|false|none|99th percentile frame render time in milliseconds.|
|slowBitmapUploadCount|string(int64)|false|none|Total "slow bitmap upload" events.|
|slowDrawCount|string(int64)|false|none|Total "slow draw" events.|
|slowUiThreadCount|string(int64)|false|none|Total "slow UI thread" events.|
|totalFrames|string(int64)|false|none|Total frames rendered by package.|

<h2 id="tocS_GraphicsStatsBucket">GraphicsStatsBucket</h2>
<!-- backwards compatibility -->
<a id="schemagraphicsstatsbucket"></a>
<a id="schema_GraphicsStatsBucket"></a>
<a id="tocSgraphicsstatsbucket"></a>
<a id="tocsgraphicsstatsbucket"></a>

```json
{
  "frameCount": "string",
  "renderMillis": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frameCount|string(int64)|false|none|Number of frames in the bucket.|
|renderMillis|string(int64)|false|none|Lower bound of render time in milliseconds.|

<h2 id="tocS_History">History</h2>
<!-- backwards compatibility -->
<a id="schemahistory"></a>
<a id="schema_History"></a>
<a id="tocShistory"></a>
<a id="tocshistory"></a>

```json
{
  "displayName": "string",
  "historyId": "string",
  "name": "string",
  "testPlatform": "unknownPlatform"
}
```

A History represents a sorted list of Executions ordered by the start_timestamp_millis field (descending). It can be used to group all the Executions of a continuous build. Note that the ordering only operates on one-dimension. If a repository has multiple branches, it means that multiple histories will need to be used in order to order Executions per branch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|A short human-readable (plain text) name to display in the UI. Maximum of 100 characters. - In response: present if set during create. - In create request: optional|
|historyId|string|false|none|A unique identifier within a project for this History. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response always set - In create request: never set|
|name|string|false|none|A name to uniquely identify a history within a project. Maximum of 200 characters. - In response always set - In create request: always set|
|testPlatform|string|false|none|The platform of the test history. - In response: always set. Returns the platform of the last execution if unknown.|

#### Enumerated Values

|Property|Value|
|---|---|
|testPlatform|unknownPlatform|
|testPlatform|android|
|testPlatform|ios|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "sourceImage": {
    "creationTime": {
      "nanos": 0,
      "seconds": "string"
    },
    "output": {
      "fileUri": "string"
    },
    "testCase": {
      "className": "string",
      "name": "string",
      "testSuiteName": "string"
    }
  },
  "stepId": "string",
  "thumbnail": {
    "contentType": "string",
    "data": "string",
    "heightPx": 0,
    "widthPx": 0
  }
}
```

An image, with a link to the main image and a thumbnail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Status](#schemastatus)|false|none|An error explaining why the thumbnail could not be rendered.|
|sourceImage|[ToolOutputReference](#schematooloutputreference)|false|none|A reference to the full-size, original image. This is the same as the tool_outputs entry for the image under its Step. Always set.|
|stepId|string|false|none|The step to which the image is attached. Always set.|
|thumbnail|[Thumbnail](#schemathumbnail)|false|none|The thumbnail.|

<h2 id="tocS_InAppPurchasesFound">InAppPurchasesFound</h2>
<!-- backwards compatibility -->
<a id="schemainapppurchasesfound"></a>
<a id="schema_InAppPurchasesFound"></a>
<a id="tocSinapppurchasesfound"></a>
<a id="tocsinapppurchasesfound"></a>

```json
{
  "inAppPurchasesFlowsExplored": 0,
  "inAppPurchasesFlowsStarted": 0
}
```

Additional details of in-app purchases encountered during the crawl.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inAppPurchasesFlowsExplored|integer(int32)|false|none|The total number of in-app purchases flows explored: how many times the robo tries to buy a SKU.|
|inAppPurchasesFlowsStarted|integer(int32)|false|none|The total number of in-app purchases flows started.|

<h2 id="tocS_InconclusiveDetail">InconclusiveDetail</h2>
<!-- backwards compatibility -->
<a id="schemainconclusivedetail"></a>
<a id="schema_InconclusiveDetail"></a>
<a id="tocSinconclusivedetail"></a>
<a id="tocsinconclusivedetail"></a>

```json
{
  "abortedByUser": true,
  "hasErrorLogs": true,
  "infrastructureFailure": true
}
```

Details for an outcome with an INCONCLUSIVE outcome summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abortedByUser|boolean|false|none|If the end user aborted the test execution before a pass or fail could be determined. For example, the user pressed ctrl-c which sent a kill signal to the test runner while the test was running.|
|hasErrorLogs|boolean|false|none|If results are being provided to the user in certain cases of infrastructure failures|
|infrastructureFailure|boolean|false|none|If the test runner could not determine success or failure because the test depends on a component other than the system under test which failed. For example, a mobile test requires provisioning a device where the test executes, and that provisioning can fail.|

<h2 id="tocS_IndividualOutcome">IndividualOutcome</h2>
<!-- backwards compatibility -->
<a id="schemaindividualoutcome"></a>
<a id="schema_IndividualOutcome"></a>
<a id="tocSindividualoutcome"></a>
<a id="tocsindividualoutcome"></a>

```json
{
  "multistepNumber": 0,
  "outcomeSummary": "unset",
  "runDuration": {
    "nanos": 0,
    "seconds": "string"
  },
  "stepId": "string"
}
```

Step Id and outcome of each individual step that was run as a group with other steps with the same configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|multistepNumber|integer(int32)|false|none|Unique int given to each step. Ranges from 0(inclusive) to total number of steps(exclusive). The primary step is 0.|
|outcomeSummary|string|false|none|none|
|runDuration|[Duration](#schemaduration)|false|none|How long it took for this step to run.|
|stepId|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|outcomeSummary|unset|
|outcomeSummary|success|
|outcomeSummary|failure|
|outcomeSummary|inconclusive|
|outcomeSummary|skipped|
|outcomeSummary|flaky|

<h2 id="tocS_InsufficientCoverage">InsufficientCoverage</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientcoverage"></a>
<a id="schema_InsufficientCoverage"></a>
<a id="tocSinsufficientcoverage"></a>
<a id="tocsinsufficientcoverage"></a>

```json
{}
```

A warning that Robo did not crawl potentially important parts of the app.

<h2 id="tocS_IosAppCrashed">IosAppCrashed</h2>
<!-- backwards compatibility -->
<a id="schemaiosappcrashed"></a>
<a id="schema_IosAppCrashed"></a>
<a id="tocSiosappcrashed"></a>
<a id="tocsiosappcrashed"></a>

```json
{
  "stackTrace": {
    "exception": "string"
  }
}
```

Additional details for an iOS app crash.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stackTrace|[StackTrace](#schemastacktrace)|false|none|The stack trace, if one is available. Optional.|

<h2 id="tocS_IosAppInfo">IosAppInfo</h2>
<!-- backwards compatibility -->
<a id="schemaiosappinfo"></a>
<a id="schema_IosAppInfo"></a>
<a id="tocSiosappinfo"></a>
<a id="tocsiosappinfo"></a>

```json
{
  "name": "string"
}
```

iOS app information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the app. Required|

<h2 id="tocS_IosRoboTest">IosRoboTest</h2>
<!-- backwards compatibility -->
<a id="schemaiosrobotest"></a>
<a id="schema_IosRoboTest"></a>
<a id="tocSiosrobotest"></a>
<a id="tocsiosrobotest"></a>

```json
{}
```

A Robo test for an iOS application.

<h2 id="tocS_IosTest">IosTest</h2>
<!-- backwards compatibility -->
<a id="schemaiostest"></a>
<a id="schema_IosTest"></a>
<a id="tocSiostest"></a>
<a id="tocsiostest"></a>

```json
{
  "iosAppInfo": {
    "name": "string"
  },
  "iosRoboTest": {},
  "iosTestLoop": {
    "bundleId": "string"
  },
  "iosXcTest": {
    "bundleId": "string",
    "xcodeVersion": "string"
  },
  "testTimeout": {
    "nanos": 0,
    "seconds": "string"
  }
}
```

A iOS mobile test specification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iosAppInfo|[IosAppInfo](#schemaiosappinfo)|false|none|Information about the application under test.|
|iosRoboTest|[IosRoboTest](#schemaiosrobotest)|false|none|An iOS Robo test.|
|iosTestLoop|[IosTestLoop](#schemaiostestloop)|false|none|An iOS test loop.|
|iosXcTest|[IosXcTest](#schemaiosxctest)|false|none|An iOS XCTest.|
|testTimeout|[Duration](#schemaduration)|false|none|Max time a test is allowed to run before it is automatically cancelled.|

<h2 id="tocS_IosTestLoop">IosTestLoop</h2>
<!-- backwards compatibility -->
<a id="schemaiostestloop"></a>
<a id="schema_IosTestLoop"></a>
<a id="tocSiostestloop"></a>
<a id="tocsiostestloop"></a>

```json
{
  "bundleId": "string"
}
```

A game loop test of an iOS application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundleId|string|false|none|Bundle ID of the app.|

<h2 id="tocS_IosXcTest">IosXcTest</h2>
<!-- backwards compatibility -->
<a id="schemaiosxctest"></a>
<a id="schema_IosXcTest"></a>
<a id="tocSiosxctest"></a>
<a id="tocsiosxctest"></a>

```json
{
  "bundleId": "string",
  "xcodeVersion": "string"
}
```

A test of an iOS application that uses the XCTest framework.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundleId|string|false|none|Bundle ID of the app.|
|xcodeVersion|string|false|none|Xcode version that the test was run with.|

<h2 id="tocS_LauncherActivityNotFound">LauncherActivityNotFound</h2>
<!-- backwards compatibility -->
<a id="schemalauncheractivitynotfound"></a>
<a id="schema_LauncherActivityNotFound"></a>
<a id="tocSlauncheractivitynotfound"></a>
<a id="tocslauncheractivitynotfound"></a>

```json
{}
```

Failed to find the launcher activity of an app.

<h2 id="tocS_ListEnvironmentsResponse">ListEnvironmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistenvironmentsresponse"></a>
<a id="schema_ListEnvironmentsResponse"></a>
<a id="tocSlistenvironmentsresponse"></a>
<a id="tocslistenvironmentsresponse"></a>

```json
{
  "environments": [
    {
      "completionTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "creationTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "dimensionValue": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "displayName": "string",
      "environmentId": "string",
      "environmentResult": {
        "outcome": {
          "failureDetail": {
            "crashed": true,
            "deviceOutOfMemory": true,
            "failedRoboscript": true,
            "notInstalled": true,
            "otherNativeCrash": true,
            "timedOut": true,
            "unableToCrawl": true
          },
          "inconclusiveDetail": {
            "abortedByUser": true,
            "hasErrorLogs": true,
            "infrastructureFailure": true
          },
          "skippedDetail": {
            "incompatibleAppVersion": true,
            "incompatibleArchitecture": true,
            "incompatibleDevice": true
          },
          "successDetail": {
            "otherNativeCrash": true
          },
          "summary": "unset"
        },
        "state": "unknownState",
        "testSuiteOverviews": [
          {
            "elapsedTime": {
              "nanos": 0,
              "seconds": "string"
            },
            "errorCount": 0,
            "failureCount": 0,
            "flakyCount": 0,
            "name": "string",
            "skippedCount": 0,
            "totalCount": 0,
            "xmlSource": {
              "fileUri": "string"
            }
          }
        ]
      },
      "executionId": "string",
      "historyId": "string",
      "projectId": "string",
      "resultsStorage": {
        "resultsStoragePath": {
          "fileUri": "string"
        },
        "xunitXmlFile": {
          "fileUri": "string"
        }
      },
      "shardSummaries": [
        {
          "runs": [
            {}
          ],
          "shardResult": {
            "outcome": {
              "failureDetail": {
                "crashed": true,
                "deviceOutOfMemory": true,
                "failedRoboscript": true,
                "notInstalled": true,
                "otherNativeCrash": true,
                "timedOut": true,
                "unableToCrawl": true
              },
              "inconclusiveDetail": {
                "abortedByUser": true,
                "hasErrorLogs": true,
                "infrastructureFailure": true
              },
              "skippedDetail": {
                "incompatibleAppVersion": true,
                "incompatibleArchitecture": true,
                "incompatibleDevice": true
              },
              "successDetail": {
                "otherNativeCrash": true
              },
              "summary": "unset"
            },
            "state": "unknownState",
            "testSuiteOverviews": [
              {
                "elapsedTime": {
                  "nanos": 0,
                  "seconds": "string"
                },
                "errorCount": 0,
                "failureCount": 0,
                "flakyCount": 0,
                "name": "string",
                "skippedCount": 0,
                "totalCount": 0,
                "xmlSource": {
                  "fileUri": "string"
                }
              }
            ]
          }
        }
      ]
    }
  ],
  "executionId": "string",
  "historyId": "string",
  "nextPageToken": "string",
  "projectId": "string"
}
```

Response message for EnvironmentService.ListEnvironments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environments|[[Environment](#schemaenvironment)]|false|none|Environments. Always set.|
|executionId|string|false|none|A Execution id Always set.|
|historyId|string|false|none|A History id. Always set.|
|nextPageToken|string|false|none|A continuation token to resume the query at the next item. Will only be set if there are more Environments to fetch.|
|projectId|string|false|none|A Project id. Always set.|

<h2 id="tocS_ListExecutionsResponse">ListExecutionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistexecutionsresponse"></a>
<a id="schema_ListExecutionsResponse"></a>
<a id="tocSlistexecutionsresponse"></a>
<a id="tocslistexecutionsresponse"></a>

```json
{
  "executions": [
    {
      "completionTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "creationTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "dimensionDefinitions": [
        {}
      ],
      "executionId": "string",
      "outcome": {
        "failureDetail": {
          "crashed": true,
          "deviceOutOfMemory": true,
          "failedRoboscript": true,
          "notInstalled": true,
          "otherNativeCrash": true,
          "timedOut": true,
          "unableToCrawl": true
        },
        "inconclusiveDetail": {
          "abortedByUser": true,
          "hasErrorLogs": true,
          "infrastructureFailure": true
        },
        "skippedDetail": {
          "incompatibleAppVersion": true,
          "incompatibleArchitecture": true,
          "incompatibleDevice": true
        },
        "successDetail": {
          "otherNativeCrash": true
        },
        "summary": "unset"
      },
      "specification": {
        "androidTest": {
          "androidAppInfo": {
            "name": "string",
            "packageName": "string",
            "versionCode": "string",
            "versionName": "string"
          },
          "androidInstrumentationTest": {
            "testPackageId": "string",
            "testRunnerClass": "string",
            "testTargets": [
              "string"
            ],
            "useOrchestrator": true
          },
          "androidRoboTest": {
            "appInitialActivity": "string",
            "bootstrapPackageId": "string",
            "bootstrapRunnerClass": "string",
            "maxDepth": 0,
            "maxSteps": 0
          },
          "androidTestLoop": {},
          "testTimeout": {
            "nanos": 0,
            "seconds": "string"
          }
        },
        "iosTest": {
          "iosAppInfo": {
            "name": "string"
          },
          "iosRoboTest": {},
          "iosTestLoop": {
            "bundleId": "string"
          },
          "iosXcTest": {
            "bundleId": "string",
            "xcodeVersion": "string"
          },
          "testTimeout": {
            "nanos": 0,
            "seconds": "string"
          }
        }
      },
      "state": "unknownState",
      "testExecutionMatrixId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executions|[[Execution](#schemaexecution)]|false|none|Executions. Always set.|
|nextPageToken|string|false|none|A continuation token to resume the query at the next item. Will only be set if there are more Executions to fetch.|

<h2 id="tocS_ListHistoriesResponse">ListHistoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisthistoriesresponse"></a>
<a id="schema_ListHistoriesResponse"></a>
<a id="tocSlisthistoriesresponse"></a>
<a id="tocslisthistoriesresponse"></a>

```json
{
  "histories": [
    {
      "displayName": "string",
      "historyId": "string",
      "name": "string",
      "testPlatform": "unknownPlatform"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for HistoryService.List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|histories|[[History](#schemahistory)]|false|none|Histories.|
|nextPageToken|string|false|none|A continuation token to resume the query at the next item. Will only be set if there are more histories to fetch. Tokens are valid for up to one hour from the time of the first list request. For instance, if you make a list request at 1PM and use the token from this first request 10 minutes later, the token from this second response will only be valid for 50 minutes.|

<h2 id="tocS_ListPerfSampleSeriesResponse">ListPerfSampleSeriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistperfsampleseriesresponse"></a>
<a id="schema_ListPerfSampleSeriesResponse"></a>
<a id="tocSlistperfsampleseriesresponse"></a>
<a id="tocslistperfsampleseriesresponse"></a>

```json
{
  "perfSampleSeries": [
    {
      "basicPerfSampleSeries": {
        "perfMetricType": "perfMetricTypeUnspecified",
        "perfUnit": "perfUnitUnspecified",
        "sampleSeriesLabel": "sampleSeriesTypeUnspecified"
      },
      "executionId": "string",
      "historyId": "string",
      "projectId": "string",
      "sampleSeriesId": "string",
      "stepId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|perfSampleSeries|[[PerfSampleSeries](#schemaperfsampleseries)]|false|none|The resulting PerfSampleSeries sorted by id|

<h2 id="tocS_ListPerfSamplesResponse">ListPerfSamplesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistperfsamplesresponse"></a>
<a id="schema_ListPerfSamplesResponse"></a>
<a id="tocSlistperfsamplesresponse"></a>
<a id="tocslistperfsamplesresponse"></a>

```json
{
  "nextPageToken": "string",
  "perfSamples": [
    {
      "sampleTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "value": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Optional, returned if result size exceeds the page size specified in the request (or the default page size, 500, if unspecified). It indicates the last sample timestamp to be used as page_token in subsequent request|
|perfSamples|[[PerfSample](#schemaperfsample)]|false|none|none|

<h2 id="tocS_ListScreenshotClustersResponse">ListScreenshotClustersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistscreenshotclustersresponse"></a>
<a id="schema_ListScreenshotClustersResponse"></a>
<a id="tocSlistscreenshotclustersresponse"></a>
<a id="tocslistscreenshotclustersresponse"></a>

```json
{
  "clusters": [
    {
      "activity": "string",
      "clusterId": "string",
      "keyScreen": {
        "fileReference": "string",
        "locale": "string",
        "model": "string",
        "version": "string"
      },
      "screens": [
        {
          "fileReference": "string",
          "locale": "string",
          "model": "string",
          "version": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusters|[[ScreenshotCluster](#schemascreenshotcluster)]|false|none|The set of clusters associated with an execution Always set|

<h2 id="tocS_ListStepAccessibilityClustersResponse">ListStepAccessibilityClustersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaliststepaccessibilityclustersresponse"></a>
<a id="schema_ListStepAccessibilityClustersResponse"></a>
<a id="tocSliststepaccessibilityclustersresponse"></a>
<a id="tocsliststepaccessibilityclustersresponse"></a>

```json
{
  "clusters": [
    {
      "category": "unknownCategory",
      "suggestions": [
        {
          "helpUrl": "string",
          "longMessage": {
            "privateDoNotAccessOrElseSafeHtmlWrappedValue": "string"
          },
          "priority": "unknownPriority",
          "pseudoResourceId": "string",
          "region": {
            "heightPx": 0,
            "leftPx": 0,
            "topPx": 0,
            "widthPx": 0
          },
          "resourceName": "string",
          "screenId": "string",
          "secondaryPriority": 0,
          "shortMessage": {
            "privateDoNotAccessOrElseSafeHtmlWrappedValue": "string"
          },
          "title": "string"
        }
      ]
    }
  ],
  "name": "string"
}
```

Response message for AccessibilityService.ListStepAccessibilityClusters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusters|[[SuggestionClusterProto](#schemasuggestionclusterproto)]|false|none|A sequence of accessibility suggestions, grouped into clusters. Within the sequence, clusters that belong to the same SuggestionCategory should be adjacent. Within each category, clusters should be ordered by their SuggestionPriority (ERRORs first). The categories should be ordered by their highest priority cluster.|
|name|string|false|none|A full resource name of the step. For example, projects/my-project/histories/bh.1234567890abcdef/executions/ 1234567890123456789/steps/bs.1234567890abcdef Always presents.|

<h2 id="tocS_ListStepThumbnailsResponse">ListStepThumbnailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaliststepthumbnailsresponse"></a>
<a id="schema_ListStepThumbnailsResponse"></a>
<a id="tocSliststepthumbnailsresponse"></a>
<a id="tocsliststepthumbnailsresponse"></a>

```json
{
  "nextPageToken": "string",
  "thumbnails": [
    {
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "sourceImage": {
        "creationTime": {
          "nanos": 0,
          "seconds": "string"
        },
        "output": {
          "fileUri": "string"
        },
        "testCase": {
          "className": "string",
          "name": "string",
          "testSuiteName": "string"
        }
      },
      "stepId": "string",
      "thumbnail": {
        "contentType": "string",
        "data": "string",
        "heightPx": 0,
        "widthPx": 0
      }
    }
  ]
}
```

A response containing the thumbnails in a step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A continuation token to resume the query at the next item. If set, indicates that there are more thumbnails to read, by calling list again with this value in the page_token field.|
|thumbnails|[[Image](#schemaimage)]|false|none|A list of image data. Images are returned in a deterministic order; they are ordered by these factors, in order of importance: * First, by their associated test case. Images without a test case are considered greater than images with one. * Second, by their creation time. Images without a creation time are greater than images with one. * Third, by the order in which they were added to the step (by calls to CreateStep or UpdateStep).|

<h2 id="tocS_ListStepsResponse">ListStepsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaliststepsresponse"></a>
<a id="schema_ListStepsResponse"></a>
<a id="tocSliststepsresponse"></a>
<a id="tocsliststepsresponse"></a>

```json
{
  "nextPageToken": "string",
  "steps": [
    {
      "completionTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "creationTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "description": "string",
      "deviceUsageDuration": {
        "nanos": 0,
        "seconds": "string"
      },
      "dimensionValue": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "hasImages": true,
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "multiStep": {
        "multistepNumber": 0,
        "primaryStep": {
          "individualOutcome": [
            {
              "multistepNumber": 0,
              "outcomeSummary": "unset",
              "runDuration": {
                "nanos": 0,
                "seconds": "string"
              },
              "stepId": "string"
            }
          ],
          "rollUp": "unset"
        },
        "primaryStepId": "string"
      },
      "name": "string",
      "outcome": {
        "failureDetail": {
          "crashed": true,
          "deviceOutOfMemory": true,
          "failedRoboscript": true,
          "notInstalled": true,
          "otherNativeCrash": true,
          "timedOut": true,
          "unableToCrawl": true
        },
        "inconclusiveDetail": {
          "abortedByUser": true,
          "hasErrorLogs": true,
          "infrastructureFailure": true
        },
        "skippedDetail": {
          "incompatibleAppVersion": true,
          "incompatibleArchitecture": true,
          "incompatibleDevice": true
        },
        "successDetail": {
          "otherNativeCrash": true
        },
        "summary": "unset"
      },
      "runDuration": {
        "nanos": 0,
        "seconds": "string"
      },
      "state": "unknownState",
      "stepId": "string",
      "testExecutionStep": {
        "testIssues": [
          {
            "category": "unspecifiedCategory",
            "errorMessage": "string",
            "severity": "unspecifiedSeverity",
            "stackTrace": {
              "exception": "string"
            },
            "type": "unspecifiedType",
            "warning": {
              "typeUrl": "string",
              "value": "string"
            }
          }
        ],
        "testSuiteOverviews": [
          {
            "elapsedTime": {
              "nanos": 0,
              "seconds": "string"
            },
            "errorCount": 0,
            "failureCount": 0,
            "flakyCount": 0,
            "name": "string",
            "skippedCount": 0,
            "totalCount": 0,
            "xmlSource": {
              "fileUri": "string"
            }
          }
        ],
        "testTiming": {
          "testProcessDuration": {
            "nanos": 0,
            "seconds": "string"
          }
        },
        "toolExecution": {
          "commandLineArguments": [
            "string"
          ],
          "exitCode": {
            "number": 0
          },
          "toolLogs": [
            {
              "fileUri": "string"
            }
          ],
          "toolOutputs": [
            {
              "creationTime": {
                "nanos": 0,
                "seconds": "string"
              },
              "output": {
                "fileUri": "string"
              },
              "testCase": {
                "className": "string",
                "name": "string",
                "testSuiteName": "string"
              }
            }
          ]
        }
      },
      "toolExecutionStep": {
        "toolExecution": {
          "commandLineArguments": [
            "string"
          ],
          "exitCode": {
            "number": 0
          },
          "toolLogs": [
            {
              "fileUri": "string"
            }
          ],
          "toolOutputs": [
            {
              "creationTime": {
                "nanos": 0,
                "seconds": "string"
              },
              "output": {
                "fileUri": "string"
              },
              "testCase": {
                "className": "string",
                "name": "string",
                "testSuiteName": "string"
              }
            }
          ]
        }
      }
    }
  ]
}
```

Response message for StepService.List.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A continuation token to resume the query at the next item. If set, indicates that there are more steps to read, by calling list again with this value in the page_token field.|
|steps|[[Step](#schemastep)]|false|none|Steps.|

<h2 id="tocS_ListTestCasesResponse">ListTestCasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttestcasesresponse"></a>
<a id="schema_ListTestCasesResponse"></a>
<a id="tocSlisttestcasesresponse"></a>
<a id="tocslisttestcasesresponse"></a>

```json
{
  "nextPageToken": "string",
  "testCases": [
    {
      "elapsedTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "endTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "skippedMessage": "string",
      "stackTraces": [
        {
          "exception": "string"
        }
      ],
      "startTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "status": "passed",
      "testCaseId": "string",
      "testCaseReference": {
        "className": "string",
        "name": "string",
        "testSuiteName": "string"
      },
      "toolOutputs": [
        {
          "creationTime": {
            "nanos": 0,
            "seconds": "string"
          },
          "output": {
            "fileUri": "string"
          },
          "testCase": {
            "className": "string",
            "name": "string",
            "testSuiteName": "string"
          }
        }
      ]
    }
  ]
}
```

Response message for StepService.ListTestCases.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|none|
|testCases|[[TestCase](#schematestcase)]|false|none|List of test cases.|

<h2 id="tocS_LogcatCollectionError">LogcatCollectionError</h2>
<!-- backwards compatibility -->
<a id="schemalogcatcollectionerror"></a>
<a id="schema_LogcatCollectionError"></a>
<a id="tocSlogcatcollectionerror"></a>
<a id="tocslogcatcollectionerror"></a>

```json
{}
```

A warning that there were issues in logcat collection.

<h2 id="tocS_MatrixDimensionDefinition">MatrixDimensionDefinition</h2>
<!-- backwards compatibility -->
<a id="schemamatrixdimensiondefinition"></a>
<a id="schema_MatrixDimensionDefinition"></a>
<a id="tocSmatrixdimensiondefinition"></a>
<a id="tocsmatrixdimensiondefinition"></a>

```json
{}
```

One dimension of the matrix of different runs of a step.

<h2 id="tocS_MemoryInfo">MemoryInfo</h2>
<!-- backwards compatibility -->
<a id="schemamemoryinfo"></a>
<a id="schema_MemoryInfo"></a>
<a id="tocSmemoryinfo"></a>
<a id="tocsmemoryinfo"></a>

```json
{
  "memoryCapInKibibyte": "string",
  "memoryTotalInKibibyte": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memoryCapInKibibyte|string(int64)|false|none|Maximum memory that can be allocated to the process in KiB|
|memoryTotalInKibibyte|string(int64)|false|none|Total memory available on the device in KiB|

<h2 id="tocS_MergedResult">MergedResult</h2>
<!-- backwards compatibility -->
<a id="schemamergedresult"></a>
<a id="schema_MergedResult"></a>
<a id="tocSmergedresult"></a>
<a id="tocsmergedresult"></a>

```json
{
  "outcome": {
    "failureDetail": {
      "crashed": true,
      "deviceOutOfMemory": true,
      "failedRoboscript": true,
      "notInstalled": true,
      "otherNativeCrash": true,
      "timedOut": true,
      "unableToCrawl": true
    },
    "inconclusiveDetail": {
      "abortedByUser": true,
      "hasErrorLogs": true,
      "infrastructureFailure": true
    },
    "skippedDetail": {
      "incompatibleAppVersion": true,
      "incompatibleArchitecture": true,
      "incompatibleDevice": true
    },
    "successDetail": {
      "otherNativeCrash": true
    },
    "summary": "unset"
  },
  "state": "unknownState",
  "testSuiteOverviews": [
    {
      "elapsedTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "errorCount": 0,
      "failureCount": 0,
      "flakyCount": 0,
      "name": "string",
      "skippedCount": 0,
      "totalCount": 0,
      "xmlSource": {
        "fileUri": "string"
      }
    }
  ]
}
```

Merged test result for environment. If the environment has only one step (no reruns or shards), then the merged result is the same as the step result. If the environment has multiple shards and/or reruns, then the results of shards and reruns that belong to the same environment are merged into one environment result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outcome|[Outcome](#schemaoutcome)|false|none|Outcome of the resource|
|state|string|false|none|State of the resource|
|testSuiteOverviews|[[TestSuiteOverview](#schematestsuiteoverview)]|false|none|The combined and rolled-up result of each test suite that was run as part of this environment. Combining: When the test cases from a suite are run in different steps (sharding), the results are added back together in one overview. (e.g., if shard1 has 2 failures and shard2 has 1 failure than the overview failure_count = 3). Rollup: When test cases from the same suite are run multiple times (flaky), the results are combined (e.g., if testcase1.run1 fails, testcase1.run2 passes, and both testcase2.run1 and testcase2.run2 fail then the overview flaky_count = 1 and failure_count = 1).|

#### Enumerated Values

|Property|Value|
|---|---|
|state|unknownState|
|state|pending|
|state|inProgress|
|state|complete|

<h2 id="tocS_MultiStep">MultiStep</h2>
<!-- backwards compatibility -->
<a id="schemamultistep"></a>
<a id="schema_MultiStep"></a>
<a id="tocSmultistep"></a>
<a id="tocsmultistep"></a>

```json
{
  "multistepNumber": 0,
  "primaryStep": {
    "individualOutcome": [
      {
        "multistepNumber": 0,
        "outcomeSummary": "unset",
        "runDuration": {
          "nanos": 0,
          "seconds": "string"
        },
        "stepId": "string"
      }
    ],
    "rollUp": "unset"
  },
  "primaryStepId": "string"
}
```

Details when multiple steps are run with the same configuration as a group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|multistepNumber|integer(int32)|false|none|Unique int given to each step. Ranges from 0(inclusive) to total number of steps(exclusive). The primary step is 0.|
|primaryStep|[PrimaryStep](#schemaprimarystep)|false|none|Present if it is a primary (original) step.|
|primaryStepId|string|false|none|Step Id of the primary (original) step, which might be this step.|

<h2 id="tocS_NativeCrash">NativeCrash</h2>
<!-- backwards compatibility -->
<a id="schemanativecrash"></a>
<a id="schema_NativeCrash"></a>
<a id="tocSnativecrash"></a>
<a id="tocsnativecrash"></a>

```json
{
  "stackTrace": {
    "exception": "string"
  }
}
```

Additional details for a native crash.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stackTrace|[StackTrace](#schemastacktrace)|false|none|The stack trace of the native crash. Optional.|

<h2 id="tocS_NonSdkApi">NonSdkApi</h2>
<!-- backwards compatibility -->
<a id="schemanonsdkapi"></a>
<a id="schema_NonSdkApi"></a>
<a id="tocSnonsdkapi"></a>
<a id="tocsnonsdkapi"></a>

```json
{
  "apiSignature": "string",
  "exampleStackTraces": [
    "string"
  ],
  "insights": [
    {
      "exampleTraceMessages": [
        "string"
      ],
      "matcherId": "string",
      "pendingGoogleUpdateInsight": {
        "nameOfGoogleLibrary": "string"
      },
      "upgradeInsight": {
        "packageName": "string",
        "upgradeToVersion": "string"
      }
    }
  ],
  "invocationCount": 0,
  "list": "NONE"
}
```

A non-sdk API and examples of it being called along with other metadata See https://developer.android.com/distribute/best-practices/develop/restrictions-non-sdk-interfaces

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiSignature|string|false|none|The signature of the Non-SDK API|
|exampleStackTraces|[string]|false|none|Example stack traces of this API being called.|
|insights|[[NonSdkApiInsight](#schemanonsdkapiinsight)]|false|none|Optional debugging insights for non-SDK API violations.|
|invocationCount|integer(int32)|false|none|The total number of times this API was observed to have been called.|
|list|string|false|none|Which list this API appears on|

#### Enumerated Values

|Property|Value|
|---|---|
|list|NONE|
|list|WHITE|
|list|BLACK|
|list|GREY|
|list|GREY_MAX_O|
|list|GREY_MAX_P|
|list|GREY_MAX_Q|
|list|GREY_MAX_R|

<h2 id="tocS_NonSdkApiInsight">NonSdkApiInsight</h2>
<!-- backwards compatibility -->
<a id="schemanonsdkapiinsight"></a>
<a id="schema_NonSdkApiInsight"></a>
<a id="tocSnonsdkapiinsight"></a>
<a id="tocsnonsdkapiinsight"></a>

```json
{
  "exampleTraceMessages": [
    "string"
  ],
  "matcherId": "string",
  "pendingGoogleUpdateInsight": {
    "nameOfGoogleLibrary": "string"
  },
  "upgradeInsight": {
    "packageName": "string",
    "upgradeToVersion": "string"
  }
}
```

Non-SDK API insights (to address debugging solutions).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exampleTraceMessages|[string]|false|none|Optional sample stack traces, for which this insight applies (there should be at least one).|
|matcherId|string|false|none|A unique ID, to be used for determining the effectiveness of this particular insight in the context of a matcher. (required)|
|pendingGoogleUpdateInsight|[PendingGoogleUpdateInsight](#schemapendinggoogleupdateinsight)|false|none|An insight indicating that the hidden API usage originates from a Google-provided library.|
|upgradeInsight|[UpgradeInsight](#schemaupgradeinsight)|false|none|An insight indicating that the hidden API usage originates from the use of a library that needs to be upgraded.|

<h2 id="tocS_NonSdkApiUsageViolation">NonSdkApiUsageViolation</h2>
<!-- backwards compatibility -->
<a id="schemanonsdkapiusageviolation"></a>
<a id="schema_NonSdkApiUsageViolation"></a>
<a id="tocSnonsdkapiusageviolation"></a>
<a id="tocsnonsdkapiusageviolation"></a>

```json
{
  "apiSignatures": [
    "string"
  ],
  "uniqueApis": 0
}
```

Additional details for a non-sdk API usage violation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiSignatures|[string]|false|none|Signatures of a subset of those hidden API's.|
|uniqueApis|integer(int32)|false|none|Total number of unique hidden API's accessed.|

<h2 id="tocS_NonSdkApiUsageViolationReport">NonSdkApiUsageViolationReport</h2>
<!-- backwards compatibility -->
<a id="schemanonsdkapiusageviolationreport"></a>
<a id="schema_NonSdkApiUsageViolationReport"></a>
<a id="tocSnonsdkapiusageviolationreport"></a>
<a id="tocsnonsdkapiusageviolationreport"></a>

```json
{
  "exampleApis": [
    {
      "apiSignature": "string",
      "exampleStackTraces": [
        "string"
      ],
      "insights": [
        {
          "exampleTraceMessages": [
            "string"
          ],
          "matcherId": "string",
          "pendingGoogleUpdateInsight": {
            "nameOfGoogleLibrary": "string"
          },
          "upgradeInsight": {
            "packageName": "string",
            "upgradeToVersion": "string"
          }
        }
      ],
      "invocationCount": 0,
      "list": "NONE"
    }
  ],
  "minSdkVersion": 0,
  "targetSdkVersion": 0,
  "uniqueApis": 0
}
```

Contains a summary and examples of non-sdk API usage violations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exampleApis|[[NonSdkApi](#schemanonsdkapi)]|false|none|Examples of the detected API usages.|
|minSdkVersion|integer(int32)|false|none|Minimum API level required for the application to run.|
|targetSdkVersion|integer(int32)|false|none|Specifies the API Level on which the application is designed to run.|
|uniqueApis|integer(int32)|false|none|Total number of unique Non-SDK API's accessed.|

<h2 id="tocS_Outcome">Outcome</h2>
<!-- backwards compatibility -->
<a id="schemaoutcome"></a>
<a id="schema_Outcome"></a>
<a id="tocSoutcome"></a>
<a id="tocsoutcome"></a>

```json
{
  "failureDetail": {
    "crashed": true,
    "deviceOutOfMemory": true,
    "failedRoboscript": true,
    "notInstalled": true,
    "otherNativeCrash": true,
    "timedOut": true,
    "unableToCrawl": true
  },
  "inconclusiveDetail": {
    "abortedByUser": true,
    "hasErrorLogs": true,
    "infrastructureFailure": true
  },
  "skippedDetail": {
    "incompatibleAppVersion": true,
    "incompatibleArchitecture": true,
    "incompatibleDevice": true
  },
  "successDetail": {
    "otherNativeCrash": true
  },
  "summary": "unset"
}
```

Interprets a result so that humans and machines can act on it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failureDetail|[FailureDetail](#schemafailuredetail)|false|none|More information about a FAILURE outcome. Returns INVALID_ARGUMENT if this field is set but the summary is not FAILURE. Optional|
|inconclusiveDetail|[InconclusiveDetail](#schemainconclusivedetail)|false|none|More information about an INCONCLUSIVE outcome. Returns INVALID_ARGUMENT if this field is set but the summary is not INCONCLUSIVE. Optional|
|skippedDetail|[SkippedDetail](#schemaskippeddetail)|false|none|More information about a SKIPPED outcome. Returns INVALID_ARGUMENT if this field is set but the summary is not SKIPPED. Optional|
|successDetail|[SuccessDetail](#schemasuccessdetail)|false|none|More information about a SUCCESS outcome. Returns INVALID_ARGUMENT if this field is set but the summary is not SUCCESS. Optional|
|summary|string|false|none|The simplest way to interpret a result. Required|

#### Enumerated Values

|Property|Value|
|---|---|
|summary|unset|
|summary|success|
|summary|failure|
|summary|inconclusive|
|summary|skipped|
|summary|flaky|

<h2 id="tocS_OverlappingUIElements">OverlappingUIElements</h2>
<!-- backwards compatibility -->
<a id="schemaoverlappinguielements"></a>
<a id="schema_OverlappingUIElements"></a>
<a id="tocSoverlappinguielements"></a>
<a id="tocsoverlappinguielements"></a>

```json
{
  "resourceName": [
    "string"
  ],
  "screenId": "string"
}
```

A warning that Robo encountered a screen that has overlapping clickable elements; this may indicate a potential UI issue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|[string]|false|none|Resource names of the overlapping screen elements|
|screenId|string|false|none|The screen id of the elements|

<h2 id="tocS_PendingGoogleUpdateInsight">PendingGoogleUpdateInsight</h2>
<!-- backwards compatibility -->
<a id="schemapendinggoogleupdateinsight"></a>
<a id="schema_PendingGoogleUpdateInsight"></a>
<a id="tocSpendinggoogleupdateinsight"></a>
<a id="tocspendinggoogleupdateinsight"></a>

```json
{
  "nameOfGoogleLibrary": "string"
}
```

This insight indicates that the hidden API usage originates from a Google-provided library. Users need not take any action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nameOfGoogleLibrary|string|false|none|The name of the Google-provided library with the non-SDK API dependency.|

<h2 id="tocS_PerfEnvironment">PerfEnvironment</h2>
<!-- backwards compatibility -->
<a id="schemaperfenvironment"></a>
<a id="schema_PerfEnvironment"></a>
<a id="tocSperfenvironment"></a>
<a id="tocsperfenvironment"></a>

```json
{
  "cpuInfo": {
    "cpuProcessor": "string",
    "cpuSpeedInGhz": 0,
    "numberOfCores": 0
  },
  "memoryInfo": {
    "memoryCapInKibibyte": "string",
    "memoryTotalInKibibyte": "string"
  }
}
```

Encapsulates performance environment info

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpuInfo|[CPUInfo](#schemacpuinfo)|false|none|CPU related environment info|
|memoryInfo|[MemoryInfo](#schemamemoryinfo)|false|none|Memory related environment info|

<h2 id="tocS_PerfMetricsSummary">PerfMetricsSummary</h2>
<!-- backwards compatibility -->
<a id="schemaperfmetricssummary"></a>
<a id="schema_PerfMetricsSummary"></a>
<a id="tocSperfmetricssummary"></a>
<a id="tocsperfmetricssummary"></a>

```json
{
  "appStartTime": {
    "fullyDrawnTime": {
      "nanos": 0,
      "seconds": "string"
    },
    "initialDisplayTime": {
      "nanos": 0,
      "seconds": "string"
    }
  },
  "executionId": "string",
  "graphicsStats": {
    "buckets": [
      {
        "frameCount": "string",
        "renderMillis": "string"
      }
    ],
    "highInputLatencyCount": "string",
    "jankyFrames": "string",
    "missedVsyncCount": "string",
    "p50Millis": "string",
    "p90Millis": "string",
    "p95Millis": "string",
    "p99Millis": "string",
    "slowBitmapUploadCount": "string",
    "slowDrawCount": "string",
    "slowUiThreadCount": "string",
    "totalFrames": "string"
  },
  "historyId": "string",
  "perfEnvironment": {
    "cpuInfo": {
      "cpuProcessor": "string",
      "cpuSpeedInGhz": 0,
      "numberOfCores": 0
    },
    "memoryInfo": {
      "memoryCapInKibibyte": "string",
      "memoryTotalInKibibyte": "string"
    }
  },
  "perfMetrics": [
    "perfMetricTypeUnspecified"
  ],
  "projectId": "string",
  "stepId": "string"
}
```

A summary of perf metrics collected and performance environment info

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appStartTime|[AppStartTime](#schemaappstarttime)|false|none|none|
|executionId|string|false|none|A tool results execution ID. @OutputOnly|
|graphicsStats|[GraphicsStats](#schemagraphicsstats)|false|none|Graphics statistics for the entire run. Statistics are reset at the beginning of the run and collected at the end of the run.|
|historyId|string|false|none|A tool results history ID. @OutputOnly|
|perfEnvironment|[PerfEnvironment](#schemaperfenvironment)|false|none|Describes the environment in which the performance metrics were collected|
|perfMetrics|[string]|false|none|Set of resource collected|
|projectId|string|false|none|The cloud project @OutputOnly|
|stepId|string|false|none|A tool results step ID. @OutputOnly|

#### Enumerated Values

|Property|Value|
|---|---|
|perfMetrics|perfMetricTypeUnspecified|
|perfMetrics|memory|
|perfMetrics|cpu|
|perfMetrics|network|
|perfMetrics|graphics|

<h2 id="tocS_PerfSample">PerfSample</h2>
<!-- backwards compatibility -->
<a id="schemaperfsample"></a>
<a id="schema_PerfSample"></a>
<a id="tocSperfsample"></a>
<a id="tocsperfsample"></a>

```json
{
  "sampleTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "value": 0
}
```

Resource representing a single performance measure or data point

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sampleTime|[Timestamp](#schematimestamp)|false|none|Timestamp of collection.|
|value|number(double)|false|none|Value observed|

<h2 id="tocS_PerfSampleSeries">PerfSampleSeries</h2>
<!-- backwards compatibility -->
<a id="schemaperfsampleseries"></a>
<a id="schema_PerfSampleSeries"></a>
<a id="tocSperfsampleseries"></a>
<a id="tocsperfsampleseries"></a>

```json
{
  "basicPerfSampleSeries": {
    "perfMetricType": "perfMetricTypeUnspecified",
    "perfUnit": "perfUnitUnspecified",
    "sampleSeriesLabel": "sampleSeriesTypeUnspecified"
  },
  "executionId": "string",
  "historyId": "string",
  "projectId": "string",
  "sampleSeriesId": "string",
  "stepId": "string"
}
```

Resource representing a collection of performance samples (or data points)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicPerfSampleSeries|[BasicPerfSampleSeries](#schemabasicperfsampleseries)|false|none|Basic series represented by a line chart|
|executionId|string|false|none|A tool results execution ID. @OutputOnly|
|historyId|string|false|none|A tool results history ID. @OutputOnly|
|projectId|string|false|none|The cloud project @OutputOnly|
|sampleSeriesId|string|false|none|A sample series id @OutputOnly|
|stepId|string|false|none|A tool results step ID. @OutputOnly|

<h2 id="tocS_PerformedGoogleLogin">PerformedGoogleLogin</h2>
<!-- backwards compatibility -->
<a id="schemaperformedgooglelogin"></a>
<a id="schema_PerformedGoogleLogin"></a>
<a id="tocSperformedgooglelogin"></a>
<a id="tocsperformedgooglelogin"></a>

```json
{}
```

A notification that Robo signed in with Google.

<h2 id="tocS_PerformedMonkeyActions">PerformedMonkeyActions</h2>
<!-- backwards compatibility -->
<a id="schemaperformedmonkeyactions"></a>
<a id="schema_PerformedMonkeyActions"></a>
<a id="tocSperformedmonkeyactions"></a>
<a id="tocsperformedmonkeyactions"></a>

```json
{
  "totalActions": 0
}
```

A notification that Robo performed some monkey actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalActions|integer(int32)|false|none|The total number of monkey actions performed during the crawl.|

<h2 id="tocS_PrimaryStep">PrimaryStep</h2>
<!-- backwards compatibility -->
<a id="schemaprimarystep"></a>
<a id="schema_PrimaryStep"></a>
<a id="tocSprimarystep"></a>
<a id="tocsprimarystep"></a>

```json
{
  "individualOutcome": [
    {
      "multistepNumber": 0,
      "outcomeSummary": "unset",
      "runDuration": {
        "nanos": 0,
        "seconds": "string"
      },
      "stepId": "string"
    }
  ],
  "rollUp": "unset"
}
```

Stores rollup test status of multiple steps that were run as a group and outcome of each individual step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|individualOutcome|[[IndividualOutcome](#schemaindividualoutcome)]|false|none|Step Id and outcome of each individual step.|
|rollUp|string|false|none|Rollup test status of multiple steps that were run with the same configuration as a group.|

#### Enumerated Values

|Property|Value|
|---|---|
|rollUp|unset|
|rollUp|success|
|rollUp|failure|
|rollUp|inconclusive|
|rollUp|skipped|
|rollUp|flaky|

<h2 id="tocS_ProjectSettings">ProjectSettings</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsettings"></a>
<a id="schema_ProjectSettings"></a>
<a id="tocSprojectsettings"></a>
<a id="tocsprojectsettings"></a>

```json
{
  "defaultBucket": "string",
  "name": "string"
}
```

Per-project settings for the Tool Results service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultBucket|string|false|none|The name of the Google Cloud Storage bucket to which results are written. By default, this is unset. In update request: optional In response: optional|
|name|string|false|none|The name of the project's settings. Always of the form: projects/{project-id}/settings In update request: never set In response: always set|

<h2 id="tocS_PublishXunitXmlFilesRequest">PublishXunitXmlFilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublishxunitxmlfilesrequest"></a>
<a id="schema_PublishXunitXmlFilesRequest"></a>
<a id="tocSpublishxunitxmlfilesrequest"></a>
<a id="tocspublishxunitxmlfilesrequest"></a>

```json
{
  "xunitXmlFiles": [
    {
      "fileUri": "string"
    }
  ]
}
```

Request message for StepService.PublishXunitXmlFiles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|xunitXmlFiles|[[FileReference](#schemafilereference)]|false|none|URI of the Xunit XML files to publish. The maximum size of the file this reference is pointing to is 50MB. Required.|

<h2 id="tocS_RegionProto">RegionProto</h2>
<!-- backwards compatibility -->
<a id="schemaregionproto"></a>
<a id="schema_RegionProto"></a>
<a id="tocSregionproto"></a>
<a id="tocsregionproto"></a>

```json
{
  "heightPx": 0,
  "leftPx": 0,
  "topPx": 0,
  "widthPx": 0
}
```

A rectangular region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|heightPx|integer(int32)|false|none|The height, in pixels. Always set.|
|leftPx|integer(int32)|false|none|The left side of the rectangle, in pixels. Always set.|
|topPx|integer(int32)|false|none|The top of the rectangle, in pixels. Always set.|
|widthPx|integer(int32)|false|none|The width, in pixels. Always set.|

<h2 id="tocS_ResultsStorage">ResultsStorage</h2>
<!-- backwards compatibility -->
<a id="schemaresultsstorage"></a>
<a id="schema_ResultsStorage"></a>
<a id="tocSresultsstorage"></a>
<a id="tocsresultsstorage"></a>

```json
{
  "resultsStoragePath": {
    "fileUri": "string"
  },
  "xunitXmlFile": {
    "fileUri": "string"
  }
}
```

The storage for test results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resultsStoragePath|[FileReference](#schemafilereference)|false|none|The root directory for test results.|
|xunitXmlFile|[FileReference](#schemafilereference)|false|none|The path to the Xunit XML file.|

<h2 id="tocS_RoboScriptExecution">RoboScriptExecution</h2>
<!-- backwards compatibility -->
<a id="schemaroboscriptexecution"></a>
<a id="schema_RoboScriptExecution"></a>
<a id="tocSroboscriptexecution"></a>
<a id="tocsroboscriptexecution"></a>

```json
{
  "successfulActions": 0,
  "totalActions": 0
}
```

Execution stats for a user-provided Robo script.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|successfulActions|integer(int32)|false|none|The number of Robo script actions executed successfully.|
|totalActions|integer(int32)|false|none|The total number of actions in the Robo script.|

<h2 id="tocS_SafeHtmlProto">SafeHtmlProto</h2>
<!-- backwards compatibility -->
<a id="schemasafehtmlproto"></a>
<a id="schema_SafeHtmlProto"></a>
<a id="tocSsafehtmlproto"></a>
<a id="tocssafehtmlproto"></a>

```json
{
  "privateDoNotAccessOrElseSafeHtmlWrappedValue": "string"
}
```

IMPORTANT: It is unsafe to accept this message from an untrusted source, since it's trivial for an attacker to forge serialized messages that don't fulfill the type's safety contract -- for example, it could contain attacker controlled script. A system which receives a SafeHtmlProto implicitly trusts the producer of the SafeHtmlProto. So, it's generally safe to return this message in RPC responses, but generally unsafe to accept it in RPC requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|privateDoNotAccessOrElseSafeHtmlWrappedValue|string|false|none|IMPORTANT: Never set or read this field, even from tests, it is private. See documentation at the top of .proto file for programming language packages with which to create or read this message.|

<h2 id="tocS_Screen">Screen</h2>
<!-- backwards compatibility -->
<a id="schemascreen"></a>
<a id="schema_Screen"></a>
<a id="tocSscreen"></a>
<a id="tocsscreen"></a>

```json
{
  "fileReference": "string",
  "locale": "string",
  "model": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileReference|string|false|none|File reference of the png file. Required.|
|locale|string|false|none|Locale of the device that the screenshot was taken on. Required.|
|model|string|false|none|Model of the device that the screenshot was taken on. Required.|
|version|string|false|none|OS version of the device that the screenshot was taken on. Required.|

<h2 id="tocS_ScreenshotCluster">ScreenshotCluster</h2>
<!-- backwards compatibility -->
<a id="schemascreenshotcluster"></a>
<a id="schema_ScreenshotCluster"></a>
<a id="tocSscreenshotcluster"></a>
<a id="tocsscreenshotcluster"></a>

```json
{
  "activity": "string",
  "clusterId": "string",
  "keyScreen": {
    "fileReference": "string",
    "locale": "string",
    "model": "string",
    "version": "string"
  },
  "screens": [
    {
      "fileReference": "string",
      "locale": "string",
      "model": "string",
      "version": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity|string|false|none|A string that describes the activity of every screen in the cluster.|
|clusterId|string|false|none|A unique identifier for the cluster. @OutputOnly|
|keyScreen|[Screen](#schemascreen)|false|none|A singular screen that represents the cluster as a whole. This screen will act as the "cover" of the entire cluster. When users look at the clusters, only the key screen from each cluster will be shown. Which screen is the key screen is determined by the ClusteringAlgorithm|
|screens|[[Screen](#schemascreen)]|false|none|Full list of screens.|

<h2 id="tocS_ShardSummary">ShardSummary</h2>
<!-- backwards compatibility -->
<a id="schemashardsummary"></a>
<a id="schema_ShardSummary"></a>
<a id="tocSshardsummary"></a>
<a id="tocsshardsummary"></a>

```json
{
  "runs": [
    {}
  ],
  "shardResult": {
    "outcome": {
      "failureDetail": {
        "crashed": true,
        "deviceOutOfMemory": true,
        "failedRoboscript": true,
        "notInstalled": true,
        "otherNativeCrash": true,
        "timedOut": true,
        "unableToCrawl": true
      },
      "inconclusiveDetail": {
        "abortedByUser": true,
        "hasErrorLogs": true,
        "infrastructureFailure": true
      },
      "skippedDetail": {
        "incompatibleAppVersion": true,
        "incompatibleArchitecture": true,
        "incompatibleDevice": true
      },
      "successDetail": {
        "otherNativeCrash": true
      },
      "summary": "unset"
    },
    "state": "unknownState",
    "testSuiteOverviews": [
      {
        "elapsedTime": {
          "nanos": 0,
          "seconds": "string"
        },
        "errorCount": 0,
        "failureCount": 0,
        "flakyCount": 0,
        "name": "string",
        "skippedCount": 0,
        "totalCount": 0,
        "xmlSource": {
          "fileUri": "string"
        }
      }
    ]
  }
}
```

Result summary for a shard in an environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|runs|[[StepSummary](#schemastepsummary)]|false|none|Summaries of the steps belonging to the shard. With flaky_test_attempts enabled from TestExecutionService, more than one run (Step) can present. And the runs will be sorted by multistep_number.|
|shardResult|[MergedResult](#schemamergedresult)|false|none|Merged result of the shard.|

<h2 id="tocS_SkippedDetail">SkippedDetail</h2>
<!-- backwards compatibility -->
<a id="schemaskippeddetail"></a>
<a id="schema_SkippedDetail"></a>
<a id="tocSskippeddetail"></a>
<a id="tocsskippeddetail"></a>

```json
{
  "incompatibleAppVersion": true,
  "incompatibleArchitecture": true,
  "incompatibleDevice": true
}
```

Details for an outcome with a SKIPPED outcome summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|incompatibleAppVersion|boolean|false|none|If the App doesn't support the specific API level.|
|incompatibleArchitecture|boolean|false|none|If the App doesn't run on the specific architecture, for example, x86.|
|incompatibleDevice|boolean|false|none|If the requested OS version doesn't run on the specific device model.|

<h2 id="tocS_Specification">Specification</h2>
<!-- backwards compatibility -->
<a id="schemaspecification"></a>
<a id="schema_Specification"></a>
<a id="tocSspecification"></a>
<a id="tocsspecification"></a>

```json
{
  "androidTest": {
    "androidAppInfo": {
      "name": "string",
      "packageName": "string",
      "versionCode": "string",
      "versionName": "string"
    },
    "androidInstrumentationTest": {
      "testPackageId": "string",
      "testRunnerClass": "string",
      "testTargets": [
        "string"
      ],
      "useOrchestrator": true
    },
    "androidRoboTest": {
      "appInitialActivity": "string",
      "bootstrapPackageId": "string",
      "bootstrapRunnerClass": "string",
      "maxDepth": 0,
      "maxSteps": 0
    },
    "androidTestLoop": {},
    "testTimeout": {
      "nanos": 0,
      "seconds": "string"
    }
  },
  "iosTest": {
    "iosAppInfo": {
      "name": "string"
    },
    "iosRoboTest": {},
    "iosTestLoop": {
      "bundleId": "string"
    },
    "iosXcTest": {
      "bundleId": "string",
      "xcodeVersion": "string"
    },
    "testTimeout": {
      "nanos": 0,
      "seconds": "string"
    }
  }
}
```

The details about how to run the execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidTest|[AndroidTest](#schemaandroidtest)|false|none|An Android mobile test execution specification.|
|iosTest|[IosTest](#schemaiostest)|false|none|An iOS mobile test execution specification.|

<h2 id="tocS_StackTrace">StackTrace</h2>
<!-- backwards compatibility -->
<a id="schemastacktrace"></a>
<a id="schema_StackTrace"></a>
<a id="tocSstacktrace"></a>
<a id="tocsstacktrace"></a>

```json
{
  "exception": "string"
}
```

A stacktrace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exception|string|false|none|The stack trace message. Required|

<h2 id="tocS_StartActivityNotFound">StartActivityNotFound</h2>
<!-- backwards compatibility -->
<a id="schemastartactivitynotfound"></a>
<a id="schema_StartActivityNotFound"></a>
<a id="tocSstartactivitynotfound"></a>
<a id="tocsstartactivitynotfound"></a>

```json
{
  "action": "string",
  "uri": "string"
}
```

User provided intent failed to resolve to an activity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|none|
|uri|string|false|none|none|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "code": 0,
  "details": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "message": "string"
}
```

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_Step">Step</h2>
<!-- backwards compatibility -->
<a id="schemastep"></a>
<a id="schema_Step"></a>
<a id="tocSstep"></a>
<a id="tocsstep"></a>

```json
{
  "completionTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "creationTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "description": "string",
  "deviceUsageDuration": {
    "nanos": 0,
    "seconds": "string"
  },
  "dimensionValue": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "hasImages": true,
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "multiStep": {
    "multistepNumber": 0,
    "primaryStep": {
      "individualOutcome": [
        {
          "multistepNumber": 0,
          "outcomeSummary": "unset",
          "runDuration": {
            "nanos": 0,
            "seconds": "string"
          },
          "stepId": "string"
        }
      ],
      "rollUp": "unset"
    },
    "primaryStepId": "string"
  },
  "name": "string",
  "outcome": {
    "failureDetail": {
      "crashed": true,
      "deviceOutOfMemory": true,
      "failedRoboscript": true,
      "notInstalled": true,
      "otherNativeCrash": true,
      "timedOut": true,
      "unableToCrawl": true
    },
    "inconclusiveDetail": {
      "abortedByUser": true,
      "hasErrorLogs": true,
      "infrastructureFailure": true
    },
    "skippedDetail": {
      "incompatibleAppVersion": true,
      "incompatibleArchitecture": true,
      "incompatibleDevice": true
    },
    "successDetail": {
      "otherNativeCrash": true
    },
    "summary": "unset"
  },
  "runDuration": {
    "nanos": 0,
    "seconds": "string"
  },
  "state": "unknownState",
  "stepId": "string",
  "testExecutionStep": {
    "testIssues": [
      {
        "category": "unspecifiedCategory",
        "errorMessage": "string",
        "severity": "unspecifiedSeverity",
        "stackTrace": {
          "exception": "string"
        },
        "type": "unspecifiedType",
        "warning": {
          "typeUrl": "string",
          "value": "string"
        }
      }
    ],
    "testSuiteOverviews": [
      {
        "elapsedTime": {
          "nanos": 0,
          "seconds": "string"
        },
        "errorCount": 0,
        "failureCount": 0,
        "flakyCount": 0,
        "name": "string",
        "skippedCount": 0,
        "totalCount": 0,
        "xmlSource": {
          "fileUri": "string"
        }
      }
    ],
    "testTiming": {
      "testProcessDuration": {
        "nanos": 0,
        "seconds": "string"
      }
    },
    "toolExecution": {
      "commandLineArguments": [
        "string"
      ],
      "exitCode": {
        "number": 0
      },
      "toolLogs": [
        {
          "fileUri": "string"
        }
      ],
      "toolOutputs": [
        {
          "creationTime": {
            "nanos": 0,
            "seconds": "string"
          },
          "output": {
            "fileUri": "string"
          },
          "testCase": {
            "className": "string",
            "name": "string",
            "testSuiteName": "string"
          }
        }
      ]
    }
  },
  "toolExecutionStep": {
    "toolExecution": {
      "commandLineArguments": [
        "string"
      ],
      "exitCode": {
        "number": 0
      },
      "toolLogs": [
        {
          "fileUri": "string"
        }
      ],
      "toolOutputs": [
        {
          "creationTime": {
            "nanos": 0,
            "seconds": "string"
          },
          "output": {
            "fileUri": "string"
          },
          "testCase": {
            "className": "string",
            "name": "string",
            "testSuiteName": "string"
          }
        }
      ]
    }
  }
}
```

A Step represents a single operation performed as part of Execution. A step can be used to represent the execution of a tool ( for example a test runner execution or an execution of a compiler). Steps can overlap (for instance two steps might have the same start time if some operations are done in parallel). Here is an example, let's consider that we have a continuous build is executing a test runner for each iteration. The workflow would look like: - user creates a Execution with id 1 - user creates a TestExecutionStep with id 100 for Execution 1 - user update TestExecutionStep with id 100 to add a raw xml log + the service parses the xml logs and returns a TestExecutionStep with updated TestResult(s). - user update the status of TestExecutionStep with id 100 to COMPLETE A Step can be updated until its state is set to COMPLETE at which points it becomes immutable. Next tag: 27

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completionTime|[Timestamp](#schematimestamp)|false|none|The time when the step status was set to complete. This value will be set automatically when state transitions to COMPLETE. - In response: set if the execution state is COMPLETE. - In create/update request: never set|
|creationTime|[Timestamp](#schematimestamp)|false|none|The time when the step was created. - In response: always set - In create/update request: never set|
|description|string|false|none|A description of this tool For example: mvn clean package -D skipTests=true - In response: present if set by create/update request - In create/update request: optional|
|deviceUsageDuration|[Duration](#schemaduration)|false|none|How much the device resource is used to perform the test. This is the device usage used for billing purpose, which is different from the run_duration, for example, infrastructure failure won't be charged for device usage. PRECONDITION_FAILED will be returned if one attempts to set a device_usage on a step which already has this field set. - In response: present if previously set. - In create request: optional - In update request: optional|
|dimensionValue|[[StepDimensionValueEntry](#schemastepdimensionvalueentry)]|false|none|If the execution containing this step has any dimension_definition set, then this field allows the child to specify the values of the dimensions. The keys must exactly match the dimension_definition of the execution. For example, if the execution has `dimension_definition = ['attempt', 'device']` then a step must define values for those dimensions, eg. `dimension_value = ['attempt': '1', 'device': 'Nexus 6']` If a step does not participate in one dimension of the matrix, the value for that dimension should be empty string. For example, if one of the tests is executed by a runner which does not support retries, the step could have `dimension_value = ['attempt': '', 'device': 'Nexus 6']` If the step does not participate in any dimensions of the matrix, it may leave dimension_value unset. A PRECONDITION_FAILED will be returned if any of the keys do not exist in the dimension_definition of the execution. A PRECONDITION_FAILED will be returned if another step in this execution already has the same name and dimension_value, but differs on other data fields, for example, step field is different. A PRECONDITION_FAILED will be returned if dimension_value is set, and there is a dimension_definition in the execution which is not specified as one of the keys. - In response: present if set by create - In create request: optional - In update request: never set|
|hasImages|boolean|false|none|Whether any of the outputs of this step are images whose thumbnails can be fetched with ListThumbnails. - In response: always set - In create/update request: never set|
|labels|[[StepLabelsEntry](#schemasteplabelsentry)]|false|none|Arbitrary user-supplied key/value pairs that are associated with the step. Users are responsible for managing the key namespace such that keys don't accidentally collide. An INVALID_ARGUMENT will be returned if the number of labels exceeds 100 or if the length of any of the keys or values exceeds 100 characters. - In response: always set - In create request: optional - In update request: optional; any new key/value pair will be added to the map, and any new value for an existing key will update that key's value|
|multiStep|[MultiStep](#schemamultistep)|false|none|Details when multiple steps are run with the same configuration as a group. These details can be used identify which group this step is part of. It also identifies the groups 'primary step' which indexes all the group members. - In response: present if previously set. - In create request: optional, set iff this step was performed more than once. - In update request: optional|
|name|string|false|none|A short human-readable name to display in the UI. Maximum of 100 characters. For example: Clean build A PRECONDITION_FAILED will be returned upon creating a new step if it shares its name and dimension_value with an existing step. If two steps represent a similar action, but have different dimension values, they should share the same name. For instance, if the same set of tests is run on two different platforms, the two steps should have the same name. - In response: always set - In create request: always set - In update request: never set|
|outcome|[Outcome](#schemaoutcome)|false|none|Classification of the result, for example into SUCCESS or FAILURE - In response: present if set by create/update request - In create/update request: optional|
|runDuration|[Duration](#schemaduration)|false|none|How long it took for this step to run. If unset, this is set to the difference between creation_time and completion_time when the step is set to the COMPLETE state. In some cases, it is appropriate to set this value separately: For instance, if a step is created, but the operation it represents is queued for a few minutes before it executes, it would be appropriate not to include the time spent queued in its run_duration. PRECONDITION_FAILED will be returned if one attempts to set a run_duration on a step which already has this field set. - In response: present if previously set; always present on COMPLETE step - In create request: optional - In update request: optional|
|state|string|false|none|The initial state is IN_PROGRESS. The only legal state transitions are * IN_PROGRESS -> COMPLETE A PRECONDITION_FAILED will be returned if an invalid transition is requested. It is valid to create Step with a state set to COMPLETE. The state can only be set to COMPLETE once. A PRECONDITION_FAILED will be returned if the state is set to COMPLETE multiple times. - In response: always set - In create/update request: optional|
|stepId|string|false|none|A unique identifier within a Execution for this Step. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response: always set - In create/update request: never set|
|testExecutionStep|[TestExecutionStep](#schematestexecutionstep)|false|none|An execution of a test runner.|
|toolExecutionStep|[ToolExecutionStep](#schematoolexecutionstep)|false|none|An execution of a tool (used for steps we don't explicitly support).|

#### Enumerated Values

|Property|Value|
|---|---|
|state|unknownState|
|state|pending|
|state|inProgress|
|state|complete|

<h2 id="tocS_StepDimensionValueEntry">StepDimensionValueEntry</h2>
<!-- backwards compatibility -->
<a id="schemastepdimensionvalueentry"></a>
<a id="schema_StepDimensionValueEntry"></a>
<a id="tocSstepdimensionvalueentry"></a>
<a id="tocsstepdimensionvalueentry"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_StepLabelsEntry">StepLabelsEntry</h2>
<!-- backwards compatibility -->
<a id="schemasteplabelsentry"></a>
<a id="schema_StepLabelsEntry"></a>
<a id="tocSsteplabelsentry"></a>
<a id="tocssteplabelsentry"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_StepSummary">StepSummary</h2>
<!-- backwards compatibility -->
<a id="schemastepsummary"></a>
<a id="schema_StepSummary"></a>
<a id="tocSstepsummary"></a>
<a id="tocsstepsummary"></a>

```json
{}
```

Lightweight summary of a step within this execution.

<h2 id="tocS_SuccessDetail">SuccessDetail</h2>
<!-- backwards compatibility -->
<a id="schemasuccessdetail"></a>
<a id="schema_SuccessDetail"></a>
<a id="tocSsuccessdetail"></a>
<a id="tocssuccessdetail"></a>

```json
{
  "otherNativeCrash": true
}
```

Details for an outcome with a SUCCESS outcome summary. LINT.IfChange

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|otherNativeCrash|boolean|false|none|If a native process other than the app crashed.|

<h2 id="tocS_SuggestionClusterProto">SuggestionClusterProto</h2>
<!-- backwards compatibility -->
<a id="schemasuggestionclusterproto"></a>
<a id="schema_SuggestionClusterProto"></a>
<a id="tocSsuggestionclusterproto"></a>
<a id="tocssuggestionclusterproto"></a>

```json
{
  "category": "unknownCategory",
  "suggestions": [
    {
      "helpUrl": "string",
      "longMessage": {
        "privateDoNotAccessOrElseSafeHtmlWrappedValue": "string"
      },
      "priority": "unknownPriority",
      "pseudoResourceId": "string",
      "region": {
        "heightPx": 0,
        "leftPx": 0,
        "topPx": 0,
        "widthPx": 0
      },
      "resourceName": "string",
      "screenId": "string",
      "secondaryPriority": 0,
      "shortMessage": {
        "privateDoNotAccessOrElseSafeHtmlWrappedValue": "string"
      },
      "title": "string"
    }
  ]
}
```

A set of similar suggestions that we suspect are closely related. This proto and most of the nested protos are branched from foxandcrown.prelaunchreport.service.SuggestionClusterProto, replacing PLR's dependencies with FTL's.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|Category in which these types of suggestions should appear. Always set.|
|suggestions|[[SuggestionProto](#schemasuggestionproto)]|false|none|A sequence of suggestions. All of the suggestions within a cluster must have the same SuggestionPriority and belong to the same SuggestionCategory. Suggestions with the same screenshot URL should be adjacent.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|unknownCategory|
|category|contentLabeling|
|category|touchTargetSize|
|category|lowContrast|
|category|implementation|

<h2 id="tocS_SuggestionProto">SuggestionProto</h2>
<!-- backwards compatibility -->
<a id="schemasuggestionproto"></a>
<a id="schema_SuggestionProto"></a>
<a id="tocSsuggestionproto"></a>
<a id="tocssuggestionproto"></a>

```json
{
  "helpUrl": "string",
  "longMessage": {
    "privateDoNotAccessOrElseSafeHtmlWrappedValue": "string"
  },
  "priority": "unknownPriority",
  "pseudoResourceId": "string",
  "region": {
    "heightPx": 0,
    "leftPx": 0,
    "topPx": 0,
    "widthPx": 0
  },
  "resourceName": "string",
  "screenId": "string",
  "secondaryPriority": 0,
  "shortMessage": {
    "privateDoNotAccessOrElseSafeHtmlWrappedValue": "string"
  },
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|helpUrl|string|false|none|Reference to a help center article concerning this type of suggestion. Always set.|
|longMessage|[SafeHtmlProto](#schemasafehtmlproto)|false|none|Message, in the user's language, explaining the suggestion, which may contain markup. Always set.|
|priority|string|false|none|Relative importance of a suggestion. Always set.|
|pseudoResourceId|string|false|none|A somewhat human readable identifier of the source view, if it does not have a resource_name. This is a path within the accessibility hierarchy, an element with resource name; similar to an XPath.|
|region|[RegionProto](#schemaregionproto)|false|none|Region within the screenshot that is relevant to this suggestion. Optional.|
|resourceName|string|false|none|Reference to a view element, identified by its resource name, if it has one.|
|screenId|string|false|none|ID of the screen for the suggestion. It is used for getting the corresponding screenshot path. For example, screen_id "1" corresponds to "1.png" file in GCS. Always set.|
|secondaryPriority|number(double)|false|none|Relative importance of a suggestion as compared with other suggestions that have the same priority and category. This is a meaningless value that can be used to order suggestions that are in the same category and have the same priority. The larger values have higher priority (i.e., are more important). Optional.|
|shortMessage|[SafeHtmlProto](#schemasafehtmlproto)|false|none|Concise message, in the user's language, representing the suggestion, which may contain markup. Always set.|
|title|string|false|none|General title for the suggestion, in the user's language, without markup. Always set.|

#### Enumerated Values

|Property|Value|
|---|---|
|priority|unknownPriority|
|priority|error|
|priority|warning|
|priority|info|

<h2 id="tocS_TestCase">TestCase</h2>
<!-- backwards compatibility -->
<a id="schematestcase"></a>
<a id="schema_TestCase"></a>
<a id="tocStestcase"></a>
<a id="tocstestcase"></a>

```json
{
  "elapsedTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "endTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "skippedMessage": "string",
  "stackTraces": [
    {
      "exception": "string"
    }
  ],
  "startTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "status": "passed",
  "testCaseId": "string",
  "testCaseReference": {
    "className": "string",
    "name": "string",
    "testSuiteName": "string"
  },
  "toolOutputs": [
    {
      "creationTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "output": {
        "fileUri": "string"
      },
      "testCase": {
        "className": "string",
        "name": "string",
        "testSuiteName": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elapsedTime|[Duration](#schemaduration)|false|none|The elapsed run time of the test case. Required.|
|endTime|[Timestamp](#schematimestamp)|false|none|The end time of the test case.|
|skippedMessage|string|false|none|Why the test case was skipped. Present only for skipped test case|
|stackTraces|[[StackTrace](#schemastacktrace)]|false|none|The stack trace details if the test case failed or encountered an error. The maximum size of the stack traces is 100KiB, beyond which the stack track will be truncated. Zero if the test case passed.|
|startTime|[Timestamp](#schematimestamp)|false|none|The start time of the test case.|
|status|string|false|none|The status of the test case. Required.|
|testCaseId|string|false|none|A unique identifier within a Step for this Test Case.|
|testCaseReference|[TestCaseReference](#schematestcasereference)|false|none|Test case reference, e.g. name, class name and test suite name. Required.|
|toolOutputs|[[ToolOutputReference](#schematooloutputreference)]|false|none|References to opaque files of any format output by the tool execution. @OutputOnly|

#### Enumerated Values

|Property|Value|
|---|---|
|status|passed|
|status|failed|
|status|error|
|status|skipped|
|status|flaky|

<h2 id="tocS_TestCaseReference">TestCaseReference</h2>
<!-- backwards compatibility -->
<a id="schematestcasereference"></a>
<a id="schema_TestCaseReference"></a>
<a id="tocStestcasereference"></a>
<a id="tocstestcasereference"></a>

```json
{
  "className": "string",
  "name": "string",
  "testSuiteName": "string"
}
```

A reference to a test case. Test case references are canonically ordered lexicographically by these three factors: * First, by test_suite_name. * Second, by class_name. * Third, by name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|className|string|false|none|The name of the class.|
|name|string|false|none|The name of the test case. Required.|
|testSuiteName|string|false|none|The name of the test suite to which this test case belongs.|

<h2 id="tocS_TestExecutionStep">TestExecutionStep</h2>
<!-- backwards compatibility -->
<a id="schematestexecutionstep"></a>
<a id="schema_TestExecutionStep"></a>
<a id="tocStestexecutionstep"></a>
<a id="tocstestexecutionstep"></a>

```json
{
  "testIssues": [
    {
      "category": "unspecifiedCategory",
      "errorMessage": "string",
      "severity": "unspecifiedSeverity",
      "stackTrace": {
        "exception": "string"
      },
      "type": "unspecifiedType",
      "warning": {
        "typeUrl": "string",
        "value": "string"
      }
    }
  ],
  "testSuiteOverviews": [
    {
      "elapsedTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "errorCount": 0,
      "failureCount": 0,
      "flakyCount": 0,
      "name": "string",
      "skippedCount": 0,
      "totalCount": 0,
      "xmlSource": {
        "fileUri": "string"
      }
    }
  ],
  "testTiming": {
    "testProcessDuration": {
      "nanos": 0,
      "seconds": "string"
    }
  },
  "toolExecution": {
    "commandLineArguments": [
      "string"
    ],
    "exitCode": {
      "number": 0
    },
    "toolLogs": [
      {
        "fileUri": "string"
      }
    ],
    "toolOutputs": [
      {
        "creationTime": {
          "nanos": 0,
          "seconds": "string"
        },
        "output": {
          "fileUri": "string"
        },
        "testCase": {
          "className": "string",
          "name": "string",
          "testSuiteName": "string"
        }
      }
    ]
  }
}
```

A step that represents running tests. It accepts ant-junit xml files which will be parsed into structured test results by the service. Xml file paths are updated in order to append more files, however they can't be deleted. Users can also add test results manually by using the test_result field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|testIssues|[[TestIssue](#schematestissue)]|false|none|Issues observed during the test execution. For example, if the mobile app under test crashed during the test, the error message and the stack trace content can be recorded here to assist debugging. - In response: present if set by create or update - In create/update request: optional|
|testSuiteOverviews|[[TestSuiteOverview](#schematestsuiteoverview)]|false|none|List of test suite overview contents. This could be parsed from xUnit XML log by server, or uploaded directly by user. This references should only be called when test suites are fully parsed or uploaded. The maximum allowed number of test suite overviews per step is 1000. - In response: always set - In create request: optional - In update request: never (use publishXunitXmlFiles custom method instead)|
|testTiming|[TestTiming](#schematesttiming)|false|none|The timing break down of the test execution. - In response: present if set by create or update - In create/update request: optional|
|toolExecution|[ToolExecution](#schematoolexecution)|false|none|Represents the execution of the test runner. The exit code of this tool will be used to determine if the test passed. - In response: always set - In create/update request: optional|

<h2 id="tocS_TestIssue">TestIssue</h2>
<!-- backwards compatibility -->
<a id="schematestissue"></a>
<a id="schema_TestIssue"></a>
<a id="tocStestissue"></a>
<a id="tocstestissue"></a>

```json
{
  "category": "unspecifiedCategory",
  "errorMessage": "string",
  "severity": "unspecifiedSeverity",
  "stackTrace": {
    "exception": "string"
  },
  "type": "unspecifiedType",
  "warning": {
    "typeUrl": "string",
    "value": "string"
  }
}
```

An issue detected occurring during a test execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|Category of issue. Required.|
|errorMessage|string|false|none|A brief human-readable message describing the issue. Required.|
|severity|string|false|none|Severity of issue. Required.|
|stackTrace|[StackTrace](#schemastacktrace)|false|none|Deprecated in favor of stack trace fields inside specific warnings.|
|type|string|false|none|Type of issue. Required.|
|warning|[Any](#schemaany)|false|none|Warning message with additional details of the issue. Should always be a message from com.google.devtools.toolresults.v1.warnings|

#### Enumerated Values

|Property|Value|
|---|---|
|category|unspecifiedCategory|
|category|common|
|category|robo|
|severity|unspecifiedSeverity|
|severity|info|
|severity|suggestion|
|severity|warning|
|severity|severe|
|type|unspecifiedType|
|type|fatalException|
|type|nativeCrash|
|type|anr|
|type|unusedRoboDirective|
|type|compatibleWithOrchestrator|
|type|launcherActivityNotFound|
|type|startActivityNotFound|
|type|incompleteRoboScriptExecution|
|type|completeRoboScriptExecution|
|type|failedToInstall|
|type|availableDeepLinks|
|type|nonSdkApiUsageViolation|
|type|nonSdkApiUsageReport|
|type|encounteredNonAndroidUiWidgetScreen|
|type|encounteredLoginScreen|
|type|performedGoogleLogin|
|type|iosException|
|type|iosCrash|
|type|performedMonkeyActions|
|type|usedRoboDirective|
|type|usedRoboIgnoreDirective|
|type|insufficientCoverage|
|type|inAppPurchases|
|type|crashDialogError|
|type|uiElementsTooDeep|
|type|blankScreen|
|type|overlappingUiElements|
|type|unityException|
|type|deviceOutOfMemory|
|type|logcatCollectionError|
|type|detectedAppSplashScreen|

<h2 id="tocS_TestSuiteOverview">TestSuiteOverview</h2>
<!-- backwards compatibility -->
<a id="schematestsuiteoverview"></a>
<a id="schema_TestSuiteOverview"></a>
<a id="tocStestsuiteoverview"></a>
<a id="tocstestsuiteoverview"></a>

```json
{
  "elapsedTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "errorCount": 0,
  "failureCount": 0,
  "flakyCount": 0,
  "name": "string",
  "skippedCount": 0,
  "totalCount": 0,
  "xmlSource": {
    "fileUri": "string"
  }
}
```

A summary of a test suite result either parsed from XML or uploaded directly by a user. Note: the API related comments are for StepService only. This message is also being used in ExecutionService in a read only mode for the corresponding step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elapsedTime|[Duration](#schemaduration)|false|none|Elapsed time of test suite.|
|errorCount|integer(int32)|false|none|Number of test cases in error, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never|
|failureCount|integer(int32)|false|none|Number of failed test cases, typically set by the service by parsing the xml_source. May also be set by the user. - In create/response: always set - In update request: never|
|flakyCount|integer(int32)|false|none|Number of flaky test cases, set by the service by rolling up flaky test attempts. Present only for rollup test suite overview at environment level. A step cannot have flaky test cases.|
|name|string|false|none|The name of the test suite. - In create/response: always set - In update request: never|
|skippedCount|integer(int32)|false|none|Number of test cases not run, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never|
|totalCount|integer(int32)|false|none|Number of test cases, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never|
|xmlSource|[FileReference](#schemafilereference)|false|none|If this test suite was parsed from XML, this is the URI where the original XML file is stored. Note: Multiple test suites can share the same xml_source Returns INVALID_ARGUMENT if the uri format is not supported. - In create/response: optional - In update request: never|

<h2 id="tocS_TestTiming">TestTiming</h2>
<!-- backwards compatibility -->
<a id="schematesttiming"></a>
<a id="schema_TestTiming"></a>
<a id="tocStesttiming"></a>
<a id="tocstesttiming"></a>

```json
{
  "testProcessDuration": {
    "nanos": 0,
    "seconds": "string"
  }
}
```

Testing timing break down to know phases.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|testProcessDuration|[Duration](#schemaduration)|false|none|How long it took to run the test process. - In response: present if previously set. - In create/update request: optional|

<h2 id="tocS_Thumbnail">Thumbnail</h2>
<!-- backwards compatibility -->
<a id="schemathumbnail"></a>
<a id="schema_Thumbnail"></a>
<a id="tocSthumbnail"></a>
<a id="tocsthumbnail"></a>

```json
{
  "contentType": "string",
  "data": "string",
  "heightPx": 0,
  "widthPx": 0
}
```

A single thumbnail, with its size and format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string|false|none|The thumbnail's content type, i.e. "image/png". Always set.|
|data|string(byte)|false|none|The thumbnail file itself. That is, the bytes here are precisely the bytes that make up the thumbnail file; they can be served as an image as-is (with the appropriate content type.) Always set.|
|heightPx|integer(int32)|false|none|The height of the thumbnail, in pixels. Always set.|
|widthPx|integer(int32)|false|none|The width of the thumbnail, in pixels. Always set.|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
{
  "nanos": 0,
  "seconds": "string"
}
```

A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar backwards to year one. All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap second table is needed for interpretation, using a [24-hour linear smear](https://developers.google.com/time/smear). The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nanos|integer(int32)|false|none|Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive.|
|seconds|string(int64)|false|none|Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.|

<h2 id="tocS_ToolExecution">ToolExecution</h2>
<!-- backwards compatibility -->
<a id="schematoolexecution"></a>
<a id="schema_ToolExecution"></a>
<a id="tocStoolexecution"></a>
<a id="tocstoolexecution"></a>

```json
{
  "commandLineArguments": [
    "string"
  ],
  "exitCode": {
    "number": 0
  },
  "toolLogs": [
    {
      "fileUri": "string"
    }
  ],
  "toolOutputs": [
    {
      "creationTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "output": {
        "fileUri": "string"
      },
      "testCase": {
        "className": "string",
        "name": "string",
        "testSuiteName": "string"
      }
    }
  ]
}
```

An execution of an arbitrary tool. It could be a test runner or a tool copying artifacts or deploying code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commandLineArguments|[string]|false|none|The full tokenized command line including the program name (equivalent to argv in a C program). - In response: present if set by create request - In create request: optional - In update request: never set|
|exitCode|[ToolExitCode](#schematoolexitcode)|false|none|Tool execution exit code. This field will be set once the tool has exited. - In response: present if set by create/update request - In create request: optional - In update request: optional, a FAILED_PRECONDITION error will be returned if an exit_code is already set.|
|toolLogs|[[FileReference](#schemafilereference)]|false|none|References to any plain text logs output the tool execution. This field can be set before the tool has exited in order to be able to have access to a live view of the logs while the tool is running. The maximum allowed number of tool logs per step is 1000. - In response: present if set by create/update request - In create request: optional - In update request: optional, any value provided will be appended to the existing list|
|toolOutputs|[[ToolOutputReference](#schematooloutputreference)]|false|none|References to opaque files of any format output by the tool execution. The maximum allowed number of tool outputs per step is 1000. - In response: present if set by create/update request - In create request: optional - In update request: optional, any value provided will be appended to the existing list|

<h2 id="tocS_ToolExecutionStep">ToolExecutionStep</h2>
<!-- backwards compatibility -->
<a id="schematoolexecutionstep"></a>
<a id="schema_ToolExecutionStep"></a>
<a id="tocStoolexecutionstep"></a>
<a id="tocstoolexecutionstep"></a>

```json
{
  "toolExecution": {
    "commandLineArguments": [
      "string"
    ],
    "exitCode": {
      "number": 0
    },
    "toolLogs": [
      {
        "fileUri": "string"
      }
    ],
    "toolOutputs": [
      {
        "creationTime": {
          "nanos": 0,
          "seconds": "string"
        },
        "output": {
          "fileUri": "string"
        },
        "testCase": {
          "className": "string",
          "name": "string",
          "testSuiteName": "string"
        }
      }
    ]
  }
}
```

Generic tool step to be used for binaries we do not explicitly support. For example: running cp to copy artifacts from one location to another.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|toolExecution|[ToolExecution](#schematoolexecution)|false|none|A Tool execution. - In response: present if set by create/update request - In create/update request: optional|

<h2 id="tocS_ToolExitCode">ToolExitCode</h2>
<!-- backwards compatibility -->
<a id="schematoolexitcode"></a>
<a id="schema_ToolExitCode"></a>
<a id="tocStoolexitcode"></a>
<a id="tocstoolexitcode"></a>

```json
{
  "number": 0
}
```

Exit code from a tool execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|integer(int32)|false|none|Tool execution exit code. A value of 0 means that the execution was successful. - In response: always set - In create/update request: always set|

<h2 id="tocS_ToolOutputReference">ToolOutputReference</h2>
<!-- backwards compatibility -->
<a id="schematooloutputreference"></a>
<a id="schema_ToolOutputReference"></a>
<a id="tocStooloutputreference"></a>
<a id="tocstooloutputreference"></a>

```json
{
  "creationTime": {
    "nanos": 0,
    "seconds": "string"
  },
  "output": {
    "fileUri": "string"
  },
  "testCase": {
    "className": "string",
    "name": "string",
    "testSuiteName": "string"
  }
}
```

A reference to a ToolExecution output file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationTime|[Timestamp](#schematimestamp)|false|none|The creation time of the file. - In response: present if set by create/update request - In create/update request: optional|
|output|[FileReference](#schemafilereference)|false|none|A FileReference to an output file. - In response: always set - In create/update request: always set|
|testCase|[TestCaseReference](#schematestcasereference)|false|none|The test case to which this output file belongs. - In response: present if set by create/update request - In create/update request: optional|

<h2 id="tocS_UIElementTooDeep">UIElementTooDeep</h2>
<!-- backwards compatibility -->
<a id="schemauielementtoodeep"></a>
<a id="schema_UIElementTooDeep"></a>
<a id="tocSuielementtoodeep"></a>
<a id="tocsuielementtoodeep"></a>

```json
{
  "depth": 0,
  "screenId": "string",
  "screenStateId": "string"
}
```

A warning that the screen hierarchy is deeper than the recommended threshold.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|depth|integer(int32)|false|none|The depth of the screen element|
|screenId|string|false|none|The screen id of the element|
|screenStateId|string|false|none|The screen state id of the element|

<h2 id="tocS_UnspecifiedWarning">UnspecifiedWarning</h2>
<!-- backwards compatibility -->
<a id="schemaunspecifiedwarning"></a>
<a id="schema_UnspecifiedWarning"></a>
<a id="tocSunspecifiedwarning"></a>
<a id="tocsunspecifiedwarning"></a>

```json
{}
```

Default unspecified warning.

<h2 id="tocS_UnusedRoboDirective">UnusedRoboDirective</h2>
<!-- backwards compatibility -->
<a id="schemaunusedrobodirective"></a>
<a id="schema_UnusedRoboDirective"></a>
<a id="tocSunusedrobodirective"></a>
<a id="tocsunusedrobodirective"></a>

```json
{
  "resourceName": "string"
}
```

Additional details of an unused robodirective.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|string|false|none|The name of the resource that was unused.|

<h2 id="tocS_UpgradeInsight">UpgradeInsight</h2>
<!-- backwards compatibility -->
<a id="schemaupgradeinsight"></a>
<a id="schema_UpgradeInsight"></a>
<a id="tocSupgradeinsight"></a>
<a id="tocsupgradeinsight"></a>

```json
{
  "packageName": "string",
  "upgradeToVersion": "string"
}
```

This insight is a recommendation to upgrade a given library to the specified version, in order to avoid dependencies on non-SDK APIs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packageName|string|false|none|The name of the package to be upgraded.|
|upgradeToVersion|string|false|none|The suggested version to upgrade to. Optional: In case we are not sure which version solves this problem|

<h2 id="tocS_UsedRoboDirective">UsedRoboDirective</h2>
<!-- backwards compatibility -->
<a id="schemausedrobodirective"></a>
<a id="schema_UsedRoboDirective"></a>
<a id="tocSusedrobodirective"></a>
<a id="tocsusedrobodirective"></a>

```json
{
  "resourceName": "string"
}
```

Additional details of a used Robo directive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|string|false|none|The name of the resource that was used.|

<h2 id="tocS_UsedRoboIgnoreDirective">UsedRoboIgnoreDirective</h2>
<!-- backwards compatibility -->
<a id="schemausedroboignoredirective"></a>
<a id="schema_UsedRoboIgnoreDirective"></a>
<a id="tocSusedroboignoredirective"></a>
<a id="tocsusedroboignoredirective"></a>

```json
{
  "resourceName": "string"
}
```

Additional details of a used Robo directive with an ignore action. Note: This is a different scenario than unused directive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|string|false|none|The name of the resource that was ignored.|
