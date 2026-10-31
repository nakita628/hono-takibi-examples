<h1 id="masterdata-api---v1">MasterData API - v1 v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br">https://{accountName}.{environment}.com.br</a> - VTEX server url

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="masterdata-api---v1-attachments">Attachments</h1>

The `attachments` API allows you to upload and download files. 

In case of images, the `content-type` header is filled with` image/jpg`.

## Save attachment

<a id="opIdSaveattachment"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/%7B%7Bacronym%7D%7D/documents/%7B%7Bid%7D%7D/%7B%7Bfield%7D%7D/attachments \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -F 'file=["string"]'
```

`POST /api/dataentities/{acronym}/documents/{id}/{field}/attachments`

This API allows you to save a file in a field of type `File`.

When using in javascript, you must add the header `content-type` with value `multipart/form-data;`

You can upload more than one file. Just add a new field in the `form-data` with type `File`.

> Body parameter

```yaml
file:
  - string
```

<h3 id="save-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|acronym|path|string|true|Two letter word that identifies the data structure|
|id|path|string|true|Id of the document|
|field|path|string|true|Field to attach the file to, as described in admin|
|body|body|object|false|none|
|» file|body|[string(binary)]|true|none|

<h3 id="save-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Retrieve attachment

<a id="opIdRetrieveattachment"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/%7B%7Bacronym%7D%7D/documents/%7B%7Bid%7D%7D/%7B%7Bfield%7D%7D/attachments/%7B%7Bfile-name%7D%7D \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/dataentities/{acronym}/documents/{id}/{field}/attachments/{file-name}`

Use this API to retrieve a file.

Be sure to include the file extension in the name. Like in this example:
```
/dataentities/CL/documents/123/file/attachments/image.png
```

<h3 id="retrieve-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|acronym|path|string|true|Two letter word that identifies the data structure|
|id|path|string|true|Id of the document|
|field|path|string|true|Field to attach the file to, as described in admin|
|file-name|path|string|true|none|

<h3 id="retrieve-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="masterdata-api---v1-clusters">Clusters</h1>

Lets you know if a particular document is in one or more clusters.

## Validate Document by Clusters

<a id="opIdValidateDocumentbyClusters"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/%7B%7Bacronym%7D%7D/documents/%7B%7Bid%7D%7D/clusters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '[
    {
      "name": "male",
      "rule": "gender=male"
    },
    {
      "name": "complex",
      "rule": "((gender=male AND percent=0.35) AND any is null) AND (name=*go*)"
    },
    {
      "name": "complex2",
      "rule": "((gender=male AND percent=0.35) AND any is not null) OR (name=*go*)"
    },
    {
      "name": "createdIn",
      "rule": "createdIn between 2015-10-28 AND 2015-10-30"
    }
  ]'
```

`POST /api/dataentities/{acronym}/documents/{id}/clusters`

> Body parameter

```json
[
  {
    "name": "male",
    "rule": "gender=male"
  },
  {
    "name": "complex",
    "rule": "((gender=male AND percent=0.35) AND any is null) AND (name=*go*)"
  },
  {
    "name": "complex2",
    "rule": "((gender=male AND percent=0.35) AND any is not null) OR (name=*go*)"
  },
  {
    "name": "createdIn",
    "rule": "createdIn between 2015-10-28 AND 2015-10-30"
  }
]
```

<h3 id="validate-document-by-clusters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|acronym|path|string|true|Two letter word that identifies the data structure|
|id|path|string|true|Id of the document|
|body|body|[object]|true|none|

<h3 id="validate-document-by-clusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="masterdata-api---v1-data-entities">Data Entities</h1>

Set of APIs that returns the structure of the data entities.

## List data entities

<a id="opIdListdataentities"></a>

> Code samples

```bash
curl https://example.com/api/dataentities \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/dataentities`

Retrieves the list of existing data entities in the store.

### Response status code

1. Status Code `403`: Access not allowed
2. Status Code `200`: Retrieves data entity list

> All headers listed below are required.

<h3 id="list-data-entities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |

> Example responses

> 200 Response

```json
[
  {
    "acronym": "SP",
    "allowGetAll": false,
    "name": "Sample",
    "primaryKeyType": "GUID"
  },
  {
    "acronym": "AD",
    "allowGetAll": false,
    "name": "Endereço",
    "primaryKeyType": "GUID"
  },
  {
    "acronym": "CL",
    "allowGetAll": false,
    "name": "Cliente",
    "primaryKeyType": "GUID"
  }
]
```

<h3 id="list-data-entities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="list-data-entities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Listdataentity](#schemalistdataentity)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get data entity structure

<a id="opIdGetdataentitystructure"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/%7B%7Bacronym%7D%7D \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/dataentities/{acronym}`

Returns the data entity structure with its respective fields and data type.

### Response status code

1. Status Code `403`: Access not allowed
2. Status Code `200`: Retrieves data entity structure

> All headers listed below are required.

<h3 id="get-data-entity-structure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|acronym|path|string|true|Identifies the kind of data|

> Example responses

> 200 Response

```json
{
  "acronym": "SP",
  "allowGetAll": false,
  "fields": [
    {
      "displayName": "Atualizado em",
      "isFilter": true,
      "isInternal": true,
      "isNullable": true,
      "isSearchable": false,
      "name": "updatedIn",
      "type": "Date and Time"
    },
    {
      "displayName": "Atualizado por",
      "isFilter": true,
      "isInternal": true,
      "isNullable": true,
      "isSearchable": false,
      "name": "updatedBy",
      "type": "User Login"
    },
    {
      "displayName": "Auto increment",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Auto_Increment",
      "type": "Auto Increment"
    },
    {
      "displayName": "Boolean",
      "isFilter": true,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Boolean",
      "type": "Boolean"
    },
    {
      "displayName": "Criado em",
      "isFilter": true,
      "isInternal": true,
      "isNullable": true,
      "isSearchable": false,
      "name": "createdIn",
      "type": "Date and Time"
    },
    {
      "displayName": "Criado por",
      "isFilter": true,
      "isInternal": true,
      "isNullable": true,
      "isSearchable": false,
      "name": "createdBy",
      "type": "User Login"
    },
    {
      "displayName": "Currency",
      "isFilter": true,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Currency",
      "type": "Currency"
    },
    {
      "displayName": "Date",
      "isFilter": true,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Date",
      "type": "Date"
    },
    {
      "displayName": "Date and Time",
      "isFilter": true,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Date_Time",
      "type": "Date and Time"
    },
    {
      "displayName": "Decimal",
      "isFilter": true,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Decimal",
      "type": "Decimal"
    },
    {
      "displayName": "Email",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": true,
      "name": "Email",
      "type": "Email"
    },
    {
      "displayName": "Entidade de dados",
      "isFilter": false,
      "isInternal": true,
      "isNullable": false,
      "isSearchable": true,
      "name": "dataEntityId",
      "type": "Varchar 10"
    },
    {
      "displayName": "File",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "File",
      "type": "File"
    },
    {
      "displayName": "Filtro automático",
      "isFilter": false,
      "isInternal": true,
      "isNullable": true,
      "isSearchable": false,
      "name": "auto_filter",
      "type": "Text"
    },
    {
      "displayName": "ID da loja",
      "isFilter": false,
      "isInternal": true,
      "isNullable": false,
      "isSearchable": false,
      "name": "accountId",
      "type": "Varchar 50"
    },
    {
      "displayName": "Id do documento",
      "isFilter": false,
      "isInternal": true,
      "isNullable": false,
      "isSearchable": true,
      "name": "id",
      "type": "Varchar 100"
    },
    {
      "displayName": "Integer",
      "isFilter": true,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Integer",
      "type": "Integer"
    },
    {
      "displayName": "Long",
      "isFilter": true,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Long",
      "type": "Long"
    },
    {
      "displayName": "Nome da loja",
      "isFilter": false,
      "isInternal": true,
      "isNullable": false,
      "isSearchable": true,
      "name": "accountName",
      "type": "Varchar 100"
    },
    {
      "displayName": "Percent",
      "isFilter": true,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Percent",
      "type": "Percent"
    },
    {
      "displayName": "Relationship",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": true,
      "name": "Relationship",
      "type": "Relationship"
    },
    {
      "displayName": "Score2",
      "isFilter": true,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Score2",
      "type": "Score2"
    },
    {
      "displayName": "Seguidores",
      "isFilter": false,
      "isInternal": true,
      "isNullable": true,
      "isSearchable": true,
      "name": "followers",
      "type": "Text"
    },
    {
      "displayName": "Tags",
      "isFilter": false,
      "isInternal": true,
      "isNullable": true,
      "isSearchable": true,
      "name": "tags",
      "type": "Text"
    },
    {
      "displayName": "Text",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Text",
      "type": "Text"
    },
    {
      "displayName": "Time",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Time",
      "type": "Time"
    },
    {
      "displayName": "Ultima interação em",
      "isFilter": true,
      "isInternal": true,
      "isNullable": true,
      "isSearchable": false,
      "name": "lastInteractionIn",
      "type": "Date and Time"
    },
    {
      "displayName": "Ultima interação por",
      "isFilter": true,
      "isInternal": true,
      "isNullable": true,
      "isSearchable": false,
      "name": "lastInteractionBy",
      "type": "User Login"
    },
    {
      "displayName": "URL",
      "isFilter": true,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "URL",
      "type": "URL"
    },
    {
      "displayName": "User Login",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": true,
      "name": "User_Login",
      "type": "User Login"
    },
    {
      "displayName": "Varchar 10",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": true,
      "name": "Varchar10",
      "type": "Varchar 10"
    },
    {
      "displayName": "Varchar 100",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": true,
      "name": "Varchar100",
      "type": "Varchar 100"
    },
    {
      "displayName": "Varchar 50",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": true,
      "name": "Varchar50",
      "type": "Varchar 50"
    },
    {
      "displayName": "Varchar 750",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": true,
      "name": "Varchar750",
      "type": "Varchar 750"
    }
  ],
  "name": "Sample",
  "primaryKeyType": "GUID"
}
```

<h3 id="get-data-entity-structure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Getdataentityfields](#schemagetdataentityfields)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="masterdata-api---v1-documents">Documents</h1>

The APIs within this group are used to save documents and query them by id.

If the document has the id attribute or has fields that have been set to indexes with unique values, VTEX Master Data will attempt to identify the document. If the document is found a change will be made. If it is not found, an inclusion will be made. ** This scenario does not apply to the API with the POST verb**.

Another important note: The id field will only be considered on the **POST** verb if the ID type entered in the Data Entity is the option:

```
A chave primária será informada pelo cliente através do atributo 'id'
```

Otherwise, a new document will always be created.

### Response status code

1. Status Code 201: Document created successfully
2. Status Code 200: Document changed successfully
3. Status Code 304: There were no changes to the document
4. Status Code 400: Invalid information in JSON
5. Status Code 403: Unauthorized access


## Create or update entire document

<a id="opIdCreateorupdateentiredocument"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/%7B%7Bacronym%7D%7D/documents \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "Boolean": true,
    "Currency": 2.5,
    "Date": "1992-11-17",
    "Date_Time": "2016-09-14T19:21:01.3163733Z",
    "Decimal": 2.5,
    "Email": "meu@email.com",
    "Integer": 1000000,
    "Long": 1000000000,
    "Percent": 85.42,
    "Relationship": "5eb31afb-7ab0-11e6-94b4-0a44686e393f",
    "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.... ",
    "Time": "23:50",
    "URL": "http://www.vtex.com",
    "Varchar10": "Lorem ipsu",
    "Varchar100": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "Varchar50": "Lorem ipsum dolor sit amet, consectetur adipiscing",
    "Varchar750": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "id": "4e4c55ac-e491-11e6-94f4-0ac138d2d42e"
  }'
```

`PUT /api/dataentities/{acronym}/documents`

> Body parameter

```json
{
  "Boolean": true,
  "Currency": 2.5,
  "Date": "1992-11-17",
  "Date_Time": "2016-09-14T19:21:01.3163733Z",
  "Decimal": 2.5,
  "Email": "meu@email.com",
  "Integer": 1000000,
  "Long": 1000000000,
  "Percent": 85.42,
  "Relationship": "5eb31afb-7ab0-11e6-94b4-0a44686e393f",
  "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.... ",
  "Time": "23:50",
  "URL": "http://www.vtex.com",
  "Varchar10": "Lorem ipsu",
  "Varchar100": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  "Varchar50": "Lorem ipsum dolor sit amet, consectetur adipiscing",
  "Varchar750": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  "id": "4e4c55ac-e491-11e6-94f4-0ac138d2d42e"
}
```

<h3 id="create-or-update-entire-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|acronym|path|string|true|Identifies the kind of data|
|body|body|object|true|none|

<h3 id="create-or-update-entire-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create new document

<a id="opIdCreatenewdocument"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/%7B%7Bacronym%7D%7D/documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "Boolean": true,
    "Currency": 2.5,
    "Date": "1992-11-17",
    "Date_Time": "2016-09-14T19:21:01.3163733Z",
    "Decimal": 2.5,
    "Email": "meu@email.com",
    "Integer": 1000000,
    "Long": 1000000000,
    "Percent": 85.42,
    "Relationship": "5eb31afb-7ab0-11e6-94b4-0a44686e393f",
    "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "Time": "23:50",
    "URL": "http://www.vtex.com",
    "Varchar10": "Lorem ipsu",
    "Varchar100": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "Varchar50": "Lorem ipsum dolor sit amet, consectetur adipiscing",
    "Varchar750": "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  }'
```

`POST /api/dataentities/{acronym}/documents`

Creates documents through a JSON object where the key is the name of the field.

> Body parameter

```json
{
  "Boolean": true,
  "Currency": 2.5,
  "Date": "1992-11-17",
  "Date_Time": "2016-09-14T19:21:01.3163733Z",
  "Decimal": 2.5,
  "Email": "meu@email.com",
  "Integer": 1000000,
  "Long": 1000000000,
  "Percent": 85.42,
  "Relationship": "5eb31afb-7ab0-11e6-94b4-0a44686e393f",
  "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  "Time": "23:50",
  "URL": "http://www.vtex.com",
  "Varchar10": "Lorem ipsu",
  "Varchar100": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  "Varchar50": "Lorem ipsum dolor sit amet, consectetur adipiscing",
  "Varchar750": "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
}
```

<h3 id="create-new-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|acronym|path|string|true|Identifies the kind of data|
|body|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "Href": "http://{{accountName}}.vtexcommercestable.com.br/api/dataentities/CL/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e",
  "Id": "CL-b818cbda-e489-11e6-94f4-0ac138d2d42e"
}
```

<h3 id="create-new-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Createnewdocument](#schemacreatenewdocument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create or update partial document

<a id="opIdCreateorupdatepartialdocument"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/%7B%7Bacronym%7D%7D/documents \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "Boolean": true,
    "id": "4e4c55ac-e491-11e6-94f4-0ac138d2d42e"
  }'
```

`PATCH /api/dataentities/{acronym}/documents`

> Body parameter

```json
{
  "Boolean": true,
  "id": "4e4c55ac-e491-11e6-94f4-0ac138d2d42e"
}
```

<h3 id="create-or-update-partial-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|acronym|path|string|true|Identifies the kind of data|
|body|body|object|true|none|

<h3 id="create-or-update-partial-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get document

<a id="opIdGetdocument"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/%7B%7Bacronym%7D%7D/documents/%7B%7Bid%7D%7D \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/dataentities/{acronym}/documents/{id}`

Retrieves a document.

Assign the `_fields` parameter in the query string to retrieve the desired fields. If you want to return all the fields use `_fields=_all`.

<h3 id="get-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|acronym|path|string|true|Two letter word that identifies the data structure|
|id|path|string|true|Id of the document|

> Example responses

> 200 Response

```json
{
  "campo1": "valor1",
  "campo2": "valor2",
  "campo3": 3
}
```

<h3 id="get-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Usingfilters](#schemausingfilters)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update entire document

<a id="opIdUpdateentiredocument"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/%7B%7Bacronym%7D%7D/documents/%7B%7Bid%7D%7D \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "Boolean": true,
    "Currency": 2.5,
    "Date": "1992-11-17",
    "Date_Time": "2016-09-14T19:21:01.3163733Z",
    "Decimal": 2.5,
    "Email": "meu@email.com",
    "Integer": 1000000,
    "Long": 1000000000,
    "Percent": 85.42,
    "Relationship": "5eb31afb-7ab0-11e6-94b4-0a44686e393f",
    "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "Time": "23:50",
    "URL": "http://www.vtex.com",
    "Varchar10": "Lorem ipsu",
    "Varchar100": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "Varchar50": "Lorem ipsum dolor sit amet, consectetur adipiscing",
    "Varchar750": "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  }'
```

`PUT /api/dataentities/{acronym}/documents/{id}`

> Body parameter

```json
{
  "Boolean": true,
  "Currency": 2.5,
  "Date": "1992-11-17",
  "Date_Time": "2016-09-14T19:21:01.3163733Z",
  "Decimal": 2.5,
  "Email": "meu@email.com",
  "Integer": 1000000,
  "Long": 1000000000,
  "Percent": 85.42,
  "Relationship": "5eb31afb-7ab0-11e6-94b4-0a44686e393f",
  "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  "Time": "23:50",
  "URL": "http://www.vtex.com",
  "Varchar10": "Lorem ipsu",
  "Varchar100": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  "Varchar50": "Lorem ipsum dolor sit amet, consectetur adipiscing",
  "Varchar750": "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
}
```

<h3 id="update-entire-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|acronym|path|string|true|Two letter word that identifies the data structure|
|id|path|string|true|Id of the document|
|body|body|object|true|none|

<h3 id="update-entire-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete document

<a id="opIdDeletedocument"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/%7B%7Bacronym%7D%7D/documents/%7B%7Bid%7D%7D \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/dataentities/{acronym}/documents/{id}`

It allows to delete a document.

<h3 id="delete-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|acronym|path|string|true|Two letter word that identifies the data structure|
|id|path|string|true|Id of the document|

<h3 id="delete-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update partial document

<a id="opIdUpdatepartialdocument"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/%7B%7Bacronym%7D%7D/documents/%7B%7Bid%7D%7D \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "Boolean": false
  }'
```

`PATCH /api/dataentities/{acronym}/documents/{id}`

> Body parameter

```json
{
  "Boolean": false
}
```

<h3 id="update-partial-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|acronym|path|string|true|Two letter word that identifies the data structure|
|id|path|string|true|Id of the document|
|body|body|object|true|none|

<h3 id="update-partial-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="masterdata-api---v1-score">Score</h1>

It allows to record and remove points in the` Score2` fields.

## Put scores

<a id="opIdPutscores"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/%7B%7Bacronym%7D%7D/documents/%7B%7Bid%7D%7D/score \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '[
    {
      "field": "carttag",
      "key": "Payment",
      "point": 1,
      "until": "10m"
    },
    {
      "field": "scoretest",
      "key": "Point 1",
      "point": 1,
      "until": "1d"
    }
  ]'
```

`PUT /api/dataentities/{acronym}/documents/{id}/score`

It allows punctuate in more than one field and more than one key.

> Body parameter

```json
[
  {
    "field": "carttag",
    "key": "Payment",
    "point": 1,
    "until": "10m"
  },
  {
    "field": "scoretest",
    "key": "Point 1",
    "point": 1,
    "until": "1d"
  }
]
```

<h3 id="put-scores-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|acronym|path|string|true|Two letter word that identifies the data structure|
|id|path|string|true|Id of the document|
|body|body|[[PutscoresRequest](#schemaputscoresrequest)]|true|none|

<h3 id="put-scores-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Put score by field

<a id="opIdPutscorebyfield"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/%7B%7Bacronym%7D%7D/documents/%7B%7Bid%7D%7D/score/%7B%7Bfield-name%7D%7D \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "key": "first key",
    "point": 1,
    "until": "10m"
  }'
```

`PUT /api/dataentities/{acronym}/documents/{id}/score/{field-name}`

It allows to punctuate in a specific field.

> Body parameter

```json
{
  "key": "first key",
  "point": 1,
  "until": "10m"
}
```

<h3 id="put-score-by-field-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|acronym|path|string|true|Two letter word that identifies the data structure|
|id|path|string|true|Id of the document|
|field-name|path|string|true|Name of the field to score|
|body|body|[PutscorebyfieldRequest](#schemaputscorebyfieldrequest)|true|none|
|» key|body|string|true|none|
|» point|body|integer(int32)|true|none|
|» until|body|string|true|none|

<h3 id="put-score-by-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete score by field

<a id="opIdDeletescorebyfield"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/%7B%7Bacronym%7D%7D/documents/%7B%7Bid%7D%7D/score/%7B%7Bfield-name%7D%7D \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "key": "first key"
  }'
```

`DELETE /api/dataentities/{acronym}/documents/{id}/score/{field-name}`

Allows you to remove a key from a specific field.

> Body parameter

```json
{
  "key": "first key"
}
```

<h3 id="delete-score-by-field-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|acronym|path|string|true|Two letter word that identifies the data structure|
|id|path|string|true|Id of the document|
|field-name|path|string|true|Name of the field to remove score from|
|body|body|[DeletescorebyfieldRequest](#schemadeletescorebyfieldrequest)|true|none|
|» key|body|string|true|none|

<h3 id="delete-score-by-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="masterdata-api---v1-scroll">Scroll</h1>

The new `` scroll `` API has been developed to meet external integration scenarios. If you need to query the entire VTEX Master Data database, or your collection is over 10.000 documents, use this feature.

## Scroll documents

<a id="opIdScrolldocuments"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/%7B%7Bacronym%7D%7D/scroll \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/dataentities/{acronym}/scroll`

Scrolls through documents according to the query parameter filters.

> Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `429`.

Use all the features of `search` API to perform filters.

In the first request, the `X-VTEX-MD-TOKEN` token will be obtained in the header. This token must be passed to the next request in the query string `_token` parameter. The token has a timeout of 10 minutes, which refreshes after each request.

**ATTENTION:** To inform the number of documents per request, use the query string parameter `_size`, which has the maximum value of 1000.

After the token is obtained it is no longer necessary to send the filter or document size per page parameters. You only need to resend the token until the document collection is empty.

### First request example:
```
/dataentities/CL/scroll?isCluster=true&_size=250&_fields=email,firstName
```

After the first request, retrieve the token in the header `X-VTEX-MD-TOKEN` and make the next requests.

### Example of subsequent requests:
```
/dataentities/CL/scroll?_token=tokenvalueexample
```

<h3 id="scroll-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|acronym|path|string|true|Identifies the kind of data|

> Example responses

> 429 Response

```json
{}
```

<h3 id="scroll-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|429|Too Many Requests|Too Many Requests|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="masterdata-api---v1-search">Search</h1>

The `search` API is intended to query a collection of documents.	

## Search documents

<a id="opIdSearchdocuments"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/%7B%7Bacronym%7D%7D/search \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'REST-Range: resources=0-10'
```

`GET /api/dataentities/{acronym}/search`

Search documents by the query parameters described below.

> Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `503`.

<h3 id="search-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|REST-Range|header|string|true|Range of documents to show|
|acronym|path|string|true|Identifies the kind of data|
|_fields|query|string|false|Fields that will be returned by document|
|_where|query|string|false|Specification of filters. As seen below|
|_schema|query|string|false|Enter with the name of the schema to filter documents by compatibility of the schema.|
|_keyword|query|string|false|String to search|
|_sort|query|string|false|Use ASC value to sort ascending or DESC value to sort descending. |

> Example responses

> 503 Response

```json
{}
```

<h3 id="search-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Use this endpoint to search Master Data v1 documents with highly customizable filters.<br><br>## Headers<br><br>\| Name \|  \|<br>\| -------- \| -------- \|<br>\| Content-Type \| application/json \|<br>\| Accept \| application/vnd.vtex.ds.v10+json \|<br>\| x-vtex-api-appKey \| App Key \|<br>\| x-vtex-api-appToken \| App Token \|<br>\| REST-Range \| Defines the collection of documents to be returned. A range within the collection limited by 100 documents per query. \|<br><br><br>## Querystring<br><br>> Learn more about [Master Data v1 search queries](https://developers.vtex.com/vtex-rest-api/docs/how-the-queries-in-master-data-v1-work).<br><br>\| Attribute \| What it does \|<br>\| -------- \| -------- \|<br>\| _fields \| Fields that will be returned by document \|<br>\| _where \| Specification of filters \|<br>\| _keyword \| Search in all fields marked as searchable \|<br>\| _sort \| Sort order \|<br><br>## How to fill the querystring attributes<br><br>1. _fields: Use the field names separated by commas. Ex. `_fields=email,firstName,document`.<br>2. _where: See the query examples below to learn how to use filters.<br>3. _keyword: Enter the value you want to query. Use quotes for a partial query. Ex. `_keyword=Maria` or `_keyword=*Maria*`<br>4. _sort: Use `ASC` value to sort ascending or `DESC` value to sort descending. Ex. `_sort=firstName ASC`.<br>5. If you want to fetch all fields use the `_all` parameter in the list of response fields. Ex: `_fields=_all`<br><br><br>## Query Examples:<br><br><br>### Simple filter<br><br>```<br>/dataentities/CL/search?email=my@email.com<br>```<br><br>### Complex filter<br><br>```<br>/dataentities/CL/search?_where=(firstName=Jon OR lastName=Smith) OR (createdIn between 2001-01-01 AND 2016-01-01)<br>```<br><br>### Filter by range<br><br>#### Date Range<br><br>```<br>/dataentities/CL/search?_where=createdIn between 2001-01-01 AND 2016-01-01<br>```<br><br>#### Range numeric fields<br><br>```<br>/dataentities/CL/search?_where=age between 18 AND 25<br>```<br><br>### Partial filter<br><br>```<br>/dataentities/CL/search?firstName=*Maria*<br>```<br><br>### Filter for null values<br><br>```<br>/dataentities/CL/search?_where=firstName is null<br>```<br><br>### Filter for non-null values<br><br>```<br>/dataentities/CL/search?_where=firstName is not null<br>```<br><br>### Filter for difference<br>```<br>/dataentities/CL/search?_where=firstName<>maria<br>```<br><br>### Filter greater than or less than<br>```<br>/dataentities/CL/search?_where=number>5<br>/dataentities/CL/search?_where=date<2001-01-01<br>```|None|
|503|Service Unavailable|Service Unavailable|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="masterdata-api---v1-versions">Versions</h1>

Master Data documents are versioned. This means that for each change a new version is generated. The `versions` APIs allows to query the versions and also apply the state of a document to the most current version.

## List versions

<a id="opIdListversions"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/%7B%7Bacronym%7D%7D/documents/%7B%7Bid%7D%7D/versions \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/dataentities/{acronym}/documents/{id}/versions`

Allows to list the versions of a document.

<h3 id="list-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|acronym|path|string|true|Two letter word that identifies the data structure|
|id|path|string|true|Id of the document|

> Example responses

> 200 Response

```json
[
  {
    "date": "2016-10-18T16:53:32+00:00",
    "id": "_EAR0cJ7XB5k5grnmm0zeKGlVvVM9WCPV_"
  },
  {
    "date": "2016-09-08T20:11:42+00:00",
    "id": "_E5SH9WXVvhPBNnbQtYAAGqrIysIeNYhy_"
  },
  {
    "date": "2016-07-14T00:36:36+00:00",
    "id": "_cwVfOG7S6XeAiDBhNpLiJM1cwRiJcvdp_"
  }
]
```

<h3 id="list-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

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
curl https://example.com/api/dataentities/%7B%7Bacronym%7D%7D/documents/%7B%7Bid%7D%7D/versions/%7B%7BversionId%7D%7D \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/dataentities/{acronym}/documents/{id}/versions/{versionId}`

Returns the version of a document.

<h3 id="get-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|acronym|path|string|true|Two letter word that identifies the data structure|
|id|path|string|true|Id of the document|
|versionId|path|string|true|Id of the version to get|

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
    "dataEntityId": "CL",
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
|200|OK||[Getversion](#schemagetversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Put version

<a id="opIdPutversion"></a>

> Code samples

```bash
curl https://example.com/api/dataentities/%7B%7Bacronym%7D%7D/documents/%7B%7Bid%7D%7D/versions/%7B%7BversionId%7D%7D \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`PUT /api/dataentities/{acronym}/documents/{id}/versions/{versionId}`

Updates document with version values.

<h3 id="put-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|acronym|path|string|true|Two letter word that identifies the data structure|
|id|path|string|true|Id of the document|
|versionId|path|string|true|Id of the version to update|

> Example responses

> 200 Response

```json
{
  "Href": "http://{{accountName}}.vtexcommercestable.com.br/api/dataentities/CL/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e",
  "Id": "CL-b818cbda-e489-11e6-94f4-0ac138d2d42e"
}
```

<h3 id="put-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Putversion](#schemaputversion)|

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

<h2 id="tocS_Createnewdocument">Createnewdocument</h2>
<!-- backwards compatibility -->
<a id="schemacreatenewdocument"></a>
<a id="schema_Createnewdocument"></a>
<a id="tocScreatenewdocument"></a>
<a id="tocscreatenewdocument"></a>

```json
{
  "Href": "http://{{accountName}}.vtexcommercestable.com.br/api/dataentities/CL/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e",
  "Id": "CL-b818cbda-e489-11e6-94f4-0ac138d2d42e"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Href|string|true|none|none|
|Id|string|true|none|none|

<h2 id="tocS_CreatenewdocumentRequest">CreatenewdocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatenewdocumentrequest"></a>
<a id="schema_CreatenewdocumentRequest"></a>
<a id="tocScreatenewdocumentrequest"></a>
<a id="tocscreatenewdocumentrequest"></a>

```json
{
  "Boolean": true,
  "Currency": 2.5,
  "Date": "1992-11-17",
  "Date_Time": "2016-09-14T19:21:01.3163733Z",
  "Decimal": 2.5,
  "Email": "meu@email.com",
  "Integer": 1000000,
  "Long": 1000000000,
  "Percent": 85.42,
  "Relationship": "5eb31afb-7ab0-11e6-94b4-0a44686e393f",
  "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  "Time": "23:50",
  "URL": "http://www.vtex.com",
  "Varchar10": "Lorem ipsu",
  "Varchar100": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  "Varchar50": "Lorem ipsum dolor sit amet, consectetur adipiscing",
  "Varchar750": "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Boolean|boolean|true|none|none|
|Currency|number|true|none|none|
|Date|string|true|none|none|
|Date_Time|string|true|none|none|
|Decimal|number|true|none|none|
|Email|string|true|none|none|
|Integer|integer(int32)|true|none|none|
|Long|integer(int32)|true|none|none|
|Percent|number|true|none|none|
|Relationship|string|true|none|none|
|Text|string|true|none|none|
|Time|string|true|none|none|
|URL|string|true|none|none|
|Varchar10|string|true|none|none|
|Varchar100|string|true|none|none|
|Varchar50|string|true|none|none|
|Varchar750|string|true|none|none|

<h2 id="tocS_CreateorupdateentiredocumentRequest">CreateorupdateentiredocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateorupdateentiredocumentrequest"></a>
<a id="schema_CreateorupdateentiredocumentRequest"></a>
<a id="tocScreateorupdateentiredocumentrequest"></a>
<a id="tocscreateorupdateentiredocumentrequest"></a>

```json
{
  "Boolean": true,
  "Currency": 2.5,
  "Date": "1992-11-17",
  "Date_Time": "2016-09-14T19:21:01.3163733Z",
  "Decimal": 2.5,
  "Email": "meu@email.com",
  "Integer": 1000000,
  "Long": 1000000000,
  "Percent": 85.42,
  "Relationship": "5eb31afb-7ab0-11e6-94b4-0a44686e393f",
  "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.... ",
  "Time": "23:50",
  "URL": "http://www.vtex.com",
  "Varchar10": "Lorem ipsu",
  "Varchar100": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  "Varchar50": "Lorem ipsum dolor sit amet, consectetur adipiscing",
  "Varchar750": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  "id": "4e4c55ac-e491-11e6-94f4-0ac138d2d42e"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Boolean|boolean|true|none|none|
|Currency|number|true|none|none|
|Date|string|true|none|none|
|Date_Time|string|true|none|none|
|Decimal|number|true|none|none|
|Email|string|true|none|none|
|Integer|integer(int32)|true|none|none|
|Long|integer(int32)|true|none|none|
|Percent|number|true|none|none|
|Relationship|string|true|none|none|
|Text|string|true|none|none|
|Time|string|true|none|none|
|URL|string|true|none|none|
|Varchar10|string|true|none|none|
|Varchar100|string|true|none|none|
|Varchar50|string|true|none|none|
|Varchar750|string|true|none|none|
|id|string|true|none|none|

<h2 id="tocS_CreateorupdatepartialdocumentRequest">CreateorupdatepartialdocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateorupdatepartialdocumentrequest"></a>
<a id="schema_CreateorupdatepartialdocumentRequest"></a>
<a id="tocScreateorupdatepartialdocumentrequest"></a>
<a id="tocscreateorupdatepartialdocumentrequest"></a>

```json
{
  "Boolean": true,
  "id": "4e4c55ac-e491-11e6-94f4-0ac138d2d42e"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Boolean|boolean|true|none|none|
|id|string|true|none|none|

<h2 id="tocS_DeletescorebyfieldRequest">DeletescorebyfieldRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletescorebyfieldrequest"></a>
<a id="schema_DeletescorebyfieldRequest"></a>
<a id="tocSdeletescorebyfieldrequest"></a>
<a id="tocsdeletescorebyfieldrequest"></a>

```json
{
  "key": "first key"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|

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
  "dataEntityId": "CL",
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

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
{
  "displayName": "Atualizado em",
  "isFilter": true,
  "isInternal": true,
  "isNullable": true,
  "isSearchable": false,
  "name": "updatedIn",
  "type": "Date and Time"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|true|none|none|
|isFilter|boolean|true|none|none|
|isInternal|boolean|true|none|none|
|isNullable|boolean|true|none|none|
|isSearchable|boolean|true|none|none|
|name|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_Getdataentityfields">Getdataentityfields</h2>
<!-- backwards compatibility -->
<a id="schemagetdataentityfields"></a>
<a id="schema_Getdataentityfields"></a>
<a id="tocSgetdataentityfields"></a>
<a id="tocsgetdataentityfields"></a>

```json
{
  "acronym": "SP",
  "allowGetAll": false,
  "fields": [
    {
      "displayName": "Atualizado em",
      "isFilter": true,
      "isInternal": true,
      "isNullable": true,
      "isSearchable": false,
      "name": "updatedIn",
      "type": "Date and Time"
    },
    {
      "displayName": "Atualizado por",
      "isFilter": true,
      "isInternal": true,
      "isNullable": true,
      "isSearchable": false,
      "name": "updatedBy",
      "type": "User Login"
    },
    {
      "displayName": "Auto increment",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Auto_Increment",
      "type": "Auto Increment"
    },
    {
      "displayName": "Boolean",
      "isFilter": true,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Boolean",
      "type": "Boolean"
    },
    {
      "displayName": "Criado em",
      "isFilter": true,
      "isInternal": true,
      "isNullable": true,
      "isSearchable": false,
      "name": "createdIn",
      "type": "Date and Time"
    },
    {
      "displayName": "Criado por",
      "isFilter": true,
      "isInternal": true,
      "isNullable": true,
      "isSearchable": false,
      "name": "createdBy",
      "type": "User Login"
    },
    {
      "displayName": "Currency",
      "isFilter": true,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Currency",
      "type": "Currency"
    },
    {
      "displayName": "Date",
      "isFilter": true,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Date",
      "type": "Date"
    },
    {
      "displayName": "Date and Time",
      "isFilter": true,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Date_Time",
      "type": "Date and Time"
    },
    {
      "displayName": "Decimal",
      "isFilter": true,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Decimal",
      "type": "Decimal"
    },
    {
      "displayName": "Email",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": true,
      "name": "Email",
      "type": "Email"
    },
    {
      "displayName": "Entidade de dados",
      "isFilter": false,
      "isInternal": true,
      "isNullable": false,
      "isSearchable": true,
      "name": "dataEntityId",
      "type": "Varchar 10"
    },
    {
      "displayName": "File",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "File",
      "type": "File"
    },
    {
      "displayName": "Filtro automático",
      "isFilter": false,
      "isInternal": true,
      "isNullable": true,
      "isSearchable": false,
      "name": "auto_filter",
      "type": "Text"
    },
    {
      "displayName": "ID da loja",
      "isFilter": false,
      "isInternal": true,
      "isNullable": false,
      "isSearchable": false,
      "name": "accountId",
      "type": "Varchar 50"
    },
    {
      "displayName": "Id do documento",
      "isFilter": false,
      "isInternal": true,
      "isNullable": false,
      "isSearchable": true,
      "name": "id",
      "type": "Varchar 100"
    },
    {
      "displayName": "Integer",
      "isFilter": true,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Integer",
      "type": "Integer"
    },
    {
      "displayName": "Long",
      "isFilter": true,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Long",
      "type": "Long"
    },
    {
      "displayName": "Nome da loja",
      "isFilter": false,
      "isInternal": true,
      "isNullable": false,
      "isSearchable": true,
      "name": "accountName",
      "type": "Varchar 100"
    },
    {
      "displayName": "Percent",
      "isFilter": true,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Percent",
      "type": "Percent"
    },
    {
      "displayName": "Relationship",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": true,
      "name": "Relationship",
      "type": "Relationship"
    },
    {
      "displayName": "Score2",
      "isFilter": true,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Score2",
      "type": "Score2"
    },
    {
      "displayName": "Seguidores",
      "isFilter": false,
      "isInternal": true,
      "isNullable": true,
      "isSearchable": true,
      "name": "followers",
      "type": "Text"
    },
    {
      "displayName": "Tags",
      "isFilter": false,
      "isInternal": true,
      "isNullable": true,
      "isSearchable": true,
      "name": "tags",
      "type": "Text"
    },
    {
      "displayName": "Text",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Text",
      "type": "Text"
    },
    {
      "displayName": "Time",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "Time",
      "type": "Time"
    },
    {
      "displayName": "Ultima interação em",
      "isFilter": true,
      "isInternal": true,
      "isNullable": true,
      "isSearchable": false,
      "name": "lastInteractionIn",
      "type": "Date and Time"
    },
    {
      "displayName": "Ultima interação por",
      "isFilter": true,
      "isInternal": true,
      "isNullable": true,
      "isSearchable": false,
      "name": "lastInteractionBy",
      "type": "User Login"
    },
    {
      "displayName": "URL",
      "isFilter": true,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": false,
      "name": "URL",
      "type": "URL"
    },
    {
      "displayName": "User Login",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": true,
      "name": "User_Login",
      "type": "User Login"
    },
    {
      "displayName": "Varchar 10",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": true,
      "name": "Varchar10",
      "type": "Varchar 10"
    },
    {
      "displayName": "Varchar 100",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": true,
      "name": "Varchar100",
      "type": "Varchar 100"
    },
    {
      "displayName": "Varchar 50",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": true,
      "name": "Varchar50",
      "type": "Varchar 50"
    },
    {
      "displayName": "Varchar 750",
      "isFilter": false,
      "isInternal": false,
      "isNullable": true,
      "isSearchable": true,
      "name": "Varchar750",
      "type": "Varchar 750"
    }
  ],
  "name": "Sample",
  "primaryKeyType": "GUID"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acronym|string|true|none|none|
|allowGetAll|boolean|true|none|none|
|fields|[[Field](#schemafield)]|true|none|none|
|name|string|true|none|none|
|primaryKeyType|string|true|none|none|

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
    "dataEntityId": "CL",
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

<h2 id="tocS_Listdataentity">Listdataentity</h2>
<!-- backwards compatibility -->
<a id="schemalistdataentity"></a>
<a id="schema_Listdataentity"></a>
<a id="tocSlistdataentity"></a>
<a id="tocslistdataentity"></a>

```json
{
  "acronym": "SP",
  "allowGetAll": false,
  "name": "Sample",
  "primaryKeyType": "GUID"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acronym|string|true|none|none|
|allowGetAll|boolean|true|none|none|
|name|string|true|none|none|
|primaryKeyType|string|true|none|none|

<h2 id="tocS_Listversion">Listversion</h2>
<!-- backwards compatibility -->
<a id="schemalistversion"></a>
<a id="schema_Listversion"></a>
<a id="tocSlistversion"></a>
<a id="tocslistversion"></a>

```json
{
  "date": "2016-10-18T16:53:32+00:00",
  "id": "_EAR0cJ7XB5k5grnmm0zeKGlVvVM9WCPV_"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|true|none|none|
|id|string|true|none|none|

<h2 id="tocS_PutscorebyfieldRequest">PutscorebyfieldRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputscorebyfieldrequest"></a>
<a id="schema_PutscorebyfieldRequest"></a>
<a id="tocSputscorebyfieldrequest"></a>
<a id="tocsputscorebyfieldrequest"></a>

```json
{
  "key": "first key",
  "point": 1,
  "until": "10m"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|point|integer(int32)|true|none|none|
|until|string|true|none|none|

<h2 id="tocS_PutscoresRequest">PutscoresRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputscoresrequest"></a>
<a id="schema_PutscoresRequest"></a>
<a id="tocSputscoresrequest"></a>
<a id="tocsputscoresrequest"></a>

```json
{
  "field": "carttag",
  "key": "Payment",
  "point": 1,
  "until": "10m"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|none|
|key|string|true|none|none|
|point|integer(int32)|true|none|none|
|until|string|true|none|none|

<h2 id="tocS_Putversion">Putversion</h2>
<!-- backwards compatibility -->
<a id="schemaputversion"></a>
<a id="schema_Putversion"></a>
<a id="tocSputversion"></a>
<a id="tocsputversion"></a>

```json
{
  "Href": "http://{{accountName}}.vtexcommercestable.com.br/api/dataentities/CL/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e",
  "Id": "CL-b818cbda-e489-11e6-94f4-0ac138d2d42e"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Href|string|true|none|none|
|Id|string|true|none|none|

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

<h2 id="tocS_UpdateentiredocumentRequest">UpdateentiredocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateentiredocumentrequest"></a>
<a id="schema_UpdateentiredocumentRequest"></a>
<a id="tocSupdateentiredocumentrequest"></a>
<a id="tocsupdateentiredocumentrequest"></a>

```json
{
  "Boolean": true,
  "Currency": 2.5,
  "Date": "1992-11-17",
  "Date_Time": "2016-09-14T19:21:01.3163733Z",
  "Decimal": 2.5,
  "Email": "meu@email.com",
  "Integer": 1000000,
  "Long": 1000000000,
  "Percent": 85.42,
  "Relationship": "5eb31afb-7ab0-11e6-94b4-0a44686e393f",
  "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  "Time": "23:50",
  "URL": "http://www.vtex.com",
  "Varchar10": "Lorem ipsu",
  "Varchar100": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  "Varchar50": "Lorem ipsum dolor sit amet, consectetur adipiscing",
  "Varchar750": "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Boolean|boolean|true|none|none|
|Currency|number|true|none|none|
|Date|string|true|none|none|
|Date_Time|string|true|none|none|
|Decimal|number|true|none|none|
|Email|string|true|none|none|
|Integer|integer(int32)|true|none|none|
|Long|integer(int32)|true|none|none|
|Percent|number|true|none|none|
|Relationship|string|true|none|none|
|Text|string|true|none|none|
|Time|string|true|none|none|
|URL|string|true|none|none|
|Varchar10|string|true|none|none|
|Varchar100|string|true|none|none|
|Varchar50|string|true|none|none|
|Varchar750|string|true|none|none|

<h2 id="tocS_UpdatepartialdocumentRequest">UpdatepartialdocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepartialdocumentrequest"></a>
<a id="schema_UpdatepartialdocumentRequest"></a>
<a id="tocSupdatepartialdocumentrequest"></a>
<a id="tocsupdatepartialdocumentrequest"></a>

```json
{
  "Boolean": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Boolean|boolean|true|none|none|

<h2 id="tocS_Usingfilters">Usingfilters</h2>
<!-- backwards compatibility -->
<a id="schemausingfilters"></a>
<a id="schema_Usingfilters"></a>
<a id="tocSusingfilters"></a>
<a id="tocsusingfilters"></a>

```json
{
  "campo1": "valor1",
  "campo2": "valor2",
  "campo3": 3
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campo1|string|true|none|none|
|campo2|string|true|none|none|
|campo3|integer(int32)|true|none|none|

<h2 id="tocS_ValidateDocumentbyClustersRequest">ValidateDocumentbyClustersRequest</h2>
<!-- backwards compatibility -->
<a id="schemavalidatedocumentbyclustersrequest"></a>
<a id="schema_ValidateDocumentbyClustersRequest"></a>
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
