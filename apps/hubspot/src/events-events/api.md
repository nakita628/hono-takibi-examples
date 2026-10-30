<h1 id="events-events">Events Events v2026-09</h1>

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

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="events-events-basic">Basic</h1>

## Retrieve events

<a id="opIdget-/events/event-occurrences/2026-09_/events/event-occurrences/2026-03"></a>

> Code samples

```bash
curl https://api.hubapi.com/events/event-occurrences/2026-09 \
  -H 'Accept: application/json'
```

`GET /events/event-occurrences/2026-09`

Retrieve event occurrences for a specified date in September 2026. This endpoint allows you to filter and sort events based on various criteria, such as event type, object type, and occurrence dates. It supports pagination and can return specific properties of events if requested.

<h3 id="retrieve-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|before|query|string|false|A cursor token for pagination. Use the value from the previous response's paging.prev.before field.|
|eventType|query|string|false|The type of events to retrieve.|
|id|query|[string]|false|An array of event IDs to retrieve.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|objectId|query|integer(int64)|false|The unique identifier of the object associated with the events.|
|objectProperty.{propname}|query|object|false|Filter events based on specific object properties.|
|objectType|query|string|false|The type of object associated with the events.|
|occurredAfter|query|string(date-time)|false|Filter events that occurred after this date-time.|
|occurredBefore|query|string(date-time)|false|Filter events that occurred before this date-time.|
|properties|query|[string]|false|An array of property names to include in the response.|
|property.{propname}|query|object|false|Filter events based on specific event properties.|
|sort|query|[string]|false|An array of fields to sort the results by.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseExternalUnifiedEvent](#schemacollectionresponseexternalunifiedevent)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve event types

<a id="opIdget-/events/event-occurrences/2026-09/event-types_/events/event-occurrences/2026-03/event-types"></a>

> Code samples

```bash
curl https://api.hubapi.com/events/event-occurrences/2026-09/event-types \
  -H 'Accept: application/json'
```

`GET /events/event-occurrences/2026-09/event-types`

Retrieve a list of event type names. You may use these event types to query the API for event occurrences of a desired type.

Note: the `get_types` method is only supported in the Python SDK version `12.0.0-beta.1` or later. 

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-event-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VisibleExternalEventTypeNames](#schemavisibleexternaleventtypenames)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CollectionResponseExternalUnifiedEvent">CollectionResponseExternalUnifiedEvent</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponseexternalunifiedevent"></a>
<a id="schema_CollectionResponseExternalUnifiedEvent"></a>
<a id="tocScollectionresponseexternalunifiedevent"></a>
<a id="tocscollectionresponseexternalunifiedevent"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[ExternalUnifiedEvent](#schemaexternalunifiedevent)]|true|none|An array of ExternalUnifiedEvent objects, each representing an individual event with its associated details.|

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

<h2 id="tocS_ExternalUnifiedEvent">ExternalUnifiedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaexternalunifiedevent"></a>
<a id="schema_ExternalUnifiedEvent"></a>
<a id="tocSexternalunifiedevent"></a>
<a id="tocsexternalunifiedevent"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventType|string|true|none|The format of the `eventType` string is `ae{appId}_{eventTypeLabel}`, `pe{portalId}_{eventTypeLabel}`, or just `e_{eventTypeLabel}` for HubSpot events.|
|id|string|true|none|A unique identifier for the event.|
|objectId|string|true|none|The objectId of the object which did the event.|
|objectType|string|true|none|The objectType for the object which did the event.|
|occurredAt|string(date-time)|true|none|An ISO 8601 timestamp when the event occurred.|
|properties|object|true|none|A key-value map of event-specific properties. The available properties depend on the event type definition.|

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
|after|string|true|none|The cursor token to pass as the after query parameter to retrieve the next page of results.|
|link|string|false|none|The full URL of the next page of results, with the after cursor token included as a query parameter.|

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
|before|string|true|none|The cursor token to pass as the before query parameter to retrieve the previous page of results.|
|link|string|false|none|The full URL of the previous page of results, with the before cursor token included as a query parameter.|

<h2 id="tocS_VisibleExternalEventTypeNames">VisibleExternalEventTypeNames</h2>
<!-- backwards compatibility -->
<a id="schemavisibleexternaleventtypenames"></a>
<a id="schema_VisibleExternalEventTypeNames"></a>
<a id="tocSvisibleexternaleventtypenames"></a>
<a id="tocsvisibleexternaleventtypenames"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTypes|[string]|true|none|List of event type names.|
