<h1 id="crm-exports">CRM Exports v2026-09</h1>

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
|crm.export||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="crm-exports-advanced">Advanced</h1>

## Start an export

<a id="opIdpost-/crm/exports/2026-09/export/async_start"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/exports/2026-09/export/async \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/exports/2026-09/export/async`

Begins exporting CRM data for the portal as specified in the request body

> Body parameter

```json
null
```

<h3 id="start-an-export-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PublicExportRequest](#schemapublicexportrequest)|true|none|
|» *oneOf*|body|[PublicExportViewRequest](#schemapublicexportviewrequest)|false|none|
|» *oneOf*|body|[PublicExportListRequest](#schemapublicexportlistrequest)|false|none|

> Example responses

> 202 Response

```json
null
```

> default Response

```json
null
```

<h3 id="start-an-export-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|accepted|[TaskLocator](#schematasklocator)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.export )
</aside>

## Get the status of the export including the URL to download the file

<a id="opIdget-/crm/exports/2026-09/export/async/tasks/{taskId}/status_getStatus"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/exports/2026-09/export/async/tasks/{taskId}/status' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/exports/2026-09/export/async/tasks/{taskId}/status`

Returns the status of the export with taskId, including the URL of the resulting file if the export status is COMPLETE

<h3 id="get-the-status-of-the-export-including-the-url-to-download-the-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|integer(int64)|true|The unique identifier of the export task whose status you want to retrieve. It is an integer value.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-the-status-of-the-export-including-the-url-to-download-the-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ActionResponseWithSingleResultURI](#schemaactionresponsewithsingleresulturi)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.export )
</aside>

<h1 id="crm-exports-basic">Basic</h1>

## Retrieve details of a specific export by its unique ID.

<a id="opIdget-/crm/exports/2026-09/export/{exportId}_getById"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/exports/2026-09/export/{exportId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/exports/2026-09/export/{exportId}`

Retrieve detailed information about a specific CRM export, including its current state and properties.

<h3 id="retrieve-details-of-a-specific-export-by-its-unique-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exportId|path|integer(int64)|true|The unique identifier of the export to retrieve. It is an integer value.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-details-of-a-specific-export-by-its-unique-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicExportResponse](#schemapublicexportresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.export )
</aside>

# Schemas

<h2 id="tocS_ActionResponseWithSingleResultURI">ActionResponseWithSingleResultURI</h2>
<!-- backwards compatibility -->
<a id="schemaactionresponsewithsingleresulturi"></a>
<a id="schema_ActionResponseWithSingleResultURI"></a>
<a id="tocSactionresponsewithsingleresulturi"></a>
<a id="tocsactionresponsewithsingleresulturi"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The timestamp when the export was completed, in ISO 8601 format.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of StandardError objects detailing any errors that occurred during the export task.|
|links|object|false|none|A collection of related links associated with the export.|
|numErrors|integer(int32)|false|none|The number of errors encountered during the export process.|
|requestedAt|string(date-time)|false|none|The timestamp when the export request was made, in ISO 8601 format.|
|result|string|false|none|The URL of the resulting file if the export status is COMPLETE.|
|startedAt|string(date-time)|true|none|The timestamp when the export process started, in ISO 8601 format.|
|status|string|true|none|The current status of the export, which can be PENDING, PROCESSING, COMPLETE or CANCELED.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

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

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
null
```

Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|highValue|string|false|none|A string representing the upper boundary value used with the 'BETWEEN' operator.|
|operator|string|true|none|The operator used to compare the property value against the specified value(s). Valid operators include 'EQ', 'NEQ', 'LT', 'LTE', 'GT', 'GTE', 'BETWEEN', 'IN', 'NOT_IN', 'HAS_PROPERTY', 'NOT_HAS_PROPERTY', 'CONTAINS_TOKEN', and 'NOT_CONTAINS_TOKEN'.|
|propertyName|string|true|none|The name of the property to filter by. This is a string value.|
|value|string|false|none|A string representing the value to compare the property against when using certain operators.|
|values|[string]|false|none|An array of string values used with operators like 'IN' and 'NOT_IN' to specify multiple comparison values.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|BETWEEN|
|operator|CONTAINS_TOKEN|
|operator|EQ|
|operator|GT|
|operator|GTE|
|operator|HAS_PROPERTY|
|operator|IN|
|operator|LT|
|operator|LTE|
|operator|NEQ|
|operator|NOT_CONTAINS_TOKEN|
|operator|NOT_HAS_PROPERTY|
|operator|NOT_IN|

<h2 id="tocS_FilterGroup">FilterGroup</h2>
<!-- backwards compatibility -->
<a id="schemafiltergroup"></a>
<a id="schema_FilterGroup"></a>
<a id="tocSfiltergroup"></a>
<a id="tocsfiltergroup"></a>

```json
null
```

Represents a group of filters used to query data within HubSpot. This component is used to define criteria for filtering records in various API endpoints.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|[[Filter](#schemafilter)]|true|none|An array of filter objects that define the criteria for the filter group. Each filter specifies a property, an operator, and a value to be used in the filtering process.|

<h2 id="tocS_PublicCrmSearchRequest">PublicCrmSearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemapubliccrmsearchrequest"></a>
<a id="schema_PublicCrmSearchRequest"></a>
<a id="tocSpubliccrmsearchrequest"></a>
<a id="tocspubliccrmsearchrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterGroups|[[FilterGroup](#schemafiltergroup)]|true|none|An array of filter groups, where each group contains multiple filters. This allows for complex filtering logic by combining multiple filters together.|
|filters|[[Filter](#schemafilter)]|true|none|An array of filter objects used to specify the criteria for the search. Each filter defines a property, an operator, and a value to filter by.|
|query|string|false|none|The search query string, to filter CRM records.|
|sorts|[string]|true|none|Defines the order in which the CRM records should be returned.|

<h2 id="tocS_PublicExportListRequest">PublicExportListRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicexportlistrequest"></a>
<a id="schema_PublicExportListRequest"></a>
<a id="tocSpublicexportlistrequest"></a>
<a id="tocspublicexportlistrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associatedObjectType|[string]|true|none|An array of strings specifying the types of associated objects to include in the export.|
|exportInternalValuesOptions|[string]|true|none|An array of strings indicating options for exporting internal values. Valid values are 'NAMES' and 'VALUES'.|
|exportName|string|true|none|A string representing the name of the export.|
|exportType|string|true|none|A string indicating the type of export, which is 'LIST' by default.|
|format|string|true|none|A string specifying the format of the export file. Valid values are 'XLS', 'XLSX', and 'CSV'.|
|includeLabeledAssociations|boolean|true|none|A boolean indicating whether to include labeled associations in the export.|
|includePrimaryDisplayPropertyForAssociatedObjects|boolean|true|none|A boolean indicating whether to include the primary display property for associated objects.|
|language|string|true|none|A string specifying the language for the export. Valid values include language codes such as 'EN', 'FR', 'DE', etc.|
|listId|string|true|none|A string representing the ID of the list to be exported.|
|objectProperties|[string]|true|none|An array of strings listing the properties of the objects to be included in the export.|
|objectType|string|true|none|A string representing the type of objects being exported.|
|overrideAssociatedObjectsPerDefinitionPerRowLimit|boolean|true|none|A boolean indicating whether to override the limit on associated objects per definition per row.|

#### Enumerated Values

|Property|Value|
|---|---|
|exportInternalValuesOptions|NAMES|
|exportInternalValuesOptions|VALUES|
|exportType|LIST|
|format|CSV|
|format|XLS|
|format|XLSX|
|language|AF_ZA|
|language|AR_EG|
|language|BG|
|language|BN|
|language|CA_ES|
|language|CS|
|language|DA_DK|
|language|DE|
|language|EL_GR|
|language|EN|
|language|EN_GB|
|language|ES|
|language|ES_MX|
|language|ET_EE|
|language|FI|
|language|FR|
|language|FR_CA|
|language|HE_IL|
|language|HI_IN|
|language|HR|
|language|HU|
|language|ID|
|language|IT|
|language|JA|
|language|KO_KR|
|language|LT_LT|
|language|MS|
|language|NL|
|language|NO|
|language|PL|
|language|PT_BR|
|language|PT_PT|
|language|RO|
|language|RU|
|language|SK_SK|
|language|SL|
|language|SV|
|language|TH|
|language|TL|
|language|TR|
|language|UK|
|language|VI_VN|
|language|ZH_CN|
|language|ZH_HK|
|language|ZH_TW|

<h2 id="tocS_PublicExportRequest">PublicExportRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicexportrequest"></a>
<a id="schema_PublicExportRequest"></a>
<a id="tocSpublicexportrequest"></a>
<a id="tocspublicexportrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PublicExportViewRequest](#schemapublicexportviewrequest)|false|none|none|
|*oneOf*|[PublicExportListRequest](#schemapublicexportlistrequest)|false|none|none|

<h2 id="tocS_PublicExportResponse">PublicExportResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicexportresponse"></a>
<a id="schema_PublicExportResponse"></a>
<a id="tocSpublicexportresponse"></a>
<a id="tocspublicexportresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The timestamp when the export was created, in ISO 8601 format.|
|exportName|string|false|none|The name assigned to the export.|
|exportState|string|true|none|The current state of the export process.|
|exportType|string|true|none|The type of export, which can be either VIEW or LIST.|
|id|string|true|none|The unique ID of the export.|
|objectProperties|[string]|true|none|The list of properties exported for the associated object.|
|objectType|string|true|none|The associated CRM object being exported.|
|recordCount|integer(int32)|false|none|The total number of records included in the export.|
|updatedAt|string(date-time)|true|none|The timestamp when the export was last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|exportState|CANCELED|
|exportState|CONFLICT|
|exportState|DEFERRED|
|exportState|DELETED|
|exportState|DONE|
|exportState|ENQUEUED|
|exportState|FAILED|
|exportState|PENDING_APPROVAL|
|exportState|PROCESSING|
|exportType|LIST|
|exportType|VIEW|

<h2 id="tocS_PublicExportViewRequest">PublicExportViewRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicexportviewrequest"></a>
<a id="schema_PublicExportViewRequest"></a>
<a id="tocSpublicexportviewrequest"></a>
<a id="tocspublicexportviewrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associatedObjectType|[string]|true|none|An array of strings indicating the types of associated objects to include in the export.|
|exportInternalValuesOptions|[string]|true|none|An array of strings specifying options for internal values in the export. Valid values are 'NAMES' and 'VALUES'.|
|exportName|string|true|none|The name assigned to the export, represented as a string.|
|exportType|string|true|none|The type of export being requested. The only valid value is 'VIEW'.|
|format|string|true|none|The file format for the export. Valid options are 'XLS', 'XLSX', and 'CSV'.|
|includeLabeledAssociations|boolean|true|none|A boolean indicating whether labeled associations should be included in the export.|
|includePrimaryDisplayPropertyForAssociatedObjects|boolean|true|none|A boolean indicating whether the primary display property for associated objects should be included.|
|language|string|true|none|The language code for the export. Valid values include 'EN', 'FR', 'DE', 'JA', 'ES', 'PT_BR', 'NL', 'BN', 'CS', 'DA_DK', 'EL_GR', 'ES_MX', 'FI', 'HR', 'HU', 'ID', 'IT', 'KO_KR', 'NO', 'PL', 'RO', 'RU', 'SV', 'TH', 'VI_VN', 'ZH_CN', 'ZH_HK', 'AF_ZA', 'AR_EG', 'BG', 'CA_ES', 'SL', 'TR', 'UK', 'EN_GB', 'FR_CA', 'HE_IL', 'LT_LT', 'PT_PT', 'SK_SK', 'MS', 'TL', 'ZH_TW', 'HI_IN', 'ET_EE'.|
|objectProperties|[string]|true|none|An array of strings specifying the properties of the object to be included in the export.|
|objectType|string|true|none|A string representing the type of object being exported.|
|overrideAssociatedObjectsPerDefinitionPerRowLimit|boolean|true|none|A boolean indicating whether to override the limit of associated objects per definition per row.|
|publicCrmSearchRequest|[PublicCrmSearchRequest](#schemapubliccrmsearchrequest)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|exportInternalValuesOptions|NAMES|
|exportInternalValuesOptions|VALUES|
|exportType|VIEW|
|format|CSV|
|format|XLS|
|format|XLSX|
|language|AF_ZA|
|language|AR_EG|
|language|BG|
|language|BN|
|language|CA_ES|
|language|CS|
|language|DA_DK|
|language|DE|
|language|EL_GR|
|language|EN|
|language|EN_GB|
|language|ES|
|language|ES_MX|
|language|ET_EE|
|language|FI|
|language|FR|
|language|FR_CA|
|language|HE_IL|
|language|HI_IN|
|language|HR|
|language|HU|
|language|ID|
|language|IT|
|language|JA|
|language|KO_KR|
|language|LT_LT|
|language|MS|
|language|NL|
|language|NO|
|language|PL|
|language|PT_BR|
|language|PT_PT|
|language|RO|
|language|RU|
|language|SK_SK|
|language|SL|
|language|SV|
|language|TH|
|language|TL|
|language|TR|
|language|UK|
|language|VI_VN|
|language|ZH_CN|
|language|ZH_HK|
|language|ZH_TW|

<h2 id="tocS_StandardError">StandardError</h2>
<!-- backwards compatibility -->
<a id="schemastandarderror"></a>
<a id="schema_StandardError"></a>
<a id="tocSstandarderror"></a>
<a id="tocsstandarderror"></a>

```json
null
```

Ye olde error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|A string indicating the general category of the error.|
|context|object|true|none|Context about the error condition|
|errors|[[ErrorDetail](#schemaerrordetail)]|true|none|An array of ErrorDetail objects providing further information about the error.|
|id|string|false|none|A string that uniquely identifies this error instance.|
|links|object|true|none|An object mapping link names to associated URIs that contain documentation about the error or recommended remediation steps.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|status|string|true|none|A string representing the status of the error.|
|subCategory|object|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_TaskLocator">TaskLocator</h2>
<!-- backwards compatibility -->
<a id="schematasklocator"></a>
<a id="schema_TaskLocator"></a>
<a id="tocStasklocator"></a>
<a id="tocstasklocator"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique ID of the export.|
|links|object|false|none|An object containing relevant links related to the export process.|
