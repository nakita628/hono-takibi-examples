<h1 id="balance-webhook">Balance webhook v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Adyen sends webhooks to inform you of balance changes in your balance platform.

You can use the [Configuration API](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balancePlatforms/(id)/webhooks/(id)/settings) to set the conditions that a balance change must meet for Adyen to send a balance webhook:

- In your entire balance platform
- In the balance accounts of specific account holders
- In a specific balance account

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="balance-webhook-webhooks">Webhooks</h1>

## Blocked funds released

<a id="opIdpost-balancePlatform.balanceAccount.balance.block.released"></a>

`POST balancePlatform.balanceAccount.balance.block.released`

Adyen sends this webhook when funds that were previously blocked are released, making them available. Funds may be blocked for reasons such as:

**Collateral for payments**: Funds are held to secure loans or payments, and are released upon repayment.

**Risk mitigation**: Funds are held to cover potential risks like chargebacks, and are released after a set period, such as a return window.



> Body parameter

```json
{
  "data": {
    "accountHolder": {
      "description": "Account holder for retail operations",
      "id": "AH00000000000000000001",
      "reference": "Store_001"
    },
    "amount": {
      "currency": "EUR",
      "value": 25000
    },
    "balanceAccount": {
      "description": "Main operating account",
      "id": "BA00000000000000000001",
      "reference": "OP_ACCT_MAIN"
    },
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "batchReference": "BATCH_REF_20250925",
    "blockedBalanceAfter": {
      "currency": "EUR",
      "value": -75000
    },
    "blockedBalanceBefore": {
      "currency": "EUR",
      "value": -100000
    },
    "creationDate": "2025-09-25T14:30:00Z",
    "valueDate": "2025-09-25T14:35:00Z"
  },
  "environment": "test",
  "timestamp": "2025-09-25T14:35:00Z",
  "type": "balancePlatform.balanceAccount.balance.block.released"
}
```

<h3 id="blocked-funds-released-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReleasedBlockedBalanceNotificationRequest](#schemareleasedblockedbalancenotificationrequest)|false|none|
|» data|body|[ReleaseBlockedBalanceNotificationData](#schemareleaseblockedbalancenotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balanceAccount.balance.block.released|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "[accepted]"
}
```

<h3 id="blocked-funds-released-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Balance updated

<a id="opIdpost-balancePlatform.balanceAccount.balance.updated"></a>

`POST balancePlatform.balanceAccount.balance.updated`

Adyen sends this webhook when the specified balance type reaches or drops below the threshold you configured.

> Body parameter

```json
{
  "data": {
    "settingIds": [
      "BWHS00000000000000000000000001",
      "BWHS00000000000000000000000002"
    ],
    "creationDate": "2025-01-19T13:37:38+02:00",
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "balanceAccountId": "BA00000000000000000000000001",
    "currency": "USD",
    "balances": {
      "available": 499900,
      "pending": 350000,
      "reserved": 120000,
      "balance": 470000
    }
  },
  "environment": "test",
  "type": "balancePlatform.balanceAccount.balance.updated"
}
```

<h3 id="balance-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BalanceAccountBalanceNotificationRequest](#schemabalanceaccountbalancenotificationrequest)|false|none|
|» data|body|[BalanceNotificationData](#schemabalancenotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balanceAccount.balance.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "[accepted]"
}
```

<h3 id="balance-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="success">
This operation does not require authentication
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
  "currency": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount.|
|value|integer(int64)|true|none|The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units).|

<h2 id="tocS_BalanceAccountBalanceNotificationRequest">BalanceAccountBalanceNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemabalanceaccountbalancenotificationrequest"></a>
<a id="schema_BalanceAccountBalanceNotificationRequest"></a>
<a id="tocSbalanceaccountbalancenotificationrequest"></a>
<a id="tocsbalanceaccountbalancenotificationrequest"></a>

```json
{
  "data": {
    "balanceAccountId": "string",
    "balancePlatform": "string",
    "balances": {
      "available": 0,
      "balance": 0,
      "pending": 0,
      "reserved": 0
    },
    "creationDate": "1970-01-01T00:00:00Z",
    "currency": "string",
    "id": "string",
    "settingIds": [
      "string"
    ]
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.balanceAccount.balance.updated"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[BalanceNotificationData](#schemabalancenotificationdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.balanceAccount.balance.updated|

<h2 id="tocS_BalanceNotificationData">BalanceNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemabalancenotificationdata"></a>
<a id="schema_BalanceNotificationData"></a>
<a id="tocSbalancenotificationdata"></a>
<a id="tocsbalancenotificationdata"></a>

```json
{
  "balanceAccountId": "string",
  "balancePlatform": "string",
  "balances": {
    "available": 0,
    "balance": 0,
    "pending": 0,
    "reserved": 0
  },
  "creationDate": "1970-01-01T00:00:00Z",
  "currency": "string",
  "id": "string",
  "settingIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccountId|string|true|none|The unique identifier of the balance account.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|balances|[Balances](#schemabalances)|true|none|The list balance types.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).|
|id|string|false|read-only|The ID of the resource.|
|settingIds|[string]|true|none|The unique identifier of the balance webhook setting.|

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

<h2 id="tocS_Balances">Balances</h2>
<!-- backwards compatibility -->
<a id="schemabalances"></a>
<a id="schema_Balances"></a>
<a id="tocSbalances"></a>
<a id="tocsbalances"></a>

```json
{
  "available": 0,
  "balance": 0,
  "pending": 0,
  "reserved": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|integer(int64)|false|none|The balance that is available for use.|
|balance|integer(int64)|false|none|The sum of transactions that have already been settled.|
|pending|integer(int64)|false|none|The sum of transactions that will be settled in the future.|
|reserved|integer(int64)|false|none|The balance currently held in reserve.|

<h2 id="tocS_ReleaseBlockedBalanceNotificationData">ReleaseBlockedBalanceNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemareleaseblockedbalancenotificationdata"></a>
<a id="schema_ReleaseBlockedBalanceNotificationData"></a>
<a id="tocSreleaseblockedbalancenotificationdata"></a>
<a id="tocsreleaseblockedbalancenotificationdata"></a>

```json
{
  "accountHolder": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "amount": {
    "currency": "string",
    "value": 0
  },
  "balanceAccount": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "balancePlatform": "string",
  "batchReference": "string",
  "blockedBalanceAfter": {
    "currency": "string",
    "value": 0
  },
  "blockedBalanceBefore": {
    "currency": "string",
    "value": 0
  },
  "creationDate": "1970-01-01T00:00:00Z",
  "id": "string",
  "valueDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolder|[ResourceReference](#schemaresourcereference)|true|none|Contains information about the account holder associated with the `balanceAccount`.|
|amount|[Amount](#schemaamount)|true|none|The amount released.|
|balanceAccount|[ResourceReference](#schemaresourcereference)|true|none|Contains information about the associated balance account.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|batchReference|string|false|none|The reference of the batch that was released.|
|blockedBalanceAfter|[Amount](#schemaamount)|false|none|The new blocked balance after the funds were released.|
|blockedBalanceBefore|[Amount](#schemaamount)|false|none|The blocked balance before the funds were released.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|id|string|false|read-only|The ID of the resource.|
|valueDate|string(date-time)|false|none|The date and time when the amount was released, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|

<h2 id="tocS_ReleasedBlockedBalanceNotificationRequest">ReleasedBlockedBalanceNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemareleasedblockedbalancenotificationrequest"></a>
<a id="schema_ReleasedBlockedBalanceNotificationRequest"></a>
<a id="tocSreleasedblockedbalancenotificationrequest"></a>
<a id="tocsreleasedblockedbalancenotificationrequest"></a>

```json
{
  "data": {
    "accountHolder": {
      "description": "string",
      "id": "string",
      "reference": "string"
    },
    "amount": {
      "currency": "string",
      "value": 0
    },
    "balanceAccount": {
      "description": "string",
      "id": "string",
      "reference": "string"
    },
    "balancePlatform": "string",
    "batchReference": "string",
    "blockedBalanceAfter": {
      "currency": "string",
      "value": 0
    },
    "blockedBalanceBefore": {
      "currency": "string",
      "value": 0
    },
    "creationDate": "1970-01-01T00:00:00Z",
    "id": "string",
    "valueDate": "1970-01-01T00:00:00Z"
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.balanceAccount.balance.block.released"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ReleaseBlockedBalanceNotificationData](#schemareleaseblockedbalancenotificationdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.balanceAccount.balance.block.released|

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
