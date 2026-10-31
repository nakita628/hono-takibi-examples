<h1 id="api">API v2020-08-10_6-22</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Web API for TL mobile and web app

Base URLs:

* <a href="https://tl-api.azurewebsites.net">https://tl-api.azurewebsites.net</a>

* <a href="https://triviallife.azure-api.net/v1">https://triviallife.azure-api.net/v1</a>

<a href="None">Terms of service</a>
Email: <a href="mailto:support@unicorn-solutions.com">Unicorn Solutions</a> 
Web: <a href="https://unicorn-solutions.com">Unicorn Solutions</a> 
License: <a href="https://unicorn-solutions.com">Use under Unicorn</a>

# Authentication

* API Key (apikey)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header.

- oAuth2 authentication. auth0 authentication

    - Flow: authorizationCode
    - Authorization URL = [https://tldev.eu.auth0.com/authorize](https://tldev.eu.auth0.com/authorize)
    - Token URL = [https://tldev.eu.auth0.com/oauth/token](https://tldev.eu.auth0.com/oauth/token)

|Scope|Scope Description|
|---|---|
|read:tl_articles|read:tl_articles|
|read:tl_packages|read:tl_packages|

<h1 id="api-article">Article</h1>

## update existing article

<a id="opIdArticle_Put"></a>

> Code samples

```bash
curl https://example.com/api/Article \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "activeStatus": true,
    "applyForAllGyms": true,
    "articleId": 0,
    "availableGyms": [
      {
        "externalGymNumber": 0,
        "gymId": 0,
        "gymName": "string",
        "location": "string"
      }
    ],
    "availableQty": 0,
    "barcode": "string",
    "createdDate": "1970-01-01T00:00:00Z",
    "createdUser": "string",
    "cronExpression": "string",
    "description": "string",
    "discount": 0,
    "employeeDiscount": 0,
    "employeePrice": 0,
    "gymArticles": [
      {
        "articleId": 0,
        "availableQty": 0,
        "createdUser": "string",
        "employeeDiscount": 0,
        "employeePrice": 0,
        "gymId": 0,
        "gymIdList": "string",
        "gymName": "string",
        "id": 0,
        "isDefault": true,
        "isInventoryItem": true,
        "isObsolete": true,
        "modifiedUser": "string",
        "reorderLevel": 0,
        "revenueAccountId": 0,
        "sellingPrice": 0
      }
    ],
    "isAddOn": true,
    "isInventoryItem": true,
    "isObsolete": true,
    "measureUnit": "string",
    "modifiedDate": "1970-01-01T00:00:00Z",
    "modifiedUser": "string",
    "name": "string",
    "number": 0,
    "price": 0,
    "reorderLevel": 0,
    "revenueAccountId": 0,
    "sellingPrice": 0,
    "tags": "string",
    "type": "string",
    "vat": 0,
    "vatApplicable": true
  }'
```

`PUT /api/Article`

> Body parameter

```json
{
  "activeStatus": true,
  "applyForAllGyms": true,
  "articleId": 0,
  "availableGyms": [
    {
      "externalGymNumber": 0,
      "gymId": 0,
      "gymName": "string",
      "location": "string"
    }
  ],
  "availableQty": 0,
  "barcode": "string",
  "createdDate": "1970-01-01T00:00:00Z",
  "createdUser": "string",
  "cronExpression": "string",
  "description": "string",
  "discount": 0,
  "employeeDiscount": 0,
  "employeePrice": 0,
  "gymArticles": [
    {
      "articleId": 0,
      "availableQty": 0,
      "createdUser": "string",
      "employeeDiscount": 0,
      "employeePrice": 0,
      "gymId": 0,
      "gymIdList": "string",
      "gymName": "string",
      "id": 0,
      "isDefault": true,
      "isInventoryItem": true,
      "isObsolete": true,
      "modifiedUser": "string",
      "reorderLevel": 0,
      "revenueAccountId": 0,
      "sellingPrice": 0
    }
  ],
  "isAddOn": true,
  "isInventoryItem": true,
  "isObsolete": true,
  "measureUnit": "string",
  "modifiedDate": "1970-01-01T00:00:00Z",
  "modifiedUser": "string",
  "name": "string",
  "number": 0,
  "price": 0,
  "reorderLevel": 0,
  "revenueAccountId": 0,
  "sellingPrice": 0,
  "tags": "string",
  "type": "string",
  "vat": 0,
  "vatApplicable": true
}
```

<h3 id="update-existing-article-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ArticleDTO](#schemaarticledto)|true|article object|
|» activeStatus|body|boolean|false|Active Status |
|» applyForAllGyms|body|boolean|false|none|
|» articleId|body|integer(int32)|false|none|
|» availableGyms|body|[[GymDTO](#schemagymdto)]|true|none|
|» availableQty|body|number(decimal)|false|Default AvailableQty|
|» barcode|body|string \| null|false|none|
|» createdDate|body|string(date-time)|false|none|
|» createdUser|body|string \| null|false|none|
|» cronExpression|body|string \| null|false|Access Schedule CRON Expression |
|» description|body|string \| null|false|none|
|» discount|body|number(decimal)|false|none|
|» employeeDiscount|body|number(decimal)|false|Default EmployeeDiscount|
|» employeePrice|body|number(decimal)|false|Default EmployeePrice|
|» gymArticles|body|[[GymArticleDetailsDTO](#schemagymarticledetailsdto)]|false|Gym Customizations |
|» isAddOn|body|boolean|false|none|
|» isInventoryItem|body|boolean|false|Default IsInventoryItem of the Article |
|» isObsolete|body|boolean|false|Default IsObsolete of the Article |
|» measureUnit|body|string|true|none|
|» modifiedDate|body|string(date-time)|false|none|
|» modifiedUser|body|string \| null|false|none|
|» name|body|string|true|none|
|» number|body|integer(int32)|false|none|
|» price|body|number(decimal)|true|none|
|» reorderLevel|body|number(decimal)|false|Deafault ReorderLevel|
|» revenueAccountId|body|integer(int32)|false|Default Revenue account|
|» sellingPrice|body|number(decimal)|false|Default SellingPrice|
|» tags|body|string \| null|false|none|
|» type|body|string|true|none|
|» vat|body|number(decimal)|false|none|
|» vatApplicable|body|boolean|false|VAT Applicable |

> Example responses

> 202 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": {
    "messageId": "string",
    "statusText": "string",
    "url": "string"
  }
}
```

> 500 Response

```json
{
  "InnerException": {},
  "Message": "string",
  "Source": "string",
  "StackTrace": "string",
  "customError": null,
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "isCustomErrorObject": true,
  "isModelValidatonError": true,
  "referenceDocumentLink": "string",
  "referenceErrorCode": "string",
  "statusCode": 0
}
```

<h3 id="update-existing-article-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|messageId that can use to get the status of import later on.!|[DefaultResponseDTOOfStatusDTO](#schemadefaultresponsedtoofstatusdto)|
|500|Internal Server Error||[ApiException](#schemaapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Add new article

<a id="opIdArticle_Post"></a>

> Code samples

```bash
curl https://example.com/api/Article \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "activeStatus": true,
    "applyForAllGyms": true,
    "articleId": 0,
    "availableGyms": [
      {
        "externalGymNumber": 0,
        "gymId": 0,
        "gymName": "string",
        "location": "string"
      }
    ],
    "availableQty": 0,
    "barcode": "string",
    "createdDate": "1970-01-01T00:00:00Z",
    "createdUser": "string",
    "cronExpression": "string",
    "description": "string",
    "discount": 0,
    "employeeDiscount": 0,
    "employeePrice": 0,
    "gymArticles": [
      {
        "articleId": 0,
        "availableQty": 0,
        "createdUser": "string",
        "employeeDiscount": 0,
        "employeePrice": 0,
        "gymId": 0,
        "gymIdList": "string",
        "gymName": "string",
        "id": 0,
        "isDefault": true,
        "isInventoryItem": true,
        "isObsolete": true,
        "modifiedUser": "string",
        "reorderLevel": 0,
        "revenueAccountId": 0,
        "sellingPrice": 0
      }
    ],
    "isAddOn": true,
    "isInventoryItem": true,
    "isObsolete": true,
    "measureUnit": "string",
    "modifiedDate": "1970-01-01T00:00:00Z",
    "modifiedUser": "string",
    "name": "string",
    "number": 0,
    "price": 0,
    "reorderLevel": 0,
    "revenueAccountId": 0,
    "sellingPrice": 0,
    "tags": "string",
    "type": "string",
    "vat": 0,
    "vatApplicable": true
  }'
```

`POST /api/Article`

> Body parameter

```json
{
  "activeStatus": true,
  "applyForAllGyms": true,
  "articleId": 0,
  "availableGyms": [
    {
      "externalGymNumber": 0,
      "gymId": 0,
      "gymName": "string",
      "location": "string"
    }
  ],
  "availableQty": 0,
  "barcode": "string",
  "createdDate": "1970-01-01T00:00:00Z",
  "createdUser": "string",
  "cronExpression": "string",
  "description": "string",
  "discount": 0,
  "employeeDiscount": 0,
  "employeePrice": 0,
  "gymArticles": [
    {
      "articleId": 0,
      "availableQty": 0,
      "createdUser": "string",
      "employeeDiscount": 0,
      "employeePrice": 0,
      "gymId": 0,
      "gymIdList": "string",
      "gymName": "string",
      "id": 0,
      "isDefault": true,
      "isInventoryItem": true,
      "isObsolete": true,
      "modifiedUser": "string",
      "reorderLevel": 0,
      "revenueAccountId": 0,
      "sellingPrice": 0
    }
  ],
  "isAddOn": true,
  "isInventoryItem": true,
  "isObsolete": true,
  "measureUnit": "string",
  "modifiedDate": "1970-01-01T00:00:00Z",
  "modifiedUser": "string",
  "name": "string",
  "number": 0,
  "price": 0,
  "reorderLevel": 0,
  "revenueAccountId": 0,
  "sellingPrice": 0,
  "tags": "string",
  "type": "string",
  "vat": 0,
  "vatApplicable": true
}
```

<h3 id="add-new-article-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ArticleDTO](#schemaarticledto)|true|article object|
|» activeStatus|body|boolean|false|Active Status |
|» applyForAllGyms|body|boolean|false|none|
|» articleId|body|integer(int32)|false|none|
|» availableGyms|body|[[GymDTO](#schemagymdto)]|true|none|
|» availableQty|body|number(decimal)|false|Default AvailableQty|
|» barcode|body|string \| null|false|none|
|» createdDate|body|string(date-time)|false|none|
|» createdUser|body|string \| null|false|none|
|» cronExpression|body|string \| null|false|Access Schedule CRON Expression |
|» description|body|string \| null|false|none|
|» discount|body|number(decimal)|false|none|
|» employeeDiscount|body|number(decimal)|false|Default EmployeeDiscount|
|» employeePrice|body|number(decimal)|false|Default EmployeePrice|
|» gymArticles|body|[[GymArticleDetailsDTO](#schemagymarticledetailsdto)]|false|Gym Customizations |
|» isAddOn|body|boolean|false|none|
|» isInventoryItem|body|boolean|false|Default IsInventoryItem of the Article |
|» isObsolete|body|boolean|false|Default IsObsolete of the Article |
|» measureUnit|body|string|true|none|
|» modifiedDate|body|string(date-time)|false|none|
|» modifiedUser|body|string \| null|false|none|
|» name|body|string|true|none|
|» number|body|integer(int32)|false|none|
|» price|body|number(decimal)|true|none|
|» reorderLevel|body|number(decimal)|false|Deafault ReorderLevel|
|» revenueAccountId|body|integer(int32)|false|Default Revenue account|
|» sellingPrice|body|number(decimal)|false|Default SellingPrice|
|» tags|body|string \| null|false|none|
|» type|body|string|true|none|
|» vat|body|number(decimal)|false|none|
|» vatApplicable|body|boolean|false|VAT Applicable |

> Example responses

> 202 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": {
    "messageId": "string",
    "statusText": "string",
    "url": "string"
  }
}
```

> 500 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": null,
  "statusCode": 0,
  "version": "string"
}
```

<h3 id="add-new-article-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|messageId that can use to get the status of import later on.!|[DefaultResponseDTOOfStatusDTO](#schemadefaultresponsedtoofstatusdto)|
|500|Internal Server Error||[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Delete article from the system

<a id="opIdArticle_Delete"></a>

> Code samples

```bash
curl https://example.com/api/Article \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/Article`

<h3 id="delete-article-from-the-system-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ArticleId|query|integer(int32)|false|indentity number(primary key) for article object|

> Example responses

> 200 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": 0
}
```

> 404 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": 0
}
```

> 500 Response

```json
{
  "InnerException": {},
  "Message": "string",
  "Source": "string",
  "StackTrace": "string",
  "customError": null,
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "isCustomErrorObject": true,
  "isModelValidatonError": true,
  "referenceDocumentLink": "string",
  "referenceErrorCode": "string",
  "statusCode": 0
}
```

<h3 id="delete-article-from-the-system-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|operation was success(true) or fail(false) |[DefaultResponseDTOOfInteger](#schemadefaultresponsedtoofinteger)|
|404|Not Found||[DefaultResponseDTOOfInteger](#schemadefaultresponsedtoofinteger)|
|500|Internal Server Error||[ApiException](#schemaapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Add article details that associate with a Gym

<a id="opIdArticle_UpdateArticleGymDetails"></a>

> Code samples

```bash
curl https://example.com/api/Article/ArticleGymDetails \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "articleId": 0,
      "availableQty": 0,
      "createdUser": "string",
      "employeeDiscount": 0,
      "employeePrice": 0,
      "gymId": 0,
      "gymIdList": "string",
      "gymName": "string",
      "id": 0,
      "isDefault": true,
      "isInventoryItem": true,
      "isObsolete": true,
      "modifiedUser": "string",
      "reorderLevel": 0,
      "revenueAccountId": 0,
      "sellingPrice": 0
    }
  ]'
```

`PUT /api/Article/ArticleGymDetails`

> Body parameter

```json
[
  {
    "articleId": 0,
    "availableQty": 0,
    "createdUser": "string",
    "employeeDiscount": 0,
    "employeePrice": 0,
    "gymId": 0,
    "gymIdList": "string",
    "gymName": "string",
    "id": 0,
    "isDefault": true,
    "isInventoryItem": true,
    "isObsolete": true,
    "modifiedUser": "string",
    "reorderLevel": 0,
    "revenueAccountId": 0,
    "sellingPrice": 0
  }
]
```

<h3 id="add-article-details-that-associate-with-a-gym-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[GymArticleDetailsDTO](#schemagymarticledetailsdto)]|true|none|

> Example responses

> 202 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": {
    "messageId": "string",
    "statusText": "string",
    "url": "string"
  }
}
```

> 500 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": null,
  "statusCode": 0,
  "version": "string"
}
```

<h3 id="add-article-details-that-associate-with-a-gym-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|messageId that can use to get the status of import later on.!|[DefaultResponseDTOOfStatusDTO](#schemadefaultresponsedtoofstatusdto)|
|500|Internal Server Error||[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Article_GetAddons

<a id="opIdArticle_GetAddons"></a>

> Code samples

```bash
curl https://example.com/api/Article/GetAddons \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/Article/GetAddons`

<h3 id="articlegetaddons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|searchText|query|string \| null|false|Search text - will be search by the name|
|gymIds|query|string \| null|false|Comma separated gymIds deafult "-1" for all gyms|
|type|query|string \| null|false|none|
|limit|query|integer(int32)|false|none|
|offset|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": [
    {
      "activeStatus": true,
      "applyForAllGyms": true,
      "articleId": 0,
      "createdDate": "1970-01-01T00:00:00Z",
      "createdUser": "string",
      "description": "string",
      "measureUnit": "string",
      "modifiedDate": "1970-01-01T00:00:00Z",
      "modifiedUser": "string",
      "name": "string",
      "number": 0,
      "price": 0,
      "sellingPrice": 0,
      "tags": "string",
      "totalCount": 0,
      "type": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": [
    {
      "activeStatus": true,
      "applyForAllGyms": true,
      "articleId": 0,
      "createdDate": "1970-01-01T00:00:00Z",
      "createdUser": "string",
      "description": "string",
      "measureUnit": "string",
      "modifiedDate": "1970-01-01T00:00:00Z",
      "modifiedUser": "string",
      "name": "string",
      "number": 0,
      "price": 0,
      "sellingPrice": 0,
      "tags": "string",
      "totalCount": 0,
      "type": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": null,
  "statusCode": 0,
  "version": "string"
}
```

<h3 id="articlegetaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DefaultResponseDTOOfListOfArticleSearchDTO](#schemadefaultresponsedtooflistofarticlesearchdto)|
|404|Not Found||[DefaultResponseDTOOfListOfArticleSearchDTO](#schemadefaultresponsedtooflistofarticlesearchdto)|
|500|Internal Server Error||[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get Gym specific properties for article

<a id="opIdArticle_GymArticleDetails"></a>

> Code samples

```bash
curl https://example.com/api/Article/GymArticle/0/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/Article/GymArticle/{articleId}/{gymId}`

<h3 id="get-gym-specific-properties-for-article-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|articleId|path|integer(int32)|true|indentity number(primary key) for article object|
|gymId|path|integer(int32)|true|indentity number(primary key) for gym object|

> Example responses

> 200 Response

```json
{
  "articleId": 0,
  "availableQty": 0,
  "createdUser": "string",
  "employeeDiscount": 0,
  "employeePrice": 0,
  "gymId": 0,
  "gymIdList": "string",
  "gymName": "string",
  "id": 0,
  "isDefault": true,
  "isInventoryItem": true,
  "isObsolete": true,
  "modifiedUser": "string",
  "reorderLevel": 0,
  "revenueAccountId": 0,
  "sellingPrice": 0
}
```

> 404 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": [
    {
      "activeStatus": true,
      "applyForAllGyms": true,
      "articleId": 0,
      "createdDate": "1970-01-01T00:00:00Z",
      "createdUser": "string",
      "description": "string",
      "measureUnit": "string",
      "modifiedDate": "1970-01-01T00:00:00Z",
      "modifiedUser": "string",
      "name": "string",
      "number": 0,
      "price": 0,
      "sellingPrice": 0,
      "tags": "string",
      "totalCount": 0,
      "type": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": null,
  "statusCode": 0,
  "version": "string"
}
```

<h3 id="get-gym-specific-properties-for-article-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API Response with Article entity|[GymArticleDetailsDTO](#schemagymarticledetailsdto)|
|404|Not Found||[DefaultResponseDTOOfListOfArticleSearchDTO](#schemadefaultresponsedtooflistofarticlesearchdto)|
|500|Internal Server Error||[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Add measure unit

<a id="opIdArticle_AddMeasureUnit"></a>

> Code samples

```bash
curl https://example.com/api/Article/MeasureUnit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "id": 0,
      "name": "string",
      "type": "string"
    }
  ]'
```

`POST /api/Article/MeasureUnit`

> Body parameter

```json
[
  {
    "id": 0,
    "name": "string",
    "type": "string"
  }
]
```

<h3 id="add-measure-unit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[MeasureUnitDTO](#schemameasureunitdto)]|true|list of measureUnit|

> Example responses

> 202 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": {
    "messageId": "string",
    "statusText": "string",
    "url": "string"
  }
}
```

> 500 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": null,
  "statusCode": 0,
  "version": "string"
}
```

<h3 id="add-measure-unit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted||[DefaultResponseDTOOfStatusDTO](#schemadefaultresponsedtoofstatusdto)|
|500|Internal Server Error||[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get mesure units

<a id="opIdArticle_GetMeasureUnits"></a>

> Code samples

```bash
curl https://example.com/api/Article/MeasureUnits \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/Article/MeasureUnits`

<h3 id="get-mesure-units-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string \| null|false|type of the measure unit (all, item, service)|

> Example responses

> 202 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": {
    "messageId": "string",
    "statusText": "string",
    "url": "string"
  }
}
```

> 500 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": null,
  "statusCode": 0,
  "version": "string"
}
```

<h3 id="get-mesure-units-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted||[DefaultResponseDTOOfStatusDTO](#schemadefaultresponsedtoofstatusdto)|
|500|Internal Server Error||[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get Revenue Accounts

<a id="opIdArticle_GetRevenueAccounts"></a>

> Code samples

```bash
curl https://example.com/api/Article/RevenueAccounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/Article/RevenueAccounts`

> Example responses

> 202 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": {
    "messageId": "string",
    "statusText": "string",
    "url": "string"
  }
}
```

> 500 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": null,
  "statusCode": 0,
  "version": "string"
}
```

<h3 id="get-revenue-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted||[DefaultResponseDTOOfStatusDTO](#schemadefaultresponsedtoofstatusdto)|
|500|Internal Server Error||[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Search articles It will only return basic information of article

<a id="opIdArticle_Search"></a>

> Code samples

```bash
curl https://example.com/api/Article/Search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/Article/Search`

<h3 id="search-articles-it-will-only-return-basic-information-of-article-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|searchText|query|string \| null|false|part of article name|
|gymId|query|integer(int32)|false|-1 for all gyms |
|type|query|string \| null|false|filter article type. default is 'all'|
|orderBy|query|string \| null|false|order by column.!-- invalid column will give internal server error|
|limit|query|integer(int32)|false|number of recode in result and default is 100. use negative numbers to order by desc|
|offset|query|integer(int32)|false|number of recodes to skip|
|activeStatus|query|integer(int32)|false|Active Status 1 : Active, 2: Inactive, 3: All, Default : 1|

> Example responses

> 200 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": [
    {
      "activeStatus": true,
      "applyForAllGyms": true,
      "articleId": 0,
      "createdDate": "1970-01-01T00:00:00Z",
      "createdUser": "string",
      "description": "string",
      "measureUnit": "string",
      "modifiedDate": "1970-01-01T00:00:00Z",
      "modifiedUser": "string",
      "name": "string",
      "number": 0,
      "price": 0,
      "sellingPrice": 0,
      "tags": "string",
      "totalCount": 0,
      "type": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": [
    {
      "activeStatus": true,
      "applyForAllGyms": true,
      "articleId": 0,
      "createdDate": "1970-01-01T00:00:00Z",
      "createdUser": "string",
      "description": "string",
      "measureUnit": "string",
      "modifiedDate": "1970-01-01T00:00:00Z",
      "modifiedUser": "string",
      "name": "string",
      "number": 0,
      "price": 0,
      "sellingPrice": 0,
      "tags": "string",
      "totalCount": 0,
      "type": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": null,
  "statusCode": 0,
  "version": "string"
}
```

<h3 id="search-articles-it-will-only-return-basic-information-of-article-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API Response with set of a Article entities|[DefaultResponseDTOOfListOfArticleSearchDTO](#schemadefaultresponsedtooflistofarticlesearchdto)|
|404|Not Found||[DefaultResponseDTOOfListOfArticleSearchDTO](#schemadefaultresponsedtooflistofarticlesearchdto)|
|500|Internal Server Error||[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Deactivate existing article

<a id="opIdArticle_UpdateStatus"></a>

> Code samples

```bash
curl https://example.com/api/Article/UpdateStatus \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/Article/UpdateStatus`

<h3 id="deactivate-existing-article-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ArticleId|query|integer(int32)|false|none|
|status|query|integer(int32)|false|1 : activate , 2 deactivate|
|userName|query|string \| null|false|Updating user|

> Example responses

> 200 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": 0
}
```

> 404 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": 0
}
```

> 500 Response

```json
{
  "InnerException": {},
  "Message": "string",
  "Source": "string",
  "StackTrace": "string",
  "customError": null,
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "isCustomErrorObject": true,
  "isModelValidatonError": true,
  "referenceDocumentLink": "string",
  "referenceErrorCode": "string",
  "statusCode": 0
}
```

<h3 id="deactivate-existing-article-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DefaultResponseDTOOfInteger](#schemadefaultresponsedtoofinteger)|
|404|Not Found||[DefaultResponseDTOOfInteger](#schemadefaultresponsedtoofinteger)|
|500|Internal Server Error||[ApiException](#schemaapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get article details This will return all properties related to article entity

<a id="opIdArticle_get"></a>

> Code samples

```bash
curl https://example.com/api/Article/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/Article/{articleID}`

<h3 id="get-article-details-this-will-return-all-properties-related-to-article-entity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|articleID|path|integer(int32)|true|indentity number (primary key) for article object|

> Example responses

> 200 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": {
    "activeStatus": true,
    "applyForAllGyms": true,
    "articleId": 0,
    "availableGyms": [
      {
        "externalGymNumber": 0,
        "gymId": 0,
        "gymName": "string",
        "location": "string"
      }
    ],
    "availableQty": 0,
    "barcode": "string",
    "createdDate": "1970-01-01T00:00:00Z",
    "createdUser": "string",
    "cronExpression": "string",
    "description": "string",
    "discount": 0,
    "employeeDiscount": 0,
    "employeePrice": 0,
    "gymArticles": [
      {
        "articleId": 0,
        "availableQty": 0,
        "createdUser": "string",
        "employeeDiscount": 0,
        "employeePrice": 0,
        "gymId": 0,
        "gymIdList": "string",
        "gymName": "string",
        "id": 0,
        "isDefault": true,
        "isInventoryItem": true,
        "isObsolete": true,
        "modifiedUser": "string",
        "reorderLevel": 0,
        "revenueAccountId": 0,
        "sellingPrice": 0
      }
    ],
    "isAddOn": true,
    "isInventoryItem": true,
    "isObsolete": true,
    "measureUnit": "string",
    "modifiedDate": "1970-01-01T00:00:00Z",
    "modifiedUser": "string",
    "name": "string",
    "number": 0,
    "price": 0,
    "reorderLevel": 0,
    "revenueAccountId": 0,
    "sellingPrice": 0,
    "tags": "string",
    "type": "string",
    "vat": 0,
    "vatApplicable": true
  }
}
```

> 404 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": null,
  "statusCode": 0,
  "version": "string"
}
```

<h3 id="get-article-details-this-will-return-all-properties-related-to-article-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API Response with Article entity|[DefaultResponseDTOOfArticleDTO](#schemadefaultresponsedtoofarticledto)|
|404|Not Found||[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-auth">Auth</h1>

## Authenticate and provide token for autherizations.

<a id="opIdAuth_Login"></a>

> Code samples

```bash
curl https://example.com/api/Auth/login \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "password": "string",
    "remember": true,
    "username": "string"
  }'
```

`POST /api/Auth/login`

> Body parameter

```json
{
  "password": "string",
  "remember": true,
  "username": "string"
}
```

<h3 id="authenticate-and-provide-token-for-autherizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LoginDTO](#schemalogindto)|true|Login Credentials|
|» password|body|string \| null|false|none|
|» remember|body|boolean|false|none|
|» username|body|string \| null|false|none|

<h3 id="authenticate-and-provide-token-for-autherizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Authorizized with a new token or unauthorized request.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-gym">Gym</h1>

## Get gym details This will return all properties related to gym entity

<a id="opIdGym_get"></a>

> Code samples

```bash
curl https://example.com/api/Gym/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/Gym/{gymID}`

<h3 id="get-gym-details-this-will-return-all-properties-related-to-gym-entity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gymID|path|integer(int32)|true|indentity number (primary key) for gym object|

> Example responses

> 200 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": {
    "externalGymNumber": 0,
    "gymId": 0,
    "gymName": "string",
    "location": "string"
  }
}
```

> 404 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": null,
  "statusCode": 0,
  "version": "string"
}
```

<h3 id="get-gym-details-this-will-return-all-properties-related-to-gym-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API Response with Gym entity|[DefaultResponseDTOOfGymDTO](#schemadefaultresponsedtoofgymdto)|
|404|Not Found||[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-membership">Membership</h1>

## Get all of the members details This will return all properties related to member entity

<a id="opIdMembership_Get"></a>

> Code samples

```bash
curl https://example.com/api/Membership \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/Membership`

> Example responses

> 200 Response

```json
[
  {
    "name": "string"
  }
]
```

> 404 Response

```json
{
  "detail": "string",
  "extensions": {
    "property1": null,
    "property2": null
  },
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-all-of-the-members-details-this-will-return-all-properties-related-to-member-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API Response with all Members entity as a list.|Inline|
|404|Not Found||[ProblemDetails](#schemaproblemdetails)|

<h3 id="get-all-of-the-members-details-this-will-return-all-properties-related-to-member-entity-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MemberDTO](#schemamemberdto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Add new Member

<a id="opIdMembership_Post"></a>

> Code samples

```bash
curl https://example.com/api/Membership \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`POST /api/Membership`

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="add-new-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MemberDTO](#schemamemberdto)|true|member object|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
true
```

> 404 Response

```json
{
  "detail": "string",
  "extensions": {
    "property1": null,
    "property2": null
  },
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="add-new-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|newly created member entity|Inline|
|404|Not Found||[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-package">Package</h1>

## Get package details by packageId

<a id="opIdPackage_Get"></a>

> Code samples

```bash
curl https://example.com/api/Package \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/Package`

<h3 id="get-package-details-by-packageid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageId|query|integer(int32)|false|primary key of package entity|

> Example responses

> 200 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": {
    "addOns": [
      {
        "articleId": 0,
        "articleName": "string",
        "articleNumber": 0,
        "articlePrice": 0,
        "endOrder": 0,
        "isIncludeServiceInCharge": true,
        "measureUnit": "string",
        "numberOfItems": 0,
        "startOrder": 0
      }
    ],
    "addonFee": 0,
    "applyForAllGyms": true,
    "availableGyms": [
      {
        "externalGymNumber": 0,
        "gymId": 0,
        "gymName": "string",
        "location": "string"
      }
    ],
    "bindingPeriod": 0,
    "createdDate": "1970-01-01T00:00:00Z",
    "createdUser": "string",
    "description": "string",
    "endDate": "1970-01-01T00:00:00Z",
    "expireInMonths": 0,
    "features": "string",
    "freeMonths": 0,
    "instructionsToGymUsers": "string",
    "instructionsToWebUsers": "string",
    "isActive": true,
    "isAtg": true,
    "isAutoRenew": true,
    "isFirstMonthFree": true,
    "isRegistrationFee": true,
    "isRestAmount": true,
    "isShownInMobile": true,
    "isSponsorPackage": true,
    "maximumGiveAwayRestAmount": 0,
    "memberCanAddAddOns": true,
    "memberCanLeaveWithinFreePeriod": true,
    "memberCanRemoveAddOns": true,
    "modifiedDate": "1970-01-01T00:00:00Z",
    "modifiedUser": "string",
    "monthlyFee": 0,
    "nextPackageNumber": 0,
    "numberOfInstallments": 0,
    "numberOfVisits": 0,
    "packageId": 0,
    "packageName": "string",
    "packageNumber": "string",
    "packageType": "string",
    "perVisitPrice": 0,
    "registrationFee": 0,
    "serviceFee": 0,
    "shownInWeb": true,
    "startDate": "1970-01-01T00:00:00Z",
    "tags": "string",
    "totalPrice": 0
  }
}
```

> 404 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": {
    "addOns": [
      {
        "articleId": 0,
        "articleName": "string",
        "articleNumber": 0,
        "articlePrice": 0,
        "endOrder": 0,
        "isIncludeServiceInCharge": true,
        "measureUnit": "string",
        "numberOfItems": 0,
        "startOrder": 0
      }
    ],
    "addonFee": 0,
    "applyForAllGyms": true,
    "availableGyms": [
      {
        "externalGymNumber": 0,
        "gymId": 0,
        "gymName": "string",
        "location": "string"
      }
    ],
    "bindingPeriod": 0,
    "createdDate": "1970-01-01T00:00:00Z",
    "createdUser": "string",
    "description": "string",
    "endDate": "1970-01-01T00:00:00Z",
    "expireInMonths": 0,
    "features": "string",
    "freeMonths": 0,
    "instructionsToGymUsers": "string",
    "instructionsToWebUsers": "string",
    "isActive": true,
    "isAtg": true,
    "isAutoRenew": true,
    "isFirstMonthFree": true,
    "isRegistrationFee": true,
    "isRestAmount": true,
    "isShownInMobile": true,
    "isSponsorPackage": true,
    "maximumGiveAwayRestAmount": 0,
    "memberCanAddAddOns": true,
    "memberCanLeaveWithinFreePeriod": true,
    "memberCanRemoveAddOns": true,
    "modifiedDate": "1970-01-01T00:00:00Z",
    "modifiedUser": "string",
    "monthlyFee": 0,
    "nextPackageNumber": 0,
    "numberOfInstallments": 0,
    "numberOfVisits": 0,
    "packageId": 0,
    "packageName": "string",
    "packageNumber": "string",
    "packageType": "string",
    "perVisitPrice": 0,
    "registrationFee": 0,
    "serviceFee": 0,
    "shownInWeb": true,
    "startDate": "1970-01-01T00:00:00Z",
    "tags": "string",
    "totalPrice": 0
  }
}
```

> 500 Response

```json
{
  "InnerException": {},
  "Message": "string",
  "Source": "string",
  "StackTrace": "string",
  "customError": null,
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "isCustomErrorObject": true,
  "isModelValidatonError": true,
  "referenceDocumentLink": "string",
  "referenceErrorCode": "string",
  "statusCode": 0
}
```

<h3 id="get-package-details-by-packageid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|all the fields that related to the package|[DefaultResponseDTOOfPackageDTO](#schemadefaultresponsedtoofpackagedto)|
|404|Not Found||[DefaultResponseDTOOfPackageDTO](#schemadefaultresponsedtoofpackagedto)|
|500|Internal Server Error||[ApiException](#schemaapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Update existing package by its ID

<a id="opIdPackage_Put"></a>

> Code samples

```bash
curl https://example.com/api/Package \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addOns": [
      {
        "articleId": 0,
        "articleName": "string",
        "articleNumber": 0,
        "articlePrice": 0,
        "endOrder": 0,
        "isIncludeServiceInCharge": true,
        "measureUnit": "string",
        "numberOfItems": 0,
        "startOrder": 0
      }
    ],
    "addonFee": 0,
    "applyForAllGyms": true,
    "availableGyms": [
      {
        "externalGymNumber": 0,
        "gymId": 0,
        "gymName": "string",
        "location": "string"
      }
    ],
    "bindingPeriod": 0,
    "createdDate": "1970-01-01T00:00:00Z",
    "createdUser": "string",
    "description": "string",
    "endDate": "1970-01-01T00:00:00Z",
    "expireInMonths": 0,
    "features": "string",
    "freeMonths": 0,
    "instructionsToGymUsers": "string",
    "instructionsToWebUsers": "string",
    "isActive": true,
    "isAtg": true,
    "isAutoRenew": true,
    "isFirstMonthFree": true,
    "isRegistrationFee": true,
    "isRestAmount": true,
    "isShownInMobile": true,
    "isSponsorPackage": true,
    "maximumGiveAwayRestAmount": 0,
    "memberCanAddAddOns": true,
    "memberCanLeaveWithinFreePeriod": true,
    "memberCanRemoveAddOns": true,
    "modifiedDate": "1970-01-01T00:00:00Z",
    "modifiedUser": "string",
    "monthlyFee": 0,
    "nextPackageNumber": 0,
    "numberOfInstallments": 0,
    "numberOfVisits": 0,
    "packageId": 0,
    "packageName": "string",
    "packageNumber": "string",
    "packageType": "string",
    "perVisitPrice": 0,
    "registrationFee": 0,
    "serviceFee": 0,
    "shownInWeb": true,
    "startDate": "1970-01-01T00:00:00Z",
    "tags": "string",
    "totalPrice": 0
  }'
```

`PUT /api/Package`

> Body parameter

```json
{
  "addOns": [
    {
      "articleId": 0,
      "articleName": "string",
      "articleNumber": 0,
      "articlePrice": 0,
      "endOrder": 0,
      "isIncludeServiceInCharge": true,
      "measureUnit": "string",
      "numberOfItems": 0,
      "startOrder": 0
    }
  ],
  "addonFee": 0,
  "applyForAllGyms": true,
  "availableGyms": [
    {
      "externalGymNumber": 0,
      "gymId": 0,
      "gymName": "string",
      "location": "string"
    }
  ],
  "bindingPeriod": 0,
  "createdDate": "1970-01-01T00:00:00Z",
  "createdUser": "string",
  "description": "string",
  "endDate": "1970-01-01T00:00:00Z",
  "expireInMonths": 0,
  "features": "string",
  "freeMonths": 0,
  "instructionsToGymUsers": "string",
  "instructionsToWebUsers": "string",
  "isActive": true,
  "isAtg": true,
  "isAutoRenew": true,
  "isFirstMonthFree": true,
  "isRegistrationFee": true,
  "isRestAmount": true,
  "isShownInMobile": true,
  "isSponsorPackage": true,
  "maximumGiveAwayRestAmount": 0,
  "memberCanAddAddOns": true,
  "memberCanLeaveWithinFreePeriod": true,
  "memberCanRemoveAddOns": true,
  "modifiedDate": "1970-01-01T00:00:00Z",
  "modifiedUser": "string",
  "monthlyFee": 0,
  "nextPackageNumber": 0,
  "numberOfInstallments": 0,
  "numberOfVisits": 0,
  "packageId": 0,
  "packageName": "string",
  "packageNumber": "string",
  "packageType": "string",
  "perVisitPrice": 0,
  "registrationFee": 0,
  "serviceFee": 0,
  "shownInWeb": true,
  "startDate": "1970-01-01T00:00:00Z",
  "tags": "string",
  "totalPrice": 0
}
```

<h3 id="update-existing-package-by-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PackageDTO](#schemapackagedto)|true|package object|
|» addOns|body|[[PackageItemDTO](#schemapackageitemdto)]|false|Extra articles list added to the given package.<br>            |
|» addonFee|body|number(decimal)|false|sum of addon fees.<br>incoming values for this filed will ignore.<br>            |
|» applyForAllGyms|body|boolean|false|Boolean value to indicate wheather package is available in all the gyms.<br>            |
|» availableGyms|body|[[GymDTO](#schemagymdto)]|false|Gyms list where this package is available.<br>            |
|» bindingPeriod|body|integer(int32)|false|Range of period a member is bound to the contract if he/she choose this package.<br>            |
|» createdDate|body|string(date-time)|false|Package created DateTime.<br>            |
|» createdUser|body|string \| null|false|Package created user.<br>            |
|» description|body|string \| null|false|Common descriptions about package.If there are more instructions <br>             can be stored as comma separated values.<br>            |
|» endDate|body|string(date-time)|false|End date of the package.After that package is not valid for use.<br>            |
|» expireInMonths|body|integer(int32)|false|No of months the fixed package is valid for sale<br>            |
|» features|body|string \| null|false|What are the facilities, features available for package.ex:- wifi,<br>ACm etc.Can be stored as comma seperated values.<br>            |
|» freeMonths|body|integer(int32)|false|No of months gym member can come without payments.<br>            |
|» instructionsToGymUsers|body|string \| null|false|Instruction to the gym members relevant to the package.<br>             If there are more instructions can be stored as comma seperated values.<br>            |
|» instructionsToWebUsers|body|string \| null|false|Instruction to the MRM members relevant to the package.<br>             If there are more instructions can be stored as comma seperated values.<br>            |
|» isActive|body|boolean|false|Boolean value to indicate this package is still active or not.<br>            |
|» isAtg|body|boolean|false|Boolean value to indicate ATG transaction from bank is applicable or not.<br>            |
|» isAutoRenew|body|boolean|false|Boolean value to indicate the contract will auto renew after expiration <br>             if this package would be chosen.<br>            |
|» isFirstMonthFree|body|boolean|false|Boolean value to indicate if the first month charges is free.<br>            |
|» isRegistrationFee|body|boolean|false|Boolean value to indicate this package has registration fee or not.<br>            |
|» isRestAmount|body|boolean|false|Boolean value to indicate rest amount is applicable or not.<br>            |
|» isShownInMobile|body|boolean|false|Boolean value to indicate package is visible in Mobile App or not.<br>            |
|» isSponsorPackage|body|boolean|false|Boolean value to indicate package can be sponsored or not by other party.<br>            |
|» maximumGiveAwayRestAmount|body|number(decimal)|false|If a member join the gym middle of a month via this package, <br>             what is the maximum amount of price can be neglected from payment from the member.<br>            |
|» memberCanAddAddOns|body|boolean|false|Boolean value to indicate member can add extra addons he wish if he choose this package.<br>            |
|» memberCanLeaveWithinFreePeriod|body|boolean|false|Boolean value to indicate if member can leave from contract within <br>             free period if he/she choose this package.<br>            |
|» memberCanRemoveAddOns|body|boolean|false|Boolean value to indicate member can remove already added addons if he choose this package.<br>            |
|» modifiedDate|body|string(date-time)|false|Package last modified DateTime.<br>            |
|» modifiedUser|body|string \| null|false|Package last modified user.<br>            |
|» monthlyFee|body|number(decimal)|false|Monthly installment fee if package is not fixed visit.<br>addition of the servicefee and addon fees divided by binding period.<br>             read only<br>            |
|» nextPackageNumber|body|integer(int32)|false|Next Package the contract continue after the binding period of this package.<br>            |
|» numberOfInstallments|body|integer(int32)|false|Maximum Number of installment a member can divide the package price/cost to pay.<br>            |
|» numberOfVisits|body|integer(int32)|false|If package is fixed visit type, then how many visits are available for this package.<br>            |
|» packageId|body|integer(int32)|false|none|
|» packageName|body|string|true|none|
|» packageNumber|body|string \| null|false|none|
|» packageType|body|string|true|Package type can be either fixed visit or unlimited.<br>            |
|» perVisitPrice|body|number(decimal)|false|Cost/Price of the single visit to gym.<br>            |
|» registrationFee|body|number(decimal)|true|Registartion fee for the package at a gym.<br>             read only<br>            |
|» serviceFee|body|number(decimal)|true|total Service charge of the package for entire period.<br>            |
|» shownInWeb|body|boolean|false|Boolean value to show this package in MRM system or not.<br>            |
|» startDate|body|string(date-time)|false|Start date of the package.<br>            |
|» tags|body|string \| null|false|Comma separated string values in case of need of maintain some labels kind of <br>             stuff relevant to the package.<br>            |
|» totalPrice|body|number(decimal)|false|total price for the package including Addon fees, service fee and registration fee.<br>incoming values for this field will ignore.<br>            |

> Example responses

> 202 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": {
    "messageId": "string",
    "statusText": "string",
    "url": "string"
  }
}
```

> 500 Response

```json
{
  "InnerException": {},
  "Message": "string",
  "Source": "string",
  "StackTrace": "string",
  "customError": null,
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "isCustomErrorObject": true,
  "isModelValidatonError": true,
  "referenceDocumentLink": "string",
  "referenceErrorCode": "string",
  "statusCode": 0
}
```

<h3 id="update-existing-package-by-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|messageId that can use to get the status of import later on.!|[DefaultResponseDTOOfStatusDTO](#schemadefaultresponsedtoofstatusdto)|
|500|Internal Server Error||[ApiException](#schemaapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Insert new package into the system

<a id="opIdPackage_Post"></a>

> Code samples

```bash
curl https://example.com/api/Package \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addOns": [
      {
        "articleId": 0,
        "articleName": "string",
        "articleNumber": 0,
        "articlePrice": 0,
        "endOrder": 0,
        "isIncludeServiceInCharge": true,
        "measureUnit": "string",
        "numberOfItems": 0,
        "startOrder": 0
      }
    ],
    "addonFee": 0,
    "applyForAllGyms": true,
    "availableGyms": [
      {
        "externalGymNumber": 0,
        "gymId": 0,
        "gymName": "string",
        "location": "string"
      }
    ],
    "bindingPeriod": 0,
    "createdDate": "1970-01-01T00:00:00Z",
    "createdUser": "string",
    "description": "string",
    "endDate": "1970-01-01T00:00:00Z",
    "expireInMonths": 0,
    "features": "string",
    "freeMonths": 0,
    "instructionsToGymUsers": "string",
    "instructionsToWebUsers": "string",
    "isActive": true,
    "isAtg": true,
    "isAutoRenew": true,
    "isFirstMonthFree": true,
    "isRegistrationFee": true,
    "isRestAmount": true,
    "isShownInMobile": true,
    "isSponsorPackage": true,
    "maximumGiveAwayRestAmount": 0,
    "memberCanAddAddOns": true,
    "memberCanLeaveWithinFreePeriod": true,
    "memberCanRemoveAddOns": true,
    "modifiedDate": "1970-01-01T00:00:00Z",
    "modifiedUser": "string",
    "monthlyFee": 0,
    "nextPackageNumber": 0,
    "numberOfInstallments": 0,
    "numberOfVisits": 0,
    "packageId": 0,
    "packageName": "string",
    "packageNumber": "string",
    "packageType": "string",
    "perVisitPrice": 0,
    "registrationFee": 0,
    "serviceFee": 0,
    "shownInWeb": true,
    "startDate": "1970-01-01T00:00:00Z",
    "tags": "string",
    "totalPrice": 0
  }'
```

`POST /api/Package`

> Body parameter

```json
{
  "addOns": [
    {
      "articleId": 0,
      "articleName": "string",
      "articleNumber": 0,
      "articlePrice": 0,
      "endOrder": 0,
      "isIncludeServiceInCharge": true,
      "measureUnit": "string",
      "numberOfItems": 0,
      "startOrder": 0
    }
  ],
  "addonFee": 0,
  "applyForAllGyms": true,
  "availableGyms": [
    {
      "externalGymNumber": 0,
      "gymId": 0,
      "gymName": "string",
      "location": "string"
    }
  ],
  "bindingPeriod": 0,
  "createdDate": "1970-01-01T00:00:00Z",
  "createdUser": "string",
  "description": "string",
  "endDate": "1970-01-01T00:00:00Z",
  "expireInMonths": 0,
  "features": "string",
  "freeMonths": 0,
  "instructionsToGymUsers": "string",
  "instructionsToWebUsers": "string",
  "isActive": true,
  "isAtg": true,
  "isAutoRenew": true,
  "isFirstMonthFree": true,
  "isRegistrationFee": true,
  "isRestAmount": true,
  "isShownInMobile": true,
  "isSponsorPackage": true,
  "maximumGiveAwayRestAmount": 0,
  "memberCanAddAddOns": true,
  "memberCanLeaveWithinFreePeriod": true,
  "memberCanRemoveAddOns": true,
  "modifiedDate": "1970-01-01T00:00:00Z",
  "modifiedUser": "string",
  "monthlyFee": 0,
  "nextPackageNumber": 0,
  "numberOfInstallments": 0,
  "numberOfVisits": 0,
  "packageId": 0,
  "packageName": "string",
  "packageNumber": "string",
  "packageType": "string",
  "perVisitPrice": 0,
  "registrationFee": 0,
  "serviceFee": 0,
  "shownInWeb": true,
  "startDate": "1970-01-01T00:00:00Z",
  "tags": "string",
  "totalPrice": 0
}
```

<h3 id="insert-new-package-into-the-system-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PackageDTO](#schemapackagedto)|true|package object|
|» addOns|body|[[PackageItemDTO](#schemapackageitemdto)]|false|Extra articles list added to the given package.<br>            |
|» addonFee|body|number(decimal)|false|sum of addon fees.<br>incoming values for this filed will ignore.<br>            |
|» applyForAllGyms|body|boolean|false|Boolean value to indicate wheather package is available in all the gyms.<br>            |
|» availableGyms|body|[[GymDTO](#schemagymdto)]|false|Gyms list where this package is available.<br>            |
|» bindingPeriod|body|integer(int32)|false|Range of period a member is bound to the contract if he/she choose this package.<br>            |
|» createdDate|body|string(date-time)|false|Package created DateTime.<br>            |
|» createdUser|body|string \| null|false|Package created user.<br>            |
|» description|body|string \| null|false|Common descriptions about package.If there are more instructions <br>             can be stored as comma separated values.<br>            |
|» endDate|body|string(date-time)|false|End date of the package.After that package is not valid for use.<br>            |
|» expireInMonths|body|integer(int32)|false|No of months the fixed package is valid for sale<br>            |
|» features|body|string \| null|false|What are the facilities, features available for package.ex:- wifi,<br>ACm etc.Can be stored as comma seperated values.<br>            |
|» freeMonths|body|integer(int32)|false|No of months gym member can come without payments.<br>            |
|» instructionsToGymUsers|body|string \| null|false|Instruction to the gym members relevant to the package.<br>             If there are more instructions can be stored as comma seperated values.<br>            |
|» instructionsToWebUsers|body|string \| null|false|Instruction to the MRM members relevant to the package.<br>             If there are more instructions can be stored as comma seperated values.<br>            |
|» isActive|body|boolean|false|Boolean value to indicate this package is still active or not.<br>            |
|» isAtg|body|boolean|false|Boolean value to indicate ATG transaction from bank is applicable or not.<br>            |
|» isAutoRenew|body|boolean|false|Boolean value to indicate the contract will auto renew after expiration <br>             if this package would be chosen.<br>            |
|» isFirstMonthFree|body|boolean|false|Boolean value to indicate if the first month charges is free.<br>            |
|» isRegistrationFee|body|boolean|false|Boolean value to indicate this package has registration fee or not.<br>            |
|» isRestAmount|body|boolean|false|Boolean value to indicate rest amount is applicable or not.<br>            |
|» isShownInMobile|body|boolean|false|Boolean value to indicate package is visible in Mobile App or not.<br>            |
|» isSponsorPackage|body|boolean|false|Boolean value to indicate package can be sponsored or not by other party.<br>            |
|» maximumGiveAwayRestAmount|body|number(decimal)|false|If a member join the gym middle of a month via this package, <br>             what is the maximum amount of price can be neglected from payment from the member.<br>            |
|» memberCanAddAddOns|body|boolean|false|Boolean value to indicate member can add extra addons he wish if he choose this package.<br>            |
|» memberCanLeaveWithinFreePeriod|body|boolean|false|Boolean value to indicate if member can leave from contract within <br>             free period if he/she choose this package.<br>            |
|» memberCanRemoveAddOns|body|boolean|false|Boolean value to indicate member can remove already added addons if he choose this package.<br>            |
|» modifiedDate|body|string(date-time)|false|Package last modified DateTime.<br>            |
|» modifiedUser|body|string \| null|false|Package last modified user.<br>            |
|» monthlyFee|body|number(decimal)|false|Monthly installment fee if package is not fixed visit.<br>addition of the servicefee and addon fees divided by binding period.<br>             read only<br>            |
|» nextPackageNumber|body|integer(int32)|false|Next Package the contract continue after the binding period of this package.<br>            |
|» numberOfInstallments|body|integer(int32)|false|Maximum Number of installment a member can divide the package price/cost to pay.<br>            |
|» numberOfVisits|body|integer(int32)|false|If package is fixed visit type, then how many visits are available for this package.<br>            |
|» packageId|body|integer(int32)|false|none|
|» packageName|body|string|true|none|
|» packageNumber|body|string \| null|false|none|
|» packageType|body|string|true|Package type can be either fixed visit or unlimited.<br>            |
|» perVisitPrice|body|number(decimal)|false|Cost/Price of the single visit to gym.<br>            |
|» registrationFee|body|number(decimal)|true|Registartion fee for the package at a gym.<br>             read only<br>            |
|» serviceFee|body|number(decimal)|true|total Service charge of the package for entire period.<br>            |
|» shownInWeb|body|boolean|false|Boolean value to show this package in MRM system or not.<br>            |
|» startDate|body|string(date-time)|false|Start date of the package.<br>            |
|» tags|body|string \| null|false|Comma separated string values in case of need of maintain some labels kind of <br>             stuff relevant to the package.<br>            |
|» totalPrice|body|number(decimal)|false|total price for the package including Addon fees, service fee and registration fee.<br>incoming values for this field will ignore.<br>            |

> Example responses

> 202 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": {
    "messageId": "string",
    "statusText": "string",
    "url": "string"
  }
}
```

> 500 Response

```json
{
  "InnerException": {},
  "Message": "string",
  "Source": "string",
  "StackTrace": "string",
  "customError": null,
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "isCustomErrorObject": true,
  "isModelValidatonError": true,
  "referenceDocumentLink": "string",
  "referenceErrorCode": "string",
  "statusCode": 0
}
```

<h3 id="insert-new-package-into-the-system-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|messageId that can use to get the status of import later on.!|[DefaultResponseDTOOfStatusDTO](#schemadefaultresponsedtoofstatusdto)|
|500|Internal Server Error||[ApiException](#schemaapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Delete existing package

<a id="opIdPackage_Delete"></a>

> Code samples

```bash
curl https://example.com/api/Package \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/Package`

<h3 id="delete-existing-package-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PackageId|query|integer(int32)|false|primary key of package entity|

> Example responses

> 200 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": true
}
```

> 400 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": "string"
}
```

> 404 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": "string"
}
```

> 500 Response

```json
{
  "InnerException": {},
  "Message": "string",
  "Source": "string",
  "StackTrace": "string",
  "customError": null,
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "isCustomErrorObject": true,
  "isModelValidatonError": true,
  "referenceDocumentLink": "string",
  "referenceErrorCode": "string",
  "statusCode": 0
}
```

<h3 id="delete-existing-package-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|status 1  : success, status 404 : package not found, status -2: package already in use |[DefaultResponseDTOOfBoolean](#schemadefaultresponsedtoofboolean)|
|400|Bad Request||[DefaultResponseDTOOfString](#schemadefaultresponsedtoofstring)|
|404|Not Found||[DefaultResponseDTOOfString](#schemadefaultresponsedtoofstring)|
|500|Internal Server Error||[ApiException](#schemaapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Search packages

<a id="opIdPackage_Search"></a>

> Code samples

```bash
curl https://example.com/api/Package/Search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/Package/Search`

<h3 id="search-packages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|searchText|query|string \| null|false|part of package name|
|gymId|query|integer(int32)|false|primary key of TL gym entity|
|type|query|string \| null|false|filter package type.!-- default is 'all'|
|orderBy|query|string \| null|false|order by column.!-- invalid column will give internal server error|
|limit|query|integer(int32)|false|number of recode in result and default is 100. use negative numbers to order by desc|
|offset|query|integer(int32)|false|number of recodes to skip|
|activeStatus|query|integer(int32)|false|active status active : 1, inactive : 2, all 3, deafult : 1|
|categoryId|query|integer(int32)|false|Packge Category Id|
|startpPrice|query|number(decimal)|false|Start price of the price Range|
|endPrice|query|number(decimal)|false|End Price of the price Range|
|requestSource|query|integer(int32)|false|1 : MRM, 2 : Mobile |

> Example responses

> 200 Response

```json
[
  {
    "isError": true,
    "message": "string",
    "responseException": null,
    "result": {
      "activeStatus": true,
      "addonFee": 0,
      "applyForAllGyms": true,
      "bindingPeriod": 0,
      "createdDate": "1970-01-01T00:00:00Z",
      "createdUser": "string",
      "description": "string",
      "features": "string",
      "freeMonths": 0,
      "memberCanRemoveAddOns": true,
      "modifiedDate": "1970-01-01T00:00:00Z",
      "modifiedUser": "string",
      "monthlyFee": 0,
      "numberOfVisits": 0,
      "packageId": 0,
      "packageName": "string",
      "packageNumber": 0,
      "packageType": "string",
      "registrationFee": 0,
      "serviceFee": 0,
      "tags": "string",
      "totalCount": 0,
      "totalPrice": 0
    }
  }
]
```

> 404 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": [
    {
      "activeStatus": true,
      "addonFee": 0,
      "applyForAllGyms": true,
      "bindingPeriod": 0,
      "createdDate": "1970-01-01T00:00:00Z",
      "createdUser": "string",
      "description": "string",
      "features": "string",
      "freeMonths": 0,
      "memberCanRemoveAddOns": true,
      "modifiedDate": "1970-01-01T00:00:00Z",
      "modifiedUser": "string",
      "monthlyFee": 0,
      "numberOfVisits": 0,
      "packageId": 0,
      "packageName": "string",
      "packageNumber": 0,
      "packageType": "string",
      "registrationFee": 0,
      "serviceFee": 0,
      "tags": "string",
      "totalCount": 0,
      "totalPrice": 0
    }
  ]
}
```

> 500 Response

```json
{
  "InnerException": {},
  "Message": "string",
  "Source": "string",
  "StackTrace": "string",
  "customError": null,
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "isCustomErrorObject": true,
  "isModelValidatonError": true,
  "referenceDocumentLink": "string",
  "referenceErrorCode": "string",
  "statusCode": 0
}
```

<h3 id="search-packages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|basic information of package entity|Inline|
|404|Not Found||[DefaultResponseDTOOfListOfPackageSearchDTO](#schemadefaultresponsedtooflistofpackagesearchdto)|
|500|Internal Server Error||[ApiException](#schemaapiexception)|

<h3 id="search-packages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DefaultResponseDTOOfPackageSearchDTO](#schemadefaultresponsedtoofpackagesearchdto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Status update of existing package

<a id="opIdPackage_UpdateStatus"></a>

> Code samples

```bash
curl https://example.com/api/Package/UpdateStatus \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/Package/UpdateStatus`

<h3 id="status-update-of-existing-package-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageId|query|integer(int32)|false|package Id|
|status|query|integer(int32)|false|status : 1 activate, 2 : deactivate|
|userName|query|string \| null|false|Status updated User|

> Example responses

> 200 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": true
}
```

> 400 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": "string"
}
```

> 404 Response

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": "string"
}
```

> 500 Response

```json
{
  "InnerException": {},
  "Message": "string",
  "Source": "string",
  "StackTrace": "string",
  "customError": null,
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "isCustomErrorObject": true,
  "isModelValidatonError": true,
  "referenceDocumentLink": "string",
  "referenceErrorCode": "string",
  "statusCode": 0
}
```

<h3 id="status-update-of-existing-package-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|status 1 : success, status 404 : package not found, status -2: package already in use |[DefaultResponseDTOOfBoolean](#schemadefaultresponsedtoofboolean)|
|400|Bad Request||[DefaultResponseDTOOfString](#schemadefaultresponsedtoofstring)|
|404|Not Found||[DefaultResponseDTOOfString](#schemadefaultresponsedtoofstring)|
|500|Internal Server Error||[ApiException](#schemaapiexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-status">Status</h1>

## Get the current status of message

<a id="opIdStatus_Get"></a>

> Code samples

```bash
curl https://example.com/api/Status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/Status`

<h3 id="get-the-current-status-of-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|query|string \| null|false|respose of POST request|

> Example responses

> 200 Response

```json
{
  "messageId": "string",
  "referenceId": 0,
  "source": null,
  "statusId": 0,
  "statusText": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "extensions": {
    "property1": null,
    "property2": null
  },
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-the-current-status-of-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|same response result will retrun with different status and messageText|[MessageStatus](#schemamessagestatus)|
|404|Not Found||[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-test">Test</h1>

## Get the all Test objects.

<a id="opIdTest_get"></a>

> Code samples

```bash
curl https://example.com/api/Test \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/Test`

> Example responses

> 200 Response

```json
{
  "id": 0
}
```

<h3 id="get-the-all-test-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API Response with test objects as a list.|[TestDTO](#schematestdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-user">User</h1>

## Get all Users detail This will return all properties related to User entity

<a id="opIdUser_Get"></a>

> Code samples

```bash
curl https://example.com/api/User \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/User`

> Example responses

> 200 Response

```json
{
  "accountNumber": "string",
  "externalEntityNumber": "string",
  "guardian": 0,
  "gymNumber": "string",
  "introduceBy": 0,
  "name": "string",
  "number": "string",
  "typeId": 0,
  "userId": 0
}
```

<h3 id="get-all-users-detail-this-will-return-all-properties-related-to-user-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API Response with User entity|[UserDTO](#schemauserdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Register a new User

<a id="opIdUser_registerUser"></a>

> Code samples

```bash
curl https://example.com/api/User/registerUser \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/User/registerUser`

<h3 id="register-a-new-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserId|query|integer(int32)|false|Indentity number(primary key) for user object. Generated in DB table when inserting a record.<br>            |
|AccountNumber|query|string \| null|false|Account number of the user.It can be any stakeholder of the application.even can be a gym.<br>            |
|GymNumber|query|string \| null|false|If this user is a gym, then the gym number.<br>            |
|ExternalEntityNumber|query|string \| null|false|Entity number that make a relationship with BOX API DB.<br>            |
|Name|query|string \| null|false|Name of the user.<br>            |
|Number|query|string \| null|false|Unique number maintain by application to idenify user.<br>            |
|IntroduceBy|query|integer(int32)|false|If Someone introduced this user to the system, then that user's UserId.<br>            |
|Guardian|query|integer(int32)|false|Gaurdian of the this user if he/she is under 18 years old.<br>            |
|TypeId|query|integer(int32)|false|Type of the user.<br>            |

<h3 id="register-a-new-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API Response|None|
|404|Not Found||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Update an exsisting User

<a id="opIdUser_updateUser"></a>

> Code samples

```bash
curl https://example.com/api/User/updateuser \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/User/updateuser`

<h3 id="update-an-exsisting-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserId|query|integer(int32)|false|Indentity number(primary key) for user object. Generated in DB table when inserting a record.<br>            |
|AccountNumber|query|string \| null|false|Account number of the user.It can be any stakeholder of the application.even can be a gym.<br>            |
|GymNumber|query|string \| null|false|If this user is a gym, then the gym number.<br>            |
|ExternalEntityNumber|query|string \| null|false|Entity number that make a relationship with BOX API DB.<br>            |
|Name|query|string \| null|false|Name of the user.<br>            |
|Number|query|string \| null|false|Unique number maintain by application to idenify user.<br>            |
|IntroduceBy|query|integer(int32)|false|If Someone introduced this user to the system, then that user's UserId.<br>            |
|Guardian|query|integer(int32)|false|Gaurdian of the this user if he/she is under 18 years old.<br>            |
|TypeId|query|integer(int32)|false|Type of the user.<br>            |

<h3 id="update-an-exsisting-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API Response true or false|None|
|404|Not Found||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

# Schemas

<h2 id="tocS_ApiException">ApiException</h2>
<!-- backwards compatibility -->
<a id="schemaapiexception"></a>
<a id="schema_ApiException"></a>
<a id="tocSapiexception"></a>
<a id="tocsapiexception"></a>

```json
{
  "InnerException": {},
  "Message": "string",
  "Source": "string",
  "StackTrace": "string",
  "customError": null,
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "isCustomErrorObject": true,
  "isModelValidatonError": true,
  "referenceDocumentLink": "string",
  "referenceErrorCode": "string",
  "statusCode": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InnerException|[Exception](#schemaexception) \| null|false|none|none|
|Message|string|false|none|none|
|Source|string \| null|false|none|none|
|StackTrace|string \| null|false|none|none|
|customError|object \| null|false|none|none|
|errors|[[ValidationError](#schemavalidationerror)]|false|none|none|
|isCustomErrorObject|boolean|false|none|none|
|isModelValidatonError|boolean|false|none|none|
|referenceDocumentLink|string \| null|false|none|none|
|referenceErrorCode|string \| null|false|none|none|
|statusCode|integer(int32)|false|none|none|

<h2 id="tocS_ApiResponse">ApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse"></a>
<a id="schema_ApiResponse"></a>
<a id="tocSapiresponse"></a>
<a id="tocsapiresponse"></a>

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": null,
  "statusCode": 0,
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isError|boolean|false|none|none|
|message|string \| null|false|none|none|
|responseException|object \| null|false|none|none|
|result|object \| null|false|none|none|
|statusCode|integer(int32)|false|none|none|
|version|string \| null|false|none|none|

<h2 id="tocS_ArticleDTO">ArticleDTO</h2>
<!-- backwards compatibility -->
<a id="schemaarticledto"></a>
<a id="schema_ArticleDTO"></a>
<a id="tocSarticledto"></a>
<a id="tocsarticledto"></a>

```json
{
  "activeStatus": true,
  "applyForAllGyms": true,
  "articleId": 0,
  "availableGyms": [
    {
      "externalGymNumber": 0,
      "gymId": 0,
      "gymName": "string",
      "location": "string"
    }
  ],
  "availableQty": 0,
  "barcode": "string",
  "createdDate": "1970-01-01T00:00:00Z",
  "createdUser": "string",
  "cronExpression": "string",
  "description": "string",
  "discount": 0,
  "employeeDiscount": 0,
  "employeePrice": 0,
  "gymArticles": [
    {
      "articleId": 0,
      "availableQty": 0,
      "createdUser": "string",
      "employeeDiscount": 0,
      "employeePrice": 0,
      "gymId": 0,
      "gymIdList": "string",
      "gymName": "string",
      "id": 0,
      "isDefault": true,
      "isInventoryItem": true,
      "isObsolete": true,
      "modifiedUser": "string",
      "reorderLevel": 0,
      "revenueAccountId": 0,
      "sellingPrice": 0
    }
  ],
  "isAddOn": true,
  "isInventoryItem": true,
  "isObsolete": true,
  "measureUnit": "string",
  "modifiedDate": "1970-01-01T00:00:00Z",
  "modifiedUser": "string",
  "name": "string",
  "number": 0,
  "price": 0,
  "reorderLevel": 0,
  "revenueAccountId": 0,
  "sellingPrice": 0,
  "tags": "string",
  "type": "string",
  "vat": 0,
  "vatApplicable": true
}
```

The ArticleDTO Class.
Contains relevant fields of Article DTO by masking actual Article entity's fields in application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeStatus|boolean|false|none|Active Status |
|applyForAllGyms|boolean|false|none|none|
|articleId|integer(int32)|false|none|none|
|availableGyms|[[GymDTO](#schemagymdto)]|true|none|none|
|availableQty|number(decimal)|false|none|Default AvailableQty|
|barcode|string \| null|false|none|none|
|createdDate|string(date-time)|false|none|none|
|createdUser|string \| null|false|none|none|
|cronExpression|string \| null|false|none|Access Schedule CRON Expression |
|description|string \| null|false|none|none|
|discount|number(decimal)|false|none|none|
|employeeDiscount|number(decimal)|false|none|Default EmployeeDiscount|
|employeePrice|number(decimal)|false|none|Default EmployeePrice|
|gymArticles|[[GymArticleDetailsDTO](#schemagymarticledetailsdto)]|false|none|Gym Customizations |
|isAddOn|boolean|false|none|none|
|isInventoryItem|boolean|false|none|Default IsInventoryItem of the Article |
|isObsolete|boolean|false|none|Default IsObsolete of the Article |
|measureUnit|string|true|none|none|
|modifiedDate|string(date-time)|false|none|none|
|modifiedUser|string \| null|false|none|none|
|name|string|true|none|none|
|number|integer(int32)|false|none|none|
|price|number(decimal)|true|none|none|
|reorderLevel|number(decimal)|false|none|Deafault ReorderLevel|
|revenueAccountId|integer(int32)|false|none|Default Revenue account|
|sellingPrice|number(decimal)|false|none|Default SellingPrice|
|tags|string \| null|false|none|none|
|type|string|true|none|none|
|vat|number(decimal)|false|none|none|
|vatApplicable|boolean|false|none|VAT Applicable |

<h2 id="tocS_ArticleSearchDTO">ArticleSearchDTO</h2>
<!-- backwards compatibility -->
<a id="schemaarticlesearchdto"></a>
<a id="schema_ArticleSearchDTO"></a>
<a id="tocSarticlesearchdto"></a>
<a id="tocsarticlesearchdto"></a>

```json
{
  "activeStatus": true,
  "applyForAllGyms": true,
  "articleId": 0,
  "createdDate": "1970-01-01T00:00:00Z",
  "createdUser": "string",
  "description": "string",
  "measureUnit": "string",
  "modifiedDate": "1970-01-01T00:00:00Z",
  "modifiedUser": "string",
  "name": "string",
  "number": 0,
  "price": 0,
  "sellingPrice": 0,
  "tags": "string",
  "totalCount": 0,
  "type": "string"
}
```

The ArticleSearchDTO Class.
Contains relevant fields of ArticleSearch DTO by masking actual Article entity's fields in application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeStatus|boolean|false|none|Active Status |
|applyForAllGyms|boolean|false|none|none|
|articleId|integer(int32)|false|none|none|
|createdDate|string(date-time)|false|none|none|
|createdUser|string \| null|false|none|none|
|description|string \| null|false|none|none|
|measureUnit|string \| null|false|none|MeasureUnit |
|modifiedDate|string(date-time)|false|none|none|
|modifiedUser|string \| null|false|none|none|
|name|string \| null|false|none|none|
|number|integer(int32)|false|none|none|
|price|number(decimal)|false|none|none|
|sellingPrice|number(decimal)|false|none|Actual Selling price of the article |
|tags|string \| null|false|none|none|
|totalCount|integer(int32)|false|none|total number of recode for particular search |
|type|string \| null|false|none|article type|

<h2 id="tocS_DefaultResponseDTOOfArticleDTO">DefaultResponseDTOOfArticleDTO</h2>
<!-- backwards compatibility -->
<a id="schemadefaultresponsedtoofarticledto"></a>
<a id="schema_DefaultResponseDTOOfArticleDTO"></a>
<a id="tocSdefaultresponsedtoofarticledto"></a>
<a id="tocsdefaultresponsedtoofarticledto"></a>

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": {
    "activeStatus": true,
    "applyForAllGyms": true,
    "articleId": 0,
    "availableGyms": [
      {
        "externalGymNumber": 0,
        "gymId": 0,
        "gymName": "string",
        "location": "string"
      }
    ],
    "availableQty": 0,
    "barcode": "string",
    "createdDate": "1970-01-01T00:00:00Z",
    "createdUser": "string",
    "cronExpression": "string",
    "description": "string",
    "discount": 0,
    "employeeDiscount": 0,
    "employeePrice": 0,
    "gymArticles": [
      {
        "articleId": 0,
        "availableQty": 0,
        "createdUser": "string",
        "employeeDiscount": 0,
        "employeePrice": 0,
        "gymId": 0,
        "gymIdList": "string",
        "gymName": "string",
        "id": 0,
        "isDefault": true,
        "isInventoryItem": true,
        "isObsolete": true,
        "modifiedUser": "string",
        "reorderLevel": 0,
        "revenueAccountId": 0,
        "sellingPrice": 0
      }
    ],
    "isAddOn": true,
    "isInventoryItem": true,
    "isObsolete": true,
    "measureUnit": "string",
    "modifiedDate": "1970-01-01T00:00:00Z",
    "modifiedUser": "string",
    "name": "string",
    "number": 0,
    "price": 0,
    "reorderLevel": 0,
    "revenueAccountId": 0,
    "sellingPrice": 0,
    "tags": "string",
    "type": "string",
    "vat": 0,
    "vatApplicable": true
  }
}
```

The DefaultResponseDTO Class.
Contains fields of DefaultResponse DTO in application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isError|boolean|false|none|none|
|message|string \| null|false|none|none|
|responseException|object \| null|false|none|none|
|result|[ArticleDTO](#schemaarticledto) \| null|false|none|none|

<h2 id="tocS_DefaultResponseDTOOfBoolean">DefaultResponseDTOOfBoolean</h2>
<!-- backwards compatibility -->
<a id="schemadefaultresponsedtoofboolean"></a>
<a id="schema_DefaultResponseDTOOfBoolean"></a>
<a id="tocSdefaultresponsedtoofboolean"></a>
<a id="tocsdefaultresponsedtoofboolean"></a>

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": true
}
```

The DefaultResponseDTO Class.
Contains fields of DefaultResponse DTO in application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isError|boolean|false|none|none|
|message|string \| null|false|none|none|
|responseException|object \| null|false|none|none|
|result|boolean|false|none|none|

<h2 id="tocS_DefaultResponseDTOOfGymDTO">DefaultResponseDTOOfGymDTO</h2>
<!-- backwards compatibility -->
<a id="schemadefaultresponsedtoofgymdto"></a>
<a id="schema_DefaultResponseDTOOfGymDTO"></a>
<a id="tocSdefaultresponsedtoofgymdto"></a>
<a id="tocsdefaultresponsedtoofgymdto"></a>

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": {
    "externalGymNumber": 0,
    "gymId": 0,
    "gymName": "string",
    "location": "string"
  }
}
```

The DefaultResponseDTO Class.
Contains fields of DefaultResponse DTO in application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isError|boolean|false|none|none|
|message|string \| null|false|none|none|
|responseException|object \| null|false|none|none|
|result|[GymDTO](#schemagymdto) \| null|false|none|none|

<h2 id="tocS_DefaultResponseDTOOfInteger">DefaultResponseDTOOfInteger</h2>
<!-- backwards compatibility -->
<a id="schemadefaultresponsedtoofinteger"></a>
<a id="schema_DefaultResponseDTOOfInteger"></a>
<a id="tocSdefaultresponsedtoofinteger"></a>
<a id="tocsdefaultresponsedtoofinteger"></a>

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": 0
}
```

The DefaultResponseDTO Class.
Contains fields of DefaultResponse DTO in application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isError|boolean|false|none|none|
|message|string \| null|false|none|none|
|responseException|object \| null|false|none|none|
|result|integer(int32)|false|none|none|

<h2 id="tocS_DefaultResponseDTOOfListOfArticleSearchDTO">DefaultResponseDTOOfListOfArticleSearchDTO</h2>
<!-- backwards compatibility -->
<a id="schemadefaultresponsedtooflistofarticlesearchdto"></a>
<a id="schema_DefaultResponseDTOOfListOfArticleSearchDTO"></a>
<a id="tocSdefaultresponsedtooflistofarticlesearchdto"></a>
<a id="tocsdefaultresponsedtooflistofarticlesearchdto"></a>

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": [
    {
      "activeStatus": true,
      "applyForAllGyms": true,
      "articleId": 0,
      "createdDate": "1970-01-01T00:00:00Z",
      "createdUser": "string",
      "description": "string",
      "measureUnit": "string",
      "modifiedDate": "1970-01-01T00:00:00Z",
      "modifiedUser": "string",
      "name": "string",
      "number": 0,
      "price": 0,
      "sellingPrice": 0,
      "tags": "string",
      "totalCount": 0,
      "type": "string"
    }
  ]
}
```

The DefaultResponseDTO Class.
Contains fields of DefaultResponse DTO in application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isError|boolean|false|none|none|
|message|string \| null|false|none|none|
|responseException|object \| null|false|none|none|
|result|[[ArticleSearchDTO](#schemaarticlesearchdto)]|false|none|none|

<h2 id="tocS_DefaultResponseDTOOfListOfPackageSearchDTO">DefaultResponseDTOOfListOfPackageSearchDTO</h2>
<!-- backwards compatibility -->
<a id="schemadefaultresponsedtooflistofpackagesearchdto"></a>
<a id="schema_DefaultResponseDTOOfListOfPackageSearchDTO"></a>
<a id="tocSdefaultresponsedtooflistofpackagesearchdto"></a>
<a id="tocsdefaultresponsedtooflistofpackagesearchdto"></a>

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": [
    {
      "activeStatus": true,
      "addonFee": 0,
      "applyForAllGyms": true,
      "bindingPeriod": 0,
      "createdDate": "1970-01-01T00:00:00Z",
      "createdUser": "string",
      "description": "string",
      "features": "string",
      "freeMonths": 0,
      "memberCanRemoveAddOns": true,
      "modifiedDate": "1970-01-01T00:00:00Z",
      "modifiedUser": "string",
      "monthlyFee": 0,
      "numberOfVisits": 0,
      "packageId": 0,
      "packageName": "string",
      "packageNumber": 0,
      "packageType": "string",
      "registrationFee": 0,
      "serviceFee": 0,
      "tags": "string",
      "totalCount": 0,
      "totalPrice": 0
    }
  ]
}
```

The DefaultResponseDTO Class.
Contains fields of DefaultResponse DTO in application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isError|boolean|false|none|none|
|message|string \| null|false|none|none|
|responseException|object \| null|false|none|none|
|result|[[PackageSearchDTO](#schemapackagesearchdto)]|false|none|none|

<h2 id="tocS_DefaultResponseDTOOfPackageDTO">DefaultResponseDTOOfPackageDTO</h2>
<!-- backwards compatibility -->
<a id="schemadefaultresponsedtoofpackagedto"></a>
<a id="schema_DefaultResponseDTOOfPackageDTO"></a>
<a id="tocSdefaultresponsedtoofpackagedto"></a>
<a id="tocsdefaultresponsedtoofpackagedto"></a>

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": {
    "addOns": [
      {
        "articleId": 0,
        "articleName": "string",
        "articleNumber": 0,
        "articlePrice": 0,
        "endOrder": 0,
        "isIncludeServiceInCharge": true,
        "measureUnit": "string",
        "numberOfItems": 0,
        "startOrder": 0
      }
    ],
    "addonFee": 0,
    "applyForAllGyms": true,
    "availableGyms": [
      {
        "externalGymNumber": 0,
        "gymId": 0,
        "gymName": "string",
        "location": "string"
      }
    ],
    "bindingPeriod": 0,
    "createdDate": "1970-01-01T00:00:00Z",
    "createdUser": "string",
    "description": "string",
    "endDate": "1970-01-01T00:00:00Z",
    "expireInMonths": 0,
    "features": "string",
    "freeMonths": 0,
    "instructionsToGymUsers": "string",
    "instructionsToWebUsers": "string",
    "isActive": true,
    "isAtg": true,
    "isAutoRenew": true,
    "isFirstMonthFree": true,
    "isRegistrationFee": true,
    "isRestAmount": true,
    "isShownInMobile": true,
    "isSponsorPackage": true,
    "maximumGiveAwayRestAmount": 0,
    "memberCanAddAddOns": true,
    "memberCanLeaveWithinFreePeriod": true,
    "memberCanRemoveAddOns": true,
    "modifiedDate": "1970-01-01T00:00:00Z",
    "modifiedUser": "string",
    "monthlyFee": 0,
    "nextPackageNumber": 0,
    "numberOfInstallments": 0,
    "numberOfVisits": 0,
    "packageId": 0,
    "packageName": "string",
    "packageNumber": "string",
    "packageType": "string",
    "perVisitPrice": 0,
    "registrationFee": 0,
    "serviceFee": 0,
    "shownInWeb": true,
    "startDate": "1970-01-01T00:00:00Z",
    "tags": "string",
    "totalPrice": 0
  }
}
```

The DefaultResponseDTO Class.
Contains fields of DefaultResponse DTO in application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isError|boolean|false|none|none|
|message|string \| null|false|none|none|
|responseException|object \| null|false|none|none|
|result|[PackageDTO](#schemapackagedto) \| null|false|none|none|

<h2 id="tocS_DefaultResponseDTOOfPackageSearchDTO">DefaultResponseDTOOfPackageSearchDTO</h2>
<!-- backwards compatibility -->
<a id="schemadefaultresponsedtoofpackagesearchdto"></a>
<a id="schema_DefaultResponseDTOOfPackageSearchDTO"></a>
<a id="tocSdefaultresponsedtoofpackagesearchdto"></a>
<a id="tocsdefaultresponsedtoofpackagesearchdto"></a>

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": {
    "activeStatus": true,
    "addonFee": 0,
    "applyForAllGyms": true,
    "bindingPeriod": 0,
    "createdDate": "1970-01-01T00:00:00Z",
    "createdUser": "string",
    "description": "string",
    "features": "string",
    "freeMonths": 0,
    "memberCanRemoveAddOns": true,
    "modifiedDate": "1970-01-01T00:00:00Z",
    "modifiedUser": "string",
    "monthlyFee": 0,
    "numberOfVisits": 0,
    "packageId": 0,
    "packageName": "string",
    "packageNumber": 0,
    "packageType": "string",
    "registrationFee": 0,
    "serviceFee": 0,
    "tags": "string",
    "totalCount": 0,
    "totalPrice": 0
  }
}
```

The DefaultResponseDTO Class.
Contains fields of DefaultResponse DTO in application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isError|boolean|false|none|none|
|message|string \| null|false|none|none|
|responseException|object \| null|false|none|none|
|result|[PackageSearchDTO](#schemapackagesearchdto) \| null|false|none|none|

<h2 id="tocS_DefaultResponseDTOOfStatusDTO">DefaultResponseDTOOfStatusDTO</h2>
<!-- backwards compatibility -->
<a id="schemadefaultresponsedtoofstatusdto"></a>
<a id="schema_DefaultResponseDTOOfStatusDTO"></a>
<a id="tocSdefaultresponsedtoofstatusdto"></a>
<a id="tocsdefaultresponsedtoofstatusdto"></a>

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": {
    "messageId": "string",
    "statusText": "string",
    "url": "string"
  }
}
```

The DefaultResponseDTO Class.
Contains fields of DefaultResponse DTO in application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isError|boolean|false|none|none|
|message|string \| null|false|none|none|
|responseException|object \| null|false|none|none|
|result|[StatusDTO](#schemastatusdto) \| null|false|none|none|

<h2 id="tocS_DefaultResponseDTOOfString">DefaultResponseDTOOfString</h2>
<!-- backwards compatibility -->
<a id="schemadefaultresponsedtoofstring"></a>
<a id="schema_DefaultResponseDTOOfString"></a>
<a id="tocSdefaultresponsedtoofstring"></a>
<a id="tocsdefaultresponsedtoofstring"></a>

```json
{
  "isError": true,
  "message": "string",
  "responseException": null,
  "result": "string"
}
```

The DefaultResponseDTO Class.
Contains fields of DefaultResponse DTO in application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isError|boolean|false|none|none|
|message|string \| null|false|none|none|
|responseException|object \| null|false|none|none|
|result|string \| null|false|none|none|

<h2 id="tocS_Exception">Exception</h2>
<!-- backwards compatibility -->
<a id="schemaexception"></a>
<a id="schema_Exception"></a>
<a id="tocSexception"></a>
<a id="tocsexception"></a>

```json
{
  "InnerException": {
    "InnerException": {},
    "Message": "string",
    "Source": "string",
    "StackTrace": "string"
  },
  "Message": "string",
  "Source": "string",
  "StackTrace": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InnerException|[Exception](#schemaexception) \| null|false|none|none|
|Message|string|false|none|none|
|Source|string \| null|false|none|none|
|StackTrace|string \| null|false|none|none|

<h2 id="tocS_GymArticleDetailsDTO">GymArticleDetailsDTO</h2>
<!-- backwards compatibility -->
<a id="schemagymarticledetailsdto"></a>
<a id="schema_GymArticleDetailsDTO"></a>
<a id="tocSgymarticledetailsdto"></a>
<a id="tocsgymarticledetailsdto"></a>

```json
{
  "articleId": 0,
  "availableQty": 0,
  "createdUser": "string",
  "employeeDiscount": 0,
  "employeePrice": 0,
  "gymId": 0,
  "gymIdList": "string",
  "gymName": "string",
  "id": 0,
  "isDefault": true,
  "isInventoryItem": true,
  "isObsolete": true,
  "modifiedUser": "string",
  "reorderLevel": 0,
  "revenueAccountId": 0,
  "sellingPrice": 0
}
```

The GymArticleDetailsDTO Class.
Contains fields of GymArticleDetails DTO in application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|articleId|integer(int32)|false|none|none|
|availableQty|number(decimal)|false|none|none|
|createdUser|string \| null|false|none|Created User |
|employeeDiscount|number(decimal)|false|none|none|
|employeePrice|number(decimal)|false|none|none|
|gymId|integer(int32)|false|none|Gym Id where article is related |
|gymIdList|string \| null|false|none|GymId - Gym Id string with comma separated GymIds |
|gymName|string \| null|false|none|Gym Name|
|id|integer(int32)|false|none|none|
|isDefault|boolean|false|none|Set as the default values for the article |
|isInventoryItem|boolean|false|none|none|
|isObsolete|boolean|false|none|none|
|modifiedUser|string \| null|false|none|Modified user|
|reorderLevel|number(decimal)|false|none|none|
|revenueAccountId|integer(int32)|false|none|Revenue account Id|
|sellingPrice|number(decimal)|false|none|none|

<h2 id="tocS_GymDTO">GymDTO</h2>
<!-- backwards compatibility -->
<a id="schemagymdto"></a>
<a id="schema_GymDTO"></a>
<a id="tocSgymdto"></a>
<a id="tocsgymdto"></a>

```json
{
  "externalGymNumber": 0,
  "gymId": 0,
  "gymName": "string",
  "location": "string"
}
```

The GymDTO Class.
Contains relevant fields of Gym DTO by masking actual Gym entity's fields in application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalGymNumber|integer(int32)|false|none|none|
|gymId|integer(int32)|false|none|none|
|gymName|string \| null|false|none|none|
|location|string \| null|false|none|none|

<h2 id="tocS_LoginDTO">LoginDTO</h2>
<!-- backwards compatibility -->
<a id="schemalogindto"></a>
<a id="schema_LoginDTO"></a>
<a id="tocSlogindto"></a>
<a id="tocslogindto"></a>

```json
{
  "password": "string",
  "remember": true,
  "username": "string"
}
```

The LoginDTO Class.
Contains relevant fields of Login DTO.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string \| null|false|none|none|
|remember|boolean|false|none|none|
|username|string \| null|false|none|none|

<h2 id="tocS_MeasureUnitDTO">MeasureUnitDTO</h2>
<!-- backwards compatibility -->
<a id="schemameasureunitdto"></a>
<a id="schema_MeasureUnitDTO"></a>
<a id="tocSmeasureunitdto"></a>
<a id="tocsmeasureunitdto"></a>

```json
{
  "id": 0,
  "name": "string",
  "type": "string"
}
```

Mesure unit to represent article mesure unit

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|Id of the table|
|name|string \| null|false|none|Mesure Unit Type|
|type|string \| null|false|none|Type of the article used with (all, service, item)|

<h2 id="tocS_MemberDTO">MemberDTO</h2>
<!-- backwards compatibility -->
<a id="schemamemberdto"></a>
<a id="schema_MemberDTO"></a>
<a id="tocSmemberdto"></a>
<a id="tocsmemberdto"></a>

```json
{
  "name": "string"
}
```

The MemeberDTO Class.
Contains relevant fields of Member DTO by masking actual Member entity's fields in application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|

<h2 id="tocS_MessageStatus">MessageStatus</h2>
<!-- backwards compatibility -->
<a id="schemamessagestatus"></a>
<a id="schema_MessageStatus"></a>
<a id="tocSmessagestatus"></a>
<a id="tocsmessagestatus"></a>

```json
{
  "messageId": "string",
  "referenceId": 0,
  "source": null,
  "statusId": 0,
  "statusText": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageId|string \| null|false|none|none|
|referenceId|integer(int32)|false|none|none|
|source|object \| null|false|none|none|
|statusId|integer(int32)|false|none|none|
|statusText|string \| null|false|none|none|

<h2 id="tocS_PackageDTO">PackageDTO</h2>
<!-- backwards compatibility -->
<a id="schemapackagedto"></a>
<a id="schema_PackageDTO"></a>
<a id="tocSpackagedto"></a>
<a id="tocspackagedto"></a>

```json
{
  "addOns": [
    {
      "articleId": 0,
      "articleName": "string",
      "articleNumber": 0,
      "articlePrice": 0,
      "endOrder": 0,
      "isIncludeServiceInCharge": true,
      "measureUnit": "string",
      "numberOfItems": 0,
      "startOrder": 0
    }
  ],
  "addonFee": 0,
  "applyForAllGyms": true,
  "availableGyms": [
    {
      "externalGymNumber": 0,
      "gymId": 0,
      "gymName": "string",
      "location": "string"
    }
  ],
  "bindingPeriod": 0,
  "createdDate": "1970-01-01T00:00:00Z",
  "createdUser": "string",
  "description": "string",
  "endDate": "1970-01-01T00:00:00Z",
  "expireInMonths": 0,
  "features": "string",
  "freeMonths": 0,
  "instructionsToGymUsers": "string",
  "instructionsToWebUsers": "string",
  "isActive": true,
  "isAtg": true,
  "isAutoRenew": true,
  "isFirstMonthFree": true,
  "isRegistrationFee": true,
  "isRestAmount": true,
  "isShownInMobile": true,
  "isSponsorPackage": true,
  "maximumGiveAwayRestAmount": 0,
  "memberCanAddAddOns": true,
  "memberCanLeaveWithinFreePeriod": true,
  "memberCanRemoveAddOns": true,
  "modifiedDate": "1970-01-01T00:00:00Z",
  "modifiedUser": "string",
  "monthlyFee": 0,
  "nextPackageNumber": 0,
  "numberOfInstallments": 0,
  "numberOfVisits": 0,
  "packageId": 0,
  "packageName": "string",
  "packageNumber": "string",
  "packageType": "string",
  "perVisitPrice": 0,
  "registrationFee": 0,
  "serviceFee": 0,
  "shownInWeb": true,
  "startDate": "1970-01-01T00:00:00Z",
  "tags": "string",
  "totalPrice": 0
}
```

The PackageDTO Class.
Contains relevant fields of Package DTO by masking actual Package entity's fields in application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addOns|[[PackageItemDTO](#schemapackageitemdto)]|false|none|Extra articles list added to the given package.<br>            |
|addonFee|number(decimal)|false|none|sum of addon fees.<br>incoming values for this filed will ignore.<br>            |
|applyForAllGyms|boolean|false|none|Boolean value to indicate wheather package is available in all the gyms.<br>            |
|availableGyms|[[GymDTO](#schemagymdto)]|false|none|Gyms list where this package is available.<br>            |
|bindingPeriod|integer(int32)|false|none|Range of period a member is bound to the contract if he/she choose this package.<br>            |
|createdDate|string(date-time)|false|none|Package created DateTime.<br>            |
|createdUser|string \| null|false|none|Package created user.<br>            |
|description|string \| null|false|none|Common descriptions about package.If there are more instructions <br>             can be stored as comma separated values.<br>            |
|endDate|string(date-time)|false|none|End date of the package.After that package is not valid for use.<br>            |
|expireInMonths|integer(int32)|false|none|No of months the fixed package is valid for sale<br>            |
|features|string \| null|false|none|What are the facilities, features available for package.ex:- wifi,<br>ACm etc.Can be stored as comma seperated values.<br>            |
|freeMonths|integer(int32)|false|none|No of months gym member can come without payments.<br>            |
|instructionsToGymUsers|string \| null|false|none|Instruction to the gym members relevant to the package.<br>             If there are more instructions can be stored as comma seperated values.<br>            |
|instructionsToWebUsers|string \| null|false|none|Instruction to the MRM members relevant to the package.<br>             If there are more instructions can be stored as comma seperated values.<br>            |
|isActive|boolean|false|none|Boolean value to indicate this package is still active or not.<br>            |
|isAtg|boolean|false|none|Boolean value to indicate ATG transaction from bank is applicable or not.<br>            |
|isAutoRenew|boolean|false|none|Boolean value to indicate the contract will auto renew after expiration <br>             if this package would be chosen.<br>            |
|isFirstMonthFree|boolean|false|none|Boolean value to indicate if the first month charges is free.<br>            |
|isRegistrationFee|boolean|false|none|Boolean value to indicate this package has registration fee or not.<br>            |
|isRestAmount|boolean|false|none|Boolean value to indicate rest amount is applicable or not.<br>            |
|isShownInMobile|boolean|false|none|Boolean value to indicate package is visible in Mobile App or not.<br>            |
|isSponsorPackage|boolean|false|none|Boolean value to indicate package can be sponsored or not by other party.<br>            |
|maximumGiveAwayRestAmount|number(decimal)|false|none|If a member join the gym middle of a month via this package, <br>             what is the maximum amount of price can be neglected from payment from the member.<br>            |
|memberCanAddAddOns|boolean|false|none|Boolean value to indicate member can add extra addons he wish if he choose this package.<br>            |
|memberCanLeaveWithinFreePeriod|boolean|false|none|Boolean value to indicate if member can leave from contract within <br>             free period if he/she choose this package.<br>            |
|memberCanRemoveAddOns|boolean|false|none|Boolean value to indicate member can remove already added addons if he choose this package.<br>            |
|modifiedDate|string(date-time)|false|none|Package last modified DateTime.<br>            |
|modifiedUser|string \| null|false|none|Package last modified user.<br>            |
|monthlyFee|number(decimal)|false|none|Monthly installment fee if package is not fixed visit.<br>addition of the servicefee and addon fees divided by binding period.<br>             read only<br>            |
|nextPackageNumber|integer(int32)|false|none|Next Package the contract continue after the binding period of this package.<br>            |
|numberOfInstallments|integer(int32)|false|none|Maximum Number of installment a member can divide the package price/cost to pay.<br>            |
|numberOfVisits|integer(int32)|false|none|If package is fixed visit type, then how many visits are available for this package.<br>            |
|packageId|integer(int32)|false|none|none|
|packageName|string|true|none|none|
|packageNumber|string \| null|false|none|none|
|packageType|string|true|none|Package type can be either fixed visit or unlimited.<br>            |
|perVisitPrice|number(decimal)|false|none|Cost/Price of the single visit to gym.<br>            |
|registrationFee|number(decimal)|true|none|Registartion fee for the package at a gym.<br>             read only<br>            |
|serviceFee|number(decimal)|true|none|total Service charge of the package for entire period.<br>            |
|shownInWeb|boolean|false|none|Boolean value to show this package in MRM system or not.<br>            |
|startDate|string(date-time)|false|none|Start date of the package.<br>            |
|tags|string \| null|false|none|Comma separated string values in case of need of maintain some labels kind of <br>             stuff relevant to the package.<br>            |
|totalPrice|number(decimal)|false|none|total price for the package including Addon fees, service fee and registration fee.<br>incoming values for this field will ignore.<br>            |

<h2 id="tocS_PackageItemDTO">PackageItemDTO</h2>
<!-- backwards compatibility -->
<a id="schemapackageitemdto"></a>
<a id="schema_PackageItemDTO"></a>
<a id="tocSpackageitemdto"></a>
<a id="tocspackageitemdto"></a>

```json
{
  "articleId": 0,
  "articleName": "string",
  "articleNumber": 0,
  "articlePrice": 0,
  "endOrder": 0,
  "isIncludeServiceInCharge": true,
  "measureUnit": "string",
  "numberOfItems": 0,
  "startOrder": 0
}
```

The PackageItemDTO Class.
Contains relevant fields of PackageItem DTO by masking actual Package entity's fields in application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|articleId|integer(int32)|true|none|Refer to ArticleId in Article table in DB.<br>            |
|articleName|string \| null|false|none|Name of the article(Addon) in a particular package.<br>             read only<br>            |
|articleNumber|integer(int32)|false|none|Number assigned the article(Addon) in a particular package.<br>             read only<br>            |
|articlePrice|number(decimal)|false|none|Price of the article determined from that package.<br>Price of a same article can be varied from package to package.<br>            |
|endOrder|integer(int32)|false|none|Number of the installment this article is available to.<br>            |
|isIncludeServiceInCharge|boolean|false|none|Is Included in service charge |
|measureUnit|string \| null|false|none|none|
|numberOfItems|number(decimal)|false|none|How many article(Addon) is available for that package from that type.<br>            |
|startOrder|integer(int32)|false|none|Number of the installment this article is available from.<br>            |

<h2 id="tocS_PackageSearchDTO">PackageSearchDTO</h2>
<!-- backwards compatibility -->
<a id="schemapackagesearchdto"></a>
<a id="schema_PackageSearchDTO"></a>
<a id="tocSpackagesearchdto"></a>
<a id="tocspackagesearchdto"></a>

```json
{
  "activeStatus": true,
  "addonFee": 0,
  "applyForAllGyms": true,
  "bindingPeriod": 0,
  "createdDate": "1970-01-01T00:00:00Z",
  "createdUser": "string",
  "description": "string",
  "features": "string",
  "freeMonths": 0,
  "memberCanRemoveAddOns": true,
  "modifiedDate": "1970-01-01T00:00:00Z",
  "modifiedUser": "string",
  "monthlyFee": 0,
  "numberOfVisits": 0,
  "packageId": 0,
  "packageName": "string",
  "packageNumber": 0,
  "packageType": "string",
  "registrationFee": 0,
  "serviceFee": 0,
  "tags": "string",
  "totalCount": 0,
  "totalPrice": 0
}
```

The PackageSearchDTO Class.
Contains relevant fields of PackageSearch DTO by masking actual Package entity's fields in application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeStatus|boolean|false|none|Active Status |
|addonFee|number(decimal)|false|none|sum of addon fees.<br>incoming values for this filed will ignore.<br>            |
|applyForAllGyms|boolean|false|none|Boolean value to indicate wheather package is available in all the gyms.<br>            |
|bindingPeriod|integer(int32)|false|none|Range of period a member is bound to the contract if he/she choose this package.<br>            |
|createdDate|string(date-time)|false|none|Package created DateTime.<br>            |
|createdUser|string \| null|false|none|Package created user.<br>            |
|description|string \| null|false|none|Common descriptions about package.If there are more instructions can be stored as comma separated values.<br>            |
|features|string \| null|false|none|What are the facilities, features available for package.ex:- wifi, ACm etc.Can be stored as comma seperated values.<br>            |
|freeMonths|integer(int32)|false|none|No of months gym member can come without payments.<br>            |
|memberCanRemoveAddOns|boolean|false|none|Boolean value to indicate member can remove already added addons if he choose this package.<br>            |
|modifiedDate|string(date-time)|false|none|Package last modified DateTime.<br>            |
|modifiedUser|string \| null|false|none|Package last modified user.<br>            |
|monthlyFee|number(decimal)|false|none|Monthly installment fee if package is not fixed visit.<br>addition of the servicefee and addon fees divided by binding period.<br>            |
|numberOfVisits|integer(int32)|false|none|No of visits for fixed package |
|packageId|integer(int32)|false|none|none|
|packageName|string \| null|false|none|none|
|packageNumber|integer(int32)|false|none|none|
|packageType|string \| null|false|none|Package type can be either fixed visit or unlimited.<br>            |
|registrationFee|number(decimal)|false|none|Registartion fee for the package at a gym.<br>            |
|serviceFee|number(decimal)|false|none|total Service charge of the package for entire period.<br>            |
|tags|string \| null|false|none|Comma separated string values in case of need of maintain some labels kind of stuff relevant to the package.<br>            |
|totalCount|integer(int32)|false|none|total number of recode for particular search |
|totalPrice|number(decimal)|false|none|total price for the package including Addon fees, service fee and registration fee.<br>incoming values for this field will ignore.<br>            |

<h2 id="tocS_ProblemDetails">ProblemDetails</h2>
<!-- backwards compatibility -->
<a id="schemaproblemdetails"></a>
<a id="schema_ProblemDetails"></a>
<a id="tocSproblemdetails"></a>
<a id="tocsproblemdetails"></a>

```json
{
  "detail": "string",
  "extensions": {
    "property1": null,
    "property2": null
  },
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string \| null|false|none|none|
|extensions|object \| null|false|none|none|
|instance|string \| null|false|none|none|
|status|integer(int32) \| null|false|none|none|
|title|string \| null|false|none|none|
|type|string \| null|false|none|none|

<h2 id="tocS_StatusDTO">StatusDTO</h2>
<!-- backwards compatibility -->
<a id="schemastatusdto"></a>
<a id="schema_StatusDTO"></a>
<a id="tocSstatusdto"></a>
<a id="tocsstatusdto"></a>

```json
{
  "messageId": "string",
  "statusText": "string",
  "url": "string"
}
```

Imideate response for long running api call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageId|string \| null|false|none|Reference id for status endpoint<br>            |
|statusText|string \| null|false|none|Status of API Call<br>            |
|url|string \| null|false|none|Relative url for stauts check<br>            |

<h2 id="tocS_TestDTO">TestDTO</h2>
<!-- backwards compatibility -->
<a id="schematestdto"></a>
<a id="schema_TestDTO"></a>
<a id="tocStestdto"></a>
<a id="tocstestdto"></a>

```json
{
  "id": 0
}
```

The TestDTO Class.
Contains relevant fields of Test DTO by masking actual Test entity's fields in application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|Id of the Test object<br>            |

<h2 id="tocS_UserDTO">UserDTO</h2>
<!-- backwards compatibility -->
<a id="schemauserdto"></a>
<a id="schema_UserDTO"></a>
<a id="tocSuserdto"></a>
<a id="tocsuserdto"></a>

```json
{
  "accountNumber": "string",
  "externalEntityNumber": "string",
  "guardian": 0,
  "gymNumber": "string",
  "introduceBy": 0,
  "name": "string",
  "number": "string",
  "typeId": 0,
  "userId": 0
}
```

The UserDTO Class.
Contains relevant fields of User DTO by masking actual User entity's fields in application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string \| null|false|none|Account number of the user.It can be any stakeholder of the application.even can be a gym.<br>            |
|externalEntityNumber|string \| null|false|none|Entity number that make a relationship with BOX API DB.<br>            |
|guardian|integer(int32)|false|none|Gaurdian of the this user if he/she is under 18 years old.<br>            |
|gymNumber|string \| null|false|none|If this user is a gym, then the gym number.<br>            |
|introduceBy|integer(int32)|false|none|If Someone introduced this user to the system, then that user's UserId.<br>            |
|name|string \| null|false|none|Name of the user.<br>            |
|number|string \| null|false|none|Unique number maintain by application to idenify user.<br>            |
|typeId|integer(int32)|false|none|Type of the user.<br>            |
|userId|integer(int32)|false|none|Indentity number(primary key) for user object. Generated in DB table when inserting a record.<br>            |

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "field": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string \| null|false|none|none|
|message|string \| null|false|none|none|
