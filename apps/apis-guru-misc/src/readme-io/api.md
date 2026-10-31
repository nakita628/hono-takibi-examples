<h1 id="api-endpoints">API Endpoints v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Create beautiful product and API documentation with our developer friendly platform.

Base URLs:

* <a href="https://dash.readme.io/api/v1">https://dash.readme.io/api/v1</a>

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="api-endpoints-projects">Projects</h1>

## Get metadata about the current project

<a id="opIdgetProject"></a>

> Code samples

```bash
curl https://example.com/ \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /`

Returns project data for API key

<h3 id="get-metadata-about-the-current-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Project data|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="api-endpoints-api-specification">API Specification</h1>

## getAPISpecification

<a id="opIdgetAPISpecification"></a>

> Code samples

```bash
curl https://example.com/api-specification \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -H 'x-readme-version: v3.0'
```

`GET /api-specification`

Get API specification metadata

<h3 id="getapispecification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|perPage|query|integer|false|Number of items to include in pagination (up to 100, defaults to 10)|
|page|query|integer|false|Used to specify further pages (starts at 1)|
|x-readme-version|header|string|true|Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.|

<h3 id="getapispecification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved API specification metadata.|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Pagination information. See https://docs.readme.com/reference#pagination|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## uploadAPISpecification

<a id="opIduploadAPISpecification"></a>

> Code samples

```bash
curl https://example.com/api-specification \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -H 'x-readme-version: v3.0' \
  -F 'spec=@/path/to/file'
```

`POST /api-specification`

Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/guides/docs/automatically-sync-api-specification-with-github

> Body parameter

```yaml
spec: string
```

<h3 id="uploadapispecification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-readme-version|header|string|true|Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.|
|body|body|object|true|none|
|» spec|body|string(binary)|false|OpenAPI/Swagger file|

<h3 id="uploadapispecification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The API specification successfully imported|None|
|400|Bad Request|There was a validation error during import|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## updateAPISpecification

<a id="opIdupdateAPISpecification"></a>

> Code samples

```bash
curl https://example.com/api-specification/string \
  -X PUT \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'spec=@/path/to/file'
```

`PUT /api-specification/{id}`

Update an API specification in ReadMe

> Body parameter

```yaml
spec: string
```

<h3 id="updateapispecification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the API specification. The unique ID for each API can be found by navigating to your **API Definitions** page.|
|body|body|object|true|none|
|» spec|body|string(binary)|false|OpenAPI/Swagger file|

<h3 id="updateapispecification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The API specification was updated|None|
|400|Bad Request|There was a validation error during import|None|
|404|Not Found|There is no API specification with that ID|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## deleteAPISpecification

<a id="opIddeleteAPISpecification"></a>

> Code samples

```bash
curl https://example.com/api-specification/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api-specification/{id}`

Delete an API specification in ReadMe

<h3 id="deleteapispecification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the API specification. The unique ID for each API can be found by navigating to your **API Definitions** page.|

<h3 id="deleteapispecification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The API specification was deleted|None|
|404|Not Found|There is no API specification with that ID|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="api-endpoints-categories">Categories</h1>

## Get category

<a id="opIdgetCategory"></a>

> Code samples

```bash
curl https://example.com/categories/getting-started \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -H 'x-readme-version: v3.0'
```

`GET /categories/{slug}`

Returns the category with this slug

<h3 id="get-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|Slug of category. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the the category "Getting Started", enter the slug "getting-started"|
|x-readme-version|header|string|true|Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.|

<h3 id="get-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The category exists and has been returned|None|
|404|Not Found|There is no category with that slug|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Get docs for category

<a id="opIdgetCategoryDocs"></a>

> Code samples

```bash
curl https://example.com/categories/getting-started/docs \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -H 'x-readme-version: v3.0'
```

`GET /categories/{slug}/docs`

Returns the docs and children docs within this category

<h3 id="get-docs-for-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|Slug of category. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the the category "Getting Started", enter the slug "getting-started"|
|x-readme-version|header|string|true|Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.|

<h3 id="get-docs-for-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The category exists and all of the docs have been returned|None|
|404|Not Found|There is no category with that slug|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="api-endpoints-changelog">Changelog</h1>

## Get changelogs

<a id="opIdgetChangelogs"></a>

> Code samples

```bash
curl https://example.com/changelogs \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /changelogs`

Returns a list of changelogs associated with the project API key

<h3 id="get-changelogs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|perPage|query|integer|false|Number of items to include in pagination (up to 100, defaults to 10)|
|page|query|integer|false|Used to specify further pages (starts at 1)|

<h3 id="get-changelogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Pagination information. See https://docs.readme.com/reference#pagination|

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
    "body": "string",
    "hidden": true,
    "title": "string",
    "type": ""
  }'
```

`POST /changelogs`

Create a new changelog inside of this project

> Body parameter

```json
{
  "body": "string",
  "hidden": true,
  "title": "string",
  "type": ""
}
```

<h3 id="create-changelog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Changelog](#schemachangelog)|true|Changelog object|
|» body|body|string|true|Body content of the changelog|
|» hidden|body|boolean|false|Visibility of the changelog|
|» title|body|string|true|Title of the changelog|
|» type|body|string|false|none|

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
|201|Created|The changelog has successfully been created|None|
|400|Bad Request|There was a validation error during creation|None|

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

Returns the changelog with this slug

<h3 id="get-changelog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|Slug of changelog|

<h3 id="get-changelog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The changelog exists and has been returned|None|
|404|Not Found|There is no changelog with that slug|None|

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
    "body": "string",
    "hidden": true,
    "title": "string",
    "type": ""
  }'
```

`PUT /changelogs/{slug}`

Update a changelog with this slug

> Body parameter

```json
{
  "body": "string",
  "hidden": true,
  "title": "string",
  "type": ""
}
```

<h3 id="update-changelog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|Slug of changelog|
|body|body|[Changelog](#schemachangelog)|true|Changelog object|
|» body|body|string|true|Body content of the changelog|
|» hidden|body|boolean|false|Visibility of the changelog|
|» title|body|string|true|Title of the changelog|
|» type|body|string|false|none|

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
|200|OK|The changelog has successfully been updated|None|
|400|Bad Request|There was a validation error during update|None|
|404|Not Found|There is no changelog with that slug|None|

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

Delete the changelog with this slug

<h3 id="delete-changelog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|Slug of changelog|

<h3 id="delete-changelog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The changelog has successfully been updated|None|
|404|Not Found|There is no changelog with that slug|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="api-endpoints-custom-pages">Custom Pages</h1>

## Get custom pages

<a id="opIdgetCustomPages"></a>

> Code samples

```bash
curl https://example.com/custompages \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /custompages`

Returns a list of custom pages associated with the project API key

<h3 id="get-custom-pages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|perPage|query|integer|false|Number of items to include in pagination (up to 100, defaults to 10)|
|page|query|integer|false|Used to specify further pages (starts at 1)|

<h3 id="get-custom-pages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||Pagination information. See https://docs.readme.com/reference#pagination|

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
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "body": "string",
    "hidden": true,
    "html": "string",
    "htmlmode": false,
    "title": "string"
  }'
```

`POST /custompages`

Create a new custom page inside of this project

> Body parameter

```json
{
  "body": "string",
  "hidden": true,
  "html": "string",
  "htmlmode": false,
  "title": "string"
}
```

<h3 id="create-custom-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CustomPage](#schemacustompage)|true|CustomPage object|
|» body|body|string|false|Body formatted in Markdown (displayed by default).|
|» hidden|body|boolean|false|Visibility of the custom page|
|» html|body|string|false|Body formatted in HTML (sanitized, only displayed if `htmlmode` is **true**).|
|» htmlmode|body|boolean|false|**true** if `html` should be displayed, **false** if `body` should be displayed.|
|» title|body|string|true|Title of the custom page|

<h3 id="create-custom-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The custom page has successfully been created|None|
|400|Bad Request|There was a validation error during creation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Get custom page

<a id="opIdgetCustomPage"></a>

> Code samples

```bash
curl https://example.com/custompages/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /custompages/{slug}`

Returns the custom page with this slug

<h3 id="get-custom-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|Slug of custom page|

<h3 id="get-custom-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The custom page exists and has been returned|None|
|404|Not Found|There is no custom page with that slug|None|

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
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "body": "string",
    "hidden": true,
    "html": "string",
    "htmlmode": false,
    "title": "string"
  }'
```

`PUT /custompages/{slug}`

Update a custom page with this slug

> Body parameter

```json
{
  "body": "string",
  "hidden": true,
  "html": "string",
  "htmlmode": false,
  "title": "string"
}
```

<h3 id="update-custom-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|Slug of custom page|
|body|body|[CustomPage](#schemacustompage)|true|CustomPage object|
|» body|body|string|false|Body formatted in Markdown (displayed by default).|
|» hidden|body|boolean|false|Visibility of the custom page|
|» html|body|string|false|Body formatted in HTML (sanitized, only displayed if `htmlmode` is **true**).|
|» htmlmode|body|boolean|false|**true** if `html` should be displayed, **false** if `body` should be displayed.|
|» title|body|string|true|Title of the custom page|

<h3 id="update-custom-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The custom page has successfully been updated|None|
|400|Bad Request|There was a validation error during update|None|
|404|Not Found|There is no custom page with that slug|None|

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
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /custompages/{slug}`

Delete the custom page with this slug

<h3 id="delete-custom-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|Slug of custom page|

<h3 id="delete-custom-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The custom page has successfully been updated|None|
|404|Not Found|There is no custom page with that slug|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="api-endpoints-docs">Docs</h1>

## Create doc

<a id="opIdcreateDoc"></a>

> Code samples

```bash
curl https://example.com/docs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -H 'x-readme-version: v3.0' \
  -d '{
    "body": "string",
    "category": "string",
    "hidden": true,
    "parentDoc": "string",
    "title": "string",
    "type": "basic"
  }'
```

`POST /docs`

Create a new doc inside of this project

> Body parameter

```json
{
  "body": "string",
  "category": "string",
  "hidden": true,
  "parentDoc": "string",
  "title": "string",
  "type": "basic"
}
```

<h3 id="create-doc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-readme-version|header|string|true|Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.|
|body|body|[Doc](#schemadoc)|true|Doc object|
|» body|body|string|false|Body content of the page, formatted in ReadMe or Github flavored Markdown. Accepts long page content, for example, greater than 100k characters|
|» category|body|string|true|Category ID of the page, which you can get through https://docs.readme.com/developers/reference/categories#getcategory |
|» hidden|body|boolean|false|Visibility of the page|
|» parentDoc|body|string|false|For a subpage, specify the parent doc ID, which you can get through https://docs.readme.com/developers/reference/docs#getdoc|
|» title|body|string|true|Title of the page|
|» type|body|string|false|Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|basic|
|» type|error|
|» type|link|

<h3 id="create-doc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The doc has successfully been created|None|
|400|Bad Request|There was a validation error during creation|None|

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
  -H "Authorization: Basic ${CREDENTIALS}" \
  -H 'x-readme-version: v3.0'
```

`POST /docs/search`

Returns all docs that match the search

<h3 id="search-docs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|true|Search string to look for|
|x-readme-version|header|string|true|Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.|

<h3 id="search-docs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The search was successful and results were returned|None|
|500|Internal Server Error|There is an internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Get doc

<a id="opIdgetDoc"></a>

> Code samples

```bash
curl https://example.com/docs/new-features \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -H 'x-readme-version: v3.0'
```

`GET /docs/{slug}`

Returns the doc with this slug

<h3 id="get-doc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|Slug of doc. must be lowercase, and replace spaces with hyphens. For example, for the page titled "New Features", enter the slug "new-features"|
|x-readme-version|header|string|true|Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.|

<h3 id="get-doc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The doc exists and has been returned|None|
|404|Not Found|There is no doc with that slug|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Update doc

<a id="opIdupdateDoc"></a>

> Code samples

```bash
curl https://example.com/docs/new-features \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -H 'x-readme-version: v3.0' \
  -d '{
    "body": "string",
    "category": "string",
    "hidden": true,
    "parentDoc": "string",
    "title": "string",
    "type": "basic"
  }'
```

`PUT /docs/{slug}`

Update a doc with this slug

> Body parameter

```json
{
  "body": "string",
  "category": "string",
  "hidden": true,
  "parentDoc": "string",
  "title": "string",
  "type": "basic"
}
```

<h3 id="update-doc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|Slug of doc. must be lowercase, and replace spaces with hyphens. For example, for the page titled "New Features", enter the slug "new-features"|
|x-readme-version|header|string|true|Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.|
|body|body|[Doc](#schemadoc)|true|Doc object|
|» body|body|string|false|Body content of the page, formatted in ReadMe or Github flavored Markdown. Accepts long page content, for example, greater than 100k characters|
|» category|body|string|true|Category ID of the page, which you can get through https://docs.readme.com/developers/reference/categories#getcategory |
|» hidden|body|boolean|false|Visibility of the page|
|» parentDoc|body|string|false|For a subpage, specify the parent doc ID, which you can get through https://docs.readme.com/developers/reference/docs#getdoc|
|» title|body|string|true|Title of the page|
|» type|body|string|false|Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|basic|
|» type|error|
|» type|link|

<h3 id="update-doc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The doc has successfully been updated|None|
|400|Bad Request|There was a validation error during update|None|
|404|Not Found|There is no doc with that slug|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Delete doc

<a id="opIddeleteDoc"></a>

> Code samples

```bash
curl https://example.com/docs/new-features \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -H 'x-readme-version: v3.0'
```

`DELETE /docs/{slug}`

Delete the doc with this slug

<h3 id="delete-doc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|Slug of doc. must be lowercase, and replace spaces with hyphens. For example, for the page titled "New Features", enter the slug "new-features"|
|x-readme-version|header|string|true|Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.|

<h3 id="delete-doc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The doc has successfully been updated|None|
|404|Not Found|There is no doc with that slug|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="api-endpoints-errors">Errors</h1>

## Get errors

<a id="opIdgetErrors"></a>

> Code samples

```bash
curl https://example.com/errors \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /errors`

Returns with all of the error page types for this project

<h3 id="get-errors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of the errors|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="api-endpoints-swagger">Swagger</h1>

## uploadSwagger

<a id="opIduploadSwagger"></a>

> Code samples

```bash
curl https://example.com/swagger \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'swagger=@/path/to/file'
```

`POST /swagger`

<aside class="warning">
This operation is deprecated
</aside>

DEPRECATED. Instead use https://docs.readme.com/developers/reference/api-specification#uploadapispecification to upload a Swagger file to ReadMe

> Body parameter

```yaml
swagger: string
```

<h3 id="uploadswagger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» swagger|body|string(binary)|false|Swagger file|

<h3 id="uploadswagger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The Swagger file was successfully imported|None|
|400|Bad Request|There was a validation error during import|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## updateSwagger

<a id="opIdupdateSwagger"></a>

> Code samples

```bash
curl https://example.com/swagger/string \
  -X PUT \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'swagger=@/path/to/file'
```

`PUT /swagger/{id}`

<aside class="warning">
This operation is deprecated
</aside>

DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#updateapispecification to update a Swagger file.

> Body parameter

```yaml
swagger: string
```

<h3 id="updateswagger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the Swagger file|
|body|body|object|true|none|
|» swagger|body|string(binary)|false|Swagger file|

<h3 id="updateswagger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Swagger file was successfully updated|None|
|400|Bad Request|There was a validation error during import|None|
|404|Not Found|There is no Swagger file with that ID|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## deleteSwagger

<a id="opIddeleteSwagger"></a>

> Code samples

```bash
curl https://example.com/swagger/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /swagger/{id}`

<aside class="warning">
This operation is deprecated
</aside>

DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#deleteapispecification to delete a Swagger file in ReadMe

<h3 id="deleteswagger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of swagger the file|

<h3 id="deleteswagger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The Swagger file was successfully deleted|None|
|404|Not Found|There is no Swagger file with that ID|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="api-endpoints-version">Version</h1>

## Get versions

<a id="opIdgetVersions"></a>

> Code samples

```bash
curl https://example.com/version \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /version`

Retrieve a list of versions associated with a project API key

<h3 id="get-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON list of versions|None|

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
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "codename": "string",
    "from": "string",
    "is_beta": true,
    "is_deprecated": true,
    "is_hidden": true,
    "is_stable": true,
    "version": "string"
  }'
```

`POST /version`

Create a new version

> Body parameter

```json
{
  "codename": "string",
  "from": "string",
  "is_beta": true,
  "is_deprecated": true,
  "is_hidden": true,
  "is_stable": true,
  "version": "string"
}
```

<h3 id="create-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Version](#schemaversion)|true|Version object|
|» codename|body|string|false|Dubbed name of version|
|» from|body|string|true|Semantic Version to use as the base fork|
|» is_beta|body|boolean|false|none|
|» is_deprecated|body|boolean|false|Should this be deprecated? Only allowed in PUT operations|
|» is_hidden|body|boolean|false|Should this be publically accessible?|
|» is_stable|body|boolean|false|Should this be the **main** version|
|» version|body|string|true|Semantic Version|

<h3 id="create-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The model was successfully created and associated with the target project|None|
|400|Bad Request|That version already exists in the project, or there are validation errors with the request|None|
|404|Not Found|Could not find target fork in database|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Get version

<a id="opIdgetVersion"></a>

> Code samples

```bash
curl https://example.com/version/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /version/{versionId}`

Returns the version with this version ID

<h3 id="get-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionId|path|string|true|Semver version indentifier|

<h3 id="get-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON version model|None|
|404|Not Found|Could not find target version in database|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Update version

<a id="opIdupdateVersion"></a>

> Code samples

```bash
curl https://example.com/version/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "codename": "string",
    "from": "string",
    "is_beta": true,
    "is_deprecated": true,
    "is_hidden": true,
    "is_stable": true,
    "version": "string"
  }'
```

`PUT /version/{versionId}`

Update an existing version

> Body parameter

```json
{
  "codename": "string",
  "from": "string",
  "is_beta": true,
  "is_deprecated": true,
  "is_hidden": true,
  "is_stable": true,
  "version": "string"
}
```

<h3 id="update-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionId|path|string|true|Semver version indentifier|
|body|body|[Version](#schemaversion)|true|Version object|
|» codename|body|string|false|Dubbed name of version|
|» from|body|string|true|Semantic Version to use as the base fork|
|» is_beta|body|boolean|false|none|
|» is_deprecated|body|boolean|false|Should this be deprecated? Only allowed in PUT operations|
|» is_hidden|body|boolean|false|Should this be publically accessible?|
|» is_stable|body|boolean|false|Should this be the **main** version|
|» version|body|string|true|Semantic Version|

<h3 id="update-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The target version was successfully updated|None|
|400|Bad Request|Cannot demote a version through update|None|
|404|Not Found|Could not find target version in database|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Delete version

<a id="opIddeleteVersion"></a>

> Code samples

```bash
curl https://example.com/version/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /version/{versionId}`

Delete a version

<h3 id="delete-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionId|path|string|true|Semver version indentifier|

<h3 id="delete-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The target version was successfully deleted|None|
|400|Bad Request|Cannot delete the main version for a project|None|
|404|Not Found|Could not find target version in database|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

# Schemas

<h2 id="tocS_Changelog">Changelog</h2>
<!-- backwards compatibility -->
<a id="schemachangelog"></a>
<a id="schema_Changelog"></a>
<a id="tocSchangelog"></a>
<a id="tocschangelog"></a>

```json
{
  "body": "string",
  "hidden": true,
  "title": "string",
  "type": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|true|none|Body content of the changelog|
|hidden|boolean|false|none|Visibility of the changelog|
|title|string|true|none|Title of the changelog|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|""|
|type|added|
|type|fixed|
|type|improved|
|type|deprecated|
|type|removed|

<h2 id="tocS_CustomPage">CustomPage</h2>
<!-- backwards compatibility -->
<a id="schemacustompage"></a>
<a id="schema_CustomPage"></a>
<a id="tocScustompage"></a>
<a id="tocscustompage"></a>

```json
{
  "body": "string",
  "hidden": true,
  "html": "string",
  "htmlmode": false,
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|Body formatted in Markdown (displayed by default).|
|hidden|boolean|false|none|Visibility of the custom page|
|html|string|false|none|Body formatted in HTML (sanitized, only displayed if `htmlmode` is **true**).|
|htmlmode|boolean|false|none|**true** if `html` should be displayed, **false** if `body` should be displayed.|
|title|string|true|none|Title of the custom page|

<h2 id="tocS_Doc">Doc</h2>
<!-- backwards compatibility -->
<a id="schemadoc"></a>
<a id="schema_Doc"></a>
<a id="tocSdoc"></a>
<a id="tocsdoc"></a>

```json
{
  "body": "string",
  "category": "string",
  "hidden": true,
  "parentDoc": "string",
  "title": "string",
  "type": "basic"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|Body content of the page, formatted in ReadMe or Github flavored Markdown. Accepts long page content, for example, greater than 100k characters|
|category|string|true|none|Category ID of the page, which you can get through https://docs.readme.com/developers/reference/categories#getcategory |
|hidden|boolean|false|none|Visibility of the page|
|parentDoc|string|false|none|For a subpage, specify the parent doc ID, which you can get through https://docs.readme.com/developers/reference/docs#getdoc|
|title|string|true|none|Title of the page|
|type|string|false|none|Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link)|

#### Enumerated Values

|Property|Value|
|---|---|
|type|basic|
|type|error|
|type|link|

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
{
  "codename": "string",
  "from": "string",
  "is_beta": true,
  "is_deprecated": true,
  "is_hidden": true,
  "is_stable": true,
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codename|string|false|none|Dubbed name of version|
|from|string|true|none|Semantic Version to use as the base fork|
|is_beta|boolean|false|none|none|
|is_deprecated|boolean|false|none|Should this be deprecated? Only allowed in PUT operations|
|is_hidden|boolean|false|none|Should this be publically accessible?|
|is_stable|boolean|false|none|Should this be the **main** version|
|version|string|true|none|Semantic Version|
