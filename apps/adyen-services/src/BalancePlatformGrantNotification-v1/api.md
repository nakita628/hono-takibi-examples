<h1 id="capital-webhooks">Capital webhooks v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Adyen sends webhooks to notify your system when financing offers or grants are created or updated.

You can use these webhooks to build your implementation. For example, you can use webhook data to build a dashboard to show your users details about their business financing.

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="capital-webhooks-webhooks">Webhooks</h1>

## Static offer created

<a id="opIdpost-balancePlatform.balanceAccountHolder.capitalOffer.created"></a>

`POST balancePlatform.balanceAccountHolder.capitalOffer.created`

Adyen sends this webhook to provide details about a static offer that has been created for an account holder.

> Body parameter

```json
{
  "accountHolderId": "string",
  "amount": {
    "currency": "str",
    "value": 0
  },
  "contractType": "cashAdvance",
  "expiresAt": "1970-01-01T00:00:00Z",
  "fee": {
    "amount": {
      "currency": "str",
      "value": 0
    },
    "aprBasisPoints": 0
  },
  "id": "string",
  "repayment": {
    "basisPoints": 0,
    "term": {
      "estimatedDays": 0,
      "maximumDays": 0
    },
    "threshold": {
      "amount": {
        "currency": "str",
        "value": 0
      }
    }
  },
  "startsAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="static-offer-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GrantOffer](#schemagrantoffer)|false|none|
|» accountHolderId|body|string|true|The unique identifier of the account holder to which the grant is offered.|
|» amount|body|[Amount](#schemaamount)|false|The amount that would be paid out to the user for business financing.|
|» contractType|body|string|false|The contract type of the offer.<br><br>Possible values:<br>* **loan**<br>* **cashAdvance**|
|» expiresAt|body|string(date-time)|false|The expiration date and time of the offer validity period.|
|» fee|body|[GrantOfferFee](#schemagrantofferfee)|false|Contains information about the fee that your user would pay for the grant.|
|» id|body|string|false|The unique identifier of the offer.|
|» repayment|body|[Repayment](#schemarepayment)|false|Contains information about the repayment configuration of the grant.|
|» startsAt|body|string(date-time)|false|The starting date and time of the offer validity period.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» contractType|cashAdvance|
|» contractType|loan|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="static-offer-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Dynamic offer created

<a id="opIdpost-balancePlatform.capital.dynamicOffer.created"></a>

`POST balancePlatform.capital.dynamicOffer.created`

Adyen sends this webhook to provide details about a dynamic offer that has been created for an account holder.

> Body parameter

```json
{
  "accountHolderId": "string",
  "contractType": "cashAdvance",
  "expiresAt": "1970-01-01T00:00:00Z",
  "financingType": "businessFinancing",
  "id": "string",
  "maximumAmount": {
    "currency": "str",
    "value": 0
  },
  "minimumAmount": {
    "currency": "str",
    "value": 0
  },
  "repayment": {
    "term": {
      "estimatedDays": 0,
      "maximumDays": 0
    }
  },
  "startsAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="dynamic-offer-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DynamicOffer](#schemadynamicoffer)|false|none|
|» accountHolderId|body|string|true|The unique identifier of the account holder that the dynamic offer is for.|
|» contractType|body|string|true|The contract type of the offer.<br><br>Possible values:<br>* **loan**<br>* **cashAdvance**|
|» expiresAt|body|string(date-time)|true|The expiration date and time of the offer validity period.|
|» financingType|body|string|true|The type of financing that the offer is for.<br><br>Possible values: **businessFinancing**.|
|» id|body|string|true|The unique identifier of the dynamic offer.|
|» maximumAmount|body|[Amount](#schemaamount)|true|The maximum financing amount available to the account holder under this offer.|
|» minimumAmount|body|[Amount](#schemaamount)|true|The minimum financing amount available to the account holder under this offer.|
|» repayment|body|[DynamicOfferRepayment](#schemadynamicofferrepayment)|true|Contains information about the repayment configuration of the grant.|
|» startsAt|body|string(date-time)|true|The starting date and time of the offer validity period.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» contractType|cashAdvance|
|» contractType|loan|
|» financingType|businessFinancing|
|» financingType|hardwareFinancing|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="dynamic-offer-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Grant created

<a id="opIdpost-balancePlatform.grants.created"></a>

`POST balancePlatform.grants.created`

After a grant is created, Adyen sends this webhook with information about the grant.



> Body parameter

```json
{
  "balances": {
    "currency": "string",
    "fee": 0,
    "principal": 0,
    "total": 0
  },
  "counterparty": {
    "accountHolderId": "string",
    "balanceAccountId": "string",
    "transferInstrumentId": "string"
  },
  "grantAccountId": "string",
  "grantOfferId": "string",
  "id": "string",
  "status": {
    "actions": [
      {
        "actionCode": "string",
        "resolved": true
      }
    ],
    "code": "Pending"
  }
}
```

<h3 id="grant-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Grant](#schemagrant)|false|none|
|» balances|body|[Balance](#schemabalance)|true|Contains information about the balances of the grant.|
|» counterparty|body|[GrantCounterparty](#schemagrantcounterparty)|false|Contains the details of the party that receives the grant.|
|» grantAccountId|body|string|true|The unique identifier of the grant account that tracks this grant.|
|» grantOfferId|body|string|true|The unique identifier of the selected offer. Adyen uses the details of the selected offer to create a grant.|
|» id|body|string|true|The unique identifier of the grant reference.|
|» status|body|[Status](#schemastatus)|true|Contains the status of the grant.|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="grant-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Grant updated

<a id="opIdpost-balancePlatform.grants.updated"></a>

`POST balancePlatform.grants.updated`

After a grant is updated, Adyen sends this webhook with information about the grant.

For example, you receive this webhook when the financing amount is disbursed to your user, or when your user repays the financing amount.

> Body parameter

```json
{
  "balances": {
    "currency": "string",
    "fee": 0,
    "principal": 0,
    "total": 0
  },
  "counterparty": {
    "accountHolderId": "string",
    "balanceAccountId": "string",
    "transferInstrumentId": "string"
  },
  "grantAccountId": "string",
  "grantOfferId": "string",
  "id": "string",
  "status": {
    "actions": [
      {
        "actionCode": "string",
        "resolved": true
      }
    ],
    "code": "Pending"
  }
}
```

<h3 id="grant-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Grant](#schemagrant)|false|none|
|» balances|body|[Balance](#schemabalance)|true|Contains information about the balances of the grant.|
|» counterparty|body|[GrantCounterparty](#schemagrantcounterparty)|false|Contains the details of the party that receives the grant.|
|» grantAccountId|body|string|true|The unique identifier of the grant account that tracks this grant.|
|» grantOfferId|body|string|true|The unique identifier of the selected offer. Adyen uses the details of the selected offer to create a grant.|
|» id|body|string|true|The unique identifier of the grant reference.|
|» status|body|[Status](#schemastatus)|true|Contains the status of the grant.|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="grant-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

# Schemas

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "actionCode": "string",
  "resolved": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionCode|string|true|none|The code identifying the action that needs to be completed.|
|resolved|boolean|true|none|Indicates whether this action has been successfully completed.|

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

<h2 id="tocS_Balance">Balance</h2>
<!-- backwards compatibility -->
<a id="schemabalance"></a>
<a id="schema_Balance"></a>
<a id="tocSbalance"></a>
<a id="tocsbalance"></a>

```json
{
  "currency": "string",
  "fee": 0,
  "principal": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).|
|fee|integer(int64)|true|none|The amount of the grant fee.|
|principal|integer(int64)|true|none|The grant amount that is paid out to the user for business financing.|
|total|integer(int64)|true|none|The total amount of the grant that the user must repay. It is the sum of the fee amount and the principal amount.|

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

<h2 id="tocS_DynamicOffer">DynamicOffer</h2>
<!-- backwards compatibility -->
<a id="schemadynamicoffer"></a>
<a id="schema_DynamicOffer"></a>
<a id="tocSdynamicoffer"></a>
<a id="tocsdynamicoffer"></a>

```json
{
  "accountHolderId": "string",
  "contractType": "cashAdvance",
  "expiresAt": "1970-01-01T00:00:00Z",
  "financingType": "businessFinancing",
  "id": "string",
  "maximumAmount": {
    "currency": "str",
    "value": 0
  },
  "minimumAmount": {
    "currency": "str",
    "value": 0
  },
  "repayment": {
    "term": {
      "estimatedDays": 0,
      "maximumDays": 0
    }
  },
  "startsAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderId|string|true|none|The unique identifier of the account holder that the dynamic offer is for.|
|contractType|string|true|none|The contract type of the offer.<br><br>Possible values:<br>* **loan**<br>* **cashAdvance**|
|expiresAt|string(date-time)|true|none|The expiration date and time of the offer validity period.|
|financingType|string|true|none|The type of financing that the offer is for.<br><br>Possible values: **businessFinancing**.|
|id|string|true|none|The unique identifier of the dynamic offer.|
|maximumAmount|[Amount](#schemaamount)|true|none|The maximum financing amount available to the account holder under this offer.|
|minimumAmount|[Amount](#schemaamount)|true|none|The minimum financing amount available to the account holder under this offer.|
|repayment|[DynamicOfferRepayment](#schemadynamicofferrepayment)|true|none|Contains information about the repayment configuration of the grant.|
|startsAt|string(date-time)|true|none|The starting date and time of the offer validity period.|

#### Enumerated Values

|Property|Value|
|---|---|
|contractType|cashAdvance|
|contractType|loan|
|financingType|businessFinancing|
|financingType|hardwareFinancing|

<h2 id="tocS_DynamicOfferRepayment">DynamicOfferRepayment</h2>
<!-- backwards compatibility -->
<a id="schemadynamicofferrepayment"></a>
<a id="schema_DynamicOfferRepayment"></a>
<a id="tocSdynamicofferrepayment"></a>
<a id="tocsdynamicofferrepayment"></a>

```json
{
  "term": {
    "estimatedDays": 0,
    "maximumDays": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|term|[RepaymentTerm](#schemarepaymentterm)|true|none|Contains information about the time period in which your user must repay the total amount of the grant.|

<h2 id="tocS_Grant">Grant</h2>
<!-- backwards compatibility -->
<a id="schemagrant"></a>
<a id="schema_Grant"></a>
<a id="tocSgrant"></a>
<a id="tocsgrant"></a>

```json
{
  "balances": {
    "currency": "string",
    "fee": 0,
    "principal": 0,
    "total": 0
  },
  "counterparty": {
    "accountHolderId": "string",
    "balanceAccountId": "string",
    "transferInstrumentId": "string"
  },
  "grantAccountId": "string",
  "grantOfferId": "string",
  "id": "string",
  "status": {
    "actions": [
      {
        "actionCode": "string",
        "resolved": true
      }
    ],
    "code": "Pending"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balances|[Balance](#schemabalance)|true|none|Contains information about the balances of the grant.|
|counterparty|[GrantCounterparty](#schemagrantcounterparty)|false|none|Contains the details of the party that receives the grant.|
|grantAccountId|string|true|none|The unique identifier of the grant account that tracks this grant.|
|grantOfferId|string|true|none|The unique identifier of the selected offer. Adyen uses the details of the selected offer to create a grant.|
|id|string|true|none|The unique identifier of the grant reference.|
|status|[Status](#schemastatus)|true|none|Contains the status of the grant.|

<h2 id="tocS_GrantCounterparty">GrantCounterparty</h2>
<!-- backwards compatibility -->
<a id="schemagrantcounterparty"></a>
<a id="schema_GrantCounterparty"></a>
<a id="tocSgrantcounterparty"></a>
<a id="tocsgrantcounterparty"></a>

```json
{
  "accountHolderId": "string",
  "balanceAccountId": "string",
  "transferInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderId|string|false|none|The unique identifier of the account holder that receives the grant.|
|balanceAccountId|string|false|none|The unique identifier of the balance account where the funds are disbursed. The balance account must belong to the specified account holder.|
|transferInstrumentId|string|false|none|The unique identifier of the transfer instrument where the funds are disbursed. The transfer instrument must belong to the legal entity of the specified account holder.|

<h2 id="tocS_GrantInfoCounterparty">GrantInfoCounterparty</h2>
<!-- backwards compatibility -->
<a id="schemagrantinfocounterparty"></a>
<a id="schema_GrantInfoCounterparty"></a>
<a id="tocSgrantinfocounterparty"></a>
<a id="tocsgrantinfocounterparty"></a>

```json
{
  "balanceAccountId": "string",
  "transferInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccountId|string|false|none|The unique identifier of the balance account where the funds are disbursed. The balance account must belong to the specified account holder.|
|transferInstrumentId|string|false|none|The unique identifier of the transfer instrument where the funds are disbursed. The transfer instrument must belong to the legal entity of the specified account holder.|

<h2 id="tocS_GrantOffer">GrantOffer</h2>
<!-- backwards compatibility -->
<a id="schemagrantoffer"></a>
<a id="schema_GrantOffer"></a>
<a id="tocSgrantoffer"></a>
<a id="tocsgrantoffer"></a>

```json
{
  "accountHolderId": "string",
  "amount": {
    "currency": "str",
    "value": 0
  },
  "contractType": "cashAdvance",
  "expiresAt": "1970-01-01T00:00:00Z",
  "fee": {
    "amount": {
      "currency": "str",
      "value": 0
    },
    "aprBasisPoints": 0
  },
  "id": "string",
  "repayment": {
    "basisPoints": 0,
    "term": {
      "estimatedDays": 0,
      "maximumDays": 0
    },
    "threshold": {
      "amount": {
        "currency": "str",
        "value": 0
      }
    }
  },
  "startsAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderId|string|true|none|The unique identifier of the account holder to which the grant is offered.|
|amount|[Amount](#schemaamount)|false|none|The amount that would be paid out to the user for business financing.|
|contractType|string|false|none|The contract type of the offer.<br><br>Possible values:<br>* **loan**<br>* **cashAdvance**|
|expiresAt|string(date-time)|false|none|The expiration date and time of the offer validity period.|
|fee|[GrantOfferFee](#schemagrantofferfee)|false|none|Contains information about the fee that your user would pay for the grant.|
|id|string|false|none|The unique identifier of the offer.|
|repayment|[Repayment](#schemarepayment)|false|none|Contains information about the repayment configuration of the grant.|
|startsAt|string(date-time)|false|none|The starting date and time of the offer validity period.|

#### Enumerated Values

|Property|Value|
|---|---|
|contractType|cashAdvance|
|contractType|loan|

<h2 id="tocS_GrantOfferFee">GrantOfferFee</h2>
<!-- backwards compatibility -->
<a id="schemagrantofferfee"></a>
<a id="schema_GrantOfferFee"></a>
<a id="tocSgrantofferfee"></a>
<a id="tocsgrantofferfee"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "aprBasisPoints": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|Contains the amount of the offer fee.|
|aprBasisPoints|integer(int32)|false|none|Annual Percentage Rate (APR) of the offer. The percentage is expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).|

<h2 id="tocS_Repayment">Repayment</h2>
<!-- backwards compatibility -->
<a id="schemarepayment"></a>
<a id="schema_Repayment"></a>
<a id="tocSrepayment"></a>
<a id="tocsrepayment"></a>

```json
{
  "basisPoints": 0,
  "term": {
    "estimatedDays": 0,
    "maximumDays": 0
  },
  "threshold": {
    "amount": {
      "currency": "str",
      "value": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basisPoints|integer(int32)|true|none|The percentage of your user's incoming net volume that is deducted for repaying the grant. The percentage expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).|
|term|[RepaymentTerm](#schemarepaymentterm)|false|none|Contains information about the time period in which your user must repay the total amount of the grant.|
|threshold|[ThresholdRepayment](#schemathresholdrepayment)|false|none|Contains the minimum threshold amount that your user must repay every 30-day period.|

<h2 id="tocS_RepaymentTerm">RepaymentTerm</h2>
<!-- backwards compatibility -->
<a id="schemarepaymentterm"></a>
<a id="schema_RepaymentTerm"></a>
<a id="tocSrepaymentterm"></a>
<a id="tocsrepaymentterm"></a>

```json
{
  "estimatedDays": 0,
  "maximumDays": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimatedDays|integer(int32)|true|none|The estimated duration of the repayment term, in days.|
|maximumDays|integer(int32)|false|none|The maximum duration of the repayment term, in days. Only applies when `contractType` is **loan**.|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "actions": [
    {
      "actionCode": "string",
      "resolved": true
    }
  ],
  "code": "Pending"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[Action](#schemaaction)]|false|none|A list of actions that need to be completed to proceed with the grant. |
|code|string|true|none|The code for the status of the grant. Possible values:<br>- **Pending**<br>- **Active**<br>- **Repaid**<br>- **WrittenOff**<br>- **Failed**<br>- **Revoked**<br>- **Requested**<br>- **Reviewing**<br>- **Approved**<br>- **Rejected**<br>- **Cancelled**|

#### Enumerated Values

|Property|Value|
|---|---|
|code|Pending|
|code|Active|
|code|Repaid|
|code|WrittenOff|
|code|Failed|
|code|Revoked|
|code|Requested|
|code|Reviewing|
|code|Approved|
|code|Rejected|
|code|Cancelled|

<h2 id="tocS_ThresholdRepayment">ThresholdRepayment</h2>
<!-- backwards compatibility -->
<a id="schemathresholdrepayment"></a>
<a id="schema_ThresholdRepayment"></a>
<a id="tocSthresholdrepayment"></a>
<a id="tocsthresholdrepayment"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The minimum threshold amount that your user must repay on every 30-day period.|
