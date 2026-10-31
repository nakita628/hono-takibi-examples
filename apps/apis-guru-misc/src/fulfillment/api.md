<h1 id="fulfillmentcom-apiv2">Fulfillment.com APIv2 v2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Welcome to our current iteration of our REST API. While we encourage you to upgrade to v2.0 we will continue support for our [SOAP API](https://github.com/fulfillment/soap-integration).

# Versioning

The Fulfillment.com (FDC) REST API is version controlled and backwards compatible. We have many future APIs scheduled for publication within our v2.0 spec so please be prepared for us to add data nodes in our responses, however, we will not remove knowledge from previously published APIs.

#### A Current Response

```javascript
{
  id: 123
}
```

#### A Potential Future Response

```javascript
{
  id: 123,
  reason: "More Knowledge"
}
```

# Getting Started

We use OAuth v2.0 to authenticate clients, you can choose [implicit](https://oauth.net/2/grant-types/implicit/) or [password](https://oauth.net/2/grant-types/password/) grant type. To obtain an OAuth `client_id` and `client_secret` contact your account executive.

**Tip**: Generate an additional login and use those credentials for your integration so that changes are accredited to that "user".

You are now ready to make requests to our other APIs by filling your `Authorization` header with `Bearer {access_token}`.

## Perpetuating Access

Perpetuating access to FDC without storing your password locally can be achieved using the `refresh_token` returned by [POST /oauth/access_token](#operation/generateToken).

A simple concept to achieve this is outlined below.

1. Your application/script will ask you for your `username` and `password`, your `client_id` and `client_secret` will be accessible via a DB or ENV.
2. [Request an access_token](#operation/generateToken)
  + Your function should be capable of formatting your request for both a `grant_type` of \"password\" (step 1) and \"refresh_token\" (step 4).
3. Store the `access_token` and `refresh_token` so future requests can skip step 1
4. When the `access_token` expires request anew using your `refresh_token`, replace both tokens in local storage.

+ If this fails you will have to revert to step 1.

Alternatively if you choose for your application/script to have access to your `username` and `password` you can skip step 4.

In all scenarios we recommend storing all credentials outside your codebase.

## Date Time Definitions

We will report all date-time stamps using the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. When using listing API's where fromDate and toDate are available note that both dates are inclusive while requiring the fromDate to be before or at the toDate.

### The Fulfillment Process

Many steps are required to fulfill your order we report back to you three fundamental milestones inside the orders model.

* `recordedOn` When we received your order. This will never change.

* `dispatchDate` When the current iteration of your order was scheduled for fulfillment. This may change however it is an indicator that the physical process of fulfillment has begun and a tracking number has been **assigned** to your order. The tracking number **MAY CHANGE**. You will not be able to cancel an order once it has been dispatched. If you need to recall an order that has been dispatched please contact your account executive.

* `departDate` When we recorded your order passing our final inspection and placed with the carrier. At this point it is **safe to inform the consignee** of the tracking number as it will not change.

## Evaluating Error Responses

We currently return two different error models, with and without context. All errors will include a `message` node while errors with `context` will include additional information designed to save you time when encountering highly probable errors. For example, when you send us a request to create a duplicate order, we will reject your request and the context will include the FDC order `id` so that you may record it for your records.

### Without Context

New order with missing required fields.

| Header | Response |
| ------ | -------- |
| Status | `400 Bad Request` |

```javascript
{    
  "message": "Invalid request body"
}
```

### With Context

New order with duplicate `merchantOrderId`.

| Header | Response |
| ------ | -------- |
| Status | `409 Conflict` |

```javascript
{
  "message": "Duplicate Order",
  "context": {
    "id": 123
  }
}
```

## Status Codes

Codes are a concatenation of State, Stage, and Detail.

`^([0-9]{2})([0-9]{2})([0-9]{2})$`

| Code | State              | Stage    | Detail         |
| ---- | ------------------ | -------- | -------------- |
| 010101 | Processing Order | Recieved | Customer Order |
| 010102 | Processing Order | Recieved | Recieved |
| 010201 | Processing Order | Approved | |
| 010301 | Processing Order | Hold | Merchant Stock |
| 010302 | Processing Order | Hold | Merchant Funds |
| 010303 | Processing Order | Hold | For Merchant |
| 010304 | Processing Order | Hold | Oversized Shipment |
| 010305 | Processing Order | Hold | Invalid Parent Order |
| 010306 | Processing Order | Hold | Invalid Address |
| 010307 | Processing Order | Hold | By Admin |
| 010401 | Processing Order | Address Problem | Incomplete Address |
| 010402 | Processing Order | Address Problem | Invalid Locality |
| 010403 | Processing Order | Address Problem | Invalid Region |
| 010404 | Processing Order | Address Problem | Address Not Found |
| 010405 | Processing Order | Address Problem | Many Addresses Found |
| 010406 | Processing Order | Address Problem | Invalid Postal Code |
| 010407 | Processing Order | Address Problem | Country Not Mapped |
| 010408 | Processing Order | Address Problem | Invalid Recipient Name |
| 010409 | Processing Order | Address Problem | Bad UK Address |
| 010410 | Processing Order | Address Problem | Invalid Address Line 1 or 2 |
| 010501 | Processing Order | Sku Problem | Invalid SKU |
| 010501 | Processing Order | Sku Problem | Child Order has Invalid SKUs |
| 010601 | Processing Order | Facility Problem | Facility Not Mapped |
| 010701 | Processing Order | Ship Method Problem | Unmapped Ship Method |
| 010702 | Processing Order | Ship Method Problem | Unmapped Ship Cost |
| 010703 | Processing Order | Ship Method Problem | Missing Ship Method |
| 010704 | Processing Order | Ship Method Problem | Invalid Ship Method |
| 010705 | Processing Order | Ship Method Problem | Order Weight Outside of Ship Method Weight |
| 010801 | Processing Order | Inventory Problem | Insufficient Inventory In Facility |
| 010802 | Processing Order | Inventory Problem | Issue Encountered During Inventory Adjustment |
| 010901 | Processing Order | Released To WMS | Released |
| 020101 | Fulfillment In Progress | Postage Problem | Address Issue |
| 020102 | Fulfillment In Progress | Postage Problem | Postage OK, OMS Issue Occurred |
| 020103 | Fulfillment In Progress | Postage Problem | Postage Void Failed |
| 020201 | Fulfillment In Progress | Postage Acquired | |
| 020301 | Fulfillment In Progress | Postage Voided | Postage Void Failed Gracefully |
| 020301 | Fulfillment In Progress | Hold | Departure Hold Requested |
| 020401 | Fulfillment In Progress | 4PL Processing | |
| 020501 | Fulfillment In Progress | 4PL Problem | Order is Proccessable, Postage Issue Occurred |
| 020601 | Fulfillment In Progress | Label Printed | |
| 020701 | Fulfillment In Progress | Shipment Cubed | |
| 020801 | Fulfillment In Progress | Picking Inventory | |
| 020901 | Fulfillment In Progress | Label Print Verified | |
| 021001 | Fulfillment In Progress | Passed Final Inspection | |
| 030101 | Shipped | Fulfilled By 4PL | |
| 030102 | Shipped | Fulfilled By 4PL | Successfully Fulfilled, OMS Encountered Issue During Processing |
| 030201 | Shipped | Fulfilled By FDC | |
| 040101 | Returned | Returned | |
| 050101 | Cancelled | Cancelled | |
| 060101 | Test | Test | Test |

Base URLs:

* <a href="https://api.fulfillment.com/v2">https://api.fulfillment.com/v2</a> - Production

<a href="https://fulfillment.github.io/api/terms/">Terms of service</a>
Email: <a href="mailto:dev@fulfillment.com">Fulfillment.com</a> 
Web: <a href="https://fulfillment.com">Fulfillment.com</a> 

# Authentication

* API Key (apiKey)
    - Parameter Name: **x-api-key**, in: header.

- oAuth2 authentication.

    - Flow: implicit
    - Authorization URL = [https://api.fulfillment.com/v2/oauth/authorize](https://api.fulfillment.com/v2/oauth/authorize)

|Scope|Scope Description|
|---|---|
|oms|read & write access|

    - Flow: password
    - Token URL = [https://api.fulfillment.com/v2/oauth/access_token](https://api.fulfillment.com/v2/oauth/access_token)
    - Refresh URL = [https://api.fulfillment.com/v2/oauth/access_token](https://api.fulfillment.com/v2/oauth/access_token)

|Scope|Scope Description|
|---|---|
|oms|read & write access|

<h1 id="fulfillmentcom-apiv2-auth">Auth</h1>

Please note that in keeping with the OAuth standard, parameters are underscored however all other API parameters are camelCase.

## Generate an Access Token

<a id="opIdpost-oauth-access_token"></a>

> Code samples

```bash
curl https://example.com/oauth/access_token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "password": "string",
    "username": "string",
    "client_id": "string",
    "client_secret": "string",
    "grant_type": "password",
    "scope": "oms"
  }'
```

`POST /oauth/access_token`

By default tokens are valid for 7 days while refresh tokens are valid for 30 days. If your `grant_type` is "password" include the `username` and `password`, if however your `grant_type` is "refresh_token" the username/password are not required, instead set the `refresh_token`

<a href="#section/Getting-Started/Perpetuating-Access">More Information on Refresh Tokens</a>

> Body parameter

```json
{
  "password": "string",
  "username": "string",
  "client_id": "string",
  "client_secret": "string",
  "grant_type": "password",
  "scope": "oms"
}
```

<h3 id="generate-an-access-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Get an access token|
|» *oneOf*|body|object|false|none|
|» password|body|string|true|none|
|» username|body|string|true|none|
|» client_id|body|string|true|Id and secret provided by FDC|
|» client_secret|body|string|true|none|
|» grant_type|body|string|true|Indicates how you're authenticating your request|
|» scope|body|string|true|Currently limited to Order Management System|
|» *oneOf*|body|object|false|none|
|» refresh_token|body|string|true|You may request future tokens with the `refresh_token` from your previous `/oauth/access_token` request|
|» client_id|body|string|true|Id and secret provided by FDC|
|» client_secret|body|string|true|none|
|» grant_type|body|string|true|Indicates how you're authenticating your request|
|» scope|body|string|true|Currently limited to Order Management System|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» grant_type|password|
|» grant_type|refresh_token|
|» scope|oms|
|» grant_type|password|
|» grant_type|refresh_token|
|» scope|oms|

> Example responses

> 200 Response

```json
{
  "access_token": "string",
  "expires_in": 0,
  "refresh_token": "string",
  "token_type": "Bearer"
}
```

> 401 Response

```json
{
  "message": "string"
}
```

<h3 id="generate-an-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Authorized|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="generate-an-access-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|none|
|expires_in|integer|false|none|none|
|refresh_token|string|false|none|none|
|token_type|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="fulfillmentcom-apiv2-orders">Orders</h1>

Creating, viewing, and canceling orders.

## List of Orders

<a id="opIdget-orders"></a>

> Code samples

```bash
curl 'https://example.com/orders?fromDate=string&toDate=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /orders`

Retrieve many orders at once

<h3 id="list-of-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromDate|query|string|true|Date-time in ISO 8601 format for selecting orders after, or at, the specified time|
|toDate|query|string|true|Date-time in ISO 8601 format for selecting orders before, or at, the specified time|
|merchantIds|query|[integer]|false|A CSV of merchant id, '123' or '1,2,3'|
|warehouseIds|query|[integer]|false|A CSV of warehouse id, '123' or '1,2,3'|
|page|query|integer|false|A multiplier of the number of items (limit parameter) to skip before returning results|
|limit|query|integer|false|The numbers of items to return|
|hydrate|query|[string]|false|Adds additional information to the response, uses a CSV format for multiple values.'|

#### Enumerated Values

|Parameter|Value|
|---|---|
|hydrate|integrator|
|hydrate|lineItems|
|hydrate|trackingNumbers.carrier|

> Example responses

> 200 Response

```json
{
  "currentStatus": {
    "createdBy": {
      "id": 0
    },
    "date": "1970-01-01T00:00:00Z",
    "id": 0,
    "reason": "string",
    "status": {
      "actionRequiredBy": {
        "id": 0,
        "name": "string"
      },
      "code": "string",
      "detail": "string",
      "detailCode": "string",
      "id": 0,
      "isClosed": true,
      "name": "string",
      "reason": "string",
      "stage": {
        "code": "string",
        "name": "string"
      },
      "state": {
        "code": "string",
        "name": "string"
      }
    }
  },
  "departDate": "1970-01-01T00:00:00Z",
  "dispatchDate": "1970-01-01T00:00:00Z",
  "id": 0,
  "merchant": {
    "id": 0,
    "name": "string"
  },
  "merchantOrderId": "string",
  "merchantShippingMethod": "string",
  "originalConsignee": {
    "address1": "string",
    "address2": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "companyName": "string",
    "country": "string",
    "email": "string",
    "firstName": "string",
    "id": 0,
    "iso": {
      "id": 0,
      "iso2": "string",
      "name": "string"
    },
    "lastName": "string",
    "phone": "string",
    "postalCode": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": 0
    }
  },
  "parentOrder": {
    "id": 0
  },
  "purchaseOrderNum": "string",
  "recordedOn": "1970-01-01T00:00:00Z",
  "trackingNumbers": [
    {
      "barcodeScanValue": "string",
      "carrier": {
        "id": 0
      },
      "value": "string"
    }
  ],
  "validatedConsignee": {
    "address1": "string",
    "address2": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "companyName": "string",
    "country": "string",
    "email": "string",
    "firstName": "string",
    "id": 0,
    "iso": {
      "id": 0,
      "iso2": "string",
      "name": "string"
    },
    "lastName": "string",
    "phone": "string",
    "postalCode": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": 0
    }
  },
  "warehouse": {
    "id": 0
  }
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="list-of-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|404|Not Found|No Orders Found|Inline|

<h3 id="list-of-orders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|currentStatus|object|true|none|none|
|» createdBy|object|false|none|none|
|» » id|integer|true|none|none|
|» date|string(date-time)|false|none|DateTime of Status Event|
|» id|integer|true|none|none|
|» reason|string|false|none|Explanation for status|
|» status|object|false|none|none|
|» » actionRequiredBy|object|false|none|Responsibility for resolving this issue|
|» » » id|integer|false|none|none|
|» » » name|string|false|none|Human readable description of responsible party to resolve the issue|
|» » code|string|true|none|Code, see [status codes](#section/Getting-Started/Status-Codes)|
|» » detail|string|false|none|none|
|» » detailCode|string|true|none|none|
|» » id|integer|false|none|Depricated, use code instead|
|» » isClosed|boolean|false|none|Depricated, does this status event close the order|
|» » name|string|false|none|Depricated, use stage/state instead|
|» » reason|string|false|none|Depricated|
|» » stage|object|true|none|none|
|» » » code|string|false|none|none|
|» » » name|string|false|none|none|
|» » state|object|true|none|none|
|» » » code|string|false|none|none|
|» » » name|string|false|none|none|
|departDate|string(date-time)|false|none|DateTime order departed an FDC warehouse|
|dispatchDate|string(date-time)|false|none|DateTime order was dispatched for fulfillment by FDC|
|id|integer|true|none|FDC ID for this order|
|merchant|object|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|Merchant Company Name|
|merchantOrderId|string|true|none|Merchant provided ID|
|merchantShippingMethod|string|true|none|Requested ship method|
|originalConsignee|object|true|none|none|
|» address1|string|true|none|none|
|» address2|string|false|none|none|
|» addressLocality|string|true|none|City|
|» addressRegion|string|true|none|Province / State|
|» companyName|string|false|none|none|
|» country|string|true|none|Ideally provide the two character ISO code|
|» email|string|false|none|none|
|» firstName|string|true|none|none|
|» id|integer|true|none|none|
|» iso|object|false|none|none|
|» » id|integer|false|none|none|
|» » iso2|string|false|none|Two character ISO code|
|» » name|string|false|none|Country Name|
|» lastName|string|true|none|none|
|» phone|string|false|none|none|
|» postalCode|string|true|none|Postal Code / Zip|
|» updatedAt|string(date-time)|false|none|none|
|» updatedBy|object|false|none|none|
|» » id|integer|true|none|none|
|parentOrder|object|false|none|none|
|» id|integer|false|none|Reference to parent `id` if order was grouped|
|purchaseOrderNum|string|false|none|Merchant provided PO#|
|recordedOn|string(date-time)|true|none|DateTime order was recorded by FDC|
|trackingNumbers|[object]|false|none|none|
|» barcodeScanValue|string|false|none|**Deprecated.** The computer readable alternative to the human readable|
|» carrier|object|false|none|none|
|» » id|integer|true|none|none|
|» value|string|false|none|The human readable tracking number recipients (consignee) expect|
|validatedConsignee|object|true|none|none|
|» address1|string|true|none|none|
|» address2|string|false|none|none|
|» addressLocality|string|true|none|City|
|» addressRegion|string|true|none|Province / State|
|» companyName|string|false|none|none|
|» country|string|true|none|Ideally provide the two character ISO code|
|» email|string|false|none|none|
|» firstName|string|true|none|none|
|» id|integer|true|none|none|
|» iso|object|false|none|none|
|» » id|integer|false|none|none|
|» » iso2|string|false|none|Two character ISO code|
|» » name|string|false|none|Country Name|
|» lastName|string|true|none|none|
|» phone|string|false|none|none|
|» postalCode|string|true|none|Postal Code / Zip|
|» updatedAt|string(date-time)|false|none|none|
|» updatedBy|object|false|none|none|
|» » id|integer|true|none|none|
|warehouse|object|false|none|none|
|» id|integer|true|none|none|
|*oneOf*|object|false|none|Requires hydrate to be set in the request and the corresponding node will be filled.|
|currentStatus|object|true|none|none|
|» createdBy|object|false|none|none|
|» » id|integer|true|none|none|
|» date|string(date-time)|false|none|DateTime of Status Event|
|» id|integer|true|none|none|
|» reason|string|false|none|Explanation for status|
|» status|object|false|none|none|
|» » actionRequiredBy|object|false|none|Responsibility for resolving this issue|
|» » » id|integer|false|none|none|
|» » » name|string|false|none|Human readable description of responsible party to resolve the issue|
|» » code|string|true|none|Code, see [status codes](#section/Getting-Started/Status-Codes)|
|» » detail|string|false|none|none|
|» » detailCode|string|true|none|none|
|» » id|integer|false|none|Depricated, use code instead|
|» » isClosed|boolean|false|none|Depricated, does this status event close the order|
|» » name|string|false|none|Depricated, use stage/state instead|
|» » reason|string|false|none|Depricated|
|» » stage|object|true|none|none|
|» » » code|string|false|none|none|
|» » » name|string|false|none|none|
|» » state|object|true|none|none|
|» » » code|string|false|none|none|
|» » » name|string|false|none|none|
|departDate|string(date-time)|false|none|DateTime order departed an FDC warehouse|
|dispatchDate|string(date-time)|false|none|DateTime order was dispatched for fulfillment by FDC|
|id|integer|true|none|FDC ID for this order|
|merchant|object|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|Merchant Company Name|
|merchantOrderId|string|true|none|Merchant provided ID|
|merchantShippingMethod|string|true|none|Requested ship method|
|originalConsignee|object|true|none|none|
|» address1|string|true|none|none|
|» address2|string|false|none|none|
|» addressLocality|string|true|none|City|
|» addressRegion|string|true|none|Province / State|
|» companyName|string|false|none|none|
|» country|string|true|none|Ideally provide the two character ISO code|
|» email|string|false|none|none|
|» firstName|string|true|none|none|
|» id|integer|true|none|none|
|» iso|object|false|none|none|
|» » id|integer|false|none|none|
|» » iso2|string|false|none|Two character ISO code|
|» » name|string|false|none|Country Name|
|» lastName|string|true|none|none|
|» phone|string|false|none|none|
|» postalCode|string|true|none|Postal Code / Zip|
|» updatedAt|string(date-time)|false|none|none|
|» updatedBy|object|false|none|none|
|» » id|integer|true|none|none|
|parentOrder|object|false|none|none|
|» id|integer|false|none|Reference to parent `id` if order was grouped|
|purchaseOrderNum|string|false|none|Merchant provided PO#|
|recordedOn|string(date-time)|true|none|DateTime order was recorded by FDC|
|trackingNumbers|[object]|false|none|none|
|» barcodeScanValue|string|false|none|**Deprecated.** The computer readable alternative to the human readable|
|» carrier|object|false|none|none|
|» » id|integer|true|none|none|
|» value|string|false|none|The human readable tracking number recipients (consignee) expect|
|validatedConsignee|object|true|none|none|
|» address1|string|true|none|none|
|» address2|string|false|none|none|
|» addressLocality|string|true|none|City|
|» addressRegion|string|true|none|Province / State|
|» companyName|string|false|none|none|
|» country|string|true|none|Ideally provide the two character ISO code|
|» email|string|false|none|none|
|» firstName|string|true|none|none|
|» id|integer|true|none|none|
|» iso|object|false|none|none|
|» » id|integer|false|none|none|
|» » iso2|string|false|none|Two character ISO code|
|» » name|string|false|none|Country Name|
|» lastName|string|true|none|none|
|» phone|string|false|none|none|
|» postalCode|string|true|none|Postal Code / Zip|
|» updatedAt|string(date-time)|false|none|none|
|» updatedBy|object|false|none|none|
|» » id|integer|true|none|none|
|warehouse|object|false|none|none|
|» id|integer|true|none|none|
|integrator|string|false|none|none|
|lineItems|[object]|false|none|none|
|» id|integer|false|none|none|
|» inventoryDetails|[object]|false|none|none|
|» » expirationDate|string(date)|false|none|none|
|» » lotNum|string|false|none|none|
|» » quantity|integer|false|none|none|
|» » serialNum|string|false|none|none|
|» lineDetails|object|false|none|none|
|» » description|string|false|none|none|
|» » externalSku|string|false|none|none|
|» » id|integer|false|none|none|
|» » name|string|false|none|none|
|» » totalQuantity|integer|false|none|none|
|» requestedSkuData|object|false|none|none|
|» » declaredValue|string|false|none|none|
|» » id|integer|false|none|none|
|» » quantity|integer|false|none|none|
|» » sku|string|false|none|none|
|trackingNumbers|[object]|false|none|none|
|» carrier|object|false|none|none|
|» » canReprintPostage|boolean|false|none|none|
|» » enabled|boolean|false|none|none|
|» » id|integer|true|none|none|
|» » includePeripherals|boolean|false|none|none|
|» » internalRatesOnly|boolean|false|none|none|
|» » name|string|true|none|none|
|» » requiresDimensions|boolean|false|none|none|
|» » symbol|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
fdcAuth ( Scopes: oms )
</aside>

## New Order

<a id="opIdpost-orders"></a>

> Code samples

```bash
curl https://example.com/orders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "integrator": "1ShoppingCart",
    "items": [
      {
        "declaredValue": "129.99",
        "quantity": 1,
        "sku": "string"
      }
    ],
    "merchantId": 0,
    "merchantOrderId": "string",
    "notes": "string",
    "recipient": {
      "address1": "string",
      "address2": "string",
      "addressLocality": "string",
      "addressRegion": "string",
      "companyName": "string",
      "country": "string",
      "email": "string",
      "firstName": "string",
      "lastName": "string",
      "phone": "string",
      "postalCode": "string"
    },
    "shippingMethod": "Ground",
    "warehouse": {
      "id": 0
    }
  }'
```

`POST /orders`

Error Notes&#58;
* When `409 Conflict` is a 'Duplicate Order' the `context` will include the FDC `id`, see samples.


> Body parameter

```json
{
  "integrator": "1ShoppingCart",
  "items": [
    {
      "declaredValue": "129.99",
      "quantity": 1,
      "sku": "string"
    }
  ],
  "merchantId": 0,
  "merchantOrderId": "string",
  "notes": "string",
  "recipient": {
    "address1": "string",
    "address2": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "companyName": "string",
    "country": "string",
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "phone": "string",
    "postalCode": "string"
  },
  "shippingMethod": "Ground",
  "warehouse": {
    "id": 0
  }
}
```

<h3 id="new-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|The order to create|
|» integrator|body|string|false|Use of this property requires special permission and must be discussed with your account executive; values are restricted while custom values need to be accepted by your AE.|
|» items|body|[object]|true|none|
|» » declaredValue|body|string(double)|true|Using USD, a per unit value of a single SKU. If your declaring a kit this is the sum total for a single kit. In both scenarios we will multiply the `declaredValue` against the `quantity` for customs declaration.|
|» » quantity|body|integer|true|none|
|» » sku|body|string|true|none|
|» merchantId|body|integer|false|Necessary if you have a multitenancy account, otherwise we will associate the order with your account|
|» merchantOrderId|body|string|true|Unique ID provided by the merchant|
|» notes|body|string|false|none|
|» recipient|body|object|true|none|
|» » address1|body|string|true|Address Line 1|
|» » address2|body|string|false|Address Line 2|
|» » addressLocality|body|string|true|City|
|» » addressRegion|body|string|true|Province / State|
|» » companyName|body|string|false|none|
|» » country|body|string|true|Country, for best results please provide the two character ISO code|
|» » email|body|string|true|Email, required for international shipments|
|» » firstName|body|string|true|none|
|» » lastName|body|string|true|none|
|» » phone|body|string|true|Phone number, required for international shipments|
|» » postalCode|body|string|false|Postal Code / Zip|
|» shippingMethod|body|string|true|Custom for you, it will be mapped to an actual method within the OMS UI|
|» warehouse|body|object|false|We automatically select a warehouse based on inventory availability, requested carrier and delivery schedule, and carrier cost. You may however override this process. Because this is not recommended please inform your AE prior to using so they may enable this feature.|
|» » id|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» integrator|1ShoppingCart|
|» integrator|3dCart|
|» integrator|AdobeBC|
|» integrator|AmazonAU|
|» integrator|AmazonEU|
|» integrator|AmazonNA|
|» integrator|BigCommerce|
|» integrator|BrandBoom|
|» integrator|BrightPearl|
|» integrator|BuyGoods|
|» integrator|Celery|
|» integrator|ChannelAdvisor|
|» integrator|Clickbank|
|» integrator|CommerceHub|
|» integrator|Custom|
|» integrator|Demandware|
|» integrator|Ebay|
|» integrator|Ecwid|
|» integrator|Etsy|
|» integrator|FoxyCart|
|» integrator|Goodsie|
|» integrator|Infusionsoft|
|» integrator|Konnektive|
|» integrator|LimeLight|
|» integrator|Linio|
|» integrator|Linnworks|
|» integrator|Magento|
|» integrator|Netsuite|
|» integrator|NewEgg|
|» integrator|Nexternal|
|» integrator|NuOrder|
|» integrator|Opencart|
|» integrator|OrderWave|
|» integrator|osCommerce1|
|» integrator|Overstock|
|» integrator|PayPal|
|» integrator|PrestaShop|
|» integrator|Pricefalls|
|» integrator|Quickbooks|
|» integrator|Rakuten|
|» integrator|Sears|
|» integrator|Sellbrite|
|» integrator|SellerCloud|
|» integrator|Shipstation|
|» integrator|Shopify|
|» integrator|Skubana|
|» integrator|SolidCommerce|
|» integrator|SparkPay|
|» integrator|SpreeCommerce|
|» integrator|spsCommerce|
|» integrator|StitchLabs|
|» integrator|StoneEdge|
|» integrator|TradeGecko|
|» integrator|UltraCart|
|» integrator|Volusion|
|» integrator|VTEX|
|» integrator|Walmart|
|» integrator|WooCommerce|
|» integrator|Yahoo|

> Example responses

> 201 Response

```json
{
  "currentStatus": {
    "createdBy": {
      "id": 0
    },
    "date": "1970-01-01T00:00:00Z",
    "id": 0,
    "reason": "string",
    "status": {
      "actionRequiredBy": {
        "id": 0,
        "name": "string"
      },
      "code": "string",
      "detail": "string",
      "detailCode": "string",
      "id": 0,
      "isClosed": true,
      "name": "string",
      "reason": "string",
      "stage": {
        "code": "string",
        "name": "string"
      },
      "state": {
        "code": "string",
        "name": "string"
      }
    }
  },
  "departDate": "1970-01-01T00:00:00Z",
  "dispatchDate": "1970-01-01T00:00:00Z",
  "id": 0,
  "merchant": {
    "id": 0,
    "name": "string"
  },
  "merchantOrderId": "string",
  "merchantShippingMethod": "string",
  "originalConsignee": {
    "address1": "string",
    "address2": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "companyName": "string",
    "country": "string",
    "email": "string",
    "firstName": "string",
    "id": 0,
    "iso": {
      "id": 0,
      "iso2": "string",
      "name": "string"
    },
    "lastName": "string",
    "phone": "string",
    "postalCode": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": 0
    }
  },
  "parentOrder": {
    "id": 0
  },
  "purchaseOrderNum": "string",
  "recordedOn": "1970-01-01T00:00:00Z",
  "trackingNumbers": [
    {
      "barcodeScanValue": "string",
      "carrier": {
        "id": 0
      },
      "value": "string"
    }
  ],
  "validatedConsignee": {
    "address1": "string",
    "address2": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "companyName": "string",
    "country": "string",
    "email": "string",
    "firstName": "string",
    "id": 0,
    "iso": {
      "id": 0,
      "iso2": "string",
      "name": "string"
    },
    "lastName": "string",
    "phone": "string",
    "postalCode": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": 0
    }
  },
  "warehouse": {
    "id": 0
  }
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 409 Response

```json
{
  "context": {
    "id": 123
  },
  "message": "Duplicate Order"
}
```

> 422 Response

```json
{
  "context": {
    "id": 123
  },
  "message": "Validation Failure"
}
```

<h3 id="new-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Order Created|Inline|
|400|Bad Request|Invalid order object|Inline|
|401|Unauthorized|You do not have permission to create orders|None|
|403|Forbidden|Forbidden|Inline|
|409|Conflict|Conflict|Inline|
|422|Unprocessable Entity|Validation Failure|Inline|

<h3 id="new-order-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentStatus|object|true|none|none|
|» createdBy|object|false|none|none|
|» » id|integer|true|none|none|
|» date|string(date-time)|false|none|DateTime of Status Event|
|» id|integer|true|none|none|
|» reason|string|false|none|Explanation for status|
|» status|object|false|none|none|
|» » actionRequiredBy|object|false|none|Responsibility for resolving this issue|
|» » » id|integer|false|none|none|
|» » » name|string|false|none|Human readable description of responsible party to resolve the issue|
|» » code|string|true|none|Code, see [status codes](#section/Getting-Started/Status-Codes)|
|» » detail|string|false|none|none|
|» » detailCode|string|true|none|none|
|» » id|integer|false|none|Depricated, use code instead|
|» » isClosed|boolean|false|none|Depricated, does this status event close the order|
|» » name|string|false|none|Depricated, use stage/state instead|
|» » reason|string|false|none|Depricated|
|» » stage|object|true|none|none|
|» » » code|string|false|none|none|
|» » » name|string|false|none|none|
|» » state|object|true|none|none|
|» » » code|string|false|none|none|
|» » » name|string|false|none|none|
|departDate|string(date-time)|false|none|DateTime order departed an FDC warehouse|
|dispatchDate|string(date-time)|false|none|DateTime order was dispatched for fulfillment by FDC|
|id|integer|true|none|FDC ID for this order|
|merchant|object|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|Merchant Company Name|
|merchantOrderId|string|true|none|Merchant provided ID|
|merchantShippingMethod|string|true|none|Requested ship method|
|originalConsignee|object|true|none|none|
|» address1|string|true|none|none|
|» address2|string|false|none|none|
|» addressLocality|string|true|none|City|
|» addressRegion|string|true|none|Province / State|
|» companyName|string|false|none|none|
|» country|string|true|none|Ideally provide the two character ISO code|
|» email|string|false|none|none|
|» firstName|string|true|none|none|
|» id|integer|true|none|none|
|» iso|object|false|none|none|
|» » id|integer|false|none|none|
|» » iso2|string|false|none|Two character ISO code|
|» » name|string|false|none|Country Name|
|» lastName|string|true|none|none|
|» phone|string|false|none|none|
|» postalCode|string|true|none|Postal Code / Zip|
|» updatedAt|string(date-time)|false|none|none|
|» updatedBy|object|false|none|none|
|» » id|integer|true|none|none|
|parentOrder|object|false|none|none|
|» id|integer|false|none|Reference to parent `id` if order was grouped|
|purchaseOrderNum|string|false|none|Merchant provided PO#|
|recordedOn|string(date-time)|true|none|DateTime order was recorded by FDC|
|trackingNumbers|[object]|false|none|none|
|» barcodeScanValue|string|false|none|**Deprecated.** The computer readable alternative to the human readable|
|» carrier|object|false|none|none|
|» » id|integer|true|none|none|
|» value|string|false|none|The human readable tracking number recipients (consignee) expect|
|validatedConsignee|object|true|none|none|
|» address1|string|true|none|none|
|» address2|string|false|none|none|
|» addressLocality|string|true|none|City|
|» addressRegion|string|true|none|Province / State|
|» companyName|string|false|none|none|
|» country|string|true|none|Ideally provide the two character ISO code|
|» email|string|false|none|none|
|» firstName|string|true|none|none|
|» id|integer|true|none|none|
|» iso|object|false|none|none|
|» » id|integer|false|none|none|
|» » iso2|string|false|none|Two character ISO code|
|» » name|string|false|none|Country Name|
|» lastName|string|true|none|none|
|» phone|string|false|none|none|
|» postalCode|string|true|none|Postal Code / Zip|
|» updatedAt|string(date-time)|false|none|none|
|» updatedBy|object|false|none|none|
|» » id|integer|true|none|none|
|warehouse|object|false|none|none|
|» id|integer|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[object]|false|none|none|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[object]|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
fdcAuth ( Scopes: oms )
</aside>

## Order Details

<a id="opIdgetOrder"></a>

> Code samples

```bash
curl https://example.com/orders/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /orders/{id}`

For the fastest results use the FDC provided `id` however you can use your `merchantOrderId` as the `id`.

<h3 id="order-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The FDC order Id|
|merchantId|query|integer|false|Providing your `merchantId` indicates the `id` is your `merchantOrderId`. Although it is not necessary to provide this it will speed up your results when using your `merchantOrderId` however it will slow your results when using the FDC provided `id`|
|hydrate|query|[string]|false|Adds additional information to the response, uses a CSV format for multiple values.'|

#### Enumerated Values

|Parameter|Value|
|---|---|
|hydrate|integrator|
|hydrate|lineItems|
|hydrate|trackingNumbers.carrier|

> Example responses

> 200 Response

```json
{
  "currentStatus": {
    "createdBy": {
      "id": 0
    },
    "date": "1970-01-01T00:00:00Z",
    "id": 0,
    "reason": "string",
    "status": {
      "actionRequiredBy": {
        "id": 0,
        "name": "string"
      },
      "code": "string",
      "detail": "string",
      "detailCode": "string",
      "id": 0,
      "isClosed": true,
      "name": "string",
      "reason": "string",
      "stage": {
        "code": "string",
        "name": "string"
      },
      "state": {
        "code": "string",
        "name": "string"
      }
    }
  },
  "departDate": "1970-01-01T00:00:00Z",
  "dispatchDate": "1970-01-01T00:00:00Z",
  "id": 0,
  "merchant": {
    "id": 0,
    "name": "string"
  },
  "merchantOrderId": "string",
  "merchantShippingMethod": "string",
  "originalConsignee": {
    "address1": "string",
    "address2": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "companyName": "string",
    "country": "string",
    "email": "string",
    "firstName": "string",
    "id": 0,
    "iso": {
      "id": 0,
      "iso2": "string",
      "name": "string"
    },
    "lastName": "string",
    "phone": "string",
    "postalCode": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": 0
    }
  },
  "parentOrder": {
    "id": 0
  },
  "purchaseOrderNum": "string",
  "recordedOn": "1970-01-01T00:00:00Z",
  "trackingNumbers": [
    {
      "barcodeScanValue": "string",
      "carrier": {
        "id": 0
      },
      "value": "string"
    }
  ],
  "validatedConsignee": {
    "address1": "string",
    "address2": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "companyName": "string",
    "country": "string",
    "email": "string",
    "firstName": "string",
    "id": 0,
    "iso": {
      "id": 0,
      "iso2": "string",
      "name": "string"
    },
    "lastName": "string",
    "phone": "string",
    "postalCode": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": 0
    }
  },
  "warehouse": {
    "id": 0
  }
}
```

<h3 id="order-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Order Found|Inline|
|404|Not Found|Order not found|None|

<h3 id="order-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|currentStatus|object|true|none|none|
|» createdBy|object|false|none|none|
|» » id|integer|true|none|none|
|» date|string(date-time)|false|none|DateTime of Status Event|
|» id|integer|true|none|none|
|» reason|string|false|none|Explanation for status|
|» status|object|false|none|none|
|» » actionRequiredBy|object|false|none|Responsibility for resolving this issue|
|» » » id|integer|false|none|none|
|» » » name|string|false|none|Human readable description of responsible party to resolve the issue|
|» » code|string|true|none|Code, see [status codes](#section/Getting-Started/Status-Codes)|
|» » detail|string|false|none|none|
|» » detailCode|string|true|none|none|
|» » id|integer|false|none|Depricated, use code instead|
|» » isClosed|boolean|false|none|Depricated, does this status event close the order|
|» » name|string|false|none|Depricated, use stage/state instead|
|» » reason|string|false|none|Depricated|
|» » stage|object|true|none|none|
|» » » code|string|false|none|none|
|» » » name|string|false|none|none|
|» » state|object|true|none|none|
|» » » code|string|false|none|none|
|» » » name|string|false|none|none|
|departDate|string(date-time)|false|none|DateTime order departed an FDC warehouse|
|dispatchDate|string(date-time)|false|none|DateTime order was dispatched for fulfillment by FDC|
|id|integer|true|none|FDC ID for this order|
|merchant|object|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|Merchant Company Name|
|merchantOrderId|string|true|none|Merchant provided ID|
|merchantShippingMethod|string|true|none|Requested ship method|
|originalConsignee|object|true|none|none|
|» address1|string|true|none|none|
|» address2|string|false|none|none|
|» addressLocality|string|true|none|City|
|» addressRegion|string|true|none|Province / State|
|» companyName|string|false|none|none|
|» country|string|true|none|Ideally provide the two character ISO code|
|» email|string|false|none|none|
|» firstName|string|true|none|none|
|» id|integer|true|none|none|
|» iso|object|false|none|none|
|» » id|integer|false|none|none|
|» » iso2|string|false|none|Two character ISO code|
|» » name|string|false|none|Country Name|
|» lastName|string|true|none|none|
|» phone|string|false|none|none|
|» postalCode|string|true|none|Postal Code / Zip|
|» updatedAt|string(date-time)|false|none|none|
|» updatedBy|object|false|none|none|
|» » id|integer|true|none|none|
|parentOrder|object|false|none|none|
|» id|integer|false|none|Reference to parent `id` if order was grouped|
|purchaseOrderNum|string|false|none|Merchant provided PO#|
|recordedOn|string(date-time)|true|none|DateTime order was recorded by FDC|
|trackingNumbers|[object]|false|none|none|
|» barcodeScanValue|string|false|none|**Deprecated.** The computer readable alternative to the human readable|
|» carrier|object|false|none|none|
|» » id|integer|true|none|none|
|» value|string|false|none|The human readable tracking number recipients (consignee) expect|
|validatedConsignee|object|true|none|none|
|» address1|string|true|none|none|
|» address2|string|false|none|none|
|» addressLocality|string|true|none|City|
|» addressRegion|string|true|none|Province / State|
|» companyName|string|false|none|none|
|» country|string|true|none|Ideally provide the two character ISO code|
|» email|string|false|none|none|
|» firstName|string|true|none|none|
|» id|integer|true|none|none|
|» iso|object|false|none|none|
|» » id|integer|false|none|none|
|» » iso2|string|false|none|Two character ISO code|
|» » name|string|false|none|Country Name|
|» lastName|string|true|none|none|
|» phone|string|false|none|none|
|» postalCode|string|true|none|Postal Code / Zip|
|» updatedAt|string(date-time)|false|none|none|
|» updatedBy|object|false|none|none|
|» » id|integer|true|none|none|
|warehouse|object|false|none|none|
|» id|integer|true|none|none|
|*oneOf*|object|false|none|Requires hydrate to be set in the request and the corresponding node will be filled.|
|currentStatus|object|true|none|none|
|» createdBy|object|false|none|none|
|» » id|integer|true|none|none|
|» date|string(date-time)|false|none|DateTime of Status Event|
|» id|integer|true|none|none|
|» reason|string|false|none|Explanation for status|
|» status|object|false|none|none|
|» » actionRequiredBy|object|false|none|Responsibility for resolving this issue|
|» » » id|integer|false|none|none|
|» » » name|string|false|none|Human readable description of responsible party to resolve the issue|
|» » code|string|true|none|Code, see [status codes](#section/Getting-Started/Status-Codes)|
|» » detail|string|false|none|none|
|» » detailCode|string|true|none|none|
|» » id|integer|false|none|Depricated, use code instead|
|» » isClosed|boolean|false|none|Depricated, does this status event close the order|
|» » name|string|false|none|Depricated, use stage/state instead|
|» » reason|string|false|none|Depricated|
|» » stage|object|true|none|none|
|» » » code|string|false|none|none|
|» » » name|string|false|none|none|
|» » state|object|true|none|none|
|» » » code|string|false|none|none|
|» » » name|string|false|none|none|
|departDate|string(date-time)|false|none|DateTime order departed an FDC warehouse|
|dispatchDate|string(date-time)|false|none|DateTime order was dispatched for fulfillment by FDC|
|id|integer|true|none|FDC ID for this order|
|merchant|object|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|Merchant Company Name|
|merchantOrderId|string|true|none|Merchant provided ID|
|merchantShippingMethod|string|true|none|Requested ship method|
|originalConsignee|object|true|none|none|
|» address1|string|true|none|none|
|» address2|string|false|none|none|
|» addressLocality|string|true|none|City|
|» addressRegion|string|true|none|Province / State|
|» companyName|string|false|none|none|
|» country|string|true|none|Ideally provide the two character ISO code|
|» email|string|false|none|none|
|» firstName|string|true|none|none|
|» id|integer|true|none|none|
|» iso|object|false|none|none|
|» » id|integer|false|none|none|
|» » iso2|string|false|none|Two character ISO code|
|» » name|string|false|none|Country Name|
|» lastName|string|true|none|none|
|» phone|string|false|none|none|
|» postalCode|string|true|none|Postal Code / Zip|
|» updatedAt|string(date-time)|false|none|none|
|» updatedBy|object|false|none|none|
|» » id|integer|true|none|none|
|parentOrder|object|false|none|none|
|» id|integer|false|none|Reference to parent `id` if order was grouped|
|purchaseOrderNum|string|false|none|Merchant provided PO#|
|recordedOn|string(date-time)|true|none|DateTime order was recorded by FDC|
|trackingNumbers|[object]|false|none|none|
|» barcodeScanValue|string|false|none|**Deprecated.** The computer readable alternative to the human readable|
|» carrier|object|false|none|none|
|» » id|integer|true|none|none|
|» value|string|false|none|The human readable tracking number recipients (consignee) expect|
|validatedConsignee|object|true|none|none|
|» address1|string|true|none|none|
|» address2|string|false|none|none|
|» addressLocality|string|true|none|City|
|» addressRegion|string|true|none|Province / State|
|» companyName|string|false|none|none|
|» country|string|true|none|Ideally provide the two character ISO code|
|» email|string|false|none|none|
|» firstName|string|true|none|none|
|» id|integer|true|none|none|
|» iso|object|false|none|none|
|» » id|integer|false|none|none|
|» » iso2|string|false|none|Two character ISO code|
|» » name|string|false|none|Country Name|
|» lastName|string|true|none|none|
|» phone|string|false|none|none|
|» postalCode|string|true|none|Postal Code / Zip|
|» updatedAt|string(date-time)|false|none|none|
|» updatedBy|object|false|none|none|
|» » id|integer|true|none|none|
|warehouse|object|false|none|none|
|» id|integer|true|none|none|
|integrator|string|false|none|none|
|lineItems|[object]|false|none|none|
|» id|integer|false|none|none|
|» inventoryDetails|[object]|false|none|none|
|» » expirationDate|string(date)|false|none|none|
|» » lotNum|string|false|none|none|
|» » quantity|integer|false|none|none|
|» » serialNum|string|false|none|none|
|» lineDetails|object|false|none|none|
|» » description|string|false|none|none|
|» » externalSku|string|false|none|none|
|» » id|integer|false|none|none|
|» » name|string|false|none|none|
|» » totalQuantity|integer|false|none|none|
|» requestedSkuData|object|false|none|none|
|» » declaredValue|string|false|none|none|
|» » id|integer|false|none|none|
|» » quantity|integer|false|none|none|
|» » sku|string|false|none|none|
|trackingNumbers|[object]|false|none|none|
|» carrier|object|false|none|none|
|» » canReprintPostage|boolean|false|none|none|
|» » enabled|boolean|false|none|none|
|» » id|integer|true|none|none|
|» » includePeripherals|boolean|false|none|none|
|» » internalRatesOnly|boolean|false|none|none|
|» » name|string|true|none|none|
|» » requiresDimensions|boolean|false|none|none|
|» » symbol|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
fdcAuth ( Scopes: oms )
</aside>

## Cancel an Order

<a id="opIddelete-orders-id"></a>

> Code samples

```bash
curl https://example.com/orders/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /orders/{id}`

Request an order is canceled to prevent shipment.

<h3 id="cancel-an-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|ID of order that needs to be canceled|

> Example responses

> 200 Response

```json
{
  "currentStatus": {
    "createdBy": {
      "id": 0
    },
    "date": "1970-01-01T00:00:00Z",
    "id": 0,
    "reason": "string",
    "status": {
      "actionRequiredBy": {
        "id": 0,
        "name": "string"
      },
      "code": "string",
      "detail": "string",
      "detailCode": "string",
      "id": 0,
      "isClosed": true,
      "name": "string",
      "reason": "string",
      "stage": {
        "code": "string",
        "name": "string"
      },
      "state": {
        "code": "string",
        "name": "string"
      }
    }
  },
  "departDate": "1970-01-01T00:00:00Z",
  "dispatchDate": "1970-01-01T00:00:00Z",
  "id": 0,
  "merchant": {
    "id": 0,
    "name": "string"
  },
  "merchantOrderId": "string",
  "merchantShippingMethod": "string",
  "originalConsignee": {
    "address1": "string",
    "address2": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "companyName": "string",
    "country": "string",
    "email": "string",
    "firstName": "string",
    "id": 0,
    "iso": {
      "id": 0,
      "iso2": "string",
      "name": "string"
    },
    "lastName": "string",
    "phone": "string",
    "postalCode": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": 0
    }
  },
  "parentOrder": {
    "id": 0
  },
  "purchaseOrderNum": "string",
  "recordedOn": "1970-01-01T00:00:00Z",
  "trackingNumbers": [
    {
      "barcodeScanValue": "string",
      "carrier": {
        "id": 0
      },
      "value": "string"
    }
  ],
  "validatedConsignee": {
    "address1": "string",
    "address2": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "companyName": "string",
    "country": "string",
    "email": "string",
    "firstName": "string",
    "id": 0,
    "iso": {
      "id": 0,
      "iso2": "string",
      "name": "string"
    },
    "lastName": "string",
    "phone": "string",
    "postalCode": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": 0
    }
  },
  "warehouse": {
    "id": 0
  }
}
```

> 405 Response

```json
{
  "message": "string"
}
```

<h3 id="cancel-an-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Your order was successfully canceled|Inline|
|404|Not Found|Order not found|None|
|405|Method Not Allowed|Could not cancel your order, perhaps it already shipped|Inline|

<h3 id="cancel-an-order-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentStatus|object|true|none|none|
|» createdBy|object|false|none|none|
|» » id|integer|true|none|none|
|» date|string(date-time)|false|none|DateTime of Status Event|
|» id|integer|true|none|none|
|» reason|string|false|none|Explanation for status|
|» status|object|false|none|none|
|» » actionRequiredBy|object|false|none|Responsibility for resolving this issue|
|» » » id|integer|false|none|none|
|» » » name|string|false|none|Human readable description of responsible party to resolve the issue|
|» » code|string|true|none|Code, see [status codes](#section/Getting-Started/Status-Codes)|
|» » detail|string|false|none|none|
|» » detailCode|string|true|none|none|
|» » id|integer|false|none|Depricated, use code instead|
|» » isClosed|boolean|false|none|Depricated, does this status event close the order|
|» » name|string|false|none|Depricated, use stage/state instead|
|» » reason|string|false|none|Depricated|
|» » stage|object|true|none|none|
|» » » code|string|false|none|none|
|» » » name|string|false|none|none|
|» » state|object|true|none|none|
|» » » code|string|false|none|none|
|» » » name|string|false|none|none|
|departDate|string(date-time)|false|none|DateTime order departed an FDC warehouse|
|dispatchDate|string(date-time)|false|none|DateTime order was dispatched for fulfillment by FDC|
|id|integer|true|none|FDC ID for this order|
|merchant|object|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|Merchant Company Name|
|merchantOrderId|string|true|none|Merchant provided ID|
|merchantShippingMethod|string|true|none|Requested ship method|
|originalConsignee|object|true|none|none|
|» address1|string|true|none|none|
|» address2|string|false|none|none|
|» addressLocality|string|true|none|City|
|» addressRegion|string|true|none|Province / State|
|» companyName|string|false|none|none|
|» country|string|true|none|Ideally provide the two character ISO code|
|» email|string|false|none|none|
|» firstName|string|true|none|none|
|» id|integer|true|none|none|
|» iso|object|false|none|none|
|» » id|integer|false|none|none|
|» » iso2|string|false|none|Two character ISO code|
|» » name|string|false|none|Country Name|
|» lastName|string|true|none|none|
|» phone|string|false|none|none|
|» postalCode|string|true|none|Postal Code / Zip|
|» updatedAt|string(date-time)|false|none|none|
|» updatedBy|object|false|none|none|
|» » id|integer|true|none|none|
|parentOrder|object|false|none|none|
|» id|integer|false|none|Reference to parent `id` if order was grouped|
|purchaseOrderNum|string|false|none|Merchant provided PO#|
|recordedOn|string(date-time)|true|none|DateTime order was recorded by FDC|
|trackingNumbers|[object]|false|none|none|
|» barcodeScanValue|string|false|none|**Deprecated.** The computer readable alternative to the human readable|
|» carrier|object|false|none|none|
|» » id|integer|true|none|none|
|» value|string|false|none|The human readable tracking number recipients (consignee) expect|
|validatedConsignee|object|true|none|none|
|» address1|string|true|none|none|
|» address2|string|false|none|none|
|» addressLocality|string|true|none|City|
|» addressRegion|string|true|none|Province / State|
|» companyName|string|false|none|none|
|» country|string|true|none|Ideally provide the two character ISO code|
|» email|string|false|none|none|
|» firstName|string|true|none|none|
|» id|integer|true|none|none|
|» iso|object|false|none|none|
|» » id|integer|false|none|none|
|» » iso2|string|false|none|Two character ISO code|
|» » name|string|false|none|Country Name|
|» lastName|string|true|none|none|
|» phone|string|false|none|none|
|» postalCode|string|true|none|Postal Code / Zip|
|» updatedAt|string(date-time)|false|none|none|
|» updatedBy|object|false|none|none|
|» » id|integer|true|none|none|
|warehouse|object|false|none|none|
|» id|integer|true|none|none|

Status Code **405**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
fdcAuth ( Scopes: oms )
</aside>

<h1 id="fulfillmentcom-apiv2-inventory">Inventory</h1>

## List of Item Inventories

<a id="opIdget-inventory"></a>

> Code samples

```bash
curl https://example.com/inventory \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /inventory`

Retrieve inventory for one or more items. This API requires elevated permissions, please speak to your success manager.

<h3 id="list-of-item-inventories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|A multiplier of the number of items (limit parameter) to skip before returning results|
|limit|query|integer|false|The numbers of items to return|
|merchantIds|query|[integer]|false|A CSV of merchant id, '123' or '1,2,3'|
|warehouseIds|query|[integer]|false|A CSV of warehouse id, '123' or '1,2,3'|
|externalSkuNames|query|[string]|false|A CSV of sku reference names, 'skuName1' or 'skuName1,skuName2,skuName3'|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "item": {
        "id": 0,
        "skuReference": "string"
      },
      "merchant": {
        "name": "string"
      },
      "quantity": {
        "total": {
          "availableToPromise": 0
        }
      }
    }
  ],
  "meta": {
    "pagination": {
      "count": 0,
      "currentPage": 0,
      "total": 0,
      "totalPages": 0
    }
  }
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 401 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="list-of-item-inventories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Found Inventory|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Access Denied|Inline|
|404|Not Found|No Inventory Found|Inline|

<h3 id="list-of-item-inventories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» item|object|false|none|Item this inventory data is based on|
|» » id|integer|false|none|FDC ID for this Item|
|» » skuReference|string|false|none|Sku reference name for this item|
|» merchant|object|false|none|Merchant that owns this item|
|» » name|string|false|none|Merchants name for this item|
|» quantity|object|false|none|none|
|» » total|object|false|none|none|
|» » » availableToPromise|integer|false|none|Number of items that are available to be used in an order|
|meta|object|false|none|none|
|» pagination|object|false|none|none|
|» » count|integer|false|none|Count of records returned in response, this will be equal to or less then the limit parameter|
|» » currentPage|integer|false|none|Current page of the response, this will match the page parameter|
|» » total|integer|false|none|Total number of records available to request|
|» » totalPages|integer|false|none|Total number of pages available to request|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
fdcAuth ( Scopes: oms )
</aside>

<h1 id="fulfillmentcom-apiv2-partners">Partners</h1>

## Ship an Order

<a id="opIdput-orders-id-ship"></a>

> Code samples

```bash
curl https://example.com/orders/0/ship \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "trackingNumber": "string",
    "weightOverride": 0
  }'
```

`PUT /orders/{id}/ship`

Note, this API is used to update orders and is reserved for our shipping partners.

> Body parameter

```json
{
  "trackingNumber": "string",
  "weightOverride": 0
}
```

<h3 id="ship-an-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The FDC order Id|
|body|body|object|true|Shipping Details|
|» trackingNumber|body|string|true|Tracking number of package|
|» weightOverride|body|number(float)|false|Override predicted weight of package|

> Example responses

> 200 Response

```json
{
  "currentStatus": {
    "createdBy": {
      "id": 0
    },
    "date": "1970-01-01T00:00:00Z",
    "id": 0,
    "reason": "string",
    "status": {
      "actionRequiredBy": {
        "id": 0,
        "name": "string"
      },
      "code": "string",
      "detail": "string",
      "detailCode": "string",
      "id": 0,
      "isClosed": true,
      "name": "string",
      "reason": "string",
      "stage": {
        "code": "string",
        "name": "string"
      },
      "state": {
        "code": "string",
        "name": "string"
      }
    }
  },
  "departDate": "1970-01-01T00:00:00Z",
  "dispatchDate": "1970-01-01T00:00:00Z",
  "id": 0,
  "merchant": {
    "id": 0,
    "name": "string"
  },
  "merchantOrderId": "string",
  "merchantShippingMethod": "string",
  "originalConsignee": {
    "address1": "string",
    "address2": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "companyName": "string",
    "country": "string",
    "email": "string",
    "firstName": "string",
    "id": 0,
    "iso": {
      "id": 0,
      "iso2": "string",
      "name": "string"
    },
    "lastName": "string",
    "phone": "string",
    "postalCode": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": 0
    }
  },
  "parentOrder": {
    "id": 0
  },
  "purchaseOrderNum": "string",
  "recordedOn": "1970-01-01T00:00:00Z",
  "trackingNumbers": [
    {
      "barcodeScanValue": "string",
      "carrier": {
        "id": 0
      },
      "value": "string"
    }
  ],
  "validatedConsignee": {
    "address1": "string",
    "address2": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "companyName": "string",
    "country": "string",
    "email": "string",
    "firstName": "string",
    "id": 0,
    "iso": {
      "id": 0,
      "iso2": "string",
      "name": "string"
    },
    "lastName": "string",
    "phone": "string",
    "postalCode": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": 0
    }
  },
  "warehouse": {
    "id": 0
  }
}
```

<h3 id="ship-an-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Order Found|Inline|
|404|Not Found|Order not found|None|

<h3 id="ship-an-order-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentStatus|object|true|none|none|
|» createdBy|object|false|none|none|
|» » id|integer|true|none|none|
|» date|string(date-time)|false|none|DateTime of Status Event|
|» id|integer|true|none|none|
|» reason|string|false|none|Explanation for status|
|» status|object|false|none|none|
|» » actionRequiredBy|object|false|none|Responsibility for resolving this issue|
|» » » id|integer|false|none|none|
|» » » name|string|false|none|Human readable description of responsible party to resolve the issue|
|» » code|string|true|none|Code, see [status codes](#section/Getting-Started/Status-Codes)|
|» » detail|string|false|none|none|
|» » detailCode|string|true|none|none|
|» » id|integer|false|none|Depricated, use code instead|
|» » isClosed|boolean|false|none|Depricated, does this status event close the order|
|» » name|string|false|none|Depricated, use stage/state instead|
|» » reason|string|false|none|Depricated|
|» » stage|object|true|none|none|
|» » » code|string|false|none|none|
|» » » name|string|false|none|none|
|» » state|object|true|none|none|
|» » » code|string|false|none|none|
|» » » name|string|false|none|none|
|departDate|string(date-time)|false|none|DateTime order departed an FDC warehouse|
|dispatchDate|string(date-time)|false|none|DateTime order was dispatched for fulfillment by FDC|
|id|integer|true|none|FDC ID for this order|
|merchant|object|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|Merchant Company Name|
|merchantOrderId|string|true|none|Merchant provided ID|
|merchantShippingMethod|string|true|none|Requested ship method|
|originalConsignee|object|true|none|none|
|» address1|string|true|none|none|
|» address2|string|false|none|none|
|» addressLocality|string|true|none|City|
|» addressRegion|string|true|none|Province / State|
|» companyName|string|false|none|none|
|» country|string|true|none|Ideally provide the two character ISO code|
|» email|string|false|none|none|
|» firstName|string|true|none|none|
|» id|integer|true|none|none|
|» iso|object|false|none|none|
|» » id|integer|false|none|none|
|» » iso2|string|false|none|Two character ISO code|
|» » name|string|false|none|Country Name|
|» lastName|string|true|none|none|
|» phone|string|false|none|none|
|» postalCode|string|true|none|Postal Code / Zip|
|» updatedAt|string(date-time)|false|none|none|
|» updatedBy|object|false|none|none|
|» » id|integer|true|none|none|
|parentOrder|object|false|none|none|
|» id|integer|false|none|Reference to parent `id` if order was grouped|
|purchaseOrderNum|string|false|none|Merchant provided PO#|
|recordedOn|string(date-time)|true|none|DateTime order was recorded by FDC|
|trackingNumbers|[object]|false|none|none|
|» barcodeScanValue|string|false|none|**Deprecated.** The computer readable alternative to the human readable|
|» carrier|object|false|none|none|
|» » id|integer|true|none|none|
|» value|string|false|none|The human readable tracking number recipients (consignee) expect|
|validatedConsignee|object|true|none|none|
|» address1|string|true|none|none|
|» address2|string|false|none|none|
|» addressLocality|string|true|none|City|
|» addressRegion|string|true|none|Province / State|
|» companyName|string|false|none|none|
|» country|string|true|none|Ideally provide the two character ISO code|
|» email|string|false|none|none|
|» firstName|string|true|none|none|
|» id|integer|true|none|none|
|» iso|object|false|none|none|
|» » id|integer|false|none|none|
|» » iso2|string|false|none|Two character ISO code|
|» » name|string|false|none|Country Name|
|» lastName|string|true|none|none|
|» phone|string|false|none|none|
|» postalCode|string|true|none|Postal Code / Zip|
|» updatedAt|string(date-time)|false|none|none|
|» updatedBy|object|false|none|none|
|» » id|integer|true|none|none|
|warehouse|object|false|none|none|
|» id|integer|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
fdcAuth ( Scopes: oms )
</aside>

## Update Order Status

<a id="opIdput-orders-id-status"></a>

> Code samples

```bash
curl https://example.com/orders/0/status \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reason": "string",
    "status": {
      "code": "string"
    }
  }'
```

`PUT /orders/{id}/status`

Note, this API is used to update orders and is reserved for our shipping partners.

> Body parameter

```json
{
  "reason": "string",
  "status": {
    "code": "string"
  }
}
```

<h3 id="update-order-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The FDC order Id|
|body|body|object|true|New status event|
|» reason|body|string|true|Human-readable description|
|» status|body|object|true|none|
|» » code|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "currentStatus": {
    "createdBy": {
      "id": 0
    },
    "date": "1970-01-01T00:00:00Z",
    "id": 0,
    "reason": "string",
    "status": {
      "actionRequiredBy": {
        "id": 0,
        "name": "string"
      },
      "code": "string",
      "detail": "string",
      "detailCode": "string",
      "id": 0,
      "isClosed": true,
      "name": "string",
      "reason": "string",
      "stage": {
        "code": "string",
        "name": "string"
      },
      "state": {
        "code": "string",
        "name": "string"
      }
    }
  },
  "departDate": "1970-01-01T00:00:00Z",
  "dispatchDate": "1970-01-01T00:00:00Z",
  "id": 0,
  "merchant": {
    "id": 0,
    "name": "string"
  },
  "merchantOrderId": "string",
  "merchantShippingMethod": "string",
  "originalConsignee": {
    "address1": "string",
    "address2": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "companyName": "string",
    "country": "string",
    "email": "string",
    "firstName": "string",
    "id": 0,
    "iso": {
      "id": 0,
      "iso2": "string",
      "name": "string"
    },
    "lastName": "string",
    "phone": "string",
    "postalCode": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": 0
    }
  },
  "parentOrder": {
    "id": 0
  },
  "purchaseOrderNum": "string",
  "recordedOn": "1970-01-01T00:00:00Z",
  "trackingNumbers": [
    {
      "barcodeScanValue": "string",
      "carrier": {
        "id": 0
      },
      "value": "string"
    }
  ],
  "validatedConsignee": {
    "address1": "string",
    "address2": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "companyName": "string",
    "country": "string",
    "email": "string",
    "firstName": "string",
    "id": 0,
    "iso": {
      "id": 0,
      "iso2": "string",
      "name": "string"
    },
    "lastName": "string",
    "phone": "string",
    "postalCode": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": 0
    }
  },
  "warehouse": {
    "id": 0
  }
}
```

<h3 id="update-order-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Order Found|Inline|
|404|Not Found|Order not found|None|

<h3 id="update-order-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentStatus|object|true|none|none|
|» createdBy|object|false|none|none|
|» » id|integer|true|none|none|
|» date|string(date-time)|false|none|DateTime of Status Event|
|» id|integer|true|none|none|
|» reason|string|false|none|Explanation for status|
|» status|object|false|none|none|
|» » actionRequiredBy|object|false|none|Responsibility for resolving this issue|
|» » » id|integer|false|none|none|
|» » » name|string|false|none|Human readable description of responsible party to resolve the issue|
|» » code|string|true|none|Code, see [status codes](#section/Getting-Started/Status-Codes)|
|» » detail|string|false|none|none|
|» » detailCode|string|true|none|none|
|» » id|integer|false|none|Depricated, use code instead|
|» » isClosed|boolean|false|none|Depricated, does this status event close the order|
|» » name|string|false|none|Depricated, use stage/state instead|
|» » reason|string|false|none|Depricated|
|» » stage|object|true|none|none|
|» » » code|string|false|none|none|
|» » » name|string|false|none|none|
|» » state|object|true|none|none|
|» » » code|string|false|none|none|
|» » » name|string|false|none|none|
|departDate|string(date-time)|false|none|DateTime order departed an FDC warehouse|
|dispatchDate|string(date-time)|false|none|DateTime order was dispatched for fulfillment by FDC|
|id|integer|true|none|FDC ID for this order|
|merchant|object|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|Merchant Company Name|
|merchantOrderId|string|true|none|Merchant provided ID|
|merchantShippingMethod|string|true|none|Requested ship method|
|originalConsignee|object|true|none|none|
|» address1|string|true|none|none|
|» address2|string|false|none|none|
|» addressLocality|string|true|none|City|
|» addressRegion|string|true|none|Province / State|
|» companyName|string|false|none|none|
|» country|string|true|none|Ideally provide the two character ISO code|
|» email|string|false|none|none|
|» firstName|string|true|none|none|
|» id|integer|true|none|none|
|» iso|object|false|none|none|
|» » id|integer|false|none|none|
|» » iso2|string|false|none|Two character ISO code|
|» » name|string|false|none|Country Name|
|» lastName|string|true|none|none|
|» phone|string|false|none|none|
|» postalCode|string|true|none|Postal Code / Zip|
|» updatedAt|string(date-time)|false|none|none|
|» updatedBy|object|false|none|none|
|» » id|integer|true|none|none|
|parentOrder|object|false|none|none|
|» id|integer|false|none|Reference to parent `id` if order was grouped|
|purchaseOrderNum|string|false|none|Merchant provided PO#|
|recordedOn|string(date-time)|true|none|DateTime order was recorded by FDC|
|trackingNumbers|[object]|false|none|none|
|» barcodeScanValue|string|false|none|**Deprecated.** The computer readable alternative to the human readable|
|» carrier|object|false|none|none|
|» » id|integer|true|none|none|
|» value|string|false|none|The human readable tracking number recipients (consignee) expect|
|validatedConsignee|object|true|none|none|
|» address1|string|true|none|none|
|» address2|string|false|none|none|
|» addressLocality|string|true|none|City|
|» addressRegion|string|true|none|Province / State|
|» companyName|string|false|none|none|
|» country|string|true|none|Ideally provide the two character ISO code|
|» email|string|false|none|none|
|» firstName|string|true|none|none|
|» id|integer|true|none|none|
|» iso|object|false|none|none|
|» » id|integer|false|none|none|
|» » iso2|string|false|none|Two character ISO code|
|» » name|string|false|none|Country Name|
|» lastName|string|true|none|none|
|» phone|string|false|none|none|
|» postalCode|string|true|none|Postal Code / Zip|
|» updatedAt|string(date-time)|false|none|none|
|» updatedBy|object|false|none|none|
|» » id|integer|true|none|none|
|warehouse|object|false|none|none|
|» id|integer|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
fdcAuth ( Scopes: oms )
</aside>

<h1 id="fulfillmentcom-apiv2-returns">Returns</h1>

## List Returns

<a id="opIdget-returns"></a>

> Code samples

```bash
curl 'https://example.com/returns?fromDate=string&toDate=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /returns`

Retrieves summary return activity during the queried timespan. Although return knowledge can be learned from `GET /orders/{id}` it can take an unknown amount of time for an order that is refused or undeliverable to return to an FDC facility. Instead we recommend regularly querying this API.

<h3 id="list-returns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromDate|query|string|true|Date-time in ISO 8601 format for selecting orders after, or at, the specified time|
|toDate|query|string|true|Date-time in ISO 8601 format for selecting orders before, or at, the specified time|
|page|query|integer|false|A multiplier of the number of items (limit parameter) to skip before returning results|
|limit|query|integer|false|The numbers of items to return|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "comments": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": {
        "id": 0
      },
      "id": 0,
      "order": {
        "id": 0,
        "merchantId": 0,
        "merchantOrderId": "string"
      },
      "reason": {
        "id": 0,
        "title": "string"
      },
      "returnedBy": "string",
      "rmaItems": [
        {
          "comments": "string",
          "id": 0,
          "item": {
            "id": 0,
            "sku": "string"
          },
          "nonRestockedReason": {
            "id": 0,
            "title": "string"
          },
          "quantityExpected": 0,
          "quantityRestocked": 0,
          "quantityReturned": 0,
          "quantityShipped": 0
        }
      ],
      "rmaNumber": "string",
      "status": {
        "id": 0,
        "title": "string"
      },
      "updatedAt": "1970-01-01T00:00:00Z",
      "updatedBy": {
        "id": 0
      }
    }
  ],
  "meta": {
    "pagination": {
      "count": 0,
      "currentPage": 0,
      "total": 0,
      "totalPages": 0
    }
  }
}
```

<h3 id="list-returns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns|Inline|

<h3 id="list-returns-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» comments|string \| null|false|none|none|
|» createdAt|string(date-time)|true|none|none|
|» createdBy|object|true|none|none|
|» » id|integer|true|none|none|
|» id|integer|true|none|none|
|» order|object \| null|false|none|none|
|» » id|integer|false|none|none|
|» » merchantId|integer|false|none|none|
|» » merchantOrderId|string|false|none|none|
|» reason|object|true|none|none|
|» » id|integer|true|none|none|
|» » title|string|true|none|none|
|» returnedBy|string|false|none|none|
|» rmaItems|[object]|false|none|none|
|» » comments|string \| null|false|none|none|
|» » id|integer|false|none|none|
|» » item|object|false|none|none|
|» » » id|integer|false|none|none|
|» » » sku|string|false|none|none|
|» » nonRestockedReason|object \| null|false|none|none|
|» » » id|integer|false|none|none|
|» » » title|string|false|none|none|
|» » quantityExpected|integer \| null|false|none|none|
|» » quantityRestocked|integer|false|none|none|
|» » quantityReturned|integer|false|none|none|
|» » quantityShipped|integer|false|none|none|
|» rmaNumber|string \| null|false|none|none|
|» status|object|true|none|none|
|» » id|integer|true|none|none|
|» » title|string|true|none|none|
|» updatedAt|string(date-time)|true|none|none|
|» updatedBy|object|true|none|none|
|» » id|integer|true|none|none|
|meta|object|false|none|none|
|» pagination|object|false|none|none|
|» » count|integer|false|none|Count of records returned in response, this will be equal to or less then the limit parameter|
|» » currentPage|integer|false|none|Current page of the response, this will match the page parameter|
|» » total|integer|false|none|Total number of records available to request|
|» » totalPages|integer|false|none|Total number of pages available to request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
fdcAuth ( Scopes: oms )
</aside>

## Inform us of an RMA

<a id="opIdput-returns"></a>

> Code samples

```bash
curl https://example.com/returns \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "items": [
      {
        "quantityExpected": 1,
        "sku": "string"
      }
    ],
    "merchantOrderId": "string",
    "recipient": {
      "address1": "string",
      "address2": "string",
      "addressLocality": "string",
      "addressRegion": "string",
      "companyName": "string",
      "country": "string",
      "email": "string",
      "firstName": "string",
      "lastName": "string",
      "phone": "string",
      "postalCode": "string"
    },
    "rmaNumber": "string"
  }'
```

`PUT /returns`

Inform FDC of an expected return.

> Body parameter

```json
{
  "items": [
    {
      "quantityExpected": 1,
      "sku": "string"
    }
  ],
  "merchantOrderId": "string",
  "recipient": {
    "address1": "string",
    "address2": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "companyName": "string",
    "country": "string",
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "phone": "string",
    "postalCode": "string"
  },
  "rmaNumber": "string"
}
```

<h3 id="inform-us-of-an-rma-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|RMA|
|» items|body|[object]|true|none|
|» » quantityExpected|body|integer|true|none|
|» » sku|body|string|true|none|
|» merchantOrderId|body|string|false|none|
|» recipient|body|object|true|none|
|» » address1|body|string|true|Address Line 1|
|» » address2|body|string|false|Address Line 2|
|» » addressLocality|body|string|true|City|
|» » addressRegion|body|string|true|Province / State|
|» » companyName|body|string|false|none|
|» » country|body|string|true|Country, for best results please provide the two character ISO code|
|» » email|body|string|true|Email, required for international shipments|
|» » firstName|body|string|true|none|
|» » lastName|body|string|true|none|
|» » phone|body|string|true|Phone number, required for international shipments|
|» » postalCode|body|string|false|Postal Code / Zip|
|» rmaNumber|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "items": [
    {
      "quantityExpected": 1,
      "sku": "string"
    }
  ],
  "merchantOrderId": "string",
  "recipient": {
    "address1": "string",
    "address2": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "companyName": "string",
    "country": "string",
    "email": "string",
    "firstName": "string",
    "id": 0,
    "iso": {
      "id": 0,
      "iso2": "string",
      "name": "string"
    },
    "lastName": "string",
    "phone": "string",
    "postalCode": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": 0
    }
  },
  "rmaNumber": "string"
}
```

> 202 Response

```json
{
  "items": [
    {
      "quantityExpected": 1,
      "sku": "string"
    }
  ],
  "merchantOrderId": "string",
  "recipient": {
    "address1": "string",
    "address2": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "companyName": "string",
    "country": "string",
    "email": "string",
    "firstName": "string",
    "id": 0,
    "iso": {
      "id": 0,
      "iso2": "string",
      "name": "string"
    },
    "lastName": "string",
    "phone": "string",
    "postalCode": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": 0
    }
  },
  "rmaNumber": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 409 Response

```json
{
  "items": [
    {
      "quantityExpected": 1,
      "sku": "string"
    }
  ],
  "merchantOrderId": "string",
  "recipient": {
    "address1": "string",
    "address2": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "companyName": "string",
    "country": "string",
    "email": "string",
    "firstName": "string",
    "id": 0,
    "iso": {
      "id": 0,
      "iso2": "string",
      "name": "string"
    },
    "lastName": "string",
    "phone": "string",
    "postalCode": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": {
      "id": 0
    }
  },
  "rmaNumber": "string"
}
```

<h3 id="inform-us-of-an-rma-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|RMA Created|Inline|
|202|Accepted|RMA Updated|Inline|
|404|Not Found|A Component of Your Request Was Not Found|Inline|
|409|Conflict|RMA Already Processed|Inline|

<h3 id="inform-us-of-an-rma-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|none|
|» quantityExpected|integer|true|none|none|
|» sku|string|true|none|none|
|merchantOrderId|string|false|none|none|
|recipient|object|true|none|none|
|» address1|string|true|none|none|
|» address2|string|false|none|none|
|» addressLocality|string|true|none|City|
|» addressRegion|string|true|none|Province / State|
|» companyName|string|false|none|none|
|» country|string|true|none|Ideally provide the two character ISO code|
|» email|string|false|none|none|
|» firstName|string|true|none|none|
|» id|integer|true|none|none|
|» iso|object|false|none|none|
|» » id|integer|false|none|none|
|» » iso2|string|false|none|Two character ISO code|
|» » name|string|false|none|Country Name|
|» lastName|string|true|none|none|
|» phone|string|false|none|none|
|» postalCode|string|true|none|Postal Code / Zip|
|» updatedAt|string(date-time)|false|none|none|
|» updatedBy|object|false|none|none|
|» » id|integer|true|none|none|
|rmaNumber|string|true|none|none|

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|none|
|» quantityExpected|integer|true|none|none|
|» sku|string|true|none|none|
|merchantOrderId|string|false|none|none|
|recipient|object|true|none|none|
|» address1|string|true|none|none|
|» address2|string|false|none|none|
|» addressLocality|string|true|none|City|
|» addressRegion|string|true|none|Province / State|
|» companyName|string|false|none|none|
|» country|string|true|none|Ideally provide the two character ISO code|
|» email|string|false|none|none|
|» firstName|string|true|none|none|
|» id|integer|true|none|none|
|» iso|object|false|none|none|
|» » id|integer|false|none|none|
|» » iso2|string|false|none|Two character ISO code|
|» » name|string|false|none|Country Name|
|» lastName|string|true|none|none|
|» phone|string|false|none|none|
|» postalCode|string|true|none|Postal Code / Zip|
|» updatedAt|string(date-time)|false|none|none|
|» updatedBy|object|false|none|none|
|» » id|integer|true|none|none|
|rmaNumber|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|none|
|» quantityExpected|integer|true|none|none|
|» sku|string|true|none|none|
|merchantOrderId|string|false|none|none|
|recipient|object|true|none|none|
|» address1|string|true|none|none|
|» address2|string|false|none|none|
|» addressLocality|string|true|none|City|
|» addressRegion|string|true|none|Province / State|
|» companyName|string|false|none|none|
|» country|string|true|none|Ideally provide the two character ISO code|
|» email|string|false|none|none|
|» firstName|string|true|none|none|
|» id|integer|true|none|none|
|» iso|object|false|none|none|
|» » id|integer|false|none|none|
|» » iso2|string|false|none|Two character ISO code|
|» » name|string|false|none|Country Name|
|» lastName|string|true|none|none|
|» phone|string|false|none|none|
|» postalCode|string|true|none|Postal Code / Zip|
|» updatedAt|string(date-time)|false|none|none|
|» updatedBy|object|false|none|none|
|» » id|integer|true|none|none|
|rmaNumber|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
fdcAuth ( Scopes: oms )
</aside>

<h1 id="fulfillmentcom-apiv2-tracking">Tracking</h1>

Carrier Independent Tracking

## Tracking

<a id="opIdget-track"></a>

> Code samples

```bash
curl https://example.com/track \
  -H 'Accept: application/json'
```

`GET /track`

Get uniformed tracking events for any package, this response is carrier independent. Please note, an API Key is required for throttling purposes, please contact your success manager for details.

<h3 id="tracking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trackingNumber|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "destination": {
    "bbox": [
      null
    ],
    "centerline": {
      "coordinates": [
        [
          0
        ]
      ],
      "type": "Point"
    },
    "geometry": {
      "coordinates": [
        [
          0
        ]
      ],
      "type": "Point"
    },
    "id": 0,
    "properties": {
      "name": "string"
    },
    "title": "string",
    "type": "Feature"
  },
  "fdcOrderId": 0,
  "firstCheckedDateTime": "1970-01-01T00:00:00Z",
  "firstTransitEvent": "1970-01-01T00:00:00Z",
  "lastCheckedDateTime": "1970-01-01T00:00:00Z",
  "lastUpdatedDateTime": "1970-01-01T00:00:00Z",
  "origin": {
    "bbox": [
      null
    ],
    "centerline": {
      "coordinates": [
        [
          0
        ]
      ],
      "type": "Point"
    },
    "geometry": {
      "coordinates": [
        [
          0
        ]
      ],
      "type": "Point"
    },
    "id": 0,
    "properties": {
      "name": "string"
    },
    "title": "string",
    "type": "Feature"
  },
  "status": "string",
  "statusCategoryCode": 0,
  "statusDateTime": "1970-01-01T00:00:00Z",
  "statusMessage": "string",
  "trackedEvents": [
    {
      "eventCategory": "string",
      "eventCategoryCode": 0,
      "eventDateTime": "1970-01-01T00:00:00Z",
      "eventLocation": {
        "bbox": [
          null
        ],
        "centerline": {
          "coordinates": [
            [
              0
            ]
          ],
          "type": "Point"
        },
        "geometry": {
          "coordinates": [
            [
              0
            ]
          ],
          "type": "Point"
        },
        "id": 0,
        "properties": {
          "name": "string"
        },
        "title": "string",
        "type": "Feature"
      },
      "eventSource": "carrier",
      "eventStatus": "string"
    }
  ],
  "trackingNumber": {
    "barcodeScanValue": "string",
    "carrier": {
      "id": 0
    },
    "value": "string"
  }
}
```

<h3 id="tracking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|404|Not Found|Not Found|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="tracking-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|object|false|none|GeoJSon Feature|
|» bbox|[object]|false|none|none|
|» centerline|object|false|none|GeoJSon geometry|
|» » coordinates|[[number]] \| [number]|true|none|none|
|» » » *oneOf*|[[number]]|false|none|none|
|*anonymous*|[[number]]|false|none|none|
|» » » *oneOf*|[number]|false|none|none|
|*anonymous*|[number]|false|none|none|
|» » type|string|true|none|the geometry type|
|» geometry|object|true|none|GeoJSon geometry|
|» » coordinates|[[number]] \| [number]|true|none|none|
|» » » *oneOf*|[[number]]|false|none|none|
|*anonymous*|[[number]]|false|none|none|
|» » » *oneOf*|[number]|false|none|none|
|*anonymous*|[number]|false|none|none|
|» » type|string|true|none|the geometry type|
|» id|integer|false|none|none|
|» properties|object|true|none|none|
|» » name|string|false|none|none|
|» title|string|false|none|none|
|» type|string|true|none|none|
|fdcOrderId|integer|false|none|none|
|firstCheckedDateTime|string(date-time)|false|none|none|
|firstTransitEvent|string(date-time)|false|none|none|
|lastCheckedDateTime|string(date-time)|false|none|none|
|lastUpdatedDateTime|string(date-time)|false|none|none|
|origin|object|false|none|GeoJSon Feature|
|» bbox|[object]|false|none|none|
|» centerline|object|false|none|GeoJSon geometry|
|» » coordinates|[[number]] \| [number]|true|none|none|
|» » » *oneOf*|[[number]]|false|none|none|
|*anonymous*|[[number]]|false|none|none|
|» » » *oneOf*|[number]|false|none|none|
|*anonymous*|[number]|false|none|none|
|» » type|string|true|none|the geometry type|
|» geometry|object|true|none|GeoJSon geometry|
|» » coordinates|[[number]] \| [number]|true|none|none|
|» » » *oneOf*|[[number]]|false|none|none|
|*anonymous*|[[number]]|false|none|none|
|» » » *oneOf*|[number]|false|none|none|
|*anonymous*|[number]|false|none|none|
|» » type|string|true|none|the geometry type|
|» id|integer|false|none|none|
|» properties|object|true|none|none|
|» » name|string|false|none|none|
|» title|string|false|none|none|
|» type|string|true|none|none|
|status|string|false|none|none|
|statusCategoryCode|integer|false|none|none|
|statusDateTime|string(date-time)|false|none|none|
|statusMessage|string|false|none|none|
|trackedEvents|[object]|false|none|none|
|» eventCategory|string|false|none|none|
|» eventCategoryCode|integer|false|none|none|
|» eventDateTime|string(date-time)|false|none|none|
|» eventLocation|object|false|none|GeoJSon Feature|
|» » bbox|[object]|false|none|none|
|» » centerline|object|false|none|GeoJSon geometry|
|» » » coordinates|[[number]] \| [number]|true|none|none|
|» » » » *oneOf*|[[number]]|false|none|none|
|*anonymous*|[[number]]|false|none|none|
|» » » » *oneOf*|[number]|false|none|none|
|*anonymous*|[number]|false|none|none|
|» » » type|string|true|none|the geometry type|
|» » geometry|object|true|none|GeoJSon geometry|
|» » » coordinates|[[number]] \| [number]|true|none|none|
|» » » » *oneOf*|[[number]]|false|none|none|
|*anonymous*|[[number]]|false|none|none|
|» » » » *oneOf*|[number]|false|none|none|
|*anonymous*|[number]|false|none|none|
|» » » type|string|true|none|the geometry type|
|» » id|integer|false|none|none|
|» » properties|object|true|none|none|
|» » » name|string|false|none|none|
|» » title|string|false|none|none|
|» » type|string|true|none|none|
|» eventSource|string|false|none|none|
|» eventStatus|string|false|none|none|
|trackingNumber|object|false|none|none|
|» barcodeScanValue|string|false|none|**Deprecated.** The computer readable alternative to the human readable|
|» carrier|object|false|none|none|
|» » id|integer|true|none|none|
|» value|string|false|none|The human readable tracking number recipients (consignee) expect|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|Point|
|» » type|LineString|
|» » type|Polygon|
|» » type|MultiPoint|
|» » type|MultiLineString|
|» » type|MultiPolygon|
|» » type|Point|
|» » type|LineString|
|» » type|Polygon|
|» » type|MultiPoint|
|» » type|MultiLineString|
|» » type|MultiPolygon|
|» type|Feature|
|» » type|Point|
|» » type|LineString|
|» » type|Polygon|
|» » type|MultiPoint|
|» » type|MultiLineString|
|» » type|MultiPolygon|
|» » type|Point|
|» » type|LineString|
|» » type|Polygon|
|» » type|MultiPoint|
|» » type|MultiLineString|
|» » type|MultiPolygon|
|» type|Feature|
|» » » type|Point|
|» » » type|LineString|
|» » » type|Polygon|
|» » » type|MultiPoint|
|» » » type|MultiLineString|
|» » » type|MultiPolygon|
|» » » type|Point|
|» » » type|LineString|
|» » » type|Polygon|
|» » » type|MultiPoint|
|» » » type|MultiLineString|
|» » » type|MultiPolygon|
|» » type|Feature|
|» eventSource|carrier|
|» eventSource|internal|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="fulfillmentcom-apiv2-users">Users</h1>

## About Me

<a id="opIdget-users-me"></a>

> Code samples

```bash
curl https://example.com/users/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/me`

Returns the user profile of the access token's owner. This could be useful if managing multiple accounts or confirming validity of a token.

> Example responses

> 200 Response

```json
{
  "apiKey": "string",
  "contactInfo": {
    "apiKey": "string",
    "contactInfo": {
      "address1": "string",
      "address2": "string",
      "addressLocality": "string",
      "addressRegion": "string",
      "companyName": "string",
      "country": "string",
      "email": "string",
      "firstName": "string",
      "id": 0,
      "iso": {
        "id": 0,
        "iso2": "string",
        "name": "string"
      },
      "lastName": "string",
      "phone": "string",
      "postalCode": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "updatedBy": {
        "id": 0
      }
    },
    "createDate": "1970-01-01T00:00:00Z",
    "deptLeader": true,
    "id": 0,
    "merchant": {
      "id": 0
    },
    "name": "string",
    "status": true,
    "updatedAt": "1970-01-01T00:00:00Z",
    "updatedBy": "1970-01-01T00:00:00Z",
    "username": "string"
  },
  "createDate": "1970-01-01T00:00:00Z",
  "deptLeader": true,
  "id": 0,
  "merchant": {
    "id": 0
  },
  "name": "string",
  "status": true,
  "updatedAt": "1970-01-01T00:00:00Z",
  "updatedBy": "1970-01-01T00:00:00Z",
  "username": "string"
}
```

<h3 id="about-me-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User|Inline|

<h3 id="about-me-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|string|false|none|**Deprecated.** Depricated|
|contactInfo|object|false|none|none|
|» apiKey|string|false|none|**Deprecated.** Depricated|
|» contactInfo|object|false|none|none|
|» » address1|string|true|none|none|
|» » address2|string|false|none|none|
|» » addressLocality|string|true|none|City|
|» » addressRegion|string|true|none|Province / State|
|» » companyName|string|false|none|none|
|» » country|string|true|none|Ideally provide the two character ISO code|
|» » email|string|false|none|none|
|» » firstName|string|true|none|none|
|» » id|integer|true|none|none|
|» » iso|object|false|none|none|
|» » » id|integer|false|none|none|
|» » » iso2|string|false|none|Two character ISO code|
|» » » name|string|false|none|Country Name|
|» » lastName|string|true|none|none|
|» » phone|string|false|none|none|
|» » postalCode|string|true|none|Postal Code / Zip|
|» » updatedAt|string(date-time)|false|none|none|
|» » updatedBy|object|false|none|none|
|» » » id|integer|true|none|none|
|» createDate|string(date-time)|false|none|none|
|» deptLeader|boolean|false|none|**Deprecated.**|
|» id|integer|true|none|none|
|» merchant|object|false|none|none|
|» » id|integer|false|none|none|
|» name|string|false|none|none|
|» status|boolean|false|none|none|
|» updatedAt|string(date-time)|false|none|none|
|» updatedBy|string(date-time)|false|none|none|
|» username|string|false|none|none|
|createDate|string(date-time)|false|none|none|
|deptLeader|boolean|false|none|**Deprecated.**|
|id|integer|true|none|none|
|merchant|object|false|none|none|
|» id|integer|false|none|none|
|name|string|false|none|none|
|status|boolean|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|updatedBy|string(date-time)|false|none|none|
|username|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
fdcAuth ( Scopes: oms )
</aside>

<h1 id="fulfillmentcom-apiv2-accounting">Accounting</h1>

## List Order Accounting

<a id="opIdget-accounting"></a>

> Code samples

```bash
curl 'https://example.com/accounting?fromDate=string&toDate=string&hydrate=items' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounting`

Retrieves accounting activity during the queried timespan.

<h3 id="list-order-accounting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromDate|query|string|true|Orders invoice date. Date-time in ISO 8601 format for selecting orders after, or at, the specified time|
|toDate|query|string|true|Orders invoice date. Date-time in ISO 8601 format for selecting orders before, or at, the specified time|
|page|query|integer|false|A multiplier of the number of items (limit parameter) to skip before returning results|
|limit|query|integer|false|The numbers of items to return|
|warehouseIds|query|[integer]|false|A CSV of warehouse id, '123' or '1,2,3'|
|orderIds|query|[integer]|false|A CSV of FDC order id, '123' or '1,2,3'|
|hydrate|query|[string]|true|Adds additional information to the response, uses a CSV format for multiple values.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|hydrate|items|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "fees": {
        "box": 0,
        "envelope": 0,
        "fulfillment": 0,
        "insert": 0,
        "kitting": 0,
        "picking": 0,
        "postage": 0,
        "print": 0,
        "total": 0
      },
      "itemCount": 0,
      "items": [
        {
          "id": 1,
          "name": "string",
          "quantity": 1,
          "wmsItemId": "string"
        }
      ],
      "merchant": {
        "id": 0,
        "name": "string"
      },
      "order": {
        "id": 0,
        "invoiceDate": "1970-01-01",
        "merchantOrderId": 0,
        "recordedDate": "1970-01-01"
      },
      "warehouse": {
        "id": 0,
        "shortName": "string"
      }
    }
  ],
  "meta": {
    "pagination": {
      "count": 0,
      "currentPage": 0,
      "total": 0,
      "totalPages": 0
    }
  }
}
```

<h3 id="list-order-accounting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Accounting|Inline|

<h3 id="list-order-accounting-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» fees|object|false|none|none|
|» » box|number(float)|false|none|none|
|» » envelope|number(float)|false|none|none|
|» » fulfillment|number(float)|false|none|none|
|» » insert|number(float)|false|none|none|
|» » kitting|number(float)|false|none|none|
|» » picking|number(float)|false|none|none|
|» » postage|number(float)|false|none|none|
|» » print|number(float)|false|none|none|
|» » total|number(float)|false|none|none|
|» itemCount|integer|false|none|Total number of items accounted for|
|» items|[object]|false|none|none|
|» » id|integer|false|none|none|
|» » name|string|false|none|none|
|» » quantity|integer|false|none|none|
|» » wmsItemId|string|false|none|none|
|» merchant|object|false|none|none|
|» » id|integer|false|none|none|
|» » name|string|false|none|Name of the merchant|
|» order|object|false|none|none|
|» » id|integer|false|none|FDC order id|
|» » invoiceDate|string(date)|false|none|Date of the order when it was recorded by accounting.|
|» » merchantOrderId|integer|false|none|Merchant order id|
|» » recordedDate|string(date)|false|none|Date of the order when it was initially received.|
|» warehouse|object|false|none|none|
|» » id|integer|false|none|none|
|» » shortName|string|false|none|Name of the merchant|
|meta|object|false|none|none|
|» pagination|object|false|none|none|
|» » count|integer|false|none|Count of records returned in response, this will be equal to or less then the limit parameter|
|» » currentPage|integer|false|none|Current page of the response, this will match the page parameter|
|» » total|integer|false|none|Total number of records available to request|
|» » totalPages|integer|false|none|Total number of pages available to request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
fdcAuth ( Scopes: oms )
</aside>
