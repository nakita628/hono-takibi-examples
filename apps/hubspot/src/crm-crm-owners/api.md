<h1 id="crm-owners">Crm Owners v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Owners - Parent pom

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
|automation||
|crm.objects.owners.read||
|crm.pipelines.approval.read||
|crm.pipelines.governance.write||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="crm-owners-basic">Basic</h1>

## List owners

<a id="opIdget-/crm/owners/2026-09_/crm/owners/v3"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/owners/2026-09 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/owners/2026-09`

Retrieve a paginated list of owners from your HubSpot account. This endpoint allows filtering by email and supports pagination through the 'after' parameter. You can also specify the maximum number of results per page and choose to include archived owners in the response.

<h3 id="list-owners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|email|query|string|false|Filter by email address (optional)|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-owners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicOwnerForwardPaging](#schemacollectionresponsepublicownerforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: automation ), oauth2 ( Scopes: crm.objects.owners.read ), oauth2 ( Scopes: crm.pipelines.approval.read ), oauth2 ( Scopes: crm.pipelines.governance.write )
</aside>

## Retrieve a specific owner by ID

<a id="opIdget-/crm/owners/2026-09/{ownerId}_getById"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/owners/2026-09/{ownerId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/owners/2026-09/{ownerId}`

Retrieve details of a specific owner using either their 'id' or 'userId'.

<h3 id="retrieve-a-specific-owner-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|integer(int32)|true|The unique identifier of the owner to retrieve.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|idProperty|query|string|false|Specifies which property to use for identifying the owner. Valid values are 'id' or 'userId'. Defaults to 'id'.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|idProperty|id|
|idProperty|userId|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-a-specific-owner-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicOwner](#schemapublicowner)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: automation ), oauth2 ( Scopes: crm.objects.owners.read ), oauth2 ( Scopes: crm.pipelines.approval.read ), oauth2 ( Scopes: crm.pipelines.governance.write )
</aside>

# Schemas

<h2 id="tocS_CollectionResponsePublicOwnerForwardPaging">CollectionResponsePublicOwnerForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublicownerforwardpaging"></a>
<a id="schema_CollectionResponsePublicOwnerForwardPaging"></a>
<a id="tocScollectionresponsepublicownerforwardpaging"></a>
<a id="tocscollectionresponsepublicownerforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[PublicOwner](#schemapublicowner)]|true|none|An array of PublicOwner objects, each representing an individual owner with their specific details.|

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
|after|string|true|none|A string token used as a cursor for pagination, indicating the position after the last item on the current page.|
|link|string|false|none|A string containing the URL link to the next page of results.|

<h2 id="tocS_PublicOwner">PublicOwner</h2>
<!-- backwards compatibility -->
<a id="schemapublicowner"></a>
<a id="schema_PublicOwner"></a>
<a id="tocSpublicowner"></a>
<a id="tocspublicowner"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|Indicates whether the owner is archived.|
|createdAt|string(date-time)|true|none|The date and time when the owner was created.|
|email|string|false|none|The email address of the owner.|
|firstName|string|false|none|The first name of the owner.|
|id|string|true|none|The unique identifier of the owner.|
|lastName|string|false|none|The last name of the owner.|
|teams|[[PublicTeam](#schemapublicteam)]|false|none|An array of teams associated with the owner, where each team is represented by a PublicTeam object.|
|type|string|true|none|The type of the owner, which can be either PERSON or QUEUE.|
|updatedAt|string(date-time)|true|none|The date and time when the owner was last updated.|
|userId|integer(int32)|false|none|The user ID of the owner.|
|userIdIncludingInactive|integer(int32)|false|none|The user ID of the owner, including inactive users.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|PERSON|
|type|QUEUE|

<h2 id="tocS_PublicTeam">PublicTeam</h2>
<!-- backwards compatibility -->
<a id="schemapublicteam"></a>
<a id="schema_PublicTeam"></a>
<a id="tocSpublicteam"></a>
<a id="tocspublicteam"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the team, represented as a string.|
|name|string|true|none|The name of the team, represented as a string.|
|primary|boolean|true|none|A boolean indicating whether this team is the primary team.|
