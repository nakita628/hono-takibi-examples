<h1 id="merchant-api">Merchant API v2024-09-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Welcome to the Revolut Merchant API - your solution to managing the core aspects of e-commerce and accepting online payments. Whether you're a startup, a growing business, or an established enterprise in the e-commerce industry, our API helps you streamline your operations.

As a Revolut Business customer with a Merchant Account, you can use the
Merchant API to leverage the following features:

- [Order management](https://developer.revolut.com/docs/api/merchant/2024-09-01#tag-orders)
- [Customer management](https://developer.revolut.com/docs/api/merchant/2024-09-01#tag-customers)
- [Payment management](https://developer.revolut.com/docs/api/merchant/2024-09-01#tag-payments)
- [Subscription management](https://developer.revolut.com/docs/api/merchant/2024-09-01#tag-subscriptions)
- [Payout management](https://developer.revolut.com/docs/api/merchant/2024-09-01#tag-payouts)
- [Dispute management](https://developer.revolut.com/docs/api/merchant/2024-09-01#tag-disputes)
- [Reporting analytics](https://developer.revolut.com/docs/api/merchant/2024-09-01#tag-report-runs)
- [Webhook management](https://developer.revolut.com/docs/api/merchant/2024-09-01#tag-webhooks)
- [Location management](https://developer.revolut.com/docs/api/merchant/2024-09-01#tag-locations)

... and more.

### API versions

:::warning
We highly recommend using versioning in your API calls. If you don't provide a version header on the operations where it's required, you will receive an error response.
:::

The Merchant API uses request header versioning. Where it is required you need to use the `Revolut-Api-Version` header parameter to specify an API version. Each request, where it is indicated in the API specification, must contain a version header in the following format:
  
```
'Revolut-Api-Version: 2024-09-01'
```

:::info
For more information, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions)
:::

### Test the Merchant API

You can test the Merchant API in Postman by forking this collection:

[![View in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/revolut-api/workspace/revolut-developers/overview)

Base URLs:

* <a href="https://merchant.revolut.com">https://merchant.revolut.com</a> - Production server (uses live data)

* <a href="https://sandbox-merchant.revolut.com">https://sandbox-merchant.revolut.com</a> - Sandbox server (uses test data)

Email: <a href="mailto:api-requests@revolut.com">Revolut Developer Support</a> 
Web: <a href="https://developer.revolut.com">Revolut Developer Support</a> 

# Authentication

- HTTP Authentication, scheme: bearer Each Merchant API request must contain an authorization header in the following format:

```
'Authorization: Bearer <yourSecretApiKey>'
```

To use this API, you need to generate API keys from your Revolut Business account. The Secret key is used in the authorization header for all server calls, while the Public key is provided with payment methods at checkout.

:::info
For detailed instructions on generating your API keys, see: [Generate API keys](https://developer.revolut.com/docs/guides/merchant/get-started#generate-api-keys).
:::

- HTTP Authentication, scheme: ssl :::note
This authentication protocol is used exclusively when using [Fast checkout](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/fast-checkout).
:::

Connection over HTTPS is using SSL authentication. For successful authentication, your system's certificate should be issued by a Public Certificate Authority (PCA) and your system should trust Revolut's public certificate.

* API Key (Payload-Signature)
    - Parameter Name: **Revolut-Pay-Payload-Signature**, in: header. :::note
This authentication protocol is used exclusively when using [Fast checkout](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/fast-checkout).
:::

Data integrity and authorship will be verified using a payload-based signature. The response of a successful URL registration for address validation (see: [Register address validation for Fast checkout](https://developer.revolut.com/docs/api/merchant#register-address-validation-endpoint)) will contain a secret signing key.

The signing key will be used by Revolut to compute a Hash-based Message Authentication Code (HMAC) payload signature whenever the registered URL is called, which should be verified by your backend.

<h1 id="merchant-api-orders">Orders</h1>

The Orders resource in the Merchant API offers a comprehensive solution for managing the lifecycle of orders within your e-commerce or retail platform. Designed to streamline order processing, this resource encapsulates a suite of operations that allow for efficiently handling order management-related tasks. For more information about the order lifecycle, see: [Order and payment lifecycle](https://developer.revolut.com/docs/guides/merchant/reference/order-lifecycle).

These operations are equipped to handle various order management scenarios, providing a robust interface for businesses to interact with their order data. 

To process a payment related to your customers' purchases, you need to create an `Order` object. Then you can use an order's unique `token` to process and accept payments via the Revolut Checkout Widget.

:::warning
The [Create an order endpoint](https://developer.revolut.com/docs/api/merchant/2024-09-01#create-order) was updated to a new version and now returns `token` as the public identifier for the order. Previous integrations might still use the deprecated endpoint returning `public_id`.

We strongly advise upgrading to the new [Create an order endpoint](https://developer.revolut.com/docs/api/merchant/2024-09-01#create-order).
:::

## Retrieve an order list

<a id="opIdretrieveOrderList"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/orders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`GET /api/orders`

Get a paginated list of your orders, returned as a wrapped `orders` array.

The response contains simplified `Order` objects. To get the full details of a specific order, use the [Retrieve an order](https://developer.revolut.com/docs/api/merchant/2024-09-01#retrieve-order) endpoint.  

<h3 id="retrieve-an-order-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Maximum number of records to return. Used for **pagination**.|
|from|query|string(date-time)|false|Filter records created from this date/time. Used for **filtering**.|
|to|query|string(date-time)|false|Filter records created until this date/time. Used for **filtering**.|
|customer_id|query|string(uuid)|false|Filter orders by the ID of the customer.|
|merchant_order_data_reference|query|[Merchant-Order-External-Reference](#schemamerchant-order-external-reference)|false|Filter orders by your own order reference set in `merchant_order_data.reference`.|
|state|query|[[Order-State](#schemaorder-state)]|false|Filter orders by state. Repeat the parameter to filter by multiple states.|
|location_id|query|string(uuid)|false|Filter results by location ID.|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|pending|
|state|processing|
|state|authorised|
|state|completed|
|state|cancelled|
|state|failed|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "orders": [
    {
      "id": "a1b2c3d4-0001-0000-0000-000000000001",
      "token": "b2c3d4e5-0001-0000-0000-000000000001",
      "type": "payment",
      "state": "completed",
      "created_at": "2025-03-10T08:30:00Z",
      "updated_at": "2025-03-10T08:32:15Z",
      "amount": 4999,
      "currency": "GBP",
      "outstanding_amount": 0,
      "capture_mode": "automatic",
      "enforce_challenge": "automatic",
      "description": "Premium subscription",
      "customer": {
        "id": "c3d4e5f6-0001-0000-0000-000000000001",
        "email": "jane.doe@example.com",
        "full_name": "Jane Doe",
        "phone": "+441234567890"
      }
    },
    {
      "id": "a1b2c3d4-0002-0000-0000-000000000002",
      "token": "b2c3d4e5-0002-0000-0000-000000000002",
      "type": "payment",
      "state": "completed",
      "created_at": "2025-03-11T09:00:00Z",
      "updated_at": "2025-03-11T09:01:45Z",
      "amount": 12500,
      "currency": "EUR",
      "outstanding_amount": 0,
      "capture_mode": "automatic",
      "enforce_challenge": "automatic",
      "description": "Shopping cart",
      "customer": {
        "id": "c3d4e5f6-0002-0000-0000-000000000002",
        "email": "john.smith@example.com",
        "full_name": "John Smith"
      },
      "line_items": [
        {
          "name": "Wireless headphones",
          "quantity": 1,
          "unit_price": 9900,
          "total_amount": 9900
        },
        {
          "name": "Phone case",
          "quantity": 2,
          "unit_price": 1300,
          "total_amount": 2600
        }
      ]
    },
    {
      "id": "a1b2c3d4-0003-0000-0000-000000000003",
      "type": "refund",
      "state": "completed",
      "created_at": "2025-03-12T11:15:00Z",
      "updated_at": "2025-03-12T11:16:30Z",
      "amount": 4999,
      "currency": "GBP",
      "outstanding_amount": 0,
      "capture_mode": "automatic",
      "enforce_challenge": "automatic",
      "related_order_id": "a1b2c3d4-0001-0000-0000-000000000001",
      "merchant_order_data": {
        "order_id": "ORD-2025-001",
        "description": "Customer-requested refund"
      }
    },
    {
      "id": "a1b2c3d4-0004-0000-0000-000000000004",
      "token": "b2c3d4e5-0004-0000-0000-000000000004",
      "type": "payment",
      "state": "authorised",
      "created_at": "2025-03-13T14:00:00Z",
      "updated_at": "2025-03-13T14:00:30Z",
      "amount": 35000,
      "currency": "USD",
      "outstanding_amount": 35000,
      "capture_mode": "manual",
      "enforce_challenge": "automatic",
      "description": "Enterprise software licence",
      "cancel_authorised_after": "2025-03-20T14:00:00Z",
      "customer": {
        "id": "c3d4e5f6-0003-0000-0000-000000000003",
        "email": "alex.johnson@example.com",
        "full_name": "Alex Johnson"
      }
    },
    {
      "id": "a1b2c3d4-0005-0000-0000-000000000005",
      "token": "b2c3d4e5-0005-0000-0000-000000000005",
      "type": "payment",
      "state": "completed",
      "created_at": "2025-03-14T16:45:00Z",
      "updated_at": "2025-03-14T16:46:00Z",
      "amount": 799,
      "currency": "GBP",
      "outstanding_amount": 0,
      "capture_mode": "automatic",
      "enforce_challenge": "automatic",
      "description": "Coffee and pastry",
      "location_id": "d4e5f6a7-0001-0000-0000-000000000001"
    },
    {
      "id": "a1b2c3d4-0006-0000-0000-000000000006",
      "token": "b2c3d4e5-0006-0000-0000-000000000006",
      "type": "payment",
      "state": "completed",
      "created_at": "2025-03-15T09:00:00Z",
      "updated_at": "2025-03-15T09:01:00Z",
      "amount": 1999,
      "currency": "GBP",
      "outstanding_amount": 0,
      "capture_mode": "automatic",
      "enforce_challenge": "automatic",
      "subscription_data": {
        "subscription_id": "e2862e0e-66e8-4623-bdd6-7da59b85365d",
        "active_cycle_id": "a1b2c3d4-5678-9012-abcd-ef1234567890",
        "billing_reason": "cycle_billing"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-an-order-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Orders-v2](#schemaorders-v2)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Create an order

<a id="opIdcreateOrder"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/orders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17' \
  -d '{
    "amount": 500,
    "currency": "GBP"
  }'
```

`POST /api/orders`

Create an `Order` object.

Creating orders is one of the basic operations of the Merchant API. Most of the other operations are related to creating orders. Furthermore, the payment methods merchants can use to take payments for their orders are also built on order creation.

To learn more about how you can accept payments, see:
  - [Revolut Pay](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/revolut-pay/introduction)
  - [Card payments](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/card-payments/introduction)
  - [Apple Pay and Google Pay](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/apple-pay-google-pay/introduction)
  - [Pay by Bank](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/pay-by-bank/introduction)
  - [Revolut Checkout](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/revolut-checkout/introduction)
  - [Hosted Checkout Page](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/hosted-checkout-page/introduction)


### Pre-authorisation and incremental authorisation

Orders can be created with `authorisation_type: pre_authorisation` to enable incremental authorisation. This allows you to increase the authorised amount after the initial authorisation.

**Requirements:**
- `capture_mode` must be set to `manual`
- `authorisation_type` must be set to `pre_authorisation`
- Only supported for card payments currently

**Example use cases:**
- Hotels: authorise deposit, then increment for room service and minibar
- Car rentals: authorise deposit, then increment for damages or fuel

:::info
For more information, see:
- [Pre-authorisation guide](https://developer.revolut.com/docs/guides/merchant/operations/capture-and-settlement/advanced-authorisation/pre-authorisation)
- [Incremental authorisation guide](https://developer.revolut.com/docs/guides/merchant/operations/capture-and-settlement/advanced-authorisation/incremental-authorisation)
- [Increment authorisation endpoint](https://developer.revolut.com/docs/api/merchant/2024-09-01#increment-authorisation)
:::

<details>
<summary>Industry-specific requirements</summary>

If you operate in any of the industries listed below, sharing industry-specific data is mandatory. Not providing the necessary information will result in further scrutiny from Revolut and/or the imposition of risk mitigation actions.

| Industry | Related fields |
| ------- | --------------- |
| Retail merchants | `line_items`, `shipping` |
| Airlines | `industry_data` with `type: airline` |
| Car rentals | `industry_data` with `type: car_rental` |
| Hotels & accommodation | `industry_data` with `type: lodging` |
| Travel agencies (OTAs) | `industry_data` with `type: airline` or `industry_data` with `type: lodging` |
| Crypto merchants | `industry_data` with `type: crypto`; `customer.full_name`, `customer.date_of_birth` |
| Financial institutions | `customer.full_name`, `customer.date_of_birth` |
| Stored value / Wallets | `customer.full_name`, `customer.date_of_birth` |
| Event ticket sellers | `industry_data` with `type: event` |
| Marketplace merchants | `industry_data` with `type: marketplace` |

</details>

> Body parameter

```json
{
  "amount": 500,
  "currency": "GBP"
}
```

<h3 id="create-an-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|body|body|[Order-Creation-v4](#schemaorder-creation-v4)|false|none|
|» amount|body|[Order-Amount-v2](#schemaorder-amount-v2)|true|The order total expressed in minor currency units, according to the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217). For example, `7034` in `EUR` corresponds to €70.34.<br><br>:::info<br>- Conversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).<br>- If `line_items` are provided, the order `amount` must equal the sum of all line items' `total_amount`.<br>- For card payments with a non-zero amount, the order `amount` must be at least **$0.005** (or equivalent in different currencies, calculated using Revolut's exchange rate on the payment date). Otherwise, card payments can't be performed.<br>:::|
|» currency|body|[Currency](#schemacurrency)|true|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|» settlement_currency|body|[Settlement-Currency](#schemasettlement-currency)|false|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case. <br><br>If `settlement_currency` is different from the value of `currency`, the money will be exchanged when the amount is settled to your merchant account. In case of a refund or chargeback, the money will be exchanged to the order's initial `currency`.<br><br>If `settlement_currency` is not specified, this value is taken from `currency`.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|» description|body|[Order-Description](#schemaorder-description)|false|The description of the order.|
|» customer|body|[Customer-v2](#schemacustomer-v2)|false|Object containing information about a customer.<br><br>If you have it, we strongly advise providing at least either `id`, `phone`, or `email`.<br><br>Using the [Customers operations](https://developer.revolut.com/docs/api/merchant#tag-customers), you can manage customer instances.<br><br>The following behaviours apply to different use cases:<br><br>  \| Use case \| API behavior \|<br>  \| -------- \| ------------ \|<br>  \| Existing customer \| If `id` was provided, we ignore other customer details and associate the customer with the order.<br/><br/>If either `email`, `phone`, or `full_name` was provided (without an existing customer's `id`), we always create a new customer, irrespective of another, existing customer object having the same details. \|<br>  \| New customer \| If either `email`, `phone`, or `full_name` was provided, we create a new customer, irrespective of another customer object having the same details. <br/><br/>If `id` of a non-existent customer was provided, we return a `404` error, irrespective of other details provided. \|<br><br>:::note<br>To avoid unintentional duplication of customer records, search for an existing customer by email or phone using the [List customers](https://developer.revolut.com/docs/api/merchant#retrieve-customer-list) endpoint first, then provide `customer.id` in the order.<br>:::|
|» enforce_challenge|body|[Enforce-Challenge-v2](#schemaenforce-challenge-v2)|false|The enforce challenge mode. `automatic` is used by default.<br><br>\| Parameter value \| Description \|<br>\| --------------- \| ----------- \|<br>\| `automatic` \| The payments created for an order will have challenge requirement calculated by our fraud mechanisms. Not all payments will trigger a 3DS challenge. \|<br>\| `forced` \| The payments created for an order will always require a 3DS challenge. Currently only supported for card payments. \||
|» line_items|body|[Line-Items](#schemaline-items)|false|An array of line items included in the order. Each line item represents an individual product or service, along with its quantity, price, taxes, and discounts.<br><br>:::info<br>Required for merchants collecting payment for one or multiple products/services in one transaction. Omitting this information may trigger additional scrutiny and risk mitigation actions by Revolut.<br>:::|
|» shipping|body|[Shipping](#schemashipping)|false|Details about the shipping related to the order, including address, contact information, and individual shipments.<br><br>:::info<br>Required for merchants shipping physical goods. Omitting this information may trigger additional scrutiny and risk mitigation actions by Revolut.<br>:::|
|» capture_mode|body|[Capture-Mode-v2](#schemacapture-mode-v2)|false|The capture mode of the order. `automatic` is used by default.<br><br>\| Parameter value \| Description \|<br>\| --------------- \| ----------- \|<br>\| `automatic` \| The order is captured automatically after payment authorisation. \|<br>\| `manual` \| The order is not captured automatically. You must manually capture the order later. \|<br><br>:::info<br>For more information, see [Capture an order](https://developer.revolut.com/docs/api/merchant#capture-order).<br>:::|
|» authorisation_type|body|[Authorisation-Type](#schemaauthorisation-type)|false|The type of authorisation for the order. Used with manual capture mode. If omitted, `final` is used by default.<br><br>### Pre-authorisation<br><br>Pre-authorisation allows you to reserve funds on a customer's card without immediately capturing them. This is useful for scenarios like:<br><br>- Hotel bookings where the final amount may vary<br>- Car rentals where additional charges may apply<br>- Deposits that need to be held temporarily<br><br>\| Parameter value \| Description \|<br>\| --------------- \| ----------- \|<br>\| `final` \| Standard authorisation for immediate or near-immediate capture. \|<br>\| `pre_authorisation` \| Reserve funds for later capture, used with manual capture mode. \|<br><br>:::note<br>Pre-authorisation must be used with `capture_mode: manual`. For more information, see [Capture an order](https://developer.revolut.com/docs/api/merchant#capture-order).<br>:::|
|» cancel_authorised_after|body|[Cancel-Authorised-After](#schemacancel-authorised-after)|false|Automatic cancellation period for uncaptured orders, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. <br><br>After this period, the authorised payment is automatically cancelled and the order is cancelled. Maximum: 7 days = `P7D`.<br><br>:::note<br>The following limitations apply:<br>  - Cannot be a negative value.<br>  - Cannot be updated if the new value is less than or equal to the elapsed time since authorisation. <br><br>    **Failing scenario:**<br>      - Original value: 7 days<br>      - Time since authorisation: 3 days<br>      - Update value: 2 days<br>      <br>    In this scenario, an error is returned.<br>    <br>    **Successful scenario:**<br>      - Original value: 7 days<br>      - Time since authorisation: 3 days<br>      - Update value: 4 days<br><br>    In this scenario, the parameter can be updated.<br><br>  - Cannot be updated if cancellation is ≤ 30 minutes away.<br><br>    **Failing scenario:**<br>      - Original value: 12 hours<br>      - Time since authorisation: 11 hours 40 minutes<br>                        <br>    In this scenario, an error is returned.<br>    <br>    **Successful scenario:** <br>      - Original value: 12 hours<br>      - Time since authorisation: 11 hours 20 minutes<br><br>    In this scenario, the parameter can be updated.<br>:::|
|» expire_pending_after|body|[Expire-Pending-After](#schemaexpire-pending-after)|false|Automatic expiration period for pending orders, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.<br><br>Orders in `pending` state will be automatically failed if they stay unpaid for longer than the period specified.<br><br>When the order expires, it transitions to the `failed` state and an `ORDER_FAILED` webhook event is triggered.<br><br>:::note<br>- This field can only be set during order creation and cannot be updated afterward.<br>- Must be between `PT1M` (1 minute) and `PT720H` (30 days).<br>- Cannot be a negative value.<br>:::|
|» location_id|body|[Location-Id](#schemalocation-id)|false|Unique ID representing the location where merchants sells products.<br><br>:::info<br>For more information, see: [Locations](https://developer.revolut.com/docs/api/merchant#tag-locations).<br>:::        |
|» metadata|body|[Metadata](#schemametadata)|false|Additional information to track your orders in your system, by providing custom metadata using `"<key>" : "<value>"` pairs.<br><br>:::warning<br>**Restrictions:**<br><br>- Both keys and values must be `string`s<br>- Values cannot be `null`.<br>- Max number of key-value pairs: `50`<br>- Max length of values: `500` characters<br>- Format of keys: Must start with a letter and contain only letters, digits, and underscores. Max 40 characters. Pattern: `^[a-zA-Z][a-zA-Z\\d_]{0,39}$`<br>:::|
|» industry_data|body|[Industry-Data](#schemaindustry-data)|false|Object containing industry-specific information associated with the order.<br><br>:::info<br>In the following cases, industry-specific info is required. Omitting this information may trigger additional scrutiny and risk mitigation actions by the Revolut risk team.<br><br>  \| Transaction type \| Required for \| <br>  \| ---------------- \| ----------- \|<br>  \| `airline`        \| Airlines and Online Travel Agencies (OTAs). \|<br>  \| `crypto`         \| Crypto merchants. \|<br>  \| `marketplace`    \| Marketplace merchants. \|<br>  \| `event`          \| Event ticket sellers. \|<br>  \| `lodging`        \| Lodging providers and OTAs. \|<br>:::|
|» merchant_order_data|body|[Merchant-Order-Data](#schemamerchant-order-data)|false|Object for providing additional information stored in the merchant's order management system. |
|» upcoming_payment_data|body|[Upcoming-Payment](#schemaupcoming-payment)|false|Object containing information about upcoming payments associated with the order.|
|» redirect_url|body|[Redirect-Url](#schemaredirect-url)|false|The URL your customer will be redirected to after completing a payment flow.<br><br>- **Hosted Checkout Page** (`checkout_url`): This is the post-success URL - the customer is redirected only after a successful payment.<br>- **Embedded Revolut Pay** (Revolut Checkout widget): This URL is used for all redirect outcomes - success, failure, and cancellation.<br><br>:::warning [Restrictions]<br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be either `http` or `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `2000`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::<br><br>:::note [Revolut Checkout]<br>- Revolut Pay will not appear in the widget on mobile devices unless redirect targets are configured - either via this `redirect_url` parameter or the SDK-level `revolutPayOptions.mobileRedirectUrls` option.<br>- If `redirect_url` is set on the order, it takes precedence over `revolutPayOptions.mobileRedirectUrls` and is used for all redirect outcomes (success, failure, cancel).<br>:::<br><br>:::info<br>For more information, see:<br>- [Hosted Checkout Page: Custom redirection](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/hosted-checkout-page/api#custom-post-payment-redirection-optional)<br>- [Revolut Checkout: Configure mobile redirects](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/revolut-checkout/web#35-configure-revolut-pay-mobile-redirects)<br>:::|
|» statement_descriptor_suffix|body|[Statement-Descriptor-Suffix](#schemastatement-descriptor-suffix)|false|You can set a dynamic statement descriptor for your orders by providing a custom suffix. <br><br>A statement descriptor is the text shown on cardholders' bank or card statements, helping them recognise a transaction or merchant. This field can be used to send extra information with the statement descriptor for card transactions.<br><br>The complete descriptor is built using the following format: `{base}*{suffix}`, where:<br>  <br>  - **`{base}`** is the existing descriptor configured in the Revolut Business dashboard (**Settings > Business account > Merchant profile > Statement descriptor**).  <br>  - **`{suffix}`** is defined by the `statement_descriptor_suffix` field.<br><br>:::note<br>- If the combined descriptor's length (base + suffix) exceeds the character limits of card scheme providers, the final value will be truncated. For example if the limit is 22 characters, the base descriptor is `"base"` and the suffix is `"testdescriptorsuffix"`, the final descriptor becomes `"base*testdescriptorsuf"`.<br>- The final statement descriptor shown on a cardholder's statement may vary by issuing bank, as some banks apply their own custom formatting or truncation rules.<br>:::|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|
|» enforce_challenge|automatic|
|» enforce_challenge|forced|
|» capture_mode|automatic|
|» capture_mode|manual|
|» authorisation_type|final|
|» authorisation_type|pre_authorisation|

> Example responses

> 201 Response

```json
{
  "id": "6516e61c-d279-a454-a837-bc52ce55ed49",
  "token": "0adc0e3c-ab44-4f33-bcc0-534ded7354ce",
  "type": "payment",
  "state": "pending",
  "created_at": "2023-09-29T14:58:36.079398Z",
  "updated_at": "2023-09-29T14:58:36.079398Z",
  "amount": 500,
  "currency": "GBP",
  "outstanding_amount": 500,
  "capture_mode": "automatic",
  "authorisation_type": "final",
  "checkout_url": "https://checkout.revolut.com/payment-link/0adc0e3c-ab44-4f33-bcc0-534ded7354ce",
  "enforce_challenge": "automatic"
}
```

> 400 Response

```json
{
  "code": "bad_request",
  "message": "Could not parse JSON",
  "timestamp": 1721049596461
}
```

> 401 Response

```json
{
  "code": "unauthenticated",
  "message": "Authentication failed",
  "timestamp": 1721049596461
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="create-an-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Order created|[Order-v4](#schemaorder-v4)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Retrieve an order

<a id="opIdretrieveOrder"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/orders/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`GET /api/orders/{order_id}`

Retrieve the details of an order that has been created. Provide the unique
order ID, and the corresponding order information is returned.

<h3 id="retrieve-an-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|order_id|path|string(uuid)|true|The ID of the `Order` object.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "id": "6516e61c-d279-a454-a837-bc52ce55ed49",
  "token": "0adc0e3c-ab44-4f33-bcc0-534ded7354ce",
  "type": "payment",
  "state": "pending",
  "created_at": "2023-09-29T14:58:36.079398Z",
  "updated_at": "2023-09-29T14:58:36.079398Z",
  "amount": 500,
  "currency": "GBP",
  "outstanding_amount": 500,
  "capture_mode": "automatic",
  "authorisation_type": "final",
  "checkout_url": "https://checkout.revolut.com/payment-link/0adc0e3c-ab44-4f33-bcc0-534ded7354ce",
  "enforce_challenge": "automatic"
}
```

> 400 Response

```json
{
  "code": "bad_request",
  "message": "Could not parse JSON",
  "timestamp": 1601296792533
}
```

> 401 Response

```json
{
  "code": "unauthenticated",
  "message": "Authentication failed",
  "timestamp": 1721049596461
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Order with id abfa5bbd-a20c-4a0e-be66-30e733454518 was not found",
  "timestamp": 1721050063886
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-an-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Order retrieved|[Order-v4](#schemaorder-v4)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Update an order

<a id="opIdupdateOrder"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/orders/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17' \
  -d '{
    "amount": 1000,
    "currency": "EUR",
    "settlement_currency": "GBP",
    "capture_mode": "manual",
    "cancel_authorised_after": "P3D",
    "metadata": {
      "example_key": "example_value"
    },
    "merchant_order_data": {
      "url": "https://example.com/orders/12345"
    },
    "statement_descriptor_suffix": "12345"
  }'
```

`PATCH /api/orders/{order_id}`

Update the details of an order.

You can update an order and specific parameters based on the value of the `state` parameter:
  
| State parameter value | Modifiable parameters |
| --------------------- | --------------------- |
| `pending` | You can modify all listed parameters. |
| `authorised` | You can modify the following parameters: <br /><br /> <ul><li>`merchant_order_data.reference`</li><li>`description`</li><li>`metadata`</li><li>`shipping`</li><li>`industry_data`</li><li>`cancel_authorised_after`</li></ul> |
| `completed` | You can modify the following parameters: <br /><br /> <ul><li>`merchant_order_data.reference`</li><li>`description`</li><li>`metadata`</li><li>`shipping`</li><li>`industry_data`</li></ul> |
| `processing` | You cannot modify parameters. |

:::info
For more information about the order lifecycle, see: [Order and payment lifecycle](https://developer.revolut.com/docs/guides/merchant/reference/order-lifecycle).
:::

> Body parameter

```json
{
  "amount": 1000,
  "currency": "EUR",
  "settlement_currency": "GBP",
  "capture_mode": "manual",
  "cancel_authorised_after": "P3D",
  "metadata": {
    "example_key": "example_value"
  },
  "merchant_order_data": {
    "url": "https://example.com/orders/12345"
  },
  "statement_descriptor_suffix": "12345"
}
```

<h3 id="update-an-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|order_id|path|string(uuid)|true|The ID of the `Order` object.|
|body|body|[Order-Update-v4](#schemaorder-update-v4)|false|none|
|» amount|body|[Order-Amount-v2](#schemaorder-amount-v2)|false|The order total expressed in minor currency units, according to the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217). For example, `7034` in `EUR` corresponds to €70.34.<br><br>:::info<br>- Conversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).<br>- If `line_items` are provided, the order `amount` must equal the sum of all line items' `total_amount`.<br>- For card payments with a non-zero amount, the order `amount` must be at least **$0.005** (or equivalent in different currencies, calculated using Revolut's exchange rate on the payment date). Otherwise, card payments can't be performed.<br>:::|
|» currency|body|[Currency](#schemacurrency)|false|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|» settlement_currency|body|[Settlement-Currency](#schemasettlement-currency)|false|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case. <br><br>If `settlement_currency` is different from the value of `currency`, the money will be exchanged when the amount is settled to your merchant account. In case of a refund or chargeback, the money will be exchanged to the order's initial `currency`.<br><br>If `settlement_currency` is not specified, this value is taken from `currency`.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|» description|body|[Order-Description](#schemaorder-description)|false|The description of the order.|
|» customer|body|[Customer-v2](#schemacustomer-v2)|false|Object containing information about a customer.<br><br>If you have it, we strongly advise providing at least either `id`, `phone`, or `email`.<br><br>Using the [Customers operations](https://developer.revolut.com/docs/api/merchant#tag-customers), you can manage customer instances.<br><br>The following behaviours apply to different use cases:<br><br>  \| Use case \| API behavior \|<br>  \| -------- \| ------------ \|<br>  \| Existing customer \| If `id` was provided, we ignore other customer details and associate the customer with the order.<br/><br/>If either `email`, `phone`, or `full_name` was provided (without an existing customer's `id`), we always create a new customer, irrespective of another, existing customer object having the same details. \|<br>  \| New customer \| If either `email`, `phone`, or `full_name` was provided, we create a new customer, irrespective of another customer object having the same details. <br/><br/>If `id` of a non-existent customer was provided, we return a `404` error, irrespective of other details provided. \|<br><br>:::note<br>To avoid unintentional duplication of customer records, search for an existing customer by email or phone using the [List customers](https://developer.revolut.com/docs/api/merchant#retrieve-customer-list) endpoint first, then provide `customer.id` in the order.<br>:::|
|» shipping|body|[Shipping](#schemashipping)|false|Details about the shipping related to the order, including address, contact information, and individual shipments.<br><br>:::info<br>Required for merchants shipping physical goods. Omitting this information may trigger additional scrutiny and risk mitigation actions by Revolut.<br>:::|
|» enforce_challenge|body|[Enforce-Challenge-v2](#schemaenforce-challenge-v2)|false|The enforce challenge mode. `automatic` is used by default.<br><br>\| Parameter value \| Description \|<br>\| --------------- \| ----------- \|<br>\| `automatic` \| The payments created for an order will have challenge requirement calculated by our fraud mechanisms. Not all payments will trigger a 3DS challenge. \|<br>\| `forced` \| The payments created for an order will always require a 3DS challenge. Currently only supported for card payments. \||
|» line_items|body|[Line-Items](#schemaline-items)|false|An array of line items included in the order. Each line item represents an individual product or service, along with its quantity, price, taxes, and discounts.<br><br>:::info<br>Required for merchants collecting payment for one or multiple products/services in one transaction. Omitting this information may trigger additional scrutiny and risk mitigation actions by Revolut.<br>:::|
|» capture_mode|body|[Capture-Mode-v2](#schemacapture-mode-v2)|false|The capture mode of the order. `automatic` is used by default.<br><br>\| Parameter value \| Description \|<br>\| --------------- \| ----------- \|<br>\| `automatic` \| The order is captured automatically after payment authorisation. \|<br>\| `manual` \| The order is not captured automatically. You must manually capture the order later. \|<br><br>:::info<br>For more information, see [Capture an order](https://developer.revolut.com/docs/api/merchant#capture-order).<br>:::|
|» cancel_authorised_after|body|[Cancel-Authorised-After](#schemacancel-authorised-after)|false|Automatic cancellation period for uncaptured orders, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. <br><br>After this period, the authorised payment is automatically cancelled and the order is cancelled. Maximum: 7 days = `P7D`.<br><br>:::note<br>The following limitations apply:<br>  - Cannot be a negative value.<br>  - Cannot be updated if the new value is less than or equal to the elapsed time since authorisation. <br><br>    **Failing scenario:**<br>      - Original value: 7 days<br>      - Time since authorisation: 3 days<br>      - Update value: 2 days<br>      <br>    In this scenario, an error is returned.<br>    <br>    **Successful scenario:**<br>      - Original value: 7 days<br>      - Time since authorisation: 3 days<br>      - Update value: 4 days<br><br>    In this scenario, the parameter can be updated.<br><br>  - Cannot be updated if cancellation is ≤ 30 minutes away.<br><br>    **Failing scenario:**<br>      - Original value: 12 hours<br>      - Time since authorisation: 11 hours 40 minutes<br>                        <br>    In this scenario, an error is returned.<br>    <br>    **Successful scenario:** <br>      - Original value: 12 hours<br>      - Time since authorisation: 11 hours 20 minutes<br><br>    In this scenario, the parameter can be updated.<br>:::|
|» metadata|body|[Metadata](#schemametadata)|false|Additional information to track your orders in your system, by providing custom metadata using `"<key>" : "<value>"` pairs.<br><br>:::warning<br>**Restrictions:**<br><br>- Both keys and values must be `string`s<br>- Values cannot be `null`.<br>- Max number of key-value pairs: `50`<br>- Max length of values: `500` characters<br>- Format of keys: Must start with a letter and contain only letters, digits, and underscores. Max 40 characters. Pattern: `^[a-zA-Z][a-zA-Z\\d_]{0,39}$`<br>:::|
|» industry_data|body|[Industry-Data](#schemaindustry-data)|false|Object containing industry-specific information associated with the order.<br><br>:::info<br>In the following cases, industry-specific info is required. Omitting this information may trigger additional scrutiny and risk mitigation actions by the Revolut risk team.<br><br>  \| Transaction type \| Required for \| <br>  \| ---------------- \| ----------- \|<br>  \| `airline`        \| Airlines and Online Travel Agencies (OTAs). \|<br>  \| `crypto`         \| Crypto merchants. \|<br>  \| `marketplace`    \| Marketplace merchants. \|<br>  \| `event`          \| Event ticket sellers. \|<br>  \| `lodging`        \| Lodging providers and OTAs. \|<br>:::|
|» merchant_order_data|body|[Merchant-Order-Data](#schemamerchant-order-data)|false|Object for providing additional information stored in the merchant's order management system. |
|» upcoming_payment_data|body|[Upcoming-Payment](#schemaupcoming-payment)|false|Object containing information about upcoming payments associated with the order.|
|» redirect_url|body|[Redirect-Url](#schemaredirect-url)|false|The URL your customer will be redirected to after completing a payment flow.<br><br>- **Hosted Checkout Page** (`checkout_url`): This is the post-success URL - the customer is redirected only after a successful payment.<br>- **Embedded Revolut Pay** (Revolut Checkout widget): This URL is used for all redirect outcomes - success, failure, and cancellation.<br><br>:::warning [Restrictions]<br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be either `http` or `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `2000`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::<br><br>:::note [Revolut Checkout]<br>- Revolut Pay will not appear in the widget on mobile devices unless redirect targets are configured - either via this `redirect_url` parameter or the SDK-level `revolutPayOptions.mobileRedirectUrls` option.<br>- If `redirect_url` is set on the order, it takes precedence over `revolutPayOptions.mobileRedirectUrls` and is used for all redirect outcomes (success, failure, cancel).<br>:::<br><br>:::info<br>For more information, see:<br>- [Hosted Checkout Page: Custom redirection](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/hosted-checkout-page/api#custom-post-payment-redirection-optional)<br>- [Revolut Checkout: Configure mobile redirects](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/revolut-checkout/web#35-configure-revolut-pay-mobile-redirects)<br>:::|
|» statement_descriptor_suffix|body|[Statement-Descriptor-Suffix](#schemastatement-descriptor-suffix)|false|You can set a dynamic statement descriptor for your orders by providing a custom suffix. <br><br>A statement descriptor is the text shown on cardholders' bank or card statements, helping them recognise a transaction or merchant. This field can be used to send extra information with the statement descriptor for card transactions.<br><br>The complete descriptor is built using the following format: `{base}*{suffix}`, where:<br>  <br>  - **`{base}`** is the existing descriptor configured in the Revolut Business dashboard (**Settings > Business account > Merchant profile > Statement descriptor**).  <br>  - **`{suffix}`** is defined by the `statement_descriptor_suffix` field.<br><br>:::note<br>- If the combined descriptor's length (base + suffix) exceeds the character limits of card scheme providers, the final value will be truncated. For example if the limit is 22 characters, the base descriptor is `"base"` and the suffix is `"testdescriptorsuffix"`, the final descriptor becomes `"base*testdescriptorsuf"`.<br>- The final statement descriptor shown on a cardholder's statement may vary by issuing bank, as some banks apply their own custom formatting or truncation rules.<br>:::|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|
|» enforce_challenge|automatic|
|» enforce_challenge|forced|
|» capture_mode|automatic|
|» capture_mode|manual|

> Example responses

> 200 Response

```json
{
  "id": "651a941a-02ef-af6f-9b6c-458c652e2c6a",
  "token": "0aa685ee-8d86-441d-bedd-3f7fbf41731b",
  "type": "payment",
  "state": "pending",
  "created_at": "2023-10-02T09:57:46.498026Z",
  "updated_at": "2023-10-02T11:54:46.648414Z",
  "amount": 1000,
  "currency": "EUR",
  "outstanding_amount": 1000,
  "settlement_currency": "GBP",
  "capture_mode": "manual",
  "cancel_authorised_after": "P3D",
  "checkout_url": "https://checkout.revolut.com/payment-link/0aa685ee-8d86-441d-bedd-3f7fbf41731b",
  "metadata": {
    "example_key": "example_value"
  },
  "enforce_challenge": "automatic",
  "merchant_order_data": {
    "url": "https://example.com/orders/12345"
  },
  "statement_descriptor_suffix": "12345"
}
```

> 400 Response

```json
{
  "code": "bad_request",
  "message": "Could not parse JSON",
  "timestamp": 1721049596461
}
```

> 401 Response

```json
{
  "code": "unauthenticated",
  "message": "Authentication failed",
  "timestamp": 1721049596461
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Order with id abfa5bbd-a20c-4a0e-be66-30e733454518 was not found",
  "timestamp": 1721050063886
}
```

> 422 Response

```json
{
  "code": "order_invalid_state",
  "message": "Operation cannot be performed because order is in completed state and expected is [pending]",
  "timestamp": 1721049952145
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="update-an-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Order updated|[Order-v4](#schemaorder-v4)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable Entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Increment authorisation

<a id="opIdincrementOrderAuthorisation"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/orders/497f6eca-6276-4993-bfeb-53cbbbba6f08/increment-authorisation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17' \
  -d '{
    "amount": 600
  }'
```

`POST /api/orders/{order_id}/increment-authorisation`

Increase the authorised amount on a pre-authorised order.

This operation allows you to increment the authorised amount for orders created with `authorisation_type: pre_authorisation` and `capture_mode: manual`.

:::note
Currently, only card payments are supported.
:::

### Common use-cases

- Hotel additional charges (e.g., minibar, room service)
- Car rental damage or fuel charges
- Equipment rental extensions

### How it works

1. Create an order with `capture_mode: manual` and `authorisation_type: pre_authorisation`
1. Take payment using one of our card payment solutions
1. When payment/order reaches `authorised` state, you can increment authorised amount
1. When no more increments are expected, [capture the order](https://developer.revolut.com/docs/api/merchant/2024-09-01#capture-order) to complete the transaction

:::warning
- Can only increment orders in `authorised` state
- Must have `authorisation_type: pre_authorisation` and `capture_mode: manual`
- Sum of all increment amounts cannot exceed 5x the initial amount
- Maximum 10 increments per order
- Process increments sequentially to avoid declines
- Currently only supported for card payments
:::

:::info
For more information, see: [Incremental authorisation guide](https://developer.revolut.com/docs/guides/merchant/operations/capture-and-settlement/advanced-authorisation/incremental-authorisation)
:::

> Body parameter

```json
{
  "amount": 600
}
```

<h3 id="increment-authorisation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|order_id|path|string(uuid)|true|The ID of the `Order` object.|
|body|body|[Incremental-Authorisation-Request](#schemaincremental-authorisation-request)|true|none|
|» amount|body|[Increment-Amount](#schemaincrement-amount)|true|The new total amount to be authorised (in minor units, e.g., cents).<br><br>This should be the **full new amount**, not the increment value.<br>For example, if the current authorised amount is `500` and you want to add 100, pass `600`.<br><br>:::warning<br>- Must be greater than or equal to the current authorised amount (incrementing with same amount allowed to extend capture deadline for Mastercard)<br>- The sum of all increment amounts cannot exceed 5x the initial authorised amount (e.g., initial amount £100 allows up to £500 in total increments)<br>:::|
|» reference|body|[Increment-Reference](#schemaincrement-reference)|false|External reference for this incremental authorisation.<br><br>:::tip<br>Use your internal charge or invoice ID. This reference is returned in webhooks for easy matching to your system.<br>:::|
|» line_items|body|[Line-Items](#schemaline-items)|false|An array of line items included in the order. Each line item represents an individual product or service, along with its quantity, price, taxes, and discounts.<br><br>:::info<br>Required for merchants collecting payment for one or multiple products/services in one transaction. Omitting this information may trigger additional scrutiny and risk mitigation actions by Revolut.<br>:::|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "id": "6920869a-8d8d-aefd-a3c3-8fe4690e4323",
  "token": "0823794d-28e9-4fdd-a130-3293ff9dd57b",
  "type": "payment",
  "state": "processing",
  "created_at": "2025-11-21T15:34:50.351537Z",
  "updated_at": "2025-11-21T15:35:12.123456Z",
  "amount": 500,
  "currency": "EUR",
  "outstanding_amount": 500,
  "capture_mode": "manual",
  "authorisation_type": "pre_authorisation",
  "incremental_authorisations": [
    {
      "new_amount": 600,
      "old_amount": 500,
      "state": "processing",
      "reference": "1263738"
    }
  ],
  "payments": [
    {
      "id": "696a4ce4-2aaf-a008-9f26-f47cf8ab1678",
      "state": "authorisation_started",
      "created_at": "2025-11-21T15:34:50.474085Z",
      "updated_at": "2025-11-21T15:35:12.300608Z",
      "token": "928f25b1-121c-4669-ab9f-d0b7a5804576",
      "amount": 600,
      "authorised_amount": 500,
      "currency": "EUR",
      "settled_amount": 500,
      "settled_currency": "EUR",
      "billing_address": {
        "country_code": "US",
        "postcode": "94102"
      },
      "risk_level": "low",
      "fees": [],
      "payer": {
        "email": "example.payer@example.com",
        "phone": "+447911123456"
      },
      "payment_method": {
        "type": "card",
        "card_brand": "visa",
        "funding": "debit",
        "commercial": false,
        "card_country_code": "US",
        "card_bin": "424242",
        "card_last_four": "4242",
        "card_expiry": "12/35",
        "cardholder_name": "Example Customer",
        "checks": {
          "three_ds": {
            "eci": "05",
            "state": "verified",
            "version": 2
          },
          "cvv_verification": "not_processed",
          "address": "n_a",
          "postcode": "n_a",
          "cardholder": "n_a"
        },
        "fingerprint": "aadDmPDArelhtk5QK3zqccaPi39zEDp6/uKuUsA9LHE=",
        "network_transaction_id": "1234567890123456",
        "authorisation_code": "100000",
        "arn": "12345678912345678912345",
        "capture_deadline": "2025-11-28T15:34:50.513Z"
      }
    }
  ],
  "checkout_url": "https://checkout.revolut.com/payment-link/0823794d-28e9-4fdd-a130-3293ff9dd57b",
  "enforce_challenge": "automatic"
}
```

> 400 Response

```json
{
  "code": "validation",
  "message": "New amount: 3 should be greater or equal to order amount: 500",
  "timestamp": 1768397646286
}
```

> 401 Response

```json
{
  "code": "unauthenticated",
  "message": "Authentication failed",
  "timestamp": 1721049596461
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Order not found",
  "timestamp": 1768397646286
}
```

> 422 Response

```json
{
  "code": "bad_state",
  "message": "No authorised card not present payment found for order 69732536-0379-a2e2-8983-15e7184f8fc6.",
  "timestamp": 1768397646286
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="increment-authorisation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Authorization increment initiated successfully|[Order-v4](#schemaorder-v4)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Order not found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable Entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Capture an order

<a id="opIdcaptureOrder"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/orders/497f6eca-6276-4993-bfeb-53cbbbba6f08/capture \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17' \
  -d '{
    "amount": 100
  }'
```

`POST /api/orders/{order_id}/capture`

This endpoint is used to capture the funds of an existing, uncaptured order. When the payment for an order is authorised, you can capture the order to send it to the processing stage.

:::info
For more information about the order and payment lifecycle, see: [Order and payment
lifecycle](https://developer.revolut.com/docs/guides/merchant/reference/order-lifecycle).
:::

## Capture modes

When you [create an order](https://developer.revolut.com/docs/api/merchant/2024-09-01#create-order), you can choose one of the following capture modes:

  | **Capture mode** | **Description** |
  | ---------------- | --------------- |
  | `automatic` | The order is captured automatically after payment authorisation. No further actions are needed. |
  | `manual` | The order is not captured automatically and stays in `authorised` state. You must manually capture the order using the steps outlined below. |

:::warning
By default, uncaptured orders with **final authorisation** (`authorisation_type: final`) remain in `authorised` state for **7 days**. If not captured within this period, the funds are returned to the customer's original payment method.

The capture deadline can be customised:
- Use `cancel_authorised_after` parameter when creating an order to set a custom expiry period
- The effective deadline is the earlier of `cancel_authorised_after` and the card/network clearing window
- `capture_deadline` is set when the order becomes `authorised` and doesn't change afterwards
- Use **pre-authorisation** (`authorisation_type: pre_authorisation`) for extended clearing windows (up to 30 days) and incremental authorisation support (see tip below)
:::

:::tip [Extended clearing windows]
If your business requires longer authorisation hold periods (up to 30 days depending on card scheme and MCC), use [pre-authorisation](https://developer.revolut.com/docs/guides/merchant/operations/capture-and-settlement/advanced-authorisation/pre-authorisation) instead of standard authorisation. Pre-authorisation also supports [incremental authorisation](https://developer.revolut.com/docs/guides/merchant/operations/capture-and-settlement/advanced-authorisation/incremental-authorisation) for variable-amount scenarios.
:::

### Manual capture
  
To capture an order manually, use one of the following methods:
  
| **Web UI** | **Merchant API** |
| ---------- | ------------ |
| <ol><li>Log in to your [Revolut Business portal](https://business.revolut.com).</li><li>Navigate to the **Merchant** tab on the dashboard, and click the **See all** button in the **Transactions** section.</li><li>Select an uncaptured payment, and click **Capture**.</li></ol> | Use the `/capture` endpoint. |

:::info
For more information about manually capturing an order, see: [Authorise an amount to capture
later](https://developer.revolut.com/docs/guides/merchant/operations/capture-and-settlement/capture-later).
:::

#### Partial capture

You have the option to capture only a fraction of the full amount. In such cases, the uncaptured portion of the amount will be voided.

:::warning
The following limitations apply to manual captures:
  - An order can only be captured once
  - Captured amount can't exceed the authorised amount
  - On Web UI, only capturing full amount is possible
  - `0` amount captures are not allowed
  - For partial captures, you can only resend the request with the initial amount
:::

#### Updating line items at capture

You can optionally provide `line_items` when capturing an order. This allows you to adjust the final order details at the time of capture, which is useful for scenarios such as:
- **Partial captures:** Specify which items are being captured when capturing less than the full amount. Line items help accurately reflect which items were captured versus voided (see [Partial capture](#partial-capture) above).
- **Final adjustments:** Update order details when the delivered items differ from the initial authorisation (e.g., out-of-stock items, substitutions, quantity changes).

:::warning
If you provide `line_items` when capturing, they will **overwrite** the original line items provided during order creation or update. Ensure you include all items you want associated with the captured order.
:::

:::info
For a comprehensive guide including use cases and examples, see: [Authorise a payment to capture later](https://developer.revolut.com/docs/guides/merchant/operations/capture-and-settlement/capture-later#update-line-items-at-capture).
:::

## Idempotency and repeated requests

The capture operation is idempotent. This means that an order can only be captured once. If you send a capture request more than once:

- The first valid request captures the order and moves it to the processing stage.
- Any subsequent request with the same capture amount will not recapture funds and behaves like a [Retrieve an order](https://developer.revolut.com/docs/api/merchant/2024-09-01#retrieve-order) request, returning the current order state.
- A subsequent request with a different capture amount returns an error.

:::info
Utilising the idempotent nature of this endpoint helps maintain data consistency and prevents duplicate processing of the same order.
:::

> Body parameter

```json
{
  "amount": 100
}
```

<h3 id="capture-an-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|order_id|path|string(uuid)|true|The ID of the `Order` object.|
|body|body|[Order-Capture-v2](#schemaorder-capture-v2)|false|none|
|» amount|body|[Order-Capture-Amount](#schemaorder-capture-amount)|false|Specify an amount to capture, in minor currency units. The amount must not exceed the authorised amount.<br><br>An order can only be captured once. Partial capture is supported by sending an amount lower than the authorised amount. The uncaptured amount will be voided.<br><br>If you resend a capture request for an order that is already captured, no additional capture is performed. Resending with the same amount returns the current order state, while resending with a different amount returns an error.<br><br>If not provided, it defaults to the authorised amount (full capture will be executed).|
|» line_items|body|[Line-Items](#schemaline-items)|false|An array of line items included in the order. Each line item represents an individual product or service, along with its quantity, price, taxes, and discounts.<br><br>:::info<br>Required for merchants collecting payment for one or multiple products/services in one transaction. Omitting this information may trigger additional scrutiny and risk mitigation actions by Revolut.<br>:::|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "id": "65c4c739-113d-a608-9128-47c7ca90cbe3",
  "token": "ebc06202-061e-4d0f-8063-99195fad31fb",
  "type": "payment",
  "state": "completed",
  "created_at": "2024-02-08T12:21:13.022871Z",
  "updated_at": "2024-02-08T12:21:52.194601Z",
  "amount": 100,
  "currency": "GBP",
  "refunded_amount": 0,
  "outstanding_amount": 0,
  "capture_mode": "manual",
  "payments": [
    {
      "id": "65c4c748-bf0d-af8a-9d69-0fc92bc0ff94",
      "state": "captured",
      "created_at": "2024-02-08T12:21:28.803165Z",
      "updated_at": "2024-02-08T12:21:52.191352Z",
      "token": "74af5a2b-6722-4353-aaf1-cd5926883b60",
      "amount": 100,
      "currency": "GBP",
      "settled_amount": 100,
      "settled_currency": "GBP",
      "billing_address": {
        "country_code": "US",
        "postcode": "12345"
      },
      "risk_level": "low",
      "fees": [],
      "payer": {
        "email": "example.payer@example.com",
        "phone": "+447911123456"
      },
      "payment_method": {
        "type": "revolut_pay_card",
        "card_brand": "visa",
        "funding": "debit",
        "commercial": false,
        "card_country_code": "US",
        "card_bin": "529999",
        "card_last_four": "0368",
        "card_expiry": "12/28",
        "cardholder_name": "Test Holder",
        "checks": {
          "three_ds": {
            "state": "verified",
            "version": 2
          }
        },
        "enforce_challenge": "automatic",
        "fingerprint": "1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=",
        "network_transaction_id": "1234567890123456"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": "bad_request",
  "message": "Could not parse JSON",
  "timestamp": 1601296792533
}
```

> 401 Response

```json
{
  "code": "unauthenticated",
  "message": "Authentication failed",
  "timestamp": 1721049596461
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Order with id abfa5bbd-a20c-4a0e-be66-30e733454518 was not found",
  "timestamp": 1721050063886
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="capture-an-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Order captured|[Order-v4](#schemaorder-v4)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Cancel an order

<a id="opIdcancelOrder"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/orders/497f6eca-6276-4993-bfeb-53cbbbba6f08/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/orders/{order_id}/cancel`

Cancel an existing uncaptured order.

You can only cancel an order that is in one of the following states:
  
  | Order state | Description |
  | ----------- | ----------- |
  | `pending` | The order does not have any successful payment. |
  | `authorised` | The `capture_mode` of an order is set to `manual` and the customer has made a successful payment. |

:::info
For more information about the order lifecycle, see: [Order and payment lifecycle](https://developer.revolut.com/docs/guides/merchant/reference/order-lifecycle).
:::

<h3 id="cancel-an-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|false|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|order_id|path|string(uuid)|true|The ID of the `Order` object.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "id": "6516f565-c903-ae7d-8582-0bc70468ec29",
  "token": "579462b3-da89-4a46-8690-572d3968573f",
  "type": "payment",
  "state": "cancelled",
  "created_at": "2023-09-29T16:03:49.569437Z",
  "updated_at": "2023-09-29T16:04:30.727004Z",
  "amount": 500,
  "currency": "GBP",
  "refunded_amount": 0,
  "outstanding_amount": 0,
  "capture_mode": "automatic",
  "authorisation_type": "final",
  "enforce_challenge": "automatic"
}
```

> 400 Response

```json
{
  "code": "bad_request",
  "message": "Could not parse JSON",
  "timestamp": 1601296792533
}
```

> 401 Response

```json
{
  "code": "unauthenticated",
  "message": "Authentication failed",
  "timestamp": 1721049596461
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Order with id abfa5bbd-a20c-4a0e-be66-30e733454518 was not found",
  "timestamp": 1721050063886
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="cancel-an-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Order-v4](#schemaorder-v4)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Refund an order

<a id="opIdrefundOrder"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/orders/497f6eca-6276-4993-bfeb-53cbbbba6f08/refund \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17' \
  -d '{
    "amount": 100,
    "currency": "GBP"
  }'
```

`POST /api/orders/{order_id}/refund`

Issue a refund for a completed order. This operation allows for either a full or partial refund, which will be processed back to the customer's original payment method.

- The refund operation generates a new order with `type: refund`. This new order represents a full or partial refund of the original amount paid.
- Multiple partial refunds can be issued for a single order, given the total refunded amount does not exceed the original order amount.
- Refund orders will contain `related_order_id` which links to the original order that was refunded.
- Refunds can only be initiated for orders that are in a `completed` state. Orders in any other state are not eligible for refunds to ensure transaction integrity and to prevent errors.
- Refunds are processed asynchronously: the refund order can take up to 2 days to reach a final state (`completed`, or declined/failed). Monitor the refund order — via webhooks or [Retrieve an order](https://developer.revolut.com/docs/api/merchant#retrieve-order) — for at least that window before finalising the refund on your side.

:::note
Consider using the `Idempotency-Key` header to make the refund operation idempotent, preventing duplicate refund processing in cases of multiple submissions.
:::

:::info
For more information see our [Refund payments](https://developer.revolut.com/docs/guides/merchant/operations/refunds) guide.
:::

> Body parameter

```json
{
  "amount": 100,
  "currency": "GBP"
}
```

<h3 id="refund-an-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|Idempotency-Key|header|string|false|The `Idempotency-Key` ensures that requests are processed only once, preventing multiple executions of the same operation due to retries or duplicate requests.<br><br>This header is optional and can accept any unique string value the merchant uses.<br><br>A recommended practice is to use a unique identifier from your system (such as the entity's ID or a request UUID) as the idempotency key. This facilitates tracking and managing requests effectively.|
|order_id|path|string(uuid)|true|The ID of the `Order` object.|
|body|body|[Order-Refund-v2](#schemaorder-refund-v2)|false|none|
|» amount|body|[Refund-Amount](#schemarefund-amount)|true|The amount to be refunded, specified in the smallest currency unit (e.g., cents for USD, pence for GBP).|
|» currency|body|[Refund-Currency](#schemarefund-currency)|true|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>**Must match the `currency` of the original order to be refunded.**<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|» merchant_order_data|body|object|false|Object for providing additional information stored in the merchant's order management system.|
|» » reference|body|[Merchant-Order-External-Reference](#schemamerchant-order-external-reference)|false|Merchant order ID for external reference.<br><br>Use this field to set the ID that your own system can use to easily track orders.|
|» metadata|body|[Metadata](#schemametadata)|false|Additional information to track your orders in your system, by providing custom metadata using `"<key>" : "<value>"` pairs.<br><br>:::warning<br>**Restrictions:**<br><br>- Both keys and values must be `string`s<br>- Values cannot be `null`.<br>- Max number of key-value pairs: `50`<br>- Max length of values: `500` characters<br>- Format of keys: Must start with a letter and contain only letters, digits, and underscores. Max 40 characters. Pattern: `^[a-zA-Z][a-zA-Z\\d_]{0,39}$`<br>:::|
|» description|body|string|false|An optional, user-facing description for the refund. This may be displayed to the customer.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 201 Response

```json
{
  "id": "6852e9a6-5cf0-ac65-8182-6a9c251011ce",
  "type": "refund",
  "state": "processing",
  "created_at": "2025-06-18T16:30:30.792962Z",
  "updated_at": "2025-06-18T16:30:30.954966Z",
  "amount": 100,
  "currency": "GBP",
  "outstanding_amount": 100,
  "capture_mode": "automatic",
  "authorisation_type": "final",
  "payments": [
    {
      "id": "6852e9a6-ca77-a25d-b0be-83191db96e68",
      "state": "refund_validated",
      "created_at": "2025-06-18T16:30:30.821411Z",
      "updated_at": "2025-06-18T16:30:31.391153Z",
      "amount": 100,
      "currency": "GBP",
      "settled_amount": -100,
      "settled_currency": "GBP",
      "billing_address": {
        "country_code": "GB",
        "postcode": "E14 4HD"
      },
      "risk_level": "low",
      "fees": [],
      "payer": {
        "email": "example.payer@example.com",
        "phone": "+447911123456"
      },
      "payment_method": {
        "type": "card",
        "fingerprint": "1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=",
        "network_transaction_id": "1234567890123456",
        "card_brand": "visa",
        "funding": "credit",
        "commercial": false,
        "card_country_code": "GB",
        "card_bin": "123456",
        "card_last_four": "1234",
        "card_expiry": "12/33",
        "cardholder_name": "Example Holder"
      }
    }
  ],
  "enforce_challenge": "automatic",
  "related_order_id": "6852e963-d6a9-a5a4-9609-50b3addc5425"
}
```

> 400 Response

```json
{
  "code": "bad_request",
  "message": "Could not parse JSON",
  "timestamp": 1750265245422
}
```

> 401 Response

```json
{
  "code": "unauthenticated",
  "message": "Authentication failed",
  "timestamp": 1750265245422
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Order with id 6852e963-0009-a5a4-9609-50b3addc5425 was not found",
  "timestamp": 1750265369820
}
```

> 409 Response

```json
{
  "code": "conflict",
  "message": "The request conflicts with the current state of the resource",
  "timestamp": 1721050000000
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="refund-an-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Refund order successfully created|[Order-v4](#schemaorder-v4)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|409|Conflict|Conflict|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable Entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Retrieve payment list of an order

<a id="opIdretrievePaymentList"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/orders/497f6eca-6276-4993-bfeb-53cbbbba6f08/payments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/orders/{order_id}/payments`

Retrieve a list of payments for a specific order, based on the order's ID.

:::note
This endpoint is part of a new API, pay attention to the different endpoint URL.
:::

Use this endpoint to retrieve payment details for saved payment methods to make merchant and customer initiated transactions. For more information, see: 
  - [Speed up customer checkout by using saved card details](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/save-payment-methods/checkout-with-saved-card)
  - [Manage subscriptions](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/save-payment-methods/subscription-management)

<h3 id="retrieve-payment-list-of-an-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|order_id|path|string(uuid)|true|The ID of the `Order` object.|

> Example responses

> 200 Response

```json
[
  {
    "id": "63dd0e4a-42c4-a1a6-ab2c-6ac9d255ca4b",
    "token": "294358bf-3818-49b2-aacc-7ca971f52695",
    "order_id": "63dd0e3f-7b84-ab5c-927c-1a06f7c9583a",
    "state": "declined",
    "amount": 100,
    "currency": "EUR",
    "payment_method": {
      "type": "card",
      "card_brand": "visa",
      "funding": "credit",
      "card_last_four": "1234"
    }
  },
  {
    "id": "649adc44-3e86-a832-879c-2f6d0255dd4c",
    "token": "8061e645-35e0-42bb-8318-603abaeab7b7",
    "order_id": "63dd0e3f-7b84-ab5c-927c-1a06f7c9583a",
    "state": "declined",
    "amount": 100,
    "currency": "EUR",
    "decline_reason": "insufficient_funds",
    "payment_method": {
      "type": "revolut_pay",
      "subtype": "revolut_account"
    }
  },
  {
    "id": "663387f1-1c2e-a295-b143-9f1fb1eec175",
    "token": "663387f1-c91e-a464-908a-1cc4548ebc6a",
    "order_id": "63dd0e3f-7b84-ab5c-927c-1a06f7c9583a",
    "state": "pending",
    "amount": 100,
    "currency": "EUR",
    "payment_method": {
      "type": "sepa_direct_debit",
      "debtor_iban_last_four": "1234",
      "debtor_name": "John Doe",
      "mandate_reference": "A1B2C3D4E5F6A1B2C3D4E5F6A1B2C3D4"
    }
  }
]
```

> 400 Response

```json
{
  "code": "bad_request",
  "message": "Could not parse JSON",
  "timestamp": 1720528890647
}
```

> 401 Response

```json
{
  "code": "unauthenticated",
  "message": "Authentication failed",
  "timestamp": 1720528890647
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Order with id b8883ab5-964a-4329-aa44-4d3c76cf3f54 was not found",
  "timestamp": 1720528890647
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-payment-list-of-an-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of payments|Inline|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthenticated|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<h3 id="retrieve-payment-list-of-an-order-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Payment-Retrieval](#schemapayment-retrieval)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Pay for an order

<a id="opIdpayOrder"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/orders/497f6eca-6276-4993-bfeb-53cbbbba6f08/payments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "saved_payment_method": {
      "type": "card",
      "id": "2b83c23a-650e-40c3-8989-00ee24478738",
      "initiator": "customer",
      "environment": {
        "type": "browser",
        "time_zone_utc_offset": 180,
        "color_depth": 48,
        "screen_width": 1920,
        "screen_height": 1080,
        "java_enabled": true,
        "challenge_window_width": 640,
        "browser_url": "https://business.revolut.com"
      }
    }
  }'
```

`POST /api/orders/{order_id}/payments`

Initiate a payment to pay full amount for an order using a customer's saved payment method.

:::note
The `/orders/{order_id}/confirm` endpoint has been deprecated. It will be only supported for already existing implementations.
:::

:::warning
This endpoint is part of a new API, pay attention to the different endpoint URL. 
:::

For more information about how to save and charge payment methods, see: [Charge a customer's saved payment method](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/save-payment-methods/charge-saved-payment-method).

The following table shows who can initiate payments on saved payment methods (`initiator` parameter), depending on if the payment method was saved for the customer or the merchant (`savedPaymentMethodFor` parameter):

  |                           | `savePaymentMethodFor: customer` | `savePaymentMethodFor: merchant` |
  | ------------------------- | -------------------------------- | -------------------------------- |
  | **`initiator: customer`** | Allowed                          | Allowed                          |
  | **`initiator: merchant`** | Not allowed                      | Allowed                          |


:::note
Using this endpoint, only merchant initiated payments are supported with Revolut Pay.
:::
          
For more information about customers' payment methods, see the [Retrieve payment method list of a customer](https://developer.revolut.com/docs/api/merchant#retrieve-payment-method-list) operation.

> Body parameter

```json
{
  "saved_payment_method": {
    "type": "card",
    "id": "2b83c23a-650e-40c3-8989-00ee24478738",
    "initiator": "customer",
    "environment": {
      "type": "browser",
      "time_zone_utc_offset": 180,
      "color_depth": 48,
      "screen_width": 1920,
      "screen_height": 1080,
      "java_enabled": true,
      "challenge_window_width": 640,
      "browser_url": "https://business.revolut.com"
    }
  }
}
```

<h3 id="pay-for-an-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|order_id|path|string(uuid)|true|The ID of the `Order` object.|
|body|body|[Saved-Payment-Method](#schemasaved-payment-method)|false|none|
|» saved_payment_method|body|object|true|Object containing information about the saved payment method used to pay for the order.|
|» » type|body|string|true|Type of saved payment method.|
|» » id|body|string|true|Saved payment method ID.|
|» » initiator|body|string|true|Indicates who is allowed to initiate the payment. <br><br>:::note<br>Using this endpoint, only merchant initiated payments are supported with Revolut Pay.<br>:::|
|» » environment|body|[Environment](#schemaenvironment)|true|Environment object, indicating in which environment the payment was made.<br><br>:::warning<br>Only required if `initiator: customer`.<br>:::<br><br>:::note<br>Only `browser` is available at the moment.<br>:::|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|card|
|» » type|revolut_pay|
|» » initiator|customer|
|» » initiator|merchant|

> Example responses

> 200 Response

```json
{
  "id": "63c55e04-4208-a43d-9c96-eaee848ffbaf",
  "order_id": "63c55df6-1461-a886-b90f-f49d3c370253",
  "payment_method": {
    "type": "card",
    "id": "2b83c23a-650e-40c3-8989-00ee24478738",
    "brand": "mastercard_credit",
    "last_four": "1234"
  },
  "state": "authorisation_passed"
}
```

> 400 Response

```json
{
  "errorId": "94b27660-fdda-49ec-8b85-cd46a068ade0",
  "timestamp": 1601296792533
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "errorId": "94b27660-fdda-49ec-8b85-cd46a068ade0",
  "timestamp": 1601296792533,
  "code": 1024
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="pay-for-an-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payment initiated|[Payment-Retrieval](#schemapayment-retrieval)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<h3 id="pay-for-an-order-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorId|string|false|none|The ID of the error. You can share this ID with Revolut<br>support for troubleshooting.|
|timestamp|integer|false|none|The date and time the error happened.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorId|string|false|none|The ID of the error. You can share this ID with Revolut<br>support for troubleshooting.|
|timestamp|integer|false|none|The date and time the error happened.|
|code|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

<h1 id="merchant-api-customers">Customers</h1>

The Customers resource in the Merchant API is a pivotal tool for tracking and managing customer-related transactions within your e-commerce or retail platform. This resource provides a structured approach to customer management, enabling you to maintain a consistent record of customer transactions.

A `Customer` object can be created using the [Create a customer](https://developer.revolut.com/docs/api/merchant/2024-09-01#create-customer) endpoint and you can then retrieve, update and delete a customer using its `id`. `Customer` objects enable you to track multiple transactions in your system associated with the same customer in the Merchant API.

You can save and store payment methods of a customer in the `payment_method` object, for more information, see: [Charge a customer's saved payment method](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/save-payment-methods/charge-saved-payment-method). A merchant can store the details of the payment securely and group transactions from the same payment method in their system. 

A payment method is unique for each customer. For example, if the same card is used for a transaction by two different customers, two payment method objects are created linked to each customer.

Similar principle applies when saving payment methods via Revolut Pay for merchant initiated transaction (MIT - useful for recurring payments). If a customer saves their details through Revolut Pay for MIT in separate sessions, each session will create a new payment method object linked to the customer.

:::note
You cannot create a payment method explicitly because they are generated as part of a payment. You can only retrieve, update or delete a payment method, or you can retrieve all payment methods of a customer.
:::

## Retrieve a customer list

<a id="opIdretrieveCustomerList"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/customers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`GET /api/customers`

Get a paginated list of your customer profiles.

| Filtering | Pagination |
| --------- | ---------- |
| Filter the customers that you want to retrieve, for example, only retrieve customers created within a specific date range. <br/><br/>Parameters used for filtering:<br/><ul><li>`from`</li><li>`to`</li></ul> | View customers without loading all of them at once, for example, return a specified number of customers per page. <br/><br/>Parameters used for pagination:<br/><ul><li>`limit`</li><li>`page_token`</li></ul> |

To paginate through all results:

1. Make an initial request with the desired `limit` and any filter parameters.
1. If more results are available, the response includes a `next_page_token`.
1. Pass `next_page_token` as `page_token` in your next request, keeping all other parameters unchanged.
1. Repeat until `next_page_token` is no longer present in the response.

<h3 id="retrieve-a-customer-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Maximum number of records to return. Used for **pagination**.|
|page_token|query|string|false|Token for retrieving the next page of results. Used for **pagination**.<br><br>To paginate through results:<br><br>  1. Make an initial request with the desired `limit`.<br>  1. The response will include a `next_page_token` if more results are available.<br>  1. Use that token in the `page_token` parameter of your next request.<br>  1. Repeat until `next_page_token` is not present.<br><br>:::note<br>When using `page_token`, you must include all query parameters from the initial request (such as `from`, `to`, or other filter parameters) to maintain consistent filtering across pages.<br>:::|
|from|query|string(date-time)|false|Filter records created from this date/time. Used for **filtering**.|
|to|query|string(date-time)|false|Filter records created until this date/time. Used for **filtering**.|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>This endpoint is available from version `2024-09-01`. If a version earlier than `2024-09-01` is provided, the endpoint returns a `404` response.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "next_page_token": "9e5d2caa-bb60-4b5b-b7cf-6345bbdff67e",
  "customers": [
    {
      "id": "9dfb8491-bfb0-4420-ad63-0fa7bdd3dffb",
      "full_name": "First Customer",
      "email": "first.customer@example.com",
      "created_at": "2020-06-24T12:12:56.596703Z",
      "updated_at": "2020-06-24T12:12:56.737082Z"
    },
    {
      "id": "6c7c97a8-cfc1-4cf3-8b38-26a74fdf1fae",
      "full_name": "Second Customer",
      "email": "second.customer@example.com",
      "phone": "+441234567890",
      "created_at": "2020-06-24T12:03:39.979397Z",
      "updated_at": "2020-06-25T10:03:39.134417Z"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-a-customer-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Customers](#schemacustomers)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Create a customer

<a id="opIdcreateCustomer"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/customers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17' \
  -d '{
    "full_name": "Example Customer",
    "email": "example.customer@example.com",
    "phone": "+441234567890",
    "date_of_birth": "1990-01-01"
  }'
```

`POST /api/customers`

Create a `customer` object.

:::note [No automatic deduplication]
The API does not prevent creating multiple customers with the same email address or phone number.

This can be intentional, for example, to maintain separate customer records per storefront or brand under the same account.

To avoid unintentional duplicates, search for existing customers by email or phone using the [List customers](https://developer.revolut.com/docs/api/merchant/2024-09-01#retrieve-customer-list) endpoint before creating a new one.
:::

### Save payment methods

If you wish to save a customer's payment details using any of the available payment methods on the Revolut Checkout Widget ([Revolut Pay](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/revolut-pay/introduction), [Card payments](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/card-payments/introduction)), you need to meet one of the following requirements:

  - [ ] Have a customer object with `email` and assign it to the order by providing `customer.id`
  - [ ] Create a new customer with, at least, `customer.email` during [order creation](https://developer.revolut.com/docs/api/merchant/2024-09-01#create-order)

For more information, see: [Charge a customer's saved payment method](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/save-payment-methods/charge-saved-payment-method).

<details>
<summary>AFT processing requirements</summary>

For merchants in the following industries, `full_name` and `date_of_birth` are required for Account Funding Transaction (AFT) processing:

| Industry | Required fields |
| -------- | --------------- |
| Crypto | `full_name`, `date_of_birth` |
| Financial Institutions | `full_name`, `date_of_birth` |
| Stored Value / Wallets | `full_name`, `date_of_birth` |

</details>

> Body parameter

```json
{
  "full_name": "Example Customer",
  "email": "example.customer@example.com",
  "phone": "+441234567890",
  "date_of_birth": "1990-01-01"
}
```

<h3 id="create-a-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>This endpoint is available from version `2024-09-01`. If a version earlier than `2024-09-01` is provided, the endpoint returns a `404` response.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|body|body|[Customer-Creation-v2](#schemacustomer-creation-v2)|false|none|
|» full_name|body|[Full-Name](#schemafull-name)|false|The full name of the customer.|
|» email|body|[Email](#schemaemail)|true|The email address of the customer.|
|» phone|body|[Phone](#schemaphone)|false|The phone number of the customer in [E.164 format](https://en.wikipedia.org/wiki/E.164).|
|» date_of_birth|body|[Date-Of-Birth](#schemadate-of-birth)|false|The birth date of the customer.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 201 Response

```json
{
  "id": "6c7c97a8-cfc1-4cf3-8b38-26a74fdf1fae",
  "full_name": "Example Customer",
  "email": "example.customer@example.com",
  "phone": "+441234567890",
  "created_at": "2020-06-24T12:03:39.979397Z",
  "updated_at": "2020-06-24T12:03:39.979397Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="create-a-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[Customer-Created](#schemacustomer-created)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Retrieve a customer

<a id="opIdretrieveCustomer"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/customers/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`GET /api/customers/{customer_id}`

Get the information about a specific customer, including their saved payment methods.

<h3 id="retrieve-a-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>This endpoint is available from version `2024-09-01`. If a version earlier than `2024-09-01` is provided, the endpoint returns a `404` response.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|customer_id|path|string(uuid)|true|The ID of the `Customer` object.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "id": "6c7c97a8-cfc1-4cf3-8b38-26a74fdf1fae",
  "full_name": "Example Customer",
  "email": "example.customer@example.com",
  "phone": "+441234567890",
  "created_at": "2020-06-24T12:03:39.979397Z",
  "updated_at": "2020-06-25T10:03:39.134417Z",
  "payment_methods": [
    {
      "id": "648334a8-9546-a983-a81a-efc6d5bdd0be",
      "type": "revolut_pay",
      "saved_for": "merchant",
      "created_at": "2023-06-09T14:18:16.577888Z"
    },
    {
      "id": "edef3ba4-60a0-4df3-8f12-e5fc858c2420",
      "type": "card",
      "saved_for": "customer",
      "created_at": "2023-03-24T14:15:22Z",
      "bin": "459765",
      "last_four": "6578",
      "expiry_month": 2,
      "expiry_year": 2025,
      "cardholder_name": "Example Customer",
      "brand": "visa",
      "funding": "debit",
      "issuer": "EXAMPLE ISSUER",
      "issuer_country": "GB",
      "billing_address": {
        "street_line_1": "7 Westferry Circus",
        "street_line_2": "Columbus Building",
        "postcode": "E144HD",
        "city": "London",
        "region": "Greater London",
        "country_code": "GB"
      }
    },
    {
      "id": "6a0fe961-a961-a8b6-ad17-ab2779165a82",
      "type": "sepa_direct_debit",
      "saved_for": "merchant",
      "created_at": "2026-05-22T05:28:01.887482Z",
      "debtor_iban_last_four": "3273",
      "debtor_name": "John Doe",
      "mandate_reference": "69F1CB61BD99A32C8E20D7FB9E21E146",
      "billing_address": {
        "street_line_1": "Bank of England",
        "street_line_2": "Threadneedle St",
        "postcode": "EC2R 8AH",
        "city": "London",
        "region": "Greater London",
        "country_code": "GB"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-a-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Customer-v3](#schemacustomer-v3)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Delete a customer

<a id="opIddeleteCustomer"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/customers/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`DELETE /api/customers/{customer_id}`

Delete the profile of a specific customer.

<h3 id="delete-a-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>This endpoint is available from version `2024-09-01`. If a version earlier than `2024-09-01` is provided, the endpoint returns a `404` response.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|customer_id|path|string(uuid)|true|The ID of the `Customer` object.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 400 Response

```json
{
  "code": "bad_request",
  "message": "Invalid request",
  "timestamp": 1721050000000
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="delete-a-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Update a customer

<a id="opIdupdateCustomer"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/customers/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17' \
  -d '{
    "email": "updated.customer@example.com"
  }'
```

`PATCH /api/customers/{customer_id}`

Update the attributes of a specific customer.

All request body fields are optional. Only the fields provided will be updated.

<details>
<summary>AFT processing requirements</summary>

For merchants in the following industries, `full_name` and `date_of_birth` are required for Account Funding Transaction (AFT) processing:

| Industry | Required fields |
| -------- | --------------- |
| Crypto | `full_name`, `date_of_birth` |
| Financial Institutions | `full_name`, `date_of_birth` |
| Stored Value / Wallets | `full_name`, `date_of_birth` |

</details>

> Body parameter

```json
{
  "email": "updated.customer@example.com"
}
```

<h3 id="update-a-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>This endpoint is available from version `2024-09-01`. If a version earlier than `2024-09-01` is provided, the endpoint returns a `404` response.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|customer_id|path|string(uuid)|true|The ID of the `Customer` object.|
|body|body|[Customer-Update-v2](#schemacustomer-update-v2)|false|none|
|» full_name|body|[Full-Name](#schemafull-name)|false|The full name of the customer.|
|» email|body|[Email](#schemaemail)|false|The email address of the customer.|
|» phone|body|[Phone](#schemaphone)|false|The phone number of the customer in [E.164 format](https://en.wikipedia.org/wiki/E.164).|
|» date_of_birth|body|[Date-Of-Birth](#schemadate-of-birth)|false|The birth date of the customer.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "id": "6c7c97a8-cfc1-4cf3-8b38-26a74fdf1fae",
  "full_name": "Example Customer",
  "email": "example.customer@example.com",
  "phone": "+441234567890",
  "created_at": "2020-06-24T12:03:39.979397Z",
  "updated_at": "2020-06-25T10:03:39.134417Z",
  "payment_methods": [
    {
      "id": "648334a8-9546-a983-a81a-efc6d5bdd0be",
      "type": "revolut_pay",
      "saved_for": "merchant",
      "created_at": "2023-06-09T14:18:16.577888Z"
    },
    {
      "id": "edef3ba4-60a0-4df3-8f12-e5fc858c2420",
      "type": "card",
      "saved_for": "customer",
      "created_at": "2023-03-24T14:15:22Z",
      "bin": "459765",
      "last_four": "6578",
      "expiry_month": 2,
      "expiry_year": 2025,
      "cardholder_name": "Example Customer",
      "brand": "visa",
      "funding": "debit",
      "issuer": "EXAMPLE ISSUER",
      "issuer_country": "GB",
      "billing_address": {
        "street_line_1": "7 Westferry Circus",
        "street_line_2": "Columbus Building",
        "postcode": "E144HD",
        "city": "London",
        "region": "Greater London",
        "country_code": "GB"
      }
    },
    {
      "id": "6a0fe961-a961-a8b6-ad17-ab2779165a82",
      "type": "sepa_direct_debit",
      "saved_for": "merchant",
      "created_at": "2026-05-22T05:28:01.887482Z",
      "debtor_iban_last_four": "3273",
      "debtor_name": "John Doe",
      "mandate_reference": "69F1CB61BD99A32C8E20D7FB9E21E146",
      "billing_address": {
        "street_line_1": "Bank of England",
        "street_line_2": "Threadneedle St",
        "postcode": "EC2R 8AH",
        "city": "London",
        "region": "Greater London",
        "country_code": "GB"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="update-a-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Customer-v3](#schemacustomer-v3)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Retrieve payment method list of a customer

<a id="opIdretrievePaymentMethodList"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/customers/497f6eca-6276-4993-bfeb-53cbbbba6f08/payment-methods \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`GET /api/customers/{customer_id}/payment-methods`

Retrieve all the saved payment methods for a specific customer.
This can be useful in the following example cases:

- To show what payment information is stored for the customer.
- To try a different payment method if the first payment method fails when a recurring transaction occurs.

<h3 id="retrieve-payment-method-list-of-a-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|only_merchant|query|boolean|false|If `true`, returns only the saved payment methods that can be used for<br>merchant-initiated transactions (MIT).|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>This endpoint is available from version `2024-09-01`. If a version earlier than `2024-09-01` is provided, the endpoint returns a `404` response.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|customer_id|path|string(uuid)|true|The ID of the `Customer` object.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "payment_methods": [
    {
      "id": "648334a8-9546-a983-a81a-efc6d5bdd0be",
      "type": "revolut_pay",
      "saved_for": "merchant",
      "created_at": "2023-06-09T14:18:16.577888Z"
    },
    {
      "id": "edef3ba4-60a0-4df3-8f12-e5fc858c2420",
      "type": "card",
      "saved_for": "customer",
      "created_at": "2023-03-24T14:15:22Z",
      "bin": "459678",
      "last_four": "6896",
      "expiry_month": 3,
      "expiry_year": 2025,
      "cardholder_name": "Example Customer",
      "brand": "visa",
      "funding": "debit",
      "issuer": "EXAMPLE ISSUER",
      "issuer_country": "GB",
      "billing_address": {
        "street_line_1": "7",
        "street_line_2": "Westferry Circus",
        "postcode": "E144HD",
        "city": "London",
        "region": "Greater London",
        "country_code": "GB"
      }
    },
    {
      "id": "a04406c4-05be-498b-8207-cc1e02a9b3ca",
      "type": "card",
      "saved_for": "merchant",
      "created_at": "2023-03-24T14:15:22Z",
      "bin": "459885",
      "last_four": "7653",
      "expiry_month": 12,
      "expiry_year": 2026,
      "cardholder_name": "Example Holder",
      "brand": "mastercard",
      "funding": "credit",
      "issuer": "EXAMPLE ISSUER",
      "issuer_country": "GB",
      "billing_address": {
        "street_line_1": "Revolut",
        "street_line_2": "1 Canada Square",
        "postcode": "EC2V 6DN",
        "city": "London",
        "region": "Greater London",
        "country_code": "GB"
      }
    },
    {
      "id": "6a0fe961-a961-a8b6-ad17-ab2779165a82",
      "type": "sepa_direct_debit",
      "saved_for": "merchant",
      "created_at": "2026-05-22T05:28:01.887482Z",
      "debtor_iban_last_four": "3273",
      "debtor_name": "John Doe",
      "mandate_reference": "69F1CB61BD99A32C8E20D7FB9E21E146",
      "billing_address": {
        "street_line_1": "Bank of England",
        "street_line_2": "Threadneedle St",
        "postcode": "EC2R 8AH",
        "city": "London",
        "region": "Greater London",
        "country_code": "GB"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-payment-method-list-of-a-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Customer-Payment-Methods-v2](#schemacustomer-payment-methods-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Retrieve a customer's payment method

<a id="opIdretrievePaymentMethod"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/customers/497f6eca-6276-4993-bfeb-53cbbbba6f08/payment-methods/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`GET /api/customers/{customer_id}/payment-methods/{payment_method_id}`

Retrieve the information of a specific saved payment method for a customer.  

<h3 id="retrieve-a-customers-payment-method-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>This endpoint is available from version `2024-09-01`. If a version earlier than `2024-09-01` is provided, the endpoint returns a `404` response.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|customer_id|path|string(uuid)|true|The ID of the `Customer` object.|
|payment_method_id|path|string(uuid)|true|The ID of the payment method.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "id": "edef3ba4-60a0-4df3-8f12-e5fc858c2420",
  "type": "card",
  "saved_for": "customer",
  "created_at": "2023-03-24T14:15:22Z",
  "bin": "459678",
  "last_four": "6896",
  "expiry_month": 3,
  "expiry_year": 2025,
  "cardholder_name": "Example Customer",
  "brand": "visa",
  "funding": "debit",
  "issuer": "EXAMPLE ISSUER",
  "issuer_country": "GB",
  "billing_address": {
    "street_line_1": "7",
    "street_line_2": "Westferry Circus",
    "postcode": "E144HD",
    "city": "London",
    "region": "Greater London",
    "country_code": "GB"
  }
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-a-customers-payment-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Payment-Method-v4](#schemapayment-method-v4)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Delete a customer's payment method

<a id="opIddeletePaymentMethod"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/customers/497f6eca-6276-4993-bfeb-53cbbbba6f08/payment-methods/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`DELETE /api/customers/{customer_id}/payment-methods/{payment_method_id}`

Delete a specific saved payment method. The payment method is completely removed from the customer's saved payment methods.

To reuse a deleted payment method, direct your customer to the checkout page to save their card details again.

<h3 id="delete-a-customers-payment-method-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>This endpoint is available from version `2024-09-01`. If a version earlier than `2024-09-01` is provided, the endpoint returns a `404` response.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|customer_id|path|string(uuid)|true|The ID of the `Customer` object.|
|payment_method_id|path|string(uuid)|true|The ID of the payment method.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 400 Response

```json
{
  "code": "bad_request",
  "message": "Invalid request",
  "timestamp": 1721050000000
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="delete-a-customers-payment-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Update a customer's payment method

<a id="opIdupdatePaymentMethod"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/customers/497f6eca-6276-4993-bfeb-53cbbbba6f08/payment-methods/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17' \
  -d '{
    "saved_for": "customer"
  }'
```

`PATCH /api/customers/{customer_id}/payment-methods/{payment_method_id}`

Update the attributes of a specific saved payment method for a customer.

:::note
Updating `saved_for` to `customer` is a one-way operation — you can't change it back to `merchant`.

Once updated, this payment method can no longer be used for merchant-initiated transactions (MIT), for example, to charge recurring payments. It can only be used when the customer is on the checkout page.

For more information, see:
- [Pay for an order](https://developer.revolut.com/docs/api/merchant/2024-09-01#pay-order)
- [Charge a customer's saved payment method](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/save-payment-methods/charge-saved-payment-method)
:::

> Body parameter

```json
{
  "saved_for": "customer"
}
```

<h3 id="update-a-customers-payment-method-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>This endpoint is available from version `2024-09-01`. If a version earlier than `2024-09-01` is provided, the endpoint returns a `404` response.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|customer_id|path|string(uuid)|true|The ID of the `Customer` object.|
|payment_method_id|path|string(uuid)|true|The ID of the payment method.|
|body|body|[Payment-Method-Update](#schemapayment-method-update)|false|none|
|» saved_for|body|string|false|Update the value of `saved_for` from `merchant` to `customer`.<br><br>Once updated, this payment method can no longer be used for merchant-initiated transactions (MIT). It can only be used when the customer is present on the checkout page.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `customer` \| Restrict this payment method to customer-initiated transactions only. \||

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|
|» saved_for|customer|

> Example responses

> 200 Response

```json
{
  "id": "edef3ba4-60a0-4df3-8f12-e5fc858c2420",
  "type": "card",
  "saved_for": "customer",
  "created_at": "2023-03-24T14:15:22Z",
  "bin": "459678",
  "last_four": "6896",
  "expiry_month": 3,
  "expiry_year": 2025,
  "cardholder_name": "Example Customer",
  "brand": "visa",
  "funding": "debit",
  "issuer": "EXAMPLE ISSUER",
  "issuer_country": "GB",
  "billing_address": {
    "street_line_1": "7",
    "street_line_2": "Westferry Circus",
    "postcode": "E144HD",
    "city": "London",
    "region": "Greater London",
    "country_code": "GB"
  }
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="update-a-customers-payment-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Payment-Method-v4](#schemapayment-method-v4)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

<h1 id="merchant-api-payments">Payments</h1>

Payment operations enable you to initiate payments, or track payment status transitions. You can use the ID of the payment to retrieve information about a specific payment.

:::info
For more information about the payment lifecycle, see: [Order and payment lifecycle](https://developer.revolut.com/docs/guides/merchant/reference/order-lifecycle).
:::

## Retrieve payment details

<a id="opIdretrievePaymentDetails"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/payments/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/payments/{payment_id}`

Retrieve information about a specific payment, based on the payment's ID.

Use this endpoint to track a payment's lifecycle, for example:
  - When you develop a [1-click checkout process](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/save-payment-methods/checkout-with-saved-card)
  - When you build a [subscription management system](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/save-payment-methods/subscription-management)

<h3 id="retrieve-payment-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|payment_id|path|string(uuid)|true|The ID of the `Payment` object.|
|Revolut-Api-Version|header|string(date)|false|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "id": "6633855a-0e4f-a768-8b2c-e765d8872505",
  "state": "captured",
  "created_at": "2024-05-02T12:21:46.638369Z",
  "updated_at": "2024-05-02T12:21:55.198089Z",
  "token": "0b277730-8b3c-48d4-ab63-8903f40ee520",
  "amount": 100,
  "currency": "GBP",
  "settled_amount": 77,
  "settled_currency": "GBP",
  "risk_level": "low",
  "fees": [
    {
      "type": "acquiring",
      "amount": 23,
      "currency": "GBP"
    }
  ],
  "payment_method": {
    "id": "6633855a-3b39-ad95-9782-cd1327ffa0e7",
    "type": "revolut_pay_card",
    "fingerprint": "1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=",
    "card_brand": "visa",
    "funding": "credit",
    "card_country_code": "MT",
    "card_bin": "123456",
    "card_last_four": "1234",
    "card_expiry": "12/28",
    "cardholder_name": "Example Holder",
    "checks": {
      "three_ds": {
        "eci": "06",
        "state": "verified",
        "version": 2
      }
    }
  },
  "order_id": "66338534-28a7-a68e-b312-43722430df1b"
}
```

> 400 Response

```json
{
  "errorId": "94b27660-fdda-49ec-8b85-cd46a068ade0",
  "timestamp": 1601296792533
}
```

> 404 Response

```json
{
  "errorId": "94b27660-fdda-49ec-8b85-cd46a068ade0",
  "timestamp": 1601296792533,
  "code": 1024
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-payment-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payment details|[Payment-Retrieval-v2](#schemapayment-retrieval-v2)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|Inline|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<h3 id="retrieve-payment-details-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorId|string|false|none|The ID of the error. You can share this ID with Revolut<br>support for troubleshooting.|
|timestamp|integer|false|none|The date and time the error happened.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorId|string|false|none|The ID of the error. You can share this ID with Revolut<br>support for troubleshooting.|
|timestamp|integer|false|none|The date and time the error happened.|
|code|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

<h1 id="merchant-api-subscriptions">Subscriptions</h1>

The Subscriptions API provides a complete solution for creating and managing recurring billing for your customers.

You can automatically charge customers on flexible billing cycles, manage sophisticated subscription plans, and track the entire billing history for every subscriber.

## How it works?

A subscription's billing structure is defined by a **Subscription plan**. This model gives you granular control:

- **Plans** contain one or more **variations** (e.g., a "Gold" plan could have "Monthly" and "Yearly" variations).
- **Variations** can have multiple **phases** (e.g., a 7-day free trial followed by a regular billing phase).

This powerful structure allows you to build complex pricing models, including free trials, introductory offers, and tiered pricing.

## Key features

- **Flexible pricing models:** Create plans with multiple variations and phases to support any billing scenario.
- **Automated charging:** Automatically charge a customer's saved payment method at the start of each billing cycle.
- **Hosted onboarding:** For new customers, generate a setup order with a redirect URL to Revolut's Hosted Payment Page, allowing them to securely add a payment method.
- **Lifecycle tracking:** Monitor each billing cycle's state, view all associated orders, and access complete payment histories.
- **Full subscription management:** Easily update customer payment methods, cancel subscriptions, and view a complete billing history.

## Retrieve a subscription plan list

<a id="opIdretrieveSubscriptionPlanList"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/subscription-plans \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`GET /api/subscription-plans`

Retrieve all subscription plans configured for your merchant account. You can use the query parameters for:

  | Filtering | Pagination |
  | --------- | ---------- |
  | Filter the subscription plans that you want to retrieve, for example, only retrieve plans created within a specific date range. <br/><br/>Parameters used for filtering:<br/><ul><li>`from`</li><li>`to`</li></ul> | View the subscription plans without loading all of them at once, for example, return a specified number of plans per page. <br/><br/>Parameters used for pagination: <br/><ul><li>`limit`</li><li>`page_token`</li></ul> |

<h3 id="retrieve-a-subscription-plan-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Maximum number of records to return. Used for **pagination**.|
|from|query|string(date-time)|false|Filter records created from this date/time. Used for **filtering**.|
|to|query|string(date-time)|false|Filter records created until this date/time. Used for **filtering**.|
|page_token|query|string|false|Token for retrieving the next page of results. Used for **pagination**.<br><br>To paginate through results:<br><br>  1. Make an initial request with the desired `limit`.<br>  1. The response will include a `next_page_token` if more results are available.<br>  1. Use that token in the `page_token` parameter of your next request.<br>  1. Repeat until `next_page_token` is not present.<br><br>:::note<br>When using `page_token`, you must include all query parameters from the initial request (such as `from`, `to`, or other filter parameters) to maintain consistent filtering across pages.<br>:::|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "next_page_token": "9e5d2caa-bb60-4b5b-b7cf-6345bbdff67e",
  "subscription_plans": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "Premium Plan with 14-days Trial",
      "state": "active",
      "trial_duration": "P14D",
      "created_at": "2025-06-05T21:00:00.036001Z",
      "updated_at": "2025-06-05T21:00:00.036001Z",
      "variations": [
        {
          "id": "550e8400-e29b-41d4-a716-446655440001",
          "phases": [
            {
              "id": "550e8400-e29b-41d4-a716-446655440002",
              "ordinal": 1,
              "cycle_duration": "P1Y",
              "amount": 99900,
              "currency": "GBP"
            }
          ]
        }
      ]
    },
    {
      "id": "f757b068-f287-43c8-8d05-9c073fecbe73",
      "name": "Enterprise Pro Plan",
      "state": "active",
      "created_at": "2026-01-26T08:59:09.433527Z",
      "updated_at": "2026-01-26T08:59:09.433527Z",
      "variations": [
        {
          "id": "f4e0a171-4f4e-484b-b0a2-22085059af65",
          "phases": [
            {
              "id": "23319d04-4b23-4ae7-ba54-82112c752683",
              "ordinal": 1,
              "cycle_duration": "P1M",
              "amount": 990,
              "currency": "GBP"
            }
          ]
        },
        {
          "id": "7cf47b0d-3da9-496b-a4e9-fbbe43c33ee3",
          "phases": [
            {
              "id": "feed2491-c895-4bfa-ba05-a3a088842d5c",
              "ordinal": 1,
              "cycle_duration": "P1Y",
              "amount": 9990,
              "currency": "GBP"
            }
          ]
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> default Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-a-subscription-plan-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of subscription plans retrieved successfully|[Subscription-Plans](#schemasubscription-plans)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|
|default|Default|Error response|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Create a subscription plan

<a id="opIdcreateSubscriptionPlan"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/subscription-plans \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17' \
  -d '{
    "name": "Enterprise Pro Plan",
    "variations": [
      {
        "phases": [
          {
            "ordinal": 1,
            "cycle_duration": "P1Y",
            "amount": 99900,
            "currency": "GBP"
          }
        ]
      },
      {
        "phases": [
          {
            "ordinal": 1,
            "cycle_duration": "P1M",
            "amount": 9900,
            "currency": "GBP"
          }
        ]
      }
    ]
  }'
```

`POST /api/subscription-plans`

Create a new subscription plan with one or more pricing variations.

A subscription plan defines the billing structure for subscriptions. Each plan can have multiple variations (e.g., monthly vs. yearly), and each variation can have multiple billing phases (e.g., trial period followed by regular billing). These plans are designed for flexibility, allowing you to combine fixed recurring fees with unit-based or usage-based charges into a single, unified subscription.

## How subscription plans work

A subscription plan consists of four hierarchical levels:

1. **Plan**: The top-level container (e.g., "Standard Plan")
1. **Variations**: Different pricing options (e.g., monthly vs. yearly)
1. **Phases**: Sequential billing stages within each variation
1. **Subscription items**: Individual line items within a phase that define **how** to charge (e.g., a base fee plus per-unit charges)

### Phases and billing items

If a `trial_duration` is defined at the variation level, billing phases begin immediately after the trial ends. Phases execute in sequence based on their `ordinal` value (1, 2, 3, etc.):

| Concept | Behaviour |
| ------- | --------- |
| **Cycle control** | Each phase has a `cycle_duration` (e.g., `P1M` for monthly). Use `cycle_count` to limit how many cycles occur; if `null` or omitted, the phase runs indefinitely. |
| **Sequential transition** | When a phase completes its cycles, the subscription advances to the next `ordinal`. If no next phase exists, the subscription stops automatically. |
| **Item composition** | Each phase contains one or more `subscription_items` defining how charges are calculated: **flat** items apply a fixed cost multiplied by `quantity`; **usage** items are metered at the end of the cycle based on reported consumption. |

:::tip [Example: Multi-item billing]
A plan combining a **base platform fee** and **monthly user licenses**:

**Variation:** `Monthly Team`

**Phase 1** — `ordinal: 1`, `cycle_duration: P1M`

| Item | Type | `amount` | `quantity` |
| ---- | ---- | -------- | ---------- |
| **Base platform fee** | `flat` | `4900` (£49.00) | `1` |
| **User licenses** | `flat` | `1000` (£10.00 per unit) | `5` |

The customer is billed a fixed platform fee plus £10.00 for each of their 5 active licenses every month.
:::

> Body parameter

```json
{
  "name": "Enterprise Pro Plan",
  "variations": [
    {
      "phases": [
        {
          "ordinal": 1,
          "cycle_duration": "P1Y",
          "amount": 99900,
          "currency": "GBP"
        }
      ]
    },
    {
      "phases": [
        {
          "ordinal": 1,
          "cycle_duration": "P1M",
          "amount": 9900,
          "currency": "GBP"
        }
      ]
    }
  ]
}
```

<h3 id="create-a-subscription-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|body|body|[Subscription-Plan-Creation](#schemasubscription-plan-creation)|true|none|
|» name|body|[Subscription-Plan-Name](#schemasubscription-plan-name)|true|The name of the subscription plan.|
|» trial_duration|body|[Subscription-Plan-Trial-Duration](#schemasubscription-plan-trial-duration)|false|The default trial period duration for this subscription plan in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) (e.g., "P14D" for 14 days).<br><br>This value serves as the default trial duration for all subscriptions created from this plan. Individual subscriptions can override this value at creation time.<br><br>:::note<br>Only days (`D`) are allowed. Time components such as hours, minutes, or seconds are not permitted.<br>:::|
|» variations|body|[[Subscription-Plan-Variation-Creation](#schemasubscription-plan-variation-creation)]|true|List of subscription plan variations (e.g., monthly, yearly pricing options).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 201 Response

```json
{
  "id": "f757b068-f287-43c8-8d05-9c073fecbe73",
  "name": "Enterprise Pro Plan",
  "state": "active",
  "created_at": "2026-01-26T08:59:09.433527Z",
  "updated_at": "2026-01-26T08:59:09.433527Z",
  "variations": [
    {
      "id": "f4e0a171-4f4e-484b-b0a2-22085059af65",
      "phases": [
        {
          "id": "23319d04-4b23-4ae7-ba54-82112c752683",
          "ordinal": 1,
          "cycle_duration": "P1M",
          "amount": 990,
          "currency": "GBP"
        }
      ]
    },
    {
      "id": "7cf47b0d-3da9-496b-a4e9-fbbe43c33ee3",
      "phases": [
        {
          "id": "feed2491-c895-4bfa-ba05-a3a088842d5c",
          "ordinal": 1,
          "cycle_duration": "P1Y",
          "amount": 9990,
          "currency": "GBP"
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> default Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="create-a-subscription-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Subscription plan created successfully|[Subscription-Plan](#schemasubscription-plan)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|
|default|Default|Error response|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Retrieve a subscription plan

<a id="opIdretrieveSubscriptionPlan"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/subscription-plans/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`GET /api/subscription-plans/{subscription_plan_id}`

Retrieve a specific subscription plan by its unique identifier.

A subscription plan contains **variations** (different pricing options like monthly vs. yearly), and each variation contains **phases** (sequential billing stages).

Phases execute based on their `ordinal` value. When a phase completes its `cycle_count`, the subscription moves to the next phase. If `cycle_count` is `null` or omitted, the phase continues indefinitely.

:::note
If a `trial_duration` is defined, phases begin immediately after the trial ends.
:::

<h3 id="retrieve-a-subscription-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|subscription_plan_id|path|string(uuid)|true|The ID of the subscription plan.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "id": "f757b068-f287-43c8-8d05-9c073fecbe73",
  "name": "Enterprise Pro Plan",
  "state": "active",
  "created_at": "2026-01-26T08:59:09.433527Z",
  "updated_at": "2026-01-26T08:59:09.433527Z",
  "variations": [
    {
      "id": "f4e0a171-4f4e-484b-b0a2-22085059af65",
      "phases": [
        {
          "id": "23319d04-4b23-4ae7-ba54-82112c752683",
          "ordinal": 1,
          "cycle_duration": "P1M",
          "amount": 990,
          "currency": "GBP"
        }
      ]
    },
    {
      "id": "7cf47b0d-3da9-496b-a4e9-fbbe43c33ee3",
      "phases": [
        {
          "id": "feed2491-c895-4bfa-ba05-a3a088842d5c",
          "ordinal": 1,
          "cycle_duration": "P1Y",
          "amount": 9990,
          "currency": "GBP"
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> default Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-a-subscription-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subscription plan retrieved successfully|[Subscription-Plan](#schemasubscription-plan)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|404|Not Found|Subscription plan not found|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|
|default|Default|Error response|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Retrieve a subscription list

<a id="opIdretrieveSubscriptionList"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`GET /api/subscriptions`

Retrieve all subscriptions for the merchant account. You can use the query parameters for:

  | Filtering | Pagination |
  | --------- | ---------- |
  | Filter the subscriptions that you want to retrieve, for example, only retrieve subscriptions created within a specific date range or with a specific external reference. <br/><br/>Parameters used for filtering:<br/><ul><li>`from`</li><li>`to`</li><li>`external_reference`</li></ul> | View the subscriptions without loading all of them at once, for example, return a specified number of subscriptions per page. <br/><br/>Parameters used for pagination: <br/><ul><li>`limit`</li><li>`page_token`</li></ul> |

<h3 id="retrieve-a-subscription-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Maximum number of records to return. Used for **pagination**.|
|from|query|string(date-time)|false|Filter records created from this date/time. Used for **filtering**.|
|to|query|string(date-time)|false|Filter records created until this date/time. Used for **filtering**.|
|external_reference|query|string|false|Return subscriptions with a specific `external_reference`. Used for **filtering**.|
|page_token|query|string|false|Token for retrieving the next page of results. Used for **pagination**.<br><br>To paginate through results:<br><br>  1. Make an initial request with the desired `limit`.<br>  1. The response will include a `next_page_token` if more results are available.<br>  1. Use that token in the `page_token` parameter of your next request.<br>  1. Repeat until `next_page_token` is not present.<br><br>:::note<br>When using `page_token`, you must include all query parameters from the initial request (such as `from`, `to`, or other filter parameters) to maintain consistent filtering across pages.<br>:::|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "next_page_token": "9e5d2caa-bb60-4b5b-b7cf-6345bbdff67e",
  "subscriptions": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "external_reference": "ext-ref-12345",
      "state": "active",
      "customer_id": "650e8400-e29b-41d4-a716-446655440001",
      "plan_id": "750e8400-e29b-41d4-a716-446655440002",
      "plan_variation_id": "850e8400-e29b-41d4-a716-446655440003",
      "payment_method_type": "automatic",
      "payment_method_id": "6689e244-8af7-4ada-9448-a91f02d4f192",
      "created_at": "2025-06-05T21:00:00.036001Z",
      "updated_at": "2025-06-05T21:00:00.036001Z",
      "start_date": "2025-06-05T21:00:00.036001Z",
      "current_cycle_id": "950e8400-e29b-41d4-a716-446655440004"
    },
    {
      "id": "550e8400-e29b-41d4-a716-446655440010",
      "state": "pending",
      "customer_id": "650e8400-e29b-41d4-a716-446655440011",
      "plan_id": "750e8400-e29b-41d4-a716-446655440012",
      "plan_variation_id": "850e8400-e29b-41d4-a716-446655440013",
      "payment_method_type": "automatic",
      "created_at": "2025-06-04T21:00:00.036001Z",
      "updated_at": "2025-06-04T21:00:00.036001Z",
      "current_cycle_id": "a31627fb-b037-4566-8d7b-f380c1f44653"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> default Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-a-subscription-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of subscriptions retrieved successfully|[Subscriptions](#schemasubscriptions)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|
|default|Default|Error response|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Create a subscription

<a id="opIdcreateSubscription"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17' \
  -d '{
    "plan_variation_id": "550e8400-e29b-41d4-a716-446655440000",
    "customer_id": "650e8400-e29b-41d4-a716-446655440001",
    "setup_order_redirect_url": "https://example.com/subscription/setup/complete",
    "external_reference": "ext-ref-12345"
  }'
```

`POST /api/subscriptions`

Create a new subscription for a customer using a subscription plan variation.

There are several supported flows for creating and activating subscriptions, depending on your integration needs.

:::note
The customer must already exist in the API. The `customer_id` is required for all subscription flows.
:::

<details>
<summary>

#### Flow 1: Hosted Payment Page (HPP)

</summary>

Use this flow to redirect the customer to Revolut's Hosted Payment Page to complete the first payment and save their payment method.

**Backend flow:**
1. Create a subscription with optional `setup_order_redirect_url`:

   | `setup_order_redirect_url` | Behaviour |
   | -------------------------- | --------- |
   | **Provided** | The setup order's `redirect_url` field is set to this value. |
   | **Omitted** | The setup order uses Revolut's default redirect behaviour. |

1. The subscription is created in a `pending` state with a `setup_order_id` in the response.
1. [Retrieve the order](https://developer.revolut.com/docs/api/merchant/2024-09-01#retrieve-order) using `setup_order_id` as the `order_id` in the path to get the `checkout_url`.
1. Redirect the customer to the `checkout_url` for the Hosted Payment Page.

**Customer flow:**
1. Customer is redirected to Revolut's Hosted Payment Page.
1. Customer completes payment on the HPP, and their payment method is saved.
1. Customer redirect after payment depends on your setup:

   | `setup_order_redirect_url` | Customer redirect |
   | -------------------------- | ----------------- |
   | **Provided** | Customer is redirected to your custom URL. |
   | **Omitted** | Customer sees the default Revolut completion screen. |

**Key characteristics:**
- Customer completes payment on Revolut's hosted page
- Payment method is automatically saved for future billing cycles
- Optional custom redirect after payment
- Best for web-based integrations

</details>

<details>

<summary>

#### Flow 2: Widget or card-not-present (CNP) payment

</summary>

Use this flow when you want to embed the payment experience directly on your website using one of Revolut's payment widgets or handle card-not-present payments.

**Backend flow:**
1. Create a subscription with minimal required parameters.
1. The subscription is created in a `pending` state with a `setup_order_id` in the response.
1. [Retrieve the order](https://developer.revolut.com/docs/api/merchant/2024-09-01#retrieve-order) using `setup_order_id` as the `order_id` in the path to get order details for your integration.
1. Integrate your payment solution (widget, SDK, or CNP method) on your frontend, ensuring it's configured to save the customer's payment method for recurring billing.

**Customer flow:**
1. Customer stays on your website/application.
1. Customer completes payment, and their payment method is saved for future billing cycles.

**Key characteristics:**
- Payment experience embedded directly in your application
- Customer never leaves your website
- Payment method is saved for future billing cycles
- Best for native mobile apps or fully custom web experiences

</details>

> Body parameter

```json
{
  "plan_variation_id": "550e8400-e29b-41d4-a716-446655440000",
  "customer_id": "650e8400-e29b-41d4-a716-446655440001",
  "setup_order_redirect_url": "https://example.com/subscription/setup/complete",
  "external_reference": "ext-ref-12345"
}
```

<h3 id="create-a-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|The `Idempotency-Key` ensures that requests are processed only once, preventing multiple executions of the same operation due to retries or duplicate requests.<br><br>This header is optional and can accept any unique string value the merchant uses.<br><br>A recommended practice is to use a unique identifier from your system (such as the entity's ID or a request UUID) as the idempotency key. This facilitates tracking and managing requests effectively.|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|body|body|[Subscription-Creation](#schemasubscription-creation)|true|none|
|» plan_variation_id|body|[Subscription-Plan-Variation-Id](#schemasubscription-plan-variation-id)|true|Unique identifier for the subscription plan variation.|
|» customer_id|body|[Customer-Id](#schemacustomer-id)|true|Unique identifier for the customer.|
|» external_reference|body|[Subscription-External-Reference](#schemasubscription-external-reference)|false|Optional external reference for the subscription.<br><br>Use this field to store your own system's identifier for easy tracking and correlation.|
|» setup_order_redirect_url|body|[Setup-Order-Redirect-URL](#schemasetup-order-redirect-url)|false|The URL to which the customer is redirected after completing the setup order on the Revolut Hosted Payment Page.<br><br>When provided, the response will include a `setup_order_id`. Use the [Retrieve an order](https://developer.revolut.com/docs/api/merchant#retrieve-order) endpoint with this `setup_order_id` to get the `checkout_url` for redirecting the customer to the Hosted Payment Page.<br><br>:::warning<br>Restrictions:<br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be either `http` or `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `2000`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::|
|» trial_duration|body|[Subscription-Trial-Duration](#schemasubscription-trial-duration)|false|The trial period duration for this subscription in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) (e.g., "P14D" for 14 days).<br><br>### Override plan defaults<br><br>Subscription plans can define a default trial duration. When creating a subscription, you can use this field to override the plan's default trial period:<br><br>\| Field value \| Behaviour \| Example \|<br>\| ----------- \| -------- \| ------- \|<br>\| **Not provided** \| Uses the trial duration defined in the plan (if any) \| Plan has `"P7D"` → subscription gets 7-day trial \|<br>\| **Different value** \| Overrides the plan's default trial duration \| Plan has `"P7D"` → set to `"P30D"` for promotional offer, or `"P3D"` to reduce \|<br>\| **`"P0D"`** \| Explicitly skips the trial period \| Plan has `"P7D"` → set to `"P0D"` to skip trial entirely \|<br><br>:::note<br>Only days (`D`) are allowed. Time components such as hours, minutes, or seconds are not permitted.<br>:::|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 201 Response

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "external_reference": "ext-ref-12345",
  "state": "pending",
  "customer_id": "650e8400-e29b-41d4-a716-446655440001",
  "plan_id": "750e8400-e29b-41d4-a716-446655440002",
  "plan_variation_id": "850e8400-e29b-41d4-a716-446655440003",
  "payment_method_type": "automatic",
  "created_at": "2025-06-05T21:00:00.036001Z",
  "updated_at": "2025-06-05T21:00:00.036001Z",
  "setup_order_id": "a50e8400-e29b-41d4-a716-446655440005",
  "current_cycle_id": "a31627fb-b037-4566-8d7b-f380c1f44653"
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> default Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="create-a-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Subscription created successfully|[Subscription](#schemasubscription)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|
|default|Default|Error response|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Retrieve a subscription

<a id="opIdretrieveSubscription"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/subscriptions/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`GET /api/subscriptions/{subscription_id}`

Retrieve a subscription by its unique identifier.

Use this endpoint to get the current state and details of a specific subscription.

<h3 id="retrieve-a-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|subscription_id|path|string(uuid)|true|The ID of the subscription.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "external_reference": "ext-ref-12345",
  "state": "active",
  "customer_id": "650e8400-e29b-41d4-a716-446655440001",
  "plan_id": "750e8400-e29b-41d4-a716-446655440002",
  "plan_variation_id": "850e8400-e29b-41d4-a716-446655440003",
  "payment_method_type": "automatic",
  "payment_method_id": "6689e244-8af7-4ada-9448-a91f02d4f192",
  "created_at": "2025-06-05T21:00:00.036001Z",
  "updated_at": "2025-06-05T21:00:00.036001Z",
  "start_date": "2025-06-05T21:00:00.036001Z",
  "current_cycle_id": "950e8400-e29b-41d4-a716-446655440004",
  "trial_duration": "P14D",
  "trial_end_date": "2025-06-19T21:00:00.036001Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> default Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-a-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subscription retrieved successfully|[Subscription](#schemasubscription)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|404|Not Found|Subscription not found|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|
|default|Default|Error response|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Update a subscription

<a id="opIdupdateSubscription"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/subscriptions/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17' \
  -d '{
    "external_reference": "ext-ref-12345"
  }'
```

`PATCH /api/subscriptions/{subscription_id}`

Update a subscription's details.

You can update a subscription and specific parameters based on the value of the `state` parameter:

| State parameter value | Modifiable parameters |
| --------------------- | --------------------- |
| `pending`, `active`, `overdue`, `paused` | You can modify all listed parameters. |
| `cancelled`, `finished` | You cannot modify parameters. These are final states. |

**Common use cases:**
- **Update external reference**: When you need to sync with updated customer records in your system, correct an initial reference value, or re-map the subscription to a different internal tracking ID to maintain consistency with your database.

> Body parameter

```json
{
  "external_reference": "ext-ref-12345"
}
```

<h3 id="update-a-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|subscription_id|path|string(uuid)|true|The ID of the subscription.|
|body|body|[Subscription-Update](#schemasubscription-update)|true|none|
|» external_reference|body|[Subscription-External-Reference](#schemasubscription-external-reference)|false|Optional external reference for the subscription.<br><br>Use this field to store your own system's identifier for easy tracking and correlation.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "external_reference": "ext-ref-12345",
  "state": "active",
  "customer_id": "650e8400-e29b-41d4-a716-446655440001",
  "plan_id": "750e8400-e29b-41d4-a716-446655440002",
  "plan_variation_id": "850e8400-e29b-41d4-a716-446655440003",
  "payment_method_type": "automatic",
  "payment_method_id": "6689e244-8af7-4ada-9448-a91f02d4f192",
  "created_at": "2025-06-05T21:00:00.036001Z",
  "updated_at": "2025-06-05T21:00:00.036001Z",
  "start_date": "2025-06-05T21:00:00.036001Z",
  "current_cycle_id": "950e8400-e29b-41d4-a716-446655440004",
  "trial_duration": "P14D",
  "trial_end_date": "2025-06-19T21:00:00.036001Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> default Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="update-a-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subscription updated successfully|[Subscription](#schemasubscription)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Subscription not found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|
|default|Default|Error response|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Cancel a subscription

<a id="opIdcancelSubscription"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/subscriptions/497f6eca-6276-4993-bfeb-53cbbbba6f08/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`POST /api/subscriptions/{subscription_id}/cancel`

Cancel a subscription.

You can cancel a subscription in any state except `cancelled` or `finished`. When you cancel a subscription, it will be marked as `cancelled` and no further billing cycles will be created. Any pending orders will be cancelled.

<h3 id="cancel-a-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|subscription_id|path|string(uuid)|true|The ID of the subscription.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> default Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="cancel-a-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Subscription cancelled successfully|None|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Subscription not found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|
|default|Default|Error response|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Change a subscription plan

<a id="opIdchangeSubscriptionPlan"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/subscriptions/497f6eca-6276-4993-bfeb-53cbbbba6f08/change-plan \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17' \
  -d '{
    "plan_variation_id": "850e8400-e29b-41d4-a716-446655440003",
    "scheduled": "at_cycle_end"
  }'
```

`POST /api/subscriptions/{subscription_id}/change-plan`

Schedule a plan change for a subscription. The change is applied at the end of the current billing cycle.

### Use cases

- **Plan upgrades:** Moving a customer to a higher-tier plan with more features or capacity.
- **Plan downgrades:** Moving a customer to a lower-tier plan that better fits their usage and budget.
- **Customer requests:** Accommodating a customer's request to switch to a different plan variation.

### How it works

When you schedule a plan change, the subscription continues operating under its current plan variation until the current billing cycle ends. At that point, the next cycle is created under the new plan variation.

- **Scheduled change:** The plan change is scheduled to take effect `at_cycle_end`. The current cycle completes normally, and the new plan variation applies starting from the next cycle.
- **Plan variation phases:** Some plan variations are divided into phases - distinct pricing or duration periods within a single variation. If the target plan variation has multiple phases, use `plan_variation_phase_id` to specify which phase to start from. If omitted, the change starts from the first phase.
- **Trial periods:** If the target plan variation includes a trial period, it is skipped when changing plans. Trial periods only apply when a subscription is first created.
- **Subsequent cycles:** After the transition, future cycles follow the cadence and pricing defined by the new plan variation.

> Body parameter

```json
{
  "plan_variation_id": "850e8400-e29b-41d4-a716-446655440003",
  "scheduled": "at_cycle_end"
}
```

<h3 id="change-a-subscription-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|subscription_id|path|string(uuid)|true|The ID of the subscription.|
|body|body|[Subscription-Change-Plan](#schemasubscription-change-plan)|true|none|
|» plan_variation_id|body|[Subscription-Plan-Variation-Id](#schemasubscription-plan-variation-id)|true|Unique identifier for the subscription plan variation.|
|» plan_variation_phase_id|body|[Subscription-Plan-Phase-Id](#schemasubscription-plan-phase-id)|false|Unique identifier for the subscription plan phase.|
|» scheduled|body|string|true|When the plan change should take effect.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `at_cycle_end` \| The change is applied at the end of the current billing cycle. \||
|» reason|body|[Subscription-Change-Plan-Reason](#schemasubscription-change-plan-reason)|false|The reason for the scheduled action. This field is informational and does not affect how the action is processed.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `customer_request` \| The action was requested by the customer. \|<br>\| `merchant_request` \| The action was initiated by the merchant. \||

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|
|» scheduled|at_cycle_end|
|» reason|customer_request|
|» reason|merchant_request|

> Example responses

> 400 Response

```json
{
  "code": "bad_request",
  "message": "Immediate plan change is not supported. Please provide 'scheduled' field (e.g. 'at_cycle_end')",
  "timestamp": 1601296792533
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 422 Response

```json
{
  "code": "subscription_finished",
  "message": "The subscription is finished",
  "timestamp": 1601296792533
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> default Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="change-a-subscription-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Plan change scheduled successfully|None|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Subscription not found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|
|default|Default|Error response|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Update a subscription renewal date

<a id="opIdupdateSubscriptionRenewalDate"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/subscriptions/497f6eca-6276-4993-bfeb-53cbbbba6f08/change-renewal-date \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17' \
  -d '{
    "renewal_date": "2026-07-01T00:00:00Z"
  }'
```

`POST /api/subscriptions/{subscription_id}/change-renewal-date`

Reschedule the upcoming payment date for an active subscription cycle. This is a command endpoint — the renewal date is not a direct field on the Subscription resource, but is derived from the current active cycle's `end_date`.

### Use cases

- **Payment extensions:** Granting a customer more time to pay.
- **Service delays:** Adjusting the billing date if service delivery is delayed.
- **Billing alignment:** Moving a payment date to better suit a customer's financial schedule.

### How it works

Extending the current cycle's `end_date` naturally postpones the start of the next cycle and its associated payment trigger, providing flexibility for both the merchant and the customer.

The relationship between the cycle end and the billing execution depends on the plan type:

- **Non-usage plans:** The next cycle's start date is the same as the billing date. The moment the current cycle ends, the next cycle begins and the payment is attempted.
- **Usage-based plans (buffer & overlap):** To allow merchants time to finalize usage data, the billing date is scheduled after the cycle `end_date`.
    - Usage continues to be aggregated until the updated `end_date`.
    - When the current cycle (Cycle 1) reaches its updated `end_date`, **Cycle 2 starts immediately** to ensure no service interruption.
    - The billing for Cycle 1 occurs a few hours later (12-hour buffer). This window allows you to upload or edit usages for the period that just ended while the customer is already technically in their next cycle.
    - Rescheduling the `renewal_date` pushes this entire sequence—the end of Cycle 1, the start of Cycle 2, and the delayed billing trigger—further into the future.

Subsequent cycles resume the original plan cadence (e.g., monthly) from the new date.

> Body parameter

```json
{
  "renewal_date": "2026-07-01T00:00:00Z"
}
```

<h3 id="update-a-subscription-renewal-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|subscription_id|path|string(uuid)|true|The ID of the subscription.|
|body|body|[Subscription-Update-Renewal-Date](#schemasubscription-update-renewal-date)|true|none|
|» renewal_date|body|string(date-time)|true|The new renewal date for the subscription, expressed as a UTC date-time value.<br><br>Must be set to a date later than the current renewal date; earlier dates are rejected.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 422 Response

```json
{
  "code": "subscription_finished",
  "message": "The subscription is finished",
  "timestamp": 1601296792533
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> default Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="update-a-subscription-renewal-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Renewal date updated successfully|None|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Subscription not found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity (business rule violation)|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|
|default|Default|Error response|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Retrieve a subscription cycle list

<a id="opIdretrieveSubscriptionCycleList"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/subscriptions/497f6eca-6276-4993-bfeb-53cbbbba6f08/cycles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`GET /api/subscriptions/{subscription_id}/cycles`

Retrieve all billing cycles for a specific subscription. 

You can use the query parameters for:

  | Filtering | Pagination |
  | --------- | ---------- |
  | Filter the subscription cycles that you want to retrieve, for example, only retrieve cycles that started within a specific date range. <br/><br/>Parameters used for filtering:<br/><ul><li>`from`</li><li>`to`</li></ul> | View the subscription cycles without loading all of them at once, for example, return a specified number of cycles per page. <br/><br/>Parameters used for pagination: <br/><ul><li>`limit`</li><li>`page_token`</li></ul> |

<h3 id="retrieve-a-subscription-cycle-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Maximum number of records to return. Used for **pagination**.|
|from|query|string(date-time)|false|Filter records created from this date/time. Used for **filtering**.|
|to|query|string(date-time)|false|Filter records created until this date/time. Used for **filtering**.|
|page_token|query|string|false|Token for retrieving the next page of results. Used for **pagination**.<br><br>To paginate through results:<br><br>  1. Make an initial request with the desired `limit`.<br>  1. The response will include a `next_page_token` if more results are available.<br>  1. Use that token in the `page_token` parameter of your next request.<br>  1. Repeat until `next_page_token` is not present.<br><br>:::note<br>When using `page_token`, you must include all query parameters from the initial request (such as `from`, `to`, or other filter parameters) to maintain consistent filtering across pages.<br>:::|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|subscription_id|path|string(uuid)|true|The ID of the subscription.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "next_page_token": "9e5d2caa-bb60-4b5b-b7cf-6345bbdff67e",
  "cycles": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440010",
      "subscription_id": "650e8400-e29b-41d4-a716-446655440001",
      "plan_variation_id": "750e8400-e29b-41d4-a716-446655440002",
      "plan_variation_phase_id": "850e8400-e29b-41d4-a716-446655440003",
      "number": 2,
      "previous_cycle_id": "550e8400-e29b-41d4-a716-446655440000",
      "state": "active",
      "start_date": "2025-07-05T21:00:00.036001Z",
      "end_date": "2025-08-05T21:00:00.036001Z",
      "order_id": "a50e8400-e29b-41d4-a716-446655440015",
      "trial": false
    },
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "subscription_id": "650e8400-e29b-41d4-a716-446655440001",
      "plan_variation_id": "750e8400-e29b-41d4-a716-446655440002",
      "number": 1,
      "state": "finished",
      "start_date": "2025-06-05T21:00:00.036001Z",
      "end_date": "2025-07-05T21:00:00.036001Z",
      "order_id": "a50e8400-e29b-41d4-a716-446655440005",
      "trial": true
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> default Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-a-subscription-cycle-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of subscription cycles retrieved successfully|[Subscription-Cycles](#schemasubscription-cycles)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|404|Not Found|Subscription not found|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|
|default|Default|Error response|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Retrieve a subscription cycle

<a id="opIdretrieveSubscriptionCycle"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/subscriptions/497f6eca-6276-4993-bfeb-53cbbbba6f08/cycles/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`GET /api/subscriptions/{subscription_id}/cycles/{cycle_id}`

Retrieve a specific billing cycle for a subscription by its unique identifier.

Use this endpoint to get the details and current state of a particular billing cycle.

<h3 id="retrieve-a-subscription-cycle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|subscription_id|path|string(uuid)|true|The ID of the subscription.|
|cycle_id|path|string(uuid)|true|The ID of the subscription cycle.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "id": "950e8400-e29b-41d4-a716-446655440004",
  "subscription_id": "650e8400-e29b-41d4-a716-446655440001",
  "plan_variation_id": "750e8400-e29b-41d4-a716-446655440002",
  "plan_variation_phase_id": "850e8400-e29b-41d4-a716-446655440003",
  "number": 1,
  "state": "finished",
  "start_date": "2025-06-05T21:00:00.036001Z",
  "end_date": "2025-07-05T21:00:00.036001Z",
  "order_id": "b50e8400-e29b-41d4-a716-446655440006",
  "trial": true
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> default Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-a-subscription-cycle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subscription cycle retrieved successfully|[Subscription-Cycle](#schemasubscription-cycle)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|404|Not Found|Subscription cycle not found|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|
|default|Default|Error response|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Retrieve a subscription usage list

<a id="opIdretrieveSubscriptionUsageList"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/subscription-usages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`GET /api/subscription-usages`

Retrieve all usage records for the merchant account. Results are ordered by `usage_date`, unlike other list endpoints which order by `created_at`. You can use the query parameters for:

  | Filtering | Pagination |
  | --------- | ---------- |
  | Filter the usage records that you want to retrieve, for example, only retrieve records for a specific subscription or billing cycle. <br/><br/>Parameters used for filtering:<br/><ul><li>`subscription_id`</li><li>`subscription_cycle_id`</li><li>`from_usage_date`</li><li>`to_usage_date`</li></ul> | View usage records without loading all of them at once, for example, return a specified number of records per page. <br/><br/>Parameters used for pagination:<br/><ul><li>`limit`</li><li>`page_token`</li></ul> |

<h3 id="retrieve-a-subscription-usage-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Maximum number of records to return. Used for **pagination**.|
|from_usage_date|query|string(date-time)|false|Filter usage records with a `usage_date` on or after this date and time.|
|to_usage_date|query|string(date-time)|false|Filter usage records with a `usage_date` before this date and time.|
|subscription_id|query|string(uuid)|false|Filter usages by the ID of the subscription.|
|subscription_cycle_id|query|string(uuid)|false|Filter usages by the ID of the subscription cycle.|
|page_token|query|string|false|Token for retrieving the next page of results. Used for **pagination**.<br><br>To paginate through results:<br><br>  1. Make an initial request with the desired `limit`.<br>  1. The response will include a `next_page_token` if more results are available.<br>  1. Use that token in the `page_token` parameter of your next request.<br>  1. Repeat until `next_page_token` is not present.<br><br>:::note<br>When using `page_token`, you must include all query parameters from the initial request (such as `from`, `to`, or other filter parameters) to maintain consistent filtering across pages.<br>:::|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "next_page_token": "9e5d2caa-bb60-4b5b-b7cf-6345bbdff67e",
  "subscription_usages": [
    {
      "id": "750e8400-e29b-41d4-a716-446655440000",
      "subscription_id": "550e8400-e29b-41d4-a716-446655440000",
      "subscription_cycle_id": "850e8400-e29b-41d4-a716-446655440000",
      "subscription_item_code": "api_calls",
      "usage_date": "2026-03-01T21:00:00Z",
      "quantity": 100,
      "metadata": {
        "user_id": "12345",
        "api_version": "v2"
      },
      "created_at": "2026-03-01T21:05:00Z",
      "updated_at": "2026-03-01T21:05:00Z"
    },
    {
      "id": "bc903328-9f37-4d7a-8f56-02e5b7c76891",
      "subscription_id": "550e8400-e29b-41d4-a716-446655440000",
      "subscription_cycle_id": "850e8400-e29b-41d4-a716-446655440000",
      "subscription_item_code": "api_calls",
      "usage_date": "2026-03-01T22:15:00Z",
      "quantity": 50,
      "metadata": {
        "user_id": "12345",
        "api_version": "v2"
      },
      "created_at": "2026-03-01T22:20:00Z",
      "updated_at": "2026-03-01T22:20:00Z"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> default Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-a-subscription-usage-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of subscription usages retrieved successfully|[Subscription-Usages](#schemasubscription-usages)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|
|default|Default|Error response|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Create a subscription usage

<a id="opIdcreateSubscriptionUsage"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/subscription-usages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Idempotency-Key: string' \
  -H 'Revolut-Api-Version: 2026-08-17' \
  -d '{
    "subscription_id": "550e8400-e29b-41d4-a716-446655440000",
    "subscription_item_code": "active_seats",
    "usage_date": "2026-03-15T09:30:00Z",
    "quantity": 12,
    "metadata": {
      "department": "engineering",
      "update_type": "onboarding"
    }
  }'
```

`POST /api/subscription-usages`

Report a unit of consumption against a usage-based subscription item. Revolut accumulates reported records throughout the billing cycle and processes the charge after the cycle's `usage_cutoff_date`.

### Resolve the billing cycle

Revolut automatically identifies the applicable billing cycle from the `usage_date` you provide. The following submission windows are accepted:

| Window | Rule |
| ------ | ---- |
| Active cycle | `usage_date` falls within the current cycle (`start_date ≤ usage_date < end_date`). |
| Past cycle correction | `usage_date` falls within a recently ended cycle, and the request is made before that cycle's `usage_cutoff_date` (12 hours after `end_date` by default). |
| Next upcoming cycle | `usage_date` falls within the one next future cycle. Revolut creates a `pending` cycle to hold the record until it becomes active. |

Any `usage_date` outside these windows causes the request to be rejected.

### How Revolut calculates the charge

After the `usage_cutoff_date` passes, all records for each usage item are aggregated using the method defined on the subscription plan:

| Method | Behaviour |
| ------ | --------- |
| `sum` | Totals all reported values during the cycle. Use for cumulative metrics (e.g., total GB transferred). |
| `latest` | Uses the most recently reported value at the `usage_cutoff_date`. If no usages are reported during the cycle, the charge is 0. Use for gauge-style metrics (e.g., active seat count at month-end). |
| `max` | Uses the highest value reported during the cycle. Use for capacity-based billing (e.g., peak concurrent connections). |

The aggregated total is multiplied by the unit price to produce the final charge.

:::warning
The `Idempotency-Key` header is **required** for this endpoint. Providing a unique idempotency key ensures that duplicate requests due to retries or network issues do not result in duplicate usage records.
:::

> Body parameter

```json
{
  "subscription_id": "550e8400-e29b-41d4-a716-446655440000",
  "subscription_item_code": "active_seats",
  "usage_date": "2026-03-15T09:30:00Z",
  "quantity": 12,
  "metadata": {
    "department": "engineering",
    "update_type": "onboarding"
  }
}
```

<h3 id="create-a-subscription-usage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|true|The `Idempotency-Key` ensures that requests are processed only once, preventing multiple executions of the same operation due to retries or duplicate requests.<br><br>This header is required. It can accept any unique string value the merchant uses.<br><br>A recommended practice is to use a unique identifier from your system (such as the entity's ID or a request UUID) as the idempotency key. This facilitates tracking and managing requests effectively.|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|body|body|[Subscription-Usage-Creation](#schemasubscription-usage-creation)|true|none|
|» subscription_id|body|[Subscription-Id](#schemasubscription-id)|true|Unique identifier for the subscription.|
|» subscription_item_code|body|[Subscription-Item-Code](#schemasubscription-item-code)|true|A merchant-defined identifier for a usage-based subscription item. You set this code on each usage item when creating a subscription plan, and supply it when reporting consumption on [Create a subscription usage endpoint](https://developer.revolut.com/docs/api/merchant#create-subscription-usage) to target the correct metered item.<br><br>This allows a subscription with multiple usage items (e.g., `api_calls` and `storage_gb`) to receive consumption reports against the right item without relying on internal IDs.<br><br>The code must be unique within a plan phase.|
|» usage_date|body|[Subscription-Usage-Date](#schemasubscription-usage-date)|true|The timestamp indicating when the consumption actually occurred.<br><br>\| Constraint \| Detail \|<br>\| ---------- \| ------ \|<br>\| Format \| [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time string (e.g., `YYYY-MM-DDTHH:mm:ssZ`). \|<br>\| Timezone \| Must be UTC. \|<br>\| Validation \| Revolut uses this to identify the applicable billing cycle. Accepted for the active cycle (`start_date ≤ usage_date < end_date`), for a recently ended cycle before its `usage_cutoff_date`, and for the one next upcoming cycle. Other dates are rejected. \||
|» quantity|body|[Subscription-Usage-Quantity](#schemasubscription-usage-quantity)|true|The quantity of consumption to record for this usage report. <br><br>Supports up to 20 digits before and 20 digits after the decimal point.|
|» metadata|body|[Subscription-Usage-Metadata](#schemasubscription-usage-metadata)|false|Key-value pairs you can attach to a usage record for your own tracking and reporting purposes.<br><br>\| Constraint \| Detail \|<br>\| ---------- \| ------ \|<br>\| Keys \| Maximum 50 keys per record. \|<br>\| Value types \| String, number, or boolean only. \|<br>\| Number precision \| Up to 20 digits before and 20 digits after the decimal point. \||

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 201 Response

```json
{
  "id": "750e8400-e29b-41d4-a716-446655440000",
  "subscription_id": "550e8400-e29b-41d4-a716-446655440000",
  "subscription_cycle_id": "850e8400-e29b-41d4-a716-446655440000",
  "subscription_item_code": "api_calls",
  "usage_date": "2026-03-01T21:00:00Z",
  "quantity": 100,
  "metadata": {
    "user_id": "12345",
    "api_version": "v2"
  },
  "created_at": "2026-03-01T21:05:00Z",
  "updated_at": "2026-03-01T21:05:00Z"
}
```

> 400 Response

```json
{
  "code": "subscription_item_code_not_found",
  "message": "Subscription item code 'api_calls' not found for phase",
  "timestamp": 1743465600
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 422 Response

```json
{
  "code": "subscription_finished",
  "message": "Cannot add usage to a finished subscription",
  "timestamp": 1743465600
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> default Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="create-a-subscription-usage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Usage reported successfully|[Subscription-Usage](#schemasubscription-usage)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity (business rule violation)|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|
|default|Default|Error response|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Retrieve a subscription usage

<a id="opIdretrieveSubscriptionUsage"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/subscription-usages/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`GET /api/subscription-usages/{usage_id}`

Retrieve a usage record by its unique identifier.

Use this endpoint to get the details of a specific usage that was reported or updated.

<h3 id="retrieve-a-subscription-usage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|usage_id|path|string(uuid)|true|The ID of the usage record.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "id": "750e8400-e29b-41d4-a716-446655440000",
  "subscription_id": "550e8400-e29b-41d4-a716-446655440000",
  "subscription_cycle_id": "850e8400-e29b-41d4-a716-446655440000",
  "subscription_item_code": "api_calls",
  "usage_date": "2026-03-01T21:00:00Z",
  "quantity": 100,
  "metadata": {
    "user_id": "12345",
    "api_version": "v2"
  },
  "created_at": "2026-03-01T21:05:00Z",
  "updated_at": "2026-03-01T21:05:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> default Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-a-subscription-usage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Usage record retrieved successfully|[Subscription-Usage](#schemasubscription-usage)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|404|Not Found|Usage not found|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|
|default|Default|Error response|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Delete a subscription usage

<a id="opIddeleteSubscriptionUsage"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/subscription-usages/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`DELETE /api/subscription-usages/{usage_id}`

Delete a subscription usage record. This operation is only permitted while the billing cycle is still open.

<h3 id="delete-a-subscription-usage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|usage_id|path|string(uuid)|true|The ID of the usage record.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 422 Response

```json
{
  "code": "subscription_usage_locked",
  "message": "Cannot modify usage for a locked cycle",
  "timestamp": 1743465600
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> default Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="delete-a-subscription-usage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Usage deleted successfully|None|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Usage not found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity (business rule violation)|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|
|default|Default|Error response|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Update a subscription usage

<a id="opIdupdateSubscriptionUsage"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/subscription-usages/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17' \
  -d '{
    "quantity": 150
  }'
```

`PATCH /api/subscription-usages/{usage_id}`

Update the quantity or metadata of a subscription usage record.

> Body parameter

```json
{
  "quantity": 150
}
```

<h3 id="update-a-subscription-usage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|usage_id|path|string(uuid)|true|The ID of the usage record.|
|body|body|[Subscription-Usage-Update](#schemasubscription-usage-update)|true|none|
|» quantity|body|[Subscription-Usage-Quantity](#schemasubscription-usage-quantity)|false|The quantity of consumption to record for this usage report. <br><br>Supports up to 20 digits before and 20 digits after the decimal point.|
|» metadata|body|[Subscription-Usage-Metadata](#schemasubscription-usage-metadata)|false|Key-value pairs you can attach to a usage record for your own tracking and reporting purposes.<br><br>\| Constraint \| Detail \|<br>\| ---------- \| ------ \|<br>\| Keys \| Maximum 50 keys per record. \|<br>\| Value types \| String, number, or boolean only. \|<br>\| Number precision \| Up to 20 digits before and 20 digits after the decimal point. \||

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "id": "750e8400-e29b-41d4-a716-446655440000",
  "subscription_id": "550e8400-e29b-41d4-a716-446655440000",
  "subscription_cycle_id": "850e8400-e29b-41d4-a716-446655440000",
  "subscription_item_code": "api_calls",
  "usage_date": "2026-03-01T21:00:00Z",
  "quantity": 100,
  "metadata": {
    "user_id": "12345",
    "api_version": "v2"
  },
  "created_at": "2026-03-01T21:05:00Z",
  "updated_at": "2026-03-01T21:05:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 422 Response

```json
{
  "code": "subscription_usage_locked",
  "message": "Cannot modify usage for a locked cycle",
  "timestamp": 1743465600
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> default Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="update-a-subscription-usage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Usage updated successfully|[Subscription-Usage](#schemasubscription-usage)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Usage not found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity (business rule violation)|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|
|default|Default|Error response|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

<h1 id="merchant-api-payouts">Payouts</h1>

Endpoints for retrieving information about payouts, allowing merchants to access details of funds withdrawn from their Merchant account to external bank accounts.

Merchants can use these endpoints to retrieve a list of payouts and specific payout details. The payout IDs obtained can be used to [generate detailed reports](https://developer.revolut.com/docs/api/merchant/2024-09-01#tag-report-runs) that provide comprehensive breakdowns of all transactions contributing to the payout amounts.

Payout information, including IDs, can be retrieved via the [Retrieve payout list](https://developer.revolut.com/docs/api/merchant/2024-09-01#retrieve-payout-list) endpoint or from [webhook events related to payouts](https://developer.revolut.com/docs/api/merchant/2024-09-01#webhook-webhook-event).

## Retrieve a payout list

<a id="opIdretrievePayoutList"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/payouts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`GET /api/payouts`

Retrieve all the payouts you made from your Merchant account. You can also use the query parameters for:

  | Filtering | Pagination |
  | --------- | ---------- |
  | Filter the orders that you want to retrieve, for example, only retrieve the orders that have a specific email. <br/><br/>Parameters used for filtering:<br/><ul><li>`from_created_date`</li><li>`to_created_date`</li><li>`currency`</li><li>`state`</li></ul> | View the orders without loading all of them at once, for example, return a specified number of orders per page. <br/><br/>Parameters used for pagination: <br/><ul><li>`limit`</li></ul> |

<h3 id="retrieve-a-payout-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|currency|query|string|false|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|limit|query|integer|false|The maximum number of payouts returned per page. Used for **pagination**.|
|from_created_date|query|string(date-time)|false|Retrieve records with a `created_at` value ≥ `from_created_date`.<br><br>Use the [ISO 8601 date-time format](https://en.wikipedia.org/wiki/ISO_8601): `yyyy-MM-ddTHH:mm:ss[.SSSSSS]Z`.|
|to_created_date|query|string(date-time)|false|Retrieve records with a `created_at` value ≤ `to_created_date`.<br><br>Use the [ISO 8601 date-time format](https://en.wikipedia.org/wiki/ISO_8601): `yyyy-MM-ddTHH:mm:ss[.SSSSSS]Z`.|
|state|query|[[Payout-State](#schemapayout-state)]|false|Filter payouts by state. Repeat the parameter to filter by multiple states.|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|processing|
|state|completed|
|state|failed|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 201 Response

```json
[
  {
    "id": "a830020e-090c-4717-836d-37941a27ad12",
    "state": "completed",
    "created_at": "2024-02-27T00:16:39.079285Z",
    "destination_type": "current_pocket",
    "amount": 50000,
    "currency": "GBP"
  },
  {
    "id": "66ffee42-7c4a-a15c-9a47-5dc67150386f",
    "state": "processing",
    "created_at": "2024-02-26T17:16:39.079285Z",
    "destination_type": "external_beneficiary",
    "amount": 10000,
    "currency": "GBP"
  }
]
```

> 400 Response

```json
{
  "code": "bad_request",
  "message": "Could not parse JSON",
  "timestamp": 1721049596461
}
```

> 401 Response

```json
{
  "code": "unauthenticated",
  "message": "Authentication failed",
  "timestamp": 1721049596461
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-a-payout-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Payouts retrieved|Inline|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<h3 id="retrieve-a-payout-list-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Payout](#schemapayout)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Retrieve a payout

<a id="opIdretrievePayout"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/payouts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`GET /api/payouts/{payout_id}`

Retrieve the details of a payout. Provide the unique payout ID, and the corresponding payout information is returned.

<h3 id="retrieve-a-payout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|payout_id|path|string(uuid)|true|The ID of the `Payout` object.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "id": "a830020e-090c-4717-836d-37941a27ad12",
  "state": "completed",
  "created_at": "2024-02-27T00:16:39.079285Z",
  "destination_type": "current_pocket",
  "amount": 50000,
  "currency": "GBP"
}
```

> 400 Response

```json
{
  "code": "bad_request",
  "message": "Missing Revolut-Api-Version header",
  "timestamp": 1721049596461
}
```

> 401 Response

```json
{
  "code": "unauthenticated",
  "message": "Authentication failed",
  "timestamp": 1721049596461
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "The requested resource is not found",
  "timestamp": 1721050063886
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-a-payout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payout retrieved|[Payout](#schemapayout)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

<h1 id="merchant-api-disputes">Disputes</h1>

Endpoints that allow merchants to view customer payment disputes.

 It provides a robust framework with high-level states (e.g., `won`, `lost`, `needs_response`, `under_review`) and detailed substates (e.g., `lost_expired`, `pre_arbitration`, `won_pre_arbitration`, etc.) to accurately track the dispute lifecycle. 
 
 Additionally, the API integrates standard dispute reason codes and human-readable descriptions, offering a customisable approach to dispute resolution that facilitates effective dispute management.

## Retrieve a dispute list

<a id="opIdretrieveDisputeList"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/disputes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`GET /api/disputes`

Retrieve a list of disputes associated with your merchant account. 

:::note
This endpoint is only available in **Production** environment.
:::

You can also use the query parameters for:
  
  | Filtering | Pagination |
  | --------- | ---------- |
  | Filter the diputes that you want to retrieve, for example, only retrieve the disputes that have a specific state. <br/><br/>Parameters used for filtering:<br/><ul><li>`from_created_date`</li><li>`to_created_date`</li><li>`payment_id`</li><li>`state`</li></ul> | View the disputes without loading all of them at once, for example, return a specified number of disputes per page. <br/><br/>Parameters used for pagination: <br/><ul><li>`limit`</li><li>`from_created_date` or `to_created_date`</li></ul> |

<h3 id="retrieve-a-dispute-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Maximum number of records to return. Used for **pagination**.|
|from_created_date|query|string(date-time)|false|Retrieve records with a `created_at` value ≥ `from_created_date`.<br><br>Use the [ISO 8601 date-time format](https://en.wikipedia.org/wiki/ISO_8601): `yyyy-MM-ddTHH:mm:ss[.SSSSSS]Z`.|
|to_created_date|query|string(date-time)|false|Retrieve records with a `created_at` value ≤ `to_created_date`.<br><br>Use the [ISO 8601 date-time format](https://en.wikipedia.org/wiki/ISO_8601): `yyyy-MM-ddTHH:mm:ss[.SSSSSS]Z`.|
|state|query|[string]|false|Filter disputes by state. Repeat the parameter to filter by multiple states.<br><br>\| Value \| Description \|<br>\|-------\|-------------\|<br>\| `needs_response` \| Dispute requires your response \|<br>\| `under_review` \| Dispute is being reviewed \|<br>\| `won` \| Dispute resolved in your favour \|<br>\| `lost` \| Dispute resolved against you \|<br><br>The parameter is case sensitive.|
|payment_id|query|[string(uuid)]|false|Filter disputes by the ID of the associated payment. Repeat the parameter to filter by multiple payment IDs.<br><br>```<br>https://merchant.revolut.com/api/disputes?payment_id=123&payment_id=456<br>```|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|needs_response|
|state|under_review|
|state|won|
|state|lost|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
[
  {
    "id": "ab934829-e4ba-4e7f-8a21-365cad85c763",
    "state": "under_review",
    "substate": "arbitration",
    "created_at": "2024-06-13T12:06:18.732706Z",
    "updated_at": "2024-09-12T22:27:10.005680Z",
    "response_due_date": "2024-10-12T22:27:10.005625Z",
    "reason_code": "50",
    "reason_description": "Fraud",
    "amount": 50,
    "currency": "EUR",
    "payment": {
      "id": "6666f6c7-3898-a094-9c83-dc0152e0185c",
      "order_id": "6666f685-46a7-a7b9-9860-a28a4f3495a4",
      "created_at": "2024-06-10T12:51:19.960490Z",
      "amount": 50,
      "currency": "EUR",
      "payment_method": {
        "type": "revolut_pay_account"
      }
    }
  },
  {
    "id": "340b85dc-da99-4c5f-9d47-37a45d52a455",
    "state": "lost",
    "substate": "lost_expired",
    "created_at": "2024-09-11T21:20:05.659978Z",
    "updated_at": "2024-09-12T22:35:31.721921Z",
    "response_due_date": "2024-09-22T22:35:31.721860Z",
    "reason_code": "12.4",
    "reason_description": "Incorrect Account Number",
    "amount": 40,
    "currency": "EUR",
    "payment": {
      "id": "66e1fc66-7606-a7fb-b2e8-b48fb637783a",
      "order_id": "66e1fc4d-5cbe-a692-80aa-1cb912291d55",
      "created_at": "2024-09-11T20:24:06.271746Z",
      "amount": 40,
      "currency": "EUR",
      "payment_method": {
        "type": "card",
        "card_brand": "visa",
        "card_last_four": "1234"
      }
    }
  },
  {
    "id": "e9b5472b-7308-4aea-86a0-d4427bc04c24",
    "state": "lost",
    "substate": "lost_pre_arbitration",
    "created_at": "2026-05-22T09:00:00Z",
    "updated_at": "2026-05-22T10:15:00Z",
    "response_due_date": "2030-12-15T00:00:00Z",
    "reason_code": "OTHER",
    "reason_description": "merchant_dispute",
    "amount": 91700,
    "currency": "GBP",
    "payment": {
      "id": "6a0f2bc4-2137-a1ad-9eb6-b34cf4ca6597",
      "order_id": "2bcaf93a-aa87-4d3d-b5c6-62e06051cff2",
      "created_at": "2026-05-21T15:59:00.451602Z",
      "amount": 1000,
      "currency": "GBP",
      "payment_method": {
        "type": "sepa_direct_debit",
        "debtor_iban_last_four": "3273",
        "debtor_name": "John Doe",
        "mandate_reference": "69F1CB61BD99A32C8E20D7FB9E21E146"
      }
    }
  }
]
```

> 400 Response

```json
{
  "code": "validation",
  "message": "limit must be between 1 and 500",
  "timestamp": 1601296792533
}
```

> 401 Response

```json
{
  "code": "unauthenticated",
  "message": "Authentication failed",
  "timestamp": 1721049596461
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-a-dispute-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of disputes retrieved|[Disputes](#schemadisputes)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Retrieve a dispute

<a id="opIdretrieveDispute"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/disputes/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`GET /api/disputes/{dispute_id}`

Retrieve the details of a specific dispute by its ID.

:::note
This endpoint is only available in **Production** environment.
:::

<h3 id="retrieve-a-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|dispute_id|path|string(uuid)|true|The ID of the `Dispute` object.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "id": "fccc53e9-00e0-4847-9d54-6938e9cdd3ef",
  "state": "lost",
  "substate": "lost_accepted",
  "created_at": "2025-03-12T07:00:00.000000Z",
  "updated_at": "2025-03-13T10:00:00.000000Z",
  "response_due_date": "2025-03-15T12:00:00.000000Z",
  "reason_code": "50",
  "reason_description": "Fraud",
  "amount": 1500,
  "currency": "EUR",
  "payment": {
    "id": "67810850-4c48-a25d-8765-d03d36ca6719",
    "order_id": "38bd1186-a276-4b14-91b4-5da886481f85",
    "created_at": "2025-01-02T10:00:00Z",
    "arn": "P58PC241502Q7800000000A",
    "amount": 3000,
    "currency": "EUR",
    "payment_method": {
      "type": "card",
      "card_brand": "visa",
      "card_last_four": "1234"
    }
  }
}
```

> 400 Response

```json
{
  "code": "bad_request",
  "message": "Missing Revolut-Api-Version header",
  "timestamp": 1601296792533
}
```

> 401 Response

```json
{
  "code": "unauthenticated",
  "message": "Authentication failed",
  "timestamp": 1721049596461
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "The requested resource is not found",
  "timestamp": 1721050063886
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-a-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Dispute](#schemadispute)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Accept a dispute

<a id="opIdacceptDispute"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/disputes/497f6eca-6276-4993-bfeb-53cbbbba6f08/accept \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`POST /api/disputes/{dispute_id}/accept`

Marks a specific dispute as accepted.

After accepting a dispute, you cannot challenge it.

:::note
This endpoint is only available in **Production** environment.
:::

<h3 id="accept-a-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|dispute_id|path|string(uuid)|true|The ID of the `Dispute` object.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 400 Response

```json
{
  "code": "bad_request",
  "message": "Missing Revolut-Api-Version header",
  "timestamp": 1601296792533
}
```

> 401 Response

```json
{
  "code": "unauthenticated",
  "message": "Authentication failed",
  "timestamp": 1721049596461
}
```

> 403 Response

```json
{
  "code": "not_found",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "The requested resource is not found",
  "timestamp": 1721050063886
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="accept-a-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Dispute accepted successfully|None|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Upload evidence for a dispute

<a id="opIduploadDisputeEvidence"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/disputes/497f6eca-6276-4993-bfeb-53cbbbba6f08/evidences \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17' \
  -F 'file=@/path/to/file'
```

`POST /api/disputes/{dispute_id}/evidences`

Allows uploading a single evidence file for a specific dispute.

Use these evidences to provide proof for claims when challenging a dispute.

:::warning
**Limitations:**
  - Maximum `100` uploaded files are allowed per dispute.
  - Maximum file size: `10MB`.
  - Allowed file types: `PDF`, `PNG`, `JPEG`.
:::

:::note
This endpoint is only available in **Production** environment.
:::

> Body parameter

```yaml
file: "<binary file content>"
```

<h3 id="upload-evidence-for-a-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|Content-Type|header|string|true|The content type sent in the request.|
|dispute_id|path|string(uuid)|true|The ID of the `Dispute` object.|
|body|body|[Dispute-Evidence-Creation](#schemadispute-evidence-creation)|true|none|
|» file|body|string(binary)|true|The single evidence file to upload, sent as a multipart form part named `file`.<br><br>The part must include a `Content-Type` header specifying the media type of the file. Allowed types: `application/pdf`, `image/png`, `image/jpeg`.<br><br>Maximum file size: `10MB`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "id": "121ac27c-b00a-44d0-9120-efeeec7c912d"
}
```

> 400 Response

```json
{
  "code": "bad_request",
  "message": "Missing Revolut-Api-Version header",
  "timestamp": 1601296792533
}
```

> 401 Response

```json
{
  "code": "unauthenticated",
  "message": "Authentication failed",
  "timestamp": 1721049596461
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "The requested resource is not found",
  "timestamp": 1721050063886
}
```

> 413 Response

```json
{
  "code": "max_uploaded_file_size_limit_exceeded",
  "message": "The uploaded file exceeds the maximum allowed size of 10MB",
  "timestamp": 1721050000000
}
```

> 415 Response

```json
{
  "code": "unsupported_media_type",
  "message": "The uploaded file type is not supported. Allowed types: PDF, PNG, JPEG",
  "timestamp": 1721050000000
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="upload-evidence-for-a-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Evidence uploaded successfully|[Dispute-Evidence](#schemadispute-evidence)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|413|Payload Too Large|Request Entity Too Large|[Error-v2](#schemaerror-v2)|
|415|Unsupported Media Type|Unsupported Media Type|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Challenge a dispute

<a id="opIdchallengeDispute"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/disputes/497f6eca-6276-4993-bfeb-53cbbbba6f08/challenge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17' \
  -d '{
    "reason": "refund_already_issued",
    "evidences": [
      "121ac27c-b00a-44d0-9120-efeeec7c912d"
    ]
  }'
```

`POST /api/disputes/{dispute_id}/challenge`

Allows challenging a dispute with a reason, comment and associated evidences.

Use the uploaded evidences to provide proof for the challenge.

A dispute previously accepted, cannot be challenged.

:::note
This endpoint is only available in **Production** environment.
:::

> Body parameter

```json
{
  "reason": "refund_already_issued",
  "evidences": [
    "121ac27c-b00a-44d0-9120-efeeec7c912d"
  ]
}
```

<h3 id="challenge-a-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|dispute_id|path|string(uuid)|true|The ID of the `Dispute` object.|
|body|body|[Dispute-Challenge](#schemadispute-challenge)|true|none|
|» reason|body|[Dispute-Challenge-Reason](#schemadispute-challenge-reason)|true|The reason for challenging the dispute.|
|» comment|body|[Dispute-Challenge-Comment](#schemadispute-challenge-comment)|false|Additional explanation or comment for the challenge, if needed.|
|» evidences|body|[Dispute-Challenge-Evidences](#schemadispute-challenge-evidences)|true|A list of IDs of previously uploaded evidence files to associate with this challenge.<br><br>:::warning<br>Each evidence ID can only be used for **a single challenge**. This means, that evidences already assigned to a challenge **cannot be reused** for other challenges.<br>:::|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|
|» reason|product_already_delivered|
|» reason|refund_already_issued|
|» reason|disagree_with_customers_claim|

> Example responses

> 400 Response

```json
{
  "code": "bad_request",
  "message": "Missing Revolut-Api-Version header",
  "timestamp": 1601296792533
}
```

> 401 Response

```json
{
  "code": "unauthenticated",
  "message": "Authentication failed",
  "timestamp": 1721049596461
}
```

> 403 Response

```json
{
  "code": "not_found",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "The requested resource is not found",
  "timestamp": 1721050063886
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="challenge-a-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Dispute challenged successfully|None|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

<h1 id="merchant-api-report-runs">Report runs</h1>

Use **Report runs** operations to generate CSV reports of your Merchant account transactions. Choose from the following report types based on your use case:

| Report type | Description |
| ----------- | ----------- |
| `custom_report` | Settled and processing transactions with a configurable set of columns. |
| `settlement_report` | All settled transactions, with a configurable set of columns. |
| `payments_report` | All payments, including failed and declined ones. |
| `payout_statement_report` | All transactions that contributed to a specific payout. |
| `icpp_fee_breakdown_report` | IC++ fee components broken down per transaction for a specific IC++ charge. |

:::info
For more information about how to generate CSV reports, see: [Create CSV reports of transactions](https://developer.revolut.com/docs/guides/merchant/monitor-and-observe/reports-reconciliation).
:::

## Create a report run

<a id="opIdcreateReportRun"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/report-runs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filter": {
      "from": "2020-01-01T00:00:00Z",
      "to": "2020-01-02T00:00:00Z",
      "entity_types": [
        "payment"
      ],
      "entity_states": [
        "completed",
        "processing"
      ]
    },
    "format": "csv",
    "type": "custom_report",
    "options": {
      "timezone": "Europe/London",
      "columns": [
        "transaction_id",
        "amount",
        "currency",
        "metadata.custom_attribute"
      ]
    }
  }'
```

`POST /api/report-runs`

Start generating a report of all transactions that match the filter and options specified in the request body.

Use the returned `report_run_id` and the [Retrieve report run details](https://developer.revolut.com/docs/api/merchant#retrieve-report-run) operation to check the status of the generation.

After generation is done, use the [Download report file](https://developer.revolut.com/docs/api/merchant#download-report-file) operation to retrieve the CSV. The `file_url` in the completed report run object is the request URL for that endpoint and requires the same authorisation as any other Merchant API request. 

### Report types

The table below helps to choose the right report type for your use case:

| Report type | What it covers |
| ----------- | -------------- |
| `custom_report` | Settled and processing transactions with configurable columns |
| `settlement_report` | All settled transactions, with a configurable set of columns |
| `payments_report` | All payments including failed and declined ones |
| `payout_statement_report` | All transactions contributing to a specific payout |
| `icpp_fee_breakdown_report` | IC++ fees per transaction for a specific IC++ charge |

### IDs across report types

Each report type uses a different primary ID, depending on which system the data comes from:

| ID column | System | Report types |
| --------- | ------ | ------------ |
| `payment_id`, `id` | **Acquiring system** - identifies a payment attempt | `payments_report`, `icpp_fee_breakdown_report` |
| `transaction_id` | **Core ledger** - identifies the settlement entry created when a payment is captured | `settlement_report`, `payout_statement_report`, `custom_report` |
| `order_id` | **Both systems** - bridges the acquiring and ledger perspectives | `settlement_report`, `payments_report`, `payout_statement_report`, `custom_report` |

> Body parameter

```json
{
  "filter": {
    "from": "2020-01-01T00:00:00Z",
    "to": "2020-01-02T00:00:00Z",
    "entity_types": [
      "payment"
    ],
    "entity_states": [
      "completed",
      "processing"
    ]
  },
  "format": "csv",
  "type": "custom_report",
  "options": {
    "timezone": "Europe/London",
    "columns": [
      "transaction_id",
      "amount",
      "currency",
      "metadata.custom_attribute"
    ]
  }
}
```

<h3 id="create-a-report-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|body|body|[Report-Run-Settlement-Report](#schemareport-run-settlement-report) \| [Report-Run-Custom-Report](#schemareport-run-custom-report) \| [Report-Run-Payments-Report](#schemareport-run-payments-report) \| [Report-Run-Payout-Report](#schemareport-run-payout-report) \| [Report-Run-Icpp-Report](#schemareport-run-icpp-report)|false|none|
|» *oneOf*|body|[Report-Run-Settlement-Report](#schemareport-run-settlement-report)|false|A settlement report contains all the query information for generating reports of settled transactions associated with a Merchant account.|
|» *oneOf*|body|[Report-Run-Custom-Report](#schemareport-run-custom-report)|false|A custom report contains all the query information for generating reports of selected transactions associated with a Merchant account.|
|» *oneOf*|body|[Report-Run-Payments-Report](#schemareport-run-payments-report)|false|A payments report contains all the query information for generating reports of payments associated with a Merchant account, including failed and declined payments.|
|» *oneOf*|body|[Report-Run-Payout-Report](#schemareport-run-payout-report)|false|A payout statement report contains all the query information for generating reports of a selected payout associated with a Merchant account.|
|» *oneOf*|body|[Report-Run-Icpp-Report](#schemareport-run-icpp-report)|false|A IC++ fee breakdown report contains all the query information for generating reports of fees for each IC++ transaction related to a payout.|

> Example responses

> 201 Response

```json
{
  "report_run_id": "d6f6ef64-f668-4e64-8967-1cdf8afb2561",
  "status": "processing"
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="create-a-report-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Report run created, report started generating|[Report-Run](#schemareport-run)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Retrieve a report run

<a id="opIdretrieveReportRun"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/report-runs/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/report-runs/{report_run_id}`

Retrieve details of a report run, based on the `report_run_id`. 

Use this method to check the status of a report run.

If a report run's `status` is `completed`, the report file can be downloaded using the `file_url` for 24 hours after report generation finishes.

Once that 24-hour window elapses, the report run remains retrievable but transitions to `expired`, and the file can no longer be downloaded.

<h3 id="retrieve-a-report-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|report_run_id|path|string(uuid)|true|Unique ID of the report run.|

> Example responses

> 200 Response

```json
{
  "report_run_id": "d6f6ef64-f668-4e64-8967-1cdf8afb2561",
  "status": "processing"
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-a-report-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Report run found|[Report-Run](#schemareport-run)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Download report file

<a id="opIddownloadReportFile"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/report-runs/497f6eca-6276-4993-bfeb-53cbbbba6f08/file \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/report-runs/{report_run_id}/file`

Use this endpoint to download the generated report file.

A generated report file is available for 24 hours after report generation finishes. After that, the report run becomes `expired` and the file can no longer be downloaded.

The response is a raw `text/csv` file. The first row contains the column headers. The columns included depend on the report type used when creating the report run, and the `options.columns` list if specified.

### IDs across report types

Revolut uses two separate ID systems across report types:

| ID column | System | Report types |
| --------- | ------ | ------------ |
| `payment_id`, `id` | **Acquiring system** - identifies a payment attempt | `payments_report`, `icpp_fee_breakdown_report` |
| `transaction_id` | **Core ledger** - identifies the settlement entry created when a payment is captured | `settlement_report`, `payout_statement_report`, `custom_report` |
| `order_id` | **Both systems** - bridges the acquiring and ledger perspectives | `settlement_report`, `payments_report`, `payout_statement_report`, `custom_report` |

:::tip
A payment and its resulting ledger transaction represent the same event but have **different UUIDs**. To reconcile `payments_report` data against `settlement_report` data, join on `order_id`.
:::

Use the schema selector below to see the available columns for each report type.

<h3 id="download-report-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|report_run_id|path|string(uuid)|true|Unique ID of the report run.|

> Example responses

> 200 Response

```text
transaction_id,order_id,original_order_id,started_date,updated_date,completed_date,payment_created_date,payment_captured_date,type,state,description,merchant_order_ext_ref,customer_id,amount,currency,settlement_amount,settlement_currency,payment_method,fee_amount,fee_currency,processing_fee_amount,processing_fee_currency,browser_url,location_id
67f66fa6-200c-aaef-8708-cb78366f8a30,67f66f41-3022-a623-827e-e0616c0d04e7,67f66f41-3022-a623-827e-e0616c0d04e7,2025-04-09T13:01:26.288638Z,2025-04-10T13:02:09.843018Z,2025-04-10T13:02:09.837719Z,2025-04-09T13:01:26.186Z,2025-04-10T13:02:09.837719Z,SETTLEMENT,COMPLETED,Summer hat,ORD-2025-0042,,100.00,GBP,99.00,GBP,CARD,1.00,GBP,1.00,GBP,https://sandbox-checkout.revolut.com/payment-link/1ae44a1c-3ea8-47ac-b736-7d7d4c992bb4,
67f66fb7-300d-bbff-9819-dc89477a9b41,67f67052-4133-b734-938f-f1727d1e15f8,67f66f41-3022-a623-827e-e0616c0d04e7,2025-04-10T09:10:00.000000Z,2025-04-10T09:12:00.000000Z,2025-04-10T09:12:00.000000Z,,,REFUND,COMPLETED,Refund for Summer hat,ORD-2025-0042-R1,,25.00,GBP,-25.00,GBP,CARD,0.00,GBP,0.00,GBP,https://sandbox-checkout.revolut.com/payment-link/1ae44a1c-3ea8-47ac-b736-7d7d4c992bb4,
67f66fc8-411e-cc10-a92a-ed9a588b0c52,67f67063-5244-c845-a49a-a2838e2f26a9,67f66f41-3022-a623-827e-e0616c0d04e7,2025-04-11T08:30:00.000000Z,2025-04-11T08:45:00.000000Z,2025-04-11T08:45:00.000000Z,,,CHARGEBACK,COMPLETED,Chargeback for Summer hat,ORD-2025-0042-CB1,,75.00,GBP,-75.00,GBP,CARD,0.00,GBP,0.00,GBP,https://sandbox-checkout.revolut.com/payment-link/1ae44a1c-3ea8-47ac-b736-7d7d4c992bb4,
67f66fd9-522f-dd21-ba3b-feab699a1d63,67f67074-6355-d956-b50a-a3949f3a37a0,67f66f41-3022-a623-827e-e0616c0d04e7,2025-04-15T10:00:00.000000Z,2025-04-15T10:05:00.000000Z,2025-04-15T10:05:00.000000Z,,,CHARGEBACK_REVERSAL,COMPLETED,Chargeback reversal for Summer hat,ORD-2025-0042-CBR1,,75.00,GBP,75.00,GBP,CARD,0.00,GBP,0.00,GBP,https://sandbox-checkout.revolut.com/payment-link/1ae44a1c-3ea8-47ac-b736-7d7d4c992bb4,
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="download-report-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<h3 id="download-report-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Report-Run-Csv-Settlement](#schemareport-run-csv-settlement)|false|none|CSV output for `settlement_report`. Contains settled transactions associated with a Merchant account.<br><br>The first row is a header row with column names. Subsequent rows contain transaction data, one row per transaction.<br><br>A partial-settlement is represented by separate `SETTLEMENT` and `REFUND` rows instead of a dedicated type.<br><br>:::note<br>The actual response is a raw `text/csv` string. The object schema below is a documentation convention only: OpenAPI's schema language (JSON Schema) describes JSON data shapes and has no native construct for typed CSV columns, so each property here corresponds to a CSV column header rather than a JSON field.<br>:::|
|*oneOf*|[Report-Run-Csv-Custom](#schemareport-run-csv-custom)|false|none|CSV output for `custom_report` report type. Contains settled and processing transactions with a configurable set of columns.<br><br>The first row is a header row with column names. Subsequent rows contain transaction data, one row per transaction.<br><br>The columns included in the response depend on the `options.columns` list specified in the request. If no columns list was provided, all available columns are included.<br><br>Custom metadata columns can also be requested using the `metadata.` prefix, for example `metadata.custom_attribute`.<br><br>:::note<br>The actual response is a raw `text/csv` string. The object schema below is a documentation convention only: OpenAPI's schema language (JSON Schema) describes JSON data shapes and has no native construct for typed CSV columns, so each property here corresponds to a CSV column header rather than a JSON field.<br>:::|
|*oneOf*|[Report-Run-Csv-Payments](#schemareport-run-csv-payments)|false|none|CSV output for `payments_report` report type. Contains all payments including failed and declined ones.<br><br>The first row is a header row with column names. Subsequent rows contain payment data, one row per payment.<br><br>For failed and declined payments, `fee_amount` and `fee_currency` are omitted. For payments made without a card, card-related columns are omitted.<br><br>:::note<br>The actual response is a raw `text/csv` string. The object schema below is a documentation convention only: OpenAPI's schema language (JSON Schema) describes JSON data shapes and has no native construct for typed CSV columns, so each property here corresponds to a CSV column header rather than a JSON field.<br>:::|
|*oneOf*|[Report-Run-Csv-Payout](#schemareport-run-csv-payout)|false|none|CSV output for `payout_statement_report` report type. Contains all transactions that contributed to a specific payout.<br><br>The first row is a header row with column names. Subsequent rows contain transaction data, one row per transaction.<br><br>:::note<br>The actual response is a raw `text/csv` string. The object schema below is a documentation convention only: OpenAPI's schema language (JSON Schema) describes JSON data shapes and has no native construct for typed CSV columns, so each property here corresponds to a CSV column header rather than a JSON field.<br>:::|
|*oneOf*|[Report-Run-Csv-Icpp](#schemareport-run-csv-icpp)|false|none|CSV output for `icpp_fee_breakdown_report` report type. Contains IC++ fee components broken down per transaction for a specific IC++ charge.<br><br>The first row is a header row with column names. Subsequent rows contain one row per transaction.<br><br>`card_interchange_fee_amount` and `card_scheme_fee_amount` are omitted for Revolut Pay transactions.<br><br>:::note<br>The actual response is a raw `text/csv` string. The object schema below is a documentation convention only: OpenAPI's schema language (JSON Schema) describes JSON data shapes and has no native construct for typed CSV columns, so each property here corresponds to a CSV column header rather than a JSON field.<br><br>`payment_method` in this report returns `REVOLUT_PAY` for Revolut Pay transactions. Other reports use `PAY_WITH_REVOLUT` for the same payment method.<br>:::|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

<h1 id="merchant-api-webhooks">Webhooks</h1>

A `webhook` (also called a web callback) allows your system to receive an event from a different app immediately after it happens. 

For example, you can subscribe to a webhook when an order changes from `pending` to `completed` status. When the payment is cleared and the order is completed, Revolut servers send a notification to the URL of your choice. This is a more efficient way to know when an order is paid as opposed to trying to get the status of the order every few seconds.

Many events that happen to a Revolut Merchant account are synchronous, which means they arrive instantly and have immediate results. For example, a successful request to create a customer immediately returns a `Customer` object. Such requests don't require webhooks.

The Revolut Merchant API supports webhooks for events including `ORDER_COMPLETED` and `ORDER_AUTHORISED`.

:::note
Because we cannot guarantee the delivery order of the status (`events`), you might receive the status not in the expected order. Make sure that your implementation does not rely on the order that the events are being received in.
:::

For example, for a completed order, you should receive the `ORDER_AUTHORISED` status first and then `ORDER_COMPLETED`. However, if the `ORDER_AUTHORISED` status isn't sent successfully at first, it's moved to the queue to be resent in the next few minutes. Before then, if the `ORDER_COMPLETED` status is sent successfully, you get `ORDER_COMPLETED` first and then `ORDER_AUTHORISED`.

Check out our tutorial for [Using webhooks to keep track of the payment lifecycle](https://developer.revolut.com/docs/guides/merchant/monitor-and-observe/webhooks/using-webhooks).

:::info
For more information about the order and payment lifecycle, see: [Order and payment lifecycle](https://developer.revolut.com/docs/guides/merchant/reference/order-lifecycle).
:::

## Retrieve a webhook list

<a id="opIdretrieveWebhookList"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`GET /api/webhooks`

Get a list of webhooks that you are currently subscribed to.

<h3 id="retrieve-a-webhook-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>This endpoint is available from version `2024-09-01`. If a version earlier than `2024-09-01` is provided, the endpoint returns a `404` response.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "webhooks": [
    {
      "id": "6fc8db62-6489-4470-a9e0-84b462fe3908",
      "url": "https://revolut.com/webhooks",
      "events": [
        "ORDER_COMPLETED"
      ]
    },
    {
      "id": "b466ab77-4932-4850-beb0-113bfc1166f8",
      "url": "https://business.revolut.com/webhooks",
      "events": [
        "ORDER_COMPLETED",
        "ORDER_AUTHORISED"
      ]
    },
    {
      "id": "c6b981f4-53b3-47d5-9b24-4f87af1160eb",
      "url": "https://example.com/webhooks",
      "events": [
        "ORDER_AUTHORISED",
        "ORDER_COMPLETED"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-a-webhook-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Webhooks](#schemawebhooks)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Create a webhook

<a id="opIdcreateWebhook"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17' \
  -d '{
    "url": "https://example.com/webhooks",
    "events": [
      "ORDER_COMPLETED",
      "ORDER_AUTHORISED"
    ]
  }'
```

`POST /api/webhooks`

Set up a webhook URL so that the Merchant API can push event notifications to the specified URL.

Events are delivered to the `url` provided in the request body - see the [Webhook event](https://developer.revolut.com/docs/api/merchant#webhook-webhook-event) operation for the payload schema.

:::warning
Merchants can register a **maximum of 10 webhook URLs**. If you attempt to register more than 10, the API will return a `422 - Unprocessable Content` error.

Ensure your webhook registrations are necessary and within the allowed limit.
:::

> Body parameter

```json
{
  "url": "https://example.com/webhooks",
  "events": [
    "ORDER_COMPLETED",
    "ORDER_AUTHORISED"
  ]
}
```

<h3 id="create-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>This endpoint is available from version `2024-09-01`. If a version earlier than `2024-09-01` is provided, the endpoint returns a `404` response.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|body|body|[Webhook-Creation](#schemawebhook-creation)|false|none|
|» url|body|[Webhook-Url](#schemawebhook-url)|true|Your webhook's URL to which event notifications will be sent. <br><br>Must be a valid HTTP or HTTPS URL, capable of receiving `POST` requests.<br><br>:::warning<br>Restrictions:<br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be either `http` or `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `2000`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::|
|» events|body|[Webhook-Events](#schemawebhook-events)|true|List of event types that the webhook is configured to listen to.<br><br>Each event is related to status changes of a specific object in the Merchant API:<br><br>  \| Object \| Event types \|<br>  \| --------- \| ----------- \|<br>  \| `Order`   \| <ul> <li>`ORDER_COMPLETED`</li> <li>`ORDER_AUTHORISED`</li> <li>`ORDER_CANCELLED`</li> <li>`ORDER_FAILED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_DECLINED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_FAILED`</li> </ul> \|<br>  \| `Payment` \| <ul> <li>`ORDER_PAYMENT_AUTHENTICATION_CHALLENGED`</li> <li>`ORDER_PAYMENT_AUTHENTICATED`</li> <li>`ORDER_PAYMENT_AUTHORISATION_STARTED`</li> <li>`ORDER_PAYMENT_DECLINED`</li> <li>`ORDER_PAYMENT_FAILED`</li> </ul> \|<br>  \| `Subscription`  \| <ul> <li>`SUBSCRIPTION_INITIATED`</li> <li>`SUBSCRIPTION_FINISHED`</li> <li>`SUBSCRIPTION_CANCELLED`</li> <li>`SUBSCRIPTION_OVERDUE`</li></ul> \|<br>  \| `Payout`  \| <ul> <li>`PAYOUT_INITIATED`</li> <li>`PAYOUT_COMPLETED`</li> <li>`PAYOUT_FAILED`</li> </ul> \|<br>  \| `Dispute`  \| <ul> <li>`DISPUTE_ACTION_REQUIRED`</li> <li>`DISPUTE_UNDER_REVIEW`</li> <li>`DISPUTE_WON`</li> <li>`DISPUTE_LOST`</li></ul> \||

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|
|» events|ORDER_COMPLETED|
|» events|ORDER_AUTHORISED|
|» events|ORDER_CANCELLED|
|» events|ORDER_FAILED|
|» events|ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED|
|» events|ORDER_INCREMENTAL_AUTHORISATION_DECLINED|
|» events|ORDER_INCREMENTAL_AUTHORISATION_FAILED|
|» events|ORDER_PAYMENT_AUTHENTICATION_CHALLENGED|
|» events|ORDER_PAYMENT_AUTHENTICATED|
|» events|ORDER_PAYMENT_AUTHORISATION_STARTED|
|» events|ORDER_PAYMENT_DECLINED|
|» events|ORDER_PAYMENT_FAILED|
|» events|SUBSCRIPTION_INITIATED|
|» events|SUBSCRIPTION_FINISHED|
|» events|SUBSCRIPTION_CANCELLED|
|» events|SUBSCRIPTION_OVERDUE|
|» events|PAYOUT_INITIATED|
|» events|PAYOUT_COMPLETED|
|» events|PAYOUT_FAILED|
|» events|DISPUTE_ACTION_REQUIRED|
|» events|DISPUTE_UNDER_REVIEW|
|» events|DISPUTE_WON|
|» events|DISPUTE_LOST|

> Example responses

> 200 Response

```json
{
  "id": "c6b981f4-53b3-47d5-9b24-4f87af1160eb",
  "url": "https://example.com/webhooks",
  "events": [
    "ORDER_AUTHORISED",
    "ORDER_COMPLETED"
  ],
  "signing_secret": "wsk_4jETWMz1g1b37gCONjNp84t2KSSIT7dK"
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="create-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Webhook-v2](#schemawebhook-v2)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable Content|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Retrieve a webhook

<a id="opIdretrieveWebhook"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`GET /api/webhooks/{webhook_id}`

Get the details of a specific webhook, including its `signing_secret`.  

<h3 id="retrieve-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>This endpoint is available from version `2024-09-01`. If a version earlier than `2024-09-01` is provided, the endpoint returns a `404` response.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|webhook_id|path|string(uuid)|true|The ID of the webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "id": "c6b981f4-53b3-47d5-9b24-4f87af1160eb",
  "url": "https://example.com/webhooks",
  "events": [
    "ORDER_AUTHORISED",
    "ORDER_COMPLETED"
  ],
  "signing_secret": "wsk_4jETWMz1g1b37gCONjNp84t2KSSIT7dK"
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Webhook-v2](#schemawebhook-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Delete a webhook

<a id="opIddeleteWebhook"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17'
```

`DELETE /api/webhooks/{webhook_id}`

Delete a webhook so that events are no longer sent to the specified URL.

<h3 id="delete-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>This endpoint is available from version `2024-09-01`. If a version earlier than `2024-09-01` is provided, the endpoint returns a `404` response.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|webhook_id|path|string(uuid)|true|The ID of the webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 400 Response

```json
{
  "code": "bad_request",
  "message": "Invalid request",
  "timestamp": 1721050000000
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="delete-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Update a webhook

<a id="opIdupdateWebhook"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17' \
  -d '{
    "url": "https://example.com/webhooks/updated",
    "events": [
      "ORDER_COMPLETED",
      "ORDER_AUTHORISED",
      "ORDER_CANCELLED"
    ]
  }'
```

`PATCH /api/webhooks/{webhook_id}`

Update the URL or events for a specific webhook.

All request body fields are optional. Only the fields provided will be updated.  

> Body parameter

```json
{
  "url": "https://example.com/webhooks/updated",
  "events": [
    "ORDER_COMPLETED",
    "ORDER_AUTHORISED",
    "ORDER_CANCELLED"
  ]
}
```

<h3 id="update-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>This endpoint is available from version `2024-09-01`. If a version earlier than `2024-09-01` is provided, the endpoint returns a `404` response.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|webhook_id|path|string(uuid)|true|The ID of the webhook.|
|body|body|[Webhook-Update](#schemawebhook-update)|false|none|
|» url|body|[Webhook-Url](#schemawebhook-url)|false|Your webhook's URL to which event notifications will be sent. <br><br>Must be a valid HTTP or HTTPS URL, capable of receiving `POST` requests.<br><br>:::warning<br>Restrictions:<br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be either `http` or `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `2000`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::|
|» events|body|[Webhook-Events](#schemawebhook-events)|false|List of event types that the webhook is configured to listen to.<br><br>Each event is related to status changes of a specific object in the Merchant API:<br><br>  \| Object \| Event types \|<br>  \| --------- \| ----------- \|<br>  \| `Order`   \| <ul> <li>`ORDER_COMPLETED`</li> <li>`ORDER_AUTHORISED`</li> <li>`ORDER_CANCELLED`</li> <li>`ORDER_FAILED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_DECLINED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_FAILED`</li> </ul> \|<br>  \| `Payment` \| <ul> <li>`ORDER_PAYMENT_AUTHENTICATION_CHALLENGED`</li> <li>`ORDER_PAYMENT_AUTHENTICATED`</li> <li>`ORDER_PAYMENT_AUTHORISATION_STARTED`</li> <li>`ORDER_PAYMENT_DECLINED`</li> <li>`ORDER_PAYMENT_FAILED`</li> </ul> \|<br>  \| `Subscription`  \| <ul> <li>`SUBSCRIPTION_INITIATED`</li> <li>`SUBSCRIPTION_FINISHED`</li> <li>`SUBSCRIPTION_CANCELLED`</li> <li>`SUBSCRIPTION_OVERDUE`</li></ul> \|<br>  \| `Payout`  \| <ul> <li>`PAYOUT_INITIATED`</li> <li>`PAYOUT_COMPLETED`</li> <li>`PAYOUT_FAILED`</li> </ul> \|<br>  \| `Dispute`  \| <ul> <li>`DISPUTE_ACTION_REQUIRED`</li> <li>`DISPUTE_UNDER_REVIEW`</li> <li>`DISPUTE_WON`</li> <li>`DISPUTE_LOST`</li></ul> \||

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|
|» events|ORDER_COMPLETED|
|» events|ORDER_AUTHORISED|
|» events|ORDER_CANCELLED|
|» events|ORDER_FAILED|
|» events|ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED|
|» events|ORDER_INCREMENTAL_AUTHORISATION_DECLINED|
|» events|ORDER_INCREMENTAL_AUTHORISATION_FAILED|
|» events|ORDER_PAYMENT_AUTHENTICATION_CHALLENGED|
|» events|ORDER_PAYMENT_AUTHENTICATED|
|» events|ORDER_PAYMENT_AUTHORISATION_STARTED|
|» events|ORDER_PAYMENT_DECLINED|
|» events|ORDER_PAYMENT_FAILED|
|» events|SUBSCRIPTION_INITIATED|
|» events|SUBSCRIPTION_FINISHED|
|» events|SUBSCRIPTION_CANCELLED|
|» events|SUBSCRIPTION_OVERDUE|
|» events|PAYOUT_INITIATED|
|» events|PAYOUT_COMPLETED|
|» events|PAYOUT_FAILED|
|» events|DISPUTE_ACTION_REQUIRED|
|» events|DISPUTE_UNDER_REVIEW|
|» events|DISPUTE_WON|
|» events|DISPUTE_LOST|

> Example responses

> 200 Response

```json
{
  "id": "c6b981f4-53b3-47d5-9b24-4f87af1160eb",
  "url": "https://example.com/webhooks",
  "events": [
    "ORDER_AUTHORISED",
    "ORDER_COMPLETED"
  ],
  "signing_secret": "wsk_4jETWMz1g1b37gCONjNp84t2KSSIT7dK"
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="update-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Webhook-v2](#schemawebhook-v2)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Rotate a webhook signing secret

<a id="opIdrotateWebhookSigningSecret"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08/rotate-signing-secret \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Revolut-Api-Version: 2026-08-17' \
  -d '{
    "expiration_period": "PT5H30M"
  }'
```

`POST /api/webhooks/{webhook_id}/rotate-signing-secret`

Rotate the `signing_secret` for a specific webhook.

The updated signing secret is returned in the response as part of the full webhook object.

:::info
For more information, see [Tutorials: Verify the payload signature](https://developer.revolut.com/docs/guides/merchant/monitor-and-observe/webhooks/verify-the-payload-signature).
:::

> Body parameter

```json
{
  "expiration_period": "PT5H30M"
}
```

<h3 id="rotate-a-webhook-signing-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|true|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>This endpoint is available from version `2024-09-01`. If a version earlier than `2024-09-01` is provided, the endpoint returns a `404` response.<br><br>If not specified, you will receive an error.<br><br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|webhook_id|path|string(uuid)|true|The ID of the webhook.|
|body|body|object|false|none|
|» expiration_period|body|string(duration)|false|The expiration period of the signing secret in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601#Durations).<br><br>If defined, when the signing secret is rotated, it continues to be valid until the expiration period passes.<br><br>Otherwise, it is invalidated immediately.<br><br>Maximum expiration period is 7 days.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "id": "c6b981f4-53b3-47d5-9b24-4f87af1160eb",
  "url": "https://example.com/webhooks",
  "events": [
    "ORDER_AUTHORISED",
    "ORDER_COMPLETED"
  ],
  "signing_secret": "wsk_4jETWMz1g1b37gCONjNp84t2KSSIT7dK"
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="rotate-a-webhook-signing-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Webhook-v2](#schemawebhook-v2)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

<h1 id="merchant-api-locations">Locations</h1>

The Locations API is designed to help merchants manage multiple points of sale, including both **online storefronts** and **physical stores**. Registering locations lets you differentiate and group your orders from different stores. You can also introduce custom business logic for each location, such as different inventory management, pricing, or shipping rules.

To start using locations, follow the relevant use case for your business:

### Online locations

  1. Register an online location using the [Create a location](https://developer.revolut.com/docs/api/merchant/2024-09-01#create-location) endpoint, setting the `type` to `online`.
  1. Configure your custom processes on your backend for each registered location (e.g., grouping orders, custom pricing, etc.).
  1. Send the `location_id` parameter in the request body during [order creation](https://developer.revolut.com/docs/api/merchant/2024-09-01#create-order) to assign the order to a specific location.

### Physical locations

  1. Register a physical location using the [Create a location](https://developer.revolut.com/docs/api/merchant/2024-09-01#create-location) endpoint, setting the `type` to `physical`.
  1. In case of Revolut POS, our system handles order creation including `location_id` to associate the order with your location.

## Fast checkout for multiple storefronts

Locations are particularly useful for tailoring the user experience on each of your online storefronts, especially when using features like [**Fast checkout**](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/fast-checkout).

For example, if you operate two online stores with different shipping rules, you can register two separate `online` locations. By then using the `location_id` to [register a distinct address validation endpoint](https://developer.revolut.com/docs/api/merchant/2024-09-01#register-address-validation-endpoint) for each one, your backend can apply the correct shipping logic and pricing for the specific storefront a customer is buying from.

## Retrieve location list

<a id="opIdretrieveLocationList"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/locations`

Retrieve a list of locations registered for the merchant.

:::note [Default behavior]
Without the `type` query parameter, this endpoint returns only **online** locations by default. To retrieve physical locations, you must explicitly specify `type=physical` in the query parameters.
:::

<h3 id="retrieve-location-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|Filter the list by location type.|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|online|
|type|physical|

> Example responses

> 200 Response

```json
[
  {
    "id": "8d9a7125-805f-40f3-a405-bc89765db996",
    "name": "Grocery website",
    "type": "online",
    "details": {
      "domain": "groceries.example.com"
    }
  },
  {
    "id": "066223df-d5a8-42f0-b3ce-688c7a76f9a8",
    "name": "Cars website",
    "type": "online",
    "details": {
      "domain": "cars.example.com"
    }
  },
  {
    "id": "299050a4-cc7a-44b0-8b2b-7cd1e335ef38",
    "name": "Example Street Store",
    "type": "physical",
    "details": {
      "address": {
        "street_line_1": "123 Example Street",
        "city": "Example city",
        "postcode": "12345",
        "country_code": "GB"
      },
      "geo_location": {
        "lat": 12.3456,
        "lon": -12.3456
      },
      "opening_hours": {
        "monday": [
          {
            "from": "09:00",
            "to": "15:00"
          },
          {
            "from": "16:00",
            "to": "18:00"
          }
        ],
        "tuesday": [
          {
            "from": "10:00",
            "to": "13:00"
          },
          {
            "from": "16:00",
            "to": "18:00"
          }
        ]
      }
    }
  }
]
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-location-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<h3 id="retrieve-location-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Location](#schemalocation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Create a location

<a id="opIdcreateLocation"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/locations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Grocery website",
    "type": "online",
    "details": {
      "domain": "groceries.example.com"
    }
  }'
```

`POST /api/locations`

Create a `Location` object. Supports `online` and `physical` location types.

> Body parameter

```json
{
  "name": "Grocery website",
  "type": "online",
  "details": {
    "domain": "groceries.example.com"
  }
}
```

<h3 id="create-a-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|body|body|[Location-Creation](#schemalocation-creation)|false|none|
|» *oneOf*|body|[Location-Creation-Online](#schemalocation-creation-online)|false|Request body for creating an online merchant location.|
|» *oneOf*|body|[Location-Creation-Physical](#schemalocation-creation-physical)|false|Request body for creating a physical merchant location.|

> Example responses

> 201 Response

```json
{
  "id": "8d9a7125-805f-40f3-a405-bc89765db996",
  "name": "Grocery website",
  "type": "online",
  "details": {
    "domain": "groceries.example.com"
  }
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="create-a-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Location created|[Location](#schemalocation)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Retrieve a location

<a id="opIdretrieveLocation"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/locations/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/locations/{location_id}`

Retrieve details of a specific location, based on its ID.

<h3 id="retrieve-a-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|location_id|path|string(uuid)|true|The ID of the location.|

> Example responses

> 200 Response

```json
{
  "id": "8d9a7125-805f-40f3-a405-bc89765db996",
  "name": "Grocery website",
  "type": "online",
  "details": {
    "domain": "groceries.example.com"
  }
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-a-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Location](#schemalocation)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Delete a location

<a id="opIddeleteLocation"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/locations/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/locations/{location_id}`

Delete a specific location, based on its ID.

<h3 id="delete-a-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|location_id|path|string(uuid)|true|The ID of the location.|

> Example responses

> 400 Response

```json
{
  "code": "bad_request",
  "message": "Invalid request",
  "timestamp": 1721050000000
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="delete-a-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Location deleted|None|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Update a location

<a id="opIdupdateLocation"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/locations/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Cars website - Name update",
    "details": {
      "domain": "cars.example.com"
    }
  }'
```

`PATCH /api/locations/{location_id}`

Update details of a specific location, based on its ID. 

Only the fields provided in the request will be updated. Any omitted fields will retain their current values.

:::note
The value of the location's `type` parameter cannot be updated.
:::

> Body parameter

```json
{
  "name": "Cars website - Name update",
  "details": {
    "domain": "cars.example.com"
  }
}
```

<h3 id="update-a-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|location_id|path|string(uuid)|true|The ID of the location.|
|body|body|[Location-Update](#schemalocation-update)|false|none|
|» *oneOf*|body|[Location-Update-Online](#schemalocation-update-online)|false|Request body for updating an online merchant location's name or details.|
|» *oneOf*|body|[Location-Update-Physical](#schemalocation-update-physical)|false|Location object represents merchant locations depending on type.|

> Example responses

> 200 Response

```json
{
  "id": "8d9a7125-805f-40f3-a405-bc89765db996",
  "name": "Cars website - Name update",
  "type": "online",
  "details": {
    "domain": "cars.example.com"
  }
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="update-a-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Location updated|[Location](#schemalocation)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

<h1 id="merchant-api-terminals">Terminals</h1>

Operations for managing Revolut Terminal devices and push payment integrations with Point of Sale (POS) systems.

The Terminals API enables POS software providers to integrate with Revolut Terminal devices for accepting in-person payments through a **push payments** model. This server-to-server integration allows your POS system to:

- Discover available terminals at specific locations
- Push payment requests to physical terminal devices
- Track payment intent and payment status in real-time
- Cancel pending payment requests when needed

## Push payments workflow

1. **Terminal discovery:** Use the [Retrieve terminal list](https://developer.revolut.com/docs/api/merchant/2024-09-01#retrieve-terminal-list) endpoint to find available terminals at a location (filtered by `operation_mode=pos`)
1. **Payment intent creation:** Push a payment request to a specific terminal using [Create a payment intent](https://developer.revolut.com/docs/api/merchant/2024-09-01#create-payment-intent)
1. **Status tracking:** Poll the payment intent status until completion using [Retrieve a payment intent](https://developer.revolut.com/docs/api/merchant/2024-09-01#retrieve-payment-intent) endpoint
1. **Payment confirmation:** Once the payment intent reaches `completed` state, [retrieve the final payment status](https://developer.revolut.com/docs/api/merchant/2024-09-01#retrieve-payment-details) using the returned `payment_id`

:::info
For detailed implementation guidance, see: [Push payments to Revolut Terminal](https://developer.revolut.com/docs/guides/merchant/accept-payments/in-person-payments/terminal/push-payments).
:::

## Retrieve terminal list

<a id="opIdretrieveTerminalList"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/terminals \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/terminals`

Retrieve a list of Revolut Terminal devices available to the merchant.

This endpoint is primarily used for push payments to Revolut Terminal integration, allowing POS systems to discover available terminals at a specific location and in the correct operation mode.

:::tip
For push payments integration, use the `operation_mode=pos` query parameter to filter only terminals in **Pay at Counter** mode that are ready to receive payment intents.
:::

:::info
For more information about integration, see: [Push payments to Revolut Terminal](https://developer.revolut.com/docs/guides/merchant/accept-payments/in-person-payments/terminal/push-payments).
:::

<h3 id="retrieve-terminal-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operation_mode|query|[Terminal-Operation-Mode](#schematerminal-operation-mode)|false|Filter terminals by operation mode.<br><br>\| Value \| Description \|<br>\|-------\|-------------\|<br>\| `pos` \| Returns only terminals in Pay at Counter mode \|<br>\| `payment_acceptance` \| Returns only terminals in standard checkout mode \||
|location_id|query|string(uuid)|false|Filter results by location ID.|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|false|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation_mode|pos|
|operation_mode|payment_acceptance|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "terminals": [
    {
      "id": "0e53f673-7705-473a-a263-89a3e7647c3d",
      "name": "Terminal 1",
      "type": "newland_n950",
      "serial_number": "RT-00123456",
      "battery_level": 85,
      "online": true,
      "last_online_at": "2025-01-15T14:30:00Z"
    },
    {
      "id": "a7b2c8d1-4e5f-6a7b-8c9d-0e1f2a3b4c5d",
      "name": "Terminal 2",
      "type": "newland_n950",
      "serial_number": "RT-00123457",
      "battery_level": 92,
      "online": true,
      "last_online_at": "2025-01-15T14:32:00Z",
      "device_id": "37d9bc77-dde3-51c6-a961-d2747ef6e4b9"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-terminal-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Terminals-Response](#schematerminals-response)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

<h1 id="merchant-api-payment-intents">Payment intents</h1>

Operations for managing payment intents in the push payments to Revolut Terminal flow.

A **payment intent** represents the intention to complete payment for a specific order on a specific Revolut Terminal device. Payment intents are the mechanism that links orders created via the Merchant API with physical terminal devices in **Pay at Counter** mode.

## What is a payment intent?

When you create a payment intent, you're pushing a payment request from your POS system to a Revolut Terminal. The payment intent:

- Links an order to a specific terminal device
- Triggers the payment request to appear on the terminal screen
- Tracks the customer's interaction with the terminal (pending → processing → completed)
- Provides a `payment_id` when completed, which you use to retrieve the final payment status

## Payment intent lifecycle

1. **Create:** Push a payment intent to a terminal by [creating a payment intent](https://developer.revolut.com/docs/api/merchant/2024-09-01#create-payment-intent)
1. **Track:** Poll the payment intent status by [retrieving payment intent details](https://developer.revolut.com/docs/api/merchant/2024-09-01#retrieve-payment-intent) until it reaches a final state
1. **Complete:** When state is `completed`, extract the `payment_id` and [retrieve the final payment status](https://developer.revolut.com/docs/api/merchant/2024-09-01#retrieve-payment-details)
1. **Cancel (optional):** Cancel pending payment intents using [Cancel a payment intent](https://developer.revolut.com/docs/api/merchant/2024-09-01#cancel-payment-intent)

## Important notes

- A payment intent reaching `completed` state means the checkout process finished on the terminal, but it does **not** guarantee the payment succeeded
- You must check the actual payment status using the `payment_id` returned in the completed payment intent
- Payment status can be `captured`/`completed` (successful), `declined` (card rejected), `failed` (technical error), or `cancelled`

:::info
For the complete push payments integration guide, see: [Push payments to Revolut Terminal](https://developer.revolut.com/docs/guides/merchant/accept-payments/in-person-payments/terminal/push-payments).
:::

## Create a payment intent

<a id="opIdcreatePaymentIntent"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/orders/497f6eca-6276-4993-bfeb-53cbbbba6f08/payment-intents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "amount": 2500,
    "terminal_id": "0e53f673-7705-473a-a263-89a3e7647c3d"
  }'
```

`POST /api/orders/{order_id}/payment-intents`

Create a payment intent to push a payment request to a specific Revolut Terminal device.

This endpoint is used in push payments to Revolut Terminal integration, where a POS system sends payment requests to physical terminal devices. The terminal must be in Pay at Counter mode and assigned to the same location as the order.

**Requirements:**
- Order must be created with `channel: "pos"` and include a `location_id`
- Terminal must be online, in `pos` operation mode, and assigned to the same location
- Amount must match the order amount

**What happens next:**
- The payment request appears on the Revolut Terminal screen
- Customer presents their card or device to complete payment
- You should poll the payment intent status until it reaches a final state (`completed`, `cancelled`, or `failed`)
- When the payment intent reaches `completed` state, use the returned `payment_id` to retrieve the final payment status

:::info
For the complete push payments flow, see: [Push payments to Revolut Terminal](https://developer.revolut.com/docs/guides/merchant/accept-payments/in-person-payments/terminal/push-payments).
:::

> Body parameter

```json
{
  "amount": 2500,
  "terminal_id": "0e53f673-7705-473a-a263-89a3e7647c3d"
}
```

<h3 id="create-a-payment-intent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|false|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|order_id|path|string(uuid)|true|The ID of the `Order` object.|
|body|body|[Payment-Intent-Creation](#schemapayment-intent-creation)|true|none|
|» amount|body|[Payment-Intent-Amount](#schemapayment-intent-amount)|true|The payment amount expressed in minor currency units, according to the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217). For example, `7034` in `EUR` corresponds to €70.34.<br><br>:::info<br>Conversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).<br>:::|
|» terminal_id|body|[Terminal-Id](#schematerminal-id)|true|The unique identifier of the terminal.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 201 Response

```json
{
  "id": "b4d58add-b3fe-40e4-a70a-8c78df977888",
  "state": "pending",
  "order_id": "5c9fc54e-11b4-4f7f-8686-4a64d4d20db4",
  "amount": 2500,
  "currency": "GBP"
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 409 Response

```json
{
  "code": "conflict",
  "message": "The request conflicts with the current state of the resource",
  "timestamp": 1721050000000
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="create-a-payment-intent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Payment intent created|[Payment-Intent](#schemapayment-intent)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|409|Conflict|Conflict|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Retrieve a payment intent

<a id="opIdretrievePaymentIntent"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/payment-intents/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/payment-intents/{payment_intent_id}`

Retrieve the current state and details of a payment intent.

This endpoint is used to poll the payment intent status after pushing a payment request to a Revolut Terminal. You should poll this endpoint repeatedly until the payment intent reaches a final state.

**Payment intent states:**

| State | Description |
|-------|-------------|
| `pending` | Payment intent created and sent to terminal, customer has not yet started interacting |
| `processing` | Customer is actively interacting with the terminal (e.g., inserting card, entering PIN) |
| `completed` | Payment authorisation is complete, response includes a `payment_id` that you should use to [retrieve the final payment status](https://developer.revolut.com/docs/api/merchant#retrieve-payment-details) |
| `cancelled` | Payment intent was cancelled (by your system or by the customer on the terminal) |
| `failed` | Payment intent failed due to technical issues (e.g., timeout, terminal became unavailable) |

:::tip [Polling strategy]
- Poll every second while the state is `pending` or `processing`
- Set a reasonable timeout (e.g., 60 seconds) to handle cases where the customer abandons the payment
:::

:::info
For the complete push payments flow, see: [Push payments to Revolut Terminal](https://developer.revolut.com/docs/guides/merchant/accept-payments/in-person-payments/terminal/push-payments).
:::

<h3 id="retrieve-a-payment-intent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|false|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|payment_intent_id|path|[Payment-Intent-Id](#schemapayment-intent-id)|true|The unique identifier of the payment intent.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "id": "b4d58add-b3fe-40e4-a70a-8c78df977888",
  "state": "pending",
  "order_id": "5c9fc54e-11b4-4f7f-8686-4a64d4d20db4",
  "amount": 2500,
  "currency": "GBP"
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-a-payment-intent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Payment-Intent](#schemapayment-intent)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Cancel a payment intent

<a id="opIdcancelPaymentIntent"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/payment-intents/497f6eca-6276-4993-bfeb-53cbbbba6f08/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/payment-intents/{payment_intent_id}/cancel`

Cancel a payment intent while it's still in `pending` state, before the customer has completed the payment.

This is useful if the customer changes their mind or if there's an issue with the order before payment is completed.

:::warning
**Requirements:**
- Payment intent must be in `pending` state
- Cannot cancel payment intents that are already `completed`, `cancelled`, or `failed`
:::

:::info
For the complete push payments flow, see: [Push payments to Revolut Terminal](https://developer.revolut.com/docs/guides/merchant/accept-payments/in-person-payments/terminal/push-payments).
:::

<h3 id="cancel-a-payment-intent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|false|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|payment_intent_id|path|[Payment-Intent-Id](#schemapayment-intent-id)|true|The unique identifier of the payment intent.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 200 Response

```json
{
  "id": "b4d58add-b3fe-40e4-a70a-8c78df977888",
  "state": "cancelled",
  "terminal_id": "0e53f673-7705-473a-a263-89a3e7647c3d",
  "order_id": "5c9fc54e-11b4-4f7f-8686-4a64d4d20db4",
  "amount": 2500,
  "currency": "GBP",
  "created_at": "2025-01-15T11:01:00Z",
  "updated_at": "2025-01-15T11:01:45Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="cancel-a-payment-intent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payment intent cancelled|[Payment-Intent](#schemapayment-intent)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

<h1 id="merchant-api-apple-pay-merchant-registration">Apple Pay merchant registration</h1>

Operations for managing a merchant's domain registration and configuration with Apple for integration of Apple Pay via Revolut.

This includes initiating domain validation with Apple, a necessary step for merchants to offer Apple Pay as a payment method on their websites or apps.

These endpoints interact with Apple's [Apple Pay Web Merchant Registration services](https://developer.apple.com/documentation/applepaywebmerchantregistrationapi).

## Register domain for Apple Pay

<a id="opIdregisterDomainApplePay"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/apple-pay/domains/register \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "domain": "revolut.com"
  }'
```

`POST /api/apple-pay/domains/register`

Register your website's domain to accept payments via Apple Pay. 

Before you call this endpoint, make sure that you have completed the following steps:

1. Download the latest [domain validation file](https://assets.revolut.com/api-docs/merchant-api/files/apple-developer-merchantid-domain-association).
1. Upload the domain validation file to your website in the following folder `/.well-known/`. For example, if your website is `example.com`, the file should be available on `example.com/.well-known/apple-developer-merchantid-domain-association`, where `apple-developer-merchantid-domain-association` indicates the name of the file.

> Body parameter

```json
{
  "domain": "revolut.com"
}
```

<h3 id="register-domain-for-apple-pay-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|body|body|object|false|none|
|» domain|body|string|true|Domain name of your website without the scheme (i.e. without `http://` or `https://`).|

> Example responses

> 400 Response

```json
{
  "code": "validation",
  "message": "Exactly one value must be supplied for client_id",
  "timestamp": 1721049596461
}
```

> 401 Response

```json
{
  "code": "unauthenticated",
  "message": "Authentication failed",
  "timestamp": 1721049596461
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="register-domain-for-apple-pay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Domain registered successfully|None|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Unregister domain for Apple Pay

<a id="opIdunregisterDomainApplePay"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/apple-pay/domains/unregister \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "domain": "revolut.com",
    "reason": "Unregister due to domain change."
  }'
```

`POST /api/apple-pay/domains/unregister`

Unregister your website from Apple Pay's registered domains. 

> Body parameter

```json
{
  "domain": "revolut.com",
  "reason": "Unregister due to domain change."
}
```

<h3 id="unregister-domain-for-apple-pay-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|Revolut-Api-Version|header|string(date)|false|The version of the Merchant API, specified in `YYYY-MM-DD` format.<br><br>:::info<br>For more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).<br>:::|
|body|body|object|false|none|
|» domain|body|string|true|Domain name of your website without the scheme (i.e. without `http://` or `https://`).|
|» reason|body|string|true|A short explanation why you remove the domain.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Revolut-Api-Version|2023-09-01|
|Revolut-Api-Version|2024-05-01|
|Revolut-Api-Version|2024-09-01|
|Revolut-Api-Version|2025-10-16|
|Revolut-Api-Version|2025-12-04|
|Revolut-Api-Version|2026-03-12|
|Revolut-Api-Version|2026-04-20|
|Revolut-Api-Version|2026-08-17|

> Example responses

> 400 Response

```json
{
  "code": "validation",
  "message": "Exactly one value must be supplied for client_id",
  "timestamp": 1721049596461
}
```

> 401 Response

```json
{
  "code": "unauthenticated",
  "message": "Authentication failed",
  "timestamp": 1721049596461
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="unregister-domain-for-apple-pay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Domain unregistered successfully|None|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|[Error-v2](#schemaerror-v2)|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

<h1 id="merchant-api-other">Other</h1>

Other operations that can be done with the Merchant API.

## Retrieve a synchronous webhook list

<a id="opIdretrieveSynchronousWebhookList"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/synchronous-webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/synchronous-webhooks`

Retrieve a list of synchronous webhook objects.

You can use this endpoint to see your different address validation endpoints registered to different locations.

:::info
For more information about locations, see: [Merchant API: Locations](https://developer.revolut.com/docs/api/merchant#tag-locations).
:::

<h3 id="retrieve-a-synchronous-webhook-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|

> Example responses

> 200 Response

```json
[
  {
    "id": "f6abc4df-eb48-417c-8e75-f7c6d7ad394f",
    "signing_key": "swsk_y5z3LEHYZ9ndote3qegzWD6uL4t1lfp1",
    "url": "https://example.com/webhooks/validate-address",
    "event_type": "fast_checkout.validate_address"
  },
  {
    "id": "5c08dcc1-cd60-4b7d-a255-e42d24d7365c",
    "signing_key": "swsk_VsuFcq6FIpa9gOWUu0n2WxiCbsDHIJlN",
    "url": "https://groceries.example.com/webhooks/validate-address",
    "event_type": "fast_checkout.validate_address",
    "location_id": "b0ebede4-5cbc-4951-977f-70329faa8769"
  },
  {
    "id": "dbebe6f8-4c47-4176-a94f-576d76e1d0b6",
    "signing_key": "swsk_0TKYlzoakBgGGVvojCiRRqInMD1ufLZn",
    "url": "https://clothes.example.com/webhooks/validate-address",
    "event_type": "fast_checkout.validate_address",
    "location_id": "6ebd3d2b-7a51-42e4-84f4-3c513621edd3"
  }
]
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="retrieve-a-synchronous-webhook-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Synchronous webhook list returned|Inline|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<h3 id="retrieve-a-synchronous-webhook-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Synchronous-Webhook](#schemasynchronous-webhook)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Register address validation endpoint for Fast checkout

<a id="opIdregisterAddressValidationEndpoint"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/synchronous-webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "event_type": "fast_checkout.validate_address",
    "url": "https://backend.example.com/webhooks/validate-address"
  }'
```

`POST /api/synchronous-webhooks`

Use this endpoint to register a URL where Revolut can send shipping address(es) from a Revolut Pay customer for validation during the [Fast checkout
process](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/fast-checkout).

Revolut Pay can support Fast checkout for delivering goods. Once your customer selects a shipping address, Revolut needs to validate if the merchant (or their shipping partner) delivers to the address provided. This is done by contacting the merchant's backend and asking for such validation and information.

In order for your backend to support Fast checkout, you need to:

1. Register an URL to handle address validation
1. Validate the shipping address sent to your backend
1. Respond with a JSON object containing the result of the validation

Additionally, Revolut Pay can support multiple webhooks if you have multiple stores. For more information, see:
  - [Manage multiple stores with Fast checkout](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/fast-checkout#manage-multiple-stores-with-fast-checkout)
  - [Merchant API: Locations](https://developer.revolut.com/docs/api/merchant#tag-locations)

:::note
To set up a webhook for tracking order completion, failure, error, etc. events, use the [Webhooks endpoints](https://developer.revolut.com/docs/api/merchant#tag-webhooks).
:::

> Body parameter

```json
{
  "event_type": "fast_checkout.validate_address",
  "url": "https://backend.example.com/webhooks/validate-address"
}
```

<h3 id="register-address-validation-endpoint-for-fast-checkout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|body|body|[Synchronous-Webhook-Creation](#schemasynchronous-webhook-creation)|false|none|
|» event_type|body|string|true|Type of event this synchronous webhook is configured for.<br><br>:::note<br>At the moment, synchronous webhooks only support address validation events. <br>:::|
|» url|body|string(uri)|true|The valid URL of the endpoint, that uses HTTPS URL schema. Revolut sends the shipping address of the customer to this URL for validation.<br><br>:::warning<br>Restrictions:<br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `2000`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::|
|» location_id|body|[Location-Id](#schemalocation-id)|false|Unique ID representing the location where merchants sells products.<br><br>:::info<br>For more information, see: [Locations](https://developer.revolut.com/docs/api/merchant#tag-locations).<br>:::        |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» event_type|fast_checkout.validate_address|

> Example responses

> 200 Response

```json
{
  "id": "f6abc4df-eb48-417c-8e75-f7c6d7ad394f",
  "signing_key": "swsk_y5z3LEHYZ9ndote3qegzWD6uL4t1lfp1",
  "url": "https://backend.example.com/webhooks/validate-address",
  "event_type": "fast_checkout.validate_address"
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="register-address-validation-endpoint-for-fast-checkout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Synchronous-Webhook](#schemasynchronous-webhook)|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

## Delete a synchronous webhook

<a id="opIddeleteSynchronousWebhook"></a>

> Code samples

```bash
curl https://merchant.revolut.com/api/synchronous-webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/synchronous-webhooks/{synchronous_webhook_id}`

Delete a specific synchronous webhook registration, based on its ID.

<h3 id="delete-a-synchronous-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. <br><br>It ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.<br><br>:::info<br>For more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)<br>:::|
|synchronous_webhook_id|path|string(uuid)|true|The ID of the synchronous webhook.|

> Example responses

> 400 Response

```json
{
  "code": "bad_request",
  "message": "Invalid request",
  "timestamp": 1721050000000
}
```

> 403 Response

```json
{
  "code": "forbidden",
  "message": "The requested operation is forbidden",
  "timestamp": 1721050063886
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 422 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

<h3 id="delete-a-synchronous-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Synchronous webhook deleted|None|
|400|Bad Request|Bad Request|[Error-v2](#schemaerror-v2)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[Error-v2](#schemaerror-v2)|
|404|Not Found|Not Found|[Error-v2](#schemaerror-v2)|
|422|Unprocessable Entity|Unprocessable entity|[Error-v2](#schemaerror-v2)|
|500|Internal Server Error|Internal Server Error|[Error-v2](#schemaerror-v2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

<h1 id="merchant-api-webhooks-1">Webhooks</h1>

## Webhook event

<a id="opIdwebhookEvent"></a>

`POST webhookEvent`

The following webhook event payload is sent as an HTTP POST request to the `url` registered via the [Create a webhook](https://developer.revolut.com/docs/api/merchant#create-webhook) operation.

The delivery of the webhook events happen asynchronously, based on the events you subscribed to.

Refund orders can take up to 2 days to reach a final state. If you process refunds, keep handling webhook events for refund orders for at least that window after you create the refund.

:::info
For more information, see: [Use webhooks to track order and payment lifecycle](https://developer.revolut.com/docs/guides/merchant/monitor-and-observe/webhooks/using-webhooks).
:::

### IP allowlisting

To ensure secure delivery of webhook events, please allowlist the following IP addresses from which the events originate:

| Environment | Webhook IP addresses |
|-------------|---------------------|
| Production  | `35.246.21.235`, `34.89.70.170` |
| Sandbox     | `35.242.130.242`, `35.242.162.241` |

> Body parameter

```json
{
  "event": "ORDER_COMPLETED",
  "order_id": "6634c172-3398-ac93-aee9-50de0282e3ac",
  "merchant_order_ext_ref": "Example reference #123"
}
```

<h3 id="webhook-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Revolut-Request-Timestamp|header|string|true|The [UNIX timestamp](https://www.unixtimestamp.com/) of the date and time when the webhook event was sent from Revolut. Used to verify the webhook event payload was actually sent by Revolut.<br><br>:::info<br>For more information, see: [Verify payload signature](https://developer.revolut.com/docs/guides/merchant/monitor-and-observe/webhooks/verify-the-payload-signature)<br>:::|
|Revolut-Signature|header|string|true|The payload signature computed by Revolut using a Hash-based Message Authentication Code (HMAC). Used to verify the webhook event payload was actually sent by Revolut.<br><br>:::info<br>For more information, see: [Verify payload signature](https://developer.revolut.com/docs/guides/merchant/monitor-and-observe/webhooks/verify-the-payload-signature)<br>:::|
|body|body|[Webhook-Order-Event](#schemawebhook-order-event) \| [Webhook-Subscription-Event](#schemawebhook-subscription-event) \| [Webhook-Payout-Event](#schemawebhook-payout-event) \| [Webhook-Dispute-Event](#schemawebhook-dispute-event)|true|none|
|» *oneOf*|body|[Webhook-Order-Event](#schemawebhook-order-event)|false|A webhook event payload for order-related events, including the order ID and optional reference fields.|
|» *oneOf*|body|[Webhook-Subscription-Event](#schemawebhook-subscription-event)|false|A webhook event payload for subscription-related events, including the subscription ID and external reference.|
|» *oneOf*|body|[Webhook-Payout-Event](#schemawebhook-payout-event)|false|A webhook event payload for payout-related events, including the payout ID.|
|» *oneOf*|body|[Webhook-Dispute-Event](#schemawebhook-dispute-event)|false|A webhook event payload for dispute-related events, including the dispute ID.|

<h3 id="webhook-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|If the webhook event was delivered successfully, we recommend to respond with a `204` code.<br><br>:::note<br>You can respond to and acknowledge the delivery of a webhook event by any HTTP response code between `200-399`.<br>:::|None|
|4XX|Client Error|If the webhook event delivery times out or the delivery of the events fails, you can respond with any HTTP `4XX` code. In this case, Revolut will retry sending the webhook event 3 more times, each with a 10-minute delay.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer-Auth
</aside>

# Schemas

<h2 id="tocS_Merchant-Order-External-Reference">Merchant-Order-External-Reference</h2>
<!-- backwards compatibility -->
<a id="schemamerchant-order-external-reference"></a>
<a id="schema_Merchant-Order-External-Reference"></a>
<a id="tocSmerchant-order-external-reference"></a>
<a id="tocsmerchant-order-external-reference"></a>

```json
"string"
```

Merchant order ID for external reference.

Use this field to set the ID that your own system can use to easily track orders.

<h2 id="tocS_Order-State">Order-State</h2>
<!-- backwards compatibility -->
<a id="schemaorder-state"></a>
<a id="schema_Order-State"></a>
<a id="tocSorder-state"></a>
<a id="tocsorder-state"></a>

```json
"authorised"
```

The state of the order in its lifecycle.

| State | Description |
|-------|-------------|
| `pending` | Order created, awaiting payment |
| `processing` | Payment is being processed |
| `authorised` | Payment authorised but not yet captured (for manual capture) |
| `completed` | Payment successfully captured and settled |
| `cancelled` | Order was cancelled |
| `failed` | Payment failed |

:::info
For more information, see: [Order and payment lifecycle](https://developer.revolut.com/docs/guides/merchant/reference/order-lifecycle)
:::

<h2 id="tocS_Order-Id">Order-Id</h2>
<!-- backwards compatibility -->
<a id="schemaorder-id"></a>
<a id="schema_Order-Id"></a>
<a id="tocSorder-id"></a>
<a id="tocsorder-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

Permanent order ID used to retrieve, capture, cancel, or refund an order after authorization.

<h2 id="tocS_Order-Token">Order-Token</h2>
<!-- backwards compatibility -->
<a id="schemaorder-token"></a>
<a id="schema_Order-Token"></a>
<a id="tocSorder-token"></a>
<a id="tocsorder-token"></a>

```json
"string"
```

Temporary ID for the order, which expires when the payment is authorised.

The order `token` is used for [token-based initialisation](https://developer.revolut.com/docs/sdks/merchant-web-sdk/initialisation/token-based), and is returned by the `createOrder` callback in the following payment methods:

- [Embedded Checkout](https://developer.revolut.com/docs/sdks/merchant-web-sdk/payment-methods/embedded-checkout#embedded-checkout-options-interface)
- [Revolut Pay](https://developer.revolut.com/docs/sdks/merchant-web-sdk/payment-methods/revolut-pay#widget-payments-revolut-pay-options)
- [Apple Pay and Google Pay](https://developer.revolut.com/docs/sdks/merchant-web-sdk/payment-methods/apple-pay-google-pay#payment-request-options-interface)
- [Pay by Bank](https://developer.revolut.com/docs/sdks/merchant-web-sdk/payment-methods/pay-by-bank#pay-by-bank-options-interface)

<h2 id="tocS_Order-Type-v2">Order-Type-v2</h2>
<!-- backwards compatibility -->
<a id="schemaorder-type-v2"></a>
<a id="schema_Order-Type-v2"></a>
<a id="tocSorder-type-v2"></a>
<a id="tocsorder-type-v2"></a>

```json
"payment"
```

The type of the order.

<h2 id="tocS_Order-Amount-v2">Order-Amount-v2</h2>
<!-- backwards compatibility -->
<a id="schemaorder-amount-v2"></a>
<a id="schema_Order-Amount-v2"></a>
<a id="tocSorder-amount-v2"></a>
<a id="tocsorder-amount-v2"></a>

```json
0
```

The order total expressed in minor currency units, according to the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217). For example, `7034` in `EUR` corresponds to €70.34.

:::info
- Conversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).
- If `line_items` are provided, the order `amount` must equal the sum of all line items' `total_amount`.
- For card payments with a non-zero amount, the order `amount` must be at least **$0.005** (or equivalent in different currencies, calculated using Revolut's exchange rate on the payment date). Otherwise, card payments can't be performed.
:::

<h2 id="tocS_Currency">Currency</h2>
<!-- backwards compatibility -->
<a id="schemacurrency"></a>
<a id="schema_Currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
"str"
```

[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.

:::info
For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).
:::

<h2 id="tocS_Outstanding-Amount">Outstanding-Amount</h2>
<!-- backwards compatibility -->
<a id="schemaoutstanding-amount"></a>
<a id="schema_Outstanding-Amount"></a>
<a id="tocSoutstanding-amount"></a>
<a id="tocsoutstanding-amount"></a>

```json
0
```

The amount not yet paid for a given order (in minor currency units). For example, `7034` represents €70.34. 

The value in this field may differ from `amount` if there are partial payments associated with the order.

<h2 id="tocS_Capture-Mode-v2">Capture-Mode-v2</h2>
<!-- backwards compatibility -->
<a id="schemacapture-mode-v2"></a>
<a id="schema_Capture-Mode-v2"></a>
<a id="tocScapture-mode-v2"></a>
<a id="tocscapture-mode-v2"></a>

```json
"automatic"
```

The capture mode of the order. `automatic` is used by default.

| Parameter value | Description |
| --------------- | ----------- |
| `automatic` | The order is captured automatically after payment authorisation. |
| `manual` | The order is not captured automatically. You must manually capture the order later. |

:::info
For more information, see [Capture an order](https://developer.revolut.com/docs/api/merchant#capture-order).
:::

<h2 id="tocS_Enforce-Challenge-v2">Enforce-Challenge-v2</h2>
<!-- backwards compatibility -->
<a id="schemaenforce-challenge-v2"></a>
<a id="schema_Enforce-Challenge-v2"></a>
<a id="tocSenforce-challenge-v2"></a>
<a id="tocsenforce-challenge-v2"></a>

```json
"automatic"
```

The enforce challenge mode. `automatic` is used by default.

| Parameter value | Description |
| --------------- | ----------- |
| `automatic` | The payments created for an order will have challenge requirement calculated by our fraud mechanisms. Not all payments will trigger a 3DS challenge. |
| `forced` | The payments created for an order will always require a 3DS challenge. Currently only supported for card payments. |

<h2 id="tocS_Authorisation-Type">Authorisation-Type</h2>
<!-- backwards compatibility -->
<a id="schemaauthorisation-type"></a>
<a id="schema_Authorisation-Type"></a>
<a id="tocSauthorisation-type"></a>
<a id="tocsauthorisation-type"></a>

```json
"final"
```

The type of authorisation for the order. Used with manual capture mode. If omitted, `final` is used by default.

### Pre-authorisation

Pre-authorisation allows you to reserve funds on a customer's card without immediately capturing them. This is useful for scenarios like:

- Hotel bookings where the final amount may vary
- Car rentals where additional charges may apply
- Deposits that need to be held temporarily

| Parameter value | Description |
| --------------- | ----------- |
| `final` | Standard authorisation for immediate or near-immediate capture. |
| `pre_authorisation` | Reserve funds for later capture, used with manual capture mode. |

:::note
Pre-authorisation must be used with `capture_mode: manual`. For more information, see [Capture an order](https://developer.revolut.com/docs/api/merchant#capture-order).
:::

<h2 id="tocS_Order-Description">Order-Description</h2>
<!-- backwards compatibility -->
<a id="schemaorder-description"></a>
<a id="schema_Order-Description"></a>
<a id="tocSorder-description"></a>
<a id="tocsorder-description"></a>

```json
"string"
```

The description of the order.

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "order_reference": "ORD-12345",
  "customer_segment": "premium",
  "internal_note": "VIP customer - priority handling"
}
```

Additional information to track your orders in your system, by providing custom metadata using `"<key>" : "<value>"` pairs.

:::warning
**Restrictions:**

- Both keys and values must be `string`s
- Values cannot be `null`.
- Max number of key-value pairs: `50`
- Max length of values: `500` characters
- Format of keys: Must start with a letter and contain only letters, digits, and underscores. Max 40 characters. Pattern: `^[a-zA-Z][a-zA-Z\\d_]{0,39}$`
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|Additional metadata value provided with the corresponding metadata key.|

<h2 id="tocS_Related-Order-Id">Related-Order-Id</h2>
<!-- backwards compatibility -->
<a id="schemarelated-order-id"></a>
<a id="schema_Related-Order-Id"></a>
<a id="tocSrelated-order-id"></a>
<a id="tocsrelated-order-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The unique ID of the original order that was refunded and this refund is associated with. You can use this ID to get more information about the related order using the [Retrieve an order](https://developer.revolut.com/docs/api/merchant#retrieve-order) operation.

:::note
This field is only returned for orders with `type: refund`.
:::

<h2 id="tocS_Subscription-Id">Subscription-Id</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-id"></a>
<a id="schema_Subscription-Id"></a>
<a id="tocSsubscription-id"></a>
<a id="tocssubscription-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

Unique identifier for the subscription.

<h2 id="tocS_Subscription-Active-Cycle-Id">Subscription-Active-Cycle-Id</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-active-cycle-id"></a>
<a id="schema_Subscription-Active-Cycle-Id"></a>
<a id="tocSsubscription-active-cycle-id"></a>
<a id="tocssubscription-active-cycle-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The unique identifier of the active (pre-paid) subscription cycle that this order collects payment for.

This is the current billing cycle whose recurring charges are being collected in advance by this order. For example, if a subscription cycle covers 1-31 July and the order is generated on 1 July, this field identifies that July cycle.

<h2 id="tocS_Subscription-Settled-Cycle-Id">Subscription-Settled-Cycle-Id</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-settled-cycle-id"></a>
<a id="schema_Subscription-Settled-Cycle-Id"></a>
<a id="tocSsubscription-settled-cycle-id"></a>
<a id="tocssubscription-settled-cycle-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The unique identifier of the settled (post-paid) subscription cycle whose usage-based charges this order collects.

This is the previous billing cycle whose usage is being settled by this order. For example, if a subscription cycle covers usage from 1-30 June and the order is generated on 10 July, this field identifies that June cycle.

<h2 id="tocS_Subscription-Order-Billing-Reason">Subscription-Order-Billing-Reason</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-order-billing-reason"></a>
<a id="schema_Subscription-Order-Billing-Reason"></a>
<a id="tocSsubscription-order-billing-reason"></a>
<a id="tocssubscription-order-billing-reason"></a>

```json
"cycle_billing"
```

The reason this subscription order was created.

| Value | Description |
| ----- | ----------- |
| `cycle_billing` | The order was automatically generated to collect payment for an ongoing subscription cycle. `active_cycle_id` is present; `settled_cycle_id` is present if the previous cycle included usage-based products. |
| `final_settlement` | The order was automatically generated after the subscription ended to collect outstanding usage-based charges. `active_cycle_id` is absent; `settled_cycle_id` is present. |
| `setup_intent` | The order was manually created by the merchant or customer to update the payment method on file. `active_cycle_id` is absent; `settled_cycle_id` is absent. |

<h2 id="tocS_Subscription-Data">Subscription-Data</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-data"></a>
<a id="schema_Subscription-Data"></a>
<a id="tocSsubscription-data"></a>
<a id="tocssubscription-data"></a>

```json
{
  "subscription_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "active_cycle_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "settled_cycle_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "billing_reason": "cycle_billing"
}
```

Subscription details linked to the order. Use this object to match an order with its underlying subscription and understand the billing context in which the order was created.

Only present on orders created by a subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscription_id|[Subscription-Id](#schemasubscription-id)|true|none|Unique identifier for the subscription.|
|active_cycle_id|[Subscription-Active-Cycle-Id](#schemasubscription-active-cycle-id)|false|none|The unique identifier of the active (pre-paid) subscription cycle that this order collects payment for.<br><br>This is the current billing cycle whose recurring charges are being collected in advance by this order. For example, if a subscription cycle covers 1-31 July and the order is generated on 1 July, this field identifies that July cycle.|
|settled_cycle_id|[Subscription-Settled-Cycle-Id](#schemasubscription-settled-cycle-id)|false|none|The unique identifier of the settled (post-paid) subscription cycle whose usage-based charges this order collects.<br><br>This is the previous billing cycle whose usage is being settled by this order. For example, if a subscription cycle covers usage from 1-30 June and the order is generated on 10 July, this field identifies that June cycle.|
|billing_reason|[Subscription-Order-Billing-Reason](#schemasubscription-order-billing-reason)|true|none|The reason this subscription order was created.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `cycle_billing` \| The order was automatically generated to collect payment for an ongoing subscription cycle. `active_cycle_id` is present; `settled_cycle_id` is present if the previous cycle included usage-based products. \|<br>\| `final_settlement` \| The order was automatically generated after the subscription ended to collect outstanding usage-based charges. `active_cycle_id` is absent; `settled_cycle_id` is present. \|<br>\| `setup_intent` \| The order was manually created by the merchant or customer to update the payment method on file. `active_cycle_id` is absent; `settled_cycle_id` is absent. \||

#### Enumerated Values

|Property|Value|
|---|---|
|billing_reason|cycle_billing|
|billing_reason|final_settlement|
|billing_reason|setup_intent|

<h2 id="tocS_Customer-Id">Customer-Id</h2>
<!-- backwards compatibility -->
<a id="schemacustomer-id"></a>
<a id="schema_Customer-Id"></a>
<a id="tocScustomer-id"></a>
<a id="tocscustomer-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

Unique identifier for the customer.

<h2 id="tocS_Email">Email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_Email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
"user@example.com"
```

The email address of the customer.

<h2 id="tocS_Phone">Phone</h2>
<!-- backwards compatibility -->
<a id="schemaphone"></a>
<a id="schema_Phone"></a>
<a id="tocSphone"></a>
<a id="tocsphone"></a>

```json
"string"
```

The phone number of the customer in [E.164 format](https://en.wikipedia.org/wiki/E.164).

<h2 id="tocS_Full-Name">Full-Name</h2>
<!-- backwards compatibility -->
<a id="schemafull-name"></a>
<a id="schema_Full-Name"></a>
<a id="tocSfull-name"></a>
<a id="tocsfull-name"></a>

```json
"string"
```

The full name of the customer.

<h2 id="tocS_Date-Of-Birth">Date-Of-Birth</h2>
<!-- backwards compatibility -->
<a id="schemadate-of-birth"></a>
<a id="schema_Date-Of-Birth"></a>
<a id="tocSdate-of-birth"></a>
<a id="tocsdate-of-birth"></a>

```json
"1970-01-01"
```

The birth date of the customer.

<h2 id="tocS_Order-Customer-v2">Order-Customer-v2</h2>
<!-- backwards compatibility -->
<a id="schemaorder-customer-v2"></a>
<a id="schema_Order-Customer-v2"></a>
<a id="tocSorder-customer-v2"></a>
<a id="tocsorder-customer-v2"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "email": "user@example.com",
  "phone": "string",
  "full_name": "string",
  "date_of_birth": "1970-01-01"
}
```

A lightweight customer object embedded in an order.

This is a simplified representation intended for the order context. For the full customer object including all payment methods, use the [Retrieve a customer](https://developer.revolut.com/docs/api/merchant#retrieve-customer) endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Customer-Id](#schemacustomer-id)|true|none|Unique identifier for the customer.|
|email|[Email](#schemaemail)|false|none|The email address of the customer.|
|phone|[Phone](#schemaphone)|false|none|The phone number of the customer in [E.164 format](https://en.wikipedia.org/wiki/E.164).|
|full_name|[Full-Name](#schemafull-name)|false|none|The full name of the customer.|
|date_of_birth|[Date-Of-Birth](#schemadate-of-birth)|false|none|The birth date of the customer.|

<h2 id="tocS_Quantity">Quantity</h2>
<!-- backwards compatibility -->
<a id="schemaquantity"></a>
<a id="schema_Quantity"></a>
<a id="tocSquantity"></a>
<a id="tocsquantity"></a>

```json
{
  "value": 0,
  "unit": "string"
}
```

Object representing the quantity details of a line item, including the amount and its associated unit of measurement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|number(double)|true|none|The number of units of the line item.|
|unit|string|false|none|The measurement unit for the quantity, such as `cm`, or `kg`.|

<h2 id="tocS_Discount">Discount</h2>
<!-- backwards compatibility -->
<a id="schemadiscount"></a>
<a id="schema_Discount"></a>
<a id="tocSdiscount"></a>
<a id="tocsdiscount"></a>

```json
{
  "name": "string",
  "amount": 0
}
```

Details of a discount applied to the line item, including its name and monetary value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The specific name or label of the discount applied to the line item.|
|amount|integer(int64)|true|none|The monetary value of the discount. |

<h2 id="tocS_Tax">Tax</h2>
<!-- backwards compatibility -->
<a id="schematax"></a>
<a id="schema_Tax"></a>
<a id="tocStax"></a>
<a id="tocstax"></a>

```json
{
  "name": "string",
  "amount": 0
}
```

Details about a tax applied to the line item, including its name and the corresponding amount.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The specific name or designation of the tax applied to the line item.|
|amount|integer(int64)|true|none|The monetary value of the tax in minor currency units (e.g., cents for EUR).|

<h2 id="tocS_Image-Url">Image-Url</h2>
<!-- backwards compatibility -->
<a id="schemaimage-url"></a>
<a id="schema_Image-Url"></a>
<a id="tocSimage-url"></a>
<a id="tocsimage-url"></a>

```json
"http://example.com"
```

URL to an image associated with the line item.

:::warning
Restrictions:
- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)
- URI scheme is required and must be either `http` or `https`
- URI host is required and cannot be `localhost` or an IP address
- Max length: `2000`
- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)
:::

<h2 id="tocS_Line-Item">Line-Item</h2>
<!-- backwards compatibility -->
<a id="schemaline-item"></a>
<a id="schema_Line-Item"></a>
<a id="tocSline-item"></a>
<a id="tocsline-item"></a>

```json
{
  "name": "string",
  "type": "physical",
  "quantity": {
    "value": 0,
    "unit": "string"
  },
  "unit_price_amount": 0,
  "total_amount": 0,
  "external_id": "string",
  "discounts": [
    {
      "name": "string",
      "amount": 0
    }
  ],
  "taxes": [
    {
      "name": "string",
      "amount": 0
    }
  ],
  "image_urls": [
    "http://example.com"
  ],
  "description": "string",
  "url": "http://example.com"
}
```

A single line item in an order, describing a product or service with its quantity and price details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the line item.|
|type|string|true|none|Type of the line item.|
|quantity|[Quantity](#schemaquantity)|true|none|Object representing the quantity details of a line item, including the amount and its associated unit of measurement.|
|unit_price_amount|integer(int64)|true|none|The unit price of the line item.|
|total_amount|integer(int64)|true|none|The total amount to be paid for the line item, including taxes and discounts.|
|external_id|string|false|none|Unique identifier of line item in the merchant's system.|
|discounts|[[Discount](#schemadiscount)]|false|none|A list of discounts applied to the line item. Each discount should be subtracted from the total amount payable for the item.|
|taxes|[[Tax](#schematax)]|false|none|A list of taxes applied to the line item. Each tax should be added to the total amount payable for the item.|
|image_urls|[[Image-Url](#schemaimage-url)]|false|none|A list of URLs pointing to images related to the line item. These images can provide visual details or representations of the item.|
|description|string|false|none|Description of the line item.|
|url|string(uri)|false|none|An HTTP/HTTPS URL that links to more information about the line item, such as a product page or details.<br><br>:::warning<br>Restrictions:<br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be either `http` or `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `2000`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::|

#### Enumerated Values

|Property|Value|
|---|---|
|type|physical|
|type|service|

<h2 id="tocS_Line-Items">Line-Items</h2>
<!-- backwards compatibility -->
<a id="schemaline-items"></a>
<a id="schema_Line-Items"></a>
<a id="tocSline-items"></a>
<a id="tocsline-items"></a>

```json
[
  {
    "name": "string",
    "type": "physical",
    "quantity": {
      "value": 0,
      "unit": "string"
    },
    "unit_price_amount": 0,
    "total_amount": 0,
    "external_id": "string",
    "discounts": [
      {
        "name": "string",
        "amount": 0
      }
    ],
    "taxes": [
      {
        "name": "string",
        "amount": 0
      }
    ],
    "image_urls": [
      "http://example.com"
    ],
    "description": "string",
    "url": "http://example.com"
  }
]
```

An array of line items included in the order. Each line item represents an individual product or service, along with its quantity, price, taxes, and discounts.

:::info
Required for merchants collecting payment for one or multiple products/services in one transaction. Omitting this information may trigger additional scrutiny and risk mitigation actions by Revolut.
:::

<h2 id="tocS_Merchant-Order-Url">Merchant-Order-Url</h2>
<!-- backwards compatibility -->
<a id="schemamerchant-order-url"></a>
<a id="schema_Merchant-Order-Url"></a>
<a id="tocSmerchant-order-url"></a>
<a id="tocsmerchant-order-url"></a>

```json
"http://example.com"
```

The URL of the order stored in the merchant's order management system.

This URL will be included in the order confirmation email for payments made via Revolut Pay. If specified, this URL will override the default link to the merchant's **Business website** configured in the Revolut Business account.

:::warning
Restrictions:
- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)
- URI scheme is required and must be either `http` or `https`
- URI host is required and cannot be `localhost` or an IP address
- Max length: `2000`
- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)
:::

<h2 id="tocS_Merchant-Order-Data">Merchant-Order-Data</h2>
<!-- backwards compatibility -->
<a id="schemamerchant-order-data"></a>
<a id="schema_Merchant-Order-Data"></a>
<a id="tocSmerchant-order-data"></a>
<a id="tocsmerchant-order-data"></a>

```json
{
  "url": "http://example.com",
  "reference": "string"
}
```

Object for providing additional information stored in the merchant's order management system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|[Merchant-Order-Url](#schemamerchant-order-url)|false|none|The URL of the order stored in the merchant's order management system.<br><br>This URL will be included in the order confirmation email for payments made via Revolut Pay. If specified, this URL will override the default link to the merchant's **Business website** configured in the Revolut Business account.<br><br>:::warning<br>Restrictions:<br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be either `http` or `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `2000`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::|
|reference|[Merchant-Order-External-Reference](#schemamerchant-order-external-reference)|false|none|Merchant order ID for external reference.<br><br>Use this field to set the ID that your own system can use to easily track orders.|

<h2 id="tocS_Location-Id">Location-Id</h2>
<!-- backwards compatibility -->
<a id="schemalocation-id"></a>
<a id="schema_Location-Id"></a>
<a id="tocSlocation-id"></a>
<a id="tocslocation-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

Unique ID representing the location where merchants sells products.

:::info
For more information, see: [Locations](https://developer.revolut.com/docs/api/merchant#tag-locations).
:::

<h2 id="tocS_Redirect-Url">Redirect-Url</h2>
<!-- backwards compatibility -->
<a id="schemaredirect-url"></a>
<a id="schema_Redirect-Url"></a>
<a id="tocSredirect-url"></a>
<a id="tocsredirect-url"></a>

```json
"http://example.com"
```

The URL your customer will be redirected to after completing a payment flow.

- **Hosted Checkout Page** (`checkout_url`): This is the post-success URL - the customer is redirected only after a successful payment.
- **Embedded Revolut Pay** (Revolut Checkout widget): This URL is used for all redirect outcomes - success, failure, and cancellation.

:::warning [Restrictions]
- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)
- URI scheme is required and must be either `http` or `https`
- URI host is required and cannot be `localhost` or an IP address
- Max length: `2000`
- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)
:::

:::note [Revolut Checkout]
- Revolut Pay will not appear in the widget on mobile devices unless redirect targets are configured - either via this `redirect_url` parameter or the SDK-level `revolutPayOptions.mobileRedirectUrls` option.
- If `redirect_url` is set on the order, it takes precedence over `revolutPayOptions.mobileRedirectUrls` and is used for all redirect outcomes (success, failure, cancel).
:::

:::info
For more information, see:
- [Hosted Checkout Page: Custom redirection](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/hosted-checkout-page/api#custom-post-payment-redirection-optional)
- [Revolut Checkout: Configure mobile redirects](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/revolut-checkout/web#35-configure-revolut-pay-mobile-redirects)
:::

<h2 id="tocS_Cancel-Authorised-After">Cancel-Authorised-After</h2>
<!-- backwards compatibility -->
<a id="schemacancel-authorised-after"></a>
<a id="schema_Cancel-Authorised-After"></a>
<a id="tocScancel-authorised-after"></a>
<a id="tocscancel-authorised-after"></a>

```json
"string"
```

Automatic cancellation period for uncaptured orders, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. 

After this period, the authorised payment is automatically cancelled and the order is cancelled. Maximum: 7 days = `P7D`.

:::note
The following limitations apply:
  - Cannot be a negative value.
  - Cannot be updated if the new value is less than or equal to the elapsed time since authorisation. 

    **Failing scenario:**
      - Original value: 7 days
      - Time since authorisation: 3 days
      - Update value: 2 days
      
    In this scenario, an error is returned.
    
    **Successful scenario:**
      - Original value: 7 days
      - Time since authorisation: 3 days
      - Update value: 4 days

    In this scenario, the parameter can be updated.

  - Cannot be updated if cancellation is ≤ 30 minutes away.

    **Failing scenario:**
      - Original value: 12 hours
      - Time since authorisation: 11 hours 40 minutes
                        
    In this scenario, an error is returned.
    
    **Successful scenario:** 
      - Original value: 12 hours
      - Time since authorisation: 11 hours 20 minutes

    In this scenario, the parameter can be updated.
:::

<h2 id="tocS_Statement-Descriptor-Suffix">Statement-Descriptor-Suffix</h2>
<!-- backwards compatibility -->
<a id="schemastatement-descriptor-suffix"></a>
<a id="schema_Statement-Descriptor-Suffix"></a>
<a id="tocSstatement-descriptor-suffix"></a>
<a id="tocsstatement-descriptor-suffix"></a>

```json
"string"
```

You can set a dynamic statement descriptor for your orders by providing a custom suffix. 

A statement descriptor is the text shown on cardholders' bank or card statements, helping them recognise a transaction or merchant. This field can be used to send extra information with the statement descriptor for card transactions.

The complete descriptor is built using the following format: `{base}*{suffix}`, where:
  
  - **`{base}`** is the existing descriptor configured in the Revolut Business dashboard (**Settings > Business account > Merchant profile > Statement descriptor**).  
  - **`{suffix}`** is defined by the `statement_descriptor_suffix` field.

:::note
- If the combined descriptor's length (base + suffix) exceeds the character limits of card scheme providers, the final value will be truncated. For example if the limit is 22 characters, the base descriptor is `"base"` and the suffix is `"testdescriptorsuffix"`, the final descriptor becomes `"base*testdescriptorsuf"`.
- The final statement descriptor shown on a cardholder's statement may vary by issuing bank, as some banks apply their own custom formatting or truncation rules.
:::

<h2 id="tocS_Order-Simplified-v2">Order-Simplified-v2</h2>
<!-- backwards compatibility -->
<a id="schemaorder-simplified-v2"></a>
<a id="schema_Order-Simplified-v2"></a>
<a id="tocSorder-simplified-v2"></a>
<a id="tocsorder-simplified-v2"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "token": "string",
  "type": "payment",
  "state": "authorised",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "amount": 0,
  "currency": "str",
  "outstanding_amount": 0,
  "capture_mode": "automatic",
  "enforce_challenge": "automatic",
  "authorisation_type": "final",
  "description": "string",
  "metadata": {
    "order_reference": "ORD-12345",
    "customer_segment": "premium",
    "internal_note": "VIP customer - priority handling"
  },
  "related_order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "subscription_data": {
    "subscription_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "active_cycle_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "settled_cycle_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "billing_reason": "cycle_billing"
  },
  "customer": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "user@example.com",
    "phone": "string",
    "full_name": "string",
    "date_of_birth": "1970-01-01"
  },
  "line_items": [
    {
      "name": "string",
      "type": "physical",
      "quantity": {
        "value": 0,
        "unit": "string"
      },
      "unit_price_amount": 0,
      "total_amount": 0,
      "external_id": "string",
      "discounts": [
        {
          "name": "string",
          "amount": 0
        }
      ],
      "taxes": [
        {
          "name": "string",
          "amount": 0
        }
      ],
      "image_urls": [
        "http://example.com"
      ],
      "description": "string",
      "url": "http://example.com"
    }
  ],
  "merchant_order_data": {
    "url": "http://example.com",
    "reference": "string"
  },
  "location_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "redirect_url": "http://example.com",
  "cancel_authorised_after": "string",
  "statement_descriptor_suffix": "string"
}
```

A simplified order object returned in list responses.

To get the full details of an order, use the [Retrieve an order](https://developer.revolut.com/docs/api/merchant#retrieve-order) endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Order-Id](#schemaorder-id)|true|none|Permanent order ID used to retrieve, capture, cancel, or refund an order after authorization.|
|token|[Order-Token](#schemaorder-token)|false|none|Temporary ID for the order, which expires when the payment is authorised.<br><br>The order `token` is used for [token-based initialisation](https://developer.revolut.com/docs/sdks/merchant-web-sdk/initialisation/token-based), and is returned by the `createOrder` callback in the following payment methods:<br><br>- [Embedded Checkout](https://developer.revolut.com/docs/sdks/merchant-web-sdk/payment-methods/embedded-checkout#embedded-checkout-options-interface)<br>- [Revolut Pay](https://developer.revolut.com/docs/sdks/merchant-web-sdk/payment-methods/revolut-pay#widget-payments-revolut-pay-options)<br>- [Apple Pay and Google Pay](https://developer.revolut.com/docs/sdks/merchant-web-sdk/payment-methods/apple-pay-google-pay#payment-request-options-interface)<br>- [Pay by Bank](https://developer.revolut.com/docs/sdks/merchant-web-sdk/payment-methods/pay-by-bank#pay-by-bank-options-interface)|
|type|[Order-Type-v2](#schemaorder-type-v2)|true|none|The type of the order.|
|state|[Order-State](#schemaorder-state)|true|none|The state of the order in its lifecycle.<br><br>\| State \| Description \|<br>\|-------\|-------------\|<br>\| `pending` \| Order created, awaiting payment \|<br>\| `processing` \| Payment is being processed \|<br>\| `authorised` \| Payment authorised but not yet captured (for manual capture) \|<br>\| `completed` \| Payment successfully captured and settled \|<br>\| `cancelled` \| Order was cancelled \|<br>\| `failed` \| Payment failed \|<br><br>:::info<br>For more information, see: [Order and payment lifecycle](https://developer.revolut.com/docs/guides/merchant/reference/order-lifecycle)<br>:::|
|created_at|string(date-time)|true|none|The date and time the order was created.|
|updated_at|string(date-time)|true|none|The date and time the order was last updated.|
|amount|[Order-Amount-v2](#schemaorder-amount-v2)|true|none|The order total expressed in minor currency units, according to the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217). For example, `7034` in `EUR` corresponds to €70.34.<br><br>:::info<br>- Conversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).<br>- If `line_items` are provided, the order `amount` must equal the sum of all line items' `total_amount`.<br>- For card payments with a non-zero amount, the order `amount` must be at least **$0.005** (or equivalent in different currencies, calculated using Revolut's exchange rate on the payment date). Otherwise, card payments can't be performed.<br>:::|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|outstanding_amount|[Outstanding-Amount](#schemaoutstanding-amount)|true|none|The amount not yet paid for a given order (in minor currency units). For example, `7034` represents €70.34. <br><br>The value in this field may differ from `amount` if there are partial payments associated with the order.|
|capture_mode|[Capture-Mode-v2](#schemacapture-mode-v2)|true|none|The capture mode of the order. `automatic` is used by default.<br><br>\| Parameter value \| Description \|<br>\| --------------- \| ----------- \|<br>\| `automatic` \| The order is captured automatically after payment authorisation. \|<br>\| `manual` \| The order is not captured automatically. You must manually capture the order later. \|<br><br>:::info<br>For more information, see [Capture an order](https://developer.revolut.com/docs/api/merchant#capture-order).<br>:::|
|enforce_challenge|[Enforce-Challenge-v2](#schemaenforce-challenge-v2)|true|none|The enforce challenge mode. `automatic` is used by default.<br><br>\| Parameter value \| Description \|<br>\| --------------- \| ----------- \|<br>\| `automatic` \| The payments created for an order will have challenge requirement calculated by our fraud mechanisms. Not all payments will trigger a 3DS challenge. \|<br>\| `forced` \| The payments created for an order will always require a 3DS challenge. Currently only supported for card payments. \||
|authorisation_type|[Authorisation-Type](#schemaauthorisation-type)|false|none|The type of authorisation for the order. Used with manual capture mode. If omitted, `final` is used by default.<br><br>### Pre-authorisation<br><br>Pre-authorisation allows you to reserve funds on a customer's card without immediately capturing them. This is useful for scenarios like:<br><br>- Hotel bookings where the final amount may vary<br>- Car rentals where additional charges may apply<br>- Deposits that need to be held temporarily<br><br>\| Parameter value \| Description \|<br>\| --------------- \| ----------- \|<br>\| `final` \| Standard authorisation for immediate or near-immediate capture. \|<br>\| `pre_authorisation` \| Reserve funds for later capture, used with manual capture mode. \|<br><br>:::note<br>Pre-authorisation must be used with `capture_mode: manual`. For more information, see [Capture an order](https://developer.revolut.com/docs/api/merchant#capture-order).<br>:::|
|description|[Order-Description](#schemaorder-description)|false|none|The description of the order.|
|metadata|[Metadata](#schemametadata)|false|none|Additional information to track your orders in your system, by providing custom metadata using `"<key>" : "<value>"` pairs.<br><br>:::warning<br>**Restrictions:**<br><br>- Both keys and values must be `string`s<br>- Values cannot be `null`.<br>- Max number of key-value pairs: `50`<br>- Max length of values: `500` characters<br>- Format of keys: Must start with a letter and contain only letters, digits, and underscores. Max 40 characters. Pattern: `^[a-zA-Z][a-zA-Z\\d_]{0,39}$`<br>:::|
|related_order_id|[Related-Order-Id](#schemarelated-order-id)|false|none|The unique ID of the original order that was refunded and this refund is associated with. You can use this ID to get more information about the related order using the [Retrieve an order](https://developer.revolut.com/docs/api/merchant#retrieve-order) operation.<br><br>:::note<br>This field is only returned for orders with `type: refund`.<br>:::|
|subscription_data|[Subscription-Data](#schemasubscription-data)|false|none|Subscription details linked to the order. Use this object to match an order with its underlying subscription and understand the billing context in which the order was created.<br><br>Only present on orders created by a subscription.|
|customer|[Order-Customer-v2](#schemaorder-customer-v2)|false|none|A lightweight customer object embedded in an order.<br><br>This is a simplified representation intended for the order context. For the full customer object including all payment methods, use the [Retrieve a customer](https://developer.revolut.com/docs/api/merchant#retrieve-customer) endpoint.|
|line_items|[Line-Items](#schemaline-items)|false|none|An array of line items included in the order. Each line item represents an individual product or service, along with its quantity, price, taxes, and discounts.<br><br>:::info<br>Required for merchants collecting payment for one or multiple products/services in one transaction. Omitting this information may trigger additional scrutiny and risk mitigation actions by Revolut.<br>:::|
|merchant_order_data|[Merchant-Order-Data](#schemamerchant-order-data)|false|none|Object for providing additional information stored in the merchant's order management system. |
|location_id|[Location-Id](#schemalocation-id)|false|none|Unique ID representing the location where merchants sells products.<br><br>:::info<br>For more information, see: [Locations](https://developer.revolut.com/docs/api/merchant#tag-locations).<br>:::        |
|redirect_url|[Redirect-Url](#schemaredirect-url)|false|none|The URL your customer will be redirected to after completing a payment flow.<br><br>- **Hosted Checkout Page** (`checkout_url`): This is the post-success URL - the customer is redirected only after a successful payment.<br>- **Embedded Revolut Pay** (Revolut Checkout widget): This URL is used for all redirect outcomes - success, failure, and cancellation.<br><br>:::warning [Restrictions]<br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be either `http` or `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `2000`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::<br><br>:::note [Revolut Checkout]<br>- Revolut Pay will not appear in the widget on mobile devices unless redirect targets are configured - either via this `redirect_url` parameter or the SDK-level `revolutPayOptions.mobileRedirectUrls` option.<br>- If `redirect_url` is set on the order, it takes precedence over `revolutPayOptions.mobileRedirectUrls` and is used for all redirect outcomes (success, failure, cancel).<br>:::<br><br>:::info<br>For more information, see:<br>- [Hosted Checkout Page: Custom redirection](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/hosted-checkout-page/api#custom-post-payment-redirection-optional)<br>- [Revolut Checkout: Configure mobile redirects](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/revolut-checkout/web#35-configure-revolut-pay-mobile-redirects)<br>:::|
|cancel_authorised_after|[Cancel-Authorised-After](#schemacancel-authorised-after)|false|none|Automatic cancellation period for uncaptured orders, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. <br><br>After this period, the authorised payment is automatically cancelled and the order is cancelled. Maximum: 7 days = `P7D`.<br><br>:::note<br>The following limitations apply:<br>  - Cannot be a negative value.<br>  - Cannot be updated if the new value is less than or equal to the elapsed time since authorisation. <br><br>    **Failing scenario:**<br>      - Original value: 7 days<br>      - Time since authorisation: 3 days<br>      - Update value: 2 days<br>      <br>    In this scenario, an error is returned.<br>    <br>    **Successful scenario:**<br>      - Original value: 7 days<br>      - Time since authorisation: 3 days<br>      - Update value: 4 days<br><br>    In this scenario, the parameter can be updated.<br><br>  - Cannot be updated if cancellation is ≤ 30 minutes away.<br><br>    **Failing scenario:**<br>      - Original value: 12 hours<br>      - Time since authorisation: 11 hours 40 minutes<br>                        <br>    In this scenario, an error is returned.<br>    <br>    **Successful scenario:** <br>      - Original value: 12 hours<br>      - Time since authorisation: 11 hours 20 minutes<br><br>    In this scenario, the parameter can be updated.<br>:::|
|statement_descriptor_suffix|[Statement-Descriptor-Suffix](#schemastatement-descriptor-suffix)|false|none|You can set a dynamic statement descriptor for your orders by providing a custom suffix. <br><br>A statement descriptor is the text shown on cardholders' bank or card statements, helping them recognise a transaction or merchant. This field can be used to send extra information with the statement descriptor for card transactions.<br><br>The complete descriptor is built using the following format: `{base}*{suffix}`, where:<br>  <br>  - **`{base}`** is the existing descriptor configured in the Revolut Business dashboard (**Settings > Business account > Merchant profile > Statement descriptor**).  <br>  - **`{suffix}`** is defined by the `statement_descriptor_suffix` field.<br><br>:::note<br>- If the combined descriptor's length (base + suffix) exceeds the character limits of card scheme providers, the final value will be truncated. For example if the limit is 22 characters, the base descriptor is `"base"` and the suffix is `"testdescriptorsuffix"`, the final descriptor becomes `"base*testdescriptorsuf"`.<br>- The final statement descriptor shown on a cardholder's statement may vary by issuing bank, as some banks apply their own custom formatting or truncation rules.<br>:::|

#### Enumerated Values

|Property|Value|
|---|---|
|type|payment|
|type|payment_request|
|type|refund|
|type|chargeback|
|type|chargeback_reversal|
|type|credit_reimbursement|
|state|pending|
|state|processing|
|state|authorised|
|state|completed|
|state|cancelled|
|state|failed|
|capture_mode|automatic|
|capture_mode|manual|
|enforce_challenge|automatic|
|enforce_challenge|forced|
|authorisation_type|final|
|authorisation_type|pre_authorisation|

<h2 id="tocS_Orders-v2">Orders-v2</h2>
<!-- backwards compatibility -->
<a id="schemaorders-v2"></a>
<a id="schema_Orders-v2"></a>
<a id="tocSorders-v2"></a>
<a id="tocsorders-v2"></a>

```json
{
  "orders": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "token": "string",
      "type": "payment",
      "state": "authorised",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "amount": 0,
      "currency": "str",
      "outstanding_amount": 0,
      "capture_mode": "automatic",
      "enforce_challenge": "automatic",
      "authorisation_type": "final",
      "description": "string",
      "metadata": {
        "order_reference": "ORD-12345",
        "customer_segment": "premium",
        "internal_note": "VIP customer - priority handling"
      },
      "related_order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "subscription_data": {
        "subscription_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "active_cycle_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "settled_cycle_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "billing_reason": "cycle_billing"
      },
      "customer": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "email": "user@example.com",
        "phone": "string",
        "full_name": "string",
        "date_of_birth": "1970-01-01"
      },
      "line_items": [
        {
          "name": "string",
          "type": "physical",
          "quantity": {
            "value": 0,
            "unit": "string"
          },
          "unit_price_amount": 0,
          "total_amount": 0,
          "external_id": "string",
          "discounts": [
            {
              "name": "string",
              "amount": 0
            }
          ],
          "taxes": [
            {
              "name": "string",
              "amount": 0
            }
          ],
          "image_urls": [
            "http://example.com"
          ],
          "description": "string",
          "url": "http://example.com"
        }
      ],
      "merchant_order_data": {
        "url": "http://example.com",
        "reference": "string"
      },
      "location_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "redirect_url": "http://example.com",
      "cancel_authorised_after": "string",
      "statement_descriptor_suffix": "string"
    }
  ]
}
```

A paginated list of orders.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orders|[[Order-Simplified-v2](#schemaorder-simplified-v2)]|true|none|List of orders.|

<h2 id="tocS_Error-v2">Error-v2</h2>
<!-- backwards compatibility -->
<a id="schemaerror-v2"></a>
<a id="schema_Error-v2"></a>
<a id="tocSerror-v2"></a>
<a id="tocserror-v2"></a>

```json
{
  "code": "string",
  "message": "string",
  "timestamp": 0
}
```

An error response returned by the API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| integer|true|none|An identifier for the error. This can be either a string (e.g., `"validation"`, `"bad_state"`) or an integer (e.g., `1005`, `2054`). Share this code with Revolut support for troubleshooting.|
|message|string|false|none|Human-readable text describing what went wrong. Not always present.|
|timestamp|integer|true|none|The [UNIX timestamp](https://www.unixtimestamp.com/) (in milliseconds) of when the error occurred.|

<h2 id="tocS_Settlement-Currency">Settlement-Currency</h2>
<!-- backwards compatibility -->
<a id="schemasettlement-currency"></a>
<a id="schema_Settlement-Currency"></a>
<a id="tocSsettlement-currency"></a>
<a id="tocssettlement-currency"></a>

```json
"string"
```

[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case. 

If `settlement_currency` is different from the value of `currency`, the money will be exchanged when the amount is settled to your merchant account. In case of a refund or chargeback, the money will be exchanged to the order's initial `currency`.

If `settlement_currency` is not specified, this value is taken from `currency`.

:::info
For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).
:::

<h2 id="tocS_Customer-v2">Customer-v2</h2>
<!-- backwards compatibility -->
<a id="schemacustomer-v2"></a>
<a id="schema_Customer-v2"></a>
<a id="tocScustomer-v2"></a>
<a id="tocscustomer-v2"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "full_name": "string",
  "phone": "string",
  "email": "user@example.com",
  "date_of_birth": "1970-01-01"
}
```

Object containing information about a customer.

If you have it, we strongly advise providing at least either `id`, `phone`, or `email`.

Using the [Customers operations](https://developer.revolut.com/docs/api/merchant#tag-customers), you can manage customer instances.

The following behaviours apply to different use cases:

  | Use case | API behavior |
  | -------- | ------------ |
  | Existing customer | If `id` was provided, we ignore other customer details and associate the customer with the order.<br/><br/>If either `email`, `phone`, or `full_name` was provided (without an existing customer's `id`), we always create a new customer, irrespective of another, existing customer object having the same details. |
  | New customer | If either `email`, `phone`, or `full_name` was provided, we create a new customer, irrespective of another customer object having the same details. <br/><br/>If `id` of a non-existent customer was provided, we return a `404` error, irrespective of other details provided. |

:::note
To avoid unintentional duplication of customer records, search for an existing customer by email or phone using the [List customers](https://developer.revolut.com/docs/api/merchant#retrieve-customer-list) endpoint first, then provide `customer.id` in the order.
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|Permanent ID of a customer used to retrieve, update, delete a customer. This ID can also be used to link customer to an order.<br><br>:::note<br>If you provide the customer's ID during order creation, no other customer data is required, they will be parsed automatically from the referenced customer object.<br>:::|
|full_name|[Full-Name](#schemafull-name)|false|none|The full name of the customer.|
|phone|[Phone](#schemaphone)|false|none|The phone number of the customer in [E.164 format](https://en.wikipedia.org/wiki/E.164).|
|email|[Email](#schemaemail)|false|none|The email address of the customer.|
|date_of_birth|[Date-Of-Birth](#schemadate-of-birth)|false|none|The birth date of the customer.|

<h2 id="tocS_Address-v3">Address-v3</h2>
<!-- backwards compatibility -->
<a id="schemaaddress-v3"></a>
<a id="schema_Address-v3"></a>
<a id="tocSaddress-v3"></a>
<a id="tocsaddress-v3"></a>

```json
{
  "street_line_1": "string",
  "street_line_2": "string",
  "region": "string",
  "city": "string",
  "country_code": "st",
  "postcode": "string"
}
```

Details of a physical address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|street_line_1|string|true|none|Primary address line.|
|street_line_2|string|false|none|Secondary address line, such as floor and apartment number.|
|region|string|false|none|State or province of the address.|
|city|string|true|none|City of the address.|
|country_code|string|true|none|ISO 2-letter country code.|
|postcode|string|true|none|Postal code of the address.|

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "name": "string",
  "email": "user@example.com",
  "phone": "string"
}
```

Contact details for someone responsible for the shipment.

:::warning
At least `email` or `phone` is required.
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Full name of the contact person.|
|email|string(email)|false|none|Email address of the contact person.|
|phone|string|false|none|Phone number of the contact person.|

<h2 id="tocS_Shipment">Shipment</h2>
<!-- backwards compatibility -->
<a id="schemashipment"></a>
<a id="schema_Shipment"></a>
<a id="tocSshipment"></a>
<a id="tocsshipment"></a>

```json
{
  "shipping_company_name": "string",
  "tracking_number": "string",
  "estimated_delivery_date": "1970-01-01T00:00:00Z",
  "tracking_url": "http://example.com"
}
```

Details of an individual shipment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shipping_company_name|string|true|none|Name of the company handling the shipment.|
|tracking_number|string|true|none|Unique tracking number for the shipment.|
|estimated_delivery_date|string(date-time)|false|none|Estimated delivery date and time for the shipment. <br>The time should also include the customer's timezone.|
|tracking_url|string(uri)|false|none|An HTTP/HTTPS URL where the shipment can be tracked.<br><br>:::warning<br>Restrictions:<br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be either `http` or `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `2000`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::|

<h2 id="tocS_Shipments">Shipments</h2>
<!-- backwards compatibility -->
<a id="schemashipments"></a>
<a id="schema_Shipments"></a>
<a id="tocSshipments"></a>
<a id="tocsshipments"></a>

```json
[
  {
    "shipping_company_name": "string",
    "tracking_number": "string",
    "estimated_delivery_date": "1970-01-01T00:00:00Z",
    "tracking_url": "http://example.com"
  }
]
```

List of individual shipment details.

<h2 id="tocS_Shipping">Shipping</h2>
<!-- backwards compatibility -->
<a id="schemashipping"></a>
<a id="schema_Shipping"></a>
<a id="tocSshipping"></a>
<a id="tocsshipping"></a>

```json
{
  "address": {
    "street_line_1": "string",
    "street_line_2": "string",
    "region": "string",
    "city": "string",
    "country_code": "st",
    "postcode": "string"
  },
  "contact": {
    "name": "string",
    "email": "user@example.com",
    "phone": "string"
  },
  "shipments": [
    {
      "shipping_company_name": "string",
      "tracking_number": "string",
      "estimated_delivery_date": "1970-01-01T00:00:00Z",
      "tracking_url": "http://example.com"
    }
  ]
}
```

Details about the shipping related to the order, including address, contact information, and individual shipments.

:::info
Required for merchants shipping physical goods. Omitting this information may trigger additional scrutiny and risk mitigation actions by Revolut.
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address-v3](#schemaaddress-v3)|false|none|Details of a physical address.|
|contact|[Contact](#schemacontact)|false|none|Contact details for someone responsible for the shipment.<br><br>:::warning<br>At least `email` or `phone` is required.<br>:::|
|shipments|[Shipments](#schemashipments)|false|none|List of individual shipment details.|

<h2 id="tocS_Expire-Pending-After">Expire-Pending-After</h2>
<!-- backwards compatibility -->
<a id="schemaexpire-pending-after"></a>
<a id="schema_Expire-Pending-After"></a>
<a id="tocSexpire-pending-after"></a>
<a id="tocsexpire-pending-after"></a>

```json
"PT15M"
```

Automatic expiration period for pending orders, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

Orders in `pending` state will be automatically failed if they stay unpaid for longer than the period specified.

When the order expires, it transitions to the `failed` state and an `ORDER_FAILED` webhook event is triggered.

:::note
- This field can only be set during order creation and cannot be updated afterward.
- Must be between `PT1M` (1 minute) and `PT720H` (30 days).
- Cannot be a negative value.
:::

<h2 id="tocS_Industry-Data-Type">Industry-Data-Type</h2>
<!-- backwards compatibility -->
<a id="schemaindustry-data-type"></a>
<a id="schema_Industry-Data-Type"></a>
<a id="tocSindustry-data-type"></a>
<a id="tocsindustry-data-type"></a>

```json
"airline"
```

Type of the industry-specific data object, determining what additional data is expected.

Available types:

  | Object type   | Description |
  | ------------- | ----------- |
  | `airline`     | Object containing information about a specific airline ticket purchase. |
  | `car_rental`  | Object containing information about a car rental booking associated with the order. |
  | `crypto`      | Object containing information about crypto transactions associated with the order. |
  | `marketplace` | This object is required by Mastercard and Visa for merchants operating as marketplaces under the **Merchant Category Code (MCC):** `5262`. The marketplace object ensures compliance with the card schemes' regulations by providing detailed information about the subseller involved in the transaction. |
  | `event` | Object containing information about event ticket bookings associated with the order. |
  | `lodging` | Object containing information about lodging bookings associated with the order. |

<h2 id="tocS_Booking-Id">Booking-Id</h2>
<!-- backwards compatibility -->
<a id="schemabooking-id"></a>
<a id="schema_Booking-Id"></a>
<a id="tocSbooking-id"></a>
<a id="tocsbooking-id"></a>

```json
"string"
```

A unique identifier provided by the merchant associated with the order. 

This `booking_id` is used to reference and correlate booking information with the Merchant API and the merchant's internal system.

<h2 id="tocS_Refundability">Refundability</h2>
<!-- backwards compatibility -->
<a id="schemarefundability"></a>
<a id="schema_Refundability"></a>
<a id="tocSrefundability"></a>
<a id="tocsrefundability"></a>

```json
"refundable"
```

Parameter indicating whether the booking is refundable, partially refundable, or not refundable.

<h2 id="tocS_Passenger">Passenger</h2>
<!-- backwards compatibility -->
<a id="schemapassenger"></a>
<a id="schema_Passenger"></a>
<a id="tocSpassenger"></a>
<a id="tocspassenger"></a>

```json
{
  "first_name": "string",
  "last_name": "string"
}
```

A passenger's first and last name, used in travel-related order data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|Passenger's first name.|
|last_name|string|true|none|Passenger's last name.|

<h2 id="tocS_Passengers">Passengers</h2>
<!-- backwards compatibility -->
<a id="schemapassengers"></a>
<a id="schema_Passengers"></a>
<a id="tocSpassengers"></a>
<a id="tocspassengers"></a>

```json
[
  {
    "first_name": "string",
    "last_name": "string"
  }
]
```

Array containing information of passengers associated with the booking.

<h2 id="tocS_Journey-Leg">Journey-Leg</h2>
<!-- backwards compatibility -->
<a id="schemajourney-leg"></a>
<a id="schema_Journey-Leg"></a>
<a id="tocSjourney-leg"></a>
<a id="tocsjourney-leg"></a>

```json
{
  "sequence": 0,
  "departure_airport_code": "string",
  "arrival_airport_code": "string",
  "flight_number": "string",
  "fare_base_code": "string",
  "travel_date": "1970-01-01T00:00:00Z",
  "airline_name": "string",
  "airline_code": "string",
  "pnr": "string"
}
```

A single leg of a journey, including departure and arrival airports, flight details, and airline information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sequence|integer|true|none|Sequence of the journey legs. Increment by 1 for each flight included in the ticket.<br><br>For example: For a `FRA > LHR > DUB > LHR > FRA` journey the sequence will be assigned as:<br>  - `FRA > LHR`: 1<br>  - `LHR > DUB`: 2<br>  - `DUB > LHR`: 3<br>  - `LHR > FRA`: 4|
|departure_airport_code|string|true|none|The [IATA](https://www.iata.org/en/services/codes) 3-letter airport code for the departure airport.|
|arrival_airport_code|string|true|none|The [IATA](https://www.iata.org/en/services/codes) 3-letter airport code for the arrival airport.|
|flight_number|string|false|none|The flight identifier, without airline code.|
|fare_base_code|string|false|none|The fare base code for the given journey leg.|
|travel_date|string(date-time)|true|none|The UTC date and time of the flight departure for the given journey leg.|
|airline_name|string|true|none|The name of the airline associated with the journey leg.|
|airline_code|string|true|none|The IATA 2-letter accounting code identifying the airline associated with the journey leg.|
|pnr|string|false|none|The Passenger Name Record (PNR) for the journey leg issued by the airline. <br><br>PNR is a unique identifier for the booking, acting as a digital certificate allowing passengers to retrieve or manage their booking details.<br><br>:::warning<br>This is a required field for OTAs.<br>:::|

<h2 id="tocS_Journey-Legs">Journey-Legs</h2>
<!-- backwards compatibility -->
<a id="schemajourney-legs"></a>
<a id="schema_Journey-Legs"></a>
<a id="tocSjourney-legs"></a>
<a id="tocsjourney-legs"></a>

```json
[
  {
    "sequence": 0,
    "departure_airport_code": "string",
    "arrival_airport_code": "string",
    "flight_number": "string",
    "fare_base_code": "string",
    "travel_date": "1970-01-01T00:00:00Z",
    "airline_name": "string",
    "airline_code": "string",
    "pnr": "string"
  }
]
```

Array containing information of journey legs associated with the booking.

:::info
This field is required for activating **Revolut Flight Alerts** functionalities within the Revolut app. 

This information is used to compile a tracking widget that provides real-time updates on flight status and sends notifications, such as a check-in reminders, boarding alerts, and notifications for cancellations or delays. 

To enable the widget the following fields are required on order creation or update, before capturing the order:

  ```
  sequence,
  departure_airport_code,
  arrival_airport_code,
  flight_number,
  travel_date,
  airline_name,
  airline_code,
  ```
:::

<h2 id="tocS_Airline-Data">Airline-Data</h2>
<!-- backwards compatibility -->
<a id="schemaairline-data"></a>
<a id="schema_Airline-Data"></a>
<a id="tocSairline-data"></a>
<a id="tocsairline-data"></a>

```json
{
  "type": "airline",
  "booking_id": "string",
  "fulfillment_date": "1970-01-01T00:00:00Z",
  "tickets_purchase": true,
  "ticket_type": "fixed",
  "crs_code": "stri",
  "ticket_change_indicator": "new",
  "refundability": "refundable",
  "passengers": [
    {
      "first_name": "string",
      "last_name": "string"
    }
  ],
  "journey_legs": [
    {
      "sequence": 0,
      "departure_airport_code": "string",
      "arrival_airport_code": "string",
      "flight_number": "string",
      "fare_base_code": "string",
      "travel_date": "1970-01-01T00:00:00Z",
      "airline_name": "string",
      "airline_code": "string",
      "pnr": "string"
    }
  ],
  "booking_url": "http://example.com"
}
```

Object containing additional information about an airline booking associated with the order. 

Use this object to provide required data to enable **Revolut Flight Alerts**. This feature allows users to receive real-time flight updates such as check-in reminders, boarding alerts, and notifications for cancellations or delays in the Revolut app.

To enable **Revolut Flight Alerts** functionalities in the Revolut app, the following fields are **required** on order creation or update, before capturing the order:
  ```
  tickets_purchase,
  journey_legs,
  booking_url
  ```

:::note
These are the specific data field requirements for merchants who must provide airline data. Note that these requirements can be extended on a case by case basis as decided by Revolut.

| Required for airline/charter merchants | Required for OTA merchants |
| -------------------------------------- | -------------------------- |
| <ul><li>`booking_id`</li><li>`fulfillment_date`</li><li>`passengers[].first_name`</li><li>`passengers[].last_name`</li><li>`journey_legs[].pnr`</li><li>`journey_legs[].sequence`</li><li>`journey_legs[].flight_number`</li><li>`journey_legs[].travel_date`</li><li>`journey_legs[].airline_code`</li><li>`journey_legs[].departure_airport_code`</li><li>`journey_legs[].arrival_airport_code`</li></ul> | <ul><li>`booking_id`</li><li>`fulfillment_date`</li><li>`passengers[].first_name`</li><li>`passengers[].last_name`</li><li>`journey_legs[].pnr`</li><li>`journey_legs[].arrival_airport_code`</li></ul> |
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[Industry-Data-Type](#schemaindustry-data-type)|true|none|Type of the industry-specific data object, determining what additional data is expected.<br><br>Available types:<br><br>  \| Object type   \| Description \|<br>  \| ------------- \| ----------- \|<br>  \| `airline`     \| Object containing information about a specific airline ticket purchase. \|<br>  \| `car_rental`  \| Object containing information about a car rental booking associated with the order. \|<br>  \| `crypto`      \| Object containing information about crypto transactions associated with the order. \|<br>  \| `marketplace` \| This object is required by Mastercard and Visa for merchants operating as marketplaces under the **Merchant Category Code (MCC):** `5262`. The marketplace object ensures compliance with the card schemes' regulations by providing detailed information about the subseller involved in the transaction. \|<br>  \| `event` \| Object containing information about event ticket bookings associated with the order. \|<br>  \| `lodging` \| Object containing information about lodging bookings associated with the order. \||
|booking_id|[Booking-Id](#schemabooking-id)|true|none|A unique identifier provided by the merchant associated with the order. <br><br>This `booking_id` is used to reference and correlate booking information with the Merchant API and the merchant's internal system.|
|fulfillment_date|string(date-time)|false|none|The UTC date and time of the final journey leg.<br><br>:::warning<br>The following limitations apply:<br>  - When creating or updating an order, `fulfillment_date` cannot be set to a date in the past.<br>  - When updating an order, if the current `fulfillment_date` value is already in the past, it cannot be modified. The date must remain as is to maintain data integrity for completed transactions.<br>:::|
|tickets_purchase|boolean|false|none|Flag indicating whether the order includes actual ticket purchases. Set to `true` if the order contains ticket purchases, and `false` if it does not (e.g., it **only** contains seat reservations, or baggage upgrades). <br><br>:::info<br>This field is required for activating **Revolut Flight Alerts** functionalities within the Revolut app.<br><br>Provide the info on order creation or update, before capturing the order.<br>:::|
|ticket_type|string|false|none|The type of the ticket.<br><br>\| Parameter value \| Description \|<br>\| --------------- \| ----------- \|<br>\| `fixed`         \| Non-modifiable once confirmed. \|<br>\| `flexible`      \| Allows modifications or cancellations under specified conditions. \||
|crs_code|string|false|none|The code of the Computer Reservation System (CRS) used to make the booking and purchase the ticket.|
|ticket_change_indicator|string|false|none|Parameter indicating whether this order is related to a new ticket reservation or a modification of an existing one.|
|refundability|[Refundability](#schemarefundability)|false|none|Parameter indicating whether the booking is refundable, partially refundable, or not refundable.|
|passengers|[Passengers](#schemapassengers)|false|none|Array containing information of passengers associated with the booking.|
|journey_legs|[Journey-Legs](#schemajourney-legs)|false|none|Array containing information of journey legs associated with the booking.<br><br>:::info<br>This field is required for activating **Revolut Flight Alerts** functionalities within the Revolut app. <br><br>This information is used to compile a tracking widget that provides real-time updates on flight status and sends notifications, such as a check-in reminders, boarding alerts, and notifications for cancellations or delays. <br><br>To enable the widget the following fields are required on order creation or update, before capturing the order:<br><br>  ```<br>  sequence,<br>  departure_airport_code,<br>  arrival_airport_code,<br>  flight_number,<br>  travel_date,<br>  airline_name,<br>  airline_code,<br>  ```<br>:::|
|booking_url|string(uri)|false|none|URL to the online portal for managing the airline booking, which includes check-in functionality. This URL may be a personalised, pre-populated check-in link specific to the user or a generic link, and it is essential for enabling direct access to booking details within the Revolut app.<br><br>:::info<br>This field is required for activating **Revolut Flight Alerts** functionalities within the Revolut app. <br><br>Provide the info on order creation or update, before capturing the order.<br>:::<br><br>:::warning<br>Restrictions:<br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be either `http` or `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `2000`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::|

#### Enumerated Values

|Property|Value|
|---|---|
|type|airline|
|type|car_rental|
|type|crypto|
|type|event|
|type|lodging|
|type|marketplace|
|ticket_type|fixed|
|ticket_type|flexible|
|ticket_change_indicator|new|
|ticket_change_indicator|modification|
|refundability|refundable|
|refundability|non_refundable|
|refundability|partially_refundable|

<h2 id="tocS_Crypto-Transaction">Crypto-Transaction</h2>
<!-- backwards compatibility -->
<a id="schemacrypto-transaction"></a>
<a id="schema_Crypto-Transaction"></a>
<a id="tocScrypto-transaction"></a>
<a id="tocscrypto-transaction"></a>

```json
{
  "id": "string",
  "status": "pending",
  "recipient_wallet_id": "string",
  "recipient_user_id": "string"
}
```

Details of a crypto transaction, including the transaction hash, status, and recipient information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The public transaction hash of the crypto transaction.|
|status|string|true|none|The status of the crypto transaction.|
|recipient_wallet_id|string|false|none|The wallet ID of the recipient.<br><br>:::note<br>At least one of the parameters: `recipient_user_id` or `recipient_wallet_id` is required.<br>::: |
|recipient_user_id|string|false|none|The user ID of the recipient.<br><br>:::note<br>At least one of the parameters: `recipient_user_id` or `recipient_wallet_id` is required.<br>:::              |

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|failed|
|status|cancelled|
|status|completed|

<h2 id="tocS_Crypto-Transactions">Crypto-Transactions</h2>
<!-- backwards compatibility -->
<a id="schemacrypto-transactions"></a>
<a id="schema_Crypto-Transactions"></a>
<a id="tocScrypto-transactions"></a>
<a id="tocscrypto-transactions"></a>

```json
{
  "type": "airline",
  "transactions": [
    {
      "id": "string",
      "status": "pending",
      "recipient_wallet_id": "string",
      "recipient_user_id": "string"
    }
  ],
  "subseller_mcc": "stri",
  "subseller_url": "http://example.com"
}
```

Object containing information about crypto transactions associated with the order.

:::info
These are the specific data field requirements for merchants offering crypto services. Note that these requirements can be extended on a case by case basis as decided by Revolut.

```
transactions[].id
transactions[].status
transactions[].recipient_wallet_id
subseller_mcc
subseller_url
customer.full_name
customer.date_of_birth
```
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[Industry-Data-Type](#schemaindustry-data-type)|true|none|Type of the industry-specific data object, determining what additional data is expected.<br><br>Available types:<br><br>  \| Object type   \| Description \|<br>  \| ------------- \| ----------- \|<br>  \| `airline`     \| Object containing information about a specific airline ticket purchase. \|<br>  \| `car_rental`  \| Object containing information about a car rental booking associated with the order. \|<br>  \| `crypto`      \| Object containing information about crypto transactions associated with the order. \|<br>  \| `marketplace` \| This object is required by Mastercard and Visa for merchants operating as marketplaces under the **Merchant Category Code (MCC):** `5262`. The marketplace object ensures compliance with the card schemes' regulations by providing detailed information about the subseller involved in the transaction. \|<br>  \| `event` \| Object containing information about event ticket bookings associated with the order. \|<br>  \| `lodging` \| Object containing information about lodging bookings associated with the order. \||
|transactions|[[Crypto-Transaction](#schemacrypto-transaction)]|true|none|Array of crypto transaction data associated with the order.|
|subseller_mcc|string|false|none|A string representing the four-digit [Merchant Category Code (MCC)](https://en.wikipedia.org/wiki/Merchant_category_code) of the subseller. <br><br>This code should be provided when a customer completes a payment on a subseller's website rather than directly on the merchant's website, providing insight into the type of business conducted by the subseller.|
|subseller_url|string(uri)|false|none|The URL of the subseller's website.<br><br>This parameter should be provided when a customer completes a payment on a subseller's website rather than directly on the merchant's website, providing additional insight into the type of business conducted by the subseller.<br><br>:::warning<br>Restrictions: <br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be either `http` or `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `2000`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::|

#### Enumerated Values

|Property|Value|
|---|---|
|type|airline|
|type|car_rental|
|type|crypto|
|type|event|
|type|lodging|
|type|marketplace|

<h2 id="tocS_Address-v4">Address-v4</h2>
<!-- backwards compatibility -->
<a id="schemaaddress-v4"></a>
<a id="schema_Address-v4"></a>
<a id="tocSaddress-v4"></a>
<a id="tocsaddress-v4"></a>

```json
{
  "street_line_1": "string",
  "street_line_2": "string",
  "region": "string",
  "city": "string",
  "country_code": "st",
  "country_subdivision_code": "string",
  "postcode": "string"
}
```

Details of a physical address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|street_line_1|string|true|none|Primary address line.|
|street_line_2|string|false|none|Secondary address line, such as floor and apartment number.|
|region|string|false|none|State or province of the address.|
|city|string|true|none|City of the address.|
|country_code|string|true|none|ISO 2-letter country code.|
|country_subdivision_code|string|false|none|The subdivision code represents the state, province, or region within the country, following the [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) standard. This code uniquely identifies subdivisions within a country. <br><br>For example, for London in the United Kingdom, use `GB-LND`.<br><br>:::warning<br>The parameter is required for countries listed on the [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) page.<br>:::|
|postcode|string|true|none|Postal code of the address.|

<h2 id="tocS_Subseller">Subseller</h2>
<!-- backwards compatibility -->
<a id="schemasubseller"></a>
<a id="schema_Subseller"></a>
<a id="tocSsubseller"></a>
<a id="tocssubseller"></a>

```json
{
  "id": "string",
  "name": "string",
  "website": "http://example.com",
  "phone": "string",
  "address": {
    "street_line_1": "string",
    "street_line_2": "string",
    "region": "string",
    "city": "string",
    "country_code": "st",
    "country_subdivision_code": "string",
    "postcode": "string"
  }
}
```

Information about the subseller related to this order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the subseller in the marketplace's internal system.|
|name|string|true|none|The business or legal name of the subseller.|
|website|string(uri)|true|none|The URL of the website of the subseller.<br><br>:::warning<br>Restrictions:<br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be either `http` or `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `255`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::|
|phone|string|true|none|The phone number of the subseller.|
|address|[Address-v4](#schemaaddress-v4)|true|none|Details of a physical address.|

<h2 id="tocS_Marketplace">Marketplace</h2>
<!-- backwards compatibility -->
<a id="schemamarketplace"></a>
<a id="schema_Marketplace"></a>
<a id="tocSmarketplace"></a>
<a id="tocsmarketplace"></a>

```json
{
  "type": "airline",
  "subseller": {
    "id": "string",
    "name": "string",
    "website": "http://example.com",
    "phone": "string",
    "address": {
      "street_line_1": "string",
      "street_line_2": "string",
      "region": "string",
      "city": "string",
      "country_code": "st",
      "country_subdivision_code": "string",
      "postcode": "string"
    }
  }
}
```

This object is required by Mastercard and Visa for merchants operating as marketplaces under the Merchant Category Code (MCC) `5262`. The marketplace object ensures compliance with the card schemes' regulations by providing detailed information about the subseller involved in the transaction.

:::info
These are the specific data field requirements for merchants who must provide marketplace data.

```
subseller.id
subseller.name
subseller.phone
```
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[Industry-Data-Type](#schemaindustry-data-type)|true|none|Type of the industry-specific data object, determining what additional data is expected.<br><br>Available types:<br><br>  \| Object type   \| Description \|<br>  \| ------------- \| ----------- \|<br>  \| `airline`     \| Object containing information about a specific airline ticket purchase. \|<br>  \| `car_rental`  \| Object containing information about a car rental booking associated with the order. \|<br>  \| `crypto`      \| Object containing information about crypto transactions associated with the order. \|<br>  \| `marketplace` \| This object is required by Mastercard and Visa for merchants operating as marketplaces under the **Merchant Category Code (MCC):** `5262`. The marketplace object ensures compliance with the card schemes' regulations by providing detailed information about the subseller involved in the transaction. \|<br>  \| `event` \| Object containing information about event ticket bookings associated with the order. \|<br>  \| `lodging` \| Object containing information about lodging bookings associated with the order. \||
|subseller|[Subseller](#schemasubseller)|true|none|Information about the subseller related to this order.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|airline|
|type|car_rental|
|type|crypto|
|type|event|
|type|lodging|
|type|marketplace|

<h2 id="tocS_Supplier-Payment-Date">Supplier-Payment-Date</h2>
<!-- backwards compatibility -->
<a id="schemasupplier-payment-date"></a>
<a id="schema_Supplier-Payment-Date"></a>
<a id="tocSsupplier-payment-date"></a>
<a id="tocssupplier-payment-date"></a>

```json
"1970-01-01T00:00:00Z"
```

[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time when the funds are released to merchants.

<h2 id="tocS_Ticket">Ticket</h2>
<!-- backwards compatibility -->
<a id="schematicket"></a>
<a id="schema_Ticket"></a>
<a id="tocSticket"></a>
<a id="tocsticket"></a>

```json
{
  "id": "string",
  "transferable": true,
  "refundability": "refundable"
}
```

Object containing information about a ticket associated with the booking.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|A unique identifier provided by the merchant associated with the ticket.|
|transferable|boolean|false|none|Indicates whether the ticket is transferable to another buyer.|
|refundability|[Refundability](#schemarefundability)|false|none|Parameter indicating whether the booking is refundable, partially refundable, or not refundable.|

#### Enumerated Values

|Property|Value|
|---|---|
|refundability|refundable|
|refundability|non_refundable|
|refundability|partially_refundable|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "start_date": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "supplier": "string",
  "supplier_payment_date": "1970-01-01T00:00:00Z",
  "name": "string",
  "location": {
    "street_line_1": "string",
    "street_line_2": "string",
    "region": "string",
    "city": "string",
    "country_code": "st",
    "postcode": "string"
  },
  "category": "concert",
  "market": "primary",
  "tickets": [
    {
      "id": "string",
      "transferable": true,
      "refundability": "refundable"
    }
  ]
}
```

Object containing booking information about a specific event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start_date|string(date-time)|false|none|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time when the event starts.|
|end_date|string(date-time)|false|none|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time when the event ends.|
|supplier|string|false|none|Legal name of the ticket vendor/event organiser.|
|supplier_payment_date|[Supplier-Payment-Date](#schemasupplier-payment-date)|false|none|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time when the funds are released to merchants.|
|name|string|false|none|The name of the event.|
|location|object|false|none|The address of the event location.|
|category|string|false|none|The type of the event.|
|market|string|false|none|Indicates the relationship between the ticket vendor and the event organiser. <br><br>\| Parameter value \| Description \|<br>\| --------------- \| ----------- \|<br>\| `primary`       \| The merchant is the organiser and primary distributor of the tickets. \|<br>\| `secondary`     \| The merchant is a reseller, only distributing the tickets. \||
|tickets|[[Ticket](#schematicket)]|false|none|A list of tickets associated with the booking.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|concert|
|category|conference|
|category|convention|
|category|exhibition|
|category|festival|
|category|party|
|category|performance|
|category|other|
|market|primary|
|market|secondary|

<h2 id="tocS_Events">Events</h2>
<!-- backwards compatibility -->
<a id="schemaevents"></a>
<a id="schema_Events"></a>
<a id="tocSevents"></a>
<a id="tocsevents"></a>

```json
{
  "type": "airline",
  "booking_id": "string",
  "events": [
    {
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "supplier": "string",
      "supplier_payment_date": "1970-01-01T00:00:00Z",
      "name": "string",
      "location": {
        "street_line_1": "string",
        "street_line_2": "string",
        "region": "string",
        "city": "string",
        "country_code": "st",
        "postcode": "string"
      },
      "category": "concert",
      "market": "primary",
      "tickets": [
        {
          "id": "string",
          "transferable": true,
          "refundability": "refundable"
        }
      ]
    }
  ]
}
```

Object containing booking information for a list of event tickets associated with the order.

:::info
These are the specific data field requirements for merchants who must provide event data. Note that these requirements can be extended on a case by case basis as decided by Revolut.

```
booking_id
events[].start_date
events[].end_date
events[].supplier
events[].tickets[].id
```
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[Industry-Data-Type](#schemaindustry-data-type)|true|none|Type of the industry-specific data object, determining what additional data is expected.<br><br>Available types:<br><br>  \| Object type   \| Description \|<br>  \| ------------- \| ----------- \|<br>  \| `airline`     \| Object containing information about a specific airline ticket purchase. \|<br>  \| `car_rental`  \| Object containing information about a car rental booking associated with the order. \|<br>  \| `crypto`      \| Object containing information about crypto transactions associated with the order. \|<br>  \| `marketplace` \| This object is required by Mastercard and Visa for merchants operating as marketplaces under the **Merchant Category Code (MCC):** `5262`. The marketplace object ensures compliance with the card schemes' regulations by providing detailed information about the subseller involved in the transaction. \|<br>  \| `event` \| Object containing information about event ticket bookings associated with the order. \|<br>  \| `lodging` \| Object containing information about lodging bookings associated with the order. \||
|booking_id|[Booking-Id](#schemabooking-id)|true|none|A unique identifier provided by the merchant associated with the order. <br><br>This `booking_id` is used to reference and correlate booking information with the Merchant API and the merchant's internal system.|
|events|[[Event](#schemaevent)]|false|none|A list of events associated with the booking.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|airline|
|type|car_rental|
|type|crypto|
|type|event|
|type|lodging|
|type|marketplace|

<h2 id="tocS_Guest">Guest</h2>
<!-- backwards compatibility -->
<a id="schemaguest"></a>
<a id="schema_Guest"></a>
<a id="tocSguest"></a>
<a id="tocsguest"></a>

```json
{
  "first_name": "string",
  "last_name": "string"
}
```

A guest's first and last name, used in travel-related order data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|Guest's first name.|
|last_name|string|true|none|Guest's last name.|

<h2 id="tocS_Guests">Guests</h2>
<!-- backwards compatibility -->
<a id="schemaguests"></a>
<a id="schema_Guests"></a>
<a id="tocSguests"></a>
<a id="tocsguests"></a>

```json
[
  {
    "first_name": "string",
    "last_name": "string"
  }
]
```

List of guests associated with the booking.

<h2 id="tocS_Lodging">Lodging</h2>
<!-- backwards compatibility -->
<a id="schemalodging"></a>
<a id="schema_Lodging"></a>
<a id="tocSlodging"></a>
<a id="tocslodging"></a>

```json
{
  "type": "airline",
  "booking_id": "string",
  "check_in_date": "1970-01-01T00:00:00Z",
  "check_out_date": "1970-01-01T00:00:00Z",
  "supplier_payment_date": "1970-01-01T00:00:00Z",
  "category": "bed_and_breakfast",
  "booking_type": "fixed",
  "refundability": "refundable",
  "location": {
    "street_line_1": "string",
    "street_line_2": "string",
    "region": "string",
    "city": "string",
    "country_code": "st",
    "postcode": "string"
  },
  "guests": [
    {
      "first_name": "string",
      "last_name": "string"
    }
  ]
}
```

Object containing details of a lodging booking.

:::info
These are the specific data field requirements for merchants who must provide lodging data. Note that these requirements can be extended on a case by case basis as decided by Revolut.

```
booking_id
check_in_date
check_out_date
supplier_payment_date
```
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[Industry-Data-Type](#schemaindustry-data-type)|true|none|Type of the industry-specific data object, determining what additional data is expected.<br><br>Available types:<br><br>  \| Object type   \| Description \|<br>  \| ------------- \| ----------- \|<br>  \| `airline`     \| Object containing information about a specific airline ticket purchase. \|<br>  \| `car_rental`  \| Object containing information about a car rental booking associated with the order. \|<br>  \| `crypto`      \| Object containing information about crypto transactions associated with the order. \|<br>  \| `marketplace` \| This object is required by Mastercard and Visa for merchants operating as marketplaces under the **Merchant Category Code (MCC):** `5262`. The marketplace object ensures compliance with the card schemes' regulations by providing detailed information about the subseller involved in the transaction. \|<br>  \| `event` \| Object containing information about event ticket bookings associated with the order. \|<br>  \| `lodging` \| Object containing information about lodging bookings associated with the order. \||
|booking_id|[Booking-Id](#schemabooking-id)|true|none|A unique identifier provided by the merchant associated with the order. <br><br>This `booking_id` is used to reference and correlate booking information with the Merchant API and the merchant's internal system.|
|check_in_date|string(date-time)|false|none|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time of the check-in.|
|check_out_date|string(date-time)|false|none|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time of the check-out.|
|supplier_payment_date|[Supplier-Payment-Date](#schemasupplier-payment-date)|false|none|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time when the funds are released to merchants.|
|category|string|false|none|The type of the accommodation associated with the booking.|
|booking_type|string|false|none|Indicates whether the booking terms are fixed or flexible.<br><br>\| Parameter value \| Description \|<br>\| --------------- \| ----------- \|<br>\| `fixed`         \| Non-modifiable once confirmed. \|<br>\| `flexible`      \| Allows modifications or cancellations under specified conditions. \||
|refundability|[Refundability](#schemarefundability)|false|none|Parameter indicating whether the booking is refundable, partially refundable, or not refundable.|
|location|object|false|none|Address of the accommodation.|
|guests|[Guests](#schemaguests)|false|none|List of guests associated with the booking.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|airline|
|type|car_rental|
|type|crypto|
|type|event|
|type|lodging|
|type|marketplace|
|category|bed_and_breakfast|
|category|hostel|
|category|hotel|
|category|short_term_rental|
|category|other|
|booking_type|fixed|
|booking_type|flexible|
|refundability|refundable|
|refundability|non_refundable|
|refundability|partially_refundable|

<h2 id="tocS_Industry-Data">Industry-Data</h2>
<!-- backwards compatibility -->
<a id="schemaindustry-data"></a>
<a id="schema_Industry-Data"></a>
<a id="tocSindustry-data"></a>
<a id="tocsindustry-data"></a>

```json
{
  "type": "airline",
  "booking_id": "string",
  "fulfillment_date": "1970-01-01T00:00:00Z",
  "tickets_purchase": true,
  "ticket_type": "fixed",
  "crs_code": "stri",
  "ticket_change_indicator": "new",
  "refundability": "refundable",
  "passengers": [
    {
      "first_name": "string",
      "last_name": "string"
    }
  ],
  "journey_legs": [
    {
      "sequence": 0,
      "departure_airport_code": "string",
      "arrival_airport_code": "string",
      "flight_number": "string",
      "fare_base_code": "string",
      "travel_date": "1970-01-01T00:00:00Z",
      "airline_name": "string",
      "airline_code": "string",
      "pnr": "string"
    }
  ],
  "booking_url": "http://example.com"
}
```

Object containing industry-specific information associated with the order.

:::info
In the following cases, industry-specific info is required. Omitting this information may trigger additional scrutiny and risk mitigation actions by the Revolut risk team.

  | Transaction type | Required for | 
  | ---------------- | ----------- |
  | `airline`        | Airlines and Online Travel Agencies (OTAs). |
  | `crypto`         | Crypto merchants. |
  | `marketplace`    | Marketplace merchants. |
  | `event`          | Event ticket sellers. |
  | `lodging`        | Lodging providers and OTAs. |
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Airline-Data](#schemaairline-data)|false|none|Object containing additional information about an airline booking associated with the order. <br><br>Use this object to provide required data to enable **Revolut Flight Alerts**. This feature allows users to receive real-time flight updates such as check-in reminders, boarding alerts, and notifications for cancellations or delays in the Revolut app.<br><br>To enable **Revolut Flight Alerts** functionalities in the Revolut app, the following fields are **required** on order creation or update, before capturing the order:<br>  ```<br>  tickets_purchase,<br>  journey_legs,<br>  booking_url<br>  ```<br><br>:::note<br>These are the specific data field requirements for merchants who must provide airline data. Note that these requirements can be extended on a case by case basis as decided by Revolut.<br><br>\| Required for airline/charter merchants \| Required for OTA merchants \|<br>\| -------------------------------------- \| -------------------------- \|<br>\| <ul><li>`booking_id`</li><li>`fulfillment_date`</li><li>`passengers[].first_name`</li><li>`passengers[].last_name`</li><li>`journey_legs[].pnr`</li><li>`journey_legs[].sequence`</li><li>`journey_legs[].flight_number`</li><li>`journey_legs[].travel_date`</li><li>`journey_legs[].airline_code`</li><li>`journey_legs[].departure_airport_code`</li><li>`journey_legs[].arrival_airport_code`</li></ul> \| <ul><li>`booking_id`</li><li>`fulfillment_date`</li><li>`passengers[].first_name`</li><li>`passengers[].last_name`</li><li>`journey_legs[].pnr`</li><li>`journey_legs[].arrival_airport_code`</li></ul> \|<br>:::|
|*oneOf*|[Crypto-Transactions](#schemacrypto-transactions)|false|none|Object containing information about crypto transactions associated with the order.<br><br>:::info<br>These are the specific data field requirements for merchants offering crypto services. Note that these requirements can be extended on a case by case basis as decided by Revolut.<br><br>```<br>transactions[].id<br>transactions[].status<br>transactions[].recipient_wallet_id<br>subseller_mcc<br>subseller_url<br>customer.full_name<br>customer.date_of_birth<br>```<br>:::|
|*oneOf*|[Marketplace](#schemamarketplace)|false|none|This object is required by Mastercard and Visa for merchants operating as marketplaces under the Merchant Category Code (MCC) `5262`. The marketplace object ensures compliance with the card schemes' regulations by providing detailed information about the subseller involved in the transaction.<br><br>:::info<br>These are the specific data field requirements for merchants who must provide marketplace data.<br><br>```<br>subseller.id<br>subseller.name<br>subseller.phone<br>```<br>:::|
|*oneOf*|[Events](#schemaevents)|false|none|Object containing booking information for a list of event tickets associated with the order.<br><br>:::info<br>These are the specific data field requirements for merchants who must provide event data. Note that these requirements can be extended on a case by case basis as decided by Revolut.<br><br>```<br>booking_id<br>events[].start_date<br>events[].end_date<br>events[].supplier<br>events[].tickets[].id<br>```<br>:::|
|*oneOf*|[Lodging](#schemalodging)|false|none|Object containing details of a lodging booking.<br><br>:::info<br>These are the specific data field requirements for merchants who must provide lodging data. Note that these requirements can be extended on a case by case basis as decided by Revolut.<br><br>```<br>booking_id<br>check_in_date<br>check_out_date<br>supplier_payment_date<br>```<br>:::|

<h2 id="tocS_Upcoming-Payment">Upcoming-Payment</h2>
<!-- backwards compatibility -->
<a id="schemaupcoming-payment"></a>
<a id="schema_Upcoming-Payment"></a>
<a id="tocSupcoming-payment"></a>
<a id="tocsupcoming-payment"></a>

```json
{
  "date": "1970-01-01T00:00:00Z",
  "payment_method_id": "string"
}
```

Object containing information about upcoming payments associated with the order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date-time)|true|none|The date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when the upcoming payment is scheduled to be executed.|
|payment_method_id|string|true|none|The unique ID of the customer's payment method used to complete the scheduled payment.<br><br>:::info<br>For more information about operations related to customer's payment methods, see:<br>  - [Retrieve payment method list of a customer](https://developer.revolut.com/docs/api/merchant#retrieve-payment-method-list)<br>  - [Retrieve a customer's payment method](https://developer.revolut.com/docs/api/merchant#retrieve-payment-method)<br>  - [Update a customer's payment method](https://developer.revolut.com/docs/api/merchant#update-payment-method)<br>  - [Delete a customer's payment method](https://developer.revolut.com/docs/api/merchant#delete-payment-method)<br>:::|

<h2 id="tocS_Order-Creation-v4">Order-Creation-v4</h2>
<!-- backwards compatibility -->
<a id="schemaorder-creation-v4"></a>
<a id="schema_Order-Creation-v4"></a>
<a id="tocSorder-creation-v4"></a>
<a id="tocsorder-creation-v4"></a>

```json
{
  "amount": 0,
  "currency": "str",
  "settlement_currency": "string",
  "description": "string",
  "customer": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "full_name": "string",
    "phone": "string",
    "email": "user@example.com",
    "date_of_birth": "1970-01-01"
  },
  "enforce_challenge": "automatic",
  "line_items": [
    {
      "name": "string",
      "type": "physical",
      "quantity": {
        "value": 0,
        "unit": "string"
      },
      "unit_price_amount": 0,
      "total_amount": 0,
      "external_id": "string",
      "discounts": [
        {
          "name": "string",
          "amount": 0
        }
      ],
      "taxes": [
        {
          "name": "string",
          "amount": 0
        }
      ],
      "image_urls": [
        "http://example.com"
      ],
      "description": "string",
      "url": "http://example.com"
    }
  ],
  "shipping": {
    "address": {
      "street_line_1": "string",
      "street_line_2": "string",
      "region": "string",
      "city": "string",
      "country_code": "st",
      "postcode": "string"
    },
    "contact": {
      "name": "string",
      "email": "user@example.com",
      "phone": "string"
    },
    "shipments": [
      {
        "shipping_company_name": "string",
        "tracking_number": "string",
        "estimated_delivery_date": "1970-01-01T00:00:00Z",
        "tracking_url": "http://example.com"
      }
    ]
  },
  "capture_mode": "automatic",
  "authorisation_type": "final",
  "cancel_authorised_after": "string",
  "expire_pending_after": "PT15M",
  "location_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "metadata": {
    "order_reference": "ORD-12345",
    "customer_segment": "premium",
    "internal_note": "VIP customer - priority handling"
  },
  "industry_data": {
    "type": "airline",
    "booking_id": "string",
    "fulfillment_date": "1970-01-01T00:00:00Z",
    "tickets_purchase": true,
    "ticket_type": "fixed",
    "crs_code": "stri",
    "ticket_change_indicator": "new",
    "refundability": "refundable",
    "passengers": [
      {
        "first_name": "string",
        "last_name": "string"
      }
    ],
    "journey_legs": [
      {
        "sequence": 0,
        "departure_airport_code": "string",
        "arrival_airport_code": "string",
        "flight_number": "string",
        "fare_base_code": "string",
        "travel_date": "1970-01-01T00:00:00Z",
        "airline_name": "string",
        "airline_code": "string",
        "pnr": "string"
      }
    ],
    "booking_url": "http://example.com"
  },
  "merchant_order_data": {
    "url": "http://example.com",
    "reference": "string"
  },
  "upcoming_payment_data": {
    "date": "1970-01-01T00:00:00Z",
    "payment_method_id": "string"
  },
  "redirect_url": "http://example.com",
  "statement_descriptor_suffix": "string"
}
```

Object schema containing information about order creation body request parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Order-Amount-v2](#schemaorder-amount-v2)|true|none|The order total expressed in minor currency units, according to the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217). For example, `7034` in `EUR` corresponds to €70.34.<br><br>:::info<br>- Conversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).<br>- If `line_items` are provided, the order `amount` must equal the sum of all line items' `total_amount`.<br>- For card payments with a non-zero amount, the order `amount` must be at least **$0.005** (or equivalent in different currencies, calculated using Revolut's exchange rate on the payment date). Otherwise, card payments can't be performed.<br>:::|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|settlement_currency|[Settlement-Currency](#schemasettlement-currency)|false|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case. <br><br>If `settlement_currency` is different from the value of `currency`, the money will be exchanged when the amount is settled to your merchant account. In case of a refund or chargeback, the money will be exchanged to the order's initial `currency`.<br><br>If `settlement_currency` is not specified, this value is taken from `currency`.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|description|[Order-Description](#schemaorder-description)|false|none|The description of the order.|
|customer|[Customer-v2](#schemacustomer-v2)|false|none|Object containing information about a customer.<br><br>If you have it, we strongly advise providing at least either `id`, `phone`, or `email`.<br><br>Using the [Customers operations](https://developer.revolut.com/docs/api/merchant#tag-customers), you can manage customer instances.<br><br>The following behaviours apply to different use cases:<br><br>  \| Use case \| API behavior \|<br>  \| -------- \| ------------ \|<br>  \| Existing customer \| If `id` was provided, we ignore other customer details and associate the customer with the order.<br/><br/>If either `email`, `phone`, or `full_name` was provided (without an existing customer's `id`), we always create a new customer, irrespective of another, existing customer object having the same details. \|<br>  \| New customer \| If either `email`, `phone`, or `full_name` was provided, we create a new customer, irrespective of another customer object having the same details. <br/><br/>If `id` of a non-existent customer was provided, we return a `404` error, irrespective of other details provided. \|<br><br>:::note<br>To avoid unintentional duplication of customer records, search for an existing customer by email or phone using the [List customers](https://developer.revolut.com/docs/api/merchant#retrieve-customer-list) endpoint first, then provide `customer.id` in the order.<br>:::|
|enforce_challenge|[Enforce-Challenge-v2](#schemaenforce-challenge-v2)|false|none|The enforce challenge mode. `automatic` is used by default.<br><br>\| Parameter value \| Description \|<br>\| --------------- \| ----------- \|<br>\| `automatic` \| The payments created for an order will have challenge requirement calculated by our fraud mechanisms. Not all payments will trigger a 3DS challenge. \|<br>\| `forced` \| The payments created for an order will always require a 3DS challenge. Currently only supported for card payments. \||
|line_items|[Line-Items](#schemaline-items)|false|none|An array of line items included in the order. Each line item represents an individual product or service, along with its quantity, price, taxes, and discounts.<br><br>:::info<br>Required for merchants collecting payment for one or multiple products/services in one transaction. Omitting this information may trigger additional scrutiny and risk mitigation actions by Revolut.<br>:::|
|shipping|[Shipping](#schemashipping)|false|none|Details about the shipping related to the order, including address, contact information, and individual shipments.<br><br>:::info<br>Required for merchants shipping physical goods. Omitting this information may trigger additional scrutiny and risk mitigation actions by Revolut.<br>:::|
|capture_mode|[Capture-Mode-v2](#schemacapture-mode-v2)|false|none|The capture mode of the order. `automatic` is used by default.<br><br>\| Parameter value \| Description \|<br>\| --------------- \| ----------- \|<br>\| `automatic` \| The order is captured automatically after payment authorisation. \|<br>\| `manual` \| The order is not captured automatically. You must manually capture the order later. \|<br><br>:::info<br>For more information, see [Capture an order](https://developer.revolut.com/docs/api/merchant#capture-order).<br>:::|
|authorisation_type|[Authorisation-Type](#schemaauthorisation-type)|false|none|The type of authorisation for the order. Used with manual capture mode. If omitted, `final` is used by default.<br><br>### Pre-authorisation<br><br>Pre-authorisation allows you to reserve funds on a customer's card without immediately capturing them. This is useful for scenarios like:<br><br>- Hotel bookings where the final amount may vary<br>- Car rentals where additional charges may apply<br>- Deposits that need to be held temporarily<br><br>\| Parameter value \| Description \|<br>\| --------------- \| ----------- \|<br>\| `final` \| Standard authorisation for immediate or near-immediate capture. \|<br>\| `pre_authorisation` \| Reserve funds for later capture, used with manual capture mode. \|<br><br>:::note<br>Pre-authorisation must be used with `capture_mode: manual`. For more information, see [Capture an order](https://developer.revolut.com/docs/api/merchant#capture-order).<br>:::|
|cancel_authorised_after|[Cancel-Authorised-After](#schemacancel-authorised-after)|false|none|Automatic cancellation period for uncaptured orders, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. <br><br>After this period, the authorised payment is automatically cancelled and the order is cancelled. Maximum: 7 days = `P7D`.<br><br>:::note<br>The following limitations apply:<br>  - Cannot be a negative value.<br>  - Cannot be updated if the new value is less than or equal to the elapsed time since authorisation. <br><br>    **Failing scenario:**<br>      - Original value: 7 days<br>      - Time since authorisation: 3 days<br>      - Update value: 2 days<br>      <br>    In this scenario, an error is returned.<br>    <br>    **Successful scenario:**<br>      - Original value: 7 days<br>      - Time since authorisation: 3 days<br>      - Update value: 4 days<br><br>    In this scenario, the parameter can be updated.<br><br>  - Cannot be updated if cancellation is ≤ 30 minutes away.<br><br>    **Failing scenario:**<br>      - Original value: 12 hours<br>      - Time since authorisation: 11 hours 40 minutes<br>                        <br>    In this scenario, an error is returned.<br>    <br>    **Successful scenario:** <br>      - Original value: 12 hours<br>      - Time since authorisation: 11 hours 20 minutes<br><br>    In this scenario, the parameter can be updated.<br>:::|
|expire_pending_after|[Expire-Pending-After](#schemaexpire-pending-after)|false|none|Automatic expiration period for pending orders, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.<br><br>Orders in `pending` state will be automatically failed if they stay unpaid for longer than the period specified.<br><br>When the order expires, it transitions to the `failed` state and an `ORDER_FAILED` webhook event is triggered.<br><br>:::note<br>- This field can only be set during order creation and cannot be updated afterward.<br>- Must be between `PT1M` (1 minute) and `PT720H` (30 days).<br>- Cannot be a negative value.<br>:::|
|location_id|[Location-Id](#schemalocation-id)|false|none|Unique ID representing the location where merchants sells products.<br><br>:::info<br>For more information, see: [Locations](https://developer.revolut.com/docs/api/merchant#tag-locations).<br>:::        |
|metadata|[Metadata](#schemametadata)|false|none|Additional information to track your orders in your system, by providing custom metadata using `"<key>" : "<value>"` pairs.<br><br>:::warning<br>**Restrictions:**<br><br>- Both keys and values must be `string`s<br>- Values cannot be `null`.<br>- Max number of key-value pairs: `50`<br>- Max length of values: `500` characters<br>- Format of keys: Must start with a letter and contain only letters, digits, and underscores. Max 40 characters. Pattern: `^[a-zA-Z][a-zA-Z\\d_]{0,39}$`<br>:::|
|industry_data|[Industry-Data](#schemaindustry-data)|false|none|Object containing industry-specific information associated with the order.<br><br>:::info<br>In the following cases, industry-specific info is required. Omitting this information may trigger additional scrutiny and risk mitigation actions by the Revolut risk team.<br><br>  \| Transaction type \| Required for \| <br>  \| ---------------- \| ----------- \|<br>  \| `airline`        \| Airlines and Online Travel Agencies (OTAs). \|<br>  \| `crypto`         \| Crypto merchants. \|<br>  \| `marketplace`    \| Marketplace merchants. \|<br>  \| `event`          \| Event ticket sellers. \|<br>  \| `lodging`        \| Lodging providers and OTAs. \|<br>:::|
|merchant_order_data|[Merchant-Order-Data](#schemamerchant-order-data)|false|none|Object for providing additional information stored in the merchant's order management system. |
|upcoming_payment_data|[Upcoming-Payment](#schemaupcoming-payment)|false|none|Object containing information about upcoming payments associated with the order.|
|redirect_url|[Redirect-Url](#schemaredirect-url)|false|none|The URL your customer will be redirected to after completing a payment flow.<br><br>- **Hosted Checkout Page** (`checkout_url`): This is the post-success URL - the customer is redirected only after a successful payment.<br>- **Embedded Revolut Pay** (Revolut Checkout widget): This URL is used for all redirect outcomes - success, failure, and cancellation.<br><br>:::warning [Restrictions]<br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be either `http` or `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `2000`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::<br><br>:::note [Revolut Checkout]<br>- Revolut Pay will not appear in the widget on mobile devices unless redirect targets are configured - either via this `redirect_url` parameter or the SDK-level `revolutPayOptions.mobileRedirectUrls` option.<br>- If `redirect_url` is set on the order, it takes precedence over `revolutPayOptions.mobileRedirectUrls` and is used for all redirect outcomes (success, failure, cancel).<br>:::<br><br>:::info<br>For more information, see:<br>- [Hosted Checkout Page: Custom redirection](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/hosted-checkout-page/api#custom-post-payment-redirection-optional)<br>- [Revolut Checkout: Configure mobile redirects](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/revolut-checkout/web#35-configure-revolut-pay-mobile-redirects)<br>:::|
|statement_descriptor_suffix|[Statement-Descriptor-Suffix](#schemastatement-descriptor-suffix)|false|none|You can set a dynamic statement descriptor for your orders by providing a custom suffix. <br><br>A statement descriptor is the text shown on cardholders' bank or card statements, helping them recognise a transaction or merchant. This field can be used to send extra information with the statement descriptor for card transactions.<br><br>The complete descriptor is built using the following format: `{base}*{suffix}`, where:<br>  <br>  - **`{base}`** is the existing descriptor configured in the Revolut Business dashboard (**Settings > Business account > Merchant profile > Statement descriptor**).  <br>  - **`{suffix}`** is defined by the `statement_descriptor_suffix` field.<br><br>:::note<br>- If the combined descriptor's length (base + suffix) exceeds the character limits of card scheme providers, the final value will be truncated. For example if the limit is 22 characters, the base descriptor is `"base"` and the suffix is `"testdescriptorsuffix"`, the final descriptor becomes `"base*testdescriptorsuf"`.<br>- The final statement descriptor shown on a cardholder's statement may vary by issuing bank, as some banks apply their own custom formatting or truncation rules.<br>:::|

#### Enumerated Values

|Property|Value|
|---|---|
|enforce_challenge|automatic|
|enforce_challenge|forced|
|capture_mode|automatic|
|capture_mode|manual|
|authorisation_type|final|
|authorisation_type|pre_authorisation|

<h2 id="tocS_Refunded-Amount">Refunded-Amount</h2>
<!-- backwards compatibility -->
<a id="schemarefunded-amount"></a>
<a id="schema_Refunded-Amount"></a>
<a id="tocSrefunded-amount"></a>
<a id="tocsrefunded-amount"></a>

```json
0
```

The amount that was refunded from the order (in minor currency units). For example, `7034` represents €70.34. 

This applies to orders that have been refunded (i.e., orders of type `payment` that have a related `refund` order).

<h2 id="tocS_Payment-Id">Payment-Id</h2>
<!-- backwards compatibility -->
<a id="schemapayment-id"></a>
<a id="schema_Payment-Id"></a>
<a id="tocSpayment-id"></a>
<a id="tocspayment-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The ID of the payment.

<h2 id="tocS_Payment-State-v2">Payment-State-v2</h2>
<!-- backwards compatibility -->
<a id="schemapayment-state-v2"></a>
<a id="schema_Payment-State-v2"></a>
<a id="tocSpayment-state-v2"></a>
<a id="tocspayment-state-v2"></a>

```json
"pending"
```

The status of the payment.

<h2 id="tocS_Decline-Reason-v2">Decline-Reason-v2</h2>
<!-- backwards compatibility -->
<a id="schemadecline-reason-v2"></a>
<a id="schema_Decline-Reason-v2"></a>
<a id="tocSdecline-reason-v2"></a>
<a id="tocsdecline-reason-v2"></a>

```json
"3ds_challenge_abandoned"
```

The reason for a `failed` or `declined` payment.

A failed or declined payment can result from multiple reasons. To learn more, check our [failure reasons](https://developer.revolut.com/docs/guides/merchant/reference/error-codes/decline-reasons).

<h2 id="tocS_Bank-Message">Bank-Message</h2>
<!-- backwards compatibility -->
<a id="schemabank-message"></a>
<a id="schema_Bank-Message"></a>
<a id="tocSbank-message"></a>
<a id="tocsbank-message"></a>

```json
"string"
```

The reason for a `failed` or `declined` payment, sent by the financial institution processing the payment.

<h2 id="tocS_Payment-Created">Payment-Created</h2>
<!-- backwards compatibility -->
<a id="schemapayment-created"></a>
<a id="schema_Payment-Created"></a>
<a id="tocSpayment-created"></a>
<a id="tocspayment-created"></a>

```json
"1970-01-01T00:00:00Z"
```

The date and time the payment was created.

<h2 id="tocS_Payment-Updated">Payment-Updated</h2>
<!-- backwards compatibility -->
<a id="schemapayment-updated"></a>
<a id="schema_Payment-Updated"></a>
<a id="tocSpayment-updated"></a>
<a id="tocspayment-updated"></a>

```json
"1970-01-01T00:00:00Z"
```

The date and time the payment was last updated.

<h2 id="tocS_Payment-Token">Payment-Token</h2>
<!-- backwards compatibility -->
<a id="schemapayment-token"></a>
<a id="schema_Payment-Token"></a>
<a id="tocSpayment-token"></a>
<a id="tocspayment-token"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

Temporary token of the payment used to fetch the reward offer during checkout and link user registrations to the given offers. 

The token is only valid for a limited time.

<h2 id="tocS_Payment-Amount">Payment-Amount</h2>
<!-- backwards compatibility -->
<a id="schemapayment-amount"></a>
<a id="schema_Payment-Amount"></a>
<a id="tocSpayment-amount"></a>
<a id="tocspayment-amount"></a>

```json
600
```

The payment amount in minor units (e.g., cents). The value of this field depends on the payment type and state.

| Payment type | State | Amount value |
|--------------|-------|--------------|
| Standard payment | Any | Total payment amount |
| Pre-authorised payment | `authorisation_started` | New amount being authorised (during increment processing) |
| Pre-authorised payment | `authorised` | Currently authorised amount (equals `authorised_amount`) |

:::info
For pre-authorised payments, see the `authorised_amount` field for tracking the currently authorised amount separately.
:::

<h2 id="tocS_Payment-Authorised-Amount">Payment-Authorised-Amount</h2>
<!-- backwards compatibility -->
<a id="schemapayment-authorised-amount"></a>
<a id="schema_Payment-Authorised-Amount"></a>
<a id="tocSpayment-authorised-amount"></a>
<a id="tocspayment-authorised-amount"></a>

```json
600
```

The currently authorised amount for this payment (in minor units).

For pre-authorised payments with incremental authorization:
- Initially equals the `amount` field
- Remains unchanged during increment processing
- Updates to new amount upon successful increment
- Remains at original amount if increment is declined

For standard payments, this field may not be present or will equal the `amount` field.

<h2 id="tocS_Payment-Settled-Amount">Payment-Settled-Amount</h2>
<!-- backwards compatibility -->
<a id="schemapayment-settled-amount"></a>
<a id="schema_Payment-Settled-Amount"></a>
<a id="tocSpayment-settled-amount"></a>
<a id="tocspayment-settled-amount"></a>

```json
0
```

The amount of the settled payment (minor currency unit). For example, `7034` stands for €70.34.

<h2 id="tocS_Payment-Settled-Currency">Payment-Settled-Currency</h2>
<!-- backwards compatibility -->
<a id="schemapayment-settled-currency"></a>
<a id="schema_Payment-Settled-Currency"></a>
<a id="tocSpayment-settled-currency"></a>
<a id="tocspayment-settled-currency"></a>

```json
"string"
```

The currency of the settled payment. [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.

:::info
For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).
:::

<h2 id="tocS_Payment-Method-Type">Payment-Method-Type</h2>
<!-- backwards compatibility -->
<a id="schemapayment-method-type"></a>
<a id="schema_Payment-Method-Type"></a>
<a id="tocSpayment-method-type"></a>
<a id="tocspayment-method-type"></a>

```json
"apple_pay"
```

The type of payment method used to pay for the order.

Available values:

| Payment method `type` | Description |
| --------------------- | ----------- |
| `apple_pay` | The customer paid the order using Apple Pay. |
| `card` | The customer paid the order using their credit or debit card. |
| `google_pay` | The customer paid the order using Google Pay. |
| `revolut_pay_card` | The customer paid the order via Revolut Pay using their credit or debit card. |
| `revolut_pay_account` | The customer paid the order via Revolut Pay using their Revolut account. |
| `sepa_direct_debit` | The customer paid the order using SEPA Direct Debit. |

<h2 id="tocS_Card-Checks-v2">Card-Checks-v2</h2>
<!-- backwards compatibility -->
<a id="schemacard-checks-v2"></a>
<a id="schema_Card-Checks-v2"></a>
<a id="tocScard-checks-v2"></a>
<a id="tocscard-checks-v2"></a>

```json
{
  "three_ds": {
    "eci": "string",
    "state": "verified",
    "version": 0
  },
  "cvv_verification": "match",
  "address": "match",
  "postcode": "match",
  "cardholder": "match"
}
```

The details of the check for card payment. Only for orders with successful payments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|three_ds|object|false|none|The details of the 3D Secure check. Only for orders with successful payments.<br><br>:::note<br>Not returned for Apple Pay and Google Pay payments.<br>:::|
|cvv_verification|string|false|none|The result of CVV verification.<br><br>\| Parameter value \| Description \|<br>\| ----- \| ----------- \|<br>\| `match` \| CVV matches the card's CVV \|<br>\| `not_match` \| CVV does not match the card's CVV \|<br>\| `incorrect` \| CVV format is incorrect for this type of card \|<br>\| `not_processed` \| CVV verification was not performed \||
|address|string|false|none|The result of address verification.|
|postcode|string|false|none|The result of postcode verification.|
|cardholder|string|false|none|The result of cardholder verification.|

#### Enumerated Values

|Property|Value|
|---|---|
|cvv_verification|match|
|cvv_verification|not_match|
|cvv_verification|incorrect|
|cvv_verification|not_processed|
|address|match|
|address|not_match|
|address|n_a|
|address|invalid|
|postcode|match|
|postcode|not_match|
|postcode|n_a|
|postcode|invalid|
|cardholder|match|
|cardholder|not_match|
|cardholder|n_a|
|cardholder|invalid|

<h2 id="tocS_Authorisation-Code">Authorisation-Code</h2>
<!-- backwards compatibility -->
<a id="schemaauthorisation-code"></a>
<a id="schema_Authorisation-Code"></a>
<a id="tocSauthorisation-code"></a>
<a id="tocsauthorisation-code"></a>

```json
"T483XF"
```

The authorisation code (or auth code) is a short, alphanumeric code returned by the cardholder's issuing bank to the merchant's terminal or payment gateway.

It serves as confirmation that the transaction has been approved and funds are available.

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"74839572049583726403928"
```

Acquirer Reference Number (ARN) of the payment.

:::note
Only returned for refund payments made by a card.
:::

<h2 id="tocS_Capture-Deadline">Capture-Deadline</h2>
<!-- backwards compatibility -->
<a id="schemacapture-deadline"></a>
<a id="schema_Capture-Deadline"></a>
<a id="tocScapture-deadline"></a>
<a id="tocscapture-deadline"></a>

```json
"1970-01-01T00:00:00Z"
```

The date and time by which the payment must be captured.

After this deadline, the authorised funds may be automatically released by the card issuer.

<h2 id="tocS_Terminal-Hardware-Id">Terminal-Hardware-Id</h2>
<!-- backwards compatibility -->
<a id="schematerminal-hardware-id"></a>
<a id="schema_Terminal-Hardware-Id"></a>
<a id="tocSterminal-hardware-id"></a>
<a id="tocsterminal-hardware-id"></a>

```json
"string"
```

The hardware identifier of the Revolut Terminal device used to process the payment.

:::note
Only present for card-present transactions processed via Revolut Terminal.
:::

<h2 id="tocS_Fingerprint">Fingerprint</h2>
<!-- backwards compatibility -->
<a id="schemafingerprint"></a>
<a id="schema_Fingerprint"></a>
<a id="tocSfingerprint"></a>
<a id="tocsfingerprint"></a>

```json
"1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY="
```

A unique identifier for a payment method, always 44 characters long. This fingerprint can be used to uniquely identify various payment methods.

#### Fingerprint generation

| Payment method | Description |
| -------- | ----------- |
| **All payment methods** | A fingerprint is generated for all payment methods, including cards, Revolut Pay (card, account-to-account payments), Apple Pay, and Google Pay. |
| **Cards (Revolut Pay & Card Gateway)** | For cards, the fingerprint is based on the PAN. Cards processed via Revolut Pay and our card gateway will share the same fingerprint. Renewed cards (new expiry/CVV) retain the same fingerprint for efficient blocking. |
| **Apple Pay & Google Pay** | Since Apple Pay and Google Pay provide us Device PANs (DPAN), the fingerprint is based on the DPAN provided by Apple/Google, not the connected card's PAN. This means that a new DPAN (and fingerprint) is generated for cards in case they are re-added to the customer's digital wallet, or added to different devices. |

#### Detecting duplicate payment methods

Fingerprints are a valuable tool for detecting duplicate payment methods by identifying if a payment method has been seen before. This capability, in turn, helps in preventing various types of misuse (e.g., exploitation of free trials, or association with known problematic accounts, which can be a form of fraud). To effectively use fingerprints for this purpose, you will need to create and maintain your own lists (e.g., blocklists of known problematic fingerprints, allowlists for trusted customers, or tracking frequently used fingerprints). 

The ideal way to utilise fingerprints is by combining them with a manual capture process. While automatic capture with subsequent refunds for problematic payments is possible, manual capture based on fingerprint validation is recommended.

During your manual capture workflow, after a payment was authorised:
  
  - Check the fingerprint status by comparing it against your maintained lists and internal business rules.
  - If you decide to proceed with the payment (e.g., the fingerprint is not on a blocklist, or matches a trusted customer's previous payment method): [Capture the order](https://developer.revolut.com/docs/api/merchant#capture-order).
  - If you decide not to proceed with the payment (e.g., the fingerprint matches a known fraudulent fingerprint, or exhibits suspicious patterns): [Cancel the order](https://developer.revolut.com/docs/api/merchant#cancel-order).

<h2 id="tocS_Network-Transaction-Id">Network-Transaction-Id</h2>
<!-- backwards compatibility -->
<a id="schemanetwork-transaction-id"></a>
<a id="schema_Network-Transaction-Id"></a>
<a id="tocSnetwork-transaction-id"></a>
<a id="tocsnetwork-transaction-id"></a>

```json
"string"
```

The Network Transaction ID (NTI) is a unique identifier assigned by the card scheme (e.g., Visa or Mastercard) to a card transaction.

It can be used to trace the transaction across the payment network, link recurring or instalment payments to the original authorisation, and support dispute resolution.

<h2 id="tocS_Apple-Pay">Apple-Pay</h2>
<!-- backwards compatibility -->
<a id="schemaapple-pay"></a>
<a id="schema_Apple-Pay"></a>
<a id="tocSapple-pay"></a>
<a id="tocsapple-pay"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "apple_pay",
  "card_brand": "visa",
  "funding": "credit",
  "commercial": true,
  "card_country_code": "string",
  "card_bin": "string",
  "card_last_four": "stri",
  "card_expiry": "string",
  "cardholder_name": "string",
  "checks": {
    "three_ds": {
      "eci": "string",
      "state": "verified",
      "version": 0
    },
    "cvv_verification": "match",
    "address": "match",
    "postcode": "match",
    "cardholder": "match"
  },
  "authorisation_code": "T483XF",
  "arn": "74839572049583726403928",
  "capture_deadline": "1970-01-01T00:00:00Z",
  "terminal_hardware_id": "string",
  "fingerprint": "1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=",
  "network_transaction_id": "string"
}
```

Object containing details of a card used via Apple Pay.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|ID of the saved payment method.<br><br>:::note<br>The `id` parameter is only returned when the payment method is saved.<br>:::|
|type|[Payment-Method-Type](#schemapayment-method-type)|true|none|The type of payment method used to pay for the order.<br><br>Available values:<br><br>\| Payment method `type` \| Description \|<br>\| --------------------- \| ----------- \|<br>\| `apple_pay` \| The customer paid the order using Apple Pay. \|<br>\| `card` \| The customer paid the order using their credit or debit card. \|<br>\| `google_pay` \| The customer paid the order using Google Pay. \|<br>\| `revolut_pay_card` \| The customer paid the order via Revolut Pay using their credit or debit card. \|<br>\| `revolut_pay_account` \| The customer paid the order via Revolut Pay using their Revolut account. \|<br>\| `sepa_direct_debit` \| The customer paid the order using SEPA Direct Debit. \||
|card_brand|string|false|none|The type of the card.|
|funding|string|false|none|The type of card funding.|
|commercial|boolean|false|none|Indicates whether the card is a commercial card.<br>The field is omitted when the classification is unavailable.|
|card_country_code|string|false|none|The 2-letter country code of the country where the card was issued.|
|card_bin|string|false|none|The BIN of the card.|
|card_last_four|string|false|none|The last four digits of the card number.|
|card_expiry|string(MM/YY)|false|none|The expiry date of the card in the format of MM/YY.|
|cardholder_name|string|false|none|The name of the cardholder.|
|checks|[Card-Checks-v2](#schemacard-checks-v2)|false|none|The details of the check for card payment. Only for orders with successful payments.|
|authorisation_code|[Authorisation-Code](#schemaauthorisation-code)|false|none|The authorisation code (or auth code) is a short, alphanumeric code returned by the cardholder's issuing bank to the merchant's terminal or payment gateway.<br><br>It serves as confirmation that the transaction has been approved and funds are available.|
|arn|[Arn](#schemaarn)|false|none|Acquirer Reference Number (ARN) of the payment.<br><br>:::note<br>Only returned for refund payments made by a card.<br>:::|
|capture_deadline|[Capture-Deadline](#schemacapture-deadline)|false|none|The date and time by which the payment must be captured.<br><br>After this deadline, the authorised funds may be automatically released by the card issuer.|
|terminal_hardware_id|[Terminal-Hardware-Id](#schematerminal-hardware-id)|false|none|The hardware identifier of the Revolut Terminal device used to process the payment.<br><br>:::note<br>Only present for card-present transactions processed via Revolut Terminal.<br>:::|
|fingerprint|[Fingerprint](#schemafingerprint)|false|none|A unique identifier for a payment method, always 44 characters long. This fingerprint can be used to uniquely identify various payment methods.<br><br>#### Fingerprint generation<br><br>\| Payment method \| Description \|<br>\| -------- \| ----------- \|<br>\| **All payment methods** \| A fingerprint is generated for all payment methods, including cards, Revolut Pay (card, account-to-account payments), Apple Pay, and Google Pay. \|<br>\| **Cards (Revolut Pay & Card Gateway)** \| For cards, the fingerprint is based on the PAN. Cards processed via Revolut Pay and our card gateway will share the same fingerprint. Renewed cards (new expiry/CVV) retain the same fingerprint for efficient blocking. \|<br>\| **Apple Pay & Google Pay** \| Since Apple Pay and Google Pay provide us Device PANs (DPAN), the fingerprint is based on the DPAN provided by Apple/Google, not the connected card's PAN. This means that a new DPAN (and fingerprint) is generated for cards in case they are re-added to the customer's digital wallet, or added to different devices. \|<br><br>#### Detecting duplicate payment methods<br><br>Fingerprints are a valuable tool for detecting duplicate payment methods by identifying if a payment method has been seen before. This capability, in turn, helps in preventing various types of misuse (e.g., exploitation of free trials, or association with known problematic accounts, which can be a form of fraud). To effectively use fingerprints for this purpose, you will need to create and maintain your own lists (e.g., blocklists of known problematic fingerprints, allowlists for trusted customers, or tracking frequently used fingerprints). <br><br>The ideal way to utilise fingerprints is by combining them with a manual capture process. While automatic capture with subsequent refunds for problematic payments is possible, manual capture based on fingerprint validation is recommended.<br><br>During your manual capture workflow, after a payment was authorised:<br>  <br>  - Check the fingerprint status by comparing it against your maintained lists and internal business rules.<br>  - If you decide to proceed with the payment (e.g., the fingerprint is not on a blocklist, or matches a trusted customer's previous payment method): [Capture the order](https://developer.revolut.com/docs/api/merchant#capture-order).<br>  - If you decide not to proceed with the payment (e.g., the fingerprint matches a known fraudulent fingerprint, or exhibits suspicious patterns): [Cancel the order](https://developer.revolut.com/docs/api/merchant#cancel-order).|
|network_transaction_id|[Network-Transaction-Id](#schemanetwork-transaction-id)|false|none|The Network Transaction ID (NTI) is a unique identifier assigned by the card scheme (e.g., Visa or Mastercard) to a card transaction.<br><br>It can be used to trace the transaction across the payment network, link recurring or instalment payments to the original authorisation, and support dispute resolution.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|apple_pay|
|type|card|
|type|google_pay|
|type|revolut_pay_card|
|type|revolut_pay_account|
|type|sepa_direct_debit|
|card_brand|visa|
|card_brand|mastercard|
|card_brand|american_express|
|funding|credit|
|funding|debit|
|funding|prepaid|

<h2 id="tocS_Card">Card</h2>
<!-- backwards compatibility -->
<a id="schemacard"></a>
<a id="schema_Card"></a>
<a id="tocScard"></a>
<a id="tocscard"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "apple_pay",
  "card_brand": "visa",
  "funding": "credit",
  "commercial": true,
  "card_country_code": "string",
  "card_bin": "string",
  "card_last_four": "stri",
  "card_expiry": "string",
  "cardholder_name": "string",
  "checks": {
    "three_ds": {
      "eci": "string",
      "state": "verified",
      "version": 0
    },
    "cvv_verification": "match",
    "address": "match",
    "postcode": "match",
    "cardholder": "match"
  },
  "authorisation_code": "T483XF",
  "arn": "74839572049583726403928",
  "capture_deadline": "1970-01-01T00:00:00Z",
  "terminal_hardware_id": "string",
  "fingerprint": "1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=",
  "network_transaction_id": "string"
}
```

Object containing details of the card used for the payment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|ID of the saved payment method.<br><br>:::note<br>The `id` parameter is only returned when the payment method is saved.<br>:::|
|type|[Payment-Method-Type](#schemapayment-method-type)|true|none|The type of payment method used to pay for the order.<br><br>Available values:<br><br>\| Payment method `type` \| Description \|<br>\| --------------------- \| ----------- \|<br>\| `apple_pay` \| The customer paid the order using Apple Pay. \|<br>\| `card` \| The customer paid the order using their credit or debit card. \|<br>\| `google_pay` \| The customer paid the order using Google Pay. \|<br>\| `revolut_pay_card` \| The customer paid the order via Revolut Pay using their credit or debit card. \|<br>\| `revolut_pay_account` \| The customer paid the order via Revolut Pay using their Revolut account. \|<br>\| `sepa_direct_debit` \| The customer paid the order using SEPA Direct Debit. \||
|card_brand|string|false|none|The type of the card.|
|funding|string|false|none|The type of card funding.|
|commercial|boolean|false|none|Indicates whether the card is a commercial card.<br>The field is omitted when the classification is unavailable.|
|card_country_code|string|false|none|The 2-letter country code of the country where the card was issued.|
|card_bin|string|false|none|The BIN of the card.|
|card_last_four|string|false|none|The last four digits of the card number.|
|card_expiry|string(MM/YY)|false|none|The expiry date of the card in the format of MM/YY.|
|cardholder_name|string|false|none|The name of the cardholder.|
|checks|[Card-Checks-v2](#schemacard-checks-v2)|false|none|The details of the check for card payment. Only for orders with successful payments.|
|authorisation_code|[Authorisation-Code](#schemaauthorisation-code)|false|none|The authorisation code (or auth code) is a short, alphanumeric code returned by the cardholder's issuing bank to the merchant's terminal or payment gateway.<br><br>It serves as confirmation that the transaction has been approved and funds are available.|
|arn|[Arn](#schemaarn)|false|none|Acquirer Reference Number (ARN) of the payment.<br><br>:::note<br>Only returned for refund payments made by a card.<br>:::|
|capture_deadline|[Capture-Deadline](#schemacapture-deadline)|false|none|The date and time by which the payment must be captured.<br><br>After this deadline, the authorised funds may be automatically released by the card issuer.|
|terminal_hardware_id|[Terminal-Hardware-Id](#schematerminal-hardware-id)|false|none|The hardware identifier of the Revolut Terminal device used to process the payment.<br><br>:::note<br>Only present for card-present transactions processed via Revolut Terminal.<br>:::|
|fingerprint|[Fingerprint](#schemafingerprint)|false|none|A unique identifier for a payment method, always 44 characters long. This fingerprint can be used to uniquely identify various payment methods.<br><br>#### Fingerprint generation<br><br>\| Payment method \| Description \|<br>\| -------- \| ----------- \|<br>\| **All payment methods** \| A fingerprint is generated for all payment methods, including cards, Revolut Pay (card, account-to-account payments), Apple Pay, and Google Pay. \|<br>\| **Cards (Revolut Pay & Card Gateway)** \| For cards, the fingerprint is based on the PAN. Cards processed via Revolut Pay and our card gateway will share the same fingerprint. Renewed cards (new expiry/CVV) retain the same fingerprint for efficient blocking. \|<br>\| **Apple Pay & Google Pay** \| Since Apple Pay and Google Pay provide us Device PANs (DPAN), the fingerprint is based on the DPAN provided by Apple/Google, not the connected card's PAN. This means that a new DPAN (and fingerprint) is generated for cards in case they are re-added to the customer's digital wallet, or added to different devices. \|<br><br>#### Detecting duplicate payment methods<br><br>Fingerprints are a valuable tool for detecting duplicate payment methods by identifying if a payment method has been seen before. This capability, in turn, helps in preventing various types of misuse (e.g., exploitation of free trials, or association with known problematic accounts, which can be a form of fraud). To effectively use fingerprints for this purpose, you will need to create and maintain your own lists (e.g., blocklists of known problematic fingerprints, allowlists for trusted customers, or tracking frequently used fingerprints). <br><br>The ideal way to utilise fingerprints is by combining them with a manual capture process. While automatic capture with subsequent refunds for problematic payments is possible, manual capture based on fingerprint validation is recommended.<br><br>During your manual capture workflow, after a payment was authorised:<br>  <br>  - Check the fingerprint status by comparing it against your maintained lists and internal business rules.<br>  - If you decide to proceed with the payment (e.g., the fingerprint is not on a blocklist, or matches a trusted customer's previous payment method): [Capture the order](https://developer.revolut.com/docs/api/merchant#capture-order).<br>  - If you decide not to proceed with the payment (e.g., the fingerprint matches a known fraudulent fingerprint, or exhibits suspicious patterns): [Cancel the order](https://developer.revolut.com/docs/api/merchant#cancel-order).|
|network_transaction_id|[Network-Transaction-Id](#schemanetwork-transaction-id)|false|none|The Network Transaction ID (NTI) is a unique identifier assigned by the card scheme (e.g., Visa or Mastercard) to a card transaction.<br><br>It can be used to trace the transaction across the payment network, link recurring or instalment payments to the original authorisation, and support dispute resolution.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|apple_pay|
|type|card|
|type|google_pay|
|type|revolut_pay_card|
|type|revolut_pay_account|
|type|sepa_direct_debit|
|card_brand|visa|
|card_brand|mastercard|
|card_brand|american_express|
|funding|credit|
|funding|debit|
|funding|prepaid|

<h2 id="tocS_Google-Pay">Google-Pay</h2>
<!-- backwards compatibility -->
<a id="schemagoogle-pay"></a>
<a id="schema_Google-Pay"></a>
<a id="tocSgoogle-pay"></a>
<a id="tocsgoogle-pay"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "apple_pay",
  "card_brand": "visa",
  "funding": "credit",
  "commercial": true,
  "card_country_code": "string",
  "card_bin": "string",
  "card_last_four": "stri",
  "card_expiry": "string",
  "cardholder_name": "string",
  "checks": {
    "three_ds": {
      "eci": "string",
      "state": "verified",
      "version": 0
    },
    "cvv_verification": "match",
    "address": "match",
    "postcode": "match",
    "cardholder": "match"
  },
  "authorisation_code": "T483XF",
  "arn": "74839572049583726403928",
  "capture_deadline": "1970-01-01T00:00:00Z",
  "terminal_hardware_id": "string",
  "fingerprint": "1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=",
  "network_transaction_id": "string"
}
```

Object containing details of a card used via Google Pay.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|ID of the saved payment method.<br><br>:::note<br>The `id` parameter is only returned when the payment method is saved.<br>:::|
|type|[Payment-Method-Type](#schemapayment-method-type)|true|none|The type of payment method used to pay for the order.<br><br>Available values:<br><br>\| Payment method `type` \| Description \|<br>\| --------------------- \| ----------- \|<br>\| `apple_pay` \| The customer paid the order using Apple Pay. \|<br>\| `card` \| The customer paid the order using their credit or debit card. \|<br>\| `google_pay` \| The customer paid the order using Google Pay. \|<br>\| `revolut_pay_card` \| The customer paid the order via Revolut Pay using their credit or debit card. \|<br>\| `revolut_pay_account` \| The customer paid the order via Revolut Pay using their Revolut account. \|<br>\| `sepa_direct_debit` \| The customer paid the order using SEPA Direct Debit. \||
|card_brand|string|false|none|The type of the card.|
|funding|string|false|none|The type of card funding.|
|commercial|boolean|false|none|Indicates whether the card is a commercial card.<br>The field is omitted when the classification is unavailable.|
|card_country_code|string|false|none|The 2-letter country code of the country where the card was issued.|
|card_bin|string|false|none|The BIN of the card.|
|card_last_four|string|false|none|The last four digits of the card number.|
|card_expiry|string(MM/YY)|false|none|The expiry date of the card in the format of MM/YY.|
|cardholder_name|string|false|none|The name of the cardholder.|
|checks|[Card-Checks-v2](#schemacard-checks-v2)|false|none|The details of the check for card payment. Only for orders with successful payments.|
|authorisation_code|[Authorisation-Code](#schemaauthorisation-code)|false|none|The authorisation code (or auth code) is a short, alphanumeric code returned by the cardholder's issuing bank to the merchant's terminal or payment gateway.<br><br>It serves as confirmation that the transaction has been approved and funds are available.|
|arn|[Arn](#schemaarn)|false|none|Acquirer Reference Number (ARN) of the payment.<br><br>:::note<br>Only returned for refund payments made by a card.<br>:::|
|capture_deadline|[Capture-Deadline](#schemacapture-deadline)|false|none|The date and time by which the payment must be captured.<br><br>After this deadline, the authorised funds may be automatically released by the card issuer.|
|terminal_hardware_id|[Terminal-Hardware-Id](#schematerminal-hardware-id)|false|none|The hardware identifier of the Revolut Terminal device used to process the payment.<br><br>:::note<br>Only present for card-present transactions processed via Revolut Terminal.<br>:::|
|fingerprint|[Fingerprint](#schemafingerprint)|false|none|A unique identifier for a payment method, always 44 characters long. This fingerprint can be used to uniquely identify various payment methods.<br><br>#### Fingerprint generation<br><br>\| Payment method \| Description \|<br>\| -------- \| ----------- \|<br>\| **All payment methods** \| A fingerprint is generated for all payment methods, including cards, Revolut Pay (card, account-to-account payments), Apple Pay, and Google Pay. \|<br>\| **Cards (Revolut Pay & Card Gateway)** \| For cards, the fingerprint is based on the PAN. Cards processed via Revolut Pay and our card gateway will share the same fingerprint. Renewed cards (new expiry/CVV) retain the same fingerprint for efficient blocking. \|<br>\| **Apple Pay & Google Pay** \| Since Apple Pay and Google Pay provide us Device PANs (DPAN), the fingerprint is based on the DPAN provided by Apple/Google, not the connected card's PAN. This means that a new DPAN (and fingerprint) is generated for cards in case they are re-added to the customer's digital wallet, or added to different devices. \|<br><br>#### Detecting duplicate payment methods<br><br>Fingerprints are a valuable tool for detecting duplicate payment methods by identifying if a payment method has been seen before. This capability, in turn, helps in preventing various types of misuse (e.g., exploitation of free trials, or association with known problematic accounts, which can be a form of fraud). To effectively use fingerprints for this purpose, you will need to create and maintain your own lists (e.g., blocklists of known problematic fingerprints, allowlists for trusted customers, or tracking frequently used fingerprints). <br><br>The ideal way to utilise fingerprints is by combining them with a manual capture process. While automatic capture with subsequent refunds for problematic payments is possible, manual capture based on fingerprint validation is recommended.<br><br>During your manual capture workflow, after a payment was authorised:<br>  <br>  - Check the fingerprint status by comparing it against your maintained lists and internal business rules.<br>  - If you decide to proceed with the payment (e.g., the fingerprint is not on a blocklist, or matches a trusted customer's previous payment method): [Capture the order](https://developer.revolut.com/docs/api/merchant#capture-order).<br>  - If you decide not to proceed with the payment (e.g., the fingerprint matches a known fraudulent fingerprint, or exhibits suspicious patterns): [Cancel the order](https://developer.revolut.com/docs/api/merchant#cancel-order).|
|network_transaction_id|[Network-Transaction-Id](#schemanetwork-transaction-id)|false|none|The Network Transaction ID (NTI) is a unique identifier assigned by the card scheme (e.g., Visa or Mastercard) to a card transaction.<br><br>It can be used to trace the transaction across the payment network, link recurring or instalment payments to the original authorisation, and support dispute resolution.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|apple_pay|
|type|card|
|type|google_pay|
|type|revolut_pay_card|
|type|revolut_pay_account|
|type|sepa_direct_debit|
|card_brand|visa|
|card_brand|mastercard|
|card_brand|american_express|
|funding|credit|
|funding|debit|
|funding|prepaid|

<h2 id="tocS_Revolut-Pay-Card">Revolut-Pay-Card</h2>
<!-- backwards compatibility -->
<a id="schemarevolut-pay-card"></a>
<a id="schema_Revolut-Pay-Card"></a>
<a id="tocSrevolut-pay-card"></a>
<a id="tocsrevolut-pay-card"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "apple_pay",
  "card_brand": "visa",
  "funding": "credit",
  "commercial": true,
  "card_country_code": "string",
  "card_bin": "string",
  "card_last_four": "stri",
  "card_expiry": "string",
  "cardholder_name": "string",
  "checks": {
    "three_ds": {
      "eci": "string",
      "state": "verified",
      "version": 0
    },
    "cvv_verification": "match",
    "address": "match",
    "postcode": "match",
    "cardholder": "match"
  },
  "authorisation_code": "T483XF",
  "arn": "74839572049583726403928",
  "capture_deadline": "1970-01-01T00:00:00Z",
  "terminal_hardware_id": "string",
  "fingerprint": "1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=",
  "network_transaction_id": "string"
}
```

Object containing details of a card used via Revolut Pay.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|ID of the saved payment method.<br><br>:::note<br>The `id` parameter is only returned when the payment method is saved.<br>:::|
|type|[Payment-Method-Type](#schemapayment-method-type)|true|none|The type of payment method used to pay for the order.<br><br>Available values:<br><br>\| Payment method `type` \| Description \|<br>\| --------------------- \| ----------- \|<br>\| `apple_pay` \| The customer paid the order using Apple Pay. \|<br>\| `card` \| The customer paid the order using their credit or debit card. \|<br>\| `google_pay` \| The customer paid the order using Google Pay. \|<br>\| `revolut_pay_card` \| The customer paid the order via Revolut Pay using their credit or debit card. \|<br>\| `revolut_pay_account` \| The customer paid the order via Revolut Pay using their Revolut account. \|<br>\| `sepa_direct_debit` \| The customer paid the order using SEPA Direct Debit. \||
|card_brand|string|false|none|The type of the card.|
|funding|string|false|none|The type of card funding.|
|commercial|boolean|false|none|Indicates whether the card is a commercial card.<br>The field is omitted when the classification is unavailable.|
|card_country_code|string|false|none|The 2-letter country code of the country where the card was issued.|
|card_bin|string|false|none|The BIN of the card.|
|card_last_four|string|false|none|The last four digits of the card number.|
|card_expiry|string(MM/YY)|false|none|The expiry date of the card in the format of MM/YY.|
|cardholder_name|string|false|none|The name of the cardholder.|
|checks|[Card-Checks-v2](#schemacard-checks-v2)|false|none|The details of the check for card payment. Only for orders with successful payments.|
|authorisation_code|[Authorisation-Code](#schemaauthorisation-code)|false|none|The authorisation code (or auth code) is a short, alphanumeric code returned by the cardholder's issuing bank to the merchant's terminal or payment gateway.<br><br>It serves as confirmation that the transaction has been approved and funds are available.|
|arn|[Arn](#schemaarn)|false|none|Acquirer Reference Number (ARN) of the payment.<br><br>:::note<br>Only returned for refund payments made by a card.<br>:::|
|capture_deadline|[Capture-Deadline](#schemacapture-deadline)|false|none|The date and time by which the payment must be captured.<br><br>After this deadline, the authorised funds may be automatically released by the card issuer.|
|terminal_hardware_id|[Terminal-Hardware-Id](#schematerminal-hardware-id)|false|none|The hardware identifier of the Revolut Terminal device used to process the payment.<br><br>:::note<br>Only present for card-present transactions processed via Revolut Terminal.<br>:::|
|fingerprint|[Fingerprint](#schemafingerprint)|false|none|A unique identifier for a payment method, always 44 characters long. This fingerprint can be used to uniquely identify various payment methods.<br><br>#### Fingerprint generation<br><br>\| Payment method \| Description \|<br>\| -------- \| ----------- \|<br>\| **All payment methods** \| A fingerprint is generated for all payment methods, including cards, Revolut Pay (card, account-to-account payments), Apple Pay, and Google Pay. \|<br>\| **Cards (Revolut Pay & Card Gateway)** \| For cards, the fingerprint is based on the PAN. Cards processed via Revolut Pay and our card gateway will share the same fingerprint. Renewed cards (new expiry/CVV) retain the same fingerprint for efficient blocking. \|<br>\| **Apple Pay & Google Pay** \| Since Apple Pay and Google Pay provide us Device PANs (DPAN), the fingerprint is based on the DPAN provided by Apple/Google, not the connected card's PAN. This means that a new DPAN (and fingerprint) is generated for cards in case they are re-added to the customer's digital wallet, or added to different devices. \|<br><br>#### Detecting duplicate payment methods<br><br>Fingerprints are a valuable tool for detecting duplicate payment methods by identifying if a payment method has been seen before. This capability, in turn, helps in preventing various types of misuse (e.g., exploitation of free trials, or association with known problematic accounts, which can be a form of fraud). To effectively use fingerprints for this purpose, you will need to create and maintain your own lists (e.g., blocklists of known problematic fingerprints, allowlists for trusted customers, or tracking frequently used fingerprints). <br><br>The ideal way to utilise fingerprints is by combining them with a manual capture process. While automatic capture with subsequent refunds for problematic payments is possible, manual capture based on fingerprint validation is recommended.<br><br>During your manual capture workflow, after a payment was authorised:<br>  <br>  - Check the fingerprint status by comparing it against your maintained lists and internal business rules.<br>  - If you decide to proceed with the payment (e.g., the fingerprint is not on a blocklist, or matches a trusted customer's previous payment method): [Capture the order](https://developer.revolut.com/docs/api/merchant#capture-order).<br>  - If you decide not to proceed with the payment (e.g., the fingerprint matches a known fraudulent fingerprint, or exhibits suspicious patterns): [Cancel the order](https://developer.revolut.com/docs/api/merchant#cancel-order).|
|network_transaction_id|[Network-Transaction-Id](#schemanetwork-transaction-id)|false|none|The Network Transaction ID (NTI) is a unique identifier assigned by the card scheme (e.g., Visa or Mastercard) to a card transaction.<br><br>It can be used to trace the transaction across the payment network, link recurring or instalment payments to the original authorisation, and support dispute resolution.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|apple_pay|
|type|card|
|type|google_pay|
|type|revolut_pay_card|
|type|revolut_pay_account|
|type|sepa_direct_debit|
|card_brand|visa|
|card_brand|mastercard|
|card_brand|american_express|
|funding|credit|
|funding|debit|
|funding|prepaid|

<h2 id="tocS_Revolut-Pay-Account">Revolut-Pay-Account</h2>
<!-- backwards compatibility -->
<a id="schemarevolut-pay-account"></a>
<a id="schema_Revolut-Pay-Account"></a>
<a id="tocSrevolut-pay-account"></a>
<a id="tocsrevolut-pay-account"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "apple_pay",
  "fingerprint": "1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY="
}
```

Revolut Pay account payment method details, including the saved payment method ID and fingerprint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|ID of the saved payment method.<br><br>:::note<br>The `id` parameter is only returned when the payment method is saved.<br>:::|
|type|[Payment-Method-Type](#schemapayment-method-type)|true|none|The type of payment method used to pay for the order.<br><br>Available values:<br><br>\| Payment method `type` \| Description \|<br>\| --------------------- \| ----------- \|<br>\| `apple_pay` \| The customer paid the order using Apple Pay. \|<br>\| `card` \| The customer paid the order using their credit or debit card. \|<br>\| `google_pay` \| The customer paid the order using Google Pay. \|<br>\| `revolut_pay_card` \| The customer paid the order via Revolut Pay using their credit or debit card. \|<br>\| `revolut_pay_account` \| The customer paid the order via Revolut Pay using their Revolut account. \|<br>\| `sepa_direct_debit` \| The customer paid the order using SEPA Direct Debit. \||
|fingerprint|[Fingerprint](#schemafingerprint)|false|none|A unique identifier for a payment method, always 44 characters long. This fingerprint can be used to uniquely identify various payment methods.<br><br>#### Fingerprint generation<br><br>\| Payment method \| Description \|<br>\| -------- \| ----------- \|<br>\| **All payment methods** \| A fingerprint is generated for all payment methods, including cards, Revolut Pay (card, account-to-account payments), Apple Pay, and Google Pay. \|<br>\| **Cards (Revolut Pay & Card Gateway)** \| For cards, the fingerprint is based on the PAN. Cards processed via Revolut Pay and our card gateway will share the same fingerprint. Renewed cards (new expiry/CVV) retain the same fingerprint for efficient blocking. \|<br>\| **Apple Pay & Google Pay** \| Since Apple Pay and Google Pay provide us Device PANs (DPAN), the fingerprint is based on the DPAN provided by Apple/Google, not the connected card's PAN. This means that a new DPAN (and fingerprint) is generated for cards in case they are re-added to the customer's digital wallet, or added to different devices. \|<br><br>#### Detecting duplicate payment methods<br><br>Fingerprints are a valuable tool for detecting duplicate payment methods by identifying if a payment method has been seen before. This capability, in turn, helps in preventing various types of misuse (e.g., exploitation of free trials, or association with known problematic accounts, which can be a form of fraud). To effectively use fingerprints for this purpose, you will need to create and maintain your own lists (e.g., blocklists of known problematic fingerprints, allowlists for trusted customers, or tracking frequently used fingerprints). <br><br>The ideal way to utilise fingerprints is by combining them with a manual capture process. While automatic capture with subsequent refunds for problematic payments is possible, manual capture based on fingerprint validation is recommended.<br><br>During your manual capture workflow, after a payment was authorised:<br>  <br>  - Check the fingerprint status by comparing it against your maintained lists and internal business rules.<br>  - If you decide to proceed with the payment (e.g., the fingerprint is not on a blocklist, or matches a trusted customer's previous payment method): [Capture the order](https://developer.revolut.com/docs/api/merchant#capture-order).<br>  - If you decide not to proceed with the payment (e.g., the fingerprint matches a known fraudulent fingerprint, or exhibits suspicious patterns): [Cancel the order](https://developer.revolut.com/docs/api/merchant#cancel-order).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|apple_pay|
|type|card|
|type|google_pay|
|type|revolut_pay_card|
|type|revolut_pay_account|
|type|sepa_direct_debit|

<h2 id="tocS_Sepa-Direct-Debit-Debtor-Iban-Last-Four">Sepa-Direct-Debit-Debtor-Iban-Last-Four</h2>
<!-- backwards compatibility -->
<a id="schemasepa-direct-debit-debtor-iban-last-four"></a>
<a id="schema_Sepa-Direct-Debit-Debtor-Iban-Last-Four"></a>
<a id="tocSsepa-direct-debit-debtor-iban-last-four"></a>
<a id="tocssepa-direct-debit-debtor-iban-last-four"></a>

```json
"stri"
```

The last four digits of the debtor's IBAN.

<h2 id="tocS_Sepa-Direct-Debit-Debtor-Name">Sepa-Direct-Debit-Debtor-Name</h2>
<!-- backwards compatibility -->
<a id="schemasepa-direct-debit-debtor-name"></a>
<a id="schema_Sepa-Direct-Debit-Debtor-Name"></a>
<a id="tocSsepa-direct-debit-debtor-name"></a>
<a id="tocssepa-direct-debit-debtor-name"></a>

```json
"string"
```

The full name of the debtor as provided in the mandate.

<h2 id="tocS_Sepa-Direct-Debit-Mandate-Reference">Sepa-Direct-Debit-Mandate-Reference</h2>
<!-- backwards compatibility -->
<a id="schemasepa-direct-debit-mandate-reference"></a>
<a id="schema_Sepa-Direct-Debit-Mandate-Reference"></a>
<a id="tocSsepa-direct-debit-mandate-reference"></a>
<a id="tocssepa-direct-debit-mandate-reference"></a>

```json
"string"
```

The unique mandate reference generated by Revolut. Include this in pre-debit notifications sent to your customers.

<h2 id="tocS_Sepa-Direct-Debit">Sepa-Direct-Debit</h2>
<!-- backwards compatibility -->
<a id="schemasepa-direct-debit"></a>
<a id="schema_Sepa-Direct-Debit"></a>
<a id="tocSsepa-direct-debit"></a>
<a id="tocssepa-direct-debit"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "apple_pay",
  "debtor_iban_last_four": "stri",
  "debtor_name": "string",
  "mandate_reference": "string"
}
```

Object containing details of a SEPA Direct Debit payment.

:::info
For more information, see: [SEPA Direct Debit server-to-server integration](https://developer.revolut.com/docs/guides/merchant/accept-payments/payment-methods/sepa-direct-debit/server-to-server)
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|ID of the saved payment method.<br><br>:::note<br>The `id` parameter is only returned when the payment method is saved for the merchant.<br>:::|
|type|[Payment-Method-Type](#schemapayment-method-type)|true|none|The type of payment method used to pay for the order.<br><br>Available values:<br><br>\| Payment method `type` \| Description \|<br>\| --------------------- \| ----------- \|<br>\| `apple_pay` \| The customer paid the order using Apple Pay. \|<br>\| `card` \| The customer paid the order using their credit or debit card. \|<br>\| `google_pay` \| The customer paid the order using Google Pay. \|<br>\| `revolut_pay_card` \| The customer paid the order via Revolut Pay using their credit or debit card. \|<br>\| `revolut_pay_account` \| The customer paid the order via Revolut Pay using their Revolut account. \|<br>\| `sepa_direct_debit` \| The customer paid the order using SEPA Direct Debit. \||
|debtor_iban_last_four|[Sepa-Direct-Debit-Debtor-Iban-Last-Four](#schemasepa-direct-debit-debtor-iban-last-four)|false|none|The last four digits of the debtor's IBAN.|
|debtor_name|[Sepa-Direct-Debit-Debtor-Name](#schemasepa-direct-debit-debtor-name)|false|none|The full name of the debtor as provided in the mandate.|
|mandate_reference|[Sepa-Direct-Debit-Mandate-Reference](#schemasepa-direct-debit-mandate-reference)|false|none|The unique mandate reference generated by Revolut. Include this in pre-debit notifications sent to your customers.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|apple_pay|
|type|card|
|type|google_pay|
|type|revolut_pay_card|
|type|revolut_pay_account|
|type|sepa_direct_debit|

<h2 id="tocS_Payment-Method-v2">Payment-Method-v2</h2>
<!-- backwards compatibility -->
<a id="schemapayment-method-v2"></a>
<a id="schema_Payment-Method-v2"></a>
<a id="tocSpayment-method-v2"></a>
<a id="tocspayment-method-v2"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "apple_pay",
  "card_brand": "visa",
  "funding": "credit",
  "commercial": true,
  "card_country_code": "string",
  "card_bin": "string",
  "card_last_four": "stri",
  "card_expiry": "string",
  "cardholder_name": "string",
  "checks": {
    "three_ds": {
      "eci": "string",
      "state": "verified",
      "version": 0
    },
    "cvv_verification": "match",
    "address": "match",
    "postcode": "match",
    "cardholder": "match"
  },
  "authorisation_code": "T483XF",
  "arn": "74839572049583726403928",
  "capture_deadline": "1970-01-01T00:00:00Z",
  "terminal_hardware_id": "string",
  "fingerprint": "1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=",
  "network_transaction_id": "string"
}
```

The details of the payment method used to make the payment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Apple-Pay](#schemaapple-pay)|false|none|Object containing details of a card used via Apple Pay.|
|*oneOf*|[Card](#schemacard)|false|none|Object containing details of the card used for the payment.|
|*oneOf*|[Google-Pay](#schemagoogle-pay)|false|none|Object containing details of a card used via Google Pay.|
|*oneOf*|[Revolut-Pay-Card](#schemarevolut-pay-card)|false|none|Object containing details of a card used via Revolut Pay.|
|*oneOf*|[Revolut-Pay-Account](#schemarevolut-pay-account)|false|none|Revolut Pay account payment method details, including the saved payment method ID and fingerprint.|
|*oneOf*|[Sepa-Direct-Debit](#schemasepa-direct-debit)|false|none|Object containing details of a SEPA Direct Debit payment.<br><br>:::info<br>For more information, see: [SEPA Direct Debit server-to-server integration](https://developer.revolut.com/docs/guides/merchant/accept-payments/payment-methods/sepa-direct-debit/server-to-server)<br>:::|

<h2 id="tocS_Authentication-Challenge-Type">Authentication-Challenge-Type</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication-challenge-type"></a>
<a id="schema_Authentication-Challenge-Type"></a>
<a id="tocSauthentication-challenge-type"></a>
<a id="tocsauthentication-challenge-type"></a>

```json
"three_ds"
```

Type of the authentication challenge the payment triggers.

<h2 id="tocS_Three-Ds">Three-Ds</h2>
<!-- backwards compatibility -->
<a id="schemathree-ds"></a>
<a id="schema_Three-Ds"></a>
<a id="tocSthree-ds"></a>
<a id="tocsthree-ds"></a>

```json
{
  "type": "three_ds",
  "acs_url": "http://example.com"
}
```

Information about the 3DS challenge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[Authentication-Challenge-Type](#schemaauthentication-challenge-type)|true|none|Type of the authentication challenge the payment triggers.|
|acs_url|string(uri)|true|none|The URL of the authentication challenge.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|three_ds|
|type|three_ds_fingerprint|

<h2 id="tocS_Three-Ds-Fingerprint">Three-Ds-Fingerprint</h2>
<!-- backwards compatibility -->
<a id="schemathree-ds-fingerprint"></a>
<a id="schema_Three-Ds-Fingerprint"></a>
<a id="tocSthree-ds-fingerprint"></a>
<a id="tocsthree-ds-fingerprint"></a>

```json
{
  "type": "three_ds",
  "fingerprint_url": "http://example.com",
  "fingerprint_data": "string"
}
```

Information about the 3DS fingerprint challenge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[Authentication-Challenge-Type](#schemaauthentication-challenge-type)|true|none|Type of the authentication challenge the payment triggers.|
|fingerprint_url|string(uri)|true|none|The URL of the fingerprint. (Used only internally by Revolut.)|
|fingerprint_data|string(JSON)|true|none|Data about the fingerprint used for authentication. (Used only internally<br>by Revolut.)|

#### Enumerated Values

|Property|Value|
|---|---|
|type|three_ds|
|type|three_ds_fingerprint|

<h2 id="tocS_Authentication-Challenge">Authentication-Challenge</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication-challenge"></a>
<a id="schema_Authentication-Challenge"></a>
<a id="tocSauthentication-challenge"></a>
<a id="tocsauthentication-challenge"></a>

```json
{
  "type": "three_ds",
  "acs_url": "http://example.com"
}
```

Details about the authentication challenge that should be performed to complete the authentication process. For more information about Revolut's 3DS solution, see: [3D Secure overview](https://developer.revolut.com/docs/guides/merchant/reference/3d-secure).

Only returned if the payment's state is `authentication_challenge`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Three-Ds](#schemathree-ds)|false|none|Information about the 3DS challenge.|
|*oneOf*|[Three-Ds-Fingerprint](#schemathree-ds-fingerprint)|false|none|Information about the 3DS fingerprint challenge.|

<h2 id="tocS_Address-v2">Address-v2</h2>
<!-- backwards compatibility -->
<a id="schemaaddress-v2"></a>
<a id="schema_Address-v2"></a>
<a id="tocSaddress-v2"></a>
<a id="tocsaddress-v2"></a>

```json
{
  "street_line_1": "string",
  "street_line_2": "string",
  "region": "string",
  "city": "string",
  "country_code": "st",
  "postcode": "string"
}
```

Object containing address details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|street_line_1|string|false|none|Street line 1 information.|
|street_line_2|string|false|none|Street line 2 information.|
|region|string|false|none|The region associated with the address.|
|city|string|false|none|The city associated with the address.|
|country_code|string|true|none|The 2-letter country code of the country associated with the address.|
|postcode|string|true|none|The postcode associated with the address.|

<h2 id="tocS_Payment-Risk-Level">Payment-Risk-Level</h2>
<!-- backwards compatibility -->
<a id="schemapayment-risk-level"></a>
<a id="schema_Payment-Risk-Level"></a>
<a id="tocSpayment-risk-level"></a>
<a id="tocspayment-risk-level"></a>

```json
"low"
```

The risk level of the card.

If the risk level is `high`, the payment might be declined.

<h2 id="tocS_Fee">Fee</h2>
<!-- backwards compatibility -->
<a id="schemafee"></a>
<a id="schema_Fee"></a>
<a id="tocSfee"></a>
<a id="tocsfee"></a>

```json
{
  "type": "fx",
  "amount": 0,
  "currency": "string"
}
```

A fee applied to an order, including its type, amount, and currency.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of the order fee.|
|amount|integer(int64)|false|none|The amount of the payment fee (minor currency unit). For example, enter `7034` for €70.34 in the field.|
|currency|string|false|none|The currency of the payment fee. [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|

#### Enumerated Values

|Property|Value|
|---|---|
|type|fx|
|type|acquiring|

<h2 id="tocS_Fees">Fees</h2>
<!-- backwards compatibility -->
<a id="schemafees"></a>
<a id="schema_Fees"></a>
<a id="tocSfees"></a>
<a id="tocsfees"></a>

```json
[
  {
    "type": "fx",
    "amount": 0,
    "currency": "string"
  }
]
```

The details of the order fee.

<h2 id="tocS_Payer">Payer</h2>
<!-- backwards compatibility -->
<a id="schemapayer"></a>
<a id="schema_Payer"></a>
<a id="tocSpayer"></a>
<a id="tocspayer"></a>

```json
{
  "email": "user@example.com",
  "phone": "string"
}
```

The person who made the payment. This object is present when an email or phone number is provided during the payment flow.

Capturing payer details lets you identify exactly who authorised the charge, reach the right person for receipts or refund queries, and support compliance or fraud-review workflows where the paying identity matters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|[Email](#schemaemail)|false|none|The email of the person who made the payment.|
|phone|[Phone](#schemaphone)|false|none|The phone number of the payer in [E.164 format](https://en.wikipedia.org/wiki/E.164).|

<h2 id="tocS_Payment-v2">Payment-v2</h2>
<!-- backwards compatibility -->
<a id="schemapayment-v2"></a>
<a id="schema_Payment-v2"></a>
<a id="tocSpayment-v2"></a>
<a id="tocspayment-v2"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "state": "pending",
  "decline_reason": "3ds_challenge_abandoned",
  "bank_message": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "token": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": 600,
  "authorised_amount": 600,
  "currency": "str",
  "settled_amount": 0,
  "settled_currency": "string",
  "payment_method": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "type": "apple_pay",
    "card_brand": "visa",
    "funding": "credit",
    "commercial": true,
    "card_country_code": "string",
    "card_bin": "string",
    "card_last_four": "stri",
    "card_expiry": "string",
    "cardholder_name": "string",
    "checks": {
      "three_ds": {
        "eci": "string",
        "state": "verified",
        "version": 0
      },
      "cvv_verification": "match",
      "address": "match",
      "postcode": "match",
      "cardholder": "match"
    },
    "authorisation_code": "T483XF",
    "arn": "74839572049583726403928",
    "capture_deadline": "1970-01-01T00:00:00Z",
    "terminal_hardware_id": "string",
    "fingerprint": "1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=",
    "network_transaction_id": "string"
  },
  "authentication_challenge": {
    "type": "three_ds",
    "acs_url": "http://example.com"
  },
  "billing_address": {
    "street_line_1": "string",
    "street_line_2": "string",
    "region": "string",
    "city": "string",
    "country_code": "st",
    "postcode": "string"
  },
  "risk_level": "low",
  "fees": [
    {
      "type": "fx",
      "amount": 0,
      "currency": "string"
    }
  ],
  "payer": {
    "email": "user@example.com",
    "phone": "string"
  }
}
```

Represents a payment for an order.

For pre-authorised payments, the `authorised_amount` field tracks the currently authorised amount, which may differ from `amount` during incremental authorisation processing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Payment-Id](#schemapayment-id)|true|none|The ID of the payment.|
|state|[Payment-State-v2](#schemapayment-state-v2)|true|none|The status of the payment.|
|decline_reason|[Decline-Reason-v2](#schemadecline-reason-v2)|false|none|The reason for a `failed` or `declined` payment.<br><br>A failed or declined payment can result from multiple reasons. To learn more, check our [failure reasons](https://developer.revolut.com/docs/guides/merchant/reference/error-codes/decline-reasons).|
|bank_message|[Bank-Message](#schemabank-message)|false|none|The reason for a `failed` or `declined` payment, sent by the financial institution processing the payment.|
|created_at|[Payment-Created](#schemapayment-created)|true|none|The date and time the payment was created.|
|updated_at|[Payment-Updated](#schemapayment-updated)|true|none|The date and time the payment was last updated.|
|token|[Payment-Token](#schemapayment-token)|false|none|Temporary token of the payment used to fetch the reward offer during checkout and link user registrations to the given offers. <br><br>The token is only valid for a limited time.|
|amount|[Payment-Amount](#schemapayment-amount)|true|none|The payment amount in minor units (e.g., cents). The value of this field depends on the payment type and state.<br><br>\| Payment type \| State \| Amount value \|<br>\|--------------\|-------\|--------------\|<br>\| Standard payment \| Any \| Total payment amount \|<br>\| Pre-authorised payment \| `authorisation_started` \| New amount being authorised (during increment processing) \|<br>\| Pre-authorised payment \| `authorised` \| Currently authorised amount (equals `authorised_amount`) \|<br><br>:::info<br>For pre-authorised payments, see the `authorised_amount` field for tracking the currently authorised amount separately.<br>:::|
|authorised_amount|[Payment-Authorised-Amount](#schemapayment-authorised-amount)|false|none|The currently authorised amount for this payment (in minor units).<br><br>For pre-authorised payments with incremental authorization:<br>- Initially equals the `amount` field<br>- Remains unchanged during increment processing<br>- Updates to new amount upon successful increment<br>- Remains at original amount if increment is declined<br><br>For standard payments, this field may not be present or will equal the `amount` field.|
|currency|[Currency](#schemacurrency)|false|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|settled_amount|[Payment-Settled-Amount](#schemapayment-settled-amount)|false|none|The amount of the settled payment (minor currency unit). For example, `7034` stands for €70.34.|
|settled_currency|[Payment-Settled-Currency](#schemapayment-settled-currency)|false|none|The currency of the settled payment. [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|payment_method|[Payment-Method-v2](#schemapayment-method-v2)|false|none|The details of the payment method used to make the payment.|
|authentication_challenge|[Authentication-Challenge](#schemaauthentication-challenge)|false|none|Details about the authentication challenge that should be performed to complete the authentication process. For more information about Revolut's 3DS solution, see: [3D Secure overview](https://developer.revolut.com/docs/guides/merchant/reference/3d-secure).<br><br>Only returned if the payment's state is `authentication_challenge`.|
|billing_address|[Address-v2](#schemaaddress-v2)|false|none|Object containing address details.|
|risk_level|[Payment-Risk-Level](#schemapayment-risk-level)|false|none|The risk level of the card.<br><br>If the risk level is `high`, the payment might be declined.|
|fees|[Fees](#schemafees)|false|none|The details of the order fee.|
|payer|[Payer](#schemapayer)|false|none|The person who made the payment. This object is present when an email or phone number is provided during the payment flow.<br><br>Capturing payer details lets you identify exactly who authorised the charge, reach the right person for receipts or refund queries, and support compliance or fraud-review workflows where the paying identity matters.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|pending|
|state|authentication_challenge|
|state|authentication_verified|
|state|authorisation_started|
|state|authorisation_passed|
|state|authorised|
|state|capture_started|
|state|captured|
|state|refund_validated|
|state|refund_started|
|state|cancellation_started|
|state|declining|
|state|completing|
|state|cancelling|
|state|failing|
|state|completed|
|state|declined|
|state|soft_declined|
|state|cancelled|
|state|failed|
|decline_reason|3ds_challenge_abandoned|
|decline_reason|3ds_challenge_failed|
|decline_reason|3ds_challenge_failed_manually|
|decline_reason|authentication_required|
|decline_reason|card_not_enrolled_to_three_ds|
|decline_reason|cardholder_name_missing|
|decline_reason|currency_not_supported|
|decline_reason|customer_challenge_abandoned|
|decline_reason|customer_challenge_failed|
|decline_reason|customer_date_of_birth_mismatch|
|decline_reason|customer_name_mismatch|
|decline_reason|customer_verification_failed|
|decline_reason|customer_wallet_limits_exceeded|
|decline_reason|do_not_honour|
|decline_reason|expired_card|
|decline_reason|high_risk|
|decline_reason|insufficient_funds|
|decline_reason|insufficient_refundable_amount|
|decline_reason|invalid_account|
|decline_reason|invalid_address|
|decline_reason|invalid_amount|
|decline_reason|invalid_card|
|decline_reason|invalid_country|
|decline_reason|invalid_cvv|
|decline_reason|invalid_email|
|decline_reason|invalid_expiry|
|decline_reason|invalid_merchant|
|decline_reason|invalid_phone|
|decline_reason|invalid_pin|
|decline_reason|invalid_transaction|
|decline_reason|issuer_decline|
|decline_reason|issuer_not_available|
|decline_reason|law_violation|
|decline_reason|lost_card|
|decline_reason|new_card_not_unblocked|
|decline_reason|no_common_supported_three_ds_version|
|decline_reason|no_such_issuer|
|decline_reason|payment_attempt_blocked|
|decline_reason|pick_up_card|
|decline_reason|pin_required|
|decline_reason|pin_try_exceeded|
|decline_reason|rejected_by_customer|
|decline_reason|restricted_card|
|decline_reason|security_violation|
|decline_reason|stolen_card|
|decline_reason|suspected_fraud|
|decline_reason|technical_error|
|decline_reason|transaction_not_allowed|
|decline_reason|transaction_not_allowed_for_cardholder|
|decline_reason|unknown|
|decline_reason|unknown_card|
|decline_reason|withdrawal_frequency_exceeded|
|decline_reason|withdrawal_limit_exceeded|
|risk_level|low|
|risk_level|high|

<h2 id="tocS_Increment-Reference">Increment-Reference</h2>
<!-- backwards compatibility -->
<a id="schemaincrement-reference"></a>
<a id="schema_Increment-Reference"></a>
<a id="tocSincrement-reference"></a>
<a id="tocsincrement-reference"></a>

```json
"CHG-67890"
```

External reference for this incremental authorisation.

:::tip
Use your internal charge or invoice ID. This reference is returned in webhooks for easy matching to your system.
:::

<h2 id="tocS_Incremental-Authorisation">Incremental-Authorisation</h2>
<!-- backwards compatibility -->
<a id="schemaincremental-authorisation"></a>
<a id="schema_Incremental-Authorisation"></a>
<a id="tocSincremental-authorisation"></a>
<a id="tocsincremental-authorisation"></a>

```json
{
  "new_amount": 600,
  "old_amount": 500,
  "state": "pending",
  "reference": "CHG-67890",
  "line_items": [
    {
      "name": "string",
      "type": "physical",
      "quantity": {
        "value": 0,
        "unit": "string"
      },
      "unit_price_amount": 0,
      "total_amount": 0,
      "external_id": "string",
      "discounts": [
        {
          "name": "string",
          "amount": 0
        }
      ],
      "taxes": [
        {
          "name": "string",
          "amount": 0
        }
      ],
      "image_urls": [
        "http://example.com"
      ],
      "description": "string",
      "url": "http://example.com"
    }
  ],
  "reason": "insufficient_funds"
}
```

Represents a single incremental authorisation attempt on an order.

The `incremental_authorisations` array tracks all increment attempts (successful and failed) in chronological order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new_amount|integer(int64)|false|none|The new total amount requested in this increment (in minor units).|
|old_amount|integer(int64)|false|none|The previously authorised amount before this increment (in minor units).|
|state|string|false|none|The state of this incremental authorization attempt.<br><br>\| State \| Description \|<br>\|-------\|-------------\|<br>\| `pending` \| Increment registered in system, not yet submitted to card network \|<br>\| `processing` \| Increment is being processed by card network \|<br>\| `authorised` \| Increment was successfully authorised \|<br>\| `declined` \| Increment was declined by card issuer \|<br>\| `failed` \| Increment failed due to technical error (not an issuer decline) \||
|reference|[Increment-Reference](#schemaincrement-reference)|false|none|External reference for this incremental authorisation.<br><br>:::tip<br>Use your internal charge or invoice ID. This reference is returned in webhooks for easy matching to your system.<br>:::|
|line_items|[[Line-Item](#schemaline-item)]|false|none|Line items associated with this increment (if provided).<br><br>:::note<br>If the increment is successful, these line items will override the existing order line items.<br>:::|
|reason|string|false|none|Reason why increment was declined or failed.<br><br>:::note<br>Only present when `state` is `declined` or `failed`.<br>:::|

#### Enumerated Values

|Property|Value|
|---|---|
|state|pending|
|state|processing|
|state|authorised|
|state|declined|
|state|failed|

<h2 id="tocS_Incremental-Authorisations">Incremental-Authorisations</h2>
<!-- backwards compatibility -->
<a id="schemaincremental-authorisations"></a>
<a id="schema_Incremental-Authorisations"></a>
<a id="tocSincremental-authorisations"></a>
<a id="tocsincremental-authorisations"></a>

```json
[
  {
    "new_amount": 600,
    "old_amount": 500,
    "state": "pending",
    "reference": "CHG-67890",
    "line_items": [
      {
        "name": "string",
        "type": "physical",
        "quantity": {
          "value": 0,
          "unit": "string"
        },
        "unit_price_amount": 0,
        "total_amount": 0,
        "external_id": "string",
        "discounts": [
          {
            "name": "string",
            "amount": 0
          }
        ],
        "taxes": [
          {
            "name": "string",
            "amount": 0
          }
        ],
        "image_urls": [
          "http://example.com"
        ],
        "description": "string",
        "url": "http://example.com"
      }
    ],
    "reason": "insufficient_funds"
  }
]
```

History of incremental authorisation attempts for this order.

Only present for orders with `authorisation_type: pre_authorisation`.

Contains all increment attempts in chronological order.

<h2 id="tocS_Checkout-Url">Checkout-Url</h2>
<!-- backwards compatibility -->
<a id="schemacheckout-url"></a>
<a id="schema_Checkout-Url"></a>
<a id="tocScheckout-url"></a>
<a id="tocscheckout-url"></a>

```json
"http://example.com"
```

Link to a checkout page hosted by Revolut.

<h2 id="tocS_Order-v4">Order-v4</h2>
<!-- backwards compatibility -->
<a id="schemaorder-v4"></a>
<a id="schema_Order-v4"></a>
<a id="tocSorder-v4"></a>
<a id="tocsorder-v4"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "token": "string",
  "type": "payment",
  "state": "authorised",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "description": "string",
  "capture_mode": "automatic",
  "authorisation_type": "final",
  "cancel_authorised_after": "string",
  "amount": 0,
  "outstanding_amount": 0,
  "refunded_amount": 0,
  "currency": "str",
  "settlement_currency": "string",
  "customer": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "full_name": "string",
    "phone": "string",
    "email": "user@example.com",
    "date_of_birth": "1970-01-01"
  },
  "payments": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "state": "pending",
      "decline_reason": "3ds_challenge_abandoned",
      "bank_message": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "token": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 600,
      "authorised_amount": 600,
      "currency": "str",
      "settled_amount": 0,
      "settled_currency": "string",
      "payment_method": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "type": "apple_pay",
        "card_brand": "visa",
        "funding": "credit",
        "commercial": true,
        "card_country_code": "string",
        "card_bin": "string",
        "card_last_four": "stri",
        "card_expiry": "string",
        "cardholder_name": "string",
        "checks": {
          "three_ds": {
            "eci": "string",
            "state": "verified",
            "version": 0
          },
          "cvv_verification": "match",
          "address": "match",
          "postcode": "match",
          "cardholder": "match"
        },
        "authorisation_code": "T483XF",
        "arn": "74839572049583726403928",
        "capture_deadline": "1970-01-01T00:00:00Z",
        "terminal_hardware_id": "string",
        "fingerprint": "1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=",
        "network_transaction_id": "string"
      },
      "authentication_challenge": {
        "type": "three_ds",
        "acs_url": "http://example.com"
      },
      "billing_address": {
        "street_line_1": "string",
        "street_line_2": "string",
        "region": "string",
        "city": "string",
        "country_code": "st",
        "postcode": "string"
      },
      "risk_level": "low",
      "fees": [
        {
          "type": "fx",
          "amount": 0,
          "currency": "string"
        }
      ],
      "payer": {
        "email": "user@example.com",
        "phone": "string"
      }
    }
  ],
  "incremental_authorisations": [
    {
      "new_amount": 600,
      "old_amount": 500,
      "state": "pending",
      "reference": "CHG-67890",
      "line_items": [
        {
          "name": "string",
          "type": "physical",
          "quantity": {
            "value": 0,
            "unit": "string"
          },
          "unit_price_amount": 0,
          "total_amount": 0,
          "external_id": "string",
          "discounts": [
            {
              "name": "string",
              "amount": 0
            }
          ],
          "taxes": [
            {
              "name": "string",
              "amount": 0
            }
          ],
          "image_urls": [
            "http://example.com"
          ],
          "description": "string",
          "url": "http://example.com"
        }
      ],
      "reason": "insufficient_funds"
    }
  ],
  "location_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "metadata": {
    "order_reference": "ORD-12345",
    "customer_segment": "premium",
    "internal_note": "VIP customer - priority handling"
  },
  "industry_data": {
    "type": "airline",
    "booking_id": "string",
    "fulfillment_date": "1970-01-01T00:00:00Z",
    "tickets_purchase": true,
    "ticket_type": "fixed",
    "crs_code": "stri",
    "ticket_change_indicator": "new",
    "refundability": "refundable",
    "passengers": [
      {
        "first_name": "string",
        "last_name": "string"
      }
    ],
    "journey_legs": [
      {
        "sequence": 0,
        "departure_airport_code": "string",
        "arrival_airport_code": "string",
        "flight_number": "string",
        "fare_base_code": "string",
        "travel_date": "1970-01-01T00:00:00Z",
        "airline_name": "string",
        "airline_code": "string",
        "pnr": "string"
      }
    ],
    "booking_url": "http://example.com"
  },
  "merchant_order_data": {
    "url": "http://example.com",
    "reference": "string"
  },
  "upcoming_payment_data": {
    "date": "1970-01-01T00:00:00Z",
    "payment_method_id": "string"
  },
  "checkout_url": "http://example.com",
  "redirect_url": "http://example.com",
  "shipping": {
    "address": {
      "street_line_1": "string",
      "street_line_2": "string",
      "region": "string",
      "city": "string",
      "country_code": "st",
      "postcode": "string"
    },
    "contact": {
      "name": "string",
      "email": "user@example.com",
      "phone": "string"
    },
    "shipments": [
      {
        "shipping_company_name": "string",
        "tracking_number": "string",
        "estimated_delivery_date": "1970-01-01T00:00:00Z",
        "tracking_url": "http://example.com"
      }
    ]
  },
  "enforce_challenge": "automatic",
  "line_items": [
    {
      "name": "string",
      "type": "physical",
      "quantity": {
        "value": 0,
        "unit": "string"
      },
      "unit_price_amount": 0,
      "total_amount": 0,
      "external_id": "string",
      "discounts": [
        {
          "name": "string",
          "amount": 0
        }
      ],
      "taxes": [
        {
          "name": "string",
          "amount": 0
        }
      ],
      "image_urls": [
        "http://example.com"
      ],
      "description": "string",
      "url": "http://example.com"
    }
  ],
  "statement_descriptor_suffix": "string",
  "related_order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "subscription_data": {
    "subscription_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "active_cycle_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "settled_cycle_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "billing_reason": "cycle_billing"
  }
}
```

To process the order from a credit or debit card, you create an `Order` object. You can then retrieve, capture, cancel, refund, or pay an order using its unique `id`. Alternatively, you can use its unique `token` to process a card payment with the Revolut Checkout Widget.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Order-Id](#schemaorder-id)|false|none|Permanent order ID used to retrieve, capture, cancel, or refund an order after authorization.|
|token|[Order-Token](#schemaorder-token)|false|none|Temporary ID for the order, which expires when the payment is authorised.<br><br>The order `token` is used for [token-based initialisation](https://developer.revolut.com/docs/sdks/merchant-web-sdk/initialisation/token-based), and is returned by the `createOrder` callback in the following payment methods:<br><br>- [Embedded Checkout](https://developer.revolut.com/docs/sdks/merchant-web-sdk/payment-methods/embedded-checkout#embedded-checkout-options-interface)<br>- [Revolut Pay](https://developer.revolut.com/docs/sdks/merchant-web-sdk/payment-methods/revolut-pay#widget-payments-revolut-pay-options)<br>- [Apple Pay and Google Pay](https://developer.revolut.com/docs/sdks/merchant-web-sdk/payment-methods/apple-pay-google-pay#payment-request-options-interface)<br>- [Pay by Bank](https://developer.revolut.com/docs/sdks/merchant-web-sdk/payment-methods/pay-by-bank#pay-by-bank-options-interface)|
|type|[Order-Type-v2](#schemaorder-type-v2)|false|none|The type of the order.|
|state|[Order-State](#schemaorder-state)|false|none|The state of the order in its lifecycle.<br><br>\| State \| Description \|<br>\|-------\|-------------\|<br>\| `pending` \| Order created, awaiting payment \|<br>\| `processing` \| Payment is being processed \|<br>\| `authorised` \| Payment authorised but not yet captured (for manual capture) \|<br>\| `completed` \| Payment successfully captured and settled \|<br>\| `cancelled` \| Order was cancelled \|<br>\| `failed` \| Payment failed \|<br><br>:::info<br>For more information, see: [Order and payment lifecycle](https://developer.revolut.com/docs/guides/merchant/reference/order-lifecycle)<br>:::|
|created_at|string(date-time)|false|none|The date and time the order was created.|
|updated_at|string(date-time)|false|none|The date and time the order was last updated.|
|description|[Order-Description](#schemaorder-description)|false|none|The description of the order.|
|capture_mode|[Capture-Mode-v2](#schemacapture-mode-v2)|false|none|The capture mode of the order. `automatic` is used by default.<br><br>\| Parameter value \| Description \|<br>\| --------------- \| ----------- \|<br>\| `automatic` \| The order is captured automatically after payment authorisation. \|<br>\| `manual` \| The order is not captured automatically. You must manually capture the order later. \|<br><br>:::info<br>For more information, see [Capture an order](https://developer.revolut.com/docs/api/merchant#capture-order).<br>:::|
|authorisation_type|[Authorisation-Type](#schemaauthorisation-type)|false|none|The type of authorisation for the order. Used with manual capture mode. If omitted, `final` is used by default.<br><br>### Pre-authorisation<br><br>Pre-authorisation allows you to reserve funds on a customer's card without immediately capturing them. This is useful for scenarios like:<br><br>- Hotel bookings where the final amount may vary<br>- Car rentals where additional charges may apply<br>- Deposits that need to be held temporarily<br><br>\| Parameter value \| Description \|<br>\| --------------- \| ----------- \|<br>\| `final` \| Standard authorisation for immediate or near-immediate capture. \|<br>\| `pre_authorisation` \| Reserve funds for later capture, used with manual capture mode. \|<br><br>:::note<br>Pre-authorisation must be used with `capture_mode: manual`. For more information, see [Capture an order](https://developer.revolut.com/docs/api/merchant#capture-order).<br>:::|
|cancel_authorised_after|[Cancel-Authorised-After](#schemacancel-authorised-after)|false|none|Automatic cancellation period for uncaptured orders, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. <br><br>After this period, the authorised payment is automatically cancelled and the order is cancelled. Maximum: 7 days = `P7D`.<br><br>:::note<br>The following limitations apply:<br>  - Cannot be a negative value.<br>  - Cannot be updated if the new value is less than or equal to the elapsed time since authorisation. <br><br>    **Failing scenario:**<br>      - Original value: 7 days<br>      - Time since authorisation: 3 days<br>      - Update value: 2 days<br>      <br>    In this scenario, an error is returned.<br>    <br>    **Successful scenario:**<br>      - Original value: 7 days<br>      - Time since authorisation: 3 days<br>      - Update value: 4 days<br><br>    In this scenario, the parameter can be updated.<br><br>  - Cannot be updated if cancellation is ≤ 30 minutes away.<br><br>    **Failing scenario:**<br>      - Original value: 12 hours<br>      - Time since authorisation: 11 hours 40 minutes<br>                        <br>    In this scenario, an error is returned.<br>    <br>    **Successful scenario:** <br>      - Original value: 12 hours<br>      - Time since authorisation: 11 hours 20 minutes<br><br>    In this scenario, the parameter can be updated.<br>:::|
|amount|[Order-Amount-v2](#schemaorder-amount-v2)|false|none|The order total expressed in minor currency units, according to the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217). For example, `7034` in `EUR` corresponds to €70.34.<br><br>:::info<br>- Conversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).<br>- If `line_items` are provided, the order `amount` must equal the sum of all line items' `total_amount`.<br>- For card payments with a non-zero amount, the order `amount` must be at least **$0.005** (or equivalent in different currencies, calculated using Revolut's exchange rate on the payment date). Otherwise, card payments can't be performed.<br>:::|
|outstanding_amount|[Outstanding-Amount](#schemaoutstanding-amount)|false|none|The amount not yet paid for a given order (in minor currency units). For example, `7034` represents €70.34. <br><br>The value in this field may differ from `amount` if there are partial payments associated with the order.|
|refunded_amount|[Refunded-Amount](#schemarefunded-amount)|false|none|The amount that was refunded from the order (in minor currency units). For example, `7034` represents €70.34. <br><br>This applies to orders that have been refunded (i.e., orders of type `payment` that have a related `refund` order).|
|currency|[Currency](#schemacurrency)|false|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|settlement_currency|[Settlement-Currency](#schemasettlement-currency)|false|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case. <br><br>If `settlement_currency` is different from the value of `currency`, the money will be exchanged when the amount is settled to your merchant account. In case of a refund or chargeback, the money will be exchanged to the order's initial `currency`.<br><br>If `settlement_currency` is not specified, this value is taken from `currency`.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|customer|[Customer-v2](#schemacustomer-v2)|false|none|Object containing information about a customer.<br><br>If you have it, we strongly advise providing at least either `id`, `phone`, or `email`.<br><br>Using the [Customers operations](https://developer.revolut.com/docs/api/merchant#tag-customers), you can manage customer instances.<br><br>The following behaviours apply to different use cases:<br><br>  \| Use case \| API behavior \|<br>  \| -------- \| ------------ \|<br>  \| Existing customer \| If `id` was provided, we ignore other customer details and associate the customer with the order.<br/><br/>If either `email`, `phone`, or `full_name` was provided (without an existing customer's `id`), we always create a new customer, irrespective of another, existing customer object having the same details. \|<br>  \| New customer \| If either `email`, `phone`, or `full_name` was provided, we create a new customer, irrespective of another customer object having the same details. <br/><br/>If `id` of a non-existent customer was provided, we return a `404` error, irrespective of other details provided. \|<br><br>:::note<br>To avoid unintentional duplication of customer records, search for an existing customer by email or phone using the [List customers](https://developer.revolut.com/docs/api/merchant#retrieve-customer-list) endpoint first, then provide `customer.id` in the order.<br>:::|
|payments|[[Payment-v2](#schemapayment-v2)]|false|none|The details of all the payments that have been made towards this order (successful or unsuccessful).|
|incremental_authorisations|[Incremental-Authorisations](#schemaincremental-authorisations)|false|none|History of incremental authorisation attempts for this order.<br><br>Only present for orders with `authorisation_type: pre_authorisation`.<br><br>Contains all increment attempts in chronological order.|
|location_id|[Location-Id](#schemalocation-id)|false|none|Unique ID representing the location where merchants sells products.<br><br>:::info<br>For more information, see: [Locations](https://developer.revolut.com/docs/api/merchant#tag-locations).<br>:::        |
|metadata|[Metadata](#schemametadata)|false|none|Additional information to track your orders in your system, by providing custom metadata using `"<key>" : "<value>"` pairs.<br><br>:::warning<br>**Restrictions:**<br><br>- Both keys and values must be `string`s<br>- Values cannot be `null`.<br>- Max number of key-value pairs: `50`<br>- Max length of values: `500` characters<br>- Format of keys: Must start with a letter and contain only letters, digits, and underscores. Max 40 characters. Pattern: `^[a-zA-Z][a-zA-Z\\d_]{0,39}$`<br>:::|
|industry_data|[Industry-Data](#schemaindustry-data)|false|none|Object containing industry-specific information associated with the order.<br><br>:::info<br>In the following cases, industry-specific info is required. Omitting this information may trigger additional scrutiny and risk mitigation actions by the Revolut risk team.<br><br>  \| Transaction type \| Required for \| <br>  \| ---------------- \| ----------- \|<br>  \| `airline`        \| Airlines and Online Travel Agencies (OTAs). \|<br>  \| `crypto`         \| Crypto merchants. \|<br>  \| `marketplace`    \| Marketplace merchants. \|<br>  \| `event`          \| Event ticket sellers. \|<br>  \| `lodging`        \| Lodging providers and OTAs. \|<br>:::|
|merchant_order_data|[Merchant-Order-Data](#schemamerchant-order-data)|false|none|Object for providing additional information stored in the merchant's order management system. |
|upcoming_payment_data|[Upcoming-Payment](#schemaupcoming-payment)|false|none|Object containing information about upcoming payments associated with the order.|
|checkout_url|[Checkout-Url](#schemacheckout-url)|false|none|Link to a checkout page hosted by Revolut.|
|redirect_url|[Redirect-Url](#schemaredirect-url)|false|none|The URL your customer will be redirected to after completing a payment flow.<br><br>- **Hosted Checkout Page** (`checkout_url`): This is the post-success URL - the customer is redirected only after a successful payment.<br>- **Embedded Revolut Pay** (Revolut Checkout widget): This URL is used for all redirect outcomes - success, failure, and cancellation.<br><br>:::warning [Restrictions]<br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be either `http` or `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `2000`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::<br><br>:::note [Revolut Checkout]<br>- Revolut Pay will not appear in the widget on mobile devices unless redirect targets are configured - either via this `redirect_url` parameter or the SDK-level `revolutPayOptions.mobileRedirectUrls` option.<br>- If `redirect_url` is set on the order, it takes precedence over `revolutPayOptions.mobileRedirectUrls` and is used for all redirect outcomes (success, failure, cancel).<br>:::<br><br>:::info<br>For more information, see:<br>- [Hosted Checkout Page: Custom redirection](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/hosted-checkout-page/api#custom-post-payment-redirection-optional)<br>- [Revolut Checkout: Configure mobile redirects](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/revolut-checkout/web#35-configure-revolut-pay-mobile-redirects)<br>:::|
|shipping|[Shipping](#schemashipping)|false|none|Details about the shipping related to the order, including address, contact information, and individual shipments.<br><br>:::info<br>Required for merchants shipping physical goods. Omitting this information may trigger additional scrutiny and risk mitigation actions by Revolut.<br>:::|
|enforce_challenge|[Enforce-Challenge-v2](#schemaenforce-challenge-v2)|false|none|The enforce challenge mode. `automatic` is used by default.<br><br>\| Parameter value \| Description \|<br>\| --------------- \| ----------- \|<br>\| `automatic` \| The payments created for an order will have challenge requirement calculated by our fraud mechanisms. Not all payments will trigger a 3DS challenge. \|<br>\| `forced` \| The payments created for an order will always require a 3DS challenge. Currently only supported for card payments. \||
|line_items|[Line-Items](#schemaline-items)|false|none|An array of line items included in the order. Each line item represents an individual product or service, along with its quantity, price, taxes, and discounts.<br><br>:::info<br>Required for merchants collecting payment for one or multiple products/services in one transaction. Omitting this information may trigger additional scrutiny and risk mitigation actions by Revolut.<br>:::|
|statement_descriptor_suffix|[Statement-Descriptor-Suffix](#schemastatement-descriptor-suffix)|false|none|You can set a dynamic statement descriptor for your orders by providing a custom suffix. <br><br>A statement descriptor is the text shown on cardholders' bank or card statements, helping them recognise a transaction or merchant. This field can be used to send extra information with the statement descriptor for card transactions.<br><br>The complete descriptor is built using the following format: `{base}*{suffix}`, where:<br>  <br>  - **`{base}`** is the existing descriptor configured in the Revolut Business dashboard (**Settings > Business account > Merchant profile > Statement descriptor**).  <br>  - **`{suffix}`** is defined by the `statement_descriptor_suffix` field.<br><br>:::note<br>- If the combined descriptor's length (base + suffix) exceeds the character limits of card scheme providers, the final value will be truncated. For example if the limit is 22 characters, the base descriptor is `"base"` and the suffix is `"testdescriptorsuffix"`, the final descriptor becomes `"base*testdescriptorsuf"`.<br>- The final statement descriptor shown on a cardholder's statement may vary by issuing bank, as some banks apply their own custom formatting or truncation rules.<br>:::|
|related_order_id|[Related-Order-Id](#schemarelated-order-id)|false|none|The unique ID of the original order that was refunded and this refund is associated with. You can use this ID to get more information about the related order using the [Retrieve an order](https://developer.revolut.com/docs/api/merchant#retrieve-order) operation.<br><br>:::note<br>This field is only returned for orders with `type: refund`.<br>:::|
|subscription_data|[Subscription-Data](#schemasubscription-data)|false|none|Subscription details linked to the order. Use this object to match an order with its underlying subscription and understand the billing context in which the order was created.<br><br>Only present on orders created by a subscription.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|payment|
|type|payment_request|
|type|refund|
|type|chargeback|
|type|chargeback_reversal|
|type|credit_reimbursement|
|state|pending|
|state|processing|
|state|authorised|
|state|completed|
|state|cancelled|
|state|failed|
|capture_mode|automatic|
|capture_mode|manual|
|authorisation_type|final|
|authorisation_type|pre_authorisation|
|enforce_challenge|automatic|
|enforce_challenge|forced|

<h2 id="tocS_Order-Update-v4">Order-Update-v4</h2>
<!-- backwards compatibility -->
<a id="schemaorder-update-v4"></a>
<a id="schema_Order-Update-v4"></a>
<a id="tocSorder-update-v4"></a>
<a id="tocsorder-update-v4"></a>

```json
{
  "amount": 0,
  "currency": "str",
  "settlement_currency": "string",
  "description": "string",
  "customer": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "full_name": "string",
    "phone": "string",
    "email": "user@example.com",
    "date_of_birth": "1970-01-01"
  },
  "shipping": {
    "address": {
      "street_line_1": "string",
      "street_line_2": "string",
      "region": "string",
      "city": "string",
      "country_code": "st",
      "postcode": "string"
    },
    "contact": {
      "name": "string",
      "email": "user@example.com",
      "phone": "string"
    },
    "shipments": [
      {
        "shipping_company_name": "string",
        "tracking_number": "string",
        "estimated_delivery_date": "1970-01-01T00:00:00Z",
        "tracking_url": "http://example.com"
      }
    ]
  },
  "enforce_challenge": "automatic",
  "line_items": [
    {
      "name": "string",
      "type": "physical",
      "quantity": {
        "value": 0,
        "unit": "string"
      },
      "unit_price_amount": 0,
      "total_amount": 0,
      "external_id": "string",
      "discounts": [
        {
          "name": "string",
          "amount": 0
        }
      ],
      "taxes": [
        {
          "name": "string",
          "amount": 0
        }
      ],
      "image_urls": [
        "http://example.com"
      ],
      "description": "string",
      "url": "http://example.com"
    }
  ],
  "capture_mode": "automatic",
  "cancel_authorised_after": "string",
  "metadata": {
    "order_reference": "ORD-12345",
    "customer_segment": "premium",
    "internal_note": "VIP customer - priority handling"
  },
  "industry_data": {
    "type": "airline",
    "booking_id": "string",
    "fulfillment_date": "1970-01-01T00:00:00Z",
    "tickets_purchase": true,
    "ticket_type": "fixed",
    "crs_code": "stri",
    "ticket_change_indicator": "new",
    "refundability": "refundable",
    "passengers": [
      {
        "first_name": "string",
        "last_name": "string"
      }
    ],
    "journey_legs": [
      {
        "sequence": 0,
        "departure_airport_code": "string",
        "arrival_airport_code": "string",
        "flight_number": "string",
        "fare_base_code": "string",
        "travel_date": "1970-01-01T00:00:00Z",
        "airline_name": "string",
        "airline_code": "string",
        "pnr": "string"
      }
    ],
    "booking_url": "http://example.com"
  },
  "merchant_order_data": {
    "url": "http://example.com",
    "reference": "string"
  },
  "upcoming_payment_data": {
    "date": "1970-01-01T00:00:00Z",
    "payment_method_id": "string"
  },
  "redirect_url": "http://example.com",
  "statement_descriptor_suffix": "string"
}
```

Object schema containing information about order update request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Order-Amount-v2](#schemaorder-amount-v2)|false|none|The order total expressed in minor currency units, according to the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217). For example, `7034` in `EUR` corresponds to €70.34.<br><br>:::info<br>- Conversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).<br>- If `line_items` are provided, the order `amount` must equal the sum of all line items' `total_amount`.<br>- For card payments with a non-zero amount, the order `amount` must be at least **$0.005** (or equivalent in different currencies, calculated using Revolut's exchange rate on the payment date). Otherwise, card payments can't be performed.<br>:::|
|currency|[Currency](#schemacurrency)|false|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|settlement_currency|[Settlement-Currency](#schemasettlement-currency)|false|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case. <br><br>If `settlement_currency` is different from the value of `currency`, the money will be exchanged when the amount is settled to your merchant account. In case of a refund or chargeback, the money will be exchanged to the order's initial `currency`.<br><br>If `settlement_currency` is not specified, this value is taken from `currency`.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|description|[Order-Description](#schemaorder-description)|false|none|The description of the order.|
|customer|[Customer-v2](#schemacustomer-v2)|false|none|Object containing information about a customer.<br><br>If you have it, we strongly advise providing at least either `id`, `phone`, or `email`.<br><br>Using the [Customers operations](https://developer.revolut.com/docs/api/merchant#tag-customers), you can manage customer instances.<br><br>The following behaviours apply to different use cases:<br><br>  \| Use case \| API behavior \|<br>  \| -------- \| ------------ \|<br>  \| Existing customer \| If `id` was provided, we ignore other customer details and associate the customer with the order.<br/><br/>If either `email`, `phone`, or `full_name` was provided (without an existing customer's `id`), we always create a new customer, irrespective of another, existing customer object having the same details. \|<br>  \| New customer \| If either `email`, `phone`, or `full_name` was provided, we create a new customer, irrespective of another customer object having the same details. <br/><br/>If `id` of a non-existent customer was provided, we return a `404` error, irrespective of other details provided. \|<br><br>:::note<br>To avoid unintentional duplication of customer records, search for an existing customer by email or phone using the [List customers](https://developer.revolut.com/docs/api/merchant#retrieve-customer-list) endpoint first, then provide `customer.id` in the order.<br>:::|
|shipping|[Shipping](#schemashipping)|false|none|Details about the shipping related to the order, including address, contact information, and individual shipments.<br><br>:::info<br>Required for merchants shipping physical goods. Omitting this information may trigger additional scrutiny and risk mitigation actions by Revolut.<br>:::|
|enforce_challenge|[Enforce-Challenge-v2](#schemaenforce-challenge-v2)|false|none|The enforce challenge mode. `automatic` is used by default.<br><br>\| Parameter value \| Description \|<br>\| --------------- \| ----------- \|<br>\| `automatic` \| The payments created for an order will have challenge requirement calculated by our fraud mechanisms. Not all payments will trigger a 3DS challenge. \|<br>\| `forced` \| The payments created for an order will always require a 3DS challenge. Currently only supported for card payments. \||
|line_items|[Line-Items](#schemaline-items)|false|none|An array of line items included in the order. Each line item represents an individual product or service, along with its quantity, price, taxes, and discounts.<br><br>:::info<br>Required for merchants collecting payment for one or multiple products/services in one transaction. Omitting this information may trigger additional scrutiny and risk mitigation actions by Revolut.<br>:::|
|capture_mode|[Capture-Mode-v2](#schemacapture-mode-v2)|false|none|The capture mode of the order. `automatic` is used by default.<br><br>\| Parameter value \| Description \|<br>\| --------------- \| ----------- \|<br>\| `automatic` \| The order is captured automatically after payment authorisation. \|<br>\| `manual` \| The order is not captured automatically. You must manually capture the order later. \|<br><br>:::info<br>For more information, see [Capture an order](https://developer.revolut.com/docs/api/merchant#capture-order).<br>:::|
|cancel_authorised_after|[Cancel-Authorised-After](#schemacancel-authorised-after)|false|none|Automatic cancellation period for uncaptured orders, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. <br><br>After this period, the authorised payment is automatically cancelled and the order is cancelled. Maximum: 7 days = `P7D`.<br><br>:::note<br>The following limitations apply:<br>  - Cannot be a negative value.<br>  - Cannot be updated if the new value is less than or equal to the elapsed time since authorisation. <br><br>    **Failing scenario:**<br>      - Original value: 7 days<br>      - Time since authorisation: 3 days<br>      - Update value: 2 days<br>      <br>    In this scenario, an error is returned.<br>    <br>    **Successful scenario:**<br>      - Original value: 7 days<br>      - Time since authorisation: 3 days<br>      - Update value: 4 days<br><br>    In this scenario, the parameter can be updated.<br><br>  - Cannot be updated if cancellation is ≤ 30 minutes away.<br><br>    **Failing scenario:**<br>      - Original value: 12 hours<br>      - Time since authorisation: 11 hours 40 minutes<br>                        <br>    In this scenario, an error is returned.<br>    <br>    **Successful scenario:** <br>      - Original value: 12 hours<br>      - Time since authorisation: 11 hours 20 minutes<br><br>    In this scenario, the parameter can be updated.<br>:::|
|metadata|[Metadata](#schemametadata)|false|none|Additional information to track your orders in your system, by providing custom metadata using `"<key>" : "<value>"` pairs.<br><br>:::warning<br>**Restrictions:**<br><br>- Both keys and values must be `string`s<br>- Values cannot be `null`.<br>- Max number of key-value pairs: `50`<br>- Max length of values: `500` characters<br>- Format of keys: Must start with a letter and contain only letters, digits, and underscores. Max 40 characters. Pattern: `^[a-zA-Z][a-zA-Z\\d_]{0,39}$`<br>:::|
|industry_data|[Industry-Data](#schemaindustry-data)|false|none|Object containing industry-specific information associated with the order.<br><br>:::info<br>In the following cases, industry-specific info is required. Omitting this information may trigger additional scrutiny and risk mitigation actions by the Revolut risk team.<br><br>  \| Transaction type \| Required for \| <br>  \| ---------------- \| ----------- \|<br>  \| `airline`        \| Airlines and Online Travel Agencies (OTAs). \|<br>  \| `crypto`         \| Crypto merchants. \|<br>  \| `marketplace`    \| Marketplace merchants. \|<br>  \| `event`          \| Event ticket sellers. \|<br>  \| `lodging`        \| Lodging providers and OTAs. \|<br>:::|
|merchant_order_data|[Merchant-Order-Data](#schemamerchant-order-data)|false|none|Object for providing additional information stored in the merchant's order management system. |
|upcoming_payment_data|[Upcoming-Payment](#schemaupcoming-payment)|false|none|Object containing information about upcoming payments associated with the order.|
|redirect_url|[Redirect-Url](#schemaredirect-url)|false|none|The URL your customer will be redirected to after completing a payment flow.<br><br>- **Hosted Checkout Page** (`checkout_url`): This is the post-success URL - the customer is redirected only after a successful payment.<br>- **Embedded Revolut Pay** (Revolut Checkout widget): This URL is used for all redirect outcomes - success, failure, and cancellation.<br><br>:::warning [Restrictions]<br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be either `http` or `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `2000`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::<br><br>:::note [Revolut Checkout]<br>- Revolut Pay will not appear in the widget on mobile devices unless redirect targets are configured - either via this `redirect_url` parameter or the SDK-level `revolutPayOptions.mobileRedirectUrls` option.<br>- If `redirect_url` is set on the order, it takes precedence over `revolutPayOptions.mobileRedirectUrls` and is used for all redirect outcomes (success, failure, cancel).<br>:::<br><br>:::info<br>For more information, see:<br>- [Hosted Checkout Page: Custom redirection](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/hosted-checkout-page/api#custom-post-payment-redirection-optional)<br>- [Revolut Checkout: Configure mobile redirects](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/revolut-checkout/web#35-configure-revolut-pay-mobile-redirects)<br>:::|
|statement_descriptor_suffix|[Statement-Descriptor-Suffix](#schemastatement-descriptor-suffix)|false|none|You can set a dynamic statement descriptor for your orders by providing a custom suffix. <br><br>A statement descriptor is the text shown on cardholders' bank or card statements, helping them recognise a transaction or merchant. This field can be used to send extra information with the statement descriptor for card transactions.<br><br>The complete descriptor is built using the following format: `{base}*{suffix}`, where:<br>  <br>  - **`{base}`** is the existing descriptor configured in the Revolut Business dashboard (**Settings > Business account > Merchant profile > Statement descriptor**).  <br>  - **`{suffix}`** is defined by the `statement_descriptor_suffix` field.<br><br>:::note<br>- If the combined descriptor's length (base + suffix) exceeds the character limits of card scheme providers, the final value will be truncated. For example if the limit is 22 characters, the base descriptor is `"base"` and the suffix is `"testdescriptorsuffix"`, the final descriptor becomes `"base*testdescriptorsuf"`.<br>- The final statement descriptor shown on a cardholder's statement may vary by issuing bank, as some banks apply their own custom formatting or truncation rules.<br>:::|

#### Enumerated Values

|Property|Value|
|---|---|
|enforce_challenge|automatic|
|enforce_challenge|forced|
|capture_mode|automatic|
|capture_mode|manual|

<h2 id="tocS_Increment-Amount">Increment-Amount</h2>
<!-- backwards compatibility -->
<a id="schemaincrement-amount"></a>
<a id="schema_Increment-Amount"></a>
<a id="tocSincrement-amount"></a>
<a id="tocsincrement-amount"></a>

```json
600
```

The new total amount to be authorised (in minor units, e.g., cents).

This should be the **full new amount**, not the increment value.
For example, if the current authorised amount is `500` and you want to add 100, pass `600`.

:::warning
- Must be greater than or equal to the current authorised amount (incrementing with same amount allowed to extend capture deadline for Mastercard)
- The sum of all increment amounts cannot exceed 5x the initial authorised amount (e.g., initial amount £100 allows up to £500 in total increments)
:::

<h2 id="tocS_Incremental-Authorisation-Request">Incremental-Authorisation-Request</h2>
<!-- backwards compatibility -->
<a id="schemaincremental-authorisation-request"></a>
<a id="schema_Incremental-Authorisation-Request"></a>
<a id="tocSincremental-authorisation-request"></a>
<a id="tocsincremental-authorisation-request"></a>

```json
{
  "amount": 600,
  "reference": "CHG-67890",
  "line_items": [
    {
      "name": "string",
      "type": "physical",
      "quantity": {
        "value": 0,
        "unit": "string"
      },
      "unit_price_amount": 0,
      "total_amount": 0,
      "external_id": "string",
      "discounts": [
        {
          "name": "string",
          "amount": 0
        }
      ],
      "taxes": [
        {
          "name": "string",
          "amount": 0
        }
      ],
      "image_urls": [
        "http://example.com"
      ],
      "description": "string",
      "url": "http://example.com"
    }
  ]
}
```

Request body for incrementing an existing payment authorisation with additional amount, reference, or line items.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Increment-Amount](#schemaincrement-amount)|true|none|The new total amount to be authorised (in minor units, e.g., cents).<br><br>This should be the **full new amount**, not the increment value.<br>For example, if the current authorised amount is `500` and you want to add 100, pass `600`.<br><br>:::warning<br>- Must be greater than or equal to the current authorised amount (incrementing with same amount allowed to extend capture deadline for Mastercard)<br>- The sum of all increment amounts cannot exceed 5x the initial authorised amount (e.g., initial amount £100 allows up to £500 in total increments)<br>:::|
|reference|[Increment-Reference](#schemaincrement-reference)|false|none|External reference for this incremental authorisation.<br><br>:::tip<br>Use your internal charge or invoice ID. This reference is returned in webhooks for easy matching to your system.<br>:::|
|line_items|[Line-Items](#schemaline-items)|false|none|An array of line items included in the order. Each line item represents an individual product or service, along with its quantity, price, taxes, and discounts.<br><br>:::info<br>Required for merchants collecting payment for one or multiple products/services in one transaction. Omitting this information may trigger additional scrutiny and risk mitigation actions by Revolut.<br>:::|

<h2 id="tocS_Order-Capture-Amount">Order-Capture-Amount</h2>
<!-- backwards compatibility -->
<a id="schemaorder-capture-amount"></a>
<a id="schema_Order-Capture-Amount"></a>
<a id="tocSorder-capture-amount"></a>
<a id="tocsorder-capture-amount"></a>

```json
0
```

Specify an amount to capture, in minor currency units. The amount must not exceed the authorised amount.

An order can only be captured once. Partial capture is supported by sending an amount lower than the authorised amount. The uncaptured amount will be voided.

If you resend a capture request for an order that is already captured, no additional capture is performed. Resending with the same amount returns the current order state, while resending with a different amount returns an error.

If not provided, it defaults to the authorised amount (full capture will be executed).

<h2 id="tocS_Order-Capture-v2">Order-Capture-v2</h2>
<!-- backwards compatibility -->
<a id="schemaorder-capture-v2"></a>
<a id="schema_Order-Capture-v2"></a>
<a id="tocSorder-capture-v2"></a>
<a id="tocsorder-capture-v2"></a>

```json
{
  "amount": 0,
  "line_items": [
    {
      "name": "string",
      "type": "physical",
      "quantity": {
        "value": 0,
        "unit": "string"
      },
      "unit_price_amount": 0,
      "total_amount": 0,
      "external_id": "string",
      "discounts": [
        {
          "name": "string",
          "amount": 0
        }
      ],
      "taxes": [
        {
          "name": "string",
          "amount": 0
        }
      ],
      "image_urls": [
        "http://example.com"
      ],
      "description": "string",
      "url": "http://example.com"
    }
  ]
}
```

Order capture request parameters.

You can optionally provide line items when capturing an order. This is useful when you need to adjust the final order details at capture time (for example, when doing partial captures with specific items, or when the final delivered items differ from the initial authorisation).

:::warning
If you provide `line_items` when capturing, they will **overwrite** the original line items that were provided during order creation or update. Make sure to include all the items you want to be associated with the captured order.
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Order-Capture-Amount](#schemaorder-capture-amount)|false|none|Specify an amount to capture, in minor currency units. The amount must not exceed the authorised amount.<br><br>An order can only be captured once. Partial capture is supported by sending an amount lower than the authorised amount. The uncaptured amount will be voided.<br><br>If you resend a capture request for an order that is already captured, no additional capture is performed. Resending with the same amount returns the current order state, while resending with a different amount returns an error.<br><br>If not provided, it defaults to the authorised amount (full capture will be executed).|
|line_items|[Line-Items](#schemaline-items)|false|none|An array of line items included in the order. Each line item represents an individual product or service, along with its quantity, price, taxes, and discounts.<br><br>:::info<br>Required for merchants collecting payment for one or multiple products/services in one transaction. Omitting this information may trigger additional scrutiny and risk mitigation actions by Revolut.<br>:::|

<h2 id="tocS_Refund-Amount">Refund-Amount</h2>
<!-- backwards compatibility -->
<a id="schemarefund-amount"></a>
<a id="schema_Refund-Amount"></a>
<a id="tocSrefund-amount"></a>
<a id="tocsrefund-amount"></a>

```json
100
```

The amount to be refunded, specified in the smallest currency unit (e.g., cents for USD, pence for GBP).

<h2 id="tocS_Refund-Currency">Refund-Currency</h2>
<!-- backwards compatibility -->
<a id="schemarefund-currency"></a>
<a id="schema_Refund-Currency"></a>
<a id="tocSrefund-currency"></a>
<a id="tocsrefund-currency"></a>

```json
"str"
```

[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.

**Must match the `currency` of the original order to be refunded.**

:::info
For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).
:::

<h2 id="tocS_Order-Refund-v2">Order-Refund-v2</h2>
<!-- backwards compatibility -->
<a id="schemaorder-refund-v2"></a>
<a id="schema_Order-Refund-v2"></a>
<a id="tocSorder-refund-v2"></a>
<a id="tocsorder-refund-v2"></a>

```json
{
  "amount": 100,
  "currency": "str",
  "merchant_order_data": {
    "reference": "string"
  },
  "metadata": {
    "order_reference": "ORD-12345",
    "customer_segment": "premium",
    "internal_note": "VIP customer - priority handling"
  },
  "description": "Refund for returned item."
}
```

The request body for creating a refund order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Refund-Amount](#schemarefund-amount)|true|none|The amount to be refunded, specified in the smallest currency unit (e.g., cents for USD, pence for GBP).|
|currency|[Refund-Currency](#schemarefund-currency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>**Must match the `currency` of the original order to be refunded.**<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|merchant_order_data|object|false|none|Object for providing additional information stored in the merchant's order management system.|
|metadata|[Metadata](#schemametadata)|false|none|Additional information to track your orders in your system, by providing custom metadata using `"<key>" : "<value>"` pairs.<br><br>:::warning<br>**Restrictions:**<br><br>- Both keys and values must be `string`s<br>- Values cannot be `null`.<br>- Max number of key-value pairs: `50`<br>- Max length of values: `500` characters<br>- Format of keys: Must start with a letter and contain only letters, digits, and underscores. Max 40 characters. Pattern: `^[a-zA-Z][a-zA-Z\\d_]{0,39}$`<br>:::|
|description|string|false|none|An optional, user-facing description for the refund. This may be displayed to the customer.|

<h2 id="tocS_Revolut-Pay-Account-Legacy">Revolut-Pay-Account-Legacy</h2>
<!-- backwards compatibility -->
<a id="schemarevolut-pay-account-legacy"></a>
<a id="schema_Revolut-Pay-Account-Legacy"></a>
<a id="tocSrevolut-pay-account-legacy"></a>
<a id="tocsrevolut-pay-account-legacy"></a>

```json
{
  "type": "card",
  "subtype": "revolut_account",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Revolut Pay account payment method details, used when the customer paid via their Revolut account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of payment method used to pay for the order.|
|subtype|string|true|none|Indicates whether the customer used their card or Revolut account via Revolut Pay.|
|id|string(uuid)|false|none|ID of the saved payment method.<br><br>:::note<br>The `id` parameter is only returned if the payment method is saved.<br>:::|

#### Enumerated Values

|Property|Value|
|---|---|
|type|card|
|type|revolut_pay|
|subtype|revolut_account|
|subtype|card|

<h2 id="tocS_Revolut-Pay-Card-Legacy">Revolut-Pay-Card-Legacy</h2>
<!-- backwards compatibility -->
<a id="schemarevolut-pay-card-legacy"></a>
<a id="schema_Revolut-Pay-Card-Legacy"></a>
<a id="tocSrevolut-pay-card-legacy"></a>
<a id="tocsrevolut-pay-card-legacy"></a>

```json
{
  "type": "card",
  "subtype": "revolut_account",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "brand": "string",
  "last_four": "string"
}
```

Revolut Pay card payment method details, used when the customer paid via a card through Revolut Pay.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of payment method used to pay for the order.|
|subtype|string|true|none|Indicates whether the customer used their card or Revolut account via Revolut Pay.|
|id|string(uuid)|false|none|ID of the saved payment method.<br><br>:::note<br>The `id` parameter is only returned if the payment method is saved.<br>:::|
|brand|string|false|none|The type of the card.|
|last_four|string|false|none|The last four digits of the card number.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|card|
|type|revolut_pay|
|subtype|revolut_account|
|subtype|card|

<h2 id="tocS_Revolut-Pay">Revolut-Pay</h2>
<!-- backwards compatibility -->
<a id="schemarevolut-pay"></a>
<a id="schema_Revolut-Pay"></a>
<a id="tocSrevolut-pay"></a>
<a id="tocsrevolut-pay"></a>

```json
{
  "type": "card",
  "subtype": "revolut_account",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Revolut Pay payment method details, discriminated by subtype into account or card variants.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Revolut-Pay-Account-Legacy](#schemarevolut-pay-account-legacy)|false|none|Revolut Pay account payment method details, used when the customer paid via their Revolut account.|
|*oneOf*|[Revolut-Pay-Card-Legacy](#schemarevolut-pay-card-legacy)|false|none|Revolut Pay card payment method details, used when the customer paid via a card through Revolut Pay.|

<h2 id="tocS_Card-For-Payment-Details">Card-For-Payment-Details</h2>
<!-- backwards compatibility -->
<a id="schemacard-for-payment-details"></a>
<a id="schema_Card-For-Payment-Details"></a>
<a id="tocScard-for-payment-details"></a>
<a id="tocscard-for-payment-details"></a>

```json
{
  "type": "card",
  "brand": "string",
  "last_four": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Card payment method details returned in the payment retrieval response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of payment method used to pay for the order.|
|brand|string|false|none|The type of the card.|
|last_four|string|false|none|The last four digits of the card number.|
|id|string(uuid)|false|none|ID of the saved payment method.<br><br>:::note<br>The `id` parameter is only returned if the payment method is saved.<br>:::|

#### Enumerated Values

|Property|Value|
|---|---|
|type|card|
|type|revolut_pay|

<h2 id="tocS_Payment-Retrieval">Payment-Retrieval</h2>
<!-- backwards compatibility -->
<a id="schemapayment-retrieval"></a>
<a id="schema_Payment-Retrieval"></a>
<a id="tocSpayment-retrieval"></a>
<a id="tocspayment-retrieval"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "payment_method": {
    "type": "card",
    "subtype": "revolut_account",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "token": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": 600,
  "currency": "str",
  "state": "pending",
  "decline_reason": "3ds_challenge_abandoned",
  "authentication_challenge": {
    "type": "three_ds",
    "acs_url": "http://example.com"
  }
}
```

A payment object retrieved from the API, including its method, amount, state, and optional authentication challenge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Payment-Id](#schemapayment-id)|true|none|The ID of the payment.|
|order_id|[Order-Id](#schemaorder-id)|true|none|Permanent order ID used to retrieve, capture, cancel, or refund an order after authorization.|
|payment_method|object|true|none|The payment method used to pay for the order.|
|token|[Payment-Token](#schemapayment-token)|false|none|Temporary token of the payment used to fetch the reward offer during checkout and link user registrations to the given offers. <br><br>The token is only valid for a limited time.|
|amount|[Payment-Amount](#schemapayment-amount)|false|none|The payment amount in minor units (e.g., cents). The value of this field depends on the payment type and state.<br><br>\| Payment type \| State \| Amount value \|<br>\|--------------\|-------\|--------------\|<br>\| Standard payment \| Any \| Total payment amount \|<br>\| Pre-authorised payment \| `authorisation_started` \| New amount being authorised (during increment processing) \|<br>\| Pre-authorised payment \| `authorised` \| Currently authorised amount (equals `authorised_amount`) \|<br><br>:::info<br>For pre-authorised payments, see the `authorised_amount` field for tracking the currently authorised amount separately.<br>:::|
|currency|[Currency](#schemacurrency)|false|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|state|[Payment-State-v2](#schemapayment-state-v2)|false|none|The status of the payment.|
|decline_reason|[Decline-Reason-v2](#schemadecline-reason-v2)|false|none|The reason for a `failed` or `declined` payment.<br><br>A failed or declined payment can result from multiple reasons. To learn more, check our [failure reasons](https://developer.revolut.com/docs/guides/merchant/reference/error-codes/decline-reasons).|
|authentication_challenge|[Authentication-Challenge](#schemaauthentication-challenge)|false|none|Details about the authentication challenge that should be performed to complete the authentication process. For more information about Revolut's 3DS solution, see: [3D Secure overview](https://developer.revolut.com/docs/guides/merchant/reference/3d-secure).<br><br>Only returned if the payment's state is `authentication_challenge`.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|pending|
|state|authentication_challenge|
|state|authentication_verified|
|state|authorisation_started|
|state|authorisation_passed|
|state|authorised|
|state|capture_started|
|state|captured|
|state|refund_validated|
|state|refund_started|
|state|cancellation_started|
|state|declining|
|state|completing|
|state|cancelling|
|state|failing|
|state|completed|
|state|declined|
|state|soft_declined|
|state|cancelled|
|state|failed|
|decline_reason|3ds_challenge_abandoned|
|decline_reason|3ds_challenge_failed|
|decline_reason|3ds_challenge_failed_manually|
|decline_reason|authentication_required|
|decline_reason|card_not_enrolled_to_three_ds|
|decline_reason|cardholder_name_missing|
|decline_reason|currency_not_supported|
|decline_reason|customer_challenge_abandoned|
|decline_reason|customer_challenge_failed|
|decline_reason|customer_date_of_birth_mismatch|
|decline_reason|customer_name_mismatch|
|decline_reason|customer_verification_failed|
|decline_reason|customer_wallet_limits_exceeded|
|decline_reason|do_not_honour|
|decline_reason|expired_card|
|decline_reason|high_risk|
|decline_reason|insufficient_funds|
|decline_reason|insufficient_refundable_amount|
|decline_reason|invalid_account|
|decline_reason|invalid_address|
|decline_reason|invalid_amount|
|decline_reason|invalid_card|
|decline_reason|invalid_country|
|decline_reason|invalid_cvv|
|decline_reason|invalid_email|
|decline_reason|invalid_expiry|
|decline_reason|invalid_merchant|
|decline_reason|invalid_phone|
|decline_reason|invalid_pin|
|decline_reason|invalid_transaction|
|decline_reason|issuer_decline|
|decline_reason|issuer_not_available|
|decline_reason|law_violation|
|decline_reason|lost_card|
|decline_reason|new_card_not_unblocked|
|decline_reason|no_common_supported_three_ds_version|
|decline_reason|no_such_issuer|
|decline_reason|payment_attempt_blocked|
|decline_reason|pick_up_card|
|decline_reason|pin_required|
|decline_reason|pin_try_exceeded|
|decline_reason|rejected_by_customer|
|decline_reason|restricted_card|
|decline_reason|security_violation|
|decline_reason|stolen_card|
|decline_reason|suspected_fraud|
|decline_reason|technical_error|
|decline_reason|transaction_not_allowed|
|decline_reason|transaction_not_allowed_for_cardholder|
|decline_reason|unknown|
|decline_reason|unknown_card|
|decline_reason|withdrawal_frequency_exceeded|
|decline_reason|withdrawal_limit_exceeded|

<h2 id="tocS_Browser-Environment">Browser-Environment</h2>
<!-- backwards compatibility -->
<a id="schemabrowser-environment"></a>
<a id="schema_Browser-Environment"></a>
<a id="tocSbrowser-environment"></a>
<a id="tocsbrowser-environment"></a>

```json
{
  "type": "browser",
  "time_zone_utc_offset": 180,
  "color_depth": 32,
  "screen_width": 1920,
  "screen_height": 1080,
  "java_enabled": false,
  "challenge_window_width": 640,
  "browser_url": "https://business.revolut.com"
}
```

Browser environment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of environment where the payment was made.|
|time_zone_utc_offset|integer|true|none|Defines the offset to UTC in minutes.|
|color_depth|integer|true|none|The browser's available colour depth.|
|screen_width|integer|true|none|The browser's screen width in pixels.|
|screen_height|integer|true|none|The browser's screen height in pixels.|
|java_enabled|boolean|true|none|Indicates if the browser has Java enabled.|
|challenge_window_width|integer|false|none|Defines the width of the pop-up window where the authentication challenge appears.|
|browser_url|string(uri)|false|none|The URL of the page where the payment was initiated.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|browser|

<h2 id="tocS_Environment">Environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_Environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

```json
{
  "type": "browser",
  "time_zone_utc_offset": 180,
  "color_depth": 32,
  "screen_width": 1920,
  "screen_height": 1080,
  "java_enabled": false,
  "challenge_window_width": 640,
  "browser_url": "https://business.revolut.com"
}
```

Environment object, indicating in which environment the payment was made.

:::warning
Only required if `initiator: customer`.
:::

:::note
Only `browser` is available at the moment.
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Browser-Environment](#schemabrowser-environment)|false|none|Browser environment|

<h2 id="tocS_Saved-Payment-Method">Saved-Payment-Method</h2>
<!-- backwards compatibility -->
<a id="schemasaved-payment-method"></a>
<a id="schema_Saved-Payment-Method"></a>
<a id="tocSsaved-payment-method"></a>
<a id="tocssaved-payment-method"></a>

```json
{
  "saved_payment_method": {
    "type": "card",
    "id": "string",
    "initiator": "customer",
    "environment": {
      "type": "browser",
      "time_zone_utc_offset": 180,
      "color_depth": 32,
      "screen_width": 1920,
      "screen_height": 1080,
      "java_enabled": false,
      "challenge_window_width": 640,
      "browser_url": "https://business.revolut.com"
    }
  }
}
```

A saved payment method used to pay for an order, including type, ID, initiator, and environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|saved_payment_method|object|true|none|Object containing information about the saved payment method used to pay for the order.|

<h2 id="tocS_Next-Page-Token">Next-Page-Token</h2>
<!-- backwards compatibility -->
<a id="schemanext-page-token"></a>
<a id="schema_Next-Page-Token"></a>
<a id="tocSnext-page-token"></a>
<a id="tocsnext-page-token"></a>

```json
"string"
```

Token for retrieving the next page of results. Use this token as the value of the `page_token` query parameter in your next request to retrieve the next page.

If not present, there are no more results to retrieve.

<h2 id="tocS_Customer-Simplified">Customer-Simplified</h2>
<!-- backwards compatibility -->
<a id="schemacustomer-simplified"></a>
<a id="schema_Customer-Simplified"></a>
<a id="tocScustomer-simplified"></a>
<a id="tocscustomer-simplified"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "full_name": "string",
  "email": "user@example.com",
  "phone": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

A customer object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Customer-Id](#schemacustomer-id)|true|none|Unique identifier for the customer.|
|full_name|[Full-Name](#schemafull-name)|false|none|The full name of the customer.|
|email|[Email](#schemaemail)|true|none|The email address of the customer.|
|phone|[Phone](#schemaphone)|false|none|The phone number of the customer in [E.164 format](https://en.wikipedia.org/wiki/E.164).|
|created_at|string(date-time)|true|none|The date and time the customer was created.|
|updated_at|string(date-time)|true|none|The date and time the customer was last updated.|

<h2 id="tocS_Customers">Customers</h2>
<!-- backwards compatibility -->
<a id="schemacustomers"></a>
<a id="schema_Customers"></a>
<a id="tocScustomers"></a>
<a id="tocscustomers"></a>

```json
{
  "next_page_token": "string",
  "customers": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "full_name": "string",
      "email": "user@example.com",
      "phone": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

A paginated list of customers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page_token|[Next-Page-Token](#schemanext-page-token)|false|none|Token for retrieving the next page of results. Use this token as the value of the `page_token` query parameter in your next request to retrieve the next page.<br><br>If not present, there are no more results to retrieve.|
|customers|[[Customer-Simplified](#schemacustomer-simplified)]|true|none|List of customers.|

<h2 id="tocS_Customer-Creation-v2">Customer-Creation-v2</h2>
<!-- backwards compatibility -->
<a id="schemacustomer-creation-v2"></a>
<a id="schema_Customer-Creation-v2"></a>
<a id="tocScustomer-creation-v2"></a>
<a id="tocscustomer-creation-v2"></a>

```json
{
  "full_name": "string",
  "email": "user@example.com",
  "phone": "string",
  "date_of_birth": "1970-01-01"
}
```

The request body for creating a customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|full_name|[Full-Name](#schemafull-name)|false|none|The full name of the customer.|
|email|[Email](#schemaemail)|true|none|The email address of the customer.|
|phone|[Phone](#schemaphone)|false|none|The phone number of the customer in [E.164 format](https://en.wikipedia.org/wiki/E.164).|
|date_of_birth|[Date-Of-Birth](#schemadate-of-birth)|false|none|The birth date of the customer.|

<h2 id="tocS_Customer-Created">Customer-Created</h2>
<!-- backwards compatibility -->
<a id="schemacustomer-created"></a>
<a id="schema_Customer-Created"></a>
<a id="tocScustomer-created"></a>
<a id="tocscustomer-created"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "full_name": "string",
  "email": "user@example.com",
  "phone": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

A customer object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Customer-Id](#schemacustomer-id)|true|none|Unique identifier for the customer.|
|full_name|[Full-Name](#schemafull-name)|false|none|The full name of the customer.|
|email|[Email](#schemaemail)|true|none|The email address of the customer.|
|phone|[Phone](#schemaphone)|false|none|The phone number of the customer in [E.164 format](https://en.wikipedia.org/wiki/E.164).|
|created_at|string(date-time)|true|none|The date and time the customer was created.|
|updated_at|string(date-time)|true|none|The date and time the customer was last updated.|

<h2 id="tocS_Payment-Method-Id">Payment-Method-Id</h2>
<!-- backwards compatibility -->
<a id="schemapayment-method-id"></a>
<a id="schema_Payment-Method-Id"></a>
<a id="tocSpayment-method-id"></a>
<a id="tocspayment-method-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

Unique identifier for the payment method.

<h2 id="tocS_Payment-Method-Type-v2">Payment-Method-Type-v2</h2>
<!-- backwards compatibility -->
<a id="schemapayment-method-type-v2"></a>
<a id="schema_Payment-Method-Type-v2"></a>
<a id="tocSpayment-method-type-v2"></a>
<a id="tocspayment-method-type-v2"></a>

```json
"card"
```

The type of the payment method.

<h2 id="tocS_Saved-For">Saved-For</h2>
<!-- backwards compatibility -->
<a id="schemasaved-for"></a>
<a id="schema_Saved-For"></a>
<a id="tocSsaved-for"></a>
<a id="tocssaved-for"></a>

```json
"customer"
```

Indicates in which case this saved payment method can be used for payments.

| Value | Description |
| ----- | ----------- |
| `customer` | This payment method can be used only when the customer is on the checkout page. |
| `merchant` | This payment method can be used without the customer being on the checkout page, and the merchant can initiate transactions, for example, to take payments for recurring transactions. |

<h2 id="tocS_Payment-Method-Created-At">Payment-Method-Created-At</h2>
<!-- backwards compatibility -->
<a id="schemapayment-method-created-at"></a>
<a id="schema_Payment-Method-Created-At"></a>
<a id="tocSpayment-method-created-at"></a>
<a id="tocspayment-method-created-at"></a>

```json
"1970-01-01T00:00:00Z"
```

The date and time the payment method was added.

<h2 id="tocS_Card-Bin">Card-Bin</h2>
<!-- backwards compatibility -->
<a id="schemacard-bin"></a>
<a id="schema_Card-Bin"></a>
<a id="tocScard-bin"></a>
<a id="tocscard-bin"></a>

```json
"string"
```

The BIN (Bank Identification Number) of the payment card, typically the first 6-8 digits.

<h2 id="tocS_Card-Last-Four">Card-Last-Four</h2>
<!-- backwards compatibility -->
<a id="schemacard-last-four"></a>
<a id="schema_Card-Last-Four"></a>
<a id="tocScard-last-four"></a>
<a id="tocscard-last-four"></a>

```json
"stri"
```

The last four digits of the payment card number.

<h2 id="tocS_Card-Expiry-Month">Card-Expiry-Month</h2>
<!-- backwards compatibility -->
<a id="schemacard-expiry-month"></a>
<a id="schema_Card-Expiry-Month"></a>
<a id="tocScard-expiry-month"></a>
<a id="tocscard-expiry-month"></a>

```json
0
```

The expiry month of the payment card.

<h2 id="tocS_Card-Expiry-Year">Card-Expiry-Year</h2>
<!-- backwards compatibility -->
<a id="schemacard-expiry-year"></a>
<a id="schema_Card-Expiry-Year"></a>
<a id="tocScard-expiry-year"></a>
<a id="tocscard-expiry-year"></a>

```json
0
```

The expiry year of the payment card.

<h2 id="tocS_Cardholder-Name">Cardholder-Name</h2>
<!-- backwards compatibility -->
<a id="schemacardholder-name"></a>
<a id="schema_Cardholder-Name"></a>
<a id="tocScardholder-name"></a>
<a id="tocscardholder-name"></a>

```json
"string"
```

The name of the cardholder as it appears on the card.

<h2 id="tocS_Card-Brand-v2">Card-Brand-v2</h2>
<!-- backwards compatibility -->
<a id="schemacard-brand-v2"></a>
<a id="schema_Card-Brand-v2"></a>
<a id="tocScard-brand-v2"></a>
<a id="tocscard-brand-v2"></a>

```json
"visa"
```

The brand of the payment card.

<h2 id="tocS_Card-Funding-v2">Card-Funding-v2</h2>
<!-- backwards compatibility -->
<a id="schemacard-funding-v2"></a>
<a id="schema_Card-Funding-v2"></a>
<a id="tocScard-funding-v2"></a>
<a id="tocscard-funding-v2"></a>

```json
"debit"
```

The funding type of the payment card.

<h2 id="tocS_Card-Issuer">Card-Issuer</h2>
<!-- backwards compatibility -->
<a id="schemacard-issuer"></a>
<a id="schema_Card-Issuer"></a>
<a id="tocScard-issuer"></a>
<a id="tocscard-issuer"></a>

```json
"string"
```

The name of the card-issuing bank or institution.

<h2 id="tocS_Card-Issuer-Country">Card-Issuer-Country</h2>
<!-- backwards compatibility -->
<a id="schemacard-issuer-country"></a>
<a id="schema_Card-Issuer-Country"></a>
<a id="tocScard-issuer-country"></a>
<a id="tocscard-issuer-country"></a>

```json
"st"
```

The ISO 3166-1 alpha-2 country code of the country where the payment card was issued.

<h2 id="tocS_Billing-Address">Billing-Address</h2>
<!-- backwards compatibility -->
<a id="schemabilling-address"></a>
<a id="schema_Billing-Address"></a>
<a id="tocSbilling-address"></a>
<a id="tocsbilling-address"></a>

```json
{
  "street_line_1": "string",
  "street_line_2": "string",
  "region": "string",
  "city": "string",
  "country_code": "st",
  "postcode": "string"
}
```

The billing address associated with the payment method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|street_line_1|string|false|none|Primary address line.|
|street_line_2|string|false|none|Secondary address line, such as floor and apartment number.|
|region|string|false|none|State or province of the address.|
|city|string|false|none|City of the address.|
|country_code|string|true|none|ISO 2-letter country code.|
|postcode|string|true|none|Postal code of the address.|

<h2 id="tocS_Card-v2">Card-v2</h2>
<!-- backwards compatibility -->
<a id="schemacard-v2"></a>
<a id="schema_Card-v2"></a>
<a id="tocScard-v2"></a>
<a id="tocscard-v2"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "card",
  "saved_for": "customer",
  "created_at": "1970-01-01T00:00:00Z",
  "bin": "string",
  "last_four": "stri",
  "expiry_month": 0,
  "expiry_year": 0,
  "cardholder_name": "string",
  "brand": "visa",
  "funding": "debit",
  "issuer": "string",
  "issuer_country": "st",
  "billing_address": {
    "street_line_1": "string",
    "street_line_2": "string",
    "region": "string",
    "city": "string",
    "country_code": "st",
    "postcode": "string"
  },
  "terminal_hardware_id": "string"
}
```

A saved card payment method.

:::info
The `checks` object (3DS, CVV, address verification) is not included as it is specific to the transactional payment context.
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Payment-Method-Id](#schemapayment-method-id)|true|none|Unique identifier for the payment method.|
|type|[Payment-Method-Type-v2](#schemapayment-method-type-v2)|true|none|The type of the payment method.|
|saved_for|[Saved-For](#schemasaved-for)|false|none|Indicates in which case this saved payment method can be used for payments.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `customer` \| This payment method can be used only when the customer is on the checkout page. \|<br>\| `merchant` \| This payment method can be used without the customer being on the checkout page, and the merchant can initiate transactions, for example, to take payments for recurring transactions. \||
|created_at|[Payment-Method-Created-At](#schemapayment-method-created-at)|true|none|The date and time the payment method was added.|
|bin|[Card-Bin](#schemacard-bin)|false|none|The BIN (Bank Identification Number) of the payment card, typically the first 6-8 digits.|
|last_four|[Card-Last-Four](#schemacard-last-four)|false|none|The last four digits of the payment card number.|
|expiry_month|[Card-Expiry-Month](#schemacard-expiry-month)|false|none|The expiry month of the payment card.|
|expiry_year|[Card-Expiry-Year](#schemacard-expiry-year)|false|none|The expiry year of the payment card.|
|cardholder_name|[Cardholder-Name](#schemacardholder-name)|false|none|The name of the cardholder as it appears on the card.|
|brand|[Card-Brand-v2](#schemacard-brand-v2)|false|none|The brand of the payment card.|
|funding|[Card-Funding-v2](#schemacard-funding-v2)|false|none|The funding type of the payment card.|
|issuer|[Card-Issuer](#schemacard-issuer)|false|none|The name of the card-issuing bank or institution.|
|issuer_country|[Card-Issuer-Country](#schemacard-issuer-country)|false|none|The ISO 3166-1 alpha-2 country code of the country where the payment card was issued.|
|billing_address|[Billing-Address](#schemabilling-address)|false|none|The billing address associated with the payment method.|
|terminal_hardware_id|[Terminal-Hardware-Id](#schematerminal-hardware-id)|false|none|The hardware identifier of the Revolut Terminal device used to process the payment.<br><br>:::note<br>Only present for card-present transactions processed via Revolut Terminal.<br>:::|

#### Enumerated Values

|Property|Value|
|---|---|
|type|card|
|type|revolut_pay|
|type|sepa_direct_debit|
|saved_for|customer|
|saved_for|merchant|
|brand|visa|
|brand|mastercard|
|brand|american_express|
|funding|debit|
|funding|credit|
|funding|prepaid|

<h2 id="tocS_Revolut-Pay-v2">Revolut-Pay-v2</h2>
<!-- backwards compatibility -->
<a id="schemarevolut-pay-v2"></a>
<a id="schema_Revolut-Pay-v2"></a>
<a id="tocSrevolut-pay-v2"></a>
<a id="tocsrevolut-pay-v2"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "card",
  "saved_for": "customer",
  "created_at": "1970-01-01T00:00:00Z"
}
```

A saved Revolut Pay payment method on a customer profile.

Both Revolut Pay card-backed and account-to-account (A2A) variants are
represented by this single type at the saved payment method level.
No underlying card details are exposed here; use the order-level
`payments[].payment_method` object (types `revolut_pay_card` /
`revolut_pay_account`) for per-transaction details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Payment-Method-Id](#schemapayment-method-id)|true|none|Unique identifier for the payment method.|
|type|[Payment-Method-Type-v2](#schemapayment-method-type-v2)|true|none|The type of the payment method.|
|saved_for|[Saved-For](#schemasaved-for)|false|none|Indicates in which case this saved payment method can be used for payments.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `customer` \| This payment method can be used only when the customer is on the checkout page. \|<br>\| `merchant` \| This payment method can be used without the customer being on the checkout page, and the merchant can initiate transactions, for example, to take payments for recurring transactions. \||
|created_at|[Payment-Method-Created-At](#schemapayment-method-created-at)|true|none|The date and time the payment method was added.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|card|
|type|revolut_pay|
|type|sepa_direct_debit|
|saved_for|customer|
|saved_for|merchant|

<h2 id="tocS_Sepa-Direct-Debit-v2">Sepa-Direct-Debit-v2</h2>
<!-- backwards compatibility -->
<a id="schemasepa-direct-debit-v2"></a>
<a id="schema_Sepa-Direct-Debit-v2"></a>
<a id="tocSsepa-direct-debit-v2"></a>
<a id="tocssepa-direct-debit-v2"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "card",
  "saved_for": "customer",
  "debtor_iban_last_four": "stri",
  "debtor_name": "string",
  "mandate_reference": "string",
  "billing_address": {
    "street_line_1": "string",
    "street_line_2": "string",
    "region": "string",
    "city": "string",
    "country_code": "st",
    "postcode": "string"
  },
  "created_at": "1970-01-01T00:00:00Z"
}
```

A saved SEPA Direct Debit payment method on a customer profile.

:::info
For more information, see: [SEPA Direct Debit server-to-server integration](https://developer.revolut.com/docs/guides/merchant/accept-payments/payment-methods/sepa-direct-debit/server-to-server)
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Payment-Method-Id](#schemapayment-method-id)|true|none|Unique identifier for the payment method.|
|type|[Payment-Method-Type-v2](#schemapayment-method-type-v2)|true|none|The type of the payment method.|
|saved_for|[Saved-For](#schemasaved-for)|false|none|Indicates in which case this saved payment method can be used for payments.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `customer` \| This payment method can be used only when the customer is on the checkout page. \|<br>\| `merchant` \| This payment method can be used without the customer being on the checkout page, and the merchant can initiate transactions, for example, to take payments for recurring transactions. \||
|debtor_iban_last_four|[Sepa-Direct-Debit-Debtor-Iban-Last-Four](#schemasepa-direct-debit-debtor-iban-last-four)|false|none|The last four digits of the debtor's IBAN.|
|debtor_name|[Sepa-Direct-Debit-Debtor-Name](#schemasepa-direct-debit-debtor-name)|false|none|The full name of the debtor as provided in the mandate.|
|mandate_reference|[Sepa-Direct-Debit-Mandate-Reference](#schemasepa-direct-debit-mandate-reference)|false|none|The unique mandate reference generated by Revolut. Include this in pre-debit notifications sent to your customers.|
|billing_address|[Billing-Address](#schemabilling-address)|false|none|The billing address associated with the payment method.|
|created_at|[Payment-Method-Created-At](#schemapayment-method-created-at)|true|none|The date and time the payment method was added.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|card|
|type|revolut_pay|
|type|sepa_direct_debit|
|saved_for|customer|
|saved_for|merchant|

<h2 id="tocS_Payment-Method-v4">Payment-Method-v4</h2>
<!-- backwards compatibility -->
<a id="schemapayment-method-v4"></a>
<a id="schema_Payment-Method-v4"></a>
<a id="tocSpayment-method-v4"></a>
<a id="tocspayment-method-v4"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "card",
  "saved_for": "customer",
  "created_at": "1970-01-01T00:00:00Z",
  "bin": "string",
  "last_four": "stri",
  "expiry_month": 0,
  "expiry_year": 0,
  "cardholder_name": "string",
  "brand": "visa",
  "funding": "debit",
  "issuer": "string",
  "issuer_country": "st",
  "billing_address": {
    "street_line_1": "string",
    "street_line_2": "string",
    "region": "string",
    "city": "string",
    "country_code": "st",
    "postcode": "string"
  },
  "terminal_hardware_id": "string"
}
```

A saved payment method on a customer profile.

Use the `type` field to determine the specific payment method variant.

:::note
This schema represents a stored credential available for future charges and supports three types: `card`, `revolut_pay`, and `sepa_direct_debit`.

It differs from the `payment_method` object on a Payment, which is a transactional snapshot of how a specific charge was executed and includes additional detail such as wallet wrappers (`apple_pay`, `google_pay`) and Revolut Pay funding source (`revolut_pay_card` vs `revolut_pay_account`).
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Card-v2](#schemacard-v2)|false|none|A saved card payment method.<br><br>:::info<br>The `checks` object (3DS, CVV, address verification) is not included as it is specific to the transactional payment context.<br>:::|
|*oneOf*|[Revolut-Pay-v2](#schemarevolut-pay-v2)|false|none|A saved Revolut Pay payment method on a customer profile.<br><br>Both Revolut Pay card-backed and account-to-account (A2A) variants are<br>represented by this single type at the saved payment method level.<br>No underlying card details are exposed here; use the order-level<br>`payments[].payment_method` object (types `revolut_pay_card` /<br>`revolut_pay_account`) for per-transaction details.|
|*oneOf*|[Sepa-Direct-Debit-v2](#schemasepa-direct-debit-v2)|false|none|A saved SEPA Direct Debit payment method on a customer profile.<br><br>:::info<br>For more information, see: [SEPA Direct Debit server-to-server integration](https://developer.revolut.com/docs/guides/merchant/accept-payments/payment-methods/sepa-direct-debit/server-to-server)<br>:::|

<h2 id="tocS_Customer-v3">Customer-v3</h2>
<!-- backwards compatibility -->
<a id="schemacustomer-v3"></a>
<a id="schema_Customer-v3"></a>
<a id="tocScustomer-v3"></a>
<a id="tocscustomer-v3"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "full_name": "string",
  "email": "user@example.com",
  "phone": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "payment_methods": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "card",
      "saved_for": "customer",
      "created_at": "1970-01-01T00:00:00Z",
      "bin": "string",
      "last_four": "stri",
      "expiry_month": 0,
      "expiry_year": 0,
      "cardholder_name": "string",
      "brand": "visa",
      "funding": "debit",
      "issuer": "string",
      "issuer_country": "st",
      "billing_address": {
        "street_line_1": "string",
        "street_line_2": "string",
        "region": "string",
        "city": "string",
        "country_code": "st",
        "postcode": "string"
      },
      "terminal_hardware_id": "string"
    }
  ]
}
```

A customer object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Customer-Id](#schemacustomer-id)|true|none|Unique identifier for the customer.|
|full_name|[Full-Name](#schemafull-name)|false|none|The full name of the customer.|
|email|[Email](#schemaemail)|true|none|The email address of the customer.|
|phone|[Phone](#schemaphone)|false|none|The phone number of the customer in [E.164 format](https://en.wikipedia.org/wiki/E.164).|
|created_at|string(date-time)|true|none|The date and time the customer was created.|
|updated_at|string(date-time)|true|none|The date and time the customer was last updated.|
|payment_methods|[[Payment-Method-v4](#schemapayment-method-v4)]|true|none|Saved payment methods associated with this customer. Each entry represents a<br>payment method authorised for future charges. Two types are supported: `card`<br>(with full card details) and `revolut_pay` (covers both card-backed and<br>account-to-account Revolut Pay variants). Use the `type` field on each item<br>to identify the variant.|

<h2 id="tocS_Customer-Update-v2">Customer-Update-v2</h2>
<!-- backwards compatibility -->
<a id="schemacustomer-update-v2"></a>
<a id="schema_Customer-Update-v2"></a>
<a id="tocScustomer-update-v2"></a>
<a id="tocscustomer-update-v2"></a>

```json
{
  "full_name": "string",
  "email": "user@example.com",
  "phone": "string",
  "date_of_birth": "1970-01-01"
}
```

The request body for updating a customer.

All fields are optional. Only the fields provided in the request will be updated.

:::note
`business_name` is not supported in this version of the API.
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|full_name|[Full-Name](#schemafull-name)|false|none|The full name of the customer.|
|email|[Email](#schemaemail)|false|none|The email address of the customer.|
|phone|[Phone](#schemaphone)|false|none|The phone number of the customer in [E.164 format](https://en.wikipedia.org/wiki/E.164).|
|date_of_birth|[Date-Of-Birth](#schemadate-of-birth)|false|none|The birth date of the customer.|

<h2 id="tocS_Customer-Payment-Methods-v2">Customer-Payment-Methods-v2</h2>
<!-- backwards compatibility -->
<a id="schemacustomer-payment-methods-v2"></a>
<a id="schema_Customer-Payment-Methods-v2"></a>
<a id="tocScustomer-payment-methods-v2"></a>
<a id="tocscustomer-payment-methods-v2"></a>

```json
{
  "payment_methods": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "card",
      "saved_for": "customer",
      "created_at": "1970-01-01T00:00:00Z",
      "bin": "string",
      "last_four": "stri",
      "expiry_month": 0,
      "expiry_year": 0,
      "cardholder_name": "string",
      "brand": "visa",
      "funding": "debit",
      "issuer": "string",
      "issuer_country": "st",
      "billing_address": {
        "street_line_1": "string",
        "street_line_2": "string",
        "region": "string",
        "city": "string",
        "country_code": "st",
        "postcode": "string"
      },
      "terminal_hardware_id": "string"
    }
  ]
}
```

A list of saved payment methods associated with a customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payment_methods|[[Payment-Method-v4](#schemapayment-method-v4)]|true|none|Saved payment methods associated with this customer. Each entry represents a<br>payment method authorised for future charges. Two types are supported: `card`<br>(with full card details) and `revolut_pay` (covers both card-backed and<br>account-to-account Revolut Pay variants). Use the `type` field on each item<br>to identify the variant.|

<h2 id="tocS_Payment-Method-Update">Payment-Method-Update</h2>
<!-- backwards compatibility -->
<a id="schemapayment-method-update"></a>
<a id="schema_Payment-Method-Update"></a>
<a id="tocSpayment-method-update"></a>
<a id="tocspayment-method-update"></a>

```json
{
  "saved_for": "customer"
}
```

Fields to update on a saved payment method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|saved_for|string|false|none|Update the value of `saved_for` from `merchant` to `customer`.<br><br>Once updated, this payment method can no longer be used for merchant-initiated transactions (MIT). It can only be used when the customer is present on the checkout page.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `customer` \| Restrict this payment method to customer-initiated transactions only. \||

#### Enumerated Values

|Property|Value|
|---|---|
|saved_for|customer|

<h2 id="tocS_Dispute-Payment-Id">Dispute-Payment-Id</h2>
<!-- backwards compatibility -->
<a id="schemadispute-payment-id"></a>
<a id="schema_Dispute-Payment-Id"></a>
<a id="tocSdispute-payment-id"></a>
<a id="tocsdispute-payment-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The ID of the original payment that was disputed.

<h2 id="tocS_Dispute-Payment-Order-Id">Dispute-Payment-Order-Id</h2>
<!-- backwards compatibility -->
<a id="schemadispute-payment-order-id"></a>
<a id="schema_Dispute-Payment-Order-Id"></a>
<a id="tocSdispute-payment-order-id"></a>
<a id="tocsdispute-payment-order-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The ID of the order linked to the original disputed payment.

<h2 id="tocS_Dispute-Payment-Created-At">Dispute-Payment-Created-At</h2>
<!-- backwards compatibility -->
<a id="schemadispute-payment-created-at"></a>
<a id="schema_Dispute-Payment-Created-At"></a>
<a id="tocSdispute-payment-created-at"></a>
<a id="tocsdispute-payment-created-at"></a>

```json
"1970-01-01T00:00:00Z"
```

[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time when the original disputed payment was created.

<h2 id="tocS_Dispute-Payment-Arn">Dispute-Payment-Arn</h2>
<!-- backwards compatibility -->
<a id="schemadispute-payment-arn"></a>
<a id="schema_Dispute-Payment-Arn"></a>
<a id="tocSdispute-payment-arn"></a>
<a id="tocsdispute-payment-arn"></a>

```json
"string"
```

Acquirer Reference Number (ARN) of the original payment.

:::note
Only returned for payments made by a card.
:::

<h2 id="tocS_Dispute-Payment-Amount">Dispute-Payment-Amount</h2>
<!-- backwards compatibility -->
<a id="schemadispute-payment-amount"></a>
<a id="schema_Dispute-Payment-Amount"></a>
<a id="tocSdispute-payment-amount"></a>
<a id="tocsdispute-payment-amount"></a>

```json
0
```

Amount of the original payment expressed in minor currency units, according to the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217). For example, `7034` in `EUR` corresponds to €70.34.

:::info
Conversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).
:::

<h2 id="tocS_Dispute-Payment-Method-Type">Dispute-Payment-Method-Type</h2>
<!-- backwards compatibility -->
<a id="schemadispute-payment-method-type"></a>
<a id="schema_Dispute-Payment-Method-Type"></a>
<a id="tocSdispute-payment-method-type"></a>
<a id="tocsdispute-payment-method-type"></a>

```json
"apple_pay"
```

Type of the payment method used for the original payment.

Available values:

| Payment method `type` | Description |
| --------------------- | ----------- |
| `apple_pay` | The customer paid the order using Apple Pay. |
| `apple_tap_to_pay` | The customer paid the order using Apple Tap to Pay. |
| `card` | The customer paid the order using their credit or debit card. |
| `google_pay` | The customer paid the order using Google Pay. |
| `revolut_pay_card` | The customer paid the order via Revolut Pay using their credit or debit card. |
| `revolut_pay_account` | The customer paid the order via Revolut Pay using their Revolut account. |
| `sepa_direct_debit` | The customer paid the order via SEPA Direct Debit. |

<h2 id="tocS_Dispute-Payment-Method-Apple-Pay">Dispute-Payment-Method-Apple-Pay</h2>
<!-- backwards compatibility -->
<a id="schemadispute-payment-method-apple-pay"></a>
<a id="schema_Dispute-Payment-Method-Apple-Pay"></a>
<a id="tocSdispute-payment-method-apple-pay"></a>
<a id="tocsdispute-payment-method-apple-pay"></a>

```json
{
  "type": "apple_pay",
  "card_brand": "visa",
  "card_last_four": "stri"
}
```

Object containing details of a card used via Apple Pay.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[Dispute-Payment-Method-Type](#schemadispute-payment-method-type)|true|none|Type of the payment method used for the original payment.<br><br>Available values:<br><br>\| Payment method `type` \| Description \|<br>\| --------------------- \| ----------- \|<br>\| `apple_pay` \| The customer paid the order using Apple Pay. \|<br>\| `apple_tap_to_pay` \| The customer paid the order using Apple Tap to Pay. \|<br>\| `card` \| The customer paid the order using their credit or debit card. \|<br>\| `google_pay` \| The customer paid the order using Google Pay. \|<br>\| `revolut_pay_card` \| The customer paid the order via Revolut Pay using their credit or debit card. \|<br>\| `revolut_pay_account` \| The customer paid the order via Revolut Pay using their Revolut account. \|<br>\| `sepa_direct_debit` \| The customer paid the order via SEPA Direct Debit. \||
|card_brand|[Card-Brand-v2](#schemacard-brand-v2)|false|none|The brand of the payment card.|
|card_last_four|[Card-Last-Four](#schemacard-last-four)|false|none|The last four digits of the payment card number.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|apple_pay|
|type|apple_tap_to_pay|
|type|card|
|type|google_pay|
|type|revolut_pay_account|
|type|revolut_pay_card|
|type|sepa_direct_debit|
|card_brand|visa|
|card_brand|mastercard|
|card_brand|american_express|

<h2 id="tocS_Dispute-Payment-Method-Apple-Tap-To-Pay">Dispute-Payment-Method-Apple-Tap-To-Pay</h2>
<!-- backwards compatibility -->
<a id="schemadispute-payment-method-apple-tap-to-pay"></a>
<a id="schema_Dispute-Payment-Method-Apple-Tap-To-Pay"></a>
<a id="tocSdispute-payment-method-apple-tap-to-pay"></a>
<a id="tocsdispute-payment-method-apple-tap-to-pay"></a>

```json
{
  "type": "apple_pay"
}
```

Object containing details of a payment made via Apple Tap to Pay.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[Dispute-Payment-Method-Type](#schemadispute-payment-method-type)|true|none|Type of the payment method used for the original payment.<br><br>Available values:<br><br>\| Payment method `type` \| Description \|<br>\| --------------------- \| ----------- \|<br>\| `apple_pay` \| The customer paid the order using Apple Pay. \|<br>\| `apple_tap_to_pay` \| The customer paid the order using Apple Tap to Pay. \|<br>\| `card` \| The customer paid the order using their credit or debit card. \|<br>\| `google_pay` \| The customer paid the order using Google Pay. \|<br>\| `revolut_pay_card` \| The customer paid the order via Revolut Pay using their credit or debit card. \|<br>\| `revolut_pay_account` \| The customer paid the order via Revolut Pay using their Revolut account. \|<br>\| `sepa_direct_debit` \| The customer paid the order via SEPA Direct Debit. \||

#### Enumerated Values

|Property|Value|
|---|---|
|type|apple_pay|
|type|apple_tap_to_pay|
|type|card|
|type|google_pay|
|type|revolut_pay_account|
|type|revolut_pay_card|
|type|sepa_direct_debit|

<h2 id="tocS_Dispute-Payment-Method-Card">Dispute-Payment-Method-Card</h2>
<!-- backwards compatibility -->
<a id="schemadispute-payment-method-card"></a>
<a id="schema_Dispute-Payment-Method-Card"></a>
<a id="tocSdispute-payment-method-card"></a>
<a id="tocsdispute-payment-method-card"></a>

```json
{
  "type": "apple_pay",
  "card_brand": "visa",
  "card_last_four": "stri"
}
```

Object containing details of the card used for the payment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[Dispute-Payment-Method-Type](#schemadispute-payment-method-type)|true|none|Type of the payment method used for the original payment.<br><br>Available values:<br><br>\| Payment method `type` \| Description \|<br>\| --------------------- \| ----------- \|<br>\| `apple_pay` \| The customer paid the order using Apple Pay. \|<br>\| `apple_tap_to_pay` \| The customer paid the order using Apple Tap to Pay. \|<br>\| `card` \| The customer paid the order using their credit or debit card. \|<br>\| `google_pay` \| The customer paid the order using Google Pay. \|<br>\| `revolut_pay_card` \| The customer paid the order via Revolut Pay using their credit or debit card. \|<br>\| `revolut_pay_account` \| The customer paid the order via Revolut Pay using their Revolut account. \|<br>\| `sepa_direct_debit` \| The customer paid the order via SEPA Direct Debit. \||
|card_brand|[Card-Brand-v2](#schemacard-brand-v2)|false|none|The brand of the payment card.|
|card_last_four|[Card-Last-Four](#schemacard-last-four)|false|none|The last four digits of the payment card number.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|apple_pay|
|type|apple_tap_to_pay|
|type|card|
|type|google_pay|
|type|revolut_pay_account|
|type|revolut_pay_card|
|type|sepa_direct_debit|
|card_brand|visa|
|card_brand|mastercard|
|card_brand|american_express|

<h2 id="tocS_Dispute-Payment-Method-Google-Pay">Dispute-Payment-Method-Google-Pay</h2>
<!-- backwards compatibility -->
<a id="schemadispute-payment-method-google-pay"></a>
<a id="schema_Dispute-Payment-Method-Google-Pay"></a>
<a id="tocSdispute-payment-method-google-pay"></a>
<a id="tocsdispute-payment-method-google-pay"></a>

```json
{
  "type": "apple_pay",
  "card_brand": "visa",
  "card_last_four": "stri"
}
```

Object containing details of a card used via Google Pay.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[Dispute-Payment-Method-Type](#schemadispute-payment-method-type)|true|none|Type of the payment method used for the original payment.<br><br>Available values:<br><br>\| Payment method `type` \| Description \|<br>\| --------------------- \| ----------- \|<br>\| `apple_pay` \| The customer paid the order using Apple Pay. \|<br>\| `apple_tap_to_pay` \| The customer paid the order using Apple Tap to Pay. \|<br>\| `card` \| The customer paid the order using their credit or debit card. \|<br>\| `google_pay` \| The customer paid the order using Google Pay. \|<br>\| `revolut_pay_card` \| The customer paid the order via Revolut Pay using their credit or debit card. \|<br>\| `revolut_pay_account` \| The customer paid the order via Revolut Pay using their Revolut account. \|<br>\| `sepa_direct_debit` \| The customer paid the order via SEPA Direct Debit. \||
|card_brand|[Card-Brand-v2](#schemacard-brand-v2)|false|none|The brand of the payment card.|
|card_last_four|[Card-Last-Four](#schemacard-last-four)|false|none|The last four digits of the payment card number.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|apple_pay|
|type|apple_tap_to_pay|
|type|card|
|type|google_pay|
|type|revolut_pay_account|
|type|revolut_pay_card|
|type|sepa_direct_debit|
|card_brand|visa|
|card_brand|mastercard|
|card_brand|american_express|

<h2 id="tocS_Dispute-Payment-Method-Revolut-Pay-Account">Dispute-Payment-Method-Revolut-Pay-Account</h2>
<!-- backwards compatibility -->
<a id="schemadispute-payment-method-revolut-pay-account"></a>
<a id="schema_Dispute-Payment-Method-Revolut-Pay-Account"></a>
<a id="tocSdispute-payment-method-revolut-pay-account"></a>
<a id="tocsdispute-payment-method-revolut-pay-account"></a>

```json
{
  "type": "apple_pay"
}
```

Object containing details of a payment made via Revolut Pay account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[Dispute-Payment-Method-Type](#schemadispute-payment-method-type)|true|none|Type of the payment method used for the original payment.<br><br>Available values:<br><br>\| Payment method `type` \| Description \|<br>\| --------------------- \| ----------- \|<br>\| `apple_pay` \| The customer paid the order using Apple Pay. \|<br>\| `apple_tap_to_pay` \| The customer paid the order using Apple Tap to Pay. \|<br>\| `card` \| The customer paid the order using their credit or debit card. \|<br>\| `google_pay` \| The customer paid the order using Google Pay. \|<br>\| `revolut_pay_card` \| The customer paid the order via Revolut Pay using their credit or debit card. \|<br>\| `revolut_pay_account` \| The customer paid the order via Revolut Pay using their Revolut account. \|<br>\| `sepa_direct_debit` \| The customer paid the order via SEPA Direct Debit. \||

#### Enumerated Values

|Property|Value|
|---|---|
|type|apple_pay|
|type|apple_tap_to_pay|
|type|card|
|type|google_pay|
|type|revolut_pay_account|
|type|revolut_pay_card|
|type|sepa_direct_debit|

<h2 id="tocS_Dispute-Payment-Method-Revolut-Pay-Card">Dispute-Payment-Method-Revolut-Pay-Card</h2>
<!-- backwards compatibility -->
<a id="schemadispute-payment-method-revolut-pay-card"></a>
<a id="schema_Dispute-Payment-Method-Revolut-Pay-Card"></a>
<a id="tocSdispute-payment-method-revolut-pay-card"></a>
<a id="tocsdispute-payment-method-revolut-pay-card"></a>

```json
{
  "type": "apple_pay",
  "card_brand": "visa",
  "card_last_four": "stri"
}
```

Object containing details of a card used via Revolut Pay.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[Dispute-Payment-Method-Type](#schemadispute-payment-method-type)|true|none|Type of the payment method used for the original payment.<br><br>Available values:<br><br>\| Payment method `type` \| Description \|<br>\| --------------------- \| ----------- \|<br>\| `apple_pay` \| The customer paid the order using Apple Pay. \|<br>\| `apple_tap_to_pay` \| The customer paid the order using Apple Tap to Pay. \|<br>\| `card` \| The customer paid the order using their credit or debit card. \|<br>\| `google_pay` \| The customer paid the order using Google Pay. \|<br>\| `revolut_pay_card` \| The customer paid the order via Revolut Pay using their credit or debit card. \|<br>\| `revolut_pay_account` \| The customer paid the order via Revolut Pay using their Revolut account. \|<br>\| `sepa_direct_debit` \| The customer paid the order via SEPA Direct Debit. \||
|card_brand|[Card-Brand-v2](#schemacard-brand-v2)|false|none|The brand of the payment card.|
|card_last_four|[Card-Last-Four](#schemacard-last-four)|false|none|The last four digits of the payment card number.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|apple_pay|
|type|apple_tap_to_pay|
|type|card|
|type|google_pay|
|type|revolut_pay_account|
|type|revolut_pay_card|
|type|sepa_direct_debit|
|card_brand|visa|
|card_brand|mastercard|
|card_brand|american_express|

<h2 id="tocS_Dispute-Payment-Method-Sepa-Direct-Debit">Dispute-Payment-Method-Sepa-Direct-Debit</h2>
<!-- backwards compatibility -->
<a id="schemadispute-payment-method-sepa-direct-debit"></a>
<a id="schema_Dispute-Payment-Method-Sepa-Direct-Debit"></a>
<a id="tocSdispute-payment-method-sepa-direct-debit"></a>
<a id="tocsdispute-payment-method-sepa-direct-debit"></a>

```json
{
  "type": "apple_pay",
  "debtor_iban_last_four": "stri",
  "debtor_name": "string",
  "mandate_reference": "string"
}
```

Object containing details of a SEPA Direct Debit payment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[Dispute-Payment-Method-Type](#schemadispute-payment-method-type)|true|none|Type of the payment method used for the original payment.<br><br>Available values:<br><br>\| Payment method `type` \| Description \|<br>\| --------------------- \| ----------- \|<br>\| `apple_pay` \| The customer paid the order using Apple Pay. \|<br>\| `apple_tap_to_pay` \| The customer paid the order using Apple Tap to Pay. \|<br>\| `card` \| The customer paid the order using their credit or debit card. \|<br>\| `google_pay` \| The customer paid the order using Google Pay. \|<br>\| `revolut_pay_card` \| The customer paid the order via Revolut Pay using their credit or debit card. \|<br>\| `revolut_pay_account` \| The customer paid the order via Revolut Pay using their Revolut account. \|<br>\| `sepa_direct_debit` \| The customer paid the order via SEPA Direct Debit. \||
|debtor_iban_last_four|[Sepa-Direct-Debit-Debtor-Iban-Last-Four](#schemasepa-direct-debit-debtor-iban-last-four)|false|none|The last four digits of the debtor's IBAN.|
|debtor_name|[Sepa-Direct-Debit-Debtor-Name](#schemasepa-direct-debit-debtor-name)|false|none|The full name of the debtor as provided in the mandate.|
|mandate_reference|[Sepa-Direct-Debit-Mandate-Reference](#schemasepa-direct-debit-mandate-reference)|false|none|The unique mandate reference generated by Revolut. Include this in pre-debit notifications sent to your customers.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|apple_pay|
|type|apple_tap_to_pay|
|type|card|
|type|google_pay|
|type|revolut_pay_account|
|type|revolut_pay_card|
|type|sepa_direct_debit|

<h2 id="tocS_Dispute-Payment-Method">Dispute-Payment-Method</h2>
<!-- backwards compatibility -->
<a id="schemadispute-payment-method"></a>
<a id="schema_Dispute-Payment-Method"></a>
<a id="tocSdispute-payment-method"></a>
<a id="tocsdispute-payment-method"></a>

```json
{
  "type": "apple_pay",
  "card_brand": "visa",
  "card_last_four": "stri"
}
```

Payment method used for the original payment.

Use the `type` field to determine the specific payment method variant.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Dispute-Payment-Method-Apple-Pay](#schemadispute-payment-method-apple-pay)|false|none|Object containing details of a card used via Apple Pay.|
|*oneOf*|[Dispute-Payment-Method-Apple-Tap-To-Pay](#schemadispute-payment-method-apple-tap-to-pay)|false|none|Object containing details of a payment made via Apple Tap to Pay.|
|*oneOf*|[Dispute-Payment-Method-Card](#schemadispute-payment-method-card)|false|none|Object containing details of the card used for the payment.|
|*oneOf*|[Dispute-Payment-Method-Google-Pay](#schemadispute-payment-method-google-pay)|false|none|Object containing details of a card used via Google Pay.|
|*oneOf*|[Dispute-Payment-Method-Revolut-Pay-Account](#schemadispute-payment-method-revolut-pay-account)|false|none|Object containing details of a payment made via Revolut Pay account.|
|*oneOf*|[Dispute-Payment-Method-Revolut-Pay-Card](#schemadispute-payment-method-revolut-pay-card)|false|none|Object containing details of a card used via Revolut Pay.|
|*oneOf*|[Dispute-Payment-Method-Sepa-Direct-Debit](#schemadispute-payment-method-sepa-direct-debit)|false|none|Object containing details of a SEPA Direct Debit payment.|

<h2 id="tocS_Dispute-Payment">Dispute-Payment</h2>
<!-- backwards compatibility -->
<a id="schemadispute-payment"></a>
<a id="schema_Dispute-Payment"></a>
<a id="tocSdispute-payment"></a>
<a id="tocsdispute-payment"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "arn": "string",
  "amount": 0,
  "currency": "str",
  "payment_method": {
    "type": "apple_pay",
    "card_brand": "visa",
    "card_last_four": "stri"
  }
}
```

Object containing the details of the original payment associated with the dispute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Dispute-Payment-Id](#schemadispute-payment-id)|false|none|The ID of the original payment that was disputed.|
|order_id|[Dispute-Payment-Order-Id](#schemadispute-payment-order-id)|false|none|The ID of the order linked to the original disputed payment.|
|created_at|[Dispute-Payment-Created-At](#schemadispute-payment-created-at)|false|none|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time when the original disputed payment was created.|
|arn|[Dispute-Payment-Arn](#schemadispute-payment-arn)|false|none|Acquirer Reference Number (ARN) of the original payment.<br><br>:::note<br>Only returned for payments made by a card.<br>:::|
|amount|[Dispute-Payment-Amount](#schemadispute-payment-amount)|false|none|Amount of the original payment expressed in minor currency units, according to the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217). For example, `7034` in `EUR` corresponds to €70.34.<br><br>:::info<br>Conversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).<br>:::|
|currency|[Currency](#schemacurrency)|false|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|payment_method|[Dispute-Payment-Method](#schemadispute-payment-method)|false|none|Payment method used for the original payment.<br><br>Use the `type` field to determine the specific payment method variant.|

<h2 id="tocS_Dispute">Dispute</h2>
<!-- backwards compatibility -->
<a id="schemadispute"></a>
<a id="schema_Dispute"></a>
<a id="tocSdispute"></a>
<a id="tocsdispute"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "state": "needs_response",
  "substate": "arbitration",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "response_due_date": "1970-01-01T00:00:00Z",
  "reason_code": "string",
  "reason_description": "string",
  "amount": 0,
  "currency": "str",
  "payment": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "created_at": "1970-01-01T00:00:00Z",
    "arn": "string",
    "amount": 0,
    "currency": "str",
    "payment_method": {
      "type": "apple_pay",
      "card_brand": "visa",
      "card_last_four": "stri"
    }
  }
}
```

A dispute raised against a payment, including its state, reason, amount, and associated payment details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|Unique identifier of the dispute.|
|state|string|false|none|Represents the state of the dispute.<br><br>It indicates either the final outcome of the dispute or if further action is required.<br><br>\| Parameter value \| Description \|<br>\| --------------- \| ----------- \|<br>\| `needs_response` \| Indicates that the dispute requires a response or action from the merchant. \|<br>\| `under_review` \| Indicates that the dispute is currently under review, and the outcome is pending. \|<br>\| `won` \| Indicates that the dispute has been resolved in favor of the merchant. \|<br>\| `lost` \| Indicates that the dispute has been resolved against the merchant. \||
|substate|string|false|none|Provides additional granularity about the dispute state.<br><br>It details the progression of the dispute process, showing the current stage or phase.<br><br>\| Parameter value \| Description \|<br>\| --------------- \| ----------- \|<br>\| `new` \| The dispute has been recently created and is in the initial phase, awaiting further processing. \|<br>\| `lost_expired` \| The dispute has been lost due to expiration, likely because the merchant did not respond within the required timeframe. \|<br>\| `pre_arbitration` \| The dispute is in the pre-arbitration phase, where preliminary evidence is being gathered before a formal arbitration process. \|<br>\| `won_pre_arbitration`\| The merchant secured a win during the pre-arbitration phase based on the evidence provided. \|<br>\| `lost_pre_arbitration` \| The dispute was lost during the pre-arbitration phase, indicating that the preliminary review did not favor the merchant. \|<br>\| `lost_accepted` \| The loss has been accepted as final, implying that no further contestation is likely or needed. \|<br>\| `arbitration` \| The dispute has escalated to the arbitration stage, where a neutral third party is reviewing the evidence. \|<br>\| `won_arbitration` \| The merchant won the dispute during the arbitration process. \|<br>\| `lost_arbitration` \| The merchant lost the dispute during the arbitration process. \||
|created_at|string(date-time)|false|none|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time when the dispute was created.|
|updated_at|string(date-time)|false|none|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time when the dispute was last updated.|
|response_due_date|string(date-time)|false|none|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time until when the merchant needs to respond to the dispute.<br><br>The response time by default is 15 days after the dispute is created. If no response is provided by this date, the dispute transitions to:<br>  - `state: lost`<br>  - `substate: lost_expired` |
|reason_code|string|false|none|Dispute reason code from the payment scheme, following standard formats defined by individual providers.<br><br>:::info<br>For complete, official lists of dispute codes, see:  <br>- **Visa**: [Visa Core Rules and Visa Product and Service Rules](https://corporate.visa.com/content/dam/VCOM/download/about-visa/visa-rules-public.pdf) <br>- **Mastercard**: [Chargeback Guide - Merchant Edition](https://www.mastercard.com/content/dam/public/mastercardcom/na/global-site/documents/chargeback-guide.pdf)<br>- **American Express**: [Chargeback Codes](https://www.americanexpress.com/content/dam/amex/au/en/merchant/static/chargebackcodeguide.pdf)<br>:::|
|reason_description|string|false|none|Provides a human-readable explanation for the dispute reason codes.|
|amount|integer(int64)|false|none|Disputed amount expressed in minor currency units, according to the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217). For example, `7034` in `EUR` corresponds to €70.34.<br><br>:::info<br>Conversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).<br>:::|
|currency|[Currency](#schemacurrency)|false|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|payment|[Dispute-Payment](#schemadispute-payment)|false|none|Object containing the details of the original payment associated with the dispute.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|needs_response|
|state|under_review|
|state|won|
|state|lost|
|substate|arbitration|
|substate|lost_accepted|
|substate|lost_arbitration|
|substate|lost_expired|
|substate|lost_pre_arbitration|
|substate|lost_representment|
|substate|new|
|substate|pre_arbitration|
|substate|representment|
|substate|won_arbitration|
|substate|won_pre_arbitration|
|substate|won_representment|
|substate|won_reversal|

<h2 id="tocS_Disputes">Disputes</h2>
<!-- backwards compatibility -->
<a id="schemadisputes"></a>
<a id="schema_Disputes"></a>
<a id="tocSdisputes"></a>
<a id="tocsdisputes"></a>

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "state": "needs_response",
    "substate": "arbitration",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "response_due_date": "1970-01-01T00:00:00Z",
    "reason_code": "string",
    "reason_description": "string",
    "amount": 0,
    "currency": "str",
    "payment": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "created_at": "1970-01-01T00:00:00Z",
      "arn": "string",
      "amount": 0,
      "currency": "str",
      "payment_method": {
        "type": "apple_pay",
        "card_brand": "visa",
        "card_last_four": "stri"
      }
    }
  }
]
```

An array containing a list of disputes.

<h2 id="tocS_Dispute-Evidence-Creation">Dispute-Evidence-Creation</h2>
<!-- backwards compatibility -->
<a id="schemadispute-evidence-creation"></a>
<a id="schema_Dispute-Evidence-Creation"></a>
<a id="tocSdispute-evidence-creation"></a>
<a id="tocsdispute-evidence-creation"></a>

```json
{
  "file": "string"
}
```

Request body for uploading a single piece of dispute evidence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string(binary)|true|none|The single evidence file to upload, sent as a multipart form part named `file`.<br><br>The part must include a `Content-Type` header specifying the media type of the file. Allowed types: `application/pdf`, `image/png`, `image/jpeg`.<br><br>Maximum file size: `10MB`.|

<h2 id="tocS_Dispute-Evidence">Dispute-Evidence</h2>
<!-- backwards compatibility -->
<a id="schemadispute-evidence"></a>
<a id="schema_Dispute-Evidence"></a>
<a id="tocSdispute-evidence"></a>
<a id="tocsdispute-evidence"></a>

```json
{
  "id": "ad2ca3d0-67e9-4cea-b455-e39dd319113d"
}
```

The ID of an uploaded piece of dispute evidence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the uploaded evidence.|

<h2 id="tocS_Dispute-Challenge-Reason">Dispute-Challenge-Reason</h2>
<!-- backwards compatibility -->
<a id="schemadispute-challenge-reason"></a>
<a id="schema_Dispute-Challenge-Reason"></a>
<a id="tocSdispute-challenge-reason"></a>
<a id="tocsdispute-challenge-reason"></a>

```json
"refund_already_issued"
```

The reason for challenging the dispute.

<h2 id="tocS_Dispute-Challenge-Comment">Dispute-Challenge-Comment</h2>
<!-- backwards compatibility -->
<a id="schemadispute-challenge-comment"></a>
<a id="schema_Dispute-Challenge-Comment"></a>
<a id="tocSdispute-challenge-comment"></a>
<a id="tocsdispute-challenge-comment"></a>

```json
"Refund PDF attached as evidence."
```

Additional explanation or comment for the challenge, if needed.

<h2 id="tocS_Dispute-Challenge-Evidences">Dispute-Challenge-Evidences</h2>
<!-- backwards compatibility -->
<a id="schemadispute-challenge-evidences"></a>
<a id="schema_Dispute-Challenge-Evidences"></a>
<a id="tocSdispute-challenge-evidences"></a>
<a id="tocsdispute-challenge-evidences"></a>

```json
[
  "121ac27c-b00a-44d0-9120-efeeec7c912d",
  "0010e98d-0653-4dbe-8a4f-70cd5e9491f2"
]
```

A list of IDs of previously uploaded evidence files to associate with this challenge.

:::warning
Each evidence ID can only be used for **a single challenge**. This means, that evidences already assigned to a challenge **cannot be reused** for other challenges.
:::

<h2 id="tocS_Dispute-Challenge">Dispute-Challenge</h2>
<!-- backwards compatibility -->
<a id="schemadispute-challenge"></a>
<a id="schema_Dispute-Challenge"></a>
<a id="tocSdispute-challenge"></a>
<a id="tocsdispute-challenge"></a>

```json
{
  "reason": "refund_already_issued",
  "comment": "Refund PDF attached as evidence.",
  "evidences": [
    "121ac27c-b00a-44d0-9120-efeeec7c912d",
    "0010e98d-0653-4dbe-8a4f-70cd5e9491f2"
  ]
}
```

A dispute challenge response submitted by the merchant, including reason, comment, and supporting evidence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|[Dispute-Challenge-Reason](#schemadispute-challenge-reason)|true|none|The reason for challenging the dispute.|
|comment|[Dispute-Challenge-Comment](#schemadispute-challenge-comment)|false|none|Additional explanation or comment for the challenge, if needed.|
|evidences|[Dispute-Challenge-Evidences](#schemadispute-challenge-evidences)|true|none|A list of IDs of previously uploaded evidence files to associate with this challenge.<br><br>:::warning<br>Each evidence ID can only be used for **a single challenge**. This means, that evidences already assigned to a challenge **cannot be reused** for other challenges.<br>:::|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|product_already_delivered|
|reason|refund_already_issued|
|reason|disagree_with_customers_claim|

<h2 id="tocS_Payment-Retrieval-v2">Payment-Retrieval-v2</h2>
<!-- backwards compatibility -->
<a id="schemapayment-retrieval-v2"></a>
<a id="schema_Payment-Retrieval-v2"></a>
<a id="tocSpayment-retrieval-v2"></a>
<a id="tocspayment-retrieval-v2"></a>

```json
{
  "order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "state": "pending",
  "decline_reason": "3ds_challenge_abandoned",
  "bank_message": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "token": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": 600,
  "authorised_amount": 600,
  "currency": "str",
  "settled_amount": 0,
  "settled_currency": "string",
  "payment_method": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "type": "apple_pay",
    "card_brand": "visa",
    "funding": "credit",
    "commercial": true,
    "card_country_code": "string",
    "card_bin": "string",
    "card_last_four": "stri",
    "card_expiry": "string",
    "cardholder_name": "string",
    "checks": {
      "three_ds": {
        "eci": "string",
        "state": "verified",
        "version": 0
      },
      "cvv_verification": "match",
      "address": "match",
      "postcode": "match",
      "cardholder": "match"
    },
    "authorisation_code": "T483XF",
    "arn": "74839572049583726403928",
    "capture_deadline": "1970-01-01T00:00:00Z",
    "terminal_hardware_id": "string",
    "fingerprint": "1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=",
    "network_transaction_id": "string"
  },
  "authentication_challenge": {
    "type": "three_ds",
    "acs_url": "http://example.com"
  },
  "billing_address": {
    "street_line_1": "string",
    "street_line_2": "string",
    "region": "string",
    "city": "string",
    "country_code": "st",
    "postcode": "string"
  },
  "risk_level": "low",
  "fees": [
    {
      "type": "fx",
      "amount": 0,
      "currency": "string"
    }
  ],
  "payer": {
    "email": "user@example.com",
    "phone": "string"
  }
}
```

Represents a payment for an order.

For pre-authorised payments, the `authorised_amount` field tracks the currently authorised amount, which may differ from `amount` during incremental authorisation processing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|order_id|string(uuid)|false|none|The ID of the associated order.|
|id|[Payment-Id](#schemapayment-id)|true|none|The ID of the payment.|
|state|[Payment-State-v2](#schemapayment-state-v2)|true|none|The status of the payment.|
|decline_reason|[Decline-Reason-v2](#schemadecline-reason-v2)|false|none|The reason for a `failed` or `declined` payment.<br><br>A failed or declined payment can result from multiple reasons. To learn more, check our [failure reasons](https://developer.revolut.com/docs/guides/merchant/reference/error-codes/decline-reasons).|
|bank_message|[Bank-Message](#schemabank-message)|false|none|The reason for a `failed` or `declined` payment, sent by the financial institution processing the payment.|
|created_at|[Payment-Created](#schemapayment-created)|true|none|The date and time the payment was created.|
|updated_at|[Payment-Updated](#schemapayment-updated)|true|none|The date and time the payment was last updated.|
|token|[Payment-Token](#schemapayment-token)|false|none|Temporary token of the payment used to fetch the reward offer during checkout and link user registrations to the given offers. <br><br>The token is only valid for a limited time.|
|amount|[Payment-Amount](#schemapayment-amount)|true|none|The payment amount in minor units (e.g., cents). The value of this field depends on the payment type and state.<br><br>\| Payment type \| State \| Amount value \|<br>\|--------------\|-------\|--------------\|<br>\| Standard payment \| Any \| Total payment amount \|<br>\| Pre-authorised payment \| `authorisation_started` \| New amount being authorised (during increment processing) \|<br>\| Pre-authorised payment \| `authorised` \| Currently authorised amount (equals `authorised_amount`) \|<br><br>:::info<br>For pre-authorised payments, see the `authorised_amount` field for tracking the currently authorised amount separately.<br>:::|
|authorised_amount|[Payment-Authorised-Amount](#schemapayment-authorised-amount)|false|none|The currently authorised amount for this payment (in minor units).<br><br>For pre-authorised payments with incremental authorization:<br>- Initially equals the `amount` field<br>- Remains unchanged during increment processing<br>- Updates to new amount upon successful increment<br>- Remains at original amount if increment is declined<br><br>For standard payments, this field may not be present or will equal the `amount` field.|
|currency|[Currency](#schemacurrency)|false|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|settled_amount|[Payment-Settled-Amount](#schemapayment-settled-amount)|false|none|The amount of the settled payment (minor currency unit). For example, `7034` stands for €70.34.|
|settled_currency|[Payment-Settled-Currency](#schemapayment-settled-currency)|false|none|The currency of the settled payment. [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|payment_method|[Payment-Method-v2](#schemapayment-method-v2)|false|none|The details of the payment method used to make the payment.|
|authentication_challenge|[Authentication-Challenge](#schemaauthentication-challenge)|false|none|Details about the authentication challenge that should be performed to complete the authentication process. For more information about Revolut's 3DS solution, see: [3D Secure overview](https://developer.revolut.com/docs/guides/merchant/reference/3d-secure).<br><br>Only returned if the payment's state is `authentication_challenge`.|
|billing_address|[Address-v2](#schemaaddress-v2)|false|none|Object containing address details.|
|risk_level|[Payment-Risk-Level](#schemapayment-risk-level)|false|none|The risk level of the card.<br><br>If the risk level is `high`, the payment might be declined.|
|fees|[Fees](#schemafees)|false|none|The details of the order fee.|
|payer|[Payer](#schemapayer)|false|none|The person who made the payment. This object is present when an email or phone number is provided during the payment flow.<br><br>Capturing payer details lets you identify exactly who authorised the charge, reach the right person for receipts or refund queries, and support compliance or fraud-review workflows where the paying identity matters.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|pending|
|state|authentication_challenge|
|state|authentication_verified|
|state|authorisation_started|
|state|authorisation_passed|
|state|authorised|
|state|capture_started|
|state|captured|
|state|refund_validated|
|state|refund_started|
|state|cancellation_started|
|state|declining|
|state|completing|
|state|cancelling|
|state|failing|
|state|completed|
|state|declined|
|state|soft_declined|
|state|cancelled|
|state|failed|
|decline_reason|3ds_challenge_abandoned|
|decline_reason|3ds_challenge_failed|
|decline_reason|3ds_challenge_failed_manually|
|decline_reason|authentication_required|
|decline_reason|card_not_enrolled_to_three_ds|
|decline_reason|cardholder_name_missing|
|decline_reason|currency_not_supported|
|decline_reason|customer_challenge_abandoned|
|decline_reason|customer_challenge_failed|
|decline_reason|customer_date_of_birth_mismatch|
|decline_reason|customer_name_mismatch|
|decline_reason|customer_verification_failed|
|decline_reason|customer_wallet_limits_exceeded|
|decline_reason|do_not_honour|
|decline_reason|expired_card|
|decline_reason|high_risk|
|decline_reason|insufficient_funds|
|decline_reason|insufficient_refundable_amount|
|decline_reason|invalid_account|
|decline_reason|invalid_address|
|decline_reason|invalid_amount|
|decline_reason|invalid_card|
|decline_reason|invalid_country|
|decline_reason|invalid_cvv|
|decline_reason|invalid_email|
|decline_reason|invalid_expiry|
|decline_reason|invalid_merchant|
|decline_reason|invalid_phone|
|decline_reason|invalid_pin|
|decline_reason|invalid_transaction|
|decline_reason|issuer_decline|
|decline_reason|issuer_not_available|
|decline_reason|law_violation|
|decline_reason|lost_card|
|decline_reason|new_card_not_unblocked|
|decline_reason|no_common_supported_three_ds_version|
|decline_reason|no_such_issuer|
|decline_reason|payment_attempt_blocked|
|decline_reason|pick_up_card|
|decline_reason|pin_required|
|decline_reason|pin_try_exceeded|
|decline_reason|rejected_by_customer|
|decline_reason|restricted_card|
|decline_reason|security_violation|
|decline_reason|stolen_card|
|decline_reason|suspected_fraud|
|decline_reason|technical_error|
|decline_reason|transaction_not_allowed|
|decline_reason|transaction_not_allowed_for_cardholder|
|decline_reason|unknown|
|decline_reason|unknown_card|
|decline_reason|withdrawal_frequency_exceeded|
|decline_reason|withdrawal_limit_exceeded|
|risk_level|low|
|risk_level|high|

<h2 id="tocS_Subscription-Plan-Id">Subscription-Plan-Id</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-plan-id"></a>
<a id="schema_Subscription-Plan-Id"></a>
<a id="tocSsubscription-plan-id"></a>
<a id="tocssubscription-plan-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

Unique identifier for the subscription plan.

<h2 id="tocS_Subscription-Plan-Name">Subscription-Plan-Name</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-plan-name"></a>
<a id="schema_Subscription-Plan-Name"></a>
<a id="tocSsubscription-plan-name"></a>
<a id="tocssubscription-plan-name"></a>

```json
"string"
```

The name of the subscription plan.

<h2 id="tocS_Subscription-Plan-Trial-Duration">Subscription-Plan-Trial-Duration</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-plan-trial-duration"></a>
<a id="schema_Subscription-Plan-Trial-Duration"></a>
<a id="tocSsubscription-plan-trial-duration"></a>
<a id="tocssubscription-plan-trial-duration"></a>

```json
"P14D"
```

The default trial period duration for this subscription plan in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) (e.g., "P14D" for 14 days).

This value serves as the default trial duration for all subscriptions created from this plan. Individual subscriptions can override this value at creation time.

:::note
Only days (`D`) are allowed. Time components such as hours, minutes, or seconds are not permitted.
:::

<h2 id="tocS_Subscription-Plan-State">Subscription-Plan-State</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-plan-state"></a>
<a id="schema_Subscription-Plan-State"></a>
<a id="tocSsubscription-plan-state"></a>
<a id="tocssubscription-plan-state"></a>

```json
"active"
```

The state of the subscription plan.

| State | Description |
| ----- | ----------- |
| `active` | The plan is active and can be used to create new subscriptions. |
| `deactivated` | The plan has been deactivated and cannot be used for new subscriptions. |

<h2 id="tocS_Subscription-Plan-Created">Subscription-Plan-Created</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-plan-created"></a>
<a id="schema_Subscription-Plan-Created"></a>
<a id="tocSsubscription-plan-created"></a>
<a id="tocssubscription-plan-created"></a>

```json
"1970-01-01T00:00:00Z"
```

The date and time the subscription plan was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

<h2 id="tocS_Subscription-Plan-Updated">Subscription-Plan-Updated</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-plan-updated"></a>
<a id="schema_Subscription-Plan-Updated"></a>
<a id="tocSsubscription-plan-updated"></a>
<a id="tocssubscription-plan-updated"></a>

```json
"1970-01-01T00:00:00Z"
```

The date and time the subscription plan was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

<h2 id="tocS_Subscription-Plan-Variation-Id">Subscription-Plan-Variation-Id</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-plan-variation-id"></a>
<a id="schema_Subscription-Plan-Variation-Id"></a>
<a id="tocSsubscription-plan-variation-id"></a>
<a id="tocssubscription-plan-variation-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

Unique identifier for the subscription plan variation.

<h2 id="tocS_Subscription-Plan-Phase-Id">Subscription-Plan-Phase-Id</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-plan-phase-id"></a>
<a id="schema_Subscription-Plan-Phase-Id"></a>
<a id="tocSsubscription-plan-phase-id"></a>
<a id="tocssubscription-plan-phase-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

Unique identifier for the subscription plan phase.

<h2 id="tocS_Subscription-Plan-Ordinal">Subscription-Plan-Ordinal</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-plan-ordinal"></a>
<a id="schema_Subscription-Plan-Ordinal"></a>
<a id="tocSsubscription-plan-ordinal"></a>
<a id="tocssubscription-plan-ordinal"></a>

```json
1
```

The sequential order of this phase in the subscription billing lifecycle.

Phases execute in ascending order based on this value:
- Phase with `ordinal=1` executes first
- Phase with `ordinal=2` executes second, and so on

When a phase completes its `cycle_count`, the subscription automatically progresses to the phase with the next `ordinal` value.

**Example**: A subscription with phases ordered as `ordinal=1` (trial), `ordinal=2` (regular), `ordinal=3` (discounted) will progress through them in that sequence.

<h2 id="tocS_Cycle-Duration">Cycle-Duration</h2>
<!-- backwards compatibility -->
<a id="schemacycle-duration"></a>
<a id="schema_Cycle-Duration"></a>
<a id="tocScycle-duration"></a>
<a id="tocscycle-duration"></a>

```json
"string"
```

The length of each billing cycle for this phase in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations).

This determines how often the customer is billed during this phase. The total time spent in a phase is `cycle_duration × cycle_count`.

**Common durations**:

| Duration | Description |
| -------- | ----------- |
| `P1M` | 1 month |
| `P1Y` | 1 year |
| `P15D` | 15 days |
| `P1W` | 1 week |
| `PT2H` | 2 hours |

**Example**: If `cycle_duration=P1M` and `cycle_count=12`, the customer will be billed monthly for 12 months (1 year total).

<h2 id="tocS_Cycle-Count">Cycle-Count</h2>
<!-- backwards compatibility -->
<a id="schemacycle-count"></a>
<a id="schema_Cycle-Count"></a>
<a id="tocScycle-count"></a>
<a id="tocscycle-count"></a>

```json
1
```

Number of billing cycles for this phase before moving to the next phase.

| Value | Behavior |
| ----- | -------- |
| `null` or omitted | Phase continues indefinitely. The subscription remains in this phase with no automatic progression. |
| Specific number (e.g., `1`, `3`, `12`) | After completing this many billing cycles, the subscription automatically moves to the next phase as determined by the `ordinal` field. |

**Example**: If `cycle_count=3` and `cycle_duration=P1M`, the subscription will complete 3 monthly cycles then move to the phase with the next highest `ordinal` value.

:::note
If no next phase exists in after a cycle with a specific `cycle_count`, the subscription will automatically stop when it completes its cycles.
:::

<h2 id="tocS_Subscription-Amount">Subscription-Amount</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-amount"></a>
<a id="schema_Subscription-Amount"></a>
<a id="tocSsubscription-amount"></a>
<a id="tocssubscription-amount"></a>

```json
0
```

Subscription amount in minor currency units (e.g., cents for USD, pence for GBP).

For example, `9900` in `GBP` represents £99.00.

:::info
Conversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).
:::

<h2 id="tocS_Subscription-Item-Id">Subscription-Item-Id</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-item-id"></a>
<a id="schema_Subscription-Item-Id"></a>
<a id="tocSsubscription-item-id"></a>
<a id="tocssubscription-item-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The unique identifier of the subscription item.

<h2 id="tocS_Subscription-Item-Name">Subscription-Item-Name</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-item-name"></a>
<a id="schema_Subscription-Item-Name"></a>
<a id="tocSsubscription-item-name"></a>
<a id="tocssubscription-item-name"></a>

```json
"Base Subscription Fee"
```

The name of the subscription item.

<h2 id="tocS_Subscription-Item-Type">Subscription-Item-Type</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-item-type"></a>
<a id="schema_Subscription-Item-Type"></a>
<a id="tocSsubscription-item-type"></a>
<a id="tocssubscription-item-type"></a>

```json
"flat"
```

The type of subscription item.

<h2 id="tocS_Subscription-Item-Package-Size">Subscription-Item-Package-Size</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-item-package-size"></a>
<a id="schema_Subscription-Item-Package-Size"></a>
<a id="tocSsubscription-item-package-size"></a>
<a id="tocssubscription-item-package-size"></a>

```json
1
```

The number of units grouped together as a single billable package. Used to enable pricing of items that are too inexpensive to charge individually.

For example, a `package_size` of `1000` with a unit price of 10 minor units (£0.10 in GBP) lets you sell 1000 tokens for £0.10 — effectively pricing each token at £0.0001, below the minimum chargeable amount.

Set to `1` to price each unit individually.

<h2 id="tocS_Subscription-Item-Unit">Subscription-Item-Unit</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-item-unit"></a>
<a id="schema_Subscription-Item-Unit"></a>
<a id="tocSsubscription-item-unit"></a>
<a id="tocssubscription-item-unit"></a>

```json
"subscription"
```

The unit of measurement for the item.

<h2 id="tocS_Subscription-Item-Quantity">Subscription-Item-Quantity</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-item-quantity"></a>
<a id="schema_Subscription-Item-Quantity"></a>
<a id="tocSsubscription-item-quantity"></a>
<a id="tocssubscription-item-quantity"></a>

```json
1
```

The quantity of the item.

<h2 id="tocS_Subscription-Item-Flat">Subscription-Item-Flat</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-item-flat"></a>
<a id="schema_Subscription-Item-Flat"></a>
<a id="tocSsubscription-item-flat"></a>
<a id="tocssubscription-item-flat"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "Base Subscription Fee",
  "type": "flat",
  "package_size": 1,
  "unit": "subscription",
  "quantity": 1,
  "amount": 9900,
  "currency": "str"
}
```

Object structure of flat subscription item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Subscription-Item-Id](#schemasubscription-item-id)|true|none|The unique identifier of the subscription item.|
|name|[Subscription-Item-Name](#schemasubscription-item-name)|true|none|The name of the subscription item.|
|type|[Subscription-Item-Type](#schemasubscription-item-type)|true|none|The type of subscription item.|
|package_size|[Subscription-Item-Package-Size](#schemasubscription-item-package-size)|false|none|The number of units grouped together as a single billable package. Used to enable pricing of items that are too inexpensive to charge individually.<br><br>For example, a `package_size` of `1000` with a unit price of 10 minor units (£0.10 in GBP) lets you sell 1000 tokens for £0.10 — effectively pricing each token at £0.0001, below the minimum chargeable amount.<br><br>Set to `1` to price each unit individually.|
|unit|[Subscription-Item-Unit](#schemasubscription-item-unit)|true|none|The unit of measurement for the item.|
|quantity|[Subscription-Item-Quantity](#schemasubscription-item-quantity)|true|none|The quantity of the item.|
|amount|integer(int64)|true|none|Amount in minor currency units (e.g., cents for USD).|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|

#### Enumerated Values

|Property|Value|
|---|---|
|type|flat|
|type|usage|

<h2 id="tocS_Subscription-Item-Tier">Subscription-Item-Tier</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-item-tier"></a>
<a id="schema_Subscription-Item-Tier"></a>
<a id="tocSsubscription-item-tier"></a>
<a id="tocssubscription-item-tier"></a>

```json
{
  "upper_quantity_threshold": 100,
  "amount": 500
}
```

A pricing tier for a subscription item, defining a per-unit amount within a quantity range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|upper_quantity_threshold|number \| null|false|none|The upper bound of the tier (exclusive). Null means unlimited.|
|amount|integer(int64)|true|none|Per-unit amount in minor currency units (e.g., cents for USD) charged for usage within this tier's threshold range.|

<h2 id="tocS_Subscription-Item-Code">Subscription-Item-Code</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-item-code"></a>
<a id="schema_Subscription-Item-Code"></a>
<a id="tocSsubscription-item-code"></a>
<a id="tocssubscription-item-code"></a>

```json
"api_calls"
```

A merchant-defined identifier for a usage-based subscription item. You set this code on each usage item when creating a subscription plan, and supply it when reporting consumption on [Create a subscription usage endpoint](https://developer.revolut.com/docs/api/merchant#create-subscription-usage) to target the correct metered item.

This allows a subscription with multiple usage items (e.g., `api_calls` and `storage_gb`) to receive consumption reports against the right item without relying on internal IDs.

The code must be unique within a plan phase.

<h2 id="tocS_Usage-Aggregation-Method">Usage-Aggregation-Method</h2>
<!-- backwards compatibility -->
<a id="schemausage-aggregation-method"></a>
<a id="schema_Usage-Aggregation-Method"></a>
<a id="tocSusage-aggregation-method"></a>
<a id="tocsusage-aggregation-method"></a>

```json
"sum"
```

The method used to aggregate usage events over a billing cycle to calculate the chargeable amount.

| Value | Behaviour |
| ----- | --------- |
| `sum` | Totals all reported usage events during the cycle. Use for cumulative metrics (e.g., API calls, data transferred). |
| `latest` | Uses the most recently reported value at the end of the cycle. If no usage is reported in a cycle, `0` is used — values do not carry over from previous cycles. Use for gauge-style metrics (e.g., active seats). |
| `max` | Uses the peak value reported during the cycle. Use for capacity-based billing (e.g., max concurrent connections). |

<h2 id="tocS_Subscription-Item-Usage">Subscription-Item-Usage</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-item-usage"></a>
<a id="schema_Subscription-Item-Usage"></a>
<a id="tocSsubscription-item-usage"></a>
<a id="tocssubscription-item-usage"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "Base Subscription Fee",
  "type": "flat",
  "package_size": 1,
  "unit": "subscription",
  "amount": 10,
  "currency": "str",
  "tiers": [
    {
      "upper_quantity_threshold": 100,
      "amount": 500
    }
  ],
  "code": "api_calls",
  "usage_aggregation_method": "sum"
}
```

Object structure of usage subscription item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Subscription-Item-Id](#schemasubscription-item-id)|true|none|The unique identifier of the subscription item.|
|name|[Subscription-Item-Name](#schemasubscription-item-name)|true|none|The name of the subscription item.|
|type|[Subscription-Item-Type](#schemasubscription-item-type)|true|none|The type of subscription item.|
|package_size|[Subscription-Item-Package-Size](#schemasubscription-item-package-size)|false|none|The number of units grouped together as a single billable package. Used to enable pricing of items that are too inexpensive to charge individually.<br><br>For example, a `package_size` of `1000` with a unit price of 10 minor units (£0.10 in GBP) lets you sell 1000 tokens for £0.10 — effectively pricing each token at £0.0001, below the minimum chargeable amount.<br><br>Set to `1` to price each unit individually.|
|unit|[Subscription-Item-Unit](#schemasubscription-item-unit)|true|none|The unit of measurement for the item.|
|amount|integer(int64)|false|none|Flat amount per unit in minor currency units. Mutually exclusive with `tiers`.|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|tiers|[[Subscription-Item-Tier](#schemasubscription-item-tier)]|false|none|Graduated pricing tiers. Mutually exclusive with `amount`.|
|code|[Subscription-Item-Code](#schemasubscription-item-code)|true|none|A merchant-defined identifier for a usage-based subscription item. You set this code on each usage item when creating a subscription plan, and supply it when reporting consumption on [Create a subscription usage endpoint](https://developer.revolut.com/docs/api/merchant#create-subscription-usage) to target the correct metered item.<br><br>This allows a subscription with multiple usage items (e.g., `api_calls` and `storage_gb`) to receive consumption reports against the right item without relying on internal IDs.<br><br>The code must be unique within a plan phase.|
|usage_aggregation_method|[Usage-Aggregation-Method](#schemausage-aggregation-method)|true|none|The method used to aggregate usage events over a billing cycle to calculate the chargeable amount.<br><br>\| Value \| Behaviour \|<br>\| ----- \| --------- \|<br>\| `sum` \| Totals all reported usage events during the cycle. Use for cumulative metrics (e.g., API calls, data transferred). \|<br>\| `latest` \| Uses the most recently reported value at the end of the cycle. If no usage is reported in a cycle, `0` is used — values do not carry over from previous cycles. Use for gauge-style metrics (e.g., active seats). \|<br>\| `max` \| Uses the peak value reported during the cycle. Use for capacity-based billing (e.g., max concurrent connections). \||

#### Enumerated Values

|Property|Value|
|---|---|
|type|flat|
|type|usage|
|usage_aggregation_method|sum|
|usage_aggregation_method|latest|
|usage_aggregation_method|max|

<h2 id="tocS_Subscription-Item">Subscription-Item</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-item"></a>
<a id="schema_Subscription-Item"></a>
<a id="tocSsubscription-item"></a>
<a id="tocssubscription-item"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "Base Subscription Fee",
  "type": "flat",
  "package_size": 1,
  "unit": "subscription",
  "quantity": 1,
  "amount": 9900,
  "currency": "str"
}
```

A subscription item that defines a billing line within a plan phase. Can be either a fixed-fee (flat) item or a metered (usage) item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Subscription-Item-Flat](#schemasubscription-item-flat)|false|none|Object structure of flat subscription item.|
|*oneOf*|[Subscription-Item-Usage](#schemasubscription-item-usage)|false|none|Object structure of usage subscription item.|

<h2 id="tocS_Subscription-Items">Subscription-Items</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-items"></a>
<a id="schema_Subscription-Items"></a>
<a id="tocSsubscription-items"></a>
<a id="tocssubscription-items"></a>

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Base Subscription Fee",
    "type": "flat",
    "package_size": 1,
    "unit": "subscription",
    "quantity": 1,
    "amount": 9900,
    "currency": "str"
  }
]
```

A list of subscription items for this phase.

<h2 id="tocS_Subscription-Plan-Phase">Subscription-Plan-Phase</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-plan-phase"></a>
<a id="schema_Subscription-Plan-Phase"></a>
<a id="tocSsubscription-plan-phase"></a>
<a id="tocssubscription-plan-phase"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ordinal": 1,
  "cycle_duration": "string",
  "cycle_count": 1,
  "amount": 0,
  "currency": "str",
  "subscription_items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Base Subscription Fee",
      "type": "flat",
      "package_size": 1,
      "unit": "subscription",
      "quantity": 1,
      "amount": 9900,
      "currency": "str"
    }
  ]
}
```

A billing phase within a subscription plan variation, including its cycle duration, amount, and subscription items.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Subscription-Plan-Phase-Id](#schemasubscription-plan-phase-id)|true|none|Unique identifier for the subscription plan phase.|
|ordinal|[Subscription-Plan-Ordinal](#schemasubscription-plan-ordinal)|true|none|The sequential order of this phase in the subscription billing lifecycle.<br><br>Phases execute in ascending order based on this value:<br>- Phase with `ordinal=1` executes first<br>- Phase with `ordinal=2` executes second, and so on<br><br>When a phase completes its `cycle_count`, the subscription automatically progresses to the phase with the next `ordinal` value.<br><br>**Example**: A subscription with phases ordered as `ordinal=1` (trial), `ordinal=2` (regular), `ordinal=3` (discounted) will progress through them in that sequence.|
|cycle_duration|[Cycle-Duration](#schemacycle-duration)|true|none|The length of each billing cycle for this phase in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations).<br><br>This determines how often the customer is billed during this phase. The total time spent in a phase is `cycle_duration × cycle_count`.<br><br>**Common durations**:<br><br>\| Duration \| Description \|<br>\| -------- \| ----------- \|<br>\| `P1M` \| 1 month \|<br>\| `P1Y` \| 1 year \|<br>\| `P15D` \| 15 days \|<br>\| `P1W` \| 1 week \|<br>\| `PT2H` \| 2 hours \|<br><br>**Example**: If `cycle_duration=P1M` and `cycle_count=12`, the customer will be billed monthly for 12 months (1 year total).|
|cycle_count|[Cycle-Count](#schemacycle-count)|false|none|Number of billing cycles for this phase before moving to the next phase.<br><br>\| Value \| Behavior \|<br>\| ----- \| -------- \|<br>\| `null` or omitted \| Phase continues indefinitely. The subscription remains in this phase with no automatic progression. \|<br>\| Specific number (e.g., `1`, `3`, `12`) \| After completing this many billing cycles, the subscription automatically moves to the next phase as determined by the `ordinal` field. \|<br><br>**Example**: If `cycle_count=3` and `cycle_duration=P1M`, the subscription will complete 3 monthly cycles then move to the phase with the next highest `ordinal` value.<br><br>:::note<br>If no next phase exists in after a cycle with a specific `cycle_count`, the subscription will automatically stop when it completes its cycles.<br>:::|
|amount|[Subscription-Amount](#schemasubscription-amount)|false|none|Subscription amount in minor currency units (e.g., cents for USD, pence for GBP).<br><br>For example, `9900` in `GBP` represents £99.00.<br><br>:::info<br>Conversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).<br>:::|
|currency|[Currency](#schemacurrency)|false|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|subscription_items|[Subscription-Items](#schemasubscription-items)|false|none|A list of subscription items for this phase.|

<h2 id="tocS_Subscription-Plan-Variation">Subscription-Plan-Variation</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-plan-variation"></a>
<a id="schema_Subscription-Plan-Variation"></a>
<a id="tocSsubscription-plan-variation"></a>
<a id="tocssubscription-plan-variation"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "phases": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "ordinal": 1,
      "cycle_duration": "string",
      "cycle_count": 1,
      "amount": 0,
      "currency": "str",
      "subscription_items": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "Base Subscription Fee",
          "type": "flat",
          "package_size": 1,
          "unit": "subscription",
          "quantity": 1,
          "amount": 9900,
          "currency": "str"
        }
      ]
    }
  ]
}
```

A subscription plan variation, including its ID and billing phases.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Subscription-Plan-Variation-Id](#schemasubscription-plan-variation-id)|true|none|Unique identifier for the subscription plan variation.|
|phases|[[Subscription-Plan-Phase](#schemasubscription-plan-phase)]|true|none|List of billing phases for this variation.|

<h2 id="tocS_Subscription-Plan">Subscription-Plan</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-plan"></a>
<a id="schema_Subscription-Plan"></a>
<a id="tocSsubscription-plan"></a>
<a id="tocssubscription-plan"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "trial_duration": "P14D",
  "state": "active",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "variations": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "phases": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "ordinal": 1,
          "cycle_duration": "string",
          "cycle_count": 1,
          "amount": 0,
          "currency": "str",
          "subscription_items": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "name": "Base Subscription Fee",
              "type": "flat",
              "package_size": 1,
              "unit": "subscription",
              "quantity": 1,
              "amount": 9900,
              "currency": "str"
            }
          ]
        }
      ]
    }
  ]
}
```

A subscription plan, including its name, state, and pricing variations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Subscription-Plan-Id](#schemasubscription-plan-id)|true|none|Unique identifier for the subscription plan.|
|name|[Subscription-Plan-Name](#schemasubscription-plan-name)|true|none|The name of the subscription plan.|
|trial_duration|[Subscription-Plan-Trial-Duration](#schemasubscription-plan-trial-duration)|false|none|The default trial period duration for this subscription plan in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) (e.g., "P14D" for 14 days).<br><br>This value serves as the default trial duration for all subscriptions created from this plan. Individual subscriptions can override this value at creation time.<br><br>:::note<br>Only days (`D`) are allowed. Time components such as hours, minutes, or seconds are not permitted.<br>:::|
|state|[Subscription-Plan-State](#schemasubscription-plan-state)|true|none|The state of the subscription plan.<br><br>\| State \| Description \|<br>\| ----- \| ----------- \|<br>\| `active` \| The plan is active and can be used to create new subscriptions. \|<br>\| `deactivated` \| The plan has been deactivated and cannot be used for new subscriptions. \||
|created_at|[Subscription-Plan-Created](#schemasubscription-plan-created)|true|none|The date and time the subscription plan was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|updated_at|[Subscription-Plan-Updated](#schemasubscription-plan-updated)|true|none|The date and time the subscription plan was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|variations|[[Subscription-Plan-Variation](#schemasubscription-plan-variation)]|true|none|List of subscription plan variations.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|active|
|state|deactivated|

<h2 id="tocS_Subscription-Plans">Subscription-Plans</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-plans"></a>
<a id="schema_Subscription-Plans"></a>
<a id="tocSsubscription-plans"></a>
<a id="tocssubscription-plans"></a>

```json
{
  "next_page_token": "string",
  "subscription_plans": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "trial_duration": "P14D",
      "state": "active",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "variations": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "phases": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "ordinal": 1,
              "cycle_duration": "string",
              "cycle_count": 1,
              "amount": 0,
              "currency": "str",
              "subscription_items": [
                {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "name": "Base Subscription Fee",
                  "type": "flat",
                  "package_size": 1,
                  "unit": "subscription",
                  "quantity": 1,
                  "amount": 9900,
                  "currency": "str"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

A paginated list of subscription plans.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page_token|string \| null|false|none|Token for retrieving the next page of results.<br><br>If not present, there are no more results to retrieve.|
|subscription_plans|[[Subscription-Plan](#schemasubscription-plan)]|true|none|List of subscription plans.|

<h2 id="tocS_Subscription-Item-Flat-Creation">Subscription-Item-Flat-Creation</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-item-flat-creation"></a>
<a id="schema_Subscription-Item-Flat-Creation"></a>
<a id="tocSsubscription-item-flat-creation"></a>
<a id="tocssubscription-item-flat-creation"></a>

```json
{
  "name": "Base Subscription Fee",
  "type": "flat",
  "package_size": 1,
  "unit": "subscription",
  "quantity": 1,
  "amount": 9900,
  "currency": "str"
}
```

Object structure of flat subscription item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[Subscription-Item-Name](#schemasubscription-item-name)|true|none|The name of the subscription item.|
|type|[Subscription-Item-Type](#schemasubscription-item-type)|true|none|The type of subscription item.|
|package_size|[Subscription-Item-Package-Size](#schemasubscription-item-package-size)|false|none|The number of units grouped together as a single billable package. Used to enable pricing of items that are too inexpensive to charge individually.<br><br>For example, a `package_size` of `1000` with a unit price of 10 minor units (£0.10 in GBP) lets you sell 1000 tokens for £0.10 — effectively pricing each token at £0.0001, below the minimum chargeable amount.<br><br>Set to `1` to price each unit individually.|
|unit|[Subscription-Item-Unit](#schemasubscription-item-unit)|true|none|The unit of measurement for the item.|
|quantity|[Subscription-Item-Quantity](#schemasubscription-item-quantity)|true|none|The quantity of the item.|
|amount|integer(int64)|true|none|Amount in minor currency units (e.g., cents for USD).|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|

#### Enumerated Values

|Property|Value|
|---|---|
|type|flat|
|type|usage|

<h2 id="tocS_Subscription-Item-Usage-Creation">Subscription-Item-Usage-Creation</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-item-usage-creation"></a>
<a id="schema_Subscription-Item-Usage-Creation"></a>
<a id="tocSsubscription-item-usage-creation"></a>
<a id="tocssubscription-item-usage-creation"></a>

```json
{
  "name": "Base Subscription Fee",
  "type": "flat",
  "package_size": 1,
  "unit": "subscription",
  "amount": 10,
  "currency": "str",
  "tiers": [
    {
      "upper_quantity_threshold": 100,
      "amount": 500
    }
  ],
  "code": "api_calls",
  "usage_aggregation_method": "sum"
}
```

Object structure for usage subscription item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[Subscription-Item-Name](#schemasubscription-item-name)|true|none|The name of the subscription item.|
|type|[Subscription-Item-Type](#schemasubscription-item-type)|true|none|The type of subscription item.|
|package_size|[Subscription-Item-Package-Size](#schemasubscription-item-package-size)|false|none|The number of units grouped together as a single billable package. Used to enable pricing of items that are too inexpensive to charge individually.<br><br>For example, a `package_size` of `1000` with a unit price of 10 minor units (£0.10 in GBP) lets you sell 1000 tokens for £0.10 — effectively pricing each token at £0.0001, below the minimum chargeable amount.<br><br>Set to `1` to price each unit individually.|
|unit|[Subscription-Item-Unit](#schemasubscription-item-unit)|true|none|The unit of measurement for the item.|
|amount|integer(int64)|false|none|Flat amount per unit in minor currency units. Mutually exclusive with `tiers`.|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|tiers|[[Subscription-Item-Tier](#schemasubscription-item-tier)]|false|none|Graduated pricing tiers. Mutually exclusive with `amount`.|
|code|[Subscription-Item-Code](#schemasubscription-item-code)|true|none|A merchant-defined identifier for a usage-based subscription item. You set this code on each usage item when creating a subscription plan, and supply it when reporting consumption on [Create a subscription usage endpoint](https://developer.revolut.com/docs/api/merchant#create-subscription-usage) to target the correct metered item.<br><br>This allows a subscription with multiple usage items (e.g., `api_calls` and `storage_gb`) to receive consumption reports against the right item without relying on internal IDs.<br><br>The code must be unique within a plan phase.|
|usage_aggregation_method|[Usage-Aggregation-Method](#schemausage-aggregation-method)|true|none|The method used to aggregate usage events over a billing cycle to calculate the chargeable amount.<br><br>\| Value \| Behaviour \|<br>\| ----- \| --------- \|<br>\| `sum` \| Totals all reported usage events during the cycle. Use for cumulative metrics (e.g., API calls, data transferred). \|<br>\| `latest` \| Uses the most recently reported value at the end of the cycle. If no usage is reported in a cycle, `0` is used — values do not carry over from previous cycles. Use for gauge-style metrics (e.g., active seats). \|<br>\| `max` \| Uses the peak value reported during the cycle. Use for capacity-based billing (e.g., max concurrent connections). \||

#### Enumerated Values

|Property|Value|
|---|---|
|type|flat|
|type|usage|
|usage_aggregation_method|sum|
|usage_aggregation_method|latest|
|usage_aggregation_method|max|

<h2 id="tocS_Subscription-Item-Creation">Subscription-Item-Creation</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-item-creation"></a>
<a id="schema_Subscription-Item-Creation"></a>
<a id="tocSsubscription-item-creation"></a>
<a id="tocssubscription-item-creation"></a>

```json
{
  "name": "Base Subscription Fee",
  "type": "flat",
  "package_size": 1,
  "unit": "subscription",
  "quantity": 1,
  "amount": 9900,
  "currency": "str"
}
```

A subscription item for a plan phase. Can be either a fixed-fee (flat) item or a metered (usage) item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Subscription-Item-Flat-Creation](#schemasubscription-item-flat-creation)|false|none|Object structure of flat subscription item.|
|*oneOf*|[Subscription-Item-Usage-Creation](#schemasubscription-item-usage-creation)|false|none|Object structure for usage subscription item.|

<h2 id="tocS_Subscription-Items-Creation">Subscription-Items-Creation</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-items-creation"></a>
<a id="schema_Subscription-Items-Creation"></a>
<a id="tocSsubscription-items-creation"></a>
<a id="tocssubscription-items-creation"></a>

```json
[
  {
    "name": "Base Subscription Fee",
    "type": "flat",
    "package_size": 1,
    "unit": "subscription",
    "quantity": 1,
    "amount": 9900,
    "currency": "str"
  }
]
```

A list of subscription items for this phase.

<h2 id="tocS_Subscription-Plan-Phase-Creation">Subscription-Plan-Phase-Creation</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-plan-phase-creation"></a>
<a id="schema_Subscription-Plan-Phase-Creation"></a>
<a id="tocSsubscription-plan-phase-creation"></a>
<a id="tocssubscription-plan-phase-creation"></a>

```json
{
  "ordinal": 1,
  "cycle_duration": "string",
  "cycle_count": 1,
  "amount": 0,
  "currency": "str",
  "subscription_items": [
    {
      "name": "Base Subscription Fee",
      "type": "flat",
      "package_size": 1,
      "unit": "subscription",
      "quantity": 1,
      "amount": 9900,
      "currency": "str"
    }
  ]
}
```

Request body for creating a billing phase within a subscription plan variation, including cycle duration, amount, and subscription items.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ordinal|[Subscription-Plan-Ordinal](#schemasubscription-plan-ordinal)|true|none|The sequential order of this phase in the subscription billing lifecycle.<br><br>Phases execute in ascending order based on this value:<br>- Phase with `ordinal=1` executes first<br>- Phase with `ordinal=2` executes second, and so on<br><br>When a phase completes its `cycle_count`, the subscription automatically progresses to the phase with the next `ordinal` value.<br><br>**Example**: A subscription with phases ordered as `ordinal=1` (trial), `ordinal=2` (regular), `ordinal=3` (discounted) will progress through them in that sequence.|
|cycle_duration|[Cycle-Duration](#schemacycle-duration)|true|none|The length of each billing cycle for this phase in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations).<br><br>This determines how often the customer is billed during this phase. The total time spent in a phase is `cycle_duration × cycle_count`.<br><br>**Common durations**:<br><br>\| Duration \| Description \|<br>\| -------- \| ----------- \|<br>\| `P1M` \| 1 month \|<br>\| `P1Y` \| 1 year \|<br>\| `P15D` \| 15 days \|<br>\| `P1W` \| 1 week \|<br>\| `PT2H` \| 2 hours \|<br><br>**Example**: If `cycle_duration=P1M` and `cycle_count=12`, the customer will be billed monthly for 12 months (1 year total).|
|cycle_count|[Cycle-Count](#schemacycle-count)|false|none|Number of billing cycles for this phase before moving to the next phase.<br><br>\| Value \| Behavior \|<br>\| ----- \| -------- \|<br>\| `null` or omitted \| Phase continues indefinitely. The subscription remains in this phase with no automatic progression. \|<br>\| Specific number (e.g., `1`, `3`, `12`) \| After completing this many billing cycles, the subscription automatically moves to the next phase as determined by the `ordinal` field. \|<br><br>**Example**: If `cycle_count=3` and `cycle_duration=P1M`, the subscription will complete 3 monthly cycles then move to the phase with the next highest `ordinal` value.<br><br>:::note<br>If no next phase exists in after a cycle with a specific `cycle_count`, the subscription will automatically stop when it completes its cycles.<br>:::|
|amount|[Subscription-Amount](#schemasubscription-amount)|true|none|Subscription amount in minor currency units (e.g., cents for USD, pence for GBP).<br><br>For example, `9900` in `GBP` represents £99.00.<br><br>:::info<br>Conversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).<br>:::|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|subscription_items|[Subscription-Items-Creation](#schemasubscription-items-creation)|false|none|A list of subscription items for this phase.|

<h2 id="tocS_Subscription-Plan-Variation-Creation">Subscription-Plan-Variation-Creation</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-plan-variation-creation"></a>
<a id="schema_Subscription-Plan-Variation-Creation"></a>
<a id="tocSsubscription-plan-variation-creation"></a>
<a id="tocssubscription-plan-variation-creation"></a>

```json
{
  "phases": [
    {
      "ordinal": 1,
      "cycle_duration": "string",
      "cycle_count": 1,
      "amount": 0,
      "currency": "str",
      "subscription_items": [
        {
          "name": "Base Subscription Fee",
          "type": "flat",
          "package_size": 1,
          "unit": "subscription",
          "quantity": 1,
          "amount": 9900,
          "currency": "str"
        }
      ]
    }
  ]
}
```

Request body for creating a subscription plan variation, including its billing phases.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phases|[[Subscription-Plan-Phase-Creation](#schemasubscription-plan-phase-creation)]|true|none|List of billing phases for this variation.|

<h2 id="tocS_Subscription-Plan-Creation">Subscription-Plan-Creation</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-plan-creation"></a>
<a id="schema_Subscription-Plan-Creation"></a>
<a id="tocSsubscription-plan-creation"></a>
<a id="tocssubscription-plan-creation"></a>

```json
{
  "name": "string",
  "trial_duration": "P14D",
  "variations": [
    {
      "phases": [
        {
          "ordinal": 1,
          "cycle_duration": "string",
          "cycle_count": 1,
          "amount": 0,
          "currency": "str",
          "subscription_items": [
            {
              "name": "Base Subscription Fee",
              "type": "flat",
              "package_size": 1,
              "unit": "subscription",
              "quantity": 1,
              "amount": 9900,
              "currency": "str"
            }
          ]
        }
      ]
    }
  ]
}
```

Request body for creating a subscription plan, including its name and pricing variations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[Subscription-Plan-Name](#schemasubscription-plan-name)|true|none|The name of the subscription plan.|
|trial_duration|[Subscription-Plan-Trial-Duration](#schemasubscription-plan-trial-duration)|false|none|The default trial period duration for this subscription plan in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) (e.g., "P14D" for 14 days).<br><br>This value serves as the default trial duration for all subscriptions created from this plan. Individual subscriptions can override this value at creation time.<br><br>:::note<br>Only days (`D`) are allowed. Time components such as hours, minutes, or seconds are not permitted.<br>:::|
|variations|[[Subscription-Plan-Variation-Creation](#schemasubscription-plan-variation-creation)]|true|none|List of subscription plan variations (e.g., monthly, yearly pricing options).|

<h2 id="tocS_Subscription-External-Reference">Subscription-External-Reference</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-external-reference"></a>
<a id="schema_Subscription-External-Reference"></a>
<a id="tocSsubscription-external-reference"></a>
<a id="tocssubscription-external-reference"></a>

```json
"string"
```

Optional external reference for the subscription.

Use this field to store your own system's identifier for easy tracking and correlation.

<h2 id="tocS_Subscription-State">Subscription-State</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-state"></a>
<a id="schema_Subscription-State"></a>
<a id="tocSsubscription-state"></a>
<a id="tocssubscription-state"></a>

```json
"pending"
```

The state of the subscription.

| State | Description |
| ----- | ----------- |
| `pending` | The subscription has been created but is not yet active. This typically occurs when awaiting the first payment or setup completion. |
| `active` | The subscription is currently active and billing cycles are processing normally. |
| `overdue` | The subscription has a failed payment and is awaiting resolution. |
| `paused` | The subscription has been temporarily paused and no billing will occur. |
| `cancelled` | The subscription has been cancelled and will not renew. |
| `finished` | The subscription has completed all billing cycles (for limited-duration subscriptions). |

<h2 id="tocS_Subscription-Payment-Method-Type">Subscription-Payment-Method-Type</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-payment-method-type"></a>
<a id="schema_Subscription-Payment-Method-Type"></a>
<a id="tocSsubscription-payment-method-type"></a>
<a id="tocssubscription-payment-method-type"></a>

```json
"automatic"
```

The type of payment method used for the subscription.

| Type | Description |
| ---- | ----------- |
| `automatic` | Payments are automatically charged to the customer's saved payment method. |
| `manual` | Payments require manual processing by the customer. |

<h2 id="tocS_Subscription-Created">Subscription-Created</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-created"></a>
<a id="schema_Subscription-Created"></a>
<a id="tocSsubscription-created"></a>
<a id="tocssubscription-created"></a>

```json
"1970-01-01T00:00:00Z"
```

The date and time the subscription was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

<h2 id="tocS_Subscription-Updated">Subscription-Updated</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-updated"></a>
<a id="schema_Subscription-Updated"></a>
<a id="tocSsubscription-updated"></a>
<a id="tocssubscription-updated"></a>

```json
"1970-01-01T00:00:00Z"
```

The date and time the subscription was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

<h2 id="tocS_Subscription-Start-Date">Subscription-Start-Date</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-start-date"></a>
<a id="schema_Subscription-Start-Date"></a>
<a id="tocSsubscription-start-date"></a>
<a id="tocssubscription-start-date"></a>

```json
"1970-01-01T00:00:00Z"
```

The date and time the subscription started in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

This field is `null` until the subscription becomes active.

<h2 id="tocS_Subscription-Cycle-Id">Subscription-Cycle-Id</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-cycle-id"></a>
<a id="schema_Subscription-Cycle-Id"></a>
<a id="tocSsubscription-cycle-id"></a>
<a id="tocssubscription-cycle-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

Unique identifier for the subscription cycle.

<h2 id="tocS_Subscription-Trial-Duration">Subscription-Trial-Duration</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-trial-duration"></a>
<a id="schema_Subscription-Trial-Duration"></a>
<a id="tocSsubscription-trial-duration"></a>
<a id="tocssubscription-trial-duration"></a>

```json
"P14D"
```

The trial period duration for this subscription in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) (e.g., "P14D" for 14 days).

### Override plan defaults

Subscription plans can define a default trial duration. When creating a subscription, you can use this field to override the plan's default trial period:

| Field value | Behaviour | Example |
| ----------- | -------- | ------- |
| **Not provided** | Uses the trial duration defined in the plan (if any) | Plan has `"P7D"` → subscription gets 7-day trial |
| **Different value** | Overrides the plan's default trial duration | Plan has `"P7D"` → set to `"P30D"` for promotional offer, or `"P3D"` to reduce |
| **`"P0D"`** | Explicitly skips the trial period | Plan has `"P7D"` → set to `"P0D"` to skip trial entirely |

:::note
Only days (`D`) are allowed. Time components such as hours, minutes, or seconds are not permitted.
:::

<h2 id="tocS_Subscription-Trial-End-Date">Subscription-Trial-End-Date</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-trial-end-date"></a>
<a id="schema_Subscription-Trial-End-Date"></a>
<a id="tocSsubscription-trial-end-date"></a>
<a id="tocssubscription-trial-end-date"></a>

```json
"2025-06-19T21:00:00.036001Z"
```

The date and time when the subscription's trial period ends in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

This value is automatically calculated by the system as: `start_date` + `trial_duration`

The `trial_duration` used in the calculation comes from either:
- The subscription's custom `trial_duration` (if provided at creation time), or
- The plan's default `trial_duration` (if no override was specified)

This field is `null` when the subscription has no trial period (e.g., when `trial_duration` is not set or is `"P0D"`).

<h2 id="tocS_Setup-Order-Id">Setup-Order-Id</h2>
<!-- backwards compatibility -->
<a id="schemasetup-order-id"></a>
<a id="schema_Setup-Order-Id"></a>
<a id="tocSsetup-order-id"></a>
<a id="tocssetup-order-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The ID of the order created for handling the setup payment for the subscription.

Use the [Retrieve an order](https://developer.revolut.com/docs/api/merchant#retrieve-order) endpoint with this ID to get order details, including the `checkout_url` for redirecting customers to the Hosted Payment Page or the `token` for widget integration.

:::note
The order is created in parallel to the subscription and is used to collect the initial payment and save the customer's payment method for future billing cycles.
:::

<h2 id="tocS_Subscription-Scheduled-Action-Type">Subscription-Scheduled-Action-Type</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-scheduled-action-type"></a>
<a id="schema_Subscription-Scheduled-Action-Type"></a>
<a id="tocSsubscription-scheduled-action-type"></a>
<a id="tocssubscription-scheduled-action-type"></a>

```json
"change_plan_variation"
```

The type of the scheduled action.

| Value | Description |
| ----- | ----------- |
| `cancel` | A cancellation scheduled to take effect at the end of the current billing cycle. |
| `change_plan_variation` | A plan variation change scheduled to take effect at the end of the current billing cycle. |

<h2 id="tocS_Subscription-Change-Plan-Reason">Subscription-Change-Plan-Reason</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-change-plan-reason"></a>
<a id="schema_Subscription-Change-Plan-Reason"></a>
<a id="tocSsubscription-change-plan-reason"></a>
<a id="tocssubscription-change-plan-reason"></a>

```json
"customer_request"
```

The reason for the scheduled action. This field is informational and does not affect how the action is processed.

| Value | Description |
| ----- | ----------- |
| `customer_request` | The action was requested by the customer. |
| `merchant_request` | The action was initiated by the merchant. |

<h2 id="tocS_Subscription-Scheduled-Action-Cancel">Subscription-Scheduled-Action-Cancel</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-scheduled-action-cancel"></a>
<a id="schema_Subscription-Scheduled-Action-Cancel"></a>
<a id="tocSsubscription-scheduled-action-cancel"></a>
<a id="tocssubscription-scheduled-action-cancel"></a>

```json
{
  "type": "change_plan_variation",
  "reason": "customer_request"
}
```

A cancellation scheduled to take effect at the end of the current billing cycle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[Subscription-Scheduled-Action-Type](#schemasubscription-scheduled-action-type)|true|none|The type of the scheduled action.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `cancel` \| A cancellation scheduled to take effect at the end of the current billing cycle. \|<br>\| `change_plan_variation` \| A plan variation change scheduled to take effect at the end of the current billing cycle. \||
|reason|[Subscription-Change-Plan-Reason](#schemasubscription-change-plan-reason)|true|none|The reason for the scheduled action. This field is informational and does not affect how the action is processed.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `customer_request` \| The action was requested by the customer. \|<br>\| `merchant_request` \| The action was initiated by the merchant. \||

#### Enumerated Values

|Property|Value|
|---|---|
|type|cancel|
|type|change_plan_variation|
|reason|customer_request|
|reason|merchant_request|

<h2 id="tocS_Subscription-Scheduled-Action-Change-Plan">Subscription-Scheduled-Action-Change-Plan</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-scheduled-action-change-plan"></a>
<a id="schema_Subscription-Scheduled-Action-Change-Plan"></a>
<a id="tocSsubscription-scheduled-action-change-plan"></a>
<a id="tocssubscription-scheduled-action-change-plan"></a>

```json
{
  "type": "change_plan_variation",
  "reason": "customer_request",
  "plan_variation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "plan_variation_phase_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

A plan variation change scheduled to take effect at the end of the current billing cycle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[Subscription-Scheduled-Action-Type](#schemasubscription-scheduled-action-type)|true|none|The type of the scheduled action.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `cancel` \| A cancellation scheduled to take effect at the end of the current billing cycle. \|<br>\| `change_plan_variation` \| A plan variation change scheduled to take effect at the end of the current billing cycle. \||
|reason|[Subscription-Change-Plan-Reason](#schemasubscription-change-plan-reason)|true|none|The reason for the scheduled action. This field is informational and does not affect how the action is processed.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `customer_request` \| The action was requested by the customer. \|<br>\| `merchant_request` \| The action was initiated by the merchant. \||
|plan_variation_id|[Subscription-Plan-Variation-Id](#schemasubscription-plan-variation-id)|true|none|Unique identifier for the subscription plan variation.|
|plan_variation_phase_id|[Subscription-Plan-Phase-Id](#schemasubscription-plan-phase-id)|false|none|Unique identifier for the subscription plan phase.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|cancel|
|type|change_plan_variation|
|reason|customer_request|
|reason|merchant_request|

<h2 id="tocS_Subscription-Scheduled-Action">Subscription-Scheduled-Action</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-scheduled-action"></a>
<a id="schema_Subscription-Scheduled-Action"></a>
<a id="tocSsubscription-scheduled-action"></a>
<a id="tocssubscription-scheduled-action"></a>

```json
{
  "type": "change_plan_variation",
  "reason": "customer_request"
}
```

A pending scheduled action on the subscription, applied at the end of the current billing cycle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Subscription-Scheduled-Action-Cancel](#schemasubscription-scheduled-action-cancel)|false|none|A cancellation scheduled to take effect at the end of the current billing cycle.|
|*oneOf*|[Subscription-Scheduled-Action-Change-Plan](#schemasubscription-scheduled-action-change-plan)|false|none|A plan variation change scheduled to take effect at the end of the current billing cycle.|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "external_reference": "string",
  "state": "pending",
  "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "plan_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "plan_variation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "payment_method_type": "automatic",
  "payment_method_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "start_date": "1970-01-01T00:00:00Z",
  "current_cycle_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "trial_duration": "P14D",
  "trial_end_date": "2025-06-19T21:00:00.036001Z",
  "setup_order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "scheduled_action": {
    "type": "change_plan_variation",
    "reason": "customer_request"
  }
}
```

A subscription, including its state, plan, customer, payment method, and current billing cycle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Subscription-Id](#schemasubscription-id)|true|none|Unique identifier for the subscription.|
|external_reference|[Subscription-External-Reference](#schemasubscription-external-reference)|false|none|Optional external reference for the subscription.<br><br>Use this field to store your own system's identifier for easy tracking and correlation.|
|state|[Subscription-State](#schemasubscription-state)|true|none|The state of the subscription.<br><br>\| State \| Description \|<br>\| ----- \| ----------- \|<br>\| `pending` \| The subscription has been created but is not yet active. This typically occurs when awaiting the first payment or setup completion. \|<br>\| `active` \| The subscription is currently active and billing cycles are processing normally. \|<br>\| `overdue` \| The subscription has a failed payment and is awaiting resolution. \|<br>\| `paused` \| The subscription has been temporarily paused and no billing will occur. \|<br>\| `cancelled` \| The subscription has been cancelled and will not renew. \|<br>\| `finished` \| The subscription has completed all billing cycles (for limited-duration subscriptions). \||
|customer_id|[Customer-Id](#schemacustomer-id)|true|none|Unique identifier for the customer.|
|plan_id|[Subscription-Plan-Id](#schemasubscription-plan-id)|true|none|Unique identifier for the subscription plan.|
|plan_variation_id|[Subscription-Plan-Variation-Id](#schemasubscription-plan-variation-id)|true|none|Unique identifier for the subscription plan variation.|
|payment_method_type|[Subscription-Payment-Method-Type](#schemasubscription-payment-method-type)|true|none|The type of payment method used for the subscription.<br><br>\| Type \| Description \|<br>\| ---- \| ----------- \|<br>\| `automatic` \| Payments are automatically charged to the customer's saved payment method. \|<br>\| `manual` \| Payments require manual processing by the customer. \||
|payment_method_id|[Payment-Method-Id](#schemapayment-method-id)|false|none|Unique identifier for the payment method.|
|created_at|[Subscription-Created](#schemasubscription-created)|true|none|The date and time the subscription was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|updated_at|[Subscription-Updated](#schemasubscription-updated)|true|none|The date and time the subscription was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|start_date|[Subscription-Start-Date](#schemasubscription-start-date)|false|none|The date and time the subscription started in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.<br><br>This field is `null` until the subscription becomes active.|
|current_cycle_id|[Subscription-Cycle-Id](#schemasubscription-cycle-id)|true|none|Unique identifier for the subscription cycle.|
|trial_duration|[Subscription-Trial-Duration](#schemasubscription-trial-duration)|false|none|The trial period duration for this subscription in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) (e.g., "P14D" for 14 days).<br><br>### Override plan defaults<br><br>Subscription plans can define a default trial duration. When creating a subscription, you can use this field to override the plan's default trial period:<br><br>\| Field value \| Behaviour \| Example \|<br>\| ----------- \| -------- \| ------- \|<br>\| **Not provided** \| Uses the trial duration defined in the plan (if any) \| Plan has `"P7D"` → subscription gets 7-day trial \|<br>\| **Different value** \| Overrides the plan's default trial duration \| Plan has `"P7D"` → set to `"P30D"` for promotional offer, or `"P3D"` to reduce \|<br>\| **`"P0D"`** \| Explicitly skips the trial period \| Plan has `"P7D"` → set to `"P0D"` to skip trial entirely \|<br><br>:::note<br>Only days (`D`) are allowed. Time components such as hours, minutes, or seconds are not permitted.<br>:::|
|trial_end_date|[Subscription-Trial-End-Date](#schemasubscription-trial-end-date)|false|none|The date and time when the subscription's trial period ends in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.<br><br>This value is automatically calculated by the system as: `start_date` + `trial_duration`<br><br>The `trial_duration` used in the calculation comes from either:<br>- The subscription's custom `trial_duration` (if provided at creation time), or<br>- The plan's default `trial_duration` (if no override was specified)<br><br>This field is `null` when the subscription has no trial period (e.g., when `trial_duration` is not set or is `"P0D"`).|
|setup_order_id|[Setup-Order-Id](#schemasetup-order-id)|false|none|The ID of the order created for handling the setup payment for the subscription.<br><br>Use the [Retrieve an order](https://developer.revolut.com/docs/api/merchant#retrieve-order) endpoint with this ID to get order details, including the `checkout_url` for redirecting customers to the Hosted Payment Page or the `token` for widget integration.<br><br>:::note<br>The order is created in parallel to the subscription and is used to collect the initial payment and save the customer's payment method for future billing cycles.<br>:::|
|scheduled_action|[Subscription-Scheduled-Action](#schemasubscription-scheduled-action)|false|none|A pending scheduled action on the subscription, applied at the end of the current billing cycle.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|pending|
|state|active|
|state|overdue|
|state|paused|
|state|cancelled|
|state|finished|
|payment_method_type|automatic|
|payment_method_type|manual|

<h2 id="tocS_Subscriptions">Subscriptions</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions"></a>
<a id="schema_Subscriptions"></a>
<a id="tocSsubscriptions"></a>
<a id="tocssubscriptions"></a>

```json
{
  "next_page_token": "string",
  "subscriptions": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "external_reference": "string",
      "state": "pending",
      "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "plan_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "plan_variation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "payment_method_type": "automatic",
      "payment_method_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "start_date": "1970-01-01T00:00:00Z",
      "current_cycle_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "trial_duration": "P14D",
      "trial_end_date": "2025-06-19T21:00:00.036001Z",
      "setup_order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "scheduled_action": {
        "type": "change_plan_variation",
        "reason": "customer_request"
      }
    }
  ]
}
```

A paginated list of subscriptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page_token|[Next-Page-Token](#schemanext-page-token)|false|none|Token for retrieving the next page of results. Use this token as the value of the `page_token` query parameter in your next request to retrieve the next page.<br><br>If not present, there are no more results to retrieve.|
|subscriptions|[[Subscription](#schemasubscription)]|true|none|List of subscriptions.|

<h2 id="tocS_Setup-Order-Redirect-URL">Setup-Order-Redirect-URL</h2>
<!-- backwards compatibility -->
<a id="schemasetup-order-redirect-url"></a>
<a id="schema_Setup-Order-Redirect-URL"></a>
<a id="tocSsetup-order-redirect-url"></a>
<a id="tocssetup-order-redirect-url"></a>

```json
"http://example.com"
```

The URL to which the customer is redirected after completing the setup order on the Revolut Hosted Payment Page.

When provided, the response will include a `setup_order_id`. Use the [Retrieve an order](https://developer.revolut.com/docs/api/merchant#retrieve-order) endpoint with this `setup_order_id` to get the `checkout_url` for redirecting the customer to the Hosted Payment Page.

:::warning
Restrictions:
- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)
- URI scheme is required and must be either `http` or `https`
- URI host is required and cannot be `localhost` or an IP address
- Max length: `2000`
- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)
:::

<h2 id="tocS_Subscription-Creation">Subscription-Creation</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-creation"></a>
<a id="schema_Subscription-Creation"></a>
<a id="tocSsubscription-creation"></a>
<a id="tocssubscription-creation"></a>

```json
{
  "plan_variation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "external_reference": "string",
  "setup_order_redirect_url": "http://example.com",
  "trial_duration": "P14D"
}
```

Request body for creating a new subscription, including the plan variation, customer, and optional trial configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plan_variation_id|[Subscription-Plan-Variation-Id](#schemasubscription-plan-variation-id)|true|none|Unique identifier for the subscription plan variation.|
|customer_id|[Customer-Id](#schemacustomer-id)|true|none|Unique identifier for the customer.|
|external_reference|[Subscription-External-Reference](#schemasubscription-external-reference)|false|none|Optional external reference for the subscription.<br><br>Use this field to store your own system's identifier for easy tracking and correlation.|
|setup_order_redirect_url|[Setup-Order-Redirect-URL](#schemasetup-order-redirect-url)|false|none|The URL to which the customer is redirected after completing the setup order on the Revolut Hosted Payment Page.<br><br>When provided, the response will include a `setup_order_id`. Use the [Retrieve an order](https://developer.revolut.com/docs/api/merchant#retrieve-order) endpoint with this `setup_order_id` to get the `checkout_url` for redirecting the customer to the Hosted Payment Page.<br><br>:::warning<br>Restrictions:<br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be either `http` or `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `2000`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::|
|trial_duration|[Subscription-Trial-Duration](#schemasubscription-trial-duration)|false|none|The trial period duration for this subscription in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) (e.g., "P14D" for 14 days).<br><br>### Override plan defaults<br><br>Subscription plans can define a default trial duration. When creating a subscription, you can use this field to override the plan's default trial period:<br><br>\| Field value \| Behaviour \| Example \|<br>\| ----------- \| -------- \| ------- \|<br>\| **Not provided** \| Uses the trial duration defined in the plan (if any) \| Plan has `"P7D"` → subscription gets 7-day trial \|<br>\| **Different value** \| Overrides the plan's default trial duration \| Plan has `"P7D"` → set to `"P30D"` for promotional offer, or `"P3D"` to reduce \|<br>\| **`"P0D"`** \| Explicitly skips the trial period \| Plan has `"P7D"` → set to `"P0D"` to skip trial entirely \|<br><br>:::note<br>Only days (`D`) are allowed. Time components such as hours, minutes, or seconds are not permitted.<br>:::|

<h2 id="tocS_Subscription-Update">Subscription-Update</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-update"></a>
<a id="schema_Subscription-Update"></a>
<a id="tocSsubscription-update"></a>
<a id="tocssubscription-update"></a>

```json
{
  "external_reference": "string"
}
```

Request body for updating a subscription's external reference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|external_reference|[Subscription-External-Reference](#schemasubscription-external-reference)|false|none|Optional external reference for the subscription.<br><br>Use this field to store your own system's identifier for easy tracking and correlation.|

<h2 id="tocS_Subscription-Change-Plan">Subscription-Change-Plan</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-change-plan"></a>
<a id="schema_Subscription-Change-Plan"></a>
<a id="tocSsubscription-change-plan"></a>
<a id="tocssubscription-change-plan"></a>

```json
{
  "plan_variation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "plan_variation_phase_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "scheduled": "at_cycle_end",
  "reason": "customer_request"
}
```

Request body for changing a subscription's plan variation, including the new variation ID and scheduling.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plan_variation_id|[Subscription-Plan-Variation-Id](#schemasubscription-plan-variation-id)|true|none|Unique identifier for the subscription plan variation.|
|plan_variation_phase_id|[Subscription-Plan-Phase-Id](#schemasubscription-plan-phase-id)|false|none|Unique identifier for the subscription plan phase.|
|scheduled|string|true|none|When the plan change should take effect.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `at_cycle_end` \| The change is applied at the end of the current billing cycle. \||
|reason|[Subscription-Change-Plan-Reason](#schemasubscription-change-plan-reason)|false|none|The reason for the scheduled action. This field is informational and does not affect how the action is processed.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `customer_request` \| The action was requested by the customer. \|<br>\| `merchant_request` \| The action was initiated by the merchant. \||

#### Enumerated Values

|Property|Value|
|---|---|
|scheduled|at_cycle_end|
|reason|customer_request|
|reason|merchant_request|

<h2 id="tocS_Subscription-Update-Renewal-Date">Subscription-Update-Renewal-Date</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-update-renewal-date"></a>
<a id="schema_Subscription-Update-Renewal-Date"></a>
<a id="tocSsubscription-update-renewal-date"></a>
<a id="tocssubscription-update-renewal-date"></a>

```json
{
  "renewal_date": "2026-07-01T00:00:00Z"
}
```

Request body for updating a subscription's renewal date.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|renewal_date|string(date-time)|true|none|The new renewal date for the subscription, expressed as a UTC date-time value.<br><br>Must be set to a date later than the current renewal date; earlier dates are rejected.|

<h2 id="tocS_Cycle-Number">Cycle-Number</h2>
<!-- backwards compatibility -->
<a id="schemacycle-number"></a>
<a id="schema_Cycle-Number"></a>
<a id="tocScycle-number"></a>
<a id="tocscycle-number"></a>

```json
1
```

The sequential cycle number within the subscription.

Starts at `1` for the first cycle and increments with each new billing cycle.

<h2 id="tocS_Previous-Cycle-Id">Previous-Cycle-Id</h2>
<!-- backwards compatibility -->
<a id="schemaprevious-cycle-id"></a>
<a id="schema_Previous-Cycle-Id"></a>
<a id="tocSprevious-cycle-id"></a>
<a id="tocsprevious-cycle-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The unique identifier of the previous billing cycle.

This field is `null` for the first cycle in a subscription.

<h2 id="tocS_Subscription-Cycle-State">Subscription-Cycle-State</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-cycle-state"></a>
<a id="schema_Subscription-Cycle-State"></a>
<a id="tocSsubscription-cycle-state"></a>
<a id="tocssubscription-cycle-state"></a>

```json
"pending"
```

The state of the subscription cycle.

| State | Description |
| ----- | ----------- |
| `pending` | The cycle has been created but has not yet started. A cycle can enter this state automatically when usage is reported for a future cycle via `POST /api/subscription-usages`. |
| `active` | The cycle is currently active and in progress. |
| `finished` | The cycle has completed. |

<h2 id="tocS_Subscription-Cycle-Start-Date">Subscription-Cycle-Start-Date</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-cycle-start-date"></a>
<a id="schema_Subscription-Cycle-Start-Date"></a>
<a id="tocSsubscription-cycle-start-date"></a>
<a id="tocssubscription-cycle-start-date"></a>

```json
"1970-01-01T00:00:00Z"
```

The date and time the subscription cycle starts in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

<h2 id="tocS_Subscription-Cycle-End-Date">Subscription-Cycle-End-Date</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-cycle-end-date"></a>
<a id="schema_Subscription-Cycle-End-Date"></a>
<a id="tocSsubscription-cycle-end-date"></a>
<a id="tocssubscription-cycle-end-date"></a>

```json
"1970-01-01T00:00:00Z"
```

The date and time the subscription cycle ends in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

<h2 id="tocS_Subscription-Cycle-Usage-Cutoff-Date">Subscription-Cycle-Usage-Cutoff-Date</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-cycle-usage-cutoff-date"></a>
<a id="schema_Subscription-Cycle-Usage-Cutoff-Date"></a>
<a id="tocSsubscription-cycle-usage-cutoff-date"></a>
<a id="tocssubscription-cycle-usage-cutoff-date"></a>

```json
"1970-01-01T00:00:00Z"
```

The deadline for submitting or correcting usage records for this cycle, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

Set to 12 hours after the cycle's `end_date` by default. After this time, Revolut aggregates all reported usage records and creates the `post_billing_order_id` to initiate the charge.

:::note
Only present for cycles that include usage-based subscription items.
:::

<h2 id="tocS_Subscription-Cycle-Post-Billing-Order-Id">Subscription-Cycle-Post-Billing-Order-Id</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-cycle-post-billing-order-id"></a>
<a id="schema_Subscription-Cycle-Post-Billing-Order-Id"></a>
<a id="tocSsubscription-cycle-post-billing-order-id"></a>
<a id="tocssubscription-cycle-post-billing-order-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The ID of the order created after the cycle's `usage_cutoff_date` to charge usage-based items accumulated during the cycle.

| Scenario | Detail |
| -------- | ------ |
| Ongoing subscription | This order also acts as the next cycle's `order_id`, combining usage post-billing for the current cycle with pre-billing for the next. |
| Last cycle | A standalone finishing order is created to charge all usage from this cycle. |
| Subscription ended with unpaid cycles | The finishing order consolidates all outstanding usage charges, including any from previous cycles where payment failed. |

:::note
Only present for cycles that include usage-based subscription items.
:::

<h2 id="tocS_Subscription-Cycle-Trial">Subscription-Cycle-Trial</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-cycle-trial"></a>
<a id="schema_Subscription-Cycle-Trial"></a>
<a id="tocSsubscription-cycle-trial"></a>
<a id="tocssubscription-cycle-trial"></a>

```json
false
```

Indicates whether this billing cycle occurs during the subscription's trial period.

This value is automatically calculated by the system based on the cycle's timing relative to the subscription's trial period. Returns `true` if the cycle is within the trial period (before `trial_end_date`), otherwise `false`. 

Trial cycles typically have different billing behavior, such as reduced or zero charges.

<h2 id="tocS_Subscription-Cycle">Subscription-Cycle</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-cycle"></a>
<a id="schema_Subscription-Cycle"></a>
<a id="tocSsubscription-cycle"></a>
<a id="tocssubscription-cycle"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "subscription_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "plan_variation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "plan_variation_phase_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "number": 1,
  "previous_cycle_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "state": "pending",
  "start_date": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "usage_cutoff_date": "1970-01-01T00:00:00Z",
  "order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "post_billing_order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "trial": false
}
```

A single billing cycle of a subscription, including its state, dates, and associated order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Subscription-Cycle-Id](#schemasubscription-cycle-id)|true|none|Unique identifier for the subscription cycle.|
|subscription_id|[Subscription-Id](#schemasubscription-id)|true|none|Unique identifier for the subscription.|
|plan_variation_id|[Subscription-Plan-Variation-Id](#schemasubscription-plan-variation-id)|true|none|Unique identifier for the subscription plan variation.|
|plan_variation_phase_id|[Subscription-Plan-Phase-Id](#schemasubscription-plan-phase-id)|false|none|Unique identifier for the subscription plan phase.|
|number|[Cycle-Number](#schemacycle-number)|true|none|The sequential cycle number within the subscription.<br><br>Starts at `1` for the first cycle and increments with each new billing cycle.|
|previous_cycle_id|[Previous-Cycle-Id](#schemaprevious-cycle-id)|false|none|The unique identifier of the previous billing cycle.<br><br>This field is `null` for the first cycle in a subscription.|
|state|[Subscription-Cycle-State](#schemasubscription-cycle-state)|true|none|The state of the subscription cycle.<br><br>\| State \| Description \|<br>\| ----- \| ----------- \|<br>\| `pending` \| The cycle has been created but has not yet started. A cycle can enter this state automatically when usage is reported for a future cycle via `POST /api/subscription-usages`. \|<br>\| `active` \| The cycle is currently active and in progress. \|<br>\| `finished` \| The cycle has completed. \||
|start_date|[Subscription-Cycle-Start-Date](#schemasubscription-cycle-start-date)|false|none|The date and time the subscription cycle starts in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|end_date|[Subscription-Cycle-End-Date](#schemasubscription-cycle-end-date)|false|none|The date and time the subscription cycle ends in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|usage_cutoff_date|[Subscription-Cycle-Usage-Cutoff-Date](#schemasubscription-cycle-usage-cutoff-date)|false|none|The deadline for submitting or correcting usage records for this cycle, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.<br><br>Set to 12 hours after the cycle's `end_date` by default. After this time, Revolut aggregates all reported usage records and creates the `post_billing_order_id` to initiate the charge.<br><br>:::note<br>Only present for cycles that include usage-based subscription items.<br>:::|
|order_id|[Order-Id](#schemaorder-id)|false|none|Permanent order ID used to retrieve, capture, cancel, or refund an order after authorization.|
|post_billing_order_id|[Subscription-Cycle-Post-Billing-Order-Id](#schemasubscription-cycle-post-billing-order-id)|false|none|The ID of the order created after the cycle's `usage_cutoff_date` to charge usage-based items accumulated during the cycle.<br><br>\| Scenario \| Detail \|<br>\| -------- \| ------ \|<br>\| Ongoing subscription \| This order also acts as the next cycle's `order_id`, combining usage post-billing for the current cycle with pre-billing for the next. \|<br>\| Last cycle \| A standalone finishing order is created to charge all usage from this cycle. \|<br>\| Subscription ended with unpaid cycles \| The finishing order consolidates all outstanding usage charges, including any from previous cycles where payment failed. \|<br><br>:::note<br>Only present for cycles that include usage-based subscription items.<br>:::|
|trial|[Subscription-Cycle-Trial](#schemasubscription-cycle-trial)|false|none|Indicates whether this billing cycle occurs during the subscription's trial period.<br><br>This value is automatically calculated by the system based on the cycle's timing relative to the subscription's trial period. Returns `true` if the cycle is within the trial period (before `trial_end_date`), otherwise `false`. <br><br>Trial cycles typically have different billing behavior, such as reduced or zero charges.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|pending|
|state|active|
|state|finished|

<h2 id="tocS_Subscription-Cycles">Subscription-Cycles</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-cycles"></a>
<a id="schema_Subscription-Cycles"></a>
<a id="tocSsubscription-cycles"></a>
<a id="tocssubscription-cycles"></a>

```json
{
  "next_page_token": "string",
  "cycles": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "subscription_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "plan_variation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "plan_variation_phase_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "number": 1,
      "previous_cycle_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "state": "pending",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "usage_cutoff_date": "1970-01-01T00:00:00Z",
      "order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "post_billing_order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "trial": false
    }
  ]
}
```

A paginated list of subscription billing cycles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page_token|string \| null|false|none|Token for retrieving the next page of results.<br><br>If not present, there are no more results to retrieve.|
|cycles|[[Subscription-Cycle](#schemasubscription-cycle)]|true|none|List of subscription cycles.|

<h2 id="tocS_Subscription-Usage-Id">Subscription-Usage-Id</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-usage-id"></a>
<a id="schema_Subscription-Usage-Id"></a>
<a id="tocSsubscription-usage-id"></a>
<a id="tocssubscription-usage-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The unique identifier of the usage record.

<h2 id="tocS_Subscription-Usage-Date">Subscription-Usage-Date</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-usage-date"></a>
<a id="schema_Subscription-Usage-Date"></a>
<a id="tocSsubscription-usage-date"></a>
<a id="tocssubscription-usage-date"></a>

```json
"2026-03-01T21:00:00Z"
```

The timestamp indicating when the consumption actually occurred.

| Constraint | Detail |
| ---------- | ------ |
| Format | [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time string (e.g., `YYYY-MM-DDTHH:mm:ssZ`). |
| Timezone | Must be UTC. |
| Validation | Revolut uses this to identify the applicable billing cycle. Accepted for the active cycle (`start_date ≤ usage_date < end_date`), for a recently ended cycle before its `usage_cutoff_date`, and for the one next upcoming cycle. Other dates are rejected. |

<h2 id="tocS_Subscription-Usage-Quantity">Subscription-Usage-Quantity</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-usage-quantity"></a>
<a id="schema_Subscription-Usage-Quantity"></a>
<a id="tocSsubscription-usage-quantity"></a>
<a id="tocssubscription-usage-quantity"></a>

```json
100.5
```

The quantity of consumption to record for this usage report. 

Supports up to 20 digits before and 20 digits after the decimal point.

<h2 id="tocS_Subscription-Usage-Metadata">Subscription-Usage-Metadata</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-usage-metadata"></a>
<a id="schema_Subscription-Usage-Metadata"></a>
<a id="tocSsubscription-usage-metadata"></a>
<a id="tocssubscription-usage-metadata"></a>

```json
{
  "user_id": "12345",
  "api_version": "v2",
  "usage_rate": 1.5,
  "is_trial": true
}
```

Key-value pairs you can attach to a usage record for your own tracking and reporting purposes.

| Constraint | Detail |
| ---------- | ------ |
| Keys | Maximum 50 keys per record. |
| Value types | String, number, or boolean only. |
| Number precision | Up to 20 digits before and 20 digits after the decimal point. |

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string \| number \| boolean|false|none|none|

<h2 id="tocS_Subscription-Usage-Created-Date">Subscription-Usage-Created-Date</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-usage-created-date"></a>
<a id="schema_Subscription-Usage-Created-Date"></a>
<a id="tocSsubscription-usage-created-date"></a>
<a id="tocssubscription-usage-created-date"></a>

```json
"2026-03-01T21:05:00Z"
```

The date and time the usage record was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

<h2 id="tocS_Subscription-Usage-Updated-Date">Subscription-Usage-Updated-Date</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-usage-updated-date"></a>
<a id="schema_Subscription-Usage-Updated-Date"></a>
<a id="tocSsubscription-usage-updated-date"></a>
<a id="tocssubscription-usage-updated-date"></a>

```json
"2026-03-01T21:05:00Z"
```

The date and time the usage record was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

<h2 id="tocS_Subscription-Usage">Subscription-Usage</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-usage"></a>
<a id="schema_Subscription-Usage"></a>
<a id="tocSsubscription-usage"></a>
<a id="tocssubscription-usage"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "subscription_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "subscription_cycle_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "subscription_item_code": "api_calls",
  "usage_date": "2026-03-01T21:00:00Z",
  "quantity": 100.5,
  "metadata": {
    "user_id": "12345",
    "api_version": "v2",
    "usage_rate": 1.5,
    "is_trial": true
  },
  "created_at": "2026-03-01T21:05:00Z",
  "updated_at": "2026-03-01T21:05:00Z"
}
```

A recorded usage entry for a subscription item, including quantity, date, and metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Subscription-Usage-Id](#schemasubscription-usage-id)|true|none|The unique identifier of the usage record.|
|subscription_id|[Subscription-Id](#schemasubscription-id)|true|none|Unique identifier for the subscription.|
|subscription_cycle_id|[Subscription-Cycle-Id](#schemasubscription-cycle-id)|true|none|Unique identifier for the subscription cycle.|
|subscription_item_code|[Subscription-Item-Code](#schemasubscription-item-code)|true|none|A merchant-defined identifier for a usage-based subscription item. You set this code on each usage item when creating a subscription plan, and supply it when reporting consumption on [Create a subscription usage endpoint](https://developer.revolut.com/docs/api/merchant#create-subscription-usage) to target the correct metered item.<br><br>This allows a subscription with multiple usage items (e.g., `api_calls` and `storage_gb`) to receive consumption reports against the right item without relying on internal IDs.<br><br>The code must be unique within a plan phase.|
|usage_date|[Subscription-Usage-Date](#schemasubscription-usage-date)|true|none|The timestamp indicating when the consumption actually occurred.<br><br>\| Constraint \| Detail \|<br>\| ---------- \| ------ \|<br>\| Format \| [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time string (e.g., `YYYY-MM-DDTHH:mm:ssZ`). \|<br>\| Timezone \| Must be UTC. \|<br>\| Validation \| Revolut uses this to identify the applicable billing cycle. Accepted for the active cycle (`start_date ≤ usage_date < end_date`), for a recently ended cycle before its `usage_cutoff_date`, and for the one next upcoming cycle. Other dates are rejected. \||
|quantity|[Subscription-Usage-Quantity](#schemasubscription-usage-quantity)|true|none|The quantity of consumption to record for this usage report. <br><br>Supports up to 20 digits before and 20 digits after the decimal point.|
|metadata|[Subscription-Usage-Metadata](#schemasubscription-usage-metadata)|false|none|Key-value pairs you can attach to a usage record for your own tracking and reporting purposes.<br><br>\| Constraint \| Detail \|<br>\| ---------- \| ------ \|<br>\| Keys \| Maximum 50 keys per record. \|<br>\| Value types \| String, number, or boolean only. \|<br>\| Number precision \| Up to 20 digits before and 20 digits after the decimal point. \||
|created_at|[Subscription-Usage-Created-Date](#schemasubscription-usage-created-date)|true|none|The date and time the usage record was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|updated_at|[Subscription-Usage-Updated-Date](#schemasubscription-usage-updated-date)|true|none|The date and time the usage record was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|

<h2 id="tocS_Subscription-Usages">Subscription-Usages</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-usages"></a>
<a id="schema_Subscription-Usages"></a>
<a id="tocSsubscription-usages"></a>
<a id="tocssubscription-usages"></a>

```json
{
  "next_page_token": "string",
  "subscription_usages": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "subscription_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "subscription_cycle_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "subscription_item_code": "api_calls",
      "usage_date": "2026-03-01T21:00:00Z",
      "quantity": 100.5,
      "metadata": {
        "user_id": "12345",
        "api_version": "v2",
        "usage_rate": 1.5,
        "is_trial": true
      },
      "created_at": "2026-03-01T21:05:00Z",
      "updated_at": "2026-03-01T21:05:00Z"
    }
  ]
}
```

A paginated list of subscription usage entries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page_token|[Next-Page-Token](#schemanext-page-token)|false|none|Token for retrieving the next page of results. Use this token as the value of the `page_token` query parameter in your next request to retrieve the next page.<br><br>If not present, there are no more results to retrieve.|
|subscription_usages|[[Subscription-Usage](#schemasubscription-usage)]|false|none|List of subscription usages.|

<h2 id="tocS_Subscription-Usage-Creation">Subscription-Usage-Creation</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-usage-creation"></a>
<a id="schema_Subscription-Usage-Creation"></a>
<a id="tocSsubscription-usage-creation"></a>
<a id="tocssubscription-usage-creation"></a>

```json
{
  "subscription_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "subscription_item_code": "api_calls",
  "usage_date": "2026-03-01T21:00:00Z",
  "quantity": 100.5,
  "metadata": {
    "user_id": "12345",
    "api_version": "v2",
    "usage_rate": 1.5,
    "is_trial": true
  }
}
```

Request body for recording usage against a subscription item, including the subscription ID, item code, date, and quantity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscription_id|[Subscription-Id](#schemasubscription-id)|true|none|Unique identifier for the subscription.|
|subscription_item_code|[Subscription-Item-Code](#schemasubscription-item-code)|true|none|A merchant-defined identifier for a usage-based subscription item. You set this code on each usage item when creating a subscription plan, and supply it when reporting consumption on [Create a subscription usage endpoint](https://developer.revolut.com/docs/api/merchant#create-subscription-usage) to target the correct metered item.<br><br>This allows a subscription with multiple usage items (e.g., `api_calls` and `storage_gb`) to receive consumption reports against the right item without relying on internal IDs.<br><br>The code must be unique within a plan phase.|
|usage_date|[Subscription-Usage-Date](#schemasubscription-usage-date)|true|none|The timestamp indicating when the consumption actually occurred.<br><br>\| Constraint \| Detail \|<br>\| ---------- \| ------ \|<br>\| Format \| [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time string (e.g., `YYYY-MM-DDTHH:mm:ssZ`). \|<br>\| Timezone \| Must be UTC. \|<br>\| Validation \| Revolut uses this to identify the applicable billing cycle. Accepted for the active cycle (`start_date ≤ usage_date < end_date`), for a recently ended cycle before its `usage_cutoff_date`, and for the one next upcoming cycle. Other dates are rejected. \||
|quantity|[Subscription-Usage-Quantity](#schemasubscription-usage-quantity)|true|none|The quantity of consumption to record for this usage report. <br><br>Supports up to 20 digits before and 20 digits after the decimal point.|
|metadata|[Subscription-Usage-Metadata](#schemasubscription-usage-metadata)|false|none|Key-value pairs you can attach to a usage record for your own tracking and reporting purposes.<br><br>\| Constraint \| Detail \|<br>\| ---------- \| ------ \|<br>\| Keys \| Maximum 50 keys per record. \|<br>\| Value types \| String, number, or boolean only. \|<br>\| Number precision \| Up to 20 digits before and 20 digits after the decimal point. \||

<h2 id="tocS_Subscription-Usage-Update">Subscription-Usage-Update</h2>
<!-- backwards compatibility -->
<a id="schemasubscription-usage-update"></a>
<a id="schema_Subscription-Usage-Update"></a>
<a id="tocSsubscription-usage-update"></a>
<a id="tocssubscription-usage-update"></a>

```json
{
  "quantity": 100.5,
  "metadata": {
    "user_id": "12345",
    "api_version": "v2",
    "usage_rate": 1.5,
    "is_trial": true
  }
}
```

Request body for updating a recorded subscription usage entry's quantity or metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quantity|[Subscription-Usage-Quantity](#schemasubscription-usage-quantity)|false|none|The quantity of consumption to record for this usage report. <br><br>Supports up to 20 digits before and 20 digits after the decimal point.|
|metadata|[Subscription-Usage-Metadata](#schemasubscription-usage-metadata)|false|none|Key-value pairs you can attach to a usage record for your own tracking and reporting purposes.<br><br>\| Constraint \| Detail \|<br>\| ---------- \| ------ \|<br>\| Keys \| Maximum 50 keys per record. \|<br>\| Value types \| String, number, or boolean only. \|<br>\| Number precision \| Up to 20 digits before and 20 digits after the decimal point. \||

<h2 id="tocS_Payout-State">Payout-State</h2>
<!-- backwards compatibility -->
<a id="schemapayout-state"></a>
<a id="schema_Payout-State"></a>
<a id="tocSpayout-state"></a>
<a id="tocspayout-state"></a>

```json
"processing"
```

The state of the payout.

<h2 id="tocS_Payout-Id">Payout-Id</h2>
<!-- backwards compatibility -->
<a id="schemapayout-id"></a>
<a id="schema_Payout-Id"></a>
<a id="tocSpayout-id"></a>
<a id="tocspayout-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

Permanent payout ID used for payouts operations.

<h2 id="tocS_Payout-Destination-Type">Payout-Destination-Type</h2>
<!-- backwards compatibility -->
<a id="schemapayout-destination-type"></a>
<a id="schema_Payout-Destination-Type"></a>
<a id="tocSpayout-destination-type"></a>
<a id="tocspayout-destination-type"></a>

```json
"current_pocket"
```

The destination of the payout funds when a merchant initiates a withdrawal from their merchant account.

| Destination type | Description |
| ---------------- | ----------- |
| `current_pocket` | The funds were moved from the merchant account to the business account within the platform. This indicates an **internal transfer**, allowing the merchant to access the funds within their own business account. |
| `external_beneficiary` | The funds were transferred to an external bank account or beneficiary outside the platform. This indicates a **transfer to an external account**, enabling the merchant to withdraw funds to external financial institutions. |

<h2 id="tocS_Payout-Amount">Payout-Amount</h2>
<!-- backwards compatibility -->
<a id="schemapayout-amount"></a>
<a id="schema_Payout-Amount"></a>
<a id="tocSpayout-amount"></a>
<a id="tocspayout-amount"></a>

```json
1
```

The total amount of the payout in minor currency units. For example, `7034` represents €70.34.

<h2 id="tocS_Payout">Payout</h2>
<!-- backwards compatibility -->
<a id="schemapayout"></a>
<a id="schema_Payout"></a>
<a id="tocSpayout"></a>
<a id="tocspayout"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "state": "processing",
  "created_at": "1970-01-01T00:00:00Z",
  "destination_type": "current_pocket",
  "amount": 1,
  "currency": "str"
}
```

A payout to a merchant, including its state, amount, currency, and destination type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Payout-Id](#schemapayout-id)|true|none|Permanent payout ID used for payouts operations.|
|state|[Payout-State](#schemapayout-state)|true|none|The state of the payout.|
|created_at|string(date-time)|true|none|The date and time the payout was created.|
|destination_type|[Payout-Destination-Type](#schemapayout-destination-type)|true|none|The destination of the payout funds when a merchant initiates a withdrawal from their merchant account.<br><br>\| Destination type \| Description \|<br>\| ---------------- \| ----------- \|<br>\| `current_pocket` \| The funds were moved from the merchant account to the business account within the platform. This indicates an **internal transfer**, allowing the merchant to access the funds within their own business account. \|<br>\| `external_beneficiary` \| The funds were transferred to an external bank account or beneficiary outside the platform. This indicates a **transfer to an external account**, enabling the merchant to withdraw funds to external financial institutions. \||
|amount|[Payout-Amount](#schemapayout-amount)|false|none|The total amount of the payout in minor currency units. For example, `7034` represents €70.34.|
|currency|[Currency](#schemacurrency)|false|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|

#### Enumerated Values

|Property|Value|
|---|---|
|state|processing|
|state|completed|
|state|failed|
|destination_type|current_pocket|
|destination_type|external_beneficiary|

<h2 id="tocS_Report-Run-From">Report-Run-From</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-from"></a>
<a id="schema_Report-Run-From"></a>
<a id="tocSreport-run-from"></a>
<a id="tocsreport-run-from"></a>

```json
"1970-01-01T00:00:00Z"
```

This parameter specifies the start boundary for filtering report data. It accepts ETC/UTC date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) and includes all matching records on or after this timestamp.

Combined with the `to` parameter, this determines the report's timeframe, including all matching records between the two values.

For example, by setting the `from` parameter to `2021-01-01T00:00:00Z`, the report will include matching records from the first second of January 1, 2021, UTC, and onwards.

<h2 id="tocS_Report-Run-To">Report-Run-To</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-to"></a>
<a id="schema_Report-Run-To"></a>
<a id="tocSreport-run-to"></a>
<a id="tocsreport-run-to"></a>

```json
"1970-01-01T00:00:00Z"
```

This parameter specifies the end boundary for filtering report data. It accepts ETC/UTC date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) and includes all matching records before this timestamp (exclusive).

Combined with the `from` parameter, this determines the timeframe for the report, including all matching records between the two values.

For example, setting the `to` parameter to `2021-12-31T23:59:59Z` will include all matching records in the report up to, but not including, the last second of December 31, 2021, UTC.

<h2 id="tocS_Report-Run-Entity-Types">Report-Run-Entity-Types</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-entity-types"></a>
<a id="schema_Report-Run-Entity-Types"></a>
<a id="tocSreport-run-entity-types"></a>
<a id="tocsreport-run-entity-types"></a>

```json
[
  "payment"
]
```

Select source entity families to be included in the report.

| Value | Description |
| ----- | ----------- |
| `payment` | Include rows originating from payment settlement activity. |
| `refund` | Include rows originating from refund activity. |
| `dispute` | Include rows originating from dispute and chargeback activity. |

:::note
These values are filter input categories. They do not map 1:1 to the CSV `type` output column. For example, a settlement report filtered with `payment`, `refund`, and `dispute` can still return CSV `type` values such as `SETTLEMENT`, `REFUND`, `CHARGEBACK`, and `CHARGEBACK_REVERSAL`.
:::

<h2 id="tocS_Report-Run-Entity-States">Report-Run-Entity-States</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-entity-states"></a>
<a id="schema_Report-Run-Entity-States"></a>
<a id="tocSreport-run-entity-states"></a>
<a id="tocsreport-run-entity-states"></a>

```json
[
  "completed"
]
```

Select transactions by state to be included in the report.

| Value | Description |
| ----- | ----------- |
| `completed` | Include transactions that reached their final successful state. |
| `processing` | Include transactions that are still being processed. |
| `cancelled` | Include transactions that were cancelled before final completion. |
| `reverted` | Include transactions that were reversed after initial creation. |

If not provided, only `completed` transactions will be included in the report.

<h2 id="tocS_Report-Run-Currency">Report-Run-Currency</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-currency"></a>
<a id="schema_Report-Run-Currency"></a>
<a id="tocSreport-run-currency"></a>
<a id="tocsreport-run-currency"></a>

```json
"GBP"
```

Select transactions with specific currencies to include in the report. Provide [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.

:::info
For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).
:::

<h2 id="tocS_Report-Run-Location-Id">Report-Run-Location-Id</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-location-id"></a>
<a id="schema_Report-Run-Location-Id"></a>
<a id="tocSreport-run-location-id"></a>
<a id="tocsreport-run-location-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

Select transactions by location ID to be included in the report.

:::info
For more information, see: [Locations](https://developer.revolut.com/docs/api/merchant#tag-locations).
:::

<h2 id="tocS_Report-Run-Filter">Report-Run-Filter</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-filter"></a>
<a id="schema_Report-Run-Filter"></a>
<a id="tocSreport-run-filter"></a>
<a id="tocsreport-run-filter"></a>

```json
{
  "from": "1970-01-01T00:00:00Z",
  "to": "1970-01-01T00:00:00Z",
  "entity_types": [
    "payment"
  ],
  "entity_states": [
    "completed"
  ],
  "currency": "GBP",
  "location_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Filtering parameters to be applied to the report.

:::note
For `settlement_report` and `custom_report`, `from` and `to` are evaluated against the transaction `created_date`, not the original payment-start timeframe or the `payment_created_date` and `payment_captured_date` columns.
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|[Report-Run-From](#schemareport-run-from)|true|none|This parameter specifies the start boundary for filtering report data. It accepts ETC/UTC date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) and includes all matching records on or after this timestamp.<br><br>Combined with the `to` parameter, this determines the report's timeframe, including all matching records between the two values.<br><br>For example, by setting the `from` parameter to `2021-01-01T00:00:00Z`, the report will include matching records from the first second of January 1, 2021, UTC, and onwards.|
|to|[Report-Run-To](#schemareport-run-to)|true|none|This parameter specifies the end boundary for filtering report data. It accepts ETC/UTC date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) and includes all matching records before this timestamp (exclusive).<br><br>Combined with the `from` parameter, this determines the timeframe for the report, including all matching records between the two values.<br><br>For example, setting the `to` parameter to `2021-12-31T23:59:59Z` will include all matching records in the report up to, but not including, the last second of December 31, 2021, UTC.|
|entity_types|[Report-Run-Entity-Types](#schemareport-run-entity-types)|false|none|Select source entity families to be included in the report.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `payment` \| Include rows originating from payment settlement activity. \|<br>\| `refund` \| Include rows originating from refund activity. \|<br>\| `dispute` \| Include rows originating from dispute and chargeback activity. \|<br><br>:::note<br>These values are filter input categories. They do not map 1:1 to the CSV `type` output column. For example, a settlement report filtered with `payment`, `refund`, and `dispute` can still return CSV `type` values such as `SETTLEMENT`, `REFUND`, `CHARGEBACK`, and `CHARGEBACK_REVERSAL`.<br>:::|
|entity_states|[Report-Run-Entity-States](#schemareport-run-entity-states)|false|none|Select transactions by state to be included in the report.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `completed` \| Include transactions that reached their final successful state. \|<br>\| `processing` \| Include transactions that are still being processed. \|<br>\| `cancelled` \| Include transactions that were cancelled before final completion. \|<br>\| `reverted` \| Include transactions that were reversed after initial creation. \|<br><br>If not provided, only `completed` transactions will be included in the report.|
|currency|[Report-Run-Currency](#schemareport-run-currency)|false|none|Select transactions with specific currencies to include in the report. Provide [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|location_id|[Report-Run-Location-Id](#schemareport-run-location-id)|false|none|Select transactions by location ID to be included in the report.<br><br>:::info<br>For more information, see: [Locations](https://developer.revolut.com/docs/api/merchant#tag-locations).<br>:::        |

#### Enumerated Values

|Property|Value|
|---|---|
|entity_types|payment|
|entity_types|refund|
|entity_types|dispute|
|entity_states|completed|
|entity_states|processing|
|entity_states|cancelled|
|entity_states|reverted|

<h2 id="tocS_Report-Run-Format">Report-Run-Format</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-format"></a>
<a id="schema_Report-Run-Format"></a>
<a id="tocSreport-run-format"></a>
<a id="tocsreport-run-format"></a>

```json
"csv"
```

Format of the generated report file.

<h2 id="tocS_Report-Run-Type">Report-Run-Type</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-type"></a>
<a id="schema_Report-Run-Type"></a>
<a id="tocSreport-run-type"></a>
<a id="tocsreport-run-type"></a>

```json
"settlement_report"
```

Type of the report.

  | Report type | Description |
  | -------------- | ----------- |
  | `settlement_report` | All settled transactions associated with a Merchant account, with a configurable set of columns. |
  | `custom_report` | Settled and processing transactions associated with a Merchant account, with a configurable set of columns. |
  | `payments_report` | Payments report provides details of all payments associated with a Merchant account, including failed and declined payments. Supports filtering by `from` and `to` creation timestamps, and optionally by `entity_states`. |
  | `payout_statement_report`    | Payout statement Reports provide a detailed breakdown of all transactions contributing to a specific payout amount. It requires the additional parameter `filter.payout_id`, which should be obtained from the payout ID retrieved via the [payout list endpoint](https://developer.revolut.com/docs/api/merchant#retrieve-payout-list) or from [webhook events](https://developer.revolut.com/docs/api/merchant#webhook-webhook-event). |
  | `icpp_fee_breakdown_report`  | IC++ fee breakdown reports provide a detailed breakdown of fees for each IC++ transaction related to a payout. It requires the additional parameter `filter.icpp_charge_id`, which should be obtained from the `related_icpp_charge_id` column in the Payout statement report. A separate report should be generated for each IC++ transaction. |

<h2 id="tocS_Report-Run-Timezone">Report-Run-Timezone</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-timezone"></a>
<a id="schema_Report-Run-Timezone"></a>
<a id="tocSreport-run-timezone"></a>
<a id="tocsreport-run-timezone"></a>

```json
"Europe/London"
```

Defaults to `ETC/UTC`. Defines the output timezone for all timestamps displayed in the report.

Has no effect on `from` or `to` parameters.

<h2 id="tocS_Report-Run-Settlement-Options">Report-Run-Settlement-Options</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-settlement-options"></a>
<a id="schema_Report-Run-Settlement-Options"></a>
<a id="tocSreport-run-settlement-options"></a>
<a id="tocsreport-run-settlement-options"></a>

```json
{
  "timezone": "Europe/London",
  "columns": [
    "transaction_id",
    "type",
    "amount",
    "currency",
    "settlement_amount",
    "settlement_currency"
  ]
}
```

Further options to customise the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timezone|[Report-Run-Timezone](#schemareport-run-timezone)|false|none|Defaults to `ETC/UTC`. Defines the output timezone for all timestamps displayed in the report.<br><br>Has no effect on `from` or `to` parameters.|
|columns|[string]|false|none|Names of the columns to be included in the report.<br><br>If the `columns` parameter is not defined in the request, all available columns will be included in the report. An empty array will return an error.<br><br>Available columns:<br><br>  \| Column name \| Description \|<br>  \| ----------- \| ----------- \|<br>  \| `transaction_id` \| Unique identifier of the ledger transaction related to an order. \|<br>  \| `order_id` \| Unique identifier of the order. \|<br>  \| `original_order_id` \| Unique identifier of the original order. For refunds and chargebacks, references the order being reversed. \|<br>  \| `started_date` \| Start timestamp shown on the row. For payment rows, this is the payment start timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction start timestamp. Separate from the report filter timeframe. \|<br>  \| `updated_date` \| Last update timestamp shown on the row. For payment rows, this is the payment update timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction update timestamp. Separate from the report filter timeframe. \|<br>  \| `completed_date` \| Completion timestamp shown on the row. For payment rows, this is the payment completion timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction completion timestamp. Separate from the report filter timeframe. \|<br>  \| `payment_created_date` \| Payment authorisation or creation timestamp for rows linked to a payment. Empty for refunds and non-payment-related rows where no payment timestamp applies. This is returned data, not the report filter key. \|<br>  \| `payment_captured_date` \| Payment capture timestamp for rows linked to a captured payment. Empty for refunds, non-payment-related rows, or payments not captured. This is returned data, not the report filter key. \|<br>  \| `type` \| Settlement report row type. A partial-settlement is represented by separate `SETTLEMENT` and `REFUND` rows, not a dedicated type. \|<br>  \| `state` \| State of the transaction. \|<br>  \| `description` \| Description of the order. \|<br>  \| `merchant_order_ext_ref` \| Merchant's order reference. The value of the `merchant_order_data.reference` field set when the order was created. \|<br>  \| `customer_id` \| Unique identifier of the customer. \|<br>  \| `amount` \| Total amount of the order. \|<br>  \| `currency` \| The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the order. \|<br>  \| `settlement_amount` \| Total amount settled on the merchant's account. \|<br>  \| `settlement_currency` \| The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the settled amount. \|<br>  \| `payment_method` \| Type of the payment method the customer used to pay for the order. \|<br>  \| `fee_amount` \| Total fee amount applied to the order, aggregated across all fee components (acquiring markup + interchange + scheme fees). \|<br>  \| `fee_currency` \| The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the total fee. \|<br>  \| `processing_fee_amount` \| Acquiring markup fee only — a subset of `fee_amount`. Represents Revolut's service fee, excluding interchange and scheme fees. \|<br>  \| `processing_fee_currency` \| The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the acquiring markup fee. \|<br>  \| `browser_url` \| The URL where the customer initiated the payment. \|<br>  \| `location_id` \| Unique identifier of the location related to the transaction. \||

#### Enumerated Values

|Property|Value|
|---|---|
|columns|transaction_id|
|columns|order_id|
|columns|original_order_id|
|columns|started_date|
|columns|updated_date|
|columns|completed_date|
|columns|payment_created_date|
|columns|payment_captured_date|
|columns|type|
|columns|state|
|columns|description|
|columns|merchant_order_ext_ref|
|columns|customer_id|
|columns|amount|
|columns|currency|
|columns|settlement_amount|
|columns|settlement_currency|
|columns|payment_method|
|columns|fee_amount|
|columns|fee_currency|
|columns|processing_fee_amount|
|columns|processing_fee_currency|
|columns|browser_url|
|columns|location_id|

<h2 id="tocS_Report-Run-Settlement-Report">Report-Run-Settlement-Report</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-settlement-report"></a>
<a id="schema_Report-Run-Settlement-Report"></a>
<a id="tocSreport-run-settlement-report"></a>
<a id="tocsreport-run-settlement-report"></a>

```json
{
  "filter": {
    "from": "1970-01-01T00:00:00Z",
    "to": "1970-01-01T00:00:00Z",
    "entity_types": [
      "payment"
    ],
    "entity_states": [
      "completed"
    ],
    "currency": "GBP",
    "location_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "format": "csv",
  "type": "settlement_report",
  "options": {
    "timezone": "Europe/London",
    "columns": [
      "transaction_id",
      "type",
      "amount",
      "currency",
      "settlement_amount",
      "settlement_currency"
    ]
  }
}
```

A settlement report contains all the query information for generating reports of settled transactions associated with a Merchant account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|[Report-Run-Filter](#schemareport-run-filter)|true|none|Filtering parameters to be applied to the report.<br><br>:::note<br>For `settlement_report` and `custom_report`, `from` and `to` are evaluated against the transaction `created_date`, not the original payment-start timeframe or the `payment_created_date` and `payment_captured_date` columns.<br>:::|
|format|[Report-Run-Format](#schemareport-run-format)|true|none|Format of the generated report file.|
|type|[Report-Run-Type](#schemareport-run-type)|true|none|Type of the report.<br><br>  \| Report type \| Description \|<br>  \| -------------- \| ----------- \|<br>  \| `settlement_report` \| All settled transactions associated with a Merchant account, with a configurable set of columns. \|<br>  \| `custom_report` \| Settled and processing transactions associated with a Merchant account, with a configurable set of columns. \|<br>  \| `payments_report` \| Payments report provides details of all payments associated with a Merchant account, including failed and declined payments. Supports filtering by `from` and `to` creation timestamps, and optionally by `entity_states`. \|<br>  \| `payout_statement_report`    \| Payout statement Reports provide a detailed breakdown of all transactions contributing to a specific payout amount. It requires the additional parameter `filter.payout_id`, which should be obtained from the payout ID retrieved via the [payout list endpoint](https://developer.revolut.com/docs/api/merchant#retrieve-payout-list) or from [webhook events](https://developer.revolut.com/docs/api/merchant#webhook-webhook-event). \|<br>  \| `icpp_fee_breakdown_report`  \| IC++ fee breakdown reports provide a detailed breakdown of fees for each IC++ transaction related to a payout. It requires the additional parameter `filter.icpp_charge_id`, which should be obtained from the `related_icpp_charge_id` column in the Payout statement report. A separate report should be generated for each IC++ transaction. \||
|options|[Report-Run-Settlement-Options](#schemareport-run-settlement-options)|false|none|Further options to customise the report.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|csv|
|type|settlement_report|
|type|custom_report|
|type|payments_report|
|type|payout_statement_report|
|type|icpp_fee_breakdown_report|

<h2 id="tocS_Report-Run-Custom-Options">Report-Run-Custom-Options</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-custom-options"></a>
<a id="schema_Report-Run-Custom-Options"></a>
<a id="tocSreport-run-custom-options"></a>
<a id="tocsreport-run-custom-options"></a>

```json
{
  "timezone": "Europe/London",
  "columns": [
    "transaction_id",
    "amount",
    "currency",
    "metadata.my_attribute"
  ]
}
```

Further options to customise the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timezone|[Report-Run-Timezone](#schemareport-run-timezone)|false|none|Defaults to `ETC/UTC`. Defines the output timezone for all timestamps displayed in the report.<br><br>Has no effect on `from` or `to` parameters.|
|columns|[string]|false|none|Names of the columns to include in the report.<br><br>If not specified, all available columns are included. An empty array returns an error.<br><br>To include custom order metadata, use `metadata.*` with the attribute name, for example `metadata.my_attribute`.<br><br>Available columns:<br><br>  \| Column name \| Description \|<br>  \| ----------- \| ----------- \|<br>  \| `transaction_id` \| Unique identifier of the ledger transaction. Matches `transaction_id` in the settlement and payout reports. Use `order_id` to cross-reference with the payments report. \|<br>  \| `related_transaction_id` \| For refund and chargeback transactions, the ledger transaction ID of the original payment. Corresponds to `original_transaction_id` in the payout report. \|<br>  \| `transaction_description` \| Description of the transaction. \|<br>  \| `payout_id` \| Unique identifier of the payout that this transaction contributed to. \|<br>  \| `dispute_id` \| Unique identifier of the dispute associated with this transaction, if applicable. \|<br>  \| `account_id` \| Unique identifier of the merchant account. \|<br>  \| `account_balance` \| Account balance at the time of the transaction. \|<br>  \| `order_id` \| Unique identifier of the order. Use to cross-reference with the payments or payout reports. \|<br>  \| `original_order_id` \| For refunds and chargebacks, the order ID of the original payment. For settlement transactions, matches `order_id`. \|<br>  \| `original_order_ext_ref` \| Merchant's order identifier of the original order for external reference. \|<br>  \| `order_description` \| Description of the order. \|<br>  \| `order_channel` \| Channel through which the order was created. \|<br>  \| `order_customer_note` \| Note added by the customer at the time of the order. \|<br>  \| `order_tip_amount` \| Tip amount set at the order level. \|<br>  \| `order_created_by` \| Identifier of the user who created the order. \|<br>  \| `payment_initiated_by` \| Identifier of who initiated the payment. \|<br>  \| `order_line_items` \| Line items included in the order, if any. \|<br>  \| `payout_reference` \| Reference of the payout transfer associated with the transaction. \|<br>  \| `invoice_reference` \| Invoice reference associated with the order, if any. \|<br>  \| `started_date` \| Start timestamp shown on the row. For payment rows, this is the payment start timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction start timestamp. Separate from the report filter timeframe. \|<br>  \| `created_date` \| Date and time the order was created. \|<br>  \| `updated_date` \| Last update timestamp shown on the row. For payment rows, this is the payment update timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction update timestamp. Separate from the report filter timeframe. \|<br>  \| `completed_date` \| Completion timestamp shown on the row. For payment rows, this is the payment completion timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction completion timestamp. Separate from the report filter timeframe. \|<br>  \| `payment_created_date` \| Payment authorisation or creation timestamp for rows linked to a payment. Empty for refunds and non-payment-related rows where no payment timestamp applies. This is returned data, not the report filter key. \|<br>  \| `payment_captured_date` \| Payment capture timestamp for rows linked to a captured payment. Empty for refunds, non-payment-related rows, or payments not captured. This is returned data, not the report filter key. \|<br>  \| `type` \| Category of the reported transaction row, indicating what kind of balance-affecting event the row represents. For the full list of returned values, see [Download report file](https://developer.revolut.com/docs/api/merchant#download-report-file). \|<br>  \| `legacy_type` \| Legacy type value for backwards compatibility. \|<br>  \| `state` \| State of the transaction. \|<br>  \| `description` \| Description of the transaction. \|<br>  \| `merchant_order_ext_ref` \| Merchant's order reference. The value of the `merchant_order_data.reference` field set when the order was created. \|<br>  \| `customer_id` \| Unique identifier of the customer. \|<br>  \| `amount` \| Total amount of the order. \|<br>  \| `currency` \| The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the order. \|<br>  \| `settlement_amount` \| Total amount settled on the merchant's account. \|<br>  \| `settlement_currency` \| The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the settled amount. \|<br>  \| `exchange_rate` \| Exchange rate applied if currency conversion occurred. \|<br>  \| `refunded_amount` \| Amount refunded for the order. \|<br>  \| `statement_descriptor` \| Statement descriptor shown on the customer's bank statement. \|<br>  \| `tip_amount` \| Tip amount included in the transaction. \|<br>  \| `terminal_hardware_id` \| Identifier of the card reader hardware used, for in-person payments. \|<br>  \| `customer_name` \| Name of the customer. \|<br>  \| `customer_email` \| Email address of the customer. \|<br>  \| `customer_card_number` \| Masked card number used for the payment. \|<br>  \| `customer_card_brand` \| Card brand used for the payment. Derived from BIN data. Example values: `VISA`, `MASTERCARD`, `MASTERCARD_DEBIT`, `MAESTRO`, `AMEX`, `DINERS`, `DISCOVER`, `JCB`. \|<br>  \| `customer_card_type` \| Card funding type of the card used for the payment, for example debit, credit, prepaid, deferred debit, or charge. For the full list of returned values, see [Download report file](https://developer.revolut.com/docs/api/merchant#download-report-file). \|<br>  \| `customer_card_category` \| Card commercial category. Values: `consumer` (personal card) and `commercial` (business or corporate card). \|<br>  \| `payment_method` \| Payment method the customer used to pay for the order. \|<br>  \| `fee_amount` \| Total fee amount applied to the order, aggregated across all fee components (acquiring markup + interchange + scheme fees). \|<br>  \| `fee_currency` \| The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the total fee. \|<br>  \| `processing_fee_amount` \| Acquiring markup fee only — a subset of `fee_amount`. Represents Revolut's service fee, excluding interchange and scheme fees. \|<br>  \| `processing_fee_currency` \| The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the acquiring markup fee. \|<br>  \| `fx_fee_amount` \| Foreign exchange fee amount, if applicable. \|<br>  \| `fx_fee_currency` \| The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the FX fee. \|<br>  \| `browser_url` \| The URL where the customer initiated the payment. \|<br>  \| `beneficiary_name` \| Name of the beneficiary, for bank transfer payments. \|<br>  \| `beneficiary_account_number` \| Account number of the beneficiary, for bank transfer payments. \|<br>  \| `location_id` \| Unique identifier of the location related to the transaction. \|<br>  \| `location_name` \| Name of the location related to the transaction. \|<br>  \| `surcharge_amount` \| Surcharge amount applied to the transaction. Omitted when no surcharge applies. \|<br>  \| `order_surcharge_amount` \| Surcharge amount set at the order level. \|<br>  \| `order_custom_field_name` \| Name of a custom field set on the order. \|<br>  \| `order_custom_field_value` \| Value of a custom field set on the order. \|<br>  \| `offline_payment_state` \| State of an offline payment, if applicable. \|<br>  \| `order_authorisation_type` \| Authorisation type of the order, for example `FULL` or `PRE_AUTH`. \|<br>  \| `metadata.*` \| Custom order metadata. Replace `*` with the attribute name, for example `metadata.my_attribute`. \||

#### Enumerated Values

|Property|Value|
|---|---|
|columns|transaction_id|
|columns|related_transaction_id|
|columns|transaction_description|
|columns|payout_id|
|columns|dispute_id|
|columns|account_id|
|columns|account_balance|
|columns|order_id|
|columns|original_order_id|
|columns|original_order_ext_ref|
|columns|order_description|
|columns|order_channel|
|columns|order_customer_note|
|columns|order_tip_amount|
|columns|order_created_by|
|columns|payment_initiated_by|
|columns|order_line_items|
|columns|payout_reference|
|columns|invoice_reference|
|columns|started_date|
|columns|created_date|
|columns|updated_date|
|columns|completed_date|
|columns|payment_created_date|
|columns|payment_captured_date|
|columns|type|
|columns|legacy_type|
|columns|state|
|columns|description|
|columns|merchant_order_ext_ref|
|columns|customer_id|
|columns|amount|
|columns|currency|
|columns|settlement_amount|
|columns|settlement_currency|
|columns|exchange_rate|
|columns|refunded_amount|
|columns|statement_descriptor|
|columns|tip_amount|
|columns|terminal_hardware_id|
|columns|customer_name|
|columns|customer_email|
|columns|customer_card_number|
|columns|customer_card_brand|
|columns|customer_card_type|
|columns|customer_card_category|
|columns|payment_method|
|columns|fee_amount|
|columns|fee_currency|
|columns|processing_fee_amount|
|columns|processing_fee_currency|
|columns|fx_fee_amount|
|columns|fx_fee_currency|
|columns|browser_url|
|columns|beneficiary_name|
|columns|beneficiary_account_number|
|columns|location_id|
|columns|location_name|
|columns|surcharge_amount|
|columns|order_surcharge_amount|
|columns|order_custom_field_name|
|columns|order_custom_field_value|
|columns|offline_payment_state|
|columns|order_authorisation_type|
|columns|metadata.*|

<h2 id="tocS_Report-Run-Custom-Report">Report-Run-Custom-Report</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-custom-report"></a>
<a id="schema_Report-Run-Custom-Report"></a>
<a id="tocSreport-run-custom-report"></a>
<a id="tocsreport-run-custom-report"></a>

```json
{
  "filter": {
    "from": "1970-01-01T00:00:00Z",
    "to": "1970-01-01T00:00:00Z",
    "entity_types": [
      "payment"
    ],
    "entity_states": [
      "completed"
    ],
    "currency": "GBP",
    "location_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "format": "csv",
  "type": "settlement_report",
  "options": {
    "timezone": "Europe/London",
    "columns": [
      "transaction_id",
      "amount",
      "currency",
      "metadata.my_attribute"
    ]
  }
}
```

A custom report contains all the query information for generating reports of selected transactions associated with a Merchant account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|[Report-Run-Filter](#schemareport-run-filter)|true|none|Filtering parameters to be applied to the report.<br><br>:::note<br>For `settlement_report` and `custom_report`, `from` and `to` are evaluated against the transaction `created_date`, not the original payment-start timeframe or the `payment_created_date` and `payment_captured_date` columns.<br>:::|
|format|[Report-Run-Format](#schemareport-run-format)|true|none|Format of the generated report file.|
|type|[Report-Run-Type](#schemareport-run-type)|true|none|Type of the report.<br><br>  \| Report type \| Description \|<br>  \| -------------- \| ----------- \|<br>  \| `settlement_report` \| All settled transactions associated with a Merchant account, with a configurable set of columns. \|<br>  \| `custom_report` \| Settled and processing transactions associated with a Merchant account, with a configurable set of columns. \|<br>  \| `payments_report` \| Payments report provides details of all payments associated with a Merchant account, including failed and declined payments. Supports filtering by `from` and `to` creation timestamps, and optionally by `entity_states`. \|<br>  \| `payout_statement_report`    \| Payout statement Reports provide a detailed breakdown of all transactions contributing to a specific payout amount. It requires the additional parameter `filter.payout_id`, which should be obtained from the payout ID retrieved via the [payout list endpoint](https://developer.revolut.com/docs/api/merchant#retrieve-payout-list) or from [webhook events](https://developer.revolut.com/docs/api/merchant#webhook-webhook-event). \|<br>  \| `icpp_fee_breakdown_report`  \| IC++ fee breakdown reports provide a detailed breakdown of fees for each IC++ transaction related to a payout. It requires the additional parameter `filter.icpp_charge_id`, which should be obtained from the `related_icpp_charge_id` column in the Payout statement report. A separate report should be generated for each IC++ transaction. \||
|options|[Report-Run-Custom-Options](#schemareport-run-custom-options)|false|none|Further options to customise the report.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|csv|
|type|settlement_report|
|type|custom_report|
|type|payments_report|
|type|payout_statement_report|
|type|icpp_fee_breakdown_report|

<h2 id="tocS_Report-Run-Payments-Entity-States">Report-Run-Payments-Entity-States</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-payments-entity-states"></a>
<a id="schema_Report-Run-Payments-Entity-States"></a>
<a id="tocSreport-run-payments-entity-states"></a>
<a id="tocsreport-run-payments-entity-states"></a>

```json
[
  "completed"
]
```

Select payments by state to be included in the report.

| Value | Description |
| ----- | ----------- |
| `completed` | Include payments that completed successfully. |
| `failed` | Include payments that failed during processing. |
| `declined` | Include payments rejected by the issuer or payment flow. |
| `cancelled` | Include payments cancelled before completion. |

If not provided, payments in all states will be included in the report.

<h2 id="tocS_Report-Run-Payments-Filter">Report-Run-Payments-Filter</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-payments-filter"></a>
<a id="schema_Report-Run-Payments-Filter"></a>
<a id="tocSreport-run-payments-filter"></a>
<a id="tocsreport-run-payments-filter"></a>

```json
{
  "from": "1970-01-01T00:00:00Z",
  "to": "1970-01-01T00:00:00Z",
  "entity_states": [
    "completed"
  ]
}
```

Filtering parameters to be applied to the report.

:::note
For `payments_report`, `from` and `to` are evaluated against the payment `created_date`. The `captured_date` column is returned data and does not change the filter key.
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|[Report-Run-From](#schemareport-run-from)|true|none|This parameter specifies the start boundary for filtering report data. It accepts ETC/UTC date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) and includes all matching records on or after this timestamp.<br><br>Combined with the `to` parameter, this determines the report's timeframe, including all matching records between the two values.<br><br>For example, by setting the `from` parameter to `2021-01-01T00:00:00Z`, the report will include matching records from the first second of January 1, 2021, UTC, and onwards.|
|to|[Report-Run-To](#schemareport-run-to)|true|none|This parameter specifies the end boundary for filtering report data. It accepts ETC/UTC date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) and includes all matching records before this timestamp (exclusive).<br><br>Combined with the `from` parameter, this determines the timeframe for the report, including all matching records between the two values.<br><br>For example, setting the `to` parameter to `2021-12-31T23:59:59Z` will include all matching records in the report up to, but not including, the last second of December 31, 2021, UTC.|
|entity_states|[Report-Run-Payments-Entity-States](#schemareport-run-payments-entity-states)|false|none|Select payments by state to be included in the report.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `completed` \| Include payments that completed successfully. \|<br>\| `failed` \| Include payments that failed during processing. \|<br>\| `declined` \| Include payments rejected by the issuer or payment flow. \|<br>\| `cancelled` \| Include payments cancelled before completion. \|<br><br>If not provided, payments in all states will be included in the report.|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_states|completed|
|entity_states|failed|
|entity_states|declined|
|entity_states|cancelled|

<h2 id="tocS_Report-Run-Payments-Options">Report-Run-Payments-Options</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-payments-options"></a>
<a id="schema_Report-Run-Payments-Options"></a>
<a id="tocSreport-run-payments-options"></a>
<a id="tocsreport-run-payments-options"></a>

```json
{
  "timezone": "Europe/London",
  "columns": [
    "payment_id",
    "type",
    "state",
    "amount",
    "currency"
  ]
}
```

Further options to customise the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timezone|[Report-Run-Timezone](#schemareport-run-timezone)|false|none|Defaults to `ETC/UTC`. Defines the output timezone for all timestamps displayed in the report.<br><br>Has no effect on `from` or `to` parameters.|
|columns|[string]|false|none|Names of the columns to be included in the report.<br><br>If the `columns` parameter is not defined in the request, all available columns will be included in the report. An empty array will return an error.<br><br>Available columns:<br><br>  \| Column name \| Description \|<br>  \| ----------- \| ----------- \|<br>  \| `payment_id` \| Unique identifier of the payment. \|<br>  \| `type` \| Category of the payment row, indicating whether the row represents a payment attempt or a refund. For the full list of returned values, see [Download report file](https://developer.revolut.com/docs/api/merchant#download-report-file). \|<br>  \| `description` \| Description of the payment. \|<br>  \| `original_payment_id` \| For refunds, the unique identifier of the original payment. \|<br>  \| `order_id` \| Unique identifier of the order associated with the payment. \|<br>  \| `state` \| Lifecycle state of the payment. For the full list of returned values, see [Download report file](https://developer.revolut.com/docs/api/merchant#download-report-file). \|<br>  \| `reason` \| Reason for a failed or declined payment, for example: `Insufficient Funds`. \|<br>  \| `amount` \| Total amount of the payment. \|<br>  \| `currency` \| The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the payment. \|<br>  \| `surcharge_amount` \| Surcharge amount applied to the payment, if any. \|<br>  \| `tip_amount` \| Tip amount included in the payment, if any. \|<br>  \| `refunded_amount` \| Amount refunded for the payment. \|<br>  \| `created_date` \| Date and time the payment was created. \|<br>  \| `captured_date` \| Date and time the payment was captured. Empty when the payment has not been captured. \|<br>  \| `merchant_order_ext_ref` \| Merchant's order reference. The value of the `merchant_order_data.reference` field set when the order was created. \|<br>  \| `payment_method` \| Payment method used, for example: `CARD` or `PAY_WITH_REVOLUT`. \|<br>  \| `location_id` \| Unique identifier of the location where the payment was made. \|<br>  \| `customer_id` \| Unique identifier of the customer. \|<br>  \| `customer_card_number` \| Masked card number used for the payment. \|<br>  \| `customer_card_country` \| Country of the card used for the payment, as an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code. \|<br>  \| `customer_card_brand` \| Card brand used for the payment, for example: `VISA` or `MASTERCARD_DEBIT`. \|<br>  \| `customer_card_type` \| Card funding type of the card used for the payment. For the full list of returned values, see [Download report file](https://developer.revolut.com/docs/api/merchant#download-report-file). \|<br>  \| `customer_card_category` \| Card commercial category. Values: `consumer` (personal card) and `commercial` (business or corporate card). \|<br>  \| `customer_email` \| Email address of the customer. \|<br>  \| `fee_amount` \| Total fee amount charged for the payment. \|<br>  \| `fee_currency` \| The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the fee. \||

#### Enumerated Values

|Property|Value|
|---|---|
|columns|payment_id|
|columns|type|
|columns|description|
|columns|original_payment_id|
|columns|order_id|
|columns|state|
|columns|reason|
|columns|amount|
|columns|currency|
|columns|surcharge_amount|
|columns|tip_amount|
|columns|refunded_amount|
|columns|created_date|
|columns|captured_date|
|columns|merchant_order_ext_ref|
|columns|payment_method|
|columns|location_id|
|columns|customer_id|
|columns|customer_card_number|
|columns|customer_card_country|
|columns|customer_card_brand|
|columns|customer_card_type|
|columns|customer_card_category|
|columns|customer_email|
|columns|fee_amount|
|columns|fee_currency|

<h2 id="tocS_Report-Run-Payments-Report">Report-Run-Payments-Report</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-payments-report"></a>
<a id="schema_Report-Run-Payments-Report"></a>
<a id="tocSreport-run-payments-report"></a>
<a id="tocsreport-run-payments-report"></a>

```json
{
  "filter": {
    "from": "1970-01-01T00:00:00Z",
    "to": "1970-01-01T00:00:00Z",
    "entity_states": [
      "completed"
    ]
  },
  "format": "csv",
  "type": "settlement_report",
  "options": {
    "timezone": "Europe/London",
    "columns": [
      "payment_id",
      "type",
      "state",
      "amount",
      "currency"
    ]
  }
}
```

A payments report contains all the query information for generating reports of payments associated with a Merchant account, including failed and declined payments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|[Report-Run-Payments-Filter](#schemareport-run-payments-filter)|true|none|Filtering parameters to be applied to the report.<br><br>:::note<br>For `payments_report`, `from` and `to` are evaluated against the payment `created_date`. The `captured_date` column is returned data and does not change the filter key.<br>:::|
|format|[Report-Run-Format](#schemareport-run-format)|true|none|Format of the generated report file.|
|type|[Report-Run-Type](#schemareport-run-type)|true|none|Type of the report.<br><br>  \| Report type \| Description \|<br>  \| -------------- \| ----------- \|<br>  \| `settlement_report` \| All settled transactions associated with a Merchant account, with a configurable set of columns. \|<br>  \| `custom_report` \| Settled and processing transactions associated with a Merchant account, with a configurable set of columns. \|<br>  \| `payments_report` \| Payments report provides details of all payments associated with a Merchant account, including failed and declined payments. Supports filtering by `from` and `to` creation timestamps, and optionally by `entity_states`. \|<br>  \| `payout_statement_report`    \| Payout statement Reports provide a detailed breakdown of all transactions contributing to a specific payout amount. It requires the additional parameter `filter.payout_id`, which should be obtained from the payout ID retrieved via the [payout list endpoint](https://developer.revolut.com/docs/api/merchant#retrieve-payout-list) or from [webhook events](https://developer.revolut.com/docs/api/merchant#webhook-webhook-event). \|<br>  \| `icpp_fee_breakdown_report`  \| IC++ fee breakdown reports provide a detailed breakdown of fees for each IC++ transaction related to a payout. It requires the additional parameter `filter.icpp_charge_id`, which should be obtained from the `related_icpp_charge_id` column in the Payout statement report. A separate report should be generated for each IC++ transaction. \||
|options|[Report-Run-Payments-Options](#schemareport-run-payments-options)|false|none|Further options to customise the report.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|csv|
|type|settlement_report|
|type|custom_report|
|type|payments_report|
|type|payout_statement_report|
|type|icpp_fee_breakdown_report|

<h2 id="tocS_Report-Run-Payout-Filter">Report-Run-Payout-Filter</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-payout-filter"></a>
<a id="schema_Report-Run-Payout-Filter"></a>
<a id="tocSreport-run-payout-filter"></a>
<a id="tocsreport-run-payout-filter"></a>

```json
{
  "payout_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Filtering parameters to be applied to the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payout_id|[Payout-Id](#schemapayout-id)|true|none|Permanent payout ID used for payouts operations.|

<h2 id="tocS_Report-Run-Payout-Options">Report-Run-Payout-Options</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-payout-options"></a>
<a id="schema_Report-Run-Payout-Options"></a>
<a id="tocSreport-run-payout-options"></a>
<a id="tocsreport-run-payout-options"></a>

```json
{
  "timezone": "Europe/London",
  "columns": [
    "transaction_id",
    "type",
    "transaction_amount",
    "transaction_currency"
  ]
}
```

Further options to customise the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timezone|[Report-Run-Timezone](#schemareport-run-timezone)|false|none|Defaults to `ETC/UTC`. Defines the output timezone for all timestamps displayed in the report.<br><br>Has no effect on `from` or `to` parameters.|
|columns|[string]|false|none|Names of the columns to be included in the report.<br><br>If the `columns` parameter is not defined in the request, all available columns will be included in the report. An empty array will return an error.<br><br>Available columns:<br><br>  \| Column name \| Description \|<br>  \| ----------- \| ----------- \|<br>  \| `created_date` \| Date and time the transaction was created. \|<br>  \| `completed_date` \| Date and time the transaction was completed. \|<br>  \| `payout_affected_date` \| Date and time the payout was affected by this transaction. \|<br>  \| `affected_payout_amount` \| Boolean flag indicating whether this transaction contributed to the payout amount (`true`) or not (`false`). Despite the name, this is not a monetary value. \|<br>  \| `transaction_id` \| Unique identifier of the transaction. \|<br>  \| `order_id` \| Unique identifier of the order associated with the transaction. \|<br>  \| `dispute_id` \| Unique identifier of the dispute associated with a chargeback or chargeback reversal transaction. Empty for rows not related to a dispute. \|<br>  \| `merchant_order_reference` \| Merchant's order reference. The value of the `merchant_order_data.reference` field set when the order was created. \|<br>  \| `type` \| Type of the payout-related ledger event the row represents. For the full list of returned values, see [Download report file](https://developer.revolut.com/docs/api/merchant#download-report-file). \|<br>  \| `related_icpp_charge_id` \| Unique identifier of the IC++ charge related to the transaction, if applicable. \|<br>  \| `transaction_amount` \| Amount of the transaction in the transaction currency. \|<br>  \| `transaction_currency` \| The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the transaction. \|<br>  \| `billing_amount` \| Amount of the transaction in the billing currency. \|<br>  \| `billing_currency` \| The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the billing amount. \|<br>  \| `state` \| State of the transaction. Possible values: `COMPLETED`, `PENDING`, `REVERTED`, `DECLINED`, `FAILED`. For `Irreducible balance hold` type transactions, only `PENDING` and `REVERTED` are possible. \|<br>  \| `original_transaction_id` \| Unique identifier of the original transaction. For refunds, references the transaction being refunded. \|<br>  \| `original_transaction_amount` \| Amount of the original transaction. \|<br>  \| `original_transaction_currency` \| The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the original transaction. \|<br>  \| `original_order_id` \| Unique identifier of the original order. For refunds, references the order being refunded. \|<br>  \| `original_order_channel` \| Channel through which the original order was created. \|<br>  \| `original_merchant_order_reference` \| Merchant's order reference for the original order. The value of the `merchant_order_data.reference` field set when the original order was created. \|<br>  \| `fee_amount` \| Total fee amount charged for the transaction. \|<br>  \| `fee_currency` \| The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the fee. \|<br>  \| `settlement_amount` \| Total amount settled on the merchant's account. \|<br>  \| `settlement_currency` \| The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the settled amount. \|<br>  \| `location_id` \| Unique identifier of the location associated with the transaction. \|<br>  \| `location_name` \| Name of the location associated with the transaction. \|<br>  \| `submerchant_id` \| Unique identifier of the submerchant associated with the transaction. \|<br>  \| `payout_transfer_reference` \| Reference of the bank transfer for this payout. This value is the same across all rows in the report, as each report covers a single payout. \|<br>  \| `payout_total_amount` \| Total amount of this payout. This value is the same across all rows in the report, as each report covers a single payout. \|<br>  \| `payout_date` \| Date and time the payout covered by this report was created. This value is the same across all rows in the report, as each report covers a single payout. \||

#### Enumerated Values

|Property|Value|
|---|---|
|columns|created_date|
|columns|completed_date|
|columns|payout_affected_date|
|columns|affected_payout_amount|
|columns|transaction_id|
|columns|order_id|
|columns|dispute_id|
|columns|merchant_order_reference|
|columns|type|
|columns|related_icpp_charge_id|
|columns|transaction_amount|
|columns|transaction_currency|
|columns|billing_amount|
|columns|billing_currency|
|columns|state|
|columns|original_transaction_id|
|columns|original_transaction_amount|
|columns|original_transaction_currency|
|columns|original_order_id|
|columns|original_order_channel|
|columns|original_merchant_order_reference|
|columns|fee_amount|
|columns|fee_currency|
|columns|settlement_amount|
|columns|settlement_currency|
|columns|location_id|
|columns|location_name|
|columns|submerchant_id|
|columns|payout_transfer_reference|
|columns|payout_total_amount|
|columns|payout_date|

<h2 id="tocS_Report-Run-Payout-Report">Report-Run-Payout-Report</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-payout-report"></a>
<a id="schema_Report-Run-Payout-Report"></a>
<a id="tocSreport-run-payout-report"></a>
<a id="tocsreport-run-payout-report"></a>

```json
{
  "filter": {
    "payout_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "format": "csv",
  "type": "settlement_report",
  "options": {
    "timezone": "Europe/London",
    "columns": [
      "transaction_id",
      "type",
      "transaction_amount",
      "transaction_currency"
    ]
  }
}
```

A payout statement report contains all the query information for generating reports of a selected payout associated with a Merchant account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|[Report-Run-Payout-Filter](#schemareport-run-payout-filter)|true|none|Filtering parameters to be applied to the report.|
|format|[Report-Run-Format](#schemareport-run-format)|true|none|Format of the generated report file.|
|type|[Report-Run-Type](#schemareport-run-type)|true|none|Type of the report.<br><br>  \| Report type \| Description \|<br>  \| -------------- \| ----------- \|<br>  \| `settlement_report` \| All settled transactions associated with a Merchant account, with a configurable set of columns. \|<br>  \| `custom_report` \| Settled and processing transactions associated with a Merchant account, with a configurable set of columns. \|<br>  \| `payments_report` \| Payments report provides details of all payments associated with a Merchant account, including failed and declined payments. Supports filtering by `from` and `to` creation timestamps, and optionally by `entity_states`. \|<br>  \| `payout_statement_report`    \| Payout statement Reports provide a detailed breakdown of all transactions contributing to a specific payout amount. It requires the additional parameter `filter.payout_id`, which should be obtained from the payout ID retrieved via the [payout list endpoint](https://developer.revolut.com/docs/api/merchant#retrieve-payout-list) or from [webhook events](https://developer.revolut.com/docs/api/merchant#webhook-webhook-event). \|<br>  \| `icpp_fee_breakdown_report`  \| IC++ fee breakdown reports provide a detailed breakdown of fees for each IC++ transaction related to a payout. It requires the additional parameter `filter.icpp_charge_id`, which should be obtained from the `related_icpp_charge_id` column in the Payout statement report. A separate report should be generated for each IC++ transaction. \||
|options|[Report-Run-Payout-Options](#schemareport-run-payout-options)|false|none|Further options to customise the report.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|csv|
|type|settlement_report|
|type|custom_report|
|type|payments_report|
|type|payout_statement_report|
|type|icpp_fee_breakdown_report|

<h2 id="tocS_Icpp-Charge-Id">Icpp-Charge-Id</h2>
<!-- backwards compatibility -->
<a id="schemaicpp-charge-id"></a>
<a id="schema_Icpp-Charge-Id"></a>
<a id="tocSicpp-charge-id"></a>
<a id="tocsicpp-charge-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

Permanent ID of of the IC++ fee related to a payout transaction.

This ID can be obtained from the `related_icpp_charge_id` column of a payout statement report.

<h2 id="tocS_Report-Run-Icpp-Filter">Report-Run-Icpp-Filter</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-icpp-filter"></a>
<a id="schema_Report-Run-Icpp-Filter"></a>
<a id="tocSreport-run-icpp-filter"></a>
<a id="tocsreport-run-icpp-filter"></a>

```json
{
  "icpp_charge_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Filtering parameters to be applied to the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|icpp_charge_id|[Icpp-Charge-Id](#schemaicpp-charge-id)|true|none|Permanent ID of of the IC++ fee related to a payout transaction.<br><br>This ID can be obtained from the `related_icpp_charge_id` column of a payout statement report.|

<h2 id="tocS_Report-Run-Icpp-Options">Report-Run-Icpp-Options</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-icpp-options"></a>
<a id="schema_Report-Run-Icpp-Options"></a>
<a id="tocSreport-run-icpp-options"></a>
<a id="tocsreport-run-icpp-options"></a>

```json
{
  "timezone": "Europe/London",
  "columns": [
    "id",
    "operation",
    "acquiring_fee_amount",
    "card_interchange_fee_amount",
    "card_scheme_fee_amount"
  ]
}
```

Further options to customise the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timezone|[Report-Run-Timezone](#schemareport-run-timezone)|false|none|Defaults to `ETC/UTC`. Defines the output timezone for all timestamps displayed in the report.<br><br>Has no effect on `from` or `to` parameters.|
|columns|[string]|false|none|Names of the columns to be included in the report.<br><br>If the `columns` parameter is not defined in the request, all available columns will be included in the report. An empty array will return an error.<br><br>Available columns:<br><br>  \| Column name \| Description \|<br>  \| ----------- \| ----------- \|<br>  \| `id` \| Unique identifier of the payment. \|<br>  \| `created_at` \| Date and time the payment was created. \|<br>  \| `operation` \| IC++ transaction type. Values: `SALE` (payment sale), `REFUND` (refund), and `DISPUTE` (dispute-related transaction). \|<br>  \| `amount` \| Transaction amount. \|<br>  \| `currency` \| The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the transaction. \|<br>  \| `settlement_amount` \| Amount settled on the merchant's account. \|<br>  \| `settlement_currency` \| The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the settled amount. \|<br>  \| `payment_method` \| Payment method used for the transaction. Returns `REVOLUT_PAY` for Revolut Pay payments, or the card scheme name for card payments. \|<br>  \| `card_scheme` \| Card BIN scheme. \|<br>  \| `card_funding` \| Card funding type, for example: `DEBIT` or `PREPAID`. \|<br>  \| `order_description` \| Description of the order. \|<br>  \| `order_merchant_external_ref` \| Merchant's order reference. The value of the `merchant_order_data.reference` field set when the order was created. \|<br>  \| `original_operation_id` \| Unique identifier of the related original transaction. \|<br>  \| `acquiring_fee_amount` \| IC++ acquiring markup fee component. \|<br>  \| `card_interchange_fee_amount` \| Interchange fee component. Omitted for Revolut Pay transactions. \|<br>  \| `card_scheme_fee_amount` \| Card scheme fee component. Omitted for Revolut Pay transactions. \|<br>  \| `card_type` \| Card commercial category. Values: `COMMERCIAL` (business or corporate card) and `CONSUMER` (personal card). \|<br>  \| `order_channel` \| Channel through which the order was created. \|<br>  \| `card_country` \| Country of the card, as an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code. \||

#### Enumerated Values

|Property|Value|
|---|---|
|columns|id|
|columns|created_at|
|columns|operation|
|columns|amount|
|columns|currency|
|columns|settlement_amount|
|columns|settlement_currency|
|columns|payment_method|
|columns|card_scheme|
|columns|card_funding|
|columns|order_description|
|columns|order_merchant_external_ref|
|columns|original_operation_id|
|columns|acquiring_fee_amount|
|columns|card_interchange_fee_amount|
|columns|card_scheme_fee_amount|
|columns|card_type|
|columns|order_channel|
|columns|card_country|

<h2 id="tocS_Report-Run-Icpp-Report">Report-Run-Icpp-Report</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-icpp-report"></a>
<a id="schema_Report-Run-Icpp-Report"></a>
<a id="tocSreport-run-icpp-report"></a>
<a id="tocsreport-run-icpp-report"></a>

```json
{
  "filter": {
    "icpp_charge_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "format": "csv",
  "type": "settlement_report",
  "options": {
    "timezone": "Europe/London",
    "columns": [
      "id",
      "operation",
      "acquiring_fee_amount",
      "card_interchange_fee_amount",
      "card_scheme_fee_amount"
    ]
  }
}
```

A IC++ fee breakdown report contains all the query information for generating reports of fees for each IC++ transaction related to a payout.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|[Report-Run-Icpp-Filter](#schemareport-run-icpp-filter)|true|none|Filtering parameters to be applied to the report.|
|format|[Report-Run-Format](#schemareport-run-format)|true|none|Format of the generated report file.|
|type|[Report-Run-Type](#schemareport-run-type)|true|none|Type of the report.<br><br>  \| Report type \| Description \|<br>  \| -------------- \| ----------- \|<br>  \| `settlement_report` \| All settled transactions associated with a Merchant account, with a configurable set of columns. \|<br>  \| `custom_report` \| Settled and processing transactions associated with a Merchant account, with a configurable set of columns. \|<br>  \| `payments_report` \| Payments report provides details of all payments associated with a Merchant account, including failed and declined payments. Supports filtering by `from` and `to` creation timestamps, and optionally by `entity_states`. \|<br>  \| `payout_statement_report`    \| Payout statement Reports provide a detailed breakdown of all transactions contributing to a specific payout amount. It requires the additional parameter `filter.payout_id`, which should be obtained from the payout ID retrieved via the [payout list endpoint](https://developer.revolut.com/docs/api/merchant#retrieve-payout-list) or from [webhook events](https://developer.revolut.com/docs/api/merchant#webhook-webhook-event). \|<br>  \| `icpp_fee_breakdown_report`  \| IC++ fee breakdown reports provide a detailed breakdown of fees for each IC++ transaction related to a payout. It requires the additional parameter `filter.icpp_charge_id`, which should be obtained from the `related_icpp_charge_id` column in the Payout statement report. A separate report should be generated for each IC++ transaction. \||
|options|[Report-Run-Icpp-Options](#schemareport-run-icpp-options)|false|none|Further options to customise the report.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|csv|
|type|settlement_report|
|type|custom_report|
|type|payments_report|
|type|payout_statement_report|
|type|icpp_fee_breakdown_report|

<h2 id="tocS_Report-Run">Report-Run</h2>
<!-- backwards compatibility -->
<a id="schemareport-run"></a>
<a id="schema_Report-Run"></a>
<a id="tocSreport-run"></a>
<a id="tocsreport-run"></a>

```json
{
  "report_run_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "processing",
  "file_url": "string"
}
```

The `ReportRunDetails` object contains all information associated with a specific report run, identified by the `report_run_id`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|report_run_id|string(uuid)|true|none|Unique ID used for accessing report details. Use this to check report generation status.|
|status|string|true|none|Current status of the report run.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `processing` \| Report generation is still in progress. \|<br>\| `completed` \| Report generation finished successfully and the file is available to download for 24 hours via `file_url`. \|<br>\| `failed` \| Report generation failed and no report file is available. \|<br>\| `expired` \| Report generation previously completed, but the 24-hour file availability window has elapsed and the file can no longer be downloaded. \||
|file_url|string|false|none|Use this link to download the report file. Available only when `status` is `completed`, and only for 24 hours after report generation finishes.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|processing|
|status|completed|
|status|failed|
|status|expired|

<h2 id="tocS_Report-Run-Csv-Settlement">Report-Run-Csv-Settlement</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-csv-settlement"></a>
<a id="schema_Report-Run-Csv-Settlement"></a>
<a id="tocSreport-run-csv-settlement"></a>
<a id="tocsreport-run-csv-settlement"></a>

```json
{
  "transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "original_order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "started_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "completed_date": "1970-01-01T00:00:00Z",
  "payment_created_date": "1970-01-01T00:00:00Z",
  "payment_captured_date": "1970-01-01T00:00:00Z",
  "type": "SETTLEMENT",
  "state": "string",
  "description": "string",
  "merchant_order_ext_ref": "string",
  "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": 0,
  "currency": "GBP",
  "settlement_amount": 0,
  "settlement_currency": "GBP",
  "payment_method": "CARD",
  "fee_amount": 0,
  "fee_currency": "GBP",
  "processing_fee_amount": 0,
  "processing_fee_currency": "GBP",
  "browser_url": "http://example.com",
  "location_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

CSV output for `settlement_report`. Contains settled transactions associated with a Merchant account.

The first row is a header row with column names. Subsequent rows contain transaction data, one row per transaction.

A partial-settlement is represented by separate `SETTLEMENT` and `REFUND` rows instead of a dedicated type.

:::note
The actual response is a raw `text/csv` string. The object schema below is a documentation convention only: OpenAPI's schema language (JSON Schema) describes JSON data shapes and has no native construct for typed CSV columns, so each property here corresponds to a CSV column header rather than a JSON field.
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction_id|string(uuid)|false|none|Unique identifier of the ledger transaction in the core settlement system. Matches `transaction_id` in the payout statement report for the same event. Not the same as `payment_id` in the payments report — a payment and its resulting ledger transaction have different UUIDs. Use `order_id` to cross-reference with the payments report.|
|order_id|string(uuid)|false|none|Unique identifier of the order. An order is the top-level entity that groups one or more payment attempts against it. `order_id` is consistent across all report types and can be used to cross-reference between the payments report and the settlement or payout reports.|
|original_order_id|string(uuid)|false|none|For refunds and chargebacks, the order ID of the original payment that this transaction reverses. Refunds and chargebacks create their own order in the system, so `order_id` refers to the refund or chargeback order while `original_order_id` points back to the original payment's order. For settlement transactions, matches `order_id`.|
|started_date|string(date-time)|false|none|Date and time the row's source record was started. For payment rows, this is the payment start timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction start timestamp. This displayed value is separate from the report filter timeframe.|
|updated_date|string(date-time)|false|none|Date and time the row's source record was last updated. For payment rows, this is the payment update timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction update timestamp. This displayed value is separate from the report filter timeframe.|
|completed_date|string(date-time)|false|none|Date and time the row's source record was completed. For payment rows, this is the payment completion timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction completion timestamp. This displayed value is separate from the report filter timeframe.|
|payment_created_date|string(date-time)|false|none|Payment authorisation or creation timestamp for rows linked to a payment, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) UTC date-time format. Empty for refunds and non-payment-related rows where no payment timestamp applies. This displayed value is separate from the report filter timeframe.|
|payment_captured_date|string(date-time)|false|none|Payment capture timestamp for rows linked to a captured payment, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) UTC date-time format. Empty for refunds, non-payment-related rows, or payments not captured. This displayed value is separate from the report filter timeframe.|
|type|string|false|none|Type of the settlement report row.<br><br>A partial-settlement is represented by separate `SETTLEMENT` and `REFUND` rows instead of a dedicated type.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `SETTLEMENT` \| Settlement of a payment into the merchant balance. \|<br>\| `REFUND` \| Refund entry reducing the merchant balance. \|<br>\| `CHARGEBACK` \| Dispute withdrawal entry reducing the merchant balance. \|<br>\| `CHARGEBACK_REVERSAL` \| Reversal of a previous chargeback, restoring funds to the merchant balance. \||
|state|string|false|none|State of the transaction.|
|description|string|false|none|Description of the order.|
|merchant_order_ext_ref|string|false|none|Merchant's order reference. The value of the `merchant_order_data.reference` field set when the order was created.|
|customer_id|string(uuid)|false|none|Unique identifier of the customer related to an order.|
|amount|number|false|none|Total amount of the order.|
|currency|string|false|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code that represents the currency of the order.|
|settlement_amount|number|false|none|Total amount settled on the merchant's account.|
|settlement_currency|string|false|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code that represents the currency of the settled amount.|
|payment_method|string|false|none|Type of the payment method the customer used to pay for the order.|
|fee_amount|number|false|none|Total fee amount applied to the order, aggregated across all fee components (acquiring markup + interchange + scheme fees).|
|fee_currency|string|false|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code that represents the currency of the total fee.|
|processing_fee_amount|number|false|none|Acquiring markup fee only — a subset of `fee_amount`. Represents Revolut's service fee, excluding interchange and scheme fees.|
|processing_fee_currency|string|false|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code that represents the currency of the acquiring markup fee.|
|browser_url|string(uri)|false|none|The URL where the customer initiated the payment.|
|location_id|string(uuid)|false|none|Unique identifier of the location related to the transaction.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SETTLEMENT|
|type|REFUND|
|type|CHARGEBACK|
|type|CHARGEBACK_REVERSAL|

<h2 id="tocS_Report-Run-Csv-Custom">Report-Run-Csv-Custom</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-csv-custom"></a>
<a id="schema_Report-Run-Csv-Custom"></a>
<a id="tocSreport-run-csv-custom"></a>
<a id="tocsreport-run-csv-custom"></a>

```json
{
  "transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "related_transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "transaction_description": "string",
  "order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "original_order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "original_order_ext_ref": "string",
  "order_description": "string",
  "order_channel": "string",
  "order_customer_note": "string",
  "order_tip_amount": 0,
  "order_created_by": "string",
  "payment_initiated_by": "string",
  "order_line_items": "string",
  "payout_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "payout_reference": "string",
  "invoice_reference": "string",
  "dispute_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "account_balance": 0,
  "started_date": "1970-01-01T00:00:00Z",
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "completed_date": "1970-01-01T00:00:00Z",
  "payment_created_date": "1970-01-01T00:00:00Z",
  "payment_captured_date": "1970-01-01T00:00:00Z",
  "type": "SETTLEMENT",
  "legacy_type": "string",
  "state": "string",
  "description": "string",
  "merchant_order_ext_ref": "string",
  "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": 0,
  "currency": "GBP",
  "settlement_amount": 0,
  "settlement_currency": "GBP",
  "exchange_rate": 0,
  "refunded_amount": 0,
  "statement_descriptor": "string",
  "tip_amount": 0,
  "surcharge_amount": 0,
  "order_surcharge_amount": 0,
  "terminal_hardware_id": "string",
  "customer_name": "string",
  "customer_email": "user@example.com",
  "customer_card_number": "492942******5709",
  "customer_card_brand": "VISA",
  "customer_card_type": "DEBIT",
  "customer_card_category": "consumer",
  "payment_method": "CARD",
  "fee_amount": 0,
  "fee_currency": "GBP",
  "processing_fee_amount": 0,
  "processing_fee_currency": "GBP",
  "fx_fee_amount": 0,
  "fx_fee_currency": "GBP",
  "browser_url": "http://example.com",
  "beneficiary_name": "string",
  "beneficiary_account_number": "string",
  "location_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "location_name": "string",
  "order_custom_field_name": "string",
  "order_custom_field_value": "string",
  "offline_payment_state": "string",
  "order_authorisation_type": "string"
}
```

CSV output for `custom_report` report type. Contains settled and processing transactions with a configurable set of columns.

The first row is a header row with column names. Subsequent rows contain transaction data, one row per transaction.

The columns included in the response depend on the `options.columns` list specified in the request. If no columns list was provided, all available columns are included.

Custom metadata columns can also be requested using the `metadata.` prefix, for example `metadata.custom_attribute`.

:::note
The actual response is a raw `text/csv` string. The object schema below is a documentation convention only: OpenAPI's schema language (JSON Schema) describes JSON data shapes and has no native construct for typed CSV columns, so each property here corresponds to a CSV column header rather than a JSON field.
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction_id|string(uuid)|false|none|Unique identifier of the ledger transaction in the core settlement system. Matches `transaction_id` in the settlement and payout reports for the same event. Not the same as `payment_id` in the payments report — a payment and its resulting ledger transaction have different UUIDs. Use `order_id` to cross-reference with the payments report.|
|related_transaction_id|string(uuid)|false|none|For refund and chargeback transactions, the ledger transaction ID of the original payment that this transaction reverses. Corresponds to `original_transaction_id` in the payout statement report.|
|transaction_description|string|false|none|Description of the transaction.|
|order_id|string(uuid)|false|none|Unique identifier of the order. An order is the top-level entity that groups one or more payment attempts against it. `order_id` is consistent across all report types and can be used to cross-reference between the payments report and the settlement or payout reports.|
|original_order_id|string(uuid)|false|none|For refunds and chargebacks, the order ID of the original payment that this transaction reverses. Refunds and chargebacks create their own order in the system, so `order_id` refers to the refund or chargeback order while `original_order_id` points back to the original payment's order. For settlement transactions, matches `order_id`.|
|original_order_ext_ref|string|false|none|Merchant's order identifier of the original order for external reference.|
|order_description|string|false|none|Description of the order.|
|order_channel|string|false|none|Channel through which the order was created.<br><br>The value depends on the order source and integration. It may reflect platform-specific or externally provided values, so the set of returned values should not be treated as a fixed enum.|
|order_customer_note|string|false|none|Note added by the customer at the time of the order.|
|order_tip_amount|number|false|none|Tip amount set at the order level.|
|order_created_by|string|false|none|Identifier of the user who created the order.|
|payment_initiated_by|string|false|none|Identifier of who initiated the payment.|
|order_line_items|string|false|none|Line items included in the order, if any.|
|payout_id|string(uuid)|false|none|Unique identifier of the payout that this transaction contributed to. Use to cross-reference with the payout statement report.|
|payout_reference|string|false|none|Reference of the payout transfer associated with the transaction.|
|invoice_reference|string|false|none|Invoice reference associated with the order, if any.|
|dispute_id|string(uuid)|false|none|Unique identifier of the dispute, if applicable.|
|account_id|string(uuid)|false|none|Unique identifier of the merchant account.|
|account_balance|number|false|none|Account balance at the time of the transaction.|
|started_date|string(date-time)|false|none|Date and time the row's source record was started. For payment rows, this is the payment start timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction start timestamp. This displayed value is separate from the report filter timeframe.|
|created_date|string(date-time)|false|none|Date and time the order was created.|
|updated_date|string(date-time)|false|none|Date and time the row's source record was last updated. For payment rows, this is the payment update timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction update timestamp. This displayed value is separate from the report filter timeframe.|
|completed_date|string(date-time)|false|none|Date and time the row's source record was completed. For payment rows, this is the payment completion timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction completion timestamp. This displayed value is separate from the report filter timeframe.|
|payment_created_date|string(date-time)|false|none|Payment authorisation or creation timestamp for rows linked to a payment, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) UTC date-time format. Empty for refunds and non-payment-related rows where no payment timestamp applies. This displayed value is separate from the report filter timeframe.|
|payment_captured_date|string(date-time)|false|none|Payment capture timestamp for rows linked to a captured payment, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) UTC date-time format. Empty for refunds, non-payment-related rows, or payments not captured. This displayed value is separate from the report filter timeframe.|
|type|string|false|none|Type of the transaction.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `SETTLEMENT` \| Settlement of a payment into the merchant balance. \|<br>\| `RESERVE` \| Reserve entry holding funds on the merchant balance. \|<br>\| `REFUND` \| Refund entry reducing the merchant balance. \|<br>\| `TOPUP` \| Balance top-up entry. \|<br>\| `TOPUP_RETURN` \| Reversal of a top-up entry. \|<br>\| `CHARGEBACK` \| Dispute withdrawal from the merchant balance. \|<br>\| `CHARGEBACK_REVERSAL` \| Reversal of a previous chargeback. \|<br>\| `CREDIT_REIMBURSEMENT` \| Credit reimbursement entry. \|<br>\| `FEE` \| Fee charged against the merchant balance. \|<br>\| `PAYOUT` \| Payout-related ledger entry. \|<br>\| `TRANSFER` \| Balance transfer entry. \|<br>\| `REVOLUT_REFUND` \| Refund-related entry specific to Revolut internal flows. \|<br>\| `REVOLUT_FEE` \| Fee-related entry specific to Revolut internal flows. \|<br>\| `WRITE_OFF` \| Write-off entry. \|<br>\| `CHARGE` \| Charge entry posted to the merchant balance. \||
|legacy_type|string|false|none|Legacy type value for backwards compatibility.|
|state|string|false|none|State of the transaction.|
|description|string|false|none|Description of the transaction.|
|merchant_order_ext_ref|string|false|none|Merchant's order reference. The value of the `merchant_order_data.reference` field set when the order was created.|
|customer_id|string(uuid)|false|none|Unique identifier of the customer related to the order.|
|amount|number|false|none|Total amount of the order.|
|currency|string|false|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the order.|
|settlement_amount|number|false|none|Total amount settled on the merchant's account.|
|settlement_currency|string|false|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the settled amount.|
|exchange_rate|number|false|none|Exchange rate applied if currency conversion occurred.|
|refunded_amount|number|false|none|Amount refunded for the order.|
|statement_descriptor|string|false|none|Statement descriptor shown on the customer's bank statement.|
|tip_amount|number|false|none|Tip amount included in the transaction.|
|surcharge_amount|number|false|none|Surcharge amount applied to the transaction. Omitted when no surcharge applies.|
|order_surcharge_amount|number|false|none|Surcharge amount set at the order level.|
|terminal_hardware_id|string|false|none|Identifier of the card reader hardware used, for in-person payments.|
|customer_name|string|false|none|Name of the customer.|
|customer_email|string(email)|false|none|Email address of the customer.|
|customer_card_number|string|false|none|Masked card number used for the payment.|
|customer_card_brand|string|false|none|Card brand used for the payment. Derived from BIN data. Example values include `VISA`, `MASTERCARD`, `MASTERCARD_DEBIT`, `MAESTRO`, `AMEX`, `DINERS`, `DISCOVER`, `JCB`.|
|customer_card_type|string|false|none|Card funding type.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `DEBIT` \| Debit card. \|<br>\| `CREDIT` \| Credit card. \|<br>\| `PREPAID` \| Prepaid card. \|<br>\| `DEFERRED_DEBIT` \| Deferred debit card. \|<br>\| `CHARGE` \| Charge card. \||
|customer_card_category|string|false|none|Card commercial category.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `consumer` \| Personal card. \|<br>\| `commercial` \| Business or corporate card. \||
|payment_method|string|false|none|Payment method the customer used to pay for the order.|
|fee_amount|number|false|none|Total fee amount applied to the order, aggregated across all fee components (acquiring markup + interchange + scheme fees).|
|fee_currency|string|false|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the total fee.|
|processing_fee_amount|number|false|none|Acquiring markup fee only — a subset of `fee_amount`. Represents Revolut's service fee, excluding interchange and scheme fees.|
|processing_fee_currency|string|false|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the acquiring markup fee.|
|fx_fee_amount|number|false|none|Foreign exchange fee amount, if applicable.|
|fx_fee_currency|string|false|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the FX fee.|
|browser_url|string(uri)|false|none|The URL where the customer initiated the payment.|
|beneficiary_name|string|false|none|Name of the beneficiary, for bank transfer payments.|
|beneficiary_account_number|string|false|none|Account number of the beneficiary, for bank transfer payments.|
|location_id|string(uuid)|false|none|Unique identifier of the location related to the transaction.|
|location_name|string|false|none|Name of the location related to the transaction.|
|order_custom_field_name|string|false|none|Name of a custom field set on the order.|
|order_custom_field_value|string|false|none|Value of a custom field set on the order.|
|offline_payment_state|string|false|none|State of an offline payment, if applicable.|
|order_authorisation_type|string|false|none|Authorisation type of the order, for example `FULL` or `PRE_AUTH`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SETTLEMENT|
|type|RESERVE|
|type|REFUND|
|type|TOPUP|
|type|TOPUP_RETURN|
|type|CHARGEBACK|
|type|CHARGEBACK_REVERSAL|
|type|CREDIT_REIMBURSEMENT|
|type|FEE|
|type|PAYOUT|
|type|TRANSFER|
|type|REVOLUT_REFUND|
|type|REVOLUT_FEE|
|type|WRITE_OFF|
|type|CHARGE|
|customer_card_type|DEBIT|
|customer_card_type|CREDIT|
|customer_card_type|PREPAID|
|customer_card_type|DEFERRED_DEBIT|
|customer_card_type|CHARGE|
|customer_card_category|consumer|
|customer_card_category|commercial|

<h2 id="tocS_Report-Run-Csv-Payments">Report-Run-Csv-Payments</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-csv-payments"></a>
<a id="schema_Report-Run-Csv-Payments"></a>
<a id="tocSreport-run-csv-payments"></a>
<a id="tocsreport-run-csv-payments"></a>

```json
{
  "payment_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "PAYMENT",
  "description": "string",
  "original_payment_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "state": "COMPLETED",
  "reason": "string",
  "amount": 0,
  "currency": "GBP",
  "surcharge_amount": 0,
  "tip_amount": 0,
  "refunded_amount": 0,
  "created_date": "1970-01-01T00:00:00Z",
  "captured_date": "1970-01-01T00:00:00Z",
  "merchant_order_ext_ref": "string",
  "payment_method": "CARD",
  "location_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "customer_card_number": "492942******5709",
  "customer_card_country": "GB",
  "customer_card_brand": "VISA",
  "customer_card_type": "DEBIT",
  "customer_card_category": "consumer",
  "customer_email": "user@example.com",
  "fee_amount": 0,
  "fee_currency": "GBP"
}
```

CSV output for `payments_report` report type. Contains all payments including failed and declined ones.

The first row is a header row with column names. Subsequent rows contain payment data, one row per payment.

For failed and declined payments, `fee_amount` and `fee_currency` are omitted. For payments made without a card, card-related columns are omitted.

:::note
The actual response is a raw `text/csv` string. The object schema below is a documentation convention only: OpenAPI's schema language (JSON Schema) describes JSON data shapes and has no native construct for typed CSV columns, so each property here corresponds to a CSV column header rather than a JSON field.
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payment_id|string(uuid)|false|none|Unique identifier of the payment attempt in the acquiring system. Corresponds to `id` in the IC++ fee breakdown report for the same payment. Not the same as `transaction_id` in the settlement or payout reports — a payment and its resulting ledger transaction have different UUIDs. Use `order_id` to cross-reference with the settlement or payout reports.|
|type|string|false|none|Type of the payment.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `PAYMENT` \| A payment attempt made against the order. \|<br>\| `REFUND` \| A refund record reversing a previously completed payment. \||
|description|string|false|none|Description of the payment.|
|original_payment_id|string(uuid)|false|none|For refunds, the acquiring ID of the original payment that this record reverses. Corresponds to `payment_id` on the original payment row. Populated only when `type` is `REFUND`.|
|order_id|string(uuid)|false|none|Unique identifier of the order associated with this payment. An order can have multiple payment attempts — for example, a retry after a declined payment. Use `order_id` to cross-reference with the settlement or payout reports.|
|state|string|false|none|State of the payment.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `COMPLETED` \| The payment completed successfully. \|<br>\| `FAILED` \| The payment failed during processing. \|<br>\| `DECLINED` \| The payment was rejected by the issuer or payment flow. \|<br>\| `CANCELLED` \| The payment was cancelled before completion. \|<br>\| `PROCESSING` \| The payment is still being processed. \||
|reason|string|false|none|Reason code for a failed or declined payment. Present only when `state` is `FAILED` or `DECLINED`.<br><br>Example values: `INSUFFICIENT_FUNDS`, `DO_NOT_HONOUR`, `EXPIRED_CARD`, `INVALID_CVV`, `THREE_DS_CHALLENGE_FAILED`, `SUSPECTED_FRAUD`, `LOST_CARD`, `STOLEN_CARD`, `TECHNICAL_ERROR`.|
|amount|number|false|none|Total amount of the payment.|
|currency|string|false|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the payment.|
|surcharge_amount|number|false|none|Surcharge amount applied to the payment. Empty when no surcharge applies — this field is empty, not set to `0`.|
|tip_amount|number|false|none|Tip amount included in the payment, if any.|
|refunded_amount|number|false|none|Amount refunded for the payment.|
|created_date|string(date-time)|false|none|Date and time the payment was created.|
|captured_date|string(date-time)|false|none|Date and time the payment was captured, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) UTC date-time format. Empty when the payment has not been captured.|
|merchant_order_ext_ref|string|false|none|Merchant's order reference. The value of the `merchant_order_data.reference` field set when the order was created.|
|payment_method|string|false|none|Payment method used.|
|location_id|string(uuid)|false|none|Unique identifier of the location where the payment was made.|
|customer_id|string(uuid)|false|none|Unique identifier of the customer.|
|customer_card_number|string|false|none|Masked card number used for the payment.|
|customer_card_country|string|false|none|Country of the card used for the payment, as an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.|
|customer_card_brand|string|false|none|Card brand used for the payment. Derived from BIN data. Example values include `VISA`, `MASTERCARD`, `MASTERCARD_DEBIT`, `MAESTRO`, `AMEX`, `DINERS`, `DISCOVER`, `JCB`.|
|customer_card_type|string|false|none|Card funding type.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `DEBIT` \| Debit card. \|<br>\| `CREDIT` \| Credit card. \|<br>\| `PREPAID` \| Prepaid card. \|<br>\| `DEFERRED_DEBIT` \| Deferred debit card. \|<br>\| `CHARGE` \| Charge card. \||
|customer_card_category|string|false|none|Card commercial category.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `consumer` \| Personal card. \|<br>\| `commercial` \| Business or corporate card. \||
|customer_email|string(email)|false|none|Email address of the customer.|
|fee_amount|number|false|none|Total fee amount charged for the payment. Omitted for failed and declined payments.|
|fee_currency|string|false|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the fee. Omitted for failed and declined payments.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|PAYMENT|
|type|REFUND|
|state|COMPLETED|
|state|FAILED|
|state|DECLINED|
|state|CANCELLED|
|state|PROCESSING|
|customer_card_type|DEBIT|
|customer_card_type|CREDIT|
|customer_card_type|PREPAID|
|customer_card_type|DEFERRED_DEBIT|
|customer_card_type|CHARGE|
|customer_card_category|consumer|
|customer_card_category|commercial|

<h2 id="tocS_Report-Run-Csv-Payout">Report-Run-Csv-Payout</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-csv-payout"></a>
<a id="schema_Report-Run-Csv-Payout"></a>
<a id="tocSreport-run-csv-payout"></a>
<a id="tocsreport-run-csv-payout"></a>

```json
{
  "created_date": "1970-01-01T00:00:00Z",
  "completed_date": "1970-01-01T00:00:00Z",
  "payout_affected_date": "1970-01-01T00:00:00Z",
  "affected_payout_amount": true,
  "transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dispute_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "merchant_order_reference": "string",
  "type": "Settlement",
  "related_icpp_charge_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "transaction_amount": 0,
  "transaction_currency": "GBP",
  "billing_amount": 0,
  "billing_currency": "GBP",
  "state": "COMPLETED",
  "original_transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "original_transaction_amount": 0,
  "original_transaction_currency": "GBP",
  "original_order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "original_order_channel": "API",
  "original_merchant_order_reference": "string",
  "fee_amount": 0,
  "fee_currency": "GBP",
  "settlement_amount": 0,
  "settlement_currency": "GBP",
  "location_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "location_name": "string",
  "submerchant_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "payout_transfer_reference": "string",
  "payout_total_amount": 0,
  "payout_date": "1970-01-01T00:00:00Z"
}
```

CSV output for `payout_statement_report` report type. Contains all transactions that contributed to a specific payout.

The first row is a header row with column names. Subsequent rows contain transaction data, one row per transaction.

:::note
The actual response is a raw `text/csv` string. The object schema below is a documentation convention only: OpenAPI's schema language (JSON Schema) describes JSON data shapes and has no native construct for typed CSV columns, so each property here corresponds to a CSV column header rather than a JSON field.
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_date|string(date-time)|false|none|Date and time the transaction was created.|
|completed_date|string(date-time)|false|none|Date and time the transaction was completed.|
|payout_affected_date|string(date-time)|false|none|Date and time the payout was affected by this transaction.|
|affected_payout_amount|boolean|false|none|Indicates whether this transaction contributed to the payout amount (`true`) or not (`false`).<br><br>:::note<br>Despite the name implying a monetary amount, this field is a boolean flag. The payout statement report only includes transactions where `affected_payout_amount` is `true` - transactions that did not affect the payout amount are excluded from the report.<br>:::|
|transaction_id|string(uuid)|false|none|Unique identifier of the ledger transaction in the core settlement system. Matches `transaction_id` in the settlement report for the same event. Use `order_id` to cross-reference with the payments report.|
|order_id|string(uuid)|false|none|Unique identifier of the order associated with this transaction. Use `order_id` to cross-reference with the payments report or settlement report.|
|dispute_id|string(uuid)|false|none|Unique identifier of the dispute associated with a chargeback or chargeback reversal transaction. Empty for rows not related to a dispute.|
|merchant_order_reference|string|false|none|Merchant's order reference. The value of the `merchant_order_data.reference` field set when the order was created.|
|type|string|false|none|Type of the transaction.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `Settlement` \| Settlement of a payment into the merchant balance. \|<br>\| `Refund` \| Refund entry reducing the merchant balance. \|<br>\| `External transfer money return` \| Return of an external transfer entry. \|<br>\| `Topup` \| Balance top-up entry. \|<br>\| `Topup Return` \| Reversal of a top-up entry. \|<br>\| `Customer dispute - withdrawal` \| Chargeback or dispute withdrawal from the merchant balance. \|<br>\| `Customer dispute - won` \| Reversal of a previous dispute withdrawal. \|<br>\| `Transfer from linked pocket` \| Transfer from a linked balance pocket. \|<br>\| `Automatic negative balance recovery` \| Automatic recovery entry for a negative balance. \|<br>\| `Payout` \| Payout-related ledger entry. \|<br>\| `Payout to an external account` \| Transfer of payout funds to an external account. \|<br>\| `Transfer from linked pocket with FX` \| Transfer from a linked pocket involving FX conversion. \|<br>\| `Payout with FX` \| Payout-related entry involving FX conversion. \|<br>\| `Money reserve block` \| Reserve block entry withholding funds. \|<br>\| `Money reserve unblock` \| Release of previously blocked reserve funds. \|<br>\| `IC++ post-billing fee` \| IC++ fee charged after billing. \|<br>\| `Fee refund` \| Reversal of a previously charged fee. \|<br>\| `Unrecognised transaction` \| Transaction that does not map to a more specific category. \|<br>\| `Irreducible balance hold` \| Temporary hold on the irreducible balance amount during payout processing. Only `PENDING` and `REVERTED` states are possible - this transaction never reaches `COMPLETED` state because it represents a temporary hold, not an actual transfer. \|<br><br>:::note [Irreducible balance hold lifecycle]<br>These transactions appear in pairs across consecutive payouts:<br><br>- A `PENDING` row at payout time represents the current hold. Its `transaction_amount` is negative (funds held).<br>- A `REVERTED` row at payout time represents the release of a hold placed at the previous payout. Its `transaction_amount` is positive (funds released).<br><br>Both rows have `affected_payout_amount` set to `true` - the hold directly reduces the payout amount by the irreducible balance amount.<br><br>If the merchant has not configured an irreducible balance, no rows of this type will appear in the report.<br>:::|
|related_icpp_charge_id|string(uuid)|false|none|Unique identifier of the IC++ charge related to the transaction, if applicable.|
|transaction_amount|number|false|none|Amount of the transaction in the transaction currency.|
|transaction_currency|string|false|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the transaction.|
|billing_amount|number|false|none|Amount of the transaction in the billing currency.|
|billing_currency|string|false|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the billing amount.|
|state|string|false|none|State of the transaction.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `COMPLETED` \| The transaction has completed successfully. \|<br>\| `PENDING` \| The transaction is pending. \|<br>\| `REVERTED` \| The transaction has been reverted. Only applicable to `Irreducible balance hold` type transactions - the hold from a previous payout is released. \|<br>\| `DECLINED` \| The transaction was declined. Rare - only appears if a declined transaction affected the payout balance. \|<br>\| `FAILED` \| The transaction failed. Rare - only appears if a failed transaction affected the payout balance. \|<br><br>:::note<br>`Irreducible balance hold` transactions can only have `PENDING` or `REVERTED` states. They never reach `COMPLETED` state because they represent a temporary hold on funds during the payout process, not an actual transfer.<br>:::|
|original_transaction_id|string(uuid)|false|none|For refunds and chargebacks, the ledger transaction ID of the original payment that this transaction reverses. Corresponds to `transaction_id` on the original settlement row. <br><br>:::note<br>Populated only for reversal-type rows - for example, when `type` is `Refund` or `Customer dispute - withdrawal`.<br>:::|
|original_transaction_amount|number|false|none|Amount of the original transaction.|
|original_transaction_currency|string|false|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the original transaction.|
|original_order_id|string(uuid)|false|none|For refunds and chargebacks, the order ID of the original payment that this transaction reverses. Refunds and chargebacks create their own order in the system, so `order_id` refers to the refund or chargeback order while `original_order_id` points back to the original payment's order. For settlement transactions, matches `order_id`.|
|original_order_channel|string|false|none|Channel through which the original order was created.<br><br>The value depends on the original order source and integration. It may reflect platform-specific or externally provided values, so the set of returned values should not be treated as a fixed enum.|
|original_merchant_order_reference|string|false|none|Merchant's order reference for the original order. The value of the `merchant_order_data.reference` field set when the original order was created.|
|fee_amount|number|false|none|Total fee amount charged for the transaction.|
|fee_currency|string|false|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the fee.|
|settlement_amount|number|false|none|Total amount settled on the merchant's account.|
|settlement_currency|string|false|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the settled amount.|
|location_id|string(uuid)|false|none|Unique identifier of the location associated with the transaction.|
|location_name|string|false|none|Name of the location associated with the transaction.|
|submerchant_id|string(uuid)|false|none|Unique identifier of the submerchant associated with the transaction.|
|payout_transfer_reference|string|false|none|Reference of the bank transfer for this payout. This value is the same across all rows in the report, as each report covers a single payout.|
|payout_total_amount|number|false|none|Total amount of this payout. This value is the same across all rows in the report, as each report covers a single payout.|
|payout_date|string(date-time)|false|none|Date and time the payout covered by this report was created, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) UTC date-time format. This value is the same across all rows in the report, as each report covers a single payout.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Settlement|
|type|Refund|
|type|External transfer money return|
|type|Topup|
|type|Topup Return|
|type|Customer dispute - withdrawal|
|type|Customer dispute - won|
|type|Transfer from linked pocket|
|type|Automatic negative balance recovery|
|type|Payout|
|type|Payout to an external account|
|type|Transfer from linked pocket with FX|
|type|Payout with FX|
|type|Money reserve block|
|type|Money reserve unblock|
|type|IC++ post-billing fee|
|type|Fee refund|
|type|Unrecognised transaction|
|type|Irreducible balance hold|
|state|COMPLETED|
|state|PENDING|
|state|REVERTED|
|state|DECLINED|
|state|FAILED|

<h2 id="tocS_Report-Run-Csv-Icpp">Report-Run-Csv-Icpp</h2>
<!-- backwards compatibility -->
<a id="schemareport-run-csv-icpp"></a>
<a id="schema_Report-Run-Csv-Icpp"></a>
<a id="tocSreport-run-csv-icpp"></a>
<a id="tocsreport-run-csv-icpp"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "operation": "SALE",
  "amount": 0,
  "currency": "GBP",
  "settlement_amount": 0,
  "settlement_currency": "GBP",
  "payment_method": "REVOLUT_PAY",
  "card_scheme": "VISA",
  "card_funding": "DEBIT",
  "order_description": "string",
  "order_merchant_external_ref": "string",
  "original_operation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "acquiring_fee_amount": 0,
  "card_interchange_fee_amount": 0,
  "card_scheme_fee_amount": 0,
  "card_type": "COMMERCIAL",
  "order_channel": "API",
  "card_country": "GB"
}
```

CSV output for `icpp_fee_breakdown_report` report type. Contains IC++ fee components broken down per transaction for a specific IC++ charge.

The first row is a header row with column names. Subsequent rows contain one row per transaction.

`card_interchange_fee_amount` and `card_scheme_fee_amount` are omitted for Revolut Pay transactions.

:::note
The actual response is a raw `text/csv` string. The object schema below is a documentation convention only: OpenAPI's schema language (JSON Schema) describes JSON data shapes and has no native construct for typed CSV columns, so each property here corresponds to a CSV column header rather than a JSON field.

`payment_method` in this report returns `REVOLUT_PAY` for Revolut Pay transactions. Other reports use `PAY_WITH_REVOLUT` for the same payment method.
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|Unique identifier of the payment in the acquiring system. Corresponds to `payment_id` in the payments report for the same payment.|
|created_at|string(date-time)|false|none|Date and time the payment was created.|
|operation|string|false|none|Type of the IC++ transaction.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `SALE` \| Fee breakdown for a payment sale. \|<br>\| `REFUND` \| Fee breakdown for a refund. \|<br>\| `DISPUTE` \| Fee breakdown for a dispute-related transaction. \||
|amount|number|false|none|Transaction amount.|
|currency|string|false|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the transaction.|
|settlement_amount|number|false|none|Amount settled on the merchant's account.|
|settlement_currency|string|false|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the settled amount.|
|payment_method|string|false|none|Payment method used. Returns `REVOLUT_PAY` for Revolut Pay, or the card scheme name for card payments.|
|card_scheme|string|false|none|Card BIN scheme.|
|card_funding|string|false|none|Card funding type.|
|order_description|string|false|none|Description of the order.|
|order_merchant_external_ref|string|false|none|Merchant's order reference. The value of the `merchant_order_data.reference` field set when the order was created.|
|original_operation_id|string(uuid)|false|none|For refunds and disputes, the acquiring ID of the original payment. Corresponds to `original_payment_id` in the payments report.|
|acquiring_fee_amount|number|false|none|IC++ acquiring markup fee component.|
|card_interchange_fee_amount|number|false|none|Interchange fee component. Omitted for Revolut Pay transactions.|
|card_scheme_fee_amount|number|false|none|Card scheme fee component. Omitted for Revolut Pay transactions.|
|card_type|string|false|none|Card commercial category.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `COMMERCIAL` \| Business or corporate card. \|<br>\| `CONSUMER` \| Personal card. \||
|order_channel|string|false|none|Channel through which the order was created.|
|card_country|string|false|none|Country of the card, as an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.|

#### Enumerated Values

|Property|Value|
|---|---|
|operation|SALE|
|operation|REFUND|
|operation|DISPUTE|
|card_type|COMMERCIAL|
|card_type|CONSUMER|

<h2 id="tocS_Webhook-Id">Webhook-Id</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-id"></a>
<a id="schema_Webhook-Id"></a>
<a id="tocSwebhook-id"></a>
<a id="tocswebhook-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The ID of the webhook.

<h2 id="tocS_Webhook-Url">Webhook-Url</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-url"></a>
<a id="schema_Webhook-Url"></a>
<a id="tocSwebhook-url"></a>
<a id="tocswebhook-url"></a>

```json
"http://example.com"
```

Your webhook's URL to which event notifications will be sent. 

Must be a valid HTTP or HTTPS URL, capable of receiving `POST` requests.

:::warning
Restrictions:
- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)
- URI scheme is required and must be either `http` or `https`
- URI host is required and cannot be `localhost` or an IP address
- Max length: `2000`
- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)
:::

<h2 id="tocS_Webhook-Events">Webhook-Events</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-events"></a>
<a id="schema_Webhook-Events"></a>
<a id="tocSwebhook-events"></a>
<a id="tocswebhook-events"></a>

```json
[
  "ORDER_COMPLETED"
]
```

List of event types that the webhook is configured to listen to.

Each event is related to status changes of a specific object in the Merchant API:

  | Object | Event types |
  | --------- | ----------- |
  | `Order`   | <ul> <li>`ORDER_COMPLETED`</li> <li>`ORDER_AUTHORISED`</li> <li>`ORDER_CANCELLED`</li> <li>`ORDER_FAILED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_DECLINED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_FAILED`</li> </ul> |
  | `Payment` | <ul> <li>`ORDER_PAYMENT_AUTHENTICATION_CHALLENGED`</li> <li>`ORDER_PAYMENT_AUTHENTICATED`</li> <li>`ORDER_PAYMENT_AUTHORISATION_STARTED`</li> <li>`ORDER_PAYMENT_DECLINED`</li> <li>`ORDER_PAYMENT_FAILED`</li> </ul> |
  | `Subscription`  | <ul> <li>`SUBSCRIPTION_INITIATED`</li> <li>`SUBSCRIPTION_FINISHED`</li> <li>`SUBSCRIPTION_CANCELLED`</li> <li>`SUBSCRIPTION_OVERDUE`</li></ul> |
  | `Payout`  | <ul> <li>`PAYOUT_INITIATED`</li> <li>`PAYOUT_COMPLETED`</li> <li>`PAYOUT_FAILED`</li> </ul> |
  | `Dispute`  | <ul> <li>`DISPUTE_ACTION_REQUIRED`</li> <li>`DISPUTE_UNDER_REVIEW`</li> <li>`DISPUTE_WON`</li> <li>`DISPUTE_LOST`</li></ul> |

<h2 id="tocS_Webhook-Signing-Secret">Webhook-Signing-Secret</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-signing-secret"></a>
<a id="schema_Webhook-Signing-Secret"></a>
<a id="tocSwebhook-signing-secret"></a>
<a id="tocswebhook-signing-secret"></a>

```json
"string"
```

The signing secret for the webhook. Use it to verify the signature for the webhook request's payload.

<h2 id="tocS_Webhook-v2">Webhook-v2</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-v2"></a>
<a id="schema_Webhook-v2"></a>
<a id="tocSwebhook-v2"></a>
<a id="tocswebhook-v2"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "url": "http://example.com",
  "events": [
    "ORDER_COMPLETED"
  ],
  "signing_secret": "string"
}
```

A webhook object.

Unlike the legacy API, `signing_secret` is included in all webhook responses, not only on creation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Webhook-Id](#schemawebhook-id)|true|none|The ID of the webhook.|
|url|[Webhook-Url](#schemawebhook-url)|true|none|Your webhook's URL to which event notifications will be sent. <br><br>Must be a valid HTTP or HTTPS URL, capable of receiving `POST` requests.<br><br>:::warning<br>Restrictions:<br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be either `http` or `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `2000`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::|
|events|[Webhook-Events](#schemawebhook-events)|true|none|List of event types that the webhook is configured to listen to.<br><br>Each event is related to status changes of a specific object in the Merchant API:<br><br>  \| Object \| Event types \|<br>  \| --------- \| ----------- \|<br>  \| `Order`   \| <ul> <li>`ORDER_COMPLETED`</li> <li>`ORDER_AUTHORISED`</li> <li>`ORDER_CANCELLED`</li> <li>`ORDER_FAILED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_DECLINED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_FAILED`</li> </ul> \|<br>  \| `Payment` \| <ul> <li>`ORDER_PAYMENT_AUTHENTICATION_CHALLENGED`</li> <li>`ORDER_PAYMENT_AUTHENTICATED`</li> <li>`ORDER_PAYMENT_AUTHORISATION_STARTED`</li> <li>`ORDER_PAYMENT_DECLINED`</li> <li>`ORDER_PAYMENT_FAILED`</li> </ul> \|<br>  \| `Subscription`  \| <ul> <li>`SUBSCRIPTION_INITIATED`</li> <li>`SUBSCRIPTION_FINISHED`</li> <li>`SUBSCRIPTION_CANCELLED`</li> <li>`SUBSCRIPTION_OVERDUE`</li></ul> \|<br>  \| `Payout`  \| <ul> <li>`PAYOUT_INITIATED`</li> <li>`PAYOUT_COMPLETED`</li> <li>`PAYOUT_FAILED`</li> </ul> \|<br>  \| `Dispute`  \| <ul> <li>`DISPUTE_ACTION_REQUIRED`</li> <li>`DISPUTE_UNDER_REVIEW`</li> <li>`DISPUTE_WON`</li> <li>`DISPUTE_LOST`</li></ul> \||
|signing_secret|[Webhook-Signing-Secret](#schemawebhook-signing-secret)|true|none|The signing secret for the webhook. Use it to verify the signature for the webhook request's payload.|

#### Enumerated Values

|Property|Value|
|---|---|
|events|ORDER_COMPLETED|
|events|ORDER_AUTHORISED|
|events|ORDER_CANCELLED|
|events|ORDER_FAILED|
|events|ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED|
|events|ORDER_INCREMENTAL_AUTHORISATION_DECLINED|
|events|ORDER_INCREMENTAL_AUTHORISATION_FAILED|
|events|ORDER_PAYMENT_AUTHENTICATION_CHALLENGED|
|events|ORDER_PAYMENT_AUTHENTICATED|
|events|ORDER_PAYMENT_AUTHORISATION_STARTED|
|events|ORDER_PAYMENT_DECLINED|
|events|ORDER_PAYMENT_FAILED|
|events|SUBSCRIPTION_INITIATED|
|events|SUBSCRIPTION_FINISHED|
|events|SUBSCRIPTION_CANCELLED|
|events|SUBSCRIPTION_OVERDUE|
|events|PAYOUT_INITIATED|
|events|PAYOUT_COMPLETED|
|events|PAYOUT_FAILED|
|events|DISPUTE_ACTION_REQUIRED|
|events|DISPUTE_UNDER_REVIEW|
|events|DISPUTE_WON|
|events|DISPUTE_LOST|

<h2 id="tocS_Webhooks">Webhooks</h2>
<!-- backwards compatibility -->
<a id="schemawebhooks"></a>
<a id="schema_Webhooks"></a>
<a id="tocSwebhooks"></a>
<a id="tocswebhooks"></a>

```json
{
  "webhooks": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "url": "http://example.com",
      "events": [
        "ORDER_COMPLETED"
      ],
      "signing_secret": "string"
    }
  ]
}
```

A list of configured webhooks for the merchant.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhooks|[[Webhook-v2](#schemawebhook-v2)]|true|none|List of webhooks.|

<h2 id="tocS_Webhook-Creation">Webhook-Creation</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-creation"></a>
<a id="schema_Webhook-Creation"></a>
<a id="tocSwebhook-creation"></a>
<a id="tocswebhook-creation"></a>

```json
{
  "url": "http://example.com",
  "events": [
    "ORDER_COMPLETED"
  ]
}
```

Request body for creating or updating a webhook, including the endpoint URL and subscribed events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|[Webhook-Url](#schemawebhook-url)|true|none|Your webhook's URL to which event notifications will be sent. <br><br>Must be a valid HTTP or HTTPS URL, capable of receiving `POST` requests.<br><br>:::warning<br>Restrictions:<br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be either `http` or `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `2000`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::|
|events|[Webhook-Events](#schemawebhook-events)|true|none|List of event types that the webhook is configured to listen to.<br><br>Each event is related to status changes of a specific object in the Merchant API:<br><br>  \| Object \| Event types \|<br>  \| --------- \| ----------- \|<br>  \| `Order`   \| <ul> <li>`ORDER_COMPLETED`</li> <li>`ORDER_AUTHORISED`</li> <li>`ORDER_CANCELLED`</li> <li>`ORDER_FAILED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_DECLINED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_FAILED`</li> </ul> \|<br>  \| `Payment` \| <ul> <li>`ORDER_PAYMENT_AUTHENTICATION_CHALLENGED`</li> <li>`ORDER_PAYMENT_AUTHENTICATED`</li> <li>`ORDER_PAYMENT_AUTHORISATION_STARTED`</li> <li>`ORDER_PAYMENT_DECLINED`</li> <li>`ORDER_PAYMENT_FAILED`</li> </ul> \|<br>  \| `Subscription`  \| <ul> <li>`SUBSCRIPTION_INITIATED`</li> <li>`SUBSCRIPTION_FINISHED`</li> <li>`SUBSCRIPTION_CANCELLED`</li> <li>`SUBSCRIPTION_OVERDUE`</li></ul> \|<br>  \| `Payout`  \| <ul> <li>`PAYOUT_INITIATED`</li> <li>`PAYOUT_COMPLETED`</li> <li>`PAYOUT_FAILED`</li> </ul> \|<br>  \| `Dispute`  \| <ul> <li>`DISPUTE_ACTION_REQUIRED`</li> <li>`DISPUTE_UNDER_REVIEW`</li> <li>`DISPUTE_WON`</li> <li>`DISPUTE_LOST`</li></ul> \||

#### Enumerated Values

|Property|Value|
|---|---|
|events|ORDER_COMPLETED|
|events|ORDER_AUTHORISED|
|events|ORDER_CANCELLED|
|events|ORDER_FAILED|
|events|ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED|
|events|ORDER_INCREMENTAL_AUTHORISATION_DECLINED|
|events|ORDER_INCREMENTAL_AUTHORISATION_FAILED|
|events|ORDER_PAYMENT_AUTHENTICATION_CHALLENGED|
|events|ORDER_PAYMENT_AUTHENTICATED|
|events|ORDER_PAYMENT_AUTHORISATION_STARTED|
|events|ORDER_PAYMENT_DECLINED|
|events|ORDER_PAYMENT_FAILED|
|events|SUBSCRIPTION_INITIATED|
|events|SUBSCRIPTION_FINISHED|
|events|SUBSCRIPTION_CANCELLED|
|events|SUBSCRIPTION_OVERDUE|
|events|PAYOUT_INITIATED|
|events|PAYOUT_COMPLETED|
|events|PAYOUT_FAILED|
|events|DISPUTE_ACTION_REQUIRED|
|events|DISPUTE_UNDER_REVIEW|
|events|DISPUTE_WON|
|events|DISPUTE_LOST|

<h2 id="tocS_Webhook-Update">Webhook-Update</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-update"></a>
<a id="schema_Webhook-Update"></a>
<a id="tocSwebhook-update"></a>
<a id="tocswebhook-update"></a>

```json
{
  "url": "http://example.com",
  "events": [
    "ORDER_COMPLETED"
  ]
}
```

The request body for updating a webhook.

All fields are optional. Only the fields provided in the request will be updated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|[Webhook-Url](#schemawebhook-url)|false|none|Your webhook's URL to which event notifications will be sent. <br><br>Must be a valid HTTP or HTTPS URL, capable of receiving `POST` requests.<br><br>:::warning<br>Restrictions:<br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be either `http` or `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `2000`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::|
|events|[Webhook-Events](#schemawebhook-events)|false|none|List of event types that the webhook is configured to listen to.<br><br>Each event is related to status changes of a specific object in the Merchant API:<br><br>  \| Object \| Event types \|<br>  \| --------- \| ----------- \|<br>  \| `Order`   \| <ul> <li>`ORDER_COMPLETED`</li> <li>`ORDER_AUTHORISED`</li> <li>`ORDER_CANCELLED`</li> <li>`ORDER_FAILED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_DECLINED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_FAILED`</li> </ul> \|<br>  \| `Payment` \| <ul> <li>`ORDER_PAYMENT_AUTHENTICATION_CHALLENGED`</li> <li>`ORDER_PAYMENT_AUTHENTICATED`</li> <li>`ORDER_PAYMENT_AUTHORISATION_STARTED`</li> <li>`ORDER_PAYMENT_DECLINED`</li> <li>`ORDER_PAYMENT_FAILED`</li> </ul> \|<br>  \| `Subscription`  \| <ul> <li>`SUBSCRIPTION_INITIATED`</li> <li>`SUBSCRIPTION_FINISHED`</li> <li>`SUBSCRIPTION_CANCELLED`</li> <li>`SUBSCRIPTION_OVERDUE`</li></ul> \|<br>  \| `Payout`  \| <ul> <li>`PAYOUT_INITIATED`</li> <li>`PAYOUT_COMPLETED`</li> <li>`PAYOUT_FAILED`</li> </ul> \|<br>  \| `Dispute`  \| <ul> <li>`DISPUTE_ACTION_REQUIRED`</li> <li>`DISPUTE_UNDER_REVIEW`</li> <li>`DISPUTE_WON`</li> <li>`DISPUTE_LOST`</li></ul> \||

#### Enumerated Values

|Property|Value|
|---|---|
|events|ORDER_COMPLETED|
|events|ORDER_AUTHORISED|
|events|ORDER_CANCELLED|
|events|ORDER_FAILED|
|events|ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED|
|events|ORDER_INCREMENTAL_AUTHORISATION_DECLINED|
|events|ORDER_INCREMENTAL_AUTHORISATION_FAILED|
|events|ORDER_PAYMENT_AUTHENTICATION_CHALLENGED|
|events|ORDER_PAYMENT_AUTHENTICATED|
|events|ORDER_PAYMENT_AUTHORISATION_STARTED|
|events|ORDER_PAYMENT_DECLINED|
|events|ORDER_PAYMENT_FAILED|
|events|SUBSCRIPTION_INITIATED|
|events|SUBSCRIPTION_FINISHED|
|events|SUBSCRIPTION_CANCELLED|
|events|SUBSCRIPTION_OVERDUE|
|events|PAYOUT_INITIATED|
|events|PAYOUT_COMPLETED|
|events|PAYOUT_FAILED|
|events|DISPUTE_ACTION_REQUIRED|
|events|DISPUTE_UNDER_REVIEW|
|events|DISPUTE_WON|
|events|DISPUTE_LOST|

<h2 id="tocS_Synchronous-Webhook">Synchronous-Webhook</h2>
<!-- backwards compatibility -->
<a id="schemasynchronous-webhook"></a>
<a id="schema_Synchronous-Webhook"></a>
<a id="tocSsynchronous-webhook"></a>
<a id="tocssynchronous-webhook"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "signing_key": "string",
  "url": "http://example.com",
  "event_type": "fast_checkout.validate_address",
  "location_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

A synchronous webhook configuration for real-time address validation during fast checkout.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the synchronous webhook object.|
|signing_key|string|true|none|A randomly generated signing key, which can be used by merchants to authenticate requests from Revolut by verifying the signature. For more information, see: [Payload Signature](https://developer.revolut.com/docs/api/merchant#authentication).|
|url|string(uri)|true|none|The valid URL of the endpoint, that uses HTTPS URL schema. Revolut sends the shipping address of the customer to this URL for validation.<br><br>:::warning<br>Restrictions:<br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `2000`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::|
|event_type|string|true|none|Type of event this synchronous webhook is configured for.<br><br>:::note<br>At the moment, synchronous webhooks only support address validation events. <br>:::|
|location_id|[Location-Id](#schemalocation-id)|false|none|Unique ID representing the location where merchants sells products.<br><br>:::info<br>For more information, see: [Locations](https://developer.revolut.com/docs/api/merchant#tag-locations).<br>:::        |

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|fast_checkout.validate_address|

<h2 id="tocS_Synchronous-Webhook-Creation">Synchronous-Webhook-Creation</h2>
<!-- backwards compatibility -->
<a id="schemasynchronous-webhook-creation"></a>
<a id="schema_Synchronous-Webhook-Creation"></a>
<a id="tocSsynchronous-webhook-creation"></a>
<a id="tocssynchronous-webhook-creation"></a>

```json
{
  "event_type": "fast_checkout.validate_address",
  "url": "http://example.com",
  "location_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

The `SynchronousWebhook` object allows merchants to register endpoints on their backend for receiving predefined event types. Currently, only address validation events are available.

In addition, merchants can specify locations representing their online stores, enabling them to set up different webhooks for different stores.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_type|string|true|none|Type of event this synchronous webhook is configured for.<br><br>:::note<br>At the moment, synchronous webhooks only support address validation events. <br>:::|
|url|string(uri)|true|none|The valid URL of the endpoint, that uses HTTPS URL schema. Revolut sends the shipping address of the customer to this URL for validation.<br><br>:::warning<br>Restrictions:<br>- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)<br>- URI scheme is required and must be `https`<br>- URI host is required and cannot be `localhost` or an IP address<br>- Max length: `2000`<br>- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)<br>:::|
|location_id|[Location-Id](#schemalocation-id)|false|none|Unique ID representing the location where merchants sells products.<br><br>:::info<br>For more information, see: [Locations](https://developer.revolut.com/docs/api/merchant#tag-locations).<br>:::        |

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|fast_checkout.validate_address|

<h2 id="tocS_Location-Name">Location-Name</h2>
<!-- backwards compatibility -->
<a id="schemalocation-name"></a>
<a id="schema_Location-Name"></a>
<a id="tocSlocation-name"></a>
<a id="tocslocation-name"></a>

```json
"string"
```

Name of the location. 

:::warning
The `name` parameter's value must be unique across all locations.
:::

<h2 id="tocS_Location-Type">Location-Type</h2>
<!-- backwards compatibility -->
<a id="schemalocation-type"></a>
<a id="schema_Location-Type"></a>
<a id="tocSlocation-type"></a>
<a id="tocslocation-type"></a>

```json
"online"
```

Type of the location.

| Value | Description |
| ----- | ----------- |
| `online` | Represents an online store. |
| `physical` | Represents a physical point of sale. |

<h2 id="tocS_Location-Online-Details">Location-Online-Details</h2>
<!-- backwards compatibility -->
<a id="schemalocation-online-details"></a>
<a id="schema_Location-Online-Details"></a>
<a id="tocSlocation-online-details"></a>
<a id="tocslocation-online-details"></a>

```json
{
  "domain": "string"
}
```

Additional details of the location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|true|none|Domain address of the location. Required for online locations.<br><br>:::warning<br>The `domain` parameter's value must be unique across all locations.<br>:::|

<h2 id="tocS_Location-Online">Location-Online</h2>
<!-- backwards compatibility -->
<a id="schemalocation-online"></a>
<a id="schema_Location-Online"></a>
<a id="tocSlocation-online"></a>
<a id="tocslocation-online"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "type": "online",
  "details": {
    "domain": "string"
  }
}
```

An online merchant location, including its ID, name, type, and details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Location-Id](#schemalocation-id)|true|none|Unique ID representing the location where merchants sells products.<br><br>:::info<br>For more information, see: [Locations](https://developer.revolut.com/docs/api/merchant#tag-locations).<br>:::        |
|name|[Location-Name](#schemalocation-name)|true|none|Name of the location. <br><br>:::warning<br>The `name` parameter's value must be unique across all locations.<br>:::|
|type|[Location-Type](#schemalocation-type)|true|none|Type of the location.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `online` \| Represents an online store. \|<br>\| `physical` \| Represents a physical point of sale. \||
|details|[Location-Online-Details](#schemalocation-online-details)|true|none|Additional details of the location.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|online|
|type|physical|

<h2 id="tocS_Geo-Location">Geo-Location</h2>
<!-- backwards compatibility -->
<a id="schemageo-location"></a>
<a id="schema_Geo-Location"></a>
<a id="tocSgeo-location"></a>
<a id="tocsgeo-location"></a>

```json
{
  "lat": -90,
  "lon": -180
}
```

Coordinates of the location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lat|number(double)|true|none|The latitude of the location, in decimal degrees.|
|lon|number(double)|true|none|To longitude of the location, in decimal degrees.|

<h2 id="tocS_Day-Opening-Hours">Day-Opening-Hours</h2>
<!-- backwards compatibility -->
<a id="schemaday-opening-hours"></a>
<a id="schema_Day-Opening-Hours"></a>
<a id="tocSday-opening-hours"></a>
<a id="tocsday-opening-hours"></a>

```json
[
  {
    "from": "09:00:00",
    "to": "18:00:00"
  }
]
```

A list of one or more time intervals for a single day. 

A day can have multiple intervals (e.g., closing for a lunch break).

<h2 id="tocS_Opening-Hours">Opening-Hours</h2>
<!-- backwards compatibility -->
<a id="schemaopening-hours"></a>
<a id="schema_Opening-Hours"></a>
<a id="tocSopening-hours"></a>
<a id="tocsopening-hours"></a>

```json
{
  "monday": [
    {
      "from": "09:00:00",
      "to": "18:00:00"
    }
  ],
  "tuesday": [
    {
      "from": "09:00:00",
      "to": "18:00:00"
    }
  ],
  "wednesday": [
    {
      "from": "09:00:00",
      "to": "18:00:00"
    }
  ],
  "thursday": [
    {
      "from": "09:00:00",
      "to": "18:00:00"
    }
  ],
  "friday": [
    {
      "from": "09:00:00",
      "to": "18:00:00"
    }
  ],
  "saturday": [
    {
      "from": "09:00:00",
      "to": "18:00:00"
    }
  ],
  "sunday": [
    {
      "from": "09:00:00",
      "to": "18:00:00"
    }
  ]
}
```

An object containing the opening hours for each day of the week.

A day can have multiple intervals (e.g., closing for a lunch break).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|monday|[Day-Opening-Hours](#schemaday-opening-hours)|false|none|Opening hours for Monday.|
|tuesday|[Day-Opening-Hours](#schemaday-opening-hours)|false|none|Opening hours for Tuesday.|
|wednesday|[Day-Opening-Hours](#schemaday-opening-hours)|false|none|Opening hours for Wednesday.|
|thursday|[Day-Opening-Hours](#schemaday-opening-hours)|false|none|Opening hours for Thursday.|
|friday|[Day-Opening-Hours](#schemaday-opening-hours)|false|none|Opening hours for Friday.|
|saturday|[Day-Opening-Hours](#schemaday-opening-hours)|false|none|Opening hours for Saturday.|
|sunday|[Day-Opening-Hours](#schemaday-opening-hours)|false|none|Opening hours for Sunday.|

<h2 id="tocS_Location-Physical-Details">Location-Physical-Details</h2>
<!-- backwards compatibility -->
<a id="schemalocation-physical-details"></a>
<a id="schema_Location-Physical-Details"></a>
<a id="tocSlocation-physical-details"></a>
<a id="tocslocation-physical-details"></a>

```json
{
  "address": {
    "street_line_1": "string",
    "street_line_2": "string",
    "region": "string",
    "city": "string",
    "country_code": "st",
    "postcode": "string"
  },
  "geo_location": {
    "lat": -90,
    "lon": -180
  },
  "opening_hours": {
    "monday": [
      {
        "from": "09:00:00",
        "to": "18:00:00"
      }
    ],
    "tuesday": [
      {
        "from": "09:00:00",
        "to": "18:00:00"
      }
    ],
    "wednesday": [
      {
        "from": "09:00:00",
        "to": "18:00:00"
      }
    ],
    "thursday": [
      {
        "from": "09:00:00",
        "to": "18:00:00"
      }
    ],
    "friday": [
      {
        "from": "09:00:00",
        "to": "18:00:00"
      }
    ],
    "saturday": [
      {
        "from": "09:00:00",
        "to": "18:00:00"
      }
    ],
    "sunday": [
      {
        "from": "09:00:00",
        "to": "18:00:00"
      }
    ]
  }
}
```

Additional details of the location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address-v3](#schemaaddress-v3)|true|none|Details of a physical address.|
|geo_location|[Geo-Location](#schemageo-location)|true|none|Coordinates of the location.|
|opening_hours|[Opening-Hours](#schemaopening-hours)|true|none|An object containing the opening hours for each day of the week.<br><br>A day can have multiple intervals (e.g., closing for a lunch break).|

<h2 id="tocS_Location-Physical">Location-Physical</h2>
<!-- backwards compatibility -->
<a id="schemalocation-physical"></a>
<a id="schema_Location-Physical"></a>
<a id="tocSlocation-physical"></a>
<a id="tocslocation-physical"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "type": "online",
  "details": {
    "address": {
      "street_line_1": "string",
      "street_line_2": "string",
      "region": "string",
      "city": "string",
      "country_code": "st",
      "postcode": "string"
    },
    "geo_location": {
      "lat": -90,
      "lon": -180
    },
    "opening_hours": {
      "monday": [
        {
          "from": "09:00:00",
          "to": "18:00:00"
        }
      ],
      "tuesday": [
        {
          "from": "09:00:00",
          "to": "18:00:00"
        }
      ],
      "wednesday": [
        {
          "from": "09:00:00",
          "to": "18:00:00"
        }
      ],
      "thursday": [
        {
          "from": "09:00:00",
          "to": "18:00:00"
        }
      ],
      "friday": [
        {
          "from": "09:00:00",
          "to": "18:00:00"
        }
      ],
      "saturday": [
        {
          "from": "09:00:00",
          "to": "18:00:00"
        }
      ],
      "sunday": [
        {
          "from": "09:00:00",
          "to": "18:00:00"
        }
      ]
    }
  }
}
```

A physical merchant location, including its ID, name, type, and details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Location-Id](#schemalocation-id)|true|none|Unique ID representing the location where merchants sells products.<br><br>:::info<br>For more information, see: [Locations](https://developer.revolut.com/docs/api/merchant#tag-locations).<br>:::        |
|name|[Location-Name](#schemalocation-name)|true|none|Name of the location. <br><br>:::warning<br>The `name` parameter's value must be unique across all locations.<br>:::|
|type|[Location-Type](#schemalocation-type)|true|none|Type of the location.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `online` \| Represents an online store. \|<br>\| `physical` \| Represents a physical point of sale. \||
|details|[Location-Physical-Details](#schemalocation-physical-details)|true|none|Additional details of the location.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|online|
|type|physical|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "type": "online",
  "details": {
    "domain": "string"
  }
}
```

Location object represents merchant locations depending on type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Location-Online](#schemalocation-online)|false|none|An online merchant location, including its ID, name, type, and details.|
|*oneOf*|[Location-Physical](#schemalocation-physical)|false|none|A physical merchant location, including its ID, name, type, and details.|

<h2 id="tocS_Location-Creation-Online">Location-Creation-Online</h2>
<!-- backwards compatibility -->
<a id="schemalocation-creation-online"></a>
<a id="schema_Location-Creation-Online"></a>
<a id="tocSlocation-creation-online"></a>
<a id="tocslocation-creation-online"></a>

```json
{
  "name": "string",
  "type": "online",
  "details": {
    "domain": "string"
  }
}
```

Request body for creating an online merchant location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[Location-Name](#schemalocation-name)|true|none|Name of the location. <br><br>:::warning<br>The `name` parameter's value must be unique across all locations.<br>:::|
|type|[Location-Type](#schemalocation-type)|true|none|Type of the location.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `online` \| Represents an online store. \|<br>\| `physical` \| Represents a physical point of sale. \||
|details|[Location-Online-Details](#schemalocation-online-details)|true|none|Additional details of the location.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|online|
|type|physical|

<h2 id="tocS_Location-Creation-Physical">Location-Creation-Physical</h2>
<!-- backwards compatibility -->
<a id="schemalocation-creation-physical"></a>
<a id="schema_Location-Creation-Physical"></a>
<a id="tocSlocation-creation-physical"></a>
<a id="tocslocation-creation-physical"></a>

```json
{
  "name": "string",
  "type": "online",
  "details": {
    "address": {
      "street_line_1": "string",
      "street_line_2": "string",
      "region": "string",
      "city": "string",
      "country_code": "st",
      "postcode": "string"
    },
    "geo_location": {
      "lat": -90,
      "lon": -180
    },
    "opening_hours": {
      "monday": [
        {
          "from": "09:00:00",
          "to": "18:00:00"
        }
      ],
      "tuesday": [
        {
          "from": "09:00:00",
          "to": "18:00:00"
        }
      ],
      "wednesday": [
        {
          "from": "09:00:00",
          "to": "18:00:00"
        }
      ],
      "thursday": [
        {
          "from": "09:00:00",
          "to": "18:00:00"
        }
      ],
      "friday": [
        {
          "from": "09:00:00",
          "to": "18:00:00"
        }
      ],
      "saturday": [
        {
          "from": "09:00:00",
          "to": "18:00:00"
        }
      ],
      "sunday": [
        {
          "from": "09:00:00",
          "to": "18:00:00"
        }
      ]
    }
  }
}
```

Request body for creating a physical merchant location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[Location-Name](#schemalocation-name)|true|none|Name of the location. <br><br>:::warning<br>The `name` parameter's value must be unique across all locations.<br>:::|
|type|[Location-Type](#schemalocation-type)|true|none|Type of the location.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| `online` \| Represents an online store. \|<br>\| `physical` \| Represents a physical point of sale. \||
|details|[Location-Physical-Details](#schemalocation-physical-details)|true|none|Additional details of the location.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|online|
|type|physical|

<h2 id="tocS_Location-Creation">Location-Creation</h2>
<!-- backwards compatibility -->
<a id="schemalocation-creation"></a>
<a id="schema_Location-Creation"></a>
<a id="tocSlocation-creation"></a>
<a id="tocslocation-creation"></a>

```json
{
  "name": "string",
  "type": "online",
  "details": {
    "domain": "string"
  }
}
```

Request body for creating a location. The structure of the `details` object depends on the `type` of the location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Location-Creation-Online](#schemalocation-creation-online)|false|none|Request body for creating an online merchant location.|
|*oneOf*|[Location-Creation-Physical](#schemalocation-creation-physical)|false|none|Request body for creating a physical merchant location.|

<h2 id="tocS_Location-Update-Online">Location-Update-Online</h2>
<!-- backwards compatibility -->
<a id="schemalocation-update-online"></a>
<a id="schema_Location-Update-Online"></a>
<a id="tocSlocation-update-online"></a>
<a id="tocslocation-update-online"></a>

```json
{
  "name": "string",
  "details": {
    "domain": "string"
  }
}
```

Request body for updating an online merchant location's name or details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[Location-Name](#schemalocation-name)|false|none|Name of the location. <br><br>:::warning<br>The `name` parameter's value must be unique across all locations.<br>:::|
|details|[Location-Online-Details](#schemalocation-online-details)|false|none|Additional details of the location.|

<h2 id="tocS_Location-Update-Physical">Location-Update-Physical</h2>
<!-- backwards compatibility -->
<a id="schemalocation-update-physical"></a>
<a id="schema_Location-Update-Physical"></a>
<a id="tocSlocation-update-physical"></a>
<a id="tocslocation-update-physical"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "type": "online",
  "details": {
    "domain": "string"
  }
}
```

Location object represents merchant locations depending on type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Location-Online](#schemalocation-online)|false|none|An online merchant location, including its ID, name, type, and details.|
|*oneOf*|[Location-Physical](#schemalocation-physical)|false|none|A physical merchant location, including its ID, name, type, and details.|

<h2 id="tocS_Location-Update">Location-Update</h2>
<!-- backwards compatibility -->
<a id="schemalocation-update"></a>
<a id="schema_Location-Update"></a>
<a id="tocSlocation-update"></a>
<a id="tocslocation-update"></a>

```json
{
  "name": "string",
  "details": {
    "domain": "string"
  }
}
```

Request body for updating a location. The structure of the `details` object depends on the `type` of the location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Location-Update-Online](#schemalocation-update-online)|false|none|Request body for updating an online merchant location's name or details.|
|*oneOf*|[Location-Update-Physical](#schemalocation-update-physical)|false|none|Location object represents merchant locations depending on type.|

<h2 id="tocS_Terminal-Operation-Mode">Terminal-Operation-Mode</h2>
<!-- backwards compatibility -->
<a id="schematerminal-operation-mode"></a>
<a id="schema_Terminal-Operation-Mode"></a>
<a id="tocSterminal-operation-mode"></a>
<a id="tocsterminal-operation-mode"></a>

```json
"pos"
```

The operation mode of the terminal.

  | Value | Description |
|-------|-------------|
| `pos` | Returns only terminals in Pay at Counter mode |
| `payment_acceptance` | Returns only terminals in standard checkout mode |

<h2 id="tocS_Terminal-Id">Terminal-Id</h2>
<!-- backwards compatibility -->
<a id="schematerminal-id"></a>
<a id="schema_Terminal-Id"></a>
<a id="tocSterminal-id"></a>
<a id="tocsterminal-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The unique identifier of the terminal.

<h2 id="tocS_Terminal-Name">Terminal-Name</h2>
<!-- backwards compatibility -->
<a id="schematerminal-name"></a>
<a id="schema_Terminal-Name"></a>
<a id="tocSterminal-name"></a>
<a id="tocsterminal-name"></a>

```json
"string"
```

The name of the terminal device.

<h2 id="tocS_Terminal-Type">Terminal-Type</h2>
<!-- backwards compatibility -->
<a id="schematerminal-type"></a>
<a id="schema_Terminal-Type"></a>
<a id="tocSterminal-type"></a>
<a id="tocsterminal-type"></a>

```json
"youtransactor_ucube_touch"
```

The hardware type/model of the terminal device.

<h2 id="tocS_Terminal-Serial-Number">Terminal-Serial-Number</h2>
<!-- backwards compatibility -->
<a id="schematerminal-serial-number"></a>
<a id="schema_Terminal-Serial-Number"></a>
<a id="tocSterminal-serial-number"></a>
<a id="tocsterminal-serial-number"></a>

```json
"RT-00123456"
```

The serial number of the terminal device.

<h2 id="tocS_Terminal-Battery-Level">Terminal-Battery-Level</h2>
<!-- backwards compatibility -->
<a id="schematerminal-battery-level"></a>
<a id="schema_Terminal-Battery-Level"></a>
<a id="tocSterminal-battery-level"></a>
<a id="tocsterminal-battery-level"></a>

```json
0
```

The current battery level of the terminal as a percentage (0-100).

<h2 id="tocS_Terminal-Online">Terminal-Online</h2>
<!-- backwards compatibility -->
<a id="schematerminal-online"></a>
<a id="schema_Terminal-Online"></a>
<a id="tocSterminal-online"></a>
<a id="tocsterminal-online"></a>

```json
true
```

Indicates whether the terminal is currently online and connected.

| Value | Description |
|-------|-------------|
| `true` | Terminal is online and available |
| `false` | Terminal is offline |

<h2 id="tocS_Terminal-Last-Online-At">Terminal-Last-Online-At</h2>
<!-- backwards compatibility -->
<a id="schematerminal-last-online-at"></a>
<a id="schema_Terminal-Last-Online-At"></a>
<a id="tocSterminal-last-online-at"></a>
<a id="tocsterminal-last-online-at"></a>

```json
"1970-01-01T00:00:00Z"
```

The date and time when the terminal was last seen online.

<h2 id="tocS_Terminal-Device-Id">Terminal-Device-Id</h2>
<!-- backwards compatibility -->
<a id="schematerminal-device-id"></a>
<a id="schema_Terminal-Device-Id"></a>
<a id="tocSterminal-device-id"></a>
<a id="tocsterminal-device-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The unique identifier of the Revolut app installed on the terminal, assigned during device pairing. Only returned for Newland terminal types.

<h2 id="tocS_Terminal">Terminal</h2>
<!-- backwards compatibility -->
<a id="schematerminal"></a>
<a id="schema_Terminal"></a>
<a id="tocSterminal"></a>
<a id="tocsterminal"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "type": "youtransactor_ucube_touch",
  "serial_number": "RT-00123456",
  "battery_level": 0,
  "online": true,
  "last_online_at": "1970-01-01T00:00:00Z",
  "device_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Represents a Revolut Terminal device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Terminal-Id](#schematerminal-id)|true|none|The unique identifier of the terminal.|
|name|[Terminal-Name](#schematerminal-name)|false|none|The name of the terminal device.|
|type|[Terminal-Type](#schematerminal-type)|true|none|The hardware type/model of the terminal device.|
|serial_number|[Terminal-Serial-Number](#schematerminal-serial-number)|true|none|The serial number of the terminal device.|
|battery_level|[Terminal-Battery-Level](#schematerminal-battery-level)|false|none|The current battery level of the terminal as a percentage (0-100).|
|online|[Terminal-Online](#schematerminal-online)|true|none|Indicates whether the terminal is currently online and connected.<br><br>\| Value \| Description \|<br>\|-------\|-------------\|<br>\| `true` \| Terminal is online and available \|<br>\| `false` \| Terminal is offline \||
|last_online_at|[Terminal-Last-Online-At](#schematerminal-last-online-at)|false|none|The date and time when the terminal was last seen online.|
|device_id|[Terminal-Device-Id](#schematerminal-device-id)|false|none|The unique identifier of the Revolut app installed on the terminal, assigned during device pairing. Only returned for Newland terminal types.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|youtransactor_ucube_touch|
|type|newland_n950|
|type|newland_n750|
|type|newland_r25p|

<h2 id="tocS_Terminals">Terminals</h2>
<!-- backwards compatibility -->
<a id="schematerminals"></a>
<a id="schema_Terminals"></a>
<a id="tocSterminals"></a>
<a id="tocsterminals"></a>

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "type": "youtransactor_ucube_touch",
    "serial_number": "RT-00123456",
    "battery_level": 0,
    "online": true,
    "last_online_at": "1970-01-01T00:00:00Z",
    "device_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
]
```

List of terminal devices.

<h2 id="tocS_Terminals-Response">Terminals-Response</h2>
<!-- backwards compatibility -->
<a id="schematerminals-response"></a>
<a id="schema_Terminals-Response"></a>
<a id="tocSterminals-response"></a>
<a id="tocsterminals-response"></a>

```json
{
  "terminals": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "type": "youtransactor_ucube_touch",
      "serial_number": "RT-00123456",
      "battery_level": 0,
      "online": true,
      "last_online_at": "1970-01-01T00:00:00Z",
      "device_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

Response containing a list of terminals.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|terminals|[Terminals](#schematerminals)|true|none|List of terminal devices.|

<h2 id="tocS_Payment-Intent-Amount">Payment-Intent-Amount</h2>
<!-- backwards compatibility -->
<a id="schemapayment-intent-amount"></a>
<a id="schema_Payment-Intent-Amount"></a>
<a id="tocSpayment-intent-amount"></a>
<a id="tocspayment-intent-amount"></a>

```json
0
```

The payment amount expressed in minor currency units, according to the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217). For example, `7034` in `EUR` corresponds to €70.34.

:::info
Conversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).
:::

<h2 id="tocS_Payment-Intent-Creation">Payment-Intent-Creation</h2>
<!-- backwards compatibility -->
<a id="schemapayment-intent-creation"></a>
<a id="schema_Payment-Intent-Creation"></a>
<a id="tocSpayment-intent-creation"></a>
<a id="tocspayment-intent-creation"></a>

```json
{
  "amount": 0,
  "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Request body for creating a payment intent to push to a terminal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Payment-Intent-Amount](#schemapayment-intent-amount)|true|none|The payment amount expressed in minor currency units, according to the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217). For example, `7034` in `EUR` corresponds to €70.34.<br><br>:::info<br>Conversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).<br>:::|
|terminal_id|[Terminal-Id](#schematerminal-id)|true|none|The unique identifier of the terminal.|

<h2 id="tocS_Payment-Intent-Id">Payment-Intent-Id</h2>
<!-- backwards compatibility -->
<a id="schemapayment-intent-id"></a>
<a id="schema_Payment-Intent-Id"></a>
<a id="tocSpayment-intent-id"></a>
<a id="tocspayment-intent-id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The unique identifier of the payment intent.

<h2 id="tocS_Payment-Intent-State">Payment-Intent-State</h2>
<!-- backwards compatibility -->
<a id="schemapayment-intent-state"></a>
<a id="schema_Payment-Intent-State"></a>
<a id="tocSpayment-intent-state"></a>
<a id="tocspayment-intent-state"></a>

```json
"pending"
```

The current state of the payment intent.

| State | Description |
|-------|-------------|
| `pending` | Payment intent created and sent to terminal, customer has not yet started interacting |
| `processing` | Customer is actively interacting with the terminal (e.g., inserting card, entering PIN) |
| `completed` | Payment authorization is complete, includes a `payment_id` in the response |
| `cancelled` | Payment intent was cancelled (by system or customer) |
| `failed` | Payment intent failed due to technical issues (timeout, terminal unavailable, network error) |

<h2 id="tocS_Payment-Intent">Payment-Intent</h2>
<!-- backwards compatibility -->
<a id="schemapayment-intent"></a>
<a id="schema_Payment-Intent"></a>
<a id="tocSpayment-intent"></a>
<a id="tocspayment-intent"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "state": "pending",
  "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "payment_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": 0,
  "currency": "str",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

Represents a payment intent that has been pushed to a Revolut Terminal device.

When the payment intent reaches `completed` state, it includes a `payment_id` that can be used to [retrieve the final payment status](https://developer.revolut.com/docs/api/merchant#retrieve-payment-details).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Payment-Intent-Id](#schemapayment-intent-id)|true|none|The unique identifier of the payment intent.|
|state|[Payment-Intent-State](#schemapayment-intent-state)|true|none|The current state of the payment intent.<br><br>\| State \| Description \|<br>\|-------\|-------------\|<br>\| `pending` \| Payment intent created and sent to terminal, customer has not yet started interacting \|<br>\| `processing` \| Customer is actively interacting with the terminal (e.g., inserting card, entering PIN) \|<br>\| `completed` \| Payment authorization is complete, includes a `payment_id` in the response \|<br>\| `cancelled` \| Payment intent was cancelled (by system or customer) \|<br>\| `failed` \| Payment intent failed due to technical issues (timeout, terminal unavailable, network error) \||
|terminal_id|[Terminal-Id](#schematerminal-id)|true|none|The unique identifier of the terminal.|
|order_id|[Order-Id](#schemaorder-id)|true|none|Permanent order ID used to retrieve, capture, cancel, or refund an order after authorization.|
|payment_id|[Payment-Id](#schemapayment-id)|false|none|The ID of the payment.|
|amount|[Payment-Intent-Amount](#schemapayment-intent-amount)|true|none|The payment amount expressed in minor currency units, according to the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217). For example, `7034` in `EUR` corresponds to €70.34.<br><br>:::info<br>Conversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).<br>:::|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.<br><br>:::info<br>For more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).<br>:::|
|created_at|string(date-time)|true|none|The date and time the payment intent was created.|
|updated_at|string(date-time)|true|none|The date and time the payment intent was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|pending|
|state|processing|
|state|completed|
|state|cancelled|
|state|failed|

<h2 id="tocS_Webhook-Callback-Event">Webhook-Callback-Event</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-callback-event"></a>
<a id="schema_Webhook-Callback-Event"></a>
<a id="tocSwebhook-callback-event"></a>
<a id="tocswebhook-callback-event"></a>

```json
"ORDER_COMPLETED"
```

The event type of the webhook notification that's sent by Revolut to your webhook URL.

Each event is related to status changes of a specific object in the Merchant API:

  | Object | Event types |
  | --------- | ----------- |
  | `Order`   | <ul> <li>`ORDER_COMPLETED`</li> <li>`ORDER_AUTHORISED`</li> <li>`ORDER_CANCELLED`</li> <li>`ORDER_FAILED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_DECLINED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_FAILED`</li> </ul> |
  | `Payment` | <ul> <li>`ORDER_PAYMENT_AUTHENTICATION_CHALLENGED`</li> <li>`ORDER_PAYMENT_AUTHENTICATED`</li> <li>`ORDER_PAYMENT_AUTHORISATION_STARTED`</li> <li>`ORDER_PAYMENT_DECLINED`</li> <li>`ORDER_PAYMENT_FAILED`</li> </ul> |
  | `Subscription`  | <ul> <li>`SUBSCRIPTION_INITIATED`</li> <li>`SUBSCRIPTION_FINISHED`</li> <li>`SUBSCRIPTION_CANCELLED`</li> <li>`SUBSCRIPTION_OVERDUE`</li></ul> |
  | `Payout`  | <ul> <li>`PAYOUT_INITIATED`</li> <li>`PAYOUT_COMPLETED`</li> <li>`PAYOUT_FAILED`</li> </ul> |
  | `Dispute`  | <ul> <li>`DISPUTE_ACTION_REQUIRED`</li> <li>`DISPUTE_UNDER_REVIEW`</li> <li>`DISPUTE_WON`</li> <li>`DISPUTE_LOST`</li></ul> |

<h2 id="tocS_Webhook-Order-Event">Webhook-Order-Event</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-order-event"></a>
<a id="schema_Webhook-Order-Event"></a>
<a id="tocSwebhook-order-event"></a>
<a id="tocswebhook-order-event"></a>

```json
{
  "event": "ORDER_COMPLETED",
  "order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "merchant_order_ext_ref": "string",
  "incremental_authorisation_ext_reference": "string"
}
```

A webhook event payload for order-related events, including the order ID and optional reference fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|[Webhook-Callback-Event](#schemawebhook-callback-event)|true|none|The event type of the webhook notification that's sent by Revolut to your webhook URL.<br><br>Each event is related to status changes of a specific object in the Merchant API:<br><br>  \| Object \| Event types \|<br>  \| --------- \| ----------- \|<br>  \| `Order`   \| <ul> <li>`ORDER_COMPLETED`</li> <li>`ORDER_AUTHORISED`</li> <li>`ORDER_CANCELLED`</li> <li>`ORDER_FAILED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_DECLINED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_FAILED`</li> </ul> \|<br>  \| `Payment` \| <ul> <li>`ORDER_PAYMENT_AUTHENTICATION_CHALLENGED`</li> <li>`ORDER_PAYMENT_AUTHENTICATED`</li> <li>`ORDER_PAYMENT_AUTHORISATION_STARTED`</li> <li>`ORDER_PAYMENT_DECLINED`</li> <li>`ORDER_PAYMENT_FAILED`</li> </ul> \|<br>  \| `Subscription`  \| <ul> <li>`SUBSCRIPTION_INITIATED`</li> <li>`SUBSCRIPTION_FINISHED`</li> <li>`SUBSCRIPTION_CANCELLED`</li> <li>`SUBSCRIPTION_OVERDUE`</li></ul> \|<br>  \| `Payout`  \| <ul> <li>`PAYOUT_INITIATED`</li> <li>`PAYOUT_COMPLETED`</li> <li>`PAYOUT_FAILED`</li> </ul> \|<br>  \| `Dispute`  \| <ul> <li>`DISPUTE_ACTION_REQUIRED`</li> <li>`DISPUTE_UNDER_REVIEW`</li> <li>`DISPUTE_WON`</li> <li>`DISPUTE_LOST`</li></ul> \||
|order_id|string(uuid)|true|none|The ID of the order the event is related to.|
|merchant_order_ext_ref|string|false|none|The information sent during order creation in the<br>`merchant_order_data.reference` field.|
|incremental_authorisation_ext_reference|string|false|none|The reference sent in the `reference` field of the [Increment authorisation](https://developer.revolut.com/docs/api/merchant#increment-authorisation) request. Only present for incremental authorisation events.|

#### Enumerated Values

|Property|Value|
|---|---|
|event|ORDER_COMPLETED|
|event|ORDER_AUTHORISED|
|event|ORDER_CANCELLED|
|event|ORDER_FAILED|
|event|ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED|
|event|ORDER_INCREMENTAL_AUTHORISATION_DECLINED|
|event|ORDER_INCREMENTAL_AUTHORISATION_FAILED|
|event|ORDER_PAYMENT_AUTHENTICATION_CHALLENGED|
|event|ORDER_PAYMENT_AUTHENTICATED|
|event|ORDER_PAYMENT_AUTHORISATION_STARTED|
|event|ORDER_PAYMENT_DECLINED|
|event|ORDER_PAYMENT_FAILED|
|event|SUBSCRIPTION_INITIATED|
|event|SUBSCRIPTION_FINISHED|
|event|SUBSCRIPTION_CANCELLED|
|event|SUBSCRIPTION_OVERDUE|
|event|PAYOUT_INITIATED|
|event|PAYOUT_COMPLETED|
|event|PAYOUT_FAILED|
|event|DISPUTE_ACTION_REQUIRED|
|event|DISPUTE_UNDER_REVIEW|
|event|DISPUTE_WON|
|event|DISPUTE_LOST|

<h2 id="tocS_Webhook-Subscription-Event">Webhook-Subscription-Event</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-subscription-event"></a>
<a id="schema_Webhook-Subscription-Event"></a>
<a id="tocSwebhook-subscription-event"></a>
<a id="tocswebhook-subscription-event"></a>

```json
{
  "event": "ORDER_COMPLETED",
  "subscription_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "external_reference": "string"
}
```

A webhook event payload for subscription-related events, including the subscription ID and external reference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|[Webhook-Callback-Event](#schemawebhook-callback-event)|true|none|The event type of the webhook notification that's sent by Revolut to your webhook URL.<br><br>Each event is related to status changes of a specific object in the Merchant API:<br><br>  \| Object \| Event types \|<br>  \| --------- \| ----------- \|<br>  \| `Order`   \| <ul> <li>`ORDER_COMPLETED`</li> <li>`ORDER_AUTHORISED`</li> <li>`ORDER_CANCELLED`</li> <li>`ORDER_FAILED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_DECLINED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_FAILED`</li> </ul> \|<br>  \| `Payment` \| <ul> <li>`ORDER_PAYMENT_AUTHENTICATION_CHALLENGED`</li> <li>`ORDER_PAYMENT_AUTHENTICATED`</li> <li>`ORDER_PAYMENT_AUTHORISATION_STARTED`</li> <li>`ORDER_PAYMENT_DECLINED`</li> <li>`ORDER_PAYMENT_FAILED`</li> </ul> \|<br>  \| `Subscription`  \| <ul> <li>`SUBSCRIPTION_INITIATED`</li> <li>`SUBSCRIPTION_FINISHED`</li> <li>`SUBSCRIPTION_CANCELLED`</li> <li>`SUBSCRIPTION_OVERDUE`</li></ul> \|<br>  \| `Payout`  \| <ul> <li>`PAYOUT_INITIATED`</li> <li>`PAYOUT_COMPLETED`</li> <li>`PAYOUT_FAILED`</li> </ul> \|<br>  \| `Dispute`  \| <ul> <li>`DISPUTE_ACTION_REQUIRED`</li> <li>`DISPUTE_UNDER_REVIEW`</li> <li>`DISPUTE_WON`</li> <li>`DISPUTE_LOST`</li></ul> \||
|subscription_id|string(uuid)|true|none|The ID of the subscription the event is related to.|
|external_reference|string|false|none|The information sent in the `external_reference` field of the [Create a subscription](https://developer.revolut.com/docs/api/merchant#create-subscription) request.|

#### Enumerated Values

|Property|Value|
|---|---|
|event|ORDER_COMPLETED|
|event|ORDER_AUTHORISED|
|event|ORDER_CANCELLED|
|event|ORDER_FAILED|
|event|ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED|
|event|ORDER_INCREMENTAL_AUTHORISATION_DECLINED|
|event|ORDER_INCREMENTAL_AUTHORISATION_FAILED|
|event|ORDER_PAYMENT_AUTHENTICATION_CHALLENGED|
|event|ORDER_PAYMENT_AUTHENTICATED|
|event|ORDER_PAYMENT_AUTHORISATION_STARTED|
|event|ORDER_PAYMENT_DECLINED|
|event|ORDER_PAYMENT_FAILED|
|event|SUBSCRIPTION_INITIATED|
|event|SUBSCRIPTION_FINISHED|
|event|SUBSCRIPTION_CANCELLED|
|event|SUBSCRIPTION_OVERDUE|
|event|PAYOUT_INITIATED|
|event|PAYOUT_COMPLETED|
|event|PAYOUT_FAILED|
|event|DISPUTE_ACTION_REQUIRED|
|event|DISPUTE_UNDER_REVIEW|
|event|DISPUTE_WON|
|event|DISPUTE_LOST|

<h2 id="tocS_Webhook-Payout-Event">Webhook-Payout-Event</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-payout-event"></a>
<a id="schema_Webhook-Payout-Event"></a>
<a id="tocSwebhook-payout-event"></a>
<a id="tocswebhook-payout-event"></a>

```json
{
  "event": "ORDER_COMPLETED",
  "payout_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

A webhook event payload for payout-related events, including the payout ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|[Webhook-Callback-Event](#schemawebhook-callback-event)|true|none|The event type of the webhook notification that's sent by Revolut to your webhook URL.<br><br>Each event is related to status changes of a specific object in the Merchant API:<br><br>  \| Object \| Event types \|<br>  \| --------- \| ----------- \|<br>  \| `Order`   \| <ul> <li>`ORDER_COMPLETED`</li> <li>`ORDER_AUTHORISED`</li> <li>`ORDER_CANCELLED`</li> <li>`ORDER_FAILED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_DECLINED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_FAILED`</li> </ul> \|<br>  \| `Payment` \| <ul> <li>`ORDER_PAYMENT_AUTHENTICATION_CHALLENGED`</li> <li>`ORDER_PAYMENT_AUTHENTICATED`</li> <li>`ORDER_PAYMENT_AUTHORISATION_STARTED`</li> <li>`ORDER_PAYMENT_DECLINED`</li> <li>`ORDER_PAYMENT_FAILED`</li> </ul> \|<br>  \| `Subscription`  \| <ul> <li>`SUBSCRIPTION_INITIATED`</li> <li>`SUBSCRIPTION_FINISHED`</li> <li>`SUBSCRIPTION_CANCELLED`</li> <li>`SUBSCRIPTION_OVERDUE`</li></ul> \|<br>  \| `Payout`  \| <ul> <li>`PAYOUT_INITIATED`</li> <li>`PAYOUT_COMPLETED`</li> <li>`PAYOUT_FAILED`</li> </ul> \|<br>  \| `Dispute`  \| <ul> <li>`DISPUTE_ACTION_REQUIRED`</li> <li>`DISPUTE_UNDER_REVIEW`</li> <li>`DISPUTE_WON`</li> <li>`DISPUTE_LOST`</li></ul> \||
|payout_id|string(uuid)|true|none|The ID of the payout the event is related to.|

#### Enumerated Values

|Property|Value|
|---|---|
|event|ORDER_COMPLETED|
|event|ORDER_AUTHORISED|
|event|ORDER_CANCELLED|
|event|ORDER_FAILED|
|event|ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED|
|event|ORDER_INCREMENTAL_AUTHORISATION_DECLINED|
|event|ORDER_INCREMENTAL_AUTHORISATION_FAILED|
|event|ORDER_PAYMENT_AUTHENTICATION_CHALLENGED|
|event|ORDER_PAYMENT_AUTHENTICATED|
|event|ORDER_PAYMENT_AUTHORISATION_STARTED|
|event|ORDER_PAYMENT_DECLINED|
|event|ORDER_PAYMENT_FAILED|
|event|SUBSCRIPTION_INITIATED|
|event|SUBSCRIPTION_FINISHED|
|event|SUBSCRIPTION_CANCELLED|
|event|SUBSCRIPTION_OVERDUE|
|event|PAYOUT_INITIATED|
|event|PAYOUT_COMPLETED|
|event|PAYOUT_FAILED|
|event|DISPUTE_ACTION_REQUIRED|
|event|DISPUTE_UNDER_REVIEW|
|event|DISPUTE_WON|
|event|DISPUTE_LOST|

<h2 id="tocS_Webhook-Dispute-Event">Webhook-Dispute-Event</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-dispute-event"></a>
<a id="schema_Webhook-Dispute-Event"></a>
<a id="tocSwebhook-dispute-event"></a>
<a id="tocswebhook-dispute-event"></a>

```json
{
  "event": "ORDER_COMPLETED",
  "dispute_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

A webhook event payload for dispute-related events, including the dispute ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|[Webhook-Callback-Event](#schemawebhook-callback-event)|true|none|The event type of the webhook notification that's sent by Revolut to your webhook URL.<br><br>Each event is related to status changes of a specific object in the Merchant API:<br><br>  \| Object \| Event types \|<br>  \| --------- \| ----------- \|<br>  \| `Order`   \| <ul> <li>`ORDER_COMPLETED`</li> <li>`ORDER_AUTHORISED`</li> <li>`ORDER_CANCELLED`</li> <li>`ORDER_FAILED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_DECLINED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_FAILED`</li> </ul> \|<br>  \| `Payment` \| <ul> <li>`ORDER_PAYMENT_AUTHENTICATION_CHALLENGED`</li> <li>`ORDER_PAYMENT_AUTHENTICATED`</li> <li>`ORDER_PAYMENT_AUTHORISATION_STARTED`</li> <li>`ORDER_PAYMENT_DECLINED`</li> <li>`ORDER_PAYMENT_FAILED`</li> </ul> \|<br>  \| `Subscription`  \| <ul> <li>`SUBSCRIPTION_INITIATED`</li> <li>`SUBSCRIPTION_FINISHED`</li> <li>`SUBSCRIPTION_CANCELLED`</li> <li>`SUBSCRIPTION_OVERDUE`</li></ul> \|<br>  \| `Payout`  \| <ul> <li>`PAYOUT_INITIATED`</li> <li>`PAYOUT_COMPLETED`</li> <li>`PAYOUT_FAILED`</li> </ul> \|<br>  \| `Dispute`  \| <ul> <li>`DISPUTE_ACTION_REQUIRED`</li> <li>`DISPUTE_UNDER_REVIEW`</li> <li>`DISPUTE_WON`</li> <li>`DISPUTE_LOST`</li></ul> \||
|dispute_id|string(uuid)|true|none|The ID of the dispute the event is related to.|

#### Enumerated Values

|Property|Value|
|---|---|
|event|ORDER_COMPLETED|
|event|ORDER_AUTHORISED|
|event|ORDER_CANCELLED|
|event|ORDER_FAILED|
|event|ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED|
|event|ORDER_INCREMENTAL_AUTHORISATION_DECLINED|
|event|ORDER_INCREMENTAL_AUTHORISATION_FAILED|
|event|ORDER_PAYMENT_AUTHENTICATION_CHALLENGED|
|event|ORDER_PAYMENT_AUTHENTICATED|
|event|ORDER_PAYMENT_AUTHORISATION_STARTED|
|event|ORDER_PAYMENT_DECLINED|
|event|ORDER_PAYMENT_FAILED|
|event|SUBSCRIPTION_INITIATED|
|event|SUBSCRIPTION_FINISHED|
|event|SUBSCRIPTION_CANCELLED|
|event|SUBSCRIPTION_OVERDUE|
|event|PAYOUT_INITIATED|
|event|PAYOUT_COMPLETED|
|event|PAYOUT_FAILED|
|event|DISPUTE_ACTION_REQUIRED|
|event|DISPUTE_UNDER_REVIEW|
|event|DISPUTE_WON|
|event|DISPUTE_LOST|
