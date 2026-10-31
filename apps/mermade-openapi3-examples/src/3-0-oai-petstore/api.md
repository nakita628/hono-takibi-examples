<h1 id="swagger-petstore">Swagger Petstore v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://petstore.swagger.io/v1">http://petstore.swagger.io/v1</a>

License: MIT

<h1 id="swagger-petstore-pets">pets</h1>

## List all pets

<a id="opIdlistPets"></a>

> Code samples

```bash
curl https://example.com/pets \
  -H 'Accept: application/json'
```

`GET /pets`

<h3 id="list-all-pets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "tag": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-all-pets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An paged array of pets|[Pets](#schemapets)|
|default|Default|unexpected error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-next|string||A link to the next page of responses|

<aside class="success">
This operation does not require authentication
</aside>

## Create a pet

<a id="opIdcreatePets"></a>

> Code samples

```bash
curl https://example.com/pets \
  -X POST \
  -H 'Accept: application/json'
```

`POST /pets`

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-pet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Null response|None|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Info for a specific pet

<a id="opIdshowPetById"></a>

> Code samples

```bash
curl https://example.com/pets/string \
  -H 'Accept: application/json'
```

`GET /pets/{petId}`

<h3 id="info-for-a-specific-pet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|petId|path|string|true|The id of the pet to retrieve|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "tag": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="info-for-a-specific-pet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Expected response to a valid request|[Pets](#schemapets)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Pet">Pet</h2>
<!-- backwards compatibility -->
<a id="schemapet"></a>
<a id="schema_Pet"></a>
<a id="tocSpet"></a>
<a id="tocspet"></a>

```json
{
  "id": 0,
  "name": "string",
  "tag": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|name|string|true|none|none|
|tag|string|false|none|none|

<h2 id="tocS_Pets">Pets</h2>
<!-- backwards compatibility -->
<a id="schemapets"></a>
<a id="schema_Pets"></a>
<a id="tocSpets"></a>
<a id="tocspets"></a>

```json
[
  {
    "id": 0,
    "name": "string",
    "tag": "string"
  }
]
```

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
