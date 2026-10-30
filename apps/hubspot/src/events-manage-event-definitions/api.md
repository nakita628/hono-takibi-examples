<h1 id="events-manage-event-definitions">Events Manage Event Definitions v2026-09</h1>

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
|analytics.behavioral_events.send||
|behavioral_events.event_definitions.read_write||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="events-manage-event-definitions-advanced">Advanced</h1>

## Create Property

<a id="opIdpost-/events/2026-09/event-definitions/{eventName}/property"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/events/2026-09/event-definitions/{eventName}/property' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /events/2026-09/event-definitions/{eventName}/property`

Create a new property for a specified event definition in your HubSpot account. This endpoint allows you to define custom properties associated with a particular event, enhancing the tracking and analysis of behavioral events. The request must include a JSON body with the necessary property details.

> Body parameter

```json
null
```

<h3 id="create-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventName|path|string|true|The unique identifier of the event definition for which the property is being created.|
|body|body|[ExternalBehavioralEventPropertyCreate](#schemaexternalbehavioraleventpropertycreate)|true|none|
|» description|body|string|false|A string providing additional information about the property.|
|» label|body|string|true|A string representing the display name of the property. This field is required.|
|» name|body|string|false|A string representing the unique name of the property.|
|» options|body|[[OptionInput](#schemaoptioninput)]|false|An array of OptionInput objects that define the possible values for the property.|
|» type|body|string|true|A string indicating the data type of the property. This field is required.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[Property](#schemaproperty)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: behavioral_events.event_definitions.read_write )
</aside>

<h1 id="events-manage-event-definitions-basic">Basic</h1>

## List event definitions

<a id="opIdget-/events/2026-09/event-definitions"></a>

> Code samples

```bash
curl https://api.hubapi.com/events/2026-09/event-definitions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /events/2026-09/event-definitions`

Retrieve a list of event definitions available in your HubSpot account. This endpoint allows you to search and filter event definitions based on various criteria, such as search strings and pagination options. It is useful for managing and understanding the different event types that are tracked within your account.

<h3 id="list-event-definitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|A cursor token for pagination. Use the value from the previous response's paging.next.after field to retrieve the next set of results.|
|includeProperties|query|boolean|false|A boolean indicating whether to include event properties in the response.|
|limit|query|integer(int32)|false|The maximum number of results to return per page.|
|searchString|query|string|false|A string to filter event definitions by name or description.|
|sortOrder|query|string|false|The order in which to sort the results. Accepts values like 'asc' or 'desc'.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-event-definitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalExternalBehavioralEventTypeDefinition](#schemacollectionresponsewithtotalexternalbehavioraleventtypedefinition)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: behavioral_events.event_definitions.read_write )
</aside>

## Create

<a id="opIdpost-/events/2026-09/event-definitions"></a>

> Code samples

```bash
curl https://api.hubapi.com/events/2026-09/event-definitions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /events/2026-09/event-definitions`

Create a new behavioral event definition in your HubSpot account. This endpoint allows you to define the structure and properties of a new behavioral event, which can then be used to track specific user actions or behaviors. The request body must include the necessary event details and property definitions.

> Body parameter

```json
null
```

<h3 id="create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ExternalBehavioralEventTypeDefinitionEgg](#schemaexternalbehavioraleventtypedefinitionegg)|true|none|
|» customMatchingId|body|[ExternalObjectResolutionMappingRequest](#schemaexternalobjectresolutionmappingrequest)|false|none|
|» description|body|string|false|A string providing a description of the event type.|
|» includeDefaultProperties|body|boolean|true|A boolean indicating whether default properties should be included.|
|» label|body|string|true|A string representing the label of the event type.|
|» name|body|string|false|A string representing the name of the event type.|
|» primaryObject|body|string|false|A string indicating the primary object associated with the event type.|
|» propertyDefinitions|body|[[ExternalBehavioralEventPropertyCreate](#schemaexternalbehavioraleventpropertycreate)]|true|An array of property definitions, each represented by an ExternalBehavioralEventPropertyCreate object.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[ExternalBehavioralEventTypeDefinition](#schemaexternalbehavioraleventtypedefinition)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: behavioral_events.event_definitions.read_write )
</aside>

## Retrieve event definition

<a id="opIdget-/events/2026-09/event-definitions/{eventName}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/events/2026-09/event-definitions/{eventName}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /events/2026-09/event-definitions/{eventName}`

Retrieve the definition of a specific behavioral event in your HubSpot account by providing the event name. This endpoint returns detailed information about the event type, including its properties and associations.

<h3 id="retrieve-event-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventName|path|string|true|The unique name of the event definition to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-event-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ExternalBehavioralEventTypeDefinition](#schemaexternalbehavioraleventtypedefinition)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: behavioral_events.event_definitions.read_write )
</aside>

## Delete

<a id="opIddelete-/events/2026-09/event-definitions/{eventName}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/events/2026-09/event-definitions/{eventName}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /events/2026-09/event-definitions/{eventName}`

Delete a specific event definition in your HubSpot account using the event's unique name. This operation is useful for removing outdated or incorrect event definitions that are no longer needed.

<h3 id="delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventName|path|string|true|The unique name of the event definition to delete.|

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
oauth2 ( Scopes: behavioral_events.event_definitions.read_write )
</aside>

## Update event definition

<a id="opIdpatch-/events/2026-09/event-definitions/{eventName}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/events/2026-09/event-definitions/{eventName}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /events/2026-09/event-definitions/{eventName}`

Update the definition of a specific behavioral event in your HubSpot account. This operation allows you to modify the properties and templates associated with the event. The eventName path parameter identifies the event to be updated.

> Body parameter

```json
null
```

<h3 id="update-event-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventName|path|string|true|The unique name of the event definition to update.|
|body|body|[ExternalBehavioralEventTypeDefinitionPatch](#schemaexternalbehavioraleventtypedefinitionpatch)|true|none|
|» description|body|string|false|A string providing a description of the event type.|
|» detailTemplate|body|string|false|A string specifying the template for the details of the event type.|
|» headerTemplate|body|string|false|A string defining the template for the header of the event type.|
|» label|body|string|false|A string representing the label of the event type.|
|» propertyOrder|body|[[PropertyPatch](#schemapropertypatch)]|true|An array of PropertyPatch objects that specifies the order of properties for the event type.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-event-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[ExternalBehavioralEventTypeDefinition](#schemaexternalbehavioraleventtypedefinition)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: behavioral_events.event_definitions.read_write )
</aside>

## Delete property

<a id="opIddelete-/events/2026-09/event-definitions/{eventName}/property/{propertyName}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/events/2026-09/event-definitions/{eventName}/property/{propertyName}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /events/2026-09/event-definitions/{eventName}/property/{propertyName}`

Delete a specific property from an event definition in your HubSpot account. This operation is useful when you need to remove obsolete or incorrect properties from an event definition. Ensure that the event and property names are accurately specified to avoid unintended deletions.

<h3 id="delete-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventName|path|string|true|The unique name of the event definition from which the property will be deleted.|
|propertyName|path|string|true|The unique name of the property to be deleted from the event definition.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: behavioral_events.event_definitions.read_write )
</aside>

## Update property

<a id="opIdpatch-/events/2026-09/event-definitions/{eventName}/property/{propertyName}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/events/2026-09/event-definitions/{eventName}/property/{propertyName}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /events/2026-09/event-definitions/{eventName}/property/{propertyName}`

Update a specific property of a behavioral event definition in your HubSpot account. This operation allows you to modify the details of an existing property associated with a given event. Use this endpoint to keep your event properties up-to-date with the latest information.

> Body parameter

```json
null
```

<h3 id="update-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventName|path|string|true|The unique identifier of the event whose property you want to update.|
|propertyName|path|string|true|The name of the property to be updated within the specified event.|
|body|body|[ExternalBehavioralEventPropertyDefinitionPatch](#schemaexternalbehavioraleventpropertydefinitionpatch)|true|none|
|» description|body|string|false|A string providing additional information about the event property.|
|» displayOrder|body|integer(int32)|false|none|
|» hidden|body|boolean|false|none|
|» label|body|string|false|A string representing the display name of the event property.|
|» options|body|[[OptionInput](#schemaoptioninput)]|false|An array of OptionInput objects, each defining a selectable option for the event property.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[Property](#schemaproperty)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: behavioral_events.event_definitions.read_write )
</aside>

<h1 id="events-manage-event-definitions-batch">Batch</h1>

## Batch send events

<a id="opIdpost-/events/2026-09/send/batch_/events/v3/send/batch"></a>

> Code samples

```bash
curl https://api.hubapi.com/events/2026-09/send/batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /events/2026-09/send/batch`

Send a batch of behavioral events to the HubSpot API. This endpoint is useful for efficiently processing multiple events in a single request, reducing the number of API calls needed. It is particularly beneficial for applications that need to send a high volume of events quickly. Note that this endpoint is exempt from daily and ten-secondly rate limits.

> Body parameter

```json
null
```

<h3 id="batch-send-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchedBehavioralEventHttpCompletionRequest](#schemabatchedbehavioraleventhttpcompletionrequest)|true|none|
|» inputs|body|[[BehavioralEventHttpCompletionRequest](#schemabehavioraleventhttpcompletionrequest)]|true|An array of BehavioralEventHttpCompletionRequest objects, each representing an individual behavioral event completion request to be processed in the batch. This property is required.|

> Example responses

> default Response

```json
null
```

<h3 id="batch-send-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: analytics.behavioral_events.send )
</aside>

# Schemas

<h2 id="tocS_AbsoluteComparativeTimestampRefineBy">AbsoluteComparativeTimestampRefineBy</h2>
<!-- backwards compatibility -->
<a id="schemaabsolutecomparativetimestamprefineby"></a>
<a id="schema_AbsoluteComparativeTimestampRefineBy"></a>
<a id="tocSabsolutecomparativetimestamprefineby"></a>
<a id="tocsabsolutecomparativetimestamprefineby"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparison|string|true|none|A string indicating the type of comparison to be made with the timestamp. Valid values are 'BEFORE' and 'AFTER'.|
|timestamp|integer(int64)|true|none|An integer representing the specific timestamp to be used in the comparison, formatted as an int64.|
|type|string|true|none|A string that specifies the type of refinement, with a default value of 'AbsoluteComparativeTimestampRefineBy'.|

#### Enumerated Values

|Property|Value|
|---|---|
|comparison|AFTER|
|comparison|BEFORE|
|type|AbsoluteComparativeTimestampRefineBy|

<h2 id="tocS_AbsoluteRangedTimestampRefineBy">AbsoluteRangedTimestampRefineBy</h2>
<!-- backwards compatibility -->
<a id="schemaabsoluterangedtimestamprefineby"></a>
<a id="schema_AbsoluteRangedTimestampRefineBy"></a>
<a id="tocSabsoluterangedtimestamprefineby"></a>
<a id="tocsabsoluterangedtimestamprefineby"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lowerTimestamp|integer(int64)|true|none|An integer representing the lower bound of the timestamp range, in milliseconds since the Unix epoch.|
|rangeType|string|true|none|A string that indicates the type of range comparison. Valid values are 'BETWEEN' and 'NOT_BETWEEN'.|
|type|string|true|none|A string that specifies the type of the component, which is 'AbsoluteRangedTimestampRefineBy'.|
|upperTimestamp|integer(int64)|true|none|An integer representing the upper bound of the timestamp range, in milliseconds since the Unix epoch.|

#### Enumerated Values

|Property|Value|
|---|---|
|rangeType|BETWEEN|
|rangeType|NOT_BETWEEN|
|type|AbsoluteRangedTimestampRefineBy|

<h2 id="tocS_AllHistoryRefineBy">AllHistoryRefineBy</h2>
<!-- backwards compatibility -->
<a id="schemaallhistoryrefineby"></a>
<a id="schema_AllHistoryRefineBy"></a>
<a id="tocSallhistoryrefineby"></a>
<a id="tocsallhistoryrefineby"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|A string that specifies the type of refinement. The default value is 'AllHistoryRefineBy', and it is the only valid value for this property.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|AllHistoryRefineBy|

<h2 id="tocS_AllPropertyTypesOperation">AllPropertyTypesOperation</h2>
<!-- backwards compatibility -->
<a id="schemaallpropertytypesoperation"></a>
<a id="schema_AllPropertyTypesOperation"></a>
<a id="tocSallpropertytypesoperation"></a>
<a id="tocsallpropertytypesoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coalescingRefineBy|[NumOccurrencesRefineBy](#schemanumoccurrencesrefineby) \| [SetOccurrencesRefineBy](#schemasetoccurrencesrefineby)|true|none|An object used to refine the operation by coalescing, which can be one of several types such as NumOccurrencesRefineBy or SetOccurrencesRefineBy.|
|defaultValue|string|false|none|A string specifying the default value for the operation.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included in the operation.|
|operationType|string|true|none|A string indicating the type of operation being performed.|
|operator|string|true|none|A string representing the operation to be performed, with valid values including 'IS_KNOWN', 'IS_UNKNOWN', 'IS_BLANK', and 'IS_NOT_BLANK'.|
|operatorName|string|true|none|A string representing the name of the operator used in the operation.|
|propertyType|string|true|none|A string indicating the type of property, with a default value of 'alltypes'.|
|pruningRefineBy|[RelativeComparativeTimestampRefineBy](#schemarelativecomparativetimestamprefineby) \| [RelativeRangedTimestampRefineBy](#schemarelativerangedtimestamprefineby) \| [AbsoluteComparativeTimestampRefineBy](#schemaabsolutecomparativetimestamprefineby) \| [AbsoluteRangedTimestampRefineBy](#schemaabsoluterangedtimestamprefineby) \| [AllHistoryRefineBy](#schemaallhistoryrefineby) \| [TimePointOperation](#schematimepointoperation) \| [RangedTimeOperation](#schemarangedtimeoperation)|false|none|An object used to refine the operation by pruning, which can be one of several types such as RelativeComparativeTimestampRefineBy or AbsoluteRangedTimestampRefineBy.|
|renderSpec|string|false|none|A string providing specifications for rendering the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IS_BLANK|
|operator|IS_KNOWN|
|operator|IS_NOT_BLANK|
|operator|IS_UNKNOWN|
|propertyType|alltypes|

<h2 id="tocS_AssociationDefinition">AssociationDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaassociationdefinition"></a>
<a id="schema_AssociationDefinition"></a>
<a id="tocSassociationdefinition"></a>
<a id="tocsassociationdefinition"></a>

```json
null
```

The definition of an association

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowsCustomLabels|boolean|true|none|A boolean indicating if custom labels are allowed for this association.|
|cardinality|string|true|none|The nature of the association in terms of cardinality, which can be 'ONE_TO_ONE' or 'ONE_TO_MANY'.|
|category|string|true|none|The category of the association, indicating whether it is defined by HubSpot, the user, an integrator, or for work purposes. Valid values include 'HUBSPOT_DEFINED', 'USER_DEFINED', 'INTEGRATOR_DEFINED', and 'WORK'.|
|fromObjectType|string|false|none|The type of object from which the association originates. Valid values include various HubSpot object types such as 'CONTACT', 'COMPANY', 'DEAL', etc.|
|fromObjectTypeId|string|true|none|The object type ID from which the association originates.|
|hasAllAssociatedObjects|boolean|true|none|A boolean indicating if all associated objects are included in the association.|
|hasCascadingDeletes|boolean|true|none|A boolean indicating if cascading deletes are enabled for this association.|
|hasUserEnforcedMaxFromObjectIds|boolean|true|none|A boolean indicating if there is a user-enforced maximum on the number of 'from' object IDs.|
|hasUserEnforcedMaxToObjectIds|boolean|true|none|A boolean indicating if there is a user-enforced maximum on the number of 'to' object IDs.|
|hidden|boolean|true|none|A boolean indicating if the association is hidden.|
|hiddenReason|string|false|none|The reason why the association is hidden, if applicable. Valid values include 'DEFAULT', 'INTERNAL', and 'USER_CONFIGURED'.|
|id|integer(int32)|true|none|The unique identifier for this association definition.|
|inverseAllowsCustomLabels|boolean|true|none|A boolean indicating if custom labels are allowed for the inverse association.|
|inverseCardinality|string|true|none|The cardinality of the inverse association, which can also be 'ONE_TO_ONE' or 'ONE_TO_MANY'.|
|inverseHasAllAssociatedObjects|boolean|true|none|A boolean indicating if all associated objects are included in the inverse association.|
|inverseId|integer(int32)|true|none|The unique identifier for the inverse of this association definition.|
|inverseLabel|string|false|none|A human-readable label for the inverse association.|
|inverseName|string|true|none|The name of the inverse association.|
|isDefault|boolean|true|none|A boolean indicating if this association is the default association.|
|isInversePrimary|boolean|true|none|A boolean indicating if the inverse association is the primary association.|
|isPrimary|boolean|true|none|A boolean indicating if this association is the primary association.|
|label|string|false|none|A human-readable label for the association.|
|maxFromObjectIds|integer(int32)|true|none|The maximum number of object IDs that can be associated in the 'from' direction.|
|maxToObjectIds|integer(int32)|true|none|The maximum number of object IDs that can be associated in the 'to' direction.|
|name|string|true|none|The name of the association.|
|portalUniqueIdentifier|string|true|none|A unique identifier for the association within the portal.|
|readOnly|boolean|true|none|A boolean indicating if the association is read-only.|
|toObjectType|string|false|none|The type of object to which the association points. Valid values include various HubSpot object types such as 'CONTACT', 'COMPANY', 'DEAL', etc.|
|toObjectTypeId|string|true|none|The object type ID to which the association points.|

#### Enumerated Values

|Property|Value|
|---|---|
|cardinality|ONE_TO_MANY|
|cardinality|ONE_TO_ONE|
|category|HUBSPOT_DEFINED|
|category|INTEGRATOR_DEFINED|
|category|USER_DEFINED|
|category|WORK|
|fromObjectType|ABANDONED_CART|
|fromObjectType|ACCEPTANCE_TEST|
|fromObjectType|AD|
|fromObjectType|AD_ACCOUNT|
|fromObjectType|AD_CAMPAIGN|
|fromObjectType|AD_GROUP|
|fromObjectType|AI_FORECAST|
|fromObjectType|ALL_PAGES|
|fromObjectType|APPROVAL|
|fromObjectType|APPROVAL_STEP|
|fromObjectType|ATTRIBUTION|
|fromObjectType|AUDIENCE|
|fromObjectType|AUTOMATION_JOURNEY|
|fromObjectType|AUTOMATION_PLATFORM_FLOW|
|fromObjectType|AUTOMATION_PLATFORM_FLOW_ACTION|
|fromObjectType|BET_ALERT|
|fromObjectType|BET_DELIVERABLE_SERVICE|
|fromObjectType|BLOG_LISTING_PAGE|
|fromObjectType|BLOG_POST|
|fromObjectType|CALL|
|fromObjectType|CAMPAIGN|
|fromObjectType|CAMPAIGN_BUDGET_ITEM|
|fromObjectType|CAMPAIGN_SPEND_ITEM|
|fromObjectType|CAMPAIGN_STEP|
|fromObjectType|CAMPAIGN_TEMPLATE|
|fromObjectType|CAMPAIGN_TEMPLATE_STEP|
|fromObjectType|CART|
|fromObjectType|CASE_STUDY|
|fromObjectType|CHATFLOW|
|fromObjectType|CLIP|
|fromObjectType|CMS_URL|
|fromObjectType|COMBO_EVENT_CONFIGURATION|
|fromObjectType|COMMERCE_PAYMENT|
|fromObjectType|COMMUNICATION|
|fromObjectType|COMPANY|
|fromObjectType|CONTACT|
|fromObjectType|CONTACT_CREATE_ATTRIBUTION|
|fromObjectType|CONTENT|
|fromObjectType|CONTENT_AUDIT|
|fromObjectType|CONTENT_AUDIT_PAGE|
|fromObjectType|CONVERSATION|
|fromObjectType|CONVERSATION_INBOX|
|fromObjectType|CONVERSATION_SESSION|
|fromObjectType|CRM_OBJECTS_DUMMY_TYPE|
|fromObjectType|CRM_PIPELINES_DUMMY_TYPE|
|fromObjectType|CTA|
|fromObjectType|CTA_VARIANT|
|fromObjectType|DATA_PRIVACY_CONSENT|
|fromObjectType|DATA_SYNC_STATE|
|fromObjectType|DEAL|
|fromObjectType|DEAL_CREATE_ATTRIBUTION|
|fromObjectType|DEAL_REGISTRATION|
|fromObjectType|DEAL_SPLIT|
|fromObjectType|DISCOUNT|
|fromObjectType|DISCOUNT_CODE|
|fromObjectType|DISCOUNT_TEMPLATE|
|fromObjectType|EMAIL|
|fromObjectType|ENGAGEMENT|
|fromObjectType|EXPORT|
|fromObjectType|EXTERNAL_WEB_URL|
|fromObjectType|FEE|
|fromObjectType|FEEDBACK_SUBMISSION|
|fromObjectType|FEEDBACK_SURVEY|
|fromObjectType|FILE_MANAGER_FILE|
|fromObjectType|FILE_MANAGER_FOLDER|
|fromObjectType|FOLDER|
|fromObjectType|FORECAST|
|fromObjectType|FORM|
|fromObjectType|FORM_SUBMISSION_INBOUNDDB|
|fromObjectType|GOAL_TARGET|
|fromObjectType|GOAL_TARGET_GROUP|
|fromObjectType|GOAL_TEMPLATE|
|fromObjectType|GSC_PROPERTY|
|fromObjectType|HUB|
|fromObjectType|IMPORT|
|fromObjectType|INVOICE|
|fromObjectType|KEYWORD|
|fromObjectType|KNOWLEDGE_ARTICLE|
|fromObjectType|LANDING_PAGE|
|fromObjectType|LEAD|
|fromObjectType|LINE_ITEM|
|fromObjectType|MARKETING_CALENDAR|
|fromObjectType|MARKETING_CAMPAIGN_UTM|
|fromObjectType|MARKETING_EMAIL|
|fromObjectType|MARKETING_EVENT|
|fromObjectType|MARKETING_EVENT_ATTENDANCE|
|fromObjectType|MARKETING_SMS|
|fromObjectType|MEDIA_BRIDGE|
|fromObjectType|MEETING_EVENT|
|fromObjectType|MIC|
|fromObjectType|NOTE|
|fromObjectType|OBJECT_LIST|
|fromObjectType|ORDER|
|fromObjectType|OWNER|
|fromObjectType|PARTNER_ACCOUNT|
|fromObjectType|PARTNER_CLIENT|
|fromObjectType|PARTNER_CLIENT_REVENUE|
|fromObjectType|PARTNER_SERVICE|
|fromObjectType|PAYMENT_LINK|
|fromObjectType|PAYMENT_SCHEDULE|
|fromObjectType|PAYMENT_SCHEDULE_INSTALLMENT|
|fromObjectType|PERMISSIONS_TESTING|
|fromObjectType|PLAYBOOK|
|fromObjectType|PLAYBOOK_QUESTION|
|fromObjectType|PLAYBOOK_SUBMISSION|
|fromObjectType|PLAYBOOK_SUBMISSION_ANSWER|
|fromObjectType|PLAYLIST|
|fromObjectType|PLAYLIST_FOLDER|
|fromObjectType|PODCAST_EPISODE|
|fromObjectType|PORTAL|
|fromObjectType|PORTAL_OBJECT_SYNC_MESSAGE|
|fromObjectType|POSTAL_MAIL|
|fromObjectType|PRIVACY_SCANNER_COOKIE|
|fromObjectType|PRODUCT|
|fromObjectType|PRODUCT_OR_FOLDER|
|fromObjectType|PROPERTY_INFO|
|fromObjectType|PROSPECTING_AGENT_CONTACT_ASSIGNMENT|
|fromObjectType|PUBLISHING_TASK|
|fromObjectType|QUARANTINED_SUBMISSION|
|fromObjectType|QUOTA|
|fromObjectType|QUOTE|
|fromObjectType|QUOTE_FIELD|
|fromObjectType|QUOTE_MODULE|
|fromObjectType|QUOTE_MODULE_FIELD|
|fromObjectType|QUOTE_TEMPLATE|
|fromObjectType|RESTORABLE_CRM_OBJECT|
|fromObjectType|ROSTER|
|fromObjectType|ROSTER_MEMBER|
|fromObjectType|SALES_DOCUMENT|
|fromObjectType|SALES_TASK|
|fromObjectType|SALES_WORKLOAD|
|fromObjectType|SALESFORCE_SYNC_ERROR|
|fromObjectType|SCHEDULING_PAGE|
|fromObjectType|SCHEMAS_BACKEND_TEST|
|fromObjectType|SCORE_CONFIGURATION|
|fromObjectType|SEQUENCE|
|fromObjectType|SEQUENCE_ENROLLMENT|
|fromObjectType|SEQUENCE_STEP|
|fromObjectType|SEQUENCE_STEP_ENROLLMENT|
|fromObjectType|SERVICE|
|fromObjectType|SITE_PAGE|
|fromObjectType|SNIPPET|
|fromObjectType|SOCIAL_BROADCAST|
|fromObjectType|SOCIAL_CHANNEL|
|fromObjectType|SOCIAL_POST|
|fromObjectType|SOCIAL_PROFILE|
|fromObjectType|SOX_PROTECTED_DUMMY_TYPE|
|fromObjectType|SOX_PROTECTED_TEST_TYPE|
|fromObjectType|SUBMISSION_TAG|
|fromObjectType|SUBSCRIPTION|
|fromObjectType|TASK|
|fromObjectType|TASK_TEMPLATE|
|fromObjectType|TAX|
|fromObjectType|TEMPLATE|
|fromObjectType|TICKET|
|fromObjectType|UNKNOWN|
|fromObjectType|UNSUBSCRIBE|
|fromObjectType|USER|
|fromObjectType|VIEW|
|fromObjectType|VIEW_BLOCK|
|fromObjectType|WEB_INTERACTIVE|
|hiddenReason|DEFAULT|
|hiddenReason|INTERNAL|
|hiddenReason|USER_CONFIGURED|
|inverseCardinality|ONE_TO_MANY|
|inverseCardinality|ONE_TO_ONE|
|toObjectType|ABANDONED_CART|
|toObjectType|ACCEPTANCE_TEST|
|toObjectType|AD|
|toObjectType|AD_ACCOUNT|
|toObjectType|AD_CAMPAIGN|
|toObjectType|AD_GROUP|
|toObjectType|AI_FORECAST|
|toObjectType|ALL_PAGES|
|toObjectType|APPROVAL|
|toObjectType|APPROVAL_STEP|
|toObjectType|ATTRIBUTION|
|toObjectType|AUDIENCE|
|toObjectType|AUTOMATION_JOURNEY|
|toObjectType|AUTOMATION_PLATFORM_FLOW|
|toObjectType|AUTOMATION_PLATFORM_FLOW_ACTION|
|toObjectType|BET_ALERT|
|toObjectType|BET_DELIVERABLE_SERVICE|
|toObjectType|BLOG_LISTING_PAGE|
|toObjectType|BLOG_POST|
|toObjectType|CALL|
|toObjectType|CAMPAIGN|
|toObjectType|CAMPAIGN_BUDGET_ITEM|
|toObjectType|CAMPAIGN_SPEND_ITEM|
|toObjectType|CAMPAIGN_STEP|
|toObjectType|CAMPAIGN_TEMPLATE|
|toObjectType|CAMPAIGN_TEMPLATE_STEP|
|toObjectType|CART|
|toObjectType|CASE_STUDY|
|toObjectType|CHATFLOW|
|toObjectType|CLIP|
|toObjectType|CMS_URL|
|toObjectType|COMBO_EVENT_CONFIGURATION|
|toObjectType|COMMERCE_PAYMENT|
|toObjectType|COMMUNICATION|
|toObjectType|COMPANY|
|toObjectType|CONTACT|
|toObjectType|CONTACT_CREATE_ATTRIBUTION|
|toObjectType|CONTENT|
|toObjectType|CONTENT_AUDIT|
|toObjectType|CONTENT_AUDIT_PAGE|
|toObjectType|CONVERSATION|
|toObjectType|CONVERSATION_INBOX|
|toObjectType|CONVERSATION_SESSION|
|toObjectType|CRM_OBJECTS_DUMMY_TYPE|
|toObjectType|CRM_PIPELINES_DUMMY_TYPE|
|toObjectType|CTA|
|toObjectType|CTA_VARIANT|
|toObjectType|DATA_PRIVACY_CONSENT|
|toObjectType|DATA_SYNC_STATE|
|toObjectType|DEAL|
|toObjectType|DEAL_CREATE_ATTRIBUTION|
|toObjectType|DEAL_REGISTRATION|
|toObjectType|DEAL_SPLIT|
|toObjectType|DISCOUNT|
|toObjectType|DISCOUNT_CODE|
|toObjectType|DISCOUNT_TEMPLATE|
|toObjectType|EMAIL|
|toObjectType|ENGAGEMENT|
|toObjectType|EXPORT|
|toObjectType|EXTERNAL_WEB_URL|
|toObjectType|FEE|
|toObjectType|FEEDBACK_SUBMISSION|
|toObjectType|FEEDBACK_SURVEY|
|toObjectType|FILE_MANAGER_FILE|
|toObjectType|FILE_MANAGER_FOLDER|
|toObjectType|FOLDER|
|toObjectType|FORECAST|
|toObjectType|FORM|
|toObjectType|FORM_SUBMISSION_INBOUNDDB|
|toObjectType|GOAL_TARGET|
|toObjectType|GOAL_TARGET_GROUP|
|toObjectType|GOAL_TEMPLATE|
|toObjectType|GSC_PROPERTY|
|toObjectType|HUB|
|toObjectType|IMPORT|
|toObjectType|INVOICE|
|toObjectType|KEYWORD|
|toObjectType|KNOWLEDGE_ARTICLE|
|toObjectType|LANDING_PAGE|
|toObjectType|LEAD|
|toObjectType|LINE_ITEM|
|toObjectType|MARKETING_CALENDAR|
|toObjectType|MARKETING_CAMPAIGN_UTM|
|toObjectType|MARKETING_EMAIL|
|toObjectType|MARKETING_EVENT|
|toObjectType|MARKETING_EVENT_ATTENDANCE|
|toObjectType|MARKETING_SMS|
|toObjectType|MEDIA_BRIDGE|
|toObjectType|MEETING_EVENT|
|toObjectType|MIC|
|toObjectType|NOTE|
|toObjectType|OBJECT_LIST|
|toObjectType|ORDER|
|toObjectType|OWNER|
|toObjectType|PARTNER_ACCOUNT|
|toObjectType|PARTNER_CLIENT|
|toObjectType|PARTNER_CLIENT_REVENUE|
|toObjectType|PARTNER_SERVICE|
|toObjectType|PAYMENT_LINK|
|toObjectType|PAYMENT_SCHEDULE|
|toObjectType|PAYMENT_SCHEDULE_INSTALLMENT|
|toObjectType|PERMISSIONS_TESTING|
|toObjectType|PLAYBOOK|
|toObjectType|PLAYBOOK_QUESTION|
|toObjectType|PLAYBOOK_SUBMISSION|
|toObjectType|PLAYBOOK_SUBMISSION_ANSWER|
|toObjectType|PLAYLIST|
|toObjectType|PLAYLIST_FOLDER|
|toObjectType|PODCAST_EPISODE|
|toObjectType|PORTAL|
|toObjectType|PORTAL_OBJECT_SYNC_MESSAGE|
|toObjectType|POSTAL_MAIL|
|toObjectType|PRIVACY_SCANNER_COOKIE|
|toObjectType|PRODUCT|
|toObjectType|PRODUCT_OR_FOLDER|
|toObjectType|PROPERTY_INFO|
|toObjectType|PROSPECTING_AGENT_CONTACT_ASSIGNMENT|
|toObjectType|PUBLISHING_TASK|
|toObjectType|QUARANTINED_SUBMISSION|
|toObjectType|QUOTA|
|toObjectType|QUOTE|
|toObjectType|QUOTE_FIELD|
|toObjectType|QUOTE_MODULE|
|toObjectType|QUOTE_MODULE_FIELD|
|toObjectType|QUOTE_TEMPLATE|
|toObjectType|RESTORABLE_CRM_OBJECT|
|toObjectType|ROSTER|
|toObjectType|ROSTER_MEMBER|
|toObjectType|SALES_DOCUMENT|
|toObjectType|SALES_TASK|
|toObjectType|SALES_WORKLOAD|
|toObjectType|SALESFORCE_SYNC_ERROR|
|toObjectType|SCHEDULING_PAGE|
|toObjectType|SCHEMAS_BACKEND_TEST|
|toObjectType|SCORE_CONFIGURATION|
|toObjectType|SEQUENCE|
|toObjectType|SEQUENCE_ENROLLMENT|
|toObjectType|SEQUENCE_STEP|
|toObjectType|SEQUENCE_STEP_ENROLLMENT|
|toObjectType|SERVICE|
|toObjectType|SITE_PAGE|
|toObjectType|SNIPPET|
|toObjectType|SOCIAL_BROADCAST|
|toObjectType|SOCIAL_CHANNEL|
|toObjectType|SOCIAL_POST|
|toObjectType|SOCIAL_PROFILE|
|toObjectType|SOX_PROTECTED_DUMMY_TYPE|
|toObjectType|SOX_PROTECTED_TEST_TYPE|
|toObjectType|SUBMISSION_TAG|
|toObjectType|SUBSCRIPTION|
|toObjectType|TASK|
|toObjectType|TASK_TEMPLATE|
|toObjectType|TAX|
|toObjectType|TEMPLATE|
|toObjectType|TICKET|
|toObjectType|UNKNOWN|
|toObjectType|UNSUBSCRIBE|
|toObjectType|USER|
|toObjectType|VIEW|
|toObjectType|VIEW_BLOCK|
|toObjectType|WEB_INTERACTIVE|

<h2 id="tocS_BatchedBehavioralEventHttpCompletionRequest">BatchedBehavioralEventHttpCompletionRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchedbehavioraleventhttpcompletionrequest"></a>
<a id="schema_BatchedBehavioralEventHttpCompletionRequest"></a>
<a id="tocSbatchedbehavioraleventhttpcompletionrequest"></a>
<a id="tocsbatchedbehavioraleventhttpcompletionrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[BehavioralEventHttpCompletionRequest](#schemabehavioraleventhttpcompletionrequest)]|true|none|An array of BehavioralEventHttpCompletionRequest objects, each representing an individual behavioral event completion request to be processed in the batch. This property is required.|

<h2 id="tocS_BehavioralEventHttpCompletionRequest">BehavioralEventHttpCompletionRequest</h2>
<!-- backwards compatibility -->
<a id="schemabehavioraleventhttpcompletionrequest"></a>
<a id="schema_BehavioralEventHttpCompletionRequest"></a>
<a id="tocSbehavioraleventhttpcompletionrequest"></a>
<a id="tocsbehavioraleventhttpcompletionrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|A string representing the email address associated with the event.|
|eventName|string|true|none|A string representing the name of the event. This is a required property.|
|objectId|string|false|none|A string representing the unique identifier of the object associated with the event.|
|occurredAt|string(date-time)|false|none|A string representing the date and time when the event occurred, in ISO 8601 format.|
|properties|object|true|none|An object containing key-value pairs of additional properties related to the event. This is a required property.|
|utk|string|false|none|A string representing the unique tracking key associated with the event.|
|uuid|string|false|none|A string representing the universally unique identifier for the event.|

<h2 id="tocS_BehavioralEventTypeDefinitionLabels">BehavioralEventTypeDefinitionLabels</h2>
<!-- backwards compatibility -->
<a id="schemabehavioraleventtypedefinitionlabels"></a>
<a id="schema_BehavioralEventTypeDefinitionLabels"></a>
<a id="tocSbehavioraleventtypedefinitionlabels"></a>
<a id="tocsbehavioraleventtypedefinitionlabels"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plural|string|false|none|The plural form of the label for the event type. This is a string.|
|singular|string|true|none|The singular form of the label for the event type. This is a string and is required.|

<h2 id="tocS_BoolPropertyOperation">BoolPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemaboolpropertyoperation"></a>
<a id="schema_BoolPropertyOperation"></a>
<a id="tocSboolpropertyoperation"></a>
<a id="tocsboolpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValue|string|false|none|A string representing the default value for the operation.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the property.|
|operationType|string|true|none|A string indicating the type of operation being performed.|
|operator|string|true|none|A string representing the operation to be performed, with valid values including 'IS_EQUAL_TO', 'IS_NOT_EQUAL_TO', 'HAS_EVER_BEEN_EQUAL_TO', and 'HAS_NEVER_BEEN_EQUAL_TO'.|
|operatorName|string|true|none|A string representing the name of the operator used in the operation.|
|propertyType|string|true|none|A string indicating the type of property, with a default value of 'bool'.|
|renderSpec|string|false|none|A string specifying the rendering specification for the operation.|
|value|boolean|true|none|A boolean indicating the value to be used in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|HAS_EVER_BEEN_EQUAL_TO|
|operator|HAS_NEVER_BEEN_EQUAL_TO|
|operator|IS_EQUAL_TO|
|operator|IS_NOT_EQUAL_TO|
|propertyType|bool|

<h2 id="tocS_CalendarDatePropertyOperation">CalendarDatePropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemacalendardatepropertyoperation"></a>
<a id="schema_CalendarDatePropertyOperation"></a>
<a id="tocScalendardatepropertyoperation"></a>
<a id="tocscalendardatepropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValue|string|false|none|A string representing the default value for the operation.|
|fiscalYearStart|string|false|none|A string that defines the starting month of the fiscal year, with options such as 'JANUARY', 'FEBRUARY', 'MARCH', etc.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean that determines whether objects with no value set should be included in the operation.|
|operationType|string|true|none|A string that specifies the type of operation being performed.|
|operator|string|true|none|A string that indicates the operation to be performed, with possible values including 'IN_THIS_TIME_UNIT', 'IN_THIS_TIME_UNIT_SO_FAR', 'IN_NEXT_TIME_UNIT', 'IN_LAST_TIME_UNIT', and 'IN_LAST_TIME_UNIT_SO_FAR'.|
|operatorName|string|true|none|A string representing the name of the operator used in the operation.|
|propertyType|string|true|none|A string that specifies the type of property operation, defaulting to 'calendar-date'.|
|renderSpec|string|false|none|A string specifying the rendering specification for the operation.|
|timeUnit|string|true|none|A string representing the unit of time for the operation, which can be 'DAY', 'WEEK', 'MONTH', 'QUARTER', or 'YEAR'.|
|timeUnitCount|integer(int32)|true|none|An integer specifying the number of time units to consider in the operation.|
|useFiscalYear|boolean|true|none|A boolean indicating whether the fiscal year should be used in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|fiscalYearStart|APRIL|
|fiscalYearStart|AUGUST|
|fiscalYearStart|DECEMBER|
|fiscalYearStart|FEBRUARY|
|fiscalYearStart|JANUARY|
|fiscalYearStart|JULY|
|fiscalYearStart|JUNE|
|fiscalYearStart|MARCH|
|fiscalYearStart|MAY|
|fiscalYearStart|NOVEMBER|
|fiscalYearStart|OCTOBER|
|fiscalYearStart|SEPTEMBER|
|operator|IN_LAST_TIME_UNIT|
|operator|IN_LAST_TIME_UNIT_SO_FAR|
|operator|IN_NEXT_TIME_UNIT|
|operator|IN_THIS_TIME_UNIT|
|operator|IN_THIS_TIME_UNIT_SO_FAR|
|propertyType|calendar-date|
|timeUnit|DAY|
|timeUnit|MONTH|
|timeUnit|QUARTER|
|timeUnit|WEEK|
|timeUnit|YEAR|

<h2 id="tocS_CollectionResponseWithTotalExternalBehavioralEventTypeDefinition">CollectionResponseWithTotalExternalBehavioralEventTypeDefinition</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalexternalbehavioraleventtypedefinition"></a>
<a id="schema_CollectionResponseWithTotalExternalBehavioralEventTypeDefinition"></a>
<a id="tocScollectionresponsewithtotalexternalbehavioraleventtypedefinition"></a>
<a id="tocscollectionresponsewithtotalexternalbehavioraleventtypedefinition"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[ExternalBehavioralEventTypeDefinition](#schemaexternalbehavioraleventtypedefinition)]|true|none|An array containing the external behavioral event type definitions returned in the current page.|
|total|integer(int32)|true|none|The total number of external behavioral event type definitions available.|

<h2 id="tocS_ComboEventRule">ComboEventRule</h2>
<!-- backwards compatibility -->
<a id="schemacomboeventrule"></a>
<a id="schema_ComboEventRule"></a>
<a id="tocScomboeventrule"></a>
<a id="tocscomboeventrule"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|true|none|An integer specifying the number of times the event must occur for the rule to be satisfied.|
|eventTypeId|string|true|none|The unique identifier for the type of event this rule applies to.|
|lookbackWindowDays|integer(int32)|false|none|An integer representing the number of days to look back when evaluating the rule.|
|propertyFilters|[[PropertyFilter](#schemapropertyfilter)]|true|none|An array of property filters that must be satisfied for the rule to apply. Each filter specifies conditions on event properties.|

<h2 id="tocS_ComboEventRuleBranch">ComboEventRuleBranch</h2>
<!-- backwards compatibility -->
<a id="schemacomboeventrulebranch"></a>
<a id="schema_ComboEventRuleBranch"></a>
<a id="tocScomboeventrulebranch"></a>
<a id="tocscomboeventrulebranch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|composingRules|[[ComboEventRule](#schemacomboeventrule)]|true|none|An array of ComboEventRule objects that define the individual rules composing this branch.|
|operationType|string|true|none|The type of logical operation applied to the rule branches and composing rules. Valid values are 'AND' and 'OR'.|
|ruleBranches|[[ComboEventRuleBranch](#schemacomboeventrulebranch)]|true|none|An array of nested ComboEventRuleBranch objects, allowing for hierarchical rule definitions.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|AND|
|operationType|OR|

<h2 id="tocS_ComparativeBoolPropertyOperation">ComparativeBoolPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemacomparativeboolpropertyoperation"></a>
<a id="schema_ComparativeBoolPropertyOperation"></a>
<a id="tocScomparativeboolpropertyoperation"></a>
<a id="tocscomparativeboolpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparisonPropertyName|string|true|none|A string specifying the name of the property to compare against.|
|defaultValue|string|false|none|A string representing the default value to use if no value is set.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set for the property should be included in the operation.|
|operationType|string|true|none|A string specifying the type of operation being performed.|
|operator|string|true|none|A string representing the comparison operator to be used. Valid values are 'IS_EQUAL_TO' and 'IS_NOT_EQUAL_TO'.|
|operatorName|string|true|none|A string representing the name of the operator used in the operation.|
|propertyType|string|true|none|A string indicating the type of property operation, defaulting to 'bool-comparative'.|
|renderSpec|string|false|none|A string that may define how the operation should be rendered, though specifics are not detailed in the spec.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IS_EQUAL_TO|
|operator|IS_NOT_EQUAL_TO|
|propertyType|bool-comparative|

<h2 id="tocS_ComparativeDatePropertyOperation">ComparativeDatePropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemacomparativedatepropertyoperation"></a>
<a id="schema_ComparativeDatePropertyOperation"></a>
<a id="tocScomparativedatepropertyoperation"></a>
<a id="tocscomparativedatepropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparisonPropertyName|string|true|none|A string specifying the name of the property to be compared against.|
|defaultComparisonValue|string|false|none|A string representing the default value to compare against if the comparison property is not set.|
|defaultValue|string|false|none|A string representing the default value to use if no specific comparison value is set.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that do not have a value set for the property being compared.|
|operationType|string|true|none|A string indicating the type of operation being performed.|
|operator|string|true|none|A string representing the comparison operator used in the operation. Valid values include 'IS_BEFORE' and 'IS_AFTER'.|
|operatorName|string|true|none|A string representing the name of the operator used in the operation.|
|propertyType|string|true|none|A string indicating the type of property operation, which is 'datetime-comparative' for this component.|
|renderSpec|string|false|none|A string providing specifications for rendering the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IS_AFTER|
|operator|IS_BEFORE|
|propertyType|datetime-comparative|

<h2 id="tocS_ComparativeNumberPropertyOperation">ComparativeNumberPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemacomparativenumberpropertyoperation"></a>
<a id="schema_ComparativeNumberPropertyOperation"></a>
<a id="tocScomparativenumberpropertyoperation"></a>
<a id="tocscomparativenumberpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparisonPropertyName|string|true|none|A string representing the name of the property to compare against.|
|defaultValue|string|false|none|A string representing the default value to use if no comparison value is set.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the property being compared.|
|operationType|string|true|none|A string representing the type of operation being performed.|
|operator|string|true|none|A string representing the comparison operator. Valid values include 'IS_EQUAL_TO', 'IS_NOT_EQUAL_TO', 'IS_GREATER_THAN', 'IS_GREATER_THAN_OR_EQUAL_TO', 'IS_LESS_THAN', and 'IS_LESS_THAN_OR_EQUAL_TO'.|
|operatorName|string|true|none|A string representing the name of the operator.|
|propertyType|string|true|none|A string indicating the type of property operation. Defaults to 'number-comparative'.|
|renderSpec|string|false|none|A string that specifies how the operation should be rendered.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IS_EQUAL_TO|
|operator|IS_GREATER_THAN|
|operator|IS_GREATER_THAN_OR_EQUAL_TO|
|operator|IS_LESS_THAN|
|operator|IS_LESS_THAN_OR_EQUAL_TO|
|operator|IS_NOT_EQUAL_TO|
|propertyType|number-comparative|

<h2 id="tocS_ComparativePropertyUpdatedOperation">ComparativePropertyUpdatedOperation</h2>
<!-- backwards compatibility -->
<a id="schemacomparativepropertyupdatedoperation"></a>
<a id="schema_ComparativePropertyUpdatedOperation"></a>
<a id="tocScomparativepropertyupdatedoperation"></a>
<a id="tocscomparativepropertyupdatedoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparisonPropertyName|string|true|none|A string representing the name of the property to compare against.|
|defaultComparisonValue|string|false|none|A string that specifies the default comparison value to use if no comparison value is set.|
|defaultValue|string|false|none|A string that specifies the default value to use if no value is set.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the property.|
|operationType|string|true|none|A string representing the type of operation being performed.|
|operator|string|true|none|A string that defines the comparison operator to use, with valid values being 'IS_BEFORE' and 'IS_AFTER'.|
|operatorName|string|true|none|A string that provides a human-readable name for the operator.|
|propertyType|string|true|none|A string that specifies the type of property operation, with a default value of 'property-updated-comparative'.|
|renderSpec|string|false|none|A string that defines the rendering specification for the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IS_AFTER|
|operator|IS_BEFORE|
|propertyType|property-updated-comparative|

<h2 id="tocS_ComparativeStringPropertyOperation">ComparativeStringPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemacomparativestringpropertyoperation"></a>
<a id="schema_ComparativeStringPropertyOperation"></a>
<a id="tocScomparativestringpropertyoperation"></a>
<a id="tocscomparativestringpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparisonPropertyName|string|true|none|The name of the property to compare against, represented as a string.|
|defaultValue|string|false|none|A string representing the default value to use in the operation if no value is set.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that do not have a value set for the property.|
|operationType|string|true|none|A string representing the type of operation being performed.|
|operator|string|true|none|A string representing the comparison operation to perform. Valid values include 'IS_EQUAL_TO', 'IS_NOT_EQUAL_TO', 'CONTAINS', 'DOES_NOT_CONTAIN', 'STARTS_WITH', and 'ENDS_WITH'.|
|operatorName|string|true|none|A string representing the name of the operator used in the operation.|
|propertyType|string|true|none|A string indicating the type of property operation, defaulting to 'string-comparative'.|
|renderSpec|string|false|none|A string specifying how the operation should be rendered.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|CONTAINS|
|operator|DOES_NOT_CONTAIN|
|operator|ENDS_WITH|
|operator|IS_EQUAL_TO|
|operator|IS_NOT_EQUAL_TO|
|operator|STARTS_WITH|
|propertyType|string-comparative|

<h2 id="tocS_DatePoint">DatePoint</h2>
<!-- backwards compatibility -->
<a id="schemadatepoint"></a>
<a id="schema_DatePoint"></a>
<a id="tocSdatepoint"></a>
<a id="tocsdatepoint"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|An integer representing the day component of the date.|
|hour|integer(int32)|false|none|An integer representing the hour component of the time.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond component of the time.|
|minute|integer(int32)|false|none|An integer representing the minute component of the time.|
|month|integer(int32)|true|none|An integer representing the month component of the date.|
|second|integer(int32)|false|none|An integer representing the second component of the time.|
|timeType|string|true|none|A string indicating the type of time representation, with a default value of 'DATE'.|
|timezoneSource|string|true|none|A string specifying the source of the timezone information. Valid values include 'CUSTOM', 'USER', and 'PORTAL'.|
|year|integer(int32)|true|none|An integer representing the year component of the date.|
|zoneId|string|true|none|A string representing the identifier for the timezone.|

#### Enumerated Values

|Property|Value|
|---|---|
|timeType|DATE|
|timezoneSource|CUSTOM|
|timezoneSource|PORTAL|
|timezoneSource|USER|

<h2 id="tocS_DatePropertyOperation">DatePropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemadatepropertyoperation"></a>
<a id="schema_DatePropertyOperation"></a>
<a id="tocSdatepropertyoperation"></a>
<a id="tocsdatepropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|An integer specifying the day component of the date.|
|defaultValue|string|false|none|A string representing the default value to use if no specific value is set.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the property.|
|month|string|true|none|An integer specifying the month component of the date.|
|operationType|string|true|none|A string indicating the type of operation being performed.|
|operator|string|true|none|A string representing the operation to be performed, with valid values including 'IS_BEFORE', 'IS_AFTER', and 'IS_EQUAL_TO'.|
|operatorName|string|true|none|A string that provides a human-readable name for the operator.|
|propertyType|string|true|none|A string indicating the type of property, which defaults to 'date'.|
|renderSpec|string|false|none|A string that specifies how the operation should be rendered or displayed.|
|year|integer(int32)|true|none|An integer specifying the year component of the date.|

#### Enumerated Values

|Property|Value|
|---|---|
|month|APR|
|month|AUG|
|month|DEC|
|month|FEB|
|month|JAN|
|month|JUL|
|month|JUN|
|month|MAR|
|month|MAY|
|month|NOV|
|month|OCT|
|month|SEP|
|operator|AFTER|
|operator|BEFORE|
|operator|EQUAL|
|propertyType|date|

<h2 id="tocS_DateTimePropertyOperation">DateTimePropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemadatetimepropertyoperation"></a>
<a id="schema_DateTimePropertyOperation"></a>
<a id="tocSdatetimepropertyoperation"></a>
<a id="tocsdatetimepropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValue|string|false|none|A string representing the default value for the operation.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the property.|
|operationType|string|true|none|A string indicating the type of operation being performed.|
|operator|string|true|none|A string representing the operation to be performed, such as 'IS_BEFORE', 'IS_AFTER', 'IS_EQUAL_TO', 'IS_BEFORE_DATE', or 'IS_AFTER_DATE'.|
|operatorName|string|true|none|A string representing the name of the operator used in the operation.|
|propertyType|string|true|none|A string indicating the type of property, with a default value of 'datetime'.|
|renderSpec|string|false|none|A string specifying the rendering specification for the operation.|
|requiresTimeZoneConversion|boolean|true|none|A boolean indicating whether the operation requires time zone conversion.|
|timestamp|integer(int64)|true|none|An integer representing the timestamp for the operation, in int64 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IS_AFTER|
|operator|IS_AFTER_DATE|
|operator|IS_BEFORE|
|operator|IS_BEFORE_DATE|
|operator|IS_EQUAL_TO|
|propertyType|datetime|

<h2 id="tocS_EnumerationPropertyOperation">EnumerationPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemaenumerationpropertyoperation"></a>
<a id="schema_EnumerationPropertyOperation"></a>
<a id="tocSenumerationpropertyoperation"></a>
<a id="tocsenumerationpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValue|string|false|none|A string representing the default value for the operation.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the property.|
|operationType|string|true|none|A string indicating the type of operation being performed.|
|operator|string|true|none|A string specifying the operation to perform, with valid values including 'IS_ANY_OF', 'IS_NONE_OF', 'IS_EXACTLY', 'IS_NOT_EXACTLY', 'CONTAINS_ALL', 'DOES_NOT_CONTAIN_ALL', 'HAS_EVER_BEEN_ANY_OF', 'HAS_NEVER_BEEN_ANY_OF', 'HAS_EVER_BEEN_EXACTLY', 'HAS_NEVER_BEEN_EXACTLY', 'HAS_EVER_CONTAINED_ALL', and 'HAS_NEVER_CONTAINED_ALL'.|
|operatorName|string|true|none|A string representing the name of the operator used in the operation.|
|propertyType|string|true|none|A string indicating the type of property, which is 'enumeration' for this operation.|
|renderSpec|string|false|none|A string that specifies the rendering specifications for the operation.|
|values|[string]|true|none|An array of strings representing the values to be used in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|CONTAINS_ALL|
|operator|DOES_NOT_CONTAIN_ALL|
|operator|HAS_EVER_BEEN_ANY_OF|
|operator|HAS_EVER_BEEN_EXACTLY|
|operator|HAS_EVER_CONTAINED_ALL|
|operator|HAS_NEVER_BEEN_ANY_OF|
|operator|HAS_NEVER_BEEN_EXACTLY|
|operator|HAS_NEVER_CONTAINED_ALL|
|operator|IS_ANY_OF|
|operator|IS_EXACTLY|
|operator|IS_NONE_OF|
|operator|IS_NOT_EXACTLY|
|propertyType|enumeration|

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
|category|string|true|none|The error category.|
|context|object|false|none|Context about the error condition, represented as an object with additional properties.|
|correlationId|string(uuid)|true|none|A unique identifier for the request. Include this value with any error reports or support tickets.|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|Further information about the error, represented as an array of ErrorDetail objects.|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate.|
|subCategory|string|false|none|A specific category that contains more specific detail about the error.|

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
|code|string|false|none|The status code associated with the error detail. This is a string property.|
|context|object|false|none|Context about the error condition, represented as an object where each key is a context name and each value is an array of strings providing additional details.|
|in|string|false|none|The name of the field or parameter in which the error was found. This is a string property.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate. This is a required string property.|
|subCategory|string|false|none|A specific category that contains more specific detail about the error. This is a string property.|

<h2 id="tocS_ExternalBehavioralEventPropertyCreate">ExternalBehavioralEventPropertyCreate</h2>
<!-- backwards compatibility -->
<a id="schemaexternalbehavioraleventpropertycreate"></a>
<a id="schema_ExternalBehavioralEventPropertyCreate"></a>
<a id="tocSexternalbehavioraleventpropertycreate"></a>
<a id="tocsexternalbehavioraleventpropertycreate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A string providing additional information about the property.|
|label|string|true|none|A string representing the display name of the property. This field is required.|
|name|string|false|none|A string representing the unique name of the property.|
|options|[[OptionInput](#schemaoptioninput)]|false|none|An array of OptionInput objects that define the possible values for the property.|
|type|string|true|none|A string indicating the data type of the property. This field is required.|

<h2 id="tocS_ExternalBehavioralEventPropertyDefinitionPatch">ExternalBehavioralEventPropertyDefinitionPatch</h2>
<!-- backwards compatibility -->
<a id="schemaexternalbehavioraleventpropertydefinitionpatch"></a>
<a id="schema_ExternalBehavioralEventPropertyDefinitionPatch"></a>
<a id="tocSexternalbehavioraleventpropertydefinitionpatch"></a>
<a id="tocsexternalbehavioraleventpropertydefinitionpatch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A string providing additional information about the event property.|
|displayOrder|integer(int32)|false|none|none|
|hidden|boolean|false|none|none|
|label|string|false|none|A string representing the display name of the event property.|
|options|[[OptionInput](#schemaoptioninput)]|false|none|An array of OptionInput objects, each defining a selectable option for the event property.|

<h2 id="tocS_ExternalBehavioralEventTypeDefinition">ExternalBehavioralEventTypeDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaexternalbehavioraleventtypedefinition"></a>
<a id="schema_ExternalBehavioralEventTypeDefinition"></a>
<a id="tocSexternalbehavioraleventtypedefinition"></a>
<a id="tocsexternalbehavioraleventtypedefinition"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|A boolean indicating whether the event type is archived.|
|associations|[[AssociationDefinition](#schemaassociationdefinition)]|true|none|An array of association definitions related to the event type.|
|comboEventRules|[ComboEventRuleBranch](#schemacomboeventrulebranch)|false|none|none|
|createdAt|string(date-time)|false|none|A string representing the date and time when the event type was created, in ISO 8601 format.|
|createdUserId|integer(int32)|false|none|An integer representing the ID of the user who created the event type.|
|customMatchingId|[ExternalObjectResolutionMappingResponse](#schemaexternalobjectresolutionmappingresponse)|false|none|none|
|description|string|false|none|A string providing a description of the event type.|
|detailTemplate|string|false|none|A string template used for the details of the event.|
|fullyQualifiedName|string|true|none|A string representing the fully qualified name of the event type.|
|headerTemplate|string|false|none|A string template used for the header of the event.|
|id|string|true|none|A string representing the unique identifier of the event type.|
|labels|[BehavioralEventTypeDefinitionLabels](#schemabehavioraleventtypedefinitionlabels)|true|none|none|
|name|string|true|none|A string representing the name of the event type.|
|objectTypeId|string|true|none|A string representing the object type ID associated with the event type.|
|primaryObject|string|false|none|A string representing the primary object associated with the event type.|
|primaryObjectId|string|false|none|A string representing the ID of the primary object associated with the event type.|
|properties|[[Property](#schemaproperty)]|true|none|An array of property objects associated with the event type.|
|trackingType|string|false|none|A string indicating the tracking type of the event. Valid values include 'VISITED_URL', 'CLICKED_ELEMENT', 'CUSTOM_SCRIPT', 'MANUAL', 'IMPORT', 'PROPERTY_CHANGE', 'COMBO_EVENT', 'WEBHOOK', 'APP_EVENT', 'AUTOCAPTURE_EVENT', 'CUSTOM_SIGNAL', and 'POLLING'.|
|updatedAt|string(date-time)|false|none|A string representing the date and time when the event type was last updated, in ISO 8601 format.|
|updatedUserId|integer(int32)|false|none|An integer representing the ID of the user who last updated the event type.|

#### Enumerated Values

|Property|Value|
|---|---|
|trackingType|APP_EVENT|
|trackingType|AUTOCAPTURE_EVENT|
|trackingType|CLICKED_ELEMENT|
|trackingType|COMBO_EVENT|
|trackingType|CUSTOM_SCRIPT|
|trackingType|CUSTOM_SIGNAL|
|trackingType|IMPORT|
|trackingType|MANUAL|
|trackingType|POLLING|
|trackingType|PROPERTY_CHANGE|
|trackingType|VISITED_URL|
|trackingType|WEBHOOK|

<h2 id="tocS_ExternalBehavioralEventTypeDefinitionEgg">ExternalBehavioralEventTypeDefinitionEgg</h2>
<!-- backwards compatibility -->
<a id="schemaexternalbehavioraleventtypedefinitionegg"></a>
<a id="schema_ExternalBehavioralEventTypeDefinitionEgg"></a>
<a id="tocSexternalbehavioraleventtypedefinitionegg"></a>
<a id="tocsexternalbehavioraleventtypedefinitionegg"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customMatchingId|[ExternalObjectResolutionMappingRequest](#schemaexternalobjectresolutionmappingrequest)|false|none|none|
|description|string|false|none|A string providing a description of the event type.|
|includeDefaultProperties|boolean|true|none|A boolean indicating whether default properties should be included.|
|label|string|true|none|A string representing the label of the event type.|
|name|string|false|none|A string representing the name of the event type.|
|primaryObject|string|false|none|A string indicating the primary object associated with the event type.|
|propertyDefinitions|[[ExternalBehavioralEventPropertyCreate](#schemaexternalbehavioraleventpropertycreate)]|true|none|An array of property definitions, each represented by an ExternalBehavioralEventPropertyCreate object.|

<h2 id="tocS_ExternalBehavioralEventTypeDefinitionPatch">ExternalBehavioralEventTypeDefinitionPatch</h2>
<!-- backwards compatibility -->
<a id="schemaexternalbehavioraleventtypedefinitionpatch"></a>
<a id="schema_ExternalBehavioralEventTypeDefinitionPatch"></a>
<a id="tocSexternalbehavioraleventtypedefinitionpatch"></a>
<a id="tocsexternalbehavioraleventtypedefinitionpatch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A string providing a description of the event type.|
|detailTemplate|string|false|none|A string specifying the template for the details of the event type.|
|headerTemplate|string|false|none|A string defining the template for the header of the event type.|
|label|string|false|none|A string representing the label of the event type.|
|propertyOrder|[[PropertyPatch](#schemapropertypatch)]|true|none|An array of PropertyPatch objects that specifies the order of properties for the event type.|

<h2 id="tocS_ExternalObjectResolutionMappingRequest">ExternalObjectResolutionMappingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexternalobjectresolutionmappingrequest"></a>
<a id="schema_ExternalObjectResolutionMappingRequest"></a>
<a id="tocSexternalobjectresolutionmappingrequest"></a>
<a id="tocsexternalobjectresolutionmappingrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|primaryObjectRule|[ExternalPrimaryObjectResolutionRule](#schemaexternalprimaryobjectresolutionrule)|true|none|none|

<h2 id="tocS_ExternalObjectResolutionMappingResponse">ExternalObjectResolutionMappingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexternalobjectresolutionmappingresponse"></a>
<a id="schema_ExternalObjectResolutionMappingResponse"></a>
<a id="tocSexternalobjectresolutionmappingresponse"></a>
<a id="tocsexternalobjectresolutionmappingresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|primaryObjectRule|[ExternalPrimaryObjectResolutionRule](#schemaexternalprimaryobjectresolutionrule)|true|none|none|

<h2 id="tocS_ExternalPrimaryObjectResolutionRule">ExternalPrimaryObjectResolutionRule</h2>
<!-- backwards compatibility -->
<a id="schemaexternalprimaryobjectresolutionrule"></a>
<a id="schema_ExternalPrimaryObjectResolutionRule"></a>
<a id="tocSexternalprimaryobjectresolutionrule"></a>
<a id="tocsexternalprimaryobjectresolutionrule"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventPropertyName|string|true|none|The name of the property on the event that is used for resolution. It is a string.|
|targetObjectPropertyName|string|true|none|The name of the property on the target object that is used for resolution. It is a string.|

<h2 id="tocS_FiscalQuarter">FiscalQuarter</h2>
<!-- backwards compatibility -->
<a id="schemafiscalquarter"></a>
<a id="schema_FiscalQuarter"></a>
<a id="tocSfiscalquarter"></a>
<a id="tocsfiscalquarter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|An integer representing the day of the fiscal quarter.|
|hour|integer(int32)|false|none|An integer representing the hour of the day.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond within the second.|
|minute|integer(int32)|false|none|An integer representing the minute within the hour.|
|month|integer(int32)|true|none|An integer representing the month of the fiscal quarter.|
|referenceType|string|true|none|A string that indicates the type of reference, which is 'FISCAL_QUARTER' for this component.|
|second|integer(int32)|false|none|An integer representing the second within the minute.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|FISCAL_QUARTER|

<h2 id="tocS_FiscalYear">FiscalYear</h2>
<!-- backwards compatibility -->
<a id="schemafiscalyear"></a>
<a id="schema_FiscalYear"></a>
<a id="tocSfiscalyear"></a>
<a id="tocsfiscalyear"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|An integer representing the day of the fiscal year.|
|hour|integer(int32)|false|none|An integer representing the hour component of the time.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond component of the time.|
|minute|integer(int32)|false|none|An integer representing the minute component of the time.|
|month|integer(int32)|true|none|An integer representing the month of the fiscal year.|
|referenceType|string|true|none|A string indicating the type of reference, defaulting to 'FISCAL_YEAR'.|
|second|integer(int32)|false|none|An integer representing the second component of the time.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|FISCAL_YEAR|

<h2 id="tocS_IndexOffset">IndexOffset</h2>
<!-- backwards compatibility -->
<a id="schemaindexoffset"></a>
<a id="schema_IndexOffset"></a>
<a id="tocSindexoffset"></a>
<a id="tocsindexoffset"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|days|integer(int32)|false|none|An integer representing the number of days for the time offset.|
|hours|integer(int32)|false|none|An integer representing the number of hours for the time offset.|
|milliseconds|integer(int32)|false|none|An integer representing the number of milliseconds for the time offset.|
|minutes|integer(int32)|false|none|An integer representing the number of minutes for the time offset.|
|months|integer(int32)|false|none|An integer representing the number of months for the time offset.|
|quarters|integer(int32)|false|none|An integer representing the number of quarters for the time offset.|
|seconds|integer(int32)|false|none|An integer representing the number of seconds for the time offset.|
|weeks|integer(int32)|false|none|An integer representing the number of weeks for the time offset.|
|years|integer(int32)|false|none|An integer representing the number of years for the time offset.|

<h2 id="tocS_IndexedTimePoint">IndexedTimePoint</h2>
<!-- backwards compatibility -->
<a id="schemaindexedtimepoint"></a>
<a id="schema_IndexedTimePoint"></a>
<a id="tocSindexedtimepoint"></a>
<a id="tocsindexedtimepoint"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexReference|[NowReference](#schemanowreference) \| [TodayReference](#schematodayreference) \| [WeekReference](#schemaweekreference) \| [MonthReference](#schemamonthreference) \| [QuarterReference](#schemaquarterreference) \| [FiscalQuarter](#schemafiscalquarter) \| [YearReference](#schemayearreference) \| [FiscalYear](#schemafiscalyear)|true|none|An object that serves as the reference point for the indexed time, which can be one of several types such as NowReference, TodayReference, WeekReference, MonthReference, QuarterReference, FiscalQuarter, YearReference, or FiscalYear.|
|offset|[IndexOffset](#schemaindexoffset)|false|none|none|
|shouldGenerateRefreshTime|boolean|false|none|A boolean indicating whether a refresh time should be generated.|
|timeType|string|true|none|A string indicating the type of time point, defaulting to 'INDEXED'.|
|timezoneSource|string|true|none|A string specifying the source of the timezone, with possible values including 'CUSTOM', 'USER', and 'PORTAL'.|
|zoneId|string|true|none|A string representing the identifier of the timezone.|

#### Enumerated Values

|Property|Value|
|---|---|
|timeType|INDEXED|
|timezoneSource|CUSTOM|
|timezoneSource|PORTAL|
|timezoneSource|USER|

<h2 id="tocS_MonthReference">MonthReference</h2>
<!-- backwards compatibility -->
<a id="schemamonthreference"></a>
<a id="schema_MonthReference"></a>
<a id="tocSmonthreference"></a>
<a id="tocsmonthreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|An integer representing the day of the month.|
|hour|integer(int32)|false|none|An integer representing the hour of the day.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond within the second.|
|minute|integer(int32)|false|none|An integer representing the minute within the hour.|
|referenceType|string|true|none|A string that specifies the type of reference, which is 'MONTH' for this component.|
|second|integer(int32)|false|none|An integer representing the second within the minute.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|MONTH|

<h2 id="tocS_MultiStringPropertyOperation">MultiStringPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemamultistringpropertyoperation"></a>
<a id="schema_MultiStringPropertyOperation"></a>
<a id="tocSmultistringpropertyoperation"></a>
<a id="tocsmultistringpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coalescingRefineBy|[NumOccurrencesRefineBy](#schemanumoccurrencesrefineby) \| [SetOccurrencesRefineBy](#schemasetoccurrencesrefineby)|true|none|A refinement option for coalescing operations, which can be either 'NumOccurrencesRefineBy' or 'SetOccurrencesRefineBy'.|
|defaultValue|string|false|none|A default value to be used if no other value is set.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included in the operation.|
|operationType|string|true|none|The type of operation being performed.|
|operator|string|true|none|The operator used in the operation. Valid values include 'IS_EQUAL_TO', 'IS_NOT_EQUAL_TO', 'CONTAINS', 'CONTAINS_EXACTLY', 'DOES_NOT_CONTAIN', 'DOES_NOT_CONTAIN_EXACTLY', 'STARTS_WITH', and 'ENDS_WITH'.|
|operatorName|string|true|none|The name of the operator used in the operation.|
|propertyType|string|true|none|The type of property being operated on, which is 'multistring' for this operation.|
|pruningRefineBy|[RelativeComparativeTimestampRefineBy](#schemarelativecomparativetimestamprefineby) \| [RelativeRangedTimestampRefineBy](#schemarelativerangedtimestamprefineby) \| [AbsoluteComparativeTimestampRefineBy](#schemaabsolutecomparativetimestamprefineby) \| [AbsoluteRangedTimestampRefineBy](#schemaabsoluterangedtimestamprefineby) \| [AllHistoryRefineBy](#schemaallhistoryrefineby) \| [TimePointOperation](#schematimepointoperation) \| [RangedTimeOperation](#schemarangedtimeoperation)|false|none|A refinement option that further specifies the operation, which can be one of several types such as 'RelativeComparativeTimestampRefineBy', 'RelativeRangedTimestampRefineBy', 'AbsoluteComparativeTimestampRefineBy', 'AbsoluteRangedTimestampRefineBy', 'AllHistoryRefineBy', 'TimePointOperation', or 'RangedTimeOperation'.|
|renderSpec|string|false|none|A specification for how the operation should be rendered.|
|values|[string]|true|none|An array of string values that are involved in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|CONTAINS|
|operator|CONTAINS_EXACTLY|
|operator|DOES_NOT_CONTAIN|
|operator|DOES_NOT_CONTAIN_EXACTLY|
|operator|ENDS_WITH|
|operator|IS_EQUAL_TO|
|operator|IS_NOT_EQUAL_TO|
|operator|STARTS_WITH|
|propertyType|multistring|

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
|after|string|true|none|A string token used as a cursor to fetch the next page of results. This token is typically returned in the response of a paginated API call.|
|link|string|false|none|A URL string that points to the next page of results. Clients can use this link to make a request for the subsequent set of data.|

<h2 id="tocS_NowReference">NowReference</h2>
<!-- backwards compatibility -->
<a id="schemanowreference"></a>
<a id="schema_NowReference"></a>
<a id="tocSnowreference"></a>
<a id="tocsnowreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hour|integer(int32)|false|none|An integer representing the hour of the current time.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond of the current time.|
|minute|integer(int32)|false|none|An integer representing the minute of the current time.|
|referenceType|string|true|none|A string indicating the type of reference, which is always 'NOW' for this component.|
|second|integer(int32)|false|none|An integer representing the second of the current time.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|NOW|

<h2 id="tocS_NumOccurrencesRefineBy">NumOccurrencesRefineBy</h2>
<!-- backwards compatibility -->
<a id="schemanumoccurrencesrefineby"></a>
<a id="schema_NumOccurrencesRefineBy"></a>
<a id="tocSnumoccurrencesrefineby"></a>
<a id="tocsnumoccurrencesrefineby"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxOccurrences|integer(int32)|false|none|An integer indicating the maximum number of times an event can occur.|
|minOccurrences|integer(int32)|false|none|An integer indicating the minimum number of times an event must occur.|
|type|string|true|none|A string that specifies the type of refinement, which is 'NumOccurrencesRefineBy'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|NumOccurrencesRefineBy|

<h2 id="tocS_NumberPropertyOperation">NumberPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemanumberpropertyoperation"></a>
<a id="schema_NumberPropertyOperation"></a>
<a id="tocSnumberpropertyoperation"></a>
<a id="tocsnumberpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValue|string|false|none|A string representing the default value for the operation.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included in the operation.|
|operationType|string|true|none|A string that specifies the type of operation being performed.|
|operator|string|true|none|A string representing the operation to be performed on the number property. Valid values include 'IS_EQUAL_TO', 'IS_NOT_EQUAL_TO', 'IS_GREATER_THAN', 'IS_GREATER_THAN_OR_EQUAL_TO', 'IS_LESS_THAN', 'IS_LESS_THAN_OR_EQUAL_TO', 'HAS_EVER_BEEN_EQUAL_TO', and 'HAS_NEVER_BEEN_EQUAL_TO'.|
|operatorName|string|true|none|A string representing the name of the operator used in the operation.|
|propertyType|string|true|none|A string that specifies the type of property operation, with a default value of 'number'.|
|renderSpec|string|false|none|A string that provides specifications for rendering the operation.|
|value|number|true|none|A number that represents the value to be used in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|HAS_EVER_BEEN_EQUAL_TO|
|operator|HAS_NEVER_BEEN_EQUAL_TO|
|operator|IS_EQUAL_TO|
|operator|IS_GREATER_THAN|
|operator|IS_GREATER_THAN_OR_EQUAL_TO|
|operator|IS_LESS_THAN|
|operator|IS_LESS_THAN_OR_EQUAL_TO|
|operator|IS_NOT_EQUAL_TO|
|propertyType|number|

<h2 id="tocS_Option">Option</h2>
<!-- backwards compatibility -->
<a id="schemaoption"></a>
<a id="schema_Option"></a>
<a id="tocSoption"></a>
<a id="tocsoption"></a>

```json
null
```

A HubSpot property option

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A detailed description of the option, providing additional context.|
|displayOrder|integer(int32)|false|none|An integer that determines the order in which the option appears relative to other options.|
|hidden|boolean|true|none|A boolean indicating whether the option is hidden from users.|
|label|string|true|none|The display name of the option, shown to users.|
|value|string|true|none|The internal value associated with the option, used in data processing.|

<h2 id="tocS_OptionInput">OptionInput</h2>
<!-- backwards compatibility -->
<a id="schemaoptioninput"></a>
<a id="schema_OptionInput"></a>
<a id="tocSoptioninput"></a>
<a id="tocsoptioninput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A string providing additional information about the option.|
|displayOrder|integer(int32)|true|none|An integer indicating the order in which the option should be displayed relative to other options.|
|hidden|boolean|true|none|A boolean indicating whether the option is hidden from view.|
|label|string|true|none|A string representing the display label for the option.|
|value|string|true|none|A string representing the unique value associated with the option.|

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
|before|string|true|none|A string token used as a cursor to fetch the previous page of results.|
|link|string|false|none|A URL string that provides the link to access the previous page of results.|

<h2 id="tocS_Property">Property</h2>
<!-- backwards compatibility -->
<a id="schemaproperty"></a>
<a id="schema_Property"></a>
<a id="tocSproperty"></a>
<a id="tocsproperty"></a>

```json
null
```

A HubSpot property

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|Indicates whether the property is archived.|
|archivedAt|string(date-time)|false|none|The date and time when this property was archived, in ISO 8601 format.|
|calculated|boolean|false|none|Indicates whether the property is calculated.|
|calculationFormula|string|false|none|The formula used to calculate the property's value, if applicable.|
|createdAt|string(date-time)|false|none|The date and time when this property was created, in ISO 8601 format.|
|createdUserId|string|false|none|The ID of the user who created this property.|
|currencyPropertyName|string|false|none|The name of the currency property associated with this property.|
|dataSensitivity|string|false|none|The sensitivity level of the data, with valid values including 'non_sensitive', 'sensitive', and 'highly_sensitive'.|
|dateDisplayHint|string|false|none|A hint for displaying date properties, with valid values including 'absolute', 'absolute_with_relative', 'time_since', and 'time_until'.|
|description|string|true|none|A description of the property.|
|displayOrder|integer(int32)|false|none|The order in which this property is displayed relative to other properties.|
|externalOptions|boolean|false|none|Indicates whether the property options are external.|
|fieldType|string|true|none|The field type of the property.|
|formField|boolean|false|none|Indicates whether the property is a form field.|
|groupName|string|true|none|The name of the group to which this property belongs.|
|hasUniqueValue|boolean|false|none|Indicates whether the property has a unique value.|
|hidden|boolean|false|none|Indicates whether the property is hidden.|
|hubspotDefined|boolean|false|none|Indicates whether the property is defined by HubSpot.|
|label|string|true|none|The display label for the property.|
|modificationMetadata|[PropertyModificationMetadata](#schemapropertymodificationmetadata)|false|none|none|
|name|string|true|none|The unique name of the property.|
|numberDisplayHint|string|false|none|A hint for displaying number properties, with valid values including 'unformatted', 'formatted', 'currency', 'percentage', 'duration', and 'probability'.|
|options|[[Option](#schemaoption)]|true|none|An array of options available for this property, applicable if the property supports multiple values.|
|referencedObjectType|string|false|none|The type of object that this property references.|
|sensitiveDataCategories|[string]|false|none|An array of categories indicating the sensitivity of the data.|
|showCurrencySymbol|boolean|false|none|Indicates whether a currency symbol is shown for the property.|
|textDisplayHint|string|false|none|A hint for displaying text properties, with valid values including 'unformatted_single_line', 'multi_line', 'email', 'phone_number', 'domain_name', 'ip_address', 'physical_address', and 'postal_code'.|
|type|string|true|none|The data type of the property.|
|updatedAt|string(date-time)|false|none|The date and time when this property was last updated, in ISO 8601 format.|
|updatedUserId|string|false|none|The ID of the user who last updated this property.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataSensitivity|highly_sensitive|
|dataSensitivity|non_sensitive|
|dataSensitivity|sensitive|
|dateDisplayHint|absolute|
|dateDisplayHint|absolute_with_relative|
|dateDisplayHint|time_since|
|dateDisplayHint|time_until|
|numberDisplayHint|currency|
|numberDisplayHint|duration|
|numberDisplayHint|formatted|
|numberDisplayHint|percentage|
|numberDisplayHint|probability|
|numberDisplayHint|unformatted|
|textDisplayHint|domain_name|
|textDisplayHint|email|
|textDisplayHint|ip_address|
|textDisplayHint|multi_line|
|textDisplayHint|phone_number|
|textDisplayHint|physical_address|
|textDisplayHint|postal_code|
|textDisplayHint|unformatted_single_line|

<h2 id="tocS_PropertyFilter">PropertyFilter</h2>
<!-- backwards compatibility -->
<a id="schemapropertyfilter"></a>
<a id="schema_PropertyFilter"></a>
<a id="tocSpropertyfilter"></a>
<a id="tocspropertyfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[PropertyFilterContext](#schemapropertyfiltercontext)|false|none|none|
|filterInsightsId|integer(int32)|false|none|An integer representing the ID for insights related to the filter.|
|filterType|string|true|none|A string that specifies the type of filter being applied. The default value is 'PROPERTY'.|
|frameworkFilterId|integer(int64)|false|none|An integer that uniquely identifies the framework filter.|
|operation|[BoolPropertyOperation](#schemaboolpropertyoperation) \| [NumberPropertyOperation](#schemanumberpropertyoperation) \| [StringPropertyOperation](#schemastringpropertyoperation) \| [DateTimePropertyOperation](#schemadatetimepropertyoperation) \| [RangedDatePropertyOperation](#schemarangeddatepropertyoperation) \| [ComparativeDatePropertyOperation](#schemacomparativedatepropertyoperation) \| [ComparativeBoolPropertyOperation](#schemacomparativeboolpropertyoperation) \| [ComparativeNumberPropertyOperation](#schemacomparativenumberpropertyoperation) \| [ComparativeStringPropertyOperation](#schemacomparativestringpropertyoperation) \| [ComparativePropertyUpdatedOperation](#schemacomparativepropertyupdatedoperation) \| [RollingDateRangePropertyOperation](#schemarollingdaterangepropertyoperation) \| [RollingPropertyUpdatedOperation](#schemarollingpropertyupdatedoperation) \| [EnumerationPropertyOperation](#schemaenumerationpropertyoperation) \| [AllPropertyTypesOperation](#schemaallpropertytypesoperation) \| [RangedNumberPropertyOperation](#schemarangednumberpropertyoperation) \| [MultiStringPropertyOperation](#schemamultistringpropertyoperation) \| [DatePropertyOperation](#schemadatepropertyoperation) \| [CalendarDatePropertyOperation](#schemacalendardatepropertyoperation) \| [TimePointOperation](#schematimepointoperation) \| [RangedTimeOperation](#schemarangedtimeoperation) \| [RegexPropertyOperation](#schemaregexpropertyoperation)|true|none|Defines the operation to be performed on the property. It can be one of several types, such as BoolPropertyOperation, NumberPropertyOperation, StringPropertyOperation, etc.|
|property|string|true|none|A string representing the name of the property to which the filter is applied.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|PROPERTY|

<h2 id="tocS_PropertyFilterContext">PropertyFilterContext</h2>
<!-- backwards compatibility -->
<a id="schemapropertyfiltercontext"></a>
<a id="schema_PropertyFilterContext"></a>
<a id="tocSpropertyfiltercontext"></a>
<a id="tocspropertyfiltercontext"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectTypeId|string|true|none|A string that uniquely identifies the type of object to which the property filter is applied.|

<h2 id="tocS_PropertyModificationMetadata">PropertyModificationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapropertymodificationmetadata"></a>
<a id="schema_PropertyModificationMetadata"></a>
<a id="tocSpropertymodificationmetadata"></a>
<a id="tocspropertymodificationmetadata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archivable|boolean|true|none|A boolean indicating whether the property can be archived.|
|readOnlyDefinition|boolean|true|none|A boolean indicating whether the definition of the property is read-only.|
|readOnlyOptions|boolean|false|none|A boolean indicating whether the options of the property are read-only.|
|readOnlyValue|boolean|true|none|A boolean indicating whether the value of the property is read-only.|

<h2 id="tocS_PropertyPatch">PropertyPatch</h2>
<!-- backwards compatibility -->
<a id="schemapropertypatch"></a>
<a id="schema_PropertyPatch"></a>
<a id="tocSpropertypatch"></a>
<a id="tocspropertypatch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A string providing a detailed description of the property.|
|displayOrder|integer(int32)|false|none|An integer indicating the order in which the property should be displayed.|
|hidden|boolean|false|none|A boolean indicating whether the property is hidden from view.|
|label|string|false|none|A human-readable label for the property, represented as a string.|
|name|string|true|none|The unique name of the property being modified. It is a required string field.|
|options|[[OptionInput](#schemaoptioninput)]|false|none|An array of OptionInput objects, each representing possible options for the property.|

<h2 id="tocS_PropertyReferencedTime">PropertyReferencedTime</h2>
<!-- backwards compatibility -->
<a id="schemapropertyreferencedtime"></a>
<a id="schema_PropertyReferencedTime"></a>
<a id="tocSpropertyreferencedtime"></a>
<a id="tocspropertyreferencedtime"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|property|string|true|none|A string that indicates the property name used for referencing the time.|
|referenceType|string|true|none|A string that defines the type of reference, with valid values including 'VALUE', 'UPDATED_AT', 'ANNIVERSARY', 'VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION', and 'ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION'.|
|timeType|string|true|none|A string indicating the type of time reference, with a default value of 'PROPERTY_REFERENCED'.|
|timezoneSource|string|true|none|A string specifying the source of the timezone, which can be 'CUSTOM', 'USER', or 'PORTAL'.|
|zoneId|string|true|none|A string representing the identifier of the timezone.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|ANNIVERSARY|
|referenceType|ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION|
|referenceType|UPDATED_AT|
|referenceType|VALUE|
|referenceType|VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION|
|timeType|PROPERTY_REFERENCED|
|timezoneSource|CUSTOM|
|timezoneSource|PORTAL|
|timezoneSource|USER|

<h2 id="tocS_QuarterReference">QuarterReference</h2>
<!-- backwards compatibility -->
<a id="schemaquarterreference"></a>
<a id="schema_QuarterReference"></a>
<a id="tocSquarterreference"></a>
<a id="tocsquarterreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|An integer representing the day of the month.|
|hour|integer(int32)|false|none|An integer representing the hour of the day.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond of the second.|
|minute|integer(int32)|false|none|An integer representing the minute of the hour.|
|month|integer(int32)|true|none|An integer representing the month of the quarter.|
|referenceType|string|true|none|A string that specifies the type of reference. The default value is 'QUARTER'.|
|second|integer(int32)|false|none|An integer representing the second of the minute.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|QUARTER|

<h2 id="tocS_RangedDatePropertyOperation">RangedDatePropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemarangeddatepropertyoperation"></a>
<a id="schema_RangedDatePropertyOperation"></a>
<a id="tocSrangeddatepropertyoperation"></a>
<a id="tocsrangeddatepropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValue|string|false|none|A string representing the default value for the operation.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the property.|
|lowerBoundTimestamp|integer(int64)|true|none|An integer representing the lower bound of the date range as a Unix timestamp in milliseconds.|
|operationType|string|true|none|A string representing the type of operation being performed.|
|operator|string|true|none|A string representing the operation to be performed, with valid values including 'IS_BETWEEN' and 'IS_NOT_BETWEEN'.|
|operatorName|string|true|none|A string representing the name of the operator used in the operation.|
|propertyType|string|true|none|A string indicating the type of property, defaulting to 'datetime-ranged'.|
|renderSpec|string|false|none|A string specifying the rendering specification for the operation.|
|requiresTimeZoneConversion|boolean|true|none|A boolean indicating whether time zone conversion is required for this operation.|
|upperBoundTimestamp|integer(int64)|true|none|An integer representing the upper bound of the date range as a Unix timestamp in milliseconds.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IS_BETWEEN|
|operator|IS_NOT_BETWEEN|
|propertyType|datetime-ranged|

<h2 id="tocS_RangedNumberPropertyOperation">RangedNumberPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemarangednumberpropertyoperation"></a>
<a id="schema_RangedNumberPropertyOperation"></a>
<a id="tocSrangednumberpropertyoperation"></a>
<a id="tocsrangednumberpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValue|string|false|none|A string representing the default value for the operation.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included in the operation.|
|lowerBound|number|true|none|A number that specifies the lower bound of the range.|
|operationType|string|true|none|A string that describes the type of operation being performed.|
|operator|string|true|none|A string that defines the operation to be performed, with valid values including 'IS_BETWEEN' and 'IS_NOT_BETWEEN'.|
|operatorName|string|true|none|A string representing the name of the operator used in the operation.|
|propertyType|string|true|none|A string that specifies the type of property operation, with a default value of 'number-ranged'.|
|renderSpec|string|false|none|A string that provides specifications for rendering the operation.|
|upperBound|number|true|none|A number that specifies the upper bound of the range.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IS_BETWEEN|
|operator|IS_NOT_BETWEEN|
|propertyType|number-ranged|

<h2 id="tocS_RangedTimeOperation">RangedTimeOperation</h2>
<!-- backwards compatibility -->
<a id="schemarangedtimeoperation"></a>
<a id="schema_RangedTimeOperation"></a>
<a id="tocSrangedtimeoperation"></a>
<a id="tocsrangedtimeoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValue|string|false|none|A string representing the default value for the operation.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set.|
|lowerBoundEndpointBehavior|string|true|none|A string indicating the behavior of the lower bound endpoint, with valid values 'INCLUSIVE' and 'EXCLUSIVE'.|
|lowerBoundTimePoint|[DatePoint](#schemadatepoint) \| [IndexedTimePoint](#schemaindexedtimepoint) \| [PropertyReferencedTime](#schemapropertyreferencedtime)|true|none|The lower bound time point for the operation, which can be a DatePoint, IndexedTimePoint, or PropertyReferencedTime.|
|operationType|string|true|none|A string indicating the type of operation being performed.|
|operator|string|true|none|A string representing the operator used in the operation. Valid values include 'IS_BETWEEN' and 'IS_NOT_BETWEEN'.|
|operatorName|string|true|none|A string representing the name of the operator used in the operation.|
|propertyParser|string|true|none|A string that specifies the parser for the property. Valid values include 'VALUE', 'UPDATED_AT', 'ANNIVERSARY', 'VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION', and 'ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION'.|
|propertyType|string|true|none|A string that specifies the type of property, with a default value of 'rangedtime'.|
|renderSpec|string|false|none|A string that provides specifications for rendering.|
|type|string|true|none|A string indicating the type of the operation.|
|upperBoundEndpointBehavior|string|true|none|A string indicating the behavior of the upper bound endpoint, with valid values 'INCLUSIVE' and 'EXCLUSIVE'.|
|upperBoundTimePoint|[DatePoint](#schemadatepoint) \| [IndexedTimePoint](#schemaindexedtimepoint) \| [PropertyReferencedTime](#schemapropertyreferencedtime)|true|none|The upper bound time point for the operation, which can be a DatePoint, IndexedTimePoint, or PropertyReferencedTime.|

#### Enumerated Values

|Property|Value|
|---|---|
|lowerBoundEndpointBehavior|EXCLUSIVE|
|lowerBoundEndpointBehavior|INCLUSIVE|
|operator|IS_BETWEEN|
|operator|IS_NOT_BETWEEN|
|propertyParser|ANNIVERSARY|
|propertyParser|ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION|
|propertyParser|UPDATED_AT|
|propertyParser|VALUE|
|propertyParser|VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION|
|propertyType|rangedtime|
|upperBoundEndpointBehavior|EXCLUSIVE|
|upperBoundEndpointBehavior|INCLUSIVE|

<h2 id="tocS_RegexPropertyOperation">RegexPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemaregexpropertyoperation"></a>
<a id="schema_RegexPropertyOperation"></a>
<a id="tocSregexpropertyoperation"></a>
<a id="tocsregexpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caseSensitive|boolean|true|none|A boolean indicating whether the regex matching should be case-sensitive.|
|defaultValue|string|false|none|A string specifying the default value to be used if no value is set.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean that determines whether objects with no value set should be included in the operation.|
|operationType|string|true|none|A string indicating the type of operation being performed.|
|operator|string|true|none|A string specifying the operation to perform, with valid values being 'MATCHES_REGEX' and 'DOES_NOT_MATCH_REGEX'.|
|operatorName|string|true|none|A string representing the name of the operator used in the operation.|
|pattern|string|true|none|A string representing the regex pattern to be used in the operation.|
|propertyType|string|true|none|A string indicating the type of property operation, which is 'regex' for this component.|
|renderSpec|string|false|none|A string that may define how the operation is rendered, though its specific use is not detailed.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|DOES_NOT_MATCH_REGEX|
|operator|MATCHES_REGEX|
|propertyType|regex|

<h2 id="tocS_RelativeComparativeTimestampRefineBy">RelativeComparativeTimestampRefineBy</h2>
<!-- backwards compatibility -->
<a id="schemarelativecomparativetimestamprefineby"></a>
<a id="schema_RelativeComparativeTimestampRefineBy"></a>
<a id="tocSrelativecomparativetimestamprefineby"></a>
<a id="tocsrelativecomparativetimestamprefineby"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparison|string|true|none|A string indicating the type of comparison to be made, with valid values being 'BEFORE' or 'AFTER'.|
|timeOffset|[TimeOffset](#schematimeoffset)|true|none|none|
|type|string|true|none|A string indicating the type of refinement operation, which is 'RelativeComparativeTimestampRefineBy'.|

#### Enumerated Values

|Property|Value|
|---|---|
|comparison|AFTER|
|comparison|BEFORE|
|type|RelativeComparativeTimestampRefineBy|

<h2 id="tocS_RelativeRangedTimestampRefineBy">RelativeRangedTimestampRefineBy</h2>
<!-- backwards compatibility -->
<a id="schemarelativerangedtimestamprefineby"></a>
<a id="schema_RelativeRangedTimestampRefineBy"></a>
<a id="tocSrelativerangedtimestamprefineby"></a>
<a id="tocsrelativerangedtimestamprefineby"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lowerBoundOffset|[TimeOffset](#schematimeoffset)|true|none|none|
|rangeType|string|true|none|A string indicating the type of range operation, with valid values 'BETWEEN' and 'NOT_BETWEEN'.|
|type|string|true|none|A string indicating the type of refinement, with a default value of 'RelativeRangedTimestampRefineBy'.|
|upperBoundOffset|[TimeOffset](#schematimeoffset)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|rangeType|BETWEEN|
|rangeType|NOT_BETWEEN|
|type|RelativeRangedTimestampRefineBy|

<h2 id="tocS_RollingDateRangePropertyOperation">RollingDateRangePropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemarollingdaterangepropertyoperation"></a>
<a id="schema_RollingDateRangePropertyOperation"></a>
<a id="tocSrollingdaterangepropertyoperation"></a>
<a id="tocsrollingdaterangepropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValue|string|false|none|A string representing the default value for the operation.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the property.|
|numberOfDays|integer(int32)|true|none|An integer specifying the number of days for the rolling date range operation.|
|operationType|string|true|none|A string indicating the type of operation being performed.|
|operator|string|true|none|A string specifying the operation to perform, with valid values including 'IS_LESS_THAN_X_DAYS_AGO', 'IS_MORE_THAN_X_DAYS_AGO', 'IS_LESS_THAN_X_DAYS_FROM_NOW', and 'IS_MORE_THAN_X_DAYS_FROM_NOW'.|
|operatorName|string|true|none|A string representing the name of the operator used in the operation.|
|propertyType|string|true|none|A string indicating the type of property, with a default value of 'datetime-rolling'.|
|renderSpec|string|false|none|A string that specifies the rendering specification for the operation.|
|requiresTimeZoneConversion|boolean|true|none|A boolean indicating whether the operation requires time zone conversion.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IS_LESS_THAN_X_DAYS_AGO|
|operator|IS_LESS_THAN_X_DAYS_FROM_NOW|
|operator|IS_MORE_THAN_X_DAYS_AGO|
|operator|IS_MORE_THAN_X_DAYS_FROM_NOW|
|propertyType|datetime-rolling|

<h2 id="tocS_RollingPropertyUpdatedOperation">RollingPropertyUpdatedOperation</h2>
<!-- backwards compatibility -->
<a id="schemarollingpropertyupdatedoperation"></a>
<a id="schema_RollingPropertyUpdatedOperation"></a>
<a id="tocSrollingpropertyupdatedoperation"></a>
<a id="tocsrollingpropertyupdatedoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValue|string|false|none|A string that provides a default value for the operation.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included in the operation.|
|numberOfDays|integer(int32)|true|none|An integer representing the number of days to consider for the operation.|
|operationType|string|true|none|A string that specifies the type of operation being performed.|
|operator|string|true|none|A string specifying the operation to be performed, with valid values being 'UPDATED_IN_LAST_X_DAYS' and 'NOT_UPDATED_IN_LAST_X_DAYS'.|
|operatorName|string|true|none|A string representing the name of the operator used in the operation.|
|propertyType|string|true|none|A string indicating the type of property operation, which is 'rolling-property-updated'.|
|renderSpec|string|false|none|A string that specifies the rendering specification for the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|NOT_UPDATED_IN_LAST_X_DAYS|
|operator|UPDATED_IN_LAST_X_DAYS|
|propertyType|rolling-property-updated|

<h2 id="tocS_SetOccurrencesRefineBy">SetOccurrencesRefineBy</h2>
<!-- backwards compatibility -->
<a id="schemasetoccurrencesrefineby"></a>
<a id="schema_SetOccurrencesRefineBy"></a>
<a id="tocSsetoccurrencesrefineby"></a>
<a id="tocssetoccurrencesrefineby"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|setType|string|true|none|A string that indicates the set type for the refinement operation. Valid values include 'ALL', 'ALL_INCLUDE_EMPTY', 'ANY', 'NONE', 'NONE_EXCLUDE_EMPTY', and 'ANY_INCLUDE_EMPTY'.|
|type|string|true|none|A string that specifies the type of refinement operation. The default value is 'SetOccurrencesRefineBy'.|

#### Enumerated Values

|Property|Value|
|---|---|
|setType|ALL|
|setType|ALL_INCLUDE_EMPTY|
|setType|ANY|
|setType|ANY_INCLUDE_EMPTY|
|setType|NONE|
|setType|NONE_EXCLUDE_EMPTY|
|type|SetOccurrencesRefineBy|

<h2 id="tocS_StringPropertyOperation">StringPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemastringpropertyoperation"></a>
<a id="schema_StringPropertyOperation"></a>
<a id="tocSstringpropertyoperation"></a>
<a id="tocsstringpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValue|string|false|none|A string representing the default value to be used if no other value is set.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included in the operation.|
|operationType|string|true|none|A string indicating the type of operation being performed.|
|operator|string|true|none|A string representing the operation to be performed, with valid values including 'IS_EQUAL_TO', 'IS_NOT_EQUAL_TO', 'CONTAINS', 'DOES_NOT_CONTAIN', 'STARTS_WITH', 'ENDS_WITH', 'HAS_EVER_BEEN_EQUAL_TO', 'HAS_NEVER_BEEN_EQUAL_TO', 'HAS_EVER_CONTAINED', and 'HAS_NEVER_CONTAINED'.|
|operatorName|string|true|none|A string representing the name of the operator.|
|propertyType|string|true|none|A string indicating the type of property, defaulting to 'string'.|
|renderSpec|string|false|none|A string that provides specifications for rendering the operation.|
|value|string|true|none|A string that specifies the value to be used in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|CONTAINS|
|operator|DOES_NOT_CONTAIN|
|operator|ENDS_WITH|
|operator|HAS_EVER_BEEN_EQUAL_TO|
|operator|HAS_EVER_CONTAINED|
|operator|HAS_NEVER_BEEN_EQUAL_TO|
|operator|HAS_NEVER_CONTAINED|
|operator|IS_EQUAL_TO|
|operator|IS_NOT_EQUAL_TO|
|operator|STARTS_WITH|
|propertyType|string|

<h2 id="tocS_TimeOffset">TimeOffset</h2>
<!-- backwards compatibility -->
<a id="schematimeoffset"></a>
<a id="schema_TimeOffset"></a>
<a id="tocStimeoffset"></a>
<a id="tocstimeoffset"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(int64)|true|none|An integer specifying the amount of time to offset, measured in the unit defined by the timeUnit property.|
|offsetDirection|string|true|none|A string indicating the direction of the time offset. Valid values are 'PAST' and 'FUTURE'.|
|timeUnit|string|true|none|A string representing the unit of time for the offset. Valid values include 'WEEKS', 'DAYS', 'HOURS', and 'MINUTES'.|

#### Enumerated Values

|Property|Value|
|---|---|
|offsetDirection|FUTURE|
|offsetDirection|PAST|
|timeUnit|DAYS|
|timeUnit|HOURS|
|timeUnit|MINUTES|
|timeUnit|WEEKS|

<h2 id="tocS_TimePointOperation">TimePointOperation</h2>
<!-- backwards compatibility -->
<a id="schematimepointoperation"></a>
<a id="schema_TimePointOperation"></a>
<a id="tocStimepointoperation"></a>
<a id="tocstimepointoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValue|string|false|none|A string indicating the default value used in the operation.|
|endpointBehavior|string|true|none|A string indicating the endpoint behavior, with possible values 'INCLUSIVE' and 'EXCLUSIVE'.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects with no value set.|
|operationType|string|true|none|A string indicating the type of operation.|
|operator|string|true|none|A string specifying the operator used in the operation, with possible values 'IS_BEFORE' and 'IS_AFTER'.|
|operatorName|string|true|none|A string representing the name of the operator.|
|propertyParser|string|true|none|A string specifying the property parser, with possible values 'VALUE', 'UPDATED_AT', 'ANNIVERSARY', 'VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION', and 'ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION'.|
|propertyType|string|true|none|A string indicating the type of property, defaulting to 'timepoint'.|
|renderSpec|string|false|none|A string representing the rendering specification.|
|timePoint|[DatePoint](#schemadatepoint) \| [IndexedTimePoint](#schemaindexedtimepoint) \| [PropertyReferencedTime](#schemapropertyreferencedtime)|true|none|A reference to a time point, which can be a DatePoint, IndexedTimePoint, or PropertyReferencedTime.|
|type|string|true|none|A string representing the type of the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|endpointBehavior|EXCLUSIVE|
|endpointBehavior|INCLUSIVE|
|operator|IS_AFTER|
|operator|IS_BEFORE|
|propertyParser|ANNIVERSARY|
|propertyParser|ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION|
|propertyParser|UPDATED_AT|
|propertyParser|VALUE|
|propertyParser|VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION|
|propertyType|timepoint|

<h2 id="tocS_TodayReference">TodayReference</h2>
<!-- backwards compatibility -->
<a id="schematodayreference"></a>
<a id="schema_TodayReference"></a>
<a id="tocStodayreference"></a>
<a id="tocstodayreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hour|integer(int32)|false|none|An integer representing the hour of the day.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond within the second.|
|minute|integer(int32)|false|none|An integer representing the minute within the hour.|
|referenceType|string|true|none|A string indicating the type of reference, which is always 'TODAY'.|
|second|integer(int32)|false|none|An integer representing the second within the minute.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|TODAY|

<h2 id="tocS_WeekReference">WeekReference</h2>
<!-- backwards compatibility -->
<a id="schemaweekreference"></a>
<a id="schema_WeekReference"></a>
<a id="tocSweekreference"></a>
<a id="tocsweekreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayOfWeek|string|true|none|A string representing the day of the week. Valid values include 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', and 'SUNDAY'.|
|hour|integer(int32)|false|none|An integer representing the hour of the day.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond within the second.|
|minute|integer(int32)|false|none|An integer representing the minute within the hour.|
|referenceType|string|true|none|A string indicating the type of reference, which is 'WEEK' by default.|
|second|integer(int32)|false|none|An integer representing the second within the minute.|

#### Enumerated Values

|Property|Value|
|---|---|
|dayOfWeek|FRIDAY|
|dayOfWeek|MONDAY|
|dayOfWeek|SATURDAY|
|dayOfWeek|SUNDAY|
|dayOfWeek|THURSDAY|
|dayOfWeek|TUESDAY|
|dayOfWeek|WEDNESDAY|
|referenceType|WEEK|

<h2 id="tocS_YearReference">YearReference</h2>
<!-- backwards compatibility -->
<a id="schemayearreference"></a>
<a id="schema_YearReference"></a>
<a id="tocSyearreference"></a>
<a id="tocsyearreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|An integer representing the day of the month.|
|hour|integer(int32)|false|none|An integer representing the hour of the day.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond within the second.|
|minute|integer(int32)|false|none|An integer representing the minute within the hour.|
|month|integer(int32)|true|none|An integer representing the month of the year.|
|referenceType|string|true|none|A string indicating the type of reference, which is 'YEAR' by default.|
|second|integer(int32)|false|none|An integer representing the second within the minute.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|YEAR|
