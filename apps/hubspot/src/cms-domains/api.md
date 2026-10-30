<h1 id="domains">Domains v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Content Domains Service

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
|cms.domains.read||
|cms.domains.write||
|cms.knowledge_base.settings.read||
|cms.knowledge_base.settings.write||
|content||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="domains-basic">Basic</h1>

## List Domains

<a id="opIdget-/cms/domains/2026-09_/cms/domains/v3"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/domains/2026-09 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/domains/2026-09`

Retrieve a list of content domains associated with your HubSpot account. This endpoint allows filtering by creation and update timestamps, sorting, and pagination. It is useful for managing and reviewing the domains configured in your CMS.

<h3 id="list-domains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|createdAfter|query|string(date-time)|false|Filter results to include only domains created after the specified date and time. Format should be date-time.|
|createdAt|query|string(date-time)|false|Filter results by the exact creation date and time of the domain. Format should be date-time.|
|createdBefore|query|string(date-time)|false|Filter results to include only domains created before the specified date and time. Format should be date-time.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|sort|query|[string]|false|Specify the fields by which to sort the results. Accepts an array of strings.|
|updatedAfter|query|string(date-time)|false|Filter results to include only domains updated after the specified date and time. Format should be date-time.|
|updatedAt|query|string(date-time)|false|Filter results by the exact update date and time of the domain. Format should be date-time.|
|updatedBefore|query|string(date-time)|false|Filter results to include only domains updated before the specified date and time. Format should be date-time.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-domains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalDomain](#schemacollectionresponsewithtotaldomain)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: cms.domains.read ), oauth2 ( Scopes: content ), oauth2 ( Scopes: cms.domains.write ), oauth2 ( Scopes: cms.knowledge_base.settings.read ), oauth2 ( Scopes: cms.knowledge_base.settings.write )
</aside>

## Get a single domain

<a id="opIdget-/cms/domains/2026-09/{domainId}_getById"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/domains/2026-09/{domainId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/domains/2026-09/{domainId}`

Returns a single domains with the id specified.

<h3 id="get-a-single-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domainId|path|string|true|The unique identifier of the domain to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-a-single-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Domain](#schemadomain)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: cms.domains.read ), oauth2 ( Scopes: content ), oauth2 ( Scopes: cms.domains.write ), oauth2 ( Scopes: cms.knowledge_base.settings.read ), oauth2 ( Scopes: cms.knowledge_base.settings.write )
</aside>

# Schemas

<h2 id="tocS_CollectionResponseWithTotalDomain">CollectionResponseWithTotalDomain</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotaldomain"></a>
<a id="schema_CollectionResponseWithTotalDomain"></a>
<a id="tocScollectionresponsewithtotaldomain"></a>
<a id="tocscollectionresponsewithtotaldomain"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[Domain](#schemadomain)]|true|none|The results of the query.|
|total|integer(int32)|true|none|The number of available results.|

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|correctCname|string|true|none|The expected CNAME record for the domain.|
|created|string(date-time)|true|none|The date and time when the domain was created.|
|domain|string|true|none|The actual domain or sub-domain. e.g. www.hubspot.com|
|id|string|true|none|The unique ID of this domain.|
|isResolving|boolean|true|none|Whether the DNS for this domain is optimally configured for use with HubSpot.|
|isSslEnabled|boolean|true|none|Indicates whether SSL is enabled for the domain.|
|isSslOnly|boolean|true|none|Indicates whether the domain is accessible only via SSL.|
|isUsedForBlogPost|boolean|true|none|Whether the domain is used for CMS blog posts.|
|isUsedForEmail|boolean|true|none|Whether the domain is used for CMS email web pages.|
|isUsedForKnowledge|boolean|true|none|Whether the domain is used for CMS knowledge pages.|
|isUsedForLandingPage|boolean|true|none|Whether the domain is used for CMS landing pages.|
|isUsedForSitePage|boolean|true|none|Whether the domain is used for CMS site pages.|
|manuallyMarkedAsResolving|boolean|true|none|Indicates whether the domain has been manually marked as resolving.|
|primaryBlogPost|boolean|true|none|Indicates whether the domain is the primary domain for blog posts.|
|primaryEmail|boolean|true|none|Indicates whether the domain is the primary domain for email pages.|
|primaryKnowledge|boolean|true|none|Indicates whether the domain is the primary domain for knowledge pages.|
|primaryLandingPage|boolean|true|none|Indicates whether the domain is the primary domain for landing pages.|
|primarySitePage|boolean|true|none|Indicates whether the domain is the primary domain for site pages.|
|secondaryToDomain|string|true|none|Specifies the domain to which this domain is secondary.|
|updated|string(date-time)|true|none|The date and time when the domain was last updated.|

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
|after|string|true|none|The cursor value indicating where to begin fetching the next page of results in a paginated collection|
|link|string|false|none|An optional URL for directly accessing the next page of results.|

<h2 id="tocS_Paging">Paging</h2>
<!-- backwards compatibility -->
<a id="schemapaging"></a>
<a id="schema_Paging"></a>
<a id="tocSpaging"></a>
<a id="tocspaging"></a>

```json
null
```

Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|
|prev|[PreviousPage](#schemapreviouspage)|false|none|specifies the paging information needed to retrieve the previous set of results in a paginated API response|

<h2 id="tocS_PreviousPage">PreviousPage</h2>
<!-- backwards compatibility -->
<a id="schemapreviouspage"></a>
<a id="schema_PreviousPage"></a>
<a id="tocSpreviouspage"></a>
<a id="tocspreviouspage"></a>

```json
null
```

specifies the paging information needed to retrieve the previous set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|before|string|true|none|A string token used as a cursor to identify the position before the current set of results in pagination.|
|link|string|false|none|A string containing the URL link to the previous page of results.|
