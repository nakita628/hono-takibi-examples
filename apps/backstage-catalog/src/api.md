<h1 id="catalog">catalog v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The API surface consists of a few distinct groups of functionality. Each has a
dedicated section below.

:::note Note
  This page only describes some of the most commonly used parts of the API, and is a work in progress.
:::

All of the URL paths in this article are assumed to be on top of some base URL
pointing at your catalog installation. For example, if the path given in a
section below is `/entities`, and the catalog is located at
`http://localhost:7007/api/catalog` during local development, the full URL would
be `http://localhost:7007/api/catalog/entities`. The actual URL may vary from
one organization to the other, especially in production, but is commonly your
`backend.baseUrl` in your app config, plus `/api/catalog` at the end.

Some or all of the endpoints may accept or require an `Authorization` header
with a `Bearer` token, which should then be the Backstage token returned by the
[`identity API`](https://backstage.io/api/stable/variables/_backstage_core-plugin-api.index.identityApiRef.html).

Base URLs:

* <a href="https://raw.githubusercontent.com/">https://raw.githubusercontent.com/</a>

License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache-2.0</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="catalog-entity">Entity</h1>

## RefreshEntity

<a id="opIdRefreshEntity"></a>

> Code samples

```bash
curl http://localhost:7007/api/catalog/refresh \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "authorizationToken": "string",
    "entityRef": "string"
  }'
```

`POST /refresh`

Refresh the entity related to entityRef.

> Body parameter

```json
{
  "authorizationToken": "string",
  "entityRef": "string"
}
```

<h3 id="refreshentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» authorizationToken|body|string|false|none|
|» entityRef|body|string|true|The reference to a single entity that should be refreshed|

> Example responses

> 400 Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="refreshentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Refreshed|None|
|400|Bad Request|An error response from the backend.|[Error](#schemaerror)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## GetEntities

<a id="opIdGetEntities"></a>

> Code samples

```bash
curl http://localhost:7007/api/catalog/entities \
  -H 'Accept: application/json'
```

`GET /entities`

Get all entities matching a given filter.

<h3 id="getentities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|By default the full entities are returned, but you can pass in a `fields` query<br>parameter which selects what parts of the entity data to retain. This makes the<br>response smaller and faster to transfer, and may allow the catalog to perform<br>more efficient queries.<br><br>The query parameter value is a comma separated list of simplified JSON paths<br>like above. Each path corresponds to the key of either a value, or of a subtree<br>root that you want to keep in the output. The rest is pruned away. For example,<br>specifying `?fields=metadata.name,metadata.annotations,spec` retains only the<br>`name` and `annotations` fields of the `metadata` of each entity (it'll be an<br>object with at most two keys), keeps the entire `spec` unchanged, and cuts out<br>all other roots such as `relations`.<br><br>Some more real world usable examples:<br><br>- Return only enough data to form the full ref of each entity:<br><br>  `/entities/by-query?fields=kind,metadata.namespace,metadata.name`<br>|
|limit|query|integer|false|Number of records to return in the response.|
|filter|query|[string]|false|You can pass in one or more filter sets that get matched against each entity.<br>Each filter set is a number of conditions that all have to match for the<br>condition to be true (conditions effectively have an AND between them). At least<br>one filter set has to be true for the entity to be part of the result set<br>(filter sets effectively have an OR between them).<br><br>Example:<br><br>```text<br>/entities/by-query?filter=kind=user,metadata.namespace=default&filter=kind=group,spec.type<br><br>  Return entities that match<br><br>    Filter set 1:<br>      Condition 1: kind = user<br>                  AND<br>      Condition 2: metadata.namespace = default<br><br>    OR<br><br>    Filter set 2:<br>      Condition 1: kind = group<br>                  AND<br>      Condition 2: spec.type exists<br>```<br><br>Each condition is either on the form `<key>`, or on the form `<key>=<value>`.<br>The first form asserts on the existence of a certain key (with any value), and<br>the second asserts that the key exists and has a certain value. All checks are<br>always case _insensitive_.<br><br>In all cases, the key is a simplified JSON path in a given piece of entity data.<br>Each part of the path is a key of an object, and the traversal also descends<br>through arrays. There are two special forms:<br><br>- Array items that are simple value types (such as strings) match on a key-value<br>  pair where the key is the item as a string, and the value is the string `true`<br>- Relations can be matched on a `relations.<type>=<targetRef>` form<br><br>Let's look at a simplified example to illustrate the concept:<br><br>```json<br>{<br>  "a": {<br>    "b": ["c", { "d": 1 }],<br>    "e": 7<br>  }<br>}<br>```<br><br>This would match any one of the following conditions:<br><br>- `a`<br>- `a.b`<br>- `a.b.c`<br>- `a.b.c=true`<br>- `a.b.d`<br>- `a.b.d=1`<br>- `a.e`<br>- `a.e=7`<br><br>Some more real world usable examples:<br><br>- Return all orphaned entities:<br><br>  `/entities/by-query?filter=metadata.annotations.backstage.io/orphan=true`<br><br>- Return all users and groups:<br><br>  `/entities/by-query?filter=kind=user&filter=kind=group`<br><br>- Return all service components:<br><br>  `/entities/by-query?filter=kind=component,spec.type=service`<br><br>- Return all entities with the `java` tag:<br><br>  `/entities/by-query?filter=metadata.tags.java`<br><br>- Return all users who are members of the `ops` group (note that the full<br>  [reference](references.md) of the group is used):<br><br>  `/entities/by-query?filter=kind=user,relations.memberof=group:default/ops`<br>|
|offset|query|integer|false|Number of records to skip in the query page.|
|after|query|string|false|Pointer to the previous page of results.|
|order|query|[string]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "relations": [
      {
        "targetRef": "string",
        "type": "string"
      }
    ],
    "spec": {
      "property1": null,
      "property2": null
    },
    "metadata": {
      "links": [
        {
          "type": "string",
          "icon": "string",
          "title": "string",
          "url": "string"
        }
      ],
      "tags": [
        "string"
      ],
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "description": "string",
      "title": "string",
      "namespace": "string",
      "name": "string",
      "etag": "string",
      "uid": "string",
      "property1": null,
      "property2": null
    },
    "kind": "string",
    "apiVersion": "string"
  }
]
```

> 400 Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="getentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|An error response from the backend.|[Error](#schemaerror)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<h3 id="getentities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Entity](#schemaentity)]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## GetEntityByUid

<a id="opIdGetEntityByUid"></a>

> Code samples

```bash
curl http://localhost:7007/api/catalog/entities/by-uid/string \
  -H 'Accept: application/json'
```

`GET /entities/by-uid/{uid}`

Get a single entity by the UID.

<h3 id="getentitybyuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "relations": [
    {
      "targetRef": "string",
      "type": "string"
    }
  ],
  "spec": {
    "property1": null,
    "property2": null
  },
  "metadata": {
    "links": [
      {
        "type": "string",
        "icon": "string",
        "title": "string",
        "url": "string"
      }
    ],
    "tags": [
      "string"
    ],
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "description": "string",
    "title": "string",
    "namespace": "string",
    "name": "string",
    "etag": "string",
    "uid": "string",
    "property1": null,
    "property2": null
  },
  "kind": "string",
  "apiVersion": "string"
}
```

> 400 Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="getentitybyuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[Entity](#schemaentity)|
|400|Bad Request|An error response from the backend.|[Error](#schemaerror)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## DeleteEntityByUid

<a id="opIdDeleteEntityByUid"></a>

> Code samples

```bash
curl http://localhost:7007/api/catalog/entities/by-uid/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /entities/by-uid/{uid}`

Delete a single entity by UID.

<h3 id="deleteentitybyuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="deleteentitybyuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted successfully.|None|
|400|Bad Request|An error response from the backend.|[Error](#schemaerror)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## GetEntityByName

<a id="opIdGetEntityByName"></a>

> Code samples

```bash
curl http://localhost:7007/api/catalog/entities/by-name/string/string/string \
  -H 'Accept: application/json'
```

`GET /entities/by-name/{kind}/{namespace}/{name}`

Get an entity by an entity ref.

<h3 id="getentitybyname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|kind|path|string|true|none|
|namespace|path|string|true|none|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "relations": [
    {
      "targetRef": "string",
      "type": "string"
    }
  ],
  "spec": {
    "property1": null,
    "property2": null
  },
  "metadata": {
    "links": [
      {
        "type": "string",
        "icon": "string",
        "title": "string",
        "url": "string"
      }
    ],
    "tags": [
      "string"
    ],
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "description": "string",
    "title": "string",
    "namespace": "string",
    "name": "string",
    "etag": "string",
    "uid": "string",
    "property1": null,
    "property2": null
  },
  "kind": "string",
  "apiVersion": "string"
}
```

> 400 Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="getentitybyname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[Entity](#schemaentity)|
|400|Bad Request|An error response from the backend.|[Error](#schemaerror)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## GetEntityAncestryByName

<a id="opIdGetEntityAncestryByName"></a>

> Code samples

```bash
curl http://localhost:7007/api/catalog/entities/by-name/string/string/string/ancestry \
  -H 'Accept: application/json'
```

`GET /entities/by-name/{kind}/{namespace}/{name}/ancestry`

Get an entity's ancestry by entity ref.

<h3 id="getentityancestrybyname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|kind|path|string|true|none|
|namespace|path|string|true|none|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "parentEntityRefs": [
        "string"
      ],
      "entity": {
        "relations": [
          {
            "targetRef": "string",
            "type": "string"
          }
        ],
        "spec": {
          "property1": null,
          "property2": null
        },
        "metadata": {
          "links": [
            {
              "type": "string",
              "icon": "string",
              "title": "string",
              "url": "string"
            }
          ],
          "tags": [
            "string"
          ],
          "annotations": {
            "property1": "string",
            "property2": "string"
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "description": "string",
          "title": "string",
          "namespace": "string",
          "name": "string",
          "etag": "string",
          "uid": "string",
          "property1": null,
          "property2": null
        },
        "kind": "string",
        "apiVersion": "string"
      }
    }
  ],
  "rootEntityRef": "string"
}
```

> 400 Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="getentityancestrybyname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[EntityAncestryResponse](#schemaentityancestryresponse)|
|400|Bad Request|An error response from the backend.|[Error](#schemaerror)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## GetEntitiesByRefs

<a id="opIdGetEntitiesByRefs"></a>

> Code samples

```bash
curl http://localhost:7007/api/catalog/entities/by-refs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "entityRefs": [
      "component:default/backstage",
      "api:default/backstage"
    ]
  }'
```

`POST /entities/by-refs`

Get a batch set of entities given an array of entityRefs.

> Body parameter

```json
{
  "entityRefs": [
    "component:default/backstage",
    "api:default/backstage"
  ]
}
```

<h3 id="getentitiesbyrefs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|[string]|false|You can pass in one or more filter sets that get matched against each entity.<br>Each filter set is a number of conditions that all have to match for the<br>condition to be true (conditions effectively have an AND between them). At least<br>one filter set has to be true for the entity to be part of the result set<br>(filter sets effectively have an OR between them).<br><br>Example:<br><br>```text<br>/entities/by-query?filter=kind=user,metadata.namespace=default&filter=kind=group,spec.type<br><br>  Return entities that match<br><br>    Filter set 1:<br>      Condition 1: kind = user<br>                  AND<br>      Condition 2: metadata.namespace = default<br><br>    OR<br><br>    Filter set 2:<br>      Condition 1: kind = group<br>                  AND<br>      Condition 2: spec.type exists<br>```<br><br>Each condition is either on the form `<key>`, or on the form `<key>=<value>`.<br>The first form asserts on the existence of a certain key (with any value), and<br>the second asserts that the key exists and has a certain value. All checks are<br>always case _insensitive_.<br><br>In all cases, the key is a simplified JSON path in a given piece of entity data.<br>Each part of the path is a key of an object, and the traversal also descends<br>through arrays. There are two special forms:<br><br>- Array items that are simple value types (such as strings) match on a key-value<br>  pair where the key is the item as a string, and the value is the string `true`<br>- Relations can be matched on a `relations.<type>=<targetRef>` form<br><br>Let's look at a simplified example to illustrate the concept:<br><br>```json<br>{<br>  "a": {<br>    "b": ["c", { "d": 1 }],<br>    "e": 7<br>  }<br>}<br>```<br><br>This would match any one of the following conditions:<br><br>- `a`<br>- `a.b`<br>- `a.b.c`<br>- `a.b.c=true`<br>- `a.b.d`<br>- `a.b.d=1`<br>- `a.e`<br>- `a.e=7`<br><br>Some more real world usable examples:<br><br>- Return all orphaned entities:<br><br>  `/entities/by-query?filter=metadata.annotations.backstage.io/orphan=true`<br><br>- Return all users and groups:<br><br>  `/entities/by-query?filter=kind=user&filter=kind=group`<br><br>- Return all service components:<br><br>  `/entities/by-query?filter=kind=component,spec.type=service`<br><br>- Return all entities with the `java` tag:<br><br>  `/entities/by-query?filter=metadata.tags.java`<br><br>- Return all users who are members of the `ops` group (note that the full<br>  [reference](references.md) of the group is used):<br><br>  `/entities/by-query?filter=kind=user,relations.memberof=group:default/ops`<br>|
|body|body|object|false|none|
|» entityRefs|body|[string]|true|none|
|» fields|body|[string]|false|none|
|» query|body|[JsonObject](#schemajsonobject)|false|A type representing all allowed JSON object values.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "relations": [
        {
          "targetRef": "string",
          "type": "string"
        }
      ],
      "spec": {
        "property1": null,
        "property2": null
      },
      "metadata": {
        "links": [
          {
            "type": "string",
            "icon": "string",
            "title": "string",
            "url": "string"
          }
        ],
        "tags": [
          "string"
        ],
        "annotations": {
          "property1": "string",
          "property2": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "description": "string",
        "title": "string",
        "namespace": "string",
        "name": "string",
        "etag": "string",
        "uid": "string",
        "property1": null,
        "property2": null
      },
      "kind": "string",
      "apiVersion": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="getentitiesbyrefs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[EntitiesBatchResponse](#schemaentitiesbatchresponse)|
|400|Bad Request|An error response from the backend.|[Error](#schemaerror)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## GetEntitiesByQuery

<a id="opIdGetEntitiesByQuery"></a>

> Code samples

```bash
curl http://localhost:7007/api/catalog/entities/by-query \
  -H 'Accept: application/json'
```

`GET /entities/by-query`

Search for entities by a given query.

<h3 id="getentitiesbyquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|By default the full entities are returned, but you can pass in a `fields` query<br>parameter which selects what parts of the entity data to retain. This makes the<br>response smaller and faster to transfer, and may allow the catalog to perform<br>more efficient queries.<br><br>The query parameter value is a comma separated list of simplified JSON paths<br>like above. Each path corresponds to the key of either a value, or of a subtree<br>root that you want to keep in the output. The rest is pruned away. For example,<br>specifying `?fields=metadata.name,metadata.annotations,spec` retains only the<br>`name` and `annotations` fields of the `metadata` of each entity (it'll be an<br>object with at most two keys), keeps the entire `spec` unchanged, and cuts out<br>all other roots such as `relations`.<br><br>Some more real world usable examples:<br><br>- Return only enough data to form the full ref of each entity:<br><br>  `/entities/by-query?fields=kind,metadata.namespace,metadata.name`<br>|
|limit|query|integer|false|Number of records to return in the response.|
|offset|query|integer|false|Number of records to skip in the query page.|
|orderField|query|[string]|false|By default the entities are returned ordered by their internal uid. You can<br>customize the `orderField` query parameters to affect that ordering.<br><br>For example, to return entities by their name:<br><br>`/entities/by-query?orderField=metadata.name,asc`<br><br>Each parameter can be followed by `asc` for ascending lexicographical order or<br>`desc` for descending (reverse) lexicographical order.<br><br>**Note:** although `orderField` accepts a list, the `entities/by-query`<br>endpoint currently applies only the first value; any additional order<br>fields are ignored (the backend logs a warning). Multi-field ordering is<br>tracked in https://github.com/backstage/backstage/issues/17560. For<br>multi-field ordering today, use the legacy `GET /entities` `order`<br>parameter.<br>|
|cursor|query|string|false|You may pass the `cursor` query parameters to perform cursor based pagination<br>through the set of entities. The value of `cursor` will be returned in the response, under the `pageInfo` property:<br><br>```json<br>  "pageInfo": {<br>    "nextCursor": "a-cursor",<br>    "prevCursor": "another-cursor"<br>  }<br>```<br><br>If `nextCursor` exists, it can be used to retrieve the next batch of entities. Following the same approach,<br>if `prevCursor` exists, it can be used to retrieve the previous batch of entities.<br><br>- [`filter`](#filtering), for selecting only a subset of all entities<br>- [`fields`](#field-selection), for selecting only parts of the full data<br>  structure of each entity<br>- `limit` for limiting the number of entities returned (20 is the default)<br>- [`orderField`](#ordering), for deciding the order of the entities<br>- `fullTextFilter`<br>  **NOTE**: [`filter`, `orderField`, `fullTextFilter`] and `cursor` are mutually exclusive. This means that,<br>  it isn't possible to change any of [`filter`, `orderField`, `fullTextFilter`] when passing `cursor` as query parameters,<br>  as changing any of these properties will affect pagination. If any of `filter`, `orderField`, `fullTextFilter` is specified together with `cursor`, only the latter is taken into consideration.<br>|
|filter|query|[string]|false|You can pass in one or more filter sets that get matched against each entity.<br>Each filter set is a number of conditions that all have to match for the<br>condition to be true (conditions effectively have an AND between them). At least<br>one filter set has to be true for the entity to be part of the result set<br>(filter sets effectively have an OR between them).<br><br>Example:<br><br>```text<br>/entities/by-query?filter=kind=user,metadata.namespace=default&filter=kind=group,spec.type<br><br>  Return entities that match<br><br>    Filter set 1:<br>      Condition 1: kind = user<br>                  AND<br>      Condition 2: metadata.namespace = default<br><br>    OR<br><br>    Filter set 2:<br>      Condition 1: kind = group<br>                  AND<br>      Condition 2: spec.type exists<br>```<br><br>Each condition is either on the form `<key>`, or on the form `<key>=<value>`.<br>The first form asserts on the existence of a certain key (with any value), and<br>the second asserts that the key exists and has a certain value. All checks are<br>always case _insensitive_.<br><br>In all cases, the key is a simplified JSON path in a given piece of entity data.<br>Each part of the path is a key of an object, and the traversal also descends<br>through arrays. There are two special forms:<br><br>- Array items that are simple value types (such as strings) match on a key-value<br>  pair where the key is the item as a string, and the value is the string `true`<br>- Relations can be matched on a `relations.<type>=<targetRef>` form<br><br>Let's look at a simplified example to illustrate the concept:<br><br>```json<br>{<br>  "a": {<br>    "b": ["c", { "d": 1 }],<br>    "e": 7<br>  }<br>}<br>```<br><br>This would match any one of the following conditions:<br><br>- `a`<br>- `a.b`<br>- `a.b.c`<br>- `a.b.c=true`<br>- `a.b.d`<br>- `a.b.d=1`<br>- `a.e`<br>- `a.e=7`<br><br>Some more real world usable examples:<br><br>- Return all orphaned entities:<br><br>  `/entities/by-query?filter=metadata.annotations.backstage.io/orphan=true`<br><br>- Return all users and groups:<br><br>  `/entities/by-query?filter=kind=user&filter=kind=group`<br><br>- Return all service components:<br><br>  `/entities/by-query?filter=kind=component,spec.type=service`<br><br>- Return all entities with the `java` tag:<br><br>  `/entities/by-query?filter=metadata.tags.java`<br><br>- Return all users who are members of the `ops` group (note that the full<br>  [reference](references.md) of the group is used):<br><br>  `/entities/by-query?filter=kind=user,relations.memberof=group:default/ops`<br>|
|totalItems|query|string|false|Controls whether the response's `totalItems` field is computed. Computing<br>the total may be expensive for large catalogs; pass `exclude` if the<br>caller does not need it (e.g. cursor-paginated UIs that only display the<br>count cosmetically). Defaults to `include`. New values may be added in<br>the future, such as an approximate mode.<br>|
|fullTextFilterTerm|query|string|false|Text search term.|
|fullTextFilterFields|query|[string]|false|A comma separated list of fields to sort returned results by.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|totalItems|include|
|totalItems|exclude|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "relations": [
        {
          "targetRef": "string",
          "type": "string"
        }
      ],
      "spec": {
        "property1": null,
        "property2": null
      },
      "metadata": {
        "links": [
          {
            "type": "string",
            "icon": "string",
            "title": "string",
            "url": "string"
          }
        ],
        "tags": [
          "string"
        ],
        "annotations": {
          "property1": "string",
          "property2": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "description": "string",
        "title": "string",
        "namespace": "string",
        "name": "string",
        "etag": "string",
        "uid": "string",
        "property1": null,
        "property2": null
      },
      "kind": "string",
      "apiVersion": "string"
    }
  ],
  "totalItems": 0,
  "pageInfo": {
    "nextCursor": "string",
    "prevCursor": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="getentitiesbyquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[EntitiesQueryResponse](#schemaentitiesqueryresponse)|
|400|Bad Request|An error response from the backend.|[Error](#schemaerror)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## QueryEntitiesByPredicate

<a id="opIdQueryEntitiesByPredicate"></a>

> Code samples

```bash
curl http://localhost:7007/api/catalog/entities/by-query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "cursor": "string",
    "limit": 0,
    "offset": 0,
    "orderBy": [
      {
        "field": "string",
        "order": "asc"
      }
    ],
    "fullTextFilter": {
      "term": "string",
      "fields": [
        "string"
      ]
    },
    "fields": [
      "string"
    ],
    "totalItems": "include",
    "query": {
      "property1": null,
      "property2": null
    }
  }'
```

`POST /entities/by-query`

Query entities using predicate-based filters.

> Body parameter

```json
{
  "cursor": "string",
  "limit": 0,
  "offset": 0,
  "orderBy": [
    {
      "field": "string",
      "order": "asc"
    }
  ],
  "fullTextFilter": {
    "term": "string",
    "fields": [
      "string"
    ]
  },
  "fields": [
    "string"
  ],
  "totalItems": "include",
  "query": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="queryentitiesbypredicate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» cursor|body|string|false|none|
|» limit|body|number|false|none|
|» offset|body|number|false|none|
|» orderBy|body|[object]|false|none|
|» » field|body|string|true|none|
|» » order|body|string|true|none|
|» fullTextFilter|body|object|false|none|
|» » term|body|string|false|none|
|» » fields|body|[string]|false|none|
|» fields|body|[string]|false|none|
|» totalItems|body|string|false|Controls whether the response's `totalItems` field is<br>computed. Pass `exclude` to skip the count when the caller<br>doesn't need it. Defaults to `include`.<br>|
|» query|body|[JsonObject](#schemajsonobject)|false|A type representing all allowed JSON object values.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » order|asc|
|» » order|desc|
|» totalItems|include|
|» totalItems|exclude|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "relations": [
        {
          "targetRef": "string",
          "type": "string"
        }
      ],
      "spec": {
        "property1": null,
        "property2": null
      },
      "metadata": {
        "links": [
          {
            "type": "string",
            "icon": "string",
            "title": "string",
            "url": "string"
          }
        ],
        "tags": [
          "string"
        ],
        "annotations": {
          "property1": "string",
          "property2": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "description": "string",
        "title": "string",
        "namespace": "string",
        "name": "string",
        "etag": "string",
        "uid": "string",
        "property1": null,
        "property2": null
      },
      "kind": "string",
      "apiVersion": "string"
    }
  ],
  "totalItems": 0,
  "pageInfo": {
    "nextCursor": "string",
    "prevCursor": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="queryentitiesbypredicate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[EntitiesQueryResponse](#schemaentitiesqueryresponse)|
|400|Bad Request|An error response from the backend.|[Error](#schemaerror)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## GetEntityFacets

<a id="opIdGetEntityFacets"></a>

> Code samples

```bash
curl 'http://localhost:7007/api/catalog/entity-facets?facet=kind' \
  -H 'Accept: application/json'
```

`GET /entity-facets`

Get all entity facets that match the given filters.

<h3 id="getentityfacets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|facet|query|[string]|true|none|
|filter|query|[string]|false|You can pass in one or more filter sets that get matched against each entity.<br>Each filter set is a number of conditions that all have to match for the<br>condition to be true (conditions effectively have an AND between them). At least<br>one filter set has to be true for the entity to be part of the result set<br>(filter sets effectively have an OR between them).<br><br>Example:<br><br>```text<br>/entities/by-query?filter=kind=user,metadata.namespace=default&filter=kind=group,spec.type<br><br>  Return entities that match<br><br>    Filter set 1:<br>      Condition 1: kind = user<br>                  AND<br>      Condition 2: metadata.namespace = default<br><br>    OR<br><br>    Filter set 2:<br>      Condition 1: kind = group<br>                  AND<br>      Condition 2: spec.type exists<br>```<br><br>Each condition is either on the form `<key>`, or on the form `<key>=<value>`.<br>The first form asserts on the existence of a certain key (with any value), and<br>the second asserts that the key exists and has a certain value. All checks are<br>always case _insensitive_.<br><br>In all cases, the key is a simplified JSON path in a given piece of entity data.<br>Each part of the path is a key of an object, and the traversal also descends<br>through arrays. There are two special forms:<br><br>- Array items that are simple value types (such as strings) match on a key-value<br>  pair where the key is the item as a string, and the value is the string `true`<br>- Relations can be matched on a `relations.<type>=<targetRef>` form<br><br>Let's look at a simplified example to illustrate the concept:<br><br>```json<br>{<br>  "a": {<br>    "b": ["c", { "d": 1 }],<br>    "e": 7<br>  }<br>}<br>```<br><br>This would match any one of the following conditions:<br><br>- `a`<br>- `a.b`<br>- `a.b.c`<br>- `a.b.c=true`<br>- `a.b.d`<br>- `a.b.d=1`<br>- `a.e`<br>- `a.e=7`<br><br>Some more real world usable examples:<br><br>- Return all orphaned entities:<br><br>  `/entities/by-query?filter=metadata.annotations.backstage.io/orphan=true`<br><br>- Return all users and groups:<br><br>  `/entities/by-query?filter=kind=user&filter=kind=group`<br><br>- Return all service components:<br><br>  `/entities/by-query?filter=kind=component,spec.type=service`<br><br>- Return all entities with the `java` tag:<br><br>  `/entities/by-query?filter=metadata.tags.java`<br><br>- Return all users who are members of the `ops` group (note that the full<br>  [reference](references.md) of the group is used):<br><br>  `/entities/by-query?filter=kind=user,relations.memberof=group:default/ops`<br>|

> Example responses

> 200 Response

```json
{
  "facets": {
    "property1": [
      {
        "value": "string",
        "count": 0
      }
    ],
    "property2": [
      {
        "value": "string",
        "count": 0
      }
    ]
  }
}
```

> 400 Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="getentityfacets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[EntityFacetsResponse](#schemaentityfacetsresponse)|
|400|Bad Request|An error response from the backend.|[Error](#schemaerror)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## QueryEntityFacetsByPredicate

<a id="opIdQueryEntityFacetsByPredicate"></a>

> Code samples

```bash
curl http://localhost:7007/api/catalog/entity-facets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "facets": [
      "string"
    ],
    "query": {
      "property1": null,
      "property2": null
    }
  }'
```

`POST /entity-facets`

Get entity facets using predicate-based filters.

> Body parameter

```json
{
  "facets": [
    "string"
  ],
  "query": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="queryentityfacetsbypredicate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» facets|body|[string]|true|none|
|» query|body|[JsonObject](#schemajsonobject)|false|A type representing all allowed JSON object values.|

> Example responses

> 200 Response

```json
{
  "facets": {
    "property1": [
      {
        "value": "string",
        "count": 0
      }
    ],
    "property2": [
      {
        "value": "string",
        "count": 0
      }
    ]
  }
}
```

> 400 Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="queryentityfacetsbypredicate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[EntityFacetsResponse](#schemaentityfacetsresponse)|
|400|Bad Request|An error response from the backend.|[Error](#schemaerror)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## ValidateEntity

<a id="opIdValidateEntity"></a>

> Code samples

```bash
curl http://localhost:7007/api/catalog/validate-entity \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "location": "string",
    "entity": {
      "property1": null,
      "property2": null
    }
  }'
```

`POST /validate-entity`

Validate that a passed in entity has no errors in schema.

> Body parameter

```json
{
  "location": "string",
  "entity": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="validateentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» location|body|string|true|none|
|» entity|body|object|true|none|
|» » **additionalProperties**|body|object|false|none|

> Example responses

> 400 Response

```json
{
  "errors": [
    {
      "name": "string",
      "message": "string",
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="validateentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|None|
|400|Bad Request|Validation errors.|Inline|

<h3 id="validateentity-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|true|none|none|
|» name|string|true|none|none|
|» message|string|true|none|none|
|» **additionalProperties**|object|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

<h1 id="catalog-locations">Locations</h1>

## GetLocations

<a id="opIdGetLocations"></a>

> Code samples

```bash
curl http://localhost:7007/api/catalog/locations \
  -H 'Accept: application/json'
```

`GET /locations`

Get all locations

> Example responses

> 200 Response

```json
[
  {
    "data": {
      "target": "string",
      "type": "string",
      "id": "string",
      "entityRef": "string"
    }
  }
]
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="getlocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|Inline|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<h3 id="getlocations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» data|[Location](#schemalocation)|true|none|Entity location for a specific entity.|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## CreateLocation

<a id="opIdCreateLocation"></a>

> Code samples

```bash
curl http://localhost:7007/api/catalog/locations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "target": "string",
    "type": "string"
  }'
```

`POST /locations`

Create a location for a given target.

> Body parameter

```json
{
  "target": "string",
  "type": "string"
}
```

<h3 id="createlocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|string|false|none|
|onConflict|query|string|false|Behavior when the location already exists. 'reject' (default) returns a 409 error, 'refresh' triggers a refresh of the existing location entity and returns 201.|
|body|body|object|true|none|
|» target|body|string|true|none|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|onConflict|refresh|
|onConflict|reject|

> Example responses

> 201 Response

```json
{
  "exists": true,
  "entities": [
    {
      "relations": [
        {
          "targetRef": "string",
          "type": "string"
        }
      ],
      "spec": {
        "property1": null,
        "property2": null
      },
      "metadata": {
        "links": [
          {
            "type": "string",
            "icon": "string",
            "title": "string",
            "url": "string"
          }
        ],
        "tags": [
          "string"
        ],
        "annotations": {
          "property1": "string",
          "property2": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "description": "string",
        "title": "string",
        "namespace": "string",
        "name": "string",
        "etag": "string",
        "uid": "string",
        "property1": null,
        "property2": null
      },
      "kind": "string",
      "apiVersion": "string"
    }
  ],
  "location": {
    "target": "string",
    "type": "string",
    "id": "string",
    "entityRef": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="createlocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|Inline|
|400|Bad Request|An error response from the backend.|[Error](#schemaerror)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<h3 id="createlocation-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exists|boolean|false|none|none|
|entities|[[Entity](#schemaentity)]|true|none|none|
|location|[Location](#schemalocation)|true|none|Entity location for a specific entity.|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## GetLocationsByQuery

<a id="opIdGetLocationsByQuery"></a>

> Code samples

```bash
curl http://localhost:7007/api/catalog/locations/by-query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "cursor": "string",
    "limit": 0,
    "query": {
      "property1": null,
      "property2": null
    }
  }'
```

`POST /locations/by-query`

Query for locations

> Body parameter

```json
{
  "cursor": "string",
  "limit": 0,
  "query": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="getlocationsbyquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» cursor|body|string|false|none|
|» limit|body|number|false|none|
|» query|body|[JsonObject](#schemajsonobject)|false|A type representing all allowed JSON object values.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "target": "string",
      "type": "string",
      "id": "string",
      "entityRef": "string"
    }
  ],
  "totalItems": 0,
  "pageInfo": {
    "nextCursor": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="getlocationsbyquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[LocationsQueryResponse](#schemalocationsqueryresponse)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## GetLocation

<a id="opIdGetLocation"></a>

> Code samples

```bash
curl http://localhost:7007/api/catalog/locations/string \
  -H 'Accept: application/json'
```

`GET /locations/{id}`

Get a location by id.

<h3 id="getlocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "target": "string",
  "type": "string",
  "id": "string",
  "entityRef": "string"
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="getlocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[Location](#schemalocation)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## UpdateLocation

<a id="opIdUpdateLocation"></a>

> Code samples

```bash
curl http://localhost:7007/api/catalog/locations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "type": "string",
    "target": "string"
  }'
```

`PUT /locations/{id}`

Update the type and target of an existing location by id.

> Body parameter

```json
{
  "type": "string",
  "target": "string"
}
```

<h3 id="updatelocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[LocationInput](#schemalocationinput)|true|none|
|» type|body|string|true|none|
|» target|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "target": "string",
  "type": "string",
  "id": "string",
  "entityRef": "string"
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="updatelocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[Location](#schemalocation)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## DeleteLocation

<a id="opIdDeleteLocation"></a>

> Code samples

```bash
curl http://localhost:7007/api/catalog/locations/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /locations/{id}`

Delete a location by id.

<h3 id="deletelocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="deletelocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|400|Bad Request|An error response from the backend.|[Error](#schemaerror)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## getLocationByEntity

<a id="opIdgetLocationByEntity"></a>

> Code samples

```bash
curl http://localhost:7007/api/catalog/locations/by-entity/string/string/string \
  -H 'Accept: application/json'
```

`GET /locations/by-entity/{kind}/{namespace}/{name}`

Get a location for entity.

<h3 id="getlocationbyentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|kind|path|string|true|none|
|namespace|path|string|true|none|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "target": "string",
  "type": "string",
  "id": "string",
  "entityRef": "string"
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="getlocationbyentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[Location](#schemalocation)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## AnalyzeLocation

<a id="opIdAnalyzeLocation"></a>

> Code samples

```bash
curl http://localhost:7007/api/catalog/analyze-location \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "catalogFileName": "string",
    "location": {
      "type": "string",
      "target": "string"
    }
  }'
```

`POST /analyze-location`

Validate a given location.

> Body parameter

```json
{
  "catalogFileName": "string",
  "location": {
    "type": "string",
    "target": "string"
  }
}
```

<h3 id="analyzelocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» catalogFileName|body|string|false|none|
|» location|body|[LocationInput](#schemalocationinput)|true|none|

> Example responses

> 200 Response

```json
{
  "generateEntities": [
    {
      "fields": [
        {
          "description": "string",
          "value": "string",
          "state": "analysisSuggestedValue",
          "field": "string"
        }
      ],
      "entity": {
        "apiVersion": "string",
        "kind": "string",
        "metadata": {
          "property1": null,
          "property2": null,
          "links": [
            {
              "type": "string",
              "icon": "string",
              "title": "string",
              "url": "string"
            }
          ],
          "tags": [
            "string"
          ],
          "annotations": {
            "property1": "string",
            "property2": "string"
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "description": "string",
          "title": "string",
          "namespace": "string",
          "name": "string",
          "etag": "string",
          "uid": "string"
        },
        "spec": {
          "property1": null,
          "property2": null
        },
        "relations": [
          {
            "targetRef": "string",
            "type": "string"
          }
        ]
      }
    }
  ],
  "existingEntityFiles": [
    {
      "entity": {
        "relations": [
          {
            "targetRef": "string",
            "type": "string"
          }
        ],
        "spec": {
          "property1": null,
          "property2": null
        },
        "metadata": {
          "links": [
            {
              "type": "string",
              "icon": "string",
              "title": "string",
              "url": "string"
            }
          ],
          "tags": [
            "string"
          ],
          "annotations": {
            "property1": "string",
            "property2": "string"
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "description": "string",
          "title": "string",
          "namespace": "string",
          "name": "string",
          "etag": "string",
          "uid": "string",
          "property1": null,
          "property2": null
        },
        "kind": "string",
        "apiVersion": "string"
      },
      "isRegistered": true,
      "location": {
        "target": "string",
        "type": "string"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="analyzelocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[AnalyzeLocationResponse](#schemaanalyzelocationresponse)|
|400|Bad Request|An error response from the backend.|[Error](#schemaerror)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

# Schemas

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|
|request|object|false|none|none|
|response|object|true|none|none|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_JsonObject">JsonObject</h2>
<!-- backwards compatibility -->
<a id="schemajsonobject"></a>
<a id="schema_JsonObject"></a>
<a id="tocSjsonobject"></a>
<a id="tocsjsonobject"></a>

```json
{
  "property1": null,
  "property2": null
}
```

A type representing all allowed JSON object values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_MapStringString">MapStringString</h2>
<!-- backwards compatibility -->
<a id="schemamapstringstring"></a>
<a id="schema_MapStringString"></a>
<a id="tocSmapstringstring"></a>
<a id="tocsmapstringstring"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

Construct a type with a set of properties K of type T

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<h2 id="tocS_EntityLink">EntityLink</h2>
<!-- backwards compatibility -->
<a id="schemaentitylink"></a>
<a id="schema_EntityLink"></a>
<a id="tocSentitylink"></a>
<a id="tocsentitylink"></a>

```json
{
  "type": "string",
  "icon": "string",
  "title": "string",
  "url": "string"
}
```

A link to external information that is related to the entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|An optional value to categorize links into specific groups|
|icon|string|false|none|An optional semantic key that represents a visual icon.|
|title|string|false|none|An optional descriptive title for the link.|
|url|string|true|none|The url to the external site, document, etc.|

<h2 id="tocS_EntityMeta">EntityMeta</h2>
<!-- backwards compatibility -->
<a id="schemaentitymeta"></a>
<a id="schema_EntityMeta"></a>
<a id="tocSentitymeta"></a>
<a id="tocsentitymeta"></a>

```json
{
  "links": [
    {
      "type": "string",
      "icon": "string",
      "title": "string",
      "url": "string"
    }
  ],
  "tags": [
    "string"
  ],
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "description": "string",
  "title": "string",
  "namespace": "string",
  "name": "string",
  "etag": "string",
  "uid": "string",
  "property1": null,
  "property2": null
}
```

Metadata fields common to all versions/kinds of entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[EntityLink](#schemaentitylink)]|false|none|A list of external hyperlinks related to the entity.|
|tags|[string]|false|none|A list of single-valued strings, to for example classify catalog entities in<br>various ways.|
|annotations|[MapStringString](#schemamapstringstring)|false|none|Construct a type with a set of properties K of type T|
|labels|[MapStringString](#schemamapstringstring)|false|none|Construct a type with a set of properties K of type T|
|description|string|false|none|A short (typically relatively few words, on one line) description of the<br>entity.|
|title|string|false|none|A display name of the entity, to be presented in user interfaces instead<br>of the `name` property above, when available.<br>This field is sometimes useful when the `name` is cumbersome or ends up<br>being perceived as overly technical. The title generally does not have<br>as stringent format requirements on it, so it may contain special<br>characters and be more explanatory. Do keep it very short though, and<br>avoid situations where a title can be confused with the name of another<br>entity, or where two entities share a title.<br>Note that this is only for display purposes, and may be ignored by some<br>parts of the code. Entity references still always make use of the `name`<br>property, not the title.|
|namespace|string|false|none|The namespace that the entity belongs to.|
|name|string|true|none|The name of the entity.<br>Must be unique within the catalog at any given point in time, for any<br>given namespace + kind pair. This value is part of the technical<br>identifier of the entity, and as such it will appear in URLs, database<br>tables, entity references, and similar. It is subject to restrictions<br>regarding what characters are allowed.<br>If you want to use a different, more human readable string with fewer<br>restrictions on it in user interfaces, see the `title` field below.|
|etag|string|false|none|An opaque string that changes for each update operation to any part of<br>the entity, including metadata.<br>This field can not be set by the user at creation time, and the server<br>will reject an attempt to do so. The field will be populated in read<br>operations. The field can (optionally) be specified when performing<br>update or delete operations, and the server will then reject the<br>operation if it does not match the current stored value.|
|uid|string|false|none|A globally unique ID for the entity.<br>This field can not be set by the user at creation time, and the server<br>will reject an attempt to do so. The field will be populated in read<br>operations. The field can (optionally) be specified when performing<br>update or delete operations, but the server is free to reject requests<br>that do so in such a way that it breaks semantics.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_EntityRelation">EntityRelation</h2>
<!-- backwards compatibility -->
<a id="schemaentityrelation"></a>
<a id="schema_EntityRelation"></a>
<a id="tocSentityrelation"></a>
<a id="tocsentityrelation"></a>

```json
{
  "targetRef": "string",
  "type": "string"
}
```

A relation of a specific type to another entity in the catalog.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetRef|string|true|none|The entity ref of the target of this relation.|
|type|string|true|none|The type of the relation.|

<h2 id="tocS_Entity">Entity</h2>
<!-- backwards compatibility -->
<a id="schemaentity"></a>
<a id="schema_Entity"></a>
<a id="tocSentity"></a>
<a id="tocsentity"></a>

```json
{
  "relations": [
    {
      "targetRef": "string",
      "type": "string"
    }
  ],
  "spec": {
    "property1": null,
    "property2": null
  },
  "metadata": {
    "links": [
      {
        "type": "string",
        "icon": "string",
        "title": "string",
        "url": "string"
      }
    ],
    "tags": [
      "string"
    ],
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "description": "string",
    "title": "string",
    "namespace": "string",
    "name": "string",
    "etag": "string",
    "uid": "string",
    "property1": null,
    "property2": null
  },
  "kind": "string",
  "apiVersion": "string"
}
```

The parts of the format that's common to all versions/kinds of entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relations|[[EntityRelation](#schemaentityrelation)]|false|none|The relations that this entity has with other entities.|
|spec|[JsonObject](#schemajsonobject)|false|none|A type representing all allowed JSON object values.|
|metadata|[EntityMeta](#schemaentitymeta)|true|none|Metadata fields common to all versions/kinds of entity.|
|kind|string|true|none|The high level entity type being described.|
|apiVersion|string|true|none|The version of specification format for this particular entity that<br>this is written against.|

<h2 id="tocS_NullableEntity">NullableEntity</h2>
<!-- backwards compatibility -->
<a id="schemanullableentity"></a>
<a id="schema_NullableEntity"></a>
<a id="tocSnullableentity"></a>
<a id="tocsnullableentity"></a>

```json
{
  "relations": [
    {
      "targetRef": "string",
      "type": "string"
    }
  ],
  "spec": {
    "property1": null,
    "property2": null
  },
  "metadata": {
    "links": [
      {
        "type": "string",
        "icon": "string",
        "title": "string",
        "url": "string"
      }
    ],
    "tags": [
      "string"
    ],
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "description": "string",
    "title": "string",
    "namespace": "string",
    "name": "string",
    "etag": "string",
    "uid": "string",
    "property1": null,
    "property2": null
  },
  "kind": "string",
  "apiVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|The parts of the format that's common to all versions/kinds of entity.|
|relations|[[EntityRelation](#schemaentityrelation)]|false|none|The relations that this entity has with other entities.|
|spec|[JsonObject](#schemajsonobject)|false|none|A type representing all allowed JSON object values.|
|metadata|[EntityMeta](#schemaentitymeta)|true|none|Metadata fields common to all versions/kinds of entity.|
|kind|string|true|none|The high level entity type being described.|
|apiVersion|string|true|none|The version of specification format for this particular entity that<br>this is written against.|
|*anyOf*|null|false|none|none|

<h2 id="tocS_EntityAncestryResponse">EntityAncestryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaentityancestryresponse"></a>
<a id="schema_EntityAncestryResponse"></a>
<a id="tocSentityancestryresponse"></a>
<a id="tocsentityancestryresponse"></a>

```json
{
  "items": [
    {
      "parentEntityRefs": [
        "string"
      ],
      "entity": {
        "relations": [
          {
            "targetRef": "string",
            "type": "string"
          }
        ],
        "spec": {
          "property1": null,
          "property2": null
        },
        "metadata": {
          "links": [
            {
              "type": "string",
              "icon": "string",
              "title": "string",
              "url": "string"
            }
          ],
          "tags": [
            "string"
          ],
          "annotations": {
            "property1": "string",
            "property2": "string"
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "description": "string",
          "title": "string",
          "namespace": "string",
          "name": "string",
          "etag": "string",
          "uid": "string",
          "property1": null,
          "property2": null
        },
        "kind": "string",
        "apiVersion": "string"
      }
    }
  ],
  "rootEntityRef": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|none|
|rootEntityRef|string|true|none|none|

<h2 id="tocS_EntitiesBatchResponse">EntitiesBatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaentitiesbatchresponse"></a>
<a id="schema_EntitiesBatchResponse"></a>
<a id="tocSentitiesbatchresponse"></a>
<a id="tocsentitiesbatchresponse"></a>

```json
{
  "items": [
    {
      "relations": [
        {
          "targetRef": "string",
          "type": "string"
        }
      ],
      "spec": {
        "property1": null,
        "property2": null
      },
      "metadata": {
        "links": [
          {
            "type": "string",
            "icon": "string",
            "title": "string",
            "url": "string"
          }
        ],
        "tags": [
          "string"
        ],
        "annotations": {
          "property1": "string",
          "property2": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "description": "string",
        "title": "string",
        "namespace": "string",
        "name": "string",
        "etag": "string",
        "uid": "string",
        "property1": null,
        "property2": null
      },
      "kind": "string",
      "apiVersion": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[NullableEntity](#schemanullableentity)]|true|none|The list of entities, in the same order as the refs in the request. Entries<br>that are null signify that no entity existed with that ref.|

<h2 id="tocS_EntityFacet">EntityFacet</h2>
<!-- backwards compatibility -->
<a id="schemaentityfacet"></a>
<a id="schema_EntityFacet"></a>
<a id="tocSentityfacet"></a>
<a id="tocsentityfacet"></a>

```json
{
  "value": "string",
  "count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|none|
|count|number|true|none|none|

<h2 id="tocS_EntityFacetsResponse">EntityFacetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaentityfacetsresponse"></a>
<a id="schema_EntityFacetsResponse"></a>
<a id="tocSentityfacetsresponse"></a>
<a id="tocsentityfacetsresponse"></a>

```json
{
  "facets": {
    "property1": [
      {
        "value": "string",
        "count": 0
      }
    ],
    "property2": [
      {
        "value": "string",
        "count": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facets|object|true|none|none|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "target": "string",
  "type": "string",
  "id": "string",
  "entityRef": "string"
}
```

Entity location for a specific entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target|string|true|none|none|
|type|string|true|none|none|
|id|string|true|none|none|
|entityRef|string|true|none|The entity ref of the corresponding Location kind entity, e.g. location:default/generated-<sha1hex>.|

<h2 id="tocS_LocationSpec">LocationSpec</h2>
<!-- backwards compatibility -->
<a id="schemalocationspec"></a>
<a id="schema_LocationSpec"></a>
<a id="tocSlocationspec"></a>
<a id="tocslocationspec"></a>

```json
{
  "target": "string",
  "type": "string"
}
```

Holds the entity location information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_LocationsQueryResponse">LocationsQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemalocationsqueryresponse"></a>
<a id="schema_LocationsQueryResponse"></a>
<a id="tocSlocationsqueryresponse"></a>
<a id="tocslocationsqueryresponse"></a>

```json
{
  "items": [
    {
      "target": "string",
      "type": "string",
      "id": "string",
      "entityRef": "string"
    }
  ],
  "totalItems": 0,
  "pageInfo": {
    "nextCursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Location](#schemalocation)]|true|none|The list of locations paginated by a specific query.|
|totalItems|number|true|none|none|
|pageInfo|object|true|none|none|

<h2 id="tocS_AnalyzeLocationExistingEntity">AnalyzeLocationExistingEntity</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzelocationexistingentity"></a>
<a id="schema_AnalyzeLocationExistingEntity"></a>
<a id="tocSanalyzelocationexistingentity"></a>
<a id="tocsanalyzelocationexistingentity"></a>

```json
{
  "entity": {
    "relations": [
      {
        "targetRef": "string",
        "type": "string"
      }
    ],
    "spec": {
      "property1": null,
      "property2": null
    },
    "metadata": {
      "links": [
        {
          "type": "string",
          "icon": "string",
          "title": "string",
          "url": "string"
        }
      ],
      "tags": [
        "string"
      ],
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "description": "string",
      "title": "string",
      "namespace": "string",
      "name": "string",
      "etag": "string",
      "uid": "string",
      "property1": null,
      "property2": null
    },
    "kind": "string",
    "apiVersion": "string"
  },
  "isRegistered": true,
  "location": {
    "target": "string",
    "type": "string"
  }
}
```

If the folder pointed to already contained catalog info yaml files, they are
read and emitted like this so that the frontend can inform the user that it
located them and can make sure to register them as well if they weren't
already

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity|[Entity](#schemaentity)|true|none|The parts of the format that's common to all versions/kinds of entity.|
|isRegistered|boolean|true|none|none|
|location|[LocationSpec](#schemalocationspec)|true|none|Holds the entity location information.|

<h2 id="tocS_RecursivePartialEntityRelation">RecursivePartialEntityRelation</h2>
<!-- backwards compatibility -->
<a id="schemarecursivepartialentityrelation"></a>
<a id="schema_RecursivePartialEntityRelation"></a>
<a id="tocSrecursivepartialentityrelation"></a>
<a id="tocsrecursivepartialentityrelation"></a>

```json
{
  "targetRef": "string",
  "type": "string"
}
```

A relation of a specific type to another entity in the catalog.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetRef|string|false|none|The entity ref of the target of this relation.|
|type|string|false|none|The type of the relation.|

<h2 id="tocS_RecursivePartialEntityMeta">RecursivePartialEntityMeta</h2>
<!-- backwards compatibility -->
<a id="schemarecursivepartialentitymeta"></a>
<a id="schema_RecursivePartialEntityMeta"></a>
<a id="tocSrecursivepartialentitymeta"></a>
<a id="tocsrecursivepartialentitymeta"></a>

```json
{
  "property1": null,
  "property2": null,
  "links": [
    {
      "type": "string",
      "icon": "string",
      "title": "string",
      "url": "string"
    }
  ],
  "tags": [
    "string"
  ],
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "description": "string",
  "title": "string",
  "namespace": "string",
  "name": "string",
  "etag": "string",
  "uid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|
|links|[[EntityLink](#schemaentitylink)]|false|none|A list of external hyperlinks related to the entity.|
|tags|[string]|false|none|A list of single-valued strings, to for example classify catalog entities in<br>various ways.|
|annotations|[MapStringString](#schemamapstringstring)|false|none|Construct a type with a set of properties K of type T|
|labels|[MapStringString](#schemamapstringstring)|false|none|Construct a type with a set of properties K of type T|
|description|string|false|none|A short (typically relatively few words, on one line) description of the<br>entity.|
|title|string|false|none|A display name of the entity, to be presented in user interfaces instead<br>of the `name` property above, when available.<br>This field is sometimes useful when the `name` is cumbersome or ends up<br>being perceived as overly technical. The title generally does not have<br>as stringent format requirements on it, so it may contain special<br>characters and be more explanatory. Do keep it very short though, and<br>avoid situations where a title can be confused with the name of another<br>entity, or where two entities share a title.<br>Note that this is only for display purposes, and may be ignored by some<br>parts of the code. Entity references still always make use of the `name`<br>property, not the title.|
|namespace|string|false|none|The namespace that the entity belongs to.|
|name|string|false|none|The name of the entity.<br>Must be unique within the catalog at any given point in time, for any<br>given namespace + kind pair. This value is part of the technical<br>identifier of the entity, and as such it will appear in URLs, database<br>tables, entity references, and similar. It is subject to restrictions<br>regarding what characters are allowed.<br>If you want to use a different, more human readable string with fewer<br>restrictions on it in user interfaces, see the `title` field below.|
|etag|string|false|none|An opaque string that changes for each update operation to any part of<br>the entity, including metadata.<br>This field can not be set by the user at creation time, and the server<br>will reject an attempt to do so. The field will be populated in read<br>operations. The field can (optionally) be specified when performing<br>update or delete operations, and the server will then reject the<br>operation if it does not match the current stored value.|
|uid|string|false|none|A globally unique ID for the entity.<br>This field can not be set by the user at creation time, and the server<br>will reject an attempt to do so. The field will be populated in read<br>operations. The field can (optionally) be specified when performing<br>update or delete operations, but the server is free to reject requests<br>that do so in such a way that it breaks semantics.|

<h2 id="tocS_RecursivePartialEntity">RecursivePartialEntity</h2>
<!-- backwards compatibility -->
<a id="schemarecursivepartialentity"></a>
<a id="schema_RecursivePartialEntity"></a>
<a id="tocSrecursivepartialentity"></a>
<a id="tocsrecursivepartialentity"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {
    "property1": null,
    "property2": null,
    "links": [
      {
        "type": "string",
        "icon": "string",
        "title": "string",
        "url": "string"
      }
    ],
    "tags": [
      "string"
    ],
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "description": "string",
    "title": "string",
    "namespace": "string",
    "name": "string",
    "etag": "string",
    "uid": "string"
  },
  "spec": {
    "property1": null,
    "property2": null
  },
  "relations": [
    {
      "targetRef": "string",
      "type": "string"
    }
  ]
}
```

Makes all keys of an entire hierarchy optional.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|The version of specification format for this particular entity that<br>this is written against.|
|kind|string|false|none|The high level entity type being described.|
|metadata|[RecursivePartialEntityMeta](#schemarecursivepartialentitymeta)|false|none|none|
|spec|[JsonObject](#schemajsonobject)|false|none|A type representing all allowed JSON object values.|
|relations|[[RecursivePartialEntityRelation](#schemarecursivepartialentityrelation)]|false|none|The relations that this entity has with other entities.|

<h2 id="tocS_AnalyzeLocationEntityField">AnalyzeLocationEntityField</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzelocationentityfield"></a>
<a id="schema_AnalyzeLocationEntityField"></a>
<a id="tocSanalyzelocationentityfield"></a>
<a id="tocsanalyzelocationentityfield"></a>

```json
{
  "description": "string",
  "value": "string",
  "state": "analysisSuggestedValue",
  "field": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|A text to show to the user to inform about the choices made. Like, it could say<br>"Found a CODEOWNERS file that covers this target, so we suggest leaving this<br>field empty; which would currently make it owned by X" where X is taken from the<br>codeowners file.|
|value|string \| null|true|none|none|
|state|string|true|none|The outcome of the analysis for this particular field|
|field|string|true|none|e.g. "spec.owner"? The frontend needs to know how to "inject" the field into the<br>entity again if the user wants to change it|

#### Enumerated Values

|Property|Value|
|---|---|
|state|analysisSuggestedValue|
|state|analysisSuggestedNoValue|
|state|needsUserInput|

<h2 id="tocS_AnalyzeLocationGenerateEntity">AnalyzeLocationGenerateEntity</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzelocationgenerateentity"></a>
<a id="schema_AnalyzeLocationGenerateEntity"></a>
<a id="tocSanalyzelocationgenerateentity"></a>
<a id="tocsanalyzelocationgenerateentity"></a>

```json
{
  "fields": [
    {
      "description": "string",
      "value": "string",
      "state": "analysisSuggestedValue",
      "field": "string"
    }
  ],
  "entity": {
    "apiVersion": "string",
    "kind": "string",
    "metadata": {
      "property1": null,
      "property2": null,
      "links": [
        {
          "type": "string",
          "icon": "string",
          "title": "string",
          "url": "string"
        }
      ],
      "tags": [
        "string"
      ],
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "description": "string",
      "title": "string",
      "namespace": "string",
      "name": "string",
      "etag": "string",
      "uid": "string"
    },
    "spec": {
      "property1": null,
      "property2": null
    },
    "relations": [
      {
        "targetRef": "string",
        "type": "string"
      }
    ]
  }
}
```

This is some form of representation of what the analyzer could deduce.
We should probably have a chat about how this can best be conveyed to
the frontend. It'll probably contain a (possibly incomplete) entity, plus
enough info for the frontend to know what form data to show to the user
for overriding/completing the info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[[AnalyzeLocationEntityField](#schemaanalyzelocationentityfield)]|true|none|none|
|entity|[RecursivePartialEntity](#schemarecursivepartialentity)|true|none|Makes all keys of an entire hierarchy optional.|

<h2 id="tocS_AnalyzeLocationResponse">AnalyzeLocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzelocationresponse"></a>
<a id="schema_AnalyzeLocationResponse"></a>
<a id="tocSanalyzelocationresponse"></a>
<a id="tocsanalyzelocationresponse"></a>

```json
{
  "generateEntities": [
    {
      "fields": [
        {
          "description": "string",
          "value": "string",
          "state": "analysisSuggestedValue",
          "field": "string"
        }
      ],
      "entity": {
        "apiVersion": "string",
        "kind": "string",
        "metadata": {
          "property1": null,
          "property2": null,
          "links": [
            {
              "type": "string",
              "icon": "string",
              "title": "string",
              "url": "string"
            }
          ],
          "tags": [
            "string"
          ],
          "annotations": {
            "property1": "string",
            "property2": "string"
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "description": "string",
          "title": "string",
          "namespace": "string",
          "name": "string",
          "etag": "string",
          "uid": "string"
        },
        "spec": {
          "property1": null,
          "property2": null
        },
        "relations": [
          {
            "targetRef": "string",
            "type": "string"
          }
        ]
      }
    }
  ],
  "existingEntityFiles": [
    {
      "entity": {
        "relations": [
          {
            "targetRef": "string",
            "type": "string"
          }
        ],
        "spec": {
          "property1": null,
          "property2": null
        },
        "metadata": {
          "links": [
            {
              "type": "string",
              "icon": "string",
              "title": "string",
              "url": "string"
            }
          ],
          "tags": [
            "string"
          ],
          "annotations": {
            "property1": "string",
            "property2": "string"
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "description": "string",
          "title": "string",
          "namespace": "string",
          "name": "string",
          "etag": "string",
          "uid": "string",
          "property1": null,
          "property2": null
        },
        "kind": "string",
        "apiVersion": "string"
      },
      "isRegistered": true,
      "location": {
        "target": "string",
        "type": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|generateEntities|[[AnalyzeLocationGenerateEntity](#schemaanalyzelocationgenerateentity)]|true|none|none|
|existingEntityFiles|[[AnalyzeLocationExistingEntity](#schemaanalyzelocationexistingentity)]|true|none|none|

<h2 id="tocS_LocationInput">LocationInput</h2>
<!-- backwards compatibility -->
<a id="schemalocationinput"></a>
<a id="schema_LocationInput"></a>
<a id="tocSlocationinput"></a>
<a id="tocslocationinput"></a>

```json
{
  "type": "string",
  "target": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|target|string|true|none|none|

<h2 id="tocS_EntitiesQueryResponse">EntitiesQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaentitiesqueryresponse"></a>
<a id="schema_EntitiesQueryResponse"></a>
<a id="tocSentitiesqueryresponse"></a>
<a id="tocsentitiesqueryresponse"></a>

```json
{
  "items": [
    {
      "relations": [
        {
          "targetRef": "string",
          "type": "string"
        }
      ],
      "spec": {
        "property1": null,
        "property2": null
      },
      "metadata": {
        "links": [
          {
            "type": "string",
            "icon": "string",
            "title": "string",
            "url": "string"
          }
        ],
        "tags": [
          "string"
        ],
        "annotations": {
          "property1": "string",
          "property2": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "description": "string",
        "title": "string",
        "namespace": "string",
        "name": "string",
        "etag": "string",
        "uid": "string",
        "property1": null,
        "property2": null
      },
      "kind": "string",
      "apiVersion": "string"
    }
  ],
  "totalItems": 0,
  "pageInfo": {
    "nextCursor": "string",
    "prevCursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Entity](#schemaentity)]|true|none|The list of entities paginated by a specific filter.|
|totalItems|number|true|none|none|
|pageInfo|object|true|none|none|
