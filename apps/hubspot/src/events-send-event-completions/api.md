<h1 id="events-send-event-completions">Events Send Event Completions v2026-09</h1>

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

<h1 id="events-send-event-completions-basic">Basic</h1>

## Send a custom event occurrence

<a id="opIdpost-/events/2026-09/send_send"></a>

> Code samples

```bash
curl https://api.hubapi.com/events/2026-09/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /events/2026-09/send`

Send data for a single custom event occurrence.

> Body parameter

```json
null
```

<h3 id="send-a-custom-event-occurrence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BehavioralEventHttpCompletionRequest](#schemabehavioraleventhttpcompletionrequest)|true|none|
|» email|body|string|false|The visitor's email address. Used for associating the event data with a CRM record.|
|» eventName|body|string|true|The event's fully qualified name. This value (formatted as `pe{HubID}_{name}`) can be retrieved through the [event definitions API](https://developers.hubspot.com/docs/reference/api/analytics-and-events/custom-events/custom-event-definitions#get-%2Fevents%2Fv3%2Fevent-definitions) or in [HubSpot's UI](https://knowledge.hubspot.com/reports/create-custom-behavioral-events-with-the-code-wizard#find-internal-name).|
|» objectId|body|string|false|The ID of the record for which the event occurred (e.g., contact ID or visitor ID).|
|» occurredAt|body|string(date-time)|false|The time when this event occurred. If this isn't set, the current time will be used.|
|» properties|body|object|true|The event properties to update. Takes the format of key-value pairs (property internal name and property value). Learn more about [HubSpot's default event properties](https://developers.hubspot.com/docs/guides/api/analytics-and-events/custom-events/custom-event-definitions#hubspot-s-default-event-properties).|
|» » **additionalProperties**|body|string|false|none|
|» utk|body|string|false|The visitor's usertoken. Used for associating the event data with a CRM record.|
|» uuid|body|string|false|A unique identifier for the event occurrence. Must be unique within the event type. If not provided, HubSpot will generate a random UUID. When multiple events have the same ID within a year, the first will be accepted and all others will be rejected. Can be useful for matching data between HubSpot and other external systems.|

> Example responses

> default Response

```json
null
```

<h3 id="send-a-custom-event-occurrence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: analytics.behavioral_events.send )
</aside>

<h1 id="events-send-event-completions-batch">Batch</h1>

## Send a batch of event occurrences

<a id="opIdpost-/events/2026-09/send/batch_send"></a>

> Code samples

```bash
curl https://api.hubapi.com/events/2026-09/send/batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /events/2026-09/send/batch`

Send multiple event occurrences at once.

> Body parameter

```json
null
```

<h3 id="send-a-batch-of-event-occurrences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchedBehavioralEventHttpCompletionRequest](#schemabatchedbehavioraleventhttpcompletionrequest)|true|none|
|» inputs|body|[[BehavioralEventHttpCompletionRequest](#schemabehavioraleventhttpcompletionrequest)]|true|An array of BehavioralEventHttpCompletionRequest objects, each representing a single behavioral event to be completed. This property is required.|

> Example responses

> default Response

```json
null
```

<h3 id="send-a-batch-of-event-occurrences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: analytics.behavioral_events.send )
</aside>

# Schemas

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
|inputs|[[BehavioralEventHttpCompletionRequest](#schemabehavioraleventhttpcompletionrequest)]|true|none|An array of BehavioralEventHttpCompletionRequest objects, each representing a single behavioral event to be completed. This property is required.|

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
|email|string|false|none|The visitor's email address. Used for associating the event data with a CRM record.|
|eventName|string|true|none|The event's fully qualified name. This value (formatted as `pe{HubID}_{name}`) can be retrieved through the [event definitions API](https://developers.hubspot.com/docs/reference/api/analytics-and-events/custom-events/custom-event-definitions#get-%2Fevents%2Fv3%2Fevent-definitions) or in [HubSpot's UI](https://knowledge.hubspot.com/reports/create-custom-behavioral-events-with-the-code-wizard#find-internal-name).|
|objectId|string|false|none|The ID of the record for which the event occurred (e.g., contact ID or visitor ID).|
|occurredAt|string(date-time)|false|none|The time when this event occurred. If this isn't set, the current time will be used.|
|properties|object|true|none|The event properties to update. Takes the format of key-value pairs (property internal name and property value). Learn more about [HubSpot's default event properties](https://developers.hubspot.com/docs/guides/api/analytics-and-events/custom-events/custom-event-definitions#hubspot-s-default-event-properties).|
|utk|string|false|none|The visitor's usertoken. Used for associating the event data with a CRM record.|
|uuid|string|false|none|A unique identifier for the event occurrence. Must be unique within the event type. If not provided, HubSpot will generate a random UUID. When multiple events have the same ID within a year, the first will be accepted and all others will be rejected. Can be useful for matching data between HubSpot and other external systems.|

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
