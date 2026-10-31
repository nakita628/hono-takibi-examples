<h1 id="swagger-petstore">Swagger Petstore v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A sample API that uses a petstore as an example to demonstrate features in the swagger-2.0 specification

Base URLs:

* <a href="http://petstore.swagger.io/api">http://petstore.swagger.io/api</a>

<a href="http://swagger.io/terms/">Terms of service</a>
Email: <a href="mailto:foo@example.com">Swagger API Team</a> 
Web: <a href="http://madskristensen.net">Swagger API Team</a> 
License: <a href="http://github.com/gruntjs/grunt/blob/master/LICENSE-MIT">MIT</a>

<h1 id="swagger-petstore-default">Default</h1>

## findPets

<a id="opIdfindPets"></a>

> Code samples

```bash
curl https://example.com/pets \
  -H 'Accept: application/json'
```

`GET /pets`

Returns all pets from the system that the user has access to
Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.

Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien.


<h3 id="findpets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tags|query|[string]|false|tags to filter by|
|limit|query|integer(int32)|false|maximum number of results to return|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "tag": "string",
    "id": 0
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

<h3 id="findpets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|pet response|Inline|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="findpets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Pet](#schemapet)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## addPet

<a id="opIdaddPet"></a>

> Code samples

```bash
curl https://example.com/pets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "tag": "string"
  }'
```

`POST /pets`

Creates a new pet in the store.  Duplicates are allowed

> Body parameter

```json
{
  "name": "string",
  "tag": "string"
}
```

<h3 id="addpet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewPet](#schemanewpet)|true|Pet to add to the store|
|» name|body|string|true|none|
|» tag|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "tag": "string",
  "id": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="addpet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|pet response|[Pet](#schemapet)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## find pet by id

<a id="opIdfind pet by id"></a>

> Code samples

```bash
curl https://example.com/pets/0 \
  -H 'Accept: application/json'
```

`GET /pets/{id}`

Returns a user based on a single ID, if the user does not have access to the pet

<h3 id="find-pet-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|ID of pet to fetch|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "tag": "string",
  "id": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="find-pet-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|pet response|[Pet](#schemapet)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## deletePet

<a id="opIddeletePet"></a>

> Code samples

```bash
curl https://example.com/pets/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /pets/{id}`

deletes a single pet based on the ID supplied

<h3 id="deletepet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|ID of pet to delete|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="deletepet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|pet deleted|None|
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
  "name": "string",
  "tag": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|tag|string|false|none|none|
|id|integer(int64)|true|none|none|

<h2 id="tocS_NewPet">NewPet</h2>
<!-- backwards compatibility -->
<a id="schemanewpet"></a>
<a id="schema_NewPet"></a>
<a id="tocSnewpet"></a>
<a id="tocsnewpet"></a>

```json
{
  "name": "string",
  "tag": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|tag|string|false|none|none|

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
