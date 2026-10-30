<h1 id="commerce-price-books">Commerce Price Books v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Basepom for all HubSpot Projects

Base URLs:

* <a href="https://api.hubapi.com">https://api.hubapi.com</a>

# Authentication

* API Key (developer_hapikey)
    - Parameter Name: **hapikey**, in: query.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

|Scope|Scope Description|
|---|---|
|crm.objects.products.read||
|e-commerce||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="commerce-price-books-advanced">Advanced</h1>

## Retrieve price books

<a id="opIdget-/commerce/price-books/2026-09/price-books_/commerce/price-books/2026-09-beta/price-books"></a>

> Code samples

```bash
curl https://api.hubapi.com/commerce/price-books/2026-09/price-books \
  -H 'Accept: application/json'
```

`GET /commerce/price-books/2026-09/price-books`

Retrieve a list of price books available in your HubSpot account. This endpoint supports pagination and can return archived price books if specified. It is useful for accessing and managing pricing information across different products and services.

<h3 id="retrieve-price-books-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-price-books-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePriceBookResponseForwardPaging](#schemacollectionresponsepricebookresponseforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="commerce-price-books-basic">Basic</h1>

## Create price book

<a id="opIdpost-/commerce/price-books/2026-09/price-books"></a>

> Code samples

```bash
curl https://api.hubapi.com/commerce/price-books/2026-09/price-books \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /commerce/price-books/2026-09/price-books`

Create a new price book in your HubSpot account. This endpoint allows you to define custom properties, a name, and supported currencies for the price book. A successful request will return the URL of the newly created resource.

> Body parameter

```json
null
```

<h3 id="create-price-book-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PriceBookCreateRequest](#schemapricebookcreaterequest)|true|none|
|» customProperties|body|object|true|An object containing custom properties for the price book. Each property is a key-value pair where the key is a string and the value is also a string. This is a required property.|
|» » **additionalProperties**|body|string|false|none|
|» description|body|string|false|A description of the price book. This is an optional string property.|
|» name|body|string|true|The name of the price book. It is a required string property.|
|» supportedCurrencies|body|[string]|true|An array of strings representing the currencies supported by the price book. This is a required property.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-price-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[PriceBookResponse](#schemapricebookresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve price book

<a id="opIdget-/commerce/price-books/2026-09/price-books/{priceBookId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/commerce/price-books/2026-09/price-books/{priceBookId}' \
  -H 'Accept: application/json'
```

`GET /commerce/price-books/2026-09/price-books/{priceBookId}`

Retrieve a specific price book by its unique identifier in your HubSpot account. This endpoint allows you to access detailed information about a price book, including its status and supported currencies. It can be useful for managing and reviewing pricing strategies within your commerce system.

<h3 id="retrieve-price-book-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|priceBookId|path|integer(int64)|true|The unique identifier of the price book to retrieve.|
|archived|query|boolean|false|Whether to return only results that have been archived.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-price-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PriceBookResponse](#schemapricebookresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete price book

<a id="opIddelete-/commerce/price-books/2026-09/price-books/{priceBookId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/commerce/price-books/2026-09/price-books/{priceBookId}' \
  -X DELETE
```

`DELETE /commerce/price-books/2026-09/price-books/{priceBookId}`

Delete a specific price book from your HubSpot account using its unique identifier. This operation will permanently remove the price book and its associated data, making it unavailable for future use.

<h3 id="delete-price-book-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|priceBookId|path|integer(int64)|true|The unique identifier of the price book to delete.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-price-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update price book

<a id="opIdpatch-/commerce/price-books/2026-09/price-books/{priceBookId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/commerce/price-books/2026-09/price-books/{priceBookId}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PATCH /commerce/price-books/2026-09/price-books/{priceBookId}`

Update an existing price book in your HubSpot account. This operation allows you to modify details such as the name, description, supported currencies, and custom properties of a price book. It is useful for keeping your price book information up to date with the latest changes.

> Body parameter

```json
null
```

<h3 id="update-price-book-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|priceBookId|path|integer(int64)|true|The unique identifier of the price book to update.|
|body|body|[PriceBookUpdateRequest](#schemapricebookupdaterequest)|true|none|
|» customProperties|body|object|true|An object containing custom properties for the price book, where each key is a property name and the value is a string.|
|» » **additionalProperties**|body|string|false|none|
|» description|body|object|true|An object representing the description of the price book to be updated.|
|» name|body|object|true|An object representing the name of the price book to be updated.|
|» supportedCurrencies|body|[string]|false|An array of strings representing the currencies supported by the price book.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-price-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PriceBookResponse](#schemapricebookresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Activate price book

<a id="opIdpost-/commerce/price-books/2026-09/price-books/{priceBookId}/activate"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/commerce/price-books/2026-09/price-books/{priceBookId}/activate' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /commerce/price-books/2026-09/price-books/{priceBookId}/activate`

Activate a specific price book in your HubSpot account. This operation changes the status of the price book to active, allowing it to be used in transactions and other operations. Ensure that the price book ID is correct before activation.

<h3 id="activate-price-book-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|priceBookId|path|integer(int64)|true|The unique identifier of the price book to activate.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="activate-price-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PriceBookResponse](#schemapricebookresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Deactivate price book

<a id="opIdpost-/commerce/price-books/2026-09/price-books/{priceBookId}/deactivate"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/commerce/price-books/2026-09/price-books/{priceBookId}/deactivate' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /commerce/price-books/2026-09/price-books/{priceBookId}/deactivate`

Deactivate a specific price book in your HubSpot account. This action changes the status of the price book to inactive, making it unavailable for use in transactions. Use this endpoint when you need to temporarily or permanently disable a price book without deleting it.

<h3 id="deactivate-price-book-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|priceBookId|path|integer(int64)|true|The unique identifier of the price book to deactivate.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="deactivate-price-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PriceBookResponse](#schemapricebookresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Validate price book

<a id="opIdpost-/commerce/price-books/2026-09/price-books/{priceBookId}/validate"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/commerce/price-books/2026-09/price-books/{priceBookId}/validate' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /commerce/price-books/2026-09/price-books/{priceBookId}/validate`

Validate a specific price book in your HubSpot account. This endpoint checks the integrity and correctness of the price book identified by the given priceBookId. Use this to ensure that the price book meets all necessary criteria before proceeding with further operations.

<h3 id="validate-price-book-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|priceBookId|path|integer(int64)|true|The unique identifier of the price book to validate.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="validate-price-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PriceBookValidateResponse](#schemapricebookvalidateresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="commerce-price-books-batch">Batch</h1>

## Batch archive price book items

<a id="opIdpost-/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/archive_/commerce/price-books/2026-09-beta/price-books/{priceBookId}/items/batch/archive"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/archive' \
  -X POST \
  -H 'Content-Type: application/json' \
  -d 'null'
```

`POST /commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/archive`

Archive multiple items within a specified price book in a single batch operation. This endpoint is useful for managing large sets of price book items that need to be archived simultaneously, streamlining the process and reducing the number of individual requests.

> Body parameter

```json
null
```

<h3 id="batch-archive-price-book-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|priceBookId|path|integer(int64)|true|The unique identifier of the price book containing the items to be archived.|
|body|body|[BatchInputSimplePublicObjectId](#schemabatchinputsimplepublicobjectid)|true|none|
|» inputs|body|[[SimplePublicObjectId](#schemasimplepublicobjectid)]|true|An array of SimplePublicObjectId objects, each representing a unique identifier for a public object. This property is required and is used to specify the objects involved in the batch operation.|

> Example responses

> default Response

```json
null
```

<h3 id="batch-archive-price-book-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Batch create price book items

<a id="opIdpost-/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/create_/commerce/price-books/2026-09-beta/price-books/{priceBookId}/items/batch/create"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/create' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/create`

Create multiple items in a specified price book in a single batch operation. This endpoint is useful for efficiently adding a large number of items to a price book, reducing the need for multiple individual requests. The operation returns a batch response indicating the success or failure of each item creation.

> Body parameter

```json
null
```

<h3 id="batch-create-price-book-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|priceBookId|path|integer(int64)|true|The unique identifier of the price book to which the items will be added.|
|body|body|[BatchInputPriceBookAddProductRequest](#schemabatchinputpricebookaddproductrequest)|true|none|
|» inputs|body|[[PriceBookAddProductRequest](#schemapricebookaddproductrequest)]|true|An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book. This property is required.|

> Example responses

> 201 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="batch-create-price-book-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[BatchResponsePriceBookItemResponse](#schemabatchresponsepricebookitemresponse)|
|207|Multi-Status|multiple statuses|[BatchResponsePriceBookItemResponseWithErrors](#schemabatchresponsepricebookitemresponsewitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Batch update price book items

<a id="opIdpost-/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/update_/commerce/price-books/2026-09-beta/price-books/{priceBookId}/items/batch/update"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/update' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/update`

Update multiple items in a specified price book in a single batch operation. This endpoint allows for efficient updates of price book items, making it useful for managing large sets of data within a price book. The operation returns a batch response indicating the success or failure of each item update.

> Body parameter

```json
null
```

<h3 id="batch-update-price-book-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|priceBookId|path|integer(int64)|true|The unique identifier of the price book containing the items to update.|
|body|body|[BatchInputPriceBookItemBatchUpdateInput](#schemabatchinputpricebookitembatchupdateinput)|true|none|
|» inputs|body|[[PriceBookItemBatchUpdateInput](#schemapricebookitembatchupdateinput)]|true|An array of objects, each representing a price book item to be updated. Each object must conform to the PriceBookItemBatchUpdateInput schema.|

> Example responses

> 200 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="batch-update-price-book-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponsePriceBookItemResponse](#schemabatchresponsepricebookitemresponse)|
|207|Multi-Status|multiple statuses|[BatchResponsePriceBookItemResponseWithErrors](#schemabatchresponsepricebookitemresponsewitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="commerce-price-books-items">Items</h1>

## List price book items

<a id="opIdget-/commerce/price-books/2026-09/price-books/{priceBookId}/items_/commerce/price-books/2026-09-beta/price-books/{priceBookId}/items"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/commerce/price-books/2026-09/price-books/{priceBookId}/items' \
  -H 'Accept: application/json'
```

`GET /commerce/price-books/2026-09/price-books/{priceBookId}/items`

Retrieve a list of items associated with a specific price book in your HubSpot account. This endpoint allows you to paginate through the items and specify which properties to include in the response. It is useful for managing and viewing the details of products linked to a particular price book.

<h3 id="list-price-book-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|priceBookId|path|integer(int64)|true|The unique identifier of the price book to retrieve items for.|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|properties|query|[string]|false|A list of property names to include in the response.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-price-book-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePriceBookItemResponseForwardPaging](#schemacollectionresponsepricebookitemresponseforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add price book items

<a id="opIdpost-/commerce/price-books/2026-09/price-books/{priceBookId}/items_/commerce/price-books/2026-09-beta/price-books/{priceBookId}/items"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/commerce/price-books/2026-09/price-books/{priceBookId}/items' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /commerce/price-books/2026-09/price-books/{priceBookId}/items`

Add new items to a specified price book in your HubSpot account. This endpoint allows you to associate products with a price book by providing the necessary product details. It is useful for managing and updating the contents of your price books efficiently.

> Body parameter

```json
null
```

<h3 id="add-price-book-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|priceBookId|path|integer(int64)|true|The unique identifier of the price book to which items will be added.|
|body|body|[PriceBookAddProductRequest](#schemapricebookaddproductrequest)|true|none|
|» productId|body|string|true|The unique identifier of the product to be added to the price book. It is a string and is required.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="add-price-book-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[PriceBookItemResponse](#schemapricebookitemresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve price book item

<a id="opIdget-/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}_/commerce/price-books/2026-09-beta/price-books/{priceBookId}/items/{priceBookItemId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}' \
  -H 'Accept: application/json'
```

`GET /commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}`

Retrieve a specific item from a price book using its unique identifiers. This endpoint allows you to access detailed information about a particular item within a specified price book, including its properties and archived status if applicable.

<h3 id="retrieve-price-book-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|priceBookId|path|integer(int64)|true|The unique identifier of the price book containing the item.|
|priceBookItemId|path|integer(int64)|true|The unique identifier of the item within the price book.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|properties|query|[string]|false|A list of property names to include in the response.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-price-book-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PriceBookItemResponse](#schemapricebookitemresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete price book item

<a id="opIddelete-/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}' \
  -X DELETE
```

`DELETE /commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}`

Remove a specific item from a price book in your HubSpot account. This operation is irreversible and will permanently delete the item identified by the given priceBookItemId from the price book specified by priceBookId.

<h3 id="delete-price-book-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|priceBookId|path|integer(int64)|true|The unique identifier of the price book from which the item will be deleted.|
|priceBookItemId|path|integer(int64)|true|The unique identifier of the item to be deleted from the price book.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-price-book-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update price book item

<a id="opIdpatch-/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PATCH /commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}`

Update a specific item within a price book in your HubSpot account. This operation allows you to modify details such as pricing, billing frequency, and custom properties for the specified item. Ensure that the item is identified correctly by its unique priceBookId and priceBookItemId.

> Body parameter

```json
null
```

<h3 id="update-price-book-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|priceBookId|path|integer(int64)|true|The unique identifier of the price book containing the item to update.|
|priceBookItemId|path|integer(int64)|true|The unique identifier of the item within the price book to update.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|body|body|[PriceBookItemUpdateRequest](#schemapricebookitemupdaterequest)|true|none|
|» archived|body|boolean|false|A boolean indicating whether the price book item is archived.|
|» billingFrequency|body|object|true|An object specifying the frequency at which billing occurs for the price book item.|
|» billingPeriod|body|object|true|An object specifying the period over which billing occurs for the price book item.|
|» customProperties|body|object|true|A map of custom property names to their values, allowing for additional customization of the price book item.|
|» » **additionalProperties**|body|string|false|none|
|» pricing|body|[PricingUpdateRequest](#schemapricingupdaterequest)|false|none|
|» status|body|object|true|An object indicating the current status of the price book item.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-price-book-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PriceBookItemResponse](#schemapricebookitemresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_BatchInputPriceBookAddProductRequest">BatchInputPriceBookAddProductRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputpricebookaddproductrequest"></a>
<a id="schema_BatchInputPriceBookAddProductRequest"></a>
<a id="tocSbatchinputpricebookaddproductrequest"></a>
<a id="tocsbatchinputpricebookaddproductrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[PriceBookAddProductRequest](#schemapricebookaddproductrequest)]|true|none|An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book. This property is required.|

<h2 id="tocS_BatchInputPriceBookItemBatchUpdateInput">BatchInputPriceBookItemBatchUpdateInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputpricebookitembatchupdateinput"></a>
<a id="schema_BatchInputPriceBookItemBatchUpdateInput"></a>
<a id="tocSbatchinputpricebookitembatchupdateinput"></a>
<a id="tocsbatchinputpricebookitembatchupdateinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[PriceBookItemBatchUpdateInput](#schemapricebookitembatchupdateinput)]|true|none|An array of objects, each representing a price book item to be updated. Each object must conform to the PriceBookItemBatchUpdateInput schema.|

<h2 id="tocS_BatchInputSimplePublicObjectId">BatchInputSimplePublicObjectId</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputsimplepublicobjectid"></a>
<a id="schema_BatchInputSimplePublicObjectId"></a>
<a id="tocSbatchinputsimplepublicobjectid"></a>
<a id="tocsbatchinputsimplepublicobjectid"></a>

```json
null
```

Represents a batch input payload containing a list of simple public object IDs. This component is used when performing batch operations on multiple objects within HubSpot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[SimplePublicObjectId](#schemasimplepublicobjectid)]|true|none|An array of SimplePublicObjectId objects, each representing a unique identifier for a public object. This property is required and is used to specify the objects involved in the batch operation.|

<h2 id="tocS_BatchResponsePriceBookItemResponse">BatchResponsePriceBookItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsepricebookitemresponse"></a>
<a id="schema_BatchResponsePriceBookItemResponse"></a>
<a id="tocSbatchresponsepricebookitemresponse"></a>
<a id="tocsbatchresponsepricebookitemresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed, in ISO 8601 format.|
|links|object|false|none|A map of link names to associated URIs providing additional information or actions related to the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[PriceBookItemResponse](#schemapricebookitemresponse)]|true|none|An array of PriceBookItemResponse objects representing the individual results of the batch operation.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation started, in ISO 8601 format.|
|status|string|true|none|The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponsePriceBookItemResponseWithErrors">BatchResponsePriceBookItemResponseWithErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsepricebookitemresponsewitherrors"></a>
<a id="schema_BatchResponsePriceBookItemResponseWithErrors"></a>
<a id="tocSbatchresponsepricebookitemresponsewitherrors"></a>
<a id="tocsbatchresponsepricebookitemresponsewitherrors"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed, in ISO 8601 format.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of errors encountered during the batch operation, each represented as a StandardError object.|
|links|object|false|none|A map of link names to associated URIs, providing additional context or actions related to the batch operation.|
|numErrors|integer(int32)|false|none|The number of errors encountered during the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[PriceBookItemResponse](#schemapricebookitemresponse)]|true|none|An array of results from the batch operation, each represented as a PriceBookItemResponse object.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation started, in ISO 8601 format.|
|status|string|true|none|The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_CollectionResponsePriceBookItemResponseForwardPaging">CollectionResponsePriceBookItemResponseForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepricebookitemresponseforwardpaging"></a>
<a id="schema_CollectionResponsePriceBookItemResponseForwardPaging"></a>
<a id="tocScollectionresponsepricebookitemresponseforwardpaging"></a>
<a id="tocscollectionresponsepricebookitemresponseforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[PriceBookItemResponse](#schemapricebookitemresponse)]|true|none|An array of price book items, each represented by a PriceBookItemResponse object.|

<h2 id="tocS_CollectionResponsePriceBookResponseForwardPaging">CollectionResponsePriceBookResponseForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepricebookresponseforwardpaging"></a>
<a id="schema_CollectionResponsePriceBookResponseForwardPaging"></a>
<a id="tocScollectionresponsepricebookresponseforwardpaging"></a>
<a id="tocscollectionresponsepricebookresponseforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[PriceBookResponse](#schemapricebookresponse)]|true|none|An array of price book objects, each represented by the PriceBookResponse schema.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "Invalid input (details will vary based on the error)",
  "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
  "category": "VALIDATION_ERROR",
  "links": {
    "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
  }
}
```

Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The error category, represented as a string.|
|context|object|false|none|An object providing context about the error condition. It contains additional properties, each being an array of strings.|
|correlationId|string(uuid)|true|none|A unique identifier for the request, represented as a UUID string. Include this value with any error reports or support tickets.|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|An array providing further information about the error, with each item being an ErrorDetail object.|
|links|object|false|none|An object that maps link names to associated URIs containing documentation about the error or recommended remediation steps. Each property is a string.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate. It is a string.|
|subCategory|string|false|none|A specific category that contains more specific detail about the error, represented as a string.|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
null
```

Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code associated with the error detail.|
|context|object|false|none|Context about the error condition, which may include additional information such as missing scopes or invalid property names.|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate. This is a required property.|
|subCategory|string|false|none|A specific category that contains more specific detail about the error.|

<h2 id="tocS_ForwardPaging">ForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemaforwardpaging"></a>
<a id="schema_ForwardPaging"></a>
<a id="tocSforwardpaging"></a>
<a id="tocsforwardpaging"></a>

```json
null
```

Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|

<h2 id="tocS_NextPage">NextPage</h2>
<!-- backwards compatibility -->
<a id="schemanextpage"></a>
<a id="schema_NextPage"></a>
<a id="tocSnextpage"></a>
<a id="tocsnextpage"></a>

```json
null
```

Specifies the paging information needed to retrieve the next set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|string|true|none|A string token used as a cursor for pagination to retrieve the next set of results.|
|link|string|false|none|A string URL that provides a direct link to the next page of results.|

<h2 id="tocS_PriceBookAddProductRequest">PriceBookAddProductRequest</h2>
<!-- backwards compatibility -->
<a id="schemapricebookaddproductrequest"></a>
<a id="schema_PriceBookAddProductRequest"></a>
<a id="tocSpricebookaddproductrequest"></a>
<a id="tocspricebookaddproductrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|productId|string|true|none|The unique identifier of the product to be added to the price book. It is a string and is required.|

<h2 id="tocS_PriceBookCreateRequest">PriceBookCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapricebookcreaterequest"></a>
<a id="schema_PriceBookCreateRequest"></a>
<a id="tocSpricebookcreaterequest"></a>
<a id="tocspricebookcreaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customProperties|object|true|none|An object containing custom properties for the price book. Each property is a key-value pair where the key is a string and the value is also a string. This is a required property.|
|description|string|false|none|A description of the price book. This is an optional string property.|
|name|string|true|none|The name of the price book. It is a required string property.|
|supportedCurrencies|[string]|true|none|An array of strings representing the currencies supported by the price book. This is a required property.|

<h2 id="tocS_PriceBookItemBatchUpdateInput">PriceBookItemBatchUpdateInput</h2>
<!-- backwards compatibility -->
<a id="schemapricebookitembatchupdateinput"></a>
<a id="schema_PriceBookItemBatchUpdateInput"></a>
<a id="tocSpricebookitembatchupdateinput"></a>
<a id="tocspricebookitembatchupdateinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the price book item to be updated. It is a string.|
|properties|[PriceBookItemUpdateRequest](#schemapricebookitemupdaterequest)|true|none|none|

<h2 id="tocS_PriceBookItemResponse">PriceBookItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemapricebookitemresponse"></a>
<a id="schema_PriceBookItemResponse"></a>
<a id="tocSpricebookitemresponse"></a>
<a id="tocspricebookitemresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|A boolean indicating whether the price book item is archived.|
|archivedAt|string(date-time)|false|none|The date and time when the price book item was archived, in ISO 8601 format.|
|billingFrequency|string|false|none|The frequency at which billing occurs for the price book item. Valid values include 'annually', 'biweekly', 'monthly', 'one_time', 'per_five_years', 'per_four_years', 'per_six_months', 'per_three_years', 'per_two_years', 'quarterly', and 'weekly'.|
|billingPeriod|string|false|none|The billing period for the price book item.|
|costOfGoodsSold|string|false|none|The cost of goods sold for the price book item.|
|createdAt|string(date-time)|false|none|The date and time when the price book item was created, in ISO 8601 format.|
|customProperties|object|true|none|A map of custom property names to their values for the price book item.|
|description|string|false|none|A description of the price book item.|
|id|string|true|none|The unique identifier for the price book item.|
|images|string|false|none|A string representing images associated with the price book item.|
|name|string|false|none|The name of the price book item.|
|priceBookId|string|false|none|The unique identifier for the price book containing this item.|
|pricing|[Pricing](#schemapricing)|false|none|none|
|productClassification|string|false|none|The classification of the product. Valid values include 'BUNDLE', 'STANDALONE', and 'VARIANT'.|
|productId|string|true|none|The unique identifier for the product associated with the price book item.|
|productType|string|false|none|The type of product. Valid values include 'INVENTORY', 'NON_INVENTORY', and 'SERVICE'.|
|recurringBillingTerms|string|false|none|The terms of recurring billing for the price book item. Valid values include 'AUTOMATICALLY_RENEW' and 'FIXED'.|
|sku|string|false|none|The stock keeping unit (SKU) of the price book item.|
|status|string|false|none|The current status of the price book item. Valid values include 'active' and 'inactive'.|
|taxCategory|string|false|none|The tax category of the price book item.|
|updatedAt|string(date-time)|false|none|The date and time when the price book item was last updated, in ISO 8601 format.|
|url|string|false|none|A URL associated with the price book item.|

#### Enumerated Values

|Property|Value|
|---|---|
|billingFrequency|ANNUALLY|
|billingFrequency|BIWEEKLY|
|billingFrequency|MONTHLY|
|billingFrequency|PER_FIVE_YEARS|
|billingFrequency|PER_FOUR_YEARS|
|billingFrequency|PER_SIX_MONTHS|
|billingFrequency|PER_THREE_YEARS|
|billingFrequency|PER_TWO_YEARS|
|billingFrequency|QUARTERLY|
|billingFrequency|WEEKLY|
|productClassification|BUNDLE|
|productClassification|STANDALONE|
|productClassification|VARIANT|
|productType|INVENTORY|
|productType|NON_INVENTORY|
|productType|SERVICE|
|recurringBillingTerms|AUTOMATICALLY_RENEW|
|recurringBillingTerms|FIXED|
|status|active|
|status|inactive|

<h2 id="tocS_PriceBookItemUpdateRequest">PriceBookItemUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapricebookitemupdaterequest"></a>
<a id="schema_PriceBookItemUpdateRequest"></a>
<a id="tocSpricebookitemupdaterequest"></a>
<a id="tocspricebookitemupdaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|A boolean indicating whether the price book item is archived.|
|billingFrequency|object|true|none|An object specifying the frequency at which billing occurs for the price book item.|
|billingPeriod|object|true|none|An object specifying the period over which billing occurs for the price book item.|
|customProperties|object|true|none|A map of custom property names to their values, allowing for additional customization of the price book item.|
|pricing|[PricingUpdateRequest](#schemapricingupdaterequest)|false|none|none|
|status|object|true|none|An object indicating the current status of the price book item.|

<h2 id="tocS_PriceBookResponse">PriceBookResponse</h2>
<!-- backwards compatibility -->
<a id="schemapricebookresponse"></a>
<a id="schema_PriceBookResponse"></a>
<a id="tocSpricebookresponse"></a>
<a id="tocspricebookresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|A boolean indicating whether this price book is archived.|
|archivedAt|string(date-time)|false|none|The date and time when this price book was archived.|
|autoAssignmentEnabled|boolean|true|none|Indicates whether auto-assignment is enabled for the price book. A boolean value.|
|countOfIncludedProducts|integer(int32)|true|none|The number of products included in this price book.|
|createdAt|string(date-time)|false|none|The date and time when this price book was created.|
|customProperties|object|true|none|A map of custom property names to their values for this price book.|
|description|string|false|none|A description of the price book.|
|id|string|true|none|The unique identifier for this price book.|
|name|string|false|none|The name of the price book.|
|status|string|true|none|The current status of the price book. Valid values include 'ACTIVE' and 'INACTIVE'.|
|supportedCurrencies|[string]|true|none|An array of currency codes that this price book supports.|
|updatedAt|string(date-time)|false|none|The date and time when this price book was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|

<h2 id="tocS_PriceBookUpdateRequest">PriceBookUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapricebookupdaterequest"></a>
<a id="schema_PriceBookUpdateRequest"></a>
<a id="tocSpricebookupdaterequest"></a>
<a id="tocspricebookupdaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customProperties|object|true|none|An object containing custom properties for the price book, where each key is a property name and the value is a string.|
|description|object|true|none|An object representing the description of the price book to be updated.|
|name|object|true|none|An object representing the name of the price book to be updated.|
|supportedCurrencies|[string]|false|none|An array of strings representing the currencies supported by the price book.|

<h2 id="tocS_PriceBookValidateResponse">PriceBookValidateResponse</h2>
<!-- backwards compatibility -->
<a id="schemapricebookvalidateresponse"></a>
<a id="schema_PriceBookValidateResponse"></a>
<a id="tocSpricebookvalidateresponse"></a>
<a id="tocspricebookvalidateresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[ErrorDetail](#schemaerrordetail)]|true|none|An array of ErrorDetail objects providing information about any errors encountered during validation.|
|isValid|boolean|true|none|A boolean indicating whether the price book is valid.|

<h2 id="tocS_PriceEntry">PriceEntry</h2>
<!-- backwards compatibility -->
<a id="schemapriceentry"></a>
<a id="schema_PriceEntry"></a>
<a id="tocSpriceentry"></a>
<a id="tocspriceentry"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|true|none|A string representing the currency in which the price is denominated.|
|maxQuantity|integer(int32)|false|none|A string specifying the maximum quantity for which this pricing entry is applicable.|
|price|number|true|none|A number indicating the price of the product or service.|

<h2 id="tocS_PriceUpdateEntry">PriceUpdateEntry</h2>
<!-- backwards compatibility -->
<a id="schemapriceupdateentry"></a>
<a id="schema_PriceUpdateEntry"></a>
<a id="tocSpriceupdateentry"></a>
<a id="tocspriceupdateentry"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|true|none|The currency code for the price, represented as a string.|
|maxQuantity|integer(int32)|false|none|The maximum quantity applicable for this price, represented as a string.|
|price|object|true|none|An object representing the price details for the entry. The specific structure of this object is not detailed in the specification.|

<h2 id="tocS_Pricing">Pricing</h2>
<!-- backwards compatibility -->
<a id="schemapricing"></a>
<a id="schema_Pricing"></a>
<a id="tocSpricing"></a>
<a id="tocspricing"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prices|[[PriceEntry](#schemapriceentry)]|true|none|An array of price entries, each detailing the amount and currency for a specific pricing tier.|
|pricingModel|string|true|none|The type of pricing model applied, which can be one of the following: 'FLAT', 'GRADUATED', 'STAIRSTEP', or 'VOLUME'.|

#### Enumerated Values

|Property|Value|
|---|---|
|pricingModel|FLAT|
|pricingModel|GRADUATED|
|pricingModel|STAIRSTEP|
|pricingModel|VOLUME|

<h2 id="tocS_PricingUpdateRequest">PricingUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapricingupdaterequest"></a>
<a id="schema_PricingUpdateRequest"></a>
<a id="tocSpricingupdaterequest"></a>
<a id="tocspricingupdaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prices|[[PriceUpdateEntry](#schemapriceupdateentry)]|true|none|An array of PriceUpdateEntry objects, each representing the pricing details for a product, including the currency code and amount.|

<h2 id="tocS_SimplePublicObjectId">SimplePublicObjectId</h2>
<!-- backwards compatibility -->
<a id="schemasimplepublicobjectid"></a>
<a id="schema_SimplePublicObjectId"></a>
<a id="tocSsimplepublicobjectid"></a>
<a id="tocssimplepublicobjectid"></a>

```json
null
```

Contains the Id of a Public Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this object, represented as a string.|

<h2 id="tocS_StandardError">StandardError</h2>
<!-- backwards compatibility -->
<a id="schemastandarderror"></a>
<a id="schema_StandardError"></a>
<a id="tocSstandarderror"></a>
<a id="tocsstandarderror"></a>

```json
null
```

Ye olde error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|A string specifying the category of the error.|
|context|object|true|none|An object containing additional context about the error, with each key mapping to an array of strings.|
|errors|[[ErrorDetail](#schemaerrordetail)]|true|none|An array of ErrorDetail objects providing further information about the error.|
|id|string|false|none|A string representing the unique identifier of the error.|
|links|object|true|none|An object mapping link names to URIs that provide documentation or remediation steps related to the error.|
|message|string|true|none|A string containing a human-readable message that describes the error.|
|status|string|true|none|A string indicating the status of the error.|
|subCategory|object|false|none|An object providing more specific details about the error category.|
