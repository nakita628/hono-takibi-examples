<h1 id="subscriptions-api-v3">Subscriptions API (v3) v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


A **Subscription** is a list of items (SKUs) tied to certain recurring purchase settings:

- User profile
- Address
- Payment method
- Frequency
- Cycle

Once you have [configured subscriptions](https://help.vtex.com/tutorial/how-to-configure-subscriptions%20--1FA9dfE7vJqxBna9Nft5Sj) in your store, the Subscriptions API allows you to create, manage and monitor your customers' subscriptions.

![image](https://user-images.githubusercontent.com/77292838/213024675-9407863b-0c55-4282-9442-306352716abe.png)

To read more about the Subscriptions feature, check our article [How Subscription works](https://help.vtex.com/tutorial/how-subscriptions-work--frequentlyAskedQuestions_4453).

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br">https://{accountName}.{environment}.com.br</a> - VTEX server url

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="subscriptions-api-v3-cycles">Cycles</h1>

## List cycles

> Code samples

```bash
curl https://example.com/api/rns/pub/cycles \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/rns/pub/cycles`

List cycles filtering by some arguments.

<h3 id="list-cycles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|beginDate|query|string \| null|false|Lower limit for the date of creation of the cycle|
|endDate|query|string \| null|false|Upper limit for the date of creation of the cycle|
|subscriptionId|query|string \| null|false|Id from the subscription that generated the cycle|
|customerEmail|query|string \| null|false|Customer that owns the subscription. Defaults to the current logged user|
|status|query|string \| null|false|Current cycle status|
|page|query|integer(int32)|false|Page used for pagination|
|size|query|integer(int32)|false|Page size used for pagination|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
[
  {
    "context": {
      "addressId": "string",
      "addressType": "string",
      "items": [
        {
          "cycleCount": 0,
          "isSkipped": true,
          "quantity": 5,
          "skuId": "12",
          "status": 0,
          "subscriptionItemId": "string"
        }
      ],
      "paymentAccountId": "string",
      "paymentSystem": "string",
      "paymentSystemGroup": "string",
      "paymentSystemName": "string"
    },
    "customerEmail": "string",
    "cycleCount": 0,
    "date": "1970-01-01T00:00:00Z",
    "id": "string",
    "isInRetry": true,
    "lastUpdate": "1970-01-01T00:00:00Z",
    "message": "string",
    "orderInfo": {
      "orderGroup": "string",
      "orderId": "string",
      "paymentURL": "string",
      "value": 0
    },
    "simulationItems": [
      {
        "id": "string",
        "quantity": 5,
        "status": 0,
        "statusName": "string",
        "unitPrice": 0
      }
    ],
    "status": "string",
    "subscriptionId": "string"
  }
]
```

<h3 id="list-cycles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-cycles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SubscriptionCycleResponse](#schemasubscriptioncycleresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get cycle details

> Code samples

```bash
curl https://example.com/api/rns/pub/cycles/string \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/rns/pub/cycles/{cycleId}`

Retrieve a specific cycle by its ID.

<h3 id="get-cycle-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cycleId|path|string \| null|true|ID from the desired cycle.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
{
  "context": {
    "addressId": "string",
    "addressType": "string",
    "items": [
      {
        "cycleCount": 0,
        "isSkipped": true,
        "quantity": 5,
        "skuId": "12",
        "status": 0,
        "subscriptionItemId": "string"
      }
    ],
    "paymentAccountId": "string",
    "paymentSystem": "string",
    "paymentSystemGroup": "string",
    "paymentSystemName": "string"
  },
  "customerEmail": "string",
  "cycleCount": 0,
  "date": "1970-01-01T00:00:00Z",
  "id": "string",
  "isInRetry": true,
  "lastUpdate": "1970-01-01T00:00:00Z",
  "message": "string",
  "orderInfo": {
    "orderGroup": "string",
    "orderId": "string",
    "paymentURL": "string",
    "value": 0
  },
  "simulationItems": [
    {
      "id": "string",
      "quantity": 5,
      "status": 0,
      "statusName": "string",
      "unitPrice": 0
    }
  ],
  "status": "string",
  "subscriptionId": "string"
}
```

<h3 id="get-cycle-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SubscriptionCycleResponse](#schemasubscriptioncycleresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Retry cycle

> Code samples

```bash
curl https://example.com/api/rns/pub/cycles/string/retry \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/rns/pub/cycles/{cycleId}/retry`

Every subscription order has an execution count called cycle, which determines the position of an order counting from when the shopper subscribed. This endpoint reruns a cycle that is currently in error state.

<h3 id="retry-cycle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cycleId|path|string \| null|true|Id from the cycle that will be retried|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

<h3 id="retry-cycle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="subscriptions-api-v3-plans">Plans</h1>

## List plans

> Code samples

```bash
curl https://example.com/api/rns/pvt/plans \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/rns/pvt/plans`

List plans filtering by some arguments.

<h3 id="list-plans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|periodicity|query|string \| null|false|Filter plans by available periodicity|
|interval|query|string \| null|false|Filter plans by available interval|
|page|query|integer(int32)|false|Page used for pagination|
|size|query|integer(int32)|false|Page size used for pagination|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
[
  {
    "frequencies": [
      {
        "interval": 0,
        "periodicity": 0,
        "periodicityAsString": "string"
      }
    ],
    "id": "string"
  }
]
```

<h3 id="list-plans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Requested plans|Inline|

<h3 id="list-plans-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[StorePlan](#schemastoreplan)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get plan details

> Code samples

```bash
curl https://example.com/api/rns/pvt/plans/string \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/rns/pvt/plans/{id}`

This endpoint retrieves a specific plan by its ID.

<h3 id="get-plan-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string \| null|true|Id from the desired plan|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
{
  "frequencies": [
    {
      "interval": 0,
      "periodicity": 0,
      "periodicityAsString": "string"
    }
  ],
  "id": "string"
}
```

<h3 id="get-plan-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Requested plan|[StorePlan](#schemastoreplan)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="subscriptions-api-v3-reports">Reports</h1>

## List report templates

> Code samples

```bash
curl https://example.com/api/rns/pvt/reports \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/rns/pvt/reports`

List all report templates available.

<h3 id="list-report-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
[
  {
    "account": "string",
    "description": "string",
    "entity": "string",
    "key": "string",
    "name": "string",
    "params": [
      {
        "name": "string",
        "type": "string",
        "value": null
      }
    ],
    "query": "string",
    "requesterEmail": "string",
    "schema": "string"
  }
]
```

<h3 id="list-report-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Requested report templates|Inline|

<h3 id="list-report-templates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SubscriptionReport](#schemasubscriptionreport)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Generate report

> Code samples

```bash
curl https://example.com/api/rns/pvt/reports/string/documents \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/rns/pvt/reports/{reportName}/documents`

This endpoint creates a new report in the format of a CSV file and sends it via email. You can generate one of the following reports: 

 - subscriptionsWithStatus 

 - subscriptionsScheduledBetweenDate 

 - subscriptionsUpdatedBetweenDate 

 - subscriptionsCreatedBetweenDate 

 - executionsBetweenDate

<h3 id="generate-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportName|path|string \| null|true|Name of the type of report in wish to generate. The following values are accepted: <br><br> - `subscriptionsWithStatus` <br><br> - `subscriptionsScheduledBetweenDate` <br><br> - `subscriptionsUpdatedBetweenDate` <br><br> - `subscriptionsCreatedBetweenDate` <br><br> - `executionsBetweenDate`|
|email|query|string|false|The report is sent to the email in this field.|
|beginDate|query|string|false|Start date of the report with the format `yyyy-mm-dd`. This field is required for any type of report.|
|endDate|query|string|false|End date of the report with the format `yyyy-mm-dd`. This field is required for any type of report.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
{
  "canceled": true,
  "completedDate": "1970-01-01T00:00:00Z",
  "email": "string",
  "enqueueDate": "1970-01-01T00:00:00Z",
  "errorCount": 0,
  "finished": true,
  "id": "string",
  "lastErrorMessage": "string",
  "lastUpdateTime": "1970-01-01T00:00:00Z",
  "linkToDownload": "string",
  "outputType": "string",
  "percentageProcessed": 0,
  "recordsProcessed": 0,
  "recordsSum": 0,
  "startDate": "1970-01-01T00:00:00Z",
  "statusMessage": "string",
  "zipped": true
}
```

<h3 id="generate-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Requested report|[ReportResponse](#schemareportresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get report document details

> Code samples

```bash
curl https://example.com/api/rns/pvt/reports/string/documents/string \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/rns/pvt/reports/{reportName}/documents/{documentId}`

Retrieve a specific report document by its Id.

<h3 id="get-report-document-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportName|path|string \| null|true|Name of the report|
|documentId|path|string \| null|true|Id from the desired report document|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
{
  "canceled": true,
  "completedDate": "1970-01-01T00:00:00Z",
  "email": "string",
  "enqueueDate": "1970-01-01T00:00:00Z",
  "errorCount": 0,
  "finished": true,
  "id": "string",
  "lastErrorMessage": "string",
  "lastUpdateTime": "1970-01-01T00:00:00Z",
  "linkToDownload": "string",
  "outputType": "string",
  "percentageProcessed": 0,
  "recordsProcessed": 0,
  "recordsSum": 0,
  "startDate": "1970-01-01T00:00:00Z",
  "statusMessage": "string",
  "zipped": true
}
```

<h3 id="get-report-document-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Requested report document|[ReportResponse](#schemareportresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="subscriptions-api-v3-subscriptions">Subscriptions</h1>

## List subscriptions

> Code samples

```bash
curl https://example.com/api/rns/pub/subscriptions \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/rns/pub/subscriptions`

List subscriptions filtering by some arguments.

<h3 id="list-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerEmail|query|string \| null|false|Customer that owns the subscription. Defaults to the current logged user.|
|status|query|string \| null|false|Current subscription status|
|addressId|query|string \| null|false|Id from the address used as shipping address|
|paymentId|query|string \| null|false|Id from the payment used as payment method|
|planId|query|string \| null|false|Id from the plan that the subscription belongs to|
|nextPurchaseDate|query|string \| null|false|Date for the next cycle|
|originalOrderId|query|string \| null|false|Id from the order that generated the subscription|
|page|query|integer(int32)|false|Page used for pagination|
|size|query|integer(int32)|false|Page size used for pagination|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
[
  {
    "createdAt": "1970-01-01T00:00:00Z",
    "customerEmail": "string",
    "customerId": "string",
    "cycleCount": 0,
    "id": "string",
    "isSkipped": true,
    "items": [
      {
        "id": "string",
        "isSkipped": true,
        "manualPrice": 40,
        "originalOrderId": "string",
        "quantity": 5,
        "skuId": "12",
        "status": "string"
      }
    ],
    "lastPurchaseDate": "1970-01-01T00:00:00Z",
    "lastUpdate": "1970-01-01T00:00:00Z",
    "nextPurchaseDate": "1970-01-01T00:00:00Z",
    "plan": {
      "frequency": {
        "interval": 0,
        "periodicity": "string"
      },
      "id": "string",
      "purchaseDay": 0,
      "validity": {
        "begin": "1970-01-01T00:00:00Z",
        "end": "1970-01-01T00:00:00Z"
      }
    },
    "purchaseSettings": {
      "currencyCode": "string",
      "paymentMethod": {
        "installments": 0,
        "paymentAccountId": "string",
        "paymentSystem": "string"
      }
    },
    "shippingAddress": {
      "addressId": "string",
      "addressType": "string"
    },
    "status": "string",
    "title": "string"
  }
]
```

<h3 id="list-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Requested subscriptions|Inline|

<h3 id="list-subscriptions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SubscriptionGroupResponse](#schemasubscriptiongroupresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create subscription

> Code samples

```bash
curl https://example.com/api/rns/pub/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "catalogAttachment": "string",
    "customerEmail": "string",
    "items": [
      {
        "manualPrice": 40,
        "quantity": 5,
        "skuId": "12"
      }
    ],
    "nextPurchaseDate": "1970-01-01T00:00:00Z",
    "plan": {
      "frequency": {
        "interval": 3,
        "periodicity": "MONTHLY"
      },
      "id": "store.subscription",
      "purchaseDay": "15",
      "validity": {
        "begin": "2022-06-10T00:00:00",
        "end": "2023-06-10T00:00:00"
      }
    },
    "purchaseSettings": {
      "paymentMethod": {
        "installments": 3,
        "paymentAccountId": "340357032569595",
        "paymentSystem": "4"
      },
      "salesChannel": "1"
    },
    "shippingAddress": {
      "addressId": "8109266555005",
      "addressType": "residential"
    },
    "status": "string",
    "title": "string"
  }'
```

`POST /api/rns/pub/subscriptions`

Create a new subscription.

> Body parameter

```json
{
  "catalogAttachment": "string",
  "customerEmail": "string",
  "items": [
    {
      "manualPrice": 40,
      "quantity": 5,
      "skuId": "12"
    }
  ],
  "nextPurchaseDate": "1970-01-01T00:00:00Z",
  "plan": {
    "frequency": {
      "interval": 3,
      "periodicity": "MONTHLY"
    },
    "id": "store.subscription",
    "purchaseDay": "15",
    "validity": {
      "begin": "2022-06-10T00:00:00",
      "end": "2023-06-10T00:00:00"
    }
  },
  "purchaseSettings": {
    "paymentMethod": {
      "installments": 3,
      "paymentAccountId": "340357032569595",
      "paymentSystem": "4"
    },
    "salesChannel": "1"
  },
  "shippingAddress": {
    "addressId": "8109266555005",
    "addressType": "residential"
  },
  "status": "string",
  "title": "string"
}
```

<h3 id="create-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|body|body|[SubscriptionGroupRequest](#schemasubscriptiongrouprequest)|false|none|
|» catalogAttachment|body|string \| null|false|none|
|» customerEmail|body|string \| null|true|none|
|» items|body|[[SubscriptionThinItemRequest](#schemasubscriptionthinitemrequest)]|true|none|
|» nextPurchaseDate|body|string(date-time) \| null|false|none|
|» plan|body|[PlanThinRequest](#schemaplanthinrequest)|true|Information about the plan.|
|» purchaseSettings|body|[PurchaseSettingsThinRequest](#schemapurchasesettingsthinrequest)|true|Object containing purchase settings information.|
|» shippingAddress|body|[shippingAddress](#schemashippingaddress)|true|none|
|» status|body|string \| null|false|none|
|» title|body|string \| null|false|none|

> Example responses

> 201 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "customerEmail": "string",
  "customerId": "string",
  "cycleCount": 0,
  "id": "string",
  "isSkipped": true,
  "items": [
    {
      "id": "string",
      "isSkipped": true,
      "manualPrice": 40,
      "originalOrderId": "string",
      "quantity": 5,
      "skuId": "12",
      "status": "string"
    }
  ],
  "lastPurchaseDate": "1970-01-01T00:00:00Z",
  "lastUpdate": "1970-01-01T00:00:00Z",
  "nextPurchaseDate": "1970-01-01T00:00:00Z",
  "plan": {
    "frequency": {
      "interval": 0,
      "periodicity": "string"
    },
    "id": "string",
    "purchaseDay": 0,
    "validity": {
      "begin": "1970-01-01T00:00:00Z",
      "end": "1970-01-01T00:00:00Z"
    }
  },
  "purchaseSettings": {
    "currencyCode": "string",
    "paymentMethod": {
      "installments": 0,
      "paymentAccountId": "string",
      "paymentSystem": "string"
    }
  },
  "shippingAddress": {
    "addressId": "string",
    "addressType": "string"
  },
  "status": "string",
  "title": "string"
}
```

<h3 id="create-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Subscription created|[SubscriptionGroupResponse](#schemasubscriptiongroupresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Calculate the current prices for the provided subscription template

> Code samples

```bash
curl https://example.com/api/rns/pub/subscriptions/simulate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "catalogAttachment": "string",
    "customerEmail": "string",
    "items": [
      {
        "manualPrice": 40,
        "quantity": 5,
        "skuId": "12"
      }
    ],
    "nextPurchaseDate": "1970-01-01T00:00:00Z",
    "plan": {
      "frequency": {
        "interval": 3,
        "periodicity": "MONTHLY"
      },
      "id": "store.subscription",
      "purchaseDay": "15",
      "validity": {
        "begin": "2022-06-10T00:00:00",
        "end": "2023-06-10T00:00:00"
      }
    },
    "purchaseSettings": {
      "paymentMethod": {
        "installments": 3,
        "paymentAccountId": "340357032569595",
        "paymentSystem": "4"
      },
      "salesChannel": "1"
    },
    "shippingAddress": {
      "addressId": "8109266555005",
      "addressType": "residential"
    },
    "status": "string",
    "title": "string"
  }'
```

`POST /api/rns/pub/subscriptions/simulate`

Simulates an order made by subscriptions on checkout and retrieves the current price for items and shipping.

> Body parameter

```json
{
  "catalogAttachment": "string",
  "customerEmail": "string",
  "items": [
    {
      "manualPrice": 40,
      "quantity": 5,
      "skuId": "12"
    }
  ],
  "nextPurchaseDate": "1970-01-01T00:00:00Z",
  "plan": {
    "frequency": {
      "interval": 3,
      "periodicity": "MONTHLY"
    },
    "id": "store.subscription",
    "purchaseDay": "15",
    "validity": {
      "begin": "2022-06-10T00:00:00",
      "end": "2023-06-10T00:00:00"
    }
  },
  "purchaseSettings": {
    "paymentMethod": {
      "installments": 3,
      "paymentAccountId": "340357032569595",
      "paymentSystem": "4"
    },
    "salesChannel": "1"
  },
  "shippingAddress": {
    "addressId": "8109266555005",
    "addressType": "residential"
  },
  "status": "string",
  "title": "string"
}
```

<h3 id="calculate-the-current-prices-for-the-provided-subscription-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|body|body|[SubscriptionGroupRequest](#schemasubscriptiongrouprequest)|false|none|
|» catalogAttachment|body|string \| null|false|none|
|» customerEmail|body|string \| null|true|none|
|» items|body|[[SubscriptionThinItemRequest](#schemasubscriptionthinitemrequest)]|true|none|
|» nextPurchaseDate|body|string(date-time) \| null|false|none|
|» plan|body|[PlanThinRequest](#schemaplanthinrequest)|true|Information about the plan.|
|» purchaseSettings|body|[PurchaseSettingsThinRequest](#schemapurchasesettingsthinrequest)|true|Object containing purchase settings information.|
|» shippingAddress|body|[shippingAddress](#schemashippingaddress)|true|none|
|» status|body|string \| null|false|none|
|» title|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "shippingEstimate": {
    "allItemsMatched": true,
    "estimate": "string",
    "estimateDeliveryDate": "1970-01-01T00:00:00Z",
    "name": "string",
    "nextPurchaseDate": "1970-01-01T00:00:00Z"
  },
  "simulateResponse": {
    "country": "string",
    "items": [
      {
        "attachments": [
          {
            "content": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string"
          }
        ],
        "id": "string",
        "isGift": true,
        "name": "string",
        "price": 0,
        "priceTags": [
          {
            "identifier": "string",
            "isPercentual": true,
            "name": "string",
            "rawValue": 0,
            "valueAsInt": 0
          }
        ],
        "quantity": 5,
        "seller": "string",
        "sellingPrice": 0,
        "unitMultiplier": 0
      }
    ],
    "logisticsInfo": [
      {
        "addressId": "string",
        "deliveryWindow": {
          "endDateUtc": "1970-01-01T00:00:00Z",
          "price": 0,
          "startDateUtc": "1970-01-01T00:00:00Z"
        },
        "itemIndex": 0,
        "lockTtl": "string",
        "pickupId": "string",
        "price": 0,
        "quantity": 5,
        "selectedDeliveryChannel": "string",
        "selectedSla": "string",
        "shippingEstimate": "string",
        "slAs": [
          {
            "availableDeliveryWindows": [
              {
                "endDateUtc": "1970-01-01T00:00:00Z",
                "price": 0,
                "startDateUtc": "1970-01-01T00:00:00Z"
              }
            ],
            "deliveryChannel": "string",
            "deliveryWindows": [
              {
                "endDateUtc": "1970-01-01T00:00:00Z",
                "price": 0,
                "startDateUtc": "1970-01-01T00:00:00Z"
              }
            ],
            "id": "string",
            "lockTtl": "string",
            "pickupPointId": "string",
            "price": 0,
            "shippingEstimate": "string"
          }
        ]
      }
    ],
    "messages": [
      {
        "code": "string",
        "status": "string",
        "text": "string"
      }
    ],
    "paymentData": {
      "payments": [
        {
          "accountId": "string",
          "bin": "string",
          "cardNumber": "string",
          "fields": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "group": "string",
          "id": "string",
          "installments": 0,
          "parentAccountId": "string",
          "paymentSystem": "string",
          "referenceValue": 0,
          "url": "string",
          "value": 0
        }
      ],
      "transactions": [
        {
          "isActive": true,
          "payments": [
            {
              "accountId": "string",
              "bin": "string",
              "cardNumber": "string",
              "fields": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "group": "string",
              "id": "string",
              "installments": 0,
              "parentAccountId": "string",
              "paymentSystem": "string",
              "referenceValue": 0,
              "url": "string",
              "value": 0
            }
          ]
        }
      ]
    },
    "postalCode": "string",
    "selectableGiftsResponse": [
      {
        "availableGifts": [
          {
            "attachments": [
              {
                "content": {
                  "property1": "string",
                  "property2": "string"
                },
                "name": "string"
              }
            ],
            "id": "string",
            "isGift": true,
            "isSelected": true,
            "name": "string",
            "price": 0,
            "priceTags": [
              {
                "identifier": "string",
                "isPercentual": true,
                "name": "string",
                "rawValue": 0,
                "valueAsInt": 0
              }
            ],
            "quantity": 5,
            "seller": "string",
            "sellingPrice": 0,
            "unitMultiplier": 0
          }
        ],
        "availableQuantity": 0,
        "id": "string"
      }
    ],
    "simulationItems": [
      {
        "id": "string",
        "quantity": 5,
        "status": 0,
        "statusName": "string",
        "unitPrice": 0
      }
    ],
    "totals": [
      {
        "id": "string",
        "name": "string",
        "valueAsInt": 0
      }
    ]
  },
  "simulationItems": [
    {
      "id": "string",
      "quantity": 5,
      "status": 0,
      "statusName": "string",
      "unitPrice": 0
    }
  ],
  "totals": [
    {
      "id": "string",
      "value": 0
    }
  ]
}
```

<h3 id="calculate-the-current-prices-for-the-provided-subscription-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Simulation result|[SimulateResponseVO](#schemasimulateresponsevo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get subscription details

> Code samples

```bash
curl https://example.com/api/rns/pub/subscriptions/string \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/rns/pub/subscriptions/{id}`

Retrieve a specific subscription by its ID.

<h3 id="get-subscription-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string \| null|true|ID from the target subscription.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "customerEmail": "string",
  "customerId": "string",
  "cycleCount": 0,
  "id": "string",
  "isSkipped": true,
  "items": [
    {
      "id": "string",
      "isSkipped": true,
      "manualPrice": 40,
      "originalOrderId": "string",
      "quantity": 5,
      "skuId": "12",
      "status": "string"
    }
  ],
  "lastPurchaseDate": "1970-01-01T00:00:00Z",
  "lastUpdate": "1970-01-01T00:00:00Z",
  "nextPurchaseDate": "1970-01-01T00:00:00Z",
  "plan": {
    "frequency": {
      "interval": 0,
      "periodicity": "string"
    },
    "id": "string",
    "purchaseDay": 0,
    "validity": {
      "begin": "1970-01-01T00:00:00Z",
      "end": "1970-01-01T00:00:00Z"
    }
  },
  "purchaseSettings": {
    "currencyCode": "string",
    "paymentMethod": {
      "installments": 0,
      "paymentAccountId": "string",
      "paymentSystem": "string"
    }
  },
  "shippingAddress": {
    "addressId": "string",
    "addressType": "string"
  },
  "status": "string",
  "title": "string"
}
```

<h3 id="get-subscription-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Requested subscription|[SubscriptionGroupResponse](#schemasubscriptiongroupresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update subscription

> Code samples

```bash
curl https://example.com/api/rns/pub/subscriptions/4002961 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "isSkipped": false,
    "plan": {
      "frequency": {
        "interval": 3,
        "periodicity": "MONTHLY"
      },
      "id": "store.subscription",
      "purchaseDay": "15",
      "validity": {
        "begin": "2022-06-10T00:00:00",
        "end": "2023-06-10T00:00:00"
      }
    },
    "purchaseSettings": {
      "paymentMethod": {
        "installments": 3,
        "paymentAccountId": "340357032569595",
        "paymentSystem": "4"
      },
      "salesChannel": "1"
    },
    "shippingAddress": {
      "addressId": "8109266555005",
      "addressType": "residential"
    },
    "status": "ACTIVE",
    "title": "catFood"
  }'
```

`PATCH /api/rns/pub/subscriptions/{id}`

Update a specific subscription.

> Body parameter

```json
{
  "isSkipped": false,
  "plan": {
    "frequency": {
      "interval": 3,
      "periodicity": "MONTHLY"
    },
    "id": "store.subscription",
    "purchaseDay": "15",
    "validity": {
      "begin": "2022-06-10T00:00:00",
      "end": "2023-06-10T00:00:00"
    }
  },
  "purchaseSettings": {
    "paymentMethod": {
      "installments": 3,
      "paymentAccountId": "340357032569595",
      "paymentSystem": "4"
    },
    "salesChannel": "1"
  },
  "shippingAddress": {
    "addressId": "8109266555005",
    "addressType": "residential"
  },
  "status": "ACTIVE",
  "title": "catFood"
}
```

<h3 id="update-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID from the given subscription.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|body|body|[SubscriptionUpdateRequestV3](#schemasubscriptionupdaterequestv3)|false|none|
|» isSkipped|body|boolean \| null|false|When set as `true`, it means the shopper asked to skip the next subscription order, and when set as `false`, no subscription order is going to be skipped.|
|» plan|body|[PlanThinRequest](#schemaplanthinrequest)|false|Information about the plan.|
|» purchaseSettings|body|[PurchaseSettingsThinRequest](#schemapurchasesettingsthinrequest)|false|Object containing purchase settings information.|
|» shippingAddress|body|[shippingAddress](#schemashippingaddress)|false|none|
|» status|body|string \| null|false|Status to which you wish to update the subscription. The accepted values are: <br>- `ACTIVE` <br>- `PAUSED` <br>- `CANCELLED` <br>- `EXPIRED` <br>- `MISSING`|
|» title|body|string \| null|false|Name of the subscription.|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "customerEmail": "string",
  "customerId": "string",
  "cycleCount": 0,
  "id": "string",
  "isSkipped": true,
  "items": [
    {
      "id": "string",
      "isSkipped": true,
      "manualPrice": 40,
      "originalOrderId": "string",
      "quantity": 5,
      "skuId": "12",
      "status": "string"
    }
  ],
  "lastPurchaseDate": "1970-01-01T00:00:00Z",
  "lastUpdate": "1970-01-01T00:00:00Z",
  "nextPurchaseDate": "1970-01-01T00:00:00Z",
  "plan": {
    "frequency": {
      "interval": 0,
      "periodicity": "string"
    },
    "id": "string",
    "purchaseDay": 0,
    "validity": {
      "begin": "1970-01-01T00:00:00Z",
      "end": "1970-01-01T00:00:00Z"
    }
  },
  "purchaseSettings": {
    "currencyCode": "string",
    "paymentMethod": {
      "installments": 0,
      "paymentAccountId": "string",
      "paymentSystem": "string"
    }
  },
  "shippingAddress": {
    "addressId": "string",
    "addressType": "string"
  },
  "status": "string",
  "title": "string"
}
```

<h3 id="update-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subscription successfully updated|[SubscriptionGroupResponse](#schemasubscriptiongroupresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Add item to subscription

> Code samples

```bash
curl https://example.com/api/rns/pub/subscriptions/string/items \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "manualPrice": 40,
    "quantity": 5,
    "skuId": "12"
  }'
```

`POST /api/rns/pub/subscriptions/{id}/items`

Add a new item to a given subscription.

> Body parameter

```json
{
  "manualPrice": 40,
  "quantity": 5,
  "skuId": "12"
}
```

<h3 id="add-item-to-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string \| null|true|ID from the target subscription|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|body|body|[SubscriptionThinItemRequest](#schemasubscriptionthinitemrequest)|false|none|
|» manualPrice|body|integer(int32) \| null|false|Manual price.|
|» quantity|body|integer(int32)|false|Amount of units in the cart.|
|» skuId|body|string \| null|false|SKU ID.|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "customerEmail": "string",
  "customerId": "string",
  "cycleCount": 0,
  "id": "string",
  "isSkipped": true,
  "items": [
    {
      "id": "string",
      "isSkipped": true,
      "manualPrice": 40,
      "originalOrderId": "string",
      "quantity": 5,
      "skuId": "12",
      "status": "string"
    }
  ],
  "lastPurchaseDate": "1970-01-01T00:00:00Z",
  "lastUpdate": "1970-01-01T00:00:00Z",
  "nextPurchaseDate": "1970-01-01T00:00:00Z",
  "plan": {
    "frequency": {
      "interval": 0,
      "periodicity": "string"
    },
    "id": "string",
    "purchaseDay": 0,
    "validity": {
      "begin": "1970-01-01T00:00:00Z",
      "end": "1970-01-01T00:00:00Z"
    }
  },
  "purchaseSettings": {
    "currencyCode": "string",
    "paymentMethod": {
      "installments": 0,
      "paymentAccountId": "string",
      "paymentSystem": "string"
    }
  },
  "shippingAddress": {
    "addressId": "string",
    "addressType": "string"
  },
  "status": "string",
  "title": "string"
}
```

<h3 id="add-item-to-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subscription successfully updated|[SubscriptionGroupResponse](#schemasubscriptiongroupresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Remove items from a subscription.

> Code samples

```bash
curl https://example.com/api/rns/pub/subscriptions/string/items/string \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/rns/pub/subscriptions/{id}/items/{itemId}`

Removes a specific item from a given subscription

<h3 id="remove-items-from-a-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string \| null|true|Id from the target subscription|
|itemId|path|string \| null|true|Id from the subscription item that will be removed|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

<h3 id="remove-items-from-a-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Edit items on a subscription.

> Code samples

```bash
curl https://example.com/api/rns/pub/subscriptions/string/items/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "isSkipped": true,
    "manualPrice": 40,
    "quantity": 5,
    "status": "string"
  }'
```

`PATCH /api/rns/pub/subscriptions/{id}/items/{itemId}`

Edit a given item on a specific subscription

> Body parameter

```json
{
  "isSkipped": true,
  "manualPrice": 40,
  "quantity": 5,
  "status": "string"
}
```

<h3 id="edit-items-on-a-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string \| null|true|Id from the target subscription|
|itemId|path|string \| null|true|Id from the target item|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|body|body|[UpdateItemInput](#schemaupdateiteminput)|false|none|
|» isSkipped|body|boolean \| null|false|none|
|» manualPrice|body|integer(int32) \| null|false|Manual price.|
|» quantity|body|integer(int32)|false|Amount of units in the cart.|
|» status|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "customerEmail": "string",
  "customerId": "string",
  "cycleCount": 0,
  "id": "string",
  "isSkipped": true,
  "items": [
    {
      "id": "string",
      "isSkipped": true,
      "manualPrice": 40,
      "originalOrderId": "string",
      "quantity": 5,
      "skuId": "12",
      "status": "string"
    }
  ],
  "lastPurchaseDate": "1970-01-01T00:00:00Z",
  "lastUpdate": "1970-01-01T00:00:00Z",
  "nextPurchaseDate": "1970-01-01T00:00:00Z",
  "plan": {
    "frequency": {
      "interval": 0,
      "periodicity": "string"
    },
    "id": "string",
    "purchaseDay": 0,
    "validity": {
      "begin": "1970-01-01T00:00:00Z",
      "end": "1970-01-01T00:00:00Z"
    }
  },
  "purchaseSettings": {
    "currencyCode": "string",
    "paymentMethod": {
      "installments": 0,
      "paymentAccountId": "string",
      "paymentSystem": "string"
    }
  },
  "shippingAddress": {
    "addressId": "string",
    "addressType": "string"
  },
  "status": "string",
  "title": "string"
}
```

<h3 id="edit-items-on-a-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subscription updated|[SubscriptionGroupResponse](#schemasubscriptiongroupresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Calculate the current prices for a specific subscription

> Code samples

```bash
curl https://example.com/api/rns/pub/subscriptions/string/simulate \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/rns/pub/subscriptions/{id}/simulate`

Simulates an order made by the specific subscription on checkout and retrieves the current price for items and shipping.

<h3 id="calculate-the-current-prices-for-a-specific-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string \| null|true|Id from the target subscription|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
{
  "shippingEstimate": {
    "allItemsMatched": true,
    "estimate": "string",
    "estimateDeliveryDate": "1970-01-01T00:00:00Z",
    "name": "string",
    "nextPurchaseDate": "1970-01-01T00:00:00Z"
  },
  "simulateResponse": {
    "country": "string",
    "items": [
      {
        "attachments": [
          {
            "content": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string"
          }
        ],
        "id": "string",
        "isGift": true,
        "name": "string",
        "price": 0,
        "priceTags": [
          {
            "identifier": "string",
            "isPercentual": true,
            "name": "string",
            "rawValue": 0,
            "valueAsInt": 0
          }
        ],
        "quantity": 5,
        "seller": "string",
        "sellingPrice": 0,
        "unitMultiplier": 0
      }
    ],
    "logisticsInfo": [
      {
        "addressId": "string",
        "deliveryWindow": {
          "endDateUtc": "1970-01-01T00:00:00Z",
          "price": 0,
          "startDateUtc": "1970-01-01T00:00:00Z"
        },
        "itemIndex": 0,
        "lockTtl": "string",
        "pickupId": "string",
        "price": 0,
        "quantity": 5,
        "selectedDeliveryChannel": "string",
        "selectedSla": "string",
        "shippingEstimate": "string",
        "slAs": [
          {
            "availableDeliveryWindows": [
              {
                "endDateUtc": "1970-01-01T00:00:00Z",
                "price": 0,
                "startDateUtc": "1970-01-01T00:00:00Z"
              }
            ],
            "deliveryChannel": "string",
            "deliveryWindows": [
              {
                "endDateUtc": "1970-01-01T00:00:00Z",
                "price": 0,
                "startDateUtc": "1970-01-01T00:00:00Z"
              }
            ],
            "id": "string",
            "lockTtl": "string",
            "pickupPointId": "string",
            "price": 0,
            "shippingEstimate": "string"
          }
        ]
      }
    ],
    "messages": [
      {
        "code": "string",
        "status": "string",
        "text": "string"
      }
    ],
    "paymentData": {
      "payments": [
        {
          "accountId": "string",
          "bin": "string",
          "cardNumber": "string",
          "fields": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "group": "string",
          "id": "string",
          "installments": 0,
          "parentAccountId": "string",
          "paymentSystem": "string",
          "referenceValue": 0,
          "url": "string",
          "value": 0
        }
      ],
      "transactions": [
        {
          "isActive": true,
          "payments": [
            {
              "accountId": "string",
              "bin": "string",
              "cardNumber": "string",
              "fields": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "group": "string",
              "id": "string",
              "installments": 0,
              "parentAccountId": "string",
              "paymentSystem": "string",
              "referenceValue": 0,
              "url": "string",
              "value": 0
            }
          ]
        }
      ]
    },
    "postalCode": "string",
    "selectableGiftsResponse": [
      {
        "availableGifts": [
          {
            "attachments": [
              {
                "content": {
                  "property1": "string",
                  "property2": "string"
                },
                "name": "string"
              }
            ],
            "id": "string",
            "isGift": true,
            "isSelected": true,
            "name": "string",
            "price": 0,
            "priceTags": [
              {
                "identifier": "string",
                "isPercentual": true,
                "name": "string",
                "rawValue": 0,
                "valueAsInt": 0
              }
            ],
            "quantity": 5,
            "seller": "string",
            "sellingPrice": 0,
            "unitMultiplier": 0
          }
        ],
        "availableQuantity": 0,
        "id": "string"
      }
    ],
    "simulationItems": [
      {
        "id": "string",
        "quantity": 5,
        "status": 0,
        "statusName": "string",
        "unitPrice": 0
      }
    ],
    "totals": [
      {
        "id": "string",
        "name": "string",
        "valueAsInt": 0
      }
    ]
  },
  "simulationItems": [
    {
      "id": "string",
      "quantity": 5,
      "status": 0,
      "statusName": "string",
      "unitPrice": 0
    }
  ],
  "totals": [
    {
      "id": "string",
      "value": 0
    }
  ]
}
```

<h3 id="calculate-the-current-prices-for-a-specific-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Simulation result|[SimulateResponseVO](#schemasimulateresponsevo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get conversation messages

> Code samples

```bash
curl https://example.com/api/rns/pub/subscriptions/123456789abc/conversation-message \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/rns/pub/subscriptions/{subscriptionId}/conversation-message`

Retrieve all conversation messages sent to a customer regarding a given subscription.

<h3 id="get-conversation-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|ID of the subscription.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
[
  {
    "attachmentNames": [
      "string"
    ],
    "body": "string",
    "date": "2021-08-31T22:50:53.564Z",
    "firstWords": "string",
    "from": {
      "aliasMaskType": "string",
      "conversationRelatedTo": "string",
      "conversationSubject": "string",
      "email": "string",
      "emailAlias": "string",
      "name": "string",
      "role": "string"
    },
    "hasAttachment": true,
    "id": "string",
    "subject": "string",
    "to": [
      {
        "aliasMaskType": "string",
        "conversationRelatedTo": "string",
        "conversationSubject": "string",
        "email": "string",
        "emailAlias": "string",
        "name": "string",
        "role": "string"
      }
    ]
  }
]
```

<h3 id="get-conversation-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-conversation-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» attachmentNames|[string]|false|none|Attachment names.|
|» body|string|false|none|HTML content of the message's body.|
|» date|string|false|none|Date of message.|
|» firstWords|string|false|none|First words of the message text.|
|» from|object|false|none|Information regarding the message sender.|
|» » aliasMaskType|string|false|none|Alias mask type.|
|» » conversationRelatedTo|string|false|none|ID of the subscription related to the message.|
|» » conversationSubject|string|false|none|Subject of conversation.|
|» » email|string|false|none|Email address.|
|» » emailAlias|string|false|none|Email alias.|
|» » name|string|false|none|Name.|
|» » role|string|false|none|Role.|
|» hasAttachment|boolean|false|none|Indicates whether the message has at least one attachment.|
|» id|string|false|none|Message ID|
|» subject|string|false|none|Message subject.|
|» to|[object]|false|none|Information regarding the message receivers.|
|» » aliasMaskType|string|false|none|Alias mask type.|
|» » conversationRelatedTo|string|false|none|ID of the subscription related to the message.|
|» » conversationSubject|string|false|none|Subject of conversation.|
|» » email|string|false|none|Email address.|
|» » emailAlias|string|false|none|Email alias.|
|» » name|string|false|none|Name.|
|» » role|string|false|none|Role.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="subscriptions-api-v3-settings">Settings</h1>

## Get Subscription Settings

<a id="opIdGetSettings"></a>

> Code samples

```bash
curl https://example.com/api/rns/settings \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/rns/settings`

List the details of the settings of a given subscription.

<h3 id="get-subscription-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
[
  {
    "defaultSla": null,
    "deliveryChannels": [
      "delivery"
    ],
    "executionHourInUtc": 9,
    "isMultipleInstallmentsEnabledOnCreation": false,
    "isMultipleInstallmentsEnabledOnUpdate": false,
    "isUsingV3": true,
    "manualPriceAllowed": false,
    "onMigrationProcess": false,
    "orderCustomDataAppId": null,
    "postponeExpiration": false,
    "randomIdGeneration": false,
    "slaOption": "NONE",
    "useItemPriceFromOriginalOrder": false,
    "workflowVersion": "1.1"
  }
]
```

<h3 id="get-subscription-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[settings](#schemasettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Edit Subscriptions settings

<a id="opIdEditSettings"></a>

> Code samples

```bash
curl https://example.com/api/rns/settings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '[
    {
      "defaultSla": null,
      "deliveryChannels": [
        "delivery"
      ],
      "executionHourInUtc": 9,
      "isMultipleInstallmentsEnabledOnCreation": false,
      "isMultipleInstallmentsEnabledOnUpdate": false,
      "isUsingV3": true,
      "manualPriceAllowed": false,
      "onMigrationProcess": false,
      "orderCustomDataAppId": null,
      "postponeExpiration": false,
      "randomIdGeneration": false,
      "slaOption": "NONE",
      "useItemPriceFromOriginalOrder": false,
      "workflowVersion": "1.1"
    }
  ]'
```

`POST /api/rns/settings`

Edits Subscriptions settings in your store.

> Body parameter

```json
[
  {
    "defaultSla": null,
    "deliveryChannels": [
      "delivery"
    ],
    "executionHourInUtc": 9,
    "isMultipleInstallmentsEnabledOnCreation": false,
    "isMultipleInstallmentsEnabledOnUpdate": false,
    "isUsingV3": true,
    "manualPriceAllowed": false,
    "onMigrationProcess": false,
    "orderCustomDataAppId": null,
    "postponeExpiration": false,
    "randomIdGeneration": false,
    "slaOption": "NONE",
    "useItemPriceFromOriginalOrder": false,
    "workflowVersion": "1.1"
  }
]
```

<h3 id="edit-subscriptions-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|body|body|[settings](#schemasettings)|true|Request body|
|» defaultSla|body|string \| null|true|Default delivery method.|
|» deliveryChannels|body|[string]|true|Array containing delivery channels.|
|» executionHourInUtc|body|integer|true|Indicates the time future subscription orders will be generated.|
|» isMultipleInstallmentsEnabledOnCreation|body|boolean|true|Defines whether or not multiple installments are enabled when a subscription is created.|
|» isMultipleInstallmentsEnabledOnUpdate|body|boolean|true|Defines whether or not multiple installments are enabled when a subscription is updated.|
|» isUsingV3|body|boolean|true|Indicates whether or not Subscriptions V3 is enabled.|
|» manualPriceAllowed|body|boolean|true|When set to `true`, this property enables manual price configuration in subscription items. This is valid for all existing subscriptions, provided that there is a manual price configured and that `isUsingV3` is `true`.|
|» onMigrationProcess|body|boolean|true|Indicates whether or not the account is in the migration process to Subscriptions V3.|
|» orderCustomDataAppId|body|string|true|When filled, this field passes along the `customData` infomration in the order to the future recurrent subscription orders.|
|» postponeExpiration|body|boolean|true|Defines whether or not the expiration of subscriptions can be postponed.|
|» randomIdGeneration|body|boolean|true|Defines whether or not the subscription order IDs will be randomly generated.|
|» slaOption|body|string|true|Delivery method.|
|» useItemPriceFromOriginalOrder|body|boolean|true|When set to `true`, this property enables using the manual price for each item from the original subscription order. This is only valid for new subscriptions, created from the moment this configuration is enabled. For this to work, it is mandatory that the `manualPriceAllowed` property is set to `true` and that `isUsingV3` is `true`.|
|» workflowVersion|body|string|true|Workflow version.|

> Example responses

> 200 Response

```json
[
  {
    "defaultSla": null,
    "deliveryChannels": [
      "delivery"
    ],
    "executionHourInUtc": 9,
    "isMultipleInstallmentsEnabledOnCreation": false,
    "isMultipleInstallmentsEnabledOnUpdate": false,
    "isUsingV3": true,
    "manualPriceAllowed": false,
    "onMigrationProcess": false,
    "orderCustomDataAppId": null,
    "postponeExpiration": false,
    "randomIdGeneration": false,
    "slaOption": "NONE",
    "useItemPriceFromOriginalOrder": false,
    "workflowVersion": "1.1"
  }
]
```

<h3 id="edit-subscriptions-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[settings](#schemasettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_Frequency">Frequency</h2>
<!-- backwards compatibility -->
<a id="schemafrequency"></a>
<a id="schema_Frequency"></a>
<a id="tocSfrequency"></a>
<a id="tocsfrequency"></a>

```json
{
  "interval": 0,
  "periodicity": 0,
  "periodicityAsString": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interval|integer(int32)|false|none|none|
|periodicity|[Periodicity](#schemaperiodicity)|false|none|none|
|periodicityAsString|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|periodicity|0|
|periodicity|1|
|periodicity|2|
|periodicity|3|
|periodicity|4|

<h2 id="tocS_FrequencyRequest">FrequencyRequest</h2>
<!-- backwards compatibility -->
<a id="schemafrequencyrequest"></a>
<a id="schema_FrequencyRequest"></a>
<a id="tocSfrequencyrequest"></a>
<a id="tocsfrequencyrequest"></a>

```json
{
  "interval": 3,
  "periodicity": "MONTHLY"
}
```

Information about subscriptions' recurrence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interval|integer(int32)|true|none|Time interval configured between subscription orders, which depends on the periodicity. For a `DAILY` periodicity, the value will be days, for `MONTHLY` it will be months, and so on.|
|periodicity|string \| null|true|none|Defines the subscriptions recurrence period. The possible values are: <br>- `DAILY` <br>- `WEEKLY` <br>- `MONTHLY` <br>- `YEARLY`|

<h2 id="tocS_FrequencyResponse">FrequencyResponse</h2>
<!-- backwards compatibility -->
<a id="schemafrequencyresponse"></a>
<a id="schema_FrequencyResponse"></a>
<a id="tocSfrequencyresponse"></a>
<a id="tocsfrequencyresponse"></a>

```json
{
  "interval": 0,
  "periodicity": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interval|integer(int32)|true|none|none|
|periodicity|string \| null|true|none|none|

<h2 id="tocS_ItemAttachment">ItemAttachment</h2>
<!-- backwards compatibility -->
<a id="schemaitemattachment"></a>
<a id="schema_ItemAttachment"></a>
<a id="tocSitemattachment"></a>
<a id="tocsitemattachment"></a>

```json
{
  "content": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|object \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_ItemSimulationStatus">ItemSimulationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaitemsimulationstatus"></a>
<a id="schema_ItemSimulationStatus"></a>
<a id="tocSitemsimulationstatus"></a>
<a id="tocsitemsimulationstatus"></a>

```json
0
```

<h2 id="tocS_LogisticsInfo">LogisticsInfo</h2>
<!-- backwards compatibility -->
<a id="schemalogisticsinfo"></a>
<a id="schema_LogisticsInfo"></a>
<a id="tocSlogisticsinfo"></a>
<a id="tocslogisticsinfo"></a>

```json
{
  "addressId": "string",
  "deliveryWindow": {
    "endDateUtc": "1970-01-01T00:00:00Z",
    "price": 0,
    "startDateUtc": "1970-01-01T00:00:00Z"
  },
  "itemIndex": 0,
  "lockTtl": "string",
  "pickupId": "string",
  "price": 0,
  "quantity": 5,
  "selectedDeliveryChannel": "string",
  "selectedSla": "string",
  "shippingEstimate": "string",
  "slAs": [
    {
      "availableDeliveryWindows": [
        {
          "endDateUtc": "1970-01-01T00:00:00Z",
          "price": 0,
          "startDateUtc": "1970-01-01T00:00:00Z"
        }
      ],
      "deliveryChannel": "string",
      "deliveryWindows": [
        {
          "endDateUtc": "1970-01-01T00:00:00Z",
          "price": 0,
          "startDateUtc": "1970-01-01T00:00:00Z"
        }
      ],
      "id": "string",
      "lockTtl": "string",
      "pickupPointId": "string",
      "price": 0,
      "shippingEstimate": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressId|string \| null|false|none|none|
|deliveryWindow|[LogisticsInfoDeliveryWindow](#schemalogisticsinfodeliverywindow)|false|none|none|
|itemIndex|integer(int32)|false|none|none|
|lockTtl|string \| null|false|none|none|
|pickupId|string \| null|false|none|none|
|price|integer(int32)|false|none|none|
|quantity|integer(int32)|false|none|Amount of units in the cart.|
|selectedDeliveryChannel|string \| null|false|none|none|
|selectedSla|string \| null|false|none|none|
|shippingEstimate|string \| null|false|none|none|
|slAs|[[LogisticsInfoSLA](#schemalogisticsinfosla)]|false|none|none|

<h2 id="tocS_LogisticsInfoDeliveryWindow">LogisticsInfoDeliveryWindow</h2>
<!-- backwards compatibility -->
<a id="schemalogisticsinfodeliverywindow"></a>
<a id="schema_LogisticsInfoDeliveryWindow"></a>
<a id="tocSlogisticsinfodeliverywindow"></a>
<a id="tocslogisticsinfodeliverywindow"></a>

```json
{
  "endDateUtc": "1970-01-01T00:00:00Z",
  "price": 0,
  "startDateUtc": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDateUtc|string(date-time)|false|none|none|
|price|integer(int64)|false|none|none|
|startDateUtc|string(date-time)|false|none|none|

<h2 id="tocS_LogisticsInfoSLA">LogisticsInfoSLA</h2>
<!-- backwards compatibility -->
<a id="schemalogisticsinfosla"></a>
<a id="schema_LogisticsInfoSLA"></a>
<a id="tocSlogisticsinfosla"></a>
<a id="tocslogisticsinfosla"></a>

```json
{
  "availableDeliveryWindows": [
    {
      "endDateUtc": "1970-01-01T00:00:00Z",
      "price": 0,
      "startDateUtc": "1970-01-01T00:00:00Z"
    }
  ],
  "deliveryChannel": "string",
  "deliveryWindows": [
    {
      "endDateUtc": "1970-01-01T00:00:00Z",
      "price": 0,
      "startDateUtc": "1970-01-01T00:00:00Z"
    }
  ],
  "id": "string",
  "lockTtl": "string",
  "pickupPointId": "string",
  "price": 0,
  "shippingEstimate": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableDeliveryWindows|[[LogisticsInfoDeliveryWindow](#schemalogisticsinfodeliverywindow)]|false|none|none|
|deliveryChannel|string \| null|false|none|none|
|deliveryWindows|[[LogisticsInfoDeliveryWindow](#schemalogisticsinfodeliverywindow)]|false|none|none|
|id|string \| null|false|none|none|
|lockTtl|string \| null|false|none|none|
|pickupPointId|string \| null|false|none|none|
|price|integer(int32)|false|none|none|
|shippingEstimate|string \| null|false|none|none|

<h2 id="tocS_OrderItem">OrderItem</h2>
<!-- backwards compatibility -->
<a id="schemaorderitem"></a>
<a id="schema_OrderItem"></a>
<a id="tocSorderitem"></a>
<a id="tocsorderitem"></a>

```json
{
  "attachments": [
    {
      "content": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string"
    }
  ],
  "id": "string",
  "isGift": true,
  "name": "string",
  "price": 0,
  "priceTags": [
    {
      "identifier": "string",
      "isPercentual": true,
      "name": "string",
      "rawValue": 0,
      "valueAsInt": 0
    }
  ],
  "quantity": 5,
  "seller": "string",
  "sellingPrice": 0,
  "unitMultiplier": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[ItemAttachment](#schemaitemattachment)]|false|none|none|
|id|string \| null|false|none|none|
|isGift|boolean|false|none|none|
|name|string \| null|false|none|none|
|price|integer(int64) \| null|false|none|none|
|priceTags|[[PriceTag](#schemapricetag)]|false|none|none|
|quantity|integer(int32)|false|none|Amount of units in the cart.|
|seller|string \| null|false|none|none|
|sellingPrice|integer(int64) \| null|false|none|none|
|unitMultiplier|number(double) \| null|false|none|none|

<h2 id="tocS_Payment">Payment</h2>
<!-- backwards compatibility -->
<a id="schemapayment"></a>
<a id="schema_Payment"></a>
<a id="tocSpayment"></a>
<a id="tocspayment"></a>

```json
{
  "accountId": "string",
  "bin": "string",
  "cardNumber": "string",
  "fields": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "group": "string",
  "id": "string",
  "installments": 0,
  "parentAccountId": "string",
  "paymentSystem": "string",
  "referenceValue": 0,
  "url": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string \| null|false|none|none|
|bin|string \| null|false|none|none|
|cardNumber|string \| null|false|none|none|
|fields|[[PaymentField](#schemapaymentfield)]|false|none|none|
|group|string \| null|false|none|none|
|id|string \| null|false|none|none|
|installments|integer(int32)|false|none|none|
|parentAccountId|string \| null|false|none|none|
|paymentSystem|string \| null|false|none|none|
|referenceValue|integer(int64)|false|none|none|
|url|string \| null|false|none|none|
|value|integer(int64)|false|none|none|

<h2 id="tocS_PaymentData">PaymentData</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdata"></a>
<a id="schema_PaymentData"></a>
<a id="tocSpaymentdata"></a>
<a id="tocspaymentdata"></a>

```json
{
  "payments": [
    {
      "accountId": "string",
      "bin": "string",
      "cardNumber": "string",
      "fields": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "group": "string",
      "id": "string",
      "installments": 0,
      "parentAccountId": "string",
      "paymentSystem": "string",
      "referenceValue": 0,
      "url": "string",
      "value": 0
    }
  ],
  "transactions": [
    {
      "isActive": true,
      "payments": [
        {
          "accountId": "string",
          "bin": "string",
          "cardNumber": "string",
          "fields": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "group": "string",
          "id": "string",
          "installments": 0,
          "parentAccountId": "string",
          "paymentSystem": "string",
          "referenceValue": 0,
          "url": "string",
          "value": 0
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payments|[[Payment](#schemapayment)]|false|none|none|
|transactions|[[Transaction](#schematransaction)]|false|none|none|

<h2 id="tocS_PaymentField">PaymentField</h2>
<!-- backwards compatibility -->
<a id="schemapaymentfield"></a>
<a id="schema_PaymentField"></a>
<a id="tocSpaymentfield"></a>
<a id="tocspaymentfield"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|value|string \| null|false|none|none|

<h2 id="tocS_PaymentMethodResponse">PaymentMethodResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethodresponse"></a>
<a id="schema_PaymentMethodResponse"></a>
<a id="tocSpaymentmethodresponse"></a>
<a id="tocspaymentmethodresponse"></a>

```json
{
  "installments": 0,
  "paymentAccountId": "string",
  "paymentSystem": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|installments|integer(int32) \| null|false|none|none|
|paymentAccountId|string \| null|false|none|none|
|paymentSystem|string \| null|true|none|none|

<h2 id="tocS_PaymentMethodThinRequest">PaymentMethodThinRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethodthinrequest"></a>
<a id="schema_PaymentMethodThinRequest"></a>
<a id="tocSpaymentmethodthinrequest"></a>
<a id="tocspaymentmethodthinrequest"></a>

```json
{
  "installments": 3,
  "paymentAccountId": "340357032569595",
  "paymentSystem": "4"
}
```

Object containing information about the payment method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|installments|integer(int32) \| null|false|none|Number of payment installments.|
|paymentAccountId|string \| null|false|none|Data about shoppers' profiles and documents. For example, their credit card number. To obtain that information, use the endpoint [Get client profile by email](https://developers.vtex.com/docs/api-reference/checkout-api#get-/api/checkout/pub/profiles).|
|paymentSystem|string \| null|true|none|Payment system's ID.|

<h2 id="tocS_Periodicity">Periodicity</h2>
<!-- backwards compatibility -->
<a id="schemaperiodicity"></a>
<a id="schema_Periodicity"></a>
<a id="tocSperiodicity"></a>
<a id="tocsperiodicity"></a>

```json
0
```

<h2 id="tocS_PlanResponse">PlanResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplanresponse"></a>
<a id="schema_PlanResponse"></a>
<a id="tocSplanresponse"></a>
<a id="tocsplanresponse"></a>

```json
{
  "frequency": {
    "interval": 0,
    "periodicity": "string"
  },
  "id": "string",
  "purchaseDay": 0,
  "validity": {
    "begin": "1970-01-01T00:00:00Z",
    "end": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequency|[FrequencyResponse](#schemafrequencyresponse)|true|none|none|
|id|string \| null|true|none|none|
|purchaseDay|[PurchaseDay](#schemapurchaseday)|true|none|none|
|validity|[ValidityResponse](#schemavalidityresponse)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|purchaseDay|0|
|purchaseDay|1|
|purchaseDay|2|
|purchaseDay|3|
|purchaseDay|4|
|purchaseDay|5|
|purchaseDay|6|
|purchaseDay|7|
|purchaseDay|8|
|purchaseDay|9|
|purchaseDay|10|
|purchaseDay|11|
|purchaseDay|12|
|purchaseDay|13|
|purchaseDay|14|
|purchaseDay|15|
|purchaseDay|16|
|purchaseDay|17|
|purchaseDay|18|
|purchaseDay|19|
|purchaseDay|20|
|purchaseDay|21|
|purchaseDay|22|
|purchaseDay|23|
|purchaseDay|24|
|purchaseDay|25|
|purchaseDay|26|
|purchaseDay|27|
|purchaseDay|28|
|purchaseDay|29|
|purchaseDay|30|
|purchaseDay|31|
|purchaseDay|999|
|purchaseDay|-6|
|purchaseDay|-5|
|purchaseDay|-4|
|purchaseDay|-3|
|purchaseDay|-2|
|purchaseDay|-1|

<h2 id="tocS_PlanThinRequest">PlanThinRequest</h2>
<!-- backwards compatibility -->
<a id="schemaplanthinrequest"></a>
<a id="schema_PlanThinRequest"></a>
<a id="tocSplanthinrequest"></a>
<a id="tocsplanthinrequest"></a>

```json
{
  "frequency": {
    "interval": 3,
    "periodicity": "MONTHLY"
  },
  "id": "store.subscription",
  "purchaseDay": "15",
  "validity": {
    "begin": "2022-06-10T00:00:00",
    "end": "2023-06-10T00:00:00"
  }
}
```

Information about the plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequency|[FrequencyRequest](#schemafrequencyrequest)|true|none|Information about subscriptions' recurrence.|
|id|string \| null|true|none|ID of the plan.|
|purchaseDay|string \| null|true|none|Day in which recurrent orders will be created.|
|validity|[ValidityRequest](#schemavalidityrequest)|false|none|Information about the period during which the subscription will be valid.|

<h2 id="tocS_PriceTag">PriceTag</h2>
<!-- backwards compatibility -->
<a id="schemapricetag"></a>
<a id="schema_PriceTag"></a>
<a id="tocSpricetag"></a>
<a id="tocspricetag"></a>

```json
{
  "identifier": "string",
  "isPercentual": true,
  "name": "string",
  "rawValue": 0,
  "valueAsInt": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|string \| null|false|none|none|
|isPercentual|boolean|false|none|none|
|name|string \| null|false|none|none|
|rawValue|number(double)|false|none|none|
|valueAsInt|integer(int64)|false|none|none|

<h2 id="tocS_PurchaseContextAvailableGiftResponse">PurchaseContextAvailableGiftResponse</h2>
<!-- backwards compatibility -->
<a id="schemapurchasecontextavailablegiftresponse"></a>
<a id="schema_PurchaseContextAvailableGiftResponse"></a>
<a id="tocSpurchasecontextavailablegiftresponse"></a>
<a id="tocspurchasecontextavailablegiftresponse"></a>

```json
{
  "attachments": [
    {
      "content": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string"
    }
  ],
  "id": "string",
  "isGift": true,
  "isSelected": true,
  "name": "string",
  "price": 0,
  "priceTags": [
    {
      "identifier": "string",
      "isPercentual": true,
      "name": "string",
      "rawValue": 0,
      "valueAsInt": 0
    }
  ],
  "quantity": 5,
  "seller": "string",
  "sellingPrice": 0,
  "unitMultiplier": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[ItemAttachment](#schemaitemattachment)]|false|none|none|
|id|string \| null|false|none|none|
|isGift|boolean|false|none|none|
|isSelected|boolean|false|none|none|
|name|string \| null|false|none|none|
|price|integer(int64) \| null|false|none|none|
|priceTags|[[PriceTag](#schemapricetag)]|false|none|none|
|quantity|integer(int32)|false|none|Amount of units in the cart.|
|seller|string \| null|false|none|none|
|sellingPrice|integer(int64) \| null|false|none|none|
|unitMultiplier|number(double) \| null|false|none|none|

<h2 id="tocS_PurchaseContextSelectableGiftsResponse">PurchaseContextSelectableGiftsResponse</h2>
<!-- backwards compatibility -->
<a id="schemapurchasecontextselectablegiftsresponse"></a>
<a id="schema_PurchaseContextSelectableGiftsResponse"></a>
<a id="tocSpurchasecontextselectablegiftsresponse"></a>
<a id="tocspurchasecontextselectablegiftsresponse"></a>

```json
{
  "availableGifts": [
    {
      "attachments": [
        {
          "content": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string"
        }
      ],
      "id": "string",
      "isGift": true,
      "isSelected": true,
      "name": "string",
      "price": 0,
      "priceTags": [
        {
          "identifier": "string",
          "isPercentual": true,
          "name": "string",
          "rawValue": 0,
          "valueAsInt": 0
        }
      ],
      "quantity": 5,
      "seller": "string",
      "sellingPrice": 0,
      "unitMultiplier": 0
    }
  ],
  "availableQuantity": 0,
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableGifts|[[PurchaseContextAvailableGiftResponse](#schemapurchasecontextavailablegiftresponse)]|false|none|none|
|availableQuantity|integer(int32)|false|none|none|
|id|string \| null|false|none|none|

<h2 id="tocS_PurchaseDay">PurchaseDay</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseday"></a>
<a id="schema_PurchaseDay"></a>
<a id="tocSpurchaseday"></a>
<a id="tocspurchaseday"></a>

```json
0
```

<h2 id="tocS_PurchaseSettingsResponse">PurchaseSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemapurchasesettingsresponse"></a>
<a id="schema_PurchaseSettingsResponse"></a>
<a id="tocSpurchasesettingsresponse"></a>
<a id="tocspurchasesettingsresponse"></a>

```json
{
  "currencyCode": "string",
  "paymentMethod": {
    "installments": 0,
    "paymentAccountId": "string",
    "paymentSystem": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string \| null|true|none|none|
|paymentMethod|[PaymentMethodResponse](#schemapaymentmethodresponse)|true|none|none|

<h2 id="tocS_PurchaseSettingsThinRequest">PurchaseSettingsThinRequest</h2>
<!-- backwards compatibility -->
<a id="schemapurchasesettingsthinrequest"></a>
<a id="schema_PurchaseSettingsThinRequest"></a>
<a id="tocSpurchasesettingsthinrequest"></a>
<a id="tocspurchasesettingsthinrequest"></a>

```json
{
  "paymentMethod": {
    "installments": 3,
    "paymentAccountId": "340357032569595",
    "paymentSystem": "4"
  },
  "salesChannel": "1"
}
```

Object containing purchase settings information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentMethod|[PaymentMethodThinRequest](#schemapaymentmethodthinrequest)|true|none|Object containing information about the payment method.|
|salesChannel|string|true|none|Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) applied to the subscription being created. You can associate only one sales channel to each subscription. The default value is the main sales channel, which corresponds to `1`.|

<h2 id="tocS_ReportResponse">ReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemareportresponse"></a>
<a id="schema_ReportResponse"></a>
<a id="tocSreportresponse"></a>
<a id="tocsreportresponse"></a>

```json
{
  "canceled": true,
  "completedDate": "1970-01-01T00:00:00Z",
  "email": "string",
  "enqueueDate": "1970-01-01T00:00:00Z",
  "errorCount": 0,
  "finished": true,
  "id": "string",
  "lastErrorMessage": "string",
  "lastUpdateTime": "1970-01-01T00:00:00Z",
  "linkToDownload": "string",
  "outputType": "string",
  "percentageProcessed": 0,
  "recordsProcessed": 0,
  "recordsSum": 0,
  "startDate": "1970-01-01T00:00:00Z",
  "statusMessage": "string",
  "zipped": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canceled|boolean|false|none|none|
|completedDate|string(date-time) \| null|false|none|none|
|email|string \| null|false|none|none|
|enqueueDate|string(date-time) \| null|false|none|none|
|errorCount|integer(int64) \| null|false|none|none|
|finished|boolean|false|none|none|
|id|string \| null|false|none|none|
|lastErrorMessage|string \| null|false|none|none|
|lastUpdateTime|string(date-time) \| null|false|none|none|
|linkToDownload|string \| null|false|none|none|
|outputType|string \| null|false|none|none|
|percentageProcessed|integer(int64)|false|none|none|
|recordsProcessed|integer(int64)|false|read-only|none|
|recordsSum|integer(int64) \| null|false|none|none|
|startDate|string(date-time) \| null|false|none|none|
|statusMessage|string \| null|false|read-only|none|
|zipped|boolean|false|none|none|

<h2 id="tocS_ShippingAddressResponse">ShippingAddressResponse</h2>
<!-- backwards compatibility -->
<a id="schemashippingaddressresponse"></a>
<a id="schema_ShippingAddressResponse"></a>
<a id="tocSshippingaddressresponse"></a>
<a id="tocsshippingaddressresponse"></a>

```json
{
  "addressId": "string",
  "addressType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressId|string \| null|true|none|none|
|addressType|string \| null|true|none|none|

<h2 id="tocS_ShippingEstimate">ShippingEstimate</h2>
<!-- backwards compatibility -->
<a id="schemashippingestimate"></a>
<a id="schema_ShippingEstimate"></a>
<a id="tocSshippingestimate"></a>
<a id="tocsshippingestimate"></a>

```json
{
  "allItemsMatched": true,
  "estimate": "string",
  "estimateDeliveryDate": "1970-01-01T00:00:00Z",
  "name": "string",
  "nextPurchaseDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allItemsMatched|boolean|false|none|none|
|estimate|string \| null|false|none|none|
|estimateDeliveryDate|string(date-time) \| null|false|none|none|
|name|string \| null|false|none|none|
|nextPurchaseDate|string(date-time)|false|none|none|

<h2 id="tocS_SimulateMessageResponse">SimulateMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemasimulatemessageresponse"></a>
<a id="schema_SimulateMessageResponse"></a>
<a id="tocSsimulatemessageresponse"></a>
<a id="tocssimulatemessageresponse"></a>

```json
{
  "code": "string",
  "status": "string",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|none|none|
|status|string \| null|false|none|none|
|text|string \| null|false|none|none|

<h2 id="tocS_SimulateResponse">SimulateResponse</h2>
<!-- backwards compatibility -->
<a id="schemasimulateresponse"></a>
<a id="schema_SimulateResponse"></a>
<a id="tocSsimulateresponse"></a>
<a id="tocssimulateresponse"></a>

```json
{
  "country": "string",
  "items": [
    {
      "attachments": [
        {
          "content": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string"
        }
      ],
      "id": "string",
      "isGift": true,
      "name": "string",
      "price": 0,
      "priceTags": [
        {
          "identifier": "string",
          "isPercentual": true,
          "name": "string",
          "rawValue": 0,
          "valueAsInt": 0
        }
      ],
      "quantity": 5,
      "seller": "string",
      "sellingPrice": 0,
      "unitMultiplier": 0
    }
  ],
  "logisticsInfo": [
    {
      "addressId": "string",
      "deliveryWindow": {
        "endDateUtc": "1970-01-01T00:00:00Z",
        "price": 0,
        "startDateUtc": "1970-01-01T00:00:00Z"
      },
      "itemIndex": 0,
      "lockTtl": "string",
      "pickupId": "string",
      "price": 0,
      "quantity": 5,
      "selectedDeliveryChannel": "string",
      "selectedSla": "string",
      "shippingEstimate": "string",
      "slAs": [
        {
          "availableDeliveryWindows": [
            {
              "endDateUtc": "1970-01-01T00:00:00Z",
              "price": 0,
              "startDateUtc": "1970-01-01T00:00:00Z"
            }
          ],
          "deliveryChannel": "string",
          "deliveryWindows": [
            {
              "endDateUtc": "1970-01-01T00:00:00Z",
              "price": 0,
              "startDateUtc": "1970-01-01T00:00:00Z"
            }
          ],
          "id": "string",
          "lockTtl": "string",
          "pickupPointId": "string",
          "price": 0,
          "shippingEstimate": "string"
        }
      ]
    }
  ],
  "messages": [
    {
      "code": "string",
      "status": "string",
      "text": "string"
    }
  ],
  "paymentData": {
    "payments": [
      {
        "accountId": "string",
        "bin": "string",
        "cardNumber": "string",
        "fields": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "group": "string",
        "id": "string",
        "installments": 0,
        "parentAccountId": "string",
        "paymentSystem": "string",
        "referenceValue": 0,
        "url": "string",
        "value": 0
      }
    ],
    "transactions": [
      {
        "isActive": true,
        "payments": [
          {
            "accountId": "string",
            "bin": "string",
            "cardNumber": "string",
            "fields": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "group": "string",
            "id": "string",
            "installments": 0,
            "parentAccountId": "string",
            "paymentSystem": "string",
            "referenceValue": 0,
            "url": "string",
            "value": 0
          }
        ]
      }
    ]
  },
  "postalCode": "string",
  "selectableGiftsResponse": [
    {
      "availableGifts": [
        {
          "attachments": [
            {
              "content": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string"
            }
          ],
          "id": "string",
          "isGift": true,
          "isSelected": true,
          "name": "string",
          "price": 0,
          "priceTags": [
            {
              "identifier": "string",
              "isPercentual": true,
              "name": "string",
              "rawValue": 0,
              "valueAsInt": 0
            }
          ],
          "quantity": 5,
          "seller": "string",
          "sellingPrice": 0,
          "unitMultiplier": 0
        }
      ],
      "availableQuantity": 0,
      "id": "string"
    }
  ],
  "simulationItems": [
    {
      "id": "string",
      "quantity": 5,
      "status": 0,
      "statusName": "string",
      "unitPrice": 0
    }
  ],
  "totals": [
    {
      "id": "string",
      "name": "string",
      "valueAsInt": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string \| null|false|none|none|
|items|[[OrderItem](#schemaorderitem)]|false|none|none|
|logisticsInfo|[[LogisticsInfo](#schemalogisticsinfo)]|false|none|none|
|messages|[[SimulateMessageResponse](#schemasimulatemessageresponse)]|false|none|none|
|paymentData|[PaymentData](#schemapaymentdata)|false|none|none|
|postalCode|string \| null|false|none|none|
|selectableGiftsResponse|[[PurchaseContextSelectableGiftsResponse](#schemapurchasecontextselectablegiftsresponse)]|false|none|none|
|simulationItems|[[SimulationItemResult](#schemasimulationitemresult)]|false|none|none|
|totals|[[TotalizationResponse](#schematotalizationresponse)]|false|none|none|

<h2 id="tocS_SimulateResponseVO">SimulateResponseVO</h2>
<!-- backwards compatibility -->
<a id="schemasimulateresponsevo"></a>
<a id="schema_SimulateResponseVO"></a>
<a id="tocSsimulateresponsevo"></a>
<a id="tocssimulateresponsevo"></a>

```json
{
  "shippingEstimate": {
    "allItemsMatched": true,
    "estimate": "string",
    "estimateDeliveryDate": "1970-01-01T00:00:00Z",
    "name": "string",
    "nextPurchaseDate": "1970-01-01T00:00:00Z"
  },
  "simulateResponse": {
    "country": "string",
    "items": [
      {
        "attachments": [
          {
            "content": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string"
          }
        ],
        "id": "string",
        "isGift": true,
        "name": "string",
        "price": 0,
        "priceTags": [
          {
            "identifier": "string",
            "isPercentual": true,
            "name": "string",
            "rawValue": 0,
            "valueAsInt": 0
          }
        ],
        "quantity": 5,
        "seller": "string",
        "sellingPrice": 0,
        "unitMultiplier": 0
      }
    ],
    "logisticsInfo": [
      {
        "addressId": "string",
        "deliveryWindow": {
          "endDateUtc": "1970-01-01T00:00:00Z",
          "price": 0,
          "startDateUtc": "1970-01-01T00:00:00Z"
        },
        "itemIndex": 0,
        "lockTtl": "string",
        "pickupId": "string",
        "price": 0,
        "quantity": 5,
        "selectedDeliveryChannel": "string",
        "selectedSla": "string",
        "shippingEstimate": "string",
        "slAs": [
          {
            "availableDeliveryWindows": [
              {
                "endDateUtc": "1970-01-01T00:00:00Z",
                "price": 0,
                "startDateUtc": "1970-01-01T00:00:00Z"
              }
            ],
            "deliveryChannel": "string",
            "deliveryWindows": [
              {
                "endDateUtc": "1970-01-01T00:00:00Z",
                "price": 0,
                "startDateUtc": "1970-01-01T00:00:00Z"
              }
            ],
            "id": "string",
            "lockTtl": "string",
            "pickupPointId": "string",
            "price": 0,
            "shippingEstimate": "string"
          }
        ]
      }
    ],
    "messages": [
      {
        "code": "string",
        "status": "string",
        "text": "string"
      }
    ],
    "paymentData": {
      "payments": [
        {
          "accountId": "string",
          "bin": "string",
          "cardNumber": "string",
          "fields": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "group": "string",
          "id": "string",
          "installments": 0,
          "parentAccountId": "string",
          "paymentSystem": "string",
          "referenceValue": 0,
          "url": "string",
          "value": 0
        }
      ],
      "transactions": [
        {
          "isActive": true,
          "payments": [
            {
              "accountId": "string",
              "bin": "string",
              "cardNumber": "string",
              "fields": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "group": "string",
              "id": "string",
              "installments": 0,
              "parentAccountId": "string",
              "paymentSystem": "string",
              "referenceValue": 0,
              "url": "string",
              "value": 0
            }
          ]
        }
      ]
    },
    "postalCode": "string",
    "selectableGiftsResponse": [
      {
        "availableGifts": [
          {
            "attachments": [
              {
                "content": {
                  "property1": "string",
                  "property2": "string"
                },
                "name": "string"
              }
            ],
            "id": "string",
            "isGift": true,
            "isSelected": true,
            "name": "string",
            "price": 0,
            "priceTags": [
              {
                "identifier": "string",
                "isPercentual": true,
                "name": "string",
                "rawValue": 0,
                "valueAsInt": 0
              }
            ],
            "quantity": 5,
            "seller": "string",
            "sellingPrice": 0,
            "unitMultiplier": 0
          }
        ],
        "availableQuantity": 0,
        "id": "string"
      }
    ],
    "simulationItems": [
      {
        "id": "string",
        "quantity": 5,
        "status": 0,
        "statusName": "string",
        "unitPrice": 0
      }
    ],
    "totals": [
      {
        "id": "string",
        "name": "string",
        "valueAsInt": 0
      }
    ]
  },
  "simulationItems": [
    {
      "id": "string",
      "quantity": 5,
      "status": 0,
      "statusName": "string",
      "unitPrice": 0
    }
  ],
  "totals": [
    {
      "id": "string",
      "value": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shippingEstimate|[ShippingEstimate](#schemashippingestimate)|false|none|none|
|simulateResponse|[SimulateResponse](#schemasimulateresponse)|false|none|none|
|simulationItems|[[SimulationItemResult](#schemasimulationitemresult)]|false|none|none|
|totals|[[Totalization](#schematotalization)]|false|none|none|

<h2 id="tocS_SimulationItemResult">SimulationItemResult</h2>
<!-- backwards compatibility -->
<a id="schemasimulationitemresult"></a>
<a id="schema_SimulationItemResult"></a>
<a id="tocSsimulationitemresult"></a>
<a id="tocssimulationitemresult"></a>

```json
{
  "id": "string",
  "quantity": 5,
  "status": 0,
  "statusName": "string",
  "unitPrice": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|quantity|integer(int32)|false|none|Amount of units in the cart.|
|status|[ItemSimulationStatus](#schemaitemsimulationstatus)|false|none|none|
|statusName|string \| null|false|none|none|
|unitPrice|integer(int64) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|0|
|status|1|
|status|2|
|status|3|
|status|4|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
0
```

<h2 id="tocS_StorePlan">StorePlan</h2>
<!-- backwards compatibility -->
<a id="schemastoreplan"></a>
<a id="schema_StorePlan"></a>
<a id="tocSstoreplan"></a>
<a id="tocsstoreplan"></a>

```json
{
  "frequencies": [
    {
      "interval": 0,
      "periodicity": 0,
      "periodicityAsString": "string"
    }
  ],
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequencies|[[Frequency](#schemafrequency)]|false|none|none|
|id|string \| null|false|none|none|

<h2 id="tocS_SubscriptionCycleContext">SubscriptionCycleContext</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptioncyclecontext"></a>
<a id="schema_SubscriptionCycleContext"></a>
<a id="tocSsubscriptioncyclecontext"></a>
<a id="tocssubscriptioncyclecontext"></a>

```json
{
  "addressId": "string",
  "addressType": "string",
  "items": [
    {
      "cycleCount": 0,
      "isSkipped": true,
      "quantity": 5,
      "skuId": "12",
      "status": 0,
      "subscriptionItemId": "string"
    }
  ],
  "paymentAccountId": "string",
  "paymentSystem": "string",
  "paymentSystemGroup": "string",
  "paymentSystemName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressId|string \| null|false|none|none|
|addressType|string \| null|false|none|none|
|items|[[SubscriptionCycleItemContext](#schemasubscriptioncycleitemcontext)]|false|none|none|
|paymentAccountId|string \| null|false|none|none|
|paymentSystem|string \| null|false|none|none|
|paymentSystemGroup|string \| null|false|none|none|
|paymentSystemName|string \| null|false|none|none|

<h2 id="tocS_SubscriptionCycleItemContext">SubscriptionCycleItemContext</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptioncycleitemcontext"></a>
<a id="schema_SubscriptionCycleItemContext"></a>
<a id="tocSsubscriptioncycleitemcontext"></a>
<a id="tocssubscriptioncycleitemcontext"></a>

```json
{
  "cycleCount": 0,
  "isSkipped": true,
  "quantity": 5,
  "skuId": "12",
  "status": 0,
  "subscriptionItemId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cycleCount|integer(int32)|false|none|none|
|isSkipped|boolean|false|none|none|
|quantity|integer(int32)|false|none|Amount of units in the cart.|
|skuId|string \| null|false|none|SKU ID.|
|status|[Status](#schemastatus)|false|none|none|
|subscriptionItemId|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|0|
|status|1|
|status|2|
|status|3|

<h2 id="tocS_SubscriptionCycleOrderInfo">SubscriptionCycleOrderInfo</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptioncycleorderinfo"></a>
<a id="schema_SubscriptionCycleOrderInfo"></a>
<a id="tocSsubscriptioncycleorderinfo"></a>
<a id="tocssubscriptioncycleorderinfo"></a>

```json
{
  "orderGroup": "string",
  "orderId": "string",
  "paymentURL": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orderGroup|string \| null|false|none|none|
|orderId|string \| null|false|none|none|
|paymentURL|string \| null|false|none|none|
|value|integer(int64)|false|none|none|

<h2 id="tocS_SubscriptionCycleResponse">SubscriptionCycleResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptioncycleresponse"></a>
<a id="schema_SubscriptionCycleResponse"></a>
<a id="tocSsubscriptioncycleresponse"></a>
<a id="tocssubscriptioncycleresponse"></a>

```json
{
  "context": {
    "addressId": "string",
    "addressType": "string",
    "items": [
      {
        "cycleCount": 0,
        "isSkipped": true,
        "quantity": 5,
        "skuId": "12",
        "status": 0,
        "subscriptionItemId": "string"
      }
    ],
    "paymentAccountId": "string",
    "paymentSystem": "string",
    "paymentSystemGroup": "string",
    "paymentSystemName": "string"
  },
  "customerEmail": "string",
  "cycleCount": 0,
  "date": "1970-01-01T00:00:00Z",
  "id": "string",
  "isInRetry": true,
  "lastUpdate": "1970-01-01T00:00:00Z",
  "message": "string",
  "orderInfo": {
    "orderGroup": "string",
    "orderId": "string",
    "paymentURL": "string",
    "value": 0
  },
  "simulationItems": [
    {
      "id": "string",
      "quantity": 5,
      "status": 0,
      "statusName": "string",
      "unitPrice": 0
    }
  ],
  "status": "string",
  "subscriptionId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[SubscriptionCycleContext](#schemasubscriptioncyclecontext)|false|none|none|
|customerEmail|string \| null|false|none|none|
|cycleCount|integer(int32)|false|none|none|
|date|string(date-time)|false|none|none|
|id|string \| null|false|none|none|
|isInRetry|boolean|false|none|none|
|lastUpdate|string(date-time)|false|none|none|
|message|string \| null|false|none|none|
|orderInfo|[SubscriptionCycleOrderInfo](#schemasubscriptioncycleorderinfo)|false|none|none|
|simulationItems|[[SimulationItemResult](#schemasimulationitemresult)]|false|none|none|
|status|string \| null|false|none|none|
|subscriptionId|string \| null|false|none|none|

<h2 id="tocS_SubscriptionGroupRequest">SubscriptionGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptiongrouprequest"></a>
<a id="schema_SubscriptionGroupRequest"></a>
<a id="tocSsubscriptiongrouprequest"></a>
<a id="tocssubscriptiongrouprequest"></a>

```json
{
  "catalogAttachment": "string",
  "customerEmail": "string",
  "items": [
    {
      "manualPrice": 40,
      "quantity": 5,
      "skuId": "12"
    }
  ],
  "nextPurchaseDate": "1970-01-01T00:00:00Z",
  "plan": {
    "frequency": {
      "interval": 3,
      "periodicity": "MONTHLY"
    },
    "id": "store.subscription",
    "purchaseDay": "15",
    "validity": {
      "begin": "2022-06-10T00:00:00",
      "end": "2023-06-10T00:00:00"
    }
  },
  "purchaseSettings": {
    "paymentMethod": {
      "installments": 3,
      "paymentAccountId": "340357032569595",
      "paymentSystem": "4"
    },
    "salesChannel": "1"
  },
  "shippingAddress": {
    "addressId": "8109266555005",
    "addressType": "residential"
  },
  "status": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalogAttachment|string \| null|false|none|none|
|customerEmail|string \| null|true|none|none|
|items|[[SubscriptionThinItemRequest](#schemasubscriptionthinitemrequest)]|true|none|none|
|nextPurchaseDate|string(date-time) \| null|false|none|none|
|plan|[PlanThinRequest](#schemaplanthinrequest)|true|none|Information about the plan.|
|purchaseSettings|[PurchaseSettingsThinRequest](#schemapurchasesettingsthinrequest)|true|none|Object containing purchase settings information.|
|shippingAddress|[shippingAddress](#schemashippingaddress)|true|none|none|
|status|string \| null|false|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_SubscriptionGroupResponse">SubscriptionGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptiongroupresponse"></a>
<a id="schema_SubscriptionGroupResponse"></a>
<a id="tocSsubscriptiongroupresponse"></a>
<a id="tocssubscriptiongroupresponse"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "customerEmail": "string",
  "customerId": "string",
  "cycleCount": 0,
  "id": "string",
  "isSkipped": true,
  "items": [
    {
      "id": "string",
      "isSkipped": true,
      "manualPrice": 40,
      "originalOrderId": "string",
      "quantity": 5,
      "skuId": "12",
      "status": "string"
    }
  ],
  "lastPurchaseDate": "1970-01-01T00:00:00Z",
  "lastUpdate": "1970-01-01T00:00:00Z",
  "nextPurchaseDate": "1970-01-01T00:00:00Z",
  "plan": {
    "frequency": {
      "interval": 0,
      "periodicity": "string"
    },
    "id": "string",
    "purchaseDay": 0,
    "validity": {
      "begin": "1970-01-01T00:00:00Z",
      "end": "1970-01-01T00:00:00Z"
    }
  },
  "purchaseSettings": {
    "currencyCode": "string",
    "paymentMethod": {
      "installments": 0,
      "paymentAccountId": "string",
      "paymentSystem": "string"
    }
  },
  "shippingAddress": {
    "addressId": "string",
    "addressType": "string"
  },
  "status": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|none|
|customerEmail|string \| null|true|none|none|
|customerId|string \| null|true|none|none|
|cycleCount|integer(int32)|true|none|none|
|id|string \| null|true|none|none|
|isSkipped|boolean|true|none|none|
|items|[[SubscriptionItemResponse](#schemasubscriptionitemresponse)]|true|none|none|
|lastPurchaseDate|string(date-time) \| null|false|none|none|
|lastUpdate|string(date-time)|true|none|none|
|nextPurchaseDate|string(date-time)|true|none|none|
|plan|[PlanResponse](#schemaplanresponse)|true|none|none|
|purchaseSettings|[PurchaseSettingsResponse](#schemapurchasesettingsresponse)|true|none|none|
|shippingAddress|[ShippingAddressResponse](#schemashippingaddressresponse)|true|none|none|
|status|string \| null|true|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_SubscriptionItemResponse">SubscriptionItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionitemresponse"></a>
<a id="schema_SubscriptionItemResponse"></a>
<a id="tocSsubscriptionitemresponse"></a>
<a id="tocssubscriptionitemresponse"></a>

```json
{
  "id": "string",
  "isSkipped": true,
  "manualPrice": 40,
  "originalOrderId": "string",
  "quantity": 5,
  "skuId": "12",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|true|none|none|
|isSkipped|boolean|true|none|none|
|manualPrice|integer(int32) \| null|false|none|Manual price.|
|originalOrderId|string \| null|false|none|none|
|quantity|integer(int32)|true|none|Amount of units in the cart.|
|skuId|string \| null|true|none|SKU ID.|
|status|string \| null|true|none|none|

<h2 id="tocS_SubscriptionReport">SubscriptionReport</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionreport"></a>
<a id="schema_SubscriptionReport"></a>
<a id="tocSsubscriptionreport"></a>
<a id="tocssubscriptionreport"></a>

```json
{
  "account": "string",
  "description": "string",
  "entity": "string",
  "key": "string",
  "name": "string",
  "params": [
    {
      "name": "string",
      "type": "string",
      "value": null
    }
  ],
  "query": "string",
  "requesterEmail": "string",
  "schema": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string \| null|false|none|none|
|description|string \| null|false|none|none|
|entity|string \| null|false|none|none|
|key|string \| null|false|none|none|
|name|string \| null|false|none|none|
|params|[[SubscriptionReportParam](#schemasubscriptionreportparam)]|false|none|none|
|query|string \| null|false|none|none|
|requesterEmail|string \| null|false|none|none|
|schema|string \| null|false|none|none|

<h2 id="tocS_SubscriptionReportParam">SubscriptionReportParam</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionreportparam"></a>
<a id="schema_SubscriptionReportParam"></a>
<a id="tocSsubscriptionreportparam"></a>
<a id="tocssubscriptionreportparam"></a>

```json
{
  "name": "string",
  "type": "string",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|type|string \| null|false|none|none|
|value|object \| null|false|none|none|

<h2 id="tocS_SubscriptionThinItemRequest">SubscriptionThinItemRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionthinitemrequest"></a>
<a id="schema_SubscriptionThinItemRequest"></a>
<a id="tocSsubscriptionthinitemrequest"></a>
<a id="tocssubscriptionthinitemrequest"></a>

```json
{
  "manualPrice": 40,
  "quantity": 5,
  "skuId": "12"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|manualPrice|integer(int32) \| null|false|none|Manual price.|
|quantity|integer(int32)|false|none|Amount of units in the cart.|
|skuId|string \| null|false|none|SKU ID.|

<h2 id="tocS_SubscriptionUpdateRequestV3">SubscriptionUpdateRequestV3</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionupdaterequestv3"></a>
<a id="schema_SubscriptionUpdateRequestV3"></a>
<a id="tocSsubscriptionupdaterequestv3"></a>
<a id="tocssubscriptionupdaterequestv3"></a>

```json
{
  "isSkipped": false,
  "plan": {
    "frequency": {
      "interval": 3,
      "periodicity": "MONTHLY"
    },
    "id": "store.subscription",
    "purchaseDay": "15",
    "validity": {
      "begin": "2022-06-10T00:00:00",
      "end": "2023-06-10T00:00:00"
    }
  },
  "purchaseSettings": {
    "paymentMethod": {
      "installments": 3,
      "paymentAccountId": "340357032569595",
      "paymentSystem": "4"
    },
    "salesChannel": "1"
  },
  "shippingAddress": {
    "addressId": "8109266555005",
    "addressType": "residential"
  },
  "status": "ACTIVE",
  "title": "catFood"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isSkipped|boolean \| null|false|none|When set as `true`, it means the shopper asked to skip the next subscription order, and when set as `false`, no subscription order is going to be skipped.|
|plan|[PlanThinRequest](#schemaplanthinrequest)|false|none|Information about the plan.|
|purchaseSettings|[PurchaseSettingsThinRequest](#schemapurchasesettingsthinrequest)|false|none|Object containing purchase settings information.|
|shippingAddress|[shippingAddress](#schemashippingaddress)|false|none|none|
|status|string \| null|false|none|Status to which you wish to update the subscription. The accepted values are: <br>- `ACTIVE` <br>- `PAUSED` <br>- `CANCELLED` <br>- `EXPIRED` <br>- `MISSING`|
|title|string \| null|false|none|Name of the subscription.|

<h2 id="tocS_Totalization">Totalization</h2>
<!-- backwards compatibility -->
<a id="schematotalization"></a>
<a id="schema_Totalization"></a>
<a id="tocStotalization"></a>
<a id="tocstotalization"></a>

```json
{
  "id": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|value|number(double)|false|none|none|

<h2 id="tocS_TotalizationResponse">TotalizationResponse</h2>
<!-- backwards compatibility -->
<a id="schematotalizationresponse"></a>
<a id="schema_TotalizationResponse"></a>
<a id="tocStotalizationresponse"></a>
<a id="tocstotalizationresponse"></a>

```json
{
  "id": "string",
  "name": "string",
  "valueAsInt": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|name|string \| null|false|none|none|
|valueAsInt|integer(int64)|false|none|none|

<h2 id="tocS_Transaction">Transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "isActive": true,
  "payments": [
    {
      "accountId": "string",
      "bin": "string",
      "cardNumber": "string",
      "fields": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "group": "string",
      "id": "string",
      "installments": 0,
      "parentAccountId": "string",
      "paymentSystem": "string",
      "referenceValue": 0,
      "url": "string",
      "value": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isActive|boolean|false|none|none|
|payments|[[Payment](#schemapayment)]|false|none|none|

<h2 id="tocS_UpdateItemInput">UpdateItemInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateiteminput"></a>
<a id="schema_UpdateItemInput"></a>
<a id="tocSupdateiteminput"></a>
<a id="tocsupdateiteminput"></a>

```json
{
  "isSkipped": true,
  "manualPrice": 40,
  "quantity": 5,
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isSkipped|boolean \| null|false|none|none|
|manualPrice|integer(int32) \| null|false|none|Manual price.|
|quantity|integer(int32)|false|none|Amount of units in the cart.|
|status|string \| null|false|none|none|

<h2 id="tocS_ValidityRequest">ValidityRequest</h2>
<!-- backwards compatibility -->
<a id="schemavalidityrequest"></a>
<a id="schema_ValidityRequest"></a>
<a id="tocSvalidityrequest"></a>
<a id="tocsvalidityrequest"></a>

```json
{
  "begin": "2022-06-10T00:00:00",
  "end": "2023-06-10T00:00:00"
}
```

Information about the period during which the subscription will be valid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|begin|string \| null|false|none|Subscription's beginning date with the format `yyyy-mm-ddThh:mm:ss`.|
|end|string \| null|false|none|Subscription's ending date with the format `yyyy-mm-ddThh:mm:ss`.|

<h2 id="tocS_ValidityResponse">ValidityResponse</h2>
<!-- backwards compatibility -->
<a id="schemavalidityresponse"></a>
<a id="schema_ValidityResponse"></a>
<a id="tocSvalidityresponse"></a>
<a id="tocsvalidityresponse"></a>

```json
{
  "begin": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|begin|string(date-time)|true|none|none|
|end|string(date-time) \| null|false|none|none|

<h2 id="tocS_settings">settings</h2>
<!-- backwards compatibility -->
<a id="schemasettings"></a>
<a id="schema_settings"></a>
<a id="tocSsettings"></a>
<a id="tocssettings"></a>

```json
[
  {
    "defaultSla": null,
    "deliveryChannels": [
      "delivery"
    ],
    "executionHourInUtc": 9,
    "isMultipleInstallmentsEnabledOnCreation": false,
    "isMultipleInstallmentsEnabledOnUpdate": false,
    "isUsingV3": true,
    "manualPriceAllowed": false,
    "onMigrationProcess": false,
    "orderCustomDataAppId": null,
    "postponeExpiration": false,
    "randomIdGeneration": false,
    "slaOption": "NONE",
    "useItemPriceFromOriginalOrder": false,
    "workflowVersion": "1.1"
  }
]
```

Subscriptions settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultSla|string \| null|true|none|Default delivery method.|
|deliveryChannels|[string]|true|none|Array containing delivery channels.|
|executionHourInUtc|integer|true|none|Indicates the time future subscription orders will be generated.|
|isMultipleInstallmentsEnabledOnCreation|boolean|true|none|Defines whether or not multiple installments are enabled when a subscription is created.|
|isMultipleInstallmentsEnabledOnUpdate|boolean|true|none|Defines whether or not multiple installments are enabled when a subscription is updated.|
|isUsingV3|boolean|true|none|Indicates whether or not Subscriptions V3 is enabled.|
|manualPriceAllowed|boolean|true|none|When set to `true`, this property enables manual price configuration in subscription items. This is valid for all existing subscriptions, provided that there is a manual price configured and that `isUsingV3` is `true`.|
|onMigrationProcess|boolean|true|none|Indicates whether or not the account is in the migration process to Subscriptions V3.|
|orderCustomDataAppId|string|true|none|When filled, this field passes along the `customData` infomration in the order to the future recurrent subscription orders.|
|postponeExpiration|boolean|true|none|Defines whether or not the expiration of subscriptions can be postponed.|
|randomIdGeneration|boolean|true|none|Defines whether or not the subscription order IDs will be randomly generated.|
|slaOption|string|true|none|Delivery method.|
|useItemPriceFromOriginalOrder|boolean|true|none|When set to `true`, this property enables using the manual price for each item from the original subscription order. This is only valid for new subscriptions, created from the moment this configuration is enabled. For this to work, it is mandatory that the `manualPriceAllowed` property is set to `true` and that `isUsingV3` is `true`.|
|workflowVersion|string|true|none|Workflow version.|

<h2 id="tocS_shippingAddress">shippingAddress</h2>
<!-- backwards compatibility -->
<a id="schemashippingaddress"></a>
<a id="schema_shippingAddress"></a>
<a id="tocSshippingaddress"></a>
<a id="tocsshippingaddress"></a>

```json
{
  "addressId": "8109266555005",
  "addressType": "residential"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressId|string \| null|true|none|Shipping address ID.|
|addressType|string \| null|true|none|Type of the address. Possible values are `residential` or `pickup`.|
