<h1 id="url-mappings">Url Mappings v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Basepom for all HubSpot Projects

Base URLs:

* <a href="https://api.hubapi.com">https://api.hubapi.com</a>

# Authentication

* API Key (developer_hapikey)
    - Parameter Name: **hapikey**, in: query.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

|Scope|Scope Description|
|---|---|
|content||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="url-mappings-basic">Basic</h1>

## List URL mappings

<a id="opIdget-/url-mappings/2026-09/url-mappings_/url-mappings/v3/url-mappings"></a>

> Code samples

```bash
curl https://api.hubapi.com/url-mappings/2026-09/url-mappings \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /url-mappings/2026-09/url-mappings`

Retrieve a list of URL mappings from the HubSpot account. This endpoint provides access to URL mapping configurations, which can be used to manage and redirect URLs within the HubSpot CMS. It is useful for understanding how URLs are structured and redirected in your content management setup.

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-url-mappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|An error occurred.|[Error](#schemaerror)|

<h3 id="list-url-mappings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UrlMapping](#schemaurlmapping)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Create URL mapping

<a id="opIdpost-/url-mappings/2026-09/url-mappings_/url-mappings/v3/url-mappings"></a>

> Code samples

```bash
curl https://api.hubapi.com/url-mappings/2026-09/url-mappings \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /url-mappings/2026-09/url-mappings`

Create a new URL mapping in your HubSpot account. This endpoint allows you to define URL redirections and mappings, which can be useful for managing site navigation and SEO. The request body must include all required properties of the UrlMapping schema.

> Body parameter

```json
null
```

<h3 id="create-url-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UrlMapping](#schemaurlmapping)|true|none|
|» cdnPurgeEmbargoTime|body|integer(int64)|true|A Unix timestamp in milliseconds indicating the embargo time for CDN purge related to the URL mapping.|
|» contentGroupId|body|integer(int64)|true|A 64-bit integer representing the content group associated with the URL mapping.|
|» cosObjectType|body|string|true|A string representing the type of content object associated with the URL mapping. Valid values include various content types such as 'CONTENT', 'LAYOUT', 'FILE', etc.|
|» created|body|integer(int64)|true|A Unix timestamp in milliseconds indicating when the URL mapping was created.|
|» createdById|body|integer(int32)|true|The identifier of the user who created the URL mapping.|
|» deletedAt|body|integer(int64)|true|A Unix timestamp in milliseconds indicating when the URL mapping was deleted.|
|» destination|body|string|true|The destination URL to which the routePrefix is redirected.|
|» id|body|integer(int64)|true|The unique identifier for the URL mapping, represented as a 64-bit integer.|
|» internallyCreated|body|boolean|true|A boolean indicating if the URL mapping was created internally by the system.|
|» isActive|body|boolean|true|A boolean indicating if the URL mapping is currently active.|
|» isMatchFullUrl|body|boolean|true|A boolean indicating if the full URL should be matched.|
|» isMatchQueryString|body|boolean|true|A boolean indicating if the query string should be matched.|
|» isOnlyAfterNotFound|body|boolean|true|A boolean indicating if the mapping should only be applied after a 404 Not Found response.|
|» isPattern|body|boolean|true|A boolean indicating if the routePrefix is a pattern.|
|» isProtocolAgnostic|body|boolean|true|A boolean indicating if the mapping should ignore the URL protocol (http/https).|
|» isRegex|body|boolean|true|A boolean indicating if the routePrefix should be treated as a regular expression.|
|» isTrailingSlashOptional|body|boolean|true|A boolean indicating if the trailing slash in the URL is optional.|
|» label|body|string|true|A label for the URL mapping.|
|» lastUsedAt|body|integer(int64)|true|A Unix timestamp in milliseconds indicating the last time the URL mapping was used.|
|» name|body|string|true|The name of the URL mapping.|
|» note|body|string|true|A string containing notes about the URL mapping.|
|» portalId|body|integer(int32)|true|The identifier for the HubSpot portal associated with this URL mapping.|
|» precedence|body|integer(int32)|true|An integer representing the precedence of the URL mapping, used to determine order of evaluation.|
|» redirectStyle|body|integer(int32)|true|An integer representing the style of redirection used.|
|» routePrefix|body|string|true|The prefix of the URL path that is being mapped.|
|» updated|body|integer(int64)|true|A Unix timestamp in milliseconds indicating when the URL mapping was last updated.|
|» updatedById|body|integer(int32)|true|The identifier of the user who last updated the URL mapping.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» cosObjectType|ACCESS_GROUP_MEMBERSHIP|
|» cosObjectType|APP_PAGE|
|» cosObjectType|BLOCK|
|» cosObjectType|BLOG|
|» cosObjectType|BLOG_AUTHOR|
|» cosObjectType|BRAND_BUSINESS_UNIT|
|» cosObjectType|BRAND_SETTINGS|
|» cosObjectType|CONTACT_MEMBERSHIP|
|» cosObjectType|CONTENT|
|» cosObjectType|CONTENT_EMBED|
|» cosObjectType|CONTENT_FOLDER|
|» cosObjectType|CONTENT_GROUP|
|» cosObjectType|CRM_OBJECT|
|» cosObjectType|CRM_OBJECT_TYPE|
|» cosObjectType|CUSTOM_WIDGET|
|» cosObjectType|CUSTOMER_PORTAL|
|» cosObjectType|DATA_QUERY|
|» cosObjectType|DESIGN_FOLDER|
|» cosObjectType|DOMAIN|
|» cosObjectType|DOMAIN_SETTINGS|
|» cosObjectType|EMAIL_ADDRESS|
|» cosObjectType|EXTENSION_RESOURCE|
|» cosObjectType|FILE|
|» cosObjectType|FOLDER|
|» cosObjectType|FOLLOW_ME|
|» cosObjectType|FORM|
|» cosObjectType|GLOBAL_CONTENT|
|» cosObjectType|GLOBAL_STYLES_THEME|
|» cosObjectType|HUBDB_TABLE|
|» cosObjectType|HUBDB_TABLE_ROW|
|» cosObjectType|IMAGE|
|» cosObjectType|JS_PROJECT_COMPONENT|
|» cosObjectType|KNOWLEDGE_BASE|
|» cosObjectType|KNOWLEDGE_CATEGORY|
|» cosObjectType|KNOWLEDGE_CATEGORY_TRANSLATION|
|» cosObjectType|KNOWLEDGE_HOMEPAGE_CATEGORY|
|» cosObjectType|LAYOUT|
|» cosObjectType|LAYOUT_SECTION|
|» cosObjectType|LIST_MEMBERSHIP|
|» cosObjectType|MARKETPLACE_LISTING|
|» cosObjectType|PASSWORD_PROTECTED|
|» cosObjectType|PAYMENT|
|» cosObjectType|PERSONALIZATION_TOKEN|
|» cosObjectType|PLACEMENT|
|» cosObjectType|PROJECT|
|» cosObjectType|QUOTE_TEMPLATE|
|» cosObjectType|RAW_ASSET|
|» cosObjectType|REDIRECT_URL|
|» cosObjectType|SECTION|
|» cosObjectType|SERVERLESS_FUNCTION|
|» cosObjectType|SITE_MAP|
|» cosObjectType|SITE_MENU|
|» cosObjectType|SITE_SETTINGS|
|» cosObjectType|SUBSCRIPTIONS_SETTINGS|
|» cosObjectType|TAG|
|» cosObjectType|THEME|
|» cosObjectType|THEME_SETTINGS|
|» cosObjectType|UNRESTRICTED_ACCESS|
|» cosObjectType|URL_MAPPING|
|» cosObjectType|VIDEO_PLAYER|
|» cosObjectType|WIDGET|
|» cosObjectType|WORKFLOW|

> Example responses

> default Response

```json
null
```

<h3 id="create-url-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Retrieve URL mapping

<a id="opIdget-/url-mappings/2026-09/url-mappings/{id}_/url-mappings/v3/url-mappings/{id}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/url-mappings/2026-09/url-mappings/{id}' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /url-mappings/2026-09/url-mappings/{id}`

Retrieve a specific URL mapping by its unique identifier. This endpoint is useful for obtaining details about a particular URL mapping configuration within your HubSpot account. It requires the ID of the URL mapping as a path parameter.

<h3 id="retrieve-url-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The unique identifier of the URL mapping to retrieve. It must be an integer.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-url-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[UrlMapping](#schemaurlmapping)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Delete URL mapping

<a id="opIddelete-/url-mappings/2026-09/url-mappings/{id}_/url-mappings/v3/url-mappings/{id}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/url-mappings/2026-09/url-mappings/{id}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /url-mappings/2026-09/url-mappings/{id}`

Delete a specific URL mapping in your HubSpot account using its unique identifier. This operation will remove the URL mapping permanently, and it requires appropriate write and delete permissions.

<h3 id="delete-url-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The unique identifier of the URL mapping to delete. Must be an integer.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-url-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
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
  "message": "Invalid input (details will vary based on the error)",
  "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
  "category": "VALIDATION_ERROR",
  "links": {
    "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
  }
}
```

Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The error category|
|context|object|false|none|Context about the error condition|
|correlationId|string(uuid)|true|none|A unique identifier for the request. Include this value with any error reports or support tickets|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|further information about the error|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
null
```

Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code associated with the error detail|
|context|object|false|none|Context about the error condition|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_UrlMapping">UrlMapping</h2>
<!-- backwards compatibility -->
<a id="schemaurlmapping"></a>
<a id="schema_UrlMapping"></a>
<a id="tocSurlmapping"></a>
<a id="tocsurlmapping"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cdnPurgeEmbargoTime|integer(int64)|true|none|A Unix timestamp in milliseconds indicating the embargo time for CDN purge related to the URL mapping.|
|contentGroupId|integer(int64)|true|none|A 64-bit integer representing the content group associated with the URL mapping.|
|cosObjectType|string|true|none|A string representing the type of content object associated with the URL mapping. Valid values include various content types such as 'CONTENT', 'LAYOUT', 'FILE', etc.|
|created|integer(int64)|true|none|A Unix timestamp in milliseconds indicating when the URL mapping was created.|
|createdById|integer(int32)|true|none|The identifier of the user who created the URL mapping.|
|deletedAt|integer(int64)|true|none|A Unix timestamp in milliseconds indicating when the URL mapping was deleted.|
|destination|string|true|none|The destination URL to which the routePrefix is redirected.|
|id|integer(int64)|true|none|The unique identifier for the URL mapping, represented as a 64-bit integer.|
|internallyCreated|boolean|true|none|A boolean indicating if the URL mapping was created internally by the system.|
|isActive|boolean|true|none|A boolean indicating if the URL mapping is currently active.|
|isMatchFullUrl|boolean|true|none|A boolean indicating if the full URL should be matched.|
|isMatchQueryString|boolean|true|none|A boolean indicating if the query string should be matched.|
|isOnlyAfterNotFound|boolean|true|none|A boolean indicating if the mapping should only be applied after a 404 Not Found response.|
|isPattern|boolean|true|none|A boolean indicating if the routePrefix is a pattern.|
|isProtocolAgnostic|boolean|true|none|A boolean indicating if the mapping should ignore the URL protocol (http/https).|
|isRegex|boolean|true|none|A boolean indicating if the routePrefix should be treated as a regular expression.|
|isTrailingSlashOptional|boolean|true|none|A boolean indicating if the trailing slash in the URL is optional.|
|label|string|true|none|A label for the URL mapping.|
|lastUsedAt|integer(int64)|true|none|A Unix timestamp in milliseconds indicating the last time the URL mapping was used.|
|name|string|true|none|The name of the URL mapping.|
|note|string|true|none|A string containing notes about the URL mapping.|
|portalId|integer(int32)|true|none|The identifier for the HubSpot portal associated with this URL mapping.|
|precedence|integer(int32)|true|none|An integer representing the precedence of the URL mapping, used to determine order of evaluation.|
|redirectStyle|integer(int32)|true|none|An integer representing the style of redirection used.|
|routePrefix|string|true|none|The prefix of the URL path that is being mapped.|
|updated|integer(int64)|true|none|A Unix timestamp in milliseconds indicating when the URL mapping was last updated.|
|updatedById|integer(int32)|true|none|The identifier of the user who last updated the URL mapping.|

#### Enumerated Values

|Property|Value|
|---|---|
|cosObjectType|ACCESS_GROUP_MEMBERSHIP|
|cosObjectType|APP_PAGE|
|cosObjectType|BLOCK|
|cosObjectType|BLOG|
|cosObjectType|BLOG_AUTHOR|
|cosObjectType|BRAND_BUSINESS_UNIT|
|cosObjectType|BRAND_SETTINGS|
|cosObjectType|CONTACT_MEMBERSHIP|
|cosObjectType|CONTENT|
|cosObjectType|CONTENT_EMBED|
|cosObjectType|CONTENT_FOLDER|
|cosObjectType|CONTENT_GROUP|
|cosObjectType|CRM_OBJECT|
|cosObjectType|CRM_OBJECT_TYPE|
|cosObjectType|CUSTOM_WIDGET|
|cosObjectType|CUSTOMER_PORTAL|
|cosObjectType|DATA_QUERY|
|cosObjectType|DESIGN_FOLDER|
|cosObjectType|DOMAIN|
|cosObjectType|DOMAIN_SETTINGS|
|cosObjectType|EMAIL_ADDRESS|
|cosObjectType|EXTENSION_RESOURCE|
|cosObjectType|FILE|
|cosObjectType|FOLDER|
|cosObjectType|FOLLOW_ME|
|cosObjectType|FORM|
|cosObjectType|GLOBAL_CONTENT|
|cosObjectType|GLOBAL_STYLES_THEME|
|cosObjectType|HUBDB_TABLE|
|cosObjectType|HUBDB_TABLE_ROW|
|cosObjectType|IMAGE|
|cosObjectType|JS_PROJECT_COMPONENT|
|cosObjectType|KNOWLEDGE_BASE|
|cosObjectType|KNOWLEDGE_CATEGORY|
|cosObjectType|KNOWLEDGE_CATEGORY_TRANSLATION|
|cosObjectType|KNOWLEDGE_HOMEPAGE_CATEGORY|
|cosObjectType|LAYOUT|
|cosObjectType|LAYOUT_SECTION|
|cosObjectType|LIST_MEMBERSHIP|
|cosObjectType|MARKETPLACE_LISTING|
|cosObjectType|PASSWORD_PROTECTED|
|cosObjectType|PAYMENT|
|cosObjectType|PERSONALIZATION_TOKEN|
|cosObjectType|PLACEMENT|
|cosObjectType|PROJECT|
|cosObjectType|QUOTE_TEMPLATE|
|cosObjectType|RAW_ASSET|
|cosObjectType|REDIRECT_URL|
|cosObjectType|SECTION|
|cosObjectType|SERVERLESS_FUNCTION|
|cosObjectType|SITE_MAP|
|cosObjectType|SITE_MENU|
|cosObjectType|SITE_SETTINGS|
|cosObjectType|SUBSCRIPTIONS_SETTINGS|
|cosObjectType|TAG|
|cosObjectType|THEME|
|cosObjectType|THEME_SETTINGS|
|cosObjectType|UNRESTRICTED_ACCESS|
|cosObjectType|URL_MAPPING|
|cosObjectType|VIDEO_PLAYER|
|cosObjectType|WIDGET|
|cosObjectType|WORKFLOW|
