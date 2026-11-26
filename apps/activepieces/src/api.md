<h1 id="activepieces-documentation">Activepieces Documentation v0.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://cloud.activepieces.com/api">https://cloud.activepieces.com/api</a> - Production Server

<a href="https://www.activepieces.com/docs">Find more info here</a>

# Authentication

- HTTP Authentication, scheme: bearer Use your api key generated from the admin console

<h1 id="activepieces-documentation-folders">folders</h1>

## get/v1/folders

> Code samples

```bash
curl 'https://cloud.activepieces.com/api/v1/folders?projectId=string' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/folders`

List folders

<h3 id="getv1folders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|number|false|none|
|cursor|query|string|false|none|
|projectId|query|string|true|none|

<h3 id="getv1folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/folders

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/folders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "projectId": "string"
  }'
```

`POST /v1/folders`

Create a new folder

> Body parameter

```json
{
  "displayName": "string",
  "projectId": "string"
}
```

<h3 id="postv1folders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» displayName|body|string|true|none|
|» projectId|body|string|true|none|

<h3 id="postv1folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/folders/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/folders/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/folders/{id}`

Get a folder by id

<h3 id="getv1foldersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="getv1foldersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/folders/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/folders/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string"
  }'
```

`POST /v1/folders/{id}`

Update an existing folder

> Body parameter

```json
{
  "displayName": "string"
}
```

<h3 id="postv1foldersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|true|none|
|» displayName|body|string|true|none|

<h3 id="postv1foldersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## delete/v1/folders/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/folders/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/folders/{id}`

Delete a folder

<h3 id="deletev1foldersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="deletev1foldersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-flows">flows</h1>

## get/v1/flows

> Code samples

```bash
curl 'https://cloud.activepieces.com/api/v1/flows?projectId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/flows`

List flows

<h3 id="getv1flows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folderId|query|string|false|none|
|limit|query|number|false|none|
|cursor|query|string|false|none|
|status|query|[string]|false|none|
|projectId|query|string|true|none|
|name|query|string|false|none|
|agentExternalIds|query|[string]|false|none|
|versionState|query|string|false|none|
|connectionExternalIds|query|[string]|false|none|
|externalIds|query|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|ENABLED|
|status|DISABLED|
|versionState|LOCKED|
|versionState|DRAFT|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "created": "string",
      "updated": "string",
      "projectId": "string",
      "externalId": "string",
      "ownerId": "string",
      "folderId": "string",
      "status": "ENABLED",
      "publishedVersionId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "operationStatus": "NONE",
      "timeSavedPerRun": 0,
      "templateId": "string",
      "version": {
        "id": "string",
        "created": "string",
        "updated": "string",
        "flowId": "string",
        "displayName": "string",
        "trigger": {
          "name": "string",
          "valid": true,
          "displayName": "string",
          "nextAction": null,
          "lastUpdatedDate": "string",
          "type": "PIECE_TRIGGER",
          "settings": {
            "sampleData": {
              "sampleDataFileId": "string",
              "sampleDataInputFileId": "string",
              "lastTestDate": "string"
            },
            "propertySettings": {
              "property1": {
                "type": "MANUAL",
                "schema": null
              },
              "property2": {
                "type": "MANUAL",
                "schema": null
              }
            },
            "customLogoUrl": "string",
            "pieceName": "string",
            "pieceVersion": "string",
            "triggerName": "string",
            "input": {
              "property1": null,
              "property2": null
            }
          }
        },
        "updatedBy": "string",
        "valid": true,
        "schemaVersion": "string",
        "agentIds": [
          "string"
        ],
        "state": "LOCKED",
        "connectionIds": [
          "string"
        ],
        "backupFiles": {
          "property1": "string",
          "property2": "string"
        },
        "notes": [
          {
            "id": "string",
            "content": "string",
            "ownerId": "string",
            "color": "orange",
            "position": {
              "x": 0,
              "y": 0
            },
            "size": {
              "width": 0,
              "height": 0
            },
            "createdAt": "string",
            "updatedAt": "string"
          }
        ]
      },
      "triggerSource": {
        "schedule": {
          "type": "CRON_EXPRESSION",
          "cronExpression": "string",
          "timezone": "string"
        }
      }
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="getv1flows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1flows-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» id|string|true|none|none|
|» created|string|true|none|none|
|» updated|string|true|none|none|
|» projectId|string|true|none|none|
|» externalId|string|true|none|none|
|» ownerId|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» folderId|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» status|string|true|none|none|
|» publishedVersionId|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» metadata|object \| null|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » **additionalProperties**|object|false|none|none|
|» » *anyOf*|null|false|none|none|
|» operationStatus|string|true|none|none|
|» timeSavedPerRun|number \| null|false|none|none|
|» » *anyOf*|number|false|none|none|
|» » *anyOf*|null|false|none|none|
|» templateId|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» version|object|true|none|none|
|» » id|string|true|none|none|
|» » created|string|true|none|none|
|» » updated|string|true|none|none|
|» » flowId|string|true|none|none|
|» » displayName|string|true|none|none|
|» » trigger|object|true|none|none|
|» » » *anyOf*|object|false|none|none|
|» » » name|string|true|none|none|
|» » » valid|boolean|true|none|none|
|» » » displayName|string|true|none|none|
|» » » nextAction|object|false|none|none|
|» » » lastUpdatedDate|string|true|none|none|
|» » » type|string|true|none|none|
|» » » settings|object|true|none|none|
|» » » » sampleData|object|false|none|none|
|» » » » » sampleDataFileId|string|false|none|none|
|» » » » » sampleDataInputFileId|string|false|none|none|
|» » » » » lastTestDate|string|false|none|none|
|» » » » propertySettings|object|true|none|none|
|» » » » » **additionalProperties**|object|false|none|none|
|» » » » » » type|string|true|none|none|
|» » » » » » schema|object|false|none|none|
|» » » » customLogoUrl|string|false|none|none|
|» » » » pieceName|string|true|none|none|
|» » » » pieceVersion|string|true|none|none|
|» » » » triggerName|string|false|none|none|
|» » » » input|object|true|none|none|
|» » » » » **additionalProperties**|object|false|none|none|
|» » » *anyOf*|object|false|none|none|
|» » » name|string|true|none|none|
|» » » valid|boolean|true|none|none|
|» » » displayName|string|true|none|none|
|» » » nextAction|object|false|none|none|
|» » » lastUpdatedDate|string|true|none|none|
|» » » type|string|true|none|none|
|» » » settings|object|true|none|none|
|» » updatedBy|string \| null|false|none|none|
|» » » *anyOf*|string|false|none|none|
|» » » *anyOf*|null|false|none|none|
|» » valid|boolean|true|none|none|
|» » schemaVersion|string \| null|false|none|none|
|» » » *anyOf*|string|false|none|none|
|» » » *anyOf*|null|false|none|none|
|» » agentIds|[string]|true|none|none|
|» » state|string|true|none|none|
|» » connectionIds|[string]|true|none|none|
|» » backupFiles|object \| null|false|none|none|
|» » » *anyOf*|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » » *anyOf*|null|false|none|none|
|» » notes|[object]|true|none|none|
|» » » id|string|true|none|none|
|» » » content|string|true|none|none|
|» » » ownerId|string \| null|false|none|none|
|» » » » *anyOf*|string|false|none|none|
|» » » » *anyOf*|null|false|none|none|
|» » » color|string|true|none|none|
|» » » position|object|true|none|none|
|» » » » x|number|true|none|none|
|» » » » y|number|true|none|none|
|» » » size|object|true|none|none|
|» » » » width|number|true|none|none|
|» » » » height|number|true|none|none|
|» » » createdAt|string|true|none|none|
|» » » updatedAt|string|true|none|none|
|» triggerSource|object|false|none|none|
|» » schedule|object \| null|false|none|none|
|» » » *anyOf*|object|false|none|none|
|» » » type|string|true|none|none|
|» » » cronExpression|string|true|none|none|
|» » » timezone|string|true|none|none|
|» » » *anyOf*|null|false|none|none|
|next|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|previous|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|ENABLED|
|» status|DISABLED|
|» operationStatus|NONE|
|» operationStatus|DELETING|
|» operationStatus|ENABLING|
|» operationStatus|DISABLING|
|» » » type|PIECE_TRIGGER|
|» » » » » » type|MANUAL|
|» » » » » » type|DYNAMIC|
|» » » type|EMPTY|
|» » state|LOCKED|
|» » state|DRAFT|
|» » » color|orange|
|» » » color|red|
|» » » color|green|
|» » » color|blue|
|» » » color|purple|
|» » » color|yellow|
|» » » type|CRON_EXPRESSION|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/flows

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/flows \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "folderId": "string",
    "folderName": "string",
    "projectId": "string",
    "templateId": "string",
    "metadata": {
      "property1": null,
      "property2": null
    }
  }'
```

`POST /v1/flows`

Create a flow

> Body parameter

```json
{
  "displayName": "string",
  "folderId": "string",
  "folderName": "string",
  "projectId": "string",
  "templateId": "string",
  "metadata": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="postv1flows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» displayName|body|string|true|none|
|» folderId|body|string|false|none|
|» folderName|body|string|false|none|
|» projectId|body|string|true|none|
|» templateId|body|string|false|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "projectId": "string",
  "externalId": "string",
  "ownerId": "string",
  "folderId": "string",
  "status": "ENABLED",
  "publishedVersionId": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "operationStatus": "NONE",
  "timeSavedPerRun": 0,
  "templateId": "string",
  "version": {
    "id": "string",
    "created": "string",
    "updated": "string",
    "flowId": "string",
    "displayName": "string",
    "trigger": {
      "name": "string",
      "valid": true,
      "displayName": "string",
      "nextAction": null,
      "lastUpdatedDate": "string",
      "type": "PIECE_TRIGGER",
      "settings": {
        "sampleData": {
          "sampleDataFileId": "string",
          "sampleDataInputFileId": "string",
          "lastTestDate": "string"
        },
        "propertySettings": {
          "property1": {
            "type": "MANUAL",
            "schema": null
          },
          "property2": {
            "type": "MANUAL",
            "schema": null
          }
        },
        "customLogoUrl": "string",
        "pieceName": "string",
        "pieceVersion": "string",
        "triggerName": "string",
        "input": {
          "property1": null,
          "property2": null
        }
      }
    },
    "updatedBy": "string",
    "valid": true,
    "schemaVersion": "string",
    "agentIds": [
      "string"
    ],
    "state": "LOCKED",
    "connectionIds": [
      "string"
    ],
    "backupFiles": {
      "property1": "string",
      "property2": "string"
    },
    "notes": [
      {
        "id": "string",
        "content": "string",
        "ownerId": "string",
        "color": "orange",
        "position": {
          "x": 0,
          "y": 0
        },
        "size": {
          "width": 0,
          "height": 0
        },
        "createdAt": "string",
        "updatedAt": "string"
      }
    ]
  },
  "triggerSource": {
    "schedule": {
      "type": "CRON_EXPRESSION",
      "cronExpression": "string",
      "timezone": "string"
    }
  }
}
```

<h3 id="postv1flows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Default Response|Inline|

<h3 id="postv1flows-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|projectId|string|true|none|none|
|externalId|string|true|none|none|
|ownerId|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|folderId|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|status|string|true|none|none|
|publishedVersionId|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|metadata|object \| null|false|none|none|
|» *anyOf*|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|» *anyOf*|null|false|none|none|
|operationStatus|string|true|none|none|
|timeSavedPerRun|number \| null|false|none|none|
|» *anyOf*|number|false|none|none|
|» *anyOf*|null|false|none|none|
|templateId|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|version|object|true|none|none|
|» id|string|true|none|none|
|» created|string|true|none|none|
|» updated|string|true|none|none|
|» flowId|string|true|none|none|
|» displayName|string|true|none|none|
|» trigger|object|true|none|none|
|» » *anyOf*|object|false|none|none|
|» » name|string|true|none|none|
|» » valid|boolean|true|none|none|
|» » displayName|string|true|none|none|
|» » nextAction|object|false|none|none|
|» » lastUpdatedDate|string|true|none|none|
|» » type|string|true|none|none|
|» » settings|object|true|none|none|
|» » » sampleData|object|false|none|none|
|» » » » sampleDataFileId|string|false|none|none|
|» » » » sampleDataInputFileId|string|false|none|none|
|» » » » lastTestDate|string|false|none|none|
|» » » propertySettings|object|true|none|none|
|» » » » **additionalProperties**|object|false|none|none|
|» » » » » type|string|true|none|none|
|» » » » » schema|object|false|none|none|
|» » » customLogoUrl|string|false|none|none|
|» » » pieceName|string|true|none|none|
|» » » pieceVersion|string|true|none|none|
|» » » triggerName|string|false|none|none|
|» » » input|object|true|none|none|
|» » » » **additionalProperties**|object|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » name|string|true|none|none|
|» » valid|boolean|true|none|none|
|» » displayName|string|true|none|none|
|» » nextAction|object|false|none|none|
|» » lastUpdatedDate|string|true|none|none|
|» » type|string|true|none|none|
|» » settings|object|true|none|none|
|» updatedBy|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» valid|boolean|true|none|none|
|» schemaVersion|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» agentIds|[string]|true|none|none|
|» state|string|true|none|none|
|» connectionIds|[string]|true|none|none|
|» backupFiles|object \| null|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » **additionalProperties**|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» notes|[object]|true|none|none|
|» » id|string|true|none|none|
|» » content|string|true|none|none|
|» » ownerId|string \| null|false|none|none|
|» » » *anyOf*|string|false|none|none|
|» » » *anyOf*|null|false|none|none|
|» » color|string|true|none|none|
|» » position|object|true|none|none|
|» » » x|number|true|none|none|
|» » » y|number|true|none|none|
|» » size|object|true|none|none|
|» » » width|number|true|none|none|
|» » » height|number|true|none|none|
|» » createdAt|string|true|none|none|
|» » updatedAt|string|true|none|none|
|triggerSource|object|false|none|none|
|» schedule|object \| null|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » type|string|true|none|none|
|» » cronExpression|string|true|none|none|
|» » timezone|string|true|none|none|
|» » *anyOf*|null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ENABLED|
|status|DISABLED|
|operationStatus|NONE|
|operationStatus|DELETING|
|operationStatus|ENABLING|
|operationStatus|DISABLING|
|» » type|PIECE_TRIGGER|
|» » » » » type|MANUAL|
|» » » » » type|DYNAMIC|
|» » type|EMPTY|
|» state|LOCKED|
|» state|DRAFT|
|» » color|orange|
|» » color|red|
|» » color|green|
|» » color|blue|
|» » color|purple|
|» » color|yellow|
|» » type|CRON_EXPRESSION|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/flows/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/flows/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/flows/{id}`

Get a flow by id

<h3 id="getv1flowsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionId|query|string|false|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "projectId": "string",
  "externalId": "string",
  "ownerId": "string",
  "folderId": "string",
  "status": "ENABLED",
  "publishedVersionId": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "operationStatus": "NONE",
  "timeSavedPerRun": 0,
  "templateId": "string",
  "version": {
    "id": "string",
    "created": "string",
    "updated": "string",
    "flowId": "string",
    "displayName": "string",
    "trigger": {
      "name": "string",
      "valid": true,
      "displayName": "string",
      "nextAction": null,
      "lastUpdatedDate": "string",
      "type": "PIECE_TRIGGER",
      "settings": {
        "sampleData": {
          "sampleDataFileId": "string",
          "sampleDataInputFileId": "string",
          "lastTestDate": "string"
        },
        "propertySettings": {
          "property1": {
            "type": "MANUAL",
            "schema": null
          },
          "property2": {
            "type": "MANUAL",
            "schema": null
          }
        },
        "customLogoUrl": "string",
        "pieceName": "string",
        "pieceVersion": "string",
        "triggerName": "string",
        "input": {
          "property1": null,
          "property2": null
        }
      }
    },
    "updatedBy": "string",
    "valid": true,
    "schemaVersion": "string",
    "agentIds": [
      "string"
    ],
    "state": "LOCKED",
    "connectionIds": [
      "string"
    ],
    "backupFiles": {
      "property1": "string",
      "property2": "string"
    },
    "notes": [
      {
        "id": "string",
        "content": "string",
        "ownerId": "string",
        "color": "orange",
        "position": {
          "x": 0,
          "y": 0
        },
        "size": {
          "width": 0,
          "height": 0
        },
        "createdAt": "string",
        "updatedAt": "string"
      }
    ]
  },
  "triggerSource": {
    "schedule": {
      "type": "CRON_EXPRESSION",
      "cronExpression": "string",
      "timezone": "string"
    }
  }
}
```

<h3 id="getv1flowsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1flowsid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|projectId|string|true|none|none|
|externalId|string|true|none|none|
|ownerId|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|folderId|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|status|string|true|none|none|
|publishedVersionId|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|metadata|object \| null|false|none|none|
|» *anyOf*|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|» *anyOf*|null|false|none|none|
|operationStatus|string|true|none|none|
|timeSavedPerRun|number \| null|false|none|none|
|» *anyOf*|number|false|none|none|
|» *anyOf*|null|false|none|none|
|templateId|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|version|object|true|none|none|
|» id|string|true|none|none|
|» created|string|true|none|none|
|» updated|string|true|none|none|
|» flowId|string|true|none|none|
|» displayName|string|true|none|none|
|» trigger|object|true|none|none|
|» » *anyOf*|object|false|none|none|
|» » name|string|true|none|none|
|» » valid|boolean|true|none|none|
|» » displayName|string|true|none|none|
|» » nextAction|object|false|none|none|
|» » lastUpdatedDate|string|true|none|none|
|» » type|string|true|none|none|
|» » settings|object|true|none|none|
|» » » sampleData|object|false|none|none|
|» » » » sampleDataFileId|string|false|none|none|
|» » » » sampleDataInputFileId|string|false|none|none|
|» » » » lastTestDate|string|false|none|none|
|» » » propertySettings|object|true|none|none|
|» » » » **additionalProperties**|object|false|none|none|
|» » » » » type|string|true|none|none|
|» » » » » schema|object|false|none|none|
|» » » customLogoUrl|string|false|none|none|
|» » » pieceName|string|true|none|none|
|» » » pieceVersion|string|true|none|none|
|» » » triggerName|string|false|none|none|
|» » » input|object|true|none|none|
|» » » » **additionalProperties**|object|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » name|string|true|none|none|
|» » valid|boolean|true|none|none|
|» » displayName|string|true|none|none|
|» » nextAction|object|false|none|none|
|» » lastUpdatedDate|string|true|none|none|
|» » type|string|true|none|none|
|» » settings|object|true|none|none|
|» updatedBy|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» valid|boolean|true|none|none|
|» schemaVersion|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» agentIds|[string]|true|none|none|
|» state|string|true|none|none|
|» connectionIds|[string]|true|none|none|
|» backupFiles|object \| null|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » **additionalProperties**|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» notes|[object]|true|none|none|
|» » id|string|true|none|none|
|» » content|string|true|none|none|
|» » ownerId|string \| null|false|none|none|
|» » » *anyOf*|string|false|none|none|
|» » » *anyOf*|null|false|none|none|
|» » color|string|true|none|none|
|» » position|object|true|none|none|
|» » » x|number|true|none|none|
|» » » y|number|true|none|none|
|» » size|object|true|none|none|
|» » » width|number|true|none|none|
|» » » height|number|true|none|none|
|» » createdAt|string|true|none|none|
|» » updatedAt|string|true|none|none|
|triggerSource|object|false|none|none|
|» schedule|object \| null|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » type|string|true|none|none|
|» » cronExpression|string|true|none|none|
|» » timezone|string|true|none|none|
|» » *anyOf*|null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ENABLED|
|status|DISABLED|
|operationStatus|NONE|
|operationStatus|DELETING|
|operationStatus|ENABLING|
|operationStatus|DISABLING|
|» » type|PIECE_TRIGGER|
|» » » » » type|MANUAL|
|» » » » » type|DYNAMIC|
|» » type|EMPTY|
|» state|LOCKED|
|» state|DRAFT|
|» » color|orange|
|» » color|red|
|» » color|green|
|» » color|blue|
|» » color|purple|
|» » color|yellow|
|» » type|CRON_EXPRESSION|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/flows/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/flows/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "type": "MOVE_ACTION",
    "request": {
      "name": "string",
      "newParentStep": "string",
      "stepLocationRelativeToNewParent": "AFTER",
      "branchIndex": 0
    }
  }'
```

`POST /v1/flows/{id}`

Apply an operation to a flow

> Body parameter

```json
{
  "type": "MOVE_ACTION",
  "request": {
    "name": "string",
    "newParentStep": "string",
    "stepLocationRelativeToNewParent": "AFTER",
    "branchIndex": 0
  }
}
```

<h3 id="postv1flowsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|false|none|
|» *anyOf*|body|object|false|Move Action|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » name|body|string|true|none|
|» » newParentStep|body|string|true|none|
|» » stepLocationRelativeToNewParent|body|string|false|none|
|» » branchIndex|body|number|false|none|
|» *anyOf*|body|object|false|Change Status|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » status|body|string|true|none|
|» *anyOf*|body|object|false|Lock and Publish|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » status|body|string|false|none|
|» *anyOf*|body|object|false|Copy as Draft|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » versionId|body|string|true|none|
|» *anyOf*|body|object|false|Lock Flow|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» *anyOf*|body|object|false|Import Flow|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » displayName|body|string|true|none|
|» » trigger|body|object|true|none|
|» » » *anyOf*|body|object|false|none|
|» » » name|body|string|true|none|
|» » » valid|body|boolean|true|none|
|» » » displayName|body|string|true|none|
|» » » nextAction|body|object|false|none|
|» » » lastUpdatedDate|body|string|true|none|
|» » » type|body|string|true|none|
|» » » settings|body|object|true|none|
|» » » » sampleData|body|object|false|none|
|» » » » » sampleDataFileId|body|string|false|none|
|» » » » » sampleDataInputFileId|body|string|false|none|
|» » » » » lastTestDate|body|string|false|none|
|» » » » propertySettings|body|object|true|none|
|» » » » » **additionalProperties**|body|object|false|none|
|» » » » » » type|body|string|true|none|
|» » » » » » schema|body|object|false|none|
|» » » » customLogoUrl|body|string|false|none|
|» » » » pieceName|body|string|true|none|
|» » » » pieceVersion|body|string|true|none|
|» » » » triggerName|body|string|false|none|
|» » » » input|body|object|true|none|
|» » » » » **additionalProperties**|body|object|false|none|
|» » » *anyOf*|body|object|false|none|
|» » » name|body|string|true|none|
|» » » valid|body|boolean|true|none|
|» » » displayName|body|string|true|none|
|» » » nextAction|body|object|false|none|
|» » » lastUpdatedDate|body|string|true|none|
|» » » type|body|string|true|none|
|» » » settings|body|object|true|none|
|» » schemaVersion|body|string \| null|false|none|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|null|false|none|
|» » notes|body|[object] \| null|false|none|
|» » » *anyOf*|body|[object]|false|none|
|» id|body|string|true|none|
|» content|body|string|true|none|
|» ownerId|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» color|body|string|true|none|
|» position|body|object|true|none|
|» » x|body|number|true|none|
|» » y|body|number|true|none|
|» size|body|object|true|none|
|» » width|body|number|true|none|
|» » height|body|number|true|none|
|» createdAt|body|string|true|none|
|» updatedAt|body|string|true|none|
|» » » *anyOf*|body|null|false|none|
|» *anyOf*|body|object|false|Change Name|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » displayName|body|string|true|none|
|» *anyOf*|body|object|false|Delete Action|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » names|body|[string]|true|none|
|» *anyOf*|body|object|false|Update Action|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » *anyOf*|body|object|false|none|
|» » name|body|string|true|none|
|» » valid|body|boolean|true|none|
|» » displayName|body|string|true|none|
|» » skip|body|boolean|false|none|
|» » type|body|string|true|none|
|» » settings|body|object|true|none|
|» » » customLogoUrl|body|string|false|none|
|» » » sourceCode|body|object|true|none|
|» » » » packageJson|body|string|true|none|
|» » » » code|body|string|true|none|
|» » » input|body|object|true|none|
|» » » » **additionalProperties**|body|object|false|none|
|» » » errorHandlingOptions|body|object|false|none|
|» » » » continueOnFailure|body|object|false|none|
|» » » » » value|body|boolean|false|none|
|» » » » retryOnFailure|body|object|false|none|
|» » » » » value|body|boolean|false|none|
|» » *anyOf*|body|object|false|none|
|» » name|body|string|true|none|
|» » valid|body|boolean|true|none|
|» » displayName|body|string|true|none|
|» » skip|body|boolean|false|none|
|» » type|body|string|true|none|
|» » settings|body|object|true|none|
|» » » customLogoUrl|body|string|false|none|
|» » » items|body|string|true|none|
|» » *anyOf*|body|object|false|none|
|» » name|body|string|true|none|
|» » valid|body|boolean|true|none|
|» » displayName|body|string|true|none|
|» » skip|body|boolean|false|none|
|» » type|body|string|true|none|
|» » settings|body|object|true|none|
|» » » customLogoUrl|body|string|false|none|
|» » » propertySettings|body|object|true|none|
|» » » » **additionalProperties**|body|object|false|none|
|» » » » » type|body|string|true|none|
|» » » » » schema|body|object|false|none|
|» » » pieceName|body|string|true|none|
|» » » pieceVersion|body|string|true|none|
|» » » actionName|body|string|false|none|
|» » » input|body|object|true|none|
|» » » » **additionalProperties**|body|object|false|none|
|» » » errorHandlingOptions|body|object|false|none|
|» » » » continueOnFailure|body|object|false|none|
|» » » » » value|body|boolean|false|none|
|» » » » retryOnFailure|body|object|false|none|
|» » » » » value|body|boolean|false|none|
|» » *anyOf*|body|object|false|none|
|» » name|body|string|true|none|
|» » valid|body|boolean|true|none|
|» » displayName|body|string|true|none|
|» » skip|body|boolean|false|none|
|» » type|body|string|true|none|
|» » settings|body|object|true|none|
|» » » customLogoUrl|body|string|false|none|
|» » » branches|body|[object]|true|none|
|» » » » *anyOf*|body|object|false|none|
|» » » » conditions|body|[[object]]|true|none|
|» » » » branchType|body|string|true|none|
|» » » » branchName|body|string|true|none|
|» » » » *anyOf*|body|object|false|none|
|» » » » branchType|body|string|true|none|
|» » » » branchName|body|string|true|none|
|» » » executionType|body|string|true|none|
|» *anyOf*|body|object|false|Add Action|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » parentStep|body|string|true|none|
|» » stepLocationRelativeToParent|body|string|false|none|
|» » branchIndex|body|number|false|none|
|» » action|body|object|true|none|
|» » » *anyOf*|body|object|false|none|
|» » » name|body|string|true|none|
|» » » valid|body|boolean|true|none|
|» » » displayName|body|string|true|none|
|» » » skip|body|boolean|false|none|
|» » » type|body|string|true|none|
|» » » settings|body|object|true|none|
|» » » » customLogoUrl|body|string|false|none|
|» » » » sourceCode|body|object|true|none|
|» » » » » packageJson|body|string|true|none|
|» » » » » code|body|string|true|none|
|» » » » input|body|object|true|none|
|» » » » » **additionalProperties**|body|object|false|none|
|» » » » errorHandlingOptions|body|object|false|none|
|» » » » » continueOnFailure|body|object|false|none|
|» » » » » » value|body|boolean|false|none|
|» » » » » retryOnFailure|body|object|false|none|
|» » » » » » value|body|boolean|false|none|
|» » » *anyOf*|body|object|false|none|
|» » » name|body|string|true|none|
|» » » valid|body|boolean|true|none|
|» » » displayName|body|string|true|none|
|» » » skip|body|boolean|false|none|
|» » » type|body|string|true|none|
|» » » settings|body|object|true|none|
|» » » » customLogoUrl|body|string|false|none|
|» » » » items|body|string|true|none|
|» » » *anyOf*|body|object|false|none|
|» » » name|body|string|true|none|
|» » » valid|body|boolean|true|none|
|» » » displayName|body|string|true|none|
|» » » skip|body|boolean|false|none|
|» » » type|body|string|true|none|
|» » » settings|body|object|true|none|
|» » » » customLogoUrl|body|string|false|none|
|» » » » propertySettings|body|object|true|none|
|» » » » » **additionalProperties**|body|object|false|none|
|» » » » » » type|body|string|true|none|
|» » » » » » schema|body|object|false|none|
|» » » » pieceName|body|string|true|none|
|» » » » pieceVersion|body|string|true|none|
|» » » » actionName|body|string|false|none|
|» » » » input|body|object|true|none|
|» » » » » **additionalProperties**|body|object|false|none|
|» » » » errorHandlingOptions|body|object|false|none|
|» » » » » continueOnFailure|body|object|false|none|
|» » » » » » value|body|boolean|false|none|
|» » » » » retryOnFailure|body|object|false|none|
|» » » » » » value|body|boolean|false|none|
|» » » *anyOf*|body|object|false|none|
|» » » name|body|string|true|none|
|» » » valid|body|boolean|true|none|
|» » » displayName|body|string|true|none|
|» » » skip|body|boolean|false|none|
|» » » type|body|string|true|none|
|» » » settings|body|object|true|none|
|» » » » customLogoUrl|body|string|false|none|
|» » » » branches|body|[object]|true|none|
|» » » » » *anyOf*|body|object|false|none|
|» » » » » conditions|body|[[object]]|true|none|
|» » » » » branchType|body|string|true|none|
|» » » » » branchName|body|string|true|none|
|» » » » » *anyOf*|body|object|false|none|
|» » » » » branchType|body|string|true|none|
|» » » » » branchName|body|string|true|none|
|» » » » executionType|body|string|true|none|
|» *anyOf*|body|object|false|Update Trigger|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » *anyOf*|body|object|false|none|
|» » name|body|string|true|none|
|» » valid|body|boolean|true|none|
|» » displayName|body|string|true|none|
|» » nextAction|body|object|false|none|
|» » type|body|string|true|none|
|» » settings|body|object|true|none|
|» » *anyOf*|body|object|false|none|
|» » name|body|string|true|none|
|» » valid|body|boolean|true|none|
|» » displayName|body|string|true|none|
|» » nextAction|body|object|false|none|
|» » type|body|string|true|none|
|» » settings|body|object|true|none|
|» » » propertySettings|body|object|true|none|
|» » » » **additionalProperties**|body|object|false|none|
|» » » » » type|body|string|true|none|
|» » » » » schema|body|object|false|none|
|» » » customLogoUrl|body|string|false|none|
|» » » pieceName|body|string|true|none|
|» » » pieceVersion|body|string|true|none|
|» » » triggerName|body|string|false|none|
|» » » input|body|object|true|none|
|» » » » **additionalProperties**|body|object|false|none|
|» *anyOf*|body|object|false|Change Folder|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » folderId|body|string \| null|false|none|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|null|false|none|
|» *anyOf*|body|object|false|Duplicate Action|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » stepName|body|string|true|none|
|» *anyOf*|body|object|false|Delete Branch|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » branchIndex|body|number|true|none|
|» » stepName|body|string|true|none|
|» *anyOf*|body|object|false|Add Branch|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » branchIndex|body|number|true|none|
|» » stepName|body|string|true|none|
|» » conditions|body|[[object]]|false|none|
|» » branchName|body|string|true|none|
|» *anyOf*|body|object|false|Duplicate Branch|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » branchIndex|body|number|true|none|
|» » stepName|body|string|true|none|
|» *anyOf*|body|object|false|Skip Action|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » names|body|[string]|true|none|
|» » skip|body|boolean|true|none|
|» *anyOf*|body|object|false|Update Metadata|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » metadata|body|object \| null|false|none|
|» » » *anyOf*|body|object|false|none|
|» » » **additionalProperties**|body|object|false|none|
|» » » *anyOf*|body|null|false|none|
|» *anyOf*|body|object|false|none|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » sourceBranchIndex|body|number|true|none|
|» » targetBranchIndex|body|number|true|none|
|» » stepName|body|string|true|none|
|» *anyOf*|body|object|false|none|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » stepName|body|string|true|none|
|» » payload|body|object|true|none|
|» » type|body|string|true|none|
|» *anyOf*|body|object|false|Update Minutes Saved|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » timeSavedPerRun|body|number \| null|false|none|
|» » » *anyOf*|body|number|false|none|
|» » » *anyOf*|body|null|false|none|
|» *anyOf*|body|object|false|Update Owner|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » ownerId|body|string|true|none|
|» *anyOf*|body|object|false|Update Note|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » id|body|string|true|none|
|» » content|body|string|true|none|
|» » ownerId|body|string \| null|false|none|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|null|false|none|
|» » color|body|string|true|none|
|» » position|body|object|true|none|
|» » » x|body|number|true|none|
|» » » y|body|number|true|none|
|» » size|body|object|true|none|
|» » » width|body|number|true|none|
|» » » height|body|number|true|none|
|» *anyOf*|body|object|false|Delete Note|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » id|body|string|true|none|
|» *anyOf*|body|object|false|Add Note|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » id|body|string|true|none|
|» » content|body|string|true|none|
|» » color|body|string|true|none|
|» » position|body|object|true|none|
|» » » x|body|number|true|none|
|» » » y|body|number|true|none|
|» » size|body|object|true|none|
|» » » width|body|number|true|none|
|» » » height|body|number|true|none|
|» *anyOf*|body|object|false|Update Sample Data Info|
|» type|body|string|true|none|
|» request|body|object|true|none|
|» » stepName|body|string|true|none|
|» » sampleDataSettings|body|object \| null|false|none|
|» » » *anyOf*|body|object|false|none|
|» » » sampleDataFileId|body|string|false|none|
|» » » sampleDataInputFileId|body|string|false|none|
|» » » *anyOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|MOVE_ACTION|
|» » stepLocationRelativeToNewParent|AFTER|
|» » stepLocationRelativeToNewParent|INSIDE_LOOP|
|» » stepLocationRelativeToNewParent|INSIDE_BRANCH|
|» type|CHANGE_STATUS|
|» » status|ENABLED|
|» » status|DISABLED|
|» type|LOCK_AND_PUBLISH|
|» » status|ENABLED|
|» » status|DISABLED|
|» type|USE_AS_DRAFT|
|» type|LOCK_FLOW|
|» type|IMPORT_FLOW|
|» » » type|PIECE_TRIGGER|
|» » » » » » type|MANUAL|
|» » » » » » type|DYNAMIC|
|» » » type|EMPTY|
|» color|orange|
|» color|red|
|» color|green|
|» color|blue|
|» color|purple|
|» color|yellow|
|» type|CHANGE_NAME|
|» type|DELETE_ACTION|
|» type|UPDATE_ACTION|
|» » type|CODE|
|» » type|LOOP_ON_ITEMS|
|» » type|PIECE|
|» » » » » type|MANUAL|
|» » » » » type|DYNAMIC|
|» » type|ROUTER|
|» » » » branchType|CONDITION|
|» » » » branchType|FALLBACK|
|» » » executionType|EXECUTE_ALL_MATCH|
|» » » executionType|EXECUTE_FIRST_MATCH|
|» type|ADD_ACTION|
|» » stepLocationRelativeToParent|AFTER|
|» » stepLocationRelativeToParent|INSIDE_LOOP|
|» » stepLocationRelativeToParent|INSIDE_BRANCH|
|» » » type|CODE|
|» » » type|LOOP_ON_ITEMS|
|» » » type|PIECE|
|» » » » » » type|MANUAL|
|» » » » » » type|DYNAMIC|
|» » » type|ROUTER|
|» » » » » branchType|CONDITION|
|» » » » » branchType|FALLBACK|
|» » » » executionType|EXECUTE_ALL_MATCH|
|» » » » executionType|EXECUTE_FIRST_MATCH|
|» type|UPDATE_TRIGGER|
|» » type|EMPTY|
|» » type|PIECE_TRIGGER|
|» » » » » type|MANUAL|
|» » » » » type|DYNAMIC|
|» type|CHANGE_FOLDER|
|» type|DUPLICATE_ACTION|
|» type|DELETE_BRANCH|
|» type|ADD_BRANCH|
|» type|DUPLICATE_BRANCH|
|» type|SET_SKIP_ACTION|
|» type|UPDATE_METADATA|
|» type|MOVE_BRANCH|
|» type|SAVE_SAMPLE_DATA|
|» » type|INPUT|
|» » type|OUTPUT|
|» type|UPDATE_MINUTES_SAVED|
|» type|UPDATE_OWNER|
|» type|UPDATE_NOTE|
|» » color|orange|
|» » color|red|
|» » color|green|
|» » color|blue|
|» » color|purple|
|» » color|yellow|
|» type|DELETE_NOTE|
|» type|ADD_NOTE|
|» » color|orange|
|» » color|red|
|» » color|green|
|» » color|blue|
|» » color|purple|
|» » color|yellow|
|» type|UPDATE_SAMPLE_DATA_INFO|

<h3 id="postv1flowsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## delete/v1/flows/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/flows/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/flows/{id}`

Delete a flow

<h3 id="deletev1flowsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 204 Response

```json
null
```

<h3 id="deletev1flowsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/flows/{id}/template

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/flows/string/template \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/flows/{id}/template`

Export flow as template

<h3 id="getv1flowsidtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionId|query|string|false|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "type": "OFFICIAL",
  "summary": "string",
  "description": "string",
  "tags": [
    {
      "title": "string",
      "color": "string",
      "icon": "string"
    }
  ],
  "blogUrl": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "author": "string",
  "categories": [
    "string"
  ],
  "pieces": [
    "string"
  ],
  "flows": [
    {
      "displayName": "string",
      "trigger": {
        "name": "string",
        "valid": true,
        "displayName": "string",
        "nextAction": null,
        "lastUpdatedDate": "string",
        "type": "PIECE_TRIGGER",
        "settings": {
          "sampleData": {
            "sampleDataFileId": "string",
            "sampleDataInputFileId": "string",
            "lastTestDate": "string"
          },
          "propertySettings": {
            "property1": {
              "type": "MANUAL",
              "schema": null
            },
            "property2": {
              "type": "MANUAL",
              "schema": null
            }
          },
          "customLogoUrl": "string",
          "pieceName": "string",
          "pieceVersion": "string",
          "triggerName": "string",
          "input": {
            "property1": null,
            "property2": null
          }
        }
      },
      "valid": true,
      "schemaVersion": "string",
      "description": "string",
      "notes": [
        {
          "id": "string",
          "content": "string",
          "ownerId": "string",
          "color": "orange",
          "position": {
            "x": 0,
            "y": 0
          },
          "size": {
            "width": 0,
            "height": 0
          },
          "createdAt": "string",
          "updatedAt": "string"
        }
      ]
    }
  ],
  "tables": [
    {
      "name": "string",
      "externalId": "string",
      "fields": [
        {
          "name": "string",
          "type": "string",
          "data": {
            "options": [
              {
                "value": "string"
              }
            ]
          },
          "externalId": "string"
        }
      ],
      "status": "string",
      "trigger": "string",
      "data": {
        "type": "CSV",
        "rows": [
          [
            {
              "fieldId": "string",
              "value": "string"
            }
          ]
        ]
      }
    }
  ],
  "status": "PUBLISHED"
}
```

<h3 id="getv1flowsidtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1flowsidtemplate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|type|string|true|none|none|
|summary|string|true|none|none|
|description|string|true|none|none|
|tags|[object]|true|none|none|
|» title|string|true|none|none|
|» color|string|true|none|none|
|» icon|string|false|none|none|
|blogUrl|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|metadata|object \| null|false|none|none|
|» *anyOf*|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|» *anyOf*|null|false|none|none|
|author|string|true|none|none|
|categories|[string]|true|none|none|
|pieces|[string]|true|none|none|
|flows|[object]|false|none|none|
|» displayName|string|true|none|none|
|» trigger|object|true|none|none|
|» » *anyOf*|object|false|none|none|
|» » name|string|true|none|none|
|» » valid|boolean|true|none|none|
|» » displayName|string|true|none|none|
|» » nextAction|object|false|none|none|
|» » lastUpdatedDate|string|true|none|none|
|» » type|string|true|none|none|
|» » settings|object|true|none|none|
|» » » sampleData|object|false|none|none|
|» » » » sampleDataFileId|string|false|none|none|
|» » » » sampleDataInputFileId|string|false|none|none|
|» » » » lastTestDate|string|false|none|none|
|» » » propertySettings|object|true|none|none|
|» » » » **additionalProperties**|object|false|none|none|
|» » » » » type|string|true|none|none|
|» » » » » schema|object|false|none|none|
|» » » customLogoUrl|string|false|none|none|
|» » » pieceName|string|true|none|none|
|» » » pieceVersion|string|true|none|none|
|» » » triggerName|string|false|none|none|
|» » » input|object|true|none|none|
|» » » » **additionalProperties**|object|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » name|string|true|none|none|
|» » valid|boolean|true|none|none|
|» » displayName|string|true|none|none|
|» » nextAction|object|false|none|none|
|» » lastUpdatedDate|string|true|none|none|
|» » type|string|true|none|none|
|» » settings|object|true|none|none|
|» valid|boolean|true|none|none|
|» schemaVersion|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» description|string|false|none|none|
|» notes|[object]|false|none|none|
|» » id|string|true|none|none|
|» » content|string|true|none|none|
|» » ownerId|string \| null|false|none|none|
|» » » *anyOf*|string|false|none|none|
|» » » *anyOf*|null|false|none|none|
|» » color|string|true|none|none|
|» » position|object|true|none|none|
|» » » x|number|true|none|none|
|» » » y|number|true|none|none|
|» » size|object|true|none|none|
|» » » width|number|true|none|none|
|» » » height|number|true|none|none|
|» » createdAt|string|true|none|none|
|» » updatedAt|string|true|none|none|
|tables|[object]|false|none|none|
|» name|string|true|none|none|
|» externalId|string|true|none|none|
|» fields|[object]|true|none|none|
|» » name|string|true|none|none|
|» » type|string|true|none|none|
|» » data|object \| null|false|none|none|
|» » » *anyOf*|object|false|none|none|
|» » » options|[object]|true|none|none|
|» » » » value|string|true|none|none|
|» » » *anyOf*|null|false|none|none|
|» » externalId|string|true|none|none|
|» status|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» trigger|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» data|object \| null|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » type|string|true|none|none|
|» » rows|[[object]]|true|none|none|
|» » *anyOf*|null|false|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OFFICIAL|
|type|SHARED|
|type|CUSTOM|
|» » type|PIECE_TRIGGER|
|» » » » » type|MANUAL|
|» » » » » type|DYNAMIC|
|» » type|EMPTY|
|» » color|orange|
|» » color|red|
|» » color|green|
|» » color|blue|
|» » color|purple|
|» » color|yellow|
|» » type|CSV|
|status|PUBLISHED|
|status|ARCHIVED|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-sample-data">sample-data</h1>

## post/v1/sample-data/test-step

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/sample-data/test-step \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "projectId": "string",
    "flowVersionId": "string",
    "stepName": "string"
  }'
```

`POST /v1/sample-data/test-step`

> Body parameter

```json
{
  "projectId": "string",
  "flowVersionId": "string",
  "stepName": "string"
}
```

<h3 id="postv1sample-datatest-step-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» projectId|body|string|true|none|
|» flowVersionId|body|string|true|none|
|» stepName|body|string|true|none|

<h3 id="postv1sample-datatest-step-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/sample-data

> Code samples

```bash
curl 'https://cloud.activepieces.com/api/v1/sample-data?flowId=string&flowVersionId=string&stepName=string&projectId=string&type=INPUT' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/sample-data`

<h3 id="getv1sample-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowId|query|string|true|none|
|flowVersionId|query|string|true|none|
|stepName|query|string|true|none|
|projectId|query|string|true|none|
|type|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|INPUT|
|type|OUTPUT|

<h3 id="getv1sample-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-flow-runs">flow-runs</h1>

## get/v1/flow-runs

> Code samples

```bash
curl 'https://cloud.activepieces.com/api/v1/flow-runs?projectId=string&includeArchived=true' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/flow-runs`

List Flow Runs

<h3 id="getv1flow-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowId|query|[string]|false|none|
|tags|query|[string]|false|none|
|status|query|[string]|false|none|
|limit|query|number|false|none|
|cursor|query|string|false|none|
|createdAfter|query|string|false|none|
|createdBefore|query|string|false|none|
|projectId|query|string|true|none|
|failedStepName|query|string|false|none|
|flowRunIds|query|[string]|false|none|
|includeArchived|query|boolean|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|FAILED|
|status|QUOTA_EXCEEDED|
|status|INTERNAL_ERROR|
|status|PAUSED|
|status|QUEUED|
|status|RUNNING|
|status|SUCCEEDED|
|status|MEMORY_LIMIT_EXCEEDED|
|status|TIMEOUT|
|status|CANCELED|
|status|LOG_SIZE_EXCEEDED|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "created": "string",
      "updated": "string",
      "projectId": "string",
      "flowId": "string",
      "parentRunId": "string",
      "failParentOnFailure": true,
      "triggeredBy": "string",
      "tags": [
        "string"
      ],
      "flowVersionId": "string",
      "flowVersion": {
        "displayName": "string"
      },
      "logsFileId": "string",
      "status": "FAILED",
      "startTime": "string",
      "finishTime": "string",
      "environment": "PRODUCTION",
      "failedStep": {
        "name": "string",
        "displayName": "string"
      },
      "stepNameToTest": "string",
      "archivedAt": "string",
      "stepsCount": 0
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="getv1flow-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1flow-runs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» id|string|true|none|none|
|» created|string|true|none|none|
|» updated|string|true|none|none|
|» projectId|string|true|none|none|
|» flowId|string|true|none|none|
|» parentRunId|string|false|none|none|
|» failParentOnFailure|boolean|true|none|none|
|» triggeredBy|string|false|none|none|
|» tags|[string]|false|none|none|
|» flowVersionId|string|true|none|none|
|» flowVersion|object|false|none|none|
|» » displayName|string|false|none|none|
|» logsFileId|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» status|string|true|none|none|
|» startTime|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» finishTime|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» environment|string|true|none|none|
|» failedStep|object|false|none|none|
|» » name|string|true|none|none|
|» » displayName|string|true|none|none|
|» stepNameToTest|string|false|none|none|
|» archivedAt|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» stepsCount|number|false|none|none|
|next|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|previous|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|FAILED|
|» status|QUOTA_EXCEEDED|
|» status|INTERNAL_ERROR|
|» status|PAUSED|
|» status|QUEUED|
|» status|RUNNING|
|» status|SUCCEEDED|
|» status|MEMORY_LIMIT_EXCEEDED|
|» status|TIMEOUT|
|» status|CANCELED|
|» status|LOG_SIZE_EXCEEDED|
|» environment|PRODUCTION|
|» environment|TESTING|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/flow-runs/count-by-status

> Code samples

```bash
curl 'https://cloud.activepieces.com/api/v1/flow-runs/count-by-status?projectId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/flow-runs/count-by-status`

Count Flow Runs by Status

<h3 id="getv1flow-runscount-by-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|string|true|none|
|createdAfter|query|string|false|none|
|createdBefore|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "status": "FAILED",
      "count": 0
    }
  ]
}
```

<h3 id="getv1flow-runscount-by-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1flow-runscount-by-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» status|string|true|none|none|
|» count|number|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|FAILED|
|» status|QUOTA_EXCEEDED|
|» status|INTERNAL_ERROR|
|» status|PAUSED|
|» status|QUEUED|
|» status|RUNNING|
|» status|SUCCEEDED|
|» status|MEMORY_LIMIT_EXCEEDED|
|» status|TIMEOUT|
|» status|CANCELED|
|» status|LOG_SIZE_EXCEEDED|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/flow-runs/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/flow-runs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/flow-runs/{id}`

Get Flow Run

<h3 id="getv1flow-runsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "projectId": "string",
  "flowId": "string",
  "parentRunId": "string",
  "failParentOnFailure": true,
  "triggeredBy": "string",
  "tags": [
    "string"
  ],
  "flowVersionId": "string",
  "flowVersion": {
    "displayName": "string"
  },
  "logsFileId": "string",
  "status": "FAILED",
  "startTime": "string",
  "finishTime": "string",
  "environment": "PRODUCTION",
  "steps": {
    "property1": null,
    "property2": null
  },
  "failedStep": {
    "name": "string",
    "displayName": "string"
  },
  "stepNameToTest": "string",
  "archivedAt": "string",
  "stepsCount": 0
}
```

<h3 id="getv1flow-runsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|[flow-run](#schemaflow-run)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/flow-runs/cancel

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/flow-runs/cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "projectId": "string",
    "flowRunIds": [
      "string"
    ],
    "excludeFlowRunIds": [
      "string"
    ],
    "status": [
      "PAUSED"
    ],
    "flowId": [
      "string"
    ],
    "createdAfter": "string",
    "createdBefore": "string"
  }'
```

`POST /v1/flow-runs/cancel`

Cancel multiple paused/queued flow runs

> Body parameter

```json
{
  "projectId": "string",
  "flowRunIds": [
    "string"
  ],
  "excludeFlowRunIds": [
    "string"
  ],
  "status": [
    "PAUSED"
  ],
  "flowId": [
    "string"
  ],
  "createdAfter": "string",
  "createdBefore": "string"
}
```

<h3 id="postv1flow-runscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» projectId|body|string|true|none|
|» flowRunIds|body|[string]|false|none|
|» excludeFlowRunIds|body|[string]|false|none|
|» status|body|[string]|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|string|false|none|
|» flowId|body|[string]|false|none|
|» createdAfter|body|string|false|none|
|» createdBefore|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|PAUSED|
|» » *anyOf*|QUEUED|

<h3 id="postv1flow-runscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-app-connections">app-connections</h1>

## get/v1/app-connections

> Code samples

```bash
curl 'https://cloud.activepieces.com/api/v1/app-connections?projectId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/app-connections`

List app connections

<h3 id="getv1app-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|projectId|query|string|true|none|
|scope|query|string|false|none|
|pieceName|query|[string]|false|none|
|displayName|query|string|false|none|
|status|query|[string]|false|none|
|limit|query|number|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|scope|PROJECT|
|scope|PLATFORM|
|status|ACTIVE|
|status|MISSING|
|status|ERROR|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "created": "string",
      "updated": "string",
      "externalId": "string",
      "displayName": "string",
      "type": "OAUTH2",
      "pieceName": "string",
      "projectIds": [
        "string"
      ],
      "platformId": "string",
      "scope": "PROJECT",
      "status": "ACTIVE",
      "ownerId": "string",
      "owner": {
        "id": "string",
        "email": "string",
        "firstName": "string",
        "status": "ACTIVE",
        "externalId": "string",
        "platformId": "string",
        "platformRole": "ADMIN",
        "lastName": "string",
        "created": "string",
        "updated": "string",
        "lastActiveDate": "string",
        "imageUrl": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "flowIds": [
        "string"
      ],
      "pieceVersion": "string",
      "preSelectForNewProjects": true,
      "usingSecretManager": true
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="getv1app-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1app-connections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[app-connection](#schemaapp-connection)]|true|none|none|
|next|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|previous|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/app-connections

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/app-connections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "externalId": "string",
    "displayName": "string",
    "pieceName": "string",
    "projectId": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "pieceVersion": "string",
    "type": "SECRET_TEXT",
    "value": {
      "type": "SECRET_TEXT",
      "secret_text": "string"
    }
  }'
```

`POST /v1/app-connections`

Upsert an app connection based on the app name

> Body parameter

```json
{
  "externalId": "string",
  "displayName": "string",
  "pieceName": "string",
  "projectId": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "pieceVersion": "string",
  "type": "SECRET_TEXT",
  "value": {
    "type": "SECRET_TEXT",
    "secret_text": "string"
  }
}
```

<h3 id="postv1app-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» *anyOf*|body|object|false|Secret Text|
|» externalId|body|string|true|none|
|» displayName|body|string|true|none|
|» pieceName|body|string|true|none|
|» projectId|body|string|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» pieceVersion|body|string|false|none|
|» type|body|string|true|none|
|» value|body|object|true|none|
|» » type|body|string|true|none|
|» » secret_text|body|string|true|none|
|» *anyOf*|body|object|false|OAuth2|
|» externalId|body|string|true|none|
|» displayName|body|string|true|none|
|» pieceName|body|string|true|none|
|» projectId|body|string|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» pieceVersion|body|string|false|none|
|» type|body|string|true|none|
|» value|body|object|true|none|
|» » client_id|body|string|true|none|
|» » code|body|string|true|none|
|» » code_challenge|body|string|false|none|
|» » scope|body|string|true|none|
|» » authorization_method|body|string|false|none|
|» » client_secret|body|string|true|none|
|» » grant_type|body|string|false|none|
|» » props|body|object|false|none|
|» » » **additionalProperties**|body|object|false|none|
|» » redirect_url|body|string|true|none|
|» » type|body|string|true|none|
|» *anyOf*|body|object|false|Cloud OAuth2|
|» externalId|body|string|true|none|
|» displayName|body|string|true|none|
|» pieceName|body|string|true|none|
|» projectId|body|string|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» pieceVersion|body|string|false|none|
|» type|body|string|true|none|
|» value|body|object|true|none|
|» » client_id|body|string|true|none|
|» » code|body|string|true|none|
|» » code_challenge|body|string|false|none|
|» » scope|body|string|true|none|
|» » authorization_method|body|string|false|none|
|» » props|body|object|false|none|
|» » » **additionalProperties**|body|object|false|none|
|» » type|body|string|true|none|
|» *anyOf*|body|object|false|Platform OAuth2|
|» externalId|body|string|true|none|
|» displayName|body|string|true|none|
|» pieceName|body|string|true|none|
|» projectId|body|string|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» pieceVersion|body|string|false|none|
|» type|body|string|true|none|
|» value|body|object|true|none|
|» » client_id|body|string|true|none|
|» » code|body|string|true|none|
|» » code_challenge|body|string|false|none|
|» » scope|body|string|true|none|
|» » authorization_method|body|string|false|none|
|» » props|body|object|false|none|
|» » » **additionalProperties**|body|object|false|none|
|» » type|body|string|true|none|
|» » redirect_url|body|string|true|none|
|» *anyOf*|body|object|false|Basic Auth|
|» externalId|body|string|true|none|
|» displayName|body|string|true|none|
|» pieceName|body|string|true|none|
|» projectId|body|string|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» pieceVersion|body|string|false|none|
|» type|body|string|true|none|
|» value|body|object|true|none|
|» » username|body|string|true|none|
|» » password|body|string|true|none|
|» » type|body|string|true|none|
|» *anyOf*|body|object|false|Custom Auth|
|» externalId|body|string|true|none|
|» displayName|body|string|true|none|
|» pieceName|body|string|true|none|
|» projectId|body|string|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» pieceVersion|body|string|false|none|
|» type|body|string|true|none|
|» value|body|object|true|none|
|» » type|body|string|true|none|
|» » props|body|object|true|none|
|» » » **additionalProperties**|body|object|false|none|
|» *anyOf*|body|object|false|No Auth|
|» externalId|body|string|true|none|
|» displayName|body|string|true|none|
|» pieceName|body|string|true|none|
|» projectId|body|string|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» pieceVersion|body|string|false|none|
|» type|body|string|true|none|
|» value|body|object|true|none|
|» » type|body|string|true|none|
|» *anyOf*|body|object|false|Placeholder|
|» externalId|body|string|true|none|
|» displayName|body|string|true|none|
|» pieceName|body|string|true|none|
|» projectId|body|string|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» pieceVersion|body|string|false|none|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|SECRET_TEXT|
|» » type|SECRET_TEXT|
|» type|OAUTH2|
|» » authorization_method|HEADER|
|» » authorization_method|BODY|
|» » grant_type|authorization_code|
|» » grant_type|client_credentials|
|» » type|OAUTH2|
|» type|CLOUD_OAUTH2|
|» » authorization_method|HEADER|
|» » authorization_method|BODY|
|» » type|CLOUD_OAUTH2|
|» type|PLATFORM_OAUTH2|
|» » authorization_method|HEADER|
|» » authorization_method|BODY|
|» » type|PLATFORM_OAUTH2|
|» type|BASIC_AUTH|
|» » type|BASIC_AUTH|
|» type|CUSTOM_AUTH|
|» » type|CUSTOM_AUTH|
|» type|NO_AUTH|
|» » type|NO_AUTH|
|» type|PLACEHOLDER|

<h3 id="postv1app-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/app-connections/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/app-connections/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/app-connections/{id}`

Get an app connection by id

<h3 id="getv1app-connectionsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "externalId": "string",
  "displayName": "string",
  "type": "OAUTH2",
  "pieceName": "string",
  "projectIds": [
    "string"
  ],
  "platformId": "string",
  "scope": "PROJECT",
  "status": "ACTIVE",
  "ownerId": "string",
  "owner": {
    "id": "string",
    "email": "string",
    "firstName": "string",
    "status": "ACTIVE",
    "externalId": "string",
    "platformId": "string",
    "platformRole": "ADMIN",
    "lastName": "string",
    "created": "string",
    "updated": "string",
    "lastActiveDate": "string",
    "imageUrl": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "flowIds": [
    "string"
  ],
  "pieceVersion": "string",
  "preSelectForNewProjects": true,
  "usingSecretManager": true
}
```

<h3 id="getv1app-connectionsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|[app-connection](#schemaapp-connection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/app-connections/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/app-connections/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "metadata": {
      "property1": null,
      "property2": null
    }
  }'
```

`POST /v1/app-connections/{id}`

Update an app connection value

> Body parameter

```json
{
  "displayName": "string",
  "metadata": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="postv1app-connectionsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|true|none|
|» displayName|body|string|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|

<h3 id="postv1app-connectionsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## delete/v1/app-connections/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/app-connections/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/app-connections/{id}`

Delete an app connection

<h3 id="deletev1app-connectionsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 204 Response

```json
null
```

<h3 id="deletev1app-connectionsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/app-connections/owners

> Code samples

```bash
curl 'https://cloud.activepieces.com/api/v1/app-connections/owners?projectId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/app-connections/owners`

List app connection owners

<h3 id="getv1app-connectionsowners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "firstName": "string",
      "lastName": "string",
      "email": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="getv1app-connectionsowners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1app-connectionsowners-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» firstName|string|true|none|none|
|» lastName|string|true|none|none|
|» email|string|true|none|none|
|next|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|previous|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/app-connections/replace

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/app-connections/replace \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "sourceAppConnectionId": "string",
    "targetAppConnectionId": "string",
    "projectId": "string"
  }'
```

`POST /v1/app-connections/replace`

Replace app connections

> Body parameter

```json
{
  "sourceAppConnectionId": "string",
  "targetAppConnectionId": "string",
  "projectId": "string"
}
```

<h3 id="postv1app-connectionsreplace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» sourceAppConnectionId|body|string|true|none|
|» targetAppConnectionId|body|string|true|none|
|» projectId|body|string|true|none|

> Example responses

> 204 Response

```json
null
```

<h3 id="postv1app-connectionsreplace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/app-connections/oauth2/authorization-url

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/app-connections/oauth2/authorization-url \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "pieceName": "string",
    "pieceVersion": "string",
    "projectId": "string",
    "clientId": "string",
    "redirectUrl": "string",
    "props": {
      "property1": null,
      "property2": null
    }
  }'
```

`POST /v1/app-connections/oauth2/authorization-url`

Get OAuth2 authorization URL

> Body parameter

```json
{
  "pieceName": "string",
  "pieceVersion": "string",
  "projectId": "string",
  "clientId": "string",
  "redirectUrl": "string",
  "props": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="postv1app-connectionsoauth2authorization-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» pieceName|body|string|true|none|
|» pieceVersion|body|string|false|none|
|» projectId|body|string|false|none|
|» clientId|body|string|true|none|
|» redirectUrl|body|string|true|none|
|» props|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "authorizationUrl": "string",
  "codeVerifier": "string"
}
```

<h3 id="postv1app-connectionsoauth2authorization-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="postv1app-connectionsoauth2authorization-url-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizationUrl|string|true|none|none|
|codeVerifier|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-variables">variables</h1>

## get/v1/variables

> Code samples

```bash
curl 'https://cloud.activepieces.com/api/v1/variables?projectId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/variables`

List project variables

<h3 id="getv1variables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|string|true|none|
|cursor|query|string|false|none|
|limit|query|number|false|none|
|name|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "created": "string",
      "updated": "string",
      "name": "string",
      "projectId": "string",
      "platformId": "string",
      "ownerId": "string",
      "owner": {
        "id": "string",
        "email": "string",
        "firstName": "string",
        "status": "ACTIVE",
        "externalId": "string",
        "platformId": "string",
        "platformRole": "ADMIN",
        "lastName": "string",
        "created": "string",
        "updated": "string",
        "lastActiveDate": "string",
        "imageUrl": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="getv1variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1variables-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[variable](#schemavariable)]|true|none|none|
|next|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|previous|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/variables

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/variables \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "projectId": "string",
    "name": "string",
    "value": "string",
    "metadata": {
      "property1": null,
      "property2": null
    }
  }'
```

`POST /v1/variables`

Create a project variable. Fails if a variable with the same name already exists.

> Body parameter

```json
{
  "projectId": "string",
  "name": "string",
  "value": "string",
  "metadata": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="postv1variables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» projectId|body|string|true|none|
|» name|body|string|true|none|
|» value|body|string|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "name": "string",
  "projectId": "string",
  "platformId": "string",
  "ownerId": "string",
  "owner": {
    "id": "string",
    "email": "string",
    "firstName": "string",
    "status": "ACTIVE",
    "externalId": "string",
    "platformId": "string",
    "platformRole": "ADMIN",
    "lastName": "string",
    "created": "string",
    "updated": "string",
    "lastActiveDate": "string",
    "imageUrl": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="postv1variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Default Response|[variable](#schemavariable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/variables/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/variables/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "value": "string",
    "metadata": {
      "property1": null,
      "property2": null
    }
  }'
```

`POST /v1/variables/{id}`

Update a project variable value or metadata. Name cannot be changed.

> Body parameter

```json
{
  "value": "string",
  "metadata": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="postv1variablesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|false|none|
|» value|body|string|false|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "name": "string",
  "projectId": "string",
  "platformId": "string",
  "ownerId": "string",
  "owner": {
    "id": "string",
    "email": "string",
    "firstName": "string",
    "status": "ACTIVE",
    "externalId": "string",
    "platformId": "string",
    "platformRole": "ADMIN",
    "lastName": "string",
    "created": "string",
    "updated": "string",
    "lastActiveDate": "string",
    "imageUrl": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="postv1variablesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|[variable](#schemavariable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## delete/v1/variables/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/variables/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/variables/{id}`

Delete a project variable

<h3 id="deletev1variablesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 204 Response

```json
null
```

<h3 id="deletev1variablesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-platforms">platforms</h1>

## get/v1/platforms/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/platforms/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/platforms/{id}`

Get a platform by id

<h3 id="getv1platformsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "federatedAuthProviders": {
    "saml": {}
  },
  "plan": {
    "plan": "string",
    "includedAiCredits": 0,
    "lastFreeAiCreditsRenewalDate": "string",
    "tablesEnabled": true,
    "eventStreamingEnabled": true,
    "aiCreditsAutoTopUpState": "enabled",
    "aiCreditsAutoTopUpThreshold": 0,
    "aiCreditsAutoTopUpCreditsToAdd": 0,
    "maxAutoTopUpCreditsMonthly": 0,
    "environmentsEnabled": true,
    "analyticsEnabled": true,
    "showPoweredBy": true,
    "auditLogEnabled": true,
    "embeddingEnabled": true,
    "agentsEnabled": true,
    "aiProvidersEnabled": true,
    "chatEnabled": true,
    "managePiecesEnabled": true,
    "manageTemplatesEnabled": true,
    "customAppearanceEnabled": true,
    "teamProjectsLimit": "NONE",
    "projectRolesEnabled": true,
    "globalConnectionsEnabled": true,
    "customRolesEnabled": true,
    "apiKeysEnabled": true,
    "ssoEnabled": true,
    "secretManagersEnabled": true,
    "scimEnabled": true,
    "licenseKey": "string",
    "licenseExpiresAt": "string",
    "stripeCustomerId": "string",
    "stripeSubscriptionId": "string",
    "stripeSubscriptionStatus": "string",
    "stripeSubscriptionStartDate": 0,
    "stripeSubscriptionEndDate": 0,
    "stripeSubscriptionCancelDate": 0,
    "projectsLimit": 0,
    "activeFlowsLimit": 0,
    "dedicatedWorkers": {
      "trustedEnvironment": true
    },
    "canary": true,
    "customDomainsEnabled": true,
    "workerGroupId": "string"
  },
  "usage": {
    "totalAiCreditsUsed": 0,
    "totalAiCreditsUsedThisMonth": 0,
    "aiCreditsRemaining": 0,
    "aiCreditsLimit": 0,
    "activeFlows": 0
  },
  "id": "string",
  "created": "string",
  "updated": "string",
  "ownerId": "string",
  "name": "string",
  "primaryColor": "string",
  "logoIconUrl": "string",
  "fullLogoUrl": "string",
  "favIconUrl": "string",
  "filteredPieceNames": [
    "string"
  ],
  "filteredPieceBehavior": "ALLOWED",
  "cloudAuthEnabled": true,
  "googleAuthEnabled": true,
  "enforceAllowedAuthDomains": true,
  "allowedAuthDomains": [
    "string"
  ],
  "allowedEmbedOrigins": [
    "string"
  ],
  "ssoDomain": "string",
  "ssoDomainVerification": {
    "status": "PENDING_VERIFICATION",
    "record": {
      "type": "TXT",
      "name": "string",
      "value": "string"
    },
    "createdAt": "string"
  },
  "emailAuthEnabled": true,
  "pinnedPieces": [
    "string"
  ]
}
```

<h3 id="getv1platformsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1platformsid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|federatedAuthProviders|object \| null|false|none|none|
|» *anyOf*|object|false|none|none|
|» saml|object \| null|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » *anyOf*|null|false|none|none|
|» *anyOf*|null|false|none|none|
|plan|object|true|none|none|
|» plan|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» includedAiCredits|number|true|none|none|
|» lastFreeAiCreditsRenewalDate|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» tablesEnabled|boolean|true|none|none|
|» eventStreamingEnabled|boolean|true|none|none|
|» aiCreditsAutoTopUpState|string|true|none|none|
|» aiCreditsAutoTopUpThreshold|number \| null|false|none|none|
|» » *anyOf*|number|false|none|none|
|» » *anyOf*|null|false|none|none|
|» aiCreditsAutoTopUpCreditsToAdd|number \| null|false|none|none|
|» » *anyOf*|number|false|none|none|
|» » *anyOf*|null|false|none|none|
|» maxAutoTopUpCreditsMonthly|number \| null|false|none|none|
|» » *anyOf*|number|false|none|none|
|» » *anyOf*|null|false|none|none|
|» environmentsEnabled|boolean|true|none|none|
|» analyticsEnabled|boolean|true|none|none|
|» showPoweredBy|boolean|true|none|none|
|» auditLogEnabled|boolean|true|none|none|
|» embeddingEnabled|boolean|true|none|none|
|» agentsEnabled|boolean|true|none|none|
|» aiProvidersEnabled|boolean|true|none|none|
|» chatEnabled|boolean|true|none|none|
|» managePiecesEnabled|boolean|true|none|none|
|» manageTemplatesEnabled|boolean|true|none|none|
|» customAppearanceEnabled|boolean|true|none|none|
|» teamProjectsLimit|string|true|none|none|
|» projectRolesEnabled|boolean|true|none|none|
|» globalConnectionsEnabled|boolean|true|none|none|
|» customRolesEnabled|boolean|true|none|none|
|» apiKeysEnabled|boolean|true|none|none|
|» ssoEnabled|boolean|true|none|none|
|» secretManagersEnabled|boolean|true|none|none|
|» scimEnabled|boolean|true|none|none|
|» licenseKey|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» licenseExpiresAt|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» stripeCustomerId|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» stripeSubscriptionId|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» stripeSubscriptionStatus|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» stripeSubscriptionStartDate|number \| null|false|none|none|
|» » *anyOf*|number|false|none|none|
|» » *anyOf*|null|false|none|none|
|» stripeSubscriptionEndDate|number \| null|false|none|none|
|» » *anyOf*|number|false|none|none|
|» » *anyOf*|null|false|none|none|
|» stripeSubscriptionCancelDate|number \| null|false|none|none|
|» » *anyOf*|number|false|none|none|
|» » *anyOf*|null|false|none|none|
|» projectsLimit|number \| null|false|none|none|
|» » *anyOf*|number|false|none|none|
|» » *anyOf*|null|false|none|none|
|» activeFlowsLimit|number \| null|false|none|none|
|» » *anyOf*|number|false|none|none|
|» » *anyOf*|null|false|none|none|
|» dedicatedWorkers|object \| null|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » trustedEnvironment|boolean|true|none|none|
|» » *anyOf*|null|false|none|none|
|» canary|boolean|true|none|none|
|» customDomainsEnabled|boolean|true|none|none|
|» workerGroupId|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|usage|object|false|none|none|
|» totalAiCreditsUsed|number|true|none|none|
|» totalAiCreditsUsedThisMonth|number|true|none|none|
|» aiCreditsRemaining|number|true|none|none|
|» aiCreditsLimit|number|true|none|none|
|» activeFlows|number|true|none|none|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|ownerId|string|true|none|none|
|name|string|true|none|none|
|primaryColor|string|true|none|none|
|logoIconUrl|string|true|none|none|
|fullLogoUrl|string|true|none|none|
|favIconUrl|string|true|none|none|
|filteredPieceNames|[string]|true|none|none|
|filteredPieceBehavior|string|true|none|none|
|cloudAuthEnabled|boolean|true|none|none|
|googleAuthEnabled|boolean|true|none|none|
|enforceAllowedAuthDomains|boolean|true|none|none|
|allowedAuthDomains|[string]|true|none|none|
|allowedEmbedOrigins|[string]|true|none|none|
|ssoDomain|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|ssoDomainVerification|object \| null|false|none|none|
|» *anyOf*|object|false|none|none|
|» status|string|true|none|none|
|» record|object|true|none|none|
|» » type|string|true|none|none|
|» » name|string|true|none|none|
|» » value|string|true|none|none|
|» createdAt|string|true|none|none|
|» *anyOf*|null|false|none|none|
|emailAuthEnabled|boolean|true|none|none|
|pinnedPieces|[string]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» aiCreditsAutoTopUpState|enabled|
|» aiCreditsAutoTopUpState|disabled|
|» teamProjectsLimit|NONE|
|» teamProjectsLimit|ONE|
|» teamProjectsLimit|UNLIMITED|
|filteredPieceBehavior|ALLOWED|
|filteredPieceBehavior|BLOCKED|
|» status|PENDING_VERIFICATION|
|» status|VERIFIED|
|» » type|TXT|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-mcp">mcp</h1>

## get/v1/projects/{projectId}/mcp-server

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/projects/string/mcp-server \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{projectId}/mcp-server`

Get an MCP server by ID

<h3 id="getv1projectsprojectidmcp-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|none|

<h3 id="getv1projectsprojectidmcp-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/projects/{projectId}/mcp-server

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/projects/string/mcp-server \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "disabledTools": [
      "string"
    ]
  }'
```

`POST /v1/projects/{projectId}/mcp-server`

Update the project MCP server configuration

> Body parameter

```json
{
  "disabledTools": [
    "string"
  ]
}
```

<h3 id="postv1projectsprojectidmcp-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|none|
|body|body|object|false|none|
|» disabledTools|body|[string]|false|none|

<h3 id="postv1projectsprojectidmcp-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/projects/{projectId}/mcp-server/rotate

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/projects/string/mcp-server/rotate \
  -X POST
```

`POST /v1/projects/{projectId}/mcp-server/rotate`

Rotate the MCP server token

<h3 id="postv1projectsprojectidmcp-serverrotate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|none|

<h3 id="postv1projectsprojectidmcp-serverrotate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/v1/mcp-server

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/mcp-server \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/mcp-server`

Get the platform MCP server configuration

<h3 id="getv1mcp-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/mcp-server

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/mcp-server \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "disabledTools": [
      "string"
    ]
  }'
```

`POST /v1/mcp-server`

Update the platform MCP server configuration

> Body parameter

```json
{
  "disabledTools": [
    "string"
  ]
}
```

<h3 id="postv1mcp-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» disabledTools|body|[string]|false|none|

<h3 id="postv1mcp-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/mcp-server/rotate

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/mcp-server/rotate \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/mcp-server/rotate`

Rotate the platform MCP server token

<h3 id="postv1mcp-serverrotate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-mcp-oauth">mcp-oauth</h1>

## post/v1/mcp-oauth/approve

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/mcp-oauth/approve \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "authRequestId": "string",
    "projectId": "string"
  }'
```

`POST /v1/mcp-oauth/approve`

> Body parameter

```json
{
  "authRequestId": "string",
  "projectId": "string"
}
```

<h3 id="postv1mcp-oauthapprove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» authRequestId|body|string|true|none|
|» projectId|body|string|false|none|

<h3 id="postv1mcp-oauthapprove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="activepieces-documentation-agent">agent</h1>

## post/v1/projects/{projectId}/agent-tools/mcp/validate

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/projects/string/agent-tools/mcp/validate \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "MCP",
    "toolName": "string",
    "serverUrl": "http://example.com",
    "protocol": "sse",
    "auth": {
      "type": "none"
    }
  }'
```

`POST /v1/projects/{projectId}/agent-tools/mcp/validate`

Probe an external MCP server configured as an agent tool and return its tool names. The outbound call is routed through the SSRF-filtered safeHttp axios; all failure modes collapse to a single generic error so the response cannot be used for port or network reconnaissance.

> Body parameter

```json
{
  "type": "MCP",
  "toolName": "string",
  "serverUrl": "http://example.com",
  "protocol": "sse",
  "auth": {
    "type": "none"
  }
}
```

<h3 id="postv1projectsprojectidagent-toolsmcpvalidate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|none|
|body|body|object|true|none|
|» type|body|string|true|none|
|» toolName|body|string|true|none|
|» serverUrl|body|string(uri)|true|none|
|» protocol|body|string|true|none|
|» auth|body|object|true|none|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » accessToken|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » apiKey|body|string|true|none|
|» » apiKeyHeader|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » headers|body|object|true|none|
|» » » **additionalProperties**|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|MCP|
|» protocol|sse|
|» protocol|streamable-http|
|» protocol|http|
|» » type|none|
|» » type|access_token|
|» » type|api_key|
|» » type|headers|

<h3 id="postv1projectsprojectidagent-toolsmcpvalidate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/v1/agents/conversations

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/agents/conversations \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/agents/conversations`

<h3 id="getv1agentsconversations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|

<h3 id="getv1agentsconversations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/agents/conversations

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/agents/conversations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "title": "string",
    "modelName": "string"
  }'
```

`POST /v1/agents/conversations`

> Body parameter

```json
{
  "title": "string",
  "modelName": "string"
}
```

<h3 id="postv1agentsconversations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» title|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» modelName|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

<h3 id="postv1agentsconversations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/agents/conversations/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/agents/conversations/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/agents/conversations/{id}`

<h3 id="getv1agentsconversationsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="getv1agentsconversationsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/agents/conversations/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/agents/conversations/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "title": "string",
    "modelName": "string"
  }'
```

`POST /v1/agents/conversations/{id}`

> Body parameter

```json
{
  "title": "string",
  "modelName": "string"
}
```

<h3 id="postv1agentsconversationsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|false|none|
|» title|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» modelName|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

<h3 id="postv1agentsconversationsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## delete/v1/agents/conversations/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/agents/conversations/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/agents/conversations/{id}`

<h3 id="deletev1agentsconversationsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="deletev1agentsconversationsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/agents/conversations/{id}/messages

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/agents/conversations/string/messages \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/agents/conversations/{id}/messages`

<h3 id="getv1agentsconversationsidmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="getv1agentsconversationsidmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/agents/conversations/{id}/messages

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/agents/conversations/string/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "content": "string",
    "files": [
      {
        "name": "string",
        "mimeType": "image/png",
        "data": "string"
      }
    ]
  }'
```

`POST /v1/agents/conversations/{id}/messages`

> Body parameter

```json
{
  "content": "string",
  "files": [
    {
      "name": "string",
      "mimeType": "image/png",
      "data": "string"
    }
  ]
}
```

<h3 id="postv1agentsconversationsidmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|true|none|
|» content|body|string|true|none|
|» files|body|[object]|false|none|
|» » name|body|string|true|none|
|» » mimeType|body|string|true|none|
|» » data|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » mimeType|image/png|
|» » mimeType|image/jpeg|
|» » mimeType|image/gif|
|» » mimeType|image/webp|
|» » mimeType|text/plain|
|» » mimeType|text/csv|
|» » mimeType|text/markdown|
|» » mimeType|application/json|
|» » mimeType|application/pdf|

<h3 id="postv1agentsconversationsidmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/agents/tool-approvals/{gateId}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/agents/tool-approvals/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "approved": true
  }'
```

`POST /v1/agents/tool-approvals/{gateId}`

> Body parameter

```json
{
  "approved": true
}
```

<h3 id="postv1agentstool-approvalsgateid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gateId|path|string|true|none|
|body|body|object|true|none|
|» approved|body|boolean|true|none|

<h3 id="postv1agentstool-approvalsgateid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-users">users</h1>

## get/v1/users

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/users`

List users

<h3 id="getv1users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|number|false|none|
|externalId|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "email": "string",
      "firstName": "string",
      "status": "ACTIVE",
      "externalId": "string",
      "platformId": "string",
      "platformRole": "ADMIN",
      "lastName": "string",
      "created": "string",
      "updated": "string",
      "lastActiveDate": "string",
      "imageUrl": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="getv1users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[user](#schemauser)]|true|none|none|
|next|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|previous|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/users/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/users/{id}`

Get a user by id

<h3 id="getv1usersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "email": "string",
  "firstName": "string",
  "status": "ACTIVE",
  "externalId": "string",
  "platformId": "string",
  "platformRole": "ADMIN",
  "lastName": "string",
  "created": "string",
  "updated": "string",
  "lastActiveDate": "string",
  "imageUrl": "string",
  "badges": [
    {
      "name": "string",
      "created": "string"
    }
  ]
}
```

<h3 id="getv1usersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1usersid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|email|string|true|none|none|
|firstName|string|true|none|none|
|status|string|true|none|none|
|externalId|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|platformId|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|platformRole|string|true|none|none|
|lastName|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|lastActiveDate|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|imageUrl|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|badges|[object]|true|none|none|
|» name|string|true|none|none|
|» created|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|platformRole|ADMIN|
|platformRole|MEMBER|
|platformRole|OPERATOR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/users/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/users/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "status": "ACTIVE",
    "platformRole": "ADMIN",
    "externalId": "string"
  }'
```

`POST /v1/users/{id}`

Update user

> Body parameter

```json
{
  "status": "ACTIVE",
  "platformRole": "ADMIN",
  "externalId": "string"
}
```

<h3 id="postv1usersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|false|none|
|» status|body|string|false|none|
|» platformRole|body|string|false|none|
|» externalId|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|ACTIVE|
|» status|INACTIVE|
|» platformRole|ADMIN|
|» platformRole|MEMBER|
|» platformRole|OPERATOR|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "email": "string",
  "firstName": "string",
  "status": "ACTIVE",
  "externalId": "string",
  "platformId": "string",
  "platformRole": "ADMIN",
  "lastName": "string",
  "created": "string",
  "updated": "string",
  "lastActiveDate": "string",
  "imageUrl": "string"
}
```

<h3 id="postv1usersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## delete/v1/users/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/users/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/users/{id}`

Delete user

<h3 id="deletev1usersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 204 Response

```json
null
```

<h3 id="deletev1usersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-user-invitations">user-invitations</h1>

## get/v1/user-invitations

> Code samples

```bash
curl 'https://cloud.activepieces.com/api/v1/user-invitations?type=PLATFORM' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/user-invitations`

<h3 id="getv1user-invitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|number|false|none|
|cursor|query|string|false|none|
|type|query|string|true|none|
|projectId|query|string \| null|false|none|
|status|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|PLATFORM|
|type|PROJECT|
|status|PENDING|
|status|ACCEPTED|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "created": "string",
      "updated": "string",
      "email": "string",
      "status": "PENDING",
      "type": "PLATFORM",
      "platformId": "string",
      "platformRole": "ADMIN",
      "projectId": "string",
      "projectRoleId": "string",
      "projectRole": {
        "id": "string",
        "created": "string",
        "updated": "string",
        "name": "string",
        "permissions": [
          "string"
        ],
        "platformId": "string",
        "type": "string",
        "userCount": 0
      }
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="getv1user-invitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1user-invitations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[user-invitation](#schemauser-invitation)]|true|none|none|
|next|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|previous|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/user-invitations

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/user-invitations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "type": "PROJECT",
    "email": "string",
    "projectId": "string",
    "projectRole": "string"
  }'
```

`POST /v1/user-invitations`

Send a user invitation to a user. If the user already has an invitation, the invitation will be updated.

> Body parameter

```json
{
  "type": "PROJECT",
  "email": "string",
  "projectId": "string",
  "projectRole": "string"
}
```

<h3 id="postv1user-invitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» *anyOf*|body|object|false|none|
|» type|body|string|true|none|
|» email|body|string|true|none|
|» projectId|body|string|true|none|
|» projectRole|body|string|true|none|
|» *anyOf*|body|object|false|none|
|» type|body|string|true|none|
|» email|body|string|true|none|
|» platformRole|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|PROJECT|
|» type|PLATFORM|
|» platformRole|ADMIN|
|» platformRole|MEMBER|
|» platformRole|OPERATOR|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "email": "string",
  "status": "PENDING",
  "type": "PLATFORM",
  "platformId": "string",
  "platformRole": "ADMIN",
  "projectId": "string",
  "projectRoleId": "string",
  "projectRole": {
    "id": "string",
    "created": "string",
    "updated": "string",
    "name": "string",
    "permissions": [
      "string"
    ],
    "platformId": "string",
    "type": "string",
    "userCount": 0
  },
  "link": "string"
}
```

<h3 id="postv1user-invitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Default Response|Inline|

<h3 id="postv1user-invitations-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|email|string|true|none|none|
|status|string|true|none|none|
|type|string|true|none|none|
|platformId|string|true|none|none|
|platformRole|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|projectId|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|projectRoleId|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|projectRole|object \| null|false|none|none|
|» *anyOf*|object|false|none|none|
|» id|string|true|none|none|
|» created|string|true|none|none|
|» updated|string|true|none|none|
|» name|string|true|none|none|
|» permissions|[string]|true|none|none|
|» platformId|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» type|string|true|none|none|
|» userCount|number|false|none|none|
|» *anyOf*|null|false|none|none|
|link|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PENDING|
|status|ACCEPTED|
|type|PLATFORM|
|type|PROJECT|
|» *anyOf*|ADMIN|
|» *anyOf*|MEMBER|
|» *anyOf*|OPERATOR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## delete/v1/user-invitations/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/user-invitations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/user-invitations/{id}`

<h3 id="deletev1user-invitationsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 204 Response

```json
null
```

<h3 id="deletev1user-invitationsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-worker-machines">worker-machines</h1>

## get/v1/worker-machines/queue-metrics

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/worker-machines/queue-metrics \
  -H 'Accept: application/json'
```

`GET /v1/worker-machines/queue-metrics`

> Example responses

> 200 Response

```json
{
  "queues": [
    {
      "name": "string",
      "waiting": 0,
      "active": 0
    }
  ]
}
```

<h3 id="getv1worker-machinesqueue-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1worker-machinesqueue-metrics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queues|[object]|true|none|none|
|» name|string|true|none|none|
|» waiting|number|true|none|none|
|» active|number|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="activepieces-documentation-tables">tables</h1>

## get/v1/tables/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/tables/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/tables/{id}`

Get a table by id

<h3 id="getv1tablesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "name": "string",
  "folderId": "string",
  "projectId": "string",
  "externalId": "string",
  "status": "ENABLED",
  "trigger": "ON_NEW_RECORD"
}
```

<h3 id="getv1tablesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1tablesid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|name|string|true|none|none|
|folderId|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|projectId|string|true|none|none|
|externalId|string|true|none|none|
|status|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|trigger|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» *anyOf*|ENABLED|
|» *anyOf*|DISABLED|
|» *anyOf*|ON_NEW_RECORD|
|» *anyOf*|ON_UPDATE_RECORD|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/tables/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/tables/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "trigger": "ON_NEW_RECORD",
    "status": "ENABLED",
    "folderId": "string"
  }'
```

`POST /v1/tables/{id}`

Update a table

> Body parameter

```json
{
  "name": "string",
  "trigger": "ON_NEW_RECORD",
  "status": "ENABLED",
  "folderId": "string"
}
```

<h3 id="postv1tablesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|false|none|
|» name|body|string|false|none|
|» trigger|body|string|false|none|
|» status|body|string|false|none|
|» folderId|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» trigger|ON_NEW_RECORD|
|» trigger|ON_UPDATE_RECORD|
|» status|ENABLED|
|» status|DISABLED|

<h3 id="postv1tablesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## delete/v1/tables/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/tables/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/tables/{id}`

Delete a table

<h3 id="deletev1tablesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 204 Response

```json
null
```

<h3 id="deletev1tablesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/tables

> Code samples

```bash
curl 'https://cloud.activepieces.com/api/v1/tables?projectId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/tables`

List tables

<h3 id="getv1tables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|string|true|none|
|limit|query|number|false|none|
|cursor|query|string|false|none|
|name|query|string|false|none|
|externalIds|query|[string]|false|none|
|folderId|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "created": "string",
      "updated": "string",
      "name": "string",
      "folderId": "string",
      "projectId": "string",
      "externalId": "string",
      "status": "ENABLED",
      "trigger": "ON_NEW_RECORD"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="getv1tables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1tables-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» id|string|true|none|none|
|» created|string|true|none|none|
|» updated|string|true|none|none|
|» name|string|true|none|none|
|» folderId|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» projectId|string|true|none|none|
|» externalId|string|true|none|none|
|» status|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» trigger|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|next|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|previous|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » *anyOf*|ENABLED|
|» » *anyOf*|DISABLED|
|» » *anyOf*|ON_NEW_RECORD|
|» » *anyOf*|ON_UPDATE_RECORD|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/tables/{id}/template

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/tables/string/template \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/tables/{id}/template`

Export table as template

<h3 id="getv1tablesidtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "type": "OFFICIAL",
  "summary": "string",
  "description": "string",
  "tags": [
    {
      "title": "string",
      "color": "string",
      "icon": "string"
    }
  ],
  "blogUrl": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "author": "string",
  "categories": [
    "string"
  ],
  "pieces": [
    "string"
  ],
  "flows": [
    {
      "displayName": "string",
      "trigger": {
        "name": "string",
        "valid": true,
        "displayName": "string",
        "nextAction": null,
        "lastUpdatedDate": "string",
        "type": "PIECE_TRIGGER",
        "settings": {
          "sampleData": {
            "sampleDataFileId": "string",
            "sampleDataInputFileId": "string",
            "lastTestDate": "string"
          },
          "propertySettings": {
            "property1": {
              "type": "MANUAL",
              "schema": null
            },
            "property2": {
              "type": "MANUAL",
              "schema": null
            }
          },
          "customLogoUrl": "string",
          "pieceName": "string",
          "pieceVersion": "string",
          "triggerName": "string",
          "input": {
            "property1": null,
            "property2": null
          }
        }
      },
      "valid": true,
      "schemaVersion": "string",
      "description": "string",
      "notes": [
        {
          "id": "string",
          "content": "string",
          "ownerId": "string",
          "color": "orange",
          "position": {
            "x": 0,
            "y": 0
          },
          "size": {
            "width": 0,
            "height": 0
          },
          "createdAt": "string",
          "updatedAt": "string"
        }
      ]
    }
  ],
  "tables": [
    {
      "name": "string",
      "externalId": "string",
      "fields": [
        {
          "name": "string",
          "type": "string",
          "data": {
            "options": [
              {
                "value": "string"
              }
            ]
          },
          "externalId": "string"
        }
      ],
      "status": "string",
      "trigger": "string",
      "data": {
        "type": "CSV",
        "rows": [
          [
            {
              "fieldId": "string",
              "value": "string"
            }
          ]
        ]
      }
    }
  ],
  "status": "PUBLISHED"
}
```

<h3 id="getv1tablesidtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1tablesidtemplate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|type|string|true|none|none|
|summary|string|true|none|none|
|description|string|true|none|none|
|tags|[object]|true|none|none|
|» title|string|true|none|none|
|» color|string|true|none|none|
|» icon|string|false|none|none|
|blogUrl|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|metadata|object \| null|false|none|none|
|» *anyOf*|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|» *anyOf*|null|false|none|none|
|author|string|true|none|none|
|categories|[string]|true|none|none|
|pieces|[string]|true|none|none|
|flows|[object]|false|none|none|
|» displayName|string|true|none|none|
|» trigger|object|true|none|none|
|» » *anyOf*|object|false|none|none|
|» » name|string|true|none|none|
|» » valid|boolean|true|none|none|
|» » displayName|string|true|none|none|
|» » nextAction|object|false|none|none|
|» » lastUpdatedDate|string|true|none|none|
|» » type|string|true|none|none|
|» » settings|object|true|none|none|
|» » » sampleData|object|false|none|none|
|» » » » sampleDataFileId|string|false|none|none|
|» » » » sampleDataInputFileId|string|false|none|none|
|» » » » lastTestDate|string|false|none|none|
|» » » propertySettings|object|true|none|none|
|» » » » **additionalProperties**|object|false|none|none|
|» » » » » type|string|true|none|none|
|» » » » » schema|object|false|none|none|
|» » » customLogoUrl|string|false|none|none|
|» » » pieceName|string|true|none|none|
|» » » pieceVersion|string|true|none|none|
|» » » triggerName|string|false|none|none|
|» » » input|object|true|none|none|
|» » » » **additionalProperties**|object|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » name|string|true|none|none|
|» » valid|boolean|true|none|none|
|» » displayName|string|true|none|none|
|» » nextAction|object|false|none|none|
|» » lastUpdatedDate|string|true|none|none|
|» » type|string|true|none|none|
|» » settings|object|true|none|none|
|» valid|boolean|true|none|none|
|» schemaVersion|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» description|string|false|none|none|
|» notes|[object]|false|none|none|
|» » id|string|true|none|none|
|» » content|string|true|none|none|
|» » ownerId|string \| null|false|none|none|
|» » » *anyOf*|string|false|none|none|
|» » » *anyOf*|null|false|none|none|
|» » color|string|true|none|none|
|» » position|object|true|none|none|
|» » » x|number|true|none|none|
|» » » y|number|true|none|none|
|» » size|object|true|none|none|
|» » » width|number|true|none|none|
|» » » height|number|true|none|none|
|» » createdAt|string|true|none|none|
|» » updatedAt|string|true|none|none|
|tables|[object]|false|none|none|
|» name|string|true|none|none|
|» externalId|string|true|none|none|
|» fields|[object]|true|none|none|
|» » name|string|true|none|none|
|» » type|string|true|none|none|
|» » data|object \| null|false|none|none|
|» » » *anyOf*|object|false|none|none|
|» » » options|[object]|true|none|none|
|» » » » value|string|true|none|none|
|» » » *anyOf*|null|false|none|none|
|» » externalId|string|true|none|none|
|» status|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» trigger|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» data|object \| null|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » type|string|true|none|none|
|» » rows|[[object]]|true|none|none|
|» » *anyOf*|null|false|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OFFICIAL|
|type|SHARED|
|type|CUSTOM|
|» » type|PIECE_TRIGGER|
|» » » » » type|MANUAL|
|» » » » » type|DYNAMIC|
|» » type|EMPTY|
|» » color|orange|
|» » color|red|
|» » color|green|
|» » color|blue|
|» » color|purple|
|» » color|yellow|
|» » type|CSV|
|status|PUBLISHED|
|status|ARCHIVED|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/tables/count

> Code samples

```bash
curl 'https://cloud.activepieces.com/api/v1/tables/count?projectId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/tables/count`

Count tables

<h3 id="getv1tablescount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|string|true|none|
|folderId|query|string|false|none|

> Example responses

> 200 Response

```json
0
```

<h3 id="getv1tablescount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/tables/{id}/export

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/tables/string/export \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/tables/{id}/export`

Export a table

<h3 id="getv1tablesidexport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "fields": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "rows": [
    {
      "property1": "string",
      "property2": "string"
    }
  ],
  "name": "string"
}
```

<h3 id="getv1tablesidexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1tablesidexport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[object]|true|none|none|
|» id|string|true|none|none|
|» name|string|true|none|none|
|rows|[object]|true|none|none|
|» **additionalProperties**|string|false|none|none|
|name|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/tables/{id}/webhooks

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/tables/string/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "events": [
      "RECORD_CREATED"
    ],
    "webhookUrl": "string",
    "flowId": "string"
  }'
```

`POST /v1/tables/{id}/webhooks`

Create a table webhook

> Body parameter

```json
{
  "events": [
    "RECORD_CREATED"
  ],
  "webhookUrl": "string",
  "flowId": "string"
}
```

<h3 id="postv1tablesidwebhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|true|none|
|» events|body|[string]|true|none|
|» webhookUrl|body|string|true|none|
|» flowId|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» events|RECORD_CREATED|
|» events|RECORD_UPDATED|
|» events|RECORD_DELETED|

<h3 id="postv1tablesidwebhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## delete/v1/tables/{id}/webhooks/{webhookId}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/tables/string/webhooks/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/tables/{id}/webhooks/{webhookId}`

Delete a table webhook

<h3 id="deletev1tablesidwebhookswebhookid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|webhookId|path|string|true|none|

<h3 id="deletev1tablesidwebhookswebhookid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/tables/{id}/clear

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/tables/string/clear \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/tables/{id}/clear`

Clear all records from a table

<h3 id="postv1tablesidclear-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 204 Response

```json
null
```

<h3 id="postv1tablesidclear-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-records">records</h1>

## post/v1/records/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/records/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cells": [
      {
        "fieldId": "string",
        "value": "string"
      }
    ],
    "tableId": "string",
    "agentUpdate": true
  }'
```

`POST /v1/records/{id}`

Update a record

> Body parameter

```json
{
  "cells": [
    {
      "fieldId": "string",
      "value": "string"
    }
  ],
  "tableId": "string",
  "agentUpdate": true
}
```

<h3 id="postv1recordsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|true|none|
|» cells|body|[object]|false|none|
|» » fieldId|body|string|true|none|
|» » value|body|string \| null|true|none|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|null|false|none|
|» tableId|body|string|true|none|
|» agentUpdate|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "tableId": "string",
  "projectId": "string",
  "cells": {
    "property1": {
      "updated": "string",
      "created": "string",
      "value": null,
      "fieldName": "string"
    },
    "property2": {
      "updated": "string",
      "created": "string",
      "value": null,
      "fieldName": "string"
    }
  }
}
```

<h3 id="postv1recordsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="postv1recordsid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|tableId|string|true|none|none|
|projectId|string|true|none|none|
|cells|object|true|none|none|
|» **additionalProperties**|object|false|none|none|
|» » updated|string|true|none|none|
|» » created|string|true|none|none|
|» » value|object|true|none|none|
|» » fieldName|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/records

> Code samples

```bash
curl 'https://cloud.activepieces.com/api/v1/records?tableId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/records`

List records

<h3 id="getv1records-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tableId|query|string|true|none|
|limit|query|number|false|none|
|cursor|query|string|false|none|
|filters|query|[object]|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "created": "string",
      "updated": "string",
      "tableId": "string",
      "projectId": "string",
      "cells": {
        "property1": {
          "updated": "string",
          "created": "string",
          "value": null,
          "fieldName": "string"
        },
        "property2": {
          "updated": "string",
          "created": "string",
          "value": null,
          "fieldName": "string"
        }
      }
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="getv1records-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1records-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» id|string|true|none|none|
|» created|string|true|none|none|
|» updated|string|true|none|none|
|» tableId|string|true|none|none|
|» projectId|string|true|none|none|
|» cells|object|true|none|none|
|» » **additionalProperties**|object|false|none|none|
|» » » updated|string|true|none|none|
|» » » created|string|true|none|none|
|» » » value|object|true|none|none|
|» » » fieldName|string|true|none|none|
|next|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|previous|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## delete/v1/records

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/records \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "tableId": "string",
    "ids": [
      "string"
    ]
  }'
```

`DELETE /v1/records`

Delete records

> Body parameter

```json
{
  "tableId": "string",
  "ids": [
    "string"
  ]
}
```

<h3 id="deletev1records-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» tableId|body|string|true|none|
|» ids|body|[string]|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "created": "string",
    "updated": "string",
    "tableId": "string",
    "projectId": "string",
    "cells": {
      "property1": {
        "updated": "string",
        "created": "string",
        "value": null,
        "fieldName": "string"
      },
      "property2": {
        "updated": "string",
        "created": "string",
        "value": null,
        "fieldName": "string"
      }
    }
  }
]
```

<h3 id="deletev1records-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="deletev1records-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|string|true|none|none|
|» created|string|true|none|none|
|» updated|string|true|none|none|
|» tableId|string|true|none|none|
|» projectId|string|true|none|none|
|» cells|object|true|none|none|
|» » **additionalProperties**|object|false|none|none|
|» » » updated|string|true|none|none|
|» » » created|string|true|none|none|
|» » » value|object|true|none|none|
|» » » fieldName|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-knowledge-base">knowledge-base</h1>

## get/v1/knowledge-base/files

> Code samples

```bash
curl 'https://cloud.activepieces.com/api/v1/knowledge-base/files?projectId=string' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/knowledge-base/files`

List knowledge base files for the project

<h3 id="getv1knowledge-basefiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|string|true|none|

<h3 id="getv1knowledge-basefiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/knowledge-base/files

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/knowledge-base/files \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "fileId": "string",
    "displayName": "string"
  }'
```

`POST /v1/knowledge-base/files`

Register a file for knowledge base ingestion

> Body parameter

```json
{
  "fileId": "string",
  "displayName": "string"
}
```

<h3 id="postv1knowledge-basefiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» fileId|body|string|true|none|
|» displayName|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "id": "string"
}
```

<h3 id="postv1knowledge-basefiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Default Response|Inline|

<h3 id="postv1knowledge-basefiles-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/knowledge-base/files/upload

> Code samples

```bash
curl 'https://cloud.activepieces.com/api/v1/knowledge-base/files/upload?projectId=string' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'file={"filename":"string","data":null,"type":"file","mimetype":"string"}' \
  -F 'displayName=string'
```

`POST /v1/knowledge-base/files/upload`

Upload a file and create a knowledge base file record

> Body parameter

```yaml
file:
  filename: string
  data: null
  type: file
  mimetype: string
displayName: string
```

<h3 id="postv1knowledge-basefilesupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|string|true|none|
|body|body|object|true|none|
|» file|body|object|true|none|
|» » filename|body|string|true|none|
|» » data|body|object|true|none|
|» » type|body|string|true|none|
|» » mimetype|body|string|false|none|
|» displayName|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|file|

<h3 id="postv1knowledge-basefilesupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## delete/v1/knowledge-base/files/{id}

> Code samples

```bash
curl 'https://cloud.activepieces.com/api/v1/knowledge-base/files/string?projectId=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/knowledge-base/files/{id}`

Delete a knowledge base file and all its chunks

<h3 id="deletev1knowledge-basefilesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|string|true|none|
|id|path|string|true|none|

<h3 id="deletev1knowledge-basefilesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/knowledge-base/files/{id}/chunks/count

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/knowledge-base/files/string/chunks/count \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/knowledge-base/files/{id}/chunks/count`

Get the number of chunks for a knowledge base file

<h3 id="getv1knowledge-basefilesidchunkscount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="getv1knowledge-basefilesidchunkscount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/knowledge-base/files/{id}/extract-chunks

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/knowledge-base/files/string/extract-chunks \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/knowledge-base/files/{id}/extract-chunks`

Extract text chunks from a knowledge base file

<h3 id="postv1knowledge-basefilesidextract-chunks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="postv1knowledge-basefilesidextract-chunks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/knowledge-base/files/{id}/store-chunks

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/knowledge-base/files/string/store-chunks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "chunks": [
      {
        "id": "string",
        "content": "string",
        "embedding": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "chunkIndex": 0,
        "metadata": {
          "property1": null,
          "property2": null
        }
      }
    ]
  }'
```

`POST /v1/knowledge-base/files/{id}/store-chunks`

Store or update chunks for a knowledge base file. Provide id to update existing chunks, or content to create new ones.

> Body parameter

```json
{
  "chunks": [
    {
      "id": "string",
      "content": "string",
      "embedding": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "chunkIndex": 0,
      "metadata": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

<h3 id="postv1knowledge-basefilesidstore-chunks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|true|none|
|» chunks|body|[object]|true|none|
|» » id|body|string|false|none|
|» » content|body|string|false|none|
|» » embedding|body|[number]|false|none|
|» » chunkIndex|body|number|false|none|
|» » metadata|body|object|false|none|
|» » » **additionalProperties**|body|object|false|none|

<h3 id="postv1knowledge-basefilesidstore-chunks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/knowledge-base/files/{id}/chunks

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/knowledge-base/files/string/chunks \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/knowledge-base/files/{id}/chunks`

List chunks for a knowledge base file, optionally filtered by embedding status

<h3 id="getv1knowledge-basefilesidchunks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|embedded|query|string|false|none|
|id|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|embedded|true|
|embedded|false|

<h3 id="getv1knowledge-basefilesidchunks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/knowledge-base/files/search

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/knowledge-base/files/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "knowledgeBaseFileIds": [
      "string"
    ],
    "queryEmbedding": [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "limit": 5,
    "similarityThreshold": 0
  }'
```

`POST /v1/knowledge-base/files/search`

Search knowledge base using vector similarity

> Body parameter

```json
{
  "knowledgeBaseFileIds": [
    "string"
  ],
  "queryEmbedding": [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  "limit": 5,
  "similarityThreshold": 0
}
```

<h3 id="postv1knowledge-basefilessearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» knowledgeBaseFileIds|body|[string]|true|none|
|» queryEmbedding|body|[number]|true|none|
|» limit|body|integer|false|none|
|» similarityThreshold|body|number|false|none|

<h3 id="postv1knowledge-basefilessearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-templates">templates</h1>

## get/v1/templates/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/templates/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/templates/{id}`

Get a template.

<h3 id="getv1templatesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="getv1templatesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/templates/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/templates/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "summary": "string",
    "description": "string",
    "tags": [
      {
        "title": "string",
        "color": "string",
        "icon": "string"
      }
    ],
    "blogUrl": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "status": "PUBLISHED",
    "categories": [
      "string"
    ],
    "flows": [
      {
        "displayName": "string",
        "trigger": {
          "name": "string",
          "valid": true,
          "displayName": "string",
          "nextAction": null,
          "lastUpdatedDate": "string",
          "type": "PIECE_TRIGGER",
          "settings": {
            "sampleData": {
              "sampleDataFileId": "string",
              "sampleDataInputFileId": "string",
              "lastTestDate": "string"
            },
            "propertySettings": {
              "property1": {
                "type": "MANUAL",
                "schema": null
              },
              "property2": {
                "type": "MANUAL",
                "schema": null
              }
            },
            "customLogoUrl": "string",
            "pieceName": "string",
            "pieceVersion": "string",
            "triggerName": "string",
            "input": {
              "property1": null,
              "property2": null
            }
          }
        },
        "valid": true,
        "schemaVersion": "string",
        "description": "string",
        "notes": [
          {
            "id": "string",
            "content": "string",
            "ownerId": "string",
            "color": "orange",
            "position": {
              "x": 0,
              "y": 0
            },
            "size": {
              "width": 0,
              "height": 0
            },
            "createdAt": "string",
            "updatedAt": "string"
          }
        ]
      }
    ]
  }'
```

`POST /v1/templates/{id}`

Update a template.

> Body parameter

```json
{
  "name": "string",
  "summary": "string",
  "description": "string",
  "tags": [
    {
      "title": "string",
      "color": "string",
      "icon": "string"
    }
  ],
  "blogUrl": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "status": "PUBLISHED",
  "categories": [
    "string"
  ],
  "flows": [
    {
      "displayName": "string",
      "trigger": {
        "name": "string",
        "valid": true,
        "displayName": "string",
        "nextAction": null,
        "lastUpdatedDate": "string",
        "type": "PIECE_TRIGGER",
        "settings": {
          "sampleData": {
            "sampleDataFileId": "string",
            "sampleDataInputFileId": "string",
            "lastTestDate": "string"
          },
          "propertySettings": {
            "property1": {
              "type": "MANUAL",
              "schema": null
            },
            "property2": {
              "type": "MANUAL",
              "schema": null
            }
          },
          "customLogoUrl": "string",
          "pieceName": "string",
          "pieceVersion": "string",
          "triggerName": "string",
          "input": {
            "property1": null,
            "property2": null
          }
        }
      },
      "valid": true,
      "schemaVersion": "string",
      "description": "string",
      "notes": [
        {
          "id": "string",
          "content": "string",
          "ownerId": "string",
          "color": "orange",
          "position": {
            "x": 0,
            "y": 0
          },
          "size": {
            "width": 0,
            "height": 0
          },
          "createdAt": "string",
          "updatedAt": "string"
        }
      ]
    }
  ]
}
```

<h3 id="postv1templatesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|false|none|
|» name|body|string|false|none|
|» summary|body|string|false|none|
|» description|body|string|false|none|
|» tags|body|[object]|false|none|
|» » title|body|string|true|none|
|» » color|body|string|true|none|
|» » icon|body|string|false|none|
|» blogUrl|body|string|false|none|
|» metadata|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» status|body|string|false|none|
|» categories|body|[string]|false|none|
|» flows|body|[object]|false|none|
|» » displayName|body|string|true|none|
|» » trigger|body|object|true|none|
|» » » *anyOf*|body|object|false|none|
|» » » name|body|string|true|none|
|» » » valid|body|boolean|true|none|
|» » » displayName|body|string|true|none|
|» » » nextAction|body|object|false|none|
|» » » lastUpdatedDate|body|string|true|none|
|» » » type|body|string|true|none|
|» » » settings|body|object|true|none|
|» » » » sampleData|body|object|false|none|
|» » » » » sampleDataFileId|body|string|false|none|
|» » » » » sampleDataInputFileId|body|string|false|none|
|» » » » » lastTestDate|body|string|false|none|
|» » » » propertySettings|body|object|true|none|
|» » » » » **additionalProperties**|body|object|false|none|
|» » » » » » type|body|string|true|none|
|» » » » » » schema|body|object|false|none|
|» » » » customLogoUrl|body|string|false|none|
|» » » » pieceName|body|string|true|none|
|» » » » pieceVersion|body|string|true|none|
|» » » » triggerName|body|string|false|none|
|» » » » input|body|object|true|none|
|» » » » » **additionalProperties**|body|object|false|none|
|» » » *anyOf*|body|object|false|none|
|» » » name|body|string|true|none|
|» » » valid|body|boolean|true|none|
|» » » displayName|body|string|true|none|
|» » » nextAction|body|object|false|none|
|» » » lastUpdatedDate|body|string|true|none|
|» » » type|body|string|true|none|
|» » » settings|body|object|true|none|
|» » valid|body|boolean|true|none|
|» » schemaVersion|body|string \| null|false|none|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|null|false|none|
|» » description|body|string|false|none|
|» » notes|body|[object]|false|none|
|» » » id|body|string|true|none|
|» » » content|body|string|true|none|
|» » » ownerId|body|string \| null|false|none|
|» » » » *anyOf*|body|string|false|none|
|» » » » *anyOf*|body|null|false|none|
|» » » color|body|string|true|none|
|» » » position|body|object|true|none|
|» » » » x|body|number|true|none|
|» » » » y|body|number|true|none|
|» » » size|body|object|true|none|
|» » » » width|body|number|true|none|
|» » » » height|body|number|true|none|
|» » » createdAt|body|string|true|none|
|» » » updatedAt|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|PUBLISHED|
|» status|ARCHIVED|
|» » » type|PIECE_TRIGGER|
|» » » » » » type|MANUAL|
|» » » » » » type|DYNAMIC|
|» » » type|EMPTY|
|» » » color|orange|
|» » » color|red|
|» » » color|green|
|» » » color|blue|
|» » » color|purple|
|» » » color|yellow|

<h3 id="postv1templatesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## delete/v1/templates/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/templates/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/templates/{id}`

Delete a template.

<h3 id="deletev1templatesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="deletev1templatesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/templates/categories

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/templates/categories \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/templates/categories`

Get categories of templates.

<h3 id="getv1templatescategories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/templates

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/templates \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/templates`

List templates.

<h3 id="getv1templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|none|
|pieces|query|[string]|false|none|
|tags|query|[string]|false|none|
|search|query|string|false|none|
|category|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|OFFICIAL|
|type|SHARED|
|type|CUSTOM|

<h3 id="getv1templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/templates

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "summary": "string",
    "description": "string",
    "tags": [
      {
        "title": "string",
        "color": "string",
        "icon": "string"
      }
    ],
    "blogUrl": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "author": "string",
    "categories": [
      "string"
    ],
    "type": "OFFICIAL",
    "flows": [
      {
        "displayName": "string",
        "trigger": {
          "name": "string",
          "valid": true,
          "displayName": "string",
          "nextAction": null,
          "lastUpdatedDate": "string",
          "type": "PIECE_TRIGGER",
          "settings": {
            "sampleData": {
              "sampleDataFileId": "string",
              "sampleDataInputFileId": "string",
              "lastTestDate": "string"
            },
            "propertySettings": {
              "property1": {
                "type": "MANUAL",
                "schema": null
              },
              "property2": {
                "type": "MANUAL",
                "schema": null
              }
            },
            "customLogoUrl": "string",
            "pieceName": "string",
            "pieceVersion": "string",
            "triggerName": "string",
            "input": {
              "property1": null,
              "property2": null
            }
          }
        },
        "valid": true,
        "schemaVersion": "string",
        "description": "string",
        "notes": [
          {
            "id": "string",
            "content": "string",
            "ownerId": "string",
            "color": "orange",
            "position": {
              "x": 0,
              "y": 0
            },
            "size": {
              "width": 0,
              "height": 0
            },
            "createdAt": "string",
            "updatedAt": "string"
          }
        ]
      }
    ]
  }'
```

`POST /v1/templates`

Create a template.

> Body parameter

```json
{
  "name": "string",
  "summary": "string",
  "description": "string",
  "tags": [
    {
      "title": "string",
      "color": "string",
      "icon": "string"
    }
  ],
  "blogUrl": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "author": "string",
  "categories": [
    "string"
  ],
  "type": "OFFICIAL",
  "flows": [
    {
      "displayName": "string",
      "trigger": {
        "name": "string",
        "valid": true,
        "displayName": "string",
        "nextAction": null,
        "lastUpdatedDate": "string",
        "type": "PIECE_TRIGGER",
        "settings": {
          "sampleData": {
            "sampleDataFileId": "string",
            "sampleDataInputFileId": "string",
            "lastTestDate": "string"
          },
          "propertySettings": {
            "property1": {
              "type": "MANUAL",
              "schema": null
            },
            "property2": {
              "type": "MANUAL",
              "schema": null
            }
          },
          "customLogoUrl": "string",
          "pieceName": "string",
          "pieceVersion": "string",
          "triggerName": "string",
          "input": {
            "property1": null,
            "property2": null
          }
        }
      },
      "valid": true,
      "schemaVersion": "string",
      "description": "string",
      "notes": [
        {
          "id": "string",
          "content": "string",
          "ownerId": "string",
          "color": "orange",
          "position": {
            "x": 0,
            "y": 0
          },
          "size": {
            "width": 0,
            "height": 0
          },
          "createdAt": "string",
          "updatedAt": "string"
        }
      ]
    }
  ]
}
```

<h3 id="postv1templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|none|
|» summary|body|string|true|none|
|» description|body|string|true|none|
|» tags|body|[object]|false|none|
|» » title|body|string|true|none|
|» » color|body|string|true|none|
|» » icon|body|string|false|none|
|» blogUrl|body|string|false|none|
|» metadata|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» author|body|string|true|none|
|» categories|body|[string]|true|none|
|» type|body|string|true|none|
|» flows|body|[object]|false|none|
|» » displayName|body|string|true|none|
|» » trigger|body|object|true|none|
|» » » *anyOf*|body|object|false|none|
|» » » name|body|string|true|none|
|» » » valid|body|boolean|true|none|
|» » » displayName|body|string|true|none|
|» » » nextAction|body|object|false|none|
|» » » lastUpdatedDate|body|string|true|none|
|» » » type|body|string|true|none|
|» » » settings|body|object|true|none|
|» » » » sampleData|body|object|false|none|
|» » » » » sampleDataFileId|body|string|false|none|
|» » » » » sampleDataInputFileId|body|string|false|none|
|» » » » » lastTestDate|body|string|false|none|
|» » » » propertySettings|body|object|true|none|
|» » » » » **additionalProperties**|body|object|false|none|
|» » » » » » type|body|string|true|none|
|» » » » » » schema|body|object|false|none|
|» » » » customLogoUrl|body|string|false|none|
|» » » » pieceName|body|string|true|none|
|» » » » pieceVersion|body|string|true|none|
|» » » » triggerName|body|string|false|none|
|» » » » input|body|object|true|none|
|» » » » » **additionalProperties**|body|object|false|none|
|» » » *anyOf*|body|object|false|none|
|» » » name|body|string|true|none|
|» » » valid|body|boolean|true|none|
|» » » displayName|body|string|true|none|
|» » » nextAction|body|object|false|none|
|» » » lastUpdatedDate|body|string|true|none|
|» » » type|body|string|true|none|
|» » » settings|body|object|true|none|
|» » valid|body|boolean|true|none|
|» » schemaVersion|body|string \| null|false|none|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|null|false|none|
|» » description|body|string|false|none|
|» » notes|body|[object]|false|none|
|» » » id|body|string|true|none|
|» » » content|body|string|true|none|
|» » » ownerId|body|string \| null|false|none|
|» » » » *anyOf*|body|string|false|none|
|» » » » *anyOf*|body|null|false|none|
|» » » color|body|string|true|none|
|» » » position|body|object|true|none|
|» » » » x|body|number|true|none|
|» » » » y|body|number|true|none|
|» » » size|body|object|true|none|
|» » » » width|body|number|true|none|
|» » » » height|body|number|true|none|
|» » » createdAt|body|string|true|none|
|» » » updatedAt|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|OFFICIAL|
|» type|SHARED|
|» type|CUSTOM|
|» » » type|PIECE_TRIGGER|
|» » » » » » type|MANUAL|
|» » » » » » type|DYNAMIC|
|» » » type|EMPTY|
|» » » color|orange|
|» » » color|red|
|» » » color|green|
|» » » color|blue|
|» » » color|purple|
|» » » color|yellow|

<h3 id="postv1templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-projects">projects</h1>

## get/v1/projects

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/projects \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects`

<h3 id="getv1projects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalId|query|string|false|none|
|externalUserId|query|string|false|none|
|limit|query|number|false|none|
|cursor|query|string|false|none|
|displayName|query|string|false|none|
|types|query|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|types|TEAM|
|types|PERSONAL|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "created": "string",
      "updated": "string",
      "ownerId": "string",
      "displayName": "string",
      "platformId": "string",
      "maxConcurrentJobs": 0,
      "type": "TEAM",
      "icon": {
        "color": "RED"
      },
      "externalId": "string",
      "releasesEnabled": true,
      "metadata": {
        "property1": null,
        "property2": null
      },
      "poolId": "string",
      "plan": {
        "id": "string",
        "created": "string",
        "updated": "string",
        "projectId": "string",
        "locked": false,
        "name": "string",
        "piecesFilterType": "NONE",
        "pieces": [
          "string"
        ]
      },
      "analytics": {
        "totalUsers": 0,
        "activeUsers": 0,
        "totalFlows": 0,
        "activeFlows": 0
      }
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="getv1projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1projects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[project](#schemaproject)]|true|none|none|
|next|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|previous|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/projects

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "externalId": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "maxConcurrentJobs": 0,
    "globalConnectionExternalIds": [
      "string"
    ],
    "alertReceiverEmail": "user@example.com"
  }'
```

`POST /v1/projects`

> Body parameter

```json
{
  "displayName": "string",
  "externalId": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "maxConcurrentJobs": 0,
  "globalConnectionExternalIds": [
    "string"
  ],
  "alertReceiverEmail": "user@example.com"
}
```

<h3 id="postv1projects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» displayName|body|string|true|none|
|» externalId|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» metadata|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» maxConcurrentJobs|body|number \| null|false|none|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» globalConnectionExternalIds|body|[string]|false|none|
|» alertReceiverEmail|body|string(email) \| null|false|none|
|» » *anyOf*|body|string(email)|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "ownerId": "string",
  "displayName": "string",
  "platformId": "string",
  "maxConcurrentJobs": 0,
  "type": "TEAM",
  "icon": {
    "color": "RED"
  },
  "externalId": "string",
  "releasesEnabled": true,
  "metadata": {
    "property1": null,
    "property2": null
  },
  "poolId": "string",
  "plan": {
    "id": "string",
    "created": "string",
    "updated": "string",
    "projectId": "string",
    "locked": false,
    "name": "string",
    "piecesFilterType": "NONE",
    "pieces": [
      "string"
    ]
  },
  "analytics": {
    "totalUsers": 0,
    "activeUsers": 0,
    "totalFlows": 0,
    "activeFlows": 0
  }
}
```

<h3 id="postv1projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Default Response|[project](#schemaproject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/projects/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/projects/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "releasesEnabled": true,
    "displayName": "string",
    "externalId": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "icon": {
      "color": "RED"
    },
    "plan": {
      "pieces": [
        "string"
      ],
      "piecesFilterType": "NONE"
    },
    "globalConnectionExternalIds": [
      "string"
    ],
    "maxConcurrentJobs": 1
  }'
```

`POST /v1/projects/{id}`

> Body parameter

```json
{
  "releasesEnabled": true,
  "displayName": "string",
  "externalId": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "icon": {
    "color": "RED"
  },
  "plan": {
    "pieces": [
      "string"
    ],
    "piecesFilterType": "NONE"
  },
  "globalConnectionExternalIds": [
    "string"
  ],
  "maxConcurrentJobs": 1
}
```

<h3 id="postv1projectsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|false|none|
|» releasesEnabled|body|boolean|false|none|
|» displayName|body|string|false|none|
|» externalId|body|string|false|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» icon|body|object|false|none|
|» » color|body|string|true|none|
|» plan|body|object|false|none|
|» » pieces|body|[string]|false|none|
|» » piecesFilterType|body|string|false|none|
|» globalConnectionExternalIds|body|[string]|false|none|
|» maxConcurrentJobs|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » color|RED|
|» » color|BLUE|
|» » color|YELLOW|
|» » color|PURPLE|
|» » color|GREEN|
|» » color|PINK|
|» » color|VIOLET|
|» » color|ORANGE|
|» » color|DARK_GREEN|
|» » color|CYAN|
|» » color|LAVENDER|
|» » color|DEEP_ORANGE|
|» » piecesFilterType|NONE|
|» » piecesFilterType|ALLOWED|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "ownerId": "string",
  "displayName": "string",
  "platformId": "string",
  "maxConcurrentJobs": 0,
  "type": "TEAM",
  "icon": {
    "color": "RED"
  },
  "externalId": "string",
  "releasesEnabled": true,
  "metadata": {
    "property1": null,
    "property2": null
  },
  "poolId": "string",
  "plan": {
    "id": "string",
    "created": "string",
    "updated": "string",
    "projectId": "string",
    "locked": false,
    "name": "string",
    "piecesFilterType": "NONE",
    "pieces": [
      "string"
    ]
  },
  "analytics": {
    "totalUsers": 0,
    "activeUsers": 0,
    "totalFlows": 0,
    "activeFlows": 0
  }
}
```

<h3 id="postv1projectsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|[project](#schemaproject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## delete/v1/projects/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/projects/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/projects/{id}`

<h3 id="deletev1projectsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="deletev1projectsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-project-members">project-members</h1>

## get/v1/project-members

> Code samples

```bash
curl 'https://cloud.activepieces.com/api/v1/project-members?projectId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/project-members`

<h3 id="getv1project-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|string|true|none|
|projectRoleId|query|string|false|none|
|cursor|query|string|false|none|
|limit|query|number|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "created": "string",
      "updated": "string",
      "platformId": "string",
      "userId": "string",
      "projectId": "string",
      "projectRoleId": "string",
      "user": {
        "id": "string",
        "email": "string",
        "firstName": "string",
        "status": "ACTIVE",
        "externalId": "string",
        "platformId": "string",
        "platformRole": "ADMIN",
        "lastName": "string",
        "created": "string",
        "updated": "string",
        "lastActiveDate": "string",
        "imageUrl": "string"
      },
      "projectRole": {
        "id": "string",
        "created": "string",
        "updated": "string",
        "name": "string",
        "permissions": [
          "string"
        ],
        "platformId": "string",
        "type": "string",
        "userCount": 0
      },
      "project": {
        "id": "string",
        "displayName": "string"
      }
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="getv1project-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1project-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» id|string|true|none|none|
|» created|string|true|none|none|
|» updated|string|true|none|none|
|» platformId|string|true|none|none|
|» userId|string|true|none|none|
|» projectId|string|true|none|none|
|» projectRoleId|string|true|none|none|
|» user|[user](#schemauser)|true|none|none|
|» projectRole|object|true|none|none|
|» » id|string|true|none|none|
|» » created|string|true|none|none|
|» » updated|string|true|none|none|
|» » name|string|true|none|none|
|» » permissions|[string]|true|none|none|
|» » platformId|string \| null|false|none|none|
|» » » *anyOf*|string|false|none|none|
|» » » *anyOf*|null|false|none|none|
|» » type|string|true|none|none|
|» » userCount|number|false|none|none|
|» project|object|true|none|none|
|» » id|string|true|none|none|
|» » displayName|string|true|none|none|
|next|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|previous|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## delete/v1/project-members/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/project-members/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/project-members/{id}`

<h3 id="deletev1project-membersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 204 Response

```json
null
```

<h3 id="deletev1project-membersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/project-roles/{id}/project-members

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/project-roles/string/project-members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/project-roles/{id}/project-members`

<h3 id="getv1project-rolesidproject-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|number|false|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "created": "string",
      "updated": "string",
      "platformId": "string",
      "userId": "string",
      "projectId": "string",
      "projectRoleId": "string",
      "user": {
        "id": "string",
        "email": "string",
        "firstName": "string",
        "status": "ACTIVE",
        "externalId": "string",
        "platformId": "string",
        "platformRole": "ADMIN",
        "lastName": "string",
        "created": "string",
        "updated": "string",
        "lastActiveDate": "string",
        "imageUrl": "string"
      },
      "projectRole": {
        "id": "string",
        "created": "string",
        "updated": "string",
        "name": "string",
        "permissions": [
          "string"
        ],
        "platformId": "string",
        "type": "string",
        "userCount": 0
      },
      "project": {
        "id": "string",
        "displayName": "string"
      }
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="getv1project-rolesidproject-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1project-rolesidproject-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» id|string|true|none|none|
|» created|string|true|none|none|
|» updated|string|true|none|none|
|» platformId|string|true|none|none|
|» userId|string|true|none|none|
|» projectId|string|true|none|none|
|» projectRoleId|string|true|none|none|
|» user|[user](#schemauser)|true|none|none|
|» projectRole|object|true|none|none|
|» » id|string|true|none|none|
|» » created|string|true|none|none|
|» » updated|string|true|none|none|
|» » name|string|true|none|none|
|» » permissions|[string]|true|none|none|
|» » platformId|string \| null|false|none|none|
|» » » *anyOf*|string|false|none|none|
|» » » *anyOf*|null|false|none|none|
|» » type|string|true|none|none|
|» » userCount|number|false|none|none|
|» project|object|true|none|none|
|» » id|string|true|none|none|
|» » displayName|string|true|none|none|
|next|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|previous|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-pieces">pieces</h1>

## Add a piece to a platform

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/pieces \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "packageType": "ARCHIVE",
    "scope": "PLATFORM",
    "pieceName": "string",
    "pieceVersion": "string",
    "pieceArchive": {
      "filename": "string",
      "data": null,
      "type": "file",
      "mimetype": "string"
    }
  }'
```

`POST /v1/pieces`

Add a piece to a platform

> Body parameter

```json
{
  "packageType": "ARCHIVE",
  "scope": "PLATFORM",
  "pieceName": "string",
  "pieceVersion": "string",
  "pieceArchive": {
    "filename": "string",
    "data": null,
    "type": "file",
    "mimetype": "string"
  }
}
```

<h3 id="add-a-piece-to-a-platform-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» *anyOf*|body|object|false|Private Piece|
|» packageType|body|string|true|none|
|» scope|body|string|true|none|
|» pieceName|body|string|true|none|
|» pieceVersion|body|string|true|none|
|» pieceArchive|body|object|true|none|
|» » filename|body|string|true|none|
|» » data|body|object|true|none|
|» » type|body|string|true|none|
|» » mimetype|body|string|false|none|
|» *anyOf*|body|object|false|NPM Piece|
|» packageType|body|string|true|none|
|» scope|body|string|true|none|
|» pieceName|body|string|true|none|
|» pieceVersion|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» packageType|ARCHIVE|
|» scope|PLATFORM|
|» » type|file|
|» packageType|REGISTRY|
|» scope|PLATFORM|

> Example responses

> 201 Response

```json
{}
```

<h3 id="add-a-piece-to-a-platform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Default Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-git-repos">git-repos</h1>

## post/v1/git-repos

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/git-repos \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "projectId": "string",
    "remoteUrl": "string",
    "branch": "string",
    "branchType": "PRODUCTION",
    "sshPrivateKey": "string",
    "slug": "string"
  }'
```

`POST /v1/git-repos`

Upsert a git repository information for a project.

> Body parameter

```json
{
  "projectId": "string",
  "remoteUrl": "string",
  "branch": "string",
  "branchType": "PRODUCTION",
  "sshPrivateKey": "string",
  "slug": "string"
}
```

<h3 id="postv1git-repos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» projectId|body|string|true|none|
|» remoteUrl|body|string|true|none|
|» branch|body|string|true|none|
|» branchType|body|string|true|none|
|» sshPrivateKey|body|string|true|none|
|» slug|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» branchType|PRODUCTION|
|» branchType|DEVELOPMENT|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "remoteUrl": "string",
  "branch": "string",
  "branchType": "PRODUCTION",
  "projectId": "string",
  "slug": "string"
}
```

<h3 id="postv1git-repos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Default Response|[git-repo](#schemagit-repo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="activepieces-documentation-event-destinations">event-destinations</h1>

## get/v1/event-destinations

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/event-destinations \
  -H 'Accept: application/json'
```

`GET /v1/event-destinations`

List event destinations

<h3 id="getv1event-destinations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|number|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "created": "string",
      "updated": "string",
      "platformId": "string",
      "events": [
        "flow.created"
      ],
      "url": "http://example.com",
      "scope": "PLATFORM"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="getv1event-destinations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1event-destinations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» *oneOf*|object|false|none|none|
|» id|string|true|none|none|
|» created|string|true|none|none|
|» updated|string|true|none|none|
|» platformId|string|true|none|none|
|» events|[string]|true|none|none|
|» url|string(uri)|true|none|none|
|» scope|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» id|string|true|none|none|
|» created|string|true|none|none|
|» updated|string|true|none|none|
|» platformId|string|true|none|none|
|» events|[string]|true|none|none|
|» url|string(uri)|true|none|none|
|» scope|string|true|none|none|
|» projectId|string|true|none|none|
|next|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|previous|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» events|flow.created|
|» events|flow.deleted|
|» events|flow.updated|
|» events|flow.published|
|» events|flow.activated|
|» events|flow.deactivated|
|» events|flow.run.resumed|
|» events|flow.run.started|
|» events|flow.run.finished|
|» events|flow.run.retried|
|» events|folder.created|
|» events|folder.updated|
|» events|folder.deleted|
|» events|connection.upserted|
|» events|connection.deleted|
|» events|user.signed.up|
|» events|user.signed.in|
|» events|user.password.reset|
|» events|user.email.verified|
|» events|signing.key.created|
|» events|project.role.created|
|» events|project.role.deleted|
|» events|project.role.updated|
|» events|project.release.created|
|» scope|PLATFORM|
|» events|flow.created|
|» events|flow.deleted|
|» events|flow.updated|
|» events|flow.published|
|» events|flow.activated|
|» events|flow.deactivated|
|» events|flow.run.resumed|
|» events|flow.run.started|
|» events|flow.run.finished|
|» events|flow.run.retried|
|» events|folder.created|
|» events|folder.updated|
|» events|folder.deleted|
|» events|connection.upserted|
|» events|connection.deleted|
|» events|user.signed.up|
|» events|user.signed.in|
|» events|user.password.reset|
|» events|user.email.verified|
|» events|signing.key.created|
|» events|project.role.created|
|» events|project.role.deleted|
|» events|project.role.updated|
|» events|project.release.created|
|» scope|PROJECT|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="activepieces-documentation-project-releases">project-releases</h1>

## post/v1/project-releases

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/project-releases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "type": "ROLLBACK",
    "name": "string",
    "description": "string",
    "selectedFlowsIds": [
      "string"
    ],
    "projectId": "string",
    "projectReleaseId": "string"
  }'
```

`POST /v1/project-releases`

> Body parameter

```json
{
  "type": "ROLLBACK",
  "name": "string",
  "description": "string",
  "selectedFlowsIds": [
    "string"
  ],
  "projectId": "string",
  "projectReleaseId": "string"
}
```

<h3 id="postv1project-releases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» type|body|string|true|none|
|» name|body|string|true|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» selectedFlowsIds|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|
|» projectId|body|string|true|none|
|» projectReleaseId|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» type|body|string|true|none|
|» name|body|string|true|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» selectedFlowsIds|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|
|» projectId|body|string|true|none|
|» targetProjectId|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» type|body|string|true|none|
|» name|body|string|true|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» selectedFlowsIds|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|
|» projectId|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|ROLLBACK|
|» type|PROJECT|
|» type|GIT|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "projectId": "string",
  "name": "string",
  "description": "string",
  "importedBy": "string",
  "fileId": "string",
  "type": "GIT",
  "importedByUser": {
    "id": "string",
    "email": "string",
    "firstName": "string",
    "status": "ACTIVE",
    "externalId": "string",
    "platformId": "string",
    "platformRole": "ADMIN",
    "lastName": "string",
    "created": "string",
    "updated": "string",
    "lastActiveDate": "string",
    "imageUrl": "string"
  }
}
```

<h3 id="postv1project-releases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Default Response|[project-release](#schemaproject-release)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-global-connections">global-connections</h1>

## get/v1/global-connections

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/global-connections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/global-connections`

<h3 id="getv1global-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|scope|query|string|false|none|
|pieceName|query|[string]|false|none|
|displayName|query|string|false|none|
|status|query|[string]|false|none|
|limit|query|number|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|scope|PROJECT|
|scope|PLATFORM|
|status|ACTIVE|
|status|MISSING|
|status|ERROR|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "created": "string",
      "updated": "string",
      "externalId": "string",
      "displayName": "string",
      "type": "OAUTH2",
      "pieceName": "string",
      "projectIds": [
        "string"
      ],
      "platformId": "string",
      "scope": "PROJECT",
      "status": "ACTIVE",
      "ownerId": "string",
      "owner": {
        "id": "string",
        "email": "string",
        "firstName": "string",
        "status": "ACTIVE",
        "externalId": "string",
        "platformId": "string",
        "platformRole": "ADMIN",
        "lastName": "string",
        "created": "string",
        "updated": "string",
        "lastActiveDate": "string",
        "imageUrl": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "flowIds": [
        "string"
      ],
      "pieceVersion": "string",
      "preSelectForNewProjects": true,
      "usingSecretManager": true
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="getv1global-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1global-connections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[app-connection](#schemaapp-connection)]|true|none|none|
|next|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|previous|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/global-connections

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/global-connections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "pieceName": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "pieceVersion": "string",
    "type": "SECRET_TEXT",
    "value": {
      "type": "SECRET_TEXT",
      "secret_text": "string"
    },
    "scope": "PLATFORM",
    "projectIds": [
      "string"
    ],
    "externalId": "string",
    "preSelectForNewProjects": true
  }'
```

`POST /v1/global-connections`

> Body parameter

```json
{
  "displayName": "string",
  "pieceName": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "pieceVersion": "string",
  "type": "SECRET_TEXT",
  "value": {
    "type": "SECRET_TEXT",
    "secret_text": "string"
  },
  "scope": "PLATFORM",
  "projectIds": [
    "string"
  ],
  "externalId": "string",
  "preSelectForNewProjects": true
}
```

<h3 id="postv1global-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» *anyOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» pieceName|body|string|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» pieceVersion|body|string|false|none|
|» type|body|string|true|none|
|» value|body|object|true|none|
|» » type|body|string|true|none|
|» » secret_text|body|string|true|none|
|» scope|body|string|true|none|
|» projectIds|body|[string]|true|none|
|» externalId|body|string|false|none|
|» preSelectForNewProjects|body|boolean|false|none|
|» *anyOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» pieceName|body|string|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» pieceVersion|body|string|false|none|
|» type|body|string|true|none|
|» value|body|object|true|none|
|» » client_id|body|string|true|none|
|» » code|body|string|true|none|
|» » code_challenge|body|string|false|none|
|» » scope|body|string|true|none|
|» » authorization_method|body|string|false|none|
|» » client_secret|body|string|true|none|
|» » grant_type|body|string|false|none|
|» » props|body|object|false|none|
|» » » **additionalProperties**|body|object|false|none|
|» » redirect_url|body|string|true|none|
|» » type|body|string|true|none|
|» scope|body|string|true|none|
|» projectIds|body|[string]|true|none|
|» externalId|body|string|false|none|
|» preSelectForNewProjects|body|boolean|false|none|
|» *anyOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» pieceName|body|string|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» pieceVersion|body|string|false|none|
|» type|body|string|true|none|
|» value|body|object|true|none|
|» » client_id|body|string|true|none|
|» » code|body|string|true|none|
|» » code_challenge|body|string|false|none|
|» » scope|body|string|true|none|
|» » authorization_method|body|string|false|none|
|» » props|body|object|false|none|
|» » » **additionalProperties**|body|object|false|none|
|» » type|body|string|true|none|
|» scope|body|string|true|none|
|» projectIds|body|[string]|true|none|
|» externalId|body|string|false|none|
|» preSelectForNewProjects|body|boolean|false|none|
|» *anyOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» pieceName|body|string|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» pieceVersion|body|string|false|none|
|» type|body|string|true|none|
|» value|body|object|true|none|
|» » client_id|body|string|true|none|
|» » code|body|string|true|none|
|» » code_challenge|body|string|false|none|
|» » scope|body|string|true|none|
|» » authorization_method|body|string|false|none|
|» » props|body|object|false|none|
|» » » **additionalProperties**|body|object|false|none|
|» » type|body|string|true|none|
|» » redirect_url|body|string|true|none|
|» scope|body|string|true|none|
|» projectIds|body|[string]|true|none|
|» externalId|body|string|false|none|
|» preSelectForNewProjects|body|boolean|false|none|
|» *anyOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» pieceName|body|string|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» pieceVersion|body|string|false|none|
|» type|body|string|true|none|
|» value|body|object|true|none|
|» » username|body|string|true|none|
|» » password|body|string|true|none|
|» » type|body|string|true|none|
|» scope|body|string|true|none|
|» projectIds|body|[string]|true|none|
|» externalId|body|string|false|none|
|» preSelectForNewProjects|body|boolean|false|none|
|» *anyOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» pieceName|body|string|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» pieceVersion|body|string|false|none|
|» type|body|string|true|none|
|» value|body|object|true|none|
|» » type|body|string|true|none|
|» » props|body|object|true|none|
|» » » **additionalProperties**|body|object|false|none|
|» scope|body|string|true|none|
|» projectIds|body|[string]|true|none|
|» externalId|body|string|false|none|
|» preSelectForNewProjects|body|boolean|false|none|
|» *anyOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» pieceName|body|string|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» pieceVersion|body|string|false|none|
|» type|body|string|true|none|
|» value|body|object|true|none|
|» » type|body|string|true|none|
|» scope|body|string|true|none|
|» projectIds|body|[string]|true|none|
|» externalId|body|string|false|none|
|» preSelectForNewProjects|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|SECRET_TEXT|
|» » type|SECRET_TEXT|
|» scope|PLATFORM|
|» type|OAUTH2|
|» » authorization_method|HEADER|
|» » authorization_method|BODY|
|» » grant_type|authorization_code|
|» » grant_type|client_credentials|
|» » type|OAUTH2|
|» scope|PLATFORM|
|» type|CLOUD_OAUTH2|
|» » authorization_method|HEADER|
|» » authorization_method|BODY|
|» » type|CLOUD_OAUTH2|
|» scope|PLATFORM|
|» type|PLATFORM_OAUTH2|
|» » authorization_method|HEADER|
|» » authorization_method|BODY|
|» » type|PLATFORM_OAUTH2|
|» scope|PLATFORM|
|» type|BASIC_AUTH|
|» » type|BASIC_AUTH|
|» scope|PLATFORM|
|» type|CUSTOM_AUTH|
|» » type|CUSTOM_AUTH|
|» scope|PLATFORM|
|» type|NO_AUTH|
|» » type|NO_AUTH|
|» scope|PLATFORM|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "externalId": "string",
  "displayName": "string",
  "type": "OAUTH2",
  "pieceName": "string",
  "projectIds": [
    "string"
  ],
  "platformId": "string",
  "scope": "PROJECT",
  "status": "ACTIVE",
  "ownerId": "string",
  "owner": {
    "id": "string",
    "email": "string",
    "firstName": "string",
    "status": "ACTIVE",
    "externalId": "string",
    "platformId": "string",
    "platformRole": "ADMIN",
    "lastName": "string",
    "created": "string",
    "updated": "string",
    "lastActiveDate": "string",
    "imageUrl": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "flowIds": [
    "string"
  ],
  "pieceVersion": "string",
  "preSelectForNewProjects": true,
  "usingSecretManager": true
}
```

<h3 id="postv1global-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Default Response|[app-connection](#schemaapp-connection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/global-connections/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/global-connections/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "projectIds": [
      "string"
    ],
    "metadata": {
      "property1": null,
      "property2": null
    },
    "preSelectForNewProjects": true
  }'
```

`POST /v1/global-connections/{id}`

> Body parameter

```json
{
  "displayName": "string",
  "projectIds": [
    "string"
  ],
  "metadata": {
    "property1": null,
    "property2": null
  },
  "preSelectForNewProjects": true
}
```

<h3 id="postv1global-connectionsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|true|none|
|» displayName|body|string|true|none|
|» projectIds|body|[string]|false|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» preSelectForNewProjects|body|boolean|false|none|

<h3 id="postv1global-connectionsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## delete/v1/global-connections/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/global-connections/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/global-connections/{id}`

<h3 id="deletev1global-connectionsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 204 Response

```json
null
```

<h3 id="deletev1global-connectionsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-embedding">embedding</h1>

## post/v1/embed-subdomain/allowed-embed-origins

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/embed-subdomain/allowed-embed-origins \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allowedEmbedOrigins": [
      "http://example.com"
    ]
  }'
```

`POST /v1/embed-subdomain/allowed-embed-origins`

Add origins to the list allowed to embed this platform in an iframe. Existing origins are preserved; duplicates are ignored.

> Body parameter

```json
{
  "allowedEmbedOrigins": [
    "http://example.com"
  ]
}
```

<h3 id="postv1embed-subdomainallowed-embed-origins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[embeddingInput](#schemaembeddinginput)|false|none|
|» allowedEmbedOrigins|body|[string(uri)]|true|none|

> Example responses

> 200 Response

```json
{
  "allowedEmbedOrigins": [
    "string"
  ]
}
```

<h3 id="postv1embed-subdomainallowed-embed-origins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="postv1embed-subdomainallowed-embed-origins-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedEmbedOrigins|[string]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-platform-configuration">platform-configuration</h1>

## post/v1/platform-configurations

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/platform-configurations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "isProductTelemetryEnabled": true,
    "isInfraSetupTelemetryEnabled": true,
    "maxBarrierSignals": 1,
    "aiSpecificModelsVisible": true,
    "defaultChatModel": {
      "type": "tier",
      "tierId": "string"
    }
  }'
```

`POST /v1/platform-configurations`

Update platform settings, including the default chat model and whether specific AI models are visible to builders.

> Body parameter

```json
{
  "isProductTelemetryEnabled": true,
  "isInfraSetupTelemetryEnabled": true,
  "maxBarrierSignals": 1,
  "aiSpecificModelsVisible": true,
  "defaultChatModel": {
    "type": "tier",
    "tierId": "string"
  }
}
```

<h3 id="postv1platform-configurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» isProductTelemetryEnabled|body|boolean|false|none|
|» isInfraSetupTelemetryEnabled|body|boolean|false|none|
|» maxBarrierSignals|body|integer|false|none|
|» aiSpecificModelsVisible|body|boolean|false|none|
|» defaultChatModel|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » tierId|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » provider|body|string|true|none|
|» » providerConfigId|body|string|true|none|
|» » modelId|body|string|true|none|
|» » *anyOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|tier|
|» » type|model|
|» » provider|openai|
|» » provider|openrouter|
|» » provider|anthropic|
|» » provider|azure|
|» » provider|google|
|» » provider|activepieces|
|» » provider|cloudflare-gateway|
|» » provider|custom|
|» » provider|bedrock|
|» » provider|vertex|
|» » provider|mistral|
|» » provider|xai|
|» » provider|deepseek|
|» » provider|zai|
|» » provider|qwen|
|» » provider|minimax|
|» » provider|moonshot|
|» » provider|meta|
|» » provider|nvidia|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "isProductTelemetryEnabled": true,
  "isInfraSetupTelemetryEnabled": true,
  "maxBarrierSignals": 1,
  "aiSpecificModelsVisible": true,
  "defaultChatModel": {
    "type": "tier",
    "tierId": "string"
  }
}
```

<h3 id="postv1platform-configurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="postv1platform-configurations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|isProductTelemetryEnabled|boolean|true|none|none|
|isInfraSetupTelemetryEnabled|boolean|true|none|none|
|maxBarrierSignals|integer|true|none|none|
|aiSpecificModelsVisible|boolean|true|none|none|
|defaultChatModel|object \| null|false|none|none|
|» *anyOf*|object|false|none|none|
|» *oneOf*|object|false|none|none|
|» type|string|true|none|none|
|» tierId|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» type|string|true|none|none|
|» provider|string|true|none|none|
|» providerConfigId|string|true|none|none|
|» modelId|string|true|none|none|
|» *anyOf*|null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|tier|
|» type|model|
|» provider|openai|
|» provider|openrouter|
|» provider|anthropic|
|» provider|azure|
|» provider|google|
|» provider|activepieces|
|» provider|cloudflare-gateway|
|» provider|custom|
|» provider|bedrock|
|» provider|vertex|
|» provider|mistral|
|» provider|xai|
|» provider|deepseek|
|» provider|zai|
|» provider|qwen|
|» provider|minimax|
|» provider|moonshot|
|» provider|meta|
|» provider|nvidia|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-ai-providers">ai-providers</h1>

## get/v1/ai-providers/configs

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/ai-providers/configs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/ai-providers/configs`

List the AI provider keys connected to the platform. Secrets are never returned.

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "provider": "openai",
    "config": {
      "apiKeyHeader": "string",
      "baseUrl": "string",
      "models": [
        {
          "modelId": "string",
          "modelName": "string",
          "modelType": "image"
        }
      ],
      "defaultHeaders": {
        "property1": "string",
        "property2": "string"
      },
      "apiStyle": "chat"
    },
    "enabledForChat": true,
    "modelScope": "all",
    "modelIds": [
      "string"
    ],
    "projectScope": "all",
    "projectIds": [
      "string"
    ],
    "status": "active",
    "statusReason": "string",
    "statusUpdated": "string"
  }
]
```

<h3 id="getv1ai-providersconfigs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1ai-providersconfigs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|string|true|none|none|
|» name|string|true|none|none|
|» provider|string|true|none|none|
|» config|object|true|none|none|
|» » *anyOf*|object|false|none|none|
|» » apiKeyHeader|string|true|none|none|
|» » baseUrl|string|true|none|none|
|» » models|[object]|true|none|none|
|» » » modelId|string|true|none|none|
|» » » modelName|string|true|none|none|
|» » » modelType|string|true|none|none|
|» » defaultHeaders|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » apiStyle|string|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » accountId|string|true|none|none|
|» » gatewayId|string|true|none|none|
|» » models|[object]|true|none|none|
|» » » modelId|string|true|none|none|
|» » » modelName|string|true|none|none|
|» » » modelType|string|true|none|none|
|» » vertexProject|string|false|none|none|
|» » vertexRegion|string|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » resourceName|string|true|none|none|
|» » apiVersion|string|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » project|string|true|none|none|
|» » region|string|true|none|none|
|» » models|[object]|true|none|none|
|» » » modelId|string|true|none|none|
|» » » modelName|string|true|none|none|
|» » » modelType|string|true|none|none|
|» » *anyOf*|object|false|none|none|
|» » region|string|true|none|none|
|» » *anyOf*|object|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » *anyOf*|object|false|none|none|
|» enabledForChat|boolean|true|none|none|
|» modelScope|string|true|none|none|
|» modelIds|[string]|true|none|none|
|» projectScope|string|true|none|none|
|» projectIds|[string]|true|none|none|
|» status|string|true|none|none|
|» statusReason|string \| null|true|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» statusUpdated|string \| null|true|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» provider|openai|
|» provider|openrouter|
|» provider|anthropic|
|» provider|azure|
|» provider|google|
|» provider|activepieces|
|» provider|cloudflare-gateway|
|» provider|custom|
|» provider|bedrock|
|» provider|vertex|
|» provider|mistral|
|» provider|xai|
|» provider|deepseek|
|» provider|zai|
|» provider|qwen|
|» provider|minimax|
|» provider|moonshot|
|» provider|meta|
|» provider|nvidia|
|» » » modelType|image|
|» » » modelType|text|
|» » apiStyle|chat|
|» » apiStyle|responses|
|» » » modelType|image|
|» » » modelType|text|
|» » » modelType|image|
|» » » modelType|text|
|» modelScope|all|
|» modelScope|selected|
|» projectScope|all|
|» projectScope|selected|
|» projectScope|except|
|» status|active|
|» status|out_of_credits|
|» status|rejected|
|» status|unreachable|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/ai-providers/configs/{id}/models

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/ai-providers/configs/string/models \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/ai-providers/configs/{id}/models`

List the models an AI provider key can run.

<h3 id="getv1ai-providersconfigsidmodels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "type": "image",
    "metadata": {
      "contextTokens": 0,
      "maxOutputTokens": 0,
      "releaseDate": "string",
      "inputCostPerMillionTokens": 0,
      "outputCostPerMillionTokens": 0,
      "cacheReadCostPerMillionTokens": 0,
      "cacheWriteCostPerMillionTokens": 0,
      "supportsToolCalling": true,
      "supportsReasoning": true,
      "supportsVision": true
    }
  }
]
```

<h3 id="getv1ai-providersconfigsidmodels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1ai-providersconfigsidmodels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|string|true|none|none|
|» name|string|true|none|none|
|» type|string|true|none|none|
|» metadata|object|false|none|none|
|» » contextTokens|number|false|none|none|
|» » maxOutputTokens|number|false|none|none|
|» » releaseDate|string|false|none|none|
|» » inputCostPerMillionTokens|number|false|none|none|
|» » outputCostPerMillionTokens|number|false|none|none|
|» » cacheReadCostPerMillionTokens|number|false|none|none|
|» » cacheWriteCostPerMillionTokens|number|false|none|none|
|» » supportsToolCalling|boolean|false|none|none|
|» » supportsReasoning|boolean|false|none|none|
|» » supportsVision|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|image|
|» type|text|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/ai-providers/configs/{id}/suggested-models

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/ai-providers/configs/string/suggested-models \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/ai-providers/configs/{id}/suggested-models`

Suggest model ids for a key whose provider has no model list (Other, OpenAI compatible).

<h3 id="getv1ai-providersconfigsidsuggested-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getv1ai-providersconfigsidsuggested-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1ai-providersconfigsidsuggested-models-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/ai-providers/model-options/platform

> Code samples

```bash
curl 'https://cloud.activepieces.com/api/v1/ai-providers/model-options/platform?surface=flow' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/ai-providers/model-options/platform`

List every model the platform can offer for a surface (chat or flows), grouped by key.

<h3 id="getv1ai-providersmodel-optionsplatform-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|surface|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|surface|flow|
|surface|agent|
|surface|chat|

> Example responses

> 200 Response

```json
{
  "tiers": [
    {
      "id": "string",
      "name": "string",
      "emoji": "string",
      "description": "string",
      "isDefault": true,
      "isFast": true,
      "main": {
        "provider": "openai",
        "modelId": "string",
        "name": "string",
        "keyName": "string",
        "metadata": {
          "contextTokens": 0,
          "maxOutputTokens": 0,
          "releaseDate": "string",
          "inputCostPerMillionTokens": 0,
          "outputCostPerMillionTokens": 0,
          "cacheReadCostPerMillionTokens": 0,
          "cacheWriteCostPerMillionTokens": 0,
          "supportsToolCalling": true,
          "supportsReasoning": true,
          "supportsVision": true
        }
      },
      "fallbacks": [
        {
          "provider": "openai",
          "modelId": "string",
          "name": "string",
          "keyName": "string",
          "metadata": {
            "contextTokens": 0,
            "maxOutputTokens": 0,
            "releaseDate": "string",
            "inputCostPerMillionTokens": 0,
            "outputCostPerMillionTokens": 0,
            "cacheReadCostPerMillionTokens": 0,
            "cacheWriteCostPerMillionTokens": 0,
            "supportsToolCalling": true,
            "supportsReasoning": true,
            "supportsVision": true
          }
        }
      ]
    }
  ],
  "credits": {
    "providerConfigId": "string",
    "defaultTierId": "string",
    "tiers": [
      {
        "id": "string",
        "label": "string",
        "model": {
          "provider": "openai",
          "modelId": "string",
          "name": "string",
          "keyName": "string",
          "metadata": {
            "contextTokens": 0,
            "maxOutputTokens": 0,
            "releaseDate": "string",
            "inputCostPerMillionTokens": 0,
            "outputCostPerMillionTokens": 0,
            "cacheReadCostPerMillionTokens": 0,
            "cacheWriteCostPerMillionTokens": 0,
            "supportsToolCalling": true,
            "supportsReasoning": true,
            "supportsVision": true
          }
        }
      }
    ]
  },
  "keys": [
    {
      "providerConfigId": "string",
      "provider": "openai",
      "name": "string",
      "models": [
        {
          "id": "string",
          "name": "string",
          "type": "image",
          "metadata": {
            "contextTokens": 0,
            "maxOutputTokens": 0,
            "releaseDate": "string",
            "inputCostPerMillionTokens": 0,
            "outputCostPerMillionTokens": 0,
            "cacheReadCostPerMillionTokens": 0,
            "cacheWriteCostPerMillionTokens": 0,
            "supportsToolCalling": true,
            "supportsReasoning": true,
            "supportsVision": true
          }
        }
      ]
    }
  ],
  "defaultChoice": {
    "type": "tier",
    "tierId": "string"
  },
  "movedTiers": {
    "property1": "string",
    "property2": "string"
  },
  "specificModelsHidden": true
}
```

<h3 id="getv1ai-providersmodel-optionsplatform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1ai-providersmodel-optionsplatform-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tiers|[object]|true|none|none|
|» id|string|true|none|none|
|» name|string|true|none|none|
|» emoji|string|true|none|none|
|» description|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» isDefault|boolean|true|none|none|
|» isFast|boolean|true|none|none|
|» main|object|true|none|none|
|» » provider|string|true|none|none|
|» » modelId|string|true|none|none|
|» » name|string|true|none|none|
|» » keyName|string|true|none|none|
|» » metadata|object|false|none|none|
|» » » contextTokens|number|false|none|none|
|» » » maxOutputTokens|number|false|none|none|
|» » » releaseDate|string|false|none|none|
|» » » inputCostPerMillionTokens|number|false|none|none|
|» » » outputCostPerMillionTokens|number|false|none|none|
|» » » cacheReadCostPerMillionTokens|number|false|none|none|
|» » » cacheWriteCostPerMillionTokens|number|false|none|none|
|» » » supportsToolCalling|boolean|false|none|none|
|» » » supportsReasoning|boolean|false|none|none|
|» » » supportsVision|boolean|false|none|none|
|» fallbacks|[object]|true|none|none|
|» » provider|string|true|none|none|
|» » modelId|string|true|none|none|
|» » name|string|true|none|none|
|» » keyName|string|true|none|none|
|» » metadata|object|false|none|none|
|» » » contextTokens|number|false|none|none|
|» » » maxOutputTokens|number|false|none|none|
|» » » releaseDate|string|false|none|none|
|» » » inputCostPerMillionTokens|number|false|none|none|
|» » » outputCostPerMillionTokens|number|false|none|none|
|» » » cacheReadCostPerMillionTokens|number|false|none|none|
|» » » cacheWriteCostPerMillionTokens|number|false|none|none|
|» » » supportsToolCalling|boolean|false|none|none|
|» » » supportsReasoning|boolean|false|none|none|
|» » » supportsVision|boolean|false|none|none|
|credits|object \| null|false|none|none|
|» *anyOf*|object|false|none|none|
|» providerConfigId|string|true|none|none|
|» defaultTierId|string|true|none|none|
|» tiers|[object]|true|none|none|
|» » id|string|true|none|none|
|» » label|string|true|none|none|
|» » model|object|true|none|none|
|» » » provider|string|true|none|none|
|» » » modelId|string|true|none|none|
|» » » name|string|true|none|none|
|» » » keyName|string|true|none|none|
|» » » metadata|object|false|none|none|
|» » » » contextTokens|number|false|none|none|
|» » » » maxOutputTokens|number|false|none|none|
|» » » » releaseDate|string|false|none|none|
|» » » » inputCostPerMillionTokens|number|false|none|none|
|» » » » outputCostPerMillionTokens|number|false|none|none|
|» » » » cacheReadCostPerMillionTokens|number|false|none|none|
|» » » » cacheWriteCostPerMillionTokens|number|false|none|none|
|» » » » supportsToolCalling|boolean|false|none|none|
|» » » » supportsReasoning|boolean|false|none|none|
|» » » » supportsVision|boolean|false|none|none|
|» *anyOf*|null|false|none|none|
|keys|[object]|true|none|none|
|» providerConfigId|string|true|none|none|
|» provider|string|true|none|none|
|» name|string|true|none|none|
|» models|[object]|true|none|none|
|» » id|string|true|none|none|
|» » name|string|true|none|none|
|» » type|string|true|none|none|
|» » metadata|object|false|none|none|
|» » » contextTokens|number|false|none|none|
|» » » maxOutputTokens|number|false|none|none|
|» » » releaseDate|string|false|none|none|
|» » » inputCostPerMillionTokens|number|false|none|none|
|» » » outputCostPerMillionTokens|number|false|none|none|
|» » » cacheReadCostPerMillionTokens|number|false|none|none|
|» » » cacheWriteCostPerMillionTokens|number|false|none|none|
|» » » supportsToolCalling|boolean|false|none|none|
|» » » supportsReasoning|boolean|false|none|none|
|» » » supportsVision|boolean|false|none|none|
|defaultChoice|object \| null|false|none|none|
|» *anyOf*|object|false|none|none|
|» *oneOf*|object|false|none|none|
|» type|string|true|none|none|
|» tierId|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» type|string|true|none|none|
|» provider|string|true|none|none|
|» providerConfigId|string|true|none|none|
|» modelId|string|true|none|none|
|» *anyOf*|null|false|none|none|
|movedTiers|object|true|none|none|
|» **additionalProperties**|string|false|none|none|
|specificModelsHidden|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » provider|openai|
|» » provider|openrouter|
|» » provider|anthropic|
|» » provider|azure|
|» » provider|google|
|» » provider|activepieces|
|» » provider|cloudflare-gateway|
|» » provider|custom|
|» » provider|bedrock|
|» » provider|vertex|
|» » provider|mistral|
|» » provider|xai|
|» » provider|deepseek|
|» » provider|zai|
|» » provider|qwen|
|» » provider|minimax|
|» » provider|moonshot|
|» » provider|meta|
|» » provider|nvidia|
|» » provider|openai|
|» » provider|openrouter|
|» » provider|anthropic|
|» » provider|azure|
|» » provider|google|
|» » provider|activepieces|
|» » provider|cloudflare-gateway|
|» » provider|custom|
|» » provider|bedrock|
|» » provider|vertex|
|» » provider|mistral|
|» » provider|xai|
|» » provider|deepseek|
|» » provider|zai|
|» » provider|qwen|
|» » provider|minimax|
|» » provider|moonshot|
|» » provider|meta|
|» » provider|nvidia|
|» » » provider|openai|
|» » » provider|openrouter|
|» » » provider|anthropic|
|» » » provider|azure|
|» » » provider|google|
|» » » provider|activepieces|
|» » » provider|cloudflare-gateway|
|» » » provider|custom|
|» » » provider|bedrock|
|» » » provider|vertex|
|» » » provider|mistral|
|» » » provider|xai|
|» » » provider|deepseek|
|» » » provider|zai|
|» » » provider|qwen|
|» » » provider|minimax|
|» » » provider|moonshot|
|» » » provider|meta|
|» » » provider|nvidia|
|» provider|openai|
|» provider|openrouter|
|» provider|anthropic|
|» provider|azure|
|» provider|google|
|» provider|activepieces|
|» provider|cloudflare-gateway|
|» provider|custom|
|» provider|bedrock|
|» provider|vertex|
|» provider|mistral|
|» provider|xai|
|» provider|deepseek|
|» provider|zai|
|» provider|qwen|
|» provider|minimax|
|» provider|moonshot|
|» provider|meta|
|» provider|nvidia|
|» » type|image|
|» » type|text|
|» type|tier|
|» type|model|
|» provider|openai|
|» provider|openrouter|
|» provider|anthropic|
|» provider|azure|
|» provider|google|
|» provider|activepieces|
|» provider|cloudflare-gateway|
|» provider|custom|
|» provider|bedrock|
|» provider|vertex|
|» provider|mistral|
|» provider|xai|
|» provider|deepseek|
|» provider|zai|
|» provider|qwen|
|» provider|minimax|
|» provider|moonshot|
|» provider|meta|
|» provider|nvidia|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/ai-providers

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/ai-providers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "provider": "openai",
    "config": {},
    "auth": {
      "apiKey": "string"
    }
  }'
```

`POST /v1/ai-providers`

Connect a new AI provider key. The credentials are checked with the provider before saving.

> Body parameter

```json
{
  "displayName": "string",
  "provider": "openai",
  "config": {},
  "auth": {
    "apiKey": "string"
  }
}
```

<h3 id="postv1ai-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» provider|body|string|true|none|
|» config|body|object|true|none|
|» auth|body|object|true|none|
|» » apiKey|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» provider|body|string|true|none|
|» config|body|object|true|none|
|» auth|body|object|true|none|
|» » apiKey|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» provider|body|string|true|none|
|» config|body|object|true|none|
|» auth|body|object|true|none|
|» » apiKey|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» provider|body|string|true|none|
|» config|body|object|true|none|
|» » resourceName|body|string|true|none|
|» » apiVersion|body|string|false|none|
|» auth|body|object|true|none|
|» » apiKey|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» provider|body|string|true|none|
|» config|body|object|true|none|
|» auth|body|object|true|none|
|» » apiKey|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» provider|body|string|true|none|
|» config|body|object|true|none|
|» » accountId|body|string|true|none|
|» » gatewayId|body|string|true|none|
|» » models|body|[object]|true|none|
|» » » modelId|body|string|true|none|
|» » » modelName|body|string|true|none|
|» » » modelType|body|string|true|none|
|» » vertexProject|body|string|false|none|
|» » vertexRegion|body|string|false|none|
|» auth|body|object|true|none|
|» » apiKey|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» provider|body|string|true|none|
|» config|body|object|true|none|
|» » apiKeyHeader|body|string|true|none|
|» » baseUrl|body|string|true|none|
|» » models|body|[object]|true|none|
|» » » modelId|body|string|true|none|
|» » » modelName|body|string|true|none|
|» » » modelType|body|string|true|none|
|» » defaultHeaders|body|object|false|none|
|» » » **additionalProperties**|body|string|false|none|
|» » apiStyle|body|string|false|none|
|» auth|body|object|true|none|
|» » apiKey|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» provider|body|string|true|none|
|» config|body|object|true|none|
|» auth|body|object|true|none|
|» » apiKey|body|string|true|none|
|» » apiKeyHash|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» provider|body|string|true|none|
|» config|body|object|true|none|
|» » region|body|string|true|none|
|» auth|body|object|true|none|
|» » accessKeyId|body|string|true|none|
|» » secretAccessKey|body|string|true|none|
|» » sessionToken|body|string|false|none|
|» *oneOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» provider|body|string|true|none|
|» config|body|object|true|none|
|» » project|body|string|true|none|
|» » region|body|string|true|none|
|» » models|body|[object]|true|none|
|» » » modelId|body|string|true|none|
|» » » modelName|body|string|true|none|
|» » » modelType|body|string|true|none|
|» auth|body|object|true|none|
|» » serviceAccountJson|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» provider|body|string|true|none|
|» config|body|object|true|none|
|» auth|body|object|true|none|
|» » apiKey|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» provider|body|string|true|none|
|» config|body|object|true|none|
|» auth|body|object|true|none|
|» » apiKey|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» provider|body|string|true|none|
|» config|body|object|true|none|
|» auth|body|object|true|none|
|» » apiKey|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» provider|body|string|true|none|
|» config|body|object|true|none|
|» auth|body|object|true|none|
|» » apiKey|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» provider|body|string|true|none|
|» config|body|object|true|none|
|» auth|body|object|true|none|
|» » apiKey|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» provider|body|string|true|none|
|» config|body|object|true|none|
|» auth|body|object|true|none|
|» » apiKey|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» provider|body|string|true|none|
|» config|body|object|true|none|
|» auth|body|object|true|none|
|» » apiKey|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» provider|body|string|true|none|
|» config|body|object|true|none|
|» auth|body|object|true|none|
|» » apiKey|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» displayName|body|string|true|none|
|» provider|body|string|true|none|
|» config|body|object|true|none|
|» auth|body|object|true|none|
|» » apiKey|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » modelType|image|
|» » » modelType|text|
|» » » modelType|image|
|» » » modelType|text|
|» » apiStyle|chat|
|» » apiStyle|responses|
|» » » modelType|image|
|» » » modelType|text|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "provider": "openai",
  "config": {
    "apiKeyHeader": "string",
    "baseUrl": "string",
    "models": [
      {
        "modelId": "string",
        "modelName": "string",
        "modelType": "image"
      }
    ],
    "defaultHeaders": {
      "property1": "string",
      "property2": "string"
    },
    "apiStyle": "chat"
  },
  "enabledForChat": true,
  "modelScope": "all",
  "modelIds": [
    "string"
  ],
  "projectScope": "all",
  "projectIds": [
    "string"
  ],
  "status": "active",
  "statusReason": "string",
  "statusUpdated": "string"
}
```

<h3 id="postv1ai-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="postv1ai-providers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|provider|string|true|none|none|
|config|object|true|none|none|
|» *anyOf*|object|false|none|none|
|» apiKeyHeader|string|true|none|none|
|» baseUrl|string|true|none|none|
|» models|[object]|true|none|none|
|» » modelId|string|true|none|none|
|» » modelName|string|true|none|none|
|» » modelType|string|true|none|none|
|» defaultHeaders|object|false|none|none|
|» » **additionalProperties**|string|false|none|none|
|» apiStyle|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» accountId|string|true|none|none|
|» gatewayId|string|true|none|none|
|» models|[object]|true|none|none|
|» » modelId|string|true|none|none|
|» » modelName|string|true|none|none|
|» » modelType|string|true|none|none|
|» vertexProject|string|false|none|none|
|» vertexRegion|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» resourceName|string|true|none|none|
|» apiVersion|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» project|string|true|none|none|
|» region|string|true|none|none|
|» models|[object]|true|none|none|
|» » modelId|string|true|none|none|
|» » modelName|string|true|none|none|
|» » modelType|string|true|none|none|
|» *anyOf*|object|false|none|none|
|» region|string|true|none|none|
|» *anyOf*|object|false|none|none|
|» *anyOf*|object|false|none|none|
|» *anyOf*|object|false|none|none|
|» *anyOf*|object|false|none|none|
|» *anyOf*|object|false|none|none|
|» *anyOf*|object|false|none|none|
|» *anyOf*|object|false|none|none|
|enabledForChat|boolean|true|none|none|
|modelScope|string|true|none|none|
|modelIds|[string]|true|none|none|
|projectScope|string|true|none|none|
|projectIds|[string]|true|none|none|
|status|string|true|none|none|
|statusReason|string \| null|true|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|statusUpdated|string \| null|true|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|provider|openai|
|provider|openrouter|
|provider|anthropic|
|provider|azure|
|provider|google|
|provider|activepieces|
|provider|cloudflare-gateway|
|provider|custom|
|provider|bedrock|
|provider|vertex|
|provider|mistral|
|provider|xai|
|provider|deepseek|
|provider|zai|
|provider|qwen|
|provider|minimax|
|provider|moonshot|
|provider|meta|
|provider|nvidia|
|» » modelType|image|
|» » modelType|text|
|» apiStyle|chat|
|» apiStyle|responses|
|» » modelType|image|
|» » modelType|text|
|» » modelType|image|
|» » modelType|text|
|modelScope|all|
|modelScope|selected|
|projectScope|all|
|projectScope|selected|
|projectScope|except|
|status|active|
|status|out_of_credits|
|status|rejected|
|status|unreachable|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/ai-providers/{id}/recheck

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/ai-providers/string/recheck \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/ai-providers/{id}/recheck`

Check an AI provider key against its provider again and return its status.

<h3 id="postv1ai-providersidrecheck-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "active"
}
```

<h3 id="postv1ai-providersidrecheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="postv1ai-providersidrecheck-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|out_of_credits|
|status|rejected|
|status|unreachable|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/ai-providers/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/ai-providers/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "config": {
      "apiKeyHeader": "string",
      "baseUrl": "string",
      "models": [
        {
          "modelId": "string",
          "modelName": "string",
          "modelType": "image"
        }
      ],
      "defaultHeaders": {
        "property1": "string",
        "property2": "string"
      },
      "apiStyle": "chat"
    },
    "auth": {
      "apiKey": "string"
    },
    "enabledForChat": true,
    "modelScope": "all",
    "modelIds": [
      "string"
    ],
    "projectScope": "all",
    "projectIds": [
      "string"
    ]
  }'
```

`POST /v1/ai-providers/{id}`

Update an AI provider key: its name, credentials, model scope or project access.

> Body parameter

```json
{
  "displayName": "string",
  "config": {
    "apiKeyHeader": "string",
    "baseUrl": "string",
    "models": [
      {
        "modelId": "string",
        "modelName": "string",
        "modelType": "image"
      }
    ],
    "defaultHeaders": {
      "property1": "string",
      "property2": "string"
    },
    "apiStyle": "chat"
  },
  "auth": {
    "apiKey": "string"
  },
  "enabledForChat": true,
  "modelScope": "all",
  "modelIds": [
    "string"
  ],
  "projectScope": "all",
  "projectIds": [
    "string"
  ]
}
```

<h3 id="postv1ai-providersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|true|none|
|» displayName|body|string|true|none|
|» config|body|object|false|none|
|» » *anyOf*|body|object|false|none|
|» » apiKeyHeader|body|string|true|none|
|» » baseUrl|body|string|true|none|
|» » models|body|[object]|true|none|
|» » » modelId|body|string|true|none|
|» » » modelName|body|string|true|none|
|» » » modelType|body|string|true|none|
|» » defaultHeaders|body|object|false|none|
|» » » **additionalProperties**|body|string|false|none|
|» » apiStyle|body|string|false|none|
|» » *anyOf*|body|object|false|none|
|» » accountId|body|string|true|none|
|» » gatewayId|body|string|true|none|
|» » models|body|[object]|true|none|
|» » » modelId|body|string|true|none|
|» » » modelName|body|string|true|none|
|» » » modelType|body|string|true|none|
|» » vertexProject|body|string|false|none|
|» » vertexRegion|body|string|false|none|
|» » *anyOf*|body|object|false|none|
|» » resourceName|body|string|true|none|
|» » apiVersion|body|string|false|none|
|» » *anyOf*|body|object|false|none|
|» » project|body|string|true|none|
|» » region|body|string|true|none|
|» » models|body|[object]|true|none|
|» » » modelId|body|string|true|none|
|» » » modelName|body|string|true|none|
|» » » modelType|body|string|true|none|
|» » *anyOf*|body|object|false|none|
|» » region|body|string|true|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|object|false|none|
|» auth|body|object|false|none|
|» » *anyOf*|body|object|false|none|
|» » apiKey|body|string|true|none|
|» » *anyOf*|body|object|false|none|
|» » apiKey|body|string|true|none|
|» » *anyOf*|body|object|false|none|
|» » apiKey|body|string|true|none|
|» » *anyOf*|body|object|false|none|
|» » apiKey|body|string|true|none|
|» » *anyOf*|body|object|false|none|
|» » apiKey|body|string|true|none|
|» » *anyOf*|body|object|false|none|
|» » apiKey|body|string|true|none|
|» » *anyOf*|body|object|false|none|
|» » apiKey|body|string|true|none|
|» » *anyOf*|body|object|false|none|
|» » apiKey|body|string|true|none|
|» » apiKeyHash|body|string|true|none|
|» » *anyOf*|body|object|false|none|
|» » accessKeyId|body|string|true|none|
|» » secretAccessKey|body|string|true|none|
|» » sessionToken|body|string|false|none|
|» » *anyOf*|body|object|false|none|
|» » serviceAccountJson|body|string|true|none|
|» » *anyOf*|body|object|false|none|
|» » apiKey|body|string|true|none|
|» enabledForChat|body|boolean|false|none|
|» modelScope|body|string|false|none|
|» modelIds|body|[string]|false|none|
|» projectScope|body|string|false|none|
|» projectIds|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » modelType|image|
|» » » modelType|text|
|» » apiStyle|chat|
|» » apiStyle|responses|
|» » » modelType|image|
|» » » modelType|text|
|» » » modelType|image|
|» » » modelType|text|
|» modelScope|all|
|» modelScope|selected|
|» projectScope|all|
|» projectScope|selected|
|» projectScope|except|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "provider": "openai",
  "config": {
    "apiKeyHeader": "string",
    "baseUrl": "string",
    "models": [
      {
        "modelId": "string",
        "modelName": "string",
        "modelType": "image"
      }
    ],
    "defaultHeaders": {
      "property1": "string",
      "property2": "string"
    },
    "apiStyle": "chat"
  },
  "enabledForChat": true,
  "modelScope": "all",
  "modelIds": [
    "string"
  ],
  "projectScope": "all",
  "projectIds": [
    "string"
  ],
  "status": "active",
  "statusReason": "string",
  "statusUpdated": "string"
}
```

<h3 id="postv1ai-providersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="postv1ai-providersid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|provider|string|true|none|none|
|config|object|true|none|none|
|» *anyOf*|object|false|none|none|
|» apiKeyHeader|string|true|none|none|
|» baseUrl|string|true|none|none|
|» models|[object]|true|none|none|
|» » modelId|string|true|none|none|
|» » modelName|string|true|none|none|
|» » modelType|string|true|none|none|
|» defaultHeaders|object|false|none|none|
|» » **additionalProperties**|string|false|none|none|
|» apiStyle|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» accountId|string|true|none|none|
|» gatewayId|string|true|none|none|
|» models|[object]|true|none|none|
|» » modelId|string|true|none|none|
|» » modelName|string|true|none|none|
|» » modelType|string|true|none|none|
|» vertexProject|string|false|none|none|
|» vertexRegion|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» resourceName|string|true|none|none|
|» apiVersion|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» project|string|true|none|none|
|» region|string|true|none|none|
|» models|[object]|true|none|none|
|» » modelId|string|true|none|none|
|» » modelName|string|true|none|none|
|» » modelType|string|true|none|none|
|» *anyOf*|object|false|none|none|
|» region|string|true|none|none|
|» *anyOf*|object|false|none|none|
|» *anyOf*|object|false|none|none|
|» *anyOf*|object|false|none|none|
|» *anyOf*|object|false|none|none|
|» *anyOf*|object|false|none|none|
|» *anyOf*|object|false|none|none|
|» *anyOf*|object|false|none|none|
|enabledForChat|boolean|true|none|none|
|modelScope|string|true|none|none|
|modelIds|[string]|true|none|none|
|projectScope|string|true|none|none|
|projectIds|[string]|true|none|none|
|status|string|true|none|none|
|statusReason|string \| null|true|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|statusUpdated|string \| null|true|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|provider|openai|
|provider|openrouter|
|provider|anthropic|
|provider|azure|
|provider|google|
|provider|activepieces|
|provider|cloudflare-gateway|
|provider|custom|
|provider|bedrock|
|provider|vertex|
|provider|mistral|
|provider|xai|
|provider|deepseek|
|provider|zai|
|provider|qwen|
|provider|minimax|
|provider|moonshot|
|provider|meta|
|provider|nvidia|
|» » modelType|image|
|» » modelType|text|
|» apiStyle|chat|
|» apiStyle|responses|
|» » modelType|image|
|» » modelType|text|
|» » modelType|image|
|» » modelType|text|
|modelScope|all|
|modelScope|selected|
|projectScope|all|
|projectScope|selected|
|projectScope|except|
|status|active|
|status|out_of_credits|
|status|rejected|
|status|unreachable|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## delete/v1/ai-providers/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/ai-providers/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/ai-providers/{id}`

Delete an AI provider key. Fails while a tier still uses it.

<h3 id="deletev1ai-providersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="deletev1ai-providersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-ai-model-tiers">ai-model-tiers</h1>

## get/v1/platform-model-tiers/admin

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/platform-model-tiers/admin \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/platform-model-tiers/admin`

List the platform model tiers with their main model and fallbacks.

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "created": "string",
    "updated": "string",
    "platformId": "string",
    "name": "string",
    "emoji": "string",
    "description": "string",
    "position": -9007199254740000,
    "entries": [
      {
        "configId": "string",
        "modelId": "string"
      }
    ],
    "isDefault": true,
    "isFast": true,
    "thinkingBudget": -9007199254740000,
    "deleted": "string",
    "replacedBy": "string"
  }
]
```

<h3 id="getv1platform-model-tiersadmin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1platform-model-tiersadmin-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|string|true|none|none|
|» created|string|true|none|none|
|» updated|string|true|none|none|
|» platformId|string|true|none|none|
|» name|string|true|none|none|
|» emoji|string|true|none|none|
|» description|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» position|integer|true|none|none|
|» entries|[object]|true|none|none|
|» » configId|string|true|none|none|
|» » modelId|string|true|none|none|
|» isDefault|boolean|true|none|none|
|» isFast|boolean|true|none|none|
|» thinkingBudget|integer \| null|false|none|none|
|» » *anyOf*|integer|false|none|none|
|» » *anyOf*|null|false|none|none|
|» deleted|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» replacedBy|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/platform-model-tiers

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/platform-model-tiers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "emoji": "string",
    "description": "string",
    "entries": [
      {
        "configId": "string",
        "modelId": "string"
      }
    ],
    "thinkingBudget": -9007199254740000
  }'
```

`POST /v1/platform-model-tiers`

Create a model tier: a named main model with fallbacks that builders pick.

> Body parameter

```json
{
  "name": "string",
  "emoji": "string",
  "description": "string",
  "entries": [
    {
      "configId": "string",
      "modelId": "string"
    }
  ],
  "thinkingBudget": -9007199254740000
}
```

<h3 id="postv1platform-model-tiers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|none|
|» emoji|body|string|true|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» entries|body|[object]|true|none|
|» » configId|body|string|true|none|
|» » modelId|body|string|true|none|
|» thinkingBudget|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "name": "string",
  "emoji": "string",
  "description": "string",
  "position": -9007199254740000,
  "entries": [
    {
      "configId": "string",
      "modelId": "string"
    }
  ],
  "isDefault": true,
  "isFast": true,
  "thinkingBudget": -9007199254740000,
  "deleted": "string",
  "replacedBy": "string"
}
```

<h3 id="postv1platform-model-tiers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="postv1platform-model-tiers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|name|string|true|none|none|
|emoji|string|true|none|none|
|description|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|position|integer|true|none|none|
|entries|[object]|true|none|none|
|» configId|string|true|none|none|
|» modelId|string|true|none|none|
|isDefault|boolean|true|none|none|
|isFast|boolean|true|none|none|
|thinkingBudget|integer \| null|false|none|none|
|» *anyOf*|integer|false|none|none|
|» *anyOf*|null|false|none|none|
|deleted|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|replacedBy|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/platform-model-tiers/reorder

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/platform-model-tiers/reorder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "tierIds": [
      "string"
    ]
  }'
```

`POST /v1/platform-model-tiers/reorder`

Set the order tiers appear in for builders.

> Body parameter

```json
{
  "tierIds": [
    "string"
  ]
}
```

<h3 id="postv1platform-model-tiersreorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» tierIds|body|[string]|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "created": "string",
    "updated": "string",
    "platformId": "string",
    "name": "string",
    "emoji": "string",
    "description": "string",
    "position": -9007199254740000,
    "entries": [
      {
        "configId": "string",
        "modelId": "string"
      }
    ],
    "isDefault": true,
    "isFast": true,
    "thinkingBudget": -9007199254740000,
    "deleted": "string",
    "replacedBy": "string"
  }
]
```

<h3 id="postv1platform-model-tiersreorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="postv1platform-model-tiersreorder-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|string|true|none|none|
|» created|string|true|none|none|
|» updated|string|true|none|none|
|» platformId|string|true|none|none|
|» name|string|true|none|none|
|» emoji|string|true|none|none|
|» description|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» position|integer|true|none|none|
|» entries|[object]|true|none|none|
|» » configId|string|true|none|none|
|» » modelId|string|true|none|none|
|» isDefault|boolean|true|none|none|
|» isFast|boolean|true|none|none|
|» thinkingBudget|integer \| null|false|none|none|
|» » *anyOf*|integer|false|none|none|
|» » *anyOf*|null|false|none|none|
|» deleted|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» replacedBy|string \| null|false|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/platform-model-tiers/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/platform-model-tiers/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "emoji": "string",
    "description": "string",
    "entries": [
      {
        "configId": "string",
        "modelId": "string"
      }
    ],
    "thinkingBudget": -9007199254740000,
    "isDefault": true,
    "isFast": true
  }'
```

`POST /v1/platform-model-tiers/{id}`

Update a model tier: its name, models, fallbacks or default flags.

> Body parameter

```json
{
  "name": "string",
  "emoji": "string",
  "description": "string",
  "entries": [
    {
      "configId": "string",
      "modelId": "string"
    }
  ],
  "thinkingBudget": -9007199254740000,
  "isDefault": true,
  "isFast": true
}
```

<h3 id="postv1platform-model-tiersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|false|none|
|» name|body|string|false|none|
|» emoji|body|string|false|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» entries|body|[object]|false|none|
|» » configId|body|string|true|none|
|» » modelId|body|string|true|none|
|» thinkingBudget|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» isDefault|body|boolean|false|none|
|» isFast|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» isDefault|true|
|» isFast|true|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "name": "string",
  "emoji": "string",
  "description": "string",
  "position": -9007199254740000,
  "entries": [
    {
      "configId": "string",
      "modelId": "string"
    }
  ],
  "isDefault": true,
  "isFast": true,
  "thinkingBudget": -9007199254740000,
  "deleted": "string",
  "replacedBy": "string"
}
```

<h3 id="postv1platform-model-tiersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="postv1platform-model-tiersid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|name|string|true|none|none|
|emoji|string|true|none|none|
|description|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|position|integer|true|none|none|
|entries|[object]|true|none|none|
|» configId|string|true|none|none|
|» modelId|string|true|none|none|
|isDefault|boolean|true|none|none|
|isFast|boolean|true|none|none|
|thinkingBudget|integer \| null|false|none|none|
|» *anyOf*|integer|false|none|none|
|» *anyOf*|null|false|none|none|
|deleted|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|
|replacedBy|string \| null|false|none|none|
|» *anyOf*|string|false|none|none|
|» *anyOf*|null|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## delete/v1/platform-model-tiers/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/platform-model-tiers/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/platform-model-tiers/{id}`

Delete a model tier.

<h3 id="deletev1platform-model-tiersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|replacedBy|query|string|false|none|
|id|path|string|true|none|

<h3 id="deletev1platform-model-tiersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-ai-capabilities">ai-capabilities</h1>

## get/v1/ai-tools

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/ai-tools \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/ai-tools`

List the configured AI capabilities (web search, web scraping, image generation, embeddings). Secrets are never returned.

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "capability": "WEB_SEARCH",
    "provider": "tavily",
    "config": {
      "property1": null,
      "property2": null
    },
    "enabled": true,
    "hasApiKey": true
  }
]
```

<h3 id="getv1ai-tools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1ai-tools-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|string|true|none|none|
|» capability|string|true|none|none|
|» provider|string|true|none|none|
|» config|object \| null|true|none|none|
|» » *anyOf*|object|false|none|none|
|» » **additionalProperties**|object|false|none|none|
|» » *anyOf*|null|false|none|none|
|» enabled|boolean|true|none|none|
|» hasApiKey|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» capability|WEB_SEARCH|
|» capability|WEB_SCRAPING|
|» capability|IMAGE_GENERATION|
|» capability|EMBEDDINGS|
|» provider|tavily|
|» provider|firecrawl|
|» provider|apify|
|» provider|fal|
|» provider|ai_provider|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/ai-tools

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/ai-tools \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "capability": "WEB_SEARCH",
    "provider": "tavily",
    "auth": {
      "apiKey": "string"
    },
    "config": {
      "property1": null,
      "property2": null
    },
    "enabled": true
  }'
```

`POST /v1/ai-tools`

Set up an AI capability with a service API key or one of your AI provider keys.

> Body parameter

```json
{
  "capability": "WEB_SEARCH",
  "provider": "tavily",
  "auth": {
    "apiKey": "string"
  },
  "config": {
    "property1": null,
    "property2": null
  },
  "enabled": true
}
```

<h3 id="postv1ai-tools-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» capability|body|string|true|none|
|» provider|body|string|true|none|
|» auth|body|object|false|none|
|» » apiKey|body|string|true|none|
|» config|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» enabled|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» capability|WEB_SEARCH|
|» capability|WEB_SCRAPING|
|» capability|IMAGE_GENERATION|
|» capability|EMBEDDINGS|
|» provider|tavily|
|» provider|firecrawl|
|» provider|apify|
|» provider|fal|
|» provider|ai_provider|

<h3 id="postv1ai-tools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## post/v1/ai-tools/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/ai-tools/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "provider": "tavily",
    "auth": {
      "apiKey": "string"
    },
    "config": {
      "property1": null,
      "property2": null
    },
    "enabled": true
  }'
```

`POST /v1/ai-tools/{id}`

Update an AI capability, for example to turn it back on with its saved key.

> Body parameter

```json
{
  "provider": "tavily",
  "auth": {
    "apiKey": "string"
  },
  "config": {
    "property1": null,
    "property2": null
  },
  "enabled": true
}
```

<h3 id="postv1ai-toolsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|false|none|
|» provider|body|string|false|none|
|» auth|body|object|false|none|
|» » apiKey|body|string|true|none|
|» config|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» enabled|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» provider|tavily|
|» provider|firecrawl|
|» provider|apify|
|» provider|fal|
|» provider|ai_provider|

<h3 id="postv1ai-toolsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## delete/v1/ai-tools/{id}

> Code samples

```bash
curl https://cloud.activepieces.com/api/v1/ai-tools/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/ai-tools/{id}`

Reset an AI capability so it falls back to the default AI provider.

<h3 id="deletev1ai-toolsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="deletev1ai-toolsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="activepieces-documentation-ai-usage">ai-usage</h1>

## get/v1/ai-usage/overview

> Code samples

```bash
curl 'https://cloud.activepieces.com/api/v1/ai-usage/overview?period=1h&scope=all' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/ai-usage/overview`

AI spend and calls for a period, with totals, trend and top items.

<h3 id="getv1ai-usageoverview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|period|query|string|true|none|
|scope|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|1h|
|period|6h|
|period|12h|
|period|24h|
|period|7d|
|period|30d|
|period|90d|
|period|this-month|
|period|last-month|
|scope|all|
|scope|production|
|scope|testing|

> Example responses

> 200 Response

```json
{
  "history": {
    "trackingSince": "string",
    "hasAnyUsage": true,
    "coveredDays": 0,
    "periodDays": 0,
    "currentCoverage": 0,
    "comparable": true
  },
  "ranges": {
    "current": {
      "start": "string",
      "end": "string"
    },
    "previous": {
      "start": "string",
      "end": "string"
    }
  },
  "totals": {
    "spendUsd": 0,
    "previousSpendUsd": 0,
    "calls": 0,
    "previousCalls": 0,
    "tokens": 0,
    "previousTokens": 0,
    "cacheShare": 0,
    "managedCredits": 0
  },
  "series": [
    {
      "label": "string",
      "spendUsd": 0,
      "calls": 0,
      "tokens": 0,
      "previousSpendUsd": 0,
      "previousCalls": 0,
      "previousTokens": 0
    }
  ],
  "bySource": [
    {
      "source": "flow-steps",
      "spendUsd": 0
    }
  ],
  "top": {
    "property1": [
      {
        "dimension": "project",
        "id": "string",
        "name": "string",
        "parent": "string",
        "provider": "openai",
        "flowCount": 0,
        "agentCount": 0,
        "spendUsd": 0,
        "previousSpendUsd": 0,
        "calls": 0,
        "tokens": 0,
        "comparable": true,
        "sharedUsd": 0,
        "inputPrice": 0,
        "outputPrice": 0
      }
    ],
    "property2": [
      {
        "dimension": "project",
        "id": "string",
        "name": "string",
        "parent": "string",
        "provider": "openai",
        "flowCount": 0,
        "agentCount": 0,
        "spendUsd": 0,
        "previousSpendUsd": 0,
        "calls": 0,
        "tokens": 0,
        "comparable": true,
        "sharedUsd": 0,
        "inputPrice": 0,
        "outputPrice": 0
      }
    ]
  }
}
```

<h3 id="getv1ai-usageoverview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1ai-usageoverview-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|history|object|true|none|none|
|» trackingSince|string \| null|true|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» hasAnyUsage|boolean|true|none|none|
|» coveredDays|number|true|none|none|
|» periodDays|number|true|none|none|
|» currentCoverage|number|true|none|none|
|» comparable|boolean|true|none|none|
|ranges|object|true|none|none|
|» current|object|true|none|none|
|» » start|string|true|none|none|
|» » end|string|true|none|none|
|» previous|object|true|none|none|
|» » start|string|true|none|none|
|» » end|string|true|none|none|
|totals|object|true|none|none|
|» spendUsd|number|true|none|none|
|» previousSpendUsd|number|true|none|none|
|» calls|number|true|none|none|
|» previousCalls|number|true|none|none|
|» tokens|number|true|none|none|
|» previousTokens|number|true|none|none|
|» cacheShare|number|true|none|none|
|» managedCredits|number|true|none|none|
|series|[object]|true|none|none|
|» label|string|true|none|none|
|» spendUsd|number \| null|true|none|none|
|» » *anyOf*|number|false|none|none|
|» » *anyOf*|null|false|none|none|
|» calls|number \| null|true|none|none|
|» » *anyOf*|number|false|none|none|
|» » *anyOf*|null|false|none|none|
|» tokens|number \| null|true|none|none|
|» » *anyOf*|number|false|none|none|
|» » *anyOf*|null|false|none|none|
|» previousSpendUsd|number \| null|true|none|none|
|» » *anyOf*|number|false|none|none|
|» » *anyOf*|null|false|none|none|
|» previousCalls|number \| null|true|none|none|
|» » *anyOf*|number|false|none|none|
|» » *anyOf*|null|false|none|none|
|» previousTokens|number \| null|true|none|none|
|» » *anyOf*|number|false|none|none|
|» » *anyOf*|null|false|none|none|
|bySource|[object]|true|none|none|
|» source|string|true|none|none|
|» spendUsd|number|true|none|none|
|top|object|true|none|none|
|» **additionalProperties**|[object]|false|none|none|
|» » dimension|string|true|none|none|
|» » id|string|true|none|none|
|» » name|string \| null|true|none|none|
|» » » *anyOf*|string|false|none|none|
|» » » *anyOf*|null|false|none|none|
|» » parent|string|false|none|none|
|» » provider|string|false|none|none|
|» » flowCount|number|false|none|none|
|» » agentCount|number|false|none|none|
|» » spendUsd|number|true|none|none|
|» » previousSpendUsd|number|true|none|none|
|» » calls|number|true|none|none|
|» » tokens|number|true|none|none|
|» » comparable|boolean|true|none|none|
|» » sharedUsd|number|false|none|none|
|» » inputPrice|number|false|none|none|
|» » outputPrice|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» source|flow-steps|
|» source|agent-steps|
|» source|agents|
|» source|chat|
|» source|knowledge-base|
|» » dimension|project|
|» » dimension|flow|
|» » dimension|agent|
|» » dimension|user|
|» » dimension|key|
|» » dimension|model|
|» » provider|openai|
|» » provider|openrouter|
|» » provider|anthropic|
|» » provider|azure|
|» » provider|google|
|» » provider|activepieces|
|» » provider|cloudflare-gateway|
|» » provider|custom|
|» » provider|bedrock|
|» » provider|vertex|
|» » provider|mistral|
|» » provider|xai|
|» » provider|deepseek|
|» » provider|zai|
|» » provider|qwen|
|» » provider|minimax|
|» » provider|moonshot|
|» » provider|meta|
|» » provider|nvidia|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/ai-usage/items

> Code samples

```bash
curl 'https://cloud.activepieces.com/api/v1/ai-usage/items?period=1h&scope=all&dimension=project' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/ai-usage/items`

AI spend broken down by project, flow, agent, user, key or model.

<h3 id="getv1ai-usageitems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|period|query|string|true|none|
|scope|query|string|true|none|
|dimension|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|1h|
|period|6h|
|period|12h|
|period|24h|
|period|7d|
|period|30d|
|period|90d|
|period|this-month|
|period|last-month|
|scope|all|
|scope|production|
|scope|testing|
|dimension|project|
|dimension|flow|
|dimension|agent|
|dimension|user|
|dimension|key|
|dimension|model|

> Example responses

> 200 Response

```json
{
  "history": {
    "trackingSince": "string",
    "hasAnyUsage": true,
    "coveredDays": 0,
    "periodDays": 0,
    "currentCoverage": 0,
    "comparable": true
  },
  "ranges": {
    "current": {
      "start": "string",
      "end": "string"
    },
    "previous": {
      "start": "string",
      "end": "string"
    }
  },
  "items": [
    {
      "dimension": "project",
      "id": "string",
      "name": "string",
      "parent": "string",
      "provider": "openai",
      "flowCount": 0,
      "agentCount": 0,
      "spendUsd": 0,
      "previousSpendUsd": 0,
      "calls": 0,
      "tokens": 0,
      "comparable": true,
      "sharedUsd": 0,
      "inputPrice": 0,
      "outputPrice": 0
    }
  ],
  "count": 0,
  "itemsSpendUsd": 0,
  "totalSpendUsd": 0,
  "truncated": true
}
```

<h3 id="getv1ai-usageitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1ai-usageitems-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|history|object|true|none|none|
|» trackingSince|string \| null|true|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» hasAnyUsage|boolean|true|none|none|
|» coveredDays|number|true|none|none|
|» periodDays|number|true|none|none|
|» currentCoverage|number|true|none|none|
|» comparable|boolean|true|none|none|
|ranges|object|true|none|none|
|» current|object|true|none|none|
|» » start|string|true|none|none|
|» » end|string|true|none|none|
|» previous|object|true|none|none|
|» » start|string|true|none|none|
|» » end|string|true|none|none|
|items|[object]|true|none|none|
|» dimension|string|true|none|none|
|» id|string|true|none|none|
|» name|string \| null|true|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» parent|string|false|none|none|
|» provider|string|false|none|none|
|» flowCount|number|false|none|none|
|» agentCount|number|false|none|none|
|» spendUsd|number|true|none|none|
|» previousSpendUsd|number|true|none|none|
|» calls|number|true|none|none|
|» tokens|number|true|none|none|
|» comparable|boolean|true|none|none|
|» sharedUsd|number|false|none|none|
|» inputPrice|number|false|none|none|
|» outputPrice|number|false|none|none|
|count|number|true|none|none|
|itemsSpendUsd|number|true|none|none|
|totalSpendUsd|number|true|none|none|
|truncated|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» dimension|project|
|» dimension|flow|
|» dimension|agent|
|» dimension|user|
|» dimension|key|
|» dimension|model|
|» provider|openai|
|» provider|openrouter|
|» provider|anthropic|
|» provider|azure|
|» provider|google|
|» provider|activepieces|
|» provider|cloudflare-gateway|
|» provider|custom|
|» provider|bedrock|
|» provider|vertex|
|» provider|mistral|
|» provider|xai|
|» provider|deepseek|
|» provider|zai|
|» provider|qwen|
|» provider|minimax|
|» provider|moonshot|
|» provider|meta|
|» provider|nvidia|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get/v1/ai-usage/items/{dimension}/{id}

> Code samples

```bash
curl 'https://cloud.activepieces.com/api/v1/ai-usage/items/project/string?period=1h&scope=all' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/ai-usage/items/{dimension}/{id}`

AI spend for one project, flow, agent, user, key or model.

<h3 id="getv1ai-usageitemsdimensionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|period|query|string|true|none|
|scope|query|string|true|none|
|dimension|path|string|true|none|
|id|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|1h|
|period|6h|
|period|12h|
|period|24h|
|period|7d|
|period|30d|
|period|90d|
|period|this-month|
|period|last-month|
|scope|all|
|scope|production|
|scope|testing|
|dimension|project|
|dimension|flow|
|dimension|agent|
|dimension|user|
|dimension|key|
|dimension|model|

> Example responses

> 200 Response

```json
{
  "history": {
    "trackingSince": "string",
    "hasAnyUsage": true,
    "coveredDays": 0,
    "periodDays": 0,
    "currentCoverage": 0,
    "comparable": true
  },
  "ranges": {
    "current": {
      "start": "string",
      "end": "string"
    },
    "previous": {
      "start": "string",
      "end": "string"
    }
  },
  "item": {
    "dimension": "project",
    "id": "string",
    "name": "string",
    "parent": "string",
    "provider": "openai",
    "flowCount": 0,
    "agentCount": 0,
    "spendUsd": 0,
    "previousSpendUsd": 0,
    "calls": 0,
    "tokens": 0,
    "comparable": true,
    "sharedUsd": 0,
    "inputPrice": 0,
    "outputPrice": 0
  },
  "series": [
    {
      "label": "string",
      "spendUsd": 0,
      "calls": 0,
      "tokens": 0,
      "previousSpendUsd": 0,
      "previousCalls": 0,
      "previousTokens": 0
    }
  ],
  "related": {
    "property1": [
      {
        "dimension": "project",
        "id": "string",
        "name": "string",
        "parent": "string",
        "provider": "openai",
        "flowCount": 0,
        "agentCount": 0,
        "spendUsd": 0,
        "previousSpendUsd": 0,
        "calls": 0,
        "tokens": 0,
        "comparable": true,
        "sharedUsd": 0,
        "inputPrice": 0,
        "outputPrice": 0
      }
    ],
    "property2": [
      {
        "dimension": "project",
        "id": "string",
        "name": "string",
        "parent": "string",
        "provider": "openai",
        "flowCount": 0,
        "agentCount": 0,
        "spendUsd": 0,
        "previousSpendUsd": 0,
        "calls": 0,
        "tokens": 0,
        "comparable": true,
        "sharedUsd": 0,
        "inputPrice": 0,
        "outputPrice": 0
      }
    ]
  },
  "bySource": [
    {
      "source": "flow-steps",
      "spendUsd": 0
    }
  ],
  "runs": 0,
  "reportedUsd": 0,
  "estimatedUsd": 0
}
```

<h3 id="getv1ai-usageitemsdimensionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Response|Inline|

<h3 id="getv1ai-usageitemsdimensionid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|history|object|true|none|none|
|» trackingSince|string \| null|true|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» hasAnyUsage|boolean|true|none|none|
|» coveredDays|number|true|none|none|
|» periodDays|number|true|none|none|
|» currentCoverage|number|true|none|none|
|» comparable|boolean|true|none|none|
|ranges|object|true|none|none|
|» current|object|true|none|none|
|» » start|string|true|none|none|
|» » end|string|true|none|none|
|» previous|object|true|none|none|
|» » start|string|true|none|none|
|» » end|string|true|none|none|
|item|object|true|none|none|
|» dimension|string|true|none|none|
|» id|string|true|none|none|
|» name|string \| null|true|none|none|
|» » *anyOf*|string|false|none|none|
|» » *anyOf*|null|false|none|none|
|» parent|string|false|none|none|
|» provider|string|false|none|none|
|» flowCount|number|false|none|none|
|» agentCount|number|false|none|none|
|» spendUsd|number|true|none|none|
|» previousSpendUsd|number|true|none|none|
|» calls|number|true|none|none|
|» tokens|number|true|none|none|
|» comparable|boolean|true|none|none|
|» sharedUsd|number|false|none|none|
|» inputPrice|number|false|none|none|
|» outputPrice|number|false|none|none|
|series|[object]|true|none|none|
|» label|string|true|none|none|
|» spendUsd|number \| null|true|none|none|
|» » *anyOf*|number|false|none|none|
|» » *anyOf*|null|false|none|none|
|» calls|number \| null|true|none|none|
|» » *anyOf*|number|false|none|none|
|» » *anyOf*|null|false|none|none|
|» tokens|number \| null|true|none|none|
|» » *anyOf*|number|false|none|none|
|» » *anyOf*|null|false|none|none|
|» previousSpendUsd|number \| null|true|none|none|
|» » *anyOf*|number|false|none|none|
|» » *anyOf*|null|false|none|none|
|» previousCalls|number \| null|true|none|none|
|» » *anyOf*|number|false|none|none|
|» » *anyOf*|null|false|none|none|
|» previousTokens|number \| null|true|none|none|
|» » *anyOf*|number|false|none|none|
|» » *anyOf*|null|false|none|none|
|related|object|true|none|none|
|» **additionalProperties**|[object]|false|none|none|
|» » dimension|string|true|none|none|
|» » id|string|true|none|none|
|» » name|string \| null|true|none|none|
|» » » *anyOf*|string|false|none|none|
|» » » *anyOf*|null|false|none|none|
|» » parent|string|false|none|none|
|» » provider|string|false|none|none|
|» » flowCount|number|false|none|none|
|» » agentCount|number|false|none|none|
|» » spendUsd|number|true|none|none|
|» » previousSpendUsd|number|true|none|none|
|» » calls|number|true|none|none|
|» » tokens|number|true|none|none|
|» » comparable|boolean|true|none|none|
|» » sharedUsd|number|false|none|none|
|» » inputPrice|number|false|none|none|
|» » outputPrice|number|false|none|none|
|bySource|[object]|false|none|none|
|» source|string|true|none|none|
|» spendUsd|number|true|none|none|
|runs|number|false|none|none|
|reportedUsd|number|false|none|none|
|estimatedUsd|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» dimension|project|
|» dimension|flow|
|» dimension|agent|
|» dimension|user|
|» dimension|key|
|» dimension|model|
|» provider|openai|
|» provider|openrouter|
|» provider|anthropic|
|» provider|azure|
|» provider|google|
|» provider|activepieces|
|» provider|cloudflare-gateway|
|» provider|custom|
|» provider|bedrock|
|» provider|vertex|
|» provider|mistral|
|» provider|xai|
|» provider|deepseek|
|» provider|zai|
|» provider|qwen|
|» provider|minimax|
|» provider|moonshot|
|» provider|meta|
|» provider|nvidia|
|» » dimension|project|
|» » dimension|flow|
|» » dimension|agent|
|» » dimension|user|
|» » dimension|key|
|» » dimension|model|
|» » provider|openai|
|» » provider|openrouter|
|» » provider|anthropic|
|» » provider|azure|
|» » provider|google|
|» » provider|activepieces|
|» » provider|cloudflare-gateway|
|» » provider|custom|
|» » provider|bedrock|
|» » provider|vertex|
|» » provider|mistral|
|» » provider|xai|
|» » provider|deepseek|
|» » provider|zai|
|» » provider|qwen|
|» » provider|minimax|
|» » provider|moonshot|
|» » provider|meta|
|» » provider|nvidia|
|» source|flow-steps|
|» source|agent-steps|
|» source|agents|
|» source|chat|
|» source|knowledge-base|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

# Schemas

<h2 id="tocS_global-connection">global-connection</h2>
<!-- backwards compatibility -->
<a id="schemaglobal-connection"></a>
<a id="schema_global-connection"></a>
<a id="tocSglobal-connection"></a>
<a id="tocsglobal-connection"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "externalId": "string",
  "displayName": "string",
  "type": "OAUTH2",
  "pieceName": "string",
  "projectIds": [
    "string"
  ],
  "platformId": "string",
  "scope": "PROJECT",
  "status": "ACTIVE",
  "ownerId": "string",
  "owner": {
    "id": "string",
    "email": "string",
    "firstName": "string",
    "status": "ACTIVE",
    "externalId": "string",
    "platformId": "string",
    "platformRole": "ADMIN",
    "lastName": "string",
    "created": "string",
    "updated": "string",
    "lastActiveDate": "string",
    "imageUrl": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "flowIds": [
    "string"
  ],
  "pieceVersion": "string",
  "preSelectForNewProjects": true,
  "usingSecretManager": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|externalId|string|true|none|none|
|displayName|string|true|none|none|
|type|string|true|none|none|
|pieceName|string|true|none|none|
|projectIds|[string]|true|none|none|
|platformId|string \| null|false|none|none|
|scope|string|true|none|none|
|status|string|true|none|none|
|ownerId|string \| null|false|none|none|
|owner|[user](#schemauser) \| null|false|none|none|
|metadata|object \| null|false|none|none|
|flowIds|[string] \| null|false|none|none|
|pieceVersion|string|true|none|none|
|preSelectForNewProjects|boolean|true|none|none|
|usingSecretManager|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OAUTH2|
|type|PLATFORM_OAUTH2|
|type|CLOUD_OAUTH2|
|type|SECRET_TEXT|
|type|BASIC_AUTH|
|type|CUSTOM_AUTH|
|type|NO_AUTH|
|scope|PROJECT|
|scope|PLATFORM|
|status|ACTIVE|
|status|MISSING|
|status|ERROR|

<h2 id="tocS_flow.createdInput">flow.createdInput</h2>
<!-- backwards compatibility -->
<a id="schemaflow.createdinput"></a>
<a id="schema_flow.createdInput"></a>
<a id="tocSflow.createdinput"></a>
<a id="tocsflow.createdinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.created",
  "data": {
    "flow": {
      "id": "string",
      "externalId": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string",
      "externalId": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.updatedInput">flow.updatedInput</h2>
<!-- backwards compatibility -->
<a id="schemaflow.updatedinput"></a>
<a id="schema_flow.updatedInput"></a>
<a id="tocSflow.updatedinput"></a>
<a id="tocsflow.updatedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.updated",
  "data": {
    "flow": {
      "id": "string",
      "externalId": "string",
      "created": "string",
      "updated": "string"
    },
    "flowVersion": {
      "id": "string",
      "displayName": "string",
      "flowId": "string",
      "created": "string",
      "updated": "string"
    },
    "request": {
      "type": "MOVE_ACTION",
      "request": {
        "name": "string",
        "newParentStep": "string",
        "stepLocationRelativeToNewParent": "AFTER",
        "branchIndex": 0
      }
    },
    "reason": "string",
    "project": {
      "displayName": "string",
      "externalId": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.deletedInput">flow.deletedInput</h2>
<!-- backwards compatibility -->
<a id="schemaflow.deletedinput"></a>
<a id="schema_flow.deletedInput"></a>
<a id="tocSflow.deletedinput"></a>
<a id="tocsflow.deletedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.deleted",
  "data": {
    "flow": {
      "id": "string",
      "externalId": "string",
      "created": "string",
      "updated": "string"
    },
    "flowVersion": {
      "id": "string",
      "displayName": "string",
      "flowId": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string",
      "externalId": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.publishedInput">flow.publishedInput</h2>
<!-- backwards compatibility -->
<a id="schemaflow.publishedinput"></a>
<a id="schema_flow.publishedInput"></a>
<a id="tocSflow.publishedinput"></a>
<a id="tocsflow.publishedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.published",
  "data": {
    "flow": {
      "id": "string",
      "externalId": "string",
      "created": "string",
      "updated": "string"
    },
    "flowVersion": {
      "id": "string",
      "displayName": "string",
      "flowId": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string",
      "externalId": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.activatedInput">flow.activatedInput</h2>
<!-- backwards compatibility -->
<a id="schemaflow.activatedinput"></a>
<a id="schema_flow.activatedInput"></a>
<a id="tocSflow.activatedinput"></a>
<a id="tocsflow.activatedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.activated",
  "data": {
    "flow": {
      "id": "string",
      "externalId": "string",
      "created": "string",
      "updated": "string"
    },
    "flowVersion": {
      "id": "string",
      "displayName": "string",
      "flowId": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string",
      "externalId": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.deactivatedInput">flow.deactivatedInput</h2>
<!-- backwards compatibility -->
<a id="schemaflow.deactivatedinput"></a>
<a id="schema_flow.deactivatedInput"></a>
<a id="tocSflow.deactivatedinput"></a>
<a id="tocsflow.deactivatedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.deactivated",
  "data": {
    "flow": {
      "id": "string",
      "externalId": "string",
      "created": "string",
      "updated": "string"
    },
    "flowVersion": {
      "id": "string",
      "displayName": "string",
      "flowId": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string",
      "externalId": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_connection.upsertedInput">connection.upsertedInput</h2>
<!-- backwards compatibility -->
<a id="schemaconnection.upsertedinput"></a>
<a id="schema_connection.upsertedInput"></a>
<a id="tocSconnection.upsertedinput"></a>
<a id="tocsconnection.upsertedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "connection.upserted",
  "data": {
    "connection": {
      "displayName": "string",
      "externalId": "string",
      "pieceName": "string",
      "status": "string",
      "type": "string",
      "id": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_connection.deletedInput">connection.deletedInput</h2>
<!-- backwards compatibility -->
<a id="schemaconnection.deletedinput"></a>
<a id="schema_connection.deletedInput"></a>
<a id="tocSconnection.deletedinput"></a>
<a id="tocsconnection.deletedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "connection.deleted",
  "data": {
    "connection": {
      "displayName": "string",
      "externalId": "string",
      "pieceName": "string",
      "status": "string",
      "type": "string",
      "id": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_folder.createdInput">folder.createdInput</h2>
<!-- backwards compatibility -->
<a id="schemafolder.createdinput"></a>
<a id="schema_folder.createdInput"></a>
<a id="tocSfolder.createdinput"></a>
<a id="tocsfolder.createdinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "folder.created",
  "data": {
    "folder": {
      "id": "string",
      "displayName": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_folder.updatedInput">folder.updatedInput</h2>
<!-- backwards compatibility -->
<a id="schemafolder.updatedinput"></a>
<a id="schema_folder.updatedInput"></a>
<a id="tocSfolder.updatedinput"></a>
<a id="tocsfolder.updatedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "folder.updated",
  "data": {
    "folder": {
      "id": "string",
      "displayName": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_folder.deletedInput">folder.deletedInput</h2>
<!-- backwards compatibility -->
<a id="schemafolder.deletedinput"></a>
<a id="schema_folder.deletedInput"></a>
<a id="tocSfolder.deletedinput"></a>
<a id="tocsfolder.deletedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "folder.deleted",
  "data": {
    "folder": {
      "id": "string",
      "displayName": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.run.startedInput">flow.run.startedInput</h2>
<!-- backwards compatibility -->
<a id="schemaflow.run.startedinput"></a>
<a id="schema_flow.run.startedInput"></a>
<a id="tocSflow.run.startedinput"></a>
<a id="tocsflow.run.startedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.run.started",
  "data": {
    "flowRun": {
      "id": "string",
      "startTime": "string",
      "finishTime": "string",
      "duration": 0,
      "triggeredBy": "string",
      "environment": "string",
      "flowId": "string",
      "flowVersionId": "string",
      "stepNameToTest": "string",
      "flowDisplayName": "string",
      "status": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.run.finishedInput">flow.run.finishedInput</h2>
<!-- backwards compatibility -->
<a id="schemaflow.run.finishedinput"></a>
<a id="schema_flow.run.finishedInput"></a>
<a id="tocSflow.run.finishedinput"></a>
<a id="tocsflow.run.finishedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.run.finished",
  "data": {
    "flowRun": {
      "id": "string",
      "startTime": "string",
      "finishTime": "string",
      "duration": 0,
      "triggeredBy": "string",
      "environment": "string",
      "flowId": "string",
      "flowVersionId": "string",
      "stepNameToTest": "string",
      "flowDisplayName": "string",
      "status": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.run.retriedInput">flow.run.retriedInput</h2>
<!-- backwards compatibility -->
<a id="schemaflow.run.retriedinput"></a>
<a id="schema_flow.run.retriedInput"></a>
<a id="tocSflow.run.retriedinput"></a>
<a id="tocsflow.run.retriedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.run.retried",
  "data": {
    "flowRun": {
      "id": "string",
      "startTime": "string",
      "finishTime": "string",
      "duration": 0,
      "triggeredBy": "string",
      "environment": "string",
      "flowId": "string",
      "flowVersionId": "string",
      "stepNameToTest": "string",
      "flowDisplayName": "string",
      "status": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_agent.action.executedInput">agent.action.executedInput</h2>
<!-- backwards compatibility -->
<a id="schemaagent.action.executedinput"></a>
<a id="schema_agent.action.executedInput"></a>
<a id="tocSagent.action.executedinput"></a>
<a id="tocsagent.action.executedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "agent.action.executed",
  "data": {
    "source": "CHAT",
    "conversation": {
      "id": "string",
      "source": "CHAT"
    },
    "agent": {
      "id": "string",
      "displayName": "string"
    },
    "flow": {
      "id": "string",
      "runId": "string"
    },
    "action": {
      "kind": "PIECE",
      "pieceName": "string",
      "pieceDisplayName": "string",
      "actionName": "string",
      "displayName": "string"
    },
    "outcome": "SUCCEEDED",
    "connection": {
      "externalId": "string",
      "label": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_user.signed.upInput">user.signed.upInput</h2>
<!-- backwards compatibility -->
<a id="schemauser.signed.upinput"></a>
<a id="schema_user.signed.upInput"></a>
<a id="tocSuser.signed.upinput"></a>
<a id="tocsuser.signed.upinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "user.signed.up",
  "data": {
    "source": "credentials",
    "method": "EMAIL",
    "user": {
      "email": "string",
      "id": "string",
      "firstName": "string",
      "lastName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_user.signed.inInput">user.signed.inInput</h2>
<!-- backwards compatibility -->
<a id="schemauser.signed.ininput"></a>
<a id="schema_user.signed.inInput"></a>
<a id="tocSuser.signed.ininput"></a>
<a id="tocsuser.signed.ininput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "user.signed.in",
  "data": {
    "user": {
      "email": "string",
      "id": "string",
      "firstName": "string",
      "lastName": "string"
    },
    "method": "EMAIL"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_user.password.resetInput">user.password.resetInput</h2>
<!-- backwards compatibility -->
<a id="schemauser.password.resetinput"></a>
<a id="schema_user.password.resetInput"></a>
<a id="tocSuser.password.resetinput"></a>
<a id="tocsuser.password.resetinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "user.password.reset",
  "data": {
    "user": {
      "email": "string",
      "id": "string",
      "firstName": "string",
      "lastName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_user.invitation.sentInput">user.invitation.sentInput</h2>
<!-- backwards compatibility -->
<a id="schemauser.invitation.sentinput"></a>
<a id="schema_user.invitation.sentInput"></a>
<a id="tocSuser.invitation.sentinput"></a>
<a id="tocsuser.invitation.sentinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "user.invitation.sent",
  "data": {
    "invitation": {
      "id": "string",
      "email": "string",
      "type": "PLATFORM",
      "platformRole": "ADMIN",
      "projectId": "string"
    },
    "projectRole": {
      "id": "string",
      "name": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_user.invitation.acceptedInput">user.invitation.acceptedInput</h2>
<!-- backwards compatibility -->
<a id="schemauser.invitation.acceptedinput"></a>
<a id="schema_user.invitation.acceptedInput"></a>
<a id="tocSuser.invitation.acceptedinput"></a>
<a id="tocsuser.invitation.acceptedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "user.invitation.accepted",
  "data": {
    "invitation": {
      "id": "string",
      "email": "string",
      "type": "PLATFORM",
      "platformRole": "ADMIN",
      "projectId": "string"
    },
    "projectRole": {
      "id": "string",
      "name": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_user.invitation.deletedInput">user.invitation.deletedInput</h2>
<!-- backwards compatibility -->
<a id="schemauser.invitation.deletedinput"></a>
<a id="schema_user.invitation.deletedInput"></a>
<a id="tocSuser.invitation.deletedinput"></a>
<a id="tocsuser.invitation.deletedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "user.invitation.deleted",
  "data": {
    "invitation": {
      "id": "string",
      "email": "string",
      "type": "PLATFORM",
      "platformRole": "ADMIN",
      "projectId": "string"
    },
    "projectRole": {
      "id": "string",
      "name": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_user.email.verifiedInput">user.email.verifiedInput</h2>
<!-- backwards compatibility -->
<a id="schemauser.email.verifiedinput"></a>
<a id="schema_user.email.verifiedInput"></a>
<a id="tocSuser.email.verifiedinput"></a>
<a id="tocsuser.email.verifiedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "user.email.verified",
  "data": {
    "user": {
      "email": "string",
      "id": "string",
      "firstName": "string",
      "lastName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_signing.key.createdInput">signing.key.createdInput</h2>
<!-- backwards compatibility -->
<a id="schemasigning.key.createdinput"></a>
<a id="schema_signing.key.createdInput"></a>
<a id="tocSsigning.key.createdinput"></a>
<a id="tocssigning.key.createdinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "signing.key.created",
  "data": {
    "signingKey": {
      "id": "string",
      "created": "string",
      "updated": "string",
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_project.role.createdInput">project.role.createdInput</h2>
<!-- backwards compatibility -->
<a id="schemaproject.role.createdinput"></a>
<a id="schema_project.role.createdInput"></a>
<a id="tocSproject.role.createdinput"></a>
<a id="tocsproject.role.createdinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "project.role.created",
  "data": {
    "projectRole": {
      "id": "string",
      "created": "string",
      "updated": "string",
      "name": "string",
      "permissions": [
        "string"
      ],
      "platformId": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_project.release.createdInput">project.release.createdInput</h2>
<!-- backwards compatibility -->
<a id="schemaproject.release.createdinput"></a>
<a id="schema_project.release.createdInput"></a>
<a id="tocSproject.release.createdinput"></a>
<a id="tocsproject.release.createdinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "project.release.created",
  "data": {
    "release": {
      "name": "string",
      "description": "string",
      "type": "string",
      "projectId": "string",
      "importedByUser": {
        "id": "string",
        "email": "string",
        "firstName": "string",
        "status": "string",
        "externalId": "string",
        "platformId": "string",
        "platformRole": "string",
        "lastName": "string",
        "created": "string",
        "updated": "string",
        "lastActiveDate": "string",
        "imageUrl": "string"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_templateInput">templateInput</h2>
<!-- backwards compatibility -->
<a id="schematemplateinput"></a>
<a id="schema_templateInput"></a>
<a id="tocStemplateinput"></a>
<a id="tocstemplateinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "name": "string",
  "type": "OFFICIAL",
  "summary": "string",
  "description": "string",
  "tags": [
    {
      "title": "string",
      "color": "string",
      "icon": "string"
    }
  ],
  "blogUrl": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "author": "string",
  "categories": [
    "string"
  ],
  "pieces": [
    "string"
  ],
  "platformId": "string",
  "flows": [
    {
      "displayName": "string",
      "trigger": {
        "name": "string",
        "valid": true,
        "displayName": "string",
        "nextAction": null,
        "lastUpdatedDate": "string",
        "type": "PIECE_TRIGGER",
        "settings": {
          "sampleData": {
            "sampleDataFileId": "string",
            "sampleDataInputFileId": "string",
            "lastTestDate": "string"
          },
          "propertySettings": {
            "property1": {
              "type": "MANUAL",
              "schema": null
            },
            "property2": {
              "type": "MANUAL",
              "schema": null
            }
          },
          "customLogoUrl": "string",
          "pieceName": "string",
          "pieceVersion": "string",
          "triggerName": "string",
          "input": {
            "property1": null,
            "property2": null
          }
        }
      },
      "valid": true,
      "schemaVersion": "string",
      "description": "string",
      "notes": [
        {
          "id": "string",
          "content": "string",
          "ownerId": "string",
          "color": "orange",
          "position": {
            "x": 0,
            "y": 0
          },
          "size": {
            "width": 0,
            "height": 0
          },
          "createdAt": "string",
          "updatedAt": "string"
        }
      ]
    }
  ],
  "tables": [
    {
      "name": "string",
      "externalId": "string",
      "fields": [
        {
          "name": "string",
          "type": "string",
          "data": {
            "options": [
              {
                "value": "string"
              }
            ]
          },
          "externalId": "string"
        }
      ],
      "status": "string",
      "trigger": "string",
      "data": {
        "type": "CSV",
        "rows": [
          [
            {
              "fieldId": "string",
              "value": "string"
            }
          ]
        ]
      }
    }
  ],
  "status": "PUBLISHED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|name|string|true|none|none|
|type|string|true|none|none|
|summary|string|true|none|none|
|description|string|true|none|none|
|tags|[object]|true|none|none|
|blogUrl|string \| null|false|none|none|
|metadata|object \| null|false|none|none|
|author|string|true|none|none|
|categories|[string]|true|none|none|
|pieces|[string]|true|none|none|
|platformId|string \| null|false|none|none|
|flows|[object]|false|none|none|
|tables|[object]|false|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OFFICIAL|
|type|SHARED|
|type|CUSTOM|
|status|PUBLISHED|
|status|ARCHIVED|

<h2 id="tocS_folderInput">folderInput</h2>
<!-- backwards compatibility -->
<a id="schemafolderinput"></a>
<a id="schema_folderInput"></a>
<a id="tocSfolderinput"></a>
<a id="tocsfolderinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "projectId": "string",
  "displayName": "string",
  "displayOrder": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|projectId|string|true|none|none|
|displayName|string|true|none|none|
|displayOrder|number|true|none|none|

<h2 id="tocS_userInput">userInput</h2>
<!-- backwards compatibility -->
<a id="schemauserinput"></a>
<a id="schema_userInput"></a>
<a id="tocSuserinput"></a>
<a id="tocsuserinput"></a>

```json
{
  "id": "string",
  "email": "string",
  "firstName": "string",
  "status": "ACTIVE",
  "externalId": "string",
  "platformId": "string",
  "platformRole": "ADMIN",
  "lastName": "string",
  "created": "string",
  "updated": "string",
  "lastActiveDate": "string",
  "imageUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|email|string|true|none|none|
|firstName|string|true|none|none|
|status|string|true|none|none|
|externalId|string \| null|false|none|none|
|platformId|string \| null|false|none|none|
|platformRole|string|true|none|none|
|lastName|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|lastActiveDate|string \| null|false|none|none|
|imageUrl|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|platformRole|ADMIN|
|platformRole|MEMBER|
|platformRole|OPERATOR|

<h2 id="tocS_user-invitationInput">user-invitationInput</h2>
<!-- backwards compatibility -->
<a id="schemauser-invitationinput"></a>
<a id="schema_user-invitationInput"></a>
<a id="tocSuser-invitationinput"></a>
<a id="tocsuser-invitationinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "email": "string",
  "status": "PENDING",
  "type": "PLATFORM",
  "platformId": "string",
  "platformRole": "ADMIN",
  "projectId": "string",
  "projectRoleId": "string",
  "projectRole": {
    "id": "string",
    "created": "string",
    "updated": "string",
    "name": "string",
    "permissions": [
      "string"
    ],
    "platformId": "string",
    "type": "string",
    "userCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|email|string|true|none|none|
|status|string|true|none|none|
|type|string|true|none|none|
|platformId|string|true|none|none|
|platformRole|string \| null|false|none|none|
|projectId|string \| null|false|none|none|
|projectRoleId|string \| null|false|none|none|
|projectRole|object \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PENDING|
|status|ACCEPTED|
|type|PLATFORM|
|type|PROJECT|

<h2 id="tocS_project-memberInput">project-memberInput</h2>
<!-- backwards compatibility -->
<a id="schemaproject-memberinput"></a>
<a id="schema_project-memberInput"></a>
<a id="tocSproject-memberinput"></a>
<a id="tocsproject-memberinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "userId": "string",
  "projectId": "string",
  "projectRoleId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|userId|string|true|none|none|
|projectId|string|true|none|none|
|projectRoleId|string|true|none|none|

<h2 id="tocS_projectInput">projectInput</h2>
<!-- backwards compatibility -->
<a id="schemaprojectinput"></a>
<a id="schema_projectInput"></a>
<a id="tocSprojectinput"></a>
<a id="tocsprojectinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "ownerId": "string",
  "displayName": "string",
  "platformId": "string",
  "maxConcurrentJobs": 0,
  "type": "TEAM",
  "icon": {
    "color": "RED"
  },
  "externalId": "string",
  "releasesEnabled": true,
  "metadata": {
    "property1": null,
    "property2": null
  },
  "poolId": "string",
  "plan": {
    "id": "string",
    "created": "string",
    "updated": "string",
    "projectId": "string",
    "locked": false,
    "name": "string",
    "piecesFilterType": "NONE",
    "pieces": [
      "string"
    ]
  },
  "analytics": {
    "totalUsers": 0,
    "activeUsers": 0,
    "totalFlows": 0,
    "activeFlows": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|ownerId|string|true|none|none|
|displayName|string|true|none|none|
|platformId|string|true|none|none|
|maxConcurrentJobs|number \| null|false|none|none|
|type|string|true|none|none|
|icon|object|true|none|none|
|externalId|string \| null|false|none|none|
|releasesEnabled|boolean|true|none|none|
|metadata|object \| null|false|none|none|
|poolId|string \| null|false|none|none|
|plan|object|true|none|none|
|analytics|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TEAM|
|type|PERSONAL|

<h2 id="tocS_flowInput">flowInput</h2>
<!-- backwards compatibility -->
<a id="schemaflowinput"></a>
<a id="schema_flowInput"></a>
<a id="tocSflowinput"></a>
<a id="tocsflowinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "projectId": "string",
  "externalId": "string",
  "ownerId": "string",
  "folderId": "string",
  "status": "ENABLED",
  "publishedVersionId": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "operationStatus": "NONE",
  "timeSavedPerRun": 0,
  "templateId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|projectId|string|true|none|none|
|externalId|string|true|none|none|
|ownerId|string \| null|false|none|none|
|folderId|string \| null|false|none|none|
|status|string|true|none|none|
|publishedVersionId|string \| null|false|none|none|
|metadata|object \| null|false|none|none|
|operationStatus|string|true|none|none|
|timeSavedPerRun|number \| null|false|none|none|
|templateId|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ENABLED|
|status|DISABLED|
|operationStatus|NONE|
|operationStatus|DELETING|
|operationStatus|ENABLING|
|operationStatus|DISABLING|

<h2 id="tocS_flow-runInput">flow-runInput</h2>
<!-- backwards compatibility -->
<a id="schemaflow-runinput"></a>
<a id="schema_flow-runInput"></a>
<a id="tocSflow-runinput"></a>
<a id="tocsflow-runinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "projectId": "string",
  "flowId": "string",
  "parentRunId": "string",
  "failParentOnFailure": true,
  "triggeredBy": "string",
  "tags": [
    "string"
  ],
  "flowVersionId": "string",
  "flowVersion": {
    "displayName": "string"
  },
  "logsFileId": "string",
  "status": "FAILED",
  "startTime": "string",
  "finishTime": "string",
  "environment": "PRODUCTION",
  "steps": {
    "property1": null,
    "property2": null
  },
  "failedStep": {
    "name": "string",
    "displayName": "string"
  },
  "stepNameToTest": "string",
  "archivedAt": "string",
  "stepsCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|projectId|string|true|none|none|
|flowId|string|true|none|none|
|parentRunId|string|false|none|none|
|failParentOnFailure|boolean|true|none|none|
|triggeredBy|string|false|none|none|
|tags|[string]|false|none|none|
|flowVersionId|string|true|none|none|
|flowVersion|object|false|none|none|
|logsFileId|string \| null|false|none|none|
|status|string|true|none|none|
|startTime|string \| null|false|none|none|
|finishTime|string \| null|false|none|none|
|environment|string|true|none|none|
|steps|object \| null|false|none|none|
|failedStep|object|false|none|none|
|stepNameToTest|string|false|none|none|
|archivedAt|string \| null|false|none|none|
|stepsCount|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|FAILED|
|status|QUOTA_EXCEEDED|
|status|INTERNAL_ERROR|
|status|PAUSED|
|status|QUEUED|
|status|RUNNING|
|status|SUCCEEDED|
|status|MEMORY_LIMIT_EXCEEDED|
|status|TIMEOUT|
|status|CANCELED|
|status|LOG_SIZE_EXCEEDED|
|environment|PRODUCTION|
|environment|TESTING|

<h2 id="tocS_app-connectionInput">app-connectionInput</h2>
<!-- backwards compatibility -->
<a id="schemaapp-connectioninput"></a>
<a id="schema_app-connectionInput"></a>
<a id="tocSapp-connectioninput"></a>
<a id="tocsapp-connectioninput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "externalId": "string",
  "displayName": "string",
  "type": "OAUTH2",
  "pieceName": "string",
  "projectIds": [
    "string"
  ],
  "platformId": "string",
  "scope": "PROJECT",
  "status": "ACTIVE",
  "ownerId": "string",
  "owner": {
    "id": "string",
    "email": "string",
    "firstName": "string",
    "status": "ACTIVE",
    "externalId": "string",
    "platformId": "string",
    "platformRole": "ADMIN",
    "lastName": "string",
    "created": "string",
    "updated": "string",
    "lastActiveDate": "string",
    "imageUrl": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "flowIds": [
    "string"
  ],
  "pieceVersion": "string",
  "preSelectForNewProjects": true,
  "usingSecretManager": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|externalId|string|true|none|none|
|displayName|string|true|none|none|
|type|string|true|none|none|
|pieceName|string|true|none|none|
|projectIds|[string]|true|none|none|
|platformId|string \| null|false|none|none|
|scope|string|true|none|none|
|status|string|true|none|none|
|ownerId|string \| null|false|none|none|
|owner|[userInput](#schemauserinput) \| null|false|none|none|
|metadata|object \| null|false|none|none|
|flowIds|[string] \| null|false|none|none|
|pieceVersion|string|true|none|none|
|preSelectForNewProjects|boolean|true|none|none|
|usingSecretManager|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OAUTH2|
|type|PLATFORM_OAUTH2|
|type|CLOUD_OAUTH2|
|type|SECRET_TEXT|
|type|BASIC_AUTH|
|type|CUSTOM_AUTH|
|type|NO_AUTH|
|scope|PROJECT|
|scope|PLATFORM|
|status|ACTIVE|
|status|MISSING|
|status|ERROR|

<h2 id="tocS_pieceInput">pieceInput</h2>
<!-- backwards compatibility -->
<a id="schemapieceinput"></a>
<a id="schema_pieceInput"></a>
<a id="tocSpieceinput"></a>
<a id="tocspieceinput"></a>

```json
{
  "id": "string",
  "name": "string",
  "displayName": "string",
  "logoUrl": "string",
  "description": "string",
  "authors": [
    "string"
  ],
  "platformId": "string",
  "directoryPath": "string",
  "auth": {
    "displayName": "string",
    "description": "string",
    "username": {
      "displayName": "string",
      "description": "string"
    },
    "password": {
      "displayName": "string",
      "description": "string"
    },
    "type": "BASIC_AUTH",
    "required": true,
    "defaultValue": null
  },
  "version": "string",
  "categories": [
    "ARTIFICIAL_INTELLIGENCE"
  ],
  "minimumSupportedRelease": "string",
  "maximumSupportedRelease": "string",
  "i18n": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "actions": {
    "property1": {
      "name": "string",
      "displayName": "string",
      "description": "string",
      "props": {
        "property1": {
          "displayName": "string",
          "description": "string",
          "type": "SHORT_TEXT",
          "required": true,
          "defaultValue": null
        },
        "property2": {
          "displayName": "string",
          "description": "string",
          "type": "SHORT_TEXT",
          "required": true,
          "defaultValue": null
        }
      },
      "requireAuth": true,
      "errorHandlingOptions": {
        "retryOnFailure": {
          "defaultValue": true,
          "hide": true
        },
        "continueOnFailure": {
          "defaultValue": true,
          "hide": true
        }
      }
    },
    "property2": {
      "name": "string",
      "displayName": "string",
      "description": "string",
      "props": {
        "property1": {
          "displayName": "string",
          "description": "string",
          "type": "SHORT_TEXT",
          "required": true,
          "defaultValue": null
        },
        "property2": {
          "displayName": "string",
          "description": "string",
          "type": "SHORT_TEXT",
          "required": true,
          "defaultValue": null
        }
      },
      "requireAuth": true,
      "errorHandlingOptions": {
        "retryOnFailure": {
          "defaultValue": true,
          "hide": true
        },
        "continueOnFailure": {
          "defaultValue": true,
          "hide": true
        }
      }
    }
  },
  "triggers": {
    "property1": {
      "name": "string",
      "displayName": "string",
      "description": "string",
      "props": {
        "property1": {
          "displayName": "string",
          "description": "string",
          "type": "SHORT_TEXT",
          "required": true,
          "defaultValue": null
        },
        "property2": {
          "displayName": "string",
          "description": "string",
          "type": "SHORT_TEXT",
          "required": true,
          "defaultValue": null
        }
      },
      "errorHandlingOptions": {
        "retryOnFailure": {
          "defaultValue": true,
          "hide": true
        },
        "continueOnFailure": {
          "defaultValue": true,
          "hide": true
        }
      },
      "type": "POLLING",
      "sampleData": null,
      "handshakeConfiguration": null,
      "renewConfiguration": {
        "strategy": "CRON",
        "cronExpression": "string"
      },
      "testStrategy": "SIMULATION"
    },
    "property2": {
      "name": "string",
      "displayName": "string",
      "description": "string",
      "props": {
        "property1": {
          "displayName": "string",
          "description": "string",
          "type": "SHORT_TEXT",
          "required": true,
          "defaultValue": null
        },
        "property2": {
          "displayName": "string",
          "description": "string",
          "type": "SHORT_TEXT",
          "required": true,
          "defaultValue": null
        }
      },
      "errorHandlingOptions": {
        "retryOnFailure": {
          "defaultValue": true,
          "hide": true
        },
        "continueOnFailure": {
          "defaultValue": true,
          "hide": true
        }
      },
      "type": "POLLING",
      "sampleData": null,
      "handshakeConfiguration": null,
      "renewConfiguration": {
        "strategy": "CRON",
        "cronExpression": "string"
      },
      "testStrategy": "SIMULATION"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|true|none|none|
|displayName|string|true|none|none|
|logoUrl|string|true|none|none|
|description|string|true|none|none|
|authors|[string]|true|none|none|
|platformId|string|false|none|none|
|directoryPath|string|false|none|none|
|auth|object \| [object]|false|none|none|
|version|string|true|none|none|
|categories|[string]|false|none|none|
|minimumSupportedRelease|string|false|none|none|
|maximumSupportedRelease|string|false|none|none|
|i18n|object|false|none|none|
|actions|object|true|none|none|
|triggers|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|categories|ARTIFICIAL_INTELLIGENCE|
|categories|COMMUNICATION|
|categories|COMMERCE|
|categories|CORE|
|categories|UNIVERSAL_AI|
|categories|FLOW_CONTROL|
|categories|BUSINESS_INTELLIGENCE|
|categories|ACCOUNTING|
|categories|PRODUCTIVITY|
|categories|CONTENT_AND_FILES|
|categories|DEVELOPER_TOOLS|
|categories|CUSTOMER_SUPPORT|
|categories|FORMS_AND_SURVEYS|
|categories|HUMAN_RESOURCES|
|categories|PAYMENT_PROCESSING|
|categories|MARKETING|
|categories|SALES_AND_CRM|

<h2 id="tocS_git-repoInput">git-repoInput</h2>
<!-- backwards compatibility -->
<a id="schemagit-repoinput"></a>
<a id="schema_git-repoInput"></a>
<a id="tocSgit-repoinput"></a>
<a id="tocsgit-repoinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "remoteUrl": "string",
  "branch": "string",
  "branchType": "PRODUCTION",
  "projectId": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|remoteUrl|string|true|none|none|
|branch|string|true|none|none|
|branchType|string|true|none|none|
|projectId|string|true|none|none|
|slug|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|branchType|PRODUCTION|
|branchType|DEVELOPMENT|

<h2 id="tocS_project-releaseInput">project-releaseInput</h2>
<!-- backwards compatibility -->
<a id="schemaproject-releaseinput"></a>
<a id="schema_project-releaseInput"></a>
<a id="tocSproject-releaseinput"></a>
<a id="tocsproject-releaseinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "projectId": "string",
  "name": "string",
  "description": "string",
  "importedBy": "string",
  "fileId": "string",
  "type": "GIT",
  "importedByUser": {
    "id": "string",
    "email": "string",
    "firstName": "string",
    "status": "ACTIVE",
    "externalId": "string",
    "platformId": "string",
    "platformRole": "ADMIN",
    "lastName": "string",
    "created": "string",
    "updated": "string",
    "lastActiveDate": "string",
    "imageUrl": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|projectId|string|true|none|none|
|name|string|true|none|none|
|description|string \| null|false|none|none|
|importedBy|string \| null|false|none|none|
|fileId|string|true|none|none|
|type|string|true|none|none|
|importedByUser|[userInput](#schemauserinput)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|GIT|
|type|PROJECT|
|type|ROLLBACK|

<h2 id="tocS_embeddingInput">embeddingInput</h2>
<!-- backwards compatibility -->
<a id="schemaembeddinginput"></a>
<a id="schema_embeddingInput"></a>
<a id="tocSembeddinginput"></a>
<a id="tocsembeddinginput"></a>

```json
{
  "allowedEmbedOrigins": [
    "http://example.com"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedEmbedOrigins|[string(uri)]|true|none|none|

<h2 id="tocS_flow.created">flow.created</h2>
<!-- backwards compatibility -->
<a id="schemaflow.created"></a>
<a id="schema_flow.created"></a>
<a id="tocSflow.created"></a>
<a id="tocsflow.created"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.created",
  "data": {
    "flow": {
      "id": "string",
      "externalId": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string",
      "externalId": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.updated">flow.updated</h2>
<!-- backwards compatibility -->
<a id="schemaflow.updated"></a>
<a id="schema_flow.updated"></a>
<a id="tocSflow.updated"></a>
<a id="tocsflow.updated"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.updated",
  "data": {
    "flow": {
      "id": "string",
      "externalId": "string",
      "created": "string",
      "updated": "string"
    },
    "flowVersion": {
      "id": "string",
      "displayName": "string",
      "flowId": "string",
      "created": "string",
      "updated": "string"
    },
    "request": {
      "type": "MOVE_ACTION",
      "request": {
        "name": "string",
        "newParentStep": "string",
        "stepLocationRelativeToNewParent": "AFTER",
        "branchIndex": 0
      }
    },
    "reason": "string",
    "project": {
      "displayName": "string",
      "externalId": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.deleted">flow.deleted</h2>
<!-- backwards compatibility -->
<a id="schemaflow.deleted"></a>
<a id="schema_flow.deleted"></a>
<a id="tocSflow.deleted"></a>
<a id="tocsflow.deleted"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.deleted",
  "data": {
    "flow": {
      "id": "string",
      "externalId": "string",
      "created": "string",
      "updated": "string"
    },
    "flowVersion": {
      "id": "string",
      "displayName": "string",
      "flowId": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string",
      "externalId": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.published">flow.published</h2>
<!-- backwards compatibility -->
<a id="schemaflow.published"></a>
<a id="schema_flow.published"></a>
<a id="tocSflow.published"></a>
<a id="tocsflow.published"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.published",
  "data": {
    "flow": {
      "id": "string",
      "externalId": "string",
      "created": "string",
      "updated": "string"
    },
    "flowVersion": {
      "id": "string",
      "displayName": "string",
      "flowId": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string",
      "externalId": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.activated">flow.activated</h2>
<!-- backwards compatibility -->
<a id="schemaflow.activated"></a>
<a id="schema_flow.activated"></a>
<a id="tocSflow.activated"></a>
<a id="tocsflow.activated"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.activated",
  "data": {
    "flow": {
      "id": "string",
      "externalId": "string",
      "created": "string",
      "updated": "string"
    },
    "flowVersion": {
      "id": "string",
      "displayName": "string",
      "flowId": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string",
      "externalId": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.deactivated">flow.deactivated</h2>
<!-- backwards compatibility -->
<a id="schemaflow.deactivated"></a>
<a id="schema_flow.deactivated"></a>
<a id="tocSflow.deactivated"></a>
<a id="tocsflow.deactivated"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.deactivated",
  "data": {
    "flow": {
      "id": "string",
      "externalId": "string",
      "created": "string",
      "updated": "string"
    },
    "flowVersion": {
      "id": "string",
      "displayName": "string",
      "flowId": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string",
      "externalId": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_connection.upserted">connection.upserted</h2>
<!-- backwards compatibility -->
<a id="schemaconnection.upserted"></a>
<a id="schema_connection.upserted"></a>
<a id="tocSconnection.upserted"></a>
<a id="tocsconnection.upserted"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "connection.upserted",
  "data": {
    "connection": {
      "displayName": "string",
      "externalId": "string",
      "pieceName": "string",
      "status": "string",
      "type": "string",
      "id": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_connection.deleted">connection.deleted</h2>
<!-- backwards compatibility -->
<a id="schemaconnection.deleted"></a>
<a id="schema_connection.deleted"></a>
<a id="tocSconnection.deleted"></a>
<a id="tocsconnection.deleted"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "connection.deleted",
  "data": {
    "connection": {
      "displayName": "string",
      "externalId": "string",
      "pieceName": "string",
      "status": "string",
      "type": "string",
      "id": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_folder.created">folder.created</h2>
<!-- backwards compatibility -->
<a id="schemafolder.created"></a>
<a id="schema_folder.created"></a>
<a id="tocSfolder.created"></a>
<a id="tocsfolder.created"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "folder.created",
  "data": {
    "folder": {
      "id": "string",
      "displayName": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_folder.updated">folder.updated</h2>
<!-- backwards compatibility -->
<a id="schemafolder.updated"></a>
<a id="schema_folder.updated"></a>
<a id="tocSfolder.updated"></a>
<a id="tocsfolder.updated"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "folder.updated",
  "data": {
    "folder": {
      "id": "string",
      "displayName": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_folder.deleted">folder.deleted</h2>
<!-- backwards compatibility -->
<a id="schemafolder.deleted"></a>
<a id="schema_folder.deleted"></a>
<a id="tocSfolder.deleted"></a>
<a id="tocsfolder.deleted"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "folder.deleted",
  "data": {
    "folder": {
      "id": "string",
      "displayName": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.run.started">flow.run.started</h2>
<!-- backwards compatibility -->
<a id="schemaflow.run.started"></a>
<a id="schema_flow.run.started"></a>
<a id="tocSflow.run.started"></a>
<a id="tocsflow.run.started"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.run.started",
  "data": {
    "flowRun": {
      "id": "string",
      "startTime": "string",
      "finishTime": "string",
      "duration": 0,
      "triggeredBy": "string",
      "environment": "string",
      "flowId": "string",
      "flowVersionId": "string",
      "stepNameToTest": "string",
      "flowDisplayName": "string",
      "status": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.run.finished">flow.run.finished</h2>
<!-- backwards compatibility -->
<a id="schemaflow.run.finished"></a>
<a id="schema_flow.run.finished"></a>
<a id="tocSflow.run.finished"></a>
<a id="tocsflow.run.finished"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.run.finished",
  "data": {
    "flowRun": {
      "id": "string",
      "startTime": "string",
      "finishTime": "string",
      "duration": 0,
      "triggeredBy": "string",
      "environment": "string",
      "flowId": "string",
      "flowVersionId": "string",
      "stepNameToTest": "string",
      "flowDisplayName": "string",
      "status": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.run.retried">flow.run.retried</h2>
<!-- backwards compatibility -->
<a id="schemaflow.run.retried"></a>
<a id="schema_flow.run.retried"></a>
<a id="tocSflow.run.retried"></a>
<a id="tocsflow.run.retried"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.run.retried",
  "data": {
    "flowRun": {
      "id": "string",
      "startTime": "string",
      "finishTime": "string",
      "duration": 0,
      "triggeredBy": "string",
      "environment": "string",
      "flowId": "string",
      "flowVersionId": "string",
      "stepNameToTest": "string",
      "flowDisplayName": "string",
      "status": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_user.signed.up">user.signed.up</h2>
<!-- backwards compatibility -->
<a id="schemauser.signed.up"></a>
<a id="schema_user.signed.up"></a>
<a id="tocSuser.signed.up"></a>
<a id="tocsuser.signed.up"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "user.signed.up",
  "data": {
    "source": "credentials",
    "method": "EMAIL",
    "user": {
      "email": "string",
      "id": "string",
      "firstName": "string",
      "lastName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_user.signed.in">user.signed.in</h2>
<!-- backwards compatibility -->
<a id="schemauser.signed.in"></a>
<a id="schema_user.signed.in"></a>
<a id="tocSuser.signed.in"></a>
<a id="tocsuser.signed.in"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "user.signed.in",
  "data": {
    "user": {
      "email": "string",
      "id": "string",
      "firstName": "string",
      "lastName": "string"
    },
    "method": "EMAIL"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_user.password.reset">user.password.reset</h2>
<!-- backwards compatibility -->
<a id="schemauser.password.reset"></a>
<a id="schema_user.password.reset"></a>
<a id="tocSuser.password.reset"></a>
<a id="tocsuser.password.reset"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "user.password.reset",
  "data": {
    "user": {
      "email": "string",
      "id": "string",
      "firstName": "string",
      "lastName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_user.invitation.sent">user.invitation.sent</h2>
<!-- backwards compatibility -->
<a id="schemauser.invitation.sent"></a>
<a id="schema_user.invitation.sent"></a>
<a id="tocSuser.invitation.sent"></a>
<a id="tocsuser.invitation.sent"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "user.invitation.sent",
  "data": {
    "invitation": {
      "id": "string",
      "email": "string",
      "type": "PLATFORM",
      "platformRole": "ADMIN",
      "projectId": "string"
    },
    "projectRole": {
      "id": "string",
      "name": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_user.invitation.accepted">user.invitation.accepted</h2>
<!-- backwards compatibility -->
<a id="schemauser.invitation.accepted"></a>
<a id="schema_user.invitation.accepted"></a>
<a id="tocSuser.invitation.accepted"></a>
<a id="tocsuser.invitation.accepted"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "user.invitation.accepted",
  "data": {
    "invitation": {
      "id": "string",
      "email": "string",
      "type": "PLATFORM",
      "platformRole": "ADMIN",
      "projectId": "string"
    },
    "projectRole": {
      "id": "string",
      "name": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_user.invitation.deleted">user.invitation.deleted</h2>
<!-- backwards compatibility -->
<a id="schemauser.invitation.deleted"></a>
<a id="schema_user.invitation.deleted"></a>
<a id="tocSuser.invitation.deleted"></a>
<a id="tocsuser.invitation.deleted"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "user.invitation.deleted",
  "data": {
    "invitation": {
      "id": "string",
      "email": "string",
      "type": "PLATFORM",
      "platformRole": "ADMIN",
      "projectId": "string"
    },
    "projectRole": {
      "id": "string",
      "name": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_user.email.verified">user.email.verified</h2>
<!-- backwards compatibility -->
<a id="schemauser.email.verified"></a>
<a id="schema_user.email.verified"></a>
<a id="tocSuser.email.verified"></a>
<a id="tocsuser.email.verified"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "user.email.verified",
  "data": {
    "user": {
      "email": "string",
      "id": "string",
      "firstName": "string",
      "lastName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_signing.key.created">signing.key.created</h2>
<!-- backwards compatibility -->
<a id="schemasigning.key.created"></a>
<a id="schema_signing.key.created"></a>
<a id="tocSsigning.key.created"></a>
<a id="tocssigning.key.created"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "signing.key.created",
  "data": {
    "signingKey": {
      "id": "string",
      "created": "string",
      "updated": "string",
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_project.role.created">project.role.created</h2>
<!-- backwards compatibility -->
<a id="schemaproject.role.created"></a>
<a id="schema_project.role.created"></a>
<a id="tocSproject.role.created"></a>
<a id="tocsproject.role.created"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "project.role.created",
  "data": {
    "projectRole": {
      "id": "string",
      "created": "string",
      "updated": "string",
      "name": "string",
      "permissions": [
        "string"
      ],
      "platformId": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_project.release.created">project.release.created</h2>
<!-- backwards compatibility -->
<a id="schemaproject.release.created"></a>
<a id="schema_project.release.created"></a>
<a id="tocSproject.release.created"></a>
<a id="tocsproject.release.created"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "project.release.created",
  "data": {
    "release": {
      "name": "string",
      "description": "string",
      "type": "string",
      "projectId": "string",
      "importedByUser": {
        "id": "string",
        "email": "string",
        "firstName": "string",
        "status": "string",
        "externalId": "string",
        "platformId": "string",
        "platformRole": "string",
        "lastName": "string",
        "created": "string",
        "updated": "string",
        "lastActiveDate": "string",
        "imageUrl": "string"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_template">template</h2>
<!-- backwards compatibility -->
<a id="schematemplate"></a>
<a id="schema_template"></a>
<a id="tocStemplate"></a>
<a id="tocstemplate"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "name": "string",
  "type": "OFFICIAL",
  "summary": "string",
  "description": "string",
  "tags": [
    {
      "title": "string",
      "color": "string",
      "icon": "string"
    }
  ],
  "blogUrl": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "author": "string",
  "categories": [
    "string"
  ],
  "pieces": [
    "string"
  ],
  "platformId": "string",
  "flows": [
    {
      "displayName": "string",
      "trigger": {
        "name": "string",
        "valid": true,
        "displayName": "string",
        "nextAction": null,
        "lastUpdatedDate": "string",
        "type": "PIECE_TRIGGER",
        "settings": {
          "sampleData": {
            "sampleDataFileId": "string",
            "sampleDataInputFileId": "string",
            "lastTestDate": "string"
          },
          "propertySettings": {
            "property1": {
              "type": "MANUAL",
              "schema": null
            },
            "property2": {
              "type": "MANUAL",
              "schema": null
            }
          },
          "customLogoUrl": "string",
          "pieceName": "string",
          "pieceVersion": "string",
          "triggerName": "string",
          "input": {
            "property1": null,
            "property2": null
          }
        }
      },
      "valid": true,
      "schemaVersion": "string",
      "description": "string",
      "notes": [
        {
          "id": "string",
          "content": "string",
          "ownerId": "string",
          "color": "orange",
          "position": {
            "x": 0,
            "y": 0
          },
          "size": {
            "width": 0,
            "height": 0
          },
          "createdAt": "string",
          "updatedAt": "string"
        }
      ]
    }
  ],
  "tables": [
    {
      "name": "string",
      "externalId": "string",
      "fields": [
        {
          "name": "string",
          "type": "string",
          "data": {
            "options": [
              {
                "value": "string"
              }
            ]
          },
          "externalId": "string"
        }
      ],
      "status": "string",
      "trigger": "string",
      "data": {
        "type": "CSV",
        "rows": [
          [
            {
              "fieldId": "string",
              "value": "string"
            }
          ]
        ]
      }
    }
  ],
  "status": "PUBLISHED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|name|string|true|none|none|
|type|string|true|none|none|
|summary|string|true|none|none|
|description|string|true|none|none|
|tags|[object]|true|none|none|
|blogUrl|string \| null|false|none|none|
|metadata|object \| null|false|none|none|
|author|string|true|none|none|
|categories|[string]|true|none|none|
|pieces|[string]|true|none|none|
|platformId|string \| null|false|none|none|
|flows|[object]|false|none|none|
|tables|[object]|false|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OFFICIAL|
|type|SHARED|
|type|CUSTOM|
|status|PUBLISHED|
|status|ARCHIVED|

<h2 id="tocS_folder">folder</h2>
<!-- backwards compatibility -->
<a id="schemafolder"></a>
<a id="schema_folder"></a>
<a id="tocSfolder"></a>
<a id="tocsfolder"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "projectId": "string",
  "displayName": "string",
  "displayOrder": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|projectId|string|true|none|none|
|displayName|string|true|none|none|
|displayOrder|number|true|none|none|

<h2 id="tocS_user">user</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_user"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": "string",
  "email": "string",
  "firstName": "string",
  "status": "ACTIVE",
  "externalId": "string",
  "platformId": "string",
  "platformRole": "ADMIN",
  "lastName": "string",
  "created": "string",
  "updated": "string",
  "lastActiveDate": "string",
  "imageUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|email|string|true|none|none|
|firstName|string|true|none|none|
|status|string|true|none|none|
|externalId|string \| null|false|none|none|
|platformId|string \| null|false|none|none|
|platformRole|string|true|none|none|
|lastName|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|lastActiveDate|string \| null|false|none|none|
|imageUrl|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|platformRole|ADMIN|
|platformRole|MEMBER|
|platformRole|OPERATOR|

<h2 id="tocS_user-invitation">user-invitation</h2>
<!-- backwards compatibility -->
<a id="schemauser-invitation"></a>
<a id="schema_user-invitation"></a>
<a id="tocSuser-invitation"></a>
<a id="tocsuser-invitation"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "email": "string",
  "status": "PENDING",
  "type": "PLATFORM",
  "platformId": "string",
  "platformRole": "ADMIN",
  "projectId": "string",
  "projectRoleId": "string",
  "projectRole": {
    "id": "string",
    "created": "string",
    "updated": "string",
    "name": "string",
    "permissions": [
      "string"
    ],
    "platformId": "string",
    "type": "string",
    "userCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|email|string|true|none|none|
|status|string|true|none|none|
|type|string|true|none|none|
|platformId|string|true|none|none|
|platformRole|string \| null|false|none|none|
|projectId|string \| null|false|none|none|
|projectRoleId|string \| null|false|none|none|
|projectRole|object \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PENDING|
|status|ACCEPTED|
|type|PLATFORM|
|type|PROJECT|

<h2 id="tocS_project-member">project-member</h2>
<!-- backwards compatibility -->
<a id="schemaproject-member"></a>
<a id="schema_project-member"></a>
<a id="tocSproject-member"></a>
<a id="tocsproject-member"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "userId": "string",
  "projectId": "string",
  "projectRoleId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|userId|string|true|none|none|
|projectId|string|true|none|none|
|projectRoleId|string|true|none|none|

<h2 id="tocS_project">project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "ownerId": "string",
  "displayName": "string",
  "platformId": "string",
  "maxConcurrentJobs": 0,
  "type": "TEAM",
  "icon": {
    "color": "RED"
  },
  "externalId": "string",
  "releasesEnabled": true,
  "metadata": {
    "property1": null,
    "property2": null
  },
  "poolId": "string",
  "plan": {
    "id": "string",
    "created": "string",
    "updated": "string",
    "projectId": "string",
    "locked": false,
    "name": "string",
    "piecesFilterType": "NONE",
    "pieces": [
      "string"
    ]
  },
  "analytics": {
    "totalUsers": 0,
    "activeUsers": 0,
    "totalFlows": 0,
    "activeFlows": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|ownerId|string|true|none|none|
|displayName|string|true|none|none|
|platformId|string|true|none|none|
|maxConcurrentJobs|number \| null|false|none|none|
|type|string|true|none|none|
|icon|object|true|none|none|
|externalId|string \| null|false|none|none|
|releasesEnabled|boolean|true|none|none|
|metadata|object \| null|false|none|none|
|poolId|string \| null|false|none|none|
|plan|object|true|none|none|
|analytics|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TEAM|
|type|PERSONAL|

<h2 id="tocS_flow">flow</h2>
<!-- backwards compatibility -->
<a id="schemaflow"></a>
<a id="schema_flow"></a>
<a id="tocSflow"></a>
<a id="tocsflow"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "projectId": "string",
  "externalId": "string",
  "ownerId": "string",
  "folderId": "string",
  "status": "ENABLED",
  "publishedVersionId": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "operationStatus": "NONE",
  "timeSavedPerRun": 0,
  "templateId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|projectId|string|true|none|none|
|externalId|string|true|none|none|
|ownerId|string \| null|false|none|none|
|folderId|string \| null|false|none|none|
|status|string|true|none|none|
|publishedVersionId|string \| null|false|none|none|
|metadata|object \| null|false|none|none|
|operationStatus|string|true|none|none|
|timeSavedPerRun|number \| null|false|none|none|
|templateId|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ENABLED|
|status|DISABLED|
|operationStatus|NONE|
|operationStatus|DELETING|
|operationStatus|ENABLING|
|operationStatus|DISABLING|

<h2 id="tocS_flow-run">flow-run</h2>
<!-- backwards compatibility -->
<a id="schemaflow-run"></a>
<a id="schema_flow-run"></a>
<a id="tocSflow-run"></a>
<a id="tocsflow-run"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "projectId": "string",
  "flowId": "string",
  "parentRunId": "string",
  "failParentOnFailure": true,
  "triggeredBy": "string",
  "tags": [
    "string"
  ],
  "flowVersionId": "string",
  "flowVersion": {
    "displayName": "string"
  },
  "logsFileId": "string",
  "status": "FAILED",
  "startTime": "string",
  "finishTime": "string",
  "environment": "PRODUCTION",
  "steps": {
    "property1": null,
    "property2": null
  },
  "failedStep": {
    "name": "string",
    "displayName": "string"
  },
  "stepNameToTest": "string",
  "archivedAt": "string",
  "stepsCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|projectId|string|true|none|none|
|flowId|string|true|none|none|
|parentRunId|string|false|none|none|
|failParentOnFailure|boolean|true|none|none|
|triggeredBy|string|false|none|none|
|tags|[string]|false|none|none|
|flowVersionId|string|true|none|none|
|flowVersion|object|false|none|none|
|logsFileId|string \| null|false|none|none|
|status|string|true|none|none|
|startTime|string \| null|false|none|none|
|finishTime|string \| null|false|none|none|
|environment|string|true|none|none|
|steps|object \| null|false|none|none|
|failedStep|object|false|none|none|
|stepNameToTest|string|false|none|none|
|archivedAt|string \| null|false|none|none|
|stepsCount|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|FAILED|
|status|QUOTA_EXCEEDED|
|status|INTERNAL_ERROR|
|status|PAUSED|
|status|QUEUED|
|status|RUNNING|
|status|SUCCEEDED|
|status|MEMORY_LIMIT_EXCEEDED|
|status|TIMEOUT|
|status|CANCELED|
|status|LOG_SIZE_EXCEEDED|
|environment|PRODUCTION|
|environment|TESTING|

<h2 id="tocS_app-connection">app-connection</h2>
<!-- backwards compatibility -->
<a id="schemaapp-connection"></a>
<a id="schema_app-connection"></a>
<a id="tocSapp-connection"></a>
<a id="tocsapp-connection"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "externalId": "string",
  "displayName": "string",
  "type": "OAUTH2",
  "pieceName": "string",
  "projectIds": [
    "string"
  ],
  "platformId": "string",
  "scope": "PROJECT",
  "status": "ACTIVE",
  "ownerId": "string",
  "owner": {
    "id": "string",
    "email": "string",
    "firstName": "string",
    "status": "ACTIVE",
    "externalId": "string",
    "platformId": "string",
    "platformRole": "ADMIN",
    "lastName": "string",
    "created": "string",
    "updated": "string",
    "lastActiveDate": "string",
    "imageUrl": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "flowIds": [
    "string"
  ],
  "pieceVersion": "string",
  "preSelectForNewProjects": true,
  "usingSecretManager": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|externalId|string|true|none|none|
|displayName|string|true|none|none|
|type|string|true|none|none|
|pieceName|string|true|none|none|
|projectIds|[string]|true|none|none|
|platformId|string \| null|false|none|none|
|scope|string|true|none|none|
|status|string|true|none|none|
|ownerId|string \| null|false|none|none|
|owner|[user](#schemauser) \| null|false|none|none|
|metadata|object \| null|false|none|none|
|flowIds|[string] \| null|false|none|none|
|pieceVersion|string|true|none|none|
|preSelectForNewProjects|boolean|true|none|none|
|usingSecretManager|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OAUTH2|
|type|PLATFORM_OAUTH2|
|type|CLOUD_OAUTH2|
|type|SECRET_TEXT|
|type|BASIC_AUTH|
|type|CUSTOM_AUTH|
|type|NO_AUTH|
|scope|PROJECT|
|scope|PLATFORM|
|status|ACTIVE|
|status|MISSING|
|status|ERROR|

<h2 id="tocS_piece">piece</h2>
<!-- backwards compatibility -->
<a id="schemapiece"></a>
<a id="schema_piece"></a>
<a id="tocSpiece"></a>
<a id="tocspiece"></a>

```json
{
  "id": "string",
  "name": "string",
  "displayName": "string",
  "logoUrl": "string",
  "description": "string",
  "authors": [
    "string"
  ],
  "platformId": "string",
  "directoryPath": "string",
  "auth": {
    "displayName": "string",
    "description": "string",
    "username": {
      "displayName": "string",
      "description": "string"
    },
    "password": {
      "displayName": "string",
      "description": "string"
    },
    "type": "BASIC_AUTH",
    "required": true,
    "defaultValue": null
  },
  "version": "string",
  "categories": [
    "ARTIFICIAL_INTELLIGENCE"
  ],
  "minimumSupportedRelease": "string",
  "maximumSupportedRelease": "string",
  "i18n": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "actions": {
    "property1": {
      "name": "string",
      "displayName": "string",
      "description": "string",
      "props": {
        "property1": {
          "displayName": "string",
          "description": "string",
          "type": "SHORT_TEXT",
          "required": true,
          "defaultValue": null
        },
        "property2": {
          "displayName": "string",
          "description": "string",
          "type": "SHORT_TEXT",
          "required": true,
          "defaultValue": null
        }
      },
      "requireAuth": true,
      "errorHandlingOptions": {
        "retryOnFailure": {
          "defaultValue": true,
          "hide": true
        },
        "continueOnFailure": {
          "defaultValue": true,
          "hide": true
        }
      }
    },
    "property2": {
      "name": "string",
      "displayName": "string",
      "description": "string",
      "props": {
        "property1": {
          "displayName": "string",
          "description": "string",
          "type": "SHORT_TEXT",
          "required": true,
          "defaultValue": null
        },
        "property2": {
          "displayName": "string",
          "description": "string",
          "type": "SHORT_TEXT",
          "required": true,
          "defaultValue": null
        }
      },
      "requireAuth": true,
      "errorHandlingOptions": {
        "retryOnFailure": {
          "defaultValue": true,
          "hide": true
        },
        "continueOnFailure": {
          "defaultValue": true,
          "hide": true
        }
      }
    }
  },
  "triggers": {
    "property1": {
      "name": "string",
      "displayName": "string",
      "description": "string",
      "props": {
        "property1": {
          "displayName": "string",
          "description": "string",
          "type": "SHORT_TEXT",
          "required": true,
          "defaultValue": null
        },
        "property2": {
          "displayName": "string",
          "description": "string",
          "type": "SHORT_TEXT",
          "required": true,
          "defaultValue": null
        }
      },
      "errorHandlingOptions": {
        "retryOnFailure": {
          "defaultValue": true,
          "hide": true
        },
        "continueOnFailure": {
          "defaultValue": true,
          "hide": true
        }
      },
      "type": "POLLING",
      "sampleData": null,
      "handshakeConfiguration": null,
      "renewConfiguration": {
        "strategy": "CRON",
        "cronExpression": "string"
      },
      "testStrategy": "SIMULATION"
    },
    "property2": {
      "name": "string",
      "displayName": "string",
      "description": "string",
      "props": {
        "property1": {
          "displayName": "string",
          "description": "string",
          "type": "SHORT_TEXT",
          "required": true,
          "defaultValue": null
        },
        "property2": {
          "displayName": "string",
          "description": "string",
          "type": "SHORT_TEXT",
          "required": true,
          "defaultValue": null
        }
      },
      "errorHandlingOptions": {
        "retryOnFailure": {
          "defaultValue": true,
          "hide": true
        },
        "continueOnFailure": {
          "defaultValue": true,
          "hide": true
        }
      },
      "type": "POLLING",
      "sampleData": null,
      "handshakeConfiguration": null,
      "renewConfiguration": {
        "strategy": "CRON",
        "cronExpression": "string"
      },
      "testStrategy": "SIMULATION"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|true|none|none|
|displayName|string|true|none|none|
|logoUrl|string|true|none|none|
|description|string|true|none|none|
|authors|[string]|true|none|none|
|platformId|string|false|none|none|
|directoryPath|string|false|none|none|
|auth|object \| [object]|false|none|none|
|version|string|true|none|none|
|categories|[string]|false|none|none|
|minimumSupportedRelease|string|false|none|none|
|maximumSupportedRelease|string|false|none|none|
|i18n|object|false|none|none|
|actions|object|true|none|none|
|triggers|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|categories|ARTIFICIAL_INTELLIGENCE|
|categories|COMMUNICATION|
|categories|COMMERCE|
|categories|CORE|
|categories|UNIVERSAL_AI|
|categories|FLOW_CONTROL|
|categories|BUSINESS_INTELLIGENCE|
|categories|ACCOUNTING|
|categories|PRODUCTIVITY|
|categories|CONTENT_AND_FILES|
|categories|DEVELOPER_TOOLS|
|categories|CUSTOMER_SUPPORT|
|categories|FORMS_AND_SURVEYS|
|categories|HUMAN_RESOURCES|
|categories|PAYMENT_PROCESSING|
|categories|MARKETING|
|categories|SALES_AND_CRM|

<h2 id="tocS_git-repo">git-repo</h2>
<!-- backwards compatibility -->
<a id="schemagit-repo"></a>
<a id="schema_git-repo"></a>
<a id="tocSgit-repo"></a>
<a id="tocsgit-repo"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "remoteUrl": "string",
  "branch": "string",
  "branchType": "PRODUCTION",
  "projectId": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|remoteUrl|string|true|none|none|
|branch|string|true|none|none|
|branchType|string|true|none|none|
|projectId|string|true|none|none|
|slug|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|branchType|PRODUCTION|
|branchType|DEVELOPMENT|

<h2 id="tocS_project-release">project-release</h2>
<!-- backwards compatibility -->
<a id="schemaproject-release"></a>
<a id="schema_project-release"></a>
<a id="tocSproject-release"></a>
<a id="tocsproject-release"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "projectId": "string",
  "name": "string",
  "description": "string",
  "importedBy": "string",
  "fileId": "string",
  "type": "GIT",
  "importedByUser": {
    "id": "string",
    "email": "string",
    "firstName": "string",
    "status": "ACTIVE",
    "externalId": "string",
    "platformId": "string",
    "platformRole": "ADMIN",
    "lastName": "string",
    "created": "string",
    "updated": "string",
    "lastActiveDate": "string",
    "imageUrl": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|projectId|string|true|none|none|
|name|string|true|none|none|
|description|string \| null|false|none|none|
|importedBy|string \| null|false|none|none|
|fileId|string|true|none|none|
|type|string|true|none|none|
|importedByUser|[user](#schemauser)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|GIT|
|type|PROJECT|
|type|ROLLBACK|

<h2 id="tocS_embedding">embedding</h2>
<!-- backwards compatibility -->
<a id="schemaembedding"></a>
<a id="schema_embedding"></a>
<a id="tocSembedding"></a>
<a id="tocsembedding"></a>

```json
{
  "allowedEmbedOrigins": [
    "http://example.com"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedEmbedOrigins|[string(uri)]|true|none|none|

<h2 id="tocS_variableInput">variableInput</h2>
<!-- backwards compatibility -->
<a id="schemavariableinput"></a>
<a id="schema_variableInput"></a>
<a id="tocSvariableinput"></a>
<a id="tocsvariableinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "name": "string",
  "projectId": "string",
  "platformId": "string",
  "ownerId": "string",
  "owner": {
    "id": "string",
    "email": "string",
    "firstName": "string",
    "status": "ACTIVE",
    "externalId": "string",
    "platformId": "string",
    "platformRole": "ADMIN",
    "lastName": "string",
    "created": "string",
    "updated": "string",
    "lastActiveDate": "string",
    "imageUrl": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|name|string|true|none|none|
|projectId|string|true|none|none|
|platformId|string|true|none|none|
|ownerId|string \| null|false|none|none|
|owner|[userInput](#schemauserinput) \| null|false|none|none|
|metadata|object \| null|false|none|none|

<h2 id="tocS_variable">variable</h2>
<!-- backwards compatibility -->
<a id="schemavariable"></a>
<a id="schema_variable"></a>
<a id="tocSvariable"></a>
<a id="tocsvariable"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "name": "string",
  "projectId": "string",
  "platformId": "string",
  "ownerId": "string",
  "owner": {
    "id": "string",
    "email": "string",
    "firstName": "string",
    "status": "ACTIVE",
    "externalId": "string",
    "platformId": "string",
    "platformRole": "ADMIN",
    "lastName": "string",
    "created": "string",
    "updated": "string",
    "lastActiveDate": "string",
    "imageUrl": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|name|string|true|none|none|
|projectId|string|true|none|none|
|platformId|string|true|none|none|
|ownerId|string \| null|false|none|none|
|owner|[user](#schemauser) \| null|false|none|none|
|metadata|object \| null|false|none|none|

<h2 id="tocS_audit.log.retention.updatedInput">audit.log.retention.updatedInput</h2>
<!-- backwards compatibility -->
<a id="schemaaudit.log.retention.updatedinput"></a>
<a id="schema_audit.log.retention.updatedInput"></a>
<a id="tocSaudit.log.retention.updatedinput"></a>
<a id="tocsaudit.log.retention.updatedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "audit.log.retention.updated",
  "data": {
    "previousRetentionDays": 0,
    "retentionDays": 0,
    "instanceLimitDays": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_audit.log.retention.updated">audit.log.retention.updated</h2>
<!-- backwards compatibility -->
<a id="schemaaudit.log.retention.updated"></a>
<a id="schema_audit.log.retention.updated"></a>
<a id="tocSaudit.log.retention.updated"></a>
<a id="tocsaudit.log.retention.updated"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "audit.log.retention.updated",
  "data": {
    "previousRetentionDays": 0,
    "retentionDays": 0,
    "instanceLimitDays": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_authentication.email.enabledInput">authentication.email.enabledInput</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication.email.enabledinput"></a>
<a id="schema_authentication.email.enabledInput"></a>
<a id="tocSauthentication.email.enabledinput"></a>
<a id="tocsauthentication.email.enabledinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "authentication.email.enabled",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_authentication.email.enabled">authentication.email.enabled</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication.email.enabled"></a>
<a id="schema_authentication.email.enabled"></a>
<a id="tocSauthentication.email.enabled"></a>
<a id="tocsauthentication.email.enabled"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "authentication.email.enabled",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_authentication.email.disabledInput">authentication.email.disabledInput</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication.email.disabledinput"></a>
<a id="schema_authentication.email.disabledInput"></a>
<a id="tocSauthentication.email.disabledinput"></a>
<a id="tocsauthentication.email.disabledinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "authentication.email.disabled",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_authentication.email.disabled">authentication.email.disabled</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication.email.disabled"></a>
<a id="schema_authentication.email.disabled"></a>
<a id="tocSauthentication.email.disabled"></a>
<a id="tocsauthentication.email.disabled"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "authentication.email.disabled",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_authentication.google.enabledInput">authentication.google.enabledInput</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication.google.enabledinput"></a>
<a id="schema_authentication.google.enabledInput"></a>
<a id="tocSauthentication.google.enabledinput"></a>
<a id="tocsauthentication.google.enabledinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "authentication.google.enabled",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_authentication.google.enabled">authentication.google.enabled</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication.google.enabled"></a>
<a id="schema_authentication.google.enabled"></a>
<a id="tocSauthentication.google.enabled"></a>
<a id="tocsauthentication.google.enabled"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "authentication.google.enabled",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_authentication.google.disabledInput">authentication.google.disabledInput</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication.google.disabledinput"></a>
<a id="schema_authentication.google.disabledInput"></a>
<a id="tocSauthentication.google.disabledinput"></a>
<a id="tocsauthentication.google.disabledinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "authentication.google.disabled",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_authentication.google.disabled">authentication.google.disabled</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication.google.disabled"></a>
<a id="schema_authentication.google.disabled"></a>
<a id="tocSauthentication.google.disabled"></a>
<a id="tocsauthentication.google.disabled"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "authentication.google.disabled",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_authentication.allowed.domain.addedInput">authentication.allowed.domain.addedInput</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication.allowed.domain.addedinput"></a>
<a id="schema_authentication.allowed.domain.addedInput"></a>
<a id="tocSauthentication.allowed.domain.addedinput"></a>
<a id="tocsauthentication.allowed.domain.addedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "authentication.allowed.domain.added",
  "data": {
    "domain": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_authentication.allowed.domain.added">authentication.allowed.domain.added</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication.allowed.domain.added"></a>
<a id="schema_authentication.allowed.domain.added"></a>
<a id="tocSauthentication.allowed.domain.added"></a>
<a id="tocsauthentication.allowed.domain.added"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "authentication.allowed.domain.added",
  "data": {
    "domain": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_authentication.allowed.domain.removedInput">authentication.allowed.domain.removedInput</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication.allowed.domain.removedinput"></a>
<a id="schema_authentication.allowed.domain.removedInput"></a>
<a id="tocSauthentication.allowed.domain.removedinput"></a>
<a id="tocsauthentication.allowed.domain.removedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "authentication.allowed.domain.removed",
  "data": {
    "domain": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_authentication.allowed.domain.removed">authentication.allowed.domain.removed</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication.allowed.domain.removed"></a>
<a id="schema_authentication.allowed.domain.removed"></a>
<a id="tocSauthentication.allowed.domain.removed"></a>
<a id="tocsauthentication.allowed.domain.removed"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "authentication.allowed.domain.removed",
  "data": {
    "domain": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_authentication.allowed.domain.enforcement.enabledInput">authentication.allowed.domain.enforcement.enabledInput</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication.allowed.domain.enforcement.enabledinput"></a>
<a id="schema_authentication.allowed.domain.enforcement.enabledInput"></a>
<a id="tocSauthentication.allowed.domain.enforcement.enabledinput"></a>
<a id="tocsauthentication.allowed.domain.enforcement.enabledinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "authentication.allowed.domain.enforcement.enabled",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_authentication.allowed.domain.enforcement.enabled">authentication.allowed.domain.enforcement.enabled</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication.allowed.domain.enforcement.enabled"></a>
<a id="schema_authentication.allowed.domain.enforcement.enabled"></a>
<a id="tocSauthentication.allowed.domain.enforcement.enabled"></a>
<a id="tocsauthentication.allowed.domain.enforcement.enabled"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "authentication.allowed.domain.enforcement.enabled",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_authentication.allowed.domain.enforcement.disabledInput">authentication.allowed.domain.enforcement.disabledInput</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication.allowed.domain.enforcement.disabledinput"></a>
<a id="schema_authentication.allowed.domain.enforcement.disabledInput"></a>
<a id="tocSauthentication.allowed.domain.enforcement.disabledinput"></a>
<a id="tocsauthentication.allowed.domain.enforcement.disabledinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "authentication.allowed.domain.enforcement.disabled",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_authentication.allowed.domain.enforcement.disabled">authentication.allowed.domain.enforcement.disabled</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication.allowed.domain.enforcement.disabled"></a>
<a id="schema_authentication.allowed.domain.enforcement.disabled"></a>
<a id="tocSauthentication.allowed.domain.enforcement.disabled"></a>
<a id="tocsauthentication.allowed.domain.enforcement.disabled"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "authentication.allowed.domain.enforcement.disabled",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_sso.domain.addedInput">sso.domain.addedInput</h2>
<!-- backwards compatibility -->
<a id="schemasso.domain.addedinput"></a>
<a id="schema_sso.domain.addedInput"></a>
<a id="tocSsso.domain.addedinput"></a>
<a id="tocssso.domain.addedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "sso.domain.added",
  "data": {
    "domain": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_sso.domain.added">sso.domain.added</h2>
<!-- backwards compatibility -->
<a id="schemasso.domain.added"></a>
<a id="schema_sso.domain.added"></a>
<a id="tocSsso.domain.added"></a>
<a id="tocssso.domain.added"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "sso.domain.added",
  "data": {
    "domain": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_sso.domain.verifiedInput">sso.domain.verifiedInput</h2>
<!-- backwards compatibility -->
<a id="schemasso.domain.verifiedinput"></a>
<a id="schema_sso.domain.verifiedInput"></a>
<a id="tocSsso.domain.verifiedinput"></a>
<a id="tocssso.domain.verifiedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "sso.domain.verified",
  "data": {
    "domain": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_sso.domain.verified">sso.domain.verified</h2>
<!-- backwards compatibility -->
<a id="schemasso.domain.verified"></a>
<a id="schema_sso.domain.verified"></a>
<a id="tocSsso.domain.verified"></a>
<a id="tocssso.domain.verified"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "sso.domain.verified",
  "data": {
    "domain": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_sso.domain.verification.cancelledInput">sso.domain.verification.cancelledInput</h2>
<!-- backwards compatibility -->
<a id="schemasso.domain.verification.cancelledinput"></a>
<a id="schema_sso.domain.verification.cancelledInput"></a>
<a id="tocSsso.domain.verification.cancelledinput"></a>
<a id="tocssso.domain.verification.cancelledinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "sso.domain.verification.cancelled",
  "data": {
    "domain": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_sso.domain.verification.cancelled">sso.domain.verification.cancelled</h2>
<!-- backwards compatibility -->
<a id="schemasso.domain.verification.cancelled"></a>
<a id="schema_sso.domain.verification.cancelled"></a>
<a id="tocSsso.domain.verification.cancelled"></a>
<a id="tocssso.domain.verification.cancelled"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "sso.domain.verification.cancelled",
  "data": {
    "domain": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_sso.domain.removedInput">sso.domain.removedInput</h2>
<!-- backwards compatibility -->
<a id="schemasso.domain.removedinput"></a>
<a id="schema_sso.domain.removedInput"></a>
<a id="tocSsso.domain.removedinput"></a>
<a id="tocssso.domain.removedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "sso.domain.removed",
  "data": {
    "domain": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_sso.domain.removed">sso.domain.removed</h2>
<!-- backwards compatibility -->
<a id="schemasso.domain.removed"></a>
<a id="schema_sso.domain.removed"></a>
<a id="tocSsso.domain.removed"></a>
<a id="tocssso.domain.removed"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "sso.domain.removed",
  "data": {
    "domain": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_sso.domain.expiredInput">sso.domain.expiredInput</h2>
<!-- backwards compatibility -->
<a id="schemasso.domain.expiredinput"></a>
<a id="schema_sso.domain.expiredInput"></a>
<a id="tocSsso.domain.expiredinput"></a>
<a id="tocssso.domain.expiredinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "sso.domain.expired",
  "data": {
    "domain": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_sso.domain.expired">sso.domain.expired</h2>
<!-- backwards compatibility -->
<a id="schemasso.domain.expired"></a>
<a id="schema_sso.domain.expired"></a>
<a id="tocSsso.domain.expired"></a>
<a id="tocssso.domain.expired"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "sso.domain.expired",
  "data": {
    "domain": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_sso.saml.connectedInput">sso.saml.connectedInput</h2>
<!-- backwards compatibility -->
<a id="schemasso.saml.connectedinput"></a>
<a id="schema_sso.saml.connectedInput"></a>
<a id="tocSsso.saml.connectedinput"></a>
<a id="tocssso.saml.connectedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "sso.saml.connected",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_sso.saml.connected">sso.saml.connected</h2>
<!-- backwards compatibility -->
<a id="schemasso.saml.connected"></a>
<a id="schema_sso.saml.connected"></a>
<a id="tocSsso.saml.connected"></a>
<a id="tocssso.saml.connected"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "sso.saml.connected",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_sso.saml.replacedInput">sso.saml.replacedInput</h2>
<!-- backwards compatibility -->
<a id="schemasso.saml.replacedinput"></a>
<a id="schema_sso.saml.replacedInput"></a>
<a id="tocSsso.saml.replacedinput"></a>
<a id="tocssso.saml.replacedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "sso.saml.replaced",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_sso.saml.replaced">sso.saml.replaced</h2>
<!-- backwards compatibility -->
<a id="schemasso.saml.replaced"></a>
<a id="schema_sso.saml.replaced"></a>
<a id="tocSsso.saml.replaced"></a>
<a id="tocssso.saml.replaced"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "sso.saml.replaced",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_sso.saml.disabledInput">sso.saml.disabledInput</h2>
<!-- backwards compatibility -->
<a id="schemasso.saml.disabledinput"></a>
<a id="schema_sso.saml.disabledInput"></a>
<a id="tocSsso.saml.disabledinput"></a>
<a id="tocssso.saml.disabledinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "sso.saml.disabled",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_sso.saml.disabled">sso.saml.disabled</h2>
<!-- backwards compatibility -->
<a id="schemasso.saml.disabled"></a>
<a id="schema_sso.saml.disabled"></a>
<a id="tocSsso.saml.disabled"></a>
<a id="tocssso.saml.disabled"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "sso.saml.disabled",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_agent.action.executed">agent.action.executed</h2>
<!-- backwards compatibility -->
<a id="schemaagent.action.executed"></a>
<a id="schema_agent.action.executed"></a>
<a id="tocSagent.action.executed"></a>
<a id="tocsagent.action.executed"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "agent.action.executed",
  "data": {
    "source": "CHAT",
    "conversation": {
      "id": "string",
      "source": "CHAT"
    },
    "agent": {
      "id": "string",
      "displayName": "string"
    },
    "flow": {
      "id": "string",
      "runId": "string"
    },
    "action": {
      "kind": "PIECE",
      "pieceName": "string",
      "pieceDisplayName": "string",
      "actionName": "string",
      "displayName": "string"
    },
    "outcome": "SUCCEEDED",
    "connection": {
      "externalId": "string",
      "label": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.approval.requestedInput">flow.approval.requestedInput</h2>
<!-- backwards compatibility -->
<a id="schemaflow.approval.requestedinput"></a>
<a id="schema_flow.approval.requestedInput"></a>
<a id="tocSflow.approval.requestedinput"></a>
<a id="tocsflow.approval.requestedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.approval.requested",
  "data": {
    "approvalRequestId": "string",
    "flowId": "string",
    "flowVersionId": "string",
    "flowDisplayName": "string",
    "rejectionReason": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.approval.requested">flow.approval.requested</h2>
<!-- backwards compatibility -->
<a id="schemaflow.approval.requested"></a>
<a id="schema_flow.approval.requested"></a>
<a id="tocSflow.approval.requested"></a>
<a id="tocsflow.approval.requested"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.approval.requested",
  "data": {
    "approvalRequestId": "string",
    "flowId": "string",
    "flowVersionId": "string",
    "flowDisplayName": "string",
    "rejectionReason": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.approval.grantedInput">flow.approval.grantedInput</h2>
<!-- backwards compatibility -->
<a id="schemaflow.approval.grantedinput"></a>
<a id="schema_flow.approval.grantedInput"></a>
<a id="tocSflow.approval.grantedinput"></a>
<a id="tocsflow.approval.grantedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.approval.granted",
  "data": {
    "approvalRequestId": "string",
    "flowId": "string",
    "flowVersionId": "string",
    "flowDisplayName": "string",
    "rejectionReason": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.approval.granted">flow.approval.granted</h2>
<!-- backwards compatibility -->
<a id="schemaflow.approval.granted"></a>
<a id="schema_flow.approval.granted"></a>
<a id="tocSflow.approval.granted"></a>
<a id="tocsflow.approval.granted"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.approval.granted",
  "data": {
    "approvalRequestId": "string",
    "flowId": "string",
    "flowVersionId": "string",
    "flowDisplayName": "string",
    "rejectionReason": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.approval.rejectedInput">flow.approval.rejectedInput</h2>
<!-- backwards compatibility -->
<a id="schemaflow.approval.rejectedinput"></a>
<a id="schema_flow.approval.rejectedInput"></a>
<a id="tocSflow.approval.rejectedinput"></a>
<a id="tocsflow.approval.rejectedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.approval.rejected",
  "data": {
    "approvalRequestId": "string",
    "flowId": "string",
    "flowVersionId": "string",
    "flowDisplayName": "string",
    "rejectionReason": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.approval.rejected">flow.approval.rejected</h2>
<!-- backwards compatibility -->
<a id="schemaflow.approval.rejected"></a>
<a id="schema_flow.approval.rejected"></a>
<a id="tocSflow.approval.rejected"></a>
<a id="tocsflow.approval.rejected"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.approval.rejected",
  "data": {
    "approvalRequestId": "string",
    "flowId": "string",
    "flowVersionId": "string",
    "flowDisplayName": "string",
    "rejectionReason": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.approval.withdrawnInput">flow.approval.withdrawnInput</h2>
<!-- backwards compatibility -->
<a id="schemaflow.approval.withdrawninput"></a>
<a id="schema_flow.approval.withdrawnInput"></a>
<a id="tocSflow.approval.withdrawninput"></a>
<a id="tocsflow.approval.withdrawninput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.approval.withdrawn",
  "data": {
    "approvalRequestId": "string",
    "flowId": "string",
    "flowVersionId": "string",
    "flowDisplayName": "string",
    "rejectionReason": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.approval.withdrawn">flow.approval.withdrawn</h2>
<!-- backwards compatibility -->
<a id="schemaflow.approval.withdrawn"></a>
<a id="schema_flow.approval.withdrawn"></a>
<a id="tocSflow.approval.withdrawn"></a>
<a id="tocsflow.approval.withdrawn"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.approval.withdrawn",
  "data": {
    "approvalRequestId": "string",
    "flowId": "string",
    "flowVersionId": "string",
    "flowDisplayName": "string",
    "rejectionReason": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.pieces.upgradedInput">flow.pieces.upgradedInput</h2>
<!-- backwards compatibility -->
<a id="schemaflow.pieces.upgradedinput"></a>
<a id="schema_flow.pieces.upgradedInput"></a>
<a id="tocSflow.pieces.upgradedinput"></a>
<a id="tocsflow.pieces.upgradedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.pieces.upgraded",
  "data": {
    "flowId": "string",
    "flowVersionId": "string",
    "steps": [
      {
        "stepName": "string",
        "actionOrTriggerName": "string",
        "decision": "UPGRADED",
        "prevVersion": "string",
        "newVersion": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.pieces.upgraded">flow.pieces.upgraded</h2>
<!-- backwards compatibility -->
<a id="schemaflow.pieces.upgraded"></a>
<a id="schema_flow.pieces.upgraded"></a>
<a id="tocSflow.pieces.upgraded"></a>
<a id="tocsflow.pieces.upgraded"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.pieces.upgraded",
  "data": {
    "flowId": "string",
    "flowVersionId": "string",
    "steps": [
      {
        "stepName": "string",
        "actionOrTriggerName": "string",
        "decision": "UPGRADED",
        "prevVersion": "string",
        "newVersion": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.pieces.revertedInput">flow.pieces.revertedInput</h2>
<!-- backwards compatibility -->
<a id="schemaflow.pieces.revertedinput"></a>
<a id="schema_flow.pieces.revertedInput"></a>
<a id="tocSflow.pieces.revertedinput"></a>
<a id="tocsflow.pieces.revertedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.pieces.reverted",
  "data": {
    "flowId": "string",
    "flowVersionId": "string",
    "steps": [
      {
        "stepName": "string",
        "actionOrTriggerName": "string",
        "prevVersion": "string",
        "newVersion": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.pieces.reverted">flow.pieces.reverted</h2>
<!-- backwards compatibility -->
<a id="schemaflow.pieces.reverted"></a>
<a id="schema_flow.pieces.reverted"></a>
<a id="tocSflow.pieces.reverted"></a>
<a id="tocsflow.pieces.reverted"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.pieces.reverted",
  "data": {
    "flowId": "string",
    "flowVersionId": "string",
    "steps": [
      {
        "stepName": "string",
        "actionOrTriggerName": "string",
        "prevVersion": "string",
        "newVersion": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.run.resumedInput">flow.run.resumedInput</h2>
<!-- backwards compatibility -->
<a id="schemaflow.run.resumedinput"></a>
<a id="schema_flow.run.resumedInput"></a>
<a id="tocSflow.run.resumedinput"></a>
<a id="tocsflow.run.resumedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.run.resumed",
  "data": {
    "flowRun": {
      "id": "string",
      "startTime": "string",
      "finishTime": "string",
      "duration": 0,
      "triggeredBy": "string",
      "environment": "string",
      "flowId": "string",
      "flowVersionId": "string",
      "stepNameToTest": "string",
      "flowDisplayName": "string",
      "status": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_flow.run.resumed">flow.run.resumed</h2>
<!-- backwards compatibility -->
<a id="schemaflow.run.resumed"></a>
<a id="schema_flow.run.resumed"></a>
<a id="tocSflow.run.resumed"></a>
<a id="tocsflow.run.resumed"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "flow.run.resumed",
  "data": {
    "flowRun": {
      "id": "string",
      "startTime": "string",
      "finishTime": "string",
      "duration": 0,
      "triggeredBy": "string",
      "environment": "string",
      "flowId": "string",
      "flowVersionId": "string",
      "stepNameToTest": "string",
      "flowDisplayName": "string",
      "status": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_agent.createdInput">agent.createdInput</h2>
<!-- backwards compatibility -->
<a id="schemaagent.createdinput"></a>
<a id="schema_agent.createdInput"></a>
<a id="tocSagent.createdinput"></a>
<a id="tocsagent.createdinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "agent.created",
  "data": {
    "agent": {
      "id": "string",
      "displayName": "string",
      "publishedDigest": "string",
      "publishedToolNames": [
        "string"
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_agent.created">agent.created</h2>
<!-- backwards compatibility -->
<a id="schemaagent.created"></a>
<a id="schema_agent.created"></a>
<a id="tocSagent.created"></a>
<a id="tocsagent.created"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "agent.created",
  "data": {
    "agent": {
      "id": "string",
      "displayName": "string",
      "publishedDigest": "string",
      "publishedToolNames": [
        "string"
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_agent.updatedInput">agent.updatedInput</h2>
<!-- backwards compatibility -->
<a id="schemaagent.updatedinput"></a>
<a id="schema_agent.updatedInput"></a>
<a id="tocSagent.updatedinput"></a>
<a id="tocsagent.updatedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "agent.updated",
  "data": {
    "agent": {
      "id": "string",
      "displayName": "string",
      "publishedDigest": "string",
      "publishedToolNames": [
        "string"
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_agent.updated">agent.updated</h2>
<!-- backwards compatibility -->
<a id="schemaagent.updated"></a>
<a id="schema_agent.updated"></a>
<a id="tocSagent.updated"></a>
<a id="tocsagent.updated"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "agent.updated",
  "data": {
    "agent": {
      "id": "string",
      "displayName": "string",
      "publishedDigest": "string",
      "publishedToolNames": [
        "string"
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_agent.deletedInput">agent.deletedInput</h2>
<!-- backwards compatibility -->
<a id="schemaagent.deletedinput"></a>
<a id="schema_agent.deletedInput"></a>
<a id="tocSagent.deletedinput"></a>
<a id="tocsagent.deletedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "agent.deleted",
  "data": {
    "agent": {
      "id": "string",
      "displayName": "string",
      "publishedDigest": "string",
      "publishedToolNames": [
        "string"
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_agent.deleted">agent.deleted</h2>
<!-- backwards compatibility -->
<a id="schemaagent.deleted"></a>
<a id="schema_agent.deleted"></a>
<a id="tocSagent.deleted"></a>
<a id="tocsagent.deleted"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "agent.deleted",
  "data": {
    "agent": {
      "id": "string",
      "displayName": "string",
      "publishedDigest": "string",
      "publishedToolNames": [
        "string"
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_agent.publishedInput">agent.publishedInput</h2>
<!-- backwards compatibility -->
<a id="schemaagent.publishedinput"></a>
<a id="schema_agent.publishedInput"></a>
<a id="tocSagent.publishedinput"></a>
<a id="tocsagent.publishedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "agent.published",
  "data": {
    "agent": {
      "id": "string",
      "displayName": "string",
      "publishedDigest": "string",
      "publishedToolNames": [
        "string"
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_agent.published">agent.published</h2>
<!-- backwards compatibility -->
<a id="schemaagent.published"></a>
<a id="schema_agent.published"></a>
<a id="tocSagent.published"></a>
<a id="tocsagent.published"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "agent.published",
  "data": {
    "agent": {
      "id": "string",
      "displayName": "string",
      "publishedDigest": "string",
      "publishedToolNames": [
        "string"
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_agent.unpublishedInput">agent.unpublishedInput</h2>
<!-- backwards compatibility -->
<a id="schemaagent.unpublishedinput"></a>
<a id="schema_agent.unpublishedInput"></a>
<a id="tocSagent.unpublishedinput"></a>
<a id="tocsagent.unpublishedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "agent.unpublished",
  "data": {
    "agent": {
      "id": "string",
      "displayName": "string",
      "publishedDigest": "string",
      "publishedToolNames": [
        "string"
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_agent.unpublished">agent.unpublished</h2>
<!-- backwards compatibility -->
<a id="schemaagent.unpublished"></a>
<a id="schema_agent.unpublished"></a>
<a id="tocSagent.unpublished"></a>
<a id="tocsagent.unpublished"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "agent.unpublished",
  "data": {
    "agent": {
      "id": "string",
      "displayName": "string",
      "publishedDigest": "string",
      "publishedToolNames": [
        "string"
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_variable.upsertedInput">variable.upsertedInput</h2>
<!-- backwards compatibility -->
<a id="schemavariable.upsertedinput"></a>
<a id="schema_variable.upsertedInput"></a>
<a id="tocSvariable.upsertedinput"></a>
<a id="tocsvariable.upsertedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "variable.upserted",
  "data": {
    "variable": {
      "id": "string",
      "name": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_variable.upserted">variable.upserted</h2>
<!-- backwards compatibility -->
<a id="schemavariable.upserted"></a>
<a id="schema_variable.upserted"></a>
<a id="tocSvariable.upserted"></a>
<a id="tocsvariable.upserted"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "variable.upserted",
  "data": {
    "variable": {
      "id": "string",
      "name": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_variable.deletedInput">variable.deletedInput</h2>
<!-- backwards compatibility -->
<a id="schemavariable.deletedinput"></a>
<a id="schema_variable.deletedInput"></a>
<a id="tocSvariable.deletedinput"></a>
<a id="tocsvariable.deletedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "variable.deleted",
  "data": {
    "variable": {
      "id": "string",
      "name": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_variable.deleted">variable.deleted</h2>
<!-- backwards compatibility -->
<a id="schemavariable.deleted"></a>
<a id="schema_variable.deleted"></a>
<a id="tocSvariable.deleted"></a>
<a id="tocsvariable.deleted"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "variable.deleted",
  "data": {
    "variable": {
      "id": "string",
      "name": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_variable.value.revealedInput">variable.value.revealedInput</h2>
<!-- backwards compatibility -->
<a id="schemavariable.value.revealedinput"></a>
<a id="schema_variable.value.revealedInput"></a>
<a id="tocSvariable.value.revealedinput"></a>
<a id="tocsvariable.value.revealedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "variable.value.revealed",
  "data": {
    "variable": {
      "id": "string",
      "name": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_variable.value.revealed">variable.value.revealed</h2>
<!-- backwards compatibility -->
<a id="schemavariable.value.revealed"></a>
<a id="schema_variable.value.revealed"></a>
<a id="tocSvariable.value.revealed"></a>
<a id="tocsvariable.value.revealed"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "variable.value.revealed",
  "data": {
    "variable": {
      "id": "string",
      "name": "string",
      "created": "string",
      "updated": "string"
    },
    "project": {
      "displayName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_project.role.updatedInput">project.role.updatedInput</h2>
<!-- backwards compatibility -->
<a id="schemaproject.role.updatedinput"></a>
<a id="schema_project.role.updatedInput"></a>
<a id="tocSproject.role.updatedinput"></a>
<a id="tocsproject.role.updatedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "project.role.updated",
  "data": {
    "projectRole": {
      "id": "string",
      "created": "string",
      "updated": "string",
      "name": "string",
      "permissions": [
        "string"
      ],
      "platformId": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_project.role.updated">project.role.updated</h2>
<!-- backwards compatibility -->
<a id="schemaproject.role.updated"></a>
<a id="schema_project.role.updated"></a>
<a id="tocSproject.role.updated"></a>
<a id="tocsproject.role.updated"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "project.role.updated",
  "data": {
    "projectRole": {
      "id": "string",
      "created": "string",
      "updated": "string",
      "name": "string",
      "permissions": [
        "string"
      ],
      "platformId": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_project.role.deletedInput">project.role.deletedInput</h2>
<!-- backwards compatibility -->
<a id="schemaproject.role.deletedinput"></a>
<a id="schema_project.role.deletedInput"></a>
<a id="tocSproject.role.deletedinput"></a>
<a id="tocsproject.role.deletedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "project.role.deleted",
  "data": {
    "projectRole": {
      "id": "string",
      "created": "string",
      "updated": "string",
      "name": "string",
      "permissions": [
        "string"
      ],
      "platformId": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_project.role.deleted">project.role.deleted</h2>
<!-- backwards compatibility -->
<a id="schemaproject.role.deleted"></a>
<a id="schema_project.role.deleted"></a>
<a id="tocSproject.role.deleted"></a>
<a id="tocsproject.role.deleted"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "project.role.deleted",
  "data": {
    "projectRole": {
      "id": "string",
      "created": "string",
      "updated": "string",
      "name": "string",
      "permissions": [
        "string"
      ],
      "platformId": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_project.replacedInput">project.replacedInput</h2>
<!-- backwards compatibility -->
<a id="schemaproject.replacedinput"></a>
<a id="schema_project.replacedInput"></a>
<a id="tocSproject.replacedinput"></a>
<a id="tocsproject.replacedinput"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "project.replaced",
  "data": {
    "sourceActivepiecesVersion": "string",
    "applied": {
      "flowsCreated": 0,
      "flowsUpdated": 0,
      "flowsDeleted": 0,
      "flowsUnchanged": 0,
      "tablesCreated": 0,
      "tablesUpdated": 0,
      "tablesDeleted": 0,
      "tablesUnchanged": 0,
      "foldersCreated": 0,
      "foldersUpdated": 0,
      "foldersDeleted": 0,
      "foldersUnchanged": 0,
      "connectionsCreated": 0,
      "connectionsUpdated": 0,
      "connectionsUnchanged": 0
    },
    "failedCount": 0,
    "outcome": "SUCCESS",
    "durationMs": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_project.replaced">project.replaced</h2>
<!-- backwards compatibility -->
<a id="schemaproject.replaced"></a>
<a id="schema_project.replaced"></a>
<a id="tocSproject.replaced"></a>
<a id="tocsproject.replaced"></a>

```json
{
  "id": "string",
  "created": "string",
  "updated": "string",
  "platformId": "string",
  "projectId": "string",
  "projectDisplayName": "string",
  "userId": "string",
  "userEmail": "string",
  "ip": "string",
  "action": "project.replaced",
  "data": {
    "sourceActivepiecesVersion": "string",
    "applied": {
      "flowsCreated": 0,
      "flowsUpdated": 0,
      "flowsDeleted": 0,
      "flowsUnchanged": 0,
      "tablesCreated": 0,
      "tablesUpdated": 0,
      "tablesDeleted": 0,
      "tablesUnchanged": 0,
      "foldersCreated": 0,
      "foldersUpdated": 0,
      "foldersDeleted": 0,
      "foldersUnchanged": 0,
      "connectionsCreated": 0,
      "connectionsUpdated": 0,
      "connectionsUnchanged": 0
    },
    "failedCount": 0,
    "outcome": "SUCCESS",
    "durationMs": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created|string|true|none|none|
|updated|string|true|none|none|
|platformId|string|true|none|none|
|projectId|string|false|none|none|
|projectDisplayName|string|false|none|none|
|userId|string|false|none|none|
|userEmail|string|false|none|none|
|ip|string|false|none|none|
|action|string|true|none|none|
|data|object|true|none|none|
