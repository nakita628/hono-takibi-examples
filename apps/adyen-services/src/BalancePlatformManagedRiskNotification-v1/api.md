<h1 id="managed-risk-webhooks">Managed risk webhooks v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Adyen sends these webhooks to inform you when we adjust the risk measures applied to your account holders' payouts, based on their risk level.

These measures include settlement delays, rolling reserves, and reserve waivers.

These webhooks are sent to customers that use Adyen [Managed Risk](https://docs.adyen.com/platforms/managed-risk/).

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="managed-risk-webhooks-webhooks">Webhooks</h1>

## Blocked funds released

<a id="opIdpost-balancePlatform.managedRisk.balance.block.released"></a>

`POST balancePlatform.managedRisk.balance.block.released`

Adyen sends this webhook when funds that were previously blocked are released, making them available.

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
  "type": "balancePlatform.managedRisk.balance.block.released"
}
```

<h3 id="blocked-funds-released-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ManagedRiskBalanceBlockReleasedNotificationRequest](#schemamanagedriskbalanceblockreleasednotificationrequest)|true|none|
|» data|body|[ReleaseBlockedBalanceNotificationData](#schemareleaseblockedbalancenotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» environment|test|
|» environment|live|
|» type|balancePlatform.managedRisk.balance.block.released|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="blocked-funds-released-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Reserve waiver applied

<a id="opIdpost-balancePlatform.managedRisk.reserveWaiver.applied"></a>

`POST balancePlatform.managedRisk.reserveWaiver.applied`

Adyen sends this webhook when we apply a reserve waiver to your account holder, so that reserves are no longer withheld from their payouts.

> Body parameter

```json
{
  "data": {
    "accountHolderId": "AH00000000000000000001",
    "eventDate": "2025-01-19",
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "id": "9313547924908349"
  },
  "environment": "test",
  "type": "balancePlatform.managedRisk.reserveWaiver.applied"
}
```

<h3 id="reserve-waiver-applied-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ManagedRiskReserveWaiverAppliedNotificationRequest](#schemamanagedriskreservewaiverappliednotificationrequest)|true|none|
|» data|body|[ReserveWaiverAppliedNotificationResource](#schemareservewaiverappliednotificationresource)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» environment|test|
|» environment|live|
|» type|balancePlatform.managedRisk.reserveWaiver.applied|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="reserve-waiver-applied-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Reserve waiver removed

<a id="opIdpost-balancePlatform.managedRisk.reserveWaiver.removed"></a>

`POST balancePlatform.managedRisk.reserveWaiver.removed`

Adyen sends this webhook when we remove a reserve waiver from your account holder, so that reserves are withheld from their payouts again.

> Body parameter

```json
{
  "data": {
    "accountHolderId": "AH00000000000000000001",
    "eventDate": "2025-01-19",
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "id": "9313547924908349"
  },
  "environment": "test",
  "type": "balancePlatform.managedRisk.reserveWaiver.removed"
}
```

<h3 id="reserve-waiver-removed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ManagedRiskReserveWaiverRemovedNotificationRequest](#schemamanagedriskreservewaiverremovednotificationrequest)|true|none|
|» data|body|[ReserveWaiverRemovedNotificationResource](#schemareservewaiverremovednotificationresource)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» environment|test|
|» environment|live|
|» type|balancePlatform.managedRisk.reserveWaiver.removed|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="reserve-waiver-removed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Rolling reserve applied

<a id="opIdpost-balancePlatform.managedRisk.rollingReserve.applied"></a>

`POST balancePlatform.managedRisk.rollingReserve.applied`

Adyen sends this webhook when we apply a rolling reserve policy to your account holder's payouts, because of their risk level.

> Body parameter

```json
{
  "data": {
    "accountHolderId": "AH00000000000000000001",
    "rollingReservePercentage": 10,
    "withHoldingPeriodInDays": 30,
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "creationDate": "2025-01-19T13:37:38+02:00",
    "id": "9313547924908349"
  },
  "environment": "test",
  "type": "balancePlatform.managedRisk.rollingReserve.applied"
}
```

<h3 id="rolling-reserve-applied-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ManagedRiskRollingReserveAppliedNotificationRequest](#schemamanagedriskrollingreserveappliednotificationrequest)|true|none|
|» data|body|[RollingReserveNotificationResource](#schemarollingreservenotificationresource)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» environment|test|
|» environment|live|
|» type|balancePlatform.managedRisk.rollingReserve.applied|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="rolling-reserve-applied-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Rolling reserve lifted

<a id="opIdpost-balancePlatform.managedRisk.rollingReserve.lifted"></a>

`POST balancePlatform.managedRisk.rollingReserve.lifted`

Adyen sends this webhook when we lift a rolling reserve policy from your account holder's payouts.

> Body parameter

```json
{
  "data": {
    "accountHolderId": "AH00000000000000000001",
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "creationDate": "2025-01-19T13:37:38+02:00",
    "id": "9313547924908349"
  },
  "environment": "test",
  "type": "balancePlatform.managedRisk.rollingReserve.lifted"
}
```

<h3 id="rolling-reserve-lifted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ManagedRiskRollingReserveLiftedNotificationRequest](#schemamanagedriskrollingreserveliftednotificationrequest)|true|none|
|» data|body|[RollingReserveLiftedNotificationResource](#schemarollingreserveliftednotificationresource)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» environment|test|
|» environment|live|
|» type|balancePlatform.managedRisk.rollingReserve.lifted|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="rolling-reserve-lifted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Rolling reserve updated

<a id="opIdpost-balancePlatform.managedRisk.rollingReserve.updated"></a>

`POST balancePlatform.managedRisk.rollingReserve.updated`

Adyen sends this webhook when we update a rolling reserve policy applied to your account holder's payouts, because of their risk level.

> Body parameter

```json
{
  "data": {
    "accountHolderId": "AH00000000000000000001",
    "rollingReservePercentage": 15,
    "withHoldingPeriodInDays": 45,
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "creationDate": "2025-01-19T13:37:38+02:00",
    "id": "9313547924908349"
  },
  "environment": "test",
  "type": "balancePlatform.managedRisk.rollingReserve.updated"
}
```

<h3 id="rolling-reserve-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ManagedRiskRollingReserveUpdatedNotificationRequest](#schemamanagedriskrollingreserveupdatednotificationrequest)|true|none|
|» data|body|[RollingReserveNotificationResource](#schemarollingreservenotificationresource)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» environment|test|
|» environment|live|
|» type|balancePlatform.managedRisk.rollingReserve.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="rolling-reserve-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Settlement delay lifted

<a id="opIdpost-balancePlatform.managedRisk.settlementDelay.lifted"></a>

`POST balancePlatform.managedRisk.settlementDelay.lifted`

Adyen sends this webhook when we lift a settlement delay from your account holder's payouts after their risk review period has passed.

> Body parameter

```json
{
  "data": {
    "accountHolderId": "AH00000000000000000001",
    "reason": "riskReviewPeriodPassed",
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "creationDate": "2025-01-19T13:37:38+02:00",
    "id": "9313547924908349"
  },
  "environment": "test",
  "type": "balancePlatform.managedRisk.settlementDelay.lifted"
}
```

<h3 id="settlement-delay-lifted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ManagedRiskSettlementDelayLiftedNotificationRequest](#schemamanagedrisksettlementdelayliftednotificationrequest)|true|none|
|» data|body|[SettlementDelayLiftedNotificationResource](#schemasettlementdelayliftednotificationresource)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» environment|test|
|» environment|live|
|» type|balancePlatform.managedRisk.settlementDelay.lifted|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="settlement-delay-lifted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Settlement delay updated

<a id="opIdpost-balancePlatform.managedRisk.settlementDelay.updated"></a>

`POST balancePlatform.managedRisk.settlementDelay.updated`

Adyen sends this webhook when we update the settlement delay for your account holder's payouts, because of their risk level.

> Body parameter

```json
{
  "data": {
    "accountHolderId": "AH00000000000000000001",
    "reason": "settlementDelayChanged",
    "configurations": [
      {
        "paymentMethod": "standard",
        "settlementDelay": 5
      }
    ],
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "creationDate": "2025-01-19T13:37:38+02:00",
    "id": "9313547924908349"
  },
  "environment": "test",
  "type": "balancePlatform.managedRisk.settlementDelay.updated"
}
```

<h3 id="settlement-delay-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ManagedRiskSettlementDelayNotificationRequest](#schemamanagedrisksettlementdelaynotificationrequest)|true|none|
|» data|body|[SettlementDelayNotificationResource](#schemasettlementdelaynotificationresource)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» environment|test|
|» environment|live|
|» type|balancePlatform.managedRisk.settlementDelay.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="settlement-delay-updated-responses">Responses</h3>

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

<h2 id="tocS_ManagedRiskBalanceBlockReleasedNotificationRequest">ManagedRiskBalanceBlockReleasedNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemamanagedriskbalanceblockreleasednotificationrequest"></a>
<a id="schema_ManagedRiskBalanceBlockReleasedNotificationRequest"></a>
<a id="tocSmanagedriskbalanceblockreleasednotificationrequest"></a>
<a id="tocsmanagedriskbalanceblockreleasednotificationrequest"></a>

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
  "environment": "test",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.managedRisk.balance.block.released"
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
|environment|test|
|environment|live|
|type|balancePlatform.managedRisk.balance.block.released|

<h2 id="tocS_ManagedRiskReserveWaiverAppliedNotificationRequest">ManagedRiskReserveWaiverAppliedNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemamanagedriskreservewaiverappliednotificationrequest"></a>
<a id="schema_ManagedRiskReserveWaiverAppliedNotificationRequest"></a>
<a id="tocSmanagedriskreservewaiverappliednotificationrequest"></a>
<a id="tocsmanagedriskreservewaiverappliednotificationrequest"></a>

```json
{
  "data": {
    "accountHolderId": "string",
    "balancePlatform": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "eventDate": "1970-01-01",
    "id": "string"
  },
  "environment": "test",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.managedRisk.reserveWaiver.applied"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ReserveWaiverAppliedNotificationResource](#schemareservewaiverappliednotificationresource)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|environment|test|
|environment|live|
|type|balancePlatform.managedRisk.reserveWaiver.applied|

<h2 id="tocS_ManagedRiskReserveWaiverRemovedNotificationRequest">ManagedRiskReserveWaiverRemovedNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemamanagedriskreservewaiverremovednotificationrequest"></a>
<a id="schema_ManagedRiskReserveWaiverRemovedNotificationRequest"></a>
<a id="tocSmanagedriskreservewaiverremovednotificationrequest"></a>
<a id="tocsmanagedriskreservewaiverremovednotificationrequest"></a>

```json
{
  "data": {
    "accountHolderId": "string",
    "balancePlatform": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "eventDate": "1970-01-01",
    "id": "string"
  },
  "environment": "test",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.managedRisk.reserveWaiver.removed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ReserveWaiverRemovedNotificationResource](#schemareservewaiverremovednotificationresource)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|environment|test|
|environment|live|
|type|balancePlatform.managedRisk.reserveWaiver.removed|

<h2 id="tocS_ManagedRiskRollingReserveAppliedNotificationRequest">ManagedRiskRollingReserveAppliedNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemamanagedriskrollingreserveappliednotificationrequest"></a>
<a id="schema_ManagedRiskRollingReserveAppliedNotificationRequest"></a>
<a id="tocSmanagedriskrollingreserveappliednotificationrequest"></a>
<a id="tocsmanagedriskrollingreserveappliednotificationrequest"></a>

```json
{
  "data": {
    "accountHolderId": "string",
    "balancePlatform": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "id": "string",
    "rollingReservePercentage": 0,
    "withHoldingPeriodInDays": 0
  },
  "environment": "test",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.managedRisk.rollingReserve.applied"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[RollingReserveNotificationResource](#schemarollingreservenotificationresource)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|environment|test|
|environment|live|
|type|balancePlatform.managedRisk.rollingReserve.applied|

<h2 id="tocS_ManagedRiskRollingReserveLiftedNotificationRequest">ManagedRiskRollingReserveLiftedNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemamanagedriskrollingreserveliftednotificationrequest"></a>
<a id="schema_ManagedRiskRollingReserveLiftedNotificationRequest"></a>
<a id="tocSmanagedriskrollingreserveliftednotificationrequest"></a>
<a id="tocsmanagedriskrollingreserveliftednotificationrequest"></a>

```json
{
  "data": {
    "accountHolderId": "string",
    "balancePlatform": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "id": "string"
  },
  "environment": "test",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.managedRisk.rollingReserve.lifted"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[RollingReserveLiftedNotificationResource](#schemarollingreserveliftednotificationresource)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|environment|test|
|environment|live|
|type|balancePlatform.managedRisk.rollingReserve.lifted|

<h2 id="tocS_ManagedRiskRollingReserveUpdatedNotificationRequest">ManagedRiskRollingReserveUpdatedNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemamanagedriskrollingreserveupdatednotificationrequest"></a>
<a id="schema_ManagedRiskRollingReserveUpdatedNotificationRequest"></a>
<a id="tocSmanagedriskrollingreserveupdatednotificationrequest"></a>
<a id="tocsmanagedriskrollingreserveupdatednotificationrequest"></a>

```json
{
  "data": {
    "accountHolderId": "string",
    "balancePlatform": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "id": "string",
    "rollingReservePercentage": 0,
    "withHoldingPeriodInDays": 0
  },
  "environment": "test",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.managedRisk.rollingReserve.updated"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[RollingReserveNotificationResource](#schemarollingreservenotificationresource)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|environment|test|
|environment|live|
|type|balancePlatform.managedRisk.rollingReserve.updated|

<h2 id="tocS_ManagedRiskSettlementDelayLiftedNotificationRequest">ManagedRiskSettlementDelayLiftedNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemamanagedrisksettlementdelayliftednotificationrequest"></a>
<a id="schema_ManagedRiskSettlementDelayLiftedNotificationRequest"></a>
<a id="tocSmanagedrisksettlementdelayliftednotificationrequest"></a>
<a id="tocsmanagedrisksettlementdelayliftednotificationrequest"></a>

```json
{
  "data": {
    "accountHolderId": "string",
    "balancePlatform": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "id": "string",
    "reason": "paymentProcessingEnabled"
  },
  "environment": "test",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.managedRisk.settlementDelay.lifted"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[SettlementDelayLiftedNotificationResource](#schemasettlementdelayliftednotificationresource)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|environment|test|
|environment|live|
|type|balancePlatform.managedRisk.settlementDelay.lifted|

<h2 id="tocS_ManagedRiskSettlementDelayNotificationRequest">ManagedRiskSettlementDelayNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemamanagedrisksettlementdelaynotificationrequest"></a>
<a id="schema_ManagedRiskSettlementDelayNotificationRequest"></a>
<a id="tocSmanagedrisksettlementdelaynotificationrequest"></a>
<a id="tocsmanagedrisksettlementdelaynotificationrequest"></a>

```json
{
  "data": {
    "accountHolderId": "string",
    "balancePlatform": "string",
    "configurations": [
      {
        "paymentMethod": "string",
        "settlementDelay": 0
      }
    ],
    "creationDate": "1970-01-01T00:00:00Z",
    "id": "string",
    "reason": "paymentProcessingEnabled"
  },
  "environment": "test",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.managedRisk.settlementDelay.updated"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[SettlementDelayNotificationResource](#schemasettlementdelaynotificationresource)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|environment|test|
|environment|live|
|type|balancePlatform.managedRisk.settlementDelay.updated|

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

<h2 id="tocS_ReserveWaiverAppliedNotificationResource">ReserveWaiverAppliedNotificationResource</h2>
<!-- backwards compatibility -->
<a id="schemareservewaiverappliednotificationresource"></a>
<a id="schema_ReserveWaiverAppliedNotificationResource"></a>
<a id="tocSreservewaiverappliednotificationresource"></a>
<a id="tocsreservewaiverappliednotificationresource"></a>

```json
{
  "accountHolderId": "string",
  "balancePlatform": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "eventDate": "1970-01-01",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderId|string|true|none|The unique identifier of the account holder whose reserves will be waived.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|eventDate|string(date)|true|none|The date in which a reserve waiver has been applied to this account.|
|id|string|false|read-only|The ID of the resource.|

<h2 id="tocS_ReserveWaiverRemovedNotificationResource">ReserveWaiverRemovedNotificationResource</h2>
<!-- backwards compatibility -->
<a id="schemareservewaiverremovednotificationresource"></a>
<a id="schema_ReserveWaiverRemovedNotificationResource"></a>
<a id="tocSreservewaiverremovednotificationresource"></a>
<a id="tocsreservewaiverremovednotificationresource"></a>

```json
{
  "accountHolderId": "string",
  "balancePlatform": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "eventDate": "1970-01-01",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderId|string|true|none|The unique identifier of the account holder whose reserves will no longer be waived.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|eventDate|string(date)|true|none|The date in which a reserve waiver has been removed from this account.|
|id|string|false|read-only|The ID of the resource.|

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

<h2 id="tocS_RollingReserveLiftedNotificationResource">RollingReserveLiftedNotificationResource</h2>
<!-- backwards compatibility -->
<a id="schemarollingreserveliftednotificationresource"></a>
<a id="schema_RollingReserveLiftedNotificationResource"></a>
<a id="tocSrollingreserveliftednotificationresource"></a>
<a id="tocsrollingreserveliftednotificationresource"></a>

```json
{
  "accountHolderId": "string",
  "balancePlatform": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderId|string|true|none|The unique identifier of the account holder whose risk settings changed.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|id|string|false|read-only|The ID of the resource.|

<h2 id="tocS_RollingReserveNotificationResource">RollingReserveNotificationResource</h2>
<!-- backwards compatibility -->
<a id="schemarollingreservenotificationresource"></a>
<a id="schema_RollingReserveNotificationResource"></a>
<a id="tocSrollingreservenotificationresource"></a>
<a id="tocsrollingreservenotificationresource"></a>

```json
{
  "accountHolderId": "string",
  "balancePlatform": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "id": "string",
  "rollingReservePercentage": 0,
  "withHoldingPeriodInDays": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderId|string|true|none|The unique identifier of the account holder whose risk settings changed.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|id|string|false|read-only|The ID of the resource.|
|rollingReservePercentage|integer(int32)|true|none|The percentage of your user's daily sales volume that is withheld from the settlement batch as a rolling reserve.|
|withHoldingPeriodInDays|integer(int32)|true|none|The number of days after which we release the withheld percentage of your user's daily sales volume.|

<h2 id="tocS_SettlementDelayConfiguration">SettlementDelayConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasettlementdelayconfiguration"></a>
<a id="schema_SettlementDelayConfiguration"></a>
<a id="tocSsettlementdelayconfiguration"></a>
<a id="tocssettlementdelayconfiguration"></a>

```json
{
  "paymentMethod": "string",
  "settlementDelay": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentMethod|string|true|none|The payment method to which the settlement delay applies.|
|settlementDelay|integer(int32)|true|none|The updated settlement delay applied to your user's transactions. It indicates the number of days after which your user's funds become available in their balance account.|

<h2 id="tocS_SettlementDelayLiftedNotificationResource">SettlementDelayLiftedNotificationResource</h2>
<!-- backwards compatibility -->
<a id="schemasettlementdelayliftednotificationresource"></a>
<a id="schema_SettlementDelayLiftedNotificationResource"></a>
<a id="tocSsettlementdelayliftednotificationresource"></a>
<a id="tocssettlementdelayliftednotificationresource"></a>

```json
{
  "accountHolderId": "string",
  "balancePlatform": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "id": "string",
  "reason": "paymentProcessingEnabled"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderId|string|true|none|The unique identifier of the account holder whose risk settings changed.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|id|string|false|read-only|The ID of the resource.|
|reason|string|true|none|The reason for the change in your account holder's settlement delay.<br><br>Possible values: **paymentProcessingEnabled**, **settlementDelayChanged**, **riskReviewPeriodPassed**.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|paymentProcessingEnabled|
|reason|settlementDelayChanged|
|reason|riskReviewPeriodPassed|

<h2 id="tocS_SettlementDelayNotificationResource">SettlementDelayNotificationResource</h2>
<!-- backwards compatibility -->
<a id="schemasettlementdelaynotificationresource"></a>
<a id="schema_SettlementDelayNotificationResource"></a>
<a id="tocSsettlementdelaynotificationresource"></a>
<a id="tocssettlementdelaynotificationresource"></a>

```json
{
  "accountHolderId": "string",
  "balancePlatform": "string",
  "configurations": [
    {
      "paymentMethod": "string",
      "settlementDelay": 0
    }
  ],
  "creationDate": "1970-01-01T00:00:00Z",
  "id": "string",
  "reason": "paymentProcessingEnabled"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderId|string|true|none|The unique identifier of the account holder whose risk settings changed.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|configurations|[[SettlementDelayConfiguration](#schemasettlementdelayconfiguration)]|true|none|Contains information about the configuration of a settlement delay.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|id|string|false|read-only|The ID of the resource.|
|reason|string|true|none|The reason for the change in your account holder's settlement delay.<br><br>Possible values: **paymentProcessingEnabled**, **settlementDelayChanged**, **riskReviewPeriodPassed**.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|paymentProcessingEnabled|
|reason|settlementDelayChanged|
|reason|riskReviewPeriodPassed|
