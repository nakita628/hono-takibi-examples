<h1 id="configuration-webhooks">Configuration webhooks v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Adyen sends webhooks to inform your system about events that occur in your platform. These events include, for example, when an account holder's capabilities are updated, or when a sweep configuration is created or updated. 
When an event occurs, Adyen makes an HTTP POST request to a URL on your server and includes the details of the event in the request body.

You can use these webhooks to build your implementation. For example, you can use this information to update internal statuses when the status of a capability is changed.

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="configuration-webhooks-webhooks">Webhooks</h1>

## Account holder created

<a id="opIdpost-balancePlatform.accountHolder.created"></a>

`POST balancePlatform.accountHolder.created`

Adyen sends this webhook when you successfully [create an account holder](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/accountHolders).

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "accountHolder": {
      "contactDetails": {
        "email": "test@adyen.com",
        "phone": {
          "number": "0612345678",
          "type": "mobile"
        },
        "address": {
          "houseNumberOrName": "23",
          "city": "Amsterdam",
          "country": "NL",
          "postalCode": "12345",
          "street": "Main Street 1"
        }
      },
      "description": "Shelly Eller",
      "legalEntityId": "LE00000000000000000001",
      "reference": "YOUR_REFERENCE-2412C",
      "capabilities": {
        "issueCard": {
          "enabled": true,
          "requested": true,
          "allowed": false,
          "verificationStatus": "pending"
        },
        "receiveFromTransferInstrument": {
          "enabled": true,
          "requested": true,
          "allowed": false,
          "verificationStatus": "pending"
        },
        "sendToTransferInstrument": {
          "enabled": true,
          "requested": true,
          "allowed": false,
          "verificationStatus": "pending"
        },
        "sendToBalanceAccount": {
          "enabled": true,
          "requested": true,
          "allowed": false,
          "verificationStatus": "pending"
        },
        "receiveFromBalanceAccount": {
          "enabled": true,
          "requested": true,
          "allowed": false,
          "verificationStatus": "pending"
        }
      },
      "id": "AH00000000000000000001",
      "status": "active"
    }
  },
  "environment": "test",
  "timestamp": "2024-12-15T15:42:03+01:00",
  "type": "balancePlatform.accountHolder.created"
}
```

<h3 id="account-holder-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountHolderNotificationRequest](#schemaaccountholdernotificationrequest)|false|none|
|» data|body|[AccountHolderNotificationData](#schemaaccountholdernotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.accountHolder.updated|
|» type|balancePlatform.accountHolder.created|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="account-holder-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Account holder updated

<a id="opIdpost-balancePlatform.accountHolder.updated"></a>

`POST balancePlatform.accountHolder.updated`

Adyen sends this webhook when you successfully [update an account holder](https://docs.adyen.com/api-explorer/balanceplatform/latest/patch/accountHolders/_id_).

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "accountHolder": {
      "description": "Shelly Eller",
      "legalEntityId": "LE00000000000000000001",
      "reference": "YOUR_REFERENCE-2412C",
      "capabilities": {
        "sendToTransferInstrument": {
          "enabled": true,
          "requested": true,
          "allowed": false,
          "problems": [
            {
              "entity": {
                "id": "LE00000000000000000001",
                "type": "BankAccount"
              },
              "verificationErrors": [
                {
                  "code": "2_8037",
                  "message": "'bankStatement' was missing.",
                  "remediatingActions": [
                    {
                      "code": "1_703",
                      "message": "Upload a bank statement"
                    }
                  ],
                  "type": "dataMissing"
                }
              ]
            }
          ],
          "verificationStatus": "invalid"
        }
      },
      "id": "AH00000000000000000001",
      "status": "active"
    }
  },
  "environment": "test",
  "timestamp": "2024-12-15T15:42:03+01:00",
  "type": "balancePlatform.accountHolder.updated"
}
```

<h3 id="account-holder-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountHolderNotificationRequest](#schemaaccountholdernotificationrequest)|false|none|
|» data|body|[AccountHolderNotificationData](#schemaaccountholdernotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.accountHolder.updated|
|» type|balancePlatform.accountHolder.created|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="account-holder-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Balance account created

<a id="opIdpost-balancePlatform.balanceAccount.created"></a>

`POST balancePlatform.balanceAccount.created`

Adyen sends this webhook when you successfully [create a balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts).

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "balanceAccount": {
      "accountHolderId": "AH00000000000000000001",
      "defaultCurrencyCode": "EUR",
      "id": "BA00000000000000000001",
      "status": "active"
    }
  },
  "environment": "test",
  "timestamp": "2024-12-15T15:42:03+01:00",
  "type": "balancePlatform.balanceAccount.created"
}
```

<h3 id="balance-account-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BalanceAccountNotificationRequest](#schemabalanceaccountnotificationrequest)|false|none|
|» data|body|[BalanceAccountNotificationData](#schemabalanceaccountnotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balanceAccount.updated|
|» type|balancePlatform.balanceAccount.created|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="balance-account-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Recurring top-up created

<a id="opIdpost-balancePlatform.balanceAccount.recurringTopUp.created"></a>

`POST balancePlatform.balanceAccount.recurringTopUp.created`

Adyen sends this webhook when a [recurring top-up](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts/_balanceAccountId_/recurringTopUps) is successfully created for a balance account.

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "creationDate": "2026-04-17T10:30:00+01:00",
    "accountId": "BA00000000000000000001",
    "webhookTopUpConfiguration": {
      "id": "TU4227C224555B5FTD2NT2JV4WN5",
      "description": "Top up when balance is low",
      "status": "active",
      "topUpAmount": {
        "fixedAmount": {
          "currency": "EUR",
          "value": 10000
        }
      },
      "trigger": {
        "schedule": "weekly",
        "threshold": {
          "currency": "EUR",
          "value": 5000
        }
      },
      "counterparty": {
        "transferInstrumentId": "SE00000000000000000001"
      },
      "referenceForBeneficiary": "TopUpFromSavings",
      "mandate": {
        "reference": "MND00000000000000000001",
        "creationDate": "2026-04-17T10:30:00+01:00"
      }
    }
  },
  "environment": "test",
  "timestamp": "2026-04-17T10:30:00+01:00",
  "type": "balancePlatform.balanceAccount.recurringTopUp.created"
}
```

<h3 id="recurring-top-up-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TopUpConfigurationEventRequest](#schematopupconfigurationeventrequest)|false|none|
|» data|body|[TopUpWebhookData](#schematopupwebhookdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balanceAccount.recurringTopUp.created|
|» type|balancePlatform.balanceAccount.recurringTopUp.deleted|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "[accepted]"
}
```

<h3 id="recurring-top-up-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Recurring top-up deleted

<a id="opIdpost-balancePlatform.balanceAccount.recurringTopUp.deleted"></a>

`POST balancePlatform.balanceAccount.recurringTopUp.deleted`

Adyen sends this webhook when a [recurring top-up](https://docs.adyen.com/api-explorer/balanceplatform/latest/delete/balanceAccounts/_balanceAccountId_/recurringTopUps/_recurringTopUpId_) is successfully deleted from a balance account.

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "creationDate": "2026-04-17T10:30:00+01:00",
    "accountId": "BA00000000000000000001",
    "webhookTopUpConfiguration": {
      "id": "TU4227C224555B5FTD2NT2JV4WN5",
      "description": "Top up when balance is low",
      "status": "active",
      "topUpAmount": {
        "fixedAmount": {
          "currency": "EUR",
          "value": 10000
        }
      },
      "trigger": {
        "schedule": "weekly",
        "threshold": {
          "currency": "EUR",
          "value": 5000
        }
      },
      "counterparty": {
        "transferInstrumentId": "SE00000000000000000001"
      },
      "referenceForBeneficiary": "TopUpFromSavings",
      "mandate": {
        "reference": "MND00000000000000000001",
        "creationDate": "2026-04-17T10:30:00+01:00"
      }
    }
  },
  "environment": "test",
  "timestamp": "2026-04-17T16:20:00+01:00",
  "type": "balancePlatform.balanceAccount.recurringTopUp.deleted"
}
```

<h3 id="recurring-top-up-deleted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TopUpConfigurationEventRequest](#schematopupconfigurationeventrequest)|false|none|
|» data|body|[TopUpWebhookData](#schematopupwebhookdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balanceAccount.recurringTopUp.created|
|» type|balancePlatform.balanceAccount.recurringTopUp.deleted|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "[accepted]"
}
```

<h3 id="recurring-top-up-deleted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Recurring top-up updated

<a id="opIdpost-balancePlatform.balanceAccount.recurringTopUp.updated"></a>

`POST balancePlatform.balanceAccount.recurringTopUp.updated`

Adyen sends this webhook when a [recurring top-up](https://docs.adyen.com/api-explorer/balanceplatform/latest/patch/balanceAccounts/_balanceAccountId_/recurringTopUps/_recurringTopUpId_) is successfully updated for a balance account.

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "creationDate": "2026-04-17T10:30:00+01:00",
    "accountId": "BA00000000000000000001",
    "webhookTopUpConfiguration": {
      "id": "TU4227C224555B5FTD2NT2JV4WN5",
      "description": "Top up when balance is low - updated",
      "status": "inactive",
      "topUpAmount": {
        "fixedAmount": {
          "currency": "EUR",
          "value": 15000
        }
      },
      "trigger": {
        "schedule": "monthly",
        "threshold": {
          "currency": "EUR",
          "value": 3000
        }
      },
      "counterparty": {
        "transferInstrumentId": "SE00000000000000000001"
      },
      "referenceForBeneficiary": "TopUpFromSavings",
      "mandate": {
        "reference": "MND00000000000000000001",
        "creationDate": "2026-04-17T10:30:00+01:00"
      },
      "disabledReason": "counterpartyAccountBlocked",
      "reasonDetail": "The counterparty account is blocked."
    }
  },
  "environment": "test",
  "timestamp": "2026-04-17T14:45:00+01:00",
  "type": "balancePlatform.balanceAccount.recurringTopUp.updated"
}
```

<h3 id="recurring-top-up-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TopUpConfigurationUpdatedEventRequest](#schematopupconfigurationupdatedeventrequest)|false|none|
|» data|body|[TopUpUpdatedWebhookData](#schematopupupdatedwebhookdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balanceAccount.recurringTopUp.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "[accepted]"
}
```

<h3 id="recurring-top-up-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Balance account updated

<a id="opIdpost-balancePlatform.balanceAccount.updated"></a>

`POST balancePlatform.balanceAccount.updated`

Adyen sends this webhook when you successfully [update a balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/patch/balanceAccounts/_id_).

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "balanceAccount": {
      "accountHolderId": "AH00000000000000000001",
      "defaultCurrencyCode": "EUR",
      "id": "BA00000000000000000001",
      "status": "active",
      "timeZone": "Europe/Amsterdam"
    }
  },
  "environment": "test",
  "timestamp": "2024-12-15T15:42:03+01:00",
  "type": "balancePlatform.balanceAccount.updated"
}
```

<h3 id="balance-account-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BalanceAccountNotificationRequest](#schemabalanceaccountnotificationrequest)|false|none|
|» data|body|[BalanceAccountNotificationData](#schemabalanceaccountnotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balanceAccount.updated|
|» type|balancePlatform.balanceAccount.created|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="balance-account-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Managed payout schedule created on a balance account

<a id="opIdpost-balancePlatform.balanceAccountPayoutSchedule.created"></a>

`POST balancePlatform.balanceAccountPayoutSchedule.created`

Adyen sends this webhook when you successfully create a managed payout schedule on a balance account.

> Body parameter

```json
{
  "data": {
    "balanceAccountId": "string",
    "balanceAccountPayoutScheduleId": "string",
    "balancePlatform": "string",
    "currency": "string",
    "description": "string",
    "enabled": true,
    "frequency": "string",
    "frequencyValue": 0,
    "maxPayoutAmount": 0,
    "minPayoutAmount": 0,
    "reference": "string",
    "referenceForBeneficiary": "string",
    "retainedAmount": 0,
    "salesDayClosingTime": "00:00:00Z",
    "transferInstrumentId": "string"
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.balanceAccountPayoutSchedule.created"
}
```

<h3 id="managed-payout-schedule-created-on-a-balance-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PayoutScheduleBANotificationRequest](#schemapayoutschedulebanotificationrequest)|false|none|
|» data|body|[AccountPayoutConfigWebhookData](#schemaaccountpayoutconfigwebhookdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balanceAccountPayoutSchedule.created|
|» type|balancePlatform.balanceAccountPayoutSchedule.updated|
|» type|balancePlatform.balanceAccountPayoutSchedule.deleted|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="managed-payout-schedule-created-on-a-balance-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Managed payout schedule deleted from a balance account

<a id="opIdpost-balancePlatform.balanceAccountPayoutSchedule.deleted"></a>

`POST balancePlatform.balanceAccountPayoutSchedule.deleted`

Adyen sends this webhook when you successfully delete a payout schedule from a balance account.

> Body parameter

```json
{
  "data": {
    "balanceAccountId": "string",
    "balanceAccountPayoutScheduleId": "string",
    "balancePlatform": "string",
    "currency": "string",
    "description": "string",
    "enabled": true,
    "frequency": "string",
    "frequencyValue": 0,
    "maxPayoutAmount": 0,
    "minPayoutAmount": 0,
    "reference": "string",
    "referenceForBeneficiary": "string",
    "retainedAmount": 0,
    "salesDayClosingTime": "00:00:00Z",
    "transferInstrumentId": "string"
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.balanceAccountPayoutSchedule.created"
}
```

<h3 id="managed-payout-schedule-deleted-from-a-balance-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PayoutScheduleBANotificationRequest](#schemapayoutschedulebanotificationrequest)|false|none|
|» data|body|[AccountPayoutConfigWebhookData](#schemaaccountpayoutconfigwebhookdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balanceAccountPayoutSchedule.created|
|» type|balancePlatform.balanceAccountPayoutSchedule.updated|
|» type|balancePlatform.balanceAccountPayoutSchedule.deleted|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="managed-payout-schedule-deleted-from-a-balance-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Managed payout schedule updated on a balance account

<a id="opIdpost-balancePlatform.balanceAccountPayoutSchedule.updated"></a>

`POST balancePlatform.balanceAccountPayoutSchedule.updated`

Adyen sends this webhook when you successfully update a managed payout schedule on a balance account.

> Body parameter

```json
{
  "data": {
    "balanceAccountId": "string",
    "balanceAccountPayoutScheduleId": "string",
    "balancePlatform": "string",
    "currency": "string",
    "description": "string",
    "enabled": true,
    "frequency": "string",
    "frequencyValue": 0,
    "maxPayoutAmount": 0,
    "minPayoutAmount": 0,
    "reference": "string",
    "referenceForBeneficiary": "string",
    "retainedAmount": 0,
    "salesDayClosingTime": "00:00:00Z",
    "transferInstrumentId": "string"
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.balanceAccountPayoutSchedule.created"
}
```

<h3 id="managed-payout-schedule-updated-on-a-balance-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PayoutScheduleBANotificationRequest](#schemapayoutschedulebanotificationrequest)|false|none|
|» data|body|[AccountPayoutConfigWebhookData](#schemaaccountpayoutconfigwebhookdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balanceAccountPayoutSchedule.created|
|» type|balancePlatform.balanceAccountPayoutSchedule.updated|
|» type|balancePlatform.balanceAccountPayoutSchedule.deleted|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="managed-payout-schedule-updated-on-a-balance-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Automatic application of a managed payout schedule failed

<a id="opIdpost-balancePlatform.balanceAccountPayoutScheduleAutoApplication.failed"></a>

`POST balancePlatform.balanceAccountPayoutScheduleAutoApplication.failed`

Adyen sends this webhook when a managed payout schedule could not be automatically applied to a balance account.

> Body parameter

```json
{
  "data": {
    "balanceAccountId": "string",
    "balancePlatform": "string",
    "balancePlatformPayoutScheduleId": "string",
    "reason": "string",
    "transferInstrumentId": "string"
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.balanceAccountPayoutScheduleAutoApplication.failed"
}
```

<h3 id="automatic-application-of-a-managed-payout-schedule-failed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountPayoutAutoApplicationNotificationRequest](#schemaaccountpayoutautoapplicationnotificationrequest)|false|none|
|» data|body|[AccountPayoutAutoApplicationWebhookData](#schemaaccountpayoutautoapplicationwebhookdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balanceAccountPayoutScheduleAutoApplication.failed|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="automatic-application-of-a-managed-payout-schedule-failed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Payout schedule execution failed

<a id="opIdpost-balancePlatform.balanceAccountPayoutScheduleExecution.failed"></a>

`POST balancePlatform.balanceAccountPayoutScheduleExecution.failed`

Adyen sends this webhook when a scheduled payout execution fails.

> Body parameter

```json
{
  "data": {
    "balanceAccountId": "string",
    "balanceAccountPayoutScheduleId": "string",
    "balancePlatform": "string",
    "result": "failed",
    "resultDetails": {
      "reason": "string",
      "reasonCode": "string",
      "transferId": "string"
    },
    "triggeredAt": "1970-01-01T00:00:00Z"
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.balanceAccountPayoutScheduleExecution.succeeded"
}
```

<h3 id="payout-schedule-execution-failed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PayoutScheduleStateNotificationRequest](#schemapayoutschedulestatenotificationrequest)|false|none|
|» data|body|[PayoutStateWebhookData](#schemapayoutstatewebhookdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balanceAccountPayoutScheduleExecution.succeeded|
|» type|balancePlatform.balanceAccountPayoutScheduleExecution.failed|
|» type|balancePlatform.balanceAccountPayoutScheduleExecution.skipped|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="payout-schedule-execution-failed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Payout schedule execution skipped

<a id="opIdpost-balancePlatform.balanceAccountPayoutScheduleExecution.skipped"></a>

`POST balancePlatform.balanceAccountPayoutScheduleExecution.skipped`

Adyen sends this webhook when a scheduled payout execution is skipped.

> Body parameter

```json
{
  "data": {
    "balanceAccountId": "string",
    "balanceAccountPayoutScheduleId": "string",
    "balancePlatform": "string",
    "result": "failed",
    "resultDetails": {
      "reason": "string",
      "reasonCode": "string",
      "transferId": "string"
    },
    "triggeredAt": "1970-01-01T00:00:00Z"
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.balanceAccountPayoutScheduleExecution.succeeded"
}
```

<h3 id="payout-schedule-execution-skipped-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PayoutScheduleStateNotificationRequest](#schemapayoutschedulestatenotificationrequest)|false|none|
|» data|body|[PayoutStateWebhookData](#schemapayoutstatewebhookdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balanceAccountPayoutScheduleExecution.succeeded|
|» type|balancePlatform.balanceAccountPayoutScheduleExecution.failed|
|» type|balancePlatform.balanceAccountPayoutScheduleExecution.skipped|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="payout-schedule-execution-skipped-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Payout schedule execution succeeded

<a id="opIdpost-balancePlatform.balanceAccountPayoutScheduleExecution.succeeded"></a>

`POST balancePlatform.balanceAccountPayoutScheduleExecution.succeeded`

Adyen sends this webhook when a scheduled payout execution succeeds.

> Body parameter

```json
{
  "data": {
    "balanceAccountId": "string",
    "balanceAccountPayoutScheduleId": "string",
    "balancePlatform": "string",
    "result": "failed",
    "resultDetails": {
      "reason": "string",
      "reasonCode": "string",
      "transferId": "string"
    },
    "triggeredAt": "1970-01-01T00:00:00Z"
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.balanceAccountPayoutScheduleExecution.succeeded"
}
```

<h3 id="payout-schedule-execution-succeeded-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PayoutScheduleStateNotificationRequest](#schemapayoutschedulestatenotificationrequest)|false|none|
|» data|body|[PayoutStateWebhookData](#schemapayoutstatewebhookdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balanceAccountPayoutScheduleExecution.succeeded|
|» type|balancePlatform.balanceAccountPayoutScheduleExecution.failed|
|» type|balancePlatform.balanceAccountPayoutScheduleExecution.skipped|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="payout-schedule-execution-succeeded-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Sweep created

<a id="opIdpost-balancePlatform.balanceAccountSweep.created"></a>

`POST balancePlatform.balanceAccountSweep.created`

Adyen sends this webhook when you successfully [create a sweep](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts/_balanceAccountId_/sweeps).

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "accountId": "BA00000000000000000001",
    "sweep": {
      "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
      "schedule": {
        "type": "weekly"
      },
      "status": "active",
      "targetAmount": {
        "currency": "EUR",
        "value": 0
      },
      "triggerAmount": {
        "currency": "EUR",
        "value": 0
      },
      "type": "push",
      "counterparty": {
        "balanceAccountId": "BA00000000000000000002"
      },
      "currency": "EUR"
    }
  },
  "environment": "test",
  "timestamp": "2024-12-15T15:42:03+01:00",
  "type": "balancePlatform.balanceAccountSweep.created"
}
```

<h3 id="sweep-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SweepConfigurationNotificationRequest](#schemasweepconfigurationnotificationrequest)|false|none|
|» data|body|[SweepConfigurationNotificationData](#schemasweepconfigurationnotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balanceAccountSweep.created|
|» type|balancePlatform.balanceAccountSweep.updated|
|» type|balancePlatform.balanceAccountSweep.deleted|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="sweep-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Sweep deleted

<a id="opIdpost-balancePlatform.balanceAccountSweep.deleted"></a>

`POST balancePlatform.balanceAccountSweep.deleted`

Adyen sends this webhook when you successfully [delete a sweep](https://docs.adyen.com/api-explorer/balanceplatform/latest/delete/balanceAccounts/_balanceAccountId_/sweeps/_sweepId_).

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "accountId": "BA00000000000000000001",
    "sweep": {
      "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
      "schedule": {
        "type": "weekly"
      },
      "status": "active",
      "targetAmount": {
        "currency": "EUR",
        "value": 0
      },
      "triggerAmount": {
        "currency": "EUR",
        "value": 0
      },
      "type": "push",
      "counterparty": {
        "balanceAccountId": "BA00000000000000000002"
      },
      "currency": "EUR"
    }
  },
  "environment": "test",
  "timestamp": "2024-12-15T15:42:03+01:00",
  "type": "balancePlatform.balanceAccountSweep.deleted"
}
```

<h3 id="sweep-deleted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SweepConfigurationNotificationRequest](#schemasweepconfigurationnotificationrequest)|false|none|
|» data|body|[SweepConfigurationNotificationData](#schemasweepconfigurationnotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balanceAccountSweep.created|
|» type|balancePlatform.balanceAccountSweep.updated|
|» type|balancePlatform.balanceAccountSweep.deleted|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="sweep-deleted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Sweep updated

<a id="opIdpost-balancePlatform.balanceAccountSweep.updated"></a>

`POST balancePlatform.balanceAccountSweep.updated`

Adyen sends this webhook when you successfully [update a sweep](https://docs.adyen.com/api-explorer/balanceplatform/latest/patch/balanceAccounts/_balanceAccountId_/sweeps/_sweepId_).

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "accountId": "BA00000000000000000001",
    "sweep": {
      "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
      "schedule": {
        "type": "weekly"
      },
      "status": "inactive",
      "targetAmount": {
        "currency": "EUR",
        "value": 0
      },
      "triggerAmount": {
        "currency": "EUR",
        "value": 0
      },
      "type": "push",
      "counterparty": {
        "balanceAccountId": "BA00000000000000000002"
      },
      "currency": "EUR"
    }
  },
  "environment": "test",
  "timestamp": "2024-12-15T15:42:03+01:00",
  "type": "balancePlatform.balanceAccountSweep.updated"
}
```

<h3 id="sweep-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SweepConfigurationNotificationRequest](#schemasweepconfigurationnotificationrequest)|false|none|
|» data|body|[SweepConfigurationNotificationData](#schemasweepconfigurationnotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balanceAccountSweep.created|
|» type|balancePlatform.balanceAccountSweep.updated|
|» type|balancePlatform.balanceAccountSweep.deleted|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="sweep-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Sweep execution failed

<a id="opIdpost-balancePlatform.balanceAccountSweepExecution.failed"></a>

`POST balancePlatform.balanceAccountSweepExecution.failed`

Adyen sends this webhook when a sweep execution fails.

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "id": "SWPE00000000000000000000000003",
    "balanceAccountId": "BA00000000000000000001",
    "balanceAccountSweepId": "SWPC4227C224555B5FTD2NT2JV4WN5",
    "result": "failed",
    "resultDetails": {
      "reason": "Missing capabilities",
      "reasonCode": "missingCapabilities"
    },
    "triggeredAt": "2026-05-11T12:52:00Z"
  },
  "environment": "test",
  "timestamp": "2026-05-11T12:52:00.727Z",
  "type": "balancePlatform.balanceAccountSweepExecution.failed"
}
```

<h3 id="sweep-execution-failed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SweepExecutionNotificationRequest](#schemasweepexecutionnotificationrequest)|false|none|
|» data|body|[SweepExecutionNotificationData](#schemasweepexecutionnotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balanceAccountSweepExecution.succeeded|
|» type|balancePlatform.balanceAccountSweepExecution.skipped|
|» type|balancePlatform.balanceAccountSweepExecution.failed|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="sweep-execution-failed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Sweep skipped

<a id="opIdpost-balancePlatform.balanceAccountSweepExecution.skipped"></a>

`POST balancePlatform.balanceAccountSweepExecution.skipped`

Adyen sends this webhook when a sweep execution is skipped.

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "id": "SWPE00000000000000000000000002",
    "balanceAccountId": "BA00000000000000000001",
    "balanceAccountSweepId": "SWPC4227C224555B5FTD2NT2JV4WN5",
    "result": "skipped",
    "resultDetails": {
      "reason": "No balance to pay out",
      "reasonCode": "noBalanceToPayOut"
    },
    "triggeredAt": "2026-05-11T13:02:00Z"
  },
  "environment": "test",
  "timestamp": "2026-05-11T13:02:00.982Z",
  "type": "balancePlatform.balanceAccountSweepExecution.skipped"
}
```

<h3 id="sweep-skipped-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SweepExecutionNotificationRequest](#schemasweepexecutionnotificationrequest)|false|none|
|» data|body|[SweepExecutionNotificationData](#schemasweepexecutionnotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balanceAccountSweepExecution.succeeded|
|» type|balancePlatform.balanceAccountSweepExecution.skipped|
|» type|balancePlatform.balanceAccountSweepExecution.failed|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="sweep-skipped-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Sweep execution succeeded

<a id="opIdpost-balancePlatform.balanceAccountSweepExecution.succeeded"></a>

`POST balancePlatform.balanceAccountSweepExecution.succeeded`

Adyen sends this webhook when a sweep execution succeeds.

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "id": "SWPE00000000000000000000000001",
    "balanceAccountId": "BA00000000000000000001",
    "balanceAccountSweepId": "SWPC4227C224555B5FTD2NT2JV4WN5",
    "result": "succeeded",
    "resultDetails": {
      "transferId": "1VVF0D5U66PIUIVP"
    },
    "triggeredAt": "2026-05-11T12:57:00Z"
  },
  "environment": "test",
  "timestamp": "2026-05-11T12:57:01.346Z",
  "type": "balancePlatform.balanceAccountSweepExecution.succeeded"
}
```

<h3 id="sweep-execution-succeeded-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SweepExecutionNotificationRequest](#schemasweepexecutionnotificationrequest)|false|none|
|» data|body|[SweepExecutionNotificationData](#schemasweepexecutionnotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balanceAccountSweepExecution.succeeded|
|» type|balancePlatform.balanceAccountSweepExecution.skipped|
|» type|balancePlatform.balanceAccountSweepExecution.failed|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="sweep-execution-succeeded-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Managed payout schedule created on your balance platform

<a id="opIdpost-balancePlatform.balancePlatformPayoutSchedule.created"></a>

`POST balancePlatform.balancePlatformPayoutSchedule.created`

Adyen sends this webhook when a managed payout schedule is successfully created on your balance platform.

> Body parameter

```json
{
  "data": {
    "balancePlatform": "string",
    "balancePlatformPayoutScheduleId": "string",
    "countryCode": "string",
    "currency": "string",
    "defaultDescription": "string",
    "defaultFrequency": "string",
    "defaultFrequencyValue": 0,
    "defaultReference": "string",
    "defaultReferenceForBeneficiary": "string",
    "maxPayoutAmount": 0,
    "minPayoutAmount": 0,
    "retainedAmount": 0
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.balancePlatformPayoutSchedule.created"
}
```

<h3 id="managed-payout-schedule-created-on-your-balance-platform-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PayoutScheduleBPNotificationRequest](#schemapayoutschedulebpnotificationrequest)|false|none|
|» data|body|[PlatformPayoutConfigWebhookData](#schemaplatformpayoutconfigwebhookdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balancePlatformPayoutSchedule.created|
|» type|balancePlatform.balancePlatformPayoutSchedule.updated|
|» type|balancePlatform.balancePlatformPayoutSchedule.deleted|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="managed-payout-schedule-created-on-your-balance-platform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Managed payout schedule deleted from your balance platform

<a id="opIdpost-balancePlatform.balancePlatformPayoutSchedule.deleted"></a>

`POST balancePlatform.balancePlatformPayoutSchedule.deleted`

Adyen sends this webhook when you successfully delete a payout schedule on a balance platform.

> Body parameter

```json
{
  "data": {
    "balancePlatform": "string",
    "balancePlatformPayoutScheduleId": "string",
    "countryCode": "string",
    "currency": "string",
    "defaultDescription": "string",
    "defaultFrequency": "string",
    "defaultFrequencyValue": 0,
    "defaultReference": "string",
    "defaultReferenceForBeneficiary": "string",
    "maxPayoutAmount": 0,
    "minPayoutAmount": 0,
    "retainedAmount": 0
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.balancePlatformPayoutSchedule.created"
}
```

<h3 id="managed-payout-schedule-deleted-from-your-balance-platform-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PayoutScheduleBPNotificationRequest](#schemapayoutschedulebpnotificationrequest)|false|none|
|» data|body|[PlatformPayoutConfigWebhookData](#schemaplatformpayoutconfigwebhookdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balancePlatformPayoutSchedule.created|
|» type|balancePlatform.balancePlatformPayoutSchedule.updated|
|» type|balancePlatform.balancePlatformPayoutSchedule.deleted|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="managed-payout-schedule-deleted-from-your-balance-platform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Managed payout schedule updated on your balance platform

<a id="opIdpost-balancePlatform.balancePlatformPayoutSchedule.updated"></a>

`POST balancePlatform.balancePlatformPayoutSchedule.updated`

Adyen sends this webhook when a managed payout schedule is successfully updated on your balance platform.

> Body parameter

```json
{
  "data": {
    "balancePlatform": "string",
    "balancePlatformPayoutScheduleId": "string",
    "countryCode": "string",
    "currency": "string",
    "defaultDescription": "string",
    "defaultFrequency": "string",
    "defaultFrequencyValue": 0,
    "defaultReference": "string",
    "defaultReferenceForBeneficiary": "string",
    "maxPayoutAmount": 0,
    "minPayoutAmount": 0,
    "retainedAmount": 0
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.balancePlatformPayoutSchedule.created"
}
```

<h3 id="managed-payout-schedule-updated-on-your-balance-platform-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PayoutScheduleBPNotificationRequest](#schemapayoutschedulebpnotificationrequest)|false|none|
|» data|body|[PlatformPayoutConfigWebhookData](#schemaplatformpayoutconfigwebhookdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.balancePlatformPayoutSchedule.created|
|» type|balancePlatform.balancePlatformPayoutSchedule.updated|
|» type|balancePlatform.balancePlatformPayoutSchedule.deleted|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="managed-payout-schedule-updated-on-your-balance-platform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Card order created

<a id="opIdpost-balancePlatform.cardorder.created"></a>

`POST balancePlatform.cardorder.created`

Adyen sends this webhook to indicate a successful creation of a card order after you create a [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments) of `type` **card** and `formFactor` **physical**.

> Body parameter

```json
{
  "data": {
    "card": {
      "status": "processing"
    },
    "cardOrderItemId": "OI00000000000000000000001",
    "paymentInstrumentId": "PI00000000000000000000001",
    "pin": {
      "status": "processing"
    },
    "shippingMethod": "dhlInternationalExpressBulk"
  },
  "environment": "test",
  "type": "balancePlatform.cardorder.created"
}
```

<h3 id="card-order-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CardOrderNotificationRequest](#schemacardordernotificationrequest)|false|none|
|» data|body|[CardOrderItem](#schemacardorderitem)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.cardorder.created|
|» type|balancePlatform.cardorder.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="card-order-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Card order updated

<a id="opIdpost-balancePlatform.cardorder.updated"></a>

`POST balancePlatform.cardorder.updated`

Adyen sends this webhook when there is an update in card order status.

> Body parameter

```json
{
  "data": {
    "card": {
      "status": "produced"
    },
    "cardOrderItemId": "OI00000000000000000000001",
    "paymentInstrumentId": "PI00000000000000000000001",
    "pin": {
      "status": "produced"
    },
    "shippingMethod": "dhlInternationalExpressBulk"
  },
  "environment": "test",
  "type": "balancePlatform.cardorder.updated"
}
```

<h3 id="card-order-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CardOrderNotificationRequest](#schemacardordernotificationrequest)|false|none|
|» data|body|[CardOrderItem](#schemacardorderitem)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.cardorder.created|
|» type|balancePlatform.cardorder.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="card-order-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Mandate created

<a id="opIdpost-balancePlatform.mandate.created"></a>

`POST balancePlatform.mandate.created`

Adyen sends this webhook when a [direct debit mandate](https://docs.adyen.com/business-accounts/accept-direct-debits-uk) is created.

> Body parameter

```json
{
  "data": {
    "balancePlatform": "string",
    "mandate": {
      "balanceAccountId": "string",
      "counterparty": {
        "accountHolder": {
          "fullName": "string"
        },
        "accountIdentification": {
          "accountNumber": "stringst",
          "sortCode": "string",
          "type": "ukLocal"
        }
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "id": "string",
      "paymentInstrumentId": "string",
      "status": "approved",
      "type": "bacs",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.mandate.created"
}
```

<h3 id="mandate-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MandateNotificationRequest](#schemamandatenotificationrequest)|false|none|
|» data|body|[MandateNotificationData](#schemamandatenotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.mandate.created|
|» type|balancePlatform.mandate.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="mandate-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Mandate updated

<a id="opIdpost-balancePlatform.mandate.updated"></a>

`POST balancePlatform.mandate.updated`

Adyen sends this webhook when a [direct debit mandate](https://docs.adyen.com/business-accounts/accept-direct-debits-uk) is updated.

> Body parameter

```json
{
  "data": {
    "balancePlatform": "string",
    "mandate": {
      "balanceAccountId": "string",
      "counterparty": {
        "accountHolder": {
          "fullName": "string"
        },
        "accountIdentification": {
          "accountNumber": "stringst",
          "sortCode": "string",
          "type": "ukLocal"
        }
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "id": "string",
      "paymentInstrumentId": "string",
      "status": "approved",
      "type": "bacs",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.mandate.created"
}
```

<h3 id="mandate-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MandateNotificationRequest](#schemamandatenotificationrequest)|false|none|
|» data|body|[MandateNotificationData](#schemamandatenotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.mandate.created|
|» type|balancePlatform.mandate.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="mandate-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Network token created

<a id="opIdpost-balancePlatform.networkToken.created"></a>

`POST balancePlatform.networkToken.created`

Adyen sends this webhook when you initiate a request for provisioning a network token.

> Body parameter

```json
{
  "data": {
    "authentication": {
      "method": "string",
      "result": "string"
    },
    "authenticationApplied": true,
    "balancePlatform": "string",
    "decision": "string",
    "id": "string",
    "paymentInstrumentId": "string",
    "schemeRiskScore": "string",
    "status": "string",
    "tokenLastFour": "string",
    "tokenRequestor": {
      "id": "string",
      "name": "string"
    },
    "transactionRulesResult": {
      "advice": "string",
      "allHardBlockRulesPassed": true,
      "score": 0,
      "triggeredTransactionRules": [
        {
          "reason": "string",
          "transactionRule": {
            "description": "string",
            "id": "string",
            "outcomeType": "string",
            "reference": "string",
            "score": 0
          },
          "transactionRuleSource": {
            "id": "string",
            "type": "string"
          }
        }
      ]
    },
    "type": "string",
    "validationFacts": [
      {
        "reasons": [
          "string"
        ],
        "result": "invalid",
        "type": "string"
      }
    ],
    "wallet": {
      "accountScore": "string",
      "device": {
        "deviceId": "string",
        "formFactor": "string",
        "osName": "string"
      },
      "deviceScore": "string",
      "provisioningMethod": "string",
      "recommendationReasons": [
        "accountCardTooNew"
      ],
      "type": "string"
    }
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.networkToken.created"
}
```

<h3 id="network-token-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NetworkTokenNotificationRequest](#schemanetworktokennotificationrequest)|false|none|
|» data|body|[NetworkTokenNotificationDataV2](#schemanetworktokennotificationdatav2)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|The type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.networkToken.created|
|» type|balancePlatform.networkToken.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="network-token-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Network token updated

<a id="opIdpost-balancePlatform.networkToken.updated"></a>

`POST balancePlatform.networkToken.updated`

Adyen sends this webhook when there is an internal status update for the network token during the provisioning process.

> Body parameter

```json
{
  "data": {
    "authentication": {
      "method": "string",
      "result": "string"
    },
    "authenticationApplied": true,
    "balancePlatform": "string",
    "decision": "string",
    "id": "string",
    "paymentInstrumentId": "string",
    "schemeRiskScore": "string",
    "status": "string",
    "tokenLastFour": "string",
    "tokenRequestor": {
      "id": "string",
      "name": "string"
    },
    "transactionRulesResult": {
      "advice": "string",
      "allHardBlockRulesPassed": true,
      "score": 0,
      "triggeredTransactionRules": [
        {
          "reason": "string",
          "transactionRule": {
            "description": "string",
            "id": "string",
            "outcomeType": "string",
            "reference": "string",
            "score": 0
          },
          "transactionRuleSource": {
            "id": "string",
            "type": "string"
          }
        }
      ]
    },
    "type": "string",
    "validationFacts": [
      {
        "reasons": [
          "string"
        ],
        "result": "invalid",
        "type": "string"
      }
    ],
    "wallet": {
      "accountScore": "string",
      "device": {
        "deviceId": "string",
        "formFactor": "string",
        "osName": "string"
      },
      "deviceScore": "string",
      "provisioningMethod": "string",
      "recommendationReasons": [
        "accountCardTooNew"
      ],
      "type": "string"
    }
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.networkToken.created"
}
```

<h3 id="network-token-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NetworkTokenNotificationRequest](#schemanetworktokennotificationrequest)|false|none|
|» data|body|[NetworkTokenNotificationDataV2](#schemanetworktokennotificationdatav2)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|The type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.networkToken.created|
|» type|balancePlatform.networkToken.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="network-token-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Payment instrument created

<a id="opIdpost-balancePlatform.paymentInstrument.created"></a>

`POST balancePlatform.paymentInstrument.created`

Adyen sends this webhook when you successfully [create a payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments). 
>The webhook does not include the card number when creating virtual cards. You can only get the card number in the response of the POST [/paymentInstruments](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments#responses-200-card-number) request.

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "paymentInstrument": {
      "balanceAccountId": "BA00000000000000000001",
      "description": "C. Holden - card",
      "issuingCountryCode": "GB",
      "status": "active",
      "type": "card",
      "card": {
        "cardholderName": "Carl Holden",
        "formFactor": "virtual",
        "brand": "mc",
        "brandVariant": "mc",
        "number": "4010100000000000000",
        "bin": "555544",
        "expiration": {
          "month": "04",
          "year": "2030"
        },
        "lastFour": "2732"
      },
      "id": "PI00000000000000000001"
    }
  },
  "environment": "test",
  "timestamp": "2026-03-24T09:30:12+01:00",
  "type": "balancePlatform.paymentInstrument.created"
}
```

<h3 id="payment-instrument-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentNotificationRequest](#schemapaymentnotificationrequest)|false|none|
|» data|body|[PaymentInstrumentNotificationData](#schemapaymentinstrumentnotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.paymentInstrument.created|
|» type|balancePlatform.paymentInstrument.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="payment-instrument-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Payment instrument updated

<a id="opIdpost-balancePlatform.paymentInstrument.updated"></a>

`POST balancePlatform.paymentInstrument.updated`

Adyen sends this webhook when you successfully [update a payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/patch/paymentInstruments/_id_). 

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "paymentInstrument": {
      "balanceAccountId": "BA00000000000000000001",
      "description": "C. Holden - card",
      "issuingCountryCode": "GB",
      "status": "suspended",
      "type": "card",
      "card": {
        "cardholderName": "Carl Holden",
        "formFactor": "virtual",
        "brand": "mc",
        "brandVariant": "mc",
        "number": "4010100000000000000",
        "bin": "555544",
        "expiration": {
          "month": "04",
          "year": "2024"
        },
        "lastFour": "2732"
      },
      "id": "PI00000000000000000001"
    }
  },
  "environment": "test",
  "timestamp": "2024-12-15T15:42:03+01:00",
  "type": "balancePlatform.paymentInstrument.updated"
}
```

<h3 id="payment-instrument-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentNotificationRequest](#schemapaymentnotificationrequest)|false|none|
|» data|body|[PaymentInstrumentNotificationData](#schemapaymentinstrumentnotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.paymentInstrument.created|
|» type|balancePlatform.paymentInstrument.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="payment-instrument-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Score signal triggered

<a id="opIdpost-balancePlatform.score.triggered"></a>

`POST balancePlatform.score.triggered`

For merchants who opt in to the Score product, Adyen sends this webhook when a score signal is triggered against an account holder.

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "creationDate": "2023-03-16T13:58:31+01:00",
    "id": "V4HZ4RBFJGXXGN82",
    "accountHolder": {
      "reference": "YOUR_ACCOUNT_HOLDER_REFERENCE",
      "description": "S.Hopper - Staff 123",
      "id": "AH00000000000000000000001"
    },
    "accountHolderStatus": "Active",
    "automatedActions": [
      "bumpKYCTier"
    ],
    "riskScore": 67,
    "scoreSignalsTriggered": [
      "DistinctAddressUsage",
      "HighNumberOfLegalEntitiesInIdentity",
      "HighNumberOfAccountsInIdentity",
      "AccountAge",
      "LEMCountry",
      "LegalEntityEmailReferral"
    ],
    "signalSourceTypes": [
      "LegalEntityEmailReferral"
    ]
  },
  "environment": "test",
  "timestamp": "2023-03-16T13:58:31+01:00",
  "type": "balancePlatform.score.triggered"
}
```

<h3 id="score-signal-triggered-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ScoreNotificationRequest](#schemascorenotificationrequest)|false|none|
|» data|body|[BankScoreSignalTriggeredData](#schemabankscoresignaltriggereddata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.score.triggered|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="score-signal-triggered-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

# Schemas

<h2 id="tocS_AccountHolder">AccountHolder</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholder"></a>
<a id="schema_AccountHolder"></a>
<a id="tocSaccountholder"></a>
<a id="tocsaccountholder"></a>

```json
{
  "balancePlatform": "string",
  "capabilities": {
    "property1": {
      "allowed": true,
      "allowedLevel": "high",
      "allowedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "str",
            "value": 0
          },
          "property2": {
            "currency": "str",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "str",
          "value": 0
        }
      },
      "enabled": true,
      "problems": [
        {
          "entity": {
            "documents": [
              "string"
            ],
            "id": "string",
            "owner": {
              "documents": [
                "string"
              ],
              "id": "string",
              "type": "BankAccount"
            },
            "type": "BankAccount"
          },
          "verificationErrors": [
            {
              "capabilities": [
                "acceptExternalFunding"
              ],
              "code": "string",
              "message": "string",
              "remediatingActions": [
                {
                  "code": "string",
                  "message": "string"
                }
              ],
              "subErrors": [
                {
                  "capabilities": [
                    "acceptExternalFunding"
                  ],
                  "code": "string",
                  "message": "string",
                  "type": "dataMissing",
                  "remediatingActions": [
                    {
                      "code": "string",
                      "message": "string"
                    }
                  ]
                }
              ],
              "type": "dataMissing"
            }
          ]
        }
      ],
      "requested": true,
      "requestedLevel": "high",
      "requestedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "str",
            "value": 0
          },
          "property2": {
            "currency": "str",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "str",
          "value": 0
        }
      },
      "transferInstruments": [
        {
          "allowed": true,
          "allowedLevel": "high",
          "enabled": true,
          "id": "string",
          "requested": true,
          "requestedLevel": "high",
          "verificationStatus": "invalid"
        }
      ],
      "verificationStatus": "invalid"
    },
    "property2": {
      "allowed": true,
      "allowedLevel": "high",
      "allowedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "str",
            "value": 0
          },
          "property2": {
            "currency": "str",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "str",
          "value": 0
        }
      },
      "enabled": true,
      "problems": [
        {
          "entity": {
            "documents": [
              "string"
            ],
            "id": "string",
            "owner": {
              "documents": [
                "string"
              ],
              "id": "string",
              "type": "BankAccount"
            },
            "type": "BankAccount"
          },
          "verificationErrors": [
            {
              "capabilities": [
                "acceptExternalFunding"
              ],
              "code": "string",
              "message": "string",
              "remediatingActions": [
                {
                  "code": "string",
                  "message": "string"
                }
              ],
              "subErrors": [
                {
                  "capabilities": [
                    "acceptExternalFunding"
                  ],
                  "code": "string",
                  "message": "string",
                  "type": "dataMissing",
                  "remediatingActions": [
                    {
                      "code": "string",
                      "message": "string"
                    }
                  ]
                }
              ],
              "type": "dataMissing"
            }
          ]
        }
      ],
      "requested": true,
      "requestedLevel": "high",
      "requestedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "str",
            "value": 0
          },
          "property2": {
            "currency": "str",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "str",
          "value": 0
        }
      },
      "transferInstruments": [
        {
          "allowed": true,
          "allowedLevel": "high",
          "enabled": true,
          "id": "string",
          "requested": true,
          "requestedLevel": "high",
          "verificationStatus": "invalid"
        }
      ],
      "verificationStatus": "invalid"
    }
  },
  "contactDetails": {
    "address": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "email": "string",
    "phone": {
      "number": "string",
      "type": "landline"
    },
    "webAddress": "string"
  },
  "description": "string",
  "id": "string",
  "legalEntityId": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "migratedAccountHolderCode": "string",
  "primaryBalanceAccount": "string",
  "reference": "string",
  "status": "active",
  "timeZone": "string",
  "verificationDeadlines": [
    {
      "capabilities": [
        "acceptExternalFunding"
      ],
      "entityIds": [
        "string"
      ],
      "expiresAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balancePlatform|string|false|none|The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms.|
|capabilities|object|false|none|Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.|
|contactDetails|[ContactDetails](#schemacontactdetails)|false|none|**Deprecated.** Contact details of the account holder.|
|description|string|false|none|Your description for the account holder.|
|id|string|true|none|The unique identifier of the account holder.|
|legalEntityId|string|true|none|The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) associated with the account holder. Adyen performs a verification process against the legal entity of the account holder.|
|metadata|object|false|none|A set of key and value pairs for general use.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.|
|migratedAccountHolderCode|string|false|none|The unique identifier of the migrated account holder in the classic integration.|
|primaryBalanceAccount|string|false|none|The ID of the account holder's primary balance account. By default, this is set to the first balance account that you create for the account holder. To assign a different balance account, send a PATCH request.|
|reference|string|false|none|Your reference for the account holder.|
|status|string|false|none|The status of the account holder.<br><br>Possible values: <br><br> * **active**: The account holder is active and allowed to use its capabilities. This is the initial status for account holders and balance accounts. You can change this status to **suspended** or **closed**. <br><br> * **suspended**: The account holder is temporarily disabled and payouts are blocked. You can change this status to **active** or **closed**. <br><br>* **closed**: The account holder and all of its capabilities are permanently disabled. This is a final status and cannot be changed.|
|timeZone|string|false|none|The time zone of the account holder. For example, **Europe/Amsterdam**.<br>Defaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).|
|verificationDeadlines|[[VerificationDeadline](#schemaverificationdeadline)]|false|none|List of verification deadlines and the capabilities that will be disallowed if verification errors are not resolved.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|closed|
|status|suspended|

<h2 id="tocS_AccountHolderCapability">AccountHolderCapability</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholdercapability"></a>
<a id="schema_AccountHolderCapability"></a>
<a id="tocSaccountholdercapability"></a>
<a id="tocsaccountholdercapability"></a>

```json
{
  "allowed": true,
  "allowedLevel": "high",
  "allowedSettings": {
    "amountPerIndustry": {
      "property1": {
        "currency": "str",
        "value": 0
      },
      "property2": {
        "currency": "str",
        "value": 0
      }
    },
    "authorizedCardUsers": true,
    "fundingSource": [
      "credit"
    ],
    "interval": "daily",
    "maxAmount": {
      "currency": "str",
      "value": 0
    }
  },
  "enabled": true,
  "problems": [
    {
      "entity": {
        "documents": [
          "string"
        ],
        "id": "string",
        "owner": {
          "documents": [
            "string"
          ],
          "id": "string",
          "type": "BankAccount"
        },
        "type": "BankAccount"
      },
      "verificationErrors": [
        {
          "capabilities": [
            "acceptExternalFunding"
          ],
          "code": "string",
          "message": "string",
          "remediatingActions": [
            {
              "code": "string",
              "message": "string"
            }
          ],
          "subErrors": [
            {
              "capabilities": [
                "acceptExternalFunding"
              ],
              "code": "string",
              "message": "string",
              "type": "dataMissing",
              "remediatingActions": [
                {
                  "code": "string",
                  "message": "string"
                }
              ]
            }
          ],
          "type": "dataMissing"
        }
      ]
    }
  ],
  "requested": true,
  "requestedLevel": "high",
  "requestedSettings": {
    "amountPerIndustry": {
      "property1": {
        "currency": "str",
        "value": 0
      },
      "property2": {
        "currency": "str",
        "value": 0
      }
    },
    "authorizedCardUsers": true,
    "fundingSource": [
      "credit"
    ],
    "interval": "daily",
    "maxAmount": {
      "currency": "str",
      "value": 0
    }
  },
  "transferInstruments": [
    {
      "allowed": true,
      "allowedLevel": "high",
      "enabled": true,
      "id": "string",
      "requested": true,
      "requestedLevel": "high",
      "verificationStatus": "invalid"
    }
  ],
  "verificationStatus": "invalid"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|boolean|false|none|Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is successful and the account holder is permitted to use the capability.|
|allowedLevel|string|false|none|The capability level that is allowed for the account holder.<br><br>Possible values: **notApplicable**, **low**, **medium**, **high**.|
|allowedSettings|[CapabilitySettings](#schemacapabilitysettings)|false|none|A JSON object containing the settings that are allowed for the account holder.|
|enabled|boolean|false|none|Indicates whether the capability is enabled. If **false**, the capability is temporarily disabled for the account holder.|
|problems|[[CapabilityProblem](#schemacapabilityproblem)]|false|none|Contains verification errors and the actions that you can take to resolve them.|
|requested|boolean|false|none|Indicates whether the capability is requested. To check whether the account holder is permitted to use the capability, refer to the `allowed` field.|
|requestedLevel|string|false|none|The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.<br><br>Possible values: **notApplicable**, **low**, **medium**, **high**.|
|requestedSettings|[CapabilitySettings](#schemacapabilitysettings)|false|none|A JSON object containing the settings that were requested for the account holder.|
|transferInstruments|[[AccountSupportingEntityCapability](#schemaaccountsupportingentitycapability)]|false|none|Contains the status of the transfer instruments associated with this capability. |
|verificationStatus|string|false|none|The status of the verification checks for the capability.<br><br>Possible values:<br><br>* **pending**: Adyen is running the verification.<br><br>* **invalid**: The verification failed. Check if the `errors` array contains more information.<br><br>* **valid**: The verification has been successfully completed.<br><br>* **rejected**: Adyen has verified the information, but found reasons to not allow the capability.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|allowedLevel|high|
|allowedLevel|low|
|allowedLevel|medium|
|allowedLevel|notApplicable|
|requestedLevel|high|
|requestedLevel|low|
|requestedLevel|medium|
|requestedLevel|notApplicable|
|verificationStatus|invalid|
|verificationStatus|pending|
|verificationStatus|rejected|
|verificationStatus|valid|

<h2 id="tocS_AccountHolderNotificationData">AccountHolderNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholdernotificationdata"></a>
<a id="schema_AccountHolderNotificationData"></a>
<a id="tocSaccountholdernotificationdata"></a>
<a id="tocsaccountholdernotificationdata"></a>

```json
{
  "accountHolder": {
    "balancePlatform": "string",
    "capabilities": {
      "property1": {
        "allowed": true,
        "allowedLevel": "high",
        "allowedSettings": {
          "amountPerIndustry": {
            "property1": {
              "currency": "str",
              "value": 0
            },
            "property2": {
              "currency": "str",
              "value": 0
            }
          },
          "authorizedCardUsers": true,
          "fundingSource": [
            "credit"
          ],
          "interval": "daily",
          "maxAmount": {
            "currency": "str",
            "value": 0
          }
        },
        "enabled": true,
        "problems": [
          {
            "entity": {
              "documents": [
                "string"
              ],
              "id": "string",
              "owner": {
                "documents": [
                  "string"
                ],
                "id": "string",
                "type": "BankAccount"
              },
              "type": "BankAccount"
            },
            "verificationErrors": [
              {
                "capabilities": [
                  "acceptExternalFunding"
                ],
                "code": "string",
                "message": "string",
                "remediatingActions": [
                  {
                    "code": "string",
                    "message": "string"
                  }
                ],
                "subErrors": [
                  {
                    "capabilities": [
                      "acceptExternalFunding"
                    ],
                    "code": "string",
                    "message": "string",
                    "type": "dataMissing",
                    "remediatingActions": [
                      {
                        "code": "string",
                        "message": "string"
                      }
                    ]
                  }
                ],
                "type": "dataMissing"
              }
            ]
          }
        ],
        "requested": true,
        "requestedLevel": "high",
        "requestedSettings": {
          "amountPerIndustry": {
            "property1": {
              "currency": "str",
              "value": 0
            },
            "property2": {
              "currency": "str",
              "value": 0
            }
          },
          "authorizedCardUsers": true,
          "fundingSource": [
            "credit"
          ],
          "interval": "daily",
          "maxAmount": {
            "currency": "str",
            "value": 0
          }
        },
        "transferInstruments": [
          {
            "allowed": true,
            "allowedLevel": "high",
            "enabled": true,
            "id": "string",
            "requested": true,
            "requestedLevel": "high",
            "verificationStatus": "invalid"
          }
        ],
        "verificationStatus": "invalid"
      },
      "property2": {
        "allowed": true,
        "allowedLevel": "high",
        "allowedSettings": {
          "amountPerIndustry": {
            "property1": {
              "currency": "str",
              "value": 0
            },
            "property2": {
              "currency": "str",
              "value": 0
            }
          },
          "authorizedCardUsers": true,
          "fundingSource": [
            "credit"
          ],
          "interval": "daily",
          "maxAmount": {
            "currency": "str",
            "value": 0
          }
        },
        "enabled": true,
        "problems": [
          {
            "entity": {
              "documents": [
                "string"
              ],
              "id": "string",
              "owner": {
                "documents": [
                  "string"
                ],
                "id": "string",
                "type": "BankAccount"
              },
              "type": "BankAccount"
            },
            "verificationErrors": [
              {
                "capabilities": [
                  "acceptExternalFunding"
                ],
                "code": "string",
                "message": "string",
                "remediatingActions": [
                  {
                    "code": "string",
                    "message": "string"
                  }
                ],
                "subErrors": [
                  {
                    "capabilities": [
                      "acceptExternalFunding"
                    ],
                    "code": "string",
                    "message": "string",
                    "type": "dataMissing",
                    "remediatingActions": [
                      {
                        "code": "string",
                        "message": "string"
                      }
                    ]
                  }
                ],
                "type": "dataMissing"
              }
            ]
          }
        ],
        "requested": true,
        "requestedLevel": "high",
        "requestedSettings": {
          "amountPerIndustry": {
            "property1": {
              "currency": "str",
              "value": 0
            },
            "property2": {
              "currency": "str",
              "value": 0
            }
          },
          "authorizedCardUsers": true,
          "fundingSource": [
            "credit"
          ],
          "interval": "daily",
          "maxAmount": {
            "currency": "str",
            "value": 0
          }
        },
        "transferInstruments": [
          {
            "allowed": true,
            "allowedLevel": "high",
            "enabled": true,
            "id": "string",
            "requested": true,
            "requestedLevel": "high",
            "verificationStatus": "invalid"
          }
        ],
        "verificationStatus": "invalid"
      }
    },
    "contactDetails": {
      "address": {
        "city": "string",
        "country": "string",
        "houseNumberOrName": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "email": "string",
      "phone": {
        "number": "string",
        "type": "landline"
      },
      "webAddress": "string"
    },
    "description": "string",
    "id": "string",
    "legalEntityId": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "migratedAccountHolderCode": "string",
    "primaryBalanceAccount": "string",
    "reference": "string",
    "status": "active",
    "timeZone": "string",
    "verificationDeadlines": [
      {
        "capabilities": [
          "acceptExternalFunding"
        ],
        "entityIds": [
          "string"
        ],
        "expiresAt": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "balancePlatform": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolder|[AccountHolder](#schemaaccountholder)|false|none|Contains information about the account holder resource that triggered the event.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|

<h2 id="tocS_AccountHolderNotificationRequest">AccountHolderNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholdernotificationrequest"></a>
<a id="schema_AccountHolderNotificationRequest"></a>
<a id="tocSaccountholdernotificationrequest"></a>
<a id="tocsaccountholdernotificationrequest"></a>

```json
{
  "data": {
    "accountHolder": {
      "balancePlatform": "string",
      "capabilities": {
        "property1": {
          "allowed": true,
          "allowedLevel": "high",
          "allowedSettings": {
            "amountPerIndustry": {
              "property1": {
                "currency": "str",
                "value": 0
              },
              "property2": {
                "currency": "str",
                "value": 0
              }
            },
            "authorizedCardUsers": true,
            "fundingSource": [
              "credit"
            ],
            "interval": "daily",
            "maxAmount": {
              "currency": "str",
              "value": 0
            }
          },
          "enabled": true,
          "problems": [
            {
              "entity": {
                "documents": [
                  "string"
                ],
                "id": "string",
                "owner": {
                  "documents": [
                    "string"
                  ],
                  "id": "string",
                  "type": "BankAccount"
                },
                "type": "BankAccount"
              },
              "verificationErrors": [
                {
                  "capabilities": [
                    "acceptExternalFunding"
                  ],
                  "code": "string",
                  "message": "string",
                  "remediatingActions": [
                    {
                      "code": "string",
                      "message": "string"
                    }
                  ],
                  "subErrors": [
                    {
                      "capabilities": [
                        "acceptExternalFunding"
                      ],
                      "code": "string",
                      "message": "string",
                      "type": "dataMissing",
                      "remediatingActions": [
                        {
                          "code": "string",
                          "message": "string"
                        }
                      ]
                    }
                  ],
                  "type": "dataMissing"
                }
              ]
            }
          ],
          "requested": true,
          "requestedLevel": "high",
          "requestedSettings": {
            "amountPerIndustry": {
              "property1": {
                "currency": "str",
                "value": 0
              },
              "property2": {
                "currency": "str",
                "value": 0
              }
            },
            "authorizedCardUsers": true,
            "fundingSource": [
              "credit"
            ],
            "interval": "daily",
            "maxAmount": {
              "currency": "str",
              "value": 0
            }
          },
          "transferInstruments": [
            {
              "allowed": true,
              "allowedLevel": "high",
              "enabled": true,
              "id": "string",
              "requested": true,
              "requestedLevel": "high",
              "verificationStatus": "invalid"
            }
          ],
          "verificationStatus": "invalid"
        },
        "property2": {
          "allowed": true,
          "allowedLevel": "high",
          "allowedSettings": {
            "amountPerIndustry": {
              "property1": {
                "currency": "str",
                "value": 0
              },
              "property2": {
                "currency": "str",
                "value": 0
              }
            },
            "authorizedCardUsers": true,
            "fundingSource": [
              "credit"
            ],
            "interval": "daily",
            "maxAmount": {
              "currency": "str",
              "value": 0
            }
          },
          "enabled": true,
          "problems": [
            {
              "entity": {
                "documents": [
                  "string"
                ],
                "id": "string",
                "owner": {
                  "documents": [
                    "string"
                  ],
                  "id": "string",
                  "type": "BankAccount"
                },
                "type": "BankAccount"
              },
              "verificationErrors": [
                {
                  "capabilities": [
                    "acceptExternalFunding"
                  ],
                  "code": "string",
                  "message": "string",
                  "remediatingActions": [
                    {
                      "code": "string",
                      "message": "string"
                    }
                  ],
                  "subErrors": [
                    {
                      "capabilities": [
                        "acceptExternalFunding"
                      ],
                      "code": "string",
                      "message": "string",
                      "type": "dataMissing",
                      "remediatingActions": [
                        {
                          "code": "string",
                          "message": "string"
                        }
                      ]
                    }
                  ],
                  "type": "dataMissing"
                }
              ]
            }
          ],
          "requested": true,
          "requestedLevel": "high",
          "requestedSettings": {
            "amountPerIndustry": {
              "property1": {
                "currency": "str",
                "value": 0
              },
              "property2": {
                "currency": "str",
                "value": 0
              }
            },
            "authorizedCardUsers": true,
            "fundingSource": [
              "credit"
            ],
            "interval": "daily",
            "maxAmount": {
              "currency": "str",
              "value": 0
            }
          },
          "transferInstruments": [
            {
              "allowed": true,
              "allowedLevel": "high",
              "enabled": true,
              "id": "string",
              "requested": true,
              "requestedLevel": "high",
              "verificationStatus": "invalid"
            }
          ],
          "verificationStatus": "invalid"
        }
      },
      "contactDetails": {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "email": "string",
        "phone": {
          "number": "string",
          "type": "landline"
        },
        "webAddress": "string"
      },
      "description": "string",
      "id": "string",
      "legalEntityId": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "migratedAccountHolderCode": "string",
      "primaryBalanceAccount": "string",
      "reference": "string",
      "status": "active",
      "timeZone": "string",
      "verificationDeadlines": [
        {
          "capabilities": [
            "acceptExternalFunding"
          ],
          "entityIds": [
            "string"
          ],
          "expiresAt": "1970-01-01T00:00:00Z"
        }
      ]
    },
    "balancePlatform": "string"
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.accountHolder.updated"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[AccountHolderNotificationData](#schemaaccountholdernotificationdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.accountHolder.updated|
|type|balancePlatform.accountHolder.created|

<h2 id="tocS_AccountPayoutAutoApplicationNotificationRequest">AccountPayoutAutoApplicationNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccountpayoutautoapplicationnotificationrequest"></a>
<a id="schema_AccountPayoutAutoApplicationNotificationRequest"></a>
<a id="tocSaccountpayoutautoapplicationnotificationrequest"></a>
<a id="tocsaccountpayoutautoapplicationnotificationrequest"></a>

```json
{
  "data": {
    "balanceAccountId": "string",
    "balancePlatform": "string",
    "balancePlatformPayoutScheduleId": "string",
    "reason": "string",
    "transferInstrumentId": "string"
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.balanceAccountPayoutScheduleAutoApplication.failed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[AccountPayoutAutoApplicationWebhookData](#schemaaccountpayoutautoapplicationwebhookdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.balanceAccountPayoutScheduleAutoApplication.failed|

<h2 id="tocS_AccountPayoutAutoApplicationWebhookData">AccountPayoutAutoApplicationWebhookData</h2>
<!-- backwards compatibility -->
<a id="schemaaccountpayoutautoapplicationwebhookdata"></a>
<a id="schema_AccountPayoutAutoApplicationWebhookData"></a>
<a id="tocSaccountpayoutautoapplicationwebhookdata"></a>
<a id="tocsaccountpayoutautoapplicationwebhookdata"></a>

```json
{
  "balanceAccountId": "string",
  "balancePlatform": "string",
  "balancePlatformPayoutScheduleId": "string",
  "reason": "string",
  "transferInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccountId|string|false|none|The unique identifier of the balance account to which the payout schedule was unsuccessfully applied.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|balancePlatformPayoutScheduleId|string|false|none|The unique identifier of the balance platform payout schedule that was unsuccessfully applied to the balance account.|
|reason|string|false|none|The reason why the payout schedule could not be applied.|
|transferInstrumentId|string|false|none|The unique identifier of the transfer instrument linked to the balance account. This transfer instrument is the counterparty account for the payout schedule that was unsuccessfully applied.|

<h2 id="tocS_AccountPayoutConfigWebhookData">AccountPayoutConfigWebhookData</h2>
<!-- backwards compatibility -->
<a id="schemaaccountpayoutconfigwebhookdata"></a>
<a id="schema_AccountPayoutConfigWebhookData"></a>
<a id="tocSaccountpayoutconfigwebhookdata"></a>
<a id="tocsaccountpayoutconfigwebhookdata"></a>

```json
{
  "balanceAccountId": "string",
  "balanceAccountPayoutScheduleId": "string",
  "balancePlatform": "string",
  "currency": "string",
  "description": "string",
  "enabled": true,
  "frequency": "string",
  "frequencyValue": 0,
  "maxPayoutAmount": 0,
  "minPayoutAmount": 0,
  "reference": "string",
  "referenceForBeneficiary": "string",
  "retainedAmount": 0,
  "salesDayClosingTime": "00:00:00Z",
  "transferInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccountId|string|false|none|The unique identifier of the balance account to which the payout schedule was applied.|
|balanceAccountPayoutScheduleId|string|false|none|The unique identifier of the balance platform payout schedule that was applied to the balance account.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|currency|string|false|none|The three-character [ISO code](https://docs.adyen.com/development-resources/currency-codes) of the currency used for this schedule.|
|description|string|false|none|The description used for all payouts initiated by this payout schedule.<br><br>Maximum length: 140 characters. If your description is longer, it may be truncated.|
|enabled|boolean|false|none|Specifies whether the payout schedule is active.|
|frequency|string|false|none|The frequency of payouts initiated by this payout schedule.<br><br>Possible values:<br>* daily<br>* weekdays<br>* weekly<br>* monthly<br><br>|
|frequencyValue|integer(int32)|false|none|The date of the month or day of the week when payouts are initiated. Allowed only if `frequency` is **monthly** or **weekly**.<br><br>Possible values if `frequency` is **monthly**: **[1 - 31]**.<br>* If your specified date happens on a weekend, the payout is initiated on the next business day.<br>* If your specified date (**29**, **30**, or **31**) does not exist in a month, the payout is initiated on the last day of that month.<br><br>Possible values if `frequency` is **weekly**: **[1 - 5]**.|
|maxPayoutAmount|integer(int64)|false|none|The maximum amount that can be paid out from balance accounts that use this payout schedule.|
|minPayoutAmount|integer(int64)|false|none|The minimum amount that can be paid out from balance accounts that use this payout schedule.|
|reference|string|false|none|Your internal reference of the payout schedule.|
|referenceForBeneficiary|string|false|none|The reference for beneficiary used for all payouts initiated by this payout schedule. This reference is sent to the recipient of the transfer and is included in all webhooks related to the payout.<br><br>Supported characters: **a-z**, **A-Z**, **0-9**, **-** and space. Spaces might be replaced with **-** if the recipient bank or payment infrastructure does not allow spaces.|
|retainedAmount|integer(int64)|false|none|The amount of funds that must remain available in the balance account after an execution of the payout schedule. If the funds in the balance account are less than the retained amount, the execution is not initiated.|
|salesDayClosingTime|string(time)|false|none|The time of day when the sales day is closed in balance account time zone. The sales day closing time can be between 00:00 to 07:00.<br><br>Format: **HH:mm:SS**|
|transferInstrumentId|string|false|none|The unique identifier of the transfer instrument to which the funds are paid out.|

<h2 id="tocS_AccountSupportingEntityCapability">AccountSupportingEntityCapability</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsupportingentitycapability"></a>
<a id="schema_AccountSupportingEntityCapability"></a>
<a id="tocSaccountsupportingentitycapability"></a>
<a id="tocsaccountsupportingentitycapability"></a>

```json
{
  "allowed": true,
  "allowedLevel": "high",
  "enabled": true,
  "id": "string",
  "requested": true,
  "requestedLevel": "high",
  "verificationStatus": "invalid"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|boolean|false|none|Indicates whether the supporting entity capability is allowed. Adyen sets this to **true** if the verification is successful and the account holder is permitted to use the capability.|
|allowedLevel|string|false|none|The capability level that is allowed for the account holder.<br><br>Possible values: **notApplicable**, **low**, **medium**, **high**.|
|enabled|boolean|false|none|Indicates whether the capability is enabled. If **false**, the capability is temporarily disabled for the account holder.|
|id|string|false|none|The ID of the supporting entity.|
|requested|boolean|false|none|Indicates whether the capability is requested. To check whether the account holder is permitted to use the capability, refer to the `allowed` field.|
|requestedLevel|string|false|none|The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.<br><br>Possible values: **notApplicable**, **low**, **medium**, **high**.|
|verificationStatus|string|false|none|The status of the verification checks for the supporting entity capability.<br><br>Possible values:<br><br>* **pending**: Adyen is running the verification.<br><br>* **invalid**: The verification failed. Check if the `errors` array contains more information.<br><br>* **valid**: The verification has been successfully completed.<br><br>* **rejected**: Adyen has verified the information, but found reasons to not allow the capability.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|allowedLevel|high|
|allowedLevel|low|
|allowedLevel|medium|
|allowedLevel|notApplicable|
|requestedLevel|high|
|requestedLevel|low|
|requestedLevel|medium|
|requestedLevel|notApplicable|
|verificationStatus|invalid|
|verificationStatus|pending|
|verificationStatus|rejected|
|verificationStatus|valid|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "city": "string",
  "country": "string",
  "houseNumberOrName": "string",
  "postalCode": "string",
  "stateOrProvince": "string",
  "street": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|The name of the city. Maximum length: 3000 characters.|
|country|string|true|none|The two-character ISO-3166-1 alpha-2 country code. For example, **US**.<br>> If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.|
|houseNumberOrName|string|true|none|The number or name of the house. Maximum length: 3000 characters.|
|postalCode|string|true|none|A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries.|
|stateOrProvince|string|false|none|The two-character ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.<br>> Required for the US and Canada.|
|street|string|true|none|The name of the street. Maximum length: 3000 characters.<br>> The house number should not be included in this field; it should be separately provided via `houseNumberOrName`.|

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

<h2 id="tocS_Authentication">Authentication</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication"></a>
<a id="schema_Authentication"></a>
<a id="tocSauthentication"></a>
<a id="tocsauthentication"></a>

```json
{
  "email": "string",
  "password": "string",
  "phone": {
    "number": "string",
    "type": "landline"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email address where the one-time password (OTP) is sent.|
|password|string|false|none|The password used for 3D Secure password-based authentication. The value must be between 1 to 30 characters and must only contain the following supported characters.<br><br>* Characters between **a-z**, **A-Z**, and **0-9**<br><br>* Special characters: **äöüßÄÖÜ+-*/ç%()=?!~#'",;:$&àùòâôûáúó**|
|phone|[Phone](#schemaphone)|false|none|The phone number where the one-time password (OTP) is sent.<br><br>This object must have:<br><br>* A `type` set to **mobile**.<br><br>* A `number` with a valid country code.<br><br>* A `number` with more than 4 digits, excluding the country code.<br><br>>Make sure to verify that the card user owns the phone number.|

<h2 id="tocS_Balance">Balance</h2>
<!-- backwards compatibility -->
<a id="schemabalance"></a>
<a id="schema_Balance"></a>
<a id="tocSbalance"></a>
<a id="tocsbalance"></a>

```json
{
  "available": 0,
  "balance": 0,
  "currency": "string",
  "pending": 0,
  "pendingAvailable": 0,
  "reserved": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|integer(int64)|true|none|The balance available for use.|
|balance|integer(int64)|true|none|The sum of the transactions that have already been settled.|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.|
|pending|integer(int64)|false|none|The sum of the transactions that will be settled in the future.|
|pendingAvailable|integer(int64)|false|none|The balance that will become the available balance after the pending balance is settled.<br><br>The pending available balance is equal to the lower of the following:<br>- The `pending` balance<br>- The `pending` balance plus the `available` balance.|
|reserved|integer(int64)|true|none|The balance currently held in reserve.|

<h2 id="tocS_BalanceAccount">BalanceAccount</h2>
<!-- backwards compatibility -->
<a id="schemabalanceaccount"></a>
<a id="schema_BalanceAccount"></a>
<a id="tocSbalanceaccount"></a>
<a id="tocsbalanceaccount"></a>

```json
{
  "accountHolderId": "string",
  "balances": [
    {
      "available": 0,
      "balance": 0,
      "currency": "string",
      "pending": 0,
      "pendingAvailable": 0,
      "reserved": 0
    }
  ],
  "defaultCurrencyCode": "string",
  "description": "string",
  "id": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "migratedAccountCode": "string",
  "platformPaymentConfiguration": {
    "salesDayClosingTime": "00:00:00Z",
    "settlementDelayDays": 0
  },
  "reference": "string",
  "status": "active",
  "timeZone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderId|string|true|none|The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/accountHolders#responses-200-id) associated with the balance account.|
|balances|[[Balance](#schemabalance)]|false|none|List of balances with the amount and currency.|
|defaultCurrencyCode|string|false|none|The default three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance account. This is the currency displayed on the Balance Account overview page in your Customer Area.<br>The default value is **EUR**.<br>> After a balance account is created, you cannot change its default currency.|
|description|string|false|none|A human-readable description of the balance account, maximum 300 characters. You can use this parameter to distinguish between multiple balance accounts under an account holder.|
|id|string|true|none|The unique identifier of the balance account.|
|metadata|object|false|none|A set of key and value pairs for general use.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.|
|migratedAccountCode|string|false|none|The unique identifier of the account of the migrated account holder in the classic integration.|
|platformPaymentConfiguration|[PlatformPaymentConfiguration](#schemaplatformpaymentconfiguration)|false|none|Contains key-value pairs to configure the sales day closing time and settlement delay for a balance account.|
|reference|string|false|none|Your reference for the balance account, maximum 150 characters.|
|status|string|false|none|The status of the balance account, set to **active** by default. <br>|
|timeZone|string|false|none|The time zone of the balance account. For example, **Europe/Amsterdam**.<br>Defaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|closed|
|status|inactive|
|status|suspended|

<h2 id="tocS_BalanceAccountNotificationData">BalanceAccountNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemabalanceaccountnotificationdata"></a>
<a id="schema_BalanceAccountNotificationData"></a>
<a id="tocSbalanceaccountnotificationdata"></a>
<a id="tocsbalanceaccountnotificationdata"></a>

```json
{
  "balanceAccount": {
    "accountHolderId": "string",
    "balances": [
      {
        "available": 0,
        "balance": 0,
        "currency": "string",
        "pending": 0,
        "pendingAvailable": 0,
        "reserved": 0
      }
    ],
    "defaultCurrencyCode": "string",
    "description": "string",
    "id": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "migratedAccountCode": "string",
    "platformPaymentConfiguration": {
      "salesDayClosingTime": "00:00:00Z",
      "settlementDelayDays": 0
    },
    "reference": "string",
    "status": "active",
    "timeZone": "string"
  },
  "balancePlatform": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccount|[BalanceAccount](#schemabalanceaccount)|false|none|none|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|

<h2 id="tocS_BalanceAccountNotificationRequest">BalanceAccountNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemabalanceaccountnotificationrequest"></a>
<a id="schema_BalanceAccountNotificationRequest"></a>
<a id="tocSbalanceaccountnotificationrequest"></a>
<a id="tocsbalanceaccountnotificationrequest"></a>

```json
{
  "data": {
    "balanceAccount": {
      "accountHolderId": "string",
      "balances": [
        {
          "available": 0,
          "balance": 0,
          "currency": "string",
          "pending": 0,
          "pendingAvailable": 0,
          "reserved": 0
        }
      ],
      "defaultCurrencyCode": "string",
      "description": "string",
      "id": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "migratedAccountCode": "string",
      "platformPaymentConfiguration": {
        "salesDayClosingTime": "00:00:00Z",
        "settlementDelayDays": 0
      },
      "reference": "string",
      "status": "active",
      "timeZone": "string"
    },
    "balancePlatform": "string"
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.balanceAccount.updated"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[BalanceAccountNotificationData](#schemabalanceaccountnotificationdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.balanceAccount.updated|
|type|balancePlatform.balanceAccount.created|

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

<h2 id="tocS_BankAccountDetails">BankAccountDetails</h2>
<!-- backwards compatibility -->
<a id="schemabankaccountdetails"></a>
<a id="schema_BankAccountDetails"></a>
<a id="tocSbankaccountdetails"></a>
<a id="tocsbankaccountdetails"></a>

```json
{
  "accountNumber": "string",
  "accountType": "checking",
  "branchNumber": "string",
  "formFactor": "physical",
  "iban": "string",
  "routingNumber": "string",
  "sortCode": "string",
  "type": "iban"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|false|none|The bank account number, without separators or whitespace.|
|accountType|string|false|none|The bank account type.<br><br>Possible values: **checking** or **savings**. Defaults to **checking**.|
|branchNumber|string|false|none|The bank account branch number, without separators or whitespace|
|formFactor|string|false|none|Business accounts with a `formFactor` value of **physical** are business accounts issued under the central bank of that country. The default value is **physical** for NL, US, and UK business accounts. <br><br>Adyen creates a local IBAN for business accounts when the `formFactor` value is set to **virtual**. The local IBANs that are supported are for DE and FR, which reference a physical NL account, with funds being routed through the central bank of NL.|
|iban|string|false|none|The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.|
|routingNumber|string|false|none|The [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.|
|sortCode|string|false|none|The [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.|
|type|string|true|none|**iban** or **usLocal** or **ukLocal**|

<h2 id="tocS_BankScoreSignalTriggeredData">BankScoreSignalTriggeredData</h2>
<!-- backwards compatibility -->
<a id="schemabankscoresignaltriggereddata"></a>
<a id="schema_BankScoreSignalTriggeredData"></a>
<a id="tocSbankscoresignaltriggereddata"></a>
<a id="tocsbankscoresignaltriggereddata"></a>

```json
{
  "accountHolder": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "accountHolderStatus": "string",
  "automatedActions": [
    "string"
  ],
  "balancePlatform": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "id": "string",
  "riskScore": 0,
  "scoreSignalsTriggered": [
    "string"
  ],
  "signalSourceTypes": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolder|[ResourceReference](#schemaresourcereference)|false|none|Contains information about the account holder.|
|accountHolderStatus|string|false|none|The status of the account holder.|
|automatedActions|[string]|false|none|The automated action(s) taken as a result of the score signals that were triggered.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|id|string|false|none|The ID of the resource.|
|riskScore|integer(int32)|false|none|The score of the identity resulting from the signal(s) that were triggered.|
|scoreSignalsTriggered|[string]|false|none|The name(s) of the score signals that were triggered.|
|signalSourceTypes|[string]|false|none|The type(s) of the score signals that were triggered.|

<h2 id="tocS_BulkAddress">BulkAddress</h2>
<!-- backwards compatibility -->
<a id="schemabulkaddress"></a>
<a id="schema_BulkAddress"></a>
<a id="tocSbulkaddress"></a>
<a id="tocsbulkaddress"></a>

```json
{
  "city": "string",
  "company": "string",
  "country": "string",
  "email": "string",
  "houseNumberOrName": "string",
  "line1": "string",
  "line2": "string",
  "line3": "string",
  "mobile": "string",
  "name": "string",
  "postalCode": "string",
  "stateOrProvince": "string",
  "street": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The name of the city.|
|company|string|false|none|The name of the company.|
|country|string|true|none|The two-character ISO-3166-1 alpha-2 country code. For example, **US**.|
|email|string|false|none|The email address.|
|houseNumberOrName|string|false|none|The house number or name.|
|line1|string|false|none|The name of the street and the number of the building.<br><br>For example: **Simon Carmiggeltstraat 6-50**.|
|line2|string|false|none|Additional information about the delivery address. For example, an apartment number.|
|line3|string|false|none|Additional information about the delivery address.|
|mobile|string|false|none|The full telephone number.|
|name|string|false|none|The recipient’s name (person or contact), for example ‘John Doe’.|
|postalCode|string|false|none|The postal code.<br><br>Maximum length:<br><br>* 5 digits for addresses in the US.<br><br>* 10 characters for all other countries.|
|stateOrProvince|string|false|none|The two-letter ISO 3166-2 state or province code.<br><br>Maximum length: 2 characters for addresses in the US.|
|street|string|false|none|The streetname of the house.|

<h2 id="tocS_CapabilityProblem">CapabilityProblem</h2>
<!-- backwards compatibility -->
<a id="schemacapabilityproblem"></a>
<a id="schema_CapabilityProblem"></a>
<a id="tocScapabilityproblem"></a>
<a id="tocscapabilityproblem"></a>

```json
{
  "entity": {
    "documents": [
      "string"
    ],
    "id": "string",
    "owner": {
      "documents": [
        "string"
      ],
      "id": "string",
      "type": "BankAccount"
    },
    "type": "BankAccount"
  },
  "verificationErrors": [
    {
      "capabilities": [
        "acceptExternalFunding"
      ],
      "code": "string",
      "message": "string",
      "remediatingActions": [
        {
          "code": "string",
          "message": "string"
        }
      ],
      "subErrors": [
        {
          "capabilities": [
            "acceptExternalFunding"
          ],
          "code": "string",
          "message": "string",
          "type": "dataMissing",
          "remediatingActions": [
            {
              "code": "string",
              "message": "string"
            }
          ]
        }
      ],
      "type": "dataMissing"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity|[CapabilityProblemEntity](#schemacapabilityproblementity)|false|none|Contains the type of the entity and the corresponding ID.|
|verificationErrors|[[VerificationError](#schemaverificationerror)]|false|none|Contains information about the verification error.|

<h2 id="tocS_CapabilityProblemEntity">CapabilityProblemEntity</h2>
<!-- backwards compatibility -->
<a id="schemacapabilityproblementity"></a>
<a id="schema_CapabilityProblemEntity"></a>
<a id="tocScapabilityproblementity"></a>
<a id="tocscapabilityproblementity"></a>

```json
{
  "documents": [
    "string"
  ],
  "id": "string",
  "owner": {
    "documents": [
      "string"
    ],
    "id": "string",
    "type": "BankAccount"
  },
  "type": "BankAccount"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documents|[string]|false|none|List of document IDs to which the verification errors related to the capabilities correspond to.|
|id|string|false|none|The ID of the entity.|
|owner|[CapabilityProblemEntity-recursive](#schemacapabilityproblementity-recursive)|false|none|Contains details about the owner of the entity that has an error.|
|type|string|false|none|Type of entity. <br><br>Possible values: **LegalEntity**, **BankAccount**, **Document**.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BankAccount|
|type|Document|
|type|LegalEntity|

<h2 id="tocS_CapabilityProblemEntity-recursive">CapabilityProblemEntity-recursive</h2>
<!-- backwards compatibility -->
<a id="schemacapabilityproblementity-recursive"></a>
<a id="schema_CapabilityProblemEntity-recursive"></a>
<a id="tocScapabilityproblementity-recursive"></a>
<a id="tocscapabilityproblementity-recursive"></a>

```json
{
  "documents": [
    "string"
  ],
  "id": "string",
  "type": "BankAccount"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documents|[string]|false|none|List of document IDs to which the verification errors related to the capabilities correspond to.|
|id|string|false|none|The ID of the entity.|
|type|string|false|none|Type of entity. <br><br>Possible values: **LegalEntity**, **BankAccount**, **Document**.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BankAccount|
|type|Document|
|type|LegalEntity|

<h2 id="tocS_CapabilitySettings">CapabilitySettings</h2>
<!-- backwards compatibility -->
<a id="schemacapabilitysettings"></a>
<a id="schema_CapabilitySettings"></a>
<a id="tocScapabilitysettings"></a>
<a id="tocscapabilitysettings"></a>

```json
{
  "amountPerIndustry": {
    "property1": {
      "currency": "str",
      "value": 0
    },
    "property2": {
      "currency": "str",
      "value": 0
    }
  },
  "authorizedCardUsers": true,
  "fundingSource": [
    "credit"
  ],
  "interval": "daily",
  "maxAmount": {
    "currency": "str",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amountPerIndustry|object|false|none|none|
|authorizedCardUsers|boolean|false|none|none|
|fundingSource|[string]|false|none|none|
|interval|string|false|none|none|
|maxAmount|[Amount](#schemaamount)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|fundingSource|credit|
|fundingSource|debit|
|fundingSource|prepaid|
|interval|daily|
|interval|monthly|
|interval|weekly|

<h2 id="tocS_Card">Card</h2>
<!-- backwards compatibility -->
<a id="schemacard"></a>
<a id="schema_Card"></a>
<a id="tocScard"></a>
<a id="tocscard"></a>

```json
{
  "authentication": {
    "email": "string",
    "password": "string",
    "phone": {
      "number": "string",
      "type": "landline"
    }
  },
  "bin": "string",
  "brand": "string",
  "brandVariant": "string",
  "cardholderName": "string",
  "configuration": {
    "activation": "string",
    "activationUrl": "string",
    "bulkAddress": {
      "city": "string",
      "company": "string",
      "country": "string",
      "email": "string",
      "houseNumberOrName": "string",
      "line1": "string",
      "line2": "string",
      "line3": "string",
      "mobile": "string",
      "name": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "cardImageId": "string",
    "carrier": "string",
    "carrierImageId": "string",
    "configurationProfileId": "string",
    "currency": "string",
    "envelope": "string",
    "insert": "string",
    "language": "string",
    "logoImageId": "string",
    "pinMailer": "string",
    "printLine": "string",
    "shipmentMethod": "string"
  },
  "cvc": "string",
  "deliveryContact": {
    "address": {
      "city": "string",
      "country": "string",
      "line1": "string",
      "line2": "string",
      "line3": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "company": "string",
    "email": "string",
    "fullPhoneNumber": "string",
    "name": {
      "firstName": "string",
      "lastName": "string"
    },
    "phoneNumber": {
      "phoneCountryCode": "string",
      "phoneNumber": "string",
      "phoneType": "Fax"
    },
    "webAddress": "string"
  },
  "expiration": {
    "month": "string",
    "year": "string"
  },
  "formFactor": "physical",
  "lastFour": "string",
  "number": "string",
  "threeDSecure": "string",
  "usage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authentication|[Authentication](#schemaauthentication)|false|none|Contains the card user's password and mobile phone number. This is required when you issue cards that can be used to make online payments within the EEA and the UK, or can be added to digital wallets. Refer to [3D Secure and digital wallets](https://docs.adyen.com/issuing/3d-secure-and-wallets) for more information.|
|bin|string|false|none|The bank identification number (BIN) of the card number.|
|brand|string|true|none|The brand of the physical or the virtual card.<br>Possible values: **visa**, **mc**.|
|brandVariant|string|true|none|The brand variant of the physical or the virtual card. For example, **visadebit** or **mcprepaid**.<br>>Reach out to your Adyen contact to get the values relevant for your integration.|
|cardholderName|string|true|none|The name of the cardholder.<br> Maximum length: 26 characters.|
|configuration|[CardConfiguration](#schemacardconfiguration)|false|none|Contains information about the configuration profile for your cards. The configuration profile consists of settings required when creating a physical or a virtual card. You identify a configuration profile with its `configurationProfileId`.<br><br>When you provide this field in a request, you can override the settings of an existing configuration profile.<br><br>Reach out to your Adyen contact to get the values that you can send in this object.|
|cvc|string|false|none|The CVC2 value of the card.<br>> The CVC2 is not sent by default. This is only returned in the `POST` response for single-use virtual cards.|
|deliveryContact|[DeliveryContact](#schemadeliverycontact)|false|none|The delivery contact (name and address) for physical card delivery.|
|expiration|[Expiry](#schemaexpiry)|false|none|The expiration date of the card.|
|formFactor|string|true|none|The form factor of the card.<br>Possible values: **virtual**, **physical**.|
|lastFour|string|false|none|Last last four digits of the card number.|
|number|string|false|none|The primary account number (PAN) of the card.<br>> The PAN is masked by default and returned only for single-use virtual cards.|
|threeDSecure|string|false|none|The 3DS configuration of the physical or the virtual card. Possible values: **fullySupported**, **secureCorporate**.<br>> Reach out to your Adyen contact to get the values relevant for your integration.|
|usage|string|false|none|Specifies how many times the card can be used. Possible values: **singleUse**, **multiUse**.<br><br>> Reach out to your Adyen contact to determine the value relevant for your integration.|

#### Enumerated Values

|Property|Value|
|---|---|
|formFactor|physical|
|formFactor|unknown|
|formFactor|virtual|

<h2 id="tocS_CardConfiguration">CardConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacardconfiguration"></a>
<a id="schema_CardConfiguration"></a>
<a id="tocScardconfiguration"></a>
<a id="tocscardconfiguration"></a>

```json
{
  "activation": "string",
  "activationUrl": "string",
  "bulkAddress": {
    "city": "string",
    "company": "string",
    "country": "string",
    "email": "string",
    "houseNumberOrName": "string",
    "line1": "string",
    "line2": "string",
    "line3": "string",
    "mobile": "string",
    "name": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "cardImageId": "string",
  "carrier": "string",
  "carrierImageId": "string",
  "configurationProfileId": "string",
  "currency": "string",
  "envelope": "string",
  "insert": "string",
  "language": "string",
  "logoImageId": "string",
  "pinMailer": "string",
  "printLine": "string",
  "shipmentMethod": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activation|string|false|none|The activation label attached to the card that contains the activation instructions.<br><br>This field overrides the activation label design ID defined in the card configuration profile.|
|activationUrl|string|false|none|Your app's URL, if you want to activate cards through your app. For example, **my-app://ref1236a7d**. A QR code is created based on this URL, and is included in the carrier. Before you use this field, reach out to your Adyen contact to set up the QR code process. <br><br>Maximum length: 255 characters.|
|bulkAddress|[BulkAddress](#schemabulkaddress)|false|none|Overrides the shipment bulk address defined in the card configuration profile.|
|cardImageId|string|false|none|The unique identifier of the card image. This image is printed on the full front of the card.|
|carrier|string|false|none|The letter or packaging to which the card is attached.<br><br>This field overrides the carrier design ID defined in the card configuration profile. |
|carrierImageId|string|false|none|The unique identifier of the carrier image. This image is printed on the letter to which the card is attached.|
|configurationProfileId|string|true|none|The unique identifier of the card configuration profile that contains the settings that are applied to the card. For example, the envelope and PIN mailer designs or the logistics company handling the shipment.<br><br>You can override some of the existing settings in the configuration profile by providing the corresponding fields in the `configuration` object. For example, send the `shipmentMethod` to override the logistics company defined in the card configuration profile.|
|currency|string|false|none|The three-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the card. For example, **EUR**.<br><br>This field overrides the existing currency setting on the card configuration profile.|
|envelope|string|false|none|Overrides the envelope design ID defined in the card configuration profile. |
|insert|string|false|none|Any additional material, such as marketing material, that is shipped together with the card.<br><br>This field overrides the insert design ID defined in the card configuration profile.|
|language|string|false|none|The two-letter [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code of the card. For example, **en**.|
|logoImageId|string|false|none|The unique identifier of the logo image. This image is printed on the partial front of the card, for example, a logo on the upper right corner.|
|pinMailer|string|false|none|The letter on which the PIN of the card is printed.<br><br>This field overrides the PIN mailer design ID defined in the card configuration profile.|
|printLine|string|false|none|Print Line.<br><br>Text printed on the physical card below the cardholder name. You provide the value, which can be up to 26 characters.|
|shipmentMethod|string|false|none|The logistics company that ships the card.<br><br>This field overrides the logistics company defined in the card configuration profile.|

<h2 id="tocS_CardOrderItem">CardOrderItem</h2>
<!-- backwards compatibility -->
<a id="schemacardorderitem"></a>
<a id="schema_CardOrderItem"></a>
<a id="tocScardorderitem"></a>
<a id="tocscardorderitem"></a>

```json
{
  "balancePlatform": "string",
  "card": {
    "errorMessage": "string",
    "status": "created",
    "trackingNumber": "string"
  },
  "cardOrderItemId": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "id": "string",
  "paymentInstrumentId": "string",
  "pin": {
    "errorMessage": "string",
    "status": "created",
    "trackingNumber": "string"
  },
  "shippingMethod": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|card|[CardOrderItemDeliveryStatus](#schemacardorderitemdeliverystatus)|false|none|The status of the card delivery.<br><br>Possible values: **created**, **rejected**, **processing**, **produced**, **shipped**, **delivered**, **notApplicable**, **unknown**. |
|cardOrderItemId|string|false|none|The unique identifier of the card order item.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|id|string|false|none|The ID of the resource.|
|paymentInstrumentId|string|false|none|The unique identifier of the payment instrument related to the card order item.|
|pin|[CardOrderItemDeliveryStatus](#schemacardorderitemdeliverystatus)|false|none|Contains information about the status of the PIN delivery.|
|shippingMethod|string|false|none|The shipping method used to deliver the card or the PIN.|

<h2 id="tocS_CardOrderItemDeliveryStatus">CardOrderItemDeliveryStatus</h2>
<!-- backwards compatibility -->
<a id="schemacardorderitemdeliverystatus"></a>
<a id="schema_CardOrderItemDeliveryStatus"></a>
<a id="tocScardorderitemdeliverystatus"></a>
<a id="tocscardorderitemdeliverystatus"></a>

```json
{
  "errorMessage": "string",
  "status": "created",
  "trackingNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorMessage|string|false|none|An error message.|
|status|string|false|none|The status of the PIN delivery.|
|trackingNumber|string|false|none|The tracking number of the PIN delivery.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|created|
|status|delivered|
|status|notApplicable|
|status|processing|
|status|produced|
|status|rejected|
|status|shipped|
|status|unknown|

<h2 id="tocS_CardOrderNotificationRequest">CardOrderNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacardordernotificationrequest"></a>
<a id="schema_CardOrderNotificationRequest"></a>
<a id="tocScardordernotificationrequest"></a>
<a id="tocscardordernotificationrequest"></a>

```json
{
  "data": {
    "balancePlatform": "string",
    "card": {
      "errorMessage": "string",
      "status": "created",
      "trackingNumber": "string"
    },
    "cardOrderItemId": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "id": "string",
    "paymentInstrumentId": "string",
    "pin": {
      "errorMessage": "string",
      "status": "created",
      "trackingNumber": "string"
    },
    "shippingMethod": "string"
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.cardorder.created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[CardOrderItem](#schemacardorderitem)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.cardorder.created|
|type|balancePlatform.cardorder.updated|

<h2 id="tocS_ContactDetails">ContactDetails</h2>
<!-- backwards compatibility -->
<a id="schemacontactdetails"></a>
<a id="schema_ContactDetails"></a>
<a id="tocScontactdetails"></a>
<a id="tocscontactdetails"></a>

```json
{
  "address": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "email": "string",
  "phone": {
    "number": "string",
    "type": "landline"
  },
  "webAddress": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|true|none|The address of the account holder.|
|email|string|true|none|The email address of the account holder.|
|phone|[Phone](#schemaphone)|true|none|The phone number of the account holder.|
|webAddress|string|false|none|The URL of the account holder's website.|

<h2 id="tocS_DeliveryAddress">DeliveryAddress</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryaddress"></a>
<a id="schema_DeliveryAddress"></a>
<a id="tocSdeliveryaddress"></a>
<a id="tocsdeliveryaddress"></a>

```json
{
  "city": "string",
  "country": "string",
  "line1": "string",
  "line2": "string",
  "line3": "string",
  "postalCode": "string",
  "stateOrProvince": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The name of the city.|
|country|string|true|none|The two-character ISO-3166-1 alpha-2 country code. For example, **US**.<br>>If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.|
|line1|string|false|none|The name of the street. Do not include the number of the building.<br><br>For example, if the address is Simon Carmiggeltstraat 6-50, provide **Simon Carmiggeltstraat**.|
|line2|string|false|none|The number of the building.<br><br>For example, if the address is Simon Carmiggeltstraat 6-50, provide **6-50**.|
|line3|string|false|none|Additional information about the delivery address.|
|postalCode|string|false|none|The postal code.<br>Maximum length:<br>* 5 digits for an address in the US.<br>* 10 characters for an address in all other countries.|
|stateOrProvince|string|false|none|The state or province code, maximum 3 characters. For example, **CA** for California in the US or **ON** for Ontario in Canada.<br>> Required for the US and Canada.|

<h2 id="tocS_DeliveryContact">DeliveryContact</h2>
<!-- backwards compatibility -->
<a id="schemadeliverycontact"></a>
<a id="schema_DeliveryContact"></a>
<a id="tocSdeliverycontact"></a>
<a id="tocsdeliverycontact"></a>

```json
{
  "address": {
    "city": "string",
    "country": "string",
    "line1": "string",
    "line2": "string",
    "line3": "string",
    "postalCode": "string",
    "stateOrProvince": "string"
  },
  "company": "string",
  "email": "string",
  "fullPhoneNumber": "string",
  "name": {
    "firstName": "string",
    "lastName": "string"
  },
  "phoneNumber": {
    "phoneCountryCode": "string",
    "phoneNumber": "string",
    "phoneType": "Fax"
  },
  "webAddress": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[DeliveryAddress](#schemadeliveryaddress)|true|none|The address of the contact.|
|company|string|false|none|The company name of the contact.|
|email|string|false|none|The email address of the contact.|
|fullPhoneNumber|string|false|none|The full phone number of the contact provided as a single string. It will be handled as a landline phone.<br>**Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"|
|name|[Name](#schemaname)|true|none|The name of the contact.|
|phoneNumber|[PhoneNumber](#schemaphonenumber)|false|none|The phone number of the contact.|
|webAddress|string|false|none|The URL of the contact's website.|

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "deviceId": "string",
  "formFactor": "string",
  "osName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceId|string|false|none|The unique identifier of the device used for provisioning the network token.|
|formFactor|string|false|none|The type of the device used for provisioning the network token.<br><br>For example, **phone**, **mobile_phone**, **watch**, **mobilephone_or_tablet**, etc|
|osName|string|false|none|The operating system of the device used for provisioning the network token.|

<h2 id="tocS_Expiry">Expiry</h2>
<!-- backwards compatibility -->
<a id="schemaexpiry"></a>
<a id="schema_Expiry"></a>
<a id="tocSexpiry"></a>
<a id="tocsexpiry"></a>

```json
{
  "month": "string",
  "year": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|month|string|false|none|The month in which the card will expire.|
|year|string|false|none|The year in which the card will expire.|

<h2 id="tocS_IbanAccountIdentification">IbanAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemaibanaccountidentification"></a>
<a id="schema_IbanAccountIdentification"></a>
<a id="tocSibanaccountidentification"></a>
<a id="tocsibanaccountidentification"></a>

```json
{
  "bic": "string",
  "iban": "string",
  "type": "iban"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bic|string|false|none|The bank's 8- or 11-character BIC or SWIFT code.|
|iban|string|true|none|The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.|
|type|string|true|none|**iban**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|iban|

<h2 id="tocS_Mandate">Mandate</h2>
<!-- backwards compatibility -->
<a id="schemamandate"></a>
<a id="schema_Mandate"></a>
<a id="tocSmandate"></a>
<a id="tocsmandate"></a>

```json
{
  "balanceAccountId": "string",
  "counterparty": {
    "accountHolder": {
      "fullName": "string"
    },
    "accountIdentification": {
      "accountNumber": "stringst",
      "sortCode": "string",
      "type": "ukLocal"
    }
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "paymentInstrumentId": "string",
  "status": "approved",
  "type": "bacs",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccountId|string|false|none|The unique identifier of the balance account linked to the payment instrument.|
|counterparty|[MandateBankAccount](#schemamandatebankaccount)|false|none|Contains information to identify the counterparty.|
|createdAt|string(date-time)|false|none|The date when the mandate was created.|
|id|string|false|none|The unique identifier of the mandate.|
|paymentInstrumentId|string|false|none|The unique identifier of the payment instrument linked to the mandate.|
|status|string|false|none|The status of the mandate.<br><br>Possible values: **pending**, **approved**, **cancelled**.|
|type|string|false|none|The type of mandate. Possible value: **bacs**.|
|updatedAt|string(date-time)|false|none|The date when the mandate was updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|approved|
|status|cancelled|
|status|pending|
|type|bacs|

<h2 id="tocS_MandateBankAccount">MandateBankAccount</h2>
<!-- backwards compatibility -->
<a id="schemamandatebankaccount"></a>
<a id="schema_MandateBankAccount"></a>
<a id="tocSmandatebankaccount"></a>
<a id="tocsmandatebankaccount"></a>

```json
{
  "accountHolder": {
    "fullName": "string"
  },
  "accountIdentification": {
    "accountNumber": "stringst",
    "sortCode": "string",
    "type": "ukLocal"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolder|[MandatePartyIdentification](#schemamandatepartyidentification)|true|none|Contains information about the owner of the counterparty bank account.|
|accountIdentification|[UKLocalMandateAccountIdentification](#schemauklocalmandateaccountidentification)|true|none|Contains the bank account details of the counterparty. The fields required in this object depend on the country of the bank account and the currency of the transfer.|

<h2 id="tocS_MandateNotificationData">MandateNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemamandatenotificationdata"></a>
<a id="schema_MandateNotificationData"></a>
<a id="tocSmandatenotificationdata"></a>
<a id="tocsmandatenotificationdata"></a>

```json
{
  "balancePlatform": "string",
  "mandate": {
    "balanceAccountId": "string",
    "counterparty": {
      "accountHolder": {
        "fullName": "string"
      },
      "accountIdentification": {
        "accountNumber": "stringst",
        "sortCode": "string",
        "type": "ukLocal"
      }
    },
    "createdAt": "1970-01-01T00:00:00Z",
    "id": "string",
    "paymentInstrumentId": "string",
    "status": "approved",
    "type": "bacs",
    "updatedAt": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|mandate|[Mandate](#schemamandate)|false|none|Contains information about the mandate that triggered the event.|

<h2 id="tocS_MandateNotificationRequest">MandateNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemamandatenotificationrequest"></a>
<a id="schema_MandateNotificationRequest"></a>
<a id="tocSmandatenotificationrequest"></a>
<a id="tocsmandatenotificationrequest"></a>

```json
{
  "data": {
    "balancePlatform": "string",
    "mandate": {
      "balanceAccountId": "string",
      "counterparty": {
        "accountHolder": {
          "fullName": "string"
        },
        "accountIdentification": {
          "accountNumber": "stringst",
          "sortCode": "string",
          "type": "ukLocal"
        }
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "id": "string",
      "paymentInstrumentId": "string",
      "status": "approved",
      "type": "bacs",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.mandate.created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[MandateNotificationData](#schemamandatenotificationdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.mandate.created|
|type|balancePlatform.mandate.updated|

<h2 id="tocS_MandatePartyIdentification">MandatePartyIdentification</h2>
<!-- backwards compatibility -->
<a id="schemamandatepartyidentification"></a>
<a id="schema_MandatePartyIdentification"></a>
<a id="tocSmandatepartyidentification"></a>
<a id="tocsmandatepartyidentification"></a>

```json
{
  "fullName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullName|string|false|none|The full name of the entity that owns the bank account.<br><br>Supported characters: [a-z] [A-Z] [0-9] , . ; : - — / \ + & ! ? @ ( ) " ' and space.|

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
{
  "firstName": "string",
  "lastName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|true|none|The first name.|
|lastName|string|true|none|The last name.|

<h2 id="tocS_NetworkTokenNotificationDataV2">NetworkTokenNotificationDataV2</h2>
<!-- backwards compatibility -->
<a id="schemanetworktokennotificationdatav2"></a>
<a id="schema_NetworkTokenNotificationDataV2"></a>
<a id="tocSnetworktokennotificationdatav2"></a>
<a id="tocsnetworktokennotificationdatav2"></a>

```json
{
  "authentication": {
    "method": "string",
    "result": "string"
  },
  "authenticationApplied": true,
  "balancePlatform": "string",
  "decision": "string",
  "id": "string",
  "paymentInstrumentId": "string",
  "schemeRiskScore": "string",
  "status": "string",
  "tokenLastFour": "string",
  "tokenRequestor": {
    "id": "string",
    "name": "string"
  },
  "transactionRulesResult": {
    "advice": "string",
    "allHardBlockRulesPassed": true,
    "score": 0,
    "triggeredTransactionRules": [
      {
        "reason": "string",
        "transactionRule": {
          "description": "string",
          "id": "string",
          "outcomeType": "string",
          "reference": "string",
          "score": 0
        },
        "transactionRuleSource": {
          "id": "string",
          "type": "string"
        }
      }
    ]
  },
  "type": "string",
  "validationFacts": [
    {
      "reasons": [
        "string"
      ],
      "result": "invalid",
      "type": "string"
    }
  ],
  "wallet": {
    "accountScore": "string",
    "device": {
      "deviceId": "string",
      "formFactor": "string",
      "osName": "string"
    },
    "deviceScore": "string",
    "provisioningMethod": "string",
    "recommendationReasons": [
      "accountCardTooNew"
    ],
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authentication|[TokenAuthentication](#schematokenauthentication)|false|none|Contains information about the authentication process triggered during token provisioning.|
|authenticationApplied|boolean|false|none|Specifies whether the authentication process was triggered during token provisioning.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|decision|string|false|none|The decision about the network token provisioning.<br><br>Possible values: **approved**, **declined**, **requiresAuthentication**.|
|id|string|false|none|The unique identifier of the network token.|
|paymentInstrumentId|string|false|none|The unique identifier of the payment instrument to which the network token is associated.|
|schemeRiskScore|string|false|none|The confidence score of scheme, indicating the degree of risk associated with a token.<br><br>A high score indicates a high level of risk. A low score indicates a low level of risk.<br><br>Possible values for visa : **00** to **99**, a value of 00 signifies no score was provided by visa|
|status|string|false|none|The status of the network token.|
|tokenLastFour|string|false|none|The last four digits of the network token. Use this value to help your user to identify their network token.|
|tokenRequestor|[NetworkTokenRequestor](#schemanetworktokenrequestor)|false|none|Contains information about the entity or organization that is requesting the network token.|
|transactionRulesResult|[NetworkTokenTransactionRulesResult](#schemanetworktokentransactionrulesresult)|false|none|Contains the results of the evaluation of the transaction rules that apply to network token creation.|
|type|string|false|none|The type of network token.<br><br>Possible values: **wallet**, **cof**.|
|validationFacts|[[ValidationFacts](#schemavalidationfacts)]|false|none|The rules used to validate the request for provisioning the network token.|
|wallet|[Wallet](#schemawallet)|false|none|Contains information about the wallet for which the network token is provisioned.<br><br>Returned only when `type` is **wallet**.|

<h2 id="tocS_NetworkTokenNotificationRequest">NetworkTokenNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemanetworktokennotificationrequest"></a>
<a id="schema_NetworkTokenNotificationRequest"></a>
<a id="tocSnetworktokennotificationrequest"></a>
<a id="tocsnetworktokennotificationrequest"></a>

```json
{
  "data": {
    "authentication": {
      "method": "string",
      "result": "string"
    },
    "authenticationApplied": true,
    "balancePlatform": "string",
    "decision": "string",
    "id": "string",
    "paymentInstrumentId": "string",
    "schemeRiskScore": "string",
    "status": "string",
    "tokenLastFour": "string",
    "tokenRequestor": {
      "id": "string",
      "name": "string"
    },
    "transactionRulesResult": {
      "advice": "string",
      "allHardBlockRulesPassed": true,
      "score": 0,
      "triggeredTransactionRules": [
        {
          "reason": "string",
          "transactionRule": {
            "description": "string",
            "id": "string",
            "outcomeType": "string",
            "reference": "string",
            "score": 0
          },
          "transactionRuleSource": {
            "id": "string",
            "type": "string"
          }
        }
      ]
    },
    "type": "string",
    "validationFacts": [
      {
        "reasons": [
          "string"
        ],
        "result": "invalid",
        "type": "string"
      }
    ],
    "wallet": {
      "accountScore": "string",
      "device": {
        "deviceId": "string",
        "formFactor": "string",
        "osName": "string"
      },
      "deviceScore": "string",
      "provisioningMethod": "string",
      "recommendationReasons": [
        "accountCardTooNew"
      ],
      "type": "string"
    }
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.networkToken.created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[NetworkTokenNotificationDataV2](#schemanetworktokennotificationdatav2)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|The type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.networkToken.created|
|type|balancePlatform.networkToken.updated|

<h2 id="tocS_NetworkTokenRequestor">NetworkTokenRequestor</h2>
<!-- backwards compatibility -->
<a id="schemanetworktokenrequestor"></a>
<a id="schema_NetworkTokenRequestor"></a>
<a id="tocSnetworktokenrequestor"></a>
<a id="tocsnetworktokenrequestor"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier of the network token requestor.|
|name|string|false|none|The name of the network token requestor.|

<h2 id="tocS_NetworkTokenRiskRuleData">NetworkTokenRiskRuleData</h2>
<!-- backwards compatibility -->
<a id="schemanetworktokenriskruledata"></a>
<a id="schema_NetworkTokenRiskRuleData"></a>
<a id="tocSnetworktokenriskruledata"></a>
<a id="tocsnetworktokenriskruledata"></a>

```json
{
  "description": "string",
  "id": "string",
  "outcomeType": "string",
  "reference": "string",
  "score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the transaction rule.|
|id|string|false|none|The unique identifier of the transaction rule.|
|outcomeType|string|false|none|The outcome type of the transaction rule.|
|reference|string|false|none|The reference for the transaction rule.|
|score|integer(int32)|false|none|The transaction score determined by the rule.|

<h2 id="tocS_NetworkTokenRiskRuleSource">NetworkTokenRiskRuleSource</h2>
<!-- backwards compatibility -->
<a id="schemanetworktokenriskrulesource"></a>
<a id="schema_NetworkTokenRiskRuleSource"></a>
<a id="tocSnetworktokenriskrulesource"></a>
<a id="tocsnetworktokenriskrulesource"></a>

```json
{
  "id": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier of the resource to which the transaction rule applies.|
|type|string|false|none|Indicates the type of resource for which the transaction rule is defined.<br><br>Possible values:<br><br> * **PaymentInstrumentGroup**<br><br>* **PaymentInstrument**<br><br>* **BalancePlatform**<br><br>* **EntityUsageConfiguration**<br><br>* **PlatformRule**: The transaction rule is a platform-wide rule imposed by Adyen.|

<h2 id="tocS_NetworkTokenTransactionRulesResult">NetworkTokenTransactionRulesResult</h2>
<!-- backwards compatibility -->
<a id="schemanetworktokentransactionrulesresult"></a>
<a id="schema_NetworkTokenTransactionRulesResult"></a>
<a id="tocSnetworktokentransactionrulesresult"></a>
<a id="tocsnetworktokentransactionrulesresult"></a>

```json
{
  "advice": "string",
  "allHardBlockRulesPassed": true,
  "score": 0,
  "triggeredTransactionRules": [
    {
      "reason": "string",
      "transactionRule": {
        "description": "string",
        "id": "string",
        "outcomeType": "string",
        "reference": "string",
        "score": 0
      },
      "transactionRuleSource": {
        "id": "string",
        "type": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advice|string|false|none|The advice given by the Risk analysis.|
|allHardBlockRulesPassed|boolean|false|none|Indicates whether the transaction passed all rules with `outcomeType` **hardBlock**.|
|score|integer(int32)|false|none|The score of the Risk analysis.|
|triggeredTransactionRules|[[NetworkTokenTriggeredRiskRule](#schemanetworktokentriggeredriskrule)]|false|none|Contains a list of all triggered transaction rules and the corresponding data.|

<h2 id="tocS_NetworkTokenTriggeredRiskRule">NetworkTokenTriggeredRiskRule</h2>
<!-- backwards compatibility -->
<a id="schemanetworktokentriggeredriskrule"></a>
<a id="schema_NetworkTokenTriggeredRiskRule"></a>
<a id="tocSnetworktokentriggeredriskrule"></a>
<a id="tocsnetworktokentriggeredriskrule"></a>

```json
{
  "reason": "string",
  "transactionRule": {
    "description": "string",
    "id": "string",
    "outcomeType": "string",
    "reference": "string",
    "score": 0
  },
  "transactionRuleSource": {
    "id": "string",
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|Explains why the transaction rule failed.|
|transactionRule|[NetworkTokenRiskRuleData](#schemanetworktokenriskruledata)|false|none|Contains information about the transaction rule.|
|transactionRuleSource|[NetworkTokenRiskRuleSource](#schemanetworktokenriskrulesource)|false|none|Contains information about the resource to which the transaction rule applies.|

<h2 id="tocS_PaymentInstrument">PaymentInstrument</h2>
<!-- backwards compatibility -->
<a id="schemapaymentinstrument"></a>
<a id="schema_PaymentInstrument"></a>
<a id="tocSpaymentinstrument"></a>
<a id="tocspaymentinstrument"></a>

```json
{
  "additionalBankAccountIdentifications": [
    {
      "bic": "string",
      "iban": "string",
      "type": "iban"
    }
  ],
  "balanceAccountId": "string",
  "bankAccount": {
    "accountNumber": "string",
    "accountType": "checking",
    "branchNumber": "string",
    "formFactor": "physical",
    "iban": "string",
    "routingNumber": "string",
    "sortCode": "string",
    "type": "iban"
  },
  "card": {
    "authentication": {
      "email": "string",
      "password": "string",
      "phone": {
        "number": "string",
        "type": "landline"
      }
    },
    "bin": "string",
    "brand": "string",
    "brandVariant": "string",
    "cardholderName": "string",
    "configuration": {
      "activation": "string",
      "activationUrl": "string",
      "bulkAddress": {
        "city": "string",
        "company": "string",
        "country": "string",
        "email": "string",
        "houseNumberOrName": "string",
        "line1": "string",
        "line2": "string",
        "line3": "string",
        "mobile": "string",
        "name": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "cardImageId": "string",
      "carrier": "string",
      "carrierImageId": "string",
      "configurationProfileId": "string",
      "currency": "string",
      "envelope": "string",
      "insert": "string",
      "language": "string",
      "logoImageId": "string",
      "pinMailer": "string",
      "printLine": "string",
      "shipmentMethod": "string"
    },
    "cvc": "string",
    "deliveryContact": {
      "address": {
        "city": "string",
        "country": "string",
        "line1": "string",
        "line2": "string",
        "line3": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "company": "string",
      "email": "string",
      "fullPhoneNumber": "string",
      "name": {
        "firstName": "string",
        "lastName": "string"
      },
      "phoneNumber": {
        "phoneCountryCode": "string",
        "phoneNumber": "string",
        "phoneType": "Fax"
      },
      "webAddress": "string"
    },
    "expiration": {
      "month": "string",
      "year": "string"
    },
    "formFactor": "physical",
    "lastFour": "string",
    "number": "string",
    "threeDSecure": "string",
    "usage": "string"
  },
  "description": "string",
  "id": "string",
  "issuingCountryCode": "string",
  "paymentInstrumentGroupId": "string",
  "reference": "string",
  "replacedById": "string",
  "replacementOfId": "string",
  "status": "active",
  "statusComment": "string",
  "statusReason": "accountClosure",
  "type": "bankAccount"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalBankAccountIdentifications|[[IbanAccountIdentification](#schemaibanaccountidentification)]|false|none|**Deprecated.** Contains optional, additional business account details. Returned when you create a payment instrument with `type` **bankAccount**.|
|balanceAccountId|string|true|none|The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument.|
|bankAccount|[BankAccountDetails](#schemabankaccountdetails)|false|none|Contains the business account details. Returned when you create a payment instrument with `type` **bankAccount**.|
|card|[Card](#schemacard)|false|none|Contains information about the card payment instrument. Returned when you create a payment instrument with `type` **card**.|
|description|string|false|none|Your description for the payment instrument, maximum 300 characters.|
|id|string|true|none|The unique identifier of the payment instrument.|
|issuingCountryCode|string|true|none|The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.|
|paymentInstrumentGroupId|string|false|none|The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs.|
|reference|string|false|none|Your reference for the payment instrument, maximum 150 characters.|
|replacedById|string|false|none|The unique identifier of the payment instrument that replaced this payment instrument.|
|replacementOfId|string|false|none|The unique identifier of the payment instrument that is replaced by this payment instrument.|
|status|string|false|none|The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.<br><br>Possible values: <br><br> * **active**:  The payment instrument is active and can be used to make payments. <br><br> * **inactive**: The payment instrument is inactive and cannot be used to make payments. <br><br> * **suspended**: The payment instrument is suspended, either because it was stolen or lost. <br><br> * **closed**: The payment instrument is permanently closed. This action cannot be undone. <br><br>|
|statusComment|string|false|none|The status comment provides additional information for the statusReason of the payment instrument.|
|statusReason|string|false|none|The reason for the status of the payment instrument.<br><br>Possible values: **accountClosure**, **damaged**, **endOfLife**, **expired**, **lost**, **stolen**, **suspectedFraud**, **transactionRule**, **other**.<br>If the reason is **other**, you must also send the `statusComment` parameter describing the status change.|
|type|string|true|none|The type of payment instrument.<br><br>Possible values: **card**, **bankAccount**.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|closed|
|status|inactive|
|status|suspended|
|statusReason|accountClosure|
|statusReason|damaged|
|statusReason|endOfLife|
|statusReason|expired|
|statusReason|lost|
|statusReason|other|
|statusReason|stolen|
|statusReason|suspectedFraud|
|statusReason|transactionRule|
|type|bankAccount|
|type|card|

<h2 id="tocS_PaymentInstrumentNotificationData">PaymentInstrumentNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemapaymentinstrumentnotificationdata"></a>
<a id="schema_PaymentInstrumentNotificationData"></a>
<a id="tocSpaymentinstrumentnotificationdata"></a>
<a id="tocspaymentinstrumentnotificationdata"></a>

```json
{
  "balancePlatform": "string",
  "paymentInstrument": {
    "additionalBankAccountIdentifications": [
      {
        "bic": "string",
        "iban": "string",
        "type": "iban"
      }
    ],
    "balanceAccountId": "string",
    "bankAccount": {
      "accountNumber": "string",
      "accountType": "checking",
      "branchNumber": "string",
      "formFactor": "physical",
      "iban": "string",
      "routingNumber": "string",
      "sortCode": "string",
      "type": "iban"
    },
    "card": {
      "authentication": {
        "email": "string",
        "password": "string",
        "phone": {
          "number": "string",
          "type": "landline"
        }
      },
      "bin": "string",
      "brand": "string",
      "brandVariant": "string",
      "cardholderName": "string",
      "configuration": {
        "activation": "string",
        "activationUrl": "string",
        "bulkAddress": {
          "city": "string",
          "company": "string",
          "country": "string",
          "email": "string",
          "houseNumberOrName": "string",
          "line1": "string",
          "line2": "string",
          "line3": "string",
          "mobile": "string",
          "name": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "cardImageId": "string",
        "carrier": "string",
        "carrierImageId": "string",
        "configurationProfileId": "string",
        "currency": "string",
        "envelope": "string",
        "insert": "string",
        "language": "string",
        "logoImageId": "string",
        "pinMailer": "string",
        "printLine": "string",
        "shipmentMethod": "string"
      },
      "cvc": "string",
      "deliveryContact": {
        "address": {
          "city": "string",
          "country": "string",
          "line1": "string",
          "line2": "string",
          "line3": "string",
          "postalCode": "string",
          "stateOrProvince": "string"
        },
        "company": "string",
        "email": "string",
        "fullPhoneNumber": "string",
        "name": {
          "firstName": "string",
          "lastName": "string"
        },
        "phoneNumber": {
          "phoneCountryCode": "string",
          "phoneNumber": "string",
          "phoneType": "Fax"
        },
        "webAddress": "string"
      },
      "expiration": {
        "month": "string",
        "year": "string"
      },
      "formFactor": "physical",
      "lastFour": "string",
      "number": "string",
      "threeDSecure": "string",
      "usage": "string"
    },
    "description": "string",
    "id": "string",
    "issuingCountryCode": "string",
    "paymentInstrumentGroupId": "string",
    "reference": "string",
    "replacedById": "string",
    "replacementOfId": "string",
    "status": "active",
    "statusComment": "string",
    "statusReason": "accountClosure",
    "type": "bankAccount"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|paymentInstrument|[PaymentInstrument](#schemapaymentinstrument)|false|none|Contains information about the payment instrument resource that triggered the event.|

<h2 id="tocS_PaymentNotificationRequest">PaymentNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentnotificationrequest"></a>
<a id="schema_PaymentNotificationRequest"></a>
<a id="tocSpaymentnotificationrequest"></a>
<a id="tocspaymentnotificationrequest"></a>

```json
{
  "data": {
    "balancePlatform": "string",
    "paymentInstrument": {
      "additionalBankAccountIdentifications": [
        {
          "bic": "string",
          "iban": "string",
          "type": "iban"
        }
      ],
      "balanceAccountId": "string",
      "bankAccount": {
        "accountNumber": "string",
        "accountType": "checking",
        "branchNumber": "string",
        "formFactor": "physical",
        "iban": "string",
        "routingNumber": "string",
        "sortCode": "string",
        "type": "iban"
      },
      "card": {
        "authentication": {
          "email": "string",
          "password": "string",
          "phone": {
            "number": "string",
            "type": "landline"
          }
        },
        "bin": "string",
        "brand": "string",
        "brandVariant": "string",
        "cardholderName": "string",
        "configuration": {
          "activation": "string",
          "activationUrl": "string",
          "bulkAddress": {
            "city": "string",
            "company": "string",
            "country": "string",
            "email": "string",
            "houseNumberOrName": "string",
            "line1": "string",
            "line2": "string",
            "line3": "string",
            "mobile": "string",
            "name": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "cardImageId": "string",
          "carrier": "string",
          "carrierImageId": "string",
          "configurationProfileId": "string",
          "currency": "string",
          "envelope": "string",
          "insert": "string",
          "language": "string",
          "logoImageId": "string",
          "pinMailer": "string",
          "printLine": "string",
          "shipmentMethod": "string"
        },
        "cvc": "string",
        "deliveryContact": {
          "address": {
            "city": "string",
            "country": "string",
            "line1": "string",
            "line2": "string",
            "line3": "string",
            "postalCode": "string",
            "stateOrProvince": "string"
          },
          "company": "string",
          "email": "string",
          "fullPhoneNumber": "string",
          "name": {
            "firstName": "string",
            "lastName": "string"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "webAddress": "string"
        },
        "expiration": {
          "month": "string",
          "year": "string"
        },
        "formFactor": "physical",
        "lastFour": "string",
        "number": "string",
        "threeDSecure": "string",
        "usage": "string"
      },
      "description": "string",
      "id": "string",
      "issuingCountryCode": "string",
      "paymentInstrumentGroupId": "string",
      "reference": "string",
      "replacedById": "string",
      "replacementOfId": "string",
      "status": "active",
      "statusComment": "string",
      "statusReason": "accountClosure",
      "type": "bankAccount"
    }
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.paymentInstrument.created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[PaymentInstrumentNotificationData](#schemapaymentinstrumentnotificationdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.paymentInstrument.created|
|type|balancePlatform.paymentInstrument.updated|

<h2 id="tocS_PayoutScheduleBANotificationRequest">PayoutScheduleBANotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapayoutschedulebanotificationrequest"></a>
<a id="schema_PayoutScheduleBANotificationRequest"></a>
<a id="tocSpayoutschedulebanotificationrequest"></a>
<a id="tocspayoutschedulebanotificationrequest"></a>

```json
{
  "data": {
    "balanceAccountId": "string",
    "balanceAccountPayoutScheduleId": "string",
    "balancePlatform": "string",
    "currency": "string",
    "description": "string",
    "enabled": true,
    "frequency": "string",
    "frequencyValue": 0,
    "maxPayoutAmount": 0,
    "minPayoutAmount": 0,
    "reference": "string",
    "referenceForBeneficiary": "string",
    "retainedAmount": 0,
    "salesDayClosingTime": "00:00:00Z",
    "transferInstrumentId": "string"
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.balanceAccountPayoutSchedule.created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[AccountPayoutConfigWebhookData](#schemaaccountpayoutconfigwebhookdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.balanceAccountPayoutSchedule.created|
|type|balancePlatform.balanceAccountPayoutSchedule.updated|
|type|balancePlatform.balanceAccountPayoutSchedule.deleted|

<h2 id="tocS_PayoutScheduleBPNotificationRequest">PayoutScheduleBPNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapayoutschedulebpnotificationrequest"></a>
<a id="schema_PayoutScheduleBPNotificationRequest"></a>
<a id="tocSpayoutschedulebpnotificationrequest"></a>
<a id="tocspayoutschedulebpnotificationrequest"></a>

```json
{
  "data": {
    "balancePlatform": "string",
    "balancePlatformPayoutScheduleId": "string",
    "countryCode": "string",
    "currency": "string",
    "defaultDescription": "string",
    "defaultFrequency": "string",
    "defaultFrequencyValue": 0,
    "defaultReference": "string",
    "defaultReferenceForBeneficiary": "string",
    "maxPayoutAmount": 0,
    "minPayoutAmount": 0,
    "retainedAmount": 0
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.balancePlatformPayoutSchedule.created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[PlatformPayoutConfigWebhookData](#schemaplatformpayoutconfigwebhookdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.balancePlatformPayoutSchedule.created|
|type|balancePlatform.balancePlatformPayoutSchedule.updated|
|type|balancePlatform.balancePlatformPayoutSchedule.deleted|

<h2 id="tocS_PayoutScheduleStateNotificationRequest">PayoutScheduleStateNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapayoutschedulestatenotificationrequest"></a>
<a id="schema_PayoutScheduleStateNotificationRequest"></a>
<a id="tocSpayoutschedulestatenotificationrequest"></a>
<a id="tocspayoutschedulestatenotificationrequest"></a>

```json
{
  "data": {
    "balanceAccountId": "string",
    "balanceAccountPayoutScheduleId": "string",
    "balancePlatform": "string",
    "result": "failed",
    "resultDetails": {
      "reason": "string",
      "reasonCode": "string",
      "transferId": "string"
    },
    "triggeredAt": "1970-01-01T00:00:00Z"
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.balanceAccountPayoutScheduleExecution.succeeded"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[PayoutStateWebhookData](#schemapayoutstatewebhookdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.balanceAccountPayoutScheduleExecution.succeeded|
|type|balancePlatform.balanceAccountPayoutScheduleExecution.failed|
|type|balancePlatform.balanceAccountPayoutScheduleExecution.skipped|

<h2 id="tocS_PayoutStateWebhookData">PayoutStateWebhookData</h2>
<!-- backwards compatibility -->
<a id="schemapayoutstatewebhookdata"></a>
<a id="schema_PayoutStateWebhookData"></a>
<a id="tocSpayoutstatewebhookdata"></a>
<a id="tocspayoutstatewebhookdata"></a>

```json
{
  "balanceAccountId": "string",
  "balanceAccountPayoutScheduleId": "string",
  "balancePlatform": "string",
  "result": "failed",
  "resultDetails": {
    "reason": "string",
    "reasonCode": "string",
    "transferId": "string"
  },
  "triggeredAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccountId|string|false|none|The unique identifier of the balance account from which the payout is initiated.|
|balanceAccountPayoutScheduleId|string|false|none|The unique identifier of the managed payout schedule.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|result|string|false|none|The result of the execution.|
|resultDetails|[resultDetails](#schemaresultdetails)|false|none|Contains details of the execution result.|
|triggeredAt|string(date-time)|false|none|The timestamp of the moment when the execution was triggered.|

#### Enumerated Values

|Property|Value|
|---|---|
|result|failed|
|result|skipped|
|result|succeeded|

<h2 id="tocS_Phone">Phone</h2>
<!-- backwards compatibility -->
<a id="schemaphone"></a>
<a id="schema_Phone"></a>
<a id="tocSphone"></a>
<a id="tocsphone"></a>

```json
{
  "number": "string",
  "type": "landline"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|string|true|none|The full phone number provided as a single string. <br>For example, **"0031 6 11 22 33 44"**, **"+316/1122-3344"**, <br><br> or **"(0031) 611223344"**.|
|type|string|true|none|Type of phone number.<br>Possible values: <br>**Landline**, **Mobile**.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|landline|
|type|mobile|

<h2 id="tocS_PhoneNumber">PhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber"></a>
<a id="schema_PhoneNumber"></a>
<a id="tocSphonenumber"></a>
<a id="tocsphonenumber"></a>

```json
{
  "phoneCountryCode": "string",
  "phoneNumber": "string",
  "phoneType": "Fax"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phoneCountryCode|string|false|none|The two-character ISO-3166-1 alpha-2 country code of the phone number.<br>For example, **US** or **NL**.|
|phoneNumber|string|false|none|The phone number.<br>The inclusion of the phone number country code is not necessary.|
|phoneType|string|false|none|The type of the phone number.<br>Possible values: **Landline**, **Mobile**, **SIP**, **Fax**.|

#### Enumerated Values

|Property|Value|
|---|---|
|phoneType|Fax|
|phoneType|Landline|
|phoneType|Mobile|
|phoneType|SIP|

<h2 id="tocS_PlatformPaymentConfiguration">PlatformPaymentConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaplatformpaymentconfiguration"></a>
<a id="schema_PlatformPaymentConfiguration"></a>
<a id="tocSplatformpaymentconfiguration"></a>
<a id="tocsplatformpaymentconfiguration"></a>

```json
{
  "salesDayClosingTime": "00:00:00Z",
  "settlementDelayDays": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|salesDayClosingTime|string(time)|false|none|Specifies at what time a sales day ends for this account.<br><br>Possible values: Time in **"HH:MM"** format. **HH** ranges from **00** to **07**. **MM** must be **00**.<br><br>Default value: **"00:00"**.|
|settlementDelayDays|integer(int32)|false|none|Specifies after how many business days the funds in a settlement batch are made available in this balance account. Requires Custom Sales Day Payout to be enabled for your balance account. Contact your account manager or implementation manager to enable this.<br><br>Possible values: **1** to **20**, or **null**.<br><br>Default value: **null**.|

<h2 id="tocS_PlatformPayoutConfigWebhookData">PlatformPayoutConfigWebhookData</h2>
<!-- backwards compatibility -->
<a id="schemaplatformpayoutconfigwebhookdata"></a>
<a id="schema_PlatformPayoutConfigWebhookData"></a>
<a id="tocSplatformpayoutconfigwebhookdata"></a>
<a id="tocsplatformpayoutconfigwebhookdata"></a>

```json
{
  "balancePlatform": "string",
  "balancePlatformPayoutScheduleId": "string",
  "countryCode": "string",
  "currency": "string",
  "defaultDescription": "string",
  "defaultFrequency": "string",
  "defaultFrequencyValue": 0,
  "defaultReference": "string",
  "defaultReferenceForBeneficiary": "string",
  "maxPayoutAmount": 0,
  "minPayoutAmount": 0,
  "retainedAmount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|balancePlatformPayoutScheduleId|string|false|none|The unique identifier of the balance platform payout schedule that is applied to the balance account.|
|countryCode|string|false|none|The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country to which the payout schedule applies.|
|currency|string|false|none|The three-character [ISO code](https://docs.adyen.com/development-resources/currency-codes) of the currency used for the payout schedule.|
|defaultDescription|string|false|none|The default description for payouts initiated by this payout schedule.|
|defaultFrequency|string|false|none|The default frequency of payouts initiated by this payout schedule.|
|defaultFrequencyValue|integer(int32)|false|none|The default value for date of the month or day of the week when payouts are initiated. Allowed only if `defaultFrequency` is **monthly** or **weekly**.<br><br>Possible values if `frequency` is **monthly**: **[1 - 31]**.<br>* If your specified date happens on a weekend, the payout is initiated on the next business day.<br>* If your specified date (**29**, **30**, or **31**) does not exist in a month, the payout is initiated  on the last day of that month.<br><br>Possible values if `defaultFrequency` is **weekly**: **[1 - 5]**.|
|defaultReference|string|false|none|Your internal default reference for the payout schedule.<br><br>When the payout schedule is applied to a balance account, this reference is also used for that payout schedule, unless you specify a new reference.|
|defaultReferenceForBeneficiary|string|false|none|The default reference for beneficiary for payouts initiated by this payout schedule.|
|maxPayoutAmount|integer(int64)|false|none|The maximum amount that can be paid out from balance accounts that use this payout schedule.|
|minPayoutAmount|integer(int64)|false|none|The minimum amount that can be paid out from balance accounts that use this payout schedule.|
|retainedAmount|integer(int64)|false|none|The amount of funds that must remain available in a balance account after an execution of the payout schedule. If the funds in the balance account are less than the retained amount, the execution is not initiated.|

<h2 id="tocS_RemediatingAction">RemediatingAction</h2>
<!-- backwards compatibility -->
<a id="schemaremediatingaction"></a>
<a id="schema_RemediatingAction"></a>
<a id="tocSremediatingaction"></a>
<a id="tocsremediatingaction"></a>

```json
{
  "code": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The remediating action code.|
|message|string|false|none|A description of how you can resolve the verification error.|

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

<h2 id="tocS_ScoreNotificationRequest">ScoreNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemascorenotificationrequest"></a>
<a id="schema_ScoreNotificationRequest"></a>
<a id="tocSscorenotificationrequest"></a>
<a id="tocsscorenotificationrequest"></a>

```json
{
  "data": {
    "accountHolder": {
      "description": "string",
      "id": "string",
      "reference": "string"
    },
    "accountHolderStatus": "string",
    "automatedActions": [
      "string"
    ],
    "balancePlatform": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "id": "string",
    "riskScore": 0,
    "scoreSignalsTriggered": [
      "string"
    ],
    "signalSourceTypes": [
      "string"
    ]
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.score.triggered"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[BankScoreSignalTriggeredData](#schemabankscoresignaltriggereddata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.score.triggered|

<h2 id="tocS_SweepConfigurationNotificationData">SweepConfigurationNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemasweepconfigurationnotificationdata"></a>
<a id="schema_SweepConfigurationNotificationData"></a>
<a id="tocSsweepconfigurationnotificationdata"></a>
<a id="tocssweepconfigurationnotificationdata"></a>

```json
{
  "accountId": "string",
  "balancePlatform": "string",
  "sweep": {
    "category": "bank",
    "counterparty": {
      "balanceAccountId": "string",
      "merchantAccount": "string",
      "transferInstrumentId": "string"
    },
    "currency": "string",
    "description": "string",
    "id": "string",
    "priorities": [
      "crossBorder"
    ],
    "reason": "accountHierarchyNotActive",
    "reasonDetail": "string",
    "reference": "string",
    "referenceForBeneficiary": "string",
    "schedule": {
      "cronExpression": "string",
      "type": "daily"
    },
    "status": "active",
    "sweepAmount": {
      "currency": "str",
      "value": 0
    },
    "targetAmount": {
      "currency": "str",
      "value": 0
    },
    "triggerAmount": {
      "currency": "str",
      "value": 0
    },
    "type": "push"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|The unique identifier of the balance account for which the sweep was configured.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|sweep|[SweepConfigurationV2](#schemasweepconfigurationv2)|false|none|Contains information about the sweep resource that triggered the event.|

<h2 id="tocS_SweepConfigurationNotificationRequest">SweepConfigurationNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemasweepconfigurationnotificationrequest"></a>
<a id="schema_SweepConfigurationNotificationRequest"></a>
<a id="tocSsweepconfigurationnotificationrequest"></a>
<a id="tocssweepconfigurationnotificationrequest"></a>

```json
{
  "data": {
    "accountId": "string",
    "balancePlatform": "string",
    "sweep": {
      "category": "bank",
      "counterparty": {
        "balanceAccountId": "string",
        "merchantAccount": "string",
        "transferInstrumentId": "string"
      },
      "currency": "string",
      "description": "string",
      "id": "string",
      "priorities": [
        "crossBorder"
      ],
      "reason": "accountHierarchyNotActive",
      "reasonDetail": "string",
      "reference": "string",
      "referenceForBeneficiary": "string",
      "schedule": {
        "cronExpression": "string",
        "type": "daily"
      },
      "status": "active",
      "sweepAmount": {
        "currency": "str",
        "value": 0
      },
      "targetAmount": {
        "currency": "str",
        "value": 0
      },
      "triggerAmount": {
        "currency": "str",
        "value": 0
      },
      "type": "push"
    }
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.balanceAccountSweep.created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[SweepConfigurationNotificationData](#schemasweepconfigurationnotificationdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.balanceAccountSweep.created|
|type|balancePlatform.balanceAccountSweep.updated|
|type|balancePlatform.balanceAccountSweep.deleted|

<h2 id="tocS_SweepConfigurationV2">SweepConfigurationV2</h2>
<!-- backwards compatibility -->
<a id="schemasweepconfigurationv2"></a>
<a id="schema_SweepConfigurationV2"></a>
<a id="tocSsweepconfigurationv2"></a>
<a id="tocssweepconfigurationv2"></a>

```json
{
  "category": "bank",
  "counterparty": {
    "balanceAccountId": "string",
    "merchantAccount": "string",
    "transferInstrumentId": "string"
  },
  "currency": "string",
  "description": "string",
  "id": "string",
  "priorities": [
    "crossBorder"
  ],
  "reason": "accountHierarchyNotActive",
  "reasonDetail": "string",
  "reference": "string",
  "referenceForBeneficiary": "string",
  "schedule": {
    "cronExpression": "string",
    "type": "daily"
  },
  "status": "active",
  "sweepAmount": {
    "currency": "str",
    "value": 0
  },
  "targetAmount": {
    "currency": "str",
    "value": 0
  },
  "triggerAmount": {
    "currency": "str",
    "value": 0
  },
  "type": "push"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|The type of transfer that results from the sweep.<br><br>Possible values:<br><br> - **bank**: Sweep to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).<br><br>- **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.<br><br>Required when setting `priorities`.|
|counterparty|[SweepCounterparty](#schemasweepcounterparty)|true|none|The destination or the source of the funds, depending on the sweep `type`.<br><br>Either a `balanceAccountId`, `transferInstrumentId`, or `merchantAccount` is required.|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) in uppercase. For example, **EUR**.<br><br>The sweep currency must match any of the [balances currencies](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__resParam_balances).|
|description|string|false|none|The message that will be used in the sweep transfer's description body with a maximum length of 140 characters.<br><br>If the message is longer after replacing placeholders, the message will be cut off at 140 characters.|
|id|string|true|none|The unique identifier of the sweep.|
|priorities|[string]|false|none|The list of priorities for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. You can provide multiple priorities, ordered by your preference. Adyen will try to pay out using the priorities in the given order. If the first priority is not currently supported or enabled for your platform, the system will try the next one, and so on.<br><br>The request will be accepted as long as **at least one** of the provided priorities is valid (i.e., supported by Adyen and activated for your platform). For example, if you provide `["wire","regular"]`, and `wire` is not supported but `regular` is, the request will still be accepted and processed.<br><br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).<br><br>Set `category` to **bank**. For more details, see optional priorities setup for [marketplaces](https://docs.adyen.com/marketplaces/payout-to-users/scheduled-payouts#optional-priorities-setup) or [platforms](https://docs.adyen.com/platforms/payout-to-users/scheduled-payouts#optional-priorities-setup).|
|reason|string|false|none|The reason for disabling the sweep.|
|reasonDetail|string|false|none|The human readable reason for disabling the sweep.|
|reference|string|false|none|Your reference for the sweep configuration.|
|referenceForBeneficiary|string|false|none|The reference sent to or received from the counterparty. Only alphanumeric characters are allowed.|
|schedule|[SweepSchedule](#schemasweepschedule)|true|none|The schedule when the `triggerAmount` is evaluated. If the balance meets the threshold, funds are pushed out of or pulled in to the balance account.|
|status|string|false|none|The status of the sweep. If not provided, by default, this is set to **active**.<br><br>Possible values: <br><br> * **active**:  the sweep is enabled and funds will be pulled in or pushed out based on the defined configuration. <br><br> * **inactive**: the sweep is disabled and cannot be triggered. <br><br>|
|sweepAmount|[Amount](#schemaamount)|false|none|The amount that must be pushed out or pulled in. You can configure either `sweepAmount` or `targetAmount`, not both.|
|targetAmount|[Amount](#schemaamount)|false|none|The amount that must be available in the balance account after the sweep. You can configure either `sweepAmount` or `targetAmount`, not both.|
|triggerAmount|[Amount](#schemaamount)|false|none|The threshold amount that triggers the sweep. If not provided, by default, the amount is set to zero. The `triggerAmount` is evaluated according to the specified `schedule.type`.<br><br>* For `type` **pull**, if the balance is less than or equal to the `triggerAmount`, funds are pulled in to the balance account.<br><br>* For `type` **push**, if the balance is more than or equal to the `triggerAmount`, funds are pushed out of the balance account.|
|type|string|false|none|The direction of sweep, whether pushing out or pulling in funds to the balance account. If not provided, by default, this is set to **push**.<br><br>Possible values:<br><br> * **push**: _push out funds_ to a destination balance account or transfer instrument.<br><br> * **pull**: _pull in funds_ from a source merchant account, transfer instrument, or balance account.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|bank|
|category|internal|
|category|platformPayment|
|priorities|crossBorder|
|priorities|fast|
|priorities|instant|
|priorities|internal|
|priorities|regular|
|priorities|wire|
|reason|accountHierarchyNotActive|
|reason|amountLimitExceeded|
|reason|approved|
|reason|counterpartyAccountBlocked|
|reason|counterpartyAccountClosed|
|reason|counterpartyAccountNotFound|
|reason|counterpartyAddressRequired|
|reason|counterpartyBankTimedOut|
|reason|counterpartyBankUnavailable|
|reason|directDebitNotSupported|
|reason|error|
|reason|notEnoughBalance|
|reason|refusedByCounterpartyBank|
|reason|routeNotFound|
|reason|transferInstrumentDoesNotExist|
|reason|unknown|
|status|active|
|status|inactive|
|type|pull|
|type|push|

<h2 id="tocS_SweepCounterparty">SweepCounterparty</h2>
<!-- backwards compatibility -->
<a id="schemasweepcounterparty"></a>
<a id="schema_SweepCounterparty"></a>
<a id="tocSsweepcounterparty"></a>
<a id="tocssweepcounterparty"></a>

```json
{
  "balanceAccountId": "string",
  "merchantAccount": "string",
  "transferInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccountId|string|false|none|The unique identifier of the destination or source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).<br><br> > If you are updating the counterparty from a transfer instrument to a balance account, set `transferInstrumentId` to **null**.|
|merchantAccount|string|false|none|The merchant account that will be the source of funds.<br><br>You can only use this parameter with sweeps of `type` **pull** and if you are processing payments with Adyen.|
|transferInstrumentId|string|false|none|The unique identifier of the destination or source [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) depending on the sweep `type`<br><br>. To set up automated top-up sweeps to balance accounts in your [marketplace](https://docs.adyen.com/marketplaces/top-up-balance-account/#before-you-begin) or [platform](https://docs.adyen.com/platforms/top-up-balance-account/#before-you-begin), use this parameter in combination with a `merchantAccount` and a sweep `type` of **pull**.<br><br>Top-up sweeps start a direct debit request from the source transfer instrument. Contact Adyen Support to enable this feature.> If you are updating the counterparty from a balance account to a transfer instrument, set `balanceAccountId` to **null**.|

<h2 id="tocS_SweepExecutionNotificationData">SweepExecutionNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemasweepexecutionnotificationdata"></a>
<a id="schema_SweepExecutionNotificationData"></a>
<a id="tocSsweepexecutionnotificationdata"></a>
<a id="tocssweepexecutionnotificationdata"></a>

```json
{
  "balanceAccountId": "string",
  "balanceAccountSweepId": "string",
  "balancePlatform": "string",
  "id": "string",
  "result": "failed",
  "resultDetails": {
    "reason": "string",
    "reasonCode": "string",
    "sweepConfigurationDisabled": true,
    "transferId": "string"
  },
  "triggeredAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccountId|string|false|none|The unique identifier of the balance account from which the sweep is initiated.|
|balanceAccountSweepId|string|false|none|The unique identifier of the sweep configuration.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|id|string|false|none|The ID of the resource.|
|result|string|false|none|The outcome of the sweep execution.<br><br>Possible results:<br>- **succeeded**: The sweep payout was completed successfully.<br>- **failed**: The sweep payout was not completed due to an error.<br>- **skipped**: The sweep payout was not triggered as expected.|
|resultDetails|[sweepResultDetails](#schemasweepresultdetails)|false|none|The details of the execution result.|
|triggeredAt|string(date-time)|false|none|The timestamp of when the execution was triggered.|

#### Enumerated Values

|Property|Value|
|---|---|
|result|failed|
|result|skipped|
|result|succeeded|

<h2 id="tocS_SweepExecutionNotificationRequest">SweepExecutionNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemasweepexecutionnotificationrequest"></a>
<a id="schema_SweepExecutionNotificationRequest"></a>
<a id="tocSsweepexecutionnotificationrequest"></a>
<a id="tocssweepexecutionnotificationrequest"></a>

```json
{
  "data": {
    "balanceAccountId": "string",
    "balanceAccountSweepId": "string",
    "balancePlatform": "string",
    "id": "string",
    "result": "failed",
    "resultDetails": {
      "reason": "string",
      "reasonCode": "string",
      "sweepConfigurationDisabled": true,
      "transferId": "string"
    },
    "triggeredAt": "1970-01-01T00:00:00Z"
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.balanceAccountSweepExecution.succeeded"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[SweepExecutionNotificationData](#schemasweepexecutionnotificationdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.balanceAccountSweepExecution.succeeded|
|type|balancePlatform.balanceAccountSweepExecution.skipped|
|type|balancePlatform.balanceAccountSweepExecution.failed|

<h2 id="tocS_SweepSchedule">SweepSchedule</h2>
<!-- backwards compatibility -->
<a id="schemasweepschedule"></a>
<a id="schema_SweepSchedule"></a>
<a id="tocSsweepschedule"></a>
<a id="tocssweepschedule"></a>

```json
{
  "cronExpression": "string",
  "type": "daily"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cronExpression|string|false|none|A [cron expression](https://en.wikipedia.org/wiki/Cron#CRON_expression) that is used to set the sweep schedule. The schedule uses the time zone of the balance account. <br>For example, **30 17 * * MON** schedules a sweep every Monday at 17:30.<br><br>The expression must have five values separated by a single space in the following order:<br><br>* Minute: **0-59**<br><br>* Hour: **0-23**<br><br>* Day of the month: **1-31**<br><br>* Month: **1-12** or **JAN-DEC**<br><br>* Day of the week: **0-7** (0 and 7 are Sunday) or **MON-SUN**.<br><br>The following non-standard characters are supported: **&ast;**, **L**, **#**, **W** and **/**. See [crontab guru](https://crontab.guru/) for more examples.<br><br>Required when `type` is **cron**.<br>|
|type|string|true|none|The schedule type.<br><br>Possible values:<br><br>* **cron**: push out funds based on a `cronExpression`.<br><br>* **daily**: push out funds daily at 07:00 AM CET.<br><br>* **weekly**: push out funds every Monday at 07:00 AM CET.<br><br>* **monthly**: push out funds every first of the month at 07:00 AM CET.<br><br>* **balance**: execute the sweep instantly if the `triggerAmount` is reached.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|daily|
|type|weekly|
|type|monthly|
|type|balance|
|type|cron|

<h2 id="tocS_TokenAuthentication">TokenAuthentication</h2>
<!-- backwards compatibility -->
<a id="schematokenauthentication"></a>
<a id="schema_TokenAuthentication"></a>
<a id="tocStokenauthentication"></a>
<a id="tocstokenauthentication"></a>

```json
{
  "method": "string",
  "result": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|false|none|The method used to complete the authentication process.<br><br>Possible values: **sms_OTP**, **email_OTP**.|
|result|string|false|none|The result of the authentication process.|

<h2 id="tocS_TopUpConfigurationEventRequest">TopUpConfigurationEventRequest</h2>
<!-- backwards compatibility -->
<a id="schematopupconfigurationeventrequest"></a>
<a id="schema_TopUpConfigurationEventRequest"></a>
<a id="tocStopupconfigurationeventrequest"></a>
<a id="tocstopupconfigurationeventrequest"></a>

```json
{
  "data": {
    "accountId": "string",
    "balancePlatform": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "id": "string",
    "webhookTopUpConfiguration": {
      "counterparty": {
        "transferInstrumentId": "string"
      },
      "description": "string",
      "id": "string",
      "mandate": {
        "creationDate": "1970-01-01T00:00:00Z",
        "reference": "string"
      },
      "referenceForBeneficiary": "string",
      "status": "active",
      "topUpAmount": {
        "fixedAmount": {
          "currency": "string",
          "value": 0
        },
        "targetAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "trigger": {
        "schedule": "monthly",
        "threshold": {
          "currency": "string",
          "value": 0
        }
      }
    }
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.balanceAccount.recurringTopUp.created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[TopUpWebhookData](#schematopupwebhookdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.balanceAccount.recurringTopUp.created|
|type|balancePlatform.balanceAccount.recurringTopUp.deleted|

<h2 id="tocS_TopUpConfigurationUpdatedEventRequest">TopUpConfigurationUpdatedEventRequest</h2>
<!-- backwards compatibility -->
<a id="schematopupconfigurationupdatedeventrequest"></a>
<a id="schema_TopUpConfigurationUpdatedEventRequest"></a>
<a id="tocStopupconfigurationupdatedeventrequest"></a>
<a id="tocstopupconfigurationupdatedeventrequest"></a>

```json
{
  "data": {
    "accountId": "string",
    "balancePlatform": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "id": "string",
    "webhookTopUpConfiguration": {
      "counterparty": {
        "transferInstrumentId": "string"
      },
      "description": "string",
      "disabledReason": "string",
      "id": "string",
      "mandate": {
        "creationDate": "1970-01-01T00:00:00Z",
        "reference": "string"
      },
      "reasonDetail": "string",
      "referenceForBeneficiary": "string",
      "status": "active",
      "topUpAmount": {
        "fixedAmount": {
          "currency": "string",
          "value": 0
        },
        "targetAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "trigger": {
        "schedule": "monthly",
        "threshold": {
          "currency": "string",
          "value": 0
        }
      }
    }
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.balanceAccount.recurringTopUp.updated"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[TopUpUpdatedWebhookData](#schematopupupdatedwebhookdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.balanceAccount.recurringTopUp.updated|

<h2 id="tocS_TopUpUpdatedWebhookData">TopUpUpdatedWebhookData</h2>
<!-- backwards compatibility -->
<a id="schematopupupdatedwebhookdata"></a>
<a id="schema_TopUpUpdatedWebhookData"></a>
<a id="tocStopupupdatedwebhookdata"></a>
<a id="tocstopupupdatedwebhookdata"></a>

```json
{
  "accountId": "string",
  "balancePlatform": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "id": "string",
  "webhookTopUpConfiguration": {
    "counterparty": {
      "transferInstrumentId": "string"
    },
    "description": "string",
    "disabledReason": "string",
    "id": "string",
    "mandate": {
      "creationDate": "1970-01-01T00:00:00Z",
      "reference": "string"
    },
    "reasonDetail": "string",
    "referenceForBeneficiary": "string",
    "status": "active",
    "topUpAmount": {
      "fixedAmount": {
        "currency": "string",
        "value": 0
      },
      "targetAmount": {
        "currency": "string",
        "value": 0
      }
    },
    "trigger": {
      "schedule": "monthly",
      "threshold": {
        "currency": "string",
        "value": 0
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|true|none|The unique identifier of the balance account for which the recurring top-up is configured.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|id|string|false|none|The ID of the resource.|
|webhookTopUpConfiguration|[WebhookTopUpConfigurationUpdated](#schemawebhooktopupconfigurationupdated)|true|none|The recurring top-up configuration details.|

<h2 id="tocS_TopUpWebhookData">TopUpWebhookData</h2>
<!-- backwards compatibility -->
<a id="schematopupwebhookdata"></a>
<a id="schema_TopUpWebhookData"></a>
<a id="tocStopupwebhookdata"></a>
<a id="tocstopupwebhookdata"></a>

```json
{
  "accountId": "string",
  "balancePlatform": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "id": "string",
  "webhookTopUpConfiguration": {
    "counterparty": {
      "transferInstrumentId": "string"
    },
    "description": "string",
    "id": "string",
    "mandate": {
      "creationDate": "1970-01-01T00:00:00Z",
      "reference": "string"
    },
    "referenceForBeneficiary": "string",
    "status": "active",
    "topUpAmount": {
      "fixedAmount": {
        "currency": "string",
        "value": 0
      },
      "targetAmount": {
        "currency": "string",
        "value": 0
      }
    },
    "trigger": {
      "schedule": "monthly",
      "threshold": {
        "currency": "string",
        "value": 0
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|true|none|The unique identifier of the balance account for which the recurring top-up is configured.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|id|string|false|none|The ID of the resource.|
|webhookTopUpConfiguration|[WebhookTopUpConfiguration](#schemawebhooktopupconfiguration)|true|none|The recurring top-up configuration details.|

<h2 id="tocS_UKLocalMandateAccountIdentification">UKLocalMandateAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemauklocalmandateaccountidentification"></a>
<a id="schema_UKLocalMandateAccountIdentification"></a>
<a id="tocSuklocalmandateaccountidentification"></a>
<a id="tocsuklocalmandateaccountidentification"></a>

```json
{
  "accountNumber": "stringst",
  "sortCode": "string",
  "type": "ukLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 8-digit bank account number, without separators or whitespace.|
|sortCode|string|true|none|The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.|
|type|string|true|none|**ukLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ukLocal|

<h2 id="tocS_ValidationFacts">ValidationFacts</h2>
<!-- backwards compatibility -->
<a id="schemavalidationfacts"></a>
<a id="schema_ValidationFacts"></a>
<a id="tocSvalidationfacts"></a>
<a id="tocsvalidationfacts"></a>

```json
{
  "reasons": [
    "string"
  ],
  "result": "invalid",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reasons|[string]|false|none|The reason for the `result` of the validations.<br><br>This field is only sent for `validationFacts.type` **walletValidation**, when `validationFacts.result` is **invalid**.|
|result|string|false|none|The evaluation result of the validation facts.<br><br>Possible values: **valid**, **invalid**, **notValidated**, **notApplicable**.|
|type|string|false|none|The type of the validation fact.|

#### Enumerated Values

|Property|Value|
|---|---|
|result|invalid|
|result|notApplicable|
|result|notValidated|
|result|valid|

<h2 id="tocS_VerificationDeadline">VerificationDeadline</h2>
<!-- backwards compatibility -->
<a id="schemaverificationdeadline"></a>
<a id="schema_VerificationDeadline"></a>
<a id="tocSverificationdeadline"></a>
<a id="tocsverificationdeadline"></a>

```json
{
  "capabilities": [
    "acceptExternalFunding"
  ],
  "entityIds": [
    "string"
  ],
  "expiresAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|[string]|true|none|The names of the capabilities to be disallowed.|
|entityIds|[string]|false|none|The unique identifiers of the bank account(s) that the deadline applies to|
|expiresAt|string(date-time)|true|none|The date that verification is due by before capabilities are disallowed.|

#### Enumerated Values

|Property|Value|
|---|---|
|capabilities|acceptExternalFunding|
|capabilities|acceptPspFunding|
|capabilities|acceptTransactionInRestrictedCountries|
|capabilities|acceptTransactionInRestrictedCountriesCommercial|
|capabilities|acceptTransactionInRestrictedCountriesConsumer|
|capabilities|acceptTransactionInRestrictedIndustries|
|capabilities|acceptTransactionInRestrictedIndustriesCommercial|
|capabilities|acceptTransactionInRestrictedIndustriesConsumer|
|capabilities|acquiring|
|capabilities|atmWithdrawal|
|capabilities|atmWithdrawalCommercial|
|capabilities|atmWithdrawalConsumer|
|capabilities|atmWithdrawalInRestrictedCountries|
|capabilities|atmWithdrawalInRestrictedCountriesCommercial|
|capabilities|atmWithdrawalInRestrictedCountriesConsumer|
|capabilities|authorisedPaymentInstrumentUser|
|capabilities|getGrantOffers|
|capabilities|issueBankAccount|
|capabilities|issueCard|
|capabilities|issueCardCommercial|
|capabilities|issueCardConsumer|
|capabilities|issueChargeCard|
|capabilities|issueChargeCardCommercial|
|capabilities|issueCreditLimit|
|capabilities|localAcceptance|
|capabilities|payout|
|capabilities|payoutToTransferInstrument|
|capabilities|processing|
|capabilities|receiveFromBalanceAccount|
|capabilities|receiveFromPlatformPayments|
|capabilities|receiveFromThirdParty|
|capabilities|receiveFromTransferInstrument|
|capabilities|receiveGrants|
|capabilities|receivePayments|
|capabilities|sendToBalanceAccount|
|capabilities|sendToThirdParty|
|capabilities|sendToTransferInstrument|
|capabilities|thirdPartyFunding|
|capabilities|useCard|
|capabilities|useCardCommercial|
|capabilities|useCardConsumer|
|capabilities|useCardInRestrictedCountries|
|capabilities|useCardInRestrictedCountriesCommercial|
|capabilities|useCardInRestrictedCountriesConsumer|
|capabilities|useCardInRestrictedIndustries|
|capabilities|useCardInRestrictedIndustriesCommercial|
|capabilities|useCardInRestrictedIndustriesConsumer|
|capabilities|useChargeCard|
|capabilities|useChargeCardCommercial|
|capabilities|withdrawFromAtm|
|capabilities|withdrawFromAtmCommercial|
|capabilities|withdrawFromAtmConsumer|
|capabilities|withdrawFromAtmInRestrictedCountries|
|capabilities|withdrawFromAtmInRestrictedCountriesCommercial|
|capabilities|withdrawFromAtmInRestrictedCountriesConsumer|

<h2 id="tocS_VerificationError">VerificationError</h2>
<!-- backwards compatibility -->
<a id="schemaverificationerror"></a>
<a id="schema_VerificationError"></a>
<a id="tocSverificationerror"></a>
<a id="tocsverificationerror"></a>

```json
{
  "capabilities": [
    "acceptExternalFunding"
  ],
  "code": "string",
  "message": "string",
  "remediatingActions": [
    {
      "code": "string",
      "message": "string"
    }
  ],
  "subErrors": [
    {
      "capabilities": [
        "acceptExternalFunding"
      ],
      "code": "string",
      "message": "string",
      "type": "dataMissing",
      "remediatingActions": [
        {
          "code": "string",
          "message": "string"
        }
      ]
    }
  ],
  "type": "dataMissing"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|[string]|false|none|Contains the capabilities that the verification error applies to.|
|code|string|false|none|The verification error code.|
|message|string|false|none|A description of the error.|
|remediatingActions|[[RemediatingAction](#schemaremediatingaction)]|false|none|Contains the actions that you can take to resolve the verification error.|
|subErrors|[[VerificationError-recursive](#schemaverificationerror-recursive)]|false|none|Contains more granular information about the verification error.|
|type|string|false|none|The type of error.<br><br><br><br>Possible values:<br>*  **invalidInput**<br>*  **dataMissing**<br>*  **pendingStatus**<br>*  **dataReview**<br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|capabilities|acceptExternalFunding|
|capabilities|acceptPspFunding|
|capabilities|acceptTransactionInRestrictedCountries|
|capabilities|acceptTransactionInRestrictedCountriesCommercial|
|capabilities|acceptTransactionInRestrictedCountriesConsumer|
|capabilities|acceptTransactionInRestrictedIndustries|
|capabilities|acceptTransactionInRestrictedIndustriesCommercial|
|capabilities|acceptTransactionInRestrictedIndustriesConsumer|
|capabilities|acquiring|
|capabilities|atmWithdrawal|
|capabilities|atmWithdrawalCommercial|
|capabilities|atmWithdrawalConsumer|
|capabilities|atmWithdrawalInRestrictedCountries|
|capabilities|atmWithdrawalInRestrictedCountriesCommercial|
|capabilities|atmWithdrawalInRestrictedCountriesConsumer|
|capabilities|authorisedPaymentInstrumentUser|
|capabilities|getGrantOffers|
|capabilities|issueBankAccount|
|capabilities|issueCard|
|capabilities|issueCardCommercial|
|capabilities|issueCardConsumer|
|capabilities|issueChargeCard|
|capabilities|issueChargeCardCommercial|
|capabilities|issueCreditLimit|
|capabilities|localAcceptance|
|capabilities|payout|
|capabilities|payoutToTransferInstrument|
|capabilities|processing|
|capabilities|receiveFromBalanceAccount|
|capabilities|receiveFromPlatformPayments|
|capabilities|receiveFromThirdParty|
|capabilities|receiveFromTransferInstrument|
|capabilities|receiveGrants|
|capabilities|receivePayments|
|capabilities|sendToBalanceAccount|
|capabilities|sendToThirdParty|
|capabilities|sendToTransferInstrument|
|capabilities|thirdPartyFunding|
|capabilities|useCard|
|capabilities|useCardCommercial|
|capabilities|useCardConsumer|
|capabilities|useCardInRestrictedCountries|
|capabilities|useCardInRestrictedCountriesCommercial|
|capabilities|useCardInRestrictedCountriesConsumer|
|capabilities|useCardInRestrictedIndustries|
|capabilities|useCardInRestrictedIndustriesCommercial|
|capabilities|useCardInRestrictedIndustriesConsumer|
|capabilities|useChargeCard|
|capabilities|useChargeCardCommercial|
|capabilities|withdrawFromAtm|
|capabilities|withdrawFromAtmCommercial|
|capabilities|withdrawFromAtmConsumer|
|capabilities|withdrawFromAtmInRestrictedCountries|
|capabilities|withdrawFromAtmInRestrictedCountriesCommercial|
|capabilities|withdrawFromAtmInRestrictedCountriesConsumer|
|type|dataMissing|
|type|dataReview|
|type|invalidInput|
|type|pendingStatus|

<h2 id="tocS_VerificationError-recursive">VerificationError-recursive</h2>
<!-- backwards compatibility -->
<a id="schemaverificationerror-recursive"></a>
<a id="schema_VerificationError-recursive"></a>
<a id="tocSverificationerror-recursive"></a>
<a id="tocsverificationerror-recursive"></a>

```json
{
  "capabilities": [
    "acceptExternalFunding"
  ],
  "code": "string",
  "message": "string",
  "type": "dataMissing",
  "remediatingActions": [
    {
      "code": "string",
      "message": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|[string]|false|none|Contains the capabilities that the verification error applies to.|
|code|string|false|none|The verification error code.|
|message|string|false|none|A description of the error.|
|type|string|false|none|The type of error.<br><br><br><br>Possible values:<br>*  **invalidInput**<br>*  **dataMissing**<br>*  **pendingStatus**<br>*  **dataReview**<br><br>|
|remediatingActions|[[RemediatingAction](#schemaremediatingaction)]|false|none|Contains the actions that you can take to resolve the verification error.|

#### Enumerated Values

|Property|Value|
|---|---|
|capabilities|acceptExternalFunding|
|capabilities|acceptPspFunding|
|capabilities|acceptTransactionInRestrictedCountries|
|capabilities|acceptTransactionInRestrictedCountriesCommercial|
|capabilities|acceptTransactionInRestrictedCountriesConsumer|
|capabilities|acceptTransactionInRestrictedIndustries|
|capabilities|acceptTransactionInRestrictedIndustriesCommercial|
|capabilities|acceptTransactionInRestrictedIndustriesConsumer|
|capabilities|acquiring|
|capabilities|atmWithdrawal|
|capabilities|atmWithdrawalCommercial|
|capabilities|atmWithdrawalConsumer|
|capabilities|atmWithdrawalInRestrictedCountries|
|capabilities|atmWithdrawalInRestrictedCountriesCommercial|
|capabilities|atmWithdrawalInRestrictedCountriesConsumer|
|capabilities|authorisedPaymentInstrumentUser|
|capabilities|getGrantOffers|
|capabilities|issueBankAccount|
|capabilities|issueCard|
|capabilities|issueCardCommercial|
|capabilities|issueCardConsumer|
|capabilities|issueChargeCard|
|capabilities|issueChargeCardCommercial|
|capabilities|issueCreditLimit|
|capabilities|localAcceptance|
|capabilities|payout|
|capabilities|payoutToTransferInstrument|
|capabilities|processing|
|capabilities|receiveFromBalanceAccount|
|capabilities|receiveFromPlatformPayments|
|capabilities|receiveFromThirdParty|
|capabilities|receiveFromTransferInstrument|
|capabilities|receiveGrants|
|capabilities|receivePayments|
|capabilities|sendToBalanceAccount|
|capabilities|sendToThirdParty|
|capabilities|sendToTransferInstrument|
|capabilities|thirdPartyFunding|
|capabilities|useCard|
|capabilities|useCardCommercial|
|capabilities|useCardConsumer|
|capabilities|useCardInRestrictedCountries|
|capabilities|useCardInRestrictedCountriesCommercial|
|capabilities|useCardInRestrictedCountriesConsumer|
|capabilities|useCardInRestrictedIndustries|
|capabilities|useCardInRestrictedIndustriesCommercial|
|capabilities|useCardInRestrictedIndustriesConsumer|
|capabilities|useChargeCard|
|capabilities|useChargeCardCommercial|
|capabilities|withdrawFromAtm|
|capabilities|withdrawFromAtmCommercial|
|capabilities|withdrawFromAtmConsumer|
|capabilities|withdrawFromAtmInRestrictedCountries|
|capabilities|withdrawFromAtmInRestrictedCountriesCommercial|
|capabilities|withdrawFromAtmInRestrictedCountriesConsumer|
|type|dataMissing|
|type|dataReview|
|type|invalidInput|
|type|pendingStatus|

<h2 id="tocS_Wallet">Wallet</h2>
<!-- backwards compatibility -->
<a id="schemawallet"></a>
<a id="schema_Wallet"></a>
<a id="tocSwallet"></a>
<a id="tocswallet"></a>

```json
{
  "accountScore": "string",
  "device": {
    "deviceId": "string",
    "formFactor": "string",
    "osName": "string"
  },
  "deviceScore": "string",
  "provisioningMethod": "string",
  "recommendationReasons": [
    "accountCardTooNew"
  ],
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountScore|string|false|none|The confidence score of the wallet account, calculated by the wallet provider.<br><br>A high score means that account is considered trustworthy. A low score means that the account is considered suspicious.<br><br>Possible values: **1** to **5**.|
|device|[Device](#schemadevice)|false|none|Contains information about the device used for provisioning the network token.|
|deviceScore|string|false|none|The confidence score of the device, calculated by the wallet provider.<br><br>A high score means that device is considered trustworthy. A low score means that the device is considered suspicious.<br><br>Possible values: **1** to **5**.|
|provisioningMethod|string|false|none|The method used for provisioning the network token.<br><br>Possible values: **push**, **manual**, **cof**, **unknown**.|
|recommendationReasons|[string]|false|none|A list of risk indicators triggered at the time of provisioning the network token.<br><br>Some example values of risk indicators are:<br><br>* **accountTooNewSinceLaunch**<br>* **tooManyRecentAttempts**<br>* **lowDeviceScore**<br>* **lowAccountScore**<br>|
|type|string|false|none|**Deprecated.** The type of wallet that the network token is associated with.<br><br>Possible values: **applePay**, **googlePay**, **garminPay**.|

#### Enumerated Values

|Property|Value|
|---|---|
|recommendationReasons|accountCardTooNew|
|recommendationReasons|accountHighRisk|
|recommendationReasons|accountRecentlyChanged|
|recommendationReasons|accountTooNew|
|recommendationReasons|accountTooNewSinceLaunch|
|recommendationReasons|cardholderPanAssociatedToAccountWithinThresholdDays|
|recommendationReasons|changesMadeToAccountDataWithinThresholdDays|
|recommendationReasons|deviceProvisioningLocationOutsideOfCardholdersWalletAccountHomeCountry|
|recommendationReasons|deviceRecentlyLost|
|recommendationReasons|encryptedPaymentInstrumentDataIsBeingPushedByTheIssuerToTheSameDeviceThatIssuerApplicationAuthenticatedButWithSuccessfulUpfrontAuthentication|
|recommendationReasons|encryptedPaymentInstrumentDataIsBeingPushedByTheIssuerToTheSameDeviceThatIssuerApplicationAuthenticatedButWithoutAnyUpfrontAuthentication|
|recommendationReasons|encryptedPaymentInstrumentDataIsPushedToADifferentDeviceThanTheOneThatIssuerApplicationAuthenticated|
|recommendationReasons|encryptedPaymentInstrumentDataIsPushedToADifferentUserThanTheCardHolder|
|recommendationReasons|hasSuspendedTokens|
|recommendationReasons|inactiveAccount|
|recommendationReasons|issuerDeferredIDVDecision|
|recommendationReasons|issuerEncryptedPaymentInstrumentDataExpired|
|recommendationReasons|lowAccountScore|
|recommendationReasons|lowDeviceScore|
|recommendationReasons|lowPhoneNumberScore|
|recommendationReasons|numberOfActiveTokensGreaterThanThreshold|
|recommendationReasons|numberOfActiveTokensOnAllDevicesIsGreaterThanThreshold|
|recommendationReasons|numberOfDaysSinceDeviceWasLastReportedLostIsLessThanThresholdDays|
|recommendationReasons|numberOfDevicesWithSameUseridWithTokenIsGreaterThanThreshold|
|recommendationReasons|numberOfTransactionsInLast12MonthsLessThanThresholdNumber|
|recommendationReasons|outSideHomeTerritory|
|recommendationReasons|suspendedCardsInTheWALLETAccountIsGreaterThanThreshold|
|recommendationReasons|suspiciousActivity|
|recommendationReasons|theNumberOfProvisioningAttemptsAcrossAllCardsOnThisDeviceInTheLast24HoursExceedsTheThreshold|
|recommendationReasons|theWALLETAccountIntoWhichTheCardIsBeingProvisionedContainDistinctNamesGreaterThanThreshold|
|recommendationReasons|thisAccountHasNotHadActivityWithinThresholdPeriod|
|recommendationReasons|tooManyDifferentCardholders|
|recommendationReasons|tooManyRecentAttempts|
|recommendationReasons|tooManyRecentTokens|
|recommendationReasons|unableToAssess|
|recommendationReasons|unknown|
|recommendationReasons|userAccountWasCreatedWithinThresholdDays|
|recommendationReasons|userDeviceReceivingEncryptedPaymentInstrumentDataIsDifferentThanTheOneThatIsProvisioningTheToken|
|recommendationReasons|usersAccountOnDeviceLessThanThresholdDays|
|recommendationReasons|walletAccountCreatedWithinThresholdDays|
|recommendationReasons|walletAccountHolderNameOnFileDoesNotMatchCardholderEnteredName|

<h2 id="tocS_WebhookAmount">WebhookAmount</h2>
<!-- backwards compatibility -->
<a id="schemawebhookamount"></a>
<a id="schema_WebhookAmount"></a>
<a id="tocSwebhookamount"></a>
<a id="tocswebhookamount"></a>

```json
{
  "currency": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).|
|value|integer(int64)|true|none|The amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).|

<h2 id="tocS_WebhookTopUpAmount">WebhookTopUpAmount</h2>
<!-- backwards compatibility -->
<a id="schemawebhooktopupamount"></a>
<a id="schema_WebhookTopUpAmount"></a>
<a id="tocSwebhooktopupamount"></a>
<a id="tocswebhooktopupamount"></a>

```json
{
  "fixedAmount": {
    "currency": "string",
    "value": 0
  },
  "targetAmount": {
    "currency": "string",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fixedAmount|[WebhookAmount](#schemawebhookamount)|false|none|The fixed amount with which you want to top up the balance account.|
|targetAmount|[WebhookAmount](#schemawebhookamount)|false|none|The target balance for the balance account that the top-up must achieve.|

<h2 id="tocS_WebhookTopUpConfiguration">WebhookTopUpConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemawebhooktopupconfiguration"></a>
<a id="schema_WebhookTopUpConfiguration"></a>
<a id="tocSwebhooktopupconfiguration"></a>
<a id="tocswebhooktopupconfiguration"></a>

```json
{
  "counterparty": {
    "transferInstrumentId": "string"
  },
  "description": "string",
  "id": "string",
  "mandate": {
    "creationDate": "1970-01-01T00:00:00Z",
    "reference": "string"
  },
  "referenceForBeneficiary": "string",
  "status": "active",
  "topUpAmount": {
    "fixedAmount": {
      "currency": "string",
      "value": 0
    },
    "targetAmount": {
      "currency": "string",
      "value": 0
    }
  },
  "trigger": {
    "schedule": "monthly",
    "threshold": {
      "currency": "string",
      "value": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counterparty|[WebhookTopUpCounterparty](#schemawebhooktopupcounterparty)|true|none|The source of the funds.|
|description|string|true|none|The message that is used in the top-up transfer's description body with a maximum length of 140 characters.<br><br>If the message is longer after replacing placeholders, the message is cut off at 140 characters.|
|id|string|true|none|The unique identifier of the recurring top-up configuration.|
|mandate|[WebhookTopUpMandate](#schemawebhooktopupmandate)|false|none|The mandate associated with the recurring top-up.|
|referenceForBeneficiary|string|false|none| A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.<br><br> Supported characters: **a-z**, **A-Z**, **0-9**.|
|status|string|true|none|The status of the top-up configuration.<br><br>Possible values: <br><br> * **active**: the top-up is enabled and funds are pulled in.<br><br> * **inactive**: the top-up is disabled and cannot be triggered. <br><br>|
|topUpAmount|[WebhookTopUpAmount](#schemawebhooktopupamount)|true|none|The amount of the top-up. This can be a fixed amount or a target amount.|
|trigger|[WebhookTopUpTrigger](#schemawebhooktopuptrigger)|true|none|The condition that triggers the top-up. This can be a recurring schedule or a minimum balance threshold.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|

<h2 id="tocS_WebhookTopUpConfigurationUpdated">WebhookTopUpConfigurationUpdated</h2>
<!-- backwards compatibility -->
<a id="schemawebhooktopupconfigurationupdated"></a>
<a id="schema_WebhookTopUpConfigurationUpdated"></a>
<a id="tocSwebhooktopupconfigurationupdated"></a>
<a id="tocswebhooktopupconfigurationupdated"></a>

```json
{
  "counterparty": {
    "transferInstrumentId": "string"
  },
  "description": "string",
  "disabledReason": "string",
  "id": "string",
  "mandate": {
    "creationDate": "1970-01-01T00:00:00Z",
    "reference": "string"
  },
  "reasonDetail": "string",
  "referenceForBeneficiary": "string",
  "status": "active",
  "topUpAmount": {
    "fixedAmount": {
      "currency": "string",
      "value": 0
    },
    "targetAmount": {
      "currency": "string",
      "value": 0
    }
  },
  "trigger": {
    "schedule": "monthly",
    "threshold": {
      "currency": "string",
      "value": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counterparty|[WebhookTopUpCounterparty](#schemawebhooktopupcounterparty)|true|none|The source of the funds.|
|description|string|true|none|The message that is used in the top-up transfer's description body with a maximum length of 140 characters.<br><br>If the message is longer after replacing placeholders, the message is cut off at 140 characters.|
|disabledReason|string|false|none|A machine-readable code identifying the reason the system deactivated the top-up configuration. This field is only populated when the status is `inactive`.<br><br>Possible values:<br><br>* **transferInstrumentDoesNotExist**<br>* **directDebitNotSupported**<br>* **accountHierarchyNotActive**<br>* **mandateNotFound**<br>* **mandateNotActive**<br>* **directDebitAmountThresholdExceeded**<br>* **topUpNotSupported**<br>* **routeNotFound**<br>* **counterpartyAccountBlocked**<br>* **counterpartyAccountInvalid**<br>* **unknown**|
|id|string|true|none|The unique identifier of the recurring top-up configuration.|
|mandate|[WebhookTopUpMandate](#schemawebhooktopupmandate)|false|none|The mandate associated with the recurring top-up.|
|reasonDetail|string|false|none|A human-readable description providing the specific reason or context for why the configuration was disabled. This field is only populated when the status is `inactive`.|
|referenceForBeneficiary|string|false|none| A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.<br><br> Supported characters: **a-z**, **A-Z**, **0-9**.|
|status|string|true|none|The status of the top-up configuration.<br><br>Possible values: <br><br> * **active**: the top-up is enabled and funds are pulled in.<br><br> * **inactive**: the top-up is disabled and cannot be triggered. <br><br>|
|topUpAmount|[WebhookTopUpAmount](#schemawebhooktopupamount)|true|none|The amount of the top-up. This can be a fixed amount or a target amount.|
|trigger|[WebhookTopUpTrigger](#schemawebhooktopuptrigger)|true|none|The condition that triggers the top-up. This can be a recurring schedule or a minimum balance threshold.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|

<h2 id="tocS_WebhookTopUpCounterparty">WebhookTopUpCounterparty</h2>
<!-- backwards compatibility -->
<a id="schemawebhooktopupcounterparty"></a>
<a id="schema_WebhookTopUpCounterparty"></a>
<a id="tocSwebhooktopupcounterparty"></a>
<a id="tocswebhooktopupcounterparty"></a>

```json
{
  "transferInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transferInstrumentId|string|false|none|The unique identifier of the transfer instrument that is the source of the funds.|

<h2 id="tocS_WebhookTopUpMandate">WebhookTopUpMandate</h2>
<!-- backwards compatibility -->
<a id="schemawebhooktopupmandate"></a>
<a id="schema_WebhookTopUpMandate"></a>
<a id="tocSwebhooktopupmandate"></a>
<a id="tocswebhooktopupmandate"></a>

```json
{
  "creationDate": "1970-01-01T00:00:00Z",
  "reference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationDate|string(date-time)|false|none|The date when the mandate was created, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|reference|string|false|none|The unique identifier of the mandate.|

<h2 id="tocS_WebhookTopUpTrigger">WebhookTopUpTrigger</h2>
<!-- backwards compatibility -->
<a id="schemawebhooktopuptrigger"></a>
<a id="schema_WebhookTopUpTrigger"></a>
<a id="tocSwebhooktopuptrigger"></a>
<a id="tocswebhooktopuptrigger"></a>

```json
{
  "schedule": "monthly",
  "threshold": {
    "currency": "string",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedule|string|false|none|The schedule for recurring top-ups. Defines when the top-up should be triggered based on time.<br><br>Possible values:<br><br>* **weekly**: triggers the top-up once per week.<br><br>* **monthly**: triggers the top-up once per month.<br><br>* **weekdays**: triggers the top-up on weekdays only.|
|threshold|[WebhookAmount](#schemawebhookamount)|false|none|The balance threshold that triggers the top-up. If the balance falls below this amount, a top-up is initiated.|

#### Enumerated Values

|Property|Value|
|---|---|
|schedule|monthly|
|schedule|weekdays|
|schedule|weekly|

<h2 id="tocS_resultDetails">resultDetails</h2>
<!-- backwards compatibility -->
<a id="schemaresultdetails"></a>
<a id="schema_resultDetails"></a>
<a id="tocSresultdetails"></a>
<a id="tocsresultdetails"></a>

```json
{
  "reason": "string",
  "reasonCode": "string",
  "transferId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The reason why the execution was not successful.|
|reasonCode|string|false|none|The numeric code of the reason.|
|transferId|string|false|none|The unique identifier of the transfer created for this execution.|

<h2 id="tocS_sweepResultDetails">sweepResultDetails</h2>
<!-- backwards compatibility -->
<a id="schemasweepresultdetails"></a>
<a id="schema_sweepResultDetails"></a>
<a id="tocSsweepresultdetails"></a>
<a id="tocssweepresultdetails"></a>

```json
{
  "reason": "string",
  "reasonCode": "string",
  "sweepConfigurationDisabled": true,
  "transferId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|Human readable reason for why execution was not successful if applicable.|
|reasonCode|string|false|none|Reason Code for why execution was not successful if applicable.|
|sweepConfigurationDisabled|boolean|false|none|Is true if the sweep configuration was disabled.|
|transferId|string|false|none|The id of the transfer from executing the sweep.|
