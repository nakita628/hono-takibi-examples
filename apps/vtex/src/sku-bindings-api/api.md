<h1 id="sku-bindings-api">SKU Bindings API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br/api">https://{accountName}.{environment}.com.br/api</a> - VTEX server URL.

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="sku-bindings-api-sku-bindings">SKU Bindings</h1>

## Get SKU Bindings by SKU ID

<a id="opIdGetbySkuId"></a>

> Code samples

```bash
curl https://example.com/catalog/pvt/skusellers/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /catalog/pvt/skusellers/{skuId}`

Retrieves SKU Bindings details by SKU ID.

## Response body example

```json
[
    {
        "Id": 48,
        "SellerId": "cosmetics1",
        "StockKeepingUnitId": 1,
        "SellerSkuId": "42",
        "IsActive": true,
        "LastUpdateDate": "2020-10-21T19:13:00.657",
        "SalesPolicy": 0
    }
]
```

<h3 id="get-sku-bindings-by-sku-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|string|true|SKU's unique identifier in the marketplace.|

> Example responses

> 200 Response

```json
[
  [
    {
      "Id": 48,
      "IsActive": true,
      "LastUpdateDate": "2020-10-21T19:13:00.657",
      "SalesPolicy": 0,
      "SellerId": "cosmetics1",
      "SellerSkuId": "42",
      "StockKeepingUnitId": 1
    }
  ]
]
```

<h3 id="get-sku-bindings-by-sku-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-sku-bindings-by-sku-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Id|integer(int32)|false|none|SKU Binding ID.|
|» IsActive|boolean|false|none|Defines if the SKU binding is active.|
|» LastUpdateDate|string|false|none|Date when the SKU binding was updated for the last time, in UTC format.|
|» SalesPolicy|integer(int32)|false|none|Sales policy ID.|
|» SellerId|string|false|none|ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.|
|» SellerSkuId|string|false|none|SKU seller ID.|
|» StockKeepingUnitId|integer(int32)|false|none|SKU ID in the VTEX marketplace.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Activate SKU Binding

<a id="opIdActivateSKUBinding"></a>

> Code samples

```bash
curl https://example.com/sku-binding/pvt/skuseller/activate/vtxkfj7352/71 \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /sku-binding/pvt/skuseller/activate/{sellerId}/{skuSellerId}`

Changes the status of an SKU Binding to active, setting `isActive` to `true`.

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/activate/{sellerId}/{skuSellerId}`.

<h3 id="activate-sku-binding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|sellerId|path|string|true|ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.|
|skuSellerId|path|string|true|SKU ID in the seller's store.|

<h3 id="activate-sku-binding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get SKU Bindings information

<a id="opIdGetpagedadmin"></a>

> Code samples

```bash
curl https://example.com/sku-binding/pvt/skuseller/admin \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /sku-binding/pvt/skuseller/admin`

Retrieves SKU Bindings administrative information using optional query params `sellerId`, `skuId`, `sellerSkuId` and `IsActive` to filter results and `size` to restrict the amount of results. 

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/admin`.

## Response body example

```json
[
    {
        "IsPersisted": true,
        "IsRemoved": false,
        "SkuSellerId": 1,
        "UpdateDate": "2019-12-04T01:56:00.673Z",
        "RequestedUpdateDate": null,
        "SellerStockKeepingUnitId": "12",
        "SellerId": "cosmetics1",
        "StockKeepingUnitId": 25,
        "IsActive": true
    }
]
```

<h3 id="get-sku-bindings-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sellerId|query|string|false|ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.|
|skuId|query|string|false|SKU's unique identifier in the marketplace.|
|sellerSkuId|query|string|false|SKU ID in the seller's store.|
|isActive|query|boolean|false|Defines if the SKU binding is active.|
|size|query|string|false|Amount of results.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
[
  {
    "IsActive": true,
    "IsPersisted": true,
    "IsRemoved": false,
    "RequestedUpdateDate": null,
    "SellerId": "vtxkfj7352",
    "SellerStockKeepingUnitId": "71",
    "SkuSellerId": 102,
    "StockKeepingUnitId": 1,
    "UpdateDate": "2021-04-12T20:06:59.413Z"
  }
]
```

<h3 id="get-sku-bindings-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-sku-bindings-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsActive|boolean|false|none|Defines if the SKU binding is active.|
|IsPersisted|boolean|false|none|Defines if the seller is persisted.|
|IsRemoved|boolean|false|none|Defines if the seller is removed.|
|RequestedUpdateDate|string \| null|false|none|Date when an SKU binding update was requested for the last time, in UTC format.|
|SellerId|string|false|none|ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.|
|SellerStockKeepingUnitId|string|false|none|SKU ID in the seller's store.|
|SkuSellerId|integer(int32)|false|none|SKU Binding ID.|
|StockKeepingUnitId|integer(int32)|false|none|SKU ID in the VTEX marketplace.|
|UpdateDate|string|false|none|Date when the SKU binding was updated for the last time, in UTC format.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Change Notification with Seller ID and Seller SKU ID

> Code samples

```bash
curl https://example.com/sku-binding/pvt/skuseller/changenotification/101/1 \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /sku-binding/pvt/skuseller/changenotification/{sellerId}/{sellerSkuId}`

The seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.

With this notification, the seller is telling the marketplace that something has changed about a specific SKU, like price or inventory, or that this is a new SKU that the seller would like to offer to the marketplace.

There are two information expected by the marketplace in this request: the `sellerId`, which identifies the seller, and the `sellerSkuId`, which identifies the binding of the seller with the SKU.

Both information are passed through the request URL. The body of the request should be empty.
 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/changenotification/{sellerId}/{sellerSkuId}`.

## Example

Let's say your seller has the ID `123` in the marketplace and you want to inform the marketplace that has been a change in the SKU with ID `700`.

In this case, you would have to replace the `sellerId` parameter with the value `123` and the `skuId` parameter with the value `700`. The URL of the request would be the following.

```
https://{{accountName}}.vtexcommercestable.com.br/api/sku-binding/pvt/skuseller/changenotification/123/700
```

## Response codes

The following response codes are possible for this request.
* 200: the SKU whose ID was informed in the URL already exists in the marketplace and was found. The marketplace can now proceed with a fulfillment simulation in order to get updated information about this SKU's inventory and price.
* 403: Failure in the authentication.
* 404: the SKU was not found in the marketplace. The body of the response, in this case, should follow this format: "Seller StockKeepingUnit `{{skuId}}` not found for this seller id `{{sellerId}}`. This means that the seller can now proceed with sending an offer to the marketplace in order to suggest that this SKU is sold there.
* 429: Failure due to too many requests.

<h3 id="change-notification-with-seller-id-and-seller-sku-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|sellerId|path|string|true|ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.|
|sellerSkuId|path|string|true|ID of the binding of the seller with the SKU.|

<h3 id="change-notification-with-seller-id-and-seller-sku-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not found|None|
|429|Too Many Requests|Too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Change Notification with SKU ID

<a id="opIdChangeNotification"></a>

> Code samples

```bash
curl https://example.com/sku-binding/pvt/skuseller/changenotification/10 \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /sku-binding/pvt/skuseller/changenotification/{skuId}`

The seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.

With this notification, the seller is telling the marketplace that something has changed about a specific SKU, like price or inventory, or that this is a new SKU that the seller would like to offer to the marketplace.

The body of the request should be empty.

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/changenotification/{skuId}`.

<h3 id="change-notification-with-sku-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|string|true|A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use to look for the SKU whose change the seller wants to inform. If the marketplace finds this ID, it responds with status code `200`. Otherwise, it responds with status code `404`.|

<h3 id="change-notification-with-sku-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not found|None|
|429|Too Many Requests|Too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Deactivate SKU Binding

<a id="opIdDeactivateSKUBinding"></a>

> Code samples

```bash
curl https://example.com/sku-binding/pvt/skuseller/inactivate/vtxkfj7352/71 \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /sku-binding/pvt/skuseller/inactivate/{sellerId}/{skuSellerId}`

Changes the status of an SKU Binding to inactive, setting `isActive` to `false`.

  > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/inactivate/{sellerId}/{skuSellerId}`.

<h3 id="deactivate-sku-binding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|sellerId|path|string|true|ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.|
|skuSellerId|path|string|true|SKU ID in the seller's store.|

<h3 id="deactivate-sku-binding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Insert SKU Binding

<a id="opIdInsertSKUBinding"></a>

> Code samples

```bash
curl https://example.com/sku-binding/pvt/skuseller/insertion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "IsActive": true,
    "SellerId": "vtxkfj7352",
    "SellerStockKeepingUnitId": "71",
    "StockKeepingUnitId": 1
  }'
```

`POST /sku-binding/pvt/skuseller/insertion`

Creates an SKU Binding, associating a seller's SKU with a marketplace's SKU.

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/insertion`.

> Body parameter

```json
{
  "IsActive": true,
  "SellerId": "vtxkfj7352",
  "SellerStockKeepingUnitId": "71",
  "StockKeepingUnitId": 1
}
```

<h3 id="insert-sku-binding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|true|Request body|
|» IsActive|body|boolean|true|Defines if the SKU binding is active.|
|» SellerId|body|string|true|ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.|
|» SellerStockKeepingUnitId|body|string|true|SKU seller ID.|
|» StockKeepingUnitId|body|integer(int32)|true|SKU ID in the marketplace.|

<h3 id="insert-sku-binding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|None|
|409|Conflict|Conflict|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get all SKU Bindings by Seller ID

<a id="opIdGetallbySellerId"></a>

> Code samples

```bash
curl https://example.com/sku-binding/pvt/skuseller/list/bysellerId/vtxkfj7352 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /sku-binding/pvt/skuseller/list/bysellerId/{sellerId}`

Retrieves a list of SKU Bindings given a specific Seller ID. 

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/list/bysellerId/{sellerId}`.

## Response body example

```json
[
    {
        "SellerStockKeepingUnitId": "24",
        "FreightCommissionPercentage": null,
        "ProductCommissionPercentage": null,
        "SellerId": "vtxkfj7352",
        "StockKeepingUnitId": 121,
        "IsActive": true
    }
]
```

<h3 id="get-all-sku-bindings-by-seller-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|sellerId|path|string|true|ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.|

> Example responses

> 200 Response

```json
[
  {
    "FreightCommissionPercentage": null,
    "IsActive": true,
    "ProductCommissionPercentage": null,
    "SellerId": "vtxkfj7352",
    "SellerStockKeepingUnitId": "24",
    "StockKeepingUnitId": 121
  }
]
```

<h3 id="get-all-sku-bindings-by-seller-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-all-sku-bindings-by-seller-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» FreightCommissionPercentage|number \| null|false|none|The percentage that must be filled in as agreed between the marketplace and the seller.|
|» IsActive|boolean|false|none|Defines if the SKU binding is active.|
|» ProductCommissionPercentage|number \| null|false|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|» SellerId|string|false|none|ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.|
|» SellerStockKeepingUnitId|string|false|none|SKU ID in the seller's store.|
|» StockKeepingUnitId|integer(int32)|false|none|SKU ID in the marketplace.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get paged SKU Bindings by Seller ID

<a id="opIdGetpagedbySellerId"></a>

> Code samples

```bash
curl 'https://example.com/sku-binding/pvt/skuseller/paged/sellerid/vtxkfj7352?page=1&size=2' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /sku-binding/pvt/skuseller/paged/sellerid/{sellerId}`

Retrieves a paged list of SKU Bindings given a specific Seller ID. 

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/paged/sellerid/{sellerId}`.

## Response body example

```json
[
    {
        "SellerId": "vtxkfj7352",
        "StockKeepingUnitId": 121,
        "SellerStockKeepingUnitId": "24",
        "IsActive": true,
        "FreightCommissionPercentage": null,
        "ProductCommissionPercentage": null
    },
    {
        "SellerId": "vtxkfj7352",
        "StockKeepingUnitId": 14,
        "SellerStockKeepingUnitId": "60",
        "IsActive": true,
        "FreightCommissionPercentage": null,
        "ProductCommissionPercentage": null
    }
]
```

<h3 id="get-paged-sku-bindings-by-seller-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|string|true|Page number.|
|size|query|string|true|Amount of results per page.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|sellerId|path|string|true|ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.|

> Example responses

> 200 Response

```json
[
  {
    "FreightCommissionPercentage": null,
    "IsActive": true,
    "ProductCommissionPercentage": null,
    "SellerId": "vtxkfj7352",
    "SellerStockKeepingUnitId": "24",
    "StockKeepingUnitId": 121
  },
  {
    "FreightCommissionPercentage": null,
    "IsActive": true,
    "ProductCommissionPercentage": null,
    "SellerId": "vtxkfj7352",
    "SellerStockKeepingUnitId": "60",
    "StockKeepingUnitId": 14
  }
]
```

<h3 id="get-paged-sku-bindings-by-seller-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-paged-sku-bindings-by-seller-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» FreightCommissionPercentage|number \| null|false|none|The percentage that must be filled in as agreed between the marketplace and the seller.|
|» IsActive|boolean|false|none|Defines if the SKU binding is active.|
|» ProductCommissionPercentage|number \| null|false|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|» SellerId|string|false|none|ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.|
|» SellerStockKeepingUnitId|string|false|none|SKU ID in the seller's store.|
|» StockKeepingUnitId|integer(int32)|false|none|SKU ID in the marketplace.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Remove a seller's SKU Binding

<a id="opIdDeleteSKUsellerassociation"></a>

> Code samples

```bash
curl https://example.com/sku-binding/pvt/skuseller/remove/vtxkfj7352/71 \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /sku-binding/pvt/skuseller/remove/{sellerId}/{sellerSkuId}`

Remove a seller's SKU binding, given the Seller ID and the SKU ID in the seller's store.

  > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/remove/{sellerId}/{sellerSkuId}`.

<h3 id="remove-a-sellers-sku-binding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|sellerId|path|string|true|ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.|
|sellerSkuId|path|string|true|SKU ID in the seller's store.|

<h3 id="remove-a-sellers-sku-binding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get details of a seller's SKU

<a id="opIdGetSKUseller"></a>

> Code samples

```bash
curl https://example.com/sku-binding/pvt/skuseller/101/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /sku-binding/pvt/skuseller/{sellerId}/{sellerSkuId}`

Retrieves the details of a seller's SKU given a seller ID and the SKU ID in the seller's store. 

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/{sellerId}/{sellerSkuId}`.

## Response body example

```json
{
    "IsPersisted": true,
    "IsRemoved": false,
    "SkuSellerId": 102,
    "UpdateDate": "2021-04-12T20:06:59.413Z",
    "RequestedUpdateDate": null,
    "SellerStockKeepingUnitId": "71",
    "SellerId": "vtxkfj7352",
    "StockKeepingUnitId": 1,
    "IsActive": true
}
```

<h3 id="get-details-of-a-sellers-sku-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|sellerId|path|string|true|ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.|
|sellerSkuId|path|string|true|SKU ID in the seller's store.|

> Example responses

> 200 Response

```json
{
  "IsActive": true,
  "IsPersisted": true,
  "IsRemoved": false,
  "RequestedUpdateDate": null,
  "SellerId": "myseller",
  "SellerStockKeepingUnitId": "502",
  "SkuSellerId": 799,
  "StockKeepingUnitId": 50,
  "UpdateDate": "2018-10-11T04:52:42.1"
}
```

<h3 id="get-details-of-a-sellers-sku-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-details-of-a-sellers-sku-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsActive|boolean|true|none|Defines if the SKU binding is active.|
|IsPersisted|boolean|true|none|Defines if the seller is persisted.|
|IsRemoved|boolean|true|none|Defines if the seller is removed.|
|RequestedUpdateDate|string \| null|true|none|Date when an SKU binding update was requested for the last time, in UTC format.|
|SellerId|string|true|none|ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.|
|SellerStockKeepingUnitId|string|true|none|SKU seller ID.|
|SkuSellerId|integer(int32)|true|none|SKU ID in the seller's store.|
|StockKeepingUnitId|integer(int32)|true|none|SKU ID in the VTEX marketplace.|
|UpdateDate|string|true|none|Date when the SKU binding was updated for the last time, in UTC format.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Bind a seller's SKU to another SKU

<a id="opIdBindtoanothersku"></a>

> Code samples

```bash
curl https://example.com/sku-binding/pvt/skuseller/101/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "StockKeepingUnitId": 1
  }'
```

`PUT /sku-binding/pvt/skuseller/{sellerId}/{sellerSkuId}`

Associates a seller's SKU to another marketplace SKU.

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/{sellerId}/{sellerSkuId}`.

## Request body example

```json
{
    "StockKeepingUnitId": 1
}
```

> Body parameter

```json
{
  "StockKeepingUnitId": 1
}
```

<h3 id="bind-a-sellers-sku-to-another-sku-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|sellerId|path|string|true|ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.|
|sellerSkuId|path|string|true|SKU ID in the seller's store.|
|body|body|object|false|Request body|
|» StockKeepingUnitId|body|integer(int32)|true|SKU ID in the marketplace.|

<h3 id="bind-a-sellers-sku-to-another-sku-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>
