<h1 id="webhooks">Webhooks v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

We use webhooks to send you updates about payment status updates, newly available reports, and other events that you can subscribe to. For more information, refer to our [documentation](https://docs.adyen.com/development-resources/webhooks).

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="webhooks-webhooks">Webhooks</h1>

## ACH Notification of Change

<a id="opIdpost-ACH_NOTIFICATION_OF_CHANGE"></a>

`POST /ACH_NOTIFICATION_OF_CHANGE`

<aside class="warning">
This operation is deprecated
</aside>

An ACH Notification of Change was processed regarding changed bank account details.

> Body parameter

```json
{
  "type": "ach.notificationOfChange",
  "version": "1",
  "createdAt": "2021-01-01T01:00:00+01:00",
  "environment": "test",
  "data": {
    "pspReference": "QFQTPCQ8HXSKGK82",
    "shopperReference": "YOUR_SHOPPER_REFERENCE",
    "notificationOfChange": {
      "reasonCode": "C07",
      "newBankAccountNumber": "987654321",
      "newBranchCode": "12345",
      "newBankAccountType": "Checking"
    }
  }
}
```

<h3 id="ach-notification-of-change-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AchNotificationOfChangeNotificationRequest](#schemaachnotificationofchangenotificationrequest)|false|none|
|» createdAt|body|string(date-time)|true|Timestamp for when the webhook was created.|
|» data|body|[AchNotificationOfChangeNotificationRequestData](#schemaachnotificationofchangenotificationrequestdata)|false|Contains details of the update.|
|» environment|body|string|false|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» type|body|string|true|Type of notification.|
|» version|body|string|false|The version of this webhook type.|

<h3 id="ach-notification-of-change-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Result of authorisation request

<a id="opIdpost-AUTHORISATION"></a>

`POST /AUTHORISATION`

The result of the [authorisation request](https://docs.adyen.com/api-explorer/#/Payment/latest/post/authorise).

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "tokenization.shopperReference": "YOUR_SHOPPER_REFERENCE",
          "tokenization.storedPaymentMethodId": "M5N7TQ4TG5PFWR50",
          "tokenization.store.operationType": "created"
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "AUTHORISATION",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "paymentMethod": "ach",
        "operations": [
          "CANCEL",
          "CAPTURE",
          "REFUND"
        ],
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "null",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="result-of-authorisation-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AuthorisationNotificationRequest](#schemaauthorisationnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[AuthorisationNotificationRequestItemWrapper](#schemaauthorisationnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="result-of-authorisation-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Result of payment authorisation adjustment request

<a id="opIdpost-AUTHORISATION_ADJUSTMENT"></a>

`POST /AUTHORISATION_ADJUSTMENT`

The result of the request to [adjust the authorised amount](https://docs.adyen.com/online-payments/adjust-authorisation) sent through the [/adjustAuthorisation](https://docs.adyen.com/api-explorer/#/Payment/latest/post/adjustAuthorisation) endpoint.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "AUTHORISATION_ADJUSTMENT",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "9913140798220028",
        "paymentMethod": "visa",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="result-of-payment-authorisation-adjustment-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AuthorisationAdjustmentNotificationRequest](#schemaauthorisationadjustmentnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[AuthorisationAdjustmentNotificationRequestItemWrapper](#schemaauthorisationadjustmentnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="result-of-payment-authorisation-adjustment-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Auto Rescue process ended

<a id="opIdpost-AUTORESCUE"></a>

`POST /AUTORESCUE`

The [Auto Rescue process](https://docs.adyen.com/online-payments/auto-rescue#rescue-process-ended) ended.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "retry.rescueReference": "8826173525728789",
          "merchantOrderReference": "8826173525728789",
          "hmacSignature": "b0ea55c2fe60d4d1d605e9c385e0e7..."
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "AUTORESCUE",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "9913140798220028",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="auto-rescue-process-ended-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AutoRescueNotificationRequest](#schemaautorescuenotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[AutoRescueNotificationRequestItemWrapper](#schemaautorescuenotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="auto-rescue-process-ended-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Result of cancel request

<a id="opIdpost-CANCELLATION"></a>

`POST /CANCELLATION`

The result of the request to [cancel a payment](https://docs.adyen.com/online-payments/cancel).

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "CANCELLATION",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "9913140798220028",
        "paymentMethod": "visa",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="result-of-cancel-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CancellationNotificationRequest](#schemacancellationnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[CancellationNotificationRequestItemWrapper](#schemacancellationnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="result-of-cancel-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Auto Rescue process canceled

<a id="opIdpost-CANCEL_AUTORESCUE"></a>

`POST /CANCEL_AUTORESCUE`

The [Auto Rescue process](https://docs.adyen.com/online-payments/auto-rescue) was canceled.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "hmacSignature": "b0ea55c2fe60d4d1d605e9c385e0e7..."
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "CANCEL_AUTORESCUE",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "9913140798220028",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "No AutoRescue process for retry.rescueReference 8826173525728789",
        "success": "false"
      }
    }
  ]
}
```

<h3 id="auto-rescue-process-canceled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AutoRescueNotificationRequest](#schemaautorescuenotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[AutoRescueNotificationRequestItemWrapper](#schemaautorescuenotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="auto-rescue-process-canceled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Result of cancel or refund request

<a id="opIdpost-CANCEL_OR_REFUND"></a>

`POST /CANCEL_OR_REFUND`

The result of the request to [cancel or refund a payment](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/cancel-or-refund).

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "modification.action": "cancel"
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "CANCEL_OR_REFUND",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "9913140798220028",
        "paymentMethod": "visa",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="result-of-cancel-or-refund-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CancelOrRefundNotificationRequest](#schemacancelorrefundnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[CancelOrRefundNotificationRequestItemWrapper](#schemacancelorrefundnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="result-of-cancel-or-refund-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Result of capture request

<a id="opIdpost-CAPTURE"></a>

`POST /CAPTURE`

The result of the request to [capture a payment](https://docs.adyen.com/online-payments/capture).

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "CAPTURE",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "9913140798220028",
        "paymentMethod": "visa",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="result-of-capture-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CaptureNotificationRequest](#schemacapturenotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[CaptureNotificationRequestItemWrapper](#schemacapturenotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="result-of-capture-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Capture request failed due to scheme rejection

<a id="opIdpost-CAPTURE_FAILED"></a>

`POST /CAPTURE_FAILED`

The capture request [failed due to rejection by the card scheme](https://docs.adyen.com/online-payments/capture#failed-capture).

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "paymentMethodVariant": "facilypay_3x",
          "hmacSignature": "b0ea55c2fe60d4d1d605e9c385e0e7...",
          "shopperCountry": "NL"
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "CAPTURE_FAILED",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "9913140798220028",
        "paymentMethod": "facilypay_3x",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "Capture Failed",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="capture-request-failed-due-to-scheme-rejection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RefundCaptureFailedNotificationRequest](#schemarefundcapturefailednotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[RefundCaptureFailedNotificationRequestItemWrapper](#schemarefundcapturefailednotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="capture-request-failed-due-to-scheme-rejection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Payment charged back

<a id="opIdpost-CHARGEBACK"></a>

`POST /CHARGEBACK`

The payment was [charged back](https://docs.adyen.com/risk-management/disputes-api/dispute-notifications#chargeback), and the funds were deducted from your account.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "captureMerchantReference": "shopperReferenceTest",
          "chargebackReasonCode": " 4853",
          "InvoiceCreditorAccount": "Creditor.AdyenInvoiceService",
          "grossCurrency": "EUR",
          "hmacSignature": "b0ea55c2fe60d4d1d605e9c385e0e7...",
          "defensePeriodEndsAt": "2021-07-31T03:03:07+02:00",
          "defendable": "true",
          "grossValue": "2000",
          "modificationMerchantReferences": "shopperReferenceTest",
          "chargebackSchemeCode": "mc",
          "capturePspReference": "8636172945333378",
          "paymentMethodVariant": "mc",
          "shopperReference": "YOUR_SHOPPER_REFERENCE"
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "CHARGEBACK",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "9913140798220028",
        "paymentMethod": "mc",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "Payment.TxId=300000000524534724 dispute",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="payment-charged-back-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChargebackNotificationRequest](#schemachargebacknotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="payment-charged-back-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Chargeback successfully defended

<a id="opIdpost-CHARGEBACK_REVERSED"></a>

`POST /CHARGEBACK_REVERSED`

The chargeback was successfully [defended](https://docs.adyen.com/risk-management/understanding-disputes/defense-requirements) towards the issuing bank. This stage is not final. If the issuing bank presents a second chargeback, you can still lose the chargeback case.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "hmacSignature": "b0ea55c2fe60d4d1d605e9c385e0e7..."
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "CHARGEBACK_REVERSED",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "paymentMethod": "mc",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "Fraudulent Processing of Transactions",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="chargeback-successfully-defended-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChargebackReversedNotificationRequest](#schemachargebackreversednotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="chargeback-successfully-defended-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Direct Debit Notice of Change Notification

<a id="opIdpost-DIRECT_DEBIT_NOTICE_OF_CHANGE_NOTIFICATION"></a>

`POST /DIRECT_DEBIT_NOTICE_OF_CHANGE_NOTIFICATION`

A Notice of Change (NOC) was processed for an update to bank account details. This applies to both ACH Direct Debit and EFT PAD transactions.

> Body parameter

```json
{
  "type": "ach.notificationOfChange",
  "version": "1",
  "createdAt": "2021-01-01T01:00:00+01:00",
  "environment": "test",
  "data": {
    "pspReference": "QFQTPCQ8HXSKGK82",
    "shopperReference": "YOUR_SHOPPER_REFERENCE",
    "notificationOfChange": {
      "reasonCode": "C07",
      "newBankAccountNumber": "012345678901",
      "newBranchCode": "021000021",
      "newBankAccountType": "Checking"
    }
  }
}
```

<h3 id="direct-debit-notice-of-change-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DirectDebitNoticeOfChangeNotificationRequest](#schemadirectdebitnoticeofchangenotificationrequest)|false|none|
|» createdAt|body|string(date-time)|true|The timestamp indicating when the webhook was created.|
|» data|body|[DirectDebitNotificationOfChangeNotificationRequestData](#schemadirectdebitnotificationofchangenotificationrequestdata)|false|Contains the details of the bank account update.|
|» environment|body|string|false|The environment from which the webhook originated.|
|» type|body|string|true|The type of notification.|
|» version|body|string|false|The version of this webhook type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» environment|live|
|» environment|test|
|» environment|beta|
|» type|ach.notificationOfChange|
|» type|eft.notificationOfChange|

<h3 id="direct-debit-notice-of-change-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Dispute defense period ended

<a id="opIdpost-DISPUTE_DEFENSE_PERIOD_ENDED"></a>

`POST /DISPUTE_DEFENSE_PERIOD_ENDED`

You have not defended the dispute within the timeframe, or the defense period ended because you accepted liability for the chargeback and will not defend the dispute.

> Body parameter

```json
{
  "live": "true",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "chargebackReasonCode": "10.4",
          "modificationMerchantReferences": "",
          "chargebackSchemeCode": "visa",
          "disputeStatus": "Lost"
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "DISPUTE_DEFENSE_PERIOD_ENDED",
        "eventDate": "2024-11-11T01:30:57+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_REFERENCE",
        "originalReference": "9914444444444444",
        "paymentMethod": "visa",
        "pspReference": "9915555555555555",
        "reason": "Other Fraud-Card Absent Environment",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="dispute-defense-period-ended-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DisputeDefensePeriodEndedNotificationRequest](#schemadisputedefenseperiodendednotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="dispute-defense-period-ended-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Authorisation expired

<a id="opIdpost-EXPIRE"></a>

`POST /EXPIRE`

The remaining uncaptured amount expired

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "EXPIRE",
        "eventDate": "2024-02-09T11:19:48+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="authorisation-expired-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ExpireNotificationRequest](#schemaexpirenotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[ExpireNotificationRequestItemWrapper](#schemaexpirenotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="authorisation-expired-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Defense documents uploaded or dispute auto-defended

<a id="opIdpost-INFORMATION_SUPPLIED"></a>

`POST /INFORMATION_SUPPLIED`

You have successfully uploaded your dispute defense documents, or Adyen has auto-defended the dispute.

> Body parameter

```json
{
  "live": "true",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "chargebackReasonCode": "13.3",
          "chargebackSchemeCode": "visa",
          "disputeStatus": "Pending"
        },
        "amount": {
          "currency": "USD",
          "value": 10000
        },
        "eventCode": "INFORMATION_SUPPLIED",
        "eventDate": "2025-05-17T09:35:14+02:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "originalReference": "9914444444444444",
        "merchantReference": "YOUR_REFERENCE",
        "paymentMethod": "visa",
        "pspReference": "9915555555555555",
        "reason": "Not as Described or Defective Merchandise/Services",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="defense-documents-uploaded-or-dispute-auto-defended-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InformationSuppliedNotificationRequest](#schemainformationsuppliednotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="defense-documents-uploaded-or-dispute-auto-defended-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Issuer included comments

<a id="opIdpost-ISSUER_COMMENTS"></a>

`POST /ISSUER_COMMENTS`

The issuer included [free-text comments](https://docs.adyen.com/risk-management/disputes-api/dispute-notifications/issuer-comments) with relevant information about the dispute process, such as why the issuer decided to initiate or continue the dispute. You can receive issuer comments for chargebacks and pre-arbitration cases.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "chargebackReasonCode": "13.3",
          "chargebackSchemeCode": "visa",
          "issuerComments.type": "chargeback",
          "issuerComments.disputeAmountChangeReason": "some_text",
          "issuerComments.cancellationMethod": "some_text",
          "issuerComments.orderDetailsNotAsDescribed": "some_text",
          "issuerComments.explanation": "some_text",
          "issuerComments.damagedOrDefectiveOrderInfo": "some_text",
          "issuerComments.howChAttemptReturnAndDispOfMerchandise": "some_text",
          "issuerComments.whatWasNotReceived": "some_text",
          "issuerComments.cancellationDate": "date_of_cancellation"
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "ISSUER_COMMENTS",
        "eventDate": "2025-05-17T09:35:14+02:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "originalReference": "9914444444444444",
        "merchantReference": "YOUR_REFERENCE",
        "paymentMethod": "visa",
        "pspReference": "9915555555555555",
        "reason": "Not as Described or Defective Merchandise/Services",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="issuer-included-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IssuerCommentsNotificationRequest](#schemaissuercommentsnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[IssuerCommentsNotificationRequestItemWrapper](#schemaissuercommentsnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="issuer-included-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Issuer accepted defense or did not respond

<a id="opIdpost-ISSUER_RESPONSE_TIMEFRAME_EXPIRED"></a>

`POST /ISSUER_RESPONSE_TIMEFRAME_EXPIRED`

The issuer accepted your [defense of the dispute](https://docs.adyen.com/risk-management/manage-disputes/#defending-disputes) or [did not respond in time](https://docs.adyen.com/risk-management/understanding-disputes/dispute-timeframes/).

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "chargebackReasonCode": "13.1",
          "chargebackSchemeCode": "visa",
          "modificationMerchantReferences": "",
          "disputeStatus": "Won"
        },
        "amount": {
          "currency": "USD",
          "value": 10000
        },
        "eventCode": "ISSUER_RESPONSE_TIMEFRAME_EXPIRED",
        "eventDate": "2021-05-19T09:35:14+02:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "originalReference": "9914444444444444",
        "merchantReference": "YOUR_REFERENCE",
        "paymentMethod": "visa",
        "pspReference": "9915555555555555",
        "reason": "Merchandise/Services Not Received",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="issuer-accepted-defense-or-did-not-respond-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IssuerResponseTimeframeExpiredNotificationRequest](#schemaissuerresponsetimeframeexpirednotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[IssuerCommentsNotificationRequestItemWrapper](#schemaissuercommentsnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="issuer-accepted-defense-or-did-not-respond-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Manual review accepted

<a id="opIdpost-MANUAL_REVIEW_ACCEPT"></a>

`POST /MANUAL_REVIEW_ACCEPT`

The [manual review](https://docs.adyen.com/risk-management/case-management) was accepted.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "hmacSignature": "b0ea55c2fe60d4d1d605e9c385e0e7...",
          "paymentMethodVariant": "scheme"
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "MANUAL_REVIEW_ACCEPT",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "9913140798220028",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "expire",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="manual-review-accepted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NotificationRequest](#schemanotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[NotificationRequestItemWrapper](#schemanotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="manual-review-accepted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Manual review rejected

<a id="opIdpost-MANUAL_REVIEW_REJECT"></a>

`POST /MANUAL_REVIEW_REJECT`

The [manual review](https://docs.adyen.com/risk-management/case-management) was rejected.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "hmacSignature": "b0ea55c2fe60d4d1d605e9c385e0e7...",
          "paymentMethodVariant": "visa"
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "MANUAL_REVIEW_REJECT",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "9913140798220028",
        "paymentMethod": "visa",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "expire",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="manual-review-rejected-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NotificationRequest](#schemanotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[NotificationRequestItemWrapper](#schemanotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="manual-review-rejected-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Dispute process opened

<a id="opIdpost-NOTIFICATION_OF_CHARGEBACK"></a>

`POST /NOTIFICATION_OF_CHARGEBACK`

The [dispute process](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process) was opened. You should investigate the dispute and [supply the defense documents](https://docs.adyen.com/risk-management/disputes-api#supply-dispute-defense-documents).

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "captureMerchantReference": "shopperReferenceTest",
          "chargebackReasonCode": " 4853",
          "grossCurrency": "EUR",
          "hmacSignature": "b0ea55c2fe60d4d1d605e9c385e0e7...",
          "defensePeriodEndsAt": "2021-07-31T03:03:08+02:00",
          "defendable": "false",
          "grossValue": "2000",
          "modificationMerchantReferences": "YourModificationReference,shopperReferenceTest",
          "chargebackSchemeCode": "mc",
          "capturePspReference": "8536173024791891",
          "autoDefended": "true",
          "paymentMethodVariant": "mc"
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "NOTIFICATION_OF_CHARGEBACK",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "9913140798220028",
        "paymentMethod": "mc",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "Payment.TxId=300000000524659113 dispute (automatically defended)",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="dispute-process-opened-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NotificationOfChargebackNotificationRequest](#schemanotificationofchargebacknotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="dispute-process-opened-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Issuer sent fraud alert notification

<a id="opIdpost-NOTIFICATION_OF_FRAUD"></a>

`POST /NOTIFICATION_OF_FRAUD`

The issuer sent a [fraud alert notification](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process) to schemes and to processors. Visa calls them TC40 and Mastercard calls them System to Avoid Fraud Effectively (SAFE). These are informational notifications from Adyen, providing you the opportunity to take action, such as blocking a shopper or issuing a refund before a chargeback happens.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "nofReasonCode": "6",
          "hmacSignature": "b0ea55c2fe60d4d1d605e9c385e0e7...",
          "modificationMerchantReferences": "shopperReferenceTest",
          "nofSchemeCode": "visa"
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "NOTIFICATION_OF_FRAUD",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "9913140798220028",
        "paymentMethod": "visa",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "Fraudulent Use of Account Number",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="issuer-sent-fraud-alert-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NotificationOfFraudNotificationRequest](#schemanotificationoffraudnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="issuer-sent-fraud-alert-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Offer expired

<a id="opIdpost-OFFER_CLOSED"></a>

`POST /OFFER_CLOSED`

The offer expired, for example, because the shopper abandoned the session. For cards, offers expire after 12 hours by default.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "hmacSignature": "b0ea55c2fe60d4d1d605e9c385e0e7...",
          "paymentMethodVariant": "ideal"
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "OFFER_CLOSED",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "paymentMethod": "ideal",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="offer-expired-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NotificationRequest](#schemanotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[NotificationRequestItemWrapper](#schemanotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="offer-expired-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Result of last partial payment for order

<a id="opIdpost-ORDER_CLOSED"></a>

`POST /ORDER_CLOSED`

The result of the last [partial payment](https://docs.adyen.com/online-payments/partial-payments) for the order.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "order-1-pspReference": "861617275047284E",
          "order-1-paymentAmount": "EUR 10.00",
          "order-1-success": "true",
          "order-1-paymentMethod": "ideal"
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "ORDER_CLOSED",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "",
        "success": "false"
      }
    }
  ]
}
```

<h3 id="result-of-last-partial-payment-for-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NotificationRequest](#schemanotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[NotificationRequestItemWrapper](#schemanotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="result-of-last-partial-payment-for-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## First partial payment request for order

<a id="opIdpost-ORDER_OPENED"></a>

`POST /ORDER_OPENED`

The first [partial payment](https://docs.adyen.com/online-payments/partial-payments) was made, and the order was created.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "ORDER_OPENED",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="first-partial-payment-request-for-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NotificationRequest](#schemanotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[NotificationRequestItemWrapper](#schemanotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="first-partial-payment-request-for-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Financial institution rejected payout

<a id="opIdpost-PAIDOUT_REVERSED"></a>

`POST /PAIDOUT_REVERSED`

> This webhook is **deprecated** and no longer supports new integrations. Do one of the following:
>- If you are building a new integration, use the [Transfer Webhooks](https://docs.adyen.com/api-explorer/transfer-webhooks/latest/overview) instead.
> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.
>
> With the Transfers API, you can:
> - Handle multiple payout use cases with a single API.
> - Use new payout functionalities, such as instant payouts to bank accounts.
> - Receive webhooks with more details and defined transfer states.
>
> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.


The financial institution [rejected the payout](https://docs.adyen.com/online-payments/online-payouts/payout-webhook). We will return the funds back to your account. 
The reason field contains the bank statement description if present.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "PAIDOUT_REVERSED",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "9913140798220028",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="financial-institution-rejected-payout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaidoutReversedNotificationRequest](#schemapaidoutreversednotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[PaidoutReversedNotificationRequestItemWrapper](#schemapaidoutreversednotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="financial-institution-rejected-payout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Payout declined

<a id="opIdpost-PAYOUT_DECLINE"></a>

`POST /PAYOUT_DECLINE`

> This webhook is **deprecated** and no longer supports new integrations. Do one of the following:
>- If you are building a new integration, use the [Transfer Webhooks](https://docs.adyen.com/api-explorer/transfer-webhooks/latest/overview) instead.
[Transfer Webhooks](https://docs.adyen.com/api-explorer/transfer-webhooks/latest/overview) instead.
> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.
>
> With the Transfers API, you can:
> - Handle multiple payout use cases with a single API.
> - Use new payout functionalities, such as instant payouts to bank accounts.
> - Receive webhooks with more details and defined transfer states.
>
> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.


The [payout was declined](https://docs.adyen.com/online-payments/online-payouts/confirm-or-decline-payout).

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "hmacSignature": "b0ea55c2fe60d4d1d605e9c385e0e7...",
          "paymentMethodVariant": "bankTransfer_IBAN"
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "PAYOUT_DECLINE",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "9913140798220028",
        "paymentMethod": "bankTransfer_IBAN",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="payout-declined-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PayoutNotificationRequest](#schemapayoutnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[PayoutNotificationRequestItemWrapper](#schemapayoutnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="payout-declined-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Payout expired

<a id="opIdpost-PAYOUT_EXPIRE"></a>

`POST /PAYOUT_EXPIRE`

> This webhook is **deprecated** and no longer supports new integrations. Do one of the following:
>- If you are building a new integration, use the [Transfer Webhooks](https://docs.adyen.com/api-explorer/transfer-webhooks/latest/overview) instead.
[Transfer Webhooks](https://docs.adyen.com/api-explorer/transfer-webhooks/latest/overview) instead.
> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.
>
> With the Transfers API, you can:
> - Handle multiple payout use cases with a single API.
> - Use new payout functionalities, such as instant payouts to bank accounts.
> - Receive webhooks with more details and defined transfer states.
>
> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.


The [payout expired](https://docs.adyen.com/online-payments/online-payouts/payout-webhook/#payouts-to-bank-accounts-or-wallets).

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "PAYOUT_EXPIRE",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "9913140798220028",
        "paymentMethod": "bankTransfer_IBAN",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="payout-expired-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PayoutNotificationRequest](#schemapayoutnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[PayoutNotificationRequestItemWrapper](#schemapayoutnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="payout-expired-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Result of payout request

<a id="opIdpost-PAYOUT_THIRDPARTY"></a>

`POST /PAYOUT_THIRDPARTY`

> This webhook is **deprecated** and no longer supports new integrations. Do one of the following:
>- If you are building a new integration, use the [Transfer Webhooks](https://docs.adyen.com/api-explorer/transfer-webhooks/latest/overview) instead.
[Transfer Webhooks](https://docs.adyen.com/api-explorer/transfer-webhooks/latest/overview) instead.
> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.
>
> With the Transfers API, you can:
> - Handle multiple payout use cases with a single API.
> - Use new payout functionalities, such as instant payouts to bank accounts.
> - Receive webhooks with more details and defined transfer states.
>
> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.


The result of the [payout request](https://docs.adyen.com/online-payments/online-payouts).

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "expiryDate": "03/2030",
          "paymentMethodVariant": "visa",
          "cardSummary": "1111",
          "hmacSignature": "b0ea55c2fe60d4d1d605e9c385e0e7..."
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "PAYOUT_THIRDPARTY",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "paymentMethod": "visa",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "Approved",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="result-of-payout-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PayoutNotificationRequest](#schemapayoutnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[PayoutNotificationRequestItemWrapper](#schemapayoutnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="result-of-payout-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Refund postponed until after payment capture

<a id="opIdpost-POSTPONED_REFUND"></a>

`POST /POSTPONED_REFUND`

The refund was postponed until after [payment capture](https://docs.adyen.com/online-payments/capture). To enable this notification, contact our [Support Team](https://www.adyen.help/hc/en-us/requests/new).

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "hmacSignature": "b0ea55c2fe60d4d1d605e9c385e0e7..."
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "POSTPONED_REFUND",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "9913140798220028",
        "paymentMethod": "directdebit_NL",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="refund-postponed-until-after-payment-capture-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NotificationRequest](#schemanotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[NotificationRequestItemWrapper](#schemanotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="refund-postponed-until-after-payment-capture-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## The pre-arbitration case was accepted

<a id="opIdpost-PREARBITRATION_ACCEPTED"></a>

`POST /PREARBITRATION_ACCEPTED`

The [pre-arbitration](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process) case was accepted.

> Body parameter

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

<h3 id="the-pre-arbitration-case-was-accepted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PrearbitrationAcceptedNotificationRequest](#schemaprearbitrationacceptednotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="the-pre-arbitration-case-was-accepted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## The pre-arbitration case was declined

<a id="opIdpost-PREARBITRATION_DECLINED"></a>

`POST /PREARBITRATION_DECLINED`

The [pre-arbitration](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process) case was declined.

> Body parameter

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

<h3 id="the-pre-arbitration-case-was-declined-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PrearbitrationDeclineNotificationRequest](#schemaprearbitrationdeclinenotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="the-pre-arbitration-case-was-declined-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## The pre-arbitration case was withdrawn by the issuer

<a id="opIdpost-PREARBITRATION_ISSUER_WITHDRAWN"></a>

`POST /PREARBITRATION_ISSUER_WITHDRAWN`

The [pre-arbitration](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process) case was withdrawn by the issuer.

> Body parameter

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

<h3 id="the-pre-arbitration-case-was-withdrawn-by-the-issuer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PrearbitrationIssuerWithdrawnNotificationRequest](#schemaprearbitrationissuerwithdrawnnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="the-pre-arbitration-case-was-withdrawn-by-the-issuer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Cardholder's bank declined pre-arbitration case

<a id="opIdpost-PREARBITRATION_LOST"></a>

`POST /PREARBITRATION_LOST`

The cardholder's bank declined the [pre-arbitration](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process) case.

> Body parameter

```json
{
  "live": "true",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "metadata.type": "web_pay",
          "metadata.link_id": "111111",
          "arn": "ACQUIRER_REFERENCE_NUMBER",
          "metadata.company": "abc"
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "PREARBITRATION_LOST",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "paymentMethod": "visa",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "Other Fraud-Card Absent Environment",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="cardholders-bank-declined-pre-arbitration-case-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PrearbitrationLostNotificationRequest](#schemaprearbitrationlostnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="cardholders-bank-declined-pre-arbitration-case-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Cardholder's bank opened the pre-arbitration case

<a id="opIdpost-PREARBITRATION_OPEN"></a>

`POST /PREARBITRATION_OPEN`

The cardholder's bank opened the [pre-arbitration](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process) case.

> Body parameter

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

<h3 id="cardholders-bank-opened-the-pre-arbitration-case-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PrearbitrationOpenNotificationRequest](#schemaprearbitrationopennotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="cardholders-bank-opened-the-pre-arbitration-case-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Cardholder's bank accepted pre-arbitration case

<a id="opIdpost-PREARBITRATION_WON"></a>

`POST /PREARBITRATION_WON`

The cardholder's bank accepted the [pre-arbitration](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process) case.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "PREARBITRATION_WON",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "paymentMethod": "bankTransfer_IBAN",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="cardholders-bank-accepted-pre-arbitration-case-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PrearbitrationWonNotificationRequest](#schemaprearbitrationwonnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="cardholders-bank-accepted-pre-arbitration-case-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Recurring contract created

<a id="opIdpost-RECURRING_CONTRACT"></a>

`POST /RECURRING_CONTRACT`

A recurring contract has been created. [Enable this webhook](https://docs.adyen.com/development-resources/webhooks/webhook-types#non-default-event-codes) in your Customer Area.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "recurring.shopperReference": "YOUR_SHOPPER_REFERENCE",
          "recurring.recurringDetailReference": "M5N7TQ4TG5PFWR50",
          "hmacSignature": "YOUR_HMAC_SIGNATURE",
          "shopperReference": "YOUR_SHOPPER_REFERENCE",
          "checkoutSessionId": "******************"
        },
        "amount": {
          "currency": "USD",
          "value": 0
        },
        "eventCode": "RECURRING_CONTRACT",
        "eventDate": "2023-06-20T16:09:48+02:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_PAYMENT_REFERENCE",
        "originalReference": "INITIAL_PAYMENT_PSP_REFERENCE",
        "originalPsp": "PSP_REFERENCE",
        "paymentMethod": "ideal",
        "pspReference": "M5N7TQ4TG5PFWR50",
        "reason": "",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="recurring-contract-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RecurringContractNotificationRequest](#schemarecurringcontractnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[RecurringContractNotificationRequestItemWrapper](#schemarecurringcontractnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="recurring-contract-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Result of refund request

<a id="opIdpost-REFUND"></a>

`POST /REFUND`

The result of the request to [refund a payment](https://docs.adyen.com/online-payments/refund).

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "REFUND",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "9913140798220028",
        "paymentMethod": "visa",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "Transaction hasn't been captured, refund not possible",
        "success": "false"
      }
    }
  ]
}
```

<h3 id="result-of-refund-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RefundNotificationRequest](#schemarefundnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[RefundNotificationRequestItemWrapper](#schemarefundnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="result-of-refund-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Refunded amount reversed

<a id="opIdpost-REFUNDED_REVERSED"></a>

`POST /REFUNDED_REVERSED`

The refunded amount was [reversed](https://docs.adyen.com/online-payments/refund#refunded-reversed) and returned to your bank account.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "REFUNDED_REVERSED",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "9913140798220028",
        "paymentMethod": "mc",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "test_AUTHORISATION_1",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="refunded-amount-reversed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ModificationNotificationRequest](#schemamodificationnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[ModificationNotificationRequestItemWrapper](#schemamodificationnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="refunded-amount-reversed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Refund failed due to scheme rejection

<a id="opIdpost-REFUND_FAILED"></a>

`POST /REFUND_FAILED`

The refund [failed due to rejection by the card scheme](https://docs.adyen.com/online-payments/refund#refund-failed).

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "hmacSignature": "b0ea55c2fe60d4d1d605e9c385e0e7...",
          "paymentMethodVariant": "blik"
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "REFUND_FAILED",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "9913140798220028",
        "paymentMethod": "blik",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "Refund Failed",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="refund-failed-due-to-scheme-rejection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RefundCaptureFailedNotificationRequest](#schemarefundcapturefailednotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[RefundCaptureFailedNotificationRequestItemWrapper](#schemarefundcapturefailednotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="refund-failed-due-to-scheme-rejection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Refund failed to clear

<a id="opIdpost-REFUND_NOT_CLEARED"></a>

`POST /REFUND_NOT_CLEARED`

A refund hasn't been settled because the acquirer hasn't processed the refund 30 days after initiation. However, the customer has received the funds. This webhook is available for all payment methods for merchants on Sales Day Payout. [Enable this webhook](https://docs.adyen.com/development-resources/webhooks/webhook-types#non-default-event-codes) in your Customer Area.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "settlementReference": "OBK5EUCZL6BDL3RW",
          "expectedValueDate": "2026-08-20"
        },
        "amount": {
          "currency": "USD",
          "value": 10000
        },
        "eventCode": "REFUND_NOT_CLEARED",
        "eventDate": "2026-07-20T21:40:59+02:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "ZTRB7QZPHD4Z8F75",
        "paymentMethod": "visa",
        "pspReference": "VND3Q7F9F3PNXT75",
        "reason": "",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="refund-failed-to-clear-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RefundNotClearedNotificationRequest](#schemarefundnotclearednotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[RefundNotClearedNotificationRequestItemWrapper](#schemarefundnotclearednotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="refund-failed-to-clear-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Result of refund request with data

<a id="opIdpost-REFUND_WITH_DATA"></a>

`POST /REFUND_WITH_DATA`

The result of the request to [refund with data](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/refund#unreferenced-refund).

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "REFUND_WITH_DATA",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MODIFICATION_REFERENCE",
        "originalReference": "9913140798220028",
        "paymentMethod": "mc",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="result-of-refund-request-with-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RefundWithDataNotificationRequest](#schemarefundwithdatanotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[RefundWithDataNotificationRequestItemWrapper](#schemarefundwithdatanotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="result-of-refund-request-with-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Report available

<a id="opIdpost-REPORT_AVAILABLE"></a>

`POST /REPORT_AVAILABLE`

The report is generated and ready to be downloaded.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "hmacSignature": "b0ea55c2fe60d4d1d605e9c385e0e7..."
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "REPORT_AVAILABLE",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "URL_TO_DOWNLOAD_REPORT",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="report-available-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReportAvailableNotificationRequest](#schemareportavailablenotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[ReportAvailableNotificationRequestItemWrapper](#schemareportavailablenotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="report-available-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Issuer opened Request for Information (RFI)

<a id="opIdpost-REQUEST_FOR_INFORMATION"></a>

`POST /REQUEST_FOR_INFORMATION`

The issuer opened a [Request for Information (RFI)](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process). You should [supply defense documents](https://docs.adyen.com/risk-management/disputes-api#supply-dispute-defense-documents) to help shopper understand the charge.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "hmacSignature": "b0ea55c2fe60d4d1d605e9c385e0e7...",
          "modificationMerchantReferences": "9123140123220028"
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "REQUEST_FOR_INFORMATION",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "9913140798220028",
        "paymentMethod": "mc",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="issuer-opened-request-for-information-rfi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RequestForInformationNotificationRequest](#schemarequestforinformationnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="issuer-opened-request-for-information-rfi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Result of reversal request

<a id="opIdpost-REVERSAL"></a>

`POST /REVERSAL`

The result of a reversal request. The `modification.action` field indicates whether the original payment was cancelled or refunded, or an authorised refund was cancelled.

> Body parameter

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "acquirerReference": "string",
          "acsRenderingType.acsInterface": "string",
          "acsRenderingType.acsUiTemplate": "string",
          "arn": "string",
          "authenticationType": "string",
          "bookingDate": "string",
          "cancellableUntil": "string",
          "checkoutSessionId": "string",
          "coBrandedWith": "string",
          "hmacSignature": "string",
          "interactionCounter": "string",
          "merchantOrderReference": "string",
          "modification.action": "cancel",
          "modification.status": "authorised",
          "paymentLinkId": "string",
          "paymentMethodVariant": "string",
          "refundPspReference": "string",
          "shopperCountry": "string",
          "store": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "REVERSAL",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

<h3 id="result-of-reversal-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReversalNotificationRequest](#schemareversalnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[ReversalNotificationRequestItemWrapper](#schemareversalnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="result-of-reversal-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## The pre-arbitration case was escalated to scheme arbitration by the issuer

<a id="opIdpost-SCHEME_ARBITRATION"></a>

`POST /SCHEME_ARBITRATION`

The [pre-arbitration](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process) case was escalated by the issuer.

> Body parameter

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

<h3 id="the-pre-arbitration-case-was-escalated-to-scheme-arbitration-by-the-issuer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PrearbitrationSchemeArbitrationNotificationRequest](#schemaprearbitrationschemearbitrationnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="the-pre-arbitration-case-was-escalated-to-scheme-arbitration-by-the-issuer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## The scheme has ruled in favor of the issuer.

<a id="opIdpost-SCHEME_ARBITRATION_LOST"></a>

`POST /SCHEME_ARBITRATION_LOST`

The pre-arbitration case was escalated to [scheme arbitration](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process), and the case was lost. The payment scheme has ruled that you are liable for the dispute.

> Body parameter

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

<h3 id="the-scheme-has-ruled-in-favor-of-the-issuer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SchemeArbitrationLostNotificationRequest](#schemaschemearbitrationlostnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="the-scheme-has-ruled-in-favor-of-the-issuer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## The scheme has ruled in your favor.

<a id="opIdpost-SCHEME_ARBITRATION_WON"></a>

`POST /SCHEME_ARBITRATION_WON`

The pre-arbitration case was escalated to [scheme arbitration](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process), and the case was won. The payment scheme has ruled that the issuer is liable for the dispute. The dispute is closed.

> Body parameter

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

<h3 id="the-scheme-has-ruled-in-your-favor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SchemeArbitrationWonNotificationRequest](#schemaschemearbitrationwonnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="the-scheme-has-ruled-in-your-favor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Issuing bank declined chargeback defense

<a id="opIdpost-SECOND_CHARGEBACK"></a>

`POST /SECOND_CHARGEBACK`

The issuing bank declined the material submitted during [defense of the original chargeback](https://docs.adyen.com/risk-management/understanding-disputes/defense-requirements). The disputed amount is deducted from your account.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "chargebackReasonCode": "502",
          "modificationMerchantReferences": "shopperReferenceTest",
          "chargebackSchemeCode": "jcb"
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "SECOND_CHARGEBACK",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "paymentMethod": "jcb",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "502:Cardmember Dispute",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="issuing-bank-declined-chargeback-defense-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SecondChargebackNotificationRequest](#schemasecondchargebacknotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="issuing-bank-declined-chargeback-defense-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Capture settlement reversed

<a id="opIdpost-SETTLED_REVERSED"></a>

`POST /SETTLED_REVERSED`

A debit that reverses a **settled** transaction for which Adyen hasn't received the funds from the card scheme or payment method within 30 days of capture. This webhook is available for all payment methods for merchants on Sales Day Payout. [Enable this webhook](https://docs.adyen.com/development-resources/webhooks/webhook-types#non-default-event-codes) in your Customer Area.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "settlementReference": "OBK5EUCZL6BDL3RW",
          "expectedValueDate": "2026-08-20"
        },
        "amount": {
          "currency": "USD",
          "value": 10000
        },
        "eventCode": "SETTLED_REVERSED",
        "eventDate": "2026-07-20T21:40:59+02:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "ZTRB7QZPHD4Z8F75",
        "paymentMethod": "visa",
        "pspReference": "VND3Q7F9F3PNXT75",
        "reason": "",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="capture-settlement-reversed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SettledReversedNotificationRequest](#schemasettledreversednotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[SettledReversedNotificationRequestItemWrapper](#schemasettledreversednotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="capture-settlement-reversed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Result of technical cancel request

<a id="opIdpost-TECHNICAL_CANCEL"></a>

`POST /TECHNICAL_CANCEL`

The result of the [technical cancel](https://docs.adyen.com/online-payments/cancel#technical-cancel-webhook) request.

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "paymentMethodVariant": "visa"
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "TECHNICAL_CANCEL",
        "eventDate": "2018-07-18T22:35:14+02:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_ORIGINAL_REFERENCE",
        "originalReference": "8313547924770610",
        "paymentMethod": "visa",
        "pspReference": "8515208516304269",
        "reason": "",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="result-of-technical-cancel-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ModificationNotificationRequest](#schemamodificationnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[ModificationNotificationRequestItemWrapper](#schemamodificationnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="result-of-technical-cancel-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Result of request to cancel POS refund

<a id="opIdpost-VOID_PENDING_REFUND"></a>

`POST /VOID_PENDING_REFUND`

The result of the request to [cancel a POS refund](https://docs.adyen.com/point-of-sale/refund-payment/cancel-a-pos-refund-request).

> Body parameter

```json
{
  "live": "false",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "paymentMethodVariant": "mc"
        },
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "eventCode": "VOID_PENDING_REFUND",
        "eventDate": "2021-01-01T01:00:00+01:00",
        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
        "merchantReference": "YOUR_MERCHANT_REFERENCE",
        "originalReference": "9913140798220028",
        "paymentMethod": "mc",
        "pspReference": "QFQTPCQ8HXSKGK82",
        "reason": "",
        "success": "true"
      }
    }
  ]
}
```

<h3 id="result-of-request-to-cancel-pos-refund-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ModificationNotificationRequest](#schemamodificationnotificationrequest)|false|none|
|» live|body|string|false|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|» notificationItems|body|[[ModificationNotificationRequestItemWrapper](#schemamodificationnotificationrequestitemwrapper)]|false|A container object for the details included in the notification.|

<h3 id="result-of-request-to-cancel-pos-refund-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - webhook events are accepted on the basis of the HTTP status code.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

# Schemas

<h2 id="tocS_AchNotificationOfChangeNotificationRequest">AchNotificationOfChangeNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaachnotificationofchangenotificationrequest"></a>
<a id="schema_AchNotificationOfChangeNotificationRequest"></a>
<a id="tocSachnotificationofchangenotificationrequest"></a>
<a id="tocsachnotificationofchangenotificationrequest"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "data": {
    "notificationOfChange": {
      "newBankAccountNumber": "string",
      "newBankAccountType": "Checking",
      "newBranchCode": "string",
      "reasonCode": "C01"
    },
    "pspReference": "string",
    "shopperReference": "string"
  },
  "environment": "string",
  "type": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|Timestamp for when the webhook was created.|
|data|[AchNotificationOfChangeNotificationRequestData](#schemaachnotificationofchangenotificationrequestdata)|false|none|Contains details of the update.|
|environment|string|false|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|type|string|true|none|Type of notification.|
|version|string|false|none|The version of this webhook type.|

<h2 id="tocS_AchNotificationOfChangeNotificationRequestData">AchNotificationOfChangeNotificationRequestData</h2>
<!-- backwards compatibility -->
<a id="schemaachnotificationofchangenotificationrequestdata"></a>
<a id="schema_AchNotificationOfChangeNotificationRequestData"></a>
<a id="tocSachnotificationofchangenotificationrequestdata"></a>
<a id="tocsachnotificationofchangenotificationrequestdata"></a>

```json
{
  "notificationOfChange": {
    "newBankAccountNumber": "string",
    "newBankAccountType": "Checking",
    "newBranchCode": "string",
    "reasonCode": "C01"
  },
  "pspReference": "string",
  "shopperReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationOfChange|[AchNotificationOfChangeNotificationRequestDataNoc](#schemaachnotificationofchangenotificationrequestdatanoc)|true|none|The Notification of Change information.|
|pspReference|string|true|none|PSP Reference.|
|shopperReference|string|true|none|Shopper reference.|

<h2 id="tocS_AchNotificationOfChangeNotificationRequestDataNoc">AchNotificationOfChangeNotificationRequestDataNoc</h2>
<!-- backwards compatibility -->
<a id="schemaachnotificationofchangenotificationrequestdatanoc"></a>
<a id="schema_AchNotificationOfChangeNotificationRequestDataNoc"></a>
<a id="tocSachnotificationofchangenotificationrequestdatanoc"></a>
<a id="tocsachnotificationofchangenotificationrequestdatanoc"></a>

```json
{
  "newBankAccountNumber": "string",
  "newBankAccountType": "Checking",
  "newBranchCode": "string",
  "reasonCode": "C01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newBankAccountNumber|string|false|none|New bank account number.|
|newBankAccountType|string|false|none|New bank account type.<br><br>Possible values:<br>*  **Savings**<br>*  **Checking**<br><br>|
|newBranchCode|string|false|none|New branch code.|
|reasonCode|string|true|none|Notification of Change reason code.<br><br>Possible values:<br>*  **C01** : Incorrect bank account number.<br>*  **C02** : Incorrect transit/routing number.<br>*  **C03** : Incorrect transit/routing number and bank account number.<br>*  **C04** : Bank account name change.<br>*  **C05** : Incorrect payment code.<br>*  **C06** : Incorrect bank account number and transit code.<br>*  **C07** : Incorrect transit/routing number, bank account number and payment code.<br>*  **C09** : Incorrect individual ID number.<br>*  **C10** : Incorrect company name.<br>*  **C11** : Incorrect company identification.<br>*  **C12** : Incorrect company name and company ID.<br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|newBankAccountType|Checking|
|newBankAccountType|Savings|
|reasonCode|C01|
|reasonCode|C02|
|reasonCode|C03|
|reasonCode|C04|
|reasonCode|C05|
|reasonCode|C06|
|reasonCode|C07|
|reasonCode|C09|
|reasonCode|C10|
|reasonCode|C11|
|reasonCode|C12|

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

<h2 id="tocS_AuthorisationAdjustmentAdditionalData">AuthorisationAdjustmentAdditionalData</h2>
<!-- backwards compatibility -->
<a id="schemaauthorisationadjustmentadditionaldata"></a>
<a id="schema_AuthorisationAdjustmentAdditionalData"></a>
<a id="tocSauthorisationadjustmentadditionaldata"></a>
<a id="tocsauthorisationadjustmentadditionaldata"></a>

```json
{
  "adjustAuthorisationData": "string",
  "authCode": "string",
  "bookingDate": "string",
  "hmacSignature": "string",
  "merchantAdviceCode": "string",
  "paymentMethodVariant": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustAuthorisationData|string|false|none|none|
|authCode|string|false|none|none|
|bookingDate|string|false|none|none|
|hmacSignature|string|false|none|none|
|merchantAdviceCode|string|false|none|none|
|paymentMethodVariant|string|false|none|none|

<h2 id="tocS_AuthorisationAdjustmentNotificationRequest">AuthorisationAdjustmentNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaauthorisationadjustmentnotificationrequest"></a>
<a id="schema_AuthorisationAdjustmentNotificationRequest"></a>
<a id="tocSauthorisationadjustmentnotificationrequest"></a>
<a id="tocsauthorisationadjustmentnotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "adjustAuthorisationData": "string",
          "authCode": "string",
          "bookingDate": "string",
          "hmacSignature": "string",
          "merchantAdviceCode": "string",
          "paymentMethodVariant": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[AuthorisationAdjustmentNotificationRequestItemWrapper](#schemaauthorisationadjustmentnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_AuthorisationAdjustmentNotificationRequestItem">AuthorisationAdjustmentNotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemaauthorisationadjustmentnotificationrequestitem"></a>
<a id="schema_AuthorisationAdjustmentNotificationRequestItem"></a>
<a id="tocSauthorisationadjustmentnotificationrequestitem"></a>
<a id="tocsauthorisationadjustmentnotificationrequestitem"></a>

```json
{
  "additionalData": {
    "adjustAuthorisationData": "string",
    "authCode": "string",
    "bookingDate": "string",
    "hmacSignature": "string",
    "merchantAdviceCode": "string",
    "paymentMethodVariant": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[AuthorisationAdjustmentAdditionalData](#schemaauthorisationadjustmentadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_AuthorisationAdjustmentNotificationRequestItem-recursive">AuthorisationAdjustmentNotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemaauthorisationadjustmentnotificationrequestitem-recursive"></a>
<a id="schema_AuthorisationAdjustmentNotificationRequestItem-recursive"></a>
<a id="tocSauthorisationadjustmentnotificationrequestitem-recursive"></a>
<a id="tocsauthorisationadjustmentnotificationrequestitem-recursive"></a>

```json
{
  "additionalData": {
    "adjustAuthorisationData": "string",
    "authCode": "string",
    "bookingDate": "string",
    "hmacSignature": "string",
    "merchantAdviceCode": "string",
    "paymentMethodVariant": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[AuthorisationAdjustmentAdditionalData](#schemaauthorisationadjustmentadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_AuthorisationAdjustmentNotificationRequestItemWrapper">AuthorisationAdjustmentNotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemaauthorisationadjustmentnotificationrequestitemwrapper"></a>
<a id="schema_AuthorisationAdjustmentNotificationRequestItemWrapper"></a>
<a id="tocSauthorisationadjustmentnotificationrequestitemwrapper"></a>
<a id="tocsauthorisationadjustmentnotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "adjustAuthorisationData": "string",
      "authCode": "string",
      "bookingDate": "string",
      "hmacSignature": "string",
      "merchantAdviceCode": "string",
      "paymentMethodVariant": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "AUTHENTICATION",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "originalReference": "string",
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "string",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[AuthorisationAdjustmentNotificationRequestItem](#schemaauthorisationadjustmentnotificationrequestitem)|false|none|none|

<h2 id="tocS_AuthorisationNotificationAdditionalData">AuthorisationNotificationAdditionalData</h2>
<!-- backwards compatibility -->
<a id="schemaauthorisationnotificationadditionaldata"></a>
<a id="schema_AuthorisationNotificationAdditionalData"></a>
<a id="tocSauthorisationnotificationadditionaldata"></a>
<a id="tocsauthorisationnotificationadditionaldata"></a>

```json
{
  "GoPay.gopayAccountId": "string",
  "PaymentAccountReference": "string",
  "accountValidation": "string",
  "acquirerAccountCode": "string",
  "acquirerCode": "string",
  "acquirerReference": "string",
  "acquirerResponseCode": "string",
  "acsRenderingType.acsInterface": "string",
  "acsRenderingType.acsUiTemplate": "string",
  "adjustAuthorisationData": "string",
  "airline.<name>": "string",
  "alias": "string",
  "aliasType": "string",
  "allow3DS2": "string",
  "antfinancialosp.timestamp": "string",
  "applicationinfo.<name>": "string",
  "arn": "string",
  "authCode": "string",
  "authDateTime": "string",
  "authenticationType": "string",
  "authorisationMid": "string",
  "authorisedAmountCurrency": "string",
  "authorisedAmountValue": "string",
  "avsResult": "string",
  "avsResultRaw": "string",
  "bankAccount.iban": "string",
  "bankAccount.ownerName": "string",
  "bankAccountNumber": "string",
  "bankLocation": "string",
  "bankLocationId": "string",
  "bankName": "string",
  "bankSummary": "string",
  "bankVerificationResult": "string",
  "bankVerificationResultRaw": "string",
  "bic": "string",
  "billingAddress.city": "string",
  "billingAddress.country": "string",
  "billingAddress.houseNumberOrName": "string",
  "billingAddress.postalCode": "string",
  "billingAddress.stateOrProvince": "string",
  "billingAddress.street": "string",
  "binRangeId": "string",
  "bookingDate": "string",
  "browserCode": "string",
  "captureDelayHours": "string",
  "captureMerchantReference": "string",
  "capturePspReference": "string",
  "cardBin": "string",
  "cardFunction": "string",
  "cardIssuerCountryId": "string",
  "cardIssuingBank": "string",
  "cardIssuingCountry": "string",
  "cardIssuingCurrency": "string",
  "cardPaymentMethod": "string",
  "cardProductId": "string",
  "cardSchemeEnhancedDataLevel": "string",
  "cardSummary": "string",
  "cavv": "string",
  "cavvAlgorithm": "string",
  "challengeCancel": "string",
  "checkoutSessionId": "string",
  "coBrandedWith": "string",
  "countryCode": "string",
  "currentBalanceCurrency": "string",
  "currentBalanceValue": "string",
  "cvcResult": "string",
  "cvcResultRaw": "string",
  "deliveryAddress.city": "string",
  "deliveryAddress.country": "string",
  "deliveryAddress.houseNumberOrName": "string",
  "deliveryAddress.postalCode": "string",
  "deliveryAddress.stateOrProvince": "string",
  "deliveryAddress.street": "string",
  "deviceType": "string",
  "directdebit_GB.dateOfSignature": "string",
  "directdebit_GB.mandateId": "string",
  "directdebit_GB.sequenceType": "string",
  "directdebit_GB.serviceUserName": "string",
  "directdebit_GB.serviceUserNumber": "string",
  "domesticRefusalReasonRaw": "string",
  "domesticShopperAdvice": "string",
  "dsTransID": "string",
  "eci": "string",
  "expiryDate": "string",
  "extraCostsCurrency": "string",
  "extraCostsValue": "string",
  "extraCostsValueGratuity": "string",
  "extraCostsValueSurcharge": "string",
  "fraudCheck-<check ID>-<name>": "string",
  "fraudManualReview": "string",
  "fraudOffset": "string",
  "fraudResultType": "string",
  "fraudRiskLevel": "veryLow",
  "fundingSource": "string",
  "fundsAvailability": "string",
  "grossCurrency": "string",
  "grossValue": "string",
  "hmacSignature": "string",
  "iDealConsumerAccountNumber": "string",
  "iDealConsumerBIC": "string",
  "iDealConsumerCity": "string",
  "iDealConsumerIBAN": "string",
  "iDealConsumerIban": "string",
  "iDealConsumerName": "string",
  "iDealTransactionId": "string",
  "iban": "string",
  "inferredRefusalReason": "string",
  "installments.value": "string",
  "interactionCounter": "string",
  "isCardCommercial": "string",
  "issuerBin": "string",
  "issuerComments.cardholderName": "string",
  "issuerConcentratorName": "string",
  "issuerCountry": "string",
  "latestCard.bin": "string",
  "latestCard.expiryDate": "string",
  "latestCard.summary": "string",
  "liabilityShift": "string",
  "mcBankNetReferenceNumber": "string",
  "mcFinancialNetworkCode": "string",
  "merchantAdviceCode": "string",
  "merchantIntegration.type": "string",
  "merchantIntegration.version": "string",
  "merchantOrderReference": "string",
  "merchantReference": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "modifiedShopperReference": "string",
  "networkProcessingMode": "string",
  "networkToken.available": "string",
  "networkToken.bin": "string",
  "networkToken.tokenSummary": "string",
  "networkTxDate": "string",
  "networkTxReference": "string",
  "nfc.expire": "string",
  "nfc.issue": "string",
  "nfc.pin.provided": "string",
  "nfc.uid": "string",
  "oneyRawResponse": "string",
  "opi.transToken": "string",
  "ownerCity": "string",
  "ownerName": "string",
  "payULatamTrazabilityCode": "string",
  "paymentLinkId": "string",
  "paymentMethod": "string",
  "paymentMethodVariant": "string",
  "payoutEligible": "string",
  "paypalAddressStatus": "string",
  "paypalBillingName": "string",
  "paypalEmail": "string",
  "paypalErrorCode": "string",
  "paypalErrorDescription": "string",
  "paypalPairingId": "string",
  "paypalPayerId": "string",
  "paypalPayerResidenceCountry": "string",
  "paypalPayerStatus": "string",
  "paypalPhone": "string",
  "paypalProtectionEligibility": "string",
  "paypalRisk": "string",
  "platform": "string",
  "realtimeAccountUpdaterStatus": "string",
  "receipt.retrievalReferenceNumber": "string",
  "receipt.systemTraceAuditNumber": "string",
  "recurring.contractTypes": "string",
  "recurring.firstPspReference": "string",
  "recurring.recurringDetailReference": "string",
  "recurring.shopperReference": "string",
  "recurringProcessingModel": "string",
  "redirectUrl": "string",
  "referred": "string",
  "refusalReasonRaw": "string",
  "retry.rescueScheduled": "string",
  "returnUrl": "string",
  "riskExperimentReference": "string",
  "riskProfile": "string",
  "riskProfileReference": "string",
  "riskdata.<name>": "string",
  "scaExemptionRequested": "string",
  "sepadirectdebit.dateOfSignature": "string",
  "sepadirectdebit.mandateId": "string",
  "sepadirectdebit.sequenceType": "string",
  "shopperCountry": "string",
  "shopperEmail": "string",
  "shopperIP": "string",
  "shopperInteraction": "string",
  "shopperLocale": "string",
  "shopperName": "string",
  "shopperReference": "string",
  "shopperSocialSecurityNumber": "string",
  "shopperStatement": "string",
  "shopperTelephone": "string",
  "store": "string",
  "swish.payerAlias": "string",
  "tenderReference": "string",
  "terminalId": "string",
  "threeDAuthenticated": "string",
  "threeDAuthenticatedResponse": "string",
  "threeDOffered": "string",
  "threeDOfferedResponse": "string",
  "threeDSVersion": "string",
  "tokenTxVariant": "string",
  "tokenization.shopperReference": "string",
  "tokenization.store.operationType": "created",
  "tokenization.storedPaymentMethodId": "string",
  "totalFraudScore": "string",
  "transactionId": "string",
  "transactionLinkId": "string",
  "txScreening.appliedRule": "string",
  "txScreening.checkSum": "string",
  "txScreening.resolution": "string",
  "untokenisedCardSummary": "string",
  "visaTransactionId": "string",
  "xid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GoPay.gopayAccountId|string|false|none|A GoPay shopper's wallet ID. Used by merchant for Risk and Fraud checks.|
|PaymentAccountReference|string|false|none|none|
|accountValidation|string|false|none|none|
|acquirerAccountCode|string|false|none|The acquirer account code.|
|acquirerCode|string|false|none|The acquirer code.|
|acquirerReference|string|false|none|The acquirer reference.|
|acquirerResponseCode|string|false|none|none|
|acsRenderingType.acsInterface|string|false|none|none|
|acsRenderingType.acsUiTemplate|string|false|none|none|
|adjustAuthorisationData|string|false|none|none|
|airline.<name>|string|false|none|Information related to airlines.|
|alias|string|false|none|Alias for this card.|
|aliasType|string|false|none|Alias type.|
|allow3DS2|string|false|none|none|
|antfinancialosp.timestamp|string|false|none|none|
|applicationinfo.<name>|string|false|none|Shopper device application info in a dynamic format.|
|arn|string|false|none|Acquirer Reference Number of the dispute.|
|authCode|string|false|none|none|
|authDateTime|string|false|none|none|
|authenticationType|string|false|none|3DS authentication type|
|authorisationMid|string|false|none|Authorisation MID of the acquirer.|
|authorisedAmountCurrency|string|false|none|The currency authorised for a dynamic zero auth request.|
|authorisedAmountValue|string|false|none|The amount authorised for a dynamic zero auth request.|
|avsResult|string|false|none|Address Verification Service result.|
|avsResultRaw|string|false|none|Address Verification Service result raw.|
|bankAccount.iban|string|false|none|none|
|bankAccount.ownerName|string|false|none|none|
|bankAccountNumber|string|false|none|The bank account number.|
|bankLocation|string|false|none|The bank location.|
|bankLocationId|string|false|none|The bank location ID.|
|bankName|string|false|none|The bank name.|
|bankSummary|string|false|none|none|
|bankVerificationResult|string|false|none|The bank verification result.|
|bankVerificationResultRaw|string|false|none|The bank verification result raw.|
|bic|string|false|none|Business Identifier Code.|
|billingAddress.city|string|false|none|none|
|billingAddress.country|string|false|none|none|
|billingAddress.houseNumberOrName|string|false|none|none|
|billingAddress.postalCode|string|false|none|none|
|billingAddress.stateOrProvince|string|false|none|none|
|billingAddress.street|string|false|none|none|
|binRangeId|string|false|none|none|
|bookingDate|string|false|none|none|
|browserCode|string|false|none|Browser code.|
|captureDelayHours|string|false|none|The amount of delay after authorisation.|
|captureMerchantReference|string|false|none|The merchant reference of the capture.|
|capturePspReference|string|false|none|The PSP reference of the capture.|
|cardBin|string|false|none|Card Bank Identification number.|
|cardFunction|string|false|none|none|
|cardIssuerCountryId|string|false|none|none|
|cardIssuingBank|string|false|none|Card issuing bank.|
|cardIssuingCountry|string|false|none|Card issuing country.|
|cardIssuingCurrency|string|false|none|Card issuing currency.|
|cardPaymentMethod|string|false|none|Card payment method.|
|cardProductId|string|false|none|The card product identifier for the card used in the transaction.|
|cardSchemeEnhancedDataLevel|string|false|none|Card scheme enhanced data level.|
|cardSummary|string|false|none|Card summary|
|cavv|string|false|none|Secure Cardholder Authentication Verification Value.|
|cavvAlgorithm|string|false|none|CAVV algorithm.|
|challengeCancel|string|false|none|Information about the 3DS challenge being canceled.|
|checkoutSessionId|string|false|none|none|
|coBrandedWith|string|false|none|none|
|countryCode|string|false|none|none|
|currentBalanceCurrency|string|false|none|none|
|currentBalanceValue|string|false|none|none|
|cvcResult|string|false|none|Card Verification Code result.|
|cvcResultRaw|string|false|none|Card Verification Code result raw.|
|deliveryAddress.city|string|false|none|none|
|deliveryAddress.country|string|false|none|none|
|deliveryAddress.houseNumberOrName|string|false|none|none|
|deliveryAddress.postalCode|string|false|none|Delivery address: postal code.|
|deliveryAddress.stateOrProvince|string|false|none|none|
|deliveryAddress.street|string|false|none|none|
|deviceType|string|false|none|Type of device the request was made from.|
|directdebit_GB.dateOfSignature|string|false|none|Direct debit GB: date of signature.|
|directdebit_GB.mandateId|string|false|none|Direct debit GB: mandate ID.|
|directdebit_GB.sequenceType|string|false|none|Direct debit GB: sequence type.|
|directdebit_GB.serviceUserName|string|false|none|Direct debit GB: service user name.|
|directdebit_GB.serviceUserNumber|string|false|none|Direct debit GB: service user number.|
|domesticRefusalReasonRaw|string|false|none|none|
|domesticShopperAdvice|string|false|none|none|
|dsTransID|string|false|none|none|
|eci|string|false|none|3DS: Electronic Commerce Indicator.|
|expiryDate|string|false|none|Expiry date of the card.|
|extraCostsCurrency|string|false|none|Additional cost used in [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification).|
|extraCostsValue|string|false|none|Related additional cost value.|
|extraCostsValueGratuity|string|false|none|Gratuity related additional cost value.|
|extraCostsValueSurcharge|string|false|none|Surcharge related additional cost value.|
|fraudCheck-<check ID>-<name>|string|false|none|Information on the fraud check in a dynamic format.|
|fraudManualReview|string|false|none|Indicates if the risk check was done manually.|
|fraudOffset|string|false|none|The fraud offset.|
|fraudResultType|string|false|none|Result type of the fraud check.|
|fraudRiskLevel|string|false|none|The risk level of the transaction as classified by the [machine learning](https://docs.adyen.com/risk-management/configure-your-risk-profile/machine-learning-rules/) fraud risk rule. The risk level indicates the likelihood that a transaction will result in a fraudulent dispute. Possible values:<br>* veryLow<br>* low<br>* medium<br>* high<br>* veryHigh<br><br>|
|fundingSource|string|false|none|Funding source.|
|fundsAvailability|string|false|none|none|
|grossCurrency|string|false|none|Chargeback gross currency.|
|grossValue|string|false|none|Chargeback gross value.|
|hmacSignature|string|false|none|none|
|iDealConsumerAccountNumber|string|false|none|Only included for iDeal payments.|
|iDealConsumerBIC|string|false|none|Only included for iDeal payments.|
|iDealConsumerCity|string|false|none|Only included for iDeal payments.|
|iDealConsumerIBAN|string|false|none|Only included for iDeal payments.|
|iDealConsumerIban|string|false|none|Only included for iDeal payments.|
|iDealConsumerName|string|false|none|Only included for iDeal payments.|
|iDealTransactionId|string|false|none|Only included for iDeal payments.|
|iban|string|false|none|International Bank Account Number.|
|inferredRefusalReason|string|false|none|none|
|installments.value|string|false|none|none|
|interactionCounter|string|false|none|3DS interaction counter.|
|isCardCommercial|string|false|none|Indicates if the card is used for business purposes only.|
|issuerBin|string|false|none|none|
|issuerComments.cardholderName|string|false|none|Card holder name.|
|issuerConcentratorName|string|false|none|none|
|issuerCountry|string|false|none|Country of the card issuer.|
|latestCard.bin|string|false|none|none|
|latestCard.expiryDate|string|false|none|none|
|latestCard.summary|string|false|none|none|
|liabilityShift|string|false|none|Risk liability shift.|
|mcBankNetReferenceNumber|string|false|none|none|
|mcFinancialNetworkCode|string|false|none|none|
|merchantAdviceCode|string|false|none|none|
|merchantIntegration.type|string|false|none|none|
|merchantIntegration.version|string|false|none|none|
|merchantOrderReference|string|false|none|none|
|merchantReference|string|false|none|none|
|metadata|object|false|none|A set of key-value pairs provided in the request, prefixed with 'metadata.'. For example, 'metadata.myField: myValue'|
|modifiedShopperReference|string|false|none|none|
|networkProcessingMode|string|false|none|Indicates the processing flow.<br><br>Possible values:<br>* **sale**: You do not need to separately capture the funds, because capture happens automatically as part of the transaction. <br>* **auth**: If you have not [configured automatic capture for the transaction](https://docs.adyen.com/online-payments/capture#types-of-capture), you must manually capture the funds.|
|networkToken.available|string|false|none|none|
|networkToken.bin|string|false|none|none|
|networkToken.tokenSummary|string|false|none|none|
|networkTxDate|string|false|none|The network transaction date for Mastercard transactions processed by Bank of America Merchant Services (BAMS).|
|networkTxReference|string|false|none|The network transaction reference from the scheme, when available.|
|nfc.expire|string|false|none|NFC related.|
|nfc.issue|string|false|none|NFC related.|
|nfc.pin.provided|string|false|none|NFC related.|
|nfc.uid|string|false|none|NFC related.|
|oneyRawResponse|string|false|none|none|
|opi.transToken|string|false|none|The transaction token to be used in your Oracle Opera integration.|
|ownerCity|string|false|none|Owner city.|
|ownerName|string|false|none|Owner name.|
|payULatamTrazabilityCode|string|false|none|Related to PayU in LATAM.|
|paymentLinkId|string|false|none|ID of the Checkout payment link.|
|paymentMethod|string|false|none|none|
|paymentMethodVariant|string|false|none|none|
|payoutEligible|string|false|none|none|
|paypalAddressStatus|string|false|none|Related to PayPal.|
|paypalBillingName|string|false|none|Related to PayPal.|
|paypalEmail|string|false|none|The buyer's PayPal account email address.<br><br>Example: paypaltest@adyen.com|
|paypalErrorCode|string|false|none|Related to PayPal.|
|paypalErrorDescription|string|false|none|Related to PayPal.|
|paypalPairingId|string|false|none|Related to PayPal.|
|paypalPayerId|string|false|none|The buyer's PayPal ID.<br><br>Example: LF5HCWWBRV2KL|
|paypalPayerResidenceCountry|string|false|none|The buyer's country of residence.<br><br>Example: NL|
|paypalPayerStatus|string|false|none|The status of the buyer's PayPal account.<br><br>Example: unverified|
|paypalPhone|string|false|none|Related to PayPal.|
|paypalProtectionEligibility|string|false|none|The eligibility for PayPal Seller Protection for this payment.<br><br>Example: Ineligible|
|paypalRisk|string|false|none|Related to PayPal.|
|platform|string|false|none|none|
|realtimeAccountUpdaterStatus|string|false|none|Real time Account Update status.|
|receipt.retrievalReferenceNumber|string|false|none|none|
|receipt.systemTraceAuditNumber|string|false|none|none|
|recurring.contractTypes|string|false|none|none|
|recurring.firstPspReference|string|false|none|none|
|recurring.recurringDetailReference|string|false|none|The new tokenization.storedPaymentMethodId field replaces this field.<br>The `recurringDetailReference` returned in the `/payments` response when you stored the shopper's payment details.|
|recurring.shopperReference|string|false|none|The new tokenization.shopperReferencefield replaces this field.<br>The shopper reference you set when you made the request to store the shopper's payment details.|
|recurringProcessingModel|string|false|none|The recurring processing model the request was flagged with.|
|redirectUrl|string|false|none|none|
|referred|string|false|none|If the payment is referred, this field is set to true.<br><br>This field is unavailable if the payment is referred and is usually not returned with ecommerce transactions.<br><br>Example: true|
|refusalReasonRaw|string|false|none|Raw refusal reason received from the acquirer, where available.<br><br>Example: AUTHORISED|
|retry.rescueScheduled|string|false|none|Indicates if an auto rescue for a payment is scheduled.|
|returnUrl|string|false|none|none|
|riskExperimentReference|string|false|none|none|
|riskProfile|string|false|none|Related to Risk.|
|riskProfileReference|string|false|none|Related to Risk.|
|riskdata.<name>|string|false|none|Risk data in a dynamic format.|
|scaExemptionRequested|string|false|none|none|
|sepadirectdebit.dateOfSignature|string|false|none|none|
|sepadirectdebit.mandateId|string|false|none|none|
|sepadirectdebit.sequenceType|string|false|none|none|
|shopperCountry|string|false|none|Country of the shopper.|
|shopperEmail|string|false|none|Email of the shopper.|
|shopperIP|string|false|none|IP of the shopper.|
|shopperInteraction|string|false|none|The shopper interaction type of the payment request.<br><br>Example: Ecommerce|
|shopperLocale|string|false|none|The locale of the shopper.|
|shopperName|string|false|none|none|
|shopperReference|string|false|none|none|
|shopperSocialSecurityNumber|string|false|none|The social security number of the shopper.|
|shopperStatement|string|false|none|The text to be shown on the shopper's bank statement.|
|shopperTelephone|string|false|none|The telephone number of the shopper.|
|store|string|false|none|Identifier of the store processing the transaction.|
|swish.payerAlias|string|false|none|A Swish shopper's telephone number.|
|tenderReference|string|false|none|Tender reference. For point-of-sale integrations only.|
|terminalId|string|false|none|Terminal ID. For point-of-sale integrations only.|
|threeDAuthenticated|string|false|none|A Boolean value indicating whether 3DS authentication was completed on this payment.<br><br>Example: true|
|threeDAuthenticatedResponse|string|false|none|The raw 3DS authentication result from the card issuer.<br><br>Example: N|
|threeDOffered|string|false|none|A Boolean value indicating whether 3DS was offered for this payment.<br><br>Example: true|
|threeDOfferedResponse|string|false|none|The raw enrollment result from the 3DS directory services of the card schemes.<br><br>Example: Y|
|threeDSVersion|string|false|none|The 3D Secure 2 version.|
|tokenTxVariant|string|false|none|Payment method variant of the token/wallet payment method.|
|tokenization.shopperReference|string|false|none|The reference for the shopper that you sent when tokenizing the payment details.|
|tokenization.store.operationType|string|false|none|The operation performed on the token. Possible values:<br><br>* **created**: the token has been created.<br>* **updated**: the existing token has been updated.<br>* **alreadyExisting**: the details have already been stored.<br>|
|tokenization.storedPaymentMethodId|string|false|none|The reference that uniquely identifies tokenized payment details.|
|totalFraudScore|string|false|none|Total fraud score from risk.|
|transactionId|string|false|none|none|
|transactionLinkId|string|false|none|none|
|txScreening.appliedRule|string|false|none|none|
|txScreening.checkSum|string|false|none|none|
|txScreening.resolution|string|false|none|none|
|untokenisedCardSummary|string|false|none|Card summary without tokenization.|
|visaTransactionId|string|false|none|none|
|xid|string|false|none|The 3DS transaction ID of the 3DS session sent in notifications. The value is Base64-encoded and is returned for transactions with directoryResponse 'N' or 'Y'. <br><br>Example: ODgxNDc2MDg2MDExODk5MAAAAAA=|

#### Enumerated Values

|Property|Value|
|---|---|
|fraudRiskLevel|veryLow|
|fraudRiskLevel|low|
|fraudRiskLevel|medium|
|fraudRiskLevel|high|
|fraudRiskLevel|veryHigh|
|tokenization.store.operationType|created|
|tokenization.store.operationType|updated|
|tokenization.store.operationType|alreadyExisting|

<h2 id="tocS_AuthorisationNotificationRequest">AuthorisationNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaauthorisationnotificationrequest"></a>
<a id="schema_AuthorisationNotificationRequest"></a>
<a id="tocSauthorisationnotificationrequest"></a>
<a id="tocsauthorisationnotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "GoPay.gopayAccountId": "string",
          "PaymentAccountReference": "string",
          "accountValidation": "string",
          "acquirerAccountCode": "string",
          "acquirerCode": "string",
          "acquirerReference": "string",
          "acquirerResponseCode": "string",
          "acsRenderingType.acsInterface": "string",
          "acsRenderingType.acsUiTemplate": "string",
          "adjustAuthorisationData": "string",
          "airline.<name>": "string",
          "alias": "string",
          "aliasType": "string",
          "allow3DS2": "string",
          "antfinancialosp.timestamp": "string",
          "applicationinfo.<name>": "string",
          "arn": "string",
          "authCode": "string",
          "authDateTime": "string",
          "authenticationType": "string",
          "authorisationMid": "string",
          "authorisedAmountCurrency": "string",
          "authorisedAmountValue": "string",
          "avsResult": "string",
          "avsResultRaw": "string",
          "bankAccount.iban": "string",
          "bankAccount.ownerName": "string",
          "bankAccountNumber": "string",
          "bankLocation": "string",
          "bankLocationId": "string",
          "bankName": "string",
          "bankSummary": "string",
          "bankVerificationResult": "string",
          "bankVerificationResultRaw": "string",
          "bic": "string",
          "billingAddress.city": "string",
          "billingAddress.country": "string",
          "billingAddress.houseNumberOrName": "string",
          "billingAddress.postalCode": "string",
          "billingAddress.stateOrProvince": "string",
          "billingAddress.street": "string",
          "binRangeId": "string",
          "bookingDate": "string",
          "browserCode": "string",
          "captureDelayHours": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "cardBin": "string",
          "cardFunction": "string",
          "cardIssuerCountryId": "string",
          "cardIssuingBank": "string",
          "cardIssuingCountry": "string",
          "cardIssuingCurrency": "string",
          "cardPaymentMethod": "string",
          "cardProductId": "string",
          "cardSchemeEnhancedDataLevel": "string",
          "cardSummary": "string",
          "cavv": "string",
          "cavvAlgorithm": "string",
          "challengeCancel": "string",
          "checkoutSessionId": "string",
          "coBrandedWith": "string",
          "countryCode": "string",
          "currentBalanceCurrency": "string",
          "currentBalanceValue": "string",
          "cvcResult": "string",
          "cvcResultRaw": "string",
          "deliveryAddress.city": "string",
          "deliveryAddress.country": "string",
          "deliveryAddress.houseNumberOrName": "string",
          "deliveryAddress.postalCode": "string",
          "deliveryAddress.stateOrProvince": "string",
          "deliveryAddress.street": "string",
          "deviceType": "string",
          "directdebit_GB.dateOfSignature": "string",
          "directdebit_GB.mandateId": "string",
          "directdebit_GB.sequenceType": "string",
          "directdebit_GB.serviceUserName": "string",
          "directdebit_GB.serviceUserNumber": "string",
          "domesticRefusalReasonRaw": "string",
          "domesticShopperAdvice": "string",
          "dsTransID": "string",
          "eci": "string",
          "expiryDate": "string",
          "extraCostsCurrency": "string",
          "extraCostsValue": "string",
          "extraCostsValueGratuity": "string",
          "extraCostsValueSurcharge": "string",
          "fraudCheck-<check ID>-<name>": "string",
          "fraudManualReview": "string",
          "fraudOffset": "string",
          "fraudResultType": "string",
          "fraudRiskLevel": "veryLow",
          "fundingSource": "string",
          "fundsAvailability": "string",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "iDealConsumerAccountNumber": "string",
          "iDealConsumerBIC": "string",
          "iDealConsumerCity": "string",
          "iDealConsumerIBAN": "string",
          "iDealConsumerIban": "string",
          "iDealConsumerName": "string",
          "iDealTransactionId": "string",
          "iban": "string",
          "inferredRefusalReason": "string",
          "installments.value": "string",
          "interactionCounter": "string",
          "isCardCommercial": "string",
          "issuerBin": "string",
          "issuerComments.cardholderName": "string",
          "issuerConcentratorName": "string",
          "issuerCountry": "string",
          "latestCard.bin": "string",
          "latestCard.expiryDate": "string",
          "latestCard.summary": "string",
          "liabilityShift": "string",
          "mcBankNetReferenceNumber": "string",
          "mcFinancialNetworkCode": "string",
          "merchantAdviceCode": "string",
          "merchantIntegration.type": "string",
          "merchantIntegration.version": "string",
          "merchantOrderReference": "string",
          "merchantReference": "string",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "modifiedShopperReference": "string",
          "networkProcessingMode": "string",
          "networkToken.available": "string",
          "networkToken.bin": "string",
          "networkToken.tokenSummary": "string",
          "networkTxDate": "string",
          "networkTxReference": "string",
          "nfc.expire": "string",
          "nfc.issue": "string",
          "nfc.pin.provided": "string",
          "nfc.uid": "string",
          "oneyRawResponse": "string",
          "opi.transToken": "string",
          "ownerCity": "string",
          "ownerName": "string",
          "payULatamTrazabilityCode": "string",
          "paymentLinkId": "string",
          "paymentMethod": "string",
          "paymentMethodVariant": "string",
          "payoutEligible": "string",
          "paypalAddressStatus": "string",
          "paypalBillingName": "string",
          "paypalEmail": "string",
          "paypalErrorCode": "string",
          "paypalErrorDescription": "string",
          "paypalPairingId": "string",
          "paypalPayerId": "string",
          "paypalPayerResidenceCountry": "string",
          "paypalPayerStatus": "string",
          "paypalPhone": "string",
          "paypalProtectionEligibility": "string",
          "paypalRisk": "string",
          "platform": "string",
          "realtimeAccountUpdaterStatus": "string",
          "receipt.retrievalReferenceNumber": "string",
          "receipt.systemTraceAuditNumber": "string",
          "recurring.contractTypes": "string",
          "recurring.firstPspReference": "string",
          "recurring.recurringDetailReference": "string",
          "recurring.shopperReference": "string",
          "recurringProcessingModel": "string",
          "redirectUrl": "string",
          "referred": "string",
          "refusalReasonRaw": "string",
          "retry.rescueScheduled": "string",
          "returnUrl": "string",
          "riskExperimentReference": "string",
          "riskProfile": "string",
          "riskProfileReference": "string",
          "riskdata.<name>": "string",
          "scaExemptionRequested": "string",
          "sepadirectdebit.dateOfSignature": "string",
          "sepadirectdebit.mandateId": "string",
          "sepadirectdebit.sequenceType": "string",
          "shopperCountry": "string",
          "shopperEmail": "string",
          "shopperIP": "string",
          "shopperInteraction": "string",
          "shopperLocale": "string",
          "shopperName": "string",
          "shopperReference": "string",
          "shopperSocialSecurityNumber": "string",
          "shopperStatement": "string",
          "shopperTelephone": "string",
          "store": "string",
          "swish.payerAlias": "string",
          "tenderReference": "string",
          "terminalId": "string",
          "threeDAuthenticated": "string",
          "threeDAuthenticatedResponse": "string",
          "threeDOffered": "string",
          "threeDOfferedResponse": "string",
          "threeDSVersion": "string",
          "tokenTxVariant": "string",
          "tokenization.shopperReference": "string",
          "tokenization.store.operationType": "created",
          "tokenization.storedPaymentMethodId": "string",
          "totalFraudScore": "string",
          "transactionId": "string",
          "transactionLinkId": "string",
          "txScreening.appliedRule": "string",
          "txScreening.checkSum": "string",
          "txScreening.resolution": "string",
          "untokenisedCardSummary": "string",
          "visaTransactionId": "string",
          "xid": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHORISATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "operations": [
          "CAPTURE"
        ],
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "874574:1935:11/2012",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[AuthorisationNotificationRequestItemWrapper](#schemaauthorisationnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_AuthorisationNotificationRequestItem">AuthorisationNotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemaauthorisationnotificationrequestitem"></a>
<a id="schema_AuthorisationNotificationRequestItem"></a>
<a id="tocSauthorisationnotificationrequestitem"></a>
<a id="tocsauthorisationnotificationrequestitem"></a>

```json
{
  "additionalData": {
    "GoPay.gopayAccountId": "string",
    "PaymentAccountReference": "string",
    "accountValidation": "string",
    "acquirerAccountCode": "string",
    "acquirerCode": "string",
    "acquirerReference": "string",
    "acquirerResponseCode": "string",
    "acsRenderingType.acsInterface": "string",
    "acsRenderingType.acsUiTemplate": "string",
    "adjustAuthorisationData": "string",
    "airline.<name>": "string",
    "alias": "string",
    "aliasType": "string",
    "allow3DS2": "string",
    "antfinancialosp.timestamp": "string",
    "applicationinfo.<name>": "string",
    "arn": "string",
    "authCode": "string",
    "authDateTime": "string",
    "authenticationType": "string",
    "authorisationMid": "string",
    "authorisedAmountCurrency": "string",
    "authorisedAmountValue": "string",
    "avsResult": "string",
    "avsResultRaw": "string",
    "bankAccount.iban": "string",
    "bankAccount.ownerName": "string",
    "bankAccountNumber": "string",
    "bankLocation": "string",
    "bankLocationId": "string",
    "bankName": "string",
    "bankSummary": "string",
    "bankVerificationResult": "string",
    "bankVerificationResultRaw": "string",
    "bic": "string",
    "billingAddress.city": "string",
    "billingAddress.country": "string",
    "billingAddress.houseNumberOrName": "string",
    "billingAddress.postalCode": "string",
    "billingAddress.stateOrProvince": "string",
    "billingAddress.street": "string",
    "binRangeId": "string",
    "bookingDate": "string",
    "browserCode": "string",
    "captureDelayHours": "string",
    "captureMerchantReference": "string",
    "capturePspReference": "string",
    "cardBin": "string",
    "cardFunction": "string",
    "cardIssuerCountryId": "string",
    "cardIssuingBank": "string",
    "cardIssuingCountry": "string",
    "cardIssuingCurrency": "string",
    "cardPaymentMethod": "string",
    "cardProductId": "string",
    "cardSchemeEnhancedDataLevel": "string",
    "cardSummary": "string",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "string",
    "checkoutSessionId": "string",
    "coBrandedWith": "string",
    "countryCode": "string",
    "currentBalanceCurrency": "string",
    "currentBalanceValue": "string",
    "cvcResult": "string",
    "cvcResultRaw": "string",
    "deliveryAddress.city": "string",
    "deliveryAddress.country": "string",
    "deliveryAddress.houseNumberOrName": "string",
    "deliveryAddress.postalCode": "string",
    "deliveryAddress.stateOrProvince": "string",
    "deliveryAddress.street": "string",
    "deviceType": "string",
    "directdebit_GB.dateOfSignature": "string",
    "directdebit_GB.mandateId": "string",
    "directdebit_GB.sequenceType": "string",
    "directdebit_GB.serviceUserName": "string",
    "directdebit_GB.serviceUserNumber": "string",
    "domesticRefusalReasonRaw": "string",
    "domesticShopperAdvice": "string",
    "dsTransID": "string",
    "eci": "string",
    "expiryDate": "string",
    "extraCostsCurrency": "string",
    "extraCostsValue": "string",
    "extraCostsValueGratuity": "string",
    "extraCostsValueSurcharge": "string",
    "fraudCheck-<check ID>-<name>": "string",
    "fraudManualReview": "string",
    "fraudOffset": "string",
    "fraudResultType": "string",
    "fraudRiskLevel": "veryLow",
    "fundingSource": "string",
    "fundsAvailability": "string",
    "grossCurrency": "string",
    "grossValue": "string",
    "hmacSignature": "string",
    "iDealConsumerAccountNumber": "string",
    "iDealConsumerBIC": "string",
    "iDealConsumerCity": "string",
    "iDealConsumerIBAN": "string",
    "iDealConsumerIban": "string",
    "iDealConsumerName": "string",
    "iDealTransactionId": "string",
    "iban": "string",
    "inferredRefusalReason": "string",
    "installments.value": "string",
    "interactionCounter": "string",
    "isCardCommercial": "string",
    "issuerBin": "string",
    "issuerComments.cardholderName": "string",
    "issuerConcentratorName": "string",
    "issuerCountry": "string",
    "latestCard.bin": "string",
    "latestCard.expiryDate": "string",
    "latestCard.summary": "string",
    "liabilityShift": "string",
    "mcBankNetReferenceNumber": "string",
    "mcFinancialNetworkCode": "string",
    "merchantAdviceCode": "string",
    "merchantIntegration.type": "string",
    "merchantIntegration.version": "string",
    "merchantOrderReference": "string",
    "merchantReference": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "modifiedShopperReference": "string",
    "networkProcessingMode": "string",
    "networkToken.available": "string",
    "networkToken.bin": "string",
    "networkToken.tokenSummary": "string",
    "networkTxDate": "string",
    "networkTxReference": "string",
    "nfc.expire": "string",
    "nfc.issue": "string",
    "nfc.pin.provided": "string",
    "nfc.uid": "string",
    "oneyRawResponse": "string",
    "opi.transToken": "string",
    "ownerCity": "string",
    "ownerName": "string",
    "payULatamTrazabilityCode": "string",
    "paymentLinkId": "string",
    "paymentMethod": "string",
    "paymentMethodVariant": "string",
    "payoutEligible": "string",
    "paypalAddressStatus": "string",
    "paypalBillingName": "string",
    "paypalEmail": "string",
    "paypalErrorCode": "string",
    "paypalErrorDescription": "string",
    "paypalPairingId": "string",
    "paypalPayerId": "string",
    "paypalPayerResidenceCountry": "string",
    "paypalPayerStatus": "string",
    "paypalPhone": "string",
    "paypalProtectionEligibility": "string",
    "paypalRisk": "string",
    "platform": "string",
    "realtimeAccountUpdaterStatus": "string",
    "receipt.retrievalReferenceNumber": "string",
    "receipt.systemTraceAuditNumber": "string",
    "recurring.contractTypes": "string",
    "recurring.firstPspReference": "string",
    "recurring.recurringDetailReference": "string",
    "recurring.shopperReference": "string",
    "recurringProcessingModel": "string",
    "redirectUrl": "string",
    "referred": "string",
    "refusalReasonRaw": "string",
    "retry.rescueScheduled": "string",
    "returnUrl": "string",
    "riskExperimentReference": "string",
    "riskProfile": "string",
    "riskProfileReference": "string",
    "riskdata.<name>": "string",
    "scaExemptionRequested": "string",
    "sepadirectdebit.dateOfSignature": "string",
    "sepadirectdebit.mandateId": "string",
    "sepadirectdebit.sequenceType": "string",
    "shopperCountry": "string",
    "shopperEmail": "string",
    "shopperIP": "string",
    "shopperInteraction": "string",
    "shopperLocale": "string",
    "shopperName": "string",
    "shopperReference": "string",
    "shopperSocialSecurityNumber": "string",
    "shopperStatement": "string",
    "shopperTelephone": "string",
    "store": "string",
    "swish.payerAlias": "string",
    "tenderReference": "string",
    "terminalId": "string",
    "threeDAuthenticated": "string",
    "threeDAuthenticatedResponse": "string",
    "threeDOffered": "string",
    "threeDOfferedResponse": "string",
    "threeDSVersion": "string",
    "tokenTxVariant": "string",
    "tokenization.shopperReference": "string",
    "tokenization.store.operationType": "created",
    "tokenization.storedPaymentMethodId": "string",
    "totalFraudScore": "string",
    "transactionId": "string",
    "transactionLinkId": "string",
    "txScreening.appliedRule": "string",
    "txScreening.checkSum": "string",
    "txScreening.resolution": "string",
    "untokenisedCardSummary": "string",
    "visaTransactionId": "string",
    "xid": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHORISATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "operations": [
    "CAPTURE"
  ],
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "874574:1935:11/2012",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[AuthorisationNotificationAdditionalData](#schemaauthorisationnotificationadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|operations|[string]|false|none|The possible follow-up actions for the payment. For example, an authorized payment that has been captured can only have the refund action as a follow-up.<br><br>Possible values:<br><br> * **CAPTURE**: The funds for the authorized payment can be captured.<br><br> * **CANCEL**: The authorized payment can be cancelled.<br><br> * **REFUND**: The payment can be refunded.<br><br>The list can be empty, for example for a payment that was declined.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `true` and `paymentMethod` = `visa`, `mc`, or `amex` then this field contains the following details: <br>Authorisation code, last 4 digits of the card, card expiry date. <br> In case of failure, this contains information about the authorisation failure|
|success|string|true|none|If `true`: The payment request was successful. <br> If `false`: The payment request failed. <br> Check the `reason` field for failure information.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHORISATION|
|operations|CAPTURE|
|operations|CANCEL|
|operations|REFUND|

<h2 id="tocS_AuthorisationNotificationRequestItem-recursive">AuthorisationNotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemaauthorisationnotificationrequestitem-recursive"></a>
<a id="schema_AuthorisationNotificationRequestItem-recursive"></a>
<a id="tocSauthorisationnotificationrequestitem-recursive"></a>
<a id="tocsauthorisationnotificationrequestitem-recursive"></a>

```json
{
  "additionalData": {
    "GoPay.gopayAccountId": "string",
    "PaymentAccountReference": "string",
    "accountValidation": "string",
    "acquirerAccountCode": "string",
    "acquirerCode": "string",
    "acquirerReference": "string",
    "acquirerResponseCode": "string",
    "acsRenderingType.acsInterface": "string",
    "acsRenderingType.acsUiTemplate": "string",
    "adjustAuthorisationData": "string",
    "airline.<name>": "string",
    "alias": "string",
    "aliasType": "string",
    "allow3DS2": "string",
    "antfinancialosp.timestamp": "string",
    "applicationinfo.<name>": "string",
    "arn": "string",
    "authCode": "string",
    "authDateTime": "string",
    "authenticationType": "string",
    "authorisationMid": "string",
    "authorisedAmountCurrency": "string",
    "authorisedAmountValue": "string",
    "avsResult": "string",
    "avsResultRaw": "string",
    "bankAccount.iban": "string",
    "bankAccount.ownerName": "string",
    "bankAccountNumber": "string",
    "bankLocation": "string",
    "bankLocationId": "string",
    "bankName": "string",
    "bankSummary": "string",
    "bankVerificationResult": "string",
    "bankVerificationResultRaw": "string",
    "bic": "string",
    "billingAddress.city": "string",
    "billingAddress.country": "string",
    "billingAddress.houseNumberOrName": "string",
    "billingAddress.postalCode": "string",
    "billingAddress.stateOrProvince": "string",
    "billingAddress.street": "string",
    "binRangeId": "string",
    "bookingDate": "string",
    "browserCode": "string",
    "captureDelayHours": "string",
    "captureMerchantReference": "string",
    "capturePspReference": "string",
    "cardBin": "string",
    "cardFunction": "string",
    "cardIssuerCountryId": "string",
    "cardIssuingBank": "string",
    "cardIssuingCountry": "string",
    "cardIssuingCurrency": "string",
    "cardPaymentMethod": "string",
    "cardProductId": "string",
    "cardSchemeEnhancedDataLevel": "string",
    "cardSummary": "string",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "string",
    "checkoutSessionId": "string",
    "coBrandedWith": "string",
    "countryCode": "string",
    "currentBalanceCurrency": "string",
    "currentBalanceValue": "string",
    "cvcResult": "string",
    "cvcResultRaw": "string",
    "deliveryAddress.city": "string",
    "deliveryAddress.country": "string",
    "deliveryAddress.houseNumberOrName": "string",
    "deliveryAddress.postalCode": "string",
    "deliveryAddress.stateOrProvince": "string",
    "deliveryAddress.street": "string",
    "deviceType": "string",
    "directdebit_GB.dateOfSignature": "string",
    "directdebit_GB.mandateId": "string",
    "directdebit_GB.sequenceType": "string",
    "directdebit_GB.serviceUserName": "string",
    "directdebit_GB.serviceUserNumber": "string",
    "domesticRefusalReasonRaw": "string",
    "domesticShopperAdvice": "string",
    "dsTransID": "string",
    "eci": "string",
    "expiryDate": "string",
    "extraCostsCurrency": "string",
    "extraCostsValue": "string",
    "extraCostsValueGratuity": "string",
    "extraCostsValueSurcharge": "string",
    "fraudCheck-<check ID>-<name>": "string",
    "fraudManualReview": "string",
    "fraudOffset": "string",
    "fraudResultType": "string",
    "fraudRiskLevel": "veryLow",
    "fundingSource": "string",
    "fundsAvailability": "string",
    "grossCurrency": "string",
    "grossValue": "string",
    "hmacSignature": "string",
    "iDealConsumerAccountNumber": "string",
    "iDealConsumerBIC": "string",
    "iDealConsumerCity": "string",
    "iDealConsumerIBAN": "string",
    "iDealConsumerIban": "string",
    "iDealConsumerName": "string",
    "iDealTransactionId": "string",
    "iban": "string",
    "inferredRefusalReason": "string",
    "installments.value": "string",
    "interactionCounter": "string",
    "isCardCommercial": "string",
    "issuerBin": "string",
    "issuerComments.cardholderName": "string",
    "issuerConcentratorName": "string",
    "issuerCountry": "string",
    "latestCard.bin": "string",
    "latestCard.expiryDate": "string",
    "latestCard.summary": "string",
    "liabilityShift": "string",
    "mcBankNetReferenceNumber": "string",
    "mcFinancialNetworkCode": "string",
    "merchantAdviceCode": "string",
    "merchantIntegration.type": "string",
    "merchantIntegration.version": "string",
    "merchantOrderReference": "string",
    "merchantReference": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "modifiedShopperReference": "string",
    "networkProcessingMode": "string",
    "networkToken.available": "string",
    "networkToken.bin": "string",
    "networkToken.tokenSummary": "string",
    "networkTxDate": "string",
    "networkTxReference": "string",
    "nfc.expire": "string",
    "nfc.issue": "string",
    "nfc.pin.provided": "string",
    "nfc.uid": "string",
    "oneyRawResponse": "string",
    "opi.transToken": "string",
    "ownerCity": "string",
    "ownerName": "string",
    "payULatamTrazabilityCode": "string",
    "paymentLinkId": "string",
    "paymentMethod": "string",
    "paymentMethodVariant": "string",
    "payoutEligible": "string",
    "paypalAddressStatus": "string",
    "paypalBillingName": "string",
    "paypalEmail": "string",
    "paypalErrorCode": "string",
    "paypalErrorDescription": "string",
    "paypalPairingId": "string",
    "paypalPayerId": "string",
    "paypalPayerResidenceCountry": "string",
    "paypalPayerStatus": "string",
    "paypalPhone": "string",
    "paypalProtectionEligibility": "string",
    "paypalRisk": "string",
    "platform": "string",
    "realtimeAccountUpdaterStatus": "string",
    "receipt.retrievalReferenceNumber": "string",
    "receipt.systemTraceAuditNumber": "string",
    "recurring.contractTypes": "string",
    "recurring.firstPspReference": "string",
    "recurring.recurringDetailReference": "string",
    "recurring.shopperReference": "string",
    "recurringProcessingModel": "string",
    "redirectUrl": "string",
    "referred": "string",
    "refusalReasonRaw": "string",
    "retry.rescueScheduled": "string",
    "returnUrl": "string",
    "riskExperimentReference": "string",
    "riskProfile": "string",
    "riskProfileReference": "string",
    "riskdata.<name>": "string",
    "scaExemptionRequested": "string",
    "sepadirectdebit.dateOfSignature": "string",
    "sepadirectdebit.mandateId": "string",
    "sepadirectdebit.sequenceType": "string",
    "shopperCountry": "string",
    "shopperEmail": "string",
    "shopperIP": "string",
    "shopperInteraction": "string",
    "shopperLocale": "string",
    "shopperName": "string",
    "shopperReference": "string",
    "shopperSocialSecurityNumber": "string",
    "shopperStatement": "string",
    "shopperTelephone": "string",
    "store": "string",
    "swish.payerAlias": "string",
    "tenderReference": "string",
    "terminalId": "string",
    "threeDAuthenticated": "string",
    "threeDAuthenticatedResponse": "string",
    "threeDOffered": "string",
    "threeDOfferedResponse": "string",
    "threeDSVersion": "string",
    "tokenTxVariant": "string",
    "tokenization.shopperReference": "string",
    "tokenization.store.operationType": "created",
    "tokenization.storedPaymentMethodId": "string",
    "totalFraudScore": "string",
    "transactionId": "string",
    "transactionLinkId": "string",
    "txScreening.appliedRule": "string",
    "txScreening.checkSum": "string",
    "txScreening.resolution": "string",
    "untokenisedCardSummary": "string",
    "visaTransactionId": "string",
    "xid": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHORISATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "operations": [
    "CAPTURE"
  ],
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "874574:1935:11/2012",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[AuthorisationNotificationAdditionalData](#schemaauthorisationnotificationadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|operations|[string]|false|none|The possible follow-up actions for the payment. For example, an authorized payment that has been captured can only have the refund action as a follow-up.<br><br>Possible values:<br><br> * **CAPTURE**: The funds for the authorized payment can be captured.<br><br> * **CANCEL**: The authorized payment can be cancelled.<br><br> * **REFUND**: The payment can be refunded.<br><br>The list can be empty, for example for a payment that was declined.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `true` and `paymentMethod` = `visa`, `mc`, or `amex` then this field contains the following details: <br>Authorisation code, last 4 digits of the card, card expiry date. <br> In case of failure, this contains information about the authorisation failure|
|success|string|true|none|If `true`: The payment request was successful. <br> If `false`: The payment request failed. <br> Check the `reason` field for failure information.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHORISATION|
|operations|CAPTURE|
|operations|CANCEL|
|operations|REFUND|

<h2 id="tocS_AuthorisationNotificationRequestItemWrapper">AuthorisationNotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemaauthorisationnotificationrequestitemwrapper"></a>
<a id="schema_AuthorisationNotificationRequestItemWrapper"></a>
<a id="tocSauthorisationnotificationrequestitemwrapper"></a>
<a id="tocsauthorisationnotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "GoPay.gopayAccountId": "string",
      "PaymentAccountReference": "string",
      "accountValidation": "string",
      "acquirerAccountCode": "string",
      "acquirerCode": "string",
      "acquirerReference": "string",
      "acquirerResponseCode": "string",
      "acsRenderingType.acsInterface": "string",
      "acsRenderingType.acsUiTemplate": "string",
      "adjustAuthorisationData": "string",
      "airline.<name>": "string",
      "alias": "string",
      "aliasType": "string",
      "allow3DS2": "string",
      "antfinancialosp.timestamp": "string",
      "applicationinfo.<name>": "string",
      "arn": "string",
      "authCode": "string",
      "authDateTime": "string",
      "authenticationType": "string",
      "authorisationMid": "string",
      "authorisedAmountCurrency": "string",
      "authorisedAmountValue": "string",
      "avsResult": "string",
      "avsResultRaw": "string",
      "bankAccount.iban": "string",
      "bankAccount.ownerName": "string",
      "bankAccountNumber": "string",
      "bankLocation": "string",
      "bankLocationId": "string",
      "bankName": "string",
      "bankSummary": "string",
      "bankVerificationResult": "string",
      "bankVerificationResultRaw": "string",
      "bic": "string",
      "billingAddress.city": "string",
      "billingAddress.country": "string",
      "billingAddress.houseNumberOrName": "string",
      "billingAddress.postalCode": "string",
      "billingAddress.stateOrProvince": "string",
      "billingAddress.street": "string",
      "binRangeId": "string",
      "bookingDate": "string",
      "browserCode": "string",
      "captureDelayHours": "string",
      "captureMerchantReference": "string",
      "capturePspReference": "string",
      "cardBin": "string",
      "cardFunction": "string",
      "cardIssuerCountryId": "string",
      "cardIssuingBank": "string",
      "cardIssuingCountry": "string",
      "cardIssuingCurrency": "string",
      "cardPaymentMethod": "string",
      "cardProductId": "string",
      "cardSchemeEnhancedDataLevel": "string",
      "cardSummary": "string",
      "cavv": "string",
      "cavvAlgorithm": "string",
      "challengeCancel": "string",
      "checkoutSessionId": "string",
      "coBrandedWith": "string",
      "countryCode": "string",
      "currentBalanceCurrency": "string",
      "currentBalanceValue": "string",
      "cvcResult": "string",
      "cvcResultRaw": "string",
      "deliveryAddress.city": "string",
      "deliveryAddress.country": "string",
      "deliveryAddress.houseNumberOrName": "string",
      "deliveryAddress.postalCode": "string",
      "deliveryAddress.stateOrProvince": "string",
      "deliveryAddress.street": "string",
      "deviceType": "string",
      "directdebit_GB.dateOfSignature": "string",
      "directdebit_GB.mandateId": "string",
      "directdebit_GB.sequenceType": "string",
      "directdebit_GB.serviceUserName": "string",
      "directdebit_GB.serviceUserNumber": "string",
      "domesticRefusalReasonRaw": "string",
      "domesticShopperAdvice": "string",
      "dsTransID": "string",
      "eci": "string",
      "expiryDate": "string",
      "extraCostsCurrency": "string",
      "extraCostsValue": "string",
      "extraCostsValueGratuity": "string",
      "extraCostsValueSurcharge": "string",
      "fraudCheck-<check ID>-<name>": "string",
      "fraudManualReview": "string",
      "fraudOffset": "string",
      "fraudResultType": "string",
      "fraudRiskLevel": "veryLow",
      "fundingSource": "string",
      "fundsAvailability": "string",
      "grossCurrency": "string",
      "grossValue": "string",
      "hmacSignature": "string",
      "iDealConsumerAccountNumber": "string",
      "iDealConsumerBIC": "string",
      "iDealConsumerCity": "string",
      "iDealConsumerIBAN": "string",
      "iDealConsumerIban": "string",
      "iDealConsumerName": "string",
      "iDealTransactionId": "string",
      "iban": "string",
      "inferredRefusalReason": "string",
      "installments.value": "string",
      "interactionCounter": "string",
      "isCardCommercial": "string",
      "issuerBin": "string",
      "issuerComments.cardholderName": "string",
      "issuerConcentratorName": "string",
      "issuerCountry": "string",
      "latestCard.bin": "string",
      "latestCard.expiryDate": "string",
      "latestCard.summary": "string",
      "liabilityShift": "string",
      "mcBankNetReferenceNumber": "string",
      "mcFinancialNetworkCode": "string",
      "merchantAdviceCode": "string",
      "merchantIntegration.type": "string",
      "merchantIntegration.version": "string",
      "merchantOrderReference": "string",
      "merchantReference": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "modifiedShopperReference": "string",
      "networkProcessingMode": "string",
      "networkToken.available": "string",
      "networkToken.bin": "string",
      "networkToken.tokenSummary": "string",
      "networkTxDate": "string",
      "networkTxReference": "string",
      "nfc.expire": "string",
      "nfc.issue": "string",
      "nfc.pin.provided": "string",
      "nfc.uid": "string",
      "oneyRawResponse": "string",
      "opi.transToken": "string",
      "ownerCity": "string",
      "ownerName": "string",
      "payULatamTrazabilityCode": "string",
      "paymentLinkId": "string",
      "paymentMethod": "string",
      "paymentMethodVariant": "string",
      "payoutEligible": "string",
      "paypalAddressStatus": "string",
      "paypalBillingName": "string",
      "paypalEmail": "string",
      "paypalErrorCode": "string",
      "paypalErrorDescription": "string",
      "paypalPairingId": "string",
      "paypalPayerId": "string",
      "paypalPayerResidenceCountry": "string",
      "paypalPayerStatus": "string",
      "paypalPhone": "string",
      "paypalProtectionEligibility": "string",
      "paypalRisk": "string",
      "platform": "string",
      "realtimeAccountUpdaterStatus": "string",
      "receipt.retrievalReferenceNumber": "string",
      "receipt.systemTraceAuditNumber": "string",
      "recurring.contractTypes": "string",
      "recurring.firstPspReference": "string",
      "recurring.recurringDetailReference": "string",
      "recurring.shopperReference": "string",
      "recurringProcessingModel": "string",
      "redirectUrl": "string",
      "referred": "string",
      "refusalReasonRaw": "string",
      "retry.rescueScheduled": "string",
      "returnUrl": "string",
      "riskExperimentReference": "string",
      "riskProfile": "string",
      "riskProfileReference": "string",
      "riskdata.<name>": "string",
      "scaExemptionRequested": "string",
      "sepadirectdebit.dateOfSignature": "string",
      "sepadirectdebit.mandateId": "string",
      "sepadirectdebit.sequenceType": "string",
      "shopperCountry": "string",
      "shopperEmail": "string",
      "shopperIP": "string",
      "shopperInteraction": "string",
      "shopperLocale": "string",
      "shopperName": "string",
      "shopperReference": "string",
      "shopperSocialSecurityNumber": "string",
      "shopperStatement": "string",
      "shopperTelephone": "string",
      "store": "string",
      "swish.payerAlias": "string",
      "tenderReference": "string",
      "terminalId": "string",
      "threeDAuthenticated": "string",
      "threeDAuthenticatedResponse": "string",
      "threeDOffered": "string",
      "threeDOfferedResponse": "string",
      "threeDSVersion": "string",
      "tokenTxVariant": "string",
      "tokenization.shopperReference": "string",
      "tokenization.store.operationType": "created",
      "tokenization.storedPaymentMethodId": "string",
      "totalFraudScore": "string",
      "transactionId": "string",
      "transactionLinkId": "string",
      "txScreening.appliedRule": "string",
      "txScreening.checkSum": "string",
      "txScreening.resolution": "string",
      "untokenisedCardSummary": "string",
      "visaTransactionId": "string",
      "xid": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "AUTHORISATION",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "operations": [
      "CAPTURE"
    ],
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "874574:1935:11/2012",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[AuthorisationNotificationRequestItem](#schemaauthorisationnotificationrequestitem)|false|none|none|

<h2 id="tocS_AutoRescueAdditionalData">AutoRescueAdditionalData</h2>
<!-- backwards compatibility -->
<a id="schemaautorescueadditionaldata"></a>
<a id="schema_AutoRescueAdditionalData"></a>
<a id="tocSautorescueadditionaldata"></a>
<a id="tocsautorescueadditionaldata"></a>

```json
{
  "bookingDate": "string",
  "hmacSignature": "string",
  "merchantOrderReference": "string",
  "paymentMethodVariant": "string",
  "retry.rescueReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookingDate|string|false|none|none|
|hmacSignature|string|false|none|none|
|merchantOrderReference|string|false|none|none|
|paymentMethodVariant|string|false|none|none|
|retry.rescueReference|string|false|none|none|

<h2 id="tocS_AutoRescueNotificationRequest">AutoRescueNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaautorescuenotificationrequest"></a>
<a id="schema_AutoRescueNotificationRequest"></a>
<a id="tocSautorescuenotificationrequest"></a>
<a id="tocsautorescuenotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "bookingDate": "string",
          "hmacSignature": "string",
          "merchantOrderReference": "string",
          "paymentMethodVariant": "string",
          "retry.rescueReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[AutoRescueNotificationRequestItemWrapper](#schemaautorescuenotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_AutoRescueNotificationRequestItem">AutoRescueNotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemaautorescuenotificationrequestitem"></a>
<a id="schema_AutoRescueNotificationRequestItem"></a>
<a id="tocSautorescuenotificationrequestitem"></a>
<a id="tocsautorescuenotificationrequestitem"></a>

```json
{
  "additionalData": {
    "bookingDate": "string",
    "hmacSignature": "string",
    "merchantOrderReference": "string",
    "paymentMethodVariant": "string",
    "retry.rescueReference": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[AutoRescueAdditionalData](#schemaautorescueadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_AutoRescueNotificationRequestItem-recursive">AutoRescueNotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemaautorescuenotificationrequestitem-recursive"></a>
<a id="schema_AutoRescueNotificationRequestItem-recursive"></a>
<a id="tocSautorescuenotificationrequestitem-recursive"></a>
<a id="tocsautorescuenotificationrequestitem-recursive"></a>

```json
{
  "additionalData": {
    "bookingDate": "string",
    "hmacSignature": "string",
    "merchantOrderReference": "string",
    "paymentMethodVariant": "string",
    "retry.rescueReference": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[AutoRescueAdditionalData](#schemaautorescueadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_AutoRescueNotificationRequestItemWrapper">AutoRescueNotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemaautorescuenotificationrequestitemwrapper"></a>
<a id="schema_AutoRescueNotificationRequestItemWrapper"></a>
<a id="tocSautorescuenotificationrequestitemwrapper"></a>
<a id="tocsautorescuenotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "bookingDate": "string",
      "hmacSignature": "string",
      "merchantOrderReference": "string",
      "paymentMethodVariant": "string",
      "retry.rescueReference": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "AUTHENTICATION",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "originalReference": "string",
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "string",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[AutoRescueNotificationRequestItem](#schemaautorescuenotificationrequestitem)|false|none|none|

<h2 id="tocS_BaseModificationAdditionalData">BaseModificationAdditionalData</h2>
<!-- backwards compatibility -->
<a id="schemabasemodificationadditionaldata"></a>
<a id="schema_BaseModificationAdditionalData"></a>
<a id="tocSbasemodificationadditionaldata"></a>
<a id="tocsbasemodificationadditionaldata"></a>

```json
{
  "bookingDate": "string",
  "hmacSignature": "string",
  "paymentMethodVariant": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookingDate|string|false|none|none|
|hmacSignature|string|false|none|none|
|paymentMethodVariant|string|false|none|none|

<h2 id="tocS_CancelOrRefundAdditionalData">CancelOrRefundAdditionalData</h2>
<!-- backwards compatibility -->
<a id="schemacancelorrefundadditionaldata"></a>
<a id="schema_CancelOrRefundAdditionalData"></a>
<a id="tocScancelorrefundadditionaldata"></a>
<a id="tocscancelorrefundadditionaldata"></a>

```json
{
  "acquirerErrorCode": "string",
  "acquirerErrorDescription": "string",
  "acquirerReference": "string",
  "acsRenderingType.acsInterface": "string",
  "acsRenderingType.acsUiTemplate": "string",
  "arn": "string",
  "authCode": "string",
  "authenticationType": "string",
  "bookingDate": "string",
  "checkoutSessionId": "string",
  "coBrandedWith": "string",
  "hmacSignature": "string",
  "interactionCounter": "string",
  "merchantOrderReference": "string",
  "modification.action": "string",
  "originalMerchantReference": "string",
  "paymentLinkId": "string",
  "paymentMethodVariant": "string",
  "shopperCountry": "string",
  "store": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquirerErrorCode|string|false|none|none|
|acquirerErrorDescription|string|false|none|none|
|acquirerReference|string|false|none|none|
|acsRenderingType.acsInterface|string|false|none|none|
|acsRenderingType.acsUiTemplate|string|false|none|none|
|arn|string|false|none|none|
|authCode|string|false|none|none|
|authenticationType|string|false|none|none|
|bookingDate|string|false|none|none|
|checkoutSessionId|string|false|none|none|
|coBrandedWith|string|false|none|none|
|hmacSignature|string|false|none|none|
|interactionCounter|string|false|none|none|
|merchantOrderReference|string|false|none|none|
|modification.action|string|false|none|none|
|originalMerchantReference|string|false|none|none|
|paymentLinkId|string|false|none|none|
|paymentMethodVariant|string|false|none|none|
|shopperCountry|string|false|none|none|
|store|string|false|none|none|

<h2 id="tocS_CancelOrRefundNotificationRequest">CancelOrRefundNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelorrefundnotificationrequest"></a>
<a id="schema_CancelOrRefundNotificationRequest"></a>
<a id="tocScancelorrefundnotificationrequest"></a>
<a id="tocscancelorrefundnotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "acquirerErrorCode": "string",
          "acquirerErrorDescription": "string",
          "acquirerReference": "string",
          "acsRenderingType.acsInterface": "string",
          "acsRenderingType.acsUiTemplate": "string",
          "arn": "string",
          "authCode": "string",
          "authenticationType": "string",
          "bookingDate": "string",
          "checkoutSessionId": "string",
          "coBrandedWith": "string",
          "hmacSignature": "string",
          "interactionCounter": "string",
          "merchantOrderReference": "string",
          "modification.action": "string",
          "originalMerchantReference": "string",
          "paymentLinkId": "string",
          "paymentMethodVariant": "string",
          "shopperCountry": "string",
          "store": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[CancelOrRefundNotificationRequestItemWrapper](#schemacancelorrefundnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_CancelOrRefundNotificationRequestItem">CancelOrRefundNotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemacancelorrefundnotificationrequestitem"></a>
<a id="schema_CancelOrRefundNotificationRequestItem"></a>
<a id="tocScancelorrefundnotificationrequestitem"></a>
<a id="tocscancelorrefundnotificationrequestitem"></a>

```json
{
  "additionalData": {
    "acquirerErrorCode": "string",
    "acquirerErrorDescription": "string",
    "acquirerReference": "string",
    "acsRenderingType.acsInterface": "string",
    "acsRenderingType.acsUiTemplate": "string",
    "arn": "string",
    "authCode": "string",
    "authenticationType": "string",
    "bookingDate": "string",
    "checkoutSessionId": "string",
    "coBrandedWith": "string",
    "hmacSignature": "string",
    "interactionCounter": "string",
    "merchantOrderReference": "string",
    "modification.action": "string",
    "originalMerchantReference": "string",
    "paymentLinkId": "string",
    "paymentMethodVariant": "string",
    "shopperCountry": "string",
    "store": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[CancelOrRefundAdditionalData](#schemacancelorrefundadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_CancelOrRefundNotificationRequestItem-recursive">CancelOrRefundNotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemacancelorrefundnotificationrequestitem-recursive"></a>
<a id="schema_CancelOrRefundNotificationRequestItem-recursive"></a>
<a id="tocScancelorrefundnotificationrequestitem-recursive"></a>
<a id="tocscancelorrefundnotificationrequestitem-recursive"></a>

```json
{
  "additionalData": {
    "acquirerErrorCode": "string",
    "acquirerErrorDescription": "string",
    "acquirerReference": "string",
    "acsRenderingType.acsInterface": "string",
    "acsRenderingType.acsUiTemplate": "string",
    "arn": "string",
    "authCode": "string",
    "authenticationType": "string",
    "bookingDate": "string",
    "checkoutSessionId": "string",
    "coBrandedWith": "string",
    "hmacSignature": "string",
    "interactionCounter": "string",
    "merchantOrderReference": "string",
    "modification.action": "string",
    "originalMerchantReference": "string",
    "paymentLinkId": "string",
    "paymentMethodVariant": "string",
    "shopperCountry": "string",
    "store": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[CancelOrRefundAdditionalData](#schemacancelorrefundadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_CancelOrRefundNotificationRequestItemWrapper">CancelOrRefundNotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemacancelorrefundnotificationrequestitemwrapper"></a>
<a id="schema_CancelOrRefundNotificationRequestItemWrapper"></a>
<a id="tocScancelorrefundnotificationrequestitemwrapper"></a>
<a id="tocscancelorrefundnotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "acquirerErrorCode": "string",
      "acquirerErrorDescription": "string",
      "acquirerReference": "string",
      "acsRenderingType.acsInterface": "string",
      "acsRenderingType.acsUiTemplate": "string",
      "arn": "string",
      "authCode": "string",
      "authenticationType": "string",
      "bookingDate": "string",
      "checkoutSessionId": "string",
      "coBrandedWith": "string",
      "hmacSignature": "string",
      "interactionCounter": "string",
      "merchantOrderReference": "string",
      "modification.action": "string",
      "originalMerchantReference": "string",
      "paymentLinkId": "string",
      "paymentMethodVariant": "string",
      "shopperCountry": "string",
      "store": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "AUTHENTICATION",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "originalReference": "string",
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "string",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[CancelOrRefundNotificationRequestItem](#schemacancelorrefundnotificationrequestitem)|false|none|none|

<h2 id="tocS_CancellationAdditionalData">CancellationAdditionalData</h2>
<!-- backwards compatibility -->
<a id="schemacancellationadditionaldata"></a>
<a id="schema_CancellationAdditionalData"></a>
<a id="tocScancellationadditionaldata"></a>
<a id="tocscancellationadditionaldata"></a>

```json
{
  "PaymentAccountReference": "string",
  "accountValidation": "string",
  "acquirerAccountCode": "string",
  "acquirerCode": "string",
  "acquirerReference": "string",
  "acsRenderingType.acsInterface": "string",
  "acsRenderingType.acsUiTemplate": "string",
  "alias": "string",
  "aliasType": "string",
  "arn": "string",
  "authCode": "string",
  "authenticationType": "string",
  "authorisationMid": "string",
  "avsResult": "string",
  "avsResultRaw": "string",
  "bankAccountNumber": "string",
  "bankLocationId": "string",
  "bankName": "string",
  "bic": "string",
  "billingAddress.city": "string",
  "billingAddress.country": "string",
  "billingAddress.houseNumberOrName": "string",
  "billingAddress.postalCode": "string",
  "billingAddress.stateOrProvince": "string",
  "billingAddress.street": "string",
  "bookingDate": "string",
  "cardBin": "string",
  "cardHolderName": "string",
  "cardIssuingBank": "string",
  "cardIssuingCountry": "string",
  "cardIssuingCurrency": "string",
  "cardPaymentMethod": "string",
  "cardSchemeEnhancedDataLevel": "string",
  "cardSummary": "string",
  "cavv": "string",
  "cavvAlgorithm": "string",
  "checkoutSessionId": "string",
  "coBrandedWith": "string",
  "countryCode": "string",
  "cvcResult": "string",
  "cvcResultRaw": "string",
  "deliveryAddress.city": "string",
  "deliveryAddress.country": "string",
  "deliveryAddress.houseNumberOrName": "string",
  "deliveryAddress.stateOrProvince": "string",
  "deliveryAddress.street": "string",
  "eci": "string",
  "expiryDate": "string",
  "fraudCheck-<check ID>-<name>": "string",
  "fraudManualReview": "string",
  "fraudOffset": "string",
  "fraudResultType": "string",
  "fraudRiskLevel": "veryLow",
  "hmacSignature": "string",
  "interactionCounter": "string",
  "merchantOrderReference": "string",
  "paymentLinkId": "string",
  "paymentMethodVariant": "string",
  "riskdata.<name>": "string",
  "shopperCountry": "string",
  "shopperSocialSecurityNumber": "string",
  "store": "string",
  "totalFraudScore": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PaymentAccountReference|string|false|none|none|
|accountValidation|string|false|none|none|
|acquirerAccountCode|string|false|none|none|
|acquirerCode|string|false|none|none|
|acquirerReference|string|false|none|none|
|acsRenderingType.acsInterface|string|false|none|none|
|acsRenderingType.acsUiTemplate|string|false|none|none|
|alias|string|false|none|none|
|aliasType|string|false|none|none|
|arn|string|false|none|none|
|authCode|string|false|none|none|
|authenticationType|string|false|none|none|
|authorisationMid|string|false|none|none|
|avsResult|string|false|none|none|
|avsResultRaw|string|false|none|none|
|bankAccountNumber|string|false|none|none|
|bankLocationId|string|false|none|none|
|bankName|string|false|none|none|
|bic|string|false|none|none|
|billingAddress.city|string|false|none|none|
|billingAddress.country|string|false|none|none|
|billingAddress.houseNumberOrName|string|false|none|none|
|billingAddress.postalCode|string|false|none|none|
|billingAddress.stateOrProvince|string|false|none|none|
|billingAddress.street|string|false|none|none|
|bookingDate|string|false|none|none|
|cardBin|string|false|none|none|
|cardHolderName|string|false|none|none|
|cardIssuingBank|string|false|none|none|
|cardIssuingCountry|string|false|none|none|
|cardIssuingCurrency|string|false|none|none|
|cardPaymentMethod|string|false|none|none|
|cardSchemeEnhancedDataLevel|string|false|none|none|
|cardSummary|string|false|none|none|
|cavv|string|false|none|none|
|cavvAlgorithm|string|false|none|none|
|checkoutSessionId|string|false|none|none|
|coBrandedWith|string|false|none|none|
|countryCode|string|false|none|none|
|cvcResult|string|false|none|none|
|cvcResultRaw|string|false|none|none|
|deliveryAddress.city|string|false|none|none|
|deliveryAddress.country|string|false|none|none|
|deliveryAddress.houseNumberOrName|string|false|none|none|
|deliveryAddress.stateOrProvince|string|false|none|none|
|deliveryAddress.street|string|false|none|none|
|eci|string|false|none|none|
|expiryDate|string|false|none|none|
|fraudCheck-<check ID>-<name>|string|false|none|Information on the fraud check in a dynamic format.|
|fraudManualReview|string|false|none|Indicates if the risk check was done manually.|
|fraudOffset|string|false|none|The fraud offset.|
|fraudResultType|string|false|none|Result type of the fraud check.|
|fraudRiskLevel|string|false|none|The risk level of the transaction as classified by the [machine learning](https://docs.adyen.com/risk-management/configure-your-risk-profile/machine-learning-rules/) fraud risk rule. The risk level indicates the likelihood that a transaction will result in a fraudulent dispute. Possible values:<br>* veryLow<br>* low<br>* medium<br>* high<br>* veryHigh<br><br>|
|hmacSignature|string|false|none|none|
|interactionCounter|string|false|none|none|
|merchantOrderReference|string|false|none|none|
|paymentLinkId|string|false|none|none|
|paymentMethodVariant|string|false|none|none|
|riskdata.<name>|string|false|none|Risk data in a dynamic format.|
|shopperCountry|string|false|none|none|
|shopperSocialSecurityNumber|string|false|none|none|
|store|string|false|none|none|
|totalFraudScore|string|false|none|Total fraud score from risk.|

#### Enumerated Values

|Property|Value|
|---|---|
|fraudRiskLevel|veryLow|
|fraudRiskLevel|low|
|fraudRiskLevel|medium|
|fraudRiskLevel|high|
|fraudRiskLevel|veryHigh|

<h2 id="tocS_CancellationNotificationRequest">CancellationNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancellationnotificationrequest"></a>
<a id="schema_CancellationNotificationRequest"></a>
<a id="tocScancellationnotificationrequest"></a>
<a id="tocscancellationnotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "PaymentAccountReference": "string",
          "accountValidation": "string",
          "acquirerAccountCode": "string",
          "acquirerCode": "string",
          "acquirerReference": "string",
          "acsRenderingType.acsInterface": "string",
          "acsRenderingType.acsUiTemplate": "string",
          "alias": "string",
          "aliasType": "string",
          "arn": "string",
          "authCode": "string",
          "authenticationType": "string",
          "authorisationMid": "string",
          "avsResult": "string",
          "avsResultRaw": "string",
          "bankAccountNumber": "string",
          "bankLocationId": "string",
          "bankName": "string",
          "bic": "string",
          "billingAddress.city": "string",
          "billingAddress.country": "string",
          "billingAddress.houseNumberOrName": "string",
          "billingAddress.postalCode": "string",
          "billingAddress.stateOrProvince": "string",
          "billingAddress.street": "string",
          "bookingDate": "string",
          "cardBin": "string",
          "cardHolderName": "string",
          "cardIssuingBank": "string",
          "cardIssuingCountry": "string",
          "cardIssuingCurrency": "string",
          "cardPaymentMethod": "string",
          "cardSchemeEnhancedDataLevel": "string",
          "cardSummary": "string",
          "cavv": "string",
          "cavvAlgorithm": "string",
          "checkoutSessionId": "string",
          "coBrandedWith": "string",
          "countryCode": "string",
          "cvcResult": "string",
          "cvcResultRaw": "string",
          "deliveryAddress.city": "string",
          "deliveryAddress.country": "string",
          "deliveryAddress.houseNumberOrName": "string",
          "deliveryAddress.stateOrProvince": "string",
          "deliveryAddress.street": "string",
          "eci": "string",
          "expiryDate": "string",
          "fraudCheck-<check ID>-<name>": "string",
          "fraudManualReview": "string",
          "fraudOffset": "string",
          "fraudResultType": "string",
          "fraudRiskLevel": "veryLow",
          "hmacSignature": "string",
          "interactionCounter": "string",
          "merchantOrderReference": "string",
          "paymentLinkId": "string",
          "paymentMethodVariant": "string",
          "riskdata.<name>": "string",
          "shopperCountry": "string",
          "shopperSocialSecurityNumber": "string",
          "store": "string",
          "totalFraudScore": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[CancellationNotificationRequestItemWrapper](#schemacancellationnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_CancellationNotificationRequestItem">CancellationNotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemacancellationnotificationrequestitem"></a>
<a id="schema_CancellationNotificationRequestItem"></a>
<a id="tocScancellationnotificationrequestitem"></a>
<a id="tocscancellationnotificationrequestitem"></a>

```json
{
  "additionalData": {
    "PaymentAccountReference": "string",
    "accountValidation": "string",
    "acquirerAccountCode": "string",
    "acquirerCode": "string",
    "acquirerReference": "string",
    "acsRenderingType.acsInterface": "string",
    "acsRenderingType.acsUiTemplate": "string",
    "alias": "string",
    "aliasType": "string",
    "arn": "string",
    "authCode": "string",
    "authenticationType": "string",
    "authorisationMid": "string",
    "avsResult": "string",
    "avsResultRaw": "string",
    "bankAccountNumber": "string",
    "bankLocationId": "string",
    "bankName": "string",
    "bic": "string",
    "billingAddress.city": "string",
    "billingAddress.country": "string",
    "billingAddress.houseNumberOrName": "string",
    "billingAddress.postalCode": "string",
    "billingAddress.stateOrProvince": "string",
    "billingAddress.street": "string",
    "bookingDate": "string",
    "cardBin": "string",
    "cardHolderName": "string",
    "cardIssuingBank": "string",
    "cardIssuingCountry": "string",
    "cardIssuingCurrency": "string",
    "cardPaymentMethod": "string",
    "cardSchemeEnhancedDataLevel": "string",
    "cardSummary": "string",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "checkoutSessionId": "string",
    "coBrandedWith": "string",
    "countryCode": "string",
    "cvcResult": "string",
    "cvcResultRaw": "string",
    "deliveryAddress.city": "string",
    "deliveryAddress.country": "string",
    "deliveryAddress.houseNumberOrName": "string",
    "deliveryAddress.stateOrProvince": "string",
    "deliveryAddress.street": "string",
    "eci": "string",
    "expiryDate": "string",
    "fraudCheck-<check ID>-<name>": "string",
    "fraudManualReview": "string",
    "fraudOffset": "string",
    "fraudResultType": "string",
    "fraudRiskLevel": "veryLow",
    "hmacSignature": "string",
    "interactionCounter": "string",
    "merchantOrderReference": "string",
    "paymentLinkId": "string",
    "paymentMethodVariant": "string",
    "riskdata.<name>": "string",
    "shopperCountry": "string",
    "shopperSocialSecurityNumber": "string",
    "store": "string",
    "totalFraudScore": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[CancellationAdditionalData](#schemacancellationadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_CancellationNotificationRequestItem-recursive">CancellationNotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemacancellationnotificationrequestitem-recursive"></a>
<a id="schema_CancellationNotificationRequestItem-recursive"></a>
<a id="tocScancellationnotificationrequestitem-recursive"></a>
<a id="tocscancellationnotificationrequestitem-recursive"></a>

```json
{
  "additionalData": {
    "PaymentAccountReference": "string",
    "accountValidation": "string",
    "acquirerAccountCode": "string",
    "acquirerCode": "string",
    "acquirerReference": "string",
    "acsRenderingType.acsInterface": "string",
    "acsRenderingType.acsUiTemplate": "string",
    "alias": "string",
    "aliasType": "string",
    "arn": "string",
    "authCode": "string",
    "authenticationType": "string",
    "authorisationMid": "string",
    "avsResult": "string",
    "avsResultRaw": "string",
    "bankAccountNumber": "string",
    "bankLocationId": "string",
    "bankName": "string",
    "bic": "string",
    "billingAddress.city": "string",
    "billingAddress.country": "string",
    "billingAddress.houseNumberOrName": "string",
    "billingAddress.postalCode": "string",
    "billingAddress.stateOrProvince": "string",
    "billingAddress.street": "string",
    "bookingDate": "string",
    "cardBin": "string",
    "cardHolderName": "string",
    "cardIssuingBank": "string",
    "cardIssuingCountry": "string",
    "cardIssuingCurrency": "string",
    "cardPaymentMethod": "string",
    "cardSchemeEnhancedDataLevel": "string",
    "cardSummary": "string",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "checkoutSessionId": "string",
    "coBrandedWith": "string",
    "countryCode": "string",
    "cvcResult": "string",
    "cvcResultRaw": "string",
    "deliveryAddress.city": "string",
    "deliveryAddress.country": "string",
    "deliveryAddress.houseNumberOrName": "string",
    "deliveryAddress.stateOrProvince": "string",
    "deliveryAddress.street": "string",
    "eci": "string",
    "expiryDate": "string",
    "fraudCheck-<check ID>-<name>": "string",
    "fraudManualReview": "string",
    "fraudOffset": "string",
    "fraudResultType": "string",
    "fraudRiskLevel": "veryLow",
    "hmacSignature": "string",
    "interactionCounter": "string",
    "merchantOrderReference": "string",
    "paymentLinkId": "string",
    "paymentMethodVariant": "string",
    "riskdata.<name>": "string",
    "shopperCountry": "string",
    "shopperSocialSecurityNumber": "string",
    "store": "string",
    "totalFraudScore": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[CancellationAdditionalData](#schemacancellationadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_CancellationNotificationRequestItemWrapper">CancellationNotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemacancellationnotificationrequestitemwrapper"></a>
<a id="schema_CancellationNotificationRequestItemWrapper"></a>
<a id="tocScancellationnotificationrequestitemwrapper"></a>
<a id="tocscancellationnotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "PaymentAccountReference": "string",
      "accountValidation": "string",
      "acquirerAccountCode": "string",
      "acquirerCode": "string",
      "acquirerReference": "string",
      "acsRenderingType.acsInterface": "string",
      "acsRenderingType.acsUiTemplate": "string",
      "alias": "string",
      "aliasType": "string",
      "arn": "string",
      "authCode": "string",
      "authenticationType": "string",
      "authorisationMid": "string",
      "avsResult": "string",
      "avsResultRaw": "string",
      "bankAccountNumber": "string",
      "bankLocationId": "string",
      "bankName": "string",
      "bic": "string",
      "billingAddress.city": "string",
      "billingAddress.country": "string",
      "billingAddress.houseNumberOrName": "string",
      "billingAddress.postalCode": "string",
      "billingAddress.stateOrProvince": "string",
      "billingAddress.street": "string",
      "bookingDate": "string",
      "cardBin": "string",
      "cardHolderName": "string",
      "cardIssuingBank": "string",
      "cardIssuingCountry": "string",
      "cardIssuingCurrency": "string",
      "cardPaymentMethod": "string",
      "cardSchemeEnhancedDataLevel": "string",
      "cardSummary": "string",
      "cavv": "string",
      "cavvAlgorithm": "string",
      "checkoutSessionId": "string",
      "coBrandedWith": "string",
      "countryCode": "string",
      "cvcResult": "string",
      "cvcResultRaw": "string",
      "deliveryAddress.city": "string",
      "deliveryAddress.country": "string",
      "deliveryAddress.houseNumberOrName": "string",
      "deliveryAddress.stateOrProvince": "string",
      "deliveryAddress.street": "string",
      "eci": "string",
      "expiryDate": "string",
      "fraudCheck-<check ID>-<name>": "string",
      "fraudManualReview": "string",
      "fraudOffset": "string",
      "fraudResultType": "string",
      "fraudRiskLevel": "veryLow",
      "hmacSignature": "string",
      "interactionCounter": "string",
      "merchantOrderReference": "string",
      "paymentLinkId": "string",
      "paymentMethodVariant": "string",
      "riskdata.<name>": "string",
      "shopperCountry": "string",
      "shopperSocialSecurityNumber": "string",
      "store": "string",
      "totalFraudScore": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "AUTHENTICATION",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "originalReference": "string",
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "string",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[CancellationNotificationRequestItem](#schemacancellationnotificationrequestitem)|false|none|none|

<h2 id="tocS_CaptureAdditionalData">CaptureAdditionalData</h2>
<!-- backwards compatibility -->
<a id="schemacaptureadditionaldata"></a>
<a id="schema_CaptureAdditionalData"></a>
<a id="tocScaptureadditionaldata"></a>
<a id="tocscaptureadditionaldata"></a>

```json
{
  "acquirerReference": "string",
  "acsRenderingType.acsInterface": "string",
  "acsRenderingType.acsUiTemplate": "string",
  "arn": "string",
  "authenticationType": "string",
  "bookingDate": "string",
  "checkoutSessionId": "string",
  "coBrandedWith": "string",
  "hmacSignature": "string",
  "interactionCounter": "string",
  "merchantOrderReference": "string",
  "paymentLinkId": "string",
  "paymentMethodVariant": "string",
  "riskdata.<name>": "string",
  "shopperCountry": "string",
  "store": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquirerReference|string|false|none|none|
|acsRenderingType.acsInterface|string|false|none|none|
|acsRenderingType.acsUiTemplate|string|false|none|none|
|arn|string|false|none|none|
|authenticationType|string|false|none|none|
|bookingDate|string|false|none|none|
|checkoutSessionId|string|false|none|none|
|coBrandedWith|string|false|none|none|
|hmacSignature|string|false|none|none|
|interactionCounter|string|false|none|none|
|merchantOrderReference|string|false|none|none|
|paymentLinkId|string|false|none|none|
|paymentMethodVariant|string|false|none|none|
|riskdata.<name>|string|false|none|Risk data in a dynamic format.|
|shopperCountry|string|false|none|none|
|store|string|false|none|none|

<h2 id="tocS_CaptureNotificationRequest">CaptureNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacapturenotificationrequest"></a>
<a id="schema_CaptureNotificationRequest"></a>
<a id="tocScapturenotificationrequest"></a>
<a id="tocscapturenotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "acquirerReference": "string",
          "acsRenderingType.acsInterface": "string",
          "acsRenderingType.acsUiTemplate": "string",
          "arn": "string",
          "authenticationType": "string",
          "bookingDate": "string",
          "checkoutSessionId": "string",
          "coBrandedWith": "string",
          "hmacSignature": "string",
          "interactionCounter": "string",
          "merchantOrderReference": "string",
          "paymentLinkId": "string",
          "paymentMethodVariant": "string",
          "riskdata.<name>": "string",
          "shopperCountry": "string",
          "store": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[CaptureNotificationRequestItemWrapper](#schemacapturenotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_CaptureNotificationRequestItem">CaptureNotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemacapturenotificationrequestitem"></a>
<a id="schema_CaptureNotificationRequestItem"></a>
<a id="tocScapturenotificationrequestitem"></a>
<a id="tocscapturenotificationrequestitem"></a>

```json
{
  "additionalData": {
    "acquirerReference": "string",
    "acsRenderingType.acsInterface": "string",
    "acsRenderingType.acsUiTemplate": "string",
    "arn": "string",
    "authenticationType": "string",
    "bookingDate": "string",
    "checkoutSessionId": "string",
    "coBrandedWith": "string",
    "hmacSignature": "string",
    "interactionCounter": "string",
    "merchantOrderReference": "string",
    "paymentLinkId": "string",
    "paymentMethodVariant": "string",
    "riskdata.<name>": "string",
    "shopperCountry": "string",
    "store": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[CaptureAdditionalData](#schemacaptureadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_CaptureNotificationRequestItem-recursive">CaptureNotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemacapturenotificationrequestitem-recursive"></a>
<a id="schema_CaptureNotificationRequestItem-recursive"></a>
<a id="tocScapturenotificationrequestitem-recursive"></a>
<a id="tocscapturenotificationrequestitem-recursive"></a>

```json
{
  "additionalData": {
    "acquirerReference": "string",
    "acsRenderingType.acsInterface": "string",
    "acsRenderingType.acsUiTemplate": "string",
    "arn": "string",
    "authenticationType": "string",
    "bookingDate": "string",
    "checkoutSessionId": "string",
    "coBrandedWith": "string",
    "hmacSignature": "string",
    "interactionCounter": "string",
    "merchantOrderReference": "string",
    "paymentLinkId": "string",
    "paymentMethodVariant": "string",
    "riskdata.<name>": "string",
    "shopperCountry": "string",
    "store": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[CaptureAdditionalData](#schemacaptureadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_CaptureNotificationRequestItemWrapper">CaptureNotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemacapturenotificationrequestitemwrapper"></a>
<a id="schema_CaptureNotificationRequestItemWrapper"></a>
<a id="tocScapturenotificationrequestitemwrapper"></a>
<a id="tocscapturenotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "acquirerReference": "string",
      "acsRenderingType.acsInterface": "string",
      "acsRenderingType.acsUiTemplate": "string",
      "arn": "string",
      "authenticationType": "string",
      "bookingDate": "string",
      "checkoutSessionId": "string",
      "coBrandedWith": "string",
      "hmacSignature": "string",
      "interactionCounter": "string",
      "merchantOrderReference": "string",
      "paymentLinkId": "string",
      "paymentMethodVariant": "string",
      "riskdata.<name>": "string",
      "shopperCountry": "string",
      "store": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "AUTHENTICATION",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "originalReference": "string",
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "string",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[CaptureNotificationRequestItem](#schemacapturenotificationrequestitem)|false|none|none|

<h2 id="tocS_ChargebackNotificationRequest">ChargebackNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemachargebacknotificationrequest"></a>
<a id="schema_ChargebackNotificationRequest"></a>
<a id="tocSchargebacknotificationrequest"></a>
<a id="tocschargebacknotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_ChargebackReversedNotificationRequest">ChargebackReversedNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemachargebackreversednotificationrequest"></a>
<a id="schema_ChargebackReversedNotificationRequest"></a>
<a id="tocSchargebackreversednotificationrequest"></a>
<a id="tocschargebackreversednotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_DirectDebitNoticeOfChangeNotificationRequest">DirectDebitNoticeOfChangeNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadirectdebitnoticeofchangenotificationrequest"></a>
<a id="schema_DirectDebitNoticeOfChangeNotificationRequest"></a>
<a id="tocSdirectdebitnoticeofchangenotificationrequest"></a>
<a id="tocsdirectdebitnoticeofchangenotificationrequest"></a>

```json
{
  "createdAt": "2025-07-08T10:00:00Z",
  "data": {
    "notificationOfChange": {
      "newBankAccountNumber": "123456789",
      "newBankAccountType": "Checking",
      "newBankLocationId": "004001234",
      "newBranchCode": "987654321",
      "reasonCode": "C01"
    },
    "pspReference": "string",
    "shopperReference": "string"
  },
  "environment": "live",
  "type": "ach.notificationOfChange",
  "version": "1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The timestamp indicating when the webhook was created.|
|data|[DirectDebitNotificationOfChangeNotificationRequestData](#schemadirectdebitnotificationofchangenotificationrequestdata)|false|none|Contains the details of the bank account update.|
|environment|string|false|none|The environment from which the webhook originated.|
|type|string|true|none|The type of notification.|
|version|string|false|none|The version of this webhook type.|

#### Enumerated Values

|Property|Value|
|---|---|
|environment|live|
|environment|test|
|environment|beta|
|type|ach.notificationOfChange|
|type|eft.notificationOfChange|

<h2 id="tocS_DirectDebitNoticeOfChangeNotificationRequestDataNoc">DirectDebitNoticeOfChangeNotificationRequestDataNoc</h2>
<!-- backwards compatibility -->
<a id="schemadirectdebitnoticeofchangenotificationrequestdatanoc"></a>
<a id="schema_DirectDebitNoticeOfChangeNotificationRequestDataNoc"></a>
<a id="tocSdirectdebitnoticeofchangenotificationrequestdatanoc"></a>
<a id="tocsdirectdebitnoticeofchangenotificationrequestdatanoc"></a>

```json
{
  "newBankAccountNumber": "123456789",
  "newBankAccountType": "Checking",
  "newBankLocationId": "004001234",
  "newBranchCode": "987654321",
  "reasonCode": "C01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newBankAccountNumber|string|false|none|The corrected bank account number provided by the receiving bank.|
|newBankAccountType|string|false|none|The corrected bank account type provided by the receiving bank. This field is specific to ACH Direct Debit transactions.<br><br>Possible values:<br>*  **Savings**<br>*  **Checking**<br><br>|
|newBankLocationId|string|false|none|The corrected bank location ID provided by the receiving bank. This field is specific to EFT PAD transactions.|
|newBranchCode|string|false|none|The corrected bank routing number provided by the receiving bank. This field is specific to ACH Direct Debit transactions.|
|reasonCode|string|false|none|A standard code from the ACH network that specifies the reason for a Notice of Change (e.g., an incorrect account number). This field is specific to ACH Direct Debit transactions.<br><br>Possible values:<br>*  **C01** : Incorrect bank account number.<br>*  **C02** : Incorrect transit/routing number.<br>*  **C03** : Incorrect transit/routing number and bank account number.<br>*  **C04** : Bank account name change.<br>*  **C05** : Incorrect payment code.<br>*  **C06** : Incorrect bank account number and transit code.<br>*  **C07** : Incorrect transit/routing number, bank account number and payment code.<br>*  **C09** : Incorrect individual ID number.<br>*  **C10** : Incorrect company name.<br>*  **C11** : Incorrect company identification.<br>*  **C12** : Incorrect company name and company ID.<br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|newBankAccountType|Checking|
|newBankAccountType|Savings|
|reasonCode|C01|
|reasonCode|C02|
|reasonCode|C03|
|reasonCode|C04|
|reasonCode|C05|
|reasonCode|C06|
|reasonCode|C07|
|reasonCode|C09|
|reasonCode|C10|
|reasonCode|C11|
|reasonCode|C12|

<h2 id="tocS_DirectDebitNotificationOfChangeNotificationRequestData">DirectDebitNotificationOfChangeNotificationRequestData</h2>
<!-- backwards compatibility -->
<a id="schemadirectdebitnotificationofchangenotificationrequestdata"></a>
<a id="schema_DirectDebitNotificationOfChangeNotificationRequestData"></a>
<a id="tocSdirectdebitnotificationofchangenotificationrequestdata"></a>
<a id="tocsdirectdebitnotificationofchangenotificationrequestdata"></a>

```json
{
  "notificationOfChange": {
    "newBankAccountNumber": "123456789",
    "newBankAccountType": "Checking",
    "newBankLocationId": "004001234",
    "newBranchCode": "987654321",
    "reasonCode": "C01"
  },
  "pspReference": "string",
  "shopperReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationOfChange|[DirectDebitNoticeOfChangeNotificationRequestDataNoc](#schemadirectdebitnoticeofchangenotificationrequestdatanoc)|true|none|The Notification of Change information.|
|pspReference|string|true|none|PSP Reference.|
|shopperReference|string|true|none|Shopper reference.|

<h2 id="tocS_DisputeDefensePeriodEndedNotificationRequest">DisputeDefensePeriodEndedNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisputedefenseperiodendednotificationrequest"></a>
<a id="schema_DisputeDefensePeriodEndedNotificationRequest"></a>
<a id="tocSdisputedefenseperiodendednotificationrequest"></a>
<a id="tocsdisputedefenseperiodendednotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_DisputesNotificationAdditionalData">DisputesNotificationAdditionalData</h2>
<!-- backwards compatibility -->
<a id="schemadisputesnotificationadditionaldata"></a>
<a id="schema_DisputesNotificationAdditionalData"></a>
<a id="tocSdisputesnotificationadditionaldata"></a>
<a id="tocsdisputesnotificationadditionaldata"></a>

```json
{
  "InvoiceCreditorAccount": "string",
  "arn": "string",
  "autoDefended": "string",
  "captureMerchantReference": "string",
  "capturePspReference": "string",
  "chargebackReasonCode": "string",
  "chargebackSchemeCode": "string",
  "defendable": "string",
  "defensePeriodEndsAt": "string",
  "disputeStatus": "Unresponded",
  "grossCurrency": "string",
  "grossValue": "string",
  "hmacSignature": "string",
  "modificationMerchantReferences": "string",
  "nofReasonCode": "string",
  "nofSchemeCode": "string",
  "paymentMethodVariant": "string",
  "rfiReasonCode": "string",
  "rfiSchemeCode": "string",
  "shopperReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InvoiceCreditorAccount|string|false|none|none|
|arn|string|false|none|Acquirer Reference Number of the dispute.|
|autoDefended|string|false|none|Indicates if the dispute was automatically defended.|
|captureMerchantReference|string|false|none|The merchant reference of the capture.|
|capturePspReference|string|false|none|The PSP reference of the capture.|
|chargebackReasonCode|string|false|none|The [reason code](https://docs.adyen.com/risk-management/understanding-disputes/dispute-reason-codes/?tab=chargeback_0_1) for the chargeback.|
|chargebackSchemeCode|string|false|none|The card scheme for the chargeback.|
|defendable|string|false|none|Indicates if you can defend the dispute.|
|defensePeriodEndsAt|string|false|none|When the defense period ends. Format: [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format with time zone offset: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.|
|disputeStatus|string|false|none|More information about the [stage the dispute is in](https://docs.adyen.com/risk-management/disputes-api/dispute-notifications/). This parameter is not returned for disputed payments processed in Brazil.|
|grossCurrency|string|false|none|Chargeback gross currency.|
|grossValue|string|false|none|Chargeback gross value.|
|hmacSignature|string|false|none|none|
|modificationMerchantReferences|string|false|none|none|
|nofReasonCode|string|false|none|The [reason code](https://docs.adyen.com/risk-management/understanding-disputes/dispute-reason-codes/?tab=notification_of_fraud_2_3) for the Notification of Fraud (NOF).|
|nofSchemeCode|string|false|none|The card scheme for the Notification of Fraud (NOF).|
|paymentMethodVariant|string|false|none|The Adyen [sub-variant of the payment method](https://docs.adyen.com/development-resources/paymentmethodvariant) used for the payment request.|
|rfiReasonCode|string|false|none|The [reason code](https://docs.adyen.com/risk-management/understanding-disputes/dispute-reason-codes/?tab=request_for_information_1_2) for the Request for Information (RFI).|
|rfiSchemeCode|string|false|none|The card scheme for the Request for Information (RFI).|
|shopperReference|string|false|none|The ID that uniquely identifies the shopper. This is the same as the `shopperReference` used in the initial payment.|

#### Enumerated Values

|Property|Value|
|---|---|
|disputeStatus|Unresponded|
|disputeStatus|Responded|
|disputeStatus|Expired|
|disputeStatus|Undefended|
|disputeStatus|Accepted|
|disputeStatus|Pending|
|disputeStatus|Lost|
|disputeStatus|Won|

<h2 id="tocS_DisputesNotificationRequestItem">DisputesNotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemadisputesnotificationrequestitem"></a>
<a id="schema_DisputesNotificationRequestItem"></a>
<a id="tocSdisputesnotificationrequestitem"></a>
<a id="tocsdisputesnotificationrequestitem"></a>

```json
{
  "additionalData": {
    "InvoiceCreditorAccount": "string",
    "arn": "string",
    "autoDefended": "string",
    "captureMerchantReference": "string",
    "capturePspReference": "string",
    "chargebackReasonCode": "string",
    "chargebackSchemeCode": "string",
    "defendable": "string",
    "defensePeriodEndsAt": "string",
    "disputeStatus": "Unresponded",
    "grossCurrency": "string",
    "grossValue": "string",
    "hmacSignature": "string",
    "modificationMerchantReferences": "string",
    "nofReasonCode": "string",
    "nofSchemeCode": "string",
    "paymentMethodVariant": "string",
    "rfiReasonCode": "string",
    "rfiSchemeCode": "string",
    "shopperReference": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[DisputesNotificationAdditionalData](#schemadisputesnotificationadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_DisputesNotificationRequestItem-recursive">DisputesNotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemadisputesnotificationrequestitem-recursive"></a>
<a id="schema_DisputesNotificationRequestItem-recursive"></a>
<a id="tocSdisputesnotificationrequestitem-recursive"></a>
<a id="tocsdisputesnotificationrequestitem-recursive"></a>

```json
{
  "additionalData": {
    "InvoiceCreditorAccount": "string",
    "arn": "string",
    "autoDefended": "string",
    "captureMerchantReference": "string",
    "capturePspReference": "string",
    "chargebackReasonCode": "string",
    "chargebackSchemeCode": "string",
    "defendable": "string",
    "defensePeriodEndsAt": "string",
    "disputeStatus": "Unresponded",
    "grossCurrency": "string",
    "grossValue": "string",
    "hmacSignature": "string",
    "modificationMerchantReferences": "string",
    "nofReasonCode": "string",
    "nofSchemeCode": "string",
    "paymentMethodVariant": "string",
    "rfiReasonCode": "string",
    "rfiSchemeCode": "string",
    "shopperReference": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[DisputesNotificationAdditionalData](#schemadisputesnotificationadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_DisputesNotificationRequestItemWrapper">DisputesNotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemadisputesnotificationrequestitemwrapper"></a>
<a id="schema_DisputesNotificationRequestItemWrapper"></a>
<a id="tocSdisputesnotificationrequestitemwrapper"></a>
<a id="tocsdisputesnotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "InvoiceCreditorAccount": "string",
      "arn": "string",
      "autoDefended": "string",
      "captureMerchantReference": "string",
      "capturePspReference": "string",
      "chargebackReasonCode": "string",
      "chargebackSchemeCode": "string",
      "defendable": "string",
      "defensePeriodEndsAt": "string",
      "disputeStatus": "Unresponded",
      "grossCurrency": "string",
      "grossValue": "string",
      "hmacSignature": "string",
      "modificationMerchantReferences": "string",
      "nofReasonCode": "string",
      "nofSchemeCode": "string",
      "paymentMethodVariant": "string",
      "rfiReasonCode": "string",
      "rfiSchemeCode": "string",
      "shopperReference": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "AUTHENTICATION",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "originalReference": "string",
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "string",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[DisputesNotificationRequestItem](#schemadisputesnotificationrequestitem)|false|none|none|

<h2 id="tocS_ExpireNotificationRequest">ExpireNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexpirenotificationrequest"></a>
<a id="schema_ExpireNotificationRequest"></a>
<a id="tocSexpirenotificationrequest"></a>
<a id="tocsexpirenotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "bookingDate": "string",
          "hmacSignature": "string",
          "paymentMethodVariant": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "EXPIRE",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[ExpireNotificationRequestItemWrapper](#schemaexpirenotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_ExpireNotificationRequestItem">ExpireNotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemaexpirenotificationrequestitem"></a>
<a id="schema_ExpireNotificationRequestItem"></a>
<a id="tocSexpirenotificationrequestitem"></a>
<a id="tocsexpirenotificationrequestitem"></a>

```json
{
  "additionalData": {
    "bookingDate": "string",
    "hmacSignature": "string",
    "paymentMethodVariant": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "EXPIRE",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[BaseModificationAdditionalData](#schemabasemodificationadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The amount that was originally authorised.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Always `true`.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|EXPIRE|

<h2 id="tocS_ExpireNotificationRequestItem-recursive">ExpireNotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemaexpirenotificationrequestitem-recursive"></a>
<a id="schema_ExpireNotificationRequestItem-recursive"></a>
<a id="tocSexpirenotificationrequestitem-recursive"></a>
<a id="tocsexpirenotificationrequestitem-recursive"></a>

```json
{
  "additionalData": {
    "bookingDate": "string",
    "hmacSignature": "string",
    "paymentMethodVariant": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "EXPIRE",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[BaseModificationAdditionalData](#schemabasemodificationadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The amount that was originally authorised.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Always `true`.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|EXPIRE|

<h2 id="tocS_ExpireNotificationRequestItemWrapper">ExpireNotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemaexpirenotificationrequestitemwrapper"></a>
<a id="schema_ExpireNotificationRequestItemWrapper"></a>
<a id="tocSexpirenotificationrequestitemwrapper"></a>
<a id="tocsexpirenotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "bookingDate": "string",
      "hmacSignature": "string",
      "paymentMethodVariant": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "EXPIRE",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "originalReference": "string",
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "string",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[ExpireNotificationRequestItem](#schemaexpirenotificationrequestitem)|false|none|none|

<h2 id="tocS_GenericNotificationRequestItem">GenericNotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemagenericnotificationrequestitem"></a>
<a id="schema_GenericNotificationRequestItem"></a>
<a id="tocSgenericnotificationrequestitem"></a>
<a id="tocsgenericnotificationrequestitem"></a>

```json
{
  "additionalData": {
    "eventCode": "AUTHENTICATION",
    "merchantAccountCode": "string",
    "originalReference": "string",
    "reason": "string",
    "amount": {
      "currency": "str",
      "value": 0
    },
    "success": "string",
    "paymentMethod": "visa, mc, iDeal",
    "merchantReference": "string",
    "pspReference": "string",
    "eventDate": "2021-07-17T13:42:40+01:00"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[GenericNotificationRequestItem-recursive](#schemagenericnotificationrequestitem-recursive)|false|none|A generic container for extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_GenericNotificationRequestItem-recursive">GenericNotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemagenericnotificationrequestitem-recursive"></a>
<a id="schema_GenericNotificationRequestItem-recursive"></a>
<a id="tocSgenericnotificationrequestitem-recursive"></a>
<a id="tocsgenericnotificationrequestitem-recursive"></a>

```json
{
  "eventCode": "AUTHENTICATION",
  "merchantAccountCode": "string",
  "originalReference": "string",
  "reason": "string",
  "amount": {
    "currency": "str",
    "value": 0
  },
  "success": "string",
  "paymentMethod": "visa, mc, iDeal",
  "merchantReference": "string",
  "pspReference": "string",
  "eventDate": "2021-07-17T13:42:40+01:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventCode|string|true|none|The type of event the notification item is for.|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_GenericNotificationRequestItemWrapper">GenericNotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemagenericnotificationrequestitemwrapper"></a>
<a id="schema_GenericNotificationRequestItemWrapper"></a>
<a id="tocSgenericnotificationrequestitemwrapper"></a>
<a id="tocsgenericnotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "eventCode": "AUTHENTICATION",
      "merchantAccountCode": "string",
      "originalReference": "string",
      "reason": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "success": "string",
      "paymentMethod": "visa, mc, iDeal",
      "merchantReference": "string",
      "pspReference": "string",
      "eventDate": "2021-07-17T13:42:40+01:00"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "AUTHENTICATION",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "originalReference": "string",
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "string",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[GenericNotificationRequestItem](#schemagenericnotificationrequestitem)|false|none|none|

<h2 id="tocS_InformationSuppliedNotificationRequest">InformationSuppliedNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemainformationsuppliednotificationrequest"></a>
<a id="schema_InformationSuppliedNotificationRequest"></a>
<a id="tocSinformationsuppliednotificationrequest"></a>
<a id="tocsinformationsuppliednotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_IssuerCommentsNotificationAdditionalData">IssuerCommentsNotificationAdditionalData</h2>
<!-- backwards compatibility -->
<a id="schemaissuercommentsnotificationadditionaldata"></a>
<a id="schema_IssuerCommentsNotificationAdditionalData"></a>
<a id="tocSissuercommentsnotificationadditionaldata"></a>
<a id="tocsissuercommentsnotificationadditionaldata"></a>

```json
{
  "InvoiceCreditorAccount": "string",
  "arn": "string",
  "autoDefended": "string",
  "captureMerchantReference": "string",
  "capturePspReference": "string",
  "chargebackReasonCode": "string",
  "chargebackSchemeCode": "string",
  "defendable": "string",
  "defensePeriodEndsAt": "string",
  "disputeStatus": "Unresponded",
  "grossCurrency": "string",
  "grossValue": "string",
  "hmacSignature": "string",
  "issuerComments.attemptedReturnDate": "string",
  "issuerComments.cancellationDate": "string",
  "issuerComments.cancellationMethod": "string",
  "issuerComments.chReceivedOrExpectedMerchandise": "string",
  "issuerComments.creditVoucherOrTransactionReceiptDate": "string",
  "issuerComments.damagedOrDefectiveOrderInfo": "string",
  "issuerComments.dateOfService": "string",
  "issuerComments.descCounterfeitMerchandise": "string",
  "issuerComments.disputeAmountChangeReason": "string",
  "issuerComments.expectedReceiptDateTime": "string",
  "issuerComments.explanation": "string",
  "issuerComments.explanationOfCreditPresented": "string",
  "issuerComments.howChAttemptReturnAndDispOfMerchandise": "string",
  "issuerComments.howMerchandiseOrServiceMisrepresented": "string",
  "issuerComments.howTermsOfContractNotHonoredByMerchant": "string",
  "issuerComments.merchandiseOrServices": "string",
  "issuerComments.merchandiseServiceReceivedDate": "string",
  "issuerComments.merchandiseWasCounterfeitDate": "string",
  "issuerComments.note": "string",
  "issuerComments.orderDetailsNotAsDescribed": "string",
  "issuerComments.purchasedInfo": "string",
  "issuerComments.purchasedInfoAndQualityIssue": "string",
  "issuerComments.returnMethod": "string",
  "issuerComments.returnedMerchandiseReceivedDate": "string",
  "issuerComments.serviceReceivedDate": "string",
  "issuerComments.type": "string",
  "issuerComments.whatWasNotReceived": "string",
  "issuerComments.whatWasOrdered": "string",
  "issuerComments.whatWasPurchased": "string",
  "issuerComments.whereIsMerchandiseLocated": "string",
  "modificationMerchantReferences": "string",
  "nofReasonCode": "string",
  "nofSchemeCode": "string",
  "paymentMethodVariant": "string",
  "rfiReasonCode": "string",
  "rfiSchemeCode": "string",
  "shopperReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InvoiceCreditorAccount|string|false|none|none|
|arn|string|false|none|Acquirer Reference Number of the dispute.|
|autoDefended|string|false|none|Indicates if the dispute was automatically defended.|
|captureMerchantReference|string|false|none|The merchant reference of the capture.|
|capturePspReference|string|false|none|The PSP reference of the capture.|
|chargebackReasonCode|string|false|none|The [reason code](https://docs.adyen.com/risk-management/understanding-disputes/dispute-reason-codes/?tab=chargeback_0_1) for the chargeback.|
|chargebackSchemeCode|string|false|none|The card scheme for the chargeback.|
|defendable|string|false|none|Indicates if you can defend the dispute.|
|defensePeriodEndsAt|string|false|none|When the defense period ends. Format: [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format with time zone offset: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.|
|disputeStatus|string|false|none|More information about the [stage the dispute is in](https://docs.adyen.com/risk-management/disputes-api/dispute-notifications/). This parameter is not returned for disputed payments processed in Brazil.|
|grossCurrency|string|false|none|Chargeback gross currency.|
|grossValue|string|false|none|Chargeback gross value.|
|hmacSignature|string|false|none|none|
|issuerComments.attemptedReturnDate|string|false|none|none|
|issuerComments.cancellationDate|string|false|none|none|
|issuerComments.cancellationMethod|string|false|none|none|
|issuerComments.chReceivedOrExpectedMerchandise|string|false|none|none|
|issuerComments.creditVoucherOrTransactionReceiptDate|string|false|none|none|
|issuerComments.damagedOrDefectiveOrderInfo|string|false|none|none|
|issuerComments.dateOfService|string|false|none|none|
|issuerComments.descCounterfeitMerchandise|string|false|none|none|
|issuerComments.disputeAmountChangeReason|string|false|none|none|
|issuerComments.expectedReceiptDateTime|string|false|none|none|
|issuerComments.explanation|string|false|none|none|
|issuerComments.explanationOfCreditPresented|string|false|none|none|
|issuerComments.howChAttemptReturnAndDispOfMerchandise|string|false|none|none|
|issuerComments.howMerchandiseOrServiceMisrepresented|string|false|none|none|
|issuerComments.howTermsOfContractNotHonoredByMerchant|string|false|none|none|
|issuerComments.merchandiseOrServices|string|false|none|none|
|issuerComments.merchandiseServiceReceivedDate|string|false|none|none|
|issuerComments.merchandiseWasCounterfeitDate|string|false|none|none|
|issuerComments.note|string|false|none|none|
|issuerComments.orderDetailsNotAsDescribed|string|false|none|none|
|issuerComments.purchasedInfo|string|false|none|none|
|issuerComments.purchasedInfoAndQualityIssue|string|false|none|none|
|issuerComments.returnMethod|string|false|none|none|
|issuerComments.returnedMerchandiseReceivedDate|string|false|none|none|
|issuerComments.serviceReceivedDate|string|false|none|none|
|issuerComments.type|string|false|none|none|
|issuerComments.whatWasNotReceived|string|false|none|none|
|issuerComments.whatWasOrdered|string|false|none|none|
|issuerComments.whatWasPurchased|string|false|none|none|
|issuerComments.whereIsMerchandiseLocated|string|false|none|none|
|modificationMerchantReferences|string|false|none|none|
|nofReasonCode|string|false|none|The [reason code](https://docs.adyen.com/risk-management/understanding-disputes/dispute-reason-codes/?tab=notification_of_fraud_2_3) for the Notification of Fraud (NOF).|
|nofSchemeCode|string|false|none|The card scheme for the Notification of Fraud (NOF).|
|paymentMethodVariant|string|false|none|The Adyen [sub-variant of the payment method](https://docs.adyen.com/development-resources/paymentmethodvariant) used for the payment request.|
|rfiReasonCode|string|false|none|The [reason code](https://docs.adyen.com/risk-management/understanding-disputes/dispute-reason-codes/?tab=request_for_information_1_2) for the Request for Information (RFI).|
|rfiSchemeCode|string|false|none|The card scheme for the Request for Information (RFI).|
|shopperReference|string|false|none|The ID that uniquely identifies the shopper. This is the same as the `shopperReference` used in the initial payment.|

#### Enumerated Values

|Property|Value|
|---|---|
|disputeStatus|Unresponded|
|disputeStatus|Responded|
|disputeStatus|Expired|
|disputeStatus|Undefended|
|disputeStatus|Accepted|
|disputeStatus|Pending|
|disputeStatus|Lost|
|disputeStatus|Won|

<h2 id="tocS_IssuerCommentsNotificationRequest">IssuerCommentsNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaissuercommentsnotificationrequest"></a>
<a id="schema_IssuerCommentsNotificationRequest"></a>
<a id="tocSissuercommentsnotificationrequest"></a>
<a id="tocsissuercommentsnotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "issuerComments.attemptedReturnDate": "string",
          "issuerComments.cancellationDate": "string",
          "issuerComments.cancellationMethod": "string",
          "issuerComments.chReceivedOrExpectedMerchandise": "string",
          "issuerComments.creditVoucherOrTransactionReceiptDate": "string",
          "issuerComments.damagedOrDefectiveOrderInfo": "string",
          "issuerComments.dateOfService": "string",
          "issuerComments.descCounterfeitMerchandise": "string",
          "issuerComments.disputeAmountChangeReason": "string",
          "issuerComments.expectedReceiptDateTime": "string",
          "issuerComments.explanation": "string",
          "issuerComments.explanationOfCreditPresented": "string",
          "issuerComments.howChAttemptReturnAndDispOfMerchandise": "string",
          "issuerComments.howMerchandiseOrServiceMisrepresented": "string",
          "issuerComments.howTermsOfContractNotHonoredByMerchant": "string",
          "issuerComments.merchandiseOrServices": "string",
          "issuerComments.merchandiseServiceReceivedDate": "string",
          "issuerComments.merchandiseWasCounterfeitDate": "string",
          "issuerComments.note": "string",
          "issuerComments.orderDetailsNotAsDescribed": "string",
          "issuerComments.purchasedInfo": "string",
          "issuerComments.purchasedInfoAndQualityIssue": "string",
          "issuerComments.returnMethod": "string",
          "issuerComments.returnedMerchandiseReceivedDate": "string",
          "issuerComments.serviceReceivedDate": "string",
          "issuerComments.type": "string",
          "issuerComments.whatWasNotReceived": "string",
          "issuerComments.whatWasOrdered": "string",
          "issuerComments.whatWasPurchased": "string",
          "issuerComments.whereIsMerchandiseLocated": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[IssuerCommentsNotificationRequestItemWrapper](#schemaissuercommentsnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_IssuerCommentsNotificationRequestItem">IssuerCommentsNotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemaissuercommentsnotificationrequestitem"></a>
<a id="schema_IssuerCommentsNotificationRequestItem"></a>
<a id="tocSissuercommentsnotificationrequestitem"></a>
<a id="tocsissuercommentsnotificationrequestitem"></a>

```json
{
  "additionalData": {
    "InvoiceCreditorAccount": "string",
    "arn": "string",
    "autoDefended": "string",
    "captureMerchantReference": "string",
    "capturePspReference": "string",
    "chargebackReasonCode": "string",
    "chargebackSchemeCode": "string",
    "defendable": "string",
    "defensePeriodEndsAt": "string",
    "disputeStatus": "Unresponded",
    "grossCurrency": "string",
    "grossValue": "string",
    "hmacSignature": "string",
    "issuerComments.attemptedReturnDate": "string",
    "issuerComments.cancellationDate": "string",
    "issuerComments.cancellationMethod": "string",
    "issuerComments.chReceivedOrExpectedMerchandise": "string",
    "issuerComments.creditVoucherOrTransactionReceiptDate": "string",
    "issuerComments.damagedOrDefectiveOrderInfo": "string",
    "issuerComments.dateOfService": "string",
    "issuerComments.descCounterfeitMerchandise": "string",
    "issuerComments.disputeAmountChangeReason": "string",
    "issuerComments.expectedReceiptDateTime": "string",
    "issuerComments.explanation": "string",
    "issuerComments.explanationOfCreditPresented": "string",
    "issuerComments.howChAttemptReturnAndDispOfMerchandise": "string",
    "issuerComments.howMerchandiseOrServiceMisrepresented": "string",
    "issuerComments.howTermsOfContractNotHonoredByMerchant": "string",
    "issuerComments.merchandiseOrServices": "string",
    "issuerComments.merchandiseServiceReceivedDate": "string",
    "issuerComments.merchandiseWasCounterfeitDate": "string",
    "issuerComments.note": "string",
    "issuerComments.orderDetailsNotAsDescribed": "string",
    "issuerComments.purchasedInfo": "string",
    "issuerComments.purchasedInfoAndQualityIssue": "string",
    "issuerComments.returnMethod": "string",
    "issuerComments.returnedMerchandiseReceivedDate": "string",
    "issuerComments.serviceReceivedDate": "string",
    "issuerComments.type": "string",
    "issuerComments.whatWasNotReceived": "string",
    "issuerComments.whatWasOrdered": "string",
    "issuerComments.whatWasPurchased": "string",
    "issuerComments.whereIsMerchandiseLocated": "string",
    "modificationMerchantReferences": "string",
    "nofReasonCode": "string",
    "nofSchemeCode": "string",
    "paymentMethodVariant": "string",
    "rfiReasonCode": "string",
    "rfiSchemeCode": "string",
    "shopperReference": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[IssuerCommentsNotificationAdditionalData](#schemaissuercommentsnotificationadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_IssuerCommentsNotificationRequestItem-recursive">IssuerCommentsNotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemaissuercommentsnotificationrequestitem-recursive"></a>
<a id="schema_IssuerCommentsNotificationRequestItem-recursive"></a>
<a id="tocSissuercommentsnotificationrequestitem-recursive"></a>
<a id="tocsissuercommentsnotificationrequestitem-recursive"></a>

```json
{
  "additionalData": {
    "InvoiceCreditorAccount": "string",
    "arn": "string",
    "autoDefended": "string",
    "captureMerchantReference": "string",
    "capturePspReference": "string",
    "chargebackReasonCode": "string",
    "chargebackSchemeCode": "string",
    "defendable": "string",
    "defensePeriodEndsAt": "string",
    "disputeStatus": "Unresponded",
    "grossCurrency": "string",
    "grossValue": "string",
    "hmacSignature": "string",
    "issuerComments.attemptedReturnDate": "string",
    "issuerComments.cancellationDate": "string",
    "issuerComments.cancellationMethod": "string",
    "issuerComments.chReceivedOrExpectedMerchandise": "string",
    "issuerComments.creditVoucherOrTransactionReceiptDate": "string",
    "issuerComments.damagedOrDefectiveOrderInfo": "string",
    "issuerComments.dateOfService": "string",
    "issuerComments.descCounterfeitMerchandise": "string",
    "issuerComments.disputeAmountChangeReason": "string",
    "issuerComments.expectedReceiptDateTime": "string",
    "issuerComments.explanation": "string",
    "issuerComments.explanationOfCreditPresented": "string",
    "issuerComments.howChAttemptReturnAndDispOfMerchandise": "string",
    "issuerComments.howMerchandiseOrServiceMisrepresented": "string",
    "issuerComments.howTermsOfContractNotHonoredByMerchant": "string",
    "issuerComments.merchandiseOrServices": "string",
    "issuerComments.merchandiseServiceReceivedDate": "string",
    "issuerComments.merchandiseWasCounterfeitDate": "string",
    "issuerComments.note": "string",
    "issuerComments.orderDetailsNotAsDescribed": "string",
    "issuerComments.purchasedInfo": "string",
    "issuerComments.purchasedInfoAndQualityIssue": "string",
    "issuerComments.returnMethod": "string",
    "issuerComments.returnedMerchandiseReceivedDate": "string",
    "issuerComments.serviceReceivedDate": "string",
    "issuerComments.type": "string",
    "issuerComments.whatWasNotReceived": "string",
    "issuerComments.whatWasOrdered": "string",
    "issuerComments.whatWasPurchased": "string",
    "issuerComments.whereIsMerchandiseLocated": "string",
    "modificationMerchantReferences": "string",
    "nofReasonCode": "string",
    "nofSchemeCode": "string",
    "paymentMethodVariant": "string",
    "rfiReasonCode": "string",
    "rfiSchemeCode": "string",
    "shopperReference": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[IssuerCommentsNotificationAdditionalData](#schemaissuercommentsnotificationadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_IssuerCommentsNotificationRequestItemWrapper">IssuerCommentsNotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemaissuercommentsnotificationrequestitemwrapper"></a>
<a id="schema_IssuerCommentsNotificationRequestItemWrapper"></a>
<a id="tocSissuercommentsnotificationrequestitemwrapper"></a>
<a id="tocsissuercommentsnotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "InvoiceCreditorAccount": "string",
      "arn": "string",
      "autoDefended": "string",
      "captureMerchantReference": "string",
      "capturePspReference": "string",
      "chargebackReasonCode": "string",
      "chargebackSchemeCode": "string",
      "defendable": "string",
      "defensePeriodEndsAt": "string",
      "disputeStatus": "Unresponded",
      "grossCurrency": "string",
      "grossValue": "string",
      "hmacSignature": "string",
      "issuerComments.attemptedReturnDate": "string",
      "issuerComments.cancellationDate": "string",
      "issuerComments.cancellationMethod": "string",
      "issuerComments.chReceivedOrExpectedMerchandise": "string",
      "issuerComments.creditVoucherOrTransactionReceiptDate": "string",
      "issuerComments.damagedOrDefectiveOrderInfo": "string",
      "issuerComments.dateOfService": "string",
      "issuerComments.descCounterfeitMerchandise": "string",
      "issuerComments.disputeAmountChangeReason": "string",
      "issuerComments.expectedReceiptDateTime": "string",
      "issuerComments.explanation": "string",
      "issuerComments.explanationOfCreditPresented": "string",
      "issuerComments.howChAttemptReturnAndDispOfMerchandise": "string",
      "issuerComments.howMerchandiseOrServiceMisrepresented": "string",
      "issuerComments.howTermsOfContractNotHonoredByMerchant": "string",
      "issuerComments.merchandiseOrServices": "string",
      "issuerComments.merchandiseServiceReceivedDate": "string",
      "issuerComments.merchandiseWasCounterfeitDate": "string",
      "issuerComments.note": "string",
      "issuerComments.orderDetailsNotAsDescribed": "string",
      "issuerComments.purchasedInfo": "string",
      "issuerComments.purchasedInfoAndQualityIssue": "string",
      "issuerComments.returnMethod": "string",
      "issuerComments.returnedMerchandiseReceivedDate": "string",
      "issuerComments.serviceReceivedDate": "string",
      "issuerComments.type": "string",
      "issuerComments.whatWasNotReceived": "string",
      "issuerComments.whatWasOrdered": "string",
      "issuerComments.whatWasPurchased": "string",
      "issuerComments.whereIsMerchandiseLocated": "string",
      "modificationMerchantReferences": "string",
      "nofReasonCode": "string",
      "nofSchemeCode": "string",
      "paymentMethodVariant": "string",
      "rfiReasonCode": "string",
      "rfiSchemeCode": "string",
      "shopperReference": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "AUTHENTICATION",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "originalReference": "string",
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "string",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[IssuerCommentsNotificationRequestItem](#schemaissuercommentsnotificationrequestitem)|false|none|none|

<h2 id="tocS_IssuerResponseTimeframeExpiredNotificationRequest">IssuerResponseTimeframeExpiredNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaissuerresponsetimeframeexpirednotificationrequest"></a>
<a id="schema_IssuerResponseTimeframeExpiredNotificationRequest"></a>
<a id="tocSissuerresponsetimeframeexpirednotificationrequest"></a>
<a id="tocsissuerresponsetimeframeexpirednotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "issuerComments.attemptedReturnDate": "string",
          "issuerComments.cancellationDate": "string",
          "issuerComments.cancellationMethod": "string",
          "issuerComments.chReceivedOrExpectedMerchandise": "string",
          "issuerComments.creditVoucherOrTransactionReceiptDate": "string",
          "issuerComments.damagedOrDefectiveOrderInfo": "string",
          "issuerComments.dateOfService": "string",
          "issuerComments.descCounterfeitMerchandise": "string",
          "issuerComments.disputeAmountChangeReason": "string",
          "issuerComments.expectedReceiptDateTime": "string",
          "issuerComments.explanation": "string",
          "issuerComments.explanationOfCreditPresented": "string",
          "issuerComments.howChAttemptReturnAndDispOfMerchandise": "string",
          "issuerComments.howMerchandiseOrServiceMisrepresented": "string",
          "issuerComments.howTermsOfContractNotHonoredByMerchant": "string",
          "issuerComments.merchandiseOrServices": "string",
          "issuerComments.merchandiseServiceReceivedDate": "string",
          "issuerComments.merchandiseWasCounterfeitDate": "string",
          "issuerComments.note": "string",
          "issuerComments.orderDetailsNotAsDescribed": "string",
          "issuerComments.purchasedInfo": "string",
          "issuerComments.purchasedInfoAndQualityIssue": "string",
          "issuerComments.returnMethod": "string",
          "issuerComments.returnedMerchandiseReceivedDate": "string",
          "issuerComments.serviceReceivedDate": "string",
          "issuerComments.type": "string",
          "issuerComments.whatWasNotReceived": "string",
          "issuerComments.whatWasOrdered": "string",
          "issuerComments.whatWasPurchased": "string",
          "issuerComments.whereIsMerchandiseLocated": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[IssuerCommentsNotificationRequestItemWrapper](#schemaissuercommentsnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_ModificationNotificationRequest">ModificationNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodificationnotificationrequest"></a>
<a id="schema_ModificationNotificationRequest"></a>
<a id="tocSmodificationnotificationrequest"></a>
<a id="tocsmodificationnotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "bookingDate": "string",
          "hmacSignature": "string",
          "paymentMethodVariant": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[ModificationNotificationRequestItemWrapper](#schemamodificationnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_ModificationNotificationRequestItem">ModificationNotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemamodificationnotificationrequestitem"></a>
<a id="schema_ModificationNotificationRequestItem"></a>
<a id="tocSmodificationnotificationrequestitem"></a>
<a id="tocsmodificationnotificationrequestitem"></a>

```json
{
  "additionalData": {
    "bookingDate": "string",
    "hmacSignature": "string",
    "paymentMethodVariant": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[BaseModificationAdditionalData](#schemabasemodificationadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_ModificationNotificationRequestItem-recursive">ModificationNotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemamodificationnotificationrequestitem-recursive"></a>
<a id="schema_ModificationNotificationRequestItem-recursive"></a>
<a id="tocSmodificationnotificationrequestitem-recursive"></a>
<a id="tocsmodificationnotificationrequestitem-recursive"></a>

```json
{
  "additionalData": {
    "bookingDate": "string",
    "hmacSignature": "string",
    "paymentMethodVariant": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[BaseModificationAdditionalData](#schemabasemodificationadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_ModificationNotificationRequestItemWrapper">ModificationNotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemamodificationnotificationrequestitemwrapper"></a>
<a id="schema_ModificationNotificationRequestItemWrapper"></a>
<a id="tocSmodificationnotificationrequestitemwrapper"></a>
<a id="tocsmodificationnotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "bookingDate": "string",
      "hmacSignature": "string",
      "paymentMethodVariant": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "AUTHENTICATION",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "originalReference": "string",
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "string",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[ModificationNotificationRequestItem](#schemamodificationnotificationrequestitem)|false|none|none|

<h2 id="tocS_NotificationAdditionalData">NotificationAdditionalData</h2>
<!-- backwards compatibility -->
<a id="schemanotificationadditionaldata"></a>
<a id="schema_NotificationAdditionalData"></a>
<a id="tocSnotificationadditionaldata"></a>
<a id="tocsnotificationadditionaldata"></a>

```json
{
  "PaymentAccountReference": "string",
  "acquirerAccountCode": "string",
  "acquirerCode": "string",
  "acquirerReference": "string",
  "acsRenderingType.acsInterface": "string",
  "acsRenderingType.acsUiTemplate": "string",
  "alias": "string",
  "aliasType": "string",
  "arn": "string",
  "authCode": "string",
  "authenticationType": "string",
  "authorisationMid": "string",
  "authorisedAmountCurrency": "string",
  "authorisedAmountValue": "string",
  "avsResult": "string",
  "avsResultRaw": "string",
  "bankAccountNumber": "string",
  "bankLocation": "string",
  "bankLocationId": "string",
  "bankName": "string",
  "bankVerificationResult": "string",
  "bankVerificationResultRaw": "string",
  "bic": "string",
  "billingAddress.city": "string",
  "billingAddress.houseNumberOrName": "string",
  "billingAddress.postalCode": "string",
  "billingAddress.stateOrProvince": "string",
  "billingAddress.street": "string",
  "browserCode": "string",
  "captureDelayHours": "string",
  "captureMerchantReference": "string",
  "capturePspReference": "string",
  "cardBin": "string",
  "cardIssuingBank": "string",
  "cardIssuingCountry": "string",
  "cardIssuingCurrency": "string",
  "cardPaymentMethod": "string",
  "cardSchemeEnhancedDataLevel": "string",
  "cardSummary": "string",
  "cavv": "string",
  "cavvAlgorithm": "string",
  "challengeCancel": "string",
  "checkoutSessionId": "string",
  "cvcResult": "string",
  "cvcResultRaw": "string",
  "deliveryAddress.city": "string",
  "deliveryAddress.country": "string",
  "deliveryAddress.houseNumberOrName": "string",
  "deliveryAddress.postalCode": "string",
  "deliveryAddress.stateOrProvince": "string",
  "deliveryAddress.street": "string",
  "deviceType": "string",
  "directdebit_GB.dateOfSignature": "string",
  "directdebit_GB.mandateId": "string",
  "directdebit_GB.sequenceType": "string",
  "directdebit_GB.serviceUserName": "string",
  "directdebit_GB.serviceUserNumber": "string",
  "eci": "string",
  "expiryDate": "string",
  "extraCostsCurrency": "string",
  "extraCostsValue": "string",
  "extraCostsValueGratuity": "string",
  "extraCostsValueSurcharge": "string",
  "fraudCheck-<check ID>-<name>": "string",
  "fraudManualReview": "string",
  "fraudOffset": "string",
  "fraudResultType": "string",
  "fraudRiskLevel": "veryLow",
  "fundingSource": "string",
  "grossCurrency": "string",
  "grossValue": "string",
  "iban": "string",
  "installments.value": "string",
  "interactionCounter": "string",
  "issuerComments.cardholderName": "string",
  "issuerCountry": "string",
  "latestCard.bin": "string",
  "latestCard.expiryDate": "string",
  "latestCard.summary": "string",
  "liabilityShift": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "networkProcessingMode": "string",
  "networkToken.available": "string",
  "networkToken.bin": "string",
  "networkToken.tokenSummary": "string",
  "networkTxDate": "string",
  "networkTxReference": "string",
  "nfc.expire": "string",
  "nfc.issue": "string",
  "nfc.pin.provided": "string",
  "nfc.uid": "string",
  "opi.transToken": "string",
  "ownerCity": "string",
  "ownerName": "string",
  "payULatamTrazabilityCode": "string",
  "paymentLinkId": "string",
  "realtimeAccountUpdaterStatus": "string",
  "recurring.contractTypes": "string",
  "recurring.firstPspReference": "string",
  "recurring.recurringDetailReference": "string",
  "referred": "string",
  "refusalReasonRaw": "string",
  "retry.rescueScheduled": "string",
  "riskProfile": "string",
  "riskProfileReference": "string",
  "shopperCountry": "string",
  "shopperEmail": "string",
  "shopperIP": "string",
  "shopperInteraction": "string",
  "shopperLocale": "string",
  "shopperSocialSecurityNumber": "string",
  "shopperStatement": "string",
  "shopperTelephone": "string",
  "store": "string",
  "tenderReference": "string",
  "terminalId": "string",
  "threeDAuthenticated": "string",
  "threeDAuthenticatedResponse": "string",
  "threeDOffered": "string",
  "threeDOfferedResponse": "string",
  "threeDSVersion": "string",
  "tokenTxVariant": "string",
  "totalFraudScore": "string",
  "untokenisedCardSummary": "string",
  "xid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PaymentAccountReference|string|false|none|Reference of the payment account.|
|acquirerAccountCode|string|false|none|The acquirer account code.|
|acquirerCode|string|false|none|The acquirer code.|
|acquirerReference|string|false|none|The acquirer reference.|
|acsRenderingType.acsInterface|string|false|none|ACS interface. Related to 3DS.|
|acsRenderingType.acsUiTemplate|string|false|none|ACS UI template.|
|alias|string|false|none|Alias for this card.|
|aliasType|string|false|none|Alias type.|
|arn|string|false|none|Acquirer Reference Number of the dispute.|
|authCode|string|false|none|Authcode of the scheme.|
|authenticationType|string|false|none|3DS authentication type|
|authorisationMid|string|false|none|Authorisation MID of the acquirer.|
|authorisedAmountCurrency|string|false|none|The currency authorised for a dynamic zero auth request.|
|authorisedAmountValue|string|false|none|The amount authorised for a dynamic zero auth request.|
|avsResult|string|false|none|Address Verification Service result.|
|avsResultRaw|string|false|none|Address Verification Service result raw.|
|bankAccountNumber|string|false|none|The bank account number.|
|bankLocation|string|false|none|The bank location.|
|bankLocationId|string|false|none|The bank location ID.|
|bankName|string|false|none|The bank name.|
|bankVerificationResult|string|false|none|The bank verification result.|
|bankVerificationResultRaw|string|false|none|The bank verification result raw.|
|bic|string|false|none|Business Identifier Code.|
|billingAddress.city|string|false|none|BillingAddress: county.|
|billingAddress.houseNumberOrName|string|false|none|BillingAddress: house number or name.|
|billingAddress.postalCode|string|false|none|BillingAddress: postal code.|
|billingAddress.stateOrProvince|string|false|none|BillingAddress: state or province|
|billingAddress.street|string|false|none|BillingAddress: street|
|browserCode|string|false|none|Browser code.|
|captureDelayHours|string|false|none|The amount of delay after authorisation.|
|captureMerchantReference|string|false|none|The merchant reference of the capture.|
|capturePspReference|string|false|none|The PSP reference of the capture.|
|cardBin|string|false|none|Card Bank Identification number.|
|cardIssuingBank|string|false|none|Card issuing bank.|
|cardIssuingCountry|string|false|none|Card issuing country.|
|cardIssuingCurrency|string|false|none|Card issuing currency.|
|cardPaymentMethod|string|false|none|Card payment method.|
|cardSchemeEnhancedDataLevel|string|false|none|Card scheme enhanced data level.|
|cardSummary|string|false|none|Card summary|
|cavv|string|false|none|Secure Cardholder Authentication Verification Value.|
|cavvAlgorithm|string|false|none|CAVV algorithm.|
|challengeCancel|string|false|none|Information about the 3DS challenge being canceled.|
|checkoutSessionId|string|false|none|ID of the Checkout Session.|
|cvcResult|string|false|none|Card Verification Code result.|
|cvcResultRaw|string|false|none|Card Verification Code result raw.|
|deliveryAddress.city|string|false|none|Delivery address: city.|
|deliveryAddress.country|string|false|none|Delivery address: country.|
|deliveryAddress.houseNumberOrName|string|false|none|Delivery address: house number or name.|
|deliveryAddress.postalCode|string|false|none|Delivery address: postal code.|
|deliveryAddress.stateOrProvince|string|false|none|Delivery address: state or province.|
|deliveryAddress.street|string|false|none|Delivery address: street.|
|deviceType|string|false|none|Type of device the request was made from.|
|directdebit_GB.dateOfSignature|string|false|none|Direct debit GB: date of signature.|
|directdebit_GB.mandateId|string|false|none|Direct debit GB: mandate ID.|
|directdebit_GB.sequenceType|string|false|none|Direct debit GB: sequence type.|
|directdebit_GB.serviceUserName|string|false|none|Direct debit GB: service user name.|
|directdebit_GB.serviceUserNumber|string|false|none|Direct debit GB: service user number.|
|eci|string|false|none|3DS: Electronic Commerce Indicator.|
|expiryDate|string|false|none|Expiry date of the card.|
|extraCostsCurrency|string|false|none|Additional cost used in [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification).|
|extraCostsValue|string|false|none|Related additional cost value.|
|extraCostsValueGratuity|string|false|none|Gratuity related additional cost value.|
|extraCostsValueSurcharge|string|false|none|Surcharge related additional cost value.|
|fraudCheck-<check ID>-<name>|string|false|none|Information on the fraud check in a dynamic format.|
|fraudManualReview|string|false|none|Indicates if the risk check was done manually.|
|fraudOffset|string|false|none|The fraud offset.|
|fraudResultType|string|false|none|Result type of the fraud check.|
|fraudRiskLevel|string|false|none|The risk level of the transaction as classified by the [machine learning](https://docs.adyen.com/risk-management/configure-your-risk-profile/machine-learning-rules/) fraud risk rule. The risk level indicates the likelihood that a transaction will result in a fraudulent dispute. Possible values:<br>* veryLow<br>* low<br>* medium<br>* high<br>* veryHigh<br><br>|
|fundingSource|string|false|none|Funding source.|
|grossCurrency|string|false|none|Chargeback gross currency.|
|grossValue|string|false|none|Chargeback gross value.|
|iban|string|false|none|International Bank Account Number.|
|installments.value|string|false|none|The number of installments that the payment amount should be charged with.<br><br>Example: 5<br>> Only relevant for card payments in countries that support installments.|
|interactionCounter|string|false|none|3DS interaction counter.|
|issuerComments.cardholderName|string|false|none|Card holder name.|
|issuerCountry|string|false|none|Country of the card issuer.|
|latestCard.bin|string|false|none|Recurring: Latest card BIN.|
|latestCard.expiryDate|string|false|none|Recurring: Latest card expiry date.|
|latestCard.summary|string|false|none|Recurring: Latest card summary.|
|liabilityShift|string|false|none|Risk liability shift.|
|metadata|object|false|none|A set of key-value pairs provided in the request, prefixed with 'metadata.'. For example, 'metadata.myField: myValue'|
|networkProcessingMode|string|false|none|Indicates the processing flow.<br><br>Possible values:<br>* **sale**: You do not need to separately capture the funds, because capture happens automatically as part of the transaction. <br>* **auth**: If you have not [configured automatic capture for the transaction](https://docs.adyen.com/online-payments/capture#types-of-capture), you must manually capture the funds.|
|networkToken.available|string|false|none|Recurring related.|
|networkToken.bin|string|false|none|Recurring related.|
|networkToken.tokenSummary|string|false|none|Recurring related.|
|networkTxDate|string|false|none|The network transaction date for Mastercard transactions processed by Bank of America Merchant Services (BAMS).|
|networkTxReference|string|false|none|The network transaction reference from the scheme, when available.|
|nfc.expire|string|false|none|NFC related.|
|nfc.issue|string|false|none|NFC related.|
|nfc.pin.provided|string|false|none|NFC related.|
|nfc.uid|string|false|none|NFC related.|
|opi.transToken|string|false|none|Trans token related to Oracle Opera.|
|ownerCity|string|false|none|Owner city.|
|ownerName|string|false|none|Owner name.|
|payULatamTrazabilityCode|string|false|none|Related to PayU in LATAM.|
|paymentLinkId|string|false|none|ID of the Checkout payment link.|
|realtimeAccountUpdaterStatus|string|false|none|Real time Account Update status.|
|recurring.contractTypes|string|false|none|Recurring contract types.|
|recurring.firstPspReference|string|false|none|Recurring first PSP reference.|
|recurring.recurringDetailReference|string|false|none|The [token for stored payment details](https://docs.adyen.com/online-payments/tokenization/create-and-use-tokens/) to make recurring payments.|
|referred|string|false|none|If the payment is referred, this field is set to true.<br><br>This field is unavailable if the payment is referred and is usually not returned with ecommerce transactions.<br><br>Example: true|
|refusalReasonRaw|string|false|none|Raw refusal reason received from the acquirer, where available.<br><br>Example: AUTHORISED|
|retry.rescueScheduled|string|false|none|Indicates if an auto rescue for a payment is scheduled.|
|riskProfile|string|false|none|Related to Risk.|
|riskProfileReference|string|false|none|Related to Risk.|
|shopperCountry|string|false|none|Country of the shopper.|
|shopperEmail|string|false|none|Email of the shopper.|
|shopperIP|string|false|none|IP of the shopper.|
|shopperInteraction|string|false|none|The shopper interaction type of the payment request.<br><br>Example: Ecommerce|
|shopperLocale|string|false|none|The locale of the shopper.|
|shopperSocialSecurityNumber|string|false|none|The social security number of the shopper.|
|shopperStatement|string|false|none|The text to be shown on the shopper's bank statement.|
|shopperTelephone|string|false|none|The telephone number of the shopper.|
|store|string|false|none|Identifier of the store processing the transaction.|
|tenderReference|string|false|none|Tender reference. For point-of-sale integrations only.|
|terminalId|string|false|none|Terminal ID. For point-of-sale integrations only.|
|threeDAuthenticated|string|false|none|A Boolean value indicating whether 3DS authentication was completed on this payment.<br><br>Example: true|
|threeDAuthenticatedResponse|string|false|none|The raw 3DS authentication result from the card issuer.<br><br>Example: N|
|threeDOffered|string|false|none|A Boolean value indicating whether 3DS was offered for this payment.<br><br>Example: true|
|threeDOfferedResponse|string|false|none|The raw enrollment result from the 3DS directory services of the card schemes.<br><br>Example: Y|
|threeDSVersion|string|false|none|The 3D Secure 2 version.|
|tokenTxVariant|string|false|none|Payment method variant of the token/wallet payment method.|
|totalFraudScore|string|false|none|Total fraud score from risk.|
|untokenisedCardSummary|string|false|none|Card summary without tokenization.|
|xid|string|false|none|The 3DS transaction ID of the 3DS session sent in notifications. The value is Base64-encoded and is returned for transactions with directoryResponse 'N' or 'Y'. <br><br>Example: ODgxNDc2MDg2MDExODk5MAAAAAA=|

#### Enumerated Values

|Property|Value|
|---|---|
|fraudRiskLevel|veryLow|
|fraudRiskLevel|low|
|fraudRiskLevel|medium|
|fraudRiskLevel|high|
|fraudRiskLevel|veryHigh|

<h2 id="tocS_NotificationOfChargebackNotificationRequest">NotificationOfChargebackNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemanotificationofchargebacknotificationrequest"></a>
<a id="schema_NotificationOfChargebackNotificationRequest"></a>
<a id="tocSnotificationofchargebacknotificationrequest"></a>
<a id="tocsnotificationofchargebacknotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_NotificationOfFraudNotificationRequest">NotificationOfFraudNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemanotificationoffraudnotificationrequest"></a>
<a id="schema_NotificationOfFraudNotificationRequest"></a>
<a id="tocSnotificationoffraudnotificationrequest"></a>
<a id="tocsnotificationoffraudnotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_NotificationRequest">NotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemanotificationrequest"></a>
<a id="schema_NotificationRequest"></a>
<a id="tocSnotificationrequest"></a>
<a id="tocsnotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "PaymentAccountReference": "string",
          "acquirerAccountCode": "string",
          "acquirerCode": "string",
          "acquirerReference": "string",
          "acsRenderingType.acsInterface": "string",
          "acsRenderingType.acsUiTemplate": "string",
          "alias": "string",
          "aliasType": "string",
          "arn": "string",
          "authCode": "string",
          "authenticationType": "string",
          "authorisationMid": "string",
          "authorisedAmountCurrency": "string",
          "authorisedAmountValue": "string",
          "avsResult": "string",
          "avsResultRaw": "string",
          "bankAccountNumber": "string",
          "bankLocation": "string",
          "bankLocationId": "string",
          "bankName": "string",
          "bankVerificationResult": "string",
          "bankVerificationResultRaw": "string",
          "bic": "string",
          "billingAddress.city": "string",
          "billingAddress.houseNumberOrName": "string",
          "billingAddress.postalCode": "string",
          "billingAddress.stateOrProvince": "string",
          "billingAddress.street": "string",
          "browserCode": "string",
          "captureDelayHours": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "cardBin": "string",
          "cardIssuingBank": "string",
          "cardIssuingCountry": "string",
          "cardIssuingCurrency": "string",
          "cardPaymentMethod": "string",
          "cardSchemeEnhancedDataLevel": "string",
          "cardSummary": "string",
          "cavv": "string",
          "cavvAlgorithm": "string",
          "challengeCancel": "string",
          "checkoutSessionId": "string",
          "cvcResult": "string",
          "cvcResultRaw": "string",
          "deliveryAddress.city": "string",
          "deliveryAddress.country": "string",
          "deliveryAddress.houseNumberOrName": "string",
          "deliveryAddress.postalCode": "string",
          "deliveryAddress.stateOrProvince": "string",
          "deliveryAddress.street": "string",
          "deviceType": "string",
          "directdebit_GB.dateOfSignature": "string",
          "directdebit_GB.mandateId": "string",
          "directdebit_GB.sequenceType": "string",
          "directdebit_GB.serviceUserName": "string",
          "directdebit_GB.serviceUserNumber": "string",
          "eci": "string",
          "expiryDate": "string",
          "extraCostsCurrency": "string",
          "extraCostsValue": "string",
          "extraCostsValueGratuity": "string",
          "extraCostsValueSurcharge": "string",
          "fraudCheck-<check ID>-<name>": "string",
          "fraudManualReview": "string",
          "fraudOffset": "string",
          "fraudResultType": "string",
          "fraudRiskLevel": "veryLow",
          "fundingSource": "string",
          "grossCurrency": "string",
          "grossValue": "string",
          "iban": "string",
          "installments.value": "string",
          "interactionCounter": "string",
          "issuerComments.cardholderName": "string",
          "issuerCountry": "string",
          "latestCard.bin": "string",
          "latestCard.expiryDate": "string",
          "latestCard.summary": "string",
          "liabilityShift": "string",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "networkProcessingMode": "string",
          "networkToken.available": "string",
          "networkToken.bin": "string",
          "networkToken.tokenSummary": "string",
          "networkTxDate": "string",
          "networkTxReference": "string",
          "nfc.expire": "string",
          "nfc.issue": "string",
          "nfc.pin.provided": "string",
          "nfc.uid": "string",
          "opi.transToken": "string",
          "ownerCity": "string",
          "ownerName": "string",
          "payULatamTrazabilityCode": "string",
          "paymentLinkId": "string",
          "realtimeAccountUpdaterStatus": "string",
          "recurring.contractTypes": "string",
          "recurring.firstPspReference": "string",
          "recurring.recurringDetailReference": "string",
          "referred": "string",
          "refusalReasonRaw": "string",
          "retry.rescueScheduled": "string",
          "riskProfile": "string",
          "riskProfileReference": "string",
          "shopperCountry": "string",
          "shopperEmail": "string",
          "shopperIP": "string",
          "shopperInteraction": "string",
          "shopperLocale": "string",
          "shopperSocialSecurityNumber": "string",
          "shopperStatement": "string",
          "shopperTelephone": "string",
          "store": "string",
          "tenderReference": "string",
          "terminalId": "string",
          "threeDAuthenticated": "string",
          "threeDAuthenticatedResponse": "string",
          "threeDOffered": "string",
          "threeDOfferedResponse": "string",
          "threeDSVersion": "string",
          "tokenTxVariant": "string",
          "totalFraudScore": "string",
          "untokenisedCardSummary": "string",
          "xid": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[NotificationRequestItemWrapper](#schemanotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_NotificationRequestItem">NotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemanotificationrequestitem"></a>
<a id="schema_NotificationRequestItem"></a>
<a id="tocSnotificationrequestitem"></a>
<a id="tocsnotificationrequestitem"></a>

```json
{
  "additionalData": {
    "PaymentAccountReference": "string",
    "acquirerAccountCode": "string",
    "acquirerCode": "string",
    "acquirerReference": "string",
    "acsRenderingType.acsInterface": "string",
    "acsRenderingType.acsUiTemplate": "string",
    "alias": "string",
    "aliasType": "string",
    "arn": "string",
    "authCode": "string",
    "authenticationType": "string",
    "authorisationMid": "string",
    "authorisedAmountCurrency": "string",
    "authorisedAmountValue": "string",
    "avsResult": "string",
    "avsResultRaw": "string",
    "bankAccountNumber": "string",
    "bankLocation": "string",
    "bankLocationId": "string",
    "bankName": "string",
    "bankVerificationResult": "string",
    "bankVerificationResultRaw": "string",
    "bic": "string",
    "billingAddress.city": "string",
    "billingAddress.houseNumberOrName": "string",
    "billingAddress.postalCode": "string",
    "billingAddress.stateOrProvince": "string",
    "billingAddress.street": "string",
    "browserCode": "string",
    "captureDelayHours": "string",
    "captureMerchantReference": "string",
    "capturePspReference": "string",
    "cardBin": "string",
    "cardIssuingBank": "string",
    "cardIssuingCountry": "string",
    "cardIssuingCurrency": "string",
    "cardPaymentMethod": "string",
    "cardSchemeEnhancedDataLevel": "string",
    "cardSummary": "string",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "string",
    "checkoutSessionId": "string",
    "cvcResult": "string",
    "cvcResultRaw": "string",
    "deliveryAddress.city": "string",
    "deliveryAddress.country": "string",
    "deliveryAddress.houseNumberOrName": "string",
    "deliveryAddress.postalCode": "string",
    "deliveryAddress.stateOrProvince": "string",
    "deliveryAddress.street": "string",
    "deviceType": "string",
    "directdebit_GB.dateOfSignature": "string",
    "directdebit_GB.mandateId": "string",
    "directdebit_GB.sequenceType": "string",
    "directdebit_GB.serviceUserName": "string",
    "directdebit_GB.serviceUserNumber": "string",
    "eci": "string",
    "expiryDate": "string",
    "extraCostsCurrency": "string",
    "extraCostsValue": "string",
    "extraCostsValueGratuity": "string",
    "extraCostsValueSurcharge": "string",
    "fraudCheck-<check ID>-<name>": "string",
    "fraudManualReview": "string",
    "fraudOffset": "string",
    "fraudResultType": "string",
    "fraudRiskLevel": "veryLow",
    "fundingSource": "string",
    "grossCurrency": "string",
    "grossValue": "string",
    "iban": "string",
    "installments.value": "string",
    "interactionCounter": "string",
    "issuerComments.cardholderName": "string",
    "issuerCountry": "string",
    "latestCard.bin": "string",
    "latestCard.expiryDate": "string",
    "latestCard.summary": "string",
    "liabilityShift": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "networkProcessingMode": "string",
    "networkToken.available": "string",
    "networkToken.bin": "string",
    "networkToken.tokenSummary": "string",
    "networkTxDate": "string",
    "networkTxReference": "string",
    "nfc.expire": "string",
    "nfc.issue": "string",
    "nfc.pin.provided": "string",
    "nfc.uid": "string",
    "opi.transToken": "string",
    "ownerCity": "string",
    "ownerName": "string",
    "payULatamTrazabilityCode": "string",
    "paymentLinkId": "string",
    "realtimeAccountUpdaterStatus": "string",
    "recurring.contractTypes": "string",
    "recurring.firstPspReference": "string",
    "recurring.recurringDetailReference": "string",
    "referred": "string",
    "refusalReasonRaw": "string",
    "retry.rescueScheduled": "string",
    "riskProfile": "string",
    "riskProfileReference": "string",
    "shopperCountry": "string",
    "shopperEmail": "string",
    "shopperIP": "string",
    "shopperInteraction": "string",
    "shopperLocale": "string",
    "shopperSocialSecurityNumber": "string",
    "shopperStatement": "string",
    "shopperTelephone": "string",
    "store": "string",
    "tenderReference": "string",
    "terminalId": "string",
    "threeDAuthenticated": "string",
    "threeDAuthenticatedResponse": "string",
    "threeDOffered": "string",
    "threeDOfferedResponse": "string",
    "threeDSVersion": "string",
    "tokenTxVariant": "string",
    "totalFraudScore": "string",
    "untokenisedCardSummary": "string",
    "xid": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[NotificationAdditionalData](#schemanotificationadditionaldata)|false|none|A generic container for extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_NotificationRequestItem-recursive">NotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemanotificationrequestitem-recursive"></a>
<a id="schema_NotificationRequestItem-recursive"></a>
<a id="tocSnotificationrequestitem-recursive"></a>
<a id="tocsnotificationrequestitem-recursive"></a>

```json
{
  "additionalData": {
    "PaymentAccountReference": "string",
    "acquirerAccountCode": "string",
    "acquirerCode": "string",
    "acquirerReference": "string",
    "acsRenderingType.acsInterface": "string",
    "acsRenderingType.acsUiTemplate": "string",
    "alias": "string",
    "aliasType": "string",
    "arn": "string",
    "authCode": "string",
    "authenticationType": "string",
    "authorisationMid": "string",
    "authorisedAmountCurrency": "string",
    "authorisedAmountValue": "string",
    "avsResult": "string",
    "avsResultRaw": "string",
    "bankAccountNumber": "string",
    "bankLocation": "string",
    "bankLocationId": "string",
    "bankName": "string",
    "bankVerificationResult": "string",
    "bankVerificationResultRaw": "string",
    "bic": "string",
    "billingAddress.city": "string",
    "billingAddress.houseNumberOrName": "string",
    "billingAddress.postalCode": "string",
    "billingAddress.stateOrProvince": "string",
    "billingAddress.street": "string",
    "browserCode": "string",
    "captureDelayHours": "string",
    "captureMerchantReference": "string",
    "capturePspReference": "string",
    "cardBin": "string",
    "cardIssuingBank": "string",
    "cardIssuingCountry": "string",
    "cardIssuingCurrency": "string",
    "cardPaymentMethod": "string",
    "cardSchemeEnhancedDataLevel": "string",
    "cardSummary": "string",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "string",
    "checkoutSessionId": "string",
    "cvcResult": "string",
    "cvcResultRaw": "string",
    "deliveryAddress.city": "string",
    "deliveryAddress.country": "string",
    "deliveryAddress.houseNumberOrName": "string",
    "deliveryAddress.postalCode": "string",
    "deliveryAddress.stateOrProvince": "string",
    "deliveryAddress.street": "string",
    "deviceType": "string",
    "directdebit_GB.dateOfSignature": "string",
    "directdebit_GB.mandateId": "string",
    "directdebit_GB.sequenceType": "string",
    "directdebit_GB.serviceUserName": "string",
    "directdebit_GB.serviceUserNumber": "string",
    "eci": "string",
    "expiryDate": "string",
    "extraCostsCurrency": "string",
    "extraCostsValue": "string",
    "extraCostsValueGratuity": "string",
    "extraCostsValueSurcharge": "string",
    "fraudCheck-<check ID>-<name>": "string",
    "fraudManualReview": "string",
    "fraudOffset": "string",
    "fraudResultType": "string",
    "fraudRiskLevel": "veryLow",
    "fundingSource": "string",
    "grossCurrency": "string",
    "grossValue": "string",
    "iban": "string",
    "installments.value": "string",
    "interactionCounter": "string",
    "issuerComments.cardholderName": "string",
    "issuerCountry": "string",
    "latestCard.bin": "string",
    "latestCard.expiryDate": "string",
    "latestCard.summary": "string",
    "liabilityShift": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "networkProcessingMode": "string",
    "networkToken.available": "string",
    "networkToken.bin": "string",
    "networkToken.tokenSummary": "string",
    "networkTxDate": "string",
    "networkTxReference": "string",
    "nfc.expire": "string",
    "nfc.issue": "string",
    "nfc.pin.provided": "string",
    "nfc.uid": "string",
    "opi.transToken": "string",
    "ownerCity": "string",
    "ownerName": "string",
    "payULatamTrazabilityCode": "string",
    "paymentLinkId": "string",
    "realtimeAccountUpdaterStatus": "string",
    "recurring.contractTypes": "string",
    "recurring.firstPspReference": "string",
    "recurring.recurringDetailReference": "string",
    "referred": "string",
    "refusalReasonRaw": "string",
    "retry.rescueScheduled": "string",
    "riskProfile": "string",
    "riskProfileReference": "string",
    "shopperCountry": "string",
    "shopperEmail": "string",
    "shopperIP": "string",
    "shopperInteraction": "string",
    "shopperLocale": "string",
    "shopperSocialSecurityNumber": "string",
    "shopperStatement": "string",
    "shopperTelephone": "string",
    "store": "string",
    "tenderReference": "string",
    "terminalId": "string",
    "threeDAuthenticated": "string",
    "threeDAuthenticatedResponse": "string",
    "threeDOffered": "string",
    "threeDOfferedResponse": "string",
    "threeDSVersion": "string",
    "tokenTxVariant": "string",
    "totalFraudScore": "string",
    "untokenisedCardSummary": "string",
    "xid": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[NotificationAdditionalData](#schemanotificationadditionaldata)|false|none|A generic container for extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_NotificationRequestItemWrapper">NotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemanotificationrequestitemwrapper"></a>
<a id="schema_NotificationRequestItemWrapper"></a>
<a id="tocSnotificationrequestitemwrapper"></a>
<a id="tocsnotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "PaymentAccountReference": "string",
      "acquirerAccountCode": "string",
      "acquirerCode": "string",
      "acquirerReference": "string",
      "acsRenderingType.acsInterface": "string",
      "acsRenderingType.acsUiTemplate": "string",
      "alias": "string",
      "aliasType": "string",
      "arn": "string",
      "authCode": "string",
      "authenticationType": "string",
      "authorisationMid": "string",
      "authorisedAmountCurrency": "string",
      "authorisedAmountValue": "string",
      "avsResult": "string",
      "avsResultRaw": "string",
      "bankAccountNumber": "string",
      "bankLocation": "string",
      "bankLocationId": "string",
      "bankName": "string",
      "bankVerificationResult": "string",
      "bankVerificationResultRaw": "string",
      "bic": "string",
      "billingAddress.city": "string",
      "billingAddress.houseNumberOrName": "string",
      "billingAddress.postalCode": "string",
      "billingAddress.stateOrProvince": "string",
      "billingAddress.street": "string",
      "browserCode": "string",
      "captureDelayHours": "string",
      "captureMerchantReference": "string",
      "capturePspReference": "string",
      "cardBin": "string",
      "cardIssuingBank": "string",
      "cardIssuingCountry": "string",
      "cardIssuingCurrency": "string",
      "cardPaymentMethod": "string",
      "cardSchemeEnhancedDataLevel": "string",
      "cardSummary": "string",
      "cavv": "string",
      "cavvAlgorithm": "string",
      "challengeCancel": "string",
      "checkoutSessionId": "string",
      "cvcResult": "string",
      "cvcResultRaw": "string",
      "deliveryAddress.city": "string",
      "deliveryAddress.country": "string",
      "deliveryAddress.houseNumberOrName": "string",
      "deliveryAddress.postalCode": "string",
      "deliveryAddress.stateOrProvince": "string",
      "deliveryAddress.street": "string",
      "deviceType": "string",
      "directdebit_GB.dateOfSignature": "string",
      "directdebit_GB.mandateId": "string",
      "directdebit_GB.sequenceType": "string",
      "directdebit_GB.serviceUserName": "string",
      "directdebit_GB.serviceUserNumber": "string",
      "eci": "string",
      "expiryDate": "string",
      "extraCostsCurrency": "string",
      "extraCostsValue": "string",
      "extraCostsValueGratuity": "string",
      "extraCostsValueSurcharge": "string",
      "fraudCheck-<check ID>-<name>": "string",
      "fraudManualReview": "string",
      "fraudOffset": "string",
      "fraudResultType": "string",
      "fraudRiskLevel": "veryLow",
      "fundingSource": "string",
      "grossCurrency": "string",
      "grossValue": "string",
      "iban": "string",
      "installments.value": "string",
      "interactionCounter": "string",
      "issuerComments.cardholderName": "string",
      "issuerCountry": "string",
      "latestCard.bin": "string",
      "latestCard.expiryDate": "string",
      "latestCard.summary": "string",
      "liabilityShift": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "networkProcessingMode": "string",
      "networkToken.available": "string",
      "networkToken.bin": "string",
      "networkToken.tokenSummary": "string",
      "networkTxDate": "string",
      "networkTxReference": "string",
      "nfc.expire": "string",
      "nfc.issue": "string",
      "nfc.pin.provided": "string",
      "nfc.uid": "string",
      "opi.transToken": "string",
      "ownerCity": "string",
      "ownerName": "string",
      "payULatamTrazabilityCode": "string",
      "paymentLinkId": "string",
      "realtimeAccountUpdaterStatus": "string",
      "recurring.contractTypes": "string",
      "recurring.firstPspReference": "string",
      "recurring.recurringDetailReference": "string",
      "referred": "string",
      "refusalReasonRaw": "string",
      "retry.rescueScheduled": "string",
      "riskProfile": "string",
      "riskProfileReference": "string",
      "shopperCountry": "string",
      "shopperEmail": "string",
      "shopperIP": "string",
      "shopperInteraction": "string",
      "shopperLocale": "string",
      "shopperSocialSecurityNumber": "string",
      "shopperStatement": "string",
      "shopperTelephone": "string",
      "store": "string",
      "tenderReference": "string",
      "terminalId": "string",
      "threeDAuthenticated": "string",
      "threeDAuthenticatedResponse": "string",
      "threeDOffered": "string",
      "threeDOfferedResponse": "string",
      "threeDSVersion": "string",
      "tokenTxVariant": "string",
      "totalFraudScore": "string",
      "untokenisedCardSummary": "string",
      "xid": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "AUTHENTICATION",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "originalReference": "string",
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "string",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[NotificationRequestItem](#schemanotificationrequestitem)|false|none|none|

<h2 id="tocS_PaidoutReversedNotificationRequest">PaidoutReversedNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaidoutreversednotificationrequest"></a>
<a id="schema_PaidoutReversedNotificationRequest"></a>
<a id="tocSpaidoutreversednotificationrequest"></a>
<a id="tocspaidoutreversednotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "PaymentAccountReference": "string",
          "acquirerAccountCode": "string",
          "acquirerCode": "string",
          "acquirerReference": "string",
          "acsRenderingType.acsInterface": "string",
          "acsRenderingType.acsUiTemplate": "string",
          "alias": "string",
          "aliasType": "string",
          "arn": "string",
          "authCode": "string",
          "authenticationType": "string",
          "authorisationMid": "string",
          "authorisedAmountCurrency": "string",
          "authorisedAmountValue": "string",
          "avsResult": "string",
          "avsResultRaw": "string",
          "bankAccountNumber": "string",
          "bankLocation": "string",
          "bankLocationId": "string",
          "bankName": "string",
          "bankVerificationResult": "string",
          "bankVerificationResultRaw": "string",
          "bic": "string",
          "billingAddress.city": "string",
          "billingAddress.houseNumberOrName": "string",
          "billingAddress.postalCode": "string",
          "billingAddress.stateOrProvince": "string",
          "billingAddress.street": "string",
          "browserCode": "string",
          "captureDelayHours": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "cardBin": "string",
          "cardIssuingBank": "string",
          "cardIssuingCountry": "string",
          "cardIssuingCurrency": "string",
          "cardPaymentMethod": "string",
          "cardSchemeEnhancedDataLevel": "string",
          "cardSummary": "string",
          "cavv": "string",
          "cavvAlgorithm": "string",
          "challengeCancel": "string",
          "checkoutSessionId": "string",
          "cvcResult": "string",
          "cvcResultRaw": "string",
          "deliveryAddress.city": "string",
          "deliveryAddress.country": "string",
          "deliveryAddress.houseNumberOrName": "string",
          "deliveryAddress.postalCode": "string",
          "deliveryAddress.stateOrProvince": "string",
          "deliveryAddress.street": "string",
          "deviceType": "string",
          "directdebit_GB.dateOfSignature": "string",
          "directdebit_GB.mandateId": "string",
          "directdebit_GB.sequenceType": "string",
          "directdebit_GB.serviceUserName": "string",
          "directdebit_GB.serviceUserNumber": "string",
          "eci": "string",
          "expiryDate": "string",
          "extraCostsCurrency": "string",
          "extraCostsValue": "string",
          "extraCostsValueGratuity": "string",
          "extraCostsValueSurcharge": "string",
          "fraudCheck-<check ID>-<name>": "string",
          "fraudManualReview": "string",
          "fraudOffset": "string",
          "fraudResultType": "string",
          "fraudRiskLevel": "veryLow",
          "fundingSource": "string",
          "grossCurrency": "string",
          "grossValue": "string",
          "iban": "string",
          "installments.value": "string",
          "interactionCounter": "string",
          "issuerComments.cardholderName": "string",
          "issuerCountry": "string",
          "latestCard.bin": "string",
          "latestCard.expiryDate": "string",
          "latestCard.summary": "string",
          "liabilityShift": "string",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "networkProcessingMode": "string",
          "networkToken.available": "string",
          "networkToken.bin": "string",
          "networkToken.tokenSummary": "string",
          "networkTxDate": "string",
          "networkTxReference": "string",
          "nfc.expire": "string",
          "nfc.issue": "string",
          "nfc.pin.provided": "string",
          "nfc.uid": "string",
          "opi.transToken": "string",
          "ownerCity": "string",
          "ownerName": "string",
          "payULatamTrazabilityCode": "string",
          "paymentLinkId": "string",
          "realtimeAccountUpdaterStatus": "string",
          "recurring.contractTypes": "string",
          "recurring.firstPspReference": "string",
          "recurring.recurringDetailReference": "string",
          "referred": "string",
          "refusalReasonRaw": "string",
          "retry.rescueScheduled": "string",
          "riskProfile": "string",
          "riskProfileReference": "string",
          "shopperCountry": "string",
          "shopperEmail": "string",
          "shopperIP": "string",
          "shopperInteraction": "string",
          "shopperLocale": "string",
          "shopperSocialSecurityNumber": "string",
          "shopperStatement": "string",
          "shopperTelephone": "string",
          "store": "string",
          "tenderReference": "string",
          "terminalId": "string",
          "threeDAuthenticated": "string",
          "threeDAuthenticatedResponse": "string",
          "threeDOffered": "string",
          "threeDOfferedResponse": "string",
          "threeDSVersion": "string",
          "tokenTxVariant": "string",
          "totalFraudScore": "string",
          "untokenisedCardSummary": "string",
          "xid": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "PAIDOUT_REVERSED",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[PaidoutReversedNotificationRequestItemWrapper](#schemapaidoutreversednotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_PaidoutReversedNotificationRequestItem">PaidoutReversedNotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemapaidoutreversednotificationrequestitem"></a>
<a id="schema_PaidoutReversedNotificationRequestItem"></a>
<a id="tocSpaidoutreversednotificationrequestitem"></a>
<a id="tocspaidoutreversednotificationrequestitem"></a>

```json
{
  "additionalData": {
    "PaymentAccountReference": "string",
    "acquirerAccountCode": "string",
    "acquirerCode": "string",
    "acquirerReference": "string",
    "acsRenderingType.acsInterface": "string",
    "acsRenderingType.acsUiTemplate": "string",
    "alias": "string",
    "aliasType": "string",
    "arn": "string",
    "authCode": "string",
    "authenticationType": "string",
    "authorisationMid": "string",
    "authorisedAmountCurrency": "string",
    "authorisedAmountValue": "string",
    "avsResult": "string",
    "avsResultRaw": "string",
    "bankAccountNumber": "string",
    "bankLocation": "string",
    "bankLocationId": "string",
    "bankName": "string",
    "bankVerificationResult": "string",
    "bankVerificationResultRaw": "string",
    "bic": "string",
    "billingAddress.city": "string",
    "billingAddress.houseNumberOrName": "string",
    "billingAddress.postalCode": "string",
    "billingAddress.stateOrProvince": "string",
    "billingAddress.street": "string",
    "browserCode": "string",
    "captureDelayHours": "string",
    "captureMerchantReference": "string",
    "capturePspReference": "string",
    "cardBin": "string",
    "cardIssuingBank": "string",
    "cardIssuingCountry": "string",
    "cardIssuingCurrency": "string",
    "cardPaymentMethod": "string",
    "cardSchemeEnhancedDataLevel": "string",
    "cardSummary": "string",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "string",
    "checkoutSessionId": "string",
    "cvcResult": "string",
    "cvcResultRaw": "string",
    "deliveryAddress.city": "string",
    "deliveryAddress.country": "string",
    "deliveryAddress.houseNumberOrName": "string",
    "deliveryAddress.postalCode": "string",
    "deliveryAddress.stateOrProvince": "string",
    "deliveryAddress.street": "string",
    "deviceType": "string",
    "directdebit_GB.dateOfSignature": "string",
    "directdebit_GB.mandateId": "string",
    "directdebit_GB.sequenceType": "string",
    "directdebit_GB.serviceUserName": "string",
    "directdebit_GB.serviceUserNumber": "string",
    "eci": "string",
    "expiryDate": "string",
    "extraCostsCurrency": "string",
    "extraCostsValue": "string",
    "extraCostsValueGratuity": "string",
    "extraCostsValueSurcharge": "string",
    "fraudCheck-<check ID>-<name>": "string",
    "fraudManualReview": "string",
    "fraudOffset": "string",
    "fraudResultType": "string",
    "fraudRiskLevel": "veryLow",
    "fundingSource": "string",
    "grossCurrency": "string",
    "grossValue": "string",
    "iban": "string",
    "installments.value": "string",
    "interactionCounter": "string",
    "issuerComments.cardholderName": "string",
    "issuerCountry": "string",
    "latestCard.bin": "string",
    "latestCard.expiryDate": "string",
    "latestCard.summary": "string",
    "liabilityShift": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "networkProcessingMode": "string",
    "networkToken.available": "string",
    "networkToken.bin": "string",
    "networkToken.tokenSummary": "string",
    "networkTxDate": "string",
    "networkTxReference": "string",
    "nfc.expire": "string",
    "nfc.issue": "string",
    "nfc.pin.provided": "string",
    "nfc.uid": "string",
    "opi.transToken": "string",
    "ownerCity": "string",
    "ownerName": "string",
    "payULatamTrazabilityCode": "string",
    "paymentLinkId": "string",
    "realtimeAccountUpdaterStatus": "string",
    "recurring.contractTypes": "string",
    "recurring.firstPspReference": "string",
    "recurring.recurringDetailReference": "string",
    "referred": "string",
    "refusalReasonRaw": "string",
    "retry.rescueScheduled": "string",
    "riskProfile": "string",
    "riskProfileReference": "string",
    "shopperCountry": "string",
    "shopperEmail": "string",
    "shopperIP": "string",
    "shopperInteraction": "string",
    "shopperLocale": "string",
    "shopperSocialSecurityNumber": "string",
    "shopperStatement": "string",
    "shopperTelephone": "string",
    "store": "string",
    "tenderReference": "string",
    "terminalId": "string",
    "threeDAuthenticated": "string",
    "threeDAuthenticatedResponse": "string",
    "threeDOffered": "string",
    "threeDOfferedResponse": "string",
    "threeDSVersion": "string",
    "tokenTxVariant": "string",
    "totalFraudScore": "string",
    "untokenisedCardSummary": "string",
    "xid": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "PAIDOUT_REVERSED",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[NotificationAdditionalData](#schemanotificationadditionaldata)|false|none|A generic container for extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|The PSP reference for the Capture's PSP reference.|
|reason|string|false|none|Contains the bank statement description if present, else it contains `PaidOutReversed`.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|PAIDOUT_REVERSED|

<h2 id="tocS_PaidoutReversedNotificationRequestItem-recursive">PaidoutReversedNotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemapaidoutreversednotificationrequestitem-recursive"></a>
<a id="schema_PaidoutReversedNotificationRequestItem-recursive"></a>
<a id="tocSpaidoutreversednotificationrequestitem-recursive"></a>
<a id="tocspaidoutreversednotificationrequestitem-recursive"></a>

```json
{
  "additionalData": {
    "PaymentAccountReference": "string",
    "acquirerAccountCode": "string",
    "acquirerCode": "string",
    "acquirerReference": "string",
    "acsRenderingType.acsInterface": "string",
    "acsRenderingType.acsUiTemplate": "string",
    "alias": "string",
    "aliasType": "string",
    "arn": "string",
    "authCode": "string",
    "authenticationType": "string",
    "authorisationMid": "string",
    "authorisedAmountCurrency": "string",
    "authorisedAmountValue": "string",
    "avsResult": "string",
    "avsResultRaw": "string",
    "bankAccountNumber": "string",
    "bankLocation": "string",
    "bankLocationId": "string",
    "bankName": "string",
    "bankVerificationResult": "string",
    "bankVerificationResultRaw": "string",
    "bic": "string",
    "billingAddress.city": "string",
    "billingAddress.houseNumberOrName": "string",
    "billingAddress.postalCode": "string",
    "billingAddress.stateOrProvince": "string",
    "billingAddress.street": "string",
    "browserCode": "string",
    "captureDelayHours": "string",
    "captureMerchantReference": "string",
    "capturePspReference": "string",
    "cardBin": "string",
    "cardIssuingBank": "string",
    "cardIssuingCountry": "string",
    "cardIssuingCurrency": "string",
    "cardPaymentMethod": "string",
    "cardSchemeEnhancedDataLevel": "string",
    "cardSummary": "string",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "string",
    "checkoutSessionId": "string",
    "cvcResult": "string",
    "cvcResultRaw": "string",
    "deliveryAddress.city": "string",
    "deliveryAddress.country": "string",
    "deliveryAddress.houseNumberOrName": "string",
    "deliveryAddress.postalCode": "string",
    "deliveryAddress.stateOrProvince": "string",
    "deliveryAddress.street": "string",
    "deviceType": "string",
    "directdebit_GB.dateOfSignature": "string",
    "directdebit_GB.mandateId": "string",
    "directdebit_GB.sequenceType": "string",
    "directdebit_GB.serviceUserName": "string",
    "directdebit_GB.serviceUserNumber": "string",
    "eci": "string",
    "expiryDate": "string",
    "extraCostsCurrency": "string",
    "extraCostsValue": "string",
    "extraCostsValueGratuity": "string",
    "extraCostsValueSurcharge": "string",
    "fraudCheck-<check ID>-<name>": "string",
    "fraudManualReview": "string",
    "fraudOffset": "string",
    "fraudResultType": "string",
    "fraudRiskLevel": "veryLow",
    "fundingSource": "string",
    "grossCurrency": "string",
    "grossValue": "string",
    "iban": "string",
    "installments.value": "string",
    "interactionCounter": "string",
    "issuerComments.cardholderName": "string",
    "issuerCountry": "string",
    "latestCard.bin": "string",
    "latestCard.expiryDate": "string",
    "latestCard.summary": "string",
    "liabilityShift": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "networkProcessingMode": "string",
    "networkToken.available": "string",
    "networkToken.bin": "string",
    "networkToken.tokenSummary": "string",
    "networkTxDate": "string",
    "networkTxReference": "string",
    "nfc.expire": "string",
    "nfc.issue": "string",
    "nfc.pin.provided": "string",
    "nfc.uid": "string",
    "opi.transToken": "string",
    "ownerCity": "string",
    "ownerName": "string",
    "payULatamTrazabilityCode": "string",
    "paymentLinkId": "string",
    "realtimeAccountUpdaterStatus": "string",
    "recurring.contractTypes": "string",
    "recurring.firstPspReference": "string",
    "recurring.recurringDetailReference": "string",
    "referred": "string",
    "refusalReasonRaw": "string",
    "retry.rescueScheduled": "string",
    "riskProfile": "string",
    "riskProfileReference": "string",
    "shopperCountry": "string",
    "shopperEmail": "string",
    "shopperIP": "string",
    "shopperInteraction": "string",
    "shopperLocale": "string",
    "shopperSocialSecurityNumber": "string",
    "shopperStatement": "string",
    "shopperTelephone": "string",
    "store": "string",
    "tenderReference": "string",
    "terminalId": "string",
    "threeDAuthenticated": "string",
    "threeDAuthenticatedResponse": "string",
    "threeDOffered": "string",
    "threeDOfferedResponse": "string",
    "threeDSVersion": "string",
    "tokenTxVariant": "string",
    "totalFraudScore": "string",
    "untokenisedCardSummary": "string",
    "xid": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "PAIDOUT_REVERSED",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[NotificationAdditionalData](#schemanotificationadditionaldata)|false|none|A generic container for extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|The PSP reference for the Capture's PSP reference.|
|reason|string|false|none|Contains the bank statement description if present, else it contains `PaidOutReversed`.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|PAIDOUT_REVERSED|

<h2 id="tocS_PaidoutReversedNotificationRequestItemWrapper">PaidoutReversedNotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemapaidoutreversednotificationrequestitemwrapper"></a>
<a id="schema_PaidoutReversedNotificationRequestItemWrapper"></a>
<a id="tocSpaidoutreversednotificationrequestitemwrapper"></a>
<a id="tocspaidoutreversednotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "PaymentAccountReference": "string",
      "acquirerAccountCode": "string",
      "acquirerCode": "string",
      "acquirerReference": "string",
      "acsRenderingType.acsInterface": "string",
      "acsRenderingType.acsUiTemplate": "string",
      "alias": "string",
      "aliasType": "string",
      "arn": "string",
      "authCode": "string",
      "authenticationType": "string",
      "authorisationMid": "string",
      "authorisedAmountCurrency": "string",
      "authorisedAmountValue": "string",
      "avsResult": "string",
      "avsResultRaw": "string",
      "bankAccountNumber": "string",
      "bankLocation": "string",
      "bankLocationId": "string",
      "bankName": "string",
      "bankVerificationResult": "string",
      "bankVerificationResultRaw": "string",
      "bic": "string",
      "billingAddress.city": "string",
      "billingAddress.houseNumberOrName": "string",
      "billingAddress.postalCode": "string",
      "billingAddress.stateOrProvince": "string",
      "billingAddress.street": "string",
      "browserCode": "string",
      "captureDelayHours": "string",
      "captureMerchantReference": "string",
      "capturePspReference": "string",
      "cardBin": "string",
      "cardIssuingBank": "string",
      "cardIssuingCountry": "string",
      "cardIssuingCurrency": "string",
      "cardPaymentMethod": "string",
      "cardSchemeEnhancedDataLevel": "string",
      "cardSummary": "string",
      "cavv": "string",
      "cavvAlgorithm": "string",
      "challengeCancel": "string",
      "checkoutSessionId": "string",
      "cvcResult": "string",
      "cvcResultRaw": "string",
      "deliveryAddress.city": "string",
      "deliveryAddress.country": "string",
      "deliveryAddress.houseNumberOrName": "string",
      "deliveryAddress.postalCode": "string",
      "deliveryAddress.stateOrProvince": "string",
      "deliveryAddress.street": "string",
      "deviceType": "string",
      "directdebit_GB.dateOfSignature": "string",
      "directdebit_GB.mandateId": "string",
      "directdebit_GB.sequenceType": "string",
      "directdebit_GB.serviceUserName": "string",
      "directdebit_GB.serviceUserNumber": "string",
      "eci": "string",
      "expiryDate": "string",
      "extraCostsCurrency": "string",
      "extraCostsValue": "string",
      "extraCostsValueGratuity": "string",
      "extraCostsValueSurcharge": "string",
      "fraudCheck-<check ID>-<name>": "string",
      "fraudManualReview": "string",
      "fraudOffset": "string",
      "fraudResultType": "string",
      "fraudRiskLevel": "veryLow",
      "fundingSource": "string",
      "grossCurrency": "string",
      "grossValue": "string",
      "iban": "string",
      "installments.value": "string",
      "interactionCounter": "string",
      "issuerComments.cardholderName": "string",
      "issuerCountry": "string",
      "latestCard.bin": "string",
      "latestCard.expiryDate": "string",
      "latestCard.summary": "string",
      "liabilityShift": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "networkProcessingMode": "string",
      "networkToken.available": "string",
      "networkToken.bin": "string",
      "networkToken.tokenSummary": "string",
      "networkTxDate": "string",
      "networkTxReference": "string",
      "nfc.expire": "string",
      "nfc.issue": "string",
      "nfc.pin.provided": "string",
      "nfc.uid": "string",
      "opi.transToken": "string",
      "ownerCity": "string",
      "ownerName": "string",
      "payULatamTrazabilityCode": "string",
      "paymentLinkId": "string",
      "realtimeAccountUpdaterStatus": "string",
      "recurring.contractTypes": "string",
      "recurring.firstPspReference": "string",
      "recurring.recurringDetailReference": "string",
      "referred": "string",
      "refusalReasonRaw": "string",
      "retry.rescueScheduled": "string",
      "riskProfile": "string",
      "riskProfileReference": "string",
      "shopperCountry": "string",
      "shopperEmail": "string",
      "shopperIP": "string",
      "shopperInteraction": "string",
      "shopperLocale": "string",
      "shopperSocialSecurityNumber": "string",
      "shopperStatement": "string",
      "shopperTelephone": "string",
      "store": "string",
      "tenderReference": "string",
      "terminalId": "string",
      "threeDAuthenticated": "string",
      "threeDAuthenticatedResponse": "string",
      "threeDOffered": "string",
      "threeDOfferedResponse": "string",
      "threeDSVersion": "string",
      "tokenTxVariant": "string",
      "totalFraudScore": "string",
      "untokenisedCardSummary": "string",
      "xid": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "PAIDOUT_REVERSED",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "originalReference": "string",
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "string",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[PaidoutReversedNotificationRequestItem](#schemapaidoutreversednotificationrequestitem)|false|none|none|

<h2 id="tocS_PayoutAdditionalData">PayoutAdditionalData</h2>
<!-- backwards compatibility -->
<a id="schemapayoutadditionaldata"></a>
<a id="schema_PayoutAdditionalData"></a>
<a id="tocSpayoutadditionaldata"></a>
<a id="tocspayoutadditionaldata"></a>

```json
{
  "authCode": "string",
  "bookingDate": "string",
  "cardBin": "string",
  "cardHolderName": "string",
  "cardSummary": "string",
  "expiryDate": "string",
  "fundingSource": "string",
  "hmacSignature": "string",
  "paymentMethodVariant": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authCode|string|false|none|none|
|bookingDate|string|false|none|none|
|cardBin|string|false|none|none|
|cardHolderName|string|false|none|none|
|cardSummary|string|false|none|none|
|expiryDate|string|false|none|none|
|fundingSource|string|false|none|none|
|hmacSignature|string|false|none|none|
|paymentMethodVariant|string|false|none|none|

<h2 id="tocS_PayoutNotificationRequest">PayoutNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapayoutnotificationrequest"></a>
<a id="schema_PayoutNotificationRequest"></a>
<a id="tocSpayoutnotificationrequest"></a>
<a id="tocspayoutnotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "authCode": "string",
          "bookingDate": "string",
          "cardBin": "string",
          "cardHolderName": "string",
          "cardSummary": "string",
          "expiryDate": "string",
          "fundingSource": "string",
          "hmacSignature": "string",
          "paymentMethodVariant": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[PayoutNotificationRequestItemWrapper](#schemapayoutnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_PayoutNotificationRequestItem">PayoutNotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemapayoutnotificationrequestitem"></a>
<a id="schema_PayoutNotificationRequestItem"></a>
<a id="tocSpayoutnotificationrequestitem"></a>
<a id="tocspayoutnotificationrequestitem"></a>

```json
{
  "additionalData": {
    "authCode": "string",
    "bookingDate": "string",
    "cardBin": "string",
    "cardHolderName": "string",
    "cardSummary": "string",
    "expiryDate": "string",
    "fundingSource": "string",
    "hmacSignature": "string",
    "paymentMethodVariant": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[PayoutAdditionalData](#schemapayoutadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_PayoutNotificationRequestItem-recursive">PayoutNotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemapayoutnotificationrequestitem-recursive"></a>
<a id="schema_PayoutNotificationRequestItem-recursive"></a>
<a id="tocSpayoutnotificationrequestitem-recursive"></a>
<a id="tocspayoutnotificationrequestitem-recursive"></a>

```json
{
  "additionalData": {
    "authCode": "string",
    "bookingDate": "string",
    "cardBin": "string",
    "cardHolderName": "string",
    "cardSummary": "string",
    "expiryDate": "string",
    "fundingSource": "string",
    "hmacSignature": "string",
    "paymentMethodVariant": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[PayoutAdditionalData](#schemapayoutadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_PayoutNotificationRequestItemWrapper">PayoutNotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemapayoutnotificationrequestitemwrapper"></a>
<a id="schema_PayoutNotificationRequestItemWrapper"></a>
<a id="tocSpayoutnotificationrequestitemwrapper"></a>
<a id="tocspayoutnotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "authCode": "string",
      "bookingDate": "string",
      "cardBin": "string",
      "cardHolderName": "string",
      "cardSummary": "string",
      "expiryDate": "string",
      "fundingSource": "string",
      "hmacSignature": "string",
      "paymentMethodVariant": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "AUTHENTICATION",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "originalReference": "string",
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "string",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[PayoutNotificationRequestItem](#schemapayoutnotificationrequestitem)|false|none|none|

<h2 id="tocS_PrearbitrationAcceptedNotificationRequest">PrearbitrationAcceptedNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprearbitrationacceptednotificationrequest"></a>
<a id="schema_PrearbitrationAcceptedNotificationRequest"></a>
<a id="tocSprearbitrationacceptednotificationrequest"></a>
<a id="tocsprearbitrationacceptednotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_PrearbitrationDeclineNotificationRequest">PrearbitrationDeclineNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprearbitrationdeclinenotificationrequest"></a>
<a id="schema_PrearbitrationDeclineNotificationRequest"></a>
<a id="tocSprearbitrationdeclinenotificationrequest"></a>
<a id="tocsprearbitrationdeclinenotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_PrearbitrationIssuerWithdrawnNotificationRequest">PrearbitrationIssuerWithdrawnNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprearbitrationissuerwithdrawnnotificationrequest"></a>
<a id="schema_PrearbitrationIssuerWithdrawnNotificationRequest"></a>
<a id="tocSprearbitrationissuerwithdrawnnotificationrequest"></a>
<a id="tocsprearbitrationissuerwithdrawnnotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_PrearbitrationLostNotificationRequest">PrearbitrationLostNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprearbitrationlostnotificationrequest"></a>
<a id="schema_PrearbitrationLostNotificationRequest"></a>
<a id="tocSprearbitrationlostnotificationrequest"></a>
<a id="tocsprearbitrationlostnotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_PrearbitrationOpenNotificationRequest">PrearbitrationOpenNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprearbitrationopennotificationrequest"></a>
<a id="schema_PrearbitrationOpenNotificationRequest"></a>
<a id="tocSprearbitrationopennotificationrequest"></a>
<a id="tocsprearbitrationopennotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_PrearbitrationSchemeArbitrationNotificationRequest">PrearbitrationSchemeArbitrationNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprearbitrationschemearbitrationnotificationrequest"></a>
<a id="schema_PrearbitrationSchemeArbitrationNotificationRequest"></a>
<a id="tocSprearbitrationschemearbitrationnotificationrequest"></a>
<a id="tocsprearbitrationschemearbitrationnotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_PrearbitrationWonNotificationRequest">PrearbitrationWonNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprearbitrationwonnotificationrequest"></a>
<a id="schema_PrearbitrationWonNotificationRequest"></a>
<a id="tocSprearbitrationwonnotificationrequest"></a>
<a id="tocsprearbitrationwonnotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_RecurringContractNotificationAdditionalData">RecurringContractNotificationAdditionalData</h2>
<!-- backwards compatibility -->
<a id="schemarecurringcontractnotificationadditionaldata"></a>
<a id="schema_RecurringContractNotificationAdditionalData"></a>
<a id="tocSrecurringcontractnotificationadditionaldata"></a>
<a id="tocsrecurringcontractnotificationadditionaldata"></a>

```json
{
  "GoPay.gopayAccountId": "string",
  "PaymentAccountReference": "string",
  "acquirerAccountCode": "string",
  "acquirerCode": "string",
  "acquirerReference": "string",
  "acsRenderingType.acsInterface": "string",
  "acsRenderingType.acsUiTemplate": "string",
  "alias": "string",
  "aliasType": "string",
  "arn": "string",
  "authCode": "string",
  "authenticationType": "string",
  "authorisationMid": "string",
  "authorisedAmountCurrency": "string",
  "authorisedAmountValue": "string",
  "avsResult": "string",
  "avsResultRaw": "string",
  "bankAccountNumber": "string",
  "bankLocation": "string",
  "bankLocationId": "string",
  "bankName": "string",
  "bankVerificationResult": "string",
  "bankVerificationResultRaw": "string",
  "bic": "string",
  "billingAddress.city": "string",
  "billingAddress.houseNumberOrName": "string",
  "billingAddress.postalCode": "string",
  "billingAddress.stateOrProvince": "string",
  "billingAddress.street": "string",
  "browserCode": "string",
  "captureDelayHours": "string",
  "captureMerchantReference": "string",
  "capturePspReference": "string",
  "cardBin": "string",
  "cardIssuingBank": "string",
  "cardIssuingCountry": "string",
  "cardIssuingCurrency": "string",
  "cardPaymentMethod": "string",
  "cardSchemeEnhancedDataLevel": "string",
  "cardSummary": "string",
  "cavv": "string",
  "cavvAlgorithm": "string",
  "challengeCancel": "string",
  "checkoutSessionId": "string",
  "cvcResult": "string",
  "cvcResultRaw": "string",
  "deliveryAddress.city": "string",
  "deliveryAddress.country": "string",
  "deliveryAddress.houseNumberOrName": "string",
  "deliveryAddress.postalCode": "string",
  "deliveryAddress.stateOrProvince": "string",
  "deliveryAddress.street": "string",
  "deviceType": "string",
  "directdebit_GB.dateOfSignature": "string",
  "directdebit_GB.mandateId": "string",
  "directdebit_GB.sequenceType": "string",
  "directdebit_GB.serviceUserName": "string",
  "directdebit_GB.serviceUserNumber": "string",
  "eci": "string",
  "expiryDate": "string",
  "extraCostsCurrency": "string",
  "extraCostsValue": "string",
  "extraCostsValueGratuity": "string",
  "extraCostsValueSurcharge": "string",
  "fraudCheck-<check ID>-<name>": "string",
  "fraudManualReview": "string",
  "fraudOffset": "string",
  "fraudResultType": "string",
  "fraudRiskLevel": "veryLow",
  "fundingSource": "string",
  "grossCurrency": "string",
  "grossValue": "string",
  "iban": "string",
  "installments.value": "string",
  "interactionCounter": "string",
  "issuerComments.cardholderName": "string",
  "issuerCountry": "string",
  "latestCard.bin": "string",
  "latestCard.expiryDate": "string",
  "latestCard.summary": "string",
  "liabilityShift": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "networkProcessingMode": "string",
  "networkToken.available": "string",
  "networkToken.bin": "string",
  "networkToken.tokenSummary": "string",
  "networkTxDate": "string",
  "networkTxReference": "string",
  "nfc.expire": "string",
  "nfc.issue": "string",
  "nfc.pin.provided": "string",
  "nfc.uid": "string",
  "opi.transToken": "string",
  "ownerCity": "string",
  "ownerName": "string",
  "payULatamTrazabilityCode": "string",
  "paymentLinkId": "string",
  "realtimeAccountUpdaterStatus": "string",
  "recurring.contractTypes": "string",
  "recurring.firstPspReference": "string",
  "recurring.recurringDetailReference": "string",
  "referred": "string",
  "refusalReasonRaw": "string",
  "retry.rescueScheduled": "string",
  "riskProfile": "string",
  "riskProfileReference": "string",
  "shopperCountry": "string",
  "shopperEmail": "string",
  "shopperIP": "string",
  "shopperInteraction": "string",
  "shopperLocale": "string",
  "shopperReference": "string",
  "shopperSocialSecurityNumber": "string",
  "shopperStatement": "string",
  "shopperTelephone": "string",
  "store": "string",
  "tenderReference": "string",
  "terminalId": "string",
  "threeDAuthenticated": "string",
  "threeDAuthenticatedResponse": "string",
  "threeDOffered": "string",
  "threeDOfferedResponse": "string",
  "threeDSVersion": "string",
  "tokenTxVariant": "string",
  "totalFraudScore": "string",
  "untokenisedCardSummary": "string",
  "xid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GoPay.gopayAccountId|string|false|none|A GoPay shopper's wallet ID. Used by merchant for Risk and Fraud checks.|
|PaymentAccountReference|string|false|none|Reference of the payment account.|
|acquirerAccountCode|string|false|none|The acquirer account code.|
|acquirerCode|string|false|none|The acquirer code.|
|acquirerReference|string|false|none|The acquirer reference.|
|acsRenderingType.acsInterface|string|false|none|ACS interface. Related to 3DS.|
|acsRenderingType.acsUiTemplate|string|false|none|ACS UI template.|
|alias|string|false|none|Alias for this card.|
|aliasType|string|false|none|Alias type.|
|arn|string|false|none|Acquirer Reference Number of the dispute.|
|authCode|string|false|none|Authcode of the scheme.|
|authenticationType|string|false|none|3DS authentication type|
|authorisationMid|string|false|none|Authorisation MID of the acquirer.|
|authorisedAmountCurrency|string|false|none|The currency authorised for a dynamic zero auth request.|
|authorisedAmountValue|string|false|none|The amount authorised for a dynamic zero auth request.|
|avsResult|string|false|none|Address Verification Service result.|
|avsResultRaw|string|false|none|Address Verification Service result raw.|
|bankAccountNumber|string|false|none|The bank account number.|
|bankLocation|string|false|none|The bank location.|
|bankLocationId|string|false|none|The bank location ID.|
|bankName|string|false|none|The bank name.|
|bankVerificationResult|string|false|none|The bank verification result.|
|bankVerificationResultRaw|string|false|none|The bank verification result raw.|
|bic|string|false|none|Business Identifier Code.|
|billingAddress.city|string|false|none|BillingAddress: county.|
|billingAddress.houseNumberOrName|string|false|none|BillingAddress: house number or name.|
|billingAddress.postalCode|string|false|none|BillingAddress: postal code.|
|billingAddress.stateOrProvince|string|false|none|BillingAddress: state or province|
|billingAddress.street|string|false|none|BillingAddress: street|
|browserCode|string|false|none|Browser code.|
|captureDelayHours|string|false|none|The amount of delay after authorisation.|
|captureMerchantReference|string|false|none|The merchant reference of the capture.|
|capturePspReference|string|false|none|The PSP reference of the capture.|
|cardBin|string|false|none|Card Bank Identification number.|
|cardIssuingBank|string|false|none|Card issuing bank.|
|cardIssuingCountry|string|false|none|Card issuing country.|
|cardIssuingCurrency|string|false|none|Card issuing currency.|
|cardPaymentMethod|string|false|none|Card payment method.|
|cardSchemeEnhancedDataLevel|string|false|none|Card scheme enhanced data level.|
|cardSummary|string|false|none|Card summary|
|cavv|string|false|none|Secure Cardholder Authentication Verification Value.|
|cavvAlgorithm|string|false|none|CAVV algorithm.|
|challengeCancel|string|false|none|Information about the 3DS challenge being canceled.|
|checkoutSessionId|string|false|none|ID of the Checkout Session.|
|cvcResult|string|false|none|Card Verification Code result.|
|cvcResultRaw|string|false|none|Card Verification Code result raw.|
|deliveryAddress.city|string|false|none|Delivery address: city.|
|deliveryAddress.country|string|false|none|Delivery address: country.|
|deliveryAddress.houseNumberOrName|string|false|none|Delivery address: house number or name.|
|deliveryAddress.postalCode|string|false|none|Delivery address: postal code.|
|deliveryAddress.stateOrProvince|string|false|none|Delivery address: state or province.|
|deliveryAddress.street|string|false|none|Delivery address: street.|
|deviceType|string|false|none|Type of device the request was made from.|
|directdebit_GB.dateOfSignature|string|false|none|Direct debit GB: date of signature.|
|directdebit_GB.mandateId|string|false|none|Direct debit GB: mandate ID.|
|directdebit_GB.sequenceType|string|false|none|Direct debit GB: sequence type.|
|directdebit_GB.serviceUserName|string|false|none|Direct debit GB: service user name.|
|directdebit_GB.serviceUserNumber|string|false|none|Direct debit GB: service user number.|
|eci|string|false|none|3DS: Electronic Commerce Indicator.|
|expiryDate|string|false|none|Expiry date of the card.|
|extraCostsCurrency|string|false|none|Additional cost used in [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification).|
|extraCostsValue|string|false|none|Related additional cost value.|
|extraCostsValueGratuity|string|false|none|Gratuity related additional cost value.|
|extraCostsValueSurcharge|string|false|none|Surcharge related additional cost value.|
|fraudCheck-<check ID>-<name>|string|false|none|Information on the fraud check in a dynamic format.|
|fraudManualReview|string|false|none|Indicates if the risk check was done manually.|
|fraudOffset|string|false|none|The fraud offset.|
|fraudResultType|string|false|none|Result type of the fraud check.|
|fraudRiskLevel|string|false|none|The risk level of the transaction as classified by the [machine learning](https://docs.adyen.com/risk-management/configure-your-risk-profile/machine-learning-rules/) fraud risk rule. The risk level indicates the likelihood that a transaction will result in a fraudulent dispute. Possible values:<br>* veryLow<br>* low<br>* medium<br>* high<br>* veryHigh<br><br>|
|fundingSource|string|false|none|Funding source.|
|grossCurrency|string|false|none|Chargeback gross currency.|
|grossValue|string|false|none|Chargeback gross value.|
|iban|string|false|none|International Bank Account Number.|
|installments.value|string|false|none|The number of installments that the payment amount should be charged with.<br><br>Example: 5<br>> Only relevant for card payments in countries that support installments.|
|interactionCounter|string|false|none|3DS interaction counter.|
|issuerComments.cardholderName|string|false|none|Card holder name.|
|issuerCountry|string|false|none|Country of the card issuer.|
|latestCard.bin|string|false|none|Recurring: Latest card BIN.|
|latestCard.expiryDate|string|false|none|Recurring: Latest card expiry date.|
|latestCard.summary|string|false|none|Recurring: Latest card summary.|
|liabilityShift|string|false|none|Risk liability shift.|
|metadata|object|false|none|A set of key-value pairs provided in the request, prefixed with 'metadata.'. For example, 'metadata.myField: myValue'|
|networkProcessingMode|string|false|none|Indicates the processing flow.<br><br>Possible values:<br>* **sale**: You do not need to separately capture the funds, because capture happens automatically as part of the transaction. <br>* **auth**: If you have not [configured automatic capture for the transaction](https://docs.adyen.com/online-payments/capture#types-of-capture), you must manually capture the funds.|
|networkToken.available|string|false|none|Recurring related.|
|networkToken.bin|string|false|none|Recurring related.|
|networkToken.tokenSummary|string|false|none|Recurring related.|
|networkTxDate|string|false|none|The network transaction date for Mastercard transactions processed by Bank of America Merchant Services (BAMS).|
|networkTxReference|string|false|none|The network transaction reference from the scheme, when available.|
|nfc.expire|string|false|none|NFC related.|
|nfc.issue|string|false|none|NFC related.|
|nfc.pin.provided|string|false|none|NFC related.|
|nfc.uid|string|false|none|NFC related.|
|opi.transToken|string|false|none|Trans token related to Oracle Opera.|
|ownerCity|string|false|none|Owner city.|
|ownerName|string|false|none|Owner name.|
|payULatamTrazabilityCode|string|false|none|Related to PayU in LATAM.|
|paymentLinkId|string|false|none|ID of the Checkout payment link.|
|realtimeAccountUpdaterStatus|string|false|none|Real time Account Update status.|
|recurring.contractTypes|string|false|none|Recurring contract types.|
|recurring.firstPspReference|string|false|none|Recurring first PSP reference.|
|recurring.recurringDetailReference|string|false|none|The [token for stored payment details](https://docs.adyen.com/online-payments/tokenization/create-and-use-tokens/) to make recurring payments.|
|referred|string|false|none|If the payment is referred, this field is set to true.<br><br>This field is unavailable if the payment is referred and is usually not returned with ecommerce transactions.<br><br>Example: true|
|refusalReasonRaw|string|false|none|Raw refusal reason received from the acquirer, where available.<br><br>Example: AUTHORISED|
|retry.rescueScheduled|string|false|none|Indicates if an auto rescue for a payment is scheduled.|
|riskProfile|string|false|none|Related to Risk.|
|riskProfileReference|string|false|none|Related to Risk.|
|shopperCountry|string|false|none|Country of the shopper.|
|shopperEmail|string|false|none|Email of the shopper.|
|shopperIP|string|false|none|IP of the shopper.|
|shopperInteraction|string|false|none|The shopper interaction type of the payment request.<br><br>Example: Ecommerce|
|shopperLocale|string|false|none|The locale of the shopper.|
|shopperReference|string|false|none|The ID that uniquely identifies the shopper. The `shopperReference` is the same as the `shopperReference` used in the initial payment.|
|shopperSocialSecurityNumber|string|false|none|The social security number of the shopper.|
|shopperStatement|string|false|none|The text to be shown on the shopper's bank statement.|
|shopperTelephone|string|false|none|The telephone number of the shopper.|
|store|string|false|none|Identifier of the store processing the transaction.|
|tenderReference|string|false|none|Tender reference. For point-of-sale integrations only.|
|terminalId|string|false|none|Terminal ID. For point-of-sale integrations only.|
|threeDAuthenticated|string|false|none|A Boolean value indicating whether 3DS authentication was completed on this payment.<br><br>Example: true|
|threeDAuthenticatedResponse|string|false|none|The raw 3DS authentication result from the card issuer.<br><br>Example: N|
|threeDOffered|string|false|none|A Boolean value indicating whether 3DS was offered for this payment.<br><br>Example: true|
|threeDOfferedResponse|string|false|none|The raw enrollment result from the 3DS directory services of the card schemes.<br><br>Example: Y|
|threeDSVersion|string|false|none|The 3D Secure 2 version.|
|tokenTxVariant|string|false|none|Payment method variant of the token/wallet payment method.|
|totalFraudScore|string|false|none|Total fraud score from risk.|
|untokenisedCardSummary|string|false|none|Card summary without tokenization.|
|xid|string|false|none|The 3DS transaction ID of the 3DS session sent in notifications. The value is Base64-encoded and is returned for transactions with directoryResponse 'N' or 'Y'. <br><br>Example: ODgxNDc2MDg2MDExODk5MAAAAAA=|

#### Enumerated Values

|Property|Value|
|---|---|
|fraudRiskLevel|veryLow|
|fraudRiskLevel|low|
|fraudRiskLevel|medium|
|fraudRiskLevel|high|
|fraudRiskLevel|veryHigh|

<h2 id="tocS_RecurringContractNotificationRequest">RecurringContractNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemarecurringcontractnotificationrequest"></a>
<a id="schema_RecurringContractNotificationRequest"></a>
<a id="tocSrecurringcontractnotificationrequest"></a>
<a id="tocsrecurringcontractnotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "GoPay.gopayAccountId": "string",
          "PaymentAccountReference": "string",
          "acquirerAccountCode": "string",
          "acquirerCode": "string",
          "acquirerReference": "string",
          "acsRenderingType.acsInterface": "string",
          "acsRenderingType.acsUiTemplate": "string",
          "alias": "string",
          "aliasType": "string",
          "arn": "string",
          "authCode": "string",
          "authenticationType": "string",
          "authorisationMid": "string",
          "authorisedAmountCurrency": "string",
          "authorisedAmountValue": "string",
          "avsResult": "string",
          "avsResultRaw": "string",
          "bankAccountNumber": "string",
          "bankLocation": "string",
          "bankLocationId": "string",
          "bankName": "string",
          "bankVerificationResult": "string",
          "bankVerificationResultRaw": "string",
          "bic": "string",
          "billingAddress.city": "string",
          "billingAddress.houseNumberOrName": "string",
          "billingAddress.postalCode": "string",
          "billingAddress.stateOrProvince": "string",
          "billingAddress.street": "string",
          "browserCode": "string",
          "captureDelayHours": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "cardBin": "string",
          "cardIssuingBank": "string",
          "cardIssuingCountry": "string",
          "cardIssuingCurrency": "string",
          "cardPaymentMethod": "string",
          "cardSchemeEnhancedDataLevel": "string",
          "cardSummary": "string",
          "cavv": "string",
          "cavvAlgorithm": "string",
          "challengeCancel": "string",
          "checkoutSessionId": "string",
          "cvcResult": "string",
          "cvcResultRaw": "string",
          "deliveryAddress.city": "string",
          "deliveryAddress.country": "string",
          "deliveryAddress.houseNumberOrName": "string",
          "deliveryAddress.postalCode": "string",
          "deliveryAddress.stateOrProvince": "string",
          "deliveryAddress.street": "string",
          "deviceType": "string",
          "directdebit_GB.dateOfSignature": "string",
          "directdebit_GB.mandateId": "string",
          "directdebit_GB.sequenceType": "string",
          "directdebit_GB.serviceUserName": "string",
          "directdebit_GB.serviceUserNumber": "string",
          "eci": "string",
          "expiryDate": "string",
          "extraCostsCurrency": "string",
          "extraCostsValue": "string",
          "extraCostsValueGratuity": "string",
          "extraCostsValueSurcharge": "string",
          "fraudCheck-<check ID>-<name>": "string",
          "fraudManualReview": "string",
          "fraudOffset": "string",
          "fraudResultType": "string",
          "fraudRiskLevel": "veryLow",
          "fundingSource": "string",
          "grossCurrency": "string",
          "grossValue": "string",
          "iban": "string",
          "installments.value": "string",
          "interactionCounter": "string",
          "issuerComments.cardholderName": "string",
          "issuerCountry": "string",
          "latestCard.bin": "string",
          "latestCard.expiryDate": "string",
          "latestCard.summary": "string",
          "liabilityShift": "string",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "networkProcessingMode": "string",
          "networkToken.available": "string",
          "networkToken.bin": "string",
          "networkToken.tokenSummary": "string",
          "networkTxDate": "string",
          "networkTxReference": "string",
          "nfc.expire": "string",
          "nfc.issue": "string",
          "nfc.pin.provided": "string",
          "nfc.uid": "string",
          "opi.transToken": "string",
          "ownerCity": "string",
          "ownerName": "string",
          "payULatamTrazabilityCode": "string",
          "paymentLinkId": "string",
          "realtimeAccountUpdaterStatus": "string",
          "recurring.contractTypes": "string",
          "recurring.firstPspReference": "string",
          "recurring.recurringDetailReference": "string",
          "referred": "string",
          "refusalReasonRaw": "string",
          "retry.rescueScheduled": "string",
          "riskProfile": "string",
          "riskProfileReference": "string",
          "shopperCountry": "string",
          "shopperEmail": "string",
          "shopperIP": "string",
          "shopperInteraction": "string",
          "shopperLocale": "string",
          "shopperReference": "string",
          "shopperSocialSecurityNumber": "string",
          "shopperStatement": "string",
          "shopperTelephone": "string",
          "store": "string",
          "tenderReference": "string",
          "terminalId": "string",
          "threeDAuthenticated": "string",
          "threeDAuthenticatedResponse": "string",
          "threeDOffered": "string",
          "threeDOfferedResponse": "string",
          "threeDSVersion": "string",
          "tokenTxVariant": "string",
          "totalFraudScore": "string",
          "untokenisedCardSummary": "string",
          "xid": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "RECURRING_CONTRACT",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalPsp": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[RecurringContractNotificationRequestItemWrapper](#schemarecurringcontractnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_RecurringContractNotificationRequestItem">RecurringContractNotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemarecurringcontractnotificationrequestitem"></a>
<a id="schema_RecurringContractNotificationRequestItem"></a>
<a id="tocSrecurringcontractnotificationrequestitem"></a>
<a id="tocsrecurringcontractnotificationrequestitem"></a>

```json
{
  "additionalData": {
    "GoPay.gopayAccountId": "string",
    "PaymentAccountReference": "string",
    "acquirerAccountCode": "string",
    "acquirerCode": "string",
    "acquirerReference": "string",
    "acsRenderingType.acsInterface": "string",
    "acsRenderingType.acsUiTemplate": "string",
    "alias": "string",
    "aliasType": "string",
    "arn": "string",
    "authCode": "string",
    "authenticationType": "string",
    "authorisationMid": "string",
    "authorisedAmountCurrency": "string",
    "authorisedAmountValue": "string",
    "avsResult": "string",
    "avsResultRaw": "string",
    "bankAccountNumber": "string",
    "bankLocation": "string",
    "bankLocationId": "string",
    "bankName": "string",
    "bankVerificationResult": "string",
    "bankVerificationResultRaw": "string",
    "bic": "string",
    "billingAddress.city": "string",
    "billingAddress.houseNumberOrName": "string",
    "billingAddress.postalCode": "string",
    "billingAddress.stateOrProvince": "string",
    "billingAddress.street": "string",
    "browserCode": "string",
    "captureDelayHours": "string",
    "captureMerchantReference": "string",
    "capturePspReference": "string",
    "cardBin": "string",
    "cardIssuingBank": "string",
    "cardIssuingCountry": "string",
    "cardIssuingCurrency": "string",
    "cardPaymentMethod": "string",
    "cardSchemeEnhancedDataLevel": "string",
    "cardSummary": "string",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "string",
    "checkoutSessionId": "string",
    "cvcResult": "string",
    "cvcResultRaw": "string",
    "deliveryAddress.city": "string",
    "deliveryAddress.country": "string",
    "deliveryAddress.houseNumberOrName": "string",
    "deliveryAddress.postalCode": "string",
    "deliveryAddress.stateOrProvince": "string",
    "deliveryAddress.street": "string",
    "deviceType": "string",
    "directdebit_GB.dateOfSignature": "string",
    "directdebit_GB.mandateId": "string",
    "directdebit_GB.sequenceType": "string",
    "directdebit_GB.serviceUserName": "string",
    "directdebit_GB.serviceUserNumber": "string",
    "eci": "string",
    "expiryDate": "string",
    "extraCostsCurrency": "string",
    "extraCostsValue": "string",
    "extraCostsValueGratuity": "string",
    "extraCostsValueSurcharge": "string",
    "fraudCheck-<check ID>-<name>": "string",
    "fraudManualReview": "string",
    "fraudOffset": "string",
    "fraudResultType": "string",
    "fraudRiskLevel": "veryLow",
    "fundingSource": "string",
    "grossCurrency": "string",
    "grossValue": "string",
    "iban": "string",
    "installments.value": "string",
    "interactionCounter": "string",
    "issuerComments.cardholderName": "string",
    "issuerCountry": "string",
    "latestCard.bin": "string",
    "latestCard.expiryDate": "string",
    "latestCard.summary": "string",
    "liabilityShift": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "networkProcessingMode": "string",
    "networkToken.available": "string",
    "networkToken.bin": "string",
    "networkToken.tokenSummary": "string",
    "networkTxDate": "string",
    "networkTxReference": "string",
    "nfc.expire": "string",
    "nfc.issue": "string",
    "nfc.pin.provided": "string",
    "nfc.uid": "string",
    "opi.transToken": "string",
    "ownerCity": "string",
    "ownerName": "string",
    "payULatamTrazabilityCode": "string",
    "paymentLinkId": "string",
    "realtimeAccountUpdaterStatus": "string",
    "recurring.contractTypes": "string",
    "recurring.firstPspReference": "string",
    "recurring.recurringDetailReference": "string",
    "referred": "string",
    "refusalReasonRaw": "string",
    "retry.rescueScheduled": "string",
    "riskProfile": "string",
    "riskProfileReference": "string",
    "shopperCountry": "string",
    "shopperEmail": "string",
    "shopperIP": "string",
    "shopperInteraction": "string",
    "shopperLocale": "string",
    "shopperReference": "string",
    "shopperSocialSecurityNumber": "string",
    "shopperStatement": "string",
    "shopperTelephone": "string",
    "store": "string",
    "tenderReference": "string",
    "terminalId": "string",
    "threeDAuthenticated": "string",
    "threeDAuthenticatedResponse": "string",
    "threeDOffered": "string",
    "threeDOfferedResponse": "string",
    "threeDSVersion": "string",
    "tokenTxVariant": "string",
    "totalFraudScore": "string",
    "untokenisedCardSummary": "string",
    "xid": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "RECURRING_CONTRACT",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalPsp": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[RecurringContractNotificationAdditionalData](#schemarecurringcontractnotificationadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalPsp|string|true|none|The `pspReference` of the initial payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|The [token for stored payment details](https://docs.adyen.com/online-payments/tokenization/create-and-use-tokens/) to make recurring payments. This is the same as the `recurringDetailReference`.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|RECURRING_CONTRACT|

<h2 id="tocS_RecurringContractNotificationRequestItem-recursive">RecurringContractNotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemarecurringcontractnotificationrequestitem-recursive"></a>
<a id="schema_RecurringContractNotificationRequestItem-recursive"></a>
<a id="tocSrecurringcontractnotificationrequestitem-recursive"></a>
<a id="tocsrecurringcontractnotificationrequestitem-recursive"></a>

```json
{
  "additionalData": {
    "GoPay.gopayAccountId": "string",
    "PaymentAccountReference": "string",
    "acquirerAccountCode": "string",
    "acquirerCode": "string",
    "acquirerReference": "string",
    "acsRenderingType.acsInterface": "string",
    "acsRenderingType.acsUiTemplate": "string",
    "alias": "string",
    "aliasType": "string",
    "arn": "string",
    "authCode": "string",
    "authenticationType": "string",
    "authorisationMid": "string",
    "authorisedAmountCurrency": "string",
    "authorisedAmountValue": "string",
    "avsResult": "string",
    "avsResultRaw": "string",
    "bankAccountNumber": "string",
    "bankLocation": "string",
    "bankLocationId": "string",
    "bankName": "string",
    "bankVerificationResult": "string",
    "bankVerificationResultRaw": "string",
    "bic": "string",
    "billingAddress.city": "string",
    "billingAddress.houseNumberOrName": "string",
    "billingAddress.postalCode": "string",
    "billingAddress.stateOrProvince": "string",
    "billingAddress.street": "string",
    "browserCode": "string",
    "captureDelayHours": "string",
    "captureMerchantReference": "string",
    "capturePspReference": "string",
    "cardBin": "string",
    "cardIssuingBank": "string",
    "cardIssuingCountry": "string",
    "cardIssuingCurrency": "string",
    "cardPaymentMethod": "string",
    "cardSchemeEnhancedDataLevel": "string",
    "cardSummary": "string",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "string",
    "checkoutSessionId": "string",
    "cvcResult": "string",
    "cvcResultRaw": "string",
    "deliveryAddress.city": "string",
    "deliveryAddress.country": "string",
    "deliveryAddress.houseNumberOrName": "string",
    "deliveryAddress.postalCode": "string",
    "deliveryAddress.stateOrProvince": "string",
    "deliveryAddress.street": "string",
    "deviceType": "string",
    "directdebit_GB.dateOfSignature": "string",
    "directdebit_GB.mandateId": "string",
    "directdebit_GB.sequenceType": "string",
    "directdebit_GB.serviceUserName": "string",
    "directdebit_GB.serviceUserNumber": "string",
    "eci": "string",
    "expiryDate": "string",
    "extraCostsCurrency": "string",
    "extraCostsValue": "string",
    "extraCostsValueGratuity": "string",
    "extraCostsValueSurcharge": "string",
    "fraudCheck-<check ID>-<name>": "string",
    "fraudManualReview": "string",
    "fraudOffset": "string",
    "fraudResultType": "string",
    "fraudRiskLevel": "veryLow",
    "fundingSource": "string",
    "grossCurrency": "string",
    "grossValue": "string",
    "iban": "string",
    "installments.value": "string",
    "interactionCounter": "string",
    "issuerComments.cardholderName": "string",
    "issuerCountry": "string",
    "latestCard.bin": "string",
    "latestCard.expiryDate": "string",
    "latestCard.summary": "string",
    "liabilityShift": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "networkProcessingMode": "string",
    "networkToken.available": "string",
    "networkToken.bin": "string",
    "networkToken.tokenSummary": "string",
    "networkTxDate": "string",
    "networkTxReference": "string",
    "nfc.expire": "string",
    "nfc.issue": "string",
    "nfc.pin.provided": "string",
    "nfc.uid": "string",
    "opi.transToken": "string",
    "ownerCity": "string",
    "ownerName": "string",
    "payULatamTrazabilityCode": "string",
    "paymentLinkId": "string",
    "realtimeAccountUpdaterStatus": "string",
    "recurring.contractTypes": "string",
    "recurring.firstPspReference": "string",
    "recurring.recurringDetailReference": "string",
    "referred": "string",
    "refusalReasonRaw": "string",
    "retry.rescueScheduled": "string",
    "riskProfile": "string",
    "riskProfileReference": "string",
    "shopperCountry": "string",
    "shopperEmail": "string",
    "shopperIP": "string",
    "shopperInteraction": "string",
    "shopperLocale": "string",
    "shopperReference": "string",
    "shopperSocialSecurityNumber": "string",
    "shopperStatement": "string",
    "shopperTelephone": "string",
    "store": "string",
    "tenderReference": "string",
    "terminalId": "string",
    "threeDAuthenticated": "string",
    "threeDAuthenticatedResponse": "string",
    "threeDOffered": "string",
    "threeDOfferedResponse": "string",
    "threeDSVersion": "string",
    "tokenTxVariant": "string",
    "totalFraudScore": "string",
    "untokenisedCardSummary": "string",
    "xid": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "RECURRING_CONTRACT",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalPsp": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[RecurringContractNotificationAdditionalData](#schemarecurringcontractnotificationadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalPsp|string|true|none|The `pspReference` of the initial payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|The [token for stored payment details](https://docs.adyen.com/online-payments/tokenization/create-and-use-tokens/) to make recurring payments. This is the same as the `recurringDetailReference`.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|RECURRING_CONTRACT|

<h2 id="tocS_RecurringContractNotificationRequestItemWrapper">RecurringContractNotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemarecurringcontractnotificationrequestitemwrapper"></a>
<a id="schema_RecurringContractNotificationRequestItemWrapper"></a>
<a id="tocSrecurringcontractnotificationrequestitemwrapper"></a>
<a id="tocsrecurringcontractnotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "GoPay.gopayAccountId": "string",
      "PaymentAccountReference": "string",
      "acquirerAccountCode": "string",
      "acquirerCode": "string",
      "acquirerReference": "string",
      "acsRenderingType.acsInterface": "string",
      "acsRenderingType.acsUiTemplate": "string",
      "alias": "string",
      "aliasType": "string",
      "arn": "string",
      "authCode": "string",
      "authenticationType": "string",
      "authorisationMid": "string",
      "authorisedAmountCurrency": "string",
      "authorisedAmountValue": "string",
      "avsResult": "string",
      "avsResultRaw": "string",
      "bankAccountNumber": "string",
      "bankLocation": "string",
      "bankLocationId": "string",
      "bankName": "string",
      "bankVerificationResult": "string",
      "bankVerificationResultRaw": "string",
      "bic": "string",
      "billingAddress.city": "string",
      "billingAddress.houseNumberOrName": "string",
      "billingAddress.postalCode": "string",
      "billingAddress.stateOrProvince": "string",
      "billingAddress.street": "string",
      "browserCode": "string",
      "captureDelayHours": "string",
      "captureMerchantReference": "string",
      "capturePspReference": "string",
      "cardBin": "string",
      "cardIssuingBank": "string",
      "cardIssuingCountry": "string",
      "cardIssuingCurrency": "string",
      "cardPaymentMethod": "string",
      "cardSchemeEnhancedDataLevel": "string",
      "cardSummary": "string",
      "cavv": "string",
      "cavvAlgorithm": "string",
      "challengeCancel": "string",
      "checkoutSessionId": "string",
      "cvcResult": "string",
      "cvcResultRaw": "string",
      "deliveryAddress.city": "string",
      "deliveryAddress.country": "string",
      "deliveryAddress.houseNumberOrName": "string",
      "deliveryAddress.postalCode": "string",
      "deliveryAddress.stateOrProvince": "string",
      "deliveryAddress.street": "string",
      "deviceType": "string",
      "directdebit_GB.dateOfSignature": "string",
      "directdebit_GB.mandateId": "string",
      "directdebit_GB.sequenceType": "string",
      "directdebit_GB.serviceUserName": "string",
      "directdebit_GB.serviceUserNumber": "string",
      "eci": "string",
      "expiryDate": "string",
      "extraCostsCurrency": "string",
      "extraCostsValue": "string",
      "extraCostsValueGratuity": "string",
      "extraCostsValueSurcharge": "string",
      "fraudCheck-<check ID>-<name>": "string",
      "fraudManualReview": "string",
      "fraudOffset": "string",
      "fraudResultType": "string",
      "fraudRiskLevel": "veryLow",
      "fundingSource": "string",
      "grossCurrency": "string",
      "grossValue": "string",
      "iban": "string",
      "installments.value": "string",
      "interactionCounter": "string",
      "issuerComments.cardholderName": "string",
      "issuerCountry": "string",
      "latestCard.bin": "string",
      "latestCard.expiryDate": "string",
      "latestCard.summary": "string",
      "liabilityShift": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "networkProcessingMode": "string",
      "networkToken.available": "string",
      "networkToken.bin": "string",
      "networkToken.tokenSummary": "string",
      "networkTxDate": "string",
      "networkTxReference": "string",
      "nfc.expire": "string",
      "nfc.issue": "string",
      "nfc.pin.provided": "string",
      "nfc.uid": "string",
      "opi.transToken": "string",
      "ownerCity": "string",
      "ownerName": "string",
      "payULatamTrazabilityCode": "string",
      "paymentLinkId": "string",
      "realtimeAccountUpdaterStatus": "string",
      "recurring.contractTypes": "string",
      "recurring.firstPspReference": "string",
      "recurring.recurringDetailReference": "string",
      "referred": "string",
      "refusalReasonRaw": "string",
      "retry.rescueScheduled": "string",
      "riskProfile": "string",
      "riskProfileReference": "string",
      "shopperCountry": "string",
      "shopperEmail": "string",
      "shopperIP": "string",
      "shopperInteraction": "string",
      "shopperLocale": "string",
      "shopperReference": "string",
      "shopperSocialSecurityNumber": "string",
      "shopperStatement": "string",
      "shopperTelephone": "string",
      "store": "string",
      "tenderReference": "string",
      "terminalId": "string",
      "threeDAuthenticated": "string",
      "threeDAuthenticatedResponse": "string",
      "threeDOffered": "string",
      "threeDOfferedResponse": "string",
      "threeDSVersion": "string",
      "tokenTxVariant": "string",
      "totalFraudScore": "string",
      "untokenisedCardSummary": "string",
      "xid": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "RECURRING_CONTRACT",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "originalPsp": "string",
    "originalReference": "string",
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "string",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[RecurringContractNotificationRequestItem](#schemarecurringcontractnotificationrequestitem)|false|none|none|

<h2 id="tocS_RefundAdditionalData">RefundAdditionalData</h2>
<!-- backwards compatibility -->
<a id="schemarefundadditionaldata"></a>
<a id="schema_RefundAdditionalData"></a>
<a id="tocSrefundadditionaldata"></a>
<a id="tocsrefundadditionaldata"></a>

```json
{
  "acquirerErrorCode": "string",
  "acquirerErrorDescription": "string",
  "acquirerReference": "string",
  "acsRenderingType.acsInterface": "string",
  "acsRenderingType.acsUiTemplate": "string",
  "arn": "string",
  "authenticationType": "string",
  "bookingDate": "string",
  "checkoutSessionId": "string",
  "coBrandedWith": "string",
  "hmacSignature": "string",
  "interactionCounter": "string",
  "merchantOrderReference": "string",
  "networkTxDate": "string",
  "networkTxReference": "string",
  "paymentLinkId": "string",
  "paymentMethodVariant": "string",
  "shopperCountry": "string",
  "store": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquirerErrorCode|string|false|none|none|
|acquirerErrorDescription|string|false|none|none|
|acquirerReference|string|false|none|none|
|acsRenderingType.acsInterface|string|false|none|none|
|acsRenderingType.acsUiTemplate|string|false|none|none|
|arn|string|false|none|none|
|authenticationType|string|false|none|none|
|bookingDate|string|false|none|none|
|checkoutSessionId|string|false|none|none|
|coBrandedWith|string|false|none|none|
|hmacSignature|string|false|none|none|
|interactionCounter|string|false|none|none|
|merchantOrderReference|string|false|none|none|
|networkTxDate|string|false|none|The network transaction date for Mastercard transactions processed by Bank of America Merchant Services (BAMS).|
|networkTxReference|string|false|none|The network transaction reference from the scheme, when available.|
|paymentLinkId|string|false|none|none|
|paymentMethodVariant|string|false|none|none|
|shopperCountry|string|false|none|none|
|store|string|false|none|none|

<h2 id="tocS_RefundCaptureFailedNotificationRequest">RefundCaptureFailedNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemarefundcapturefailednotificationrequest"></a>
<a id="schema_RefundCaptureFailedNotificationRequest"></a>
<a id="tocSrefundcapturefailednotificationrequest"></a>
<a id="tocsrefundcapturefailednotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "acquirerErrorCode": "string",
          "bookingDate": "string",
          "coBrandedWith": "string",
          "hmacSignature": "string",
          "paymentMethodVariant": "string",
          "refusalReason": "string",
          "refusalReasonCode": "string",
          "refusalReasonRaw": "string",
          "shopperCountry": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[RefundCaptureFailedNotificationRequestItemWrapper](#schemarefundcapturefailednotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_RefundCaptureFailedNotificationRequestItem">RefundCaptureFailedNotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemarefundcapturefailednotificationrequestitem"></a>
<a id="schema_RefundCaptureFailedNotificationRequestItem"></a>
<a id="tocSrefundcapturefailednotificationrequestitem"></a>
<a id="tocsrefundcapturefailednotificationrequestitem"></a>

```json
{
  "additionalData": {
    "acquirerErrorCode": "string",
    "bookingDate": "string",
    "coBrandedWith": "string",
    "hmacSignature": "string",
    "paymentMethodVariant": "string",
    "refusalReason": "string",
    "refusalReasonCode": "string",
    "refusalReasonRaw": "string",
    "shopperCountry": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[RefundFailedAdditionalData](#schemarefundfailedadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_RefundCaptureFailedNotificationRequestItem-recursive">RefundCaptureFailedNotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemarefundcapturefailednotificationrequestitem-recursive"></a>
<a id="schema_RefundCaptureFailedNotificationRequestItem-recursive"></a>
<a id="tocSrefundcapturefailednotificationrequestitem-recursive"></a>
<a id="tocsrefundcapturefailednotificationrequestitem-recursive"></a>

```json
{
  "additionalData": {
    "acquirerErrorCode": "string",
    "bookingDate": "string",
    "coBrandedWith": "string",
    "hmacSignature": "string",
    "paymentMethodVariant": "string",
    "refusalReason": "string",
    "refusalReasonCode": "string",
    "refusalReasonRaw": "string",
    "shopperCountry": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[RefundFailedAdditionalData](#schemarefundfailedadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_RefundCaptureFailedNotificationRequestItemWrapper">RefundCaptureFailedNotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemarefundcapturefailednotificationrequestitemwrapper"></a>
<a id="schema_RefundCaptureFailedNotificationRequestItemWrapper"></a>
<a id="tocSrefundcapturefailednotificationrequestitemwrapper"></a>
<a id="tocsrefundcapturefailednotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "acquirerErrorCode": "string",
      "bookingDate": "string",
      "coBrandedWith": "string",
      "hmacSignature": "string",
      "paymentMethodVariant": "string",
      "refusalReason": "string",
      "refusalReasonCode": "string",
      "refusalReasonRaw": "string",
      "shopperCountry": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "AUTHENTICATION",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "originalReference": "string",
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "string",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[RefundCaptureFailedNotificationRequestItem](#schemarefundcapturefailednotificationrequestitem)|false|none|none|

<h2 id="tocS_RefundFailedAdditionalData">RefundFailedAdditionalData</h2>
<!-- backwards compatibility -->
<a id="schemarefundfailedadditionaldata"></a>
<a id="schema_RefundFailedAdditionalData"></a>
<a id="tocSrefundfailedadditionaldata"></a>
<a id="tocsrefundfailedadditionaldata"></a>

```json
{
  "acquirerErrorCode": "string",
  "bookingDate": "string",
  "coBrandedWith": "string",
  "hmacSignature": "string",
  "paymentMethodVariant": "string",
  "refusalReason": "string",
  "refusalReasonCode": "string",
  "refusalReasonRaw": "string",
  "shopperCountry": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquirerErrorCode|string|false|none|none|
|bookingDate|string|false|none|none|
|coBrandedWith|string|false|none|none|
|hmacSignature|string|false|none|none|
|paymentMethodVariant|string|false|none|none|
|refusalReason|string|false|none|The Adyen-mapped [refusal reason](https://docs.adyen.com/development-resources/refusal-reasons).<br><br>Example: **Refused**|
|refusalReasonCode|string|false|none|The Adyen code that maps to the [refusal reason](https://docs.adyen.com/development-resources/refusal-reasons).<br><br>Example: **2**|
|refusalReasonRaw|string|false|none|The raw refusal reason from the acquirer, where available.|
|shopperCountry|string|false|none|none|

<h2 id="tocS_RefundNotClearedNotificationRequest">RefundNotClearedNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemarefundnotclearednotificationrequest"></a>
<a id="schema_RefundNotClearedNotificationRequest"></a>
<a id="tocSrefundnotclearednotificationrequest"></a>
<a id="tocsrefundnotclearednotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "bookingDate": "string",
          "expectedValueDate": "string",
          "hmacSignature": "string",
          "paymentMethodVariant": "string",
          "settlementReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "REFUND_NOT_CLEARED",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[RefundNotClearedNotificationRequestItemWrapper](#schemarefundnotclearednotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_RefundNotClearedNotificationRequestItem">RefundNotClearedNotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemarefundnotclearednotificationrequestitem"></a>
<a id="schema_RefundNotClearedNotificationRequestItem"></a>
<a id="tocSrefundnotclearednotificationrequestitem"></a>
<a id="tocsrefundnotclearednotificationrequestitem"></a>

```json
{
  "additionalData": {
    "bookingDate": "string",
    "expectedValueDate": "string",
    "hmacSignature": "string",
    "paymentMethodVariant": "string",
    "settlementReference": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "REFUND_NOT_CLEARED",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[SettlementReversalAdditionalData](#schemasettlementreversaladditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event for which you receive the webhook.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|true|none|For modifications, this field corresponds to the payment request reference assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|REFUND_NOT_CLEARED|

<h2 id="tocS_RefundNotClearedNotificationRequestItem-recursive">RefundNotClearedNotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemarefundnotclearednotificationrequestitem-recursive"></a>
<a id="schema_RefundNotClearedNotificationRequestItem-recursive"></a>
<a id="tocSrefundnotclearednotificationrequestitem-recursive"></a>
<a id="tocsrefundnotclearednotificationrequestitem-recursive"></a>

```json
{
  "additionalData": {
    "bookingDate": "string",
    "expectedValueDate": "string",
    "hmacSignature": "string",
    "paymentMethodVariant": "string",
    "settlementReference": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "REFUND_NOT_CLEARED",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[SettlementReversalAdditionalData](#schemasettlementreversaladditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event for which you receive the webhook.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|true|none|For modifications, this field corresponds to the payment request reference assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|REFUND_NOT_CLEARED|

<h2 id="tocS_RefundNotClearedNotificationRequestItemWrapper">RefundNotClearedNotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemarefundnotclearednotificationrequestitemwrapper"></a>
<a id="schema_RefundNotClearedNotificationRequestItemWrapper"></a>
<a id="tocSrefundnotclearednotificationrequestitemwrapper"></a>
<a id="tocsrefundnotclearednotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "bookingDate": "string",
      "expectedValueDate": "string",
      "hmacSignature": "string",
      "paymentMethodVariant": "string",
      "settlementReference": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "REFUND_NOT_CLEARED",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "originalReference": "string",
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "string",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[RefundNotClearedNotificationRequestItem](#schemarefundnotclearednotificationrequestitem)|false|none|none|

<h2 id="tocS_RefundNotificationRequest">RefundNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemarefundnotificationrequest"></a>
<a id="schema_RefundNotificationRequest"></a>
<a id="tocSrefundnotificationrequest"></a>
<a id="tocsrefundnotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "acquirerErrorCode": "string",
          "acquirerErrorDescription": "string",
          "acquirerReference": "string",
          "acsRenderingType.acsInterface": "string",
          "acsRenderingType.acsUiTemplate": "string",
          "arn": "string",
          "authenticationType": "string",
          "bookingDate": "string",
          "checkoutSessionId": "string",
          "coBrandedWith": "string",
          "hmacSignature": "string",
          "interactionCounter": "string",
          "merchantOrderReference": "string",
          "networkTxDate": "string",
          "networkTxReference": "string",
          "paymentLinkId": "string",
          "paymentMethodVariant": "string",
          "shopperCountry": "string",
          "store": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[RefundNotificationRequestItemWrapper](#schemarefundnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_RefundNotificationRequestItem">RefundNotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemarefundnotificationrequestitem"></a>
<a id="schema_RefundNotificationRequestItem"></a>
<a id="tocSrefundnotificationrequestitem"></a>
<a id="tocsrefundnotificationrequestitem"></a>

```json
{
  "additionalData": {
    "acquirerErrorCode": "string",
    "acquirerErrorDescription": "string",
    "acquirerReference": "string",
    "acsRenderingType.acsInterface": "string",
    "acsRenderingType.acsUiTemplate": "string",
    "arn": "string",
    "authenticationType": "string",
    "bookingDate": "string",
    "checkoutSessionId": "string",
    "coBrandedWith": "string",
    "hmacSignature": "string",
    "interactionCounter": "string",
    "merchantOrderReference": "string",
    "networkTxDate": "string",
    "networkTxReference": "string",
    "paymentLinkId": "string",
    "paymentMethodVariant": "string",
    "shopperCountry": "string",
    "store": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[RefundAdditionalData](#schemarefundadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_RefundNotificationRequestItem-recursive">RefundNotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemarefundnotificationrequestitem-recursive"></a>
<a id="schema_RefundNotificationRequestItem-recursive"></a>
<a id="tocSrefundnotificationrequestitem-recursive"></a>
<a id="tocsrefundnotificationrequestitem-recursive"></a>

```json
{
  "additionalData": {
    "acquirerErrorCode": "string",
    "acquirerErrorDescription": "string",
    "acquirerReference": "string",
    "acsRenderingType.acsInterface": "string",
    "acsRenderingType.acsUiTemplate": "string",
    "arn": "string",
    "authenticationType": "string",
    "bookingDate": "string",
    "checkoutSessionId": "string",
    "coBrandedWith": "string",
    "hmacSignature": "string",
    "interactionCounter": "string",
    "merchantOrderReference": "string",
    "networkTxDate": "string",
    "networkTxReference": "string",
    "paymentLinkId": "string",
    "paymentMethodVariant": "string",
    "shopperCountry": "string",
    "store": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[RefundAdditionalData](#schemarefundadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_RefundNotificationRequestItemWrapper">RefundNotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemarefundnotificationrequestitemwrapper"></a>
<a id="schema_RefundNotificationRequestItemWrapper"></a>
<a id="tocSrefundnotificationrequestitemwrapper"></a>
<a id="tocsrefundnotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "acquirerErrorCode": "string",
      "acquirerErrorDescription": "string",
      "acquirerReference": "string",
      "acsRenderingType.acsInterface": "string",
      "acsRenderingType.acsUiTemplate": "string",
      "arn": "string",
      "authenticationType": "string",
      "bookingDate": "string",
      "checkoutSessionId": "string",
      "coBrandedWith": "string",
      "hmacSignature": "string",
      "interactionCounter": "string",
      "merchantOrderReference": "string",
      "networkTxDate": "string",
      "networkTxReference": "string",
      "paymentLinkId": "string",
      "paymentMethodVariant": "string",
      "shopperCountry": "string",
      "store": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "AUTHENTICATION",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "originalReference": "string",
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "string",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[RefundNotificationRequestItem](#schemarefundnotificationrequestitem)|false|none|none|

<h2 id="tocS_RefundWithDataAdditionalData">RefundWithDataAdditionalData</h2>
<!-- backwards compatibility -->
<a id="schemarefundwithdataadditionaldata"></a>
<a id="schema_RefundWithDataAdditionalData"></a>
<a id="tocSrefundwithdataadditionaldata"></a>
<a id="tocsrefundwithdataadditionaldata"></a>

```json
{
  "PaymentAccountReference": "string",
  "acquirerAccountCode": "string",
  "acquirerCode": "string",
  "acquirerReference": "string",
  "acsRenderingType.acsInterface": "string",
  "acsRenderingType.acsUiTemplate": "string",
  "alias": "string",
  "aliasType": "string",
  "arn": "string",
  "authCode": "string",
  "authenticationType": "string",
  "authorisationMid": "string",
  "avsResult": "string",
  "bookingDate": "string",
  "cardBin": "string",
  "cardHolderName": "string",
  "cardIssuingBank": "string",
  "cardIssuingCountry": "string",
  "cardIssuingCurrency": "string",
  "cardPaymentMethod": "string",
  "cardSummary": "string",
  "cavv": "string",
  "cavvAlgorithm": "string",
  "checkoutSessionId": "string",
  "coBrandedWith": "string",
  "cvcResult": "string",
  "eci": "string",
  "expiryDate": "string",
  "fundingSource": "string",
  "hmacSignature": "string",
  "interactionCounter": "string",
  "isCardCommercial": "string",
  "issuerCountry": "string",
  "liabilityShift": "string",
  "merchantOrderReference": "string",
  "networkTxDate": "string",
  "networkTxReference": "string",
  "paymentLinkId": "string",
  "paymentMethodVariant": "string",
  "refusalReasonRaw": "string",
  "shopperCountry": "string",
  "shopperIP": "string",
  "shopperInteraction": "string",
  "store": "string",
  "tenderReference": "string",
  "terminalId": "string",
  "threeDAuthenticated": "string",
  "threeDAuthenticatedResponse": "string",
  "threeDOffered": "string",
  "threeDOfferedResponse": "string",
  "xid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PaymentAccountReference|string|false|none|none|
|acquirerAccountCode|string|false|none|none|
|acquirerCode|string|false|none|none|
|acquirerReference|string|false|none|none|
|acsRenderingType.acsInterface|string|false|none|none|
|acsRenderingType.acsUiTemplate|string|false|none|none|
|alias|string|false|none|none|
|aliasType|string|false|none|none|
|arn|string|false|none|none|
|authCode|string|false|none|none|
|authenticationType|string|false|none|none|
|authorisationMid|string|false|none|none|
|avsResult|string|false|none|none|
|bookingDate|string|false|none|none|
|cardBin|string|false|none|none|
|cardHolderName|string|false|none|none|
|cardIssuingBank|string|false|none|none|
|cardIssuingCountry|string|false|none|none|
|cardIssuingCurrency|string|false|none|none|
|cardPaymentMethod|string|false|none|none|
|cardSummary|string|false|none|none|
|cavv|string|false|none|none|
|cavvAlgorithm|string|false|none|none|
|checkoutSessionId|string|false|none|none|
|coBrandedWith|string|false|none|none|
|cvcResult|string|false|none|none|
|eci|string|false|none|none|
|expiryDate|string|false|none|none|
|fundingSource|string|false|none|none|
|hmacSignature|string|false|none|none|
|interactionCounter|string|false|none|none|
|isCardCommercial|string|false|none|none|
|issuerCountry|string|false|none|none|
|liabilityShift|string|false|none|none|
|merchantOrderReference|string|false|none|none|
|networkTxDate|string|false|none|The network transaction date for Mastercard transactions processed by Bank of America Merchant Services (BAMS).|
|networkTxReference|string|false|none|The network transaction reference from the scheme, when available.|
|paymentLinkId|string|false|none|none|
|paymentMethodVariant|string|false|none|none|
|refusalReasonRaw|string|false|none|none|
|shopperCountry|string|false|none|none|
|shopperIP|string|false|none|none|
|shopperInteraction|string|false|none|none|
|store|string|false|none|none|
|tenderReference|string|false|none|none|
|terminalId|string|false|none|none|
|threeDAuthenticated|string|false|none|none|
|threeDAuthenticatedResponse|string|false|none|none|
|threeDOffered|string|false|none|none|
|threeDOfferedResponse|string|false|none|none|
|xid|string|false|none|none|

<h2 id="tocS_RefundWithDataNotificationRequest">RefundWithDataNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemarefundwithdatanotificationrequest"></a>
<a id="schema_RefundWithDataNotificationRequest"></a>
<a id="tocSrefundwithdatanotificationrequest"></a>
<a id="tocsrefundwithdatanotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "PaymentAccountReference": "string",
          "acquirerAccountCode": "string",
          "acquirerCode": "string",
          "acquirerReference": "string",
          "acsRenderingType.acsInterface": "string",
          "acsRenderingType.acsUiTemplate": "string",
          "alias": "string",
          "aliasType": "string",
          "arn": "string",
          "authCode": "string",
          "authenticationType": "string",
          "authorisationMid": "string",
          "avsResult": "string",
          "bookingDate": "string",
          "cardBin": "string",
          "cardHolderName": "string",
          "cardIssuingBank": "string",
          "cardIssuingCountry": "string",
          "cardIssuingCurrency": "string",
          "cardPaymentMethod": "string",
          "cardSummary": "string",
          "cavv": "string",
          "cavvAlgorithm": "string",
          "checkoutSessionId": "string",
          "coBrandedWith": "string",
          "cvcResult": "string",
          "eci": "string",
          "expiryDate": "string",
          "fundingSource": "string",
          "hmacSignature": "string",
          "interactionCounter": "string",
          "isCardCommercial": "string",
          "issuerCountry": "string",
          "liabilityShift": "string",
          "merchantOrderReference": "string",
          "networkTxDate": "string",
          "networkTxReference": "string",
          "paymentLinkId": "string",
          "paymentMethodVariant": "string",
          "refusalReasonRaw": "string",
          "shopperCountry": "string",
          "shopperIP": "string",
          "shopperInteraction": "string",
          "store": "string",
          "tenderReference": "string",
          "terminalId": "string",
          "threeDAuthenticated": "string",
          "threeDAuthenticatedResponse": "string",
          "threeDOffered": "string",
          "threeDOfferedResponse": "string",
          "xid": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[RefundWithDataNotificationRequestItemWrapper](#schemarefundwithdatanotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_RefundWithDataNotificationRequestItem">RefundWithDataNotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemarefundwithdatanotificationrequestitem"></a>
<a id="schema_RefundWithDataNotificationRequestItem"></a>
<a id="tocSrefundwithdatanotificationrequestitem"></a>
<a id="tocsrefundwithdatanotificationrequestitem"></a>

```json
{
  "additionalData": {
    "PaymentAccountReference": "string",
    "acquirerAccountCode": "string",
    "acquirerCode": "string",
    "acquirerReference": "string",
    "acsRenderingType.acsInterface": "string",
    "acsRenderingType.acsUiTemplate": "string",
    "alias": "string",
    "aliasType": "string",
    "arn": "string",
    "authCode": "string",
    "authenticationType": "string",
    "authorisationMid": "string",
    "avsResult": "string",
    "bookingDate": "string",
    "cardBin": "string",
    "cardHolderName": "string",
    "cardIssuingBank": "string",
    "cardIssuingCountry": "string",
    "cardIssuingCurrency": "string",
    "cardPaymentMethod": "string",
    "cardSummary": "string",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "checkoutSessionId": "string",
    "coBrandedWith": "string",
    "cvcResult": "string",
    "eci": "string",
    "expiryDate": "string",
    "fundingSource": "string",
    "hmacSignature": "string",
    "interactionCounter": "string",
    "isCardCommercial": "string",
    "issuerCountry": "string",
    "liabilityShift": "string",
    "merchantOrderReference": "string",
    "networkTxDate": "string",
    "networkTxReference": "string",
    "paymentLinkId": "string",
    "paymentMethodVariant": "string",
    "refusalReasonRaw": "string",
    "shopperCountry": "string",
    "shopperIP": "string",
    "shopperInteraction": "string",
    "store": "string",
    "tenderReference": "string",
    "terminalId": "string",
    "threeDAuthenticated": "string",
    "threeDAuthenticatedResponse": "string",
    "threeDOffered": "string",
    "threeDOfferedResponse": "string",
    "xid": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[RefundWithDataAdditionalData](#schemarefundwithdataadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_RefundWithDataNotificationRequestItem-recursive">RefundWithDataNotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemarefundwithdatanotificationrequestitem-recursive"></a>
<a id="schema_RefundWithDataNotificationRequestItem-recursive"></a>
<a id="tocSrefundwithdatanotificationrequestitem-recursive"></a>
<a id="tocsrefundwithdatanotificationrequestitem-recursive"></a>

```json
{
  "additionalData": {
    "PaymentAccountReference": "string",
    "acquirerAccountCode": "string",
    "acquirerCode": "string",
    "acquirerReference": "string",
    "acsRenderingType.acsInterface": "string",
    "acsRenderingType.acsUiTemplate": "string",
    "alias": "string",
    "aliasType": "string",
    "arn": "string",
    "authCode": "string",
    "authenticationType": "string",
    "authorisationMid": "string",
    "avsResult": "string",
    "bookingDate": "string",
    "cardBin": "string",
    "cardHolderName": "string",
    "cardIssuingBank": "string",
    "cardIssuingCountry": "string",
    "cardIssuingCurrency": "string",
    "cardPaymentMethod": "string",
    "cardSummary": "string",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "checkoutSessionId": "string",
    "coBrandedWith": "string",
    "cvcResult": "string",
    "eci": "string",
    "expiryDate": "string",
    "fundingSource": "string",
    "hmacSignature": "string",
    "interactionCounter": "string",
    "isCardCommercial": "string",
    "issuerCountry": "string",
    "liabilityShift": "string",
    "merchantOrderReference": "string",
    "networkTxDate": "string",
    "networkTxReference": "string",
    "paymentLinkId": "string",
    "paymentMethodVariant": "string",
    "refusalReasonRaw": "string",
    "shopperCountry": "string",
    "shopperIP": "string",
    "shopperInteraction": "string",
    "store": "string",
    "tenderReference": "string",
    "terminalId": "string",
    "threeDAuthenticated": "string",
    "threeDAuthenticatedResponse": "string",
    "threeDOffered": "string",
    "threeDOfferedResponse": "string",
    "xid": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "AUTHENTICATION",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[RefundWithDataAdditionalData](#schemarefundwithdataadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|AUTHENTICATION|
|eventCode|AUTHORISATION|
|eventCode|AUTHORISATION_ADJUSTMENT|
|eventCode|AUTORESCUE|
|eventCode|CANCELLATION|
|eventCode|CANCEL_AUTORESCUE|
|eventCode|CANCEL_OR_REFUND|
|eventCode|CAPTURE|
|eventCode|CAPTURE_FAILED|
|eventCode|CHARGEBACK|
|eventCode|CHARGEBACK_REVERSED|
|eventCode|DISPUTE_DEFENSE_PERIOD_ENDED|
|eventCode|EXPIRE|
|eventCode|HANDLED_EXTERNALLY|
|eventCode|INFORMATION_SUPPLIED|
|eventCode|ISSUER_COMMENTS|
|eventCode|ISSUER_RESPONSE_TIMEFRAME_EXPIRED|
|eventCode|MANUAL_REVIEW_ACCEPT|
|eventCode|MANUAL_REVIEW_REJECT|
|eventCode|NOTIFICATION_OF_CHARGEBACK|
|eventCode|NOTIFICATION_OF_FRAUD|
|eventCode|OFFER_CLOSED|
|eventCode|ORDER_CLOSED|
|eventCode|ORDER_OPENED|
|eventCode|PAYOUT_DECLINE|
|eventCode|PAYOUT_EXPIRE|
|eventCode|PAYOUT_THIRDPARTY|
|eventCode|POSTPONED_REFUND|
|eventCode|PREARBITRATION_LOST|
|eventCode|PREARBITRATION_OPEN|
|eventCode|PREARBITRATION_WON|
|eventCode|RECURRING_CONTRACT|
|eventCode|REFUND|
|eventCode|REFUNDED_REVERSED|
|eventCode|REFUND_FAILED|
|eventCode|REFUND_NOT_CLEARED|
|eventCode|REFUND_WITH_DATA|
|eventCode|REQUEST_FOR_INFORMATION|
|eventCode|REVERSAL|
|eventCode|SECOND_CHARGEBACK|
|eventCode|SETTLED_REVERSED|
|eventCode|TECHNICAL_CANCEL|
|eventCode|VOID_PENDING_REFUND|

<h2 id="tocS_RefundWithDataNotificationRequestItemWrapper">RefundWithDataNotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemarefundwithdatanotificationrequestitemwrapper"></a>
<a id="schema_RefundWithDataNotificationRequestItemWrapper"></a>
<a id="tocSrefundwithdatanotificationrequestitemwrapper"></a>
<a id="tocsrefundwithdatanotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "PaymentAccountReference": "string",
      "acquirerAccountCode": "string",
      "acquirerCode": "string",
      "acquirerReference": "string",
      "acsRenderingType.acsInterface": "string",
      "acsRenderingType.acsUiTemplate": "string",
      "alias": "string",
      "aliasType": "string",
      "arn": "string",
      "authCode": "string",
      "authenticationType": "string",
      "authorisationMid": "string",
      "avsResult": "string",
      "bookingDate": "string",
      "cardBin": "string",
      "cardHolderName": "string",
      "cardIssuingBank": "string",
      "cardIssuingCountry": "string",
      "cardIssuingCurrency": "string",
      "cardPaymentMethod": "string",
      "cardSummary": "string",
      "cavv": "string",
      "cavvAlgorithm": "string",
      "checkoutSessionId": "string",
      "coBrandedWith": "string",
      "cvcResult": "string",
      "eci": "string",
      "expiryDate": "string",
      "fundingSource": "string",
      "hmacSignature": "string",
      "interactionCounter": "string",
      "isCardCommercial": "string",
      "issuerCountry": "string",
      "liabilityShift": "string",
      "merchantOrderReference": "string",
      "networkTxDate": "string",
      "networkTxReference": "string",
      "paymentLinkId": "string",
      "paymentMethodVariant": "string",
      "refusalReasonRaw": "string",
      "shopperCountry": "string",
      "shopperIP": "string",
      "shopperInteraction": "string",
      "store": "string",
      "tenderReference": "string",
      "terminalId": "string",
      "threeDAuthenticated": "string",
      "threeDAuthenticatedResponse": "string",
      "threeDOffered": "string",
      "threeDOfferedResponse": "string",
      "xid": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "AUTHENTICATION",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "originalReference": "string",
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "string",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[RefundWithDataNotificationRequestItem](#schemarefundwithdatanotificationrequestitem)|false|none|none|

<h2 id="tocS_ReportAdditionalData">ReportAdditionalData</h2>
<!-- backwards compatibility -->
<a id="schemareportadditionaldata"></a>
<a id="schema_ReportAdditionalData"></a>
<a id="tocSreportadditionaldata"></a>
<a id="tocsreportadditionaldata"></a>

```json
{
  "hmacSignature": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hmacSignature|string|false|none|none|

<h2 id="tocS_ReportAvailableNotificationRequest">ReportAvailableNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemareportavailablenotificationrequest"></a>
<a id="schema_ReportAvailableNotificationRequest"></a>
<a id="tocSreportavailablenotificationrequest"></a>
<a id="tocsreportavailablenotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "hmacSignature": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "REPORT_AVAILABLE",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[ReportAvailableNotificationRequestItemWrapper](#schemareportavailablenotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_ReportAvailableNotificationRequestItem">ReportAvailableNotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemareportavailablenotificationrequestitem"></a>
<a id="schema_ReportAvailableNotificationRequestItem"></a>
<a id="tocSreportavailablenotificationrequestitem"></a>
<a id="tocsreportavailablenotificationrequestitem"></a>

```json
{
  "additionalData": {
    "hmacSignature": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "REPORT_AVAILABLE",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[ReportAdditionalData](#schemareportadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Contains the file name of the report.|
|reason|string|true|none|Contains the download URL where you can obtain a copy of the report.|
|success|string|true|none|Always `true`.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|REPORT_AVAILABLE|

<h2 id="tocS_ReportAvailableNotificationRequestItem-recursive">ReportAvailableNotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemareportavailablenotificationrequestitem-recursive"></a>
<a id="schema_ReportAvailableNotificationRequestItem-recursive"></a>
<a id="tocSreportavailablenotificationrequestitem-recursive"></a>
<a id="tocsreportavailablenotificationrequestitem-recursive"></a>

```json
{
  "additionalData": {
    "hmacSignature": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "REPORT_AVAILABLE",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[ReportAdditionalData](#schemareportadditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Contains the file name of the report.|
|reason|string|true|none|Contains the download URL where you can obtain a copy of the report.|
|success|string|true|none|Always `true`.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|REPORT_AVAILABLE|

<h2 id="tocS_ReportAvailableNotificationRequestItemWrapper">ReportAvailableNotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemareportavailablenotificationrequestitemwrapper"></a>
<a id="schema_ReportAvailableNotificationRequestItemWrapper"></a>
<a id="tocSreportavailablenotificationrequestitemwrapper"></a>
<a id="tocsreportavailablenotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "hmacSignature": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "REPORT_AVAILABLE",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "originalReference": "string",
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "string",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[ReportAvailableNotificationRequestItem](#schemareportavailablenotificationrequestitem)|false|none|none|

<h2 id="tocS_RequestForInformationNotificationRequest">RequestForInformationNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemarequestforinformationnotificationrequest"></a>
<a id="schema_RequestForInformationNotificationRequest"></a>
<a id="tocSrequestforinformationnotificationrequest"></a>
<a id="tocsrequestforinformationnotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_ReversalAdditionalData">ReversalAdditionalData</h2>
<!-- backwards compatibility -->
<a id="schemareversaladditionaldata"></a>
<a id="schema_ReversalAdditionalData"></a>
<a id="tocSreversaladditionaldata"></a>
<a id="tocsreversaladditionaldata"></a>

```json
{
  "acquirerReference": "string",
  "acsRenderingType.acsInterface": "string",
  "acsRenderingType.acsUiTemplate": "string",
  "arn": "string",
  "authenticationType": "string",
  "bookingDate": "string",
  "cancellableUntil": "string",
  "checkoutSessionId": "string",
  "coBrandedWith": "string",
  "hmacSignature": "string",
  "interactionCounter": "string",
  "merchantOrderReference": "string",
  "modification.action": "cancel",
  "modification.status": "authorised",
  "paymentLinkId": "string",
  "paymentMethodVariant": "string",
  "refundPspReference": "string",
  "shopperCountry": "string",
  "store": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquirerReference|string|false|none|none|
|acsRenderingType.acsInterface|string|false|none|none|
|acsRenderingType.acsUiTemplate|string|false|none|none|
|arn|string|false|none|none|
|authenticationType|string|false|none|none|
|bookingDate|string|false|none|none|
|cancellableUntil|string|false|none|The UTC date and time until which the refund can still be cancelled. Format: ISO 8601, for example **2024-05-21T14:32:00Z**. Only present while the refund is actually being held.|
|checkoutSessionId|string|false|none|none|
|coBrandedWith|string|false|none|none|
|hmacSignature|string|false|none|none|
|interactionCounter|string|false|none|none|
|merchantOrderReference|string|false|none|none|
|modification.action|string|false|none|The operation the reversal resolved to.|
|modification.status|string|false|none|The status of the operation the reversal resolved to.|
|paymentLinkId|string|false|none|none|
|paymentMethodVariant|string|false|none|none|
|refundPspReference|string|false|none|The PSP reference of the refund targeted by a reversal cancellation.|
|shopperCountry|string|false|none|none|
|store|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|modification.action|cancel|
|modification.action|refund|
|modification.action|cancelRefund|
|modification.status|authorised|
|modification.status|submitted|
|modification.status|cancelled|
|modification.status|refused|
|modification.status|error|
|modification.status|failed|

<h2 id="tocS_ReversalNotificationRequest">ReversalNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemareversalnotificationrequest"></a>
<a id="schema_ReversalNotificationRequest"></a>
<a id="tocSreversalnotificationrequest"></a>
<a id="tocsreversalnotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "acquirerReference": "string",
          "acsRenderingType.acsInterface": "string",
          "acsRenderingType.acsUiTemplate": "string",
          "arn": "string",
          "authenticationType": "string",
          "bookingDate": "string",
          "cancellableUntil": "string",
          "checkoutSessionId": "string",
          "coBrandedWith": "string",
          "hmacSignature": "string",
          "interactionCounter": "string",
          "merchantOrderReference": "string",
          "modification.action": "cancel",
          "modification.status": "authorised",
          "paymentLinkId": "string",
          "paymentMethodVariant": "string",
          "refundPspReference": "string",
          "shopperCountry": "string",
          "store": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "REVERSAL",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[ReversalNotificationRequestItemWrapper](#schemareversalnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_ReversalNotificationRequestItem">ReversalNotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemareversalnotificationrequestitem"></a>
<a id="schema_ReversalNotificationRequestItem"></a>
<a id="tocSreversalnotificationrequestitem"></a>
<a id="tocsreversalnotificationrequestitem"></a>

```json
{
  "additionalData": {
    "acquirerReference": "string",
    "acsRenderingType.acsInterface": "string",
    "acsRenderingType.acsUiTemplate": "string",
    "arn": "string",
    "authenticationType": "string",
    "bookingDate": "string",
    "cancellableUntil": "string",
    "checkoutSessionId": "string",
    "coBrandedWith": "string",
    "hmacSignature": "string",
    "interactionCounter": "string",
    "merchantOrderReference": "string",
    "modification.action": "cancel",
    "modification.status": "authorised",
    "paymentLinkId": "string",
    "paymentMethodVariant": "string",
    "refundPspReference": "string",
    "shopperCountry": "string",
    "store": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "REVERSAL",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[ReversalAdditionalData](#schemareversaladditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|REVERSAL|

<h2 id="tocS_ReversalNotificationRequestItem-recursive">ReversalNotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemareversalnotificationrequestitem-recursive"></a>
<a id="schema_ReversalNotificationRequestItem-recursive"></a>
<a id="tocSreversalnotificationrequestitem-recursive"></a>
<a id="tocsreversalnotificationrequestitem-recursive"></a>

```json
{
  "additionalData": {
    "acquirerReference": "string",
    "acsRenderingType.acsInterface": "string",
    "acsRenderingType.acsUiTemplate": "string",
    "arn": "string",
    "authenticationType": "string",
    "bookingDate": "string",
    "cancellableUntil": "string",
    "checkoutSessionId": "string",
    "coBrandedWith": "string",
    "hmacSignature": "string",
    "interactionCounter": "string",
    "merchantOrderReference": "string",
    "modification.action": "cancel",
    "modification.status": "authorised",
    "paymentLinkId": "string",
    "paymentMethodVariant": "string",
    "refundPspReference": "string",
    "shopperCountry": "string",
    "store": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "REVERSAL",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[ReversalAdditionalData](#schemareversaladditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event the notification item is for.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|false|none|For modifications, this field corresponds to the payment request assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|REVERSAL|

<h2 id="tocS_ReversalNotificationRequestItemWrapper">ReversalNotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemareversalnotificationrequestitemwrapper"></a>
<a id="schema_ReversalNotificationRequestItemWrapper"></a>
<a id="tocSreversalnotificationrequestitemwrapper"></a>
<a id="tocsreversalnotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "acquirerReference": "string",
      "acsRenderingType.acsInterface": "string",
      "acsRenderingType.acsUiTemplate": "string",
      "arn": "string",
      "authenticationType": "string",
      "bookingDate": "string",
      "cancellableUntil": "string",
      "checkoutSessionId": "string",
      "coBrandedWith": "string",
      "hmacSignature": "string",
      "interactionCounter": "string",
      "merchantOrderReference": "string",
      "modification.action": "cancel",
      "modification.status": "authorised",
      "paymentLinkId": "string",
      "paymentMethodVariant": "string",
      "refundPspReference": "string",
      "shopperCountry": "string",
      "store": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "REVERSAL",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "originalReference": "string",
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "string",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[ReversalNotificationRequestItem](#schemareversalnotificationrequestitem)|false|none|none|

<h2 id="tocS_SchemeArbitrationLostNotificationRequest">SchemeArbitrationLostNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaschemearbitrationlostnotificationrequest"></a>
<a id="schema_SchemeArbitrationLostNotificationRequest"></a>
<a id="tocSschemearbitrationlostnotificationrequest"></a>
<a id="tocsschemearbitrationlostnotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_SchemeArbitrationWonNotificationRequest">SchemeArbitrationWonNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaschemearbitrationwonnotificationrequest"></a>
<a id="schema_SchemeArbitrationWonNotificationRequest"></a>
<a id="tocSschemearbitrationwonnotificationrequest"></a>
<a id="tocsschemearbitrationwonnotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_SecondChargebackNotificationRequest">SecondChargebackNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemasecondchargebacknotificationrequest"></a>
<a id="schema_SecondChargebackNotificationRequest"></a>
<a id="tocSsecondchargebacknotificationrequest"></a>
<a id="tocssecondchargebacknotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "InvoiceCreditorAccount": "string",
          "arn": "string",
          "autoDefended": "string",
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "chargebackReasonCode": "string",
          "chargebackSchemeCode": "string",
          "defendable": "string",
          "defensePeriodEndsAt": "string",
          "disputeStatus": "Unresponded",
          "grossCurrency": "string",
          "grossValue": "string",
          "hmacSignature": "string",
          "modificationMerchantReferences": "string",
          "nofReasonCode": "string",
          "nofSchemeCode": "string",
          "paymentMethodVariant": "string",
          "rfiReasonCode": "string",
          "rfiSchemeCode": "string",
          "shopperReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "AUTHENTICATION",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[DisputesNotificationRequestItemWrapper](#schemadisputesnotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_SettledReversedNotificationRequest">SettledReversedNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemasettledreversednotificationrequest"></a>
<a id="schema_SettledReversedNotificationRequest"></a>
<a id="tocSsettledreversednotificationrequest"></a>
<a id="tocssettledreversednotificationrequest"></a>

```json
{
  "live": "string",
  "notificationItems": [
    {
      "NotificationRequestItem": {
        "additionalData": {
          "bookingDate": "string",
          "expectedValueDate": "string",
          "hmacSignature": "string",
          "paymentMethodVariant": "string",
          "settlementReference": "string"
        },
        "amount": {
          "currency": "str",
          "value": 0
        },
        "eventCode": "SETTLED_REVERSED",
        "eventDate": "2021-07-17T13:42:40+01:00",
        "merchantAccountCode": "string",
        "merchantReference": "string",
        "originalReference": "string",
        "paymentMethod": "visa, mc, iDeal",
        "pspReference": "string",
        "reason": "string",
        "success": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|live|string|false|none|Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.|
|notificationItems|[[SettledReversedNotificationRequestItemWrapper](#schemasettledreversednotificationrequestitemwrapper)]|false|none|A container object for the details included in the notification.|

<h2 id="tocS_SettledReversedNotificationRequestItem">SettledReversedNotificationRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemasettledreversednotificationrequestitem"></a>
<a id="schema_SettledReversedNotificationRequestItem"></a>
<a id="tocSsettledreversednotificationrequestitem"></a>
<a id="tocssettledreversednotificationrequestitem"></a>

```json
{
  "additionalData": {
    "bookingDate": "string",
    "expectedValueDate": "string",
    "hmacSignature": "string",
    "paymentMethodVariant": "string",
    "settlementReference": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "SETTLED_REVERSED",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[SettlementReversalAdditionalData](#schemasettlementreversaladditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event for which you receive the webhook.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|true|none|For modifications, this field corresponds to the payment request reference assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|SETTLED_REVERSED|

<h2 id="tocS_SettledReversedNotificationRequestItem-recursive">SettledReversedNotificationRequestItem-recursive</h2>
<!-- backwards compatibility -->
<a id="schemasettledreversednotificationrequestitem-recursive"></a>
<a id="schema_SettledReversedNotificationRequestItem-recursive"></a>
<a id="tocSsettledreversednotificationrequestitem-recursive"></a>
<a id="tocssettledreversednotificationrequestitem-recursive"></a>

```json
{
  "additionalData": {
    "bookingDate": "string",
    "expectedValueDate": "string",
    "hmacSignature": "string",
    "paymentMethodVariant": "string",
    "settlementReference": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "eventCode": "SETTLED_REVERSED",
  "eventDate": "2021-07-17T13:42:40+01:00",
  "merchantAccountCode": "string",
  "merchantReference": "string",
  "originalReference": "string",
  "paymentMethod": "visa, mc, iDeal",
  "pspReference": "string",
  "reason": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|[SettlementReversalAdditionalData](#schemasettlementreversaladditionaldata)|false|none|This object is a generic container that can hold extra fields.|
|amount|[Amount](#schemaamount)|true|none|The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.|
|eventCode|string|true|none|The type of event for which you receive the webhook.|
|eventDate|string(date-time)|true|none|The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD|
|merchantAccountCode|string|true|none|The merchant account identifier used in the transaction the notification item is for.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|originalReference|string|true|none|For modifications, this field corresponds to the payment request reference assigned to the original payment.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.|
|reason|string|false|none|If `success` = `false`, then this includes a short message with an explanation for the refusal.|
|success|string|true|none|Informs about the outcome of the event (`eventCode`) the notification is for. <br>If `true`: the event was executed successfully. <br>If `false`: the event was not executed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventCode|SETTLED_REVERSED|

<h2 id="tocS_SettledReversedNotificationRequestItemWrapper">SettledReversedNotificationRequestItemWrapper</h2>
<!-- backwards compatibility -->
<a id="schemasettledreversednotificationrequestitemwrapper"></a>
<a id="schema_SettledReversedNotificationRequestItemWrapper"></a>
<a id="tocSsettledreversednotificationrequestitemwrapper"></a>
<a id="tocssettledreversednotificationrequestitemwrapper"></a>

```json
{
  "NotificationRequestItem": {
    "additionalData": {
      "bookingDate": "string",
      "expectedValueDate": "string",
      "hmacSignature": "string",
      "paymentMethodVariant": "string",
      "settlementReference": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "eventCode": "SETTLED_REVERSED",
    "eventDate": "2021-07-17T13:42:40+01:00",
    "merchantAccountCode": "string",
    "merchantReference": "string",
    "originalReference": "string",
    "paymentMethod": "visa, mc, iDeal",
    "pspReference": "string",
    "reason": "string",
    "success": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationRequestItem|[SettledReversedNotificationRequestItem](#schemasettledreversednotificationrequestitem)|false|none|none|

<h2 id="tocS_SettlementReversalAdditionalData">SettlementReversalAdditionalData</h2>
<!-- backwards compatibility -->
<a id="schemasettlementreversaladditionaldata"></a>
<a id="schema_SettlementReversalAdditionalData"></a>
<a id="tocSsettlementreversaladditionaldata"></a>
<a id="tocssettlementreversaladditionaldata"></a>

```json
{
  "bookingDate": "string",
  "expectedValueDate": "string",
  "hmacSignature": "string",
  "paymentMethodVariant": "string",
  "settlementReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookingDate|string|false|none|none|
|expectedValueDate|string|false|none|The expected value date of the settlement. Format: yyyy-MM-dd. To receive this field in the webhook, you must enable **Include Settlement Reference** in the additional settings when you [configure the webhook in your Customer Area](https://docs.adyen.com/development-resources/webhooks/configure-and-manage#set-up-webhooks-in-your-customer-area). This setting also enables the `settlementReference` field.|
|hmacSignature|string|false|none|none|
|paymentMethodVariant|string|false|none|none|
|settlementReference|string|false|none|The reference of the original settlement. To receive this field in the webhook, you must enable **Include Settlement Reference** in the additional settings when you [configure the webhook in your Customer Area](https://docs.adyen.com/development-resources/webhooks/configure-and-manage#set-up-webhooks-in-your-customer-area). This setting also enables the `expectedValueDate` field.|
