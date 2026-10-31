<h1 id="catalog-api">Catalog API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


> Check the new [Catalog onboarding guide](https://developers.vtex.com/docs/guides/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer's journey.

Methods for collecting product/SKU catalog data, categories, brands and other information. All content that comes between `{{}}` keys must be replaced with the correct data before performing the request.


## Index

- [Product](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/products/GetProductAndSkuIds) - Here you can consult, create, or update a Product. For more information, check [this article](https://help.vtex.com/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru).
- [Product Specification](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/products/-productId-/specification) - You can consult, create, or update additional information of a Product.  For more information, check [this article](https://help.vtex.com/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#product-specification).
- [SKU](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/sku/stockkeepingunitids) - Here you can consult, create, or update an SKU. For more information, check [this article](https://help.vtex.com/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA).
- [SKU Complement](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/stockkeepingunit/-skuId-/complement) - You can consult, create, or update an SKU Complement. An SKU Complement is a new SKU that has a Parent SKU.
- [SKU EAN](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/sku/stockkeepingunitbyean/-ean-) -  Here you can consult, create, or update an SKU unique identification code (barcode).
- [SKU Attachment](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skuattachment) - You can consult, create, or update an SKU Attachment. An attachment is used to add custom information about the item. For more information, check [this article](https://help.vtex.com/tutorial/what-is-an-attachment--aGICk0RVbqKg6GYmQcWUm?locale=en).
- [SKU File](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/stockkeepingunit/-skuId-/file) - Here you can consult, create, or update an SKU File. An SKU File is an image associated with an SKU.
- [SKU Kit](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/stockkeepingunitkit) - You can consult, create, or update an SKU Kit. A kit is an SKU composed of one or more SKUs. For more information, check [this article](https://help.vtex.com/tutorial/what-is-a-kit--5ov5s3eHM4AqAAgqWwoc28?locale=en).
- [SKU Seller](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/skuseller/-sellerId-/-sellerSkuId-) - Here you can consult and delete an SKU Seller. An SKU Seller is a seller associated with an SKU. For more information, check [this article](https://help.vtex.com/tutorial/what-is-a-seller--5FkLvhZ3Few4CWWIuYOK2w?locale=en).
- [SKU Service](https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/skuservice/-skuServiceId-) - You can create, update, or delete an SKU Service. A service is an item that may come with a product, optionally, and with a cost. For more information, check [this article](https://help.vtex.com/tutorial/what-is-a-service--46Ha8CEEQoC6Y40i6akG0y?locale=en).
- [SKU Service Attachment](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skuservicetypeattachment) - Here you can associate or disassociate an Attachment to an SKU Service.
- [SKU Service Type](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skuservicetype) - You can create, update, or delete an SKU Service Type. A service type is the behavior configuration of a service.
- [SKU Service Value](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skuservicevalue) - Here you can create, update, or delete an SKU Service Value. Service value is how much the customer will be charged for the service.
- [SKU Specification](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/stockkeepingunit/-skuId-/specification) - You can consult, create, or delete an SKU Specification. SKU Specification is used to create site browsing filters and to differentiate SKUs within the product page. For more information, check [this article](https://help.vtex.com/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP?locale=en#sku-specifications).
- [Legacy Subcollection](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/subcollection/-subCollectionId-/stockkeepingunit) - Here you can can consult, create, or delete an SKU, Brand or Category from a Subcollection, as well as create, delete and update subcollections. A subcollection is a group type associated with a collection. For more information, check [this article](https://help.vtex.com/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/3moFonW33dgOYDrU21Z1X0#group-types).
- [Category](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pub/category/tree/-categoryLevels-) - You consult, create, or update a Category. A category is a hierarchical level of product classification. For more information, check [this article](https://help.vtex.com/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf).
- [Similar Category](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/product/-productId-/similarcategory/) - Here you can create and delete a Similar Category to a Product. This way the Product will be shown in both categories (main and similar).
- [Category Specification](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pub/specification/field/listByCategoryId/-categoryId-) - You can consult all Specifications by Category. For more information about Specification, check [this article](https://help.vtex.com/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP).
- [Brand](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/brand/list) - You can consult, create, update, or delete a Brand. A brand is a product property. For more information, check [this article](https://help.vtex.com/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/7i3sB8fgkqUp5NoH5yJtfh).
- [Attachment](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/attachment/-attachmentid-) - You can consult, create, or update an Attachment. An attachment is used to add custom information about the item. For more information, check [this article](https://help.vtex.com/tutorial/what-is-an-attachment--aGICk0RVbqKg6GYmQcWUm?locale=en).
- [Collection Beta](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/collection/search) - The new [Beta Collections module](https://help.vtex.com/announcements/new-beta-collections-module-easily-create-and-manage-product-collections--6KvFxylC5SNsbVm8L8XZpZ#) launch allowed us to engineer new endpoints that create and manage Collections. For more information, check [this article](https://help.vtex.com/en/tutorial/creating-collections-beta--yJBHqNMViOAnnnq4fyOye?&utm_source=autocomplete#).
- [Legacy Collection](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/collection/-collectionId-) - Here you can consult, create, update, or delete a Collection. A collection is a group of items. For more information, check [this article](https://help.vtex.com/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/4hN41yU8IPeb8HKmmaXoca?locale=en).
- [Specification](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/specification/-specificationId-) - Here you can consult, create, or delete a Specification. A specification is used to create site browsing filters and to differentiate SKUs and Products within the product page. For more information, check [this article](https://help.vtex.com/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP?locale=en).
- [Specification Field](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pub/specification/fieldGet/-fieldId-) - You can consult, create, or update a Specification Field. A specification field allows you to present more detailed items. 
- [Specification Field Value](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/specification/fieldValue/-fieldValueId-) - Here you can consult, create, or update a Specification Field Value. 
- [Specification Value](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/specificationvalue/-specificationValueId-) - You can consult, create, or update a Specification Value.
- [Specification Group](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/specification/groupbycategory/-categoryId-) - Here you can consult, create, or update a Specification Group.
- [Non Structured Specification](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/specification/nonstructured/-Id-) - You can consult or delete a Non Structured Specification.
- [Sales Channel](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/saleschannel/list) - Here you can consult Sales Channel.
- [Seller](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/seller/list) - You can consult, create, or update a Seller. A seller is the _product owner_. For more information, check [this article](https://help.vtex.com/tutorial/what-is-a-seller--5FkLvhZ3Few4CWWIuYOK2w?locale=en).
- [Supplier](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/supplier) - Here you can consult, create, or update a Supplier.
- [Trade Policy](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/product/-productId-/salespolicy) - You can create, update, or delete a Trade Policy. Trade policy is required when one of the above factors is different among the sale channel. For more information, check [this article](https://help.vtex.com/tutorial/what-is-a-sales-policy--563tbcL0TYKEKeOY4IAgAE?locale=en).
- [Product Indexing](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/products/GetIndexedInfo/-productId-) - Here you can consult Product Indexed information.
- [Commercial Conditions](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/commercialcondition/list) - Here you can consult commercial conditions registered in the store.


## Common parameters

| Parameter name              | Description                                                                             |
|---------------------------|-----------------------------------------------------------------------------------------|
| `{{accountName}}`         | Store account name                                                                      |
| `{{environment}`          | The environment that will be called. Change for vtexcommercestable or vtexcommmercebeta |
| `{{X-VTEX-API-AppKey}}`   | Located in the headers of the requests, user authentication key                         |
| `{{X-VTEX-API-AppToken}}` | Located in the headers of the requests, authentication password                         |

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br">https://{accountName}.{environment}.com.br</a> - VTEX server url

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="catalog-api-sku-service">SKU Service</h1>

## Associate SKU Service

> Code samples

```bash
curl https://example.com/api/catalog/pvt/skuservice \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "IsActive": true,
    "Name": "Engraving",
    "SkuId": 1,
    "SkuServiceTypeId": 1,
    "SkuServiceValueId": 1,
    "Text": "Name engraving additional service."
  }'
```

`POST /api/catalog/pvt/skuservice`

Associates an SKU Service to an SKU.

> Body parameter

```json
{
  "IsActive": true,
  "Name": "Engraving",
  "SkuId": 1,
  "SkuServiceTypeId": 1,
  "SkuServiceValueId": 1,
  "Text": "Name engraving additional service."
}
```

<h3 id="associate-sku-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|false|none|
|» IsActive|body|boolean|true|Defines if the SKU Service is active or not.|
|» Name|body|string|true|SKU Service Name. Maximum of 50 characters.|
|» SkuId|body|integer|true|SKU ID.|
|» SkuServiceTypeId|body|integer|true|SKU Service Type ID.|
|» SkuServiceValueId|body|integer|true|SKU Service Value ID.|
|» Text|body|string|true|Internal description of the SKU Service. Maximum of 100 characters.|

> Example responses

> 200 Response

```json
{
  "Id": 1,
  "IsActive": false,
  "Name": "name",
  "SkuId": 1,
  "SkuServiceTypeId": 1,
  "SkuServiceValueId": 1,
  "Text": "text"
}
```

<h3 id="associate-sku-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SKUService](#schemaskuservice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get SKU Service

> Code samples

```bash
curl https://example.com/api/catalog/pvt/skuservice/5 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/skuservice/{skuServiceId}`

Retrieves an SKU Service. 
## Response body example

```json
{
    "Id": 1,
    "SkuServiceTypeId": 1,
    "SkuServiceValueId": 1,
    "SkuId": 1,
    "Name": "name",
    "Text": "text",
    "IsActive": false
}
```

<h3 id="get-sku-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuServiceId|path|integer|true|SKU Service unique identifier.|

> Example responses

> 200 Response

```json
{
  "Id": 1,
  "IsActive": false,
  "Name": "name",
  "SkuId": 1,
  "SkuServiceTypeId": 1,
  "SkuServiceValueId": 1,
  "Text": "text"
}
```

<h3 id="get-sku-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SKUService](#schemaskuservice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update SKU Service

> Code samples

```bash
curl https://example.com/api/catalog/pvt/skuservice/5 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "IsActive": true,
    "Name": "Test name",
    "SkuId": 1,
    "SkuServiceTypeId": 2,
    "SkuServiceValueId": 1,
    "Text": "Text"
  }'
```

`PUT /api/catalog/pvt/skuservice/{skuServiceId}`

Updates an SKU Service. 
## Request body example

```json
{
    "Name": "name",
    "Text": "text",
    "IsActive": false
}
```

## Response body example

```json
{
    "Id": 1,
    "SkuServiceTypeId": 1,
    "SkuServiceValueId": 1,
    "SkuId": 1,
    "Name": "name",
    "Text": "text",
    "IsActive": false
}
```

> Body parameter

```json
{
  "IsActive": true,
  "Name": "Test name",
  "SkuId": 1,
  "SkuServiceTypeId": 2,
  "SkuServiceValueId": 1,
  "Text": "Text"
}
```

<h3 id="update-sku-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuServiceId|path|integer|true|SKU Service unique identifier.|
|body|body|object|false|none|
|» IsActive|body|boolean|true|Defines if the SKU Service is active or not.|
|» Name|body|string|true|SKU Service Name. Maximum of 50 characters.|
|» SkuId|body|integer|true|SKU ID.|
|» SkuServiceTypeId|body|integer|true|SKU Service Type ID.|
|» SkuServiceValueId|body|integer|true|SKU Service Value ID.|
|» Text|body|string|true|Internal description for the SKU Service. Maximum of 100 characters.|

> Example responses

> 200 Response

```json
{
  "Id": 1,
  "IsActive": false,
  "Name": "name",
  "SkuId": 1,
  "SkuServiceTypeId": 1,
  "SkuServiceValueId": 1,
  "Text": "text"
}
```

<h3 id="update-sku-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SKUService](#schemaskuservice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Dissociate SKU Service

> Code samples

```bash
curl https://example.com/api/catalog/pvt/skuservice/1 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/skuservice/{skuServiceId}`

Dissociates an SKU Service from an SKU.

<h3 id="dissociate-sku-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuServiceId|path|integer|true|SKU Service unique identifier.|

<h3 id="dissociate-sku-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-sku-service-attachment">SKU Service Attachment</h1>

## Associate SKU Service Attachment

> Code samples

```bash
curl https://example.com/api/catalog/pvt/skuservicetypeattachment \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "AttachmentId": 1,
    "SkuServiceTypeId": 1
  }'
```

`POST /api/catalog/pvt/skuservicetypeattachment`

Associates an Attachment for an existing SKU Service Type. 
## Request body example

```json
{
    "AttachmentId": 1,
    "SkuServiceTypeId": 1
}
```

## Response body example

```json
{
    "Id": 1,
    "AttachmentId": 1,
    "SkuServiceTypeId": 1
}
```

> Body parameter

```json
{
  "AttachmentId": 1,
  "SkuServiceTypeId": 1
}
```

<h3 id="associate-sku-service-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|false|none|
|» AttachmentId|body|integer|true|Attachment ID.|
|» SkuServiceTypeId|body|integer|true|An explanation about the purpose of this instance.|

> Example responses

> 200 Response

```json
{
  "AttachmentId": 1,
  "Id": 1,
  "SkuServiceTypeId": 1
}
```

<h3 id="associate-sku-service-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="associate-sku-service-attachment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttachmentId|integer|false|none|Attachment ID.|
|Id|integer|false|none|SKU Service Type Attachment association ID.|
|SkuServiceTypeId|integer|false|none|SKU Service Type ID.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Dissociate Attachment by Attachment ID or SKU Service Type ID

> Code samples

```bash
curl https://example.com/api/catalog/pvt/skuservicetypeattachment \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/skuservicetypeattachment`

Dissociates an Attachment by its Attachment ID or SKU Service Type ID from an SKU Service Type.

<h3 id="dissociate-attachment-by-attachment-id-or-sku-service-type-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|attachmentId|query|integer|false|SKU Service Attachment unique identifier.|
|skuServiceTypeId|query|integer|false|SKU Service Type unique identifier.|

<h3 id="dissociate-attachment-by-attachment-id-or-sku-service-type-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Dissociate Attachment from SKU Service Type

> Code samples

```bash
curl https://example.com/api/catalog/pvt/skuservicetypeattachment/1 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/skuservicetypeattachment/{skuServiceTypeAttachmentId}`

Dissociates an Attachment from an SKU Service Type

<h3 id="dissociate-attachment-from-sku-service-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuServiceTypeAttachmentId|path|integer|true|SKU Service Attachment unique identifier.|

<h3 id="dissociate-attachment-from-sku-service-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-sku-service-value">SKU Service Value</h1>

## Create SKU Service Value

> Code samples

```bash
curl https://example.com/api/catalog/pvt/skuservicevalue \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "Cost": 10.5,
    "Name": "Test ServiceValue API",
    "SkuServiceTypeId": 2,
    "Value": 10.5
  }'
```

`POST /api/catalog/pvt/skuservicevalue`

Creates an SKU Service Value for an existing SKU Service Type. 
## Request body example

```json
{
    "SkuServiceTypeId": 2,
    "Name": "Test ServiceValue API",
    "Value": 10.5,
    "Cost": 10.5
}
```

## Response body example

```json
{
    "Id": 2,
    "SkuServiceTypeId": 2,
    "Name": "Test ServiceValue API",
    "Value": 10.5,
    "Cost": 10.5
}
```

> Body parameter

```json
{
  "Cost": 10.5,
  "Name": "Test ServiceValue API",
  "SkuServiceTypeId": 2,
  "Value": 10.5
}
```

<h3 id="create-sku-service-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[SKUServiceValueRequest](#schemaskuservicevaluerequest)|false|none|
|» Cost|body|number|true|SKU Service Value cost.|
|» Name|body|string|true|SKU Service Value name. Maximum of 100 characters.|
|» SkuServiceTypeId|body|integer|true|SKU Service Type ID.|
|» Value|body|number|true|SKU Service Value value.|

> Example responses

> 200 Response

```json
{
  "Cost": 10.5,
  "Id": 2,
  "Name": "Test ServiceValue API",
  "SkuServiceTypeId": 2,
  "Value": 10.5
}
```

<h3 id="create-sku-service-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SKUServiceValueResponse](#schemaskuservicevalueresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get SKU Service Value

> Code samples

```bash
curl https://example.com/api/catalog/pvt/skuservicevalue/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/skuservicevalue/{skuServiceValueId}`

Retrieves an existing SKU Service Value. 
## Response body example

```json
{
    "Id": 2,
    "SkuServiceTypeId": 2,
    "Name": "Test ServiceValue API",
    "Value": 10.5,
    "Cost": 10.5
}
```

<h3 id="get-sku-service-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuServiceValueId|path|integer|true|SKU Service Value unique identifier.|

> Example responses

> 200 Response

```json
{
  "Cost": 10.5,
  "Id": 2,
  "Name": "Test ServiceValue API",
  "SkuServiceTypeId": 2,
  "Value": 10.5
}
```

<h3 id="get-sku-service-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SKUServiceValueResponse](#schemaskuservicevalueresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update SKU Service Value

> Code samples

```bash
curl https://example.com/api/catalog/pvt/skuservicevalue/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "Cost": 10.5,
    "Name": "Test ServiceValue API",
    "SkuServiceTypeId": 2,
    "Value": 10.5
  }'
```

`PUT /api/catalog/pvt/skuservicevalue/{skuServiceValueId}`

Updates an existing SKU Service Value. 
## Request body example

```json
{
    "SkuServiceTypeId": 2,
    "Name": "Test ServiceValue API",
    "Value": 10.5,
    "Cost": 10.5
}
```

## Response body example

```json
{
    "Id": 2,
    "SkuServiceTypeId": 2,
    "Name": "Test ServiceValue API",
    "Value": 10.5,
    "Cost": 10.5
}
```

> Body parameter

```json
{
  "Cost": 10.5,
  "Name": "Test ServiceValue API",
  "SkuServiceTypeId": 2,
  "Value": 10.5
}
```

<h3 id="update-sku-service-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuServiceValueId|path|integer|true|SKU Service Value unique identifier.|
|body|body|[SKUServiceValueRequest](#schemaskuservicevaluerequest)|false|none|
|» Cost|body|number|true|SKU Service Value cost.|
|» Name|body|string|true|SKU Service Value name. Maximum of 100 characters.|
|» SkuServiceTypeId|body|integer|true|SKU Service Type ID.|
|» Value|body|number|true|SKU Service Value value.|

> Example responses

> 200 Response

```json
{
  "Cost": 10.5,
  "Id": 2,
  "Name": "Test ServiceValue API",
  "SkuServiceTypeId": 2,
  "Value": 10.5
}
```

<h3 id="update-sku-service-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SKUServiceValueResponse](#schemaskuservicevalueresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete SKU Service Value

> Code samples

```bash
curl https://example.com/api/catalog/pvt/skuservicevalue/1 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/skuservicevalue/{skuServiceValueId}`

Deletes an existing SKU Service Value.

<h3 id="delete-sku-service-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuServiceValueId|path|integer|true|SKU Service Value unique identifier.|

<h3 id="delete-sku-service-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-sku-service-type">SKU Service Type</h1>

## Create SKU Service Type

> Code samples

```bash
curl https://example.com/api/catalog/pvt/skuservicetype \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "IsActive": true,
    "IsGiftCard": false,
    "IsRequired": false,
    "Name": "Test API Sku Services",
    "ShowOnAttachmentFront": false,
    "ShowOnCartFront": false,
    "ShowOnFileUpload": false,
    "ShowOnProductFront": false
  }'
```

`POST /api/catalog/pvt/skuservicetype`

Creates a new SKU Service Type. 
## Request body example

```json
{
    "Name": "Test API Sku Services",
    "IsActive": true,
    "ShowOnProductFront": true,
    "ShowOnCartFront": true,
    "ShowOnAttachmentFront": true,
    "ShowOnFileUpload": true,
    "IsGiftCard": true,
    "IsRequired": true
}
```

## Response body example

```json
{
    "Id": 2,
    "Name": "Teste API Sku Services",
    "IsActive": true,
    "ShowOnProductFront": true,
    "ShowOnCartFront": true,
    "ShowOnAttachmentFront": true,
    "ShowOnFileUpload": true,
    "IsGiftCard": true,
    "IsRequired": true
}
```

> Body parameter

```json
{
  "IsActive": true,
  "IsGiftCard": false,
  "IsRequired": false,
  "Name": "Test API Sku Services",
  "ShowOnAttachmentFront": false,
  "ShowOnCartFront": false,
  "ShowOnFileUpload": false,
  "ShowOnProductFront": false
}
```

<h3 id="create-sku-service-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[SKUServiceTypeRequest](#schemaskuservicetyperequest)|false|none|
|» IsActive|body|boolean|true|Defines if the SKU Service Type is active or not.|
|» IsGiftCard|body|boolean|true|Defines if the SKU Service Type is displayed as a Gift Card.|
|» IsRequired|body|boolean|true|Defines if the SKU Service type is mandatory.|
|» Name|body|string|true|SKU Service Type Name. Maximum of 100 characters.|
|» ShowOnAttachmentFront|body|boolean|true|Defines if the SKU Service Type has an attachment.|
|» ShowOnCartFront|body|boolean|true|Defines if the SKU Service Type is displayed on the cart screen.|
|» ShowOnFileUpload|body|boolean|true|Defines if the SKU Service Type can be associated with an attachment or not.|
|» ShowOnProductFront|body|boolean|true|**Deprecated.** Deprecated|

> Example responses

> 200 Response

```json
{
  "Id": 2,
  "IsActive": true,
  "IsGiftCard": true,
  "IsRequired": true,
  "Name": "Test API SKU Services",
  "ShowOnAttachmentFront": true,
  "ShowOnCartFront": true,
  "ShowOnFileUpload": true,
  "ShowOnProductFront": true
}
```

<h3 id="create-sku-service-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SKUServiceTypeResponse](#schemaskuservicetyperesponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get SKU Service Type

> Code samples

```bash
curl https://example.com/api/catalog/pvt/skuservicetype/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/skuservicetype/{skuServiceTypeId}`

Retrieves information about an existing SKU Service Type. 
## Response body example:

```json
{
    "Id": 2,
    "Name": "Test API SKU Services",
    "IsActive": true,
    "ShowOnProductFront": true,
    "ShowOnCartFront": true,
    "ShowOnAttachmentFront": true,
    "ShowOnFileUpload": true,
    "IsGiftCard": true,
    "IsRequired": true
}
```

<h3 id="get-sku-service-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuServiceTypeId|path|integer|true|SKU Service Type unique identifier.|

> Example responses

> 200 Response

```json
{
  "Id": 2,
  "IsActive": true,
  "IsGiftCard": true,
  "IsRequired": true,
  "Name": "Test API SKU Services",
  "ShowOnAttachmentFront": true,
  "ShowOnCartFront": true,
  "ShowOnFileUpload": true,
  "ShowOnProductFront": true
}
```

<h3 id="get-sku-service-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SKUServiceTypeResponse](#schemaskuservicetyperesponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update SKU Service Type

> Code samples

```bash
curl https://example.com/api/catalog/pvt/skuservicetype/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "IsActive": true,
    "IsGiftCard": false,
    "IsRequired": false,
    "Name": "Test API Sku Services",
    "ShowOnAttachmentFront": false,
    "ShowOnCartFront": false,
    "ShowOnFileUpload": false,
    "ShowOnProductFront": false
  }'
```

`PUT /api/catalog/pvt/skuservicetype/{skuServiceTypeId}`

Updates an existing SKU Service Type.  
## Request body example

```json
{
    "Name": "Test API Sku Services",
    "IsActive": true,
    "ShowOnProductFront": true,
    "ShowOnCartFront": true,
    "ShowOnAttachmentFront": true,
    "ShowOnFileUpload": true,
    "IsGiftCard": true,
    "IsRequired": true
}
```

## Response body example

```json
{
    "Id": 2,
    "Name": "Teste API Sku Services",
    "IsActive": true,
    "ShowOnProductFront": true,
    "ShowOnCartFront": true,
    "ShowOnAttachmentFront": true,
    "ShowOnFileUpload": true,
    "IsGiftCard": true,
    "IsRequired": true
}
```

> Body parameter

```json
{
  "IsActive": true,
  "IsGiftCard": false,
  "IsRequired": false,
  "Name": "Test API Sku Services",
  "ShowOnAttachmentFront": false,
  "ShowOnCartFront": false,
  "ShowOnFileUpload": false,
  "ShowOnProductFront": false
}
```

<h3 id="update-sku-service-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuServiceTypeId|path|integer|true|SKU Service Type unique identifier.|
|body|body|[SKUServiceTypeRequest](#schemaskuservicetyperequest)|false|none|
|» IsActive|body|boolean|true|Defines if the SKU Service Type is active or not.|
|» IsGiftCard|body|boolean|true|Defines if the SKU Service Type is displayed as a Gift Card.|
|» IsRequired|body|boolean|true|Defines if the SKU Service type is mandatory.|
|» Name|body|string|true|SKU Service Type Name. Maximum of 100 characters.|
|» ShowOnAttachmentFront|body|boolean|true|Defines if the SKU Service Type has an attachment.|
|» ShowOnCartFront|body|boolean|true|Defines if the SKU Service Type is displayed on the cart screen.|
|» ShowOnFileUpload|body|boolean|true|Defines if the SKU Service Type can be associated with an attachment or not.|
|» ShowOnProductFront|body|boolean|true|**Deprecated.** Deprecated|

> Example responses

> 200 Response

```json
{
  "Id": 2,
  "IsActive": true,
  "IsGiftCard": true,
  "IsRequired": true,
  "Name": "Test API SKU Services",
  "ShowOnAttachmentFront": true,
  "ShowOnCartFront": true,
  "ShowOnFileUpload": true,
  "ShowOnProductFront": true
}
```

<h3 id="update-sku-service-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SKUServiceTypeResponse](#schemaskuservicetyperesponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete SKU Service Type

> Code samples

```bash
curl https://example.com/api/catalog/pvt/skuservicetype/1 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/skuservicetype/{skuServiceTypeId}`

Deletes an existing SKU Service Type.

<h3 id="delete-sku-service-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuServiceTypeId|path|integer|true|SKU Service Type unique identifier.|

<h3 id="delete-sku-service-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-category">Category</h1>

## Create Category

> Code samples

```bash
curl https://example.com/api/catalog/pvt/category \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "ActiveStoreFrontLink": true,
    "AdWordsRemarketingCode": null,
    "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",
    "FatherCategoryId": null,
    "GlobalCategoryId": 800,
    "IsActive": true,
    "Keywords": "Kitchen, Laundry, Appliances",
    "LomadeeCampaignCode": null,
    "Name": "Home Appliances",
    "Score": null,
    "ShowBrandFilter": true,
    "ShowInStoreFront": true,
    "StockKeepingUnitSelectionMode": "SPECIFICATION",
    "Title": "Home Appliances"
  }'
```

`POST /api/catalog/pvt/category`

Creates a new Category.

If there is a need to create a new category with a specific custom ID, specify the `Id` (integer) in the request. Otherwise, VTEX will generate the ID automatically.

## Request body example (automatically generated ID)

```json
{
    "Name": "Home Appliances",
    "FatherCategoryId": null,
    "Title": "Home Appliances",
    "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",
    "Keywords": "Kitchen, Laundry, Appliances",
    "IsActive": true,
    "LomadeeCampaignCode": null,
    "AdWordsRemarketingCode": null,
    "ShowInStoreFront": true,
    "ShowBrandFilter": true,
    "ActiveStoreFrontLink": true,
    "GlobalCategoryId": 604,
    "StockKeepingUnitSelectionMode": "SPECIFICATION",
    "Score": null
}
```

## Request body example (custom ID)

```json
{
    "Id": 1,
    "Name": "Home Appliances",
    "FatherCategoryId": null,
    "Title": "Home Appliances",
    "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",
    "Keywords": "Kitchen, Laundry, Appliances",
    "IsActive": true,
    "LomadeeCampaignCode": null,
    "AdWordsRemarketingCode": null,
    "ShowInStoreFront": true,
    "ShowBrandFilter": true,
    "ActiveStoreFrontLink": true,
    "GlobalCategoryId": 604,
    "StockKeepingUnitSelectionMode": "SPECIFICATION",
    "Score": null
}
```

## Response body example

```json
{
    "Id": 1,
    "Name": "Home Appliances",
    "FatherCategoryId": null,
    "Title": "Home Appliances",
    "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",
    "Keywords": "Kitchen, Laundry, Appliances",
    "IsActive": true,
    "LomadeeCampaignCode": "",
    "AdWordsRemarketingCode": "",
    "ShowInStoreFront": true,
    "ShowBrandFilter": true,
    "ActiveStoreFrontLink": true,
    "GlobalCategoryId": 604,
    "StockKeepingUnitSelectionMode": "LIST",
    "Score": null,
    "LinkId": "Alimentacao",
    "HasChildren": true
}
```

> Body parameter

```json
{
  "ActiveStoreFrontLink": true,
  "AdWordsRemarketingCode": null,
  "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",
  "FatherCategoryId": null,
  "GlobalCategoryId": 800,
  "IsActive": true,
  "Keywords": "Kitchen, Laundry, Appliances",
  "LomadeeCampaignCode": null,
  "Name": "Home Appliances",
  "Score": null,
  "ShowBrandFilter": true,
  "ShowInStoreFront": true,
  "StockKeepingUnitSelectionMode": "SPECIFICATION",
  "Title": "Home Appliances"
}
```

<h3 id="create-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[CreateCategoryRequest](#schemacreatecategoryrequest)|false|none|
|» ActiveStoreFrontLink|body|boolean|true|If true, the Category link becomes active in store.|
|» AdWordsRemarketingCode|body|string \| null|true|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|» Description|body|string|true|Text used in meta description tag for Category page.|
|» FatherCategoryId|body|integer \| null|true|ID of the parent category, apply in case of category and subcategory.|
|» GlobalCategoryId|body|integer|true|Google Global Category ID.|
|» Id|body|integer|false|Category unique identifier. If not informed, it will be automatically generated by VTEX.|
|» IsActive|body|boolean|true|If true, the Category page becomes available in store.|
|» Keywords|body|string|true|Substitute words for the Category.|
|» LomadeeCampaignCode|body|string \| null|true|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|» Name|body|string|true|Category name.|
|» Score|body|integer \| null|true|Score for search sorting order.|
|» ShowBrandFilter|body|boolean|true|If true, the Category page displays a Brand filter.|
|» ShowInStoreFront|body|boolean|true|If true, the Category is shown in the top and side menu.|
|» StockKeepingUnitSelectionMode|body|string|true|Defines how the SKU will be exhibited|
|» Title|body|string|true|Text used in title tag for Category page.|

> Example responses

> 200 Response

```json
{
  "ActiveStoreFrontLink": true,
  "AdWordsRemarketingCode": "",
  "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",
  "FatherCategoryId": null,
  "GlobalCategoryId": 3367,
  "HasChildren": true,
  "Id": 1,
  "IsActive": true,
  "Keywords": "Kitchen, Laundry, Appliances",
  "LinkId": "Alimentacao",
  "LomadeeCampaignCode": "",
  "Name": "Home Appliances",
  "Score": null,
  "ShowBrandFilter": true,
  "ShowInStoreFront": true,
  "StockKeepingUnitSelectionMode": "LIST",
  "Title": "Home Appliances"
}
```

<h3 id="create-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Category](#schemacategory)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Category by ID

> Code samples

```bash
curl https://example.com/api/catalog/pvt/category/9289 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/category/{categoryId}`

Retrieves general information about a Category. 
## Response body example

```json
{
    "Id": 1,
    "Name": "Home Appliances",
    "FatherCategoryId": null,
    "Title": "Home Appliances",
    "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",
    "Keywords": "Kitchen, Laundry, Appliances",
    "IsActive": true,
    "LomadeeCampaignCode": "",
    "AdWordsRemarketingCode": "",
    "ShowInStoreFront": true,
    "ShowBrandFilter": true,
    "ActiveStoreFrontLink": true,
    "GlobalCategoryId": 3367,
    "StockKeepingUnitSelectionMode": "LIST",
    "Score": null,
    "LinkId": "Alimentacao",
    "HasChildren": true
}
```

<h3 id="get-category-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|categoryId|path|integer|true|Category’s unique numerical identifier.|

> Example responses

> 200 Response

```json
{
  "ActiveStoreFrontLink": true,
  "AdWordsRemarketingCode": "",
  "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",
  "FatherCategoryId": null,
  "GlobalCategoryId": 3367,
  "HasChildren": true,
  "Id": 1,
  "IsActive": true,
  "Keywords": "Kitchen, Laundry, Appliances",
  "LinkId": "Alimentacao",
  "LomadeeCampaignCode": "",
  "Name": "Home Appliances",
  "Score": null,
  "ShowBrandFilter": true,
  "ShowInStoreFront": true,
  "StockKeepingUnitSelectionMode": "LIST",
  "Title": "Home Appliances"
}
```

<h3 id="get-category-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Category](#schemacategory)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Category

> Code samples

```bash
curl https://example.com/api/catalog/pvt/category/9289 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "ActiveStoreFrontLink": true,
    "AdWordsRemarketingCode": "Sale",
    "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",
    "FatherCategoryId": 2,
    "GlobalCategoryId": 222,
    "IsActive": true,
    "Keywords": "Kitchen, Laundry, Appliances",
    "LomadeeCampaignCode": "Sale",
    "Name": "Home Appliances",
    "Score": 3,
    "ShowBrandFilter": true,
    "ShowInStoreFront": true,
    "StockKeepingUnitSelectionMode": "SPECIFICATION",
    "Title": "Home Appliances"
  }'
```

`PUT /api/catalog/pvt/category/{categoryId}`

Updates a previously existing Category.

## Request body example

```json
{
    "Name": "Home Appliances",
    "FatherCategoryId": null,
    "Title": "Home Appliances",
    "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",
    "Keywords": "Kitchen, Laundry, Appliances",
    "IsActive": true,
    "LomadeeCampaignCode": null,
    "AdWordsRemarketingCode": null,
    "ShowInStoreFront": true,
    "ShowBrandFilter": true,
    "ActiveStoreFrontLink": true,
    "GlobalCategoryId": 604,
    "StockKeepingUnitSelectionMode": "SPECIFICATION",
    "Score": null
}
```

## Response body example

```json
{
    "Id": 1,
    "Name": "Home Appliances",
    "FatherCategoryId": null,
    "Title": "Home Appliances",
    "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",
    "Keywords": "Kitchen, Laundry, Appliances",
    "IsActive": true,
    "LomadeeCampaignCode": "",
    "AdWordsRemarketingCode": "",
    "ShowInStoreFront": true,
    "ShowBrandFilter": true,
    "ActiveStoreFrontLink": true,
    "GlobalCategoryId": 604,
    "StockKeepingUnitSelectionMode": "LIST",
    "Score": null,
    "LinkId": "Alimentacao",
    "HasChildren": true
}
```

> Body parameter

```json
{
  "ActiveStoreFrontLink": true,
  "AdWordsRemarketingCode": "Sale",
  "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",
  "FatherCategoryId": 2,
  "GlobalCategoryId": 222,
  "IsActive": true,
  "Keywords": "Kitchen, Laundry, Appliances",
  "LomadeeCampaignCode": "Sale",
  "Name": "Home Appliances",
  "Score": 3,
  "ShowBrandFilter": true,
  "ShowInStoreFront": true,
  "StockKeepingUnitSelectionMode": "SPECIFICATION",
  "Title": "Home Appliances"
}
```

<h3 id="update-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|categoryId|path|integer|true|Category’s unique numerical identifier.|
|body|body|object|false|none|
|» ActiveStoreFrontLink|body|boolean|true|If true, the Category link becomes active in store.|
|» AdWordsRemarketingCode|body|string|true|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|» Description|body|string|true|Text used in meta description tag for Category page.|
|» FatherCategoryId|body|integer \| null|true|ID of the parent category, apply in case of category and subcategory.|
|» GlobalCategoryId|body|integer|true|Google Global Category ID.|
|» IsActive|body|boolean|true|If true, the Category page becomes available in store.|
|» Keywords|body|string|true|Substitute words for the Category.|
|» LomadeeCampaignCode|body|string|true|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|» Name|body|string|true|Category name.|
|» Score|body|integer|true|Score for search sorting order.|
|» ShowBrandFilter|body|boolean|true|If true, the Category page displays a Brand filter.|
|» ShowInStoreFront|body|boolean|true|If true, the Category is shown in the top and side menu.|
|» StockKeepingUnitSelectionMode|body|string|true|Defines how the SKU will be exhibited|
|» Title|body|string|true|Text used in title tag for Category page.|

> Example responses

> 200 Response

```json
{
  "ActiveStoreFrontLink": true,
  "AdWordsRemarketingCode": "",
  "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",
  "FatherCategoryId": null,
  "GlobalCategoryId": 3367,
  "HasChildren": true,
  "Id": 1,
  "IsActive": true,
  "Keywords": "Kitchen, Laundry, Appliances",
  "LinkId": "Alimentacao",
  "LomadeeCampaignCode": "",
  "Name": "Home Appliances",
  "Score": null,
  "ShowBrandFilter": true,
  "ShowInStoreFront": true,
  "StockKeepingUnitSelectionMode": "LIST",
  "Title": "Home Appliances"
}
```

<h3 id="update-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Category](#schemacategory)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Category Tree

<a id="opIdCategoryTree"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/category/tree/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/category/tree/{categoryLevels}`

Retrieves the Category Tree of your store. Get all the category levels registered in the Catalog or define the level up to which you want to get.  
> 📘 Onboarding guide 
>
> Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer's journey. 
## Response body example

```json
[
    {
        "id": 1,
        "name": "Alimentação",
        "hasChildren": true,
        "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao",
        "children": [
            {
                "id": 6,
                "name": "Bebedouro",
                "hasChildren": false,
                "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/bebedouro",
                "children": [],
                "Title": "Bebedouro para Gatos",
                "MetaTagDescription": ""
            },
            {
                "id": 7,
                "name": "Comedouro",
                "hasChildren": false,
                "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/comedouro",
                "children": [],
                "Title": "Comedouro para Gatos",
                "MetaTagDescription": ""
            },
            {
                "id": 8,
                "name": "Biscoitos",
                "hasChildren": false,
                "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/biscoitos",
                "children": [],
                "Title": "Biscoitos para Gatos",
                "MetaTagDescription": ""
            },
            {
                "id": 9,
                "name": "Petiscos",
                "hasChildren": false,
                "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/petiscos",
                "children": [],
                "Title": "Petiscos para Gatos",
                "MetaTagDescription": ""
            },
            {
                "id": 10,
                "name": "Ração Seca",
                "hasChildren": false,
                "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/racao-seca",
                "children": [],
                "Title": "Ração Seca para Gatos",
                "MetaTagDescription": ""
            },
            {
                "id": 11,
                "name": "Ração Úmida",
                "hasChildren": false,
                "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/racao-umida",
                "children": [],
                "Title": "Ração Úmida para Gatos",
                "MetaTagDescription": ""
            }
        ],
        "Title": "Alimentação para Gatos",
        "MetaTagDescription": ""
    },
    {
        "id": 2,
        "name": "Brinquedos",
        "hasChildren": true,
        "url": "https://lojadobreno.vtexcommercestable.com.br/brinquedos",
        "children": [
            {
                "id": 12,
                "name": "Bolinhas",
                "hasChildren": false,
                "url": "https://lojadobreno.vtexcommercestable.com.br/brinquedos/bolinhas",
                "children": [],
                "Title": "Bolinhas para Gatos",
                "MetaTagDescription": ""
            },
            {
                "id": 13,
                "name": "Ratinhos",
                "hasChildren": false,
                "url": "https://lojadobreno.vtexcommercestable.com.br/brinquedos/ratinhos",
                "children": [],
                "Title": "Ratinhos",
                "MetaTagDescription": ""
            },
            {
                "id": 19,
                "name": "Arranhador para gato",
                "hasChildren": false,
                "url": "https://lojadobreno.vtexcommercestable.com.br/brinquedos/arranhador-para-gato",
                "children": [],
                "Title": "Brinquedo Arranhador para gatos",
                "MetaTagDescription": "Arranhador gatos é indispensável no lar com felinos. Ideais para afiar as unhas e garantir a diversão"
            }
        ],
        "Title": "Brinquedos para Gatos",
        "MetaTagDescription": ""
    }
]
```

<h3 id="get-category-tree-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|categoryLevels|path|string|true|Value of the category level you need to retrieve.|

> Example responses

> 200 Response

```json
[
  {
    "MetaTagDescription": "",
    "Title": "Alimentação para Gatos",
    "children": [
      {
        "MetaTagDescription": "",
        "Title": "Bebedouro para Gatos",
        "children": [],
        "hasChildren": false,
        "id": 6,
        "name": "Bebedouro",
        "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/bebedouro"
      },
      {
        "MetaTagDescription": "",
        "Title": "Comedouro para Gatos",
        "children": [],
        "hasChildren": false,
        "id": 7,
        "name": "Comedouro",
        "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/comedouro"
      },
      {
        "MetaTagDescription": "",
        "Title": "Biscoitos para Gatos",
        "children": [],
        "hasChildren": false,
        "id": 8,
        "name": "Biscoitos",
        "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/biscoitos"
      },
      {
        "MetaTagDescription": "",
        "Title": "Petiscos para Gatos",
        "children": [],
        "hasChildren": false,
        "id": 9,
        "name": "Petiscos",
        "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/petiscos"
      },
      {
        "MetaTagDescription": "",
        "Title": "Ração Seca para Gatos",
        "children": [],
        "hasChildren": false,
        "id": 10,
        "name": "Ração Seca",
        "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/racao-seca"
      },
      {
        "MetaTagDescription": "",
        "Title": "Ração Úmida para Gatos",
        "children": [],
        "hasChildren": false,
        "id": 11,
        "name": "Ração Úmida",
        "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/racao-umida"
      }
    ],
    "hasChildren": true,
    "id": 1,
    "name": "Alimentação",
    "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao"
  },
  {
    "MetaTagDescription": "",
    "Title": "Brinquedos para Gatos",
    "children": [
      {
        "MetaTagDescription": "",
        "Title": "Bolinhas para Gatos",
        "children": [],
        "hasChildren": false,
        "id": 12,
        "name": "Bolinhas",
        "url": "https://lojadobreno.vtexcommercestable.com.br/brinquedos/bolinhas"
      },
      {
        "MetaTagDescription": "",
        "Title": "Ratinhos",
        "children": [],
        "hasChildren": false,
        "id": 13,
        "name": "Ratinhos",
        "url": "https://lojadobreno.vtexcommercestable.com.br/brinquedos/ratinhos"
      },
      {
        "MetaTagDescription": "Arranhador gatos é indispensável no lar com felinos. Ideais para afiar as unhas e garantir a diversão",
        "Title": "Brinquedo Arranhador para gatos",
        "children": [],
        "hasChildren": false,
        "id": 19,
        "name": "Arranhador para gato",
        "url": "https://lojadobreno.vtexcommercestable.com.br/brinquedos/arranhador-para-gato"
      }
    ],
    "hasChildren": true,
    "id": 2,
    "name": "Brinquedos",
    "url": "https://lojadobreno.vtexcommercestable.com.br/brinquedos"
  }
]
```

<h3 id="get-category-tree-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-category-tree-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GetCategoryTree](#schemagetcategorytree)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-brand">Brand</h1>

## Create Brand

> Code samples

```bash
curl https://example.com/api/catalog/pvt/brand \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "Active": true,
    "AdWordsRemarketingCode": "",
    "Id": 2000013,
    "Keywords": "orma",
    "LinkId": null,
    "LomadeeCampaignCode": "",
    "MenuHome": true,
    "Name": "Orma Carbono2",
    "Score": null,
    "SiteTitle": "Orma Carbon2",
    "Text": "Orma Carbon2"
  }'
```

`POST /api/catalog/pvt/brand`

Creates a new Brand.
## Request and response body example

```json
{
  "Id": 2000013,
  "Name": "Orma Carbon",
  "Text": "Orma Carbon",
  "Keywords": "orma",
  "SiteTitle": "Orma Carbon",
  "Active": true,
  "MenuHome": true,
  "AdWordsRemarketingCode": "",
  "LomadeeCampaignCode": "",
  "Score": null,
  "LinkId": "orma-carbon"
}
```

> Body parameter

```json
{
  "Active": true,
  "AdWordsRemarketingCode": "",
  "Id": 2000013,
  "Keywords": "orma",
  "LinkId": null,
  "LomadeeCampaignCode": "",
  "MenuHome": true,
  "Name": "Orma Carbono2",
  "Score": null,
  "SiteTitle": "Orma Carbon2",
  "Text": "Orma Carbon2"
}
```

<h3 id="create-brand-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[BrandCreateUpdate](#schemabrandcreateupdate)|false|Request body.|
|» Active|body|boolean|false|Defines if the brand is active (`true`) or not (`false`).|
|» AdWordsRemarketingCode|body|string|false|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|» Id|body|integer|true|Brand's unique numerical identifier.|
|» Keywords|body|string|false|Store Framework - Deprecated.<br>Legacy CMS Portal - Alternative search terms that will lead to the specific brand. The user can find the desired brand even when misspelling it. Used especially when words are of foreign origin and have a distinct spelling that is transcribed into a generic one, or when small spelling mistakes occur.<br>|
|» LinkId|body|string \| null|false|Brand page slug. Only lowercase letters and hyphens (`-`) are allowed.|
|» LomadeeCampaignCode|body|string|false|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|» MenuHome|body|boolean|false|Store Framework - Deprecated.<br>Legacy CMS Portal - Defines if the Brand appears in the Department Menu control (`<vtex.cmc:departmentNavigator/>`).<br>|
|» Name|body|string|true|Brand name.|
|» Score|body|integer \| null|false|Store Framework - Deprecated<br>Legacy CMS Portal - Value used to set the priority on the search result page.<br>|
|» SiteTitle|body|string|false|Meta Title for the Brand page.|
|» Text|body|string|false|Meta Description for the Brand page. A brief description of the brand, displayed by search engines. Since search engines can only display less than 150 characters, we recommend not exceeding this character limit when creating the description.|

> Example responses

> 200 Response

```json
{
  "Active": true,
  "AdWordsRemarketingCode": "",
  "Id": 2000013,
  "Keywords": "orma",
  "LinkId": "orma-carbon",
  "LomadeeCampaignCode": "",
  "MenuHome": true,
  "Name": "Orma Carbon",
  "Score": null,
  "SiteTitle": "Orma Carbon",
  "Text": "Orma Carbon"
}
```

<h3 id="create-brand-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BrandCreateUpdate](#schemabrandcreateupdate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Brand and context

> Code samples

```bash
curl https://example.com/api/catalog/pvt/brand/123 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/brand/{brandId}`

Retrieves information about a specific Brand and its context.
## Response body example

```json
{
  "Id": 2000013,
  "Name": "Orma Carbon",
  "Text": "Orma Carbon",
  "Keywords": "orma",
  "SiteTitle": "Orma Carbon",
  "Active": true,
  "MenuHome": true,
  "AdWordsRemarketingCode": "",
  "LomadeeCampaignCode": "",
  "Score": null,
  "LinkId": "orma-carbon"
}
```

<h3 id="get-brand-and-context-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|brandId|path|string|true|Brand ID.|

> Example responses

> 200 Response

```json
{
  "Active": true,
  "AdWordsRemarketingCode": "",
  "Id": 2000013,
  "Keywords": "orma",
  "LinkId": "orma-carbon",
  "LomadeeCampaignCode": "",
  "MenuHome": true,
  "Name": "Orma Carbon",
  "Score": null,
  "SiteTitle": "Orma Carbon",
  "Text": "Orma Carbon"
}
```

<h3 id="get-brand-and-context-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BrandCreateUpdate](#schemabrandcreateupdate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Brand

> Code samples

```bash
curl https://example.com/api/catalog/pvt/brand/123 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "Active": true,
    "AdWordsRemarketingCode": "",
    "Id": 2000013,
    "Keywords": "orma",
    "LinkId": null,
    "LomadeeCampaignCode": "",
    "MenuHome": true,
    "Name": "Orma Carbono2",
    "Score": null,
    "SiteTitle": "Orma Carbon2",
    "Text": "Orma Carbon2"
  }'
```

`PUT /api/catalog/pvt/brand/{brandId}`

Updates a previously existing Brand.
## Request and response body example

```json
{
  "Id": 2000013,
  "Name": "Orma Carbon",
  "Text": "Orma Carbon",
  "Keywords": "orma",
  "SiteTitle": "Orma Carbon",
  "Active": true,
  "MenuHome": true,
  "AdWordsRemarketingCode": "",
  "LomadeeCampaignCode": "",
  "Score": null,
  "LinkId": "orma-carbon"
}
```

> Body parameter

```json
{
  "Active": true,
  "AdWordsRemarketingCode": "",
  "Id": 2000013,
  "Keywords": "orma",
  "LinkId": null,
  "LomadeeCampaignCode": "",
  "MenuHome": true,
  "Name": "Orma Carbono2",
  "Score": null,
  "SiteTitle": "Orma Carbon2",
  "Text": "Orma Carbon2"
}
```

<h3 id="update-brand-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|brandId|path|string|true|Brand’s unique numerical identifier.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[BrandCreateUpdate](#schemabrandcreateupdate)|false|none|
|» Active|body|boolean|false|Defines if the brand is active (`true`) or not (`false`).|
|» AdWordsRemarketingCode|body|string|false|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|» Id|body|integer|true|Brand's unique numerical identifier.|
|» Keywords|body|string|false|Store Framework - Deprecated.<br>Legacy CMS Portal - Alternative search terms that will lead to the specific brand. The user can find the desired brand even when misspelling it. Used especially when words are of foreign origin and have a distinct spelling that is transcribed into a generic one, or when small spelling mistakes occur.<br>|
|» LinkId|body|string \| null|false|Brand page slug. Only lowercase letters and hyphens (`-`) are allowed.|
|» LomadeeCampaignCode|body|string|false|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|» MenuHome|body|boolean|false|Store Framework - Deprecated.<br>Legacy CMS Portal - Defines if the Brand appears in the Department Menu control (`<vtex.cmc:departmentNavigator/>`).<br>|
|» Name|body|string|true|Brand name.|
|» Score|body|integer \| null|false|Store Framework - Deprecated<br>Legacy CMS Portal - Value used to set the priority on the search result page.<br>|
|» SiteTitle|body|string|false|Meta Title for the Brand page.|
|» Text|body|string|false|Meta Description for the Brand page. A brief description of the brand, displayed by search engines. Since search engines can only display less than 150 characters, we recommend not exceeding this character limit when creating the description.|

> Example responses

> 200 Response

```json
{
  "Active": true,
  "AdWordsRemarketingCode": "",
  "Id": 2000013,
  "Keywords": "orma",
  "LinkId": "orma-carbon",
  "LomadeeCampaignCode": "",
  "MenuHome": true,
  "Name": "Orma Carbon",
  "Score": null,
  "SiteTitle": "Orma Carbon",
  "Text": "Orma Carbon"
}
```

<h3 id="update-brand-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BrandCreateUpdate](#schemabrandcreateupdate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete Brand

> Code samples

```bash
curl https://example.com/api/catalog/pvt/brand/123 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/brand/{brandId}`

Deletes an existing Brand.

<h3 id="delete-brand-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|brandId|path|string|true|Brand’s unique numerical identifier.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

<h3 id="delete-brand-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Brand List

<a id="opIdBrandList"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/brand/list \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/brand/list`

Retrieves all Brands registered in the store's Catalog. 
>⚠️ This route's response is limited to 20k results. If you need to obtain more results, please use the [Get Brand List](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-brand-list) endpoint instead to get a paginated response. 
## Response body example

```json
[
  {
    "id": 9280,
    "name": "Brand",
    "isActive": true,
    "title": "Brand",
    "metaTagDescription": "Brand",
    "imageUrl": null
  },
  {
    "id": 2000000,
    "name": "Orma Carbon",
    "isActive": true,
    "title": "Orma Carbon",
    "metaTagDescription": "Orma Carbon",
    "imageUrl": null
  },
  {
    "id": 2000001,
    "name": "Pedigree",
    "isActive": true,
    "title": "Pedigree",
    "metaTagDescription": "",
    "imageUrl": null
  }
]
```

<h3 id="get-brand-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
[
  {
    "id": 9280,
    "imageUrl": null,
    "isActive": true,
    "metaTagDescription": "Brand",
    "name": "Brand",
    "title": "Brand"
  },
  {
    "id": 2000000,
    "imageUrl": null,
    "isActive": true,
    "metaTagDescription": "Orma Carbon",
    "name": "Orma Carbon",
    "title": "Orma Carbon"
  },
  {
    "id": 2000001,
    "imageUrl": null,
    "isActive": true,
    "metaTagDescription": "",
    "name": "Pedigree",
    "title": "Pedigree"
  }
]
```

<h3 id="get-brand-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-brand-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BrandGet](#schemabrandget)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Brand List Per Page

<a id="opIdBrandListPerPage"></a>

> Code samples

```bash
curl 'https://example.com/api/catalog_system/pvt/brand/pagedlist?pageSize=5&page=1' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/brand/pagedlist`

Retrieves all Brands registered in the store's Catalog by page number.
## Response body example

```json
{
  "items": [
    {
      "id": 2000000,
      "name": "Farm",
      "isActive": true,
      "title": "Farm",
      "metaTagDescription": "Farm",
      "imageUrl": null
    },
    {
      "id": 2000001,
      "name": "Adidas",
      "isActive": true,
      "title": "",
      "metaTagDescription": "",
      "imageUrl": null
    },
    {
      "id": 2000002,
      "name": "Brastemp",
      "isActive": true,
      "title": "Brastemp",
      "metaTagDescription": "Brastemp",
      "imageUrl": null
    }
  ],
    "paging": {
      "page": 1,
        "perPage": 3,
          "total": 6,
            "pages": 2
    }
}
```

<h3 id="get-brand-list-per-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|pageSize|query|integer|true|Quantity of brands per page.|
|page|query|integer|true|Page number of the brand list.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": 2000000,
      "imageUrl": null,
      "isActive": true,
      "metaTagDescription": "Farm",
      "name": "Farm",
      "title": "Farm"
    },
    {
      "id": 2000001,
      "imageUrl": null,
      "isActive": true,
      "metaTagDescription": "",
      "name": "Adidas",
      "title": ""
    },
    {
      "id": 2000002,
      "imageUrl": null,
      "isActive": true,
      "metaTagDescription": "Brastemp",
      "name": "Brastemp",
      "title": "Brastemp"
    }
  ],
  "paging": {
    "page": 1,
    "pages": 2,
    "perPage": 3,
    "total": 6
  }
}
```

<h3 id="get-brand-list-per-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-brand-list-per-page-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[BrandGet](#schemabrandget)]|true|none|Array of objects with information of the store's brands.|
|paging|object|true|none|Object with pagination information.|
|» page|integer|true|none|Page number of the brand list.|
|» pages|integer|true|none|Total number of pages.|
|» perPage|integer|true|none|Quantity of brands per page.|
|» total|integer|true|none|Total of brands in the store.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Brand

<a id="opIdBrand"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/brand/123 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/brand/{brandId}`

Retrieves a specific Brand by its ID.
## Response body example

```json
{
  "id": 7000000,
  "name": "Pedigree",
  "isActive": true,
  "title": "Pedigree",
  "metaTagDescription": "Pedigree",
  "imageUrl": null
}
```

<h3 id="get-brand-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|brandId|path|string|true|Brand ID.|

> Example responses

> 200 Response

```json
{
  "id": 7000000,
  "imageUrl": null,
  "isActive": true,
  "metaTagDescription": "Pedigree",
  "name": "Pedigree",
  "title": "Pedigree"
}
```

<h3 id="get-brand-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BrandGet](#schemabrandget)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-attachment">Attachment</h1>

## Create attachment

> Code samples

```bash
curl https://example.com/api/catalog/pvt/attachment \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "Domains": [
      {
        "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic",
        "FieldName": "Sauce",
        "MaxCaracters": ""
      },
      {
        "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium",
        "FieldName": "Toppings",
        "MaxCaracters": ""
      }
    ],
    "IsActive": true,
    "IsRequired": true,
    "Name": "Ingredients"
  }'
```

`POST /api/catalog/pvt/attachment`

Creates a new SKU attachment.
 >⚠️ To understand the specific syntax for Assembly Options attachments, read the [Assembly Options](https://help.vtex.com/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH#assembly-options-syntax) documentation. 
## Request body example

```json
{
  "Name": "Test",
  "IsRequired": true,
  "IsActive": true,
  "Domains": [
    {
      "FieldName": "Basic test",
      "MaxCaracters": "",
      "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic"
    },
    {
      "FieldName": "teste",
      "MaxCaracters": "",
      "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium"
    }
  ]
}
```
## Response body example

```json
{
  "Id": 8,
  "Name": "Test",
  "IsRequired": true,
  "IsActive": true,
  "Domains": [
    {
      "FieldName": "Basic test",
      "MaxCaracters": "",
      "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic"
    },
    {
      "FieldName": "teste",
      "MaxCaracters": "",
      "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium"
    }
  ]
}
```

> Body parameter

```json
{
  "Domains": [
    {
      "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic",
      "FieldName": "Sauce",
      "MaxCaracters": ""
    },
    {
      "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium",
      "FieldName": "Toppings",
      "MaxCaracters": ""
    }
  ],
  "IsActive": true,
  "IsRequired": true,
  "Name": "Ingredients"
}
```

<h3 id="create-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[AttachmentRequest](#schemaattachmentrequest)|false|none|
|» Domains|body|[object]|true|List of characteristics related to the attachment.|
|» » DomainValues|body|string|false|Allowed key values.|
|» » FieldName|body|string|false|Attachment key name.|
|» » MaxCaracters|body|string|false|Maximum number of characters in the attachment key.|
|» IsActive|body|boolean|true|Defines if the attachment is active or not.|
|» IsRequired|body|boolean|true|Defines if the attachment is required or not.|
|» Name|body|string|true|Attachment Name.|

> Example responses

> 200 Response

```json
{
  "Domains": [
    {
      "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic",
      "FieldName": "Sauce",
      "MaxCaracters": ""
    },
    {
      "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium",
      "FieldName": "Toppings",
      "MaxCaracters": ""
    }
  ],
  "Id": 8,
  "IsActive": true,
  "IsRequired": true,
  "Name": "Ingredients"
}
```

<h3 id="create-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AttachmentResponse](#schemaattachmentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get attachment

> Code samples

```bash
curl https://example.com/api/catalog/pvt/attachment/8 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/attachment/{attachmentid}`

Gets information about a registered attachment. 
 >⚠️ To understand the specific syntax for Assembly Options attachments, read the [Assembly Options](https://help.vtex.com/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH#assembly-options-syntax) documentation.
## Response body example

```json
{
  "Id": 8,
  "Name": "Test",
  "IsRequired": true,
  "IsActive": true,
  "Domains": [
    {
      "FieldName": "Basic test",
      "MaxCaracters": "",
      "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic"
    },
    {
      "FieldName": "teste",
      "MaxCaracters": "",
      "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium"
    }
  ]
}
```

<h3 id="get-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attachmentid|path|string|true|Attachment ID.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
{
  "Domains": [
    {
      "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic",
      "FieldName": "Sauce",
      "MaxCaracters": ""
    },
    {
      "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium",
      "FieldName": "Toppings",
      "MaxCaracters": ""
    }
  ],
  "Id": 8,
  "IsActive": true,
  "IsRequired": true,
  "Name": "Ingredients"
}
```

<h3 id="get-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AttachmentResponse](#schemaattachmentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update attachment

> Code samples

```bash
curl https://example.com/api/catalog/pvt/attachment/vtexcommercestable \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "Domains": [
      {
        "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic",
        "FieldName": "Sauce",
        "MaxCaracters": ""
      },
      {
        "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium",
        "FieldName": "Toppings",
        "MaxCaracters": ""
      }
    ],
    "IsActive": true,
    "IsRequired": true,
    "Name": "Ingredients"
  }'
```

`PUT /api/catalog/pvt/attachment/{attachmentid}`

Updates a previously existing SKU attachment with new information. 
 >⚠️ To understand the specific syntax for Assembly Options attachments, read the [Assembly Options](https://help.vtex.com/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH#assembly-options-syntax) documentation. 
## Request body example

```json
{
  "Name": "Test",
  "IsRequired": true,
  "IsActive": true,
  "Domains": [
    {
      "FieldName": "Basic test",
      "MaxCaracters": "",
      "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic"
    },
    {
      "FieldName": "teste",
      "MaxCaracters": "",
      "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium"
    }
  ]
}
```
## Response body example

```json
{
  "Id": 8,
  "Name": "Test",
  "IsRequired": true,
  "IsActive": true,
  "Domains": [
    {
      "FieldName": "Basic test",
      "MaxCaracters": "",
      "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic"
    },
    {
      "FieldName": "teste",
      "MaxCaracters": "",
      "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium"
    }
  ]
}
```

> Body parameter

```json
{
  "Domains": [
    {
      "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic",
      "FieldName": "Sauce",
      "MaxCaracters": ""
    },
    {
      "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium",
      "FieldName": "Toppings",
      "MaxCaracters": ""
    }
  ],
  "IsActive": true,
  "IsRequired": true,
  "Name": "Ingredients"
}
```

<h3 id="update-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attachmentid|path|string|true|Attachment ID.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[AttachmentRequest](#schemaattachmentrequest)|false|none|
|» Domains|body|[object]|true|List of characteristics related to the attachment.|
|» » DomainValues|body|string|false|Allowed key values.|
|» » FieldName|body|string|false|Attachment key name.|
|» » MaxCaracters|body|string|false|Maximum number of characters in the attachment key.|
|» IsActive|body|boolean|true|Defines if the attachment is active or not.|
|» IsRequired|body|boolean|true|Defines if the attachment is required or not.|
|» Name|body|string|true|Attachment Name.|

> Example responses

> 200 Response

```json
{
  "Domains": [
    {
      "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic",
      "FieldName": "Sauce",
      "MaxCaracters": ""
    },
    {
      "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium",
      "FieldName": "Toppings",
      "MaxCaracters": ""
    }
  ],
  "Id": 8,
  "IsActive": true,
  "IsRequired": true,
  "Name": "Ingredients"
}
```

<h3 id="update-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AttachmentResponse](#schemaattachmentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete attachment

> Code samples

```bash
curl https://example.com/api/catalog/pvt/attachment/vtexcommercestable \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/attachment/{attachmentid}`

Deletes a previously existing SKU attachment.

<h3 id="delete-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attachmentid|path|string|true|Attachment ID.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

<h3 id="delete-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get all attachments

> Code samples

```bash
curl https://example.com/api/catalog/pvt/attachments \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/attachments`

Retrieves information about all registered attachments. 
 >⚠️ To understand the specific syntax for Assembly Options attachments, read the [Assembly Options](https://help.vtex.com/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH#assembly-options-syntax) documentation. 
## Response body example

```json
{
    "Page": 1,
    "Size": 11,
    "TotalRows": 11,
    "TotalPage": 1,
    "Data": [
        {
            "Id": 1,
            "Name": "Acessórios do bicho",
            "IsRequired": true,
            "IsActive": true,
            "Domains": [
                {
                    "FieldName": "extra",
                    "MaxCaracters": "",
                    "DomainValues": "[0-3]#1[1-2][1]pricetable1;#3[0-2][0]pricetable2;#5[0-2][0]pricetable3"
                }
            ]
        },
        {
            "Id": 2,
            "Name": "Sobrenome",
            "IsRequired": false,
            "IsActive": true,
            "Domains": []
        },
        {
            "Id": 3,
            "Name": "Assinatura Teste",
            "IsRequired": false,
            "IsActive": true,
            "Domains": [
                {
                    "FieldName": " vtex.subscription.key.frequency",
                    "MaxCaracters": "",
                    "DomainValues": "1 day, 7 day, 1 month, 6 month"
                },
                {
                    "FieldName": "vtex.subscription.key.validity.begin",
                    "MaxCaracters": "",
                    "DomainValues": "1"
                },
                {
                    "FieldName": "vtex.subscription.key.validity.end",
                    "MaxCaracters": "",
                    "DomainValues": "31"
                },
                {
                    "FieldName": "vtex.subscription.key.purchaseday",
                    "MaxCaracters": "",
                    "DomainValues": "1, 2, 20, 31"
                }
            ]
        },
        {
            "Id": 5,
            "Name": "teste",
            "IsRequired": false,
            "IsActive": true,
            "Domains": []
        },
        {
            "Id": 6,
            "Name": "teste2",
            "IsRequired": false,
            "IsActive": true,
            "Domains": []
        },
        {
            "Id": 7,
            "Name": "vtex.subscription.teste3",
            "IsRequired": false,
            "IsActive": true,
            "Domains": []
        },
        {
            "Id": 8,
            "Name": "teste api nova",
            "IsRequired": true,
            "IsActive": true,
            "Domains": [
                {
                    "FieldName": "Basic teste",
                    "MaxCaracters": "",
                    "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic"
                },
                {
                    "FieldName": "teste",
                    "MaxCaracters": "",
                    "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium"
                }
            ]
        },
        {
            "Id": 9,
            "Name": "vtex.subscription.teste",
            "IsRequired": false,
            "IsActive": true,
            "Domains": []
        },
        {
            "Id": 10,
            "Name": "Montagens",
            "IsRequired": false,
            "IsActive": true,
            "Domains": []
        },
        {
            "Id": 11,
            "Name": "vtex.subscription.subscription",
            "IsRequired": false,
            "IsActive": true,
            "Domains": [
                {
                    "FieldName": "vtex.subscription.key.frequency",
                    "MaxCaracters": "15",
                    "DomainValues": "1 month"
                },
                {
                    "FieldName": "vtex.subscription.key.purchaseday",
                    "MaxCaracters": "15",
                    "DomainValues": "1,15,28"
                }
            ]
        },
        {
            "Id": 12,
            "Name": "T-Shirt Customization",
            "IsRequired": false,
            "IsActive": true,
            "Domains": [
                {
                    "FieldName": "T-Shirt Name",
                    "MaxCaracters": "15",
                    "DomainValues": "[]"
                }
            ]
        }
    ]
}
```

<h3 id="get-all-attachments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
{
  "Data": [
    {
      "Domains": [
        {
          "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic",
          "FieldName": "Sauce",
          "MaxCaracters": ""
        },
        {
          "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium",
          "FieldName": "Toppings",
          "MaxCaracters": ""
        }
      ],
      "Id": 8,
      "IsActive": true,
      "IsRequired": true,
      "Name": "Ingredients"
    }
  ],
  "Page": 1,
  "Size": 11,
  "TotalPage": 1,
  "TotalRows": 11
}
```

<h3 id="get-all-attachments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-all-attachments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[[AttachmentResponse](#schemaattachmentresponse)]|false|none|Array containing attachments data.|
|Page|integer|false|none|Current page of results.|
|Size|integer|false|none|Total number of results in the current page.|
|TotalPage|integer|false|none|Total number of pages with results.|
|TotalRows|integer|false|none|Total number of rows with results.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-product">Product</h1>

## Get Product Review Rate by Product ID

<a id="opIdReviewRateProduct"></a>

> Code samples

```bash
curl https://example.com/api/addon/pvt/review/GetProductRate/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/addon/pvt/review/GetProductRate/{productId}`

Retrieves the review rate of a product by this product's ID.

<h3 id="get-product-review-rate-by-product-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|integer|true|Product’s unique numerical identifier.|

> Example responses

> 200 Response

```json
3
```

<h3 id="get-product-review-rate-by-product-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create Product with Category and Brand

> Code samples

```bash
curl https://example.com/api/catalog/pvt/product \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "AdWordsRemarketingCode": "string",
    "BrandId": 12121219,
    "BrandName": "Sample Brand",
    "CategoryId": 2000090,
    "CategoryPath": "Mens/Clothing/T-Shirts",
    "Description": "The Nike Zoom Stefan Janoski Men'\''s Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
    "DescriptionShort": "The Nike Zoom Stefan Janoski is made with a premium leather.",
    "Id": 42,
    "IsActive": true,
    "IsVisible": true,
    "KeyWords": "Zoom,Stefan,Janoski",
    "LinkId": "stefan-janoski-canvas-varsity-red",
    "LomadeeCampaignCode": "string",
    "MetaTagDescription": "The Nike Zoom Stefan Janoski Men'\''s Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
    "Name": "Zoom Stefan Janoski Canvas RM SB Varsity Red",
    "RefId": "sr_1_90",
    "ReleaseDate": "2019-01-01T00:00:00",
    "Score": 1,
    "ShowWithoutStock": true,
    "SupplierId": 0,
    "TaxCode": "12345",
    "Title": "Zoom Stefan Janoski Canvas RM SB Varsity Red"
  }'
```

`POST /api/catalog/pvt/product`

This endpoint allows two types of request:

**Type 1:** Creating a new Product as well as a new Category path (including subcategories) and a new Brand by using `CategoryPath` and `BrandName` parameters.

**Type 2:** Creating a new Product given an existing `BrandId` and an existing `CategoryId`.

When creating a product, regardless of the type of request, if there is a need to create a new product with a specific custom product ID, specify the `Id` (integer) in the request body. Otherwise, VTEX will generate the ID automatically.

 ## Request body examples

 ### Type 1

 Request to create a product, associating it to a new Category and a new Brand by using `CategoryPath` and `BrandName`:

```json
{
    "Name": "Black T-Shirt",
    "CategoryPath": "Mens/Clothing/T-Shirts",
    "BrandName": "Nike",
    "RefId": "31011706925",
    "Title": "Black T-Shirt",
    "LinkId": "tshirt-black",
    "Description": "This is a cool Tshirt",
    "ReleaseDate": "2022-01-01T00:00:00",
    "IsVisible": true,
    "IsActive": true,
    "TaxCode": "",
    "MetaTagDescription": "tshirt black",
    "ShowWithoutStock": true,
    "Score": 1
}
```

 ### Type 2

Request to create a product, associating it to an existing `CategoryId` and `BrandId`:

```json
{
   "Name": "insert product test",
   "DepartmentId": 1,
   "CategoryId": 2,
   "BrandId": 2000000,
   "LinkId": "insert-product-test",
   "RefId": "310117869",
   "IsVisible": true,
   "Description": "texto de descrição",
   "DescriptionShort": "Utilize o CEP 04548-005 para frete grátis",
   "ReleaseDate": "2019-01-01T00:00:00",
   "KeyWords": "teste,teste2",
   "Title": "product de teste",
   "IsActive": true,
   "TaxCode": "",
   "MetaTagDescription": "tag test",
   "SupplierId": 1,
   "ShowWithoutStock": true,
   "AdWordsRemarketingCode": null,
   "LomadeeCampaignCode": null,
   "Score": 1
}
```

 ## Response body example

```json
{
   "Id": 52,
   "Name": "insert product test",
   "DepartmentId": 1,
   "CategoryId": 2,
   "BrandId": 2000000,
   "LinkId": "insert-product-test",
   "RefId": "310117869",
   "IsVisible": true,
   "Description": "texto de descrição",
   "DescriptionShort": "Utilize o CEP 04548-005 para frete grátis",
   "ReleaseDate": "2019-01-01T00:00:00",
   "KeyWords": "teste,teste2",
   "Title": "product de teste",
   "IsActive": true,
   "TaxCode": "",
   "MetaTagDescription": "tag test",
   "SupplierId": 1,
   "ShowWithoutStock": true,
   "AdWordsRemarketingCode": null,
   "LomadeeCampaignCode": null,
   "Score": 1
}
```
  
> 📘 Onboarding guide 
>
> Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer's journey.

> Body parameter

```json
{
  "AdWordsRemarketingCode": "string",
  "BrandId": 12121219,
  "BrandName": "Sample Brand",
  "CategoryId": 2000090,
  "CategoryPath": "Mens/Clothing/T-Shirts",
  "Description": "The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
  "DescriptionShort": "The Nike Zoom Stefan Janoski is made with a premium leather.",
  "Id": 42,
  "IsActive": true,
  "IsVisible": true,
  "KeyWords": "Zoom,Stefan,Janoski",
  "LinkId": "stefan-janoski-canvas-varsity-red",
  "LomadeeCampaignCode": "string",
  "MetaTagDescription": "The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
  "Name": "Zoom Stefan Janoski Canvas RM SB Varsity Red",
  "RefId": "sr_1_90",
  "ReleaseDate": "2019-01-01T00:00:00",
  "Score": 1,
  "ShowWithoutStock": true,
  "SupplierId": 0,
  "TaxCode": "12345",
  "Title": "Zoom Stefan Janoski Canvas RM SB Varsity Red"
}
```

<h3 id="create-product-with-category-and-brand-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|false|none|
|» AdWordsRemarketingCode|body|string|false|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|» BrandId|body|integer|false|ID of an existing Brand that will be associated with this product. It is mandatory to use either this field or the `BrandName` field.|
|» BrandName|body|string|false|Name of the brand that will be associated with this product. It is mandatory to use either this field or the `BrandId` field. If you wish to create a new brand, that is, in case the brand does not exist yet, use this field instead of `BrandId`.|
|» CategoryId|body|integer|false|ID of an existing Category that will be associated with this product. It is mandatory to use either this field or the `CategoryPath` field.|
|» CategoryPath|body|string|false|Path of categories associated with this product, from the highest level of category to the lowest level, separated by `/`. It is mandatory to use either this field or the `CategoryId` field.|
|» Description|body|string|false|Product description.|
|» DescriptionShort|body|string|false|Short product description. This information can be displayed on both the product page and the shelf, using the following controls:<br> Store Framework:  `$product.DescriptionShort`.<br> Legacy CMS Portal: `<vtex.cmc:productDescriptionShort/>`.<br>|
|» Id|body|integer|false|Product’s unique numerical identifier. If not informed, it will be automatically generated by VTEX.|
|» IsActive|body|boolean|false|Activate (`true`) or inactivate (`false`) product.|
|» IsVisible|body|boolean|false|Shows (`true`) or hides (`false`) the product in search result and product pages, but the product can still be added to the shopping cart. Usually applicable for gifts.|
|» KeyWords|body|string|false|Store Framework: Deprecated. <br>Legacy CMS Portal: Keywords or synonyms related to the product, separated by comma (`,`). "Television", for example, can have a substitute word like "TV". This field is important to make your searches more comprehensive.<br>|
|» LinkId|body|string|false|Slug that will be used to build the product page URL. If it not informed, it will be generated according to the product's name replacing spaces and special characters by hyphens (`-`).|
|» LomadeeCampaignCode|body|string|false|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|» MetaTagDescription|body|string|false|Brief description of the product for SEO. It is recommended not to exceed 150 characters.|
|» Name|body|string|true|Product's name. Limited to 150 characters.|
|» RefId|body|string|false|Product Reference Code.|
|» ReleaseDate|body|string|false|Used to assist in the ordering of the search result of the site. Using the `O=OrderByReleaseDateDESC` query string, you can pull this value and show the display order by release date. This attribute is also used as a condition for dynamic collections.|
|» Score|body|integer|false|Value used to set the priority on the search result page.|
|» ShowWithoutStock|body|boolean|false|If `true`, activates the [Notify Me](https://help.vtex.com/en/tutorial/setting-up-the-notify-me-option--2VqVifQuf6Co2KG048Yu6e) option when the product is out of stock.|
|» SupplierId|body|integer \| null|false|**Deprecated.**|
|» TaxCode|body|string|false|Product tax code, used for tax calculation.|
|» Title|body|string|false|Product's Title tag. Limited to 150 characters. It is presented in the browser tab and corresponds to the title of the product page. This field is important for SEO.|

> Example responses

> 200 Response

```json
{
  "AdWordsRemarketingCode": "",
  "BrandId": 12121219,
  "CategoryId": 2000090,
  "DepartmentId": 2000089,
  "Description": "The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
  "DescriptionShort": "The Nike Zoom Stefan Janoski is made with a premium leather.",
  "Id": 42,
  "IsActive": true,
  "IsVisible": true,
  "KeyWords": "Zoom,Stefan,Janoski",
  "LinkId": "stefan-janoski-canvas-varsity-red",
  "LomadeeCampaignCode": "",
  "MetaTagDescription": "The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
  "Name": "Zoom Stefan Janoski Canvas RM SB Varsity Red",
  "RefId": "sr_1_90",
  "ReleaseDate": "2020-01-01T00:00:00",
  "Score": 1,
  "ShowWithoutStock": true,
  "SupplierId": 1,
  "TaxCode": "",
  "Title": "Zoom Stefan Janoski Canvas RM SB Varsity Re"
}
```

<h3 id="create-product-with-category-and-brand-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-product-with-category-and-brand-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdWordsRemarketingCode|string|false|none|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|BrandId|integer|false|none|Brand ID associated with this product.|
|CategoryId|integer|false|none|Category ID associated with this product.|
|DepartmentId|integer|false|none|Department ID according to the product's category.|
|Description|string|false|none|Product description.|
|DescriptionShort|string|false|none|Short product description. This information can be displayed on both the product page and the shelf, using the following controls:<br> Store Framework:  `$product.DescriptionShort`.<br> Legacy CMS Portal: `<vtex.cmc:productDescriptionShort/>`.<br>|
|Id|integer|false|none|Product’s unique numerical identifier.|
|IsActive|boolean|false|none|Activate (`true`) or inactivate (`false`) product.|
|IsVisible|boolean|false|none|Shows (`true`) or hides (`false`) the product in search result and product pages, but the product can still be added to the shopping cart. Usually applicable for gifts.|
|KeyWords|string|false|none|Store Framework: Deprecated. <br>Legacy CMS Portal:  Keywords or synonyms related to the product, separated by comma (`,`). "Television", for example, can have a substitute word like "TV". This field is important to make your searches more comprehensive.<br>|
|LinkId|string|false|none|Slug that will be used to build the product page URL. If it not informed, it will be generated according to the product's name replacing spaces and special characters by hyphens (`-`).|
|LomadeeCampaignCode|string|false|none|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|MetaTagDescription|string|false|none|Brief description of the product for SEO. It's recommended that you don't exceed 150 characters.|
|Name|string|false|none|Product's name. Limited to 150 characters.|
|RefId|string|false|none|Product Reference Code.|
|ReleaseDate|string|false|none|Used to assist in the ordering of the search result of the site. Using the `O=OrderByReleaseDateDESC` query string, you can pull this value and show the display order by release date. This attribute is also used as a condition for dynamic collections.|
|Score|integer|false|none|Value used to set the priority on the search result page.|
|ShowWithoutStock|boolean|false|none|If `true`, activates the [Notify Me](https://help.vtex.com/en/tutorial/setting-up-the-notify-me-option--2VqVifQuf6Co2KG048Yu6e) option when the product is out of stock.|
|SupplierId|integer \| null|false|none|**Deprecated.**|
|TaxCode|string|false|none|Product tax  code, used for tax calculation.|
|Title|string|false|none|Product's Title tag. Limited to 150 characters. It is presented in the browser tab and corresponds to the title of the product page. This field is important for SEO.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Product by ID

<a id="opIdGetProductbyid"></a>

> Code samples

```bash
curl https://example.com/api/catalog/pvt/product/string \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/product/{productId}`

Retrieves a specific Product by its ID. This information is exactly what is needed to create a new Product. 
> 📘 Onboarding guide 
>
> Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer's journey.

<h3 id="get-product-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|string|true|Product’s unique numerical identifier.|

> Example responses

> 200 Response

```json
{
  "AdWordsRemarketingCode": "",
  "BrandId": 12121219,
  "CategoryId": 2000090,
  "DepartmentId": 2000089,
  "Description": "The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
  "DescriptionShort": "The Nike Zoom Stefan Janoski is made with a premium leather.",
  "Id": 42,
  "IsActive": true,
  "IsVisible": true,
  "KeyWords": "Zoom,Stefan,Janoski",
  "LinkId": "stefan-janoski-canvas-varsity-red",
  "LomadeeCampaignCode": "",
  "MetaTagDescription": "The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
  "Name": "Zoom Stefan Janoski Canvas RM SB Varsity Red",
  "RefId": "sr_1_90",
  "ReleaseDate": "2020-01-01T00:00:00",
  "Score": 1,
  "ShowWithoutStock": true,
  "SupplierId": 1,
  "TaxCode": "",
  "Title": "Zoom Stefan Janoski Canvas RM SB Varsity Re"
}
```

<h3 id="get-product-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-product-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdWordsRemarketingCode|string|false|none|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|BrandId|integer|false|none|Brand ID associated with this product.|
|CategoryId|integer|false|none|Category ID associated with this product.|
|DepartmentId|integer|false|none|Department ID according to the product's category.|
|Description|string|false|none|Product description.|
|DescriptionShort|string|false|none|Short product description. This information can be displayed on both the product page and the shelf, using the following controls:<br> Store Framework:  `$product.DescriptionShort`.<br> Legacy CMS Portal: `<vtex.cmc:productDescriptionShort/>`.<br>|
|Id|integer|false|none|Product’s unique numerical identifier.|
|IsActive|boolean|false|none|Activate (`true`) or inactivate (`false`) product.|
|IsVisible|boolean|false|none|Shows (`true`) or hides (`false`) the product in search result and product pages, but the product can still be added to the shopping cart. Usually applicable for gifts.|
|KeyWords|string|false|none|Store Framework: Deprecated. <br>Legacy CMS Portal: Keywords or synonyms related to the product, separated by comma (`,`). "Television", for example, can have a substitute word like "TV". This field is important to make your searches more comprehensive.<br>|
|LinkId|string|false|none|Slug that will be used to build the product page URL. If it not informed, it will be generated according to the product's name replacing spaces and special characters by hyphens (`-`).|
|LomadeeCampaignCode|string|false|none|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|MetaTagDescription|string|false|none|Brief description of the product for SEO. It is recommended not to exceed 150 characters.|
|Name|string|false|none|Product's name. Limited to 150 characters.|
|RefId|string|false|none|Product Reference Code.|
|ReleaseDate|string|false|none|Used to assist in the ordering of the search result of the site. Using the `O=OrderByReleaseDateDESC` query string, you can pull this value and show the display order by release date. This attribute is also used as a condition for dynamic collections.|
|Score|integer|false|none|Value used to set the priority on the search result page.|
|ShowWithoutStock|boolean|false|none|If `true`, activates the [Notify Me](https://help.vtex.com/en/tutorial/setting-up-the-notify-me-option--2VqVifQuf6Co2KG048Yu6e) option when the product is out of stock.|
|SupplierId|integer \| null|false|none|**Deprecated.**|
|TaxCode|string|false|none|Product tax code, used for tax calculation.|
|Title|string|false|none|Product's Title tag. Limited to 150 characters. It is presented in the browser tab and corresponds to the title of the product page. This field is important for SEO.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Product

> Code samples

```bash
curl https://example.com/api/catalog/pvt/product/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "AdWordsRemarketingCode": "string",
    "BrandId": 12121219,
    "CategoryId": 2000090,
    "DepartmentId": 2000089,
    "Description": "The Nike Zoom Stefan Janoski Men'\''s Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
    "DescriptionShort": "The Nike Zoom Stefan Janoski is made with a premium leather.",
    "IsActive": true,
    "IsVisible": true,
    "KeyWords": "Zoom,Stefan,Janoski",
    "LinkId": "stefan-janoski-canvas-varsity-red",
    "LomadeeCampaignCode": "string",
    "MetaTagDescription": "The Nike Zoom Stefan Janoski Men'\''s Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
    "Name": "Zoom Stefan Janoski Canvas RM SB Varsity Red",
    "RefId": "sr_1_90",
    "ReleaseDate": "2019-01-01T00:00:00",
    "Score": 1,
    "ShowWithoutStock": true,
    "SupplierId": 0,
    "TaxCode": "12345",
    "Title": "Zoom Stefan Janoski Canvas RM SB Varsity Red"
  }'
```

`PUT /api/catalog/pvt/product/{productId}`

Updates an existing Product.

> Body parameter

```json
{
  "AdWordsRemarketingCode": "string",
  "BrandId": 12121219,
  "CategoryId": 2000090,
  "DepartmentId": 2000089,
  "Description": "The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
  "DescriptionShort": "The Nike Zoom Stefan Janoski is made with a premium leather.",
  "IsActive": true,
  "IsVisible": true,
  "KeyWords": "Zoom,Stefan,Janoski",
  "LinkId": "stefan-janoski-canvas-varsity-red",
  "LomadeeCampaignCode": "string",
  "MetaTagDescription": "The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
  "Name": "Zoom Stefan Janoski Canvas RM SB Varsity Red",
  "RefId": "sr_1_90",
  "ReleaseDate": "2019-01-01T00:00:00",
  "Score": 1,
  "ShowWithoutStock": true,
  "SupplierId": 0,
  "TaxCode": "12345",
  "Title": "Zoom Stefan Janoski Canvas RM SB Varsity Red"
}
```

<h3 id="update-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|integer|true|Product’s unique numerical identifier.|
|body|body|object|false|none|
|» AdWordsRemarketingCode|body|string|false|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|» BrandId|body|integer|true|Brand ID associated with this product.|
|» CategoryId|body|integer|true|Category ID associated with this product.|
|» DepartmentId|body|integer|false|Department ID according to the product's category.|
|» Description|body|string|false|Product description.|
|» DescriptionShort|body|string|false|Short product description. This information can be displayed on both the product page and the shelf, using the following controls:<br> Store Framework:  `$product.DescriptionShort`.<br> Legacy CMS Portal: `<vtex.cmc:productDescriptionShort/>`.<br>|
|» IsActive|body|boolean|false|Activate (`true`) or inactivate (`false`) product.|
|» IsVisible|body|boolean|false|Shows (`true`) or hides (`false`) the product in search result and product pages, but the product can still be added to the shopping cart. Usually applicable for gifts.|
|» KeyWords|body|string|false|Store Framework: Deprecated. <br>Legacy CMS Portal: Keywords or synonyms related to the product, separated by comma (`,`). "Television", for example, can have a substitute word like "TV". This field is important to make your searches more comprehensive.<br>|
|» LinkId|body|string|false|Slug that will be used to build the product page URL. If it not informed, it will be generated according to the product's name replacing spaces and special characters by hyphens (`-`).|
|» LomadeeCampaignCode|body|string|false|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|» MetaTagDescription|body|string|false|Brief description of the product for SEO. It is recommended not to exceed 150 characters.|
|» Name|body|string|true|Product's name. Limited to 150 characters.|
|» RefId|body|string|false|Product Reference Code.|
|» ReleaseDate|body|string|false|Used to assist in the ordering of the search result of the site. Using the `O=OrderByReleaseDateDESC` query string, you can pull this value and show the display order by release date. This attribute is also used as a condition for dynamic collections.|
|» Score|body|integer|false|Value used to set the priority on the search result page.|
|» ShowWithoutStock|body|boolean|false|If `true`, activates the [Notify Me](https://help.vtex.com/en/tutorial/setting-up-the-notify-me-option--2VqVifQuf6Co2KG048Yu6e) option when the product is out of stock.|
|» SupplierId|body|integer \| null|false|**Deprecated.**|
|» TaxCode|body|string|false|Product tax code, used for tax calculation.|
|» Title|body|string|false|Product's Title tag. Limited to 150 characters. It is presented in the browser tab and corresponds to the title of the product page. This field is important for SEO.|

> Example responses

> 200 Response

```json
{
  "AdWordsRemarketingCode": "",
  "BrandId": 12121219,
  "CategoryId": 2000090,
  "DepartmentId": 2000089,
  "Description": "The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
  "DescriptionShort": "The Nike Zoom Stefan Janoski is made with a premium leather.",
  "Id": 42,
  "IsActive": true,
  "IsVisible": true,
  "KeyWords": "Zoom,Stefan,Janoski",
  "LinkId": "stefan-janoski-canvas-varsity-red",
  "LomadeeCampaignCode": "",
  "MetaTagDescription": "The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.",
  "Name": "Zoom Stefan Janoski Canvas RM SB Varsity Red",
  "RefId": "sr_1_90",
  "ReleaseDate": "2020-01-01T00:00:00",
  "Score": 1,
  "ShowWithoutStock": true,
  "SupplierId": 1,
  "TaxCode": "",
  "Title": "Zoom Stefan Janoski Canvas RM SB Varsity Re"
}
```

<h3 id="update-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="update-product-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdWordsRemarketingCode|string|false|none|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|BrandId|integer|false|none|Brand ID associated with this product.|
|CategoryId|integer|false|none|Category ID associated with this product.|
|DepartmentId|integer|false|none|Department ID according to the product's category.|
|Description|string|false|none|Product description.|
|DescriptionShort|string|false|none|Short product description. This information can be displayed on both the product page and the shelf, using the following controls:<br> Store Framework:  `$product.DescriptionShort`.<br> Legacy CMS Portal: `<vtex.cmc:productDescriptionShort/>`.<br>|
|Id|integer|false|none|Product’s unique numerical identifier.|
|IsActive|boolean|false|none|Activate (`true`) or inactivate (`false`) product.|
|IsVisible|boolean|false|none|Shows (`true`) or hides (`false`) the product in search result and product pages, but the product can still be added to the shopping cart. Usually applicable for gifts.|
|KeyWords|string|false|none|Store Framework: Deprecated. <br>Legacy CMS Portal:  Keywords or synonyms related to the product, separated by comma (`,`). "Television", for example, can have a substitute word like "TV". This field is important to make your searches more comprehensive.<br>|
|LinkId|string|false|none|Slug that will be used to build the product page URL. If it not informed, it will be generated according to the product's name replacing spaces and special characters by hyphens (`-`).|
|LomadeeCampaignCode|string|false|none|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|MetaTagDescription|string|false|none|Brief description of the product for SEO. It's recommended that you don't exceed 150 characters.|
|Name|string|false|none|Product's name. Limited to 150 characters.|
|RefId|string|false|none|Product Reference Code.|
|ReleaseDate|string|false|none|Used to assist in the ordering of the search result of the site. Using the `O=OrderByReleaseDateDESC` query string, you can pull this value and show the display order by release date. This attribute is also used as a condition for dynamic collections.|
|Score|integer|false|none|Value used to set the priority on the search result page.|
|ShowWithoutStock|boolean|false|none|If `true`, activates the [Notify Me](https://help.vtex.com/en/tutorial/setting-up-the-notify-me-option--2VqVifQuf6Co2KG048Yu6e) option when the product is out of stock.|
|SupplierId|integer \| null|false|none|**Deprecated.**|
|TaxCode|string|false|none|Product tax  code, used for tax calculation.|
|Title|string|false|none|Product's Title tag. Limited to 150 characters. It is presented in the browser tab and corresponds to the title of the product page. This field is important for SEO.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Product's SKUs by Product ID

<a id="opIdProductVariations"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/products/variations/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/products/variations/{productId}`

Retrieves data about the product and all SKUs related to it by the product's ID.
## Response body example

```json
{
    "productId": 9,
    "name": "Camisa Masculina",
    "salesChannel": "2",
    "available": true,
    "displayMode": "lista",
    "dimensions": [
        "Cores",
        "Tamanho",
        "País de origem",
        "Gênero"
    ],
    "dimensionsInputType": {
        "Cores": "Combo",
        "Tamanho": "Combo",
        "País de origem": "Combo",
        "Gênero": "Combo"
    },
    "dimensionsMap": {
        "Cores": [
            "Amarelo",
            "Azul",
            "Vermelho"
        ],
        "Tamanho": [
            "P",
            "M",
            "G"
        ],
        "País de origem": [
            "Brasil"
        ],
        "Gênero": [
            "Masculino"
        ]
    },
    "skus": [
        {
            "sku": 310118454,
            "skuname": "Amarela - G",
            "dimensions": {
                "Cores": "Amarelo",
                "Tamanho": "G",
                "País de origem": "Brasil",
                "Gênero": "Masculino"
            },
            "available": false,
            "availablequantity": 0,
            "cacheVersionUsedToCallCheckout": null,
            "listPriceFormated": "R$ 0,00",
            "listPrice": 0,
            "taxFormated": "R$ 0,00",
            "taxAsInt": 0,
            "bestPriceFormated": "R$ 9.999.876,00",
            "bestPrice": 999987600,
            "spotPrice": 999987600,
            "installments": 0,
            "installmentsValue": 0,
            "installmentsInsterestRate": null,
            "image": "https://lojadobreno.vteximg.com.br/arquivos/ids/155467-292-292/image-5d7ad76ad1954c53adecab4138319034.jpg?v=637321899584500000",
            "sellerId": "1",
            "seller": "lojadobreno",
            "measures": {
                "cubicweight": 1.0000,
                "height": 5.0000,
                "length": 20.0000,
                "weight": 200.0000,
                "width": 20.0000
            },
            "unitMultiplier": 1.0000,
            "rewardValue": 0
        },
        {
            "sku": 310118455,
            "skuname": "Vermelha - M",
            "dimensions": {
                "Cores": "Vermelho",
                "Tamanho": "M",
                "País de origem": "Brasil",
                "Gênero": "Masculino"
            },
            "available": true,
            "availablequantity": 99999,
            "cacheVersionUsedToCallCheckout": "38395F1AEF59DF5CEAEDE472328145CD_",
            "listPriceFormated": "R$ 0,00",
            "listPrice": 0,
            "taxFormated": "R$ 0,00",
            "taxAsInt": 0,
            "bestPriceFormated": "R$ 20,00",
            "bestPrice": 2000,
            "spotPrice": 2000,
            "installments": 1,
            "installmentsValue": 2000,
            "installmentsInsterestRate": 0,
            "image": "https://lojadobreno.vteximg.com.br/arquivos/ids/155468-292-292/image-601a6099aace48b89d26fc9f22e8e611.jpg?v=637321906602470000",
            "sellerId": "pedrostore",
            "seller": "pedrostore",
            "measures": {
                "cubicweight": 0.4167,
                "height": 5.0000,
                "length": 20.0000,
                "weight": 200.0000,
                "width": 20.0000
            },
            "unitMultiplier": 1.0000,
            "rewardValue": 0
        }
    ]
}
```

<h3 id="get-products-skus-by-product-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|integer|true|Product’s unique numerical identifier.|

> Example responses

> 200 Response

```json
{
  "available": true,
  "dimensions": [
    "Cores",
    "Tamanho",
    "País de origem",
    "Gênero"
  ],
  "dimensionsInputType": {
    "Cores": "Combo",
    "Gênero": "Combo",
    "País de origem": "Combo",
    "Tamanho": "Combo"
  },
  "dimensionsMap": {
    "Cores": [
      "Amarelo",
      "Azul",
      "Vermelho"
    ],
    "Gênero": [
      "Masculino"
    ],
    "País de origem": [
      "Brasil"
    ],
    "Tamanho": [
      "P",
      "M",
      "G"
    ]
  },
  "displayMode": "lista",
  "name": "Camisa Masculina",
  "productId": 9,
  "salesChannel": "2",
  "skus": [
    {
      "available": false,
      "availablequantity": 0,
      "bestPrice": 999987600,
      "bestPriceFormated": "R$ 9.999.876,00",
      "cacheVersionUsedToCallCheckout": null,
      "dimensions": {
        "Cores": "Amarelo",
        "Gênero": "Masculino",
        "País de origem": "Brasil",
        "Tamanho": "G"
      },
      "image": "https://lojadobreno.vteximg.com.br/arquivos/ids/155467-292-292/image-5d7ad76ad1954c53adecab4138319034.jpg?v=637321899584500000",
      "installments": 0,
      "installmentsInsterestRate": null,
      "installmentsValue": 0,
      "listPrice": 0,
      "listPriceFormated": "R$ 0,00",
      "measures": {
        "cubicweight": 1,
        "height": 5,
        "length": 20,
        "weight": 200,
        "width": 20
      },
      "rewardValue": 0,
      "seller": "lojadobreno",
      "sellerId": "1",
      "sku": 310118454,
      "skuname": "Amarela - G",
      "spotPrice": 999987600,
      "taxAsInt": 0,
      "taxFormated": "R$ 0,00",
      "unitMultiplier": 1
    },
    {
      "available": true,
      "availablequantity": 99999,
      "bestPrice": 2000,
      "bestPriceFormated": "R$ 20,00",
      "cacheVersionUsedToCallCheckout": "38395F1AEF59DF5CEAEDE472328145CD_",
      "dimensions": {
        "Cores": "Vermelho",
        "Gênero": "Masculino",
        "País de origem": "Brasil",
        "Tamanho": "M"
      },
      "image": "https://lojadobreno.vteximg.com.br/arquivos/ids/155468-292-292/image-601a6099aace48b89d26fc9f22e8e611.jpg?v=637321906602470000",
      "installments": 1,
      "installmentsInsterestRate": 0,
      "installmentsValue": 2000,
      "listPrice": 0,
      "listPriceFormated": "R$ 0,00",
      "measures": {
        "cubicweight": 0.4167,
        "height": 5,
        "length": 20,
        "weight": 200,
        "width": 20
      },
      "rewardValue": 0,
      "seller": "pedrostore",
      "sellerId": "pedrostore",
      "sku": 310118455,
      "skuname": "Vermelha - M",
      "spotPrice": 2000,
      "taxAsInt": 0,
      "taxFormated": "R$ 0,00",
      "unitMultiplier": 1
    }
  ]
}
```

<h3 id="get-products-skus-by-product-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-products-skus-by-product-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|boolean|false|none|Defines if the product is available (`true`) or not (`false`).|
|dimensions|[string]|false|none|Lists SKU specifications.|
|dimensionsInputType|object|false|none|Lists SKU specifications and their field type, in the following format: `"{specificationName}":"{fieldType}"`.|
|» **additionalProperties**|string|false|none|none|
|dimensionsMap|object|false|none|Lists SKU specifications and their possible values inside arrays.|
|» **additionalProperties**|[object]|false|none|none|
|displayMode|string|false|none|Defines the mannner SKUs are displayed.|
|name|string|false|none|Product name.|
|productId|integer|false|none|Product’s unique numerical identifier.|
|salesChannel|string|false|none|Trade policy ID.|
|skus|[object]|false|none|Array containing information about the product's SKUs.|
|» available|boolean|false|none|Defines if the SKU is available (`true`) or not (`false`).|
|» availablequantity|integer|false|none|Available quantity of the SKU in stock.|
|» bestPrice|integer|false|none|Best price.|
|» bestPriceFormated|string|false|none|Best price formatted according to the valid currency.|
|» cacheVersionUsedToCallCheckout|string \| null|false|none|Cache version used to call Checkout.|
|» dimensions|object|false|none|Lists SKU specifications and their respective values.|
|» » **additionalProperties**|string|false|none|none|
|» image|string|false|none|SKU image URL.|
|» installments|integer|false|none|Number of installments.|
|» installmentsInsterestRate|integer \| null|false|none|Interest rate of installments.|
|» installmentsValue|integer|false|none|Value of installments.|
|» listPrice|integer|false|none|List price.|
|» listPriceFormated|string|false|none|List price formatted according to the valid currency.|
|» measures|object|false|none|SKU measures.|
|» » cubicweight|number|false|none|Cubic weight.|
|» » height|number|false|none|Height.|
|» » length|number|false|none|Length.|
|» » weight|number|false|none|Weight.|
|» » width|number|false|none|Width.|
|» rewardValue|integer|false|none|SKU reward value for rewards program.|
|» sellerId|string|false|none|Seller ID.|
|» sku|integer|false|none|SKU ID.|
|» skuname|string|false|none|SKU Name.|
|» spotPrice|integer|false|none|Spot price.|
|» taxAsInt|integer|false|none|Tax value.|
|» taxFormated|string|false|none|Tax value formatted according to the valid currency.|
|» unitMultiplier|number|false|none|SKU Unit Multiplier.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Product and SKU IDs

<a id="opIdProductAndSkuIds"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/products/GetProductAndSkuIds \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/products/GetProductAndSkuIds`

Retrieves the IDs of products and SKUs. 
> 📘 Onboarding guide 
>
> Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer's journey.

<h3 id="get-product-and-sku-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|categoryId|query|integer(int32)|false|ID of the category from which you need to retrieve Products and SKUs.|
|_from|query|integer(int32)|false|Insert the ID that will start the request result.|
|_to|query|integer(int32)|false|Insert the ID that will end the request result.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
{
  "data": {
    "1": [
      1,
      123456,
      310118449,
      310118489,
      7,
      2
    ],
    "2": [
      3,
      310118450,
      310118451,
      4,
      8
    ],
    "3": [
      5
    ],
    "4": [
      310118448
    ],
    "5": [
      310118465
    ],
    "6": [],
    "7": [
      310118452
    ],
    "8": [
      310118453,
      310118459,
      310118463
    ],
    "9": [
      310118454,
      310118455,
      310118456,
      310118457,
      310118458,
      310118460,
      310118461,
      310118462,
      310118464
    ],
    "10": [],
    "11": [],
    "12": [
      310118490
    ]
  },
  "range": {
    "from": 1,
    "to": 20,
    "total": 12
  }
}
```

<h3 id="get-product-and-sku-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-product-and-sku-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|Object composed by Product IDs and SKU IDs, where the parent ID is from Products and the SKU IDs are the Child IDs.|
|» Product ID|[object]|false|none|Array with SKU IDs of a certain product.|
|range|object|false|none|Object with information about the product and SKUs list.|
|» from|integer|false|none|Initial product ID.|
|» to|integer|false|none|Final product ID.|
|» total|integer|false|none|Total quantity of SKUs.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Product and its general context

<a id="opIdProductandTradePolicy"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/products/productget/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/products/productget/{productId}`

Retrieves a specific product's general information as name, description and the trade policies that it is included.

<h3 id="get-product-and-its-general-context-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|integer|true|Product’s unique numerical identifier.|

> Example responses

> 200 Response

```json
{
  "AdWordsRemarketingCode": "",
  "BrandId": 2000000,
  "CategoryId": 10,
  "DepartmentId": 1,
  "Description": "Descrição.",
  "DescriptionShort": "",
  "Id": 1,
  "IsActive": true,
  "IsVisible": true,
  "KeyWords": "bbbbbbbbbbbb*, a@",
  "LinkId": "racao-royal-canin-feline-urinary",
  "ListStoreId": [
    1,
    2,
    3
  ],
  "LomadeeCampaignCode": "",
  "MetaTagDescription": "Descrição.",
  "Name": "Ração Royal Canin Feline Urinary",
  "RefId": "",
  "ReleaseDate": "2020-01-06T00:00:00",
  "ShowWithoutStock": true,
  "SupplierId": 1,
  "TaxCode": "",
  "Title": "Ração Royal Canin Feline Urinary"
}
```

<h3 id="get-product-and-its-general-context-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-product-and-its-general-context-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdWordsRemarketingCode|string|false|none|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|BrandId|integer|false|none|Product brand ID.|
|CategoryId|integer|false|none|Product category ID.|
|DepartmentId|integer|false|none|Product department ID.|
|Description|string|false|none|Product description.|
|DescriptionShort|string|false|none|Product complement name.|
|Id|integer|false|none|Product ID.|
|IsActive|boolean|false|none|If the product is active (`true`) or not (`false`) at the store.|
|IsVisible|boolean|false|none|If the Product is visible on the store.|
|KeyWords|string|false|none|Substitutes words for the product.|
|LinkId|string|false|none|Product text link.|
|ListStoreId|[object]|false|none|List with the Trade Policies IDs that the product is included.|
|LomadeeCampaignCode|string|false|none|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|MetaTagDescription|string|false|none|Product meta tag description.|
|Name|string|false|none|Product's name. Limited to 150 characters.|
|RefId|string|false|none|Product referecial code.|
|ReleaseDate|string|false|none|Product release date.|
|ShowWithoutStock|boolean|false|none|Defines if the Product will remain being shown in the store even if it’s out of stock.|
|SupplierId|integer|false|none|Product supplier ID.|
|TaxCode|string|false|none|Product fiscal code.|
|Title|string|false|none|Product's Title tag. Limited to 150 characters. It is presented in the browser tab and corresponds to the title of the product page. This field is important for SEO.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Product by RefId

<a id="opIdProductbyRefId"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/products/productgetbyrefid/string \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/products/productgetbyrefid/{refId}`

Retrieves a specific product by its Reference ID.

<h3 id="get-product-by-refid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|refId|path|string|true|Product Referecial Code|

> Example responses

> 200 Response

```json
{
  "AdWordsRemarketingCode": "",
  "BrandId": 9280,
  "CategoryId": 9287,
  "DepartmentId": 9287,
  "Description": "The Black and Decker LD120-VoltA 20-Volt Max Lithium Drill/Driver with 30 Accessories come with the Black and Decker 20-volt max Lithium Ion Battery. These batteries are always ready, holding a charge up to 18 months. This drill provides an extra level of control with a 24 position clutch that helps to prevent stripping and overdriving screws. It has a soft grip handle that provides added comfort during use and a light weight to prevent user fatigue. This drill is ideal for drilling and screwdriving through wood, metal, and plastic. The LD120-VoltA set includes: LD120 20-Volt MAX Lithium Drill/Driver, (1) LB20 20-Volt MAX Lithium Ion Battery, (1) LCS20 Charger, (6) Brad Point Drill Bits, (10) 1-Inch Screwdriving Bits, (9) 2-Inch Screwdriving Bits, (4) Nut Drivers, (1) Magnetic Bit Tip Holder and is backed by Black and Decker's 2 year limited warranty.",
  "DescriptionShort": "The Black and Decker LD120-VoltA 20-Volt Max Lithium Drill/Driver with 30 Accessories come with the Black and Decker 20-volt max Lithium Ion Battery. These batteries are always ready, holding a charge up to 18 months. This drill provides an extra level of control with a 24 position clutch that helps to prevent stripping and overdriving screws. It has a soft grip handle that provides added comfort during use and a light weight to prevent user fatigue. This drill is ideal for drilling and screwdriving through wood, metal, and plastic. The LD120-VoltA set includes: LD120 20-Volt MAX Lithium Drill/Driver, (1) LB20 20-Volt MAX Lithium Ion Battery, (1) LCS20 Charger, (6) Brad Point Drill Bits, (10) 1-Inch Screwdriving Bits, (9) 2-Inch Screwdriving Bits, (4) Nut Drivers, (1) Magnetic Bit Tip Holder and is backed by Black and Decker's 2 year limited warranty.",
  "Id": 17,
  "IsActive": true,
  "IsVisible": true,
  "KeyWords": "product,sample",
  "LinkId": "black-decker-20v-max-cordless-drill-driver-with-30-piece-acessories-ld120va",
  "ListStoreId": [
    1
  ],
  "LomadeeCampaignCode": "",
  "MetaTagDescription": "The Black and Decker LD120-VoltA 20-Volt Max Lithium Drill/Driver with 30 Accessories come with the Black and Decker 20-volt max Lithium Ion Battery. These batteries are always ready, holding a charge up to 18 months. This drill provides an extra level of control with a 24 position clutch that helps to prevent stripping and overdriving screws. It has a soft grip handle that provides added comfort during use and a light weight to prevent user fatigue. This drill is ideal for drilling and screwdriving through wood, metal, and plastic. The LD120-VoltA set includes: LD120 20-Volt MAX Lithium Drill/Driver, (1) LB20 20-Volt MAX Lithium Ion Battery, (1) LCS20 Charger, (6) Brad Point Drill Bits, (10) 1-Inch Screwdriving Bits, (9) 2-Inch Screwdriving Bits, (4) Nut Drivers, (1) Magnetic Bit Tip Holder and is backed by Black and Decker's 2 year limited warranty.",
  "Name": "BLACK+DECKER 20V MAX Cordless Drill / Driver with 30-Piece Accessories (LD120VA)",
  "RefId": "880010",
  "ReleaseDate": "2020-01-01T00:00:00",
  "ShowWithoutStock": true,
  "SupplierId": 1,
  "TaxCode": "",
  "Title": "BLACK+DECKER 20V MAX Cordless Drill / Driver with 30-Piece Accessories (LD120VA)"
}
```

<h3 id="get-product-by-refid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-product-by-refid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdWordsRemarketingCode|string|false|none|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|BrandId|integer|false|none|ID of the product Brand.|
|CategoryId|integer|false|none|ID of product Category.|
|DepartmentId|integer|false|none|ID of product department.|
|Description|string|false|none|Product Description, HTML is allowed.|
|DescriptionShort|string|false|none|Product Short Description.|
|Id|integer|false|none|ID of the Product.|
|IsActive|boolean|false|none|If the product is Active.|
|IsVisible|boolean|false|none|If the product are visible in search and list pages.|
|KeyWords|string|false|none|Alternatives Keywords to improve the product findability.|
|LinkId|string|false|none|Category URL.|
|ListStoreId|[integer]|false|none|Array with the ID of all the trade policies that are related to the product.|
|LomadeeCampaignCode|string|false|none|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|MetaTagDescription|string|false|none|Meta Description for the Product page.|
|Name|string|false|none|Name of the Product.|
|RefId|string|false|none|Product Reference ID.|
|ReleaseDate|string|false|none|Product Release Date, for list ordering and product cluster highlight.|
|ShowWithoutStock|boolean|false|none|If the product can be visible without stock.|
|SupplierId|integer|false|none|Product Supplier ID.|
|TaxCode|string|false|none|SKU Tax Code.|
|Title|string|false|none|Product's Title tag. Limited to 150 characters. It is presented in the browser tab and corresponds to the title of the product page. This field is important for SEO.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-product-specification">Product Specification</h1>

## Get Product Specification and its information by Product ID

<a id="opIdGetProductSpecificationbyProductID"></a>

> Code samples

```bash
curl https://example.com/api/catalog/pvt/product/1/specification \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/product/{productId}/specification`

Retrieves information of all specifications of a product by the product's ID.

 ### Response body example

```json
[
    {
        "Id": 227,
        "ProductId": 1,
        "FieldId": 33,
        "FieldValueId": 135,
        "Text": "ValueA"
    },
    {
        "Id": 228,
        "ProductId": 1,
        "FieldId": 34,
        "FieldValueId": 1,
        "Text": "Giant"
    }
]
```

<h3 id="get-product-specification-and-its-information-by-product-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|integer|true|Product’s unique numerical identifier.|

> Example responses

> 200 Response

```json
[
  {
    "FieldId": 33,
    "FieldValueId": 135,
    "Id": 227,
    "ProductId": 1,
    "Text": "ValueA"
  },
  {
    "FieldId": 34,
    "FieldValueId": 1,
    "Id": 228,
    "ProductId": 1,
    "Text": "Giant"
  }
]
```

<h3 id="get-product-specification-and-its-information-by-product-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-product-specification-and-its-information-by-product-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» FieldId|integer|false|none|Specification ID.|
|» FieldValueId|integer|false|none|Current specification value ID.|
|» Id|integer|false|none|ID of the association of the specification and the product. This ID is used to update or delete the specification.|
|» ProductId|integer|false|none|Product ID.|
|» Text|string|false|none|Current specification value text.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Associate Product Specification

> Code samples

```bash
curl https://example.com/api/catalog/pvt/product/1/specification \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "FieldId": 19,
    "FieldValueId": 12,
    "Text": "Metal"
  }'
```

`POST /api/catalog/pvt/product/{productId}/specification`

Associates a previously defined Specification to a Product.

### Request body example

```json
{
    "FieldId": 19,
    "FieldValueId": 1,
    "Text": "test"
}
```

### Response body example

```json
{
    "Id": 41,
    "FieldId": 19,
    "FieldValueId": 1,
    "Text": "test"
}
```

> Body parameter

```json
{
  "FieldId": 19,
  "FieldValueId": 12,
  "Text": "Metal"
}
```

<h3 id="associate-product-specification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|integer|true|Product’s unique numerical identifier.|
|body|body|object|false|none|
|» FieldId|body|integer|true|Specification ID.|
|» FieldValueId|body|integer|false|Specification Value ID. Mandatory for `FieldTypeId` `5`, `6` and `7`. Must not be used for any other field types|
|» Text|body|string|false|Value of specification. Only for `FieldTypeId` different from `5`, `6` and `7`.|

> Example responses

> 200 Response

```json
{
  "FieldId": 19,
  "FieldValueId": 1,
  "Id": 41,
  "Text": "test"
}
```

<h3 id="associate-product-specification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="associate-product-specification-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldId|integer|false|none|Specification ID.|
|FieldValueId|integer|false|none|Specification Value ID. Mandatory for `FieldTypeId` `5`, `6` and `7`. Must not be used for any other field types|
|Id|integer|false|none|ID of the association of the specification and the product. This ID is used to update or delete the specification.|
|ProductId|integer|false|none|Product ID.|
|Text|string|false|none|Value of specification. Only for `FieldTypeId` different from `5`, `6` and `7`.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete all Product Specifications by Product ID

<a id="opIdDeleteAllProductSpecifications"></a>

> Code samples

```bash
curl https://example.com/api/catalog/pvt/product/1/specification \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/product/{productId}/specification`

Deletes all Product Specifications given a specific Product ID.

<h3 id="delete-all-product-specifications-by-product-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|integer|true|Product’s unique numerical identifier.|

<h3 id="delete-all-product-specifications-by-product-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete a specific Product Specification

<a id="opIdDeleteaProductSpecification"></a>

> Code samples

```bash
curl https://example.com/api/catalog/pvt/product/1/specification/7 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/product/{productId}/specification/{specificationId}`

Deletes a specific Product Specification given a Product ID and a Specification ID.

<h3 id="delete-a-specific-product-specification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|integer|true|Product’s unique numerical identifier.|
|specificationId|path|integer|true|Product Specification’s unique numerical identifier.|

<h3 id="delete-a-specific-product-specification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Associate product specification using specification name and group name

> Code samples

```bash
curl https://example.com/api/catalog/pvt/product/1/specificationvalue \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "FieldName": "Material",
    "FieldValues": [
      "Cotton",
      "Polyester"
    ],
    "GroupName": "Composition",
    "RootLevelSpecification": true
  }'
```

`PUT /api/catalog/pvt/product/{productId}/specificationvalue`

Associates a specification to a product using specification name and group name. Automatically creates the informed group, specification and values if they had not been created before.

 ## Request body example

```json
{
    "FieldName": "Material",
    "GroupName": "Additional Information",
    "RootLevelSpecification": false,
    "FieldValues": [
        "Cotton",
       "Polyester"
        ]
}
```
 
 
## Response body example

```json
[
    {
        "Id": 53,
        "ProductId": 3,
        "FieldId": 21,
        "FieldValueId": 60,
        "Text": "Cotton"
    },
    {
        "Id": 54,
        "ProductId": 3,
        "FieldId": 21,
        "FieldValueId": 61,
        "Text": "Polyester"
    }
]
```


> Body parameter

```json
{
  "FieldName": "Material",
  "FieldValues": [
    "Cotton",
    "Polyester"
  ],
  "GroupName": "Composition",
  "RootLevelSpecification": true
}
```

<h3 id="associate-product-specification-using-specification-name-and-group-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|integer|true|Product’s unique numerical identifier.|
|body|body|object|false|none|
|» FieldName|body|string|true|Specification name.|
|» FieldValues|body|[string]|true|Array of specification values.|
|» GroupName|body|string|true|Group name.|
|» RootLevelSpecification|body|boolean|true|Root level specification.|

> Example responses

> 200 Response

```json
[
  {
    "FieldId": 85,
    "FieldValueId": 193,
    "Id": 239,
    "ProductId": 1,
    "Text": "Value123"
  }
]
```

<h3 id="associate-product-specification-using-specification-name-and-group-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="associate-product-specification-using-specification-name-and-group-name-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» FieldId|integer|false|none|Specification ID.|
|» FieldValueId|integer|false|none|Current specification value ID.|
|» Id|integer|false|none|ID of the association of the Product and the specification.|
|» ProductId|integer|false|none|Product ID.|
|» Text|string|false|none|Current specification value text.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Product Specification by Product ID

<a id="opIdGetProductSpecification"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/products/1/specification \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/products/{productId}/specification`

Retrieves all specifications of a product by the product's ID.
> 📘 Onboarding guide 
>
> Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer's journey.

### Response body example

```json
[
    {
        "Value": [
            "Iron",
            "Plastic"
        ],
        "Id": 30,
        "Name": "Material"
    }
]
```

<h3 id="get-product-specification-by-product-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|integer|true|Product’s unique numerical identifier.|

> Example responses

> 200 Response

```json
[
  {
    "Id": 30,
    "Name": "Material",
    "Value": [
      "Iron",
      "Plastic"
    ]
  }
]
```

<h3 id="get-product-specification-by-product-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-product-specification-by-product-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GetorUpdateProductSpecification](#schemagetorupdateproductspecification)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Server|string||none|
|200|X-AspNet-Version|string||none|
|200|X-Powered-By|string||none|
|200|no|string||none|
|200|p3p|string||none|
|200|powered|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Product Specification by Product ID

<a id="opIdUpdateProductSpecification"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/products/1/specification \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '[
    {
      "Id": 30,
      "Name": "Material",
      "Value": [
        "Iron",
        "Plastic"
      ]
    }
  ]'
```

`POST /api/catalog_system/pvt/products/{productId}/specification`

Updates the value of a product specification by the product's ID. The ID or name can be used to identify what product specification will be updated. Specification fields must be previously created in your Catalog.

### Request body example

```json
[
    {
        "Value": [
            "Iron",
            "Plastic"
        ],
        "Id": 30,
        "Name": "Material"
    }
]
```

> Body parameter

```json
[
  {
    "Id": 30,
    "Name": "Material",
    "Value": [
      "Iron",
      "Plastic"
    ]
  }
]
```

<h3 id="update-product-specification-by-product-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|integer|true|Product’s unique identifier.|
|body|body|[[GetorUpdateProductSpecification](#schemagetorupdateproductspecification)]|true|none|

<h3 id="update-product-specification-by-product-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-trade-policy">Trade Policy</h1>

## Get Trade Policies by Product ID

> Code samples

```bash
curl https://example.com/api/catalog/pvt/product/1/salespolicy \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/product/{productId}/salespolicy`

Retrieves a list of Trade Policies associated to a Product based on the Product's ID. 
## Response body example

```json
[
    {
        "ProductId": 1,
        "StoreId": 1
    },
    {
        "ProductId": 1,
        "StoreId": 2
    },
    {
        "ProductId": 1,
        "StoreId": 3
    },
    {
        "ProductId": 1,
        "StoreId": 4
    }
]
```

<h3 id="get-trade-policies-by-product-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|integer|true|Product’s unique numerical identifier.|

> Example responses

> 200 Response

```json
[
  {
    "ProductId": 1,
    "StoreId": 1
  }
]
```

<h3 id="get-trade-policies-by-product-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-trade-policies-by-product-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» ProductId|integer|false|none|Product’s unique numerical identifier.|
|» StoreId|integer|false|none|Trade policy's unique numerical identifier.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Associate Product with Trade Policy

> Code samples

```bash
curl https://example.com/api/catalog/pvt/product/1/salespolicy/1 \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/catalog/pvt/product/{productId}/salespolicy/{tradepolicyId}`

Associates an existing Trade Policy with a Product.

<h3 id="associate-product-with-trade-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|integer|true|Product’s unique numerical identifier.|
|tradepolicyId|path|integer|true|Trade Policy’s unique numerical identifier.|

<h3 id="associate-product-with-trade-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Remove Product from Trade Policy

> Code samples

```bash
curl https://example.com/api/catalog/pvt/product/1/salespolicy/1 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/product/{productId}/salespolicy/{tradepolicyId}`

Disassociates a Trade Policy of a Product.

<h3 id="remove-product-from-trade-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|integer|true|Product’s unique numerical identifier.|
|tradepolicyId|path|integer|true|Trade Policy’s unique numerical identifier.|

<h3 id="remove-product-from-trade-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List all SKUs of a Trade Policy

> Code samples

```bash
curl 'https://example.com/api/catalog_system/pvt/sku/stockkeepingunitidsbysaleschannel?sc=1' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/sku/stockkeepingunitidsbysaleschannel`

Retrieves a list of SKU IDs of a Trade Policy. 
## Response body example

```json
[
    405380,
    405381,
    405382,
    405383,
    405384,
    405385,
    405386,
    405387,
    405388,
    405389,
    405390,
    405391,
    405392,
    405393,
    405394,
    405395,
    405396,
    405397,
    405398,
    405399,
    405400,
    405556
]
```

<h3 id="list-all-skus-of-a-trade-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|sc|query|integer|true|Trade Policy’s unique numerical identifier.|
|page|query|integer|false|Page number.|
|pageSize|query|integer|false|Number of items in the page.|
|onlyAssigned|query|boolean|false|If set as `false`, it allows the user to decide if the SKUs that are not assigned to a specific trade policy should be also returned.|

> Example responses

> 200 Response

```json
[
  405380,
  405381,
  405382,
  405383,
  405384,
  405385,
  405386,
  405387,
  405388,
  405389,
  405390,
  405391,
  405392,
  405393,
  405394,
  405395,
  405396,
  405397,
  405398,
  405399,
  405400,
  405556
]
```

<h3 id="list-all-skus-of-a-trade-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-all-skus-of-a-trade-policy-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-similar-category">Similar Category</h1>

## Get Similar Categories

> Code samples

```bash
curl https://example.com/api/catalog/pvt/product/1/similarcategory/ \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/product/{productId}/similarcategory/`

Retrieves Similar Categories from a Product.

## Response body example

```json
[
    {
        "ProductId": 1,
        "CategoryId": 1
    },
    {
        "ProductId": 1,
        "CategoryId": 20
    }
]
```

<h3 id="get-similar-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|integer|true|Product’s unique numerical identifier.|

> Example responses

> 200 Response

```json
[
  {
    "CategoryId": 1,
    "ProductId": 1
  },
  {
    "CategoryId": 20,
    "ProductId": 1
  }
]
```

<h3 id="get-similar-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-similar-categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» CategoryId|integer|false|none|Similar Category ID.|
|» ProductId|integer|false|none|Product ID.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Add Similar Category

> Code samples

```bash
curl https://example.com/api/catalog/pvt/product/1/similarcategory/1 \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/catalog/pvt/product/{productId}/similarcategory/{categoryId}`

Adds a Similar Category to a Product.

## Response body example

```json
{
    "ProductId": 1,
    "StoreId": 1
}
```

<h3 id="add-similar-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|integer|true|Product’s unique numerical identifier.|
|categoryId|path|integer|true|Similar Category’s unique numerical identifier.|

> Example responses

> 200 Response

```json
{
  "ProductId": 1,
  "StoreId": 1
}
```

<h3 id="add-similar-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="add-similar-category-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductId|integer|false|none|Product ID.|
|StoreId|integer|false|none|Trade Policy ID.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete Similar Category

> Code samples

```bash
curl https://example.com/api/catalog/pvt/product/1/similarcategory/1 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/product/{productId}/similarcategory/{categoryId}`

Deletes a Similar Category from a Product.

<h3 id="delete-similar-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|integer|true|Product’s unique numerical identifier.|
|categoryId|path|integer|true|Similar Category’s unique numerical identifier.|

<h3 id="delete-similar-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-sku">SKU</h1>

## Get SKU by RefId

> Code samples

```bash
curl 'https://example.com/api/catalog/pvt/stockkeepingunit?refId=1' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/stockkeepingunit`

Retrieves information about a specific SKU by its `RefId`. 

### Response body example

```json
{
    "Id": 1,
    "ProductId": 1,
    "IsActive": true,
    "Name": "Royal Canin Feline Urinary 500g",
    "RefId": "0001",
    "PackagedHeight": 6.0000,
    "PackagedLength": 24.0000,
    "PackagedWidth": 14.0000,
    "PackagedWeightKg": 550.0000,
    "Height": null,
    "Length": null,
    "Width": null,
    "WeightKg": null,
    "CubicWeight": 1.0000,
    "IsKit": false,
    "CreationDate": "2020-03-12T15:42:00",
    "RewardValue": null,
    "EstimatedDateArrival": null,
    "ManufacturerCode": "",
    "CommercialConditionId": 1,
    "MeasurementUnit": "un",
    "UnitMultiplier": 1.0000,
    "ModalType": null,
    "KitItensSellApart": false,
    "Videos": null
}
```

<h3 id="get-sku-by-refid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|refId|query|string|true|SKU Reference ID.|

> Example responses

> 200 Response

```json
{
  "CommercialConditionId": 1,
  "CreationDate": "2020-03-12T15:42:00",
  "CubicWeight": 1,
  "EstimatedDateArrival": null,
  "Height": 0,
  "Id": 1,
  "IsActive": true,
  "IsKit": false,
  "KitItensSellApart": false,
  "Length": 0,
  "ManufacturerCode": "",
  "MeasurementUnit": "un",
  "ModalType": null,
  "Name": "Royal Canin Feline Urinary 500g",
  "PackagedHeight": 6,
  "PackagedLength": 24,
  "PackagedWeightKg": 550,
  "PackagedWidth": 14,
  "ProductId": 1,
  "RefId": "0001",
  "RewardValue": 0,
  "UnitMultiplier": 1,
  "Videos": null,
  "WeightKg": 0,
  "Width": 0
}
```

<h3 id="get-sku-by-refid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-sku-by-refid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivateIfPossible|boolean|false|none|When set to `true`, this attribute will automatically update the SKU as active once associated with an image or an active component.|
|CommercialConditionId|integer|false|none|Commercial Condition ID.|
|CreationDate|string|false|none|SKU Creation Date.|
|CubicWeight|number|false|none|[Cubic Weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128).|
|EstimatedDateArrival|string \| null|false|none|SKU estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format, when the product is on pre-sale. You must take into consideration both the launch date and the freight calculation for the arrival date.|
|Height|number|false|none|SKU Height.|
|Id|integer|false|none|SKU ID.|
|IsActive|boolean|false|none|Defines if the SKU is active (`true`) or not (`false`).|
|IsKit|boolean|false|none|Shows if the SKU is a Kit (`true`) or not (`false`).|
|KitItensSellApart|boolean|false|none|Defines if Kit components can be sold apart.|
|Length|number|false|none|SKU Length.|
|ManufacturerCode|string|false|none|Manufacturer Code.|
|MeasurementUnit|string|false|none|Measurement Unit.|
|ModalType|string \| null|false|none|Links an unusual type of SKU to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy).|
|Name|string|false|none|SKU Name.|
|PackagedHeight|number|false|none|Packaged Height.|
|PackagedLength|number|false|none|Packaged Length.|
|PackagedWeightKg|number|false|none|Packaged Weight, in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.|
|PackagedWidth|number|false|none|Packaged Width.|
|ProductId|integer|false|none|Product ID.|
|RefId|string|false|none|SKU RefId.|
|RewardValue|number|false|none|Defines the value of the reward for clients who purchase the SKU.|
|UnitMultiplier|number|false|none|This is the multiple number of SKU. If the Multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward.|
|Videos|string \| null|false|none|Video URLs.|
|WeightKg|number|false|none|Weight of the SKU in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.|
|Width|number|false|none|SKU Width.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create SKU

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "ActivateIfPossible": true,
    "CommercialConditionId": 1,
    "CreationDate": "2020-01-25T15:51:29.2614605",
    "CubicWeight": 0.1667,
    "Ean": "8949461894984",
    "EstimatedDateArrival": null,
    "Height": 1,
    "Id": 1,
    "IsActive": false,
    "IsKit": false,
    "KitItensSellApart": false,
    "Length": 1,
    "ManufacturerCode": "123",
    "MeasurementUnit": "un",
    "ModalType": null,
    "Name": "Size 10",
    "PackagedHeight": 10,
    "PackagedLength": 10,
    "PackagedWeightKg": 10,
    "PackagedWidth": 10,
    "ProductId": 42,
    "RefId": "B096QW8Y8Z",
    "RewardValue": 1,
    "UnitMultiplier": 2,
    "Videos": [
      "https://www.youtube.com/"
    ],
    "WeightKg": 1,
    "Width": 1
  }'
```

`POST /api/catalog/pvt/stockkeepingunit`



Creates a new SKU.

If there is a need to create a new SKU with a specific custom ID, specify the `Id` (integer) in the request. Otherwise, VTEX will generate the ID automatically.

### Request body example (custom ID)

```json
{
   "Id": 1, 
   "ProductId": 310117069,
   "IsActive": true,
   "ActivateIfPossible": true,
   "Name": "sku test",
   "RefId": "125478",
   "Ean": "8949461894984",
   "PackagedHeight": 10,
   "PackagedLength": 10,
   "PackagedWidth": 10,
   "PackagedWeightKg": 10,
   "Height": null,
   "Length": null,
   "Width": null,
   "WeightKg": null,
   "CubicWeight": 0.1667,
   "IsKit": false,
   "CreationDate": null,
   "RewardValue": null,
   "EstimatedDateArrival": null,
   "ManufacturerCode": "123",
   "CommercialConditionId": 1,
   "MeasurementUnit": "un",
   "UnitMultiplier": 2.0000,
   "ModalType": null,
   "KitItensSellApart": false,
   "Videos": [ "https://www.youtube.com/" ]
}
``` 

### Request body example (automatically generated ID)

```json
{
   "ProductId": 310117069,
   "IsActive": true,
   "ActivateIfPossible": true,
   "Name": "sku test",
   "RefId": "125478",
   "Ean": "8949461894984",
   "PackagedHeight": 10,
   "PackagedLength": 10,
   "PackagedWidth": 10,
   "PackagedWeightKg": 10,
   "Height": null,
   "Length": null,
   "Width": null,
   "WeightKg": null,
   "CubicWeight": 0.1667,
   "IsKit": false,
   "CreationDate": null,
   "RewardValue": null,
   "EstimatedDateArrival": null,
   "ManufacturerCode": "123",
   "CommercialConditionId": 1,
   "MeasurementUnit": "un",
   "UnitMultiplier": 2.0000,
   "ModalType": null,
   "KitItensSellApart": false,
   "Videos": [ "https://www.youtube.com/" ]
}
``` 

### Response body example

```json
{
   "Id":1,
   "ProductId": 310117069,
   "IsActive": true,
   "ActivateIfPossible": true,
   "Name": "sku test",
   "RefId": "125478",
   "Ean": "8949461894984",
   "PackagedHeight": 10,
   "PackagedLength": 10,
   "PackagedWidth": 10,
   "PackagedWeightKg": 10,
   "Height": null,
   "Length": null,
   "Width": null,
   "WeightKg": null,
   "CubicWeight": 0.1667,
   "IsKit": false,
   "CreationDate": null,
   "RewardValue": null,
   "EstimatedDateArrival": null,
   "ManufacturerCode": "123",
   "CommercialConditionId": 1,
   "MeasurementUnit": "un",
   "UnitMultiplier": 2.0000,
   "ModalType": null,
   "KitItensSellApart": false,
   "Videos": [ "https://www.youtube.com/" ]
}
```

> Body parameter

```json
{
  "ActivateIfPossible": true,
  "CommercialConditionId": 1,
  "CreationDate": "2020-01-25T15:51:29.2614605",
  "CubicWeight": 0.1667,
  "Ean": "8949461894984",
  "EstimatedDateArrival": null,
  "Height": 1,
  "Id": 1,
  "IsActive": false,
  "IsKit": false,
  "KitItensSellApart": false,
  "Length": 1,
  "ManufacturerCode": "123",
  "MeasurementUnit": "un",
  "ModalType": null,
  "Name": "Size 10",
  "PackagedHeight": 10,
  "PackagedLength": 10,
  "PackagedWeightKg": 10,
  "PackagedWidth": 10,
  "ProductId": 42,
  "RefId": "B096QW8Y8Z",
  "RewardValue": 1,
  "UnitMultiplier": 2,
  "Videos": [
    "https://www.youtube.com/"
  ],
  "WeightKg": 1,
  "Width": 1
}
```

<h3 id="create-sku-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|false|none|
|» ActivateIfPossible|body|boolean|false|When set to `true`, this attribute will automatically update the SKU as active once associated with an image or an active component.|
|» CommercialConditionId|body|integer|false|Used to define SKU specific promotions or installment rules. In case of no specific condition, use `1` (default value). This field does not accept `0`. Find out more by reading [Registering a commercial condition](https://help.vtex.com/tutorial/registering-a-commercial-condition--tutorials_445).|
|» CreationDate|body|string|false|Date and time of the SKU's creation.|
|» CubicWeight|body|number|false|[Cubic weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128).|
|» Ean|body|string|false|EAN code. Required only if `RefId` is not informed, but can be used alongside `RefId` as well.|
|» EstimatedDateArrival|body|string \| null|false|To add the product as pre-sale, enter the product estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format. You must take into consideration both the launch date and the freight calculation for the arrival date.|
|» Height|body|number|false|SKU real height.|
|» Id|body|integer|false|SKU unique identifier. If not informed, it will be automatically generated by VTEX.|
|» IsActive|body|boolean|false|Shows if the SKU is active (`true`) or not (`false`).|
|» IsKit|body|boolean|false|Flag to set whether the product SKU is made up of one or more SKUs, thereby becoming a bundle. Must be enabled if you are adding a bundle. Once activated, the flag cannot be reverted.|
|» KitItensSellApart|body|boolean|false|Defines if Kit components can be sold apart.|
|» Length|body|number|false|SKU real length.|
|» ManufacturerCode|body|string|false|Provided by the manufacturers to identify their product. This field should be filled in if the product has a specific manufacturer’s code.|
|» MeasurementUnit|body|string|false|Used only in cases when you need to convert the unit of measure for sale. If a product is sold in boxes for example, but customers want to buy per square meter (m²). In common cases, use `'un'`.|
|» ModalType|body|string \| null|false|Links an unusual type of SKU to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy).|
|» Name|body|string|true|SKU name, meaning the variation of the previously added product. For example: **Product** - _Fridge_, **SKU** - _110V_.|
|» PackagedHeight|body|number|true|Height used for shipping calculation.|
|» PackagedLength|body|number|true|Length used for shipping calculation.|
|» PackagedWeightKg|body|integer|true|Weight used for shipping calculation, in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.|
|» PackagedWidth|body|number|true|Width used for shipping calculation.|
|» ProductId|body|integer|true|ID of the Product associated with this SKU.|
|» RefId|body|string|false|Reference code used internally for organizational purposes. Must be unique. Required only if `Ean` is not informed, but can be used alongside `Ean` as well.|
|» RewardValue|body|number|false|Credit that the customer receives when finalizing an order of one specific SKU unit. By filling this field out with `1`, the customer gets U$ 1 credit on the site.|
|» UnitMultiplier|body|number|false|This is the multiple number of SKU. If the Multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward.|
|» Videos|body|[string]|false|Videos URLs|
|» WeightKg|body|number|false|Weight of the SKU in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.|
|» Width|body|number|false|SKU real width.|

> Example responses

> 200 Response

```json
{
  "ActivateIfPossible": false,
  "CommercialConditionId": 1,
  "CreationDate": "2020-01-25T15:51:29.2614605",
  "CubicWeight": 0.1667,
  "Ean": "8949461894984",
  "EstimatedDateArrival": null,
  "Height": 1,
  "Id": 70,
  "IsActive": false,
  "IsKit": false,
  "KitItensSellApart": false,
  "Length": 1,
  "ManufacturerCode": "",
  "MeasurementUnit": "un",
  "ModalType": null,
  "Name": "Size 10",
  "PackagedHeight": 10,
  "PackagedLength": 10,
  "PackagedWeightKg": 10,
  "PackagedWidth": 10,
  "ProductId": 42,
  "RefId": "B096QW8Y8Z",
  "RewardValue": 0,
  "UnitMultiplier": 2,
  "Videos": [
    "https://www.youtube.com/"
  ],
  "WeightKg": 1,
  "Width": 1
}
```

<h3 id="create-sku-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-sku-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivateIfPossible|boolean|false|none|When set to `true`, this attribute will automatically update the SKU as active once associated with an image or an active component.|
|CommercialConditionId|integer|false|none|Used to define SKU specific promotions or installment rules. In case of no specific condition, use `1` (default value). This field does not accept `0`. Find out more by reading [Registering a commercial condition](https://help.vtex.com/tutorial/registering-a-commercial-condition--tutorials_445).|
|CreationDate|string|false|none|Date and time of the SKU's creation.|
|CubicWeight|number|false|none|[Cubic weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128).|
|Ean|string|false|none|EAN code. Required only if `RefId` is not informed, but can be used alongside `RefId` as well.|
|EstimatedDateArrival|string \| null|false|none|SKU estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format, when the product is on pre-sale. You must take into consideration both the launch date and the freight calculation for the arrival date.|
|Height|number|false|none|SKU real height.|
|Id|integer|false|none|SKU unique identifier.|
|IsActive|boolean|false|none|Shows if the SKU is active (`true`) or not (`false`).|
|IsKit|boolean|false|none|Flag to set whether the product SKU is made up of one or more SKUs, thereby becoming a bundle. Must be enabled if you are adding a bundle. Once activated, the flag cannot be reverted.|
|KitItensSellApart|boolean|false|none|Defines if Kit components can be sold apart.|
|Length|number|false|none|SKU real length.|
|ManufacturerCode|string|false|none|Provided by the manufacturers to identify their product. This field should be filled in if the product has a specific manufacturer’s code.|
|MeasurementUnit|string|false|none|Used only in cases when you need to convert the unit of measure for sale. If a product is sold in boxes for example, but customers want to buy per square meter (m²). In common cases, use `'un'`.|
|ModalType|string \| null|false|none|Links an unusual type of SKU to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy).|
|Name|string|false|none|SKU name, meaning the variation of the previously added product. For example: **Product** - _Fridge_, **SKU** - _110V_.|
|PackagedHeight|number|false|none|Height used for shipping calculation.|
|PackagedLength|number|false|none|Length used for shipping calculation.|
|PackagedWeightKg|integer|false|none|Weight used for shipping calculation, in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.|
|PackagedWidth|number|false|none|Width used for shipping calculation.|
|ProductId|integer|false|none|ID of the Product associated with this SKU.|
|RefId|string|false|none|Reference code used internally for organizational purposes. Must be unique. Required only if `Ean` is not informed, but can be used alongside `Ean` as well.|
|RewardValue|number|false|none|Credit that the customer receives when finalizing an order of one specific SKU unit. By filling this field out with `1`, the customer gets U$ 1 credit on the site.|
|UnitMultiplier|number|false|none|This is the multiple number of SKU. If the Multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward.|
|Videos|[string]|false|none|Videos URLs.|
|WeightKg|number|false|none|Weight of the SKU in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.|
|Width|number|false|none|SKU real width.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get SKU

<a id="opIdSku"></a>

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/stockkeepingunit/{skuId}`

Retrieves a specific SKU by its ID.

### Response body example

```json
{
    "Id": 1,
    "ProductId": 1,
    "IsActive": true,
    "ActivateIfPossible": true,
    "Name": "Ração Royal Canin Feline Urinary 500g",
    "RefId": "0001",
    "PackagedHeight": 6.5000,
    "PackagedLength": 24.0000,
    "PackagedWidth": 14.0000,
    "PackagedWeightKg": 550.0000,
    "Height": 2.2000,
    "Length": 4.4000,
    "Width": 3.3000,
    "WeightKg": 1.1000,
    "CubicWeight": 0.4550,
    "IsKit": false,
    "CreationDate": "2021-06-08T15:25:00",
    "RewardValue": null,
    "EstimatedDateArrival": null,
    "ManufacturerCode": "",
    "CommercialConditionId": 1,
    "MeasurementUnit": "un",
    "UnitMultiplier": 300.0000,
    "ModalType": null,
    "KitItensSellApart": false,
    "Videos": [
        "www.google.com"
    ]
}
```  
> 📘 Onboarding guide 
>
> Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer's journey.

<h3 id="get-sku-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|SKU unique identifier number.|

> Example responses

> 200 Response

```json
{
  "ActivateIfPossible": false,
  "CommercialConditionId": 1,
  "CreationDate": "2020-01-25T15:51:29.2614605",
  "CubicWeight": 0.1667,
  "EstimatedDateArrival": null,
  "Height": 1,
  "Id": 70,
  "IsActive": false,
  "IsKit": false,
  "KitItensSellApart": false,
  "Length": 1,
  "ManufacturerCode": "",
  "MeasurementUnit": "un",
  "ModalType": null,
  "Name": "Size 10",
  "PackagedHeight": 10,
  "PackagedLength": 10,
  "PackagedWeightKg": 10,
  "PackagedWidth": 10,
  "ProductId": 42,
  "RefId": "B096QW8Y8Z",
  "RewardValue": 0,
  "UnitMultiplier": 2,
  "Videos": [
    "https://www.youtube.com/"
  ],
  "WeightKg": 1,
  "Width": 1
}
```

<h3 id="get-sku-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-sku-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivateIfPossible|boolean|false|none|When set to `true`, this attribute will automatically update the SKU as active once associated with an image or an active component.|
|CommercialConditionId|integer|false|none|Used to define SKU specific promotions or installment rules. In case of no specific condition, use `1` (default value). This field does not accept `0`. Find out more by reading [Registering a commercial condition](https://help.vtex.com/tutorial/registering-a-commercial-condition--tutorials_445).|
|CreationDate|string|false|none|Date and time of the SKU's creation.|
|CubicWeight|number|false|none|[Cubic weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128).|
|EstimatedDateArrival|string \| null|false|none|SKU estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format, when the product is on pre-sale. You must take into consideration both the launch date and the freight calculation for the arrival date.|
|Height|number|false|none|SKU real height.|
|Id|integer|false|none|SKU unique identifier.|
|IsActive|boolean|false|none|Shows if the SKU is active (`true`) or not (`false`).|
|IsKit|boolean|false|none|Flag to set whether the product SKU is made up of one or more SKUs, thereby becoming a bundle. Must be enabled if you are adding a bundle. Once activated, the flag cannot be reverted.|
|KitItensSellApart|boolean|false|none|Defines if Kit components can be sold apart.|
|Length|number|false|none|SKU real length.|
|ManufacturerCode|string|false|none|Provided by the manufacturers to identify their product. This field should be filled in if the product has a specific manufacturer’s code.|
|MeasurementUnit|string|false|none|Used only in cases when you need to convert the unit of measure for sale. If a product is sold in boxes for example, but customers want to buy per square meter (m²). In common cases, use `'un'`.|
|ModalType|string \| null|false|none|Links an unusual type of SKU to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy).|
|Name|string|false|none|SKU name, meaning the variation of the previously added product. For example: **Product** - _Fridge_, **SKU** - _110V_.|
|PackagedHeight|number|false|none|Height used for shipping calculation.|
|PackagedLength|number|false|none|Length used for shipping calculation.|
|PackagedWeightKg|integer|false|none|Weight used for shipping calculation.|
|PackagedWidth|number|false|none|Width used for shipping calculation.|
|ProductId|integer|false|none|ID of the Product associated with this SKU.|
|RefId|string|false|none|Reference code used internally for organizational purposes. Must be unique. It is not required only if EAN code already exists. If not, this field must be provided.|
|RewardValue|number|false|none|Credit that the customer receives when finalizing an order of one specific SKU unit. By filling this field out with `1`, the customer gets U$ 1 credit on the site.|
|UnitMultiplier|number|false|none|This is the multiple number of SKU. If the Multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward.|
|Videos|[string]|false|none|Videos URLs.|
|WeightKg|number|false|none|Weight of the SKU in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.|
|Width|number|false|none|SKU real width.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update SKU

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "ActivateIfPossible": false,
    "CommercialConditionId": 1,
    "CreationDate": "2020-01-25T15:51:00",
    "CubicWeight": 0.1667,
    "EstimatedDateArrival": null,
    "Height": 1,
    "IsActive": false,
    "IsKit": false,
    "KitItensSellApart": false,
    "Length": 1,
    "ManufacturerCode": "123",
    "MeasurementUnit": "un",
    "ModalType": null,
    "Name": "Size 10",
    "PackagedHeight": 10,
    "PackagedLength": 10,
    "PackagedWeightKg": 10,
    "PackagedWidth": 10,
    "ProductId": 42,
    "RefId": "B096QW8Y8Z",
    "RewardValue": 1,
    "UnitMultiplier": 2,
    "Videos": [
      "https://www.youtube.com/"
    ],
    "WeightKg": 1,
    "Width": 1
  }'
```

`PUT /api/catalog/pvt/stockkeepingunit/{skuId}`

Updates an existing SKU. 

### Request body example

```json
{
   "Id": 310118448,
   "ProductId": 310117069,
   "IsActive": true,
   "ActivateIfPossible": true,
   "Name": "sku test",
   "RefId": "125478",
   "PackagedHeight": 10,
   "PackagedLength": 10,
   "PackagedWidth": 10,
   "PackagedWeightKg": 10,
   "Height": null,
   "Length": null,
   "Width": null,
   "WeightKg": null,
   "CubicWeight": 0.1667,
   "IsKit": false,
   "CreationDate": null,
   "RewardValue": null,
   "EstimatedDateArrival": null,
   "ManufacturerCode": "123",
   "CommercialConditionId": 1,
   "MeasurementUnit": "un",
   "UnitMultiplier": 2.0000,
   "ModalType": null,
   "KitItensSellApart": false,
   "Videos": [ "https://www.youtube.com/" ]
}
```

### Response body example

```json
{
    "Id": 310118449,
    "ProductId": 1,
    "IsActive": true,
    "ActivateIfPossible": true,
    "Name": "sku test",
    "RefId": "1254789",
    "PackagedHeight": 10.0,
    "PackagedLength": 10.0,
    "PackagedWidth": 10.0,
    "PackagedWeightKg": 10.0,
    "Height": null,
    "Length": null,
    "Width": null,
    "WeightKg": null,
    "CubicWeight": 0.1667,
    "IsKit": false,
    "CreationDate": "2020-04-22T12:12:47.5219561",
    "RewardValue": null,
    "EstimatedDateArrival": null,
    "ManufacturerCode": "123",
    "CommercialConditionId": 1,
    "MeasurementUnit": "un",
    "UnitMultiplier": 2.0000,
    "ModalType": null,
    "KitItensSellApart": false,
    "Videos": [ "https://www.youtube.com/" ]
}
```

> Body parameter

```json
{
  "ActivateIfPossible": false,
  "CommercialConditionId": 1,
  "CreationDate": "2020-01-25T15:51:00",
  "CubicWeight": 0.1667,
  "EstimatedDateArrival": null,
  "Height": 1,
  "IsActive": false,
  "IsKit": false,
  "KitItensSellApart": false,
  "Length": 1,
  "ManufacturerCode": "123",
  "MeasurementUnit": "un",
  "ModalType": null,
  "Name": "Size 10",
  "PackagedHeight": 10,
  "PackagedLength": 10,
  "PackagedWeightKg": 10,
  "PackagedWidth": 10,
  "ProductId": 42,
  "RefId": "B096QW8Y8Z",
  "RewardValue": 1,
  "UnitMultiplier": 2,
  "Videos": [
    "https://www.youtube.com/"
  ],
  "WeightKg": 1,
  "Width": 1
}
```

<h3 id="update-sku-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|SKU’s unique numerical identifier.|
|body|body|object|false|none|
|» ActivateIfPossible|body|boolean|false|When set to `true`, this attribute will automatically update the SKU as active once associated with an image or an active component.|
|» CommercialConditionId|body|integer|false|Used to define SKU specific promotions or installment rules. In case of no specific condition, use `1` (default value). This field does not accept `0`. Find out more by reading [Registering a commercial condition](https://help.vtex.com/tutorial/registering-a-commercial-condition--tutorials_445).|
|» CreationDate|body|string|false|Date and time of the SKU's creation.|
|» CubicWeight|body|number|false|[Cubic weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128).|
|» EstimatedDateArrival|body|string \| null|false|To add the product as pre-sale, enter the product estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format. You must take into consideration both the launch date and the freight calculation for the arrival date.|
|» Height|body|number|false|SKU real height.|
|» IsActive|body|boolean|false|Shows if the SKU is active (`true`) or not (`false`).|
|» IsKit|body|boolean|false|Flag to set whether the product SKU is made up of one or more SKUs, thereby becoming a bundle. Must be enabled if you are adding a bundle. Once activated, the flag cannot be reverted.|
|» KitItensSellApart|body|boolean|false|Defines if Kit components can be sold apart.|
|» Length|body|number|false|SKU real length.|
|» ManufacturerCode|body|string|false|Provided by the manufacturers to identify their product. This field should be filled in if the product has a specific manufacturer’s code.|
|» MeasurementUnit|body|string|false|Used only in cases when you need to convert the unit of measure for sale. If a product is sold in boxes for example, but customers want to buy per square meter (m²). In common cases, use `'un'`.|
|» ModalType|body|string \| null|false|Links an unusual type of SKU to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy).|
|» Name|body|string|true|SKU name, meaning the variation of the previously added product. For example: **Product** - _Fridge_, **SKU** - _110V_.|
|» PackagedHeight|body|number|true|Height used for shipping calculation.|
|» PackagedLength|body|number|true|Length used for shipping calculation.|
|» PackagedWeightKg|body|integer|true|Weight used for shipping calculation, in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.|
|» PackagedWidth|body|number|true|Width used for shipping calculation.|
|» ProductId|body|integer|true|ID of the Product associated with this SKU.|
|» RefId|body|string|false|Reference code used internally for organizational purposes. Must be unique. It is not required only if EAN code already exists. If not, this field must be provided.|
|» RewardValue|body|number|false|Credit that the customer receives when finalizing an order of one specific SKU unit. By filling this field out with `1`, the customer gets U$ 1 credit on the site.|
|» UnitMultiplier|body|number|false|This is the multiple number of SKU. If the Multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward.|
|» Videos|body|[string]|false|Videos URLs|
|» WeightKg|body|number|false|Weight of the SKU in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.|
|» Width|body|number|false|SKU real width.|

> Example responses

> 200 Response

```json
{
  "ActivateIfPossible": false,
  "CommercialConditionId": 1,
  "CreationDate": "2020-01-25T15:51:29.2614605",
  "CubicWeight": 0.1667,
  "EstimatedDateArrival": null,
  "Height": 1,
  "Id": 70,
  "IsActive": false,
  "IsKit": false,
  "KitItensSellApart": false,
  "Length": 1,
  "ManufacturerCode": "",
  "MeasurementUnit": "un",
  "ModalType": null,
  "Name": "Size 10",
  "PackagedHeight": 10,
  "PackagedLength": 10,
  "PackagedWeightKg": 10,
  "PackagedWidth": 10,
  "ProductId": 42,
  "RefId": "B096QW8Y8Z",
  "RewardValue": 0,
  "UnitMultiplier": 2,
  "Videos": [
    "https://www.youtube.com/"
  ],
  "WeightKg": 1,
  "Width": 1
}
```

<h3 id="update-sku-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="update-sku-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivateIfPossible|boolean|false|none|When set to `true`, this attribute will automatically update the SKU as active once associated with an image or an active component.|
|CommercialConditionId|integer|false|none|Used to define SKU specific promotions or installment rules. In case of no specific condition, use `1` (default value). This field does not accept `0`. Find out more by reading [Registering a commercial condition](https://help.vtex.com/tutorial/registering-a-commercial-condition--tutorials_445).|
|CreationDate|string|false|none|Date and time of the SKU's creation.|
|CubicWeight|number|false|none|[Cubic weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128).|
|EstimatedDateArrival|string \| null|false|none|SKU estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format, when the product is on pre-sale. You must take into consideration both the launch date and the freight calculation for the arrival date.|
|Height|number|false|none|SKU real height.|
|Id|integer|false|none|SKU unique identifier.|
|IsActive|boolean|false|none|Shows if the SKU is active (`true`) or not (`false`).|
|IsKit|boolean|false|none|Flag to set whether the product SKU is made up of one or more SKUs, thereby becoming a bundle. Must be enabled if you are adding a bundle. Once activated, the flag cannot be reverted.|
|KitItensSellApart|boolean|false|none|Defines if Kit components can be sold apart.|
|Length|number|false|none|SKU real length.|
|ManufacturerCode|string|false|none|Provided by the manufacturers to identify their product. This field should be filled in if the product has a specific manufacturer’s code.|
|MeasurementUnit|string|false|none|Used only in cases when you need to convert the unit of measure for sale. If a product is sold in boxes for example, but customers want to buy per square meter (m²). In common cases, use `'un'`.|
|ModalType|string \| null|false|none|Links an unusual type of SKU to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy).|
|Name|string|false|none|SKU name, meaning the variation of the previously added product. For example: **Product** - _Fridge_, **SKU** - _110V_.|
|PackagedHeight|number|false|none|Height used for shipping calculation.|
|PackagedLength|number|false|none|Length used for shipping calculation.|
|PackagedWeightKg|integer|false|none|Weight used for shipping calculation, in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.|
|PackagedWidth|number|false|none|Width used for shipping calculation.|
|ProductId|integer|false|none|ID of the Product associated with this SKU.|
|RefId|string|false|none|Reference code used internally for organizational purposes. Must be unique. It is not required only if EAN code already exists. If not, this field must be provided.|
|RewardValue|number|false|none|Credit that the customer receives when finalizing an order of one specific SKU unit. By filling this field out with `1`, the customer gets U$ 1 credit on the site.|
|UnitMultiplier|number|false|none|This is the multiple number of SKU. If the Multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward.|
|Videos|[string]|false|none|Videos URLs.|
|WeightKg|number|false|none|Weight of the SKU in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.|
|Width|number|false|none|SKU real width.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Retrieve SKU ID list by Reference ID list

<a id="opIdSkuIdlistbyRefIdlist"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/sku/stockkeepingunitidsbyrefids \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '[
    "799"
  ]'
```

`POST /api/catalog_system/pub/sku/stockkeepingunitidsbyrefids`

Receives a list of Reference IDs and returns a list with the corresponding SKU IDs.

>⚠️ The list of Reference IDs in the request body cannot have repeated Reference IDs, or the API will return an error 500. 

## Request body example

```json
[
    "123",
    "D25133K-B2",
    "14-556",
    "DCF880L2-BR"
]
```

### Response body example

```json
{
    "123": "435",
    "D25133K-B2": "4351",
    "14-556": "3155",
    "DCF880L2-BR": "4500"
}
```

> Body parameter

```json
[
  "799"
]
```

<h3 id="retrieve-sku-id-list-by-reference-id-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "123": "435",
  "14-556": "3155",
  "D25133K-B2": "4351",
  "DCF880L2-BR": "4500"
}
```

<h3 id="retrieve-sku-id-list-by-reference-id-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="retrieve-sku-id-list-by-reference-id-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|Reference ID.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Server|string||none|
|200|Vary|string||none|
|200|X-AspNet-Version|string||none|
|200|X-Powered-By|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|
|200|no|string||none|
|200|p3p|string||none|
|200|powered|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get SKU list by Product ID

<a id="opIdSkulistbyProductId"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/sku/stockkeepingunitByProductId/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/sku/stockkeepingunitByProductId/{productId}`

Retrieves a list with the SKUs related to a product by the product's ID.

### Response body example

```json
[
    {
        "IsPersisted": true,
        "IsRemoved": false,
        "Id": 2000035,
        "ProductId": 2000024,
        "IsActive": true,
        "Name": "33 - Preto",
        "Height": 8,
        "RealHeight": null,
        "Width": 15,
        "RealWidth": null,
        "Length": 8,
        "RealLength": null,
        "WeightKg": 340,
        "RealWeightKg": null,
        "ModalId": 1,
        "RefId": "",
        "CubicWeight": 0.2,
        "IsKit": false,
        "IsDynamicKit": null,
        "InternalNote": null,
        "DateUpdated": "2015-11-06T19:10:00",
        "RewardValue": 0.01,
        "CommercialConditionId": 1,
        "EstimatedDateArrival": "",
        "FlagKitItensSellApart": false,
        "ManufacturerCode": "",
        "ReferenceStockKeepingUnitId": null,
        "Position": 0,
        "EditionSkuId": null,
        "ApprovedAdminId": 123,
        "EditionAdminId": 123,
        "ActivateIfPossible": true,
        "SupplierCode": null,
        "MeasurementUnit": "un",
        "UnitMultiplier": 2.0000,
        "IsInventoried": null,
        "IsTransported": null,
        "IsGiftCardRecharge": null,
        "ModalType": ""
    }
]
```

<h3 id="get-sku-list-by-product-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|integer|true|Product’s unique numerical identifier.|

> Example responses

> 200 Response

```json
[
  {
    "ActivateIfPossible": true,
    "ApprovedAdminId": 123,
    "CommercialConditionId": 1,
    "CubicWeight": 0.2,
    "DateUpdated": "2015-11-06T19:10:00",
    "EditionAdminId": 123,
    "EditionSkuId": null,
    "EstimatedDateArrival": null,
    "FlagKitItensSellApart": false,
    "Height": 8,
    "Id": 2000035,
    "InternalNote": null,
    "IsActive": true,
    "IsDynamicKit": null,
    "IsGiftCardRecharge": null,
    "IsInventoried": null,
    "IsKit": false,
    "IsPersisted": true,
    "IsRemoved": false,
    "IsTransported": null,
    "Length": 8,
    "ManufacturerCode": "",
    "MeasurementUnit": "un",
    "ModalId": 1,
    "ModalType": null,
    "Name": "33 - Preto",
    "Position": 0,
    "ProductId": 2000024,
    "RealHeight": null,
    "RealLength": null,
    "RealWeightKg": null,
    "RealWidth": null,
    "RefId": "",
    "ReferenceStockKeepingUnitId": null,
    "RewardValue": 0.01,
    "SupplierCode": null,
    "UnitMultiplier": 2,
    "WeightKg": 340,
    "Width": 15
  }
]
```

<h3 id="get-sku-list-by-product-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-sku-list-by-product-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SkulistbyProductId](#schemaskulistbyproductid)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Server|string||none|
|200|Vary|string||none|
|200|X-CacheServer|string||none|
|200|X-Powered-by-VTEX-Janus-ApiCache|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-VTEX-Cache-Status-Janus-ApiCache|string||none|
|200|X-VTEX-Cache-Status-Janus-Edge|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|
|200|no|string||none|
|200|p3p|string||none|
|200|powered|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get SKU by Alternate ID

<a id="opIdSkubyAlternateId"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/sku/stockkeepingunitbyalternateId/10 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/sku/stockkeepingunitbyalternateId/{alternateId}`

Retrieves an SKU by its Alternate ID.

### Response body example

```json
{
    "Id": 310118450,
    "ProductId": 2,
    "NameComplete": "Caixa de Areia Azul Petmate sku test",
    "ComplementName": "",
    "ProductName": "Caixa de Areia Azul Petmate",
    "ProductDescription": "",
    "ProductRefId": "",
    "TaxCode": "",
    "SkuName": "sku test",
    "IsActive": true,
    "IsTransported": true,
    "IsInventoried": true,
    "IsGiftCardRecharge": false,
    "ImageUrl": "https://lojadobreno.vteximg.com.br/arquivos/ids/155451-55-55/caixa-areia-azul-petmate.jpg?v=637139451191670000",
    "DetailUrl": "/caixa-de-areia-azul-petmate/p",
    "CSCIdentification": null,
    "BrandId": "2000005",
    "BrandName": "Petmate",
    "IsBrandActive": true,
    "Dimension": {
        "cubicweight": 0.2083,
        "height": 10.0000,
        "length": 10.0000,
        "weight": 10.0000,
        "width": 10.0000
    },
    "RealDimension": {
        "realCubicWeight": 0.000,
        "realHeight": 0.0,
        "realLength": 0.0,
        "realWeight": 0.0,
        "realWidth": 0.0
    },
    "ManufacturerCode": "123",
    "IsKit": false,
    "KitItems": [],
    "Services": [],
    "Categories": [],
    "CategoriesFullPath": [
        "/3/15/",
        "/3/",
        "/1/"
    ],
    "Attachments": [],
    "Collections": [],
    "SkuSellers": [
        {
            "SellerId": "1",
            "StockKeepingUnitId": 310118450,
            "SellerStockKeepingUnitId": "310118450",
            "IsActive": true,
            "FreightCommissionPercentage": 0.0,
            "ProductCommissionPercentage": 0.0
        }
    ],
    "SalesChannels": [
        1,
        3
    ],
    "Images": [
        {
            "ImageUrl": "https://lojadobreno.vteximg.com.br/arquivos/ids/155451/caixa-areia-azul-petmate.jpg?v=637139451191670000",
            "ImageName": null,
            "FileId": 155451
        }
    ],
    "Videos": [],
    "SkuSpecifications": [],
    "ProductSpecifications": [],
    "ProductClustersIds": "151,158",
    "PositionsInClusters": {
        "151": 1,
        "158": 2
    },
    "ProductClusterNames": {
        "151": "asdfghj",
        "158": "Coleção halloween"
    },
    "ProductClusterHighlights": {
        "151": "asdfghj"
    },
    "ProductCategoryIds": "/3/15/",
    "IsDirectCategoryActive": true,
    "ProductGlobalCategoryId": 5000,
    "ProductCategories": {
        "15": "Caixa de Areia",
        "3": "Higiene",
        "1": "Alimentação"
    },
    "CommercialConditionId": 1,
    "RewardValue": 0.0,
    "AlternateIds": {
        "RefId": "1"
    },
    "AlternateIdValues": [
        "1"
    ],
    "EstimatedDateArrival": null,
    "MeasurementUnit": "un",
    "UnitMultiplier": 1.0000,
    "InformationSource": null,
    "ModalType": null,
    "KeyWords": "",
    "ReleaseDate": "2020-01-06T00:00:00Z",
    "ProductIsVisible": true,
    "ShowIfNotAvailable": true,
    "IsProductActive": true,
    "ProductFinalScore": 0
}
```

<h3 id="get-sku-by-alternate-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|alternateId|path|integer|true|Product EAN or RefId.|

> Example responses

> 200 Response

```json
{
  "AlternateIdValues": [
    "1"
  ],
  "AlternateIds": {
    "RefId": "1"
  },
  "Attachments": [],
  "BrandId": "2000005",
  "BrandName": "Petmate",
  "CSCIdentification": null,
  "Categories": [],
  "CategoriesFullPath": [
    "/3/15/",
    "/3/",
    "/1/"
  ],
  "Collections": [],
  "CommercialConditionId": 1,
  "ComplementName": "",
  "DetailUrl": "/caixa-de-areia-azul-petmate/p",
  "Dimension": {
    "cubicweight": 0.2083,
    "height": 10,
    "length": 10,
    "weight": 10,
    "width": 10
  },
  "EstimatedDateArrival": null,
  "Id": 310118450,
  "ImageUrl": "https://lojadobreno.vteximg.com.br/arquivos/ids/155451-55-55/caixa-areia-azul-petmate.jpg?v=637139451191670000",
  "Images": [
    {
      "FileId": 155451,
      "ImageName": null,
      "ImageUrl": "https://lojadobreno.vteximg.com.br/arquivos/ids/155451/caixa-areia-azul-petmate.jpg?v=637139451191670000"
    }
  ],
  "InformationSource": null,
  "IsActive": true,
  "IsBrandActive": true,
  "IsDirectCategoryActive": true,
  "IsGiftCardRecharge": false,
  "IsInventoried": true,
  "IsKit": false,
  "IsProductActive": true,
  "IsTransported": true,
  "KeyWords": "",
  "KitItems": [],
  "ManufacturerCode": "123",
  "MeasurementUnit": "un",
  "ModalType": null,
  "NameComplete": "Caixa de Areia Azul Petmate sku test",
  "PositionsInClusters": {
    "151": 1,
    "158": 2
  },
  "ProductCategories": {
    "1": "Alimentação",
    "3": "Higiene",
    "15": "Caixa de Areia"
  },
  "ProductCategoryIds": "/3/15/",
  "ProductClusterHighlights": {
    "151": "asdfghj"
  },
  "ProductClusterNames": {
    "151": "asdfghj",
    "158": "Coleção halloween"
  },
  "ProductClustersIds": "151,158",
  "ProductDescription": "",
  "ProductFinalScore": 0,
  "ProductGlobalCategoryId": 5000,
  "ProductId": 2,
  "ProductIsVisible": true,
  "ProductName": "Caixa de Areia Azul Petmate",
  "ProductRefId": "",
  "ProductSpecifications": [],
  "RealDimension": {
    "realCubicWeight": 0,
    "realHeight": 0,
    "realLength": 0,
    "realWeight": 0,
    "realWidth": 0
  },
  "ReleaseDate": "2020-01-06T00:00:00Z",
  "RewardValue": 0,
  "SalesChannels": [
    1,
    3
  ],
  "Services": [],
  "ShowIfNotAvailable": true,
  "SkuName": "sku test",
  "SkuSellers": [
    {
      "FreightCommissionPercentage": 0,
      "IsActive": true,
      "ProductCommissionPercentage": 0,
      "SellerId": "1",
      "SellerStockKeepingUnitId": "310118450",
      "StockKeepingUnitId": 310118450
    }
  ],
  "SkuSpecifications": [],
  "TaxCode": "",
  "UnitMultiplier": 1,
  "Videos": []
}
```

<h3 id="get-sku-by-alternate-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetSKUAltID](#schemagetskualtid)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Server|string||none|
|200|Transfer-Encoding|string||none|
|200|Vary|string||none|
|200|X-CacheServer|string||none|
|200|X-Powered-by-VTEX-Janus-ApiCache|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-Translate|string||none|
|200|X-Translate-BackEnd|string||none|
|200|X-VTEX-Cache-Status-Janus-ApiCache|string||none|
|200|X-VTEX-Cache-Status-Janus-Edge|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|
|200|no|string||none|
|200|p3p|string||none|
|200|powered|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get SKU and context

<a id="opIdSkuContext"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/sku/stockkeepingunitbyid/2001773 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/sku/stockkeepingunitbyid/{skuId}`

Retrieves context of an SKU.
> 📘 Onboarding guide 
>
> Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer's journey.

 ## Response body example

```json
{
    "Id": 2001773,
    "ProductId": 2001426,
    "NameComplete": "Tabela de Basquete",
    "ComplementName": "",
    "ProductName": "Tabela de Basquete",
    "ProductDescription": "Tabela de Basquete",
    "SkuName": "Tabela de Basquete",
    "ProductRefId": "0987",
    "TaxCode": "",
    "IsActive": true,
    "IsTransported": true,
    "IsInventoried": true,
    "IsGiftCardRecharge": false,
    "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168952-55-55/7508800GG.jpg",
    "DetailUrl": "/tabela-de-basquete/p",
    "CSCIdentification": null,
    "BrandId": "2000018",
    "BrandName": "MARCA ARGOLO TESTE",
    "IsBrandActive": true,
    "Dimension": {
        "cubicweight": 81.6833,
        "height": 65,
        "length": 58,
        "weight": 10000,
        "width": 130
    },
    "RealDimension": {
        "realCubicWeight": 274.1375,
        "realHeight": 241,
        "realLength": 65,
        "realWeight": 9800,
        "realWidth": 105
    },
    "ManufacturerCode": "",
    "IsKit": false,
    "KitItems": [],
    "Services": [],
    "Categories": [],
    "CategoriesFullPath": [
        "/1/10/",
        "/1/",
        "/20/"
    ],
    "Attachments": [
        {
            "Id": 3,
            "Name": "Mensagem",
            "Keys": [
                "nome;20",
                "foto;40"
            ],
            "Fields": [
                {
                    "FieldName": "nome",
                    "MaxCaracters": "20",
                    "DomainValues": "Adalberto,Pedro,João"
                },
                {
                    "FieldName": "foto",
                    "MaxCaracters": "40",
                    "DomainValues": null
                }
            ],
            "IsActive": true,
            "IsRequired": false
        }
    ],
    "Collections": [],
    "SkuSellers": [
        {
            "SellerId": "1",
            "StockKeepingUnitId": 2001773,
            "SellerStockKeepingUnitId": "2001773",
            "IsActive": true,
            "FreightCommissionPercentage": 0,
            "ProductCommissionPercentage": 0
        }
    ],
    "SalesChannels": [
        1,
        2,
        3,
        10
    ],
    "Images": [
        {
            "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168952/7508800GG.jpg",
            "ImageName": "",
            "FileId": 168952
        },
        {
            "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168953/7508800_1GG.jpg",
            "ImageName": "",
            "FileId": 168953
        },
        {
            "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168954/7508800_2GG.jpg",
            "ImageName": "",
            "FileId": 168954
        }
    ],
    "Videos": [
        "www.google.com"
    ],
    "SkuSpecifications": [
        {
            "FieldId": 102,
            "FieldName": "Cor",
            "FieldValueIds": [
                266
            ],
            "FieldValues": [
                "Padrão"
            ],
            "IsFilter": false,
            "FieldGroupId": 11,
            "FieldGroupName": "Especificações"
        }
    ],
    "ProductSpecifications": [
        {
            "FieldId": 7,
            "FieldName": "Faixa Etária",
            "FieldValueIds": [
                58,
                56,
                55,
                52
            ],
            "FieldValues": [
                "5 a 6 anos",
                "7 a 8 anos",
                "9 a 10 anos",
                "Acima de 10 anos"
            ],
            "IsFilter": true,
            "FieldGroupId": 17,
            "FieldGroupName": "NewGroupName 2"
        },
        {
            "FieldId": 23,
            "FieldName": "Fabricante",
            "FieldValueIds": [],
            "FieldValues": [
                "Xalingo"
            ],
            "IsFilter": false,
            "FieldGroupId": 17,
            "FieldGroupName": "NewGroupName 2"
        }
    ],
    "ProductClustersIds": "176,187,192,194,211,217,235,242",
    "PositionsInClusters": {
        "151": 3,
        "152": 0,
        "158": 1
    },
    "ProductClusterNames": {
        "151": "asdfghj",
        "152": "George",
        "158": "Coleção halloween"
    },
    "ProductClusterHighlights": {
        "151": "asdfghj",
        "152": "George"
    },
    "ProductCategoryIds": "/59/",
    "IsDirectCategoryActive": false,
    "ProductGlobalCategoryId": null,
    "ProductCategories": {
        "59": "Brinquedos"
    },
    "CommercialConditionId": 1,
    "RewardValue": 100.0,
    "AlternateIds": {
        "Ean": "8781",
        "RefId": "878181"
    },
    "AlternateIdValues": [
        "8781",
        "878181"
    ],
    "EstimatedDateArrival": "",
    "MeasurementUnit": "un",
    "UnitMultiplier": 2.0000,
    "InformationSource": "Indexer",
    "ModalType": "",
    "KeyWords": "basquete, tabela",
    "ReleaseDate": "2020-01-06T00:00:00",
    "ProductIsVisible": true,
    "ShowIfNotAvailable": true,
    "IsProductActive": true,
    "ProductFinalScore": 0
}
```

<h3 id="get-sku-and-context-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|SKU's unique identifier number.|
|sc|query|integer|false|Trade Policy's unique identifier number.|

> Example responses

> 200 Response

```json
{
  "AlternateIdValues": [
    "8781",
    "878181"
  ],
  "AlternateIds": {
    "Ean": "8781",
    "RefId": "878181"
  },
  "Attachments": [
    {
      "Fields": [
        {
          "DomainValues": "Adalberto,Pedro,João",
          "FieldName": "nome",
          "MaxCaracters": "20"
        },
        {
          "DomainValues": null,
          "FieldName": "foto",
          "MaxCaracters": "40"
        }
      ],
      "Id": 3,
      "IsActive": true,
      "IsRequired": false,
      "Keys": [
        "nome;20",
        "foto;40"
      ],
      "Name": "Mensagem"
    }
  ],
  "BrandId": "2000018",
  "BrandName": "MARCA ARGOLO TESTE",
  "CSCIdentification": null,
  "Categories": [],
  "CategoriesFullPath": [
    "/1/10/",
    "/1/",
    "/20/"
  ],
  "Collections": [],
  "CommercialConditionId": 1,
  "ComplementName": "",
  "DetailUrl": "/tabela-de-basquete/p",
  "Dimension": {
    "cubicweight": 81.6833,
    "height": 65,
    "length": 58,
    "weight": 10000,
    "width": 130
  },
  "EstimatedDateArrival": null,
  "Id": 2001773,
  "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168952-55-55/7508800GG.jpg",
  "Images": [
    {
      "FileId": 168952,
      "ImageName": "",
      "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168952/7508800GG.jpg"
    },
    {
      "FileId": 168953,
      "ImageName": "",
      "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168953/7508800_1GG.jpg"
    },
    {
      "FileId": 168954,
      "ImageName": "",
      "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168954/7508800_2GG.jpg"
    }
  ],
  "InformationSource": "Indexer",
  "IsActive": true,
  "IsBrandActive": true,
  "IsDirectCategoryActive": false,
  "IsGiftCardRecharge": false,
  "IsInventoried": true,
  "IsKit": false,
  "IsProductActive": true,
  "IsTransported": true,
  "KeyWords": "basquete, tabela",
  "KitItems": [],
  "ManufacturerCode": "",
  "MeasurementUnit": "un",
  "ModalType": null,
  "NameComplete": "Tabela de Basquete",
  "PositionsInClusters": {
    "151": 3,
    "152": 0,
    "158": 1
  },
  "ProductCategories": {
    "59": "Brinquedos"
  },
  "ProductCategoryIds": "/59/",
  "ProductClusterHighlights": {
    "151": "asdfghj",
    "152": "George"
  },
  "ProductClusterNames": {
    "151": "asdfghj",
    "152": "George",
    "158": "Coleção halloween"
  },
  "ProductClustersIds": "176,187,192,194,211,217,235,242",
  "ProductDescription": "Tabela de Basquete",
  "ProductFinalScore": 0,
  "ProductGlobalCategoryId": null,
  "ProductId": 2001426,
  "ProductIsVisible": true,
  "ProductName": "Tabela de Basquete",
  "ProductRefId": "0987",
  "ProductSpecifications": [
    {
      "FieldGroupId": 17,
      "FieldGroupName": "NewGroupName 2",
      "FieldId": 7,
      "FieldName": "Faixa Etária",
      "FieldValueIds": [
        58,
        56,
        55,
        52
      ],
      "FieldValues": [
        "5 a 6 anos",
        "7 a 8 anos",
        "9 a 10 anos",
        "Acima de 10 anos"
      ],
      "IsFilter": true
    },
    {
      "FieldGroupId": 17,
      "FieldGroupName": "NewGroupName 2",
      "FieldId": 23,
      "FieldName": "Fabricante",
      "FieldValueIds": [],
      "FieldValues": [
        "Xalingo"
      ],
      "IsFilter": false
    }
  ],
  "RealDimension": {
    "realCubicWeight": 274.1375,
    "realHeight": 241,
    "realLength": 65,
    "realWeight": 9800,
    "realWidth": 105
  },
  "ReleaseDate": "2020-01-06T00:00:00",
  "RewardValue": 100,
  "SalesChannels": [
    1,
    2,
    3,
    10
  ],
  "Services": [],
  "ShowIfNotAvailable": true,
  "SkuName": "Tabela de Basquete",
  "SkuSellers": [
    {
      "FreightCommissionPercentage": 0,
      "IsActive": true,
      "ProductCommissionPercentage": 0,
      "SellerId": "1",
      "SellerStockKeepingUnitId": "2001773",
      "StockKeepingUnitId": 2001773
    }
  ],
  "SkuSpecifications": [
    {
      "FieldGroupId": 11,
      "FieldGroupName": "Especificações",
      "FieldId": 102,
      "FieldName": "Cor",
      "FieldValueIds": [
        266
      ],
      "FieldValues": [
        "Padrão"
      ],
      "IsFilter": false
    }
  ],
  "TaxCode": "",
  "UnitMultiplier": 2,
  "Videos": [
    "www.google.com"
  ]
}
```

<h3 id="get-sku-and-context-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetSKUandContext](#schemagetskuandcontext)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Content-Length|string||none|
|200|Content-Type|string||none|
|200|Date|string||none|
|200|Last-Modified|string||none|
|200|Vary|string||none|
|200|X-Powered-By-VTEX-Cache|string||none|
|200|X-VTEX-Cache-Backend-Connect-Time|string||none|
|200|X-VTEX-Cache-Backend-Header-Time|string||none|
|200|X-VTEX-Cache-Server|string||none|
|200|X-VTEX-Cache-Status-Janus-ApiCache|string||none|
|200|X-VTEX-Cache-Time|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get SKU ID by Reference ID

<a id="opIdSkuIdbyRefId"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/sku/stockkeepingunitidbyrefid/0001 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/sku/stockkeepingunitidbyrefid/{refId}`

Retrieves an SKU ID by the SKU's Reference ID. 

### Response body example

```json
"310118450"
```

<h3 id="get-sku-id-by-reference-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|refId|path|string|true|SKU Reference ID.|

> Example responses

> 200 Response

```json
"1"
```

<h3 id="get-sku-id-by-reference-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List all SKU IDs

<a id="opIdListallSKUIDs"></a>

> Code samples

```bash
curl 'https://example.com/api/catalog_system/pvt/sku/stockkeepingunitids?page=1&pagesize=25' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/sku/stockkeepingunitids`

Retrieves the IDs of all SKUs in your store. Presents the results with page size and pagination.
> 📘 Onboarding guide 
>
> Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer's journey.

### Response body example

```json
[
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10
]
```

<h3 id="list-all-sku-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|true|Number of the page from where you need to retrieve SKU IDs.|
|pagesize|query|integer|true|Size of the page from where you need retrieve SKU IDs. The maximum value is `1000`.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
[
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10
]
```

<h3 id="list-all-sku-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-all-sku-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-sku-ean">SKU EAN</h1>

## Get EAN by SKU ID

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/1/ean \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/stockkeepingunit/{skuId}/ean`

Retrieves the EAN of the SKU. 
## Response body example

```json
[
    "1234567890123"
]
```

<h3 id="get-ean-by-sku-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|SKU’s unique numerical identifier.|

> Example responses

> 200 Response

```json
[
  "1234567890123"
]
```

<h3 id="get-ean-by-sku-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-ean-by-sku-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete all SKU EAN values

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/1/ean \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/stockkeepingunit/{skuId}/ean`

Deletes all EAN values of an SKU.

<h3 id="delete-all-sku-ean-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|SKU’s unique numerical identifier.|

<h3 id="delete-all-sku-ean-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create SKU EAN

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/1/ean/1234567 \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/catalog/pvt/stockkeepingunit/{skuId}/ean/{ean}`

Creates or updates the EAN value of an SKU.

<h3 id="create-sku-ean-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|SKU’s unique numerical identifier.|
|ean|path|string|true|EAN.|

<h3 id="create-sku-ean-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete SKU EAN

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/1/ean/ABC123 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/stockkeepingunit/{skuId}/ean/{ean}`

Deletes the EAN value of an SKU.

<h3 id="delete-sku-ean-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|SKU’s unique numerical identifier.|
|ean|path|string|true|EAN number.|

<h3 id="delete-sku-ean-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get SKU by EAN

<a id="opIdSkubyEAN"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/sku/stockkeepingunitbyean/1234567890123 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/sku/stockkeepingunitbyean/{ean}`

Retrieves an SKU by its EAN ID. 
## Response body example

```json
{
    "Id": 2001773,
    "ProductId": 2001426,
    "NameComplete": "Tabela de Basquete",
    "ProductName": "Tabela de Basquete",
    "ProductDescription": "Tabela de Basquete",
    "SkuName": "Tabela de Basquete",
    "IsActive": true,
    "IsTransported": true,
    "IsInventoried": true,
    "IsGiftCardRecharge": false,
    "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168952-55-55/7508800GG.jpg",
    "DetailUrl": "/tabela-de-basquete/p",
    "CSCIdentification": null,
    "BrandId": "2000018",
    "BrandName": "MARCA ARGOLO TESTE",
    "Dimension": {
        "cubicweight": 81.6833,
        "height": 65,
        "length": 58,
        "weight": 10000,
        "width": 130
    },
    "RealDimension": {
        "realCubicWeight": 274.1375,
        "realHeight": 241,
        "realLength": 65,
        "realWeight": 9800,
        "realWidth": 105
    },
    "ManufacturerCode": "",
    "IsKit": false,
    "KitItems": [],
    "Services": [],
    "Categories": [],
    "Attachments": [
        {
            "Id": 3,
            "Name": "Mensagem",
            "Keys": [
                "nome;20",
                "foto;40"
            ],
            "Fields": [
                {
                    "FieldName": "nome",
                    "MaxCaracters": "20",
                    "DomainValues": "Adalberto,Pedro,João"
                },
                {
                    "FieldName": "foto",
                    "MaxCaracters": "40",
                    "DomainValues": null
                }
            ],
            "IsActive": true,
            "IsRequired": false
        }
    ],
    "Collections": [],
    "SkuSellers": [
        {
            "SellerId": "1",
            "StockKeepingUnitId": 2001773,
            "SellerStockKeepingUnitId": "2001773",
            "IsActive": true,
            "FreightCommissionPercentage": 0,
            "ProductCommissionPercentage": 0
        }
    ],
    "SalesChannels": [
        1,
        2,
        3,
        10
    ],
    "Images": [
        {
            "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168952/7508800GG.jpg",
            "ImageName": "",
            "FileId": 168952
        },
        {
            "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168953/7508800_1GG.jpg",
            "ImageName": "",
            "FileId": 168953
        },
        {
            "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168954/7508800_2GG.jpg",
            "ImageName": "",
            "FileId": 168954
        }
    ],
    "SkuSpecifications": [
        {
            "FieldId": 102,
            "FieldName": "Cor",
            "FieldValueIds": [
                266
            ],
            "FieldValues": [
                "Padrão"
            ]
        }
    ],
    "ProductSpecifications": [
        {
            "FieldId": 7,
            "FieldName": "Faixa Etária",
            "FieldValueIds": [
                58,
                56,
                55,
                52
            ],
            "FieldValues": [
                "5 a 6 anos",
                "7 a 8 anos",
                "9 a 10 anos",
                "Acima de 10 anos"
            ]
        },
        {
            "FieldId": 23,
            "FieldName": "Fabricante",
            "FieldValueIds": [],
            "FieldValues": [
                "Xalingo"
            ]
        }
    ],
    "ProductClustersIds": "176,187,192,194,211,217,235,242",
    "ProductCategoryIds": "/59/",
    "ProductGlobalCategoryId": null,
    "ProductCategories": {
        "59": "Brinquedos"
    },
    "CommercialConditionId": 1,
    "RewardValue": 100.0,
    "AlternateIds": {
        "Ean": "8781",
        "RefId": "878181"
    },
    "AlternateIdValues": [
        "8781",
        "878181"
    ],
    "EstimatedDateArrival": "",
    "MeasurementUnit": "un",
    "UnitMultiplier": 2.0000,
    "InformationSource": null,
    "ModalType": ""
}
```

<h3 id="get-sku-by-ean-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|ean|path|string|true|EAN of the SKU which you need to retrieve details from.|

> Example responses

> 200 Response

```json
{
  "AlternateIdValues": [
    "8781",
    "878181"
  ],
  "AlternateIds": {
    "Ean": "8781",
    "RefId": "878181"
  },
  "Attachments": [
    {
      "Fields": [
        {
          "DomainValues": "Adalberto,Pedro,João",
          "FieldName": "nome",
          "MaxCaracters": "20"
        },
        {
          "DomainValues": null,
          "FieldName": "foto",
          "MaxCaracters": "40"
        }
      ],
      "Id": 3,
      "IsActive": true,
      "IsRequired": false,
      "Keys": [
        "nome;20",
        "foto;40"
      ],
      "Name": "Mensagem"
    }
  ],
  "BrandId": "2000018",
  "BrandName": "MARCA ARGOLO TESTE",
  "CSCIdentification": null,
  "Categories": [],
  "Collections": [],
  "CommercialConditionId": 1,
  "DetailUrl": "/tabela-de-basquete/p",
  "Dimension": {
    "cubicweight": 81.6833,
    "height": 65,
    "length": 58,
    "weight": 10000,
    "width": 130
  },
  "EstimatedDateArrival": null,
  "Id": 2001773,
  "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168952-55-55/7508800GG.jpg",
  "Images": [
    {
      "FileId": 168952,
      "ImageName": "",
      "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168952/7508800GG.jpg"
    },
    {
      "FileId": 168953,
      "ImageName": "",
      "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168953/7508800_1GG.jpg"
    },
    {
      "FileId": 168954,
      "ImageName": "",
      "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168954/7508800_2GG.jpg"
    }
  ],
  "InformationSource": null,
  "IsActive": true,
  "IsGiftCardRecharge": false,
  "IsInventoried": true,
  "IsKit": false,
  "IsTransported": true,
  "KitItems": [],
  "ManufacturerCode": "",
  "MeasurementUnit": "un",
  "ModalType": "",
  "NameComplete": "Tabela de Basquete",
  "ProductCategories": {
    "59": "Brinquedos"
  },
  "ProductCategoryIds": "/59/",
  "ProductClustersIds": "176,187,192,194,211,217,235,242",
  "ProductDescription": "Tabela de Basquete",
  "ProductGlobalCategoryId": null,
  "ProductId": 2001426,
  "ProductName": "Tabela de Basquete",
  "ProductSpecifications": [
    {
      "FieldId": 7,
      "FieldName": "Faixa Etária",
      "FieldValueIds": [
        58,
        56,
        55,
        52
      ],
      "FieldValues": [
        "5 a 6 anos",
        "7 a 8 anos",
        "9 a 10 anos",
        "Acima de 10 anos"
      ]
    },
    {
      "FieldId": 23,
      "FieldName": "Fabricante",
      "FieldValueIds": [],
      "FieldValues": [
        "Xalingo"
      ]
    }
  ],
  "RealDimension": {
    "realCubicWeight": 274.1375,
    "realHeight": 241,
    "realLength": 65,
    "realWeight": 9800,
    "realWidth": 105
  },
  "RewardValue": 100,
  "SalesChannels": [
    1,
    2,
    3,
    10
  ],
  "Services": [],
  "SkuName": "Tabela de Basquete",
  "SkuSellers": [
    {
      "FreightCommissionPercentage": 0,
      "IsActive": true,
      "ProductCommissionPercentage": 0,
      "SellerId": "1",
      "SellerStockKeepingUnitId": "2001773",
      "StockKeepingUnitId": 2001773
    }
  ],
  "SkuSpecifications": [
    {
      "FieldId": 102,
      "FieldName": "Cor",
      "FieldValueIds": [
        266
      ],
      "FieldValues": [
        "Padrão"
      ]
    }
  ],
  "UnitMultiplier": 2
}
```

<h3 id="get-sku-by-ean-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetSKUAltID](#schemagetskualtid)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Server|string||none|
|200|Vary|string||none|
|200|X-CacheServer|string||none|
|200|X-Powered-by-VTEX-Janus-ApiCache|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-VTEX-Cache-Status-Janus-ApiCache|string||none|
|200|X-VTEX-Cache-Status-Janus-Edge|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|
|200|no|string||none|
|200|p3p|string||none|
|200|powered|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-sku-file">SKU File</h1>

## Copy Files from an SKU to another SKU

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/copy/1/2/file/ \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`PUT /api/catalog/pvt/stockkeepingunit/copy/{skuIdfrom}/{skuIdto}/file/`

Copy all existing files from an SKU to another SKU. 
## Response body example

```json
[
    {
        "Id": 1964,
        "ArchiveId": 155404,
        "SkuId": 1,
        "IsMain": true,
        "Label": ""
    },
    {
        "Id": 1965,
        "ArchiveId": 155429,
        "SkuId": 1,
        "IsMain": false,
        "Label": ""
    }
]
```

<h3 id="copy-files-from-an-sku-to-another-sku-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuIdfrom|path|integer|true|__Origin__ SKU’s unique numerical identifier.|
|skuIdto|path|integer|true|__Target__ SKU’s unique numerical identifier.|

> Example responses

> 200 Response

```json
[
  {
    "ArchiveId": 155404,
    "Id": 1964,
    "IsMain": true,
    "Label": "",
    "SkuId": 1
  },
  {
    "ArchiveId": 155429,
    "Id": 1965,
    "IsMain": false,
    "Label": "",
    "SkuId": 1
  }
]
```

<h3 id="copy-files-from-an-sku-to-another-sku-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="copy-files-from-an-sku-to-another-sku-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» ArchiveId|integer|false|none|Unique identifier of the image file.|
|» Id|integer|false|none|Unique identifier of the association of the Image to the SKU.|
|» IsMain|boolean|false|none|Defines if the Image is the Main Image of the SKU.|
|» Label|string \| null|false|none|Image label.|
|» SkuId|integer|false|none|Unique identifier of the SKU.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Disassociate SKU File

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/disassociate/1/file/32 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/stockkeepingunit/disassociate/{skuId}/file/{skuFileId}`

Disassociates an SKU File from an SKU.

<h3 id="disassociate-sku-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|SKU’s unique numerical identifier.|
|skuFileId|path|integer|true|ID of the association of the SKU and the image, which can be obtained by placing a request to the [Get SKU File](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-sku-file) endpoint and copying the `Id` field.|

<h3 id="disassociate-sku-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get SKU Files

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/1/file \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/stockkeepingunit/{skuId}/file`

Gets general information about all Files in the SKU. 
## Response body example

```json
[
    {
        "Id": 549,
        "ArchiveId": 155485,
        "SkuId": 310118490,
        "Name": "chimera-cat-quimera-5",
        "IsMain": true,
        "Label": "miau"
    },
    {
        "Id": 550,
        "ArchiveId": 155486,
        "SkuId": 310118490,
        "Name": "Gato-siames",
        "IsMain": false,
        "Label": "Gato siames"
    },
    {
        "Id": 555,
        "ArchiveId": 155491,
        "SkuId": 310118490,
        "Name": "Cat-Sleeping-Pics",
        "IsMain": false,
        "Label": null
    }
]
```

<h3 id="get-sku-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|SKU’s unique numerical identifier.|

> Example responses

> 200 Response

```json
[
  {
    "ArchiveId": 155485,
    "Id": 549,
    "IsMain": true,
    "Label": "miau",
    "Name": "chimera-cat-quimera-5",
    "SkuId": 310118490
  },
  {
    "ArchiveId": 155486,
    "Id": 550,
    "IsMain": false,
    "Label": "Gato siames",
    "Name": "Gato-siames",
    "SkuId": 310118490
  },
  {
    "ArchiveId": 155491,
    "Id": 555,
    "IsMain": false,
    "Label": null,
    "Name": "Cat-Sleeping-Pics",
    "SkuId": 310118490
  }
]
```

<h3 id="get-sku-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-sku-files-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» ArchiveId|integer|false|none|Unique identifier of the Image.|
|» Id|integer|false|none|Unique identifier of the association of the Image to the SKU.|
|» IsMain|boolean|false|none|Defines if the Image is the Main Image of the SKU.|
|» Label|string \| null|false|none|Image label.|
|» Name|string|false|none|Image name.|
|» SkuId|integer|false|none|Unique identifier of the SKU.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create SKU File

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/123456/file \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "IsMain": true,
    "Label": "Main",
    "Name": "Nike-Red-Janoski-1",
    "Text": "Nike-Red-Janoski",
    "Url": "https://m.media-amazon.com/images/I/610G2-sJx5L._AC_UX695_.jpg"
  }'
```

`POST /api/catalog/pvt/stockkeepingunit/{skuId}/file`

Creates a new Image for an SKU based on its URL or on a form-data request body. 
## Request body example

```json
{
      "IsMain": true,
      "Label": "",
      "Name": "Royal-Canin-Feline-Urinary-SO",
      "Text": null,
      "Url": "https://1.bp.blogspot.com/_SLQk9aAv9-o/S7NNbJPv7NI/AAAAAAAAAN8/V1LcO0ViDc4/s1600/waterbottle.jpg"
      
}
```

## Response body example

```json
{
      "Id": 503,
      "ArchiveId": 155491,
      "SkuId": 1,
      "Name": "Royal-Canin-Feline-Urinary-SO",
      "IsMain": true,
      "Label": ""
}
```

> Body parameter

```json
{
  "IsMain": true,
  "Label": "Main",
  "Name": "Nike-Red-Janoski-1",
  "Text": "Nike-Red-Janoski",
  "Url": "https://m.media-amazon.com/images/I/610G2-sJx5L._AC_UX695_.jpg"
}
```

<h3 id="create-sku-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|SKU’s unique numerical identifier.|
|body|body|[SKUFileURL](#schemaskufileurl)|false|none|
|» IsMain|body|boolean|false|Defines if the Image is the main image of the SKU.|
|» Label|body|string|false|SKU image label.|
|» Name|body|string|true|SKU image name.|
|» Text|body|string \| null|false|General text of the image.|
|» Url|body|string|true|External Image's URL.  The URL must start with the protocol identifier (`http://` or `https://`) and end with the file extension (`.jpg`, `.png` or `.gif`).|

> Example responses

> 200 Response

```json
{
  "ArchiveId": 155569,
  "Id": 625,
  "IsMain": true,
  "Label": "Main",
  "SkuId": 123456
}
```

<h3 id="create-sku-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-sku-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveId|integer|false|none|Unique identifier of the image file.|
|Id|integer|false|none|ID of the association of the SKU and the image (`SkuFileId`). This is the ID that is used to update or delete it.|
|IsMain|boolean|false|none|Set the image as the main image for the product.|
|Label|string|false|none|Image label.|
|SkuId|integer|false|none|SKU ID.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete All SKU Files

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/1/file \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/stockkeepingunit/{skuId}/file`

Deletes all SKU Image Files.

<h3 id="delete-all-sku-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|SKU’s unique numerical identifier.|

<h3 id="delete-all-sku-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update SKU File

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/123456/file/517 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "IsMain": true,
    "Label": "Main",
    "Name": "Nike-Red-Janoski-1",
    "Text": "Nike-Red-Janoski",
    "Url": "https://m.media-amazon.com/images/I/610G2-sJx5L._AC_UX695_.jpg"
  }'
```

`PUT /api/catalog/pvt/stockkeepingunit/{skuId}/file/{skuFileId}`

Updates a new Image on an SKU based on its URL or on a form-data request body. 
## Request body example

```json
{
    "IsMain": true,
    "Label": null,
    "Name": "toilet-paper",
    "Text": null,
    "Url": "https://images-na.ssl-images-amazon.com/images/I/81DLLXaGI7L._SL1500_.jpg"
}
```

## Response body example

```json
{
    "Id": 508,
    "ArchiveId": 155491,
    "SkuId": 7,
    "IsMain": true,
    "Label": null
}
```

> Body parameter

```json
{
  "IsMain": true,
  "Label": "Main",
  "Name": "Nike-Red-Janoski-1",
  "Text": "Nike-Red-Janoski",
  "Url": "https://m.media-amazon.com/images/I/610G2-sJx5L._AC_UX695_.jpg"
}
```

<h3 id="update-sku-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|SKU’s unique numerical identifier.|
|skuFileId|path|integer|true|ID of the association of the SKU and the image, which can be obtained by placing a request to the [Get SKU File](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-sku-file) endpoint and copying the `Id` field.|
|body|body|[SKUFileURL](#schemaskufileurl)|false|none|
|» IsMain|body|boolean|false|Defines if the Image is the main image of the SKU.|
|» Label|body|string|false|SKU image label.|
|» Name|body|string|true|SKU image name.|
|» Text|body|string \| null|false|General text of the image.|
|» Url|body|string|true|External Image's URL.  The URL must start with the protocol identifier (`http://` or `https://`) and end with the file extension (`.jpg`, `.png` or `.gif`).|

> Example responses

> 200 Response

```json
{
  "ArchiveId": 155569,
  "Id": 625,
  "IsMain": true,
  "Label": "Main",
  "SkuId": 123456
}
```

<h3 id="update-sku-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="update-sku-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveId|integer|false|none|Unique identifier of the image file.|
|Id|integer|false|none|ID of the association of the SKU and the image (`SkuFileId`). This is the ID that is used to update or delete it.|
|IsMain|boolean|false|none|Set the image as the main image for the product.|
|Label|string|false|none|Image label.|
|SkuId|integer|false|none|SKU ID.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete SKU Image File

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/1/file/1 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/stockkeepingunit/{skuId}/file/{skuFileId}`

Deletes a specific SKU Image File.

<h3 id="delete-sku-image-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|SKU’s unique numerical identifier.|
|skuFileId|path|integer|true|ID of the association of the SKU and the image, which can be obtained by placing a request to the [Get SKU File](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-sku-file) endpoint and copying the `Id` field.|

<h3 id="delete-sku-image-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-sku-kit">SKU Kit</h1>

## Get SKU Kit by SKU ID or Parent SKU ID

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunitkit \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/stockkeepingunitkit`

Retrieves general information about the components of an SKU Kit by SKU ID or Parent SKU ID. 
## Response body example

```json
{
    "Id": 7,
    "StockKeepingUnitParent": 7,
    "StockKeepingUnitId": 1,
    "Quantity": 1,
    "UnitPrice": 50.0000
}
```

<h3 id="get-sku-kit-by-sku-id-or-parent-sku-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|query|integer(int32)|false|SKU’s unique numerical identifier.|
|parentSkuId|query|integer(int32)|false|Parent SKU’s unique numerical identifier.|

> Example responses

> 200 Response

```json
{
  "Id": 7,
  "Quantity": 1,
  "StockKeepingUnitId": 1,
  "StockKeepingUnitParent": 7,
  "UnitPrice": 50
}
```

<h3 id="get-sku-kit-by-sku-id-or-parent-sku-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SkuKit](#schemaskukit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create SKU Kit

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunitkit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "Quantity": 3,
    "StockKeepingUnitId": 31018374,
    "StockKeepingUnitParent": 31018373,
    "UnitPrice": 15.5
  }'
```

`POST /api/catalog/pvt/stockkeepingunitkit`

Adds a component to a specific Kit. 
## Request body example

```json
{
    "StockKeepingUnitParent": 7,
    "StockKeepingUnitId": 1,
    "Quantity": 1,
    "UnitPrice": 50.0000
}
``` 
## Response body example

```json
{
    "Id": 7,
    "StockKeepingUnitParent": 7,
    "StockKeepingUnitId": 1,
    "Quantity": 1,
    "UnitPrice": 50.0000
}
```

> Body parameter

```json
{
  "Quantity": 3,
  "StockKeepingUnitId": 31018374,
  "StockKeepingUnitParent": 31018373,
  "UnitPrice": 15.5
}
```

<h3 id="create-sku-kit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|false|none|
|» Quantity|body|integer|true|Component quantity.|
|» StockKeepingUnitId|body|integer|true|Component SKU ID.|
|» StockKeepingUnitParent|body|integer|true|SKU ID of the SKU Kit.|
|» UnitPrice|body|number|true|Component price per unit.|

> Example responses

> 200 Response

```json
{
  "Id": 7,
  "Quantity": 1,
  "StockKeepingUnitId": 1,
  "StockKeepingUnitParent": 7,
  "UnitPrice": 50
}
```

<h3 id="create-sku-kit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SkuKit](#schemaskukit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete SKU Kit by SKU ID or Parent SKU ID

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunitkit \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/stockkeepingunitkit`

Deletes all Kit’s components based on the Parent SKU ID or deletes a specific Kit’s component based on the SKU ID.

<h3 id="delete-sku-kit-by-sku-id-or-parent-sku-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|query|integer(int32)|false|SKU’s unique numerical identifier.|
|parentSkuId|query|integer(int32)|false|Parent SKU’s unique numerical identifier.|

<h3 id="delete-sku-kit-by-sku-id-or-parent-sku-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get SKU Kit

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunitkit/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/stockkeepingunitkit/{kitId}`

Retrieves general information about a component of a Kit.

<h3 id="get-sku-kit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|kitId|path|integer|true|Kit’s unique numerical identifier|

> Example responses

> 200 Response

```json
{
  "Id": 7,
  "Quantity": 1,
  "StockKeepingUnitId": 1,
  "StockKeepingUnitParent": 7,
  "UnitPrice": 50
}
```

<h3 id="get-sku-kit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SkuKit](#schemaskukit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete SKU Kit by KitId

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunitkit/1 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/stockkeepingunitkit/{kitId}`

Deletes a specific Kit’s component based on its Kit ID.

<h3 id="delete-sku-kit-by-kitid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|kitId|path|integer|true|Kit’s unique numerical identifier.|

<h3 id="delete-sku-kit-by-kitid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-sku-specification">SKU Specification</h1>

## Get SKU Specifications

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/1/specification \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/stockkeepingunit/{skuId}/specification`

Retrieves information about an SKU's Specifications. 
## Response body example

```json
[
    {
        "Id": 427,
        "SkuId": 7,
        "FieldId": 32,
        "FieldValueId": 131,
        "Text": "500g"
    },
    {
        "Id": 428,
        "SkuId": 7,
        "FieldId": 40,
        "FieldValueId": 133,
        "Text": "A"
    }
]
```

<h3 id="get-sku-specifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|SKU’s unique numerical identifier.|

> Example responses

> 200 Response

```json
[
  {
    "FieldId": 193,
    "FieldValueId": 360,
    "Id": 1505,
    "SkuId": 1234568387,
    "Text": "Size 10"
  }
]
```

<h3 id="get-sku-specifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-sku-specifications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SKUSpecificationResponse](#schemaskuspecificationresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update SKU Specification

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/21/specification \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "FieldId": 32,
    "FieldValueId": 131,
    "Id": 65,
    "SkuId": 21,
    "Text": "Red"
  }'
```

`PUT /api/catalog/pvt/stockkeepingunit/{skuId}/specification`

Updates an existing Specification on an existing SKU. This endpoint only updates the `FieldValueId`. 
## Request body example

```json
{
  "Id": 65,
  "SkuId": 21,
  "FieldId": 32,
  "FieldValueId": 131,
  "Text": "Red"
}
```

## Response body example

```json
{
  "Id": 65,
  "SkuId": 21,
  "FieldId": 32,
  "FieldValueId": 131,
  "Text": "Red"
}
```

> Body parameter

```json
{
  "FieldId": 32,
  "FieldValueId": 131,
  "Id": 65,
  "SkuId": 21,
  "Text": "Red"
}
```

<h3 id="update-sku-specification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|SKU’s unique numerical identifier.|
|body|body|object|false|none|
|» FieldId|body|integer|true|Specification unique identifier. This field cannot be updated.|
|» FieldValueId|body|integer|true|Specification value unique identifier. This field can only be updated with other values of the same `FieldId`.|
|» Id|body|integer|true|Specification and SKU association unique identifier. This field cannot be updated.|
|» SkuId|body|integer|false|SKU unique identifier. This field cannot be updated.|
|» Text|body|string|false|Specification Value Name. This field is automatically updated if the `FieldValue` is updated. Otherwise, the value cannot be modified.|

> Example responses

> 200 Response

```json
[
  {
    "FieldId": 193,
    "FieldValueId": 360,
    "Id": 1505,
    "SkuId": 1234568387,
    "Text": "Size 10"
  }
]
```

<h3 id="update-sku-specification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="update-sku-specification-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SKUSpecificationResponse](#schemaskuspecificationresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Associate SKU Specification

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/1234568387/specification \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "FieldId": 13,
    "FieldValueId": 101
  }'
```

`POST /api/catalog/pvt/stockkeepingunit/{skuId}/specification`

Associates a previously created Specification to an SKU. 
## Request body example

```json
{
    "FieldId": 65,
    "FieldValueId": 138
}
```

## Response body example

```json
{
    "Id": 730,
    "SkuId": 31,
    "FieldId": 65,
    "FieldValueId": 138,
    "Text": "Size"
}
```

> Body parameter

```json
{
  "FieldId": 13,
  "FieldValueId": 101
}
```

<h3 id="associate-sku-specification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|SKU’s unique numerical identifier.|
|body|body|object|false|none|
|» FieldId|body|integer|true|Specification ID.|
|» FieldValueId|body|integer|false|Specification Value ID. Required only for `FieldTypeId` as `5`, `6` and `7`.|

> Example responses

> 200 Response

```json
{
  "FieldId": 193,
  "FieldValueId": 360,
  "Id": 1505,
  "SkuId": 1234568387,
  "Text": "Size 10"
}
```

<h3 id="associate-sku-specification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SKUSpecificationResponse](#schemaskuspecificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete all SKU Specifications

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/1/specification \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/stockkeepingunit/{skuId}/specification`

Deletes all SKU Specifications.

<h3 id="delete-all-sku-specifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|SKU’s unique numerical identifier.|

<h3 id="delete-all-sku-specifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete SKU Specification

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/1/specification/1 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/stockkeepingunit/{skuId}/specification/{specificationId}`

Deletes a specific SKU Specification.

<h3 id="delete-sku-specification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|SKU’s unique numerical identifier.|
|specificationId|path|integer|true|Specification’s unique numerical identifier.|

<h3 id="delete-sku-specification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Associate SKU specification using specification name and group name

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/1/specificationvalue \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "FieldName": "Size",
    "FieldValues": [
      "M"
    ],
    "GroupName": "Sizes",
    "RootLevelSpecification": true
  }'
```

`PUT /api/catalog/pvt/stockkeepingunit/{skuId}/specificationvalue`

Associates a specification to an SKU using specification name and group name. Automatically creates the informed group, specification and values if they had not been created before.

 ## Request body example

```json
{
    "FieldName": "Size",
    "GroupName": "Sizes",
    "RootLevelSpecification": false,
    "FieldValues": [
        "M"
        ]
}
```
 
 
## Response body example

```json
[
    {
        "Id": 419,
        "SkuId": 5,
        "FieldId": 22,
        "FieldValueId": 62,
        "Text": "M"
    }
]
```


> Body parameter

```json
{
  "FieldName": "Size",
  "FieldValues": [
    "M"
  ],
  "GroupName": "Sizes",
  "RootLevelSpecification": true
}
```

<h3 id="associate-sku-specification-using-specification-name-and-group-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|SKU’s unique numerical identifier.|
|body|body|object|false|none|
|» FieldName|body|string|true|Specification name.|
|» FieldValues|body|[string]|true|Array of specification values. SKU Specifications must contain only one value.|
|» GroupName|body|string|true|Group name.|
|» RootLevelSpecification|body|boolean|true|Root level specification.|

> Example responses

> 200 Response

```json
[
  {
    "FieldId": 29,
    "FieldValueId": 76,
    "Id": 418,
    "SkuId": 5,
    "Text": "M"
  }
]
```

<h3 id="associate-sku-specification-using-specification-name-and-group-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="associate-sku-specification-using-specification-name-and-group-name-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» FieldId|integer|false|none|Specification ID.|
|» FieldValueId|integer|false|none|Current specification value ID.|
|» Id|integer|false|none|ID of the association of the SKU and the specification.|
|» SkuId|integer|false|none|SKU ID.|
|» Text|string|false|none|Current specification value text.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-sku-attachment">SKU Attachment</h1>

## Associate SKU Attachment

> Code samples

```bash
curl https://example.com/api/catalog/pvt/skuattachment \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "AttachmentId": 1,
    "SkuId": 1
  }'
```

`POST /api/catalog/pvt/skuattachment`

Associates an existing SKU to an existing Attachment. 
## Request body example

```json
{
    "AttachmentId": 1,
    "SkuId": 7
}
```

## Response body example

```json
{
    "Id": 31,
    "AttachmentId": 1,
    "SkuId": 7
}
```

> Body parameter

```json
{
  "AttachmentId": 1,
  "SkuId": 1
}
```

<h3 id="associate-sku-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|false|none|
|» AttachmentId|body|integer|true|Attachment ID.|
|» SkuId|body|integer|true|Unique identifier of an SKU.|

> Example responses

> 200 Response

```json
{
  "AttachmentId": 1,
  "Id": 31,
  "SkuId": 7
}
```

<h3 id="associate-sku-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="associate-sku-attachment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttachmentId|integer|false|none|Attachment ID.|
|Id|integer|false|none|Identifier of the SKU's association to the attachment.|
|SkuId|integer|false|none|Unique identifier of the SKU.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Dissociate attachments and SKUs

> Code samples

```bash
curl https://example.com/api/catalog/pvt/skuattachment \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/skuattachment`

Dissociates attachments and SKUs based on an SKU ID or an attachment ID.

<h3 id="dissociate-attachments-and-skus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|query|integer(int32)|false|SKU ID. By using this query param, you can dissociate all the attachments from an SKU based on its SKU ID.|
|attachmentId|query|integer(int32)|false|Attachment ID. By using this query param, you can dissociate the given attachment from all previously associated SKUs.|

<h3 id="dissociate-attachments-and-skus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete SKU Attachment by Attachment Association ID

> Code samples

```bash
curl https://example.com/api/catalog/pvt/skuattachment/1 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/skuattachment/{skuAttachmentAssociationId}`

Deletes the association of an SKU to an Attachment.

<h3 id="delete-sku-attachment-by-attachment-association-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuAttachmentAssociationId|path|integer|true|ID of the association between the attachment and the SKU, which corresponds to the `Id` in the response body of the [Associate SKU Attachment](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-post-sku-attachment) and the [Get SKU Attachment by SKU ID](https://developers.vtex.com/vtex-rest-api/reference/get_api-catalog-pvt-stockkeepingunit-skuid-attachment) endpoints.|

<h3 id="delete-sku-attachment-by-attachment-association-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get SKU Attachments by SKU ID

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/1/attachment \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/stockkeepingunit/{skuId}/attachment`

Retrieves existing SKU Attachments by SKU ID. 
## Response body example

```json
[
    {
        "Id": 97,
        "AttachmentId": 1,
        "SkuId": 1
    }
]
```

<h3 id="get-sku-attachments-by-sku-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|SKU unique identifier.|

> Example responses

> 200 Response

```json
[
  {
    "AttachmentId": 1,
    "Id": 97,
    "SkuId": 1
  }
]
```

<h3 id="get-sku-attachments-by-sku-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-sku-attachments-by-sku-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» AttachmentId|integer|false|none|Attachment ID.|
|» Id|integer|false|none|Identifier of the SKU's association to the attachment.|
|» SkuId|integer|false|none|Unique identifier of the SKU.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Associate attachments to an SKU

<a id="opIdAssociateattachmentstoSKU"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/sku/associateattachments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "AttachmentNames": [
      "T-Shirt Customization"
    ],
    "SkuId": 1
  }'
```

`POST /api/catalog_system/pvt/sku/associateattachments`

Associates attachments to an SKU based on a given SKU ID and attachment names.
This request removes existing SKU attachment associations and recreates the associations with the attachments being sent. 
## Request body example

```json
{
    "SkuId": 1,
    "AttachmentNames": [
        "T-Shirt Customization"
    ]
}
```

> Body parameter

```json
{
  "AttachmentNames": [
    "T-Shirt Customization"
  ],
  "SkuId": 1
}
```

<h3 id="associate-attachments-to-an-sku-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|true|none|
|» AttachmentNames|body|[string]|true|Array with all the names of the attachments that you need to associate to the SKU.|
|» SkuId|body|integer|true|Unique identifier of the SKU.|

<h3 id="associate-attachments-to-an-sku-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-sku-complement">SKU Complement</h1>

## Create SKU Complement

<a id="opIdCreateSKUComplement"></a>

> Code samples

```bash
curl https://example.com/api/catalog/pvt/skucomplement \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "ComplementTypeId": 2,
    "ParentSkuId": 1,
    "SkuId": 2
  }'
```

`POST /api/catalog/pvt/skucomplement`

Creates a new SKU Complement on a Parent SKU. 

## Request body example

```json
{
    "SkuId": 2,
    "ParentSkuId": 1,
    "ComplementTypeId": 2
}
```
 
## Response body example

```json
{
    "Id": 62,
    "SkuId": 2,
    "ParentSkuId": 1,
    "ComplementTypeId": 2
}
```

> Body parameter

```json
{
  "ComplementTypeId": 2,
  "ParentSkuId": 1,
  "SkuId": 2
}
```

<h3 id="create-sku-complement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|false|none|
|» ComplementTypeId|body|integer|true|Complement Type ID. This represents the type of the complement. The possible values are: `1` for Accessory; `2` for Suggestion; `3` for Similar Product; `5` for Show Together.|
|» ParentSkuId|body|integer|true|ID of the Parent SKU, where the Complement is inserted.|
|» SkuId|body|integer|true|ID of the SKU which will be inserted as a Complement in the Parent SKU.|

> Example responses

> 200 Response

```json
[
  {
    "ComplementTypeId": 1,
    "Id": 61,
    "ParentSkuId": 1,
    "SkuId": 7
  }
]
```

<h3 id="create-sku-complement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SkuComplement](#schemaskucomplement)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get SKU Complement by SKU Complement ID

<a id="opIdGetSKUComplementbySKUComplementID"></a>

> Code samples

```bash
curl https://example.com/api/catalog/pvt/skucomplement/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/skucomplement/{skuComplementId}`

Retrieves an existing SKU Complement by its SKU Complement ID. 
 
## Response body example

```json
{
    "Id": 62,
    "SkuId": 2,
    "ParentSkuId": 1,
    "ComplementTypeId": 2
}
```

<h3 id="get-sku-complement-by-sku-complement-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuComplementId|path|integer|true|SKU Complement’s unique numerical identifier.|

> Example responses

> 200 Response

```json
[
  {
    "ComplementTypeId": 1,
    "Id": 61,
    "ParentSkuId": 1,
    "SkuId": 7
  }
]
```

<h3 id="get-sku-complement-by-sku-complement-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SkuComplement](#schemaskucomplement)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete SKU Complement by SKU Complement ID

<a id="opIdDeleteSKUComplementbySKUComplementID"></a>

> Code samples

```bash
curl https://example.com/api/catalog/pvt/skucomplement/1 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/skucomplement/{skuComplementId}`

Deletes a previously existing SKU Complement by SKU Complement ID.

<h3 id="delete-sku-complement-by-sku-complement-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuComplementId|path|integer|true|SKU Complement’s unique numerical identifier.|

<h3 id="delete-sku-complement-by-sku-complement-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get SKU Complement by SKU ID

<a id="opIdGetSKUComplementbySKUID"></a>

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/1/complement \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/stockkeepingunit/{skuId}/complement`

Retrieves an existing SKU Complement by its SKU ID. 

## Response body example

```json
[
    {
        "Id": 61,
        "SkuId": 7,
        "ParentSkuId": 1,
        "ComplementTypeId": 1
    }
]
```

<h3 id="get-sku-complement-by-sku-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|SKU’s unique numerical identifier.|

> Example responses

> 200 Response

```json
[
  {
    "ComplementTypeId": 1,
    "Id": 61,
    "ParentSkuId": 1,
    "SkuId": 7
  }
]
```

<h3 id="get-sku-complement-by-sku-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SkuComplement](#schemaskucomplement)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get SKU Complements by Complement Type ID

<a id="opIdGetSKUComplementsbyComplementTypeID"></a>

> Code samples

```bash
curl https://example.com/api/catalog/pvt/stockkeepingunit/1/complement/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/stockkeepingunit/{skuId}/complement/{complementTypeId}`

Retrieves all the existing SKU Complements with the same Complement Type ID of a specific SKU. 

## Response body example

```json
[
    {
        "Id": 61,
        "SkuId": 7,
        "ParentSkuId": 1,
        "ComplementTypeId": 1
    }
]
```

<h3 id="get-sku-complements-by-complement-type-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|integer|true|ID of the SKU which will be inserted as a Complement in the Parent SKU.|
|complementTypeId|path|integer|true|Complement Type ID. This represents the type of the complement. The possible values are: `1` for Accessory; `2` for Suggestion; `3` for Similar Product; `5` for Show Together.|

> Example responses

> 200 Response

```json
[
  {
    "ComplementTypeId": 1,
    "Id": 61,
    "ParentSkuId": 1,
    "SkuId": 7
  }
]
```

<h3 id="get-sku-complements-by-complement-type-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SkuComplement](#schemaskucomplement)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get SKU complements by type

<a id="opIdGetSKUcomplementsbytype"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/sku/complements/1/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/sku/complements/{parentSkuId}/{type}`

Retrieves all the existing SKU complements with the same complement type ID of a specific SKU. 
 
## Response body example

```json
{
    "ParentSkuId": 1,
    "ComplementSkuIds": [
        7
    ],
    "Type": "1"
}
```

<h3 id="get-sku-complements-by-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|parentSkuId|path|integer|true|ID of the Parent SKU, where the Complement is inserted.|
|type|path|integer|true|Complement Type ID. This represents the type of the complement. The possible values are: `1` for Accessory; `2` for Suggestion; `3` for Similar Product; `5` for Show Together.|

> Example responses

> 200 Response

```json
{
  "ComplementSkuIds": [
    7
  ],
  "ParentSkuId": 1,
  "Type": "1"
}
```

<h3 id="get-sku-complements-by-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-sku-complements-by-type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComplementSkuIds|[integer]|true|none|Array with SKU complements IDs.|
|ParentSkuId|integer|true|none|ID of the Parent SKU, where the Complement is inserted.|
|Type|string|true|none|Complement Type ID. This represents the type of the complement. The possible values are: `1` for Accessory; `2` for Suggestion; `3` for Similar Product; `5` for Show Together.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-non-structured-specification">Non Structured Specification</h1>

## Get Non Structured Specification by SKU ID

> Code samples

```bash
curl 'https://example.com/api/catalog/pvt/specification/nonstructured?skuId=1' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/specification/nonstructured`

Gets general information about unmapped Specifications of a Seller's SKU in a Marketplace by SKU ID. 
## Response body example

```json
[
{
    "Id": 1010,
    "SkuId": 310119072,
    "SpecificationName": "size",
    "SpecificationValue": "Small"
}
]
```

<h3 id="get-non-structured-specification-by-sku-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|query|integer|true|SKU’s unique numerical identifier.|

> Example responses

> 200 Response

```json
[
  {
    "Id": 1010,
    "SkuId": 310119072,
    "SpecificationName": "size",
    "SpecificationValue": "Small"
  }
]
```

<h3 id="get-non-structured-specification-by-sku-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-non-structured-specification-by-sku-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Id|integer|false|none|Non Structured Specification’s unique numerical identifier.|
|» SkuId|integer|false|none|SKU's unique numerical identifier.|
|» SpecificationName|string|false|none|Name of the Non Structured Specification.|
|» SpecificationValue|string|false|none|Value of the Non Structured Specification.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete Non Structured Specification by SKU ID

> Code samples

```bash
curl 'https://example.com/api/catalog/pvt/specification/nonstructured?skuId=1' \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/specification/nonstructured`

Deletes unmapped Specifications of a Seller'S SKU in a Marketplace by SKU ID.

<h3 id="delete-non-structured-specification-by-sku-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|query|integer|true|SKU’s unique numerical identifier.|

<h3 id="delete-non-structured-specification-by-sku-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Non Structured Specification by ID

> Code samples

```bash
curl https://example.com/api/catalog/pvt/specification/nonstructured/1010 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/specification/nonstructured/{Id}`

Retrieves general information about unmapped Specifications of a Seller's SKU in a Marketplace. 
## Response body example

```json
{
    "Id": 1010,
    "SkuId": 310119072,
    "SpecificationName": "size",
    "SpecificationValue": "Small"
}
```

<h3 id="get-non-structured-specification-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|Id|path|integer|true|Non Structured Specification’s unique numerical identifier.|

> Example responses

> 200 Response

```json
[
  {
    "Id": 1010,
    "SkuId": 310119072,
    "SpecificationName": "size",
    "SpecificationValue": "Small"
  }
]
```

<h3 id="get-non-structured-specification-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-non-structured-specification-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Id|integer|false|none|Non Structured Specification’s unique numerical identifier.|
|» SkuId|integer|false|none|SKU's unique numerical identifier.|
|» SpecificationName|string|false|none|Name of the Non Structured Specification.|
|» SpecificationValue|string|false|none|Value of the Non Structured Specification.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete Non Structured Specification

> Code samples

```bash
curl https://example.com/api/catalog/pvt/specification/nonstructured/1 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/specification/nonstructured/{Id}`

Deletes unmapped Specifications of a Seller'S SKU in a Marketplace by its unique ID.

<h3 id="delete-non-structured-specification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|Id|path|integer|true|Non Structured Specification’s unique numerical identifier.|

<h3 id="delete-non-structured-specification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-specification-field">Specification Field</h1>

## Get Specification Field

<a id="opIdSpecificationsField"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/specification/fieldGet/88 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/specification/fieldGet/{fieldId}`

Retrieves details from a specification field by this field's ID. 
>⚠️ This is a legacy endpoint. We recommend using [Get Specification](https://developers.vtex.com/vtex-rest-api/reference/get_api-catalog-pvt-specification-specificationid) instead.

## Response body example

```json
{
    "Name": "Material",
    "CategoryId": 4,
    "FieldId": 88,
    "IsActive": true,
    "IsRequired": true,
    "FieldTypeId": 1,
    "FieldTypeName": "Texto",
    "FieldValueId": null,
    "Description": "Composition of the product.",
    "IsStockKeepingUnit": false,
    "IsFilter": true,
    "IsOnProductDetails": false,
    "Position": 1,
    "IsWizard": false,
    "IsTopMenuLinkActive": false,
    "IsSideMenuLinkActive": true,
    "DefaultValue": null,
    "FieldGroupId": 20,
    "FieldGroupName": "Clothes specifications"
}
```



<h3 id="get-specification-field-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|fieldId|path|integer|true|Specification Field ID.|

> Example responses

> 200 Response

```json
{
  "CategoryId": 4,
  "DefaultValue": null,
  "Description": "Composition of the product.",
  "FieldGroupId": 20,
  "FieldGroupName": "Clothes specifications",
  "FieldId": 88,
  "FieldTypeId": 1,
  "FieldTypeName": "Texto",
  "FieldValueId": null,
  "IsActive": true,
  "IsFilter": true,
  "IsOnProductDetails": false,
  "IsRequired": true,
  "IsSideMenuLinkActive": true,
  "IsStockKeepingUnit": false,
  "IsTopMenuLinkActive": false,
  "IsWizard": false,
  "Name": "Material",
  "Position": 1
}
```

<h3 id="get-specification-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-specification-field-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultValue|string \| null|false|none|Specification default value.|
|Description|string \| null|false|none|**Deprecated.**|
|FieldGroupId|integer|false|none|ID of the group of specifications that contains the new specification.|
|FieldGroupName|string|false|none|Specification Field Group Name.|
|FieldId|integer|false|none|Specification field ID.|
|FieldTypeId|integer|false|none|Field Type ID can be `1 - Text`, `2 - Multi-Line Text`, `4 - Number`, `5 - Combo`, `6 - Radio`, `7 - Checkbox`, `8 - Indexed Text`, `9 - Indexed Multi-Line Text`.|
|FieldTypeName|string|false|none|Field Type name, which can be `Text`, `Multi-Line Text`, `Number`, `Combo`, `Radio`, `Checkbox`, `Indexed Text` or `Indexed Multi-Line Text`.|
|FieldValueId|integer \| null|false|none|Specification value ID.|
|IsActive|boolean|false|none|Enable (`true`) or disable (`false`) specification.|
|IsFilter|boolean|false|none|Store Framework - Deprecated.<br>Legacy CMS Portal - To allow the specification to be used as a facet (filter) on the search navigation bar.<br>|
|IsOnProductDetails|boolean|false|none|Store Framework - Deprecated.<br>Legacy CMS Portal -If specification is visible on the product page.<br>|
|IsRequired|boolean|false|none|Makes the specification mandatory (`true`) or optional (`false`).|
|IsSideMenuLinkActive|boolean|false|none|Store Framework - Deprecated.<br>Legacy CMS Portal - To make the specification field clickable in the search navigation bar.<br>|
|IsStockKeepingUnit|boolean|false|none|If `true`, it will be added as a SKU specification. If `false`, it will be added as a product specification field.|
|IsTopMenuLinkActive|boolean|false|none|Store Framework - Deprecated.<br>Legacy CMS Portal - To make the specification visible in the store's upper menu.<br>|
|IsWizard|boolean \| null|false|none|**Deprecated.**|
|Name|string|false|none|Specification field name.|
|Position|integer|false|none|Store Framework - Deprecated.<br>Legacy CMS Portal - This position number is used in ordering the specifications both in the navigation menu and in the specification listing on the product page.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Specification Field

<a id="opIdSpecificationsInsertFieldUpdate"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/specification/field \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "CategoryId": 4,
    "DefaultValue": "Cotton",
    "Description": "Composition of the product.",
    "FieldGroupId": 20,
    "FieldGroupName": "Clothes specifications",
    "FieldId": 89,
    "FieldTypeId": 1,
    "IsActive": true,
    "IsFilter": true,
    "IsOnProductDetails": true,
    "IsRequired": true,
    "IsSideMenuLinkActive": false,
    "IsStockKeepingUnit": false,
    "IsTopMenuLinkActive": false,
    "IsWizard": false,
    "Name": "Material",
    "Position": 1
  }'
```

`PUT /api/catalog_system/pvt/specification/field`

Updates a specification field in a category. 
>⚠️ This is a legacy endpoint. We recommend using [Update Specification](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-specification) instead.

## Request body example

```json
{
    "FieldId": 89,
    "Name": "Material",
    "CategoryId": 4,
    "IsActive": true,
    "IsRequired": true,
    "FieldTypeId": 1,
    "Description": "Composition of the product.",
    "IsStockKeepingUnit": false,
    "IsFilter": true,
    "IsOnProductDetails": true,
    "Position": 1,
    "IsWizard": false,
    "IsTopMenuLinkActive": false,
    "IsSideMenuLinkActive": false,
    "DefaultValue": "Cotton",
    "FieldGroupId": 20,
    "FieldGroupName": "Clothes specifications"
}
```

## Response body example

```json
89
```

> Body parameter

```json
{
  "CategoryId": 4,
  "DefaultValue": "Cotton",
  "Description": "Composition of the product.",
  "FieldGroupId": 20,
  "FieldGroupName": "Clothes specifications",
  "FieldId": 89,
  "FieldTypeId": 1,
  "IsActive": true,
  "IsFilter": true,
  "IsOnProductDetails": true,
  "IsRequired": true,
  "IsSideMenuLinkActive": false,
  "IsStockKeepingUnit": false,
  "IsTopMenuLinkActive": false,
  "IsWizard": false,
  "Name": "Material",
  "Position": 1
}
```

<h3 id="update-specification-field-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[SpecificationsInsertFieldUpdateRequest](#schemaspecificationsinsertfieldupdaterequest)|true|none|
|» CategoryId|body|integer \| null|true|Category ID.|
|» DefaultValue|body|string \| null|true|Specification Field default Value.|
|» Description|body|string \| null|true|Specification Field Description.|
|» FieldGroupId|body|integer(int32)|true|Specification Field Group ID.|
|» FieldGroupName|body|string|true|Specification Field Group Name.|
|» FieldId|body|integer \| null|true|Specification Field ID.|
|» FieldTypeId|body|integer(int32)|true|Specification Field Type ID.|
|» FieldValueId|body|integer \| null|false|Specification Field Value ID.|
|» IsActive|body|boolean|true|Enables(`true`) or disables (`false`) the Specification Field.|
|» IsFilter|body|boolean|true|Store Framework - Deprecated.<br>Legacy CMS Portal - To allow the specification to be used as a facet (filter) on the search navigation bar.<br>|
|» IsOnProductDetails|body|boolean|true|Store Framework - Deprecated.<br>Legacy CMS Portal -If specification is visible on the product page.<br>|
|» IsRequired|body|boolean|true|Makes the Specification Field mandatory (`true`) or optional (`false`).|
|» IsSideMenuLinkActive|body|boolean|true|Store Framework - Deprecated.<br>Legacy CMS Portal - To make the specification field clickable in the search navigation bar.<br>|
|» IsStockKeepingUnit|body|boolean|true|If `true`, it will be added as a SKU specification field. If `false`, it will be added as a product specification field.|
|» IsTopMenuLinkActive|body|boolean|true|Store Framework - Deprecated.<br>Legacy CMS Portal - To make the specification visible in the store's upper menu.<br>|
|» IsWizard|body|boolean|true|**Deprecated.** Deprecated field.|
|» Name|body|string|true|Specification Field ID.|
|» Position|body|integer(int32)|true|Specification Field Position.|

> Example responses

> 200 Response

```json
89
```

<h3 id="update-specification-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create Specification Field

<a id="opIdSpecificationsInsertField"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/specification/field \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "CategoryId": 4,
    "DefaultValue": null,
    "Description": "Composition of the product.",
    "FieldGroupId": 20,
    "FieldGroupName": "Clothes specifications",
    "FieldId": 88,
    "FieldTypeId": 1,
    "FieldValueId": 1,
    "IsActive": true,
    "IsFilter": true,
    "IsOnProductDetails": false,
    "IsRequired": true,
    "IsSideMenuLinkActive": true,
    "IsStockKeepingUnit": false,
    "IsTopMenuLinkActive": true,
    "IsWizard": false,
    "Name": "Material",
    "Position": 1
  }'
```

`POST /api/catalog_system/pvt/specification/field`

Creates a specification field in a category. 
>⚠️ This is a legacy endpoint. We recommend using [Create Specification](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-post-specification) instead.

## Request body example

```json
{
    "Name": "Material",
    "CategoryId": 4,
    "FieldId": 88,
    "IsActive": true,
    "IsRequired": true,
    "FieldTypeId": 1,
    "FieldValueId": 1,
    "IsStockKeepingUnit": false,
    "Description": "Composition of the product.",
    "IsFilter": true,
    "IsOnProductDetails": false,
    "Position": 1,
    "IsWizard": false,
    "IsTopMenuLinkActive": true,
    "IsSideMenuLinkActive": true,
    "DefaultValue": null,
    "FieldGroupId": 20,
    "FieldGroupName": "Clothes specifications"
}
```

## Response body example

```json
89
```

> Body parameter

```json
{
  "CategoryId": 4,
  "DefaultValue": null,
  "Description": "Composition of the product.",
  "FieldGroupId": 20,
  "FieldGroupName": "Clothes specifications",
  "FieldId": 88,
  "FieldTypeId": 1,
  "FieldValueId": 1,
  "IsActive": true,
  "IsFilter": true,
  "IsOnProductDetails": false,
  "IsRequired": true,
  "IsSideMenuLinkActive": true,
  "IsStockKeepingUnit": false,
  "IsTopMenuLinkActive": true,
  "IsWizard": false,
  "Name": "Material",
  "Position": 1
}
```

<h3 id="create-specification-field-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[SpecificationsInsertFieldRequest](#schemaspecificationsinsertfieldrequest)|true|none|
|» CategoryId|body|integer \| null|true|Category ID.|
|» DefaultValue|body|string \| null|true|Specification Field default Value.|
|» Description|body|string \| null|true|Specification Field Description.|
|» FieldGroupId|body|integer(int32)|true|Specification Field Group ID.|
|» FieldGroupName|body|string|true|Specification Field Group Name.|
|» FieldId|body|integer \| null|true|Specification Field ID.|
|» FieldTypeId|body|integer(int32)|true|Specification Field Type ID.|
|» FieldValueId|body|integer \| null|true|Specification Field Value ID.|
|» IsActive|body|boolean|true|Defines if the Specification Field is active. The default value is `true`.|
|» IsFilter|body|boolean|true|Store Framework - Deprecated.<br>Legacy CMS Portal - To allow the specification to be used as a facet (filter) on the search navigation bar.<br>|
|» IsOnProductDetails|body|boolean|true|Store Framework - Deprecated.<br>Legacy CMS Portal -If specification is visible on the product page.<br>|
|» IsRequired|body|boolean|true|Makes the Specification Field mandatory (`true`) or optional (`false`).|
|» IsSideMenuLinkActive|body|boolean|true|Store Framework - Deprecated.<br>Legacy CMS Portal - To make the specification field clickable in the search navigation bar.<br>|
|» IsStockKeepingUnit|body|boolean|true|If `true`, it will be added as a SKU specification. If `false`, it will be added as a product specification field.|
|» IsTopMenuLinkActive|body|boolean|true|Store Framework - Deprecated.<br>Legacy CMS Portal - To make the specification visible in the store's upper menu.<br>|
|» IsWizard|body|boolean|true|**Deprecated.** Deprecated field.|
|» Name|body|string|true|Specification Field ID.|
|» Position|body|integer(int32)|true|Specification Field Position.|

> Example responses

> 200 Response

```json
89
```

<h3 id="create-specification-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-specification-group">Specification Group</h1>

## Create Specification Group

<a id="opIdSpecificationGroupInsert2"></a>

> Code samples

```bash
curl https://example.com/api/catalog/pvt/specificationgroup \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "CategoryId": 1,
    "Name": "Sizes"
  }'
```

`POST /api/catalog/pvt/specificationgroup`

Create a specification group. 
>⚠️ It is also possible to create a Specification Group by using an alternative legacy route: `/api/catalog_system/pvt/specification/group`. 
## Request body example

```json
{
    "CategoryId": 1,
    "Name": "Sizes"
}
```

## Response body example

```json
{
  "Id": 6,
  "CategoryId": 1,
  "Name": "Sizes",
  "Position": 3
}
```

> Body parameter

```json
{
  "CategoryId": 1,
  "Name": "Sizes"
}
```

<h3 id="create-specification-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[SpecificationGroupInsertRequest](#schemaspecificationgroupinsertrequest)|true|none|
|» CategoryId|body|integer(int32)|true|Category ID.|
|» Name|body|string|true|Specification Group Name.|

> Example responses

> 200 Response

```json
{
  "CategoryId": 1,
  "Id": 10,
  "Name": "Sizes",
  "Position": 3
}
```

<h3 id="create-specification-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-specification-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryId|integer(int32)|false|none|Category ID.|
|Id|integer(int32)|false|none|Specification Group ID.|
|Name|string|false|none|Specification Group Name.|
|Position|integer(int32)|false|none|Store Framework - Deprecated.<br>Legacy CMS Portal - Specification Group Position.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Specification Group

> Code samples

```bash
curl https://example.com/api/catalog/pvt/specificationgroup/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "CategoryId": 1,
    "Id": 24,
    "Name": "Sizes",
    "Position": 1
  }'
```

`PUT /api/catalog/pvt/specificationgroup/{groupId}`

Update a specification group. 
>⚠️ It is also possible to update a Specification Group by using an alternative legacy route: `/api/catalog_system/pvt/specification/group`.

## Request and response body example

```json
{
    "CategoryId": 1,
    "Id": 17,
    "Name": "NewGroupName",
    "Position": 1
}
```

> Body parameter

```json
{
  "CategoryId": 1,
  "Id": 24,
  "Name": "Sizes",
  "Position": 1
}
```

<h3 id="update-specification-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|groupId|path|integer|true|Group’s unique numerical identifier.|
|body|body|object|false|none|
|» CategoryId|body|integer|true|Category ID where the Specification Group is contained.|
|» Id|body|integer(int32)|true|Specification Group ID.|
|» Name|body|string|true|Specification Group Name.|
|» Position|body|integer|true|Specification Group Position.|

> Example responses

> 200 Response

```json
{
  "CategoryId": 1,
  "Id": 24,
  "Name": "Sizes",
  "Position": 1
}
```

<h3 id="update-specification-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="update-specification-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryId|integer|false|none|Category ID where the Specification Group is contained.|
|Id|integer(int32)|false|none|Specification Group ID.|
|Name|string|false|none|Specification Group Name.|
|Position|integer|false|none|Specification Group Position.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Specification Group

<a id="opIdSpecificationsGroupGet"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/specification/groupGet/6 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/specification/groupGet/{groupId}`

Retrieves details from a specification group by the ID of the group. 
## Response body example

```json
{
  "CategoryId": 1,
  "Id": 6,
  "Name": "Sizes",
  "Position": 3
}
```

<h3 id="get-specification-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|groupId|path|string|true|Specification Group ID.|

> Example responses

> 200 Response

```json
{
  "CategoryId": 1,
  "Id": 6,
  "Name": "Sizes",
  "Position": 3
}
```

<h3 id="get-specification-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SpecificationsGroup](#schemaspecificationsgroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List Specification Group by Category

<a id="opIdSpecificationsGroupListbyCategory"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/specification/groupbycategory/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/specification/groupbycategory/{categoryId}`

Retrieves a list of specification groups by the category ID. 
## Response body example

```json
[
    {
      "CategoryId": 1,
      "Id": 5,
      "Name": "Materials",
      "Position": 2
    },
    {
      "CategoryId": 1,
      "Id": 6,
      "Name": "Sizes",
      "Position": 3
    }
  ]
```

<h3 id="list-specification-group-by-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|categoryId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "CategoryId": 1,
    "Id": 5,
    "Name": "Materials",
    "Position": 2
  },
  {
    "CategoryId": 1,
    "Id": 6,
    "Name": "Sizes",
    "Position": 3
  }
]
```

<h3 id="list-specification-group-by-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-specification-group-by-category-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SpecificationsGroup](#schemaspecificationsgroup)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-specification-value">Specification Value</h1>

## Create Specification Value

> Code samples

```bash
curl https://example.com/api/catalog/pvt/specificationvalue \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "FieldId": 193,
    "IsActive": true,
    "Name": "Metal",
    "Position": 1,
    "Text": "string"
  }'
```

`POST /api/catalog/pvt/specificationvalue`

Creates a new Specification Value for a Category. 
## Request body example

```json
{
    "FieldId": 193,
    "Name": "Metal",
    "IsActive": true,
    "Position": 1
  }
```

## Response body example

```json
{
  "FieldValueId": 360,
  "FieldId": 193,
  "Name": "Metal",
  "Text": null,
  "IsActive": true,
  "Position": 1
}
```

> Body parameter

```json
{
  "FieldId": 193,
  "IsActive": true,
  "Name": "Metal",
  "Position": 1,
  "Text": "string"
}
```

<h3 id="create-specification-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|false|none|
|» FieldId|body|integer|true|Specification ID associated with this specification value.|
|» IsActive|body|boolean|false|Enable (`true`) or disable (`false`) specification value.|
|» Name|body|string|true|Specification Value name.|
|» Position|body|integer|false|The position of the value to be shown on product registration page (`/admin/Site/Produto.aspx`).|
|» Text|body|string \| null|false|**Deprecated.** Specification Value Text.|

> Example responses

> 200 Response

```json
{
  "FieldId": 193,
  "FieldValueId": 360,
  "IsActive": true,
  "Name": "Metal",
  "Position": 1,
  "Text": null
}
```

<h3 id="create-specification-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-specification-value-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldId|integer|false|none|Specification ID associated with this specification value.|
|FieldValueId|integer|false|none|Specification value ID.|
|IsActive|boolean|false|none|Enable (`true`) or disable (`false`) specification value.|
|Name|string|false|none|Specification Value name.|
|Position|integer|false|none|The position of the value to be shown on product registration page (`/admin/Site/Produto.aspx`).|
|Text|string \| null|false|none|**Deprecated.** Specification Value Text.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Specification Value

> Code samples

```bash
curl https://example.com/api/catalog/pvt/specificationvalue/143 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/specificationvalue/{specificationValueId}`

Retrieves general information about a Specification Value. 
## Response body example

```json
{
    "FieldValueId": 143,
    "FieldId": 34,
    "Name": "Cotton",
    "Text": "Cotton fibers",
    "IsActive": true,
    "Position": 100
}
```

<h3 id="get-specification-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|specificationValueId|path|integer|true|Specification Value’s unique numerical identifier.|

> Example responses

> 200 Response

```json
{
  "FieldId": 34,
  "FieldValueId": 143,
  "IsActive": true,
  "Name": "Cotton",
  "Position": 100,
  "Text": "Cotton fibers"
}
```

<h3 id="get-specification-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-specification-value-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldId|integer|false|none|Specification Field ID.|
|FieldValueId|integer(int32)|false|none|Specification Field Value ID.|
|IsActive|boolean|false|none|Defines if the Specification Field Value is active (`true`) or inactive (`false`).|
|Name|string|false|none|Specification Field Value Name.|
|Position|integer(int32)|false|none|Specification Field Value Position.|
|Text|string|false|none|Specification Field Value Description.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Specification Value

> Code samples

```bash
curl https://example.com/api/catalog/pvt/specificationvalue/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "FieldId": 193,
    "IsActive": true,
    "Name": "Metal",
    "Position": 1,
    "Text": "string"
  }'
```

`PUT /api/catalog/pvt/specificationvalue/{specificationValueId}`

Updates a new Specification Value for a Category. 
## Request body example

```json
{
    "FieldId": 193,
    "Name": "Metal",
    "Text": null,
    "IsActive": true,
    "Position": 1
  }
```

## Response body example

```json
{
  "FieldValueId": 360,
  "FieldId": 193,
  "Name": "Metal",
  "Text": null,
  "IsActive": true,
  "Position": 1
}
```

> Body parameter

```json
{
  "FieldId": 193,
  "IsActive": true,
  "Name": "Metal",
  "Position": 1,
  "Text": "string"
}
```

<h3 id="update-specification-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|specificationValueId|path|integer|true| Specification Value’s unique numerical identifier.|
|body|body|object|false|none|
|» FieldId|body|integer|true|Specification ID associated with this specification value.|
|» IsActive|body|boolean|false|Enable (`true`) or disable (`false`) specification value.|
|» Name|body|string|true|Specification Value name.|
|» Position|body|integer|false|The position of the value to be shown on product registration page (`/admin/Site/Produto.aspx`).|
|» Text|body|string \| null|false|**Deprecated.** Specification Value Text.|

> Example responses

> 200 Response

```json
{
  "FieldId": 193,
  "FieldValueId": 360,
  "IsActive": true,
  "Name": "Metal",
  "Position": 1,
  "Text": null
}
```

<h3 id="update-specification-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="update-specification-value-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldId|integer|false|none|Specification ID associated with this specification value.|
|FieldValueId|integer|false|none|Specification value ID.|
|IsActive|boolean|false|none|Enable (`true`) or disable (`false`) specification value.|
|Name|string|false|none|Specification Value name.|
|Position|integer|false|none|The position of the value to be shown on product registration page (`/admin/Site/Produto.aspx`).|
|Text|string \| null|false|none|**Deprecated.** Specification Value Text.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-specification-field-value">Specification Field Value</h1>

## Get Specification Values By Field ID

<a id="opIdSpecificationsValuesByFieldId"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/specification/fieldvalue/34 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/specification/fieldvalue/{fieldId}`

Gets a list of all specification values from a Specification Field by this field's ID. 

## Response body example

```json
[
    {
        "FieldValueId": 52,
        "Value": "0 a 6 meses",
        "IsActive": true,
        "Position": 1
    },
    {
        "FieldValueId": 53,
        "Value": "1 a 2 anos",
        "IsActive": true,
        "Position": 4
    },
    {
        "FieldValueId": 54,
        "Value": "3 a 4 anos",
        "IsActive": true,
        "Position": 3
    },
    {
        "FieldValueId": 55,
        "Value": "5 a 6 anos",
        "IsActive": true,
        "Position": 2
    },
    {
        "FieldValueId": 56,
        "Value": "7 a 8 anos",
        "IsActive": true,
        "Position": 5
    },
    {
        "FieldValueId": 57,
        "Value": "9 a 10 anos",
        "IsActive": true,
        "Position": 6
    },
    {
        "FieldValueId": 58,
        "Value": "Acima de 10 anos",
        "IsActive": true,
        "Position": 7
    }
]
```

<h3 id="get-specification-values-by-field-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|fieldId|path|integer|true|Specification Field ID.|

> Example responses

> 200 Response

```json
[
  {
    "FieldValueId": 52,
    "IsActive": true,
    "Position": 1,
    "Value": "0 a 6 meses"
  },
  {
    "FieldValueId": 53,
    "IsActive": true,
    "Position": 4,
    "Value": "1 a 2 anos"
  },
  {
    "FieldValueId": 54,
    "IsActive": true,
    "Position": 3,
    "Value": "3 a 4 anos"
  },
  {
    "FieldValueId": 55,
    "IsActive": true,
    "Position": 2,
    "Value": "5 a 6 anos"
  },
  {
    "FieldValueId": 56,
    "IsActive": true,
    "Position": 5,
    "Value": "7 a 8 anos"
  },
  {
    "FieldValueId": 57,
    "IsActive": true,
    "Position": 6,
    "Value": "9 a 10 anos"
  },
  {
    "FieldValueId": 58,
    "IsActive": true,
    "Position": 7,
    "Value": "Acima de 10 anos"
  }
]
```

<h3 id="get-specification-values-by-field-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-specification-values-by-field-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GetSpecFieldValue](#schemagetspecfieldvalue)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Specification Field Value

<a id="opIdSpecificationsUpdateFieldValue"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/specification/fieldValue \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "FieldId": 1,
    "FieldValueId": 143,
    "IsActive": true,
    "Name": "Cotton",
    "Position": 100,
    "Text": "Cotton fibers"
  }'
```

`PUT /api/catalog_system/pvt/specification/fieldValue`

Updates a specification field value by the specification field's ID. 
>⚠️ This is a legacy endpoint. We recommend using [Update Specification Field Value](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-specification-value-id) instead.


## Request body example

```json
{
    "FieldId": 1,
    "FieldValueId": 143,
    "Name": "Cotton",
    "Text": "Cotton fibers",
    "IsActive": true,
    "Position": 100
}
```

## Response body example (200 OK)

```json
"Field Value Updated"
```

> Body parameter

```json
{
  "FieldId": 1,
  "FieldValueId": 143,
  "IsActive": true,
  "Name": "Cotton",
  "Position": 100,
  "Text": "Cotton fibers"
}
```

<h3 id="update-specification-field-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[SpecificationsUpdateFieldValueRequest](#schemaspecificationsupdatefieldvaluerequest)|true|none|
|» FieldId|body|integer \| null|true|Specification Field ID.|
|» IsActive|body|boolean|true|Defines if the Specification Field Value is active (`true`) or inactive (`false`).|
|» Name|body|string|true|Specification Field Value Name.|
|» Position|body|integer(int32)|true|Specification Field Position.|
|» Text|body|string \| null|true|Specification Field Value Description.|

> Example responses

> 200 Response

```json
"Field Value Updated"
```

<h3 id="update-specification-field-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create Specification Field Value

<a id="opIdSpecificationsInsertFieldValue"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/specification/fieldValue \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "FieldId": 34,
    "IsActive": true,
    "Name": "Cotton",
    "Position": 100,
    "Text": "Cotton fibers"
  }'
```

`POST /api/catalog_system/pvt/specification/fieldValue`

Creates a specification field value by the specification field's ID. 
>⚠️ This is a legacy endpoint. We recommend using [Create Specification Value](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-post-specification-value) instead.


## Request body example

```json
{
    "FieldId": 34,
    "Name": "Cotton",
    "Text": "Cotton fibers",
    "IsActive": true,
    "Position": 100
}
```

## Response body example

```json
{
    "FieldValueId": 143,
    "FieldId": 34,
    "Name": "Cotton",
    "Text": "Cotton fibers",
    "IsActive": true,
    "Position": 100
}
```

> Body parameter

```json
{
  "FieldId": 34,
  "IsActive": true,
  "Name": "Cotton",
  "Position": 100,
  "Text": "Cotton fibers"
}
```

<h3 id="create-specification-field-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[SpecificationsInsertFieldValueRequest](#schemaspecificationsinsertfieldvaluerequest)|true|none|
|» FieldId|body|integer(int32)|true|Specification Field ID.|
|» IsActive|body|boolean|true|Defines if the Specification Field Value is active (`true`) or inactive (`false`).|
|» Name|body|string|true|Specification Field Value Name.|
|» Position|body|integer(int32)|true|Specification Field Value Position.|
|» Text|body|string|true|Specification Field Value Description.|

> Example responses

> 200 Response

```json
{
  "FieldId": 34,
  "FieldValueId": 143,
  "IsActive": true,
  "Name": "Cotton",
  "Position": 100,
  "Text": "Cotton fibers"
}
```

<h3 id="create-specification-field-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-specification-field-value-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldId|integer|false|none|Specification Field ID.|
|FieldValueId|integer(int32)|false|none|Specification Field Value ID.|
|IsActive|boolean|false|none|Defines if the Specification Field Value is active (`true`) or inactive (`false`).|
|Name|string|false|none|Specification Field Value Name.|
|Position|integer(int32)|false|none|Specification Field Value Position.|
|Text|string|false|none|Specification Field Value Description.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Specification Field Value

<a id="opIdSpecificationsGetFieldValue"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/specification/fieldValue/143 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/specification/fieldValue/{fieldValueId}`

Retrieves details from a specification field's value by this value's ID. 
>⚠️ This is a legacy endpoint. We recommend using [Get Specification Value](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-specification-value-id) instead.

## Response body example

```json
{
    "FieldValueId": 143,
    "FieldId": 34,
    "Name": "TesteInsert",
    "Text": "Value Description",
    "IsActive": true,
    "Position": 100
}
```

<h3 id="get-specification-field-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|fieldValueId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "FieldId": 34,
  "FieldValueId": 143,
  "IsActive": true,
  "Name": "Cotton",
  "Position": 100,
  "Text": "Cotton fibers"
}
```

<h3 id="get-specification-field-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-specification-field-value-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldId|integer|false|none|Specification Field ID.|
|FieldValueId|integer(int32)|false|none|Specification Field Value ID.|
|IsActive|boolean|false|none|Defines if the Specification Field Value is active (`true`) or inactive (`false`).|
|Name|string|false|none|Specification Field Value Name.|
|Position|integer(int32)|false|none|Specification Field Value Position.|
|Text|string|false|none|Specification Field Value Description.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-category-specification">Category Specification</h1>

## Get Specifications By Category ID

<a id="opIdSpecificationsByCategoryId"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/specification/field/listByCategoryId/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/specification/field/listByCategoryId/{categoryId}`

Retrieves all specifications from a category by its ID.

## Response body example

```json
[
    {
        "Name": "Specification A",
        "CategoryId": 1,
        "FieldId": 33,
        "IsActive": true,
        "IsStockKeepingUnit": false
    },
    {
        "Name": "Specification B",
        "CategoryId": 1,
        "FieldId": 34,
        "IsActive": true,
        "IsStockKeepingUnit": false
    },
    {
        "Name": "Specification C",
        "CategoryId": 1,
        "FieldId": 35,
        "IsActive": false,
        "IsStockKeepingUnit": false
    }
]
```

<h3 id="get-specifications-by-category-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|categoryId|path|integer|true|Category ID.|

> Example responses

> 200 Response

```json
[
  {
    "CategoryId": 1,
    "FieldId": 33,
    "IsActive": true,
    "IsStockKeepingUnit": false,
    "Name": "Specification A"
  },
  {
    "CategoryId": 1,
    "FieldId": 34,
    "IsActive": true,
    "IsStockKeepingUnit": false,
    "Name": "Specification B"
  },
  {
    "CategoryId": 1,
    "FieldId": 35,
    "IsActive": false,
    "IsStockKeepingUnit": false,
    "Name": "Specification C"
  }
]
```

<h3 id="get-specifications-by-category-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CategorySpecification](#schemacategoryspecification)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Specifications Tree By Category ID

<a id="opIdSpecificationsTreeByCategoryId"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/specification/field/listTreeByCategoryId/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/specification/field/listTreeByCategoryId/{categoryId}`

Lists all specifications including the current category and the level zero specifications from a category by its ID. 

## Response body example

```json
[
    {
        "Name": "Specification A",
        "CategoryId": 1,
        "FieldId": 33,
        "IsActive": true,
        "IsStockKeepingUnit": false
    },
    {
        "Name": "Specification B",
        "CategoryId": 1,
        "FieldId": 34,
        "IsActive": true,
        "IsStockKeepingUnit": false
    },
    {
        "Name": "Specification C",
        "CategoryId": 1,
        "FieldId": 35,
        "IsActive": false,
        "IsStockKeepingUnit": false
    }
]
```

<h3 id="get-specifications-tree-by-category-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|categoryId|path|integer|true|Category ID.|

> Example responses

> 200 Response

```json
[
  {
    "CategoryId": 1,
    "FieldId": 33,
    "IsActive": true,
    "IsStockKeepingUnit": false,
    "Name": "Specification A"
  },
  {
    "CategoryId": 1,
    "FieldId": 34,
    "IsActive": true,
    "IsStockKeepingUnit": false,
    "Name": "Specification B"
  },
  {
    "CategoryId": 1,
    "FieldId": 35,
    "IsActive": false,
    "IsStockKeepingUnit": false,
    "Name": "Specification C"
  }
]
```

<h3 id="get-specifications-tree-by-category-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CategorySpecification](#schemacategoryspecification)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-specification">Specification</h1>

## Create Specification

> Code samples

```bash
curl https://example.com/api/catalog/pvt/specification \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "CategoryId": 1,
    "DefaultValue": "Cotton",
    "Description": "Composition of the product.",
    "FieldGroupId": 22,
    "FieldTypeId": 1,
    "IsActive": true,
    "IsFilter": false,
    "IsOnProductDetails": true,
    "IsRequired": false,
    "IsSideMenuLinkActive": false,
    "IsStockKeepingUnit": false,
    "IsTopMenuLinkActive": false,
    "IsWizard": true,
    "Name": "Material",
    "Position": 1
  }'
```

`POST /api/catalog/pvt/specification`

Creates a new Product or SKU Specification. 
## Request body example

```json
{
    "FieldTypeId": 1,
    "CategoryId": 4,
    "FieldGroupId": 20,
    "Name": "Material",
    "Description": "Composition of the product.",
    "Position": 1,
    "IsFilter": true,
    "IsRequired": true,
    "IsOnProductDetails": false,
    "IsStockKeepingUnit": false,
    "IsActive": true,
    "IsTopMenuLinkActive": false,
    "IsSideMenuLinkActive": true,
    "DefaultValue": "Cotton"
}
```

## Response body example

```json
{
    "Id": 88,
    "FieldTypeId": 1,
    "CategoryId": 4,
    "FieldGroupId": 20,
    "Name": "Material",
    "Description": "Composition of the product.",
    "Position": 1,
    "IsFilter": true,
    "IsRequired": true,
    "IsOnProductDetails": false,
    "IsStockKeepingUnit": false,
    "IsWizard": false,
    "IsActive": true,
    "IsTopMenuLinkActive": false,
    "IsSideMenuLinkActive": true,
    "DefaultValue": "Cotton"
}
```


> Body parameter

```json
{
  "CategoryId": 1,
  "DefaultValue": "Cotton",
  "Description": "Composition of the product.",
  "FieldGroupId": 22,
  "FieldTypeId": 1,
  "IsActive": true,
  "IsFilter": false,
  "IsOnProductDetails": true,
  "IsRequired": false,
  "IsSideMenuLinkActive": false,
  "IsStockKeepingUnit": false,
  "IsTopMenuLinkActive": false,
  "IsWizard": true,
  "Name": "Material",
  "Position": 1
}
```

<h3 id="create-specification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|false|none|
|» CategoryId|body|integer|false|Category ID associated with this specification.|
|» DefaultValue|body|string|false|Specification default value.|
|» Description|body|string \| null|false|**Deprecated.**|
|» FieldGroupId|body|integer|true|ID of the group of specifications that contains the new specification.|
|» FieldTypeId|body|integer|true|Field Type ID can be `1 - Text`, `2 - Multi-Line Text`, `4 - Number`, `5 - Combo`, `6 - Radio`, `7 - Checkbox`, `8 - Indexed Text`, `9 - Indexed Multi-Line Text`.|
|» IsActive|body|boolean|false|Enable (`true`) or disable (`false`) specification.|
|» IsFilter|body|boolean|false|Store Framework - Deprecated.<br>Legacy CMS Portal - To allow the specification to be used as a facet (filter) on the search navigation bar.<br>|
|» IsOnProductDetails|body|boolean|false|Store Framework - Deprecated.<br>Legacy CMS Portal -If specification is visible on the product page.<br>|
|» IsRequired|body|boolean|false|Makes the specification mandatory (`true`) or optional (`false`).|
|» IsSideMenuLinkActive|body|boolean|false|Store Framework - Deprecated.<br>Legacy CMS Portal - To make the specification field clickable in the search navigation bar.<br>|
|» IsStockKeepingUnit|body|boolean|false|If `true`, it will be added as a SKU specification. If `false`, it will be added as a product specification field.|
|» IsTopMenuLinkActive|body|boolean|false|Store Framework - Deprecated.<br>Legacy CMS Portal - To make the specification visible in the store's upper menu.<br>|
|» IsWizard|body|boolean \| null|false|**Deprecated.**|
|» Name|body|string|true|Specification name.|
|» Position|body|integer|false|Store Framework - Deprecated.<br>Legacy CMS Portal - This position number is used in ordering the specifications both in the navigation menu and in the specification listing on the product page.<br>|

> Example responses

> 200 Response

```json
{
  "CategoryId": 4,
  "DefaultValue": "Cotton",
  "Description": "Composition of the product.",
  "FieldGroupId": 20,
  "FieldTypeId": 1,
  "Id": 88,
  "IsActive": true,
  "IsFilter": true,
  "IsOnProductDetails": false,
  "IsRequired": true,
  "IsSideMenuLinkActive": true,
  "IsStockKeepingUnit": false,
  "IsTopMenuLinkActive": false,
  "IsWizard": false,
  "Name": "Material",
  "Position": 1
}
```

<h3 id="create-specification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-specification-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryId|integer|false|none|Category ID associated with this specification.|
|DefaultValue|string|false|none|Specification default value.|
|Description|string \| null|false|none|**Deprecated.**|
|FieldGroupId|integer|false|none|ID of the group of specifications that contains the new specification.|
|FieldTypeId|integer|false|none|Field Type ID can be `1 - Text`, `2 - Multi-Line Text`, `4 - Number`, `5 - Combo`, `6 - Radio`, `7 - Checkbox`, `8 - Indexed Text`, `9 - Indexed Multi-Line Text`.|
|Id|integer|false|none|Specification ID.|
|IsActive|boolean|false|none|Enable (`true`) or disable (`false`) specification.|
|IsFilter|boolean|false|none|Store Framework - Deprecated.<br>Legacy CMS Portal - To allow the specification to be used as a facet (filter) on the search navigation bar.<br>|
|IsOnProductDetails|boolean|false|none|Store Framework - Deprecated.<br>Legacy CMS Portal -If specification is visible on the product page.<br>|
|IsRequired|boolean|false|none|Makes the specification mandatory (`true`) or optional (`false`).|
|IsSideMenuLinkActive|boolean|false|none|Store Framework - Deprecated.<br>Legacy CMS Portal - To make the specification field clickable in the search navigation bar.<br>|
|IsStockKeepingUnit|boolean|false|none|If `true`, it will be added as a SKU specification. If `false`, it will be added as a product specification field.|
|IsTopMenuLinkActive|boolean|false|none|Store Framework - Deprecated.<br>Legacy CMS Portal - To make the specification visible in the store's upper menu.<br>|
|IsWizard|boolean \| null|false|none|**Deprecated.**|
|Name|string|false|none|Specification name.|
|Position|integer|false|none|Store Framework - Deprecated.<br>Legacy CMS Portal - This position number is used in ordering the specifications both in the navigation menu and in the specification listing on the product page.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Specification

> Code samples

```bash
curl https://example.com/api/catalog/pvt/specification/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/specification/{specificationId}`

Retrieves information of a Product or SKU Specification. 
## Response body example

```json
{
    "Id": 88,
    "FieldTypeId": 1,
    "CategoryId": 4,
    "FieldGroupId": 20,
    "Name": "Material",
    "Description": "Composition of the product.",
    "Position": 1,
    "IsFilter": true,
    "IsRequired": true,
    "IsOnProductDetails": false,
    "IsStockKeepingUnit": false,
    "IsWizard": false,
    "IsActive": true,
    "IsTopMenuLinkActive": false,
    "IsSideMenuLinkActive": true,
    "DefaultValue": "Cotton"
}
```


<h3 id="get-specification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|specificationId|path|integer|true|Specification’s unique numerical identifier.|

> Example responses

> 200 Response

```json
{
  "CategoryId": 10,
  "DefaultValue": null,
  "Description": "Peso",
  "FieldGroupId": 11,
  "FieldTypeId": 6,
  "Id": 32,
  "IsActive": true,
  "IsFilter": false,
  "IsOnProductDetails": false,
  "IsRequired": true,
  "IsSideMenuLinkActive": false,
  "IsStockKeepingUnit": true,
  "IsTopMenuLinkActive": false,
  "IsWizard": false,
  "Name": "Peso",
  "Position": 1
}
```

<h3 id="get-specification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-specification-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryId|integer|true|none|Specification Category ID.|
|DefaultValue|string \| null|true|none|Specification Default Value.|
|Description|string|true|none|Specification Description.|
|FieldGroupId|integer|true|none|Numerical ID of the Group of Specifications that contains the new Specification.|
|FieldTypeId|integer|true|none|Field Type can be `1 - Text`, `2 - Multi-Line Text`, `4 - Number`, `5 - Combo`, `6 - Radio`, `7 - Checkbox`, `8 - Indexed Text`, `9 - Indexed Multi-Line Text`.|
|Id|integer|true|none|Created Specification’s ID.|
|IsActive|boolean|true|none|Defines if the Specification is active or not.|
|IsFilter|boolean|true|none|Defines if the Specification can be used as a Filter.|
|IsOnProductDetails|boolean|true|none|Defines if the Specification will be shown on the Product screen in the specification area.|
|IsRequired|boolean|true|none|Defines if the Specification is required or not.|
|IsSideMenuLinkActive|boolean|true|none|Defines if the Specification is shown in the side menu.|
|IsStockKeepingUnit|boolean|true|none|Defines if the Specification is applied to a specific SKU.|
|IsTopMenuLinkActive|boolean|true|none|Defines if the Specification is shown in the main menu of the site.|
|IsWizard|boolean|true|none|**Deprecated.** Deprecated|
|Name|string|true|none|Specification Name.|
|Position|integer|true|none|The current Specification's position in comparison to the other Specifications.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Specification

> Code samples

```bash
curl https://example.com/api/catalog/pvt/specification/88 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "CategoryId": 0,
    "DefaultValue": "Leather",
    "Description": "Composition of the product.",
    "FieldGroupId": 0,
    "FieldTypeId": 1,
    "IsActive": false,
    "IsFilter": false,
    "IsOnProductDetails": false,
    "IsRequired": false,
    "IsSideMenuLinkActive": false,
    "IsStockKeepingUnit": false,
    "IsTopMenuLinkActive": false,
    "IsWizard": false,
    "Name": "Material",
    "Position": 1
  }'
```

`PUT /api/catalog/pvt/specification/{specificationId}`

Updates a Product or SKU Specification. 
## Request body example

```json
{
    "FieldTypeId": 1,
    "CategoryId": 4,
    "FieldGroupId": 20,
    "Name": "Material",
    "Description": "Composition of the product.",
    "Position": 1,
    "IsFilter": true,
    "IsRequired": true,
    "IsOnProductDetails": false,
    "IsStockKeepingUnit": false,
    "IsActive": true,
    "IsTopMenuLinkActive": false,
    "IsSideMenuLinkActive": true,
    "DefaultValue": "Leather"
}
```

## Response body example

```json
{
    "Id": 88,
    "FieldTypeId": 1,
    "CategoryId": 4,
    "FieldGroupId": 20,
    "Name": "Material",
    "Description": "Composition of the product.",
    "Position": 1,
    "IsFilter": true,
    "IsRequired": true,
    "IsOnProductDetails": false,
    "IsStockKeepingUnit": false,
    "IsWizard": false,
    "IsActive": true,
    "IsTopMenuLinkActive": false,
    "IsSideMenuLinkActive": true,
    "DefaultValue": "Leather"
}
```


> Body parameter

```json
{
  "CategoryId": 0,
  "DefaultValue": "Leather",
  "Description": "Composition of the product.",
  "FieldGroupId": 0,
  "FieldTypeId": 1,
  "IsActive": false,
  "IsFilter": false,
  "IsOnProductDetails": false,
  "IsRequired": false,
  "IsSideMenuLinkActive": false,
  "IsStockKeepingUnit": false,
  "IsTopMenuLinkActive": false,
  "IsWizard": false,
  "Name": "Material",
  "Position": 1
}
```

<h3 id="update-specification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|specificationId|path|integer|true|Specification’s unique numerical identifier.|
|body|body|object|false|none|
|» CategoryId|body|integer|true|Specification Category ID.|
|» DefaultValue|body|string|true|Specification Default Value.|
|» Description|body|string|true|Specification Description.|
|» FieldGroupId|body|integer|true|Numerical ID of the Group of Specifications that contains the new Specification.|
|» FieldTypeId|body|integer|true|Field Type can be `1 - Text`, `2 - Multi-Line Text`, `4 - Number`, `5 - Combo`, `6 - Radio`, `7 - Checkbox`, `8 - Indexed Text`, `9 - Indexed Multi-Line Text`.|
|» IsActive|body|boolean|true|Defines if the Specification is active or not.|
|» IsFilter|body|boolean|true|Defines if the Specification can be used as a Filter.|
|» IsOnProductDetails|body|boolean|true|Defines if the Specification will be  shown on the Product screen in the specification area.|
|» IsRequired|body|boolean|true|Defines if the Specification is required or not.|
|» IsSideMenuLinkActive|body|boolean|true|Defines if the Specification is shown in the side menu.|
|» IsStockKeepingUnit|body|boolean|true|Defines if the Specification is applied to a specific SKU.|
|» IsTopMenuLinkActive|body|boolean|true|Defines if the Specification is shown in the main menu of the site.|
|» IsWizard|body|boolean|true|**Deprecated.** Deprecated|
|» Name|body|string|true|Specification Name.|
|» Position|body|integer|true|The current Specification's position in comparison to the other Specifications.|

> Example responses

> 200 Response

```json
{
  "CategoryId": 4,
  "DefaultValue": "Leather",
  "Description": "Composition of the product.",
  "FieldGroupId": 20,
  "FieldTypeId": 1,
  "Id": 88,
  "IsActive": true,
  "IsFilter": true,
  "IsOnProductDetails": false,
  "IsRequired": true,
  "IsSideMenuLinkActive": true,
  "IsStockKeepingUnit": false,
  "IsTopMenuLinkActive": false,
  "IsWizard": false,
  "Name": "Material",
  "Position": 1
}
```

<h3 id="update-specification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="update-specification-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryId|integer|false|none|Category ID associated with this specification.|
|DefaultValue|string|false|none|Specification default value.|
|Description|string \| null|false|none|**Deprecated.**|
|FieldGroupId|integer|false|none|ID of the group of specifications that contains the new specification.|
|FieldTypeId|integer|false|none|Field Type ID can be `1 - Text`, `2 - Multi-Line Text`, `4 - Number`, `5 - Combo`, `6 - Radio`, `7 - Checkbox`, `8 - Indexed Text`, `9 - Indexed Multi-Line Text`.|
|Id|integer|false|none|Specification ID.|
|IsActive|boolean|false|none|Enable (`true`) or disable (`false`) specification.|
|IsFilter|boolean|false|none|Store Framework - Deprecated.<br>Legacy CMS Portal - To allow the specification to be used as a facet (filter) on the search navigation bar.<br>|
|IsOnProductDetails|boolean|false|none|Store Framework - Deprecated.<br>Legacy CMS Portal -If specification is visible on the product page.<br>|
|IsRequired|boolean|false|none|Makes the specification mandatory (`true`) or optional (`false`).|
|IsSideMenuLinkActive|boolean|false|none|Store Framework - Deprecated.<br>Legacy CMS Portal - To make the specification field clickable in the search navigation bar.<br>|
|IsStockKeepingUnit|boolean|false|none|If `true`, it will be added as a SKU specification. If `false`, it will be added as a product specification field.|
|IsTopMenuLinkActive|boolean|false|none|Store Framework - Deprecated.<br>Legacy CMS Portal - To make the specification visible in the store's upper menu.<br>|
|IsWizard|boolean \| null|false|none|**Deprecated.**|
|Name|string|false|none|Specification name.|
|Position|integer|false|none|Store Framework - Deprecated.<br>Legacy CMS Portal - This position number is used in ordering the specifications both in the navigation menu and in the specification listing on the product page.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-legacy-collection">Legacy Collection</h1>

## Create Collection

> Code samples

```bash
curl https://example.com/api/catalog/pvt/collection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "DateFrom": "2017-09-27T10:47:00",
    "DateTo": "2017-09-27T10:47:00",
    "Highlight": false,
    "Name": "Test",
    "Searchable": true
  }'
```

`POST /api/catalog/pvt/collection`

 >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).

Creates a new Collection.
## Request body example

```json
{
    "Name": "Winter",
    "Searchable": false,
    "Highlight": false,
    "DateFrom": "2021-09-27T10:47:00",
    "DateTo": "2027-09-27T10:47:00"
}
```

## Response body example

```json
{
    "Id": 159,
    "Name": "Winter",
    "Description": null,
    "Searchable": false,
    "Highlight": false,
    "DateFrom": "2021-09-27T10:47:00",
    "DateTo": "2027-09-27T10:47:00",
    "TotalProducts": 0,
    "Type": "Manual"
}
```

> Body parameter

```json
{
  "DateFrom": "2017-09-27T10:47:00",
  "DateTo": "2017-09-27T10:47:00",
  "Highlight": false,
  "Name": "Test",
  "Searchable": true
}
```

<h3 id="create-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|false|none|
|» DateFrom|body|string|true|Initial value date for the Collection.|
|» DateTo|body|string|true|Final value date for the Collection.|
|» Highlight|body|boolean|true|Defines if the Collection is highlighted or not.|
|» Name|body|string|true|Collection Name.|
|» Searchable|body|boolean|true|Defines if the Collection is searchable or not.|

> Example responses

> 200 Response

```json
{
  "DateFrom": "2017-09-27T10:47:00",
  "DateTo": "2017-09-27T10:47:00",
  "Description": "Winter outfits.",
  "Highlight": false,
  "Id": 150,
  "Name": "Test",
  "Searchable": true,
  "TotalProducts": 150,
  "Type": "Manual"
}
```

<h3 id="create-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DateFrom|string|false|none|Initial value date for the Collection.|
|DateTo|string|false|none|Final value date for the Collection.|
|Description|string \| null|false|none|Collection description.|
|Highlight|boolean|false|none|Defines if the Collection is highlighted or not.|
|Id|integer|false|none|Collection ID.|
|Name|string|false|none|Collection Name.|
|Searchable|boolean|false|none|Defines if the Collection is searchable or not.|
|TotalProducts|integer|false|none|Total quantity of products in the collection.|
|Type|string|false|none|Type of collection.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Collection

> Code samples

```bash
curl https://example.com/api/catalog/pvt/collection/151 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/collection/{collectionId}`

 >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).

Retrieves general information of a Collection.

## Response body example

```json
{
    "Id": 159,
    "Name": "Winter",
    "Description": null,
    "Searchable": false,
    "Highlight": false,
    "DateFrom": "2021-09-27T10:47:00",
    "DateTo": "2027-09-27T10:47:00",
    "TotalProducts": 0,
    "Type": "Manual"
}
```

<h3 id="get-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|collectionId|path|integer|true|Collection’s unique numerical identifier.|

> Example responses

> 200 Response

```json
{
  "DateFrom": "2017-09-27T10:47:00",
  "DateTo": "2017-09-27T10:47:00",
  "Description": "Winter outfits.",
  "Highlight": false,
  "Id": 150,
  "Name": "Test",
  "Searchable": true,
  "TotalProducts": 150,
  "Type": "Manual"
}
```

<h3 id="get-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DateFrom|string|false|none|Initial value date for the Collection.|
|DateTo|string|false|none|Final value date for the Collection.|
|Description|string \| null|false|none|Collection description.|
|Highlight|boolean|false|none|Defines if the Collection is highlighted or not.|
|Id|integer|false|none|Collection ID.|
|Name|string|false|none|Collection Name.|
|Searchable|boolean|false|none|Defines if the Collection is searchable or not.|
|TotalProducts|integer|false|none|Total quantity of products in the collection.|
|Type|string|false|none|Type of collection.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Collection

> Code samples

```bash
curl https://example.com/api/catalog/pvt/collection/151 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "DateFrom": "2017-09-27T10:47:00",
    "DateTo": "2017-09-27T10:47:00",
    "Highlight": false,
    "Name": "Test",
    "Searchable": true
  }'
```

`PUT /api/catalog/pvt/collection/{collectionId}`

 >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).

Updates a previously created Collection.
## Request body example

```json
{
    "Name": "Winter",
    "Searchable": false,
    "Highlight": false,
    "DateFrom": "2021-09-27T10:47:00",
    "DateTo": "2027-09-27T10:47:00"
}
```

## Response body example

```json
{
    "Id": 159,
    "Name": "Winter",
    "Description": null,
    "Searchable": false,
    "Highlight": false,
    "DateFrom": "2021-09-27T10:47:00",
    "DateTo": "2027-09-27T10:47:00",
    "TotalProducts": 0,
    "Type": "Manual"
}
```

> Body parameter

```json
{
  "DateFrom": "2017-09-27T10:47:00",
  "DateTo": "2017-09-27T10:47:00",
  "Highlight": false,
  "Name": "Test",
  "Searchable": true
}
```

<h3 id="update-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|collectionId|path|integer|true|Collection’s unique numerical identifier.|
|body|body|object|false|none|
|» DateFrom|body|string|true|Initial value date for the Collection.|
|» DateTo|body|string|true|Final value date for the Collection.|
|» Highlight|body|boolean|true|Defines if the Collection is highlighted or not|
|» Name|body|string|true|Collection Name.|
|» Searchable|body|boolean|true|Defines if the Collection is searchable or not.|

> Example responses

> 200 Response

```json
{
  "DateFrom": "2017-09-27T10:47:00",
  "DateTo": "2017-09-27T10:47:00",
  "Description": "Winter outfits.",
  "Highlight": false,
  "Id": 150,
  "Name": "Test",
  "Searchable": true,
  "TotalProducts": 150,
  "Type": "Manual"
}
```

<h3 id="update-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="update-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DateFrom|string|false|none|Initial value date for the Collection.|
|DateTo|string|false|none|Final value date for the Collection.|
|Description|string \| null|false|none|Collection description.|
|Highlight|boolean|false|none|Defines if the Collection is highlighted or not.|
|Id|integer|false|none|Collection ID.|
|Name|string|false|none|Collection Name.|
|Searchable|boolean|false|none|Defines if the Collection is searchable or not.|
|TotalProducts|integer|false|none|Total quantity of products in the collection.|
|Type|string|false|none|Type of collection.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete Collection

> Code samples

```bash
curl https://example.com/api/catalog/pvt/collection/151 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/collection/{collectionId}`

 >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).

Deletes a previously existing Collection.

<h3 id="delete-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|collectionId|path|integer|true|Collection’s unique numerical identifier.|

<h3 id="delete-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-legacy-subcollection">Legacy Subcollection</h1>

## Reposition SKU on the Subcollection

> Code samples

```bash
curl https://example.com/api/catalog/pvt/collection/151/position \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "position": 1,
    "skuId": 1,
    "subCollectionId": 17
  }'
```

`POST /api/catalog/pvt/collection/{collectionId}/position`

 >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).

Edits the position of an SKU that already exists in the Subcollection,  which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.
## Request body example

```json
{
     "skuId": 1,
     "position": 1,
     "subCollectionId": 17
}
```

> Body parameter

```json
{
  "position": 1,
  "skuId": 1,
  "subCollectionId": 17
}
```

<h3 id="reposition-sku-on-the-subcollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|collectionId|path|integer|true|Collection’s unique numerical identifier.|
|body|body|object|false|none|
|» position|body|integer|true|SKU position.|
|» skuId|body|integer|true|SKU ID.|
|» subCollectionId|body|integer|true|Subcollection ID.|

<h3 id="reposition-sku-on-the-subcollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Subcollection by Collection ID

> Code samples

```bash
curl https://example.com/api/catalog/pvt/collection/151/subcollection \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/collection/{collectionId}/subcollection`

 >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).

Retrieves all Subcollections given a Collection ID. A Subcollection is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.
## Response body example

```json
[
    {
        "Id": 12,
        "CollectionId": 149,
        "Name": "Subcollection",
        "Type": "Inclusive",
        "PreSale": false,
        "Release": true
    },
    {
        "Id": 13,
        "CollectionId": 149,
        "Name": "Test",
        "Type": "Exclusive",
        "PreSale": true,
        "Release": false
    },
    {
        "Id": 14,
        "CollectionId": 149,
        "Name": "asdfghj",
        "Type": "Inclusive",
        "PreSale": false,
        "Release": false
    }
]
```

<h3 id="get-subcollection-by-collection-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|collectionId|path|integer|true|Collection’s unique numerical identifier.|

> Example responses

> 200 Response

```json
[
  {
    "CollectionId": 151,
    "Id": 17,
    "Name": "group 1",
    "PreSale": false,
    "Release": false,
    "Type": "Inclusive"
  },
  {
    "CollectionId": 151,
    "Id": 18,
    "Name": "group 2",
    "PreSale": false,
    "Release": false,
    "Type": "Inclusive"
  }
]
```

<h3 id="get-subcollection-by-collection-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-subcollection-by-collection-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» CollectionId|integer|false|none|Collection ID.|
|» Id|integer|false|none|Subcollection ID.|
|» Name|string|false|none|Subcollection Name.|
|» PreSale|boolean|false|none|Defines if the collection is on PreSale.|
|» Release|boolean|false|none|Defines if the collection is a new released one.|
|» Type|string|false|none|Either `“Exclusive”` (all the products contained in it will not be used) or `“Inclusive”` (all the products contained in it will be used).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create Subcollection

> Code samples

```bash
curl https://example.com/api/catalog/pvt/subcollection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "CollectionId": 17,
    "Name": "group 1",
    "PreSale": false,
    "Release": false,
    "Type": "Inclusive"
  }'
```

`POST /api/catalog/pvt/subcollection`

 >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).

Creates a new Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection. A Subcollection can be either “Exclusive” (all the products contained in it will not be used) or “Inclusive” (all the products contained in it will be used).
## Request body example

```json
{
    "CollectionId": 149,
    "Name": "Test",
    "Type": "Exclusive",
    "PreSale": true,
    "Release": false
}
```
## Response body example

```json
{
    "Id": 13,
    "CollectionId": 149,
    "Name": "Test",
    "Type": "Exclusive",
    "PreSale": true,
    "Release": false
}
```

> Body parameter

```json
{
  "CollectionId": 17,
  "Name": "group 1",
  "PreSale": false,
  "Release": false,
  "Type": "Inclusive"
}
```

<h3 id="create-subcollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|false|none|
|» CollectionId|body|integer|true|SubCollection ID.|
|» Name|body|string|true|SubCollection Name.|
|» PreSale|body|boolean|true|Defines PreSale date.|
|» Release|body|boolean|true|Defines Release date.|
|» Type|body|string|true|Either `“Exclusive”` (all the products contained in it will not be used) or `“Inclusive”` (all the products contained in it will be used).|

> Example responses

> 200 Response

```json
{
  "CollectionId": 151,
  "Id": 17,
  "Name": "group 1",
  "PreSale": false,
  "Release": false,
  "Type": "Inclusive"
}
```

<h3 id="create-subcollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-subcollection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CollectionId|integer|false|none|Collection ID.|
|Id|integer|false|none|Subcollection ID.|
|Name|string|false|none|Subcollection Name.|
|PreSale|boolean|false|none|Defines if the collection is on PreSale.|
|Release|boolean|false|none|Defines if the collection is a new released one.|
|Type|string|false|none|Either `“Exclusive”` (all the products contained in it will not be used) or `“Inclusive”` (all the products contained in it will be used).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Subcollection

> Code samples

```bash
curl https://example.com/api/catalog/pvt/subcollection/17 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/subcollection/{subCollectionId}`

 >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).

Retrieves information about a Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.
## Response body example

```json
{
    "Id": 13,
    "CollectionId": 149,
    "Name": "Test",
    "Type": "Exclusive",
    "PreSale": true,
    "Release": false
}
```

<h3 id="get-subcollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|subCollectionId|path|integer|true|Subcollection’s unique numerical identifier, which can be obtained by placing a request to [Get Subcollection by Collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid).|

> Example responses

> 200 Response

```json
{
  "CollectionId": 151,
  "Id": 17,
  "Name": "group 1",
  "PreSale": false,
  "Release": false,
  "Type": "Inclusive"
}
```

<h3 id="get-subcollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-subcollection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CollectionId|integer|false|none|Collection ID.|
|Id|integer|false|none|Subcollection ID.|
|Name|string|false|none|Subcollection Name.|
|PreSale|boolean|false|none|Defines if the collection is on PreSale.|
|Release|boolean|false|none|Defines if the collection is a new released one.|
|Type|string|false|none|Either `“Exclusive”` (all the products contained in it will not be used) or `“Inclusive”` (all the products contained in it will be used).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Subcollection

> Code samples

```bash
curl https://example.com/api/catalog/pvt/subcollection/17 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "CollectionId": 17,
    "Name": "group 1",
    "PreSale": false,
    "Release": false,
    "Type": "Inclusive"
  }'
```

`PUT /api/catalog/pvt/subcollection/{subCollectionId}`

 >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).

Updates a previously created Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.

## Request or response body example

```json
{
    "CollectionId": 149,
    "Name": "Test",
    "Type": "Exclusive",
    "PreSale": true,
    "Release": false
}
```

> Body parameter

```json
{
  "CollectionId": 17,
  "Name": "group 1",
  "PreSale": false,
  "Release": false,
  "Type": "Inclusive"
}
```

<h3 id="update-subcollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|subCollectionId|path|integer|true|Subcollection’s unique numerical identifier, which can be obtained by placing a request to [Get Subcollection by Collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid).|
|body|body|object|false|none|
|» CollectionId|body|integer|true|Collection ID.|
|» Name|body|string|true|Subcollection Name.|
|» PreSale|body|boolean|true|Defines PreSale date.|
|» Release|body|boolean|true|Defines Release date.|
|» Type|body|string|true|Either `“Exclusive”` (all the products contained in it will not be used) or `“Inclusive”` (all the products contained in it will be used).|

> Example responses

> 200 Response

```json
{
  "CollectionId": 151,
  "Id": 17,
  "Name": "group 1",
  "PreSale": false,
  "Release": false,
  "Type": "Inclusive"
}
```

<h3 id="update-subcollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="update-subcollection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CollectionId|integer|false|none|Collection ID.|
|Id|integer|false|none|Subcollection ID.|
|Name|string|false|none|Subcollection Name.|
|PreSale|boolean|false|none|Defines if the collection is on PreSale.|
|Release|boolean|false|none|Defines if the collection is a new released one.|
|Type|string|false|none|Either `“Exclusive”` (all the products contained in it will not be used) or `“Inclusive”` (all the products contained in it will be used).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete Subcollection

> Code samples

```bash
curl https://example.com/api/catalog/pvt/subcollection/1 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/subcollection/{subCollectionId}`

 >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).

Deletes a previously created Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.

<h3 id="delete-subcollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|subCollectionId|path|integer|true|Subcollection’s unique numerical identifier, which can be obtained by placing a request to [Get Subcollection by Collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid).|

<h3 id="delete-subcollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Associate Brand to Subcollection

> Code samples

```bash
curl https://example.com/api/catalog/pvt/subcollection/1/brand \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "BrandId": 2000000
  }'
```

`POST /api/catalog/pvt/subcollection/{subCollectionId}/brand`

 >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).

Associates a single Brand to a Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.
## Request body example

```json
{
    "BrandId": 2000000
}
```

## Response body example

```json
{
    "SubCollectionId": 17,
    "BrandId": 2000000
}
```

> Body parameter

```json
{
  "BrandId": 2000000
}
```

<h3 id="associate-brand-to-subcollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|subCollectionId|path|integer|true|Subcollection’s unique numerical identifier, which can be obtained by placing a request to [Get Subcollection by Collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid).|
|body|body|object|false|none|
|» BrandId|body|integer|true|Unique identifier of a Brand.|

> Example responses

> 200 Response

```json
{
  "BrandId": 2000000,
  "SubCollectionId": 17
}
```

<h3 id="associate-brand-to-subcollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="associate-brand-to-subcollection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BrandId|integer|false|none|Unique identifier of the Brand.|
|SubCollectionId|integer|false|none|Subcollection’s unique numerical identifier.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete Brand from Subcollection

> Code samples

```bash
curl https://example.com/api/catalog/pvt/subcollection/1/brand/1 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/subcollection/{subCollectionId}/brand/{brandId}`

 >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).

Deletes a Brand from a Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.

<h3 id="delete-brand-from-subcollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|subCollectionId|path|integer|true|Subcollection’s unique numerical identifier, which can be obtained by placing a request to [Get Subcollection by Collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid).|
|brandId|path|integer|true|Brand’s unique numerical identifier.|

<h3 id="delete-brand-from-subcollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete Category from Subcollection

> Code samples

```bash
curl https://example.com/api/catalog/pvt/subcollection/1/brand/1 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/subcollection/{subCollectionId}/brand/{categoryId}`

 >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).

Deletes a Category from a Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.

<h3 id="delete-category-from-subcollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|subCollectionId|path|integer|true|Subcollection’s unique numerical identifier, which can be obtained by placing a request to [Get Subcollection by Collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid).|
|categoryId|path|integer|true|Category’s unique numerical identifier.|

<h3 id="delete-category-from-subcollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Associate Category to Subcollection

> Code samples

```bash
curl https://example.com/api/catalog/pvt/subcollection/1/category \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "CategoryId": 0
  }'
```

`POST /api/catalog/pvt/subcollection/{subCollectionId}/category`

 >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).

Associates a single Category to a Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.
## Request body example

```json
{
    "CategoryId": 1
}
```

## Response body example

```json
{
    "SubCollectionId": 17,
    "CategoryId": 1
}
```

> Body parameter

```json
{
  "CategoryId": 0
}
```

<h3 id="associate-category-to-subcollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|subCollectionId|path|integer|true|Subcollection’s unique numerical identifier, which can be obtained by placing a request to [Get Subcollection by Collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid).|
|body|body|object|false|none|
|» CategoryId|body|integer|true|Unique identifier of a Category.|

> Example responses

> 200 Response

```json
{
  "CategoryId": 1,
  "SubCollectionId": 17
}
```

<h3 id="associate-category-to-subcollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="associate-category-to-subcollection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryId|integer|false|none|Unique identifier of the Category.|
|SubCollectionId|integer|false|none|Subcollection’s unique numerical identifier.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Add SKU to Subcollection

> Code samples

```bash
curl https://example.com/api/catalog/pvt/subcollection/1/stockkeepingunit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "SkuId": 1
  }'
```

`POST /api/catalog/pvt/subcollection/{subCollectionId}/stockkeepingunit`

 >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).

Associates a single SKU to a Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.
## Request body example

```json
{
    "SkuId": 1
}
```

## Response body example

```json
{
    "SubCollectionId": 17,
    "SkuId": 1
}
```

> Body parameter

```json
{
  "SkuId": 1
}
```

<h3 id="add-sku-to-subcollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|subCollectionId|path|integer|true|Subcollection’s unique numerical identifier, which can be obtained by placing a request to [Get Subcollection by Collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid).|
|body|body|object|false|none|
|» SkuId|body|integer|true|Unique identifier of an SKU.|

> Example responses

> 200 Response

```json
{
  "SkuId": 1,
  "SubCollectionId": 17
}
```

<h3 id="add-sku-to-subcollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="add-sku-to-subcollection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkuId|integer|false|none|Unique identifier of the SKU.|
|SubCollectionId|integer|false|none|Subcollection’s unique numerical identifier.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete SKU from Subcollection

> Code samples

```bash
curl https://example.com/api/catalog/pvt/subcollection/1/stockkeepingunit/1 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/subcollection/{subCollectionId}/stockkeepingunit/{skuId}`

 >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).

Deletes an SKU from a Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.

<h3 id="delete-sku-from-subcollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|subCollectionId|path|integer|true|Subcollection’s unique numerical identifier, which can be obtained by placing a request to [Get Subcollection by Collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid).|
|skuId|path|integer|true|SKU’s unique numerical identifier.|

<h3 id="delete-sku-from-subcollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-collection-beta">Collection Beta</h1>

## Create Collection

<a id="opIdPOST-CreateCollection"></a>

> Code samples

```bash
curl https://example.com/api/catalog/pvt/collection/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "DateFrom": "2020-11-26T15:23:00",
    "DateTo": "2069-11-26T15:23:00",
    "Description": "HomeHalloween",
    "Highlight": false,
    "Name": "Halloween costumes",
    "Searchable": false
  }'
```

`POST /api/catalog/pvt/collection/`

Creates a new collection.

> Body parameter

```json
{
  "DateFrom": "2020-11-26T15:23:00",
  "DateTo": "2069-11-26T15:23:00",
  "Description": "HomeHalloween",
  "Highlight": false,
  "Name": "Halloween costumes",
  "Searchable": false
}
```

<h3 id="create-collection-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|true|none|
|» DateFrom|body|string|true|Collection start date and time. If a future date and time are set, the collection will have a scheduled status.|
|» DateTo|body|string|true|Collection end date and time.|
|» Description|body|string|true|Collection's description for internal use, with the collection's details. It will not be used for search engines.|
|» Highlight|body|boolean|true|Option if you want the collection to highlight specific products using a tag.|
|» Name|body|string|true|Collection's Name.|
|» Searchable|body|boolean|true|Option making the collection searchable in the store.|

<h3 id="create-collection-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get All Inactive Collections

<a id="opIdGET-AllInactiveCollections"></a>

> Code samples

```bash
curl https://example.com/api/catalog/pvt/collection/inactive \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/collection/inactive`

Retrieves a list of Collection IDs of the inactive Collections.

<h3 id="get-all-inactive-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

<h3 id="get-all-inactive-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Import Collection file example

<a id="opIdGET-Importfileexample"></a>

> Code samples

```bash
curl https://example.com/api/catalog/pvt/collection/stockkeepingunit/importfileexample \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/collection/stockkeepingunit/importfileexample`

Imports a sample of the imported XLS file. You need to save the response file to your device.

<h3 id="import-collection-file-example-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

<h3 id="import-collection-file-example-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get products from a collection

<a id="opIdGET-Productsfromacollection"></a>

> Code samples

```bash
curl https://example.com/api/catalog/pvt/collection/1/products \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog/pvt/collection/{collectionId}/products`

Retrieves information about the products from a collection.

<h3 id="get-products-from-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|collectionId|path|integer|true|Collection's unique identifier.|
|page|query|integer|false|Page number.|
|pageSize|query|integer|false|Number of the items of the page.|
|Filter|query|string|false|Filter used to refine the Collection's products.|
|Active|query|boolean|false|Defines if the status of the product is active or not.|
|Visible|query|boolean|false|Defines if the product is visible on the store or not.|
|CategoryId|query|integer|false|Product's Category unique identifier.|
|BrandId|query|integer|false|Product's Brand unique identifier.|
|SupplierId|query|integer|false|Product's Supplier unique identifier.|
|SalesChannelId|query|integer|false|Product's Trade Policy unique identifier.|
|ReleaseFrom|query|string|false|Product past release date.|
|ReleaseTo|query|string|false|Product future release date.|
|SpecificationProduct|query|string|false|Product Specification Field Value. You must also fill in `SpecificationFieldId` to use this parameter.|
|SpecificationFieldId|query|integer|false|Product Specification Field unique identifier.|

<h3 id="get-products-from-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Remove products from Collection by imported file

<a id="opIdPOST-Removeproductsbyimportfile"></a>

> Code samples

```bash
curl https://example.com/api/catalog/pvt/collection/1/stockkeepingunit/importexclude \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -F 'file=@/path/to/file'
```

`POST /api/catalog/pvt/collection/{collectionId}/stockkeepingunit/importexclude`

Removes products from a collection from the request body file. The file must be an imported template.

> Body parameter

```yaml
file: null
```

<h3 id="remove-products-from-collection-by-imported-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|collectionId|path|integer|true|Collection's unique identifier.|
|body|body|object|false|none|
|» file|body|object(binary)|false|XLS file with information about products to be added to a Collection. The file must be an imported template from [Import Collection file example](https://developers.vtex.com/vtex-developer-docs/reference/get-importfileexample) endpoint.|

<h3 id="remove-products-from-collection-by-imported-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Add products to Collection by imported file

<a id="opIdPOST-Addproductsbyimportfile"></a>

> Code samples

```bash
curl https://example.com/api/catalog/pvt/collection/1/stockkeepingunit/importinsert \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -F 'file=@/path/to/file'
```

`POST /api/catalog/pvt/collection/{collectionId}/stockkeepingunit/importinsert`

Adds products to a collection from the request body file. The file must be an imported template.

> Body parameter

```yaml
file: null
```

<h3 id="add-products-to-collection-by-imported-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|collectionId|path|integer|true|Collection's unique identifier.|
|body|body|object|false|none|
|» file|body|object(binary)|false|XLS file with information about products to be added to a Collection. The file must be an imported template from [Import Collection file example](https://developers.vtex.com/vtex-developer-docs/reference/get-importfileexample) endpoint.|

<h3 id="add-products-to-collection-by-imported-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get All Collections

<a id="opIdGET-AllCollections"></a>

> Code samples

```bash
curl 'https://example.com/api/catalog_system/pvt/collection/search?page=2&pageSize=15&orderByAsc=true' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/collection/search`

Retrieves a list of all collections matching a filter.

<h3 id="get-all-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|page|query|integer|true|Page number.|
|pageSize|query|integer|true|Number of the items of the page.|
|orderByAsc|query|boolean|true|Defines if the items of the page are in ascending order.|

<h3 id="get-all-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Collections by search terms

<a id="opIdGET-Collectionsbyseachterms"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/collection/search/costume \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/collection/search/{searchTerms}`

Retrieves a list of collections matching a filter.

<h3 id="get-collections-by-search-terms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|searchTerms|path|string|true|String that will search for a collection related to it.|
|page|query|integer|false|Page number.|
|pageSize|query|integer|false|Number of the items of the page.|
|orderByAsc|query|boolean|false|Defines if the items of the page are in ascending order.|

<h3 id="get-collections-by-search-terms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-supplier">Supplier</h1>

## Create Supplier

> Code samples

```bash
curl https://example.com/api/catalog/pvt/supplier \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "CellPhone": "4444444444",
    "Cnpj": "33304981001272",
    "CorporateName": "TopStore",
    "CorportePhone": "5555555555",
    "Email": "email@email.com",
    "IsActive": false,
    "Name": "Supplier",
    "Phone": "3333333333",
    "StateInscription": "123456"
  }'
```

`POST /api/catalog/pvt/supplier`

Creates a new Supplier. 
## Request body example

```json
{
    "Name": "Supplier",
    "CorporateName": "TopStore",
    "StateInscription": "",
    "Cnpj": "33304981001272",
    "Phone": "3333333333",
    "CellPhone": "4444444444",
    "CorportePhone": "5555555555",
    "Email": "email@email.com",
    "IsActive": true
}
```

## Response body example

```json
{
    "Id": 1,
    "Name": "Supplier",
    "CorporateName": "TopStore",
    "StateInscription": "",
    "Cnpj": "33304981001272",
    "Phone": "3333333333",
    "CellPhone": "4444444444",
    "CorportePhone": "5555555555",
    "Email": "email@email.com",
    "IsActive": true
}
```

> Body parameter

```json
{
  "CellPhone": "4444444444",
  "Cnpj": "33304981001272",
  "CorporateName": "TopStore",
  "CorportePhone": "5555555555",
  "Email": "email@email.com",
  "IsActive": false,
  "Name": "Supplier",
  "Phone": "3333333333",
  "StateInscription": "123456"
}
```

<h3 id="create-supplier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[SupplierRequest](#schemasupplierrequest)|false|none|
|» CellPhone|body|string|true|Supplier Cellphone.|
|» Cnpj|body|string|true|Corporate legal ID.|
|» CorporateName|body|string|true|Supplier Corporate Name.|
|» CorportePhone|body|string|true|Supplier Corporate Phone.|
|» Email|body|string|true|Supplier email.|
|» IsActive|body|boolean|true|Defines if the Supplier is active (`true`) or not (`false`).|
|» Name|body|string|true|Supplier Name.|
|» Phone|body|string|true|Supplier Phone.|
|» StateInscription|body|string|true|State Inscription.|

> Example responses

> 200 Response

```json
{
  "CellPhone": "4444444444",
  "Cnpj": "33304981001272",
  "CorporateName": "TopStore",
  "CorportePhone": "5555555555",
  "Email": "email@email.com",
  "Id": 123,
  "IsActive": false,
  "Name": "Supplier",
  "Phone": "3333333333",
  "StateInscription": "123456"
}
```

<h3 id="create-supplier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SupplierResponse](#schemasupplierresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Supplier

> Code samples

```bash
curl https://example.com/api/catalog/pvt/supplier/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "CellPhone": "4444444444",
    "Cnpj": "33304981001272",
    "CorporateName": "TopStore",
    "CorportePhone": "5555555555",
    "Email": "email@email.com",
    "IsActive": false,
    "Name": "Supplier",
    "Phone": "3333333333",
    "StateInscription": "123456"
  }'
```

`PUT /api/catalog/pvt/supplier/{supplierId}`

Updates general information of an existing Supplier. 
## Request body example

```json
{
    "Name": "Supplier",
    "CorporateName": "TopStore",
    "StateInscription": "",
    "Cnpj": "33304981001272",
    "Phone": "3333333333",
    "CellPhone": "4444444444",
    "CorportePhone": "5555555555",
    "Email": "email@email.com",
    "IsActive": true
}
```

## Response body example

```json
{
    "Id": 1,
    "Name": "Supplier",
    "CorporateName": "TopStore",
    "StateInscription": "",
    "Cnpj": "33304981001272",
    "Phone": "3333333333",
    "CellPhone": "4444444444",
    "CorportePhone": "5555555555",
    "Email": "email@email.com",
    "IsActive": true
}
```

> Body parameter

```json
{
  "CellPhone": "4444444444",
  "Cnpj": "33304981001272",
  "CorporateName": "TopStore",
  "CorportePhone": "5555555555",
  "Email": "email@email.com",
  "IsActive": false,
  "Name": "Supplier",
  "Phone": "3333333333",
  "StateInscription": "123456"
}
```

<h3 id="update-supplier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|supplierId|path|integer|true|Supplier's unique numerical identifier.|
|body|body|[SupplierRequest](#schemasupplierrequest)|false|none|
|» CellPhone|body|string|true|Supplier Cellphone.|
|» Cnpj|body|string|true|Corporate legal ID.|
|» CorporateName|body|string|true|Supplier Corporate Name.|
|» CorportePhone|body|string|true|Supplier Corporate Phone.|
|» Email|body|string|true|Supplier email.|
|» IsActive|body|boolean|true|Defines if the Supplier is active (`true`) or not (`false`).|
|» Name|body|string|true|Supplier Name.|
|» Phone|body|string|true|Supplier Phone.|
|» StateInscription|body|string|true|State Inscription.|

> Example responses

> 200 Response

```json
{
  "CellPhone": "4444444444",
  "Cnpj": "33304981001272",
  "CorporateName": "TopStore",
  "CorportePhone": "5555555555",
  "Email": "email@email.com",
  "Id": 123,
  "IsActive": false,
  "Name": "Supplier",
  "Phone": "3333333333",
  "StateInscription": "123456"
}
```

<h3 id="update-supplier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SupplierResponse](#schemasupplierresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete Supplier

> Code samples

```bash
curl https://example.com/api/catalog/pvt/supplier/1 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/catalog/pvt/supplier/{supplierId}`

Deletes an existing Supplier.

<h3 id="delete-supplier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|supplierId|path|integer|true|Supplier's unique numerical identifier.|

<h3 id="delete-supplier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-sales-channel">Sales Channel</h1>

## Get Sales Channel by ID

<a id="opIdSalesChannelbyId"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/saleschannel/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/saleschannel/{salesChannelId}`

Retrieves a specific sales channel by its ID. 

## Response body example

```json
{
    "Id": 1,
    "Name": "Loja Principal",
    "IsActive": true,
    "ProductClusterId": null,
    "CountryCode": "BRA",
    "CultureInfo": "pt-BR",
    "TimeZone": "E. South America Standard Time",
    "CurrencyCode": "BRL",
    "CurrencySymbol": "R$",
    "CurrencyLocale": 1046,
    "CurrencyFormatInfo": {
        "CurrencyDecimalDigits": 1,
        "CurrencyDecimalSeparator": ",",
        "CurrencyGroupSeparator": ".",
        "CurrencyGroupSize": 3,
        "StartsWithCurrencySymbol": true
    },
    "Origin": null,
    "Position": 2,
    "ConditionRule": null,
    "CurrencyDecimalDigits": 1
}
```

<h3 id="get-sales-channel-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|salesChannelId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "ConditionRule": "approved=true",
  "CountryCode": "BRA",
  "CultureInfo": "pt-BR",
  "CurrencyCode": "BRL",
  "CurrencyDecimalDigits": 1,
  "CurrencyFormatInfo": {
    "CurrencyDecimalDigits": 1,
    "CurrencyDecimalSeparator": ",",
    "CurrencyGroupSeparator": ".",
    "CurrencyGroupSize": 3,
    "StartsWithCurrencySymbol": true
  },
  "CurrencyLocale": 1046,
  "CurrencySymbol": "R$",
  "Id": 1,
  "IsActive": true,
  "Name": "Loja Principal",
  "Origin": null,
  "Position": 1,
  "ProductClusterId": null,
  "TimeZone": "E. South America Standard Time"
}
```

<h3 id="get-sales-channel-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-sales-channel-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConditionRule|string \| null|false|none|Defines what is the conditional rule to activate de Sales Channel.|
|CountryCode|string|false|none|Country Code in ISO 3166-1 alfa-3 Standard.|
|CultureInfo|string|false|none|Language Country code in LCIDstring Standard.|
|CurrencyCode|string|false|none|Currency Code in ISO 4217 standard.|
|CurrencyDecimalDigits|integer|false|none|Quantity of Currency Decimal Digits.|
|CurrencyFormatInfo|object|false|none|Object with currency format.|
|» CurrencyDecimalDigits|integer|false|none|Quantity of Currency Decimal Digits.|
|» CurrencyDecimalSeparator|string|false|none|Defines which Currency Decimal Separator will be applied.|
|» CurrencyGroupSeparator|string|false|none|Defines which Currency Group Separator will be applied.|
|» CurrencyGroupSize|integer|false|none|Define how many characters will be grouped.|
|» StartsWithCurrencySymbol|boolean|false|none|Defines if all prices will be initiated with Currency Symbol (`true`) or not (`false`).|
|CurrencyLocale|integer|false|none|Currency Locale Code in LCID standard.|
|CurrencySymbol|string|false|none|Currency symbol.|
|Id|integer|false|none|Sales Channel unique identifier.|
|IsActive|boolean|false|none|Defines if the Sales Channel is active (`true`) or not (`false`).|
|Name|string|false|none|Sales Channel name.|
|Origin|string \| null|false|none|Origin of products in the Sales Channel.|
|Position|integer \| null|false|none|Defines the position on index.|
|ProductClusterId|integer \| null|false|none|Product Cluster ID, if the Sales Channel has releated Product Cluster.|
|TimeZone|string|false|none|Name of Time Zone.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Sales Channel List

<a id="opIdSalesChannelList"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/saleschannel/list \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/saleschannel/list`

Retrieves a list with details about the store's sales channels. 
## Response body example

```json
[
    {
        "Id": 1,
        "Name": "Loja Principal",
        "IsActive": true,
        "ProductClusterId": null,
        "CountryCode": "BRA",
        "CultureInfo": "pt-BR",
        "TimeZone": "E. South America Standard Time",
        "CurrencyCode": "BRL",
        "CurrencySymbol": "R$",
        "CurrencyLocale": 1046,
        "CurrencyFormatInfo": {
            "CurrencyDecimalDigits": 1,
            "CurrencyDecimalSeparator": ",",
            "CurrencyGroupSeparator": ".",
            "CurrencyGroupSize": 3,
            "StartsWithCurrencySymbol": true
        },
        "Origin": null,
        "Position": 2,
        "ConditionRule": null,
        "CurrencyDecimalDigits": 1
    }
]
```

<h3 id="get-sales-channel-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
[
  {
    "ConditionRule": "approved=true",
    "CountryCode": "BRA",
    "CultureInfo": "pt-BR",
    "CurrencyCode": "BRL",
    "CurrencyDecimalDigits": 1,
    "CurrencyFormatInfo": {
      "CurrencyDecimalDigits": 1,
      "CurrencyDecimalSeparator": ",",
      "CurrencyGroupSeparator": ".",
      "CurrencyGroupSize": 3,
      "StartsWithCurrencySymbol": true
    },
    "CurrencyLocale": 1046,
    "CurrencySymbol": "R$",
    "Id": 1,
    "IsActive": true,
    "Name": "Loja Principal",
    "Origin": null,
    "Position": 1,
    "ProductClusterId": null,
    "TimeZone": "E. South America Standard Time"
  }
]
```

<h3 id="get-sales-channel-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-sales-channel-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» ConditionRule|string \| null|false|none|Defines what is the conditional rule to activate de Sales Channel.|
|» CountryCode|string|false|none|Country Code in ISO 3166-1 alfa-3 Standard.|
|» CultureInfo|string|false|none|Language Country code in LCIDstring Standard.|
|» CurrencyCode|string|false|none|Currency Code in ISO 4217 standard.|
|» CurrencyDecimalDigits|integer|false|none|Quantity of Currency Decimal Digits.|
|» CurrencyFormatInfo|object|false|none|Object with currency format.|
|» » CurrencyDecimalDigits|integer|false|none|Quantity of Currency Decimal Digits.|
|» » CurrencyDecimalSeparator|string|false|none|Defines which Currency Decimal Separator will be applied.|
|» » CurrencyGroupSeparator|string|false|none|Defines which Currency Group Separator will be applied.|
|» » CurrencyGroupSize|integer|false|none|Define how many characters will be grouped.|
|» » StartsWithCurrencySymbol|boolean|false|none|Defines if all prices will be initiated with Currency Symbol (`true`) or not (`false`).|
|» CurrencyLocale|integer|false|none|Currency Locale Code in LCID standard.|
|» CurrencySymbol|string|false|none|Currency symbol.|
|» Id|integer|false|none|Sales Channel unique identifier.|
|» IsActive|boolean|false|none|Defines if the Sales Channel is active (`true`) or not (`false`).|
|» Name|string|false|none|Sales Channel name.|
|» Origin|string \| null|false|none|Origin of products in the Sales Channel.|
|» Position|integer \| null|false|none|Defines the position on index.|
|» ProductClusterId|integer \| null|false|none|Product Cluster ID, if the Sales Channel has releated Product Cluster.|
|» TimeZone|string|false|none|Name of Time Zone.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-seller">Seller</h1>

## Update Seller

<a id="opIdUpdateSeller"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/seller \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "ArchiveId": 1,
    "CNPJ": "12035072751",
    "CSCIdentification": "pedrostore",
    "CatalogSystemEndpoint": "http://pedrostore.vtexcommercestable.com.br/api/catalog_system/",
    "CategoryCommissionPercentage": "[{\"CategoryId\":14,\"ProductCommission\":15.0,\"FreightCommission\":0.0}]",
    "DeliveryPolicy": "Delivery policy text",
    "Description": "Brief description",
    "Email": "breno@breno.com",
    "ExchangeReturnPolicy": "Exchange return policy text",
    "FreightCommissionPercentage": 0,
    "FulfillmentEndpoint": "http://pedrostore.vtexcommercestable.com.br/api/fulfillment?affiliateid=LDB&sc=1",
    "FulfillmentSellerId": 1,
    "IsActive": true,
    "IsBetterScope": false,
    "MerchantName": "pedrostore",
    "Name": "My pedrostore",
    "Password": "passoword",
    "ProductCommissionPercentage": 0,
    "SecutityPrivacyPolicy": "Secutity privacy policy text",
    "SellerId": "pedrostore",
    "SellerType": 1,
    "TrustPolicy": "Default",
    "UrlLogo": "/myseller",
    "UseHybridPaymentOptions": false,
    "UserName": "myseller"
  }'
```

`PUT /api/catalog_system/pvt/seller`

Updates a seller.

> Body parameter

```json
{
  "ArchiveId": 1,
  "CNPJ": "12035072751",
  "CSCIdentification": "pedrostore",
  "CatalogSystemEndpoint": "http://pedrostore.vtexcommercestable.com.br/api/catalog_system/",
  "CategoryCommissionPercentage": "[{\"CategoryId\":14,\"ProductCommission\":15.0,\"FreightCommission\":0.0}]",
  "DeliveryPolicy": "Delivery policy text",
  "Description": "Brief description",
  "Email": "breno@breno.com",
  "ExchangeReturnPolicy": "Exchange return policy text",
  "FreightCommissionPercentage": 0,
  "FulfillmentEndpoint": "http://pedrostore.vtexcommercestable.com.br/api/fulfillment?affiliateid=LDB&sc=1",
  "FulfillmentSellerId": 1,
  "IsActive": true,
  "IsBetterScope": false,
  "MerchantName": "pedrostore",
  "Name": "My pedrostore",
  "Password": "passoword",
  "ProductCommissionPercentage": 0,
  "SecutityPrivacyPolicy": "Secutity privacy policy text",
  "SellerId": "pedrostore",
  "SellerType": 1,
  "TrustPolicy": "Default",
  "UrlLogo": "/myseller",
  "UseHybridPaymentOptions": false,
  "UserName": "myseller"
}
```

<h3 id="update-seller-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[UpdateSellerRequest](#schemaupdatesellerrequest)|true|none|
|» ArchiveId|body|integer|true|Seller archive ID.|
|» CNPJ|body|string|true|Company registration number.|
|» CSCIdentification|body|string|true|CSC identification.|
|» CatalogSystemEndpoint|body|string|true|URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`.|
|» CategoryCommissionPercentage|body|string|false|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|» DeliveryPolicy|body|string|true|Text describing the delivery policy previously agreed between the marketplace and the seller.|
|» Description|body|string|true|Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563).|
|» Email|body|string|true|Email of the admin responsible for the seller.|
|» ExchangeReturnPolicy|body|string|true|Text describing the exchange and return policy previously agreed between the marketplace and the seller.|
|» FreightCommissionPercentage|body|number|true|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|» FulfillmentEndpoint|body|string|true|URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don’t need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added.|
|» FulfillmentSellerId|body|integer|true|Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank.|
|» IsActive|body|boolean|true|If the selle is active (`true`) or not (`false`).|
|» IsBetterScope|body|boolean|true|Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI).|
|» MerchantName|body|string|false|Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) article to know more.|
|» Name|body|string|true|Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method.|
|» Password|body|string|true|Seller password.|
|» ProductCommissionPercentage|body|number|true|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|» SecutityPrivacyPolicy|body|string|true|Text describing the security policy previously agreed between the marketplace and the seller.|
|» SellerId|body|string|true|ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.|
|» SellerType|body|integer|true|Seller type.|
|» TrustPolicy|body|string|false|Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`.|
|» UrlLogo|body|string|true|Seller URL logo.|
|» UseHybridPaymentOptions|body|boolean|true|Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.|
|» UserName|body|string|true|Seller username.|

> Example responses

> 200 Response

```json
{
  "ArchiveId": null,
  "CNPJ": "12035072751",
  "CSCIdentification": "pedrostore",
  "CatalogSystemEndpoint": "http://pedrostore.vtexcommercestable.com.br/api/catalog_system/",
  "CategoryCommissionPercentage": "[{\"CategoryId\":14,\"ProductCommission\":15.0,\"FreightCommission\":0.0}]",
  "DeliveryPolicy": "",
  "Description": "",
  "Email": "breno@breno.com",
  "ExchangeReturnPolicy": "",
  "FreightCommissionPercentage": 0,
  "FulfillmentEndpoint": "http://pedrostore.vtexcommercestable.com.br/api/fulfillment?affiliateid=LDB&sc=1",
  "FulfillmentSellerId": null,
  "IsActive": true,
  "IsBetterScope": false,
  "MerchantName": "",
  "Name": "pedrostore",
  "Password": null,
  "ProductCommissionPercentage": 0,
  "SecutityPrivacyPolicy": "",
  "SellerId": "pedrostore",
  "SellerType": 1,
  "TrustPolicy": "Default",
  "UrlLogo": null,
  "UseHybridPaymentOptions": false,
  "UserName": null
}
```

<h3 id="update-seller-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="update-seller-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveId|integer \| null|false|none|Seller archive ID.|
|CNPJ|string|false|none|Company registration number.|
|CSCIdentification|string|false|none|CSC identification.|
|CatalogSystemEndpoint|string|false|none|URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`.|
|CategoryCommissionPercentage|string|false|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|DeliveryPolicy|string|false|none|Text describing the delivery policy previously agreed between the marketplace and the seller.|
|Description|string|false|none|Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563).|
|Email|string|false|none|Email of the admin responsible for the seller.|
|ExchangeReturnPolicy|string|false|none|Text describing the exchange and return policy previously agreed between the marketplace and the seller.|
|FreightCommissionPercentage|number|false|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|FulfillmentEndpoint|string \| null|false|none|URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don’t need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added.|
|FulfillmentSellerId|integer \| null|false|none|Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank.|
|IsActive|boolean|false|none|If the selle is active (`true`) or not (`false`).|
|IsBetterScope|boolean|false|none|Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI).|
|MerchantName|string|false|none|Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) article to know more.|
|Name|string|false|none|Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method.|
|Password|string \| null|false|none|Seller password.|
|ProductCommissionPercentage|number|false|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|SecutityPrivacyPolicy|string|false|none|Text describing the security policy previously agreed between the marketplace and the seller.|
|SellerId|string|false|none|Code used to identify the seller. It is assigned by the marketplace. We recommend filling it in with the seller's account name.|
|SellerType|integer|false|none|Seller type.|
|TrustPolicy|string|false|none|Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`.|
|UrlLogo|string \| null|false|none|Seller URL logo.|
|UseHybridPaymentOptions|boolean|false|none|Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.|
|UserName|string \| null|false|none|Seller username.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create Seller

<a id="opIdCreateSeller"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/seller \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "ArchiveId": 1,
    "CNPJ": "12345678912345",
    "CSCIdentification": "myseller",
    "CatalogSystemEndpoint": "http://myseller.vtexcommercestable.com.br/api/catalog_system/",
    "DeliveryPolicy": "",
    "Description": "",
    "Email": "myseller@vtex.com",
    "ExchangeReturnPolicy": "",
    "FreightCommissionPercentage": 0,
    "FulfillmentEndpoint": "http://fulfillment.vtexcommerce.com.br/api/fulfillment?affiliateid=VTX&sc=1&an=myseller",
    "FulfillmentSellerId": 2,
    "IsActive": true,
    "IsBetterScope": false,
    "Name": "My Seller",
    "Password": "",
    "ProductCommissionPercentage": 1.5,
    "SecutityPrivacyPolicy": "",
    "SellerId": "myseller",
    "SellerType": 1,
    "UrlLogo": "",
    "UseHybridPaymentOptions": false,
    "UserName": ""
  }'
```

`POST /api/catalog_system/pvt/seller`

Creates a new seller.

> Body parameter

```json
{
  "ArchiveId": 1,
  "CNPJ": "12345678912345",
  "CSCIdentification": "myseller",
  "CatalogSystemEndpoint": "http://myseller.vtexcommercestable.com.br/api/catalog_system/",
  "DeliveryPolicy": "",
  "Description": "",
  "Email": "myseller@vtex.com",
  "ExchangeReturnPolicy": "",
  "FreightCommissionPercentage": 0,
  "FulfillmentEndpoint": "http://fulfillment.vtexcommerce.com.br/api/fulfillment?affiliateid=VTX&sc=1&an=myseller",
  "FulfillmentSellerId": 2,
  "IsActive": true,
  "IsBetterScope": false,
  "Name": "My Seller",
  "Password": "",
  "ProductCommissionPercentage": 1.5,
  "SecutityPrivacyPolicy": "",
  "SellerId": "myseller",
  "SellerType": 1,
  "UrlLogo": "",
  "UseHybridPaymentOptions": false,
  "UserName": ""
}
```

<h3 id="create-seller-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[CreateSellerRequest](#schemacreatesellerrequest)|true|none|
|» ArchiveId|body|integer|true|Seller archive ID.|
|» CNPJ|body|string|true|Company registration number.|
|» CSCIdentification|body|string|true|CSC identification.|
|» CatalogSystemEndpoint|body|string|true|URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`.|
|» CategoryCommissionPercentage|body|string|false|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|» DeliveryPolicy|body|string|true|Text describing the delivery policy previously agreed between the marketplace and the seller.|
|» Description|body|string|true|Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563).|
|» Email|body|string|true|Email of the admin responsible for the seller.|
|» ExchangeReturnPolicy|body|string|true|Text describing the exchange and return policy previously agreed between the marketplace and the seller.|
|» FreightCommissionPercentage|body|number|true|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|» FulfillmentEndpoint|body|string|true|URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don’t need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added.|
|» FulfillmentSellerId|body|integer|true|Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank.|
|» IsActive|body|boolean|true|If the selle is active (`true`) or not (`false`).|
|» IsBetterScope|body|boolean|true|Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI).|
|» MerchantName|body|string|false|Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) article to know more.|
|» Name|body|string|true|Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method.|
|» Password|body|string|true|Seller password.|
|» ProductCommissionPercentage|body|number|true|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|» SecutityPrivacyPolicy|body|string|true|Text describing the security policy previously agreed between the marketplace and the seller.|
|» SellerId|body|string|true|Code used to identify the seller. It is assigned by the marketplace. We recommend filling it in with the seller's account name.|
|» SellerType|body|integer|true|Seller type.|
|» TrustPolicy|body|string|false|Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`.|
|» UrlLogo|body|string|true|Seller URL logo.|
|» UseHybridPaymentOptions|body|boolean|true|Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.|
|» UserName|body|string|true|Seller username.|

> Example responses

> 200 Response

```json
{
  "ArchiveId": null,
  "CNPJ": "12035072751",
  "CSCIdentification": "pedrostore",
  "CatalogSystemEndpoint": "http://pedrostore.vtexcommercestable.com.br/api/catalog_system/",
  "CategoryCommissionPercentage": "[{\"CategoryId\":14,\"ProductCommission\":15.0,\"FreightCommission\":0.0}]",
  "DeliveryPolicy": "",
  "Description": "",
  "Email": "breno@breno.com",
  "ExchangeReturnPolicy": "",
  "FreightCommissionPercentage": 0,
  "FulfillmentEndpoint": "http://pedrostore.vtexcommercestable.com.br/api/fulfillment?affiliateid=LDB&sc=1",
  "FulfillmentSellerId": null,
  "IsActive": true,
  "IsBetterScope": false,
  "MerchantName": "",
  "Name": "pedrostore",
  "Password": null,
  "ProductCommissionPercentage": 0,
  "SecutityPrivacyPolicy": "",
  "SellerId": "pedrostore",
  "SellerType": 1,
  "TrustPolicy": "Default",
  "UrlLogo": null,
  "UseHybridPaymentOptions": false,
  "UserName": null
}
```

<h3 id="create-seller-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-seller-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveId|integer \| null|false|none|Seller archive ID.|
|CNPJ|string|false|none|Company registration number.|
|CSCIdentification|string|false|none|CSC identification.|
|CatalogSystemEndpoint|string|false|none|URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`.|
|CategoryCommissionPercentage|string|false|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|DeliveryPolicy|string|false|none|Text describing the delivery policy previously agreed between the marketplace and the seller.|
|Description|string|false|none|Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563).|
|Email|string|false|none|Email of the admin responsible for the seller. |
|ExchangeReturnPolicy|string|false|none|Text describing the exchange and return policy previously agreed between the marketplace and the seller.|
|FreightCommissionPercentage|number|false|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|FulfillmentEndpoint|string \| null|false|none|URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don’t need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added.|
|FulfillmentSellerId|integer \| null|false|none|Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank.|
|IsActive|boolean|false|none|If the selle is active (`true`) or not (`false`).|
|IsBetterScope|boolean|false|none|Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI).|
|MerchantName|string|false|none|Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) article to know more.|
|Name|string|false|none|Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method.|
|Password|string \| null|false|none|Seller password.|
|ProductCommissionPercentage|number|false|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|SecutityPrivacyPolicy|string|false|none|Text describing the security policy previously agreed between the marketplace and the seller.|
|SellerId|string|false|none|Code used to identify the seller. It is assigned by the marketplace. We recommend filling it in with the seller's account name.|
|SellerType|integer|false|none|Seller type.|
|TrustPolicy|string|false|none|Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`.|
|UrlLogo|string \| null|false|none|Seller URL logo.|
|UseHybridPaymentOptions|boolean|false|none|Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller. |
|UserName|string \| null|false|none|Seller username.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Seller List

<a id="opIdSellerList"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/seller/list \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/seller/list`

Retrieves the seller's details by its ID.

<h3 id="get-seller-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|sc|query|integer(int32)|false|Trade policy ID.|
|sellerType|query|integer(int32)|false|Seller type.|
|isBetterScope|query|boolean|false|If the seller is better scope.|

> Example responses

> 200 Response

```json
{
  "ArchiveId": null,
  "CNPJ": "12035072751",
  "CSCIdentification": "pedrostore",
  "CatalogSystemEndpoint": "http://pedrostore.vtexcommercestable.com.br/api/catalog_system/",
  "CategoryCommissionPercentage": "[{\"CategoryId\":14,\"ProductCommission\":15.0,\"FreightCommission\":0.0}]",
  "DeliveryPolicy": "",
  "Description": "",
  "Email": "breno@breno.com",
  "ExchangeReturnPolicy": "",
  "FreightCommissionPercentage": 0,
  "FulfillmentEndpoint": "http://pedrostore.vtexcommercestable.com.br/api/fulfillment?affiliateid=LDB&sc=1",
  "FulfillmentSellerId": null,
  "IsActive": true,
  "IsBetterScope": false,
  "MerchantName": "",
  "Name": "pedrostore",
  "Password": null,
  "ProductCommissionPercentage": 0,
  "SecutityPrivacyPolicy": "",
  "SellerId": "pedrostore",
  "SellerType": 1,
  "TrustPolicy": "Default",
  "UrlLogo": null,
  "UseHybridPaymentOptions": false,
  "UserName": null
}
```

<h3 id="get-seller-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-seller-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveId|integer \| null|false|none|Seller archive ID.|
|CNPJ|string|false|none|Company registration number.|
|CSCIdentification|string|false|none|CSC identification.|
|CatalogSystemEndpoint|string|false|none|URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`.|
|CategoryCommissionPercentage|string|false|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|DeliveryPolicy|string|false|none|Text describing the delivery policy previously agreed between the marketplace and the seller.|
|Description|string|false|none|Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563).|
|Email|string|false|none|Email of the admin responsible for the seller.|
|ExchangeReturnPolicy|string|false|none|Text describing the exchange and return policy previously agreed between the marketplace and the seller.|
|FreightCommissionPercentage|number|false|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|FulfillmentEndpoint|string \| null|false|none|URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don’t need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added.|
|FulfillmentSellerId|integer \| null|false|none|Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank.|
|IsActive|boolean|false|none|If the selle is active (`true`) or not (`false`).|
|IsBetterScope|boolean|false|none|Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI).|
|MerchantName|string|false|none|Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) article to know more.|
|Name|string|false|none|Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method.|
|Password|string \| null|false|none|Seller password.|
|ProductCommissionPercentage|number|false|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|SecutityPrivacyPolicy|string|false|none|Text describing the security policy previously agreed between the marketplace and the seller.|
|SellerId|string|false|none|Code used to identify the seller. It is assigned by the marketplace. We recommend filling it in with the seller's account name.|
|SellerType|integer|false|none|Seller type.|
|TrustPolicy|string|false|none|Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`.|
|UrlLogo|string \| null|false|none|Seller URL logo.|
|UseHybridPaymentOptions|boolean|false|none|Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.|
|UserName|string \| null|false|none|Seller username.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Seller by ID

<a id="opIdGetSellerbyId"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/seller/pedrostore \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/seller/{sellerId}`

Retrieves the seller's details by its ID.

<h3 id="get-seller-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|sellerId|path|string|true|ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.|

> Example responses

> 200 Response

```json
{
  "ArchiveId": null,
  "CNPJ": "12035072751",
  "CSCIdentification": "pedrostore",
  "CatalogSystemEndpoint": "http://pedrostore.vtexcommercestable.com.br/api/catalog_system/",
  "CategoryCommissionPercentage": "[{\"CategoryId\":14,\"ProductCommission\":15.0,\"FreightCommission\":0.0}]",
  "DeliveryPolicy": "",
  "Description": "",
  "Email": "breno@breno.com",
  "ExchangeReturnPolicy": "",
  "FreightCommissionPercentage": 0,
  "FulfillmentEndpoint": "http://pedrostore.vtexcommercestable.com.br/api/fulfillment?affiliateid=LDB&sc=1",
  "FulfillmentSellerId": null,
  "IsActive": true,
  "IsBetterScope": false,
  "MerchantName": "",
  "Name": "pedrostore",
  "Password": null,
  "ProductCommissionPercentage": 0,
  "SecutityPrivacyPolicy": "",
  "SellerId": "pedrostore",
  "SellerType": 1,
  "TrustPolicy": "Default",
  "UrlLogo": "",
  "UseHybridPaymentOptions": false,
  "UserName": null
}
```

<h3 id="get-seller-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-seller-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveId|integer \| null|false|none|Seller archive ID.|
|CNPJ|string|false|none|Company registration number.|
|CSCIdentification|string|false|none|CSC identification.|
|CatalogSystemEndpoint|string|false|none|URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`.|
|CategoryCommissionPercentage|string|false|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|DeliveryPolicy|string|false|none|Text describing the delivery policy previously agreed between the marketplace and the seller.|
|Description|string|false|none|Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563).|
|Email|string|false|none|Email of the admin responsible for the seller.|
|ExchangeReturnPolicy|string|false|none|Text describing the exchange and return policy previously agreed between the marketplace and the seller.|
|FreightCommissionPercentage|number|false|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|FulfillmentEndpoint|string \| null|false|none|URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don’t need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added.|
|FulfillmentSellerId|integer \| null|false|none|Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank.|
|IsActive|boolean|false|none|If the selle is active (`true`) or not (`false`).|
|IsBetterScope|boolean|false|none|Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI).|
|MerchantName|string|false|none|Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) article to know more.|
|Name|string|false|none|Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method.|
|Password|string \| null|false|none|Seller password.|
|ProductCommissionPercentage|number|false|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|SecutityPrivacyPolicy|string|false|none|Text describing the security policy previously agreed between the marketplace and the seller.|
|SellerId|string|false|none|Code used to identify the seller. It is assigned by the marketplace. We recommend filling it in with the seller's account name.|
|SellerType|integer|false|none|Seller type.|
|TrustPolicy|string|false|none|Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`.|
|UrlLogo|string|false|none|Seller URL logo.|
|UseHybridPaymentOptions|boolean|false|none|Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller. |
|UserName|string \| null|false|none|Seller username.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Seller by ID

<a id="opIdGetSellersbyId"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/sellers/pedrostore \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/sellers/{sellerId}`

Retrieves the seller's details by its ID.

<h3 id="get-seller-by-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|sellerId|path|string|true|ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.|

> Example responses

> 200 Response

```json
{
  "ArchiveId": null,
  "CNPJ": "12035072751",
  "CSCIdentification": "pedrostore",
  "CatalogSystemEndpoint": "http://pedrostore.vtexcommercestable.com.br/api/catalog_system/",
  "CategoryCommissionPercentage": "[{\"CategoryId\":14,\"ProductCommission\":15.0,\"FreightCommission\":0.0}]",
  "DeliveryPolicy": "",
  "Description": "",
  "Email": "breno@breno.com",
  "ExchangeReturnPolicy": "",
  "FreightCommissionPercentage": 0,
  "FulfillmentEndpoint": "http://pedrostore.vtexcommercestable.com.br/api/fulfillment?affiliateid=LDB&sc=1",
  "FulfillmentSellerId": null,
  "IsActive": true,
  "IsBetterScope": false,
  "MerchantName": "",
  "Name": "pedrostore",
  "Password": null,
  "ProductCommissionPercentage": 0,
  "SecutityPrivacyPolicy": "",
  "SellerId": "pedrostore",
  "SellerType": 1,
  "TrustPolicy": "Default",
  "UrlLogo": "",
  "UseHybridPaymentOptions": false,
  "UserName": null
}
```

<h3 id="get-seller-by-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-seller-by-id-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveId|integer \| null|false|none|Seller archive ID.|
|CNPJ|string|false|none|Company registration number.|
|CSCIdentification|string|false|none|CSC identification.|
|CatalogSystemEndpoint|string|false|none|URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`.|
|CategoryCommissionPercentage|string|false|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|DeliveryPolicy|string|false|none|Text describing the delivery policy previously agreed between the marketplace and the seller.|
|Description|string|false|none|Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563).|
|Email|string \| null|false|none|Email of the admin responsible for the seller. |
|ExchangeReturnPolicy|string|false|none|Text describing the exchange and return policy previously agreed between the marketplace and the seller.|
|FreightCommissionPercentage|number|false|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|FulfillmentEndpoint|string \| null|false|none|URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don’t need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added.|
|FulfillmentSellerId|integer \| null|false|none|Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank.|
|IsActive|boolean|false|none|If the selle is active (`true`) or not (`false`).|
|IsBetterScope|boolean|false|none|Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI).|
|MerchantName|string|false|none|Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) article to know more.|
|Name|string \| null|false|none|Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method.|
|Password|string \| null|false|none|Seller password.|
|ProductCommissionPercentage|number|false|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|SecutityPrivacyPolicy|string|false|none|Text describing the security policy previously agreed between the marketplace and the seller.|
|SellerId|string|false|none|Code used to identify the seller. It is assigned by the marketplace. We recommend filling it in with the seller's account name.|
|SellerType|integer|false|none|Seller type.|
|TrustPolicy|string|false|none|Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`.|
|UrlLogo|string|false|none|Seller URL logo.|
|UseHybridPaymentOptions|boolean|false|none|Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller. |
|UserName|string \| null|false|none|Seller username.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-sku-seller">SKU Seller</h1>

## Change Notification with Seller ID and Seller SKU ID

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/skuseller/changenotification/101/1 \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/catalog_system/pvt/skuseller/changenotification/{sellerId}/{sellerSkuId}`

 > ⚠️ Check out the updated version of the SKU Seller endpoints in our [SKU Bindings API documentation](https://developers.vtex.com/vtex-rest-api/reference/getbyskuid). If you are doing this integration for the first time, we recommend that you follow the updated documentation.

The seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.

With this notification, the seller is telling the marketplace that something has changed about a specific SKU, like price or inventory, or that this is a new SKU that the seller would like to offer to the marketplace.

There are two information expected by the marketplace in this request: the `sellerId`, which identifies the seller, and the `sellerSkuId`, which identifies the binding of the seller with the SKU.

Both information are passed through the request URL. The body of the request should be empty.

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
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Change Notification with SKU ID

<a id="opIdChangeNotification"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/skuseller/changenotification/10 \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/catalog_system/pvt/skuseller/changenotification/{skuId}`

 > ⚠️ Check out the updated version of the SKU Seller endpoints in our [SKU Bindings API documentation](https://developers.vtex.com/vtex-rest-api/reference/getbyskuid). If you are doing this integration for the first time, we recommend that you follow the updated documentation.

The seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.

With this notification, the seller is telling the marketplace that something has changed about a specific SKU, like price or inventory, or that this is a new SKU that the seller would like to offer to the marketplace.

The body of the request should be empty.
## Example

Let's say your seller has the ID `123` in the marketplace and you want to inform the marketplace that has been a change in the SKU with ID `700`.

In this case, you would have to replace the `sellerId` parameter with the value `123` and the `skuId` parameter with the value `700`. The URL of the request would be the following.

```
https://{{accountName}}.vtexcommercestable.com.br/api/catalog_system/pvt/skuseller/changenotification/123/700
```

## Response codes

The following response codes are possible for this request.

* 404: the SKU was not found in the marketplace. The body of the response, in this case, should follow this format: "Seller StockKeepingUnit `{{skuId}}` not found for this seller id `{{sellerId}}`". This means that the seller can now proceed with sending an offer to the marketplace in order to suggest that this SKU is sold there.
* 200: the SKU whose ID was informed in the URL already exists in the marketplace and was found. The marketplace can now proceed with a fulfillment simulation in order to get updated information about this SKU's inventory and price.
* 429 - Failure due to too many requests.
* 403 - Failure in the authentication.

<h3 id="change-notification-with-sku-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|skuId|path|string|true|A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use to look for the SKU whose change the seller wants to inform. If the marketplace finds this ID, it responds with status code 200. Otherwise, it responds with status code 404.|

> Example responses

> 404 Response

```text
Seller StockKeepingUnit `{{skuId}}` not found for this seller id `{{sellerId}}`
```

<h3 id="change-notification-with-sku-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not found|Inline|
|429|Too Many Requests|Too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Remove a seller's SKU binding

<a id="opIdDeleteSKUsellerassociation"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/skuseller/remove/101/1 \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/catalog_system/pvt/skuseller/remove/{sellerId}/{sellerSkuId}`

 > ⚠️ Check out the updated version of the SKU Seller endpoints in our [SKU Bindings API documentation](https://developers.vtex.com/vtex-rest-api/reference/getbyskuid). If you are doing this integration for the first time, we recommend that you follow the updated documentation.

Remove a seller's SKU binding, given the seller ID and the SKU ID in the seller's store.

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
curl https://example.com/api/catalog_system/pvt/skuseller/101/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/skuseller/{sellerId}/{sellerSkuId}`

 > ⚠️ Check out the updated version of the SKU Seller endpoints in our [SKU Bindings API documentation](https://developers.vtex.com/vtex-rest-api/reference/getbyskuid). If you are doing this integration for the first time, we recommend that you follow the updated documentation.

Retrieves the details of a seller's SKU given a seller ID and the SKU ID in the seller's store. 
## Response body example

```json
{
    "IsPersisted": true,
    "IsRemoved": false,
    "SkuSellerId": 799,
    "SellerId": "myseller",
    "StockKeepingUnitId": 50,
    "SellerStockKeepingUnitId": "502",
    "IsActive": true,
    "UpdateDate": "2018-10-11T04:52:42.1",
    "RequestedUpdateDate": null
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

<h1 id="catalog-api-product-indexing">Product Indexing</h1>

## Get Product Indexed Information

<a id="opIdIndexedInfo"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/products/GetIndexedInfo/1 \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/products/GetIndexedInfo/{productId}`

Retrieve details of a Product's Indexed Information in XML format. 
## Response body example

```xml
"
<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n
<response>\n
    <lst name=\"responseHeader\">
        <bool name=\"zkConnected\">true</bool>
        <int name=\"status\">0</int>
        <int name=\"QTime\">2</int>
        <lst name=\"params\">
            <str name=\"fl\">*</str>
            <arr name=\"fq\">
                <str>instanceId:394dbdc8-b1f4-4dea-adfa-1ec104f3bfe1</str>
                <str>productId:1</str>
            </arr>
        </lst>
    </lst>
    <result name=\"response\" numFound=\"0\" start=\"0\" maxScore=\"0.0\"></result>
    <lst name=\"facet_counts\">
        <lst name=\"facet_queries\"/>
        <lst name=\"facet_fields\"/>
        <lst name=\"facet_ranges\"/>
        <lst name=\"facet_intervals\"/>
        <lst name=\"facet_heatmaps\"/></lst>\n
</response>\n"
```

<h3 id="get-product-indexed-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|string|true|Product’s unique numerical identifier.|

<h3 id="get-product-indexed-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-commercial-conditions">Commercial Conditions</h1>

## Get all commercial conditions

<a id="opIdGetAllCommercialConditions"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/commercialcondition/list \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/commercialcondition/list`

Lists all commercial conditions on the store. 
## Response body example

```json
[
    {
        "Id": 1,
        "Name": "Padrão",
        "IsDefault": true
    },
    {
        "Id": 2,
        "Name": "Teste Fast",
        "IsDefault": false
    }
]
```

<h3 id="get-all-commercial-conditions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
[
  {
    "Id": 1,
    "IsDefault": true,
    "Name": "Padrão"
  },
  {
    "Id": 2,
    "IsDefault": false,
    "Name": "Secundária"
  },
  {
    "Id": 3,
    "IsDefault": false,
    "Name": "Parcelamento 18x"
  }
]
```

<h3 id="get-all-commercial-conditions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-all-commercial-conditions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Id|integer|false|none|Commercial condition ID.|
|» IsDefault|boolean|false|none|Defines if the commercial condition is default (`true`) or not (`false`).|
|» Name|string|false|none|Commercial condition name.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get commercial condition

<a id="opIdGetCommercialConditions"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pvt/commercialcondition/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pvt/commercialcondition/{commercialConditionId}`

Retrieves information of a commercial condition by its ID. 
## Response body example

```json
{
    "Id": 1,
    "Name": "Padrão",
    "IsDefault": true
}
```

<h3 id="get-commercial-condition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|commercialConditionId|path|integer|true|Commercial condition unique numerical identifier.|

> Example responses

> 200 Response

```json
{
  "Id": 1,
  "IsDefault": true,
  "Name": "Padrão"
}
```

<h3 id="get-commercial-condition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-commercial-condition-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer|false|none|Commercial condition ID.|
|IsDefault|boolean|false|none|If the commercial condition is default (`true`) or not (`false`).|
|Name|string|false|none|Commercial condition name.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api-gift-list">Gift List</h1>

## Get Gift List

<a id="opIdGetGiftList"></a>

> Code samples

```bash
curl https://example.com/api/addon/pvt/giftlist/get/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/addon/pvt/giftlist/get/{listId}`

Retrieves information about a Gift List by its ID.

<h3 id="get-gift-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|listId|path|integer|true|Gift List unique numerical identifier.|

> Example responses

> 200 Response

```json
{
  "IsPublic": false,
  "address": null,
  "clientId": 3,
  "dateCreated": "2011-05-04T13:23:00",
  "eventCity": "",
  "eventDate": "2012-12-21T00:00:00",
  "eventLocation": "",
  "eventState": "",
  "fileId": null,
  "fileUrl": null,
  "giftCardId": 2,
  "giftCardRechargeSkuId": null,
  "giftListId": 1,
  "giftListMembers": [],
  "giftListSkuIds": [],
  "giftListTypeId": 1,
  "giftListTypeName": "Lista de Casamento",
  "isActive": false,
  "isAddressOk": true,
  "memberNames": "sei lá",
  "message": "mensageeeem",
  "name": "My list",
  "profileSystemUserAddressName": "CASA",
  "profileSystemUserId": "010956A4-A74A-4375-8B7B-3B3B7B89B483",
  "shipsToOwner": false,
  "telemarketingId": null,
  "telemarketingObservation": "",
  "urlFolder": "lili",
  "userId": "010956A4-A74A-4375-8B7B-3B3B7B89B483",
  "version": 1
}
```

<h3 id="get-gift-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-gift-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsPublic|boolean|false|none|Defines if the gift list is public.|
|address|string \| null|false|none|Address of the gift list.|
|dateCreated|string|false|none|Date when the gift list was created.|
|eventCity|string|false|none|City of the event associated with the Gift List.|
|eventDate|string|false|none|Date of the event associated with the Gift List.|
|eventLocation|string|false|none|Location of the event associated with the Gift List.|
|eventState|string|false|none|State of the event associated with the Gift List.|
|fileId|integer \| null|false|none|File ID.|
|fileUrl|string \| null|false|none|File URL.|
|giftCardId|integer|false|none|Gift Card ID.|
|giftCardRechargeSkuId|integer \| null|false|none|ID of the SKU that recharges the gift card.|
|giftListId|integer|false|none|Gift List ID.|
|giftListMembers|[object]|false|none|Array of members of the gift list.|
|» clientId|string \| null|false|none|Client ID.|
|» giftListId|integer|false|none|Gift List ID.|
|» giftListMemberId|integer|false|none|Gift List member ID.|
|» isActive|boolean|false|none|Defines if the Gift List user is active or not.|
|» isAdmin|boolean|false|none|Defines if the Gift List member is an administrator of the Gift List or not.|
|» name|string|false|none|Name of the Gift List member.|
|» surname|string|false|none|Surname of the Gift List member.|
|» text1|string \| null|false|none|Complementary text.|
|» text2|string \| null|false|none|Complementary text.|
|» title|string \| null|false|none|Title of the Gift List member.|
|» userId|string|false|none|User ID.|
|giftListSkuIds|[string]|false|none|Array with the IDs of SKUs that are part of the gift list.|
|giftListTypeId|integer|false|none|Gift List Type ID.|
|giftListTypeName|string|false|none|Gift List Type name.|
|isActive|boolean|false|none|Defines if the gift list is active.|
|isAddressOk|boolean|false|none|Validates the address of the gift list.|
|memberNames|string|false|none|Name of the members of the gift list.|
|message|string|false|none|Gift List message.|
|name|string|false|none|Gift List name.|
|profileSystemUserAddressName|string|false|none|Name of the user's address.|
|profileSystemUserId|string|false|none|User ID on Profile System.|
|shipsToOwner|boolean|false|none|Defines if items purchased from the gift list will be shipped to the owner of the gift list.|
|telemarketingId|integer \| null|false|none|Telemarketing ID.|
|telemarketingObservation|string|false|none|Telemarketing observation.|
|urlFolder|string|false|none|Slug of the gift list that will be part of its URL.|
|userId|string|false|none|User ID.|
|version|integer|false|none|Version of the gift list.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_AlternateIds">AlternateIds</h2>
<!-- backwards compatibility -->
<a id="schemaalternateids"></a>
<a id="schema_AlternateIds"></a>
<a id="tocSalternateids"></a>
<a id="tocsalternateids"></a>

```json
{
  "Ean": "8781",
  "RefId": "878181"
}
```

Array with alternate SKU IDs, such as EAN and RefId.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Ean|string|false|none|SKU EAN.|
|RefId|string|false|none|SKU Reference ID.|

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "Fields": [
    {
      "DomainValues": "Adalberto,Pedro,João",
      "FieldName": "nome",
      "MaxCaracters": "20"
    },
    {
      "DomainValues": null,
      "FieldName": "foto",
      "MaxCaracters": "40"
    }
  ],
  "Id": 3,
  "IsActive": true,
  "IsRequired": false,
  "Keys": [
    "nome;20",
    "foto;40"
  ],
  "Name": "Mensagem"
}
```

Object containing information about SKU attachments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Fields|[[Field](#schemafield)]|true|none|Array containing Attachment fields.|
|Id|integer(int32)|true|none|Attachment ID.|
|IsActive|boolean|true|none|Defines if the Attachment is active or not.|
|IsRequired|boolean|true|none|Defines if the Attachment is required or not.|
|Keys|[string]|true|none|Attachment Keys.|
|Name|string|true|none|Attachment Name.|

<h2 id="tocS_AttachmentRequest">AttachmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentrequest"></a>
<a id="schema_AttachmentRequest"></a>
<a id="tocSattachmentrequest"></a>
<a id="tocsattachmentrequest"></a>

```json
{
  "Domains": [
    {
      "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic",
      "FieldName": "Sauce",
      "MaxCaracters": ""
    },
    {
      "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium",
      "FieldName": "Toppings",
      "MaxCaracters": ""
    }
  ],
  "IsActive": true,
  "IsRequired": true,
  "Name": "Ingredients"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Domains|[object]|true|none|List of characteristics related to the attachment.|
|IsActive|boolean|true|none|Defines if the attachment is active or not.|
|IsRequired|boolean|true|none|Defines if the attachment is required or not.|
|Name|string|true|none|Attachment Name.|

<h2 id="tocS_AttachmentResponse">AttachmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentresponse"></a>
<a id="schema_AttachmentResponse"></a>
<a id="tocSattachmentresponse"></a>
<a id="tocsattachmentresponse"></a>

```json
{
  "Domains": [
    {
      "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic",
      "FieldName": "Sauce",
      "MaxCaracters": ""
    },
    {
      "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium",
      "FieldName": "Toppings",
      "MaxCaracters": ""
    }
  ],
  "Id": 8,
  "IsActive": true,
  "IsRequired": true,
  "Name": "Ingredients"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Domains|[object]|true|none|List of characteristics related to the attachment.|
|Id|integer|true|none|Attachment ID.|
|IsActive|boolean|true|none|Defines if the attachment is active or not.|
|IsRequired|boolean|true|none|Defines if the attachment is required or not.|
|Name|string|true|none|Attachment Name.|

<h2 id="tocS_BrandCreateUpdate">BrandCreateUpdate</h2>
<!-- backwards compatibility -->
<a id="schemabrandcreateupdate"></a>
<a id="schema_BrandCreateUpdate"></a>
<a id="tocSbrandcreateupdate"></a>
<a id="tocsbrandcreateupdate"></a>

```json
{
  "Active": true,
  "AdWordsRemarketingCode": "",
  "Id": 2000013,
  "Keywords": "orma",
  "LinkId": null,
  "LomadeeCampaignCode": "",
  "MenuHome": true,
  "Name": "Orma Carbono2",
  "Score": null,
  "SiteTitle": "Orma Carbon2",
  "Text": "Orma Carbon2"
}
```

Object containing Brand information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Active|boolean|false|none|Defines if the brand is active (`true`) or not (`false`).|
|AdWordsRemarketingCode|string|false|none|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|Id|integer|true|none|Brand's unique numerical identifier.|
|Keywords|string|false|none|Store Framework - Deprecated.<br>Legacy CMS Portal - Alternative search terms that will lead to the specific brand. The user can find the desired brand even when misspelling it. Used especially when words are of foreign origin and have a distinct spelling that is transcribed into a generic one, or when small spelling mistakes occur.<br>|
|LinkId|string \| null|false|none|Brand page slug. Only lowercase letters and hyphens (`-`) are allowed.|
|LomadeeCampaignCode|string|false|none|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|MenuHome|boolean|false|none|Store Framework - Deprecated.<br>Legacy CMS Portal - Defines if the Brand appears in the Department Menu control (`<vtex.cmc:departmentNavigator/>`).<br>|
|Name|string|true|none|Brand name.|
|Score|integer \| null|false|none|Store Framework - Deprecated<br>Legacy CMS Portal - Value used to set the priority on the search result page.<br>|
|SiteTitle|string|false|none|Meta Title for the Brand page.|
|Text|string|false|none|Meta Description for the Brand page. A brief description of the brand, displayed by search engines. Since search engines can only display less than 150 characters, we recommend not exceeding this character limit when creating the description.|

<h2 id="tocS_BrandGet">BrandGet</h2>
<!-- backwards compatibility -->
<a id="schemabrandget"></a>
<a id="schema_BrandGet"></a>
<a id="tocSbrandget"></a>
<a id="tocsbrandget"></a>

```json
{
  "id": 0,
  "imageUrl": "string",
  "isActive": true,
  "metaTagDescription": "string",
  "name": "string",
  "title": "string"
}
```

Object containing Brand information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|Brand's unique numerical identifier.|
|imageUrl|string \| null|true|none|URL of the brand's image.|
|isActive|boolean|true|none|Defines if the brand is active (`true`) or not (`false`).|
|metaTagDescription|string|true|none|Meta Description for the Brand page. A brief description of the brand, displayed by search engines. Since search engines can only display less than 150 characters, we recommend not exceeding this character limit when creating the description.|
|name|string|true|none|Brand name.|
|title|string|true|none|Meta Title for the Brand page.|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "ActiveStoreFrontLink": true,
  "AdWordsRemarketingCode": "",
  "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",
  "FatherCategoryId": null,
  "GlobalCategoryId": 3367,
  "HasChildren": true,
  "Id": 1,
  "IsActive": true,
  "Keywords": "Kitchen, Laundry, Appliances",
  "LinkId": "Alimentacao",
  "LomadeeCampaignCode": "",
  "Name": "Home Appliances",
  "Score": null,
  "ShowBrandFilter": true,
  "ShowInStoreFront": true,
  "StockKeepingUnitSelectionMode": "LIST",
  "Title": "Home Appliances"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActiveStoreFrontLink|boolean|true|none|Defines if the Category has an active link on the website (`true`) or not (`false`).|
|AdWordsRemarketingCode|string|true|none|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|Description|string|true|none|Describes details about the category.|
|FatherCategoryId|integer \| null|true|none|ID of the father category, apply in case of category and subcategory.|
|GlobalCategoryId|integer|true|none|Google Global Category ID.|
|HasChildren|boolean|true|none|Defines if the category has child categories (`true`) or not (`false`).|
|Id|integer|true|none|Category ID.|
|IsActive|boolean|true|none|Shows if the category is active (`true`) or not (`false`).|
|Keywords|string|true|none|Substitutes words for the category.|
|LinkId|string \| null|true|none|Text Link.|
|LomadeeCampaignCode|string|true|none|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|Name|string|true|none|Category name.|
|Score|integer \| null|true|none|Score for search ordination.|
|ShowBrandFilter|boolean|true|none|Defines if the category has brand filter (`true`) or not (`false`).|
|ShowInStoreFront|boolean|true|none|Defines if the category is shown on side and upper menu (`true`) or not (`false`).|
|StockKeepingUnitSelectionMode|string|true|none|Defines how the SKU will be exhibited.|
|Title|string|true|none|Category page title.|

<h2 id="tocS_CategorySpecification">CategorySpecification</h2>
<!-- backwards compatibility -->
<a id="schemacategoryspecification"></a>
<a id="schema_CategorySpecification"></a>
<a id="tocScategoryspecification"></a>
<a id="tocscategoryspecification"></a>

```json
[
  {
    "CategoryId": 1,
    "FieldId": 33,
    "IsActive": true,
    "IsStockKeepingUnit": false,
    "Name": "Specification A"
  },
  {
    "CategoryId": 1,
    "FieldId": 34,
    "IsActive": true,
    "IsStockKeepingUnit": false,
    "Name": "Specification B"
  },
  {
    "CategoryId": 1,
    "FieldId": 35,
    "IsActive": false,
    "IsStockKeepingUnit": false,
    "Name": "Specification C"
  }
]
```

Array of objects.

<h2 id="tocS_CreateCategoryRequest">CreateCategoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecategoryrequest"></a>
<a id="schema_CreateCategoryRequest"></a>
<a id="tocScreatecategoryrequest"></a>
<a id="tocscreatecategoryrequest"></a>

```json
{
  "ActiveStoreFrontLink": true,
  "AdWordsRemarketingCode": null,
  "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",
  "FatherCategoryId": null,
  "GlobalCategoryId": 800,
  "IsActive": true,
  "Keywords": "Kitchen, Laundry, Appliances",
  "LomadeeCampaignCode": null,
  "Name": "Home Appliances",
  "Score": null,
  "ShowBrandFilter": true,
  "ShowInStoreFront": true,
  "StockKeepingUnitSelectionMode": "SPECIFICATION",
  "Title": "Home Appliances"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActiveStoreFrontLink|boolean|true|none|If true, the Category link becomes active in store.|
|AdWordsRemarketingCode|string \| null|true|none|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|Description|string|true|none|Text used in meta description tag for Category page.|
|FatherCategoryId|integer \| null|true|none|ID of the parent category, apply in case of category and subcategory.|
|GlobalCategoryId|integer|true|none|Google Global Category ID.|
|Id|integer|false|none|Category unique identifier. If not informed, it will be automatically generated by VTEX.|
|IsActive|boolean|true|none|If true, the Category page becomes available in store.|
|Keywords|string|true|none|Substitute words for the Category.|
|LomadeeCampaignCode|string \| null|true|none|**Deprecated.** This is a legacy field. Do not take this information into consideration.|
|Name|string|true|none|Category name.|
|Score|integer \| null|true|none|Score for search sorting order.|
|ShowBrandFilter|boolean|true|none|If true, the Category page displays a Brand filter.|
|ShowInStoreFront|boolean|true|none|If true, the Category is shown in the top and side menu.|
|StockKeepingUnitSelectionMode|string|true|none|Defines how the SKU will be exhibited|
|Title|string|true|none|Text used in title tag for Category page.|

<h2 id="tocS_CreateSellerRequest">CreateSellerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesellerrequest"></a>
<a id="schema_CreateSellerRequest"></a>
<a id="tocScreatesellerrequest"></a>
<a id="tocscreatesellerrequest"></a>

```json
{
  "ArchiveId": 1,
  "CNPJ": "12035072751",
  "CSCIdentification": "pedrostore",
  "CatalogSystemEndpoint": "http://pedrostore.vtexcommercestable.com.br/api/catalog_system/",
  "CategoryCommissionPercentage": "[{\"CategoryId\":14,\"ProductCommission\":15.0,\"FreightCommission\":0.0}]",
  "DeliveryPolicy": "Delivery policy text",
  "Description": "Brief description",
  "Email": "breno@breno.com",
  "ExchangeReturnPolicy": "Exchange return policy text",
  "FreightCommissionPercentage": 0,
  "FulfillmentEndpoint": "http://pedrostore.vtexcommercestable.com.br/api/fulfillment?affiliateid=LDB&sc=1",
  "FulfillmentSellerId": 1,
  "IsActive": true,
  "IsBetterScope": false,
  "MerchantName": "pedrostore",
  "Name": "My pedrostore",
  "Password": "passoword",
  "ProductCommissionPercentage": 0,
  "SecutityPrivacyPolicy": "Secutity privacy policy text",
  "SellerId": "pedrostore",
  "SellerType": 1,
  "TrustPolicy": "Default",
  "UrlLogo": "/myseller",
  "UseHybridPaymentOptions": false,
  "UserName": "myseller"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveId|integer|true|none|Seller archive ID.|
|CNPJ|string|true|none|Company registration number.|
|CSCIdentification|string|true|none|CSC identification.|
|CatalogSystemEndpoint|string|true|none|URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`.|
|CategoryCommissionPercentage|string|false|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|DeliveryPolicy|string|true|none|Text describing the delivery policy previously agreed between the marketplace and the seller.|
|Description|string|true|none|Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563).|
|Email|string|true|none|Email of the admin responsible for the seller.|
|ExchangeReturnPolicy|string|true|none|Text describing the exchange and return policy previously agreed between the marketplace and the seller.|
|FreightCommissionPercentage|number|true|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|FulfillmentEndpoint|string|true|none|URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don’t need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added.|
|FulfillmentSellerId|integer|true|none|Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank.|
|IsActive|boolean|true|none|If the selle is active (`true`) or not (`false`).|
|IsBetterScope|boolean|true|none|Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI).|
|MerchantName|string|false|none|Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) article to know more.|
|Name|string|true|none|Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method.|
|Password|string|true|none|Seller password.|
|ProductCommissionPercentage|number|true|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|SecutityPrivacyPolicy|string|true|none|Text describing the security policy previously agreed between the marketplace and the seller.|
|SellerId|string|true|none|Code used to identify the seller. It is assigned by the marketplace. We recommend filling it in with the seller's account name.|
|SellerType|integer|true|none|Seller type.|
|TrustPolicy|string|false|none|Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`.|
|UrlLogo|string|true|none|Seller URL logo.|
|UseHybridPaymentOptions|boolean|true|none|Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.|
|UserName|string|true|none|Seller username.|

<h2 id="tocS_Dimension">Dimension</h2>
<!-- backwards compatibility -->
<a id="schemadimension"></a>
<a id="schema_Dimension"></a>
<a id="tocSdimension"></a>
<a id="tocsdimension"></a>

```json
{
  "cubicweight": 81.6833,
  "height": 65,
  "length": 58,
  "weight": 10000,
  "width": 130
}
```

Object containing the SKU dimensions to be used on the shipping calculation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cubicweight|number|true|none|SKU Cubic Weight.|
|height|number|true|none|SKU Height.|
|length|number|true|none|SKU Length.|
|weight|number|true|none|SKU Weight.|
|width|number|true|none|SKU Width.|

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
{
  "DomainValues": "Adalberto,Pedro,João",
  "FieldName": "nome",
  "MaxCaracters": "20"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainValues|string \| null|true|none|Allowed key values.|
|FieldName|string|true|none|Attachment field name.|
|MaxCaracters|string|true|none|Maximum number of characters accepted in the attachment field.|

<h2 id="tocS_GetCategoryTree">GetCategoryTree</h2>
<!-- backwards compatibility -->
<a id="schemagetcategorytree"></a>
<a id="schema_GetCategoryTree"></a>
<a id="tocSgetcategorytree"></a>
<a id="tocsgetcategorytree"></a>

```json
{
  "MetaTagDescription": "",
  "Title": "Alimentação para Gatos",
  "children": [
    {
      "MetaTagDescription": "",
      "Title": "Bebedouro para Gatos",
      "children": [],
      "hasChildren": false,
      "id": 6,
      "name": "Bebedouro",
      "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/bebedouro"
    },
    {
      "MetaTagDescription": "",
      "Title": "Comedouro para Gatos",
      "children": [],
      "hasChildren": false,
      "id": 7,
      "name": "Comedouro",
      "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/comedouro"
    },
    {
      "MetaTagDescription": "",
      "Title": "Biscoitos para Gatos",
      "children": [],
      "hasChildren": false,
      "id": 8,
      "name": "Biscoitos",
      "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/biscoitos"
    },
    {
      "MetaTagDescription": "",
      "Title": "Petiscos para Gatos",
      "children": [],
      "hasChildren": false,
      "id": 9,
      "name": "Petiscos",
      "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/petiscos"
    },
    {
      "MetaTagDescription": "",
      "Title": "Ração Seca para Gatos",
      "children": [],
      "hasChildren": false,
      "id": 10,
      "name": "Ração Seca",
      "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/racao-seca"
    },
    {
      "MetaTagDescription": "",
      "Title": "Ração Úmida para Gatos",
      "children": [],
      "hasChildren": false,
      "id": 11,
      "name": "Ração Úmida",
      "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/racao-umida"
    }
  ],
  "hasChildren": true,
  "id": 1,
  "name": "Alimentação",
  "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetaTagDescription|string|true|none|Category page Meta tag description.|
|Title|string|true|none|Category page title.|
|children|[[GetCategoryTreeChild](#schemagetcategorytreechild)]|true|none|Array with information about the category's children.|
|hasChildren|boolean|true|none|If the category has a category child (`true`) or not (`false`).|
|id|integer(int32)|true|none|Category ID.|
|name|string|true|none|Category name.|
|url|string|true|none|Category URL.|

<h2 id="tocS_GetCategoryTreeChild">GetCategoryTreeChild</h2>
<!-- backwards compatibility -->
<a id="schemagetcategorytreechild"></a>
<a id="schema_GetCategoryTreeChild"></a>
<a id="tocSgetcategorytreechild"></a>
<a id="tocsgetcategorytreechild"></a>

```json
{
  "MetaTagDescription": "Video games.",
  "Title": "Games",
  "children": [
    {
      "children": [],
      "hasChildren": false,
      "id": 79,
      "name": "Consoles",
      "url": "https://ambienteqa.vtexcommercestable.com.br/games/xbox-360/consoles"
    },
    {
      "children": [],
      "hasChildren": false,
      "id": 126,
      "name": "Acessorio",
      "url": "https://ambienteqa.vtexcommercestable.com.br/games/xbox-360/acessorio"
    }
  ],
  "hasChildren": false,
  "id": 78,
  "name": "Xbox 360",
  "url": "https://ambienteqa.vtexcommercestable.com.br/games/xbox-360"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetaTagDescription|string|true|none|Category page Meta tag description.|
|Title|string|true|none|Category page title.|
|children|[object]|true|none|Array with information about the category's children.|
|hasChildren|boolean|true|none|If the category has a category child (`true`) or not (`false`).|
|id|integer(int32)|true|none|Category ID.|
|name|string|true|none|Category name.|
|url|string|true|none|Category URL.|

<h2 id="tocS_GetSKUAltID">GetSKUAltID</h2>
<!-- backwards compatibility -->
<a id="schemagetskualtid"></a>
<a id="schema_GetSKUAltID"></a>
<a id="tocSgetskualtid"></a>
<a id="tocsgetskualtid"></a>

```json
{
  "AlternateIdValues": [
    "1"
  ],
  "AlternateIds": {
    "RefId": "1"
  },
  "Attachments": [],
  "BrandId": "2000005",
  "BrandName": "Petmate",
  "CSCIdentification": null,
  "Categories": [],
  "CategoriesFullPath": [
    "/3/15/",
    "/3/",
    "/1/"
  ],
  "Collections": [],
  "CommercialConditionId": 1,
  "ComplementName": "",
  "DetailUrl": "/caixa-de-areia-azul-petmate/p",
  "Dimension": {
    "cubicweight": 0.2083,
    "height": 10,
    "length": 10,
    "weight": 10,
    "width": 10
  },
  "EstimatedDateArrival": null,
  "Id": 310118450,
  "ImageUrl": "https://lojadobreno.vteximg.com.br/arquivos/ids/155451-55-55/caixa-areia-azul-petmate.jpg?v=637139451191670000",
  "Images": [
    {
      "FileId": 155451,
      "ImageName": null,
      "ImageUrl": "https://lojadobreno.vteximg.com.br/arquivos/ids/155451/caixa-areia-azul-petmate.jpg?v=637139451191670000"
    }
  ],
  "InformationSource": null,
  "IsActive": true,
  "IsBrandActive": true,
  "IsDirectCategoryActive": true,
  "IsGiftCardRecharge": false,
  "IsInventoried": true,
  "IsKit": false,
  "IsProductActive": true,
  "IsTransported": true,
  "KeyWords": "",
  "KitItems": [],
  "ManufacturerCode": "123",
  "MeasurementUnit": "un",
  "ModalType": null,
  "NameComplete": "Caixa de Areia Azul Petmate sku test",
  "PositionsInClusters": {
    "151": 1,
    "158": 2
  },
  "ProductCategories": {
    "1": "Alimentação",
    "3": "Higiene",
    "15": "Caixa de Areia"
  },
  "ProductCategoryIds": "/3/15/",
  "ProductClusterHighlights": {
    "151": "asdfghj"
  },
  "ProductClusterNames": {
    "151": "asdfghj",
    "158": "Coleção halloween"
  },
  "ProductClustersIds": "151,158",
  "ProductDescription": "",
  "ProductFinalScore": 0,
  "ProductGlobalCategoryId": 5000,
  "ProductId": 2,
  "ProductIsVisible": true,
  "ProductName": "Caixa de Areia Azul Petmate",
  "ProductRefId": "",
  "ProductSpecifications": [],
  "RealDimension": {
    "realCubicWeight": 0,
    "realHeight": 0,
    "realLength": 0,
    "realWeight": 0,
    "realWidth": 0
  },
  "ReleaseDate": "2020-01-06T00:00:00Z",
  "RewardValue": 0,
  "SalesChannels": [
    1,
    3
  ],
  "Services": [],
  "ShowIfNotAvailable": true,
  "SkuName": "sku test",
  "SkuSellers": [
    {
      "FreightCommissionPercentage": 0,
      "IsActive": true,
      "ProductCommissionPercentage": 0,
      "SellerId": "1",
      "SellerStockKeepingUnitId": "310118450",
      "StockKeepingUnitId": 310118450
    }
  ],
  "SkuSpecifications": [],
  "TaxCode": "",
  "UnitMultiplier": 1,
  "Videos": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlternateIdValues|[string]|true|none|Array with values of alternative SKU IDs.|
|AlternateIds|[AlternateIds](#schemaalternateids)|true|none|Array with alternate SKU IDs, such as EAN and RefId.|
|Attachments|[[Attachment](#schemaattachment)]|true|none|Array with Attachments ID that are related to the SKU.|
|BrandId|string|true|none|Brand ID.|
|BrandName|string|true|none|Brand Name.|
|CSCIdentification|string \| null|true|none|SKU Seller Identification.|
|Categories|[string]|true|none|Categories of the related product.|
|CategoriesFullPath|[string]|false|none|Path of Categories of the related product.|
|Collections|[string]|true|none|Array with Collections IDs that are related to the Product.|
|CommercialConditionId|integer(int32)|true|none|SKU Commercial Condition ID.|
|ComplementName|string|false|none|Product Complement Name.|
|DetailUrl|string|true|none|Product slug.|
|Dimension|[Dimension](#schemadimension)|true|none|Object containing the SKU dimensions to be used on the shipping calculation.|
|EstimatedDateArrival|string \| null|true|none|SKU estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format, when the product is on pre-sale. You must take into consideration both the launch date and the freight calculation for the arrival date.|
|Id|integer(int32)|true|none|SKU ID.|
|ImageUrl|string|true|none|SKU image URL.|
|Images|[[Image](#schemaimage)]|true|none|Array of objects with SKU image details.|
|InformationSource|string \| null|true|none|Information Source.|
|IsActive|boolean|true|none|Defines if the SKU is active or not.|
|IsDirectCategoryActive|boolean|false|none|Indicates if the direct Product Category is active or not.|
|IsGiftCardRecharge|boolean|true|none|Defines if the purchase of the SKU will generate reward value for the customer.|
|IsInventoried|boolean|true|none|**Deprecated.**|
|IsKit|boolean|true|none|Defines if the SKU is part of a bundle.|
|IsProductActive|boolean|false|none|Defines if the product is active or not.|
|IsTransported|boolean|true|none|**Deprecated.**|
|KeyWords|string \| null|false|none|Keywords related to the product.|
|KitItems|[string]|true|none|Array with SKU IDs of bundle components.|
|ManufacturerCode|string|true|none|Product Supplier ID.|
|MeasurementUnit|string|true|none|Measurement unit.|
|ModalType|string \| null|true|none|Links an unusual type of SKU to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy).|
|NameComplete|string|true|none|Product Name and SKU Name combined.|
|PositionsInClusters|object|false|none|Product Clusters position in each Cluster. Structure: "{Product Cluster ID}": {Position}.<br><br>`{Product Cluster ID}` is a string, while `{Position}` is an integer.|
|ProductCategories|object|true|none|Object containing product categories. Structure: "{CategoryID}": "{CategoryName}". Both the key and the value are strings.|
|ProductCategoryIds|string|true|none|Category path composed by category IDs separated by `/`.|
|ProductClusterHighlights|object|false|none|Product Clusters Highlights. Structure: "{Product Cluster ID}": "{Product Cluster Name}". Both the key and the value are strings.|
|ProductClusterNames|object|false|none|Product Clusters Names. Structure: "{Product Cluster ID}": "{Product Cluster Name}". Both the key and the value are strings.|
|ProductClustersIds|string|true|none|Product Cluster IDs separated by comma (`,`).|
|ProductDescription|string|true|none|Product Description. HTML is allowed.|
|ProductFinalScore|integer|false|none|Product Final Score.|
|ProductGlobalCategoryId|integer \| null|true|none|Product Global Category ID.|
|ProductId|integer(int32)|true|none|Product ID.|
|ProductIsVisible|boolean|false|none|Defines if the product is visible or not.|
|ProductName|string|true|none|Product Name.|
|ProductRefId|string|false|none|Product Reference ID.|
|ProductSpecifications|[[ProductSpecification](#schemaproductspecification)]|true|none|Array with related Product Specifications.|
|RealDimension|[RealDimension](#schemarealdimension)|true|none|Object containing the real SKU dimensions, which appear in the product page.|
|ReleaseDate|string \| null|false|none|Release date of the product.|
|RewardValue|number|true|none|Reward value related to the SKU.|
|SalesChannels|[integer(int32)]|true|none|Array of trade policy IDs.|
|Services|[string]|true|none|Array with Service IDs that are related to the SKU.|
|ShowIfNotAvailable|boolean|false|none|Defines if the product will be shown if it is not available.|
|SkuName|string|true|none|SKU Name.|
|SkuSellers|[[SkuSeller](#schemaskuseller)]|true|none|Array with related Sellers data.|
|SkuSpecifications|[[SkuSpecification](#schemaskuspecification)]|true|none|Array with related SKU Specifications.|
|TaxCode|string|false|none|SKU Tax Code.|
|UnitMultiplier|number|true|none|This is the multiple number of SKU. If the Multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward.|

<h2 id="tocS_GetSKUandContext">GetSKUandContext</h2>
<!-- backwards compatibility -->
<a id="schemagetskuandcontext"></a>
<a id="schema_GetSKUandContext"></a>
<a id="tocSgetskuandcontext"></a>
<a id="tocsgetskuandcontext"></a>

```json
{
  "AlternateIdValues": [
    "1"
  ],
  "AlternateIds": {
    "RefId": "1"
  },
  "Attachments": [],
  "BrandId": "2000005",
  "BrandName": "Petmate",
  "CSCIdentification": null,
  "Categories": [],
  "CategoriesFullPath": [
    "/3/15/",
    "/3/",
    "/1/"
  ],
  "Collections": [],
  "CommercialConditionId": 1,
  "ComplementName": "",
  "DetailUrl": "/caixa-de-areia-azul-petmate/p",
  "Dimension": {
    "cubicweight": 0.2083,
    "height": 10,
    "length": 10,
    "weight": 10,
    "width": 10
  },
  "EstimatedDateArrival": null,
  "Id": 310118450,
  "ImageUrl": "https://lojadobreno.vteximg.com.br/arquivos/ids/155451-55-55/caixa-areia-azul-petmate.jpg?v=637139451191670000",
  "Images": [
    {
      "FileId": 155451,
      "ImageName": null,
      "ImageUrl": "https://lojadobreno.vteximg.com.br/arquivos/ids/155451/caixa-areia-azul-petmate.jpg?v=637139451191670000"
    }
  ],
  "InformationSource": null,
  "IsActive": true,
  "IsBrandActive": true,
  "IsDirectCategoryActive": true,
  "IsGiftCardRecharge": false,
  "IsInventoried": true,
  "IsKit": false,
  "IsProductActive": true,
  "IsTransported": true,
  "KeyWords": "",
  "KitItems": [],
  "ManufacturerCode": "123",
  "MeasurementUnit": "un",
  "ModalType": null,
  "NameComplete": "Caixa de Areia Azul Petmate sku test",
  "PositionsInClusters": {
    "151": 1,
    "158": 2
  },
  "ProductCategories": {
    "1": "Alimentação",
    "3": "Higiene",
    "15": "Caixa de Areia"
  },
  "ProductCategoryIds": "/3/15/",
  "ProductClusterHighlights": {
    "151": "asdfghj"
  },
  "ProductClusterNames": {
    "151": "asdfghj",
    "158": "Coleção halloween"
  },
  "ProductClustersIds": "151,158",
  "ProductDescription": "",
  "ProductFinalScore": 0,
  "ProductGlobalCategoryId": 5000,
  "ProductId": 2,
  "ProductIsVisible": true,
  "ProductName": "Caixa de Areia Azul Petmate",
  "ProductRefId": "",
  "ProductSpecifications": [],
  "RealDimension": {
    "realCubicWeight": 0,
    "realHeight": 0,
    "realLength": 0,
    "realWeight": 0,
    "realWidth": 0
  },
  "ReleaseDate": "2020-01-06T00:00:00Z",
  "RewardValue": 0,
  "SalesChannels": [
    1,
    3
  ],
  "Services": [],
  "ShowIfNotAvailable": true,
  "SkuName": "sku test",
  "SkuSellers": [
    {
      "FreightCommissionPercentage": 0,
      "IsActive": true,
      "ProductCommissionPercentage": 0,
      "SellerId": "1",
      "SellerStockKeepingUnitId": "310118450",
      "StockKeepingUnitId": 310118450
    }
  ],
  "SkuSpecifications": [],
  "TaxCode": "",
  "UnitMultiplier": 1,
  "Videos": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlternateIdValues|[string]|true|none|Array with values of alternative SKU IDs.|
|AlternateIds|[AlternateIds](#schemaalternateids)|true|none|Array with alternate SKU IDs, such as EAN and RefId.|
|Attachments|[[Attachment](#schemaattachment)]|true|none|Array with Attachments ID that are related to the SKU.|
|BrandId|string|true|none|Product Brand ID.|
|BrandName|string|true|none|Product Brand Name.|
|CSCIdentification|string \| null|true|none|SKU Seller identification.|
|Categories|[string]|true|none|Array with Categories from the related Product.|
|Collections|[string]|true|none|Array with Collections ID that are related to the Product.|
|CommercialConditionId|integer(int32)|true|none|SKU Commercial Condition ID.|
|ComplementName|string|false|none|Product Complement Name.|
|DetailUrl|string|true|none|Product URL.|
|Dimension|[Dimension](#schemadimension)|true|none|Object containing the SKU dimensions to be used on the shipping calculation.|
|EstimatedDateArrival|string \| null|true|none|To add the product as pre-sale, enter the product estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format. You must take into consideration both the launch date and the freight calculation for the arrival date.|
|Id|integer(int32)|true|none|SKU ID.|
|ImageUrl|string|true|none|SKU image URL.|
|Images|[[Image](#schemaimage)]|true|none|Array with SKU images.|
|InformationSource|string \| null|true|none|Information Source.|
|IsActive|boolean|true|none|Defines if the SKU is active or not.|
|IsGiftCardRecharge|boolean|true|none|Defines if the purchase will generate a reward.|
|IsInventoried|boolean \| null|true|none|**Deprecated.**|
|IsKit|boolean|true|none|Defines if the SKU is part of a bundle.|
|IsProductActive|boolean|false|none|Defines if the product is active or not.|
|IsTransported|boolean \| null|true|none|**Deprecated.**|
|KeyWords|string \| null|false|none|Keywords related to the product.|
|KitItems|[string]|true|none|Array with SKU IDs of bundle components.|
|ManufacturerCode|string|true|none|Product Supplier ID.|
|MeasurementUnit|string|true|none|SKU Measurement Unit.|
|ModalType|string \| null|true|none|Modal Type.|
|NameComplete|string|true|none|Product Name and SKU Name concatenated.|
|ProductCategories|object|true|none|Object containing product categories. Structure: "{CategoryID}": "{CategoryName}".|
|ProductCategoryIds|string|true|none|Category Hierarchy with Category IDs.|
|ProductClustersIds|string|true|none|Product Clusters IDs.|
|ProductDescription|string|true|none|Product Description. HTML is allowed.|
|ProductFinalScore|integer|false|none|Product Final Score.|
|ProductGlobalCategoryId|integer \| null|true|none|Global Category ID.|
|ProductId|integer(int32)|true|none|ID of the related Product.|
|ProductIsVisible|boolean|false|none|Defines if the product is visible or not.|
|ProductName|string|true|none|Product Name.|
|ProductRefId|string|false|none|Reference ID of the related Product.|
|ProductSpecifications|[[ProductSpecification](#schemaproductspecification)]|true|none|Array with related Product Specifications.|
|RealDimension|[RealDimension](#schemarealdimension)|true|none|Object containing the real SKU dimensions, which appear in the product page.|
|ReleaseDate|string \| null|false|none|Release date of the product.|
|RewardValue|number|true|none|Reward value related to the SKU.|
|SalesChannels|[integer(int32)]|true|none|Array with the ID of all the Sales Channels that are related to the product.|
|Services|[string]|true|none|Array with Service IDs that are related to the SKU.|
|ShowIfNotAvailable|boolean|false|none|Defines if the product will be shown if it is not available.|
|SkuName|string|true|none|SKU Name.|
|SkuSellers|[[SkuSeller](#schemaskuseller)]|true|none|Array with SKU Sellers data.|
|SkuSpecifications|[[SkuSpecification](#schemaskuspecification)]|true|none|Array with related SKU Specifications.|
|TaxCode|string|false|none|SKU Tax Code.|
|UnitMultiplier|number|true|none|This is the multiple number of SKU. If the Multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward.|

<h2 id="tocS_GetSpecFieldValue">GetSpecFieldValue</h2>
<!-- backwards compatibility -->
<a id="schemagetspecfieldvalue"></a>
<a id="schema_GetSpecFieldValue"></a>
<a id="tocSgetspecfieldvalue"></a>
<a id="tocsgetspecfieldvalue"></a>

```json
{
  "FieldValueId": 52,
  "IsActive": true,
  "Position": 1,
  "Value": "0 a 6 meses"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldValueId|integer(int32)|true|none|Specification Field Value ID.|
|IsActive|boolean|true|none|Defines if the Specification Field is active (`true`) or inactive (`false`).|
|Position|integer(int32)|true|none|Specification Field Value Position.|
|Value|string|true|none|Specification Field Value.|

<h2 id="tocS_GetorUpdateProductSpecification">GetorUpdateProductSpecification</h2>
<!-- backwards compatibility -->
<a id="schemagetorupdateproductspecification"></a>
<a id="schema_GetorUpdateProductSpecification"></a>
<a id="tocSgetorupdateproductspecification"></a>
<a id="tocsgetorupdateproductspecification"></a>

```json
{
  "Id": 30,
  "Name": "Material",
  "Value": [
    "Iron",
    "Plastic"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|ID of the Specification.|
|Name|string|false|none|Name of the Specification.|
|Value|[string]|true|none|Array with Specification values.|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "FileId": 168952,
  "ImageName": "",
  "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168952/7508800GG.jpg"
}
```

Object containing SKU images details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileId|integer(int32)|true|none|SKU image ID.|
|ImageName|string \| null|true|none|Image label.|
|ImageUrl|string|true|none|Image URL.|

<h2 id="tocS_ProductSpecification">ProductSpecification</h2>
<!-- backwards compatibility -->
<a id="schemaproductspecification"></a>
<a id="schema_ProductSpecification"></a>
<a id="tocSproductspecification"></a>
<a id="tocsproductspecification"></a>

```json
{
  "FieldId": 7,
  "FieldName": "Faixa Etária",
  "FieldValueIds": [
    58,
    56,
    55,
    52
  ],
  "FieldValues": [
    "5 a 6 anos",
    "7 a 8 anos",
    "9 a 10 anos",
    "Acima de 10 anos"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldId|integer(int32)|true|none|Specification ID.|
|FieldName|string|true|none|Specification Name.|
|FieldValueIds|[integer(int32)]|true|none|Array with related Specification Values IDs.|
|FieldValues|[string]|true|none|Array with related Specification Values.|

<h2 id="tocS_RealDimension">RealDimension</h2>
<!-- backwards compatibility -->
<a id="schemarealdimension"></a>
<a id="schema_RealDimension"></a>
<a id="tocSrealdimension"></a>
<a id="tocsrealdimension"></a>

```json
{
  "realCubicWeight": 274.1375,
  "realHeight": 241,
  "realLength": 65,
  "realWeight": 9800,
  "realWidth": 105
}
```

Object containing the real SKU dimensions, which appear in the product page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|realCubicWeight|number|true|none|Real SKU Cubic Weight.|
|realHeight|number|true|none|Real SKU Height.|
|realLength|number|true|none|Real SKU Length.|
|realWeight|number|true|none|Real SKU Weight.|
|realWidth|number|true|none|Real SKU Width.|

<h2 id="tocS_SKUFile">SKUFile</h2>
<!-- backwards compatibility -->
<a id="schemaskufile"></a>
<a id="schema_SKUFile"></a>
<a id="tocSskufile"></a>
<a id="tocsskufile"></a>

```json
"string"
```

The image file has a size limit of 3200 x 3200 pixels.

<h2 id="tocS_SKUFileURL">SKUFileURL</h2>
<!-- backwards compatibility -->
<a id="schemaskufileurl"></a>
<a id="schema_SKUFileURL"></a>
<a id="tocSskufileurl"></a>
<a id="tocsskufileurl"></a>

```json
{
  "IsMain": true,
  "Label": "Main",
  "Name": "Nike-Red-Janoski-1",
  "Text": "Nike-Red-Janoski",
  "Url": "https://m.media-amazon.com/images/I/610G2-sJx5L._AC_UX695_.jpg"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsMain|boolean|false|none|Defines if the Image is the main image of the SKU.|
|Label|string|false|none|SKU image label.|
|Name|string|true|none|SKU image name.|
|Text|string \| null|false|none|General text of the image.|
|Url|string|true|none|External Image's URL.  The URL must start with the protocol identifier (`http://` or `https://`) and end with the file extension (`.jpg`, `.png` or `.gif`).|

<h2 id="tocS_SKUService">SKUService</h2>
<!-- backwards compatibility -->
<a id="schemaskuservice"></a>
<a id="schema_SKUService"></a>
<a id="tocSskuservice"></a>
<a id="tocsskuservice"></a>

```json
{
  "Id": 1,
  "IsActive": false,
  "Name": "name",
  "SkuId": 1,
  "SkuServiceTypeId": 1,
  "SkuServiceValueId": 1,
  "Text": "text"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer|false|none|SKU Service ID.|
|IsActive|boolean|false|none|Defines if the SKU Service is active or not.|
|Name|string|false|none|SKU Service Name. Maximum of 50 characters.|
|SkuId|integer|false|none|SKU ID.|
|SkuServiceTypeId|integer|false|none|SKU Service Type ID.|
|SkuServiceValueId|integer|false|none|SKU Service Value ID.|
|Text|string|false|none|Internal description of the SKU Service. Maximum of 100 characters.|

<h2 id="tocS_SKUServiceTypeRequest">SKUServiceTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaskuservicetyperequest"></a>
<a id="schema_SKUServiceTypeRequest"></a>
<a id="tocSskuservicetyperequest"></a>
<a id="tocsskuservicetyperequest"></a>

```json
{
  "IsActive": true,
  "IsGiftCard": false,
  "IsRequired": false,
  "Name": "Test API Sku Services",
  "ShowOnAttachmentFront": false,
  "ShowOnCartFront": false,
  "ShowOnFileUpload": false,
  "ShowOnProductFront": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsActive|boolean|true|none|Defines if the SKU Service Type is active or not.|
|IsGiftCard|boolean|true|none|Defines if the SKU Service Type is displayed as a Gift Card.|
|IsRequired|boolean|true|none|Defines if the SKU Service type is mandatory.|
|Name|string|true|none|SKU Service Type Name. Maximum of 100 characters.|
|ShowOnAttachmentFront|boolean|true|none|Defines if the SKU Service Type has an attachment.|
|ShowOnCartFront|boolean|true|none|Defines if the SKU Service Type is displayed on the cart screen.|
|ShowOnFileUpload|boolean|true|none|Defines if the SKU Service Type can be associated with an attachment or not.|
|ShowOnProductFront|boolean|true|none|**Deprecated.** Deprecated|

<h2 id="tocS_SKUServiceTypeResponse">SKUServiceTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaskuservicetyperesponse"></a>
<a id="schema_SKUServiceTypeResponse"></a>
<a id="tocSskuservicetyperesponse"></a>
<a id="tocsskuservicetyperesponse"></a>

```json
{
  "Id": 2,
  "IsActive": true,
  "IsGiftCard": true,
  "IsRequired": true,
  "Name": "Test API SKU Services",
  "ShowOnAttachmentFront": true,
  "ShowOnCartFront": true,
  "ShowOnFileUpload": true,
  "ShowOnProductFront": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer|false|none|SKU Service Type ID.|
|IsActive|boolean|false|none|Defines if the SKU Service Type is active or not.|
|IsGiftCard|boolean|false|none|Defines if the SKU Service Type is displayed as a Gift Card.|
|IsRequired|boolean|false|none|Defines if the SKU Service type is mandatory.|
|Name|string|false|none|SKU Service Type Name. Maximum of 100 characters.|
|ShowOnAttachmentFront|boolean|false|none|Defines if the SKU Service Type has an attachment.|
|ShowOnCartFront|boolean|false|none|Defines if the SKU Service Type is displayed on the cart screen.|
|ShowOnFileUpload|boolean|false|none|Defines if the SKU Service Type can be associated with an attachment or not.|
|ShowOnProductFront|boolean|false|none|**Deprecated.** Deprecated.|

<h2 id="tocS_SKUServiceValueRequest">SKUServiceValueRequest</h2>
<!-- backwards compatibility -->
<a id="schemaskuservicevaluerequest"></a>
<a id="schema_SKUServiceValueRequest"></a>
<a id="tocSskuservicevaluerequest"></a>
<a id="tocsskuservicevaluerequest"></a>

```json
{
  "Cost": 10.5,
  "Name": "Test ServiceValue API",
  "SkuServiceTypeId": 2,
  "Value": 10.5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cost|number|true|none|SKU Service Value cost.|
|Name|string|true|none|SKU Service Value name. Maximum of 100 characters.|
|SkuServiceTypeId|integer|true|none|SKU Service Type ID.|
|Value|number|true|none|SKU Service Value value.|

<h2 id="tocS_SKUServiceValueResponse">SKUServiceValueResponse</h2>
<!-- backwards compatibility -->
<a id="schemaskuservicevalueresponse"></a>
<a id="schema_SKUServiceValueResponse"></a>
<a id="tocSskuservicevalueresponse"></a>
<a id="tocsskuservicevalueresponse"></a>

```json
{
  "Cost": 10.5,
  "Id": 2,
  "Name": "Test ServiceValue API",
  "SkuServiceTypeId": 2,
  "Value": 10.5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cost|number|true|none|SKU Service Value cost.|
|Id|integer|false|none|SKU Service Value ID.|
|Name|string|true|none|SKU Service Value name. Maximum of 100 characters.|
|SkuServiceTypeId|integer|true|none|SKU Service Type ID.|
|Value|number|true|none|SKU Service Value value.|

<h2 id="tocS_SKUSpecificationResponse">SKUSpecificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaskuspecificationresponse"></a>
<a id="schema_SKUSpecificationResponse"></a>
<a id="tocSskuspecificationresponse"></a>
<a id="tocsskuspecificationresponse"></a>

```json
{
  "FieldId": 193,
  "FieldValueId": 360,
  "Id": 1505,
  "SkuId": 1234568387,
  "Text": "Size 10"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldId|integer|false|none|Specification ID.|
|FieldValueId|integer|false|none|Specification Value ID. Required only for `FieldTypeId` as `5`, `6` and `7`.|
|Id|integer|false|none|ID of the association of the specification and the SKU. This ID is used to update or delete the specification.|
|SkuId|integer|false|none|SKU ID.|
|Text|string|false|none|Value of specification. Only for `FieldTypeId` different from `5`, `6` and `7`.|

<h2 id="tocS_SkuComplement">SkuComplement</h2>
<!-- backwards compatibility -->
<a id="schemaskucomplement"></a>
<a id="schema_SkuComplement"></a>
<a id="tocSskucomplement"></a>
<a id="tocsskucomplement"></a>

```json
[
  {
    "ComplementTypeId": 1,
    "Id": 61,
    "ParentSkuId": 1,
    "SkuId": 7
  }
]
```

<h2 id="tocS_SkuKit">SkuKit</h2>
<!-- backwards compatibility -->
<a id="schemaskukit"></a>
<a id="schema_SkuKit"></a>
<a id="tocSskukit"></a>
<a id="tocsskukit"></a>

```json
{
  "Id": 7,
  "Quantity": 1,
  "StockKeepingUnitId": 1,
  "StockKeepingUnitParent": 7,
  "UnitPrice": 50
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer|false|none|SKU Kit ID, same as `StockKeepingUnitParent`.|
|Quantity|integer|false|none|Component quantity.|
|StockKeepingUnitId|integer|false|none|SKU ID of the kit component.|
|StockKeepingUnitParent|integer|false|none|Parent SKU ID.|
|UnitPrice|integer|false|none|Component price per unit.|

<h2 id="tocS_SkuSeller">SkuSeller</h2>
<!-- backwards compatibility -->
<a id="schemaskuseller"></a>
<a id="schema_SkuSeller"></a>
<a id="tocSskuseller"></a>
<a id="tocsskuseller"></a>

```json
{
  "FreightCommissionPercentage": 0,
  "IsActive": true,
  "ProductCommissionPercentage": 0,
  "SellerId": "1",
  "SellerStockKeepingUnitId": "2001773",
  "StockKeepingUnitId": 2001773
}
```

Object containing related SKU Sellers data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FreightCommissionPercentage|number|true|none|Registered value for Seller Freight Commission.|
|IsActive|boolean|true|none|Defines if the SKU is active.|
|ProductCommissionPercentage|number|true|none|Registered value for Seller Product Commission.|
|SellerId|string|true|none|SKU Seller ID. This is the ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.|
|SellerStockKeepingUnitId|string|true|none|SKU ID for the SKU Seller.|
|StockKeepingUnitId|integer(int32)|true|none|SKU ID.|

<h2 id="tocS_SkuSpecification">SkuSpecification</h2>
<!-- backwards compatibility -->
<a id="schemaskuspecification"></a>
<a id="schema_SkuSpecification"></a>
<a id="tocSskuspecification"></a>
<a id="tocsskuspecification"></a>

```json
{
  "FieldId": 102,
  "FieldName": "Cor",
  "FieldValueIds": [
    266
  ],
  "FieldValues": [
    "Padrão"
  ]
}
```

Object containing related SKU Specifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldId|integer(int32)|true|none|Specification ID.|
|FieldName|string|true|none|Specification Name.|
|FieldValueIds|[integer(int32)]|true|none|Array with related Specification Values IDs.|
|FieldValues|[string]|true|none|Array with related Specification Values.|

<h2 id="tocS_SkulistbyProductId">SkulistbyProductId</h2>
<!-- backwards compatibility -->
<a id="schemaskulistbyproductid"></a>
<a id="schema_SkulistbyProductId"></a>
<a id="tocSskulistbyproductid"></a>
<a id="tocsskulistbyproductid"></a>

```json
{
  "ActivateIfPossible": true,
  "CommercialConditionId": 1,
  "CubicWeight": 1,
  "DateUpdated": "2021-10-29T18:25:00",
  "EstimatedDateArrival": null,
  "FlagKitItensSellApart": false,
  "Height": 6.5,
  "Id": 1,
  "InternalNote": null,
  "IsActive": true,
  "IsGiftCardRecharge": false,
  "IsInventoried": true,
  "IsKit": false,
  "IsPersisted": true,
  "IsTransported": true,
  "Length": 24,
  "ManufacturerCode": "",
  "MeasurementUnit": "un",
  "ModalId": 1,
  "ModalType": null,
  "Name": "Ração Royal Canin Feline Urinary 500g",
  "Position": 1,
  "ProductId": 1,
  "RealHeight": 2.2,
  "RealLength": 4.4,
  "RealWeightKg": 1.1,
  "RealWidth": 3.3,
  "RefId": "0001",
  "ReferenceStockKeepingUnitId": null,
  "RewardValue": null,
  "UnitMultiplier": 300,
  "WeightKg": 550,
  "Width": 14,
  "isKitOptimized": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivateIfPossible|boolean|false|none|When set to `true`, this attribute will automatically update the SKU as active once associated with an image or an active component.|
|CommercialConditionId|integer(int32)|false|none|SKU Commercial Condition ID.|
|CubicWeight|number|false|none|[Cubic weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128).|
|DateUpdated|string|false|none|Date when the product was updated for the most recent time.|
|EstimatedDateArrival|string \| null|false|none|SKU estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format, when the product is on pre-sale. You must take into consideration both the launch date and the freight calculation for the arrival date.|
|FlagKitItensSellApart|boolean|false|none|Defines if the SKU bundle items can be sold separately.|
|Height|number|false|none|SKU Height.|
|Id|integer(int32)|false|none|SKU ID.|
|InternalNote|string \| null|false|none|Internal note.|
|IsActive|boolean|false|none|Defines if the SKU is active or not.|
|IsDynamicKit|string \| null|false|none|**Deprecated.**|
|IsGiftCardRecharge|boolean \| null|false|none|Defines if the purchase of the SKU will generate reward value for the customer.|
|IsInventoried|boolean \| null|false|none|**Deprecated.**|
|IsKit|boolean|false|none|Flag to set whether the product SKU is made up of one or more SKUs, thereby becoming a bundle. Must be enabled if you are adding a bundle. Once activated, the flag cannot be reverted.|
|IsPersisted|boolean|false|none|Defines if the SKU is persisted.|
|IsRemoved|boolean|false|none|**Deprecated.** Defines if the SKU is removed.|
|IsTransported|boolean \| null|false|none|**Deprecated.**|
|Length|number|false|none|SKU Length.|
|ManufacturerCode|string|false|none|Product Supplier ID.|
|MeasurementUnit|string|false|none|Measurement unit.|
|ModalId|integer(int32)|false|none|Delivery Method (Modal Type) ID.|
|ModalType|string \| null|false|none|Links an unusual type of SKU to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy).|
|Name|string|false|none|SKU Name.|
|Position|integer(int32)|false|none|SKU Position.|
|ProductId|integer(int32)|false|none|Product ID.|
|RealHeight|number \| null|false|none|Real SKU Height.|
|RealLength|number \| null|false|none|Real SKU Length.|
|RealWeightKg|number \| null|false|none|Real Weight of the SKU in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.|
|RealWidth|number \| null|false|none|Real SKU Width.|
|RefId|string|false|none|Product Reference ID.|
|ReferenceStockKeepingUnitId|string \| null|false|none|SKU Reference ID.|
|RewardValue|number \| null|false|none|Reward value related to the SKU.|
|UnitMultiplier|number|false|none|This is the multiple number of SKU. If the Multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward.|
|WeightKg|number \| null|false|none|Weight of the SKU in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.|
|Width|number|false|none|SKU Width.|
|isKitOptimized|boolean|false|none|Defines if the SKU is a Optimized bundle.|

<h2 id="tocS_SpecificationGroupInsertRequest">SpecificationGroupInsertRequest</h2>
<!-- backwards compatibility -->
<a id="schemaspecificationgroupinsertrequest"></a>
<a id="schema_SpecificationGroupInsertRequest"></a>
<a id="tocSspecificationgroupinsertrequest"></a>
<a id="tocsspecificationgroupinsertrequest"></a>

```json
{
  "CategoryId": 1,
  "Name": "GroupName1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryId|integer(int32)|true|none|Category ID.|
|Name|string|true|none|Specification Group Name.|

<h2 id="tocS_SpecificationsGroup">SpecificationsGroup</h2>
<!-- backwards compatibility -->
<a id="schemaspecificationsgroup"></a>
<a id="schema_SpecificationsGroup"></a>
<a id="tocSspecificationsgroup"></a>
<a id="tocsspecificationsgroup"></a>

```json
{
  "CategoryId": 1,
  "Id": 4,
  "Name": "Sizes",
  "Position": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryId|integer \| null|true|none|Category ID.|
|Id|integer(int32)|true|none|Specification Group ID.|
|Name|string|true|none|Specification Group Name.|
|Position|integer(int32) \| null|true|none|Specification Group Position.|

<h2 id="tocS_SpecificationsInsertFieldRequest">SpecificationsInsertFieldRequest</h2>
<!-- backwards compatibility -->
<a id="schemaspecificationsinsertfieldrequest"></a>
<a id="schema_SpecificationsInsertFieldRequest"></a>
<a id="tocSspecificationsinsertfieldrequest"></a>
<a id="tocsspecificationsinsertfieldrequest"></a>

```json
{
  "CategoryId": 4,
  "DefaultValue": null,
  "Description": "Composition of the product.",
  "FieldGroupId": 20,
  "FieldGroupName": "Clothes specifications",
  "FieldId": 88,
  "FieldTypeId": 1,
  "FieldValueId": 1,
  "IsActive": true,
  "IsFilter": true,
  "IsOnProductDetails": false,
  "IsRequired": true,
  "IsSideMenuLinkActive": true,
  "IsStockKeepingUnit": false,
  "IsTopMenuLinkActive": true,
  "IsWizard": false,
  "Name": "Material",
  "Position": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryId|integer \| null|true|none|Category ID.|
|DefaultValue|string \| null|true|none|Specification Field default Value.|
|Description|string \| null|true|none|Specification Field Description.|
|FieldGroupId|integer(int32)|true|none|Specification Field Group ID.|
|FieldGroupName|string|true|none|Specification Field Group Name.|
|FieldId|integer \| null|true|none|Specification Field ID.|
|FieldTypeId|integer(int32)|true|none|Specification Field Type ID.|
|FieldValueId|integer \| null|true|none|Specification Field Value ID.|
|IsActive|boolean|true|none|Defines if the Specification Field is active. The default value is `true`.|
|IsFilter|boolean|true|none|Store Framework - Deprecated.<br>Legacy CMS Portal - To allow the specification to be used as a facet (filter) on the search navigation bar.<br>|
|IsOnProductDetails|boolean|true|none|Store Framework - Deprecated.<br>Legacy CMS Portal -If specification is visible on the product page.<br>|
|IsRequired|boolean|true|none|Makes the Specification Field mandatory (`true`) or optional (`false`).|
|IsSideMenuLinkActive|boolean|true|none|Store Framework - Deprecated.<br>Legacy CMS Portal - To make the specification field clickable in the search navigation bar.<br>|
|IsStockKeepingUnit|boolean|true|none|If `true`, it will be added as a SKU specification. If `false`, it will be added as a product specification field.|
|IsTopMenuLinkActive|boolean|true|none|Store Framework - Deprecated.<br>Legacy CMS Portal - To make the specification visible in the store's upper menu.<br>|
|IsWizard|boolean|true|none|**Deprecated.** Deprecated field.|
|Name|string|true|none|Specification Field ID.|
|Position|integer(int32)|true|none|Specification Field Position.|

<h2 id="tocS_SpecificationsInsertFieldUpdateRequest">SpecificationsInsertFieldUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaspecificationsinsertfieldupdaterequest"></a>
<a id="schema_SpecificationsInsertFieldUpdateRequest"></a>
<a id="tocSspecificationsinsertfieldupdaterequest"></a>
<a id="tocsspecificationsinsertfieldupdaterequest"></a>

```json
{
  "CategoryId": 0,
  "DefaultValue": "string",
  "Description": "string",
  "FieldGroupId": 0,
  "FieldGroupName": "string",
  "FieldId": 0,
  "FieldTypeId": 0,
  "FieldValueId": 0,
  "IsActive": true,
  "IsFilter": true,
  "IsOnProductDetails": true,
  "IsRequired": true,
  "IsSideMenuLinkActive": false,
  "IsStockKeepingUnit": true,
  "IsTopMenuLinkActive": true,
  "IsWizard": true,
  "Name": "string",
  "Position": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryId|integer \| null|true|none|Category ID.|
|DefaultValue|string \| null|true|none|Specification Field default Value.|
|Description|string \| null|true|none|Specification Field Description.|
|FieldGroupId|integer(int32)|true|none|Specification Field Group ID.|
|FieldGroupName|string|true|none|Specification Field Group Name.|
|FieldId|integer \| null|true|none|Specification Field ID.|
|FieldTypeId|integer(int32)|true|none|Specification Field Type ID.|
|FieldValueId|integer \| null|false|none|Specification Field Value ID.|
|IsActive|boolean|true|none|Enables(`true`) or disables (`false`) the Specification Field.|
|IsFilter|boolean|true|none|Store Framework - Deprecated.<br>Legacy CMS Portal - To allow the specification to be used as a facet (filter) on the search navigation bar.<br>|
|IsOnProductDetails|boolean|true|none|Store Framework - Deprecated.<br>Legacy CMS Portal -If specification is visible on the product page.<br>|
|IsRequired|boolean|true|none|Makes the Specification Field mandatory (`true`) or optional (`false`).|
|IsSideMenuLinkActive|boolean|true|none|Store Framework - Deprecated.<br>Legacy CMS Portal - To make the specification field clickable in the search navigation bar.<br>|
|IsStockKeepingUnit|boolean|true|none|If `true`, it will be added as a SKU specification field. If `false`, it will be added as a product specification field.|
|IsTopMenuLinkActive|boolean|true|none|Store Framework - Deprecated.<br>Legacy CMS Portal - To make the specification visible in the store's upper menu.<br>|
|IsWizard|boolean|true|none|**Deprecated.** Deprecated field.|
|Name|string|true|none|Specification Field ID.|
|Position|integer(int32)|true|none|Specification Field Position.|

<h2 id="tocS_SpecificationsInsertFieldValueRequest">SpecificationsInsertFieldValueRequest</h2>
<!-- backwards compatibility -->
<a id="schemaspecificationsinsertfieldvaluerequest"></a>
<a id="schema_SpecificationsInsertFieldValueRequest"></a>
<a id="tocSspecificationsinsertfieldvaluerequest"></a>
<a id="tocsspecificationsinsertfieldvaluerequest"></a>

```json
{
  "FieldId": 34,
  "FieldValueId": 143,
  "IsActive": true,
  "Name": "Cotton",
  "Position": 100,
  "Text": "Cotton fibers"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldId|integer(int32)|true|none|Specification Field ID.|
|IsActive|boolean|true|none|Defines if the Specification Field Value is active (`true`) or inactive (`false`).|
|Name|string|true|none|Specification Field Value Name.|
|Position|integer(int32)|true|none|Specification Field Value Position.|
|Text|string|true|none|Specification Field Value Description.|

<h2 id="tocS_SpecificationsUpdateFieldValueRequest">SpecificationsUpdateFieldValueRequest</h2>
<!-- backwards compatibility -->
<a id="schemaspecificationsupdatefieldvaluerequest"></a>
<a id="schema_SpecificationsUpdateFieldValueRequest"></a>
<a id="tocSspecificationsupdatefieldvaluerequest"></a>
<a id="tocsspecificationsupdatefieldvaluerequest"></a>

```json
{
  "FieldId": 1,
  "FieldValueId": 143,
  "IsActive": true,
  "Name": "Cotton",
  "Position": 100,
  "Text": "Cotton fibers"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldId|integer \| null|true|none|Specification Field ID.|
|IsActive|boolean|true|none|Defines if the Specification Field Value is active (`true`) or inactive (`false`).|
|Name|string|true|none|Specification Field Value Name.|
|Position|integer(int32)|true|none|Specification Field Position.|
|Text|string \| null|true|none|Specification Field Value Description.|

<h2 id="tocS_SupplierRequest">SupplierRequest</h2>
<!-- backwards compatibility -->
<a id="schemasupplierrequest"></a>
<a id="schema_SupplierRequest"></a>
<a id="tocSsupplierrequest"></a>
<a id="tocssupplierrequest"></a>

```json
{
  "CellPhone": "4444444444",
  "Cnpj": "33304981001272",
  "CorporateName": "TopStore",
  "CorportePhone": "5555555555",
  "Email": "email@email.com",
  "IsActive": false,
  "Name": "Supplier",
  "Phone": "3333333333",
  "StateInscription": "123456"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CellPhone|string|true|none|Supplier Cellphone.|
|Cnpj|string|true|none|Corporate legal ID.|
|CorporateName|string|true|none|Supplier Corporate Name.|
|CorportePhone|string|true|none|Supplier Corporate Phone.|
|Email|string|true|none|Supplier email.|
|IsActive|boolean|true|none|Defines if the Supplier is active (`true`) or not (`false`).|
|Name|string|true|none|Supplier Name.|
|Phone|string|true|none|Supplier Phone.|
|StateInscription|string|true|none|State Inscription.|

<h2 id="tocS_SupplierResponse">SupplierResponse</h2>
<!-- backwards compatibility -->
<a id="schemasupplierresponse"></a>
<a id="schema_SupplierResponse"></a>
<a id="tocSsupplierresponse"></a>
<a id="tocssupplierresponse"></a>

```json
{
  "CellPhone": "4444444444",
  "Cnpj": "33304981001272",
  "CorporateName": "TopStore",
  "CorportePhone": "5555555555",
  "Email": "email@email.com",
  "Id": 123,
  "IsActive": false,
  "Name": "Supplier",
  "Phone": "3333333333",
  "StateInscription": "123456"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CellPhone|string|false|none|Supplier Cellphone.|
|Cnpj|string|false|none|Corporate legal ID.|
|CorporateName|string|false|none|Supplier Corporate Name.|
|CorportePhone|string|false|none|Supplier Corporate Phone.|
|Email|string|false|none|Supplier email.|
|Id|integer|false|none|Supplier unique identifier code.|
|IsActive|boolean|false|none|Defines if the Supplier is active (`true`) or not (`false`).|
|Name|string|false|none|Supplier Name.|
|Phone|string|false|none|Supplier Phone.|
|StateInscription|string|false|none|State Inscription.|

<h2 id="tocS_UpdateSellerRequest">UpdateSellerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesellerrequest"></a>
<a id="schema_UpdateSellerRequest"></a>
<a id="tocSupdatesellerrequest"></a>
<a id="tocsupdatesellerrequest"></a>

```json
{
  "ArchiveId": 1,
  "CNPJ": "12035072751",
  "CSCIdentification": "pedrostore",
  "CatalogSystemEndpoint": "http://pedrostore.vtexcommercestable.com.br/api/catalog_system/",
  "CategoryCommissionPercentage": "[{\"CategoryId\":14,\"ProductCommission\":15.0,\"FreightCommission\":0.0}]",
  "DeliveryPolicy": "Delivery policy text",
  "Description": "Brief description",
  "Email": "breno@breno.com",
  "ExchangeReturnPolicy": "Exchange return policy text",
  "FreightCommissionPercentage": 0,
  "FulfillmentEndpoint": "http://pedrostore.vtexcommercestable.com.br/api/fulfillment?affiliateid=LDB&sc=1",
  "FulfillmentSellerId": 1,
  "IsActive": true,
  "IsBetterScope": false,
  "MerchantName": "pedrostore",
  "Name": "My pedrostore",
  "Password": "passoword",
  "ProductCommissionPercentage": 0,
  "SecutityPrivacyPolicy": "Secutity privacy policy text",
  "SellerId": "pedrostore",
  "SellerType": 1,
  "TrustPolicy": "Default",
  "UrlLogo": "/myseller",
  "UseHybridPaymentOptions": false,
  "UserName": "myseller"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveId|integer|true|none|Seller archive ID.|
|CNPJ|string|true|none|Company registration number.|
|CSCIdentification|string|true|none|CSC identification.|
|CatalogSystemEndpoint|string|true|none|URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`.|
|CategoryCommissionPercentage|string|false|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|DeliveryPolicy|string|true|none|Text describing the delivery policy previously agreed between the marketplace and the seller.|
|Description|string|true|none|Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563).|
|Email|string|true|none|Email of the admin responsible for the seller.|
|ExchangeReturnPolicy|string|true|none|Text describing the exchange and return policy previously agreed between the marketplace and the seller.|
|FreightCommissionPercentage|number|true|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|FulfillmentEndpoint|string|true|none|URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don’t need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added.|
|FulfillmentSellerId|integer|true|none|Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank.|
|IsActive|boolean|true|none|If the selle is active (`true`) or not (`false`).|
|IsBetterScope|boolean|true|none|Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI).|
|MerchantName|string|false|none|Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) article to know more.|
|Name|string|true|none|Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method.|
|Password|string|true|none|Seller password.|
|ProductCommissionPercentage|number|true|none|The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.|
|SecutityPrivacyPolicy|string|true|none|Text describing the security policy previously agreed between the marketplace and the seller.|
|SellerId|string|true|none|ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.|
|SellerType|integer|true|none|Seller type.|
|TrustPolicy|string|false|none|Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`.|
|UrlLogo|string|true|none|Seller URL logo.|
|UseHybridPaymentOptions|boolean|true|none|Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.|
|UserName|string|true|none|Seller username.|
