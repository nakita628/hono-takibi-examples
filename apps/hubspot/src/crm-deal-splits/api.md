<h1 id="crm-deal-splits">CRM Deal Splits v2026-09</h1>

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
|crm.dealsplits.read_write||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="crm-deal-splits-batch">Batch</h1>

## Read a batch of deal split objects by their associated deal object internal ID

<a id="opIdpost-/deal-splits/2026-09/batch/read_/crm/objects/v3/deals/splits/batch/read"></a>

> Code samples

```bash
curl https://api.hubapi.com/deal-splits/2026-09/batch/read \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /deal-splits/2026-09/batch/read`

Read a batch of deal split objects by their associated deal object internal ID

> Body parameter

```json
null
```

<h3 id="read-a-batch-of-deal-split-objects-by-their-associated-deal-object-internal-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputPublicObjectId](#schemabatchinputpublicobjectid)|true|none|
|» inputs|body|[[PublicObjectId](#schemapublicobjectid)]|true|An array of deal split inputs|

> Example responses

> 200 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-a-batch-of-deal-split-objects-by-their-associated-deal-object-internal-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseDealToDealSplits](#schemabatchresponsedealtodealsplits)|
|207|Multi-Status|multiple statuses|[BatchResponseDealToDealSplitsWithErrors](#schemabatchresponsedealtodealsplitswitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.dealsplits.read_write )
</aside>

## Create or replace deal splits for deals with the provided IDs. Deal split percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal places

<a id="opIdpost-/deal-splits/2026-09/batch/upsert_/crm/objects/v3/deals/splits/batch/upsert"></a>

> Code samples

```bash
curl https://api.hubapi.com/deal-splits/2026-09/batch/upsert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /deal-splits/2026-09/batch/upsert`

Create or replace deal splits for deals with the provided IDs. Deal split percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal places

> Body parameter

```json
null
```

<h3 id="create-or-replace-deal-splits-for-deals-with-the-provided-ids-deal-split-percentages-for-each-deal-must-sum-up-to-10-100-and-may-have-up-to-8-decimal-places-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PublicDealSplitsBatchCreateRequest](#schemapublicdealsplitsbatchcreaterequest)|true|none|
|» inputs|body|[[PublicDealSplitsCreateRequest](#schemapublicdealsplitscreaterequest)]|true|An array of deal split inputs|

> Example responses

> 200 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-or-replace-deal-splits-for-deals-with-the-provided-ids-deal-split-percentages-for-each-deal-must-sum-up-to-10-100-and-may-have-up-to-8-decimal-places-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseDealToDealSplits](#schemabatchresponsedealtodealsplits)|
|207|Multi-Status|multiple statuses|[BatchResponseDealToDealSplitsWithErrors](#schemabatchresponsedealtodealsplitswitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.dealsplits.read_write )
</aside>

# Schemas

<h2 id="tocS_BatchInputPublicObjectId">BatchInputPublicObjectId</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputpublicobjectid"></a>
<a id="schema_BatchInputPublicObjectId"></a>
<a id="tocSbatchinputpublicobjectid"></a>
<a id="tocsbatchinputpublicobjectid"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[PublicObjectId](#schemapublicobjectid)]|true|none|An array of deal split inputs|

<h2 id="tocS_BatchResponseDealToDealSplits">BatchResponseDealToDealSplits</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsedealtodealsplits"></a>
<a id="schema_BatchResponseDealToDealSplits"></a>
<a id="tocSbatchresponsedealtodealsplits"></a>
<a id="tocsbatchresponsedealtodealsplits"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The timestamp indicating when the batch operation was completed, in date-time format.|
|links|object|false|none|A map of link names to associated URIs for additional resources or documentation.|
|requestedAt|string(date-time)|false|none|The timestamp indicating when the batch operation was requested, in date-time format.|
|results|[[DealToDealSplits](#schemadealtodealsplits)]|true|none|An array of deal-to-deal split objects representing the results of the batch operation.|
|startedAt|string(date-time)|true|none|The timestamp indicating when the batch operation started, in date-time format.|
|status|string|true|none|The current status of the batch operation, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponseDealToDealSplitsWithErrors">BatchResponseDealToDealSplitsWithErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsedealtodealsplitswitherrors"></a>
<a id="schema_BatchResponseDealToDealSplitsWithErrors"></a>
<a id="tocSbatchresponsedealtodealsplitswitherrors"></a>
<a id="tocsbatchresponsedealtodealsplitswitherrors"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The timestamp indicating when the batch operation was completed, in date-time format.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of error objects detailing the errors that occurred during the batch operation.|
|links|object|false|none|A map of link names to associated URIs for additional resources or documentation.|
|numErrors|integer(int32)|false|none|The total number of errors encountered during the batch operation.|
|requestedAt|string(date-time)|false|none|The timestamp indicating when the batch operation was requested, in date-time format.|
|results|[[DealToDealSplits](#schemadealtodealsplits)]|true|none|An array of deal-to-deal split objects representing the results of the batch operation.|
|startedAt|string(date-time)|true|none|The timestamp indicating when the batch operation started, in date-time format.|
|status|string|true|none|The current status of the batch operation, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_DealToDealSplits">DealToDealSplits</h2>
<!-- backwards compatibility -->
<a id="schemadealtodealsplits"></a>
<a id="schema_DealToDealSplits"></a>
<a id="tocSdealtodealsplits"></a>
<a id="tocsdealtodealsplits"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the deal associated with the deal splits.|
|splits|[[SimplePublicObject](#schemasimplepublicobject)]|true|none|An array of deal split objects, each representing a portion of the deal assigned to an owner.|

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

<h2 id="tocS_PublicDealSplitInput">PublicDealSplitInput</h2>
<!-- backwards compatibility -->
<a id="schemapublicdealsplitinput"></a>
<a id="schema_PublicDealSplitInput"></a>
<a id="tocSpublicdealsplitinput"></a>
<a id="tocspublicdealsplitinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ownerId|integer(int32)|true|none|The unique identifier of the owner receiving the deal split.|
|percentage|number|true|none|The portion of the deal assigned to the owner, expressed as a percentage. The total percentage for all splits in a deal must sum up to 1.0 (100%) and can have up to 8 decimal places.|

<h2 id="tocS_PublicDealSplitsBatchCreateRequest">PublicDealSplitsBatchCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicdealsplitsbatchcreaterequest"></a>
<a id="schema_PublicDealSplitsBatchCreateRequest"></a>
<a id="tocSpublicdealsplitsbatchcreaterequest"></a>
<a id="tocspublicdealsplitsbatchcreaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[PublicDealSplitsCreateRequest](#schemapublicdealsplitscreaterequest)]|true|none|An array of deal split inputs|

<h2 id="tocS_PublicDealSplitsCreateRequest">PublicDealSplitsCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicdealsplitscreaterequest"></a>
<a id="schema_PublicDealSplitsCreateRequest"></a>
<a id="tocSpublicdealsplitscreaterequest"></a>
<a id="tocspublicdealsplitscreaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|The unique identifier for the deal.|
|splits|[[PublicDealSplitInput](#schemapublicdealsplitinput)]|true|none|An array of deal split inputs, each containing an owner ID and a percentage of the deal split.|

<h2 id="tocS_PublicObjectId">PublicObjectId</h2>
<!-- backwards compatibility -->
<a id="schemapublicobjectid"></a>
<a id="schema_PublicObjectId"></a>
<a id="tocSpublicobjectid"></a>
<a id="tocspublicobjectid"></a>

```json
null
```

Contains the Id of a Public Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the public object.|

<h2 id="tocS_SimplePublicObject">SimplePublicObject</h2>
<!-- backwards compatibility -->
<a id="schemasimplepublicobject"></a>
<a id="schema_SimplePublicObject"></a>
<a id="tocSsimplepublicobject"></a>
<a id="tocssimplepublicobject"></a>

```json
null
```

A simple public object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|A boolean indicating whether this object is archived.|
|archivedAt|string(date-time)|false|none|The date and time when this object was archived, in ISO 8601 format.|
|createdAt|string(date-time)|true|none|The date and time when this object was created, in ISO 8601 format.|
|id|string|true|none|The unique identifier for this object, represented as a string.|
|objectWriteTraceId|string|false|none|A string identifier used for tracing write operations on this object.|
|properties|object|true|none|A map of property names to their values, where each value is a string.|
|propertiesWithHistory|object|false|none|A map of property names to arrays of historical values, each containing a value and its associated timestamp.|
|updatedAt|string(date-time)|true|none|The date and time when this object was last updated, in ISO 8601 format.|
|url|string|false|none|A string representing the URL associated with this object.|

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
|category|string|true|none|The error category|
|context|object|true|none|Context about the error condition|
|errors|[[ErrorDetail](#schemaerrordetail)]|true|none|An array of ErrorDetail objects that provide further information about the error.|
|id|string|false|none|The id of the error|
|links|object|true|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps|
|message|string|true|none|The error message|
|status|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|object|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_ValueWithTimestamp">ValueWithTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemavaluewithtimestamp"></a>
<a id="schema_ValueWithTimestamp"></a>
<a id="tocSvaluewithtimestamp"></a>
<a id="tocsvaluewithtimestamp"></a>

```json
null
```

Property model that includes timestamp.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceId|string|false|none|A string representing the unique identifier of the source.|
|sourceLabel|string|false|none|A string providing a human-readable label for the source.|
|sourceType|string|true|none|A string indicating the type of source from which the value originated.|
|timestamp|string(date-time)|true|none|A string in date-time format indicating when the value was recorded.|
|updatedByUserId|integer(int32)|false|none|An integer representing the ID of the user who last updated the value.|
|value|string|true|none|A string representing the main value being tracked.|
