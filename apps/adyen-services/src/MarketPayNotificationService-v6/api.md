<h1 id="classic-platforms---notifications">Classic Platforms - Notifications v6</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API is used for the classic integration. If you are just starting your implementation, refer to our [new integration guide](https://docs.adyen.com/adyen-for-platforms-model) instead.

The Notification API sends notifications to the endpoints specified in a given subscription. 
Subscriptions are managed through the Notification Configuration API. The API specifications listed here detail the format of each notification.

For more information, refer to our [documentation](https://docs.adyen.com/classic-platforms/notifications).

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="classic-platforms---notifications-webhooks">Webhooks</h1>

## Account closed

<a id="opIdpost-ACCOUNT_CLOSED"></a>

`POST /ACCOUNT_CLOSED`

Adyen sends this webhook when [an account is closed](https://docs.adyen.com/api-explorer/#/Account/latest/post/closeAccount).

> Body parameter

```json
{
  "error": {
    "errorCode": "000",
    "message": "test error message"
  },
  "eventDate": "2019-01-01T01:00:00+01:00",
  "eventType": "ACCOUNT_CLOSED",
  "executingUserKey": "executing-user-key",
  "live": false,
  "pspReference": "TSTPSPR0001",
  "content": {
    "invalidFields": [
      {
        "errorCode": 1,
        "errorDescription": "Field is missing",
        "fieldType": {
          "field": "AccountHolderDetails.BusinessDetails.Shareholders.unknown",
          "fieldName": "unknown",
          "shareholderCode": "SH00001"
        }
      }
    ],
    "pspReference": "TSTPSPR0001",
    "resultCode": "Success",
    "status": "Closed"
  }
}
```

<h3 id="account-closed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountCloseNotification](#schemaaccountclosenotification)|false|none|
|» content|body|[CloseAccountResponse](#schemacloseaccountresponse)|false|The details of the Account update.|
|» error|body|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|Error information of failed request. No value provided here if no error occurred on processing.|
|» eventDate|body|string(date-time)|true|The date and time when an event has been completed.|
|» eventType|body|string|true|The event type of the notification.|
|» executingUserKey|body|string|true|The user or process that has triggered the notification.|
|» live|body|boolean|true|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|» pspReference|body|string|true|The PSP reference of the request from which the notification originates.|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="account-closed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[NotificationResponse](#schemanotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Account created

<a id="opIdpost-ACCOUNT_CREATED"></a>

`POST /ACCOUNT_CREATED`

Adyen sends this webhook when [an account is created](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccount).

> Body parameter

```json
{
  "error": {
    "errorCode": "000",
    "message": "test error message"
  },
  "eventDate": "2019-01-01T01:00:00+01:00",
  "eventType": "ACCOUNT_CREATED",
  "executingUserKey": "executing-user-key",
  "live": false,
  "pspReference": "TSTPSPR0001",
  "content": {
    "invalidFields": [
      {
        "errorCode": 1,
        "errorDescription": "Field is missing",
        "fieldType": {
          "field": "AccountHolderDetails.BusinessDetails.Shareholders.unknown",
          "fieldName": "unknown",
          "shareholderCode": "SH00001"
        }
      }
    ],
    "pspReference": "TSTPSPR0001",
    "resultCode": "Success",
    "accountCode": "AC0000000001",
    "accountHolderCode": "AHC00000001",
    "description": "account description",
    "metadata": {
      "MetaKey": "MetaValue"
    },
    "payoutSchedule": {
      "nextScheduledPayout": "1970-01-02T01:00:00+01:00",
      "schedule": "DAILY"
    },
    "status": "Active"
  }
}
```

<h3 id="account-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountCreateNotification](#schemaaccountcreatenotification)|false|none|
|» content|body|[CreateAccountResponse](#schemacreateaccountresponse)|false|The details of the account creation.|
|» error|body|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|Error information of failed request. No value provided here if no error occurred on processing.|
|» eventDate|body|string(date-time)|true|The date and time when an event has been completed.|
|» eventType|body|string|true|The event type of the notification.|
|» executingUserKey|body|string|true|The user or process that has triggered the notification.|
|» live|body|boolean|true|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|» pspReference|body|string|true|The PSP reference of the request from which the notification originates.|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="account-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[NotificationResponse](#schemanotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Liable account's funds are below configured threshold

<a id="opIdpost-ACCOUNT_FUNDS_BELOW_THRESHOLD"></a>

`POST /ACCOUNT_FUNDS_BELOW_THRESHOLD`

Adyen sends this notification when the current funds of your liable account are below the configured threshold.

> Body parameter

```json
{
  "error": {
    "errorCode": "000",
    "message": "test error message"
  },
  "eventDate": "2019-01-01T01:00:00+01:00",
  "eventType": "TRANSFER_FUNDS",
  "executingUserKey": "executing-user-key",
  "live": false,
  "pspReference": "TSTPSPR0001",
  "content": {
    "amount": {
      "currency": "EUR",
      "value": 10
    },
    "destinationAccountCode": "AC0000001D",
    "invalidFields": [
      {
        "errorCode": 1,
        "errorDescription": "Field is missing",
        "fieldType": {
          "field": "AccountHolderDetails.BusinessDetails.Shareholders.unknown",
          "fieldName": "unknown",
          "shareholderCode": "SH00001"
        }
      }
    ],
    "merchantReference": "MRef#000001",
    "sourceAccountCode": "AC0000001S",
    "status": {
      "message": {
        "code": "100",
        "text": "test message"
      },
      "statusCode": "Success"
    },
    "transferCode": "TC0001"
  }
}
```

<h3 id="liable-accounts-funds-are-below-configured-threshold-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountFundsBelowThresholdNotification](#schemaaccountfundsbelowthresholdnotification)|false|none|
|» content|body|[AccountFundsBelowThresholdNotificationContent](#schemaaccountfundsbelowthresholdnotificationcontent)|false|Details of the liable account with funds under threshold.|
|» error|body|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|Error information of failed request. No value provided here if no error occurred on processing.|
|» eventDate|body|string(date-time)|true|The date and time when an event has been completed.|
|» eventType|body|string|true|The event type of the notification.|
|» executingUserKey|body|string|true|The user or process that has triggered the notification.|
|» live|body|boolean|true|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|» pspReference|body|string|true|The PSP reference of the request from which the notification originates.|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="liable-accounts-funds-are-below-configured-threshold-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[NotificationResponse](#schemanotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Account holder created

<a id="opIdpost-ACCOUNT_HOLDER_CREATED"></a>

`POST /ACCOUNT_HOLDER_CREATED`

Adyen sends this webhook when [an account holder is created](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder).

> Body parameter

```json
{
  "error": {
    "errorCode": "000",
    "message": "test error message"
  },
  "eventDate": "2019-01-02T01:00:00+01:00",
  "eventType": "ACCOUNT_HOLDER_CREATED",
  "executingUserKey": "executing-user-key",
  "live": false,
  "pspReference": "TSTPSPR0001",
  "content": {
    "invalidFields": [
      {
        "errorCode": 1,
        "errorDescription": "Field is missing",
        "fieldType": {
          "field": "AccountHolderDetails.BusinessDetails.Shareholders.unknown",
          "fieldName": "unknown",
          "shareholderCode": "SH00001"
        }
      }
    ],
    "pspReference": "TSTPSPR0001",
    "resultCode": "Success",
    "accountCode": "AC0000000001",
    "accountHolderCode": "AHC00000001",
    "accountHolderDetails": {
      "address": {
        "city": "Amsterdam",
        "country": "NL",
        "houseNumberOrName": "96/A",
        "postalCode": "1000AA",
        "stateOrProvince": "NH",
        "street": "Street"
      },
      "bankAccountDetails": [
        {
          "accountNumber": "00000000",
          "accountType": "checking",
          "bankAccountName": "Account name",
          "bankAccountReference": "Ref#000001",
          "bankAccountUUID": "00000000-0000-0000-0000-000000000000",
          "bankBicSwift": "BSWFT",
          "bankCity": "Amsterdam",
          "bankCode": "00000000",
          "bankName": "Bank Name Co",
          "branchCode": "00000000",
          "checkCode": "1234",
          "countryCode": "NL",
          "currencyCode": "EUR",
          "iban": "NL00NONE1234123412",
          "ownerCity": "Amsterdam",
          "ownerCountryCode": "NL",
          "ownerDateOfBirth": "1981-02-27",
          "ownerHouseNumberOrName": "32/B",
          "ownerName": "Owner Name",
          "ownerNationality": "NL",
          "ownerPostalCode": "1000AA",
          "ownerState": "NH",
          "ownerStreet": "Owner Street",
          "primaryAccount": false,
          "taxId": "OT#12345",
          "urlForVerification": "http://adyen.com"
        }
      ],
      "businessDetails": {
        "doingBusinessAs": "Business name",
        "legalBusinessName": "Legal Business Co",
        "registrationNumber": "Reg#1234",
        "shareholders": [
          {
            "address": {
              "city": "Amsterdam",
              "country": "NL",
              "houseNumberOrName": "96/A",
              "postalCode": "1000AA",
              "stateOrProvince": "NH",
              "street": "Street"
            },
            "email": "contact@merchant.com",
            "fullPhoneNumber": "+3112345678",
            "name": {
              "firstName": "Firstname",
              "infix": "infix",
              "lastName": "Lastname"
            },
            "personalData": {
              "dateOfBirth": "1981-02-27",
              "documentData": [
                {
                  "expirationDate": "2030-12-31",
                  "issuerCountry": "NL",
                  "issuerState": "NH",
                  "number": "ID#123456",
                  "type": "ID"
                }
              ],
              "nationality": "NL"
            },
            "phoneNumber": {
              "phoneCountryCode": "NL",
              "phoneNumber": "858888138",
              "phoneType": "Landline"
            },
            "shareholderCode": "SH00001",
            "shareholderReference": "SHREF#0000001",
            "webAddress": "https://www.adyen.com/"
          }
        ],
        "taxId": "TaxID#1234"
      },
      "email": "contact@adyen.com",
      "fullPhoneNumber": "+31858888138",
      "individualDetails": {
        "name": {
          "firstName": "Firstname",
          "infix": "infix",
          "lastName": "Lastname"
        },
        "personalData": {
          "dateOfBirth": "1981-02-27",
          "documentData": [
            {
              "expirationDate": "2030-12-31",
              "issuerCountry": "NL",
              "issuerState": "NH",
              "number": "ID#123456",
              "type": "ID"
            }
          ],
          "nationality": "NL"
        }
      },
      "merchantCategoryCode": "1212",
      "metadata": {
        "MetaKey": "MetaValue"
      },
      "payoutInstrumentTokens": [
        {
          "merchantAccount": "MA000001",
          "payoutInstrumentTokenCode": "PIT000001",
          "payoutInstrumentTokenType": "CardToken",
          "recurringDetailReference": "RDR0000001",
          "shopperReference": "SR000001"
        }
      ],
      "phoneNumber": {
        "phoneCountryCode": "NL",
        "phoneNumber": "858888138",
        "phoneType": "Landline"
      },
      "webAddress": "https://adyen.com"
    },
    "accountHolderStatus": {
      "status": "Active",
      "statusReason": "Reason of status",
      "processingState": {
        "disabled": true,
        "disableReason": "Reason for disabled status",
        "processedFrom": {
          "currency": "EUR",
          "value": 10
        },
        "processedTo": {
          "currency": "EUR",
          "value": 100
        },
        "tierNumber": 2
      },
      "payoutState": {
        "allowPayout": false,
        "payoutLimit": {
          "currency": "EUR",
          "value": 1000
        },
        "disabled": true,
        "disableReason": "Reason for disabled status",
        "tierNumber": 2,
        "notAllowedReason": "Reason of not allowed"
      },
      "events": [
        {
          "event": "InactivateAccount",
          "executionDate": "2019-01-01T01:00:00+01:00",
          "reason": "Reason of event"
        }
      ]
    },
    "description": "Description for account holder",
    "legalEntity": "Business",
    "primaryCurrency": "EUR",
    "verification": {
      "accountHolder": {
        "checks": [
          {
            "type": "IDENTITY_VERIFICATION",
            "status": "PENDING",
            "summary": {
              "kycCheckCode": 100,
              "kycCheckDescription": "KYC check summary description"
            },
            "requiredFields": [
              "field.missing"
            ]
          }
        ]
      },
      "shareholders": [
        {
          "checks": [
            {
              "type": "IDENTITY_VERIFICATION",
              "status": "PENDING",
              "summary": {
                "kycCheckCode": 100,
                "kycCheckDescription": "KYC check summary description"
              },
              "requiredFields": [
                "field.missing"
              ]
            }
          ],
          "shareholderCode": "SH000001"
        }
      ],
      "bankAccounts": [
        {
          "checks": [
            {
              "type": "IDENTITY_VERIFICATION",
              "status": "PENDING",
              "summary": {
                "kycCheckCode": 100,
                "kycCheckDescription": "KYC check summary description"
              },
              "requiredFields": [
                "field.missing"
              ]
            }
          ],
          "bankAccountUUID": "00000000-0000-0000-0000-000000000000"
        }
      ]
    }
  }
}
```

<h3 id="account-holder-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountHolderCreateNotification](#schemaaccountholdercreatenotification)|false|none|
|» content|body|[CreateAccountHolderResponse](#schemacreateaccountholderresponse)|false|The details of the account holder creation.|
|» error|body|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|Error information of failed request. No value provided here if no error occurred on processing.|
|» eventDate|body|string(date-time)|true|The date and time when an event has been completed.|
|» eventType|body|string|true|The event type of the notification.|
|» executingUserKey|body|string|true|The user or process that has triggered the notification.|
|» live|body|boolean|true|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|» pspReference|body|string|true|The PSP reference of the request from which the notification originates.|

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
|200|OK|OK - the request has succeeded.|[NotificationResponse](#schemanotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Paid out to account holder

<a id="opIdpost-ACCOUNT_HOLDER_PAYOUT"></a>

`POST /ACCOUNT_HOLDER_PAYOUT`

Adyen sends this notification when a [payout request](https://docs.adyen.com/api-explorer/#/Fund/latest/post/payoutAccountHolder) to an account holder is processed and the payout is scheduled.

> Body parameter

```json
{
  "error": {
    "errorCode": "000",
    "message": "test error message"
  },
  "eventDate": "2019-01-01T01:00:00+01:00",
  "eventType": "ACCOUNT_HOLDER_PAYOUT",
  "executingUserKey": "executing-user-key",
  "live": false,
  "pspReference": "TSTPSPR0001",
  "content": {
    "accountCode": "AC00000001",
    "accountHolderCode": "AH00000001",
    "amounts": [
      {
        "currency": "EUR",
        "value": 10
      }
    ],
    "bankAccountDetail": {
      "accountNumber": "00000000",
      "accountType": "checking",
      "bankAccountName": "Account name",
      "bankAccountReference": "Ref#000001",
      "bankAccountUUID": "00000000-0000-0000-0000-000000000000",
      "bankBicSwift": "BSWFT",
      "bankCity": "Amsterdam",
      "bankCode": "00000000",
      "bankName": "Bank Name Co",
      "branchCode": "00000000",
      "checkCode": "1234",
      "countryCode": "NL",
      "currencyCode": "EUR",
      "iban": "NL00NONE1234123412",
      "ownerCity": "Amsterdam",
      "ownerCountryCode": "NL",
      "ownerDateOfBirth": "1981-02-27",
      "ownerHouseNumberOrName": "32/B",
      "ownerName": "Owner Name",
      "ownerNationality": "NL",
      "ownerPostalCode": "1000AA",
      "ownerState": "NH",
      "ownerStreet": "Owner Street",
      "primaryAccount": false,
      "taxId": "OT#12345",
      "urlForVerification": "http://adyen.com"
    },
    "description": "description of payout",
    "invalidFields": [
      {
        "errorCode": 1,
        "errorDescription": "Field is missing",
        "fieldType": {
          "field": "AccountHolderDetails.BusinessDetails.Shareholders.unknown",
          "fieldName": "unknown",
          "shareholderCode": "SH00001"
        }
      }
    ],
    "merchantReference": "MRef#00000001",
    "status": {
      "message": {
        "code": "10_069",
        "text": "Payout has been failed for account seller1. Details: Payout has been rejected by the beneficiary bank."
      },
      "statusCode": "Failed"
    }
  }
}
```

<h3 id="paid-out-to-account-holder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountHolderPayoutNotification](#schemaaccountholderpayoutnotification)|false|none|
|» content|body|[AccountHolderPayoutNotificationContent](#schemaaccountholderpayoutnotificationcontent)|false|Details of the payout to the Account Holder.|
|» error|body|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|Error information of failed request. No value provided here if no error occurred on processing.|
|» eventDate|body|string(date-time)|true|The date and time when an event has been completed.|
|» eventType|body|string|true|The event type of the notification.|
|» executingUserKey|body|string|true|The user or process that has triggered the notification.|
|» live|body|boolean|true|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|» pspReference|body|string|true|The PSP reference of the request from which the notification originates.|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="paid-out-to-account-holder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[NotificationResponse](#schemanotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Account holder status changed

<a id="opIdpost-ACCOUNT_HOLDER_STATUS_CHANGE"></a>

`POST /ACCOUNT_HOLDER_STATUS_CHANGE`

Adyen sends this webhook when [the status of an account holder is changed](https://docs.adyen.com/api-explorer/#/Account/latest/post/updateAccountHolderState).

> Body parameter

```json
{
  "error": {
    "errorCode": "000",
    "message": "test error message"
  },
  "eventDate": "2019-01-02T01:00:00+01:00",
  "eventType": "ACCOUNT_HOLDER_STATUS_CHANGE",
  "executingUserKey": "executing-user-key",
  "live": false,
  "pspReference": "TSTPSPR0001",
  "content": {
    "accountHolderCode": "AH000001",
    "oldStatus": {
      "status": "Active",
      "statusReason": "Reason of status",
      "processingState": {
        "disabled": true,
        "disableReason": "Reason for disabled status",
        "processedFrom": {
          "currency": "EUR",
          "value": 10
        },
        "processedTo": {
          "currency": "EUR",
          "value": 100
        },
        "tierNumber": 2
      },
      "payoutState": {
        "allowPayout": false,
        "payoutLimit": {
          "currency": "EUR",
          "value": 1000
        },
        "disabled": true,
        "disableReason": "Reason for disabled status",
        "tierNumber": 2,
        "notAllowedReason": "Reason of not allowed"
      },
      "events": []
    },
    "newStatus": {
      "status": "Active",
      "statusReason": "Reason of status",
      "processingState": {
        "disabled": true,
        "disableReason": "Reason for disabled status",
        "processedFrom": {
          "currency": "EUR",
          "value": 10
        },
        "processedTo": {
          "currency": "EUR",
          "value": 100
        },
        "tierNumber": 2
      },
      "payoutState": {
        "allowPayout": false,
        "payoutLimit": {
          "currency": "EUR",
          "value": 1000
        },
        "disabled": true,
        "disableReason": "Reason for disabled status",
        "tierNumber": 2,
        "notAllowedReason": "Reason of not allowed"
      },
      "events": [
        {
          "AccountEvent": {
            "event": "InactivateAccount",
            "executionDate": "2019-01-01T01:00:00+01:00",
            "reason": "Reason of event"
          }
        }
      ]
    },
    "reason": "status change reason",
    "invalidFields": [
      {
        "errorCode": 1,
        "errorDescription": "Field is missing",
        "fieldType": {
          "field": "AccountHolderDetails.BusinessDetails.Shareholders.unknown",
          "fieldName": "unknown",
          "shareholderCode": "SH00001"
        }
      }
    ]
  }
}
```

<h3 id="account-holder-status-changed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountHolderStatusChangeNotification](#schemaaccountholderstatuschangenotification)|false|none|
|» content|body|[AccountHolderStatusChangeNotificationContent](#schemaaccountholderstatuschangenotificationcontent)|false|The details of the Account Holder status change.|
|» error|body|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|Error information of failed request. No value provided here if no error occurred on processing.|
|» eventDate|body|string(date-time)|true|The date and time when an event has been completed.|
|» eventType|body|string|true|The event type of the notification.|
|» executingUserKey|body|string|true|The user or process that has triggered the notification.|
|» live|body|boolean|true|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|» pspReference|body|string|true|The PSP reference of the request from which the notification originates.|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="account-holder-status-changed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[NotificationResponse](#schemanotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Store status changed

<a id="opIdpost-ACCOUNT_HOLDER_STORE_STATUS_CHANGE"></a>

`POST /ACCOUNT_HOLDER_STORE_STATUS_CHANGE`

Adyen sends this webhook when [the status of a store](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder__reqParam_accountHolderDetails-storeDetails-status) associated with an account holder is changed.

> Body parameter

```json
{
  "eventDate": "2019-12-16T10:38:15+01:00",
  "eventType": "ACCOUNT_HOLDER_STORE_STATUS_CHANGE",
  "executingUserKey": "Store Status Update",
  "live": false,
  "pspReference": "TSTPSPR0001",
  "content": {
    "accountHolderCode": "AH000001",
    "store": "x00x00x00-xx00-0xx0-x000-00xx00xx000000",
    "storeReference": "Ref#000001",
    "oldStatus": "Pending",
    "newStatus": "Active",
    "reason": "Store was successfully set up"
  }
}
```

<h3 id="store-status-changed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountHolderStoreStatusChangeNotification](#schemaaccountholderstorestatuschangenotification)|false|none|
|» content|body|[AccountHolderStoreStatusChangeNotificationContent](#schemaaccountholderstorestatuschangenotificationcontent)|false|The details of the Account Holder Store status change.|
|» error|body|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|Error information of failed request. No value provided here if no error occurred on processing.|
|» eventDate|body|string(date-time)|true|The date and time when an event has been completed.|
|» eventType|body|string|true|The event type of the notification.|
|» executingUserKey|body|string|true|The user or process that has triggered the notification.|
|» live|body|boolean|true|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|» pspReference|body|string|true|The PSP reference of the request from which the notification originates.|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="store-status-changed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[NotificationResponse](#schemanotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Upcoming deadline

<a id="opIdpost-ACCOUNT_HOLDER_UPCOMING_DEADLINE"></a>

`POST /ACCOUNT_HOLDER_UPCOMING_DEADLINE`

Adyen sends this notification when an account holder's deadline to fulfill the requirements of a specific event is coming up.

> Body parameter

```json
{
  "eventDate": "2019-09-25T09:52:28+02:00",
  "eventType": "ACCOUNT_HOLDER_UPCOMING_DEADLINE",
  "live": false,
  "pspReference": "9315693979482563",
  "content": {
    "accountHolderCode": "testD47",
    "event": "InactivateAccount",
    "executionDate": "2019-10-11",
    "reason": "Processed more than GBP 5000.00 or equivalent, deadline triggered"
  }
}
```

<h3 id="upcoming-deadline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountHolderUpcomingDeadlineNotification](#schemaaccountholderupcomingdeadlinenotification)|false|none|
|» content|body|[AccountHolderUpcomingDeadlineNotificationContent](#schemaaccountholderupcomingdeadlinenotificationcontent)|false|The details of the upcoming event.|
|» error|body|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|Error information of failed request. No value provided here if no error occurred on processing.|
|» eventDate|body|string(date-time)|true|The date and time when an event has been completed.|
|» eventType|body|string|true|The event type of the notification.|
|» executingUserKey|body|string|true|The user or process that has triggered the notification.|
|» live|body|boolean|true|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|» pspReference|body|string|true|The PSP reference of the request from which the notification originates.|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="upcoming-deadline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[NotificationResponse](#schemanotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Account holder updated

<a id="opIdpost-ACCOUNT_HOLDER_UPDATED"></a>

`POST /ACCOUNT_HOLDER_UPDATED`

Adyen sends this webhook when [an account holder is updated](https://docs.adyen.com/api-explorer/#/Account/latest/post/updateAccountHolder).

> Body parameter

```json
{
  "error": {
    "errorCode": "000",
    "message": "test error message"
  },
  "eventDate": "2019-01-01T01:00:00+01:00",
  "eventType": "ACCOUNT_CLOSED",
  "executingUserKey": "executing-user-key",
  "live": false,
  "pspReference": "TSTPSPR0001",
  "content": {
    "invalidFields": [
      {
        "errorCode": 1,
        "errorDescription": "Field is missing",
        "fieldType": {
          "field": "AccountHolderDetails.BusinessDetails.Shareholders.unknown",
          "fieldName": "unknown",
          "shareholderCode": "SH00001"
        }
      }
    ],
    "pspReference": "TSTPSPR0001",
    "resultCode": "Success",
    "status": "Closed"
  }
}
```

<h3 id="account-holder-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountHolderUpdateNotification](#schemaaccountholderupdatenotification)|false|none|
|» content|body|[UpdateAccountHolderResponse](#schemaupdateaccountholderresponse)|false|The details of the Account Holder update.|
|» error|body|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|Error information of failed request. No value provided here if no error occurred on processing.|
|» eventDate|body|string(date-time)|true|The date and time when an event has been completed.|
|» eventType|body|string|true|The event type of the notification.|
|» executingUserKey|body|string|true|The user or process that has triggered the notification.|
|» live|body|boolean|true|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|» pspReference|body|string|true|The PSP reference of the request from which the notification originates.|

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
|200|OK|OK - the request has succeeded.|[NotificationResponse](#schemanotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Verification results received

<a id="opIdpost-ACCOUNT_HOLDER_VERIFICATION"></a>

`POST /ACCOUNT_HOLDER_VERIFICATION`

Adyen sends this webhook when verification results are available.

> Body parameter

```json
{
  "error": {
    "errorCode": "000",
    "message": "test error message"
  },
  "eventDate": "2019-01-01T01:00:00+01:00",
  "eventType": "ACCOUNT_HOLDER_VERIFICATION",
  "executingUserKey": "executing-user-key",
  "live": false,
  "pspReference": "TSTPSPR0001",
  "content": {
    "accountHolderCode": "AH0000001",
    "payoutMethodCode": "00000000-0000-0000-0000-000000000000",
    "kycCheckStatusData": {
      "type": "IDENTITY_VERIFICATION",
      "status": "PENDING",
      "summary": {
        "kycCheckCode": 100,
        "kycCheckDescription": "KYC check summary description"
      },
      "requiredFields": [
        "field.missing"
      ]
    },
    "shareholderCode": "SH00000001"
  }
}
```

<h3 id="verification-results-received-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountHolderVerificationNotification](#schemaaccountholderverificationnotification)|false|none|
|» content|body|[AccountHolderVerificationNotificationContent](#schemaaccountholderverificationnotificationcontent)|false|The details of the Account Holder verification.|
|» error|body|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|Error information of failed request. No value provided here if no error occurred on processing.|
|» eventDate|body|string(date-time)|true|The date and time when an event has been completed.|
|» eventType|body|string|true|The event type of the notification.|
|» executingUserKey|body|string|true|The user or process that has triggered the notification.|
|» live|body|boolean|true|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|» pspReference|body|string|true|The PSP reference of the request from which the notification originates.|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="verification-results-received-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[NotificationResponse](#schemanotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Account updated

<a id="opIdpost-ACCOUNT_UPDATED"></a>

`POST /ACCOUNT_UPDATED`

Adyen sends this webhook when [an account is updated](https://docs.adyen.com/api-explorer/#/Account/latest/post/updateAccount).

> Body parameter

```json
{
  "error": {
    "errorCode": "000",
    "message": "test error message"
  },
  "eventDate": "2019-01-01T01:00:00+01:00",
  "eventType": "ACCOUNT_UPDATED",
  "executingUserKey": "executing-user-key",
  "live": false,
  "pspReference": "TSTPSPR0001",
  "content": {
    "invalidFields": [
      {
        "errorCode": 1,
        "errorDescription": "Field is missing",
        "fieldType": {
          "field": "AccountHolderDetails.BusinessDetails.Shareholders.unknown",
          "fieldName": "unknown",
          "shareholderCode": "SH00001"
        }
      }
    ],
    "pspReference": "TSTPSPR0001",
    "resultCode": "Success",
    "accountCode": "AC0000000001",
    "description": "account description",
    "metadata": {
      "MetaKey": "MetaValue"
    },
    "payoutSchedule": {
      "nextScheduledPayout": "1970-01-02T01:00:00+01:00",
      "schedule": "DAILY"
    }
  }
}
```

<h3 id="account-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountUpdateNotification](#schemaaccountupdatenotification)|false|none|
|» content|body|[UpdateAccountResponse](#schemaupdateaccountresponse)|false|The details of the Account update.|
|» error|body|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|Error information of failed request. No value provided here if no error occurred on processing.|
|» eventDate|body|string(date-time)|true|The date and time when an event has been completed.|
|» eventType|body|string|true|The event type of the notification.|
|» executingUserKey|body|string|true|The user or process that has triggered the notification.|
|» live|body|boolean|true|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|» pspReference|body|string|true|The PSP reference of the request from which the notification originates.|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="account-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[NotificationResponse](#schemanotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Beneficiary defined

<a id="opIdpost-BENEFICIARY_SETUP"></a>

`POST /BENEFICIARY_SETUP`

Adyen sends this notification when a [benefactor/beneficiary relationship is created](https://docs.adyen.com/api-explorer/#/Fund/latest/post/transferFunds).

> Body parameter

```json
{
  "error": {
    "errorCode": "000",
    "message": "test error message"
  },
  "eventDate": "2019-01-01T01:00:00+01:00",
  "eventType": "BENEFICIARY_SETUP",
  "executingUserKey": "executing-user-key",
  "live": false,
  "pspReference": "TSTPSPR0001",
  "content": {
    "destinationAccountCode": "AC00000001D",
    "destinationAccountHolderCode": "AH00000001D",
    "invalidFields": [
      {
        "errorCode": 1,
        "errorDescription": "Field is missing",
        "fieldType": {
          "field": "AccountHolderDetails.BusinessDetails.Shareholders.unknown",
          "fieldName": "unknown",
          "shareholderCode": "SH00001"
        }
      }
    ],
    "merchantReference": "MRef#000000001",
    "sourceAccountCode": "AC0000001S",
    "sourceAccountHolderCode": "AH000000001S",
    "transferDate": "1970-01-01T01:00:00+01:00"
  }
}
```

<h3 id="beneficiary-defined-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BeneficiarySetupNotification](#schemabeneficiarysetupnotification)|false|none|
|» content|body|[BeneficiarySetupNotificationContent](#schemabeneficiarysetupnotificationcontent)|false|Details of the beneficiary setup.|
|» error|body|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|Error information of failed request. No value provided here if no error occurred on processing.|
|» eventDate|body|string(date-time)|true|The date and time when an event has been completed.|
|» eventType|body|string|true|The event type of the notification.|
|» executingUserKey|body|string|true|The user or process that has triggered the notification.|
|» live|body|boolean|true|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|» pspReference|body|string|true|The PSP reference of the request from which the notification originates.|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="beneficiary-defined-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[NotificationResponse](#schemanotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Negative account balances compensated

<a id="opIdpost-COMPENSATE_NEGATIVE_BALANCE"></a>

`POST /COMPENSATE_NEGATIVE_BALANCE`

Adyen sends this notification when funds are transferred from your platform's liable account to an overdrawn account to compensate for the overdraft.

> Body parameter

```json
{
  "eventType": "COMPENSATE_NEGATIVE_BALANCE",
  "executingUserKey": "executing-user-key",
  "live": false,
  "pspReference": "TSTPSPR0001",
  "content": {
    "records": [
      {
        "accountCode": "AC000001",
        "amount": {
          "currency": "EUR",
          "value": 10
        },
        "transferDate": "1970-01-01T01:00:00+01:00"
      }
    ]
  }
}
```

<h3 id="negative-account-balances-compensated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CompensateNegativeBalanceNotification](#schemacompensatenegativebalancenotification)|false|none|
|» content|body|[CompensateNegativeBalanceNotificationContent](#schemacompensatenegativebalancenotificationcontent)|false|Details of the negative balance compensation.|
|» error|body|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|Error information of failed request. No value provided here if no error occurred on processing.|
|» eventDate|body|string(date-time)|true|The date and time when an event has been completed.|
|» eventType|body|string|true|The event type of the notification.|
|» executingUserKey|body|string|true|The user or process that has triggered the notification.|
|» live|body|boolean|true|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|» pspReference|body|string|true|The PSP reference of the request from which the notification originates.|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="negative-account-balances-compensated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[NotificationResponse](#schemanotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Automated direct debit initiated

<a id="opIdpost-DIRECT_DEBIT_INITIATED"></a>

`POST /DIRECT_DEBIT_INITIATED`

Adyen sends this notification when a [direct debit is initiated](https://docs.adyen.com/api-explorer/#/Fund/latest/post/debitAccountHolder).

> Body parameter

```json
{
  "error": {
    "errorCode": "000",
    "message": "test error message"
  },
  "eventDate": "2019-01-01T01:00:00+01:00",
  "eventType": "TRANSFER_FUNDS",
  "executingUserKey": "executing-user-key",
  "live": false,
  "pspReference": "TSTPSPR0001",
  "content": {
    "amount": {
      "currency": "EUR",
      "value": 10
    },
    "destinationAccountCode": "AC0000001D",
    "invalidFields": [
      {
        "errorCode": 1,
        "errorDescription": "Field is missing",
        "fieldType": {
          "field": "AccountHolderDetails.BusinessDetails.Shareholders.unknown",
          "fieldName": "unknown",
          "shareholderCode": "SH00001"
        }
      }
    ],
    "merchantReference": "MRef#000001",
    "sourceAccountCode": "AC0000001S",
    "status": {
      "message": {
        "code": "100",
        "text": "test message"
      },
      "statusCode": "Success"
    },
    "transferCode": "TC0001"
  }
}
```

<h3 id="automated-direct-debit-initiated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DirectDebitInitiatedNotification](#schemadirectdebitinitiatednotification)|false|none|
|» content|body|[DirectDebitInitiatedNotificationContent](#schemadirectdebitinitiatednotificationcontent)|false|Details of the direct debit.|
|» error|body|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|Error information of failed request. No value provided here if no error occurred on processing.|
|» eventDate|body|string(date-time)|true|The date and time when an event has been completed.|
|» eventType|body|string|true|The event type of the notification.|
|» executingUserKey|body|string|true|The user or process that has triggered the notification.|
|» live|body|boolean|true|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|» pspReference|body|string|true|The PSP reference of the request from which the notification originates.|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="automated-direct-debit-initiated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[NotificationResponse](#schemanotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Booking for a capture or refund failed

<a id="opIdpost-PAYMENT_FAILURE"></a>

`POST /PAYMENT_FAILURE`

Adyen sends this notification when a [split payment](https://docs.adyen.com/classic-platforms/processing-payments#providing-split-information) booking for a capture or refund fails. When a booking fails due to an invalid account status or an unknown `accountCode`, the funds are credited or debited to or fromyour platform's liable account instead of the account specified in the split data.

> Body parameter

```json
{
  "error": {
    "errorCode": "000",
    "message": "test error message"
  },
  "eventDate": "2019-01-01T01:00:00+01:00",
  "eventType": "TRANSFER_FUNDS",
  "executingUserKey": "executing-user-key",
  "live": false,
  "pspReference": "TSTPSPR0001",
  "content": {
    "amount": {
      "currency": "EUR",
      "value": 10
    },
    "destinationAccountCode": "AC0000001D",
    "invalidFields": [
      {
        "errorCode": 1,
        "errorDescription": "Field is missing",
        "fieldType": {
          "field": "AccountHolderDetails.BusinessDetails.Shareholders.unknown",
          "fieldName": "unknown",
          "shareholderCode": "SH00001"
        }
      }
    ],
    "merchantReference": "MRef#000001",
    "sourceAccountCode": "AC0000001S",
    "status": {
      "message": {
        "code": "100",
        "text": "test message"
      },
      "statusCode": "Success"
    },
    "transferCode": "TC0001"
  }
}
```

<h3 id="booking-for-a-capture-or-refund-failed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentFailureNotification](#schemapaymentfailurenotification)|false|none|
|» content|body|[PaymentFailureNotificationContent](#schemapaymentfailurenotificationcontent)|false|The details of the payment failure.|
|» error|body|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|Error information of failed request. No value provided here if no error occurred on processing.|
|» eventDate|body|string(date-time)|true|The date and time when an event has been completed.|
|» eventType|body|string|true|The event type of the notification.|
|» executingUserKey|body|string|true|The user or process that has triggered the notification.|
|» live|body|boolean|true|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|» pspReference|body|string|true|The PSP reference of the request from which the notification originates.|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="booking-for-a-capture-or-refund-failed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[NotificationResponse](#schemanotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Funds transfer between accounts refunded

<a id="opIdpost-REFUND_FUNDS_TRANSFER"></a>

`POST /REFUND_FUNDS_TRANSFER`

Adyen sends this notification when [funds transferred between accounts are refunded](https://docs.adyen.com/api-explorer/#/Fund/v6/latest/refundFundsTransfer).

> Body parameter

```json
{
  "error": {
    "errorCode": "000",
    "message": "test error message"
  },
  "eventDate": "2019-01-01T01:00:00+01:00",
  "eventType": "TRANSFER_FUNDS",
  "executingUserKey": "executing-user-key",
  "live": false,
  "pspReference": "TSTPSPR0001",
  "content": {
    "amount": {
      "currency": "EUR",
      "value": 10
    },
    "destinationAccountCode": "AC0000001D",
    "invalidFields": [
      {
        "errorCode": 1,
        "errorDescription": "Field is missing",
        "fieldType": {
          "field": "AccountHolderDetails.BusinessDetails.Shareholders.unknown",
          "fieldName": "unknown",
          "shareholderCode": "SH00001"
        }
      }
    ],
    "merchantReference": "MRef#000001",
    "sourceAccountCode": "AC0000001S",
    "status": {
      "message": {
        "code": "100",
        "text": "test message"
      },
      "statusCode": "Success"
    },
    "transferCode": "TC0001"
  }
}
```

<h3 id="funds-transfer-between-accounts-refunded-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RefundFundsTransferNotification](#schemarefundfundstransfernotification)|false|none|
|» content|body|[RefundFundsTransferNotificationContent](#schemarefundfundstransfernotificationcontent)|false|Details of the fund transfer refund.|
|» error|body|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|Error information of failed request. No value provided here if no error occurred on processing.|
|» eventDate|body|string(date-time)|true|The date and time when an event has been completed.|
|» eventType|body|string|true|The event type of the notification.|
|» executingUserKey|body|string|true|The user or process that has triggered the notification.|
|» live|body|boolean|true|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|» pspReference|body|string|true|The PSP reference of the request from which the notification originates.|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="funds-transfer-between-accounts-refunded-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[NotificationResponse](#schemanotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Report available

<a id="opIdpost-REPORT_AVAILABLE"></a>

`POST /REPORT_AVAILABLE`

Adyen sends this notification when a report has been generated and it is available for download.

> Body parameter

```json
{
  "error": {
    "errorCode": "000",
    "message": "test error message"
  },
  "eventDate": "2019-01-01T01:00:00+01:00",
  "eventType": "TRANSFER_FUNDS",
  "executingUserKey": "executing-user-key",
  "live": false,
  "pspReference": "TSTPSPR0001",
  "content": {
    "amount": {
      "currency": "EUR",
      "value": 10
    },
    "destinationAccountCode": "AC0000001D",
    "invalidFields": [
      {
        "errorCode": 1,
        "errorDescription": "Field is missing",
        "fieldType": {
          "field": "AccountHolderDetails.BusinessDetails.Shareholders.unknown",
          "fieldName": "unknown",
          "shareholderCode": "SH00001"
        }
      }
    ],
    "merchantReference": "MRef#000001",
    "sourceAccountCode": "AC0000001S",
    "status": {
      "message": {
        "code": "100",
        "text": "test message"
      },
      "statusCode": "Success"
    },
    "transferCode": "TC0001"
  }
}
```

<h3 id="report-available-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReportAvailableNotification](#schemareportavailablenotification)|false|none|
|» content|body|[ReportAvailableNotificationContent](#schemareportavailablenotificationcontent)|false|Details of the report.|
|» error|body|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|Error information of failed request. No value provided here if no error occurred on processing.|
|» eventDate|body|string(date-time)|true|The date and time when an event has been completed.|
|» eventType|body|string|true|The event type of the notification.|
|» executingUserKey|body|string|true|The user or process that has triggered the notification.|
|» live|body|boolean|true|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|» pspReference|body|string|true|The PSP reference of the request from which the notification originates.|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="report-available-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[NotificationResponse](#schemanotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## 'Refund Transfers Not Paid Out' call processed and refunds scheduled

<a id="opIdpost-SCHEDULED_REFUNDS"></a>

`POST /SCHEDULED_REFUNDS`

Adyen sends this notification when a request to [refund transfers that are not yet paid out](https://docs.adyen.com/api-explorer/#/Fund/latest/refundNotPaidOutTransfers) is processed and the associated refunds are scheduled.

> Body parameter

```json
{
  "eventType": "SCHEDULED_REFUNDS",
  "executingUserKey": "executing-user-key",
  "live": false,
  "pspReference": "TSTPSPR0001",
  "content": {
    "accountCode": "AC000001",
    "accountHolderCode": "AH000001",
    "lastPayout": {
      "amount": {
        "currency": "EUR",
        "value": 10
      },
      "bankAccountDetail": {
        "accountNumber": "00000000",
        "accountType": "checking",
        "bankAccountName": "Account name",
        "bankAccountUUID": "00000000-0000-0000-0000-000000000000",
        "bankBicSwift": "BSWFT",
        "bankCity": "Amsterdam",
        "bankCode": "00000000",
        "bankName": "Bank Name Co",
        "branchCode": "00000000",
        "checkCode": "1234",
        "countryCode": "NL",
        "currencyCode": "EUR",
        "iban": "NL00NONE1234123412",
        "ownerCity": "Amsterdam",
        "ownerCountryCode": "NL",
        "ownerDateOfBirth": "1981-02-27",
        "ownerHouseNumberOrName": "32/B",
        "ownerName": "Owner Name",
        "ownerNationality": "NL",
        "ownerPostalCode": "1000AA",
        "ownerState": "NH",
        "ownerStreet": "Owner Street",
        "primaryAccount": false,
        "taxId": "OT#12345",
        "urlForVerification": "http://adyen.com"
      },
      "captureMerchantReference": "MRef0000001C",
      "capturePspReference": "TSTPSPR00000001C",
      "creationDate": "1970-01-01T01:00:00+01:00",
      "description": "transaction description",
      "destinationAccountCode": "AC0000001D",
      "disputePspReference": "TSTPSPR00000000D",
      "disputeReasonCode": "DRC001",
      "merchantReference": "MRef#00000001",
      "paymentPspReference": "TSTPSPR0000000PO",
      "payoutPspReference": "TSTPSPR000000PI",
      "pspReference": "TSTPSPR000000001",
      "sourceAccountCode": "AC00000001S",
      "transactionStatus": "Debited",
      "transferCode": "TC0001"
    },
    "refundResults": [
      {
        "originalTransaction": {
          "amount": {
            "currency": "EUR",
            "value": 10
          },
          "bankAccountDetail": {
            "accountNumber": "00000000",
            "accountType": "checking",
            "bankAccountName": "Account name",
            "bankAccountUUID": "00000000-0000-0000-0000-000000000000",
            "bankBicSwift": "BSWFT",
            "bankCity": "Amsterdam",
            "bankCode": "00000000",
            "bankName": "Bank Name Co",
            "branchCode": "00000000",
            "checkCode": "1234",
            "countryCode": "NL",
            "currencyCode": "EUR",
            "iban": "NL00NONE1234123412",
            "ownerCity": "Amsterdam",
            "ownerCountryCode": "NL",
            "ownerDateOfBirth": "1981-02-27",
            "ownerHouseNumberOrName": "32/B",
            "ownerName": "Owner Name",
            "ownerNationality": "NL",
            "ownerPostalCode": "1000AA",
            "ownerState": "NH",
            "ownerStreet": "Owner Street",
            "primaryAccount": false,
            "taxId": "OT#12345",
            "urlForVerification": "http://adyen.com"
          },
          "captureMerchantReference": "MRef0000001C",
          "capturePspReference": "TSTPSPR00000001C",
          "creationDate": "1970-01-01T01:00:00+01:00",
          "description": "transaction description",
          "destinationAccountCode": "AC0000001D",
          "disputePspReference": "TSTPSPR00000000D",
          "disputeReasonCode": "DRC001",
          "merchantReference": "MRef#00000001",
          "paymentPspReference": "TSTPSPR0000000PO",
          "payoutPspReference": "TSTPSPR000000PI",
          "pspReference": "TSTPSPR000000001",
          "sourceAccountCode": "AC00000001S",
          "transactionStatus": "Debited",
          "transferCode": "TC0001"
        },
        "pspReference": "TSTPSPR00000001",
        "response": "response"
      }
    ]
  }
}
```

<h3 id="refund-transfers-not-paid-out-call-processed-and-refunds-scheduled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ScheduledRefundsNotification](#schemascheduledrefundsnotification)|false|none|
|» content|body|[ScheduledRefundsNotificationContent](#schemascheduledrefundsnotificationcontent)|false|Details of the scheduling of the refunds.|
|» error|body|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|Error information of failed request. No value provided here if no error occurred on processing.|
|» eventDate|body|string(date-time)|true|The date and time when an event has been completed.|
|» eventType|body|string|true|The event type of the notification.|
|» executingUserKey|body|string|true|The user or process that has triggered the notification.|
|» live|body|boolean|true|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|» pspReference|body|string|true|The PSP reference of the request from which the notification originates.|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="refund-transfers-not-paid-out-call-processed-and-refunds-scheduled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[NotificationResponse](#schemanotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Funds transferred between accounts

<a id="opIdpost-TRANSFER_FUNDS"></a>

`POST /TRANSFER_FUNDS`

Adyen sends this notification when [funds are transferred between accounts](https://docs.adyen.com/api-explorer/#/Fund/latest/post/transferFunds).

> Body parameter

```json
{
  "error": {
    "errorCode": "000",
    "message": "test error message"
  },
  "eventDate": "2019-01-01T01:00:00+01:00",
  "eventType": "TRANSFER_FUNDS",
  "executingUserKey": "executing-user-key",
  "live": false,
  "pspReference": "TSTPSPR0001",
  "content": {
    "amount": {
      "currency": "EUR",
      "value": 10
    },
    "destinationAccountCode": "AC0000001D",
    "invalidFields": [
      {
        "errorCode": 1,
        "errorDescription": "Field is missing",
        "fieldType": {
          "field": "AccountHolderDetails.BusinessDetails.Shareholders.unknown",
          "fieldName": "unknown",
          "shareholderCode": "SH00001"
        }
      }
    ],
    "merchantReference": "MRef#000001",
    "sourceAccountCode": "AC0000001S",
    "status": {
      "message": {
        "code": "100",
        "text": "test message"
      },
      "statusCode": "Success"
    },
    "transferCode": "TC0001"
  }
}
```

<h3 id="funds-transferred-between-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TransferFundsNotification](#schematransferfundsnotification)|false|none|
|» content|body|[TransferFundsNotificationContent](#schematransferfundsnotificationcontent)|false|Details of the fund transfer.|
|» error|body|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|Error information of failed request. No value provided here if no error occurred on processing.|
|» eventDate|body|string(date-time)|true|The date and time when an event has been completed.|
|» eventType|body|string|true|The event type of the notification.|
|» executingUserKey|body|string|true|The user or process that has triggered the notification.|
|» live|body|boolean|true|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|» pspReference|body|string|true|The PSP reference of the request from which the notification originates.|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="funds-transferred-between-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[NotificationResponse](#schemanotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

# Schemas

<h2 id="tocS_AccountCloseNotification">AccountCloseNotification</h2>
<!-- backwards compatibility -->
<a id="schemaaccountclosenotification"></a>
<a id="schema_AccountCloseNotification"></a>
<a id="tocSaccountclosenotification"></a>
<a id="tocsaccountclosenotification"></a>

```json
{
  "content": {
    "accountCode": "string",
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
    "resultCode": "string",
    "status": "Active"
  },
  "error": {
    "errorCode": "string",
    "message": "string"
  },
  "eventDate": "1970-01-01T00:00:00Z",
  "eventType": "string",
  "executingUserKey": "string",
  "live": true,
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[CloseAccountResponse](#schemacloseaccountresponse)|false|none|The details of the Account update.|
|error|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|none|Error information of failed request. No value provided here if no error occurred on processing.|
|eventDate|string(date-time)|true|none|The date and time when an event has been completed.|
|eventType|string|true|none|The event type of the notification.|
|executingUserKey|string|true|none|The user or process that has triggered the notification.|
|live|boolean|true|none|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|pspReference|string|true|none|The PSP reference of the request from which the notification originates.|

<h2 id="tocS_AccountCreateNotification">AccountCreateNotification</h2>
<!-- backwards compatibility -->
<a id="schemaaccountcreatenotification"></a>
<a id="schema_AccountCreateNotification"></a>
<a id="tocSaccountcreatenotification"></a>
<a id="tocsaccountcreatenotification"></a>

```json
{
  "content": {
    "accountCode": "string",
    "accountHolderCode": "string",
    "bankAccountUUID": "string",
    "description": "string",
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
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "payoutMethodCode": "string",
    "payoutSchedule": {
      "nextScheduledPayout": "1970-01-01T00:00:00Z",
      "schedule": "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"
    },
    "payoutSpeed": "INSTANT",
    "pspReference": "string",
    "resultCode": "string",
    "status": "Active"
  },
  "error": {
    "errorCode": "string",
    "message": "string"
  },
  "eventDate": "1970-01-01T00:00:00Z",
  "eventType": "string",
  "executingUserKey": "string",
  "live": true,
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[CreateAccountResponse](#schemacreateaccountresponse)|false|none|The details of the account creation.|
|error|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|none|Error information of failed request. No value provided here if no error occurred on processing.|
|eventDate|string(date-time)|true|none|The date and time when an event has been completed.|
|eventType|string|true|none|The event type of the notification.|
|executingUserKey|string|true|none|The user or process that has triggered the notification.|
|live|boolean|true|none|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|pspReference|string|true|none|The PSP reference of the request from which the notification originates.|

<h2 id="tocS_AccountEvent">AccountEvent</h2>
<!-- backwards compatibility -->
<a id="schemaaccountevent"></a>
<a id="schema_AccountEvent"></a>
<a id="tocSaccountevent"></a>
<a id="tocsaccountevent"></a>

```json
{
  "event": "InactivateAccount",
  "executionDate": "1970-01-01T00:00:00Z",
  "reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|string|false|none|The event.<br>>Permitted values: `InactivateAccount`, `RefundNotPaidOutTransfers`.<br>For more information, refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-process).|
|executionDate|string(date-time)|false|none|The date on which the event will take place.|
|reason|string|false|none|The reason why this event has been created.|

#### Enumerated Values

|Property|Value|
|---|---|
|event|InactivateAccount|
|event|RefundNotPaidOutTransfers|

<h2 id="tocS_AccountFundsBelowThresholdNotification">AccountFundsBelowThresholdNotification</h2>
<!-- backwards compatibility -->
<a id="schemaaccountfundsbelowthresholdnotification"></a>
<a id="schema_AccountFundsBelowThresholdNotification"></a>
<a id="tocSaccountfundsbelowthresholdnotification"></a>
<a id="tocsaccountfundsbelowthresholdnotification"></a>

```json
{
  "content": {
    "accountCode": "string",
    "balanceDate": {
      "month": 0,
      "year": 0
    },
    "currentFunds": {
      "currency": "str",
      "value": 0
    },
    "fundThreshold": {
      "currency": "str",
      "value": 0
    },
    "merchantAccountCode": "string"
  },
  "error": {
    "errorCode": "string",
    "message": "string"
  },
  "eventDate": "1970-01-01T00:00:00Z",
  "eventType": "string",
  "executingUserKey": "string",
  "live": true,
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[AccountFundsBelowThresholdNotificationContent](#schemaaccountfundsbelowthresholdnotificationcontent)|false|none|Details of the liable account with funds under threshold.|
|error|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|none|Error information of failed request. No value provided here if no error occurred on processing.|
|eventDate|string(date-time)|true|none|The date and time when an event has been completed.|
|eventType|string|true|none|The event type of the notification.|
|executingUserKey|string|true|none|The user or process that has triggered the notification.|
|live|boolean|true|none|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|pspReference|string|true|none|The PSP reference of the request from which the notification originates.|

<h2 id="tocS_AccountFundsBelowThresholdNotificationContent">AccountFundsBelowThresholdNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemaaccountfundsbelowthresholdnotificationcontent"></a>
<a id="schema_AccountFundsBelowThresholdNotificationContent"></a>
<a id="tocSaccountfundsbelowthresholdnotificationcontent"></a>
<a id="tocsaccountfundsbelowthresholdnotificationcontent"></a>

```json
{
  "accountCode": "string",
  "balanceDate": {
    "month": 0,
    "year": 0
  },
  "currentFunds": {
    "currency": "str",
    "value": 0
  },
  "fundThreshold": {
    "currency": "str",
    "value": 0
  },
  "merchantAccountCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|false|none|The code of the account with funds under threshold|
|balanceDate|[LocalDate](#schemalocaldate)|false|none|The date of the funds were found to be below threshold.|
|currentFunds|[Amount](#schemaamount)|false|none|The current funds in the liable account.|
|fundThreshold|[Amount](#schemaamount)|true|none|The configured fund threshold for the liable account|
|merchantAccountCode|string|true|none|The code of the merchant account.|

<h2 id="tocS_AccountHolderCreateNotification">AccountHolderCreateNotification</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholdercreatenotification"></a>
<a id="schema_AccountHolderCreateNotification"></a>
<a id="tocSaccountholdercreatenotification"></a>
<a id="tocsaccountholdercreatenotification"></a>

```json
{
  "content": {
    "accountCode": "string",
    "accountHolderCode": "string",
    "accountHolderDetails": {
      "address": {
        "city": "string",
        "country": "string",
        "houseNumberOrName": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "bankAccountDetails": [
        {
          "accountNumber": "string",
          "accountType": "string",
          "bankAccountName": "string",
          "bankAccountReference": "string",
          "bankAccountUUID": "string",
          "bankBicSwift": "string",
          "bankCity": "string",
          "bankCode": "string",
          "bankName": "string",
          "branchCode": "string",
          "checkCode": "string",
          "countryCode": "string",
          "currencyCode": "string",
          "iban": "string",
          "ownerCity": "string",
          "ownerCountryCode": "string",
          "ownerDateOfBirth": "string",
          "ownerHouseNumberOrName": "string",
          "ownerName": "string",
          "ownerNationality": "string",
          "ownerPostalCode": "string",
          "ownerState": "string",
          "ownerStreet": "string",
          "primaryAccount": true,
          "taxId": "string",
          "urlForVerification": "string"
        }
      ],
      "bankAggregatorDataReference": "string",
      "businessDetails": {
        "doingBusinessAs": "string",
        "legalBusinessName": "string",
        "listedUltimateParentCompany": [
          {
            "address": {
              "city": "string",
              "country": "string",
              "houseNumberOrName": "string",
              "postalCode": "string",
              "stateOrProvince": "string",
              "street": "string"
            },
            "businessDetails": {
              "legalBusinessName": "string",
              "registrationNumber": "string",
              "stockExchange": "string",
              "stockNumber": "string",
              "stockTicker": "string"
            },
            "ultimateParentCompanyCode": "string"
          }
        ],
        "registrationNumber": "string",
        "shareholders": [
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
            "fullPhoneNumber": "string",
            "jobTitle": "string",
            "name": {
              "firstName": "string",
              "gender": "MALE",
              "infix": "string",
              "lastName": "string"
            },
            "personalData": {
              "dateOfBirth": "string",
              "documentData": [
                {
                  "expirationDate": "string",
                  "issuerCountry": "st",
                  "issuerState": "string",
                  "number": "string",
                  "type": "DRIVINGLICENSE"
                }
              ],
              "nationality": "st"
            },
            "phoneNumber": {
              "phoneCountryCode": "string",
              "phoneNumber": "string",
              "phoneType": "Fax"
            },
            "shareholderCode": "string",
            "shareholderReference": "string",
            "shareholderType": "Controller",
            "webAddress": "string"
          }
        ],
        "signatories": [
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
            "fullPhoneNumber": "string",
            "jobTitle": "string",
            "name": {
              "firstName": "string",
              "gender": "MALE",
              "infix": "string",
              "lastName": "string"
            },
            "personalData": {
              "dateOfBirth": "string",
              "documentData": [
                {
                  "expirationDate": "string",
                  "issuerCountry": "st",
                  "issuerState": "string",
                  "number": "string",
                  "type": "DRIVINGLICENSE"
                }
              ],
              "nationality": "st"
            },
            "phoneNumber": {
              "phoneCountryCode": "string",
              "phoneNumber": "string",
              "phoneType": "Fax"
            },
            "signatoryCode": "string",
            "signatoryReference": "string",
            "webAddress": "string"
          }
        ],
        "stockExchange": "string",
        "stockNumber": "string",
        "stockTicker": "string",
        "taxId": "string"
      },
      "email": "string",
      "fullPhoneNumber": "string",
      "individualDetails": {
        "name": {
          "firstName": "string",
          "gender": "MALE",
          "infix": "string",
          "lastName": "string"
        },
        "personalData": {
          "dateOfBirth": "string",
          "documentData": [
            {
              "expirationDate": "string",
              "issuerCountry": "st",
              "issuerState": "string",
              "number": "string",
              "type": "DRIVINGLICENSE"
            }
          ],
          "nationality": "st"
        }
      },
      "lastReviewDate": "string",
      "legalArrangements": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "legalArrangementCode": "string",
          "legalArrangementEntities": [
            {
              "address": {
                "city": "string",
                "country": "string",
                "houseNumberOrName": "string",
                "postalCode": "string",
                "stateOrProvince": "string",
                "street": "string"
              },
              "businessDetails": {
                "doingBusinessAs": "string",
                "legalBusinessName": "string",
                "listedUltimateParentCompany": [
                  {
                    "address": {
                      "city": "string",
                      "country": "string",
                      "houseNumberOrName": "string",
                      "postalCode": "string",
                      "stateOrProvince": "string",
                      "street": "string"
                    },
                    "businessDetails": {
                      "legalBusinessName": "string",
                      "registrationNumber": "string",
                      "stockExchange": "string",
                      "stockNumber": "string",
                      "stockTicker": "string"
                    },
                    "ultimateParentCompanyCode": "string"
                  }
                ],
                "registrationNumber": "string",
                "shareholders": [
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
                    "fullPhoneNumber": "string",
                    "jobTitle": "string",
                    "name": {
                      "firstName": "string",
                      "gender": "MALE",
                      "infix": "string",
                      "lastName": "string"
                    },
                    "personalData": {
                      "dateOfBirth": "string",
                      "documentData": [
                        {
                          "expirationDate": "string",
                          "issuerCountry": "st",
                          "issuerState": "string",
                          "number": "string",
                          "type": "DRIVINGLICENSE"
                        }
                      ],
                      "nationality": "st"
                    },
                    "phoneNumber": {
                      "phoneCountryCode": "string",
                      "phoneNumber": "string",
                      "phoneType": "Fax"
                    },
                    "shareholderCode": "string",
                    "shareholderReference": "string",
                    "shareholderType": "Controller",
                    "webAddress": "string"
                  }
                ],
                "signatories": [
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
                    "fullPhoneNumber": "string",
                    "jobTitle": "string",
                    "name": {
                      "firstName": "string",
                      "gender": "MALE",
                      "infix": "string",
                      "lastName": "string"
                    },
                    "personalData": {
                      "dateOfBirth": "string",
                      "documentData": [
                        {
                          "expirationDate": "string",
                          "issuerCountry": "st",
                          "issuerState": "string",
                          "number": "string",
                          "type": "DRIVINGLICENSE"
                        }
                      ],
                      "nationality": "st"
                    },
                    "phoneNumber": {
                      "phoneCountryCode": "string",
                      "phoneNumber": "string",
                      "phoneType": "Fax"
                    },
                    "signatoryCode": "string",
                    "signatoryReference": "string",
                    "webAddress": "string"
                  }
                ],
                "stockExchange": "string",
                "stockNumber": "string",
                "stockTicker": "string",
                "taxId": "string"
              },
              "email": "string",
              "fullPhoneNumber": "string",
              "individualDetails": {
                "name": {
                  "firstName": "string",
                  "gender": "MALE",
                  "infix": "string",
                  "lastName": "string"
                },
                "personalData": {
                  "dateOfBirth": "string",
                  "documentData": [
                    {
                      "expirationDate": "string",
                      "issuerCountry": "st",
                      "issuerState": "string",
                      "number": "string",
                      "type": "DRIVINGLICENSE"
                    }
                  ],
                  "nationality": "st"
                }
              },
              "legalArrangementEntityCode": "string",
              "legalArrangementEntityReference": "string",
              "legalArrangementMembers": [
                "Beneficiary"
              ],
              "legalEntityType": "Business",
              "phoneNumber": {
                "phoneCountryCode": "string",
                "phoneNumber": "string",
                "phoneType": "Fax"
              },
              "webAddress": "string"
            }
          ],
          "legalArrangementReference": "string",
          "legalForm": "CashManagementTrust",
          "name": "string",
          "registrationNumber": "string",
          "taxNumber": "string",
          "type": "Association"
        }
      ],
      "merchantCategoryCode": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "payoutMethods": [
        {
          "merchantAccount": "string",
          "payoutMethodCode": "string",
          "payoutMethodReference": "string",
          "recurringDetailReference": "string",
          "shopperReference": "string"
        }
      ],
      "phoneNumber": {
        "phoneCountryCode": "string",
        "phoneNumber": "string",
        "phoneType": "Fax"
      },
      "principalBusinessAddress": {
        "city": "string",
        "country": "string",
        "houseNumberOrName": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "storeDetails": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "fullPhoneNumber": "string",
          "logo": "string",
          "merchantAccount": "string",
          "merchantCategoryCode": "string",
          "merchantHouseNumber": "string",
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "shopperInteraction": "Ecommerce",
          "splitConfigurationUUID": "string",
          "status": "Active",
          "store": "string",
          "storeName": "string",
          "storeReference": "string",
          "virtualAccount": "string",
          "webAddress": "string"
        }
      ],
      "webAddress": "string"
    },
    "accountHolderStatus": {
      "events": [
        {
          "event": "InactivateAccount",
          "executionDate": "1970-01-01T00:00:00Z",
          "reason": "string"
        }
      ],
      "payoutState": {
        "allowPayout": true,
        "disableReason": "string",
        "disabled": true,
        "notAllowedReason": "string",
        "payoutLimit": {
          "currency": "str",
          "value": 0
        },
        "tierNumber": 0
      },
      "processingState": {
        "disableReason": "string",
        "disabled": true,
        "processedFrom": {
          "currency": "str",
          "value": 0
        },
        "processedTo": {
          "currency": "str",
          "value": 0
        },
        "tierNumber": 0
      },
      "status": "Active",
      "statusReason": "string"
    },
    "description": "string",
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
    "legalEntity": "Business",
    "primaryCurrency": "string",
    "pspReference": "string",
    "resultCode": "string",
    "verification": {
      "accountHolder": {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ]
      },
      "legalArrangements": [
        {
          "checks": [
            {
              "requiredFields": [
                "string"
              ],
              "status": "AWAITING_DATA",
              "summary": {
                "kycCheckCode": 0,
                "kycCheckDescription": "string"
              },
              "type": "BANK_ACCOUNT_VERIFICATION"
            }
          ],
          "legalArrangementCode": "string"
        }
      ],
      "legalArrangementsEntities": [
        {
          "checks": [
            {
              "requiredFields": [
                "string"
              ],
              "status": "AWAITING_DATA",
              "summary": {
                "kycCheckCode": 0,
                "kycCheckDescription": "string"
              },
              "type": "BANK_ACCOUNT_VERIFICATION"
            }
          ],
          "legalArrangementCode": "string",
          "legalArrangementEntityCode": "string"
        }
      ],
      "payoutMethods": [
        {
          "checks": [
            {
              "requiredFields": [
                "string"
              ],
              "status": "AWAITING_DATA",
              "summary": {
                "kycCheckCode": 0,
                "kycCheckDescription": "string"
              },
              "type": "BANK_ACCOUNT_VERIFICATION"
            }
          ],
          "payoutMethodCode": "string"
        }
      ],
      "shareholders": [
        {
          "checks": [
            {
              "requiredFields": [
                "string"
              ],
              "status": "AWAITING_DATA",
              "summary": {
                "kycCheckCode": 0,
                "kycCheckDescription": "string"
              },
              "type": "BANK_ACCOUNT_VERIFICATION"
            }
          ],
          "legalArrangementCode": "string",
          "legalArrangementEntityCode": "string",
          "shareholderCode": "string"
        }
      ],
      "signatories": [
        {
          "checks": [
            {
              "requiredFields": [
                "string"
              ],
              "status": "AWAITING_DATA",
              "summary": {
                "kycCheckCode": 0,
                "kycCheckDescription": "string"
              },
              "type": "BANK_ACCOUNT_VERIFICATION"
            }
          ],
          "signatoryCode": "string"
        }
      ],
      "ultimateParentCompany": [
        {
          "checks": [
            {
              "requiredFields": [
                "string"
              ],
              "status": "AWAITING_DATA",
              "summary": {
                "kycCheckCode": 0,
                "kycCheckDescription": "string"
              },
              "type": "BANK_ACCOUNT_VERIFICATION"
            }
          ],
          "ultimateParentCompanyCode": "string"
        }
      ]
    },
    "verificationProfile": "string"
  },
  "error": {
    "errorCode": "string",
    "message": "string"
  },
  "eventDate": "1970-01-01T00:00:00Z",
  "eventType": "string",
  "executingUserKey": "string",
  "live": true,
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[CreateAccountHolderResponse](#schemacreateaccountholderresponse)|false|none|The details of the account holder creation.|
|error|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|none|Error information of failed request. No value provided here if no error occurred on processing.|
|eventDate|string(date-time)|true|none|The date and time when an event has been completed.|
|eventType|string|true|none|The event type of the notification.|
|executingUserKey|string|true|none|The user or process that has triggered the notification.|
|live|boolean|true|none|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|pspReference|string|true|none|The PSP reference of the request from which the notification originates.|

<h2 id="tocS_AccountHolderDetails">AccountHolderDetails</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholderdetails"></a>
<a id="schema_AccountHolderDetails"></a>
<a id="tocSaccountholderdetails"></a>
<a id="tocsaccountholderdetails"></a>

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
  "bankAccountDetails": [
    {
      "accountNumber": "string",
      "accountType": "string",
      "bankAccountName": "string",
      "bankAccountReference": "string",
      "bankAccountUUID": "string",
      "bankBicSwift": "string",
      "bankCity": "string",
      "bankCode": "string",
      "bankName": "string",
      "branchCode": "string",
      "checkCode": "string",
      "countryCode": "string",
      "currencyCode": "string",
      "iban": "string",
      "ownerCity": "string",
      "ownerCountryCode": "string",
      "ownerDateOfBirth": "string",
      "ownerHouseNumberOrName": "string",
      "ownerName": "string",
      "ownerNationality": "string",
      "ownerPostalCode": "string",
      "ownerState": "string",
      "ownerStreet": "string",
      "primaryAccount": true,
      "taxId": "string",
      "urlForVerification": "string"
    }
  ],
  "bankAggregatorDataReference": "string",
  "businessDetails": {
    "doingBusinessAs": "string",
    "legalBusinessName": "string",
    "listedUltimateParentCompany": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "businessDetails": {
          "legalBusinessName": "string",
          "registrationNumber": "string",
          "stockExchange": "string",
          "stockNumber": "string",
          "stockTicker": "string"
        },
        "ultimateParentCompanyCode": "string"
      }
    ],
    "registrationNumber": "string",
    "shareholders": [
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
        "fullPhoneNumber": "string",
        "jobTitle": "string",
        "name": {
          "firstName": "string",
          "gender": "MALE",
          "infix": "string",
          "lastName": "string"
        },
        "personalData": {
          "dateOfBirth": "string",
          "documentData": [
            {
              "expirationDate": "string",
              "issuerCountry": "st",
              "issuerState": "string",
              "number": "string",
              "type": "DRIVINGLICENSE"
            }
          ],
          "nationality": "st"
        },
        "phoneNumber": {
          "phoneCountryCode": "string",
          "phoneNumber": "string",
          "phoneType": "Fax"
        },
        "shareholderCode": "string",
        "shareholderReference": "string",
        "shareholderType": "Controller",
        "webAddress": "string"
      }
    ],
    "signatories": [
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
        "fullPhoneNumber": "string",
        "jobTitle": "string",
        "name": {
          "firstName": "string",
          "gender": "MALE",
          "infix": "string",
          "lastName": "string"
        },
        "personalData": {
          "dateOfBirth": "string",
          "documentData": [
            {
              "expirationDate": "string",
              "issuerCountry": "st",
              "issuerState": "string",
              "number": "string",
              "type": "DRIVINGLICENSE"
            }
          ],
          "nationality": "st"
        },
        "phoneNumber": {
          "phoneCountryCode": "string",
          "phoneNumber": "string",
          "phoneType": "Fax"
        },
        "signatoryCode": "string",
        "signatoryReference": "string",
        "webAddress": "string"
      }
    ],
    "stockExchange": "string",
    "stockNumber": "string",
    "stockTicker": "string",
    "taxId": "string"
  },
  "email": "string",
  "fullPhoneNumber": "string",
  "individualDetails": {
    "name": {
      "firstName": "string",
      "gender": "MALE",
      "infix": "string",
      "lastName": "string"
    },
    "personalData": {
      "dateOfBirth": "string",
      "documentData": [
        {
          "expirationDate": "string",
          "issuerCountry": "st",
          "issuerState": "string",
          "number": "string",
          "type": "DRIVINGLICENSE"
        }
      ],
      "nationality": "st"
    }
  },
  "lastReviewDate": "string",
  "legalArrangements": [
    {
      "address": {
        "city": "string",
        "country": "string",
        "houseNumberOrName": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "legalArrangementCode": "string",
      "legalArrangementEntities": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "businessDetails": {
            "doingBusinessAs": "string",
            "legalBusinessName": "string",
            "listedUltimateParentCompany": [
              {
                "address": {
                  "city": "string",
                  "country": "string",
                  "houseNumberOrName": "string",
                  "postalCode": "string",
                  "stateOrProvince": "string",
                  "street": "string"
                },
                "businessDetails": {
                  "legalBusinessName": "string",
                  "registrationNumber": "string",
                  "stockExchange": "string",
                  "stockNumber": "string",
                  "stockTicker": "string"
                },
                "ultimateParentCompanyCode": "string"
              }
            ],
            "registrationNumber": "string",
            "shareholders": [
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
                "fullPhoneNumber": "string",
                "jobTitle": "string",
                "name": {
                  "firstName": "string",
                  "gender": "MALE",
                  "infix": "string",
                  "lastName": "string"
                },
                "personalData": {
                  "dateOfBirth": "string",
                  "documentData": [
                    {
                      "expirationDate": "string",
                      "issuerCountry": "st",
                      "issuerState": "string",
                      "number": "string",
                      "type": "DRIVINGLICENSE"
                    }
                  ],
                  "nationality": "st"
                },
                "phoneNumber": {
                  "phoneCountryCode": "string",
                  "phoneNumber": "string",
                  "phoneType": "Fax"
                },
                "shareholderCode": "string",
                "shareholderReference": "string",
                "shareholderType": "Controller",
                "webAddress": "string"
              }
            ],
            "signatories": [
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
                "fullPhoneNumber": "string",
                "jobTitle": "string",
                "name": {
                  "firstName": "string",
                  "gender": "MALE",
                  "infix": "string",
                  "lastName": "string"
                },
                "personalData": {
                  "dateOfBirth": "string",
                  "documentData": [
                    {
                      "expirationDate": "string",
                      "issuerCountry": "st",
                      "issuerState": "string",
                      "number": "string",
                      "type": "DRIVINGLICENSE"
                    }
                  ],
                  "nationality": "st"
                },
                "phoneNumber": {
                  "phoneCountryCode": "string",
                  "phoneNumber": "string",
                  "phoneType": "Fax"
                },
                "signatoryCode": "string",
                "signatoryReference": "string",
                "webAddress": "string"
              }
            ],
            "stockExchange": "string",
            "stockNumber": "string",
            "stockTicker": "string",
            "taxId": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "individualDetails": {
            "name": {
              "firstName": "string",
              "gender": "MALE",
              "infix": "string",
              "lastName": "string"
            },
            "personalData": {
              "dateOfBirth": "string",
              "documentData": [
                {
                  "expirationDate": "string",
                  "issuerCountry": "st",
                  "issuerState": "string",
                  "number": "string",
                  "type": "DRIVINGLICENSE"
                }
              ],
              "nationality": "st"
            }
          },
          "legalArrangementEntityCode": "string",
          "legalArrangementEntityReference": "string",
          "legalArrangementMembers": [
            "Beneficiary"
          ],
          "legalEntityType": "Business",
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "webAddress": "string"
        }
      ],
      "legalArrangementReference": "string",
      "legalForm": "CashManagementTrust",
      "name": "string",
      "registrationNumber": "string",
      "taxNumber": "string",
      "type": "Association"
    }
  ],
  "merchantCategoryCode": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "payoutMethods": [
    {
      "merchantAccount": "string",
      "payoutMethodCode": "string",
      "payoutMethodReference": "string",
      "recurringDetailReference": "string",
      "shopperReference": "string"
    }
  ],
  "phoneNumber": {
    "phoneCountryCode": "string",
    "phoneNumber": "string",
    "phoneType": "Fax"
  },
  "principalBusinessAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "storeDetails": [
    {
      "address": {
        "city": "string",
        "country": "string",
        "houseNumberOrName": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "fullPhoneNumber": "string",
      "logo": "string",
      "merchantAccount": "string",
      "merchantCategoryCode": "string",
      "merchantHouseNumber": "string",
      "phoneNumber": {
        "phoneCountryCode": "string",
        "phoneNumber": "string",
        "phoneType": "Fax"
      },
      "shopperInteraction": "Ecommerce",
      "splitConfigurationUUID": "string",
      "status": "Active",
      "store": "string",
      "storeName": "string",
      "storeReference": "string",
      "virtualAccount": "string",
      "webAddress": "string"
    }
  ],
  "webAddress": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[ViasAddress](#schemaviasaddress)|true|none|The address of the account holder.|
|bankAccountDetails|[[BankAccountDetail](#schemabankaccountdetail)]|false|none|Array of bank accounts associated with the account holder. For details about the required `bankAccountDetail` fields, see [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information).|
|bankAggregatorDataReference|string|false|none|The opaque reference value returned by the Adyen API during bank account login.|
|businessDetails|[BusinessDetails](#schemabusinessdetails)|false|none|Details about the business or nonprofit account holder.<br>Required when creating an account holder with `legalEntity` **Business** or **NonProfit**.|
|email|string|false|none|The email address of the account holder.|
|fullPhoneNumber|string|false|none|The phone number of the account holder provided as a single string. It will be handled as a landline phone.<br>**Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"|
|individualDetails|[IndividualDetails](#schemaindividualdetails)|false|none|Details about the individual account holder.<br>Required when creating an account holder with `legalEntity` **Individual**.<br>|
|lastReviewDate|string|false|none|Date when you last reviewed the account holder's information, in ISO-8601 YYYY-MM-DD format. For example, **2020-01-31**.|
|legalArrangements|[[LegalArrangementDetail](#schemalegalarrangementdetail)]|false|none|An array containing information about the account holder's [legal arrangements](https://docs.adyen.com/classic-platforms/verification-process/legal-arrangements).|
|merchantCategoryCode|string|false|none|The Merchant Category Code of the account holder.<br>> If not specified in the request, this will be derived from the platform account (which is configured by Adyen).|
|metadata|object|false|none|A set of key and value pairs for general use by the account holder or merchant.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br>> The values being stored have a maximum length of eighty (80) characters and will be truncated if necessary.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.|
|payoutMethods|[[PayoutMethod](#schemapayoutmethod)]|false|none|Array of tokenized card details associated with the account holder. For details about how you can use the tokens to pay out, refer to [Pay out to cards](https://docs.adyen.com/classic-platforms/payout-to-cards).|
|phoneNumber|[ViasPhoneNumber](#schemaviasphonenumber)|false|none|The phone number of the account holder.<br>> Required if a `fullPhoneNumber` is not provided.|
|principalBusinessAddress|[ViasAddress](#schemaviasaddress)|false|none|The principal business address of the account holder.|
|storeDetails|[[StoreDetail](#schemastoredetail)]|false|none|Array of stores associated with the account holder. Required when onboarding account holders that have an Adyen [point of sale](https://docs.adyen.com/classic-platforms/platforms-for-pos).|
|webAddress|string|false|none|The URL of the website of the account holder.|

<h2 id="tocS_AccountHolderPayoutNotification">AccountHolderPayoutNotification</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholderpayoutnotification"></a>
<a id="schema_AccountHolderPayoutNotification"></a>
<a id="tocSaccountholderpayoutnotification"></a>
<a id="tocsaccountholderpayoutnotification"></a>

```json
{
  "content": {
    "accountCode": "string",
    "accountHolderCode": "string",
    "amounts": [
      {
        "currency": "str",
        "value": 0
      }
    ],
    "bankAccountDetail": {
      "accountNumber": "string",
      "accountType": "string",
      "bankAccountName": "string",
      "bankAccountReference": "string",
      "bankAccountUUID": "string",
      "bankBicSwift": "string",
      "bankCity": "string",
      "bankCode": "string",
      "bankName": "string",
      "branchCode": "string",
      "checkCode": "string",
      "countryCode": "string",
      "currencyCode": "string",
      "iban": "string",
      "ownerCity": "string",
      "ownerCountryCode": "string",
      "ownerDateOfBirth": "string",
      "ownerHouseNumberOrName": "string",
      "ownerName": "string",
      "ownerNationality": "string",
      "ownerPostalCode": "string",
      "ownerState": "string",
      "ownerStreet": "string",
      "primaryAccount": true,
      "taxId": "string",
      "urlForVerification": "string"
    },
    "description": "string",
    "estimatedArrivalDate": {
      "month": 0,
      "year": 0
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
    "merchantReference": "string",
    "originalPspReference": "string",
    "payoutAccountCountry": "string",
    "payoutAccountNumber": "string",
    "payoutBalanceAccountId": "string",
    "payoutBankName": "string",
    "payoutBranchCode": "string",
    "payoutReference": 0,
    "payoutSpeed": "INSTANT",
    "status": {
      "message": {
        "code": "string",
        "text": "string"
      },
      "statusCode": "string"
    }
  },
  "error": {
    "errorCode": "string",
    "message": "string"
  },
  "eventDate": "1970-01-01T00:00:00Z",
  "eventType": "string",
  "executingUserKey": "string",
  "live": true,
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[AccountHolderPayoutNotificationContent](#schemaaccountholderpayoutnotificationcontent)|false|none|Details of the payout to the Account Holder.|
|error|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|none|Error information of failed request. No value provided here if no error occurred on processing.|
|eventDate|string(date-time)|true|none|The date and time when an event has been completed.|
|eventType|string|true|none|The event type of the notification.|
|executingUserKey|string|true|none|The user or process that has triggered the notification.|
|live|boolean|true|none|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|pspReference|string|true|none|The PSP reference of the request from which the notification originates.|

<h2 id="tocS_AccountHolderPayoutNotificationContent">AccountHolderPayoutNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholderpayoutnotificationcontent"></a>
<a id="schema_AccountHolderPayoutNotificationContent"></a>
<a id="tocSaccountholderpayoutnotificationcontent"></a>
<a id="tocsaccountholderpayoutnotificationcontent"></a>

```json
{
  "accountCode": "string",
  "accountHolderCode": "string",
  "amounts": [
    {
      "currency": "str",
      "value": 0
    }
  ],
  "bankAccountDetail": {
    "accountNumber": "string",
    "accountType": "string",
    "bankAccountName": "string",
    "bankAccountReference": "string",
    "bankAccountUUID": "string",
    "bankBicSwift": "string",
    "bankCity": "string",
    "bankCode": "string",
    "bankName": "string",
    "branchCode": "string",
    "checkCode": "string",
    "countryCode": "string",
    "currencyCode": "string",
    "iban": "string",
    "ownerCity": "string",
    "ownerCountryCode": "string",
    "ownerDateOfBirth": "string",
    "ownerHouseNumberOrName": "string",
    "ownerName": "string",
    "ownerNationality": "string",
    "ownerPostalCode": "string",
    "ownerState": "string",
    "ownerStreet": "string",
    "primaryAccount": true,
    "taxId": "string",
    "urlForVerification": "string"
  },
  "description": "string",
  "estimatedArrivalDate": {
    "month": 0,
    "year": 0
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
  "merchantReference": "string",
  "originalPspReference": "string",
  "payoutAccountCountry": "string",
  "payoutAccountNumber": "string",
  "payoutBalanceAccountId": "string",
  "payoutBankName": "string",
  "payoutBranchCode": "string",
  "payoutReference": 0,
  "payoutSpeed": "INSTANT",
  "status": {
    "message": {
      "code": "string",
      "text": "string"
    },
    "statusCode": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|false|none|The code of the account from which the payout was made.|
|accountHolderCode|string|false|none|The code of the Account Holder to which the payout was made.|
|amounts|[[Amount](#schemaamount)]|false|none|The payout amounts (per currency).|
|bankAccountDetail|[BankAccountDetail](#schemabankaccountdetail)|false|none|Details of the Bank Account to which the payout was made.|
|description|string|false|none|A description of the payout.|
|estimatedArrivalDate|[LocalDate](#schemalocaldate)|false|none|The estimated date of arrival.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Invalid fields list.|
|merchantReference|string|false|none|The merchant reference.|
|originalPspReference|string|false|none|The PSP reference of the original payout.|
|payoutAccountCountry|string|false|none|The country code of the bank from which the payout was initiated.|
|payoutAccountNumber|string|false|none|The account number of the bank from which the payout was initiated.|
|payoutBalanceAccountId|string|false|none|The balance account id to which payment was made|
|payoutBankName|string|false|none|The name of the bank the payout from which the payout was initiated.|
|payoutBranchCode|string|false|none|The branch code of the bank from which the payout was initiated.|
|payoutReference|integer(int64)|false|none|The unique payout identifier.|
|payoutSpeed|string|false|none|Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.|
|status|[OperationStatus](#schemaoperationstatus)|false|none|The payout status.|

#### Enumerated Values

|Property|Value|
|---|---|
|payoutSpeed|INSTANT|
|payoutSpeed|SAME_DAY|
|payoutSpeed|STANDARD|

<h2 id="tocS_AccountHolderStatus">AccountHolderStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholderstatus"></a>
<a id="schema_AccountHolderStatus"></a>
<a id="tocSaccountholderstatus"></a>
<a id="tocsaccountholderstatus"></a>

```json
{
  "events": [
    {
      "event": "InactivateAccount",
      "executionDate": "1970-01-01T00:00:00Z",
      "reason": "string"
    }
  ],
  "payoutState": {
    "allowPayout": true,
    "disableReason": "string",
    "disabled": true,
    "notAllowedReason": "string",
    "payoutLimit": {
      "currency": "str",
      "value": 0
    },
    "tierNumber": 0
  },
  "processingState": {
    "disableReason": "string",
    "disabled": true,
    "processedFrom": {
      "currency": "str",
      "value": 0
    },
    "processedTo": {
      "currency": "str",
      "value": 0
    },
    "tierNumber": 0
  },
  "status": "Active",
  "statusReason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[[AccountEvent](#schemaaccountevent)]|false|none|A list of events scheduled for the account holder.|
|payoutState|[AccountPayoutState](#schemaaccountpayoutstate)|false|none|The payout state of the account holder.|
|processingState|[AccountProcessingState](#schemaaccountprocessingstate)|false|none|The processing state of the account holder.|
|status|string|true|none|The status of the account holder.<br>>Permitted values: `Active`, `Inactive`, `Suspended`, `Closed`.|
|statusReason|string|false|none|The reason why the status was assigned to the account holder.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Active|
|status|Closed|
|status|Inactive|
|status|Suspended|

<h2 id="tocS_AccountHolderStatusChangeNotification">AccountHolderStatusChangeNotification</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholderstatuschangenotification"></a>
<a id="schema_AccountHolderStatusChangeNotification"></a>
<a id="tocSaccountholderstatuschangenotification"></a>
<a id="tocsaccountholderstatuschangenotification"></a>

```json
{
  "content": {
    "accountHolderCode": "string",
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
    "newStatus": {
      "events": [
        {
          "event": "InactivateAccount",
          "executionDate": "1970-01-01T00:00:00Z",
          "reason": "string"
        }
      ],
      "payoutState": {
        "allowPayout": true,
        "disableReason": "string",
        "disabled": true,
        "notAllowedReason": "string",
        "payoutLimit": {
          "currency": "str",
          "value": 0
        },
        "tierNumber": 0
      },
      "processingState": {
        "disableReason": "string",
        "disabled": true,
        "processedFrom": {
          "currency": "str",
          "value": 0
        },
        "processedTo": {
          "currency": "str",
          "value": 0
        },
        "tierNumber": 0
      },
      "status": "Active",
      "statusReason": "string"
    },
    "oldStatus": {
      "events": [
        {
          "event": "InactivateAccount",
          "executionDate": "1970-01-01T00:00:00Z",
          "reason": "string"
        }
      ],
      "payoutState": {
        "allowPayout": true,
        "disableReason": "string",
        "disabled": true,
        "notAllowedReason": "string",
        "payoutLimit": {
          "currency": "str",
          "value": 0
        },
        "tierNumber": 0
      },
      "processingState": {
        "disableReason": "string",
        "disabled": true,
        "processedFrom": {
          "currency": "str",
          "value": 0
        },
        "processedTo": {
          "currency": "str",
          "value": 0
        },
        "tierNumber": 0
      },
      "status": "Active",
      "statusReason": "string"
    },
    "reason": "string"
  },
  "error": {
    "errorCode": "string",
    "message": "string"
  },
  "eventDate": "1970-01-01T00:00:00Z",
  "eventType": "string",
  "executingUserKey": "string",
  "live": true,
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[AccountHolderStatusChangeNotificationContent](#schemaaccountholderstatuschangenotificationcontent)|false|none|The details of the Account Holder status change.|
|error|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|none|Error information of failed request. No value provided here if no error occurred on processing.|
|eventDate|string(date-time)|true|none|The date and time when an event has been completed.|
|eventType|string|true|none|The event type of the notification.|
|executingUserKey|string|true|none|The user or process that has triggered the notification.|
|live|boolean|true|none|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|pspReference|string|true|none|The PSP reference of the request from which the notification originates.|

<h2 id="tocS_AccountHolderStatusChangeNotificationContent">AccountHolderStatusChangeNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholderstatuschangenotificationcontent"></a>
<a id="schema_AccountHolderStatusChangeNotificationContent"></a>
<a id="tocSaccountholderstatuschangenotificationcontent"></a>
<a id="tocsaccountholderstatuschangenotificationcontent"></a>

```json
{
  "accountHolderCode": "string",
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
  "newStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "oldStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The code of the account holder.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|in case the account holder has not been updated, contains account holder fields, that did not pass the validation.|
|newStatus|[AccountHolderStatus](#schemaaccountholderstatus)|false|none|The new status of the account holder.|
|oldStatus|[AccountHolderStatus](#schemaaccountholderstatus)|false|none|The former status of the account holder.|
|reason|string|false|none|The reason for the status change.|

<h2 id="tocS_AccountHolderStoreStatusChangeNotification">AccountHolderStoreStatusChangeNotification</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholderstorestatuschangenotification"></a>
<a id="schema_AccountHolderStoreStatusChangeNotification"></a>
<a id="tocSaccountholderstorestatuschangenotification"></a>
<a id="tocsaccountholderstorestatuschangenotification"></a>

```json
{
  "content": {
    "accountHolderCode": "string",
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
    "newStatus": "Active",
    "oldStatus": "Active",
    "reason": "string",
    "store": "string",
    "storeReference": "string"
  },
  "error": {
    "errorCode": "string",
    "message": "string"
  },
  "eventDate": "1970-01-01T00:00:00Z",
  "eventType": "string",
  "executingUserKey": "string",
  "live": true,
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[AccountHolderStoreStatusChangeNotificationContent](#schemaaccountholderstorestatuschangenotificationcontent)|false|none|The details of the Account Holder Store status change.|
|error|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|none|Error information of failed request. No value provided here if no error occurred on processing.|
|eventDate|string(date-time)|true|none|The date and time when an event has been completed.|
|eventType|string|true|none|The event type of the notification.|
|executingUserKey|string|true|none|The user or process that has triggered the notification.|
|live|boolean|true|none|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|pspReference|string|true|none|The PSP reference of the request from which the notification originates.|

<h2 id="tocS_AccountHolderStoreStatusChangeNotificationContent">AccountHolderStoreStatusChangeNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholderstorestatuschangenotificationcontent"></a>
<a id="schema_AccountHolderStoreStatusChangeNotificationContent"></a>
<a id="tocSaccountholderstorestatuschangenotificationcontent"></a>
<a id="tocsaccountholderstorestatuschangenotificationcontent"></a>

```json
{
  "accountHolderCode": "string",
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
  "newStatus": "Active",
  "oldStatus": "Active",
  "reason": "string",
  "store": "string",
  "storeReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The code of the account holder.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|In case the store status has not been updated, contains fields that did not pass the validation.|
|newStatus|string|true|none|The new status of the account holder.|
|oldStatus|string|true|none|The former status of the account holder.|
|reason|string|false|none|The reason for the status change.|
|store|string|true|none|Alphanumeric identifier of the store.|
|storeReference|string|true|none|Store store reference.|

#### Enumerated Values

|Property|Value|
|---|---|
|newStatus|Active|
|newStatus|Closed|
|newStatus|Inactive|
|newStatus|InactiveWithModifications|
|newStatus|Pending|
|oldStatus|Active|
|oldStatus|Closed|
|oldStatus|Inactive|
|oldStatus|InactiveWithModifications|
|oldStatus|Pending|

<h2 id="tocS_AccountHolderUpcomingDeadlineNotification">AccountHolderUpcomingDeadlineNotification</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholderupcomingdeadlinenotification"></a>
<a id="schema_AccountHolderUpcomingDeadlineNotification"></a>
<a id="tocSaccountholderupcomingdeadlinenotification"></a>
<a id="tocsaccountholderupcomingdeadlinenotification"></a>

```json
{
  "content": {
    "accountHolderCode": "string",
    "event": "AccessPii",
    "executionDate": "1970-01-01T00:00:00Z",
    "reason": "string"
  },
  "error": {
    "errorCode": "string",
    "message": "string"
  },
  "eventDate": "1970-01-01T00:00:00Z",
  "eventType": "string",
  "executingUserKey": "string",
  "live": true,
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[AccountHolderUpcomingDeadlineNotificationContent](#schemaaccountholderupcomingdeadlinenotificationcontent)|false|none|The details of the upcoming event.|
|error|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|none|Error information of failed request. No value provided here if no error occurred on processing.|
|eventDate|string(date-time)|true|none|The date and time when an event has been completed.|
|eventType|string|true|none|The event type of the notification.|
|executingUserKey|string|true|none|The user or process that has triggered the notification.|
|live|boolean|true|none|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|pspReference|string|true|none|The PSP reference of the request from which the notification originates.|

<h2 id="tocS_AccountHolderUpcomingDeadlineNotificationContent">AccountHolderUpcomingDeadlineNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholderupcomingdeadlinenotificationcontent"></a>
<a id="schema_AccountHolderUpcomingDeadlineNotificationContent"></a>
<a id="tocSaccountholderupcomingdeadlinenotificationcontent"></a>
<a id="tocsaccountholderupcomingdeadlinenotificationcontent"></a>

```json
{
  "accountHolderCode": "string",
  "event": "AccessPii",
  "executionDate": "1970-01-01T00:00:00Z",
  "reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|false|none|The code of the account holder whom the event refers to.|
|event|string|false|none|The event name that will be trigger if no action is taken.|
|executionDate|string(date-time)|false|none|The execution date scheduled for the event.|
|reason|string|false|none|The reason that leads to scheduling of the event.|

#### Enumerated Values

|Property|Value|
|---|---|
|event|AccessPii|
|event|ApiTierUpdate|
|event|CloseAccount|
|event|CloseStores|
|event|DeleteBalanceAccounts|
|event|DeleteBankAccounts|
|event|DeleteLegalArrangements|
|event|DeleteLiableBankAccount|
|event|DeletePayoutMethods|
|event|DeleteShareholders|
|event|DeleteShareholdersNoKyc|
|event|DeleteSignatories|
|event|DeleteUnusedAccount|
|event|InactivateAccount|
|event|KYCDeadlineExtension|
|event|MigrateAccountToBP|
|event|RecalculateAccountStatusAndProcessingTier|
|event|RefundNotPaidOutTransfers|
|event|ResolveEvents|
|event|SaveAccountHolder|
|event|SaveKYCCheckStatus|
|event|SuspendAccount|
|event|UnSuspendAccount|
|event|UpdateAccountHolderState|
|event|Verification|

<h2 id="tocS_AccountHolderUpdateNotification">AccountHolderUpdateNotification</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholderupdatenotification"></a>
<a id="schema_AccountHolderUpdateNotification"></a>
<a id="tocSaccountholderupdatenotification"></a>
<a id="tocsaccountholderupdatenotification"></a>

```json
{
  "content": {
    "accountHolderCode": "string",
    "accountHolderDetails": {
      "address": {
        "city": "string",
        "country": "string",
        "houseNumberOrName": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "bankAccountDetails": [
        {
          "accountNumber": "string",
          "accountType": "string",
          "bankAccountName": "string",
          "bankAccountReference": "string",
          "bankAccountUUID": "string",
          "bankBicSwift": "string",
          "bankCity": "string",
          "bankCode": "string",
          "bankName": "string",
          "branchCode": "string",
          "checkCode": "string",
          "countryCode": "string",
          "currencyCode": "string",
          "iban": "string",
          "ownerCity": "string",
          "ownerCountryCode": "string",
          "ownerDateOfBirth": "string",
          "ownerHouseNumberOrName": "string",
          "ownerName": "string",
          "ownerNationality": "string",
          "ownerPostalCode": "string",
          "ownerState": "string",
          "ownerStreet": "string",
          "primaryAccount": true,
          "taxId": "string",
          "urlForVerification": "string"
        }
      ],
      "bankAggregatorDataReference": "string",
      "businessDetails": {
        "doingBusinessAs": "string",
        "legalBusinessName": "string",
        "listedUltimateParentCompany": [
          {
            "address": {
              "city": "string",
              "country": "string",
              "houseNumberOrName": "string",
              "postalCode": "string",
              "stateOrProvince": "string",
              "street": "string"
            },
            "businessDetails": {
              "legalBusinessName": "string",
              "registrationNumber": "string",
              "stockExchange": "string",
              "stockNumber": "string",
              "stockTicker": "string"
            },
            "ultimateParentCompanyCode": "string"
          }
        ],
        "registrationNumber": "string",
        "shareholders": [
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
            "fullPhoneNumber": "string",
            "jobTitle": "string",
            "name": {
              "firstName": "string",
              "gender": "MALE",
              "infix": "string",
              "lastName": "string"
            },
            "personalData": {
              "dateOfBirth": "string",
              "documentData": [
                {
                  "expirationDate": "string",
                  "issuerCountry": "st",
                  "issuerState": "string",
                  "number": "string",
                  "type": "DRIVINGLICENSE"
                }
              ],
              "nationality": "st"
            },
            "phoneNumber": {
              "phoneCountryCode": "string",
              "phoneNumber": "string",
              "phoneType": "Fax"
            },
            "shareholderCode": "string",
            "shareholderReference": "string",
            "shareholderType": "Controller",
            "webAddress": "string"
          }
        ],
        "signatories": [
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
            "fullPhoneNumber": "string",
            "jobTitle": "string",
            "name": {
              "firstName": "string",
              "gender": "MALE",
              "infix": "string",
              "lastName": "string"
            },
            "personalData": {
              "dateOfBirth": "string",
              "documentData": [
                {
                  "expirationDate": "string",
                  "issuerCountry": "st",
                  "issuerState": "string",
                  "number": "string",
                  "type": "DRIVINGLICENSE"
                }
              ],
              "nationality": "st"
            },
            "phoneNumber": {
              "phoneCountryCode": "string",
              "phoneNumber": "string",
              "phoneType": "Fax"
            },
            "signatoryCode": "string",
            "signatoryReference": "string",
            "webAddress": "string"
          }
        ],
        "stockExchange": "string",
        "stockNumber": "string",
        "stockTicker": "string",
        "taxId": "string"
      },
      "email": "string",
      "fullPhoneNumber": "string",
      "individualDetails": {
        "name": {
          "firstName": "string",
          "gender": "MALE",
          "infix": "string",
          "lastName": "string"
        },
        "personalData": {
          "dateOfBirth": "string",
          "documentData": [
            {
              "expirationDate": "string",
              "issuerCountry": "st",
              "issuerState": "string",
              "number": "string",
              "type": "DRIVINGLICENSE"
            }
          ],
          "nationality": "st"
        }
      },
      "lastReviewDate": "string",
      "legalArrangements": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "legalArrangementCode": "string",
          "legalArrangementEntities": [
            {
              "address": {
                "city": "string",
                "country": "string",
                "houseNumberOrName": "string",
                "postalCode": "string",
                "stateOrProvince": "string",
                "street": "string"
              },
              "businessDetails": {
                "doingBusinessAs": "string",
                "legalBusinessName": "string",
                "listedUltimateParentCompany": [
                  {
                    "address": {
                      "city": "string",
                      "country": "string",
                      "houseNumberOrName": "string",
                      "postalCode": "string",
                      "stateOrProvince": "string",
                      "street": "string"
                    },
                    "businessDetails": {
                      "legalBusinessName": "string",
                      "registrationNumber": "string",
                      "stockExchange": "string",
                      "stockNumber": "string",
                      "stockTicker": "string"
                    },
                    "ultimateParentCompanyCode": "string"
                  }
                ],
                "registrationNumber": "string",
                "shareholders": [
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
                    "fullPhoneNumber": "string",
                    "jobTitle": "string",
                    "name": {
                      "firstName": "string",
                      "gender": "MALE",
                      "infix": "string",
                      "lastName": "string"
                    },
                    "personalData": {
                      "dateOfBirth": "string",
                      "documentData": [
                        {
                          "expirationDate": "string",
                          "issuerCountry": "st",
                          "issuerState": "string",
                          "number": "string",
                          "type": "DRIVINGLICENSE"
                        }
                      ],
                      "nationality": "st"
                    },
                    "phoneNumber": {
                      "phoneCountryCode": "string",
                      "phoneNumber": "string",
                      "phoneType": "Fax"
                    },
                    "shareholderCode": "string",
                    "shareholderReference": "string",
                    "shareholderType": "Controller",
                    "webAddress": "string"
                  }
                ],
                "signatories": [
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
                    "fullPhoneNumber": "string",
                    "jobTitle": "string",
                    "name": {
                      "firstName": "string",
                      "gender": "MALE",
                      "infix": "string",
                      "lastName": "string"
                    },
                    "personalData": {
                      "dateOfBirth": "string",
                      "documentData": [
                        {
                          "expirationDate": "string",
                          "issuerCountry": "st",
                          "issuerState": "string",
                          "number": "string",
                          "type": "DRIVINGLICENSE"
                        }
                      ],
                      "nationality": "st"
                    },
                    "phoneNumber": {
                      "phoneCountryCode": "string",
                      "phoneNumber": "string",
                      "phoneType": "Fax"
                    },
                    "signatoryCode": "string",
                    "signatoryReference": "string",
                    "webAddress": "string"
                  }
                ],
                "stockExchange": "string",
                "stockNumber": "string",
                "stockTicker": "string",
                "taxId": "string"
              },
              "email": "string",
              "fullPhoneNumber": "string",
              "individualDetails": {
                "name": {
                  "firstName": "string",
                  "gender": "MALE",
                  "infix": "string",
                  "lastName": "string"
                },
                "personalData": {
                  "dateOfBirth": "string",
                  "documentData": [
                    {
                      "expirationDate": "string",
                      "issuerCountry": "st",
                      "issuerState": "string",
                      "number": "string",
                      "type": "DRIVINGLICENSE"
                    }
                  ],
                  "nationality": "st"
                }
              },
              "legalArrangementEntityCode": "string",
              "legalArrangementEntityReference": "string",
              "legalArrangementMembers": [
                "Beneficiary"
              ],
              "legalEntityType": "Business",
              "phoneNumber": {
                "phoneCountryCode": "string",
                "phoneNumber": "string",
                "phoneType": "Fax"
              },
              "webAddress": "string"
            }
          ],
          "legalArrangementReference": "string",
          "legalForm": "CashManagementTrust",
          "name": "string",
          "registrationNumber": "string",
          "taxNumber": "string",
          "type": "Association"
        }
      ],
      "merchantCategoryCode": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "payoutMethods": [
        {
          "merchantAccount": "string",
          "payoutMethodCode": "string",
          "payoutMethodReference": "string",
          "recurringDetailReference": "string",
          "shopperReference": "string"
        }
      ],
      "phoneNumber": {
        "phoneCountryCode": "string",
        "phoneNumber": "string",
        "phoneType": "Fax"
      },
      "principalBusinessAddress": {
        "city": "string",
        "country": "string",
        "houseNumberOrName": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "storeDetails": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "fullPhoneNumber": "string",
          "logo": "string",
          "merchantAccount": "string",
          "merchantCategoryCode": "string",
          "merchantHouseNumber": "string",
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "shopperInteraction": "Ecommerce",
          "splitConfigurationUUID": "string",
          "status": "Active",
          "store": "string",
          "storeName": "string",
          "storeReference": "string",
          "virtualAccount": "string",
          "webAddress": "string"
        }
      ],
      "webAddress": "string"
    },
    "accountHolderStatus": {
      "events": [
        {
          "event": "InactivateAccount",
          "executionDate": "1970-01-01T00:00:00Z",
          "reason": "string"
        }
      ],
      "payoutState": {
        "allowPayout": true,
        "disableReason": "string",
        "disabled": true,
        "notAllowedReason": "string",
        "payoutLimit": {
          "currency": "str",
          "value": 0
        },
        "tierNumber": 0
      },
      "processingState": {
        "disableReason": "string",
        "disabled": true,
        "processedFrom": {
          "currency": "str",
          "value": 0
        },
        "processedTo": {
          "currency": "str",
          "value": 0
        },
        "tierNumber": 0
      },
      "status": "Active",
      "statusReason": "string"
    },
    "description": "string",
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
    "legalEntity": "Business",
    "primaryCurrency": "string",
    "pspReference": "string",
    "resultCode": "string",
    "verification": {
      "accountHolder": {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ]
      },
      "legalArrangements": [
        {
          "checks": [
            {
              "requiredFields": [
                "string"
              ],
              "status": "AWAITING_DATA",
              "summary": {
                "kycCheckCode": 0,
                "kycCheckDescription": "string"
              },
              "type": "BANK_ACCOUNT_VERIFICATION"
            }
          ],
          "legalArrangementCode": "string"
        }
      ],
      "legalArrangementsEntities": [
        {
          "checks": [
            {
              "requiredFields": [
                "string"
              ],
              "status": "AWAITING_DATA",
              "summary": {
                "kycCheckCode": 0,
                "kycCheckDescription": "string"
              },
              "type": "BANK_ACCOUNT_VERIFICATION"
            }
          ],
          "legalArrangementCode": "string",
          "legalArrangementEntityCode": "string"
        }
      ],
      "payoutMethods": [
        {
          "checks": [
            {
              "requiredFields": [
                "string"
              ],
              "status": "AWAITING_DATA",
              "summary": {
                "kycCheckCode": 0,
                "kycCheckDescription": "string"
              },
              "type": "BANK_ACCOUNT_VERIFICATION"
            }
          ],
          "payoutMethodCode": "string"
        }
      ],
      "shareholders": [
        {
          "checks": [
            {
              "requiredFields": [
                "string"
              ],
              "status": "AWAITING_DATA",
              "summary": {
                "kycCheckCode": 0,
                "kycCheckDescription": "string"
              },
              "type": "BANK_ACCOUNT_VERIFICATION"
            }
          ],
          "legalArrangementCode": "string",
          "legalArrangementEntityCode": "string",
          "shareholderCode": "string"
        }
      ],
      "signatories": [
        {
          "checks": [
            {
              "requiredFields": [
                "string"
              ],
              "status": "AWAITING_DATA",
              "summary": {
                "kycCheckCode": 0,
                "kycCheckDescription": "string"
              },
              "type": "BANK_ACCOUNT_VERIFICATION"
            }
          ],
          "signatoryCode": "string"
        }
      ],
      "ultimateParentCompany": [
        {
          "checks": [
            {
              "requiredFields": [
                "string"
              ],
              "status": "AWAITING_DATA",
              "summary": {
                "kycCheckCode": 0,
                "kycCheckDescription": "string"
              },
              "type": "BANK_ACCOUNT_VERIFICATION"
            }
          ],
          "ultimateParentCompanyCode": "string"
        }
      ]
    },
    "verificationProfile": "string"
  },
  "error": {
    "errorCode": "string",
    "message": "string"
  },
  "eventDate": "1970-01-01T00:00:00Z",
  "eventType": "string",
  "executingUserKey": "string",
  "live": true,
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[UpdateAccountHolderResponse](#schemaupdateaccountholderresponse)|false|none|The details of the Account Holder update.|
|error|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|none|Error information of failed request. No value provided here if no error occurred on processing.|
|eventDate|string(date-time)|true|none|The date and time when an event has been completed.|
|eventType|string|true|none|The event type of the notification.|
|executingUserKey|string|true|none|The user or process that has triggered the notification.|
|live|boolean|true|none|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|pspReference|string|true|none|The PSP reference of the request from which the notification originates.|

<h2 id="tocS_AccountHolderVerificationNotification">AccountHolderVerificationNotification</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholderverificationnotification"></a>
<a id="schema_AccountHolderVerificationNotification"></a>
<a id="tocSaccountholderverificationnotification"></a>
<a id="tocsaccountholderverificationnotification"></a>

```json
{
  "content": {
    "accountHolderCode": "string",
    "kycCheckStatusData": {
      "requiredFields": [
        "string"
      ],
      "status": "AWAITING_DATA",
      "summary": {
        "kycCheckCode": 0,
        "kycCheckDescription": "string"
      },
      "type": "BANK_ACCOUNT_VERIFICATION"
    },
    "legalArrangementCode": "string",
    "legalArrangementEntityCode": "string",
    "payoutMethodCode": "string",
    "shareholderCode": "string",
    "signatoryCode": "string"
  },
  "error": {
    "errorCode": "string",
    "message": "string"
  },
  "eventDate": "1970-01-01T00:00:00Z",
  "eventType": "string",
  "executingUserKey": "string",
  "live": true,
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[AccountHolderVerificationNotificationContent](#schemaaccountholderverificationnotificationcontent)|false|none|The details of the Account Holder verification.|
|error|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|none|Error information of failed request. No value provided here if no error occurred on processing.|
|eventDate|string(date-time)|true|none|The date and time when an event has been completed.|
|eventType|string|true|none|The event type of the notification.|
|executingUserKey|string|true|none|The user or process that has triggered the notification.|
|live|boolean|true|none|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|pspReference|string|true|none|The PSP reference of the request from which the notification originates.|

<h2 id="tocS_AccountHolderVerificationNotificationContent">AccountHolderVerificationNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholderverificationnotificationcontent"></a>
<a id="schema_AccountHolderVerificationNotificationContent"></a>
<a id="tocSaccountholderverificationnotificationcontent"></a>
<a id="tocsaccountholderverificationnotificationcontent"></a>

```json
{
  "accountHolderCode": "string",
  "kycCheckStatusData": {
    "requiredFields": [
      "string"
    ],
    "status": "AWAITING_DATA",
    "summary": {
      "kycCheckCode": 0,
      "kycCheckDescription": "string"
    },
    "type": "BANK_ACCOUNT_VERIFICATION"
  },
  "legalArrangementCode": "string",
  "legalArrangementEntityCode": "string",
  "payoutMethodCode": "string",
  "shareholderCode": "string",
  "signatoryCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|false|none|The code of the account holder.|
|kycCheckStatusData|[KYCCheckStatusData](#schemakyccheckstatusdata)|false|none|Information on the verification status|
|legalArrangementCode|string|false|none|The unique ID of the legal arrangement that has been verified.|
|legalArrangementEntityCode|string|false|none|The unique ID of the legal arrangement entity that has been verified.|
|payoutMethodCode|string|false|none|The unique code of the payout method that has been verified.|
|shareholderCode|string|false|none|The code of the shareholder that has been verified.|
|signatoryCode|string|false|none|The code of the signatory that has been verified.|

<h2 id="tocS_AccountPayoutState">AccountPayoutState</h2>
<!-- backwards compatibility -->
<a id="schemaaccountpayoutstate"></a>
<a id="schema_AccountPayoutState"></a>
<a id="tocSaccountpayoutstate"></a>
<a id="tocsaccountpayoutstate"></a>

```json
{
  "allowPayout": true,
  "disableReason": "string",
  "disabled": true,
  "notAllowedReason": "string",
  "payoutLimit": {
    "currency": "str",
    "value": 0
  },
  "tierNumber": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowPayout|boolean|false|none|Indicates whether payouts are allowed. This field is the overarching payout status, and is the aggregate of multiple conditions (e.g., KYC status, disabled flag, etc). If this field is false, no payouts will be permitted for any of the account holder's accounts. If this field is true, payouts will be permitted for any of the account holder's accounts.|
|disableReason|string|false|none|The reason why payouts (to all of the account holder's accounts) have been disabled (by the platform). If the `disabled` field is true, this field can be used to explain why.|
|disabled|boolean|false|none|Indicates whether payouts have been disabled (by the platform) for all of the account holder's accounts. A platform may enable and disable this field at their discretion. If this field is true, `allowPayout` will be false and no payouts will be permitted for any of the account holder's accounts. If this field is false, `allowPayout` may or may not be enabled, depending on other factors.|
|notAllowedReason|string|false|none|The reason why payouts (to all of the account holder's accounts) have been disabled (by Adyen). If payouts have been disabled by Adyen, this field will explain why. If this field is blank, payouts have not been disabled by Adyen.|
|payoutLimit|[Amount](#schemaamount)|false|none|The maximum amount that payouts are limited to. Only applies if payouts are allowed but limited.|
|tierNumber|integer(int32)|false|none|The payout tier that the account holder occupies.|

<h2 id="tocS_AccountProcessingState">AccountProcessingState</h2>
<!-- backwards compatibility -->
<a id="schemaaccountprocessingstate"></a>
<a id="schema_AccountProcessingState"></a>
<a id="tocSaccountprocessingstate"></a>
<a id="tocsaccountprocessingstate"></a>

```json
{
  "disableReason": "string",
  "disabled": true,
  "processedFrom": {
    "currency": "str",
    "value": 0
  },
  "processedTo": {
    "currency": "str",
    "value": 0
  },
  "tierNumber": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disableReason|string|false|none|The reason why processing has been disabled.|
|disabled|boolean|false|none|Indicates whether the processing of payments is allowed.|
|processedFrom|[Amount](#schemaamount)|false|none|The lower bound of the processing tier (i.e., an account holder must have processed at least this amount of money in order to be placed into this tier).|
|processedTo|[Amount](#schemaamount)|false|none|The upper bound of the processing tier (i.e., an account holder must have processed less than this amount of money in order to be placed into this tier).|
|tierNumber|integer(int32)|false|none|The processing tier that the account holder occupies.|

<h2 id="tocS_AccountUpdateNotification">AccountUpdateNotification</h2>
<!-- backwards compatibility -->
<a id="schemaaccountupdatenotification"></a>
<a id="schema_AccountUpdateNotification"></a>
<a id="tocSaccountupdatenotification"></a>
<a id="tocsaccountupdatenotification"></a>

```json
{
  "content": {
    "accountCode": "string",
    "bankAccountUUID": "string",
    "description": "string",
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
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "payoutMethodCode": "string",
    "payoutSchedule": {
      "nextScheduledPayout": "1970-01-01T00:00:00Z",
      "schedule": "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"
    },
    "payoutSpeed": "INSTANT",
    "pspReference": "string",
    "resultCode": "string"
  },
  "error": {
    "errorCode": "string",
    "message": "string"
  },
  "eventDate": "1970-01-01T00:00:00Z",
  "eventType": "string",
  "executingUserKey": "string",
  "live": true,
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[UpdateAccountResponse](#schemaupdateaccountresponse)|false|none|The details of the Account update.|
|error|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|none|Error information of failed request. No value provided here if no error occurred on processing.|
|eventDate|string(date-time)|true|none|The date and time when an event has been completed.|
|eventType|string|true|none|The event type of the notification.|
|executingUserKey|string|true|none|The user or process that has triggered the notification.|
|live|boolean|true|none|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|pspReference|string|true|none|The PSP reference of the request from which the notification originates.|

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
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).|
|value|integer(int64)|true|none|The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).|

<h2 id="tocS_BankAccountDetail">BankAccountDetail</h2>
<!-- backwards compatibility -->
<a id="schemabankaccountdetail"></a>
<a id="schema_BankAccountDetail"></a>
<a id="tocSbankaccountdetail"></a>
<a id="tocsbankaccountdetail"></a>

```json
{
  "accountNumber": "string",
  "accountType": "string",
  "bankAccountName": "string",
  "bankAccountReference": "string",
  "bankAccountUUID": "string",
  "bankBicSwift": "string",
  "bankCity": "string",
  "bankCode": "string",
  "bankName": "string",
  "branchCode": "string",
  "checkCode": "string",
  "countryCode": "string",
  "currencyCode": "string",
  "iban": "string",
  "ownerCity": "string",
  "ownerCountryCode": "string",
  "ownerDateOfBirth": "string",
  "ownerHouseNumberOrName": "string",
  "ownerName": "string",
  "ownerNationality": "string",
  "ownerPostalCode": "string",
  "ownerState": "string",
  "ownerStreet": "string",
  "primaryAccount": true,
  "taxId": "string",
  "urlForVerification": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|false|none|The bank account number (without separators).<br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|accountType|string|false|none|The type of bank account.<br>Only applicable to bank accounts held in the USA.<br>The permitted values are: `checking`, `savings`.<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|bankAccountName|string|false|none|The name of the bank account.|
|bankAccountReference|string|false|none|Merchant reference to the bank account.|
|bankAccountUUID|string|false|none|The unique identifier (UUID) of the Bank Account.<br>>If, during an account holder create or update request, this field is left blank (but other fields provided), a new Bank Account will be created with a procedurally-generated UUID.<br><br>>If, during an account holder create request, a UUID is provided, the creation of the Bank Account will fail while the creation of the account holder will continue.<br><br>>If, during an account holder update request, a UUID that is not correlated with an existing Bank Account is provided, the update of the account holder will fail.<br><br>>If, during an account holder update request, a UUID that is correlated with an existing Bank Account is provided, the existing Bank Account will be updated.<br>|
|bankBicSwift|string|false|none|The bank identifier code.<br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|bankCity|string|false|none|The city in which the bank branch is located.<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|bankCode|string|false|none|The bank code of the banking institution with which the bank account is registered.<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|bankName|string|false|none|The name of the banking institution with which the bank account is held.<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|branchCode|string|false|none|The branch code of the branch under which the bank account is registered. The value to be specified in this parameter depends on the country of the bank account:<br>* United States - Routing number<br>* United Kingdom - Sort code<br>* Germany - Bankleitzahl<br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|checkCode|string|false|none|The check code of the bank account.<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|countryCode|string|false|none|The two-letter country code in which the bank account is registered.<br>>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|currencyCode|string|false|none|The currency in which the bank account deals.<br>>The permitted currency codes are defined in ISO-4217 (e.g. 'EUR').<br>|
|iban|string|false|none|The international bank account number.<br>>The IBAN standard is defined in ISO-13616.<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|ownerCity|string|false|none|The city of residence of the bank account owner.<br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|ownerCountryCode|string|false|none|The country code of the country of residence of the bank account owner.<br>>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|ownerDateOfBirth|string|false|none|**Deprecated.** The date of birth of the bank account owner.<br>The date should be in ISO-8601 format yyyy-mm-dd (e.g. 2000-01-31).|
|ownerHouseNumberOrName|string|false|none|The house name or number of the residence of the bank account owner.<br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|ownerName|string|false|none|The name of the bank account owner.<br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|ownerNationality|string|false|none|The country code of the country of nationality of the bank account owner.<br>>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|ownerPostalCode|string|false|none|The postal code of the residence of the bank account owner.<br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|ownerState|string|false|none|The state of residence of the bank account owner.<br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|ownerStreet|string|false|none|The street name of the residence of the bank account owner.<br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|primaryAccount|boolean|false|none|If set to true, the bank account is a primary account.|
|taxId|string|false|none|The tax ID number.<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|urlForVerification|string|false|none|The URL to be used for bank account verification.<br>This may be generated on bank account creation.<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|

<h2 id="tocS_BeneficiarySetupNotification">BeneficiarySetupNotification</h2>
<!-- backwards compatibility -->
<a id="schemabeneficiarysetupnotification"></a>
<a id="schema_BeneficiarySetupNotification"></a>
<a id="tocSbeneficiarysetupnotification"></a>
<a id="tocsbeneficiarysetupnotification"></a>

```json
{
  "content": {
    "destinationAccountCode": "string",
    "destinationAccountHolderCode": "string",
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
    "merchantReference": "string",
    "sourceAccountCode": "string",
    "sourceAccountHolderCode": "string",
    "transferDate": "1970-01-01T00:00:00Z"
  },
  "error": {
    "errorCode": "string",
    "message": "string"
  },
  "eventDate": "1970-01-01T00:00:00Z",
  "eventType": "string",
  "executingUserKey": "string",
  "live": true,
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[BeneficiarySetupNotificationContent](#schemabeneficiarysetupnotificationcontent)|false|none|Details of the beneficiary setup.|
|error|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|none|Error information of failed request. No value provided here if no error occurred on processing.|
|eventDate|string(date-time)|true|none|The date and time when an event has been completed.|
|eventType|string|true|none|The event type of the notification.|
|executingUserKey|string|true|none|The user or process that has triggered the notification.|
|live|boolean|true|none|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|pspReference|string|true|none|The PSP reference of the request from which the notification originates.|

<h2 id="tocS_BeneficiarySetupNotificationContent">BeneficiarySetupNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemabeneficiarysetupnotificationcontent"></a>
<a id="schema_BeneficiarySetupNotificationContent"></a>
<a id="tocSbeneficiarysetupnotificationcontent"></a>
<a id="tocsbeneficiarysetupnotificationcontent"></a>

```json
{
  "destinationAccountCode": "string",
  "destinationAccountHolderCode": "string",
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
  "merchantReference": "string",
  "sourceAccountCode": "string",
  "sourceAccountHolderCode": "string",
  "transferDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationAccountCode|string|false|none|The code of the beneficiary account.|
|destinationAccountHolderCode|string|false|none|The code of the beneficiary Account Holder.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|A listing of the invalid fields which have caused the Setup Beneficiary request to fail. If this is empty, the Setup Beneficiary request has succeeded.|
|merchantReference|string|false|none|The reference provided by the merchant.|
|sourceAccountCode|string|false|none|The code of the benefactor account.|
|sourceAccountHolderCode|string|false|none|The code of the benefactor Account Holder.|
|transferDate|string(date-time)|false|none|The date on which the beneficiary was set up and funds transferred from benefactor to beneficiary.|

<h2 id="tocS_BusinessDetails">BusinessDetails</h2>
<!-- backwards compatibility -->
<a id="schemabusinessdetails"></a>
<a id="schema_BusinessDetails"></a>
<a id="tocSbusinessdetails"></a>
<a id="tocsbusinessdetails"></a>

```json
{
  "doingBusinessAs": "string",
  "legalBusinessName": "string",
  "listedUltimateParentCompany": [
    {
      "address": {
        "city": "string",
        "country": "string",
        "houseNumberOrName": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "businessDetails": {
        "legalBusinessName": "string",
        "registrationNumber": "string",
        "stockExchange": "string",
        "stockNumber": "string",
        "stockTicker": "string"
      },
      "ultimateParentCompanyCode": "string"
    }
  ],
  "registrationNumber": "string",
  "shareholders": [
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
      "fullPhoneNumber": "string",
      "jobTitle": "string",
      "name": {
        "firstName": "string",
        "gender": "MALE",
        "infix": "string",
        "lastName": "string"
      },
      "personalData": {
        "dateOfBirth": "string",
        "documentData": [
          {
            "expirationDate": "string",
            "issuerCountry": "st",
            "issuerState": "string",
            "number": "string",
            "type": "DRIVINGLICENSE"
          }
        ],
        "nationality": "st"
      },
      "phoneNumber": {
        "phoneCountryCode": "string",
        "phoneNumber": "string",
        "phoneType": "Fax"
      },
      "shareholderCode": "string",
      "shareholderReference": "string",
      "shareholderType": "Controller",
      "webAddress": "string"
    }
  ],
  "signatories": [
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
      "fullPhoneNumber": "string",
      "jobTitle": "string",
      "name": {
        "firstName": "string",
        "gender": "MALE",
        "infix": "string",
        "lastName": "string"
      },
      "personalData": {
        "dateOfBirth": "string",
        "documentData": [
          {
            "expirationDate": "string",
            "issuerCountry": "st",
            "issuerState": "string",
            "number": "string",
            "type": "DRIVINGLICENSE"
          }
        ],
        "nationality": "st"
      },
      "phoneNumber": {
        "phoneCountryCode": "string",
        "phoneNumber": "string",
        "phoneType": "Fax"
      },
      "signatoryCode": "string",
      "signatoryReference": "string",
      "webAddress": "string"
    }
  ],
  "stockExchange": "string",
  "stockNumber": "string",
  "stockTicker": "string",
  "taxId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|doingBusinessAs|string|false|none|The registered name of the company (if it differs from the legal name of the company).|
|legalBusinessName|string|false|none|The legal name of the company.|
|listedUltimateParentCompany|[[UltimateParentCompany](#schemaultimateparentcompany)]|false|none|Information about the parent public company. Required if the account holder is 100% owned by a publicly listed company.|
|registrationNumber|string|false|none|The registration number of the company.|
|shareholders|[[ShareholderContact](#schemashareholdercontact)]|false|none|Array containing information about individuals associated with the account holder either through ownership or control. For details about how you can identify them, refer to [our verification guide](https://docs.adyen.com/classic-platforms/verification-process#identify-ubos).|
|signatories|[[SignatoryContact](#schemasignatorycontact)]|false|none|Signatories associated with the company.<br>Each array entry should represent one signatory.|
|stockExchange|string|false|none|Market Identifier Code (MIC).|
|stockNumber|string|false|none|International Securities Identification Number (ISIN).|
|stockTicker|string|false|none|Stock Ticker symbol.|
|taxId|string|false|none|The tax ID of the company.|

<h2 id="tocS_CloseAccountResponse">CloseAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemacloseaccountresponse"></a>
<a id="schema_CloseAccountResponse"></a>
<a id="tocScloseaccountresponse"></a>
<a id="tocscloseaccountresponse"></a>

```json
{
  "accountCode": "string",
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
  "resultCode": "string",
  "status": "Active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|false|none|The account code of the account that is closed.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Contains field validation errors that would prevent requests from being processed.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|
|status|string|false|none|The new status of the account.<br>>Permitted values: `Active`, `Inactive`, `Suspended`, `Closed`.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Active|
|status|Closed|
|status|Inactive|
|status|Suspended|

<h2 id="tocS_CompensateNegativeBalanceNotification">CompensateNegativeBalanceNotification</h2>
<!-- backwards compatibility -->
<a id="schemacompensatenegativebalancenotification"></a>
<a id="schema_CompensateNegativeBalanceNotification"></a>
<a id="tocScompensatenegativebalancenotification"></a>
<a id="tocscompensatenegativebalancenotification"></a>

```json
{
  "content": {
    "records": [
      {
        "accountCode": "string",
        "amount": {
          "currency": "str",
          "value": 0
        },
        "transferDate": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "error": {
    "errorCode": "string",
    "message": "string"
  },
  "eventDate": "1970-01-01T00:00:00Z",
  "eventType": "string",
  "executingUserKey": "string",
  "live": true,
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[CompensateNegativeBalanceNotificationContent](#schemacompensatenegativebalancenotificationcontent)|false|none|Details of the negative balance compensation.|
|error|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|none|Error information of failed request. No value provided here if no error occurred on processing.|
|eventDate|string(date-time)|true|none|The date and time when an event has been completed.|
|eventType|string|true|none|The event type of the notification.|
|executingUserKey|string|true|none|The user or process that has triggered the notification.|
|live|boolean|true|none|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|pspReference|string|true|none|The PSP reference of the request from which the notification originates.|

<h2 id="tocS_CompensateNegativeBalanceNotificationContent">CompensateNegativeBalanceNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemacompensatenegativebalancenotificationcontent"></a>
<a id="schema_CompensateNegativeBalanceNotificationContent"></a>
<a id="tocScompensatenegativebalancenotificationcontent"></a>
<a id="tocscompensatenegativebalancenotificationcontent"></a>

```json
{
  "records": [
    {
      "accountCode": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "transferDate": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|records|[[CompensateNegativeBalanceNotificationRecord](#schemacompensatenegativebalancenotificationrecord)]|false|none|A list of the negative balances compensated.|

<h2 id="tocS_CompensateNegativeBalanceNotificationRecord">CompensateNegativeBalanceNotificationRecord</h2>
<!-- backwards compatibility -->
<a id="schemacompensatenegativebalancenotificationrecord"></a>
<a id="schema_CompensateNegativeBalanceNotificationRecord"></a>
<a id="tocScompensatenegativebalancenotificationrecord"></a>
<a id="tocscompensatenegativebalancenotificationrecord"></a>

```json
{
  "accountCode": "string",
  "amount": {
    "currency": "str",
    "value": 0
  },
  "transferDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|false|none|The code of the account whose negative balance has been compensated.|
|amount|[Amount](#schemaamount)|false|none|The amount compensated.|
|transferDate|string(date-time)|false|none|The date on which the compensation took place.|

<h2 id="tocS_CreateAccountHolderResponse">CreateAccountHolderResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountholderresponse"></a>
<a id="schema_CreateAccountHolderResponse"></a>
<a id="tocScreateaccountholderresponse"></a>
<a id="tocscreateaccountholderresponse"></a>

```json
{
  "accountCode": "string",
  "accountHolderCode": "string",
  "accountHolderDetails": {
    "address": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "bankAccountDetails": [
      {
        "accountNumber": "string",
        "accountType": "string",
        "bankAccountName": "string",
        "bankAccountReference": "string",
        "bankAccountUUID": "string",
        "bankBicSwift": "string",
        "bankCity": "string",
        "bankCode": "string",
        "bankName": "string",
        "branchCode": "string",
        "checkCode": "string",
        "countryCode": "string",
        "currencyCode": "string",
        "iban": "string",
        "ownerCity": "string",
        "ownerCountryCode": "string",
        "ownerDateOfBirth": "string",
        "ownerHouseNumberOrName": "string",
        "ownerName": "string",
        "ownerNationality": "string",
        "ownerPostalCode": "string",
        "ownerState": "string",
        "ownerStreet": "string",
        "primaryAccount": true,
        "taxId": "string",
        "urlForVerification": "string"
      }
    ],
    "bankAggregatorDataReference": "string",
    "businessDetails": {
      "doingBusinessAs": "string",
      "legalBusinessName": "string",
      "listedUltimateParentCompany": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "businessDetails": {
            "legalBusinessName": "string",
            "registrationNumber": "string",
            "stockExchange": "string",
            "stockNumber": "string",
            "stockTicker": "string"
          },
          "ultimateParentCompanyCode": "string"
        }
      ],
      "registrationNumber": "string",
      "shareholders": [
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
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "shareholderCode": "string",
          "shareholderReference": "string",
          "shareholderType": "Controller",
          "webAddress": "string"
        }
      ],
      "signatories": [
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
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "signatoryCode": "string",
          "signatoryReference": "string",
          "webAddress": "string"
        }
      ],
      "stockExchange": "string",
      "stockNumber": "string",
      "stockTicker": "string",
      "taxId": "string"
    },
    "email": "string",
    "fullPhoneNumber": "string",
    "individualDetails": {
      "name": {
        "firstName": "string",
        "gender": "MALE",
        "infix": "string",
        "lastName": "string"
      },
      "personalData": {
        "dateOfBirth": "string",
        "documentData": [
          {
            "expirationDate": "string",
            "issuerCountry": "st",
            "issuerState": "string",
            "number": "string",
            "type": "DRIVINGLICENSE"
          }
        ],
        "nationality": "st"
      }
    },
    "lastReviewDate": "string",
    "legalArrangements": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "legalArrangementCode": "string",
        "legalArrangementEntities": [
          {
            "address": {
              "city": "string",
              "country": "string",
              "houseNumberOrName": "string",
              "postalCode": "string",
              "stateOrProvince": "string",
              "street": "string"
            },
            "businessDetails": {
              "doingBusinessAs": "string",
              "legalBusinessName": "string",
              "listedUltimateParentCompany": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "businessDetails": {
                    "legalBusinessName": "string",
                    "registrationNumber": "string",
                    "stockExchange": "string",
                    "stockNumber": "string",
                    "stockTicker": "string"
                  },
                  "ultimateParentCompanyCode": "string"
                }
              ],
              "registrationNumber": "string",
              "shareholders": [
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
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "shareholderCode": "string",
                  "shareholderReference": "string",
                  "shareholderType": "Controller",
                  "webAddress": "string"
                }
              ],
              "signatories": [
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
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "signatoryCode": "string",
                  "signatoryReference": "string",
                  "webAddress": "string"
                }
              ],
              "stockExchange": "string",
              "stockNumber": "string",
              "stockTicker": "string",
              "taxId": "string"
            },
            "email": "string",
            "fullPhoneNumber": "string",
            "individualDetails": {
              "name": {
                "firstName": "string",
                "gender": "MALE",
                "infix": "string",
                "lastName": "string"
              },
              "personalData": {
                "dateOfBirth": "string",
                "documentData": [
                  {
                    "expirationDate": "string",
                    "issuerCountry": "st",
                    "issuerState": "string",
                    "number": "string",
                    "type": "DRIVINGLICENSE"
                  }
                ],
                "nationality": "st"
              }
            },
            "legalArrangementEntityCode": "string",
            "legalArrangementEntityReference": "string",
            "legalArrangementMembers": [
              "Beneficiary"
            ],
            "legalEntityType": "Business",
            "phoneNumber": {
              "phoneCountryCode": "string",
              "phoneNumber": "string",
              "phoneType": "Fax"
            },
            "webAddress": "string"
          }
        ],
        "legalArrangementReference": "string",
        "legalForm": "CashManagementTrust",
        "name": "string",
        "registrationNumber": "string",
        "taxNumber": "string",
        "type": "Association"
      }
    ],
    "merchantCategoryCode": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "payoutMethods": [
      {
        "merchantAccount": "string",
        "payoutMethodCode": "string",
        "payoutMethodReference": "string",
        "recurringDetailReference": "string",
        "shopperReference": "string"
      }
    ],
    "phoneNumber": {
      "phoneCountryCode": "string",
      "phoneNumber": "string",
      "phoneType": "Fax"
    },
    "principalBusinessAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "storeDetails": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "fullPhoneNumber": "string",
        "logo": "string",
        "merchantAccount": "string",
        "merchantCategoryCode": "string",
        "merchantHouseNumber": "string",
        "phoneNumber": {
          "phoneCountryCode": "string",
          "phoneNumber": "string",
          "phoneType": "Fax"
        },
        "shopperInteraction": "Ecommerce",
        "splitConfigurationUUID": "string",
        "status": "Active",
        "store": "string",
        "storeName": "string",
        "storeReference": "string",
        "virtualAccount": "string",
        "webAddress": "string"
      }
    ],
    "webAddress": "string"
  },
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "description": "string",
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
  "legalEntity": "Business",
  "primaryCurrency": "string",
  "pspReference": "string",
  "resultCode": "string",
  "verification": {
    "accountHolder": {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ]
    },
    "legalArrangements": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string"
      }
    ],
    "legalArrangementsEntities": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string",
        "legalArrangementEntityCode": "string"
      }
    ],
    "payoutMethods": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "payoutMethodCode": "string"
      }
    ],
    "shareholders": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string",
        "legalArrangementEntityCode": "string",
        "shareholderCode": "string"
      }
    ],
    "signatories": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "signatoryCode": "string"
      }
    ],
    "ultimateParentCompany": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "ultimateParentCompanyCode": "string"
      }
    ]
  },
  "verificationProfile": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|false|none|The code of a new account created for the account holder.|
|accountHolderCode|string|false|none|The code of the new account holder.|
|accountHolderDetails|[AccountHolderDetails](#schemaaccountholderdetails)|false|none|Details of the new account holder.|
|accountHolderStatus|[AccountHolderStatus](#schemaaccountholderstatus)|false|none|The status of the new account holder.|
|description|string|false|none|The description of the new account holder.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|A list of fields that caused the `/createAccountHolder` request to fail.|
|legalEntity|string|false|none|The type of legal entity of the new account holder.|
|primaryCurrency|string|false|none|**Deprecated.** The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|
|verification|[KYCVerificationResult](#schemakycverificationresult)|false|none|The details of KYC Verification of the account holder.|
|verificationProfile|string|false|none|The identifier of the profile that applies to this entity.|

#### Enumerated Values

|Property|Value|
|---|---|
|legalEntity|Business|
|legalEntity|Individual|
|legalEntity|NonProfit|
|legalEntity|Partnership|
|legalEntity|PublicCompany|

<h2 id="tocS_CreateAccountResponse">CreateAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountresponse"></a>
<a id="schema_CreateAccountResponse"></a>
<a id="tocScreateaccountresponse"></a>
<a id="tocscreateaccountresponse"></a>

```json
{
  "accountCode": "string",
  "accountHolderCode": "string",
  "bankAccountUUID": "string",
  "description": "string",
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
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "payoutMethodCode": "string",
  "payoutSchedule": {
    "nextScheduledPayout": "1970-01-01T00:00:00Z",
    "schedule": "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"
  },
  "payoutSpeed": "INSTANT",
  "pspReference": "string",
  "resultCode": "string",
  "status": "Active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|false|none|The code of the new account.|
|accountHolderCode|string|false|none|The code of the account holder.|
|bankAccountUUID|string|false|none|The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.|
|description|string|false|none|The description of the account.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|A list of fields that caused the `/createAccount` request to fail.|
|metadata|object|false|none|A set of key and value pairs containing metadata.|
|payoutMethodCode|string|false|none|The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code.|
|payoutSchedule|[PayoutScheduleResponse](#schemapayoutscheduleresponse)|false|none|The details of the payout schedule added to the account.|
|payoutSpeed|string|false|none|Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|
|status|string|false|none|The status of the account.<br>>Permitted values: `Active`.|

#### Enumerated Values

|Property|Value|
|---|---|
|payoutSpeed|INSTANT|
|payoutSpeed|SAME_DAY|
|payoutSpeed|STANDARD|
|status|Active|
|status|Closed|
|status|Inactive|
|status|Suspended|

<h2 id="tocS_DirectDebitInitiatedNotification">DirectDebitInitiatedNotification</h2>
<!-- backwards compatibility -->
<a id="schemadirectdebitinitiatednotification"></a>
<a id="schema_DirectDebitInitiatedNotification"></a>
<a id="tocSdirectdebitinitiatednotification"></a>
<a id="tocsdirectdebitinitiatednotification"></a>

```json
{
  "content": {
    "accountCode": "string",
    "amount": {
      "currency": "str",
      "value": 0
    },
    "debitInitiationDate": {
      "month": 0,
      "year": 0
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
    "merchantAccountCode": "string",
    "splits": [
      {
        "account": "string",
        "amount": {
          "currency": "str",
          "value": 0
        },
        "description": "string",
        "reference": "string",
        "type": "AcquiringFees"
      }
    ],
    "status": {
      "message": {
        "code": "string",
        "text": "string"
      },
      "statusCode": "string"
    }
  },
  "error": {
    "errorCode": "string",
    "message": "string"
  },
  "eventDate": "1970-01-01T00:00:00Z",
  "eventType": "string",
  "executingUserKey": "string",
  "live": true,
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[DirectDebitInitiatedNotificationContent](#schemadirectdebitinitiatednotificationcontent)|false|none|Details of the direct debit.|
|error|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|none|Error information of failed request. No value provided here if no error occurred on processing.|
|eventDate|string(date-time)|true|none|The date and time when an event has been completed.|
|eventType|string|true|none|The event type of the notification.|
|executingUserKey|string|true|none|The user or process that has triggered the notification.|
|live|boolean|true|none|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|pspReference|string|true|none|The PSP reference of the request from which the notification originates.|

<h2 id="tocS_DirectDebitInitiatedNotificationContent">DirectDebitInitiatedNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemadirectdebitinitiatednotificationcontent"></a>
<a id="schema_DirectDebitInitiatedNotificationContent"></a>
<a id="tocSdirectdebitinitiatednotificationcontent"></a>
<a id="tocsdirectdebitinitiatednotificationcontent"></a>

```json
{
  "accountCode": "string",
  "amount": {
    "currency": "str",
    "value": 0
  },
  "debitInitiationDate": {
    "month": 0,
    "year": 0
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
  "merchantAccountCode": "string",
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ],
  "status": {
    "message": {
      "code": "string",
      "text": "string"
    },
    "statusCode": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|true|none|The code of the account.|
|amount|[Amount](#schemaamount)|true|none|The amount to be debited from the funding account.|
|debitInitiationDate|[LocalDate](#schemalocaldate)|false|none|The date of the debit initiation.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Invalid fields list.|
|merchantAccountCode|string|true|none|The code of the merchant account.|
|splits|[[Split](#schemasplit)]|false|none|The split data for the debit request.|
|status|[OperationStatus](#schemaoperationstatus)|false|none|Direct debit status.|

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

<h2 id="tocS_IndividualDetails">IndividualDetails</h2>
<!-- backwards compatibility -->
<a id="schemaindividualdetails"></a>
<a id="schema_IndividualDetails"></a>
<a id="tocSindividualdetails"></a>
<a id="tocsindividualdetails"></a>

```json
{
  "name": {
    "firstName": "string",
    "gender": "MALE",
    "infix": "string",
    "lastName": "string"
  },
  "personalData": {
    "dateOfBirth": "string",
    "documentData": [
      {
        "expirationDate": "string",
        "issuerCountry": "st",
        "issuerState": "string",
        "number": "string",
        "type": "DRIVINGLICENSE"
      }
    ],
    "nationality": "st"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[ViasName](#schemaviasname)|false|none|The name of the individual.<br>>Make sure your account holder registers using the name shown on their Photo ID. <br> Maximum length: 80 characters <br> Cannot contain numbers. /n Cannot be empty.|
|personalData|[ViasPersonalData](#schemaviaspersonaldata)|false|none|Personal information of the individual.|

<h2 id="tocS_KYCCheckResult">KYCCheckResult</h2>
<!-- backwards compatibility -->
<a id="schemakyccheckresult"></a>
<a id="schema_KYCCheckResult"></a>
<a id="tocSkyccheckresult"></a>
<a id="tocskyccheckresult"></a>

```json
{
  "checks": [
    {
      "requiredFields": [
        "string"
      ],
      "status": "AWAITING_DATA",
      "summary": {
        "kycCheckCode": 0,
        "kycCheckDescription": "string"
      },
      "type": "BANK_ACCOUNT_VERIFICATION"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|[[KYCCheckStatusData](#schemakyccheckstatusdata)]|false|none|A list of the checks and their statuses.|

<h2 id="tocS_KYCCheckStatusData">KYCCheckStatusData</h2>
<!-- backwards compatibility -->
<a id="schemakyccheckstatusdata"></a>
<a id="schema_KYCCheckStatusData"></a>
<a id="tocSkyccheckstatusdata"></a>
<a id="tocskyccheckstatusdata"></a>

```json
{
  "requiredFields": [
    "string"
  ],
  "status": "AWAITING_DATA",
  "summary": {
    "kycCheckCode": 0,
    "kycCheckDescription": "string"
  },
  "type": "BANK_ACCOUNT_VERIFICATION"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requiredFields|[string]|false|none|A list of the fields required for execution of the check.|
|status|string|true|none|The status of the check.<br><br>Possible values: **AWAITING_DATA** , **DATA_PROVIDED**, **FAILED**, **INVALID_DATA**, **PASSED**, **PENDING**, **RETRY_LIMIT_REACHED**.|
|summary|[KYCCheckSummary](#schemakycchecksummary)|false|none|A summary of the execution of the check.|
|type|string|true|none|The type of check.<br><br>Possible values:<br><br> * **BANK_ACCOUNT_VERIFICATION**: Used in v5 and earlier. Replaced by **PAYOUT_METHOD_VERIFICATION** in v6 and later.<br><br> * **COMPANY_VERIFICATION**<br><br>  * **CARD_VERIFICATION**<br><br>* **IDENTITY_VERIFICATION**<br><br>* **LEGAL_ARRANGEMENT_VERIFICATION**<br><br>* **NONPROFIT_VERIFICATION**<br><br> * **PASSPORT_VERIFICATION**<br><br>* **PAYOUT_METHOD_VERIFICATION**: Used in v6 and later.<br><br>* **PCI_VERIFICATION**|

#### Enumerated Values

|Property|Value|
|---|---|
|status|AWAITING_DATA|
|status|DATA_PROVIDED|
|status|FAILED|
|status|INVALID_DATA|
|status|PASSED|
|status|PENDING|
|status|PENDING_REVIEW|
|status|RETRY_LIMIT_REACHED|
|status|UNCHECKED|
|type|BANK_ACCOUNT_VERIFICATION|
|type|CARD_VERIFICATION|
|type|COMPANY_VERIFICATION|
|type|IDENTITY_VERIFICATION|
|type|LEGAL_ARRANGEMENT_VERIFICATION|
|type|NONPROFIT_VERIFICATION|
|type|PASSPORT_VERIFICATION|
|type|PAYOUT_METHOD_VERIFICATION|
|type|PCI_VERIFICATION|

<h2 id="tocS_KYCCheckSummary">KYCCheckSummary</h2>
<!-- backwards compatibility -->
<a id="schemakycchecksummary"></a>
<a id="schema_KYCCheckSummary"></a>
<a id="tocSkycchecksummary"></a>
<a id="tocskycchecksummary"></a>

```json
{
  "kycCheckCode": 0,
  "kycCheckDescription": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kycCheckCode|integer(int32)|false|none|The code of the check. For possible values, refer to [Verification codes](https://docs.adyen.com/classic-platforms/verification-process/verification-codes).|
|kycCheckDescription|string|false|none|A description of the check.|

<h2 id="tocS_KYCLegalArrangementCheckResult">KYCLegalArrangementCheckResult</h2>
<!-- backwards compatibility -->
<a id="schemakyclegalarrangementcheckresult"></a>
<a id="schema_KYCLegalArrangementCheckResult"></a>
<a id="tocSkyclegalarrangementcheckresult"></a>
<a id="tocskyclegalarrangementcheckresult"></a>

```json
{
  "checks": [
    {
      "requiredFields": [
        "string"
      ],
      "status": "AWAITING_DATA",
      "summary": {
        "kycCheckCode": 0,
        "kycCheckDescription": "string"
      },
      "type": "BANK_ACCOUNT_VERIFICATION"
    }
  ],
  "legalArrangementCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|[[KYCCheckStatusData](#schemakyccheckstatusdata)]|false|none|A list of the checks and their statuses.|
|legalArrangementCode|string|false|none|The unique ID of the legal arrangement to which the check applies.|

<h2 id="tocS_KYCLegalArrangementEntityCheckResult">KYCLegalArrangementEntityCheckResult</h2>
<!-- backwards compatibility -->
<a id="schemakyclegalarrangemententitycheckresult"></a>
<a id="schema_KYCLegalArrangementEntityCheckResult"></a>
<a id="tocSkyclegalarrangemententitycheckresult"></a>
<a id="tocskyclegalarrangemententitycheckresult"></a>

```json
{
  "checks": [
    {
      "requiredFields": [
        "string"
      ],
      "status": "AWAITING_DATA",
      "summary": {
        "kycCheckCode": 0,
        "kycCheckDescription": "string"
      },
      "type": "BANK_ACCOUNT_VERIFICATION"
    }
  ],
  "legalArrangementCode": "string",
  "legalArrangementEntityCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|[[KYCCheckStatusData](#schemakyccheckstatusdata)]|false|none|A list of the checks and their statuses.|
|legalArrangementCode|string|false|none|The unique ID of the legal arrangement to which the entity belongs.|
|legalArrangementEntityCode|string|false|none|The unique ID of the legal arrangement entity to which the check applies.|

<h2 id="tocS_KYCPayoutMethodCheckResult">KYCPayoutMethodCheckResult</h2>
<!-- backwards compatibility -->
<a id="schemakycpayoutmethodcheckresult"></a>
<a id="schema_KYCPayoutMethodCheckResult"></a>
<a id="tocSkycpayoutmethodcheckresult"></a>
<a id="tocskycpayoutmethodcheckresult"></a>

```json
{
  "checks": [
    {
      "requiredFields": [
        "string"
      ],
      "status": "AWAITING_DATA",
      "summary": {
        "kycCheckCode": 0,
        "kycCheckDescription": "string"
      },
      "type": "BANK_ACCOUNT_VERIFICATION"
    }
  ],
  "payoutMethodCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|[[KYCCheckStatusData](#schemakyccheckstatusdata)]|false|none|A list of the checks and their statuses.|
|payoutMethodCode|string|false|none|The unique ID of the payoput method to which the check applies.|

<h2 id="tocS_KYCShareholderCheckResult">KYCShareholderCheckResult</h2>
<!-- backwards compatibility -->
<a id="schemakycshareholdercheckresult"></a>
<a id="schema_KYCShareholderCheckResult"></a>
<a id="tocSkycshareholdercheckresult"></a>
<a id="tocskycshareholdercheckresult"></a>

```json
{
  "checks": [
    {
      "requiredFields": [
        "string"
      ],
      "status": "AWAITING_DATA",
      "summary": {
        "kycCheckCode": 0,
        "kycCheckDescription": "string"
      },
      "type": "BANK_ACCOUNT_VERIFICATION"
    }
  ],
  "legalArrangementCode": "string",
  "legalArrangementEntityCode": "string",
  "shareholderCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|[[KYCCheckStatusData](#schemakyccheckstatusdata)]|false|none|A list of the checks and their statuses.|
|legalArrangementCode|string|false|none|The unique ID of the legal arrangement to which the shareholder belongs, if applicable.|
|legalArrangementEntityCode|string|false|none|The unique ID of the legal arrangement entity to which the shareholder belongs, if applicable.|
|shareholderCode|string|false|none|The code of the shareholder to which the check applies.|

<h2 id="tocS_KYCSignatoryCheckResult">KYCSignatoryCheckResult</h2>
<!-- backwards compatibility -->
<a id="schemakycsignatorycheckresult"></a>
<a id="schema_KYCSignatoryCheckResult"></a>
<a id="tocSkycsignatorycheckresult"></a>
<a id="tocskycsignatorycheckresult"></a>

```json
{
  "checks": [
    {
      "requiredFields": [
        "string"
      ],
      "status": "AWAITING_DATA",
      "summary": {
        "kycCheckCode": 0,
        "kycCheckDescription": "string"
      },
      "type": "BANK_ACCOUNT_VERIFICATION"
    }
  ],
  "signatoryCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|[[KYCCheckStatusData](#schemakyccheckstatusdata)]|false|none|A list of the checks and their statuses.|
|signatoryCode|string|false|none|The code of the signatory to which the check applies.|

<h2 id="tocS_KYCUltimateParentCompanyCheckResult">KYCUltimateParentCompanyCheckResult</h2>
<!-- backwards compatibility -->
<a id="schemakycultimateparentcompanycheckresult"></a>
<a id="schema_KYCUltimateParentCompanyCheckResult"></a>
<a id="tocSkycultimateparentcompanycheckresult"></a>
<a id="tocskycultimateparentcompanycheckresult"></a>

```json
{
  "checks": [
    {
      "requiredFields": [
        "string"
      ],
      "status": "AWAITING_DATA",
      "summary": {
        "kycCheckCode": 0,
        "kycCheckDescription": "string"
      },
      "type": "BANK_ACCOUNT_VERIFICATION"
    }
  ],
  "ultimateParentCompanyCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|[[KYCCheckStatusData](#schemakyccheckstatusdata)]|false|none|A list of the checks and their statuses.|
|ultimateParentCompanyCode|string|false|none|The code of the Ultimate Parent Company to which the check applies.|

<h2 id="tocS_KYCVerificationResult">KYCVerificationResult</h2>
<!-- backwards compatibility -->
<a id="schemakycverificationresult"></a>
<a id="schema_KYCVerificationResult"></a>
<a id="tocSkycverificationresult"></a>
<a id="tocskycverificationresult"></a>

```json
{
  "accountHolder": {
    "checks": [
      {
        "requiredFields": [
          "string"
        ],
        "status": "AWAITING_DATA",
        "summary": {
          "kycCheckCode": 0,
          "kycCheckDescription": "string"
        },
        "type": "BANK_ACCOUNT_VERIFICATION"
      }
    ]
  },
  "legalArrangements": [
    {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ],
      "legalArrangementCode": "string"
    }
  ],
  "legalArrangementsEntities": [
    {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ],
      "legalArrangementCode": "string",
      "legalArrangementEntityCode": "string"
    }
  ],
  "payoutMethods": [
    {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ],
      "payoutMethodCode": "string"
    }
  ],
  "shareholders": [
    {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ],
      "legalArrangementCode": "string",
      "legalArrangementEntityCode": "string",
      "shareholderCode": "string"
    }
  ],
  "signatories": [
    {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ],
      "signatoryCode": "string"
    }
  ],
  "ultimateParentCompany": [
    {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ],
      "ultimateParentCompanyCode": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolder|[KYCCheckResult](#schemakyccheckresult)|false|none|The results of the checks on the account holder.|
|legalArrangements|[[KYCLegalArrangementCheckResult](#schemakyclegalarrangementcheckresult)]|false|none|The results of the checks on the legal arrangements.|
|legalArrangementsEntities|[[KYCLegalArrangementEntityCheckResult](#schemakyclegalarrangemententitycheckresult)]|false|none|The results of the checks on the legal arrangement entities.|
|payoutMethods|[[KYCPayoutMethodCheckResult](#schemakycpayoutmethodcheckresult)]|false|none|The results of the checks on the payout methods.|
|shareholders|[[KYCShareholderCheckResult](#schemakycshareholdercheckresult)]|false|none|The results of the checks on the shareholders.|
|signatories|[[KYCSignatoryCheckResult](#schemakycsignatorycheckresult)]|false|none|The results of the checks on the signatories.|
|ultimateParentCompany|[[KYCUltimateParentCompanyCheckResult](#schemakycultimateparentcompanycheckresult)]|false|none|The result of the check on the Ultimate Parent Company.|

<h2 id="tocS_LegalArrangementDetail">LegalArrangementDetail</h2>
<!-- backwards compatibility -->
<a id="schemalegalarrangementdetail"></a>
<a id="schema_LegalArrangementDetail"></a>
<a id="tocSlegalarrangementdetail"></a>
<a id="tocslegalarrangementdetail"></a>

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
  "legalArrangementCode": "string",
  "legalArrangementEntities": [
    {
      "address": {
        "city": "string",
        "country": "string",
        "houseNumberOrName": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "businessDetails": {
        "doingBusinessAs": "string",
        "legalBusinessName": "string",
        "listedUltimateParentCompany": [
          {
            "address": {
              "city": "string",
              "country": "string",
              "houseNumberOrName": "string",
              "postalCode": "string",
              "stateOrProvince": "string",
              "street": "string"
            },
            "businessDetails": {
              "legalBusinessName": "string",
              "registrationNumber": "string",
              "stockExchange": "string",
              "stockNumber": "string",
              "stockTicker": "string"
            },
            "ultimateParentCompanyCode": "string"
          }
        ],
        "registrationNumber": "string",
        "shareholders": [
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
            "fullPhoneNumber": "string",
            "jobTitle": "string",
            "name": {
              "firstName": "string",
              "gender": "MALE",
              "infix": "string",
              "lastName": "string"
            },
            "personalData": {
              "dateOfBirth": "string",
              "documentData": [
                {
                  "expirationDate": "string",
                  "issuerCountry": "st",
                  "issuerState": "string",
                  "number": "string",
                  "type": "DRIVINGLICENSE"
                }
              ],
              "nationality": "st"
            },
            "phoneNumber": {
              "phoneCountryCode": "string",
              "phoneNumber": "string",
              "phoneType": "Fax"
            },
            "shareholderCode": "string",
            "shareholderReference": "string",
            "shareholderType": "Controller",
            "webAddress": "string"
          }
        ],
        "signatories": [
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
            "fullPhoneNumber": "string",
            "jobTitle": "string",
            "name": {
              "firstName": "string",
              "gender": "MALE",
              "infix": "string",
              "lastName": "string"
            },
            "personalData": {
              "dateOfBirth": "string",
              "documentData": [
                {
                  "expirationDate": "string",
                  "issuerCountry": "st",
                  "issuerState": "string",
                  "number": "string",
                  "type": "DRIVINGLICENSE"
                }
              ],
              "nationality": "st"
            },
            "phoneNumber": {
              "phoneCountryCode": "string",
              "phoneNumber": "string",
              "phoneType": "Fax"
            },
            "signatoryCode": "string",
            "signatoryReference": "string",
            "webAddress": "string"
          }
        ],
        "stockExchange": "string",
        "stockNumber": "string",
        "stockTicker": "string",
        "taxId": "string"
      },
      "email": "string",
      "fullPhoneNumber": "string",
      "individualDetails": {
        "name": {
          "firstName": "string",
          "gender": "MALE",
          "infix": "string",
          "lastName": "string"
        },
        "personalData": {
          "dateOfBirth": "string",
          "documentData": [
            {
              "expirationDate": "string",
              "issuerCountry": "st",
              "issuerState": "string",
              "number": "string",
              "type": "DRIVINGLICENSE"
            }
          ],
          "nationality": "st"
        }
      },
      "legalArrangementEntityCode": "string",
      "legalArrangementEntityReference": "string",
      "legalArrangementMembers": [
        "Beneficiary"
      ],
      "legalEntityType": "Business",
      "phoneNumber": {
        "phoneCountryCode": "string",
        "phoneNumber": "string",
        "phoneType": "Fax"
      },
      "webAddress": "string"
    }
  ],
  "legalArrangementReference": "string",
  "legalForm": "CashManagementTrust",
  "name": "string",
  "registrationNumber": "string",
  "taxNumber": "string",
  "type": "Association"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[ViasAddress](#schemaviasaddress)|true|none|The address of the legal arrangement.|
|legalArrangementCode|string|false|none|Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create a legal arrangement.<br>Use only when updating an account holder. If you include this field when creating an account holder, the request will fail.|
|legalArrangementEntities|[[LegalArrangementEntityDetail](#schemalegalarrangemententitydetail)]|false|none|An array containing information about other entities that are part of the legal arrangement.|
|legalArrangementReference|string|false|none|Your reference for the legal arrangement. Must be between 3 to 128 characters.|
|legalForm|string|false|none|The form of legal arrangement. Required if `type` is **Trust** or **Partnership**.<br><br>The possible values depend on the `type`.<br><br>- For `type` **Trust**:  **CashManagementTrust**, **CorporateUnitTrust**, **DeceasedEstate**, **DiscretionaryInvestmentTrust**, **DiscretionaryServicesManagementTrust**, **DiscretionaryTradingTrust**, **FirstHomeSaverAccountsTrust**, **FixedTrust**, **FixedUnitTrust**, **HybridTrust**, **ListedPublicUnitTrust**, **OtherTrust**, **PooledSuperannuationTrust**, **PublicTradingTrust**, or **UnlistedPublicUnitTrust**.<br><br>- For `type` **Partnership**: **LimitedPartnership**, **FamilyPartnership**, or **OtherPartnership**|
|name|string|true|none|The legal name of the legal arrangement. Minimum length: 3 characters.|
|registrationNumber|string|false|none|The registration number of the legal arrangement.|
|taxNumber|string|false|none|The tax identification number of the legal arrangement.|
|type|string|true|none|The [type of legal arrangement](https://docs.adyen.com/classic-platforms/verification-process/legal-arrangements#types-of-legal-arrangements).<br><br>Possible values:<br><br>- **Association** <br><br>- **Partnership** <br><br>- **SoleProprietorship** <br><br>- **Trust** <br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|legalForm|CashManagementTrust|
|legalForm|CorporateUnitTrust|
|legalForm|DeceasedEstate|
|legalForm|DiscretionaryInvestmentTrust|
|legalForm|DiscretionaryServicesManagementTrust|
|legalForm|DiscretionaryTradingTrust|
|legalForm|FirstHomeSaverAccountsTrust|
|legalForm|FixedTrust|
|legalForm|FixedUnitTrust|
|legalForm|HybridTrust|
|legalForm|ListedPublicUnitTrust|
|legalForm|OtherTrust|
|legalForm|PooledSuperannuationTrust|
|legalForm|PublicTradingTrust|
|legalForm|UnlistedPublicUnitTrust|
|legalForm|LimitedPartnership|
|legalForm|FamilyPartnership|
|legalForm|OtherPartnership|
|type|Association|
|type|Partnership|
|type|SoleProprietorship|
|type|Trust|

<h2 id="tocS_LegalArrangementEntityDetail">LegalArrangementEntityDetail</h2>
<!-- backwards compatibility -->
<a id="schemalegalarrangemententitydetail"></a>
<a id="schema_LegalArrangementEntityDetail"></a>
<a id="tocSlegalarrangemententitydetail"></a>
<a id="tocslegalarrangemententitydetail"></a>

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
  "businessDetails": {
    "doingBusinessAs": "string",
    "legalBusinessName": "string",
    "listedUltimateParentCompany": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "businessDetails": {
          "legalBusinessName": "string",
          "registrationNumber": "string",
          "stockExchange": "string",
          "stockNumber": "string",
          "stockTicker": "string"
        },
        "ultimateParentCompanyCode": "string"
      }
    ],
    "registrationNumber": "string",
    "shareholders": [
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
        "fullPhoneNumber": "string",
        "jobTitle": "string",
        "name": {
          "firstName": "string",
          "gender": "MALE",
          "infix": "string",
          "lastName": "string"
        },
        "personalData": {
          "dateOfBirth": "string",
          "documentData": [
            {
              "expirationDate": "string",
              "issuerCountry": "st",
              "issuerState": "string",
              "number": "string",
              "type": "DRIVINGLICENSE"
            }
          ],
          "nationality": "st"
        },
        "phoneNumber": {
          "phoneCountryCode": "string",
          "phoneNumber": "string",
          "phoneType": "Fax"
        },
        "shareholderCode": "string",
        "shareholderReference": "string",
        "shareholderType": "Controller",
        "webAddress": "string"
      }
    ],
    "signatories": [
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
        "fullPhoneNumber": "string",
        "jobTitle": "string",
        "name": {
          "firstName": "string",
          "gender": "MALE",
          "infix": "string",
          "lastName": "string"
        },
        "personalData": {
          "dateOfBirth": "string",
          "documentData": [
            {
              "expirationDate": "string",
              "issuerCountry": "st",
              "issuerState": "string",
              "number": "string",
              "type": "DRIVINGLICENSE"
            }
          ],
          "nationality": "st"
        },
        "phoneNumber": {
          "phoneCountryCode": "string",
          "phoneNumber": "string",
          "phoneType": "Fax"
        },
        "signatoryCode": "string",
        "signatoryReference": "string",
        "webAddress": "string"
      }
    ],
    "stockExchange": "string",
    "stockNumber": "string",
    "stockTicker": "string",
    "taxId": "string"
  },
  "email": "string",
  "fullPhoneNumber": "string",
  "individualDetails": {
    "name": {
      "firstName": "string",
      "gender": "MALE",
      "infix": "string",
      "lastName": "string"
    },
    "personalData": {
      "dateOfBirth": "string",
      "documentData": [
        {
          "expirationDate": "string",
          "issuerCountry": "st",
          "issuerState": "string",
          "number": "string",
          "type": "DRIVINGLICENSE"
        }
      ],
      "nationality": "st"
    }
  },
  "legalArrangementEntityCode": "string",
  "legalArrangementEntityReference": "string",
  "legalArrangementMembers": [
    "Beneficiary"
  ],
  "legalEntityType": "Business",
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
|address|[ViasAddress](#schemaviasaddress)|false|none|The address of the entity.|
|businessDetails|[BusinessDetails](#schemabusinessdetails)|false|none|Required when creating an entity with `legalEntityType` **Business**, **NonProfit**, **PublicCompany**, or **Partnership**.|
|email|string|false|none|The e-mail address of the entity.|
|fullPhoneNumber|string|false|none|The phone number of the contact provided as a single string.  It will be handled as a landline phone.<br>**Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"|
|individualDetails|[IndividualDetails](#schemaindividualdetails)|false|none|Required when creating an entity with `legalEntityType` **Individual**.|
|legalArrangementEntityCode|string|false|none|Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create a legal arrangement entity.<br>Use only when updating an account holder. If you include this field when creating an account holder, the request will fail.|
|legalArrangementEntityReference|string|false|none|Your reference for the legal arrangement entity.|
|legalArrangementMembers|[string]|false|none|An array containing the roles of the entity in the legal arrangement.<br><br>The possible values depend on the legal arrangement `type`.<br><br>- For `type` **Association**: **ControllingPerson** and **Shareholder**.<br><br>- For `type` **Partnership**: **Partner** and **Shareholder**.<br><br>- For `type` **Trust**: **Trustee**, **Settlor**, **Protector**, **Beneficiary**,  and **Shareholder**.<br><br>|
|legalEntityType|string|false|none|The legal entity type.<br><br>Possible values: **Business**, **Individual**, **NonProfit**, **PublicCompany**, or **Partnership**. |
|phoneNumber|[ViasPhoneNumber](#schemaviasphonenumber)|false|none|The phone number of the entity.|
|webAddress|string|false|none|The URL of the website of the contact.|

#### Enumerated Values

|Property|Value|
|---|---|
|legalArrangementMembers|Beneficiary|
|legalArrangementMembers|ControllingPerson|
|legalArrangementMembers|Partner|
|legalArrangementMembers|Protector|
|legalArrangementMembers|Settlor|
|legalArrangementMembers|Shareholder|
|legalArrangementMembers|Trustee|
|legalEntityType|Business|
|legalEntityType|Individual|
|legalEntityType|NonProfit|
|legalEntityType|Partnership|
|legalEntityType|PublicCompany|

<h2 id="tocS_LocalDate">LocalDate</h2>
<!-- backwards compatibility -->
<a id="schemalocaldate"></a>
<a id="schema_LocalDate"></a>
<a id="tocSlocaldate"></a>
<a id="tocslocaldate"></a>

```json
{
  "month": 0,
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|month|integer(int32)|false|none|none|
|year|integer(int32)|false|none|none|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "code": "string",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The message code.|
|text|string|false|none|The message text.|

<h2 id="tocS_NotificationErrorContainer">NotificationErrorContainer</h2>
<!-- backwards compatibility -->
<a id="schemanotificationerrorcontainer"></a>
<a id="schema_NotificationErrorContainer"></a>
<a id="tocSnotificationerrorcontainer"></a>
<a id="tocsnotificationerrorcontainer"></a>

```json
{
  "errorCode": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|false|none|The Adyen code that is mapped to the error message.|
|message|string|false|none|A short explanation of the issue.|

<h2 id="tocS_NotificationResponse">NotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemanotificationresponse"></a>
<a id="schema_NotificationResponse"></a>
<a id="tocSnotificationresponse"></a>
<a id="tocsnotificationresponse"></a>

```json
{
  "notificationResponse": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationResponse|string|false|none|Set this parameter to **[accepted]** to acknowledge that you received a notification from Adyen.|

<h2 id="tocS_OperationStatus">OperationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaoperationstatus"></a>
<a id="schema_OperationStatus"></a>
<a id="tocSoperationstatus"></a>
<a id="tocsoperationstatus"></a>

```json
{
  "message": {
    "code": "string",
    "text": "string"
  },
  "statusCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[Message](#schemamessage)|false|none|The message regarding the operation status.|
|statusCode|string|false|none|The status code.|

<h2 id="tocS_PaymentFailureNotification">PaymentFailureNotification</h2>
<!-- backwards compatibility -->
<a id="schemapaymentfailurenotification"></a>
<a id="schema_PaymentFailureNotification"></a>
<a id="tocSpaymentfailurenotification"></a>
<a id="tocspaymentfailurenotification"></a>

```json
{
  "content": {
    "errorFields": [
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
    "errorMessage": {
      "code": "string",
      "text": "string"
    },
    "modificationMerchantReference": "string",
    "modificationPspReference": "string",
    "paymentMerchantReference": "string",
    "paymentPspReference": "string"
  },
  "error": {
    "errorCode": "string",
    "message": "string"
  },
  "eventDate": "1970-01-01T00:00:00Z",
  "eventType": "string",
  "executingUserKey": "string",
  "live": true,
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[PaymentFailureNotificationContent](#schemapaymentfailurenotificationcontent)|false|none|The details of the payment failure.|
|error|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|none|Error information of failed request. No value provided here if no error occurred on processing.|
|eventDate|string(date-time)|true|none|The date and time when an event has been completed.|
|eventType|string|true|none|The event type of the notification.|
|executingUserKey|string|true|none|The user or process that has triggered the notification.|
|live|boolean|true|none|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|pspReference|string|true|none|The PSP reference of the request from which the notification originates.|

<h2 id="tocS_PaymentFailureNotificationContent">PaymentFailureNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemapaymentfailurenotificationcontent"></a>
<a id="schema_PaymentFailureNotificationContent"></a>
<a id="tocSpaymentfailurenotificationcontent"></a>
<a id="tocspaymentfailurenotificationcontent"></a>

```json
{
  "errorFields": [
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
  "errorMessage": {
    "code": "string",
    "text": "string"
  },
  "modificationMerchantReference": "string",
  "modificationPspReference": "string",
  "paymentMerchantReference": "string",
  "paymentPspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Missing or invalid fields that caused the payment error.|
|errorMessage|[Message](#schemamessage)|false|none|The error message.|
|modificationMerchantReference|string|false|none|The `reference` of the capture or refund.|
|modificationPspReference|string|false|none|The `pspReference` of the capture or refund.|
|paymentMerchantReference|string|false|none|The `reference` of the payment.|
|paymentPspReference|string|false|none|The `pspReference` of the payment.|

<h2 id="tocS_PayoutMethod">PayoutMethod</h2>
<!-- backwards compatibility -->
<a id="schemapayoutmethod"></a>
<a id="schema_PayoutMethod"></a>
<a id="tocSpayoutmethod"></a>
<a id="tocspayoutmethod"></a>

```json
{
  "merchantAccount": "string",
  "payoutMethodCode": "string",
  "payoutMethodReference": "string",
  "recurringDetailReference": "string",
  "shopperReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantAccount|string|true|none|The [`merchantAccount`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__reqParam_merchantAccount) you used in the `/payments` request when you [saved the account holder's card details](https://docs.adyen.com/classic-platforms/payouts/manual-payout/payout-to-cards#check-and-store).|
|payoutMethodCode|string|false|none|Adyen-generated unique alphanumeric identifier (UUID) for the payout method, returned in the response when you create a payout method. Required when updating an existing payout method in an `/updateAccountHolder` request.|
|payoutMethodReference|string|false|none|Your reference for the payout method.|
|recurringDetailReference|string|true|none|The [`recurringDetailReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_additionalData-ResponseAdditionalDataCommon-recurring-recurringDetailReference)  returned in the `/payments` response when you [saved the account holder's card details](https://docs.adyen.com/classic-platforms/payouts/manual-payout/payout-to-cards#check-and-store).|
|shopperReference|string|true|none|The [`shopperReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__reqParam_shopperReference) you sent in the `/payments` request when you [saved the account holder's card details](https://docs.adyen.com/classic-platforms/payouts/manual-payout/payout-to-cards#check-and-store).|

<h2 id="tocS_PayoutScheduleResponse">PayoutScheduleResponse</h2>
<!-- backwards compatibility -->
<a id="schemapayoutscheduleresponse"></a>
<a id="schema_PayoutScheduleResponse"></a>
<a id="tocSpayoutscheduleresponse"></a>
<a id="tocspayoutscheduleresponse"></a>

```json
{
  "nextScheduledPayout": "1970-01-01T00:00:00Z",
  "schedule": "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextScheduledPayout|string(date-time)|false|none|The date of the next scheduled payout.|
|schedule|string|false|none|The payout schedule for the account.<br><br>Possible values: `DEFAULT`, `DAILY`, `DAILY_US`, `DAILY_EU`, `DAILY_AU`, `DAILY_SG`, `WEEKLY`, `WEEKLY_ON_TUE_FRI_MIDNIGHT`, `BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT`, `MONTHLY`, `HOLD`.<br>> `HOLD` prevents scheduled payouts, but you can still initiate payouts manually.|

#### Enumerated Values

|Property|Value|
|---|---|
|schedule|BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT|
|schedule|DAILY|
|schedule|DAILY_AU|
|schedule|DAILY_EU|
|schedule|DAILY_SG|
|schedule|DAILY_US|
|schedule|HOLD|
|schedule|MONTHLY|
|schedule|WEEKLY|
|schedule|WEEKLY_MON_TO_FRI_AU|
|schedule|WEEKLY_MON_TO_FRI_EU|
|schedule|WEEKLY_MON_TO_FRI_US|
|schedule|WEEKLY_ON_TUE_FRI_MIDNIGHT|
|schedule|WEEKLY_SUN_TO_THU_AU|
|schedule|WEEKLY_SUN_TO_THU_US|

<h2 id="tocS_PersonalDocumentData">PersonalDocumentData</h2>
<!-- backwards compatibility -->
<a id="schemapersonaldocumentdata"></a>
<a id="schema_PersonalDocumentData"></a>
<a id="tocSpersonaldocumentdata"></a>
<a id="tocspersonaldocumentdata"></a>

```json
{
  "expirationDate": "string",
  "issuerCountry": "st",
  "issuerState": "string",
  "number": "string",
  "type": "DRIVINGLICENSE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expirationDate|string|false|none|The expiry date of the document, <br> in ISO-8601 YYYY-MM-DD format. For example, **2000-01-31**.|
|issuerCountry|string|false|none|The country where the document was issued, in the two-character <br>[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **NL**.|
|issuerState|string|false|none|The state where the document was issued (if applicable).|
|number|string|false|none|The number in the document.|
|type|string|true|none|The type of the document. Possible values: **ID**, **DRIVINGLICENSE**, **PASSPORT**, **SOCIALSECURITY**, **VISA**.<br><br>To delete an existing entry for a document `type`, send only the `type` field in your request. |

#### Enumerated Values

|Property|Value|
|---|---|
|type|DRIVINGLICENSE|
|type|ID|
|type|PASSPORT|
|type|SOCIALSECURITY|
|type|VISA|

<h2 id="tocS_RefundFundsTransferNotification">RefundFundsTransferNotification</h2>
<!-- backwards compatibility -->
<a id="schemarefundfundstransfernotification"></a>
<a id="schema_RefundFundsTransferNotification"></a>
<a id="tocSrefundfundstransfernotification"></a>
<a id="tocsrefundfundstransfernotification"></a>

```json
{
  "content": {
    "amount": {
      "currency": "str",
      "value": 0
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
    "merchantReference": "string",
    "originalReference": "string",
    "status": {
      "message": {
        "code": "string",
        "text": "string"
      },
      "statusCode": "string"
    }
  },
  "error": {
    "errorCode": "string",
    "message": "string"
  },
  "eventDate": "1970-01-01T00:00:00Z",
  "eventType": "string",
  "executingUserKey": "string",
  "live": true,
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[RefundFundsTransferNotificationContent](#schemarefundfundstransfernotificationcontent)|false|none|Details of the fund transfer refund.|
|error|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|none|Error information of failed request. No value provided here if no error occurred on processing.|
|eventDate|string(date-time)|true|none|The date and time when an event has been completed.|
|eventType|string|true|none|The event type of the notification.|
|executingUserKey|string|true|none|The user or process that has triggered the notification.|
|live|boolean|true|none|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|pspReference|string|true|none|The PSP reference of the request from which the notification originates.|

<h2 id="tocS_RefundFundsTransferNotificationContent">RefundFundsTransferNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemarefundfundstransfernotificationcontent"></a>
<a id="schema_RefundFundsTransferNotificationContent"></a>
<a id="tocSrefundfundstransfernotificationcontent"></a>
<a id="tocsrefundfundstransfernotificationcontent"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
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
  "merchantReference": "string",
  "originalReference": "string",
  "status": {
    "message": {
      "code": "string",
      "text": "string"
    },
    "statusCode": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The amount to be refunded.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Invalid fields list.|
|merchantReference|string|false|none|A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.|
|originalReference|string|true|none|A PSP reference of the original fund transfer.|
|status|[OperationStatus](#schemaoperationstatus)|false|none|The status of the fund transfer refund.|

<h2 id="tocS_RefundResult">RefundResult</h2>
<!-- backwards compatibility -->
<a id="schemarefundresult"></a>
<a id="schema_RefundResult"></a>
<a id="tocSrefundresult"></a>
<a id="tocsrefundresult"></a>

```json
{
  "originalTransaction": {
    "amount": {
      "currency": "str",
      "value": 0
    },
    "bankAccountDetail": {
      "accountNumber": "string",
      "accountType": "string",
      "bankAccountName": "string",
      "bankAccountReference": "string",
      "bankAccountUUID": "string",
      "bankBicSwift": "string",
      "bankCity": "string",
      "bankCode": "string",
      "bankName": "string",
      "branchCode": "string",
      "checkCode": "string",
      "countryCode": "string",
      "currencyCode": "string",
      "iban": "string",
      "ownerCity": "string",
      "ownerCountryCode": "string",
      "ownerDateOfBirth": "string",
      "ownerHouseNumberOrName": "string",
      "ownerName": "string",
      "ownerNationality": "string",
      "ownerPostalCode": "string",
      "ownerState": "string",
      "ownerStreet": "string",
      "primaryAccount": true,
      "taxId": "string",
      "urlForVerification": "string"
    },
    "captureMerchantReference": "string",
    "capturePspReference": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "description": "string",
    "destinationAccountCode": "string",
    "disputePspReference": "string",
    "disputeReasonCode": "string",
    "merchantReference": "string",
    "paymentPspReference": "string",
    "payoutPspReference": "string",
    "pspReference": "string",
    "sourceAccountCode": "string",
    "transactionStatus": "BalanceNotPaidOutTransfer",
    "transferCode": "string"
  },
  "pspReference": "string",
  "response": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|originalTransaction|[Transaction](#schematransaction)|false|none|The transaction that has been refunded.|
|pspReference|string|false|none|The reference of the refund.|
|response|string|false|none|The response indicating if the refund has been received for processing.|

<h2 id="tocS_ReportAvailableNotification">ReportAvailableNotification</h2>
<!-- backwards compatibility -->
<a id="schemareportavailablenotification"></a>
<a id="schema_ReportAvailableNotification"></a>
<a id="tocSreportavailablenotification"></a>
<a id="tocsreportavailablenotification"></a>

```json
{
  "content": {
    "accountCode": "string",
    "accountType": "string",
    "eventDate": "1970-01-01T00:00:00Z",
    "remoteAccessUrl": "string",
    "success": true
  },
  "error": {
    "errorCode": "string",
    "message": "string"
  },
  "eventDate": "1970-01-01T00:00:00Z",
  "eventType": "string",
  "executingUserKey": "string",
  "live": true,
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[ReportAvailableNotificationContent](#schemareportavailablenotificationcontent)|false|none|Details of the report.|
|error|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|none|Error information of failed request. No value provided here if no error occurred on processing.|
|eventDate|string(date-time)|true|none|The date and time when an event has been completed.|
|eventType|string|true|none|The event type of the notification.|
|executingUserKey|string|true|none|The user or process that has triggered the notification.|
|live|boolean|true|none|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|pspReference|string|true|none|The PSP reference of the request from which the notification originates.|

<h2 id="tocS_ReportAvailableNotificationContent">ReportAvailableNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemareportavailablenotificationcontent"></a>
<a id="schema_ReportAvailableNotificationContent"></a>
<a id="tocSreportavailablenotificationcontent"></a>
<a id="tocsreportavailablenotificationcontent"></a>

```json
{
  "accountCode": "string",
  "accountType": "string",
  "eventDate": "1970-01-01T00:00:00Z",
  "remoteAccessUrl": "string",
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|false|none|The code of the Account to which the report applies.|
|accountType|string|false|none|The type of Account to which the report applies.|
|eventDate|string(date-time)|false|none|The date of the event to which the report applies.|
|remoteAccessUrl|string|false|none|The URL at which the report can be accessed.|
|success|boolean|false|none|Indicates whether the event resulted in a success.|

<h2 id="tocS_ScheduledRefundsNotification">ScheduledRefundsNotification</h2>
<!-- backwards compatibility -->
<a id="schemascheduledrefundsnotification"></a>
<a id="schema_ScheduledRefundsNotification"></a>
<a id="tocSscheduledrefundsnotification"></a>
<a id="tocsscheduledrefundsnotification"></a>

```json
{
  "content": {
    "accountCode": "string",
    "accountHolderCode": "string",
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
    "lastPayout": {
      "amount": {
        "currency": "str",
        "value": 0
      },
      "bankAccountDetail": {
        "accountNumber": "string",
        "accountType": "string",
        "bankAccountName": "string",
        "bankAccountReference": "string",
        "bankAccountUUID": "string",
        "bankBicSwift": "string",
        "bankCity": "string",
        "bankCode": "string",
        "bankName": "string",
        "branchCode": "string",
        "checkCode": "string",
        "countryCode": "string",
        "currencyCode": "string",
        "iban": "string",
        "ownerCity": "string",
        "ownerCountryCode": "string",
        "ownerDateOfBirth": "string",
        "ownerHouseNumberOrName": "string",
        "ownerName": "string",
        "ownerNationality": "string",
        "ownerPostalCode": "string",
        "ownerState": "string",
        "ownerStreet": "string",
        "primaryAccount": true,
        "taxId": "string",
        "urlForVerification": "string"
      },
      "captureMerchantReference": "string",
      "capturePspReference": "string",
      "creationDate": "1970-01-01T00:00:00Z",
      "description": "string",
      "destinationAccountCode": "string",
      "disputePspReference": "string",
      "disputeReasonCode": "string",
      "merchantReference": "string",
      "paymentPspReference": "string",
      "payoutPspReference": "string",
      "pspReference": "string",
      "sourceAccountCode": "string",
      "transactionStatus": "BalanceNotPaidOutTransfer",
      "transferCode": "string"
    },
    "refundResults": [
      {
        "originalTransaction": {
          "amount": {
            "currency": "str",
            "value": 0
          },
          "bankAccountDetail": {
            "accountNumber": "string",
            "accountType": "string",
            "bankAccountName": "string",
            "bankAccountReference": "string",
            "bankAccountUUID": "string",
            "bankBicSwift": "string",
            "bankCity": "string",
            "bankCode": "string",
            "bankName": "string",
            "branchCode": "string",
            "checkCode": "string",
            "countryCode": "string",
            "currencyCode": "string",
            "iban": "string",
            "ownerCity": "string",
            "ownerCountryCode": "string",
            "ownerDateOfBirth": "string",
            "ownerHouseNumberOrName": "string",
            "ownerName": "string",
            "ownerNationality": "string",
            "ownerPostalCode": "string",
            "ownerState": "string",
            "ownerStreet": "string",
            "primaryAccount": true,
            "taxId": "string",
            "urlForVerification": "string"
          },
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "creationDate": "1970-01-01T00:00:00Z",
          "description": "string",
          "destinationAccountCode": "string",
          "disputePspReference": "string",
          "disputeReasonCode": "string",
          "merchantReference": "string",
          "paymentPspReference": "string",
          "payoutPspReference": "string",
          "pspReference": "string",
          "sourceAccountCode": "string",
          "transactionStatus": "BalanceNotPaidOutTransfer",
          "transferCode": "string"
        },
        "pspReference": "string",
        "response": "string"
      }
    ]
  },
  "error": {
    "errorCode": "string",
    "message": "string"
  },
  "eventDate": "1970-01-01T00:00:00Z",
  "eventType": "string",
  "executingUserKey": "string",
  "live": true,
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[ScheduledRefundsNotificationContent](#schemascheduledrefundsnotificationcontent)|false|none|Details of the scheduling of the refunds.|
|error|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|none|Error information of failed request. No value provided here if no error occurred on processing.|
|eventDate|string(date-time)|true|none|The date and time when an event has been completed.|
|eventType|string|true|none|The event type of the notification.|
|executingUserKey|string|true|none|The user or process that has triggered the notification.|
|live|boolean|true|none|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|pspReference|string|true|none|The PSP reference of the request from which the notification originates.|

<h2 id="tocS_ScheduledRefundsNotificationContent">ScheduledRefundsNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemascheduledrefundsnotificationcontent"></a>
<a id="schema_ScheduledRefundsNotificationContent"></a>
<a id="tocSscheduledrefundsnotificationcontent"></a>
<a id="tocsscheduledrefundsnotificationcontent"></a>

```json
{
  "accountCode": "string",
  "accountHolderCode": "string",
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
  "lastPayout": {
    "amount": {
      "currency": "str",
      "value": 0
    },
    "bankAccountDetail": {
      "accountNumber": "string",
      "accountType": "string",
      "bankAccountName": "string",
      "bankAccountReference": "string",
      "bankAccountUUID": "string",
      "bankBicSwift": "string",
      "bankCity": "string",
      "bankCode": "string",
      "bankName": "string",
      "branchCode": "string",
      "checkCode": "string",
      "countryCode": "string",
      "currencyCode": "string",
      "iban": "string",
      "ownerCity": "string",
      "ownerCountryCode": "string",
      "ownerDateOfBirth": "string",
      "ownerHouseNumberOrName": "string",
      "ownerName": "string",
      "ownerNationality": "string",
      "ownerPostalCode": "string",
      "ownerState": "string",
      "ownerStreet": "string",
      "primaryAccount": true,
      "taxId": "string",
      "urlForVerification": "string"
    },
    "captureMerchantReference": "string",
    "capturePspReference": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "description": "string",
    "destinationAccountCode": "string",
    "disputePspReference": "string",
    "disputeReasonCode": "string",
    "merchantReference": "string",
    "paymentPspReference": "string",
    "payoutPspReference": "string",
    "pspReference": "string",
    "sourceAccountCode": "string",
    "transactionStatus": "BalanceNotPaidOutTransfer",
    "transferCode": "string"
  },
  "refundResults": [
    {
      "originalTransaction": {
        "amount": {
          "currency": "str",
          "value": 0
        },
        "bankAccountDetail": {
          "accountNumber": "string",
          "accountType": "string",
          "bankAccountName": "string",
          "bankAccountReference": "string",
          "bankAccountUUID": "string",
          "bankBicSwift": "string",
          "bankCity": "string",
          "bankCode": "string",
          "bankName": "string",
          "branchCode": "string",
          "checkCode": "string",
          "countryCode": "string",
          "currencyCode": "string",
          "iban": "string",
          "ownerCity": "string",
          "ownerCountryCode": "string",
          "ownerDateOfBirth": "string",
          "ownerHouseNumberOrName": "string",
          "ownerName": "string",
          "ownerNationality": "string",
          "ownerPostalCode": "string",
          "ownerState": "string",
          "ownerStreet": "string",
          "primaryAccount": true,
          "taxId": "string",
          "urlForVerification": "string"
        },
        "captureMerchantReference": "string",
        "capturePspReference": "string",
        "creationDate": "1970-01-01T00:00:00Z",
        "description": "string",
        "destinationAccountCode": "string",
        "disputePspReference": "string",
        "disputeReasonCode": "string",
        "merchantReference": "string",
        "paymentPspReference": "string",
        "payoutPspReference": "string",
        "pspReference": "string",
        "sourceAccountCode": "string",
        "transactionStatus": "BalanceNotPaidOutTransfer",
        "transferCode": "string"
      },
      "pspReference": "string",
      "response": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|false|none|The code of the account.|
|accountHolderCode|string|false|none|The code of the Account Holder.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Invalid fields list.|
|lastPayout|[Transaction](#schematransaction)|false|none|The most recent payout (after which all transactions were scheduled to be refunded).|
|refundResults|[[RefundResult](#schemarefundresult)]|false|none|A list of the refunds that have been scheduled and their results.|

<h2 id="tocS_ShareholderContact">ShareholderContact</h2>
<!-- backwards compatibility -->
<a id="schemashareholdercontact"></a>
<a id="schema_ShareholderContact"></a>
<a id="tocSshareholdercontact"></a>
<a id="tocsshareholdercontact"></a>

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
  "fullPhoneNumber": "string",
  "jobTitle": "string",
  "name": {
    "firstName": "string",
    "gender": "MALE",
    "infix": "string",
    "lastName": "string"
  },
  "personalData": {
    "dateOfBirth": "string",
    "documentData": [
      {
        "expirationDate": "string",
        "issuerCountry": "st",
        "issuerState": "string",
        "number": "string",
        "type": "DRIVINGLICENSE"
      }
    ],
    "nationality": "st"
  },
  "phoneNumber": {
    "phoneCountryCode": "string",
    "phoneNumber": "string",
    "phoneType": "Fax"
  },
  "shareholderCode": "string",
  "shareholderReference": "string",
  "shareholderType": "Controller",
  "webAddress": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[ViasAddress](#schemaviasaddress)|false|none|The address of the person.|
|email|string|false|none|The e-mail address of the person.|
|fullPhoneNumber|string|false|none|The phone number of the person provided as a single string.  It will be handled as a landline phone.<br>Examples: "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"|
|jobTitle|string|false|none|Job title of the person. Required when the `shareholderType` is **Controller**.<br><br>Example values: **Chief Executive Officer**, **Chief Financial Officer**, **Chief Operating Officer**, **President**, **Vice President**, **Executive President**, **Managing Member**, **Partner**, **Treasurer**, **Director**, or **Other**.|
|name|[ViasName](#schemaviasname)|false|none|The name of the person.|
|personalData|[ViasPersonalData](#schemaviaspersonaldata)|false|none|Contains information about the person.|
|phoneNumber|[ViasPhoneNumber](#schemaviasphonenumber)|false|none|The phone number of the person.|
|shareholderCode|string|false|none|The unique identifier (UUID) of the shareholder entry.<br>>**If, during an Account Holder create or update request, this field is left blank (but other fields provided), a new Shareholder will be created with a procedurally-generated UUID.**<br><br>>**If, during an Account Holder create request, a UUID is provided, the creation of Account Holder will fail with a validation Error..**<br><br>>**If, during an Account Holder update request, a UUID that is not correlated with an existing Shareholder is provided, the update of the Shareholder will fail.**<br><br>>**If, during an Account Holder update request, a UUID that is correlated with an existing Shareholder is provided, the existing Shareholder will be updated.**<br>|
|shareholderReference|string|false|none|Your reference for the shareholder entry.|
|shareholderType|string|false|none|Specifies how the person is associated with the account holder. <br><br>Possible values: <br><br>* **Owner**: Individuals who directly or indirectly own 25% or more of a company.<br><br>* **Controller**: Individuals who are members of senior management staff responsible for managing a company or organization.|
|webAddress|string|false|none|The URL of the person's website.|

#### Enumerated Values

|Property|Value|
|---|---|
|shareholderType|Controller|
|shareholderType|Owner|
|shareholderType|Signatory|

<h2 id="tocS_SignatoryContact">SignatoryContact</h2>
<!-- backwards compatibility -->
<a id="schemasignatorycontact"></a>
<a id="schema_SignatoryContact"></a>
<a id="tocSsignatorycontact"></a>
<a id="tocssignatorycontact"></a>

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
  "fullPhoneNumber": "string",
  "jobTitle": "string",
  "name": {
    "firstName": "string",
    "gender": "MALE",
    "infix": "string",
    "lastName": "string"
  },
  "personalData": {
    "dateOfBirth": "string",
    "documentData": [
      {
        "expirationDate": "string",
        "issuerCountry": "st",
        "issuerState": "string",
        "number": "string",
        "type": "DRIVINGLICENSE"
      }
    ],
    "nationality": "st"
  },
  "phoneNumber": {
    "phoneCountryCode": "string",
    "phoneNumber": "string",
    "phoneType": "Fax"
  },
  "signatoryCode": "string",
  "signatoryReference": "string",
  "webAddress": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[ViasAddress](#schemaviasaddress)|false|none|The address of the person.|
|email|string|false|none|The e-mail address of the person.|
|fullPhoneNumber|string|false|none|The phone number of the person provided as a single string.  It will be handled as a landline phone.<br>Examples: "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"|
|jobTitle|string|false|none|Job title of the signatory.<br><br>Example values: **Chief Executive Officer**, **Chief Financial Officer**, **Chief Operating Officer**, **President**, **Vice President**, **Executive President**, **Managing Member**, **Partner**, **Treasurer**, **Director**, or **Other**.|
|name|[ViasName](#schemaviasname)|false|none|The name of the person.|
|personalData|[ViasPersonalData](#schemaviaspersonaldata)|false|none|Contains information about the person.|
|phoneNumber|[ViasPhoneNumber](#schemaviasphonenumber)|false|none|The phone number of the person.|
|signatoryCode|string|false|none|The unique identifier (UUID) of the signatory.<br>>**If, during an Account Holder create or update request, this field is left blank (but other fields provided), a new Signatory will be created with a procedurally-generated UUID.**<br><br>>**If, during an Account Holder create request, a UUID is provided, the creation of the Signatory will fail while the creation of the Account Holder will continue.**<br><br>>**If, during an Account Holder update request, a UUID that is not correlated with an existing Signatory is provided, the update of the Signatory will fail.**<br><br>>**If, during an Account Holder update request, a UUID that is correlated with an existing Signatory is provided, the existing Signatory will be updated.**<br>|
|signatoryReference|string|false|none|Your reference for the signatory.|
|webAddress|string|false|none|The URL of the person's website.|

<h2 id="tocS_Split">Split</h2>
<!-- backwards compatibility -->
<a id="schemasplit"></a>
<a id="schema_Split"></a>
<a id="tocSsplit"></a>
<a id="tocssplit"></a>

```json
{
  "account": "string",
  "amount": {
    "currency": "str",
    "value": 0
  },
  "description": "string",
  "reference": "string",
  "type": "AcquiringFees"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|none|The unique identifier of the account to which the split amount is booked. Required if `type` is **MarketPlace** or **BalanceAccount**.<br><br>* [Classic Platforms integration](https://docs.adyen.com/classic-platforms): The [`accountCode`](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccount#request-accountCode) of the account to which the split amount is booked.<br>* [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model): The [`balanceAccountId`](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/balanceAccounts/_id_#path-id) of the account to which the split amount is booked.|
|amount|[SplitAmount](#schemasplitamount)|false|none|The amount of the split item.<br><br>* Required for all split types in the [Classic Platforms integration](https://docs.adyen.com/classic-platforms).<br>* Required if `type` is **BalanceAccount**, **Commission**, **Default**, or **VAT** in your [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model) integration.|
|description|string|false|none|Your description for the split item.|
|reference|string|false|none|Your unique reference for the part of the payment booked to the specified `account`.<br><br>This is required if `type` is **MarketPlace** ([Classic Platforms integration](https://docs.adyen.com/classic-platforms)) or **BalanceAccount** ([Balance Platform](https://docs.adyen.com/adyen-for-platforms-model)).<br><br>For the other types, we also recommend providing a **unique** reference so you can reconcile the split and the associated payment in the transaction overview and in the reports.|
|type|string|true|none|The part of the payment you want to book to the specified `account`.<br><br>Possible values for the [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model):<br>* **BalanceAccount**: books part of the payment (specified in `amount`) to the specified `account`.<br>* Transaction fees types that you can book to the specified `account`:<br>   * **AcquiringFees**: the aggregated amount of the interchange and scheme fees.<br>   * **PaymentFee**: the aggregated amount of all transaction fees.<br>   * **AdyenFees**: the aggregated amount of Adyen's commission and markup fees.<br>   * **AdyenCommission**: the transaction fees due to Adyen under [blended rates](https://www.adyen.com/knowledge-hub/interchange-fees-explained).<br>   * **AdyenMarkup**: the transaction fees due to Adyen under [Interchange ++ pricing](https://www.adyen.com/knowledge-hub/interchange-fees-explained).<br>   * **Interchange**: the fees paid to the issuer for each payment made with the card network.<br>   * **SchemeFee**: the fees paid to the card scheme for using their network. <br>* **Commission**: your platform's commission on the payment (specified in `amount`), booked to your liable balance account.<br>* **Remainder**: the amount left over after a currency conversion, booked to the specified `account`.<br>* **TopUp**: allows you and your users to top up balance accounts using direct debit, card payments, or other payment methods.<br>* **VAT**: the value-added tax charged on the payment, booked to your platforms liable balance account.<br>* **Commission**: your platform's commission (specified in `amount`) on the payment, booked to your liable balance account.<br>* **Default**: in very specific use cases, allows you to book the specified `amount` to the specified `account`. For more information, contact Adyen support.<br><br>Possible values for the [Classic Platforms integration](https://docs.adyen.com/classic-platforms): **Commission**, **Default**, **Marketplace**, **PaymentFee**, **VAT**.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|AcquiringFees|
|type|AdyenCommission|
|type|AdyenFees|
|type|AdyenMarkup|
|type|BalanceAccount|
|type|Commission|
|type|Default|
|type|Interchange|
|type|MarketPlace|
|type|PaymentFee|
|type|Remainder|
|type|SchemeFee|
|type|Surcharge|
|type|Tip|
|type|VAT|

<h2 id="tocS_SplitAmount">SplitAmount</h2>
<!-- backwards compatibility -->
<a id="schemasplitamount"></a>
<a id="schema_SplitAmount"></a>
<a id="tocSsplitamount"></a>
<a id="tocssplitamount"></a>

```json
{
  "currency": "str",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). By default, this is the original payment currency.|
|value|integer(int64)|true|none|The value of the split amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).|

<h2 id="tocS_StoreDetail">StoreDetail</h2>
<!-- backwards compatibility -->
<a id="schemastoredetail"></a>
<a id="schema_StoreDetail"></a>
<a id="tocSstoredetail"></a>
<a id="tocsstoredetail"></a>

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
  "fullPhoneNumber": "string",
  "logo": "string",
  "merchantAccount": "string",
  "merchantCategoryCode": "string",
  "merchantHouseNumber": "string",
  "phoneNumber": {
    "phoneCountryCode": "string",
    "phoneNumber": "string",
    "phoneType": "Fax"
  },
  "shopperInteraction": "Ecommerce",
  "splitConfigurationUUID": "string",
  "status": "Active",
  "store": "string",
  "storeName": "string",
  "storeReference": "string",
  "virtualAccount": "string",
  "webAddress": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[ViasAddress](#schemaviasaddress)|true|none|The address of the physical store where the account holder will process payments from.|
|fullPhoneNumber|string|false|none|The phone number of the store provided as a single string.  It will be handled as a landline phone.<br><br>Examples: "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"|
|logo|string|false|none|Store logo for payment method setup.|
|merchantAccount|string|true|none|The merchant account to which the store belongs.|
|merchantCategoryCode|string|true|none|The merchant category code (MCC) that classifies the business of the account holder.|
|merchantHouseNumber|string|false|none|Merchant house number for payment method setup.|
|phoneNumber|[ViasPhoneNumber](#schemaviasphonenumber)|false|none|The phone number of the store.|
|shopperInteraction|string|false|none|The sales channel. Possible values: **Ecommerce**, **POS**.|
|splitConfigurationUUID|string|false|none|The unique reference for the split configuration, returned when you configure splits in your Customer Area. When this is provided, the `virtualAccount` is also required. Adyen uses the configuration and the `virtualAccount` to split funds between accounts in your platform.|
|status|string|false|none|The status of the store. Possible values: **Pending**, **Active**, **Inactive**, **InactiveWithModifications**, **Closed**.|
|store|string|false|none|Adyen-generated unique alphanumeric identifier (UUID) for the store, returned in the response when you create a store. Required when updating an existing store in an `/updateAccountHolder` request.|
|storeName|string|false|none|The name of the account holder's store. This value is shown in shopper statements.<br><br> * Length: Between 3 to 22 characters <br><br> * The following characters are *not* supported: **:;}{$#@!\|<>%^*+=\\**<br><br>**Note:** storeName does not appear in American Express shopper statements by default. Contact Adyen Support to enable this for American Express.|
|storeReference|string|false|none|Your unique identifier for the store. The Customer Area also uses this value for the store description.<br><br> * Length: Between 3 to 128 characters<br><br>* The following characters are *not* supported: **:;}{$#@!\|<>%^*+=\\**|
|virtualAccount|string|false|none|The account holder's `accountCode` where the split amount will be sent. Required when you provide the `splitConfigurationUUID`.|
|webAddress|string|false|none|URL of the ecommerce store.|

#### Enumerated Values

|Property|Value|
|---|---|
|shopperInteraction|Ecommerce|
|shopperInteraction|POS|
|status|Active|
|status|Closed|
|status|Inactive|
|status|InactiveWithModifications|
|status|Pending|

<h2 id="tocS_Transaction">Transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "bankAccountDetail": {
    "accountNumber": "string",
    "accountType": "string",
    "bankAccountName": "string",
    "bankAccountReference": "string",
    "bankAccountUUID": "string",
    "bankBicSwift": "string",
    "bankCity": "string",
    "bankCode": "string",
    "bankName": "string",
    "branchCode": "string",
    "checkCode": "string",
    "countryCode": "string",
    "currencyCode": "string",
    "iban": "string",
    "ownerCity": "string",
    "ownerCountryCode": "string",
    "ownerDateOfBirth": "string",
    "ownerHouseNumberOrName": "string",
    "ownerName": "string",
    "ownerNationality": "string",
    "ownerPostalCode": "string",
    "ownerState": "string",
    "ownerStreet": "string",
    "primaryAccount": true,
    "taxId": "string",
    "urlForVerification": "string"
  },
  "captureMerchantReference": "string",
  "capturePspReference": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "description": "string",
  "destinationAccountCode": "string",
  "disputePspReference": "string",
  "disputeReasonCode": "string",
  "merchantReference": "string",
  "paymentPspReference": "string",
  "payoutPspReference": "string",
  "pspReference": "string",
  "sourceAccountCode": "string",
  "transactionStatus": "BalanceNotPaidOutTransfer",
  "transferCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The amount of the transaction.|
|bankAccountDetail|[BankAccountDetail](#schemabankaccountdetail)|false|none|The details of the bank account to where a payout was made.|
|captureMerchantReference|string|false|none|The merchant reference of a related capture.|
|capturePspReference|string|false|none|The psp reference of a related capture.|
|creationDate|string(date-time)|false|none|The date on which the transaction was performed.|
|description|string|false|none|A description of the transaction.|
|destinationAccountCode|string|false|none|The code of the account to which funds were credited during an outgoing fund transfer.|
|disputePspReference|string|false|none|The psp reference of the related dispute.|
|disputeReasonCode|string|false|none|The reason code of a dispute.|
|merchantReference|string|false|none|The merchant reference of a transaction.|
|paymentPspReference|string|false|none|The psp reference of the related authorisation or transfer.|
|payoutPspReference|string|false|none|The psp reference of the related payout.|
|pspReference|string|false|none|The psp reference of a transaction.|
|sourceAccountCode|string|false|none|The code of the account from which funds were debited during an incoming fund transfer.|
|transactionStatus|string|false|none|The status of the transaction.<br>>Permitted values: `PendingCredit`, `CreditFailed`, `CreditClosed`, `CreditSuspended`, `Credited`, `Converted`, `PendingDebit`, `DebitFailed`, `Debited`, `DebitReversedReceived`, `DebitedReversed`, `ChargebackReceived`, `Chargeback`, `ChargebackReversedReceived`, `ChargebackReversed`, `Payout`, `PayoutReversed`, `FundTransfer`, `PendingFundTransfer`, `ManualCorrected`.|
|transferCode|string|false|none|The transfer code of the transaction.|

#### Enumerated Values

|Property|Value|
|---|---|
|transactionStatus|BalanceNotPaidOutTransfer|
|transactionStatus|BalancePlatformFundTransfer|
|transactionStatus|BalancePlatformSweep|
|transactionStatus|BalancePlatformSweepReturned|
|transactionStatus|Chargeback|
|transactionStatus|ChargebackCorrection|
|transactionStatus|ChargebackCorrectionReceived|
|transactionStatus|ChargebackReceived|
|transactionStatus|ChargebackReversed|
|transactionStatus|ChargebackReversedCorrection|
|transactionStatus|ChargebackReversedCorrectionReceived|
|transactionStatus|ChargebackReversedReceived|
|transactionStatus|Converted|
|transactionStatus|CreditClosed|
|transactionStatus|CreditFailed|
|transactionStatus|CreditReversed|
|transactionStatus|CreditReversedReceived|
|transactionStatus|CreditSuspended|
|transactionStatus|Credited|
|transactionStatus|DebitFailed|
|transactionStatus|DebitReversedReceived|
|transactionStatus|Debited|
|transactionStatus|DebitedReversed|
|transactionStatus|DepositCorrectionCredited|
|transactionStatus|DepositCorrectionDebited|
|transactionStatus|DepositCorrectionReceived|
|transactionStatus|Fee|
|transactionStatus|FeeReceived|
|transactionStatus|FundTransfer|
|transactionStatus|FundTransferReversed|
|transactionStatus|InvoiceDeductionCredited|
|transactionStatus|InvoiceDeductionDebited|
|transactionStatus|InvoiceDeductionReceived|
|transactionStatus|ManualCorrected|
|transactionStatus|ManualCorrectionCredited|
|transactionStatus|ManualCorrectionDebited|
|transactionStatus|MerchantPayin|
|transactionStatus|MerchantPayinReceived|
|transactionStatus|MerchantPayinReversed|
|transactionStatus|Payout|
|transactionStatus|PayoutReversed|
|transactionStatus|PendingCredit|
|transactionStatus|PendingDebit|
|transactionStatus|PendingFundTransfer|
|transactionStatus|ReCredited|
|transactionStatus|ReCreditedReceived|
|transactionStatus|SecondChargeback|
|transactionStatus|SecondChargebackCorrection|
|transactionStatus|SecondChargebackCorrectionReceived|
|transactionStatus|SecondChargebackReceived|

<h2 id="tocS_TransferFundsNotification">TransferFundsNotification</h2>
<!-- backwards compatibility -->
<a id="schematransferfundsnotification"></a>
<a id="schema_TransferFundsNotification"></a>
<a id="tocStransferfundsnotification"></a>
<a id="tocstransferfundsnotification"></a>

```json
{
  "content": {
    "amount": {
      "currency": "str",
      "value": 0
    },
    "destinationAccountCode": "string",
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
    "merchantReference": "string",
    "sourceAccountCode": "string",
    "status": {
      "message": {
        "code": "string",
        "text": "string"
      },
      "statusCode": "string"
    },
    "transferCode": "string"
  },
  "error": {
    "errorCode": "string",
    "message": "string"
  },
  "eventDate": "1970-01-01T00:00:00Z",
  "eventType": "string",
  "executingUserKey": "string",
  "live": true,
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[TransferFundsNotificationContent](#schematransferfundsnotificationcontent)|false|none|Details of the fund transfer.|
|error|[NotificationErrorContainer](#schemanotificationerrorcontainer)|false|none|Error information of failed request. No value provided here if no error occurred on processing.|
|eventDate|string(date-time)|true|none|The date and time when an event has been completed.|
|eventType|string|true|none|The event type of the notification.|
|executingUserKey|string|true|none|The user or process that has triggered the notification.|
|live|boolean|true|none|Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.|
|pspReference|string|true|none|The PSP reference of the request from which the notification originates.|

<h2 id="tocS_TransferFundsNotificationContent">TransferFundsNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schematransferfundsnotificationcontent"></a>
<a id="schema_TransferFundsNotificationContent"></a>
<a id="tocStransferfundsnotificationcontent"></a>
<a id="tocstransferfundsnotificationcontent"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "destinationAccountCode": "string",
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
  "merchantReference": "string",
  "sourceAccountCode": "string",
  "status": {
    "message": {
      "code": "string",
      "text": "string"
    },
    "statusCode": "string"
  },
  "transferCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The amount transferred.|
|destinationAccountCode|string|false|none|The code of the Account to which funds were credited.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Invalid fields list.|
|merchantReference|string|false|none|The reference provided by the merchant.|
|sourceAccountCode|string|false|none|The code of the Account from which funds were debited.|
|status|[OperationStatus](#schemaoperationstatus)|false|none|The status of the fund transfer.|
|transferCode|string|false|none|The transfer code.|

<h2 id="tocS_UltimateParentCompany">UltimateParentCompany</h2>
<!-- backwards compatibility -->
<a id="schemaultimateparentcompany"></a>
<a id="schema_UltimateParentCompany"></a>
<a id="tocSultimateparentcompany"></a>
<a id="tocsultimateparentcompany"></a>

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
  "businessDetails": {
    "legalBusinessName": "string",
    "registrationNumber": "string",
    "stockExchange": "string",
    "stockNumber": "string",
    "stockTicker": "string"
  },
  "ultimateParentCompanyCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[ViasAddress](#schemaviasaddress)|false|none|Address of the ultimate parent company.|
|businessDetails|[UltimateParentCompanyBusinessDetails](#schemaultimateparentcompanybusinessdetails)|false|none|Details about the ultimate parent company's business.|
|ultimateParentCompanyCode|string|false|none|Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create an ultimate parent company. Required when updating an existing entry in an `/updateAccountHolder` request.|

<h2 id="tocS_UltimateParentCompanyBusinessDetails">UltimateParentCompanyBusinessDetails</h2>
<!-- backwards compatibility -->
<a id="schemaultimateparentcompanybusinessdetails"></a>
<a id="schema_UltimateParentCompanyBusinessDetails"></a>
<a id="tocSultimateparentcompanybusinessdetails"></a>
<a id="tocsultimateparentcompanybusinessdetails"></a>

```json
{
  "legalBusinessName": "string",
  "registrationNumber": "string",
  "stockExchange": "string",
  "stockNumber": "string",
  "stockTicker": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legalBusinessName|string|false|none|The legal name of the company.|
|registrationNumber|string|false|none|The registration number of the company.|
|stockExchange|string|false|none|Market Identifier Code (MIC).|
|stockNumber|string|false|none|International Securities Identification Number (ISIN).|
|stockTicker|string|false|none|Stock Ticker symbol.|

<h2 id="tocS_UpdateAccountHolderResponse">UpdateAccountHolderResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccountholderresponse"></a>
<a id="schema_UpdateAccountHolderResponse"></a>
<a id="tocSupdateaccountholderresponse"></a>
<a id="tocsupdateaccountholderresponse"></a>

```json
{
  "accountHolderCode": "string",
  "accountHolderDetails": {
    "address": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "bankAccountDetails": [
      {
        "accountNumber": "string",
        "accountType": "string",
        "bankAccountName": "string",
        "bankAccountReference": "string",
        "bankAccountUUID": "string",
        "bankBicSwift": "string",
        "bankCity": "string",
        "bankCode": "string",
        "bankName": "string",
        "branchCode": "string",
        "checkCode": "string",
        "countryCode": "string",
        "currencyCode": "string",
        "iban": "string",
        "ownerCity": "string",
        "ownerCountryCode": "string",
        "ownerDateOfBirth": "string",
        "ownerHouseNumberOrName": "string",
        "ownerName": "string",
        "ownerNationality": "string",
        "ownerPostalCode": "string",
        "ownerState": "string",
        "ownerStreet": "string",
        "primaryAccount": true,
        "taxId": "string",
        "urlForVerification": "string"
      }
    ],
    "bankAggregatorDataReference": "string",
    "businessDetails": {
      "doingBusinessAs": "string",
      "legalBusinessName": "string",
      "listedUltimateParentCompany": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "businessDetails": {
            "legalBusinessName": "string",
            "registrationNumber": "string",
            "stockExchange": "string",
            "stockNumber": "string",
            "stockTicker": "string"
          },
          "ultimateParentCompanyCode": "string"
        }
      ],
      "registrationNumber": "string",
      "shareholders": [
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
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "shareholderCode": "string",
          "shareholderReference": "string",
          "shareholderType": "Controller",
          "webAddress": "string"
        }
      ],
      "signatories": [
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
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "signatoryCode": "string",
          "signatoryReference": "string",
          "webAddress": "string"
        }
      ],
      "stockExchange": "string",
      "stockNumber": "string",
      "stockTicker": "string",
      "taxId": "string"
    },
    "email": "string",
    "fullPhoneNumber": "string",
    "individualDetails": {
      "name": {
        "firstName": "string",
        "gender": "MALE",
        "infix": "string",
        "lastName": "string"
      },
      "personalData": {
        "dateOfBirth": "string",
        "documentData": [
          {
            "expirationDate": "string",
            "issuerCountry": "st",
            "issuerState": "string",
            "number": "string",
            "type": "DRIVINGLICENSE"
          }
        ],
        "nationality": "st"
      }
    },
    "lastReviewDate": "string",
    "legalArrangements": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "legalArrangementCode": "string",
        "legalArrangementEntities": [
          {
            "address": {
              "city": "string",
              "country": "string",
              "houseNumberOrName": "string",
              "postalCode": "string",
              "stateOrProvince": "string",
              "street": "string"
            },
            "businessDetails": {
              "doingBusinessAs": "string",
              "legalBusinessName": "string",
              "listedUltimateParentCompany": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "businessDetails": {
                    "legalBusinessName": "string",
                    "registrationNumber": "string",
                    "stockExchange": "string",
                    "stockNumber": "string",
                    "stockTicker": "string"
                  },
                  "ultimateParentCompanyCode": "string"
                }
              ],
              "registrationNumber": "string",
              "shareholders": [
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
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "shareholderCode": "string",
                  "shareholderReference": "string",
                  "shareholderType": "Controller",
                  "webAddress": "string"
                }
              ],
              "signatories": [
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
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "signatoryCode": "string",
                  "signatoryReference": "string",
                  "webAddress": "string"
                }
              ],
              "stockExchange": "string",
              "stockNumber": "string",
              "stockTicker": "string",
              "taxId": "string"
            },
            "email": "string",
            "fullPhoneNumber": "string",
            "individualDetails": {
              "name": {
                "firstName": "string",
                "gender": "MALE",
                "infix": "string",
                "lastName": "string"
              },
              "personalData": {
                "dateOfBirth": "string",
                "documentData": [
                  {
                    "expirationDate": "string",
                    "issuerCountry": "st",
                    "issuerState": "string",
                    "number": "string",
                    "type": "DRIVINGLICENSE"
                  }
                ],
                "nationality": "st"
              }
            },
            "legalArrangementEntityCode": "string",
            "legalArrangementEntityReference": "string",
            "legalArrangementMembers": [
              "Beneficiary"
            ],
            "legalEntityType": "Business",
            "phoneNumber": {
              "phoneCountryCode": "string",
              "phoneNumber": "string",
              "phoneType": "Fax"
            },
            "webAddress": "string"
          }
        ],
        "legalArrangementReference": "string",
        "legalForm": "CashManagementTrust",
        "name": "string",
        "registrationNumber": "string",
        "taxNumber": "string",
        "type": "Association"
      }
    ],
    "merchantCategoryCode": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "payoutMethods": [
      {
        "merchantAccount": "string",
        "payoutMethodCode": "string",
        "payoutMethodReference": "string",
        "recurringDetailReference": "string",
        "shopperReference": "string"
      }
    ],
    "phoneNumber": {
      "phoneCountryCode": "string",
      "phoneNumber": "string",
      "phoneType": "Fax"
    },
    "principalBusinessAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "storeDetails": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "fullPhoneNumber": "string",
        "logo": "string",
        "merchantAccount": "string",
        "merchantCategoryCode": "string",
        "merchantHouseNumber": "string",
        "phoneNumber": {
          "phoneCountryCode": "string",
          "phoneNumber": "string",
          "phoneType": "Fax"
        },
        "shopperInteraction": "Ecommerce",
        "splitConfigurationUUID": "string",
        "status": "Active",
        "store": "string",
        "storeName": "string",
        "storeReference": "string",
        "virtualAccount": "string",
        "webAddress": "string"
      }
    ],
    "webAddress": "string"
  },
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "description": "string",
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
  "legalEntity": "Business",
  "primaryCurrency": "string",
  "pspReference": "string",
  "resultCode": "string",
  "verification": {
    "accountHolder": {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ]
    },
    "legalArrangements": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string"
      }
    ],
    "legalArrangementsEntities": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string",
        "legalArrangementEntityCode": "string"
      }
    ],
    "payoutMethods": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "payoutMethodCode": "string"
      }
    ],
    "shareholders": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string",
        "legalArrangementEntityCode": "string",
        "shareholderCode": "string"
      }
    ],
    "signatories": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "signatoryCode": "string"
      }
    ],
    "ultimateParentCompany": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "ultimateParentCompanyCode": "string"
      }
    ]
  },
  "verificationProfile": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|false|none|The code of the account holder.|
|accountHolderDetails|[AccountHolderDetails](#schemaaccountholderdetails)|false|none|Details of the account holder.|
|accountHolderStatus|[AccountHolderStatus](#schemaaccountholderstatus)|false|none|The new status of the account holder.|
|description|string|false|none|The description of the account holder.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|in case the account holder has not been updated, contains account holder fields, that did not pass the validation.|
|legalEntity|string|false|none|The legal entity of the account holder.|
|primaryCurrency|string|false|none|**Deprecated.** The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|
|verification|[KYCVerificationResult](#schemakycverificationresult)|false|none|The details of KYC Verification of the account holder.|
|verificationProfile|string|false|none|The identifier of the profile that applies to this entity.|

#### Enumerated Values

|Property|Value|
|---|---|
|legalEntity|Business|
|legalEntity|Individual|
|legalEntity|NonProfit|
|legalEntity|Partnership|
|legalEntity|PublicCompany|

<h2 id="tocS_UpdateAccountResponse">UpdateAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccountresponse"></a>
<a id="schema_UpdateAccountResponse"></a>
<a id="tocSupdateaccountresponse"></a>
<a id="tocsupdateaccountresponse"></a>

```json
{
  "accountCode": "string",
  "bankAccountUUID": "string",
  "description": "string",
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
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "payoutMethodCode": "string",
  "payoutSchedule": {
    "nextScheduledPayout": "1970-01-01T00:00:00Z",
    "schedule": "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"
  },
  "payoutSpeed": "INSTANT",
  "pspReference": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|true|none|The code of the account.|
|bankAccountUUID|string|false|none|The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.|
|description|string|false|none|The description of the account.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|A list of fields that caused the `/updateAccount` request to fail.|
|metadata|object|false|none|A set of key and value pairs containing metadata.|
|payoutMethodCode|string|false|none|The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code.|
|payoutSchedule|[PayoutScheduleResponse](#schemapayoutscheduleresponse)|false|none|The details of the payout schedule to which the account is updated.|
|payoutSpeed|string|false|none|Speed at which payouts for this account are processed.<br><br>Possible values: `STANDARD`, `SAME_DAY`.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|

#### Enumerated Values

|Property|Value|
|---|---|
|payoutSpeed|INSTANT|
|payoutSpeed|SAME_DAY|
|payoutSpeed|STANDARD|

<h2 id="tocS_ViasAddress">ViasAddress</h2>
<!-- backwards compatibility -->
<a id="schemaviasaddress"></a>
<a id="schema_ViasAddress"></a>
<a id="tocSviasaddress"></a>
<a id="tocsviasaddress"></a>

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
|city|string|false|none|The name of the city. Required if the `houseNumberOrName`, `street`, `postalCode`, or `stateOrProvince` are provided.|
|country|string|true|none|The two-character country code of the address in ISO-3166-1 alpha-2 format. For example, **NL**.|
|houseNumberOrName|string|false|none|The number or name of the house.|
|postalCode|string|false|none|The postal code. Required if the `houseNumberOrName`, `street`, `city`, or `stateOrProvince` are provided.<br><br>Maximum length:<br><br>* 5 digits for addresses in the US.<br><br>* 10 characters for all other countries.|
|stateOrProvince|string|false|none|The abbreviation of the state or province. Required if the `houseNumberOrName`, `street`, `city`, or `postalCode` are provided. <br><br>Maximum length:<br><br>* 2 characters for addresses in the US or Canada.<br><br>* 3 characters for all other countries.<br>|
|street|string|false|none|The name of the street. Required if the `houseNumberOrName`, `city`, `postalCode`, or `stateOrProvince` are provided.|

<h2 id="tocS_ViasName">ViasName</h2>
<!-- backwards compatibility -->
<a id="schemaviasname"></a>
<a id="schema_ViasName"></a>
<a id="tocSviasname"></a>
<a id="tocsviasname"></a>

```json
{
  "firstName": "string",
  "gender": "MALE",
  "infix": "string",
  "lastName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|false|none|The first name.|
|gender|string|false|none|The gender.<br>>The following values are permitted: `MALE`, `FEMALE`, `UNKNOWN`.|
|infix|string|false|none|The name's infix, if applicable.<br>>A maximum length of twenty (20) characters is imposed.|
|lastName|string|false|none|The last name.|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|MALE|
|gender|FEMALE|
|gender|UNKNOWN|

<h2 id="tocS_ViasPersonalData">ViasPersonalData</h2>
<!-- backwards compatibility -->
<a id="schemaviaspersonaldata"></a>
<a id="schema_ViasPersonalData"></a>
<a id="tocSviaspersonaldata"></a>
<a id="tocsviaspersonaldata"></a>

```json
{
  "dateOfBirth": "string",
  "documentData": [
    {
      "expirationDate": "string",
      "issuerCountry": "st",
      "issuerState": "string",
      "number": "string",
      "type": "DRIVINGLICENSE"
    }
  ],
  "nationality": "st"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateOfBirth|string|false|none|The person's date of birth, in ISO-8601 YYYY-MM-DD format. For example, **2000-01-31**.|
|documentData|[[PersonalDocumentData](#schemapersonaldocumentdata)]|false|none|Array that contains information about the person's identification document. You can submit only one entry per document type.|
|nationality|string|false|none|The nationality of the person represented by a two-character country code,  in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **NL**.<br>|

<h2 id="tocS_ViasPhoneNumber">ViasPhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaviasphonenumber"></a>
<a id="schema_ViasPhoneNumber"></a>
<a id="tocSviasphonenumber"></a>
<a id="tocsviasphonenumber"></a>

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
|phoneCountryCode|string|false|none|The two-character country code of the phone number.<br>>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').|
|phoneNumber|string|false|none|The phone number.<br>>The inclusion of the phone number country code is not necessary.|
|phoneType|string|false|none|The type of the phone number.<br>>The following values are permitted: `Landline`, `Mobile`, `SIP`, `Fax`.|

#### Enumerated Values

|Property|Value|
|---|---|
|phoneType|Fax|
|phoneType|Landline|
|phoneType|Mobile|
|phoneType|SIP|
