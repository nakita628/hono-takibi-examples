<h1 id="cms-content-audit">Cms Content Audit v2026-09</h1>

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

<h1 id="cms-content-audit-advanced">Advanced</h1>

## Export Logs

<a id="opIdpost-/cms/audit-logs/2026-09/export_/cms/audit-logs/2026-03/export"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/audit-logs/2026-09/export \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /cms/audit-logs/2026-09/export`

Export CMS audit logs based on specified settings. This endpoint allows users to export logs in various formats such as XLS, XLSX, or CSV. The request requires specifying details like the email, portal ID, and recipient user IDs. This is useful for auditing and monitoring changes within the CMS.

> Body parameter

```json
null
```

<h3 id="export-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CmsAuditLoggingExportSettings](#schemacmsauditloggingexportsettings)|true|none|
|» email|body|string|true|A string specifying the email address to which notifications about the export should be sent.|
|» filters|body|[CmsAuditLoggingExportFilters](#schemacmsauditloggingexportfilters)|false|none|
|» format|body|string|true|A string specifying the format of the export file. Valid values include 'XLS', 'XLSX', and 'CSV'.|
|» partition|body|integer(int32)|false|An integer used for partitioning the export data, if applicable.|
|» portalId|body|integer(int32)|true|An integer representing the ID of the portal from which the audit logs are being exported.|
|» recipientUserIds|body|[integer(int32)]|true|An array of integers specifying the IDs of users who should receive the exported file.|
|» shouldMarkExportFileAsSensitive|body|boolean|true|A boolean indicating whether the export file should be marked as sensitive.|
|» type|body|string|true|A string indicating the type of export being performed.|
|» userId|body|integer(int32)|false|An integer representing the ID of the user initiating the export.|
|» userTimeZone|body|string|false|A string representing the time zone of the user initiating the export.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|CSV|
|» format|XLS|
|» format|XLSX|

> Example responses

> default Response

```json
null
```

<h3 id="export-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

<h1 id="cms-content-audit-basic">Basic</h1>

## Retrieve logs

<a id="opIdget-/cms/audit-logs/2026-09_/cms/audit-logs/v3"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/audit-logs/2026-09 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/audit-logs/2026-09`

Retrieve audit logs for the CMS in your HubSpot account. This endpoint allows you to filter logs by user, event type, object type, and object ID. It supports pagination and sorting, making it easier to navigate through large sets of log data. Use this endpoint to monitor changes and activities within your CMS.

<h3 id="retrieve-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|before|query|string|false|A string to filter logs that occurred before a specific timestamp.|
|eventType|query|[string]|false|An array of event types to filter logs by specific actions such as CREATED, UPDATED, or DELETED.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|objectId|query|[string]|false|An array of object IDs to filter logs by specific objects that were affected.|
|objectType|query|[string]|false|An array of object types to filter logs by specific CMS objects like BLOG, TEMPLATE, or EMAIL.|
|sort|query|[string]|false|An array to specify the sorting order of the results.|
|userId|query|[string]|false|An array of user IDs to filter logs by the user who performed the action.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicAuditLog](#schemacollectionresponsepublicauditlog)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

# Schemas

<h2 id="tocS_CmsAuditLoggingExportFilters">CmsAuditLoggingExportFilters</h2>
<!-- backwards compatibility -->
<a id="schemacmsauditloggingexportfilters"></a>
<a id="schema_CmsAuditLoggingExportFilters"></a>
<a id="tocScmsauditloggingexportfilters"></a>
<a id="tocscmsauditloggingexportfilters"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectType|[string]|true|none|An array of strings representing the types of objects to filter by during the export. Valid object types include 'BLOG', 'BLOG_POST', 'LANDING_PAGE', 'WEBSITE_PAGE', 'TEMPLATE', 'MODULE', 'GLOBAL_MODULE', 'SERVERLESS_FUNCTION', 'DOMAIN', 'URL_MAPPING', 'EMAIL', 'CONTENT_SETTINGS', 'HUBDB_TABLE', 'KNOWLEDGE_BASE_ARTICLE', 'KNOWLEDGE_BASE', 'THEME', 'CSS', 'JS', 'CTA', 'FILE', 'WEB_INTERACTIVE', 'PODCAST', 'CASE_STUDY', and 'QUOTE'.|

<h2 id="tocS_CmsAuditLoggingExportSettings">CmsAuditLoggingExportSettings</h2>
<!-- backwards compatibility -->
<a id="schemacmsauditloggingexportsettings"></a>
<a id="schema_CmsAuditLoggingExportSettings"></a>
<a id="tocScmsauditloggingexportsettings"></a>
<a id="tocscmsauditloggingexportsettings"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|A string specifying the email address to which notifications about the export should be sent.|
|filters|[CmsAuditLoggingExportFilters](#schemacmsauditloggingexportfilters)|false|none|none|
|format|string|true|none|A string specifying the format of the export file. Valid values include 'XLS', 'XLSX', and 'CSV'.|
|partition|integer(int32)|false|none|An integer used for partitioning the export data, if applicable.|
|portalId|integer(int32)|true|none|An integer representing the ID of the portal from which the audit logs are being exported.|
|recipientUserIds|[integer(int32)]|true|none|An array of integers specifying the IDs of users who should receive the exported file.|
|shouldMarkExportFileAsSensitive|boolean|true|none|A boolean indicating whether the export file should be marked as sensitive.|
|type|string|true|none|A string indicating the type of export being performed.|
|userId|integer(int32)|false|none|An integer representing the ID of the user initiating the export.|
|userTimeZone|string|false|none|A string representing the time zone of the user initiating the export.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|CSV|
|format|XLS|
|format|XLSX|

<h2 id="tocS_CollectionResponsePublicAuditLog">CollectionResponsePublicAuditLog</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublicauditlog"></a>
<a id="schema_CollectionResponsePublicAuditLog"></a>
<a id="tocScollectionresponsepublicauditlog"></a>
<a id="tocscollectionresponsepublicauditlog"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[PublicAuditLog](#schemapublicauditlog)]|true|none|An array of PublicAuditLog objects, each representing a single audit log entry.|

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
|after|string|true|none|Cursor token representing the boundary timestamp after which to fetch the next page of results. Pass this value as the after query parameter to retrieve later audit logs.|
|link|string|false|none|Pre-constructed URL that can be used to directly fetch the next page of results without manually building the query.|

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
|before|string|true|none|Pre-constructed URL that can be used to directly fetch the previous page of results without manually building the query.|
|link|string|false|none|Cursor token representing the boundary timestamp before which to fetch the previous page of results. Pass this value as the before query parameter to retrieve earlier audit logs.|

<h2 id="tocS_PublicAuditLog">PublicAuditLog</h2>
<!-- backwards compatibility -->
<a id="schemapublicauditlog"></a>
<a id="schema_PublicAuditLog"></a>
<a id="tocSpublicauditlog"></a>
<a id="tocspublicauditlog"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|string|true|none|The type of event that took place (CREATED, UPDATED, PUBLISHED, DELETED, UNPUBLISHED).|
|fullName|string|true|none|The name of the user who caused the event.|
|meta|object|true|none|Supplementary metadata associated with the audit log entry. It provides additional context about the audited event (ex: rows deleted/updated for a HubDB event, the specific fields that were changed for a Content Settings event).|
|objectId|string|true|none|The ID of the object.|
|objectName|string|true|none|The internal name of the object in HubSpot.|
|objectType|string|true|none|The type of the object (BLOG, LANDING_PAGE, DOMAIN, HUBDB_TABLE etc.)|
|timestamp|string(date-time)|true|none|The timestamp at which the event occurred.|
|userId|string|true|none|The ID of the user who caused the event.|

#### Enumerated Values

|Property|Value|
|---|---|
|event|CREATED|
|event|DELETED|
|event|PUBLISHED|
|event|RESTORE|
|event|UNPUBLISHED|
|event|UPDATED|
|objectType|BLOG|
|objectType|BLOG_POST|
|objectType|CASE_STUDY|
|objectType|CONTENT_SETTINGS|
|objectType|CSS|
|objectType|CTA|
|objectType|DOMAIN|
|objectType|EMAIL|
|objectType|FILE|
|objectType|GLOBAL_MODULE|
|objectType|HUBDB_TABLE|
|objectType|JS|
|objectType|KNOWLEDGE_BASE|
|objectType|KNOWLEDGE_BASE_ARTICLE|
|objectType|LANDING_PAGE|
|objectType|MODULE|
|objectType|PODCAST|
|objectType|QUOTE|
|objectType|SERVERLESS_FUNCTION|
|objectType|TEMPLATE|
|objectType|THEME|
|objectType|URL_MAPPING|
|objectType|WEB_INTERACTIVE|
|objectType|WEBSITE_PAGE|
