<h1 id="authentication-webhooks">Authentication webhooks v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Adyen sends webhooks to inform your system about events related to cardholder authentication.

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="authentication-webhooks-webhooks">Webhooks</h1>

## Cardholder authenticated

<a id="opIdpost-balancePlatform.authentication.created"></a>

`POST balancePlatform.authentication.created`

Adyen sends this webhook when the process of cardholder authentication is finalized, whether it is completed successfully, fails, or expires.

> Body parameter

```json
{
  "data": {
    "authentication": {
      "acsTransId": "6a4c1709-a42e-4c7f-96c7-1043adacfc97",
      "challenge": {
        "flow": "OOB",
        "lastInteraction": "2022-12-22T15:49:03+01:00"
      },
      "challengeIndicator": "01",
      "createdAt": "2022-12-22T15:45:03+01:00",
      "deviceChannel": "app",
      "dsTransID": "a3b86754-444d-46ca-95a2-ada351d3f42c",
      "exemptionIndicator": "lowValue",
      "inPSD2Scope": true,
      "messageCategory": "payment",
      "messageVersion": "2.2.0",
      "riskScore": 0,
      "threeDSServerTransID": "6edcc246-23ee-4e94-ac5d-8ae620bea7d9",
      "transStatus": "Y",
      "type": "challenge"
    },
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "paymentInstrumentId": "PI3227C223222B5BPCMFXD2XG",
    "purchase": {
      "date": "2022-12-22T15:49:03+01:00",
      "merchantName": "TeaShop_NL",
      "originalAmount": {
        "currency": "EUR",
        "value": 1000
      }
    },
    "status": "authenticated"
  },
  "environment": "test",
  "timestamp": "2022-12-22T15:42:03+01:00",
  "type": "balancePlatform.authentication.created"
}
```

<h3 id="cardholder-authenticated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AuthenticationNotificationRequest](#schemaauthenticationnotificationrequest)|false|none|
|» data|body|[AuthenticationNotificationData](#schemaauthenticationnotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of notification.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.authentication.created|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="cardholder-authenticated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Out-of-band authentication requested

<a id="opIdpost-balancePlatform.authentication.relayed"></a>

`POST balancePlatform.authentication.relayed`

Adyen sends this webhook when a cardholder must perform [out-of-band authentication](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk/authenticate-cardholders).

To complete the authentication process, respond to this webhook with an **HTTP 200** response. Include the `authenticationDecision` in the response body.

If we do not receive the response within two seconds, the authentication process stops.

> Body parameter

```json
{
  "id": "1ea64f8e-d1e1-4b9d-a3a2-3953e385b2c8",
  "paymentInstrumentId": "PI123ABCDEFGHIJKLMN45678",
  "purchase": {
    "date": "2025-03-06T15:17:55Z",
    "merchantName": "widgetsInc",
    "originalAmount": {
      "currency": "EUR",
      "value": 14548
    }
  }
}
```

<h3 id="out-of-band-authentication-requested-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RelayedAuthenticationRequest](#schemarelayedauthenticationrequest)|false|none|
|» environment|body|string|true|The environment from which the webhook originated.<br>Possible values: **test**, **live**.<br>|
|» id|body|string|true|The unique identifier of the challenge.|
|» paymentInstrumentId|body|string|true|The unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/paymentInstruments/_id_) used for the purchase.|
|» purchase|body|[Purchase](#schemapurchase)|true|The details of the purchase.|
|» threeDSRequestorAppURL|body|string|false|URL for auto-switching to the threeDS Requestor App. If not present, the threeDS Requestor App doesn't support auto-switching.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of notification.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.authentication.relayed|

> Example responses

> 200 Response

```json
{
  "authenticationDecision": {
    "status": "proceed"
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

<h3 id="out-of-band-authentication-requested-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[RelayedAuthenticationResponse](#schemarelayedauthenticationresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

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

<h2 id="tocS_AuthenticationDecision">AuthenticationDecision</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationdecision"></a>
<a id="schema_AuthenticationDecision"></a>
<a id="tocSauthenticationdecision"></a>
<a id="tocsauthenticationdecision"></a>

```json
{
  "status": "proceed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The status of the authentication. <br><br>Possible values: <br><br>* **refused** <br><br>* **proceed** <br><br>For more information, refer to [Authenticate cardholders using the Authentication SDK](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk/authenticate-cardholders/).|

#### Enumerated Values

|Property|Value|
|---|---|
|status|proceed|
|status|refused|

<h2 id="tocS_AuthenticationInfo">AuthenticationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationinfo"></a>
<a id="schema_AuthenticationInfo"></a>
<a id="tocSauthenticationinfo"></a>
<a id="tocsauthenticationinfo"></a>

```json
{
  "acsTransId": "string",
  "challenge": {
    "challengeCancel": "00",
    "flow": "PWD_OTP_PHONE_FL",
    "lastInteraction": "1970-01-01T00:00:00Z",
    "phoneNumber": "string",
    "resends": 0,
    "retries": 0
  },
  "challengeIndicator": "01",
  "createdAt": "1970-01-01T00:00:00Z",
  "deviceChannel": "app",
  "dsTransID": "string",
  "exemptionIndicator": "lowValue",
  "inPSD2Scope": true,
  "messageCategory": "payment",
  "messageVersion": "string",
  "riskScore": 0,
  "threeDSServerTransID": "string",
  "transStatus": "Y",
  "transStatusReason": "01",
  "type": "frictionless"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acsTransId|string|true|none|Universally unique transaction identifier assigned by the Access Control Server (ACS) to identify a single transaction.|
|challenge|[ChallengeInfo](#schemachallengeinfo)|false|none|Information about Strong Customer Authentication (SCA). Returned when `type` is **challenge**.|
|challengeIndicator|string|true|none|Specifies a preference for receiving a challenge. Possible values:<br><br>* **01**: No preference<br>* **02**: No challenge requested<br>* **03**: Challenge requested (preference)<br>* **04**: Challenge requested (mandate)<br>* **05**: No challenge requested (transactional risk analysis is already performed)<br>* **07**: No challenge requested (SCA is already performed)<br>* **08**: No challenge requested (trusted beneficiaries exemption of no challenge required)<br>* **09**: Challenge requested (trusted beneficiaries prompt requested if challenge required)<br>* **80**: No challenge requested (secure corporate payment with Mastercard)<br>* **82**: No challenge requested (secure corporate payment with Visa)<br>|
|createdAt|string(date-time)|true|none|Date and time in UTC of the cardholder authentication. <br><br>[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.|
|deviceChannel|string|true|none|Indicates the type of channel interface being used to initiate the transaction. Possible values:<br><br>* **app**<br>* **browser**<br>* **3DSRequestorInitiated** (initiated by a merchant when the cardholder is not available)|
|dsTransID|string|true|none|Universally unique transaction identifier assigned by the DS (card scheme) to identify a single transaction.|
|exemptionIndicator|string|false|none|Indicates the exemption type that was applied to the authentication by the issuer, if exemption applied. Possible values:<br><br>* **lowValue**<br>* **secureCorporate**<br>* **trustedBeneficiary**<br>* **transactionRiskAnalysis**<br>* **acquirerExemption**<br>* **noExemptionApplied**<br>* **visaDAFExemption**<br>|
|inPSD2Scope|boolean|true|none|Indicates if the purchase was in the PSD2 scope.|
|messageCategory|string|true|none|Identifies the category of the message for a specific use case. Possible values:<br><br>* **payment**<br>* **nonPayment**|
|messageVersion|string|true|none|The `messageVersion` value as defined in the 3D Secure 2 specification.|
|riskScore|integer(int32)|false|none|Risk score calculated from the transaction rules.|
|threeDSServerTransID|string|true|none|The `threeDSServerTransID` value as defined in the 3D Secure 2 specification.|
|transStatus|string|true|none|The `transStatus` value as defined in the 3D Secure 2 specification. Possible values:<br><br>* **Y**: Authentication / Account verification successful.<br>* **N**: Not Authenticated / Account not verified. Transaction denied.<br>* **U**: Authentication / Account verification could not be performed.<br>* **I**: Informational Only / 3D Secure Requestor challenge preference acknowledged.<br>* **R**: Authentication / Account verification rejected by the Issuer.<br>|
|transStatusReason|string|false|none|Provides information on why the `transStatus` field has the specified value. For possible values, refer to [our docs](https://docs.adyen.com/online-payments/3d-secure/api-reference#possible-transstatusreason-values).|
|type|string|true|none|The type of authentication performed. Possible values:<br><br>* **frictionless**<br>* **challenge**|

#### Enumerated Values

|Property|Value|
|---|---|
|challengeIndicator|01|
|challengeIndicator|02|
|challengeIndicator|03|
|challengeIndicator|04|
|challengeIndicator|05|
|challengeIndicator|07|
|challengeIndicator|08|
|challengeIndicator|09|
|challengeIndicator|80|
|challengeIndicator|82|
|deviceChannel|app|
|deviceChannel|browser|
|deviceChannel|ThreeDSRequestorInitiated|
|exemptionIndicator|lowValue|
|exemptionIndicator|secureCorporate|
|exemptionIndicator|trustedBeneficiary|
|exemptionIndicator|transactionRiskAnalysis|
|exemptionIndicator|acquirerExemption|
|exemptionIndicator|noExemptionApplied|
|exemptionIndicator|visaDAFExemption|
|messageCategory|payment|
|messageCategory|nonPayment|
|transStatus|Y|
|transStatus|N|
|transStatus|R|
|transStatus|I|
|transStatus|U|
|transStatusReason|01|
|transStatusReason|02|
|transStatusReason|03|
|transStatusReason|04|
|transStatusReason|05|
|transStatusReason|06|
|transStatusReason|07|
|transStatusReason|08|
|transStatusReason|09|
|transStatusReason|10|
|transStatusReason|11|
|transStatusReason|12|
|transStatusReason|13|
|transStatusReason|14|
|transStatusReason|15|
|transStatusReason|16|
|transStatusReason|17|
|transStatusReason|18|
|transStatusReason|19|
|transStatusReason|20|
|transStatusReason|21|
|transStatusReason|22|
|transStatusReason|23|
|transStatusReason|24|
|transStatusReason|25|
|transStatusReason|26|
|transStatusReason|80|
|transStatusReason|81|
|transStatusReason|82|
|transStatusReason|83|
|transStatusReason|84|
|transStatusReason|85|
|transStatusReason|86|
|transStatusReason|87|
|transStatusReason|88|
|type|frictionless|
|type|challenge|

<h2 id="tocS_AuthenticationNotificationData">AuthenticationNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationnotificationdata"></a>
<a id="schema_AuthenticationNotificationData"></a>
<a id="tocSauthenticationnotificationdata"></a>
<a id="tocsauthenticationnotificationdata"></a>

```json
{
  "authentication": {
    "acsTransId": "string",
    "challenge": {
      "challengeCancel": "00",
      "flow": "PWD_OTP_PHONE_FL",
      "lastInteraction": "1970-01-01T00:00:00Z",
      "phoneNumber": "string",
      "resends": 0,
      "retries": 0
    },
    "challengeIndicator": "01",
    "createdAt": "1970-01-01T00:00:00Z",
    "deviceChannel": "app",
    "dsTransID": "string",
    "exemptionIndicator": "lowValue",
    "inPSD2Scope": true,
    "messageCategory": "payment",
    "messageVersion": "string",
    "riskScore": 0,
    "threeDSServerTransID": "string",
    "transStatus": "Y",
    "transStatusReason": "01",
    "type": "frictionless"
  },
  "balancePlatform": "string",
  "id": "string",
  "paymentInstrumentId": "string",
  "purchase": {
    "date": "string",
    "merchantName": "string",
    "originalAmount": {
      "currency": "str",
      "value": 0
    }
  },
  "status": "authenticated"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authentication|[AuthenticationInfo](#schemaauthenticationinfo)|true|none|Contains information about the authentication.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|id|string|true|none|The unique identifier of the authentication.|
|paymentInstrumentId|string|true|none|The unique identifier of the payment instrument that was used for the authentication.|
|purchase|[PurchaseInfo](#schemapurchaseinfo)|true|none|Contains information about the purchase.|
|status|string|true|none|Outcome of the authentication.<br>Allowed values:<br>* authenticated<br>* rejected<br>* error|

#### Enumerated Values

|Property|Value|
|---|---|
|status|authenticated|
|status|rejected|
|status|error|

<h2 id="tocS_AuthenticationNotificationRequest">AuthenticationNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationnotificationrequest"></a>
<a id="schema_AuthenticationNotificationRequest"></a>
<a id="tocSauthenticationnotificationrequest"></a>
<a id="tocsauthenticationnotificationrequest"></a>

```json
{
  "data": {
    "authentication": {
      "acsTransId": "string",
      "challenge": {
        "challengeCancel": "00",
        "flow": "PWD_OTP_PHONE_FL",
        "lastInteraction": "1970-01-01T00:00:00Z",
        "phoneNumber": "string",
        "resends": 0,
        "retries": 0
      },
      "challengeIndicator": "01",
      "createdAt": "1970-01-01T00:00:00Z",
      "deviceChannel": "app",
      "dsTransID": "string",
      "exemptionIndicator": "lowValue",
      "inPSD2Scope": true,
      "messageCategory": "payment",
      "messageVersion": "string",
      "riskScore": 0,
      "threeDSServerTransID": "string",
      "transStatus": "Y",
      "transStatusReason": "01",
      "type": "frictionless"
    },
    "balancePlatform": "string",
    "id": "string",
    "paymentInstrumentId": "string",
    "purchase": {
      "date": "string",
      "merchantName": "string",
      "originalAmount": {
        "currency": "str",
        "value": 0
      }
    },
    "status": "authenticated"
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.authentication.created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[AuthenticationNotificationData](#schemaauthenticationnotificationdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of notification.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.authentication.created|

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

<h2 id="tocS_ChallengeInfo">ChallengeInfo</h2>
<!-- backwards compatibility -->
<a id="schemachallengeinfo"></a>
<a id="schema_ChallengeInfo"></a>
<a id="tocSchallengeinfo"></a>
<a id="tocschallengeinfo"></a>

```json
{
  "challengeCancel": "00",
  "flow": "PWD_OTP_PHONE_FL",
  "lastInteraction": "1970-01-01T00:00:00Z",
  "phoneNumber": "string",
  "resends": 0,
  "retries": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|challengeCancel|string|false|none|Indicator informing the Access Control Server (ACS) and the Directory Server (DS) that the authentication has been cancelled. Possible values:<br>* **00**: Data element is absent or value has been sent back with the key `challengeCancel`.<br>* **01**: Cardholder selected **Cancel**.<br>* **02**: 3DS Requestor cancelled Authentication.<br>* **03**: Transaction abandoned.<br>* **04**: Transaction timed out at ACS — other timeouts.<br>* **05**: Transaction timed out at ACS — first CReq not received by ACS.<br>* **06**: Transaction error.<br>* **07**: Unknown.<br>* **08**: Transaction time out at SDK.|
|flow|string|true|none|The flow used in the challenge. Possible values:<br><br>* **PWD_OTP_PHONE_FL**: one-time password (OTP) flow via SMS<br>* **PWD_OTP_EMAIL_FL**: one-time password (OTP) flow via email<br>* **OOB_TRIGGER_FL**: out-of-band (OOB) flow<br>* **OTP_PHONE_FL**: one-time password (OTP) flow via SMS with no passcode<br>* **PASSKEY_TRIGGER_FL**: passkey flow|
|lastInteraction|string(date-time)|true|none|The last time of interaction with the challenge.|
|phoneNumber|string|false|none|The last four digits of the phone number used in the challenge.|
|resends|integer(int32)|false|none|The number of times the one-time password (OTP) was resent during the challenge.|
|retries|integer(int32)|false|none|The number of retries used in the challenge.|

#### Enumerated Values

|Property|Value|
|---|---|
|challengeCancel|00|
|challengeCancel|01|
|challengeCancel|02|
|challengeCancel|03|
|challengeCancel|04|
|challengeCancel|05|
|challengeCancel|06|
|challengeCancel|07|
|challengeCancel|08|
|flow|PWD_OTP_PHONE_FL|
|flow|PWD_OTP_EMAIL_FL|
|flow|OOB_TRIGGER_FL|
|flow|OTP_PHONE_FL|
|flow|PASSKEY_TRIGGER_FL|

<h2 id="tocS_Purchase">Purchase</h2>
<!-- backwards compatibility -->
<a id="schemapurchase"></a>
<a id="schema_Purchase"></a>
<a id="tocSpurchase"></a>
<a id="tocspurchase"></a>

```json
{
  "date": "1970-01-01T00:00:00Z",
  "merchantName": "string",
  "originalAmount": {
    "currency": "str",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date-time)|true|none|The time of the purchase.|
|merchantName|string|true|none|The name of the merchant.|
|originalAmount|[Amount](#schemaamount)|true|none|The amount of the purchase in the original currency.|

<h2 id="tocS_PurchaseInfo">PurchaseInfo</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseinfo"></a>
<a id="schema_PurchaseInfo"></a>
<a id="tocSpurchaseinfo"></a>
<a id="tocspurchaseinfo"></a>

```json
{
  "date": "string",
  "merchantName": "string",
  "originalAmount": {
    "currency": "str",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|true|none|The date of the purchase.|
|merchantName|string|true|none|The name of the business that the cardholder purchased from.|
|originalAmount|[Amount](#schemaamount)|true|none|The amount of the purchase.|

<h2 id="tocS_RelayedAuthenticationRequest">RelayedAuthenticationRequest</h2>
<!-- backwards compatibility -->
<a id="schemarelayedauthenticationrequest"></a>
<a id="schema_RelayedAuthenticationRequest"></a>
<a id="tocSrelayedauthenticationrequest"></a>
<a id="tocsrelayedauthenticationrequest"></a>

```json
{
  "environment": "string",
  "id": "string",
  "paymentInstrumentId": "string",
  "purchase": {
    "date": "1970-01-01T00:00:00Z",
    "merchantName": "string",
    "originalAmount": {
      "currency": "str",
      "value": 0
    }
  },
  "threeDSRequestorAppURL": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.authentication.relayed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment|string|true|none|The environment from which the webhook originated.<br>Possible values: **test**, **live**.<br>|
|id|string|true|none|The unique identifier of the challenge.|
|paymentInstrumentId|string|true|none|The unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/paymentInstruments/_id_) used for the purchase.|
|purchase|[Purchase](#schemapurchase)|true|none|The details of the purchase.|
|threeDSRequestorAppURL|string|false|none|URL for auto-switching to the threeDS Requestor App. If not present, the threeDS Requestor App doesn't support auto-switching.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of notification.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.authentication.relayed|

<h2 id="tocS_RelayedAuthenticationResponse">RelayedAuthenticationResponse</h2>
<!-- backwards compatibility -->
<a id="schemarelayedauthenticationresponse"></a>
<a id="schema_RelayedAuthenticationResponse"></a>
<a id="tocSrelayedauthenticationresponse"></a>
<a id="tocsrelayedauthenticationresponse"></a>

```json
{
  "authenticationDecision": {
    "status": "proceed"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticationDecision|[AuthenticationDecision](#schemaauthenticationdecision)|true|none|The decision regarding the authentication.|

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
