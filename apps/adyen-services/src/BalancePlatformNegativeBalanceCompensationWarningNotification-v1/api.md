<h1 id="negative-balance-compensation-warning">Negative balance compensation warning v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Adyen sends webhooks to inform you about balance accounts whose balance has been negative for 20 or more days. If you do not transfer funds to that balance account to cover the negative balance before the scheduled compensation date, a transfer is made from your liable balance account on that date.

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="negative-balance-compensation-warning-webhooks">Webhooks</h1>

## Negative balance compensation scheduled

<a id="opIdpost-balancePlatform.negativeBalanceCompensationWarning.scheduled"></a>

`POST balancePlatform.negativeBalanceCompensationWarning.scheduled`

Adyen sends this webhook to inform you about a balance account whose balance has been negative for 20 or more days. If you do not transfer funds to that balance account to cover the negative balance before the scheduled compensation date, a transfer is made from your liable balance account on that date.

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "creationDate": "2024-10-22T00:00:00+02:00",
    "id": "BA00000000000000000001",
    "accountHolder": {
      "description": "Description for the account holder.",
      "reference": "YOUR_REFERENCE",
      "id": "AH00000000000000000001"
    },
    "amount": {
      "currency": "EUR",
      "value": -145050
    },
    "liableBalanceAccountId": "BA11111111111111111111",
    "negativeBalanceSince": "2024-10-19T00:33:13+02:00",
    "scheduledCompensationAt": "2024-12-01T01:00:00+01:00"
  },
  "environment": "test",
  "timestamp": "2024-10-22T00:00:00+02:00",
  "type": "balancePlatform.negativeBalanceCompensationWarning.scheduled"
}
```

<h3 id="negative-balance-compensation-scheduled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NegativeBalanceCompensationWarningNotificationRequest](#schemanegativebalancecompensationwarningnotificationrequest)|false|none|
|» data|body|[NegativeBalanceCompensationWarningNotificationData](#schemanegativebalancecompensationwarningnotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.negativeBalanceCompensationWarning.scheduled|

<h3 id="negative-balance-compensation-scheduled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

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

<h2 id="tocS_NegativeBalanceCompensationWarningNotificationData">NegativeBalanceCompensationWarningNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemanegativebalancecompensationwarningnotificationdata"></a>
<a id="schema_NegativeBalanceCompensationWarningNotificationData"></a>
<a id="tocSnegativebalancecompensationwarningnotificationdata"></a>
<a id="tocsnegativebalancecompensationwarningnotificationdata"></a>

```json
{
  "accountHolder": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "balancePlatform": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "id": "string",
  "liableBalanceAccountId": "string",
  "negativeBalanceSince": "1970-01-01T00:00:00Z",
  "scheduledCompensationAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolder|[ResourceReference](#schemaresourcereference)|false|none|The details of the account holder who owns the balance account with a negative balance.|
|amount|[Amount](#schemaamount)|false|none|The negative balance amount of the balance account.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|id|string|false|none|The ID of the resource.|
|liableBalanceAccountId|string|false|none|The balance account ID of the account that will be used to compensate the balance account whose balance is negative.|
|negativeBalanceSince|string(date-time)|false|none|The date the balance for the account became negative.|
|scheduledCompensationAt|string(date-time)|false|none|The date when a compensation transfer to the account is scheduled to happen.|

<h2 id="tocS_NegativeBalanceCompensationWarningNotificationRequest">NegativeBalanceCompensationWarningNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemanegativebalancecompensationwarningnotificationrequest"></a>
<a id="schema_NegativeBalanceCompensationWarningNotificationRequest"></a>
<a id="tocSnegativebalancecompensationwarningnotificationrequest"></a>
<a id="tocsnegativebalancecompensationwarningnotificationrequest"></a>

```json
{
  "data": {
    "accountHolder": {
      "description": "string",
      "id": "string",
      "reference": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "balancePlatform": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "id": "string",
    "liableBalanceAccountId": "string",
    "negativeBalanceSince": "1970-01-01T00:00:00Z",
    "scheduledCompensationAt": "1970-01-01T00:00:00Z"
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.negativeBalanceCompensationWarning.scheduled"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[NegativeBalanceCompensationWarningNotificationData](#schemanegativebalancecompensationwarningnotificationdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.negativeBalanceCompensationWarning.scheduled|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "balancePlatform": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|id|string|false|none|The ID of the resource.|

<h2 id="tocS_ResourceReference">ResourceReference</h2>
<!-- backwards compatibility -->
<a id="schemaresourcereference"></a>
<a id="schema_ResourceReference"></a>
<a id="tocSresourcereference"></a>
<a id="tocsresourcereference"></a>

```json
{
  "description": "string",
  "id": "string",
  "reference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the resource.|
|id|string|false|none|The unique identifier of the resource.|
|reference|string|false|none|The reference for the resource.|
