<h1 id="open-build-service-api">Open Build Service API v2.10.50</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The _Open Build Service API_ is a XML API.

To authenticate, use [HTTP basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) by passing the _Authorization_ header in the form of `Authorization: Basic <credentials>`.

There is no API versioning as there is no need for it right now.

Only rudimentary rate limiting is implemented, so please be gentle when using the API concurrently, especially with potentially expensive operations.
In case of abuse, we will limit/remove your access.

For command-line users, we recommend using [osc](https://github.com/openSUSE/osc) with its _api_ command to interact with the API.
It's as simple as this example: `osc api /about` (_about_ is one of the endpoints documented below)

Base URLs:

* <a href="https://api.apis.guru/">https://api.apis.guru/</a>

Web: <a href="https://openbuildservice.org/">Open Build Service</a> 
License: <a href="https://github.com/openSUSE/open-build-service/blob/master/COPYING">GNU General Public License v2.0</a>

<a href="https://openbuildservice.org/help/">Open Build Service - Documentation</a>

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="open-build-service-api-general-information">General Information</h1>

## Get information about API.

> Code samples

```bash
curl https://example.com/about
```

`GET /about`

Get generic information about the API.

<h3 id="get-information-about-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [about.xsd](../schema/about.xsd)<br>|Inline|

<h3 id="get-information-about-api-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commit|string|false|none|none|
|description|string|true|none|none|
|last_deployment|string|false|none|none|
|revision|string|true|none|none|
|title|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List all known architectures.

> Code samples

```bash
curl https://example.com/architectures \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /architectures`

Get a list of all known architectures known to OBS in general. This is not the list of architectures provided by this instance. Check the schedulers element from the `/configuration` route for this.


> Example responses

> 200 Response

```json
{
  "count": "4",
  "entry": [
    {
      "name": "aarch64"
    },
    {
      "name": "armv7l"
    },
    {
      "name": "s390x"
    },
    {
      "name": "x86_64"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

<h3 id="list-all-known-architectures-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="list-all-known-architectures-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|entry|[object]|false|none|none|
|» name|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Show one architecture.

> Code samples

```bash
curl https://example.com/architectures/x86_64 \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /architectures/{architecture_name}`

Show information about one architecture.

<h3 id="show-one-architecture-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|architecture_name|path|string|true|Architecture name|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "unknown_architecture",
  "summary": "Architecture does not exist: x999"
}
```

<h3 id="show-one-architecture-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="show-one-architecture-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

<h1 id="open-build-service-api-attributes">Attributes</h1>

## Delete an attribute and all its values in projects or packages.

> Code samples

```bash
curl https://example.com/attribute/OBS_TEST/OwnerRootProjectTest \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /attribute/{namespace}/{attribute_name}`

Delete an attribute and all its values in projects or packages.

This operation is the same as the one defined with [DELETE /attribute/{namespace}/{attribute_name}/_meta](#/Attributes/delete_attribute__namespace___attribute_name___meta)


<h3 id="delete-an-attribute-and-all-its-values-in-projects-or-packages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|path|string|true|The namespace|
|attribute_name|path|string|true|The name of the attribute|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find AttribNamespace"
}
```

<h3 id="delete-an-attribute-and-all-its-values-in-projects-or-packages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="delete-an-attribute-and-all-its-values-in-projects-or-packages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Shows attribute.

> Code samples

```bash
curl https://example.com/attribute/OBS_TEST/OwnerRootProjectTest/_meta \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /attribute/{namespace}/{attribute_name}/_meta`

Shows attribute.

<h3 id="shows-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|path|string|true|The namespace|
|attribute_name|path|string|true|The name of the attribute|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find AttribNamespace"
}
```

<h3 id="shows-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="shows-attribute-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|object|false|none|none|
|» value|[string]|false|none|none|
|count|integer|false|none|none|
|description|string|false|none|none|
|modifiable_by|[object]|false|none|none|
|» user|string|false|none|none|
|name|string|false|none|none|
|namespace|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Change attribute data. Create an attribute if it doesn't exist.

> Code samples

```bash
curl https://example.com/attribute/OBS_TEST/OwnerRootProjectTest/_meta \
  -X PUT \
  -H 'Content-Type: application/xml; charset=utf-8' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{"allowed":{"value":["DisableDevelTest","BugownerOnlyTest"]},"count":0,"description":"An example description for an attribute.","modifiable_by":[{"user":"user_login_name"}],"name":"OBS_TEST","namespace":"OwnerRootProjectTest"}'
```

`PUT /attribute/{namespace}/{attribute_name}/_meta`

This endpoint can be used for both, creating an attribute and updating it:
  * If the attribute passed as parameter doesn't exist, it will create the attribute.
  * If the attribute passed as parameter already exists, it will update the attribute.

This operation is the same as the one defined with [POST](#/Attributes/post_attribute__namespace___attribute_name___meta).


> Body parameter

```json
{
  "allowed": {
    "value": [
      "DisableDevelTest",
      "BugownerOnlyTest"
    ]
  },
  "count": 0,
  "description": "An example description for an attribute.",
  "modifiable_by": [
    {
      "user": "user_login_name"
    }
  ],
  "name": "OBS_TEST",
  "namespace": "OwnerRootProjectTest"
}
```

<h3 id="change-attribute-data-create-an-attribute-if-it-doesnt-exist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|path|string|true|The namespace|
|attribute_name|path|string|true|The name of the attribute|
|body|body|object|true|Attribute definition.|
|» allowed|body|object|false|none|
|» » value|body|[string]|false|none|
|» count|body|integer|false|none|
|» description|body|string|false|none|
|» modifiable_by|body|[object]|false|none|
|» » user|body|string|false|none|
|» name|body|string|false|none|
|» namespace|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 400 Response

```json
{
  "code": "validation_failed",
  "summary": "Document is empty, not allowed for attrib_type"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find AttribNamespace"
}
```

<h3 id="change-attribute-data-create-an-attribute-if-it-doesnt-exist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|400|Bad Request|Validation Failed.|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="change-attribute-data-create-an-attribute-if-it-doesnt-exist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Change attribute data. Create an attribute if it doesn't exist.

> Code samples

```bash
curl https://example.com/attribute/OBS_TEST/OwnerRootProjectTest/_meta \
  -X POST \
  -H 'Content-Type: application/xml; charset=utf-8' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{"allowed":{"value":["DisableDevelTest","BugownerOnlyTest"]},"count":0,"description":"An example description for an attribute.","modifiable_by":[{"user":"user_login_name"}],"name":"OBS_TEST","namespace":"OwnerRootProjectTest"}'
```

`POST /attribute/{namespace}/{attribute_name}/_meta`

This endpoint can be used for both, creating an attribute and updating it:
  * If the attribute passed as parameter doesn't exist, it will create the attribute.
  * If the attribute passed as parameter already exists, it will update the attribute.

This operation is the same as the one defined with [PUT](#/Attributes/put_attribute__namespace___attribute_name___meta).


> Body parameter

```json
{
  "allowed": {
    "value": [
      "DisableDevelTest",
      "BugownerOnlyTest"
    ]
  },
  "count": 0,
  "description": "An example description for an attribute.",
  "modifiable_by": [
    {
      "user": "user_login_name"
    }
  ],
  "name": "OBS_TEST",
  "namespace": "OwnerRootProjectTest"
}
```

<h3 id="change-attribute-data-create-an-attribute-if-it-doesnt-exist-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|path|string|true|The namespace|
|attribute_name|path|string|true|The name of the attribute|
|body|body|object|true|Attribute definition.|
|» allowed|body|object|false|none|
|» » value|body|[string]|false|none|
|» count|body|integer|false|none|
|» description|body|string|false|none|
|» modifiable_by|body|[object]|false|none|
|» » user|body|string|false|none|
|» name|body|string|false|none|
|» namespace|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 400 Response

```json
{
  "code": "validation_failed",
  "summary": "Document is empty, not allowed for attrib_type"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find AttribNamespace"
}
```

<h3 id="change-attribute-data-create-an-attribute-if-it-doesnt-exist-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|400|Bad Request|Validation Failed.|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="change-attribute-data-create-an-attribute-if-it-doesnt-exist-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Delete an attribute and all its values in projects or packages.

> Code samples

```bash
curl https://example.com/attribute/OBS_TEST/OwnerRootProjectTest/_meta \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /attribute/{namespace}/{attribute_name}/_meta`

Delete an attribute and all its values in projects or packages.

This operation is the same as the one defined with [DELETE /attribute/{namespace}/{attribute_name}](#/Attributes/delete_attribute__namespace___attribute_name_)


<h3 id="delete-an-attribute-and-all-its-values-in-projects-or-packages-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|path|string|true|The namespace|
|attribute_name|path|string|true|The name of the attribute|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find AttribNamespace"
}
```

<h3 id="delete-an-attribute-and-all-its-values-in-projects-or-packages-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="delete-an-attribute-and-all-its-values-in-projects-or-packages-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

<h1 id="open-build-service-api-attribute-namespaces">Attribute Namespaces</h1>

## List all attribute namespaces.

> Code samples

```bash
curl https://example.com/attribute \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /attribute`

List all attribute namespaces.

> Example responses

> 200 Response

```json
{
  "count": "2",
  "entry": [
    {
      "name": "OBS"
    },
    {
      "name": "openSUSE"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

<h3 id="list-all-attribute-namespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [directory.xsd](../schema/directory.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="list-all-attribute-namespaces-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|entry|[object]|false|none|none|
|» name|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## List all attributes below a namespace.

> Code samples

```bash
curl https://example.com/attribute/OBS_TEST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /attribute/{namespace}`

List all attributes under a given attribute namespace.

<h3 id="list-all-attributes-below-a-namespace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|path|string|true|The namespace|

> Example responses

> 200 Response

```json
{
  "count": "2",
  "entry": [
    {
      "name": "AutoCleanup"
    },
    {
      "name": "OwnerRootProject"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find AttribNamespace"
}
```

<h3 id="list-all-attributes-below-a-namespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [directory.xsd](../schema/directory.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="list-all-attributes-below-a-namespace-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|entry|[object]|false|none|none|
|» name|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Delete an attribute namespace and all attributes below.

> Code samples

```bash
curl https://example.com/attribute/OBS_TEST \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /attribute/{namespace}`

Delete an attribute namespace and all attributes below.

This operation is the same as the one defined with [DELETE /attribute/{namespace}/_meta](#/Attributes/delete_attribute__namespace___meta).


<h3 id="delete-an-attribute-namespace-and-all-attributes-below-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|path|string|true|The namespace|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

<h3 id="delete-an-attribute-namespace-and-all-attributes-below-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="delete-an-attribute-namespace-and-all-attributes-below-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Show attribute namespace.

> Code samples

```bash
curl https://example.com/attribute/OBS_TEST/_meta \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /attribute/{namespace}/_meta`

Shows attribute namespace.

<h3 id="show-attribute-namespace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|path|string|true|The namespace|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find AttribNamespace"
}
```

<h3 id="show-attribute-namespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [attribute_namespace_meta.xsd](../schema/attribute_namespace_meta.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="show-attribute-namespace-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modifiable_by|[object]|false|none|none|
|» user|string|false|none|none|
|name|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Change attribute namespace. Create an attribute namespace if it doesn't exist.

> Code samples

```bash
curl https://example.com/attribute/OBS_TEST/_meta \
  -X PUT \
  -H 'Content-Type: application/xml; charset=utf-8' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{"modifiable_by":[{"user":"user_login_name"}],"name":"OBS_TEST"}'
```

`PUT /attribute/{namespace}/_meta`

This endpoint can be used for both, creating an attribute namespace and updating it:
  * If the attribute namespace passed as parameter doesn't exist, it will create the attribute namespace.
  * If the attribute namespace passed as parameter already exists, it will update the namespace attribute.

This operation is the same as the one defined with [POST](#/Attributes/post_attribute__namespace___meta).


> Body parameter

```json
{
  "modifiable_by": [
    {
      "user": "user_login_name"
    }
  ],
  "name": "OBS_TEST"
}
```

<h3 id="change-attribute-namespace-create-an-attribute-namespace-if-it-doesnt-exist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|path|string|true|The namespace|
|body|body|object|true|Attribute namespace definition.<br><br>XML Schema used for body validation: [attribute_namespace_meta.xsd](../schema/attribute_namespace_meta.xsd)<br>|
|» modifiable_by|body|[object]|false|none|
|» » user|body|string|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 400 Response

```json
{
  "code": "validation_failed",
  "summary": "Document is empty, not allowed for attribute_namespace_meta"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find AttribNamespace"
}
```

<h3 id="change-attribute-namespace-create-an-attribute-namespace-if-it-doesnt-exist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|400|Bad Request|Validation Failed.|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="change-attribute-namespace-create-an-attribute-namespace-if-it-doesnt-exist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Change attribute namespace. Create an attribute namespace if it doesn't exist.

> Code samples

```bash
curl https://example.com/attribute/OBS_TEST/_meta \
  -X POST \
  -H 'Content-Type: application/xml; charset=utf-8' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{"modifiable_by":[{"user":"user_login_name"}],"name":"OBS_TEST"}'
```

`POST /attribute/{namespace}/_meta`

This endpoint can be used for both, creating an attribute namespace and updating it:
  * If the attribute namespace passed as parameter doesn't exist, it will create the attribute namespace.
  * If the attribute namespace passed as parameter already exists, it will update the namespace attribute.

This operation is the same as the one defined with [PUT](#/Attributes/put_attribute__namespace___meta).


> Body parameter

```json
{
  "modifiable_by": [
    {
      "user": "user_login_name"
    }
  ],
  "name": "OBS_TEST"
}
```

<h3 id="change-attribute-namespace-create-an-attribute-namespace-if-it-doesnt-exist-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|path|string|true|The namespace|
|body|body|object|true|Attribute namespace definition.<br><br>XML Schema used for body validation: [attribute_namespace_meta.xsd](../schema/attribute_namespace_meta.xsd)<br>|
|» modifiable_by|body|[object]|false|none|
|» » user|body|string|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 400 Response

```json
{
  "code": "validation_failed",
  "summary": "Document is empty, not allowed for attribute_namespace_meta"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find AttribNamespace"
}
```

<h3 id="change-attribute-namespace-create-an-attribute-namespace-if-it-doesnt-exist-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|400|Bad Request|Validation Failed.|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="change-attribute-namespace-create-an-attribute-namespace-if-it-doesnt-exist-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Delete an attribute namespace and all attributes below.

> Code samples

```bash
curl https://example.com/attribute/OBS_TEST/_meta \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /attribute/{namespace}/_meta`

Delete an attribute namespace and all attributes below.

This operation is the same as the one defined with [DELETE /attribute/{namespace}](#/Attributes/delete_attribute__namespace_).


<h3 id="delete-an-attribute-namespace-and-all-attributes-below-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|path|string|true|The namespace|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

<h3 id="delete-an-attribute-namespace-and-all-attributes-below-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="delete-an-attribute-namespace-and-all-attributes-below-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

<h1 id="open-build-service-api-build">Build</h1>

## Get a simple directory listing of all projects

> Code samples

```bash
curl https://example.com/build \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /build`

Get a simple directory listing of all projects

> Example responses

> 200 Response

```json
{
  "entry": [
    {
      "name": "openSUSE:Leap:15.1"
    },
    {
      "name": "openSUSE:Leap:15.2"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

<h3 id="get-a-simple-directory-listing-of-all-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK<br><br>XML Schema used for body validation: [directory.xsd](../schema/directory.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="get-a-simple-directory-listing-of-all-projects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|entry|[object]|false|none|none|
|» name|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Get a simple directory listing of all repositories for the specified project

> Code samples

```bash
curl https://example.com/build/home%3AAdmin \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /build/{project_name}`

Get a simple directory listing of all repositories for the specified project

<h3 id="get-a-simple-directory-listing-of-all-repositories-for-the-specified-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|

> Example responses

> 200 Response

```json
{
  "entry": [
    {
      "name": "openSUSE_Tumbleweed"
    },
    {
      "name": "openSUSE_Leap_15.3"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "unknown_project",
  "summary": "Project not found: <some project>."
}
```

<h3 id="get-a-simple-directory-listing-of-all-repositories-for-the-specified-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK<br><br>XML Schema used for body validation: [directory.xsd](../schema/directory.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Unknown project.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="get-a-simple-directory-listing-of-all-repositories-for-the-specified-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|entry|[object]|false|none|none|
|» name|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Apply different actions on builds/build processes of the specified project

> Code samples

```bash
curl 'https://example.com/build/home%3AAdmin?cmd=wipe' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /build/{project_name}`

Apply different actions on builds/build processes of the specified project

<h3 id="apply-different-actions-on-buildsbuild-processes-of-the-specified-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|
|package|query|string|false|Name of the package. Scope the commands to the specified package.|
|arch|query|string|false|Name of the build architecture. Scope the commands to the specified architectures.|
|repository|query|string|false|Name of the repository. Scope the commands to the specified repository.|
|cmd|query|string|true|**NOTE**: All commands described below, can be scoped to a package within the project by setting the `package`<br>parameter.<br><br>* `wipe`: Delete all binaries build by the project.<br>* `restartbuild`: Restart all running build processes inside the project.<br>* `rebuild`: Trigger a rebuild of all packages inside the project.<br>* `abortbuild`: Abort all running build processes for the specified project, marking them as failed.<br>* `killbuild`: Alias for `abortbuild`.<br>* `unpublish`: Delete all published package binaries, for the specified project, from the download repository.<br>* `sendsysrq`: Send a single sysrq character to the kernel of a running build. Character need to be specified<br>               through the `sysrq` parameter. Only a subset of debugging requests are supported (eg. 9, t or w).<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|cmd|wipe|
|cmd|restartbuild|
|cmd|killbuild|
|cmd|abortbuild|
|cmd|rebuild|
|cmd|unpublish|
|cmd|sendsysrq|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 400 Response

```json
{
  "code": "illegal_request",
  "summary": "unsupported POST command '<some command>' to <some url>."
}
```

> 403 Response

```json
{
  "code": "execute_cmd_no_permission",
  "summary": "No permission to execute command on package <some package> in project <some project>"
}
```

> 404 Response

```json
{
  "code": "unknown_project",
  "summary": "Project not found: <some project>."
}
```

<h3 id="apply-different-actions-on-buildsbuild-processes-of-the-specified-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|400|Bad Request|Illegal request.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|403|Forbidden|Execute command no permission.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Unknown project.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="apply-different-actions-on-buildsbuild-processes-of-the-specified-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Get the build results for packages, architectures and repositories of the specified project.

> Code samples

```bash
curl https://example.com/build/home%3AAdmin/_result \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /build/{project_name}/_result`

Get the build results for packages, architectures and repositories of the specified project.

<h3 id="get-the-build-results-for-packages-architectures-and-repositories-of-the-specified-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|
|view|query|string|false|Specify which sections should be included in the result list.<br><br>* `status`: Include detailed infos about the build status. **Default**<br>* `summary`: Include the summary of the status values.<br>* `binarylist`: Include a list of generated binary files.<br>|
|package|query|string|false|Name of the package. Limit results to the specified package.|
|arch|query|string|false|Name of the build architecture. Limit results to the specified build architecture.|
|repository|query|string|false|Name of the repository. Limit results to the specified repository.|
|lastbuild|query|boolean|false|Show the last build result (excludes current building job states).|
|locallink|query|boolean|false|Include build results from packages with project local links.|
|multibuild|query|boolean|false|Include build results from _multibuild definitions.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|summary|
|view|status|
|view|binarylist|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "unknown_project",
  "summary": "Project not found: <some project>."
}
```

<h3 id="get-the-build-results-for-packages-architectures-and-repositories-of-the-specified-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK.<br><br>XML Schema used for body validation: [buildresult.rng](../schema/buildresult.rng)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Unknown project.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="get-the-build-results-for-packages-architectures-and-repositories-of-the-specified-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[object]|false|none|none|
|» arch|string|false|none|none|
|» binarylist|[object]|false|none|none|
|» » binary|[object]|false|none|none|
|» » » filename|string|false|none|none|
|» » » mtime|string|false|none|none|
|» » » size|string|false|none|none|
|» » package|string|false|none|none|
|» code|string|false|none|none|
|» project|string|false|none|none|
|» repository|string|false|none|none|
|» state|string|false|none|none|
|» status|[object]|false|none|none|
|» » code|string|false|none|none|
|» » details|string|false|none|none|
|» » package|string|false|none|none|
|» summary|object|false|none|none|
|» » statuscount|[object]|false|none|none|
|» » » code|string|false|none|none|
|» » » count|string|false|none|none|
|state|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## List of all architectures the specified project builds against a given repository.

> Code samples

```bash
curl https://example.com/build/home%3AAdmin/openSUSE_Tumbleweed \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /build/{project_name}/{repository_name}`

List of all architectures the specified project builds against a given repository.

<h3 id="list-of-all-architectures-the-specified-project-builds-against-a-given-repository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|
|repository_name|path|string|true|Repository name|

> Example responses

> 200 Response

```json
{
  "entry": [
    {
      "name": "x86_64"
    },
    {
      "name": "i586"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": 404,
  "details": "404 project '<project_name>' has no repository '<repository_name>'",
  "summary": "project '<project_name>' has no repository '<repository_name>'"
}
```

<h3 id="list-of-all-architectures-the-specified-project-builds-against-a-given-repository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK<br><br>XML Schema used for body validation: [directory.xsd](../schema/directory.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="list-of-all-architectures-the-specified-project-builds-against-a-given-repository-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|entry|[object]|false|none|none|
|» name|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Show the build configuration for the specified repository.

> Code samples

```bash
curl https://example.com/build/home%3AAdmin/openSUSE_Tumbleweed/_buildconfig \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /build/{project_name}/{repository_name}/_buildconfig`

Show the build configuration for the specified repository. Includes all base package requirements, mappings and macros.


<h3 id="show-the-build-configuration-for-the-specified-repository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|
|repository_name|path|string|true|Repository name|

> Example responses

> 200 Response

```text
%define _project home:Admin

### from openSUSE.org:openSUSE:Leap:15.2
%define _repository standard

Macros:
%vendor obs://build.some.where/home:Admin
%_project home:Admin

### from openSUSE.org:openSUSE:Leap:15.2

%_repository standard
:Macros


Release: <CI_CNT>.<B_CNT> spec:lp152.<CI_CNT>.<B_CNT>
%define gcc_version 7

# testing new cycle algorithm
BuildFlags: genmetaalgo:1

# abort the build if the log file didn't move in an hour (seen in libreoffice builds)
BuildFlags: logidlelimit:3600

PublishFlags: ympdist:openSUSE%20Leap%2015.2

# Help with the switch to the gcc7 provided libs
Prefer: -libstdc++6-gcc7 -libtsan0-gcc7 -libgomp1-gcc7 -libgcc_s1-gcc7 -libatomic1-gcc7 -libcilkrts5-gcc7 -libitm1-gcc7
Prefer: -liblsan0-gcc7 -libmpx2-gcc7 -libubsan0-gcc7

```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "unknown_project",
  "summary": "Project not found: <some project>."
}
```

<h3 id="show-the-build-configuration-for-the-specified-repository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Unknown project.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="show-the-build-configuration-for-the-specified-repository-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Show the build dependencies of packages that are part of the project.

> Code samples

```bash
curl https://example.com/build/home%3AAdmin/openSUSE_Tumbleweed/x86_64/_builddepinfo \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /build/{project_name}/{repository_name}/{architecture_name}/_builddepinfo`

Show the build dependencies of packages that are part of the project, for a given repository and architecture.


<h3 id="show-the-build-dependencies-of-packages-that-are-part-of-the-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|
|repository_name|path|string|true|Repository name|
|architecture_name|path|string|true|Architecture name|
|package|query|string|false|Name of the package. Limit results to the specified package.|
|view|query|string|false|* `pkgnames`: Show whole package dependencies, instead of individual binaries.<br>* `revpkgnames`: Show which packages depend on the provided project/package for<br>  the given repository/architecture, and therefore a rebuild gets triggered on change.<br>* `order`: Show packages ordered by dependencies.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|pkgnames|
|view|revpkgnames|
|view|order|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "unknown_project",
  "summary": "Project not found: <some project>."
}
```

<h3 id="show-the-build-dependencies-of-packages-that-are-part-of-the-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Unknown project.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="show-the-build-dependencies-of-packages-that-are-part-of-the-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|package|[object]|false|none|none|
|» name|string|false|none|none|
|» pkgdep|[string]|false|none|none|
|» source|string|false|none|none|
|» subpkg|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## List all binaries (produced by all packages of the given project).

> Code samples

```bash
curl https://example.com/build/home%3AAdmin/openSUSE_Tumbleweed/x86_64/_repository \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /build/{project_name}/{repository_name}/{architecture_name}/_repository`

List all binaries (produced by all packages of the given project) for the specified repository and architecture.


<h3 id="list-all-binaries-produced-by-all-packages-of-the-given-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|
|repository_name|path|string|true|Repository name|
|architecture_name|path|string|true|Architecture name|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "unknown_project",
  "summary": "Project not found: <some project>."
}
```

<h3 id="list-all-binaries-produced-by-all-packages-of-the-given-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK.|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Unknown project.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="list-all-binaries-produced-by-all-packages-of-the-given-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|binary|[object]|false|none|none|
|» filename|string|false|none|none|
|» mtime|string|false|none|none|
|» size|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## List binaries built by the sources of the specified package.

> Code samples

```bash
curl https://example.com/build/home%3AAdmin/openSUSE_Tumbleweed/x86_64/ctris \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /build/{project_name}/{repository_name}/{architecture_name}/{package_name}`

List binaries built by the sources of the specified package.

<h3 id="list-binaries-built-by-the-sources-of-the-specified-package-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|
|repository_name|path|string|true|Repository name|
|architecture_name|path|string|true|Architecture name|
|package_name|path|string|true|Package name|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "unknown_project",
  "summary": "Project not found: <some project>."
}
```

<h3 id="list-binaries-built-by-the-sources-of-the-specified-package-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK.|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Unknown project.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="list-binaries-built-by-the-sources-of-the-specified-package-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|binary|[object]|false|none|none|
|» filename|string|false|none|none|
|» mtime|string|false|none|none|
|» size|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## getBuildProjectRepositoryArchPackageBuildinfo

<a id="opIdgetBuildProjectRepositoryArchPackageBuildinfo"></a>

> Code samples

```bash
curl https://example.com/build/home%3AAdmin/openSUSE_Tumbleweed/x86_64/ctris/_buildinfo \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /build/{project_name}/{repository_name}/{architecture_name}/{package_name}/_buildinfo`

This endpoint returns information about some specific artifact

<h3 id="getbuildprojectrepositoryarchpackagebuildinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|
|repository_name|path|string|true|Repository name|
|architecture_name|path|string|true|Architecture name|
|package_name|path|string|true|Package name|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "unknown_project",
  "summary": "Project not found: 1"
}
```

<h3 id="getbuildprojectrepositoryarchpackagebuildinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the artifact building information.|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Error: Not Found<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="getbuildprojectrepositoryarchpackagebuildinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arch|string|false|none|none|
|bcnt|string|false|none|none|
|bdep|object|false|none|none|
|» arch|string|false|none|none|
|» name|string|false|none|none|
|» notmeta|string|false|none|none|
|» preinstall|string|false|none|none|
|» project|string|false|none|none|
|» release|string|false|none|none|
|» repository|string|false|none|none|
|» version|string|false|none|none|
|debuginfo|integer|false|none|none|
|file|string|false|none|none|
|package|string|false|none|none|
|path|object|false|none|none|
|project|string|false|none|none|
|release|string|false|none|none|
|repository|string|false|none|none|
|rev|integer|false|none|none|
|specfile|string|false|none|none|
|srcmd5|string|false|none|none|
|subpack|string|false|none|none|
|verifymd5|string|false|none|none|
|versrel|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## getBuildProjectRepositoryArchPackageHistory

<a id="opIdgetBuildProjectRepositoryArchPackageHistory"></a>

> Code samples

```bash
curl https://example.com/build/home%3AAdmin/openSUSE_Tumbleweed/x86_64/ctris/_history \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /build/{project_name}/{repository_name}/{architecture_name}/{package_name}/_history`

This endpoint returns the build history for a specific artifact

<h3 id="getbuildprojectrepositoryarchpackagehistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|
|repository_name|path|string|true|Repository name|
|architecture_name|path|string|true|Architecture name|
|package_name|path|string|true|Package name|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "unknown_project",
  "summary": "Project not found: 1"
}
```

<h3 id="getbuildprojectrepositoryarchpackagehistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns ok when the build status is ok|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Error: Not Found<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="getbuildprojectrepositoryarchpackagehistory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entry|object|false|none|none|
|» bcnt|string|false|none|none|
|» duration|string|false|none|none|
|» rev|string|false|none|none|
|» srcmd5|string|false|none|none|
|» time|string|false|none|none|
|» versrel|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Show the build status of a currently running build job.

> Code samples

```bash
curl https://example.com/build/home%3AAdmin/openSUSE_Tumbleweed/x86_64/ctris/_jobstatus \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /build/{project_name}/{repository_name}/{architecture_name}/{package_name}/_jobstatus`

Show the build status of a currently running build job. Shows an empty result if no build job is running.


<h3 id="show-the-build-status-of-a-currently-running-build-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|
|repository_name|path|string|true|Repository name|
|architecture_name|path|string|true|Architecture name|
|package_name|path|string|true|Package name|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "unknown_project",
  "summary": "Project not found: <some project>."
}
```

<h3 id="show-the-build-status-of-a-currently-running-build-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK.<br><br>XML Schema used for body validation: [jobstatus.rng](../schema/jobstatus.rng)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Unknown project.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="show-the-build-status-of-a-currently-running-build-job-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|hostarch|string|false|none|none|
|jobid|string|false|none|none|
|lastduration|string|false|none|none|
|starttime|string|false|none|none|
|uri|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## getBuildProjectRepositoryArchPackageLog

<a id="opIdgetBuildProjectRepositoryArchPackageLog"></a>

> Code samples

```bash
curl https://example.com/build/home%3AAdmin/openSUSE_Tumbleweed/x86_64/ctris/_log \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /build/{project_name}/{repository_name}/{architecture_name}/{package_name}/_log`

This endpoint returns the last log file for a specific build artifact

<h3 id="getbuildprojectrepositoryarchpackagelog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|
|repository_name|path|string|true|Repository name|
|architecture_name|path|string|true|Architecture name|
|package_name|path|string|true|Package name|

> Example responses

> 200 Response

```text
[    0s] Memory limit set to 23077696KB
[    0s] Using BUILD_ROOT=/var/cache/obs/worker/root_2
[    0s] Using BUILD_ARCH=i586:i486:i386
[    0s] 
[    0s] 
[    0s] 5d0262043f4a started "build ctris.spec" at Tue Apr  6 12:27:31 UTC 2021.
[    0s] 
[    0s] Building ctris for project 'home:Admin' repository 'openSUSE_Tumbleweed' arch 'i586' srcmd5 '6b7c8d9cb5c5d36453c1dc8e102016b1'

```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 403 Response

```json
{
  "code": "download_binary_no_permission",
  "summary": "No permission to download binaries from package ctris, project home:Admin"
}
```

> 404 Response

```json
{
  "code": "unknown_project",
  "summary": "Project not found: 1"
}
```

<h3 id="getbuildprojectrepositoryarchpackagelog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|This endpoint returns the log file content<br>|None|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|403|Forbidden|Error: Not Acceptable<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Error: Not Found<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="getbuildprojectrepositoryarchpackagelog-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Show the reason for the lastly triggered build.

> Code samples

```bash
curl https://example.com/build/home%3AAdmin/openSUSE_Tumbleweed/x86_64/ctris/_reason \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /build/{project_name}/{repository_name}/{architecture_name}/{package_name}/_reason`

Details about the reason of the lastly triggered build.

<h3 id="show-the-reason-for-the-lastly-triggered-build-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|
|repository_name|path|string|true|Repository name|
|architecture_name|path|string|true|Architecture name|
|package_name|path|string|true|Package name|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "unknown_project",
  "summary": "Project not found: <some project>."
}
```

<h3 id="show-the-reason-for-the-lastly-triggered-build-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Unknown project.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="show-the-reason-for-the-lastly-triggered-build-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|explain|string|false|none|none|
|oldsource|string|false|none|none|
|time|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## getBuildProjectRepositoryArchPackageStatus

<a id="opIdgetBuildProjectRepositoryArchPackageStatus"></a>

> Code samples

```bash
curl https://example.com/build/home%3AAdmin/openSUSE_Tumbleweed/x86_64/ctris/_status \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /build/{project_name}/{repository_name}/{architecture_name}/{package_name}/_status`

This endpoint returns the building status for a specific artifact

<h3 id="getbuildprojectrepositoryarchpackagestatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|
|repository_name|path|string|true|Repository name|
|architecture_name|path|string|true|Architecture name|
|package_name|path|string|true|Package name|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "unknown_project",
  "summary": "Project not found: 1"
}
```

<h3 id="getbuildprojectrepositoryarchpackagestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns ok when the build status is ok|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Error: Not Found<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="getbuildprojectrepositoryarchpackagestatus-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|package|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Return a specific artifact file contents

<a id="opIdgetBuildProjectRepositoryArchitecturePackageFile"></a>

> Code samples

```bash
curl https://example.com/build/home%3AAdmin/openSUSE_Tumbleweed/x86_64/ctris/ctris-0.42.1-4.1.x86_64.rpm \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /build/{project_name}/{repository_name}/{architecture_name}/{package_name}/{file_name}`

Given a project, repository, architecture and package, retrieve the given file's content.


<h3 id="return-a-specific-artifact-file-contents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|
|repository_name|path|string|true|Repository name|
|architecture_name|path|string|true|Architecture name|
|package_name|path|string|true|Package name|
|file_name|path|string|true|The file name|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": "404 project 'home:Admin' has no repository '4'",
  "summary": "project 'home:Admin' has no repository '4'"
}
```

<h3 id="return-a-specific-artifact-file-contents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the artifact's actual file contents|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Error: Not Found<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="return-a-specific-artifact-file-contents-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Update a specific artifact file contents

<a id="opIdputBuildProjectRepositoryArchitecturePackageFile"></a>

> Code samples

```bash
curl https://example.com/build/home%3AAdmin/openSUSE_Tumbleweed/x86_64/_repository/ctris-0.42.1-4.1.x86_64.rpm \
  -X PUT \
  -H 'Content-Type: plain/text' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'string'
```

`PUT /build/{project_name}/{repository_name}/{architecture_name}/{package_name}/{file_name}`

Given a project, repository, architecture and package, update the given file's content.

This is for Admins only.


> Body parameter

```text
string
```

<h3 id="update-a-specific-artifact-file-contents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|
|repository_name|path|string|true|Repository name|
|architecture_name|path|string|true|Architecture name|
|package_name|path|[string]|true|Package name|
|file_name|path|string|true|The file name|
|body|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|package_name|_repository|

> Example responses

> 200 Response

```json
{
  "code": "ok"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 403 Response

```json
{
  "code": "upload_binary_no_permission",
  "summary": "No permission to upload binaries."
}
```

> 404 Response

```json
{
  "code": "404",
  "details": "404 project 'home:Admin' has no repository '4'",
  "summary": "project 'home:Admin' has no repository '4'"
}
```

<h3 id="update-a-specific-artifact-file-contents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updates the artifact's file contents|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|403|Forbidden|No permission to upload binaries for this project<br>|Inline|
|404|Not Found|Error: Not Found<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="update-a-specific-artifact-file-contents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## This endpoint returns details about an specific artifact

<a id="opIdgetBuildProjectRepositoryArchitecturePackageFileViewFileinfo"></a>

> Code samples

```bash
curl 'https://example.com/build/home%3AAdmin/openSUSE_Tumbleweed/x86_64/ctris/ctris-0.42.1-4.1.x86_64.rpm?view=fileinfo?view=fileinfo' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /build/{project_name}/{repository_name}/{architecture_name}/{package_name}/{file_name}?view=fileinfo`

Given a project, repository, architecture and package, retrieve the given artifact's details.


<h3 id="this-endpoint-returns-details-about-an-specific-artifact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|
|repository_name|path|string|true|Repository name|
|architecture_name|path|string|true|Architecture name|
|package_name|path|string|true|Package name|
|file_name|path|string|true|The file name|
|view|query|[string]|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|fileinfo|
|view|fileinfo_ext|

> Example responses

> 200 Response

```json
{
  "arch": "x86_64",
  "description": "ctris is a colorized, small and flexible Tetris(TM)-clone for the console. Go play!",
  "filename": "ctris-0.42.1-4.1.x86_64.rpm",
  "mtime": "1617270174",
  "name": "ctris",
  "provides": [
    "ctris = 0.42.1-6.2",
    "ctris(x86-64) = 0.42.1-6.2"
  ],
  "release": "4.1",
  "requires": [
    "libc.so.6()(64bit)",
    "libc.so.6(GLIBC_2.2.5)(64bit)"
  ],
  "size": "765725",
  "summary": "Console based tetris clone",
  "version": "0.42.1"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": "404 project 'home:Admin' has no repository '4'",
  "summary": "project 'home:Admin' has no repository '4'"
}
```

<h3 id="this-endpoint-returns-details-about-an-specific-artifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns details about the artifact|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Error: Not Found<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="this-endpoint-returns-details-about-an-specific-artifact-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arch|string|false|none|none|
|description|string|false|none|none|
|filename|string|false|none|none|
|mtime|string|false|none|none|
|name|string|false|none|none|
|provides|[string]|false|none|none|
|provides_ext|[object]|false|none|none|
|» dep|string|false|none|none|
|release|string|false|none|none|
|requires|[string]|false|none|none|
|requires_ext|[object]|false|none|none|
|» dep|string|false|none|none|
|» provided_by|object|false|none|none|
|» » arch|string|false|none|none|
|» » name|string|false|none|none|
|» » project|string|false|none|none|
|» » release|string|false|none|none|
|» » repository|string|false|none|none|
|» » version|string|false|none|none|
|size|string|false|none|none|
|source|string|false|none|none|
|summary|string|false|none|none|
|version|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

<h1 id="open-build-service-api-configuration">Configuration</h1>

## Display the configuration of this Open Build Service instance

> Code samples

```bash
curl https://example.com/configuration \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /configuration`

Display the configuration of this Open Build Service instance.


> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

<h3 id="display-the-configuration-of-this-open-build-service-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="display-the-configuration-of-this-open-build-service-instance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admin_email|string|false|none|none|
|allow_user_to_create_home_project|string|false|none|none|
|anonymous|string|false|none|none|
|change_password|string|false|none|none|
|cleanup_empty_projects|string|false|none|none|
|default_access_disabled|string|false|none|none|
|description|string|false|none|none|
|disable_publish_for_branches|string|false|none|none|
|disallow_group_creation|string|false|none|none|
|download_on_demand|string|false|none|none|
|enforce_project_keys|string|false|none|none|
|gravatar|string|false|none|none|
|hide_private_options|string|false|none|none|
|name|string|false|none|none|
|obs_url|string|false|none|none|
|registration|string|false|none|none|
|schedulers|object|false|none|none|
|» arch|[string]|false|none|none|
|title|string|false|none|none|
|tos_url|string|false|none|none|
|unlisted_projects_filter|string|false|none|none|
|unlisted_projects_filter_description|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Update the configuration of this Open Build Service instance

> Code samples

```bash
curl https://example.com/configuration \
  -X PUT \
  -H 'Content-Type: application/xml; charset=utf-8' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{"admin_email":"unconfigured@openbuildservice.org","allow_user_to_create_home_project":"on","anonymous":"on","change_password":"on","cleanup_empty_projects":"on","default_access_disabled":"off","description":"The openSUSE Build Service is the public instance of the Open Build Service (OBS)","disable_publish_for_branches":"on","disallow_group_creation":"off","download_on_demand":"on","enforce_project_keys":"off","gravatar":"on","hide_private_options":"off","name":"private","obs_url":"https://unconfigured.openbuildservice.org","registration":"allow","schedulers":{"arch":["armv7l","i586","x86_64"]},"title":"Open Build Service","tos_url":"https://en.opensuse.org/Terms_of_site","unlisted_projects_filter":"^home:.+","unlisted_projects_filter_description":"home projects"}'
```

`PUT /configuration`

Update the configuration of this Open Build Service instance.

This is for admins only.


> Body parameter

```json
{
  "admin_email": "unconfigured@openbuildservice.org",
  "allow_user_to_create_home_project": "on",
  "anonymous": "on",
  "change_password": "on",
  "cleanup_empty_projects": "on",
  "default_access_disabled": "off",
  "description": "The openSUSE Build Service is the public instance of the Open Build Service (OBS)",
  "disable_publish_for_branches": "on",
  "disallow_group_creation": "off",
  "download_on_demand": "on",
  "enforce_project_keys": "off",
  "gravatar": "on",
  "hide_private_options": "off",
  "name": "private",
  "obs_url": "https://unconfigured.openbuildservice.org",
  "registration": "allow",
  "schedulers": {
    "arch": [
      "armv7l",
      "i586",
      "x86_64"
    ]
  },
  "title": "Open Build Service",
  "tos_url": "https://en.opensuse.org/Terms_of_site",
  "unlisted_projects_filter": "^home:.+",
  "unlisted_projects_filter_description": "home projects"
}
```

<h3 id="update-the-configuration-of-this-open-build-service-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Configuration definition.|
|» admin_email|body|string|false|none|
|» allow_user_to_create_home_project|body|string|false|none|
|» anonymous|body|string|false|none|
|» change_password|body|string|false|none|
|» cleanup_empty_projects|body|string|false|none|
|» default_access_disabled|body|string|false|none|
|» description|body|string|false|none|
|» disable_publish_for_branches|body|string|false|none|
|» disallow_group_creation|body|string|false|none|
|» download_on_demand|body|string|false|none|
|» enforce_project_keys|body|string|false|none|
|» gravatar|body|string|false|none|
|» hide_private_options|body|string|false|none|
|» name|body|string|false|none|
|» obs_url|body|string|false|none|
|» registration|body|string|false|none|
|» schedulers|body|object|false|none|
|» » arch|body|[string]|false|none|
|» title|body|string|false|none|
|» tos_url|body|string|false|none|
|» unlisted_projects_filter|body|string|false|none|
|» unlisted_projects_filter_description|body|string|false|none|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 403 Response

```json
{
  "code": "no_permission_to_change",
  "summary": "The api has a different value for default_access_disabled configured in options.yml file. Remove it there first"
}
```

<h3 id="update-the-configuration-of-this-open-build-service-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|403|Forbidden|Forbidden.<br><br>In the example below, _default_access_disabled_ is one of the possible configuration options which is set in the options.yml file.<br>|Inline|

<h3 id="update-the-configuration-of-this-open-build-service-instance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admin_email|string|false|none|none|
|allow_user_to_create_home_project|string|false|none|none|
|anonymous|string|false|none|none|
|change_password|string|false|none|none|
|cleanup_empty_projects|string|false|none|none|
|default_access_disabled|string|false|none|none|
|description|string|false|none|none|
|disable_publish_for_branches|string|false|none|none|
|disallow_group_creation|string|false|none|none|
|download_on_demand|string|false|none|none|
|enforce_project_keys|string|false|none|none|
|gravatar|string|false|none|none|
|hide_private_options|string|false|none|none|
|name|string|false|none|none|
|obs_url|string|false|none|none|
|registration|string|false|none|none|
|schedulers|object|false|none|none|
|» arch|[string]|false|none|none|
|title|string|false|none|none|
|tos_url|string|false|none|none|
|unlisted_projects_filter|string|false|none|none|
|unlisted_projects_filter_description|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

<h1 id="open-build-service-api-distributions">Distributions</h1>

## List all distributions.

> Code samples

```bash
curl https://example.com/distributions \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /distributions`

List all distributions that can be build against.
This will not list distributions that are available via [interconnect](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.concepts.html#id-1.5.10.3.5).
Check /distributions/include_remotes for this.


> Example responses

> 200 Response

```json
{
  "distribution": [
    {
      "architecture": [
        "i586",
        "x86_64"
      ],
      "icon": [
        {
          "height": 8,
          "url": "https://static.opensuse.org/distributions/logos/opensuse.png",
          "width": 8
        },
        {
          "height": 16,
          "url": "https://static.opensuse.org/distributions/logos/opensuse.png",
          "width": 16
        }
      ],
      "id": 16626,
      "link": "http://www.opensuse.org/",
      "name": "openSUSE Tumbleweed",
      "project": "openSUSE:Factory",
      "reponame": "openSUSE_Tumbleweed",
      "repository": "snapshot",
      "vendor": "opensuse",
      "version": "Tumbleweed"
    },
    {
      "architecture": "x86_64",
      "icon": [
        {
          "height": 8,
          "url": "https://static.opensuse.org/distributions/logos/opensuse.png",
          "width": 8
        },
        {
          "height": 16,
          "url": "https://static.opensuse.org/distributions/logos/opensuse.png",
          "width": 16
        }
      ],
      "id": 16629,
      "link": "http://www.opensuse.org/",
      "name": "openSUSE Leap 15.3",
      "project": "openSUSE:Leap:15.3",
      "reponame": "openSUSE_Leap_15.3",
      "repository": "standard",
      "vendor": "openSUSE",
      "version": "15.3"
    },
    {
      "architecture": [
        "i586",
        "x86_64"
      ],
      "icon": [
        {
          "height": 8,
          "url": "https://static.opensuse.org/distributions/logos/fedora.png",
          "width": 8
        },
        {
          "height": 16,
          "url": "https://static.opensuse.org/distributions/logos/fedora.png",
          "width": 16
        }
      ],
      "id": 16731,
      "link": "http://www.fedoraproject.org/",
      "name": "Fedora 33",
      "project": "Fedora:33",
      "reponame": "Fedora_33",
      "repository": "standard",
      "vendor": "Fedora",
      "version": "33"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

<h3 id="list-all-distributions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [distributions.rng](../schema/distributions.rng)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="list-all-distributions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distribution|[object]|false|none|none|
|» architecture|[string]|false|none|none|
|» icon|[object]|false|none|none|
|» » height|integer|false|none|none|
|» » url|string|false|none|none|
|» » width|integer|false|none|none|
|» id|integer|false|none|none|
|» link|string|false|none|none|
|» name|string|false|none|none|
|» project|string|false|none|none|
|» reponame|string|false|none|none|
|» repository|string|false|none|none|
|» vendor|string|false|none|none|
|» version|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Create a distribution.

> Code samples

```bash
curl https://example.com/distributions \
  -X POST \
  -H 'Content-Type: application/xml; charset=utf-8' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{"architecture":["i586","x86_64"],"icon":[{"height":8,"url":"https://static.opensuse.org/distributions/logos/opensuse.png","width":8},{"height":16,"url":"https://static.opensuse.org/distributions/logos/opensuse.png","width":16}],"id":16626,"link":"http://www.opensuse.org/","name":"openSUSE Tumbleweed","project":"openSUSE:Factory","reponame":"openSUSE_Tumbleweed","repository":"snapshot","vendor":"opensuse","version":"Tumbleweed"}'
```

`POST /distributions`

Create a distribution.

This is only for admins.


> Body parameter

```json
{
  "architecture": [
    "i586",
    "x86_64"
  ],
  "icon": [
    {
      "height": 8,
      "url": "https://static.opensuse.org/distributions/logos/opensuse.png",
      "width": 8
    },
    {
      "height": 16,
      "url": "https://static.opensuse.org/distributions/logos/opensuse.png",
      "width": 16
    }
  ],
  "id": 16626,
  "link": "http://www.opensuse.org/",
  "name": "openSUSE Tumbleweed",
  "project": "openSUSE:Factory",
  "reponame": "openSUSE_Tumbleweed",
  "repository": "snapshot",
  "vendor": "opensuse",
  "version": "Tumbleweed"
}
```

<h3 id="create-a-distribution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Distribution definition|
|» architecture|body|[string]|false|none|
|» icon|body|[object]|false|none|
|» » height|body|integer|false|none|
|» » url|body|string|false|none|
|» » width|body|integer|false|none|
|» id|body|integer|false|none|
|» link|body|string|false|none|
|» name|body|string|false|none|
|» project|body|string|false|none|
|» reponame|body|string|false|none|
|» repository|body|string|false|none|
|» vendor|body|string|false|none|
|» version|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "distribution": [
    {
      "architecture": [
        "i586",
        "x86_64"
      ],
      "icon": [
        {
          "height": 8,
          "url": "https://static.opensuse.org/distributions/logos/opensuse.png",
          "width": 8
        },
        {
          "height": 16,
          "url": "https://static.opensuse.org/distributions/logos/opensuse.png",
          "width": 16
        }
      ],
      "id": 16626,
      "link": "http://www.opensuse.org/",
      "name": "openSUSE Tumbleweed",
      "project": "openSUSE:Factory",
      "reponame": "openSUSE_Tumbleweed",
      "repository": "snapshot",
      "vendor": "opensuse",
      "version": "Tumbleweed"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

<h3 id="create-a-distribution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [distribution.rng](../schema/distribution.rng)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="create-a-distribution-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|architecture|[string]|false|none|none|
|icon|[object]|false|none|none|
|» height|integer|false|none|none|
|» url|string|false|none|none|
|» width|integer|false|none|none|
|id|integer|false|none|none|
|link|string|false|none|none|
|name|string|false|none|none|
|project|string|false|none|none|
|reponame|string|false|none|none|
|repository|string|false|none|none|
|vendor|string|false|none|none|
|version|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Bulk replace all distributions.

> Code samples

```bash
curl https://example.com/distributions/bulk_replace \
  -X PUT \
  -H 'Content-Type: application/xml; charset=utf-8' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{"distribution":[{"architecture":["i586","x86_64"],"icon":[{"height":8,"url":"https://static.opensuse.org/distributions/logos/opensuse.png","width":8},{"height":16,"url":"https://static.opensuse.org/distributions/logos/opensuse.png","width":16}],"id":16626,"link":"http://www.opensuse.org/","name":"openSUSE Tumbleweed","project":"openSUSE:Factory","reponame":"openSUSE_Tumbleweed","repository":"snapshot","vendor":"opensuse","version":"Tumbleweed"}]}'
```

`PUT /distributions/bulk_replace`

Bulk replace all distributions.

This is only for admins.


> Body parameter

```json
{
  "distribution": [
    {
      "architecture": [
        "i586",
        "x86_64"
      ],
      "icon": [
        {
          "height": 8,
          "url": "https://static.opensuse.org/distributions/logos/opensuse.png",
          "width": 8
        },
        {
          "height": 16,
          "url": "https://static.opensuse.org/distributions/logos/opensuse.png",
          "width": 16
        }
      ],
      "id": 16626,
      "link": "http://www.opensuse.org/",
      "name": "openSUSE Tumbleweed",
      "project": "openSUSE:Factory",
      "reponame": "openSUSE_Tumbleweed",
      "repository": "snapshot",
      "vendor": "opensuse",
      "version": "Tumbleweed"
    }
  ]
}
```

<h3 id="bulk-replace-all-distributions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Distributions definition|
|» distribution|body|[object]|false|none|
|» » architecture|body|[string]|false|none|
|» » icon|body|[object]|false|none|
|» » » height|body|integer|false|none|
|» » » url|body|string|false|none|
|» » » width|body|integer|false|none|
|» » id|body|integer|false|none|
|» » link|body|string|false|none|
|» » name|body|string|false|none|
|» » project|body|string|false|none|
|» » reponame|body|string|false|none|
|» » repository|body|string|false|none|
|» » vendor|body|string|false|none|
|» » version|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 400 Response

```json
{
  "code": "validation_failed",
  "summary": "distributions validation error: 40:0: ERROR: Expecting an element name, got nothing"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

<h3 id="bulk-replace-all-distributions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The Request has succeeded.<br><br>XML Schema used for body validation: [distributions.rng](../schema/distributions.rng)<br>|Inline|
|400|Bad Request|Bad Request.|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="bulk-replace-all-distributions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## List all distributions including remote.

> Code samples

```bash
curl https://example.com/distributions/include_remotes \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /distributions/include_remotes`

List all distributions that can be build against, including the ones provided by the interconnect.


> Example responses

> 200 Response

```json
{
  "distribution": [
    {
      "architecture": [
        "i586",
        "x86_64"
      ],
      "icon": [
        {
          "height": 8,
          "url": "https://static.opensuse.org/distributions/logos/opensuse.png",
          "width": 8
        },
        {
          "height": 16,
          "url": "https://static.opensuse.org/distributions/logos/opensuse.png",
          "width": 16
        }
      ],
      "id": 16626,
      "link": "http://www.opensuse.org/",
      "name": "openSUSE Tumbleweed",
      "project": "openSUSE:Factory",
      "reponame": "openSUSE_Tumbleweed",
      "repository": "snapshot",
      "vendor": "opensuse",
      "version": "Tumbleweed"
    },
    {
      "architecture": "x86_64",
      "icon": [
        {
          "height": 8,
          "url": "https://static.opensuse.org/distributions/logos/opensuse.png",
          "width": 8
        },
        {
          "height": 16,
          "url": "https://static.opensuse.org/distributions/logos/opensuse.png",
          "width": 16
        }
      ],
      "id": 16629,
      "link": "http://www.opensuse.org/",
      "name": "openSUSE Leap 15.3",
      "project": "openSUSE:Leap:15.3",
      "reponame": "openSUSE_Leap_15.3",
      "repository": "standard",
      "vendor": "openSUSE",
      "version": "15.3"
    },
    {
      "architecture": [
        "i586",
        "x86_64"
      ],
      "icon": [
        {
          "height": 8,
          "url": "https://static.opensuse.org/distributions/logos/fedora.png",
          "width": 8
        },
        {
          "height": 16,
          "url": "https://static.opensuse.org/distributions/logos/fedora.png",
          "width": 16
        }
      ],
      "id": 16731,
      "link": "http://www.fedoraproject.org/",
      "name": "Fedora 33",
      "project": "Fedora:33",
      "reponame": "Fedora_33",
      "repository": "standard",
      "vendor": "Fedora",
      "version": "33"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

<h3 id="list-all-distributions-including-remote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [distributions.rng](../schema/distributions.rng)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="list-all-distributions-including-remote-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distribution|[object]|false|none|none|
|» architecture|[string]|false|none|none|
|» icon|[object]|false|none|none|
|» » height|integer|false|none|none|
|» » url|string|false|none|none|
|» » width|integer|false|none|none|
|» id|integer|false|none|none|
|» link|string|false|none|none|
|» name|string|false|none|none|
|» project|string|false|none|none|
|» reponame|string|false|none|none|
|» repository|string|false|none|none|
|» vendor|string|false|none|none|
|» version|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Show a distribution.

> Code samples

```bash
curl https://example.com/distributions/16626 \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /distributions/{distribution_id}`

Show a distribution that can be build against.


<h3 id="show-a-distribution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|distribution_id|path|integer|true|The id of the distribution|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find Distribution with 'id'=0"
}
```

<h3 id="show-a-distribution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeded.<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not found.|Inline|

<h3 id="show-a-distribution-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|architecture|[string]|false|none|none|
|icon|[object]|false|none|none|
|» height|integer|false|none|none|
|» url|string|false|none|none|
|» width|integer|false|none|none|
|id|integer|false|none|none|
|link|string|false|none|none|
|name|string|false|none|none|
|project|string|false|none|none|
|reponame|string|false|none|none|
|repository|string|false|none|none|
|vendor|string|false|none|none|
|version|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Update a distribution.

> Code samples

```bash
curl https://example.com/distributions/16626 \
  -X PUT \
  -H 'Content-Type: application/xml; charset=utf-8' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{"architecture":["i586","x86_64"],"icon":[{"height":8,"url":"https://static.opensuse.org/distributions/logos/opensuse.png","width":8},{"height":16,"url":"https://static.opensuse.org/distributions/logos/opensuse.png","width":16}],"id":16626,"link":"http://www.opensuse.org/","name":"openSUSE Tumbleweed","project":"openSUSE:Factory","reponame":"openSUSE_Tumbleweed","repository":"snapshot","vendor":"opensuse","version":"Tumbleweed"}'
```

`PUT /distributions/{distribution_id}`

Update the data of a distribution.

> Body parameter

```json
{
  "architecture": [
    "i586",
    "x86_64"
  ],
  "icon": [
    {
      "height": 8,
      "url": "https://static.opensuse.org/distributions/logos/opensuse.png",
      "width": 8
    },
    {
      "height": 16,
      "url": "https://static.opensuse.org/distributions/logos/opensuse.png",
      "width": 16
    }
  ],
  "id": 16626,
  "link": "http://www.opensuse.org/",
  "name": "openSUSE Tumbleweed",
  "project": "openSUSE:Factory",
  "reponame": "openSUSE_Tumbleweed",
  "repository": "snapshot",
  "vendor": "opensuse",
  "version": "Tumbleweed"
}
```

<h3 id="update-a-distribution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|distribution_id|path|integer|true|The id of the distribution|
|body|body|object|false|Distribution definition|
|» architecture|body|[string]|false|none|
|» icon|body|[object]|false|none|
|» » height|body|integer|false|none|
|» » url|body|string|false|none|
|» » width|body|integer|false|none|
|» id|body|integer|false|none|
|» link|body|string|false|none|
|» name|body|string|false|none|
|» project|body|string|false|none|
|» reponame|body|string|false|none|
|» repository|body|string|false|none|
|» vendor|body|string|false|none|
|» version|body|string|false|none|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find Distribution with 'id'=0"
}
```

<h3 id="update-a-distribution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The Request has succeeded.<br><br>XML Schema used for body validation: [distribution.rng](../schema/distribution.rng)<br>|None|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not found.|Inline|

<h3 id="update-a-distribution-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Delete a distribution.

> Code samples

```bash
curl https://example.com/distributions/16626 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /distributions/{distribution_id}`

Delete a distribution.

This is only for admins.


<h3 id="delete-a-distribution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|distribution_id|path|integer|true|The id of the distribution|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find Distribution with 'id'=0"
}
```

<h3 id="delete-a-distribution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeded.<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not found.|Inline|

<h3 id="delete-a-distribution-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

<h1 id="open-build-service-api-groups">Groups</h1>

## List available groups.

> Code samples

```bash
curl https://example.com/group \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /group`

List available groups.

> Example responses

> 200 Response

```json
{
  "count": "2",
  "entry": [
    {
      "name": "group-admin"
    },
    {
      "name": "group-test"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

<h3 id="list-available-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [directory.xsd](../schema/directory.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="list-available-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|entry|[object]|false|none|none|
|» name|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Read group data.

> Code samples

```bash
curl https://example.com/group/group-test \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /group/{group_title}`

Read group data.

<h3 id="read-group-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_title|path|string|true|Group title|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find Group 'group-testd'"
}
```

<h3 id="read-group-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [group.rng](../schema/group.rng)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="read-group-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maintainer|[object]|false|none|none|
|» userid|string|false|none|none|
|person|[object]|false|none|none|
|» userid|string|false|none|none|
|title|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Write group data.

> Code samples

```bash
curl https://example.com/group/group-test \
  -X PUT \
  -H 'Content-Type: application/xml; charset=utf-8' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{"maintainer":[{"userid":"user-test"}],"person":[{"userid":"user-test"}],"title":"group-test"}'
```

`PUT /group/{group_title}`

Write group data.

> Body parameter

```json
{
  "maintainer": [
    {
      "userid": "user-test"
    }
  ],
  "person": [
    {
      "userid": "user-test"
    }
  ],
  "title": "group-test"
}
```

<h3 id="write-group-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_title|path|string|true|Group title|
|body|body|object|true|Group definition.<br><br>XML Schema used for body validation: [group.rng](../schema/group.rng)<br>|
|» maintainer|body|[object]|false|none|
|» » userid|body|string|false|none|
|» person|body|[object]|false|none|
|» » userid|body|string|false|none|
|» title|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find Group 'group-testd'"
}
```

<h3 id="write-group-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="write-group-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Modify group data.

> Code samples

```bash
curl https://example.com/group/group-test \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /group/{group_title}`

Modify group data.

<h3 id="modify-group-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_title|path|string|true|Group title|
|cmd|query|string|false|Command to be executed. It takes one of these available values:<br>* `add_user`: add a user to a group. `userid` query parameter must be also used.<br>* `remove_user`: remove a user from a group. `userid` query parameter must be also used.<br>* `set_email`: set email adress of group. `email` query parameter must be also used.<br>|
|userid|query|string|false|User login. Used with `cmd=add_user` or `cmd=remove_user`.|
|email|query|string|false|Group email. Used with `cmd=set_email`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|cmd|add_user|
|cmd|remove_user|
|cmd|set_email|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 400 Response

```json
{
  "code": "bad_request",
  "summary": "cmd must be set to add_user or remove_user"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find Group 'group-testd'"
}
```

<h3 id="modify-group-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|400|Bad Request|Bad Request.|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="modify-group-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Delete a group.

> Code samples

```bash
curl https://example.com/group/group-test \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /group/{group_title}`

Delete a group.

<h3 id="delete-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_title|path|string|true|Group title|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find Group 'group-testd'"
}
```

<h3 id="delete-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="delete-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

<h1 id="open-build-service-api-issue-trackers">Issue Trackers</h1>

## Get the list of issue trackers.

> Code samples

```bash
curl https://example.com/issue_trackers \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /issue_trackers`

Get the list of issue trackers.

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

<h3 id="get-the-list-of-issue-trackers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of issue trackers.<br><br>XML Schema used for body validation: [issue_trackers.rng](../schema/issue_trackers.rng)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="get-the-list-of-issue-trackers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» description|string|false|none|none|
|» enable-fetch|string|false|none|none|
|» kind|string|false|none|none|
|» label|string|false|none|none|
|» name|string|false|none|none|
|» regex|string|false|none|none|
|» show-url|string|false|none|none|
|» url|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Create an issue tracker.

> Code samples

```bash
curl https://example.com/issue_trackers \
  -X POST \
  -H 'Content-Type: application/xml; charset=utf-8' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{"description":"openSUSE Feature Database","enable-fetch":"false","kind":"fate","label":"fate#@@@","name":"fate","regex":"(?:fate|Fate|FATE)\\s*#\\s*(\\d+)","show-url":"https://features.opensuse.org/@@@","url":"https://features.opensuse.org/"}'
```

`POST /issue_trackers`

Create an issue tracker.

> Body parameter

```json
{
  "description": "openSUSE Feature Database",
  "enable-fetch": "false",
  "kind": "fate",
  "label": "fate#@@@",
  "name": "fate",
  "regex": "(?:fate|Fate|FATE)\\s*#\\s*(\\d+)",
  "show-url": "https://features.opensuse.org/@@@",
  "url": "https://features.opensuse.org/"
}
```

<h3 id="create-an-issue-tracker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Issue tracker definition.<br><br>XML Schema used for body validation: [issue_tracker.rng](../schema/issue_tracker.rng)<br>|
|» description|body|string|false|none|
|» enable-fetch|body|string|false|none|
|» kind|body|string|false|none|
|» label|body|string|false|none|
|» name|body|string|false|none|
|» regex|body|string|false|none|
|» show-url|body|string|false|none|
|» url|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 400 Response

```json
{
  "code": "validation_failed",
  "summary": "Document is empty, not allowed for issue_tracker"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

<h3 id="create-an-issue-tracker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|400|Bad Request|Validation failed.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="create-an-issue-tracker-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Show an issue tracker.

> Code samples

```bash
curl https://example.com/issue_trackers/fate \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /issue_trackers/{issue_tracker_name}`

Show an issue tracker.

<h3 id="show-an-issue-tracker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issue_tracker_name|path|string|true|Issue tracker name|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Unable to find issue tracker 'foo'"
}
```

<h3 id="show-an-issue-tracker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Issue tracker definition.<br><br>XML Schema used for body validation: [issue_tracker.rng](../schema/issue_tracker.rng)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="show-an-issue-tracker-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|enable-fetch|string|false|none|none|
|kind|string|false|none|none|
|label|string|false|none|none|
|name|string|false|none|none|
|regex|string|false|none|none|
|show-url|string|false|none|none|
|url|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Update or create an issue tracker.

> Code samples

```bash
curl https://example.com/issue_trackers/fate \
  -X PUT \
  -H 'Content-Type: application/xml; charset=utf-8' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{"description":"openSUSE Feature Database","enable-fetch":"false","kind":"fate","label":"fate#@@@","name":"fate","regex":"(?:fate|Fate|FATE)\\s*#\\s*(\\d+)","show-url":"https://features.opensuse.org/@@@","url":"https://features.opensuse.org/"}'
```

`PUT /issue_trackers/{issue_tracker_name}`

Update the issue tracker given as path parameter. If it is not found, create it.

> Body parameter

```json
{
  "description": "openSUSE Feature Database",
  "enable-fetch": "false",
  "kind": "fate",
  "label": "fate#@@@",
  "name": "fate",
  "regex": "(?:fate|Fate|FATE)\\s*#\\s*(\\d+)",
  "show-url": "https://features.opensuse.org/@@@",
  "url": "https://features.opensuse.org/"
}
```

<h3 id="update-or-create-an-issue-tracker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issue_tracker_name|path|string|true|Issue tracker name|
|body|body|object|true|Issue tracker definition.<br><br>XML Schema used for body validation: [issue_tracker.rng](../schema/issue_tracker.rng)<br>|
|» description|body|string|false|none|
|» enable-fetch|body|string|false|none|
|» kind|body|string|false|none|
|» label|body|string|false|none|
|» name|body|string|false|none|
|» regex|body|string|false|none|
|» show-url|body|string|false|none|
|» url|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 400 Response

```json
{
  "code": "validation_failed",
  "summary": "Document is empty, not allowed for issue_tracker"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

<h3 id="update-or-create-an-issue-tracker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|400|Bad Request|Validation failed.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="update-or-create-an-issue-tracker-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Delete an issue tracker.

> Code samples

```bash
curl https://example.com/issue_trackers/fate \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /issue_trackers/{issue_tracker_name}`

Delete an issue tracker.

<h3 id="delete-an-issue-tracker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issue_tracker_name|path|string|true|Issue tracker name|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Unable to find issue tracker 'foo'"
}
```

<h3 id="delete-an-issue-tracker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="delete-an-issue-tracker-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Show an issue of an issue tracker.

> Code samples

```bash
curl https://example.com/issue_trackers/fate/issues/12345 \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /issue_trackers/{issue_tracker_name}/issues/{issue_name}`

Show an issue of an issue tracker.

<h3 id="show-an-issue-of-an-issue-tracker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issue_tracker_name|path|string|true|Issue tracker name|
|issue_name|path|string|true|Issue name.|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "issue_tracker_not_found",
  "summary": "Error: Issue Tracker 'foo' not found."
}
```

<h3 id="show-an-issue-of-an-issue-tracker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Issue definition.<br><br>XML Schema used for body validation: [issue.rng](../schema/issue.rng)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="show-an-issue-of-an-issue-tracker-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string|false|none|none|
|label|string|false|none|none|
|name|string|false|none|none|
|tracker|string|false|none|none|
|updated_at|string|false|none|none|
|url|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

<h1 id="open-build-service-api-person">Person</h1>

## List all people.

> Code samples

```bash
curl https://example.com/person \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /person`

List all people.


<h3 id="list-all-people-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prefix|query|string|false|A prefix to filter the people to look for|

> Example responses

> 200 Response

```json
{
  "count": "9",
  "entry": [
    {
      "name": "Admin"
    },
    {
      "name": "_nobody_"
    },
    {
      "name": "Iggy"
    },
    {
      "name": "user_1"
    },
    {
      "name": "repo-checker"
    },
    {
      "name": "reviewhero"
    },
    {
      "name": "user_2"
    },
    {
      "name": "user_3"
    },
    {
      "name": "Requestor"
    }
  ]
}
```

<h3 id="list-all-people-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br>XML Schema used for body validation: [directory.xsd](../schema/directory.xsd)<br>|Inline|

<h3 id="list-all-people-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|entry|[object]|false|none|none|
|» name|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Executes a command on the person endpoint.

> Code samples

```bash
curl 'https://example.com/person?cmd=register' \
  -X POST \
  -H 'Content-Type: application/xml' \
  -d '{"email":"janedoe@example.com","login":"jane","note":"Jane works in the Engineering team","password":"superpassword123","realname":"Jane Doe","state":"confirmed"}'
```

`POST /person`

Allows executing command on the person endpoint.

As of now, the only command allowed is 'register'.


> Body parameter

```json
{
  "email": "janedoe@example.com",
  "login": "jane",
  "note": "Jane works in the Engineering team",
  "password": "superpassword123",
  "realname": "Jane Doe",
  "state": "confirmed"
}
```

<h3 id="executes-a-command-on-the-person-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cmd|query|string|true|The command to execute|
|body|body|object|true|The data for the person to register.|
|» email|body|string|false|none|
|» login|body|string|false|none|
|» note|body|string|false|none|
|» password|body|string|false|none|
|» realname|body|string|false|none|
|» state|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|cmd|register|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 400 Response

```json
{
  "code": "err_register_save",
  "summary": "Could not save the registration, details: Login is the name of an already existing user and Password can't be blank."
}
```

<h3 id="executes-a-command-on-the-person-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|400|Bad Request|Bad request.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="executes-a-command-on-the-person-endpoint-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Registers a new person

> Code samples

```bash
curl https://example.com/person/register \
  -X POST \
  -H 'Content-Type: application/xml' \
  -d '{"email":"janedoe@example.com","login":"jane","note":"Jane works in the Engineering team","password":"superpassword123","realname":"Jane Doe","state":"confirmed"}'
```

`POST /person/register`

> Body parameter

```json
{
  "email": "janedoe@example.com",
  "login": "jane",
  "note": "Jane works in the Engineering team",
  "password": "superpassword123",
  "realname": "Jane Doe",
  "state": "confirmed"
}
```

<h3 id="registers-a-new-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Data for the person to register.|
|» email|body|string|false|none|
|» login|body|string|false|none|
|» note|body|string|false|none|
|» password|body|string|false|none|
|» realname|body|string|false|none|
|» state|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "summary": "User accounts can not be registered via OBS when in LDAP mode. Please refer\nto your LDAP server to create new users.\n"
}
```

<h3 id="registers-a-new-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="registers-a-new-person-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get details about a person

> Code samples

```bash
curl https://example.com/person/Admin \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /person/{login}`

<h3 id="get-details-about-a-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|login|path|string|true|Person login.|

> Example responses

> 200 Response

```json
{
  "email": "root@localhost",
  "globalrole": "Admin",
  "ignore_auth_services": false,
  "login": "Admin",
  "realname": "OBS Instance Superuser",
  "state": "confirmed",
  "watchlist": [
    {
      "project": {
        "name": "home:Admin"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find User with login = <login>"
}
```

<h3 id="get-details-about-a-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br>XML Schema used for body validation: [user.rng](../schema/user.rng)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not found.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="get-details-about-a-person-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|globalrole|string|false|none|none|
|ignore_auth_services|boolean|false|none|none|
|login|string|false|none|none|
|realname|string|false|none|none|
|state|string|false|none|none|
|watchlist|[object]|false|none|none|
|» project|object|false|none|none|
|» » name|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Update person

> Code samples

```bash
curl https://example.com/person/Admin \
  -X PUT \
  -H 'Content-Type: application/xml' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{"email":"janedoe@example.com","login":"jane","note":"Jane works in the Engineering team","password":"superpassword123","realname":"Jane Doe","state":"confirmed"}'
```

`PUT /person/{login}`

> Body parameter

```json
{
  "email": "janedoe@example.com",
  "login": "jane",
  "note": "Jane works in the Engineering team",
  "password": "superpassword123",
  "realname": "Jane Doe",
  "state": "confirmed"
}
```

<h3 id="update-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|login|path|string|true|Person login.|
|body|body|object|true|The new data for the person referred in the login parameter.|
|» email|body|string|false|none|
|» login|body|string|false|none|
|» note|body|string|false|none|
|» password|body|string|false|none|
|» realname|body|string|false|none|
|» state|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 400 Response

```json
{
  "code": "subaccount_chaining",
  "summary": "A subaccount can not be assigned to subaccount <login>"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 403 Response

```json
{
  "code": "change_userinfo_no_permission",
  "summary": "no permission to change userinfo for user <login>"
}
```

> 404 Response

```json
{
  "code": "password_empty",
  "summary": "Requested non-existing user"
}
```

<h3 id="update-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|400|Bad Request|Bad request.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|403|Forbidden|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not found.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="update-person-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Perform changes on a registered person

> Code samples

```bash
curl 'https://example.com/person/Admin?cmd=change_password' \
  -X POST \
  -H 'Content-Type: text/plain' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'string'
```

`POST /person/{login}`

> Body parameter

```text
string
```

<h3 id="perform-changes-on-a-registered-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|login|path|string|true|Person login.|
|cmd|query|string|true|The command to execute against the provided person.|
|body|body|string|false|The password in plain text when the cmd param is 'change_password'.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|cmd|change_password|
|cmd|lock|
|cmd|delete|

> Example responses

> 400 Response

```json
{
  "code": "err_register_save",
  "summary": "Could not save the registration, details: Login is the name of an already existing user and Password can't be blank."
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 403 Response

```json
{
  "code": "update_user_not_authorized",
  "summary": "You are not authorized to update this User."
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find User with login = <login>"
}
```

<h3 id="perform-changes-on-a-registered-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br>XML Schema used for body validation: [api_response.xsd](../schema/api_response.xsd)<br>|Inline|
|400|Bad Request|Bad request.<br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|403|Forbidden|Forbidden.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not found.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="perform-changes-on-a-registered-person-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## List the groups of a person

> Code samples

```bash
curl https://example.com/person/Admin/group \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /person/{login}/group`

List the groups the person belongs to.

<h3 id="list-the-groups-of-a-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|login|path|string|true|Person login.|

> Example responses

> 200 Response

```json
{
  "count": "2",
  "entry": [
    {
      "name": "factory-maintainers"
    },
    {
      "name": "obs-developers"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find User with login = fake"
}
```

<h3 id="list-the-groups-of-a-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br>XML Schema used for body validation: [directory.xsd](../schema/directory.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="list-the-groups-of-a-person-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|entry|[object]|false|none|none|
|» name|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## List the authentication tokens of a person.

> Code samples

```bash
curl https://example.com/person/Admin/token \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /person/{login}/token`

List the authentication tokens of a person.

<h3 id="list-the-authentication-tokens-of-a-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|login|path|string|true|Person login.|

> Example responses

> 200 Response

```json
{
  "count": 2,
  "entry": [
    {
      "id": 3,
      "kind": "rss",
      "string": "FK49K39DKK"
    },
    {
      "id": 25,
      "kind": "release",
      "package": "ghcz",
      "project": "devel:languages:haskell",
      "string": "4T04JGI691"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 403 Response

```json
{
  "code": "view_user_not_authorized",
  "summary": "You are not authorized to view this User."
}
```

<h3 id="list-the-authentication-tokens-of-a-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [tokenlist.rng](../schema/tokenlist.rng)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|403|Forbidden|Forbidden.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="list-the-authentication-tokens-of-a-person-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|entry|[object]|false|none|none|
|» id|string|false|none|none|
|» kind|string|false|none|none|
|» package|string|false|none|none|
|» project|string|false|none|none|
|» string|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Create a new authentication token for a person.

> Code samples

```bash
curl https://example.com/person/Admin/token \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /person/{login}/token`

Create a new authentication token for a person.

The token may be limited to a specific package. In this case the query parameters
`project` and `package` should be provided.

With an empty request body, a token of the default kind 'runservice' is created.


<h3 id="create-a-new-authentication-token-for-a-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|login|path|string|true|Person login.|
|project|query|string|false|Project name. Should be provided, together with the package query parameter,<br>to limit the token to a specific package.<br>|
|package|query|string|false|Package name. Should be provided, together with the project query parameter,<br>to limit the token to a specific package.<br>|
|operation|query|string|false|Operation indicates the kind of token that is going to be created.<br><br>When operation is not specified, 'runservice' is the default value.<br>|
|scm_token|query|string|false|**(Beta/Unstable)**<br><br>SCM token used in OBS workflows to report back the workflow status, when the operation is workflow.<br><br>It's normally possible to generate SCM tokens directly on the SCM's website like GitHub or GitLab.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|runservice|
|operation|rebuild|
|operation|release|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "data": [
    "i6iF4M5cn",
    5
  ],
  "summary": "Ok"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 403 Response

```json
{
  "code": "update_user_not_authorized",
  "summary": "You are not authorized to update this User."
}
```

<h3 id="create-a-new-authentication-token-for-a-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br><br>**NOTE:** This is an example of a valid response. It should include the attribute 'name'<br>in every 'data' tag, which is missing in the example using the schema.<br>```<br>  <status code="ok"><br>    <summary>Ok</summary><br>    <data name="token">i6iF4M5cn</data><br>    <data name="id">5</data><br>  </status><br>```<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|403|Forbidden|Forbidden.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="create-a-new-authentication-token-for-a-person-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Delete a token of a person.

> Code samples

```bash
curl https://example.com/person/Admin/token/3 \
  -X DELETE
```

`DELETE /person/{login}/token/{id}`

Delete a token of the specified person.

<h3 id="delete-a-token-of-a-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|login|path|string|true|Person login.|
|id|path|string|true|Id of the token to be removed.|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 403 Response

```json
{
  "code": "update_user_not_authorized",
  "summary": "You are not authorized to update this User."
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find Token with 'id'=33 [WHERE `tokens`.`user_id` = ?]"
}
```

<h3 id="delete-a-token-of-a-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|403|Forbidden|Forbidden.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="delete-a-token-of-a-person-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="open-build-service-api-published-binaries">Published Binaries</h1>

## List all the published projects.

> Code samples

```bash
curl https://example.com/published \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /published`

Get a list of all the projects, all of them are considered published.


> Example responses

> 200 Response

```json
{
  "entry": [
    {
      "name": "OBS:Server:Unstable"
    },
    {
      "name": "devel:languages:ruby"
    },
    {
      "name": "openSUSE:Maintenance:9810"
    },
    {
      "name": "zypp:plugins"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

<h3 id="list-all-the-published-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="list-all-the-published-projects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|entry|[object]|false|none|none|
|» name|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## List the repositories of a project with published binaries

> Code samples

```bash
curl https://example.com/published/home%3AAdmin \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /published/{project_name}`

Get a list of the repositories of the project that already have published binaries.


<h3 id="list-the-repositories-of-a-project-with-published-binaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|

> Example responses

> 200 Response

```json
{
  "entry": [
    {
      "name": "SLE_15_SP3"
    },
    {
      "name": "containers"
    },
    {
      "name": "images"
    },
    {
      "name": "openSUSE_15.2"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 403 Response

```json
{
  "code": "download_binary_no_permission",
  "summary": "No permission for binaries from project home:Admin"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find Project"
}
```

<h3 id="list-the-repositories-of-a-project-with-published-binaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|403|Forbidden|Forbidden.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="list-the-repositories-of-a-project-with-published-binaries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|entry|[object]|false|none|none|
|» name|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## List the content of the directory tree where the binaries are published at the level project/repository.

> Code samples

```bash
curl https://example.com/published/home%3AAdmin/openSUSE_Tumbleweed \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /published/{project_name}/{repository_name}`

Get a list of architectures' directories and other files (.repo, .ymp, etc.) present at the level project/repository of the directory tree where the published binaries are stored.


<h3 id="list-the-content-of-the-directory-tree-where-the-binaries-are-published-at-the-level-projectrepository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|
|repository_name|path|string|true|Repository name|

> Example responses

> 200 Response

```json
{
  "entry": [
    {
      "name": "OBS:Server:Unstable.repo"
    },
    {
      "name": "OBS_Server.ymp"
    },
    {
      "name": "aarch64"
    },
    {
      "name": "x86_64"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 403 Response

```json
{
  "code": "download_binary_no_permission",
  "summary": "No permission for binaries from project home:Admin"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find Project"
}
```

<h3 id="list-the-content-of-the-directory-tree-where-the-binaries-are-published-at-the-level-projectrepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|403|Forbidden|Forbidden.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="list-the-content-of-the-directory-tree-where-the-binaries-are-published-at-the-level-projectrepository-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|entry|[object]|false|none|none|
|» name|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## List the content of the directory tree where the binaries are published at the level project/repository/architecture.

> Code samples

```bash
curl https://example.com/published/home%3AAdmin/openSUSE_Tumbleweed/x86_64 \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /published/{project_name}/{repository_name}/{architecture_name}`

Get a list of binaries and other files present at the level project/repository/architecture of the directory tree as a result of successful building and publishing processes.


<h3 id="list-the-content-of-the-directory-tree-where-the-binaries-are-published-at-the-level-projectrepositoryarchitecture-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|
|repository_name|path|string|true|Repository name|
|architecture_name|path|string|true|Architecture name|

> Example responses

> 200 Response

```json
{
  "entry": [
    {
      "name": "apache2-mod_auth_memcookie-1.1.1-lp152.2.1.x86_64.rpm"
    },
    {
      "name": "obs-api-testsuite-rspec-2.11~alpha.20200618T200341.d42d8310aa-lp152.10515.1.x86_64.rpm"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 403 Response

```json
{
  "code": "download_binary_no_permission",
  "summary": "No permission for binaries from project home:Admin"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find Project"
}
```

<h3 id="list-the-content-of-the-directory-tree-where-the-binaries-are-published-at-the-level-projectrepositoryarchitecture-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|403|Forbidden|Forbidden.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="list-the-content-of-the-directory-tree-where-the-binaries-are-published-at-the-level-projectrepositoryarchitecture-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|entry|[object]|false|none|none|
|» name|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Return the binary file itself.

> Code samples

```bash
curl https://example.com/published/home%3AAdmin/openSUSE_Tumbleweed/x86_64/ctris-0.42.1-8.1.x86_64.rpm \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /published/{project_name}/{repository_name}/{architecture_name}/{binary_filename}`

Allow to download the binary file that was published and stored under the directory given by project/repository/architecture/.
Can response with Media Types like application/x-rpm, text/xml, etc.
NOTE: Use this only if you absolutely have to, as it doesn't use the redirector.


<h3 id="return-the-binary-file-itself-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|
|repository_name|path|string|true|Repository name|
|architecture_name|path|string|true|Architecture name|
|binary_filename|path|string|true|Binary filename|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 403 Response

```json
{
  "code": "download_binary_no_permission",
  "summary": "No permission for binaries from project home:Admin"
}
```

> 404 Response

```json
{
  "code": 404,
  "details": "404 no such file",
  "summary": "no such file"
}
```

<h3 id="return-the-binary-file-itself-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|403|Forbidden|Forbidden.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="return-the-binary-file-itself-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Generate a ymp pattern that includes the needed repositories to install the given binary.

> Code samples

```bash
curl 'https://example.com/published/home%3AAdmin/openSUSE_Tumbleweed/x86_64/ctris-0.42.1-8.1.x86_64.rpm?view=ymp' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /published/{project_name}/{repository_name}/{architecture_name}/{binary_filename}?view=ymp`

Generate a ymp pattern, which contains the list of packages needed for intalling certain software without having to create dependencies between them.
Read more about patterns [in this tutorial](https://en.opensuse.org/openSUSE:Build_Service_Tutorial#Create_Patterns).


<h3 id="generate-a-ymp-pattern-that-includes-the-needed-repositories-to-install-the-given-binary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|
|repository_name|path|string|true|Repository name|
|architecture_name|path|string|true|Architecture name|
|binary_filename|path|string|true|Binary filename|

> Example responses

> 200 Response

```json
{
  "group": {
    "distversion": "openSUSEsLeap 15.2",
    "repositories": {
      "repository": [
        {
          "description": "These are the developer versions of the tools for the Open Build Service project",
          "name": "OBS:Server:Unstable",
          "recommended": true,
          "summary": "Developer versions of the Open Build Service Server",
          "url": "https://download.opensuse.org/repositories/OBS:/Server:/Unstable/openSUSE_15.2"
        },
        {
          "description": "openSUSE Leap borrows packages from SLE for the base system",
          "name": "openSUSE:Leap:15.2",
          "recommended": false,
          "summary": "openSUSE Leap 15.2",
          "url": "http://download.opensuse.org/distribution/leap/15.2/repo/oss"
        }
      ]
    },
    "software": {
      "item": {
        "description": "This package provides debug information for package virt-v2v",
        "name": "virt-v2v-debuginfo",
        "summary": "Debug information for package virt-v2v"
      }
    }
  },
  "xmlns": "http://opensuse.org/Standards/One_Click_Install",
  "xmlns:os": "http://opensuse.org/Standards/One_Click_Install"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 403 Response

```json
{
  "code": "download_binary_no_permission",
  "summary": "No permission for binaries from project home:Admin"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find Project"
}
```

<h3 id="generate-a-ymp-pattern-that-includes-the-needed-repositories-to-install-the-given-binary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK.|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|403|Forbidden|Forbidden.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="generate-a-ymp-pattern-that-includes-the-needed-repositories-to-install-the-given-binary-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|object|false|none|none|
|» distversion|string|false|none|none|
|» repositories|object|false|none|none|
|» » repository|[object]|false|none|none|
|» » » description|string|false|none|none|
|» » » name|string|false|none|none|
|» » » recommended|string|false|none|none|
|» » » summary|string|false|none|none|
|» » » url|string|false|none|none|
|» software|object|false|none|none|
|» » item|object|false|none|none|
|» » » description|string|false|none|none|
|» » » name|string|false|none|none|
|» » » summary|string|false|none|none|
|xmlns|string|false|none|none|
|xmlns:os|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Present information about the last publication of the pair project and repository.

> Code samples

```bash
curl 'https://example.com/published/home%3AAdmin/openSUSE_Tumbleweed?view=status' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /published/{project_name}/{repository_name}?view=status`

Get information about the build process (build id, start time, etc.) for the pair project and repository.


<h3 id="present-information-about-the-last-publication-of-the-pair-project-and-repository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_name|path|string|true|Project name|
|repository_name|path|string|true|Repository name|
|view|query|string|false|Set this parameter to status in order to get details about the last publication.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|status|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 403 Response

```json
{
  "code": "download_binary_no_permission",
  "summary": "No permission for binaries from project home:Admin"
}
```

<h3 id="present-information-about-the-last-publication-of-the-pair-project-and-repository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|403|Forbidden|Forbidden.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="present-information-about-the-last-publication-of-the-pair-project-and-repository-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildid|integer|false|none|none|
|code|string|false|none|none|
|endtime|integer|false|none|none|
|starttime|integer|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

<h1 id="open-build-service-api-request">Request</h1>

Please, before using request endpoints, make sure you have read and understood the "Request and Review System" section of
the [user guide](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.request_and_review_system.html).

In the next sections you will see how calls to request endpoints could be combined to fullfill different workflows.

## Workflow 1: Create a Submit Request from Package A to Package B

The steps described in this workflow could be easily replicated with this command:
`osc createrequest -a submit home:Admin:Origin A home:Admin:Destination B -m "Submit A to B"`

The logic involved in the creation of a submit request will require to call more endpoints. For the sake of simplicity we suppose, that:
  - The project `home:Admin:Origin` exists, with a package `A`, and it has a file called `test.txt`.
  - The latest revision of the package `home:Admin:Origin:A` is `1`.
  - The project `home:Admin:Destination` doesn't exist.
  - There aren't any other submit requests previously created with the same source and target.

To create a submit request, pass the following request body:
```
<request>
  <action type="submit">
    <source project="home:Admin:Origin" package="A" rev="1"/>
    <target project="home:Admin:Destination" package="B"/>
  </action>
  <state name="new"/>
  <description>Submit A to B</description>
</request>
```
... to this endpoint: `POST /request?cmd=create`


## Workflow 2: Review a Submit Request
**Add a User as Reviewer of a Submit Request**

First, we make sure that a certain user can review our submit request.
We will add the user `test1` as a reviewer of the already created submit request.

For the sake of simplicity we suppose, that:
  - There is already a user with login name `test1`.
  - There is already a submit request with number `33`.

Adding the user `test1` as a reviewer of the submit request number `33` can be performed with this command:
`osc review add -m 'Add user test1 as reviewer' -U test1 33`

The same action can be done with this API endpoint: `POST /request/33?cmd=addreview&by_user=test1`

**Mark a Review of a Submit Request as Accepted**

Now that the user `test1` is a reviewer of the submit request number `33`, this user can review that submit request as `accepted`.

To review the submit request as `accepted`, issue the following command, using for authentication the login `test1`:
`osc review accept -m 'Accept submit request' -U test1 33`

This can also be done with this API endpoint, using for authentication the login `test1`:
`POST /request/33?cmd=changereviewstate&newstate=accepted&by_user=test1`


## Workflow 3: Approve a Submit Request

To mark a submit request as approved means that a submit request will be automatically accepted when all the required reviews are accepted.

For the sake of simplicity let's accept that:
  - There is already a user with the login name `test1`, which is also a maintainer of the project `home:Admin`.
  - There is already a submit request with the number `44`.
  - The user with login name `test1` is a reviewer of the submit request number `44`.

**Note**: The following commands or endpoints should all be executed as user `test1`.

**Mark a Submit Request as Approved**

To mark a request as approved, execute the following command: `osc request approve -m 'Approve submit request' -U test1 44`

This can also be done with this endpoint (as user `test1`): `POST /request/44?cmd=approve`

**Review an Already Approved Submit Request as Accepted**

After adding a review to this submit request with state `accepted`, the submit request will automatically be accepted.
This is the same step that has been described previously in the last section *"Review a Submit Request as Accepted"*.

To perform this operation with `osc`, perform the following command: `osc review accept -m 'Accept submit request' -U test1 44`

The same can be done with the following endpoint: `POST /request/44?cmd=changereviewstate&newstate=accepted&by_user=test1`


<a href="https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.request_and_review_system.html">External documentation</a>

## Get a simple directory listing of all requests

> Code samples

```bash
curl https://example.com/request \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /request`

Get a simple directory listing of all requests

> Example responses

> 200 Response

```json
{
  "entry": [
    {
      "name": 122
    },
    {
      "name": 123
    }
  ]
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

<h3 id="get-a-simple-directory-listing-of-all-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK<br><br>XML Schema used for body validation: [directory.xsd](../schema/directory.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="get-a-simple-directory-listing-of-all-requests-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|entry|[object]|false|none|none|
|» name|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Create a request

> Code samples

```bash
curl 'https://example.com/request?cmd=create' \
  -X POST \
  -H 'Content-Type: application/xml; charset=utf-8' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{"action":{"options":{"sourceupdate":"cleanup"},"source":{"package":"obs-server","project":"home:foo-user","rev":521},"target":{"package":"obs-server","project":"OBS:Unstable"},"type":"submit"},"creator":"foo-user","description":"A little version update","history":[{"comment":"Please review sources","description":"Request created","when":"2021-01-15T13:39:43","who":"foo"}],"id":42,"review":[{"by_user":"obs-maintainer","state":"accepted","when":"2021-01-15T15:49:32","who":"obs-maintainer"}],"state":{"comment":"allright","name":"accepted","when":"2021-01-15T13:39:43","who":"bar-user"}}'
```

`POST /request`

Create a request

> Body parameter

```json
{
  "action": {
    "options": {
      "sourceupdate": "cleanup"
    },
    "source": {
      "package": "obs-server",
      "project": "home:foo-user",
      "rev": 521
    },
    "target": {
      "package": "obs-server",
      "project": "OBS:Unstable"
    },
    "type": "submit"
  },
  "creator": "foo-user",
  "description": "A little version update",
  "history": [
    {
      "comment": "Please review sources",
      "description": "Request created",
      "when": "2021-01-15T13:39:43",
      "who": "foo"
    }
  ],
  "id": 42,
  "review": [
    {
      "by_user": "obs-maintainer",
      "state": "accepted",
      "when": "2021-01-15T15:49:32",
      "who": "obs-maintainer"
    }
  ],
  "state": {
    "comment": "allright",
    "name": "accepted",
    "when": "2021-01-15T13:39:43",
    "who": "bar-user"
  }
}
```

<h3 id="create-a-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cmd|query|string|true|This endpoint will refuse the creation of a new request if this parameter is not set.|
|addrevision|query|string|false|Ask the server to add revisions of the current sources to the request.|
|ignore_delegate|query|string|false|Enforce a new package instance in a project which has OBS:DelegateRequestTarget set|
|ignore_build_state|query|string|false|Skip the build state check|
|body|body|object|true|Request XML<br><br>**NOTE:** You cannot pass the request id in the xml. You can pass the history in the xml, but it will be simply ignored.<br>|
|» action|body|object|false|none|
|» » options|body|object|false|none|
|» » » sourceupdate|body|string|false|none|
|» » source|body|object|false|none|
|» » » package|body|string|false|none|
|» » » project|body|string|false|none|
|» » » rev|body|integer|false|none|
|» » target|body|object|false|none|
|» » » package|body|string|false|none|
|» » » project|body|string|false|none|
|» » type|body|string|false|none|
|» creator|body|string|false|none|
|» description|body|string|false|none|
|» history|body|[object]|false|none|
|» » comment|body|string|false|none|
|» » description|body|string|false|none|
|» » when|body|string|false|none|
|» » who|body|string|false|none|
|» id|body|integer|false|none|
|» review|body|[object]|false|none|
|» » *anyOf*|body|object|false|none|
|» » by_user|body|string|false|none|
|» » state|body|string|false|none|
|» » when|body|string|false|none|
|» » who|body|string|false|none|
|» » *anyOf*|body|object|false|none|
|» » by_group|body|string|false|none|
|» » state|body|string|false|none|
|» » when|body|string|false|none|
|» » who|body|string|false|none|
|» » *anyOf*|body|object|false|none|
|» » by_project|body|string|false|none|
|» » state|body|string|false|none|
|» » when|body|string|false|none|
|» » who|body|string|false|none|
|» » *anyOf*|body|object|false|none|
|» » by_package|body|string|false|none|
|» » state|body|string|false|none|
|» » when|body|string|false|none|
|» » who|body|string|false|none|
|» state|body|object|false|none|
|» » comment|body|string|false|none|
|» » name|body|string|false|none|
|» » when|body|string|false|none|
|» » who|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|cmd|create|
|addrevision|1|
|ignore_delegate|1|
|ignore_build_state|1|

> Example responses

> 400 Response

```json
{
  "code": "expand_error",
  "summary": "The source of package test-project/test-package for revision 2 is broken"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 403 Response

```json
{
  "code": "create_bs_request_not_authorized",
  "summary": "You are not authorized to create this Bs request."
}
```

<h3 id="create-a-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK.<br><br>XML Schema used for body validation: [request.rng](../schema/request.rng)<br>|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="create-a-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|none|none|
|» options|object|false|none|none|
|» » sourceupdate|string|false|none|none|
|» source|object|false|none|none|
|» » package|string|false|none|none|
|» » project|string|false|none|none|
|» » rev|integer|false|none|none|
|» target|object|false|none|none|
|» » package|string|false|none|none|
|» » project|string|false|none|none|
|» type|string|false|none|none|
|creator|string|false|none|none|
|description|string|false|none|none|
|history|[object]|false|none|none|
|» comment|string|false|none|none|
|» description|string|false|none|none|
|» when|string|false|none|none|
|» who|string|false|none|none|
|id|integer|false|none|none|
|review|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» by_user|string|false|none|none|
|» state|string|false|none|none|
|» when|string|false|none|none|
|» who|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» by_group|string|false|none|none|
|» state|string|false|none|none|
|» when|string|false|none|none|
|» who|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» by_project|string|false|none|none|
|» state|string|false|none|none|
|» when|string|false|none|none|
|» who|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» by_package|string|false|none|none|
|» state|string|false|none|none|
|» when|string|false|none|none|
|» who|string|false|none|none|
|state|object|false|none|none|
|» comment|string|false|none|none|
|» name|string|false|none|none|
|» when|string|false|none|none|
|» who|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Show details about a specified request.

> Code samples

```bash
curl https://example.com/request/743 \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /request/{id}`

Show details about a specified request.

<h3 id="show-details-about-a-specified-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Id of the choosen request.|
|withhistory|query|string|false|Include the request history in the results.|
|withfullhistory|query|string|false|Includes both, request and review history in the results.|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find request with id '5'"
}
```

<h3 id="show-details-about-a-specified-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK.<br><br>XML Schema used for body validation: [request.rng](../schema/request.rng)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found|Inline|

<h3 id="show-details-about-a-specified-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|none|none|
|» options|object|false|none|none|
|» » sourceupdate|string|false|none|none|
|» source|object|false|none|none|
|» » package|string|false|none|none|
|» » project|string|false|none|none|
|» » rev|integer|false|none|none|
|» target|object|false|none|none|
|» » package|string|false|none|none|
|» » project|string|false|none|none|
|» type|string|false|none|none|
|creator|string|false|none|none|
|description|string|false|none|none|
|history|[object]|false|none|none|
|» comment|string|false|none|none|
|» description|string|false|none|none|
|» when|string|false|none|none|
|» who|string|false|none|none|
|id|integer|false|none|none|
|review|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» by_user|string|false|none|none|
|» state|string|false|none|none|
|» when|string|false|none|none|
|» who|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» by_group|string|false|none|none|
|» state|string|false|none|none|
|» when|string|false|none|none|
|» who|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» by_project|string|false|none|none|
|» state|string|false|none|none|
|» when|string|false|none|none|
|» who|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» by_package|string|false|none|none|
|» state|string|false|none|none|
|» when|string|false|none|none|
|» who|string|false|none|none|
|state|object|false|none|none|
|» comment|string|false|none|none|
|» name|string|false|none|none|
|» when|string|false|none|none|
|» who|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Modify a given request.

> Code samples

```bash
curl https://example.com/request/743 \
  -X PUT \
  -H 'Content-Type: application/xml; charset=utf-8' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{"action":{"options":{"sourceupdate":"cleanup"},"source":{"package":"obs-server","project":"home:foo-user","rev":521},"target":{"package":"obs-server","project":"OBS:Unstable"},"type":"submit"},"creator":"foo-user","description":"A little version update","history":[{"comment":"Please review sources","description":"Request created","when":"2021-01-15T13:39:43","who":"foo"}],"id":42,"review":[{"by_user":"obs-maintainer","state":"accepted","when":"2021-01-15T15:49:32","who":"obs-maintainer"}],"state":{"comment":"allright","name":"accepted","when":"2021-01-15T13:39:43","who":"bar-user"}}'
```

`PUT /request/{id}`

Modify a given request.

**NOTE:** Certain parts of a request can only be changed by admins.


> Body parameter

```json
{
  "action": {
    "options": {
      "sourceupdate": "cleanup"
    },
    "source": {
      "package": "obs-server",
      "project": "home:foo-user",
      "rev": 521
    },
    "target": {
      "package": "obs-server",
      "project": "OBS:Unstable"
    },
    "type": "submit"
  },
  "creator": "foo-user",
  "description": "A little version update",
  "history": [
    {
      "comment": "Please review sources",
      "description": "Request created",
      "when": "2021-01-15T13:39:43",
      "who": "foo"
    }
  ],
  "id": 42,
  "review": [
    {
      "by_user": "obs-maintainer",
      "state": "accepted",
      "when": "2021-01-15T15:49:32",
      "who": "obs-maintainer"
    }
  ],
  "state": {
    "comment": "allright",
    "name": "accepted",
    "when": "2021-01-15T13:39:43",
    "who": "bar-user"
  }
}
```

<h3 id="modify-a-given-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Id of the choosen request.|
|body|body|object|true|Request XML<br><br>**NOTE:** You cannot pass the request id in the xml. You can pass the history in the xml, but it will be simply ignored.<br><br>XML Schema used for body validation: [request.rng](../schema/request.rng)<br>|
|» action|body|object|false|none|
|» » options|body|object|false|none|
|» » » sourceupdate|body|string|false|none|
|» » source|body|object|false|none|
|» » » package|body|string|false|none|
|» » » project|body|string|false|none|
|» » » rev|body|integer|false|none|
|» » target|body|object|false|none|
|» » » package|body|string|false|none|
|» » » project|body|string|false|none|
|» » type|body|string|false|none|
|» creator|body|string|false|none|
|» description|body|string|false|none|
|» history|body|[object]|false|none|
|» » comment|body|string|false|none|
|» » description|body|string|false|none|
|» » when|body|string|false|none|
|» » who|body|string|false|none|
|» id|body|integer|false|none|
|» review|body|[object]|false|none|
|» » *anyOf*|body|object|false|none|
|» » by_user|body|string|false|none|
|» » state|body|string|false|none|
|» » when|body|string|false|none|
|» » who|body|string|false|none|
|» » *anyOf*|body|object|false|none|
|» » by_group|body|string|false|none|
|» » state|body|string|false|none|
|» » when|body|string|false|none|
|» » who|body|string|false|none|
|» » *anyOf*|body|object|false|none|
|» » by_project|body|string|false|none|
|» » state|body|string|false|none|
|» » when|body|string|false|none|
|» » who|body|string|false|none|
|» » *anyOf*|body|object|false|none|
|» » by_package|body|string|false|none|
|» » state|body|string|false|none|
|» » when|body|string|false|none|
|» » who|body|string|false|none|
|» state|body|object|false|none|
|» » comment|body|string|false|none|
|» » name|body|string|false|none|
|» » when|body|string|false|none|
|» » who|body|string|false|none|

> Example responses

> 400 Response

```json
{
  "code": "request_save_error",
  "summary": "Auto accept time is in the past"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find request with id '10'"
}
```

<h3 id="modify-a-given-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK.<br><br>XML Schema used for body validation: [request.rng](../schema/request.rng)<br>|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found|Inline|

<h3 id="modify-a-given-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|none|none|
|» options|object|false|none|none|
|» » sourceupdate|string|false|none|none|
|» source|object|false|none|none|
|» » package|string|false|none|none|
|» » project|string|false|none|none|
|» » rev|integer|false|none|none|
|» target|object|false|none|none|
|» » package|string|false|none|none|
|» » project|string|false|none|none|
|» type|string|false|none|none|
|creator|string|false|none|none|
|description|string|false|none|none|
|history|[object]|false|none|none|
|» comment|string|false|none|none|
|» description|string|false|none|none|
|» when|string|false|none|none|
|» who|string|false|none|none|
|id|integer|false|none|none|
|review|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» by_user|string|false|none|none|
|» state|string|false|none|none|
|» when|string|false|none|none|
|» who|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» by_group|string|false|none|none|
|» state|string|false|none|none|
|» when|string|false|none|none|
|» who|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» by_project|string|false|none|none|
|» state|string|false|none|none|
|» when|string|false|none|none|
|» who|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» by_package|string|false|none|none|
|» state|string|false|none|none|
|» when|string|false|none|none|
|» who|string|false|none|none|
|state|object|false|none|none|
|» comment|string|false|none|none|
|» name|string|false|none|none|
|» when|string|false|none|none|
|» who|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Apply certain actions on a specified request.

> Code samples

```bash
curl https://example.com/request/743 \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /request/{id}`

Apply certain actions on a specified request.

<h3 id="apply-certain-actions-on-a-specified-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Id of the choosen request.|
|cmd|query|string|false|- `addreview`:<br>  Add a review to a request. **NOTE:** You need to specify who has to address<br>  the review by providing an additional paramter. Possible options are:<br>  * by_user<br>  * by_group<br>  * by_project<br><br>- `assignreview`:<br>  Accept a review for a given group and assign a new review to a specific user.<br>  **NOTE:** You need to pass the group name in the `by_group` parameter<br>  and the new reviewer in the `reviewer` parameter.<br><br>- `changestate`: Modify the state of a given request.<br>  **NOTE:** You need to pass the new state throug the `newstate` parameter. Changing<br>  from one state to another is in certain cases not allowed. You can still force<br>  the operation by using the `force=1` parameter.<br><br>- `changereviewstate`:<br>  Change the state of a review inside a given request.<br><br>- `setpriority`:<br>  Change the priority of a given request. You have to pass the choosen priority through<br>  the `priority` parameter. Possible values are:<br>  * low<br>  * moderate<br>  * important<br>  * critical<br><br>- `setincident`: Change the target incident for maintenance_incident actions<br>  **NOTE:** You need to provide the incident number through the `incident`<br>  parameter.<br><br>- `setacceptat`: Set or modify the accept_at time. Either specified by the `time`<br>  parameter or by default set to now.<br><br>- `approve`: Pre-approve a request in the review state. It will turn into state `accepted`<br>  after the last review.<br><br>- `cancelapproval`: Reset the approval of a request<br>|
|newstate|query|string|false|Define the new state|
|priority|query|string|false|Define the new priority|
|by_user|query|string|false|Specify the user of a new review|
|by_group|query|string|false|Specify the group of the new review|
|by_project|query|string|false|Specify the project of the new review|
|by_package|query|string|false|Specify the package of the new review|
|incident|query|string|false|Specify the incident number for `setincident`|
|time|query|string|false|Specify the time for `setacceptat`|
|comment|query|string|false|Add a comment to one of the actions|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 400 Response

```json
{
  "code": "no_maintenance_release_target",
  "summary": "Maintenance incident request contains release target project test_maintenance_project with\ninvalid project kind \"standard\" (should be \"maintenance_release\") for package package01\n"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find request with id '120'"
}
```

<h3 id="apply-certain-actions-on-a-specified-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found|Inline|

<h3 id="apply-certain-actions-on-a-specified-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Delete a given request.

> Code samples

```bash
curl https://example.com/request/743 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /request/{id}`

Delete a given request.

<h3 id="delete-a-given-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Id of the choosen request.|

> Example responses

> 200 Response

```json
{
  "code": "ok",
  "summary": "Ok"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find request with id '10'"
}
```

<h3 id="delete-a-given-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The request has succeeded.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found|Inline|

<h3 id="delete-a-given-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Get the diff for all packages affected by the request.

> Code samples

```bash
curl 'https://example.com/request/743?cmd=diff' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /request/{id}?cmd=diff`

Get the diff for all packages affected by the request.


<h3 id="get-the-diff-for-all-packages-affected-by-the-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Id of the choosen request.|
|diff_to_superseded|query|string|false|Diff relative to a given superseded request. State the id of the corresponding superseded request.<br>|
|view|query|string|false|Set this parameter to xml in order to receive a structured diff instead of plain text.|
|withissues|query|string|false|Include parsed issues|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|xml|
|withissues|true|
|withissues|1|

> Example responses

> 200 Response

```text
spec files:
-----------
--- test.spec
+++ test.spec
@@ -0,0 +1 @@
+# NEW COMMENT
\ No newline at end of file

```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find request with id '355'"
}
```

<h3 id="get-the-diff-for-all-packages-affected-by-the-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found|Inline|

<h3 id="get-the-diff-for-all-packages-affected-by-the-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|none|none|
|» options|object|false|none|none|
|» » sourceupdate|string|false|none|none|
|» source|object|false|none|none|
|» » package|string|false|none|none|
|» » project|string|false|none|none|
|» » rev|string|false|none|none|
|» sourcediff|object|false|none|none|
|» » files|[object]|false|none|none|
|» » » file|object|false|none|none|
|» » » » diff|string|false|none|none|
|» » » » new|object|false|none|none|
|» » » » » md5|string|false|none|none|
|» » » » » name|string|false|none|none|
|» » » » » size|string|false|none|none|
|» » » » old|object|false|none|none|
|» » » » » md5|string|false|none|none|
|» » » » » name|string|false|none|none|
|» » » » » size|string|false|none|none|
|» » » » state|string|false|none|none|
|» » issues|[object]|false|none|none|
|» » » issue|object|false|none|none|
|» » » » label|string|false|none|none|
|» » » » name|string|false|none|none|
|» » » » state|string|false|none|none|
|» » » » tracker|string|false|none|none|
|» » » » url|string|false|none|none|
|» » key|string|false|none|none|
|» » new|object|false|none|none|
|» » » package|string|false|none|none|
|» » » project|string|false|none|none|
|» » » rev|string|false|none|none|
|» » » srcmd5|string|false|none|none|
|» » old|object|false|none|none|
|» » » package|string|false|none|none|
|» » » project|string|false|none|none|
|» » » rev|string|false|none|none|
|» » » srcmd5|string|false|none|none|
|» target|object|false|none|none|
|» » package|string|false|none|none|
|» » project|string|false|none|none|
|» type|string|false|none|none|
|actions|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Get a collection of requests for a specified target

> Code samples

```bash
curl 'https://example.com/request?view=collection' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /request?view=collection`

Get a collection of requests for a specified target. **NOTE:**
You need to set at least one of the following parameters in order
to use this endpoint:

* `user`
* `project`
* `package`
* `states`
* `types`
* `ids`


<h3 id="get-a-collection-of-requests-for-a-specified-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|query|string|false|Filter the results of requests and open reviews for a certain user. If no other parameters are<br>applied, it will include requests where the user is maintainer of the target or the creator of<br>the request.<br>|
|project|query|string|false|Limit the results of requests and open review requests to the specified target project.|
|package|query|string|false|Limit the results of requests and open review requests to the specified target package.|
|states|query|string|false|Limit results to a given request state. Multiple states can be provided as a comma separated list.|
|types|query|string|false|Limit the results to certain action types. Multiple types can be provided as a comma separated list.|
|roles|query|string|false|Limit the results to a given role. Multiple roles can be provided as a comma separated list.|
|withhistory|query|string|false|Include the request history in the results.|
|withfullhistory|query|string|false|Includes both, request and review history in the results.|
|limit|query|integer|false|Limit the results to the specified amount of requests.|
|ids|query|string|false|Limit the result to specified request id's. Multiple id's can be provided as a comma separated list.|

> Example responses

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "Couldn't find User with login = foo"
}
```

<h3 id="get-a-collection-of-requests-for-a-specified-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found|Inline|

<h3 id="get-a-collection-of-requests-for-a-specified-target-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matches|string|false|none|none|
|request|[object]|false|none|none|
|» action|object|false|none|none|
|» » options|object|false|none|none|
|» » » sourceupdate|string|false|none|none|
|» » source|object|false|none|none|
|» » » package|string|false|none|none|
|» » » project|string|false|none|none|
|» » » rev|integer|false|none|none|
|» » target|object|false|none|none|
|» » » package|string|false|none|none|
|» » » project|string|false|none|none|
|» » type|string|false|none|none|
|» creator|string|false|none|none|
|» description|string|false|none|none|
|» history|[object]|false|none|none|
|» » comment|string|false|none|none|
|» » description|string|false|none|none|
|» » when|string|false|none|none|
|» » who|string|false|none|none|
|» id|integer|false|none|none|
|» review|[object]|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » by_user|string|false|none|none|
|» » state|string|false|none|none|
|» » when|string|false|none|none|
|» » who|string|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » by_group|string|false|none|none|
|» » state|string|false|none|none|
|» » when|string|false|none|none|
|» » who|string|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » by_project|string|false|none|none|
|» » state|string|false|none|none|
|» » when|string|false|none|none|
|» » who|string|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » by_package|string|false|none|none|
|» » state|string|false|none|none|
|» » when|string|false|none|none|
|» » who|string|false|none|none|
|» state|object|false|none|none|
|» » comment|string|false|none|none|
|» » name|string|false|none|none|
|» » when|string|false|none|none|
|» » who|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

<h1 id="open-build-service-api-workers">Workers</h1>

## Lists status of workers, jobs, backend services and general statistics.

> Code samples

```bash
curl https://example.com/worker/status \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /worker/status`

Lists status of workers, running jobs, waiting jobs, status of the backend services and general statistics.

Other ways to obtain the same information as with this endpoint are:
  * `GET /worker/_status`
  * `GET /status/workerstatus`
  * `GET /build/_workerstatus`


> Example responses

> 200 Response

```json
{
  "blocked": [
    {
      "arch": "i586",
      "jobs": "0"
    },
    {
      "arch": "x86_64",
      "jobs": "0"
    }
  ],
  "buildavg": [
    {
      "arch": "i586",
      "buildavg": "1200"
    },
    {
      "arch": "x86_64",
      "buildavg": "1200"
    }
  ],
  "building": [
    {
      "arch": "x86_64",
      "hostarch": "x86_64",
      "package": "android-sdk",
      "project": "home:enzokiel",
      "repository": "openSUSE_11.3_Update",
      "starttime": "1289838671",
      "workerid": "1a1f67b948b6:2"
    }
  ],
  "clients": "2",
  "down": [
    {
      "hostarch": "aarch64",
      "workerid": "armbuild03:1"
    }
  ],
  "idle": [
    {
      "hostarch": "x86_64",
      "workerid": "1a1f67b948b6:1"
    }
  ],
  "partition": [
    {
      "daemon": [
        {
          "starttime": "1617711138",
          "state": "running",
          "type": "srcserver"
        },
        {
          "starttime": "1617711144",
          "state": "running",
          "type": "servicedispatch"
        },
        {
          "starttime": "1617711144",
          "state": "running",
          "type": "service"
        },
        {
          "starttime": "1617711145",
          "state": "running",
          "type": "clouduploadserver"
        },
        {
          "starttime": "1617711144",
          "state": "running",
          "type": "clouduploadworker"
        },
        {
          "arch": "i586",
          "queue": {
            "high": "0",
            "low": "11",
            "med": "0",
            "next": "0"
          },
          "starttime": "1617711145",
          "state": "running",
          "type": "scheduler"
        },
        {
          "arch": "x86_64",
          "queue": {
            "high": "0",
            "low": "11",
            "med": "0",
            "next": "0"
          },
          "starttime": "1617711145",
          "state": "running",
          "type": "scheduler"
        },
        {
          "starttime": "1617711143",
          "state": "running",
          "type": "repserver"
        },
        {
          "starttime": "1617711144",
          "state": "running",
          "type": "dispatcher"
        },
        {
          "starttime": "1617711145",
          "state": "running",
          "type": "publisher"
        },
        {
          "starttime": "1617711146",
          "state": "running",
          "type": "signer"
        }
      ]
    },
    {
      "daemon": [
        {
          "arch": "aarch64",
          "queue": {
            "high": "0",
            "low": "4",
            "med": "1",
            "next": "22"
          },
          "starttime": "1617148925",
          "state": "running",
          "type": "scheduler"
        }
      ],
      "name": "back-main"
    }
  ],
  "waiting": [
    {
      "arch": "i586",
      "jobs": "0"
    },
    {
      "arch": "x86_64",
      "jobs": "0"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

<h3 id="lists-status-of-workers-jobs-backend-services-and-general-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|

<h3 id="lists-status-of-workers-jobs-backend-services-and-general-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocked|[object]|false|none|none|
|» arch|string|false|none|none|
|» jobs|string|false|none|none|
|buildavg|[object]|false|none|none|
|» arch|string|false|none|none|
|» buildavg|string|false|none|none|
|building|[object]|false|none|none|
|» arch|string|false|none|none|
|» hostarch|string|false|none|none|
|» package|string|false|none|none|
|» project|string|false|none|none|
|» repository|string|false|none|none|
|» starttime|string|false|none|none|
|» workerid|string|false|none|none|
|clients|integer|false|none|none|
|down|[object]|false|none|none|
|» hostarch|string|false|none|none|
|» workerid|string|false|none|none|
|idle|[object]|false|none|none|
|» hostarch|string|false|none|none|
|» workerid|string|false|none|none|
|partition|[object]|false|none|none|
|» daemon|[object]|false|none|none|
|» » arch|string|false|none|none|
|» » queue|object|false|none|none|
|» » » high|string|false|none|none|
|» » » low|string|false|none|none|
|» » » med|string|false|none|none|
|» » » next|string|false|none|none|
|» » starttime|string|false|none|none|
|» » state|string|false|none|none|
|» » type|string|false|none|none|
|» name|string|false|none|none|
|waiting|[object]|false|none|none|
|» arch|string|false|none|none|
|» jobs|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Lists capabilites of a worker.

> Code samples

```bash
curl https://example.com/worker/x86_64:1a1f67b948b6%3A1 \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /worker/{architecture_name}:{worker_id}`

Lists capabilites of a worker.

This can be useful when checking for constraints.

This operation is the same as `GET /worker/capability/{architecture_name}:{worker_id}`.


<h3 id="lists-capabilites-of-a-worker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|architecture_name|path|string|true|Architecture name|
|worker_id|path|string|true|Worker id.|

> Example responses

> 200 Response

```json
{
  "hardware": {
    "cpu": {
      "flag": [
        "fpu",
        "vme",
        "de",
        "pse",
        "tsc",
        "msr"
      ]
    },
    "jobs": "1",
    "processors": "8"
  },
  "hostarch": "x86_64",
  "hostlabel": "OBS_WORKER_SECURITY_LEVEL_",
  "linux": {
    "flavor": "default",
    "version": "5.11.6-1"
  },
  "registerserver": "http://backend:5252",
  "sandbox": "chroot",
  "workerid": "1a1f67b948b6:1"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "404",
  "details": "404 remote error: unknown worker (http://backend:5252/worker/x86_64:1a1f67b948bf:1)",
  "summary": "remote error: unknown worker (http://backend:5252/worker/x86_64:1a1f67b948bf:1)"
}
```

<h3 id="lists-capabilites-of-a-worker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="lists-capabilites-of-a-worker-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hardware|object|false|none|none|
|» cpu|object|false|none|none|
|» » flag|[string]|false|none|none|
|» jobs|string|false|none|none|
|» processors|string|false|none|none|
|hostarch|string|false|none|none|
|hostlabel|string|false|none|none|
|linux|object|false|none|none|
|» flavor|string|false|none|none|
|» version|string|false|none|none|
|registerserver|string|false|none|none|
|sandbox|string|false|none|none|
|workerid|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>

## Lists workers which match a constraints filter.

> Code samples

```bash
curl 'https://example.com/worker?cmd=checkconstraints?project=home%3Auser1&repository=openSUSE_Tumbleweed&arch=x86_64&package=test_package' \
  -X POST \
  -H 'Content-Type: application/xml; charset=utf-8' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{"hardware":{"cpu":{"flag":["mmx","sse2"]}}}'
```

`POST /worker?cmd=checkconstraints`

Given a project, package, repository and architecture, list workers which can build with that restrictions, and also match a constraints filter.

This endpoint doesn't create or modify any data.

More information about constraints can be found in the
[user guide](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.build_job_constraints.html).

This operation is the same as `POST /worker/command/run?cmd=checkconstraints`.


> Body parameter

```json
{
  "hardware": {
    "cpu": {
      "flag": [
        "mmx",
        "sse2"
      ]
    }
  }
}
```

<h3 id="lists-workers-which-match-a-constraints-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|query|string|true|Project name.|
|repository|query|string|true|Repository name.|
|arch|query|string|true|Architecture name.|
|package|query|string|true|Package name.|
|body|body|object|true|Constraints XML filter|
|» hardware|body|object|false|none|
|» » cpu|body|object|false|none|
|» » » flag|body|[string]|false|none|
|» » disk|body|object|false|none|
|» » » size|body|string|false|none|
|» » memory|body|object|false|none|
|» » » size|body|string|false|none|
|» » physicalmemory|body|object|false|none|
|» » » size|body|string|false|none|
|» » processors|body|string|false|none|
|» hostlabel|body|string|false|none|
|» linux|body|object|false|none|
|» » flavor|body|string|false|none|
|» » version|body|object|false|none|
|» » » max|body|string|false|none|
|» » » min|body|string|false|none|
|» sandbox|body|string|false|none|

> Example responses

> 200 Response

```json
null
```

> 400 Response

```json
{
  "code": "missing_parameter",
  "summary": "Required Parameter arch missing"
}
```

> 401 Response

```json
{
  "code": "anonymous_user",
  "summary": "Anonymous user is not allowed here - please login"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "summary": "&lt;status code=\"404\"&gt;\n&lt;summary&gt;repository 'home:Admin/openSUSE_Tumbleweed' has no architecture 'x86_64d'&lt;/summary&gt;\n&lt;details&gt;404 repository 'home:Admin/openSUSE_Tumbleweed' has no architecture 'x86_64d'&lt;/details&gt;\n&lt;/status&gt;\n"
}
```

<h3 id="lists-workers-which-match-a-constraints-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request.|Inline|
|401|Unauthorized|Unauthorized.<br><br>XML Schema used for body validation: [status.xsd](../schema/status.xsd)<br>|Inline|
|404|Not Found|Not Found.|Inline|

<h3 id="lists-workers-which-match-a-constraints-filter-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|entry|[object]|false|none|none|
|» name|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|data|[string]|false|none|none|
|details|string|false|none|none|
|summary|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_authentication
</aside>
