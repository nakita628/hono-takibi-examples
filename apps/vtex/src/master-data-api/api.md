<h1 id="master-data-api---v2">Master Data API - v2 v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# ATTENTION: **This version isn't compliant with data entities of old version (e.g. CL and AD). It's possible to use this configuration only to new data entities.**


## Welcome!

VTEX Master Data is an easy-to-use, secure, fast, scalable and extensible repository. On it you can create your own Entities, store data and consult directly from the storefront or use it to store info for some external integration.

There are internal VTEX modules that use VTEX Master Data as data repository. We have the VTEX Customer Service, VTEX Profile System and VTEX InStore, for example. It is also used by other internal services.

There are two ways to use Master Data:

1. Directly from the storefront
2. External integration

### Directly from the storefront

If your scenario is to be used inside the storefront, be aware of the following observations:

1. Use the storefront host to query or store information to avoid **CORS**;
2. Configure which information should be public and which shouldn't, inside the JSON Schema of the Data Entity;
3. Do not create query loops (the storefront may be affected with Throttling and apis may be turned off as a security protection);
4. Never add via JS any type of authentication key (x-vtex-api-appkey or x-vtex-api-apptoken);

**It's important to avoid CORS using the relative path**

### External Integration

If your scenario is to perform external integration, such as migrating client data from another service, be aware of the following observations:

1. Use the host ```{{accountName}}.vtexcommercestable.com.br```;
2. Use the authentication keys (x-vtex-api-appkey ou x-vtex-api-apptoken);

### Most used attributes listed here

| Name | Description |
| -------- | -------- |
| accountName | Account name in VTEX License Manager |
| name | Data Entity name |
| schema | JSON Schema of a Data Entity |
| id | Identifier of a document |
| x-vtex-api-appKey | User key |
| x-vtex-api-appToken | User token |

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br">https://{accountName}.{environment}.com.br</a> - VTEX server url

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="master-data-api---v2-documents">Documents</h1>

The APIs within this group are used to save documents and query them by id.

If the document has the id attribute or has fields that have been set to indexes with unique values, VTEX Master Data will attempt to identify the document. If the document is found a change will be made. If it is not found, an inclusion will be made. ** This scenario does not apply to the API with the POST verb**.

Otherwise, a new document will always be created.

You can use the query string `_where` to apply an update only if the document is compliant with the clause.

In addition with this feature you can use the schema parameter `_schema` as a query string to apply the update only if the document is compliant with the schema. If the document is not compliant, the body of the response will have an array with each error, where the field ```Message``` indicates the type of the error.

### Response status code

1. Status Code 201: Document created successfully
2. Status Code 200: Document changed successfully
3. Status Code 304: There were no changes to the document
4. Status Code 400: Invalid information in JSON
5. Status Code 403: Unauthorized access


## Create new document

<a id="opIdCreatenewdocument"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "property1": "string",
    "property2": "string"
  }'
```

`POST /api/dataentities/{dataEntityName}/documents`

This request allows you to create a new document corresponding to a given data entity. For example, you can create a new customer profile or address.

> You can use this request to create documents for any given data entity. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for each document you wish to create.

## Example use cases

### Client profile

In order to create a new customer profile, choose the `CL` data entity and send a request similar to this:

POST
```
https://examplestore.vtexcommercestable.com.br/api/dataentities/Client/documents
```

Request body
```json
{
    "email": "clark.kent@examplemail.com",
    "firstName": "Clark",
    "lastName": "Kent",
    "phone": "+12025550195",
    "documentType": "CPF",
    "document": "12345678900"
    "isCorporate": false,
    "isNewsletterOptIn": false,
    "localeDefault": "en-US"
 }
```

### Client address

For a new address, the data entity is `AD` and the request would look like this:

POST
```
https://examplestore.vtexcommercestable.com.br/api/dataentities/Address/documents
```

Request body
```json
{
    "addressName": "My House",
    "addressType": "residential",
    "city": "Metropolis",
    "complement": "",
    "country": "USA",
    "postalCode": "11375",
    "receiverName": "Clark Kent",
    "reference": null,
    "state": "MP",
    "street": "Baker Street",
    "neighborhood": "Upper east side",
    "number": "21",
    "userId": "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e"
}
```

> Body parameter

```json
{
  "property1": "string",
  "property2": "string"
}
```

<h3 id="create-new-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|dataEntityName|path|string|true|Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.|
|_schema|query|string|false|Name of the schema the document to be created needs to be compliant with.|
|body|body|[DocumentRequest](#schemadocumentrequest)|true|none|
|» **additionalProperties**|body|string|false|JSON document fields.|

> Example responses

> 200 Response

```json
{
  "Href": "http://api.vtex.com/my-store-name/dataentities/Client/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e",
  "Id": "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e"
}
```

<h3 id="create-new-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[documentResponse](#schemadocumentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create partial document

<a id="opIdCreateorupdatepartialdocument"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/documents \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "property1": "string",
    "property2": "string"
  }'
```

`PATCH /api/dataentities/{dataEntityName}/documents`

This request allows you to partially update a document corresponding to a given data entity.

> You can use this request to create documents for any given data entity. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for each document you wish to update.

## Example use cases

### Client profile

In order to create a customer profile's `phone` and `isNewsletterOptIn` fields, choose the `CL` data entity and send a request similar to this:

PATCH
```
https://examplestore.vtexcommercestable.com.br/api/dataentities/Client/documents
```

Request body
```json
{
    "phone": "+12025550195",
    "isNewsletterOptIn": false
 }
```

### Client address

In order to update the `receiverName` of an existing address, the data entity is `AD` and the request would look like this:

PATCH
```
https://examplestore.vtexcommercestable.com.br/api/dataentities/Address/documents
```

Request body
```json
{
    "receiverName": "Lois Lane"
}
```

> Body parameter

```json
{
  "property1": "string",
  "property2": "string"
}
```

<h3 id="create-partial-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataEntityName|path|string|true|Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.|
|_schema|query|string|false|Name of the schema the document to be created needs to be compliant with.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[DocumentRequest](#schemadocumentrequest)|true|JSON with the fields to be updated.|
|» **additionalProperties**|body|string|false|JSON document fields.|

> Example responses

> 200 Response

```json
{
  "Href": "http://api.vtex.com/my-store-name/dataentities/Client/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e",
  "Id": "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e"
}
```

<h3 id="create-partial-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[documentResponse](#schemadocumentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get document

<a id="opIdGetdocument"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/documents/Client-b818cbda-e489-11e6-94f4-0ac138d2d42e \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/dataentities/{dataEntityName}/documents/{id}`

Gets document by ID.

> Assign the `_fields` parameter in the query string to retrieve the desired fields. If you want to return all the fields use `_fields=_all`.

<h3 id="get-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataEntityName|path|string|true|Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|id|path|string|true|ID of the Document.|

> Example responses

> 200 Response

```json
{
  "accountId": "14af940d-9300-4279-9355-61d44c2ff879",
  "accountName": "my-store-name",
  "dataEntityId": "Client",
  "id": "b818cbda-e489-11e6-94f4-0ac138d2d42e"
}
```

<h3 id="get-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sucessful response|[Using_fields_all](#schemausing_fields_all)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update entire document

<a id="opIdUpdateentiredocument"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/documents/Client-b818cbda-e489-11e6-94f4-0ac138d2d42e \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "property1": "string",
    "property2": "string"
  }'
```

`PUT /api/dataentities/{dataEntityName}/documents/{id}`

Update an existing document corresponding to a given data entity. For example, you can update a customer profile or address.

> You can use this request to update documents in any given data entity. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for each document you wish to update.

## Example use cases

### Client profile

In order to update an existing customer profile, choose the `CL` data entity and send a request similar to this:

PUT
```
https://examplestore.vtexcommercestable.com.br/api/dataentities/Client/documents/123456789abc
```

Request body
```json
{
    "email": "clark.kent@examplemail.com",
    "firstName": "Clark",
    "lastName": "Kent",
    "phone": "+12025550195",
    "documentType": "CPF",
    "document": "12345678900"
    "isCorporate": false,
    "isNewsletterOptIn": false,
    "localeDefault": "en-US"
 }
```

### Client address

To update an address, the data entity is `AD` and the request would look like this:

PUT
```
https://examplestore.vtexcommercestable.com.br/api/dataentities/Address/documents/123456789abc
```

Request body
```json
{
    "addressName": "My House",
    "addressType": "residential",
    "city": "Metropolis",
    "complement": "",
    "country": "USA",
    "postalCode": "11375",
    "receiverName": "Clark Kent",
    "reference": null,
    "state": "MP",
    "street": "Baker Street",
    "neighborhood": "Upper east side",
    "number": "21",
    "userId": "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e"
}
```

> Body parameter

```json
{
  "property1": "string",
  "property2": "string"
}
```

<h3 id="update-entire-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataEntityName|path|string|true|Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.|
|_where|query|string|false|Filter specification.|
|_schema|query|string|false|Name of the schema the document to be created needs to be compliant with.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|id|path|string|true|ID of the Document.|
|body|body|[DocumentRequest](#schemadocumentrequest)|true|none|
|» **additionalProperties**|body|string|false|JSON document fields.|

> Example responses

> 200 Response

```json
{
  "Href": "http://api.vtex.com/my-store-name/dataentities/Client/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e",
  "Id": "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e"
}
```

<h3 id="update-entire-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[documentResponse](#schemadocumentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete document

<a id="opIdDeletedocument"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/documents/Client-b818cbda-e489-11e6-94f4-0ac138d2d42e \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/dataentities/{dataEntityName}/documents/{id}`

It allows to delete a document.

<h3 id="delete-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataEntityName|path|string|true|Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|id|path|string|true|ID of the Document.|

<h3 id="delete-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update partial document

<a id="opIdUpdatepartialdocument"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/documents/Client-b818cbda-e489-11e6-94f4-0ac138d2d42e \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "property1": "string",
    "property2": "string"
  }'
```

`PATCH /api/dataentities/{dataEntityName}/documents/{id}`

This request allows you to partially update a document corresponding to a given data entity. For example, you can update some fields of a customer profile or address.

> You can use this request to update documents for any given data entity. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for each document you wish to update.

## Example use cases

### Client profile

In order to update a customer profile's `phone` and `isNewsletterOptIn` fields, choose the `CL` data entity and send a request similar to this:

PATCH
```
https://examplestore.vtexcommercestable.com.br/api/dataentities/Client/documents/123456789abc
```

Request body
```json
{
    "phone": "+12025550195",
    "isNewsletterOptIn": false
 }
```

### Client address

In order to update the `receiverName` of an existing address, the data entity is `AD` and the request would look like this:

PATCH
```
https://examplestore.vtexcommercestable.com.br/api/dataentities/Address/documents/123456789abc
```

Request body
```json
{
    "receiverName": "Lois Lane"
}
```

> Body parameter

```json
{
  "property1": "string",
  "property2": "string"
}
```

<h3 id="update-partial-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataEntityName|path|string|true|Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.|
|_where|query|string|false|Filter specification.|
|_schema|query|string|false|Name of the schema the document to be created needs to be compliant with.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|id|path|string|true|ID of the Document.|
|body|body|[DocumentRequest](#schemadocumentrequest)|true|none|
|» **additionalProperties**|body|string|false|JSON document fields.|

> Example responses

> 200 Response

```json
{
  "Href": "http://api.vtex.com/my-store-name/dataentities/Client/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e",
  "Id": "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e"
}
```

<h3 id="update-partial-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[documentResponse](#schemadocumentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="master-data-api---v2-search">Search</h1>

The ```search``` API is intended to query a collection of documents.  

## Search documents

<a id="opIdSearchdocuments"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/search \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'REST-Range: resources=0-10'
```

`GET /api/dataentities/{dataEntityName}/search`

Retrieves documents' information, while choosing which fields will be returned and filtering documents by specific fields.

> The response header `REST-Content-Range` indicates the total amount of results for that specific search. For example, it may return `resources 0-100/136108`, which indicates it has returned results from 0 to 100 of a total 136108.

Below you can see some query examples and learn more about each query parameter.

> Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `503`.

## Query examples

### Simple filter

```
/dataentities/Client/search?email=my@email.com
```

### Complex filter

```
/dataentities/Client/search?_where=(firstName=Jon OR lastName=Smith) OR (createdIn between 2001-01-01 AND 2016-01-01)
```

### Date Range

```
/dataentities/Client/search?_where=createdIn between 2001-01-01 AND 2016-01-01
```

### Range numeric fields

```
/dataentities/Client/search?_where=age between 18 AND 25
```

### Partial filter

```
/dataentities/Client/search?firstName=*Maria*
```

### Filter for null values

```
/dataentities/Client/search?_where=firstName is null
```

### Filter for non-null values

```
/dataentities/Client/search?_where=firstName is not null
```

### Filter for difference
```
/dataentities/Client/search?_where=firstName<>maria
```

### Filter greater than or less than
```
/dataentities/Client/search?_where=number>5
/dataentities/Client/search?_where=date<2001-01-01
```

<h3 id="search-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataEntityName|path|string|true|Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|REST-Range|header|string|true|Defines the collection of documents to be returned. A range within the collection limited by 100 documents per query.|
|_fields|query|string|false|Fields that should be returned by document. Separate fields' names with commas. For example `_fields=email,firstName,document`. You can also use `_all` to fetch all fields.|
|_where|query|string|false|Filter specification.|
|_schema|query|string|false|Name of the schema the document to be created needs to be compliant with.|
|_keyword|query|string|false|String to search. Use quotes for a partial query. For example, `_keyword=Maria` or `_keyword="Maria"`.|
|_sort|query|string|false|Sets sorting mode in two parts. The first part is the name of the field you want to sort by. In the second part, use `ASC` for ascending or `DESC` for descending.|

> Example responses

> 503 Response

```json
{}
```

<h3 id="search-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|503|Service Unavailable|Service Unavailable|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="master-data-api---v2-scroll">Scroll</h1>

The new `` scroll `` API has been developed to meet external integration scenarios. If you need to query the entire VTEX Master Data database, or your collection is over 10.000 documents, use this feature.

## Scroll documents

<a id="opIdScrolldocuments"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/scroll \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'REST-Range: resources=0-10'
```

`GET /api/dataentities/{dataEntityName}/scroll`

In the first request, the `X-VTEX-MD-TOKEN` token will be returned in the header. This token must be passed to the next request in the query string `_token` parameter. The token has a timeout of 10 minutes, which refreshes after each request.

After the token is obtained it is no longer necessary to send the filter or document size per page parameters. You only need to resend the token until the document collection is empty.

> Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `429`.

## Request examples

First request:
```
/dataentities/Client/scroll?isCluster=true&_size=250&_fields=email,firstName
```

Retrieve the token in the header `X-VTEX-MD-TOKEN` from the first request's response and use it to make the next requests.

Subsequent requests:
```
/dataentities/Client/scroll?_token={tokenValueExample}
```

<h3 id="scroll-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataEntityName|path|string|true|Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|_token|query|string|false|Value of the header `X-VTEX-MD-TOKEN` returned in your first request. Send its value in this query string in the subsequent requests. The token has a timeout of 10 minutes, which refreshes after each new request.|
|REST-Range|header|string|true|Defines the collection of documents to be returned. A range within the collection limited by 100 documents per query.|
|_fields|query|string|false|Fields that should be returned by document. Separate fields' names with commas. For example `_fields=email,firstName,document`. You can also use `_all` to fetch all fields.|
|_where|query|string|false|Filter specification.|
|_schema|query|string|false|Name of the schema the document to be created needs to be compliant with.|
|_keyword|query|string|false|String to search. Use quotes for a partial query. For example, `_keyword=Maria` or `_keyword="Maria"`.|
|_sort|query|string|false|Sets sorting mode in two parts. The first part is the name of the field you want to sort by. In the second part, use `ASC` for ascending or `DESC` for descending.|

> Example responses

> 429 Response

```json
{}
```

<h3 id="scroll-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|429|Too Many Requests|Too Many Requests|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="master-data-api---v2-schemas">Schemas</h1>

## Get schemas

<a id="opIdGetschemas"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/schemas \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/dataentities/{dataEntityName}/schemas`

Return the schemas saved.

<h3 id="get-schemas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataEntityName|path|string|true|Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.|
|Content-Type|header|string|true|Type of the content being sent.|

<h3 id="get-schemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get schema by name

<a id="opIdGetschemabyname"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/schemas/%7B%7Bschema%7D%7D \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/dataentities/{dataEntityName}/schemas/{schemaName}`

Returns an existing schema for a given data entity.

<h3 id="get-schema-by-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataEntityName|path|string|true|Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.|
|Content-Type|header|string|true|Type of the content being sent.|
|schemaName|path|string|true|Name of the schema.|

<h3 id="get-schema-by-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Save schema by name

<a id="opIdSaveschemabyname"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/schemas/%7B%7Bschema%7D%7D \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "properties": {
      "name": {
        "type": "string"
      }
    }
  }'
```

`PUT /api/dataentities/{dataEntityName}/schemas/{schemaName}`

Creates or edits a data entity schema. Learn more about [Master Data schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle)

> Note that if you send a `schemaName` that does not exist for that data entity, this request will create it.

This request can also be used to [create or edit Master Data v2 triggers](https://developers.vtex.com/vtex-rest-api/docs/setting-up-triggers-in-master-data-v2).

> Body parameter

```json
{
  "properties": {
    "name": {
      "type": "string"
    }
  }
}
```

<h3 id="save-schema-by-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataEntityName|path|string|true|Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.|
|schemaName|path|string|true|Name of the schema.|
|body|body|[SaveschemabynameRequest](#schemasaveschemabynamerequest)|true|Request body for saving schema|
|» properties|body|[Properties](#schemaproperties)|true|none|

<h3 id="save-schema-by-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete schema by name

<a id="opIdDeleteschemabyname"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/schemas/%7B%7Bschema%7D%7D \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/dataentities/{dataEntityName}/schemas/{schemaName}`

Deletes an existing schema for a given data entity.

<h3 id="delete-schema-by-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|dataEntityName|path|string|true|Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.|
|schemaName|path|string|true|Name of the schema.|

<h3 id="delete-schema-by-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="master-data-api---v2-indices">Indices</h1>

Create alternative keys for data entities.

## Get indices

<a id="opIdGetindices"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/indices \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/dataentities/{dataEntityName}/indices`

Returns the list of indices by data entity.

<h3 id="get-indices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataEntityName|path|string|true|Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.|
|Content-Type|header|string|true|Type of the content being sent.|

<h3 id="get-indices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Put indices

<a id="opIdPutindices"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/indices \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "fields": "fieldName",
    "multiple": false,
    "name": "indexName"
  }'
```

`PUT /api/dataentities/{dataEntityName}/indices`

Create an index.

> Body parameter

```json
{
  "fields": "fieldName",
  "multiple": false,
  "name": "indexName"
}
```

<h3 id="put-indices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataEntityName|path|string|true|Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.|
|body|body|[PutindicesRequest](#schemaputindicesrequest)|true|Request body for creating an index|
|» fields|body|string|true|Comma-separted fields of the index|
|» multiple|body|boolean|true|Determines whether the values need to be unique. If false, values must be unique.|
|» name|body|string|true|Name to identify the index|

<h3 id="put-indices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get index by name

<a id="opIdGetindexbyname"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/indices/%7B%7Bindex_name%7D%7D \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/dataentities/{dataEntityName}/indices/{index_name}`

Returns an index.

<h3 id="get-index-by-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataEntityName|path|string|true|Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.|
|Content-Type|header|string|true|Type of the content being sent.|
|index_name|path|string|true|Name of the index.|

<h3 id="get-index-by-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete index by name

<a id="opIdDeleteindexbyname"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/indices/%7B%7Bindex_name%7D%7D \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/dataentities/{dataEntityName}/indices/{index_name}`

Delete an index.

<h3 id="delete-index-by-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataEntityName|path|string|true|Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.|
|Content-Type|header|string|true|Type of the content being sent.|
|index_name|path|string|true|Name of the index.|

<h3 id="delete-index-by-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="master-data-api---v2-clusters">Clusters</h1>

Lets you know if a particular document is in one or more clusters.

## Validate document by clusters

<a id="opIdValidatedocumentbyclusters"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/documents/Client-b818cbda-e489-11e6-94f4-0ac138d2d42e/clusters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '"[\n    {\n        \"name\": \"male\",        \n        \"rule\": \"gender=male\"\n    },\n    {\n        \"name\": \"complex\",\n        \"rule\": \"((gender=male AND percent=0.35) AND any is null) AND (name=*go*)\"\n    },    \n    {\n        \"name\": \"complex2\",\n        \"rule\": \"((gender=male AND percent=0.35) AND any is not null) OR (name=*go*)\"\n    },\n    {\n        \"name\": \"createdIn\",\n        \"rule\": \"createdIn between 2015-10-28 AND 2015-10-30\"\n    }\n]"'
```

`POST /api/dataentities/{dataEntityName}/documents/{id}/clusters`

Check if a document is present in one or more clusters (specific set of field values).

> There is a limit of five rules per request.

> Body parameter

```json
"[\n    {\n        \"name\": \"male\",        \n        \"rule\": \"gender=male\"\n    },\n    {\n        \"name\": \"complex\",\n        \"rule\": \"((gender=male AND percent=0.35) AND any is null) AND (name=*go*)\"\n    },    \n    {\n        \"name\": \"complex2\",\n        \"rule\": \"((gender=male AND percent=0.35) AND any is not null) OR (name=*go*)\"\n    },\n    {\n        \"name\": \"createdIn\",\n        \"rule\": \"createdIn between 2015-10-28 AND 2015-10-30\"\n    }\n]"
```

<h3 id="validate-document-by-clusters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataEntityName|path|string|true|Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|id|path|string|true|ID of the Document.|
|body|body|string(json)|true|Request body for validating a document by clusters|

<h3 id="validate-document-by-clusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="master-data-api---v2-versions">Versions</h1>

Master Data documents are versioned. This means that for each change a new version is generated. The `versions` APIs allows to query the versions and also apply the state of a document to the most current version.

## List versions

<a id="opIdListversions"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/documents/Client-b818cbda-e489-11e6-94f4-0ac138d2d42e/versions \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/dataentities/{dataEntityName}/documents/{id}/versions`

Allows to list the versions of a document.

<h3 id="list-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataEntityName|path|string|true|Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|id|path|string|true|ID of the Document.|
|load|query|boolean|false|If true, return all the fields in each version of the document|
|fields|query|string|false|If `load` is true, the response will return only these specific fields|

> Example responses

> 200 Response

```json
[
  {
    "date": "2016-10-18T16:53:32+00:00",
    "document": {
      "createdBy": "81fc8b10-25b7-48de-b425-7b93554002cc",
      "dataEntityId": "Client",
      "id": "72e7f8dd-1168-23ec-82ac-0e2b61663eb4",
      "isNewsletterOptIn": true
    },
    "id": "_EAR0cJ7XB5k5grnmm0zeKGlVvVM9WCPy_"
  },
  {
    "date": "2016-09-08T20:11:42+00:00",
    "document": {
      "createdBy": "81fc8b10-25b7-48de-b425-7b93554002cc",
      "dataEntityId": "Client",
      "id": "72e7f8dd-1168-23ec-82ac-0e2b61663eb4",
      "isNewsletterOptIn": true
    },
    "id": "_E5SH9WXVvhPBNnbQtYAAGqrIysIeNYhV_"
  }
]
```

<h3 id="list-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-versions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Listversion](#schemalistversion)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get version

<a id="opIdGetversion"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/documents/Client-b818cbda-e489-11e6-94f4-0ac138d2d42e/versions/123456789abc \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/dataentities/{dataEntityName}/documents/{id}/versions/{versionId}`

Returns the version of a document.

<h3 id="get-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataEntityName|path|string|true|Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|id|path|string|true|ID of the Document.|
|versionId|path|string|true|ID of the version to update.|

> Example responses

> 200 Response

```json
{
  "author": "user-id",
  "document": {
    "accountId": "my-account-id",
    "accountName": "my-account",
    "carttag": null,
    "checkouttag": null,
    "dataEntityId": "Client",
    "departmentVisitedTag": {
      "DisplayValue": "Ar e Ventilação",
      "Scores": {
        "Ar e Ventilação": [
          {
            "Date": "2016-10-18T16:53:31.0842607Z",
            "Point": 1,
            "Until": "2017-04-16T16:53:31.0842607Z"
          }
        ]
      }
    },
    "email": "teste@mail.com",
    "followers": [],
    "id": "my-id",
    "rclastsession": "163054c0-954f-11e6-891e-4d2b1c3450a4",
    "rclastsessiondate": "2016-10-18T16:53:00"
  },
  "id": "version-id"
}
```

<h3 id="get-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Getversion](#schemagetversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Put version

<a id="opIdPutversion"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/documents/Client-b818cbda-e489-11e6-94f4-0ac138d2d42e/versions/%7B%7BversionId%7D%7D \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`PUT /api/dataentities/{dataEntityName}/documents/{id}/versions/{versionId}`

Updates document with version values.

<h3 id="put-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataEntityName|path|string|true|Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|id|path|string|true|ID of the Document.|
|versionId|path|string|true|ID of the version to update|

> Example responses

> 200 Response

```json
{
  "Href": "http://api.vtex.com/my-store-name/dataentities/Client/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e",
  "Id": "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e"
}
```

<h3 id="put-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[documentResponse](#schemadocumentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="master-data-api---v2-customer-profiles">Customer profiles</h1>

## Create new customer profile

<a id="opIdCreateNewCustomerProfilev2"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "document": "12345678900",
    "documentType": "CPF",
    "email": "clark.kent@examplemail.com",
    "firstName": "Clark",
    "isCorporate": false,
    "isNewsletterOptIn": false,
    "lastName": "Kent",
    "localeDefault": "en-US",
    "phone": "+12025550195"
  }'
```

`POST /api/dataentities/Client/documents`

Creates new customer profile.

> You can use this request to create customer profiles according to any `CL` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).

> Body parameter

```json
{
  "document": "12345678900",
  "documentType": "CPF",
  "email": "clark.kent@examplemail.com",
  "firstName": "Clark",
  "isCorporate": false,
  "isNewsletterOptIn": false,
  "lastName": "Kent",
  "localeDefault": "en-US",
  "phone": "+12025550195"
}
```

<h3 id="create-new-customer-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|_schema|query|string|false|Name of the schema the document to be created needs to be compliant with.|
|body|body|[createUpdateProfileRequests](#schemacreateupdateprofilerequests)|true|none|
|» document|body|string \| null|false|Client document.|
|» documentType|body|string \| null|false|Client document type.|
|» email|body|string \| null|false|Client email address.|
|» firstName|body|string \| null|false|Client first name.|
|» isCorporate|body|boolean \| null|false|Indicates whether client is corporate.|
|» isNewsletterOptIn|body|boolean \| null|false|Indicates whether client otped to receive the store newsletter.|
|» lastName|body|string \| null|false|Client last name.|
|» localeDefault|body|string \| null|false|Default locale, used to set store language and currency, for example.|
|» phone|body|string \| null|false|Client telephone number.|

> Example responses

> 200 Response

```json
{
  "Href": "http://api.vtex.com/my-store-name/dataentities/Client/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e",
  "Id": "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e"
}
```

<h3 id="create-new-customer-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[documentResponse](#schemadocumentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete customer profile

<a id="opIdDeleteCustomerProfile"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/documents/Client-b818cbda-e489-11e6-94f4-0ac138d2d42e \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/dataentities/Client/documents/{id}`

Deletes a customer profile.

<h3 id="delete-customer-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|id|path|string|true|ID of the Document.|

> Example responses

> 200 Response

```json
{
  "Href": "http://api.vtex.com/my-store-name/dataentities/Client/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e",
  "Id": "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e"
}
```

<h3 id="delete-customer-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[documentResponse](#schemadocumentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update customer profile

<a id="opIdUpdateCustomerProfile"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Client/documents/Client-b818cbda-e489-11e6-94f4-0ac138d2d42e \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "document": "12345678900",
    "documentType": "CPF",
    "email": "clark.kent@examplemail.com",
    "firstName": "Clark",
    "isCorporate": false,
    "isNewsletterOptIn": false,
    "lastName": "Kent",
    "localeDefault": "en-US",
    "phone": "+12025550195"
  }'
```

`PATCH /api/dataentities/Client/documents/{id}`

Partially updates a customer profile.

> You can use this request to update customer profiles according to any `CL` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).

> Body parameter

```json
{
  "document": "12345678900",
  "documentType": "CPF",
  "email": "clark.kent@examplemail.com",
  "firstName": "Clark",
  "isCorporate": false,
  "isNewsletterOptIn": false,
  "lastName": "Kent",
  "localeDefault": "en-US",
  "phone": "+12025550195"
}
```

<h3 id="update-customer-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_schema|query|string|false|Name of the schema the document to be created needs to be compliant with.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|id|path|string|true|ID of the Document.|
|body|body|[createUpdateProfileRequests](#schemacreateupdateprofilerequests)|true|none|
|» document|body|string \| null|false|Client document.|
|» documentType|body|string \| null|false|Client document type.|
|» email|body|string \| null|false|Client email address.|
|» firstName|body|string \| null|false|Client first name.|
|» isCorporate|body|boolean \| null|false|Indicates whether client is corporate.|
|» isNewsletterOptIn|body|boolean \| null|false|Indicates whether client otped to receive the store newsletter.|
|» lastName|body|string \| null|false|Client last name.|
|» localeDefault|body|string \| null|false|Default locale, used to set store language and currency, for example.|
|» phone|body|string \| null|false|Client telephone number.|

> Example responses

> 200 Response

```json
{
  "Href": "http://api.vtex.com/my-store-name/dataentities/Client/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e",
  "Id": "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e"
}
```

<h3 id="update-customer-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[documentResponse](#schemadocumentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="master-data-api---v2-addresses">Addresses</h1>

## Create new customer address

<a id="opIdCreateNewCustomerAddress"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Address/documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "addressName": "My house",
    "addressType": "residential",
    "city": "Rio de Janeiro",
    "complement": "3rd floor",
    "country": "BRA",
    "neighborhood": "Botafogo",
    "number": "300",
    "postalCode": "12345-000",
    "receiverName": "Clark Kent.",
    "reference": "Grey building",
    "state": "Rio de Janeiro",
    "street": "Praia de Botafogo",
    "userId": "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e"
  }'
```

`POST /api/dataentities/Address/documents`

Creates new customer address. 

> You can use this request to create customer addresses according to any `AD` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).

> Body parameter

```json
{
  "addressName": "My house",
  "addressType": "residential",
  "city": "Rio de Janeiro",
  "complement": "3rd floor",
  "country": "BRA",
  "neighborhood": "Botafogo",
  "number": "300",
  "postalCode": "12345-000",
  "receiverName": "Clark Kent.",
  "reference": "Grey building",
  "state": "Rio de Janeiro",
  "street": "Praia de Botafogo",
  "userId": "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e"
}
```

<h3 id="create-new-customer-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|_schema|query|string|false|Name of the schema the document to be created needs to be compliant with.|
|body|body|[createUpdateAddressRequests](#schemacreateupdateaddressrequests)|true|none|
|» addressName|body|string \| null|false|Address name.|
|» addressType|body|string \| null|false|Type of address. For example, `Residential` or `Pickup`, among others.|
|» city|body|string \| null|false|City of the shipping address.|
|» complement|body|string \| null|false|Complement to the shipping address in case it applies.|
|» country|body|string \| null|false|Three letter ISO code of the country of the shipping address.|
|» neighborhood|body|string \| null|false|Neighborhood of the address.|
|» number|body|string \| null|false|Number of the building, house or apartment in the shipping address.|
|» postalCode|body|string \| null|false|Postal Code.|
|» receiverName|body|string \| null|false|Name of the person who is going to receive the order.|
|» reference|body|string \| null|false|Complement that might help locate the shipping address more precisely in case of delivery.|
|» state|body|string \| null|false|State of the shipping address.|
|» street|body|string \| null|false|Street of the address.|
|» userId|body|string \| null|false|ID of the customer to whom the address belongs.|

> Example responses

> 200 Response

```json
{
  "Href": "http://api.vtex.com/my-store-name/dataentities/Address/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e",
  "Id": "AD-b818cbda-e489-11e6-94f4-0ac138d2d42e"
}
```

<h3 id="create-new-customer-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[documentResponse](#schemadocumentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete customer address

<a id="opIdDeleteCustomerAddress"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Address/documents/Client-b818cbda-e489-11e6-94f4-0ac138d2d42e \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/dataentities/Address/documents/{id}`

Deletes a customer address.

<h3 id="delete-customer-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|id|path|string|true|ID of the Document.|

> Example responses

> 200 Response

```json
{
  "Href": "http://api.vtex.com/my-store-name/dataentities/Address/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e",
  "Id": "AD-b818cbda-e489-11e6-94f4-0ac138d2d42e"
}
```

<h3 id="delete-customer-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[documentResponse](#schemadocumentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update customer address

<a id="opIdUpdateCustomerAddress"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/Address/documents/Client-b818cbda-e489-11e6-94f4-0ac138d2d42e \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "addressName": "My house",
    "addressType": "residential",
    "city": "Rio de Janeiro",
    "complement": "3rd floor",
    "country": "BRA",
    "neighborhood": "Botafogo",
    "number": "300",
    "postalCode": "12345-000",
    "receiverName": "Clark Kent.",
    "reference": "Grey building",
    "state": "Rio de Janeiro",
    "street": "Praia de Botafogo",
    "userId": "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e"
  }'
```

`PATCH /api/dataentities/Address/documents/{id}`

Partially updates a customer address.

> You can use this request to update customer addresses according to any `AD` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).

> Body parameter

```json
{
  "addressName": "My house",
  "addressType": "residential",
  "city": "Rio de Janeiro",
  "complement": "3rd floor",
  "country": "BRA",
  "neighborhood": "Botafogo",
  "number": "300",
  "postalCode": "12345-000",
  "receiverName": "Clark Kent.",
  "reference": "Grey building",
  "state": "Rio de Janeiro",
  "street": "Praia de Botafogo",
  "userId": "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e"
}
```

<h3 id="update-customer-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_schema|query|string|false|Name of the schema the document to be created needs to be compliant with.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|id|path|string|true|ID of the Document.|
|body|body|[createUpdateAddressRequests](#schemacreateupdateaddressrequests)|true|none|
|» addressName|body|string \| null|false|Address name.|
|» addressType|body|string \| null|false|Type of address. For example, `Residential` or `Pickup`, among others.|
|» city|body|string \| null|false|City of the shipping address.|
|» complement|body|string \| null|false|Complement to the shipping address in case it applies.|
|» country|body|string \| null|false|Three letter ISO code of the country of the shipping address.|
|» neighborhood|body|string \| null|false|Neighborhood of the address.|
|» number|body|string \| null|false|Number of the building, house or apartment in the shipping address.|
|» postalCode|body|string \| null|false|Postal Code.|
|» receiverName|body|string \| null|false|Name of the person who is going to receive the order.|
|» reference|body|string \| null|false|Complement that might help locate the shipping address more precisely in case of delivery.|
|» state|body|string \| null|false|State of the shipping address.|
|» street|body|string \| null|false|Street of the address.|
|» userId|body|string \| null|false|ID of the customer to whom the address belongs.|

> Example responses

> 200 Response

```json
{
  "Href": "http://api.vtex.com/my-store-name/dataentities/Address/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e",
  "Id": "AD-b818cbda-e489-11e6-94f4-0ac138d2d42e"
}
```

<h3 id="update-customer-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[documentResponse](#schemadocumentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_ArEVentilaO">ArEVentilaO</h2>
<!-- backwards compatibility -->
<a id="schemaareventilao"></a>
<a id="schema_ArEVentilaO"></a>
<a id="tocSareventilao"></a>
<a id="tocsareventilao"></a>

```json
{
  "Date": "2016-10-18T16:53:31.0842607Z",
  "Point": 1,
  "Until": "2017-04-16T16:53:31.0842607Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Date|string|true|none|none|
|Point|integer(int32)|true|none|none|
|Until|string|true|none|none|

<h2 id="tocS_DEPRECATED_DocumentRequest">DEPRECATED_DocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeprecated_documentrequest"></a>
<a id="schema_DEPRECATED_DocumentRequest"></a>
<a id="tocSdeprecated_documentrequest"></a>
<a id="tocsdeprecated_documentrequest"></a>

```json
{
  "field": "string"
}
```

This can be any pure JSON document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|This can be any JSON document field.|

<h2 id="tocS_DepartmentVisitedTag">DepartmentVisitedTag</h2>
<!-- backwards compatibility -->
<a id="schemadepartmentvisitedtag"></a>
<a id="schema_DepartmentVisitedTag"></a>
<a id="tocSdepartmentvisitedtag"></a>
<a id="tocsdepartmentvisitedtag"></a>

```json
{
  "DisplayValue": "Ar e Ventilação",
  "Scores": {
    "Ar e Ventilação": [
      {
        "Date": "2016-10-18T16:53:31.0842607Z",
        "Point": 1,
        "Until": "2017-04-16T16:53:31.0842607Z"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DisplayValue|string|true|none|none|
|Scores|[Scores](#schemascores)|true|none|none|

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "accountId": "my-account-id",
  "accountName": "my-account",
  "carttag": null,
  "checkouttag": null,
  "dataEntityId": "Client",
  "departmentVisitedTag": {
    "DisplayValue": "Ar e Ventilação",
    "Scores": {
      "Ar e Ventilação": [
        {
          "Date": "2016-10-18T16:53:31.0842607Z",
          "Point": 1,
          "Until": "2017-04-16T16:53:31.0842607Z"
        }
      ]
    }
  },
  "email": "teste@mail.com",
  "followers": [],
  "id": "my-id",
  "rclastsession": "163054c0-954f-11e6-891e-4d2b1c3450a4",
  "rclastsessiondate": "2016-10-18T16:53:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|true|none|none|
|accountName|string|true|none|none|
|carttag|string \| null|true|none|none|
|checkouttag|string \| null|true|none|none|
|dataEntityId|string|true|none|none|
|departmentVisitedTag|[DepartmentVisitedTag](#schemadepartmentvisitedtag)|true|none|none|
|email|string|true|none|none|
|followers|[string]|true|none|none|
|id|string|true|none|none|
|rclastsession|string|true|none|none|
|rclastsessiondate|string|true|none|none|

<h2 id="tocS_DocumentRequest">DocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadocumentrequest"></a>
<a id="schema_DocumentRequest"></a>
<a id="tocSdocumentrequest"></a>
<a id="tocsdocumentrequest"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

This can be any pure JSON document. Add new _Key-Value_ pairs to test.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|JSON document fields.|

<h2 id="tocS_Getversion">Getversion</h2>
<!-- backwards compatibility -->
<a id="schemagetversion"></a>
<a id="schema_Getversion"></a>
<a id="tocSgetversion"></a>
<a id="tocsgetversion"></a>

```json
{
  "author": "user-id",
  "document": {
    "accountId": "my-account-id",
    "accountName": "my-account",
    "carttag": null,
    "checkouttag": null,
    "dataEntityId": "Client",
    "departmentVisitedTag": {
      "DisplayValue": "Ar e Ventilação",
      "Scores": {
        "Ar e Ventilação": [
          {
            "Date": "2016-10-18T16:53:31.0842607Z",
            "Point": 1,
            "Until": "2017-04-16T16:53:31.0842607Z"
          }
        ]
      }
    },
    "email": "teste@mail.com",
    "followers": [],
    "id": "my-id",
    "rclastsession": "163054c0-954f-11e6-891e-4d2b1c3450a4",
    "rclastsessiondate": "2016-10-18T16:53:00"
  },
  "id": "version-id"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|string|true|none|none|
|document|[Document](#schemadocument)|true|none|none|
|id|string|true|none|none|

<h2 id="tocS_Listversion">Listversion</h2>
<!-- backwards compatibility -->
<a id="schemalistversion"></a>
<a id="schema_Listversion"></a>
<a id="tocSlistversion"></a>
<a id="tocslistversion"></a>

```json
{
  "date": "string",
  "document": {},
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|true|none|none|
|document|object|false|none|none|
|id|string|true|none|none|

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

<h2 id="tocS_Properties">Properties</h2>
<!-- backwards compatibility -->
<a id="schemaproperties"></a>
<a id="schema_Properties"></a>
<a id="tocSproperties"></a>
<a id="tocsproperties"></a>

```json
{
  "name": {
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[Name](#schemaname)|true|none|none|

<h2 id="tocS_PutindicesRequest">PutindicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputindicesrequest"></a>
<a id="schema_PutindicesRequest"></a>
<a id="tocSputindicesrequest"></a>
<a id="tocsputindicesrequest"></a>

```json
{
  "fields": "fieldName",
  "multiple": false,
  "name": "indexName"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|string|true|none|Comma-separted fields of the index|
|multiple|boolean|true|none|Determines whether the values need to be unique. If false, values must be unique.|
|name|string|true|none|Name to identify the index|

<h2 id="tocS_SaveschemabynameRequest">SaveschemabynameRequest</h2>
<!-- backwards compatibility -->
<a id="schemasaveschemabynamerequest"></a>
<a id="schema_SaveschemabynameRequest"></a>
<a id="tocSsaveschemabynamerequest"></a>
<a id="tocssaveschemabynamerequest"></a>

```json
{
  "properties": {
    "name": {
      "type": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|[Properties](#schemaproperties)|true|none|none|

<h2 id="tocS_Scores">Scores</h2>
<!-- backwards compatibility -->
<a id="schemascores"></a>
<a id="schema_Scores"></a>
<a id="tocSscores"></a>
<a id="tocsscores"></a>

```json
{
  "Ar e Ventilação": [
    {
      "Date": "2016-10-18T16:53:31.0842607Z",
      "Point": 1,
      "Until": "2017-04-16T16:53:31.0842607Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Ar e Ventilação|[[ArEVentilaO](#schemaareventilao)]|true|none|none|

<h2 id="tocS_Using_fields_all">Using_fields_all</h2>
<!-- backwards compatibility -->
<a id="schemausing_fields_all"></a>
<a id="schema_Using_fields_all"></a>
<a id="tocSusing_fields_all"></a>
<a id="tocsusing_fields_all"></a>

```json
{
  "accountId": "14af940d-9300-4279-9355-61d44c2ff879",
  "accountName": "my-store-name",
  "dataEntityId": "Client",
  "id": "b818cbda-e489-11e6-94f4-0ac138d2d42e"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|true|none|none|
|accountName|string|true|none|none|
|dataEntityId|string|true|none|none|
|id|string|true|none|none|

<h2 id="tocS_ValidatedocumentbyclustersRequest">ValidatedocumentbyclustersRequest</h2>
<!-- backwards compatibility -->
<a id="schemavalidatedocumentbyclustersrequest"></a>
<a id="schema_ValidatedocumentbyclustersRequest"></a>
<a id="tocSvalidatedocumentbyclustersrequest"></a>
<a id="tocsvalidatedocumentbyclustersrequest"></a>

```json
{
  "name": "male",
  "rule": "gender=male"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|rule|string|true|none|none|

<h2 id="tocS_createUpdateAddressRequests">createUpdateAddressRequests</h2>
<!-- backwards compatibility -->
<a id="schemacreateupdateaddressrequests"></a>
<a id="schema_createUpdateAddressRequests"></a>
<a id="tocScreateupdateaddressrequests"></a>
<a id="tocscreateupdateaddressrequests"></a>

```json
{
  "addressName": "My house",
  "addressType": "residential",
  "city": "Rio de Janeiro",
  "complement": "3rd floor",
  "country": "BRA",
  "neighborhood": "Botafogo",
  "number": "300",
  "postalCode": "12345-000",
  "receiverName": "Clark Kent.",
  "reference": "Grey building",
  "state": "Rio de Janeiro",
  "street": "Praia de Botafogo",
  "userId": "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressName|string \| null|false|none|Address name.|
|addressType|string \| null|false|none|Type of address. For example, `Residential` or `Pickup`, among others.|
|city|string \| null|false|none|City of the shipping address.|
|complement|string \| null|false|none|Complement to the shipping address in case it applies.|
|country|string \| null|false|none|Three letter ISO code of the country of the shipping address.|
|neighborhood|string \| null|false|none|Neighborhood of the address.|
|number|string \| null|false|none|Number of the building, house or apartment in the shipping address.|
|postalCode|string \| null|false|none|Postal Code.|
|receiverName|string \| null|false|none|Name of the person who is going to receive the order.|
|reference|string \| null|false|none|Complement that might help locate the shipping address more precisely in case of delivery.|
|state|string \| null|false|none|State of the shipping address.|
|street|string \| null|false|none|Street of the address.|
|userId|string \| null|false|none|ID of the customer to whom the address belongs.|

<h2 id="tocS_createUpdateProfileRequests">createUpdateProfileRequests</h2>
<!-- backwards compatibility -->
<a id="schemacreateupdateprofilerequests"></a>
<a id="schema_createUpdateProfileRequests"></a>
<a id="tocScreateupdateprofilerequests"></a>
<a id="tocscreateupdateprofilerequests"></a>

```json
{
  "document": "12345678900",
  "documentType": "CPF",
  "email": "clark.kent@examplemail.com",
  "firstName": "Clark",
  "isCorporate": false,
  "isNewsletterOptIn": false,
  "lastName": "Kent",
  "localeDefault": "en-US",
  "phone": "+12025550195"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|string \| null|false|none|Client document.|
|documentType|string \| null|false|none|Client document type.|
|email|string \| null|false|none|Client email address.|
|firstName|string \| null|false|none|Client first name.|
|isCorporate|boolean \| null|false|none|Indicates whether client is corporate.|
|isNewsletterOptIn|boolean \| null|false|none|Indicates whether client otped to receive the store newsletter.|
|lastName|string \| null|false|none|Client last name.|
|localeDefault|string \| null|false|none|Default locale, used to set store language and currency, for example.|
|phone|string \| null|false|none|Client telephone number.|

<h2 id="tocS_documentResponse">documentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadocumentresponse"></a>
<a id="schema_documentResponse"></a>
<a id="tocSdocumentresponse"></a>
<a id="tocsdocumentresponse"></a>

```json
{
  "Href": "string",
  "Id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Href|string|true|none|Document reference URL.|
|Id|string|true|none|ID of the document that was created or updated.|
