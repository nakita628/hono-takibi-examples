<h1 id="management-webhooks">Management Webhooks v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Adyen uses webhooks to inform your system about events that happen with your Adyen company and merchant accounts, stores, payment terminals, and payment methods when using [Management API](https://docs.adyen.com/api-explorer/#/ManagementService/latest/overview).

When an event occurs, Adyen makes an HTTP POST request to a URL on your server and includes the details of the event in the request body.

See [Webhooks](https://docs.adyen.com/development-resources/webhooks) for more information.

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="management-webhooks-webhooks">Webhooks</h1>

## Merchant account created

<a id="opIdpost-merchant.created"></a>

`POST merchant.created`

A merchant account [was created](https://docs.adyen.com/api-explorer/#/ManagementService/latest/post/merchants).

> Body parameter

```json
{
  "type": "merchant.created",
  "environment": "test",
  "createdAt": "2022-08-12T10:50:01+02:00",
  "data": {
    "capabilities": {
      "sendToTransferInstrument": {
        "requested": true,
        "requestedLevel": "notApplicable"
      }
    },
    "companyId": "YOUR_COMPANY_ID",
    "merchantId": "MC3224X22322535GH8D537TJR",
    "status": "PreActive"
  }
}
```

<h3 id="merchant-account-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MerchantCreatedNotificationRequest](#schemamerchantcreatednotificationrequest)|false|none|
|» createdAt|body|string(date-time)|true|Timestamp for when the webhook was created.|
|» data|body|[AccountCreateNotificationData](#schemaaccountcreatenotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» type|body|string|true|Type of notification.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|merchant.created|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="merchant-account-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[AccountNotificationResponse](#schemaaccountnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Merchant account capability updated

<a id="opIdpost-merchant.updated"></a>

`POST merchant.updated`

There were changes to the verification status and capabilities of a [merchant account](https://docs.adyen.com/api-explorer/#/ManagementService/latest/post/merchants). If the verification fails, this webhook includes the errors and the actions that you can take to resolve them.

> Body parameter

```json
{
  "type": "merchant.updated",
  "environment": "test",
  "createdAt": "2022-09-20T13:42:31+02:00",
  "data": {
    "capabilities": {
      "receivePayments": {
        "allowed": true,
        "requested": true,
        "requestedLevel": "notApplicable",
        "verificationStatus": "valid"
      }
    },
    "legalEntityId": "LE322KH223222F5GNNW694PZN",
    "merchantId": "YOUR_MERCHANT_ID",
    "status": "PreActive"
  }
}
```

<h3 id="merchant-account-capability-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MerchantUpdatedNotificationRequest](#schemamerchantupdatednotificationrequest)|false|none|
|» createdAt|body|string(date-time)|true|Timestamp for when the webhook was created.|
|» data|body|[AccountUpdateNotificationData](#schemaaccountupdatenotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» type|body|string|true|Type of notification.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|merchant.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="merchant-account-capability-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[AccountNotificationResponse](#schemaaccountnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Payment method created

<a id="opIdpost-paymentMethod.created"></a>

`POST paymentMethod.created`

A request to [add a payment method](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings) was completed.

> Body parameter

```json
{
  "createdAt": "2022-01-24T14:59:11+01:00",
  "data": {
    "id": "PM3224R223224K5FH4M2K9B86",
    "merchantId": "MERCHANT_ACCOUNT",
    "status": "success",
    "storeId": "ST322LJ223223K5F4SQNR9XL5",
    "type": "visa"
  },
  "environment": "test",
  "type": "paymentMethod.created"
}
```

<h3 id="payment-method-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentMethodCreatedNotificationRequest](#schemapaymentmethodcreatednotificationrequest)|false|none|
|» createdAt|body|string(date-time)|true|Timestamp for when the webhook was created.|
|» data|body|[MidServiceNotificationData](#schemamidservicenotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» type|body|string|true|Type of notification.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|paymentMethod.created|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="payment-method-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaymentMethodNotificationResponse](#schemapaymentmethodnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Payment method request removed

<a id="opIdpost-paymentMethodRequest.removed"></a>

`POST paymentMethodRequest.removed`

A request to add a payment method is removed. You must make another request to [add a payment method](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings).

> Body parameter

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "data": {
    "allowed": true,
    "enabled": true,
    "id": "string",
    "merchantId": "string",
    "reference": "string",
    "status": "success",
    "storeId": "string",
    "type": "string",
    "verificationStatus": "valid"
  },
  "environment": "string",
  "type": "paymentMethodRequest.removed"
}
```

<h3 id="payment-method-request-removed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentMethodRequestRemovedNotificationRequest](#schemapaymentmethodrequestremovednotificationrequest)|false|none|
|» createdAt|body|string(date-time)|true|Timestamp for when the webhook was created.|
|» data|body|[MidServiceNotificationData](#schemamidservicenotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» type|body|string|true|Type of notification.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|paymentMethodRequest.removed|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="payment-method-request-removed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaymentMethodNotificationResponse](#schemapaymentmethodnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Payment method request scheduled for removal

<a id="opIdpost-paymentMethodRequest.scheduledForRemoval"></a>

`POST paymentMethodRequest.scheduledForRemoval`

A request to [add a payment method](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings) will be removed in 30 days. To make sure the payment method is added, provide the missing [KYC information](https://docs.adyen.com/platforms/onboard-users).

> Body parameter

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "data": {
    "allowed": true,
    "enabled": true,
    "id": "string",
    "merchantId": "string",
    "reference": "string",
    "status": "success",
    "storeId": "string",
    "type": "string",
    "verificationStatus": "valid"
  },
  "environment": "string",
  "type": "paymentMethodRequest.scheduledForRemoval"
}
```

<h3 id="payment-method-request-scheduled-for-removal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentMethodScheduledForRemovalNotificationRequest](#schemapaymentmethodscheduledforremovalnotificationrequest)|false|none|
|» createdAt|body|string(date-time)|true|Timestamp for when the webhook was created.|
|» data|body|[MidServiceNotificationData](#schemamidservicenotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» type|body|string|true|Type of notification.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|paymentMethodRequest.scheduledForRemoval|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="payment-method-request-scheduled-for-removal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaymentMethodNotificationResponse](#schemapaymentmethodnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Terminal assignment completed

<a id="opIdpost-terminalAssignment.completed"></a>

`POST terminalAssignment.completed`

A request to [reassign a terminal](https://docs.adyen.com/api-explorer/Management/3/post/terminals/(terminalId)/reassign) was completed.

> Body parameter

```json
{
  "assignedToAccount": "string",
  "assignedToStore": "string",
  "assignedToStoreId": "string",
  "eventDate": "string",
  "pspReference": "string",
  "uniqueTerminalId": "string"
}
```

<h3 id="terminal-assignment-completed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TerminalAssignmentNotificationRequest](#schematerminalassignmentnotificationrequest)|false|none|
|» assignedToAccount|body|string|true|The unique identifier of the merchant/company account to which the terminal is assigned.|
|» assignedToStore|body|string|false|The store that the terminal is assigned to, identified by the store reference (also known as store code).|
|» assignedToStoreId|body|string|false|The unique identifier of the store to which the terminal is assigned.|
|» eventDate|body|string|true|The date and time when an event has been completed.|
|» pspReference|body|string|true|The PSP reference of the request from which the notification originates.|
|» uniqueTerminalId|body|string|true|The unique identifier of the terminal.|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="terminal-assignment-completed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TerminalAssignmentNotificationResponse](#schematerminalassignmentnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Result of terminal boarding

<a id="opIdpost-terminalBoarding.triggered"></a>

`POST terminalBoarding.triggered`

The boarding of a payment terminal succeeded.

> Body parameter

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "data": {
    "companyId": "string",
    "merchantId": "string",
    "storeId": "string",
    "uniqueTerminalId": "string"
  },
  "environment": "string",
  "type": "terminalBoarding.triggered"
}
```

<h3 id="result-of-terminal-boarding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TerminalBoardingNotificationRequest](#schematerminalboardingnotificationrequest)|false|none|
|» createdAt|body|string(date-time)|true|Timestamp for when the webhook was created.|
|» data|body|[TerminalBoardingData](#schematerminalboardingdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» type|body|string|true|Type of notification.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|terminalBoarding.triggered|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="result-of-terminal-boarding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TerminalBoardingNotificationResponse](#schematerminalboardingnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Terminal settings updated

<a id="opIdpost-terminalSettings.modified"></a>

`POST terminalSettings.modified`

A request to [update terminal settings](https://docs.adyen.com/api-explorer/Management/latest/patch/terminals/(terminalId)/terminalSettings) was completed.

> Body parameter

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "data": {
    "companyId": "string",
    "merchantId": "string",
    "storeId": "string",
    "terminalId": "string",
    "updateSource": "Customer Area",
    "user": "string"
  },
  "environment": "string",
  "type": "terminalSettings.modified"
}
```

<h3 id="terminal-settings-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TerminalSettingsNotificationRequest](#schematerminalsettingsnotificationrequest)|false|none|
|» createdAt|body|string(date-time)|true|Timestamp for when the webhook was created.|
|» data|body|[TerminalSettingsData](#schematerminalsettingsdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» type|body|string|true|Type of notification.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|terminalSettings.modified|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="terminal-settings-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TerminalSettingsNotificationResponse](#schematerminalsettingsnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

# Schemas

<h2 id="tocS_AccountCapabilityData">AccountCapabilityData</h2>
<!-- backwards compatibility -->
<a id="schemaaccountcapabilitydata"></a>
<a id="schema_AccountCapabilityData"></a>
<a id="tocSaccountcapabilitydata"></a>
<a id="tocsaccountcapabilitydata"></a>

```json
{
  "allowed": true,
  "allowedLevel": "string",
  "capability": "string",
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
  "requestedLevel": "string",
  "verificationDeadline": "1970-01-01T00:00:00Z",
  "verificationStatus": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|boolean|false|none|Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is successful.|
|allowedLevel|string|false|none|The allowed level of the capability. Some capabilities have different levels which correspond to thresholds. Higher levels may require additional checks and increased monitoring.Possible values: **notApplicable**, **low**, **medium**, **high**.|
|capability|string|false|none|The name of the capability. For example, **sendToTransferInstrument**.|
|problems|[[CapabilityProblem](#schemacapabilityproblem)]|false|none|List of entities that have problems with verification. The information includes the details of the errors and the actions that you can take to resolve them.|
|requested|boolean|true|none|Indicates whether you requested the capability.|
|requestedLevel|string|true|none|The level that you requested for the capability. Some capabilities have different levels which correspond to thresholds. Higher levels may require additional checks and increased monitoring.Possible values: **notApplicable**, **low**, **medium**, **high**.|
|verificationDeadline|string(date-time)|false|none|The verification deadline for the capability that will be disallowed if verification errors are not resolved.|
|verificationStatus|string|false|none|The status of the verification checks for the capability.<br><br>Possible values:<br><br>* **pending**: Adyen is running the verification.<br><br>* **invalid**: The verification failed. Check if the `errors` array contains more information.<br><br>* **valid**: The verification was successful.<br><br>* **rejected**: Adyen checked the information and found reasons to not allow the capability.<br>|

<h2 id="tocS_AccountCreateNotificationData">AccountCreateNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemaaccountcreatenotificationdata"></a>
<a id="schema_AccountCreateNotificationData"></a>
<a id="tocSaccountcreatenotificationdata"></a>
<a id="tocsaccountcreatenotificationdata"></a>

```json
{
  "capabilities": {
    "property1": {
      "allowed": true,
      "allowedLevel": "string",
      "capability": "string",
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
      "requestedLevel": "string",
      "verificationDeadline": "1970-01-01T00:00:00Z",
      "verificationStatus": "string"
    },
    "property2": {
      "allowed": true,
      "allowedLevel": "string",
      "capability": "string",
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
      "requestedLevel": "string",
      "verificationDeadline": "1970-01-01T00:00:00Z",
      "verificationStatus": "string"
    }
  },
  "companyId": "string",
  "legalEntityId": "string",
  "merchantId": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|object|true|none|Key-value pairs that specify the actions that the merchant account can do and its settings. The key is a capability. For example, the **sendToTransferInstrument** is the capability required before you can pay out funds to the bank account. The value is an object containing the settings for the capability.|
|companyId|string|true|none|The unique identifier of the company account.|
|legalEntityId|string|false|none|The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id).|
|merchantId|string|true|none|The unique identifier of the merchant account.|
|status|string|true|none|The status of the merchant account.<br><br>Possible values:<br><br>* **PreActive**: The merchant account has been created. Users cannot access the merchant account in the Customer Area. The account cannot process payments.<br>* **Active**: Users can access the merchant account in the Customer Area. If the company account is also **Active**, then payment processing and payouts are enabled.<br>* **InactiveWithModifications**: Users can access the merchant account in the Customer Area. The account cannot process new payments but can still modify payments, for example issue refunds. The account can still receive payouts.<br>* **Inactive**: Users can access the merchant account in the Customer Area. Payment processing and payouts are disabled.<br>* **Closed**: The account is closed and this cannot be reversed. Users cannot log in. Payment processing and payouts are disabled.|

<h2 id="tocS_AccountNotificationResponse">AccountNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountnotificationresponse"></a>
<a id="schema_AccountNotificationResponse"></a>
<a id="tocSaccountnotificationresponse"></a>
<a id="tocsaccountnotificationresponse"></a>

```json
{
  "notificationResponse": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationResponse|string|false|none|Respond with any **2xx** HTTP status code to [accept the webhook](https://docs.adyen.com/development-resources/webhooks/#accept-webhooks).|

<h2 id="tocS_AccountUpdateNotificationData">AccountUpdateNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemaaccountupdatenotificationdata"></a>
<a id="schema_AccountUpdateNotificationData"></a>
<a id="tocSaccountupdatenotificationdata"></a>
<a id="tocsaccountupdatenotificationdata"></a>

```json
{
  "capabilities": {
    "property1": {
      "allowed": true,
      "allowedLevel": "string",
      "capability": "string",
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
      "requestedLevel": "string",
      "verificationDeadline": "1970-01-01T00:00:00Z",
      "verificationStatus": "string"
    },
    "property2": {
      "allowed": true,
      "allowedLevel": "string",
      "capability": "string",
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
      "requestedLevel": "string",
      "verificationDeadline": "1970-01-01T00:00:00Z",
      "verificationStatus": "string"
    }
  },
  "legalEntityId": "string",
  "merchantId": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|object|true|none|Key-value pairs that specify what you can do with the merchant account and its settings. The key is a capability. For example, the **sendToTransferInstrument** is the capability required before you can pay out the funds of a merchant account to a [bank account](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments). The value is an object containing the settings for the capability.|
|legalEntityId|string|false|none|The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id).|
|merchantId|string|true|none|The unique identifier of the merchant account.|
|status|string|true|none|The status of the merchant account.<br><br>Possible values:<br><br>* **PreActive**: The merchant account has been created. Users cannot access the merchant account in the Customer Area. The account cannot process payments.<br>* **Active**: Users can access the merchant account in the Customer Area. If the company account is also **Active**, then payment processing and payouts are enabled.<br>* **InactiveWithModifications**: Users can access the merchant account in the Customer Area. The account cannot process new payments but can still modify payments, for example issue refunds. The account can still receive payouts.<br>* **Inactive**: Users can access the merchant account in the Customer Area. Payment processing and payouts are disabled.<br>* **Closed**: The account is closed and this cannot be reversed. Users cannot log in. Payment processing and payouts are disabled.|

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
|entity|[CapabilityProblemEntity](#schemacapabilityproblementity)|false|none|The ID and the type of entity that has verification errors.|
|verificationErrors|[[VerificationError](#schemaverificationerror)]|false|none|List of verification errors.|

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
|owner|[CapabilityProblemEntity-recursive](#schemacapabilityproblementity-recursive)|false|none|The owner of the entity that has an error. For example, if the `entity.type` is **BankAccount**, then the `owner` contains the details of the legal entity that owns the bank account.|
|type|string|false|none|The type of entity.<br><br>Possible values: **LegalEntity**, **BankAccount**, or **Document**.|

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
|type|string|false|none|The type of entity.<br><br>Possible values: **LegalEntity**, **BankAccount**, or **Document**.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BankAccount|
|type|Document|
|type|LegalEntity|

<h2 id="tocS_MerchantCreatedNotificationRequest">MerchantCreatedNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemamerchantcreatednotificationrequest"></a>
<a id="schema_MerchantCreatedNotificationRequest"></a>
<a id="tocSmerchantcreatednotificationrequest"></a>
<a id="tocsmerchantcreatednotificationrequest"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "data": {
    "capabilities": {
      "property1": {
        "allowed": true,
        "allowedLevel": "string",
        "capability": "string",
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
        "requestedLevel": "string",
        "verificationDeadline": "1970-01-01T00:00:00Z",
        "verificationStatus": "string"
      },
      "property2": {
        "allowed": true,
        "allowedLevel": "string",
        "capability": "string",
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
        "requestedLevel": "string",
        "verificationDeadline": "1970-01-01T00:00:00Z",
        "verificationStatus": "string"
      }
    },
    "companyId": "string",
    "legalEntityId": "string",
    "merchantId": "string",
    "status": "string"
  },
  "environment": "string",
  "type": "merchant.created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|Timestamp for when the webhook was created.|
|data|[AccountCreateNotificationData](#schemaaccountcreatenotificationdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|type|string|true|none|Type of notification.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|merchant.created|

<h2 id="tocS_MerchantUpdatedNotificationRequest">MerchantUpdatedNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemamerchantupdatednotificationrequest"></a>
<a id="schema_MerchantUpdatedNotificationRequest"></a>
<a id="tocSmerchantupdatednotificationrequest"></a>
<a id="tocsmerchantupdatednotificationrequest"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "data": {
    "capabilities": {
      "property1": {
        "allowed": true,
        "allowedLevel": "string",
        "capability": "string",
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
        "requestedLevel": "string",
        "verificationDeadline": "1970-01-01T00:00:00Z",
        "verificationStatus": "string"
      },
      "property2": {
        "allowed": true,
        "allowedLevel": "string",
        "capability": "string",
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
        "requestedLevel": "string",
        "verificationDeadline": "1970-01-01T00:00:00Z",
        "verificationStatus": "string"
      }
    },
    "legalEntityId": "string",
    "merchantId": "string",
    "status": "string"
  },
  "environment": "string",
  "type": "merchant.updated"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|Timestamp for when the webhook was created.|
|data|[AccountUpdateNotificationData](#schemaaccountupdatenotificationdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|type|string|true|none|Type of notification.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|merchant.updated|

<h2 id="tocS_MidServiceNotificationData">MidServiceNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemamidservicenotificationdata"></a>
<a id="schema_MidServiceNotificationData"></a>
<a id="tocSmidservicenotificationdata"></a>
<a id="tocsmidservicenotificationdata"></a>

```json
{
  "allowed": true,
  "enabled": true,
  "id": "string",
  "merchantId": "string",
  "reference": "string",
  "status": "success",
  "storeId": "string",
  "type": "string",
  "verificationStatus": "valid"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|boolean|false|none|Indicates whether receiving payments is allowed. This value is set to **true** by Adyen after screening your merchant account.|
|enabled|boolean|false|none|Indicates whether the payment method is enabled (**true**) or disabled (**false**).|
|id|string|true|none|The unique identifier of the resource.|
|merchantId|string|true|none|The unique identifier of the merchant account.|
|reference|string|false|none|Your reference for the payment method.|
|status|string|true|none|The status of the request to add a payment method. Possible values:<br><br>* **success**: the payment method was added.<br>* **failure**: the request failed.<br>* **capabilityPending**: the **receivePayments** capability is not allowed.<br>|
|storeId|string|false|none|The unique identifier of the [store](https://docs.adyen.com/api-explorer/#/ManagementService/latest/post/merchants/{id}/paymentMethodSettings__reqParam_storeId), if any.|
|type|string|true|none|Payment method [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api).<br><br>For payment method variant **cartebancaire**, method-specific details are returned in the [`cartesBancaires`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/paymentMethodSettings#responses-200-cartesBancaires) object of the response.|
|verificationStatus|string|false|none|Payment method status. Possible values:<br>* **valid**<br>* **pending**<br>* **invalid**<br>* **rejected**|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|failure|
|status|capabilityPending|
|status|dataRequired|
|status|updatesExpected|
|verificationStatus|valid|
|verificationStatus|pending|
|verificationStatus|invalid|
|verificationStatus|rejected|

<h2 id="tocS_PaymentMethodCreatedNotificationRequest">PaymentMethodCreatedNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethodcreatednotificationrequest"></a>
<a id="schema_PaymentMethodCreatedNotificationRequest"></a>
<a id="tocSpaymentmethodcreatednotificationrequest"></a>
<a id="tocspaymentmethodcreatednotificationrequest"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "data": {
    "allowed": true,
    "enabled": true,
    "id": "string",
    "merchantId": "string",
    "reference": "string",
    "status": "success",
    "storeId": "string",
    "type": "string",
    "verificationStatus": "valid"
  },
  "environment": "string",
  "type": "paymentMethod.created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|Timestamp for when the webhook was created.|
|data|[MidServiceNotificationData](#schemamidservicenotificationdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|type|string|true|none|Type of notification.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|paymentMethod.created|

<h2 id="tocS_PaymentMethodNotificationResponse">PaymentMethodNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethodnotificationresponse"></a>
<a id="schema_PaymentMethodNotificationResponse"></a>
<a id="tocSpaymentmethodnotificationresponse"></a>
<a id="tocspaymentmethodnotificationresponse"></a>

```json
{
  "notificationResponse": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationResponse|string|false|none|Respond with any **2xx** HTTP status code to [accept the webhook](https://docs.adyen.com/development-resources/webhooks/#accept-webhooks).|

<h2 id="tocS_PaymentMethodRequestRemovedNotificationRequest">PaymentMethodRequestRemovedNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethodrequestremovednotificationrequest"></a>
<a id="schema_PaymentMethodRequestRemovedNotificationRequest"></a>
<a id="tocSpaymentmethodrequestremovednotificationrequest"></a>
<a id="tocspaymentmethodrequestremovednotificationrequest"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "data": {
    "allowed": true,
    "enabled": true,
    "id": "string",
    "merchantId": "string",
    "reference": "string",
    "status": "success",
    "storeId": "string",
    "type": "string",
    "verificationStatus": "valid"
  },
  "environment": "string",
  "type": "paymentMethodRequest.removed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|Timestamp for when the webhook was created.|
|data|[MidServiceNotificationData](#schemamidservicenotificationdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|type|string|true|none|Type of notification.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|paymentMethodRequest.removed|

<h2 id="tocS_PaymentMethodScheduledForRemovalNotificationRequest">PaymentMethodScheduledForRemovalNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethodscheduledforremovalnotificationrequest"></a>
<a id="schema_PaymentMethodScheduledForRemovalNotificationRequest"></a>
<a id="tocSpaymentmethodscheduledforremovalnotificationrequest"></a>
<a id="tocspaymentmethodscheduledforremovalnotificationrequest"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "data": {
    "allowed": true,
    "enabled": true,
    "id": "string",
    "merchantId": "string",
    "reference": "string",
    "status": "success",
    "storeId": "string",
    "type": "string",
    "verificationStatus": "valid"
  },
  "environment": "string",
  "type": "paymentMethodRequest.scheduledForRemoval"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|Timestamp for when the webhook was created.|
|data|[MidServiceNotificationData](#schemamidservicenotificationdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|type|string|true|none|Type of notification.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|paymentMethodRequest.scheduledForRemoval|

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

<h2 id="tocS_TerminalAssignmentNotificationRequest">TerminalAssignmentNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schematerminalassignmentnotificationrequest"></a>
<a id="schema_TerminalAssignmentNotificationRequest"></a>
<a id="tocSterminalassignmentnotificationrequest"></a>
<a id="tocsterminalassignmentnotificationrequest"></a>

```json
{
  "assignedToAccount": "string",
  "assignedToStore": "string",
  "assignedToStoreId": "string",
  "eventDate": "string",
  "pspReference": "string",
  "uniqueTerminalId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignedToAccount|string|true|none|The unique identifier of the merchant/company account to which the terminal is assigned.|
|assignedToStore|string|false|none|The store that the terminal is assigned to, identified by the store reference (also known as store code).|
|assignedToStoreId|string|false|none|The unique identifier of the store to which the terminal is assigned.|
|eventDate|string|true|none|The date and time when an event has been completed.|
|pspReference|string|true|none|The PSP reference of the request from which the notification originates.|
|uniqueTerminalId|string|true|none|The unique identifier of the terminal.|

<h2 id="tocS_TerminalAssignmentNotificationResponse">TerminalAssignmentNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schematerminalassignmentnotificationresponse"></a>
<a id="schema_TerminalAssignmentNotificationResponse"></a>
<a id="tocSterminalassignmentnotificationresponse"></a>
<a id="tocsterminalassignmentnotificationresponse"></a>

```json
{
  "notificationResponse": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationResponse|string|false|none|Respond with any **2xx** HTTP status code to [accept the webhook](https://docs.adyen.com/development-resources/webhooks/#accept-webhooks).|

<h2 id="tocS_TerminalBoardingData">TerminalBoardingData</h2>
<!-- backwards compatibility -->
<a id="schematerminalboardingdata"></a>
<a id="schema_TerminalBoardingData"></a>
<a id="tocSterminalboardingdata"></a>
<a id="tocsterminalboardingdata"></a>

```json
{
  "companyId": "string",
  "merchantId": "string",
  "storeId": "string",
  "uniqueTerminalId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyId|string|true|none|The unique identifier of the company account.|
|merchantId|string|false|none|The unique identifier of the merchant account.|
|storeId|string|false|none|The unique identifier of the store.|
|uniqueTerminalId|string|true|none|The unique identifier of the terminal.|

<h2 id="tocS_TerminalBoardingNotificationRequest">TerminalBoardingNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schematerminalboardingnotificationrequest"></a>
<a id="schema_TerminalBoardingNotificationRequest"></a>
<a id="tocSterminalboardingnotificationrequest"></a>
<a id="tocsterminalboardingnotificationrequest"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "data": {
    "companyId": "string",
    "merchantId": "string",
    "storeId": "string",
    "uniqueTerminalId": "string"
  },
  "environment": "string",
  "type": "terminalBoarding.triggered"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|Timestamp for when the webhook was created.|
|data|[TerminalBoardingData](#schematerminalboardingdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|type|string|true|none|Type of notification.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|terminalBoarding.triggered|

<h2 id="tocS_TerminalBoardingNotificationResponse">TerminalBoardingNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schematerminalboardingnotificationresponse"></a>
<a id="schema_TerminalBoardingNotificationResponse"></a>
<a id="tocSterminalboardingnotificationresponse"></a>
<a id="tocsterminalboardingnotificationresponse"></a>

```json
{
  "notificationResponse": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationResponse|string|false|none|Respond with any **2xx** HTTP status code to [accept the webhook](https://docs.adyen.com/development-resources/webhooks/#accept-webhooks).|

<h2 id="tocS_TerminalSettingsData">TerminalSettingsData</h2>
<!-- backwards compatibility -->
<a id="schematerminalsettingsdata"></a>
<a id="schema_TerminalSettingsData"></a>
<a id="tocSterminalsettingsdata"></a>
<a id="tocsterminalsettingsdata"></a>

```json
{
  "companyId": "string",
  "merchantId": "string",
  "storeId": "string",
  "terminalId": "string",
  "updateSource": "Customer Area",
  "user": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyId|string|false|none|The unique identifier of the company account.|
|merchantId|string|false|none|The unique identifier of the merchant account.|
|storeId|string|false|none|The unique identifier of the store.|
|terminalId|string|false|none|The unique identifier of the terminal.|
|updateSource|string|true|none|Indicates whether the terminal settings were updated using the Customer Area or the Management API.|
|user|string|true|none|The user that updated the terminal settings. Can be Adyen or your API credential username.|

#### Enumerated Values

|Property|Value|
|---|---|
|updateSource|Customer Area|
|updateSource|Management Api|

<h2 id="tocS_TerminalSettingsNotificationRequest">TerminalSettingsNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schematerminalsettingsnotificationrequest"></a>
<a id="schema_TerminalSettingsNotificationRequest"></a>
<a id="tocSterminalsettingsnotificationrequest"></a>
<a id="tocsterminalsettingsnotificationrequest"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "data": {
    "companyId": "string",
    "merchantId": "string",
    "storeId": "string",
    "terminalId": "string",
    "updateSource": "Customer Area",
    "user": "string"
  },
  "environment": "string",
  "type": "terminalSettings.modified"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|Timestamp for when the webhook was created.|
|data|[TerminalSettingsData](#schematerminalsettingsdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|type|string|true|none|Type of notification.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|terminalSettings.modified|

<h2 id="tocS_TerminalSettingsNotificationResponse">TerminalSettingsNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schematerminalsettingsnotificationresponse"></a>
<a id="schema_TerminalSettingsNotificationResponse"></a>
<a id="tocSterminalsettingsnotificationresponse"></a>
<a id="tocsterminalsettingsnotificationresponse"></a>

```json
{
  "notificationResponse": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationResponse|string|false|none|Respond with any **2xx** HTTP status code to [accept the webhook](https://docs.adyen.com/development-resources/webhooks/#accept-webhooks).|

<h2 id="tocS_VerificationError">VerificationError</h2>
<!-- backwards compatibility -->
<a id="schemaverificationerror"></a>
<a id="schema_VerificationError"></a>
<a id="tocSverificationerror"></a>
<a id="tocsverificationerror"></a>

```json
{
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
|code|string|false|none|The verification error code.|
|message|string|false|none|The verification error message.|
|remediatingActions|[[RemediatingAction](#schemaremediatingaction)]|false|none|The actions that you can take to resolve the verification error.|
|subErrors|[[VerificationError-recursive](#schemaverificationerror-recursive)]|false|none|none|
|type|string|false|none|The type of verification error.<br><br>Possible values: **invalidInput**, **dataMissing**, and **pendingStatus**.|

#### Enumerated Values

|Property|Value|
|---|---|
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
|code|string|false|none|The verification error code.|
|message|string|false|none|The verification error message.|
|type|string|false|none|The type of verification error.<br><br>Possible values: **invalidInput**, **dataMissing**, and **pendingStatus**.|
|remediatingActions|[[RemediatingAction](#schemaremediatingaction)]|false|none|The actions that you can take to resolve the verification error.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|dataMissing|
|type|dataReview|
|type|invalidInput|
|type|pendingStatus|
