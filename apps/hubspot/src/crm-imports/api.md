<h1 id="crm-imports">CRM Imports v2026-09</h1>

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
|crm.import||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="crm-imports-advanced">Advanced</h1>

## Create Import

<a id="opIdpost-/crm/imports/2026-09_/crm/imports/v3"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/imports/2026-09 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /crm/imports/2026-09`

Create a new import in your HubSpot account by uploading files and specifying import settings. This endpoint allows you to initiate the import process by providing the necessary files and configuration details.

> Body parameter

```yaml
null
```

<h3 id="create-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» files|body|string(binary)|false|none|
|» importRequest|body|string|false|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicImportResponse](#schemapublicimportresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.import )
</aside>

## Cancel an active import

<a id="opIdpost-/crm/imports/2026-09/{importId}/cancel_/crm/imports/v3/{importId}/cancel"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/imports/2026-09/{importId}/cancel' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /crm/imports/2026-09/{importId}/cancel`

This allows a developer to cancel an active import.

<h3 id="cancel-an-active-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|importId|path|integer(int64)|true|The unique identifier of the import process to cancel. It must be an integer.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="cancel-an-active-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ActionResponse](#schemaactionresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.import )
</aside>

<h1 id="crm-imports-basic">Basic</h1>

## List Imports

<a id="opIdget-/crm/imports/2026-09_/crm/imports/v3"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/imports/2026-09 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/imports/2026-09`

Retrieve a list of imports in your HubSpot account. This endpoint allows you to view the imports that have been processed, providing details about each import. It supports pagination to navigate through large sets of import data.

<h3 id="list-imports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
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

<h3 id="list-imports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicImportResponseForwardPaging](#schemacollectionresponsepublicimportresponseforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.import )
</aside>

## Get the information on any import

<a id="opIdget-/crm/imports/2026-09/{importId}_/crm/imports/v3/{importId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/imports/2026-09/{importId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/imports/2026-09/{importId}`

A complete summary of an import record, including any updates.

<h3 id="get-the-information-on-any-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|importId|path|integer(int64)|true|The unique identifier of the import to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-the-information-on-any-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicImportResponse](#schemapublicimportresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.import )
</aside>

## Retrieve errors for a specific import

<a id="opIdget-/crm/imports/2026-09/{importId}/errors_/crm/imports/v3/{importId}/errors"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/imports/2026-09/{importId}/errors' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/imports/2026-09/{importId}/errors`

Retrieves detailed error records for a specific import operation, enabling you to identify and troubleshoot records that failed during processing.

<h3 id="retrieve-errors-for-a-specific-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|importId|path|integer(int64)|true|The unique identifier of the import for which to retrieve errors.|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|includeErrorMessage|query|boolean|false|A boolean indicating whether to include detailed error messages in the response.|
|includeRowData|query|boolean|false|A boolean indicating whether to include the row data associated with each error in the response.|
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

<h3 id="retrieve-errors-for-a-specific-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicImportErrorForwardPaging](#schemacollectionresponsepublicimporterrorforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.import )
</aside>

# Schemas

<h2 id="tocS_ActionResponse">ActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaactionresponse"></a>
<a id="schema_ActionResponse"></a>
<a id="tocSactionresponse"></a>
<a id="tocsactionresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The timestamp when the action was completed, in ISO 8601 format.|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps|
|requestedAt|string(date-time)|false|none|The timestamp when the export request was made, in ISO 8601 format.|
|startedAt|string(date-time)|true|none|The timestamp when the action was started, in ISO 8601 format.|
|status|string|true|none|An enum representing the lifecycle state of the action.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_CollectionResponsePublicImportErrorForwardPaging">CollectionResponsePublicImportErrorForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublicimporterrorforwardpaging"></a>
<a id="schema_CollectionResponsePublicImportErrorForwardPaging"></a>
<a id="tocScollectionresponsepublicimporterrorforwardpaging"></a>
<a id="tocscollectionresponsepublicimporterrorforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[PublicImportError](#schemapublicimporterror)]|true|none|An array of public import errors, each represented by a PublicImportError object.|

<h2 id="tocS_CollectionResponsePublicImportResponseForwardPaging">CollectionResponsePublicImportResponseForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublicimportresponseforwardpaging"></a>
<a id="schema_CollectionResponsePublicImportResponseForwardPaging"></a>
<a id="tocScollectionresponsepublicimportresponseforwardpaging"></a>
<a id="tocscollectionresponsepublicimportresponseforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[PublicImportResponse](#schemapublicimportresponse)]|true|none|An array of PublicImportResponse objects, each representing an individual import response.|

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

<h2 id="tocS_ImportRowCore">ImportRowCore</h2>
<!-- backwards compatibility -->
<a id="schemaimportrowcore"></a>
<a id="schema_ImportRowCore"></a>
<a id="tocSimportrowcore"></a>
<a id="tocsimportrowcore"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalRowData|[string]|true|none|An array of strings containing any additional data associated with this row.|
|containsEncryptedProperties|boolean|true|none|Indicates whether this row contains values that were encrypted.|
|fileId|integer(int64)|true|none|The unique identifier of the uploaded file containing this row.|
|lineNumber|integer(int32)|true|none|The 1-indexed line number of this row in the source file. Line number 0 is reserved for file-wide errors that don't correspond to a specific row.|
|pageName|string|false|none|The name of the spreadsheet sheet/page containing this row.|
|rowData|[string]|true|none|An array of strings representing the core data of the row.|

<h2 id="tocS_ImportTemplate">ImportTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaimporttemplate"></a>
<a id="schema_ImportTemplate"></a>
<a id="tocSimporttemplate"></a>
<a id="tocsimporttemplate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateId|integer(int64)|true|none|The unique identifier for the specific saved template or previous import being referenced.|
|templateType|string|true|none|The classification of what type of template this represents, and what is its origin or purpose.|

#### Enumerated Values

|Property|Value|
|---|---|
|templateType|admin_defined|
|templateType|previous_import|
|templateType|user_file|

<h2 id="tocS_MaskedSubstring">MaskedSubstring</h2>
<!-- backwards compatibility -->
<a id="schemamaskedsubstring"></a>
<a id="schema_MaskedSubstring"></a>
<a id="tocSmaskedsubstring"></a>
<a id="tocsmaskedsubstring"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|integer(int32)|true|none|An integer indicating the ending position of the substring.|
|label|string|true|none|none|
|start|integer(int32)|true|none|An integer indicating the starting position of the substring.|

<h2 id="tocS_MaskedSubstrings">MaskedSubstrings</h2>
<!-- backwards compatibility -->
<a id="schemamaskedsubstrings"></a>
<a id="schema_MaskedSubstrings"></a>
<a id="tocSmaskedsubstrings"></a>
<a id="tocsmaskedsubstrings"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|substrings|[[MaskedSubstring](#schemamaskedsubstring)]|true|none|An array of MaskedSubstring objects, each defining a specific portion of a string to be masked. This property is required and ensures that sensitive data is appropriately obscured.|

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
|after|string|true|none|A string token used as a cursor to fetch the next set of results in a paginated response.|
|link|string|false|none|A URL string that provides the link to the next page of results.|

<h2 id="tocS_PropertyValue">PropertyValue</h2>
<!-- backwards compatibility -->
<a id="schemapropertyvalue"></a>
<a id="schema_PropertyValue"></a>
<a id="tocSpropertyvalue"></a>
<a id="tocspropertyvalue"></a>

```json
null
```

Represents a single custom property of a marketing event, storing its name, value, metadata (like source, timestamp, and sensitivity), and related audit information for tracking changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSensitivity|string|true|none|A string indicating the sensitivity level of the data. Valid values are 'none', 'standard', and 'high'.|
|isEncrypted|boolean|true|none|A boolean indicating whether the property value is encrypted.|
|isLargeValue|boolean|true|none|Indicates if the value exceeds normal size limits.|
|maskedSubstrings|[MaskedSubstrings](#schemamaskedsubstrings)|true|none|none|
|name|string|true|none|The name of the property, represented as a string.|
|persistenceTimestamp|integer(int64)|true|none|When the value was persisted to database, in epoch milliseconds.|
|requestId|string|true|none|A string identifier for the request associated with the property value.|
|selectedByUser|boolean|true|none|A boolean indicating whether the property value was selected by a user.|
|selectedByUserTimestamp|integer(int64)|true|none|A Unix timestamp in milliseconds indicating when the user selected the property value.|
|source|string|true|none|A string indicating the origin of the property value. Valid values include various sources such as 'API', 'FORM', 'SALESFORCE', and others.|
|sourceId|string|true|none|A string identifier for the source of the property value.|
|sourceLabel|string|true|none|A string label describing the source of the property value.|
|sourceMetadata|string|true|none|A string containing metadata about the source of the property value.|
|sourceUpstreamDeployable|string|true|none|A string indicating the upstream deployable source of the property value.|
|sourceVid|[integer(int64)]|true|none|An array of integers representing the source video IDs associated with the property value.|
|timestamp|integer(int64)|true|none|A Unix timestamp in milliseconds indicating when the property value was recorded.|
|unit|string|true|none|A string representing the unit of the property value, if applicable.|
|updatedByUserId|integer(int32)|true|none|An integer representing the ID of the user who last updated the property value.|
|useTimestampAsPersistenceTimestamp|boolean|true|none|Flag indicating whether to use the timestamp field as the persistence timestamp.|
|value|string|true|none|The actual value of the property, represented as a string.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataSensitivity|high|
|dataSensitivity|none|
|dataSensitivity|standard|
|source|ACADEMY|
|source|ACCEPTANCE_TEST|
|source|ACTIVITY_AUTO_ASSOCIATE|
|source|ACTIVITY_LOG_REVERT|
|source|ADS|
|source|AI_GROUP|
|source|ANALYTICS|
|source|API|
|source|APPROVALS|
|source|ASSISTS|
|source|ASSOCIATIONS|
|source|AUTO_ASSOCIATE_BY_DOMAIN|
|source|AUTOMATION_JOURNEY|
|source|AUTOMATION_PLATFORM|
|source|AVATARS_SERVICE|
|source|BATCH_UPDATE|
|source|BCC_TO_CRM|
|source|BEHAVIORAL_EVENTS|
|source|BET_ASSIGNMENT|
|source|BET_CRM_CONNECTOR|
|source|BIDEN|
|source|BILLING|
|source|BOT|
|source|BREEZE_AGENT|
|source|CALCULATED|
|source|CENTRAL_EXCHANGE_RATES|
|source|CHATSPOT|
|source|CLONE_OBJECTS|
|source|COMMUNICATOR|
|source|COMPANIES|
|source|COMPANY_FAMILIES|
|source|COMPANY_INSIGHTS|
|source|CONNECTED_ACCOUNT|
|source|CONTACTS|
|source|CONTACTS_WEB|
|source|CONTENT_MEMBERSHIP|
|source|CONVERSATIONAL_ENRICHMENT|
|source|CONVERSATIONS|
|source|CRM_PROCESSES_PLATFORM|
|source|CRM_UI|
|source|CRM_UI_BULK_ACTION|
|source|CUSTOMER_AGENT|
|source|CUSTOMER_PORTAL|
|source|DATA_ENRICHMENT|
|source|DATA_QUALITY|
|source|DATASET|
|source|DEALS|
|source|DEFAULT|
|source|DELETE_OBJECTS|
|source|DI_WRITE_TO_CRM|
|source|EMAIL|
|source|EMAIL_INBOX_IMPORT|
|source|EMAIL_INTEGRATION|
|source|ENGAGEMENTS|
|source|EXTENSION|
|source|FILE_MANAGER|
|source|FLYWHEEL_PRODUCT_DATA_SYNC|
|source|FORECASTING|
|source|FORM|
|source|FORWARD_TO_CRM|
|source|GMAIL_INTEGRATION|
|source|GOALS|
|source|HEISENBERG|
|source|HELP_DESK|
|source|HELP_DESK_AI|
|source|IMPORT|
|source|INTEGRATION|
|source|INTEGRATIONS_PLATFORM|
|source|INTEGRATIONS_SYNC|
|source|INTENT|
|source|INTERNAL_PROCESSING|
|source|LEADIN|
|source|LEGAL_BASIS_REMEDIATION|
|source|MARKET_SOURCING|
|source|MARKETPLACE|
|source|MARKETS|
|source|MEETINGS|
|source|MERGE_COMPANIES|
|source|MERGE_CONTACTS|
|source|MERGE_OBJECTS|
|source|MERGE_REVERT_OBJECTS|
|source|MICROAPPS|
|source|MIGRATION|
|source|MOBILE_ANDROID|
|source|MOBILE_IOS|
|source|PAYMENTS|
|source|PIPELINE_SETTINGS|
|source|PLAYBOOKS|
|source|PORTAL_OBJECT_SYNC|
|source|PORTAL_USER_ASSOCIATOR|
|source|PRESENTATIONS|
|source|PRIMARY_AUTOMATION|
|source|PROPERTY_DEFAULT_VALUE|
|source|PROPERTY_RESTORE|
|source|PROPERTY_SETTINGS|
|source|PROSPECTING_AGENT|
|source|QUOTAS|
|source|QUOTES|
|source|RECYCLING_BIN|
|source|RESTORE_OBJECTS|
|source|REVENUE_PLATFORM|
|source|SALES|
|source|SALES_MESSAGES|
|source|SALESFORCE|
|source|SEQUENCES|
|source|SETTINGS|
|source|SIDEKICK|
|source|SIGNALS|
|source|SLACK_INTEGRATION|
|source|SMART_DATA_CAPTURE|
|source|SOCIAL|
|source|SUCCESS|
|source|TALLY|
|source|TASK|
|source|UNKNOWN|
|source|WAL_INCREMENTAL|
|source|WORK_UI|
|source|WORKFLOW_CONTACT_DELETE_ACTION|
|source|WORKFLOWS|

<h2 id="tocS_PublicImportError">PublicImportError</h2>
<!-- backwards compatibility -->
<a id="schemapublicimporterror"></a>
<a id="schema_PublicImportError"></a>
<a id="tocSpublicimporterror"></a>
<a id="tocspublicimporterror"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|integer(int64)|true|none|The epoch millisecond timestamp when this error was recorded.|
|errorMessage|string|false|none|A human-readable error message.|
|errorType|string|true|none|The classification of what went wrong during import processing.|
|extraContext|string|false|none|Additional human-readable context about the error.|
|id|string|true|none|A unique, stable identifier for this specific error.|
|invalidPropertyValue|[PropertyValue](#schemapropertyvalue)|false|none|Represents a single custom property of a marketing event, storing its name, value, metadata (like source, timestamp, and sensitivity), and related audit information for tracking changes.|
|invalidValue|string|false|none|The raw string value from the import file that caused the validation failure.|
|invalidValueToDisplay|string|false|none|A convenience accessor that returns either the value from `invalidPropertyValue` or `invalidValue`, whichever is present (preferring the property value).|
|knownColumnNumber|integer(int32)|false|none|The zero-based column index in the import file where the error occurred|
|objectType|string|false|none|The CRM object type affected by this error.|
|objectTypeId|string|false|none|The modern object type identifier for the CRM object affected by this error.|
|sourceData|[ImportRowCore](#schemaimportrowcore)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|errorType|AMBIGUOUS_ENUMERATION_OPTION|
|errorType|ASSOCIATION_LABEL_NOT_FOUND|
|errorType|ASSOCIATION_LIMIT_EXCEEDED|
|errorType|ASSOCIATION_RECORD_NOT_FOUND|
|errorType|COLUMN_TOO_LARGE|
|errorType|COULD_NOT_FIND_BUSINESS_UNIT|
|errorType|COULD_NOT_FIND_OWNER|
|errorType|COULD_NOT_PARSE_DATE|
|errorType|COULD_NOT_PARSE_NUMBER|
|errorType|COULD_NOT_PARSE_ROW|
|errorType|COULD_NOT_PARSE_TERM|
|errorType|CREATE_ONLY_IMPORT|
|errorType|DUPLICATE_ALTERNATE_ID|
|errorType|DUPLICATE_ASSOCIATION_ID|
|errorType|DUPLICATE_EVENT|
|errorType|DUPLICATE_OBJECT_ID|
|errorType|DUPLICATE_RECORD_ID|
|errorType|DUPLICATE_ROW_CONTENT|
|errorType|DUPLICATE_UNIQUE_CREATION_KEY|
|errorType|DUPLICATE_UNIQUE_PROPERTY_VALUE|
|errorType|FAILED_TO_CREATE_ASSOCIATION|
|errorType|FAILED_TO_FIND_RECORD_FOR_ASSOCIATIONS|
|errorType|FAILED_TO_OPT_OUT_CONTACT|
|errorType|FAILED_TO_PROCESS_OBJECT_WITH_EMPTY_PROPERTY_VALUES|
|errorType|FAILED_VALIDATION|
|errorType|FILE_NOT_FOUND|
|errorType|GDPR_BLACKLISTED_EMAIL|
|errorType|INCORRECT_NUMBER_OF_COLUMNS|
|errorType|INVALID_ALTERNATE_ID|
|errorType|INVALID_ASSOCIATION_IDENTIFIER|
|errorType|INVALID_ASSOCIATION_KEY|
|errorType|INVALID_COLUMN_CONFIGURATION|
|errorType|INVALID_CUSTOM_PROPERTY_VALIDATION|
|errorType|INVALID_DOMAIN|
|errorType|INVALID_EMAIL|
|errorType|INVALID_ENUM_FILE_ID_OR_URL|
|errorType|INVALID_ENUMERATION_OPTION|
|errorType|INVALID_EVENT|
|errorType|INVALID_EVENT_TIMESTAMP|
|errorType|INVALID_FILE_TYPE|
|errorType|INVALID_NUMBER_SIZE|
|errorType|INVALID_OBJECT_ID|
|errorType|INVALID_PROPERTY_VALUE_FORMAT|
|errorType|INVALID_RECORD_ID|
|errorType|INVALID_REQUIRED_PROPERTY|
|errorType|INVALID_SHEET_COUNT|
|errorType|INVALID_SPREADSHEET|
|errorType|LIMIT_EXCEEDED|
|errorType|LINE_ITEM_MULTIPLE_PARENTS_IN_ROW|
|errorType|MANY_ERRORS_IN_ROW|
|errorType|MISSING_EVENT_DEFINITION|
|errorType|MISSING_EVENT_TIMESTAMP|
|errorType|MISSING_OBJECT_DEFINITION|
|errorType|MISSING_REQUIRED_PROPERTY|
|errorType|MULTIPLE_COMPANIES_WITH_THIS_DOMAIN|
|errorType|MULTIPLE_OWNERS_FOUND|
|errorType|NO_OBJECT_ID_FROM_ASSOCIATION_IDENTIFIER|
|errorType|OUTSIDE_VALID_TERM_RANGE|
|errorType|OUTSIDE_VALID_TIME_RANGE|
|errorType|PORTAL_WIDE_CUSTOM_OBJECT_LIMIT_EXCEEDED|
|errorType|PROPERTY_DEFINITION_NOT_FOUND|
|errorType|PROPERTY_VALUE_NOT_FOUND|
|errorType|ROW_DATA_TOO_LARGE|
|errorType|SECONDARY_EMAIL_WRITE_FAILURE|
|errorType|UNKNOWN_ASSOCIATION_RECORD_ID|
|errorType|UNKNOWN_BAD_REQUEST|
|errorType|UNKNOWN_ERROR|
|errorType|UPDATE_ONLY_IMPORT|
|objectType|ABANDONED_CART|
|objectType|ACCEPTANCE_TEST|
|objectType|AD|
|objectType|AD_ACCOUNT|
|objectType|AD_CAMPAIGN|
|objectType|AD_GROUP|
|objectType|AI_FORECAST|
|objectType|ALL_PAGES|
|objectType|APPROVAL|
|objectType|APPROVAL_STEP|
|objectType|ATTRIBUTION|
|objectType|AUDIENCE|
|objectType|AUTOMATION_JOURNEY|
|objectType|AUTOMATION_PLATFORM_FLOW|
|objectType|AUTOMATION_PLATFORM_FLOW_ACTION|
|objectType|BET_ALERT|
|objectType|BET_DELIVERABLE_SERVICE|
|objectType|BLOG_LISTING_PAGE|
|objectType|BLOG_POST|
|objectType|CALL|
|objectType|CAMPAIGN|
|objectType|CAMPAIGN_BUDGET_ITEM|
|objectType|CAMPAIGN_SPEND_ITEM|
|objectType|CAMPAIGN_STEP|
|objectType|CAMPAIGN_TEMPLATE|
|objectType|CAMPAIGN_TEMPLATE_STEP|
|objectType|CART|
|objectType|CASE_STUDY|
|objectType|CHATFLOW|
|objectType|CLIP|
|objectType|CMS_URL|
|objectType|COMBO_EVENT_CONFIGURATION|
|objectType|COMMERCE_PAYMENT|
|objectType|COMMUNICATION|
|objectType|COMPANY|
|objectType|CONTACT|
|objectType|CONTACT_CREATE_ATTRIBUTION|
|objectType|CONTENT|
|objectType|CONTENT_AUDIT|
|objectType|CONTENT_AUDIT_PAGE|
|objectType|CONVERSATION|
|objectType|CONVERSATION_INBOX|
|objectType|CONVERSATION_SESSION|
|objectType|CRM_OBJECTS_DUMMY_TYPE|
|objectType|CRM_PIPELINES_DUMMY_TYPE|
|objectType|CTA|
|objectType|CTA_VARIANT|
|objectType|DATA_PRIVACY_CONSENT|
|objectType|DATA_SYNC_STATE|
|objectType|DEAL|
|objectType|DEAL_CREATE_ATTRIBUTION|
|objectType|DEAL_REGISTRATION|
|objectType|DEAL_SPLIT|
|objectType|DISCOUNT|
|objectType|DISCOUNT_CODE|
|objectType|DISCOUNT_TEMPLATE|
|objectType|EMAIL|
|objectType|ENGAGEMENT|
|objectType|EXPORT|
|objectType|EXTERNAL_WEB_URL|
|objectType|FEE|
|objectType|FEEDBACK_SUBMISSION|
|objectType|FEEDBACK_SURVEY|
|objectType|FILE_MANAGER_FILE|
|objectType|FILE_MANAGER_FOLDER|
|objectType|FOLDER|
|objectType|FORECAST|
|objectType|FORM|
|objectType|FORM_SUBMISSION_INBOUNDDB|
|objectType|GOAL_TARGET|
|objectType|GOAL_TARGET_GROUP|
|objectType|GOAL_TEMPLATE|
|objectType|GSC_PROPERTY|
|objectType|HUB|
|objectType|IMPORT|
|objectType|INVOICE|
|objectType|KEYWORD|
|objectType|KNOWLEDGE_ARTICLE|
|objectType|LANDING_PAGE|
|objectType|LEAD|
|objectType|LINE_ITEM|
|objectType|MARKETING_CALENDAR|
|objectType|MARKETING_CAMPAIGN_UTM|
|objectType|MARKETING_EMAIL|
|objectType|MARKETING_EVENT|
|objectType|MARKETING_EVENT_ATTENDANCE|
|objectType|MARKETING_SMS|
|objectType|MEDIA_BRIDGE|
|objectType|MEETING_EVENT|
|objectType|MIC|
|objectType|NOTE|
|objectType|OBJECT_LIST|
|objectType|ORDER|
|objectType|OWNER|
|objectType|PARTNER_ACCOUNT|
|objectType|PARTNER_CLIENT|
|objectType|PARTNER_CLIENT_REVENUE|
|objectType|PARTNER_SERVICE|
|objectType|PAYMENT_LINK|
|objectType|PAYMENT_SCHEDULE|
|objectType|PAYMENT_SCHEDULE_INSTALLMENT|
|objectType|PERMISSIONS_TESTING|
|objectType|PLAYBOOK|
|objectType|PLAYBOOK_QUESTION|
|objectType|PLAYBOOK_SUBMISSION|
|objectType|PLAYBOOK_SUBMISSION_ANSWER|
|objectType|PLAYLIST|
|objectType|PLAYLIST_FOLDER|
|objectType|PODCAST_EPISODE|
|objectType|PORTAL|
|objectType|PORTAL_OBJECT_SYNC_MESSAGE|
|objectType|POSTAL_MAIL|
|objectType|PRIVACY_SCANNER_COOKIE|
|objectType|PRODUCT|
|objectType|PRODUCT_OR_FOLDER|
|objectType|PROPERTY_INFO|
|objectType|PROSPECTING_AGENT_CONTACT_ASSIGNMENT|
|objectType|PUBLISHING_TASK|
|objectType|QUARANTINED_SUBMISSION|
|objectType|QUOTA|
|objectType|QUOTE|
|objectType|QUOTE_FIELD|
|objectType|QUOTE_MODULE|
|objectType|QUOTE_MODULE_FIELD|
|objectType|QUOTE_TEMPLATE|
|objectType|RESTORABLE_CRM_OBJECT|
|objectType|ROSTER|
|objectType|ROSTER_MEMBER|
|objectType|SALES_DOCUMENT|
|objectType|SALES_TASK|
|objectType|SALES_WORKLOAD|
|objectType|SALESFORCE_SYNC_ERROR|
|objectType|SCHEDULING_PAGE|
|objectType|SCHEMAS_BACKEND_TEST|
|objectType|SCORE_CONFIGURATION|
|objectType|SEQUENCE|
|objectType|SEQUENCE_ENROLLMENT|
|objectType|SEQUENCE_STEP|
|objectType|SEQUENCE_STEP_ENROLLMENT|
|objectType|SERVICE|
|objectType|SITE_PAGE|
|objectType|SNIPPET|
|objectType|SOCIAL_BROADCAST|
|objectType|SOCIAL_CHANNEL|
|objectType|SOCIAL_POST|
|objectType|SOCIAL_PROFILE|
|objectType|SOX_PROTECTED_DUMMY_TYPE|
|objectType|SOX_PROTECTED_TEST_TYPE|
|objectType|SUBMISSION_TAG|
|objectType|SUBSCRIPTION|
|objectType|TASK|
|objectType|TASK_TEMPLATE|
|objectType|TAX|
|objectType|TEMPLATE|
|objectType|TICKET|
|objectType|UNKNOWN|
|objectType|UNSUBSCRIBE|
|objectType|USER|
|objectType|VIEW|
|objectType|VIEW_BLOCK|
|objectType|WEB_INTERACTIVE|

<h2 id="tocS_PublicImportMetadata">PublicImportMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapublicimportmetadata"></a>
<a id="schema_PublicImportMetadata"></a>
<a id="tocSpublicimportmetadata"></a>
<a id="tocspublicimportmetadata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counters|object|true|none|Summarized outcomes of each row a developer attempted to import into HubSpot.|
|fileIds|[string]|true|none|The IDs of files uploaded in the File Manager API.|
|objectLists|[[PublicObjectListRecord](#schemapublicobjectlistrecord)]|true|none|The lists containing the imported objects.|

<h2 id="tocS_PublicImportResponse">PublicImportResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicimportresponse"></a>
<a id="schema_PublicImportResponse"></a>
<a id="tocSpublicimportresponse"></a>
<a id="tocspublicimportresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The timestamp when the object was created, in ISO 8601 format.|
|id|string|true|none|The unique identifier for this import.|
|importName|string|false|none|The user-provided name for this import.|
|importRequestJson|object|false|none|The complete import request configuration as a JSON object.|
|importSource|string|false|none|Indicates where/how the import was initiated.|
|importTemplate|[ImportTemplate](#schemaimporttemplate)|false|none|none|
|mappedObjectTypeIds|[string]|true|none|An array of object type IDs that are mapped during the import.|
|metadata|[PublicImportMetadata](#schemapublicimportmetadata)|true|none|none|
|optOutImport|boolean|true|none|Whether or not the import is a list of people disqualified from receiving emails.|
|state|string|true|none|The status of the import.|
|updatedAt|string(date-time)|true|none|The timestamp when the import record was last updated, formatted as an ISO 8601 instant.|

#### Enumerated Values

|Property|Value|
|---|---|
|importSource|API|
|importSource|CRM_UI|
|importSource|IMPORT|
|importSource|MOBILE_ANDROID|
|importSource|MOBILE_IOS|
|importSource|SALESFORCE|
|state|CANCELED|
|state|DEFERRED|
|state|DONE|
|state|FAILED|
|state|PROCESSING|
|state|REVERTED|
|state|STARTED|

<h2 id="tocS_PublicObjectListRecord">PublicObjectListRecord</h2>
<!-- backwards compatibility -->
<a id="schemapublicobjectlistrecord"></a>
<a id="schema_PublicObjectListRecord"></a>
<a id="tocSpublicobjectlistrecord"></a>
<a id="tocspublicobjectlistrecord"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listId|string|true|none|The ID of the list containing the imported objects.|
|objectType|string|true|none|The type of object contained in the list.|
