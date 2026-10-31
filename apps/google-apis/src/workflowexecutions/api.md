<h1 id="workflow-executions-api">Workflow Executions API v1beta</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Execute workflows created with Workflows API.

Base URLs:

* <a href="https://workflowexecutions.googleapis.com/">https://workflowexecutions.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/workflows">External documentation</a>

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

<h1 id="workflow-executions-api-projects">projects</h1>

## workflowexecutions.projects.locations.workflows.executions.get

<a id="opIdworkflowexecutions.projects.locations.workflows.executions.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{name}`

Returns an execution of the given name.

<h3 id="workflowexecutionsprojectslocationsworkflowsexecutionsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the execution to be retrieved. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}|
|view|query|string|false|Optional. A view defining which fields should be filled in the returned execution. The API will default to the FULL view.|
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
|view|EXECUTION_VIEW_UNSPECIFIED|
|view|BASIC|
|view|FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "argument": "string",
  "callLogLevel": "CALL_LOG_LEVEL_UNSPECIFIED",
  "endTime": "string",
  "error": {
    "context": "string",
    "payload": "string",
    "stackTrace": {
      "elements": [
        {
          "position": {
            "column": "string",
            "length": "string",
            "line": "string"
          },
          "routine": "string",
          "step": "string"
        }
      ]
    }
  },
  "name": "string",
  "result": "string",
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "status": {
    "currentSteps": [
      {
        "routine": "string",
        "step": "string"
      }
    ]
  },
  "workflowRevisionId": "string"
}
```

<h3 id="workflowexecutionsprojectslocationsworkflowsexecutionsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Execution](#schemaexecution)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workflowexecutions.projects.locations.workflows.executions.cancel

<a id="opIdworkflowexecutions.projects.locations.workflows.executions.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta/{name}:cancel`

Cancels an execution of the given name.

> Body parameter

```json
{}
```

<h3 id="workflowexecutionsprojectslocationsworkflowsexecutionscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the execution to be cancelled. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}|
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
|body|body|[CancelExecutionRequest](#schemacancelexecutionrequest)|false|none|

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
  "argument": "string",
  "callLogLevel": "CALL_LOG_LEVEL_UNSPECIFIED",
  "endTime": "string",
  "error": {
    "context": "string",
    "payload": "string",
    "stackTrace": {
      "elements": [
        {
          "position": {
            "column": "string",
            "length": "string",
            "line": "string"
          },
          "routine": "string",
          "step": "string"
        }
      ]
    }
  },
  "name": "string",
  "result": "string",
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "status": {
    "currentSteps": [
      {
        "routine": "string",
        "step": "string"
      }
    ]
  },
  "workflowRevisionId": "string"
}
```

<h3 id="workflowexecutionsprojectslocationsworkflowsexecutionscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Execution](#schemaexecution)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workflowexecutions.projects.locations.workflows.executions.list

<a id="opIdworkflowexecutions.projects.locations.workflows.executions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/executions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/executions`

Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).

<h3 id="workflowexecutionsprojectslocationsworkflowsexecutionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the workflow for which the executions should be listed. Format: projects/{project}/locations/{location}/workflows/{workflow}|
|pageSize|query|integer|false|Maximum number of executions to return per call. Max supported value depends on the selected Execution view: it's 10000 for BASIC and 100 for FULL. The default value used if the field is not specified is 100, regardless of the selected view. Values greater than the max value will be coerced down to it.|
|pageToken|query|string|false|A page token, received from a previous `ListExecutions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExecutions` must match the call that provided the page token.|
|view|query|string|false|Optional. A view defining which fields should be filled in the returned executions. The API will default to the BASIC view.|
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
|view|EXECUTION_VIEW_UNSPECIFIED|
|view|BASIC|
|view|FULL|
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
      "argument": "string",
      "callLogLevel": "CALL_LOG_LEVEL_UNSPECIFIED",
      "endTime": "string",
      "error": {
        "context": "string",
        "payload": "string",
        "stackTrace": {
          "elements": [
            {
              "position": {
                "column": "string",
                "length": "string",
                "line": "string"
              },
              "routine": "string",
              "step": "string"
            }
          ]
        }
      },
      "name": "string",
      "result": "string",
      "startTime": "string",
      "state": "STATE_UNSPECIFIED",
      "status": {
        "currentSteps": [
          {
            "routine": "string",
            "step": "string"
          }
        ]
      },
      "workflowRevisionId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="workflowexecutionsprojectslocationsworkflowsexecutionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListExecutionsResponse](#schemalistexecutionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workflowexecutions.projects.locations.workflows.executions.create

<a id="opIdworkflowexecutions.projects.locations.workflows.executions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/executions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "argument": "string",
    "callLogLevel": "CALL_LOG_LEVEL_UNSPECIFIED"
  }'
```

`POST /v1beta/{parent}/executions`

Creates a new execution using the latest revision of the given workflow.

> Body parameter

```json
{
  "argument": "string",
  "callLogLevel": "CALL_LOG_LEVEL_UNSPECIFIED"
}
```

<h3 id="workflowexecutionsprojectslocationsworkflowsexecutionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the workflow for which an execution should be created. Format: projects/{project}/locations/{location}/workflows/{workflow} The latest revision of the workflow will be used.|
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
|» argument|body|string|false|Input parameters of the execution represented as a JSON string. The size limit is 32KB. *Note*: If you are using the REST API directly to run your workflow, you must escape any JSON string value of `argument`. Example: `'{"argument":"{\"firstName\":\"FIRST\",\"lastName\":\"LAST\"}"}'`|
|» callLogLevel|body|string|false|The call logging level associated to this execution.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» callLogLevel|CALL_LOG_LEVEL_UNSPECIFIED|
|» callLogLevel|LOG_ALL_CALLS|
|» callLogLevel|LOG_ERRORS_ONLY|

> Example responses

> 200 Response

```json
{
  "argument": "string",
  "callLogLevel": "CALL_LOG_LEVEL_UNSPECIFIED",
  "endTime": "string",
  "error": {
    "context": "string",
    "payload": "string",
    "stackTrace": {
      "elements": [
        {
          "position": {
            "column": "string",
            "length": "string",
            "line": "string"
          },
          "routine": "string",
          "step": "string"
        }
      ]
    }
  },
  "name": "string",
  "result": "string",
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "status": {
    "currentSteps": [
      {
        "routine": "string",
        "step": "string"
      }
    ]
  },
  "workflowRevisionId": "string"
}
```

<h3 id="workflowexecutionsprojectslocationsworkflowsexecutionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Execution](#schemaexecution)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_CancelExecutionRequest">CancelExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelexecutionrequest"></a>
<a id="schema_CancelExecutionRequest"></a>
<a id="tocScancelexecutionrequest"></a>
<a id="tocscancelexecutionrequest"></a>

```json
{}
```

Request for the CancelExecution method.

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "context": "string",
  "payload": "string",
  "stackTrace": {
    "elements": [
      {
        "position": {
          "column": "string",
          "length": "string",
          "line": "string"
        },
        "routine": "string",
        "step": "string"
      }
    ]
  }
}
```

Error describes why the execution was abnormally terminated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|string|false|none|Human-readable stack trace string.|
|payload|string|false|none|Error message and data returned represented as a JSON string.|
|stackTrace|[StackTrace](#schemastacktrace)|false|none|Stack trace with detailed information of where error was generated.|

<h2 id="tocS_Execution">Execution</h2>
<!-- backwards compatibility -->
<a id="schemaexecution"></a>
<a id="schema_Execution"></a>
<a id="tocSexecution"></a>
<a id="tocsexecution"></a>

```json
{
  "argument": "string",
  "callLogLevel": "CALL_LOG_LEVEL_UNSPECIFIED",
  "endTime": "string",
  "error": {
    "context": "string",
    "payload": "string",
    "stackTrace": {
      "elements": [
        {
          "position": {
            "column": "string",
            "length": "string",
            "line": "string"
          },
          "routine": "string",
          "step": "string"
        }
      ]
    }
  },
  "name": "string",
  "result": "string",
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "status": {
    "currentSteps": [
      {
        "routine": "string",
        "step": "string"
      }
    ]
  },
  "workflowRevisionId": "string"
}
```

A running instance of a [Workflow](/workflows/docs/reference/rest/v1beta/projects.locations.workflows).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|argument|string|false|none|Input parameters of the execution represented as a JSON string. The size limit is 32KB. *Note*: If you are using the REST API directly to run your workflow, you must escape any JSON string value of `argument`. Example: `'{"argument":"{\"firstName\":\"FIRST\",\"lastName\":\"LAST\"}"}'`|
|callLogLevel|string|false|none|The call logging level associated to this execution.|
|endTime|string(google-datetime)|false|read-only|Output only. Marks the end of execution, successful or not.|
|error|[Error](#schemaerror)|false|none|Output only. The error which caused the execution to finish prematurely. The value is only present if the execution's state is `FAILED` or `CANCELLED`.|
|name|string|false|read-only|Output only. The resource name of the execution. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}|
|result|string|false|read-only|Output only. Output of the execution represented as a JSON string. The value can only be present if the execution's state is `SUCCEEDED`.|
|startTime|string(google-datetime)|false|read-only|Output only. Marks the beginning of execution.|
|state|string|false|read-only|Output only. Current state of the execution.|
|status|[Status](#schemastatus)|false|none|Output only. Status tracks the current steps and progress data of this execution.|
|workflowRevisionId|string|false|read-only|Output only. Revision of the workflow this execution is using.|

#### Enumerated Values

|Property|Value|
|---|---|
|callLogLevel|CALL_LOG_LEVEL_UNSPECIFIED|
|callLogLevel|LOG_ALL_CALLS|
|callLogLevel|LOG_ERRORS_ONLY|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|SUCCEEDED|
|state|FAILED|
|state|CANCELLED|

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
      "argument": "string",
      "callLogLevel": "CALL_LOG_LEVEL_UNSPECIFIED",
      "endTime": "string",
      "error": {
        "context": "string",
        "payload": "string",
        "stackTrace": {
          "elements": [
            {
              "position": {
                "column": "string",
                "length": "string",
                "line": "string"
              },
              "routine": "string",
              "step": "string"
            }
          ]
        }
      },
      "name": "string",
      "result": "string",
      "startTime": "string",
      "state": "STATE_UNSPECIFIED",
      "status": {
        "currentSteps": [
          {
            "routine": "string",
            "step": "string"
          }
        ]
      },
      "workflowRevisionId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response for the ListExecutions method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executions|[[Execution](#schemaexecution)]|false|none|The executions which match the request.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_Position">Position</h2>
<!-- backwards compatibility -->
<a id="schemaposition"></a>
<a id="schema_Position"></a>
<a id="tocSposition"></a>
<a id="tocsposition"></a>

```json
{
  "column": "string",
  "length": "string",
  "line": "string"
}
```

Position contains source position information about the stack trace element such as line number, column number and length of the code block in bytes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string(int64)|false|none|The source code column position (of the line) the current instruction was generated from.|
|length|string(int64)|false|none|The number of bytes of source code making up this stack trace element.|
|line|string(int64)|false|none|The source code line number the current instruction was generated from.|

<h2 id="tocS_StackTrace">StackTrace</h2>
<!-- backwards compatibility -->
<a id="schemastacktrace"></a>
<a id="schema_StackTrace"></a>
<a id="tocSstacktrace"></a>
<a id="tocsstacktrace"></a>

```json
{
  "elements": [
    {
      "position": {
        "column": "string",
        "length": "string",
        "line": "string"
      },
      "routine": "string",
      "step": "string"
    }
  ]
}
```

A collection of stack elements (frames) where an error occurred.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[[StackTraceElement](#schemastacktraceelement)]|false|none|An array of stack elements.|

<h2 id="tocS_StackTraceElement">StackTraceElement</h2>
<!-- backwards compatibility -->
<a id="schemastacktraceelement"></a>
<a id="schema_StackTraceElement"></a>
<a id="tocSstacktraceelement"></a>
<a id="tocsstacktraceelement"></a>

```json
{
  "position": {
    "column": "string",
    "length": "string",
    "line": "string"
  },
  "routine": "string",
  "step": "string"
}
```

A single stack element (frame) where an error occurred.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[Position](#schemaposition)|false|none|The source position information of the stack trace element.|
|routine|string|false|none|The routine where the error occurred.|
|step|string|false|none|The step the error occurred at.|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "currentSteps": [
    {
      "routine": "string",
      "step": "string"
    }
  ]
}
```

Represents the current status of this execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentSteps|[[Step](#schemastep)]|false|none|A list of currently executing or last executed step names for the workflow execution currently running. If the workflow has succeeded or failed, this is the last attempted or executed step. Presently, if the current step is inside a subworkflow, the list only includes that step. In the future, the list will contain items for each step in the call stack, starting with the outermost step in the `main` subworkflow, and ending with the most deeply nested step.|

<h2 id="tocS_Step">Step</h2>
<!-- backwards compatibility -->
<a id="schemastep"></a>
<a id="schema_Step"></a>
<a id="tocSstep"></a>
<a id="tocsstep"></a>

```json
{
  "routine": "string",
  "step": "string"
}
```

Represents a step of the workflow this execution is running.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|routine|string|false|none|Name of a routine within the workflow.|
|step|string|false|none|Name of a step within the routine.|
