<h1 id="ory-keto-api">Ory Keto API</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Documentation for all of Ory Keto's REST APIs. gRPC is documented separately.

Email: <a href="mailto:hi@ory.sh">hi@ory.sh</a> 
License: Apache 2.0

<h1 id="ory-keto-api-relationship">relationship</h1>

## Create a Relationship

<a id="opIdcreateRelationship"></a>

> Code samples

```bash
curl http://localhost:4466/admin/relation-tuples \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "namespace": "string",
    "object": "string",
    "relation": "string",
    "subject_id": "string",
    "subject_set": {
      "namespace": "string",
      "object": "string",
      "relation": "string"
    }
  }'
```

`PUT /admin/relation-tuples`

Use this endpoint to create a relationship.

> Body parameter

```json
{
  "namespace": "string",
  "object": "string",
  "relation": "string",
  "subject_id": "string",
  "subject_set": {
    "namespace": "string",
    "object": "string",
    "relation": "string"
  }
}
```

<h3 id="create-a-relationship-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[createRelationshipBody](#schemacreaterelationshipbody)|false|none|
|» namespace|body|string|false|Namespace to query|
|» object|body|string|false|Object to query|
|» relation|body|string|false|Relation to query|
|» subject_id|body|string|false|SubjectID to query<br><br>Either SubjectSet or SubjectID can be provided.|
|» subject_set|body|[subjectSet](#schemasubjectset)|false|none|

> Example responses

> 201 Response

```json
{
  "namespace": "string",
  "object": "string",
  "relation": "string",
  "subject_id": "string",
  "subject_set": {
    "namespace": "string",
    "object": "string",
    "relation": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="create-a-relationship-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|relationship|[relationship](#schemarelationship)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Relationships

<a id="opIddeleteRelationships"></a>

> Code samples

```bash
curl http://localhost:4466/admin/relation-tuples \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /admin/relation-tuples`

Use this endpoint to delete relationships

<h3 id="delete-relationships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|query|string|false|Namespace of the Relationship|
|object|query|string|false|Object of the Relationship|
|relation|query|string|false|Relation of the Relationship|
|subject_id|query|string|false|SubjectID of the Relationship|
|subject_set.namespace|query|string|false|Namespace of the Subject Set|
|subject_set.object|query|string|false|Object of the Subject Set|
|subject_set.relation|query|string|false|Relation of the Subject Set|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="delete-relationships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Patch Multiple Relationships

<a id="opIdpatchRelationships"></a>

> Code samples

```bash
curl http://localhost:4466/admin/relation-tuples \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "action": "insert",
      "relation_tuple": {
        "namespace": "string",
        "object": "string",
        "relation": "string",
        "subject_id": "string",
        "subject_set": {
          "namespace": "string",
          "object": "string",
          "relation": "string"
        }
      }
    }
  ]'
```

`PATCH /admin/relation-tuples`

Use this endpoint to patch one or more relationships.

> Body parameter

```json
[
  {
    "action": "insert",
    "relation_tuple": {
      "namespace": "string",
      "object": "string",
      "relation": "string",
      "subject_id": "string",
      "subject_set": {
        "namespace": "string",
        "object": "string",
        "relation": "string"
      }
    }
  }
]
```

<h3 id="patch-multiple-relationships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[relationshipPatch](#schemarelationshippatch)]|false|none|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="patch-multiple-relationships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Query namespaces

<a id="opIdlistRelationshipNamespaces"></a>

> Code samples

```bash
curl http://localhost:4466/namespaces \
  -H 'Accept: application/json'
```

`GET /namespaces`

Get all namespaces

> Example responses

> 200 Response

```json
{
  "namespaces": [
    {
      "name": "string"
    }
  ]
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="query-namespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|relationshipNamespaces|[relationshipNamespaces](#schemarelationshipnamespaces)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Check the syntax of an OPL file

<a id="opIdcheckOplSyntax"></a>

> Code samples

```bash
curl http://localhost:4466/opl/syntax/check \
  -X POST \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  -d 'string'
```

`POST /opl/syntax/check`

The OPL file is expected in the body of the request.

> Body parameter

```text
string
```

<h3 id="check-the-syntax-of-an-opl-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[checkOplSyntaxBody](#schemacheckoplsyntaxbody)|false|none|

> Example responses

> 200 Response

```json
{
  "errors": [
    {
      "end": {
        "Line": 0,
        "column": 0
      },
      "message": "string",
      "start": {
        "Line": 0,
        "column": 0
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="check-the-syntax-of-an-opl-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|checkOplSyntaxResult|[checkOplSyntaxResult](#schemacheckoplsyntaxresult)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Query relationships

<a id="opIdgetRelationships"></a>

> Code samples

```bash
curl http://localhost:4466/relation-tuples \
  -H 'Accept: application/json'
```

`GET /relation-tuples`

Get all relationships that match the query. Only the namespace field is required.

<h3 id="query-relationships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_size|query|integer(int64)|false|Items per Page<br><br>This is the number of items per page to return.<br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|page_token|query|string|false|Next Page Token<br><br>The next page token.<br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|namespace|query|string|false|Namespace of the Relationship|
|object|query|string|false|Object of the Relationship|
|relation|query|string|false|Relation of the Relationship|
|subject_id|query|string|false|SubjectID of the Relationship|
|subject_set.namespace|query|string|false|Namespace of the Subject Set|
|subject_set.object|query|string|false|Object of the Subject Set|
|subject_set.relation|query|string|false|Relation of the Subject Set|

> Example responses

> 200 Response

```json
{
  "next_page_token": "string",
  "relation_tuples": [
    {
      "namespace": "string",
      "object": "string",
      "relation": "string",
      "subject_id": "string",
      "subject_set": {
        "namespace": "string",
        "object": "string",
        "relation": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="query-relationships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|relationships|[relationships](#schemarelationships)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ory-keto-api-metadata">metadata</h1>

## Check HTTP Server Status

<a id="opIdisAlive"></a>

> Code samples

```bash
curl http://localhost:4466/health/alive \
  -H 'Accept: application/json'
```

`GET /health/alive`

This endpoint returns a HTTP 200 status code when Ory Keto is accepting incoming
HTTP requests. This status does currently not include checks whether the database connection is working.

If the service supports TLS Edge Termination, this endpoint does not require the
`X-Forwarded-Proto` header to be set.

Be aware that if you are running multiple nodes of this service, the health status will never
refer to the cluster state, only to a single instance.

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

<h3 id="check-http-server-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ory Keto is ready to accept connections.|Inline|
|default|Default|Unexpected error|Inline|

<h3 id="check-http-server-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Always "ok".|

<aside class="success">
This operation does not require authentication
</aside>

## Check HTTP Server and Database Status

<a id="opIdisReady"></a>

> Code samples

```bash
curl http://localhost:4466/health/ready \
  -H 'Accept: application/json'
```

`GET /health/ready`

This endpoint returns a HTTP 200 status code when Ory Keto is up running and the environment dependencies (e.g.
the database) are responsive as well.

If the service supports TLS Edge Termination, this endpoint does not require the
`X-Forwarded-Proto` header to be set.

Be aware that if you are running multiple nodes of Ory Keto, the health status will never
refer to the cluster state, only to a single instance.

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

> 503 Response

```json
{
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="check-http-server-and-database-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ory Keto is ready to accept requests.|Inline|
|503|Service Unavailable|Ory Kratos is not yet ready to accept requests.|Inline|
|default|Default|Unexpected error|Inline|

<h3 id="check-http-server-and-database-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Always "ok".|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|true|none|Errors contains a list of errors that caused the not ready status.|
|» **additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return Running Software Version.

<a id="opIdgetVersion"></a>

> Code samples

```bash
curl http://localhost:4466/version \
  -H 'Accept: application/json'
```

`GET /version`

This endpoint returns the version of Ory Keto.

If the service supports TLS Edge Termination, this endpoint does not require the
`X-Forwarded-Proto` header to be set.

Be aware that if you are running multiple nodes of this service, the version will never
refer to the cluster state, only to a single instance.

> Example responses

> 200 Response

```json
{
  "version": "string"
}
```

<h3 id="return-running-software-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the Ory Keto version.|Inline|

<h3 id="return-running-software-version-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|true|none|The version of Ory Keto.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ory-keto-api-permission">permission</h1>

## Batch check permissions

<a id="opIdbatchCheckPermission"></a>

> Code samples

```bash
curl http://localhost:4466/relation-tuples/batch/check \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "tuples": [
      {
        "namespace": "string",
        "object": "string",
        "relation": "string",
        "subject_id": "string",
        "subject_set": {
          "namespace": "string",
          "object": "string",
          "relation": "string"
        }
      }
    ]
  }'
```

`POST /relation-tuples/batch/check`

To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.com/docs/keto/concepts/api-overview).

> Body parameter

```json
{
  "tuples": [
    {
      "namespace": "string",
      "object": "string",
      "relation": "string",
      "subject_id": "string",
      "subject_set": {
        "namespace": "string",
        "object": "string",
        "relation": "string"
      }
    }
  ]
}
```

<h3 id="batch-check-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max-depth|query|integer(int64)|false|none|
|body|body|[batchCheckPermissionBody](#schemabatchcheckpermissionbody)|false|none|
|» tuples|body|[[relationship](#schemarelationship)]|false|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "allowed": true,
      "error": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="batch-check-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|batchCheckPermissionResult|[batchCheckPermissionResult](#schemabatchcheckpermissionresult)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Check a permission

<a id="opIdcheckPermissionOrError"></a>

> Code samples

```bash
curl http://localhost:4466/relation-tuples/check \
  -H 'Accept: application/json'
```

`GET /relation-tuples/check`

To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.com/docs/keto/concepts/api-overview).

<h3 id="check-a-permission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|query|string|false|Namespace of the Relationship|
|object|query|string|false|Object of the Relationship|
|relation|query|string|false|Relation of the Relationship|
|subject_id|query|string|false|SubjectID of the Relationship|
|subject_set.namespace|query|string|false|Namespace of the Subject Set|
|subject_set.object|query|string|false|Object of the Subject Set|
|subject_set.relation|query|string|false|Relation of the Subject Set|
|max-depth|query|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "allowed": true
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 403 Response

```json
{
  "allowed": true
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="check-a-permission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|checkPermissionResult|[checkPermissionResult](#schemacheckpermissionresult)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|403|Forbidden|checkPermissionResult|[checkPermissionResult](#schemacheckpermissionresult)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Check a permission

<a id="opIdpostCheckPermissionOrError"></a>

> Code samples

```bash
curl http://localhost:4466/relation-tuples/check \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "namespace": "string",
    "object": "string",
    "relation": "string",
    "subject_id": "string",
    "subject_set": {
      "namespace": "string",
      "object": "string",
      "relation": "string"
    }
  }'
```

`POST /relation-tuples/check`

To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.com/docs/keto/concepts/api-overview).

> Body parameter

```json
{
  "namespace": "string",
  "object": "string",
  "relation": "string",
  "subject_id": "string",
  "subject_set": {
    "namespace": "string",
    "object": "string",
    "relation": "string"
  }
}
```

<h3 id="check-a-permission-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max-depth|query|integer(int64)|false|none|
|body|body|[postCheckPermissionOrErrorBody](#schemapostcheckpermissionorerrorbody)|false|none|
|» namespace|body|string|false|Namespace to query|
|» object|body|string|false|Object to query|
|» relation|body|string|false|Relation to query|
|» subject_id|body|string|false|SubjectID to query<br><br>Either SubjectSet or SubjectID can be provided.|
|» subject_set|body|[subjectSet](#schemasubjectset)|false|none|

> Example responses

> 200 Response

```json
{
  "allowed": true
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 403 Response

```json
{
  "allowed": true
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="check-a-permission-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|checkPermissionResult|[checkPermissionResult](#schemacheckpermissionresult)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|403|Forbidden|checkPermissionResult|[checkPermissionResult](#schemacheckpermissionresult)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Check a permission

<a id="opIdcheckPermission"></a>

> Code samples

```bash
curl http://localhost:4466/relation-tuples/check/openapi \
  -H 'Accept: application/json'
```

`GET /relation-tuples/check/openapi`

To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.com/docs/keto/concepts/api-overview).

<h3 id="check-a-permission-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|query|string|false|Namespace of the Relationship|
|object|query|string|false|Object of the Relationship|
|relation|query|string|false|Relation of the Relationship|
|subject_id|query|string|false|SubjectID of the Relationship|
|subject_set.namespace|query|string|false|Namespace of the Subject Set|
|subject_set.object|query|string|false|Object of the Subject Set|
|subject_set.relation|query|string|false|Relation of the Subject Set|
|max-depth|query|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "allowed": true
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="check-a-permission-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|checkPermissionResult|[checkPermissionResult](#schemacheckpermissionresult)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Check a permission

<a id="opIdpostCheckPermission"></a>

> Code samples

```bash
curl http://localhost:4466/relation-tuples/check/openapi \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "namespace": "string",
    "object": "string",
    "relation": "string",
    "subject_id": "string",
    "subject_set": {
      "namespace": "string",
      "object": "string",
      "relation": "string"
    }
  }'
```

`POST /relation-tuples/check/openapi`

To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.com/docs/keto/concepts/api-overview).

> Body parameter

```json
{
  "namespace": "string",
  "object": "string",
  "relation": "string",
  "subject_id": "string",
  "subject_set": {
    "namespace": "string",
    "object": "string",
    "relation": "string"
  }
}
```

<h3 id="check-a-permission-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max-depth|query|integer(int64)|false|none|
|body|body|[postCheckPermissionBody](#schemapostcheckpermissionbody)|false|none|
|» namespace|body|string|false|Namespace to query|
|» object|body|string|false|Object to query|
|» relation|body|string|false|Relation to query|
|» subject_id|body|string|false|SubjectID to query<br><br>Either SubjectSet or SubjectID can be provided.|
|» subject_set|body|[subjectSet](#schemasubjectset)|false|none|

> Example responses

> 200 Response

```json
{
  "allowed": true
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="check-a-permission-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|checkPermissionResult|[checkPermissionResult](#schemacheckpermissionresult)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Expand a Relationship into permissions.

<a id="opIdexpandPermissions"></a>

> Code samples

```bash
curl 'http://localhost:4466/relation-tuples/expand?namespace=string&object=string&relation=string' \
  -H 'Accept: application/json'
```

`GET /relation-tuples/expand`

Use this endpoint to expand a relationship tuple into permissions.

<h3 id="expand-a-relationship-into-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|query|string|true|Namespace of the Subject Set|
|object|query|string|true|Object of the Subject Set|
|relation|query|string|true|Relation of the Subject Set|
|max-depth|query|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "children": [
    {}
  ],
  "tuple": {
    "namespace": "string",
    "object": "string",
    "relation": "string",
    "subject_id": "string",
    "subject_set": {
      "namespace": "string",
      "object": "string",
      "relation": "string"
    }
  },
  "type": "union"
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="expand-a-relationship-into-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|expandedPermissionTree|[expandedPermissionTree](#schemaexpandedpermissiontree)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_DefaultError">DefaultError</h2>
<!-- backwards compatibility -->
<a id="schemadefaulterror"></a>
<a id="schema_DefaultError"></a>
<a id="tocSdefaulterror"></a>
<a id="tocsdefaulterror"></a>

```json
null
```

From https://go.dev/wiki/CodeReviewComments#receiver-type:
> Can function or methods, either concurrently or when called from this method, be mutating the receiver? A value type creates a copy of the receiver when the method is invoked, so outside updates will not be applied to this receiver. If changes must be visible in the original receiver, the receiver must be a pointer.
> If the receiver is a struct, array or slice and any of its elements is a pointer to something that might be mutating,
> prefer a pointer receiver, as it will make the intention clearer to the reader.
> Don’t mix receiver types. Choose either pointers or struct types for all available methods.

<h2 id="tocS_ParseError">ParseError</h2>
<!-- backwards compatibility -->
<a id="schemaparseerror"></a>
<a id="schema_ParseError"></a>
<a id="tocSparseerror"></a>
<a id="tocsparseerror"></a>

```json
{
  "end": {
    "Line": 0,
    "column": 0
  },
  "message": "string",
  "start": {
    "Line": 0,
    "column": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|[SourcePosition](#schemasourceposition)|false|none|none|
|message|string|false|none|none|
|start|[SourcePosition](#schemasourceposition)|false|none|none|

<h2 id="tocS_SourcePosition">SourcePosition</h2>
<!-- backwards compatibility -->
<a id="schemasourceposition"></a>
<a id="schema_SourcePosition"></a>
<a id="tocSsourceposition"></a>
<a id="tocssourceposition"></a>

```json
{
  "Line": 0,
  "column": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Line|integer(int64)|false|none|none|
|column|integer(int64)|false|none|none|

<h2 id="tocS_UUID">UUID</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_UUID"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"string"
```

<h2 id="tocS_batchCheckPermissionBody">batchCheckPermissionBody</h2>
<!-- backwards compatibility -->
<a id="schemabatchcheckpermissionbody"></a>
<a id="schema_batchCheckPermissionBody"></a>
<a id="tocSbatchcheckpermissionbody"></a>
<a id="tocsbatchcheckpermissionbody"></a>

```json
{
  "tuples": [
    {
      "namespace": "string",
      "object": "string",
      "relation": "string",
      "subject_id": "string",
      "subject_set": {
        "namespace": "string",
        "object": "string",
        "relation": "string"
      }
    }
  ]
}
```

Batch Check Permission Body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tuples|[[relationship](#schemarelationship)]|false|none|none|

<h2 id="tocS_batchCheckPermissionResult">batchCheckPermissionResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchcheckpermissionresult"></a>
<a id="schema_batchCheckPermissionResult"></a>
<a id="tocSbatchcheckpermissionresult"></a>
<a id="tocsbatchcheckpermissionresult"></a>

```json
{
  "results": [
    {
      "allowed": true,
      "error": "string"
    }
  ]
}
```

Batch Check Permission Result

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[checkPermissionResultWithError](#schemacheckpermissionresultwitherror)]|true|none|An array of check results. The order aligns with the input order.|

<h2 id="tocS_checkOplSyntaxBody">checkOplSyntaxBody</h2>
<!-- backwards compatibility -->
<a id="schemacheckoplsyntaxbody"></a>
<a id="schema_checkOplSyntaxBody"></a>
<a id="tocScheckoplsyntaxbody"></a>
<a id="tocscheckoplsyntaxbody"></a>

```json
"string"
```

Ory Permission Language Document

<h2 id="tocS_checkOplSyntaxResult">checkOplSyntaxResult</h2>
<!-- backwards compatibility -->
<a id="schemacheckoplsyntaxresult"></a>
<a id="schema_checkOplSyntaxResult"></a>
<a id="tocScheckoplsyntaxresult"></a>
<a id="tocscheckoplsyntaxresult"></a>

```json
{
  "errors": [
    {
      "end": {
        "Line": 0,
        "column": 0
      },
      "message": "string",
      "start": {
        "Line": 0,
        "column": 0
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[ParseError](#schemaparseerror)]|false|none|The list of syntax errors|

<h2 id="tocS_checkPermissionResult">checkPermissionResult</h2>
<!-- backwards compatibility -->
<a id="schemacheckpermissionresult"></a>
<a id="schema_checkPermissionResult"></a>
<a id="tocScheckpermissionresult"></a>
<a id="tocscheckpermissionresult"></a>

```json
{
  "allowed": true
}
```

The content of the allowed field is mirrored in the HTTP status code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|boolean|true|none|whether the relation tuple is allowed|

<h2 id="tocS_checkPermissionResultWithError">checkPermissionResultWithError</h2>
<!-- backwards compatibility -->
<a id="schemacheckpermissionresultwitherror"></a>
<a id="schema_checkPermissionResultWithError"></a>
<a id="tocScheckpermissionresultwitherror"></a>
<a id="tocscheckpermissionresultwitherror"></a>

```json
{
  "allowed": true,
  "error": "string"
}
```

Check Permission Result With Error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|boolean|true|none|whether the relation tuple is allowed|
|error|string|false|none|any error generated while checking the relation tuple|

<h2 id="tocS_createRelationshipBody">createRelationshipBody</h2>
<!-- backwards compatibility -->
<a id="schemacreaterelationshipbody"></a>
<a id="schema_createRelationshipBody"></a>
<a id="tocScreaterelationshipbody"></a>
<a id="tocscreaterelationshipbody"></a>

```json
{
  "namespace": "string",
  "object": "string",
  "relation": "string",
  "subject_id": "string",
  "subject_set": {
    "namespace": "string",
    "object": "string",
    "relation": "string"
  }
}
```

Create Relationship Request Body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespace|string|false|none|Namespace to query|
|object|string|false|none|Object to query|
|relation|string|false|none|Relation to query|
|subject_id|string|false|none|SubjectID to query<br><br>Either SubjectSet or SubjectID can be provided.|
|subject_set|[subjectSet](#schemasubjectset)|false|none|none|

<h2 id="tocS_errorGeneric">errorGeneric</h2>
<!-- backwards compatibility -->
<a id="schemaerrorgeneric"></a>
<a id="schema_errorGeneric"></a>
<a id="tocSerrorgeneric"></a>
<a id="tocserrorgeneric"></a>

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {
      "property1": null,
      "property2": null
    },
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

The standard Ory JSON API error format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[genericError](#schemagenericerror)|true|none|none|

<h2 id="tocS_expandedPermissionTree">expandedPermissionTree</h2>
<!-- backwards compatibility -->
<a id="schemaexpandedpermissiontree"></a>
<a id="schema_expandedPermissionTree"></a>
<a id="tocSexpandedpermissiontree"></a>
<a id="tocsexpandedpermissiontree"></a>

```json
{
  "children": [
    {
      "children": [
        {}
      ],
      "tuple": {
        "namespace": "string",
        "object": "string",
        "relation": "string",
        "subject_id": "string",
        "subject_set": {
          "namespace": "string",
          "object": "string",
          "relation": "string"
        }
      },
      "type": "union"
    }
  ],
  "tuple": {
    "namespace": "string",
    "object": "string",
    "relation": "string",
    "subject_id": "string",
    "subject_set": {
      "namespace": "string",
      "object": "string",
      "relation": "string"
    }
  },
  "type": "union"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|children|[[expandedPermissionTree](#schemaexpandedpermissiontree)]|false|none|The children of the node, possibly none.|
|tuple|[relationship](#schemarelationship)|false|none|Relationship|
|type|string|true|none|The type of the node.<br>union TreeNodeUnion<br>exclusion TreeNodeExclusion<br>intersection TreeNodeIntersection<br>leaf TreeNodeLeaf<br>tuple_to_subject_set TreeNodeTupleToSubjectSet<br>computed_subject_set TreeNodeComputedSubjectSet<br>not TreeNodeNot<br>unspecified TreeNodeUnspecified|

#### Enumerated Values

|Property|Value|
|---|---|
|type|union|
|type|exclusion|
|type|intersection|
|type|leaf|
|type|tuple_to_subject_set|
|type|computed_subject_set|
|type|not|
|type|unspecified|

<h2 id="tocS_genericError">genericError</h2>
<!-- backwards compatibility -->
<a id="schemagenericerror"></a>
<a id="schema_genericError"></a>
<a id="tocSgenericerror"></a>
<a id="tocsgenericerror"></a>

```json
{
  "code": 404,
  "debug": "SQL field \"foo\" is not a bool.",
  "details": {
    "property1": null,
    "property2": null
  },
  "id": "string",
  "message": "The resource could not be found",
  "reason": "User with ID 1234 does not exist.",
  "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
  "status": "Not Found"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|false|none|The status code|
|debug|string|false|none|Debug information<br><br>This field is often not exposed to protect against leaking<br>sensitive information.|
|details|object|false|none|Further error details|
|id|string|false|none|The error ID<br><br>Useful when trying to identify various errors in application logic.|
|message|string|true|none|Error message<br><br>The error's message.|
|reason|string|false|none|A human-readable reason for the error|
|request|string|false|none|The request ID<br><br>The request ID is often exposed internally in order to trace<br>errors across service architectures. This is often a UUID.|
|status|string|false|none|The status description|

<h2 id="tocS_healthNotReadyStatus">healthNotReadyStatus</h2>
<!-- backwards compatibility -->
<a id="schemahealthnotreadystatus"></a>
<a id="schema_healthNotReadyStatus"></a>
<a id="tocShealthnotreadystatus"></a>
<a id="tocshealthnotreadystatus"></a>

```json
{
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|Errors contains a list of errors that caused the not ready status.|

<h2 id="tocS_healthStatus">healthStatus</h2>
<!-- backwards compatibility -->
<a id="schemahealthstatus"></a>
<a id="schema_healthStatus"></a>
<a id="tocShealthstatus"></a>
<a id="tocshealthstatus"></a>

```json
{
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Status always contains "ok".|

<h2 id="tocS_namespace">namespace</h2>
<!-- backwards compatibility -->
<a id="schemanamespace"></a>
<a id="schema_namespace"></a>
<a id="tocSnamespace"></a>
<a id="tocsnamespace"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the namespace.|

<h2 id="tocS_postCheckPermissionBody">postCheckPermissionBody</h2>
<!-- backwards compatibility -->
<a id="schemapostcheckpermissionbody"></a>
<a id="schema_postCheckPermissionBody"></a>
<a id="tocSpostcheckpermissionbody"></a>
<a id="tocspostcheckpermissionbody"></a>

```json
{
  "namespace": "string",
  "object": "string",
  "relation": "string",
  "subject_id": "string",
  "subject_set": {
    "namespace": "string",
    "object": "string",
    "relation": "string"
  }
}
```

Check Permission using Post Request Body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespace|string|false|none|Namespace to query|
|object|string|false|none|Object to query|
|relation|string|false|none|Relation to query|
|subject_id|string|false|none|SubjectID to query<br><br>Either SubjectSet or SubjectID can be provided.|
|subject_set|[subjectSet](#schemasubjectset)|false|none|none|

<h2 id="tocS_postCheckPermissionOrErrorBody">postCheckPermissionOrErrorBody</h2>
<!-- backwards compatibility -->
<a id="schemapostcheckpermissionorerrorbody"></a>
<a id="schema_postCheckPermissionOrErrorBody"></a>
<a id="tocSpostcheckpermissionorerrorbody"></a>
<a id="tocspostcheckpermissionorerrorbody"></a>

```json
{
  "namespace": "string",
  "object": "string",
  "relation": "string",
  "subject_id": "string",
  "subject_set": {
    "namespace": "string",
    "object": "string",
    "relation": "string"
  }
}
```

Post Check Permission Or Error Body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespace|string|false|none|Namespace to query|
|object|string|false|none|Object to query|
|relation|string|false|none|Relation to query|
|subject_id|string|false|none|SubjectID to query<br><br>Either SubjectSet or SubjectID can be provided.|
|subject_set|[subjectSet](#schemasubjectset)|false|none|none|

<h2 id="tocS_relationQuery">relationQuery</h2>
<!-- backwards compatibility -->
<a id="schemarelationquery"></a>
<a id="schema_relationQuery"></a>
<a id="tocSrelationquery"></a>
<a id="tocsrelationquery"></a>

```json
{
  "namespace": "string",
  "object": "string",
  "relation": "string",
  "subject_id": "string",
  "subject_set": {
    "namespace": "string",
    "object": "string",
    "relation": "string"
  }
}
```

Relation Query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespace|string|false|none|Namespace to query|
|object|string|false|none|Object to query|
|relation|string|false|none|Relation to query|
|subject_id|string|false|none|SubjectID to query<br><br>Either SubjectSet or SubjectID can be provided.|
|subject_set|[subjectSet](#schemasubjectset)|false|none|none|

<h2 id="tocS_relationship">relationship</h2>
<!-- backwards compatibility -->
<a id="schemarelationship"></a>
<a id="schema_relationship"></a>
<a id="tocSrelationship"></a>
<a id="tocsrelationship"></a>

```json
{
  "namespace": "string",
  "object": "string",
  "relation": "string",
  "subject_id": "string",
  "subject_set": {
    "namespace": "string",
    "object": "string",
    "relation": "string"
  }
}
```

Relationship

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespace|string|true|none|Namespace of the Relation Tuple|
|object|string|true|none|Object of the Relation Tuple|
|relation|string|true|none|Relation of the Relation Tuple|
|subject_id|string|false|none|SubjectID of the Relation Tuple<br><br>Either SubjectSet or SubjectID can be provided.|
|subject_set|[subjectSet](#schemasubjectset)|false|none|none|

<h2 id="tocS_relationshipNamespaces">relationshipNamespaces</h2>
<!-- backwards compatibility -->
<a id="schemarelationshipnamespaces"></a>
<a id="schema_relationshipNamespaces"></a>
<a id="tocSrelationshipnamespaces"></a>
<a id="tocsrelationshipnamespaces"></a>

```json
{
  "namespaces": [
    {
      "name": "string"
    }
  ]
}
```

Relationship Namespace List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespaces|[[namespace](#schemanamespace)]|false|none|none|

<h2 id="tocS_relationshipPatch">relationshipPatch</h2>
<!-- backwards compatibility -->
<a id="schemarelationshippatch"></a>
<a id="schema_relationshipPatch"></a>
<a id="tocSrelationshippatch"></a>
<a id="tocsrelationshippatch"></a>

```json
{
  "action": "insert",
  "relation_tuple": {
    "namespace": "string",
    "object": "string",
    "relation": "string",
    "subject_id": "string",
    "subject_set": {
      "namespace": "string",
      "object": "string",
      "relation": "string"
    }
  }
}
```

Payload for patching a relationship

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|none|
|relation_tuple|[relationship](#schemarelationship)|false|none|Relationship|

#### Enumerated Values

|Property|Value|
|---|---|
|action|insert|
|action|delete|

<h2 id="tocS_relationships">relationships</h2>
<!-- backwards compatibility -->
<a id="schemarelationships"></a>
<a id="schema_relationships"></a>
<a id="tocSrelationships"></a>
<a id="tocsrelationships"></a>

```json
{
  "next_page_token": "string",
  "relation_tuples": [
    {
      "namespace": "string",
      "object": "string",
      "relation": "string",
      "subject_id": "string",
      "subject_set": {
        "namespace": "string",
        "object": "string",
        "relation": "string"
      }
    }
  ]
}
```

Paginated Relationship List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page_token|string|false|none|The opaque token to provide in a subsequent request<br>to get the next page. It is the empty string iff this is<br>the last page.|
|relation_tuples|[[relationship](#schemarelationship)]|false|none|none|

<h2 id="tocS_subjectSet">subjectSet</h2>
<!-- backwards compatibility -->
<a id="schemasubjectset"></a>
<a id="schema_subjectSet"></a>
<a id="tocSsubjectset"></a>
<a id="tocssubjectset"></a>

```json
{
  "namespace": "string",
  "object": "string",
  "relation": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespace|string|true|none|Namespace of the Subject Set|
|object|string|true|none|Object of the Subject Set|
|relation|string|true|none|Relation of the Subject Set|

<h2 id="tocS_unexpectedError">unexpectedError</h2>
<!-- backwards compatibility -->
<a id="schemaunexpectederror"></a>
<a id="schema_unexpectedError"></a>
<a id="tocSunexpectederror"></a>
<a id="tocsunexpectederror"></a>

```json
"string"
```

<h2 id="tocS_version">version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
{
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|Version is the service's version.|
