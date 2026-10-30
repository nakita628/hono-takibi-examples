<h1 id="url-redirects">Url Redirects v2026-09</h1>

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

<h1 id="url-redirects-basic">Basic</h1>

## List URL Redirects

<a id="opIdget-/cms/url-redirects/2026-09_/cms/url-redirects/v3"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/url-redirects/2026-09 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/url-redirects/2026-09`

Retrieve a list of URL redirects in your HubSpot account. This endpoint allows you to filter redirects based on their creation or update timestamps, and sort the results. It supports pagination and can include archived redirects if specified.

<h3 id="list-url-redirects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|createdAfter|query|string(date-time)|false|Filter redirects created after the specified date-time.|
|createdAt|query|string(date-time)|false|Filter redirects by their exact creation timestamp. The value should be in date-time format.|
|createdBefore|query|string(date-time)|false|Filter redirects created before the specified date-time.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|sort|query|[string]|false|Specify the fields to sort the results by. This is an array of strings.|
|updatedAfter|query|string(date-time)|false|Filter redirects updated after the specified date-time.|
|updatedAt|query|string(date-time)|false|Filter redirects by their exact update timestamp. The value should be in date-time format.|
|updatedBefore|query|string(date-time)|false|Filter redirects updated before the specified date-time.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-url-redirects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalUrlMappingForwardPaging](#schemacollectionresponsewithtotalurlmappingforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Create URL Redirect

<a id="opIdpost-/cms/url-redirects/2026-09_/cms/url-redirects/v3"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/url-redirects/2026-09 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /cms/url-redirects/2026-09`

Create a new URL redirect in your HubSpot account. This endpoint allows you to define the destination URL, redirect style, and route prefix for the redirect. It is useful for managing URL redirections and ensuring that users are directed to the correct pages.

> Body parameter

```json
null
```

<h3 id="create-url-redirect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UrlMappingCreateRequestBody](#schemaurlmappingcreaterequestbody)|true|none|
|» destination|body|string|true|The destination URL, where the target URL should be redirected if it matches the `routePrefix`.|
|» isMatchFullUrl|body|boolean|false|Whether the `routePrefix` should match on the entire URL, including the domain.|
|» isMatchQueryString|body|boolean|false|Whether the `routePrefix` should match on the entire URL path, including the query string.|
|» isOnlyAfterNotFound|body|boolean|false|Whether the URL redirect mapping should apply only if a live page on the URL isn't found. If False, the URL redirect mapping will take precedence over any existing page.|
|» isPattern|body|boolean|false|Whether the `routePrefix` should match based on pattern.|
|» isProtocolAgnostic|body|boolean|false|Whether the `routePrefix` should match both HTTP and HTTPS protocols.|
|» isTrailingSlashOptional|body|boolean|false|Whether a trailing slash will be ignored.|
|» precedence|body|integer(int32)|false|Used to prioritize URL redirection. If a given URL matches more than one redirect, the one with the **lower** precedence will be used.|
|» redirectStyle|body|integer(int32)|true|The type of redirect to create. Options include: 301 (permanent), 302 (temporary), or 305 (proxy). Find more details [here](https://knowledge.hubspot.com/cos-general/how-to-redirect-a-hubspot-page).|
|» routePrefix|body|string|true|The target incoming URL, path, or pattern to match for redirection.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-url-redirect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[UrlMapping](#schemaurlmapping)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## List URL Mappings

<a id="opIdget-/cms/url-redirects/2026-09/url-mappings_/cms/url-redirects/2026-03/url-mappings"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/url-redirects/2026-09/url-mappings \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/url-redirects/2026-09/url-mappings`

Retrieve a list of URL mappings for redirects in your HubSpot account. This endpoint allows you to access all URL mappings, which can be useful for managing and auditing redirects. The response includes details about each URL mapping, such as the destination and route prefix.

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

## Create URL Mapping

<a id="opIdpost-/cms/url-redirects/2026-09/url-mappings_/cms/url-redirects/2026-03/url-mappings"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/url-redirects/2026-09/url-mappings \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/url-redirects/2026-09/url-mappings`

Create a new URL mapping in your HubSpot account. This endpoint allows you to define a new URL redirect rule by specifying the route prefix, destination URL, and redirect style. The request body must include these required fields to successfully create a URL mapping.

> Body parameter

```json
null
```

<h3 id="create-url-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UrlMapping](#schemaurlmapping)|true|none|
|» created|body|string(date-time)|true|The date and time when the URL mapping was initially created.|
|» destination|body|string|true|The destination URL, where the target URL should be redirected if it matches the `routePrefix`.|
|» id|body|string|true|The unique ID of this URL redirect.|
|» isMatchFullUrl|body|boolean|true|Whether the `routePrefix` should match on the entire URL, including the domain.|
|» isMatchQueryString|body|boolean|true|Whether the `routePrefix` should match on the entire URL path, including the query string.|
|» isOnlyAfterNotFound|body|boolean|true|Whether the URL redirect mapping should apply only if a live page on the URL isn't found. If False, the URL redirect mapping will take precedence over any existing page.|
|» isPattern|body|boolean|true|Whether the `routePrefix` should match based on pattern.|
|» isProtocolAgnostic|body|boolean|true|Whether the `routePrefix` should match both HTTP and HTTPS protocols.|
|» isTrailingSlashOptional|body|boolean|true|Whether a trailing slash will be ignored.|
|» precedence|body|integer(int32)|true|Used to prioritize URL redirection. If a given URL matches more than one redirect, the one with the **lower** precedence will be used.|
|» redirectStyle|body|integer(int32)|true|The type of redirect to create. Options include: 301 (permanent), 302 (temporary), or 305 (proxy). Find more details [here](https://knowledge.hubspot.com/cos-general/how-to-redirect-a-hubspot-page).|
|» routePrefix|body|string|true|The target incoming URL, path, or pattern to match for redirection.|
|» updated|body|string(date-time)|true|The date and time when the URL mapping was last modified.|

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

## Retrieve URL Mapping

<a id="opIdget-/cms/url-redirects/2026-09/url-mappings/{id}_/cms/url-redirects/2026-03/url-mappings/{id}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/url-redirects/2026-09/url-mappings/{id}' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/url-redirects/2026-09/url-mappings/{id}`

Retrieve a specific URL mapping by its unique identifier. This endpoint is useful for obtaining details about a particular URL redirect configuration within your HubSpot account. It requires the unique ID of the URL mapping to be specified in the path.

<h3 id="retrieve-url-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The unique identifier of the URL mapping to retrieve. Must be an integer.|

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

## Delete

<a id="opIddelete-/cms/url-redirects/2026-09/url-mappings/{id}_/cms/url-redirects/2026-03/url-mappings/{id}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/url-redirects/2026-09/url-mappings/{id}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /cms/url-redirects/2026-09/url-mappings/{id}`

Delete a specific URL mapping in your HubSpot account using its unique identifier. This operation is useful for removing outdated or incorrect URL redirects. Ensure you have the necessary permissions to perform this action.

<h3 id="delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The unique identifier of the URL mapping to delete. It must be an integer.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Get details for a redirect

<a id="opIdget-/cms/url-redirects/2026-09/{urlRedirectId}_getById"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/url-redirects/2026-09/{urlRedirectId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/url-redirects/2026-09/{urlRedirectId}`

Returns the details for a single existing URL redirect by ID.

<h3 id="get-details-for-a-redirect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|urlRedirectId|path|string|true|The unique identifier of the URL redirect to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-details-for-a-redirect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[UrlMapping](#schemaurlmapping)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Delete a redirect

<a id="opIddelete-/cms/url-redirects/2026-09/{urlRedirectId}_archive"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/url-redirects/2026-09/{urlRedirectId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /cms/url-redirects/2026-09/{urlRedirectId}`

Delete one existing redirect, so it is no longer mapped.

<h3 id="delete-a-redirect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|urlRedirectId|path|string|true|The unique identifier of the URL redirect to delete.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-a-redirect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Update a redirect

<a id="opIdpatch-/cms/url-redirects/2026-09/{urlRedirectId}_update"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/url-redirects/2026-09/{urlRedirectId}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /cms/url-redirects/2026-09/{urlRedirectId}`

Updates the settings for an existing URL redirect.

> Body parameter

```json
null
```

<h3 id="update-a-redirect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|urlRedirectId|path|string|true|The unique identifier of the URL redirect to update.|
|body|body|[UrlMapping](#schemaurlmapping)|true|none|
|» created|body|string(date-time)|true|The date and time when the URL mapping was initially created.|
|» destination|body|string|true|The destination URL, where the target URL should be redirected if it matches the `routePrefix`.|
|» id|body|string|true|The unique ID of this URL redirect.|
|» isMatchFullUrl|body|boolean|true|Whether the `routePrefix` should match on the entire URL, including the domain.|
|» isMatchQueryString|body|boolean|true|Whether the `routePrefix` should match on the entire URL path, including the query string.|
|» isOnlyAfterNotFound|body|boolean|true|Whether the URL redirect mapping should apply only if a live page on the URL isn't found. If False, the URL redirect mapping will take precedence over any existing page.|
|» isPattern|body|boolean|true|Whether the `routePrefix` should match based on pattern.|
|» isProtocolAgnostic|body|boolean|true|Whether the `routePrefix` should match both HTTP and HTTPS protocols.|
|» isTrailingSlashOptional|body|boolean|true|Whether a trailing slash will be ignored.|
|» precedence|body|integer(int32)|true|Used to prioritize URL redirection. If a given URL matches more than one redirect, the one with the **lower** precedence will be used.|
|» redirectStyle|body|integer(int32)|true|The type of redirect to create. Options include: 301 (permanent), 302 (temporary), or 305 (proxy). Find more details [here](https://knowledge.hubspot.com/cos-general/how-to-redirect-a-hubspot-page).|
|» routePrefix|body|string|true|The target incoming URL, path, or pattern to match for redirection.|
|» updated|body|string(date-time)|true|The date and time when the URL mapping was last modified.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-a-redirect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[UrlMapping](#schemaurlmapping)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

# Schemas

<h2 id="tocS_CollectionResponseWithTotalUrlMappingForwardPaging">CollectionResponseWithTotalUrlMappingForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalurlmappingforwardpaging"></a>
<a id="schema_CollectionResponseWithTotalUrlMappingForwardPaging"></a>
<a id="tocScollectionresponsewithtotalurlmappingforwardpaging"></a>
<a id="tocscollectionresponsewithtotalurlmappingforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[UrlMapping](#schemaurlmapping)]|true|none|An array of UrlMapping objects, each representing a specific URL mapping.|
|total|integer(int32)|true|none|The total number of URL mappings available.|

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

<h2 id="tocS_ForwardPaging">ForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemaforwardpaging"></a>
<a id="schema_ForwardPaging"></a>
<a id="tocSforwardpaging"></a>
<a id="tocsforwardpaging"></a>

```json
null
```

Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|

<h2 id="tocS_NextPage">NextPage</h2>
<!-- backwards compatibility -->
<a id="schemanextpage"></a>
<a id="schema_NextPage"></a>
<a id="tocSnextpage"></a>
<a id="tocsnextpage"></a>

```json
null
```

Specifies the paging information needed to retrieve the next set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|string|true|none|The cursor value indicating where to begin fetching the next page of results in a paginated collection.|
|link|string|false|none|An optional URL for directly accessing the next page of results.|

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
|created|string(date-time)|true|none|The date and time when the URL mapping was initially created.|
|destination|string|true|none|The destination URL, where the target URL should be redirected if it matches the `routePrefix`.|
|id|string|true|none|The unique ID of this URL redirect.|
|isMatchFullUrl|boolean|true|none|Whether the `routePrefix` should match on the entire URL, including the domain.|
|isMatchQueryString|boolean|true|none|Whether the `routePrefix` should match on the entire URL path, including the query string.|
|isOnlyAfterNotFound|boolean|true|none|Whether the URL redirect mapping should apply only if a live page on the URL isn't found. If False, the URL redirect mapping will take precedence over any existing page.|
|isPattern|boolean|true|none|Whether the `routePrefix` should match based on pattern.|
|isProtocolAgnostic|boolean|true|none|Whether the `routePrefix` should match both HTTP and HTTPS protocols.|
|isTrailingSlashOptional|boolean|true|none|Whether a trailing slash will be ignored.|
|precedence|integer(int32)|true|none|Used to prioritize URL redirection. If a given URL matches more than one redirect, the one with the **lower** precedence will be used.|
|redirectStyle|integer(int32)|true|none|The type of redirect to create. Options include: 301 (permanent), 302 (temporary), or 305 (proxy). Find more details [here](https://knowledge.hubspot.com/cos-general/how-to-redirect-a-hubspot-page).|
|routePrefix|string|true|none|The target incoming URL, path, or pattern to match for redirection.|
|updated|string(date-time)|true|none|The date and time when the URL mapping was last modified.|

<h2 id="tocS_UrlMappingCreateRequestBody">UrlMappingCreateRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemaurlmappingcreaterequestbody"></a>
<a id="schema_UrlMappingCreateRequestBody"></a>
<a id="tocSurlmappingcreaterequestbody"></a>
<a id="tocsurlmappingcreaterequestbody"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|string|true|none|The destination URL, where the target URL should be redirected if it matches the `routePrefix`.|
|isMatchFullUrl|boolean|false|none|Whether the `routePrefix` should match on the entire URL, including the domain.|
|isMatchQueryString|boolean|false|none|Whether the `routePrefix` should match on the entire URL path, including the query string.|
|isOnlyAfterNotFound|boolean|false|none|Whether the URL redirect mapping should apply only if a live page on the URL isn't found. If False, the URL redirect mapping will take precedence over any existing page.|
|isPattern|boolean|false|none|Whether the `routePrefix` should match based on pattern.|
|isProtocolAgnostic|boolean|false|none|Whether the `routePrefix` should match both HTTP and HTTPS protocols.|
|isTrailingSlashOptional|boolean|false|none|Whether a trailing slash will be ignored.|
|precedence|integer(int32)|false|none|Used to prioritize URL redirection. If a given URL matches more than one redirect, the one with the **lower** precedence will be used.|
|redirectStyle|integer(int32)|true|none|The type of redirect to create. Options include: 301 (permanent), 302 (temporary), or 305 (proxy). Find more details [here](https://knowledge.hubspot.com/cos-general/how-to-redirect-a-hubspot-page).|
|routePrefix|string|true|none|The target incoming URL, path, or pattern to match for redirection.|
