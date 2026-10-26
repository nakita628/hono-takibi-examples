<h1 id="payments">Payments v2.12</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Call the Payments API to authorize payments, capture authorized payments, refund payments that have already been captured, and show payment information. Use the Payments API in conjunction with the <a href="/docs/api/orders/v2/">Orders API</a>. For more information, see the <a href="/docs/checkout/">PayPal Checkout Overview</a>.

Base URLs:

* <a href="https://api-m.paypal.com">https://api-m.paypal.com</a> - Server for https scheme.

<a href="/docs/checkout/">External documentation</a>

# Authentication

- oAuth2 authentication. OAuth 2.0 authentication

    - Flow: clientCredentials
    - Token URL = [https://api-m.paypal.com/v1/oauth2/token](https://api-m.paypal.com/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://uri.paypal.com/services/payments/payment/authcapture|Permission to do non-real time payments like capture on authorization|
|https://uri.paypal.com/services/payments/refund|Permission to initiate a refund on a capture transaction|
|https://uri.paypal.com/services/payments/non-referenced-credit|Permission to initiate non referenced credit|
|https://uri.paypal.com/services/payments/realtimepayment|Permission to do any real time payment, with support for sale/authorize/order intents|
|https://uri.paypal.com/services/payments/reversepayment|Permission to do any reverse payment|
|https://uri.paypal.com/services/payments/payments-ready|Permission to get information about payment readiness.|
|Braintree:PaymentsReady|Permission to call PaymentsReady via BrainTree SDK.|
|https://uri.paypal.com/services/payments/client-payments-eligibility|Permission to get information about merchant's eligible payment methods.|

<h1 id="payments-authorizations">authorizations</h1>

Use the `/authorizations` resource to show details for, capture payment for, reauthorize, and void authorized payments.

## Show details for authorized payment

<a id="opIdauthorizations.get"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/payments/authorizations/0VF52814937998046 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/payments/authorizations/{authorization_id}`

Shows details for an authorized payment, by ID.

<h3 id="show-details-for-authorized-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorization_id|path|string|true|The ID of the authorized payment for which to show details.|
|Authorization|header|[standard_header_schema](#schemastandard_header_schema)|false|Holds authorization information for external API calls.|
|PayPal-Auth-Assertion|header|string|false|Header for an API client-provided JWT assertion that identifies the merchant. Establishing the consent to act-on-behalf of a merchant is a prerequisite for using this header.|

> Example responses

> 200 Response

```json
{
  "id": "0VF52814937998046",
  "status": "CREATED",
  "amount": {
    "value": "10.99",
    "currency_code": "USD"
  },
  "invoice_id": "INVOICE-123",
  "seller_protection": {
    "status": "ELIGIBLE",
    "dispute_categories": [
      "ITEM_NOT_RECEIVED",
      "UNAUTHORIZED_TRANSACTION"
    ]
  },
  "payee": {
    "email_address": "merchant@example.com",
    "merchant_id": "7KNGBPH2U58GQ"
  },
  "expiration_time": "2017-10-10T23:23:45Z",
  "create_time": "2017-09-11T23:23:45Z",
  "update_time": "2017-09-11T23:23:45Z",
  "links": [
    {
      "rel": "self",
      "method": "GET",
      "href": "https://api-m.paypal.com/v2/payments/authorizations/0VF52814937998046"
    },
    {
      "rel": "capture",
      "method": "POST",
      "href": "https://api-m.paypal.com/v2/payments/authorizations/0VF52814937998046/capture"
    },
    {
      "rel": "void",
      "method": "POST",
      "href": "https://api-m.paypal.com/v2/payments/authorizations/0VF52814937998046/void"
    },
    {
      "rel": "reauthorize",
      "method": "POST",
      "href": "https://api-m.paypal.com/v2/payments/authorizations/0VF52814937998046/reauthorize"
    }
  ]
}
```

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "debug_id": "b1d1f06c7246c",
  "message": "Authentication failed due to missing Authorization header, or invalid authentication credentials."
}
```

> 403 Response

```json
{
  "name": "NOT_AUTHORIZED",
  "debug_id": "b1d1f06c7246c",
  "message": "Authorization failed due to insufficient permissions."
}
```

> 404 Response

```json
{
  "name": "RESOURCE_NOT_FOUND",
  "debug_id": "b1d1f06c7246c",
  "message": "The specified resource does not exist."
}
```

> 500 Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "debug_id": "b1d1f06c7246c",
  "message": "An internal server error has occurred."
}
```

> default Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "debug_id": "b1d1f06c7246c",
  "message": "An internal server error has occurred."
}
```

<h3 id="show-details-for-authorized-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP <code>200 OK</code> status code and a JSON response body that shows authorization details.|[authorization-2](#schemaauthorization-2)|
|401|Unauthorized|Unauthorized.|[error](#schemaerror)|
|403|Forbidden|Forbidden.|[error](#schemaerror)|
|404|Not Found|Not Found.|[error](#schemaerror)|
|500|Internal Server Error|Internal Server Error.|[error](#schemaerror)|
|default|Default|Default response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/payments/payment/authcapture )
</aside>

## Capture authorized payment

<a id="opIdauthorizations.capture"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/payments/authorizations/0VF52814937998046/capture \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "amount": {
      "value": "10.99",
      "currency_code": "USD"
    },
    "invoice_id": "INVOICE-123",
    "final_capture": true,
    "note_to_payer": "If the ordered color is not available, we will substitute with a different color free of charge.",
    "soft_descriptor": "Bob'\''s Custom Sweaters"
  }'
```

`POST /v2/payments/authorizations/{authorization_id}/capture`

Captures an authorized payment, by ID.

> Body parameter

```json
{
  "amount": {
    "value": "10.99",
    "currency_code": "USD"
  },
  "invoice_id": "INVOICE-123",
  "final_capture": true,
  "note_to_payer": "If the ordered color is not available, we will substitute with a different color free of charge.",
  "soft_descriptor": "Bob's Custom Sweaters"
}
```

<h3 id="capture-authorized-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorization_id|path|string|true|The PayPal-generated ID for the authorized payment to capture.|
|PayPal-Request-Id|header|string|false|A unique ID identifying the request header for idempotency purposes.|
|Prefer|header|string|false|The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>|
|Authorization|header|[standard_header_schema](#schemastandard_header_schema)|false|Holds authorization information for external API calls.|
|PayPal-Auth-Assertion|header|string|false|Header for an API client-provided JWT assertion that identifies the merchant. Establishing the consent to act-on-behalf of a merchant is a prerequisite for using this header.|
|body|body|[capture_request](#schemacapture_request)|false|none|
|» invoice_id|body|string|false|The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.|
|» note_to_payer|body|string|false|An informational note about this settlement. Appears in both the payer's transaction history and the emails that the payer receives.|
|» amount|body|object|false|none|
|» » currency_code|body|[currency_code](#schemacurrency_code)|true|The [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) that identifies the currency.|
|» » value|body|string|true|The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency Codes](/api/rest/reference/currency-codes/).|
|» invoice_id|body|string|false|The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.|
|» final_capture|body|boolean|false|Indicates whether you can make additional captures against the authorized payment. Set to `true` if you do not intend to capture additional payments against the authorization. Set to `false` if you intend to capture additional payments against the authorization.|
|» payment_instruction|body|object|false|none|
|» » platform_fees|body|[object]|false|An array of various fees, commissions, tips, or donations. This field is only applicable to merchants that been enabled for PayPal Complete Payments Platform for Marketplaces and Platforms capability.|
|» » » amount|body|object|true|none|
|» » » » currency_code|body|[currency_code](#schemacurrency_code)|true|The [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) that identifies the currency.|
|» » » » value|body|string|true|The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency Codes](/api/rest/reference/currency-codes/).|
|» » » payee|body|object|false|none|
|» » » » email_address|body|object|false|none|
|» » » » merchant_id|body|object|false|none|
|» » disbursement_mode|body|object|false|none|
|» » payee_pricing_tier_id|body|string|false|This field is only enabled for selected merchants/partners to use and provides the ability to trigger a specific pricing rate/plan for a payment transaction. The list of eligible 'payee_pricing_tier_id' would be provided to you by your Account Manager. Specifying values other than the one provided to you by your account manager would result in an error.|
|» » payee_receivable_fx_rate_id|body|string|false|FX identifier generated returned by PayPal to be used for payment processing in order to honor FX rate (for eligible integrations) to be used when amount is settled/received into the payee account.|
|» note_to_payer|body|string|false|An informational note about this settlement. Appears in both the payer's transaction history and the emails that the payer receives.|
|» soft_descriptor|body|string|false|The payment descriptor on the payer's account statement.|

> Example responses

> 200 Response

```json
{
  "id": "23T524207X938445J",
  "amount": {
    "currency_code": "USD",
    "value": "100.00"
  },
  "final_capture": false,
  "seller_protection": {
    "status": "ELIGIBLE",
    "dispute_categories": [
      "ITEM_NOT_RECEIVED",
      "UNAUTHORIZED_TRANSACTION"
    ]
  },
  "seller_receivable_breakdown": {
    "gross_amount": {
      "currency_code": "USD",
      "value": "1.00"
    },
    "paypal_fee": {
      "currency_code": "USD",
      "value": "0.52"
    },
    "net_amount": {
      "currency_code": "USD",
      "value": "0.48"
    },
    "exchange_rate": {}
  },
  "invoice_id": "OrderInvoice-10_10_2024_12_58_20_pm",
  "status": "COMPLETED",
  "create_time": "2024-10-14T21:29:26Z",
  "update_time": "2024-10-14T21:29:26Z",
  "links": [
    {
      "href": "https://api-m.paypal.com/v2/payments/captures/23T524207X938445J",
      "rel": "self",
      "method": "GET"
    },
    {
      "href": "https://api-m.paypal.com/v2/payments/captures/23T524207X938445J/refund",
      "rel": "refund",
      "method": "POST"
    },
    {
      "href": "https://api-m.paypal.com/v2/payments/authorizations/6DR965477U7140544",
      "rel": "up",
      "method": "GET"
    }
  ]
}
```

> 201 Response

```json
{
  "id": "2GG279541U471931P",
  "status": "COMPLETED",
  "links": [
    {
      "rel": "self",
      "method": "GET",
      "href": "https://api-m.paypal.com/v2/payments/captures/2GG279541U471931P"
    },
    {
      "rel": "refund",
      "method": "POST",
      "href": "https://api-m.paypal.com/v2/payments/captures/2GG279541U471931P/refund"
    },
    {
      "rel": "up",
      "method": "GET",
      "href": "https://api-m.paypal.com/v2/payments/authorizations/0VF52814937998046"
    }
  ]
}
```

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "debug_id": "90bff07028f7f",
  "details": [
    {
      "field": "/invoice_id",
      "value": "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ_this_invoice_is_too_long",
      "issue": "INVALID_STRING_MAX_LENGTH",
      "description": "The value of a field is too long."
    }
  ]
}
```

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "debug_id": "b1d1f06c7246c",
  "message": "Authentication failed due to missing Authorization header, or invalid authentication credentials."
}
```

> 403 Response

```json
{
  "name": "NOT_AUTHORIZED",
  "debug_id": "b1d1f06c7246c",
  "message": "Authorization failed due to insufficient permissions."
}
```

> 404 Response

```json
{
  "name": "RESOURCE_NOT_FOUND",
  "debug_id": "b1d1f06c7246c",
  "message": "The specified resource does not exist."
}
```

> 409 Response

```json
{
  "name": "RESOURCE_CONFLICT",
  "debug_id": "b1d1f06c7246c",
  "message": "The server has detected a conflict while processing this request.",
  "details": [
    {
      "issue": "PREVIOUS_REQUEST_IN_PROGRESS",
      "description": "A previous request on this resource is currently in progress. Please wait for some time and try again. It is best to space out the initial and the subsequent request(s) to avoid receiving this error."
    }
  ]
}
```

> 422 Response

```json
{
  "name": "UNPROCCESSABLE_ENTITY",
  "message": "The requested action could not be completed, is semantically incorrect, or failed business validation.",
  "debug_id": "90bff07028f7f",
  "details": [
    {
      "field": "/amount/value",
      "value": "10.99",
      "issue": "MAX_CAPTURE_AMOUNT_EXCEEDED",
      "description": "Capture amount specified exceeded allowable limit. You can only capture up to the original authorization amount.",
      "location": "body"
    }
  ]
}
```

> 500 Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "debug_id": "b1d1f06c7246c",
  "message": "An internal server error has occurred."
}
```

> default Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "debug_id": "b1d1f06c7246c",
  "message": "An internal server error has occurred."
}
```

<h3 id="capture-authorized-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP <code>200 OK</code> status code and a JSON response body that shows captured payment details.|[capture-2](#schemacapture-2)|
|201|Created|A successful request returns the HTTP <code>201 Created</code> status code and a JSON response body that shows captured payment details.|[capture-2](#schemacapture-2)|
|400|Bad Request|The request failed because it is not well-formed or is syntactically incorrect or violates schema.|[error](#schemaerror)|
|401|Unauthorized|Unauthorized.|[error](#schemaerror)|
|403|Forbidden|Forbidden.|[error](#schemaerror)|
|404|Not Found|Not Found.|[error](#schemaerror)|
|409|Conflict|The server has detected a conflict while processing this request.|[error](#schemaerror)|
|422|Unprocessable Entity|The request failed because it is semantically incorrect or failed business validation.|[error](#schemaerror)|
|500|Internal Server Error|Internal Server Error.|[error](#schemaerror)|
|default|Default|Default response.|[error](#schemaerror)|

<h3 id="capture-authorized-payment-callbacks">Callbacks</h3>

|Name|Expression|Method|Description|
|---|---|---|---|
|capture_completed|captures/{$request.path.capture_id}|POST|Capture completed notification|
|capture_declined|captures/{$request.path.capture_id}/declined|POST|Capture declined notification|
|capture_pending_kyc_incomplete|captures/{$request.path.capture_id}/pending|POST|Capture pending KYC incomplete notification|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/payments/payment/authcapture )
</aside>

## Reauthorize authorized payment

<a id="opIdauthorizations.reauthorize"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/payments/authorizations/0VF52814937998046/reauthorize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "amount": {
      "value": "10.99",
      "currency_code": "USD"
    }
  }'
```

`POST /v2/payments/authorizations/{authorization_id}/reauthorize`

Reauthorizes an authorized PayPal account payment, by ID. To ensure that funds are still available, reauthorize a payment after its initial three-day honor period expires. Within the 29-day authorization period, you can issue multiple re-authorizations after the honor period expires.<br/><br/>If 30 days have transpired since the date of the original authorization, you must create an authorized payment instead of reauthorizing the original authorized payment.<br/><br/>A reauthorized payment itself has a new honor period of three days.<br/><br/>You can reauthorize an authorized payment from 4 to 29 days after the 3-day honor period. The allowed amount depends on context and geography, for example in US it is up to 115% of the original authorized amount, not to exceed an increase of $75 USD.<br/><br/>Supports only the `amount` request parameter.

> Body parameter

```json
{
  "amount": {
    "value": "10.99",
    "currency_code": "USD"
  }
}
```

<h3 id="reauthorize-authorized-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorization_id|path|string|true|The PayPal-generated ID for the authorized payment to reauthorize.|
|PayPal-Request-Id|header|string|false|A unique ID identifying the request header for idempotency purposes.|
|Prefer|header|string|false|The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>|
|Authorization|header|[standard_header_schema](#schemastandard_header_schema)|false|Holds authorization information for external API calls.|
|PayPal-Auth-Assertion|header|string|false|Header for an API client-provided JWT assertion that identifies the merchant. Establishing the consent to act-on-behalf of a merchant is a prerequisite for using this header.|
|body|body|[reauthorize_request](#schemareauthorize_request)|false|none|
|» amount|body|object|false|none|
|» » currency_code|body|[currency_code](#schemacurrency_code)|true|The [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) that identifies the currency.|
|» » value|body|string|true|The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency Codes](/api/rest/reference/currency-codes/).|

> Example responses

> 200 Response

```json
{
  "id": "8AA831015G517922L",
  "status": "CREATED",
  "links": [
    {
      "rel": "self",
      "method": "GET",
      "href": "https://api-m.paypal.com/v2/payments/authorizations/8AA831015G517922L"
    },
    {
      "rel": "capture",
      "method": "POST",
      "href": "https://api-m.paypal.com/v2/payments/authorizations/8AA831015G517922L/capture"
    },
    {
      "rel": "void",
      "method": "POST",
      "href": "https://api-m.paypal.com/v2/payments/authorizations/8AA831015G517922L/void"
    },
    {
      "rel": "reauthorize",
      "method": "POST",
      "href": "https://api-m.paypal.com/v2/payments/authorizations/8AA831015G517922L/reauthorize"
    }
  ]
}
```

> 201 Response

```json
{
  "id": "8AA831015G517922L",
  "status": "CREATED",
  "links": [
    {
      "rel": "self",
      "method": "GET",
      "href": "https://api-m.paypal.com/v2/payments/authorizations/8AA831015G517922L"
    },
    {
      "rel": "capture",
      "method": "POST",
      "href": "https://api-m.paypal.com/v2/payments/authorizations/8AA831015G517922L/capture"
    },
    {
      "rel": "void",
      "method": "POST",
      "href": "https://api-m.paypal.com/v2/payments/authorizations/8AA831015G517922L/void"
    },
    {
      "rel": "reauthorize",
      "method": "POST",
      "href": "https://api-m.paypal.com/v2/payments/authorizations/8AA831015G517922L/reauthorize"
    }
  ]
}
```

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "debug_id": "90bff07028f7f",
  "details": [
    {
      "field": "/amount/value",
      "value": "123456789012345678901234567890123",
      "issue": "INVALID_STRING_MAX_LENGTH",
      "description": "the value of a field is too long.",
      "location": "body"
    }
  ]
}
```

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "debug_id": "b1d1f06c7246c",
  "message": "Authentication failed due to missing Authorization header, or invalid authentication credentials."
}
```

> 403 Response

```json
{
  "name": "NOT_AUTHORIZED",
  "debug_id": "b1d1f06c7246c",
  "message": "Authorization failed due to insufficient permissions."
}
```

> 404 Response

```json
{
  "name": "RESOURCE_NOT_FOUND",
  "debug_id": "b1d1f06c7246c",
  "message": "The specified resource does not exist."
}
```

> 422 Response

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "debug_id": "90bff07028f7f",
  "details": [
    {
      "issue": "AUTH_CURRENCY_MISMATCH",
      "description": "The currency specified during reauthorization should be the same as the currency specified in the original authorization. Please check the currency of the authorization for which you are trying to reauthorize and try again."
    }
  ],
  "links": [
    {
      "href": "https://developer.paypal.com/docs/api/payments/v2/#error-AUTH_CURRENCY_MISMATCH",
      "rel": "information_link"
    }
  ]
}
```

> 500 Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "debug_id": "b1d1f06c7246c",
  "message": "An internal server error has occurred."
}
```

> default Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "debug_id": "b1d1f06c7246c",
  "message": "An internal server error has occurred."
}
```

<h3 id="reauthorize-authorized-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP <code>200 OK</code> status code and a JSON response body that shows the reauthorized payment details.|[authorization-2](#schemaauthorization-2)|
|201|Created|A successful request returns the HTTP <code>201 Created</code> status code and a JSON response body that shows the reauthorized payment details.|[authorization-2](#schemaauthorization-2)|
|400|Bad Request|The request failed because it is not well-formed or is syntactically incorrect or violates schema.|[error](#schemaerror)|
|401|Unauthorized|Unauthorized.|[error](#schemaerror)|
|403|Forbidden|Forbidden.|[error](#schemaerror)|
|404|Not Found|Not Found.|[error](#schemaerror)|
|422|Unprocessable Entity|The request failed because it either is semantically incorrect or failed business validation.|[error](#schemaerror)|
|500|Internal Server Error|Internal Server Error.|[error](#schemaerror)|
|default|Default|Default response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/payments/payment/authcapture )
</aside>

## Void authorized payment

<a id="opIdauthorizations.void"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/payments/authorizations/0VF52814937998046/void \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/payments/authorizations/{authorization_id}/void`

Voids, or cancels, an authorized payment, by ID. You cannot void an authorized payment that has been fully captured.

<h3 id="void-authorized-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorization_id|path|string|true|The PayPal-generated ID for the authorized payment to void.|
|Authorization|header|[standard_header_schema](#schemastandard_header_schema)|false|Holds authorization information for external API calls.|
|PayPal-Auth-Assertion|header|string|false|Header for an API client-provided JWT assertion that identifies the merchant. Establishing the consent to act-on-behalf of a merchant is a prerequisite for using this header.|
|PayPal-Request-Id|header|string|false|A unique ID identifying the request header for idempotency purposes.|
|Prefer|header|string|false|The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>|

> Example responses

> 200 Response

```json
{
  "id": "5C908745JK343851U",
  "status": "VOIDED",
  "amount": {
    "currency_code": "USD",
    "value": "100.00"
  },
  "invoice_id": "OrderInvoice-10_10_2024_12_06_00_pm",
  "seller_protection": {
    "status": "ELIGIBLE",
    "dispute_categories": [
      "ITEM_NOT_RECEIVED",
      "UNAUTHORIZED_TRANSACTION"
    ]
  },
  "expiration_time": "2024-11-08T09:06:03-08:00",
  "create_time": "2024-10-10T10:06:03-07:00",
  "update_time": "2024-10-10T10:06:19-07:00",
  "links": [
    {
      "href": "https://api.paypal.com/v2/payments/authorizations/5C908745JK343851U",
      "rel": "self",
      "method": "GET"
    }
  ]
}
```

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "debug_id": "b1d1f06c7246c",
  "message": "Authentication failed due to missing Authorization header, or invalid authentication credentials."
}
```

> 403 Response

```json
{
  "name": "NOT_AUTHORIZED",
  "debug_id": "b1d1f06c7246c",
  "message": "Authorization failed due to insufficient permissions."
}
```

> 404 Response

```json
{
  "name": "RESOURCE_NOT_FOUND",
  "debug_id": "b1d1f06c7246c",
  "message": "The specified resource does not exist."
}
```

> 409 Response

```json
{
  "name": "RESOURCE_CONFLICT",
  "debug_id": "b1d1f06c7246c",
  "message": "The server has detected a conflict while processing this request.",
  "details": [
    {
      "issue": "PREVIOUS_REQUEST_IN_PROGRESS",
      "description": "A previous request on this resource is currently in progress. Please wait for sometime and try again. It is best to space out the initial and the subsequent request(s) to avoid receiving this error."
    }
  ]
}
```

> 422 Response

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "debug_id": "a7b0de7cb97ad",
  "details": [
    {
      "issue": "PREVIOUSLY_CAPTURED",
      "description": "Authorization has been previously captured and cannot be voided."
    }
  ],
  "links": [
    {
      "href": "https://developer.paypal.com/docs/api/payments/v2/#error-PREVIOUSLY_CAPTURED",
      "rel": "information_link"
    }
  ]
}
```

> 500 Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "debug_id": "b1d1f06c7246c",
  "message": "An internal server error has occurred."
}
```

> default Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "debug_id": "b1d1f06c7246c",
  "message": "An internal server error has occurred."
}
```

<h3 id="void-authorized-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP <code>200 OK</code> status code and a JSON response body that shows authorization details. This response is returned when the Prefer header is set to return=representation.|[authorization-2](#schemaauthorization-2)|
|204|No Content|No Content.|None|
|401|Unauthorized|Unauthorized.|[error](#schemaerror)|
|403|Forbidden|Forbidden.|[error](#schemaerror)|
|404|Not Found|Not Found.|[error](#schemaerror)|
|409|Conflict|The request failed because a previous call for the given resource is in progress.|[error](#schemaerror)|
|422|Unprocessable Entity|The request failed because it either is semantically incorrect or failed business validation.|[error](#schemaerror)|
|500|Internal Server Error|Internal Server Error.|[error](#schemaerror)|
|default|Default|Default response.|[error](#schemaerror)|

<h3 id="void-authorized-payment-callbacks">Callbacks</h3>

|Name|Expression|Method|Description|
|---|---|---|---|
|authorization_voided|authorizations/{$request.path.authorization_id}/void|POST|Authorization voided notification|
|authorization_voided_expired|authorizations/{$request.path.authorization_id}/void-expired|POST|Authorization voided due to expiry notification|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/payments/payment/authcapture )
</aside>

<h1 id="payments-captures">captures</h1>

Use the `/captures` resource to show details for and refund a captured payment.

## Show captured payment details

<a id="opIdcaptures.get"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/payments/captures/74L756601X447022Y \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/payments/captures/{capture_id}`

Shows details for a captured payment, by ID.

<h3 id="show-captured-payment-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|capture_id|path|string|true|The PayPal-generated ID for the captured payment for which to show details.|
|Authorization|header|[standard_header_schema](#schemastandard_header_schema)|false|Holds authorization information for external API calls.|

> Example responses

> 200 Response

```json
{
  "id": "74L756601X447022Y",
  "amount": {
    "currency_code": "USD",
    "value": "100.00"
  },
  "final_capture": true,
  "seller_protection": {
    "status": "ELIGIBLE",
    "dispute_categories": [
      "ITEM_NOT_RECEIVED",
      "UNAUTHORIZED_TRANSACTION"
    ]
  },
  "seller_receivable_breakdown": {
    "gross_amount": {
      "currency_code": "USD",
      "value": "100.00"
    },
    "paypal_fee": {
      "currency_code": "USD",
      "value": "3.98"
    },
    "net_amount": {
      "currency_code": "USD",
      "value": "96.02"
    }
  },
  "invoice_id": "OrderInvoice-23_10_2024_12_27_32_pm",
  "status": "COMPLETED",
  "supplementary_data": {
    "related_ids": {
      "order_id": "25M43554V9523650M",
      "authorization_id": "0T620041CK889853A"
    }
  },
  "payee": {
    "email_address": "merchant@example.com",
    "merchant_id": "YXZY75W2GKDQE"
  },
  "create_time": "2024-10-23T20:55:19Z",
  "update_time": "2024-10-23T20:55:19Z",
  "links": [
    {
      "href": "https://api-m.sandbox.paypal.com/v2/payments/captures/74L756601X447022Y",
      "rel": "self",
      "method": "GET"
    },
    {
      "href": "https://api-m.sandbox.paypal.com/v2/payments/captures/74L756601X447022Y/refund",
      "rel": "refund",
      "method": "POST"
    },
    {
      "href": "https://api-m.sandbox.paypal.com/v2/payments/authorizations/0T620041CK889853A",
      "rel": "up",
      "method": "GET"
    }
  ]
}
```

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "debug_id": "b1d1f06c7246c",
  "message": "Authentication failed due to missing Authorization header, or invalid authentication credentials."
}
```

> 403 Response

```json
{
  "name": "NOT_AUTHORIZED",
  "debug_id": "b1d1f06c7246c",
  "message": "Authorization failed due to insufficient permissions."
}
```

> 404 Response

```json
{
  "name": "RESOURCE_NOT_FOUND",
  "debug_id": "b1d1f06c7246c",
  "message": "The specified resource does not exist."
}
```

> 500 Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "debug_id": "b1d1f06c7246c",
  "message": "An internal server error has occurred."
}
```

> default Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "debug_id": "b1d1f06c7246c",
  "message": "An internal server error has occurred."
}
```

<h3 id="show-captured-payment-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP <code>200 OK</code> status code and a JSON response body that shows captured payment details.|[capture-2](#schemacapture-2)|
|401|Unauthorized|Unauthorized.|[error](#schemaerror)|
|403|Forbidden|Forbidden.|[error](#schemaerror)|
|404|Not Found|Not Found.|[error](#schemaerror)|
|500|Internal Server Error|Internal Server Error.|[error](#schemaerror)|
|default|Default|Default response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/payments/payment/authcapture )
</aside>

## Refund captured payment

<a id="opIdcaptures.refund"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/payments/captures/2GG279541U471931P/refund \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "amount": {
      "value": "1.00",
      "currency_code": "USD"
    },
    "invoice_id": "RefundInvoice-123",
    "custom_id": "RefundCustom-123"
  }'
```

`POST /v2/payments/captures/{capture_id}/refund`

Refunds a captured payment, by ID. For a full refund, include an empty payload in the JSON request body. For a partial refund, include an <code>amount</code> object in the JSON request body.

> Body parameter

```json
{
  "amount": {
    "value": "1.00",
    "currency_code": "USD"
  },
  "invoice_id": "RefundInvoice-123",
  "custom_id": "RefundCustom-123"
}
```

<h3 id="refund-captured-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|capture_id|path|string|true|The PayPal-generated ID for the captured payment to refund.|
|PayPal-Request-Id|header|string|false|A unique ID identifying the request header for idempotency purposes.|
|Prefer|header|string|false|The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>|
|Authorization|header|[standard_header_schema](#schemastandard_header_schema)|false|Holds authorization information for external API calls.|
|PayPal-Auth-Assertion|header|string|false|Header for an API client-provided JWT assertion that identifies the merchant. Establishing the consent to act-on-behalf of a merchant is a prerequisite for using this header.|
|body|body|[refund_request](#schemarefund_request)|false|none|
|» amount|body|object|false|none|
|» » currency_code|body|[currency_code](#schemacurrency_code)|true|The [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) that identifies the currency.|
|» » value|body|string|true|The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency Codes](/api/rest/reference/currency-codes/).|
|» custom_id|body|string|false|The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports. The pattern is defined by an external party and supports Unicode.|
|» invoice_id|body|string|false|The API caller-provided external invoice ID for this order. The pattern is defined by an external party and supports Unicode.|
|» note_to_payer|body|string|false|The reason for the refund. Appears in both the payer's transaction history and the emails that the payer receives. The pattern is defined by an external party and supports Unicode.|
|» payment_instruction|body|object|false|none|
|» » platform_fees|body|[object]|false|Specifies the amount that the API caller will contribute to the refund being processed. The amount needs to be lower than platform_fees amount originally captured or the amount that is remaining if multiple refunds have been processed. This field is only applicable to merchants that have been enabled for PayPal Commerce Platform for Marketplaces and Platforms capability. Please speak to your account manager if you want to use this capability.|
|» » » amount|body|object|true|none|
|» » » » currency_code|body|[currency_code](#schemacurrency_code)|true|The [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) that identifies the currency.|
|» » » » value|body|string|true|The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency Codes](/api/rest/reference/currency-codes/).|
|» » » payee|body|object|false|none|
|» » » » email_address|body|object|false|none|
|» » » » merchant_id|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "id": "0K35355239430361V",
  "amount": {
    "currency_code": "USD",
    "value": "1.00"
  },
  "seller_payable_breakdown": {
    "gross_amount": {
      "currency_code": "USD",
      "value": "1.00"
    },
    "paypal_fee": {
      "currency_code": "USD",
      "value": "0.00"
    },
    "net_amount": {
      "currency_code": "USD",
      "value": "1.00"
    },
    "total_refunded_amount": {
      "currency_code": "USD",
      "value": "11.00"
    }
  },
  "invoice_id": "RefundInvoice-14_10_2024_4_58_32_pm",
  "custom_id": "RefundCustom-14_10_2024_4_58_32_pm",
  "status": "COMPLETED",
  "create_time": "2024-10-14T14:58:34-07:00",
  "update_time": "2024-10-14T14:58:34-07:00",
  "links": [
    {
      "href": "https://api.paypal.com/v2/payments/refunds/0K35355239430361V",
      "rel": "self",
      "method": "GET"
    },
    {
      "href": "https://api.paypal.com/v2/payments/captures/7TK53561YB803214S",
      "rel": "up",
      "method": "GET"
    }
  ]
}
```

> 201 Response

```json
{
  "id": "58K15806CS993444T",
  "amount": {
    "currency_code": "USD",
    "value": "89.00"
  },
  "seller_payable_breakdown": {
    "gross_amount": {
      "currency_code": "USD",
      "value": "89.00"
    },
    "paypal_fee": {
      "currency_code": "USD",
      "value": "0.00"
    },
    "net_amount": {
      "currency_code": "USD",
      "value": "89.00"
    },
    "total_refunded_amount": {
      "currency_code": "USD",
      "value": "100.00"
    }
  },
  "invoice_id": "OrderInvoice-10_10_2024_12_58_20_pm",
  "status": "COMPLETED",
  "create_time": "2024-10-14T15:03:29-07:00",
  "update_time": "2024-10-14T15:03:29-07:00",
  "links": [
    {
      "href": "https://api.msmaster.qa.paypal.com/v2/payments/refunds/58K15806CS993444T",
      "rel": "self",
      "method": "GET"
    },
    {
      "href": "https://api.msmaster.qa.paypal.com/v2/payments/captures/7TK53561YB803214S",
      "rel": "up",
      "method": "GET"
    }
  ]
}
```

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema",
  "debug_id": "78916e688cf7f",
  "details": [
    {
      "issue": "INVALID_STRING_LENGTH",
      "field": "/invoice_id",
      "value": "Fm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinq",
      "description": "The value of a field is either too short or too long.",
      "location": "body"
    }
  ],
  "links": [
    {
      "href": "https://developer.paypal.com/docs/api/payments/v2/#error-INVALID_STRING_LENGTH",
      "rel": "information_link"
    }
  ]
}
```

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "debug_id": "b1d1f06c7246c",
  "message": "Authentication failed due to missing Authorization header, or invalid authentication credentials."
}
```

> 403 Response

```json
{
  "name": "NOT_AUTHORIZED",
  "debug_id": "b1d1f06c7246c",
  "message": "Authorization failed due to insufficient permissions."
}
```

> 404 Response

```json
{
  "name": "RESOURCE_NOT_FOUND",
  "debug_id": "b1d1f06c7246c",
  "message": "The specified resource does not exist."
}
```

> 409 Response

```json
{
  "name": "RESOURCE_CONFLICT",
  "debug_id": "b1d1f06c7246c",
  "message": "The server has detected a conflict while processing this request.",
  "details": [
    {
      "issue": "PREVIOUS_REQUEST_IN_PROGRESS",
      "description": "A previous request on this resource is currently in progress. Please wait for some time and try again. It is best to space out the initial and the subsequent request(s) to avoid receiving this error."
    }
  ]
}
```

> 422 Response

```json
{
  "name": "UNPROCCESSABLE_ENTITY",
  "message": "The requested action could not be completed, is semantically incorrect, or failed business validation.",
  "debug_id": "90bff07028f7f",
  "details": [
    {
      "issue": "REFUND_AMOUNT_EXCEEDED",
      "description": "The refund amount must be less than or equal to the capture amount that has not yet been refunded."
    }
  ]
}
```

> 500 Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "debug_id": "b1d1f06c7246c",
  "message": "An internal server error has occurred."
}
```

> default Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "debug_id": "b1d1f06c7246c",
  "message": "An internal server error has occurred."
}
```

<h3 id="refund-captured-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP <code>200 OK</code> status code and a JSON response body that shows refund details.|[refund](#schemarefund)|
|201|Created|A successful request returns the HTTP <code>201 Created</code> status code and a JSON response body that shows refund details.|[refund](#schemarefund)|
|400|Bad Request|The request failed because it is not well-formed or is syntactically incorrect or violates schema.|[error](#schemaerror)|
|401|Unauthorized|Unauthorized.|[error](#schemaerror)|
|403|Forbidden|Forbidden.|[error](#schemaerror)|
|404|Not Found|Not Found.|[error](#schemaerror)|
|409|Conflict|The request failed because a previous call for the given resource is in progress.|[error](#schemaerror)|
|422|Unprocessable Entity|The request failed because it either is semantically incorrect or failed business validation.|[error](#schemaerror)|
|500|Internal Server Error|Internal Server Error.|[error](#schemaerror)|
|default|Default|Default response.|[error](#schemaerror)|

<h3 id="refund-captured-payment-callbacks">Callbacks</h3>

|Name|Expression|Method|Description|
|---|---|---|---|
|capture_refunded|captures/{$request.path.capture_id}/refunds|POST|Capture refunded notification|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/payments/refund )
</aside>

<h1 id="payments-find-eligible-methods">find-eligible-methods</h1>

Use the `/find-eligible-methods` resource to show list of eligible payment methods for given customer/order context.

## Find a list of eligible payment methods.

<a id="opIdfind.eligible.methods"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/payments/find-eligible-methods \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "customer": {
      "country_code": "US",
      "channel": {
        "browser_type": "SAFARI",
        "device_type": "MOBILE",
        "client_os": "IOS"
      }
    },
    "purchase_units": [
      {
        "amount": {
          "currency_code": "USD",
          "value": "100.00"
        }
      }
    ],
    "preferences": {
      "payment_source_constraint": {
        "constraint_type": "EXCLUDE",
        "payment_sources": [
          "PAYPAL"
        ]
      }
    }
  }'
```

`POST /v2/payments/find-eligible-methods`

Get a list of eligible payment methods based on the input parameters provided.

> Body parameter

```json
{
  "customer": {
    "country_code": "US",
    "channel": {
      "browser_type": "SAFARI",
      "device_type": "MOBILE",
      "client_os": "IOS"
    }
  },
  "purchase_units": [
    {
      "amount": {
        "currency_code": "USD",
        "value": "100.00"
      }
    }
  ],
  "preferences": {
    "payment_source_constraint": {
      "constraint_type": "EXCLUDE",
      "payment_sources": [
        "PAYPAL"
      ]
    }
  }
}
```

<h3 id="find-a-list-of-eligible-payment-methods-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|[standard_header_schema](#schemastandard_header_schema)|false|Holds authorization information for external API calls.|
|PayPal-Auth-Assertion|header|string|false|Header for an API client-provided JWT assertion that identifies the merchant. Establishing the consent to act-on-behalf of a merchant is a prerequisite for using this header.|
|User-Agent|header|[standard_header_schema](#schemastandard_header_schema)|false|A characteristic string that lets servers and network peers identify the application, operating system, vendor, and/or version of the requesting user agent. API calls made by PayPal SDKs SHOULD be identified using this request header.|
|PayPal-Client-Metadata-Id|header|[guid](#schemaguid)|false|A GUID value originating from Fraudnet and Dyson passed from external API clients via HTTP header. The value is used by Risk decisions to correlate calls which, in turn, might result in lower decline rates..|
|body|body|[find_eligible_methods_request](#schemafind_eligible_methods_request)|false|none|
|» customer|body|[find_eligible_methods_request_customer](#schemafind_eligible_methods_request_customer)|false|Customer who is making a purchase from the merchant/partner.|
|» purchase_units|body|[[eligibility_purchase_unit_request](#schemaeligibility_purchase_unit_request)]|false|Array of purchase units.|
|» preferences|body|[find_eligible_methods_request_preferences](#schemafind_eligible_methods_request_preferences)|false|Preferences of merchant/partner consuming the API.|

> Example responses

> 200 Response

```json
{
  "eligible_methods": {
    "venmo": {
      "can_be_vaulted": true
    }
  }
}
```

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "debug_id": "b1d1f06c7246c",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema",
  "details": [
    {
      "field": "/customer/country_code",
      "value": "USA",
      "location": "body",
      "issue": "INVALID_STRING_LENGTH",
      "description": "The value of a field is either too short or too long."
    }
  ],
  "links": [
    {
      "href": "https://developer.paypal.com/docs/api/payments/v2/#errors",
      "rel": "information_link",
      "method": "GET",
      "encType": "application/json"
    }
  ]
}
```

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "debug_id": "b1d1f06c7246c",
  "message": "Authentication failed due to missing Authorization header, or invalid authentication credentials."
}
```

> 403 Response

```json
{
  "name": "NOT_AUTHORIZED",
  "debug_id": "b1d1f06c7246c",
  "message": "Authorization failed due to insufficient permissions."
}
```

> 422 Response

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "debug_id": "90bff07028f7f",
  "details": [
    {
      "field": "/purchase_units/amount/currency_code",
      "value": "III",
      "issue": "INVALID_CURRENCY_CODE",
      "description": "Currency code is invalid. Please refer https://developer.paypal.com/docs/integration/direct/rest/currency-codes/ for list of supported currency codes."
    }
  ],
  "links": [
    {
      "href": "https://developer.paypal.com/docs/api/payments/v2/#errors",
      "rel": "information_link",
      "method": "GET"
    }
  ]
}
```

> 500 Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "debug_id": "b1d1f06c7246c",
  "message": "An internal server error has occurred."
}
```

> default Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "debug_id": "b1d1f06c7246c",
  "message": "An internal server error has occurred."
}
```

<h3 id="find-a-list-of-eligible-payment-methods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP <code>200 OK</code> status code and a JSON response body that provides list of eligibile payments.|[find_eligible_methods_response](#schemafind_eligible_methods_response)|
|400|Bad Request|The request failed because it is not well-formed or is syntactically incorrect or violates schema.|[error](#schemaerror)|
|401|Unauthorized|Unauthorized.|[error](#schemaerror)|
|403|Forbidden|Forbidden.|[error](#schemaerror)|
|422|Unprocessable Entity|The request failed because it either is semantically incorrect or failed business validation.|[error](#schemaerror)|
|500|Internal Server Error|Internal Server Error.|[error](#schemaerror)|
|default|Default|Default response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/payments/realtimepayment https://uri.paypal.com/services/payments/payments-ready Braintree:PaymentsReady https://uri.paypal.com/services/payments/client-payments-eligibility )
</aside>

<h1 id="payments-refunds">refunds</h1>

Use the `/refunds` resource to show refund details.

## Show refund details

<a id="opIdrefunds.get"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/payments/refunds/1JU08902781691411 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/payments/refunds/{refund_id}`

Shows details for a refund, by ID.

<h3 id="show-refund-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|refund_id|path|string|true|The PayPal-generated ID for the refund for which to show details.|
|Authorization|header|[standard_header_schema](#schemastandard_header_schema)|false|Holds authorization information for external API calls.|
|PayPal-Auth-Assertion|header|string|false|Header for an API client-provided JWT assertion that identifies the merchant. Establishing the consent to act-on-behalf of a merchant is a prerequisite for using this header.|

> Example responses

> 200 Response

```json
{
  "id": "1JU08902781691411",
  "amount": {
    "value": "10.99",
    "currency_code": "USD"
  },
  "status": "COMPLETED",
  "note": "Defective product",
  "seller_payable_breakdown": {
    "gross_amount": {
      "value": "10.99",
      "currency_code": "USD"
    },
    "paypal_fee": {
      "value": "0.33",
      "currency_code": "USD"
    },
    "platform_fees": [
      {
        "amount": {
          "currency_code": "USD",
          "value": "1.00"
        },
        "payee": {
          "email_address": "fee@example.com"
        }
      }
    ],
    "net_amount": {
      "value": "9.66",
      "currency_code": "USD"
    },
    "total_refunded_amount": {
      "value": "10.99",
      "currency_code": "USD"
    }
  },
  "invoice_id": "INVOICE-123",
  "create_time": "2018-09-11T23:24:19Z",
  "update_time": "2018-09-11T23:24:19Z",
  "links": [
    {
      "rel": "self",
      "method": "GET",
      "href": "https://api-m.paypal.com/v2/payments/refunds/1JU08902781691411"
    },
    {
      "rel": "up",
      "method": "GET",
      "href": "https://api-m.paypal.com/v2/payments/captures/2GG279541U471931P"
    }
  ]
}
```

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "debug_id": "b1d1f06c7246c",
  "message": "Authentication failed due to missing Authorization header, or invalid authentication credentials."
}
```

> 403 Response

```json
{
  "name": "NOT_AUTHORIZED",
  "debug_id": "b1d1f06c7246c",
  "message": "Authorization failed due to insufficient permissions."
}
```

> 404 Response

```json
{
  "name": "RESOURCE_NOT_FOUND",
  "debug_id": "b1d1f06c7246c",
  "message": "The specified resource does not exist."
}
```

> 500 Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "debug_id": "b1d1f06c7246c",
  "message": "An internal server error has occurred."
}
```

> default Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "debug_id": "b1d1f06c7246c",
  "message": "An internal server error has occurred."
}
```

<h3 id="show-refund-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP <code>200 OK</code> status code and a JSON response body that shows refund details.|[refund](#schemarefund)|
|401|Unauthorized|Unauthorized.|[error](#schemaerror)|
|403|Forbidden|Forbidden.|[error](#schemaerror)|
|404|Not Found|Not Found.|[error](#schemaerror)|
|500|Internal Server Error|Internal Server Error.|[error](#schemaerror)|
|default|Default|Default response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/payments/refund )
</aside>

# Schemas

<h2 id="tocS_standard_header_schema">standard_header_schema</h2>
<!-- backwards compatibility -->
<a id="schemastandard_header_schema"></a>
<a id="schema_standard_header_schema"></a>
<a id="tocSstandard_header_schema"></a>
<a id="tocsstandard_header_schema"></a>

```json
"string"
```

Standard headers are generally less restrictive in structure due to historical precedent across browsers, etc. This is a common schema for use in defining most standard headers.

<h2 id="tocS_email_address">email_address</h2>
<!-- backwards compatibility -->
<a id="schemaemail_address"></a>
<a id="schema_email_address"></a>
<a id="tocSemail_address"></a>
<a id="tocsemail_address"></a>

```json
"string"
```

The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote>

<h2 id="tocS_card_brand">card_brand</h2>
<!-- backwards compatibility -->
<a id="schemacard_brand"></a>
<a id="schema_card_brand"></a>
<a id="tocScard_brand"></a>
<a id="tocscard_brand"></a>

```json
"VISA"
```

The card network or brand. Applies to credit, debit, gift, and payment cards.

<h2 id="tocS_email">email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
"string"
```

The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote>

<h2 id="tocS_network_transaction">network_transaction</h2>
<!-- backwards compatibility -->
<a id="schemanetwork_transaction"></a>
<a id="schema_network_transaction"></a>
<a id="tocSnetwork_transaction"></a>
<a id="tocsnetwork_transaction"></a>

```json
{
  "id": "stringstr",
  "date": "stri",
  "network": {},
  "acquirer_reference_number": "string"
}
```

Reference values used by the card network to identify a transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Transaction reference id returned by the scheme. For Visa and Amex, this is the "Tran id" field in response. For MasterCard, this is the "BankNet reference id" field in response. For Discover, this is the "NRID" field in response. The pattern we expect for this field from Visa/Amex/CB/Discover is numeric, Mastercard/BNPP is alphanumeric and Paysecure is alphanumeric with special character -.|
|date|string|false|none|The date that the transaction was authorized by the scheme. This field may not be returned for all networks. MasterCard refers to this field as "BankNet reference date". For some specific networks, such as MasterCard and Discover, this date field is mandatory when the `previous_network_transaction_reference_id` is passed.|
|network|object|false|none|none|
|acquirer_reference_number|string|false|none|Reference ID issued for the card transaction. This ID can be used to track the transaction across processors, card brands and issuing banks.|

<h2 id="tocS_currency_code">currency_code</h2>
<!-- backwards compatibility -->
<a id="schemacurrency_code"></a>
<a id="schema_currency_code"></a>
<a id="tocScurrency_code"></a>
<a id="tocscurrency_code"></a>

```json
"str"
```

The [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) that identifies the currency.

<h2 id="tocS_money">money</h2>
<!-- backwards compatibility -->
<a id="schemamoney"></a>
<a id="schema_money"></a>
<a id="tocSmoney"></a>
<a id="tocsmoney"></a>

```json
{
  "currency_code": "str",
  "value": "string"
}
```

The currency and amount for a financial transaction, such as a balance or payment due.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency_code|[currency_code](#schemacurrency_code)|true|none|The [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) that identifies the currency.|
|value|string|true|none|The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency Codes](/api/rest/reference/currency-codes/).|

<h2 id="tocS_date_time">date_time</h2>
<!-- backwards compatibility -->
<a id="schemadate_time"></a>
<a id="schema_date_time"></a>
<a id="tocSdate_time"></a>
<a id="tocsdate_time"></a>

```json
"stringstringstringst"
```

The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote>

<h2 id="tocS_country_code-2">country_code-2</h2>
<!-- backwards compatibility -->
<a id="schemacountry_code-2"></a>
<a id="schema_country_code-2"></a>
<a id="tocScountry_code-2"></a>
<a id="tocscountry_code-2"></a>

```json
"st"
```

The [two-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>

<h2 id="tocS_phone-2">phone-2</h2>
<!-- backwards compatibility -->
<a id="schemaphone-2"></a>
<a id="schema_phone-2"></a>
<a id="tocSphone-2"></a>
<a id="tocsphone-2"></a>

```json
{
  "country_code": "str",
  "national_number": "string",
  "extension_number": "string"
}
```

The phone number in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country_code|string|true|none|The country calling code (CC), in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the CC and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).|
|national_number|string|true|none|The national number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the country calling code (CC) and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).|
|extension_number|string|false|none|The extension number.|

<h2 id="tocS_discount_with_breakdown">discount_with_breakdown</h2>
<!-- backwards compatibility -->
<a id="schemadiscount_with_breakdown"></a>
<a id="schema_discount_with_breakdown"></a>
<a id="tocSdiscount_with_breakdown"></a>
<a id="tocsdiscount_with_breakdown"></a>

```json
{
  "currency_code": "str",
  "value": "string"
}
```

The discount amount and currency code. For list of supported currencies and decimal precision, see the PayPal REST APIs <a href="/docs/integration/direct/rest/currency-codes/">Currency Codes</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency_code|[currency_code](#schemacurrency_code)|true|none|The [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) that identifies the currency.|
|value|string|true|none|The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency Codes](/api/rest/reference/currency-codes/).|

<h2 id="tocS_amount_breakdown">amount_breakdown</h2>
<!-- backwards compatibility -->
<a id="schemaamount_breakdown"></a>
<a id="schema_amount_breakdown"></a>
<a id="tocSamount_breakdown"></a>
<a id="tocsamount_breakdown"></a>

```json
{
  "item_total": {
    "currency_code": "str",
    "value": "string"
  },
  "shipping": {
    "currency_code": "str",
    "value": "string"
  },
  "handling": {
    "currency_code": "str",
    "value": "string"
  },
  "tax_total": {
    "currency_code": "str",
    "value": "string"
  },
  "insurance": {
    "currency_code": "str",
    "value": "string"
  },
  "shipping_discount": {
    "currency_code": "str",
    "value": "string"
  },
  "discount": {
    "currency_code": "str",
    "value": "string"
  }
}
```

The breakdown of the amount. Breakdown provides details such as total item amount, total tax amount, shipping, handling, insurance, and discounts, if any.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item_total|object|false|none|none|
|shipping|object|false|none|none|
|handling|object|false|none|none|
|tax_total|object|false|none|none|
|insurance|object|false|none|none|
|shipping_discount|object|false|none|none|
|discount|object|false|none|none|

<h2 id="tocS_amount_with_breakdown">amount_with_breakdown</h2>
<!-- backwards compatibility -->
<a id="schemaamount_with_breakdown"></a>
<a id="schema_amount_with_breakdown"></a>
<a id="tocSamount_with_breakdown"></a>
<a id="tocsamount_with_breakdown"></a>

```json
{
  "currency_code": "str",
  "value": "string",
  "breakdown": {
    "item_total": {
      "currency_code": "str",
      "value": "string"
    },
    "shipping": {
      "currency_code": "str",
      "value": "string"
    },
    "handling": {
      "currency_code": "str",
      "value": "string"
    },
    "tax_total": {
      "currency_code": "str",
      "value": "string"
    },
    "insurance": {
      "currency_code": "str",
      "value": "string"
    },
    "shipping_discount": {
      "currency_code": "str",
      "value": "string"
    },
    "discount": {
      "currency_code": "str",
      "value": "string"
    }
  }
}
```

The total order amount with an optional breakdown that provides details, such as the total item amount, total tax amount, shipping, handling, insurance, and discounts, if any.<br/>If you specify `amount.breakdown`, the amount equals `item_total` plus `tax_total` plus `shipping` plus `handling` plus `insurance` minus `shipping_discount` minus discount.<br/>The amount must be a positive number. For listed of supported currencies and decimal precision, see the PayPal REST APIs <a href="/docs/integration/direct/rest/currency-codes/">Currency Codes</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency_code|[currency_code](#schemacurrency_code)|true|none|The [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) that identifies the currency.|
|value|string|true|none|The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency Codes](/api/rest/reference/currency-codes/).|
|breakdown|[amount_breakdown](#schemaamount_breakdown)|false|none|The breakdown of the amount. Breakdown provides details such as total item amount, total tax amount, shipping, handling, insurance, and discounts, if any.|

<h2 id="tocS_account_id-2">account_id-2</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_id-2"></a>
<a id="schema_account_id-2"></a>
<a id="tocSaccount_id-2"></a>
<a id="tocsaccount_id-2"></a>

```json
"stringstrings"
```

The account identifier for a PayPal account.

<h2 id="tocS_payee_base">payee_base</h2>
<!-- backwards compatibility -->
<a id="schemapayee_base"></a>
<a id="schema_payee_base"></a>
<a id="tocSpayee_base"></a>
<a id="tocspayee_base"></a>

```json
{
  "email_address": {},
  "merchant_id": {}
}
```

The details for the merchant who receives the funds and fulfills the order. The merchant is also known as the payee.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_address|object|false|none|none|
|merchant_id|object|false|none|none|

<h2 id="tocS_payee">payee</h2>
<!-- backwards compatibility -->
<a id="schemapayee"></a>
<a id="schema_payee"></a>
<a id="tocSpayee"></a>
<a id="tocspayee"></a>

```json
{
  "email_address": {},
  "merchant_id": {}
}
```

The merchant who receives the funds and fulfills the order. The merchant is also known as the payee.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_address|object|false|none|none|
|merchant_id|object|false|none|none|

<h2 id="tocS_link_schema">link_schema</h2>
<!-- backwards compatibility -->
<a id="schemalink_schema"></a>
<a id="schema_link_schema"></a>
<a id="tocSlink_schema"></a>
<a id="tocslink_schema"></a>

```json
{
  "additionalItems": {},
  "dependencies": {},
  "items": {},
  "definitions": {},
  "patternProperties": {},
  "properties": {},
  "allOf": [
    {}
  ],
  "anyOf": [
    {}
  ],
  "oneOf": [
    {}
  ],
  "not": {},
  "links": [
    {}
  ],
  "fragmentResolution": "string",
  "media": {
    "type": "string",
    "binaryEncoding": "string"
  },
  "pathStart": "http://example.com"
}
```

The request data or link target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalItems|object|false|none|Any additional items.|
|dependencies|object|false|none|The dependencies.|
|items|object|false|none|An item.|
|definitions|object|false|none|Definitions.|
|patternProperties|object|false|none|The pattern properties.|
|properties|object|false|none|The properties.|
|allOf|[object]|false|none|An array of sub-schemas. The data must validate against all sub-schemas.|
|anyOf|[object]|false|none|An array of sub-schemas. The data must validate against one or more sub-schemas.|
|oneOf|[object]|false|none|An array of sub-schemas. The data must validate against one sub-schema.|
|not|object|false|none|Not.|
|links|[object]|false|read-only|An array of links.|
|fragmentResolution|string|false|none|The fragment resolution.|
|media|object|false|none|The media type and context-encoding scheme.|
|pathStart|string(uri)|false|none|To apply this schema to the instances' URIs, start the URIs with this value.|

<h2 id="tocS_link_description">link_description</h2>
<!-- backwards compatibility -->
<a id="schemalink_description"></a>
<a id="schema_link_description"></a>
<a id="tocSlink_description"></a>
<a id="tocslink_description"></a>

```json
{
  "href": "string",
  "rel": "string",
  "method": "GET",
  "title": "string",
  "mediaType": "string",
  "encType": "application/json",
  "schema": {
    "additionalItems": {},
    "dependencies": {},
    "items": {},
    "definitions": {},
    "patternProperties": {},
    "properties": {},
    "allOf": [
      {}
    ],
    "anyOf": [
      {}
    ],
    "oneOf": [
      {}
    ],
    "not": {},
    "links": [
      {}
    ],
    "fragmentResolution": "string",
    "media": {
      "type": "string",
      "binaryEncoding": "string"
    },
    "pathStart": "http://example.com"
  },
  "targetSchema": {
    "additionalItems": {},
    "dependencies": {},
    "items": {},
    "definitions": {},
    "patternProperties": {},
    "properties": {},
    "allOf": [
      {}
    ],
    "anyOf": [
      {}
    ],
    "oneOf": [
      {}
    ],
    "not": {},
    "links": [
      {}
    ],
    "fragmentResolution": "string",
    "media": {
      "type": "string",
      "binaryEncoding": "string"
    },
    "pathStart": "http://example.com"
  }
}
```

The request-related [HATEOAS link](/api/rest/responses/#hateoas-links) information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.|
|rel|string|true|none|The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).|
|method|string|false|none|The HTTP method required to make the related call.|
|title|string|false|none|The link title.|
|mediaType|string|false|none|The media type, as defined by [RFC 2046](https://www.ietf.org/rfc/rfc2046.txt). Describes the link target.|
|encType|string|false|none|The media type in which to submit the request data.|
|schema|object|false|none|none|
|targetSchema|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|DELETE|
|method|HEAD|
|method|CONNECT|
|method|OPTIONS|
|method|PATCH|

<h2 id="tocS_error_details">error_details</h2>
<!-- backwards compatibility -->
<a id="schemaerror_details"></a>
<a id="schema_error_details"></a>
<a id="tocSerror_details"></a>
<a id="tocserror_details"></a>

```json
{
  "field": "string",
  "value": "string",
  "location": "body",
  "issue": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET",
      "title": "string",
      "mediaType": "string",
      "encType": "application/json",
      "schema": {
        "additionalItems": {},
        "dependencies": {},
        "items": {},
        "definitions": {},
        "patternProperties": {},
        "properties": {},
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "oneOf": [
          {}
        ],
        "not": {},
        "links": [
          {}
        ],
        "fragmentResolution": "string",
        "media": {
          "type": "string",
          "binaryEncoding": "string"
        },
        "pathStart": "http://example.com"
      },
      "targetSchema": {
        "additionalItems": {},
        "dependencies": {},
        "items": {},
        "definitions": {},
        "patternProperties": {},
        "properties": {},
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "oneOf": [
          {}
        ],
        "not": {},
        "links": [
          {}
        ],
        "fragmentResolution": "string",
        "media": {
          "type": "string",
          "binaryEncoding": "string"
        },
        "pathStart": "http://example.com"
      }
    }
  ],
  "description": "string"
}
```

The error details. Required for client-side `4XX` errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors.|
|value|string|false|none|The value of the field that caused the error.|
|location|string|false|none|The location of the field that caused the error. Value is `body`, `path`, or `query`.|
|issue|string|true|none|The unique, fine-grained application-level error code.|
|links|[object]|false|read-only|An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links) that are either relevant to the issue by providing additional information or offering potential resolutions.|
|description|string|false|none|The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value.|

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET",
          "title": "string",
          "mediaType": "string",
          "encType": "application/json",
          "schema": {
            "additionalItems": {},
            "dependencies": {},
            "items": {},
            "definitions": {},
            "patternProperties": {},
            "properties": {},
            "allOf": [
              {}
            ],
            "anyOf": [
              {}
            ],
            "oneOf": [
              {}
            ],
            "not": {},
            "links": [
              {}
            ],
            "fragmentResolution": "string",
            "media": {
              "type": "string",
              "binaryEncoding": "string"
            },
            "pathStart": "http://example.com"
          },
          "targetSchema": {
            "additionalItems": {},
            "dependencies": {},
            "items": {},
            "definitions": {},
            "patternProperties": {},
            "properties": {},
            "allOf": [
              {}
            ],
            "anyOf": [
              {}
            ],
            "oneOf": [
              {}
            ],
            "not": {},
            "links": [
              {}
            ],
            "fragmentResolution": "string",
            "media": {
              "type": "string",
              "binaryEncoding": "string"
            },
            "pathStart": "http://example.com"
          }
        }
      ],
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET",
      "title": "string",
      "mediaType": "string",
      "encType": "application/json",
      "schema": {
        "additionalItems": {},
        "dependencies": {},
        "items": {},
        "definitions": {},
        "patternProperties": {},
        "properties": {},
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "oneOf": [
          {}
        ],
        "not": {},
        "links": [
          {}
        ],
        "fragmentResolution": "string",
        "media": {
          "type": "string",
          "binaryEncoding": "string"
        },
        "pathStart": "http://example.com"
      },
      "targetSchema": {
        "additionalItems": {},
        "dependencies": {},
        "items": {},
        "definitions": {},
        "patternProperties": {},
        "properties": {},
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "oneOf": [
          {}
        ],
        "not": {},
        "links": [
          {}
        ],
        "fragmentResolution": "string",
        "media": {
          "type": "string",
          "binaryEncoding": "string"
        },
        "pathStart": "http://example.com"
      }
    }
  ]
}
```

The error details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The human-readable, unique name of the error.|
|message|string|true|none|The message that describes the error.|
|debug_id|string|true|none|The PayPal internal ID. Used for correlation purposes.|
|details|[object]|false|none|An array of additional details about the error.|
|links|[object]|false|read-only|An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links).|

<h2 id="tocS_authorization_status_details">authorization_status_details</h2>
<!-- backwards compatibility -->
<a id="schemaauthorization_status_details"></a>
<a id="schema_authorization_status_details"></a>
<a id="tocSauthorization_status_details"></a>
<a id="tocsauthorization_status_details"></a>

```json
{
  "reason": "PENDING_REVIEW"
}
```

The details of the authorized payment status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The reason why the authorized status is `PENDING`.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|PENDING_REVIEW|
|reason|DECLINED_BY_RISK_FRAUD_FILTERS|

<h2 id="tocS_authorization_status">authorization_status</h2>
<!-- backwards compatibility -->
<a id="schemaauthorization_status"></a>
<a id="schema_authorization_status"></a>
<a id="tocSauthorization_status"></a>
<a id="tocsauthorization_status"></a>

```json
{
  "status": "CREATED",
  "status_details": {
    "reason": "PENDING_REVIEW"
  }
}
```

The status fields and status details for an authorized payment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|read-only|The status for the authorized payment.|
|status_details|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CREATED|
|status|CAPTURED|
|status|DENIED|
|status|PARTIALLY_CAPTURED|
|status|VOIDED|
|status|PENDING|

<h2 id="tocS_seller_protection">seller_protection</h2>
<!-- backwards compatibility -->
<a id="schemaseller_protection"></a>
<a id="schema_seller_protection"></a>
<a id="tocSseller_protection"></a>
<a id="tocsseller_protection"></a>

```json
{
  "status": "ELIGIBLE",
  "dispute_categories": [
    "ITEM_NOT_RECEIVED"
  ]
}
```

The level of protection offered as defined by [PayPal Seller Protection for Merchants](https://www.paypal.com/us/webapps/mpp/security/seller-protection).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|read-only|Indicates whether the transaction is eligible for seller protection. For information, see [PayPal Seller Protection for Merchants](https://www.paypal.com/us/webapps/mpp/security/seller-protection).|
|dispute_categories|[string]|false|read-only|An array of conditions that are covered for the transaction.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ELIGIBLE|
|status|PARTIALLY_ELIGIBLE|
|status|NOT_ELIGIBLE|
|dispute_categories|ITEM_NOT_RECEIVED|
|dispute_categories|UNAUTHORIZED_TRANSACTION|

<h2 id="tocS_link_schema-2">link_schema-2</h2>
<!-- backwards compatibility -->
<a id="schemalink_schema-2"></a>
<a id="schema_link_schema-2"></a>
<a id="tocSlink_schema-2"></a>
<a id="tocslink_schema-2"></a>

```json
{
  "additionalItems": {},
  "dependencies": {},
  "items": {},
  "definitions": {},
  "patternProperties": {},
  "properties": {},
  "allOf": [
    {}
  ],
  "anyOf": [
    {}
  ],
  "oneOf": [
    {}
  ],
  "not": {},
  "links": [
    {}
  ],
  "fragmentResolution": "string",
  "media": {
    "type": "string",
    "binaryEncoding": "string"
  },
  "pathStart": "http://example.com"
}
```

The request data or link target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalItems|object|false|none|Any additional items.|
|dependencies|object|false|none|Any Dependencies.|
|items|object|false|none|An item.|
|definitions|object|false|none|Definitions.|
|patternProperties|object|false|none|The pattern properties.|
|properties|object|false|none|Properties.|
|allOf|[object]|false|none|An array of sub-schemas. The data must validate against all sub-schemas.|
|anyOf|[object]|false|none|An array of sub-schemas. The data must validate against one or more sub-schemas.|
|oneOf|[object]|false|none|An array of sub-schemas. The data must validate against one sub-schema.|
|not|object|false|none|Not.|
|links|[object]|false|read-only|An array of links.|
|fragmentResolution|string|false|none|The fragment resolution.|
|media|object|false|none|The media type and context-encoding scheme.|
|pathStart|string(uri)|false|none|To apply this schema to the instances' URIs, start the URIs with this value.|

<h2 id="tocS_link_description-2">link_description-2</h2>
<!-- backwards compatibility -->
<a id="schemalink_description-2"></a>
<a id="schema_link_description-2"></a>
<a id="tocSlink_description-2"></a>
<a id="tocslink_description-2"></a>

```json
{
  "href": "string",
  "rel": "string",
  "method": "GET",
  "title": "string",
  "mediaType": "string",
  "encType": "application/json",
  "schema": {
    "additionalItems": {},
    "dependencies": {},
    "items": {},
    "definitions": {},
    "patternProperties": {},
    "properties": {},
    "allOf": [
      {}
    ],
    "anyOf": [
      {}
    ],
    "oneOf": [
      {}
    ],
    "not": {},
    "links": [
      {}
    ],
    "fragmentResolution": "string",
    "media": {
      "type": "string",
      "binaryEncoding": "string"
    },
    "pathStart": "http://example.com"
  },
  "targetSchema": {
    "additionalItems": {},
    "dependencies": {},
    "items": {},
    "definitions": {},
    "patternProperties": {},
    "properties": {},
    "allOf": [
      {}
    ],
    "anyOf": [
      {}
    ],
    "oneOf": [
      {}
    ],
    "not": {},
    "links": [
      {}
    ],
    "fragmentResolution": "string",
    "media": {
      "type": "string",
      "binaryEncoding": "string"
    },
    "pathStart": "http://example.com"
  }
}
```

The request-related [HATEOAS link](/api/rest/responses/#hateoas-links) information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.|
|rel|string|true|none|The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).|
|method|string|false|none|The HTTP method required to make the related call.|
|title|string|false|none|The link title.|
|mediaType|string|false|none|The media type, as defined by [RFC 2046](https://www.ietf.org/rfc/rfc2046.txt). Describes the link target.|
|encType|string|false|none|The media type in which to submit the request data.|
|schema|object|false|none|none|
|targetSchema|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|DELETE|
|method|HEAD|
|method|CONNECT|
|method|OPTIONS|
|method|PATCH|

<h2 id="tocS_activity_timestamps">activity_timestamps</h2>
<!-- backwards compatibility -->
<a id="schemaactivity_timestamps"></a>
<a id="schema_activity_timestamps"></a>
<a id="tocSactivity_timestamps"></a>
<a id="tocsactivity_timestamps"></a>

```json
{
  "create_time": {},
  "update_time": {}
}
```

The date and time stamps that are common to authorized payment, captured payment, and refund transactions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|create_time|object|false|none|none|
|update_time|object|false|none|none|

<h2 id="tocS_authorization">authorization</h2>
<!-- backwards compatibility -->
<a id="schemaauthorization"></a>
<a id="schema_authorization"></a>
<a id="tocSauthorization"></a>
<a id="tocsauthorization"></a>

```json
{
  "status": "CREATED",
  "status_details": {
    "reason": "PENDING_REVIEW"
  },
  "id": "string",
  "amount": {
    "currency_code": "str",
    "value": "string",
    "breakdown": {
      "item_total": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping": {
        "currency_code": "str",
        "value": "string"
      },
      "handling": {
        "currency_code": "str",
        "value": "string"
      },
      "tax_total": {
        "currency_code": "str",
        "value": "string"
      },
      "insurance": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping_discount": {
        "currency_code": "str",
        "value": "string"
      },
      "discount": {
        "currency_code": "str",
        "value": "string"
      }
    }
  },
  "invoice_id": "string",
  "custom_id": "string",
  "network_transaction_reference": {
    "id": "stringstr",
    "date": "stri",
    "network": {},
    "acquirer_reference_number": "string"
  },
  "seller_protection": {
    "status": "ELIGIBLE",
    "dispute_categories": [
      "ITEM_NOT_RECEIVED"
    ]
  },
  "expiration_time": {},
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET",
      "title": "string",
      "mediaType": "string",
      "encType": "application/json",
      "schema": {
        "additionalItems": {},
        "dependencies": {},
        "items": {},
        "definitions": {},
        "patternProperties": {},
        "properties": {},
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "oneOf": [
          {}
        ],
        "not": {},
        "links": [
          {}
        ],
        "fragmentResolution": "string",
        "media": {
          "type": "string",
          "binaryEncoding": "string"
        },
        "pathStart": "http://example.com"
      },
      "targetSchema": {
        "additionalItems": {},
        "dependencies": {},
        "items": {},
        "definitions": {},
        "patternProperties": {},
        "properties": {},
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "oneOf": [
          {}
        ],
        "not": {},
        "links": [
          {}
        ],
        "fragmentResolution": "string",
        "media": {
          "type": "string",
          "binaryEncoding": "string"
        },
        "pathStart": "http://example.com"
      }
    }
  ],
  "create_time": {},
  "update_time": {}
}
```

The authorized payment transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|read-only|The status for the authorized payment.|
|status_details|object|false|none|none|
|id|string|false|read-only|The PayPal-generated ID for the authorized payment.|
|amount|object|false|none|none|
|invoice_id|string|false|read-only|The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.|
|custom_id|string|false|none|The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports.|
|network_transaction_reference|object|false|none|none|
|seller_protection|object|false|none|none|
|expiration_time|object|false|none|none|
|links|[object]|false|read-only|An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|
|create_time|object|false|none|none|
|update_time|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CREATED|
|status|CAPTURED|
|status|DENIED|
|status|PARTIALLY_CAPTURED|
|status|VOIDED|
|status|PENDING|

<h2 id="tocS_related_ids">related_ids</h2>
<!-- backwards compatibility -->
<a id="schemarelated_ids"></a>
<a id="schema_related_ids"></a>
<a id="tocSrelated_ids"></a>
<a id="tocsrelated_ids"></a>

```json
{
  "order_id": "string",
  "authorization_id": "string",
  "capture_id": "string"
}
```

Identifiers related to a specific resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|order_id|string|false|none|Order ID related to the resource.|
|authorization_id|string|false|none|Authorization ID related to the resource.|
|capture_id|string|false|none|Capture ID related to the resource.|

<h2 id="tocS_supplementary_data">supplementary_data</h2>
<!-- backwards compatibility -->
<a id="schemasupplementary_data"></a>
<a id="schema_supplementary_data"></a>
<a id="tocSsupplementary_data"></a>
<a id="tocssupplementary_data"></a>

```json
{
  "related_ids": {
    "order_id": "string",
    "authorization_id": "string",
    "capture_id": "string"
  }
}
```

The supplementary data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|related_ids|object|false|none|none|

<h2 id="tocS_authorization-2">authorization-2</h2>
<!-- backwards compatibility -->
<a id="schemaauthorization-2"></a>
<a id="schema_authorization-2"></a>
<a id="tocSauthorization-2"></a>
<a id="tocsauthorization-2"></a>

```json
{
  "status": "CREATED",
  "status_details": {
    "reason": "PENDING_REVIEW"
  },
  "id": "string",
  "amount": {
    "currency_code": "str",
    "value": "string",
    "breakdown": {
      "item_total": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping": {
        "currency_code": "str",
        "value": "string"
      },
      "handling": {
        "currency_code": "str",
        "value": "string"
      },
      "tax_total": {
        "currency_code": "str",
        "value": "string"
      },
      "insurance": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping_discount": {
        "currency_code": "str",
        "value": "string"
      },
      "discount": {
        "currency_code": "str",
        "value": "string"
      }
    }
  },
  "invoice_id": "string",
  "custom_id": "string",
  "network_transaction_reference": {
    "id": "stringstr",
    "date": "stri",
    "network": {},
    "acquirer_reference_number": "string"
  },
  "seller_protection": {
    "status": "ELIGIBLE",
    "dispute_categories": [
      "ITEM_NOT_RECEIVED"
    ]
  },
  "expiration_time": {},
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET",
      "title": "string",
      "mediaType": "string",
      "encType": "application/json",
      "schema": {
        "additionalItems": {},
        "dependencies": {},
        "items": {},
        "definitions": {},
        "patternProperties": {},
        "properties": {},
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "oneOf": [
          {}
        ],
        "not": {},
        "links": [
          {}
        ],
        "fragmentResolution": "string",
        "media": {
          "type": "string",
          "binaryEncoding": "string"
        },
        "pathStart": "http://example.com"
      },
      "targetSchema": {
        "additionalItems": {},
        "dependencies": {},
        "items": {},
        "definitions": {},
        "patternProperties": {},
        "properties": {},
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "oneOf": [
          {}
        ],
        "not": {},
        "links": [
          {}
        ],
        "fragmentResolution": "string",
        "media": {
          "type": "string",
          "binaryEncoding": "string"
        },
        "pathStart": "http://example.com"
      }
    }
  ],
  "create_time": {},
  "update_time": {},
  "supplementary_data": {
    "related_ids": {
      "order_id": "string",
      "authorization_id": "string",
      "capture_id": "string"
    }
  },
  "payee": {
    "email_address": {},
    "merchant_id": {}
  }
}
```

The authorized payment transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|read-only|The status for the authorized payment.|
|status_details|object|false|none|none|
|id|string|false|read-only|The PayPal-generated ID for the authorized payment.|
|amount|object|false|none|none|
|invoice_id|string|false|read-only|The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.|
|custom_id|string|false|none|The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports.|
|network_transaction_reference|object|false|none|none|
|seller_protection|object|false|none|none|
|expiration_time|object|false|none|none|
|links|[object]|false|read-only|An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|
|create_time|object|false|none|none|
|update_time|object|false|none|none|
|supplementary_data|object|false|none|none|
|payee|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CREATED|
|status|CAPTURED|
|status|DENIED|
|status|PARTIALLY_CAPTURED|
|status|VOIDED|
|status|PENDING|

<h2 id="tocS_supplementary_purchase_data">supplementary_purchase_data</h2>
<!-- backwards compatibility -->
<a id="schemasupplementary_purchase_data"></a>
<a id="schema_supplementary_purchase_data"></a>
<a id="tocSsupplementary_purchase_data"></a>
<a id="tocssupplementary_purchase_data"></a>

```json
{
  "invoice_id": "string",
  "note_to_payer": "string"
}
```

The capture identification-related fields. Includes the invoice ID, custom ID, note to payer, and soft descriptor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoice_id|string|false|none|The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.|
|note_to_payer|string|false|none|An informational note about this settlement. Appears in both the payer's transaction history and the emails that the payer receives.|

<h2 id="tocS_platform_fee">platform_fee</h2>
<!-- backwards compatibility -->
<a id="schemaplatform_fee"></a>
<a id="schema_platform_fee"></a>
<a id="tocSplatform_fee"></a>
<a id="tocsplatform_fee"></a>

```json
{
  "amount": {
    "currency_code": "str",
    "value": "string"
  },
  "payee": {
    "email_address": {},
    "merchant_id": {}
  }
}
```

The platform or partner fee, commission, or brokerage fee that is associated with the transaction. Not a separate or isolated transaction leg from the external perspective. The platform fee is limited in scope and is always associated with the original payment for the purchase unit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|object|true|none|none|
|payee|object|false|none|none|

<h2 id="tocS_disbursement_mode">disbursement_mode</h2>
<!-- backwards compatibility -->
<a id="schemadisbursement_mode"></a>
<a id="schema_disbursement_mode"></a>
<a id="tocSdisbursement_mode"></a>
<a id="tocsdisbursement_mode"></a>

```json
"INSTANT"
```

The funds that are held on behalf of the merchant.

<h2 id="tocS_payment_instruction">payment_instruction</h2>
<!-- backwards compatibility -->
<a id="schemapayment_instruction"></a>
<a id="schema_payment_instruction"></a>
<a id="tocSpayment_instruction"></a>
<a id="tocspayment_instruction"></a>

```json
{
  "platform_fees": [
    {
      "amount": {
        "currency_code": "str",
        "value": "string"
      },
      "payee": {
        "email_address": {},
        "merchant_id": {}
      }
    }
  ],
  "disbursement_mode": {},
  "payee_pricing_tier_id": "string",
  "payee_receivable_fx_rate_id": "string"
}
```

Any additional payment instructions to be consider during payment processing. This processing instruction is applicable for Capturing an order or Authorizing an Order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|platform_fees|[object]|false|none|An array of various fees, commissions, tips, or donations. This field is only applicable to merchants that been enabled for PayPal Complete Payments Platform for Marketplaces and Platforms capability.|
|disbursement_mode|object|false|none|none|
|payee_pricing_tier_id|string|false|none|This field is only enabled for selected merchants/partners to use and provides the ability to trigger a specific pricing rate/plan for a payment transaction. The list of eligible 'payee_pricing_tier_id' would be provided to you by your Account Manager. Specifying values other than the one provided to you by your account manager would result in an error.|
|payee_receivable_fx_rate_id|string|false|none|FX identifier generated returned by PayPal to be used for payment processing in order to honor FX rate (for eligible integrations) to be used when amount is settled/received into the payee account.|

<h2 id="tocS_capture_request">capture_request</h2>
<!-- backwards compatibility -->
<a id="schemacapture_request"></a>
<a id="schema_capture_request"></a>
<a id="tocScapture_request"></a>
<a id="tocscapture_request"></a>

```json
{
  "invoice_id": "string",
  "note_to_payer": "string",
  "amount": {
    "currency_code": "str",
    "value": "string"
  },
  "final_capture": false,
  "payment_instruction": {
    "platform_fees": [
      {
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "payee": {
          "email_address": {},
          "merchant_id": {}
        }
      }
    ],
    "disbursement_mode": {},
    "payee_pricing_tier_id": "string",
    "payee_receivable_fx_rate_id": "string"
  },
  "soft_descriptor": "string"
}
```

Captures either a portion or the full authorized amount of an authorized payment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoice_id|string|false|none|The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.|
|note_to_payer|string|false|none|An informational note about this settlement. Appears in both the payer's transaction history and the emails that the payer receives.|
|amount|object|false|none|none|
|invoice_id|string|false|none|The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.|
|final_capture|boolean|false|none|Indicates whether you can make additional captures against the authorized payment. Set to `true` if you do not intend to capture additional payments against the authorization. Set to `false` if you intend to capture additional payments against the authorization.|
|payment_instruction|object|false|none|none|
|note_to_payer|string|false|none|An informational note about this settlement. Appears in both the payer's transaction history and the emails that the payer receives.|
|soft_descriptor|string|false|none|The payment descriptor on the payer's account statement.|

<h2 id="tocS_capture_status_details">capture_status_details</h2>
<!-- backwards compatibility -->
<a id="schemacapture_status_details"></a>
<a id="schema_capture_status_details"></a>
<a id="tocScapture_status_details"></a>
<a id="tocscapture_status_details"></a>

```json
{
  "reason": "BUYER_COMPLAINT"
}
```

The details of the captured payment status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The reason why the captured payment status is `PENDING` or `DENIED`.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|BUYER_COMPLAINT|
|reason|CHARGEBACK|
|reason|ECHECK|
|reason|INTERNATIONAL_WITHDRAWAL|
|reason|OTHER|
|reason|PENDING_REVIEW|
|reason|RECEIVING_PREFERENCE_MANDATES_MANUAL_ACTION|
|reason|REFUNDED|
|reason|TRANSACTION_APPROVED_AWAITING_FUNDING|
|reason|UNILATERAL|
|reason|VERIFICATION_REQUIRED|
|reason|DECLINED_BY_RISK_FRAUD_FILTERS|

<h2 id="tocS_capture_status">capture_status</h2>
<!-- backwards compatibility -->
<a id="schemacapture_status"></a>
<a id="schema_capture_status"></a>
<a id="tocScapture_status"></a>
<a id="tocscapture_status"></a>

```json
{
  "status": "COMPLETED",
  "status_details": {
    "reason": "BUYER_COMPLAINT"
  }
}
```

The status and status details of a captured payment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|read-only|The status of the captured payment.|
|status_details|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|COMPLETED|
|status|DECLINED|
|status|PARTIALLY_REFUNDED|
|status|PENDING|
|status|REFUNDED|
|status|FAILED|

<h2 id="tocS_exchange_rate">exchange_rate</h2>
<!-- backwards compatibility -->
<a id="schemaexchange_rate"></a>
<a id="schema_exchange_rate"></a>
<a id="tocSexchange_rate"></a>
<a id="tocsexchange_rate"></a>

```json
{
  "source_currency": {},
  "target_currency": {},
  "value": "string"
}
```

The exchange rate that determines the amount to convert from one currency to another currency.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_currency|object|false|none|none|
|target_currency|object|false|none|none|
|value|string|false|none|The target currency amount. Equivalent to one unit of the source currency. Formatted as integer or decimal value with one to 15 digits to the right of the decimal point.|

<h2 id="tocS_seller_receivable_breakdown">seller_receivable_breakdown</h2>
<!-- backwards compatibility -->
<a id="schemaseller_receivable_breakdown"></a>
<a id="schema_seller_receivable_breakdown"></a>
<a id="tocSseller_receivable_breakdown"></a>
<a id="tocsseller_receivable_breakdown"></a>

```json
{
  "gross_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "paypal_fee": {
    "currency_code": "str",
    "value": "string"
  },
  "paypal_fee_in_receivable_currency": {
    "currency_code": "str",
    "value": "string"
  },
  "net_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "receivable_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "exchange_rate": {
    "source_currency": {},
    "target_currency": {},
    "value": "string"
  },
  "platform_fees": [
    {
      "amount": {
        "currency_code": "str",
        "value": "string"
      },
      "payee": {
        "email_address": {},
        "merchant_id": {}
      }
    }
  ]
}
```

The detailed breakdown of the capture activity. This is not available for transactions that are in pending state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gross_amount|object|true|none|none|
|paypal_fee|object|false|none|none|
|paypal_fee_in_receivable_currency|object|false|none|none|
|net_amount|object|false|none|none|
|receivable_amount|object|false|none|none|
|exchange_rate|object|false|none|none|
|platform_fees|[object]|false|none|An array of platform or partner fees, commissions, or brokerage fees that associated with the captured payment.|

<h2 id="tocS_processor_response">processor_response</h2>
<!-- backwards compatibility -->
<a id="schemaprocessor_response"></a>
<a id="schema_processor_response"></a>
<a id="tocSprocessor_response"></a>
<a id="tocsprocessor_response"></a>

```json
{
  "avs_code": "A",
  "cvv_code": "E",
  "response_code": "0000",
  "payment_advice_code": "01"
}
```

The processor response information for payment requests, such as direct credit card transactions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avs_code|string|false|read-only|The address verification code for Visa, Discover, Mastercard, or American Express transactions.|
|cvv_code|string|false|read-only|The card verification value code for for Visa, Discover, Mastercard, or American Express.|
|response_code|string|false|read-only|Processor response code for the non-PayPal payment processor errors.|
|payment_advice_code|string|false|read-only|The declined payment transactions might have payment advice codes. The card networks, like Visa and Mastercard, return payment advice codes.|

#### Enumerated Values

|Property|Value|
|---|---|
|avs_code|A|
|avs_code|B|
|avs_code|C|
|avs_code|D|
|avs_code|E|
|avs_code|F|
|avs_code|G|
|avs_code|I|
|avs_code|M|
|avs_code|N|
|avs_code|P|
|avs_code|R|
|avs_code|S|
|avs_code|U|
|avs_code|W|
|avs_code|X|
|avs_code|Y|
|avs_code|Z|
|avs_code|Null|
|avs_code|0|
|avs_code|1|
|avs_code|2|
|avs_code|3|
|avs_code|4|
|cvv_code|E|
|cvv_code|I|
|cvv_code|M|
|cvv_code|N|
|cvv_code|P|
|cvv_code|S|
|cvv_code|U|
|cvv_code|X|
|cvv_code|All others|
|cvv_code|0|
|cvv_code|1|
|cvv_code|2|
|cvv_code|3|
|cvv_code|4|
|response_code|0000|
|response_code|00N7|
|response_code|0100|
|response_code|0390|
|response_code|0500|
|response_code|0580|
|response_code|0800|
|response_code|0880|
|response_code|0890|
|response_code|0960|
|response_code|0R00|
|response_code|1000|
|response_code|10BR|
|response_code|1300|
|response_code|1310|
|response_code|1312|
|response_code|1317|
|response_code|1320|
|response_code|1330|
|response_code|1335|
|response_code|1340|
|response_code|1350|
|response_code|1352|
|response_code|1360|
|response_code|1370|
|response_code|1380|
|response_code|1382|
|response_code|1384|
|response_code|1390|
|response_code|1393|
|response_code|5100|
|response_code|5110|
|response_code|5120|
|response_code|5130|
|response_code|5135|
|response_code|5140|
|response_code|5150|
|response_code|5160|
|response_code|5170|
|response_code|5180|
|response_code|5190|
|response_code|5200|
|response_code|5210|
|response_code|5400|
|response_code|5500|
|response_code|5650|
|response_code|5700|
|response_code|5710|
|response_code|5800|
|response_code|5900|
|response_code|5910|
|response_code|5920|
|response_code|5930|
|response_code|5950|
|response_code|6300|
|response_code|7600|
|response_code|7700|
|response_code|7710|
|response_code|7800|
|response_code|7900|
|response_code|8000|
|response_code|8010|
|response_code|8020|
|response_code|8030|
|response_code|8100|
|response_code|8110|
|response_code|8220|
|response_code|9100|
|response_code|9500|
|response_code|9510|
|response_code|9520|
|response_code|9530|
|response_code|9540|
|response_code|9600|
|response_code|PCNR|
|response_code|PCVV|
|response_code|PP06|
|response_code|PPRN|
|response_code|PPAD|
|response_code|PPAB|
|response_code|PPAE|
|response_code|PPAG|
|response_code|PPAI|
|response_code|PPAR|
|response_code|PPAU|
|response_code|PPAV|
|response_code|PPAX|
|response_code|PPBG|
|response_code|PPC2|
|response_code|PPCE|
|response_code|PPCO|
|response_code|PPCR|
|response_code|PPCT|
|response_code|PPCU|
|response_code|PPD3|
|response_code|PPDC|
|response_code|PPDI|
|response_code|PPDV|
|response_code|PPDT|
|response_code|PPEF|
|response_code|PPEL|
|response_code|PPER|
|response_code|PPEX|
|response_code|PPFE|
|response_code|PPFI|
|response_code|PPFR|
|response_code|PPFV|
|response_code|PPGR|
|response_code|PPH1|
|response_code|PPIF|
|response_code|PPII|
|response_code|PPIM|
|response_code|PPIT|
|response_code|PPLR|
|response_code|PPLS|
|response_code|PPMB|
|response_code|PPMC|
|response_code|PPMD|
|response_code|PPNC|
|response_code|PPNL|
|response_code|PPNM|
|response_code|PPNT|
|response_code|PPPH|
|response_code|PPPI|
|response_code|PPPM|
|response_code|PPQC|
|response_code|PPRE|
|response_code|PPRF|
|response_code|PPRR|
|response_code|PPS0|
|response_code|PPS1|
|response_code|PPS2|
|response_code|PPS3|
|response_code|PPS4|
|response_code|PPS5|
|response_code|PPS6|
|response_code|PPSC|
|response_code|PPSD|
|response_code|PPSE|
|response_code|PPTE|
|response_code|PPTF|
|response_code|PPTI|
|response_code|PPTR|
|response_code|PPTT|
|response_code|PPTV|
|response_code|PPUA|
|response_code|PPUC|
|response_code|PPUE|
|response_code|PPUI|
|response_code|PPUP|
|response_code|PPUR|
|response_code|PPVC|
|response_code|PPVE|
|response_code|PPVT|
|payment_advice_code|01|
|payment_advice_code|02|
|payment_advice_code|03|
|payment_advice_code|04|
|payment_advice_code|21|
|payment_advice_code|22|
|payment_advice_code|24|
|payment_advice_code|25|
|payment_advice_code|26|
|payment_advice_code|27|
|payment_advice_code|28|
|payment_advice_code|29|
|payment_advice_code|30|
|payment_advice_code|40|
|payment_advice_code|43|

<h2 id="tocS_capture">capture</h2>
<!-- backwards compatibility -->
<a id="schemacapture"></a>
<a id="schema_capture"></a>
<a id="tocScapture"></a>
<a id="tocscapture"></a>

```json
{
  "status": "COMPLETED",
  "status_details": {
    "reason": "BUYER_COMPLAINT"
  },
  "id": "string",
  "amount": {
    "currency_code": "str",
    "value": "string",
    "breakdown": {
      "item_total": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping": {
        "currency_code": "str",
        "value": "string"
      },
      "handling": {
        "currency_code": "str",
        "value": "string"
      },
      "tax_total": {
        "currency_code": "str",
        "value": "string"
      },
      "insurance": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping_discount": {
        "currency_code": "str",
        "value": "string"
      },
      "discount": {
        "currency_code": "str",
        "value": "string"
      }
    }
  },
  "invoice_id": "string",
  "custom_id": "string",
  "network_transaction_reference": {
    "id": "stringstr",
    "date": "stri",
    "network": {},
    "acquirer_reference_number": "string"
  },
  "seller_protection": {
    "status": "ELIGIBLE",
    "dispute_categories": [
      "ITEM_NOT_RECEIVED"
    ]
  },
  "final_capture": false,
  "seller_receivable_breakdown": {
    "gross_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "paypal_fee": {
      "currency_code": "str",
      "value": "string"
    },
    "paypal_fee_in_receivable_currency": {
      "currency_code": "str",
      "value": "string"
    },
    "net_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "receivable_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "exchange_rate": {
      "source_currency": {},
      "target_currency": {},
      "value": "string"
    },
    "platform_fees": [
      {
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "payee": {
          "email_address": {},
          "merchant_id": {}
        }
      }
    ]
  },
  "disbursement_mode": {},
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET",
      "title": "string",
      "mediaType": "string",
      "encType": "application/json",
      "schema": {
        "additionalItems": {},
        "dependencies": {},
        "items": {},
        "definitions": {},
        "patternProperties": {},
        "properties": {},
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "oneOf": [
          {}
        ],
        "not": {},
        "links": [
          {}
        ],
        "fragmentResolution": "string",
        "media": {
          "type": "string",
          "binaryEncoding": "string"
        },
        "pathStart": "http://example.com"
      },
      "targetSchema": {
        "additionalItems": {},
        "dependencies": {},
        "items": {},
        "definitions": {},
        "patternProperties": {},
        "properties": {},
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "oneOf": [
          {}
        ],
        "not": {},
        "links": [
          {}
        ],
        "fragmentResolution": "string",
        "media": {
          "type": "string",
          "binaryEncoding": "string"
        },
        "pathStart": "http://example.com"
      }
    }
  ],
  "processor_response": {
    "avs_code": "A",
    "cvv_code": "E",
    "response_code": "0000",
    "payment_advice_code": "01"
  },
  "create_time": {},
  "update_time": {}
}
```

A captured payment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|read-only|The status of the captured payment.|
|status_details|object|false|none|none|
|id|string|false|read-only|The PayPal-generated ID for the captured payment.|
|amount|object|false|none|none|
|invoice_id|string|false|read-only|The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.|
|custom_id|string|false|none|The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports.|
|network_transaction_reference|object|false|none|none|
|seller_protection|object|false|none|none|
|final_capture|boolean|false|read-only|Indicates whether you can make additional captures against the authorized payment. Set to `true` if you do not intend to capture additional payments against the authorization. Set to `false` if you intend to capture additional payments against the authorization.|
|seller_receivable_breakdown|object|false|none|none|
|disbursement_mode|object|false|none|none|
|links|[object]|false|read-only|An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|
|processor_response|object|false|none|none|
|create_time|object|false|none|none|
|update_time|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|COMPLETED|
|status|DECLINED|
|status|PARTIALLY_REFUNDED|
|status|PENDING|
|status|REFUNDED|
|status|FAILED|

<h2 id="tocS_capture-2">capture-2</h2>
<!-- backwards compatibility -->
<a id="schemacapture-2"></a>
<a id="schema_capture-2"></a>
<a id="tocScapture-2"></a>
<a id="tocscapture-2"></a>

```json
{
  "status": "COMPLETED",
  "status_details": {
    "reason": "BUYER_COMPLAINT"
  },
  "id": "string",
  "amount": {
    "currency_code": "str",
    "value": "string",
    "breakdown": {
      "item_total": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping": {
        "currency_code": "str",
        "value": "string"
      },
      "handling": {
        "currency_code": "str",
        "value": "string"
      },
      "tax_total": {
        "currency_code": "str",
        "value": "string"
      },
      "insurance": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping_discount": {
        "currency_code": "str",
        "value": "string"
      },
      "discount": {
        "currency_code": "str",
        "value": "string"
      }
    }
  },
  "invoice_id": "string",
  "custom_id": "string",
  "network_transaction_reference": {
    "id": "stringstr",
    "date": "stri",
    "network": {},
    "acquirer_reference_number": "string"
  },
  "seller_protection": {
    "status": "ELIGIBLE",
    "dispute_categories": [
      "ITEM_NOT_RECEIVED"
    ]
  },
  "final_capture": false,
  "seller_receivable_breakdown": {
    "gross_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "paypal_fee": {
      "currency_code": "str",
      "value": "string"
    },
    "paypal_fee_in_receivable_currency": {
      "currency_code": "str",
      "value": "string"
    },
    "net_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "receivable_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "exchange_rate": {
      "source_currency": {},
      "target_currency": {},
      "value": "string"
    },
    "platform_fees": [
      {
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "payee": {
          "email_address": {},
          "merchant_id": {}
        }
      }
    ]
  },
  "disbursement_mode": {},
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET",
      "title": "string",
      "mediaType": "string",
      "encType": "application/json",
      "schema": {
        "additionalItems": {},
        "dependencies": {},
        "items": {},
        "definitions": {},
        "patternProperties": {},
        "properties": {},
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "oneOf": [
          {}
        ],
        "not": {},
        "links": [
          {}
        ],
        "fragmentResolution": "string",
        "media": {
          "type": "string",
          "binaryEncoding": "string"
        },
        "pathStart": "http://example.com"
      },
      "targetSchema": {
        "additionalItems": {},
        "dependencies": {},
        "items": {},
        "definitions": {},
        "patternProperties": {},
        "properties": {},
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "oneOf": [
          {}
        ],
        "not": {},
        "links": [
          {}
        ],
        "fragmentResolution": "string",
        "media": {
          "type": "string",
          "binaryEncoding": "string"
        },
        "pathStart": "http://example.com"
      }
    }
  ],
  "processor_response": {
    "avs_code": "A",
    "cvv_code": "E",
    "response_code": "0000",
    "payment_advice_code": "01"
  },
  "create_time": {},
  "update_time": {},
  "supplementary_data": {
    "related_ids": {
      "order_id": "string",
      "authorization_id": "string",
      "capture_id": "string"
    }
  },
  "payee": {
    "email_address": {},
    "merchant_id": {}
  }
}
```

A captured payment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|read-only|The status of the captured payment.|
|status_details|object|false|none|none|
|id|string|false|read-only|The PayPal-generated ID for the captured payment.|
|amount|object|false|none|none|
|invoice_id|string|false|read-only|The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.|
|custom_id|string|false|none|The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports.|
|network_transaction_reference|object|false|none|none|
|seller_protection|object|false|none|none|
|final_capture|boolean|false|read-only|Indicates whether you can make additional captures against the authorized payment. Set to `true` if you do not intend to capture additional payments against the authorization. Set to `false` if you intend to capture additional payments against the authorization.|
|seller_receivable_breakdown|object|false|none|none|
|disbursement_mode|object|false|none|none|
|links|[object]|false|read-only|An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|
|processor_response|object|false|none|none|
|create_time|object|false|none|none|
|update_time|object|false|none|none|
|supplementary_data|object|false|none|none|
|payee|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|COMPLETED|
|status|DECLINED|
|status|PARTIALLY_REFUNDED|
|status|PENDING|
|status|REFUNDED|
|status|FAILED|

<h2 id="tocS_reauthorize_request">reauthorize_request</h2>
<!-- backwards compatibility -->
<a id="schemareauthorize_request"></a>
<a id="schema_reauthorize_request"></a>
<a id="tocSreauthorize_request"></a>
<a id="tocsreauthorize_request"></a>

```json
{
  "amount": {
    "currency_code": "str",
    "value": "string"
  }
}
```

Reauthorizes an authorized PayPal account payment, by ID. To ensure that funds are still available, reauthorize a payment after its initial three-day honor period expires. You can reauthorize a payment only once from days four to 29.<br/><br/>If 30 days have transpired since the date of the original authorization, you must create an authorized payment instead of reauthorizing the original authorized payment.<br/><br/>A reauthorized payment itself has a new honor period of three days.<br/><br/>You can reauthorize an authorized payment once. The allowed amount depends on context and geography, for example in US it is up to 115% of the original authorized amount, not to exceed an increase of $75 USD.<br/><br/>Supports only the `amount` request parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|object|false|none|none|

<h2 id="tocS_payment_instruction-2">payment_instruction-2</h2>
<!-- backwards compatibility -->
<a id="schemapayment_instruction-2"></a>
<a id="schema_payment_instruction-2"></a>
<a id="tocSpayment_instruction-2"></a>
<a id="tocspayment_instruction-2"></a>

```json
{
  "platform_fees": [
    {
      "amount": {
        "currency_code": "str",
        "value": "string"
      },
      "payee": {
        "email_address": {},
        "merchant_id": {}
      }
    }
  ]
}
```

Any additional payments instructions during refund payment processing. This object is only applicable to merchants that have been enabled for PayPal Commerce Platform for Marketplaces and Platforms capability. Please speak to your account manager if you want to use this capability.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|platform_fees|[object]|false|none|Specifies the amount that the API caller will contribute to the refund being processed. The amount needs to be lower than platform_fees amount originally captured or the amount that is remaining if multiple refunds have been processed. This field is only applicable to merchants that have been enabled for PayPal Commerce Platform for Marketplaces and Platforms capability. Please speak to your account manager if you want to use this capability.|

<h2 id="tocS_refund_request">refund_request</h2>
<!-- backwards compatibility -->
<a id="schemarefund_request"></a>
<a id="schema_refund_request"></a>
<a id="tocSrefund_request"></a>
<a id="tocsrefund_request"></a>

```json
{
  "amount": {
    "currency_code": "str",
    "value": "string"
  },
  "custom_id": "string",
  "invoice_id": "string",
  "note_to_payer": "string",
  "payment_instruction": {
    "platform_fees": [
      {
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "payee": {
          "email_address": {},
          "merchant_id": {}
        }
      }
    ]
  }
}
```

Refunds a captured payment, by ID. For a full refund, include an empty request body. For a partial refund, include an <code>amount</code> object in the request body.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|object|false|none|none|
|custom_id|string|false|none|The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports. The pattern is defined by an external party and supports Unicode.|
|invoice_id|string|false|none|The API caller-provided external invoice ID for this order. The pattern is defined by an external party and supports Unicode.|
|note_to_payer|string|false|none|The reason for the refund. Appears in both the payer's transaction history and the emails that the payer receives. The pattern is defined by an external party and supports Unicode.|
|payment_instruction|object|false|none|none|

<h2 id="tocS_refund_status_details">refund_status_details</h2>
<!-- backwards compatibility -->
<a id="schemarefund_status_details"></a>
<a id="schema_refund_status_details"></a>
<a id="tocSrefund_status_details"></a>
<a id="tocsrefund_status_details"></a>

```json
{
  "reason": "ECHECK"
}
```

The details of the refund status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The reason why the refund has the `PENDING` or `FAILED` status.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|ECHECK|

<h2 id="tocS_refund_status">refund_status</h2>
<!-- backwards compatibility -->
<a id="schemarefund_status"></a>
<a id="schema_refund_status"></a>
<a id="tocSrefund_status"></a>
<a id="tocsrefund_status"></a>

```json
{
  "status": "CANCELLED",
  "status_details": {
    "reason": "ECHECK"
  }
}
```

The refund status with details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|read-only|The status of the refund.|
|status_details|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELLED|
|status|FAILED|
|status|PENDING|
|status|COMPLETED|

<h2 id="tocS_net_amount_breakdown_item">net_amount_breakdown_item</h2>
<!-- backwards compatibility -->
<a id="schemanet_amount_breakdown_item"></a>
<a id="schema_net_amount_breakdown_item"></a>
<a id="tocSnet_amount_breakdown_item"></a>
<a id="tocsnet_amount_breakdown_item"></a>

```json
{
  "payable_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "converted_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "exchange_rate": {
    "source_currency": {},
    "target_currency": {},
    "value": "string"
  }
}
```

The net amount. Returned when the currency of the refund is different from the currency of the PayPal account where the merchant holds their funds.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payable_amount|object|false|none|none|
|converted_amount|object|false|none|none|
|exchange_rate|object|false|none|none|

<h2 id="tocS_refund">refund</h2>
<!-- backwards compatibility -->
<a id="schemarefund"></a>
<a id="schema_refund"></a>
<a id="tocSrefund"></a>
<a id="tocsrefund"></a>

```json
{
  "status": "CANCELLED",
  "status_details": {
    "reason": "ECHECK"
  },
  "id": "string",
  "amount": {
    "currency_code": "str",
    "value": "string"
  },
  "invoice_id": "string",
  "custom_id": "string",
  "acquirer_reference_number": "string",
  "note_to_payer": "string",
  "seller_payable_breakdown": {
    "gross_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "paypal_fee": {
      "currency_code": "str",
      "value": "string"
    },
    "paypal_fee_in_receivable_currency": {
      "currency_code": "str",
      "value": "string"
    },
    "net_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "net_amount_in_receivable_currency": {
      "currency_code": "str",
      "value": "string"
    },
    "platform_fees": [
      {
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "payee": {
          "email_address": {},
          "merchant_id": {}
        }
      }
    ],
    "net_amount_breakdown": [
      {
        "payable_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "converted_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "exchange_rate": {
          "source_currency": {},
          "target_currency": {},
          "value": "string"
        }
      }
    ],
    "total_refunded_amount": {
      "currency_code": "str",
      "value": "string"
    }
  },
  "payer": {
    "email_address": {},
    "merchant_id": {}
  },
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET",
      "title": "string",
      "mediaType": "string",
      "encType": "application/json",
      "schema": {
        "additionalItems": {},
        "dependencies": {},
        "items": {},
        "definitions": {},
        "patternProperties": {},
        "properties": {},
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "oneOf": [
          {}
        ],
        "not": {},
        "links": [
          {}
        ],
        "fragmentResolution": "string",
        "media": {
          "type": "string",
          "binaryEncoding": "string"
        },
        "pathStart": "http://example.com"
      },
      "targetSchema": {
        "additionalItems": {},
        "dependencies": {},
        "items": {},
        "definitions": {},
        "patternProperties": {},
        "properties": {},
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "oneOf": [
          {}
        ],
        "not": {},
        "links": [
          {}
        ],
        "fragmentResolution": "string",
        "media": {
          "type": "string",
          "binaryEncoding": "string"
        },
        "pathStart": "http://example.com"
      }
    }
  ],
  "create_time": {},
  "update_time": {}
}
```

The refund information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|read-only|The status of the refund.|
|status_details|object|false|none|none|
|id|string|false|read-only|The PayPal-generated ID for the refund.|
|amount|object|false|none|none|
|invoice_id|string|false|read-only|The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.|
|custom_id|string|false|none|The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports.|
|acquirer_reference_number|string|false|none|Reference ID issued for the card transaction. This ID can be used to track the transaction across processors, card brands and issuing banks.|
|note_to_payer|string|false|read-only|The reason for the refund. Appears in both the payer's transaction history and the emails that the payer receives.|
|seller_payable_breakdown|object|false|read-only|The breakdown of the refund.|
|payer|object|false|none|none|
|links|[object]|false|read-only|An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|
|create_time|object|false|none|none|
|update_time|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELLED|
|status|FAILED|
|status|PENDING|
|status|COMPLETED|

<h2 id="tocS_guid">guid</h2>
<!-- backwards compatibility -->
<a id="schemaguid"></a>
<a id="schema_guid"></a>
<a id="tocSguid"></a>
<a id="tocsguid"></a>

```json
"string"
```

A Globally Unique Identifier (GUID) value.

<h2 id="tocS_find_eligible_methods_request_customer_channel">find_eligible_methods_request_customer_channel</h2>
<!-- backwards compatibility -->
<a id="schemafind_eligible_methods_request_customer_channel"></a>
<a id="schema_find_eligible_methods_request_customer_channel"></a>
<a id="tocSfind_eligible_methods_request_customer_channel"></a>
<a id="tocsfind_eligible_methods_request_customer_channel"></a>

```json
{
  "browser_type": "string",
  "client_os": "string",
  "device_type": "string"
}
```

Channel through which the request is being posted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|browser_type|string|false|none|The browser used by the customer. Example: Safari, Chrome, etc.|
|client_os|string|false|none|The operating system on the device used by the customer. Example: iOS 16.5, Android 30, etc.|
|device_type|string|false|none|The type of device used by the customer. Example: Mobile, Desktop, Tablet, etc.|

<h2 id="tocS_find_eligible_methods_request_customer">find_eligible_methods_request_customer</h2>
<!-- backwards compatibility -->
<a id="schemafind_eligible_methods_request_customer"></a>
<a id="schema_find_eligible_methods_request_customer"></a>
<a id="tocSfind_eligible_methods_request_customer"></a>
<a id="tocsfind_eligible_methods_request_customer"></a>

```json
{
  "country_code": {},
  "channel": {
    "browser_type": "string",
    "client_os": "string",
    "device_type": "string"
  },
  "id": "string",
  "email": "string",
  "phone": {
    "country_code": "str",
    "national_number": "string",
    "extension_number": "string"
  }
}
```

Customer who is making a purchase from the merchant/partner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country_code|object|false|none|none|
|channel|object|false|none|none|
|id|string|false|none|The unique ID for a customer in merchant's or partner's system of records.|
|email|[email_address](#schemaemail_address)|false|none|The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote>|
|phone|object|false|none|none|

<h2 id="tocS_eligibility_purchase_unit_request">eligibility_purchase_unit_request</h2>
<!-- backwards compatibility -->
<a id="schemaeligibility_purchase_unit_request"></a>
<a id="schema_eligibility_purchase_unit_request"></a>
<a id="tocSeligibility_purchase_unit_request"></a>
<a id="tocseligibility_purchase_unit_request"></a>

```json
{
  "amount": {
    "currency_code": "str",
    "value": "string",
    "breakdown": {
      "item_total": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping": {
        "currency_code": "str",
        "value": "string"
      },
      "handling": {
        "currency_code": "str",
        "value": "string"
      },
      "tax_total": {
        "currency_code": "str",
        "value": "string"
      },
      "insurance": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping_discount": {
        "currency_code": "str",
        "value": "string"
      },
      "discount": {
        "currency_code": "str",
        "value": "string"
      }
    }
  },
  "payee": {
    "email_address": {},
    "merchant_id": {}
  }
}
```

Purchase unit for payment eligibility.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[amount_with_breakdown](#schemaamount_with_breakdown)|false|none|The total order amount with an optional breakdown that provides details, such as the total item amount, total tax amount, shipping, handling, insurance, and discounts, if any.<br/>If you specify `amount.breakdown`, the amount equals `item_total` plus `tax_total` plus `shipping` plus `handling` plus `insurance` minus `shipping_discount` minus discount.<br/>The amount must be a positive number. For listed of supported currencies and decimal precision, see the PayPal REST APIs <a href="/docs/integration/direct/rest/currency-codes/">Currency Codes</a>.|
|payee|[payee](#schemapayee)|false|none|The merchant who receives the funds and fulfills the order. The merchant is also known as the payee.|

<h2 id="tocS_payment_method">payment_method</h2>
<!-- backwards compatibility -->
<a id="schemapayment_method"></a>
<a id="schema_payment_method"></a>
<a id="tocSpayment_method"></a>
<a id="tocspayment_method"></a>

```json
"PAYPAL"
```

Set of unique payment methods.

<h2 id="tocS_find_eligible_methods_request_preferences">find_eligible_methods_request_preferences</h2>
<!-- backwards compatibility -->
<a id="schemafind_eligible_methods_request_preferences"></a>
<a id="schema_find_eligible_methods_request_preferences"></a>
<a id="tocSfind_eligible_methods_request_preferences"></a>
<a id="tocsfind_eligible_methods_request_preferences"></a>

```json
{
  "payment_flow": "ONE_TIME_PAYMENT",
  "include_account_details": "false",
  "include_vault_tokens": "false",
  "payment_source_constraint": {
    "constraint_type": "INCLUDE",
    "payment_sources": [
      "PAYPAL"
    ]
  }
}
```

Preferences of merchant/partner consuming the API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payment_flow|string|false|none|This field specifies the payment flow, expected to provide a hint about which payment action the customer is intending to perform.|
|include_account_details|boolean|false|none|If this value is set to true, response will include confirmation if the customer has PayPal and/or Venmo accounts if they are eligible payment methods. Value defaults to false.|
|include_vault_tokens|boolean|false|none|If this value is set to true, response will include vaulted token information if the eligible funding source has any instrument vaulted for the customer. Value defaults to false.|
|payment_source_constraint|object|false|none|Payment source constraint defines the payment methods that needs to be included/excluded for eligibility assessment. If not passed, all payment methods will be assessed for eligibility.|

#### Enumerated Values

|Property|Value|
|---|---|
|payment_flow|ONE_TIME_PAYMENT|
|payment_flow|RECURRING_PAYMENT|
|payment_flow|VAULT_WITH_PAYMENT|
|payment_flow|VAULT_WITHOUT_PAYMENT|

<h2 id="tocS_find_eligible_methods_request">find_eligible_methods_request</h2>
<!-- backwards compatibility -->
<a id="schemafind_eligible_methods_request"></a>
<a id="schema_find_eligible_methods_request"></a>
<a id="tocSfind_eligible_methods_request"></a>
<a id="tocsfind_eligible_methods_request"></a>

```json
{
  "customer": {
    "country_code": {},
    "channel": {
      "browser_type": "string",
      "client_os": "string",
      "device_type": "string"
    },
    "id": "string",
    "email": "string",
    "phone": {
      "country_code": "str",
      "national_number": "string",
      "extension_number": "string"
    }
  },
  "purchase_units": [
    {
      "amount": {
        "currency_code": "str",
        "value": "string",
        "breakdown": {
          "item_total": {
            "currency_code": "str",
            "value": "string"
          },
          "shipping": {
            "currency_code": "str",
            "value": "string"
          },
          "handling": {
            "currency_code": "str",
            "value": "string"
          },
          "tax_total": {
            "currency_code": "str",
            "value": "string"
          },
          "insurance": {
            "currency_code": "str",
            "value": "string"
          },
          "shipping_discount": {
            "currency_code": "str",
            "value": "string"
          },
          "discount": {
            "currency_code": "str",
            "value": "string"
          }
        }
      },
      "payee": {
        "email_address": {},
        "merchant_id": {}
      }
    }
  ],
  "preferences": {
    "payment_flow": "ONE_TIME_PAYMENT",
    "include_account_details": "false",
    "include_vault_tokens": "false",
    "payment_source_constraint": {
      "constraint_type": "INCLUDE",
      "payment_sources": [
        "PAYPAL"
      ]
    }
  }
}
```

Request to get list of eligible payment methods.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer|[find_eligible_methods_request_customer](#schemafind_eligible_methods_request_customer)|false|none|Customer who is making a purchase from the merchant/partner.|
|purchase_units|[[eligibility_purchase_unit_request](#schemaeligibility_purchase_unit_request)]|false|none|Array of purchase units.|
|preferences|[find_eligible_methods_request_preferences](#schemafind_eligible_methods_request_preferences)|false|none|Preferences of merchant/partner consuming the API.|

<h2 id="tocS_credit_product_button_code">credit_product_button_code</h2>
<!-- backwards compatibility -->
<a id="schemacredit_product_button_code"></a>
<a id="schema_credit_product_button_code"></a>
<a id="tocScredit_product_button_code"></a>
<a id="tocscredit_product_button_code"></a>

```json
"CREDIT"
```

The button code corresponding to a particular product or set of products. The values followed are defined by the SDK team.

<h2 id="tocS_payment_method_common">payment_method_common</h2>
<!-- backwards compatibility -->
<a id="schemapayment_method_common"></a>
<a id="schema_payment_method_common"></a>
<a id="tocSpayment_method_common"></a>
<a id="tocspayment_method_common"></a>

```json
{
  "can_be_vaulted": "false",
  "country_code": {},
  "product_code": {}
}
```

Common response fields for all payment methods.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|can_be_vaulted|boolean|false|none|Indicates if the payment method can be vaulted or not. A true value indicates the payment method can be vaulted using our vaults product. If false, vaulting is not currently supported for this payment method.|
|country_code|object|false|none|none|
|product_code|object|false|none|none|

<h2 id="tocS_payment_method_eligible_in_paypal_network">payment_method_eligible_in_paypal_network</h2>
<!-- backwards compatibility -->
<a id="schemapayment_method_eligible_in_paypal_network"></a>
<a id="schema_payment_method_eligible_in_paypal_network"></a>
<a id="tocSpayment_method_eligible_in_paypal_network"></a>
<a id="tocspayment_method_eligible_in_paypal_network"></a>

```json
true
```

Flag that indicates if the customer is in the PayPal network. This value will be included in the response if the include_account_details flag is set to "true" in the API request.

<h2 id="tocS_paypal">paypal</h2>
<!-- backwards compatibility -->
<a id="schemapaypal"></a>
<a id="schema_paypal"></a>
<a id="tocSpaypal"></a>
<a id="tocspaypal"></a>

```json
{
  "can_be_vaulted": "false",
  "country_code": {},
  "product_code": {},
  "eligible_in_paypal_network": true,
  "recommended": "false",
  "recommended_priority": 1
}
```

Response for PayPal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|can_be_vaulted|boolean|false|none|Indicates if the payment method can be vaulted or not. A true value indicates the payment method can be vaulted using our vaults product. If false, vaulting is not currently supported for this payment method.|
|country_code|object|false|none|none|
|product_code|object|false|none|none|
|eligible_in_paypal_network|[payment_method_eligible_in_paypal_network](#schemapayment_method_eligible_in_paypal_network)|false|none|Flag that indicates if the customer is in the PayPal network. This value will be included in the response if the include_account_details flag is set to "true" in the API request.|
|recommended|boolean|false|none|Indicates if the payment method is recommended or not. A true value indicates the customer is payment ready and this payment method may be presented upfront.|
|recommended_priority|integer|false|none|This value is included in the response when recommended is true for a payment method. It indicates the priority of recommendation for payment readiness of eligible payment methods with lowest number taking the highest precedence.|

<h2 id="tocS_venmo">venmo</h2>
<!-- backwards compatibility -->
<a id="schemavenmo"></a>
<a id="schema_venmo"></a>
<a id="tocSvenmo"></a>
<a id="tocsvenmo"></a>

```json
{
  "can_be_vaulted": "false",
  "country_code": {},
  "product_code": {},
  "eligible_in_paypal_network": true,
  "recommended": "false",
  "recommended_priority": 1
}
```

Response for Venmo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|can_be_vaulted|boolean|false|none|Indicates if the payment method can be vaulted or not. A true value indicates the payment method can be vaulted using our vaults product. If false, vaulting is not currently supported for this payment method.|
|country_code|object|false|none|none|
|product_code|object|false|none|none|
|eligible_in_paypal_network|[payment_method_eligible_in_paypal_network](#schemapayment_method_eligible_in_paypal_network)|false|none|Flag that indicates if the customer is in the PayPal network. This value will be included in the response if the include_account_details flag is set to "true" in the API request.|
|recommended|boolean|false|none|Indicates if the payment method is recommended or not. A true value indicates the customer is payment ready and this payment method may be presented upfront.|
|recommended_priority|integer|false|none|This value is included in the response when recommended is true for a payment method. It indicates the priority of recommendation for payment readiness of eligible payment methods with lowest number taking the highest precedence.|

<h2 id="tocS_payment_methods">payment_methods</h2>
<!-- backwards compatibility -->
<a id="schemapayment_methods"></a>
<a id="schema_payment_methods"></a>
<a id="tocSpayment_methods"></a>
<a id="tocspayment_methods"></a>

```json
{
  "paypal": {
    "can_be_vaulted": "false",
    "country_code": {},
    "product_code": {},
    "eligible_in_paypal_network": true,
    "recommended": "false",
    "recommended_priority": 1
  },
  "venmo": {
    "can_be_vaulted": "false",
    "country_code": {},
    "product_code": {},
    "eligible_in_paypal_network": true,
    "recommended": "false",
    "recommended_priority": 1
  },
  "paypal_credit": {
    "can_be_vaulted": "false",
    "country_code": {},
    "product_code": {}
  },
  "paypal_pay_later": {
    "can_be_vaulted": "false",
    "country_code": {},
    "product_code": {}
  }
}
```

List of payment methods.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paypal|object|false|none|none|
|venmo|object|false|none|none|
|paypal_credit|object|false|none|none|
|paypal_pay_later|object|false|none|none|

<h2 id="tocS_payer_base">payer_base</h2>
<!-- backwards compatibility -->
<a id="schemapayer_base"></a>
<a id="schema_payer_base"></a>
<a id="tocSpayer_base"></a>
<a id="tocspayer_base"></a>

```json
{
  "email_address": {},
  "payer_id": {}
}
```

The customer who approves and pays for the order. The customer is also known as the payer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_address|object|false|none|none|
|payer_id|object|false|none|none|

<h2 id="tocS_venmo_payment_token_info">venmo_payment_token_info</h2>
<!-- backwards compatibility -->
<a id="schemavenmo_payment_token_info"></a>
<a id="schema_venmo_payment_token_info"></a>
<a id="tocSvenmo_payment_token_info"></a>
<a id="tocsvenmo_payment_token_info"></a>

```json
{
  "user_name": "string"
}
```

Payment Token info for Venmo payment source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_name|string|false|none|The Venmo username, as chosen by the user.|

<h2 id="tocS_payment_token">payment_token</h2>
<!-- backwards compatibility -->
<a id="schemapayment_token"></a>
<a id="schema_payment_token"></a>
<a id="tocSpayment_token"></a>
<a id="tocspayment_token"></a>

```json
{
  "id": "strings",
  "payment_source": {
    "paypal": {
      "email_address": {},
      "payer_id": {}
    },
    "venmo": {
      "user_name": "string"
    }
  },
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET",
      "title": "string",
      "mediaType": "string",
      "encType": "application/json",
      "schema": {
        "additionalItems": {},
        "dependencies": {},
        "items": {},
        "definitions": {},
        "patternProperties": {},
        "properties": {},
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "oneOf": [
          {}
        ],
        "not": {},
        "links": [
          {}
        ],
        "fragmentResolution": "string",
        "media": {
          "type": "string",
          "binaryEncoding": "string"
        },
        "pathStart": "http://example.com"
      },
      "targetSchema": {
        "additionalItems": {},
        "dependencies": {},
        "items": {},
        "definitions": {},
        "patternProperties": {},
        "properties": {},
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "oneOf": [
          {}
        ],
        "not": {},
        "links": [
          {}
        ],
        "fragmentResolution": "string",
        "media": {
          "type": "string",
          "binaryEncoding": "string"
        },
        "pathStart": "http://example.com"
      }
    }
  ]
}
```

Vaulted instrument for a payment-method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The PayPal-generated ID for the vault token.|
|payment_source|object|false|none|The vaulted payment method details.|
|links|[[link_description](#schemalink_description)]|false|read-only|An array of related [HATEOAS links](/api/rest/responses/#hateoas).|

<h2 id="tocS_find_eligible_methods_response">find_eligible_methods_response</h2>
<!-- backwards compatibility -->
<a id="schemafind_eligible_methods_response"></a>
<a id="schema_find_eligible_methods_response"></a>
<a id="tocSfind_eligible_methods_response"></a>
<a id="tocsfind_eligible_methods_response"></a>

```json
{
  "eligible_methods": {
    "paypal": {
      "can_be_vaulted": "false",
      "country_code": {},
      "product_code": {},
      "eligible_in_paypal_network": true,
      "recommended": "false",
      "recommended_priority": 1
    },
    "venmo": {
      "can_be_vaulted": "false",
      "country_code": {},
      "product_code": {},
      "eligible_in_paypal_network": true,
      "recommended": "false",
      "recommended_priority": 1
    },
    "paypal_credit": {
      "can_be_vaulted": "false",
      "country_code": {},
      "product_code": {}
    },
    "paypal_pay_later": {
      "can_be_vaulted": "false",
      "country_code": {},
      "product_code": {}
    }
  },
  "payment_tokens": [
    {
      "id": "strings",
      "payment_source": {
        "paypal": {
          "email_address": {},
          "payer_id": {}
        },
        "venmo": {
          "user_name": "string"
        }
      },
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET",
          "title": "string",
          "mediaType": "string",
          "encType": "application/json",
          "schema": {
            "additionalItems": {},
            "dependencies": {},
            "items": {},
            "definitions": {},
            "patternProperties": {},
            "properties": {},
            "allOf": [
              {}
            ],
            "anyOf": [
              {}
            ],
            "oneOf": [
              {}
            ],
            "not": {},
            "links": [
              {}
            ],
            "fragmentResolution": "string",
            "media": {
              "type": "string",
              "binaryEncoding": "string"
            },
            "pathStart": "http://example.com"
          },
          "targetSchema": {
            "additionalItems": {},
            "dependencies": {},
            "items": {},
            "definitions": {},
            "patternProperties": {},
            "properties": {},
            "allOf": [
              {}
            ],
            "anyOf": [
              {}
            ],
            "oneOf": [
              {}
            ],
            "not": {},
            "links": [
              {}
            ],
            "fragmentResolution": "string",
            "media": {
              "type": "string",
              "binaryEncoding": "string"
            },
            "pathStart": "http://example.com"
          }
        }
      ]
    }
  ]
}
```

Eligible payment methods along with applicable vault tokens, if requested.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eligible_methods|object|false|none|none|
|payment_tokens|[object]|false|none|Payment tokens for vaulted instruments, if available. This object will be included only if include_vault_tokens is set to true in the request.|
