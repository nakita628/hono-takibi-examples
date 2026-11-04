<h1 id="tokenization-webhooks">Tokenization webhooks v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

With Adyen, you can securely store payment details of your shoppers with their consent. We refer to these saved payment details as tokens.

 We use webhooks to inform you about token lifecycle events. For more information, refer to our [documentation](https://docs.adyen.com/online-payments/tokenization/).

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="tokenization-webhooks-webhooks">Webhooks</h1>

## Token already exists

<a id="opIdpost-recurring.token.alreadyExisting"></a>

`POST recurring.token.alreadyExisting`

Adyen sends this webhook when you attempt to create or update a token with details that match an already existing token.

> Body parameter

```json
{
  "createdAt": "2025-06-30T16:40:23+02:00",
  "eventId": "QBQQ9DLNRHHKGK38",
  "environment": "test",
  "data": {
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "storedPaymentMethodId": "M5N7TQ4TG5PFWR50",
    "type": "visastandarddebit",
    "operation": "alreadyExisting",
    "shopperReference": "YOUR_SHOPPER_REFERENCE"
  },
  "type": "recurring.token.alreadyExisting"
}
```

<h3 id="token-already-exists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TokenizationAlreadyExistingDetailsNotificationRequest](#schematokenizationalreadyexistingdetailsnotificationrequest)|false|none|
|» createdAt|body|string(date-time)|true|The date and time when the event happened, in ISO 8601 extended format.|
|» data|body|[RecurringTokenStoreOperation](#schemarecurringtokenstoreoperation)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» eventId|body|string|true|The PSP reference of the event that triggered the webhook.|
|» type|body|string|true|The type of webhook.|
|» version|body|string|false|The version of this entity.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» environment|test|
|» environment|live|
|» type|recurring.token.alreadyExisting|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="token-already-exists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TokenizationNotificationResponse](#schematokenizationnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Token created

<a id="opIdpost-recurring.token.created"></a>

`POST recurring.token.created`

Adyen sends this webhook when a token is created.

> Body parameter

```json
{
  "createdAt": "2025-06-30T16:40:23+02:00",
  "eventId": "QBQQ9DLNRHHKGK38",
  "environment": "test",
  "data": {
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "storedPaymentMethodId": "M5N7TQ4TG5PFWR50",
    "type": "visastandarddebit",
    "operation": "created",
    "shopperReference": "YOUR_SHOPPER_REFERENCE"
  },
  "type": "recurring.token.created"
}
```

<h3 id="token-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TokenizationCreatedDetailsNotificationRequest](#schematokenizationcreateddetailsnotificationrequest)|false|none|
|» createdAt|body|string(date-time)|true|The date and time when the event happened, in ISO 8601 extended format.|
|» data|body|[RecurringTokenStoreOperation](#schemarecurringtokenstoreoperation)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» eventId|body|string|true|The PSP reference of the event that triggered the webhook.|
|» type|body|string|true|The type of webhook.|
|» version|body|string|false|The version of this entity.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» environment|test|
|» environment|live|
|» type|recurring.token.created|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="token-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TokenizationNotificationResponse](#schematokenizationnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Token disabled

<a id="opIdpost-recurring.token.disabled"></a>

`POST recurring.token.disabled`

Adyen sends this webhook when a token is disabled. For example, when you [delete stored payment details](https://docs.adyen.com/online-payments/tokenization/managing-tokens/#delete-stored-details), or when a third party disables the payment details.

> Body parameter

```json
{
  "createdAt": "2025-06-30T16:40:23+02:00",
  "eventId": "QBQQ9DLNRHHKGK38",
  "environment": "test",
  "data": {
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "storedPaymentMethodId": "M5N7TQ4TG5PFWR50",
    "type": "visastandarddebit",
    "shopperReference": "YOUR_SHOPPER_REFERENCE"
  },
  "type": "recurring.token.disabled"
}
```

<h3 id="token-disabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TokenizationDisabledDetailsNotificationRequest](#schematokenizationdisableddetailsnotificationrequest)|false|none|
|» createdAt|body|string(date-time)|true|The date and time when the event happened, in ISO 8601 extended format.|
|» data|body|[RecurringToken](#schemarecurringtoken)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» eventId|body|string|true|The PSP reference of the event that triggered the webhook.|
|» type|body|string|true|The type of webhook.|
|» version|body|string|false|The version of this entity.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» environment|test|
|» environment|live|
|» type|recurring.token.disabled|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="token-disabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TokenizationNotificationResponse](#schematokenizationnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Token updated

<a id="opIdpost-recurring.token.updated"></a>

`POST recurring.token.updated`

Adyen sends this webhook when a token is updated, for example, when you [update stored details](https://docs.adyen.com/online-payments/tokenization/managing-tokens/#update-stored-details). Tokens can also be updated by card networks.

> Body parameter

```json
{
  "createdAt": "2025-06-30T16:40:23+02:00",
  "eventId": "QBQQ9DLNRHHKGK38",
  "environment": "test",
  "data": {
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "storedPaymentMethodId": "M5N7TQ4TG5PFWR50",
    "type": "visastandarddebit",
    "operation": "updated",
    "shopperReference": "YOUR_SHOPPER_REFERENCE"
  },
  "type": "recurring.token.updated"
}
```

<h3 id="token-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TokenizationUpdatedDetailsNotificationRequest](#schematokenizationupdateddetailsnotificationrequest)|false|none|
|» createdAt|body|string(date-time)|true|The date and time when the event happened, in ISO 8601 extended format.|
|» data|body|[RecurringTokenStoreOperation](#schemarecurringtokenstoreoperation)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» eventId|body|string|true|The PSP reference of the event that triggered the webhook.|
|» type|body|string|true|The type of webhook.|
|» version|body|string|false|The version of this entity.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» environment|test|
|» environment|live|
|» type|recurring.token.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="token-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TokenizationNotificationResponse](#schematokenizationnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

# Schemas

<h2 id="tocS_RecurringToken">RecurringToken</h2>
<!-- backwards compatibility -->
<a id="schemarecurringtoken"></a>
<a id="schema_RecurringToken"></a>
<a id="tocSrecurringtoken"></a>
<a id="tocsrecurringtoken"></a>

```json
{
  "merchantAccount": "string",
  "shopperReference": "string",
  "storedPaymentMethodId": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantAccount|string|true|none|The identifier of the merchant account related to the event that triggered the webhook.|
|shopperReference|string|true|none|Your unique shopper reference that is associated with the `storedPaymentMethodId`.|
|storedPaymentMethodId|string|true|none|The ID of the token.|
|type|string|true|none|The type of the payment method.|

<h2 id="tocS_RecurringTokenStoreOperation">RecurringTokenStoreOperation</h2>
<!-- backwards compatibility -->
<a id="schemarecurringtokenstoreoperation"></a>
<a id="schema_RecurringTokenStoreOperation"></a>
<a id="tocSrecurringtokenstoreoperation"></a>
<a id="tocsrecurringtokenstoreoperation"></a>

```json
{
  "merchantAccount": "string",
  "operation": "string",
  "shopperReference": "string",
  "storedPaymentMethodId": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantAccount|string|true|none|The identifier of the merchant account related to the event that triggered the webhook.|
|operation|string|true|none|A text description that provides details about the operation, intended for audit purposes.|
|shopperReference|string|true|none|Your unique shopper reference that is associated with the `storedPaymentMethodId`.|
|storedPaymentMethodId|string|true|none|The ID of the token.|
|type|string|true|none|The type of the payment method.|

<h2 id="tocS_TokenizationAlreadyExistingDetailsNotificationRequest">TokenizationAlreadyExistingDetailsNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schematokenizationalreadyexistingdetailsnotificationrequest"></a>
<a id="schema_TokenizationAlreadyExistingDetailsNotificationRequest"></a>
<a id="tocStokenizationalreadyexistingdetailsnotificationrequest"></a>
<a id="tocstokenizationalreadyexistingdetailsnotificationrequest"></a>

```json
{
  "createdAt": "2024-10-29T16:15:29+01:00",
  "data": {
    "merchantAccount": "string",
    "operation": "string",
    "shopperReference": "string",
    "storedPaymentMethodId": "string",
    "type": "string"
  },
  "environment": "live",
  "eventId": "string",
  "type": "recurring.token.alreadyExisting",
  "version": "1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when the event happened, in ISO 8601 extended format.|
|data|[RecurringTokenStoreOperation](#schemarecurringtokenstoreoperation)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|eventId|string|true|none|The PSP reference of the event that triggered the webhook.|
|type|string|true|none|The type of webhook.|
|version|string|false|none|The version of this entity.|

#### Enumerated Values

|Property|Value|
|---|---|
|environment|test|
|environment|live|
|type|recurring.token.alreadyExisting|

<h2 id="tocS_TokenizationCreatedDetailsNotificationRequest">TokenizationCreatedDetailsNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schematokenizationcreateddetailsnotificationrequest"></a>
<a id="schema_TokenizationCreatedDetailsNotificationRequest"></a>
<a id="tocStokenizationcreateddetailsnotificationrequest"></a>
<a id="tocstokenizationcreateddetailsnotificationrequest"></a>

```json
{
  "createdAt": "2024-10-29T16:15:29+01:00",
  "data": {
    "merchantAccount": "string",
    "operation": "string",
    "shopperReference": "string",
    "storedPaymentMethodId": "string",
    "type": "string"
  },
  "environment": "live",
  "eventId": "string",
  "type": "recurring.token.created",
  "version": "1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when the event happened, in ISO 8601 extended format.|
|data|[RecurringTokenStoreOperation](#schemarecurringtokenstoreoperation)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|eventId|string|true|none|The PSP reference of the event that triggered the webhook.|
|type|string|true|none|The type of webhook.|
|version|string|false|none|The version of this entity.|

#### Enumerated Values

|Property|Value|
|---|---|
|environment|test|
|environment|live|
|type|recurring.token.created|

<h2 id="tocS_TokenizationDisabledDetailsNotificationRequest">TokenizationDisabledDetailsNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schematokenizationdisableddetailsnotificationrequest"></a>
<a id="schema_TokenizationDisabledDetailsNotificationRequest"></a>
<a id="tocStokenizationdisableddetailsnotificationrequest"></a>
<a id="tocstokenizationdisableddetailsnotificationrequest"></a>

```json
{
  "createdAt": "2024-10-29T16:15:29+01:00",
  "data": {
    "merchantAccount": "string",
    "shopperReference": "string",
    "storedPaymentMethodId": "string",
    "type": "string"
  },
  "environment": "live",
  "eventId": "string",
  "type": "recurring.token.disabled",
  "version": "1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when the event happened, in ISO 8601 extended format.|
|data|[RecurringToken](#schemarecurringtoken)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|eventId|string|true|none|The PSP reference of the event that triggered the webhook.|
|type|string|true|none|The type of webhook.|
|version|string|false|none|The version of this entity.|

#### Enumerated Values

|Property|Value|
|---|---|
|environment|test|
|environment|live|
|type|recurring.token.disabled|

<h2 id="tocS_TokenizationNotificationResponse">TokenizationNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schematokenizationnotificationresponse"></a>
<a id="schema_TokenizationNotificationResponse"></a>
<a id="tocStokenizationnotificationresponse"></a>
<a id="tocstokenizationnotificationresponse"></a>

```json
{
  "notificationResponse": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationResponse|string|false|none|Respond with any **2xx** HTTP status code to [accept the webhook](https://docs.adyen.com/development-resources/webhooks/#accept-webhooks).|

<h2 id="tocS_TokenizationUpdatedDetailsNotificationRequest">TokenizationUpdatedDetailsNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schematokenizationupdateddetailsnotificationrequest"></a>
<a id="schema_TokenizationUpdatedDetailsNotificationRequest"></a>
<a id="tocStokenizationupdateddetailsnotificationrequest"></a>
<a id="tocstokenizationupdateddetailsnotificationrequest"></a>

```json
{
  "createdAt": "2024-10-29T16:15:29+01:00",
  "data": {
    "merchantAccount": "string",
    "operation": "string",
    "shopperReference": "string",
    "storedPaymentMethodId": "string",
    "type": "string"
  },
  "environment": "live",
  "eventId": "string",
  "type": "recurring.token.updated",
  "version": "1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when the event happened, in ISO 8601 extended format.|
|data|[RecurringTokenStoreOperation](#schemarecurringtokenstoreoperation)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|eventId|string|true|none|The PSP reference of the event that triggered the webhook.|
|type|string|true|none|The type of webhook.|
|version|string|false|none|The version of this entity.|

#### Enumerated Values

|Property|Value|
|---|---|
|environment|test|
|environment|live|
|type|recurring.token.updated|
