<h1 id="readme-api-">ReadMe API 🦉 v4.355.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Create beautiful product and API documentation with our developer friendly platform.

Base URLs:

* <a href="https://dash.readme.com/api/v1">https://dash.readme.com/api/v1</a>

Email: <a href="mailto:support@readme.io">API Support</a> 
Web: <a href="https://docs.readme.com/main/docs/need-more-support">API Support</a> 

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="readme-api--api-registry">API Registry</h1>

## Retrieve an entry from the API Registry

<a id="opIdgetAPIRegistry"></a>

> Code samples

```bash
curl https://example.com/api-registry/string \
  -H 'Accept: application/json'
```

`GET /api-registry/{uuid}`

Get an API definition file that's been uploaded to ReadMe.

<h3 id="retrieve-an-entry-from-the-api-registry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|An API Registry UUID. This can be found by navigating to your API Reference page and viewing code snippets for Node with the `api` library.|

> Example responses

> 200 Response

```json
{}
```

> 404 Response

```json
{
  "error": "REGISTRY_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="retrieve-an-entry-from-the-api-registry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved API registry entry.|Inline|
|404|Not Found|The registry entry couldn't be found.|[error_REGISTRY_NOTFOUND](#schemaerror_registry_notfound)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="readme-api--api-specification">API Specification</h1>

## Get metadata

<a id="opIdgetAPISpecification"></a>

> Code samples

```bash
curl https://example.com/api-specification \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api-specification`

Get API specification metadata.

<h3 id="get-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|perPage|query|integer|false|Number of items to include in pagination (up to 100, defaults to 10).|
|page|query|integer|false|Used to specify further pages (starts at 1).|
|x-readme-version|header|string|false|Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions.|

> Example responses

> 400 Response

```json
{
  "error": "VERSION_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 401 Response

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 403 Response

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 404 Response

```json
{
  "error": "VERSION_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="get-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved API specification metadata.|None|
|400|Bad Request|No version was supplied.|[error_VERSION_EMPTY](#schemaerror_version_empty)|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Unauthorized|Inline|
|404|Not Found|The version couldn't be found.|[error_VERSION_NOTFOUND](#schemaerror_version_notfound)|

<h3 id="get-metadata-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_EMPTY](#schemaerror_apikey_empty)|false|none|none|
|*oneOf*|[error_APIKEY_NOTFOUND](#schemaerror_apikey_notfound)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_MISMATCH](#schemaerror_apikey_mismatch)|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Pagination information. See https://docs.readme.com/main/reference/pagination for more information.|
|200|x-total-count|string||The total amount of results, ignoring pagination. See https://docs.readme.com/main/reference/pagination for more information about pagination.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Upload specification

<a id="opIduploadAPISpecification"></a>

> Code samples

```bash
curl https://example.com/api-specification \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'spec=@/path/to/file'
```

`POST /api-specification`

Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/main/docs/rdme.

> Body parameter

```yaml
spec: string
```

<h3 id="upload-specification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-readme-version|header|string|false|Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions.|
|body|body|object|true|none|
|» spec|body|string(binary)|false|OpenAPI/Swagger file. We accept JSON or YAML.|

> Example responses

> 400 Response

```json
{
  "error": "SPEC_FILE_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 401 Response

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 403 Response

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 408 Response

```json
{
  "error": "SPEC_TIMEOUT",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="upload-specification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The API specification was successfully uploaded.|None|
|400|Bad Request|There was a validation error during upload.|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Unauthorized|Inline|
|408|Request Timeout|The spec upload timed out.|[error_SPEC_TIMEOUT](#schemaerror_spec_timeout)|

<h3 id="upload-specification-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_SPEC_FILE_EMPTY](#schemaerror_spec_file_empty)|false|none|none|
|*oneOf*|[error_SPEC_INVALID](#schemaerror_spec_invalid)|false|none|none|
|*oneOf*|[error_SPEC_INVALID_SCHEMA](#schemaerror_spec_invalid_schema)|false|none|none|
|*oneOf*|[error_SPEC_VERSION_NOTFOUND](#schemaerror_spec_version_notfound)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_EMPTY](#schemaerror_apikey_empty)|false|none|none|
|*oneOf*|[error_APIKEY_NOTFOUND](#schemaerror_apikey_notfound)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_MISMATCH](#schemaerror_apikey_mismatch)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Update specification

<a id="opIdupdateAPISpecification"></a>

> Code samples

```bash
curl https://example.com/api-specification/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'spec=@/path/to/file'
```

`PUT /api-specification/{id}`

Update an API specification in ReadMe.

> Body parameter

```yaml
spec: string
```

<h3 id="update-specification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the API specification. The unique ID for each API can be found by navigating to your **API Definitions** page.|
|body|body|object|true|none|
|» spec|body|string(binary)|false|OpenAPI/Swagger file. We accept JSON or YAML.|

> Example responses

> 400 Response

```json
{
  "error": "SPEC_FILE_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 401 Response

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 403 Response

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 408 Response

```json
{
  "error": "SPEC_TIMEOUT",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="update-specification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The API specification was updated.|None|
|400|Bad Request|There was a validation error during upload.|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Unauthorized|Inline|
|404|Not Found|There is no API specification with that ID.|None|
|408|Request Timeout|The spec upload timed out.|[error_SPEC_TIMEOUT](#schemaerror_spec_timeout)|

<h3 id="update-specification-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_SPEC_FILE_EMPTY](#schemaerror_spec_file_empty)|false|none|none|
|*oneOf*|[error_SPEC_ID_DUPLICATE](#schemaerror_spec_id_duplicate)|false|none|none|
|*oneOf*|[error_SPEC_ID_INVALID](#schemaerror_spec_id_invalid)|false|none|none|
|*oneOf*|[error_SPEC_INVALID](#schemaerror_spec_invalid)|false|none|none|
|*oneOf*|[error_SPEC_INVALID_SCHEMA](#schemaerror_spec_invalid_schema)|false|none|none|
|*oneOf*|[error_SPEC_VERSION_NOTFOUND](#schemaerror_spec_version_notfound)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_EMPTY](#schemaerror_apikey_empty)|false|none|none|
|*oneOf*|[error_APIKEY_NOTFOUND](#schemaerror_apikey_notfound)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_MISMATCH](#schemaerror_apikey_mismatch)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Delete specification

<a id="opIddeleteAPISpecification"></a>

> Code samples

```bash
curl https://example.com/api-specification/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api-specification/{id}`

Delete an API specification in ReadMe.

<h3 id="delete-specification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the API specification. The unique ID for each API can be found by navigating to your **API Definitions** page.|

> Example responses

> 400 Response

```json
{
  "error": "SPEC_ID_INVALID",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 401 Response

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 403 Response

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 404 Response

```json
{
  "error": "SPEC_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="delete-specification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The API specification was deleted.|None|
|400|Bad Request|The spec ID isn't valid.|[error_SPEC_ID_INVALID](#schemaerror_spec_id_invalid)|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Unauthorized|Inline|
|404|Not Found|The spec couldn't be found.|[error_SPEC_NOTFOUND](#schemaerror_spec_notfound)|

<h3 id="delete-specification-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_EMPTY](#schemaerror_apikey_empty)|false|none|none|
|*oneOf*|[error_APIKEY_NOTFOUND](#schemaerror_apikey_notfound)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_MISMATCH](#schemaerror_apikey_mismatch)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Get our OpenAPI Definition

<a id="opIdgetAPISchema"></a>

> Code samples

```bash
curl https://example.com/schema \
  -H 'Accept: application/json'
```

`GET /schema`

Returns a copy of our OpenAPI Definition.

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-our-openapi-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OpenAPI Definition data|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="readme-api--apply-to-readme">Apply to ReadMe</h1>

## Get open roles

<a id="opIdgetOpenRoles"></a>

> Code samples

```bash
curl https://example.com/apply \
  -H 'Accept: application/json'
```

`GET /apply`

Returns all the roles we're hiring for at ReadMe!

> Example responses

> 200 Response

```json
[
  {
    "slug": "api-engineer",
    "title": "API Engineer",
    "description": "string",
    "pullquote": "Deeply knowledgeable of the web, HTTP, and the API space.",
    "location": "Remote",
    "department": "Engineering",
    "url": "http://example.com"
  }
]
```

<h3 id="get-open-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All the roles that we're hiring for.|Inline|

<h3 id="get-open-roles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[jobOpening](#schemajobopening)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Submit your application!

<a id="opIdapplyToReadMe"></a>

> Code samples

```bash
curl https://example.com/apply \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Your Name",
    "email": "you@example.com",
    "job": "Front End Engineer",
    "pronouns": "string",
    "linkedin": "http://example.com",
    "github": "http://example.com",
    "coverLetter": "string",
    "dontReallyApply": false
  }'
```

`POST /apply`

This endpoint will let you apply to a job at ReadMe programatically, without having to go through our UI!

> Body parameter

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "job": "Front End Engineer",
  "pronouns": "string",
  "linkedin": "http://example.com",
  "github": "http://example.com",
  "coverLetter": "string",
  "dontReallyApply": false
}
```

<h3 id="submit-your-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[apply](#schemaapply)|true|none|
|» name|body|string|true|Your full name|
|» email|body|string(email)|true|A valid email we can reach you at.|
|» job|body|string|true|The job you're looking to apply for (https://readme.com/careers).|
|» pronouns|body|string|false|Learn more at https://lgbtlifecenter.org/pronouns/|
|» linkedin|body|string(url)|false|What have you been up to the past few years?|
|» github|body|string(url)|false|Or Bitbucket, Gitlab or anywhere else your code is hosted!|
|» coverLetter|body|string(blob)|false|What should we know about you?|
|» dontReallyApply|body|boolean|false|Want to play with the API but not actually apply? Set this to true.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» job|Front End Engineer|
|» job|Full Stack Engineer|
|» job|Head of Product|
|» job|Head of Solutions Engineering|
|» job|Product Designer|

<h3 id="submit-your-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|You did it!|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="readme-api--categories">Categories</h1>

## Get all categories

<a id="opIdgetCategories"></a>

> Code samples

```bash
curl https://example.com/categories \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /categories`

Returns all the categories for a specified version.

<h3 id="get-all-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-readme-version|header|string|false|Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions.|
|perPage|query|integer|false|Number of items to include in pagination (up to 100, defaults to 10).|
|page|query|integer|false|Used to specify further pages (starts at 1).|

<h3 id="get-all-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of categories.|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Pagination information. See https://docs.readme.com/main/reference/pagination for more information.|
|200|x-total-count|string||The total amount of results, ignoring pagination. See https://docs.readme.com/main/reference/pagination for more information about pagination.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Create category

<a id="opIdcreateCategory"></a>

> Code samples

```bash
curl https://example.com/categories \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "title": "string",
    "type": "guide"
  }'
```

`POST /categories`

Create a new category inside of this project.

> Body parameter

```json
{
  "title": "string",
  "type": "guide"
}
```

<h3 id="create-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-readme-version|header|string|false|Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions.|
|body|body|object|true|none|
|» title|body|string|true|A short title for the category. This is what will show in the sidebar.|
|» type|body|string|false|A category can be part of your reference or guide documentation, which is determined by this field.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|reference|
|» type|guide|

> Example responses

> 400 Response

```json
{
  "error": "CATEGORY_INVALID",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="create-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The category has successfully been created.|None|
|400|Bad Request|The category couldn't be saved.|[error_CATEGORY_INVALID](#schemaerror_category_invalid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Get category

<a id="opIdgetCategory"></a>

> Code samples

```bash
curl https://example.com/categories/getting-started \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /categories/{slug}`

Returns the category with this slug.

<h3 id="get-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|A URL-safe representation of the category title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the category "Getting Started", enter the slug "getting-started".|
|x-readme-version|header|string|false|Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions.|

> Example responses

> 404 Response

```json
{
  "error": "CATEGORY_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="get-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The category exists and has been returned.|None|
|404|Not Found|The category couldn't be found.|[error_CATEGORY_NOTFOUND](#schemaerror_category_notfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Update category

<a id="opIdupdateCategory"></a>

> Code samples

```bash
curl https://example.com/categories/getting-started \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "title": "string",
    "type": "guide"
  }'
```

`PUT /categories/{slug}`

Change the properties of a category.

> Body parameter

```json
{
  "title": "string",
  "type": "guide"
}
```

<h3 id="update-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|A URL-safe representation of the category title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the category "Getting Started", enter the slug "getting-started".|
|x-readme-version|header|string|false|Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions.|
|body|body|[category](#schemacategory)|true|none|
|» title|body|string|false|A short title for the category. This is what will show in the sidebar.|
|» type|body|string|false|A category can be part of your reference or guide documentation, which is determined by this field.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|reference|
|» type|guide|

> Example responses

> 400 Response

```json
{
  "error": "CATEGORY_INVALID",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 404 Response

```json
{
  "error": "CATEGORY_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="update-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The category was successfully updated.|None|
|400|Bad Request|The category couldn't be saved.|[error_CATEGORY_INVALID](#schemaerror_category_invalid)|
|404|Not Found|The category couldn't be found.|[error_CATEGORY_NOTFOUND](#schemaerror_category_notfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Delete category

<a id="opIddeleteCategory"></a>

> Code samples

```bash
curl https://example.com/categories/getting-started \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /categories/{slug}`

Delete the category with this slug.
>⚠️Heads Up!
> This will also delete all of the docs within this category.

<h3 id="delete-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|A URL-safe representation of the category title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the category "Getting Started", enter the slug "getting-started".|
|x-readme-version|header|string|false|Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions.|

> Example responses

> 404 Response

```json
{
  "error": "CATEGORY_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="delete-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The category was deleted.|None|
|404|Not Found|The category couldn't be found.|[error_CATEGORY_NOTFOUND](#schemaerror_category_notfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Get docs for category

<a id="opIdgetCategoryDocs"></a>

> Code samples

```bash
curl https://example.com/categories/getting-started/docs \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /categories/{slug}/docs`

Returns the docs and children docs within this category.

<h3 id="get-docs-for-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|A URL-safe representation of the category title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the category "Getting Started", enter the slug "getting-started".|
|x-readme-version|header|string|false|Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions.|

> Example responses

> 404 Response

```json
{
  "error": "CATEGORY_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="get-docs-for-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The category exists and all of the docs have been returned.|None|
|404|Not Found|The category couldn't be found.|[error_CATEGORY_NOTFOUND](#schemaerror_category_notfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="readme-api--changelog">Changelog</h1>

## Get changelogs

<a id="opIdgetChangelogs"></a>

> Code samples

```bash
curl https://example.com/changelogs \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /changelogs`

Returns a list of changelogs.

<h3 id="get-changelogs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|perPage|query|integer|false|Number of items to include in pagination (up to 100, defaults to 10).|
|page|query|integer|false|Used to specify further pages (starts at 1).|

<h3 id="get-changelogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of changelogs.|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Pagination information. See https://docs.readme.com/main/reference/pagination for more information.|
|200|x-total-count|string||The total amount of results, ignoring pagination. See https://docs.readme.com/main/reference/pagination for more information about pagination.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Create changelog

<a id="opIdcreateChangelog"></a>

> Code samples

```bash
curl https://example.com/changelogs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "title": "string",
    "type": "",
    "body": "string",
    "hidden": true
  }'
```

`POST /changelogs`

Create a new changelog entry.

> Body parameter

```json
{
  "title": "string",
  "type": "",
  "body": "string",
  "hidden": true
}
```

<h3 id="create-changelog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[changelog](#schemachangelog)|true|none|
|» title|body|string|true|Title of the changelog.|
|» type|body|string|false|none|
|» body|body|string|true|Body content of the changelog.|
|» hidden|body|boolean|false|Visibility of the changelog.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|""|
|» type|added|
|» type|fixed|
|» type|improved|
|» type|deprecated|
|» type|removed|

<h3 id="create-changelog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The changelog was successfully created.|None|
|400|Bad Request|There was a validation error during creation.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Get changelog

<a id="opIdgetChangelog"></a>

> Code samples

```bash
curl https://example.com/changelogs/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /changelogs/{slug}`

Returns the changelog with this slug.

<h3 id="get-changelog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|A URL-safe representation of the changelog title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the changelog "Owlet Update", enter the slug "owlet-update".|

<h3 id="get-changelog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The changelog exists and has been returned.|None|
|404|Not Found|There is no changelog with that slug.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Update changelog

<a id="opIdupdateChangelog"></a>

> Code samples

```bash
curl https://example.com/changelogs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "title": "string",
    "type": "",
    "body": "string",
    "hidden": true
  }'
```

`PUT /changelogs/{slug}`

Update a changelog with this slug.

> Body parameter

```json
{
  "title": "string",
  "type": "",
  "body": "string",
  "hidden": true
}
```

<h3 id="update-changelog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|A URL-safe representation of the changelog title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the changelog "Owlet Weekly Update", enter the slug "owlet-weekly-update".|
|body|body|[changelog](#schemachangelog)|true|none|
|» title|body|string|true|Title of the changelog.|
|» type|body|string|false|none|
|» body|body|string|true|Body content of the changelog.|
|» hidden|body|boolean|false|Visibility of the changelog.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|""|
|» type|added|
|» type|fixed|
|» type|improved|
|» type|deprecated|
|» type|removed|

<h3 id="update-changelog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The changelog was successfully updated.|None|
|400|Bad Request|There was a validation error during update.|None|
|404|Not Found|There is no changelog with that slug.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Delete changelog

<a id="opIddeleteChangelog"></a>

> Code samples

```bash
curl https://example.com/changelogs/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /changelogs/{slug}`

Delete the changelog with this slug.

<h3 id="delete-changelog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|A URL-safe representation of the changelog title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the changelog "Owlet Weekly Update", enter the slug "owlet-weekly-update".|

<h3 id="delete-changelog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The changelog was successfully updated.|None|
|404|Not Found|There is no changelog with that slug.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="readme-api--custom-pages">Custom Pages</h1>

## Get custom pages

<a id="opIdgetCustomPages"></a>

> Code samples

```bash
curl https://example.com/custompages \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /custompages`

Returns a list of custom pages.

<h3 id="get-custom-pages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|perPage|query|integer|false|Number of items to include in pagination (up to 100, defaults to 10).|
|page|query|integer|false|Used to specify further pages (starts at 1).|

> Example responses

> 401 Response

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 403 Response

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="get-custom-pages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of custom pages.|None|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Unauthorized|Inline|

<h3 id="get-custom-pages-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_EMPTY](#schemaerror_apikey_empty)|false|none|none|
|*oneOf*|[error_APIKEY_NOTFOUND](#schemaerror_apikey_notfound)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_MISMATCH](#schemaerror_apikey_mismatch)|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Pagination information. See https://docs.readme.com/main/reference/pagination for more information.|
|200|x-total-count|string||The total amount of results, ignoring pagination. See https://docs.readme.com/main/reference/pagination for more information about pagination.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Create custom page

<a id="opIdcreateCustomPage"></a>

> Code samples

```bash
curl https://example.com/custompages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "title": "string",
    "body": "string",
    "html": "string",
    "htmlmode": false,
    "hidden": true
  }'
```

`POST /custompages`

Create a new custom page inside of this project.

> Body parameter

```json
{
  "title": "string",
  "body": "string",
  "html": "string",
  "htmlmode": false,
  "hidden": true
}
```

<h3 id="create-custom-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[customPage](#schemacustompage)|true|none|
|» title|body|string|true|Title of the custom page.|
|» body|body|string|false|Body formatted in Markdown (displayed by default).|
|» html|body|string|false|Body formatted in HTML (sanitized, only displayed if `htmlmode` is **true**).|
|» htmlmode|body|boolean|false|**true** if `html` should be displayed, **false** if `body` should be displayed.|
|» hidden|body|boolean|false|Visibility of the custom page.|

> Example responses

> 400 Response

```json
{
  "error": "CUSTOMPAGE_INVALID",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 401 Response

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 403 Response

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="create-custom-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The custom page was successfully created.|None|
|400|Bad Request|The page couldn't be saved.|[error_CUSTOMPAGE_INVALID](#schemaerror_custompage_invalid)|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Unauthorized|Inline|

<h3 id="create-custom-page-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_EMPTY](#schemaerror_apikey_empty)|false|none|none|
|*oneOf*|[error_APIKEY_NOTFOUND](#schemaerror_apikey_notfound)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_MISMATCH](#schemaerror_apikey_mismatch)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Get custom page

<a id="opIdgetCustomPage"></a>

> Code samples

```bash
curl https://example.com/custompages/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /custompages/{slug}`

Returns the custom page with this slug.

<h3 id="get-custom-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|A URL-safe representation of the page title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the title "Getting Started", enter the slug "getting-started".|

> Example responses

> 401 Response

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 403 Response

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 404 Response

```json
{
  "error": "CUSTOMPAGE_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="get-custom-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The custom page exists and has been returned.|None|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Unauthorized|Inline|
|404|Not Found|The custom page couldn't be found.|[error_CUSTOMPAGE_NOTFOUND](#schemaerror_custompage_notfound)|

<h3 id="get-custom-page-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_EMPTY](#schemaerror_apikey_empty)|false|none|none|
|*oneOf*|[error_APIKEY_NOTFOUND](#schemaerror_apikey_notfound)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_MISMATCH](#schemaerror_apikey_mismatch)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Update custom page

<a id="opIdupdateCustomPage"></a>

> Code samples

```bash
curl https://example.com/custompages/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "title": "string",
    "body": "string",
    "html": "string",
    "htmlmode": false,
    "hidden": true
  }'
```

`PUT /custompages/{slug}`

Update a custom page with this slug.

> Body parameter

```json
{
  "title": "string",
  "body": "string",
  "html": "string",
  "htmlmode": false,
  "hidden": true
}
```

<h3 id="update-custom-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|A URL-safe representation of the page title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the title "Getting Started", enter the slug "getting-started".|
|body|body|[customPage](#schemacustompage)|true|none|
|» title|body|string|true|Title of the custom page.|
|» body|body|string|false|Body formatted in Markdown (displayed by default).|
|» html|body|string|false|Body formatted in HTML (sanitized, only displayed if `htmlmode` is **true**).|
|» htmlmode|body|boolean|false|**true** if `html` should be displayed, **false** if `body` should be displayed.|
|» hidden|body|boolean|false|Visibility of the custom page.|

> Example responses

> 400 Response

```json
{
  "error": "CUSTOMPAGE_INVALID",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 401 Response

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 403 Response

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 404 Response

```json
{
  "error": "CUSTOMPAGE_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="update-custom-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The custom page was successfully updated.|None|
|400|Bad Request|The page couldn't be saved.|[error_CUSTOMPAGE_INVALID](#schemaerror_custompage_invalid)|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Unauthorized|Inline|
|404|Not Found|The custom page couldn't be found.|[error_CUSTOMPAGE_NOTFOUND](#schemaerror_custompage_notfound)|

<h3 id="update-custom-page-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_EMPTY](#schemaerror_apikey_empty)|false|none|none|
|*oneOf*|[error_APIKEY_NOTFOUND](#schemaerror_apikey_notfound)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_MISMATCH](#schemaerror_apikey_mismatch)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Delete custom page

<a id="opIddeleteCustomPage"></a>

> Code samples

```bash
curl https://example.com/custompages/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /custompages/{slug}`

Delete the custom page with this slug.

<h3 id="delete-custom-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|A URL-safe representation of the page title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the title "Getting Started", enter the slug "getting-started".|

> Example responses

> 401 Response

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 403 Response

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 404 Response

```json
{
  "error": "CUSTOMPAGE_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="delete-custom-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The custom page was successfully updated.|None|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Unauthorized|Inline|
|404|Not Found|The custom page couldn't be found.|[error_CUSTOMPAGE_NOTFOUND](#schemaerror_custompage_notfound)|

<h3 id="delete-custom-page-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_EMPTY](#schemaerror_apikey_empty)|false|none|none|
|*oneOf*|[error_APIKEY_NOTFOUND](#schemaerror_apikey_notfound)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_MISMATCH](#schemaerror_apikey_mismatch)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="readme-api--docs">Docs</h1>

## Get doc

<a id="opIdgetDoc"></a>

> Code samples

```bash
curl https://example.com/docs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /docs/{slug}`

Returns the doc with this slug.

<h3 id="get-doc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|A URL-safe representation of the page title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the title "Getting Started", enter the slug "getting-started".|
|x-readme-version|header|string|false|Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions.|

> Example responses

> 200 Response

```json
{
  "title": "string",
  "type": "basic",
  "body": "string",
  "category": "string",
  "hidden": true,
  "order": 999,
  "parentDoc": "string",
  "error": {
    "code": "string"
  }
}
```

> 401 Response

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 403 Response

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 404 Response

```json
{
  "error": "DOC_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="get-doc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The doc exists and has been returned.|[docSchemaResponse](#schemadocschemaresponse)|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Unauthorized|Inline|
|404|Not Found|The doc couldn't be found.|[error_DOC_NOTFOUND](#schemaerror_doc_notfound)|

<h3 id="get-doc-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_EMPTY](#schemaerror_apikey_empty)|false|none|none|
|*oneOf*|[error_APIKEY_NOTFOUND](#schemaerror_apikey_notfound)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_MISMATCH](#schemaerror_apikey_mismatch)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Update doc

<a id="opIdupdateDoc"></a>

> Code samples

```bash
curl https://example.com/docs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "title": "string",
    "type": "basic",
    "body": "string",
    "category": "string",
    "hidden": true,
    "order": 999,
    "parentDoc": "string",
    "error": {
      "code": "string"
    },
    "categorySlug": "string",
    "parentDocSlug": "string"
  }'
```

`PUT /docs/{slug}`

Update a doc with this slug.

> Body parameter

```json
{
  "title": "string",
  "type": "basic",
  "body": "string",
  "category": "string",
  "hidden": true,
  "order": 999,
  "parentDoc": "string",
  "error": {
    "code": "string"
  },
  "categorySlug": "string",
  "parentDocSlug": "string"
}
```

<h3 id="update-doc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|A URL-safe representation of the page title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the title "Getting Started", enter the slug "getting-started".|
|x-readme-version|header|string|false|Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions.|
|body|body|[docSchemaPut](#schemadocschemaput)|true|none|
|» title|body|string|false|Title of the page.|
|» type|body|string|false|Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link).|
|» body|body|string|false|Body content of the page, formatted in [ReadMe-flavored Markdown](https://docs.readme.com/rdmd/docs).|
|» category|body|string|false|Category ID of the page, which you can get through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories).|
|» hidden|body|boolean|false|Visibility of the page.|
|» order|body|integer|false|The position of the page in your project sidebar.|
|» parentDoc|body|string|false|The parent doc's ID, if the page is a subpage.|
|» error|body|object|false|none|
|» » code|body|string|false|The error code for docs with the "error" type.|
|» categorySlug|body|string|false|The slug of the category this page is associated with. You can get this through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories). This field is an alternative to the `category` field.|
|» parentDocSlug|body|string|false|If this page is a subpage, this field will be the slug of the parent document. You can get this through https://docs.readme.com/main/reference/docs#getdoc. This field is an alternative to the `parentDoc` field.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|basic|
|» type|error|
|» type|link|

> Example responses

> 200 Response

```json
{
  "title": "string",
  "type": "basic",
  "body": "string",
  "category": "string",
  "hidden": true,
  "order": 999,
  "parentDoc": "string",
  "error": {
    "code": "string"
  }
}
```

> 400 Response

```json
{
  "error": "DOC_INVALID",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 401 Response

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 403 Response

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 404 Response

```json
{
  "error": "DOC_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="update-doc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The doc was successfully updated.|[docSchemaResponse](#schemadocschemaresponse)|
|400|Bad Request|The doc couldn't be saved.|[error_DOC_INVALID](#schemaerror_doc_invalid)|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Unauthorized|Inline|
|404|Not Found|The doc couldn't be found.|[error_DOC_NOTFOUND](#schemaerror_doc_notfound)|

<h3 id="update-doc-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_EMPTY](#schemaerror_apikey_empty)|false|none|none|
|*oneOf*|[error_APIKEY_NOTFOUND](#schemaerror_apikey_notfound)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_MISMATCH](#schemaerror_apikey_mismatch)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Delete doc

<a id="opIddeleteDoc"></a>

> Code samples

```bash
curl https://example.com/docs/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /docs/{slug}`

Delete the doc with this slug.

<h3 id="delete-doc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|A URL-safe representation of the page title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the title "Getting Started", enter the slug "getting-started".|
|x-readme-version|header|string|false|Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions.|

> Example responses

> 401 Response

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 403 Response

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 404 Response

```json
{
  "error": "DOC_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="delete-doc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The doc was successfully updated.|None|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Unauthorized|Inline|
|404|Not Found|The doc couldn't be found.|[error_DOC_NOTFOUND](#schemaerror_doc_notfound)|

<h3 id="delete-doc-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_EMPTY](#schemaerror_apikey_empty)|false|none|none|
|*oneOf*|[error_APIKEY_NOTFOUND](#schemaerror_apikey_notfound)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_MISMATCH](#schemaerror_apikey_mismatch)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Get production doc

<a id="opIdgetProductionDoc"></a>

> Code samples

```bash
curl https://example.com/docs/string/production \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /docs/{slug}/production`

This is intended for use by enterprise users with staging enabled. This endpoint will return the live version of your document, whereas the standard endpoint will always return staging.

<h3 id="get-production-doc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|A URL-safe representation of the page title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the title "Getting Started", enter the slug "getting-started".|
|x-readme-version|header|string|false|Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions.|

> Example responses

> 200 Response

```json
{
  "title": "string",
  "type": "basic",
  "body": "string",
  "category": "string",
  "hidden": true,
  "order": 999,
  "parentDoc": "string",
  "error": {
    "code": "string"
  }
}
```

> 401 Response

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 403 Response

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 404 Response

```json
{
  "error": "DOC_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="get-production-doc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The doc exists and has been returned.|[docSchemaResponse](#schemadocschemaresponse)|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Unauthorized|Inline|
|404|Not Found|The doc couldn't be found.|[error_DOC_NOTFOUND](#schemaerror_doc_notfound)|

<h3 id="get-production-doc-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_EMPTY](#schemaerror_apikey_empty)|false|none|none|
|*oneOf*|[error_APIKEY_NOTFOUND](#schemaerror_apikey_notfound)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_MISMATCH](#schemaerror_apikey_mismatch)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Create doc

<a id="opIdcreateDoc"></a>

> Code samples

```bash
curl https://example.com/docs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "title": "string",
    "type": "basic",
    "body": "string",
    "category": "string",
    "hidden": true,
    "order": 999,
    "parentDoc": "string",
    "error": {
      "code": "string"
    },
    "categorySlug": "string",
    "parentDocSlug": "string"
  }'
```

`POST /docs`

Create a new doc inside of this project.

> Body parameter

```json
{
  "title": "string",
  "type": "basic",
  "body": "string",
  "category": "string",
  "hidden": true,
  "order": 999,
  "parentDoc": "string",
  "error": {
    "code": "string"
  },
  "categorySlug": "string",
  "parentDocSlug": "string"
}
```

<h3 id="create-doc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-readme-version|header|string|false|Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions.|
|body|body|[docSchemaPost](#schemadocschemapost)|true|none|
|» title|body|string|false|Title of the page.|
|» type|body|string|false|Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link).|
|» body|body|string|false|Body content of the page, formatted in [ReadMe-flavored Markdown](https://docs.readme.com/rdmd/docs).|
|» category|body|string|false|Category ID of the page, which you can get through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories).|
|» hidden|body|boolean|false|Visibility of the page.|
|» order|body|integer|false|The position of the page in your project sidebar.|
|» parentDoc|body|string|false|The parent doc's ID, if the page is a subpage.|
|» error|body|object|false|none|
|» » code|body|string|false|The error code for docs with the "error" type.|
|» categorySlug|body|string|false|The slug of the category this page is associated with. You can get this through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories). This field is an alternative to the `category` field.|
|» parentDocSlug|body|string|false|If this page is a subpage, this field will be the slug of the parent document. You can get this through https://docs.readme.com/main/reference/docs#getdoc. This field is an alternative to the `parentDoc` field.|
|» *oneOf*|body|object|false|none|
|» *oneOf*|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|basic|
|» type|error|
|» type|link|

> Example responses

> 201 Response

```json
{
  "title": "string",
  "type": "basic",
  "body": "string",
  "category": "string",
  "hidden": true,
  "order": 999,
  "parentDoc": "string",
  "error": {
    "code": "string"
  }
}
```

> 400 Response

```json
{
  "error": "DOC_INVALID",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 401 Response

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 403 Response

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="create-doc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The doc was successfully created.|[docSchemaResponse](#schemadocschemaresponse)|
|400|Bad Request|The doc couldn't be saved.|[error_DOC_INVALID](#schemaerror_doc_invalid)|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Unauthorized|Inline|

<h3 id="create-doc-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_EMPTY](#schemaerror_apikey_empty)|false|none|none|
|*oneOf*|[error_APIKEY_NOTFOUND](#schemaerror_apikey_notfound)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_MISMATCH](#schemaerror_apikey_mismatch)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Search docs

<a id="opIdsearchDocs"></a>

> Code samples

```bash
curl 'https://example.com/docs/search?search=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /docs/search`

Returns all docs that match the search.

<h3 id="search-docs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|true|Search string to look for.|
|x-readme-version|header|string|false|Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions.|

> Example responses

> 401 Response

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 403 Response

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="search-docs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The search was successful and results were returned.|None|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Unauthorized|Inline|

<h3 id="search-docs-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_EMPTY](#schemaerror_apikey_empty)|false|none|none|
|*oneOf*|[error_APIKEY_NOTFOUND](#schemaerror_apikey_notfound)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_MISMATCH](#schemaerror_apikey_mismatch)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="readme-api--projects">Projects</h1>

## Get metadata about the current project

<a id="opIdgetProject"></a>

> Code samples

```bash
curl https://example.com/ \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /`

Returns project data for the API key.

> Example responses

> 200 Response

```json
{
  "name": "string",
  "subdomain": "string",
  "jwtSecret": "string",
  "baseUrl": "http://example.com",
  "plan": "string"
}
```

> 401 Response

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 403 Response

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="get-metadata-about-the-current-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Project data|[condensedProjectData](#schemacondensedprojectdata)|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Unauthorized|Inline|

<h3 id="get-metadata-about-the-current-project-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_EMPTY](#schemaerror_apikey_empty)|false|none|none|
|*oneOf*|[error_APIKEY_NOTFOUND](#schemaerror_apikey_notfound)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_MISMATCH](#schemaerror_apikey_mismatch)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="readme-api--version">Version</h1>

## Get versions

<a id="opIdgetVersions"></a>

> Code samples

```bash
curl https://example.com/version \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /version`

Retrieve a list of versions associated with a project API key.

> Example responses

> 401 Response

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 403 Response

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="get-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of versions.|None|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Unauthorized|Inline|

<h3 id="get-versions-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_EMPTY](#schemaerror_apikey_empty)|false|none|none|
|*oneOf*|[error_APIKEY_NOTFOUND](#schemaerror_apikey_notfound)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_MISMATCH](#schemaerror_apikey_mismatch)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Create version

<a id="opIdcreateVersion"></a>

> Code samples

```bash
curl https://example.com/version \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "version": "string",
    "codename": "string",
    "from": "string",
    "is_stable": true,
    "is_beta": true,
    "is_hidden": true,
    "is_deprecated": true
  }'
```

`POST /version`

Create a new version.

> Body parameter

```json
{
  "version": "string",
  "codename": "string",
  "from": "string",
  "is_stable": true,
  "is_beta": true,
  "is_hidden": true,
  "is_deprecated": true
}
```

<h3 id="create-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[version](#schemaversion)|true|none|
|» version|body|string|true|Semantic Version|
|» codename|body|string|false|Dubbed name of version.|
|» from|body|string|true|Semantic Version to use as the base fork.|
|» is_stable|body|boolean|false|Should this be the **main** version?|
|» is_beta|body|boolean|false|none|
|» is_hidden|body|boolean|false|Should this be publically accessible?|
|» is_deprecated|body|boolean|false|Should this be deprecated? Only allowed in PUT operations.|

> Example responses

> 400 Response

```json
{
  "error": "VERSION_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 401 Response

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 403 Response

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 404 Response

```json
{
  "error": "VERSION_FORK_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="create-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The version was successfully created.|None|
|400|Bad Request|There was a validation error during creation.|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Unauthorized|Inline|
|404|Not Found|The version couldn't be found.|[error_VERSION_FORK_NOTFOUND](#schemaerror_version_fork_notfound)|

<h3 id="create-version-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_VERSION_EMPTY](#schemaerror_version_empty)|false|none|none|
|*oneOf*|[error_VERSION_DUPLICATE](#schemaerror_version_duplicate)|false|none|none|
|*oneOf*|[error_VERSION_FORK_EMPTY](#schemaerror_version_fork_empty)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_EMPTY](#schemaerror_apikey_empty)|false|none|none|
|*oneOf*|[error_APIKEY_NOTFOUND](#schemaerror_apikey_notfound)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_MISMATCH](#schemaerror_apikey_mismatch)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Get version

<a id="opIdgetVersion"></a>

> Code samples

```bash
curl https://example.com/version/v1.0.0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /version/{versionId}`

Returns the version with this version ID.

<h3 id="get-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionId|path|string|true|Semver identifier for the project version. For best results, use the formatted `version_clean` value listed in the response from the [Get Versions endpoint](/reference/getversions).|

> Example responses

> 401 Response

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 403 Response

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 404 Response

```json
{
  "error": "VERSION_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="get-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The version exists and has been returned.|None|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Unauthorized|Inline|
|404|Not Found|The version couldn't be found.|[error_VERSION_NOTFOUND](#schemaerror_version_notfound)|

<h3 id="get-version-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_EMPTY](#schemaerror_apikey_empty)|false|none|none|
|*oneOf*|[error_APIKEY_NOTFOUND](#schemaerror_apikey_notfound)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_MISMATCH](#schemaerror_apikey_mismatch)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Update version

<a id="opIdupdateVersion"></a>

> Code samples

```bash
curl https://example.com/version/v1.0.0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "version": "string",
    "codename": "string",
    "from": "string",
    "is_stable": true,
    "is_beta": true,
    "is_hidden": true,
    "is_deprecated": true
  }'
```

`PUT /version/{versionId}`

Update an existing version.

> Body parameter

```json
{
  "version": "string",
  "codename": "string",
  "from": "string",
  "is_stable": true,
  "is_beta": true,
  "is_hidden": true,
  "is_deprecated": true
}
```

<h3 id="update-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionId|path|string|true|Semver identifier for the project version. For best results, use the formatted `version_clean` value listed in the response from the [Get Versions endpoint](/reference/getversions).|
|body|body|[version](#schemaversion)|true|none|
|» version|body|string|true|Semantic Version|
|» codename|body|string|false|Dubbed name of version.|
|» from|body|string|true|Semantic Version to use as the base fork.|
|» is_stable|body|boolean|false|Should this be the **main** version?|
|» is_beta|body|boolean|false|none|
|» is_hidden|body|boolean|false|Should this be publically accessible?|
|» is_deprecated|body|boolean|false|Should this be deprecated? Only allowed in PUT operations.|

> Example responses

> 400 Response

```json
{
  "error": "VERSION_CANT_DEMOTE_STABLE",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 401 Response

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 403 Response

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 404 Response

```json
{
  "error": "VERSION_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="update-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The version was successfully updated.|None|
|400|Bad Request|A stable version can't be demoted.|[error_VERSION_CANT_DEMOTE_STABLE](#schemaerror_version_cant_demote_stable)|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Unauthorized|Inline|
|404|Not Found|The version couldn't be found.|[error_VERSION_NOTFOUND](#schemaerror_version_notfound)|

<h3 id="update-version-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_EMPTY](#schemaerror_apikey_empty)|false|none|none|
|*oneOf*|[error_APIKEY_NOTFOUND](#schemaerror_apikey_notfound)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_MISMATCH](#schemaerror_apikey_mismatch)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Delete version

<a id="opIddeleteVersion"></a>

> Code samples

```bash
curl https://example.com/version/v1.0.0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /version/{versionId}`

Delete a version

<h3 id="delete-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionId|path|string|true|Semver identifier for the project version. For best results, use the formatted `version_clean` value listed in the response from the [Get Versions endpoint](/reference/getversions).|

> Example responses

> 400 Response

```json
{
  "error": "VERSION_CANT_REMOVE_STABLE",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 401 Response

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 403 Response

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

> 404 Response

```json
{
  "error": "VERSION_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

<h3 id="delete-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The version was successfully deleted.|None|
|400|Bad Request|A stable version can't be removed.|[error_VERSION_CANT_REMOVE_STABLE](#schemaerror_version_cant_remove_stable)|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Unauthorized|Inline|
|404|Not Found|The version couldn't be found.|[error_VERSION_NOTFOUND](#schemaerror_version_notfound)|

<h3 id="delete-version-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_EMPTY](#schemaerror_apikey_empty)|false|none|none|
|*oneOf*|[error_APIKEY_NOTFOUND](#schemaerror_apikey_notfound)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_APIKEY_MISMATCH](#schemaerror_apikey_mismatch)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

# Schemas

<h2 id="tocS_baseError">baseError</h2>
<!-- backwards compatibility -->
<a id="schemabaseerror"></a>
<a id="schema_baseError"></a>
<a id="tocSbaseerror"></a>
<a id="tocsbaseerror"></a>

```json
{
  "error": "string",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|

<h2 id="tocS_apply">apply</h2>
<!-- backwards compatibility -->
<a id="schemaapply"></a>
<a id="schema_apply"></a>
<a id="tocSapply"></a>
<a id="tocsapply"></a>

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "job": "Front End Engineer",
  "pronouns": "string",
  "linkedin": "http://example.com",
  "github": "http://example.com",
  "coverLetter": "string",
  "dontReallyApply": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Your full name|
|email|string(email)|true|none|A valid email we can reach you at.|
|job|string|true|none|The job you're looking to apply for (https://readme.com/careers).|
|pronouns|string|false|none|Learn more at https://lgbtlifecenter.org/pronouns/|
|linkedin|string(url)|false|none|What have you been up to the past few years?|
|github|string(url)|false|none|Or Bitbucket, Gitlab or anywhere else your code is hosted!|
|coverLetter|string(blob)|false|none|What should we know about you?|
|dontReallyApply|boolean|false|none|Want to play with the API but not actually apply? Set this to true.|

#### Enumerated Values

|Property|Value|
|---|---|
|job|Front End Engineer|
|job|Full Stack Engineer|
|job|Head of Product|
|job|Head of Solutions Engineering|
|job|Product Designer|

<h2 id="tocS_category">category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "title": "string",
  "type": "guide"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|A short title for the category. This is what will show in the sidebar.|
|type|string|false|none|A category can be part of your reference or guide documentation, which is determined by this field.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|reference|
|type|guide|

<h2 id="tocS_changelog">changelog</h2>
<!-- backwards compatibility -->
<a id="schemachangelog"></a>
<a id="schema_changelog"></a>
<a id="tocSchangelog"></a>
<a id="tocschangelog"></a>

```json
{
  "title": "string",
  "type": "",
  "body": "string",
  "hidden": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|Title of the changelog.|
|type|string|false|none|none|
|body|string|true|none|Body content of the changelog.|
|hidden|boolean|false|none|Visibility of the changelog.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|""|
|type|added|
|type|fixed|
|type|improved|
|type|deprecated|
|type|removed|

<h2 id="tocS_condensedProjectData">condensedProjectData</h2>
<!-- backwards compatibility -->
<a id="schemacondensedprojectdata"></a>
<a id="schema_condensedProjectData"></a>
<a id="tocScondensedprojectdata"></a>
<a id="tocscondensedprojectdata"></a>

```json
{
  "name": "string",
  "subdomain": "string",
  "jwtSecret": "string",
  "baseUrl": "http://example.com",
  "plan": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|subdomain|string|false|none|none|
|jwtSecret|string|false|none|none|
|baseUrl|string(url)|false|none|The base URL for the project. If the project is not running under a custom domain, it will be `https://projectSubdomain.readme.io`, otherwise it can either be or `https://example.com` or, in the case of an enterprise child project `https://example.com/projectSubdomain`.|
|plan|string|false|none|none|

<h2 id="tocS_customPage">customPage</h2>
<!-- backwards compatibility -->
<a id="schemacustompage"></a>
<a id="schema_customPage"></a>
<a id="tocScustompage"></a>
<a id="tocscustompage"></a>

```json
{
  "title": "string",
  "body": "string",
  "html": "string",
  "htmlmode": false,
  "hidden": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|Title of the custom page.|
|body|string|false|none|Body formatted in Markdown (displayed by default).|
|html|string|false|none|Body formatted in HTML (sanitized, only displayed if `htmlmode` is **true**).|
|htmlmode|boolean|false|none|**true** if `html` should be displayed, **false** if `body` should be displayed.|
|hidden|boolean|false|none|Visibility of the custom page.|

<h2 id="tocS_docSchemaPost">docSchemaPost</h2>
<!-- backwards compatibility -->
<a id="schemadocschemapost"></a>
<a id="schema_docSchemaPost"></a>
<a id="tocSdocschemapost"></a>
<a id="tocsdocschemapost"></a>

```json
{
  "title": "string",
  "type": "basic",
  "body": "string",
  "category": "string",
  "hidden": true,
  "order": 999,
  "parentDoc": "string",
  "error": {
    "code": "string"
  },
  "categorySlug": "string",
  "parentDocSlug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|Title of the page.|
|type|string|false|none|Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link).|
|body|string|false|none|Body content of the page, formatted in [ReadMe-flavored Markdown](https://docs.readme.com/rdmd/docs).|
|category|string|false|none|Category ID of the page, which you can get through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories).|
|hidden|boolean|false|none|Visibility of the page.|
|order|integer|false|none|The position of the page in your project sidebar.|
|parentDoc|string|false|none|The parent doc's ID, if the page is a subpage.|
|error|object|false|none|none|
|categorySlug|string|false|none|The slug of the category this page is associated with. You can get this through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories). This field is an alternative to the `category` field.|
|parentDocSlug|string|false|none|If this page is a subpage, this field will be the slug of the parent document. You can get this through https://docs.readme.com/main/reference/docs#getdoc. This field is an alternative to the `parentDoc` field.|
|*oneOf*|object|false|none|none|
|*oneOf*|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|basic|
|type|error|
|type|link|

<h2 id="tocS_docSchemaPut">docSchemaPut</h2>
<!-- backwards compatibility -->
<a id="schemadocschemaput"></a>
<a id="schema_docSchemaPut"></a>
<a id="tocSdocschemaput"></a>
<a id="tocsdocschemaput"></a>

```json
{
  "title": "string",
  "type": "basic",
  "body": "string",
  "category": "string",
  "hidden": true,
  "order": 999,
  "parentDoc": "string",
  "error": {
    "code": "string"
  },
  "categorySlug": "string",
  "parentDocSlug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|Title of the page.|
|type|string|false|none|Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link).|
|body|string|false|none|Body content of the page, formatted in [ReadMe-flavored Markdown](https://docs.readme.com/rdmd/docs).|
|category|string|false|none|Category ID of the page, which you can get through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories).|
|hidden|boolean|false|none|Visibility of the page.|
|order|integer|false|none|The position of the page in your project sidebar.|
|parentDoc|string|false|none|The parent doc's ID, if the page is a subpage.|
|error|object|false|none|none|
|categorySlug|string|false|none|The slug of the category this page is associated with. You can get this through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories). This field is an alternative to the `category` field.|
|parentDocSlug|string|false|none|If this page is a subpage, this field will be the slug of the parent document. You can get this through https://docs.readme.com/main/reference/docs#getdoc. This field is an alternative to the `parentDoc` field.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|basic|
|type|error|
|type|link|

<h2 id="tocS_docSchemaResponse">docSchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemadocschemaresponse"></a>
<a id="schema_docSchemaResponse"></a>
<a id="tocSdocschemaresponse"></a>
<a id="tocsdocschemaresponse"></a>

```json
{
  "title": "string",
  "type": "basic",
  "body": "string",
  "category": "string",
  "hidden": true,
  "order": 999,
  "parentDoc": "string",
  "error": {
    "code": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|Title of the page.|
|type|string|false|none|Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link).|
|body|string|false|none|Body content of the page, formatted in [ReadMe-flavored Markdown](https://docs.readme.com/rdmd/docs).|
|category|string|false|none|Category ID of the page, which you can get through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories).|
|hidden|boolean|false|none|Visibility of the page.|
|order|integer|false|none|The position of the page in your project sidebar.|
|parentDoc|string|false|none|The parent doc's ID, if the page is a subpage.|
|error|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|basic|
|type|error|
|type|link|

<h2 id="tocS_version">version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
{
  "version": "string",
  "codename": "string",
  "from": "string",
  "is_stable": true,
  "is_beta": true,
  "is_hidden": true,
  "is_deprecated": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|true|none|Semantic Version|
|codename|string|false|none|Dubbed name of version.|
|from|string|true|none|Semantic Version to use as the base fork.|
|is_stable|boolean|false|none|Should this be the **main** version?|
|is_beta|boolean|false|none|none|
|is_hidden|boolean|false|none|Should this be publically accessible?|
|is_deprecated|boolean|false|none|Should this be deprecated? Only allowed in PUT operations.|

<h2 id="tocS_jobOpening">jobOpening</h2>
<!-- backwards compatibility -->
<a id="schemajobopening"></a>
<a id="schema_jobOpening"></a>
<a id="tocSjobopening"></a>
<a id="tocsjobopening"></a>

```json
{
  "slug": "api-engineer",
  "title": "API Engineer",
  "description": "string",
  "pullquote": "Deeply knowledgeable of the web, HTTP, and the API space.",
  "location": "Remote",
  "department": "Engineering",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|false|none|A slugified version of the job opening title.|
|title|string|false|none|The job opening position.|
|description|string|false|none|The description for this open position. This content is formatted as HTML.|
|pullquote|string|false|none|A short pullquote for the open position.|
|location|string|false|none|Where this position is located at.|
|department|string|false|none|The internal organization you'll be working in.|
|url|string(url)|false|none|The place where you can apply for the position!|

<h2 id="tocS_error_APIKEY_EMPTY">error_APIKEY_EMPTY</h2>
<!-- backwards compatibility -->
<a id="schemaerror_apikey_empty"></a>
<a id="schema_error_APIKEY_EMPTY"></a>
<a id="tocSerror_apikey_empty"></a>
<a id="tocserror_apikey_empty"></a>

```json
{
  "error": "APIKEY_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_APIKEY_MISMATCH">error_APIKEY_MISMATCH</h2>
<!-- backwards compatibility -->
<a id="schemaerror_apikey_mismatch"></a>
<a id="schema_error_APIKEY_MISMATCH"></a>
<a id="tocSerror_apikey_mismatch"></a>
<a id="tocserror_apikey_mismatch"></a>

```json
{
  "error": "APIKEY_MISMATCH",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_APIKEY_NOTFOUND">error_APIKEY_NOTFOUND</h2>
<!-- backwards compatibility -->
<a id="schemaerror_apikey_notfound"></a>
<a id="schema_error_APIKEY_NOTFOUND"></a>
<a id="tocSerror_apikey_notfound"></a>
<a id="tocserror_apikey_notfound"></a>

```json
{
  "error": "APIKEY_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_APPLY_INVALID_EMAIL">error_APPLY_INVALID_EMAIL</h2>
<!-- backwards compatibility -->
<a id="schemaerror_apply_invalid_email"></a>
<a id="schema_error_APPLY_INVALID_EMAIL"></a>
<a id="tocSerror_apply_invalid_email"></a>
<a id="tocserror_apply_invalid_email"></a>

```json
{
  "error": "APPLY_INVALID_EMAIL",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_APPLY_INVALID_JOB">error_APPLY_INVALID_JOB</h2>
<!-- backwards compatibility -->
<a id="schemaerror_apply_invalid_job"></a>
<a id="schema_error_APPLY_INVALID_JOB"></a>
<a id="tocSerror_apply_invalid_job"></a>
<a id="tocserror_apply_invalid_job"></a>

```json
{
  "error": "APPLY_INVALID_JOB",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_APPLY_INVALID_NAME">error_APPLY_INVALID_NAME</h2>
<!-- backwards compatibility -->
<a id="schemaerror_apply_invalid_name"></a>
<a id="schema_error_APPLY_INVALID_NAME"></a>
<a id="tocSerror_apply_invalid_name"></a>
<a id="tocserror_apply_invalid_name"></a>

```json
{
  "error": "APPLY_INVALID_NAME",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_CATEGORY_INVALID">error_CATEGORY_INVALID</h2>
<!-- backwards compatibility -->
<a id="schemaerror_category_invalid"></a>
<a id="schema_error_CATEGORY_INVALID"></a>
<a id="tocSerror_category_invalid"></a>
<a id="tocserror_category_invalid"></a>

```json
{
  "error": "CATEGORY_INVALID",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_CATEGORY_NOTFOUND">error_CATEGORY_NOTFOUND</h2>
<!-- backwards compatibility -->
<a id="schemaerror_category_notfound"></a>
<a id="schema_error_CATEGORY_NOTFOUND"></a>
<a id="tocSerror_category_notfound"></a>
<a id="tocserror_category_notfound"></a>

```json
{
  "error": "CATEGORY_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_CHANGELOG_INVALID">error_CHANGELOG_INVALID</h2>
<!-- backwards compatibility -->
<a id="schemaerror_changelog_invalid"></a>
<a id="schema_error_CHANGELOG_INVALID"></a>
<a id="tocSerror_changelog_invalid"></a>
<a id="tocserror_changelog_invalid"></a>

```json
{
  "error": "CHANGELOG_INVALID",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_CHANGELOG_NOTFOUND">error_CHANGELOG_NOTFOUND</h2>
<!-- backwards compatibility -->
<a id="schemaerror_changelog_notfound"></a>
<a id="schema_error_CHANGELOG_NOTFOUND"></a>
<a id="tocSerror_changelog_notfound"></a>
<a id="tocserror_changelog_notfound"></a>

```json
{
  "error": "CHANGELOG_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_CUSTOMPAGE_INVALID">error_CUSTOMPAGE_INVALID</h2>
<!-- backwards compatibility -->
<a id="schemaerror_custompage_invalid"></a>
<a id="schema_error_CUSTOMPAGE_INVALID"></a>
<a id="tocSerror_custompage_invalid"></a>
<a id="tocserror_custompage_invalid"></a>

```json
{
  "error": "CUSTOMPAGE_INVALID",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_CUSTOMPAGE_NOTFOUND">error_CUSTOMPAGE_NOTFOUND</h2>
<!-- backwards compatibility -->
<a id="schemaerror_custompage_notfound"></a>
<a id="schema_error_CUSTOMPAGE_NOTFOUND"></a>
<a id="tocSerror_custompage_notfound"></a>
<a id="tocserror_custompage_notfound"></a>

```json
{
  "error": "CUSTOMPAGE_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_DOC_INVALID">error_DOC_INVALID</h2>
<!-- backwards compatibility -->
<a id="schemaerror_doc_invalid"></a>
<a id="schema_error_DOC_INVALID"></a>
<a id="tocSerror_doc_invalid"></a>
<a id="tocserror_doc_invalid"></a>

```json
{
  "error": "DOC_INVALID",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_DOC_NOTFOUND">error_DOC_NOTFOUND</h2>
<!-- backwards compatibility -->
<a id="schemaerror_doc_notfound"></a>
<a id="schema_error_DOC_NOTFOUND"></a>
<a id="tocSerror_doc_notfound"></a>
<a id="tocserror_doc_notfound"></a>

```json
{
  "error": "DOC_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_ENDPOINT_NOTFOUND">error_ENDPOINT_NOTFOUND</h2>
<!-- backwards compatibility -->
<a id="schemaerror_endpoint_notfound"></a>
<a id="schema_error_ENDPOINT_NOTFOUND"></a>
<a id="tocSerror_endpoint_notfound"></a>
<a id="tocserror_endpoint_notfound"></a>

```json
{
  "error": "ENDPOINT_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_INTERNAL_ERROR">error_INTERNAL_ERROR</h2>
<!-- backwards compatibility -->
<a id="schemaerror_internal_error"></a>
<a id="schema_error_INTERNAL_ERROR"></a>
<a id="tocSerror_internal_error"></a>
<a id="tocserror_internal_error"></a>

```json
{
  "error": "INTERNAL_ERROR",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_PROJECT_NEEDSSTAGING">error_PROJECT_NEEDSSTAGING</h2>
<!-- backwards compatibility -->
<a id="schemaerror_project_needsstaging"></a>
<a id="schema_error_PROJECT_NEEDSSTAGING"></a>
<a id="tocSerror_project_needsstaging"></a>
<a id="tocserror_project_needsstaging"></a>

```json
{
  "error": "PROJECT_NEEDSSTAGING",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_PROJECT_NOTFOUND">error_PROJECT_NOTFOUND</h2>
<!-- backwards compatibility -->
<a id="schemaerror_project_notfound"></a>
<a id="schema_error_PROJECT_NOTFOUND"></a>
<a id="tocSerror_project_notfound"></a>
<a id="tocserror_project_notfound"></a>

```json
{
  "error": "PROJECT_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_RATE_LIMITED">error_RATE_LIMITED</h2>
<!-- backwards compatibility -->
<a id="schemaerror_rate_limited"></a>
<a id="schema_error_RATE_LIMITED"></a>
<a id="tocSerror_rate_limited"></a>
<a id="tocserror_rate_limited"></a>

```json
{
  "error": "RATE_LIMITED",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_REGISTRY_INVALID">error_REGISTRY_INVALID</h2>
<!-- backwards compatibility -->
<a id="schemaerror_registry_invalid"></a>
<a id="schema_error_REGISTRY_INVALID"></a>
<a id="tocSerror_registry_invalid"></a>
<a id="tocserror_registry_invalid"></a>

```json
{
  "error": "REGISTRY_INVALID",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_REGISTRY_NOTFOUND">error_REGISTRY_NOTFOUND</h2>
<!-- backwards compatibility -->
<a id="schemaerror_registry_notfound"></a>
<a id="schema_error_REGISTRY_NOTFOUND"></a>
<a id="tocSerror_registry_notfound"></a>
<a id="tocserror_registry_notfound"></a>

```json
{
  "error": "REGISTRY_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_SPEC_FILE_EMPTY">error_SPEC_FILE_EMPTY</h2>
<!-- backwards compatibility -->
<a id="schemaerror_spec_file_empty"></a>
<a id="schema_error_SPEC_FILE_EMPTY"></a>
<a id="tocSerror_spec_file_empty"></a>
<a id="tocserror_spec_file_empty"></a>

```json
{
  "error": "SPEC_FILE_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_SPEC_ID_DUPLICATE">error_SPEC_ID_DUPLICATE</h2>
<!-- backwards compatibility -->
<a id="schemaerror_spec_id_duplicate"></a>
<a id="schema_error_SPEC_ID_DUPLICATE"></a>
<a id="tocSerror_spec_id_duplicate"></a>
<a id="tocserror_spec_id_duplicate"></a>

```json
{
  "error": "SPEC_ID_DUPLICATE",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_SPEC_ID_INVALID">error_SPEC_ID_INVALID</h2>
<!-- backwards compatibility -->
<a id="schemaerror_spec_id_invalid"></a>
<a id="schema_error_SPEC_ID_INVALID"></a>
<a id="tocSerror_spec_id_invalid"></a>
<a id="tocserror_spec_id_invalid"></a>

```json
{
  "error": "SPEC_ID_INVALID",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_SPEC_INVALID">error_SPEC_INVALID</h2>
<!-- backwards compatibility -->
<a id="schemaerror_spec_invalid"></a>
<a id="schema_error_SPEC_INVALID"></a>
<a id="tocSerror_spec_invalid"></a>
<a id="tocserror_spec_invalid"></a>

```json
{
  "error": "SPEC_INVALID",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_SPEC_INVALID_SCHEMA">error_SPEC_INVALID_SCHEMA</h2>
<!-- backwards compatibility -->
<a id="schemaerror_spec_invalid_schema"></a>
<a id="schema_error_SPEC_INVALID_SCHEMA"></a>
<a id="tocSerror_spec_invalid_schema"></a>
<a id="tocserror_spec_invalid_schema"></a>

```json
{
  "error": "SPEC_INVALID_SCHEMA",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_SPEC_NOTFOUND">error_SPEC_NOTFOUND</h2>
<!-- backwards compatibility -->
<a id="schemaerror_spec_notfound"></a>
<a id="schema_error_SPEC_NOTFOUND"></a>
<a id="tocSerror_spec_notfound"></a>
<a id="tocserror_spec_notfound"></a>

```json
{
  "error": "SPEC_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_SPEC_TIMEOUT">error_SPEC_TIMEOUT</h2>
<!-- backwards compatibility -->
<a id="schemaerror_spec_timeout"></a>
<a id="schema_error_SPEC_TIMEOUT"></a>
<a id="tocSerror_spec_timeout"></a>
<a id="tocserror_spec_timeout"></a>

```json
{
  "error": "SPEC_TIMEOUT",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_SPEC_VERSION_NOTFOUND">error_SPEC_VERSION_NOTFOUND</h2>
<!-- backwards compatibility -->
<a id="schemaerror_spec_version_notfound"></a>
<a id="schema_error_SPEC_VERSION_NOTFOUND"></a>
<a id="tocSerror_spec_version_notfound"></a>
<a id="tocserror_spec_version_notfound"></a>

```json
{
  "error": "SPEC_VERSION_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_UNEXPECTED_ERROR">error_UNEXPECTED_ERROR</h2>
<!-- backwards compatibility -->
<a id="schemaerror_unexpected_error"></a>
<a id="schema_error_UNEXPECTED_ERROR"></a>
<a id="tocSerror_unexpected_error"></a>
<a id="tocserror_unexpected_error"></a>

```json
{
  "error": "UNEXPECTED_ERROR",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_VERSION_CANT_DEMOTE_STABLE">error_VERSION_CANT_DEMOTE_STABLE</h2>
<!-- backwards compatibility -->
<a id="schemaerror_version_cant_demote_stable"></a>
<a id="schema_error_VERSION_CANT_DEMOTE_STABLE"></a>
<a id="tocSerror_version_cant_demote_stable"></a>
<a id="tocserror_version_cant_demote_stable"></a>

```json
{
  "error": "VERSION_CANT_DEMOTE_STABLE",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_VERSION_CANT_REMOVE_STABLE">error_VERSION_CANT_REMOVE_STABLE</h2>
<!-- backwards compatibility -->
<a id="schemaerror_version_cant_remove_stable"></a>
<a id="schema_error_VERSION_CANT_REMOVE_STABLE"></a>
<a id="tocSerror_version_cant_remove_stable"></a>
<a id="tocserror_version_cant_remove_stable"></a>

```json
{
  "error": "VERSION_CANT_REMOVE_STABLE",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_VERSION_DUPLICATE">error_VERSION_DUPLICATE</h2>
<!-- backwards compatibility -->
<a id="schemaerror_version_duplicate"></a>
<a id="schema_error_VERSION_DUPLICATE"></a>
<a id="tocSerror_version_duplicate"></a>
<a id="tocserror_version_duplicate"></a>

```json
{
  "error": "VERSION_DUPLICATE",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_VERSION_EMPTY">error_VERSION_EMPTY</h2>
<!-- backwards compatibility -->
<a id="schemaerror_version_empty"></a>
<a id="schema_error_VERSION_EMPTY"></a>
<a id="tocSerror_version_empty"></a>
<a id="tocserror_version_empty"></a>

```json
{
  "error": "VERSION_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_VERSION_FORK_EMPTY">error_VERSION_FORK_EMPTY</h2>
<!-- backwards compatibility -->
<a id="schemaerror_version_fork_empty"></a>
<a id="schema_error_VERSION_FORK_EMPTY"></a>
<a id="tocSerror_version_fork_empty"></a>
<a id="tocserror_version_fork_empty"></a>

```json
{
  "error": "VERSION_FORK_EMPTY",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_VERSION_FORK_NOTFOUND">error_VERSION_FORK_NOTFOUND</h2>
<!-- backwards compatibility -->
<a id="schemaerror_version_fork_notfound"></a>
<a id="schema_error_VERSION_FORK_NOTFOUND"></a>
<a id="tocSerror_version_fork_notfound"></a>
<a id="tocserror_version_fork_notfound"></a>

```json
{
  "error": "VERSION_FORK_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_VERSION_INVALID">error_VERSION_INVALID</h2>
<!-- backwards compatibility -->
<a id="schemaerror_version_invalid"></a>
<a id="schema_error_VERSION_INVALID"></a>
<a id="tocSerror_version_invalid"></a>
<a id="tocserror_version_invalid"></a>

```json
{
  "error": "VERSION_INVALID",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|

<h2 id="tocS_error_VERSION_NOTFOUND">error_VERSION_NOTFOUND</h2>
<!-- backwards compatibility -->
<a id="schemaerror_version_notfound"></a>
<a id="schema_error_VERSION_NOTFOUND"></a>
<a id="tocSerror_version_notfound"></a>
<a id="tocserror_version_notfound"></a>

```json
{
  "error": "VERSION_NOTFOUND",
  "message": "string",
  "suggestion": "string",
  "docs": "https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f",
  "help": "If you need help, email support@readme.io",
  "poem": [
    "If you're seeing this error,",
    "Things didn't quite go the way we hoped.",
    "When we tried to process your request,",
    "Maybe trying again it'll work—who knows!"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|An error code unique to the error received.|
|message|string|false|none|The reason why the error occured.|
|suggestion|string|false|none|A helpful suggestion for how to alleviate the error.|
|docs|string(url)|false|none|A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.|
|help|string|false|none|Information on where you can receive additional assistance from our wonderful support team.|
|poem|[string]|false|none|A short poem we wrote you about your error.|
|error|string|false|none|none|
