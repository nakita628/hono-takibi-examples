<h1 id="airbyte-configuration-api">Airbyte Configuration API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Airbyte Configuration API
[https://airbyte.io](https://airbyte.io).

This API is a collection of HTTP RPC-style methods. While it is not a REST API, those familiar with REST should find the conventions of this API recognizable.

Here are some conventions that this API follows:
* All endpoints are http POST methods.
* All endpoints accept data via `application/json` request bodies. The API does not accept any data via query params.
* The naming convention for endpoints is: localhost:8000/{VERSION}/{METHOD_FAMILY}/{METHOD_NAME} e.g. `localhost:8000/v1/connections/create`.
* For all `update` methods, the whole object must be passed in, even the fields that did not change.

Authentication (OSS):
* When authenticating to the Configuration API, you must use Basic Authentication by setting the Authentication Header to Basic and base64 encoding the username and password (which are `airbyte` and `password` by default - so base64 encoding `airbyte:password` results in `YWlyYnl0ZTpwYXNzd29yZA==`). So the full header reads `'Authorization': "Basic YWlyYnl0ZTpwYXNzd29yZA=="`

Base URLs:

* <a href="http://airbyte.local">http://airbyte.local</a>

* <a href="http://localhost:8000/api">http://localhost:8000/api</a>

Email: <a href="mailto:contact@airbyte.io">contact@airbyte.io</a> 
License: <a href="https://opensource.org/licenses/MIT">MIT</a>

<a href="https://airbyte.io">Find out more about Airbyte</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="airbyte-configuration-api-workspace">workspace</h1>

Workspace related resources.

## Creates a workspace

<a id="opIdcreateWorkspace"></a>

> Code samples

```bash
curl https://example.com/v1/workspaces/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "anonymousDataCollection": true,
    "defaultGeography": "auto",
    "displaySetupWizard": true,
    "email": "user@example.com",
    "name": "string",
    "news": true,
    "notifications": [
      {
        "customerioConfiguration": {},
        "notificationType": "slack",
        "sendOnFailure": true,
        "sendOnSuccess": false,
        "slackConfiguration": {
          "webhook": "string"
        }
      }
    ],
    "securityUpdates": true,
    "webhookConfigs": [
      {
        "authToken": "string",
        "name": "string",
        "validationUrl": "string"
      }
    ]
  }'
```

`POST /v1/workspaces/create`

> Body parameter

```json
{
  "anonymousDataCollection": true,
  "defaultGeography": "auto",
  "displaySetupWizard": true,
  "email": "user@example.com",
  "name": "string",
  "news": true,
  "notifications": [
    {
      "customerioConfiguration": {},
      "notificationType": "slack",
      "sendOnFailure": true,
      "sendOnSuccess": false,
      "slackConfiguration": {
        "webhook": "string"
      }
    }
  ],
  "securityUpdates": true,
  "webhookConfigs": [
    {
      "authToken": "string",
      "name": "string",
      "validationUrl": "string"
    }
  ]
}
```

<h3 id="creates-a-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WorkspaceCreate](#schemaworkspacecreate)|true|none|
|» anonymousDataCollection|body|boolean|false|none|
|» defaultGeography|body|[Geography](#schemageography)|false|none|
|» displaySetupWizard|body|boolean|false|none|
|» email|body|string(email)|false|none|
|» name|body|string|true|none|
|» news|body|boolean|false|none|
|» notifications|body|[[Notification](#schemanotification)]|false|none|
|» securityUpdates|body|boolean|false|none|
|» webhookConfigs|body|[[WebhookConfigWrite](#schemawebhookconfigwrite)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» defaultGeography|auto|
|» defaultGeography|us|
|» defaultGeography|eu|

> Example responses

> 200 Response

```json
{
  "anonymousDataCollection": true,
  "customerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "defaultGeography": "auto",
  "displaySetupWizard": true,
  "email": "user@example.com",
  "feedbackDone": true,
  "firstCompletedSync": true,
  "initialSetupComplete": true,
  "name": "string",
  "news": true,
  "notifications": [
    {
      "customerioConfiguration": {},
      "notificationType": "slack",
      "sendOnFailure": true,
      "sendOnSuccess": false,
      "slackConfiguration": {
        "webhook": "string"
      }
    }
  ],
  "securityUpdates": true,
  "slug": "string",
  "webhookConfigs": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string"
    }
  ],
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="creates-a-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[WorkspaceRead](#schemaworkspaceread)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Deletes a workspace

<a id="opIddeleteWorkspace"></a>

> Code samples

```bash
curl https://example.com/v1/workspaces/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/workspaces/delete`

> Body parameter

```json
{
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="deletes-a-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WorkspaceIdRequestBody](#schemaworkspaceidrequestbody)|true|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="deletes-a-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The resource was deleted successfully.|None|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Find workspace by ID

<a id="opIdgetWorkspace"></a>

> Code samples

```bash
curl https://example.com/v1/workspaces/get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/workspaces/get`

> Body parameter

```json
{
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="find-workspace-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WorkspaceIdRequestBody](#schemaworkspaceidrequestbody)|true|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "anonymousDataCollection": true,
  "customerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "defaultGeography": "auto",
  "displaySetupWizard": true,
  "email": "user@example.com",
  "feedbackDone": true,
  "firstCompletedSync": true,
  "initialSetupComplete": true,
  "name": "string",
  "news": true,
  "notifications": [
    {
      "customerioConfiguration": {},
      "notificationType": "slack",
      "sendOnFailure": true,
      "sendOnSuccess": false,
      "slackConfiguration": {
        "webhook": "string"
      }
    }
  ],
  "securityUpdates": true,
  "slug": "string",
  "webhookConfigs": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string"
    }
  ],
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="find-workspace-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[WorkspaceRead](#schemaworkspaceread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Find workspace by connection id

<a id="opIdgetWorkspaceByConnectionId"></a>

> Code samples

```bash
curl https://example.com/v1/workspaces/get_by_connection_id \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/workspaces/get_by_connection_id`

> Body parameter

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="find-workspace-by-connection-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectionIdRequestBody](#schemaconnectionidrequestbody)|true|none|
|» connectionId|body|[ConnectionId](#schemaconnectionid)|true|none|

> Example responses

> 200 Response

```json
{
  "anonymousDataCollection": true,
  "customerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "defaultGeography": "auto",
  "displaySetupWizard": true,
  "email": "user@example.com",
  "feedbackDone": true,
  "firstCompletedSync": true,
  "initialSetupComplete": true,
  "name": "string",
  "news": true,
  "notifications": [
    {
      "customerioConfiguration": {},
      "notificationType": "slack",
      "sendOnFailure": true,
      "sendOnSuccess": false,
      "slackConfiguration": {
        "webhook": "string"
      }
    }
  ],
  "securityUpdates": true,
  "slug": "string",
  "webhookConfigs": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string"
    }
  ],
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="find-workspace-by-connection-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[WorkspaceRead](#schemaworkspaceread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Find workspace by slug

<a id="opIdgetWorkspaceBySlug"></a>

> Code samples

```bash
curl https://example.com/v1/workspaces/get_by_slug \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "slug": "string"
  }'
```

`POST /v1/workspaces/get_by_slug`

> Body parameter

```json
{
  "slug": "string"
}
```

<h3 id="find-workspace-by-slug-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SlugRequestBody](#schemaslugrequestbody)|true|none|
|» slug|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "anonymousDataCollection": true,
  "customerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "defaultGeography": "auto",
  "displaySetupWizard": true,
  "email": "user@example.com",
  "feedbackDone": true,
  "firstCompletedSync": true,
  "initialSetupComplete": true,
  "name": "string",
  "news": true,
  "notifications": [
    {
      "customerioConfiguration": {},
      "notificationType": "slack",
      "sendOnFailure": true,
      "sendOnSuccess": false,
      "slackConfiguration": {
        "webhook": "string"
      }
    }
  ],
  "securityUpdates": true,
  "slug": "string",
  "webhookConfigs": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string"
    }
  ],
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="find-workspace-by-slug-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[WorkspaceRead](#schemaworkspaceread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## List all workspaces registered in the current Airbyte deployment

<a id="opIdlistWorkspaces"></a>

> Code samples

```bash
curl https://example.com/v1/workspaces/list \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v1/workspaces/list`

> Example responses

> 200 Response

```json
{
  "workspaces": [
    {
      "anonymousDataCollection": true,
      "customerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "defaultGeography": "auto",
      "displaySetupWizard": true,
      "email": "user@example.com",
      "feedbackDone": true,
      "firstCompletedSync": true,
      "initialSetupComplete": true,
      "name": "string",
      "news": true,
      "notifications": [
        {
          "customerioConfiguration": {},
          "notificationType": "slack",
          "sendOnFailure": true,
          "sendOnSuccess": false,
          "slackConfiguration": {
            "webhook": "string"
          }
        }
      ],
      "securityUpdates": true,
      "slug": "string",
      "webhookConfigs": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string"
        }
      ],
      "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

<h3 id="list-all-workspaces-registered-in-the-current-airbyte-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[WorkspaceReadList](#schemaworkspacereadlist)|

<aside class="success">
This operation does not require authentication
</aside>

## Update workspace feedback state

<a id="opIdupdateWorkspaceFeedback"></a>

> Code samples

```bash
curl https://example.com/v1/workspaces/tag_feedback_status_as_done \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/workspaces/tag_feedback_status_as_done`

> Body parameter

```json
{
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="update-workspace-feedback-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WorkspaceGiveFeedback](#schemaworkspacegivefeedback)|true|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

<h3 id="update-workspace-feedback-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The feedback state has been properly updated|None|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Update workspace state

<a id="opIdupdateWorkspace"></a>

> Code samples

```bash
curl https://example.com/v1/workspaces/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "anonymousDataCollection": true,
    "defaultGeography": "auto",
    "displaySetupWizard": true,
    "email": "user@example.com",
    "initialSetupComplete": true,
    "news": true,
    "notifications": [
      {
        "customerioConfiguration": {},
        "notificationType": "slack",
        "sendOnFailure": true,
        "sendOnSuccess": false,
        "slackConfiguration": {
          "webhook": "string"
        }
      }
    ],
    "securityUpdates": true,
    "webhookConfigs": [
      {
        "authToken": "string",
        "name": "string",
        "validationUrl": "string"
      }
    ],
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/workspaces/update`

> Body parameter

```json
{
  "anonymousDataCollection": true,
  "defaultGeography": "auto",
  "displaySetupWizard": true,
  "email": "user@example.com",
  "initialSetupComplete": true,
  "news": true,
  "notifications": [
    {
      "customerioConfiguration": {},
      "notificationType": "slack",
      "sendOnFailure": true,
      "sendOnSuccess": false,
      "slackConfiguration": {
        "webhook": "string"
      }
    }
  ],
  "securityUpdates": true,
  "webhookConfigs": [
    {
      "authToken": "string",
      "name": "string",
      "validationUrl": "string"
    }
  ],
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="update-workspace-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WorkspaceUpdate](#schemaworkspaceupdate)|true|none|
|» anonymousDataCollection|body|boolean|false|none|
|» defaultGeography|body|[Geography](#schemageography)|false|none|
|» displaySetupWizard|body|boolean|false|none|
|» email|body|string(email)|false|none|
|» initialSetupComplete|body|boolean|false|none|
|» news|body|boolean|false|none|
|» notifications|body|[[Notification](#schemanotification)]|false|none|
|» securityUpdates|body|boolean|false|none|
|» webhookConfigs|body|[[WebhookConfigWrite](#schemawebhookconfigwrite)]|false|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» defaultGeography|auto|
|» defaultGeography|us|
|» defaultGeography|eu|

> Example responses

> 200 Response

```json
{
  "anonymousDataCollection": true,
  "customerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "defaultGeography": "auto",
  "displaySetupWizard": true,
  "email": "user@example.com",
  "feedbackDone": true,
  "firstCompletedSync": true,
  "initialSetupComplete": true,
  "name": "string",
  "news": true,
  "notifications": [
    {
      "customerioConfiguration": {},
      "notificationType": "slack",
      "sendOnFailure": true,
      "sendOnSuccess": false,
      "slackConfiguration": {
        "webhook": "string"
      }
    }
  ],
  "securityUpdates": true,
  "slug": "string",
  "webhookConfigs": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string"
    }
  ],
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="update-workspace-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[WorkspaceRead](#schemaworkspaceread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Update workspace name

<a id="opIdupdateWorkspaceName"></a>

> Code samples

```bash
curl https://example.com/v1/workspaces/update_name \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/workspaces/update_name`

> Body parameter

```json
{
  "name": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="update-workspace-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WorkspaceUpdateName](#schemaworkspaceupdatename)|true|none|
|» name|body|string|true|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "anonymousDataCollection": true,
  "customerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "defaultGeography": "auto",
  "displaySetupWizard": true,
  "email": "user@example.com",
  "feedbackDone": true,
  "firstCompletedSync": true,
  "initialSetupComplete": true,
  "name": "string",
  "news": true,
  "notifications": [
    {
      "customerioConfiguration": {},
      "notificationType": "slack",
      "sendOnFailure": true,
      "sendOnSuccess": false,
      "slackConfiguration": {
        "webhook": "string"
      }
    }
  ],
  "securityUpdates": true,
  "slug": "string",
  "webhookConfigs": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string"
    }
  ],
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="update-workspace-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[WorkspaceRead](#schemaworkspaceread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airbyte-configuration-api-sourcedefinition">source_definition</h1>

SourceDefinition related resources.

## Creates a custom sourceDefinition for the given workspace

<a id="opIdcreateCustomSourceDefinition"></a>

> Code samples

```bash
curl https://example.com/v1/source_definitions/create_custom \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "sourceDefinition": {
      "dockerImageTag": "string",
      "dockerRepository": "string",
      "documentationUrl": "http://example.com",
      "icon": "string",
      "name": "string",
      "resourceRequirements": {
        "default": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        },
        "jobSpecific": [
          {
            "jobType": "get_spec",
            "resourceRequirements": {
              "cpu_limit": "string",
              "cpu_request": "string",
              "memory_limit": "string",
              "memory_request": "string"
            }
          }
        ]
      }
    },
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/source_definitions/create_custom`

> Body parameter

```json
{
  "sourceDefinition": {
    "dockerImageTag": "string",
    "dockerRepository": "string",
    "documentationUrl": "http://example.com",
    "icon": "string",
    "name": "string",
    "resourceRequirements": {
      "default": {
        "cpu_limit": "string",
        "cpu_request": "string",
        "memory_limit": "string",
        "memory_request": "string"
      },
      "jobSpecific": [
        {
          "jobType": "get_spec",
          "resourceRequirements": {
            "cpu_limit": "string",
            "cpu_request": "string",
            "memory_limit": "string",
            "memory_request": "string"
          }
        }
      ]
    }
  },
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="creates-a-custom-sourcedefinition-for-the-given-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CustomSourceDefinitionCreate](#schemacustomsourcedefinitioncreate)|false|none|
|» sourceDefinition|body|[SourceDefinitionCreate](#schemasourcedefinitioncreate)|true|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "dockerImageTag": "string",
  "dockerRepository": "string",
  "documentationUrl": "http://example.com",
  "icon": "string",
  "name": "string",
  "protocolVersion": "string",
  "releaseDate": "1970-01-01",
  "releaseStage": "alpha",
  "resourceRequirements": {
    "default": {
      "cpu_limit": "string",
      "cpu_request": "string",
      "memory_limit": "string",
      "memory_request": "string"
    },
    "jobSpecific": [
      {
        "jobType": "get_spec",
        "resourceRequirements": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        }
      }
    ]
  },
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceType": "api"
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="creates-a-custom-sourcedefinition-for-the-given-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SourceDefinitionRead](#schemasourcedefinitionread)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a source definition

<a id="opIddeleteSourceDefinition"></a>

> Code samples

```bash
curl https://example.com/v1/source_definitions/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/source_definitions/delete`

> Body parameter

```json
{
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete-a-source-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SourceDefinitionIdRequestBody](#schemasourcedefinitionidrequestbody)|true|none|
|» sourceDefinitionId|body|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|

> Example responses

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="delete-a-source-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The resource was deleted successfully.|None|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get source

<a id="opIdgetSourceDefinition"></a>

> Code samples

```bash
curl https://example.com/v1/source_definitions/get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/source_definitions/get`

> Body parameter

```json
{
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="get-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SourceDefinitionIdRequestBody](#schemasourcedefinitionidrequestbody)|true|none|
|» sourceDefinitionId|body|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|

> Example responses

> 200 Response

```json
{
  "dockerImageTag": "string",
  "dockerRepository": "string",
  "documentationUrl": "http://example.com",
  "icon": "string",
  "name": "string",
  "protocolVersion": "string",
  "releaseDate": "1970-01-01",
  "releaseStage": "alpha",
  "resourceRequirements": {
    "default": {
      "cpu_limit": "string",
      "cpu_request": "string",
      "memory_limit": "string",
      "memory_request": "string"
    },
    "jobSpecific": [
      {
        "jobType": "get_spec",
        "resourceRequirements": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        }
      }
    ]
  },
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceType": "api"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="get-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SourceDefinitionRead](#schemasourcedefinitionread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a sourceDefinition that is configured for the given workspace

<a id="opIdgetSourceDefinitionForWorkspace"></a>

> Code samples

```bash
curl https://example.com/v1/source_definitions/get_for_workspace \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/source_definitions/get_for_workspace`

> Body parameter

```json
{
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="get-a-sourcedefinition-that-is-configured-for-the-given-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SourceDefinitionIdWithWorkspaceId](#schemasourcedefinitionidwithworkspaceid)|true|none|
|» sourceDefinitionId|body|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "dockerImageTag": "string",
  "dockerRepository": "string",
  "documentationUrl": "http://example.com",
  "icon": "string",
  "name": "string",
  "protocolVersion": "string",
  "releaseDate": "1970-01-01",
  "releaseStage": "alpha",
  "resourceRequirements": {
    "default": {
      "cpu_limit": "string",
      "cpu_request": "string",
      "memory_limit": "string",
      "memory_request": "string"
    },
    "jobSpecific": [
      {
        "jobType": "get_spec",
        "resourceRequirements": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        }
      }
    ]
  },
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceType": "api"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="get-a-sourcedefinition-that-is-configured-for-the-given-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SourceDefinitionRead](#schemasourcedefinitionread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## grant a private, non-custom sourceDefinition to a given workspace

<a id="opIdgrantSourceDefinitionToWorkspace"></a>

> Code samples

```bash
curl https://example.com/v1/source_definitions/grant_definition \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/source_definitions/grant_definition`

> Body parameter

```json
{
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="grant-a-private-non-custom-sourcedefinition-to-a-given-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SourceDefinitionIdWithWorkspaceId](#schemasourcedefinitionidwithworkspaceid)|true|none|
|» sourceDefinitionId|body|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "granted": true,
  "sourceDefinition": {
    "dockerImageTag": "string",
    "dockerRepository": "string",
    "documentationUrl": "http://example.com",
    "icon": "string",
    "name": "string",
    "protocolVersion": "string",
    "releaseDate": "1970-01-01",
    "releaseStage": "alpha",
    "resourceRequirements": {
      "default": {
        "cpu_limit": "string",
        "cpu_request": "string",
        "memory_limit": "string",
        "memory_request": "string"
      },
      "jobSpecific": [
        {
          "jobType": "get_spec",
          "resourceRequirements": {
            "cpu_limit": "string",
            "cpu_request": "string",
            "memory_limit": "string",
            "memory_request": "string"
          }
        }
      ]
    },
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceType": "api"
  }
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="grant-a-private-non-custom-sourcedefinition-to-a-given-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[PrivateSourceDefinitionRead](#schemaprivatesourcedefinitionread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## List all the sourceDefinitions the current Airbyte deployment is configured to use

<a id="opIdlistSourceDefinitions"></a>

> Code samples

```bash
curl https://example.com/v1/source_definitions/list \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v1/source_definitions/list`

> Example responses

> 200 Response

```json
{
  "sourceDefinitions": [
    {
      "dockerImageTag": "string",
      "dockerRepository": "string",
      "documentationUrl": "http://example.com",
      "icon": "string",
      "name": "string",
      "protocolVersion": "string",
      "releaseDate": "1970-01-01",
      "releaseStage": "alpha",
      "resourceRequirements": {
        "default": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        },
        "jobSpecific": [
          {
            "jobType": "get_spec",
            "resourceRequirements": {
              "cpu_limit": "string",
              "cpu_request": "string",
              "memory_limit": "string",
              "memory_request": "string"
            }
          }
        ]
      },
      "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sourceType": "api"
    }
  ]
}
```

<h3 id="list-all-the-sourcedefinitions-the-current-airbyte-deployment-is-configured-to-use-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SourceDefinitionReadList](#schemasourcedefinitionreadlist)|

<aside class="success">
This operation does not require authentication
</aside>

## List all the sourceDefinitions the given workspace is configured to use

<a id="opIdlistSourceDefinitionsForWorkspace"></a>

> Code samples

```bash
curl https://example.com/v1/source_definitions/list_for_workspace \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/source_definitions/list_for_workspace`

> Body parameter

```json
{
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="list-all-the-sourcedefinitions-the-given-workspace-is-configured-to-use-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WorkspaceIdRequestBody](#schemaworkspaceidrequestbody)|false|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "sourceDefinitions": [
    {
      "dockerImageTag": "string",
      "dockerRepository": "string",
      "documentationUrl": "http://example.com",
      "icon": "string",
      "name": "string",
      "protocolVersion": "string",
      "releaseDate": "1970-01-01",
      "releaseStage": "alpha",
      "resourceRequirements": {
        "default": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        },
        "jobSpecific": [
          {
            "jobType": "get_spec",
            "resourceRequirements": {
              "cpu_limit": "string",
              "cpu_request": "string",
              "memory_limit": "string",
              "memory_request": "string"
            }
          }
        ]
      },
      "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sourceType": "api"
    }
  ]
}
```

<h3 id="list-all-the-sourcedefinitions-the-given-workspace-is-configured-to-use-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SourceDefinitionReadList](#schemasourcedefinitionreadlist)|

<aside class="success">
This operation does not require authentication
</aside>

## List the latest sourceDefinitions Airbyte supports

<a id="opIdlistLatestSourceDefinitions"></a>

> Code samples

```bash
curl https://example.com/v1/source_definitions/list_latest \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v1/source_definitions/list_latest`

Guaranteed to retrieve the latest information on supported sources.

> Example responses

> 200 Response

```json
{
  "sourceDefinitions": [
    {
      "dockerImageTag": "string",
      "dockerRepository": "string",
      "documentationUrl": "http://example.com",
      "icon": "string",
      "name": "string",
      "protocolVersion": "string",
      "releaseDate": "1970-01-01",
      "releaseStage": "alpha",
      "resourceRequirements": {
        "default": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        },
        "jobSpecific": [
          {
            "jobType": "get_spec",
            "resourceRequirements": {
              "cpu_limit": "string",
              "cpu_request": "string",
              "memory_limit": "string",
              "memory_request": "string"
            }
          }
        ]
      },
      "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sourceType": "api"
    }
  ]
}
```

<h3 id="list-the-latest-sourcedefinitions-airbyte-supports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SourceDefinitionReadList](#schemasourcedefinitionreadlist)|

<aside class="success">
This operation does not require authentication
</aside>

## List all private, non-custom sourceDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.

<a id="opIdlistPrivateSourceDefinitions"></a>

> Code samples

```bash
curl https://example.com/v1/source_definitions/list_private \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/source_definitions/list_private`

> Body parameter

```json
{
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="list-all-private-non-custom-sourcedefinitions-and-for-each-indicate-whether-the-given-workspace-has-a-grant-for-using-the-definition-used-by-admins-to-view-and-modify-a-given-workspaces-grants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WorkspaceIdRequestBody](#schemaworkspaceidrequestbody)|false|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "sourceDefinitions": [
    {
      "granted": true,
      "sourceDefinition": {
        "dockerImageTag": "string",
        "dockerRepository": "string",
        "documentationUrl": "http://example.com",
        "icon": "string",
        "name": "string",
        "protocolVersion": "string",
        "releaseDate": "1970-01-01",
        "releaseStage": "alpha",
        "resourceRequirements": {
          "default": {
            "cpu_limit": "string",
            "cpu_request": "string",
            "memory_limit": "string",
            "memory_request": "string"
          },
          "jobSpecific": [
            {
              "jobType": "get_spec",
              "resourceRequirements": {
                "cpu_limit": "string",
                "cpu_request": "string",
                "memory_limit": "string",
                "memory_request": "string"
              }
            }
          ]
        },
        "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "sourceType": "api"
      }
    }
  ]
}
```

<h3 id="list-all-private-non-custom-sourcedefinitions-and-for-each-indicate-whether-the-given-workspace-has-a-grant-for-using-the-definition-used-by-admins-to-view-and-modify-a-given-workspaces-grants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[PrivateSourceDefinitionReadList](#schemaprivatesourcedefinitionreadlist)|

<aside class="success">
This operation does not require authentication
</aside>

## revoke a grant to a private, non-custom sourceDefinition from a given workspace

<a id="opIdrevokeSourceDefinitionFromWorkspace"></a>

> Code samples

```bash
curl https://example.com/v1/source_definitions/revoke_definition \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/source_definitions/revoke_definition`

> Body parameter

```json
{
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="revoke-a-grant-to-a-private-non-custom-sourcedefinition-from-a-given-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SourceDefinitionIdWithWorkspaceId](#schemasourcedefinitionidwithworkspaceid)|true|none|
|» sourceDefinitionId|body|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="revoke-a-grant-to-a-private-non-custom-sourcedefinition-from-a-given-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The resource was deleted successfully.|None|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a sourceDefinition

<a id="opIdupdateSourceDefinition"></a>

> Code samples

```bash
curl https://example.com/v1/source_definitions/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "dockerImageTag": "string",
    "resourceRequirements": {
      "default": {
        "cpu_limit": "string",
        "cpu_request": "string",
        "memory_limit": "string",
        "memory_request": "string"
      },
      "jobSpecific": [
        {
          "jobType": "get_spec",
          "resourceRequirements": {
            "cpu_limit": "string",
            "cpu_request": "string",
            "memory_limit": "string",
            "memory_request": "string"
          }
        }
      ]
    },
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/source_definitions/update`

> Body parameter

```json
{
  "dockerImageTag": "string",
  "resourceRequirements": {
    "default": {
      "cpu_limit": "string",
      "cpu_request": "string",
      "memory_limit": "string",
      "memory_request": "string"
    },
    "jobSpecific": [
      {
        "jobType": "get_spec",
        "resourceRequirements": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        }
      }
    ]
  },
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="update-a-sourcedefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SourceDefinitionUpdate](#schemasourcedefinitionupdate)|false|none|
|» dockerImageTag|body|string|true|none|
|» resourceRequirements|body|[ActorDefinitionResourceRequirements](#schemaactordefinitionresourcerequirements)|false|actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level.|
|» sourceDefinitionId|body|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|

> Example responses

> 200 Response

```json
{
  "dockerImageTag": "string",
  "dockerRepository": "string",
  "documentationUrl": "http://example.com",
  "icon": "string",
  "name": "string",
  "protocolVersion": "string",
  "releaseDate": "1970-01-01",
  "releaseStage": "alpha",
  "resourceRequirements": {
    "default": {
      "cpu_limit": "string",
      "cpu_request": "string",
      "memory_limit": "string",
      "memory_request": "string"
    },
    "jobSpecific": [
      {
        "jobType": "get_spec",
        "resourceRequirements": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        }
      }
    ]
  },
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceType": "api"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="update-a-sourcedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SourceDefinitionRead](#schemasourcedefinitionread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airbyte-configuration-api-sourcedefinitionspecification">source_definition_specification</h1>

SourceDefinition specification related resources.

## Get specification for a SourceDefinition.

<a id="opIdgetSourceDefinitionSpecification"></a>

> Code samples

```bash
curl https://example.com/v1/source_definition_specifications/get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/source_definition_specifications/get`

> Body parameter

```json
{
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="get-specification-for-a-sourcedefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SourceDefinitionIdWithWorkspaceId](#schemasourcedefinitionidwithworkspaceid)|true|none|
|» sourceDefinitionId|body|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "advancedAuth": {
    "authFlowType": "oauth2.0",
    "oauthConfigSpecification": {
      "completeOAuthOutputSpecification": null,
      "completeOAuthServerInputSpecification": null,
      "completeOAuthServerOutputSpecification": null,
      "oauthUserInputFromConnectorConfigSpecification": null
    },
    "predicateKey": [
      "string"
    ],
    "predicateValue": "string"
  },
  "authSpecification": {
    "auth_type": "oauth2.0",
    "oauth2Specification": {
      "oauthFlowInitParameters": [
        [
          "string"
        ]
      ],
      "oauthFlowOutputParameters": [
        [
          "string"
        ]
      ],
      "rootObject": [
        "path",
        1
      ]
    }
  },
  "connectionSpecification": {
    "user": {
      "type": "string"
    }
  },
  "documentationUrl": "string",
  "jobInfo": {
    "configId": "string",
    "configType": "check_connection_source",
    "connectorConfigurationUpdated": false,
    "createdAt": 0,
    "endedAt": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "logs": {
      "logLines": [
        "string"
      ]
    },
    "succeeded": true
  },
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="get-specification-for-a-sourcedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SourceDefinitionSpecificationRead](#schemasourcedefinitionspecificationread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airbyte-configuration-api-source">source</h1>

Source related resources.

## Check connection to the source

<a id="opIdcheckConnectionToSource"></a>

> Code samples

```bash
curl https://example.com/v1/sources/check_connection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/sources/check_connection`

> Body parameter

```json
{
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="check-connection-to-the-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SourceIdRequestBody](#schemasourceidrequestbody)|true|none|
|» sourceId|body|[SourceId](#schemasourceid)|true|none|

> Example responses

> 200 Response

```json
{
  "jobInfo": {
    "configId": "string",
    "configType": "check_connection_source",
    "connectorConfigurationUpdated": false,
    "createdAt": 0,
    "endedAt": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "logs": {
      "logLines": [
        "string"
      ]
    },
    "succeeded": true
  },
  "message": "string",
  "status": "succeeded"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="check-connection-to-the-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CheckConnectionRead](#schemacheckconnectionread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Check connection for a proposed update to a source

<a id="opIdcheckConnectionToSourceForUpdate"></a>

> Code samples

```bash
curl https://example.com/v1/sources/check_connection_for_update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionConfiguration": {
      "user": "charles"
    },
    "name": "string",
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/sources/check_connection_for_update`

> Body parameter

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "name": "string",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="check-connection-for-a-proposed-update-to-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SourceUpdate](#schemasourceupdate)|true|none|
|» connectionConfiguration|body|[SourceConfiguration](#schemasourceconfiguration)|true|The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.|
|» name|body|string|true|none|
|» sourceId|body|[SourceId](#schemasourceid)|true|none|

> Example responses

> 200 Response

```json
{
  "jobInfo": {
    "configId": "string",
    "configType": "check_connection_source",
    "connectorConfigurationUpdated": false,
    "createdAt": 0,
    "endedAt": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "logs": {
      "logLines": [
        "string"
      ]
    },
    "succeeded": true
  },
  "message": "string",
  "status": "succeeded"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="check-connection-for-a-proposed-update-to-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CheckConnectionRead](#schemacheckconnectionread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Clone source

<a id="opIdcloneSource"></a>

> Code samples

```bash
curl https://example.com/v1/sources/clone \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "sourceCloneId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceConfiguration": {
      "connectionConfiguration": {
        "user": "charles"
      },
      "name": "string"
    }
  }'
```

`POST /v1/sources/clone`

> Body parameter

```json
{
  "sourceCloneId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceConfiguration": {
    "connectionConfiguration": {
      "user": "charles"
    },
    "name": "string"
  }
}
```

<h3 id="clone-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SourceCloneRequestBody](#schemasourceclonerequestbody)|true|none|
|» sourceCloneId|body|[SourceId](#schemasourceid)|true|none|
|» sourceConfiguration|body|[SourceCloneConfiguration](#schemasourcecloneconfiguration)|false|none|

> Example responses

> 200 Response

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "icon": "string",
  "name": "string",
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceName": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="clone-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SourceRead](#schemasourceread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a source

<a id="opIdcreateSource"></a>

> Code samples

```bash
curl https://example.com/v1/sources/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionConfiguration": {
      "user": "charles"
    },
    "name": "string",
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/sources/create`

> Body parameter

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "name": "string",
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="create-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SourceCreate](#schemasourcecreate)|true|none|
|» connectionConfiguration|body|[SourceConfiguration](#schemasourceconfiguration)|true|The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.|
|» name|body|string|true|none|
|» sourceDefinitionId|body|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "icon": "string",
  "name": "string",
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceName": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="create-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SourceRead](#schemasourceread)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a source

<a id="opIddeleteSource"></a>

> Code samples

```bash
curl https://example.com/v1/sources/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/sources/delete`

> Body parameter

```json
{
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SourceIdRequestBody](#schemasourceidrequestbody)|true|none|
|» sourceId|body|[SourceId](#schemasourceid)|true|none|

> Example responses

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="delete-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The resource was deleted successfully.|None|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Discover the schema catalog of the source

<a id="opIddiscoverSchemaForSource"></a>

> Code samples

```bash
curl https://example.com/v1/sources/discover_schema \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "disable_cache": true,
    "notifySchemaChange": true,
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/sources/discover_schema`

> Body parameter

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "disable_cache": true,
  "notifySchemaChange": true,
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="discover-the-schema-catalog-of-the-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SourceDiscoverSchemaRequestBody](#schemasourcediscoverschemarequestbody)|true|none|
|» connectionId|body|string(uuid)|false|none|
|» disable_cache|body|boolean|false|none|
|» notifySchemaChange|body|boolean|false|none|
|» sourceId|body|[SourceId](#schemasourceid)|true|none|

> Example responses

> 200 Response

```json
{
  "breakingChange": true,
  "catalog": {
    "streams": [
      {
        "config": {
          "aliasName": "string",
          "cursorField": [
            "string"
          ],
          "destinationSyncMode": "append",
          "fieldSelectionEnabled": true,
          "primaryKey": [
            [
              "string"
            ]
          ],
          "selected": true,
          "selectedFields": [
            {
              "fieldPath": [
                "string"
              ]
            }
          ],
          "suggested": true,
          "syncMode": "full_refresh"
        },
        "stream": {
          "defaultCursorField": [
            "string"
          ],
          "jsonSchema": {},
          "name": "string",
          "namespace": "string",
          "sourceDefinedCursor": true,
          "sourceDefinedPrimaryKey": [
            [
              "string"
            ]
          ],
          "supportedSyncModes": [
            "full_refresh"
          ]
        }
      }
    ]
  },
  "catalogDiff": {
    "transforms": [
      {
        "streamDescriptor": {
          "name": "string",
          "namespace": "string"
        },
        "transformType": "add_stream",
        "updateStream": [
          {
            "addField": {
              "schema": {}
            },
            "breaking": true,
            "fieldName": [
              "string"
            ],
            "removeField": {
              "schema": {}
            },
            "transformType": "add_field",
            "updateFieldSchema": {
              "newSchema": {},
              "oldSchema": {}
            }
          }
        ]
      }
    ]
  },
  "catalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "connectionStatus": "active",
  "jobInfo": {
    "configId": "string",
    "configType": "check_connection_source",
    "connectorConfigurationUpdated": false,
    "createdAt": 0,
    "endedAt": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "logs": {
      "logLines": [
        "string"
      ]
    },
    "succeeded": true
  }
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="discover-the-schema-catalog-of-the-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SourceDiscoverSchemaRead](#schemasourcediscoverschemaread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get source

<a id="opIdgetSource"></a>

> Code samples

```bash
curl https://example.com/v1/sources/get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/sources/get`

> Body parameter

```json
{
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="get-source-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SourceIdRequestBody](#schemasourceidrequestbody)|true|none|
|» sourceId|body|[SourceId](#schemasourceid)|true|none|

> Example responses

> 200 Response

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "icon": "string",
  "name": "string",
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceName": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="get-source-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SourceRead](#schemasourceread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## List sources for workspace

<a id="opIdlistSourcesForWorkspace"></a>

> Code samples

```bash
curl https://example.com/v1/sources/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/sources/list`

List sources for workspace. Does not return deleted sources.

> Body parameter

```json
{
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="list-sources-for-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WorkspaceIdRequestBody](#schemaworkspaceidrequestbody)|true|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "sources": [
    {
      "connectionConfiguration": {
        "user": "charles"
      },
      "icon": "string",
      "name": "string",
      "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sourceName": "string",
      "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="list-sources-for-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SourceReadList](#schemasourcereadlist)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get most recent ActorCatalog for source

<a id="opIdgetMostRecentSourceActorCatalog"></a>

> Code samples

```bash
curl https://example.com/v1/sources/most_recent_source_actor_catalog \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/sources/most_recent_source_actor_catalog`

> Body parameter

```json
{
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="get-most-recent-actorcatalog-for-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SourceIdRequestBody](#schemasourceidrequestbody)|true|none|
|» sourceId|body|[SourceId](#schemasourceid)|true|none|

> Example responses

> 200 Response

```json
{
  "catalog": {},
  "updatedAt": 0
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="get-most-recent-actorcatalog-for-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ActorCatalogWithUpdatedAt](#schemaactorcatalogwithupdatedat)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Search sources

<a id="opIdsearchSources"></a>

> Code samples

```bash
curl https://example.com/v1/sources/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionConfiguration": {
      "user": "charles"
    },
    "name": "string",
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceName": "string",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/sources/search`

> Body parameter

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "name": "string",
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceName": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="search-sources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SourceSearch](#schemasourcesearch)|true|none|
|» connectionConfiguration|body|[SourceConfiguration](#schemasourceconfiguration)|false|The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.|
|» name|body|string|false|none|
|» sourceDefinitionId|body|[SourceDefinitionId](#schemasourcedefinitionid)|false|none|
|» sourceId|body|[SourceId](#schemasourceid)|false|none|
|» sourceName|body|string|false|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|false|none|

> Example responses

> 200 Response

```json
{
  "sources": [
    {
      "connectionConfiguration": {
        "user": "charles"
      },
      "icon": "string",
      "name": "string",
      "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sourceName": "string",
      "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="search-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SourceReadList](#schemasourcereadlist)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a source

<a id="opIdupdateSource"></a>

> Code samples

```bash
curl https://example.com/v1/sources/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionConfiguration": {
      "user": "charles"
    },
    "name": "string",
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/sources/update`

> Body parameter

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "name": "string",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="update-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SourceUpdate](#schemasourceupdate)|true|none|
|» connectionConfiguration|body|[SourceConfiguration](#schemasourceconfiguration)|true|The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.|
|» name|body|string|true|none|
|» sourceId|body|[SourceId](#schemasourceid)|true|none|

> Example responses

> 200 Response

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "icon": "string",
  "name": "string",
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceName": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="update-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SourceRead](#schemasourceread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Should only called from worker, to write result from discover activity back to DB.

<a id="opIdwriteDiscoverCatalogResult"></a>

> Code samples

```bash
curl https://example.com/v1/sources/write_discover_catalog_result \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "catalog": {
      "streams": [
        {
          "config": {
            "aliasName": "string",
            "cursorField": [
              "string"
            ],
            "destinationSyncMode": "append",
            "fieldSelectionEnabled": true,
            "primaryKey": [
              [
                "string"
              ]
            ],
            "selected": true,
            "selectedFields": [
              {
                "fieldPath": [
                  "string"
                ]
              }
            ],
            "suggested": true,
            "syncMode": "full_refresh"
          },
          "stream": {
            "defaultCursorField": [
              "string"
            ],
            "jsonSchema": {},
            "name": "string",
            "namespace": "string",
            "sourceDefinedCursor": true,
            "sourceDefinedPrimaryKey": [
              [
                "string"
              ]
            ],
            "supportedSyncModes": [
              "full_refresh"
            ]
          }
        }
      ]
    },
    "configurationHash": "string",
    "connectorVersion": "string",
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/sources/write_discover_catalog_result`

> Body parameter

```json
{
  "catalog": {
    "streams": [
      {
        "config": {
          "aliasName": "string",
          "cursorField": [
            "string"
          ],
          "destinationSyncMode": "append",
          "fieldSelectionEnabled": true,
          "primaryKey": [
            [
              "string"
            ]
          ],
          "selected": true,
          "selectedFields": [
            {
              "fieldPath": [
                "string"
              ]
            }
          ],
          "suggested": true,
          "syncMode": "full_refresh"
        },
        "stream": {
          "defaultCursorField": [
            "string"
          ],
          "jsonSchema": {},
          "name": "string",
          "namespace": "string",
          "sourceDefinedCursor": true,
          "sourceDefinedPrimaryKey": [
            [
              "string"
            ]
          ],
          "supportedSyncModes": [
            "full_refresh"
          ]
        }
      }
    ]
  },
  "configurationHash": "string",
  "connectorVersion": "string",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="should-only-called-from-worker-to-write-result-from-discover-activity-back-to-db-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SourceDiscoverSchemaWriteRequestBody](#schemasourcediscoverschemawriterequestbody)|true|none|
|» catalog|body|[AirbyteCatalog](#schemaairbytecatalog)|true|describes the available schema (catalog).|
|» configurationHash|body|string|false|none|
|» connectorVersion|body|string|false|none|
|» sourceId|body|[SourceId](#schemasourceid)|false|none|

> Example responses

> 200 Response

```json
{
  "catalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="should-only-called-from-worker-to-write-result-from-discover-activity-back-to-db-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[DiscoverCatalogResult](#schemadiscovercatalogresult)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airbyte-configuration-api-destinationdefinition">destination_definition</h1>

DestinationDefinition related resources.

## Creates a custom destinationDefinition for the given workspace

<a id="opIdcreateCustomDestinationDefinition"></a>

> Code samples

```bash
curl https://example.com/v1/destination_definitions/create_custom \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinationDefinition": {
      "dockerImageTag": "string",
      "dockerRepository": "string",
      "documentationUrl": "http://example.com",
      "icon": "string",
      "name": "string",
      "resourceRequirements": {
        "default": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        },
        "jobSpecific": [
          {
            "jobType": "get_spec",
            "resourceRequirements": {
              "cpu_limit": "string",
              "cpu_request": "string",
              "memory_limit": "string",
              "memory_request": "string"
            }
          }
        ]
      }
    },
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/destination_definitions/create_custom`

> Body parameter

```json
{
  "destinationDefinition": {
    "dockerImageTag": "string",
    "dockerRepository": "string",
    "documentationUrl": "http://example.com",
    "icon": "string",
    "name": "string",
    "resourceRequirements": {
      "default": {
        "cpu_limit": "string",
        "cpu_request": "string",
        "memory_limit": "string",
        "memory_request": "string"
      },
      "jobSpecific": [
        {
          "jobType": "get_spec",
          "resourceRequirements": {
            "cpu_limit": "string",
            "cpu_request": "string",
            "memory_limit": "string",
            "memory_request": "string"
          }
        }
      ]
    }
  },
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="creates-a-custom-destinationdefinition-for-the-given-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CustomDestinationDefinitionCreate](#schemacustomdestinationdefinitioncreate)|false|none|
|» destinationDefinition|body|[DestinationDefinitionCreate](#schemadestinationdefinitioncreate)|true|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dockerImageTag": "string",
  "dockerRepository": "string",
  "documentationUrl": "http://example.com",
  "icon": "string",
  "name": "string",
  "normalizationConfig": {
    "normalizationIntegrationType": "string",
    "normalizationRepository": "string",
    "normalizationTag": "string",
    "supported": false
  },
  "protocolVersion": "string",
  "releaseDate": "1970-01-01",
  "releaseStage": "alpha",
  "resourceRequirements": {
    "default": {
      "cpu_limit": "string",
      "cpu_request": "string",
      "memory_limit": "string",
      "memory_request": "string"
    },
    "jobSpecific": [
      {
        "jobType": "get_spec",
        "resourceRequirements": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        }
      }
    ]
  },
  "supportsDbt": true
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="creates-a-custom-destinationdefinition-for-the-given-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DestinationDefinitionRead](#schemadestinationdefinitionread)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a destination definition

<a id="opIddeleteDestinationDefinition"></a>

> Code samples

```bash
curl https://example.com/v1/destination_definitions/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/destination_definitions/delete`

> Body parameter

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete-a-destination-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DestinationDefinitionIdRequestBody](#schemadestinationdefinitionidrequestbody)|true|none|
|» destinationDefinitionId|body|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|

> Example responses

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="delete-a-destination-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The resource was deleted successfully.|None|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get destinationDefinition

<a id="opIdgetDestinationDefinition"></a>

> Code samples

```bash
curl https://example.com/v1/destination_definitions/get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/destination_definitions/get`

> Body parameter

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="get-destinationdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DestinationDefinitionIdRequestBody](#schemadestinationdefinitionidrequestbody)|true|none|
|» destinationDefinitionId|body|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|

> Example responses

> 200 Response

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dockerImageTag": "string",
  "dockerRepository": "string",
  "documentationUrl": "http://example.com",
  "icon": "string",
  "name": "string",
  "normalizationConfig": {
    "normalizationIntegrationType": "string",
    "normalizationRepository": "string",
    "normalizationTag": "string",
    "supported": false
  },
  "protocolVersion": "string",
  "releaseDate": "1970-01-01",
  "releaseStage": "alpha",
  "resourceRequirements": {
    "default": {
      "cpu_limit": "string",
      "cpu_request": "string",
      "memory_limit": "string",
      "memory_request": "string"
    },
    "jobSpecific": [
      {
        "jobType": "get_spec",
        "resourceRequirements": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        }
      }
    ]
  },
  "supportsDbt": true
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="get-destinationdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DestinationDefinitionRead](#schemadestinationdefinitionread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a destinationDefinition that is configured for the given workspace

<a id="opIdgetDestinationDefinitionForWorkspace"></a>

> Code samples

```bash
curl https://example.com/v1/destination_definitions/get_for_workspace \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/destination_definitions/get_for_workspace`

> Body parameter

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="get-a-destinationdefinition-that-is-configured-for-the-given-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DestinationDefinitionIdWithWorkspaceId](#schemadestinationdefinitionidwithworkspaceid)|true|none|
|» destinationDefinitionId|body|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dockerImageTag": "string",
  "dockerRepository": "string",
  "documentationUrl": "http://example.com",
  "icon": "string",
  "name": "string",
  "normalizationConfig": {
    "normalizationIntegrationType": "string",
    "normalizationRepository": "string",
    "normalizationTag": "string",
    "supported": false
  },
  "protocolVersion": "string",
  "releaseDate": "1970-01-01",
  "releaseStage": "alpha",
  "resourceRequirements": {
    "default": {
      "cpu_limit": "string",
      "cpu_request": "string",
      "memory_limit": "string",
      "memory_request": "string"
    },
    "jobSpecific": [
      {
        "jobType": "get_spec",
        "resourceRequirements": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        }
      }
    ]
  },
  "supportsDbt": true
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="get-a-destinationdefinition-that-is-configured-for-the-given-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DestinationDefinitionRead](#schemadestinationdefinitionread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## grant a private, non-custom destinationDefinition to a given workspace

<a id="opIdgrantDestinationDefinitionToWorkspace"></a>

> Code samples

```bash
curl https://example.com/v1/destination_definitions/grant_definition \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/destination_definitions/grant_definition`

> Body parameter

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="grant-a-private-non-custom-destinationdefinition-to-a-given-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DestinationDefinitionIdWithWorkspaceId](#schemadestinationdefinitionidwithworkspaceid)|true|none|
|» destinationDefinitionId|body|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "destinationDefinition": {
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dockerImageTag": "string",
    "dockerRepository": "string",
    "documentationUrl": "http://example.com",
    "icon": "string",
    "name": "string",
    "normalizationConfig": {
      "normalizationIntegrationType": "string",
      "normalizationRepository": "string",
      "normalizationTag": "string",
      "supported": false
    },
    "protocolVersion": "string",
    "releaseDate": "1970-01-01",
    "releaseStage": "alpha",
    "resourceRequirements": {
      "default": {
        "cpu_limit": "string",
        "cpu_request": "string",
        "memory_limit": "string",
        "memory_request": "string"
      },
      "jobSpecific": [
        {
          "jobType": "get_spec",
          "resourceRequirements": {
            "cpu_limit": "string",
            "cpu_request": "string",
            "memory_limit": "string",
            "memory_request": "string"
          }
        }
      ]
    },
    "supportsDbt": true
  },
  "granted": true
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="grant-a-private-non-custom-destinationdefinition-to-a-given-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[PrivateDestinationDefinitionRead](#schemaprivatedestinationdefinitionread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## List all the destinationDefinitions the current Airbyte deployment is configured to use

<a id="opIdlistDestinationDefinitions"></a>

> Code samples

```bash
curl https://example.com/v1/destination_definitions/list \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v1/destination_definitions/list`

> Example responses

> 200 Response

```json
{
  "destinationDefinitions": [
    {
      "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "dockerImageTag": "string",
      "dockerRepository": "string",
      "documentationUrl": "http://example.com",
      "icon": "string",
      "name": "string",
      "normalizationConfig": {
        "normalizationIntegrationType": "string",
        "normalizationRepository": "string",
        "normalizationTag": "string",
        "supported": false
      },
      "protocolVersion": "string",
      "releaseDate": "1970-01-01",
      "releaseStage": "alpha",
      "resourceRequirements": {
        "default": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        },
        "jobSpecific": [
          {
            "jobType": "get_spec",
            "resourceRequirements": {
              "cpu_limit": "string",
              "cpu_request": "string",
              "memory_limit": "string",
              "memory_request": "string"
            }
          }
        ]
      },
      "supportsDbt": true
    }
  ]
}
```

<h3 id="list-all-the-destinationdefinitions-the-current-airbyte-deployment-is-configured-to-use-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DestinationDefinitionReadList](#schemadestinationdefinitionreadlist)|

<aside class="success">
This operation does not require authentication
</aside>

## List all the destinationDefinitions the given workspace is configured to use

<a id="opIdlistDestinationDefinitionsForWorkspace"></a>

> Code samples

```bash
curl https://example.com/v1/destination_definitions/list_for_workspace \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/destination_definitions/list_for_workspace`

> Body parameter

```json
{
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="list-all-the-destinationdefinitions-the-given-workspace-is-configured-to-use-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WorkspaceIdRequestBody](#schemaworkspaceidrequestbody)|false|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "destinationDefinitions": [
    {
      "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "dockerImageTag": "string",
      "dockerRepository": "string",
      "documentationUrl": "http://example.com",
      "icon": "string",
      "name": "string",
      "normalizationConfig": {
        "normalizationIntegrationType": "string",
        "normalizationRepository": "string",
        "normalizationTag": "string",
        "supported": false
      },
      "protocolVersion": "string",
      "releaseDate": "1970-01-01",
      "releaseStage": "alpha",
      "resourceRequirements": {
        "default": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        },
        "jobSpecific": [
          {
            "jobType": "get_spec",
            "resourceRequirements": {
              "cpu_limit": "string",
              "cpu_request": "string",
              "memory_limit": "string",
              "memory_request": "string"
            }
          }
        ]
      },
      "supportsDbt": true
    }
  ]
}
```

<h3 id="list-all-the-destinationdefinitions-the-given-workspace-is-configured-to-use-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DestinationDefinitionReadList](#schemadestinationdefinitionreadlist)|

<aside class="success">
This operation does not require authentication
</aside>

## List the latest destinationDefinitions Airbyte supports

<a id="opIdlistLatestDestinationDefinitions"></a>

> Code samples

```bash
curl https://example.com/v1/destination_definitions/list_latest \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v1/destination_definitions/list_latest`

Guaranteed to retrieve the latest information on supported destinations.

> Example responses

> 200 Response

```json
{
  "destinationDefinitions": [
    {
      "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "dockerImageTag": "string",
      "dockerRepository": "string",
      "documentationUrl": "http://example.com",
      "icon": "string",
      "name": "string",
      "normalizationConfig": {
        "normalizationIntegrationType": "string",
        "normalizationRepository": "string",
        "normalizationTag": "string",
        "supported": false
      },
      "protocolVersion": "string",
      "releaseDate": "1970-01-01",
      "releaseStage": "alpha",
      "resourceRequirements": {
        "default": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        },
        "jobSpecific": [
          {
            "jobType": "get_spec",
            "resourceRequirements": {
              "cpu_limit": "string",
              "cpu_request": "string",
              "memory_limit": "string",
              "memory_request": "string"
            }
          }
        ]
      },
      "supportsDbt": true
    }
  ]
}
```

<h3 id="list-the-latest-destinationdefinitions-airbyte-supports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DestinationDefinitionReadList](#schemadestinationdefinitionreadlist)|

<aside class="success">
This operation does not require authentication
</aside>

## List all private, non-custom destinationDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.

<a id="opIdlistPrivateDestinationDefinitions"></a>

> Code samples

```bash
curl https://example.com/v1/destination_definitions/list_private \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/destination_definitions/list_private`

> Body parameter

```json
{
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="list-all-private-non-custom-destinationdefinitions-and-for-each-indicate-whether-the-given-workspace-has-a-grant-for-using-the-definition-used-by-admins-to-view-and-modify-a-given-workspaces-grants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WorkspaceIdRequestBody](#schemaworkspaceidrequestbody)|false|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "destinationDefinitions": [
    {
      "destinationDefinition": {
        "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "dockerImageTag": "string",
        "dockerRepository": "string",
        "documentationUrl": "http://example.com",
        "icon": "string",
        "name": "string",
        "normalizationConfig": {
          "normalizationIntegrationType": "string",
          "normalizationRepository": "string",
          "normalizationTag": "string",
          "supported": false
        },
        "protocolVersion": "string",
        "releaseDate": "1970-01-01",
        "releaseStage": "alpha",
        "resourceRequirements": {
          "default": {
            "cpu_limit": "string",
            "cpu_request": "string",
            "memory_limit": "string",
            "memory_request": "string"
          },
          "jobSpecific": [
            {
              "jobType": "get_spec",
              "resourceRequirements": {
                "cpu_limit": "string",
                "cpu_request": "string",
                "memory_limit": "string",
                "memory_request": "string"
              }
            }
          ]
        },
        "supportsDbt": true
      },
      "granted": true
    }
  ]
}
```

<h3 id="list-all-private-non-custom-destinationdefinitions-and-for-each-indicate-whether-the-given-workspace-has-a-grant-for-using-the-definition-used-by-admins-to-view-and-modify-a-given-workspaces-grants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[PrivateDestinationDefinitionReadList](#schemaprivatedestinationdefinitionreadlist)|

<aside class="success">
This operation does not require authentication
</aside>

## revoke a grant to a private, non-custom destinationDefinition from a given workspace

<a id="opIdrevokeDestinationDefinitionFromWorkspace"></a>

> Code samples

```bash
curl https://example.com/v1/destination_definitions/revoke_definition \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/destination_definitions/revoke_definition`

> Body parameter

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="revoke-a-grant-to-a-private-non-custom-destinationdefinition-from-a-given-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DestinationDefinitionIdWithWorkspaceId](#schemadestinationdefinitionidwithworkspaceid)|true|none|
|» destinationDefinitionId|body|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="revoke-a-grant-to-a-private-non-custom-destinationdefinition-from-a-given-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The resource was deleted successfully.|None|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Update destinationDefinition

<a id="opIdupdateDestinationDefinition"></a>

> Code samples

```bash
curl https://example.com/v1/destination_definitions/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dockerImageTag": "string",
    "resourceRequirements": {
      "default": {
        "cpu_limit": "string",
        "cpu_request": "string",
        "memory_limit": "string",
        "memory_request": "string"
      },
      "jobSpecific": [
        {
          "jobType": "get_spec",
          "resourceRequirements": {
            "cpu_limit": "string",
            "cpu_request": "string",
            "memory_limit": "string",
            "memory_request": "string"
          }
        }
      ]
    }
  }'
```

`POST /v1/destination_definitions/update`

> Body parameter

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dockerImageTag": "string",
  "resourceRequirements": {
    "default": {
      "cpu_limit": "string",
      "cpu_request": "string",
      "memory_limit": "string",
      "memory_request": "string"
    },
    "jobSpecific": [
      {
        "jobType": "get_spec",
        "resourceRequirements": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        }
      }
    ]
  }
}
```

<h3 id="update-destinationdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DestinationDefinitionUpdate](#schemadestinationdefinitionupdate)|true|none|
|» destinationDefinitionId|body|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|
|» dockerImageTag|body|string|false|none|
|» resourceRequirements|body|[ActorDefinitionResourceRequirements](#schemaactordefinitionresourcerequirements)|false|actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level.|

> Example responses

> 200 Response

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dockerImageTag": "string",
  "dockerRepository": "string",
  "documentationUrl": "http://example.com",
  "icon": "string",
  "name": "string",
  "normalizationConfig": {
    "normalizationIntegrationType": "string",
    "normalizationRepository": "string",
    "normalizationTag": "string",
    "supported": false
  },
  "protocolVersion": "string",
  "releaseDate": "1970-01-01",
  "releaseStage": "alpha",
  "resourceRequirements": {
    "default": {
      "cpu_limit": "string",
      "cpu_request": "string",
      "memory_limit": "string",
      "memory_request": "string"
    },
    "jobSpecific": [
      {
        "jobType": "get_spec",
        "resourceRequirements": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        }
      }
    ]
  },
  "supportsDbt": true
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="update-destinationdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DestinationDefinitionRead](#schemadestinationdefinitionread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airbyte-configuration-api-destinationdefinitionspecification">destination_definition_specification</h1>

DestinationDefinitionSpecification related resources.

## Get specification for a destinationDefinition

<a id="opIdgetDestinationDefinitionSpecification"></a>

> Code samples

```bash
curl https://example.com/v1/destination_definition_specifications/get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/destination_definition_specifications/get`

> Body parameter

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="get-specification-for-a-destinationdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DestinationDefinitionIdWithWorkspaceId](#schemadestinationdefinitionidwithworkspaceid)|true|none|
|» destinationDefinitionId|body|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "advancedAuth": {
    "authFlowType": "oauth2.0",
    "oauthConfigSpecification": {
      "completeOAuthOutputSpecification": null,
      "completeOAuthServerInputSpecification": null,
      "completeOAuthServerOutputSpecification": null,
      "oauthUserInputFromConnectorConfigSpecification": null
    },
    "predicateKey": [
      "string"
    ],
    "predicateValue": "string"
  },
  "authSpecification": {
    "auth_type": "oauth2.0",
    "oauth2Specification": {
      "oauthFlowInitParameters": [
        [
          "string"
        ]
      ],
      "oauthFlowOutputParameters": [
        [
          "string"
        ]
      ],
      "rootObject": [
        "path",
        1
      ]
    }
  },
  "connectionSpecification": {
    "user": {
      "type": "string"
    }
  },
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "documentationUrl": "string",
  "jobInfo": {
    "configId": "string",
    "configType": "check_connection_source",
    "connectorConfigurationUpdated": false,
    "createdAt": 0,
    "endedAt": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "logs": {
      "logLines": [
        "string"
      ]
    },
    "succeeded": true
  },
  "supportedDestinationSyncModes": [
    "append"
  ]
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="get-specification-for-a-destinationdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DestinationDefinitionSpecificationRead](#schemadestinationdefinitionspecificationread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airbyte-configuration-api-destination">destination</h1>

Destination related resources.

## Check connection to the destination

<a id="opIdcheckConnectionToDestination"></a>

> Code samples

```bash
curl https://example.com/v1/destinations/check_connection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/destinations/check_connection`

> Body parameter

```json
{
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="check-connection-to-the-destination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DestinationIdRequestBody](#schemadestinationidrequestbody)|true|none|
|» destinationId|body|[DestinationId](#schemadestinationid)|true|none|

> Example responses

> 200 Response

```json
{
  "jobInfo": {
    "configId": "string",
    "configType": "check_connection_source",
    "connectorConfigurationUpdated": false,
    "createdAt": 0,
    "endedAt": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "logs": {
      "logLines": [
        "string"
      ]
    },
    "succeeded": true
  },
  "message": "string",
  "status": "succeeded"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="check-connection-to-the-destination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CheckConnectionRead](#schemacheckconnectionread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Check connection for a proposed update to a destination

<a id="opIdcheckConnectionToDestinationForUpdate"></a>

> Code samples

```bash
curl https://example.com/v1/destinations/check_connection_for_update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionConfiguration": {
      "user": "charles"
    },
    "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string"
  }'
```

`POST /v1/destinations/check_connection_for_update`

> Body parameter

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string"
}
```

<h3 id="check-connection-for-a-proposed-update-to-a-destination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DestinationUpdate](#schemadestinationupdate)|true|none|
|» connectionConfiguration|body|[DestinationConfiguration](#schemadestinationconfiguration)|true|The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.|
|» destinationId|body|[DestinationId](#schemadestinationid)|true|none|
|» name|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "jobInfo": {
    "configId": "string",
    "configType": "check_connection_source",
    "connectorConfigurationUpdated": false,
    "createdAt": 0,
    "endedAt": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "logs": {
      "logLines": [
        "string"
      ]
    },
    "succeeded": true
  },
  "message": "string",
  "status": "succeeded"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="check-connection-for-a-proposed-update-to-a-destination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CheckConnectionRead](#schemacheckconnectionread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Clone destination

<a id="opIdcloneDestination"></a>

> Code samples

```bash
curl https://example.com/v1/destinations/clone \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinationCloneId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "destinationConfiguration": {
      "connectionConfiguration": {
        "user": "charles"
      },
      "name": "string"
    }
  }'
```

`POST /v1/destinations/clone`

> Body parameter

```json
{
  "destinationCloneId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationConfiguration": {
    "connectionConfiguration": {
      "user": "charles"
    },
    "name": "string"
  }
}
```

<h3 id="clone-destination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DestinationCloneRequestBody](#schemadestinationclonerequestbody)|true|none|
|» destinationCloneId|body|[DestinationId](#schemadestinationid)|true|none|
|» destinationConfiguration|body|[DestinationCloneConfiguration](#schemadestinationcloneconfiguration)|false|none|

> Example responses

> 200 Response

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationName": "string",
  "icon": "string",
  "name": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="clone-destination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DestinationRead](#schemadestinationread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a destination

<a id="opIdcreateDestination"></a>

> Code samples

```bash
curl https://example.com/v1/destinations/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionConfiguration": {
      "user": "charles"
    },
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/destinations/create`

> Body parameter

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="create-a-destination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DestinationCreate](#schemadestinationcreate)|true|none|
|» connectionConfiguration|body|[DestinationConfiguration](#schemadestinationconfiguration)|true|The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.|
|» destinationDefinitionId|body|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|
|» name|body|string|true|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationName": "string",
  "icon": "string",
  "name": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="create-a-destination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DestinationRead](#schemadestinationread)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete the destination

<a id="opIddeleteDestination"></a>

> Code samples

```bash
curl https://example.com/v1/destinations/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/destinations/delete`

> Body parameter

```json
{
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete-the-destination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DestinationIdRequestBody](#schemadestinationidrequestbody)|true|none|
|» destinationId|body|[DestinationId](#schemadestinationid)|true|none|

> Example responses

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="delete-the-destination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The resource was deleted successfully.|None|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get configured destination

<a id="opIdgetDestination"></a>

> Code samples

```bash
curl https://example.com/v1/destinations/get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/destinations/get`

> Body parameter

```json
{
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="get-configured-destination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DestinationIdRequestBody](#schemadestinationidrequestbody)|true|none|
|» destinationId|body|[DestinationId](#schemadestinationid)|true|none|

> Example responses

> 200 Response

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationName": "string",
  "icon": "string",
  "name": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="get-configured-destination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DestinationRead](#schemadestinationread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## List configured destinations for a workspace

<a id="opIdlistDestinationsForWorkspace"></a>

> Code samples

```bash
curl https://example.com/v1/destinations/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/destinations/list`

> Body parameter

```json
{
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="list-configured-destinations-for-a-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WorkspaceIdRequestBody](#schemaworkspaceidrequestbody)|true|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "destinations": [
    {
      "connectionConfiguration": {
        "user": "charles"
      },
      "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "destinationName": "string",
      "icon": "string",
      "name": "string",
      "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="list-configured-destinations-for-a-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DestinationReadList](#schemadestinationreadlist)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Search destinations

<a id="opIdsearchDestinations"></a>

> Code samples

```bash
curl https://example.com/v1/destinations/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionConfiguration": {
      "user": "charles"
    },
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "destinationName": "string",
    "name": "string",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/destinations/search`

> Body parameter

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationName": "string",
  "name": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="search-destinations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DestinationSearch](#schemadestinationsearch)|true|none|
|» connectionConfiguration|body|[DestinationConfiguration](#schemadestinationconfiguration)|false|The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.|
|» destinationDefinitionId|body|[DestinationDefinitionId](#schemadestinationdefinitionid)|false|none|
|» destinationId|body|[DestinationId](#schemadestinationid)|false|none|
|» destinationName|body|string|false|none|
|» name|body|string|false|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|false|none|

> Example responses

> 200 Response

```json
{
  "destinations": [
    {
      "connectionConfiguration": {
        "user": "charles"
      },
      "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "destinationName": "string",
      "icon": "string",
      "name": "string",
      "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="search-destinations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DestinationReadList](#schemadestinationreadlist)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a destination

<a id="opIdupdateDestination"></a>

> Code samples

```bash
curl https://example.com/v1/destinations/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionConfiguration": {
      "user": "charles"
    },
    "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string"
  }'
```

`POST /v1/destinations/update`

> Body parameter

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string"
}
```

<h3 id="update-a-destination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DestinationUpdate](#schemadestinationupdate)|true|none|
|» connectionConfiguration|body|[DestinationConfiguration](#schemadestinationconfiguration)|true|The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.|
|» destinationId|body|[DestinationId](#schemadestinationid)|true|none|
|» name|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationName": "string",
  "icon": "string",
  "name": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="update-a-destination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DestinationRead](#schemadestinationread)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airbyte-configuration-api-connection">connection</h1>

Connection between sources and destinations.

## Create a connection between a source and a destination

<a id="opIdcreateConnection"></a>

> Code samples

```bash
curl https://example.com/v1/connections/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "geography": "auto",
    "name": "string",
    "namespaceDefinition": "source",
    "namespaceFormat": "${SOURCE_NAMESPACE}",
    "nonBreakingChangesPreference": "ignore",
    "notifySchemaChanges": true,
    "operationIds": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "prefix": "string",
    "resourceRequirements": {
      "cpu_limit": "string",
      "cpu_request": "string",
      "memory_limit": "string",
      "memory_request": "string"
    },
    "schedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "scheduleData": {
      "basicSchedule": {
        "timeUnit": "minutes",
        "units": 0
      },
      "cron": {
        "cronExpression": "string",
        "cronTimeZone": "string"
      }
    },
    "scheduleType": "manual",
    "sourceCatalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "active",
    "syncCatalog": {
      "streams": [
        {
          "config": {
            "aliasName": "string",
            "cursorField": [
              "string"
            ],
            "destinationSyncMode": "append",
            "fieldSelectionEnabled": true,
            "primaryKey": [
              [
                "string"
              ]
            ],
            "selected": true,
            "selectedFields": [
              {
                "fieldPath": [
                  "string"
                ]
              }
            ],
            "suggested": true,
            "syncMode": "full_refresh"
          },
          "stream": {
            "defaultCursorField": [
              "string"
            ],
            "jsonSchema": {},
            "name": "string",
            "namespace": "string",
            "sourceDefinedCursor": true,
            "sourceDefinedPrimaryKey": [
              [
                "string"
              ]
            ],
            "supportedSyncModes": [
              "full_refresh"
            ]
          }
        }
      ]
    }
  }'
```

`POST /v1/connections/create`

> Body parameter

```json
{
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geography": "auto",
  "name": "string",
  "namespaceDefinition": "source",
  "namespaceFormat": "${SOURCE_NAMESPACE}",
  "nonBreakingChangesPreference": "ignore",
  "notifySchemaChanges": true,
  "operationIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "prefix": "string",
  "resourceRequirements": {
    "cpu_limit": "string",
    "cpu_request": "string",
    "memory_limit": "string",
    "memory_request": "string"
  },
  "schedule": {
    "timeUnit": "minutes",
    "units": 0
  },
  "scheduleData": {
    "basicSchedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "cron": {
      "cronExpression": "string",
      "cronTimeZone": "string"
    }
  },
  "scheduleType": "manual",
  "sourceCatalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "active",
  "syncCatalog": {
    "streams": [
      {
        "config": {
          "aliasName": "string",
          "cursorField": [
            "string"
          ],
          "destinationSyncMode": "append",
          "fieldSelectionEnabled": true,
          "primaryKey": [
            [
              "string"
            ]
          ],
          "selected": true,
          "selectedFields": [
            {
              "fieldPath": [
                "string"
              ]
            }
          ],
          "suggested": true,
          "syncMode": "full_refresh"
        },
        "stream": {
          "defaultCursorField": [
            "string"
          ],
          "jsonSchema": {},
          "name": "string",
          "namespace": "string",
          "sourceDefinedCursor": true,
          "sourceDefinedPrimaryKey": [
            [
              "string"
            ]
          ],
          "supportedSyncModes": [
            "full_refresh"
          ]
        }
      }
    ]
  }
}
```

<h3 id="create-a-connection-between-a-source-and-a-destination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectionCreate](#schemaconnectioncreate)|true|none|
|» destinationId|body|[DestinationId](#schemadestinationid)|true|none|
|» geography|body|[Geography](#schemageography)|false|none|
|» name|body|string|false|Optional name of the connection|
|» namespaceDefinition|body|[NamespaceDefinitionType](#schemanamespacedefinitiontype)|false|Method used for computing final namespace in destination|
|» namespaceFormat|body|string|false|Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.|
|» nonBreakingChangesPreference|body|[NonBreakingChangesPreference](#schemanonbreakingchangespreference)|false|none|
|» notifySchemaChanges|body|boolean|false|none|
|» operationIds|body|[[OperationId](#schemaoperationid)]|false|none|
|» prefix|body|string|false|Prefix that will be prepended to the name of each stream when it is written to the destination.|
|» resourceRequirements|body|[ResourceRequirements](#schemaresourcerequirements)|false|optional resource requirements to run workers (blank for unbounded allocations)|
|» schedule|body|[ConnectionSchedule](#schemaconnectionschedule)|false|if null, then no schedule is set.|
|» scheduleData|body|[ConnectionScheduleData](#schemaconnectionscheduledata)|false|schedule for when the the connection should run, per the schedule type|
|» scheduleType|body|[ConnectionScheduleType](#schemaconnectionscheduletype)|false|determine how the schedule data should be interpreted|
|» sourceCatalogId|body|string(uuid)|false|none|
|» sourceId|body|[SourceId](#schemasourceid)|true|none|
|» status|body|[ConnectionStatus](#schemaconnectionstatus)|true|Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.|
|» syncCatalog|body|[AirbyteCatalog](#schemaairbytecatalog)|false|describes the available schema (catalog).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» geography|auto|
|» geography|us|
|» geography|eu|
|» namespaceDefinition|source|
|» namespaceDefinition|destination|
|» namespaceDefinition|customformat|
|» nonBreakingChangesPreference|ignore|
|» nonBreakingChangesPreference|disable|
|» scheduleType|manual|
|» scheduleType|basic|
|» scheduleType|cron|
|» status|active|
|» status|inactive|
|» status|deprecated|

> Example responses

> 200 Response

```json
{
  "breakingChange": true,
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geography": "auto",
  "name": "string",
  "namespaceDefinition": "source",
  "namespaceFormat": "${SOURCE_NAMESPACE}",
  "nonBreakingChangesPreference": "ignore",
  "notifySchemaChanges": true,
  "operationIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "prefix": "string",
  "resourceRequirements": {
    "cpu_limit": "string",
    "cpu_request": "string",
    "memory_limit": "string",
    "memory_request": "string"
  },
  "schedule": {
    "timeUnit": "minutes",
    "units": 0
  },
  "scheduleData": {
    "basicSchedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "cron": {
      "cronExpression": "string",
      "cronTimeZone": "string"
    }
  },
  "scheduleType": "manual",
  "sourceCatalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "active",
  "syncCatalog": {
    "streams": [
      {
        "config": {
          "aliasName": "string",
          "cursorField": [
            "string"
          ],
          "destinationSyncMode": "append",
          "fieldSelectionEnabled": true,
          "primaryKey": [
            [
              "string"
            ]
          ],
          "selected": true,
          "selectedFields": [
            {
              "fieldPath": [
                "string"
              ]
            }
          ],
          "suggested": true,
          "syncMode": "full_refresh"
        },
        "stream": {
          "defaultCursorField": [
            "string"
          ],
          "jsonSchema": {},
          "name": "string",
          "namespace": "string",
          "sourceDefinedCursor": true,
          "sourceDefinedPrimaryKey": [
            [
              "string"
            ]
          ],
          "supportedSyncModes": [
            "full_refresh"
          ]
        }
      }
    ]
  }
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="create-a-connection-between-a-source-and-a-destination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ConnectionRead](#schemaconnectionread)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a connection

<a id="opIddeleteConnection"></a>

> Code samples

```bash
curl https://example.com/v1/connections/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/connections/delete`

> Body parameter

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectionIdRequestBody](#schemaconnectionidrequestbody)|true|none|
|» connectionId|body|[ConnectionId](#schemaconnectionid)|true|none|

> Example responses

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="delete-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The resource was deleted successfully.|None|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a connection

<a id="opIdgetConnection"></a>

> Code samples

```bash
curl https://example.com/v1/connections/get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/connections/get`

> Body parameter

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="get-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectionIdRequestBody](#schemaconnectionidrequestbody)|true|none|
|» connectionId|body|[ConnectionId](#schemaconnectionid)|true|none|

> Example responses

> 200 Response

```json
{
  "breakingChange": true,
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geography": "auto",
  "name": "string",
  "namespaceDefinition": "source",
  "namespaceFormat": "${SOURCE_NAMESPACE}",
  "nonBreakingChangesPreference": "ignore",
  "notifySchemaChanges": true,
  "operationIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "prefix": "string",
  "resourceRequirements": {
    "cpu_limit": "string",
    "cpu_request": "string",
    "memory_limit": "string",
    "memory_request": "string"
  },
  "schedule": {
    "timeUnit": "minutes",
    "units": 0
  },
  "scheduleData": {
    "basicSchedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "cron": {
      "cronExpression": "string",
      "cronTimeZone": "string"
    }
  },
  "scheduleType": "manual",
  "sourceCatalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "active",
  "syncCatalog": {
    "streams": [
      {
        "config": {
          "aliasName": "string",
          "cursorField": [
            "string"
          ],
          "destinationSyncMode": "append",
          "fieldSelectionEnabled": true,
          "primaryKey": [
            [
              "string"
            ]
          ],
          "selected": true,
          "selectedFields": [
            {
              "fieldPath": [
                "string"
              ]
            }
          ],
          "suggested": true,
          "syncMode": "full_refresh"
        },
        "stream": {
          "defaultCursorField": [
            "string"
          ],
          "jsonSchema": {},
          "name": "string",
          "namespace": "string",
          "sourceDefinedCursor": true,
          "sourceDefinedPrimaryKey": [
            [
              "string"
            ]
          ],
          "supportedSyncModes": [
            "full_refresh"
          ]
        }
      }
    ]
  }
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="get-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ConnectionRead](#schemaconnectionread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns all connections for a workspace.

<a id="opIdlistConnectionsForWorkspace"></a>

> Code samples

```bash
curl https://example.com/v1/connections/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/connections/list`

List connections for workspace. Does not return deleted connections.

> Body parameter

```json
{
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="returns-all-connections-for-a-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WorkspaceIdRequestBody](#schemaworkspaceidrequestbody)|true|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "connections": [
    {
      "breakingChange": true,
      "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geography": "auto",
      "name": "string",
      "namespaceDefinition": "source",
      "namespaceFormat": "${SOURCE_NAMESPACE}",
      "nonBreakingChangesPreference": "ignore",
      "notifySchemaChanges": true,
      "operationIds": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "prefix": "string",
      "resourceRequirements": {
        "cpu_limit": "string",
        "cpu_request": "string",
        "memory_limit": "string",
        "memory_request": "string"
      },
      "schedule": {
        "timeUnit": "minutes",
        "units": 0
      },
      "scheduleData": {
        "basicSchedule": {
          "timeUnit": "minutes",
          "units": 0
        },
        "cron": {
          "cronExpression": "string",
          "cronTimeZone": "string"
        }
      },
      "scheduleType": "manual",
      "sourceCatalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "active",
      "syncCatalog": {
        "streams": [
          {
            "config": {
              "aliasName": "string",
              "cursorField": [
                "string"
              ],
              "destinationSyncMode": "append",
              "fieldSelectionEnabled": true,
              "primaryKey": [
                [
                  "string"
                ]
              ],
              "selected": true,
              "selectedFields": [
                {
                  "fieldPath": [
                    "string"
                  ]
                }
              ],
              "suggested": true,
              "syncMode": "full_refresh"
            },
            "stream": {
              "defaultCursorField": [
                "string"
              ],
              "jsonSchema": {},
              "name": "string",
              "namespace": "string",
              "sourceDefinedCursor": true,
              "sourceDefinedPrimaryKey": [
                [
                  "string"
                ]
              ],
              "supportedSyncModes": [
                "full_refresh"
              ]
            }
          }
        ]
      }
    }
  ]
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="returns-all-connections-for-a-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ConnectionReadList](#schemaconnectionreadlist)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns all connections for a workspace, including deleted connections.

<a id="opIdlistAllConnectionsForWorkspace"></a>

> Code samples

```bash
curl https://example.com/v1/connections/list_all \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/connections/list_all`

List connections for workspace, including deleted connections.

> Body parameter

```json
{
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="returns-all-connections-for-a-workspace-including-deleted-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WorkspaceIdRequestBody](#schemaworkspaceidrequestbody)|true|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "connections": [
    {
      "breakingChange": true,
      "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geography": "auto",
      "name": "string",
      "namespaceDefinition": "source",
      "namespaceFormat": "${SOURCE_NAMESPACE}",
      "nonBreakingChangesPreference": "ignore",
      "notifySchemaChanges": true,
      "operationIds": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "prefix": "string",
      "resourceRequirements": {
        "cpu_limit": "string",
        "cpu_request": "string",
        "memory_limit": "string",
        "memory_request": "string"
      },
      "schedule": {
        "timeUnit": "minutes",
        "units": 0
      },
      "scheduleData": {
        "basicSchedule": {
          "timeUnit": "minutes",
          "units": 0
        },
        "cron": {
          "cronExpression": "string",
          "cronTimeZone": "string"
        }
      },
      "scheduleType": "manual",
      "sourceCatalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "active",
      "syncCatalog": {
        "streams": [
          {
            "config": {
              "aliasName": "string",
              "cursorField": [
                "string"
              ],
              "destinationSyncMode": "append",
              "fieldSelectionEnabled": true,
              "primaryKey": [
                [
                  "string"
                ]
              ],
              "selected": true,
              "selectedFields": [
                {
                  "fieldPath": [
                    "string"
                  ]
                }
              ],
              "suggested": true,
              "syncMode": "full_refresh"
            },
            "stream": {
              "defaultCursorField": [
                "string"
              ],
              "jsonSchema": {},
              "name": "string",
              "namespace": "string",
              "sourceDefinedCursor": true,
              "sourceDefinedPrimaryKey": [
                [
                  "string"
                ]
              ],
              "supportedSyncModes": [
                "full_refresh"
              ]
            }
          }
        ]
      }
    }
  ]
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="returns-all-connections-for-a-workspace-including-deleted-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ConnectionReadList](#schemaconnectionreadlist)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Reset the data for the connection. Deletes data generated by the connection in the destination. Resets any cursors back to initial state.

<a id="opIdresetConnection"></a>

> Code samples

```bash
curl https://example.com/v1/connections/reset \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/connections/reset`

> Body parameter

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="reset-the-data-for-the-connection-deletes-data-generated-by-the-connection-in-the-destination-resets-any-cursors-back-to-initial-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectionIdRequestBody](#schemaconnectionidrequestbody)|true|none|
|» connectionId|body|[ConnectionId](#schemaconnectionid)|true|none|

> Example responses

> 200 Response

```json
{
  "attempts": [
    {
      "attempt": {
        "bytesSynced": 0,
        "createdAt": 0,
        "endedAt": 0,
        "failureSummary": {
          "failures": [
            {
              "externalMessage": "string",
              "failureOrigin": "source",
              "failureType": "config_error",
              "internalMessage": "string",
              "retryable": true,
              "stacktrace": "string",
              "timestamp": 0
            }
          ],
          "partialSuccess": true
        },
        "id": 0,
        "recordsSynced": 0,
        "status": "running",
        "streamStats": [
          {
            "stats": {
              "bytesEmitted": 0,
              "estimatedBytes": 0,
              "estimatedRecords": 0,
              "recordsCommitted": 0,
              "recordsEmitted": 0,
              "stateMessagesEmitted": 0
            },
            "streamName": "string",
            "streamNamespace": "string"
          }
        ],
        "totalStats": {
          "bytesEmitted": 0,
          "estimatedBytes": 0,
          "estimatedRecords": 0,
          "recordsCommitted": 0,
          "recordsEmitted": 0,
          "stateMessagesEmitted": 0
        },
        "updatedAt": 0
      },
      "logs": {
        "logLines": [
          "string"
        ]
      }
    }
  ],
  "job": {
    "configId": "string",
    "configType": "check_connection_source",
    "createdAt": 0,
    "id": 0,
    "resetConfig": {
      "streamsToReset": [
        {
          "name": "string",
          "namespace": "string"
        }
      ]
    },
    "startedAt": 0,
    "status": "pending",
    "updatedAt": 0
  }
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="reset-the-data-for-the-connection-deletes-data-generated-by-the-connection-in-the-destination-resets-any-cursors-back-to-initial-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[JobInfoRead](#schemajobinforead)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Search connections

<a id="opIdsearchConnections"></a>

> Code samples

```bash
curl https://example.com/v1/connections/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "destination": {
      "connectionConfiguration": {
        "user": "charles"
      },
      "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "destinationName": "string",
      "name": "string",
      "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "namespaceDefinition": "source",
    "namespaceFormat": "${SOURCE_NAMESPACE}",
    "prefix": "string",
    "schedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "scheduleData": {
      "basicSchedule": {
        "timeUnit": "minutes",
        "units": 0
      },
      "cron": {
        "cronExpression": "string",
        "cronTimeZone": "string"
      }
    },
    "scheduleType": "manual",
    "source": {
      "connectionConfiguration": {
        "user": "charles"
      },
      "name": "string",
      "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sourceName": "string",
      "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "active"
  }'
```

`POST /v1/connections/search`

> Body parameter

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destination": {
    "connectionConfiguration": {
      "user": "charles"
    },
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "destinationName": "string",
    "name": "string",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "namespaceDefinition": "source",
  "namespaceFormat": "${SOURCE_NAMESPACE}",
  "prefix": "string",
  "schedule": {
    "timeUnit": "minutes",
    "units": 0
  },
  "scheduleData": {
    "basicSchedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "cron": {
      "cronExpression": "string",
      "cronTimeZone": "string"
    }
  },
  "scheduleType": "manual",
  "source": {
    "connectionConfiguration": {
      "user": "charles"
    },
    "name": "string",
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceName": "string",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "active"
}
```

<h3 id="search-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectionSearch](#schemaconnectionsearch)|true|none|
|» connectionId|body|[ConnectionId](#schemaconnectionid)|false|none|
|» destination|body|[DestinationSearch](#schemadestinationsearch)|false|none|
|» destinationId|body|[DestinationId](#schemadestinationid)|false|none|
|» name|body|string|false|none|
|» namespaceDefinition|body|[NamespaceDefinitionType](#schemanamespacedefinitiontype)|false|Method used for computing final namespace in destination|
|» namespaceFormat|body|string|false|Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.|
|» prefix|body|string|false|Prefix that will be prepended to the name of each stream when it is written to the destination.|
|» schedule|body|[ConnectionSchedule](#schemaconnectionschedule)|false|if null, then no schedule is set.|
|» scheduleData|body|[ConnectionScheduleData](#schemaconnectionscheduledata)|false|schedule for when the the connection should run, per the schedule type|
|» scheduleType|body|[ConnectionScheduleType](#schemaconnectionscheduletype)|false|determine how the schedule data should be interpreted|
|» source|body|[SourceSearch](#schemasourcesearch)|false|none|
|» sourceId|body|[SourceId](#schemasourceid)|false|none|
|» status|body|[ConnectionStatus](#schemaconnectionstatus)|false|Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» namespaceDefinition|source|
|» namespaceDefinition|destination|
|» namespaceDefinition|customformat|
|» scheduleType|manual|
|» scheduleType|basic|
|» scheduleType|cron|
|» status|active|
|» status|inactive|
|» status|deprecated|

> Example responses

> 200 Response

```json
{
  "connections": [
    {
      "breakingChange": true,
      "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geography": "auto",
      "name": "string",
      "namespaceDefinition": "source",
      "namespaceFormat": "${SOURCE_NAMESPACE}",
      "nonBreakingChangesPreference": "ignore",
      "notifySchemaChanges": true,
      "operationIds": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "prefix": "string",
      "resourceRequirements": {
        "cpu_limit": "string",
        "cpu_request": "string",
        "memory_limit": "string",
        "memory_request": "string"
      },
      "schedule": {
        "timeUnit": "minutes",
        "units": 0
      },
      "scheduleData": {
        "basicSchedule": {
          "timeUnit": "minutes",
          "units": 0
        },
        "cron": {
          "cronExpression": "string",
          "cronTimeZone": "string"
        }
      },
      "scheduleType": "manual",
      "sourceCatalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "active",
      "syncCatalog": {
        "streams": [
          {
            "config": {
              "aliasName": "string",
              "cursorField": [
                "string"
              ],
              "destinationSyncMode": "append",
              "fieldSelectionEnabled": true,
              "primaryKey": [
                [
                  "string"
                ]
              ],
              "selected": true,
              "selectedFields": [
                {
                  "fieldPath": [
                    "string"
                  ]
                }
              ],
              "suggested": true,
              "syncMode": "full_refresh"
            },
            "stream": {
              "defaultCursorField": [
                "string"
              ],
              "jsonSchema": {},
              "name": "string",
              "namespace": "string",
              "sourceDefinedCursor": true,
              "sourceDefinedPrimaryKey": [
                [
                  "string"
                ]
              ],
              "supportedSyncModes": [
                "full_refresh"
              ]
            }
          }
        ]
      }
    }
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="search-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ConnectionReadList](#schemaconnectionreadlist)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Trigger a manual sync of the connection

<a id="opIdsyncConnection"></a>

> Code samples

```bash
curl https://example.com/v1/connections/sync \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/connections/sync`

> Body parameter

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="trigger-a-manual-sync-of-the-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectionIdRequestBody](#schemaconnectionidrequestbody)|true|none|
|» connectionId|body|[ConnectionId](#schemaconnectionid)|true|none|

> Example responses

> 200 Response

```json
{
  "attempts": [
    {
      "attempt": {
        "bytesSynced": 0,
        "createdAt": 0,
        "endedAt": 0,
        "failureSummary": {
          "failures": [
            {
              "externalMessage": "string",
              "failureOrigin": "source",
              "failureType": "config_error",
              "internalMessage": "string",
              "retryable": true,
              "stacktrace": "string",
              "timestamp": 0
            }
          ],
          "partialSuccess": true
        },
        "id": 0,
        "recordsSynced": 0,
        "status": "running",
        "streamStats": [
          {
            "stats": {
              "bytesEmitted": 0,
              "estimatedBytes": 0,
              "estimatedRecords": 0,
              "recordsCommitted": 0,
              "recordsEmitted": 0,
              "stateMessagesEmitted": 0
            },
            "streamName": "string",
            "streamNamespace": "string"
          }
        ],
        "totalStats": {
          "bytesEmitted": 0,
          "estimatedBytes": 0,
          "estimatedRecords": 0,
          "recordsCommitted": 0,
          "recordsEmitted": 0,
          "stateMessagesEmitted": 0
        },
        "updatedAt": 0
      },
      "logs": {
        "logLines": [
          "string"
        ]
      }
    }
  ],
  "job": {
    "configId": "string",
    "configType": "check_connection_source",
    "createdAt": 0,
    "id": 0,
    "resetConfig": {
      "streamsToReset": [
        {
          "name": "string",
          "namespace": "string"
        }
      ]
    },
    "startedAt": 0,
    "status": "pending",
    "updatedAt": 0
  }
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="trigger-a-manual-sync-of-the-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[JobInfoRead](#schemajobinforead)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a connection

<a id="opIdupdateConnection"></a>

> Code samples

```bash
curl https://example.com/v1/connections/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "breakingChange": true,
    "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "geography": "auto",
    "name": "string",
    "namespaceDefinition": "source",
    "namespaceFormat": "${SOURCE_NAMESPACE}",
    "nonBreakingChangesPreference": "ignore",
    "notifySchemaChanges": true,
    "operationIds": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "prefix": "string",
    "resourceRequirements": {
      "cpu_limit": "string",
      "cpu_request": "string",
      "memory_limit": "string",
      "memory_request": "string"
    },
    "schedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "scheduleData": {
      "basicSchedule": {
        "timeUnit": "minutes",
        "units": 0
      },
      "cron": {
        "cronExpression": "string",
        "cronTimeZone": "string"
      }
    },
    "scheduleType": "manual",
    "sourceCatalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "active",
    "syncCatalog": {
      "streams": [
        {
          "config": {
            "aliasName": "string",
            "cursorField": [
              "string"
            ],
            "destinationSyncMode": "append",
            "fieldSelectionEnabled": true,
            "primaryKey": [
              [
                "string"
              ]
            ],
            "selected": true,
            "selectedFields": [
              {
                "fieldPath": [
                  "string"
                ]
              }
            ],
            "suggested": true,
            "syncMode": "full_refresh"
          },
          "stream": {
            "defaultCursorField": [
              "string"
            ],
            "jsonSchema": {},
            "name": "string",
            "namespace": "string",
            "sourceDefinedCursor": true,
            "sourceDefinedPrimaryKey": [
              [
                "string"
              ]
            ],
            "supportedSyncModes": [
              "full_refresh"
            ]
          }
        }
      ]
    }
  }'
```

`POST /v1/connections/update`

Apply a patch-style update to a connection. Only fields present on the update request body will be updated.
Note that if a catalog is present in the request body, the connection's entire catalog will be replaced
with the catalog from the request. This means that to modify a single stream, the entire new catalog
containing the updated stream needs to be sent.


> Body parameter

```json
{
  "breakingChange": true,
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geography": "auto",
  "name": "string",
  "namespaceDefinition": "source",
  "namespaceFormat": "${SOURCE_NAMESPACE}",
  "nonBreakingChangesPreference": "ignore",
  "notifySchemaChanges": true,
  "operationIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "prefix": "string",
  "resourceRequirements": {
    "cpu_limit": "string",
    "cpu_request": "string",
    "memory_limit": "string",
    "memory_request": "string"
  },
  "schedule": {
    "timeUnit": "minutes",
    "units": 0
  },
  "scheduleData": {
    "basicSchedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "cron": {
      "cronExpression": "string",
      "cronTimeZone": "string"
    }
  },
  "scheduleType": "manual",
  "sourceCatalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "active",
  "syncCatalog": {
    "streams": [
      {
        "config": {
          "aliasName": "string",
          "cursorField": [
            "string"
          ],
          "destinationSyncMode": "append",
          "fieldSelectionEnabled": true,
          "primaryKey": [
            [
              "string"
            ]
          ],
          "selected": true,
          "selectedFields": [
            {
              "fieldPath": [
                "string"
              ]
            }
          ],
          "suggested": true,
          "syncMode": "full_refresh"
        },
        "stream": {
          "defaultCursorField": [
            "string"
          ],
          "jsonSchema": {},
          "name": "string",
          "namespace": "string",
          "sourceDefinedCursor": true,
          "sourceDefinedPrimaryKey": [
            [
              "string"
            ]
          ],
          "supportedSyncModes": [
            "full_refresh"
          ]
        }
      }
    ]
  }
}
```

<h3 id="update-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectionUpdate](#schemaconnectionupdate)|true|none|
|» breakingChange|body|boolean|false|none|
|» connectionId|body|[ConnectionId](#schemaconnectionid)|true|none|
|» geography|body|[Geography](#schemageography)|false|none|
|» name|body|string|false|Name that will be set to this connection|
|» namespaceDefinition|body|[NamespaceDefinitionType](#schemanamespacedefinitiontype)|false|Method used for computing final namespace in destination|
|» namespaceFormat|body|string|false|Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.|
|» nonBreakingChangesPreference|body|[NonBreakingChangesPreference](#schemanonbreakingchangespreference)|false|none|
|» notifySchemaChanges|body|boolean|false|none|
|» operationIds|body|[[OperationId](#schemaoperationid)]|false|none|
|» prefix|body|string|false|Prefix that will be prepended to the name of each stream when it is written to the destination.|
|» resourceRequirements|body|[ResourceRequirements](#schemaresourcerequirements)|false|optional resource requirements to run workers (blank for unbounded allocations)|
|» schedule|body|[ConnectionSchedule](#schemaconnectionschedule)|false|if null, then no schedule is set.|
|» scheduleData|body|[ConnectionScheduleData](#schemaconnectionscheduledata)|false|schedule for when the the connection should run, per the schedule type|
|» scheduleType|body|[ConnectionScheduleType](#schemaconnectionscheduletype)|false|determine how the schedule data should be interpreted|
|» sourceCatalogId|body|string(uuid)|false|none|
|» status|body|[ConnectionStatus](#schemaconnectionstatus)|false|Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.|
|» syncCatalog|body|[AirbyteCatalog](#schemaairbytecatalog)|false|describes the available schema (catalog).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» geography|auto|
|» geography|us|
|» geography|eu|
|» namespaceDefinition|source|
|» namespaceDefinition|destination|
|» namespaceDefinition|customformat|
|» nonBreakingChangesPreference|ignore|
|» nonBreakingChangesPreference|disable|
|» scheduleType|manual|
|» scheduleType|basic|
|» scheduleType|cron|
|» status|active|
|» status|inactive|
|» status|deprecated|

> Example responses

> 200 Response

```json
{
  "breakingChange": true,
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geography": "auto",
  "name": "string",
  "namespaceDefinition": "source",
  "namespaceFormat": "${SOURCE_NAMESPACE}",
  "nonBreakingChangesPreference": "ignore",
  "notifySchemaChanges": true,
  "operationIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "prefix": "string",
  "resourceRequirements": {
    "cpu_limit": "string",
    "cpu_request": "string",
    "memory_limit": "string",
    "memory_request": "string"
  },
  "schedule": {
    "timeUnit": "minutes",
    "units": 0
  },
  "scheduleData": {
    "basicSchedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "cron": {
      "cronExpression": "string",
      "cronTimeZone": "string"
    }
  },
  "scheduleType": "manual",
  "sourceCatalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "active",
  "syncCatalog": {
    "streams": [
      {
        "config": {
          "aliasName": "string",
          "cursorField": [
            "string"
          ],
          "destinationSyncMode": "append",
          "fieldSelectionEnabled": true,
          "primaryKey": [
            [
              "string"
            ]
          ],
          "selected": true,
          "selectedFields": [
            {
              "fieldPath": [
                "string"
              ]
            }
          ],
          "suggested": true,
          "syncMode": "full_refresh"
        },
        "stream": {
          "defaultCursorField": [
            "string"
          ],
          "jsonSchema": {},
          "name": "string",
          "namespace": "string",
          "sourceDefinedCursor": true,
          "sourceDefinedPrimaryKey": [
            [
              "string"
            ]
          ],
          "supportedSyncModes": [
            "full_refresh"
          ]
        }
      }
    ]
  }
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="update-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ConnectionRead](#schemaconnectionread)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airbyte-configuration-api-destinationoauth">destination_oauth</h1>

Source OAuth related resources to delegate access from user.

## Given a destination def ID generate an access/refresh token etc.

<a id="opIdcompleteDestinationOAuth"></a>

> Code samples

```bash
curl https://example.com/v1/destination_oauths/complete_oauth \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "oAuthInputConfiguration": null,
    "queryParams": {},
    "redirectUrl": "string",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/destination_oauths/complete_oauth`

> Body parameter

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "oAuthInputConfiguration": null,
  "queryParams": {},
  "redirectUrl": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="given-a-destination-def-id-generate-an-accessrefresh-token-etc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CompleteDestinationOAuthRequest](#schemacompletedestinationoauthrequest)|true|none|
|» destinationDefinitionId|body|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|
|» destinationId|body|[DestinationId](#schemadestinationid)|false|none|
|» oAuthInputConfiguration|body|[OAuthConfiguration](#schemaoauthconfiguration)|false|The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema.|
|» queryParams|body|object|false|The query parameters present in the redirect URL after a user granted consent e.g auth code|
|» redirectUrl|body|string|false|When completing OAuth flow to gain an access token, some API sometimes requires to verify that the app re-send the redirectUrl that was used when consent was given.|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="given-a-destination-def-id-generate-an-accessrefresh-token-etc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CompleteOAuthResponse](#schemacompleteoauthresponse)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Given a destination connector definition ID, return the URL to the consent screen where to redirect the user to.

<a id="opIdgetDestinationOAuthConsent"></a>

> Code samples

```bash
curl https://example.com/v1/destination_oauths/get_consent_url \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "oAuthInputConfiguration": null,
    "redirectUrl": "string",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/destination_oauths/get_consent_url`

> Body parameter

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "oAuthInputConfiguration": null,
  "redirectUrl": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="given-a-destination-connector-definition-id-return-the-url-to-the-consent-screen-where-to-redirect-the-user-to-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DestinationOauthConsentRequest](#schemadestinationoauthconsentrequest)|true|none|
|» destinationDefinitionId|body|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|
|» destinationId|body|[DestinationId](#schemadestinationid)|false|none|
|» oAuthInputConfiguration|body|[OAuthConfiguration](#schemaoauthconfiguration)|false|The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema.|
|» redirectUrl|body|string|true|The url to redirect to after getting the user consent|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "consentUrl": "string"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="given-a-destination-connector-definition-id-return-the-url-to-the-consent-screen-where-to-redirect-the-user-to-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OAuthConsentRead](#schemaoauthconsentread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Sets instancewide variables to be used for the oauth flow when creating this destination. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.

<a id="opIdsetInstancewideDestinationOauthParams"></a>

> Code samples

```bash
curl https://example.com/v1/destination_oauths/oauth_params/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "params": {}
  }'
```

`POST /v1/destination_oauths/oauth_params/create`

> Body parameter

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "params": {}
}
```

<h3 id="sets-instancewide-variables-to-be-used-for-the-oauth-flow-when-creating-this-destination-when-set-these-variables-will-be-injected-into-a-connectors-configuration-before-any-interaction-with-the-connector-image-itself-this-enables-running-oauth-flows-with-consistent-variables-eg-the-companys-google-ads-developertoken-clientid-and-clientsecret-without-the-user-having-to-know-about-these-variables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SetInstancewideDestinationOauthParamsRequestBody](#schemasetinstancewidedestinationoauthparamsrequestbody)|true|none|
|» destinationDefinitionId|body|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|
|» params|body|object|true|none|

> Example responses

> 400 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

<h3 id="sets-instancewide-variables-to-be-used-for-the-oauth-flow-when-creating-this-destination-when-set-these-variables-will-be-injected-into-a-connectors-configuration-before-any-interaction-with-the-connector-image-itself-this-enables-running-oauth-flows-with-consistent-variables-eg-the-companys-google-ads-developertoken-clientid-and-clientsecret-without-the-user-having-to-know-about-these-variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful|None|
|400|Bad Request|Exception occurred; see message for details.|[KnownExceptionInfo](#schemaknownexceptioninfo)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airbyte-configuration-api-sourceoauth">source_oauth</h1>

Source OAuth related resources to delegate access from user.

## Given a source def ID generate an access/refresh token etc.

<a id="opIdcompleteSourceOAuth"></a>

> Code samples

```bash
curl https://example.com/v1/source_oauths/complete_oauth \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "oAuthInputConfiguration": null,
    "queryParams": {},
    "redirectUrl": "string",
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/source_oauths/complete_oauth`

> Body parameter

```json
{
  "oAuthInputConfiguration": null,
  "queryParams": {},
  "redirectUrl": "string",
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="given-a-source-def-id-generate-an-accessrefresh-token-etc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CompleteSourceOauthRequest](#schemacompletesourceoauthrequest)|true|none|
|» oAuthInputConfiguration|body|[OAuthConfiguration](#schemaoauthconfiguration)|false|The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema.|
|» queryParams|body|object|false|The query parameters present in the redirect URL after a user granted consent e.g auth code|
|» redirectUrl|body|string|false|When completing OAuth flow to gain an access token, some API sometimes requires to verify that the app re-send the redirectUrl that was used when consent was given.|
|» sourceDefinitionId|body|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|
|» sourceId|body|[SourceId](#schemasourceid)|false|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="given-a-source-def-id-generate-an-accessrefresh-token-etc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CompleteOAuthResponse](#schemacompleteoauthresponse)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Given a source connector definition ID, return the URL to the consent screen where to redirect the user to.

<a id="opIdgetSourceOAuthConsent"></a>

> Code samples

```bash
curl https://example.com/v1/source_oauths/get_consent_url \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "oAuthInputConfiguration": null,
    "redirectUrl": "string",
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/source_oauths/get_consent_url`

> Body parameter

```json
{
  "oAuthInputConfiguration": null,
  "redirectUrl": "string",
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="given-a-source-connector-definition-id-return-the-url-to-the-consent-screen-where-to-redirect-the-user-to-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SourceOauthConsentRequest](#schemasourceoauthconsentrequest)|true|none|
|» oAuthInputConfiguration|body|[OAuthConfiguration](#schemaoauthconfiguration)|false|The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema.|
|» redirectUrl|body|string|true|The url to redirect to after getting the user consent|
|» sourceDefinitionId|body|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|
|» sourceId|body|[SourceId](#schemasourceid)|false|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "consentUrl": "string"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="given-a-source-connector-definition-id-return-the-url-to-the-consent-screen-where-to-redirect-the-user-to-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OAuthConsentRead](#schemaoauthconsentread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Sets instancewide variables to be used for the oauth flow when creating this source. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.

<a id="opIdsetInstancewideSourceOauthParams"></a>

> Code samples

```bash
curl https://example.com/v1/source_oauths/oauth_params/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "params": {},
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/source_oauths/oauth_params/create`

> Body parameter

```json
{
  "params": {},
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="sets-instancewide-variables-to-be-used-for-the-oauth-flow-when-creating-this-source-when-set-these-variables-will-be-injected-into-a-connectors-configuration-before-any-interaction-with-the-connector-image-itself-this-enables-running-oauth-flows-with-consistent-variables-eg-the-companys-google-ads-developertoken-clientid-and-clientsecret-without-the-user-having-to-know-about-these-variables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SetInstancewideSourceOauthParamsRequestBody](#schemasetinstancewidesourceoauthparamsrequestbody)|true|none|
|» params|body|object|true|none|
|» sourceDefinitionId|body|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|

> Example responses

> 400 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

<h3 id="sets-instancewide-variables-to-be-used-for-the-oauth-flow-when-creating-this-source-when-set-these-variables-will-be-injected-into-a-connectors-configuration-before-any-interaction-with-the-connector-image-itself-this-enables-running-oauth-flows-with-consistent-variables-eg-the-companys-google-ads-developertoken-clientid-and-clientsecret-without-the-user-having-to-know-about-these-variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful|None|
|400|Bad Request|Exception occurred; see message for details.|[KnownExceptionInfo](#schemaknownexceptioninfo)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airbyte-configuration-api-webbackend">web_backend</h1>

Endpoints for the Airbyte web application. Those APIs should not be called outside the web application implementation and are not
guaranteeing any backwards compatibility.


## Returns a summary of source and destination definitions that could be updated.

<a id="opIdwebBackendCheckUpdates"></a>

> Code samples

```bash
curl https://example.com/v1/web_backend/check_updates \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v1/web_backend/check_updates`

> Example responses

> 200 Response

```json
{
  "destinationDefinitions": 0,
  "sourceDefinitions": 0
}
```

<h3 id="returns-a-summary-of-source-and-destination-definitions-that-could-be-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[WebBackendCheckUpdatesRead](#schemawebbackendcheckupdatesread)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a connection

<a id="opIdwebBackendCreateConnection"></a>

> Code samples

```bash
curl https://example.com/v1/web_backend/connections/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "geography": "auto",
    "name": "string",
    "namespaceDefinition": "source",
    "namespaceFormat": "${SOURCE_NAMESPACE}",
    "nonBreakingChangesPreference": "ignore",
    "operationIds": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "operations": [
      {
        "name": "string",
        "operatorConfiguration": {
          "dbt": {
            "dbtArguments": "string",
            "dockerImage": "string",
            "gitRepoBranch": "string",
            "gitRepoUrl": "string"
          },
          "normalization": {
            "option": "basic"
          },
          "operatorType": "normalization",
          "webhook": {
            "dbtCloud": {
              "accountId": 0,
              "jobId": 0
            },
            "executionBody": "string",
            "executionUrl": "string",
            "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "webhookType": "dbtCloud"
          }
        },
        "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ],
    "prefix": "string",
    "resourceRequirements": {
      "cpu_limit": "string",
      "cpu_request": "string",
      "memory_limit": "string",
      "memory_request": "string"
    },
    "schedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "scheduleData": {
      "basicSchedule": {
        "timeUnit": "minutes",
        "units": 0
      },
      "cron": {
        "cronExpression": "string",
        "cronTimeZone": "string"
      }
    },
    "scheduleType": "manual",
    "sourceCatalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "active",
    "syncCatalog": {
      "streams": [
        {
          "config": {
            "aliasName": "string",
            "cursorField": [
              "string"
            ],
            "destinationSyncMode": "append",
            "fieldSelectionEnabled": true,
            "primaryKey": [
              [
                "string"
              ]
            ],
            "selected": true,
            "selectedFields": [
              {
                "fieldPath": [
                  "string"
                ]
              }
            ],
            "suggested": true,
            "syncMode": "full_refresh"
          },
          "stream": {
            "defaultCursorField": [
              "string"
            ],
            "jsonSchema": {},
            "name": "string",
            "namespace": "string",
            "sourceDefinedCursor": true,
            "sourceDefinedPrimaryKey": [
              [
                "string"
              ]
            ],
            "supportedSyncModes": [
              "full_refresh"
            ]
          }
        }
      ]
    }
  }'
```

`POST /v1/web_backend/connections/create`

> Body parameter

```json
{
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geography": "auto",
  "name": "string",
  "namespaceDefinition": "source",
  "namespaceFormat": "${SOURCE_NAMESPACE}",
  "nonBreakingChangesPreference": "ignore",
  "operationIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "operations": [
    {
      "name": "string",
      "operatorConfiguration": {
        "dbt": {
          "dbtArguments": "string",
          "dockerImage": "string",
          "gitRepoBranch": "string",
          "gitRepoUrl": "string"
        },
        "normalization": {
          "option": "basic"
        },
        "operatorType": "normalization",
        "webhook": {
          "dbtCloud": {
            "accountId": 0,
            "jobId": 0
          },
          "executionBody": "string",
          "executionUrl": "string",
          "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "webhookType": "dbtCloud"
        }
      },
      "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "prefix": "string",
  "resourceRequirements": {
    "cpu_limit": "string",
    "cpu_request": "string",
    "memory_limit": "string",
    "memory_request": "string"
  },
  "schedule": {
    "timeUnit": "minutes",
    "units": 0
  },
  "scheduleData": {
    "basicSchedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "cron": {
      "cronExpression": "string",
      "cronTimeZone": "string"
    }
  },
  "scheduleType": "manual",
  "sourceCatalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "active",
  "syncCatalog": {
    "streams": [
      {
        "config": {
          "aliasName": "string",
          "cursorField": [
            "string"
          ],
          "destinationSyncMode": "append",
          "fieldSelectionEnabled": true,
          "primaryKey": [
            [
              "string"
            ]
          ],
          "selected": true,
          "selectedFields": [
            {
              "fieldPath": [
                "string"
              ]
            }
          ],
          "suggested": true,
          "syncMode": "full_refresh"
        },
        "stream": {
          "defaultCursorField": [
            "string"
          ],
          "jsonSchema": {},
          "name": "string",
          "namespace": "string",
          "sourceDefinedCursor": true,
          "sourceDefinedPrimaryKey": [
            [
              "string"
            ]
          ],
          "supportedSyncModes": [
            "full_refresh"
          ]
        }
      }
    ]
  }
}
```

<h3 id="create-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WebBackendConnectionCreate](#schemawebbackendconnectioncreate)|true|none|
|» destinationId|body|[DestinationId](#schemadestinationid)|true|none|
|» geography|body|[Geography](#schemageography)|false|none|
|» name|body|string|false|Optional name of the connection|
|» namespaceDefinition|body|[NamespaceDefinitionType](#schemanamespacedefinitiontype)|false|Method used for computing final namespace in destination|
|» namespaceFormat|body|string|false|Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.|
|» nonBreakingChangesPreference|body|[NonBreakingChangesPreference](#schemanonbreakingchangespreference)|false|none|
|» operationIds|body|[[OperationId](#schemaoperationid)]|false|none|
|» operations|body|[[OperationCreate](#schemaoperationcreate)]|false|none|
|» prefix|body|string|false|Prefix that will be prepended to the name of each stream when it is written to the destination.|
|» resourceRequirements|body|[ResourceRequirements](#schemaresourcerequirements)|false|optional resource requirements to run workers (blank for unbounded allocations)|
|» schedule|body|[ConnectionSchedule](#schemaconnectionschedule)|false|if null, then no schedule is set.|
|» scheduleData|body|[ConnectionScheduleData](#schemaconnectionscheduledata)|false|schedule for when the the connection should run, per the schedule type|
|» scheduleType|body|[ConnectionScheduleType](#schemaconnectionscheduletype)|false|determine how the schedule data should be interpreted|
|» sourceCatalogId|body|string(uuid)|false|none|
|» sourceId|body|[SourceId](#schemasourceid)|true|none|
|» status|body|[ConnectionStatus](#schemaconnectionstatus)|true|Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.|
|» syncCatalog|body|[AirbyteCatalog](#schemaairbytecatalog)|false|describes the available schema (catalog).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» geography|auto|
|» geography|us|
|» geography|eu|
|» namespaceDefinition|source|
|» namespaceDefinition|destination|
|» namespaceDefinition|customformat|
|» nonBreakingChangesPreference|ignore|
|» nonBreakingChangesPreference|disable|
|» scheduleType|manual|
|» scheduleType|basic|
|» scheduleType|cron|
|» status|active|
|» status|inactive|
|» status|deprecated|

> Example responses

> 200 Response

```json
{
  "catalogDiff": {
    "transforms": [
      {
        "streamDescriptor": {
          "name": "string",
          "namespace": "string"
        },
        "transformType": "add_stream",
        "updateStream": [
          {
            "addField": {
              "schema": {}
            },
            "breaking": true,
            "fieldName": [
              "string"
            ],
            "removeField": {
              "schema": {}
            },
            "transformType": "add_field",
            "updateFieldSchema": {
              "newSchema": {},
              "oldSchema": {}
            }
          }
        ]
      }
    ]
  },
  "catalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destination": {
    "connectionConfiguration": {
      "user": "charles"
    },
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "destinationName": "string",
    "icon": "string",
    "name": "string",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geography": "auto",
  "isSyncing": true,
  "latestSyncJobCreatedAt": 0,
  "latestSyncJobStatus": "pending",
  "name": "string",
  "namespaceDefinition": "source",
  "namespaceFormat": "${SOURCE_NAMESPACE}",
  "nonBreakingChangesPreference": "ignore",
  "notifySchemaChanges": true,
  "operationIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "operations": [
    {
      "name": "string",
      "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "operatorConfiguration": {
        "dbt": {
          "dbtArguments": "string",
          "dockerImage": "string",
          "gitRepoBranch": "string",
          "gitRepoUrl": "string"
        },
        "normalization": {
          "option": "basic"
        },
        "operatorType": "normalization",
        "webhook": {
          "dbtCloud": {
            "accountId": 0,
            "jobId": 0
          },
          "executionBody": "string",
          "executionUrl": "string",
          "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "webhookType": "dbtCloud"
        }
      },
      "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "prefix": "string",
  "resourceRequirements": {
    "cpu_limit": "string",
    "cpu_request": "string",
    "memory_limit": "string",
    "memory_request": "string"
  },
  "schedule": {
    "timeUnit": "minutes",
    "units": 0
  },
  "scheduleData": {
    "basicSchedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "cron": {
      "cronExpression": "string",
      "cronTimeZone": "string"
    }
  },
  "scheduleType": "manual",
  "schemaChange": "no_change",
  "source": {
    "connectionConfiguration": {
      "user": "charles"
    },
    "icon": "string",
    "name": "string",
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceName": "string",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "active",
  "syncCatalog": {
    "streams": [
      {
        "config": {
          "aliasName": "string",
          "cursorField": [
            "string"
          ],
          "destinationSyncMode": "append",
          "fieldSelectionEnabled": true,
          "primaryKey": [
            [
              "string"
            ]
          ],
          "selected": true,
          "selectedFields": [
            {
              "fieldPath": [
                "string"
              ]
            }
          ],
          "suggested": true,
          "syncMode": "full_refresh"
        },
        "stream": {
          "defaultCursorField": [
            "string"
          ],
          "jsonSchema": {},
          "name": "string",
          "namespace": "string",
          "sourceDefinedCursor": true,
          "sourceDefinedPrimaryKey": [
            [
              "string"
            ]
          ],
          "supportedSyncModes": [
            "full_refresh"
          ]
        }
      }
    ]
  }
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="create-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[WebBackendConnectionRead](#schemawebbackendconnectionread)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a connection

<a id="opIdwebBackendGetConnection"></a>

> Code samples

```bash
curl https://example.com/v1/web_backend/connections/get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "withRefreshedCatalog": true
  }'
```

`POST /v1/web_backend/connections/get`

> Body parameter

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "withRefreshedCatalog": true
}
```

<h3 id="get-a-connection-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WebBackendConnectionRequestBody](#schemawebbackendconnectionrequestbody)|true|none|
|» connectionId|body|[ConnectionId](#schemaconnectionid)|true|none|
|» withRefreshedCatalog|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "catalogDiff": {
    "transforms": [
      {
        "streamDescriptor": {
          "name": "string",
          "namespace": "string"
        },
        "transformType": "add_stream",
        "updateStream": [
          {
            "addField": {
              "schema": {}
            },
            "breaking": true,
            "fieldName": [
              "string"
            ],
            "removeField": {
              "schema": {}
            },
            "transformType": "add_field",
            "updateFieldSchema": {
              "newSchema": {},
              "oldSchema": {}
            }
          }
        ]
      }
    ]
  },
  "catalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destination": {
    "connectionConfiguration": {
      "user": "charles"
    },
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "destinationName": "string",
    "icon": "string",
    "name": "string",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geography": "auto",
  "isSyncing": true,
  "latestSyncJobCreatedAt": 0,
  "latestSyncJobStatus": "pending",
  "name": "string",
  "namespaceDefinition": "source",
  "namespaceFormat": "${SOURCE_NAMESPACE}",
  "nonBreakingChangesPreference": "ignore",
  "notifySchemaChanges": true,
  "operationIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "operations": [
    {
      "name": "string",
      "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "operatorConfiguration": {
        "dbt": {
          "dbtArguments": "string",
          "dockerImage": "string",
          "gitRepoBranch": "string",
          "gitRepoUrl": "string"
        },
        "normalization": {
          "option": "basic"
        },
        "operatorType": "normalization",
        "webhook": {
          "dbtCloud": {
            "accountId": 0,
            "jobId": 0
          },
          "executionBody": "string",
          "executionUrl": "string",
          "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "webhookType": "dbtCloud"
        }
      },
      "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "prefix": "string",
  "resourceRequirements": {
    "cpu_limit": "string",
    "cpu_request": "string",
    "memory_limit": "string",
    "memory_request": "string"
  },
  "schedule": {
    "timeUnit": "minutes",
    "units": 0
  },
  "scheduleData": {
    "basicSchedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "cron": {
      "cronExpression": "string",
      "cronTimeZone": "string"
    }
  },
  "scheduleType": "manual",
  "schemaChange": "no_change",
  "source": {
    "connectionConfiguration": {
      "user": "charles"
    },
    "icon": "string",
    "name": "string",
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceName": "string",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "active",
  "syncCatalog": {
    "streams": [
      {
        "config": {
          "aliasName": "string",
          "cursorField": [
            "string"
          ],
          "destinationSyncMode": "append",
          "fieldSelectionEnabled": true,
          "primaryKey": [
            [
              "string"
            ]
          ],
          "selected": true,
          "selectedFields": [
            {
              "fieldPath": [
                "string"
              ]
            }
          ],
          "suggested": true,
          "syncMode": "full_refresh"
        },
        "stream": {
          "defaultCursorField": [
            "string"
          ],
          "jsonSchema": {},
          "name": "string",
          "namespace": "string",
          "sourceDefinedCursor": true,
          "sourceDefinedPrimaryKey": [
            [
              "string"
            ]
          ],
          "supportedSyncModes": [
            "full_refresh"
          ]
        }
      }
    ]
  }
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="get-a-connection-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[WebBackendConnectionRead](#schemawebbackendconnectionread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns all non-deleted connections for a workspace.

<a id="opIdwebBackendListConnectionsForWorkspace"></a>

> Code samples

```bash
curl https://example.com/v1/web_backend/connections/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinationId": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "sourceId": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/web_backend/connections/list`

> Body parameter

```json
{
  "destinationId": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "sourceId": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="returns-all-non-deleted-connections-for-a-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WebBackendConnectionListRequestBody](#schemawebbackendconnectionlistrequestbody)|true|none|
|» destinationId|body|[[DestinationId](#schemadestinationid)]|false|none|
|» sourceId|body|[[SourceId](#schemasourceid)]|false|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "connections": [
    {
      "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "destination": {
        "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "destinationName": "string",
        "icon": "string",
        "name": "string"
      },
      "isSyncing": true,
      "latestSyncJobCreatedAt": 0,
      "latestSyncJobStatus": "pending",
      "name": "string",
      "scheduleData": {
        "basicSchedule": {
          "timeUnit": "minutes",
          "units": 0
        },
        "cron": {
          "cronExpression": "string",
          "cronTimeZone": "string"
        }
      },
      "scheduleType": "manual",
      "schemaChange": "no_change",
      "source": {
        "icon": "string",
        "name": "string",
        "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "sourceName": "string"
      },
      "status": "active"
    }
  ]
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="returns-all-non-deleted-connections-for-a-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[WebBackendConnectionReadList](#schemawebbackendconnectionreadlist)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a connection

<a id="opIdwebBackendUpdateConnection"></a>

> Code samples

```bash
curl https://example.com/v1/web_backend/connections/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "geography": "auto",
    "name": "string",
    "namespaceDefinition": "source",
    "namespaceFormat": "${SOURCE_NAMESPACE}",
    "nonBreakingChangesPreference": "ignore",
    "notifySchemaChanges": true,
    "operations": [
      {
        "name": "string",
        "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "operatorConfiguration": {
          "dbt": {
            "dbtArguments": "string",
            "dockerImage": "string",
            "gitRepoBranch": "string",
            "gitRepoUrl": "string"
          },
          "normalization": {
            "option": "basic"
          },
          "operatorType": "normalization",
          "webhook": {
            "dbtCloud": {
              "accountId": 0,
              "jobId": 0
            },
            "executionBody": "string",
            "executionUrl": "string",
            "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "webhookType": "dbtCloud"
          }
        },
        "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ],
    "prefix": "string",
    "resourceRequirements": {
      "cpu_limit": "string",
      "cpu_request": "string",
      "memory_limit": "string",
      "memory_request": "string"
    },
    "schedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "scheduleData": {
      "basicSchedule": {
        "timeUnit": "minutes",
        "units": 0
      },
      "cron": {
        "cronExpression": "string",
        "cronTimeZone": "string"
      }
    },
    "scheduleType": "manual",
    "skipReset": true,
    "sourceCatalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "active",
    "syncCatalog": {
      "streams": [
        {
          "config": {
            "aliasName": "string",
            "cursorField": [
              "string"
            ],
            "destinationSyncMode": "append",
            "fieldSelectionEnabled": true,
            "primaryKey": [
              [
                "string"
              ]
            ],
            "selected": true,
            "selectedFields": [
              {
                "fieldPath": [
                  "string"
                ]
              }
            ],
            "suggested": true,
            "syncMode": "full_refresh"
          },
          "stream": {
            "defaultCursorField": [
              "string"
            ],
            "jsonSchema": {},
            "name": "string",
            "namespace": "string",
            "sourceDefinedCursor": true,
            "sourceDefinedPrimaryKey": [
              [
                "string"
              ]
            ],
            "supportedSyncModes": [
              "full_refresh"
            ]
          }
        }
      ]
    }
  }'
```

`POST /v1/web_backend/connections/update`

Apply a patch-style update to a connection. Only fields present on the update request body will be updated.
Any operations that lack an ID will be created. Then, the newly created operationId will be applied to the
connection along with the rest of the operationIds in the request body.
Apply a patch-style update to a connection. Only fields present on the update request body will be updated.
Note that if a catalog is present in the request body, the connection's entire catalog will be replaced
with the catalog from the request. This means that to modify a single stream, the entire new catalog
containing the updated stream needs to be sent.


> Body parameter

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geography": "auto",
  "name": "string",
  "namespaceDefinition": "source",
  "namespaceFormat": "${SOURCE_NAMESPACE}",
  "nonBreakingChangesPreference": "ignore",
  "notifySchemaChanges": true,
  "operations": [
    {
      "name": "string",
      "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "operatorConfiguration": {
        "dbt": {
          "dbtArguments": "string",
          "dockerImage": "string",
          "gitRepoBranch": "string",
          "gitRepoUrl": "string"
        },
        "normalization": {
          "option": "basic"
        },
        "operatorType": "normalization",
        "webhook": {
          "dbtCloud": {
            "accountId": 0,
            "jobId": 0
          },
          "executionBody": "string",
          "executionUrl": "string",
          "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "webhookType": "dbtCloud"
        }
      },
      "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "prefix": "string",
  "resourceRequirements": {
    "cpu_limit": "string",
    "cpu_request": "string",
    "memory_limit": "string",
    "memory_request": "string"
  },
  "schedule": {
    "timeUnit": "minutes",
    "units": 0
  },
  "scheduleData": {
    "basicSchedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "cron": {
      "cronExpression": "string",
      "cronTimeZone": "string"
    }
  },
  "scheduleType": "manual",
  "skipReset": true,
  "sourceCatalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "active",
  "syncCatalog": {
    "streams": [
      {
        "config": {
          "aliasName": "string",
          "cursorField": [
            "string"
          ],
          "destinationSyncMode": "append",
          "fieldSelectionEnabled": true,
          "primaryKey": [
            [
              "string"
            ]
          ],
          "selected": true,
          "selectedFields": [
            {
              "fieldPath": [
                "string"
              ]
            }
          ],
          "suggested": true,
          "syncMode": "full_refresh"
        },
        "stream": {
          "defaultCursorField": [
            "string"
          ],
          "jsonSchema": {},
          "name": "string",
          "namespace": "string",
          "sourceDefinedCursor": true,
          "sourceDefinedPrimaryKey": [
            [
              "string"
            ]
          ],
          "supportedSyncModes": [
            "full_refresh"
          ]
        }
      }
    ]
  }
}
```

<h3 id="update-a-connection-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WebBackendConnectionUpdate](#schemawebbackendconnectionupdate)|true|none|
|» connectionId|body|[ConnectionId](#schemaconnectionid)|true|none|
|» geography|body|[Geography](#schemageography)|false|none|
|» name|body|string|false|Name that will be set to the connection|
|» namespaceDefinition|body|[NamespaceDefinitionType](#schemanamespacedefinitiontype)|false|Method used for computing final namespace in destination|
|» namespaceFormat|body|string|false|Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.|
|» nonBreakingChangesPreference|body|[NonBreakingChangesPreference](#schemanonbreakingchangespreference)|false|none|
|» notifySchemaChanges|body|boolean|false|none|
|» operations|body|[[WebBackendOperationCreateOrUpdate](#schemawebbackendoperationcreateorupdate)]|false|none|
|» prefix|body|string|false|Prefix that will be prepended to the name of each stream when it is written to the destination.|
|» resourceRequirements|body|[ResourceRequirements](#schemaresourcerequirements)|false|optional resource requirements to run workers (blank for unbounded allocations)|
|» schedule|body|[ConnectionSchedule](#schemaconnectionschedule)|false|if null, then no schedule is set.|
|» scheduleData|body|[ConnectionScheduleData](#schemaconnectionscheduledata)|false|schedule for when the the connection should run, per the schedule type|
|» scheduleType|body|[ConnectionScheduleType](#schemaconnectionscheduletype)|false|determine how the schedule data should be interpreted|
|» skipReset|body|boolean|false|none|
|» sourceCatalogId|body|string(uuid)|false|none|
|» status|body|[ConnectionStatus](#schemaconnectionstatus)|false|Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.|
|» syncCatalog|body|[AirbyteCatalog](#schemaairbytecatalog)|false|describes the available schema (catalog).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» geography|auto|
|» geography|us|
|» geography|eu|
|» namespaceDefinition|source|
|» namespaceDefinition|destination|
|» namespaceDefinition|customformat|
|» nonBreakingChangesPreference|ignore|
|» nonBreakingChangesPreference|disable|
|» scheduleType|manual|
|» scheduleType|basic|
|» scheduleType|cron|
|» status|active|
|» status|inactive|
|» status|deprecated|

> Example responses

> 200 Response

```json
{
  "catalogDiff": {
    "transforms": [
      {
        "streamDescriptor": {
          "name": "string",
          "namespace": "string"
        },
        "transformType": "add_stream",
        "updateStream": [
          {
            "addField": {
              "schema": {}
            },
            "breaking": true,
            "fieldName": [
              "string"
            ],
            "removeField": {
              "schema": {}
            },
            "transformType": "add_field",
            "updateFieldSchema": {
              "newSchema": {},
              "oldSchema": {}
            }
          }
        ]
      }
    ]
  },
  "catalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destination": {
    "connectionConfiguration": {
      "user": "charles"
    },
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "destinationName": "string",
    "icon": "string",
    "name": "string",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geography": "auto",
  "isSyncing": true,
  "latestSyncJobCreatedAt": 0,
  "latestSyncJobStatus": "pending",
  "name": "string",
  "namespaceDefinition": "source",
  "namespaceFormat": "${SOURCE_NAMESPACE}",
  "nonBreakingChangesPreference": "ignore",
  "notifySchemaChanges": true,
  "operationIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "operations": [
    {
      "name": "string",
      "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "operatorConfiguration": {
        "dbt": {
          "dbtArguments": "string",
          "dockerImage": "string",
          "gitRepoBranch": "string",
          "gitRepoUrl": "string"
        },
        "normalization": {
          "option": "basic"
        },
        "operatorType": "normalization",
        "webhook": {
          "dbtCloud": {
            "accountId": 0,
            "jobId": 0
          },
          "executionBody": "string",
          "executionUrl": "string",
          "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "webhookType": "dbtCloud"
        }
      },
      "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "prefix": "string",
  "resourceRequirements": {
    "cpu_limit": "string",
    "cpu_request": "string",
    "memory_limit": "string",
    "memory_request": "string"
  },
  "schedule": {
    "timeUnit": "minutes",
    "units": 0
  },
  "scheduleData": {
    "basicSchedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "cron": {
      "cronExpression": "string",
      "cronTimeZone": "string"
    }
  },
  "scheduleType": "manual",
  "schemaChange": "no_change",
  "source": {
    "connectionConfiguration": {
      "user": "charles"
    },
    "icon": "string",
    "name": "string",
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceName": "string",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "active",
  "syncCatalog": {
    "streams": [
      {
        "config": {
          "aliasName": "string",
          "cursorField": [
            "string"
          ],
          "destinationSyncMode": "append",
          "fieldSelectionEnabled": true,
          "primaryKey": [
            [
              "string"
            ]
          ],
          "selected": true,
          "selectedFields": [
            {
              "fieldPath": [
                "string"
              ]
            }
          ],
          "suggested": true,
          "syncMode": "full_refresh"
        },
        "stream": {
          "defaultCursorField": [
            "string"
          ],
          "jsonSchema": {},
          "name": "string",
          "namespace": "string",
          "sourceDefinedCursor": true,
          "sourceDefinedPrimaryKey": [
            [
              "string"
            ]
          ],
          "supportedSyncModes": [
            "full_refresh"
          ]
        }
      }
    ]
  }
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="update-a-connection-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[WebBackendConnectionRead](#schemawebbackendconnectionread)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns available geographies can be selected to run data syncs in a particular geography. The 'auto' entry indicates that the sync will be automatically assigned to a geography according to the platform default behavior. Entries other than 'auto' are two-letter country codes that follow the ISO 3166-1 alpha-2 standard.

<a id="opIdwebBackendListGeographies"></a>

> Code samples

```bash
curl https://example.com/v1/web_backend/geographies/list \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v1/web_backend/geographies/list`

Returns all available geographies in which a data sync can run.

> Example responses

> 200 Response

```json
{
  "geographies": [
    "auto"
  ]
}
```

<h3 id="returns-available-geographies-can-be-selected-to-run-data-syncs-in-a-particular-geography-the-auto-entry-indicates-that-the-sync-will-be-automatically-assigned-to-a-geography-according-to-the-platform-default-behavior-entries-other-than-auto-are-two-letter-country-codes-that-follow-the-iso-3166-1-alpha-2-standard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[WebBackendGeographiesListResult](#schemawebbackendgeographieslistresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch the current state type for a connection.

<a id="opIdgetStateType"></a>

> Code samples

```bash
curl https://example.com/v1/web_backend/state/get_type \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/web_backend/state/get_type`

> Body parameter

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="fetch-the-current-state-type-for-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectionIdRequestBody](#schemaconnectionidrequestbody)|true|none|
|» connectionId|body|[ConnectionId](#schemaconnectionid)|true|none|

> Example responses

> 200 Response

```json
"global"
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="fetch-the-current-state-type-for-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ConnectionStateType](#schemaconnectionstatetype)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns the current state of a workspace

<a id="opIdwebBackendGetWorkspaceState"></a>

> Code samples

```bash
curl https://example.com/v1/web_backend/workspace/state \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/web_backend/workspace/state`

> Body parameter

```json
{
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="returns-the-current-state-of-a-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WebBackendWorkspaceState](#schemawebbackendworkspacestate)|false|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "hasConnections": true,
  "hasDestinations": true,
  "hasSources": true
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="returns-the-current-state-of-a-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[WebBackendWorkspaceStateResult](#schemawebbackendworkspacestateresult)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airbyte-configuration-api-health">health</h1>

Healthchecks

## Health Check

<a id="opIdgetHealthCheck"></a>

> Code samples

```bash
curl https://example.com/v1/health \
  -H 'Accept: application/json'
```

`GET /v1/health`

> Example responses

> 200 Response

```json
{
  "available": true
}
```

<h3 id="health-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[HealthCheckRead](#schemahealthcheckread)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airbyte-configuration-api-attempt">attempt</h1>

Interactions with attempt related resources.

## For worker to set sync stats of a running attempt.

<a id="opIdsaveStats"></a>

> Code samples

```bash
curl https://example.com/v1/attempt/save_stats \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "attemptNumber": 0,
    "jobId": 0,
    "stats": {
      "bytesEmitted": 0,
      "estimatedBytes": 0,
      "estimatedRecords": 0,
      "recordsCommitted": 0,
      "recordsEmitted": 0,
      "stateMessagesEmitted": 0
    },
    "streamStats": [
      {
        "stats": {
          "bytesEmitted": 0,
          "estimatedBytes": 0,
          "estimatedRecords": 0,
          "recordsCommitted": 0,
          "recordsEmitted": 0,
          "stateMessagesEmitted": 0
        },
        "streamName": "string",
        "streamNamespace": "string"
      }
    ]
  }'
```

`POST /v1/attempt/save_stats`

> Body parameter

```json
{
  "attemptNumber": 0,
  "jobId": 0,
  "stats": {
    "bytesEmitted": 0,
    "estimatedBytes": 0,
    "estimatedRecords": 0,
    "recordsCommitted": 0,
    "recordsEmitted": 0,
    "stateMessagesEmitted": 0
  },
  "streamStats": [
    {
      "stats": {
        "bytesEmitted": 0,
        "estimatedBytes": 0,
        "estimatedRecords": 0,
        "recordsCommitted": 0,
        "recordsEmitted": 0,
        "stateMessagesEmitted": 0
      },
      "streamName": "string",
      "streamNamespace": "string"
    }
  ]
}
```

<h3 id="for-worker-to-set-sync-stats-of-a-running-attempt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SaveStatsRequestBody](#schemasavestatsrequestbody)|true|none|
|» attemptNumber|body|[AttemptNumber](#schemaattemptnumber)|true|none|
|» jobId|body|[JobId](#schemajobid)|true|none|
|» stats|body|[AttemptStats](#schemaattemptstats)|true|none|
|» streamStats|body|[[AttemptStreamStats](#schemaattemptstreamstats)]|false|none|

> Example responses

> 200 Response

```json
{
  "succeeded": true
}
```

<h3 id="for-worker-to-set-sync-stats-of-a-running-attempt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[InternalOperationResult](#schemainternaloperationresult)|

<aside class="success">
This operation does not require authentication
</aside>

## For worker to save the AttemptSyncConfig for an attempt.

<a id="opIdsaveSyncConfig"></a>

> Code samples

```bash
curl https://example.com/v1/attempt/save_sync_config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "attemptNumber": 0,
    "jobId": 0,
    "syncConfig": {
      "destinationConfiguration": {
        "user": "charles"
      },
      "sourceConfiguration": {
        "user": "charles"
      },
      "state": {
        "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "globalState": {
          "shared_state": {},
          "streamStates": [
            {
              "streamDescriptor": {
                "name": "string",
                "namespace": "string"
              },
              "streamState": {}
            }
          ]
        },
        "state": {},
        "stateType": "global",
        "streamState": [
          {
            "streamDescriptor": {
              "name": "string",
              "namespace": "string"
            },
            "streamState": {}
          }
        ]
      }
    }
  }'
```

`POST /v1/attempt/save_sync_config`

> Body parameter

```json
{
  "attemptNumber": 0,
  "jobId": 0,
  "syncConfig": {
    "destinationConfiguration": {
      "user": "charles"
    },
    "sourceConfiguration": {
      "user": "charles"
    },
    "state": {
      "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "globalState": {
        "shared_state": {},
        "streamStates": [
          {
            "streamDescriptor": {
              "name": "string",
              "namespace": "string"
            },
            "streamState": {}
          }
        ]
      },
      "state": {},
      "stateType": "global",
      "streamState": [
        {
          "streamDescriptor": {
            "name": "string",
            "namespace": "string"
          },
          "streamState": {}
        }
      ]
    }
  }
}
```

<h3 id="for-worker-to-save-the-attemptsyncconfig-for-an-attempt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SaveAttemptSyncConfigRequestBody](#schemasaveattemptsyncconfigrequestbody)|true|none|
|» attemptNumber|body|[AttemptNumber](#schemaattemptnumber)|true|none|
|» jobId|body|[JobId](#schemajobid)|true|none|
|» syncConfig|body|[AttemptSyncConfig](#schemaattemptsyncconfig)|true|none|

> Example responses

> 200 Response

```json
{
  "succeeded": true
}
```

<h3 id="for-worker-to-save-the-attemptsyncconfig-for-an-attempt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[InternalOperationResult](#schemainternaloperationresult)|

<aside class="success">
This operation does not require authentication
</aside>

## For worker to register the workflow id in attempt.

<a id="opIdsetWorkflowInAttempt"></a>

> Code samples

```bash
curl https://example.com/v1/attempt/set_workflow_in_attempt \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "attemptNumber": 0,
    "jobId": 0,
    "processingTaskQueue": "",
    "workflowId": "string"
  }'
```

`POST /v1/attempt/set_workflow_in_attempt`

> Body parameter

```json
{
  "attemptNumber": 0,
  "jobId": 0,
  "processingTaskQueue": "",
  "workflowId": "string"
}
```

<h3 id="for-worker-to-register-the-workflow-id-in-attempt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SetWorkflowInAttemptRequestBody](#schemasetworkflowinattemptrequestbody)|true|none|
|» attemptNumber|body|[AttemptNumber](#schemaattemptnumber)|true|none|
|» jobId|body|[JobId](#schemajobid)|true|none|
|» processingTaskQueue|body|string|false|none|
|» workflowId|body|[WorkflowId](#schemaworkflowid)|true|none|

> Example responses

> 200 Response

```json
{
  "succeeded": true
}
```

<h3 id="for-worker-to-register-the-workflow-id-in-attempt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[InternalOperationResult](#schemainternaloperationresult)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airbyte-configuration-api-state">state</h1>

Interactions with state related resources.

## Create or update the state for a connection.

<a id="opIdcreateOrUpdateState"></a>

> Code samples

```bash
curl https://example.com/v1/state/create_or_update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "connectionState": {
      "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "globalState": {
        "shared_state": {},
        "streamStates": [
          {
            "streamDescriptor": {
              "name": "string",
              "namespace": "string"
            },
            "streamState": {}
          }
        ]
      },
      "state": {},
      "stateType": "global",
      "streamState": [
        {
          "streamDescriptor": {
            "name": "string",
            "namespace": "string"
          },
          "streamState": {}
        }
      ]
    }
  }'
```

`POST /v1/state/create_or_update`

> Body parameter

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "connectionState": {
    "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "globalState": {
      "shared_state": {},
      "streamStates": [
        {
          "streamDescriptor": {
            "name": "string",
            "namespace": "string"
          },
          "streamState": {}
        }
      ]
    },
    "state": {},
    "stateType": "global",
    "streamState": [
      {
        "streamDescriptor": {
          "name": "string",
          "namespace": "string"
        },
        "streamState": {}
      }
    ]
  }
}
```

<h3 id="create-or-update-the-state-for-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectionStateCreateOrUpdate](#schemaconnectionstatecreateorupdate)|true|none|
|» connectionId|body|[ConnectionId](#schemaconnectionid)|true|none|
|» connectionState|body|[ConnectionState](#schemaconnectionstate)|true|Contains the state for a connection. The stateType field identifies what type of state it is. Only the field corresponding to that type will be set, the rest will be null. If stateType=not_set, then none of the fields will be set.|

> Example responses

> 200 Response

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "globalState": {
    "shared_state": {},
    "streamStates": [
      {
        "streamDescriptor": {
          "name": "string",
          "namespace": "string"
        },
        "streamState": {}
      }
    ]
  },
  "state": {},
  "stateType": "global",
  "streamState": [
    {
      "streamDescriptor": {
        "name": "string",
        "namespace": "string"
      },
      "streamState": {}
    }
  ]
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="create-or-update-the-state-for-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ConnectionState](#schemaconnectionstate)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch the current state for a connection.

<a id="opIdgetState"></a>

> Code samples

```bash
curl https://example.com/v1/state/get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/state/get`

> Body parameter

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="fetch-the-current-state-for-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectionIdRequestBody](#schemaconnectionidrequestbody)|true|none|
|» connectionId|body|[ConnectionId](#schemaconnectionid)|true|none|

> Example responses

> 200 Response

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "globalState": {
    "shared_state": {},
    "streamStates": [
      {
        "streamDescriptor": {
          "name": "string",
          "namespace": "string"
        },
        "streamState": {}
      }
    ]
  },
  "state": {},
  "stateType": "global",
  "streamState": [
    {
      "streamDescriptor": {
        "name": "string",
        "namespace": "string"
      },
      "streamState": {}
    }
  ]
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="fetch-the-current-state-for-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ConnectionState](#schemaconnectionstate)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airbyte-configuration-api-jobs">jobs</h1>

## Cancels a job

<a id="opIdcancelJob"></a>

> Code samples

```bash
curl https://example.com/v1/jobs/cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": 0
  }'
```

`POST /v1/jobs/cancel`

> Body parameter

```json
{
  "id": 0
}
```

<h3 id="cancels-a-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[JobIdRequestBody](#schemajobidrequestbody)|true|none|
|» id|body|[JobId](#schemajobid)|true|none|

> Example responses

> 200 Response

```json
{
  "attempts": [
    {
      "attempt": {
        "bytesSynced": 0,
        "createdAt": 0,
        "endedAt": 0,
        "failureSummary": {
          "failures": [
            {
              "externalMessage": "string",
              "failureOrigin": "source",
              "failureType": "config_error",
              "internalMessage": "string",
              "retryable": true,
              "stacktrace": "string",
              "timestamp": 0
            }
          ],
          "partialSuccess": true
        },
        "id": 0,
        "recordsSynced": 0,
        "status": "running",
        "streamStats": [
          {
            "stats": {
              "bytesEmitted": 0,
              "estimatedBytes": 0,
              "estimatedRecords": 0,
              "recordsCommitted": 0,
              "recordsEmitted": 0,
              "stateMessagesEmitted": 0
            },
            "streamName": "string",
            "streamNamespace": "string"
          }
        ],
        "totalStats": {
          "bytesEmitted": 0,
          "estimatedBytes": 0,
          "estimatedRecords": 0,
          "recordsCommitted": 0,
          "recordsEmitted": 0,
          "stateMessagesEmitted": 0
        },
        "updatedAt": 0
      },
      "logs": {
        "logLines": [
          "string"
        ]
      }
    }
  ],
  "job": {
    "configId": "string",
    "configType": "check_connection_source",
    "createdAt": 0,
    "id": 0,
    "resetConfig": {
      "streamsToReset": [
        {
          "name": "string",
          "namespace": "string"
        }
      ]
    },
    "startedAt": 0,
    "status": "pending",
    "updatedAt": 0
  }
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="cancels-a-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[JobInfoRead](#schemajobinforead)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get information about a job

<a id="opIdgetJobInfo"></a>

> Code samples

```bash
curl https://example.com/v1/jobs/get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": 0
  }'
```

`POST /v1/jobs/get`

> Body parameter

```json
{
  "id": 0
}
```

<h3 id="get-information-about-a-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[JobIdRequestBody](#schemajobidrequestbody)|true|none|
|» id|body|[JobId](#schemajobid)|true|none|

> Example responses

> 200 Response

```json
{
  "attempts": [
    {
      "attempt": {
        "bytesSynced": 0,
        "createdAt": 0,
        "endedAt": 0,
        "failureSummary": {
          "failures": [
            {
              "externalMessage": "string",
              "failureOrigin": "source",
              "failureType": "config_error",
              "internalMessage": "string",
              "retryable": true,
              "stacktrace": "string",
              "timestamp": 0
            }
          ],
          "partialSuccess": true
        },
        "id": 0,
        "recordsSynced": 0,
        "status": "running",
        "streamStats": [
          {
            "stats": {
              "bytesEmitted": 0,
              "estimatedBytes": 0,
              "estimatedRecords": 0,
              "recordsCommitted": 0,
              "recordsEmitted": 0,
              "stateMessagesEmitted": 0
            },
            "streamName": "string",
            "streamNamespace": "string"
          }
        ],
        "totalStats": {
          "bytesEmitted": 0,
          "estimatedBytes": 0,
          "estimatedRecords": 0,
          "recordsCommitted": 0,
          "recordsEmitted": 0,
          "stateMessagesEmitted": 0
        },
        "updatedAt": 0
      },
      "logs": {
        "logLines": [
          "string"
        ]
      }
    }
  ],
  "job": {
    "configId": "string",
    "configType": "check_connection_source",
    "createdAt": 0,
    "id": 0,
    "resetConfig": {
      "streamsToReset": [
        {
          "name": "string",
          "namespace": "string"
        }
      ]
    },
    "startedAt": 0,
    "status": "pending",
    "updatedAt": 0
  }
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="get-information-about-a-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[JobInfoRead](#schemajobinforead)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets all information needed to debug this job

<a id="opIdgetJobDebugInfo"></a>

> Code samples

```bash
curl https://example.com/v1/jobs/get_debug_info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": 0
  }'
```

`POST /v1/jobs/get_debug_info`

> Body parameter

```json
{
  "id": 0
}
```

<h3 id="gets-all-information-needed-to-debug-this-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[JobIdRequestBody](#schemajobidrequestbody)|true|none|
|» id|body|[JobId](#schemajobid)|true|none|

> Example responses

> 200 Response

```json
{
  "attempts": [
    {
      "attempt": {
        "bytesSynced": 0,
        "createdAt": 0,
        "endedAt": 0,
        "failureSummary": {
          "failures": [
            {
              "externalMessage": "string",
              "failureOrigin": "source",
              "failureType": "config_error",
              "internalMessage": "string",
              "retryable": true,
              "stacktrace": "string",
              "timestamp": 0
            }
          ],
          "partialSuccess": true
        },
        "id": 0,
        "recordsSynced": 0,
        "status": "running",
        "streamStats": [
          {
            "stats": {
              "bytesEmitted": 0,
              "estimatedBytes": 0,
              "estimatedRecords": 0,
              "recordsCommitted": 0,
              "recordsEmitted": 0,
              "stateMessagesEmitted": 0
            },
            "streamName": "string",
            "streamNamespace": "string"
          }
        ],
        "totalStats": {
          "bytesEmitted": 0,
          "estimatedBytes": 0,
          "estimatedRecords": 0,
          "recordsCommitted": 0,
          "recordsEmitted": 0,
          "stateMessagesEmitted": 0
        },
        "updatedAt": 0
      },
      "logs": {
        "logLines": [
          "string"
        ]
      }
    }
  ],
  "job": {
    "airbyteVersion": "string",
    "configId": "string",
    "configType": "check_connection_source",
    "destinationDefinition": {
      "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "dockerImageTag": "string",
      "dockerRepository": "string",
      "documentationUrl": "http://example.com",
      "icon": "string",
      "name": "string",
      "normalizationConfig": {
        "normalizationIntegrationType": "string",
        "normalizationRepository": "string",
        "normalizationTag": "string",
        "supported": false
      },
      "protocolVersion": "string",
      "releaseDate": "1970-01-01",
      "releaseStage": "alpha",
      "resourceRequirements": {
        "default": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        },
        "jobSpecific": [
          {
            "jobType": "get_spec",
            "resourceRequirements": {
              "cpu_limit": "string",
              "cpu_request": "string",
              "memory_limit": "string",
              "memory_request": "string"
            }
          }
        ]
      },
      "supportsDbt": true
    },
    "id": 0,
    "sourceDefinition": {
      "dockerImageTag": "string",
      "dockerRepository": "string",
      "documentationUrl": "http://example.com",
      "icon": "string",
      "name": "string",
      "protocolVersion": "string",
      "releaseDate": "1970-01-01",
      "releaseStage": "alpha",
      "resourceRequirements": {
        "default": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        },
        "jobSpecific": [
          {
            "jobType": "get_spec",
            "resourceRequirements": {
              "cpu_limit": "string",
              "cpu_request": "string",
              "memory_limit": "string",
              "memory_request": "string"
            }
          }
        ]
      },
      "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sourceType": "api"
    },
    "status": "pending"
  },
  "workflowState": {
    "running": true
  }
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="gets-all-information-needed-to-debug-this-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[JobDebugInfoRead](#schemajobdebuginforead)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## getLastReplicationJob

<a id="opIdgetLastReplicationJob"></a>

> Code samples

```bash
curl https://example.com/v1/jobs/get_last_replication_job \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/jobs/get_last_replication_job`

> Body parameter

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="getlastreplicationjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectionIdRequestBody](#schemaconnectionidrequestbody)|true|none|
|» connectionId|body|[ConnectionId](#schemaconnectionid)|true|none|

> Example responses

> 200 Response

```json
{
  "job": {
    "configId": "string",
    "configType": "check_connection_source",
    "createdAt": 0,
    "id": 0,
    "resetConfig": {
      "streamsToReset": [
        {
          "name": "string",
          "namespace": "string"
        }
      ]
    },
    "startedAt": 0,
    "status": "pending",
    "updatedAt": 0
  }
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="getlastreplicationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[JobOptionalRead](#schemajoboptionalread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get information about a job excluding attempt info and logs

<a id="opIdgetJobInfoLight"></a>

> Code samples

```bash
curl https://example.com/v1/jobs/get_light \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": 0
  }'
```

`POST /v1/jobs/get_light`

> Body parameter

```json
{
  "id": 0
}
```

<h3 id="get-information-about-a-job-excluding-attempt-info-and-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[JobIdRequestBody](#schemajobidrequestbody)|true|none|
|» id|body|[JobId](#schemajobid)|true|none|

> Example responses

> 200 Response

```json
{
  "job": {
    "configId": "string",
    "configType": "check_connection_source",
    "createdAt": 0,
    "id": 0,
    "resetConfig": {
      "streamsToReset": [
        {
          "name": "string",
          "namespace": "string"
        }
      ]
    },
    "startedAt": 0,
    "status": "pending",
    "updatedAt": 0
  }
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="get-information-about-a-job-excluding-attempt-info-and-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[JobInfoLightRead](#schemajobinfolightread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get normalization status to determine if we can bypass normalization phase

<a id="opIdgetAttemptNormalizationStatusesForJob"></a>

> Code samples

```bash
curl https://example.com/v1/jobs/get_normalization_status \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": 0
  }'
```

`POST /v1/jobs/get_normalization_status`

> Body parameter

```json
{
  "id": 0
}
```

<h3 id="get-normalization-status-to-determine-if-we-can-bypass-normalization-phase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[JobIdRequestBody](#schemajobidrequestbody)|false|none|
|» id|body|[JobId](#schemajobid)|true|none|

> Example responses

> 200 Response

```json
{
  "attemptNormalizationStatuses": [
    {
      "attemptNumber": 0,
      "hasNormalizationFailed": true,
      "hasRecordsCommitted": true,
      "recordsCommitted": 0
    }
  ]
}
```

<h3 id="get-normalization-status-to-determine-if-we-can-bypass-normalization-phase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[AttemptNormalizationStatusReadList](#schemaattemptnormalizationstatusreadlist)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.

<a id="opIdlistJobsFor"></a>

> Code samples

```bash
curl https://example.com/v1/jobs/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "configId": "string",
    "configTypes": [
      "check_connection_source"
    ],
    "includingJobId": 0,
    "pagination": {
      "pageSize": 0,
      "rowOffset": 0
    }
  }'
```

`POST /v1/jobs/list`

> Body parameter

```json
{
  "configId": "string",
  "configTypes": [
    "check_connection_source"
  ],
  "includingJobId": 0,
  "pagination": {
    "pageSize": 0,
    "rowOffset": 0
  }
}
```

<h3 id="returns-recent-jobs-for-a-connection-jobs-are-returned-in-descending-order-by-createdat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[JobListRequestBody](#schemajoblistrequestbody)|true|none|
|» configId|body|string|true|none|
|» configTypes|body|[[JobConfigType](#schemajobconfigtype)]|true|none|
|» includingJobId|body|[JobId](#schemajobid)|false|If the job with this ID exists for the specified connection, returns the number of pages of jobs necessary to include this job. Returns an empty list if this job is specified and cannot be found in this connection.|
|» pagination|body|[Pagination](#schemapagination)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» configTypes|check_connection_source|
|» configTypes|check_connection_destination|
|» configTypes|discover_schema|
|» configTypes|get_spec|
|» configTypes|sync|
|» configTypes|reset_connection|

> Example responses

> 200 Response

```json
{
  "jobs": [
    {
      "attempts": [
        {
          "bytesSynced": 0,
          "createdAt": 0,
          "endedAt": 0,
          "failureSummary": {
            "failures": [
              {
                "externalMessage": "string",
                "failureOrigin": "source",
                "failureType": "config_error",
                "internalMessage": "string",
                "retryable": true,
                "stacktrace": "string",
                "timestamp": 0
              }
            ],
            "partialSuccess": true
          },
          "id": 0,
          "recordsSynced": 0,
          "status": "running",
          "streamStats": [
            {
              "stats": {
                "bytesEmitted": 0,
                "estimatedBytes": 0,
                "estimatedRecords": 0,
                "recordsCommitted": 0,
                "recordsEmitted": 0,
                "stateMessagesEmitted": 0
              },
              "streamName": "string",
              "streamNamespace": "string"
            }
          ],
          "totalStats": {
            "bytesEmitted": 0,
            "estimatedBytes": 0,
            "estimatedRecords": 0,
            "recordsCommitted": 0,
            "recordsEmitted": 0,
            "stateMessagesEmitted": 0
          },
          "updatedAt": 0
        }
      ],
      "job": {
        "configId": "string",
        "configType": "check_connection_source",
        "createdAt": 0,
        "id": 0,
        "resetConfig": {
          "streamsToReset": [
            {
              "name": "string",
              "namespace": "string"
            }
          ]
        },
        "startedAt": 0,
        "status": "pending",
        "updatedAt": 0
      }
    }
  ],
  "totalJobCount": 0
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="returns-recent-jobs-for-a-connection-jobs-are-returned-in-descending-order-by-createdat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[JobReadList](#schemajobreadlist)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airbyte-configuration-api-logs">logs</h1>

## Get logs

<a id="opIdgetLogs"></a>

> Code samples

```bash
curl https://example.com/v1/logs/get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "logType": "server"
  }'
```

`POST /v1/logs/get`

> Body parameter

```json
{
  "logType": "server"
}
```

<h3 id="get-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LogsRequestBody](#schemalogsrequestbody)|true|none|
|» logType|body|[LogType](#schemalogtype)|true|type/source of logs produced|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» logType|server|
|» logType|scheduler|

> Example responses

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="get-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the log file|Inline|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airbyte-configuration-api-notifications">notifications</h1>

## Try sending a notifications

<a id="opIdtryNotificationConfig"></a>

> Code samples

```bash
curl https://example.com/v1/notifications/try \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "customerioConfiguration": {},
    "notificationType": "slack",
    "sendOnFailure": true,
    "sendOnSuccess": false,
    "slackConfiguration": {
      "webhook": "string"
    }
  }'
```

`POST /v1/notifications/try`

> Body parameter

```json
{
  "customerioConfiguration": {},
  "notificationType": "slack",
  "sendOnFailure": true,
  "sendOnSuccess": false,
  "slackConfiguration": {
    "webhook": "string"
  }
}
```

<h3 id="try-sending-a-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Notification](#schemanotification)|true|none|
|» customerioConfiguration|body|[CustomerioNotificationConfiguration](#schemacustomerionotificationconfiguration)|false|none|
|» notificationType|body|[NotificationType](#schemanotificationtype)|true|none|
|» sendOnFailure|body|boolean|true|none|
|» sendOnSuccess|body|boolean|true|none|
|» slackConfiguration|body|[SlackNotificationConfiguration](#schemaslacknotificationconfiguration)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» notificationType|slack|
|» notificationType|customerio|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "status": "succeeded"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="try-sending-a-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[NotificationRead](#schemanotificationread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airbyte-configuration-api-openapi">openapi</h1>

## Returns the openapi specification

<a id="opIdgetOpenApiSpec"></a>

> Code samples

```bash
curl https://example.com/v1/openapi
```

`GET /v1/openapi`

<h3 id="returns-the-openapi-specification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the openapi specification file|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airbyte-configuration-api-operation">operation</h1>

## Check if an operation to be created is valid

<a id="opIdcheckOperation"></a>

> Code samples

```bash
curl https://example.com/v1/operations/check \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "dbt": {
      "dbtArguments": "string",
      "dockerImage": "string",
      "gitRepoBranch": "string",
      "gitRepoUrl": "string"
    },
    "normalization": {
      "option": "basic"
    },
    "operatorType": "normalization",
    "webhook": {
      "dbtCloud": {
        "accountId": 0,
        "jobId": 0
      },
      "executionBody": "string",
      "executionUrl": "string",
      "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "webhookType": "dbtCloud"
    }
  }'
```

`POST /v1/operations/check`

> Body parameter

```json
{
  "dbt": {
    "dbtArguments": "string",
    "dockerImage": "string",
    "gitRepoBranch": "string",
    "gitRepoUrl": "string"
  },
  "normalization": {
    "option": "basic"
  },
  "operatorType": "normalization",
  "webhook": {
    "dbtCloud": {
      "accountId": 0,
      "jobId": 0
    },
    "executionBody": "string",
    "executionUrl": "string",
    "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "webhookType": "dbtCloud"
  }
}
```

<h3 id="check-if-an-operation-to-be-created-is-valid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OperatorConfiguration](#schemaoperatorconfiguration)|true|none|
|» dbt|body|[OperatorDbt](#schemaoperatordbt)|false|none|
|» normalization|body|[OperatorNormalization](#schemaoperatornormalization)|false|none|
|» operatorType|body|[OperatorType](#schemaoperatortype)|true|none|
|» webhook|body|[OperatorWebhook](#schemaoperatorwebhook)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» operatorType|normalization|
|» operatorType|dbt|
|» operatorType|webhook|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "status": "succeeded"
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="check-if-an-operation-to-be-created-is-valid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CheckOperationRead](#schemacheckoperationread)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Create an operation to be applied as part of a connection pipeline

<a id="opIdcreateOperation"></a>

> Code samples

```bash
curl https://example.com/v1/operations/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "operatorConfiguration": {
      "dbt": {
        "dbtArguments": "string",
        "dockerImage": "string",
        "gitRepoBranch": "string",
        "gitRepoUrl": "string"
      },
      "normalization": {
        "option": "basic"
      },
      "operatorType": "normalization",
      "webhook": {
        "dbtCloud": {
          "accountId": 0,
          "jobId": 0
        },
        "executionBody": "string",
        "executionUrl": "string",
        "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "webhookType": "dbtCloud"
      }
    },
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/operations/create`

> Body parameter

```json
{
  "name": "string",
  "operatorConfiguration": {
    "dbt": {
      "dbtArguments": "string",
      "dockerImage": "string",
      "gitRepoBranch": "string",
      "gitRepoUrl": "string"
    },
    "normalization": {
      "option": "basic"
    },
    "operatorType": "normalization",
    "webhook": {
      "dbtCloud": {
        "accountId": 0,
        "jobId": 0
      },
      "executionBody": "string",
      "executionUrl": "string",
      "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "webhookType": "dbtCloud"
    }
  },
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="create-an-operation-to-be-applied-as-part-of-a-connection-pipeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OperationCreate](#schemaoperationcreate)|true|none|
|» name|body|string|true|none|
|» operatorConfiguration|body|[OperatorConfiguration](#schemaoperatorconfiguration)|true|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "operatorConfiguration": {
    "dbt": {
      "dbtArguments": "string",
      "dockerImage": "string",
      "gitRepoBranch": "string",
      "gitRepoUrl": "string"
    },
    "normalization": {
      "option": "basic"
    },
    "operatorType": "normalization",
    "webhook": {
      "dbtCloud": {
        "accountId": 0,
        "jobId": 0
      },
      "executionBody": "string",
      "executionUrl": "string",
      "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "webhookType": "dbtCloud"
    }
  },
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="create-an-operation-to-be-applied-as-part-of-a-connection-pipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationRead](#schemaoperationread)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an operation

<a id="opIddeleteOperation"></a>

> Code samples

```bash
curl https://example.com/v1/operations/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/operations/delete`

> Body parameter

```json
{
  "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete-an-operation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OperationIdRequestBody](#schemaoperationidrequestbody)|true|none|
|» operationId|body|[OperationId](#schemaoperationid)|true|none|

> Example responses

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="delete-an-operation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The resource was deleted successfully.|None|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns an operation

<a id="opIdgetOperation"></a>

> Code samples

```bash
curl https://example.com/v1/operations/get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/operations/get`

> Body parameter

```json
{
  "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="returns-an-operation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OperationIdRequestBody](#schemaoperationidrequestbody)|true|none|
|» operationId|body|[OperationId](#schemaoperationid)|true|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "operatorConfiguration": {
    "dbt": {
      "dbtArguments": "string",
      "dockerImage": "string",
      "gitRepoBranch": "string",
      "gitRepoUrl": "string"
    },
    "normalization": {
      "option": "basic"
    },
    "operatorType": "normalization",
    "webhook": {
      "dbtCloud": {
        "accountId": 0,
        "jobId": 0
      },
      "executionBody": "string",
      "executionUrl": "string",
      "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "webhookType": "dbtCloud"
    }
  },
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="returns-an-operation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationRead](#schemaoperationread)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns all operations for a connection.

<a id="opIdlistOperationsForConnection"></a>

> Code samples

```bash
curl https://example.com/v1/operations/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/operations/list`

List operations for connection.

> Body parameter

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="returns-all-operations-for-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectionIdRequestBody](#schemaconnectionidrequestbody)|true|none|
|» connectionId|body|[ConnectionId](#schemaconnectionid)|true|none|

> Example responses

> 200 Response

```json
{
  "operations": [
    {
      "name": "string",
      "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "operatorConfiguration": {
        "dbt": {
          "dbtArguments": "string",
          "dockerImage": "string",
          "gitRepoBranch": "string",
          "gitRepoUrl": "string"
        },
        "normalization": {
          "option": "basic"
        },
        "operatorType": "normalization",
        "webhook": {
          "dbtCloud": {
            "accountId": 0,
            "jobId": 0
          },
          "executionBody": "string",
          "executionUrl": "string",
          "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "webhookType": "dbtCloud"
        }
      },
      "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

> 404 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="returns-all-operations-for-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationReadList](#schemaoperationreadlist)|
|404|Not Found|Object with given id was not found.|[NotFoundKnownExceptionInfo](#schemanotfoundknownexceptioninfo)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an operation

<a id="opIdupdateOperation"></a>

> Code samples

```bash
curl https://example.com/v1/operations/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "operatorConfiguration": {
      "dbt": {
        "dbtArguments": "string",
        "dockerImage": "string",
        "gitRepoBranch": "string",
        "gitRepoUrl": "string"
      },
      "normalization": {
        "option": "basic"
      },
      "operatorType": "normalization",
      "webhook": {
        "dbtCloud": {
          "accountId": 0,
          "jobId": 0
        },
        "executionBody": "string",
        "executionUrl": "string",
        "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "webhookType": "dbtCloud"
      }
    }
  }'
```

`POST /v1/operations/update`

> Body parameter

```json
{
  "name": "string",
  "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "operatorConfiguration": {
    "dbt": {
      "dbtArguments": "string",
      "dockerImage": "string",
      "gitRepoBranch": "string",
      "gitRepoUrl": "string"
    },
    "normalization": {
      "option": "basic"
    },
    "operatorType": "normalization",
    "webhook": {
      "dbtCloud": {
        "accountId": 0,
        "jobId": 0
      },
      "executionBody": "string",
      "executionUrl": "string",
      "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "webhookType": "dbtCloud"
    }
  }
}
```

<h3 id="update-an-operation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OperationUpdate](#schemaoperationupdate)|true|none|
|» name|body|string|true|none|
|» operationId|body|[OperationId](#schemaoperationid)|true|none|
|» operatorConfiguration|body|[OperatorConfiguration](#schemaoperatorconfiguration)|true|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "operatorConfiguration": {
    "dbt": {
      "dbtArguments": "string",
      "dockerImage": "string",
      "gitRepoBranch": "string",
      "gitRepoUrl": "string"
    },
    "normalization": {
      "option": "basic"
    },
    "operatorType": "normalization",
    "webhook": {
      "dbtCloud": {
        "accountId": 0,
        "jobId": 0
      },
      "executionBody": "string",
      "executionUrl": "string",
      "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "webhookType": "dbtCloud"
    }
  },
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="update-an-operation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationRead](#schemaoperationread)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airbyte-configuration-api-scheduler">scheduler</h1>

## Run check connection for a given destination configuration

<a id="opIdexecuteDestinationCheckConnection"></a>

> Code samples

```bash
curl https://example.com/v1/scheduler/destinations/check_connection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionConfiguration": {
      "user": "charles"
    },
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/scheduler/destinations/check_connection`

> Body parameter

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="run-check-connection-for-a-given-destination-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DestinationCoreConfig](#schemadestinationcoreconfig)|true|none|
|» connectionConfiguration|body|[DestinationConfiguration](#schemadestinationconfiguration)|true|The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.|
|» destinationDefinitionId|body|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|
|» destinationId|body|[DestinationId](#schemadestinationid)|false|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "jobInfo": {
    "configId": "string",
    "configType": "check_connection_source",
    "connectorConfigurationUpdated": false,
    "createdAt": 0,
    "endedAt": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "logs": {
      "logLines": [
        "string"
      ]
    },
    "succeeded": true
  },
  "message": "string",
  "status": "succeeded"
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="run-check-connection-for-a-given-destination-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CheckConnectionRead](#schemacheckconnectionread)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Run check connection for a given source configuration

<a id="opIdexecuteSourceCheckConnection"></a>

> Code samples

```bash
curl https://example.com/v1/scheduler/sources/check_connection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionConfiguration": {
      "user": "charles"
    },
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/scheduler/sources/check_connection`

> Body parameter

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="run-check-connection-for-a-given-source-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SourceCoreConfig](#schemasourcecoreconfig)|true|none|
|» connectionConfiguration|body|[SourceConfiguration](#schemasourceconfiguration)|true|The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.|
|» sourceDefinitionId|body|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|
|» sourceId|body|[SourceId](#schemasourceid)|false|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "jobInfo": {
    "configId": "string",
    "configType": "check_connection_source",
    "connectorConfigurationUpdated": false,
    "createdAt": 0,
    "endedAt": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "logs": {
      "logLines": [
        "string"
      ]
    },
    "succeeded": true
  },
  "message": "string",
  "status": "succeeded"
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="run-check-connection-for-a-given-source-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CheckConnectionRead](#schemacheckconnectionread)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Run discover schema for a given source a source configuration

<a id="opIdexecuteSourceDiscoverSchema"></a>

> Code samples

```bash
curl https://example.com/v1/scheduler/sources/discover_schema \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionConfiguration": {
      "user": "charles"
    },
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/scheduler/sources/discover_schema`

> Body parameter

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="run-discover-schema-for-a-given-source-a-source-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SourceCoreConfig](#schemasourcecoreconfig)|true|none|
|» connectionConfiguration|body|[SourceConfiguration](#schemasourceconfiguration)|true|The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.|
|» sourceDefinitionId|body|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|
|» sourceId|body|[SourceId](#schemasourceid)|false|none|
|» workspaceId|body|[WorkspaceId](#schemaworkspaceid)|true|none|

> Example responses

> 200 Response

```json
{
  "breakingChange": true,
  "catalog": {
    "streams": [
      {
        "config": {
          "aliasName": "string",
          "cursorField": [
            "string"
          ],
          "destinationSyncMode": "append",
          "fieldSelectionEnabled": true,
          "primaryKey": [
            [
              "string"
            ]
          ],
          "selected": true,
          "selectedFields": [
            {
              "fieldPath": [
                "string"
              ]
            }
          ],
          "suggested": true,
          "syncMode": "full_refresh"
        },
        "stream": {
          "defaultCursorField": [
            "string"
          ],
          "jsonSchema": {},
          "name": "string",
          "namespace": "string",
          "sourceDefinedCursor": true,
          "sourceDefinedPrimaryKey": [
            [
              "string"
            ]
          ],
          "supportedSyncModes": [
            "full_refresh"
          ]
        }
      }
    ]
  },
  "catalogDiff": {
    "transforms": [
      {
        "streamDescriptor": {
          "name": "string",
          "namespace": "string"
        },
        "transformType": "add_stream",
        "updateStream": [
          {
            "addField": {
              "schema": {}
            },
            "breaking": true,
            "fieldName": [
              "string"
            ],
            "removeField": {
              "schema": {}
            },
            "transformType": "add_field",
            "updateFieldSchema": {
              "newSchema": {},
              "oldSchema": {}
            }
          }
        ]
      }
    ]
  },
  "catalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "connectionStatus": "active",
  "jobInfo": {
    "configId": "string",
    "configType": "check_connection_source",
    "connectorConfigurationUpdated": false,
    "createdAt": 0,
    "endedAt": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "logs": {
      "logLines": [
        "string"
      ]
    },
    "succeeded": true
  }
}
```

> 422 Response

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

<h3 id="run-discover-schema-for-a-given-source-a-source-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SourceDiscoverSchemaRead](#schemasourcediscoverschemaread)|
|422|Unprocessable Entity|Input failed validation|[InvalidInputExceptionInfo](#schemainvalidinputexceptioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ActorCatalogWithUpdatedAt">ActorCatalogWithUpdatedAt</h2>
<!-- backwards compatibility -->
<a id="schemaactorcatalogwithupdatedat"></a>
<a id="schema_ActorCatalogWithUpdatedAt"></a>
<a id="tocSactorcatalogwithupdatedat"></a>
<a id="tocsactorcatalogwithupdatedat"></a>

```json
{
  "catalog": {},
  "updatedAt": 0
}
```

A source actor catalog with the timestamp it was mostly recently updated

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalog|object|false|none|none|
|updatedAt|integer(int64)|false|none|none|

<h2 id="tocS_ActorDefinitionResourceRequirements">ActorDefinitionResourceRequirements</h2>
<!-- backwards compatibility -->
<a id="schemaactordefinitionresourcerequirements"></a>
<a id="schema_ActorDefinitionResourceRequirements"></a>
<a id="tocSactordefinitionresourcerequirements"></a>
<a id="tocsactordefinitionresourcerequirements"></a>

```json
{
  "default": {
    "cpu_limit": "string",
    "cpu_request": "string",
    "memory_limit": "string",
    "memory_request": "string"
  },
  "jobSpecific": [
    {
      "jobType": "get_spec",
      "resourceRequirements": {
        "cpu_limit": "string",
        "cpu_request": "string",
        "memory_limit": "string",
        "memory_request": "string"
      }
    }
  ]
}
```

actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default|[ResourceRequirements](#schemaresourcerequirements)|false|none|optional resource requirements to run workers (blank for unbounded allocations)|
|jobSpecific|[[JobTypeResourceLimit](#schemajobtyperesourcelimit)]|false|none|none|

<h2 id="tocS_AdvancedAuth">AdvancedAuth</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedauth"></a>
<a id="schema_AdvancedAuth"></a>
<a id="tocSadvancedauth"></a>
<a id="tocsadvancedauth"></a>

```json
{
  "authFlowType": "oauth2.0",
  "oauthConfigSpecification": {
    "completeOAuthOutputSpecification": null,
    "completeOAuthServerInputSpecification": null,
    "completeOAuthServerOutputSpecification": null,
    "oauthUserInputFromConnectorConfigSpecification": null
  },
  "predicateKey": [
    "string"
  ],
  "predicateValue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authFlowType|string|false|none|none|
|oauthConfigSpecification|[OAuthConfigSpecification](#schemaoauthconfigspecification)|false|none|none|
|predicateKey|[string]|false|none|Json Path to a field in the connectorSpecification that should exist for the advanced auth to be applicable.|
|predicateValue|string|false|none|Value of the predicate_key fields for the advanced auth to be applicable.|

#### Enumerated Values

|Property|Value|
|---|---|
|authFlowType|oauth2.0|
|authFlowType|oauth1.0|

<h2 id="tocS_AirbyteArchive">AirbyteArchive</h2>
<!-- backwards compatibility -->
<a id="schemaairbytearchive"></a>
<a id="schema_AirbyteArchive"></a>
<a id="tocSairbytearchive"></a>
<a id="tocsairbytearchive"></a>

```json
"string"
```

Tarball Archive (.tar.gz) of Airbyte Configuration and Database

<h2 id="tocS_AirbyteCatalog">AirbyteCatalog</h2>
<!-- backwards compatibility -->
<a id="schemaairbytecatalog"></a>
<a id="schema_AirbyteCatalog"></a>
<a id="tocSairbytecatalog"></a>
<a id="tocsairbytecatalog"></a>

```json
{
  "streams": [
    {
      "config": {
        "aliasName": "string",
        "cursorField": [
          "string"
        ],
        "destinationSyncMode": "append",
        "fieldSelectionEnabled": true,
        "primaryKey": [
          [
            "string"
          ]
        ],
        "selected": true,
        "selectedFields": [
          {
            "fieldPath": [
              "string"
            ]
          }
        ],
        "suggested": true,
        "syncMode": "full_refresh"
      },
      "stream": {
        "defaultCursorField": [
          "string"
        ],
        "jsonSchema": {},
        "name": "string",
        "namespace": "string",
        "sourceDefinedCursor": true,
        "sourceDefinedPrimaryKey": [
          [
            "string"
          ]
        ],
        "supportedSyncModes": [
          "full_refresh"
        ]
      }
    }
  ]
}
```

describes the available schema (catalog).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|streams|[[AirbyteStreamAndConfiguration](#schemaairbytestreamandconfiguration)]|true|none|none|

<h2 id="tocS_AirbyteStream">AirbyteStream</h2>
<!-- backwards compatibility -->
<a id="schemaairbytestream"></a>
<a id="schema_AirbyteStream"></a>
<a id="tocSairbytestream"></a>
<a id="tocsairbytestream"></a>

```json
{
  "defaultCursorField": [
    "string"
  ],
  "jsonSchema": {},
  "name": "string",
  "namespace": "string",
  "sourceDefinedCursor": true,
  "sourceDefinedPrimaryKey": [
    [
      "string"
    ]
  ],
  "supportedSyncModes": [
    "full_refresh"
  ]
}
```

the immutable schema defined by the source

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultCursorField|[string]|false|none|Path to the field that will be used to determine if a record is new or modified since the last sync. If not provided by the source, the end user will have to specify the comparable themselves.|
|jsonSchema|[StreamJsonSchema](#schemastreamjsonschema)|false|none|Stream schema using Json Schema specs.|
|name|string|true|none|Stream's name.|
|namespace|string|false|none|Optional Source-defined namespace. Airbyte streams from the same sources should have the same namespace. Currently only used by JDBC destinations to determine what schema to write to.|
|sourceDefinedCursor|boolean|false|none|If the source defines the cursor field, then any other cursor field inputs will be ignored. If it does not, either the user_provided one is used, or the default one is used as a backup.|
|sourceDefinedPrimaryKey|[[string]]|false|none|If the source defines the primary key, paths to the fields that will be used as a primary key. If not provided by the source, the end user will have to specify the primary key themselves.|
|supportedSyncModes|[[SyncMode](#schemasyncmode)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|supportedSyncModes|full_refresh|
|supportedSyncModes|incremental|

<h2 id="tocS_AirbyteStreamAndConfiguration">AirbyteStreamAndConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaairbytestreamandconfiguration"></a>
<a id="schema_AirbyteStreamAndConfiguration"></a>
<a id="tocSairbytestreamandconfiguration"></a>
<a id="tocsairbytestreamandconfiguration"></a>

```json
{
  "config": {
    "aliasName": "string",
    "cursorField": [
      "string"
    ],
    "destinationSyncMode": "append",
    "fieldSelectionEnabled": true,
    "primaryKey": [
      [
        "string"
      ]
    ],
    "selected": true,
    "selectedFields": [
      {
        "fieldPath": [
          "string"
        ]
      }
    ],
    "suggested": true,
    "syncMode": "full_refresh"
  },
  "stream": {
    "defaultCursorField": [
      "string"
    ],
    "jsonSchema": {},
    "name": "string",
    "namespace": "string",
    "sourceDefinedCursor": true,
    "sourceDefinedPrimaryKey": [
      [
        "string"
      ]
    ],
    "supportedSyncModes": [
      "full_refresh"
    ]
  }
}
```

each stream is split in two parts; the immutable schema from source and mutable configuration for destination

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[AirbyteStreamConfiguration](#schemaairbytestreamconfiguration)|false|none|the mutable part of the stream to configure the destination|
|stream|[AirbyteStream](#schemaairbytestream)|false|none|the immutable schema defined by the source|

<h2 id="tocS_AirbyteStreamConfiguration">AirbyteStreamConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaairbytestreamconfiguration"></a>
<a id="schema_AirbyteStreamConfiguration"></a>
<a id="tocSairbytestreamconfiguration"></a>
<a id="tocsairbytestreamconfiguration"></a>

```json
{
  "aliasName": "string",
  "cursorField": [
    "string"
  ],
  "destinationSyncMode": "append",
  "fieldSelectionEnabled": true,
  "primaryKey": [
    [
      "string"
    ]
  ],
  "selected": true,
  "selectedFields": [
    {
      "fieldPath": [
        "string"
      ]
    }
  ],
  "suggested": true,
  "syncMode": "full_refresh"
}
```

the mutable part of the stream to configure the destination

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliasName|string|false|none|Alias name to the stream to be used in the destination|
|cursorField|[string]|false|none|Path to the field that will be used to determine if a record is new or modified since the last sync. This field is REQUIRED if `sync_mode` is `incremental`. Otherwise it is ignored.|
|destinationSyncMode|[DestinationSyncMode](#schemadestinationsyncmode)|true|none|none|
|fieldSelectionEnabled|boolean|false|none|Whether field selection should be enabled. If this is true, only the properties in `selectedFields` will be included.|
|primaryKey|[[string]]|false|none|Paths to the fields that will be used as primary key. This field is REQUIRED if `destination_sync_mode` is `*_dedup`. Otherwise it is ignored.|
|selected|boolean|false|none|If this is true, the stream is selected with all of its properties. For new connections, this considers if the stream is suggested or not|
|selectedFields|[[SelectedFieldInfo](#schemaselectedfieldinfo)]|false|none|Paths to the fields that will be included in the configured catalog. This must be set if `fieldSelectedEnabled` is set. An empty list indicates that no properties will be included.|
|suggested|boolean|false|none|Does the connector suggest that this stream be enabled by default?|
|syncMode|[SyncMode](#schemasyncmode)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|destinationSyncMode|append|
|destinationSyncMode|overwrite|
|destinationSyncMode|append_dedup|
|syncMode|full_refresh|
|syncMode|incremental|

<h2 id="tocS_AttemptFailureOrigin">AttemptFailureOrigin</h2>
<!-- backwards compatibility -->
<a id="schemaattemptfailureorigin"></a>
<a id="schema_AttemptFailureOrigin"></a>
<a id="tocSattemptfailureorigin"></a>
<a id="tocsattemptfailureorigin"></a>

```json
"source"
```

Indicates where the error originated. If not set, the origin of error is not well known.

<h2 id="tocS_AttemptFailureReason">AttemptFailureReason</h2>
<!-- backwards compatibility -->
<a id="schemaattemptfailurereason"></a>
<a id="schema_AttemptFailureReason"></a>
<a id="tocSattemptfailurereason"></a>
<a id="tocsattemptfailurereason"></a>

```json
{
  "externalMessage": "string",
  "failureOrigin": "source",
  "failureType": "config_error",
  "internalMessage": "string",
  "retryable": true,
  "stacktrace": "string",
  "timestamp": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalMessage|string|false|none|none|
|failureOrigin|[AttemptFailureOrigin](#schemaattemptfailureorigin)|false|none|Indicates where the error originated. If not set, the origin of error is not well known.|
|failureType|[AttemptFailureType](#schemaattemptfailuretype)|false|none|Categorizes well known errors into types for programmatic handling. If not set, the type of error is not well known.|
|internalMessage|string|false|none|none|
|retryable|boolean|false|none|True if it is known that retrying may succeed, e.g. for a transient failure. False if it is known that a retry will not succeed, e.g. for a configuration issue. If not set, retryable status is not well known.|
|stacktrace|string|false|none|none|
|timestamp|integer(int64)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|failureOrigin|source|
|failureOrigin|destination|
|failureOrigin|replication|
|failureOrigin|persistence|
|failureOrigin|normalization|
|failureOrigin|dbt|
|failureOrigin|airbyte_platform|
|failureOrigin|unknown|
|failureType|config_error|
|failureType|system_error|
|failureType|manual_cancellation|
|failureType|refresh_schema|

<h2 id="tocS_AttemptFailureSummary">AttemptFailureSummary</h2>
<!-- backwards compatibility -->
<a id="schemaattemptfailuresummary"></a>
<a id="schema_AttemptFailureSummary"></a>
<a id="tocSattemptfailuresummary"></a>
<a id="tocsattemptfailuresummary"></a>

```json
{
  "failures": [
    {
      "externalMessage": "string",
      "failureOrigin": "source",
      "failureType": "config_error",
      "internalMessage": "string",
      "retryable": true,
      "stacktrace": "string",
      "timestamp": 0
    }
  ],
  "partialSuccess": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failures|[[AttemptFailureReason](#schemaattemptfailurereason)]|true|none|none|
|partialSuccess|boolean|false|none|True if the number of committed records for this attempt was greater than 0. False if 0 records were committed. If not set, the number of committed records is unknown.|

<h2 id="tocS_AttemptFailureType">AttemptFailureType</h2>
<!-- backwards compatibility -->
<a id="schemaattemptfailuretype"></a>
<a id="schema_AttemptFailureType"></a>
<a id="tocSattemptfailuretype"></a>
<a id="tocsattemptfailuretype"></a>

```json
"config_error"
```

Categorizes well known errors into types for programmatic handling. If not set, the type of error is not well known.

<h2 id="tocS_AttemptInfoRead">AttemptInfoRead</h2>
<!-- backwards compatibility -->
<a id="schemaattemptinforead"></a>
<a id="schema_AttemptInfoRead"></a>
<a id="tocSattemptinforead"></a>
<a id="tocsattemptinforead"></a>

```json
{
  "attempt": {
    "bytesSynced": 0,
    "createdAt": 0,
    "endedAt": 0,
    "failureSummary": {
      "failures": [
        {
          "externalMessage": "string",
          "failureOrigin": "source",
          "failureType": "config_error",
          "internalMessage": "string",
          "retryable": true,
          "stacktrace": "string",
          "timestamp": 0
        }
      ],
      "partialSuccess": true
    },
    "id": 0,
    "recordsSynced": 0,
    "status": "running",
    "streamStats": [
      {
        "stats": {
          "bytesEmitted": 0,
          "estimatedBytes": 0,
          "estimatedRecords": 0,
          "recordsCommitted": 0,
          "recordsEmitted": 0,
          "stateMessagesEmitted": 0
        },
        "streamName": "string",
        "streamNamespace": "string"
      }
    ],
    "totalStats": {
      "bytesEmitted": 0,
      "estimatedBytes": 0,
      "estimatedRecords": 0,
      "recordsCommitted": 0,
      "recordsEmitted": 0,
      "stateMessagesEmitted": 0
    },
    "updatedAt": 0
  },
  "logs": {
    "logLines": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attempt|[AttemptRead](#schemaattemptread)|true|none|none|
|logs|[LogRead](#schemalogread)|true|none|none|

<h2 id="tocS_AttemptNormalizationStatusRead">AttemptNormalizationStatusRead</h2>
<!-- backwards compatibility -->
<a id="schemaattemptnormalizationstatusread"></a>
<a id="schema_AttemptNormalizationStatusRead"></a>
<a id="tocSattemptnormalizationstatusread"></a>
<a id="tocsattemptnormalizationstatusread"></a>

```json
{
  "attemptNumber": 0,
  "hasNormalizationFailed": true,
  "hasRecordsCommitted": true,
  "recordsCommitted": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attemptNumber|[AttemptNumber](#schemaattemptnumber)|false|none|none|
|hasNormalizationFailed|boolean|false|none|none|
|hasRecordsCommitted|boolean|false|none|none|
|recordsCommitted|integer(int64)|false|none|none|

<h2 id="tocS_AttemptNormalizationStatusReadList">AttemptNormalizationStatusReadList</h2>
<!-- backwards compatibility -->
<a id="schemaattemptnormalizationstatusreadlist"></a>
<a id="schema_AttemptNormalizationStatusReadList"></a>
<a id="tocSattemptnormalizationstatusreadlist"></a>
<a id="tocsattemptnormalizationstatusreadlist"></a>

```json
{
  "attemptNormalizationStatuses": [
    {
      "attemptNumber": 0,
      "hasNormalizationFailed": true,
      "hasRecordsCommitted": true,
      "recordsCommitted": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attemptNormalizationStatuses|[[AttemptNormalizationStatusRead](#schemaattemptnormalizationstatusread)]|false|none|none|

<h2 id="tocS_AttemptNumber">AttemptNumber</h2>
<!-- backwards compatibility -->
<a id="schemaattemptnumber"></a>
<a id="schema_AttemptNumber"></a>
<a id="tocSattemptnumber"></a>
<a id="tocsattemptnumber"></a>

```json
0
```

<h2 id="tocS_AttemptRead">AttemptRead</h2>
<!-- backwards compatibility -->
<a id="schemaattemptread"></a>
<a id="schema_AttemptRead"></a>
<a id="tocSattemptread"></a>
<a id="tocsattemptread"></a>

```json
{
  "bytesSynced": 0,
  "createdAt": 0,
  "endedAt": 0,
  "failureSummary": {
    "failures": [
      {
        "externalMessage": "string",
        "failureOrigin": "source",
        "failureType": "config_error",
        "internalMessage": "string",
        "retryable": true,
        "stacktrace": "string",
        "timestamp": 0
      }
    ],
    "partialSuccess": true
  },
  "id": 0,
  "recordsSynced": 0,
  "status": "running",
  "streamStats": [
    {
      "stats": {
        "bytesEmitted": 0,
        "estimatedBytes": 0,
        "estimatedRecords": 0,
        "recordsCommitted": 0,
        "recordsEmitted": 0,
        "stateMessagesEmitted": 0
      },
      "streamName": "string",
      "streamNamespace": "string"
    }
  ],
  "totalStats": {
    "bytesEmitted": 0,
    "estimatedBytes": 0,
    "estimatedRecords": 0,
    "recordsCommitted": 0,
    "recordsEmitted": 0,
    "stateMessagesEmitted": 0
  },
  "updatedAt": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bytesSynced|integer(int64)|false|none|none|
|createdAt|integer(int64)|true|none|none|
|endedAt|integer(int64)|false|none|none|
|failureSummary|[AttemptFailureSummary](#schemaattemptfailuresummary)|false|none|none|
|id|integer(int64)|true|none|none|
|recordsSynced|integer(int64)|false|none|none|
|status|[AttemptStatus](#schemaattemptstatus)|true|none|none|
|streamStats|[[AttemptStreamStats](#schemaattemptstreamstats)]|false|none|none|
|totalStats|[AttemptStats](#schemaattemptstats)|false|none|none|
|updatedAt|integer(int64)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|running|
|status|failed|
|status|succeeded|

<h2 id="tocS_AttemptStats">AttemptStats</h2>
<!-- backwards compatibility -->
<a id="schemaattemptstats"></a>
<a id="schema_AttemptStats"></a>
<a id="tocSattemptstats"></a>
<a id="tocsattemptstats"></a>

```json
{
  "bytesEmitted": 0,
  "estimatedBytes": 0,
  "estimatedRecords": 0,
  "recordsCommitted": 0,
  "recordsEmitted": 0,
  "stateMessagesEmitted": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bytesEmitted|integer(int64)|false|none|none|
|estimatedBytes|integer(int64)|false|none|none|
|estimatedRecords|integer(int64)|false|none|none|
|recordsCommitted|integer(int64)|false|none|none|
|recordsEmitted|integer(int64)|false|none|none|
|stateMessagesEmitted|integer(int64)|false|none|none|

<h2 id="tocS_AttemptStatus">AttemptStatus</h2>
<!-- backwards compatibility -->
<a id="schemaattemptstatus"></a>
<a id="schema_AttemptStatus"></a>
<a id="tocSattemptstatus"></a>
<a id="tocsattemptstatus"></a>

```json
"running"
```

<h2 id="tocS_AttemptStreamStats">AttemptStreamStats</h2>
<!-- backwards compatibility -->
<a id="schemaattemptstreamstats"></a>
<a id="schema_AttemptStreamStats"></a>
<a id="tocSattemptstreamstats"></a>
<a id="tocsattemptstreamstats"></a>

```json
{
  "stats": {
    "bytesEmitted": 0,
    "estimatedBytes": 0,
    "estimatedRecords": 0,
    "recordsCommitted": 0,
    "recordsEmitted": 0,
    "stateMessagesEmitted": 0
  },
  "streamName": "string",
  "streamNamespace": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stats|[AttemptStats](#schemaattemptstats)|true|none|none|
|streamName|string|true|none|none|
|streamNamespace|string|false|none|none|

<h2 id="tocS_AttemptSyncConfig">AttemptSyncConfig</h2>
<!-- backwards compatibility -->
<a id="schemaattemptsyncconfig"></a>
<a id="schema_AttemptSyncConfig"></a>
<a id="tocSattemptsyncconfig"></a>
<a id="tocsattemptsyncconfig"></a>

```json
{
  "destinationConfiguration": {
    "user": "charles"
  },
  "sourceConfiguration": {
    "user": "charles"
  },
  "state": {
    "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "globalState": {
      "shared_state": {},
      "streamStates": [
        {
          "streamDescriptor": {
            "name": "string",
            "namespace": "string"
          },
          "streamState": {}
        }
      ]
    },
    "state": {},
    "stateType": "global",
    "streamState": [
      {
        "streamDescriptor": {
          "name": "string",
          "namespace": "string"
        },
        "streamState": {}
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationConfiguration|[DestinationConfiguration](#schemadestinationconfiguration)|true|none|The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.|
|sourceConfiguration|[SourceConfiguration](#schemasourceconfiguration)|true|none|The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.|
|state|[ConnectionState](#schemaconnectionstate)|false|none|Contains the state for a connection. The stateType field identifies what type of state it is. Only the field corresponding to that type will be set, the rest will be null. If stateType=not_set, then none of the fields will be set.|

<h2 id="tocS_AuthSpecification">AuthSpecification</h2>
<!-- backwards compatibility -->
<a id="schemaauthspecification"></a>
<a id="schema_AuthSpecification"></a>
<a id="tocSauthspecification"></a>
<a id="tocsauthspecification"></a>

```json
{
  "auth_type": "oauth2.0",
  "oauth2Specification": {
    "oauthFlowInitParameters": [
      [
        "string"
      ]
    ],
    "oauthFlowOutputParameters": [
      [
        "string"
      ]
    ],
    "rootObject": [
      "path",
      1
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_type|string|false|none|none|
|oauth2Specification|[OAuth2Specification](#schemaoauth2specification)|false|none|An object containing any metadata needed to describe this connector's Oauth flow|

#### Enumerated Values

|Property|Value|
|---|---|
|auth_type|oauth2.0|

<h2 id="tocS_CatalogDiff">CatalogDiff</h2>
<!-- backwards compatibility -->
<a id="schemacatalogdiff"></a>
<a id="schema_CatalogDiff"></a>
<a id="tocScatalogdiff"></a>
<a id="tocscatalogdiff"></a>

```json
{
  "transforms": [
    {
      "streamDescriptor": {
        "name": "string",
        "namespace": "string"
      },
      "transformType": "add_stream",
      "updateStream": [
        {
          "addField": {
            "schema": {}
          },
          "breaking": true,
          "fieldName": [
            "string"
          ],
          "removeField": {
            "schema": {}
          },
          "transformType": "add_field",
          "updateFieldSchema": {
            "newSchema": {},
            "oldSchema": {}
          }
        }
      ]
    }
  ]
}
```

Describes the difference between two Airbyte catalogs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transforms|[[StreamTransform](#schemastreamtransform)]|true|none|list of stream transformations. order does not matter.|

<h2 id="tocS_CheckConnectionRead">CheckConnectionRead</h2>
<!-- backwards compatibility -->
<a id="schemacheckconnectionread"></a>
<a id="schema_CheckConnectionRead"></a>
<a id="tocScheckconnectionread"></a>
<a id="tocscheckconnectionread"></a>

```json
{
  "jobInfo": {
    "configId": "string",
    "configType": "check_connection_source",
    "connectorConfigurationUpdated": false,
    "createdAt": 0,
    "endedAt": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "logs": {
      "logLines": [
        "string"
      ]
    },
    "succeeded": true
  },
  "message": "string",
  "status": "succeeded"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobInfo|[SynchronousJobRead](#schemasynchronousjobread)|true|none|none|
|message|string|false|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|succeeded|
|status|failed|

<h2 id="tocS_CheckOperationRead">CheckOperationRead</h2>
<!-- backwards compatibility -->
<a id="schemacheckoperationread"></a>
<a id="schema_CheckOperationRead"></a>
<a id="tocScheckoperationread"></a>
<a id="tocscheckoperationread"></a>

```json
{
  "message": "string",
  "status": "succeeded"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|succeeded|
|status|failed|

<h2 id="tocS_CompleteDestinationOAuthRequest">CompleteDestinationOAuthRequest</h2>
<!-- backwards compatibility -->
<a id="schemacompletedestinationoauthrequest"></a>
<a id="schema_CompleteDestinationOAuthRequest"></a>
<a id="tocScompletedestinationoauthrequest"></a>
<a id="tocscompletedestinationoauthrequest"></a>

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "oAuthInputConfiguration": null,
  "queryParams": {},
  "redirectUrl": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationDefinitionId|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|none|
|destinationId|[DestinationId](#schemadestinationid)|false|none|none|
|oAuthInputConfiguration|[OAuthConfiguration](#schemaoauthconfiguration)|false|none|The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema.|
|queryParams|object|false|none|The query parameters present in the redirect URL after a user granted consent e.g auth code|
|redirectUrl|string|false|none|When completing OAuth flow to gain an access token, some API sometimes requires to verify that the app re-send the redirectUrl that was used when consent was given.|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_CompleteOAuthResponse">CompleteOAuthResponse</h2>
<!-- backwards compatibility -->
<a id="schemacompleteoauthresponse"></a>
<a id="schema_CompleteOAuthResponse"></a>
<a id="tocScompleteoauthresponse"></a>
<a id="tocscompleteoauthresponse"></a>

```json
{}
```

<h2 id="tocS_CompleteSourceOauthRequest">CompleteSourceOauthRequest</h2>
<!-- backwards compatibility -->
<a id="schemacompletesourceoauthrequest"></a>
<a id="schema_CompleteSourceOauthRequest"></a>
<a id="tocScompletesourceoauthrequest"></a>
<a id="tocscompletesourceoauthrequest"></a>

```json
{
  "oAuthInputConfiguration": null,
  "queryParams": {},
  "redirectUrl": "string",
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oAuthInputConfiguration|[OAuthConfiguration](#schemaoauthconfiguration)|false|none|The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema.|
|queryParams|object|false|none|The query parameters present in the redirect URL after a user granted consent e.g auth code|
|redirectUrl|string|false|none|When completing OAuth flow to gain an access token, some API sometimes requires to verify that the app re-send the redirectUrl that was used when consent was given.|
|sourceDefinitionId|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|none|
|sourceId|[SourceId](#schemasourceid)|false|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_ConnectionCreate">ConnectionCreate</h2>
<!-- backwards compatibility -->
<a id="schemaconnectioncreate"></a>
<a id="schema_ConnectionCreate"></a>
<a id="tocSconnectioncreate"></a>
<a id="tocsconnectioncreate"></a>

```json
{
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geography": "auto",
  "name": "string",
  "namespaceDefinition": "source",
  "namespaceFormat": "${SOURCE_NAMESPACE}",
  "nonBreakingChangesPreference": "ignore",
  "notifySchemaChanges": true,
  "operationIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "prefix": "string",
  "resourceRequirements": {
    "cpu_limit": "string",
    "cpu_request": "string",
    "memory_limit": "string",
    "memory_request": "string"
  },
  "schedule": {
    "timeUnit": "minutes",
    "units": 0
  },
  "scheduleData": {
    "basicSchedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "cron": {
      "cronExpression": "string",
      "cronTimeZone": "string"
    }
  },
  "scheduleType": "manual",
  "sourceCatalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "active",
  "syncCatalog": {
    "streams": [
      {
        "config": {
          "aliasName": "string",
          "cursorField": [
            "string"
          ],
          "destinationSyncMode": "append",
          "fieldSelectionEnabled": true,
          "primaryKey": [
            [
              "string"
            ]
          ],
          "selected": true,
          "selectedFields": [
            {
              "fieldPath": [
                "string"
              ]
            }
          ],
          "suggested": true,
          "syncMode": "full_refresh"
        },
        "stream": {
          "defaultCursorField": [
            "string"
          ],
          "jsonSchema": {},
          "name": "string",
          "namespace": "string",
          "sourceDefinedCursor": true,
          "sourceDefinedPrimaryKey": [
            [
              "string"
            ]
          ],
          "supportedSyncModes": [
            "full_refresh"
          ]
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationId|[DestinationId](#schemadestinationid)|true|none|none|
|geography|[Geography](#schemageography)|false|none|none|
|name|string|false|none|Optional name of the connection|
|namespaceDefinition|[NamespaceDefinitionType](#schemanamespacedefinitiontype)|false|none|Method used for computing final namespace in destination|
|namespaceFormat|string|false|none|Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.|
|nonBreakingChangesPreference|[NonBreakingChangesPreference](#schemanonbreakingchangespreference)|false|none|none|
|notifySchemaChanges|boolean|false|none|none|
|operationIds|[[OperationId](#schemaoperationid)]|false|none|none|
|prefix|string|false|none|Prefix that will be prepended to the name of each stream when it is written to the destination.|
|resourceRequirements|[ResourceRequirements](#schemaresourcerequirements)|false|none|optional resource requirements to run workers (blank for unbounded allocations)|
|schedule|[ConnectionSchedule](#schemaconnectionschedule)|false|none|if null, then no schedule is set.|
|scheduleData|[ConnectionScheduleData](#schemaconnectionscheduledata)|false|none|schedule for when the the connection should run, per the schedule type|
|scheduleType|[ConnectionScheduleType](#schemaconnectionscheduletype)|false|none|determine how the schedule data should be interpreted|
|sourceCatalogId|string(uuid)|false|none|none|
|sourceId|[SourceId](#schemasourceid)|true|none|none|
|status|[ConnectionStatus](#schemaconnectionstatus)|true|none|Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.|
|syncCatalog|[AirbyteCatalog](#schemaairbytecatalog)|false|none|describes the available schema (catalog).|

#### Enumerated Values

|Property|Value|
|---|---|
|geography|auto|
|geography|us|
|geography|eu|
|namespaceDefinition|source|
|namespaceDefinition|destination|
|namespaceDefinition|customformat|
|nonBreakingChangesPreference|ignore|
|nonBreakingChangesPreference|disable|
|scheduleType|manual|
|scheduleType|basic|
|scheduleType|cron|
|status|active|
|status|inactive|
|status|deprecated|

<h2 id="tocS_ConnectionId">ConnectionId</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionid"></a>
<a id="schema_ConnectionId"></a>
<a id="tocSconnectionid"></a>
<a id="tocsconnectionid"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

<h2 id="tocS_ConnectionIdRequestBody">ConnectionIdRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionidrequestbody"></a>
<a id="schema_ConnectionIdRequestBody"></a>
<a id="tocSconnectionidrequestbody"></a>
<a id="tocsconnectionidrequestbody"></a>

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|[ConnectionId](#schemaconnectionid)|true|none|none|

<h2 id="tocS_ConnectionRead">ConnectionRead</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionread"></a>
<a id="schema_ConnectionRead"></a>
<a id="tocSconnectionread"></a>
<a id="tocsconnectionread"></a>

```json
{
  "breakingChange": true,
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geography": "auto",
  "name": "string",
  "namespaceDefinition": "source",
  "namespaceFormat": "${SOURCE_NAMESPACE}",
  "nonBreakingChangesPreference": "ignore",
  "notifySchemaChanges": true,
  "operationIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "prefix": "string",
  "resourceRequirements": {
    "cpu_limit": "string",
    "cpu_request": "string",
    "memory_limit": "string",
    "memory_request": "string"
  },
  "schedule": {
    "timeUnit": "minutes",
    "units": 0
  },
  "scheduleData": {
    "basicSchedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "cron": {
      "cronExpression": "string",
      "cronTimeZone": "string"
    }
  },
  "scheduleType": "manual",
  "sourceCatalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "active",
  "syncCatalog": {
    "streams": [
      {
        "config": {
          "aliasName": "string",
          "cursorField": [
            "string"
          ],
          "destinationSyncMode": "append",
          "fieldSelectionEnabled": true,
          "primaryKey": [
            [
              "string"
            ]
          ],
          "selected": true,
          "selectedFields": [
            {
              "fieldPath": [
                "string"
              ]
            }
          ],
          "suggested": true,
          "syncMode": "full_refresh"
        },
        "stream": {
          "defaultCursorField": [
            "string"
          ],
          "jsonSchema": {},
          "name": "string",
          "namespace": "string",
          "sourceDefinedCursor": true,
          "sourceDefinedPrimaryKey": [
            [
              "string"
            ]
          ],
          "supportedSyncModes": [
            "full_refresh"
          ]
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|breakingChange|boolean|true|none|none|
|connectionId|[ConnectionId](#schemaconnectionid)|true|none|none|
|destinationId|[DestinationId](#schemadestinationid)|true|none|none|
|geography|[Geography](#schemageography)|false|none|none|
|name|string|true|none|none|
|namespaceDefinition|[NamespaceDefinitionType](#schemanamespacedefinitiontype)|false|none|Method used for computing final namespace in destination|
|namespaceFormat|string|false|none|Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.|
|nonBreakingChangesPreference|[NonBreakingChangesPreference](#schemanonbreakingchangespreference)|false|none|none|
|notifySchemaChanges|boolean|false|none|none|
|operationIds|[[OperationId](#schemaoperationid)]|false|none|none|
|prefix|string|false|none|Prefix that will be prepended to the name of each stream when it is written to the destination.|
|resourceRequirements|[ResourceRequirements](#schemaresourcerequirements)|false|none|optional resource requirements to run workers (blank for unbounded allocations)|
|schedule|[ConnectionSchedule](#schemaconnectionschedule)|false|none|if null, then no schedule is set.|
|scheduleData|[ConnectionScheduleData](#schemaconnectionscheduledata)|false|none|schedule for when the the connection should run, per the schedule type|
|scheduleType|[ConnectionScheduleType](#schemaconnectionscheduletype)|false|none|determine how the schedule data should be interpreted|
|sourceCatalogId|string(uuid)|false|none|none|
|sourceId|[SourceId](#schemasourceid)|true|none|none|
|status|[ConnectionStatus](#schemaconnectionstatus)|true|none|Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.|
|syncCatalog|[AirbyteCatalog](#schemaairbytecatalog)|true|none|describes the available schema (catalog).|

#### Enumerated Values

|Property|Value|
|---|---|
|geography|auto|
|geography|us|
|geography|eu|
|namespaceDefinition|source|
|namespaceDefinition|destination|
|namespaceDefinition|customformat|
|nonBreakingChangesPreference|ignore|
|nonBreakingChangesPreference|disable|
|scheduleType|manual|
|scheduleType|basic|
|scheduleType|cron|
|status|active|
|status|inactive|
|status|deprecated|

<h2 id="tocS_ConnectionReadList">ConnectionReadList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionreadlist"></a>
<a id="schema_ConnectionReadList"></a>
<a id="tocSconnectionreadlist"></a>
<a id="tocsconnectionreadlist"></a>

```json
{
  "connections": [
    {
      "breakingChange": true,
      "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geography": "auto",
      "name": "string",
      "namespaceDefinition": "source",
      "namespaceFormat": "${SOURCE_NAMESPACE}",
      "nonBreakingChangesPreference": "ignore",
      "notifySchemaChanges": true,
      "operationIds": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "prefix": "string",
      "resourceRequirements": {
        "cpu_limit": "string",
        "cpu_request": "string",
        "memory_limit": "string",
        "memory_request": "string"
      },
      "schedule": {
        "timeUnit": "minutes",
        "units": 0
      },
      "scheduleData": {
        "basicSchedule": {
          "timeUnit": "minutes",
          "units": 0
        },
        "cron": {
          "cronExpression": "string",
          "cronTimeZone": "string"
        }
      },
      "scheduleType": "manual",
      "sourceCatalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "active",
      "syncCatalog": {
        "streams": [
          {
            "config": {
              "aliasName": "string",
              "cursorField": [
                "string"
              ],
              "destinationSyncMode": "append",
              "fieldSelectionEnabled": true,
              "primaryKey": [
                [
                  "string"
                ]
              ],
              "selected": true,
              "selectedFields": [
                {
                  "fieldPath": [
                    "string"
                  ]
                }
              ],
              "suggested": true,
              "syncMode": "full_refresh"
            },
            "stream": {
              "defaultCursorField": [
                "string"
              ],
              "jsonSchema": {},
              "name": "string",
              "namespace": "string",
              "sourceDefinedCursor": true,
              "sourceDefinedPrimaryKey": [
                [
                  "string"
                ]
              ],
              "supportedSyncModes": [
                "full_refresh"
              ]
            }
          }
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connections|[[ConnectionRead](#schemaconnectionread)]|true|none|none|

<h2 id="tocS_ConnectionSchedule">ConnectionSchedule</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionschedule"></a>
<a id="schema_ConnectionSchedule"></a>
<a id="tocSconnectionschedule"></a>
<a id="tocsconnectionschedule"></a>

```json
{
  "timeUnit": "minutes",
  "units": 0
}
```

if null, then no schedule is set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeUnit|string|true|none|none|
|units|integer(int64)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|timeUnit|minutes|
|timeUnit|hours|
|timeUnit|days|
|timeUnit|weeks|
|timeUnit|months|

<h2 id="tocS_ConnectionScheduleData">ConnectionScheduleData</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionscheduledata"></a>
<a id="schema_ConnectionScheduleData"></a>
<a id="tocSconnectionscheduledata"></a>
<a id="tocsconnectionscheduledata"></a>

```json
{
  "basicSchedule": {
    "timeUnit": "minutes",
    "units": 0
  },
  "cron": {
    "cronExpression": "string",
    "cronTimeZone": "string"
  }
}
```

schedule for when the the connection should run, per the schedule type

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicSchedule|object|false|none|none|
|cron|object|false|none|none|

<h2 id="tocS_ConnectionScheduleType">ConnectionScheduleType</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionscheduletype"></a>
<a id="schema_ConnectionScheduleType"></a>
<a id="tocSconnectionscheduletype"></a>
<a id="tocsconnectionscheduletype"></a>

```json
"manual"
```

determine how the schedule data should be interpreted

<h2 id="tocS_ConnectionSearch">ConnectionSearch</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionsearch"></a>
<a id="schema_ConnectionSearch"></a>
<a id="tocSconnectionsearch"></a>
<a id="tocsconnectionsearch"></a>

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destination": {
    "connectionConfiguration": {
      "user": "charles"
    },
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "destinationName": "string",
    "name": "string",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "namespaceDefinition": "source",
  "namespaceFormat": "${SOURCE_NAMESPACE}",
  "prefix": "string",
  "schedule": {
    "timeUnit": "minutes",
    "units": 0
  },
  "scheduleData": {
    "basicSchedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "cron": {
      "cronExpression": "string",
      "cronTimeZone": "string"
    }
  },
  "scheduleType": "manual",
  "source": {
    "connectionConfiguration": {
      "user": "charles"
    },
    "name": "string",
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceName": "string",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|[ConnectionId](#schemaconnectionid)|false|none|none|
|destination|[DestinationSearch](#schemadestinationsearch)|false|none|none|
|destinationId|[DestinationId](#schemadestinationid)|false|none|none|
|name|string|false|none|none|
|namespaceDefinition|[NamespaceDefinitionType](#schemanamespacedefinitiontype)|false|none|Method used for computing final namespace in destination|
|namespaceFormat|string|false|none|Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.|
|prefix|string|false|none|Prefix that will be prepended to the name of each stream when it is written to the destination.|
|schedule|[ConnectionSchedule](#schemaconnectionschedule)|false|none|if null, then no schedule is set.|
|scheduleData|[ConnectionScheduleData](#schemaconnectionscheduledata)|false|none|schedule for when the the connection should run, per the schedule type|
|scheduleType|[ConnectionScheduleType](#schemaconnectionscheduletype)|false|none|determine how the schedule data should be interpreted|
|source|[SourceSearch](#schemasourcesearch)|false|none|none|
|sourceId|[SourceId](#schemasourceid)|false|none|none|
|status|[ConnectionStatus](#schemaconnectionstatus)|false|none|Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.|

#### Enumerated Values

|Property|Value|
|---|---|
|namespaceDefinition|source|
|namespaceDefinition|destination|
|namespaceDefinition|customformat|
|scheduleType|manual|
|scheduleType|basic|
|scheduleType|cron|
|status|active|
|status|inactive|
|status|deprecated|

<h2 id="tocS_ConnectionState">ConnectionState</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstate"></a>
<a id="schema_ConnectionState"></a>
<a id="tocSconnectionstate"></a>
<a id="tocsconnectionstate"></a>

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "globalState": {
    "shared_state": {},
    "streamStates": [
      {
        "streamDescriptor": {
          "name": "string",
          "namespace": "string"
        },
        "streamState": {}
      }
    ]
  },
  "state": {},
  "stateType": "global",
  "streamState": [
    {
      "streamDescriptor": {
        "name": "string",
        "namespace": "string"
      },
      "streamState": {}
    }
  ]
}
```

Contains the state for a connection. The stateType field identifies what type of state it is. Only the field corresponding to that type will be set, the rest will be null. If stateType=not_set, then none of the fields will be set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|[ConnectionId](#schemaconnectionid)|true|none|none|
|globalState|[GlobalState](#schemaglobalstate)|false|none|none|
|state|[StateBlob](#schemastateblob)|false|none|none|
|stateType|[ConnectionStateType](#schemaconnectionstatetype)|true|none|none|
|streamState|[[StreamState](#schemastreamstate)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|stateType|global|
|stateType|stream|
|stateType|legacy|
|stateType|not_set|

<h2 id="tocS_ConnectionStateCreateOrUpdate">ConnectionStateCreateOrUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstatecreateorupdate"></a>
<a id="schema_ConnectionStateCreateOrUpdate"></a>
<a id="tocSconnectionstatecreateorupdate"></a>
<a id="tocsconnectionstatecreateorupdate"></a>

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "connectionState": {
    "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "globalState": {
      "shared_state": {},
      "streamStates": [
        {
          "streamDescriptor": {
            "name": "string",
            "namespace": "string"
          },
          "streamState": {}
        }
      ]
    },
    "state": {},
    "stateType": "global",
    "streamState": [
      {
        "streamDescriptor": {
          "name": "string",
          "namespace": "string"
        },
        "streamState": {}
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|[ConnectionId](#schemaconnectionid)|true|none|none|
|connectionState|[ConnectionState](#schemaconnectionstate)|true|none|Contains the state for a connection. The stateType field identifies what type of state it is. Only the field corresponding to that type will be set, the rest will be null. If stateType=not_set, then none of the fields will be set.|

<h2 id="tocS_ConnectionStateType">ConnectionStateType</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstatetype"></a>
<a id="schema_ConnectionStateType"></a>
<a id="tocSconnectionstatetype"></a>
<a id="tocsconnectionstatetype"></a>

```json
"global"
```

<h2 id="tocS_ConnectionStatus">ConnectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstatus"></a>
<a id="schema_ConnectionStatus"></a>
<a id="tocSconnectionstatus"></a>
<a id="tocsconnectionstatus"></a>

```json
"active"
```

Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.

<h2 id="tocS_ConnectionUpdate">ConnectionUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionupdate"></a>
<a id="schema_ConnectionUpdate"></a>
<a id="tocSconnectionupdate"></a>
<a id="tocsconnectionupdate"></a>

```json
{
  "breakingChange": true,
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geography": "auto",
  "name": "string",
  "namespaceDefinition": "source",
  "namespaceFormat": "${SOURCE_NAMESPACE}",
  "nonBreakingChangesPreference": "ignore",
  "notifySchemaChanges": true,
  "operationIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "prefix": "string",
  "resourceRequirements": {
    "cpu_limit": "string",
    "cpu_request": "string",
    "memory_limit": "string",
    "memory_request": "string"
  },
  "schedule": {
    "timeUnit": "minutes",
    "units": 0
  },
  "scheduleData": {
    "basicSchedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "cron": {
      "cronExpression": "string",
      "cronTimeZone": "string"
    }
  },
  "scheduleType": "manual",
  "sourceCatalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "active",
  "syncCatalog": {
    "streams": [
      {
        "config": {
          "aliasName": "string",
          "cursorField": [
            "string"
          ],
          "destinationSyncMode": "append",
          "fieldSelectionEnabled": true,
          "primaryKey": [
            [
              "string"
            ]
          ],
          "selected": true,
          "selectedFields": [
            {
              "fieldPath": [
                "string"
              ]
            }
          ],
          "suggested": true,
          "syncMode": "full_refresh"
        },
        "stream": {
          "defaultCursorField": [
            "string"
          ],
          "jsonSchema": {},
          "name": "string",
          "namespace": "string",
          "sourceDefinedCursor": true,
          "sourceDefinedPrimaryKey": [
            [
              "string"
            ]
          ],
          "supportedSyncModes": [
            "full_refresh"
          ]
        }
      }
    ]
  }
}
```

Used to apply a patch-style update to a connection, which means that null properties remain unchanged

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|breakingChange|boolean|false|none|none|
|connectionId|[ConnectionId](#schemaconnectionid)|true|none|none|
|geography|[Geography](#schemageography)|false|none|none|
|name|string|false|none|Name that will be set to this connection|
|namespaceDefinition|[NamespaceDefinitionType](#schemanamespacedefinitiontype)|false|none|Method used for computing final namespace in destination|
|namespaceFormat|string|false|none|Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.|
|nonBreakingChangesPreference|[NonBreakingChangesPreference](#schemanonbreakingchangespreference)|false|none|none|
|notifySchemaChanges|boolean|false|none|none|
|operationIds|[[OperationId](#schemaoperationid)]|false|none|none|
|prefix|string|false|none|Prefix that will be prepended to the name of each stream when it is written to the destination.|
|resourceRequirements|[ResourceRequirements](#schemaresourcerequirements)|false|none|optional resource requirements to run workers (blank for unbounded allocations)|
|schedule|[ConnectionSchedule](#schemaconnectionschedule)|false|none|if null, then no schedule is set.|
|scheduleData|[ConnectionScheduleData](#schemaconnectionscheduledata)|false|none|schedule for when the the connection should run, per the schedule type|
|scheduleType|[ConnectionScheduleType](#schemaconnectionscheduletype)|false|none|determine how the schedule data should be interpreted|
|sourceCatalogId|string(uuid)|false|none|none|
|status|[ConnectionStatus](#schemaconnectionstatus)|false|none|Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.|
|syncCatalog|[AirbyteCatalog](#schemaairbytecatalog)|false|none|describes the available schema (catalog).|

#### Enumerated Values

|Property|Value|
|---|---|
|geography|auto|
|geography|us|
|geography|eu|
|namespaceDefinition|source|
|namespaceDefinition|destination|
|namespaceDefinition|customformat|
|nonBreakingChangesPreference|ignore|
|nonBreakingChangesPreference|disable|
|scheduleType|manual|
|scheduleType|basic|
|scheduleType|cron|
|status|active|
|status|inactive|
|status|deprecated|

<h2 id="tocS_CustomDestinationDefinitionCreate">CustomDestinationDefinitionCreate</h2>
<!-- backwards compatibility -->
<a id="schemacustomdestinationdefinitioncreate"></a>
<a id="schema_CustomDestinationDefinitionCreate"></a>
<a id="tocScustomdestinationdefinitioncreate"></a>
<a id="tocscustomdestinationdefinitioncreate"></a>

```json
{
  "destinationDefinition": {
    "dockerImageTag": "string",
    "dockerRepository": "string",
    "documentationUrl": "http://example.com",
    "icon": "string",
    "name": "string",
    "resourceRequirements": {
      "default": {
        "cpu_limit": "string",
        "cpu_request": "string",
        "memory_limit": "string",
        "memory_request": "string"
      },
      "jobSpecific": [
        {
          "jobType": "get_spec",
          "resourceRequirements": {
            "cpu_limit": "string",
            "cpu_request": "string",
            "memory_limit": "string",
            "memory_request": "string"
          }
        }
      ]
    }
  },
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationDefinition|[DestinationDefinitionCreate](#schemadestinationdefinitioncreate)|true|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_CustomSourceDefinitionCreate">CustomSourceDefinitionCreate</h2>
<!-- backwards compatibility -->
<a id="schemacustomsourcedefinitioncreate"></a>
<a id="schema_CustomSourceDefinitionCreate"></a>
<a id="tocScustomsourcedefinitioncreate"></a>
<a id="tocscustomsourcedefinitioncreate"></a>

```json
{
  "sourceDefinition": {
    "dockerImageTag": "string",
    "dockerRepository": "string",
    "documentationUrl": "http://example.com",
    "icon": "string",
    "name": "string",
    "resourceRequirements": {
      "default": {
        "cpu_limit": "string",
        "cpu_request": "string",
        "memory_limit": "string",
        "memory_request": "string"
      },
      "jobSpecific": [
        {
          "jobType": "get_spec",
          "resourceRequirements": {
            "cpu_limit": "string",
            "cpu_request": "string",
            "memory_limit": "string",
            "memory_request": "string"
          }
        }
      ]
    }
  },
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceDefinition|[SourceDefinitionCreate](#schemasourcedefinitioncreate)|true|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_CustomerId">CustomerId</h2>
<!-- backwards compatibility -->
<a id="schemacustomerid"></a>
<a id="schema_CustomerId"></a>
<a id="tocScustomerid"></a>
<a id="tocscustomerid"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

<h2 id="tocS_CustomerioNotificationConfiguration">CustomerioNotificationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacustomerionotificationconfiguration"></a>
<a id="schema_CustomerioNotificationConfiguration"></a>
<a id="tocScustomerionotificationconfiguration"></a>
<a id="tocscustomerionotificationconfiguration"></a>

```json
{}
```

<h2 id="tocS_DataType">DataType</h2>
<!-- backwards compatibility -->
<a id="schemadatatype"></a>
<a id="schema_DataType"></a>
<a id="tocSdatatype"></a>
<a id="tocsdatatype"></a>

```json
"string"
```

<h2 id="tocS_DbMigrationExecutionRead">DbMigrationExecutionRead</h2>
<!-- backwards compatibility -->
<a id="schemadbmigrationexecutionread"></a>
<a id="schema_DbMigrationExecutionRead"></a>
<a id="tocSdbmigrationexecutionread"></a>
<a id="tocsdbmigrationexecutionread"></a>

```json
{
  "executedMigrations": [
    {
      "migratedAt": 0,
      "migratedBy": "string",
      "migrationDescription": "string",
      "migrationScript": "string",
      "migrationState": "pending",
      "migrationType": "string",
      "migrationVersion": "string"
    }
  ],
  "initialVersion": "string",
  "targetVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executedMigrations|[[DbMigrationRead](#schemadbmigrationread)]|false|none|none|
|initialVersion|string|false|none|none|
|targetVersion|string|false|none|none|

<h2 id="tocS_DbMigrationRead">DbMigrationRead</h2>
<!-- backwards compatibility -->
<a id="schemadbmigrationread"></a>
<a id="schema_DbMigrationRead"></a>
<a id="tocSdbmigrationread"></a>
<a id="tocsdbmigrationread"></a>

```json
{
  "migratedAt": 0,
  "migratedBy": "string",
  "migrationDescription": "string",
  "migrationScript": "string",
  "migrationState": "pending",
  "migrationType": "string",
  "migrationVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|migratedAt|integer(int64)|false|none|none|
|migratedBy|string|false|none|none|
|migrationDescription|string|true|none|none|
|migrationScript|string|false|none|none|
|migrationState|[DbMigrationState](#schemadbmigrationstate)|false|none|none|
|migrationType|string|true|none|none|
|migrationVersion|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|migrationState|pending|
|migrationState|above_target|
|migrationState|below_baseline|
|migrationState|baseline|
|migrationState|ignored|
|migrationState|missing_success|
|migrationState|missing_failed|
|migrationState|success|
|migrationState|undone|
|migrationState|available|
|migrationState|failed|
|migrationState|out_of_order|
|migrationState|future_success|
|migrationState|future_failed|
|migrationState|outdated|
|migrationState|superseded|
|migrationState|deleted|

<h2 id="tocS_DbMigrationReadList">DbMigrationReadList</h2>
<!-- backwards compatibility -->
<a id="schemadbmigrationreadlist"></a>
<a id="schema_DbMigrationReadList"></a>
<a id="tocSdbmigrationreadlist"></a>
<a id="tocsdbmigrationreadlist"></a>

```json
{
  "migrations": [
    {
      "migratedAt": 0,
      "migratedBy": "string",
      "migrationDescription": "string",
      "migrationScript": "string",
      "migrationState": "pending",
      "migrationType": "string",
      "migrationVersion": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|migrations|[[DbMigrationRead](#schemadbmigrationread)]|false|none|none|

<h2 id="tocS_DbMigrationRequestBody">DbMigrationRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemadbmigrationrequestbody"></a>
<a id="schema_DbMigrationRequestBody"></a>
<a id="tocSdbmigrationrequestbody"></a>
<a id="tocsdbmigrationrequestbody"></a>

```json
{
  "database": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database|string|true|none|none|

<h2 id="tocS_DbMigrationState">DbMigrationState</h2>
<!-- backwards compatibility -->
<a id="schemadbmigrationstate"></a>
<a id="schema_DbMigrationState"></a>
<a id="tocSdbmigrationstate"></a>
<a id="tocsdbmigrationstate"></a>

```json
"pending"
```

<h2 id="tocS_DestinationAuthSpecification">DestinationAuthSpecification</h2>
<!-- backwards compatibility -->
<a id="schemadestinationauthspecification"></a>
<a id="schema_DestinationAuthSpecification"></a>
<a id="tocSdestinationauthspecification"></a>
<a id="tocsdestinationauthspecification"></a>

```json
{
  "auth_type": "oauth2.0",
  "oauth2Specification": {
    "oauthFlowInitParameters": [
      [
        "string"
      ]
    ],
    "oauthFlowOutputParameters": [
      [
        "string"
      ]
    ],
    "rootObject": [
      "path",
      1
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_type|string|false|none|none|
|oauth2Specification|[OAuth2Specification](#schemaoauth2specification)|false|none|An object containing any metadata needed to describe this connector's Oauth flow|

#### Enumerated Values

|Property|Value|
|---|---|
|auth_type|oauth2.0|

<h2 id="tocS_DestinationCloneConfiguration">DestinationCloneConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadestinationcloneconfiguration"></a>
<a id="schema_DestinationCloneConfiguration"></a>
<a id="tocSdestinationcloneconfiguration"></a>
<a id="tocsdestinationcloneconfiguration"></a>

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionConfiguration|[DestinationConfiguration](#schemadestinationconfiguration)|false|none|The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.|
|name|string|false|none|none|

<h2 id="tocS_DestinationCloneRequestBody">DestinationCloneRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemadestinationclonerequestbody"></a>
<a id="schema_DestinationCloneRequestBody"></a>
<a id="tocSdestinationclonerequestbody"></a>
<a id="tocsdestinationclonerequestbody"></a>

```json
{
  "destinationCloneId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationConfiguration": {
    "connectionConfiguration": {
      "user": "charles"
    },
    "name": "string"
  }
}
```

The values required to configure the destination. The schema for this should have an id of the existing destination along with the configuration you want to change in case.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationCloneId|[DestinationId](#schemadestinationid)|true|none|none|
|destinationConfiguration|[DestinationCloneConfiguration](#schemadestinationcloneconfiguration)|false|none|none|

<h2 id="tocS_DestinationConfiguration">DestinationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadestinationconfiguration"></a>
<a id="schema_DestinationConfiguration"></a>
<a id="tocSdestinationconfiguration"></a>
<a id="tocsdestinationconfiguration"></a>

```json
{
  "user": "charles"
}
```

The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.

<h2 id="tocS_DestinationCoreConfig">DestinationCoreConfig</h2>
<!-- backwards compatibility -->
<a id="schemadestinationcoreconfig"></a>
<a id="schema_DestinationCoreConfig"></a>
<a id="tocSdestinationcoreconfig"></a>
<a id="tocsdestinationcoreconfig"></a>

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionConfiguration|[DestinationConfiguration](#schemadestinationconfiguration)|true|none|The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.|
|destinationDefinitionId|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|none|
|destinationId|[DestinationId](#schemadestinationid)|false|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_DestinationCreate">DestinationCreate</h2>
<!-- backwards compatibility -->
<a id="schemadestinationcreate"></a>
<a id="schema_DestinationCreate"></a>
<a id="tocSdestinationcreate"></a>
<a id="tocsdestinationcreate"></a>

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionConfiguration|[DestinationConfiguration](#schemadestinationconfiguration)|true|none|The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.|
|destinationDefinitionId|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|none|
|name|string|true|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_DestinationDefinitionCreate">DestinationDefinitionCreate</h2>
<!-- backwards compatibility -->
<a id="schemadestinationdefinitioncreate"></a>
<a id="schema_DestinationDefinitionCreate"></a>
<a id="tocSdestinationdefinitioncreate"></a>
<a id="tocsdestinationdefinitioncreate"></a>

```json
{
  "dockerImageTag": "string",
  "dockerRepository": "string",
  "documentationUrl": "http://example.com",
  "icon": "string",
  "name": "string",
  "resourceRequirements": {
    "default": {
      "cpu_limit": "string",
      "cpu_request": "string",
      "memory_limit": "string",
      "memory_request": "string"
    },
    "jobSpecific": [
      {
        "jobType": "get_spec",
        "resourceRequirements": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dockerImageTag|string|true|none|none|
|dockerRepository|string|true|none|none|
|documentationUrl|string(uri)|true|none|none|
|icon|string|false|none|none|
|name|string|true|none|none|
|resourceRequirements|[ActorDefinitionResourceRequirements](#schemaactordefinitionresourcerequirements)|false|none|actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level.|

<h2 id="tocS_DestinationDefinitionId">DestinationDefinitionId</h2>
<!-- backwards compatibility -->
<a id="schemadestinationdefinitionid"></a>
<a id="schema_DestinationDefinitionId"></a>
<a id="tocSdestinationdefinitionid"></a>
<a id="tocsdestinationdefinitionid"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

<h2 id="tocS_DestinationDefinitionIdRequestBody">DestinationDefinitionIdRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemadestinationdefinitionidrequestbody"></a>
<a id="schema_DestinationDefinitionIdRequestBody"></a>
<a id="tocSdestinationdefinitionidrequestbody"></a>
<a id="tocsdestinationdefinitionidrequestbody"></a>

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationDefinitionId|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|none|

<h2 id="tocS_DestinationDefinitionIdWithWorkspaceId">DestinationDefinitionIdWithWorkspaceId</h2>
<!-- backwards compatibility -->
<a id="schemadestinationdefinitionidwithworkspaceid"></a>
<a id="schema_DestinationDefinitionIdWithWorkspaceId"></a>
<a id="tocSdestinationdefinitionidwithworkspaceid"></a>
<a id="tocsdestinationdefinitionidwithworkspaceid"></a>

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationDefinitionId|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_DestinationDefinitionRead">DestinationDefinitionRead</h2>
<!-- backwards compatibility -->
<a id="schemadestinationdefinitionread"></a>
<a id="schema_DestinationDefinitionRead"></a>
<a id="tocSdestinationdefinitionread"></a>
<a id="tocsdestinationdefinitionread"></a>

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dockerImageTag": "string",
  "dockerRepository": "string",
  "documentationUrl": "http://example.com",
  "icon": "string",
  "name": "string",
  "normalizationConfig": {
    "normalizationIntegrationType": "string",
    "normalizationRepository": "string",
    "normalizationTag": "string",
    "supported": false
  },
  "protocolVersion": "string",
  "releaseDate": "1970-01-01",
  "releaseStage": "alpha",
  "resourceRequirements": {
    "default": {
      "cpu_limit": "string",
      "cpu_request": "string",
      "memory_limit": "string",
      "memory_request": "string"
    },
    "jobSpecific": [
      {
        "jobType": "get_spec",
        "resourceRequirements": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        }
      }
    ]
  },
  "supportsDbt": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationDefinitionId|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|none|
|dockerImageTag|string|true|none|none|
|dockerRepository|string|true|none|none|
|documentationUrl|string(uri)|true|none|none|
|icon|string|false|none|none|
|name|string|true|none|none|
|normalizationConfig|[NormalizationDestinationDefinitionConfig](#schemanormalizationdestinationdefinitionconfig)|true|none|describes a normalization config for destination definition|
|protocolVersion|string|false|none|The Airbyte Protocol version supported by the connector|
|releaseDate|string(date)|false|none|The date when this connector was first released, in yyyy-mm-dd format.|
|releaseStage|[ReleaseStage](#schemareleasestage)|false|none|none|
|resourceRequirements|[ActorDefinitionResourceRequirements](#schemaactordefinitionresourcerequirements)|false|none|actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level.|
|supportsDbt|boolean|true|none|an optional flag indicating whether DBT is used in the normalization. If the flag value is NULL - DBT is not used.|

#### Enumerated Values

|Property|Value|
|---|---|
|releaseStage|alpha|
|releaseStage|beta|
|releaseStage|generally_available|
|releaseStage|custom|

<h2 id="tocS_DestinationDefinitionReadList">DestinationDefinitionReadList</h2>
<!-- backwards compatibility -->
<a id="schemadestinationdefinitionreadlist"></a>
<a id="schema_DestinationDefinitionReadList"></a>
<a id="tocSdestinationdefinitionreadlist"></a>
<a id="tocsdestinationdefinitionreadlist"></a>

```json
{
  "destinationDefinitions": [
    {
      "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "dockerImageTag": "string",
      "dockerRepository": "string",
      "documentationUrl": "http://example.com",
      "icon": "string",
      "name": "string",
      "normalizationConfig": {
        "normalizationIntegrationType": "string",
        "normalizationRepository": "string",
        "normalizationTag": "string",
        "supported": false
      },
      "protocolVersion": "string",
      "releaseDate": "1970-01-01",
      "releaseStage": "alpha",
      "resourceRequirements": {
        "default": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        },
        "jobSpecific": [
          {
            "jobType": "get_spec",
            "resourceRequirements": {
              "cpu_limit": "string",
              "cpu_request": "string",
              "memory_limit": "string",
              "memory_request": "string"
            }
          }
        ]
      },
      "supportsDbt": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationDefinitions|[[DestinationDefinitionRead](#schemadestinationdefinitionread)]|true|none|none|

<h2 id="tocS_DestinationDefinitionSpecification">DestinationDefinitionSpecification</h2>
<!-- backwards compatibility -->
<a id="schemadestinationdefinitionspecification"></a>
<a id="schema_DestinationDefinitionSpecification"></a>
<a id="tocSdestinationdefinitionspecification"></a>
<a id="tocsdestinationdefinitionspecification"></a>

```json
{
  "user": {
    "type": "string"
  }
}
```

The specification for what values are required to configure the destinationDefinition.

<h2 id="tocS_DestinationDefinitionSpecificationRead">DestinationDefinitionSpecificationRead</h2>
<!-- backwards compatibility -->
<a id="schemadestinationdefinitionspecificationread"></a>
<a id="schema_DestinationDefinitionSpecificationRead"></a>
<a id="tocSdestinationdefinitionspecificationread"></a>
<a id="tocsdestinationdefinitionspecificationread"></a>

```json
{
  "advancedAuth": {
    "authFlowType": "oauth2.0",
    "oauthConfigSpecification": {
      "completeOAuthOutputSpecification": null,
      "completeOAuthServerInputSpecification": null,
      "completeOAuthServerOutputSpecification": null,
      "oauthUserInputFromConnectorConfigSpecification": null
    },
    "predicateKey": [
      "string"
    ],
    "predicateValue": "string"
  },
  "authSpecification": {
    "auth_type": "oauth2.0",
    "oauth2Specification": {
      "oauthFlowInitParameters": [
        [
          "string"
        ]
      ],
      "oauthFlowOutputParameters": [
        [
          "string"
        ]
      ],
      "rootObject": [
        "path",
        1
      ]
    }
  },
  "connectionSpecification": {
    "user": {
      "type": "string"
    }
  },
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "documentationUrl": "string",
  "jobInfo": {
    "configId": "string",
    "configType": "check_connection_source",
    "connectorConfigurationUpdated": false,
    "createdAt": 0,
    "endedAt": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "logs": {
      "logLines": [
        "string"
      ]
    },
    "succeeded": true
  },
  "supportedDestinationSyncModes": [
    "append"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advancedAuth|[AdvancedAuth](#schemaadvancedauth)|false|none|none|
|authSpecification|[AuthSpecification](#schemaauthspecification)|false|none|none|
|connectionSpecification|[DestinationDefinitionSpecification](#schemadestinationdefinitionspecification)|false|none|The specification for what values are required to configure the destinationDefinition.|
|destinationDefinitionId|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|none|
|documentationUrl|string|false|none|none|
|jobInfo|[SynchronousJobRead](#schemasynchronousjobread)|true|none|none|
|supportedDestinationSyncModes|[[DestinationSyncMode](#schemadestinationsyncmode)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|supportedDestinationSyncModes|append|
|supportedDestinationSyncModes|overwrite|
|supportedDestinationSyncModes|append_dedup|

<h2 id="tocS_DestinationDefinitionUpdate">DestinationDefinitionUpdate</h2>
<!-- backwards compatibility -->
<a id="schemadestinationdefinitionupdate"></a>
<a id="schema_DestinationDefinitionUpdate"></a>
<a id="tocSdestinationdefinitionupdate"></a>
<a id="tocsdestinationdefinitionupdate"></a>

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dockerImageTag": "string",
  "resourceRequirements": {
    "default": {
      "cpu_limit": "string",
      "cpu_request": "string",
      "memory_limit": "string",
      "memory_request": "string"
    },
    "jobSpecific": [
      {
        "jobType": "get_spec",
        "resourceRequirements": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationDefinitionId|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|none|
|dockerImageTag|string|false|none|none|
|resourceRequirements|[ActorDefinitionResourceRequirements](#schemaactordefinitionresourcerequirements)|false|none|actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level.|

<h2 id="tocS_DestinationId">DestinationId</h2>
<!-- backwards compatibility -->
<a id="schemadestinationid"></a>
<a id="schema_DestinationId"></a>
<a id="tocSdestinationid"></a>
<a id="tocsdestinationid"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

<h2 id="tocS_DestinationIdRequestBody">DestinationIdRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemadestinationidrequestbody"></a>
<a id="schema_DestinationIdRequestBody"></a>
<a id="tocSdestinationidrequestbody"></a>
<a id="tocsdestinationidrequestbody"></a>

```json
{
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationId|[DestinationId](#schemadestinationid)|true|none|none|

<h2 id="tocS_DestinationOauthConsentRequest">DestinationOauthConsentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadestinationoauthconsentrequest"></a>
<a id="schema_DestinationOauthConsentRequest"></a>
<a id="tocSdestinationoauthconsentrequest"></a>
<a id="tocsdestinationoauthconsentrequest"></a>

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "oAuthInputConfiguration": null,
  "redirectUrl": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationDefinitionId|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|none|
|destinationId|[DestinationId](#schemadestinationid)|false|none|none|
|oAuthInputConfiguration|[OAuthConfiguration](#schemaoauthconfiguration)|false|none|The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema.|
|redirectUrl|string|true|none|The url to redirect to after getting the user consent|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_DestinationRead">DestinationRead</h2>
<!-- backwards compatibility -->
<a id="schemadestinationread"></a>
<a id="schema_DestinationRead"></a>
<a id="tocSdestinationread"></a>
<a id="tocsdestinationread"></a>

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationName": "string",
  "icon": "string",
  "name": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionConfiguration|[DestinationConfiguration](#schemadestinationconfiguration)|true|none|The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.|
|destinationDefinitionId|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|none|
|destinationId|[DestinationId](#schemadestinationid)|true|none|none|
|destinationName|string|true|none|none|
|icon|string|false|none|none|
|name|string|true|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_DestinationReadList">DestinationReadList</h2>
<!-- backwards compatibility -->
<a id="schemadestinationreadlist"></a>
<a id="schema_DestinationReadList"></a>
<a id="tocSdestinationreadlist"></a>
<a id="tocsdestinationreadlist"></a>

```json
{
  "destinations": [
    {
      "connectionConfiguration": {
        "user": "charles"
      },
      "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "destinationName": "string",
      "icon": "string",
      "name": "string",
      "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinations|[[DestinationRead](#schemadestinationread)]|true|none|none|

<h2 id="tocS_DestinationSearch">DestinationSearch</h2>
<!-- backwards compatibility -->
<a id="schemadestinationsearch"></a>
<a id="schema_DestinationSearch"></a>
<a id="tocSdestinationsearch"></a>
<a id="tocsdestinationsearch"></a>

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationName": "string",
  "name": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionConfiguration|[DestinationConfiguration](#schemadestinationconfiguration)|false|none|The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.|
|destinationDefinitionId|[DestinationDefinitionId](#schemadestinationdefinitionid)|false|none|none|
|destinationId|[DestinationId](#schemadestinationid)|false|none|none|
|destinationName|string|false|none|none|
|name|string|false|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|false|none|none|

<h2 id="tocS_DestinationSnippetRead">DestinationSnippetRead</h2>
<!-- backwards compatibility -->
<a id="schemadestinationsnippetread"></a>
<a id="schema_DestinationSnippetRead"></a>
<a id="tocSdestinationsnippetread"></a>
<a id="tocsdestinationsnippetread"></a>

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destinationName": "string",
  "icon": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationDefinitionId|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|none|
|destinationId|[DestinationId](#schemadestinationid)|true|none|none|
|destinationName|string|true|none|none|
|icon|string|false|none|none|
|name|string|true|none|none|

<h2 id="tocS_DestinationSyncMode">DestinationSyncMode</h2>
<!-- backwards compatibility -->
<a id="schemadestinationsyncmode"></a>
<a id="schema_DestinationSyncMode"></a>
<a id="tocSdestinationsyncmode"></a>
<a id="tocsdestinationsyncmode"></a>

```json
"append"
```

<h2 id="tocS_DestinationUpdate">DestinationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemadestinationupdate"></a>
<a id="schema_DestinationUpdate"></a>
<a id="tocSdestinationupdate"></a>
<a id="tocsdestinationupdate"></a>

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionConfiguration|[DestinationConfiguration](#schemadestinationconfiguration)|true|none|The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.|
|destinationId|[DestinationId](#schemadestinationid)|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_DiscoverCatalogResult">DiscoverCatalogResult</h2>
<!-- backwards compatibility -->
<a id="schemadiscovercatalogresult"></a>
<a id="schema_DiscoverCatalogResult"></a>
<a id="tocSdiscovercatalogresult"></a>
<a id="tocsdiscovercatalogresult"></a>

```json
{
  "catalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalogId|string(uuid)|true|none|none|

<h2 id="tocS_FieldAdd">FieldAdd</h2>
<!-- backwards compatibility -->
<a id="schemafieldadd"></a>
<a id="schema_FieldAdd"></a>
<a id="tocSfieldadd"></a>
<a id="tocsfieldadd"></a>

```json
{
  "schema": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schema|[FieldSchema](#schemafieldschema)|false|none|JSONSchema representation of the field|

<h2 id="tocS_FieldName">FieldName</h2>
<!-- backwards compatibility -->
<a id="schemafieldname"></a>
<a id="schema_FieldName"></a>
<a id="tocSfieldname"></a>
<a id="tocsfieldname"></a>

```json
[
  "string"
]
```

A field name is a list of strings that form the path to the field.

<h2 id="tocS_FieldRemove">FieldRemove</h2>
<!-- backwards compatibility -->
<a id="schemafieldremove"></a>
<a id="schema_FieldRemove"></a>
<a id="tocSfieldremove"></a>
<a id="tocsfieldremove"></a>

```json
{
  "schema": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schema|[FieldSchema](#schemafieldschema)|false|none|JSONSchema representation of the field|

<h2 id="tocS_FieldSchema">FieldSchema</h2>
<!-- backwards compatibility -->
<a id="schemafieldschema"></a>
<a id="schema_FieldSchema"></a>
<a id="tocSfieldschema"></a>
<a id="tocsfieldschema"></a>

```json
{}
```

JSONSchema representation of the field

<h2 id="tocS_FieldSchemaUpdate">FieldSchemaUpdate</h2>
<!-- backwards compatibility -->
<a id="schemafieldschemaupdate"></a>
<a id="schema_FieldSchemaUpdate"></a>
<a id="tocSfieldschemaupdate"></a>
<a id="tocsfieldschemaupdate"></a>

```json
{
  "newSchema": {},
  "oldSchema": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newSchema|[FieldSchema](#schemafieldschema)|true|none|JSONSchema representation of the field|
|oldSchema|[FieldSchema](#schemafieldschema)|true|none|JSONSchema representation of the field|

<h2 id="tocS_FieldTransform">FieldTransform</h2>
<!-- backwards compatibility -->
<a id="schemafieldtransform"></a>
<a id="schema_FieldTransform"></a>
<a id="tocSfieldtransform"></a>
<a id="tocsfieldtransform"></a>

```json
{
  "addField": {
    "schema": {}
  },
  "breaking": true,
  "fieldName": [
    "string"
  ],
  "removeField": {
    "schema": {}
  },
  "transformType": "add_field",
  "updateFieldSchema": {
    "newSchema": {},
    "oldSchema": {}
  }
}
```

Describes the difference between two Streams.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addField|[FieldAdd](#schemafieldadd)|false|none|none|
|breaking|boolean|true|none|none|
|fieldName|[FieldName](#schemafieldname)|true|none|A field name is a list of strings that form the path to the field.|
|removeField|[FieldRemove](#schemafieldremove)|false|none|none|
|transformType|string|true|none|none|
|updateFieldSchema|[FieldSchemaUpdate](#schemafieldschemaupdate)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|transformType|add_field|
|transformType|remove_field|
|transformType|update_field_schema|

<h2 id="tocS_Geography">Geography</h2>
<!-- backwards compatibility -->
<a id="schemageography"></a>
<a id="schema_Geography"></a>
<a id="tocSgeography"></a>
<a id="tocsgeography"></a>

```json
"auto"
```

<h2 id="tocS_GlobalState">GlobalState</h2>
<!-- backwards compatibility -->
<a id="schemaglobalstate"></a>
<a id="schema_GlobalState"></a>
<a id="tocSglobalstate"></a>
<a id="tocsglobalstate"></a>

```json
{
  "shared_state": {},
  "streamStates": [
    {
      "streamDescriptor": {
        "name": "string",
        "namespace": "string"
      },
      "streamState": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shared_state|[StateBlob](#schemastateblob)|false|none|none|
|streamStates|[[StreamState](#schemastreamstate)]|true|none|none|

<h2 id="tocS_HealthCheckRead">HealthCheckRead</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckread"></a>
<a id="schema_HealthCheckRead"></a>
<a id="tocShealthcheckread"></a>
<a id="tocshealthcheckread"></a>

```json
{
  "available": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|boolean|true|none|none|

<h2 id="tocS_ImportRead">ImportRead</h2>
<!-- backwards compatibility -->
<a id="schemaimportread"></a>
<a id="schema_ImportRead"></a>
<a id="tocSimportread"></a>
<a id="tocsimportread"></a>

```json
{
  "reason": "string",
  "status": "succeeded"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|succeeded|
|status|failed|

<h2 id="tocS_ImportRequestBody">ImportRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemaimportrequestbody"></a>
<a id="schema_ImportRequestBody"></a>
<a id="tocSimportrequestbody"></a>
<a id="tocsimportrequestbody"></a>

```json
{
  "resourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceId|[ResourceId](#schemaresourceid)|true|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_InternalOperationResult">InternalOperationResult</h2>
<!-- backwards compatibility -->
<a id="schemainternaloperationresult"></a>
<a id="schema_InternalOperationResult"></a>
<a id="tocSinternaloperationresult"></a>
<a id="tocsinternaloperationresult"></a>

```json
{
  "succeeded": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|succeeded|boolean|true|none|none|

<h2 id="tocS_InvalidInputExceptionInfo">InvalidInputExceptionInfo</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinputexceptioninfo"></a>
<a id="schema_InvalidInputExceptionInfo"></a>
<a id="tocSinvalidinputexceptioninfo"></a>
<a id="tocsinvalidinputexceptioninfo"></a>

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "validationErrors": [
    {
      "invalidValue": "string",
      "message": "string",
      "propertyPath": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exceptionClassName|string|false|none|none|
|exceptionStack|[string]|false|none|none|
|message|string|true|none|none|
|validationErrors|[[InvalidInputProperty](#schemainvalidinputproperty)]|true|none|none|

<h2 id="tocS_InvalidInputProperty">InvalidInputProperty</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinputproperty"></a>
<a id="schema_InvalidInputProperty"></a>
<a id="tocSinvalidinputproperty"></a>
<a id="tocsinvalidinputproperty"></a>

```json
{
  "invalidValue": "string",
  "message": "string",
  "propertyPath": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invalidValue|string|false|none|none|
|message|string|false|none|none|
|propertyPath|string|true|none|none|

<h2 id="tocS_JobConfigType">JobConfigType</h2>
<!-- backwards compatibility -->
<a id="schemajobconfigtype"></a>
<a id="schema_JobConfigType"></a>
<a id="tocSjobconfigtype"></a>
<a id="tocsjobconfigtype"></a>

```json
"check_connection_source"
```

<h2 id="tocS_JobCreatedAt">JobCreatedAt</h2>
<!-- backwards compatibility -->
<a id="schemajobcreatedat"></a>
<a id="schema_JobCreatedAt"></a>
<a id="tocSjobcreatedat"></a>
<a id="tocsjobcreatedat"></a>

```json
0
```

epoch time of the latest sync job. null if no sync job has taken place.

<h2 id="tocS_JobDebugInfoRead">JobDebugInfoRead</h2>
<!-- backwards compatibility -->
<a id="schemajobdebuginforead"></a>
<a id="schema_JobDebugInfoRead"></a>
<a id="tocSjobdebuginforead"></a>
<a id="tocsjobdebuginforead"></a>

```json
{
  "attempts": [
    {
      "attempt": {
        "bytesSynced": 0,
        "createdAt": 0,
        "endedAt": 0,
        "failureSummary": {
          "failures": [
            {
              "externalMessage": "string",
              "failureOrigin": "source",
              "failureType": "config_error",
              "internalMessage": "string",
              "retryable": true,
              "stacktrace": "string",
              "timestamp": 0
            }
          ],
          "partialSuccess": true
        },
        "id": 0,
        "recordsSynced": 0,
        "status": "running",
        "streamStats": [
          {
            "stats": {
              "bytesEmitted": 0,
              "estimatedBytes": 0,
              "estimatedRecords": 0,
              "recordsCommitted": 0,
              "recordsEmitted": 0,
              "stateMessagesEmitted": 0
            },
            "streamName": "string",
            "streamNamespace": "string"
          }
        ],
        "totalStats": {
          "bytesEmitted": 0,
          "estimatedBytes": 0,
          "estimatedRecords": 0,
          "recordsCommitted": 0,
          "recordsEmitted": 0,
          "stateMessagesEmitted": 0
        },
        "updatedAt": 0
      },
      "logs": {
        "logLines": [
          "string"
        ]
      }
    }
  ],
  "job": {
    "airbyteVersion": "string",
    "configId": "string",
    "configType": "check_connection_source",
    "destinationDefinition": {
      "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "dockerImageTag": "string",
      "dockerRepository": "string",
      "documentationUrl": "http://example.com",
      "icon": "string",
      "name": "string",
      "normalizationConfig": {
        "normalizationIntegrationType": "string",
        "normalizationRepository": "string",
        "normalizationTag": "string",
        "supported": false
      },
      "protocolVersion": "string",
      "releaseDate": "1970-01-01",
      "releaseStage": "alpha",
      "resourceRequirements": {
        "default": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        },
        "jobSpecific": [
          {
            "jobType": "get_spec",
            "resourceRequirements": {
              "cpu_limit": "string",
              "cpu_request": "string",
              "memory_limit": "string",
              "memory_request": "string"
            }
          }
        ]
      },
      "supportsDbt": true
    },
    "id": 0,
    "sourceDefinition": {
      "dockerImageTag": "string",
      "dockerRepository": "string",
      "documentationUrl": "http://example.com",
      "icon": "string",
      "name": "string",
      "protocolVersion": "string",
      "releaseDate": "1970-01-01",
      "releaseStage": "alpha",
      "resourceRequirements": {
        "default": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        },
        "jobSpecific": [
          {
            "jobType": "get_spec",
            "resourceRequirements": {
              "cpu_limit": "string",
              "cpu_request": "string",
              "memory_limit": "string",
              "memory_request": "string"
            }
          }
        ]
      },
      "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sourceType": "api"
    },
    "status": "pending"
  },
  "workflowState": {
    "running": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attempts|[[AttemptInfoRead](#schemaattemptinforead)]|true|none|none|
|job|[JobDebugRead](#schemajobdebugread)|true|none|none|
|workflowState|[WorkflowStateRead](#schemaworkflowstateread)|false|none|none|

<h2 id="tocS_JobDebugRead">JobDebugRead</h2>
<!-- backwards compatibility -->
<a id="schemajobdebugread"></a>
<a id="schema_JobDebugRead"></a>
<a id="tocSjobdebugread"></a>
<a id="tocsjobdebugread"></a>

```json
{
  "airbyteVersion": "string",
  "configId": "string",
  "configType": "check_connection_source",
  "destinationDefinition": {
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dockerImageTag": "string",
    "dockerRepository": "string",
    "documentationUrl": "http://example.com",
    "icon": "string",
    "name": "string",
    "normalizationConfig": {
      "normalizationIntegrationType": "string",
      "normalizationRepository": "string",
      "normalizationTag": "string",
      "supported": false
    },
    "protocolVersion": "string",
    "releaseDate": "1970-01-01",
    "releaseStage": "alpha",
    "resourceRequirements": {
      "default": {
        "cpu_limit": "string",
        "cpu_request": "string",
        "memory_limit": "string",
        "memory_request": "string"
      },
      "jobSpecific": [
        {
          "jobType": "get_spec",
          "resourceRequirements": {
            "cpu_limit": "string",
            "cpu_request": "string",
            "memory_limit": "string",
            "memory_request": "string"
          }
        }
      ]
    },
    "supportsDbt": true
  },
  "id": 0,
  "sourceDefinition": {
    "dockerImageTag": "string",
    "dockerRepository": "string",
    "documentationUrl": "http://example.com",
    "icon": "string",
    "name": "string",
    "protocolVersion": "string",
    "releaseDate": "1970-01-01",
    "releaseStage": "alpha",
    "resourceRequirements": {
      "default": {
        "cpu_limit": "string",
        "cpu_request": "string",
        "memory_limit": "string",
        "memory_request": "string"
      },
      "jobSpecific": [
        {
          "jobType": "get_spec",
          "resourceRequirements": {
            "cpu_limit": "string",
            "cpu_request": "string",
            "memory_limit": "string",
            "memory_request": "string"
          }
        }
      ]
    },
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceType": "api"
  },
  "status": "pending"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|airbyteVersion|string|true|none|none|
|configId|string|true|none|none|
|configType|[JobConfigType](#schemajobconfigtype)|true|none|none|
|destinationDefinition|[DestinationDefinitionRead](#schemadestinationdefinitionread)|true|none|none|
|id|[JobId](#schemajobid)|true|none|none|
|sourceDefinition|[SourceDefinitionRead](#schemasourcedefinitionread)|true|none|none|
|status|[JobStatus](#schemajobstatus)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|configType|check_connection_source|
|configType|check_connection_destination|
|configType|discover_schema|
|configType|get_spec|
|configType|sync|
|configType|reset_connection|
|status|pending|
|status|running|
|status|incomplete|
|status|failed|
|status|succeeded|
|status|cancelled|

<h2 id="tocS_JobId">JobId</h2>
<!-- backwards compatibility -->
<a id="schemajobid"></a>
<a id="schema_JobId"></a>
<a id="tocSjobid"></a>
<a id="tocsjobid"></a>

```json
0
```

<h2 id="tocS_JobIdRequestBody">JobIdRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemajobidrequestbody"></a>
<a id="schema_JobIdRequestBody"></a>
<a id="tocSjobidrequestbody"></a>
<a id="tocsjobidrequestbody"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[JobId](#schemajobid)|true|none|none|

<h2 id="tocS_JobInfoLightRead">JobInfoLightRead</h2>
<!-- backwards compatibility -->
<a id="schemajobinfolightread"></a>
<a id="schema_JobInfoLightRead"></a>
<a id="tocSjobinfolightread"></a>
<a id="tocsjobinfolightread"></a>

```json
{
  "job": {
    "configId": "string",
    "configType": "check_connection_source",
    "createdAt": 0,
    "id": 0,
    "resetConfig": {
      "streamsToReset": [
        {
          "name": "string",
          "namespace": "string"
        }
      ]
    },
    "startedAt": 0,
    "status": "pending",
    "updatedAt": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[JobRead](#schemajobread)|true|none|none|

<h2 id="tocS_JobInfoRead">JobInfoRead</h2>
<!-- backwards compatibility -->
<a id="schemajobinforead"></a>
<a id="schema_JobInfoRead"></a>
<a id="tocSjobinforead"></a>
<a id="tocsjobinforead"></a>

```json
{
  "attempts": [
    {
      "attempt": {
        "bytesSynced": 0,
        "createdAt": 0,
        "endedAt": 0,
        "failureSummary": {
          "failures": [
            {
              "externalMessage": "string",
              "failureOrigin": "source",
              "failureType": "config_error",
              "internalMessage": "string",
              "retryable": true,
              "stacktrace": "string",
              "timestamp": 0
            }
          ],
          "partialSuccess": true
        },
        "id": 0,
        "recordsSynced": 0,
        "status": "running",
        "streamStats": [
          {
            "stats": {
              "bytesEmitted": 0,
              "estimatedBytes": 0,
              "estimatedRecords": 0,
              "recordsCommitted": 0,
              "recordsEmitted": 0,
              "stateMessagesEmitted": 0
            },
            "streamName": "string",
            "streamNamespace": "string"
          }
        ],
        "totalStats": {
          "bytesEmitted": 0,
          "estimatedBytes": 0,
          "estimatedRecords": 0,
          "recordsCommitted": 0,
          "recordsEmitted": 0,
          "stateMessagesEmitted": 0
        },
        "updatedAt": 0
      },
      "logs": {
        "logLines": [
          "string"
        ]
      }
    }
  ],
  "job": {
    "configId": "string",
    "configType": "check_connection_source",
    "createdAt": 0,
    "id": 0,
    "resetConfig": {
      "streamsToReset": [
        {
          "name": "string",
          "namespace": "string"
        }
      ]
    },
    "startedAt": 0,
    "status": "pending",
    "updatedAt": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attempts|[[AttemptInfoRead](#schemaattemptinforead)]|true|none|none|
|job|[JobRead](#schemajobread)|true|none|none|

<h2 id="tocS_JobListRequestBody">JobListRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemajoblistrequestbody"></a>
<a id="schema_JobListRequestBody"></a>
<a id="tocSjoblistrequestbody"></a>
<a id="tocsjoblistrequestbody"></a>

```json
{
  "configId": "string",
  "configTypes": [
    "check_connection_source"
  ],
  "includingJobId": 0,
  "pagination": {
    "pageSize": 0,
    "rowOffset": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configId|string|true|none|none|
|configTypes|[[JobConfigType](#schemajobconfigtype)]|true|none|none|
|includingJobId|[JobId](#schemajobid)|false|none|If the job with this ID exists for the specified connection, returns the number of pages of jobs necessary to include this job. Returns an empty list if this job is specified and cannot be found in this connection.|
|pagination|[Pagination](#schemapagination)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|configTypes|check_connection_source|
|configTypes|check_connection_destination|
|configTypes|discover_schema|
|configTypes|get_spec|
|configTypes|sync|
|configTypes|reset_connection|

<h2 id="tocS_JobOptionalRead">JobOptionalRead</h2>
<!-- backwards compatibility -->
<a id="schemajoboptionalread"></a>
<a id="schema_JobOptionalRead"></a>
<a id="tocSjoboptionalread"></a>
<a id="tocsjoboptionalread"></a>

```json
{
  "job": {
    "configId": "string",
    "configType": "check_connection_source",
    "createdAt": 0,
    "id": 0,
    "resetConfig": {
      "streamsToReset": [
        {
          "name": "string",
          "namespace": "string"
        }
      ]
    },
    "startedAt": 0,
    "status": "pending",
    "updatedAt": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[JobRead](#schemajobread)|false|none|none|

<h2 id="tocS_JobRead">JobRead</h2>
<!-- backwards compatibility -->
<a id="schemajobread"></a>
<a id="schema_JobRead"></a>
<a id="tocSjobread"></a>
<a id="tocsjobread"></a>

```json
{
  "configId": "string",
  "configType": "check_connection_source",
  "createdAt": 0,
  "id": 0,
  "resetConfig": {
    "streamsToReset": [
      {
        "name": "string",
        "namespace": "string"
      }
    ]
  },
  "startedAt": 0,
  "status": "pending",
  "updatedAt": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configId|string|true|none|none|
|configType|[JobConfigType](#schemajobconfigtype)|true|none|none|
|createdAt|integer(int64)|true|none|none|
|id|[JobId](#schemajobid)|true|none|none|
|resetConfig|[ResetConfig](#schemaresetconfig)|false|none|contains information about how a reset was configured. only populated if the job was a reset.|
|startedAt|integer(int64)|false|none|none|
|status|[JobStatus](#schemajobstatus)|true|none|none|
|updatedAt|integer(int64)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|configType|check_connection_source|
|configType|check_connection_destination|
|configType|discover_schema|
|configType|get_spec|
|configType|sync|
|configType|reset_connection|
|status|pending|
|status|running|
|status|incomplete|
|status|failed|
|status|succeeded|
|status|cancelled|

<h2 id="tocS_JobReadList">JobReadList</h2>
<!-- backwards compatibility -->
<a id="schemajobreadlist"></a>
<a id="schema_JobReadList"></a>
<a id="tocSjobreadlist"></a>
<a id="tocsjobreadlist"></a>

```json
{
  "jobs": [
    {
      "attempts": [
        {
          "bytesSynced": 0,
          "createdAt": 0,
          "endedAt": 0,
          "failureSummary": {
            "failures": [
              {
                "externalMessage": "string",
                "failureOrigin": "source",
                "failureType": "config_error",
                "internalMessage": "string",
                "retryable": true,
                "stacktrace": "string",
                "timestamp": 0
              }
            ],
            "partialSuccess": true
          },
          "id": 0,
          "recordsSynced": 0,
          "status": "running",
          "streamStats": [
            {
              "stats": {
                "bytesEmitted": 0,
                "estimatedBytes": 0,
                "estimatedRecords": 0,
                "recordsCommitted": 0,
                "recordsEmitted": 0,
                "stateMessagesEmitted": 0
              },
              "streamName": "string",
              "streamNamespace": "string"
            }
          ],
          "totalStats": {
            "bytesEmitted": 0,
            "estimatedBytes": 0,
            "estimatedRecords": 0,
            "recordsCommitted": 0,
            "recordsEmitted": 0,
            "stateMessagesEmitted": 0
          },
          "updatedAt": 0
        }
      ],
      "job": {
        "configId": "string",
        "configType": "check_connection_source",
        "createdAt": 0,
        "id": 0,
        "resetConfig": {
          "streamsToReset": [
            {
              "name": "string",
              "namespace": "string"
            }
          ]
        },
        "startedAt": 0,
        "status": "pending",
        "updatedAt": 0
      }
    }
  ],
  "totalJobCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|[[JobWithAttemptsRead](#schemajobwithattemptsread)]|true|none|none|
|totalJobCount|integer(int64)|true|none|the total count of jobs for the specified connection|

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
"pending"
```

<h2 id="tocS_JobType">JobType</h2>
<!-- backwards compatibility -->
<a id="schemajobtype"></a>
<a id="schema_JobType"></a>
<a id="tocSjobtype"></a>
<a id="tocsjobtype"></a>

```json
"get_spec"
```

enum that describes the different types of jobs that the platform runs.

<h2 id="tocS_JobTypeResourceLimit">JobTypeResourceLimit</h2>
<!-- backwards compatibility -->
<a id="schemajobtyperesourcelimit"></a>
<a id="schema_JobTypeResourceLimit"></a>
<a id="tocSjobtyperesourcelimit"></a>
<a id="tocsjobtyperesourcelimit"></a>

```json
{
  "jobType": "get_spec",
  "resourceRequirements": {
    "cpu_limit": "string",
    "cpu_request": "string",
    "memory_limit": "string",
    "memory_request": "string"
  }
}
```

sets resource requirements for a specific job type for an actor definition. these values override the default, if both are set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobType|[JobType](#schemajobtype)|true|none|enum that describes the different types of jobs that the platform runs.|
|resourceRequirements|[ResourceRequirements](#schemaresourcerequirements)|true|none|optional resource requirements to run workers (blank for unbounded allocations)|

#### Enumerated Values

|Property|Value|
|---|---|
|jobType|get_spec|
|jobType|check_connection|
|jobType|discover_schema|
|jobType|sync|
|jobType|reset_connection|
|jobType|connection_updater|
|jobType|replicate|

<h2 id="tocS_JobWithAttemptsRead">JobWithAttemptsRead</h2>
<!-- backwards compatibility -->
<a id="schemajobwithattemptsread"></a>
<a id="schema_JobWithAttemptsRead"></a>
<a id="tocSjobwithattemptsread"></a>
<a id="tocsjobwithattemptsread"></a>

```json
{
  "attempts": [
    {
      "bytesSynced": 0,
      "createdAt": 0,
      "endedAt": 0,
      "failureSummary": {
        "failures": [
          {
            "externalMessage": "string",
            "failureOrigin": "source",
            "failureType": "config_error",
            "internalMessage": "string",
            "retryable": true,
            "stacktrace": "string",
            "timestamp": 0
          }
        ],
        "partialSuccess": true
      },
      "id": 0,
      "recordsSynced": 0,
      "status": "running",
      "streamStats": [
        {
          "stats": {
            "bytesEmitted": 0,
            "estimatedBytes": 0,
            "estimatedRecords": 0,
            "recordsCommitted": 0,
            "recordsEmitted": 0,
            "stateMessagesEmitted": 0
          },
          "streamName": "string",
          "streamNamespace": "string"
        }
      ],
      "totalStats": {
        "bytesEmitted": 0,
        "estimatedBytes": 0,
        "estimatedRecords": 0,
        "recordsCommitted": 0,
        "recordsEmitted": 0,
        "stateMessagesEmitted": 0
      },
      "updatedAt": 0
    }
  ],
  "job": {
    "configId": "string",
    "configType": "check_connection_source",
    "createdAt": 0,
    "id": 0,
    "resetConfig": {
      "streamsToReset": [
        {
          "name": "string",
          "namespace": "string"
        }
      ]
    },
    "startedAt": 0,
    "status": "pending",
    "updatedAt": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attempts|[[AttemptRead](#schemaattemptread)]|false|none|none|
|job|[JobRead](#schemajobread)|false|none|none|

<h2 id="tocS_KnownExceptionInfo">KnownExceptionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaknownexceptioninfo"></a>
<a id="schema_KnownExceptionInfo"></a>
<a id="tocSknownexceptioninfo"></a>
<a id="tocsknownexceptioninfo"></a>

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exceptionClassName|string|false|none|none|
|exceptionStack|[string]|false|none|none|
|message|string|true|none|none|
|rootCauseExceptionClassName|string|false|none|none|
|rootCauseExceptionStack|[string]|false|none|none|

<h2 id="tocS_LogRead">LogRead</h2>
<!-- backwards compatibility -->
<a id="schemalogread"></a>
<a id="schema_LogRead"></a>
<a id="tocSlogread"></a>
<a id="tocslogread"></a>

```json
{
  "logLines": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logLines|[string]|true|none|none|

<h2 id="tocS_LogType">LogType</h2>
<!-- backwards compatibility -->
<a id="schemalogtype"></a>
<a id="schema_LogType"></a>
<a id="tocSlogtype"></a>
<a id="tocslogtype"></a>

```json
"server"
```

type/source of logs produced

<h2 id="tocS_LogsRequestBody">LogsRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemalogsrequestbody"></a>
<a id="schema_LogsRequestBody"></a>
<a id="tocSlogsrequestbody"></a>
<a id="tocslogsrequestbody"></a>

```json
{
  "logType": "server"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logType|[LogType](#schemalogtype)|true|none|type/source of logs produced|

#### Enumerated Values

|Property|Value|
|---|---|
|logType|server|
|logType|scheduler|

<h2 id="tocS_NamespaceDefinitionType">NamespaceDefinitionType</h2>
<!-- backwards compatibility -->
<a id="schemanamespacedefinitiontype"></a>
<a id="schema_NamespaceDefinitionType"></a>
<a id="tocSnamespacedefinitiontype"></a>
<a id="tocsnamespacedefinitiontype"></a>

```json
"source"
```

Method used for computing final namespace in destination

<h2 id="tocS_NonBreakingChangesPreference">NonBreakingChangesPreference</h2>
<!-- backwards compatibility -->
<a id="schemanonbreakingchangespreference"></a>
<a id="schema_NonBreakingChangesPreference"></a>
<a id="tocSnonbreakingchangespreference"></a>
<a id="tocsnonbreakingchangespreference"></a>

```json
"ignore"
```

<h2 id="tocS_NormalizationDestinationDefinitionConfig">NormalizationDestinationDefinitionConfig</h2>
<!-- backwards compatibility -->
<a id="schemanormalizationdestinationdefinitionconfig"></a>
<a id="schema_NormalizationDestinationDefinitionConfig"></a>
<a id="tocSnormalizationdestinationdefinitionconfig"></a>
<a id="tocsnormalizationdestinationdefinitionconfig"></a>

```json
{
  "normalizationIntegrationType": "string",
  "normalizationRepository": "string",
  "normalizationTag": "string",
  "supported": false
}
```

describes a normalization config for destination definition

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizationIntegrationType|string|false|none|a field indicating the type of integration dialect to use for normalization.|
|normalizationRepository|string|false|none|a field indicating the name of the repository to be used for normalization. If the value of the flag is NULL - normalization is not used.|
|normalizationTag|string|false|none|a field indicating the tag of the docker repository to be used for normalization.|
|supported|boolean|true|none|whether the destination definition supports normalization.|

<h2 id="tocS_NotFoundKnownExceptionInfo">NotFoundKnownExceptionInfo</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundknownexceptioninfo"></a>
<a id="schema_NotFoundKnownExceptionInfo"></a>
<a id="tocSnotfoundknownexceptioninfo"></a>
<a id="tocsnotfoundknownexceptioninfo"></a>

```json
{
  "exceptionClassName": "string",
  "exceptionStack": [
    "string"
  ],
  "id": "string",
  "message": "string",
  "rootCauseExceptionClassName": "string",
  "rootCauseExceptionStack": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exceptionClassName|string|false|none|none|
|exceptionStack|[string]|false|none|none|
|id|string|false|none|none|
|message|string|true|none|none|
|rootCauseExceptionClassName|string|false|none|none|
|rootCauseExceptionStack|[string]|false|none|none|

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "customerioConfiguration": {},
  "notificationType": "slack",
  "sendOnFailure": true,
  "sendOnSuccess": false,
  "slackConfiguration": {
    "webhook": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerioConfiguration|[CustomerioNotificationConfiguration](#schemacustomerionotificationconfiguration)|false|none|none|
|notificationType|[NotificationType](#schemanotificationtype)|true|none|none|
|sendOnFailure|boolean|true|none|none|
|sendOnSuccess|boolean|true|none|none|
|slackConfiguration|[SlackNotificationConfiguration](#schemaslacknotificationconfiguration)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|notificationType|slack|
|notificationType|customerio|

<h2 id="tocS_NotificationRead">NotificationRead</h2>
<!-- backwards compatibility -->
<a id="schemanotificationread"></a>
<a id="schema_NotificationRead"></a>
<a id="tocSnotificationread"></a>
<a id="tocsnotificationread"></a>

```json
{
  "message": "string",
  "status": "succeeded"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|succeeded|
|status|failed|

<h2 id="tocS_NotificationType">NotificationType</h2>
<!-- backwards compatibility -->
<a id="schemanotificationtype"></a>
<a id="schema_NotificationType"></a>
<a id="tocSnotificationtype"></a>
<a id="tocsnotificationtype"></a>

```json
"slack"
```

<h2 id="tocS_OAuth2Specification">OAuth2Specification</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2specification"></a>
<a id="schema_OAuth2Specification"></a>
<a id="tocSoauth2specification"></a>
<a id="tocsoauth2specification"></a>

```json
{
  "oauthFlowInitParameters": [
    [
      "string"
    ]
  ],
  "oauthFlowOutputParameters": [
    [
      "string"
    ]
  ],
  "rootObject": [
    "path",
    1
  ]
}
```

An object containing any metadata needed to describe this connector's Oauth flow

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oauthFlowInitParameters|[[string]]|true|none|Pointers to the fields in the rootObject needed to obtain the initial refresh/access tokens for the OAuth flow. Each inner array represents the path in the rootObject of the referenced field. For example. Assume the rootObject contains params 'app_secret', 'app_id' which are needed to get the initial refresh token. If they are not nested in the rootObject, then the array would look like this [['app_secret'], ['app_id']] If they are nested inside an object called 'auth_params' then this array would be [['auth_params', 'app_secret'], ['auth_params', 'app_id']]|
|oauthFlowOutputParameters|[[string]]|true|none|Pointers to the fields in the rootObject which can be populated from successfully completing the oauth flow using the init parameters. This is typically a refresh/access token. Each inner array represents the path in the rootObject of the referenced field.|
|rootObject|[object]|true|none|A list of strings representing a pointer to the root object which contains any oauth parameters in the ConnectorSpecification.<br>Examples:<br>if oauth parameters were contained inside the top level, rootObject=[] If they were nested inside another object {'credentials': {'app_id' etc...}, rootObject=['credentials'] If they were inside a oneOf {'switch': {oneOf: [{client_id...}, {non_oauth_param]}},  rootObject=['switch', 0] |

<h2 id="tocS_OAuthConfigSpecification">OAuthConfigSpecification</h2>
<!-- backwards compatibility -->
<a id="schemaoauthconfigspecification"></a>
<a id="schema_OAuthConfigSpecification"></a>
<a id="tocSoauthconfigspecification"></a>
<a id="tocsoauthconfigspecification"></a>

```json
{
  "completeOAuthOutputSpecification": null,
  "completeOAuthServerInputSpecification": null,
  "completeOAuthServerOutputSpecification": null,
  "oauthUserInputFromConnectorConfigSpecification": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completeOAuthOutputSpecification|[OAuthConfiguration](#schemaoauthconfiguration)|false|none|OAuth specific blob. This is a Json Schema used to validate Json configurations produced by the OAuth flows as they are<br>returned by the distant OAuth APIs.<br>Must be a valid JSON describing the fields to merge back to `ConnectorSpecification.connectionSpecification`.<br>For each field, a special annotation `path_in_connector_config` can be specified to determine where to merge it,<br><br>Examples:<br><br>    complete_oauth_output_specification={<br>      refresh_token: {<br>        type: string,<br>        path_in_connector_config: ['credentials', 'refresh_token']<br>      }<br>    }|
|completeOAuthServerInputSpecification|[OAuthConfiguration](#schemaoauthconfiguration)|false|none|OAuth specific blob. This is a Json Schema used to validate Json configurations persisted as Airbyte Server configurations.<br>Must be a valid non-nested JSON describing additional fields configured by the Airbyte Instance or Workspace Admins to be used by the<br>server when completing an OAuth flow (typically exchanging an auth code for refresh token).<br><br>Examples:<br><br>    complete_oauth_server_input_specification={<br>      client_id: {<br>        type: string<br>      },<br>      client_secret: {<br>        type: string<br>      }<br>    }|
|completeOAuthServerOutputSpecification|[OAuthConfiguration](#schemaoauthconfiguration)|false|none|OAuth specific blob. This is a Json Schema used to validate Json configurations persisted as Airbyte Server configurations that<br>also need to be merged back into the connector configuration at runtime.<br>This is a subset configuration of `complete_oauth_server_input_specification` that filters fields out to retain only the ones that<br>are necessary for the connector to function with OAuth. (some fields could be used during oauth flows but not needed afterwards, therefore<br>they would be listed in the `complete_oauth_server_input_specification` but not `complete_oauth_server_output_specification`)<br>Must be a valid non-nested JSON describing additional fields configured by the Airbyte Instance or Workspace Admins to be used by the<br>connector when using OAuth flow APIs.<br>These fields are to be merged back to `ConnectorSpecification.connectionSpecification`.<br>For each field, a special annotation `path_in_connector_config` can be specified to determine where to merge it,<br><br>Examples:<br><br>      complete_oauth_server_output_specification={<br>        client_id: {<br>          type: string,<br>          path_in_connector_config: ['credentials', 'client_id']<br>        },<br>        client_secret: {<br>          type: string,<br>          path_in_connector_config: ['credentials', 'client_secret']<br>        }<br>      }|
|oauthUserInputFromConnectorConfigSpecification|[OAuthConfiguration](#schemaoauthconfiguration)|false|none|OAuth specific blob. This is a Json Schema used to validate Json configurations used as input to OAuth.<br>Must be a valid non-nested JSON that refers to properties from ConnectorSpecification.connectionSpecification<br>using special annotation 'path_in_connector_config'.<br>These are input values the user is entering through the UI to authenticate to the connector, that might also shared<br>as inputs for syncing data via the connector.<br><br>Examples:<br><br>if no connector values is shared during oauth flow, oauth_user_input_from_connector_config_specification=[]<br>if connector values such as 'app_id' inside the top level are used to generate the API url for the oauth flow,<br>  oauth_user_input_from_connector_config_specification={<br>    app_id: {<br>      type: string<br>      path_in_connector_config: ['app_id']<br>    }<br>  }<br>if connector values such as 'info.app_id' nested inside another object are used to generate the API url for the oauth flow,<br>  oauth_user_input_from_connector_config_specification={<br>    app_id: {<br>      type: string<br>      path_in_connector_config: ['info', 'app_id']<br>    }<br>  }|

<h2 id="tocS_OAuthConfiguration">OAuthConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaoauthconfiguration"></a>
<a id="schema_OAuthConfiguration"></a>
<a id="tocSoauthconfiguration"></a>
<a id="tocsoauthconfiguration"></a>

```json
null
```

The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema.

<h2 id="tocS_OAuthConsentRead">OAuthConsentRead</h2>
<!-- backwards compatibility -->
<a id="schemaoauthconsentread"></a>
<a id="schema_OAuthConsentRead"></a>
<a id="tocSoauthconsentread"></a>
<a id="tocsoauthconsentread"></a>

```json
{
  "consentUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentUrl|string|true|none|none|

<h2 id="tocS_OAuthInputConfiguration">OAuthInputConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaoauthinputconfiguration"></a>
<a id="schema_OAuthInputConfiguration"></a>
<a id="tocSoauthinputconfiguration"></a>
<a id="tocsoauthinputconfiguration"></a>

```json
null
```

The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema.

<h2 id="tocS_OperationCreate">OperationCreate</h2>
<!-- backwards compatibility -->
<a id="schemaoperationcreate"></a>
<a id="schema_OperationCreate"></a>
<a id="tocSoperationcreate"></a>
<a id="tocsoperationcreate"></a>

```json
{
  "name": "string",
  "operatorConfiguration": {
    "dbt": {
      "dbtArguments": "string",
      "dockerImage": "string",
      "gitRepoBranch": "string",
      "gitRepoUrl": "string"
    },
    "normalization": {
      "option": "basic"
    },
    "operatorType": "normalization",
    "webhook": {
      "dbtCloud": {
        "accountId": 0,
        "jobId": 0
      },
      "executionBody": "string",
      "executionUrl": "string",
      "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "webhookType": "dbtCloud"
    }
  },
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|operatorConfiguration|[OperatorConfiguration](#schemaoperatorconfiguration)|true|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_OperationId">OperationId</h2>
<!-- backwards compatibility -->
<a id="schemaoperationid"></a>
<a id="schema_OperationId"></a>
<a id="tocSoperationid"></a>
<a id="tocsoperationid"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

<h2 id="tocS_OperationIdRequestBody">OperationIdRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemaoperationidrequestbody"></a>
<a id="schema_OperationIdRequestBody"></a>
<a id="tocSoperationidrequestbody"></a>
<a id="tocsoperationidrequestbody"></a>

```json
{
  "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operationId|[OperationId](#schemaoperationid)|true|none|none|

<h2 id="tocS_OperationRead">OperationRead</h2>
<!-- backwards compatibility -->
<a id="schemaoperationread"></a>
<a id="schema_OperationRead"></a>
<a id="tocSoperationread"></a>
<a id="tocsoperationread"></a>

```json
{
  "name": "string",
  "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "operatorConfiguration": {
    "dbt": {
      "dbtArguments": "string",
      "dockerImage": "string",
      "gitRepoBranch": "string",
      "gitRepoUrl": "string"
    },
    "normalization": {
      "option": "basic"
    },
    "operatorType": "normalization",
    "webhook": {
      "dbtCloud": {
        "accountId": 0,
        "jobId": 0
      },
      "executionBody": "string",
      "executionUrl": "string",
      "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "webhookType": "dbtCloud"
    }
  },
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|operationId|[OperationId](#schemaoperationid)|true|none|none|
|operatorConfiguration|[OperatorConfiguration](#schemaoperatorconfiguration)|true|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_OperationReadList">OperationReadList</h2>
<!-- backwards compatibility -->
<a id="schemaoperationreadlist"></a>
<a id="schema_OperationReadList"></a>
<a id="tocSoperationreadlist"></a>
<a id="tocsoperationreadlist"></a>

```json
{
  "operations": [
    {
      "name": "string",
      "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "operatorConfiguration": {
        "dbt": {
          "dbtArguments": "string",
          "dockerImage": "string",
          "gitRepoBranch": "string",
          "gitRepoUrl": "string"
        },
        "normalization": {
          "option": "basic"
        },
        "operatorType": "normalization",
        "webhook": {
          "dbtCloud": {
            "accountId": 0,
            "jobId": 0
          },
          "executionBody": "string",
          "executionUrl": "string",
          "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "webhookType": "dbtCloud"
        }
      },
      "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|[[OperationRead](#schemaoperationread)]|true|none|none|

<h2 id="tocS_OperationUpdate">OperationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaoperationupdate"></a>
<a id="schema_OperationUpdate"></a>
<a id="tocSoperationupdate"></a>
<a id="tocsoperationupdate"></a>

```json
{
  "name": "string",
  "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "operatorConfiguration": {
    "dbt": {
      "dbtArguments": "string",
      "dockerImage": "string",
      "gitRepoBranch": "string",
      "gitRepoUrl": "string"
    },
    "normalization": {
      "option": "basic"
    },
    "operatorType": "normalization",
    "webhook": {
      "dbtCloud": {
        "accountId": 0,
        "jobId": 0
      },
      "executionBody": "string",
      "executionUrl": "string",
      "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "webhookType": "dbtCloud"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|operationId|[OperationId](#schemaoperationid)|true|none|none|
|operatorConfiguration|[OperatorConfiguration](#schemaoperatorconfiguration)|true|none|none|

<h2 id="tocS_OperatorConfiguration">OperatorConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaoperatorconfiguration"></a>
<a id="schema_OperatorConfiguration"></a>
<a id="tocSoperatorconfiguration"></a>
<a id="tocsoperatorconfiguration"></a>

```json
{
  "dbt": {
    "dbtArguments": "string",
    "dockerImage": "string",
    "gitRepoBranch": "string",
    "gitRepoUrl": "string"
  },
  "normalization": {
    "option": "basic"
  },
  "operatorType": "normalization",
  "webhook": {
    "dbtCloud": {
      "accountId": 0,
      "jobId": 0
    },
    "executionBody": "string",
    "executionUrl": "string",
    "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "webhookType": "dbtCloud"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dbt|[OperatorDbt](#schemaoperatordbt)|false|none|none|
|normalization|[OperatorNormalization](#schemaoperatornormalization)|false|none|none|
|operatorType|[OperatorType](#schemaoperatortype)|true|none|none|
|webhook|[OperatorWebhook](#schemaoperatorwebhook)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operatorType|normalization|
|operatorType|dbt|
|operatorType|webhook|

<h2 id="tocS_OperatorDbt">OperatorDbt</h2>
<!-- backwards compatibility -->
<a id="schemaoperatordbt"></a>
<a id="schema_OperatorDbt"></a>
<a id="tocSoperatordbt"></a>
<a id="tocsoperatordbt"></a>

```json
{
  "dbtArguments": "string",
  "dockerImage": "string",
  "gitRepoBranch": "string",
  "gitRepoUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dbtArguments|string|false|none|none|
|dockerImage|string|false|none|none|
|gitRepoBranch|string|false|none|none|
|gitRepoUrl|string|true|none|none|

<h2 id="tocS_OperatorNormalization">OperatorNormalization</h2>
<!-- backwards compatibility -->
<a id="schemaoperatornormalization"></a>
<a id="schema_OperatorNormalization"></a>
<a id="tocSoperatornormalization"></a>
<a id="tocsoperatornormalization"></a>

```json
{
  "option": "basic"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|option|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|option|basic|

<h2 id="tocS_OperatorType">OperatorType</h2>
<!-- backwards compatibility -->
<a id="schemaoperatortype"></a>
<a id="schema_OperatorType"></a>
<a id="tocSoperatortype"></a>
<a id="tocsoperatortype"></a>

```json
"normalization"
```

<h2 id="tocS_OperatorWebhook">OperatorWebhook</h2>
<!-- backwards compatibility -->
<a id="schemaoperatorwebhook"></a>
<a id="schema_OperatorWebhook"></a>
<a id="tocSoperatorwebhook"></a>
<a id="tocsoperatorwebhook"></a>

```json
{
  "dbtCloud": {
    "accountId": 0,
    "jobId": 0
  },
  "executionBody": "string",
  "executionUrl": "string",
  "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "webhookType": "dbtCloud"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dbtCloud|object|false|none|none|
|executionBody|string|false|none|**Deprecated.** DEPRECATED. Populate dbtCloud instead.|
|executionUrl|string|false|none|**Deprecated.** DEPRECATED. Populate dbtCloud instead.|
|webhookConfigId|string(uuid)|false|none|The id of the webhook configs to use from the workspace.|
|webhookType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|webhookType|dbtCloud|

<h2 id="tocS_Pagination">Pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_Pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "pageSize": 0,
  "rowOffset": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageSize|integer|false|none|none|
|rowOffset|integer|false|none|none|

<h2 id="tocS_PrivateDestinationDefinitionRead">PrivateDestinationDefinitionRead</h2>
<!-- backwards compatibility -->
<a id="schemaprivatedestinationdefinitionread"></a>
<a id="schema_PrivateDestinationDefinitionRead"></a>
<a id="tocSprivatedestinationdefinitionread"></a>
<a id="tocsprivatedestinationdefinitionread"></a>

```json
{
  "destinationDefinition": {
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dockerImageTag": "string",
    "dockerRepository": "string",
    "documentationUrl": "http://example.com",
    "icon": "string",
    "name": "string",
    "normalizationConfig": {
      "normalizationIntegrationType": "string",
      "normalizationRepository": "string",
      "normalizationTag": "string",
      "supported": false
    },
    "protocolVersion": "string",
    "releaseDate": "1970-01-01",
    "releaseStage": "alpha",
    "resourceRequirements": {
      "default": {
        "cpu_limit": "string",
        "cpu_request": "string",
        "memory_limit": "string",
        "memory_request": "string"
      },
      "jobSpecific": [
        {
          "jobType": "get_spec",
          "resourceRequirements": {
            "cpu_limit": "string",
            "cpu_request": "string",
            "memory_limit": "string",
            "memory_request": "string"
          }
        }
      ]
    },
    "supportsDbt": true
  },
  "granted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationDefinition|[DestinationDefinitionRead](#schemadestinationdefinitionread)|true|none|none|
|granted|boolean|true|none|none|

<h2 id="tocS_PrivateDestinationDefinitionReadList">PrivateDestinationDefinitionReadList</h2>
<!-- backwards compatibility -->
<a id="schemaprivatedestinationdefinitionreadlist"></a>
<a id="schema_PrivateDestinationDefinitionReadList"></a>
<a id="tocSprivatedestinationdefinitionreadlist"></a>
<a id="tocsprivatedestinationdefinitionreadlist"></a>

```json
{
  "destinationDefinitions": [
    {
      "destinationDefinition": {
        "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "dockerImageTag": "string",
        "dockerRepository": "string",
        "documentationUrl": "http://example.com",
        "icon": "string",
        "name": "string",
        "normalizationConfig": {
          "normalizationIntegrationType": "string",
          "normalizationRepository": "string",
          "normalizationTag": "string",
          "supported": false
        },
        "protocolVersion": "string",
        "releaseDate": "1970-01-01",
        "releaseStage": "alpha",
        "resourceRequirements": {
          "default": {
            "cpu_limit": "string",
            "cpu_request": "string",
            "memory_limit": "string",
            "memory_request": "string"
          },
          "jobSpecific": [
            {
              "jobType": "get_spec",
              "resourceRequirements": {
                "cpu_limit": "string",
                "cpu_request": "string",
                "memory_limit": "string",
                "memory_request": "string"
              }
            }
          ]
        },
        "supportsDbt": true
      },
      "granted": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationDefinitions|[[PrivateDestinationDefinitionRead](#schemaprivatedestinationdefinitionread)]|true|none|none|

<h2 id="tocS_PrivateSourceDefinitionRead">PrivateSourceDefinitionRead</h2>
<!-- backwards compatibility -->
<a id="schemaprivatesourcedefinitionread"></a>
<a id="schema_PrivateSourceDefinitionRead"></a>
<a id="tocSprivatesourcedefinitionread"></a>
<a id="tocsprivatesourcedefinitionread"></a>

```json
{
  "granted": true,
  "sourceDefinition": {
    "dockerImageTag": "string",
    "dockerRepository": "string",
    "documentationUrl": "http://example.com",
    "icon": "string",
    "name": "string",
    "protocolVersion": "string",
    "releaseDate": "1970-01-01",
    "releaseStage": "alpha",
    "resourceRequirements": {
      "default": {
        "cpu_limit": "string",
        "cpu_request": "string",
        "memory_limit": "string",
        "memory_request": "string"
      },
      "jobSpecific": [
        {
          "jobType": "get_spec",
          "resourceRequirements": {
            "cpu_limit": "string",
            "cpu_request": "string",
            "memory_limit": "string",
            "memory_request": "string"
          }
        }
      ]
    },
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceType": "api"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|granted|boolean|true|none|none|
|sourceDefinition|[SourceDefinitionRead](#schemasourcedefinitionread)|true|none|none|

<h2 id="tocS_PrivateSourceDefinitionReadList">PrivateSourceDefinitionReadList</h2>
<!-- backwards compatibility -->
<a id="schemaprivatesourcedefinitionreadlist"></a>
<a id="schema_PrivateSourceDefinitionReadList"></a>
<a id="tocSprivatesourcedefinitionreadlist"></a>
<a id="tocsprivatesourcedefinitionreadlist"></a>

```json
{
  "sourceDefinitions": [
    {
      "granted": true,
      "sourceDefinition": {
        "dockerImageTag": "string",
        "dockerRepository": "string",
        "documentationUrl": "http://example.com",
        "icon": "string",
        "name": "string",
        "protocolVersion": "string",
        "releaseDate": "1970-01-01",
        "releaseStage": "alpha",
        "resourceRequirements": {
          "default": {
            "cpu_limit": "string",
            "cpu_request": "string",
            "memory_limit": "string",
            "memory_request": "string"
          },
          "jobSpecific": [
            {
              "jobType": "get_spec",
              "resourceRequirements": {
                "cpu_limit": "string",
                "cpu_request": "string",
                "memory_limit": "string",
                "memory_request": "string"
              }
            }
          ]
        },
        "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "sourceType": "api"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceDefinitions|[[PrivateSourceDefinitionRead](#schemaprivatesourcedefinitionread)]|true|none|none|

<h2 id="tocS_ReleaseStage">ReleaseStage</h2>
<!-- backwards compatibility -->
<a id="schemareleasestage"></a>
<a id="schema_ReleaseStage"></a>
<a id="tocSreleasestage"></a>
<a id="tocsreleasestage"></a>

```json
"alpha"
```

<h2 id="tocS_ResetConfig">ResetConfig</h2>
<!-- backwards compatibility -->
<a id="schemaresetconfig"></a>
<a id="schema_ResetConfig"></a>
<a id="tocSresetconfig"></a>
<a id="tocsresetconfig"></a>

```json
{
  "streamsToReset": [
    {
      "name": "string",
      "namespace": "string"
    }
  ]
}
```

contains information about how a reset was configured. only populated if the job was a reset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|streamsToReset|[[StreamDescriptor](#schemastreamdescriptor)]|false|none|none|

<h2 id="tocS_ResourceId">ResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

<h2 id="tocS_ResourceRequirements">ResourceRequirements</h2>
<!-- backwards compatibility -->
<a id="schemaresourcerequirements"></a>
<a id="schema_ResourceRequirements"></a>
<a id="tocSresourcerequirements"></a>
<a id="tocsresourcerequirements"></a>

```json
{
  "cpu_limit": "string",
  "cpu_request": "string",
  "memory_limit": "string",
  "memory_request": "string"
}
```

optional resource requirements to run workers (blank for unbounded allocations)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpu_limit|string|false|none|none|
|cpu_request|string|false|none|none|
|memory_limit|string|false|none|none|
|memory_request|string|false|none|none|

<h2 id="tocS_SaveAttemptSyncConfigRequestBody">SaveAttemptSyncConfigRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemasaveattemptsyncconfigrequestbody"></a>
<a id="schema_SaveAttemptSyncConfigRequestBody"></a>
<a id="tocSsaveattemptsyncconfigrequestbody"></a>
<a id="tocssaveattemptsyncconfigrequestbody"></a>

```json
{
  "attemptNumber": 0,
  "jobId": 0,
  "syncConfig": {
    "destinationConfiguration": {
      "user": "charles"
    },
    "sourceConfiguration": {
      "user": "charles"
    },
    "state": {
      "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "globalState": {
        "shared_state": {},
        "streamStates": [
          {
            "streamDescriptor": {
              "name": "string",
              "namespace": "string"
            },
            "streamState": {}
          }
        ]
      },
      "state": {},
      "stateType": "global",
      "streamState": [
        {
          "streamDescriptor": {
            "name": "string",
            "namespace": "string"
          },
          "streamState": {}
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attemptNumber|[AttemptNumber](#schemaattemptnumber)|true|none|none|
|jobId|[JobId](#schemajobid)|true|none|none|
|syncConfig|[AttemptSyncConfig](#schemaattemptsyncconfig)|true|none|none|

<h2 id="tocS_SaveStatsRequestBody">SaveStatsRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemasavestatsrequestbody"></a>
<a id="schema_SaveStatsRequestBody"></a>
<a id="tocSsavestatsrequestbody"></a>
<a id="tocssavestatsrequestbody"></a>

```json
{
  "attemptNumber": 0,
  "jobId": 0,
  "stats": {
    "bytesEmitted": 0,
    "estimatedBytes": 0,
    "estimatedRecords": 0,
    "recordsCommitted": 0,
    "recordsEmitted": 0,
    "stateMessagesEmitted": 0
  },
  "streamStats": [
    {
      "stats": {
        "bytesEmitted": 0,
        "estimatedBytes": 0,
        "estimatedRecords": 0,
        "recordsCommitted": 0,
        "recordsEmitted": 0,
        "stateMessagesEmitted": 0
      },
      "streamName": "string",
      "streamNamespace": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attemptNumber|[AttemptNumber](#schemaattemptnumber)|true|none|none|
|jobId|[JobId](#schemajobid)|true|none|none|
|stats|[AttemptStats](#schemaattemptstats)|true|none|none|
|streamStats|[[AttemptStreamStats](#schemaattemptstreamstats)]|false|none|none|

<h2 id="tocS_SchemaChange">SchemaChange</h2>
<!-- backwards compatibility -->
<a id="schemaschemachange"></a>
<a id="schema_SchemaChange"></a>
<a id="tocSschemachange"></a>
<a id="tocsschemachange"></a>

```json
"no_change"
```

<h2 id="tocS_SelectedFieldInfo">SelectedFieldInfo</h2>
<!-- backwards compatibility -->
<a id="schemaselectedfieldinfo"></a>
<a id="schema_SelectedFieldInfo"></a>
<a id="tocSselectedfieldinfo"></a>
<a id="tocsselectedfieldinfo"></a>

```json
{
  "fieldPath": [
    "string"
  ]
}
```

Path to a field/column/property in a stream to be selected. For example, if the field to be selected is a database column called "foo", this will be ["foo"]. Use multiple path elements for nested schemas.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldPath|[string]|false|none|none|

<h2 id="tocS_SetInstancewideDestinationOauthParamsRequestBody">SetInstancewideDestinationOauthParamsRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemasetinstancewidedestinationoauthparamsrequestbody"></a>
<a id="schema_SetInstancewideDestinationOauthParamsRequestBody"></a>
<a id="tocSsetinstancewidedestinationoauthparamsrequestbody"></a>
<a id="tocssetinstancewidedestinationoauthparamsrequestbody"></a>

```json
{
  "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "params": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationDefinitionId|[DestinationDefinitionId](#schemadestinationdefinitionid)|true|none|none|
|params|object|true|none|none|

<h2 id="tocS_SetInstancewideSourceOauthParamsRequestBody">SetInstancewideSourceOauthParamsRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemasetinstancewidesourceoauthparamsrequestbody"></a>
<a id="schema_SetInstancewideSourceOauthParamsRequestBody"></a>
<a id="tocSsetinstancewidesourceoauthparamsrequestbody"></a>
<a id="tocssetinstancewidesourceoauthparamsrequestbody"></a>

```json
{
  "params": {},
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|params|object|true|none|none|
|sourceDefinitionId|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|none|

<h2 id="tocS_SetWorkflowInAttemptRequestBody">SetWorkflowInAttemptRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemasetworkflowinattemptrequestbody"></a>
<a id="schema_SetWorkflowInAttemptRequestBody"></a>
<a id="tocSsetworkflowinattemptrequestbody"></a>
<a id="tocssetworkflowinattemptrequestbody"></a>

```json
{
  "attemptNumber": 0,
  "jobId": 0,
  "processingTaskQueue": "",
  "workflowId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attemptNumber|[AttemptNumber](#schemaattemptnumber)|true|none|none|
|jobId|[JobId](#schemajobid)|true|none|none|
|processingTaskQueue|string|false|none|none|
|workflowId|[WorkflowId](#schemaworkflowid)|true|none|none|

<h2 id="tocS_SlackNotificationConfiguration">SlackNotificationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaslacknotificationconfiguration"></a>
<a id="schema_SlackNotificationConfiguration"></a>
<a id="tocSslacknotificationconfiguration"></a>
<a id="tocsslacknotificationconfiguration"></a>

```json
{
  "webhook": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook|string|true|none|none|

<h2 id="tocS_SlugRequestBody">SlugRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemaslugrequestbody"></a>
<a id="schema_SlugRequestBody"></a>
<a id="tocSslugrequestbody"></a>
<a id="tocsslugrequestbody"></a>

```json
{
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|true|none|none|

<h2 id="tocS_SourceAuthSpecification">SourceAuthSpecification</h2>
<!-- backwards compatibility -->
<a id="schemasourceauthspecification"></a>
<a id="schema_SourceAuthSpecification"></a>
<a id="tocSsourceauthspecification"></a>
<a id="tocssourceauthspecification"></a>

```json
{
  "auth_type": "oauth2.0",
  "oauth2Specification": {
    "oauthFlowInitParameters": [
      [
        "string"
      ]
    ],
    "oauthFlowOutputParameters": [
      [
        "string"
      ]
    ],
    "rootObject": [
      "path",
      1
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_type|string|false|none|none|
|oauth2Specification|[OAuth2Specification](#schemaoauth2specification)|false|none|An object containing any metadata needed to describe this connector's Oauth flow|

#### Enumerated Values

|Property|Value|
|---|---|
|auth_type|oauth2.0|

<h2 id="tocS_SourceCloneConfiguration">SourceCloneConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasourcecloneconfiguration"></a>
<a id="schema_SourceCloneConfiguration"></a>
<a id="tocSsourcecloneconfiguration"></a>
<a id="tocssourcecloneconfiguration"></a>

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionConfiguration|[SourceConfiguration](#schemasourceconfiguration)|false|none|The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.|
|name|string|false|none|none|

<h2 id="tocS_SourceCloneRequestBody">SourceCloneRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemasourceclonerequestbody"></a>
<a id="schema_SourceCloneRequestBody"></a>
<a id="tocSsourceclonerequestbody"></a>
<a id="tocssourceclonerequestbody"></a>

```json
{
  "sourceCloneId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceConfiguration": {
    "connectionConfiguration": {
      "user": "charles"
    },
    "name": "string"
  }
}
```

The values required to configure the source. The schema for this should have an id of the existing source along with the configuration you want to change in case.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceCloneId|[SourceId](#schemasourceid)|true|none|none|
|sourceConfiguration|[SourceCloneConfiguration](#schemasourcecloneconfiguration)|false|none|none|

<h2 id="tocS_SourceConfiguration">SourceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasourceconfiguration"></a>
<a id="schema_SourceConfiguration"></a>
<a id="tocSsourceconfiguration"></a>
<a id="tocssourceconfiguration"></a>

```json
{
  "user": "charles"
}
```

The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.

<h2 id="tocS_SourceCoreConfig">SourceCoreConfig</h2>
<!-- backwards compatibility -->
<a id="schemasourcecoreconfig"></a>
<a id="schema_SourceCoreConfig"></a>
<a id="tocSsourcecoreconfig"></a>
<a id="tocssourcecoreconfig"></a>

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionConfiguration|[SourceConfiguration](#schemasourceconfiguration)|true|none|The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.|
|sourceDefinitionId|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|none|
|sourceId|[SourceId](#schemasourceid)|false|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_SourceCreate">SourceCreate</h2>
<!-- backwards compatibility -->
<a id="schemasourcecreate"></a>
<a id="schema_SourceCreate"></a>
<a id="tocSsourcecreate"></a>
<a id="tocssourcecreate"></a>

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "name": "string",
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionConfiguration|[SourceConfiguration](#schemasourceconfiguration)|true|none|The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.|
|name|string|true|none|none|
|sourceDefinitionId|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_SourceDefinitionCreate">SourceDefinitionCreate</h2>
<!-- backwards compatibility -->
<a id="schemasourcedefinitioncreate"></a>
<a id="schema_SourceDefinitionCreate"></a>
<a id="tocSsourcedefinitioncreate"></a>
<a id="tocssourcedefinitioncreate"></a>

```json
{
  "dockerImageTag": "string",
  "dockerRepository": "string",
  "documentationUrl": "http://example.com",
  "icon": "string",
  "name": "string",
  "resourceRequirements": {
    "default": {
      "cpu_limit": "string",
      "cpu_request": "string",
      "memory_limit": "string",
      "memory_request": "string"
    },
    "jobSpecific": [
      {
        "jobType": "get_spec",
        "resourceRequirements": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dockerImageTag|string|true|none|none|
|dockerRepository|string|true|none|none|
|documentationUrl|string(uri)|true|none|none|
|icon|string|false|none|none|
|name|string|true|none|none|
|resourceRequirements|[ActorDefinitionResourceRequirements](#schemaactordefinitionresourcerequirements)|false|none|actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level.|

<h2 id="tocS_SourceDefinitionId">SourceDefinitionId</h2>
<!-- backwards compatibility -->
<a id="schemasourcedefinitionid"></a>
<a id="schema_SourceDefinitionId"></a>
<a id="tocSsourcedefinitionid"></a>
<a id="tocssourcedefinitionid"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

<h2 id="tocS_SourceDefinitionIdRequestBody">SourceDefinitionIdRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemasourcedefinitionidrequestbody"></a>
<a id="schema_SourceDefinitionIdRequestBody"></a>
<a id="tocSsourcedefinitionidrequestbody"></a>
<a id="tocssourcedefinitionidrequestbody"></a>

```json
{
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceDefinitionId|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|none|

<h2 id="tocS_SourceDefinitionIdWithWorkspaceId">SourceDefinitionIdWithWorkspaceId</h2>
<!-- backwards compatibility -->
<a id="schemasourcedefinitionidwithworkspaceid"></a>
<a id="schema_SourceDefinitionIdWithWorkspaceId"></a>
<a id="tocSsourcedefinitionidwithworkspaceid"></a>
<a id="tocssourcedefinitionidwithworkspaceid"></a>

```json
{
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceDefinitionId|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_SourceDefinitionRead">SourceDefinitionRead</h2>
<!-- backwards compatibility -->
<a id="schemasourcedefinitionread"></a>
<a id="schema_SourceDefinitionRead"></a>
<a id="tocSsourcedefinitionread"></a>
<a id="tocssourcedefinitionread"></a>

```json
{
  "dockerImageTag": "string",
  "dockerRepository": "string",
  "documentationUrl": "http://example.com",
  "icon": "string",
  "name": "string",
  "protocolVersion": "string",
  "releaseDate": "1970-01-01",
  "releaseStage": "alpha",
  "resourceRequirements": {
    "default": {
      "cpu_limit": "string",
      "cpu_request": "string",
      "memory_limit": "string",
      "memory_request": "string"
    },
    "jobSpecific": [
      {
        "jobType": "get_spec",
        "resourceRequirements": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        }
      }
    ]
  },
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceType": "api"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dockerImageTag|string|true|none|none|
|dockerRepository|string|true|none|none|
|documentationUrl|string(uri)|false|none|none|
|icon|string|false|none|none|
|name|string|true|none|none|
|protocolVersion|string|false|none|The Airbyte Protocol version supported by the connector|
|releaseDate|string(date)|false|none|The date when this connector was first released, in yyyy-mm-dd format.|
|releaseStage|[ReleaseStage](#schemareleasestage)|false|none|none|
|resourceRequirements|[ActorDefinitionResourceRequirements](#schemaactordefinitionresourcerequirements)|false|none|actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level.|
|sourceDefinitionId|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|none|
|sourceType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|releaseStage|alpha|
|releaseStage|beta|
|releaseStage|generally_available|
|releaseStage|custom|
|sourceType|api|
|sourceType|file|
|sourceType|database|
|sourceType|custom|

<h2 id="tocS_SourceDefinitionReadList">SourceDefinitionReadList</h2>
<!-- backwards compatibility -->
<a id="schemasourcedefinitionreadlist"></a>
<a id="schema_SourceDefinitionReadList"></a>
<a id="tocSsourcedefinitionreadlist"></a>
<a id="tocssourcedefinitionreadlist"></a>

```json
{
  "sourceDefinitions": [
    {
      "dockerImageTag": "string",
      "dockerRepository": "string",
      "documentationUrl": "http://example.com",
      "icon": "string",
      "name": "string",
      "protocolVersion": "string",
      "releaseDate": "1970-01-01",
      "releaseStage": "alpha",
      "resourceRequirements": {
        "default": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        },
        "jobSpecific": [
          {
            "jobType": "get_spec",
            "resourceRequirements": {
              "cpu_limit": "string",
              "cpu_request": "string",
              "memory_limit": "string",
              "memory_request": "string"
            }
          }
        ]
      },
      "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sourceType": "api"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceDefinitions|[[SourceDefinitionRead](#schemasourcedefinitionread)]|true|none|none|

<h2 id="tocS_SourceDefinitionSpecification">SourceDefinitionSpecification</h2>
<!-- backwards compatibility -->
<a id="schemasourcedefinitionspecification"></a>
<a id="schema_SourceDefinitionSpecification"></a>
<a id="tocSsourcedefinitionspecification"></a>
<a id="tocssourcedefinitionspecification"></a>

```json
{
  "user": {
    "type": "string"
  }
}
```

The specification for what values are required to configure the sourceDefinition.

<h2 id="tocS_SourceDefinitionSpecificationRead">SourceDefinitionSpecificationRead</h2>
<!-- backwards compatibility -->
<a id="schemasourcedefinitionspecificationread"></a>
<a id="schema_SourceDefinitionSpecificationRead"></a>
<a id="tocSsourcedefinitionspecificationread"></a>
<a id="tocssourcedefinitionspecificationread"></a>

```json
{
  "advancedAuth": {
    "authFlowType": "oauth2.0",
    "oauthConfigSpecification": {
      "completeOAuthOutputSpecification": null,
      "completeOAuthServerInputSpecification": null,
      "completeOAuthServerOutputSpecification": null,
      "oauthUserInputFromConnectorConfigSpecification": null
    },
    "predicateKey": [
      "string"
    ],
    "predicateValue": "string"
  },
  "authSpecification": {
    "auth_type": "oauth2.0",
    "oauth2Specification": {
      "oauthFlowInitParameters": [
        [
          "string"
        ]
      ],
      "oauthFlowOutputParameters": [
        [
          "string"
        ]
      ],
      "rootObject": [
        "path",
        1
      ]
    }
  },
  "connectionSpecification": {
    "user": {
      "type": "string"
    }
  },
  "documentationUrl": "string",
  "jobInfo": {
    "configId": "string",
    "configType": "check_connection_source",
    "connectorConfigurationUpdated": false,
    "createdAt": 0,
    "endedAt": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "logs": {
      "logLines": [
        "string"
      ]
    },
    "succeeded": true
  },
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advancedAuth|[AdvancedAuth](#schemaadvancedauth)|false|none|none|
|authSpecification|[AuthSpecification](#schemaauthspecification)|false|none|none|
|connectionSpecification|[SourceDefinitionSpecification](#schemasourcedefinitionspecification)|false|none|The specification for what values are required to configure the sourceDefinition.|
|documentationUrl|string|false|none|none|
|jobInfo|[SynchronousJobRead](#schemasynchronousjobread)|true|none|none|
|sourceDefinitionId|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|none|

<h2 id="tocS_SourceDefinitionUpdate">SourceDefinitionUpdate</h2>
<!-- backwards compatibility -->
<a id="schemasourcedefinitionupdate"></a>
<a id="schema_SourceDefinitionUpdate"></a>
<a id="tocSsourcedefinitionupdate"></a>
<a id="tocssourcedefinitionupdate"></a>

```json
{
  "dockerImageTag": "string",
  "resourceRequirements": {
    "default": {
      "cpu_limit": "string",
      "cpu_request": "string",
      "memory_limit": "string",
      "memory_request": "string"
    },
    "jobSpecific": [
      {
        "jobType": "get_spec",
        "resourceRequirements": {
          "cpu_limit": "string",
          "cpu_request": "string",
          "memory_limit": "string",
          "memory_request": "string"
        }
      }
    ]
  },
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Update the SourceDefinition. Currently, the only allowed attribute to update is the default docker image version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dockerImageTag|string|true|none|none|
|resourceRequirements|[ActorDefinitionResourceRequirements](#schemaactordefinitionresourcerequirements)|false|none|actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level.|
|sourceDefinitionId|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|none|

<h2 id="tocS_SourceDiscoverSchemaRead">SourceDiscoverSchemaRead</h2>
<!-- backwards compatibility -->
<a id="schemasourcediscoverschemaread"></a>
<a id="schema_SourceDiscoverSchemaRead"></a>
<a id="tocSsourcediscoverschemaread"></a>
<a id="tocssourcediscoverschemaread"></a>

```json
{
  "breakingChange": true,
  "catalog": {
    "streams": [
      {
        "config": {
          "aliasName": "string",
          "cursorField": [
            "string"
          ],
          "destinationSyncMode": "append",
          "fieldSelectionEnabled": true,
          "primaryKey": [
            [
              "string"
            ]
          ],
          "selected": true,
          "selectedFields": [
            {
              "fieldPath": [
                "string"
              ]
            }
          ],
          "suggested": true,
          "syncMode": "full_refresh"
        },
        "stream": {
          "defaultCursorField": [
            "string"
          ],
          "jsonSchema": {},
          "name": "string",
          "namespace": "string",
          "sourceDefinedCursor": true,
          "sourceDefinedPrimaryKey": [
            [
              "string"
            ]
          ],
          "supportedSyncModes": [
            "full_refresh"
          ]
        }
      }
    ]
  },
  "catalogDiff": {
    "transforms": [
      {
        "streamDescriptor": {
          "name": "string",
          "namespace": "string"
        },
        "transformType": "add_stream",
        "updateStream": [
          {
            "addField": {
              "schema": {}
            },
            "breaking": true,
            "fieldName": [
              "string"
            ],
            "removeField": {
              "schema": {}
            },
            "transformType": "add_field",
            "updateFieldSchema": {
              "newSchema": {},
              "oldSchema": {}
            }
          }
        ]
      }
    ]
  },
  "catalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "connectionStatus": "active",
  "jobInfo": {
    "configId": "string",
    "configType": "check_connection_source",
    "connectorConfigurationUpdated": false,
    "createdAt": 0,
    "endedAt": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "logs": {
      "logLines": [
        "string"
      ]
    },
    "succeeded": true
  }
}
```

Returns the results of a discover catalog job. If the job was not successful, the catalog field will not be present. jobInfo will aways be present and its status be used to determine if the job was successful or not.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|breakingChange|boolean|false|none|none|
|catalog|[AirbyteCatalog](#schemaairbytecatalog)|false|none|describes the available schema (catalog).|
|catalogDiff|[CatalogDiff](#schemacatalogdiff)|false|none|Describes the difference between two Airbyte catalogs.|
|catalogId|string(uuid)|false|none|none|
|connectionStatus|[ConnectionStatus](#schemaconnectionstatus)|false|none|Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.|
|jobInfo|[SynchronousJobRead](#schemasynchronousjobread)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|connectionStatus|active|
|connectionStatus|inactive|
|connectionStatus|deprecated|

<h2 id="tocS_SourceDiscoverSchemaRequestBody">SourceDiscoverSchemaRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemasourcediscoverschemarequestbody"></a>
<a id="schema_SourceDiscoverSchemaRequestBody"></a>
<a id="tocSsourcediscoverschemarequestbody"></a>
<a id="tocssourcediscoverschemarequestbody"></a>

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "disable_cache": true,
  "notifySchemaChange": true,
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|string(uuid)|false|none|none|
|disable_cache|boolean|false|none|none|
|notifySchemaChange|boolean|false|none|none|
|sourceId|[SourceId](#schemasourceid)|true|none|none|

<h2 id="tocS_SourceDiscoverSchemaWriteRequestBody">SourceDiscoverSchemaWriteRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemasourcediscoverschemawriterequestbody"></a>
<a id="schema_SourceDiscoverSchemaWriteRequestBody"></a>
<a id="tocSsourcediscoverschemawriterequestbody"></a>
<a id="tocssourcediscoverschemawriterequestbody"></a>

```json
{
  "catalog": {
    "streams": [
      {
        "config": {
          "aliasName": "string",
          "cursorField": [
            "string"
          ],
          "destinationSyncMode": "append",
          "fieldSelectionEnabled": true,
          "primaryKey": [
            [
              "string"
            ]
          ],
          "selected": true,
          "selectedFields": [
            {
              "fieldPath": [
                "string"
              ]
            }
          ],
          "suggested": true,
          "syncMode": "full_refresh"
        },
        "stream": {
          "defaultCursorField": [
            "string"
          ],
          "jsonSchema": {},
          "name": "string",
          "namespace": "string",
          "sourceDefinedCursor": true,
          "sourceDefinedPrimaryKey": [
            [
              "string"
            ]
          ],
          "supportedSyncModes": [
            "full_refresh"
          ]
        }
      }
    ]
  },
  "configurationHash": "string",
  "connectorVersion": "string",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

to write this requested object to database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalog|[AirbyteCatalog](#schemaairbytecatalog)|true|none|describes the available schema (catalog).|
|configurationHash|string|false|none|none|
|connectorVersion|string|false|none|none|
|sourceId|[SourceId](#schemasourceid)|false|none|none|

<h2 id="tocS_SourceId">SourceId</h2>
<!-- backwards compatibility -->
<a id="schemasourceid"></a>
<a id="schema_SourceId"></a>
<a id="tocSsourceid"></a>
<a id="tocssourceid"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

<h2 id="tocS_SourceIdRequestBody">SourceIdRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemasourceidrequestbody"></a>
<a id="schema_SourceIdRequestBody"></a>
<a id="tocSsourceidrequestbody"></a>
<a id="tocssourceidrequestbody"></a>

```json
{
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceId|[SourceId](#schemasourceid)|true|none|none|

<h2 id="tocS_SourceOauthConsentRequest">SourceOauthConsentRequest</h2>
<!-- backwards compatibility -->
<a id="schemasourceoauthconsentrequest"></a>
<a id="schema_SourceOauthConsentRequest"></a>
<a id="tocSsourceoauthconsentrequest"></a>
<a id="tocssourceoauthconsentrequest"></a>

```json
{
  "oAuthInputConfiguration": null,
  "redirectUrl": "string",
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oAuthInputConfiguration|[OAuthConfiguration](#schemaoauthconfiguration)|false|none|The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema.|
|redirectUrl|string|true|none|The url to redirect to after getting the user consent|
|sourceDefinitionId|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|none|
|sourceId|[SourceId](#schemasourceid)|false|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_SourceRead">SourceRead</h2>
<!-- backwards compatibility -->
<a id="schemasourceread"></a>
<a id="schema_SourceRead"></a>
<a id="tocSsourceread"></a>
<a id="tocssourceread"></a>

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "icon": "string",
  "name": "string",
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceName": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionConfiguration|[SourceConfiguration](#schemasourceconfiguration)|true|none|The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.|
|icon|string|false|none|none|
|name|string|true|none|none|
|sourceDefinitionId|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|none|
|sourceId|[SourceId](#schemasourceid)|true|none|none|
|sourceName|string|true|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_SourceReadList">SourceReadList</h2>
<!-- backwards compatibility -->
<a id="schemasourcereadlist"></a>
<a id="schema_SourceReadList"></a>
<a id="tocSsourcereadlist"></a>
<a id="tocssourcereadlist"></a>

```json
{
  "sources": [
    {
      "connectionConfiguration": {
        "user": "charles"
      },
      "icon": "string",
      "name": "string",
      "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sourceName": "string",
      "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sources|[[SourceRead](#schemasourceread)]|true|none|none|

<h2 id="tocS_SourceSearch">SourceSearch</h2>
<!-- backwards compatibility -->
<a id="schemasourcesearch"></a>
<a id="schema_SourceSearch"></a>
<a id="tocSsourcesearch"></a>
<a id="tocssourcesearch"></a>

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "name": "string",
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceName": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionConfiguration|[SourceConfiguration](#schemasourceconfiguration)|false|none|The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.|
|name|string|false|none|none|
|sourceDefinitionId|[SourceDefinitionId](#schemasourcedefinitionid)|false|none|none|
|sourceId|[SourceId](#schemasourceid)|false|none|none|
|sourceName|string|false|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|false|none|none|

<h2 id="tocS_SourceSnippetRead">SourceSnippetRead</h2>
<!-- backwards compatibility -->
<a id="schemasourcesnippetread"></a>
<a id="schema_SourceSnippetRead"></a>
<a id="tocSsourcesnippetread"></a>
<a id="tocssourcesnippetread"></a>

```json
{
  "icon": "string",
  "name": "string",
  "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|icon|string|false|none|none|
|name|string|true|none|none|
|sourceDefinitionId|[SourceDefinitionId](#schemasourcedefinitionid)|true|none|none|
|sourceId|[SourceId](#schemasourceid)|true|none|none|
|sourceName|string|true|none|none|

<h2 id="tocS_SourceUpdate">SourceUpdate</h2>
<!-- backwards compatibility -->
<a id="schemasourceupdate"></a>
<a id="schema_SourceUpdate"></a>
<a id="tocSsourceupdate"></a>
<a id="tocssourceupdate"></a>

```json
{
  "connectionConfiguration": {
    "user": "charles"
  },
  "name": "string",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionConfiguration|[SourceConfiguration](#schemasourceconfiguration)|true|none|The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.|
|name|string|true|none|none|
|sourceId|[SourceId](#schemasourceid)|true|none|none|

<h2 id="tocS_StateBlob">StateBlob</h2>
<!-- backwards compatibility -->
<a id="schemastateblob"></a>
<a id="schema_StateBlob"></a>
<a id="tocSstateblob"></a>
<a id="tocsstateblob"></a>

```json
{}
```

<h2 id="tocS_StreamDescriptor">StreamDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemastreamdescriptor"></a>
<a id="schema_StreamDescriptor"></a>
<a id="tocSstreamdescriptor"></a>
<a id="tocsstreamdescriptor"></a>

```json
{
  "name": "string",
  "namespace": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|namespace|string|false|none|none|

<h2 id="tocS_StreamJsonSchema">StreamJsonSchema</h2>
<!-- backwards compatibility -->
<a id="schemastreamjsonschema"></a>
<a id="schema_StreamJsonSchema"></a>
<a id="tocSstreamjsonschema"></a>
<a id="tocsstreamjsonschema"></a>

```json
{}
```

Stream schema using Json Schema specs.

<h2 id="tocS_StreamState">StreamState</h2>
<!-- backwards compatibility -->
<a id="schemastreamstate"></a>
<a id="schema_StreamState"></a>
<a id="tocSstreamstate"></a>
<a id="tocsstreamstate"></a>

```json
{
  "streamDescriptor": {
    "name": "string",
    "namespace": "string"
  },
  "streamState": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|streamDescriptor|[StreamDescriptor](#schemastreamdescriptor)|true|none|none|
|streamState|[StateBlob](#schemastateblob)|false|none|none|

<h2 id="tocS_StreamTransform">StreamTransform</h2>
<!-- backwards compatibility -->
<a id="schemastreamtransform"></a>
<a id="schema_StreamTransform"></a>
<a id="tocSstreamtransform"></a>
<a id="tocsstreamtransform"></a>

```json
{
  "streamDescriptor": {
    "name": "string",
    "namespace": "string"
  },
  "transformType": "add_stream",
  "updateStream": [
    {
      "addField": {
        "schema": {}
      },
      "breaking": true,
      "fieldName": [
        "string"
      ],
      "removeField": {
        "schema": {}
      },
      "transformType": "add_field",
      "updateFieldSchema": {
        "newSchema": {},
        "oldSchema": {}
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|streamDescriptor|[StreamDescriptor](#schemastreamdescriptor)|true|none|none|
|transformType|string|true|none|none|
|updateStream|[[FieldTransform](#schemafieldtransform)]|false|none|list of field transformations. order does not matter.|

#### Enumerated Values

|Property|Value|
|---|---|
|transformType|add_stream|
|transformType|remove_stream|
|transformType|update_stream|

<h2 id="tocS_SyncMode">SyncMode</h2>
<!-- backwards compatibility -->
<a id="schemasyncmode"></a>
<a id="schema_SyncMode"></a>
<a id="tocSsyncmode"></a>
<a id="tocssyncmode"></a>

```json
"full_refresh"
```

<h2 id="tocS_SynchronousJobRead">SynchronousJobRead</h2>
<!-- backwards compatibility -->
<a id="schemasynchronousjobread"></a>
<a id="schema_SynchronousJobRead"></a>
<a id="tocSsynchronousjobread"></a>
<a id="tocssynchronousjobread"></a>

```json
{
  "configId": "string",
  "configType": "check_connection_source",
  "connectorConfigurationUpdated": false,
  "createdAt": 0,
  "endedAt": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "logs": {
    "logLines": [
      "string"
    ]
  },
  "succeeded": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configId|string|false|none|only present if a config id was provided.|
|configType|[JobConfigType](#schemajobconfigtype)|true|none|none|
|connectorConfigurationUpdated|boolean|false|none|none|
|createdAt|integer(int64)|true|none|none|
|endedAt|integer(int64)|true|none|none|
|id|string(uuid)|true|none|none|
|logs|[LogRead](#schemalogread)|false|none|none|
|succeeded|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|configType|check_connection_source|
|configType|check_connection_destination|
|configType|discover_schema|
|configType|get_spec|
|configType|sync|
|configType|reset_connection|

<h2 id="tocS_UploadRead">UploadRead</h2>
<!-- backwards compatibility -->
<a id="schemauploadread"></a>
<a id="schema_UploadRead"></a>
<a id="tocSuploadread"></a>
<a id="tocsuploadread"></a>

```json
{
  "resourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "succeeded"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceId|[ResourceId](#schemaresourceid)|false|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|succeeded|
|status|failed|

<h2 id="tocS_WebBackendCheckUpdatesRead">WebBackendCheckUpdatesRead</h2>
<!-- backwards compatibility -->
<a id="schemawebbackendcheckupdatesread"></a>
<a id="schema_WebBackendCheckUpdatesRead"></a>
<a id="tocSwebbackendcheckupdatesread"></a>
<a id="tocswebbackendcheckupdatesread"></a>

```json
{
  "destinationDefinitions": 0,
  "sourceDefinitions": 0
}
```

Summary of source and destination definitions that could be updated

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationDefinitions|integer|true|none|none|
|sourceDefinitions|integer|true|none|none|

<h2 id="tocS_WebBackendConnectionCreate">WebBackendConnectionCreate</h2>
<!-- backwards compatibility -->
<a id="schemawebbackendconnectioncreate"></a>
<a id="schema_WebBackendConnectionCreate"></a>
<a id="tocSwebbackendconnectioncreate"></a>
<a id="tocswebbackendconnectioncreate"></a>

```json
{
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geography": "auto",
  "name": "string",
  "namespaceDefinition": "source",
  "namespaceFormat": "${SOURCE_NAMESPACE}",
  "nonBreakingChangesPreference": "ignore",
  "operationIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "operations": [
    {
      "name": "string",
      "operatorConfiguration": {
        "dbt": {
          "dbtArguments": "string",
          "dockerImage": "string",
          "gitRepoBranch": "string",
          "gitRepoUrl": "string"
        },
        "normalization": {
          "option": "basic"
        },
        "operatorType": "normalization",
        "webhook": {
          "dbtCloud": {
            "accountId": 0,
            "jobId": 0
          },
          "executionBody": "string",
          "executionUrl": "string",
          "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "webhookType": "dbtCloud"
        }
      },
      "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "prefix": "string",
  "resourceRequirements": {
    "cpu_limit": "string",
    "cpu_request": "string",
    "memory_limit": "string",
    "memory_request": "string"
  },
  "schedule": {
    "timeUnit": "minutes",
    "units": 0
  },
  "scheduleData": {
    "basicSchedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "cron": {
      "cronExpression": "string",
      "cronTimeZone": "string"
    }
  },
  "scheduleType": "manual",
  "sourceCatalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "active",
  "syncCatalog": {
    "streams": [
      {
        "config": {
          "aliasName": "string",
          "cursorField": [
            "string"
          ],
          "destinationSyncMode": "append",
          "fieldSelectionEnabled": true,
          "primaryKey": [
            [
              "string"
            ]
          ],
          "selected": true,
          "selectedFields": [
            {
              "fieldPath": [
                "string"
              ]
            }
          ],
          "suggested": true,
          "syncMode": "full_refresh"
        },
        "stream": {
          "defaultCursorField": [
            "string"
          ],
          "jsonSchema": {},
          "name": "string",
          "namespace": "string",
          "sourceDefinedCursor": true,
          "sourceDefinedPrimaryKey": [
            [
              "string"
            ]
          ],
          "supportedSyncModes": [
            "full_refresh"
          ]
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationId|[DestinationId](#schemadestinationid)|true|none|none|
|geography|[Geography](#schemageography)|false|none|none|
|name|string|false|none|Optional name of the connection|
|namespaceDefinition|[NamespaceDefinitionType](#schemanamespacedefinitiontype)|false|none|Method used for computing final namespace in destination|
|namespaceFormat|string|false|none|Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.|
|nonBreakingChangesPreference|[NonBreakingChangesPreference](#schemanonbreakingchangespreference)|false|none|none|
|operationIds|[[OperationId](#schemaoperationid)]|false|none|none|
|operations|[[OperationCreate](#schemaoperationcreate)]|false|none|none|
|prefix|string|false|none|Prefix that will be prepended to the name of each stream when it is written to the destination.|
|resourceRequirements|[ResourceRequirements](#schemaresourcerequirements)|false|none|optional resource requirements to run workers (blank for unbounded allocations)|
|schedule|[ConnectionSchedule](#schemaconnectionschedule)|false|none|if null, then no schedule is set.|
|scheduleData|[ConnectionScheduleData](#schemaconnectionscheduledata)|false|none|schedule for when the the connection should run, per the schedule type|
|scheduleType|[ConnectionScheduleType](#schemaconnectionscheduletype)|false|none|determine how the schedule data should be interpreted|
|sourceCatalogId|string(uuid)|false|none|none|
|sourceId|[SourceId](#schemasourceid)|true|none|none|
|status|[ConnectionStatus](#schemaconnectionstatus)|true|none|Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.|
|syncCatalog|[AirbyteCatalog](#schemaairbytecatalog)|false|none|describes the available schema (catalog).|

#### Enumerated Values

|Property|Value|
|---|---|
|geography|auto|
|geography|us|
|geography|eu|
|namespaceDefinition|source|
|namespaceDefinition|destination|
|namespaceDefinition|customformat|
|nonBreakingChangesPreference|ignore|
|nonBreakingChangesPreference|disable|
|scheduleType|manual|
|scheduleType|basic|
|scheduleType|cron|
|status|active|
|status|inactive|
|status|deprecated|

<h2 id="tocS_WebBackendConnectionListItem">WebBackendConnectionListItem</h2>
<!-- backwards compatibility -->
<a id="schemawebbackendconnectionlistitem"></a>
<a id="schema_WebBackendConnectionListItem"></a>
<a id="tocSwebbackendconnectionlistitem"></a>
<a id="tocswebbackendconnectionlistitem"></a>

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destination": {
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "destinationName": "string",
    "icon": "string",
    "name": "string"
  },
  "isSyncing": true,
  "latestSyncJobCreatedAt": 0,
  "latestSyncJobStatus": "pending",
  "name": "string",
  "scheduleData": {
    "basicSchedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "cron": {
      "cronExpression": "string",
      "cronTimeZone": "string"
    }
  },
  "scheduleType": "manual",
  "schemaChange": "no_change",
  "source": {
    "icon": "string",
    "name": "string",
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceName": "string"
  },
  "status": "active"
}
```

Information about a connection that shows up in the connection list view.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|[ConnectionId](#schemaconnectionid)|true|none|none|
|destination|[DestinationSnippetRead](#schemadestinationsnippetread)|true|none|none|
|isSyncing|boolean|true|none|none|
|latestSyncJobCreatedAt|[JobCreatedAt](#schemajobcreatedat)|false|none|epoch time of the latest sync job. null if no sync job has taken place.|
|latestSyncJobStatus|[JobStatus](#schemajobstatus)|false|none|none|
|name|string|true|none|none|
|scheduleData|[ConnectionScheduleData](#schemaconnectionscheduledata)|false|none|schedule for when the the connection should run, per the schedule type|
|scheduleType|[ConnectionScheduleType](#schemaconnectionscheduletype)|false|none|determine how the schedule data should be interpreted|
|schemaChange|[SchemaChange](#schemaschemachange)|true|none|none|
|source|[SourceSnippetRead](#schemasourcesnippetread)|true|none|none|
|status|[ConnectionStatus](#schemaconnectionstatus)|true|none|Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.|

#### Enumerated Values

|Property|Value|
|---|---|
|latestSyncJobStatus|pending|
|latestSyncJobStatus|running|
|latestSyncJobStatus|incomplete|
|latestSyncJobStatus|failed|
|latestSyncJobStatus|succeeded|
|latestSyncJobStatus|cancelled|
|scheduleType|manual|
|scheduleType|basic|
|scheduleType|cron|
|schemaChange|no_change|
|schemaChange|non_breaking|
|schemaChange|breaking|
|status|active|
|status|inactive|
|status|deprecated|

<h2 id="tocS_WebBackendConnectionListRequestBody">WebBackendConnectionListRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemawebbackendconnectionlistrequestbody"></a>
<a id="schema_WebBackendConnectionListRequestBody"></a>
<a id="tocSwebbackendconnectionlistrequestbody"></a>
<a id="tocswebbackendconnectionlistrequestbody"></a>

```json
{
  "destinationId": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "sourceId": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationId|[[DestinationId](#schemadestinationid)]|false|none|none|
|sourceId|[[SourceId](#schemasourceid)]|false|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_WebBackendConnectionRead">WebBackendConnectionRead</h2>
<!-- backwards compatibility -->
<a id="schemawebbackendconnectionread"></a>
<a id="schema_WebBackendConnectionRead"></a>
<a id="tocSwebbackendconnectionread"></a>
<a id="tocswebbackendconnectionread"></a>

```json
{
  "catalogDiff": {
    "transforms": [
      {
        "streamDescriptor": {
          "name": "string",
          "namespace": "string"
        },
        "transformType": "add_stream",
        "updateStream": [
          {
            "addField": {
              "schema": {}
            },
            "breaking": true,
            "fieldName": [
              "string"
            ],
            "removeField": {
              "schema": {}
            },
            "transformType": "add_field",
            "updateFieldSchema": {
              "newSchema": {},
              "oldSchema": {}
            }
          }
        ]
      }
    ]
  },
  "catalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "destination": {
    "connectionConfiguration": {
      "user": "charles"
    },
    "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "destinationName": "string",
    "icon": "string",
    "name": "string",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geography": "auto",
  "isSyncing": true,
  "latestSyncJobCreatedAt": 0,
  "latestSyncJobStatus": "pending",
  "name": "string",
  "namespaceDefinition": "source",
  "namespaceFormat": "${SOURCE_NAMESPACE}",
  "nonBreakingChangesPreference": "ignore",
  "notifySchemaChanges": true,
  "operationIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "operations": [
    {
      "name": "string",
      "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "operatorConfiguration": {
        "dbt": {
          "dbtArguments": "string",
          "dockerImage": "string",
          "gitRepoBranch": "string",
          "gitRepoUrl": "string"
        },
        "normalization": {
          "option": "basic"
        },
        "operatorType": "normalization",
        "webhook": {
          "dbtCloud": {
            "accountId": 0,
            "jobId": 0
          },
          "executionBody": "string",
          "executionUrl": "string",
          "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "webhookType": "dbtCloud"
        }
      },
      "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "prefix": "string",
  "resourceRequirements": {
    "cpu_limit": "string",
    "cpu_request": "string",
    "memory_limit": "string",
    "memory_request": "string"
  },
  "schedule": {
    "timeUnit": "minutes",
    "units": 0
  },
  "scheduleData": {
    "basicSchedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "cron": {
      "cronExpression": "string",
      "cronTimeZone": "string"
    }
  },
  "scheduleType": "manual",
  "schemaChange": "no_change",
  "source": {
    "connectionConfiguration": {
      "user": "charles"
    },
    "icon": "string",
    "name": "string",
    "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sourceName": "string",
    "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "active",
  "syncCatalog": {
    "streams": [
      {
        "config": {
          "aliasName": "string",
          "cursorField": [
            "string"
          ],
          "destinationSyncMode": "append",
          "fieldSelectionEnabled": true,
          "primaryKey": [
            [
              "string"
            ]
          ],
          "selected": true,
          "selectedFields": [
            {
              "fieldPath": [
                "string"
              ]
            }
          ],
          "suggested": true,
          "syncMode": "full_refresh"
        },
        "stream": {
          "defaultCursorField": [
            "string"
          ],
          "jsonSchema": {},
          "name": "string",
          "namespace": "string",
          "sourceDefinedCursor": true,
          "sourceDefinedPrimaryKey": [
            [
              "string"
            ]
          ],
          "supportedSyncModes": [
            "full_refresh"
          ]
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalogDiff|[CatalogDiff](#schemacatalogdiff)|false|none|Describes the difference between two Airbyte catalogs.|
|catalogId|string(uuid)|false|none|none|
|connectionId|[ConnectionId](#schemaconnectionid)|true|none|none|
|destination|[DestinationRead](#schemadestinationread)|true|none|none|
|destinationId|[DestinationId](#schemadestinationid)|true|none|none|
|geography|[Geography](#schemageography)|false|none|none|
|isSyncing|boolean|true|none|none|
|latestSyncJobCreatedAt|[JobCreatedAt](#schemajobcreatedat)|false|none|epoch time of the latest sync job. null if no sync job has taken place.|
|latestSyncJobStatus|[JobStatus](#schemajobstatus)|false|none|none|
|name|string|true|none|none|
|namespaceDefinition|[NamespaceDefinitionType](#schemanamespacedefinitiontype)|false|none|Method used for computing final namespace in destination|
|namespaceFormat|string|false|none|Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.|
|nonBreakingChangesPreference|[NonBreakingChangesPreference](#schemanonbreakingchangespreference)|true|none|none|
|notifySchemaChanges|boolean|true|none|none|
|operationIds|[[OperationId](#schemaoperationid)]|false|none|none|
|operations|[[OperationRead](#schemaoperationread)]|false|none|none|
|prefix|string|false|none|Prefix that will be prepended to the name of each stream when it is written to the destination.|
|resourceRequirements|[ResourceRequirements](#schemaresourcerequirements)|false|none|optional resource requirements to run workers (blank for unbounded allocations)|
|schedule|[ConnectionSchedule](#schemaconnectionschedule)|false|none|if null, then no schedule is set.|
|scheduleData|[ConnectionScheduleData](#schemaconnectionscheduledata)|false|none|schedule for when the the connection should run, per the schedule type|
|scheduleType|[ConnectionScheduleType](#schemaconnectionscheduletype)|false|none|determine how the schedule data should be interpreted|
|schemaChange|[SchemaChange](#schemaschemachange)|true|none|none|
|source|[SourceRead](#schemasourceread)|true|none|none|
|sourceId|[SourceId](#schemasourceid)|true|none|none|
|status|[ConnectionStatus](#schemaconnectionstatus)|true|none|Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.|
|syncCatalog|[AirbyteCatalog](#schemaairbytecatalog)|true|none|describes the available schema (catalog).|

#### Enumerated Values

|Property|Value|
|---|---|
|geography|auto|
|geography|us|
|geography|eu|
|latestSyncJobStatus|pending|
|latestSyncJobStatus|running|
|latestSyncJobStatus|incomplete|
|latestSyncJobStatus|failed|
|latestSyncJobStatus|succeeded|
|latestSyncJobStatus|cancelled|
|namespaceDefinition|source|
|namespaceDefinition|destination|
|namespaceDefinition|customformat|
|nonBreakingChangesPreference|ignore|
|nonBreakingChangesPreference|disable|
|scheduleType|manual|
|scheduleType|basic|
|scheduleType|cron|
|schemaChange|no_change|
|schemaChange|non_breaking|
|schemaChange|breaking|
|status|active|
|status|inactive|
|status|deprecated|

<h2 id="tocS_WebBackendConnectionReadList">WebBackendConnectionReadList</h2>
<!-- backwards compatibility -->
<a id="schemawebbackendconnectionreadlist"></a>
<a id="schema_WebBackendConnectionReadList"></a>
<a id="tocSwebbackendconnectionreadlist"></a>
<a id="tocswebbackendconnectionreadlist"></a>

```json
{
  "connections": [
    {
      "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "destination": {
        "destinationDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "destinationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "destinationName": "string",
        "icon": "string",
        "name": "string"
      },
      "isSyncing": true,
      "latestSyncJobCreatedAt": 0,
      "latestSyncJobStatus": "pending",
      "name": "string",
      "scheduleData": {
        "basicSchedule": {
          "timeUnit": "minutes",
          "units": 0
        },
        "cron": {
          "cronExpression": "string",
          "cronTimeZone": "string"
        }
      },
      "scheduleType": "manual",
      "schemaChange": "no_change",
      "source": {
        "icon": "string",
        "name": "string",
        "sourceDefinitionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "sourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "sourceName": "string"
      },
      "status": "active"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connections|[[WebBackendConnectionListItem](#schemawebbackendconnectionlistitem)]|true|none|none|

<h2 id="tocS_WebBackendConnectionRequestBody">WebBackendConnectionRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemawebbackendconnectionrequestbody"></a>
<a id="schema_WebBackendConnectionRequestBody"></a>
<a id="tocSwebbackendconnectionrequestbody"></a>
<a id="tocswebbackendconnectionrequestbody"></a>

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "withRefreshedCatalog": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|[ConnectionId](#schemaconnectionid)|true|none|none|
|withRefreshedCatalog|boolean|false|none|none|

<h2 id="tocS_WebBackendConnectionUpdate">WebBackendConnectionUpdate</h2>
<!-- backwards compatibility -->
<a id="schemawebbackendconnectionupdate"></a>
<a id="schema_WebBackendConnectionUpdate"></a>
<a id="tocSwebbackendconnectionupdate"></a>
<a id="tocswebbackendconnectionupdate"></a>

```json
{
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geography": "auto",
  "name": "string",
  "namespaceDefinition": "source",
  "namespaceFormat": "${SOURCE_NAMESPACE}",
  "nonBreakingChangesPreference": "ignore",
  "notifySchemaChanges": true,
  "operations": [
    {
      "name": "string",
      "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "operatorConfiguration": {
        "dbt": {
          "dbtArguments": "string",
          "dockerImage": "string",
          "gitRepoBranch": "string",
          "gitRepoUrl": "string"
        },
        "normalization": {
          "option": "basic"
        },
        "operatorType": "normalization",
        "webhook": {
          "dbtCloud": {
            "accountId": 0,
            "jobId": 0
          },
          "executionBody": "string",
          "executionUrl": "string",
          "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "webhookType": "dbtCloud"
        }
      },
      "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "prefix": "string",
  "resourceRequirements": {
    "cpu_limit": "string",
    "cpu_request": "string",
    "memory_limit": "string",
    "memory_request": "string"
  },
  "schedule": {
    "timeUnit": "minutes",
    "units": 0
  },
  "scheduleData": {
    "basicSchedule": {
      "timeUnit": "minutes",
      "units": 0
    },
    "cron": {
      "cronExpression": "string",
      "cronTimeZone": "string"
    }
  },
  "scheduleType": "manual",
  "skipReset": true,
  "sourceCatalogId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "active",
  "syncCatalog": {
    "streams": [
      {
        "config": {
          "aliasName": "string",
          "cursorField": [
            "string"
          ],
          "destinationSyncMode": "append",
          "fieldSelectionEnabled": true,
          "primaryKey": [
            [
              "string"
            ]
          ],
          "selected": true,
          "selectedFields": [
            {
              "fieldPath": [
                "string"
              ]
            }
          ],
          "suggested": true,
          "syncMode": "full_refresh"
        },
        "stream": {
          "defaultCursorField": [
            "string"
          ],
          "jsonSchema": {},
          "name": "string",
          "namespace": "string",
          "sourceDefinedCursor": true,
          "sourceDefinedPrimaryKey": [
            [
              "string"
            ]
          ],
          "supportedSyncModes": [
            "full_refresh"
          ]
        }
      }
    ]
  }
}
```

Used to apply a patch-style update to a connection, which means that null properties remain unchanged

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|[ConnectionId](#schemaconnectionid)|true|none|none|
|geography|[Geography](#schemageography)|false|none|none|
|name|string|false|none|Name that will be set to the connection|
|namespaceDefinition|[NamespaceDefinitionType](#schemanamespacedefinitiontype)|false|none|Method used for computing final namespace in destination|
|namespaceFormat|string|false|none|Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.|
|nonBreakingChangesPreference|[NonBreakingChangesPreference](#schemanonbreakingchangespreference)|false|none|none|
|notifySchemaChanges|boolean|false|none|none|
|operations|[[WebBackendOperationCreateOrUpdate](#schemawebbackendoperationcreateorupdate)]|false|none|none|
|prefix|string|false|none|Prefix that will be prepended to the name of each stream when it is written to the destination.|
|resourceRequirements|[ResourceRequirements](#schemaresourcerequirements)|false|none|optional resource requirements to run workers (blank for unbounded allocations)|
|schedule|[ConnectionSchedule](#schemaconnectionschedule)|false|none|if null, then no schedule is set.|
|scheduleData|[ConnectionScheduleData](#schemaconnectionscheduledata)|false|none|schedule for when the the connection should run, per the schedule type|
|scheduleType|[ConnectionScheduleType](#schemaconnectionscheduletype)|false|none|determine how the schedule data should be interpreted|
|skipReset|boolean|false|none|none|
|sourceCatalogId|string(uuid)|false|none|none|
|status|[ConnectionStatus](#schemaconnectionstatus)|false|none|Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.|
|syncCatalog|[AirbyteCatalog](#schemaairbytecatalog)|false|none|describes the available schema (catalog).|

#### Enumerated Values

|Property|Value|
|---|---|
|geography|auto|
|geography|us|
|geography|eu|
|namespaceDefinition|source|
|namespaceDefinition|destination|
|namespaceDefinition|customformat|
|nonBreakingChangesPreference|ignore|
|nonBreakingChangesPreference|disable|
|scheduleType|manual|
|scheduleType|basic|
|scheduleType|cron|
|status|active|
|status|inactive|
|status|deprecated|

<h2 id="tocS_WebBackendGeographiesListResult">WebBackendGeographiesListResult</h2>
<!-- backwards compatibility -->
<a id="schemawebbackendgeographieslistresult"></a>
<a id="schema_WebBackendGeographiesListResult"></a>
<a id="tocSwebbackendgeographieslistresult"></a>
<a id="tocswebbackendgeographieslistresult"></a>

```json
{
  "geographies": [
    "auto"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geographies|[[Geography](#schemageography)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|geographies|auto|
|geographies|us|
|geographies|eu|

<h2 id="tocS_WebBackendOperationCreateOrUpdate">WebBackendOperationCreateOrUpdate</h2>
<!-- backwards compatibility -->
<a id="schemawebbackendoperationcreateorupdate"></a>
<a id="schema_WebBackendOperationCreateOrUpdate"></a>
<a id="tocSwebbackendoperationcreateorupdate"></a>
<a id="tocswebbackendoperationcreateorupdate"></a>

```json
{
  "name": "string",
  "operationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "operatorConfiguration": {
    "dbt": {
      "dbtArguments": "string",
      "dockerImage": "string",
      "gitRepoBranch": "string",
      "gitRepoUrl": "string"
    },
    "normalization": {
      "option": "basic"
    },
    "operatorType": "normalization",
    "webhook": {
      "dbtCloud": {
        "accountId": 0,
        "jobId": 0
      },
      "executionBody": "string",
      "executionUrl": "string",
      "webhookConfigId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "webhookType": "dbtCloud"
    }
  },
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|operationId|[OperationId](#schemaoperationid)|false|none|none|
|operatorConfiguration|[OperatorConfiguration](#schemaoperatorconfiguration)|true|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_WebBackendWorkspaceState">WebBackendWorkspaceState</h2>
<!-- backwards compatibility -->
<a id="schemawebbackendworkspacestate"></a>
<a id="schema_WebBackendWorkspaceState"></a>
<a id="tocSwebbackendworkspacestate"></a>
<a id="tocswebbackendworkspacestate"></a>

```json
{
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_WebBackendWorkspaceStateResult">WebBackendWorkspaceStateResult</h2>
<!-- backwards compatibility -->
<a id="schemawebbackendworkspacestateresult"></a>
<a id="schema_WebBackendWorkspaceStateResult"></a>
<a id="tocSwebbackendworkspacestateresult"></a>
<a id="tocswebbackendworkspacestateresult"></a>

```json
{
  "hasConnections": true,
  "hasDestinations": true,
  "hasSources": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasConnections|boolean|true|none|none|
|hasDestinations|boolean|true|none|none|
|hasSources|boolean|true|none|none|

<h2 id="tocS_WebhookConfigRead">WebhookConfigRead</h2>
<!-- backwards compatibility -->
<a id="schemawebhookconfigread"></a>
<a id="schema_WebhookConfigRead"></a>
<a id="tocSwebhookconfigread"></a>
<a id="tocswebhookconfigread"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string"
}
```

the readable info for a webhook config; omits sensitive info e.g. auth token

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|name|string|false|none|human-readable name e.g. for display in UI|

<h2 id="tocS_WebhookConfigWrite">WebhookConfigWrite</h2>
<!-- backwards compatibility -->
<a id="schemawebhookconfigwrite"></a>
<a id="schema_WebhookConfigWrite"></a>
<a id="tocSwebhookconfigwrite"></a>
<a id="tocswebhookconfigwrite"></a>

```json
{
  "authToken": "string",
  "name": "string",
  "validationUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authToken|string|false|none|an auth token, to be passed as the value for an HTTP Authorization header.|
|name|string|false|none|human readable name for this webhook e.g. for UI display.|
|validationUrl|string|false|none|if supplied, the webhook config will be validated by checking that this URL returns a 2xx response.|

<h2 id="tocS_WorkflowId">WorkflowId</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowid"></a>
<a id="schema_WorkflowId"></a>
<a id="tocSworkflowid"></a>
<a id="tocsworkflowid"></a>

```json
"string"
```

<h2 id="tocS_WorkflowStateRead">WorkflowStateRead</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowstateread"></a>
<a id="schema_WorkflowStateRead"></a>
<a id="tocSworkflowstateread"></a>
<a id="tocsworkflowstateread"></a>

```json
{
  "running": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|running|boolean|true|none|none|

<h2 id="tocS_WorkspaceCreate">WorkspaceCreate</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacecreate"></a>
<a id="schema_WorkspaceCreate"></a>
<a id="tocSworkspacecreate"></a>
<a id="tocsworkspacecreate"></a>

```json
{
  "anonymousDataCollection": true,
  "defaultGeography": "auto",
  "displaySetupWizard": true,
  "email": "user@example.com",
  "name": "string",
  "news": true,
  "notifications": [
    {
      "customerioConfiguration": {},
      "notificationType": "slack",
      "sendOnFailure": true,
      "sendOnSuccess": false,
      "slackConfiguration": {
        "webhook": "string"
      }
    }
  ],
  "securityUpdates": true,
  "webhookConfigs": [
    {
      "authToken": "string",
      "name": "string",
      "validationUrl": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|anonymousDataCollection|boolean|false|none|none|
|defaultGeography|[Geography](#schemageography)|false|none|none|
|displaySetupWizard|boolean|false|none|none|
|email|string(email)|false|none|none|
|name|string|true|none|none|
|news|boolean|false|none|none|
|notifications|[[Notification](#schemanotification)]|false|none|none|
|securityUpdates|boolean|false|none|none|
|webhookConfigs|[[WebhookConfigWrite](#schemawebhookconfigwrite)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|defaultGeography|auto|
|defaultGeography|us|
|defaultGeography|eu|

<h2 id="tocS_WorkspaceGiveFeedback">WorkspaceGiveFeedback</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacegivefeedback"></a>
<a id="schema_WorkspaceGiveFeedback"></a>
<a id="tocSworkspacegivefeedback"></a>
<a id="tocsworkspacegivefeedback"></a>

```json
{
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_WorkspaceId">WorkspaceId</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceid"></a>
<a id="schema_WorkspaceId"></a>
<a id="tocSworkspaceid"></a>
<a id="tocsworkspaceid"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

<h2 id="tocS_WorkspaceIdRequestBody">WorkspaceIdRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceidrequestbody"></a>
<a id="schema_WorkspaceIdRequestBody"></a>
<a id="tocSworkspaceidrequestbody"></a>
<a id="tocsworkspaceidrequestbody"></a>

```json
{
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

<h2 id="tocS_WorkspaceRead">WorkspaceRead</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceread"></a>
<a id="schema_WorkspaceRead"></a>
<a id="tocSworkspaceread"></a>
<a id="tocsworkspaceread"></a>

```json
{
  "anonymousDataCollection": true,
  "customerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "defaultGeography": "auto",
  "displaySetupWizard": true,
  "email": "user@example.com",
  "feedbackDone": true,
  "firstCompletedSync": true,
  "initialSetupComplete": true,
  "name": "string",
  "news": true,
  "notifications": [
    {
      "customerioConfiguration": {},
      "notificationType": "slack",
      "sendOnFailure": true,
      "sendOnSuccess": false,
      "slackConfiguration": {
        "webhook": "string"
      }
    }
  ],
  "securityUpdates": true,
  "slug": "string",
  "webhookConfigs": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string"
    }
  ],
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|anonymousDataCollection|boolean|false|none|none|
|customerId|[CustomerId](#schemacustomerid)|true|none|none|
|defaultGeography|[Geography](#schemageography)|false|none|none|
|displaySetupWizard|boolean|false|none|none|
|email|string(email)|false|none|none|
|feedbackDone|boolean|false|none|none|
|firstCompletedSync|boolean|false|none|none|
|initialSetupComplete|boolean|true|none|none|
|name|string|true|none|none|
|news|boolean|false|none|none|
|notifications|[[Notification](#schemanotification)]|false|none|none|
|securityUpdates|boolean|false|none|none|
|slug|string|true|none|none|
|webhookConfigs|[[WebhookConfigRead](#schemawebhookconfigread)]|false|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|defaultGeography|auto|
|defaultGeography|us|
|defaultGeography|eu|

<h2 id="tocS_WorkspaceReadList">WorkspaceReadList</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacereadlist"></a>
<a id="schema_WorkspaceReadList"></a>
<a id="tocSworkspacereadlist"></a>
<a id="tocsworkspacereadlist"></a>

```json
{
  "workspaces": [
    {
      "anonymousDataCollection": true,
      "customerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "defaultGeography": "auto",
      "displaySetupWizard": true,
      "email": "user@example.com",
      "feedbackDone": true,
      "firstCompletedSync": true,
      "initialSetupComplete": true,
      "name": "string",
      "news": true,
      "notifications": [
        {
          "customerioConfiguration": {},
          "notificationType": "slack",
          "sendOnFailure": true,
          "sendOnSuccess": false,
          "slackConfiguration": {
            "webhook": "string"
          }
        }
      ],
      "securityUpdates": true,
      "slug": "string",
      "webhookConfigs": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string"
        }
      ],
      "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workspaces|[[WorkspaceRead](#schemaworkspaceread)]|true|none|none|

<h2 id="tocS_WorkspaceUpdate">WorkspaceUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceupdate"></a>
<a id="schema_WorkspaceUpdate"></a>
<a id="tocSworkspaceupdate"></a>
<a id="tocsworkspaceupdate"></a>

```json
{
  "anonymousDataCollection": true,
  "defaultGeography": "auto",
  "displaySetupWizard": true,
  "email": "user@example.com",
  "initialSetupComplete": true,
  "news": true,
  "notifications": [
    {
      "customerioConfiguration": {},
      "notificationType": "slack",
      "sendOnFailure": true,
      "sendOnSuccess": false,
      "slackConfiguration": {
        "webhook": "string"
      }
    }
  ],
  "securityUpdates": true,
  "webhookConfigs": [
    {
      "authToken": "string",
      "name": "string",
      "validationUrl": "string"
    }
  ],
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Used to apply a patch-style update to a workspace, which means that null properties remain unchanged

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|anonymousDataCollection|boolean|false|none|none|
|defaultGeography|[Geography](#schemageography)|false|none|none|
|displaySetupWizard|boolean|false|none|none|
|email|string(email)|false|none|none|
|initialSetupComplete|boolean|false|none|none|
|news|boolean|false|none|none|
|notifications|[[Notification](#schemanotification)]|false|none|none|
|securityUpdates|boolean|false|none|none|
|webhookConfigs|[[WebhookConfigWrite](#schemawebhookconfigwrite)]|false|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|defaultGeography|auto|
|defaultGeography|us|
|defaultGeography|eu|

<h2 id="tocS_WorkspaceUpdateName">WorkspaceUpdateName</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceupdatename"></a>
<a id="schema_WorkspaceUpdateName"></a>
<a id="tocSworkspaceupdatename"></a>
<a id="tocsworkspaceupdatename"></a>

```json
{
  "name": "string",
  "workspaceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|workspaceId|[WorkspaceId](#schemaworkspaceid)|true|none|none|
