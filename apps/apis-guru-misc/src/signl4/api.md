<h1 id="signl4-api">SIGNL4 API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Use our API for systems integration or to build your own use cases. Sample scenarios include but are not limited to:</p><ul><li>2-way integration: Triggering of Signls and updates in the third party systems when alert state changes occur</li><li>Retrieving alarms for logging purposes</li><li>Calendar integrations: Creation and management of on-call duties</li><li>Punch users in and out based on external calendars</li><li>etc.</li></ul><p>AUTHENTICATION<br>Using the API requires an API key, which you can generate in the SIGNL4 portal under 'Developers'.<br>This key must then be specified in a special header in every HTTP request.<br>This header is called <b style='color:#F8B41F'>X-S4-Api-Key</b>.<br><br>The base URL of the API is <a rel='noopener noreferrer' target='_blank' href='https://connect.signl4.com/api/'>https://connect.signl4.com/api/</a>.<br>Copyright © Derdack GmbH<br></p>

Base URLs:

* <a href="https://connect.signl4.com/api">https://connect.signl4.com/api</a>

Web: <a href="https://www.signl4.com/feedback-we-love-hear-from-you/">https://www.signl4.com/feedback-we-love-hear-from-you/</a> 
License: <a href="https://www.signl4.com">Derdack GmbH</a>

# Authentication

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://connect.signl4.com/identity/connect/authorize](https://connect.signl4.com/identity/connect/authorize)
    - Token URL = [https://connect.signl4.com/identity/connect/token](https://connect.signl4.com/identity/connect/token)
    - Refresh URL = [https://connect.signl4.com/identity/connect/token](https://connect.signl4.com/identity/connect/token)

|Scope|Scope Description|
|---|---|
|offline_access|Access write operations|
|public_api_read|Access write operations|
|public_api_write|Access read operations|

<h1 id="signl4-api-alerts">Alerts</h1>

Provide access to all informations about signls and the ability to interact with them.

## Trigger Alert

> Code samples

```bash
curl https://example.com/alerts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attachments": [
      {
        "content": "string",
        "contentType": "string",
        "encoding": 0,
        "id": "string",
        "name": "string"
      }
    ],
    "category": "string",
    "externalId": "string",
    "flags": 0,
    "parameters": [
      {
        "name": "string",
        "order": 0,
        "type": 0,
        "value": "string"
      }
    ],
    "severity": 0,
    "text": "string",
    "title": "string"
  }'
```

`POST /alerts`

Triggers a new alert for your team. All team members on duty will receive alert notifications.

> Body parameter

```json
{
  "attachments": [
    {
      "content": "string",
      "contentType": "string",
      "encoding": 0,
      "id": "string",
      "name": "string"
    }
  ],
  "category": "string",
  "externalId": "string",
  "flags": 0,
  "parameters": [
    {
      "name": "string",
      "order": 0,
      "type": 0,
      "value": "string"
    }
  ],
  "severity": 0,
  "text": "string",
  "title": "string"
}
```

<h3 id="trigger-alert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RaiseAlertInfo](#schemaraisealertinfo)|false|Alert to raise.|
|» attachments|body|[[AlertAttachment](#schemaalertattachment)]|false|none|
|» category|body|string \| null|false|none|
|» externalId|body|string \| null|false|none|
|» flags|body|integer(int32)|false|none|
|» parameters|body|[[EventParameterInfo](#schemaeventparameterinfo)]|false|none|
|» severity|body|[AlertSeverities](#schemaalertseverities)|false|none|
|» text|body|string \| null|false|none|
|» title|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» severity|0|
|» severity|1|
|» severity|2|

> Example responses

> 201 Response

```json
{
  "annotations": [
    {
      "annotationType": 0,
      "id": "string",
      "text": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "userId": "string"
    }
  ],
  "attachments": [
    {
      "content": "string",
      "contentType": "string",
      "encoding": 0,
      "id": "string",
      "name": "string"
    }
  ],
  "category": "string",
  "categoryId": "string",
  "eventId": "string",
  "eventSourceId": "string",
  "eventSourceType": 0,
  "flags": 0,
  "history": {
    "acknowledged": "1970-01-01T00:00:00Z",
    "acknowledgedgements": [
      "string"
    ],
    "closed": "1970-01-01T00:00:00Z",
    "closedBy": "string",
    "created": "1970-01-01T00:00:00Z",
    "historyEntries": [
      {
        "id": "string",
        "timestamp": "1970-01-01T00:00:00Z",
        "type": 0,
        "userId": "string"
      }
    ]
  },
  "id": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "parameters": [
    {
      "name": "string",
      "order": 0,
      "type": 0,
      "value": "string"
    }
  ],
  "severity": 0,
  "status": 0,
  "subscriptionId": "string",
  "teamId": "string",
  "text": "string",
  "title": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="trigger-alert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[AlertInfo](#schemaalertinfo)|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Confirms all visible alerts

> Code samples

```bash
curl https://example.com/alerts/acknowledgeAll \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "categoryIds": [
      "string"
    ],
    "maxDate": "1970-01-01T00:00:00Z",
    "minDate": "1970-01-01T00:00:00Z",
    "scope": 0,
    "teamIds": [
      "string"
    ]
  }'
```

`POST /alerts/acknowledgeAll`

This method confirms all unhandled alerts your team currently has by a specific user.

> Body parameter

```json
{
  "categoryIds": [
    "string"
  ],
  "maxDate": "1970-01-01T00:00:00Z",
  "minDate": "1970-01-01T00:00:00Z",
  "scope": 0,
  "teamIds": [
    "string"
  ]
}
```

<h3 id="confirms-all-visible-alerts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|query|string|false|User ID of the user to be used to acknowledge the alarms.|
|body|body|[ChangeAlertStatusFilterInfo](#schemachangealertstatusfilterinfo)|false|none|
|» categoryIds|body|[string]|false|none|
|» maxDate|body|string(date-time) \| null|false|none|
|» minDate|body|string(date-time) \| null|false|none|
|» scope|body|[StatusChangeScope](#schemastatuschangescope)|false|none|
|» teamIds|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» scope|0|
|» scope|1|
|» scope|2|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="confirms-all-visible-alerts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Acknowlegde multiple alerts

> Code samples

```bash
curl https://example.com/alerts/acknowledgeMultiple \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alertIds": [
      "string"
    ],
    "description": "string",
    "userId": "string"
  }'
```

`POST /alerts/acknowledgeMultiple`

This method confirms all alerts provided.

> Body parameter

```json
{
  "alertIds": [
    "string"
  ],
  "description": "string",
  "userId": "string"
}
```

<h3 id="acknowlegde-multiple-alerts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChangeAlertStatusMultipleInfo](#schemachangealertstatusmultipleinfo)|false|none|
|» alertIds|body|[string]|false|none|
|» description|body|string \| null|false|none|
|» userId|body|string \| null|false|none|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="acknowlegde-multiple-alerts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Close all acknowledged alerts.

> Code samples

```bash
curl https://example.com/alerts/closeAll \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "categoryIds": [
      "string"
    ],
    "maxDate": "1970-01-01T00:00:00Z",
    "minDate": "1970-01-01T00:00:00Z",
    "scope": 0,
    "teamIds": [
      "string"
    ]
  }'
```

`POST /alerts/closeAll`

This method closes all acknowledged alerts your team currently has.

> Body parameter

```json
{
  "categoryIds": [
    "string"
  ],
  "maxDate": "1970-01-01T00:00:00Z",
  "minDate": "1970-01-01T00:00:00Z",
  "scope": 0,
  "teamIds": [
    "string"
  ]
}
```

<h3 id="close-all-acknowledged-alerts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|query|string|false|User ID of the user to be used to close the alarms.|
|body|body|[ChangeAlertStatusFilterInfo](#schemachangealertstatusfilterinfo)|false|none|
|» categoryIds|body|[string]|false|none|
|» maxDate|body|string(date-time) \| null|false|none|
|» minDate|body|string(date-time) \| null|false|none|
|» scope|body|[StatusChangeScope](#schemastatuschangescope)|false|none|
|» teamIds|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» scope|0|
|» scope|1|
|» scope|2|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="close-all-acknowledged-alerts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Close multiple alerts

> Code samples

```bash
curl https://example.com/alerts/closeMultiple \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alertIds": [
      "string"
    ],
    "description": "string",
    "userId": "string"
  }'
```

`POST /alerts/closeMultiple`

This method closes all alerts provided.

> Body parameter

```json
{
  "alertIds": [
    "string"
  ],
  "description": "string",
  "userId": "string"
}
```

<h3 id="close-multiple-alerts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChangeAlertStatusMultipleInfo](#schemachangealertstatusmultipleinfo)|false|none|
|» alertIds|body|[string]|false|none|
|» description|body|string \| null|false|none|
|» userId|body|string \| null|false|none|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="close-multiple-alerts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Gets alerts paged

> Code samples

```bash
curl https://example.com/alerts/paged \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alertIds": [
      "string"
    ],
    "alertsAfterId": "string",
    "categoryIds": [
      "string"
    ],
    "continuationToken": {
      "nextPartitionKey": "string",
      "nextRowKey": "string",
      "nextTableName": "string"
    },
    "maxCreationDate": "1970-01-01T00:00:00Z",
    "minCreationDate": "1970-01-01T00:00:00Z",
    "modifiedSince": "1970-01-01T00:00:00Z",
    "showPersonalHiddenCategories": true,
    "statusCodes": 0,
    "teamId": "string",
    "textToSearch": "string"
  }'
```

`POST /alerts/paged`

> Body parameter

```json
{
  "alertIds": [
    "string"
  ],
  "alertsAfterId": "string",
  "categoryIds": [
    "string"
  ],
  "continuationToken": {
    "nextPartitionKey": "string",
    "nextRowKey": "string",
    "nextTableName": "string"
  },
  "maxCreationDate": "1970-01-01T00:00:00Z",
  "minCreationDate": "1970-01-01T00:00:00Z",
  "modifiedSince": "1970-01-01T00:00:00Z",
  "showPersonalHiddenCategories": true,
  "statusCodes": 0,
  "teamId": "string",
  "textToSearch": "string"
}
```

<h3 id="gets-alerts-paged-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer(int32)|false|Defines the limit of retrieved alert details per request. 1 to 100 are allowed per request.<br>                Number of alerts could be less if filtered but at least 1.|
|userId|query|string|false|User ID of the user you want to get alerts for.|
|body|body|[AlertFilterPublic](#schemaalertfilterpublic)|false|The filter defines which alerts are supposed to be retrieved.|
|» alertIds|body|[string]|false|none|
|» alertsAfterId|body|string \| null|false|none|
|» categoryIds|body|[string]|false|none|
|» continuationToken|body|[PagedResultsPublicContinuationToken](#schemapagedresultspubliccontinuationtoken)|false|none|
|» maxCreationDate|body|string(date-time) \| null|false|none|
|» minCreationDate|body|string(date-time) \| null|false|none|
|» modifiedSince|body|string(date-time) \| null|false|none|
|» showPersonalHiddenCategories|body|boolean|false|none|
|» statusCodes|body|[AlertStatusCodes](#schemaalertstatuscodes)|false|none|
|» teamId|body|string \| null|false|none|
|» textToSearch|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» statusCodes|0|
|» statusCodes|1|
|» statusCodes|2|
|» statusCodes|4|
|» statusCodes|8|
|» statusCodes|16|
|» statusCodes|32|

> Example responses

> 200 Response

```json
{
  "continuationToken": {
    "nextPartitionKey": "string",
    "nextRowKey": "string",
    "nextTableName": "string"
  },
  "hasMore": true,
  "results": [
    {
      "alertDeliveryStatus": {
        "statusCode": 0,
        "users": [
          {
            "statusCode": 0,
            "userId": "string"
          }
        ]
      },
      "annotations": [
        {
          "annotationType": 0,
          "id": "string",
          "text": "string",
          "timestamp": "1970-01-01T00:00:00Z",
          "userId": "string"
        }
      ],
      "categoryId": "string",
      "eventId": "string",
      "flags": 0,
      "historyDetailed": {
        "acknowledged": "1970-01-01T00:00:00Z",
        "acknowledgedgements": [
          "string"
        ],
        "closed": "1970-01-01T00:00:00Z",
        "closedBy": "string",
        "created": "1970-01-01T00:00:00Z",
        "historyEntries": [
          {
            "id": "string",
            "timestamp": "1970-01-01T00:00:00Z",
            "type": 0,
            "userId": "string"
          }
        ]
      },
      "id": "string",
      "lastModified": "1970-01-01T00:00:00Z",
      "requiredAcknowledgements": 0,
      "status": 0,
      "subscriptionId": "string",
      "teamId": "string",
      "text": "string",
      "title": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="gets-alerts-paged-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a paged result with found alerts and continuation token if more alerts are in the database.|[OverviewAlertPagedResultsPublic](#schemaoverviewalertpagedresultspublic)|
|204|No Content|There were no alerts found for the specified filter.|None|
|400|Bad Request|Required parameters could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Authorization failed|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get Alert Report

> Code samples

```bash
curl https://example.com/alerts/report \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /alerts/report`

Returns information about the occurred alert volume in different time periods as well as information about the
response behaviour (amount of confirmed and unhandled alerts) of your team members.

<h3 id="get-alert-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|query|string|false|User ID of the user for whom you want a report.|

> Example responses

> 200 Response

```json
{
  "last24Hours": {
    "acked": 0,
    "closed": 0,
    "end": "1970-01-01T00:00:00Z",
    "lastModified": "1970-01-01T00:00:00Z",
    "start": "1970-01-01T00:00:00Z",
    "unhandled": 0
  },
  "subscriptionId": "string",
  "teamCurrentDuty": {
    "acked": 0,
    "closed": 0,
    "end": "1970-01-01T00:00:00Z",
    "lastModified": "1970-01-01T00:00:00Z",
    "start": "1970-01-01T00:00:00Z",
    "unhandled": 0
  },
  "teamId": "string",
  "teamLastDuty": {
    "acked": 0,
    "closed": 0,
    "end": "1970-01-01T00:00:00Z",
    "lastModified": "1970-01-01T00:00:00Z",
    "start": "1970-01-01T00:00:00Z",
    "unhandled": 0
  },
  "userId": "string",
  "userLastDutyChange": {
    "acked": 0,
    "closed": 0,
    "end": "1970-01-01T00:00:00Z",
    "lastModified": "1970-01-01T00:00:00Z",
    "start": "1970-01-01T00:00:00Z",
    "unhandled": 0
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-alert-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AlertReport](#schemaalertreport)|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Queue undo of multiple acknowledgments.

> Code samples

```bash
curl https://example.com/alerts/undoAcknowledgeMultiple \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alertIds": [
      "string"
    ],
    "description": "string",
    "userId": "string"
  }'
```

`POST /alerts/undoAcknowledgeMultiple`

This method tries to undo the acknowledgement of multiple alerts via a queue. The operation is handled in the background.

> Body parameter

```json
{
  "alertIds": [
    "string"
  ],
  "description": "string",
  "userId": "string"
}
```

<h3 id="queue-undo-of-multiple-acknowledgments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChangeAlertStatusMultipleInfo](#schemachangealertstatusmultipleinfo)|false|Configure which user should be undone for which alerts.|
|» alertIds|body|[string]|false|none|
|» description|body|string \| null|false|none|
|» userId|body|string \| null|false|none|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="queue-undo-of-multiple-acknowledgments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Withdraw closure of multiple alerts

> Code samples

```bash
curl https://example.com/alerts/undoCloseMultiple \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alertIds": [
      "string"
    ],
    "description": "string",
    "userId": "string"
  }'
```

`POST /alerts/undoCloseMultiple`

This method tries to undo multiple alert closes. The operation is handled in the background.

> Body parameter

```json
{
  "alertIds": [
    "string"
  ],
  "description": "string",
  "userId": "string"
}
```

<h3 id="withdraw-closure-of-multiple-alerts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChangeAlertStatusMultipleInfo](#schemachangealertstatusmultipleinfo)|false|none|
|» alertIds|body|[string]|false|none|
|» description|body|string \| null|false|none|
|» userId|body|string \| null|false|none|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="withdraw-closure-of-multiple-alerts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get Alert

> Code samples

```bash
curl https://example.com/alerts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /alerts/{alertId}`

Gets an alert by id.

<h3 id="get-alert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertId|path|string|true|Id of the requested Alert.|

> Example responses

> 200 Response

```json
{
  "annotations": [
    {
      "annotationType": 0,
      "id": "string",
      "text": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "userId": "string"
    }
  ],
  "attachments": [
    {
      "content": "string",
      "contentType": "string",
      "encoding": 0,
      "id": "string",
      "name": "string"
    }
  ],
  "category": "string",
  "categoryId": "string",
  "eventId": "string",
  "eventSourceId": "string",
  "eventSourceType": 0,
  "flags": 0,
  "history": {
    "acknowledged": "1970-01-01T00:00:00Z",
    "acknowledgedgements": [
      "string"
    ],
    "closed": "1970-01-01T00:00:00Z",
    "closedBy": "string",
    "created": "1970-01-01T00:00:00Z",
    "historyEntries": [
      {
        "id": "string",
        "timestamp": "1970-01-01T00:00:00Z",
        "type": 0,
        "userId": "string"
      }
    ]
  },
  "id": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "parameters": [
    {
      "name": "string",
      "order": 0,
      "type": 0,
      "value": "string"
    }
  ],
  "severity": 0,
  "status": 0,
  "subscriptionId": "string",
  "teamId": "string",
  "text": "string",
  "title": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-alert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AlertInfo](#schemaalertinfo)|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Acknowledge an alert

> Code samples

```bash
curl https://example.com/alerts/string/acknowledge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "userId": "string"
  }'
```

`POST /alerts/{alertId}/acknowledge`

> Body parameter

```json
{
  "description": "string",
  "userId": "string"
}
```

<h3 id="acknowledge-an-alert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertId|path|string|true|Id to acknowledge an alert.|
|body|body|[ChangeAlertStatusInfo](#schemachangealertstatusinfo)|false|none|
|» description|body|string \| null|false|none|
|» userId|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "annotations": [
    {
      "annotationType": 0,
      "id": "string",
      "text": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "userId": "string"
    }
  ],
  "attachments": [
    {
      "content": "string",
      "contentType": "string",
      "encoding": 0,
      "id": "string",
      "name": "string"
    }
  ],
  "category": "string",
  "categoryId": "string",
  "eventId": "string",
  "eventSourceId": "string",
  "eventSourceType": 0,
  "flags": 0,
  "history": {
    "acknowledged": "1970-01-01T00:00:00Z",
    "acknowledgedgements": [
      "string"
    ],
    "closed": "1970-01-01T00:00:00Z",
    "closedBy": "string",
    "created": "1970-01-01T00:00:00Z",
    "historyEntries": [
      {
        "id": "string",
        "timestamp": "1970-01-01T00:00:00Z",
        "type": 0,
        "userId": "string"
      }
    ]
  },
  "id": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "parameters": [
    {
      "name": "string",
      "order": 0,
      "type": 0,
      "value": "string"
    }
  ],
  "severity": 0,
  "status": 0,
  "subscriptionId": "string",
  "teamId": "string",
  "text": "string",
  "title": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="acknowledge-an-alert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AlertInfo](#schemaalertinfo)|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|No alert with id was found.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|409|Conflict|Alert can't be acknowledged because it is against the defined alert lifecycle.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Annotate Alert

> Code samples

```bash
curl https://example.com/alerts/string/annotate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotationType": 0,
    "id": "string",
    "text": "string",
    "timestamp": "1970-01-01T00:00:00Z",
    "userId": "string"
  }'
```

`POST /alerts/{alertId}/annotate`

Annotates an alert by given Annotation Info.

> Body parameter

```json
{
  "annotationType": 0,
  "id": "string",
  "text": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "userId": "string"
}
```

<h3 id="annotate-alert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertId|path|string|true|Id of the alert to annotate.|
|body|body|[AlertAnnotationInfo](#schemaalertannotationinfo)|false|Annotation Information.|
|» annotationType|body|integer(int32)|false|none|
|» id|body|string \| null|false|none|
|» text|body|string \| null|false|none|
|» timestamp|body|string(date-time)|false|none|
|» userId|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "annotationType": 0,
  "id": "string",
  "text": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "userId": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="annotate-alert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AlertAnnotationInfo](#schemaalertannotationinfo)|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get annotations of an alert

> Code samples

```bash
curl https://example.com/alerts/string/annotations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /alerts/{alertId}/annotations`

Get annotations of an alert by id.

<h3 id="get-annotations-of-an-alert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertId|path|string|true|Id of the requested Alert.|

> Example responses

> 200 Response

```json
[
  {
    "annotationType": 0,
    "id": "string",
    "text": "string",
    "timestamp": "1970-01-01T00:00:00Z",
    "userId": "string"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-annotations-of-an-alert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|204|No Content|No annotations were found for the alert.|None|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="get-annotations-of-an-alert-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AlertAnnotationInfo](#schemaalertannotationinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get attachments of an alert

> Code samples

```bash
curl https://example.com/alerts/string/attachments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /alerts/{alertId}/attachments`

Get attachments of an alert by id.

<h3 id="get-attachments-of-an-alert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertId|path|string|true|Id of the requested Alert.|

> Example responses

> 200 Response

```json
[
  {
    "contentType": "string",
    "id": "string",
    "name": "string"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-attachments-of-an-alert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="get-attachments-of-an-alert-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AlertAttachmentInfo](#schemaalertattachmentinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Gets a specified attachment of a specified alert.

> Code samples

```bash
curl https://example.com/alerts/string/attachments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /alerts/{alertId}/attachments/{attachmentId}`

<h3 id="gets-a-specified-attachment-of-a-specified-alert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertId|path|string|true|Id of the alert that contains the wanted attachment.|
|attachmentId|path|string|true|Id of the attachment, that you want to retrieve.|
|width|query|integer(int32)|false|Optional parameter defining the wanted width of the picture that is retrieved.|
|height|query|integer(int32)|false|Optional parameter defining the wanted height of the picture that is retrieved.|
|scale|query|boolean|false|Optional parameter defining whether it's wanted to scale the retrieved image. Default is set to<br>true.|

> Example responses

> 200 Response

```json
"string"
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="gets-a-specified-attachment-of-a-specified-alert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the attachment image with additional meta information.|Inline|
|204|No Content|The image of the attachment was not uploaded yet.|None|
|400|Bad Request|A passed parameter was either empty or invalid.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Authorization failed.|None|
|404|Not Found|The attachment image was not found.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Close an alert

> Code samples

```bash
curl https://example.com/alerts/string/close \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "userId": "string"
  }'
```

`POST /alerts/{alertId}/close`

> Body parameter

```json
{
  "description": "string",
  "userId": "string"
}
```

<h3 id="close-an-alert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertId|path|string|true|Id to acknowledge an alert.|
|body|body|[ChangeAlertStatusInfo](#schemachangealertstatusinfo)|false|none|
|» description|body|string \| null|false|none|
|» userId|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "annotations": [
    {
      "annotationType": 0,
      "id": "string",
      "text": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "userId": "string"
    }
  ],
  "attachments": [
    {
      "content": "string",
      "contentType": "string",
      "encoding": 0,
      "id": "string",
      "name": "string"
    }
  ],
  "category": "string",
  "categoryId": "string",
  "eventId": "string",
  "eventSourceId": "string",
  "eventSourceType": 0,
  "flags": 0,
  "history": {
    "acknowledged": "1970-01-01T00:00:00Z",
    "acknowledgedgements": [
      "string"
    ],
    "closed": "1970-01-01T00:00:00Z",
    "closedBy": "string",
    "created": "1970-01-01T00:00:00Z",
    "historyEntries": [
      {
        "id": "string",
        "timestamp": "1970-01-01T00:00:00Z",
        "type": 0,
        "userId": "string"
      }
    ]
  },
  "id": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "parameters": [
    {
      "name": "string",
      "order": 0,
      "type": 0,
      "value": "string"
    }
  ],
  "severity": 0,
  "status": 0,
  "subscriptionId": "string",
  "teamId": "string",
  "text": "string",
  "title": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="close-an-alert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AlertInfo](#schemaalertinfo)|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|No alert with id was found.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|409|Conflict|Alert can't be closed because it is against the defined alert lifecycle.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get alert notifications

> Code samples

```bash
curl https://example.com/alerts/string/notifications \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /alerts/{alertId}/notifications`

Get notifications of all users by alert id.

<h3 id="get-alert-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertId|path|string|true|Id of the requested Alert.|

> Example responses

> 200 Response

```json
[
  {
    "address": "string",
    "channelType": 0,
    "deviceName": "string",
    "lastUpdate": "1970-01-01T00:00:00Z",
    "messageStatus": 0,
    "userId": "string",
    "userStatus": 0
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-alert-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="get-alert-notifications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AlertNotificationInfo](#schemaalertnotificationinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get an overview alert.

> Code samples

```bash
curl https://example.com/alerts/string/overview \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /alerts/{alertId}/overview`

Get overview alert by id.

<h3 id="get-an-overview-alert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertId|path|string|true|Id of the requested Alert.|

> Example responses

> 200 Response

```json
{
  "alertDeliveryStatus": {
    "statusCode": 0,
    "users": [
      {
        "statusCode": 0,
        "userId": "string"
      }
    ]
  },
  "annotations": [
    {
      "annotationType": 0,
      "id": "string",
      "text": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "userId": "string"
    }
  ],
  "categoryId": "string",
  "eventId": "string",
  "flags": 0,
  "historyDetailed": {
    "acknowledged": "1970-01-01T00:00:00Z",
    "acknowledgedgements": [
      "string"
    ],
    "closed": "1970-01-01T00:00:00Z",
    "closedBy": "string",
    "created": "1970-01-01T00:00:00Z",
    "historyEntries": [
      {
        "id": "string",
        "timestamp": "1970-01-01T00:00:00Z",
        "type": 0,
        "userId": "string"
      }
    ]
  },
  "id": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "requiredAcknowledgements": 0,
  "status": 0,
  "subscriptionId": "string",
  "teamId": "string",
  "text": "string",
  "title": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-an-overview-alert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns alert with all information attached.|[OverviewAlert](#schemaoverviewalert)|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Undo the acknowledgement of an alert.

> Code samples

```bash
curl https://example.com/alerts/string/undoAcknowledge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "userId": "string"
  }'
```

`POST /alerts/{alertId}/undoAcknowledge`

This method tries to undo an alert acknowledgement.

> Body parameter

```json
{
  "description": "string",
  "userId": "string"
}
```

<h3 id="undo-the-acknowledgement-of-an-alert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertId|path|string|true|none|
|body|body|[ChangeAlertStatusInfo](#schemachangealertstatusinfo)|false|none|
|» description|body|string \| null|false|none|
|» userId|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "alertDeliveryStatus": {
    "statusCode": 0,
    "users": [
      {
        "statusCode": 0,
        "userId": "string"
      }
    ]
  },
  "annotations": [
    {
      "annotationType": 0,
      "id": "string",
      "text": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "userId": "string"
    }
  ],
  "categoryId": "string",
  "eventId": "string",
  "flags": 0,
  "historyDetailed": {
    "acknowledged": "1970-01-01T00:00:00Z",
    "acknowledgedgements": [
      "string"
    ],
    "closed": "1970-01-01T00:00:00Z",
    "closedBy": "string",
    "created": "1970-01-01T00:00:00Z",
    "historyEntries": [
      {
        "id": "string",
        "timestamp": "1970-01-01T00:00:00Z",
        "type": 0,
        "userId": "string"
      }
    ]
  },
  "id": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "requiredAcknowledgements": 0,
  "status": 0,
  "subscriptionId": "string",
  "teamId": "string",
  "text": "string",
  "title": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="undo-the-acknowledgement-of-an-alert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns updated alert.|[OverviewAlert](#schemaoverviewalert)|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|User is not allowed to undo the acknowledgement.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Undo the closure of an alert.

> Code samples

```bash
curl https://example.com/alerts/string/undoClose \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "userId": "string"
  }'
```

`POST /alerts/{alertId}/undoClose`

This method tries to undo an alert close.

> Body parameter

```json
{
  "description": "string",
  "userId": "string"
}
```

<h3 id="undo-the-closure-of-an-alert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertId|path|string|true|none|
|body|body|[ChangeAlertStatusInfo](#schemachangealertstatusinfo)|false|none|
|» description|body|string \| null|false|none|
|» userId|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "alertDeliveryStatus": {
    "statusCode": 0,
    "users": [
      {
        "statusCode": 0,
        "userId": "string"
      }
    ]
  },
  "annotations": [
    {
      "annotationType": 0,
      "id": "string",
      "text": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "userId": "string"
    }
  ],
  "categoryId": "string",
  "eventId": "string",
  "flags": 0,
  "historyDetailed": {
    "acknowledged": "1970-01-01T00:00:00Z",
    "acknowledgedgements": [
      "string"
    ],
    "closed": "1970-01-01T00:00:00Z",
    "closedBy": "string",
    "created": "1970-01-01T00:00:00Z",
    "historyEntries": [
      {
        "id": "string",
        "timestamp": "1970-01-01T00:00:00Z",
        "type": 0,
        "userId": "string"
      }
    ]
  },
  "id": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "requiredAcknowledgements": 0,
  "status": 0,
  "subscriptionId": "string",
  "teamId": "string",
  "text": "string",
  "title": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="undo-the-closure-of-an-alert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[OverviewAlert](#schemaoverviewalert)|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|User is not allowed to undo the close.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

<h1 id="signl4-api-categories">Categories</h1>

Provides access to services and system categories in a SIGNL4 team.

## Gets the names of all alert category images. You can get the image by going to account.signl4.com/images/alerts/categoryImageName.svg

> Code samples

```bash
curl https://example.com/categories/images \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /categories/images`

> Example responses

> 200 Response

```json
[
  "string"
]
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="gets-the-names-of-all-alert-category-images-you-can-get-the-image-by-going-to-accountsignl4comimagesalertscategoryimagenamesvg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the alert categories.|Inline|
|204|No Content|Request was canceled.|None|
|403|Forbidden|If you have no permission to access the resource.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|No categories were found.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="gets-the-names-of-all-alert-category-images-you-can-get-the-image-by-going-to-accountsignl4comimagesalertscategoryimagenamesvg-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get all categories

> Code samples

```bash
curl https://example.com/categories/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /categories/{teamId}`

Sample Request:
            
    GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7

<h3 id="get-all-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|ID of the team the categories belong to|

> Example responses

> 200 Response

```json
[
  {
    "augmentations": [
      {
        "enabled": true,
        "name": "string",
        "type": 0,
        "value": "string"
      }
    ],
    "color": "string",
    "id": "string",
    "imageName": "string",
    "isDefault": true,
    "keywordMatching": 0,
    "keywords": [
      "string"
    ],
    "lastMatch": "1970-01-01T00:00:00Z",
    "name": "string",
    "options": 0,
    "order": 0
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-all-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the category infos|Inline|
|400|Bad Request|If the input is not valid|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|If you have no permission to access this resource|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|If the resource was not found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|If any server side errors occur|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="get-all-categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CategoryInfo](#schemacategoryinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Create a new category

> Code samples

```bash
curl https://example.com/categories/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "augmentations": [
      {
        "enabled": true,
        "name": "string",
        "type": 0,
        "value": "string"
      }
    ],
    "color": "string",
    "id": "string",
    "imageName": "string",
    "keywordMatching": 0,
    "keywords": [
      "string"
    ],
    "lastMatch": "1970-01-01T00:00:00Z",
    "name": "string",
    "options": 0,
    "order": 0
  }'
```

`POST /categories/{teamId}`

Sample Request:
            
    POST /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7
    {
        "name": "Water",
        "imageName": "water.svg",
        "color": "#0000cc",
        "keywordMatching": "Any",
        "keywords": [
            {
                "value": "H2O"
            },
            {
                "value": "Water"
            }
        ]
    }

> Body parameter

```json
{
  "augmentations": [
    {
      "enabled": true,
      "name": "string",
      "type": 0,
      "value": "string"
    }
  ],
  "color": "string",
  "id": "string",
  "imageName": "string",
  "keywordMatching": 0,
  "keywords": [
    "string"
  ],
  "lastMatch": "1970-01-01T00:00:00Z",
  "name": "string",
  "options": 0,
  "order": 0
}
```

<h3 id="create-a-new-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|ID of the team the category belongs to|
|body|body|[CategoryInfo](#schemacategoryinfo)|false|Category to be created|
|» augmentations|body|[[CategoryAugmentation](#schemacategoryaugmentation)]|false|none|
|» color|body|string \| null|false|none|
|» id|body|string \| null|false|none|
|» imageName|body|string \| null|false|none|
|» keywordMatching|body|[KeywordMatchingType](#schemakeywordmatchingtype)|false|none|
|» keywords|body|[string]|false|none|
|» lastMatch|body|string(date-time) \| null|false|none|
|» name|body|string \| null|false|none|
|» options|body|[CategoryInfoOptions](#schemacategoryinfooptions)|false|none|
|» order|body|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» keywordMatching|0|
|» keywordMatching|1|
|» options|0|
|» options|1|
|» options|2|
|» options|4|
|» options|8|

> Example responses

> 201 Response

```json
{
  "augmentations": [
    {
      "enabled": true,
      "name": "string",
      "type": 0,
      "value": "string"
    }
  ],
  "color": "string",
  "id": "string",
  "imageName": "string",
  "isDefault": true,
  "keywordMatching": 0,
  "keywords": [
    "string"
  ],
  "lastMatch": "1970-01-01T00:00:00Z",
  "name": "string",
  "options": 0,
  "order": 0
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="create-a-new-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns the newly created category|[CategoryInfo](#schemacategoryinfo)|
|400|Bad Request|If the input is not valid|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|If you have no permission to access this resource|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|If the resource was not found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|If any server side errors occur|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get metrics for all categories

> Code samples

```bash
curl https://example.com/categories/string/metrics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /categories/{teamId}/metrics`

Sample Request:
            
    GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/metrics

<h3 id="get-metrics-for-all-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|ID of the team the categories belongs to|

> Example responses

> 200 Response

```json
[
  {
    "categoryId": "string",
    "last24Hours": 0,
    "lastAlert": "1970-01-01T00:00:00Z",
    "subscriberCount": 0
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-metrics-for-all-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of category metrics|Inline|
|400|Bad Request|If the input is not valid|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|If you have no permission to access this resource|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|If the resource was not found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|If any server side errors occur|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="get-metrics-for-all-categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CategoryMetrics](#schemacategorymetrics)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get a specific category

> Code samples

```bash
curl https://example.com/categories/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /categories/{teamId}/{categoryId}`

Sample Request:
            
    GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e

<h3 id="get-a-specific-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|ID of the team the category belongs to|
|categoryId|path|string|true|ID of the category to get|

> Example responses

> 200 Response

```json
{
  "augmentations": [
    {
      "enabled": true,
      "name": "string",
      "type": 0,
      "value": "string"
    }
  ],
  "color": "string",
  "id": "string",
  "imageName": "string",
  "isDefault": true,
  "keywordMatching": 0,
  "keywords": [
    "string"
  ],
  "lastMatch": "1970-01-01T00:00:00Z",
  "name": "string",
  "options": 0,
  "order": 0
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-a-specific-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the category details|[CategoryInfo](#schemacategoryinfo)|
|400|Bad Request|If the input is not valid|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|If you have no permission to access this resource|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|If the resource was not found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|If any server side errors occur|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Update an existing category

> Code samples

```bash
curl https://example.com/categories/string/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "augmentations": [
      {
        "enabled": true,
        "name": "string",
        "type": 0,
        "value": "string"
      }
    ],
    "color": "string",
    "id": "string",
    "imageName": "string",
    "keywordMatching": 0,
    "keywords": [
      "string"
    ],
    "lastMatch": "1970-01-01T00:00:00Z",
    "name": "string",
    "options": 0,
    "order": 0
  }'
```

`PUT /categories/{teamId}/{categoryId}`

Sample Request:
            
    PUT /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e
    {
        "name": "Water-Updated",
        "imageName": "water.svg",
        "color": "#0000cc",
        "keywordMatching": "All",
        "keywords": [
            {
                "value": "H2O"
            },
            {
                "value": "Water"
            },
            {
                "value": "Wet"
            }
        ]
    }

> Body parameter

```json
{
  "augmentations": [
    {
      "enabled": true,
      "name": "string",
      "type": 0,
      "value": "string"
    }
  ],
  "color": "string",
  "id": "string",
  "imageName": "string",
  "keywordMatching": 0,
  "keywords": [
    "string"
  ],
  "lastMatch": "1970-01-01T00:00:00Z",
  "name": "string",
  "options": 0,
  "order": 0
}
```

<h3 id="update-an-existing-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|ID of the team the category belongs to|
|categoryId|path|string|true|none|
|body|body|[CategoryInfo](#schemacategoryinfo)|false|Category to be updated|
|» augmentations|body|[[CategoryAugmentation](#schemacategoryaugmentation)]|false|none|
|» color|body|string \| null|false|none|
|» id|body|string \| null|false|none|
|» imageName|body|string \| null|false|none|
|» keywordMatching|body|[KeywordMatchingType](#schemakeywordmatchingtype)|false|none|
|» keywords|body|[string]|false|none|
|» lastMatch|body|string(date-time) \| null|false|none|
|» name|body|string \| null|false|none|
|» options|body|[CategoryInfoOptions](#schemacategoryinfooptions)|false|none|
|» order|body|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» keywordMatching|0|
|» keywordMatching|1|
|» options|0|
|» options|1|
|» options|2|
|» options|4|
|» options|8|

> Example responses

> 200 Response

```json
{
  "augmentations": [
    {
      "enabled": true,
      "name": "string",
      "type": 0,
      "value": "string"
    }
  ],
  "color": "string",
  "id": "string",
  "imageName": "string",
  "isDefault": true,
  "keywordMatching": 0,
  "keywords": [
    "string"
  ],
  "lastMatch": "1970-01-01T00:00:00Z",
  "name": "string",
  "options": 0,
  "order": 0
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="update-an-existing-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the updated category|[CategoryInfo](#schemacategoryinfo)|
|400|Bad Request|If the input is not valid|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|If you have no permission to access this resource|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|If the resource was not found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|If any server side errors occur|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Delete an existing category

> Code samples

```bash
curl https://example.com/categories/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /categories/{teamId}/{categoryId}`

Sample Request:
            
    DELETE /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e

<h3 id="delete-an-existing-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|ID of the team the category belongs to|
|categoryId|path|string|true|ID of the category to delete|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="delete-an-existing-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|If the delete operation was successful|None|
|204|No Content|Success|None|
|400|Bad Request|If the input is not valid|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|If you have no permission to access this resource|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|If the resource was not found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|If any server side errors occur|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get metrics for a specific category

> Code samples

```bash
curl https://example.com/categories/string/string/metrics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /categories/{teamId}/{categoryId}/metrics`

Sample Request:
            
    GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e/metrics

<h3 id="get-metrics-for-a-specific-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|ID of the team the category belongs to|
|categoryId|path|string|true|ID of the category to get|

> Example responses

> 200 Response

```json
{
  "categoryId": "string",
  "last24Hours": 0,
  "lastAlert": "1970-01-01T00:00:00Z",
  "subscriberCount": 0
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-metrics-for-a-specific-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the category metrics|[CategoryMetrics](#schemacategorymetrics)|
|400|Bad Request|If the input is not valid|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|If you have no permission to access this resource|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|If the resource was not found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|If any server side errors occur|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get category subscriptions

> Code samples

```bash
curl https://example.com/categories/string/string/subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /categories/{teamId}/{categoryId}/subscriptions`

Sample Request:
            
    GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e/subscriptions
    {
    }

<h3 id="get-category-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|ID of the team the category belongs to|
|categoryId|path|string|true|Category to get subscriptions for|

> Example responses

> 200 Response

```json
[
  {
    "status": 0,
    "userId": "string"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-category-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the category subscriptions|Inline|
|400|Bad Request|If the input is not valid|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|If you have no permission to access this resource|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|If the resource was not found|None|
|500|Internal Server Error|If any server side errors occur|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="get-category-subscriptions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CategorySubscriptionInfo](#schemacategorysubscriptioninfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Set category subscriptions

> Code samples

```bash
curl https://example.com/categories/string/string/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "status": 0,
      "userId": "string"
    }
  ]'
```

`POST /categories/{teamId}/{categoryId}/subscriptions`

Sample Request:
            
    POST /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e/subscriptions
    {
    }

> Body parameter

```json
[
  {
    "status": 0,
    "userId": "string"
  }
]
```

<h3 id="set-category-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|ID of the team the category belongs to|
|categoryId|path|string|true|Category to be updated|
|body|body|[[CategorySubscriptionInfo](#schemacategorysubscriptioninfo)]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "status": 0,
    "userId": "string"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="set-category-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the updated category subscriptions|Inline|
|400|Bad Request|If the input is not valid|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|If you have no permission to access this resource|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|If the resource was not found|None|
|500|Internal Server Error|If any server side errors occur|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="set-category-subscriptions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CategorySubscriptionInfo](#schemacategorysubscriptioninfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

<h1 id="signl4-api-duties">Duties</h1>

Provide access to duty information and the ability to create, delete and update them.

## Get Information about downloadable reports

> Code samples

```bash
curl https://example.com/teams/string/dutyReports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teams/{teamId}/dutyReports`

<h3 id="get-information-about-downloadable-reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|ID of team you want to get the duty report file infos for.|

> Example responses

> 200 Response

```json
[
  {}
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-information-about-downloadable-reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="get-information-about-downloadable-reports-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DutyAuditReportFileInfo](#schemadutyauditreportfileinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Download duty report with a specific fileName

> Code samples

```bash
curl https://example.com/teams/string/dutyReports/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teams/{teamId}/dutyReports/{fileName}`

<h3 id="download-duty-report-with-a-specific-filename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|ID of team you want to download the duty report for.|
|fileName|path|string|true|Filename of the csv to download.|

> Example responses

> 200 Response

```json
"string"
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="download-duty-report-with-a-specific-filename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get duty assistant info for a team

> Code samples

```bash
curl https://example.com/teams/string/dutysummary \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teams/{teamId}/dutysummary`

<h3 id="get-duty-assistant-info-for-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|ID of the team the duty belongs to.|
|lastTwoDuties|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "dutyAssistEnabled": true,
  "dutySummaries": [
    {
      "dutyEnd": "1970-01-01T00:00:00Z",
      "dutyId": "string",
      "dutyStart": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-duty-assistant-info-for-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TeamDutySummaryInfo](#schemateamdutysummaryinfo)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Returns information about all duties that belong to the team.

> Code samples

```bash
curl https://example.com/teams/string/schedules \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teams/{teamId}/schedules`

<h3 id="returns-information-about-all-duties-that-belong-to-the-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Id of the team the schedules user belongs to|
|UserId|query|string|false|none|
|MinDate|query|string(date-time)|false|none|
|Limit|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "end": "1970-01-01T00:00:00Z",
    "id": "string",
    "options": 0,
    "start": "1970-01-01T00:00:00Z",
    "userId": "string"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="returns-information-about-all-duties-that-belong-to-the-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="returns-information-about-all-duties-that-belong-to-the-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ScheduleInfo](#schemascheduleinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Create/Update given duty schedule.

> Code samples

```bash
curl https://example.com/teams/string/schedules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "end": "1970-01-01T00:00:00Z",
    "id": "string",
    "options": 0,
    "start": "1970-01-01T00:00:00Z",
    "userId": "string"
  }'
```

`POST /teams/{teamId}/schedules`

> Body parameter

```json
{
  "end": "1970-01-01T00:00:00Z",
  "id": "string",
  "options": 0,
  "start": "1970-01-01T00:00:00Z",
  "userId": "string"
}
```

<h3 id="createupdate-given-duty-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Id of the team the duty is to be assigned to.|
|body|body|[ScheduleInfo](#schemascheduleinfo)|false|information about the duty schedule to be created|
|» end|body|string(date-time)|false|none|
|» id|body|string \| null|false|none|
|» options|body|integer(int32)|false|none|
|» start|body|string(date-time)|false|none|
|» userId|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "end": "1970-01-01T00:00:00Z",
  "id": "string",
  "options": 0,
  "start": "1970-01-01T00:00:00Z",
  "userId": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="createupdate-given-duty-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScheduleInfo](#schemascheduleinfo)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|409|Conflict|Conflict|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Delete duty schedules in range

> Code samples

```bash
curl https://example.com/teams/string/schedules/deleteRange \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "from": "1970-01-01T00:00:00Z",
    "to": "1970-01-01T00:00:00Z"
  }'
```

`POST /teams/{teamId}/schedules/deleteRange`

> Body parameter

```json
{
  "from": "1970-01-01T00:00:00Z",
  "to": "1970-01-01T00:00:00Z"
}
```

<h3 id="delete-duty-schedules-in-range-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Team ID you want to delete|
|body|body|[DeleteRangeInfo](#schemadeleterangeinfo)|false|Information with date range to delete from to|
|» from|body|string(date-time)|false|none|
|» to|body|string(date-time)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "end": "1970-01-01T00:00:00Z",
    "id": "string",
    "options": 0,
    "start": "1970-01-01T00:00:00Z",
    "userId": "string"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="delete-duty-schedules-in-range-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|409|Conflict|Conflict|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="delete-duty-schedules-in-range-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ScheduleInfo](#schemascheduleinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Save multiple schedules. It is possible to override existing schedules if you wish

> Code samples

```bash
curl https://example.com/teams/string/schedules/multiple \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "end": "1970-01-01T00:00:00Z",
      "id": "string",
      "options": 0,
      "start": "1970-01-01T00:00:00Z",
      "userId": "string"
    }
  ]'
```

`POST /teams/{teamId}/schedules/multiple`

> Body parameter

```json
[
  {
    "end": "1970-01-01T00:00:00Z",
    "id": "string",
    "options": 0,
    "start": "1970-01-01T00:00:00Z",
    "userId": "string"
  }
]
```

<h3 id="save-multiple-schedules-it-is-possible-to-override-existing-schedules-if-you-wish-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Team ID to set|
|overrideExisting|query|boolean|false|Override or cut existing schedules if set to true.|
|body|body|[[ScheduleInfo](#schemascheduleinfo)]|false|List of schedules to save|

> Example responses

> 200 Response

```json
[
  {
    "end": "1970-01-01T00:00:00Z",
    "id": "string",
    "options": 0,
    "start": "1970-01-01T00:00:00Z",
    "userId": "string"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="save-multiple-schedules-it-is-possible-to-override-existing-schedules-if-you-wish-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|409|Conflict|Conflict|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="save-multiple-schedules-it-is-possible-to-override-existing-schedules-if-you-wish-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ScheduleInfo](#schemascheduleinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Delete a specific duty.

> Code samples

```bash
curl https://example.com/teams/string/schedules/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /teams/{teamId}/schedules/{dutyId}`

<h3 id="delete-a-specific-duty-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|ID of the team the duty belongs to.|
|dutyId|path|string|true|ID of the duty to be deleted.|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="delete-a-specific-duty-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Returns information of the duty schedule with the specified Id.

> Code samples

```bash
curl https://example.com/teams/string/schedules/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teams/{teamId}/schedules/{scheduleId}`

<h3 id="returns-information-of-the-duty-schedule-with-the-specified-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Id of the team the duty belongs to|
|scheduleId|path|string|true|Id of the requested duty schedule.|

> Example responses

> 200 Response

```json
{
  "end": "1970-01-01T00:00:00Z",
  "id": "string",
  "options": 0,
  "start": "1970-01-01T00:00:00Z",
  "userId": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="returns-information-of-the-duty-schedule-with-the-specified-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScheduleInfo](#schemascheduleinfo)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

<h1 id="signl4-api-events">Events</h1>

Provide access to all informations about events and their parameters.

## Get overview event paged.

> Code samples

```bash
curl https://example.com/events/paged \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "continuationToken": {
      "nextPartitionKey": "string",
      "nextRowKey": "string",
      "nextTableName": "string"
    },
    "eventStatusCode": 0,
    "maxCreationDate": "1970-01-01T00:00:00Z",
    "minCreationDate": "1970-01-01T00:00:00Z",
    "modifiedSince": "1970-01-01T00:00:00Z",
    "teamId": "string",
    "textToSearch": "string"
  }'
```

`POST /events/paged`

Get overview event paged. If there are more results, you also get a continuation token which you can add to the event filter.

> Body parameter

```json
{
  "continuationToken": {
    "nextPartitionKey": "string",
    "nextRowKey": "string",
    "nextTableName": "string"
  },
  "eventStatusCode": 0,
  "maxCreationDate": "1970-01-01T00:00:00Z",
  "minCreationDate": "1970-01-01T00:00:00Z",
  "modifiedSince": "1970-01-01T00:00:00Z",
  "teamId": "string",
  "textToSearch": "string"
}
```

<h3 id="get-overview-event-paged-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer(int32)|false|Defines the limit of retrieved alert details per request. 1 to 100 are allowed per request.<br>                 Number of alerts could be less if filtered but at least 1.|
|body|body|[EventFilter](#schemaeventfilter)|false|The filter defines which alerts are supposed to be retrieved.|
|» continuationToken|body|[PagedResultsPublicContinuationToken](#schemapagedresultspubliccontinuationtoken)|false|none|
|» eventStatusCode|body|[EventStatusCodes](#schemaeventstatuscodes)|false|none|
|» maxCreationDate|body|string(date-time) \| null|false|none|
|» minCreationDate|body|string(date-time) \| null|false|none|
|» modifiedSince|body|string(date-time) \| null|false|none|
|» teamId|body|string \| null|false|none|
|» textToSearch|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» eventStatusCode|0|
|» eventStatusCode|1|
|» eventStatusCode|2|
|» eventStatusCode|3|
|» eventStatusCode|4|
|» eventStatusCode|5|
|» eventStatusCode|6|
|» eventStatusCode|1000|

> Example responses

> 200 Response

```json
{
  "continuationToken": {
    "nextPartitionKey": "string",
    "nextRowKey": "string",
    "nextTableName": "string"
  },
  "hasMore": true,
  "results": [
    {
      "acknowledgedAlerts": [
        "string"
      ],
      "alertId": "string",
      "categoryId": "string",
      "closedAlerts": [
        "string"
      ],
      "creationTime": "1970-01-01T00:00:00Z",
      "eventSourceType": 0,
      "eventStatus": 0,
      "id": "string",
      "lastModified": "1970-01-01T00:00:00Z",
      "severity": 0,
      "teamId": "string",
      "text": "string",
      "title": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-overview-event-paged-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns paged result with found events and continuation token, if database holds more events.|[OverviewEventPagedResultsPublic](#schemaovervieweventpagedresultspublic)|
|204|No Content|No event could be found (with passed filter)|None|
|400|Bad Request|Required parameters could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get overview event

> Code samples

```bash
curl https://example.com/events/string/overview \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /events/{eventId}/overview`

Get overview event by id.

<h3 id="get-overview-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventId|path|string|true|Id of event to get.|

> Example responses

> 200 Response

```json
{
  "acknowledgedAlerts": [
    "string"
  ],
  "alertId": "string",
  "categoryId": "string",
  "closedAlerts": [
    "string"
  ],
  "creationTime": "1970-01-01T00:00:00Z",
  "eventSourceType": 0,
  "eventStatus": 0,
  "id": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "severity": 0,
  "teamId": "string",
  "text": "string",
  "title": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-overview-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns overview event with specific id.|[OverviewEvent](#schemaoverviewevent)|
|400|Bad Request|Required parameters could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Event with specified id could not be found.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get event parameters

> Code samples

```bash
curl https://example.com/events/string/parameters \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /events/{eventId}/parameters`

Get parameters of an event by id.

<h3 id="get-event-parameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventId|path|string|true|Event Id of the requested Alert.|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "order": 0,
    "type": 0,
    "value": "string"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-event-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="get-event-parameters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[EventParameterInfo](#schemaeventparameterinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

<h1 id="signl4-api-prepaid">Prepaid</h1>

Provides access to the prepaid balance and transactions

## Get your subscription's current prepaid balance.

> Code samples

```bash
curl https://example.com/prepaid/balance \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /prepaid/balance`

> Example responses

> 200 Response

```json
{
  "balance": 0,
  "latestTopUp": "1970-01-01T00:00:00Z",
  "pendingTransaction": true
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-your-subscriptions-current-prepaid-balance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PrepaidBalanceInfo](#schemaprepaidbalanceinfo)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get your subscription's current prepaid settings.

> Code samples

```bash
curl https://example.com/prepaid/settings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /prepaid/settings`

> Example responses

> 200 Response

```json
{
  "topUpAmount": 0,
  "topUpEnabled": true,
  "topUpLimit": 0
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-your-subscriptions-current-prepaid-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PrepaidSettingsInfo](#schemaprepaidsettingsinfo)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Update your subscription's current prepaid settings.

> Code samples

```bash
curl https://example.com/prepaid/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "topUpAmount": 0,
    "topUpEnabled": true,
    "topUpLimit": 0
  }'
```

`PUT /prepaid/settings`

> Body parameter

```json
{
  "topUpAmount": 0,
  "topUpEnabled": true,
  "topUpLimit": 0
}
```

<h3 id="update-your-subscriptions-current-prepaid-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PrepaidSettingsInfo](#schemaprepaidsettingsinfo)|false|Settings object containing the new values.|
|» topUpAmount|body|integer(int32)|false|none|
|» topUpEnabled|body|boolean|false|none|
|» topUpLimit|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "topUpAmount": 0,
  "topUpEnabled": true,
  "topUpLimit": 0
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="update-your-subscriptions-current-prepaid-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PrepaidSettingsInfo](#schemaprepaidsettingsinfo)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get your subscription's prepaid transactions.

> Code samples

```bash
curl https://example.com/prepaid/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /prepaid/transactions`

> Example responses

> 200 Response

```json
[
  {
    "autoTopUpId": "string",
    "created": "1970-01-01T00:00:00Z",
    "createdBy": "string",
    "credits": 0,
    "currency": "string",
    "modified": "1970-01-01T00:00:00Z",
    "packageCode": "string",
    "status": "string",
    "statusCode": 0,
    "subscriptionId": "string",
    "transactionId": "string"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-your-subscriptions-prepaid-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="get-your-subscriptions-prepaid-transactions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PrepaidTransactionInfo](#schemaprepaidtransactioninfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get a subscription's current prepaid balance.

> Code samples

```bash
curl https://example.com/subscriptions/string/prepaidBalance \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /subscriptions/{subscriptionId}/prepaidBalance`

<h3 id="get-a-subscriptions-current-prepaid-balance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "balance": 0,
  "latestTopUp": "1970-01-01T00:00:00Z",
  "pendingTransaction": true
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-a-subscriptions-current-prepaid-balance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PrepaidBalanceInfo](#schemaprepaidbalanceinfo)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get a subscription's current prepaid settings.

> Code samples

```bash
curl https://example.com/subscriptions/string/prepaidSettings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /subscriptions/{subscriptionId}/prepaidSettings`

<h3 id="get-a-subscriptions-current-prepaid-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "topUpAmount": 0,
  "topUpEnabled": true,
  "topUpLimit": 0
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-a-subscriptions-current-prepaid-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PrepaidSettingsInfo](#schemaprepaidsettingsinfo)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Update a subscription's current prepaid settings.

> Code samples

```bash
curl https://example.com/subscriptions/string/prepaidSettings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "topUpAmount": 0,
    "topUpEnabled": true,
    "topUpLimit": 0
  }'
```

`PUT /subscriptions/{subscriptionId}/prepaidSettings`

> Body parameter

```json
{
  "topUpAmount": 0,
  "topUpEnabled": true,
  "topUpLimit": 0
}
```

<h3 id="update-a-subscriptions-current-prepaid-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|ID of the subscription|
|body|body|[PrepaidSettingsInfo](#schemaprepaidsettingsinfo)|false|Settings object containing the new values.|
|» topUpAmount|body|integer(int32)|false|none|
|» topUpEnabled|body|boolean|false|none|
|» topUpLimit|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "topUpAmount": 0,
  "topUpEnabled": true,
  "topUpLimit": 0
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="update-a-subscriptions-current-prepaid-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PrepaidSettingsInfo](#schemaprepaidsettingsinfo)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get a subscription's prepaid transactions.

> Code samples

```bash
curl https://example.com/subscriptions/string/prepaidTransactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /subscriptions/{subscriptionId}/prepaidTransactions`

<h3 id="get-a-subscriptions-prepaid-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|ID of the subscription to get transactions for|

> Example responses

> 200 Response

```json
[
  {
    "autoTopUpId": "string",
    "created": "1970-01-01T00:00:00Z",
    "createdBy": "string",
    "credits": 0,
    "currency": "string",
    "modified": "1970-01-01T00:00:00Z",
    "packageCode": "string",
    "status": "string",
    "statusCode": 0,
    "subscriptionId": "string",
    "transactionId": "string"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-a-subscriptions-prepaid-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="get-a-subscriptions-prepaid-transactions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PrepaidTransactionInfo](#schemaprepaidtransactioninfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

<h1 id="signl4-api-scripts">Scripts</h1>

Provides access to apps that are available in SIGNL4 and e.g. allows adding an app to a SIGNL4 team.

## Returns all script instances of the SIGNL4 team

> Code samples

```bash
curl https://example.com/scripts/instances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scripts/instances`

Returns all script instances in the subscription.

<h3 id="returns-all-script-instances-of-the-signl4-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "config": null,
    "customScriptDescription": "string",
    "customScriptName": "string",
    "enabled": true,
    "eventPattern": null,
    "instanceId": "string",
    "lastModified": "1970-01-01T00:00:00Z",
    "runtimeInformation": {
      "status": 0,
      "statusMessage": "string"
    },
    "scriptId": "string",
    "scriptName": "string",
    "subscriptionId": "string",
    "teamId": "string"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="returns-all-script-instances-of-the-signl4-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="returns-all-script-instances-of-the-signl4-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ScriptInstanceDetails](#schemascriptinstancedetails)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Creates a new script instance in the in the SIGNL4 team.

> Code samples

```bash
curl https://example.com/scripts/instances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "config": null,
    "customScriptDescription": "string",
    "customScriptName": "string",
    "enabled": true,
    "eventPattern": null,
    "instanceId": "string",
    "lastModified": "1970-01-01T00:00:00Z",
    "runtimeInformation": {
      "status": 0,
      "statusMessage": "string"
    },
    "scriptId": "string",
    "scriptName": "string",
    "subscriptionId": "string",
    "teamId": "string"
  }'
```

`POST /scripts/instances`

Creates a new script instance of the script specified in the request body.

> Body parameter

```json
{
  "config": null,
  "customScriptDescription": "string",
  "customScriptName": "string",
  "enabled": true,
  "eventPattern": null,
  "instanceId": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "runtimeInformation": {
    "status": 0,
    "statusMessage": "string"
  },
  "scriptId": "string",
  "scriptName": "string",
  "subscriptionId": "string",
  "teamId": "string"
}
```

<h3 id="creates-a-new-script-instance-in-the-in-the-signl4-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ScriptInstanceDetails](#schemascriptinstancedetails)|false|Script instance to be created.|
|» config|body|object \| null|false|none|
|» customScriptDescription|body|string \| null|false|none|
|» customScriptName|body|string \| null|false|none|
|» enabled|body|boolean|false|none|
|» eventPattern|body|object \| null|false|none|
|» instanceId|body|string \| null|false|none|
|» lastModified|body|string(date-time) \| null|false|none|
|» runtimeInformation|body|[ScriptInstanceInfoRuntimeInformationModel](#schemascriptinstanceinforuntimeinformationmodel)|false|none|
|» scriptId|body|string \| null|false|none|
|» scriptName|body|string \| null|false|none|
|» subscriptionId|body|string \| null|false|none|
|» teamId|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "config": null,
  "customScriptDescription": "string",
  "customScriptName": "string",
  "enabled": true,
  "eventPattern": null,
  "instanceId": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "runtimeInformation": {
    "status": 0,
    "statusMessage": "string"
  },
  "scriptId": "string",
  "scriptName": "string",
  "subscriptionId": "string",
  "teamId": "string"
}
```

> 201 Response

```json
{
  "config": null,
  "customScriptDescription": "string",
  "customScriptName": "string",
  "enabled": true,
  "eventPattern": null,
  "instanceId": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "runtimeInformation": {
    "status": 0,
    "statusMessage": "string"
  },
  "scriptId": "string",
  "scriptName": "string",
  "subscriptionId": "string",
  "teamId": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="creates-a-new-script-instance-in-the-in-the-signl4-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Existing script instance was updated as specified in body.|[ScriptInstanceDetails](#schemascriptinstancedetails)|
|201|Created|New script instance was updated as specified in body.|[ScriptInstanceDetails](#schemascriptinstancedetails)|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|An internal error has occurred during instance creation.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Returns all information about a given script instance which includes its runtime status.

> Code samples

```bash
curl https://example.com/scripts/instances/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scripts/instances/{instanceId}`

Gets the script instance specified by the passed instance id.

<h3 id="returns-all-information-about-a-given-script-instance-which-includes-its-runtime-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|Instance Id of script instance to be returned.|

> Example responses

> 200 Response

```json
{
  "config": null,
  "customScriptDescription": "string",
  "customScriptName": "string",
  "enabled": true,
  "eventPattern": null,
  "instanceId": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "runtimeInformation": {
    "status": 0,
    "statusMessage": "string"
  },
  "scriptId": "string",
  "scriptName": "string",
  "subscriptionId": "string",
  "teamId": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="returns-all-information-about-a-given-script-instance-which-includes-its-runtime-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScriptInstanceDetails](#schemascriptinstancedetails)|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database or in memory.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Updates a given script instance, typically used for updating the configuration of a script.

> Code samples

```bash
curl https://example.com/scripts/instances/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "config": null,
    "customScriptDescription": "string",
    "customScriptName": "string",
    "enabled": true,
    "eventPattern": null,
    "instanceId": "string",
    "lastModified": "1970-01-01T00:00:00Z",
    "runtimeInformation": {
      "status": 0,
      "statusMessage": "string"
    },
    "scriptId": "string",
    "scriptName": "string",
    "subscriptionId": "string",
    "teamId": "string"
  }'
```

`PUT /scripts/instances/{instanceId}`

Updates the specified script instance.

> Body parameter

```json
{
  "config": null,
  "customScriptDescription": "string",
  "customScriptName": "string",
  "enabled": true,
  "eventPattern": null,
  "instanceId": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "runtimeInformation": {
    "status": 0,
    "statusMessage": "string"
  },
  "scriptId": "string",
  "scriptName": "string",
  "subscriptionId": "string",
  "teamId": "string"
}
```

<h3 id="updates-a-given-script-instance-typically-used-for-updating-the-configuration-of-a-script-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|InstanceId of the script to be updated.|
|body|body|[ScriptInstanceDetails](#schemascriptinstancedetails)|false|Script instance to be updated.|
|» config|body|object \| null|false|none|
|» customScriptDescription|body|string \| null|false|none|
|» customScriptName|body|string \| null|false|none|
|» enabled|body|boolean|false|none|
|» eventPattern|body|object \| null|false|none|
|» instanceId|body|string \| null|false|none|
|» lastModified|body|string(date-time) \| null|false|none|
|» runtimeInformation|body|[ScriptInstanceInfoRuntimeInformationModel](#schemascriptinstanceinforuntimeinformationmodel)|false|none|
|» scriptId|body|string \| null|false|none|
|» scriptName|body|string \| null|false|none|
|» subscriptionId|body|string \| null|false|none|
|» teamId|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "config": null,
  "customScriptDescription": "string",
  "customScriptName": "string",
  "enabled": true,
  "eventPattern": null,
  "instanceId": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "runtimeInformation": {
    "status": 0,
    "statusMessage": "string"
  },
  "scriptId": "string",
  "scriptName": "string",
  "subscriptionId": "string",
  "teamId": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="updates-a-given-script-instance-typically-used-for-updating-the-configuration-of-a-script-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScriptInstanceDetails](#schemascriptinstancedetails)|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|An internal error has occurred during instance creation.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Deletes a script instance.

> Code samples

```bash
curl https://example.com/scripts/instances/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /scripts/instances/{instanceId}`

Gets the script instance specified by the passed instance id.

<h3 id="deletes-a-script-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|Instance Id of script instance to be returned.|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="deletes-a-script-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database or in memory.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Updates custom data of a given script instance which includes its display name.

> Code samples

```bash
curl https://example.com/scripts/instances/string/data \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "customScriptDescription": "string",
    "customScriptName": "string",
    "instanceId": "string",
    "scriptId": "string"
  }'
```

`PUT /scripts/instances/{instanceId}/data`

Updates the specified script instance.

> Body parameter

```json
{
  "customScriptDescription": "string",
  "customScriptName": "string",
  "instanceId": "string",
  "scriptId": "string"
}
```

<h3 id="updates-custom-data-of-a-given-script-instance-which-includes-its-display-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|InstanceId of the script to be updated.|
|body|body|[ScriptInstanceCustomUserData](#schemascriptinstancecustomuserdata)|false|Script instance to be updated.|
|» customScriptDescription|body|string \| null|false|none|
|» customScriptName|body|string \| null|false|none|
|» instanceId|body|string \| null|false|none|
|» scriptId|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "config": null,
  "customScriptDescription": "string",
  "customScriptName": "string",
  "enabled": true,
  "eventPattern": null,
  "instanceId": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "runtimeInformation": {
    "status": 0,
    "statusMessage": "string"
  },
  "scriptId": "string",
  "scriptName": "string",
  "subscriptionId": "string",
  "teamId": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="updates-custom-data-of-a-given-script-instance-which-includes-its-display-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScriptInstanceDetails](#schemascriptinstancedetails)|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|An internal error has occurred during instance creation.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Disables a given script instance.

> Code samples

```bash
curl https://example.com/scripts/instances/string/disable \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /scripts/instances/{instanceId}/disable`

<h3 id="disables-a-given-script-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|Id of the instance to be disabled.|

> Example responses

> 200 Response

```json
{
  "config": null,
  "customScriptDescription": "string",
  "customScriptName": "string",
  "enabled": true,
  "eventPattern": null,
  "instanceId": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "runtimeInformation": {
    "status": 0,
    "statusMessage": "string"
  },
  "scriptId": "string",
  "scriptName": "string",
  "subscriptionId": "string",
  "teamId": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="disables-a-given-script-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScriptInstanceDetails](#schemascriptinstancedetails)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Enables a script instance.

> Code samples

```bash
curl https://example.com/scripts/instances/string/enable \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /scripts/instances/{instanceId}/enable`

<h3 id="enables-a-script-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|Id of the instance to be enabled.|

> Example responses

> 200 Response

```json
{
  "config": null,
  "customScriptDescription": "string",
  "customScriptName": "string",
  "enabled": true,
  "eventPattern": null,
  "instanceId": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "runtimeInformation": {
    "status": 0,
    "statusMessage": "string"
  },
  "scriptId": "string",
  "scriptName": "string",
  "subscriptionId": "string",
  "teamId": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="enables-a-script-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScriptInstanceDetails](#schemascriptinstancedetails)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Returns all available inventory scripts which can be added to a SIGNL4 subscription.

> Code samples

```bash
curl https://example.com/scripts/inventory \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scripts/inventory`

Returns all available inventory scripts which can be added to a SIGNL4 subscription.

> Example responses

> 200 Response

```json
[
  {
    "config": null,
    "data": {
      "description": "string",
      "name": "string",
      "scriptType": "string",
      "shortDescription": "string"
    },
    "eventPattern": null,
    "scriptId": "string",
    "scriptLocalizationDetails": [
      {
        "configMetadata": null,
        "data": {
          "description": "string",
          "name": "string",
          "scriptType": "string",
          "shortDescription": "string"
        },
        "language": "string"
      }
    ],
    "scriptName": "string",
    "visibility": "string"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="returns-all-available-inventory-scripts-which-can-be-added-to-a-signl4-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|An internal error orccurred while loading all inventory scripts.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="returns-all-available-inventory-scripts-which-can-be-added-to-a-signl4-subscription-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[InventoryScriptInfo](#schemainventoryscriptinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Returns all inventory scripts.

> Code samples

```bash
curl https://example.com/scripts/inventory/parsed \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scripts/inventory/parsed`

<h3 id="returns-all-inventory-scripts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "config": null,
    "data": {
      "description": "string",
      "name": "string",
      "scriptType": "string",
      "shortDescription": "string"
    },
    "eventPattern": null,
    "scriptId": "string",
    "scriptLocalizationDetails": [
      {
        "configMetadata": null,
        "data": {
          "description": "string",
          "name": "string",
          "scriptType": "string",
          "shortDescription": "string"
        },
        "language": "string"
      }
    ],
    "scriptName": "string",
    "visibility": "string"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="returns-all-inventory-scripts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="returns-all-inventory-scripts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[InventoryScriptInfo](#schemainventoryscriptinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Returns an inventory script by its id.

> Code samples

```bash
curl https://example.com/scripts/inventory/parsed/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scripts/inventory/parsed/{scriptId}`

Gets the script specified by the passed script id.

<h3 id="returns-an-inventory-script-by-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptId|path|string|true|The Id of the script to be returned.|
|language|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "config": null,
  "customScriptDescription": "string",
  "customScriptName": "string",
  "enabled": true,
  "eventPattern": null,
  "instanceId": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "runtimeInformation": {
    "status": 0,
    "statusMessage": "string"
  },
  "scriptId": "string",
  "scriptName": "string",
  "subscriptionId": "string",
  "teamId": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="returns-an-inventory-script-by-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScriptInstanceDetails](#schemascriptinstancedetails)|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database or in memory.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

<h1 id="signl4-api-subscriptions">Subscriptions</h1>

Provides management capabilities for a SIGNL4 subscription.

## Get infos of all available/managed subscriptions.

> Code samples

```bash
curl https://example.com/subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /subscriptions`

> Example responses

> 200 Response

```json
[
  {
    "branchId": "string",
    "country": "string",
    "currency": "string",
    "externalAccountId": "string",
    "id": "string",
    "name": "string",
    "nextBilling": "1970-01-01T00:00:00Z",
    "ownerId": "string",
    "planCode": "string",
    "planState": 0,
    "referralEnabled": true,
    "status": 0
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-infos-of-all-availablemanaged-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="get-infos-of-all-availablemanaged-subscriptions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SubscriptionInfo](#schemasubscriptioninfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get infos of a specific subscription.

> Code samples

```bash
curl https://example.com/subscriptions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /subscriptions/{subscriptionId}`

<h3 id="get-infos-of-a-specific-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|Id of the subscription that's to be retrieved.|

> Example responses

> 200 Response

```json
{
  "branchId": "string",
  "country": "string",
  "currency": "string",
  "externalAccountId": "string",
  "id": "string",
  "name": "string",
  "nextBilling": "1970-01-01T00:00:00Z",
  "ownerId": "string",
  "planCode": "string",
  "planState": 0,
  "referralEnabled": true,
  "status": 0
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-infos-of-a-specific-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SubscriptionInfo](#schemasubscriptioninfo)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Returns the subscription's channel price information.

> Code samples

```bash
curl https://example.com/subscriptions/string/channelPrices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /subscriptions/{subscriptionId}/channelPrices`

<h3 id="returns-the-subscriptions-channel-price-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|Id of the subscription that needs to be retrieved.|

> Example responses

> 200 Response

```json
{
  "smsPerMessage": 0,
  "voicePerMinute": 0
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="returns-the-subscriptions-channel-price-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ChannelPriceInfo](#schemachannelpriceinfo)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Returns the features of a specified subscription.

> Code samples

```bash
curl https://example.com/subscriptions/string/features \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /subscriptions/{subscriptionId}/features`

<h3 id="returns-the-features-of-a-specified-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|Id of the subscription from which the features need to be retrieved.|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "type": 0,
    "value": "string"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="returns-the-features-of-a-specified-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="returns-the-features-of-a-specified-subscription-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SubscriptionFeature](#schemasubscriptionfeature)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Updates a subscriptions profile.

> Code samples

```bash
curl https://example.com/subscriptions/string/profile \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`PUT /subscriptions/{subscriptionId}/profile`

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="updates-a-subscriptions-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|ID of the subscription to be updated|
|body|body|[SubscriptionProfile](#schemasubscriptionprofile)|false|Profile data to update subscription with|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "branchId": "string",
  "country": "string",
  "currency": "string",
  "externalAccountId": "string",
  "id": "string",
  "name": "string",
  "nextBilling": "1970-01-01T00:00:00Z",
  "ownerId": "string",
  "planCode": "string",
  "planState": 0,
  "referralEnabled": true,
  "status": 0
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="updates-a-subscriptions-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SubscriptionInfo](#schemasubscriptioninfo)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Gets a subscription's user licenses.

> Code samples

```bash
curl https://example.com/subscriptions/string/userLicenses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /subscriptions/{subscriptionId}/userLicenses`

<h3 id="gets-a-subscriptions-user-licenses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|ID of the subscription|

> Example responses

> 200 Response

```json
{
  "currentUsers": 0,
  "isFree": true,
  "isTrial": true,
  "licensedUsers": 0,
  "planCode": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="gets-a-subscriptions-user-licenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UserLicenseInfo](#schemauserlicenseinfo)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

<h1 id="signl4-api-teams">Teams</h1>

Provides misc. operations, e.g. for managing settings or preferences, of a team in a SIGNL4 subscription.

## Get infos for all teams of the subscription.

> Code samples

```bash
curl https://example.com/subscriptions/string/teams \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /subscriptions/{subscriptionId}/teams`

<h3 id="get-infos-for-all-teams-of-the-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "memberIds": [
      "string"
    ],
    "name": "string",
    "subscriptionId": "string",
    "timezone": "string"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-infos-for-all-teams-of-the-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="get-infos-for-all-teams-of-the-subscription-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamInfo](#schemateaminfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get infos of all teams.

> Code samples

```bash
curl https://example.com/teams \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teams`

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "memberIds": [
      "string"
    ],
    "name": "string",
    "subscriptionId": "string",
    "timezone": "string"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-infos-of-all-teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="get-infos-of-all-teams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamInfo](#schemateaminfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Gets infos of a specific team.

> Code samples

```bash
curl https://example.com/teams/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teams/{teamId}`

<h3 id="gets-infos-of-a-specific-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|ID of the team that should be retrieved.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "memberIds": [
    "string"
  ],
  "name": "string",
  "subscriptionId": "string",
  "timezone": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="gets-infos-of-a-specific-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TeamInfo](#schemateaminfo)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get information about downloadable alert reports

> Code samples

```bash
curl https://example.com/teams/string/alertReports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teams/{teamId}/alertReports`

<h3 id="get-information-about-downloadable-alert-reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|ID of team you want to download reports from.|

> Example responses

> 200 Response

```json
[
  {}
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-information-about-downloadable-alert-reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="get-information-about-downloadable-alert-reports-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AlertAuditReportFileInfo](#schemaalertauditreportfileinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Returns Alert Report

> Code samples

```bash
curl https://example.com/teams/string/alertReports/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teams/{teamId}/alertReports/{fileName}`

<h3 id="returns-alert-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|ID of team you want to get the duty report file infos for.|
|fileName|path|string|true|File name of file you want to download.|

> Example responses

> 200 Response

```json
"string"
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="returns-alert-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Gets alert settings of a specific team.

> Code samples

```bash
curl https://example.com/teams/string/alertSettings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teams/{teamId}/alertSettings`

<h3 id="gets-alert-settings-of-a-specific-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|ID of the team the settings should be retrieved for.|

> Example responses

> 200 Response

```json
{
  "filterAction": 0,
  "filterMode": 0,
  "optOutMode": 0,
  "persistentNotificicationMode": 0,
  "responseMode": 2,
  "responseTime": 0
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="gets-alert-settings-of-a-specific-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AlertSettings](#schemaalertsettings)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Sets alert settings of a specific team.

> Code samples

```bash
curl https://example.com/teams/string/alertSettings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filterAction": 0,
    "filterMode": 0,
    "optOutMode": 0,
    "persistentNotificicationMode": 0,
    "responseMode": 2,
    "responseTime": 0
  }'
```

`POST /teams/{teamId}/alertSettings`

> Body parameter

```json
{
  "filterAction": 0,
  "filterMode": 0,
  "optOutMode": 0,
  "persistentNotificicationMode": 0,
  "responseMode": 2,
  "responseTime": 0
}
```

<h3 id="sets-alert-settings-of-a-specific-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|ID of the team the settings should be set for.|
|body|body|[AlertSettings](#schemaalertsettings)|false|Alert settings to be set|
|» filterAction|body|[AlertFilterActions](#schemaalertfilteractions)|false|none|
|» filterMode|body|[AlertFilterModes](#schemaalertfiltermodes)|false|none|
|» optOutMode|body|[TeamCategoryOptOutModes](#schemateamcategoryoptoutmodes)|false|none|
|» persistentNotificicationMode|body|[PersistentNotificationModes](#schemapersistentnotificationmodes)|false|none|
|» responseMode|body|[AlertResponseModes](#schemaalertresponsemodes)|false|none|
|» responseTime|body|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» filterAction|0|
|» filterAction|1|
|» filterAction|2|
|» filterMode|0|
|» filterMode|1|
|» optOutMode|0|
|» optOutMode|1|
|» optOutMode|2|
|» persistentNotificicationMode|0|
|» persistentNotificicationMode|1|
|» responseMode|2|
|» responseMode|4|

> Example responses

> 200 Response

```json
{
  "filterAction": 0,
  "filterMode": 0,
  "optOutMode": 0,
  "persistentNotificicationMode": 0,
  "responseMode": 2,
  "responseTime": 0
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="sets-alert-settings-of-a-specific-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AlertSettings](#schemaalertsettings)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Gets event sources of a specific team.

> Code samples

```bash
curl https://example.com/teams/string/eventSources \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teams/{teamId}/eventSources`

<h3 id="gets-event-sources-of-a-specific-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|ID of the team the sources should be retrieved for.|

> Example responses

> 200 Response

```json
[
  {
    "address": "string",
    "groupId": "string",
    "lastEventRaised": "1970-01-01T00:00:00Z",
    "subscriptionId": "string",
    "teamId": "string",
    "type": 0
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="gets-event-sources-of-a-specific-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="gets-event-sources-of-a-specific-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[EventSourceEndpointInfo](#schemaeventsourceendpointinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Updates team profile of a team

> Code samples

```bash
curl https://example.com/teams/string/profile \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`PUT /teams/{teamId}/profile`

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="updates-team-profile-of-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Team ID of team which should be updated.|
|body|body|[TeamProfile](#schemateamprofile)|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "memberIds": [
    "string"
  ],
  "name": "string",
  "subscriptionId": "string",
  "timezone": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="updates-team-profile-of-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TeamInfo](#schemateaminfo)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|401|Unauthorized|Unauthorized|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Gets setup progress of a specific team.

> Code samples

```bash
curl https://example.com/teams/string/setupProgress \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teams/{teamId}/setupProgress`

<h3 id="gets-setup-progress-of-a-specific-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|ID of the team the progress should be retrieved for.|

> Example responses

> 200 Response

```json
{
  "completedSteps": [
    "string"
  ],
  "teamId": "string",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="gets-setup-progress-of-a-specific-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TeamSetupProgress](#schemateamsetupprogress)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

<h1 id="signl4-api-users">Users</h1>

Provides management for team members in a SIGNL4 team.

## Get all Users

> Code samples

```bash
curl https://example.com/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users`

Returns a list of user objects with details such as their email address and duty information. Only users who
are part of your team will be returned.

> Example responses

> 200 Response

```json
[
  {
    "colorIndex": 0,
    "contactAddresses": [
      {
        "address": "string",
        "channel": 0,
        "created": "1970-01-01T00:00:00Z",
        "device": {
          "appVersion": "string",
          "deviceId": "string",
          "name": "string",
          "osVersion": "string",
          "ringtone": "string",
          "ringtoneDisabled": true,
          "type": 0
        },
        "id": "string",
        "lastUpdated": "1970-01-01T00:00:00Z",
        "options": 0,
        "userId": "string"
      }
    ],
    "dutyInfo": {
      "lastStatusChange": "1970-01-01T00:00:00Z",
      "onDuty": true,
      "onManagerDuty": true,
      "overdue": true
    },
    "id": "string",
    "isDeactivated": true,
    "isInvite": true,
    "mail": "string",
    "name": "string",
    "roleId": "string",
    "subscriptionId": "string",
    "timeZone": "string",
    "userImageLastModified": "1970-01-01T00:00:00Z"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-all-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User could be successfully identified.|Inline|
|400|Bad Request|Required authentifaction info could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|You're not allowed to request the users with their information.|None|
|404|Not Found|Required entities could not be found in the database.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="get-all-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserInfo](#schemauserinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get User by Id

> Code samples

```bash
curl https://example.com/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{userId}`

Returns a user object with details such as his email address and duty information.

<h3 id="get-user-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|Identifier of the user to get. Use 'Me' to get information about the currently logged in user. This is not possible with an api key.<br>Can also be an email address of a user in the team or the unique id of an according user object.”|

> Example responses

> 200 Response

```json
{
  "colorIndex": 0,
  "contactAddresses": [
    {
      "address": "string",
      "channel": 0,
      "created": "1970-01-01T00:00:00Z",
      "device": {
        "appVersion": "string",
        "deviceId": "string",
        "name": "string",
        "osVersion": "string",
        "ringtone": "string",
        "ringtoneDisabled": true,
        "type": 0
      },
      "id": "string",
      "lastUpdated": "1970-01-01T00:00:00Z",
      "options": 0,
      "userId": "string"
    }
  ],
  "dutyInfo": {
    "lastStatusChange": "1970-01-01T00:00:00Z",
    "onDuty": true,
    "onManagerDuty": true,
    "overdue": true
  },
  "id": "string",
  "isDeactivated": true,
  "isInvite": true,
  "mail": "string",
  "name": "string",
  "roleId": "string",
  "subscriptionId": "string",
  "timeZone": "string",
  "userImageLastModified": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-user-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User could be successfully identified.|[UserInfo](#schemauserinfo)|
|400|Bad Request|Required authentifaction info could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|You're not allowed to request that user's information.|None|
|404|Not Found|Required entities could not be found in the database.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Updates the password of a user

> Code samples

```bash
curl https://example.com/users/string/changePassword \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "currentPassword": "string",
    "newPassword": "string"
  }'
```

`PUT /users/{userId}/changePassword`

> Body parameter

```json
{
  "currentPassword": "string",
  "newPassword": "string"
}
```

<h3 id="updates-the-password-of-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID of user whose password should be changed.|
|body|body|[UpdatePasswordInfo](#schemaupdatepasswordinfo)|false|none|
|» currentPassword|body|string \| null|false|none|
|» newPassword|body|string \| null|false|none|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="updates-the-password-of-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|401|Unauthorized|Unauthorized|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Checks if a user has the provided permission.

> Code samples

```bash
curl https://example.com/users/string/checkPermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "items": [
      "string"
    ]
  }'
```

`POST /users/{userId}/checkPermissions`

> Body parameter

```json
{
  "items": [
    "string"
  ]
}
```

<h3 id="checks-if-a-user-has-the-provided-permission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user to check permissions for.|
|teamId|query|string|false|none|
|body|body|[StringItemsWrapper](#schemastringitemswrapper)|false|List of permissions to check|
|» items|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "content": "string",
  "contentDisposition": "string",
  "contentEncoding": "string",
  "contentType": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "name": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="checks-if-a-user-has-the-provided-permission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UserImage](#schemauserimage)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get duty status by user Id

> Code samples

```bash
curl https://example.com/users/string/dutyStatus \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{userId}/dutyStatus`

Returns a object with duty information.

<h3 id="get-duty-status-by-user-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|Identifier of the user to get. Use 'Me' to get information about the currently logged in user. This is not possible with an api key.<br>Can also be an email address of a user in the team or the unique id of an according user object.”|

> Example responses

> 200 Response

```json
{
  "lastStatusChange": "1970-01-01T00:00:00Z",
  "onDuty": true,
  "onManagerDuty": true,
  "overdue": true
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-duty-status-by-user-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Duty successfully loaded.|[UserDutyInfo](#schemauserdutyinfo)|
|400|Bad Request|Required authentifaction info could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|You're not allowed to request that duty information.|None|
|404|Not Found|Required entities could not be found in the database.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## get/users/{userId}/image

> Code samples

```bash
curl https://example.com/users/string/image \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{userId}/image`

<h3 id="getusersuseridimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|
|height|query|integer(int32)|false|none|
|width|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "content": "string",
  "contentDisposition": "string",
  "contentEncoding": "string",
  "contentType": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "name": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="getusersuseridimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UserImage](#schemauserimage)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Uploaded a profile image for a specified user.

> Code samples

```bash
curl https://example.com/users/string/image \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /users/{userId}/image`

<h3 id="uploaded-a-profile-image-for-a-specified-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|Id of the user.|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="uploaded-a-profile-image-for-a-specified-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|204|No Content|The image was successfully uploaded.|None|
|400|Bad Request|Either a passed parameter was either empty/null or the request's multipart does not contain a<br>file.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|User is not allowed to upoload an image for the specified user.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Either the user was not found or they aren't activated yet.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal general error occured.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Updates user profile of an user

> Code samples

```bash
curl https://example.com/users/string/profile \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`PUT /users/{userId}/profile`

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="updates-user-profile-of-an-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of user to update.|
|body|body|[UserProfile](#schemauserprofile)|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "colorIndex": 0,
  "contactAddresses": [
    {
      "address": "string",
      "channel": 0,
      "created": "1970-01-01T00:00:00Z",
      "device": {
        "appVersion": "string",
        "deviceId": "string",
        "name": "string",
        "osVersion": "string",
        "ringtone": "string",
        "ringtoneDisabled": true,
        "type": 0
      },
      "id": "string",
      "lastUpdated": "1970-01-01T00:00:00Z",
      "options": 0,
      "userId": "string"
    }
  ],
  "dutyInfo": {
    "lastStatusChange": "1970-01-01T00:00:00Z",
    "onDuty": true,
    "onManagerDuty": true,
    "overdue": true
  },
  "id": "string",
  "isDeactivated": true,
  "isInvite": true,
  "mail": "string",
  "name": "string",
  "roleId": "string",
  "subscriptionId": "string",
  "timeZone": "string",
  "userImageLastModified": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="updates-user-profile-of-an-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UserInfo](#schemauserinfo)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|401|Unauthorized|Unauthorized|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Punch User in

> Code samples

```bash
curl https://example.com/users/string/punchIn \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /users/{userId}/punchIn`

The specified user will be punched in to duty.

<h3 id="punch-user-in-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|Identifier of the user to punch in. Use 'Me' to get information about the currently logged in<br>user. This is not possible with an api key. Can also be an email address of a user in the team or the unique id of an according user object.”|

> Example responses

> 200 Response

```json
{
  "lastStatusChange": "1970-01-01T00:00:00Z",
  "onDuty": true,
  "onManagerDuty": true,
  "overdue": true
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="punch-user-in-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UserDutyInfo](#schemauserdutyinfo)|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|The user tried to change the punch in a different user.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Punch User in as Manager

> Code samples

```bash
curl https://example.com/users/string/punchInAsManager \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /users/{userId}/punchInAsManager`

The specified user will be punched in to duty as a manager.

<h3 id="punch-user-in-as-manager-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|Identifier of the user to punch in. Use 'Me' to get information about the currently logged in<br>user. This is not possible with an api key. Can also be an email address of a user in the team or the unique id of an according user object.”|

> Example responses

> 200 Response

```json
{
  "lastStatusChange": "1970-01-01T00:00:00Z",
  "onDuty": true,
  "onManagerDuty": true,
  "overdue": true
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="punch-user-in-as-manager-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UserDutyInfo](#schemauserdutyinfo)|
|400|Bad Request|Required information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|The user tried to change the punch in a different user.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Punch User out

> Code samples

```bash
curl https://example.com/users/string/punchOut \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /users/{userId}/punchOut`

The specified user will be punched out from duty.

<h3 id="punch-user-out-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|Identifier of the user to punch out. Use 'Me' to get information about the currently logged in<br>user. This is not possible with an api key. Can also be an email address of a user in the team or the unique id of an according user object.”|

> Example responses

> 200 Response

```json
{
  "lastStatusChange": "1970-01-01T00:00:00Z",
  "onDuty": true,
  "onManagerDuty": true,
  "overdue": true
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="punch-user-out-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The user was punched out successfully.|[UserDutyInfo](#schemauserdutyinfo)|
|400|Bad Request|Required authentifaction information could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|The requesting user tried to punch out someone else, which is not allowed.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|The desired user was not found by passed id.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|409|Conflict|The desired user was not punched out because it would violate  the minumum on-duty members setting<br>from the team.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Gets setup progress of a specific user.

> Code samples

```bash
curl https://example.com/users/string/setupProgress \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{userId}/setupProgress`

<h3 id="gets-setup-progress-of-a-specific-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user the progress should be retrieved for.|

> Example responses

> 200 Response

```json
{
  "completedSteps": [
    "string"
  ],
  "timestamp": "1970-01-01T00:00:00Z",
  "userId": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="gets-setup-progress-of-a-specific-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UserSetupProgress](#schemausersetupprogress)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

<h1 id="signl4-api-webhooks">Webhooks</h1>

Provides management for outbound notifications (e.g. a Signl was confirmed) via webhooks.

## Get Webhooks

> Code samples

```bash
curl https://example.com/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks`

Returns a collection of defined outbound webhooks in the system.

<h3 id="get-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "enabled": true,
    "externalAddress": "string",
    "id": "string",
    "name": "string",
    "subscriptionId": "string",
    "teamId": "string"
  }
]
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful and response body contains information about all outbound webhooks in the subscription.|Inline|
|404|Not Found|The subscription does not have any outbound webhooks.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal has occured. The response body may contain more information.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="get-webhooks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[WebhookInfo](#schemawebhookinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Create Webhook

> Code samples

```bash
curl https://example.com/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "externalAddress": "string",
    "name": "string",
    "teamId": "string"
  }'
```

`POST /webhooks`

Creates a new outbound webhook that will be notified when certain events occur.

> Body parameter

```json
{
  "externalAddress": "string",
  "name": "string",
  "teamId": "string"
}
```

<h3 id="create-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WebhookBaseInfo](#schemawebhookbaseinfo)|false|Json object that contains the external URL of the webhook.|
|» externalAddress|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» teamId|body|string \| null|false|none|

> Example responses

> 201 Response

```json
"string"
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="create-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Action was successful and response contains the id of the newly created webhook.|Inline|
|400|Bad Request|Either the webhook object or a necessary property was invalid or empty.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal has occured. The response body may contain more information.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Get Webhook by Id

<a id="opIdGetWebhookById"></a>

> Code samples

```bash
curl https://example.com/webhooks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks/{webhookId}`

Returns information of the webhook specified by the passed id.

<h3 id="get-webhook-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookId|path|string|true|Id of the outbound webhook to be retrieved.|

> Example responses

> 200 Response

```json
"string"
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-webhook-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful and response body contains information about the requested webhook.|Inline|
|400|Bad Request|The passed webhook id was either empty or null.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|The webhook was not found.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal has occured. The response body may contain more information.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Update Webhook by Id

> Code samples

```bash
curl https://example.com/webhooks/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "externalAddress": "string",
    "name": "string",
    "teamId": "string"
  }'
```

`PUT /webhooks/{webhookId}`

Updates the specified webhook.

> Body parameter

```json
{
  "externalAddress": "string",
  "name": "string",
  "teamId": "string"
}
```

<h3 id="update-webhook-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookId|path|string|true|Id of the outbound webhook to be updated.|
|body|body|[WebhookBaseInfo](#schemawebhookbaseinfo)|false|Json object containing the updated URL of the webhook.|
|» externalAddress|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» teamId|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "externalAddress": "string",
  "id": "string",
  "name": "string",
  "subscriptionId": "string",
  "teamId": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="update-webhook-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Update was successful and response body contains the updated webhook details.|[WebhookInfo](#schemawebhookinfo)|
|400|Bad Request|A passed parameter was either empty or null.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Webhook with specified id was not found.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal has occured. The response body may contain more information.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Delete Webhook by Id

> Code samples

```bash
curl https://example.com/webhooks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /webhooks/{webhookId}`

Deletes the specified webhook so that it will no longer be notified.

<h3 id="delete-webhook-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookId|path|string|true|Id of the outbound webhook that will be deleted.|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="delete-webhook-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhook was successfully deleted.|None|
|400|Bad Request|The passed webhook id was invalid or empty.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Webhook with specified id was not found.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal has occured. The response body may contain more information.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Ability to enable a webHook.

> Code samples

```bash
curl https://example.com/webhooks/string/disable \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /webhooks/{webhookId}/disable`

<h3 id="ability-to-enable-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookId|path|string|true|Webhook ID for webhook which should be disabled.|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "externalAddress": "string",
  "id": "string",
  "name": "string",
  "subscriptionId": "string",
  "teamId": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="ability-to-enable-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Disable was successful and response body contains the webhook details.|[WebhookInfo](#schemawebhookinfo)|
|400|Bad Request|A passed parameter was either empty or null.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Webhook with specified id was not found.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Internal has occured. The response body may contain more information.|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Ability to disable a webHook.

> Code samples

```bash
curl https://example.com/webhooks/string/enable \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /webhooks/{webhookId}/enable`

<h3 id="ability-to-disable-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookId|path|string|true|Webhook ID for webhook which should be enabled.|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "externalAddress": "string",
  "id": "string",
  "name": "string",
  "subscriptionId": "string",
  "teamId": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="ability-to-disable-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WebhookInfo](#schemawebhookinfo)|
|400|Bad Request|Bad Request|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

<h1 id="signl4-api-teamsmemberships">TeamsMemberships</h1>

## Get all invites of a team.

> Code samples

```bash
curl https://example.com/teams/string/memberships \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teams/{teamId}/memberships`

<h3 id="get-all-invites-of-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Team ID of team you want to request.|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "isInvite": true,
    "mail": "string",
    "name": "string",
    "roleId": "string"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="get-all-invites-of-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User invitations are returned.|Inline|
|204|No Content|Request was canceled.|None|
|400|Bad Request|Required parameters or authentifaction info could not be found in the request/claims.|None|
|403|Forbidden|You're not allowed to request the access all required entities.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="get-all-invites-of-a-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[InvitedUserInfo](#schemainviteduserinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Invite users to a team

> Code samples

```bash
curl https://example.com/teams/string/memberships \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inviterId": "string",
    "invites": [
      {
        "email": "string",
        "roleId": "string"
      }
    ]
  }'
```

`POST /teams/{teamId}/memberships`

> Body parameter

```json
{
  "inviterId": "string",
  "invites": [
    {
      "email": "string",
      "roleId": "string"
    }
  ]
}
```

<h3 id="invite-users-to-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Id of team the user should be invited to.|
|body|body|[UsersInvitation](#schemausersinvitation)|false|Information about user to invite and inviter id.|
|» inviterId|body|string \| null|false|none|
|» invites|body|[[UserInvite](#schemauserinvite)]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "errorCode": 0,
    "errorMessage": "string",
    "invitedUser": {
      "id": "string",
      "isInvite": true,
      "mail": "string",
      "name": "string",
      "roleId": "string"
    },
    "success": true
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="invite-users-to-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User invitation results are returned.|Inline|
|204|No Content|Request was canceled.|None|
|400|Bad Request|Required parameters or authentifaction info could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|You're not allowed to request the access all required entities.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database.|None|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<h3 id="invite-users-to-a-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserInvitationResult](#schemauserinvitationresult)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Sends invite email again if an invite exists

> Code samples

```bash
curl https://example.com/teams/string/memberships/resendInviteMail \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inviterId": "string",
    "userMail": "string"
  }'
```

`POST /teams/{teamId}/memberships/resendInviteMail`

> Body parameter

```json
{
  "inviterId": "string",
  "userMail": "string"
}
```

<h3 id="sends-invite-email-again-if-an-invite-exists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Team ID of team with invited user.|
|body|body|[UserInvitationInfo](#schemauserinvitationinfo)|false|Information which user should be invited again.|
|» inviterId|body|string \| null|false|none|
|» userMail|body|string \| null|false|none|

> Example responses

> 200 Response

```json
"string"
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="sends-invite-email-again-if-an-invite-exists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Forbidden|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Not Found|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Update user's team membership.

> Code samples

```bash
curl https://example.com/teams/string/memberships/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "roleId": "string",
    "teamId": "string"
  }'
```

`PUT /teams/{teamId}/memberships/{userId}`

Updates the user's team membership. You can move the user to another team within the subscription
and/or change the user's role.

> Body parameter

```json
{
  "roleId": "string",
  "teamId": "string"
}
```

<h3 id="update-users-team-membership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Team the user you want to update belongs to at the moment.|
|userId|path|string|true|User ID of user you want to update.|
|requesterUserId|query|string|false|User ID of user which you want to change role with. This must be provided when using an api key. This user must have role administrator (for setting administrator role) or team administrator (for setting  rights.|
|body|body|[UserMembership](#schemausermembership)|false|Information about role id and target team id.|
|» roleId|body|string \| null|false|none|
|» teamId|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "colorIndex": 0,
  "contactAddresses": [
    {
      "address": "string",
      "channel": 0,
      "created": "1970-01-01T00:00:00Z",
      "device": {
        "appVersion": "string",
        "deviceId": "string",
        "name": "string",
        "osVersion": "string",
        "ringtone": "string",
        "ringtoneDisabled": true,
        "type": 0
      },
      "id": "string",
      "lastUpdated": "1970-01-01T00:00:00Z",
      "options": 0,
      "userId": "string"
    }
  ],
  "dutyInfo": {
    "lastStatusChange": "1970-01-01T00:00:00Z",
    "onDuty": true,
    "onManagerDuty": true,
    "overdue": true
  },
  "id": "string",
  "isDeactivated": true,
  "isInvite": true,
  "mail": "string",
  "name": "string",
  "roleId": "string",
  "subscriptionId": "string",
  "timeZone": "string",
  "userImageLastModified": "1970-01-01T00:00:00Z"
}
```

> 204 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="update-users-team-membership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User was successfully updated.|[UserInfo](#schemauserinfo)|
|204|No Content|Request was canceled.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|400|Bad Request|Required parameters or authentifaction info could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|You're not allowed to request the access all required entities.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

## Removes a user or invitation from a team, and may delete the user if he is not in any team.

> Code samples

```bash
curl https://example.com/teams/string/memberships/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /teams/{teamId}/memberships/{userId}`

<h3 id="removes-a-user-or-invitation-from-a-team-and-may-delete-the-user-if-he-is-not-in-any-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|ID of the team the user should be deleted from|
|userId|path|string|true|ID of the user that should be deleted|
|requesterUserId|query|string|false|User ID of user which will remove the other user.|

> Example responses

> 200 Response

```json
"string"
```

> 400 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

<h3 id="removes-a-user-or-invitation-from-a-team-and-may-delete-the-user-if-he-is-not-in-any-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success message|Inline|
|204|No Content|Request was canceled.|None|
|400|Bad Request|Required parameters or authentifaction info could not be found in the request/claims.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|403|Forbidden|You're not allowed to request the access all required entities.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|404|Not Found|Required entities could not be found in the database.|[ErrorResponseContent](#schemaerrorresponsecontent)|
|500|Internal Server Error|Server Error|[ErrorResponseContent](#schemaerrorresponsecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: public_api_write public_api_read offline_access )
</aside>

# Schemas

<h2 id="tocS_AlertAnnotationInfo">AlertAnnotationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaalertannotationinfo"></a>
<a id="schema_AlertAnnotationInfo"></a>
<a id="tocSalertannotationinfo"></a>
<a id="tocsalertannotationinfo"></a>

```json
{
  "annotationType": 0,
  "id": "string",
  "text": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationType|integer(int32)|false|none|none|
|id|string \| null|false|none|none|
|text|string \| null|false|none|none|
|timestamp|string(date-time)|false|none|none|
|userId|string \| null|false|none|none|

<h2 id="tocS_AlertAttachment">AlertAttachment</h2>
<!-- backwards compatibility -->
<a id="schemaalertattachment"></a>
<a id="schema_AlertAttachment"></a>
<a id="tocSalertattachment"></a>
<a id="tocsalertattachment"></a>

```json
{
  "content": "string",
  "contentType": "string",
  "encoding": 0,
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string \| null|false|none|none|
|contentType|string \| null|false|none|none|
|encoding|[Encoding](#schemaencoding)|false|none|none|
|id|string \| null|false|none|none|
|name|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|encoding|0|
|encoding|1|

<h2 id="tocS_AlertAttachmentInfo">AlertAttachmentInfo</h2>
<!-- backwards compatibility -->
<a id="schemaalertattachmentinfo"></a>
<a id="schema_AlertAttachmentInfo"></a>
<a id="tocSalertattachmentinfo"></a>
<a id="tocsalertattachmentinfo"></a>

```json
{
  "contentType": "string",
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string \| null|false|none|none|
|id|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_AlertAuditReportFileInfo">AlertAuditReportFileInfo</h2>
<!-- backwards compatibility -->
<a id="schemaalertauditreportfileinfo"></a>
<a id="schema_AlertAuditReportFileInfo"></a>
<a id="tocSalertauditreportfileinfo"></a>
<a id="tocsalertauditreportfileinfo"></a>

```json
{}
```

<h2 id="tocS_AlertCounts">AlertCounts</h2>
<!-- backwards compatibility -->
<a id="schemaalertcounts"></a>
<a id="schema_AlertCounts"></a>
<a id="tocSalertcounts"></a>
<a id="tocsalertcounts"></a>

```json
{
  "acked": 0,
  "closed": 0,
  "end": "1970-01-01T00:00:00Z",
  "lastModified": "1970-01-01T00:00:00Z",
  "start": "1970-01-01T00:00:00Z",
  "unhandled": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acked|integer(int64)|false|none|none|
|closed|integer(int64)|false|none|none|
|end|string(date-time) \| null|false|none|none|
|lastModified|string(date-time) \| null|false|none|none|
|start|string(date-time) \| null|false|none|none|
|unhandled|integer(int64)|false|none|none|

<h2 id="tocS_AlertDeliveryStatusCodes">AlertDeliveryStatusCodes</h2>
<!-- backwards compatibility -->
<a id="schemaalertdeliverystatuscodes"></a>
<a id="schema_AlertDeliveryStatusCodes"></a>
<a id="tocSalertdeliverystatuscodes"></a>
<a id="tocsalertdeliverystatuscodes"></a>

```json
0
```

<h2 id="tocS_AlertDeliveryStatusInfo">AlertDeliveryStatusInfo</h2>
<!-- backwards compatibility -->
<a id="schemaalertdeliverystatusinfo"></a>
<a id="schema_AlertDeliveryStatusInfo"></a>
<a id="tocSalertdeliverystatusinfo"></a>
<a id="tocsalertdeliverystatusinfo"></a>

```json
{
  "statusCode": 0,
  "users": [
    {
      "statusCode": 0,
      "userId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|[AlertDeliveryStatusCodes](#schemaalertdeliverystatuscodes)|false|none|none|
|users|[[UserDeliveryStatusInfo](#schemauserdeliverystatusinfo)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|statusCode|0|
|statusCode|1|
|statusCode|2|
|statusCode|4|
|statusCode|6|
|statusCode|8|
|statusCode|22|
|statusCode|24|
|statusCode|26|
|statusCode|30|
|statusCode|31|

<h2 id="tocS_AlertFilterActions">AlertFilterActions</h2>
<!-- backwards compatibility -->
<a id="schemaalertfilteractions"></a>
<a id="schema_AlertFilterActions"></a>
<a id="tocSalertfilteractions"></a>
<a id="tocsalertfilteractions"></a>

```json
0
```

<h2 id="tocS_AlertFilterModes">AlertFilterModes</h2>
<!-- backwards compatibility -->
<a id="schemaalertfiltermodes"></a>
<a id="schema_AlertFilterModes"></a>
<a id="tocSalertfiltermodes"></a>
<a id="tocsalertfiltermodes"></a>

```json
0
```

<h2 id="tocS_AlertFilterPublic">AlertFilterPublic</h2>
<!-- backwards compatibility -->
<a id="schemaalertfilterpublic"></a>
<a id="schema_AlertFilterPublic"></a>
<a id="tocSalertfilterpublic"></a>
<a id="tocsalertfilterpublic"></a>

```json
{
  "alertIds": [
    "string"
  ],
  "alertsAfterId": "string",
  "categoryIds": [
    "string"
  ],
  "continuationToken": {
    "nextPartitionKey": "string",
    "nextRowKey": "string",
    "nextTableName": "string"
  },
  "maxCreationDate": "1970-01-01T00:00:00Z",
  "minCreationDate": "1970-01-01T00:00:00Z",
  "modifiedSince": "1970-01-01T00:00:00Z",
  "showPersonalHiddenCategories": true,
  "statusCodes": 0,
  "teamId": "string",
  "textToSearch": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alertIds|[string]|false|none|none|
|alertsAfterId|string \| null|false|none|none|
|categoryIds|[string]|false|none|none|
|continuationToken|[PagedResultsPublicContinuationToken](#schemapagedresultspubliccontinuationtoken)|false|none|none|
|maxCreationDate|string(date-time) \| null|false|none|none|
|minCreationDate|string(date-time) \| null|false|none|none|
|modifiedSince|string(date-time) \| null|false|none|none|
|showPersonalHiddenCategories|boolean|false|none|none|
|statusCodes|[AlertStatusCodes](#schemaalertstatuscodes)|false|none|none|
|teamId|string \| null|false|none|none|
|textToSearch|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|statusCodes|0|
|statusCodes|1|
|statusCodes|2|
|statusCodes|4|
|statusCodes|8|
|statusCodes|16|
|statusCodes|32|

<h2 id="tocS_AlertHistoryInfoDetailed">AlertHistoryInfoDetailed</h2>
<!-- backwards compatibility -->
<a id="schemaalerthistoryinfodetailed"></a>
<a id="schema_AlertHistoryInfoDetailed"></a>
<a id="tocSalerthistoryinfodetailed"></a>
<a id="tocsalerthistoryinfodetailed"></a>

```json
{
  "acknowledged": "1970-01-01T00:00:00Z",
  "acknowledgedgements": [
    "string"
  ],
  "closed": "1970-01-01T00:00:00Z",
  "closedBy": "string",
  "created": "1970-01-01T00:00:00Z",
  "historyEntries": [
    {
      "id": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "type": 0,
      "userId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledged|string(date-time) \| null|false|none|none|
|acknowledgedgements|[string]|false|none|none|
|closed|string(date-time) \| null|false|none|none|
|closedBy|string \| null|false|none|none|
|created|string(date-time)|false|none|none|
|historyEntries|[[AlertHistoryInfoEntry](#schemaalerthistoryinfoentry)]|false|none|none|

<h2 id="tocS_AlertHistoryInfoEntry">AlertHistoryInfoEntry</h2>
<!-- backwards compatibility -->
<a id="schemaalerthistoryinfoentry"></a>
<a id="schema_AlertHistoryInfoEntry"></a>
<a id="tocSalerthistoryinfoentry"></a>
<a id="tocsalerthistoryinfoentry"></a>

```json
{
  "id": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": 0,
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|timestamp|string(date-time)|false|none|none|
|type|[AlertHistoryInfoUserEntryType](#schemaalerthistoryinfouserentrytype)|false|none|none|
|userId|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|0|
|type|1|
|type|2|
|type|3|
|type|4|
|type|5|
|type|6|
|type|7|

<h2 id="tocS_AlertHistoryInfoUserEntryType">AlertHistoryInfoUserEntryType</h2>
<!-- backwards compatibility -->
<a id="schemaalerthistoryinfouserentrytype"></a>
<a id="schema_AlertHistoryInfoUserEntryType"></a>
<a id="tocSalerthistoryinfouserentrytype"></a>
<a id="tocsalerthistoryinfouserentrytype"></a>

```json
0
```

<h2 id="tocS_AlertInfo">AlertInfo</h2>
<!-- backwards compatibility -->
<a id="schemaalertinfo"></a>
<a id="schema_AlertInfo"></a>
<a id="tocSalertinfo"></a>
<a id="tocsalertinfo"></a>

```json
{
  "annotations": [
    {
      "annotationType": 0,
      "id": "string",
      "text": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "userId": "string"
    }
  ],
  "attachments": [
    {
      "content": "string",
      "contentType": "string",
      "encoding": 0,
      "id": "string",
      "name": "string"
    }
  ],
  "category": "string",
  "categoryId": "string",
  "eventId": "string",
  "eventSourceId": "string",
  "eventSourceType": 0,
  "flags": 0,
  "history": {
    "acknowledged": "1970-01-01T00:00:00Z",
    "acknowledgedgements": [
      "string"
    ],
    "closed": "1970-01-01T00:00:00Z",
    "closedBy": "string",
    "created": "1970-01-01T00:00:00Z",
    "historyEntries": [
      {
        "id": "string",
        "timestamp": "1970-01-01T00:00:00Z",
        "type": 0,
        "userId": "string"
      }
    ]
  },
  "id": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "parameters": [
    {
      "name": "string",
      "order": 0,
      "type": 0,
      "value": "string"
    }
  ],
  "severity": 0,
  "status": 0,
  "subscriptionId": "string",
  "teamId": "string",
  "text": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|[[AlertAnnotationInfo](#schemaalertannotationinfo)]|false|none|none|
|attachments|[[AlertAttachment](#schemaalertattachment)]|false|none|none|
|category|string \| null|false|none|none|
|categoryId|string \| null|false|none|none|
|eventId|string \| null|false|none|none|
|eventSourceId|string \| null|false|none|none|
|eventSourceType|[EventSourceTypes](#schemaeventsourcetypes)|false|none|none|
|flags|integer(int32)|false|none|none|
|history|[AlertHistoryInfoDetailed](#schemaalerthistoryinfodetailed)|false|none|none|
|id|string \| null|false|none|none|
|lastModified|string(date-time)|false|none|none|
|parameters|[[EventParameterInfo](#schemaeventparameterinfo)]|false|none|none|
|severity|[AlertSeverities](#schemaalertseverities)|false|none|none|
|status|[AlertStatusCodes](#schemaalertstatuscodes)|false|none|none|
|subscriptionId|string \| null|false|none|none|
|teamId|string \| null|false|none|none|
|text|string \| null|false|none|none|
|title|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|eventSourceType|0|
|eventSourceType|1|
|eventSourceType|2|
|eventSourceType|3|
|eventSourceType|4|
|eventSourceType|5|
|severity|0|
|severity|1|
|severity|2|
|status|0|
|status|1|
|status|2|
|status|4|
|status|8|
|status|16|
|status|32|

<h2 id="tocS_AlertNotificationInfo">AlertNotificationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaalertnotificationinfo"></a>
<a id="schema_AlertNotificationInfo"></a>
<a id="tocSalertnotificationinfo"></a>
<a id="tocsalertnotificationinfo"></a>

```json
{
  "address": "string",
  "channelType": 0,
  "deviceName": "string",
  "lastUpdate": "1970-01-01T00:00:00Z",
  "messageStatus": 0,
  "userId": "string",
  "userStatus": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string \| null|false|none|none|
|channelType|[AlertNotificationInfoChannelType](#schemaalertnotificationinfochanneltype)|false|none|none|
|deviceName|string \| null|false|none|none|
|lastUpdate|string(date-time)|false|none|none|
|messageStatus|[AlertNotificationInfoMessageStatus](#schemaalertnotificationinfomessagestatus)|false|none|none|
|userId|string \| null|false|none|none|
|userStatus|[AlertNotificationInfoUserStatus](#schemaalertnotificationinfouserstatus)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|channelType|0|
|channelType|1|
|channelType|2|
|channelType|4|
|channelType|8|
|channelType|16|
|messageStatus|0|
|messageStatus|1|
|messageStatus|2|
|messageStatus|3|
|messageStatus|4|
|messageStatus|5|
|messageStatus|6|
|messageStatus|7|
|messageStatus|8|
|messageStatus|9|
|messageStatus|10|
|userStatus|0|
|userStatus|1|
|userStatus|2|
|userStatus|3|
|userStatus|4|
|userStatus|5|
|userStatus|6|

<h2 id="tocS_AlertNotificationInfoChannelType">AlertNotificationInfoChannelType</h2>
<!-- backwards compatibility -->
<a id="schemaalertnotificationinfochanneltype"></a>
<a id="schema_AlertNotificationInfoChannelType"></a>
<a id="tocSalertnotificationinfochanneltype"></a>
<a id="tocsalertnotificationinfochanneltype"></a>

```json
0
```

<h2 id="tocS_AlertNotificationInfoMessageStatus">AlertNotificationInfoMessageStatus</h2>
<!-- backwards compatibility -->
<a id="schemaalertnotificationinfomessagestatus"></a>
<a id="schema_AlertNotificationInfoMessageStatus"></a>
<a id="tocSalertnotificationinfomessagestatus"></a>
<a id="tocsalertnotificationinfomessagestatus"></a>

```json
0
```

<h2 id="tocS_AlertNotificationInfoUserStatus">AlertNotificationInfoUserStatus</h2>
<!-- backwards compatibility -->
<a id="schemaalertnotificationinfouserstatus"></a>
<a id="schema_AlertNotificationInfoUserStatus"></a>
<a id="tocSalertnotificationinfouserstatus"></a>
<a id="tocsalertnotificationinfouserstatus"></a>

```json
0
```

<h2 id="tocS_AlertReport">AlertReport</h2>
<!-- backwards compatibility -->
<a id="schemaalertreport"></a>
<a id="schema_AlertReport"></a>
<a id="tocSalertreport"></a>
<a id="tocsalertreport"></a>

```json
{
  "last24Hours": {
    "acked": 0,
    "closed": 0,
    "end": "1970-01-01T00:00:00Z",
    "lastModified": "1970-01-01T00:00:00Z",
    "start": "1970-01-01T00:00:00Z",
    "unhandled": 0
  },
  "subscriptionId": "string",
  "teamCurrentDuty": {
    "acked": 0,
    "closed": 0,
    "end": "1970-01-01T00:00:00Z",
    "lastModified": "1970-01-01T00:00:00Z",
    "start": "1970-01-01T00:00:00Z",
    "unhandled": 0
  },
  "teamId": "string",
  "teamLastDuty": {
    "acked": 0,
    "closed": 0,
    "end": "1970-01-01T00:00:00Z",
    "lastModified": "1970-01-01T00:00:00Z",
    "start": "1970-01-01T00:00:00Z",
    "unhandled": 0
  },
  "userId": "string",
  "userLastDutyChange": {
    "acked": 0,
    "closed": 0,
    "end": "1970-01-01T00:00:00Z",
    "lastModified": "1970-01-01T00:00:00Z",
    "start": "1970-01-01T00:00:00Z",
    "unhandled": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|last24Hours|[AlertCounts](#schemaalertcounts)|false|none|none|
|subscriptionId|string \| null|false|none|none|
|teamCurrentDuty|[AlertCounts](#schemaalertcounts)|false|none|none|
|teamId|string \| null|false|none|none|
|teamLastDuty|[AlertCounts](#schemaalertcounts)|false|none|none|
|userId|string \| null|false|none|none|
|userLastDutyChange|[AlertCounts](#schemaalertcounts)|false|none|none|

<h2 id="tocS_AlertResponseModes">AlertResponseModes</h2>
<!-- backwards compatibility -->
<a id="schemaalertresponsemodes"></a>
<a id="schema_AlertResponseModes"></a>
<a id="tocSalertresponsemodes"></a>
<a id="tocsalertresponsemodes"></a>

```json
2
```

<h2 id="tocS_AlertSettings">AlertSettings</h2>
<!-- backwards compatibility -->
<a id="schemaalertsettings"></a>
<a id="schema_AlertSettings"></a>
<a id="tocSalertsettings"></a>
<a id="tocsalertsettings"></a>

```json
{
  "filterAction": 0,
  "filterMode": 0,
  "optOutMode": 0,
  "persistentNotificicationMode": 0,
  "responseMode": 2,
  "responseTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterAction|[AlertFilterActions](#schemaalertfilteractions)|false|none|none|
|filterMode|[AlertFilterModes](#schemaalertfiltermodes)|false|none|none|
|optOutMode|[TeamCategoryOptOutModes](#schemateamcategoryoptoutmodes)|false|none|none|
|persistentNotificicationMode|[PersistentNotificationModes](#schemapersistentnotificationmodes)|false|none|none|
|responseMode|[AlertResponseModes](#schemaalertresponsemodes)|false|none|none|
|responseTime|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|filterAction|0|
|filterAction|1|
|filterAction|2|
|filterMode|0|
|filterMode|1|
|optOutMode|0|
|optOutMode|1|
|optOutMode|2|
|persistentNotificicationMode|0|
|persistentNotificicationMode|1|
|responseMode|2|
|responseMode|4|

<h2 id="tocS_AlertSeverities">AlertSeverities</h2>
<!-- backwards compatibility -->
<a id="schemaalertseverities"></a>
<a id="schema_AlertSeverities"></a>
<a id="tocSalertseverities"></a>
<a id="tocsalertseverities"></a>

```json
0
```

<h2 id="tocS_AlertStatusCodes">AlertStatusCodes</h2>
<!-- backwards compatibility -->
<a id="schemaalertstatuscodes"></a>
<a id="schema_AlertStatusCodes"></a>
<a id="tocSalertstatuscodes"></a>
<a id="tocsalertstatuscodes"></a>

```json
0
```

<h2 id="tocS_CategoryAugmentation">CategoryAugmentation</h2>
<!-- backwards compatibility -->
<a id="schemacategoryaugmentation"></a>
<a id="schema_CategoryAugmentation"></a>
<a id="tocScategoryaugmentation"></a>
<a id="tocscategoryaugmentation"></a>

```json
{
  "enabled": true,
  "name": "string",
  "type": 0,
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|name|string \| null|false|none|none|
|type|[CategoryAugmentationType](#schemacategoryaugmentationtype)|false|none|none|
|value|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|0|
|type|1|
|type|2|
|type|3|

<h2 id="tocS_CategoryAugmentationType">CategoryAugmentationType</h2>
<!-- backwards compatibility -->
<a id="schemacategoryaugmentationtype"></a>
<a id="schema_CategoryAugmentationType"></a>
<a id="tocScategoryaugmentationtype"></a>
<a id="tocscategoryaugmentationtype"></a>

```json
0
```

<h2 id="tocS_CategoryInfo">CategoryInfo</h2>
<!-- backwards compatibility -->
<a id="schemacategoryinfo"></a>
<a id="schema_CategoryInfo"></a>
<a id="tocScategoryinfo"></a>
<a id="tocscategoryinfo"></a>

```json
{
  "augmentations": [
    {
      "enabled": true,
      "name": "string",
      "type": 0,
      "value": "string"
    }
  ],
  "color": "string",
  "id": "string",
  "imageName": "string",
  "isDefault": true,
  "keywordMatching": 0,
  "keywords": [
    "string"
  ],
  "lastMatch": "1970-01-01T00:00:00Z",
  "name": "string",
  "options": 0,
  "order": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|augmentations|[[CategoryAugmentation](#schemacategoryaugmentation)]|false|none|none|
|color|string \| null|false|none|none|
|id|string \| null|false|none|none|
|imageName|string \| null|false|none|none|
|isDefault|boolean|false|read-only|none|
|keywordMatching|[KeywordMatchingType](#schemakeywordmatchingtype)|false|none|none|
|keywords|[string]|false|none|none|
|lastMatch|string(date-time) \| null|false|none|none|
|name|string \| null|false|none|none|
|options|[CategoryInfoOptions](#schemacategoryinfooptions)|false|none|none|
|order|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|keywordMatching|0|
|keywordMatching|1|
|options|0|
|options|1|
|options|2|
|options|4|
|options|8|

<h2 id="tocS_CategoryInfoOptions">CategoryInfoOptions</h2>
<!-- backwards compatibility -->
<a id="schemacategoryinfooptions"></a>
<a id="schema_CategoryInfoOptions"></a>
<a id="tocScategoryinfooptions"></a>
<a id="tocscategoryinfooptions"></a>

```json
0
```

<h2 id="tocS_CategoryMetrics">CategoryMetrics</h2>
<!-- backwards compatibility -->
<a id="schemacategorymetrics"></a>
<a id="schema_CategoryMetrics"></a>
<a id="tocScategorymetrics"></a>
<a id="tocscategorymetrics"></a>

```json
{
  "categoryId": "string",
  "last24Hours": 0,
  "lastAlert": "1970-01-01T00:00:00Z",
  "subscriberCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|string \| null|false|none|none|
|last24Hours|integer(int64)|false|none|none|
|lastAlert|string(date-time) \| null|false|none|none|
|subscriberCount|integer(int32)|false|none|none|

<h2 id="tocS_CategorySubscriptionInfo">CategorySubscriptionInfo</h2>
<!-- backwards compatibility -->
<a id="schemacategorysubscriptioninfo"></a>
<a id="schema_CategorySubscriptionInfo"></a>
<a id="tocScategorysubscriptioninfo"></a>
<a id="tocscategorysubscriptioninfo"></a>

```json
{
  "status": 0,
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[CategorySubscriptionStatus](#schemacategorysubscriptionstatus)|false|none|none|
|userId|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|0|
|status|1|
|status|2|

<h2 id="tocS_CategorySubscriptionStatus">CategorySubscriptionStatus</h2>
<!-- backwards compatibility -->
<a id="schemacategorysubscriptionstatus"></a>
<a id="schema_CategorySubscriptionStatus"></a>
<a id="tocScategorysubscriptionstatus"></a>
<a id="tocscategorysubscriptionstatus"></a>

```json
0
```

<h2 id="tocS_ChangeAlertStatusFilterInfo">ChangeAlertStatusFilterInfo</h2>
<!-- backwards compatibility -->
<a id="schemachangealertstatusfilterinfo"></a>
<a id="schema_ChangeAlertStatusFilterInfo"></a>
<a id="tocSchangealertstatusfilterinfo"></a>
<a id="tocschangealertstatusfilterinfo"></a>

```json
{
  "categoryIds": [
    "string"
  ],
  "maxDate": "1970-01-01T00:00:00Z",
  "minDate": "1970-01-01T00:00:00Z",
  "scope": 0,
  "teamIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryIds|[string]|false|none|none|
|maxDate|string(date-time) \| null|false|none|none|
|minDate|string(date-time) \| null|false|none|none|
|scope|[StatusChangeScope](#schemastatuschangescope)|false|none|none|
|teamIds|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|scope|0|
|scope|1|
|scope|2|

<h2 id="tocS_ChangeAlertStatusInfo">ChangeAlertStatusInfo</h2>
<!-- backwards compatibility -->
<a id="schemachangealertstatusinfo"></a>
<a id="schema_ChangeAlertStatusInfo"></a>
<a id="tocSchangealertstatusinfo"></a>
<a id="tocschangealertstatusinfo"></a>

```json
{
  "description": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|userId|string \| null|false|none|none|

<h2 id="tocS_ChangeAlertStatusMultipleInfo">ChangeAlertStatusMultipleInfo</h2>
<!-- backwards compatibility -->
<a id="schemachangealertstatusmultipleinfo"></a>
<a id="schema_ChangeAlertStatusMultipleInfo"></a>
<a id="tocSchangealertstatusmultipleinfo"></a>
<a id="tocschangealertstatusmultipleinfo"></a>

```json
{
  "alertIds": [
    "string"
  ],
  "description": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alertIds|[string]|false|none|none|
|description|string \| null|false|none|none|
|userId|string \| null|false|none|none|

<h2 id="tocS_ChannelPriceInfo">ChannelPriceInfo</h2>
<!-- backwards compatibility -->
<a id="schemachannelpriceinfo"></a>
<a id="schema_ChannelPriceInfo"></a>
<a id="tocSchannelpriceinfo"></a>
<a id="tocschannelpriceinfo"></a>

```json
{
  "smsPerMessage": 0,
  "voicePerMinute": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|smsPerMessage|integer(int32)|false|none|none|
|voicePerMinute|integer(int32)|false|none|none|

<h2 id="tocS_ChannelTypes">ChannelTypes</h2>
<!-- backwards compatibility -->
<a id="schemachanneltypes"></a>
<a id="schema_ChannelTypes"></a>
<a id="tocSchanneltypes"></a>
<a id="tocschanneltypes"></a>

```json
0
```

<h2 id="tocS_ContactAddressInfo">ContactAddressInfo</h2>
<!-- backwards compatibility -->
<a id="schemacontactaddressinfo"></a>
<a id="schema_ContactAddressInfo"></a>
<a id="tocScontactaddressinfo"></a>
<a id="tocscontactaddressinfo"></a>

```json
{
  "address": "string",
  "channel": 0,
  "created": "1970-01-01T00:00:00Z",
  "device": {
    "appVersion": "string",
    "deviceId": "string",
    "name": "string",
    "osVersion": "string",
    "ringtone": "string",
    "ringtoneDisabled": true,
    "type": 0
  },
  "id": "string",
  "lastUpdated": "1970-01-01T00:00:00Z",
  "options": 0,
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string \| null|false|none|none|
|channel|[ChannelTypes](#schemachanneltypes)|false|none|none|
|created|string(date-time)|false|none|none|
|device|[Device](#schemadevice)|false|none|none|
|id|string \| null|false|none|none|
|lastUpdated|string(date-time)|false|none|none|
|options|integer(int32)|false|none|none|
|userId|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|0|
|channel|1|
|channel|2|
|channel|4|
|channel|8|
|channel|16|

<h2 id="tocS_DeleteRangeInfo">DeleteRangeInfo</h2>
<!-- backwards compatibility -->
<a id="schemadeleterangeinfo"></a>
<a id="schema_DeleteRangeInfo"></a>
<a id="tocSdeleterangeinfo"></a>
<a id="tocsdeleterangeinfo"></a>

```json
{
  "from": "1970-01-01T00:00:00Z",
  "to": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string(date-time)|false|none|none|
|to|string(date-time)|false|none|none|

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "appVersion": "string",
  "deviceId": "string",
  "name": "string",
  "osVersion": "string",
  "ringtone": "string",
  "ringtoneDisabled": true,
  "type": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appVersion|string \| null|false|none|none|
|deviceId|string \| null|false|none|none|
|name|string \| null|false|none|none|
|osVersion|string \| null|false|none|none|
|ringtone|string \| null|false|none|none|
|ringtoneDisabled|boolean|false|none|none|
|type|[DeviceType](#schemadevicetype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|0|
|type|1|
|type|2|

<h2 id="tocS_DeviceType">DeviceType</h2>
<!-- backwards compatibility -->
<a id="schemadevicetype"></a>
<a id="schema_DeviceType"></a>
<a id="tocSdevicetype"></a>
<a id="tocsdevicetype"></a>

```json
0
```

<h2 id="tocS_DutyAuditReportFileInfo">DutyAuditReportFileInfo</h2>
<!-- backwards compatibility -->
<a id="schemadutyauditreportfileinfo"></a>
<a id="schema_DutyAuditReportFileInfo"></a>
<a id="tocSdutyauditreportfileinfo"></a>
<a id="tocsdutyauditreportfileinfo"></a>

```json
{}
```

<h2 id="tocS_DutySummaryInfo">DutySummaryInfo</h2>
<!-- backwards compatibility -->
<a id="schemadutysummaryinfo"></a>
<a id="schema_DutySummaryInfo"></a>
<a id="tocSdutysummaryinfo"></a>
<a id="tocsdutysummaryinfo"></a>

```json
{
  "dutyEnd": "1970-01-01T00:00:00Z",
  "dutyId": "string",
  "dutyStart": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dutyEnd|string(date-time) \| null|false|none|none|
|dutyId|string \| null|false|none|none|
|dutyStart|string(date-time) \| null|false|none|none|

<h2 id="tocS_Encoding">Encoding</h2>
<!-- backwards compatibility -->
<a id="schemaencoding"></a>
<a id="schema_Encoding"></a>
<a id="tocSencoding"></a>
<a id="tocsencoding"></a>

```json
0
```

<h2 id="tocS_ErrorResponseContent">ErrorResponseContent</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponsecontent"></a>
<a id="schema_ErrorResponseContent"></a>
<a id="tocSerrorresponsecontent"></a>
<a id="tocserrorresponsecontent"></a>

```json
{
  "code": 0,
  "details": "string",
  "errors": [
    {
      "details": "string",
      "message": "string"
    }
  ],
  "message": "string",
  "requestId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|details|string \| null|false|none|none|
|errors|[[ErrorResponseContentBase](#schemaerrorresponsecontentbase)]|false|none|none|
|message|string \| null|false|none|none|
|requestId|string \| null|false|none|none|

<h2 id="tocS_ErrorResponseContentBase">ErrorResponseContentBase</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponsecontentbase"></a>
<a id="schema_ErrorResponseContentBase"></a>
<a id="tocSerrorresponsecontentbase"></a>
<a id="tocserrorresponsecontentbase"></a>

```json
{
  "details": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string \| null|false|none|none|
|message|string \| null|false|none|none|

<h2 id="tocS_EventFilter">EventFilter</h2>
<!-- backwards compatibility -->
<a id="schemaeventfilter"></a>
<a id="schema_EventFilter"></a>
<a id="tocSeventfilter"></a>
<a id="tocseventfilter"></a>

```json
{
  "continuationToken": {
    "nextPartitionKey": "string",
    "nextRowKey": "string",
    "nextTableName": "string"
  },
  "eventStatusCode": 0,
  "maxCreationDate": "1970-01-01T00:00:00Z",
  "minCreationDate": "1970-01-01T00:00:00Z",
  "modifiedSince": "1970-01-01T00:00:00Z",
  "teamId": "string",
  "textToSearch": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|continuationToken|[PagedResultsPublicContinuationToken](#schemapagedresultspubliccontinuationtoken)|false|none|none|
|eventStatusCode|[EventStatusCodes](#schemaeventstatuscodes)|false|none|none|
|maxCreationDate|string(date-time) \| null|false|none|none|
|minCreationDate|string(date-time) \| null|false|none|none|
|modifiedSince|string(date-time) \| null|false|none|none|
|teamId|string \| null|false|none|none|
|textToSearch|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|eventStatusCode|0|
|eventStatusCode|1|
|eventStatusCode|2|
|eventStatusCode|3|
|eventStatusCode|4|
|eventStatusCode|5|
|eventStatusCode|6|
|eventStatusCode|1000|

<h2 id="tocS_EventParameterInfo">EventParameterInfo</h2>
<!-- backwards compatibility -->
<a id="schemaeventparameterinfo"></a>
<a id="schema_EventParameterInfo"></a>
<a id="tocSeventparameterinfo"></a>
<a id="tocseventparameterinfo"></a>

```json
{
  "name": "string",
  "order": 0,
  "type": 0,
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|order|integer(int32)|false|none|none|
|type|[EventParameterTypes](#schemaeventparametertypes)|false|none|none|
|value|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|0|
|type|1|
|type|2|
|type|3|
|type|4|
|type|5|
|type|6|
|type|7|
|type|8|
|type|9|
|type|10|
|type|11|
|type|12|
|type|13|
|type|14|
|type|15|
|type|16|
|type|17|
|type|100|

<h2 id="tocS_EventParameterTypes">EventParameterTypes</h2>
<!-- backwards compatibility -->
<a id="schemaeventparametertypes"></a>
<a id="schema_EventParameterTypes"></a>
<a id="tocSeventparametertypes"></a>
<a id="tocseventparametertypes"></a>

```json
0
```

<h2 id="tocS_EventSeverities">EventSeverities</h2>
<!-- backwards compatibility -->
<a id="schemaeventseverities"></a>
<a id="schema_EventSeverities"></a>
<a id="tocSeventseverities"></a>
<a id="tocseventseverities"></a>

```json
0
```

<h2 id="tocS_EventSourceEndpointInfo">EventSourceEndpointInfo</h2>
<!-- backwards compatibility -->
<a id="schemaeventsourceendpointinfo"></a>
<a id="schema_EventSourceEndpointInfo"></a>
<a id="tocSeventsourceendpointinfo"></a>
<a id="tocseventsourceendpointinfo"></a>

```json
{
  "address": "string",
  "groupId": "string",
  "lastEventRaised": "1970-01-01T00:00:00Z",
  "subscriptionId": "string",
  "teamId": "string",
  "type": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string \| null|false|none|none|
|groupId|string \| null|false|none|none|
|lastEventRaised|string(date-time) \| null|false|none|none|
|subscriptionId|string \| null|false|none|none|
|teamId|string \| null|false|none|none|
|type|[EventSourceEndpointTypes](#schemaeventsourceendpointtypes)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|0|
|type|1|
|type|2|
|type|3|

<h2 id="tocS_EventSourceEndpointTypes">EventSourceEndpointTypes</h2>
<!-- backwards compatibility -->
<a id="schemaeventsourceendpointtypes"></a>
<a id="schema_EventSourceEndpointTypes"></a>
<a id="tocSeventsourceendpointtypes"></a>
<a id="tocseventsourceendpointtypes"></a>

```json
0
```

<h2 id="tocS_EventSourceTypes">EventSourceTypes</h2>
<!-- backwards compatibility -->
<a id="schemaeventsourcetypes"></a>
<a id="schema_EventSourceTypes"></a>
<a id="tocSeventsourcetypes"></a>
<a id="tocseventsourcetypes"></a>

```json
0
```

<h2 id="tocS_EventStatusCodes">EventStatusCodes</h2>
<!-- backwards compatibility -->
<a id="schemaeventstatuscodes"></a>
<a id="schema_EventStatusCodes"></a>
<a id="tocSeventstatuscodes"></a>
<a id="tocseventstatuscodes"></a>

```json
0
```

<h2 id="tocS_InventoryScriptInfo">InventoryScriptInfo</h2>
<!-- backwards compatibility -->
<a id="schemainventoryscriptinfo"></a>
<a id="schema_InventoryScriptInfo"></a>
<a id="tocSinventoryscriptinfo"></a>
<a id="tocsinventoryscriptinfo"></a>

```json
{
  "config": null,
  "data": {
    "description": "string",
    "name": "string",
    "scriptType": "string",
    "shortDescription": "string"
  },
  "eventPattern": null,
  "scriptId": "string",
  "scriptLocalizationDetails": [
    {
      "configMetadata": null,
      "data": {
        "description": "string",
        "name": "string",
        "scriptType": "string",
        "shortDescription": "string"
      },
      "language": "string"
    }
  ],
  "scriptName": "string",
  "visibility": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object \| null|false|none|none|
|data|[ScriptDescriptionData](#schemascriptdescriptiondata)|false|none|none|
|eventPattern|object \| null|false|none|none|
|scriptId|string \| null|false|none|none|
|scriptLocalizationDetails|[[ScriptLocalizationDetail](#schemascriptlocalizationdetail)]|false|none|none|
|scriptName|string \| null|false|none|none|
|visibility|string \| null|false|none|none|

<h2 id="tocS_InvitedUserInfo">InvitedUserInfo</h2>
<!-- backwards compatibility -->
<a id="schemainviteduserinfo"></a>
<a id="schema_InvitedUserInfo"></a>
<a id="tocSinviteduserinfo"></a>
<a id="tocsinviteduserinfo"></a>

```json
{
  "id": "string",
  "isInvite": true,
  "mail": "string",
  "name": "string",
  "roleId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|isInvite|boolean|false|none|none|
|mail|string \| null|false|none|none|
|name|string \| null|false|none|none|
|roleId|string \| null|false|none|none|

<h2 id="tocS_KeywordMatchingType">KeywordMatchingType</h2>
<!-- backwards compatibility -->
<a id="schemakeywordmatchingtype"></a>
<a id="schema_KeywordMatchingType"></a>
<a id="tocSkeywordmatchingtype"></a>
<a id="tocskeywordmatchingtype"></a>

```json
0
```

<h2 id="tocS_OverviewAlert">OverviewAlert</h2>
<!-- backwards compatibility -->
<a id="schemaoverviewalert"></a>
<a id="schema_OverviewAlert"></a>
<a id="tocSoverviewalert"></a>
<a id="tocsoverviewalert"></a>

```json
{
  "alertDeliveryStatus": {
    "statusCode": 0,
    "users": [
      {
        "statusCode": 0,
        "userId": "string"
      }
    ]
  },
  "annotations": [
    {
      "annotationType": 0,
      "id": "string",
      "text": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "userId": "string"
    }
  ],
  "categoryId": "string",
  "eventId": "string",
  "flags": 0,
  "historyDetailed": {
    "acknowledged": "1970-01-01T00:00:00Z",
    "acknowledgedgements": [
      "string"
    ],
    "closed": "1970-01-01T00:00:00Z",
    "closedBy": "string",
    "created": "1970-01-01T00:00:00Z",
    "historyEntries": [
      {
        "id": "string",
        "timestamp": "1970-01-01T00:00:00Z",
        "type": 0,
        "userId": "string"
      }
    ]
  },
  "id": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "requiredAcknowledgements": 0,
  "status": 0,
  "subscriptionId": "string",
  "teamId": "string",
  "text": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alertDeliveryStatus|[AlertDeliveryStatusInfo](#schemaalertdeliverystatusinfo)|false|none|none|
|annotations|[[AlertAnnotationInfo](#schemaalertannotationinfo)]|false|none|none|
|categoryId|string \| null|false|none|none|
|eventId|string \| null|false|none|none|
|flags|integer(int32)|false|none|none|
|historyDetailed|[AlertHistoryInfoDetailed](#schemaalerthistoryinfodetailed)|false|none|none|
|id|string \| null|false|none|none|
|lastModified|string(date-time)|false|none|none|
|requiredAcknowledgements|integer(int32)|false|none|none|
|status|[AlertStatusCodes](#schemaalertstatuscodes)|false|none|none|
|subscriptionId|string \| null|false|none|none|
|teamId|string \| null|false|none|none|
|text|string \| null|false|none|none|
|title|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|0|
|status|1|
|status|2|
|status|4|
|status|8|
|status|16|
|status|32|

<h2 id="tocS_OverviewAlertPagedResultsPublic">OverviewAlertPagedResultsPublic</h2>
<!-- backwards compatibility -->
<a id="schemaoverviewalertpagedresultspublic"></a>
<a id="schema_OverviewAlertPagedResultsPublic"></a>
<a id="tocSoverviewalertpagedresultspublic"></a>
<a id="tocsoverviewalertpagedresultspublic"></a>

```json
{
  "continuationToken": {
    "nextPartitionKey": "string",
    "nextRowKey": "string",
    "nextTableName": "string"
  },
  "hasMore": true,
  "results": [
    {
      "alertDeliveryStatus": {
        "statusCode": 0,
        "users": [
          {
            "statusCode": 0,
            "userId": "string"
          }
        ]
      },
      "annotations": [
        {
          "annotationType": 0,
          "id": "string",
          "text": "string",
          "timestamp": "1970-01-01T00:00:00Z",
          "userId": "string"
        }
      ],
      "categoryId": "string",
      "eventId": "string",
      "flags": 0,
      "historyDetailed": {
        "acknowledged": "1970-01-01T00:00:00Z",
        "acknowledgedgements": [
          "string"
        ],
        "closed": "1970-01-01T00:00:00Z",
        "closedBy": "string",
        "created": "1970-01-01T00:00:00Z",
        "historyEntries": [
          {
            "id": "string",
            "timestamp": "1970-01-01T00:00:00Z",
            "type": 0,
            "userId": "string"
          }
        ]
      },
      "id": "string",
      "lastModified": "1970-01-01T00:00:00Z",
      "requiredAcknowledgements": 0,
      "status": 0,
      "subscriptionId": "string",
      "teamId": "string",
      "text": "string",
      "title": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|continuationToken|[PagedResultsPublicContinuationToken](#schemapagedresultspubliccontinuationtoken)|false|none|none|
|hasMore|boolean|false|read-only|none|
|results|[[OverviewAlert](#schemaoverviewalert)]|false|none|none|

<h2 id="tocS_OverviewEvent">OverviewEvent</h2>
<!-- backwards compatibility -->
<a id="schemaoverviewevent"></a>
<a id="schema_OverviewEvent"></a>
<a id="tocSoverviewevent"></a>
<a id="tocsoverviewevent"></a>

```json
{
  "acknowledgedAlerts": [
    "string"
  ],
  "alertId": "string",
  "categoryId": "string",
  "closedAlerts": [
    "string"
  ],
  "creationTime": "1970-01-01T00:00:00Z",
  "eventSourceType": 0,
  "eventStatus": 0,
  "id": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "severity": 0,
  "teamId": "string",
  "text": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledgedAlerts|[string]|false|none|none|
|alertId|string \| null|false|none|none|
|categoryId|string \| null|false|none|none|
|closedAlerts|[string]|false|none|none|
|creationTime|string(date-time)|false|none|none|
|eventSourceType|[EventSourceTypes](#schemaeventsourcetypes)|false|none|none|
|eventStatus|[EventStatusCodes](#schemaeventstatuscodes)|false|none|none|
|id|string \| null|false|none|none|
|lastModified|string(date-time)|false|none|none|
|severity|[EventSeverities](#schemaeventseverities)|false|none|none|
|teamId|string \| null|false|none|none|
|text|string \| null|false|none|none|
|title|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|eventSourceType|0|
|eventSourceType|1|
|eventSourceType|2|
|eventSourceType|3|
|eventSourceType|4|
|eventSourceType|5|
|eventStatus|0|
|eventStatus|1|
|eventStatus|2|
|eventStatus|3|
|eventStatus|4|
|eventStatus|5|
|eventStatus|6|
|eventStatus|1000|
|severity|0|
|severity|1|
|severity|2|

<h2 id="tocS_OverviewEventPagedResultsPublic">OverviewEventPagedResultsPublic</h2>
<!-- backwards compatibility -->
<a id="schemaovervieweventpagedresultspublic"></a>
<a id="schema_OverviewEventPagedResultsPublic"></a>
<a id="tocSovervieweventpagedresultspublic"></a>
<a id="tocsovervieweventpagedresultspublic"></a>

```json
{
  "continuationToken": {
    "nextPartitionKey": "string",
    "nextRowKey": "string",
    "nextTableName": "string"
  },
  "hasMore": true,
  "results": [
    {
      "acknowledgedAlerts": [
        "string"
      ],
      "alertId": "string",
      "categoryId": "string",
      "closedAlerts": [
        "string"
      ],
      "creationTime": "1970-01-01T00:00:00Z",
      "eventSourceType": 0,
      "eventStatus": 0,
      "id": "string",
      "lastModified": "1970-01-01T00:00:00Z",
      "severity": 0,
      "teamId": "string",
      "text": "string",
      "title": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|continuationToken|[PagedResultsPublicContinuationToken](#schemapagedresultspubliccontinuationtoken)|false|none|none|
|hasMore|boolean|false|read-only|none|
|results|[[OverviewEvent](#schemaoverviewevent)]|false|none|none|

<h2 id="tocS_PagedResultsPublicContinuationToken">PagedResultsPublicContinuationToken</h2>
<!-- backwards compatibility -->
<a id="schemapagedresultspubliccontinuationtoken"></a>
<a id="schema_PagedResultsPublicContinuationToken"></a>
<a id="tocSpagedresultspubliccontinuationtoken"></a>
<a id="tocspagedresultspubliccontinuationtoken"></a>

```json
{
  "nextPartitionKey": "string",
  "nextRowKey": "string",
  "nextTableName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPartitionKey|string \| null|false|none|none|
|nextRowKey|string \| null|false|none|none|
|nextTableName|string \| null|false|none|none|

<h2 id="tocS_PersistentNotificationModes">PersistentNotificationModes</h2>
<!-- backwards compatibility -->
<a id="schemapersistentnotificationmodes"></a>
<a id="schema_PersistentNotificationModes"></a>
<a id="tocSpersistentnotificationmodes"></a>
<a id="tocspersistentnotificationmodes"></a>

```json
0
```

<h2 id="tocS_PrepaidBalanceInfo">PrepaidBalanceInfo</h2>
<!-- backwards compatibility -->
<a id="schemaprepaidbalanceinfo"></a>
<a id="schema_PrepaidBalanceInfo"></a>
<a id="tocSprepaidbalanceinfo"></a>
<a id="tocsprepaidbalanceinfo"></a>

```json
{
  "balance": 0,
  "latestTopUp": "1970-01-01T00:00:00Z",
  "pendingTransaction": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|integer(int32)|false|none|none|
|latestTopUp|string(date-time) \| null|false|none|none|
|pendingTransaction|boolean|false|none|none|

<h2 id="tocS_PrepaidSettingsInfo">PrepaidSettingsInfo</h2>
<!-- backwards compatibility -->
<a id="schemaprepaidsettingsinfo"></a>
<a id="schema_PrepaidSettingsInfo"></a>
<a id="tocSprepaidsettingsinfo"></a>
<a id="tocsprepaidsettingsinfo"></a>

```json
{
  "topUpAmount": 0,
  "topUpEnabled": true,
  "topUpLimit": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topUpAmount|integer(int32)|false|none|none|
|topUpEnabled|boolean|false|none|none|
|topUpLimit|integer(int32)|false|none|none|

<h2 id="tocS_PrepaidTransactionInfo">PrepaidTransactionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaprepaidtransactioninfo"></a>
<a id="schema_PrepaidTransactionInfo"></a>
<a id="tocSprepaidtransactioninfo"></a>
<a id="tocsprepaidtransactioninfo"></a>

```json
{
  "autoTopUpId": "string",
  "created": "1970-01-01T00:00:00Z",
  "createdBy": "string",
  "credits": 0,
  "currency": "string",
  "modified": "1970-01-01T00:00:00Z",
  "packageCode": "string",
  "status": "string",
  "statusCode": 0,
  "subscriptionId": "string",
  "transactionId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoTopUpId|string \| null|false|none|none|
|created|string(date-time)|false|none|none|
|createdBy|string \| null|false|none|none|
|credits|integer(int32)|false|none|none|
|currency|string \| null|false|none|none|
|modified|string(date-time)|false|none|none|
|packageCode|string \| null|false|none|none|
|status|string \| null|false|none|none|
|statusCode|integer(int32)|false|none|none|
|subscriptionId|string \| null|false|none|none|
|transactionId|string \| null|false|none|none|

<h2 id="tocS_RaiseAlertInfo">RaiseAlertInfo</h2>
<!-- backwards compatibility -->
<a id="schemaraisealertinfo"></a>
<a id="schema_RaiseAlertInfo"></a>
<a id="tocSraisealertinfo"></a>
<a id="tocsraisealertinfo"></a>

```json
{
  "attachments": [
    {
      "content": "string",
      "contentType": "string",
      "encoding": 0,
      "id": "string",
      "name": "string"
    }
  ],
  "category": "string",
  "externalId": "string",
  "flags": 0,
  "parameters": [
    {
      "name": "string",
      "order": 0,
      "type": 0,
      "value": "string"
    }
  ],
  "severity": 0,
  "text": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[AlertAttachment](#schemaalertattachment)]|false|none|none|
|category|string \| null|false|none|none|
|externalId|string \| null|false|none|none|
|flags|integer(int32)|false|none|none|
|parameters|[[EventParameterInfo](#schemaeventparameterinfo)]|false|none|none|
|severity|[AlertSeverities](#schemaalertseverities)|false|none|none|
|text|string \| null|false|none|none|
|title|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|0|
|severity|1|
|severity|2|

<h2 id="tocS_ScheduleInfo">ScheduleInfo</h2>
<!-- backwards compatibility -->
<a id="schemascheduleinfo"></a>
<a id="schema_ScheduleInfo"></a>
<a id="tocSscheduleinfo"></a>
<a id="tocsscheduleinfo"></a>

```json
{
  "end": "1970-01-01T00:00:00Z",
  "id": "string",
  "options": 0,
  "start": "1970-01-01T00:00:00Z",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|string(date-time)|false|none|none|
|id|string \| null|false|none|none|
|options|integer(int32)|false|none|none|
|start|string(date-time)|false|none|none|
|userId|string \| null|false|none|none|

<h2 id="tocS_ScriptDescriptionData">ScriptDescriptionData</h2>
<!-- backwards compatibility -->
<a id="schemascriptdescriptiondata"></a>
<a id="schema_ScriptDescriptionData"></a>
<a id="tocSscriptdescriptiondata"></a>
<a id="tocsscriptdescriptiondata"></a>

```json
{
  "description": "string",
  "name": "string",
  "scriptType": "string",
  "shortDescription": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|name|string \| null|false|none|none|
|scriptType|string \| null|false|none|none|
|shortDescription|string \| null|false|none|none|

<h2 id="tocS_ScriptInstanceCustomUserData">ScriptInstanceCustomUserData</h2>
<!-- backwards compatibility -->
<a id="schemascriptinstancecustomuserdata"></a>
<a id="schema_ScriptInstanceCustomUserData"></a>
<a id="tocSscriptinstancecustomuserdata"></a>
<a id="tocsscriptinstancecustomuserdata"></a>

```json
{
  "customScriptDescription": "string",
  "customScriptName": "string",
  "instanceId": "string",
  "scriptId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customScriptDescription|string \| null|false|none|none|
|customScriptName|string \| null|false|none|none|
|instanceId|string \| null|false|none|none|
|scriptId|string \| null|false|none|none|

<h2 id="tocS_ScriptInstanceDetails">ScriptInstanceDetails</h2>
<!-- backwards compatibility -->
<a id="schemascriptinstancedetails"></a>
<a id="schema_ScriptInstanceDetails"></a>
<a id="tocSscriptinstancedetails"></a>
<a id="tocsscriptinstancedetails"></a>

```json
{
  "config": null,
  "customScriptDescription": "string",
  "customScriptName": "string",
  "enabled": true,
  "eventPattern": null,
  "instanceId": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "runtimeInformation": {
    "status": 0,
    "statusMessage": "string"
  },
  "scriptId": "string",
  "scriptName": "string",
  "subscriptionId": "string",
  "teamId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object \| null|false|none|none|
|customScriptDescription|string \| null|false|none|none|
|customScriptName|string \| null|false|none|none|
|enabled|boolean|false|none|none|
|eventPattern|object \| null|false|none|none|
|instanceId|string \| null|false|none|none|
|lastModified|string(date-time) \| null|false|none|none|
|runtimeInformation|[ScriptInstanceInfoRuntimeInformationModel](#schemascriptinstanceinforuntimeinformationmodel)|false|none|none|
|scriptId|string \| null|false|none|none|
|scriptName|string \| null|false|none|none|
|subscriptionId|string \| null|false|none|none|
|teamId|string \| null|false|none|none|

<h2 id="tocS_ScriptInstanceInfoRuntimeInformationModel">ScriptInstanceInfoRuntimeInformationModel</h2>
<!-- backwards compatibility -->
<a id="schemascriptinstanceinforuntimeinformationmodel"></a>
<a id="schema_ScriptInstanceInfoRuntimeInformationModel"></a>
<a id="tocSscriptinstanceinforuntimeinformationmodel"></a>
<a id="tocsscriptinstanceinforuntimeinformationmodel"></a>

```json
{
  "status": 0,
  "statusMessage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[ScriptInstanceInfoRuntimeStatus](#schemascriptinstanceinforuntimestatus)|false|none|none|
|statusMessage|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|0|
|status|1|
|status|2|
|status|3|
|status|-1|

<h2 id="tocS_ScriptInstanceInfoRuntimeStatus">ScriptInstanceInfoRuntimeStatus</h2>
<!-- backwards compatibility -->
<a id="schemascriptinstanceinforuntimestatus"></a>
<a id="schema_ScriptInstanceInfoRuntimeStatus"></a>
<a id="tocSscriptinstanceinforuntimestatus"></a>
<a id="tocsscriptinstanceinforuntimestatus"></a>

```json
0
```

<h2 id="tocS_ScriptLocalizationDetail">ScriptLocalizationDetail</h2>
<!-- backwards compatibility -->
<a id="schemascriptlocalizationdetail"></a>
<a id="schema_ScriptLocalizationDetail"></a>
<a id="tocSscriptlocalizationdetail"></a>
<a id="tocsscriptlocalizationdetail"></a>

```json
{
  "configMetadata": null,
  "data": {
    "description": "string",
    "name": "string",
    "scriptType": "string",
    "shortDescription": "string"
  },
  "language": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configMetadata|object \| null|false|none|none|
|data|[ScriptDescriptionData](#schemascriptdescriptiondata)|false|none|none|
|language|string \| null|false|none|none|

<h2 id="tocS_StatusChangeScope">StatusChangeScope</h2>
<!-- backwards compatibility -->
<a id="schemastatuschangescope"></a>
<a id="schema_StatusChangeScope"></a>
<a id="tocSstatuschangescope"></a>
<a id="tocsstatuschangescope"></a>

```json
0
```

<h2 id="tocS_StringItemsWrapper">StringItemsWrapper</h2>
<!-- backwards compatibility -->
<a id="schemastringitemswrapper"></a>
<a id="schema_StringItemsWrapper"></a>
<a id="tocSstringitemswrapper"></a>
<a id="tocsstringitemswrapper"></a>

```json
{
  "items": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[string]|false|none|none|

<h2 id="tocS_SubscriptionFeature">SubscriptionFeature</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionfeature"></a>
<a id="schema_SubscriptionFeature"></a>
<a id="tocSsubscriptionfeature"></a>
<a id="tocssubscriptionfeature"></a>

```json
{
  "name": "string",
  "type": 0,
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|type|integer(int32)|false|none|none|
|value|string \| null|false|none|none|

<h2 id="tocS_SubscriptionInfo">SubscriptionInfo</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptioninfo"></a>
<a id="schema_SubscriptionInfo"></a>
<a id="tocSsubscriptioninfo"></a>
<a id="tocssubscriptioninfo"></a>

```json
{
  "branchId": "string",
  "country": "string",
  "currency": "string",
  "externalAccountId": "string",
  "id": "string",
  "name": "string",
  "nextBilling": "1970-01-01T00:00:00Z",
  "ownerId": "string",
  "planCode": "string",
  "planState": 0,
  "referralEnabled": true,
  "status": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchId|string \| null|false|none|none|
|country|string \| null|false|none|none|
|currency|string \| null|false|none|none|
|externalAccountId|string \| null|false|none|none|
|id|string \| null|false|none|none|
|name|string \| null|false|none|none|
|nextBilling|string(date-time) \| null|false|none|none|
|ownerId|string \| null|false|none|none|
|planCode|string \| null|false|none|none|
|planState|integer(int32)|false|none|none|
|referralEnabled|boolean|false|none|none|
|status|integer(int32)|false|none|none|

<h2 id="tocS_SubscriptionProfile">SubscriptionProfile</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionprofile"></a>
<a id="schema_SubscriptionProfile"></a>
<a id="tocSsubscriptionprofile"></a>
<a id="tocssubscriptionprofile"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|

<h2 id="tocS_TeamCategoryOptOutModes">TeamCategoryOptOutModes</h2>
<!-- backwards compatibility -->
<a id="schemateamcategoryoptoutmodes"></a>
<a id="schema_TeamCategoryOptOutModes"></a>
<a id="tocSteamcategoryoptoutmodes"></a>
<a id="tocsteamcategoryoptoutmodes"></a>

```json
0
```

<h2 id="tocS_TeamDutySummaryInfo">TeamDutySummaryInfo</h2>
<!-- backwards compatibility -->
<a id="schemateamdutysummaryinfo"></a>
<a id="schema_TeamDutySummaryInfo"></a>
<a id="tocSteamdutysummaryinfo"></a>
<a id="tocsteamdutysummaryinfo"></a>

```json
{
  "dutyAssistEnabled": true,
  "dutySummaries": [
    {
      "dutyEnd": "1970-01-01T00:00:00Z",
      "dutyId": "string",
      "dutyStart": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dutyAssistEnabled|boolean|false|none|none|
|dutySummaries|[[DutySummaryInfo](#schemadutysummaryinfo)]|false|none|none|

<h2 id="tocS_TeamInfo">TeamInfo</h2>
<!-- backwards compatibility -->
<a id="schemateaminfo"></a>
<a id="schema_TeamInfo"></a>
<a id="tocSteaminfo"></a>
<a id="tocsteaminfo"></a>

```json
{
  "id": "string",
  "memberIds": [
    "string"
  ],
  "name": "string",
  "subscriptionId": "string",
  "timezone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|memberIds|[string]|false|none|none|
|name|string \| null|false|none|none|
|subscriptionId|string \| null|false|none|none|
|timezone|string \| null|false|none|none|

<h2 id="tocS_TeamProfile">TeamProfile</h2>
<!-- backwards compatibility -->
<a id="schemateamprofile"></a>
<a id="schema_TeamProfile"></a>
<a id="tocSteamprofile"></a>
<a id="tocsteamprofile"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|

<h2 id="tocS_TeamSetupProgress">TeamSetupProgress</h2>
<!-- backwards compatibility -->
<a id="schemateamsetupprogress"></a>
<a id="schema_TeamSetupProgress"></a>
<a id="tocSteamsetupprogress"></a>
<a id="tocsteamsetupprogress"></a>

```json
{
  "completedSteps": [
    "string"
  ],
  "teamId": "string",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedSteps|[string]|false|none|none|
|teamId|string \| null|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_UpdatePasswordInfo">UpdatePasswordInfo</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepasswordinfo"></a>
<a id="schema_UpdatePasswordInfo"></a>
<a id="tocSupdatepasswordinfo"></a>
<a id="tocsupdatepasswordinfo"></a>

```json
{
  "currentPassword": "string",
  "newPassword": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentPassword|string \| null|false|none|none|
|newPassword|string \| null|false|none|none|

<h2 id="tocS_UserDeliveryStatusInfo">UserDeliveryStatusInfo</h2>
<!-- backwards compatibility -->
<a id="schemauserdeliverystatusinfo"></a>
<a id="schema_UserDeliveryStatusInfo"></a>
<a id="tocSuserdeliverystatusinfo"></a>
<a id="tocsuserdeliverystatusinfo"></a>

```json
{
  "statusCode": 0,
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|[UserDeliveryStatusInfoCodes](#schemauserdeliverystatusinfocodes)|false|none|none|
|userId|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|statusCode|0|
|statusCode|1|
|statusCode|2|
|statusCode|4|
|statusCode|6|
|statusCode|8|
|statusCode|24|
|statusCode|26|
|statusCode|30|
|statusCode|31|
|statusCode|32|

<h2 id="tocS_UserDeliveryStatusInfoCodes">UserDeliveryStatusInfoCodes</h2>
<!-- backwards compatibility -->
<a id="schemauserdeliverystatusinfocodes"></a>
<a id="schema_UserDeliveryStatusInfoCodes"></a>
<a id="tocSuserdeliverystatusinfocodes"></a>
<a id="tocsuserdeliverystatusinfocodes"></a>

```json
0
```

<h2 id="tocS_UserDutyInfo">UserDutyInfo</h2>
<!-- backwards compatibility -->
<a id="schemauserdutyinfo"></a>
<a id="schema_UserDutyInfo"></a>
<a id="tocSuserdutyinfo"></a>
<a id="tocsuserdutyinfo"></a>

```json
{
  "lastStatusChange": "1970-01-01T00:00:00Z",
  "onDuty": true,
  "onManagerDuty": true,
  "overdue": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastStatusChange|string(date-time) \| null|false|none|none|
|onDuty|boolean|false|none|none|
|onManagerDuty|boolean|false|none|none|
|overdue|boolean|false|none|none|

<h2 id="tocS_UserImage">UserImage</h2>
<!-- backwards compatibility -->
<a id="schemauserimage"></a>
<a id="schema_UserImage"></a>
<a id="tocSuserimage"></a>
<a id="tocsuserimage"></a>

```json
{
  "content": "string",
  "contentDisposition": "string",
  "contentEncoding": "string",
  "contentType": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(byte) \| null|false|none|none|
|contentDisposition|string \| null|false|none|none|
|contentEncoding|string \| null|false|none|none|
|contentType|string \| null|false|none|none|
|lastModified|string(date-time) \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_UserInfo">UserInfo</h2>
<!-- backwards compatibility -->
<a id="schemauserinfo"></a>
<a id="schema_UserInfo"></a>
<a id="tocSuserinfo"></a>
<a id="tocsuserinfo"></a>

```json
{
  "colorIndex": 0,
  "contactAddresses": [
    {
      "address": "string",
      "channel": 0,
      "created": "1970-01-01T00:00:00Z",
      "device": {
        "appVersion": "string",
        "deviceId": "string",
        "name": "string",
        "osVersion": "string",
        "ringtone": "string",
        "ringtoneDisabled": true,
        "type": 0
      },
      "id": "string",
      "lastUpdated": "1970-01-01T00:00:00Z",
      "options": 0,
      "userId": "string"
    }
  ],
  "dutyInfo": {
    "lastStatusChange": "1970-01-01T00:00:00Z",
    "onDuty": true,
    "onManagerDuty": true,
    "overdue": true
  },
  "id": "string",
  "isDeactivated": true,
  "isInvite": true,
  "mail": "string",
  "name": "string",
  "roleId": "string",
  "subscriptionId": "string",
  "timeZone": "string",
  "userImageLastModified": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colorIndex|integer(int32)|false|none|none|
|contactAddresses|[[ContactAddressInfo](#schemacontactaddressinfo)]|false|none|none|
|dutyInfo|[UserDutyInfo](#schemauserdutyinfo)|false|none|none|
|id|string \| null|false|none|none|
|isDeactivated|boolean|false|none|none|
|isInvite|boolean|false|none|none|
|mail|string \| null|false|none|none|
|name|string \| null|false|none|none|
|roleId|string \| null|false|none|none|
|subscriptionId|string \| null|false|none|none|
|timeZone|string \| null|false|none|none|
|userImageLastModified|string(date-time) \| null|false|none|none|

<h2 id="tocS_UserInvitationInfo">UserInvitationInfo</h2>
<!-- backwards compatibility -->
<a id="schemauserinvitationinfo"></a>
<a id="schema_UserInvitationInfo"></a>
<a id="tocSuserinvitationinfo"></a>
<a id="tocsuserinvitationinfo"></a>

```json
{
  "inviterId": "string",
  "userMail": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inviterId|string \| null|false|none|none|
|userMail|string \| null|false|none|none|

<h2 id="tocS_UserInvitationResult">UserInvitationResult</h2>
<!-- backwards compatibility -->
<a id="schemauserinvitationresult"></a>
<a id="schema_UserInvitationResult"></a>
<a id="tocSuserinvitationresult"></a>
<a id="tocsuserinvitationresult"></a>

```json
{
  "errorCode": 0,
  "errorMessage": "string",
  "invitedUser": {
    "id": "string",
    "isInvite": true,
    "mail": "string",
    "name": "string",
    "roleId": "string"
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|integer(int32) \| null|false|none|none|
|errorMessage|string \| null|false|none|none|
|invitedUser|[InvitedUserInfo](#schemainviteduserinfo)|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_UserInvite">UserInvite</h2>
<!-- backwards compatibility -->
<a id="schemauserinvite"></a>
<a id="schema_UserInvite"></a>
<a id="tocSuserinvite"></a>
<a id="tocsuserinvite"></a>

```json
{
  "email": "string",
  "roleId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string \| null|false|none|none|
|roleId|string \| null|false|none|none|

<h2 id="tocS_UserLicenseInfo">UserLicenseInfo</h2>
<!-- backwards compatibility -->
<a id="schemauserlicenseinfo"></a>
<a id="schema_UserLicenseInfo"></a>
<a id="tocSuserlicenseinfo"></a>
<a id="tocsuserlicenseinfo"></a>

```json
{
  "currentUsers": 0,
  "isFree": true,
  "isTrial": true,
  "licensedUsers": 0,
  "planCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentUsers|integer(int32)|false|none|none|
|isFree|boolean|false|none|none|
|isTrial|boolean|false|none|none|
|licensedUsers|integer(int32)|false|none|none|
|planCode|string \| null|false|none|none|

<h2 id="tocS_UserMembership">UserMembership</h2>
<!-- backwards compatibility -->
<a id="schemausermembership"></a>
<a id="schema_UserMembership"></a>
<a id="tocSusermembership"></a>
<a id="tocsusermembership"></a>

```json
{
  "isValid": true,
  "roleId": "string",
  "teamId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isValid|boolean|false|read-only|none|
|roleId|string \| null|false|none|none|
|teamId|string \| null|false|none|none|

<h2 id="tocS_UserProfile">UserProfile</h2>
<!-- backwards compatibility -->
<a id="schemauserprofile"></a>
<a id="schema_UserProfile"></a>
<a id="tocSuserprofile"></a>
<a id="tocsuserprofile"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|

<h2 id="tocS_UserSetupProgress">UserSetupProgress</h2>
<!-- backwards compatibility -->
<a id="schemausersetupprogress"></a>
<a id="schema_UserSetupProgress"></a>
<a id="tocSusersetupprogress"></a>
<a id="tocsusersetupprogress"></a>

```json
{
  "completedSteps": [
    "string"
  ],
  "timestamp": "1970-01-01T00:00:00Z",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedSteps|[string]|false|none|none|
|timestamp|string(date-time)|false|none|none|
|userId|string \| null|false|none|none|

<h2 id="tocS_UsersInvitation">UsersInvitation</h2>
<!-- backwards compatibility -->
<a id="schemausersinvitation"></a>
<a id="schema_UsersInvitation"></a>
<a id="tocSusersinvitation"></a>
<a id="tocsusersinvitation"></a>

```json
{
  "inviterId": "string",
  "invites": [
    {
      "email": "string",
      "roleId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inviterId|string \| null|false|none|none|
|invites|[[UserInvite](#schemauserinvite)]|false|none|none|

<h2 id="tocS_WebhookBaseInfo">WebhookBaseInfo</h2>
<!-- backwards compatibility -->
<a id="schemawebhookbaseinfo"></a>
<a id="schema_WebhookBaseInfo"></a>
<a id="tocSwebhookbaseinfo"></a>
<a id="tocswebhookbaseinfo"></a>

```json
{
  "externalAddress": "string",
  "name": "string",
  "teamId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalAddress|string \| null|false|none|none|
|name|string \| null|false|none|none|
|teamId|string \| null|false|none|none|

<h2 id="tocS_WebhookInfo">WebhookInfo</h2>
<!-- backwards compatibility -->
<a id="schemawebhookinfo"></a>
<a id="schema_WebhookInfo"></a>
<a id="tocSwebhookinfo"></a>
<a id="tocswebhookinfo"></a>

```json
{
  "enabled": true,
  "externalAddress": "string",
  "id": "string",
  "name": "string",
  "subscriptionId": "string",
  "teamId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|externalAddress|string \| null|false|none|none|
|id|string \| null|false|none|none|
|name|string \| null|false|none|none|
|subscriptionId|string \| null|false|none|none|
|teamId|string \| null|false|none|none|
