<h1 id="dispute-webhooks">Dispute webhooks v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Adyen sends webhooks to inform your system about the creation or update of raised disputes, and chargebacks resulting from raised disputes.

You can use these webhooks to build your implementation.

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="dispute-webhooks-webhooks">Webhooks</h1>

## Dispute created

<a id="opIdpost-balancePlatform.dispute.created"></a>

`POST balancePlatform.dispute.created`

Adyen sends this webhook when a dispute is created. This webhook only informs your server of requests. 

> Body parameter

```json
{
  "data": {
    "arn": "string",
    "balancePlatform": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "description": "string",
    "disputedAmount": {
      "currency": "str",
      "value": 0
    },
    "id": "string",
    "status": "string",
    "statusDetail": "string",
    "transactionId": "string",
    "type": "fraud"
  },
  "type": "balancePlatform.dispute.created"
}
```

<h3 id="dispute-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DisputeNotificationRequest](#schemadisputenotificationrequest)|false|none|
|» data|body|[DisputeEventNotification](#schemadisputeeventnotification)|true|Contains event details.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.dispute.created|
|» type|balancePlatform.dispute.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="dispute-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Dispute updated

<a id="opIdpost-balancePlatform.dispute.updated"></a>

`POST balancePlatform.dispute.updated`

Adyen sends this webhook when a dispute is updated. This webhook only informs your server of requests. 

> Body parameter

```json
{
  "data": {
    "arn": "string",
    "balancePlatform": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "description": "string",
    "disputedAmount": {
      "currency": "str",
      "value": 0
    },
    "id": "string",
    "status": "string",
    "statusDetail": "string",
    "transactionId": "string",
    "type": "fraud"
  },
  "type": "balancePlatform.dispute.created"
}
```

<h3 id="dispute-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DisputeNotificationRequest](#schemadisputenotificationrequest)|false|none|
|» data|body|[DisputeEventNotification](#schemadisputeeventnotification)|true|Contains event details.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.dispute.created|
|» type|balancePlatform.dispute.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="dispute-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

# Schemas

<h2 id="tocS_Amount">Amount</h2>
<!-- backwards compatibility -->
<a id="schemaamount"></a>
<a id="schema_Amount"></a>
<a id="tocSamount"></a>
<a id="tocsamount"></a>

```json
{
  "currency": "str",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount.|
|value|integer(int64)|true|none|The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units).|

<h2 id="tocS_BalancePlatformNotificationResponse">BalancePlatformNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemabalanceplatformnotificationresponse"></a>
<a id="schema_BalancePlatformNotificationResponse"></a>
<a id="tocSbalanceplatformnotificationresponse"></a>
<a id="tocsbalanceplatformnotificationresponse"></a>

```json
{
  "notificationResponse": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationResponse|string|false|none|Respond with any **2xx** HTTP status code to [accept the webhook](https://docs.adyen.com/development-resources/webhooks/#accept-webhooks).|

<h2 id="tocS_DisputeEventNotification">DisputeEventNotification</h2>
<!-- backwards compatibility -->
<a id="schemadisputeeventnotification"></a>
<a id="schema_DisputeEventNotification"></a>
<a id="tocSdisputeeventnotification"></a>
<a id="tocsdisputeeventnotification"></a>

```json
{
  "arn": "string",
  "balancePlatform": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "description": "string",
  "disputedAmount": {
    "currency": "str",
    "value": 0
  },
  "id": "string",
  "status": "string",
  "statusDetail": "string",
  "transactionId": "string",
  "type": "fraud"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|string|false|none|The unique Acquirer Reference Number (arn) generated by the card scheme for each capture. You can use the arn to trace the transaction through its lifecycle.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|description|string|false|none|Contains information about the dispute.|
|disputedAmount|[Amount](#schemaamount)|false|none|The amount for which the transaction is being disputed. The disputed amount cannot be greater than the transaction amount. If an amount was not provided, the entire transaction amount is disputed.|
|id|string|false|none|The ID of the resource.|
|status|string|false|none|The current status of the dispute.|
|statusDetail|string|false|none|Additional information about the status of the dispute, when available.|
|transactionId|string|false|none|The unique reference of the transaction for which the dispute is requested.|
|type|string|false|none|The type of dispute raised for the transaction.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|fraud|
|type|notDelivered|
|type|duplicate|
|type|notAsDescribed|
|type|cancelled|
|type|other|

<h2 id="tocS_DisputeNotificationRequest">DisputeNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisputenotificationrequest"></a>
<a id="schema_DisputeNotificationRequest"></a>
<a id="tocSdisputenotificationrequest"></a>
<a id="tocsdisputenotificationrequest"></a>

```json
{
  "data": {
    "arn": "string",
    "balancePlatform": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "description": "string",
    "disputedAmount": {
      "currency": "str",
      "value": 0
    },
    "id": "string",
    "status": "string",
    "statusDetail": "string",
    "transactionId": "string",
    "type": "fraud"
  },
  "type": "balancePlatform.dispute.created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DisputeEventNotification](#schemadisputeeventnotification)|true|none|Contains event details.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.dispute.created|
|type|balancePlatform.dispute.updated|
