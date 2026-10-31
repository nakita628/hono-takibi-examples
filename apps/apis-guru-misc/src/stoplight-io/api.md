<h1 id="stoplight">Stoplight vapi-v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.stoplight.io/v1">https://api.stoplight.io/v1</a>

# Authentication

* API Key (Authorization)
    - Parameter Name: **Authorization**, in: header.

<h1 id="stoplight-default">Default</h1>

## Publish Anonymous

<a id="opIdPOST_versions-publish-anon"></a>

> Code samples

```bash
curl https://example.com/versions/publish/anon \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "specData": {},
    "url": "string"
  }'
```

`POST /versions/publish/anon`

Anonymously publish to API Docs.

This endpoint will take a JSON spec or a URL to a swagger or raml spec.

```
{
  "specData": {...}
}
```

or

```
{
  "url": "http://petstore.swagger.io/v2/swagger.json"
}
```

The spec will be published to api-docs.io anonymously, which means you will not be able to update or remove this documentation.

The response will contain a url to the published documentation.

```
{
  "url": "https://swagger-petstore.api-docs.io/v1.0.0"
}
```


The limitations of anonymous publishing
* Cannot update/remove the documentation
* Cannot choose the subdomain
* Cannot choose the version
* Cannot add theming

> Body parameter

```json
{
  "specData": {},
  "url": "string"
}
```

<h3 id="publish-anonymous-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» specData|body|object \| string|false|none|
|» » *oneOf*|body|object|false|none|
|» » *oneOf*|body|string|false|none|
|» url|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "url": "https://stoplight.api-docs.io/api-v1"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 404 Response

```json
null
```

> 500 Response

```json
null
```

<h3 id="publish-anonymous-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request||[standarderror](#schemastandarderror)|
|401|Unauthorized||[standarderror](#schemastandarderror)|
|404|Not Found||[standarderror](#schemastandarderror)|
|500|Internal Server Error||[standarderror](#schemastandarderror)|

<h3 id="publish-anonymous-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stoplight-versions">Versions</h1>

## Export

<a id="opIdGET_versions-versionId-export-format"></a>

> Code samples

```bash
curl 'https://example.com/versions/{versionId}/export/oas.json' \
  -H 'Accept: application/json'
```

`GET /versions/{versionId}/export/{format}`

Export a version to your choice of API specification.

### Allowed Formats:

- oas.json
- oas.yaml
- raml08.yaml
- raml10.yaml
- stoplight.json
- stoplight.yaml

The stoplight format actually returns OAS (Swagger 2) with x-stoplight annotations. If you are exporting with the intent on importing back into Stoplight, this export format preserves the most information.

### Example URL:

`https://api.stoplight.io/v1/versions/123/export/oas.json`

<h3 id="export-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionId|path|string|true|This is the unique identifier for the version.|
|format|path|string|true|The specification / format that you want to export.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|oas.json|
|format|oas.yaml|
|format|raml08.yaml|
|format|raml10.yaml|
|format|stoplight.json|
|format|stoplight.yaml|

> Example responses

> 200 Response

```json
{
  "info": {
    "title": "Test API",
    "version": "1.0"
  },
  "paths": {},
  "swagger": "2.0"
}
```

> 401 Response

```json
null
```

> 404 Response

```json
null
```

<h3 id="export-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|401|Unauthorized||[standarderror](#schemastandarderror)|
|404|Not Found||[standarderror](#schemastandarderror)|

<aside class="success">
This operation does not require authentication
</aside>

## Import

<a id="opIdPUT_versions-versionId-import"></a>

> Code samples

```bash
curl https://example.com/versions/string/import \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "options": {
      "removeExtraEndpoints": true,
      "removeExtraModels": true
    },
    "url": "http://petstore.swagger.io/v2/swagger.json"
  }'
```

`PUT /versions/{versionId}/import`

Import the given specification into an existing version. 

**Warning, this is a destructive action! Any resources present in both the existing version, and the specification being imported, will be overwritten.**

This endpoint is particularly useful when you manage a specification file (Swagger or RAML) outside of Stoplight, and want to keep your Stoplight API version up to date as that specification changes.

By default, a "merge" is performed when importing. If a resource exists in the specification that you are importing, and in the Stoplight API, the resource will be overwritten. If a resource exists in the Stoplight API, but not in the spefication that you are importing, the resource will be left alone (and not deleted).

You can include an optional `options` property in the request body, to indicate if you would like to perform more of a replacement (instead of a merge). The options are documented in full in the response definition below these notes.

Take this request + request body for example:

`PUT https://api.stoplight.io/v1/versions/123/import`
```json
{
  "url": "http://petstore.swagger.io/v2/swagger.json",
  "options": {
    "removeExtraEndpoints": true,
    "removeExtraSchemas": true
  }
}
```

This request will grab the swagger specification described at `http://petstore.swagger.io/v2/swagger.json`, and import it into the Stoplight API version with id `123`. Additionally, it will delete any existing endpoints or models that are not described in the petstore swagger being imported.

Instead of a URL, you can provide the actual specification to be imported, either as a string (in the case of YAML) or an object (in the case of JSON). That request would look something like this:

`PUT https://api.stoplight.io/v1/versions/123/import`
```json
{
  "specData": {
    "swagger": "2.0",
    "info": {}
    ... rest of spec
  }
}
```

> Body parameter

```json
{
  "options": {
    "removeExtraEndpoints": true,
    "removeExtraModels": true
  },
  "url": "http://petstore.swagger.io/v2/swagger.json"
}
```

<h3 id="import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionId|path|string|true|This is the unique identifier for the version.|
|body|body|object|false|none|
|» options|body|object|false|none|
|» » removeExtraEndpoints|body|boolean|false|Default: false.|
|» » removeExtraSchemas|body|boolean|false|Default: false.|
|» » removeExtraTextSections|body|boolean|false|Default: false.|
|» » removeExtraTraits|body|boolean|false|Default: false.|
|» specData|body|object \| string|false|none|
|» » *oneOf*|body|object|false|none|
|» » *oneOf*|body|string|false|none|
|» url|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "endpointCount": 0,
    "format": "RAML08",
    "projectId": "string",
    "schemaCount": 0,
    "testCount": 0,
    "textSectionCount": 0,
    "traitCount": 0,
    "versionId": "string",
    "workspaceId": "string"
  }
}
```

> 401 Response

```json
null
```

> 404 Response

```json
null
```

<h3 id="import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized||[standarderror](#schemastandarderror)|
|404|Not Found||[standarderror](#schemastandarderror)|

<h3 id="import-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|» endpointCount|number|true|none|none|
|» format|string|true|none|none|
|» projectId|string|true|none|none|
|» schemaCount|number|true|none|none|
|» testCount|number|true|none|none|
|» textSectionCount|number|true|none|none|
|» traitCount|number|true|none|none|
|» versionId|string|true|none|none|
|» workspaceId|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» format|RAML08|
|» format|RAML10|
|» format|SWAGGER|
|» format|STOPLIGHTX|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Publish

<a id="opIdPOST_versions-versionId-publish"></a>

> Code samples

```bash
curl https://example.com/versions/string/publish \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /versions/{versionId}/publish`

Re-publish an API version in Stoplight. This will re-publish the given API version, with whatever publish settings have already been setup in the app.

This will only work with APIs that have previously been published at least once.

This works well with the #endpoint:957qEfc97BB5XGAeZ endpoint to augment your continuous integration processes, and automatically re-publish your documentation when certain events happen. Once such scenario is:

1. Swagger is generated from your codebase, and pushed up to Github.
2. A simple script that you write sends a request to the Stoplight API to import the new specification, passing in the URL to the swagger file on Github.
3. After the import succeeds, and your API in Stoplight is up to date, the script sends a request to the Stoplight API (this endpoint) to re-publish your documentation.

<h3 id="publish-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionId|path|string|true|This is the unique identifier for the version.|

> Example responses

> 200 Response

```json
{
  "customDomain": "https://help.stoplight.io/api-v1",
  "url": "https://stoplight.api-docs.io/api-v1"
}
```

> 401 Response

```json
null
```

> 404 Response

```json
null
```

<h3 id="publish-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized||[standarderror](#schemastandarderror)|
|404|Not Found||[standarderror](#schemastandarderror)|

<h3 id="publish-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customDomain|string|false|none|none|
|url|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Unpublish

<a id="opIdPUT_versions-versionId-unpublish"></a>

> Code samples

```bash
curl https://example.com/versions/string/unpublish \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PUT /versions/{versionId}/unpublish`

Unpublish the documentation associated with the given API version.

<h3 id="unpublish-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionId|path|string|true|This is the unique identifier for the version.|

> Example responses

> 200 Response

```json
{
  "data": {}
}
```

> 401 Response

```json
null
```

> 404 Response

```json
null
```

<h3 id="unpublish-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized||[standarderror](#schemastandarderror)|
|404|Not Found||[standarderror](#schemastandarderror)|

<h3 id="unpublish-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

# Schemas

<h2 id="tocS_shared-user">shared-user</h2>
<!-- backwards compatibility -->
<a id="schemashared-user"></a>
<a id="schema_shared-user"></a>
<a id="tocSshared-user"></a>
<a id="tocsshared-user"></a>

```json
{
  "": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
||string|false|none|none|
|username|string|false|none|none|

<h2 id="tocS_standarderror">standarderror</h2>
<!-- backwards compatibility -->
<a id="schemastandarderror"></a>
<a id="schema_standarderror"></a>
<a id="tocSstandarderror"></a>
<a id="tocsstandarderror"></a>

```json
null
```
