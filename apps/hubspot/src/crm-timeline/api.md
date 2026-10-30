<h1 id="timeline">Timeline v2026-09</h1>

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
|crm.objects.companies.highly_sensitive.write.v2||
|crm.objects.companies.sensitive.write.v2||
|crm.objects.companies.write||
|crm.objects.contacts.highly_sensitive.write.v2||
|crm.objects.contacts.sensitive.write.v2||
|crm.objects.contacts.write||
|crm.objects.deals.highly_sensitive.write.v2||
|crm.objects.deals.sensitive.write.v2||
|crm.objects.deals.write||
|crm.objects.tickets.highly_sensitive.write||
|crm.objects.tickets.sensitive.write||
|crm.schemas.companies.write||
|crm.schemas.contacts.write||
|crm.schemas.deals.write||
|tickets.highly_sensitive.v2||
|tickets.sensitive.v2||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="timeline-advanced">Advanced</h1>

## Send event data (single)

<a id="opIdpost-/integrators/timeline/2026-09/events_create"></a>

> Code samples

```bash
curl https://api.hubapi.com/integrators/timeline/2026-09/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /integrators/timeline/2026-09/events`

Send a single instance of event data to a specified event type.

> Body parameter

```json
null
```

<h3 id="send-event-data-single-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AppEventOccurrence](#schemaappeventoccurrence)|true|none|
|» domain|body|string|false|The domain associated with the event occurrence, represented as a string.|
|» email|body|string|false|The email address associated with the event occurrence, represented as a string.|
|» eventTypeName|body|string|true|The name of the event type, represented as a string.|
|» extraData|body|object|false|An object containing additional data related to the event occurrence.|
|» id|body|string|true|The unique identifier for this event occurrence, represented as a string.|
|» objectId|body|string|false|The unique identifier of the object related to the event, represented as a string.|
|» objectTypeFullyQualifiedName|body|string|false|The fully qualified name of the object type associated with the event, represented as a string.|
|» properties|body|object|true|A map of custom property names to their values, represented as an object with string values.|
|» » **additionalProperties**|body|string|false|none|
|» timelineIFrame|body|[TimelineEventIFrame](#schematimelineeventiframe)|false|none|
|» timestamp|body|string(date-time)|false|The date and time when the event occurred, represented in ISO 8601 format.|
|» utk|body|string|false|The user token key (utk) associated with the event, represented as a string.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="send-event-data-single-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|App Event Occurrence was accepted and persisted successfully. Mirrored to UnifiedEvents async.|None|
|201|Created|successful operation|[AppEventOccurrence](#schemaappeventoccurrence)|
|400|Bad Request|The occurrence has a validation error that prevented us from accepting it for persistence. The response body will contain details about the validation error. Occurrence insert request rejected.|None|
|409|Conflict|An occurrence for this event type and occurrence ID already exists. Occurrences are immutable. Occurrence insert request rejected.|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.contacts.write ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.companies.write ), oauth2 ( Scopes: crm.schemas.deals.write ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write )
</aside>

## Resolve Event Type

<a id="opIdpost-/integrators/timeline/2026-09/types/projects_/integrators/timeline/2026-03/types/projects"></a>

> Code samples

```bash
curl "https://api.hubapi.com/integrators/timeline/2026-09/types/projects?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /integrators/timeline/2026-09/types/projects`

Resolve the fully qualified name (FQN) of an App Event Type using its developer coordinates, which include the project name and developer symbol. This endpoint is used for event types managed through Projects and does not support legacy or non-migrated event types.

> Body parameter

```json
null
```

<h3 id="resolve-event-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ExternalAppEventResolutionRequest](#schemaexternalappeventresolutionrequest)|true|none|
|» developerSymbol|body|string|true|The developer symbol used to identify the App Event Type. It is a string.|
|» projectName|body|string|true|The name of the project associated with the App Event Type. It is a string.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="resolve-event-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[AppEventResolutionResponse](#schemaappeventresolutionresponse)|
|404|Not Found|There is no App Event Type for the provided coordinates. Did you provide them correctly?|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

<h1 id="timeline-batch">Batch</h1>

## Batch insert events

<a id="opIdpost-/integrators/timeline/2026-09/events/batch_/integrators/timeline/2026-03/events/batch"></a>

> Code samples

```bash
curl https://api.hubapi.com/integrators/timeline/2026-09/events/batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /integrators/timeline/2026-09/events/batch`

Insert a batch of new App Event occurrences into the timeline. Each occurrence in the batch is immutable, and if an occurrence with the same ID already exists, the entire batch will be rejected. The batch can include occurrences from multiple event types, but all must belong to a single portal.

> Body parameter

```json
null
```

<h3 id="batch-insert-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputAppEventOccurrence](#schemabatchinputappeventoccurrence)|true|none|
|» inputs|body|[[AppEventOccurrence](#schemaappeventoccurrence)]|true|An array of AppEventOccurrence objects, each representing an individual app event occurrence to be included in the batch. This property is required.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="batch-insert-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseAppEventOccurrence](#schemabatchresponseappeventoccurrence)|
|400|Bad Request|One or more occurrences has a validation error that prevented us from accepting them for persistence. The response body will contain details about the validation error. Occurrence batch insert request rejected, none were accepted.|None|
|409|Conflict|One or more occurrence in the batch already exist. Occurrences are immutable. Occurrence insert request rejected, none were accepted.|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.contacts.write ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.companies.write ), oauth2 ( Scopes: crm.schemas.deals.write ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write )
</aside>

# Schemas

<h2 id="tocS_AppEventOccurrence">AppEventOccurrence</h2>
<!-- backwards compatibility -->
<a id="schemaappeventoccurrence"></a>
<a id="schema_AppEventOccurrence"></a>
<a id="tocSappeventoccurrence"></a>
<a id="tocsappeventoccurrence"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|false|none|The domain associated with the event occurrence, represented as a string.|
|email|string|false|none|The email address associated with the event occurrence, represented as a string.|
|eventTypeName|string|true|none|The name of the event type, represented as a string.|
|extraData|object|false|none|An object containing additional data related to the event occurrence.|
|id|string|true|none|The unique identifier for this event occurrence, represented as a string.|
|objectId|string|false|none|The unique identifier of the object related to the event, represented as a string.|
|objectTypeFullyQualifiedName|string|false|none|The fully qualified name of the object type associated with the event, represented as a string.|
|properties|object|true|none|A map of custom property names to their values, represented as an object with string values.|
|timelineIFrame|[TimelineEventIFrame](#schematimelineeventiframe)|false|none|none|
|timestamp|string(date-time)|false|none|The date and time when the event occurred, represented in ISO 8601 format.|
|utk|string|false|none|The user token key (utk) associated with the event, represented as a string.|

<h2 id="tocS_AppEventResolutionResponse">AppEventResolutionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaappeventresolutionresponse"></a>
<a id="schema_AppEventResolutionResponse"></a>
<a id="tocSappeventresolutionresponse"></a>
<a id="tocsappeventresolutionresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|developerQualifiedSymbol|[DeveloperQualifiedSymbol](#schemadeveloperqualifiedsymbol)|true|none|none|
|fullyQualifiedName|string|true|none|A string representing the fully qualified name of the App Event Type.|

<h2 id="tocS_BatchInputAppEventOccurrence">BatchInputAppEventOccurrence</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputappeventoccurrence"></a>
<a id="schema_BatchInputAppEventOccurrence"></a>
<a id="tocSbatchinputappeventoccurrence"></a>
<a id="tocsbatchinputappeventoccurrence"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[AppEventOccurrence](#schemaappeventoccurrence)]|true|none|An array of AppEventOccurrence objects, each representing an individual app event occurrence to be included in the batch. This property is required.|

<h2 id="tocS_BatchResponseAppEventOccurrence">BatchResponseAppEventOccurrence</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponseappeventoccurrence"></a>
<a id="schema_BatchResponseAppEventOccurrence"></a>
<a id="tocSbatchresponseappeventoccurrence"></a>
<a id="tocsbatchresponseappeventoccurrence"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed, in ISO 8601 format.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of StandardError objects detailing any errors that occurred during the batch operation.|
|links|object|false|none|A map of link names to associated URIs that provide additional information about the batch operation.|
|numErrors|integer(int32)|false|none|The number of errors encountered during the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[AppEventOccurrence](#schemaappeventoccurrence)]|true|none|An array of AppEventOccurrence objects representing the results of the batch operation.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation started, in ISO 8601 format.|
|status|string|true|none|The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_DeveloperQualifiedSymbol">DeveloperQualifiedSymbol</h2>
<!-- backwards compatibility -->
<a id="schemadeveloperqualifiedsymbol"></a>
<a id="schema_DeveloperQualifiedSymbol"></a>
<a id="tocSdeveloperqualifiedsymbol"></a>
<a id="tocsdeveloperqualifiedsymbol"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|developerSymbol|string|true|none|A string representing the developer's unique symbol or identifier within the project. This symbol is used in conjunction with the project name to resolve the fully qualified name of an App Event Type.|
|projectName|string|true|none|The name of the project associated with the developer. It is a string that identifies the project within the developer's scope.|

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

<h2 id="tocS_ExternalAppEventResolutionRequest">ExternalAppEventResolutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexternalappeventresolutionrequest"></a>
<a id="schema_ExternalAppEventResolutionRequest"></a>
<a id="tocSexternalappeventresolutionrequest"></a>
<a id="tocsexternalappeventresolutionrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|developerSymbol|string|true|none|The developer symbol used to identify the App Event Type. It is a string.|
|projectName|string|true|none|The name of the project associated with the App Event Type. It is a string.|

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
|category|string|true|none|The category of the error.|
|context|object|true|none|The context of the error, potentially including occurrence information.|
|errors|[[ErrorDetail](#schemaerrordetail)]|true|none|An array of ErrorDetail objects providing further information about the error.|
|id|string|false|none|The error ID, if any.|
|links|object|true|none|Links to any helpful documentation.|
|message|string|true|none|The error message, if any.|
|status|string|true|none|The resulting status of the batch operation.|
|subCategory|object|false|none|Sub category of the error, if any.|

<h2 id="tocS_TimelineEventIFrame">TimelineEventIFrame</h2>
<!-- backwards compatibility -->
<a id="schematimelineeventiframe"></a>
<a id="schema_TimelineEventIFrame"></a>
<a id="tocStimelineeventiframe"></a>
<a id="tocstimelineeventiframe"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headerLabel|string|true|none|The label of the modal window that displays the iframe contents.|
|height|integer(int32)|true|none|The height of the modal window in pixels.|
|linkLabel|string|true|none|The text displaying the link that will display the iframe.|
|url|string|true|none|The URI of the iframe contents.|
|width|integer(int32)|true|none|The width of the modal window in pixels.|
