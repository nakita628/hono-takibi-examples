<h1 id="catalog-inventory">Catalog Inventory v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Catalog Inventory

Base URLs:

* <a href="https://cloud.redhat.com//api/catalog-inventory/v1.0">https://cloud.redhat.com//api/catalog-inventory/v1.0</a> - Production Server

* <a href="http://localhost:3000//api/catalog-inventory/v1.0">http://localhost:3000//api/catalog-inventory/v1.0</a> - Development Server

Email: <a href="mailto:support@redhat.com">support@redhat.com</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="catalog-inventory-default">Default</h1>

## Perform a GraphQL Query

<a id="opIdpostGraphQL"></a>

> Code samples

```bash
curl https://example.com/graphql \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "operationName": "",
    "query": "{}",
    "variables": {}
  }'
```

`POST /graphql`

Performs a GraphQL Query

> Body parameter

```json
{
  "operationName": "",
  "query": "{}",
  "variables": {}
}
```

<h3 id="perform-a-graphql-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GraphQLRequest](#schemagraphqlrequest)|true|GraphQL Query Request|
|» operationName|body|string|false|If the Query contains several named operations, the operationName controls which one should be executed|
|» query|body|string|true|The GraphQL query|
|» variables|body|object \| null|false|Optional Query variables|

> Example responses

> 200 Response

```json
{
  "data": {},
  "errors": [
    {}
  ]
}
```

<h3 id="perform-a-graphql-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|GraphQL Query Response|[GraphQLResponse](#schemagraphqlresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## Return this API document in JSON format

<a id="opIdgetDocumentation"></a>

> Code samples

```bash
curl https://example.com/openapi.json \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /openapi.json`

> Example responses

> 200 Response

```json
{}
```

<h3 id="return-this-api-document-in-json-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The API document for this version of the API|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

<h1 id="catalog-inventory-servicecredentialtype">ServiceCredentialType</h1>

## List ServiceCredentialTypes

<a id="opIdlistServiceCredentialTypes"></a>

> Code samples

```bash
curl https://example.com/service_credential_types \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /service_credential_types`

Returns an array of ServiceCredentialType objects

<h3 id="list-servicecredentialtypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return per page.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|filter|query|object|false|Filter for querying collections.|
|sort_by|query|object|false|The list of attribute and order to sort the result set by.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "kind": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "name": "string",
      "namespace": "string",
      "refresh_state_part_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_deleted_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "string",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

<h3 id="list-servicecredentialtypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServiceCredentialTypes collection|[ServiceCredentialTypesCollection](#schemaservicecredentialtypescollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## Show an existing ServiceCredentialType

<a id="opIdshowServiceCredentialType"></a>

> Code samples

```bash
curl https://example.com/service_credential_types/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /service_credential_types/{id}`

Returns a ServiceCredentialType object

<h3 id="show-an-existing-servicecredentialtype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "kind": "string",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "name": "string",
  "namespace": "string",
  "refresh_state_part_id": "string",
  "source_created_at": "1970-01-01T00:00:00Z",
  "source_deleted_at": "1970-01-01T00:00:00Z",
  "source_id": "string",
  "source_ref": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": "Record not found",
      "status": "404"
    }
  ]
}
```

<h3 id="show-an-existing-servicecredentialtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServiceCredentialType info|[ServiceCredentialType](#schemaservicecredentialtype)|
|404|Not Found|Not found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

<h1 id="catalog-inventory-servicecredential">ServiceCredential</h1>

## List ServiceCredentials

<a id="opIdlistServiceCredentials"></a>

> Code samples

```bash
curl https://example.com/service_credentials \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /service_credentials`

Returns an array of ServiceCredential objects

<h3 id="list-servicecredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return per page.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|filter|query|object|false|Filter for querying collections.|
|sort_by|query|object|false|The list of attribute and order to sort the result set by.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "name": "string",
      "refresh_state_part_id": "string",
      "service_credential_type_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "string",
      "source_updated_at": "1970-01-01T00:00:00Z",
      "type_name": "string",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

<h3 id="list-servicecredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServiceCredentials collection|[ServiceCredentialsCollection](#schemaservicecredentialscollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## Show an existing ServiceCredential

<a id="opIdshowServiceCredential"></a>

> Code samples

```bash
curl https://example.com/service_credentials/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /service_credentials/{id}`

Returns a ServiceCredential object

<h3 id="show-an-existing-servicecredential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "name": "string",
  "refresh_state_part_id": "string",
  "service_credential_type_id": "string",
  "source_created_at": "1970-01-01T00:00:00Z",
  "source_id": "string",
  "source_ref": "string",
  "source_updated_at": "1970-01-01T00:00:00Z",
  "type_name": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": "Record not found",
      "status": "404"
    }
  ]
}
```

<h3 id="show-an-existing-servicecredential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServiceCredential info|[ServiceCredential](#schemaservicecredential)|
|404|Not Found|Not found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

<h1 id="catalog-inventory-serviceinstance">ServiceInstance</h1>

## List ServiceInstances

<a id="opIdlistServiceInstances"></a>

> Code samples

```bash
curl https://example.com/service_instances \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /service_instances`

Returns an array of ServiceInstance objects

<h3 id="list-serviceinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return per page.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|filter|query|object|false|Filter for querying collections.|
|sort_by|query|object|false|The list of attribute and order to sort the result set by.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "external_url": "string",
      "extra": {},
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "name": "Sample ServiceInstance",
      "refresh_state_part_id": "string",
      "root_service_instance_id": "string",
      "service_inventory_id": "string",
      "service_offering_id": "string",
      "service_plan_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_deleted_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

<h3 id="list-serviceinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServiceInstances collection|[ServiceInstancesCollection](#schemaserviceinstancescollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## Show an existing ServiceInstance

<a id="opIdshowServiceInstance"></a>

> Code samples

```bash
curl https://example.com/service_instances/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /service_instances/{id}`

Returns a ServiceInstance object

<h3 id="show-an-existing-serviceinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "external_url": "string",
  "extra": {},
  "id": "string",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "name": "Sample ServiceInstance",
  "refresh_state_part_id": "string",
  "root_service_instance_id": "string",
  "service_inventory_id": "string",
  "service_offering_id": "string",
  "service_plan_id": "string",
  "source_created_at": "1970-01-01T00:00:00Z",
  "source_deleted_at": "1970-01-01T00:00:00Z",
  "source_id": "string",
  "source_ref": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": "Record not found",
      "status": "404"
    }
  ]
}
```

<h3 id="show-an-existing-serviceinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServiceInstance info|[ServiceInstance](#schemaserviceinstance)|
|404|Not Found|Not found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

<h1 id="catalog-inventory-serviceinventory">ServiceInventory</h1>

## List ServiceInventories

<a id="opIdlistServiceInventories"></a>

> Code samples

```bash
curl https://example.com/service_inventories \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /service_inventories`

Returns an array of ServiceInventory objects

<h3 id="list-serviceinventories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return per page.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|filter|query|object|false|Filter for querying collections.|
|sort_by|query|object|false|The list of attribute and order to sort the result set by.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "extra": {},
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "name": "string",
      "refresh_state_part_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "string",
      "source_updated_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

<h3 id="list-serviceinventories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServiceInventories collection|[ServiceInventoriesCollection](#schemaserviceinventoriescollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## Show an existing ServiceInventory

<a id="opIdshowServiceInventory"></a>

> Code samples

```bash
curl https://example.com/service_inventories/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /service_inventories/{id}`

Returns a ServiceInventory object

<h3 id="show-an-existing-serviceinventory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "description": "string",
  "extra": {},
  "id": "string",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "name": "string",
  "refresh_state_part_id": "string",
  "source_created_at": "1970-01-01T00:00:00Z",
  "source_id": "string",
  "source_ref": "string",
  "source_updated_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": "Record not found",
      "status": "404"
    }
  ]
}
```

<h3 id="show-an-existing-serviceinventory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServiceInventory info|[ServiceInventory](#schemaserviceinventory)|
|404|Not Found|Not found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## Tag a ServiceInventory

<a id="opIdtagServiceInventory"></a>

> Code samples

```bash
curl https://example.com/service_inventories/string/tag \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "tag": "/namespace/architecture=x86_64"
    }
  ]'
```

`POST /service_inventories/{id}/tag`

Tags a ServiceInventory object

> Body parameter

```json
[
  {
    "tag": "/namespace/architecture=x86_64"
  }
]
```

<h3 id="tag-a-serviceinventory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the resource|
|body|body|[[Tag](#schematag)]|true|Tag attributes to add|

> Example responses

> 201 Response

```json
[
  {
    "tag": "/namespace/architecture=x86_64"
  }
]
```

<h3 id="tag-a-serviceinventory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|ServiceInventory tagged successful|Inline|
|304|Not Modified|Not modified|None|

<h3 id="tag-a-serviceinventory-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tag](#schematag)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## List Tags for ServiceInventory

<a id="opIdlistServiceInventoryTags"></a>

> Code samples

```bash
curl https://example.com/service_inventories/string/tags \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /service_inventories/{id}/tags`

Returns an array of Tag objects

<h3 id="list-tags-for-serviceinventory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return per page.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|filter|query|object|false|Filter for querying collections.|
|sort_by|query|object|false|The list of attribute and order to sort the result set by.|
|id|path|string|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "tag": "/namespace/architecture=x86_64"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": "Record not found",
      "status": "404"
    }
  ]
}
```

<h3 id="list-tags-for-serviceinventory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tags collection|[TagsCollection](#schematagscollection)|
|404|Not Found|Not found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## Untag a ServiceInventory

<a id="opIduntagServiceInventory"></a>

> Code samples

```bash
curl https://example.com/service_inventories/string/untag \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "tag": "/namespace/architecture=x86_64"
    }
  ]'
```

`POST /service_inventories/{id}/untag`

Untags a ServiceInventory object

> Body parameter

```json
[
  {
    "tag": "/namespace/architecture=x86_64"
  }
]
```

<h3 id="untag-a-serviceinventory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the resource|
|body|body|[[Tag](#schematag)]|true|Tag attributes to removed|

<h3 id="untag-a-serviceinventory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|ServiceInventory untagged successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

<h1 id="catalog-inventory-serviceofferingnode">ServiceOfferingNode</h1>

## List ServiceOfferingNodes

<a id="opIdlistServiceOfferingNodes"></a>

> Code samples

```bash
curl https://example.com/service_offering_nodes \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /service_offering_nodes`

Returns an array of ServiceOfferingNode objects

<h3 id="list-serviceofferingnodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return per page.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|filter|query|object|false|Filter for querying collections.|
|sort_by|query|object|false|The list of attribute and order to sort the result set by.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "extra": {},
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "name": "string",
      "refresh_state_part_id": "string",
      "root_service_offering_id": "string",
      "service_inventory_id": "string",
      "service_offering_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "string",
      "source_updated_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

<h3 id="list-serviceofferingnodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServiceOfferingNodes collection|[ServiceOfferingNodesCollection](#schemaserviceofferingnodescollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## Show an existing ServiceOfferingNode

<a id="opIdshowServiceOfferingNode"></a>

> Code samples

```bash
curl https://example.com/service_offering_nodes/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /service_offering_nodes/{id}`

Returns a ServiceOfferingNode object

<h3 id="show-an-existing-serviceofferingnode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "extra": {},
  "id": "string",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "name": "string",
  "refresh_state_part_id": "string",
  "root_service_offering_id": "string",
  "service_inventory_id": "string",
  "service_offering_id": "string",
  "source_created_at": "1970-01-01T00:00:00Z",
  "source_id": "string",
  "source_ref": "string",
  "source_updated_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": "Record not found",
      "status": "404"
    }
  ]
}
```

<h3 id="show-an-existing-serviceofferingnode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServiceOfferingNode info|[ServiceOfferingNode](#schemaserviceofferingnode)|
|404|Not Found|Not found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

<h1 id="catalog-inventory-serviceoffering">ServiceOffering</h1>

## List ServiceOfferings

<a id="opIdlistServiceOfferings"></a>

> Code samples

```bash
curl https://example.com/service_offerings \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /service_offerings`

Returns an array of ServiceOffering objects

<h3 id="list-serviceofferings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return per page.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|filter|query|object|false|Filter for querying collections.|
|sort_by|query|object|false|The list of attribute and order to sort the result set by.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "description": "This is a short description",
      "display_name": "MariaDB (Ephemeral)",
      "distributor": "Red Hat, Inc.",
      "documentation_url": "https://github.com/sclorg/mariadb-container/blob/master/10.2/root/usr/share/container-scripts/mysql/README.md",
      "extra": {},
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "long_description": "This template provides a standalone MariaDB server with a database created...",
      "name": "Sample Service Offering",
      "refresh_state_part_id": "string",
      "service_inventory_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_deleted_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "object-12345_67890",
      "support_url": "https://access.redhat.com",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

<h3 id="list-serviceofferings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServiceOfferings collection|[ServiceOfferingsCollection](#schemaserviceofferingscollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## Show an existing ServiceOffering

<a id="opIdshowServiceOffering"></a>

> Code samples

```bash
curl https://example.com/service_offerings/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /service_offerings/{id}`

Returns a ServiceOffering object

<h3 id="show-an-existing-serviceoffering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "description": "This is a short description",
  "display_name": "MariaDB (Ephemeral)",
  "distributor": "Red Hat, Inc.",
  "documentation_url": "https://github.com/sclorg/mariadb-container/blob/master/10.2/root/usr/share/container-scripts/mysql/README.md",
  "extra": {},
  "id": "string",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "long_description": "This template provides a standalone MariaDB server with a database created...",
  "name": "Sample Service Offering",
  "refresh_state_part_id": "string",
  "service_inventory_id": "string",
  "source_created_at": "1970-01-01T00:00:00Z",
  "source_deleted_at": "1970-01-01T00:00:00Z",
  "source_id": "string",
  "source_ref": "object-12345_67890",
  "support_url": "https://access.redhat.com",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": "Record not found",
      "status": "404"
    }
  ]
}
```

<h3 id="show-an-existing-serviceoffering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServiceOffering info|[ServiceOffering](#schemaserviceoffering)|
|404|Not Found|Not found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## Invokes computing of ServiceInventories tags for given ServiceOffering

<a id="opIdappliedInventoriesTagsForServiceOffering"></a>

> Code samples

```bash
curl https://example.com/service_offerings/string/applied_inventories_tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "service_parameters": {}
  }'
```

`POST /service_offerings/{id}/applied_inventories_tags`

Returns an array of inventories tags

> Body parameter

```json
{
  "service_parameters": {}
}
```

<h3 id="invokes-computing-of-serviceinventories-tags-for-given-serviceoffering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the resource|
|body|body|[AppliedInventoriesParametersServicePlan](#schemaappliedinventoriesparametersserviceplan)|true|Parameters defining input data for computing inventories|
|» service_parameters|body|object|false|The provider specific parameters needed to compute list of used service inventories|

> Example responses

> 200 Response

```json
[
  {
    "tag": "/namespace/architecture=x86_64"
  }
]
```

<h3 id="invokes-computing-of-serviceinventories-tags-for-given-serviceoffering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns an array of inventories tags for the computing result|Inline|
|400|Bad Request|BadRequest|None|

<h3 id="invokes-computing-of-serviceinventories-tags-for-given-serviceoffering-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tag](#schematag)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## Order an existing ServiceOffering

<a id="opIdorderServiceOffering"></a>

> Code samples

```bash
curl https://example.com/service_offerings/string/order \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "provider_control_parameters": {},
    "service_parameters": {}
  }'
```

`POST /service_offerings/{id}/order`

Returns a Task id

> Body parameter

```json
{
  "provider_control_parameters": {},
  "service_parameters": {}
}
```

<h3 id="order-an-existing-serviceoffering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the resource|
|body|body|[OrderParametersServiceOffering](#schemaorderparametersserviceoffering)|true|Order parameters defining the service and provider control|
|» provider_control_parameters|body|object|false|The provider specific parameters needed to provision this service. This might include namespaces, special keys|
|» service_parameters|body|object|false|JSON object with provisioning parameters|

> Example responses

> 200 Response

```json
{
  "task_id": "string"
}
```

<h3 id="order-an-existing-serviceoffering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a task ID for the order|Inline|
|400|Bad Request|BadRequest|None|

<h3 id="order-an-existing-serviceoffering-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## List ServiceInstances for ServiceOffering

<a id="opIdlistServiceOfferingServiceInstances"></a>

> Code samples

```bash
curl https://example.com/service_offerings/string/service_instances \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /service_offerings/{id}/service_instances`

Returns an array of ServiceInstance objects

<h3 id="list-serviceinstances-for-serviceoffering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return per page.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|filter|query|object|false|Filter for querying collections.|
|sort_by|query|object|false|The list of attribute and order to sort the result set by.|
|id|path|string|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "external_url": "string",
      "extra": {},
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "name": "Sample ServiceInstance",
      "refresh_state_part_id": "string",
      "root_service_instance_id": "string",
      "service_inventory_id": "string",
      "service_offering_id": "string",
      "service_plan_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_deleted_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": "Record not found",
      "status": "404"
    }
  ]
}
```

<h3 id="list-serviceinstances-for-serviceoffering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServiceInstances collection|[ServiceInstancesCollection](#schemaserviceinstancescollection)|
|404|Not Found|Not found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## List ServiceOfferingNodes for ServiceOffering

<a id="opIdlistServiceOfferingServiceOfferingNodes"></a>

> Code samples

```bash
curl https://example.com/service_offerings/string/service_offering_nodes \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /service_offerings/{id}/service_offering_nodes`

Returns an array of ServiceOfferingNode objects

<h3 id="list-serviceofferingnodes-for-serviceoffering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return per page.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|filter|query|object|false|Filter for querying collections.|
|sort_by|query|object|false|The list of attribute and order to sort the result set by.|
|id|path|string|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "extra": {},
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "name": "string",
      "refresh_state_part_id": "string",
      "root_service_offering_id": "string",
      "service_inventory_id": "string",
      "service_offering_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "string",
      "source_updated_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": "Record not found",
      "status": "404"
    }
  ]
}
```

<h3 id="list-serviceofferingnodes-for-serviceoffering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServiceOfferingNodes collection|[ServiceOfferingNodesCollection](#schemaserviceofferingnodescollection)|
|404|Not Found|Not found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## List ServicePlans for ServiceOffering

<a id="opIdlistServiceOfferingServicePlans"></a>

> Code samples

```bash
curl https://example.com/service_offerings/string/service_plans \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /service_offerings/{id}/service_plans`

Returns an array of ServicePlan objects

<h3 id="list-serviceplans-for-serviceoffering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return per page.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|filter|query|object|false|Filter for querying collections.|
|sort_by|query|object|false|The list of attribute and order to sort the result set by.|
|id|path|string|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "create_json_schema": {},
      "created_at": "1970-01-01T00:00:00Z",
      "description": "This is a sample description for a provider",
      "extra": {},
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "name": "Sample Provider",
      "refresh_state_part_id": "string",
      "resource_version": "string",
      "service_offering_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_deleted_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "update_json_schema": "string",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": "Record not found",
      "status": "404"
    }
  ]
}
```

<h3 id="list-serviceplans-for-serviceoffering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServicePlans collection|[ServicePlansCollection](#schemaserviceplanscollection)|
|404|Not Found|Not found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

<h1 id="catalog-inventory-serviceplan">ServicePlan</h1>

## List ServicePlans

<a id="opIdlistServicePlans"></a>

> Code samples

```bash
curl https://example.com/service_plans \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /service_plans`

Returns an array of ServicePlan objects

<h3 id="list-serviceplans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return per page.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|filter|query|object|false|Filter for querying collections.|
|sort_by|query|object|false|The list of attribute and order to sort the result set by.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "create_json_schema": {},
      "created_at": "1970-01-01T00:00:00Z",
      "description": "This is a sample description for a provider",
      "extra": {},
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "name": "Sample Provider",
      "refresh_state_part_id": "string",
      "resource_version": "string",
      "service_offering_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_deleted_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "update_json_schema": "string",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

<h3 id="list-serviceplans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServicePlans collection|[ServicePlansCollection](#schemaserviceplanscollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## Show an existing ServicePlan

<a id="opIdshowServicePlan"></a>

> Code samples

```bash
curl https://example.com/service_plans/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /service_plans/{id}`

Returns a ServicePlan object

<h3 id="show-an-existing-serviceplan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "create_json_schema": {},
  "created_at": "1970-01-01T00:00:00Z",
  "description": "This is a sample description for a provider",
  "extra": {},
  "id": "string",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "name": "Sample Provider",
  "refresh_state_part_id": "string",
  "resource_version": "string",
  "service_offering_id": "string",
  "source_created_at": "1970-01-01T00:00:00Z",
  "source_deleted_at": "1970-01-01T00:00:00Z",
  "source_id": "string",
  "source_ref": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "update_json_schema": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": "Record not found",
      "status": "404"
    }
  ]
}
```

<h3 id="show-an-existing-serviceplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServicePlan info|[ServicePlan](#schemaserviceplan)|
|404|Not Found|Not found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

<h1 id="catalog-inventory-source">Source</h1>

## List Sources

<a id="opIdlistSources"></a>

> Code samples

```bash
curl https://example.com/sources \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /sources`

Returns an array of Source objects

<h3 id="list-sources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return per page.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|filter|query|object|false|Filter for querying collections.|
|sort_by|query|object|false|The list of attribute and order to sort the result set by.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "availability_message": "string",
      "availability_status": "The availability status of source",
      "cloud_connector_id": "The GUID of the RedHat connect client being used",
      "created_at": "1970-01-01T00:00:00Z",
      "enabled": false,
      "id": "string",
      "info": "The version of Tower being used",
      "last_available_at": "1970-01-01T00:00:00Z",
      "last_checked_at": "1970-01-01T00:00:00Z",
      "last_refresh_message": "string",
      "last_successful_refresh_at": "1970-01-01T00:00:00Z",
      "name": "The Source Name",
      "previous_sha": "string",
      "previous_size": 0,
      "refresh_finished_at": "1970-01-01T00:00:00Z",
      "refresh_started_at": "1970-01-01T00:00:00Z",
      "refresh_state": "string",
      "refresh_task_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "uid": "string",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

<h3 id="list-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sources collection|[SourcesCollection](#schemasourcescollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## Show an existing Source

<a id="opIdshowSource"></a>

> Code samples

```bash
curl https://example.com/sources/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /sources/{id}`

Returns a Source object

<h3 id="show-an-existing-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "availability_message": "string",
  "availability_status": "The availability status of source",
  "cloud_connector_id": "The GUID of the RedHat connect client being used",
  "created_at": "1970-01-01T00:00:00Z",
  "enabled": false,
  "id": "string",
  "info": "The version of Tower being used",
  "last_available_at": "1970-01-01T00:00:00Z",
  "last_checked_at": "1970-01-01T00:00:00Z",
  "last_refresh_message": "string",
  "last_successful_refresh_at": "1970-01-01T00:00:00Z",
  "name": "The Source Name",
  "previous_sha": "string",
  "previous_size": 0,
  "refresh_finished_at": "1970-01-01T00:00:00Z",
  "refresh_started_at": "1970-01-01T00:00:00Z",
  "refresh_state": "string",
  "refresh_task_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "uid": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": "Record not found",
      "status": "404"
    }
  ]
}
```

<h3 id="show-an-existing-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Source info|[Source](#schemasource)|
|404|Not Found|Not found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## Incremental Refresh an existing Source

<a id="opIdincrementalRefreshSource"></a>

> Code samples

```bash
curl https://example.com/sources/string/incremental_refresh \
  -X PATCH \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PATCH /sources/{id}/incremental_refresh`

Incremental Refresh a source object

<h3 id="incremental-refresh-an-existing-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the resource|

<h3 id="incremental-refresh-an-existing-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Updated, no content|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|
|429|Too Many Requests|Too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## Refresh an existing Source

<a id="opIdrefreshSource"></a>

> Code samples

```bash
curl https://example.com/sources/string/refresh \
  -X PATCH \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PATCH /sources/{id}/refresh`

Refresh a source object

<h3 id="refresh-an-existing-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the resource|

<h3 id="refresh-an-existing-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Updated, no content|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|
|429|Too Many Requests|Too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## List ServiceInstances for Source

<a id="opIdlistSourceServiceInstances"></a>

> Code samples

```bash
curl https://example.com/sources/string/service_instances \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /sources/{id}/service_instances`

Returns an array of ServiceInstance objects

<h3 id="list-serviceinstances-for-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return per page.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|filter|query|object|false|Filter for querying collections.|
|sort_by|query|object|false|The list of attribute and order to sort the result set by.|
|id|path|string|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "external_url": "string",
      "extra": {},
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "name": "Sample ServiceInstance",
      "refresh_state_part_id": "string",
      "root_service_instance_id": "string",
      "service_inventory_id": "string",
      "service_offering_id": "string",
      "service_plan_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_deleted_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": "Record not found",
      "status": "404"
    }
  ]
}
```

<h3 id="list-serviceinstances-for-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServiceInstances collection|[ServiceInstancesCollection](#schemaserviceinstancescollection)|
|404|Not Found|Not found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## List ServiceInventories for Source

<a id="opIdlistSourceServiceInventories"></a>

> Code samples

```bash
curl https://example.com/sources/string/service_inventories \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /sources/{id}/service_inventories`

Returns an array of ServiceInventory objects

<h3 id="list-serviceinventories-for-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return per page.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|filter|query|object|false|Filter for querying collections.|
|sort_by|query|object|false|The list of attribute and order to sort the result set by.|
|id|path|string|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "extra": {},
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "name": "string",
      "refresh_state_part_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "string",
      "source_updated_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": "Record not found",
      "status": "404"
    }
  ]
}
```

<h3 id="list-serviceinventories-for-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServiceInventories collection|[ServiceInventoriesCollection](#schemaserviceinventoriescollection)|
|404|Not Found|Not found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## List ServiceOfferingNodes for Source

<a id="opIdlistSourceServiceOfferingNodes"></a>

> Code samples

```bash
curl https://example.com/sources/string/service_offering_nodes \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /sources/{id}/service_offering_nodes`

Returns an array of ServiceOfferingNode objects

<h3 id="list-serviceofferingnodes-for-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return per page.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|filter|query|object|false|Filter for querying collections.|
|sort_by|query|object|false|The list of attribute and order to sort the result set by.|
|id|path|string|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "extra": {},
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "name": "string",
      "refresh_state_part_id": "string",
      "root_service_offering_id": "string",
      "service_inventory_id": "string",
      "service_offering_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "string",
      "source_updated_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": "Record not found",
      "status": "404"
    }
  ]
}
```

<h3 id="list-serviceofferingnodes-for-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServiceOfferingNodes collection|[ServiceOfferingNodesCollection](#schemaserviceofferingnodescollection)|
|404|Not Found|Not found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## List ServiceOfferings for Source

<a id="opIdlistSourceServiceOfferings"></a>

> Code samples

```bash
curl https://example.com/sources/string/service_offerings \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /sources/{id}/service_offerings`

Returns an array of ServiceOffering objects

<h3 id="list-serviceofferings-for-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return per page.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|filter|query|object|false|Filter for querying collections.|
|sort_by|query|object|false|The list of attribute and order to sort the result set by.|
|id|path|string|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "description": "This is a short description",
      "display_name": "MariaDB (Ephemeral)",
      "distributor": "Red Hat, Inc.",
      "documentation_url": "https://github.com/sclorg/mariadb-container/blob/master/10.2/root/usr/share/container-scripts/mysql/README.md",
      "extra": {},
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "long_description": "This template provides a standalone MariaDB server with a database created...",
      "name": "Sample Service Offering",
      "refresh_state_part_id": "string",
      "service_inventory_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_deleted_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "object-12345_67890",
      "support_url": "https://access.redhat.com",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": "Record not found",
      "status": "404"
    }
  ]
}
```

<h3 id="list-serviceofferings-for-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServiceOfferings collection|[ServiceOfferingsCollection](#schemaserviceofferingscollection)|
|404|Not Found|Not found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## List ServicePlans for Source

<a id="opIdlistSourceServicePlans"></a>

> Code samples

```bash
curl https://example.com/sources/string/service_plans \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /sources/{id}/service_plans`

Returns an array of ServicePlan objects

<h3 id="list-serviceplans-for-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return per page.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|filter|query|object|false|Filter for querying collections.|
|sort_by|query|object|false|The list of attribute and order to sort the result set by.|
|id|path|string|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "create_json_schema": {},
      "created_at": "1970-01-01T00:00:00Z",
      "description": "This is a sample description for a provider",
      "extra": {},
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "name": "Sample Provider",
      "refresh_state_part_id": "string",
      "resource_version": "string",
      "service_offering_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_deleted_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "update_json_schema": "string",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": "Record not found",
      "status": "404"
    }
  ]
}
```

<h3 id="list-serviceplans-for-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ServicePlans collection|[ServicePlansCollection](#schemaserviceplanscollection)|
|404|Not Found|Not found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## List Tasks for Source

<a id="opIdlistSourceTasks"></a>

> Code samples

```bash
curl https://example.com/sources/string/tasks \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /sources/{id}/tasks`

Returns an array of Task objects

<h3 id="list-tasks-for-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return per page.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|filter|query|object|false|Filter for querying collections.|
|sort_by|query|object|false|The list of attribute and order to sort the result set by.|
|id|path|string|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "child_task_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "completed_at": "1970-01-01T00:00:00Z",
      "controller_message_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "input": "Task payload input content",
      "message": "received message starting inventory collection",
      "name": "Order Service Plan",
      "output": "Result of Task Execution",
      "owner": "jdoe",
      "source_id": "string",
      "state": "running",
      "status": "error",
      "target_source_ref": "string",
      "target_type": "string",
      "type": "CloudConnectorTask",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": "Record not found",
      "status": "404"
    }
  ]
}
```

<h3 id="list-tasks-for-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tasks collection|[TasksCollection](#schemataskscollection)|
|404|Not Found|Not found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

<h1 id="catalog-inventory-tags">Tags</h1>

## List Tags

<a id="opIdlistTags"></a>

> Code samples

```bash
curl https://example.com/tags \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /tags`

Returns an array of Tag objects

<h3 id="list-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return per page.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|filter|query|object|false|Filter for querying collections.|
|sort_by|query|object|false|The list of attribute and order to sort the result set by.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "tag": "/namespace/architecture=x86_64"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

<h3 id="list-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tags collection|[TagsCollection](#schematagscollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

<h1 id="catalog-inventory-task">Task</h1>

## List Tasks

<a id="opIdlistTasks"></a>

> Code samples

```bash
curl https://example.com/tasks \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /tasks`

Returns an array of Task objects

<h3 id="list-tasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return per page.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|filter|query|object|false|Filter for querying collections.|
|sort_by|query|object|false|The list of attribute and order to sort the result set by.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "child_task_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "completed_at": "1970-01-01T00:00:00Z",
      "controller_message_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "input": "Task payload input content",
      "message": "received message starting inventory collection",
      "name": "Order Service Plan",
      "output": "Result of Task Execution",
      "owner": "jdoe",
      "source_id": "string",
      "state": "running",
      "status": "error",
      "target_source_ref": "string",
      "target_type": "string",
      "type": "CloudConnectorTask",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

<h3 id="list-tasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tasks collection|[TasksCollection](#schemataskscollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## Show an existing Task

<a id="opIdshowTask"></a>

> Code samples

```bash
curl https://example.com/tasks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /tasks/{id}`

Returns a Task object

<h3 id="show-an-existing-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|UUID of task|

> Example responses

> 200 Response

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "child_task_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "completed_at": "1970-01-01T00:00:00Z",
  "controller_message_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "input": "Task payload input content",
  "message": "received message starting inventory collection",
  "name": "Order Service Plan",
  "output": "Result of Task Execution",
  "owner": "jdoe",
  "source_id": "string",
  "state": "running",
  "status": "error",
  "target_source_ref": "string",
  "target_type": "string",
  "type": "CloudConnectorTask",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": "Record not found",
      "status": "404"
    }
  ]
}
```

<h3 id="show-an-existing-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task info|[Task](#schematask)|
|404|Not Found|Not found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

## Update an existing Task

<a id="opIdupdateTask"></a>

> Code samples

```bash
curl https://example.com/tasks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "completed_at": "1970-01-01T00:00:00Z",
    "message": "received message starting inventory collection",
    "name": "Order Service Plan",
    "output": "Result of Task Execution",
    "state": "running",
    "status": "error",
    "target_source_ref": "string",
    "target_type": "string",
    "type": "CloudConnectorTask"
  }'
```

`PATCH /tasks/{id}`

Updates a Task object

> Body parameter

```json
{
  "completed_at": "1970-01-01T00:00:00Z",
  "message": "received message starting inventory collection",
  "name": "Order Service Plan",
  "output": "Result of Task Execution",
  "state": "running",
  "status": "error",
  "target_source_ref": "string",
  "target_type": "string",
  "type": "CloudConnectorTask"
}
```

<h3 id="update-an-existing-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|UUID of task|
|body|body|[Task](#schematask)|true|Task attributes to update|
|» completed_at|body|string(date-time)|false|none|
|» message|body|string|false|none|
|» name|body|string|false|none|
|» output|body|object|false|none|
|» state|body|string|false|none|
|» status|body|string|false|none|
|» target_source_ref|body|string|false|none|
|» target_type|body|string|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» state|pending|
|» state|queued|
|» state|running|
|» state|timedout|
|» state|completed|
|» status|ok|
|» status|warn|
|» status|unchanged|
|» status|error|

> Example responses

> 404 Response

```json
{
  "errors": [
    {
      "detail": "Record not found",
      "status": "404"
    }
  ]
}
```

<h3 id="update-an-existing-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Updated, no content|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserSecurity
</aside>

# Schemas

<h2 id="tocS_AppliedInventoriesParametersServicePlan">AppliedInventoriesParametersServicePlan</h2>
<!-- backwards compatibility -->
<a id="schemaappliedinventoriesparametersserviceplan"></a>
<a id="schema_AppliedInventoriesParametersServicePlan"></a>
<a id="tocSappliedinventoriesparametersserviceplan"></a>
<a id="tocsappliedinventoriesparametersserviceplan"></a>

```json
{
  "service_parameters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service_parameters|object|false|none|The provider specific parameters needed to compute list of used service inventories|

<h2 id="tocS_CheckAvailabilityTask">CheckAvailabilityTask</h2>
<!-- backwards compatibility -->
<a id="schemacheckavailabilitytask"></a>
<a id="schema_CheckAvailabilityTask"></a>
<a id="tocScheckavailabilitytask"></a>
<a id="tocscheckavailabilitytask"></a>

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "child_task_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "completed_at": "1970-01-01T00:00:00Z",
  "controller_message_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "input": "Task payload input content",
  "message": "received message starting inventory collection",
  "name": "Order Service Plan",
  "output": "Result of Task Execution",
  "owner": "jdoe",
  "source_id": "string",
  "state": "running",
  "status": "error",
  "target_source_ref": "string",
  "target_type": "string",
  "type": "CloudConnectorTask",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time)|false|read-only|none|
|child_task_id|string(uuid)|false|read-only|none|
|completed_at|string(date-time)|false|none|none|
|controller_message_id|string(uuid)|false|read-only|none|
|created_at|string(date-time)|false|read-only|none|
|id|[UUID](#schemauuid)|false|read-only|UUID of task|
|input|object|false|read-only|none|
|message|string|false|none|none|
|name|string|false|none|none|
|output|object|false|none|none|
|owner|string|false|read-only|none|
|source_id|[ID](#schemaid)|false|read-only|ID of the resource|
|state|string|false|none|none|
|status|string|false|none|none|
|target_source_ref|string|false|none|none|
|target_type|string|false|none|none|
|type|string|false|none|none|
|updated_at|string(date-time)|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|pending|
|state|queued|
|state|running|
|state|timedout|
|state|completed|
|status|ok|
|status|warn|
|status|unchanged|
|status|error|

<h2 id="tocS_CollectionLinks">CollectionLinks</h2>
<!-- backwards compatibility -->
<a id="schemacollectionlinks"></a>
<a id="schema_CollectionLinks"></a>
<a id="tocScollectionlinks"></a>
<a id="tocscollectionlinks"></a>

```json
{
  "first": "string",
  "last": "string",
  "next": "string",
  "prev": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first|string|false|none|none|
|last|string|false|none|none|
|next|string|false|none|none|
|prev|string|false|none|none|

<h2 id="tocS_CollectionMetadata">CollectionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacollectionmetadata"></a>
<a id="schema_CollectionMetadata"></a>
<a id="tocScollectionmetadata"></a>
<a id="tocscollectionmetadata"></a>

```json
{
  "count": 0,
  "limit": 0,
  "offset": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|limit|integer|false|none|none|
|offset|integer|false|none|none|

<h2 id="tocS_ErrorNotFound">ErrorNotFound</h2>
<!-- backwards compatibility -->
<a id="schemaerrornotfound"></a>
<a id="schema_ErrorNotFound"></a>
<a id="tocSerrornotfound"></a>
<a id="tocserrornotfound"></a>

```json
{
  "errors": [
    {
      "detail": "Record not found",
      "status": "404"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|false|none|none|

<h2 id="tocS_FullRefreshPersisterTask">FullRefreshPersisterTask</h2>
<!-- backwards compatibility -->
<a id="schemafullrefreshpersistertask"></a>
<a id="schema_FullRefreshPersisterTask"></a>
<a id="tocSfullrefreshpersistertask"></a>
<a id="tocsfullrefreshpersistertask"></a>

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "child_task_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "completed_at": "1970-01-01T00:00:00Z",
  "controller_message_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "input": "Task payload input content",
  "message": "received message starting inventory collection",
  "name": "Order Service Plan",
  "output": "Result of Task Execution",
  "owner": "jdoe",
  "source_id": "string",
  "state": "running",
  "status": "error",
  "target_source_ref": "string",
  "target_type": "string",
  "type": "CloudConnectorTask",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time)|false|read-only|none|
|child_task_id|string(uuid)|false|read-only|none|
|completed_at|string(date-time)|false|none|none|
|controller_message_id|string(uuid)|false|read-only|none|
|created_at|string(date-time)|false|read-only|none|
|id|[UUID](#schemauuid)|false|read-only|UUID of task|
|input|object|false|read-only|none|
|message|string|false|none|none|
|name|string|false|none|none|
|output|object|false|none|none|
|owner|string|false|read-only|none|
|source_id|[ID](#schemaid)|false|read-only|ID of the resource|
|state|string|false|none|none|
|status|string|false|none|none|
|target_source_ref|string|false|none|none|
|target_type|string|false|none|none|
|type|string|false|none|none|
|updated_at|string(date-time)|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|pending|
|state|queued|
|state|running|
|state|timedout|
|state|completed|
|status|ok|
|status|warn|
|status|unchanged|
|status|error|

<h2 id="tocS_FullRefreshUploadTask">FullRefreshUploadTask</h2>
<!-- backwards compatibility -->
<a id="schemafullrefreshuploadtask"></a>
<a id="schema_FullRefreshUploadTask"></a>
<a id="tocSfullrefreshuploadtask"></a>
<a id="tocsfullrefreshuploadtask"></a>

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "child_task_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "completed_at": "1970-01-01T00:00:00Z",
  "controller_message_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "input": "Task payload input content",
  "message": "received message starting inventory collection",
  "name": "Order Service Plan",
  "output": "Result of Task Execution",
  "owner": "jdoe",
  "source_id": "string",
  "state": "running",
  "status": "error",
  "target_source_ref": "string",
  "target_type": "string",
  "type": "CloudConnectorTask",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time)|false|read-only|none|
|child_task_id|string(uuid)|false|read-only|none|
|completed_at|string(date-time)|false|none|none|
|controller_message_id|string(uuid)|false|read-only|none|
|created_at|string(date-time)|false|read-only|none|
|id|[UUID](#schemauuid)|false|read-only|UUID of task|
|input|object|false|read-only|none|
|message|string|false|none|none|
|name|string|false|none|none|
|output|object|false|none|none|
|owner|string|false|read-only|none|
|source_id|[ID](#schemaid)|false|read-only|ID of the resource|
|state|string|false|none|none|
|status|string|false|none|none|
|target_source_ref|string|false|none|none|
|target_type|string|false|none|none|
|type|string|false|none|none|
|updated_at|string(date-time)|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|pending|
|state|queued|
|state|running|
|state|timedout|
|state|completed|
|status|ok|
|status|warn|
|status|unchanged|
|status|error|

<h2 id="tocS_GraphQLRequest">GraphQLRequest</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlrequest"></a>
<a id="schema_GraphQLRequest"></a>
<a id="tocSgraphqlrequest"></a>
<a id="tocsgraphqlrequest"></a>

```json
{
  "operationName": "",
  "query": "{}",
  "variables": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operationName|string|false|none|If the Query contains several named operations, the operationName controls which one should be executed|
|query|string|true|none|The GraphQL query|
|variables|object \| null|false|none|Optional Query variables|

<h2 id="tocS_GraphQLResponse">GraphQLResponse</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlresponse"></a>
<a id="schema_GraphQLResponse"></a>
<a id="tocSgraphqlresponse"></a>
<a id="tocsgraphqlresponse"></a>

```json
{
  "data": {},
  "errors": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|Results from the GraphQL query|
|errors|[object]|false|none|Errors resulting from the GraphQL query|

<h2 id="tocS_ID">ID</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_ID"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"string"
```

ID of the resource

<h2 id="tocS_IncrementalRefreshUploadTask">IncrementalRefreshUploadTask</h2>
<!-- backwards compatibility -->
<a id="schemaincrementalrefreshuploadtask"></a>
<a id="schema_IncrementalRefreshUploadTask"></a>
<a id="tocSincrementalrefreshuploadtask"></a>
<a id="tocsincrementalrefreshuploadtask"></a>

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "child_task_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "completed_at": "1970-01-01T00:00:00Z",
  "controller_message_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "input": "Task payload input content",
  "message": "received message starting inventory collection",
  "name": "Order Service Plan",
  "output": "Result of Task Execution",
  "owner": "jdoe",
  "source_id": "string",
  "state": "running",
  "status": "error",
  "target_source_ref": "string",
  "target_type": "string",
  "type": "CloudConnectorTask",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time)|false|read-only|none|
|child_task_id|string(uuid)|false|read-only|none|
|completed_at|string(date-time)|false|none|none|
|controller_message_id|string(uuid)|false|read-only|none|
|created_at|string(date-time)|false|read-only|none|
|id|[UUID](#schemauuid)|false|read-only|UUID of task|
|input|object|false|read-only|none|
|message|string|false|none|none|
|name|string|false|none|none|
|output|object|false|none|none|
|owner|string|false|read-only|none|
|source_id|[ID](#schemaid)|false|read-only|ID of the resource|
|state|string|false|none|none|
|status|string|false|none|none|
|target_source_ref|string|false|none|none|
|target_type|string|false|none|none|
|type|string|false|none|none|
|updated_at|string(date-time)|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|pending|
|state|queued|
|state|running|
|state|timedout|
|state|completed|
|status|ok|
|status|warn|
|status|unchanged|
|status|error|

<h2 id="tocS_LaunchJobTask">LaunchJobTask</h2>
<!-- backwards compatibility -->
<a id="schemalaunchjobtask"></a>
<a id="schema_LaunchJobTask"></a>
<a id="tocSlaunchjobtask"></a>
<a id="tocslaunchjobtask"></a>

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "child_task_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "completed_at": "1970-01-01T00:00:00Z",
  "controller_message_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "input": "Task payload input content",
  "message": "received message starting inventory collection",
  "name": "Order Service Plan",
  "output": "Result of Task Execution",
  "owner": "jdoe",
  "source_id": "string",
  "state": "running",
  "status": "error",
  "target_source_ref": "string",
  "target_type": "string",
  "type": "CloudConnectorTask",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time)|false|read-only|none|
|child_task_id|string(uuid)|false|read-only|none|
|completed_at|string(date-time)|false|none|none|
|controller_message_id|string(uuid)|false|read-only|none|
|created_at|string(date-time)|false|read-only|none|
|id|[UUID](#schemauuid)|false|read-only|UUID of task|
|input|object|false|read-only|none|
|message|string|false|none|none|
|name|string|false|none|none|
|output|object|false|none|none|
|owner|string|false|read-only|none|
|source_id|[ID](#schemaid)|false|read-only|ID of the resource|
|state|string|false|none|none|
|status|string|false|none|none|
|target_source_ref|string|false|none|none|
|target_type|string|false|none|none|
|type|string|false|none|none|
|updated_at|string(date-time)|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|pending|
|state|queued|
|state|running|
|state|timedout|
|state|completed|
|status|ok|
|status|warn|
|status|unchanged|
|status|error|

<h2 id="tocS_OrderParametersServiceOffering">OrderParametersServiceOffering</h2>
<!-- backwards compatibility -->
<a id="schemaorderparametersserviceoffering"></a>
<a id="schema_OrderParametersServiceOffering"></a>
<a id="tocSorderparametersserviceoffering"></a>
<a id="tocsorderparametersserviceoffering"></a>

```json
{
  "provider_control_parameters": {},
  "service_parameters": {},
  "service_plan_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider_control_parameters|object|false|none|The provider specific parameters needed to provision this service. This might include namespaces, special keys|
|service_parameters|object|false|none|JSON object with provisioning parameters|
|service_plan_id|[ID](#schemaid)|false|read-only|ID of the resource|

<h2 id="tocS_OrderParametersServicePlan">OrderParametersServicePlan</h2>
<!-- backwards compatibility -->
<a id="schemaorderparametersserviceplan"></a>
<a id="schema_OrderParametersServicePlan"></a>
<a id="tocSorderparametersserviceplan"></a>
<a id="tocsorderparametersserviceplan"></a>

```json
{
  "provider_control_parameters": {},
  "service_parameters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider_control_parameters|object|false|none|The provider specific parameters needed to provision this service. This might include namespaces, special keys|
|service_parameters|object|false|none|JSON object with provisioning parameters|

<h2 id="tocS_ServiceCredential">ServiceCredential</h2>
<!-- backwards compatibility -->
<a id="schemaservicecredential"></a>
<a id="schema_ServiceCredential"></a>
<a id="tocSservicecredential"></a>
<a id="tocsservicecredential"></a>

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "name": "string",
  "refresh_state_part_id": "string",
  "service_credential_type_id": "string",
  "source_created_at": "1970-01-01T00:00:00Z",
  "source_id": "string",
  "source_ref": "string",
  "source_updated_at": "1970-01-01T00:00:00Z",
  "type_name": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time)|false|read-only|none|
|created_at|string(date-time)|false|read-only|none|
|description|string|false|read-only|none|
|id|[ID](#schemaid)|false|read-only|ID of the resource|
|last_seen_at|string(date-time)|false|read-only|none|
|name|string|false|read-only|none|
|refresh_state_part_id|[ID](#schemaid)|false|read-only|ID of the resource|
|service_credential_type_id|[ID](#schemaid)|false|read-only|ID of the resource|
|source_created_at|string(date-time)|false|read-only|none|
|source_id|[ID](#schemaid)|false|read-only|ID of the resource|
|source_ref|string|false|read-only|none|
|source_updated_at|string(date-time)|false|read-only|none|
|type_name|string|false|read-only|none|
|updated_at|string(date-time)|false|read-only|none|

<h2 id="tocS_ServiceCredentialType">ServiceCredentialType</h2>
<!-- backwards compatibility -->
<a id="schemaservicecredentialtype"></a>
<a id="schema_ServiceCredentialType"></a>
<a id="tocSservicecredentialtype"></a>
<a id="tocsservicecredentialtype"></a>

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "kind": "string",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "name": "string",
  "namespace": "string",
  "refresh_state_part_id": "string",
  "source_created_at": "1970-01-01T00:00:00Z",
  "source_deleted_at": "1970-01-01T00:00:00Z",
  "source_id": "string",
  "source_ref": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time)|false|read-only|none|
|created_at|string(date-time)|false|read-only|none|
|description|string|false|read-only|none|
|id|[ID](#schemaid)|false|read-only|ID of the resource|
|kind|string|false|read-only|none|
|last_seen_at|string(date-time)|false|read-only|none|
|name|string|false|read-only|none|
|namespace|string|false|read-only|none|
|refresh_state_part_id|[ID](#schemaid)|false|read-only|ID of the resource|
|source_created_at|string(date-time)|false|read-only|none|
|source_deleted_at|string(date-time)|false|read-only|none|
|source_id|[ID](#schemaid)|false|read-only|ID of the resource|
|source_ref|string|false|read-only|none|
|updated_at|string(date-time)|false|read-only|none|

<h2 id="tocS_ServiceCredentialTypesCollection">ServiceCredentialTypesCollection</h2>
<!-- backwards compatibility -->
<a id="schemaservicecredentialtypescollection"></a>
<a id="schema_ServiceCredentialTypesCollection"></a>
<a id="tocSservicecredentialtypescollection"></a>
<a id="tocsservicecredentialtypescollection"></a>

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "kind": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "name": "string",
      "namespace": "string",
      "refresh_state_part_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_deleted_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "string",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ServiceCredentialType](#schemaservicecredentialtype)]|false|none|none|
|links|[CollectionLinks](#schemacollectionlinks)|false|none|none|
|meta|[CollectionMetadata](#schemacollectionmetadata)|false|none|none|

<h2 id="tocS_ServiceCredentialsCollection">ServiceCredentialsCollection</h2>
<!-- backwards compatibility -->
<a id="schemaservicecredentialscollection"></a>
<a id="schema_ServiceCredentialsCollection"></a>
<a id="tocSservicecredentialscollection"></a>
<a id="tocsservicecredentialscollection"></a>

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "name": "string",
      "refresh_state_part_id": "string",
      "service_credential_type_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "string",
      "source_updated_at": "1970-01-01T00:00:00Z",
      "type_name": "string",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ServiceCredential](#schemaservicecredential)]|false|none|none|
|links|[CollectionLinks](#schemacollectionlinks)|false|none|none|
|meta|[CollectionMetadata](#schemacollectionmetadata)|false|none|none|

<h2 id="tocS_ServiceInstance">ServiceInstance</h2>
<!-- backwards compatibility -->
<a id="schemaserviceinstance"></a>
<a id="schema_ServiceInstance"></a>
<a id="tocSserviceinstance"></a>
<a id="tocsserviceinstance"></a>

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "external_url": "string",
  "extra": {},
  "id": "string",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "name": "Sample ServiceInstance",
  "refresh_state_part_id": "string",
  "root_service_instance_id": "string",
  "service_inventory_id": "string",
  "service_offering_id": "string",
  "service_plan_id": "string",
  "source_created_at": "1970-01-01T00:00:00Z",
  "source_deleted_at": "1970-01-01T00:00:00Z",
  "source_id": "string",
  "source_ref": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time)|false|read-only|none|
|created_at|string(date-time)|false|read-only|none|
|external_url|string|false|read-only|none|
|extra|object|false|read-only|Extra information about this object in JSON format|
|id|[ID](#schemaid)|false|read-only|ID of the resource|
|last_seen_at|string(date-time)|false|read-only|none|
|name|string|false|read-only|none|
|refresh_state_part_id|[ID](#schemaid)|false|read-only|ID of the resource|
|root_service_instance_id|[ID](#schemaid)|false|read-only|ID of the resource|
|service_inventory_id|[ID](#schemaid)|false|read-only|ID of the resource|
|service_offering_id|[ID](#schemaid)|false|read-only|ID of the resource|
|service_plan_id|[ID](#schemaid)|false|read-only|ID of the resource|
|source_created_at|string(date-time)|false|read-only|none|
|source_deleted_at|string(date-time)|false|read-only|none|
|source_id|[ID](#schemaid)|false|read-only|ID of the resource|
|source_ref|string(uuid)|false|read-only|none|
|updated_at|string(date-time)|false|read-only|none|

<h2 id="tocS_ServiceInstanceNode">ServiceInstanceNode</h2>
<!-- backwards compatibility -->
<a id="schemaserviceinstancenode"></a>
<a id="schema_ServiceInstanceNode"></a>
<a id="tocSserviceinstancenode"></a>
<a id="tocsserviceinstancenode"></a>

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "extra": {},
  "id": "string",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "name": "string",
  "refresh_state_part_id": "string",
  "root_service_instance_id": "string",
  "service_instance_id": "string",
  "service_inventory_id": "string",
  "source_created_at": "1970-01-01T00:00:00Z",
  "source_id": "string",
  "source_ref": "string",
  "source_updated_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time)|false|read-only|none|
|created_at|string(date-time)|false|read-only|none|
|extra|object|false|none|none|
|id|[ID](#schemaid)|false|read-only|ID of the resource|
|last_seen_at|string(date-time)|false|read-only|none|
|name|string|false|none|none|
|refresh_state_part_id|[ID](#schemaid)|false|read-only|ID of the resource|
|root_service_instance_id|[ID](#schemaid)|false|read-only|ID of the resource|
|service_instance_id|[ID](#schemaid)|false|read-only|ID of the resource|
|service_inventory_id|[ID](#schemaid)|false|read-only|ID of the resource|
|source_created_at|string(date-time)|false|none|none|
|source_id|[ID](#schemaid)|false|read-only|ID of the resource|
|source_ref|string|false|none|none|
|source_updated_at|string(date-time)|false|none|none|
|updated_at|string(date-time)|false|read-only|none|

<h2 id="tocS_ServiceInstanceNodesCollection">ServiceInstanceNodesCollection</h2>
<!-- backwards compatibility -->
<a id="schemaserviceinstancenodescollection"></a>
<a id="schema_ServiceInstanceNodesCollection"></a>
<a id="tocSserviceinstancenodescollection"></a>
<a id="tocsserviceinstancenodescollection"></a>

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "extra": {},
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "name": "string",
      "refresh_state_part_id": "string",
      "root_service_instance_id": "string",
      "service_instance_id": "string",
      "service_inventory_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "string",
      "source_updated_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ServiceInstanceNode](#schemaserviceinstancenode)]|false|none|none|
|links|[CollectionLinks](#schemacollectionlinks)|false|none|none|
|meta|[CollectionMetadata](#schemacollectionmetadata)|false|none|none|

<h2 id="tocS_ServiceInstancesCollection">ServiceInstancesCollection</h2>
<!-- backwards compatibility -->
<a id="schemaserviceinstancescollection"></a>
<a id="schema_ServiceInstancesCollection"></a>
<a id="tocSserviceinstancescollection"></a>
<a id="tocsserviceinstancescollection"></a>

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "external_url": "string",
      "extra": {},
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "name": "Sample ServiceInstance",
      "refresh_state_part_id": "string",
      "root_service_instance_id": "string",
      "service_inventory_id": "string",
      "service_offering_id": "string",
      "service_plan_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_deleted_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ServiceInstance](#schemaserviceinstance)]|false|none|none|
|links|[CollectionLinks](#schemacollectionlinks)|false|none|none|
|meta|[CollectionMetadata](#schemacollectionmetadata)|false|none|none|

<h2 id="tocS_ServiceInventoriesCollection">ServiceInventoriesCollection</h2>
<!-- backwards compatibility -->
<a id="schemaserviceinventoriescollection"></a>
<a id="schema_ServiceInventoriesCollection"></a>
<a id="tocSserviceinventoriescollection"></a>
<a id="tocsserviceinventoriescollection"></a>

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "extra": {},
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "name": "string",
      "refresh_state_part_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "string",
      "source_updated_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ServiceInventory](#schemaserviceinventory)]|false|none|none|
|links|[CollectionLinks](#schemacollectionlinks)|false|none|none|
|meta|[CollectionMetadata](#schemacollectionmetadata)|false|none|none|

<h2 id="tocS_ServiceInventory">ServiceInventory</h2>
<!-- backwards compatibility -->
<a id="schemaserviceinventory"></a>
<a id="schema_ServiceInventory"></a>
<a id="tocSserviceinventory"></a>
<a id="tocsserviceinventory"></a>

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "description": "string",
  "extra": {},
  "id": "string",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "name": "string",
  "refresh_state_part_id": "string",
  "source_created_at": "1970-01-01T00:00:00Z",
  "source_id": "string",
  "source_ref": "string",
  "source_updated_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time)|false|read-only|none|
|created_at|string(date-time)|false|read-only|none|
|description|string|false|read-only|none|
|extra|object|false|read-only|none|
|id|[ID](#schemaid)|false|read-only|ID of the resource|
|last_seen_at|string(date-time)|false|read-only|none|
|name|string|false|read-only|none|
|refresh_state_part_id|[ID](#schemaid)|false|read-only|ID of the resource|
|source_created_at|string(date-time)|false|read-only|none|
|source_id|[ID](#schemaid)|false|read-only|ID of the resource|
|source_ref|string|false|read-only|none|
|source_updated_at|string(date-time)|false|read-only|none|
|updated_at|string(date-time)|false|read-only|none|

<h2 id="tocS_ServiceOffering">ServiceOffering</h2>
<!-- backwards compatibility -->
<a id="schemaserviceoffering"></a>
<a id="schema_ServiceOffering"></a>
<a id="tocSserviceoffering"></a>
<a id="tocsserviceoffering"></a>

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "description": "This is a short description",
  "display_name": "MariaDB (Ephemeral)",
  "distributor": "Red Hat, Inc.",
  "documentation_url": "https://github.com/sclorg/mariadb-container/blob/master/10.2/root/usr/share/container-scripts/mysql/README.md",
  "extra": {},
  "id": "string",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "long_description": "This template provides a standalone MariaDB server with a database created...",
  "name": "Sample Service Offering",
  "refresh_state_part_id": "string",
  "service_inventory_id": "string",
  "source_created_at": "1970-01-01T00:00:00Z",
  "source_deleted_at": "1970-01-01T00:00:00Z",
  "source_id": "string",
  "source_ref": "object-12345_67890",
  "support_url": "https://access.redhat.com",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time)|false|read-only|none|
|created_at|string(date-time)|false|read-only|none|
|description|string|false|read-only|none|
|display_name|string|false|read-only|none|
|distributor|string|false|read-only|none|
|documentation_url|string|false|read-only|none|
|extra|object|false|read-only|Extra information about this object in JSON format|
|id|[ID](#schemaid)|false|read-only|ID of the resource|
|last_seen_at|string(date-time)|false|read-only|none|
|long_description|string|false|read-only|none|
|name|string|false|read-only|none|
|refresh_state_part_id|[ID](#schemaid)|false|read-only|ID of the resource|
|service_inventory_id|[ID](#schemaid)|false|read-only|ID of the resource|
|source_created_at|string(date-time)|false|read-only|none|
|source_deleted_at|string(date-time)|false|read-only|none|
|source_id|[ID](#schemaid)|false|read-only|ID of the resource|
|source_ref|string|false|read-only|The native reference used by the Source to refer to this object|
|support_url|string|false|read-only|none|
|updated_at|string(date-time)|false|read-only|none|

<h2 id="tocS_ServiceOfferingIcon">ServiceOfferingIcon</h2>
<!-- backwards compatibility -->
<a id="schemaserviceofferingicon"></a>
<a id="schema_ServiceOfferingIcon"></a>
<a id="tocSserviceofferingicon"></a>
<a id="tocsserviceofferingicon"></a>

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "data": "string",
  "id": "string",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "refresh_state_part_id": "string",
  "source_id": "string",
  "source_ref": "icon-mariadb",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time)|false|read-only|none|
|created_at|string(date-time)|false|read-only|none|
|data|string|false|read-only|Raw icon data|
|id|[ID](#schemaid)|false|read-only|ID of the resource|
|last_seen_at|string(date-time)|false|read-only|none|
|refresh_state_part_id|[ID](#schemaid)|false|read-only|ID of the resource|
|source_id|[ID](#schemaid)|false|read-only|ID of the resource|
|source_ref|string|false|read-only|none|
|updated_at|string(date-time)|false|read-only|none|

<h2 id="tocS_ServiceOfferingIconsCollection">ServiceOfferingIconsCollection</h2>
<!-- backwards compatibility -->
<a id="schemaserviceofferingiconscollection"></a>
<a id="schema_ServiceOfferingIconsCollection"></a>
<a id="tocSserviceofferingiconscollection"></a>
<a id="tocsserviceofferingiconscollection"></a>

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "data": "string",
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "refresh_state_part_id": "string",
      "source_id": "string",
      "source_ref": "icon-mariadb",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ServiceOfferingIcon](#schemaserviceofferingicon)]|false|none|none|
|links|[CollectionLinks](#schemacollectionlinks)|false|none|none|
|meta|[CollectionMetadata](#schemacollectionmetadata)|false|none|none|

<h2 id="tocS_ServiceOfferingNode">ServiceOfferingNode</h2>
<!-- backwards compatibility -->
<a id="schemaserviceofferingnode"></a>
<a id="schema_ServiceOfferingNode"></a>
<a id="tocSserviceofferingnode"></a>
<a id="tocsserviceofferingnode"></a>

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "extra": {},
  "id": "string",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "name": "string",
  "refresh_state_part_id": "string",
  "root_service_offering_id": "string",
  "service_inventory_id": "string",
  "service_offering_id": "string",
  "source_created_at": "1970-01-01T00:00:00Z",
  "source_id": "string",
  "source_ref": "string",
  "source_updated_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time)|false|read-only|none|
|created_at|string(date-time)|false|read-only|none|
|extra|object|false|none|none|
|id|[ID](#schemaid)|false|read-only|ID of the resource|
|last_seen_at|string(date-time)|false|read-only|none|
|name|string|false|none|none|
|refresh_state_part_id|[ID](#schemaid)|false|read-only|ID of the resource|
|root_service_offering_id|[ID](#schemaid)|false|read-only|ID of the resource|
|service_inventory_id|[ID](#schemaid)|false|read-only|ID of the resource|
|service_offering_id|[ID](#schemaid)|false|read-only|ID of the resource|
|source_created_at|string(date-time)|false|none|none|
|source_id|[ID](#schemaid)|false|read-only|ID of the resource|
|source_ref|string|false|none|none|
|source_updated_at|string(date-time)|false|none|none|
|updated_at|string(date-time)|false|read-only|none|

<h2 id="tocS_ServiceOfferingNodesCollection">ServiceOfferingNodesCollection</h2>
<!-- backwards compatibility -->
<a id="schemaserviceofferingnodescollection"></a>
<a id="schema_ServiceOfferingNodesCollection"></a>
<a id="tocSserviceofferingnodescollection"></a>
<a id="tocsserviceofferingnodescollection"></a>

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "extra": {},
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "name": "string",
      "refresh_state_part_id": "string",
      "root_service_offering_id": "string",
      "service_inventory_id": "string",
      "service_offering_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "string",
      "source_updated_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ServiceOfferingNode](#schemaserviceofferingnode)]|false|none|none|
|links|[CollectionLinks](#schemacollectionlinks)|false|none|none|
|meta|[CollectionMetadata](#schemacollectionmetadata)|false|none|none|

<h2 id="tocS_ServiceOfferingsCollection">ServiceOfferingsCollection</h2>
<!-- backwards compatibility -->
<a id="schemaserviceofferingscollection"></a>
<a id="schema_ServiceOfferingsCollection"></a>
<a id="tocSserviceofferingscollection"></a>
<a id="tocsserviceofferingscollection"></a>

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "description": "This is a short description",
      "display_name": "MariaDB (Ephemeral)",
      "distributor": "Red Hat, Inc.",
      "documentation_url": "https://github.com/sclorg/mariadb-container/blob/master/10.2/root/usr/share/container-scripts/mysql/README.md",
      "extra": {},
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "long_description": "This template provides a standalone MariaDB server with a database created...",
      "name": "Sample Service Offering",
      "refresh_state_part_id": "string",
      "service_inventory_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_deleted_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "object-12345_67890",
      "support_url": "https://access.redhat.com",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ServiceOffering](#schemaserviceoffering)]|false|none|none|
|links|[CollectionLinks](#schemacollectionlinks)|false|none|none|
|meta|[CollectionMetadata](#schemacollectionmetadata)|false|none|none|

<h2 id="tocS_ServicePlan">ServicePlan</h2>
<!-- backwards compatibility -->
<a id="schemaserviceplan"></a>
<a id="schema_ServicePlan"></a>
<a id="tocSserviceplan"></a>
<a id="tocsserviceplan"></a>

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "create_json_schema": {},
  "created_at": "1970-01-01T00:00:00Z",
  "description": "This is a sample description for a provider",
  "extra": {},
  "id": "string",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "name": "Sample Provider",
  "refresh_state_part_id": "string",
  "resource_version": "string",
  "service_offering_id": "string",
  "source_created_at": "1970-01-01T00:00:00Z",
  "source_deleted_at": "1970-01-01T00:00:00Z",
  "source_id": "string",
  "source_ref": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "update_json_schema": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time)|false|read-only|none|
|create_json_schema|object|false|read-only|none|
|created_at|string(date-time)|false|read-only|none|
|description|string|false|read-only|none|
|extra|object|false|read-only|Extra information about this object in JSON format|
|id|[ID](#schemaid)|false|read-only|ID of the resource|
|last_seen_at|string(date-time)|false|read-only|none|
|name|string|false|read-only|none|
|refresh_state_part_id|[ID](#schemaid)|false|read-only|ID of the resource|
|resource_version|string|false|read-only|none|
|service_offering_id|[ID](#schemaid)|false|read-only|ID of the resource|
|source_created_at|string(date-time)|false|read-only|none|
|source_deleted_at|string(date-time)|false|read-only|none|
|source_id|[ID](#schemaid)|false|read-only|ID of the resource|
|source_ref|string(uuid)|false|read-only|none|
|update_json_schema|string|false|read-only|none|
|updated_at|string(date-time)|false|read-only|none|

<h2 id="tocS_ServicePlansCollection">ServicePlansCollection</h2>
<!-- backwards compatibility -->
<a id="schemaserviceplanscollection"></a>
<a id="schema_ServicePlansCollection"></a>
<a id="tocSserviceplanscollection"></a>
<a id="tocsserviceplanscollection"></a>

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "create_json_schema": {},
      "created_at": "1970-01-01T00:00:00Z",
      "description": "This is a sample description for a provider",
      "extra": {},
      "id": "string",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "name": "Sample Provider",
      "refresh_state_part_id": "string",
      "resource_version": "string",
      "service_offering_id": "string",
      "source_created_at": "1970-01-01T00:00:00Z",
      "source_deleted_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "source_ref": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "update_json_schema": "string",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ServicePlan](#schemaserviceplan)]|false|none|none|
|links|[CollectionLinks](#schemacollectionlinks)|false|none|none|
|meta|[CollectionMetadata](#schemacollectionmetadata)|false|none|none|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "availability_message": "string",
  "availability_status": "The availability status of source",
  "cloud_connector_id": "The GUID of the RedHat connect client being used",
  "created_at": "1970-01-01T00:00:00Z",
  "enabled": false,
  "id": "string",
  "info": "The version of Tower being used",
  "last_available_at": "1970-01-01T00:00:00Z",
  "last_checked_at": "1970-01-01T00:00:00Z",
  "last_refresh_message": "string",
  "last_successful_refresh_at": "1970-01-01T00:00:00Z",
  "name": "The Source Name",
  "previous_sha": "string",
  "previous_size": 0,
  "refresh_finished_at": "1970-01-01T00:00:00Z",
  "refresh_started_at": "1970-01-01T00:00:00Z",
  "refresh_state": "string",
  "refresh_task_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "uid": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time)|false|read-only|none|
|availability_message|string|false|read-only|none|
|availability_status|string|false|none|none|
|cloud_connector_id|string|false|read-only|none|
|created_at|string(date-time)|false|read-only|none|
|enabled|boolean|false|read-only|none|
|id|[ID](#schemaid)|false|read-only|ID of the resource|
|info|object|false|read-only|none|
|last_available_at|string(date-time)|false|read-only|none|
|last_checked_at|string(date-time)|false|read-only|none|
|last_refresh_message|string|false|read-only|none|
|last_successful_refresh_at|string(date-time)|false|read-only|none|
|name|string|false|read-only|none|
|previous_sha|string|false|read-only|none|
|previous_size|integer|false|read-only|none|
|refresh_finished_at|string(date-time)|false|read-only|none|
|refresh_started_at|string(date-time)|false|read-only|none|
|refresh_state|string|false|none|none|
|refresh_task_id|string(uuid)|false|read-only|none|
|uid|string|false|read-only|none|
|updated_at|string(date-time)|false|read-only|none|

<h2 id="tocS_SourcesCollection">SourcesCollection</h2>
<!-- backwards compatibility -->
<a id="schemasourcescollection"></a>
<a id="schema_SourcesCollection"></a>
<a id="tocSsourcescollection"></a>
<a id="tocssourcescollection"></a>

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "availability_message": "string",
      "availability_status": "The availability status of source",
      "cloud_connector_id": "The GUID of the RedHat connect client being used",
      "created_at": "1970-01-01T00:00:00Z",
      "enabled": false,
      "id": "string",
      "info": "The version of Tower being used",
      "last_available_at": "1970-01-01T00:00:00Z",
      "last_checked_at": "1970-01-01T00:00:00Z",
      "last_refresh_message": "string",
      "last_successful_refresh_at": "1970-01-01T00:00:00Z",
      "name": "The Source Name",
      "previous_sha": "string",
      "previous_size": 0,
      "refresh_finished_at": "1970-01-01T00:00:00Z",
      "refresh_started_at": "1970-01-01T00:00:00Z",
      "refresh_state": "string",
      "refresh_task_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "uid": "string",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Source](#schemasource)]|false|none|none|
|links|[CollectionLinks](#schemacollectionlinks)|false|none|none|
|meta|[CollectionMetadata](#schemacollectionmetadata)|false|none|none|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "tag": "/namespace/architecture=x86_64"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|string|false|none|none|

<h2 id="tocS_TagsCollection">TagsCollection</h2>
<!-- backwards compatibility -->
<a id="schematagscollection"></a>
<a id="schema_TagsCollection"></a>
<a id="tocStagscollection"></a>
<a id="tocstagscollection"></a>

```json
{
  "data": [
    {
      "tag": "/namespace/architecture=x86_64"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Tag](#schematag)]|false|none|none|
|links|[CollectionLinks](#schemacollectionlinks)|false|none|none|
|meta|[CollectionMetadata](#schemacollectionmetadata)|false|none|none|

<h2 id="tocS_Task">Task</h2>
<!-- backwards compatibility -->
<a id="schematask"></a>
<a id="schema_Task"></a>
<a id="tocStask"></a>
<a id="tocstask"></a>

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "child_task_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "completed_at": "1970-01-01T00:00:00Z",
  "controller_message_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "input": "Task payload input content",
  "message": "received message starting inventory collection",
  "name": "Order Service Plan",
  "output": "Result of Task Execution",
  "owner": "jdoe",
  "source_id": "string",
  "state": "running",
  "status": "error",
  "target_source_ref": "string",
  "target_type": "string",
  "type": "CloudConnectorTask",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time)|false|read-only|none|
|child_task_id|string(uuid)|false|read-only|none|
|completed_at|string(date-time)|false|none|none|
|controller_message_id|string(uuid)|false|read-only|none|
|created_at|string(date-time)|false|read-only|none|
|id|[UUID](#schemauuid)|false|read-only|UUID of task|
|input|object|false|read-only|none|
|message|string|false|none|none|
|name|string|false|none|none|
|output|object|false|none|none|
|owner|string|false|read-only|none|
|source_id|[ID](#schemaid)|false|read-only|ID of the resource|
|state|string|false|none|none|
|status|string|false|none|none|
|target_source_ref|string|false|none|none|
|target_type|string|false|none|none|
|type|string|false|none|none|
|updated_at|string(date-time)|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|pending|
|state|queued|
|state|running|
|state|timedout|
|state|completed|
|status|ok|
|status|warn|
|status|unchanged|
|status|error|

<h2 id="tocS_TasksCollection">TasksCollection</h2>
<!-- backwards compatibility -->
<a id="schemataskscollection"></a>
<a id="schema_TasksCollection"></a>
<a id="tocStaskscollection"></a>
<a id="tocstaskscollection"></a>

```json
{
  "data": [
    {
      "archived_at": "1970-01-01T00:00:00Z",
      "child_task_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "completed_at": "1970-01-01T00:00:00Z",
      "controller_message_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "input": "Task payload input content",
      "message": "received message starting inventory collection",
      "name": "Order Service Plan",
      "output": "Result of Task Execution",
      "owner": "jdoe",
      "source_id": "string",
      "state": "running",
      "status": "error",
      "target_source_ref": "string",
      "target_type": "string",
      "type": "CloudConnectorTask",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "meta": {
    "count": 0,
    "limit": 0,
    "offset": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Task](#schematask)]|false|none|none|
|links|[CollectionLinks](#schemacollectionlinks)|false|none|none|
|meta|[CollectionMetadata](#schemacollectionmetadata)|false|none|none|

<h2 id="tocS_Tenant">Tenant</h2>
<!-- backwards compatibility -->
<a id="schematenant"></a>
<a id="schema_Tenant"></a>
<a id="tocStenant"></a>
<a id="tocstenant"></a>

```json
{
  "description": "Description of the Tenant",
  "external_tenant": "External tenant identifier",
  "id": "string",
  "name": "Sample Tenant"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|read-only|none|
|external_tenant|string|false|read-only|none|
|id|[ID](#schemaid)|false|read-only|ID of the resource|
|name|string|false|read-only|none|

<h2 id="tocS_TowingTask">TowingTask</h2>
<!-- backwards compatibility -->
<a id="schematowingtask"></a>
<a id="schema_TowingTask"></a>
<a id="tocStowingtask"></a>
<a id="tocstowingtask"></a>

```json
{
  "archived_at": "1970-01-01T00:00:00Z",
  "child_task_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "completed_at": "1970-01-01T00:00:00Z",
  "controller_message_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "input": "Task payload input content",
  "message": "received message starting inventory collection",
  "name": "Order Service Plan",
  "output": "Result of Task Execution",
  "owner": "jdoe",
  "source_id": "string",
  "state": "running",
  "status": "error",
  "target_source_ref": "string",
  "target_type": "string",
  "type": "CloudConnectorTask",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived_at|string(date-time)|false|read-only|none|
|child_task_id|string(uuid)|false|read-only|none|
|completed_at|string(date-time)|false|none|none|
|controller_message_id|string(uuid)|false|read-only|none|
|created_at|string(date-time)|false|read-only|none|
|id|[UUID](#schemauuid)|false|read-only|UUID of task|
|input|object|false|read-only|none|
|message|string|false|none|none|
|name|string|false|none|none|
|output|object|false|none|none|
|owner|string|false|read-only|none|
|source_id|[ID](#schemaid)|false|read-only|ID of the resource|
|state|string|false|none|none|
|status|string|false|none|none|
|target_source_ref|string|false|none|none|
|target_type|string|false|none|none|
|type|string|false|none|none|
|updated_at|string(date-time)|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|pending|
|state|queued|
|state|running|
|state|timedout|
|state|completed|
|status|ok|
|status|warn|
|status|unchanged|
|status|error|

<h2 id="tocS_UUID">UUID</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_UUID"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

UUID of task
