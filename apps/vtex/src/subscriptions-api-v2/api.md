<h1 id="subscriptions-api-v2---deprecated">Subscriptions API (v2 - DEPRECATED) v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

VTEX Subscriptions REST API Documentation

This documentation describes the available REST APIs for VTEX Subscription System.

With Subscriptions you can set up regularly scheduled deliveries.

All requests need authorization (VTEX Id authentication token or VTEX Appkey and Apptoken headers)

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br/api/rns">https://{accountName}.{environment}.com.br/api/rns</a> - VTEX server url

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="subscriptions-api-v2---deprecated-subscriptions">Subscriptions</h1>

## Retrieve customer's subscriptions

<a id="opIdGetsubscriptionstocustomer"></a>

> Code samples

```bash
curl 'https://example.com/subscriptions?customerId=user%40vtex.com.br' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /subscriptions`

Retrieves details of a given customer's subscriptions, searching by that customer's `customerId`.

<h3 id="retrieve-customers-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|query|string|true|Customer ID.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

<h3 id="retrieve-customers-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Subscription List

<a id="opIdGetSubscriptionList"></a>

> Code samples

```bash
curl https://example.com/subscriptions/list \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /subscriptions/list`

Retrieves a list of Subscriptions linked to your store.

<h3 id="get-subscription-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

<h3 id="get-subscription-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Retrieve subscription by ID

<a id="opIdGetsubscriptionbyId"></a>

> Code samples

```bash
curl https://example.com/subscriptions/1 \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /subscriptions/{subscriptionId}`

Lists Subscription's details, searching by `subscriptionId`.

<h3 id="retrieve-subscription-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|subscriptionId|path|string|true|Subscription ID.|

<h3 id="retrieve-subscription-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Subscriptions by SubscriptionId

<a id="opIdUpdateSubscriptionsbySubscriptionId"></a>

> Code samples

```bash
curl https://example.com/subscriptions/1 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "isSkipped": true,
    "item": {
      "endpoint": "string",
      "priceAtSubscriptionDate": 0,
      "quantity": 0,
      "sellingPrice": 0,
      "sku": {
        "detailUrl": "string",
        "id": "string",
        "imageUrl": "string",
        "name": "string",
        "nameComplete": "string",
        "productName": "string"
      }
    },
    "metadata": [
      {
        "name": "string",
        "properties": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        }
      }
    ],
    "plan": {
      "frequency": {
        "interval": 0,
        "periodicity": "string"
      },
      "type": "string",
      "validity": {
        "begin": "2019-07-04T14:40:30.819Z",
        "end": "2019-07-04T14:40:30.819Z"
      }
    },
    "purchaseSettings": {
      "currencyCode": "string",
      "paymentMethod": {
        "paymentAccountId": "string",
        "paymentSystem": "string"
      },
      "purchaseDay": "string",
      "salesChannel": "string",
      "selectedSla": "string",
      "seller": "string"
    },
    "shippingAddress": {
      "additionalComponents": [
        {
          "longName": "string",
          "shortName": "string",
          "types": [
            "string"
          ]
        }
      ],
      "addressId": "string",
      "addressName": "string",
      "addressType": "string",
      "city": "string",
      "complement": "string",
      "country": "string",
      "formattedAddress": "string",
      "geoCoordinate": [
        0
      ],
      "neighborhood": "string",
      "number": "string",
      "postalCode": "string",
      "receiverName": "string",
      "reference": "string",
      "state": "string",
      "street": "string"
    },
    "status": "string"
  }'
```

`PATCH /subscriptions/{subscriptionId}`

Update, add or alter information of a given Subscription, filtering by `subscriptionId`.

> Body parameter

```json
{
  "isSkipped": true,
  "item": {
    "endpoint": "string",
    "priceAtSubscriptionDate": 0,
    "quantity": 0,
    "sellingPrice": 0,
    "sku": {
      "detailUrl": "string",
      "id": "string",
      "imageUrl": "string",
      "name": "string",
      "nameComplete": "string",
      "productName": "string"
    }
  },
  "metadata": [
    {
      "name": "string",
      "properties": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      }
    }
  ],
  "plan": {
    "frequency": {
      "interval": 0,
      "periodicity": "string"
    },
    "type": "string",
    "validity": {
      "begin": "2019-07-04T14:40:30.819Z",
      "end": "2019-07-04T14:40:30.819Z"
    }
  },
  "purchaseSettings": {
    "currencyCode": "string",
    "paymentMethod": {
      "paymentAccountId": "string",
      "paymentSystem": "string"
    },
    "purchaseDay": "string",
    "salesChannel": "string",
    "selectedSla": "string",
    "seller": "string"
  },
  "shippingAddress": {
    "additionalComponents": [
      {
        "longName": "string",
        "shortName": "string",
        "types": [
          "string"
        ]
      }
    ],
    "addressId": "string",
    "addressName": "string",
    "addressType": "string",
    "city": "string",
    "complement": "string",
    "country": "string",
    "formattedAddress": "string",
    "geoCoordinate": [
      0
    ],
    "neighborhood": "string",
    "number": "string",
    "postalCode": "string",
    "receiverName": "string",
    "reference": "string",
    "state": "string",
    "street": "string"
  },
  "status": "string"
}
```

<h3 id="update-subscriptions-by-subscriptionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|Subscription ID.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|body|body|[UpdateSubscriptionsbySubscriptionIdRequest](#schemaupdatesubscriptionsbysubscriptionidrequest)|true|none|
|» isSkipped|body|boolean|true|none|
|» item|body|[Item](#schemaitem)|true|none|
|» metadata|body|[[Metadatum](#schemametadatum)]|true|none|
|» plan|body|[Plan](#schemaplan)|true|none|
|» purchaseSettings|body|[PurchaseSettings](#schemapurchasesettings)|true|none|
|» shippingAddress|body|[ShippingAddress](#schemashippingaddress)|true|none|
|» status|body|string|true|none|

<h3 id="update-subscriptions-by-subscriptionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Insert Addresses for Subscription

<a id="opIdInsertAddressesforSubscription"></a>

> Code samples

```bash
curl https://example.com/subscriptions/1/addresses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '[
    {
      "additionalComponents": null,
      "addressId": "1234567890",
      "addressName": "xt5353818181nhshs",
      "addressType": "residential",
      "city": "Rio de Janeiro",
      "complement": null,
      "country": "BRA",
      "formattedAddress": null,
      "geoCoordinate": null,
      "neighborhood": "Barra da Tijuca",
      "number": "1",
      "postalCode": "22204-004",
      "receiverName": "Fulano",
      "reference": null,
      "state": "RJ",
      "street": "Avenida do Estado"
    }
  ]'
```

`POST /subscriptions/{subscriptionId}/addresses`

Inserts address's information to complement the Subscription details.

> Body parameter

```json
[
  {
    "additionalComponents": null,
    "addressId": "1234567890",
    "addressName": "xt5353818181nhshs",
    "addressType": "residential",
    "city": "Rio de Janeiro",
    "complement": null,
    "country": "BRA",
    "formattedAddress": null,
    "geoCoordinate": null,
    "neighborhood": "Barra da Tijuca",
    "number": "1",
    "postalCode": "22204-004",
    "receiverName": "Fulano",
    "reference": null,
    "state": "RJ",
    "street": "Avenida do Estado"
  }
]
```

<h3 id="insert-addresses-for-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|Subscription ID.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|body|body|[[InsertAddressesforSubscriptionRequest](#schemainsertaddressesforsubscriptionrequest)]|true|none|

<h3 id="insert-addresses-for-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Cancel Subscriptions by SubscriptionId

<a id="opIdCancelSubscriptionsbySubscriptionId"></a>

> Code samples

```bash
curl https://example.com/subscriptions/1/cancel \
  -X PATCH \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`PATCH /subscriptions/{subscriptionId}/cancel`

Cancels all Subscriptions of a subscription group. This operation does not have a rollback. Once cancelled, it cannot be re-activated

<h3 id="cancel-subscriptions-by-subscriptionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|subscriptionId|path|string|true|Subscription ID.|

<h3 id="cancel-subscriptions-by-subscriptionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get frequency options by subscriptionId

<a id="opIdGetfrequencyoptionsbysubscriptionId"></a>

> Code samples

```bash
curl https://example.com/subscriptions/1/frequency-options \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /subscriptions/{subscriptionId}/frequency-options`

Lists frequency options for the Subscription, filtering by `subscriptionId`.

<h3 id="get-frequency-options-by-subscriptionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|subscriptionId|path|string|true|Subscription ID.|

<h3 id="get-frequency-options-by-subscriptionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="subscriptions-api-v2---deprecated-subscription-group">Subscription Group</h1>

## List All subscription groups

<a id="opIdGetAllsubscriptiongroup"></a>

> Code samples

```bash
curl https://example.com/subscriptions-group \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /subscriptions-group`

Retrieves all subscription groups in your store.

<h3 id="list-all-subscription-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

<h3 id="list-all-subscription-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get subscription group list

<a id="opIdGetsubscriptiongrouplist"></a>

> Code samples

```bash
curl https://example.com/subscriptions-group/list \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /subscriptions-group/list`

Retrieves a list of Subscription groups in your store.

<h3 id="get-subscription-group-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

<h3 id="get-subscription-group-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Next purchase

<a id="opIdGetNextpurchase"></a>

> Code samples

```bash
curl https://example.com/subscriptions-group/nextPurchase/string \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /subscriptions-group/nextPurchase/{dateStr}`

Lists details of a given subscription group's next purchase, filtering by dateStr.

<h3 id="get-next-purchase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|dateStr|path|string|true|Reference date that retrieves all next purchases, starting from the dateStr inserted. Must be in the format of {{yyyyMMdd}}|

<h3 id="get-next-purchase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Simulation by subscription-group

<a id="opIdGetSimulatebysubscription-group"></a>

> Code samples

```bash
curl https://example.com/subscriptions-group/simulate/1 \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /subscriptions-group/simulate/{groupId}`

Retrieves Subscription simulations, filtering by groupId.

<h3 id="get-simulation-by-subscription-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|groupId|path|string|true|Group ID.|

<h3 id="get-simulation-by-subscription-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Subscription by groupId

<a id="opIdGetSubscriptionbygroupId"></a>

> Code samples

```bash
curl https://example.com/subscriptions-group/1 \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /subscriptions-group/{groupId}`

Lists Subscription details, filtering by `groupId`.

<h3 id="get-subscription-by-groupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|groupId|path|string|true|Group ID.|

<h3 id="get-subscription-by-groupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Subscription by groupId

<a id="opIdUpdateSubscriptionbygroupId"></a>

> Code samples

```bash
curl https://example.com/subscriptions-group/1 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "isSkipped": true,
    "item": [
      {
        "SubscriptionId": "string",
        "createdAt": "2019-06-20T18:27:41.23Z",
        "cycleCount": 0,
        "endpoint": "string",
        "isSkipped": true,
        "lastUpdate": "2019-06-20T18:27:41.23Z",
        "metadata": [
          {
            "name": "string",
            "properties": {
              "additionalProp1": "string",
              "additionalProp2": "string",
              "additionalProp3": "string"
            }
          }
        ],
        "originalItemIndex": 0,
        "originalOrderId": "string",
        "priceAtSubscriptionDate": 0,
        "quantity": 0,
        "sellingPrice": 0,
        "sku": {
          "detailUrl": "string",
          "id": "string",
          "imageUrl": "string",
          "name": "string",
          "nameComplete": "string",
          "productName": "string"
        },
        "status": "ACTIVE"
      }
    ],
    "metadata": [
      {
        "name": "string",
        "properties": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        }
      }
    ],
    "plan": {
      "frequency": {
        "interval": 0,
        "periodicity": "string"
      },
      "type": "string",
      "validity": {
        "begin": "2019-06-20T18:27:41.23Z",
        "end": "2019-06-20T18:27:41.23Z"
      }
    },
    "purchaseSettings": {
      "currencyCode": "string",
      "paymentMethod": {
        "paymentAccountId": "string",
        "paymentSystem": "string"
      },
      "purchaseDay": "string",
      "salesChannel": "string",
      "selectedSla": "string",
      "seller": "string"
    },
    "shippingAddress": {
      "additionalComponents": [
        {
          "longName": "string",
          "shortName": "string",
          "types": [
            "string"
          ]
        }
      ],
      "addressId": "string",
      "addressName": "string",
      "addressType": "string",
      "city": "string",
      "complement": "string",
      "country": "string",
      "formattedAddress": "string",
      "geoCoordinate": [
        0
      ],
      "neighborhood": "string",
      "number": "string",
      "postalCode": "string",
      "receiverName": "string",
      "reference": "string",
      "state": "string",
      "street": "string"
    },
    "status": "string"
  }'
```

`PATCH /subscriptions-group/{groupId}`

Updates a Subscription by `groupId`.

> Body parameter

```json
{
  "isSkipped": true,
  "item": [
    {
      "SubscriptionId": "string",
      "createdAt": "2019-06-20T18:27:41.23Z",
      "cycleCount": 0,
      "endpoint": "string",
      "isSkipped": true,
      "lastUpdate": "2019-06-20T18:27:41.23Z",
      "metadata": [
        {
          "name": "string",
          "properties": {
            "additionalProp1": "string",
            "additionalProp2": "string",
            "additionalProp3": "string"
          }
        }
      ],
      "originalItemIndex": 0,
      "originalOrderId": "string",
      "priceAtSubscriptionDate": 0,
      "quantity": 0,
      "sellingPrice": 0,
      "sku": {
        "detailUrl": "string",
        "id": "string",
        "imageUrl": "string",
        "name": "string",
        "nameComplete": "string",
        "productName": "string"
      },
      "status": "ACTIVE"
    }
  ],
  "metadata": [
    {
      "name": "string",
      "properties": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      }
    }
  ],
  "plan": {
    "frequency": {
      "interval": 0,
      "periodicity": "string"
    },
    "type": "string",
    "validity": {
      "begin": "2019-06-20T18:27:41.23Z",
      "end": "2019-06-20T18:27:41.23Z"
    }
  },
  "purchaseSettings": {
    "currencyCode": "string",
    "paymentMethod": {
      "paymentAccountId": "string",
      "paymentSystem": "string"
    },
    "purchaseDay": "string",
    "salesChannel": "string",
    "selectedSla": "string",
    "seller": "string"
  },
  "shippingAddress": {
    "additionalComponents": [
      {
        "longName": "string",
        "shortName": "string",
        "types": [
          "string"
        ]
      }
    ],
    "addressId": "string",
    "addressName": "string",
    "addressType": "string",
    "city": "string",
    "complement": "string",
    "country": "string",
    "formattedAddress": "string",
    "geoCoordinate": [
      0
    ],
    "neighborhood": "string",
    "number": "string",
    "postalCode": "string",
    "receiverName": "string",
    "reference": "string",
    "state": "string",
    "street": "string"
  },
  "status": "string"
}
```

<h3 id="update-subscription-by-groupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|Group ID.|
|body|body|[UpdateSubscriptionbygroupIdRequest](#schemaupdatesubscriptionbygroupidrequest)|true|none|
|» isSkipped|body|boolean|true|none|
|» item|body|[[Item1](#schemaitem1)]|true|none|
|» metadata|body|[[Metadatum](#schemametadatum)]|true|none|
|» plan|body|[Plan](#schemaplan)|true|none|
|» purchaseSettings|body|[PurchaseSettings](#schemapurchasesettings)|true|none|
|» shippingAddress|body|[ShippingAddress](#schemashippingaddress)|true|none|
|» status|body|string|true|none|

<h3 id="update-subscription-by-groupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Add Subscription item by groupId

<a id="opIdAdditemsubscription-groupId"></a>

> Code samples

```bash
curl https://example.com/subscriptions-group/1/additem \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "endpoint": "string",
    "priceAtSubscriptionDate": 0,
    "quantity": 0,
    "sellingPrice": 0,
    "sku": {
      "detailUrl": "string",
      "id": "string",
      "imageUrl": "string",
      "name": "string",
      "nameComplete": "string",
      "productName": "string"
    }
  }'
```

`POST /subscriptions-group/{groupId}/additem`

Adds an SKU to a given Subscription, filtering by groupId.

> Body parameter

```json
{
  "endpoint": "string",
  "priceAtSubscriptionDate": 0,
  "quantity": 0,
  "sellingPrice": 0,
  "sku": {
    "detailUrl": "string",
    "id": "string",
    "imageUrl": "string",
    "name": "string",
    "nameComplete": "string",
    "productName": "string"
  }
}
```

<h3 id="add-subscription-item-by-groupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|Group ID.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|body|body|[Additemsubscription-groupIdRequest](#schemaadditemsubscription-groupidrequest)|true|none|
|» endpoint|body|string|true|none|
|» priceAtSubscriptionDate|body|integer(int32)|true|none|
|» quantity|body|integer(int32)|true|none|
|» sellingPrice|body|integer(int32)|true|none|
|» sku|body|[Sku](#schemasku)|true|none|

<h3 id="add-subscription-item-by-groupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get addresses by groupId

<a id="opIdGetaddressesbygroupId"></a>

> Code samples

```bash
curl 'https://example.com/subscriptions-group/{groupId}/addresses' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /subscriptions-group/{groupId}/addresses`

Lists addresses linked to a given Subscription group, filtering by groupId.

<h3 id="get-addresses-by-groupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|groupId|path|string|true|none|

<h3 id="get-addresses-by-groupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Insert Addresses by groupId

<a id="opIdInsertAddressesbygroupId"></a>

> Code samples

```bash
curl https://example.com/subscriptions-group/1/addresses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "additionalComponents": [
      {
        "longName": "string",
        "shortName": "string",
        "types": [
          "string"
        ]
      }
    ],
    "addressId": "string",
    "addressName": "string",
    "addressType": "string",
    "city": "string",
    "complement": "string",
    "country": "string",
    "formattedAddress": "string",
    "geoCoordinate": [
      0
    ],
    "neighborhood": "string",
    "number": "string",
    "postalCode": "string",
    "receiverName": "string",
    "reference": "string",
    "state": "string",
    "street": "string"
  }'
```

`POST /subscriptions-group/{groupId}/addresses`

Insert address information of a given Subscription group, filtering by groupId.

> Body parameter

```json
{
  "additionalComponents": [
    {
      "longName": "string",
      "shortName": "string",
      "types": [
        "string"
      ]
    }
  ],
  "addressId": "string",
  "addressName": "string",
  "addressType": "string",
  "city": "string",
  "complement": "string",
  "country": "string",
  "formattedAddress": "string",
  "geoCoordinate": [
    0
  ],
  "neighborhood": "string",
  "number": "string",
  "postalCode": "string",
  "receiverName": "string",
  "reference": "string",
  "state": "string",
  "street": "string"
}
```

<h3 id="insert-addresses-by-groupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|Group ID.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|body|body|[InsertAddressesbygroupIdRequest](#schemainsertaddressesbygroupidrequest)|true|none|
|» additionalComponents|body|[[AdditionalComponent](#schemaadditionalcomponent)]|true|none|
|» addressId|body|string|true|none|
|» addressName|body|string|true|none|
|» addressType|body|string|true|none|
|» city|body|string|true|none|
|» complement|body|string|true|none|
|» country|body|string|true|none|
|» formattedAddress|body|string|true|none|
|» geoCoordinate|body|[integer(int32)]|true|none|
|» neighborhood|body|string|true|none|
|» number|body|string|true|none|
|» postalCode|body|string|true|none|
|» receiverName|body|string|true|none|
|» reference|body|string|true|none|
|» state|body|string|true|none|
|» street|body|string|true|none|

<h3 id="insert-addresses-by-groupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Cancel Subscription by groupId

<a id="opIdCancelSubscriptionbygroupId"></a>

> Code samples

```bash
curl https://example.com/subscriptions-group/1/cancel \
  -X PATCH \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`PATCH /subscriptions-group/{groupId}/cancel`

Cancels Subscription by `groupId`

<h3 id="cancel-subscription-by-groupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|groupId|path|string|true|Group ID.|

<h3 id="cancel-subscription-by-groupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List Subscription group's Configuration

<a id="opIdGetConfigsubscriptionsgroup"></a>

> Code samples

```bash
curl https://example.com/subscriptions-group/1/config \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /subscriptions-group/{groupId}/config`

Retrieves details about a given subscription group's configuration, filtering by groupId.

<h3 id="list-subscription-groups-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|groupId|path|string|true|Group ID.|

<h3 id="list-subscription-groups-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Conversation Message by groupId

<a id="opIdGetConversationMessagebygroupId"></a>

> Code samples

```bash
curl https://example.com/subscriptions-group/1/conversation-message \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /subscriptions-group/{groupId}/conversation-message`

Retrieves the conversation of a given Subscription group, filtering by groupId.

<h3 id="get-conversation-message-by-groupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|groupId|path|string|true|Group ID.|

<h3 id="get-conversation-message-by-groupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get frequency options by groupId

<a id="opIdGetfrequencyoptionsbygroupId"></a>

> Code samples

```bash
curl https://example.com/subscriptions-group/1/frequency-options \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /subscriptions-group/{groupId}/frequency-options`

Lists frequency options of a given Subscription group, filtering by groupId.

<h3 id="get-frequency-options-by-groupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|groupId|path|string|true|Group ID.|

<h3 id="get-frequency-options-by-groupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get payment System by groupId

<a id="opIdGetpaymentSystembygroupId"></a>

> Code samples

```bash
curl https://example.com/subscriptions-group/1/payment-systems \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /subscriptions-group/{groupId}/payment-systems`

Retrieves payment system's information of a given Subscription group, filtering by groupId.

<h3 id="get-payment-system-by-groupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|groupId|path|string|true|Group ID.|

<h3 id="get-payment-system-by-groupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List 'Will create' by groupId

<a id="opIdGetwillcreatebygroupId"></a>

> Code samples

```bash
curl https://example.com/subscriptions-group/1/will-create \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /subscriptions-group/{groupId}/will-create`

Retrieves Subscription groups listed as 'will create', filtering by groupId.

<h3 id="list-will-create-by-groupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|groupId|path|string|true|Group ID.|

<h3 id="list-will-create-by-groupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Retry subscription by groupId

<a id="opIdRetrysubscriptionbygroupId"></a>

> Code samples

```bash
curl https://example.com/subscriptions-group/1/instances/string/retry \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /subscriptions-group/{groupid}/instances/{instanceId}/retry`

Permits the retry of a Subscription group, via API, filtering by groupId and instanceId.

<h3 id="retry-subscription-by-groupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupid|path|string|true|Group ID.|
|instanceId|path|string|true|Instance ID.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|

<h3 id="retry-subscription-by-groupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="subscriptions-api-v2---deprecated-report">Report</h1>

## Get report status by ID

<a id="opIdGetreportstatusbyID"></a>

> Code samples

```bash
curl https://example.com/report/reportStatus/string \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /report/reportStatus/{reportId}`

Retrieves the Subscription's report status, filtering by its reportId.

<h3 id="get-report-status-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|reportId|path|string|true|Report ID.|

<h3 id="get-report-status-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Retrieve Subscription report by date

<a id="opIdRequestreportbydate"></a>

> Code samples

```bash
curl 'https://example.com/report/subscriptionsByDate?requesterEmail=user%40vtex.com.br&beginDate=20190101&endDate=20190701' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /report/subscriptionsByDate`

Retrieves a report with the subscriptions created at the date interval requested

<h3 id="retrieve-subscription-report-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requesterEmail|query|string|true|Email that the report will be sent to|
|beginDate|query|integer(int32)|true|begin date of report interval, use format yyyyMMdd|
|endDate|query|integer(int32)|true|end date of report interval, use format yyyyMMdd|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

<h3 id="retrieve-subscription-report-by-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Retrieve Subscription report by Status

<a id="opIdRequestreportbyStatus"></a>

> Code samples

```bash
curl 'https://example.com/report/subscriptionsByStatus?requesterEmail=user%40vtex.com.br&status=1' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /report/subscriptionsByStatus`

Retrieves Subscriptions' reports, filtering by status. The report will be sent by email, to the address inserted in the API's path.

<h3 id="retrieve-subscription-report-by-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requesterEmail|query|string|true|Email that the report will be sent to|
|status|query|integer(int32)|true|Binary OR of the following status: 1 - ACTIVE; 2 - PAUSED; 4 - CANCELED; 8 - EXPIRED|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

<h3 id="retrieve-subscription-report-by-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Retrieve Subscription report by order date

<a id="opIdRequestreportbyorderdate"></a>

> Code samples

```bash
curl 'https://example.com/report/subscriptionsOrderByDate?requesterEmail=user%40vtex.com.br&beginDate=20190101&endDate=20190701' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /report/subscriptionsOrderByDate`

Retrieves a report regarding the Subscriptions created during the date interval of orders.

<h3 id="retrieve-subscription-report-by-order-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requesterEmail|query|string|true|Email that the report will be sent to|
|beginDate|query|integer(int32)|true|begin date of report interval, use format yyyyMMdd|
|endDate|query|integer(int32)|true|end date of report interval, use format yyyyMMdd|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

<h3 id="retrieve-subscription-report-by-order-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Retrieve Subscription report by schedule

<a id="opIdRequestreportbyschedule"></a>

> Code samples

```bash
curl 'https://example.com/report/subscriptionsScheduled?requesterEmail=user%40vtex.com.br&beginDate=20190101&endDate=20190701' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /report/subscriptionsScheduled`

Retrieves a report regarding the Subscriptions scheduled to execute at the date interval requested

<h3 id="retrieve-subscription-report-by-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requesterEmail|query|string|true|Email that the report will be sent to|
|beginDate|query|integer(int32)|true|begin date of report interval, use format yyyyMMdd|
|endDate|query|integer(int32)|true|end date of report interval, use format yyyyMMdd|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

<h3 id="retrieve-subscription-report-by-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Request report by update

<a id="opIdRequestreportbyupdate"></a>

> Code samples

```bash
curl 'https://example.com/report/subscriptionsUpdated?requesterEmail=user%40vtex.com.br&beginDate=20190101&endDate=20190701' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /report/subscriptionsUpdated`

Retrieves a report regarding Subscriptions updated in the date interval chosen. The report will be sent by email, to the address inserted in the API's path.

<h3 id="request-report-by-update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requesterEmail|query|string|true|Email that the report will be sent to|
|beginDate|query|integer(int32)|true|begin date of report interval, use format yyyyMMdd|
|endDate|query|integer(int32)|true|end date of report interval, use format yyyyMMdd|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

<h3 id="request-report-by-update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="subscriptions-api-v2---deprecated-settings">Settings</h1>

## Get Subscriptions Settings

<a id="opIdGetSettings"></a>

> Code samples

```bash
curl https://example.com/settings \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /settings`

Lists the current Subscriptions settings in your store.

<h3 id="get-subscriptions-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
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
```

<h3 id="get-subscriptions-settings-responses">Responses</h3>

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
curl https://example.com/settings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
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
  }'
```

`POST /settings`

Edits Subscriptions settings in your store.

> Body parameter

```json
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

<h2 id="tocS_Additemsubscription-groupIdRequest">Additemsubscription-groupIdRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadditemsubscription-groupidrequest"></a>
<a id="schema_Additemsubscription-groupIdRequest"></a>
<a id="tocSadditemsubscription-groupidrequest"></a>
<a id="tocsadditemsubscription-groupidrequest"></a>

```json
{
  "endpoint": "string",
  "priceAtSubscriptionDate": 0,
  "quantity": 0,
  "sellingPrice": 0,
  "sku": {
    "detailUrl": "string",
    "id": "string",
    "imageUrl": "string",
    "name": "string",
    "nameComplete": "string",
    "productName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|true|none|none|
|priceAtSubscriptionDate|integer(int32)|true|none|none|
|quantity|integer(int32)|true|none|none|
|sellingPrice|integer(int32)|true|none|none|
|sku|[Sku](#schemasku)|true|none|none|

<h2 id="tocS_AdditionalComponent">AdditionalComponent</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalcomponent"></a>
<a id="schema_AdditionalComponent"></a>
<a id="tocSadditionalcomponent"></a>
<a id="tocsadditionalcomponent"></a>

```json
{
  "longName": "string",
  "shortName": "string",
  "types": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|longName|string|true|none|none|
|shortName|string|true|none|none|
|types|[string]|true|none|none|

<h2 id="tocS_Frequency">Frequency</h2>
<!-- backwards compatibility -->
<a id="schemafrequency"></a>
<a id="schema_Frequency"></a>
<a id="tocSfrequency"></a>
<a id="tocsfrequency"></a>

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
|periodicity|string|true|none|none|

<h2 id="tocS_InsertAddressesbygroupIdRequest">InsertAddressesbygroupIdRequest</h2>
<!-- backwards compatibility -->
<a id="schemainsertaddressesbygroupidrequest"></a>
<a id="schema_InsertAddressesbygroupIdRequest"></a>
<a id="tocSinsertaddressesbygroupidrequest"></a>
<a id="tocsinsertaddressesbygroupidrequest"></a>

```json
{
  "additionalComponents": [
    {
      "longName": "string",
      "shortName": "string",
      "types": [
        "string"
      ]
    }
  ],
  "addressId": "string",
  "addressName": "string",
  "addressType": "string",
  "city": "string",
  "complement": "string",
  "country": "string",
  "formattedAddress": "string",
  "geoCoordinate": [
    0
  ],
  "neighborhood": "string",
  "number": "string",
  "postalCode": "string",
  "receiverName": "string",
  "reference": "string",
  "state": "string",
  "street": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalComponents|[[AdditionalComponent](#schemaadditionalcomponent)]|true|none|none|
|addressId|string|true|none|none|
|addressName|string|true|none|none|
|addressType|string|true|none|none|
|city|string|true|none|none|
|complement|string|true|none|none|
|country|string|true|none|none|
|formattedAddress|string|true|none|none|
|geoCoordinate|[integer(int32)]|true|none|none|
|neighborhood|string|true|none|none|
|number|string|true|none|none|
|postalCode|string|true|none|none|
|receiverName|string|true|none|none|
|reference|string|true|none|none|
|state|string|true|none|none|
|street|string|true|none|none|

<h2 id="tocS_InsertAddressesforSubscriptionRequest">InsertAddressesforSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemainsertaddressesforsubscriptionrequest"></a>
<a id="schema_InsertAddressesforSubscriptionRequest"></a>
<a id="tocSinsertaddressesforsubscriptionrequest"></a>
<a id="tocsinsertaddressesforsubscriptionrequest"></a>

```json
{
  "additionalComponents": null,
  "addressId": "1234567890",
  "addressName": "xt5353818181nhshs",
  "addressType": "residential",
  "city": "Rio de Janeiro",
  "complement": null,
  "country": "BRA",
  "formattedAddress": null,
  "geoCoordinate": null,
  "neighborhood": "Barra da Tijuca",
  "number": "1",
  "postalCode": "22204-004",
  "receiverName": "Fulano",
  "reference": null,
  "state": "RJ",
  "street": "Avenida do Estado"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalComponents|string \| null|true|none|none|
|addressId|string|true|none|none|
|addressName|string|true|none|none|
|addressType|string|true|none|none|
|city|string|true|none|none|
|complement|string \| null|true|none|none|
|country|string|true|none|none|
|formattedAddress|string \| null|true|none|none|
|geoCoordinate|string \| null|true|none|none|
|neighborhood|string|true|none|none|
|number|string|true|none|none|
|postalCode|string|true|none|none|
|receiverName|string|true|none|none|
|reference|string \| null|true|none|none|
|state|string|true|none|none|
|street|string|true|none|none|

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "endpoint": "string",
  "priceAtSubscriptionDate": 0,
  "quantity": 0,
  "sellingPrice": 0,
  "sku": {
    "detailUrl": "string",
    "id": "string",
    "imageUrl": "string",
    "name": "string",
    "nameComplete": "string",
    "productName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|true|none|none|
|priceAtSubscriptionDate|integer(int32)|true|none|none|
|quantity|integer(int32)|true|none|none|
|sellingPrice|integer(int32)|true|none|none|
|sku|[Sku](#schemasku)|true|none|none|

<h2 id="tocS_Item1">Item1</h2>
<!-- backwards compatibility -->
<a id="schemaitem1"></a>
<a id="schema_Item1"></a>
<a id="tocSitem1"></a>
<a id="tocsitem1"></a>

```json
{
  "SubscriptionId": "string",
  "createdAt": "2019-06-20T18:27:41.23Z",
  "cycleCount": 0,
  "endpoint": "string",
  "isSkipped": true,
  "lastUpdate": "2019-06-20T18:27:41.23Z",
  "metadata": [
    {
      "name": "string",
      "properties": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      }
    }
  ],
  "originalItemIndex": 0,
  "originalOrderId": "string",
  "priceAtSubscriptionDate": 0,
  "quantity": 0,
  "sellingPrice": 0,
  "sku": {
    "detailUrl": "string",
    "id": "string",
    "imageUrl": "string",
    "name": "string",
    "nameComplete": "string",
    "productName": "string"
  },
  "status": "ACTIVE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionId|string|true|none|none|
|createdAt|string|true|none|none|
|cycleCount|integer(int32)|true|none|none|
|endpoint|string|true|none|none|
|isSkipped|boolean|true|none|none|
|lastUpdate|string|true|none|none|
|metadata|[[Metadatum](#schemametadatum)]|true|none|none|
|originalItemIndex|integer(int32)|true|none|none|
|originalOrderId|string|true|none|none|
|priceAtSubscriptionDate|integer(int32)|true|none|none|
|quantity|integer(int32)|true|none|none|
|sellingPrice|integer(int32)|true|none|none|
|sku|[Sku](#schemasku)|true|none|none|
|status|string|true|none|none|

<h2 id="tocS_Metadatum">Metadatum</h2>
<!-- backwards compatibility -->
<a id="schemametadatum"></a>
<a id="schema_Metadatum"></a>
<a id="tocSmetadatum"></a>
<a id="tocsmetadatum"></a>

```json
{
  "name": "string",
  "properties": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|properties|[Properties](#schemaproperties)|true|none|none|

<h2 id="tocS_PaymentMethod">PaymentMethod</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethod"></a>
<a id="schema_PaymentMethod"></a>
<a id="tocSpaymentmethod"></a>
<a id="tocspaymentmethod"></a>

```json
{
  "paymentAccountId": "string",
  "paymentSystem": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentAccountId|string|true|none|none|
|paymentSystem|string|true|none|none|

<h2 id="tocS_Plan">Plan</h2>
<!-- backwards compatibility -->
<a id="schemaplan"></a>
<a id="schema_Plan"></a>
<a id="tocSplan"></a>
<a id="tocsplan"></a>

```json
{
  "frequency": {
    "interval": 0,
    "periodicity": "string"
  },
  "type": "string",
  "validity": {
    "begin": "2019-07-04T14:40:30.819Z",
    "end": "2019-07-04T14:40:30.819Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequency|[Frequency](#schemafrequency)|true|none|none|
|type|string|true|none|none|
|validity|[Validity](#schemavalidity)|true|none|none|

<h2 id="tocS_Properties">Properties</h2>
<!-- backwards compatibility -->
<a id="schemaproperties"></a>
<a id="schema_Properties"></a>
<a id="tocSproperties"></a>
<a id="tocsproperties"></a>

```json
{
  "additionalProp1": "string",
  "additionalProp2": "string",
  "additionalProp3": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalProp1|string|true|none|none|
|additionalProp2|string|true|none|none|
|additionalProp3|string|true|none|none|

<h2 id="tocS_PurchaseSettings">PurchaseSettings</h2>
<!-- backwards compatibility -->
<a id="schemapurchasesettings"></a>
<a id="schema_PurchaseSettings"></a>
<a id="tocSpurchasesettings"></a>
<a id="tocspurchasesettings"></a>

```json
{
  "currencyCode": "string",
  "paymentMethod": {
    "paymentAccountId": "string",
    "paymentSystem": "string"
  },
  "purchaseDay": "string",
  "salesChannel": "string",
  "selectedSla": "string",
  "seller": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|true|none|none|
|paymentMethod|[PaymentMethod](#schemapaymentmethod)|true|none|none|
|purchaseDay|string|true|none|none|
|salesChannel|string|true|none|none|
|selectedSla|string|true|none|none|
|seller|string|true|none|none|

<h2 id="tocS_ShippingAddress">ShippingAddress</h2>
<!-- backwards compatibility -->
<a id="schemashippingaddress"></a>
<a id="schema_ShippingAddress"></a>
<a id="tocSshippingaddress"></a>
<a id="tocsshippingaddress"></a>

```json
{
  "additionalComponents": [
    {
      "longName": "string",
      "shortName": "string",
      "types": [
        "string"
      ]
    }
  ],
  "addressId": "string",
  "addressName": "string",
  "addressType": "string",
  "city": "string",
  "complement": "string",
  "country": "string",
  "formattedAddress": "string",
  "geoCoordinate": [
    0
  ],
  "neighborhood": "string",
  "number": "string",
  "postalCode": "string",
  "receiverName": "string",
  "reference": "string",
  "state": "string",
  "street": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalComponents|[[AdditionalComponent](#schemaadditionalcomponent)]|true|none|none|
|addressId|string|true|none|none|
|addressName|string|true|none|none|
|addressType|string|true|none|none|
|city|string|true|none|none|
|complement|string|true|none|none|
|country|string|true|none|none|
|formattedAddress|string|true|none|none|
|geoCoordinate|[integer(int32)]|true|none|none|
|neighborhood|string|true|none|none|
|number|string|true|none|none|
|postalCode|string|true|none|none|
|receiverName|string|true|none|none|
|reference|string|true|none|none|
|state|string|true|none|none|
|street|string|true|none|none|

<h2 id="tocS_Sku">Sku</h2>
<!-- backwards compatibility -->
<a id="schemasku"></a>
<a id="schema_Sku"></a>
<a id="tocSsku"></a>
<a id="tocssku"></a>

```json
{
  "detailUrl": "string",
  "id": "string",
  "imageUrl": "string",
  "name": "string",
  "nameComplete": "string",
  "productName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detailUrl|string|true|none|none|
|id|string|true|none|none|
|imageUrl|string|true|none|none|
|name|string|true|none|none|
|nameComplete|string|true|none|none|
|productName|string|true|none|none|

<h2 id="tocS_UpdateSubscriptionbygroupIdRequest">UpdateSubscriptionbygroupIdRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesubscriptionbygroupidrequest"></a>
<a id="schema_UpdateSubscriptionbygroupIdRequest"></a>
<a id="tocSupdatesubscriptionbygroupidrequest"></a>
<a id="tocsupdatesubscriptionbygroupidrequest"></a>

```json
{
  "isSkipped": true,
  "item": [
    {
      "SubscriptionId": "string",
      "createdAt": "2019-06-20T18:27:41.23Z",
      "cycleCount": 0,
      "endpoint": "string",
      "isSkipped": true,
      "lastUpdate": "2019-06-20T18:27:41.23Z",
      "metadata": [
        {
          "name": "string",
          "properties": {
            "additionalProp1": "string",
            "additionalProp2": "string",
            "additionalProp3": "string"
          }
        }
      ],
      "originalItemIndex": 0,
      "originalOrderId": "string",
      "priceAtSubscriptionDate": 0,
      "quantity": 0,
      "sellingPrice": 0,
      "sku": {
        "detailUrl": "string",
        "id": "string",
        "imageUrl": "string",
        "name": "string",
        "nameComplete": "string",
        "productName": "string"
      },
      "status": "ACTIVE"
    }
  ],
  "metadata": [
    {
      "name": "string",
      "properties": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      }
    }
  ],
  "plan": {
    "frequency": {
      "interval": 0,
      "periodicity": "string"
    },
    "type": "string",
    "validity": {
      "begin": "2019-06-20T18:27:41.23Z",
      "end": "2019-06-20T18:27:41.23Z"
    }
  },
  "purchaseSettings": {
    "currencyCode": "string",
    "paymentMethod": {
      "paymentAccountId": "string",
      "paymentSystem": "string"
    },
    "purchaseDay": "string",
    "salesChannel": "string",
    "selectedSla": "string",
    "seller": "string"
  },
  "shippingAddress": {
    "additionalComponents": [
      {
        "longName": "string",
        "shortName": "string",
        "types": [
          "string"
        ]
      }
    ],
    "addressId": "string",
    "addressName": "string",
    "addressType": "string",
    "city": "string",
    "complement": "string",
    "country": "string",
    "formattedAddress": "string",
    "geoCoordinate": [
      0
    ],
    "neighborhood": "string",
    "number": "string",
    "postalCode": "string",
    "receiverName": "string",
    "reference": "string",
    "state": "string",
    "street": "string"
  },
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isSkipped|boolean|true|none|none|
|item|[[Item1](#schemaitem1)]|true|none|none|
|metadata|[[Metadatum](#schemametadatum)]|true|none|none|
|plan|[Plan](#schemaplan)|true|none|none|
|purchaseSettings|[PurchaseSettings](#schemapurchasesettings)|true|none|none|
|shippingAddress|[ShippingAddress](#schemashippingaddress)|true|none|none|
|status|string|true|none|none|

<h2 id="tocS_UpdateSubscriptionsbySubscriptionIdRequest">UpdateSubscriptionsbySubscriptionIdRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesubscriptionsbysubscriptionidrequest"></a>
<a id="schema_UpdateSubscriptionsbySubscriptionIdRequest"></a>
<a id="tocSupdatesubscriptionsbysubscriptionidrequest"></a>
<a id="tocsupdatesubscriptionsbysubscriptionidrequest"></a>

```json
{
  "isSkipped": true,
  "item": {
    "endpoint": "string",
    "priceAtSubscriptionDate": 0,
    "quantity": 0,
    "sellingPrice": 0,
    "sku": {
      "detailUrl": "string",
      "id": "string",
      "imageUrl": "string",
      "name": "string",
      "nameComplete": "string",
      "productName": "string"
    }
  },
  "metadata": [
    {
      "name": "string",
      "properties": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      }
    }
  ],
  "plan": {
    "frequency": {
      "interval": 0,
      "periodicity": "string"
    },
    "type": "string",
    "validity": {
      "begin": "2019-07-04T14:40:30.819Z",
      "end": "2019-07-04T14:40:30.819Z"
    }
  },
  "purchaseSettings": {
    "currencyCode": "string",
    "paymentMethod": {
      "paymentAccountId": "string",
      "paymentSystem": "string"
    },
    "purchaseDay": "string",
    "salesChannel": "string",
    "selectedSla": "string",
    "seller": "string"
  },
  "shippingAddress": {
    "additionalComponents": [
      {
        "longName": "string",
        "shortName": "string",
        "types": [
          "string"
        ]
      }
    ],
    "addressId": "string",
    "addressName": "string",
    "addressType": "string",
    "city": "string",
    "complement": "string",
    "country": "string",
    "formattedAddress": "string",
    "geoCoordinate": [
      0
    ],
    "neighborhood": "string",
    "number": "string",
    "postalCode": "string",
    "receiverName": "string",
    "reference": "string",
    "state": "string",
    "street": "string"
  },
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isSkipped|boolean|true|none|none|
|item|[Item](#schemaitem)|true|none|none|
|metadata|[[Metadatum](#schemametadatum)]|true|none|none|
|plan|[Plan](#schemaplan)|true|none|none|
|purchaseSettings|[PurchaseSettings](#schemapurchasesettings)|true|none|none|
|shippingAddress|[ShippingAddress](#schemashippingaddress)|true|none|none|
|status|string|true|none|none|

<h2 id="tocS_Validity">Validity</h2>
<!-- backwards compatibility -->
<a id="schemavalidity"></a>
<a id="schema_Validity"></a>
<a id="tocSvalidity"></a>
<a id="tocsvalidity"></a>

```json
{
  "begin": "2019-07-04T14:40:30.819Z",
  "end": "2019-07-04T14:40:30.819Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|begin|string|true|none|none|
|end|string|true|none|none|

<h2 id="tocS_settings">settings</h2>
<!-- backwards compatibility -->
<a id="schemasettings"></a>
<a id="schema_settings"></a>
<a id="tocSsettings"></a>
<a id="tocssettings"></a>

```json
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
