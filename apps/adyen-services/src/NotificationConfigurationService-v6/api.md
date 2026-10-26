<h1 id="notification-configuration-api">Notification Configuration API v6</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API is used for the classic integration. If you are just starting your implementation, refer to our [new integration guide](https://docs.adyen.com/adyen-for-platforms-model) instead.

The Notification Configuration API provides endpoints for setting up and testing notifications that inform you of events on your platform, for example when a verification check or a payout has been completed.

For more information, refer to our [documentation](https://docs.adyen.com/classic-platforms/notifications).
## Authentication
Your Adyen contact will provide your API credential and an API key. To connect to the API, add an `X-API-Key` header with the API key as the value, for example:

 ```
curl
-H "Content-Type: application/json" \
-H "X-API-Key: YOUR_API_KEY" \
...
```

Alternatively, you can use the username and password to connect to the API using basic authentication. For example:

```
curl
-U "ws@MarketPlace.YOUR_PLATFORM_ACCOUNT":"YOUR_WS_PASSWORD" \
-H "Content-Type: application/json" \
...
```
When going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).

## Versioning
The Notification Configuration API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://cal-test.adyen.com/cal/services/Notification/v6/createNotificationConfiguration
```

Base URLs:

* <a href="https://cal-test.adyen.com/cal/services/Notification/v6">https://cal-test.adyen.com/cal/services/Notification/v6</a>

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="notification-configuration-api-general">General</h1>

## Subscribe to notifications

<a id="opIdpost-createNotificationConfiguration"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Notification/v6/createNotificationConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "configurationDetails": {
      "active": true,
      "description": "Unique description 123",
      "eventConfigs": [
        {
          "eventType": "ACCOUNT_HOLDER_VERIFICATION",
          "includeMode": "INCLUDE"
        }
      ],
      "notifyURL": "https://www.adyen.com/notification-handler",
      "notifyUsername": "testUserName",
      "notifyPassword": "testPassword",
      "sslProtocol": "TLSv13"
    }
  }'
```

`POST /createNotificationConfiguration`

Creates a subscription to notifications informing you of events on your platform. After the subscription is created, the events specified in the configuration will be sent to the URL specified in the configuration. Subscriptions must be configured on a per-event basis (as opposed to, for example, a per-account holder basis), so all event notifications of a marketplace and of a given type will be sent to the same endpoint(s). A marketplace may have multiple endpoints if desired; an event notification may be sent to as many or as few different endpoints as configured.

> Body parameter

```json
{
  "configurationDetails": {
    "active": true,
    "description": "Unique description 123",
    "eventConfigs": [
      {
        "eventType": "ACCOUNT_HOLDER_VERIFICATION",
        "includeMode": "INCLUDE"
      }
    ],
    "notifyURL": "https://www.adyen.com/notification-handler",
    "notifyUsername": "testUserName",
    "notifyPassword": "testPassword",
    "sslProtocol": "TLSv13"
  }
}
```

<h3 id="subscribe-to-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateNotificationConfigurationRequest](#schemacreatenotificationconfigurationrequest)|false|none|
|» configurationDetails|body|[NotificationConfigurationDetails](#schemanotificationconfigurationdetails)|true|Details of the prospective notification subscription configuration.|

> Example responses

> 200 Response

```json
{
  "pspReference": "8516178952380553",
  "configurationDetails": {
    "active": true,
    "description": "Unique description 123",
    "eventConfigs": [
      {
        "eventType": "ACCOUNT_HOLDER_VERIFICATION",
        "includeMode": "INCLUDE"
      }
    ],
    "notificationId": 28468,
    "notifyURL": "https://www.adyen.com/notification-handler",
    "sslProtocol": "TLSv13"
  }
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="subscribe-to-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GetNotificationConfigurationResponse](#schemagetnotificationconfigurationresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Delete a notification subscription configuration

<a id="opIdpost-deleteNotificationConfigurations"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Notification/v6/deleteNotificationConfigurations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "notificationIds": [
      27891
    ]
  }'
```

`POST /deleteNotificationConfigurations`

Deletes an existing notification subscription configuration. After the subscription is deleted, no further event notifications will be sent to the URL defined in the subscription.

> Body parameter

```json
{
  "notificationIds": [
    27891
  ]
}
```

<h3 id="delete-a-notification-subscription-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteNotificationConfigurationRequest](#schemadeletenotificationconfigurationrequest)|false|none|
|» notificationIds|body|[integer(int64)]|true|A list of IDs of the notification subscription configurations to be deleted.|

> Example responses

> 200 Response

```json
{
  "pspReference": "8516480472498802"
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="delete-a-notification-subscription-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GenericResponse](#schemagenericresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get a notification subscription configuration

<a id="opIdpost-getNotificationConfiguration"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Notification/v6/getNotificationConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "notificationId": 21259
  }'
```

`POST /getNotificationConfiguration`

Returns the details of the configuration of a notification subscription.

> Body parameter

```json
{
  "notificationId": 21259
}
```

<h3 id="get-a-notification-subscription-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GetNotificationConfigurationRequest](#schemagetnotificationconfigurationrequest)|false|none|
|» notificationId|body|integer(int64)|true|The ID of the notification subscription configuration whose details are to be retrieved.|

> Example responses

> 200 Response

```json
{
  "pspReference": "8616480378704419",
  "configurationDetails": {
    "active": true,
    "apiVersion": 5,
    "description": "test",
    "eventConfigs": [
      {
        "eventType": "ACCOUNT_HOLDER_VERIFICATION",
        "includeMode": "INCLUDE"
      }
    ],
    "notificationId": 50054,
    "notifyURL": "https://www.adyen.com/notification-handler",
    "sslProtocol": "TLSv13"
  }
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="get-a-notification-subscription-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GetNotificationConfigurationResponse](#schemagetnotificationconfigurationresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get a list of notification subscription configurations

<a id="opIdpost-getNotificationConfigurationList"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Notification/v6/getNotificationConfigurationList \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{}'
```

`POST /getNotificationConfigurationList`

Returns the details of the configurations of all of the notification subscriptions in the platform of the executing user.

> Body parameter

```json
{}
```

<h3 id="get-a-list-of-notification-subscription-configurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EmptyRequest](#schemaemptyrequest)|false|none|

> Example responses

> 200 Response

```json
{
  "pspReference": "8516480437185726",
  "configurations": [
    {
      "active": true,
      "description": "Unique description 12223",
      "eventConfigs": [
        {
          "eventType": "ACCOUNT_HOLDER_VERIFICATION",
          "includeMode": "INCLUDE"
        }
      ],
      "notificationId": 27893,
      "notifyURL": "https://www.adyen.com/notification-handler",
      "sslProtocol": "TLSv13"
    },
    {
      "active": true,
      "description": "just testing things",
      "eventConfigs": [
        {
          "eventType": "ACCOUNT_HOLDER_VERIFICATION",
          "includeMode": "INCLUDE"
        }
      ],
      "notificationId": 25032,
      "notifyURL": "https://www.adyen.com/notification-handler",
      "sslProtocol": "TLSv13"
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="get-a-list-of-notification-subscription-configurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GetNotificationConfigurationListResponse](#schemagetnotificationconfigurationlistresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Test a notification configuration

<a id="opIdpost-testNotificationConfiguration"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Notification/v6/testNotificationConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "eventTypes": [
      "ACCOUNT_HOLDER_VERIFICATION"
    ],
    "notificationId": 25032
  }'
```

`POST /testNotificationConfiguration`

Tests an existing notification subscription configuration. For each event type specified, a test notification will be generated and sent to the URL configured in the subscription specified.

> Body parameter

```json
{
  "eventTypes": [
    "ACCOUNT_HOLDER_VERIFICATION"
  ],
  "notificationId": 25032
}
```

<h3 id="test-a-notification-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TestNotificationConfigurationRequest](#schematestnotificationconfigurationrequest)|false|none|
|» eventTypes|body|[string]|false|The event types to test.  If left blank, then all of the configured event types will be tested.<br>>Permitted values: `ACCOUNT_HOLDER_CREATED`, `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`, `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`, `ACCOUNT_HOLDER_STORE_STATUS_CHANGE` `ACCOUNT_HOLDER_VERIFICATION`, `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`, `PAYMENT_FAILURE`, `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`, `BENEFICIARY_SETUP`, `COMPENSATE_NEGATIVE_BALANCE`.|
|» notificationId|body|integer(int64)|true|The ID of the notification subscription configuration to be tested.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» eventTypes|ACCOUNT_CLOSED|
|» eventTypes|ACCOUNT_CREATED|
|» eventTypes|ACCOUNT_FUNDS_BELOW_THRESHOLD|
|» eventTypes|ACCOUNT_HOLDER_CREATED|
|» eventTypes|ACCOUNT_HOLDER_LIMIT_REACHED|
|» eventTypes|ACCOUNT_HOLDER_MIGRATED|
|» eventTypes|ACCOUNT_HOLDER_PAYOUT|
|» eventTypes|ACCOUNT_HOLDER_STATUS_CHANGE|
|» eventTypes|ACCOUNT_HOLDER_STORE_STATUS_CHANGE|
|» eventTypes|ACCOUNT_HOLDER_UPCOMING_DEADLINE|
|» eventTypes|ACCOUNT_HOLDER_UPDATED|
|» eventTypes|ACCOUNT_HOLDER_VERIFICATION|
|» eventTypes|ACCOUNT_UPDATED|
|» eventTypes|BENEFICIARY_SETUP|
|» eventTypes|COMPENSATE_NEGATIVE_BALANCE|
|» eventTypes|DIRECT_DEBIT_INITIATED|
|» eventTypes|FUNDS_MIGRATED|
|» eventTypes|PAYMENT_FAILURE|
|» eventTypes|PENDING_CREDIT|
|» eventTypes|REFUND_FUNDS_TRANSFER|
|» eventTypes|REPORT_AVAILABLE|
|» eventTypes|SCHEDULED_REFUNDS|
|» eventTypes|SCORE_SIGNAL_TRIGGERED|
|» eventTypes|TRANSFER_FUNDS|
|» eventTypes|TRANSFER_NOT_PAIDOUT_TRANSFERS|

> Example responses

> 200 Response

```json
{
  "pspReference": "8616480452462678",
  "errorMessages": [
    "The server did not respond with HTTP 2XX"
  ],
  "eventTypes": [
    "ACCOUNT_HOLDER_VERIFICATION"
  ],
  "exchangeMessages": [
    {
      "messageCode": "Number",
      "messageDescription": "1"
    },
    {
      "messageCode": "Title",
      "messageDescription": "Test 1: 8616480452462678"
    }
  ],
  "notificationId": 25032,
  "okMessages": [
    "...",
    "ResponseTime_ms: 262",
    "ResponseCode: 404"
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="test-a-notification-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TestNotificationConfigurationResponse](#schematestnotificationconfigurationresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Update a notification subscription configuration

<a id="opIdpost-updateNotificationConfiguration"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Notification/v6/updateNotificationConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "configurationDetails": {
      "active": false,
      "description": "Test notif config 756",
      "eventConfigs": [
        {
          "eventType": "ACCOUNT_HOLDER_CREATED",
          "includeMode": "EXCLUDE"
        },
        {
          "eventType": "ACCOUNT_CREATED",
          "includeMode": "INCLUDE"
        }
      ],
      "notificationId": 21259,
      "notifyPassword": "testPassword2",
      "notifyURL": "https://www.adyen.com/notification-handler",
      "notifyUsername": "testUserName2",
      "sslProtocol": "TLSv13"
    }
  }'
```

`POST /updateNotificationConfiguration`

Updates an existing notification subscription configuration. If you are updating the event types, you must provide all event types, otherwise the previous event type configuration will be overwritten.

> Body parameter

```json
{
  "configurationDetails": {
    "active": false,
    "description": "Test notif config 756",
    "eventConfigs": [
      {
        "eventType": "ACCOUNT_HOLDER_CREATED",
        "includeMode": "EXCLUDE"
      },
      {
        "eventType": "ACCOUNT_CREATED",
        "includeMode": "INCLUDE"
      }
    ],
    "notificationId": 21259,
    "notifyPassword": "testPassword2",
    "notifyURL": "https://www.adyen.com/notification-handler",
    "notifyUsername": "testUserName2",
    "sslProtocol": "TLSv13"
  }
}
```

<h3 id="update-a-notification-subscription-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateNotificationConfigurationRequest](#schemaupdatenotificationconfigurationrequest)|false|none|
|» configurationDetails|body|[NotificationConfigurationDetails](#schemanotificationconfigurationdetails)|true|Details of the notification subscription configuration to be updated.|

> Example responses

> 200 Response

```json
{
  "pspReference": "8516178952580574",
  "configurationDetails": {
    "active": false,
    "description": "Test notif config 756",
    "eventConfigs": [
      {
        "eventType": "ACCOUNT_CREATED",
        "includeMode": "INCLUDE"
      },
      {
        "eventType": "ACCOUNT_HOLDER_CREATED",
        "includeMode": "EXCLUDE"
      }
    ],
    "notificationId": 21259,
    "notifyURL": "https://www.adyen.com/notification-handler",
    "sslProtocol": "TLSv13"
  }
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="update-a-notification-subscription-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GetNotificationConfigurationResponse](#schemagetnotificationconfigurationresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_CreateNotificationConfigurationRequest">CreateNotificationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatenotificationconfigurationrequest"></a>
<a id="schema_CreateNotificationConfigurationRequest"></a>
<a id="tocScreatenotificationconfigurationrequest"></a>
<a id="tocscreatenotificationconfigurationrequest"></a>

```json
{
  "configurationDetails": {
    "active": true,
    "apiVersion": 0,
    "description": "string",
    "eventConfigs": [
      {
        "eventType": "ACCOUNT_CLOSED",
        "includeMode": "EXCLUDE"
      }
    ],
    "hmacSignatureKey": "string",
    "notificationId": 0,
    "notifyPassword": "string",
    "notifyURL": "string",
    "notifyUsername": "string",
    "sslProtocol": "TLSv12"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationDetails|[NotificationConfigurationDetails](#schemanotificationconfigurationdetails)|true|none|Details of the prospective notification subscription configuration.|

<h2 id="tocS_DeleteNotificationConfigurationRequest">DeleteNotificationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletenotificationconfigurationrequest"></a>
<a id="schema_DeleteNotificationConfigurationRequest"></a>
<a id="tocSdeletenotificationconfigurationrequest"></a>
<a id="tocsdeletenotificationconfigurationrequest"></a>

```json
{
  "notificationIds": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationIds|[integer(int64)]|true|none|A list of IDs of the notification subscription configurations to be deleted.|

<h2 id="tocS_EmptyRequest">EmptyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaemptyrequest"></a>
<a id="schema_EmptyRequest"></a>
<a id="tocSemptyrequest"></a>
<a id="tocsemptyrequest"></a>

```json
{}
```

<h2 id="tocS_ErrorFieldType">ErrorFieldType</h2>
<!-- backwards compatibility -->
<a id="schemaerrorfieldtype"></a>
<a id="schema_ErrorFieldType"></a>
<a id="tocSerrorfieldtype"></a>
<a id="tocserrorfieldtype"></a>

```json
{
  "errorCode": 0,
  "errorDescription": "string",
  "fieldType": {
    "field": "string",
    "fieldName": "accountCode",
    "shareholderCode": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|integer(int32)|false|none|The validation error code.|
|errorDescription|string|false|none|A description of the validation error.|
|fieldType|[FieldType](#schemafieldtype)|false|none|The type of error field.|

<h2 id="tocS_ExchangeMessage">ExchangeMessage</h2>
<!-- backwards compatibility -->
<a id="schemaexchangemessage"></a>
<a id="schema_ExchangeMessage"></a>
<a id="tocSexchangemessage"></a>
<a id="tocsexchangemessage"></a>

```json
{
  "messageCode": "string",
  "messageDescription": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageCode|string|false|none|none|
|messageDescription|string|false|none|none|

<h2 id="tocS_FieldType">FieldType</h2>
<!-- backwards compatibility -->
<a id="schemafieldtype"></a>
<a id="schema_FieldType"></a>
<a id="tocSfieldtype"></a>
<a id="tocsfieldtype"></a>

```json
{
  "field": "string",
  "fieldName": "accountCode",
  "shareholderCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|The full name of the property.|
|fieldName|string|false|none|The type of the field.|
|shareholderCode|string|false|none|The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder.|

#### Enumerated Values

|Property|Value|
|---|---|
|fieldName|accountCode|
|fieldName|accountHolderCode|
|fieldName|accountHolderDetails|
|fieldName|accountNumber|
|fieldName|accountStateType|
|fieldName|accountStatus|
|fieldName|accountType|
|fieldName|address|
|fieldName|balanceAccount|
|fieldName|balanceAccountActive|
|fieldName|balanceAccountCode|
|fieldName|balanceAccountId|
|fieldName|bankAccount|
|fieldName|bankAccountCode|
|fieldName|bankAccountName|
|fieldName|bankAccountUUID|
|fieldName|bankBicSwift|
|fieldName|bankCity|
|fieldName|bankCode|
|fieldName|bankName|
|fieldName|bankStatement|
|fieldName|branchCode|
|fieldName|businessContact|
|fieldName|cardToken|
|fieldName|checkCode|
|fieldName|city|
|fieldName|companyRegistration|
|fieldName|constitutionalDocument|
|fieldName|controller|
|fieldName|country|
|fieldName|countryCode|
|fieldName|currency|
|fieldName|currencyCode|
|fieldName|dateOfBirth|
|fieldName|description|
|fieldName|destinationAccountCode|
|fieldName|document|
|fieldName|documentContent|
|fieldName|documentExpirationDate|
|fieldName|documentIssuerCountry|
|fieldName|documentIssuerState|
|fieldName|documentName|
|fieldName|documentNumber|
|fieldName|documentType|
|fieldName|doingBusinessAs|
|fieldName|drivingLicence|
|fieldName|drivingLicenceBack|
|fieldName|drivingLicenceFront|
|fieldName|drivingLicense|
|fieldName|email|
|fieldName|firstName|
|fieldName|formType|
|fieldName|fullPhoneNumber|
|fieldName|gender|
|fieldName|hopWebserviceUser|
|fieldName|houseNumberOrName|
|fieldName|iban|
|fieldName|idCard|
|fieldName|idCardBack|
|fieldName|idCardFront|
|fieldName|idNumber|
|fieldName|identityDocument|
|fieldName|individualDetails|
|fieldName|infix|
|fieldName|jobTitle|
|fieldName|lastName|
|fieldName|lastReviewDate|
|fieldName|legalArrangement|
|fieldName|legalArrangementCode|
|fieldName|legalArrangementEntity|
|fieldName|legalArrangementEntityCode|
|fieldName|legalArrangementLegalForm|
|fieldName|legalArrangementMember|
|fieldName|legalArrangementMembers|
|fieldName|legalArrangementName|
|fieldName|legalArrangementReference|
|fieldName|legalArrangementRegistrationNumber|
|fieldName|legalArrangementTaxNumber|
|fieldName|legalArrangementType|
|fieldName|legalBusinessName|
|fieldName|legalEntity|
|fieldName|legalEntityType|
|fieldName|linkedViasVirtualAccount|
|fieldName|logo|
|fieldName|merchantAccount|
|fieldName|merchantCategoryCode|
|fieldName|merchantHouseNumber|
|fieldName|merchantReference|
|fieldName|microDeposit|
|fieldName|name|
|fieldName|nationality|
|fieldName|originalReference|
|fieldName|ownerCity|
|fieldName|ownerCountryCode|
|fieldName|ownerDateOfBirth|
|fieldName|ownerHouseNumberOrName|
|fieldName|ownerName|
|fieldName|ownerPostalCode|
|fieldName|ownerState|
|fieldName|ownerStreet|
|fieldName|passport|
|fieldName|passportNumber|
|fieldName|payoutMethod|
|fieldName|payoutMethodCode|
|fieldName|payoutSchedule|
|fieldName|pciSelfAssessment|
|fieldName|personalData|
|fieldName|phoneCountryCode|
|fieldName|phoneNumber|
|fieldName|postalCode|
|fieldName|primaryCurrency|
|fieldName|reason|
|fieldName|registrationNumber|
|fieldName|returnUrl|
|fieldName|schedule|
|fieldName|shareholder|
|fieldName|shareholderCode|
|fieldName|shareholderCodeAndSignatoryCode|
|fieldName|shareholderCodeOrSignatoryCode|
|fieldName|shareholderType|
|fieldName|shareholderTypes|
|fieldName|shopperInteraction|
|fieldName|signatory|
|fieldName|signatoryCode|
|fieldName|socialSecurityNumber|
|fieldName|sourceAccountCode|
|fieldName|splitAccount|
|fieldName|splitConfigurationUUID|
|fieldName|splitCurrency|
|fieldName|splitValue|
|fieldName|splits|
|fieldName|stateOrProvince|
|fieldName|status|
|fieldName|stockExchange|
|fieldName|stockNumber|
|fieldName|stockTicker|
|fieldName|store|
|fieldName|storeDetail|
|fieldName|storeName|
|fieldName|storeReference|
|fieldName|street|
|fieldName|taxId|
|fieldName|tier|
|fieldName|tierNumber|
|fieldName|transferCode|
|fieldName|ultimateParentCompany|
|fieldName|ultimateParentCompanyAddressDetails|
|fieldName|ultimateParentCompanyAddressDetailsCountry|
|fieldName|ultimateParentCompanyBusinessDetails|
|fieldName|ultimateParentCompanyBusinessDetailsLegalBusinessName|
|fieldName|ultimateParentCompanyBusinessDetailsRegistrationNumber|
|fieldName|ultimateParentCompanyCode|
|fieldName|ultimateParentCompanyStockExchange|
|fieldName|ultimateParentCompanyStockNumber|
|fieldName|ultimateParentCompanyStockNumberOrStockTicker|
|fieldName|ultimateParentCompanyStockTicker|
|fieldName|unknown|
|fieldName|value|
|fieldName|verificationType|
|fieldName|virtualAccount|
|fieldName|visaNumber|
|fieldName|webAddress|
|fieldName|year|

<h2 id="tocS_GenericResponse">GenericResponse</h2>
<!-- backwards compatibility -->
<a id="schemagenericresponse"></a>
<a id="schema_GenericResponse"></a>
<a id="tocSgenericresponse"></a>
<a id="tocsgenericresponse"></a>

```json
{
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Contains field validation errors that would prevent requests from being processed.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|

<h2 id="tocS_GetNotificationConfigurationListResponse">GetNotificationConfigurationListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetnotificationconfigurationlistresponse"></a>
<a id="schema_GetNotificationConfigurationListResponse"></a>
<a id="tocSgetnotificationconfigurationlistresponse"></a>
<a id="tocsgetnotificationconfigurationlistresponse"></a>

```json
{
  "configurations": [
    {
      "active": true,
      "apiVersion": 0,
      "description": "string",
      "eventConfigs": [
        {
          "eventType": "ACCOUNT_CLOSED",
          "includeMode": "EXCLUDE"
        }
      ],
      "hmacSignatureKey": "string",
      "notificationId": 0,
      "notifyPassword": "string",
      "notifyURL": "string",
      "notifyUsername": "string",
      "sslProtocol": "TLSv12"
    }
  ],
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurations|[[NotificationConfigurationDetails](#schemanotificationconfigurationdetails)]|false|none|Details of the notification subscription configurations.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Contains field validation errors that would prevent requests from being processed.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|

<h2 id="tocS_GetNotificationConfigurationRequest">GetNotificationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetnotificationconfigurationrequest"></a>
<a id="schema_GetNotificationConfigurationRequest"></a>
<a id="tocSgetnotificationconfigurationrequest"></a>
<a id="tocsgetnotificationconfigurationrequest"></a>

```json
{
  "notificationId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationId|integer(int64)|true|none|The ID of the notification subscription configuration whose details are to be retrieved.|

<h2 id="tocS_GetNotificationConfigurationResponse">GetNotificationConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetnotificationconfigurationresponse"></a>
<a id="schema_GetNotificationConfigurationResponse"></a>
<a id="tocSgetnotificationconfigurationresponse"></a>
<a id="tocsgetnotificationconfigurationresponse"></a>

```json
{
  "configurationDetails": {
    "active": true,
    "apiVersion": 0,
    "description": "string",
    "eventConfigs": [
      {
        "eventType": "ACCOUNT_CLOSED",
        "includeMode": "EXCLUDE"
      }
    ],
    "hmacSignatureKey": "string",
    "notificationId": 0,
    "notifyPassword": "string",
    "notifyURL": "string",
    "notifyUsername": "string",
    "sslProtocol": "TLSv12"
  },
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationDetails|[NotificationConfigurationDetails](#schemanotificationconfigurationdetails)|true|none|Details of the notification subscription configuration.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Contains field validation errors that would prevent requests from being processed.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|

<h2 id="tocS_NotificationConfigurationDetails">NotificationConfigurationDetails</h2>
<!-- backwards compatibility -->
<a id="schemanotificationconfigurationdetails"></a>
<a id="schema_NotificationConfigurationDetails"></a>
<a id="tocSnotificationconfigurationdetails"></a>
<a id="tocsnotificationconfigurationdetails"></a>

```json
{
  "active": true,
  "apiVersion": 0,
  "description": "string",
  "eventConfigs": [
    {
      "eventType": "ACCOUNT_CLOSED",
      "includeMode": "EXCLUDE"
    }
  ],
  "hmacSignatureKey": "string",
  "notificationId": 0,
  "notifyPassword": "string",
  "notifyURL": "string",
  "notifyUsername": "string",
  "sslProtocol": "TLSv12"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|Indicates whether the notification subscription is active.|
|apiVersion|integer(int32)|false|none|The version of the notification to which you are subscribing. To make sure that your integration can properly process the notification, subscribe to the same version as the API that you're using.|
|description|string|false|none|A description of the notification subscription configuration.|
|eventConfigs|[[NotificationEventConfiguration](#schemanotificationeventconfiguration)]|false|none|Contains objects that define event types and their subscription settings.|
|hmacSignatureKey|string|false|none|A string with which to salt the notification(s) before hashing. If this field is provided, a hash value will be included under the notification header `HmacSignature` and the hash protocol will be included under the notification header `Protocol`. A notification body along with its `hmacSignatureKey` and `Protocol` can be used to calculate a hash value; matching this hash value with the `HmacSignature` will ensure that the notification body has not been tampered with or corrupted.<br><br>>Must be a 32-byte hex-encoded string (i.e. a string containing 64 hexadecimal characters; e.g. "b0ea55c2fe60d4d1d605e9c385e0e7f7e6cafbb939ce07010f31a327a0871f27").<br><br>The omission of this field will preclude the provision of the `HmacSignature` and `Protocol` headers in notification(s).|
|notificationId|integer(int64)|false|none|Adyen-generated ID for the entry, returned in the response when you create a notification configuration. Required when updating an existing configuration using [`/updateNotificationConfiguration`](https://docs.adyen.com/api-explorer/#/NotificationConfigurationService/latest/post/updateNotificationConfiguration).|
|notifyPassword|string|false|none|The password to use when accessing the notifyURL with the specified username.|
|notifyURL|string|false|none|The URL to which the notifications are to be sent.|
|notifyUsername|string|false|none|The username to use when accessing the notifyURL.|
|sslProtocol|string|false|none|The SSL protocol employed by the endpoint.<br>>Permitted values: `TLSv12`, `TLSv13`.|

#### Enumerated Values

|Property|Value|
|---|---|
|sslProtocol|TLSv12|
|sslProtocol|TLSv13|

<h2 id="tocS_NotificationEventConfiguration">NotificationEventConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanotificationeventconfiguration"></a>
<a id="schema_NotificationEventConfiguration"></a>
<a id="tocSnotificationeventconfiguration"></a>
<a id="tocsnotificationeventconfiguration"></a>

```json
{
  "eventType": "ACCOUNT_CLOSED",
  "includeMode": "EXCLUDE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventType|string|true|none|The type of event.<br><br>Possible values: **ACCOUNT_CLOSED**, **ACCOUNT_CREATED**, **ACCOUNT_FUNDS_BELOW_THRESHOLD**, **ACCOUNT_HOLDER_CREATED**, **ACCOUNT_HOLDER_LIMIT_REACHED**, **ACCOUNT_HOLDER_PAYOUT**, **ACCOUNT_HOLDER_STATUS_CHANGE**, **ACCOUNT_HOLDER_STORE_STATUS_CHANGE**, **ACCOUNT_HOLDER_UPCOMING_DEADLINE**, **ACCOUNT_HOLDER_UPDATED**, **ACCOUNT_HOLDER_VERIFICATION**, **ACCOUNT_UPDATED**, **BENEFICIARY_SETUP**, **COMPENSATE_NEGATIVE_BALANCE**, **DIRECT_DEBIT_INITIATED**, **PAYMENT_FAILURE**, **REFUND_FUNDS_TRANSFER**, **REPORT_AVAILABLE**, **SCHEDULED_REFUNDS**, **TRANSFER_FUNDS**.|
|includeMode|string|true|none|Indicates whether the specified `eventType` is sent to your webhook endpoint.<br>Possible values:<br>* **INCLUDE**: Send the specified `eventType`.<br>* **EXCLUDE**: Send all event types except the specified `eventType` and other event types with the `includeMode` set to **EXCLUDE**.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|ACCOUNT_CLOSED|
|eventType|ACCOUNT_CREATED|
|eventType|ACCOUNT_FUNDS_BELOW_THRESHOLD|
|eventType|ACCOUNT_HOLDER_CREATED|
|eventType|ACCOUNT_HOLDER_LIMIT_REACHED|
|eventType|ACCOUNT_HOLDER_MIGRATED|
|eventType|ACCOUNT_HOLDER_PAYOUT|
|eventType|ACCOUNT_HOLDER_STATUS_CHANGE|
|eventType|ACCOUNT_HOLDER_STORE_STATUS_CHANGE|
|eventType|ACCOUNT_HOLDER_UPCOMING_DEADLINE|
|eventType|ACCOUNT_HOLDER_UPDATED|
|eventType|ACCOUNT_HOLDER_VERIFICATION|
|eventType|ACCOUNT_UPDATED|
|eventType|BENEFICIARY_SETUP|
|eventType|COMPENSATE_NEGATIVE_BALANCE|
|eventType|DIRECT_DEBIT_INITIATED|
|eventType|FUNDS_MIGRATED|
|eventType|PAYMENT_FAILURE|
|eventType|PENDING_CREDIT|
|eventType|REFUND_FUNDS_TRANSFER|
|eventType|REPORT_AVAILABLE|
|eventType|SCHEDULED_REFUNDS|
|eventType|SCORE_SIGNAL_TRIGGERED|
|eventType|TRANSFER_FUNDS|
|eventType|TRANSFER_NOT_PAIDOUT_TRANSFERS|
|includeMode|EXCLUDE|
|includeMode|INCLUDE|

<h2 id="tocS_ServiceError">ServiceError</h2>
<!-- backwards compatibility -->
<a id="schemaserviceerror"></a>
<a id="schema_ServiceError"></a>
<a id="tocSserviceerror"></a>
<a id="tocsserviceerror"></a>

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|false|none|The error code mapped to the error message.|
|errorType|string|false|none|The category of the error.|
|message|string|false|none|A short explanation of the issue.|
|pspReference|string|false|none|The PSP reference of the payment.|
|status|integer(int32)|false|none|The HTTP response status.|

<h2 id="tocS_TestNotificationConfigurationRequest">TestNotificationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schematestnotificationconfigurationrequest"></a>
<a id="schema_TestNotificationConfigurationRequest"></a>
<a id="tocStestnotificationconfigurationrequest"></a>
<a id="tocstestnotificationconfigurationrequest"></a>

```json
{
  "eventTypes": [
    "ACCOUNT_CLOSED"
  ],
  "notificationId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTypes|[string]|false|none|The event types to test.  If left blank, then all of the configured event types will be tested.<br>>Permitted values: `ACCOUNT_HOLDER_CREATED`, `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`, `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`, `ACCOUNT_HOLDER_STORE_STATUS_CHANGE` `ACCOUNT_HOLDER_VERIFICATION`, `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`, `PAYMENT_FAILURE`, `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`, `BENEFICIARY_SETUP`, `COMPENSATE_NEGATIVE_BALANCE`.|
|notificationId|integer(int64)|true|none|The ID of the notification subscription configuration to be tested.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventTypes|ACCOUNT_CLOSED|
|eventTypes|ACCOUNT_CREATED|
|eventTypes|ACCOUNT_FUNDS_BELOW_THRESHOLD|
|eventTypes|ACCOUNT_HOLDER_CREATED|
|eventTypes|ACCOUNT_HOLDER_LIMIT_REACHED|
|eventTypes|ACCOUNT_HOLDER_MIGRATED|
|eventTypes|ACCOUNT_HOLDER_PAYOUT|
|eventTypes|ACCOUNT_HOLDER_STATUS_CHANGE|
|eventTypes|ACCOUNT_HOLDER_STORE_STATUS_CHANGE|
|eventTypes|ACCOUNT_HOLDER_UPCOMING_DEADLINE|
|eventTypes|ACCOUNT_HOLDER_UPDATED|
|eventTypes|ACCOUNT_HOLDER_VERIFICATION|
|eventTypes|ACCOUNT_UPDATED|
|eventTypes|BENEFICIARY_SETUP|
|eventTypes|COMPENSATE_NEGATIVE_BALANCE|
|eventTypes|DIRECT_DEBIT_INITIATED|
|eventTypes|FUNDS_MIGRATED|
|eventTypes|PAYMENT_FAILURE|
|eventTypes|PENDING_CREDIT|
|eventTypes|REFUND_FUNDS_TRANSFER|
|eventTypes|REPORT_AVAILABLE|
|eventTypes|SCHEDULED_REFUNDS|
|eventTypes|SCORE_SIGNAL_TRIGGERED|
|eventTypes|TRANSFER_FUNDS|
|eventTypes|TRANSFER_NOT_PAIDOUT_TRANSFERS|

<h2 id="tocS_TestNotificationConfigurationResponse">TestNotificationConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schematestnotificationconfigurationresponse"></a>
<a id="schema_TestNotificationConfigurationResponse"></a>
<a id="tocStestnotificationconfigurationresponse"></a>
<a id="tocstestnotificationconfigurationresponse"></a>

```json
{
  "errorMessages": [
    "string"
  ],
  "eventTypes": [
    "ACCOUNT_CLOSED"
  ],
  "exchangeMessages": [
    {
      "messageCode": "string",
      "messageDescription": "string"
    }
  ],
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "notificationId": 0,
  "okMessages": [
    "string"
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorMessages|[string]|false|none|Any error messages encountered.|
|eventTypes|[string]|false|none|The event types that were tested.<br>>Permitted values: `ACCOUNT_HOLDER_CREATED`, `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`, `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`, `ACCOUNT_HOLDER_STORE_STATUS_CHANGE` `ACCOUNT_HOLDER_VERIFICATION`, `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`, `PAYMENT_FAILURE`, `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`, `BENEFICIARY_SETUP`, `COMPENSATE_NEGATIVE_BALANCE`.|
|exchangeMessages|[[ExchangeMessage](#schemaexchangemessage)]|false|none|The notification message and related response messages.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Contains field validation errors that would prevent requests from being processed.|
|notificationId|integer(int64)|true|none|The ID of the notification subscription configuration.|
|okMessages|[string]|false|none|A list of messages describing the testing steps.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventTypes|ACCOUNT_CLOSED|
|eventTypes|ACCOUNT_CREATED|
|eventTypes|ACCOUNT_FUNDS_BELOW_THRESHOLD|
|eventTypes|ACCOUNT_HOLDER_CREATED|
|eventTypes|ACCOUNT_HOLDER_LIMIT_REACHED|
|eventTypes|ACCOUNT_HOLDER_MIGRATED|
|eventTypes|ACCOUNT_HOLDER_PAYOUT|
|eventTypes|ACCOUNT_HOLDER_STATUS_CHANGE|
|eventTypes|ACCOUNT_HOLDER_STORE_STATUS_CHANGE|
|eventTypes|ACCOUNT_HOLDER_UPCOMING_DEADLINE|
|eventTypes|ACCOUNT_HOLDER_UPDATED|
|eventTypes|ACCOUNT_HOLDER_VERIFICATION|
|eventTypes|ACCOUNT_UPDATED|
|eventTypes|BENEFICIARY_SETUP|
|eventTypes|COMPENSATE_NEGATIVE_BALANCE|
|eventTypes|DIRECT_DEBIT_INITIATED|
|eventTypes|FUNDS_MIGRATED|
|eventTypes|PAYMENT_FAILURE|
|eventTypes|PENDING_CREDIT|
|eventTypes|REFUND_FUNDS_TRANSFER|
|eventTypes|REPORT_AVAILABLE|
|eventTypes|SCHEDULED_REFUNDS|
|eventTypes|SCORE_SIGNAL_TRIGGERED|
|eventTypes|TRANSFER_FUNDS|
|eventTypes|TRANSFER_NOT_PAIDOUT_TRANSFERS|

<h2 id="tocS_UpdateNotificationConfigurationRequest">UpdateNotificationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenotificationconfigurationrequest"></a>
<a id="schema_UpdateNotificationConfigurationRequest"></a>
<a id="tocSupdatenotificationconfigurationrequest"></a>
<a id="tocsupdatenotificationconfigurationrequest"></a>

```json
{
  "configurationDetails": {
    "active": true,
    "apiVersion": 0,
    "description": "string",
    "eventConfigs": [
      {
        "eventType": "ACCOUNT_CLOSED",
        "includeMode": "EXCLUDE"
      }
    ],
    "hmacSignatureKey": "string",
    "notificationId": 0,
    "notifyPassword": "string",
    "notifyURL": "string",
    "notifyUsername": "string",
    "sslProtocol": "TLSv12"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationDetails|[NotificationConfigurationDetails](#schemanotificationconfigurationdetails)|true|none|Details of the notification subscription configuration to be updated.|
