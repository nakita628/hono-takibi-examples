<h1 id="xero-appstore-api">Xero AppStore API v19.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

These endpoints are for Xero Partners to interact with the App Store Billing platform

Base URLs:

* <a href="https://api.xero.com/appstore/2.0">https://api.xero.com/appstore/2.0</a> - Xero App Store API

<a href="https://developer.xero.com/xero-developer-platform-terms-conditions/">Terms of service</a>
Email: <a href="mailto:api@xero.com">Xero Platform Team</a> 
Web: <a href="https://developer.xero.com">Xero Platform Team</a> 
License: <a href="https://github.com/XeroAPI/Xero-OpenAPI/blob/master/LICENSE">MIT</a>

# Authentication

- oAuth2 authentication. For more information

    - Flow: clientCredentials
    - Token URL = [https://identity.xero.com/connect/token](https://identity.xero.com/connect/token)

|Scope|Scope Description|
|---|---|
|marketplace.billing|Grant read-only access to fixed assets|

<h1 id="xero-appstore-api-appstore">AppStore</h1>

## Retrieves a subscription for a given subscriptionId

<a id="opIdgetSubscription"></a>

> Code samples

```bash
curl https://api.xero.com/appstore/2.0/subscriptions/00000000-0000-0000-0000-000000000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /subscriptions/{subscriptionId}`

<h3 id="retrieves-a-subscription-for-a-given-subscriptionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string(uuid)|true|Unique identifier for Subscription object|

> Example responses

> 200 Response

```json
{
  "currentPeriodEnd": "2021-07-20T03:13:48",
  "endDate": "2021-07-20T03:13:48",
  "id": "01b5a6f4-8936-4bfa-b703-830702312b87",
  "testMode": true,
  "organisationId": "fdc5be44-9b3e-4ebb-a0e9-11b9737f9a28",
  "plans": [
    {
      "id": "f617dd59-462f-46a1-9519-1765fd38b160",
      "name": "Small",
      "status": "ACTIVE",
      "subscriptionItems": [
        {
          "endDate": "2021-07-20T03:13:48",
          "id": "c7336bf6-8a47-4f13-9fc0-82420e6922c8",
          "testMode": true,
          "price": {
            "amount": 50,
            "currency": "AUD",
            "id": "31acefbe-bdb7-4329-84d6-51e9afd95327"
          },
          "product": {
            "id": "56d66073-ff78-497b-a726-ca9d56fdafa3",
            "name": "Small",
            "type": "FIXED"
          },
          "quantity": 1,
          "startDate": "2021-07-20T03:13:48"
        },
        {
          "endDate": "2021-07-20T03:13:48",
          "id": "1a25bc96-141a-4e42-a0fa-55ed51844da4",
          "testMode": true,
          "price": {
            "amount": 0.2,
            "currency": "AUD",
            "id": "15c65048-1b48-4d9f-81c0-4e1cd3a4f49c"
          },
          "product": {
            "id": "e8d8ac02-01b3-47f7-8a22-99cfe9035cf7",
            "name": "Texts",
            "type": "METERED",
            "usageUnit": "txt"
          }
        }
      ]
    }
  ],
  "startDate": "2021-07-20T03:13:48",
  "status": "ACTIVE"
}
```

> 404 Response

```json
{
  "detail": "string",
  "extensions": {},
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="retrieves-a-subscription-for-a-given-subscriptionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - return response of unique Subscription object|[Subscription](#schemasubscription)|
|404|Not Found|When a failure occurs in the endpoint|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: marketplace.billing )
</aside>

## Send metered usage belonging to this subscription and subscription item

<a id="opIdpostUsageRecords"></a>

> Code samples

```bash
curl https://api.xero.com/appstore/2.0/subscriptions/00000000-0000-0000-0000-000000000000/items/00000000-0000-0000-0000-000000000000/usage-records \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "timestamp": "2022-01-21T13:01:00",
    "quantity": 10
  }'
```

`POST /subscriptions/{subscriptionId}/items/{subscriptionItemId}/usage-records`

> Body parameter

```json
{
  "timestamp": "2022-01-21T13:01:00",
  "quantity": 10
}
```

<h3 id="send-metered-usage-belonging-to-this-subscription-and-subscription-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|subscriptionId|path|string(uuid)|true|Unique identifier for Subscription object|
|subscriptionItemId|path|string(uuid)|true|The unique identifier of the subscriptionItem|
|body|body|[CreateUsageRecord](#schemacreateusagerecord)|true|Contains the quantity for the usage record to create|
|» quantity|body|integer(int32)|true|The initial quantity for the usage record. Must be a whole number that is greater than or equal to 0|
|» timestamp|body|string(date-time)|true|DateTime in UTC of when the the product was consumed/used|

> Example responses

> 200 Response

```json
{
  "usageRecordId": "2a90f7d9-4c10-4a23-9c34-b47225167a48",
  "subscriptionId": "391be708-878a-4741-acfb-c0bc9a165bdb",
  "subscriptionItemId": "b22b150f-a0db-447d-9117-d922110add64",
  "productId": "d2b133d9-95d8-4446-807a-ae7ebc7353f6",
  "pricePerUnit": 0.1,
  "quantity": 22,
  "testMode": true,
  "recordedAt": "2022-09-13T02:11:22"
}
```

> 404 Response

```json
{
  "detail": "string",
  "extensions": {},
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="send-metered-usage-belonging-to-this-subscription-and-subscription-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - return response of the record submitted|[UsageRecord](#schemausagerecord)|
|404|Not Found|When a failure occurs in the endpoint|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: marketplace.billing )
</aside>

## Update and existing metered usage belonging to this subscription and subscription item

<a id="opIdputUsageRecords"></a>

> Code samples

```bash
curl https://api.xero.com/appstore/2.0/subscriptions/00000000-0000-0000-0000-000000000000/items/00000000-0000-0000-0000-000000000000/usage-records/00000000-0000-0000-0000-000000000000 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "quantity": 10
  }'
```

`PUT /subscriptions/{subscriptionId}/items/{subscriptionItemId}/usage-records/{usageRecordId}`

> Body parameter

```json
{
  "quantity": 10
}
```

<h3 id="update-and-existing-metered-usage-belonging-to-this-subscription-and-subscription-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|subscriptionId|path|string(uuid)|true|Unique identifier for Subscription object|
|subscriptionItemId|path|string(uuid)|true|The unique identifier of the subscriptionItem|
|usageRecordId|path|string(uuid)|true|The unique identifier of the usage record|
|body|body|[UpdateUsageRecord](#schemaupdateusagerecord)|true|Contains the quantity for the usage record to update|
|» quantity|body|integer(int32)|true|The new quantity for the usage record. Must be a whole number that is greater than or equal to 0|

> Example responses

> 200 Response

```json
{
  "usageRecordId": "2a90f7d9-4c10-4a23-9c34-b47225167a48",
  "subscriptionId": "391be708-878a-4741-acfb-c0bc9a165bdb",
  "subscriptionItemId": "b22b150f-a0db-447d-9117-d922110add64",
  "productId": "d2b133d9-95d8-4446-807a-ae7ebc7353f6",
  "pricePerUnit": 0.1,
  "quantity": 22,
  "testMode": true,
  "recordedAt": "2022-09-13T02:11:22"
}
```

> 404 Response

```json
{
  "detail": "string",
  "extensions": {},
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="update-and-existing-metered-usage-belonging-to-this-subscription-and-subscription-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - return response of the modified record|[UsageRecord](#schemausagerecord)|
|404|Not Found|When a failure occurs in the endpoint|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: marketplace.billing )
</aside>

## Gets all usage records related to the subscription

<a id="opIdgetUsageRecords"></a>

> Code samples

```bash
curl https://api.xero.com/appstore/2.0/subscriptions/00000000-0000-0000-0000-000000000000/usage-records \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /subscriptions/{subscriptionId}/usage-records`

<h3 id="gets-all-usage-records-related-to-the-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string(uuid)|true|Unique identifier for Subscription object|

> Example responses

> 200 Response

```json
{
  "usageRecords": [
    {
      "usageRecordId": "206100d3-e18b-4c59-9372-e98e4367a73f",
      "subscriptionId": "7c7684cf-bbfa-4fa8-8f44-eba8d1acdc5d",
      "subscriptionItemId": "264f6fa2-65e6-48f4-8a92-57cde5499742",
      "productId": "b040838b-f85e-4e7c-8dba-5a8501e5d312",
      "pricePerUnit": 2,
      "quantity": 12,
      "testMode": false,
      "recordedAt": "2022-01-01T00:00:00"
    },
    {
      "usageRecordId": "47d61dc9-3c99-4587-8d55-0985f47df4a6",
      "subscriptionId": "7c7684cf-bbfa-4fa8-8f44-eba8d1acdc5d",
      "subscriptionItemId": "264f6fa2-65e6-48f4-8a92-57cde5499742",
      "productId": "ec8033e8-5e3c-4795-bfb4-bfb85fa4557e",
      "pricePerUnit": 5,
      "quantity": 2,
      "testMode": false,
      "recordedAt": "2022-01-01T00:00:00"
    }
  ]
}
```

> 404 Response

```json
{
  "detail": "string",
  "extensions": {},
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="gets-all-usage-records-related-to-the-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - return a list of all usage record submitted against this subscription for this subscription period|[UsageRecordsList](#schemausagerecordslist)|
|404|Not Found|When a failure occurs in the endpoint|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: marketplace.billing )
</aside>

# Schemas

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "currentPeriodEnd": "1970-01-01T00:00:00Z",
  "endDate": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "organisationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "plans": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "status": "ACTIVE",
      "subscriptionItems": [
        {
          "endDate": "1970-01-01T00:00:00Z",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "price": {
            "amount": 0,
            "currency": "string",
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
          },
          "product": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "string",
            "seatUnit": "string",
            "type": "FIXED",
            "usageUnit": "string"
          },
          "quantity": 0,
          "startDate": "1970-01-01T00:00:00Z",
          "status": "ACTIVE",
          "testMode": true
        }
      ]
    }
  ],
  "startDate": "1970-01-01T00:00:00Z",
  "status": "ACTIVE",
  "testMode": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentPeriodEnd|string(date-time)|true|none|End of the current period that the subscription has been invoiced for.<br>|
|endDate|string(date-time)|false|none|If the subscription has been canceled, this is the date when the subscription ends. If null, the subscription is active and has not been cancelled|
|id|string(uuid)|true|none|The unique identifier of the subscription|
|organisationId|string(uuid)|true|none|The Xero generated unique identifier for the organisation|
|plans|[[Plan](#schemaplan)]|true|none|List of plans for the subscription.|
|startDate|string(date-time)|true|none|Date when the subscription was first created.|
|status|string|true|none|Status of the subscription. Available statuses are ACTIVE, CANCELED, and PAST_DUE.|
|testMode|boolean|false|none|Boolean used to indicate if the subscription is in test mode|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|CANCELED|
|status|PAST_DUE|

<h2 id="tocS_Plan">Plan</h2>
<!-- backwards compatibility -->
<a id="schemaplan"></a>
<a id="schema_Plan"></a>
<a id="tocSplan"></a>
<a id="tocsplan"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "status": "ACTIVE",
  "subscriptionItems": [
    {
      "endDate": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "price": {
        "amount": 0,
        "currency": "string",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "product": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "seatUnit": "string",
        "type": "FIXED",
        "usageUnit": "string"
      },
      "quantity": 0,
      "startDate": "1970-01-01T00:00:00Z",
      "status": "ACTIVE",
      "testMode": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The unique identifier of the plan|
|name|string|true|none|The name of the plan. It is used in the invoice line item<br>description.<br>|
|status|string|true|none|Status of the plan. Available statuses are ACTIVE, CANCELED, and<br>PENDING_ACTIVATION.<br>|
|subscriptionItems|[[SubscriptionItem](#schemasubscriptionitem)]|true|none|List of the subscription items belonging to the plan. It does not<br>include cancelled subscription items.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|CANCELED|
|status|PENDING_ACTIVATION|

<h2 id="tocS_Price">Price</h2>
<!-- backwards compatibility -->
<a id="schemaprice"></a>
<a id="schema_Price"></a>
<a id="tocSprice"></a>
<a id="tocsprice"></a>

```json
{
  "amount": 0,
  "currency": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|true|none|The net (before tax) amount.|
|currency|string|true|none|The currency of the price.|
|id|string(uuid)|true|none|The unique identifier of the price.|

<h2 id="tocS_ProblemDetails">ProblemDetails</h2>
<!-- backwards compatibility -->
<a id="schemaproblemdetails"></a>
<a id="schema_ProblemDetails"></a>
<a id="tocSproblemdetails"></a>
<a id="tocsproblemdetails"></a>

```json
{
  "detail": "string",
  "extensions": {},
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|extensions|object|false|none|none|
|instance|string|false|none|none|
|status|integer|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_SubscriptionItem">SubscriptionItem</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionitem"></a>
<a id="schema_SubscriptionItem"></a>
<a id="tocSsubscriptionitem"></a>
<a id="tocssubscriptionitem"></a>

```json
{
  "endDate": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "price": {
    "amount": 0,
    "currency": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "product": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "seatUnit": "string",
    "type": "FIXED",
    "usageUnit": "string"
  },
  "quantity": 0,
  "startDate": "1970-01-01T00:00:00Z",
  "status": "ACTIVE",
  "testMode": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|string(date-time)|false|none|Date when the subscription to this product will end|
|id|string(uuid)|true|none|The unique identifier of the subscription item.|
|price|[Price](#schemaprice)|true|none|The price of the product subscribed to.|
|product|[Product](#schemaproduct)|true|none|The product subscribed to.|
|quantity|integer|false|none|The quantity of the item. For a fixed product, it is 1. For a per-seat product, it is a positive integer. For metered products, it is always null.|
|startDate|string(date-time)|true|none|Date the subscription started, or will start. Note: this could be in<br>the future for downgrades or reduced number of seats that haven't taken effect yet.<br>|
|status|string|true|none|Status of the subscription item. Available statuses are ACTIVE, CANCELED, and<br>PENDING_ACTIVATION.<br>|
|testMode|boolean|false|none|If the subscription is a test subscription|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|CANCELED|
|status|PENDING_ACTIVATION|

<h2 id="tocS_Product">Product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_Product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "seatUnit": "string",
  "type": "FIXED",
  "usageUnit": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|The unique identifier for the product|
|name|string|false|none|The name of the product|
|seatUnit|string|false|none|The unit of the per seat product. e.g. "user", "organisation", "SMS", etc|
|type|string|false|none|The pricing model of the product:<br>* FIXED: Customers are charged a fixed amount for each billing period<br>* PER_SEAT: Customers are charged based on the number of units they purchase<br>* METERED: Customers are charged per use of this product<br>* SIMPLE: Customers are charged on a fixed amount for each billing period with an optional add-on feature<br>|
|usageUnit|string|false|none|The unit of the usage product. e.g. "user", "minutes", "SMS", etc|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FIXED|
|type|PER_SEAT|
|type|METERED|
|type|SIMPLE|

<h2 id="tocS_UsageRecord">UsageRecord</h2>
<!-- backwards compatibility -->
<a id="schemausagerecord"></a>
<a id="schema_UsageRecord"></a>
<a id="tocSusagerecord"></a>
<a id="tocsusagerecord"></a>

```json
{
  "quantity": 0,
  "subscriptionId": "string",
  "subscriptionItemId": "string",
  "testMode": true,
  "recordedAt": "1970-01-01T00:00:00Z",
  "usageRecordId": "string",
  "pricePerUnit": 0,
  "productId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quantity|integer(int32)|true|none|The quantity recorded|
|subscriptionId|string(guid)|true|none|The unique identifier of the Subscription.|
|subscriptionItemId|string(guid)|true|none|The unique identifier of the SubscriptionItem.|
|testMode|boolean|true|none|If the subscription is a test subscription|
|recordedAt|string(date-time)|true|none|The time when this usage was recorded in UTC|
|usageRecordId|string(guid)|true|none|The unique identifier of the usageRecord.|
|pricePerUnit|number(decimal)|true|none|The price per unit|
|productId|string(guid)|true|none|The unique identifier of the linked Product|

<h2 id="tocS_UsageRecordsList">UsageRecordsList</h2>
<!-- backwards compatibility -->
<a id="schemausagerecordslist"></a>
<a id="schema_UsageRecordsList"></a>
<a id="tocSusagerecordslist"></a>
<a id="tocsusagerecordslist"></a>

```json
{
  "usageRecords": [
    {
      "quantity": 0,
      "subscriptionId": "string",
      "subscriptionItemId": "string",
      "testMode": true,
      "recordedAt": "1970-01-01T00:00:00Z",
      "usageRecordId": "string",
      "pricePerUnit": 0,
      "productId": "string"
    }
  ]
}
```

Response to get usage record

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usageRecords|[[UsageRecord](#schemausagerecord)]|true|none|A collection of usage records|

<h2 id="tocS_CreateUsageRecord">CreateUsageRecord</h2>
<!-- backwards compatibility -->
<a id="schemacreateusagerecord"></a>
<a id="schema_CreateUsageRecord"></a>
<a id="tocScreateusagerecord"></a>
<a id="tocscreateusagerecord"></a>

```json
{
  "quantity": 0,
  "timestamp": "1970-01-01T00:00:00Z"
}
```

Data transfer object for public create usage end point

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quantity|integer(int32)|true|none|The initial quantity for the usage record. Must be a whole number that is greater than or equal to 0|
|timestamp|string(date-time)|true|none|DateTime in UTC of when the the product was consumed/used|

<h2 id="tocS_UpdateUsageRecord">UpdateUsageRecord</h2>
<!-- backwards compatibility -->
<a id="schemaupdateusagerecord"></a>
<a id="schema_UpdateUsageRecord"></a>
<a id="tocSupdateusagerecord"></a>
<a id="tocsupdateusagerecord"></a>

```json
{
  "quantity": 0
}
```

Data transfer object for public update usage end point

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quantity|integer(int32)|true|none|The new quantity for the usage record. Must be a whole number that is greater than or equal to 0|
