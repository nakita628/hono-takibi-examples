<h1 id="marketing-marketing-events">Marketing Marketing Events v2026-09</h1>

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
|crm.objects.marketing_events.read||
|crm.objects.marketing_events.write||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="marketing-marketing-events-basic">Basic</h1>

## List

<a id="opIdget-/marketing/marketing-events/2026-09_/marketing/marketing-events/v3"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/marketing-events/2026-09 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/marketing-events/2026-09`

Retrieve a list of marketing events for the specified API version. This endpoint supports pagination to navigate through large sets of data. Use this to access marketing event details in a paginated format.

<h3 id="list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The cursor indicating the position of the last retrieved item.|
|limit|query|integer(int32)|false|The limit for response size. The default value is 10, the max number is 100|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging](#schemacollectionresponsemarketingeventpublicreadresponsev2forwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.read )
</aside>

## Create a marketing event

<a id="opIdpost-/marketing/marketing-events/2026-09/events_create"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/marketing-events/2026-09/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/marketing-events/2026-09/events`

Creates a new marketing event in HubSpot

> Body parameter

```json
null
```

<h3 id="create-a-marketing-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MarketingEventCreateRequestParams](#schemamarketingeventcreaterequestparams)|true|none|
|» customProperties|body|[[PropertyValue](#schemapropertyvalue)]|true|A list of PropertyValues. These can be whatever kind of property names and values you want. However, they must already exist on the HubSpot account's definition of the MarketingEvent Object. If they don't they will be filtered out and not set.<br>In order to do this you'll need to create a new PropertyGroup on the HubSpot account's MarketingEvent object for your specific app and create the Custom Property you want to track on that HubSpot account. Do not create any new default properties on the MarketingEvent object as that will apply to all HubSpot accounts.<br>|
|» endDateTime|body|string(date-time)|false|The end date and time of the marketing event.|
|» eventCancelled|body|boolean|false|Indicates if the marketing event has been cancelled.  Defaults to `false`|
|» eventCompleted|body|boolean|false|Indicates if the marketing event has been completed.  Defaults to `false`|
|» eventDescription|body|string|false|The description of the marketing event.|
|» eventName|body|string|true|The name of the marketing event.|
|» eventOrganizer|body|string|true|The name of the organizer of the marketing event.|
|» eventType|body|string|false|Describes what type of event this is.  For example: `WEBINAR`, `CONFERENCE`, `WORKSHOP`|
|» eventUrl|body|string|false|A URL in the external event application where the marketing event can be managed.|
|» externalAccountId|body|string|true|The accountId that is associated with this marketing event in the external event application.|
|» externalEventId|body|string|true|The id of the marketing event in the external event application.|
|» startDateTime|body|string(date-time)|false|The start date and time of the marketing event.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-a-marketing-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[MarketingEventDefaultResponse](#schemamarketingeventdefaultresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

## Get Marketing Event by External IDs

<a id="opIdget-/marketing/marketing-events/2026-09/events/{externalEventId}_getDetails"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/events/{externalEventId}?externalAccountId=' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/marketing-events/2026-09/events/{externalEventId}`

Returns the details of a Marketing Event with the specified externalAccountId, externalEventId, if it exists.

Only Marketing Events created by the same app making the request can be retrieved.

<h3 id="get-marketing-event-by-external-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalEventId|path|string|true|The ID of the marketing event in the external event application.|
|externalAccountId|query|string|true|The accountId associated with the marketing event in the external event application.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-marketing-event-by-external-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[MarketingEventPublicReadResponse](#schemamarketingeventpublicreadresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.read )
</aside>

## Create or update a marketing event

<a id="opIdput-/marketing/marketing-events/2026-09/events/{externalEventId}_upsert"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/events/{externalEventId}' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PUT /marketing/marketing-events/2026-09/events/{externalEventId}`

Upserts a marketing event If there is an existing marketing event with the specified ID, it will be updated; otherwise a new event will be created.

> Body parameter

```json
null
```

<h3 id="create-or-update-a-marketing-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalEventId|path|string|true|The id of the marketing event in the external event application.|
|body|body|[MarketingEventCreateRequestParams](#schemamarketingeventcreaterequestparams)|true|none|
|» customProperties|body|[[PropertyValue](#schemapropertyvalue)]|true|A list of PropertyValues. These can be whatever kind of property names and values you want. However, they must already exist on the HubSpot account's definition of the MarketingEvent Object. If they don't they will be filtered out and not set.<br>In order to do this you'll need to create a new PropertyGroup on the HubSpot account's MarketingEvent object for your specific app and create the Custom Property you want to track on that HubSpot account. Do not create any new default properties on the MarketingEvent object as that will apply to all HubSpot accounts.<br>|
|» endDateTime|body|string(date-time)|false|The end date and time of the marketing event.|
|» eventCancelled|body|boolean|false|Indicates if the marketing event has been cancelled.  Defaults to `false`|
|» eventCompleted|body|boolean|false|Indicates if the marketing event has been completed.  Defaults to `false`|
|» eventDescription|body|string|false|The description of the marketing event.|
|» eventName|body|string|true|The name of the marketing event.|
|» eventOrganizer|body|string|true|The name of the organizer of the marketing event.|
|» eventType|body|string|false|Describes what type of event this is.  For example: `WEBINAR`, `CONFERENCE`, `WORKSHOP`|
|» eventUrl|body|string|false|A URL in the external event application where the marketing event can be managed.|
|» externalAccountId|body|string|true|The accountId that is associated with this marketing event in the external event application.|
|» externalEventId|body|string|true|The id of the marketing event in the external event application.|
|» startDateTime|body|string(date-time)|false|The start date and time of the marketing event.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-or-update-a-marketing-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[MarketingEventPublicDefaultResponse](#schemamarketingeventpublicdefaultresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

## Delete Marketing Event by External Ids

<a id="opIddelete-/marketing/marketing-events/2026-09/events/{externalEventId}_archive"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/events/{externalEventId}?externalAccountId=' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /marketing/marketing-events/2026-09/events/{externalEventId}`

Deletes the existing Marketing Event with the specified externalAccountId, externalEventId, if it exists.

Only Marketing Events created by the same app can be deleted.

<h3 id="delete-marketing-event-by-external-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalEventId|path|string|true|The ID of the marketing event in the external event application. This parameter is required.|
|externalAccountId|query|string|true|The account ID associated with the marketing event in the external event application. This parameter is required.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-marketing-event-by-external-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

## Update Marketing Event by External IDs

<a id="opIdpatch-/marketing/marketing-events/2026-09/events/{externalEventId}_update"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/events/{externalEventId}?externalAccountId=' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /marketing/marketing-events/2026-09/events/{externalEventId}`

Updates the details of an existing Marketing Event identified by its externalAccountId, externalEventId if it exists.

Only Marketing Events created by the same app can be updated.

> Body parameter

```json
null
```

<h3 id="update-marketing-event-by-external-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalEventId|path|string|true|The ID of the marketing event in the external event application.|
|externalAccountId|query|string|true|The account ID associated with this marketing event in the external event application.|
|body|body|[MarketingEventUpdateRequestParams](#schemamarketingeventupdaterequestparams)|true|none|
|» customProperties|body|[[PropertyValue](#schemapropertyvalue)]|true|A list of PropertyValues. These can be whatever kind of property names and values you want. However, they must already exist on the HubSpot account's definition of the MarketingEvent Object. If they don't they will be filtered out and not set.<br>In order to do this you'll need to create a new PropertyGroup on the HubSpot account's MarketingEvent object for your specific app and create the Custom Property you want to track on that HubSpot account. Do not create any new default properties on the MarketingEvent object as that will apply to all HubSpot accounts.<br>|
|» endDateTime|body|string(date-time)|false|The end date and time of the marketing event.|
|» eventCancelled|body|boolean|false|Indicates if the marketing event has been cancelled. Defaults to `false`|
|» eventCompleted|body|boolean|false|Indicates if the marketing event has been completed. Defaults to `false`|
|» eventDescription|body|string|false|The description of the marketing event.|
|» eventName|body|string|false|The name of the marketing event.|
|» eventOrganizer|body|string|false|The name of the organizer of the marketing event.|
|» eventType|body|string|false|Describes what type of event this is.  For example: `WEBINAR`, `CONFERENCE`, `WORKSHOP`|
|» eventUrl|body|string|false|A URL in the external event application where the marketing event can be managed.|
|» startDateTime|body|string(date-time)|false|The start date and time of the marketing event.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-marketing-event-by-external-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[MarketingEventPublicDefaultResponse](#schemamarketingeventpublicdefaultresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

## Get Marketing Event by objectId

<a id="opIdget-/marketing/marketing-events/2026-09/{objectId}_getByObjectId"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/{objectId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/marketing-events/2026-09/{objectId}`

Returns the details of a Marketing Event with the specified objectId, if it exists.

<h3 id="get-marketing-event-by-objectid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The internal id of the marketing event in HubSpot.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-marketing-event-by-objectid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[MarketingEventPublicReadResponseV2](#schemamarketingeventpublicreadresponsev2)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.read )
</aside>

## Delete Marketing Event by objectId

<a id="opIddelete-/marketing/marketing-events/2026-09/{objectId}_archiveByObjectId"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/{objectId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /marketing/marketing-events/2026-09/{objectId}`

Deletes the existing Marketing Event with the specified objectId, if it exists.

<h3 id="delete-marketing-event-by-objectid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The internal id of the marketing event in HubSpot.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-marketing-event-by-objectid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

## Update Marketing Event by objectId

<a id="opIdpatch-/marketing/marketing-events/2026-09/{objectId}_updateByObjectId"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/{objectId}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /marketing/marketing-events/2026-09/{objectId}`

Updates the details of an existing Marketing Event identified by its objectId, if it exists.

> Body parameter

```json
null
```

<h3 id="update-marketing-event-by-objectid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The internal id of the marketing event in HubSpot.|
|body|body|[MarketingEventPublicUpdateRequestV2](#schemamarketingeventpublicupdaterequestv2)|true|none|
|» customProperties|body|[[PropertyValue](#schemapropertyvalue)]|true|An array of custom properties associated with the event.|
|» endDateTime|body|string(date-time)|false|The end date and time of the marketing event|
|» eventCancelled|body|boolean|false|Indicates if the marketing event has been cancelled|
|» eventDescription|body|string|false|The description of the marketing event|
|» eventName|body|string|false|The name of the marketing event|
|» eventOrganizer|body|string|false|The name of the organizer of the marketing event|
|» eventType|body|string|false|The type of the marketing event|
|» eventUrl|body|string|false|A URL in the external event application where the marketing event can be managed|
|» startDateTime|body|string(date-time)|false|The start date and time of the marketing event|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-marketing-event-by-objectid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[MarketingEventPublicDefaultResponseV2](#schemamarketingeventpublicdefaultresponsev2)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

<h1 id="marketing-marketing-events-batch">Batch</h1>

## Delete Multiple Marketing Events by ObjectId

<a id="opIdpost-/marketing/marketing-events/2026-09/batch/archive_archiveByObjectId"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/marketing-events/2026-09/batch/archive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/marketing-events/2026-09/batch/archive`

Deletes multiple Marketing Events from the portal based on their objectId, if they exist.

Responses:
204: Returned if all specified Marketing Events were successfully deleted.
207: Returned if some objectIds did not correspond to any existing Marketing Events.

> Body parameter

```json
null
```

<h3 id="delete-multiple-marketing-events-by-objectid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputMarketingEventPublicObjectIdDeleteRequest](#schemabatchinputmarketingeventpublicobjectiddeleterequest)|true|none|
|» inputs|body|[[MarketingEventPublicObjectIdDeleteRequest](#schemamarketingeventpublicobjectiddeleterequest)]|true|An array of marketing event public object IDs to be deleted. Each item in the array is a MarketingEventPublicObjectIdDeleteRequest object.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-multiple-marketing-events-by-objectid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

## Update Multiple Marketing Events by ObjectId

<a id="opIdpost-/marketing/marketing-events/2026-09/batch/update_updateByObjectId"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/marketing-events/2026-09/batch/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/marketing-events/2026-09/batch/update`

Updates multiple Marketing Events on the portal based on their objectId, if they exist.

> Body parameter

```json
null
```

<h3 id="update-multiple-marketing-events-by-objectid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputMarketingEventPublicUpdateRequestFullV2](#schemabatchinputmarketingeventpublicupdaterequestfullv2)|true|none|
|» inputs|body|[[MarketingEventPublicUpdateRequestFullV2](#schemamarketingeventpublicupdaterequestfullv2)]|true|An array of MarketingEventPublicUpdateRequestFullV2 objects, each representing a marketing event update request. This property is required.|

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

<h3 id="update-multiple-marketing-events-by-objectid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseMarketingEventPublicDefaultResponseV2](#schemabatchresponsemarketingeventpublicdefaultresponsev2)|
|207|Multi-Status|multiple statuses|[BatchResponseMarketingEventPublicDefaultResponseV2WithErrors](#schemabatchresponsemarketingeventpublicdefaultresponsev2witherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

## Delete Multiple Marketing Events by External Ids

<a id="opIdpost-/marketing/marketing-events/2026-09/events/delete_archive"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/marketing-events/2026-09/events/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/marketing-events/2026-09/events/delete`

Deletes multiple Marketing Events based on externalAccountId, externalEventId, and appId.

Only Marketing Events created by the same apps will be deleted; events from other apps cannot be removed by this endpoint. 

> Body parameter

```json
null
```

<h3 id="delete-multiple-marketing-events-by-external-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputMarketingEventExternalUniqueIdentifier](#schemabatchinputmarketingeventexternaluniqueidentifier)|true|none|
|» inputs|body|[[MarketingEventExternalUniqueIdentifier](#schemamarketingeventexternaluniqueidentifier)]|true|An array of MarketingEventExternalUniqueIdentifier objects, each representing a unique identifier for a marketing event. This is required for batch operations.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-multiple-marketing-events-by-external-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

## Create or Update Multiple Marketing Events

<a id="opIdpost-/marketing/marketing-events/2026-09/events/upsert_upsert"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/marketing-events/2026-09/events/upsert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/marketing-events/2026-09/events/upsert`

Upserts multiple Marketing Events. If a Marketing Event with the specified ID already exists, it will be updated; otherwise, a new event will be created.

Only Marketing Events originally created by the same app can be updated.

> Body parameter

```json
null
```

<h3 id="create-or-update-multiple-marketing-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputMarketingEventCreateRequestParams](#schemabatchinputmarketingeventcreaterequestparams)|true|none|
|» inputs|body|[[MarketingEventCreateRequestParams](#schemamarketingeventcreaterequestparams)]|true|An array of MarketingEventCreateRequestParams objects, each containing the necessary details to create a marketing event. This includes properties such as event name, organizer, and custom properties.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-or-update-multiple-marketing-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseMarketingEventPublicDefaultResponse](#schemabatchresponsemarketingeventpublicdefaultresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

<h1 id="marketing-marketing-events-event-attendees">Event Attendees</h1>

## Record Participants by ContactId with Marketing Event External Ids

<a id="opIdpost-/marketing/marketing-events/2026-09/attendance/{externalEventId}/{subscriberState}/create_recordByContactIds"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/attendance/{externalEventId}/{subscriberState}/create' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/marketing-events/2026-09/attendance/{externalEventId}/{subscriberState}/create`

Records the participation of multiple HubSpot contacts in a Marketing Event using their HubSpot contact IDs.

Additional Functionality:
- Adds a timeline event to the contacts.

Allowed Properties:
For the state "attend":
- joinedAt
- leftAt

> Body parameter

```json
null
```

<h3 id="record-participants-by-contactid-with-marketing-event-external-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalEventId|path|string|true|The ID of the marketing event in the external event application.|
|subscriberState|path|string|true|The state of the subscriber's attendance, such as 'register', 'attend', or 'cancel'.|
|externalAccountId|query|string|false|The account ID associated with the marketing event in the external event application.|
|body|body|[BatchInputMarketingEventSubscriber](#schemabatchinputmarketingeventsubscriber)|true|none|
|» inputs|body|[[MarketingEventSubscriber](#schemamarketingeventsubscriber)]|true|List of HubSpot contacts to subscribe to the marketing event|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="record-participants-by-contactid-with-marketing-event-external-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseSubscriberVidResponse](#schemabatchresponsesubscribervidresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

## Record Participants by Email with Marketing Event External Ids

<a id="opIdpost-/marketing/marketing-events/2026-09/attendance/{externalEventId}/{subscriberState}/email-create_recordByContactEmails"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/attendance/{externalEventId}/{subscriberState}/email-create' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/marketing-events/2026-09/attendance/{externalEventId}/{subscriberState}/email-create`

Records the participation of multiple HubSpot contacts in a Marketing Event using their email addresses.

If a contact does not exist, it will be automatically created. The contactProperties field is used exclusively for creating new contacts and will not update properties of existing contacts.

Additional Functionality:
- Adds a timeline event to the contacts.

Allowed Properties:
For the state "attend":
- joinedAt
- leftAt

> Body parameter

```json
null
```

<h3 id="record-participants-by-email-with-marketing-event-external-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalEventId|path|string|true|The ID of the marketing event in the external event application.|
|subscriberState|path|string|true|The state of the subscriber, which can be used to indicate their attendance status.|
|externalAccountId|query|string|false|The account ID associated with the marketing event in the external event application.|
|body|body|[BatchInputMarketingEventEmailSubscriber](#schemabatchinputmarketingeventemailsubscriber)|true|none|
|» inputs|body|[[MarketingEventEmailSubscriber](#schemamarketingeventemailsubscriber)]|true|List of marketing event details to create or update|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="record-participants-by-email-with-marketing-event-external-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseSubscriberEmailResponse](#schemabatchresponsesubscriberemailresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

## Record Participants by ContactId with Marketing Event Object Id

<a id="opIdpost-/marketing/marketing-events/2026-09/{objectId}/attendance/{subscriberState}/create_recordByContactId"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/{objectId}/attendance/{subscriberState}/create' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/marketing-events/2026-09/{objectId}/attendance/{subscriberState}/create`

Records the participation of multiple HubSpot contacts in a Marketing Event using their HubSpot contact IDs.

Additional Functionality:
- Adds a timeline event to the contacts.

Allowed Properties:
For the state "attend":
- joinedAt
- leftAt

> Body parameter

```json
null
```

<h3 id="record-participants-by-contactid-with-marketing-event-object-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The internal id of the marketing event in HubSpot.|
|subscriberState|path|string|true|The attendance state value. It may be 'register', 'attend' or 'cancel'|
|body|body|[BatchInputMarketingEventSubscriber](#schemabatchinputmarketingeventsubscriber)|true|none|
|» inputs|body|[[MarketingEventSubscriber](#schemamarketingeventsubscriber)]|true|List of HubSpot contacts to subscribe to the marketing event|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="record-participants-by-contactid-with-marketing-event-object-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseSubscriberVidResponse](#schemabatchresponsesubscribervidresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

## Record Participants by Email with Marketing Event Object Id

<a id="opIdpost-/marketing/marketing-events/2026-09/{objectId}/attendance/{subscriberState}/email-create_recordByEmail"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/{objectId}/attendance/{subscriberState}/email-create' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/marketing-events/2026-09/{objectId}/attendance/{subscriberState}/email-create`

Records the participation of multiple HubSpot contacts in a Marketing Event using their email addresses.

If a contact does not exist, it will be automatically created. The contactProperties field is used exclusively for creating new contacts and will not update properties of existing contacts.

Additional Functionality:
- Adds a timeline event to the contacts.

Allowed Properties:
For the state "attend":
- joinedAt
- leftAt

> Body parameter

```json
null
```

<h3 id="record-participants-by-email-with-marketing-event-object-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The internal id of the marketing event in HubSpot.|
|subscriberState|path|string|true|The attendance state value. It may be 'register', 'attend' or 'cancel'|
|body|body|[BatchInputMarketingEventEmailSubscriber](#schemabatchinputmarketingeventemailsubscriber)|true|none|
|» inputs|body|[[MarketingEventEmailSubscriber](#schemamarketingeventemailsubscriber)]|true|List of marketing event details to create or update|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="record-participants-by-email-with-marketing-event-object-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseSubscriberEmailResponse](#schemabatchresponsesubscriberemailresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

<h1 id="marketing-marketing-events-event-status">Event Status</h1>

## Mark a marketing event as cancelled

<a id="opIdpost-/marketing/marketing-events/2026-09/events/{externalEventId}/cancel_cancel"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/events/{externalEventId}/cancel?externalAccountId=' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /marketing/marketing-events/2026-09/events/{externalEventId}/cancel`

Mark a marketing event as cancelled.

<h3 id="mark-a-marketing-event-as-cancelled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalEventId|path|string|true|The unique identifier of the marketing event in the external event application.|
|externalAccountId|query|string|true|The unique identifier for the account associated with the marketing event in the external event application.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="mark-a-marketing-event-as-cancelled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[MarketingEventDefaultResponse](#schemamarketingeventdefaultresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

## Mark a marketing event as completed

<a id="opIdpost-/marketing/marketing-events/2026-09/events/{externalEventId}/complete_complete"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/events/{externalEventId}/complete?externalAccountId=' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/marketing-events/2026-09/events/{externalEventId}/complete`

Mark a marketing event as completed

> Body parameter

```json
null
```

<h3 id="mark-a-marketing-event-as-completed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalEventId|path|string|true|The ID of the marketing event in the external event application.|
|externalAccountId|query|string|true|The ID of the external account associated with the marketing event.|
|body|body|[MarketingEventCompleteRequestParams](#schemamarketingeventcompleterequestparams)|true|none|
|» endDateTime|body|string(date-time)|true|The end date and time of the marketing event in ISO 8601 format|
|» startDateTime|body|string(date-time)|true|The start date and time of the marketing event in ISO 8601 format|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="mark-a-marketing-event-as-completed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[MarketingEventDefaultResponse](#schemamarketingeventdefaultresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

<h1 id="marketing-marketing-events-identifiers">Identifiers</h1>

## Find App-Specific Marketing Events by External Event Id

<a id="opIdget-/marketing/marketing-events/2026-09/events/search_doSearch"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/events/search?q=' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/marketing-events/2026-09/events/search`

Retrieves Marketing Events where the externalEventId matches the value provided in the request, limited to events created by the app making the request.

Marketing Events created by other apps will not be included in the results.

<h3 id="find-app-specific-marketing-events-by-external-event-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|The search query string used to filter marketing events.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="find-app-specific-marketing-events-by-external-event-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseSearchPublicResponseWrapperNoPaging](#schemacollectionresponsesearchpublicresponsewrappernopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.read )
</aside>

## Find Marketing Events by External Event Id

<a id="opIdget-/marketing/marketing-events/2026-09/{externalEventId}/identifiers_searchPortalEvents"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/{externalEventId}/identifiers' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/marketing-events/2026-09/{externalEventId}/identifiers`

This endpoint searches the portal for all Marketing Events whose externalEventId matches the value provided in the request.

It retrieves the objectId and additional event details for each matching Marketing Event.

Since multiple Marketing Events can have the same externalEventId, the endpoint returns all matching results.

Note: Marketing Events become searchable by externalEventId a few minutes after creation.

<h3 id="find-marketing-events-by-external-event-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalEventId|path|string|true|The id of the marketing event in the external event application.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="find-marketing-events-by-external-event-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalMarketingEventIdentifiersResponse](#schemacollectionresponsewithtotalmarketingeventidentifiersresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.read )
</aside>

<h1 id="marketing-marketing-events-list-associations">List Associations</h1>

## Get lists associated with a marketing event

<a id="opIdget-/marketing/marketing-events/2026-09/associations/{externalAccountId}/{externalEventId}/lists_getAllByExternalAccountAndEventIds"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/associations/{externalAccountId}/{externalEventId}/lists' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/marketing-events/2026-09/associations/{externalAccountId}/{externalEventId}/lists`

Gets lists associated with a marketing event by external account id and external event id

<h3 id="get-lists-associated-with-a-marketing-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalAccountId|path|string|true|The accountId that is associated with this marketing event in the external event application.|
|externalEventId|path|string|true|The id of the marketing event in the external event application.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-lists-associated-with-a-marketing-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalPublicList](#schemacollectionresponsewithtotalpubliclist)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

## Associate a list with a marketing event

<a id="opIdput-/marketing/marketing-events/2026-09/associations/{externalAccountId}/{externalEventId}/lists/{listId}_associateByExternalAccountAndEventIds"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/associations/{externalAccountId}/{externalEventId}/lists/{listId}' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /marketing/marketing-events/2026-09/associations/{externalAccountId}/{externalEventId}/lists/{listId}`

Associates a list with a marketing event by external account id, external event id, and ILS list id

<h3 id="associate-a-list-with-a-marketing-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalAccountId|path|string|true|The accountId that is associated with this marketing event in the external event application.|
|externalEventId|path|string|true|The id of the marketing event in the external event application.|
|listId|path|string|true|The ILS ID of the list.|

> Example responses

> default Response

```json
null
```

<h3 id="associate-a-list-with-a-marketing-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

## Disassociate a list from a marketing event

<a id="opIddelete-/marketing/marketing-events/2026-09/associations/{externalAccountId}/{externalEventId}/lists/{listId}_disassociateByExternalAccountAndEventIds"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/associations/{externalAccountId}/{externalEventId}/lists/{listId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /marketing/marketing-events/2026-09/associations/{externalAccountId}/{externalEventId}/lists/{listId}`

Disassociates a list from a marketing event by external account id, external event id, and ILS list id

<h3 id="disassociate-a-list-from-a-marketing-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalAccountId|path|string|true|The accountId that is associated with this marketing event in the external event application.|
|externalEventId|path|string|true|The id of the marketing event in the external event application.|
|listId|path|string|true|The ILS ID of the list.|

> Example responses

> default Response

```json
null
```

<h3 id="disassociate-a-list-from-a-marketing-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

## Get lists associated with a marketing event

<a id="opIdget-/marketing/marketing-events/2026-09/associations/{marketingEventId}/lists_getAllByMarketingEventId"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/associations/{marketingEventId}/lists' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/marketing-events/2026-09/associations/{marketingEventId}/lists`

Gets lists associated with a marketing event by marketing event id

<h3 id="get-lists-associated-with-a-marketing-event-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marketingEventId|path|string|true|The internal id of the marketing event in HubSpot.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-lists-associated-with-a-marketing-event-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalPublicList](#schemacollectionresponsewithtotalpubliclist)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

## Associate a list with a marketing event

<a id="opIdput-/marketing/marketing-events/2026-09/associations/{marketingEventId}/lists/{listId}_associateByMarketingEventId"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/associations/{marketingEventId}/lists/{listId}' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /marketing/marketing-events/2026-09/associations/{marketingEventId}/lists/{listId}`

Associates a list with a marketing event by marketing event id and ILS list id

<h3 id="associate-a-list-with-a-marketing-event-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|string|true|The ILS ID of the list.|
|marketingEventId|path|string|true|The internal id of the marketing event in HubSpot.|

> Example responses

> default Response

```json
null
```

<h3 id="associate-a-list-with-a-marketing-event-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

## Disassociate a list from a marketing event

<a id="opIddelete-/marketing/marketing-events/2026-09/associations/{marketingEventId}/lists/{listId}_disassociateByMarketingEventId"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/associations/{marketingEventId}/lists/{listId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /marketing/marketing-events/2026-09/associations/{marketingEventId}/lists/{listId}`

Disassociates a list from a marketing event by marketing event id and ILS list id

<h3 id="disassociate-a-list-from-a-marketing-event-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|string|true|The ILS ID of the list.|
|marketingEventId|path|string|true|The internal id of the marketing event in HubSpot.|

> Example responses

> default Response

```json
null
```

<h3 id="disassociate-a-list-from-a-marketing-event-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

<h1 id="marketing-marketing-events-participant-state">Participant State</h1>

## Read participations breakdown by Contact identifier

<a id="opIdget-/marketing/marketing-events/2026-09/participations/contacts/{contactIdentifier}/breakdown_getParticipationsBreakdownByContactId"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/participations/contacts/{contactIdentifier}/breakdown' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/marketing-events/2026-09/participations/contacts/{contactIdentifier}/breakdown`

Read Contact's participations by identifier - email or internal id.

<h3 id="read-participations-breakdown-by-contact-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contactIdentifier|path|string|true|The identifier of the Contact. It may be email or internal id.|
|after|query|string|false|The cursor indicating the position of the last retrieved item.|
|limit|query|integer(int32)|false|The limit for response size. The default value is 10, the max number is 100|
|state|query|string|false|The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-participations-breakdown-by-contact-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalParticipationBreakdown](#schemacollectionresponsewithtotalparticipationbreakdown)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.read )
</aside>

## Read participations counters by Marketing Event external identifier

<a id="opIdget-/marketing/marketing-events/2026-09/participations/{externalAccountId}/{externalEventId}_getParticipationsCountersByEventExternalId"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/participations/{externalAccountId}/{externalEventId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/marketing-events/2026-09/participations/{externalAccountId}/{externalEventId}`

Read Marketing event's participations counters by externalAccountId and externalEventId pair.

<h3 id="read-participations-counters-by-marketing-event-external-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalAccountId|path|string|true|The accountId that is associated with this marketing event in the external event application.|
|externalEventId|path|string|true|The id of the marketing event in the external event application.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-participations-counters-by-marketing-event-external-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[AttendanceCounters](#schemaattendancecounters)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.read )
</aside>

## Read participations breakdown by Marketing Event external identifier

<a id="opIdget-/marketing/marketing-events/2026-09/participations/{externalAccountId}/{externalEventId}/breakdown_getParticipationsBreakdownByExternalEventId"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/participations/{externalAccountId}/{externalEventId}/breakdown' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/marketing-events/2026-09/participations/{externalAccountId}/{externalEventId}/breakdown`

Read Marketing event's participations breakdown with optional filters by externalAccountId and externalEventId pair.

<h3 id="read-participations-breakdown-by-marketing-event-external-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalAccountId|path|string|true|The accountId that is associated with this marketing event in the external event application.|
|externalEventId|path|string|true|The id of the marketing event in the external event application.|
|after|query|string|false|The cursor indicating the position of the last retrieved item.|
|contactIdentifier|query|string|false|The identifier of the Contact. It may be email or internal id.|
|limit|query|integer(int32)|false|The limit for response size. The default value is 10, the max number is 100|
|state|query|string|false|The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-participations-breakdown-by-marketing-event-external-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalParticipationBreakdown](#schemacollectionresponsewithtotalparticipationbreakdown)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.read )
</aside>

## Read participations counters by Marketing Event internal identifier

<a id="opIdget-/marketing/marketing-events/2026-09/participations/{marketingEventId}_getParticipationsCountersByMarketingEventId"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/participations/{marketingEventId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/marketing-events/2026-09/participations/{marketingEventId}`

Read Marketing event's participations counters by internal identifier marketingEventId.

<h3 id="read-participations-counters-by-marketing-event-internal-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marketingEventId|path|integer(int64)|true|The internal id of the marketing event in HubSpot.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-participations-counters-by-marketing-event-internal-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[AttendanceCounters](#schemaattendancecounters)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.read )
</aside>

## Read participations breakdown by Marketing Event internal identifier

<a id="opIdget-/marketing/marketing-events/2026-09/participations/{marketingEventId}/breakdown_getParticipationsBreakdownByMarketingEventId"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/participations/{marketingEventId}/breakdown' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/marketing-events/2026-09/participations/{marketingEventId}/breakdown`

Read Marketing event's participations breakdown with optional filters by internal identifier marketingEventId.

<h3 id="read-participations-breakdown-by-marketing-event-internal-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marketingEventId|path|integer(int64)|true|The internal id of the marketing event in HubSpot.|
|after|query|string|false|The cursor indicating the position of the last retrieved item.|
|contactIdentifier|query|string|false|The identifier of the Contact. It may be email or internal id.|
|limit|query|integer(int32)|false|The limit for response size. The default value is 10, the max number is 100|
|state|query|string|false|The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-participations-breakdown-by-marketing-event-internal-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalParticipationBreakdown](#schemacollectionresponsewithtotalparticipationbreakdown)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.read )
</aside>

<h1 id="marketing-marketing-events-settings">Settings</h1>

## Retrieve the application settings

<a id="opIdget-/marketing/marketing-events/2026-09/{appId}/settings_getAll"></a>

> Code samples

```bash
curl "https://api.hubapi.com/marketing/marketing-events/2026-09/{appId}/settings?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /marketing/marketing-events/2026-09/{appId}/settings`

Retrieve the current settings for the application.

<h3 id="retrieve-the-application-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the application for which settings are being retrieved. It is an integer value.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-the-application-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[EventDetailSettings](#schemaeventdetailsettings)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Update the application settings

<a id="opIdpost-/marketing/marketing-events/2026-09/{appId}/settings_update"></a>

> Code samples

```bash
curl "https://api.hubapi.com/marketing/marketing-events/2026-09/{appId}/settings?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /marketing/marketing-events/2026-09/{appId}/settings`

Create or update the current settings for the application.

> Body parameter

```json
null
```

<h3 id="update-the-application-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the marketing event application whose settings are to be updated.|
|body|body|[EventDetailSettingsUrl](#schemaeventdetailsettingsurl)|true|none|
|» eventDetailsUrl|body|string|true|The url that will be used to fetch marketing event details by id. Must contain a `%s` character sequence that will be substituted with the event id. For example: `https://my.event.app/events/%s`|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-the-application-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[EventDetailSettings](#schemaeventdetailsettings)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

<h1 id="marketing-marketing-events-subscriber-state-changes">Subscriber State Changes</h1>

## Record a subscriber state by contact email

<a id="opIdpost-/marketing/marketing-events/2026-09/events/{externalEventId}/{subscriberState}/email-upsert_upsertByContactEmail"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/events/{externalEventId}/{subscriberState}/email-upsert?externalAccountId=' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/marketing-events/2026-09/events/{externalEventId}/{subscriberState}/email-upsert`

Record a subscriber state between multiple HubSpot contacts and a marketing event, using contact email addresses. Note that the contact must already exist in HubSpot; a contact will not be created. The contactProperties field is used only when creating a new contact. These properties will not update existing contacts. 

> Body parameter

```json
null
```

<h3 id="record-a-subscriber-state-by-contact-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalEventId|path|string|true|The ID of the marketing event in the external event application.|
|subscriberState|path|string|true|The state of the subscriber, which can be used to categorize subscribers based on their engagement with the event.|
|externalAccountId|query|string|true|The account ID associated with the marketing event in the external event application. This parameter is required.|
|body|body|[BatchInputMarketingEventEmailSubscriber](#schemabatchinputmarketingeventemailsubscriber)|true|none|
|» inputs|body|[[MarketingEventEmailSubscriber](#schemamarketingeventemailsubscriber)]|true|List of marketing event details to create or update|

> Example responses

> default Response

```json
null
```

<h3 id="record-a-subscriber-state-by-contact-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

## Record a subscriber state by contact ID

<a id="opIdpost-/marketing/marketing-events/2026-09/events/{externalEventId}/{subscriberState}/upsert_upsertByContactId"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/marketing-events/2026-09/events/{externalEventId}/{subscriberState}/upsert?externalAccountId=' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/marketing-events/2026-09/events/{externalEventId}/{subscriberState}/upsert`

Record a subscriber state between multiple HubSpot contacts and a marketing event, using HubSpot contact IDs. Note that the contact must already exist in HubSpot; a contact will not be created.

> Body parameter

```json
null
```

<h3 id="record-a-subscriber-state-by-contact-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalEventId|path|string|true|The ID of the marketing event in the external event application.|
|subscriberState|path|string|true|The state of the subscriber, which may include values such as 'register', 'attend', or 'cancel'.|
|externalAccountId|query|string|true|The account ID associated with the marketing event in the external event application.|
|body|body|[BatchInputMarketingEventSubscriber](#schemabatchinputmarketingeventsubscriber)|true|none|
|» inputs|body|[[MarketingEventSubscriber](#schemamarketingeventsubscriber)]|true|List of HubSpot contacts to subscribe to the marketing event|

> Example responses

> default Response

```json
null
```

<h3 id="record-a-subscriber-state-by-contact-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.marketing_events.write )
</aside>

# Schemas

<h2 id="tocS_AppInfo">AppInfo</h2>
<!-- backwards compatibility -->
<a id="schemaappinfo"></a>
<a id="schema_AppInfo"></a>
<a id="tocSappinfo"></a>
<a id="tocsappinfo"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the application|
|name|string|true|none|The name of the application|

<h2 id="tocS_AttendanceCounters">AttendanceCounters</h2>
<!-- backwards compatibility -->
<a id="schemaattendancecounters"></a>
<a id="schema_AttendanceCounters"></a>
<a id="tocSattendancecounters"></a>
<a id="tocsattendancecounters"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attended|integer(int32)|true|none|Number of attended contact records of a marketing event|
|cancelled|integer(int32)|true|none|Number of cancelled contact records of a marketing event|
|noShows|integer(int32)|true|none|Number of no-show contact records of a marketing event|
|registered|integer(int32)|true|none|Number of registered contact records of a marketing event|

<h2 id="tocS_BatchInputMarketingEventCreateRequestParams">BatchInputMarketingEventCreateRequestParams</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputmarketingeventcreaterequestparams"></a>
<a id="schema_BatchInputMarketingEventCreateRequestParams"></a>
<a id="tocSbatchinputmarketingeventcreaterequestparams"></a>
<a id="tocsbatchinputmarketingeventcreaterequestparams"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[MarketingEventCreateRequestParams](#schemamarketingeventcreaterequestparams)]|true|none|An array of MarketingEventCreateRequestParams objects, each containing the necessary details to create a marketing event. This includes properties such as event name, organizer, and custom properties.|

<h2 id="tocS_BatchInputMarketingEventEmailSubscriber">BatchInputMarketingEventEmailSubscriber</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputmarketingeventemailsubscriber"></a>
<a id="schema_BatchInputMarketingEventEmailSubscriber"></a>
<a id="tocSbatchinputmarketingeventemailsubscriber"></a>
<a id="tocsbatchinputmarketingeventemailsubscriber"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[MarketingEventEmailSubscriber](#schemamarketingeventemailsubscriber)]|true|none|List of marketing event details to create or update|

<h2 id="tocS_BatchInputMarketingEventExternalUniqueIdentifier">BatchInputMarketingEventExternalUniqueIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputmarketingeventexternaluniqueidentifier"></a>
<a id="schema_BatchInputMarketingEventExternalUniqueIdentifier"></a>
<a id="tocSbatchinputmarketingeventexternaluniqueidentifier"></a>
<a id="tocsbatchinputmarketingeventexternaluniqueidentifier"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[MarketingEventExternalUniqueIdentifier](#schemamarketingeventexternaluniqueidentifier)]|true|none|An array of MarketingEventExternalUniqueIdentifier objects, each representing a unique identifier for a marketing event. This is required for batch operations.|

<h2 id="tocS_BatchInputMarketingEventPublicObjectIdDeleteRequest">BatchInputMarketingEventPublicObjectIdDeleteRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputmarketingeventpublicobjectiddeleterequest"></a>
<a id="schema_BatchInputMarketingEventPublicObjectIdDeleteRequest"></a>
<a id="tocSbatchinputmarketingeventpublicobjectiddeleterequest"></a>
<a id="tocsbatchinputmarketingeventpublicobjectiddeleterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[MarketingEventPublicObjectIdDeleteRequest](#schemamarketingeventpublicobjectiddeleterequest)]|true|none|An array of marketing event public object IDs to be deleted. Each item in the array is a MarketingEventPublicObjectIdDeleteRequest object.|

<h2 id="tocS_BatchInputMarketingEventPublicUpdateRequestFullV2">BatchInputMarketingEventPublicUpdateRequestFullV2</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputmarketingeventpublicupdaterequestfullv2"></a>
<a id="schema_BatchInputMarketingEventPublicUpdateRequestFullV2"></a>
<a id="tocSbatchinputmarketingeventpublicupdaterequestfullv2"></a>
<a id="tocsbatchinputmarketingeventpublicupdaterequestfullv2"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[MarketingEventPublicUpdateRequestFullV2](#schemamarketingeventpublicupdaterequestfullv2)]|true|none|An array of MarketingEventPublicUpdateRequestFullV2 objects, each representing a marketing event update request. This property is required.|

<h2 id="tocS_BatchInputMarketingEventSubscriber">BatchInputMarketingEventSubscriber</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputmarketingeventsubscriber"></a>
<a id="schema_BatchInputMarketingEventSubscriber"></a>
<a id="tocSbatchinputmarketingeventsubscriber"></a>
<a id="tocsbatchinputmarketingeventsubscriber"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[MarketingEventSubscriber](#schemamarketingeventsubscriber)]|true|none|List of HubSpot contacts to subscribe to the marketing event|

<h2 id="tocS_BatchResponseMarketingEventPublicDefaultResponse">BatchResponseMarketingEventPublicDefaultResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsemarketingeventpublicdefaultresponse"></a>
<a id="schema_BatchResponseMarketingEventPublicDefaultResponse"></a>
<a id="tocSbatchresponsemarketingeventpublicdefaultresponse"></a>
<a id="tocsbatchresponsemarketingeventpublicdefaultresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|Timestamp of when the request was completed.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of errors encountered during the batch operation, each item detailing a specific error.|
|links|object|false|none|Result of the request.|
|numErrors|integer(int32)|false|none|The number of errors that occurred during the request.|
|requestedAt|string(date-time)|false|none|Timestamp of when the request was sent.|
|results|[[MarketingEventPublicDefaultResponse](#schemamarketingeventpublicdefaultresponse)]|true|none|An array of results from the batch operation, each item representing a response for an individual marketing event.|
|startedAt|string(date-time)|true|none|Timestamp of when the request started processing.|
|status|string|true|none|Status of the response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponseMarketingEventPublicDefaultResponseV2">BatchResponseMarketingEventPublicDefaultResponseV2</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsemarketingeventpublicdefaultresponsev2"></a>
<a id="schema_BatchResponseMarketingEventPublicDefaultResponseV2"></a>
<a id="tocSbatchresponsemarketingeventpublicdefaultresponsev2"></a>
<a id="tocsbatchresponsemarketingeventpublicdefaultresponsev2"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|Timestamp of when the request was processed.|
|links|object|false|none|Result object of the request.|
|requestedAt|string(date-time)|false|none|Timestamp of when the request was sent.|
|results|[[MarketingEventPublicDefaultResponseV2](#schemamarketingeventpublicdefaultresponsev2)]|true|none|An array containing the results of the batch operation, with each item representing a marketing event response.|
|startedAt|string(date-time)|true|none|Timestamp of when the request started processing.|
|status|string|true|none|The status of the response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponseMarketingEventPublicDefaultResponseV2WithErrors">BatchResponseMarketingEventPublicDefaultResponseV2WithErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsemarketingeventpublicdefaultresponsev2witherrors"></a>
<a id="schema_BatchResponseMarketingEventPublicDefaultResponseV2WithErrors"></a>
<a id="tocSbatchresponsemarketingeventpublicdefaultresponsev2witherrors"></a>
<a id="tocsbatchresponsemarketingeventpublicdefaultresponsev2witherrors"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|Timestamp that represents when the request finished processing|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of errors encountered during the batch operation, each represented as a StandardError object.|
|links|object|false|none|Result of the request|
|numErrors|integer(int32)|false|none|The number of errors that occurred during the processing|
|requestedAt|string(date-time)|false|none|Timestamp that represents when the request was made|
|results|[[MarketingEventPublicDefaultResponseV2](#schemamarketingeventpublicdefaultresponsev2)]|true|none|An array containing the results of the batch operation, each represented as a MarketingEventPublicDefaultResponseV2 object.|
|startedAt|string(date-time)|true|none|Timestamp that represents when the request started processing|
|status|string|true|none|The status of the request processing|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponseSubscriberEmailResponse">BatchResponseSubscriberEmailResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsesubscriberemailresponse"></a>
<a id="schema_BatchResponseSubscriberEmailResponse"></a>
<a id="tocSbatchresponsesubscriberemailresponse"></a>
<a id="tocsbatchresponsesubscriberemailresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|Timestamp that represents when the request finished processing|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of errors encountered during the batch operation, each providing details about the error.|
|links|object|false|none|Result of the request|
|numErrors|integer(int32)|false|none|The number of errors that occurred during the processing|
|requestedAt|string(date-time)|false|none|Timestamp that represents when the request was made|
|results|[[SubscriberEmailResponse](#schemasubscriberemailresponse)]|true|none|An array of results from the batch operation, each containing details about a subscriber email response.|
|startedAt|string(date-time)|true|none|Timestamp that represents when the request started processing|
|status|string|true|none|The status of the request processing|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponseSubscriberVidResponse">BatchResponseSubscriberVidResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsesubscribervidresponse"></a>
<a id="schema_BatchResponseSubscriberVidResponse"></a>
<a id="tocSbatchresponsesubscribervidresponse"></a>
<a id="tocsbatchresponsesubscribervidresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|Timestamp that represents when the request finished processing|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of StandardError objects, each detailing an error encountered during the batch operation.|
|links|object|false|none|Result of the request|
|numErrors|integer(int32)|false|none|The number of errors that occurred during the processing|
|requestedAt|string(date-time)|false|none|Timestamp that represents when the request was made|
|results|[[SubscriberVidResponse](#schemasubscribervidresponse)]|true|none|An array of SubscriberVidResponse objects, each representing the result of processing an individual subscriber VID.|
|startedAt|string(date-time)|true|none|Timestamp that represents when the request started processing|
|status|string|true|none|The status of the request processing|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging">CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsemarketingeventpublicreadresponsev2forwardpaging"></a>
<a id="schema_CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging"></a>
<a id="tocScollectionresponsemarketingeventpublicreadresponsev2forwardpaging"></a>
<a id="tocscollectionresponsemarketingeventpublicreadresponsev2forwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[MarketingEventPublicReadResponseV2](#schemamarketingeventpublicreadresponsev2)]|true|none|An array of marketing event public read responses, each containing details about a specific marketing event.|

<h2 id="tocS_CollectionResponseSearchPublicResponseWrapperNoPaging">CollectionResponseSearchPublicResponseWrapperNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsesearchpublicresponsewrappernopaging"></a>
<a id="schema_CollectionResponseSearchPublicResponseWrapperNoPaging"></a>
<a id="tocScollectionresponsesearchpublicresponsewrappernopaging"></a>
<a id="tocscollectionresponsesearchpublicresponsewrappernopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[SearchPublicResponseWrapper](#schemasearchpublicresponsewrapper)]|true|none|An array of search result objects, each represented by a SearchPublicResponseWrapper. This property contains the search results returned by the API.|

<h2 id="tocS_CollectionResponseWithTotalMarketingEventIdentifiersResponse">CollectionResponseWithTotalMarketingEventIdentifiersResponse</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalmarketingeventidentifiersresponse"></a>
<a id="schema_CollectionResponseWithTotalMarketingEventIdentifiersResponse"></a>
<a id="tocScollectionresponsewithtotalmarketingeventidentifiersresponse"></a>
<a id="tocscollectionresponsewithtotalmarketingeventidentifiersresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[MarketingEventIdentifiersResponse](#schemamarketingeventidentifiersresponse)]|true|none|An array containing the marketing event identifiers. Each item in the array is a MarketingEventIdentifiersResponse object.|
|total|integer(int32)|true|none|An integer representing the total number of marketing event identifiers.|

<h2 id="tocS_CollectionResponseWithTotalParticipationBreakdown">CollectionResponseWithTotalParticipationBreakdown</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalparticipationbreakdown"></a>
<a id="schema_CollectionResponseWithTotalParticipationBreakdown"></a>
<a id="tocScollectionresponsewithtotalparticipationbreakdown"></a>
<a id="tocscollectionresponsewithtotalparticipationbreakdown"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[ParticipationBreakdown](#schemaparticipationbreakdown)]|true|none|An array of participation breakdown objects, each detailing a specific participation instance.|
|total|integer(int32)|true|none|An integer representing the total number of participation breakdowns available.|

<h2 id="tocS_CollectionResponseWithTotalPublicList">CollectionResponseWithTotalPublicList</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalpubliclist"></a>
<a id="schema_CollectionResponseWithTotalPublicList"></a>
<a id="tocScollectionresponsewithtotalpubliclist"></a>
<a id="tocscollectionresponsewithtotalpubliclist"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[PublicList](#schemapubliclist)]|true|none|An array of public lists, where each list contains details such as list ID, version, name, and processing status.|
|total|integer(int32)|true|none|The total number of public lists available. It is an integer value.|

<h2 id="tocS_ContactAssociation">ContactAssociation</h2>
<!-- backwards compatibility -->
<a id="schemacontactassociation"></a>
<a id="schema_ContactAssociation"></a>
<a id="tocScontactassociation"></a>
<a id="tocscontactassociation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactId|string|true|none|The internal ID of the contact in HubSpot|
|email|string|true|none|The email of the contact in HubSpot|
|firstname|string|false|none|The first name of the contact in HubSpot|
|lastname|string|false|none|The last name of the contact in HubSpot|

<h2 id="tocS_CrmPropertyWrapper">CrmPropertyWrapper</h2>
<!-- backwards compatibility -->
<a id="schemacrmpropertywrapper"></a>
<a id="schema_CrmPropertyWrapper"></a>
<a id="tocScrmpropertywrapper"></a>
<a id="tocscrmpropertywrapper"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the property in the CRM|
|value|string|true|none|The value of the property in the CRM|

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

<h2 id="tocS_EventDetailSettings">EventDetailSettings</h2>
<!-- backwards compatibility -->
<a id="schemaeventdetailsettings"></a>
<a id="schema_EventDetailSettings"></a>
<a id="tocSeventdetailsettings"></a>
<a id="tocseventdetailsettings"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|integer(int32)|true|none|The id of the application the settings are for|
|eventDetailsUrl|string|true|none|The url that will be used to fetch marketing event details by id|

<h2 id="tocS_EventDetailSettingsUrl">EventDetailSettingsUrl</h2>
<!-- backwards compatibility -->
<a id="schemaeventdetailsettingsurl"></a>
<a id="schema_EventDetailSettingsUrl"></a>
<a id="tocSeventdetailsettingsurl"></a>
<a id="tocseventdetailsettingsurl"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventDetailsUrl|string|true|none|The url that will be used to fetch marketing event details by id. Must contain a `%s` character sequence that will be substituted with the event id. For example: `https://my.event.app/events/%s`|

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

<h2 id="tocS_MarketingEventAssociation">MarketingEventAssociation</h2>
<!-- backwards compatibility -->
<a id="schemamarketingeventassociation"></a>
<a id="schema_MarketingEventAssociation"></a>
<a id="tocSmarketingeventassociation"></a>
<a id="tocsmarketingeventassociation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalAccountId|string|false|none|The account ID that is associated with this marketing event in the external event application|
|externalEventId|string|false|none|The event ID that is associated with this marketing event in the external event application|
|marketingEventId|string|true|none|The internal ID of the marketing event in HubSpot|
|name|string|true|none|The name of the marketing event in HubSpot|

<h2 id="tocS_MarketingEventCompleteRequestParams">MarketingEventCompleteRequestParams</h2>
<!-- backwards compatibility -->
<a id="schemamarketingeventcompleterequestparams"></a>
<a id="schema_MarketingEventCompleteRequestParams"></a>
<a id="tocSmarketingeventcompleterequestparams"></a>
<a id="tocsmarketingeventcompleterequestparams"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDateTime|string(date-time)|true|none|The end date and time of the marketing event in ISO 8601 format|
|startDateTime|string(date-time)|true|none|The start date and time of the marketing event in ISO 8601 format|

<h2 id="tocS_MarketingEventCreateRequestParams">MarketingEventCreateRequestParams</h2>
<!-- backwards compatibility -->
<a id="schemamarketingeventcreaterequestparams"></a>
<a id="schema_MarketingEventCreateRequestParams"></a>
<a id="tocSmarketingeventcreaterequestparams"></a>
<a id="tocsmarketingeventcreaterequestparams"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customProperties|[[PropertyValue](#schemapropertyvalue)]|true|none|A list of PropertyValues. These can be whatever kind of property names and values you want. However, they must already exist on the HubSpot account's definition of the MarketingEvent Object. If they don't they will be filtered out and not set.<br>In order to do this you'll need to create a new PropertyGroup on the HubSpot account's MarketingEvent object for your specific app and create the Custom Property you want to track on that HubSpot account. Do not create any new default properties on the MarketingEvent object as that will apply to all HubSpot accounts.<br>|
|endDateTime|string(date-time)|false|none|The end date and time of the marketing event.|
|eventCancelled|boolean|false|none|Indicates if the marketing event has been cancelled.  Defaults to `false`|
|eventCompleted|boolean|false|none|Indicates if the marketing event has been completed.  Defaults to `false`|
|eventDescription|string|false|none|The description of the marketing event.|
|eventName|string|true|none|The name of the marketing event.|
|eventOrganizer|string|true|none|The name of the organizer of the marketing event.|
|eventType|string|false|none|Describes what type of event this is.  For example: `WEBINAR`, `CONFERENCE`, `WORKSHOP`|
|eventUrl|string|false|none|A URL in the external event application where the marketing event can be managed.|
|externalAccountId|string|true|none|The accountId that is associated with this marketing event in the external event application.|
|externalEventId|string|true|none|The id of the marketing event in the external event application.|
|startDateTime|string(date-time)|false|none|The start date and time of the marketing event.|

<h2 id="tocS_MarketingEventDefaultResponse">MarketingEventDefaultResponse</h2>
<!-- backwards compatibility -->
<a id="schemamarketingeventdefaultresponse"></a>
<a id="schema_MarketingEventDefaultResponse"></a>
<a id="tocSmarketingeventdefaultresponse"></a>
<a id="tocsmarketingeventdefaultresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customProperties|[[PropertyValue](#schemapropertyvalue)]|true|none|A list of PropertyValues. These can be whatever kind of property names and values you want. However, they must already exist on the HubSpot account's definition of the MarketingEvent Object. If they don't they will be filtered out and not set.<br>In order to do this you'll need to create a new PropertyGroup on the HubSpot account's MarketingEvent object for your specific app and create the Custom Property you want to track on that HubSpot account. Do not create any new default properties on the MarketingEvent object as that will apply to all HubSpot accounts.<br>|
|endDateTime|string(date-time)|false|none|The end date and time of the marketing event.|
|eventCancelled|boolean|false|none|Indicates if the marketing event has been cancelled.|
|eventCompleted|boolean|false|none|Indicates if the marketing event has been completed.|
|eventDescription|string|false|none|The description of the marketing event.|
|eventName|string|true|none|The name of the marketing event.|
|eventOrganizer|string|true|none|The name of the organizer of the marketing event.|
|eventType|string|false|none|The type of the marketing event.|
|eventUrl|string|false|none|The URL in the external event application where the marketing event can be managed.|
|objectId|string|false|none|The ID of the marketing event CRM object|
|startDateTime|string(date-time)|false|none|The start date and time of the marketing event.|

<h2 id="tocS_MarketingEventEmailSubscriber">MarketingEventEmailSubscriber</h2>
<!-- backwards compatibility -->
<a id="schemamarketingeventemailsubscriber"></a>
<a id="schema_MarketingEventEmailSubscriber"></a>
<a id="tocSmarketingeventemailsubscriber"></a>
<a id="tocsmarketingeventemailsubscriber"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactProperties|object|true|none|The key-value set that contains properties of the contact.|
|email|string|true|none|The email address of the contact in HubSpot to associate with the event.|
|interactionDateTime|integer(int64)|true|none|Timestamp in milliseconds at which the contact subscribed to the event.|
|properties|object|true|none|The key-value set that contains properties of the marketing event.|

<h2 id="tocS_MarketingEventExternalUniqueIdentifier">MarketingEventExternalUniqueIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemamarketingeventexternaluniqueidentifier"></a>
<a id="schema_MarketingEventExternalUniqueIdentifier"></a>
<a id="tocSmarketingeventexternaluniqueidentifier"></a>
<a id="tocsmarketingeventexternaluniqueidentifier"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|integer(int32)|true|none|The id of the application that created the marketing event in HubSpot.|
|externalAccountId|string|true|none|The accountId that is associated with this marketing event in the external event application.|
|externalEventId|string|true|none|The id of the marketing event in the external event application.|

<h2 id="tocS_MarketingEventIdentifiersResponse">MarketingEventIdentifiersResponse</h2>
<!-- backwards compatibility -->
<a id="schemamarketingeventidentifiersresponse"></a>
<a id="schema_MarketingEventIdentifiersResponse"></a>
<a id="tocSmarketingeventidentifiersresponse"></a>
<a id="tocsmarketingeventidentifiersresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appInfo|[AppInfo](#schemaappinfo)|false|none|none|
|externalAccountId|string|false|none|The accountId that is associated with this marketing event in the external event application|
|externalEventId|string|true|none|The ID that is associated with this marketing event in the external event application|
|marketingEventName|string|true|none|The name of the marketing event|
|objectId|string|true|none|The internal ID of the marketing event in HubSpot CRM|

<h2 id="tocS_MarketingEventPublicDefaultResponse">MarketingEventPublicDefaultResponse</h2>
<!-- backwards compatibility -->
<a id="schemamarketingeventpublicdefaultresponse"></a>
<a id="schema_MarketingEventPublicDefaultResponse"></a>
<a id="tocSmarketingeventpublicdefaultresponse"></a>
<a id="tocsmarketingeventpublicdefaultresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The creation date and time of the marketing event.|
|customProperties|[[PropertyValue](#schemapropertyvalue)]|true|none|A list of PropertyValues. These can be whatever kind of property names and values you want. However, they must already exist on the HubSpot account's definition of the MarketingEvent Object. If they don't they will be filtered out and not set.<br>In order to do this you'll need to create a new PropertyGroup on the HubSpot account's MarketingEvent object for your specific app and create the Custom Property you want to track on that HubSpot account. Do not create any new default properties on the MarketingEvent object as that will apply to all HubSpot accounts.<br>|
|endDateTime|string(date-time)|false|none|The end date and time of the marketing event.|
|eventCancelled|boolean|false|none|Indicates if the marketing event has been cancelled.|
|eventCompleted|boolean|false|none|Indicates if the marketing event has been completed.|
|eventDescription|string|false|none|The description of the marketing event.|
|eventName|string|true|none|The name of the marketing event.|
|eventOrganizer|string|true|none|The name of the organizer of the marketing event.|
|eventType|string|false|none|The type of the marketing event.|
|eventUrl|string|false|none|A URL in the external event application where the marketing event can be managed.|
|id|string|true|none|The ID of the marketing event CRM object.|
|objectId|string|false|none|The ID of the marketing event CRM object.|
|startDateTime|string(date-time)|false|none|The start date and time of the marketing event.|
|updatedAt|string(date-time)|true|none|The update date and time of the marketing event.|

<h2 id="tocS_MarketingEventPublicDefaultResponseV2">MarketingEventPublicDefaultResponseV2</h2>
<!-- backwards compatibility -->
<a id="schemamarketingeventpublicdefaultresponsev2"></a>
<a id="schema_MarketingEventPublicDefaultResponseV2"></a>
<a id="tocSmarketingeventpublicdefaultresponsev2"></a>
<a id="tocsmarketingeventpublicdefaultresponsev2"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appInfo|[AppInfo](#schemaappinfo)|false|none|none|
|createdAt|string(date-time)|true|none|The creation date and time of the marketing event|
|customProperties|[[CrmPropertyWrapper](#schemacrmpropertywrapper)]|true|none|An array of custom properties associated with the marketing event, each represented by a CrmPropertyWrapper object.|
|endDateTime|string(date-time)|false|none|The end date and time of the marketing event|
|eventCancelled|boolean|false|none|Indicates if the marketing event has been cancelled|
|eventCompleted|boolean|false|none|Indicates if the marketing event has been completed|
|eventDescription|string|false|none|The description of the marketing event|
|eventName|string|true|none|The name of the marketing event|
|eventOrganizer|string|false|none|The name of the organizer of the marketing event|
|eventType|string|false|none|The type of the marketing event|
|eventUrl|string|false|none|A URL in the external event application where the marketing event can be managed|
|objectId|string|true|none|The internal ID of the marketing event in HubSpot|
|startDateTime|string(date-time)|false|none|The start date and time of the marketing event|
|updatedAt|string(date-time)|true|none|The update date and time of the marketing event|

<h2 id="tocS_MarketingEventPublicObjectIdDeleteRequest">MarketingEventPublicObjectIdDeleteRequest</h2>
<!-- backwards compatibility -->
<a id="schemamarketingeventpublicobjectiddeleterequest"></a>
<a id="schema_MarketingEventPublicObjectIdDeleteRequest"></a>
<a id="tocSmarketingeventpublicobjectiddeleterequest"></a>
<a id="tocsmarketingeventpublicobjectiddeleterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|string|true|none|The internal ID of the marketing event in HubSpot|

<h2 id="tocS_MarketingEventPublicReadResponse">MarketingEventPublicReadResponse</h2>
<!-- backwards compatibility -->
<a id="schemamarketingeventpublicreadresponse"></a>
<a id="schema_MarketingEventPublicReadResponse"></a>
<a id="tocSmarketingeventpublicreadresponse"></a>
<a id="tocsmarketingeventpublicreadresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attendees|integer(int32)|true|none|The number of HubSpot contacts that attended this marketing event.|
|cancellations|integer(int32)|true|none|The number of HubSpot contacts that registered for this marketing event, but later cancelled their registration.|
|createdAt|string(date-time)|true|none|The creation date and time of the marketing event.|
|customProperties|[[PropertyValue](#schemapropertyvalue)]|true|none|A list of PropertyValues. These can be whatever kind of property names and values you want. However, they must already exist on the HubSpot account's definition of the MarketingEvent Object. If they don't they will be filtered out and not set.<br>In order to do this you'll need to create a new PropertyGroup on the HubSpot account's MarketingEvent object for your specific app and create the Custom Property you want to track on that HubSpot account. Do not create any new default properties on the MarketingEvent object as that will apply to all HubSpot accounts.<br>|
|endDateTime|string(date-time)|false|none|The end date and time of the marketing event.|
|eventCancelled|boolean|false|none|Indicates if the marketing event has been cancelled.|
|eventCompleted|boolean|false|none|Indicates if the marketing event has been completed.|
|eventDescription|string|false|none|The description of the marketing event.|
|eventName|string|true|none|The name of the marketing event.|
|eventOrganizer|string|true|none|The name of the organizer of the marketing event.|
|eventType|string|false|none|The type of the marketing event.|
|eventUrl|string|false|none|A URL in the external event application where the marketing event can be managed.|
|externalEventId|string|true|none|The id of the marketing event in the external event application.|
|id|string|true|none|The ID of the marketing event CRM object.|
|noShows|integer(int32)|true|none|The number of HubSpot contacts that registered for this marketing event, but did not attend. This field only had a value when the event is over.|
|objectId|string|false|none|The ID of the marketing event CRM object.|
|registrants|integer(int32)|true|none|The number of HubSpot contacts that registered for this marketing event.|
|startDateTime|string(date-time)|false|none|The start date and time of the marketing event.|
|updatedAt|string(date-time)|true|none|The update date and time of the marketing event.|

<h2 id="tocS_MarketingEventPublicReadResponseV2">MarketingEventPublicReadResponseV2</h2>
<!-- backwards compatibility -->
<a id="schemamarketingeventpublicreadresponsev2"></a>
<a id="schema_MarketingEventPublicReadResponseV2"></a>
<a id="tocSmarketingeventpublicreadresponsev2"></a>
<a id="tocsmarketingeventpublicreadresponsev2"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appInfo|[AppInfo](#schemaappinfo)|false|none|none|
|attendees|integer(int32)|false|none|Number of attended contact records of a marketing event|
|cancellations|integer(int32)|false|none|Number of cancelled contact records of a marketing event|
|createdAt|string(date-time)|true|none|The creation date and time of the marketing event|
|customProperties|[[CrmPropertyWrapper](#schemacrmpropertywrapper)]|true|none|An array of custom properties associated with the event.|
|endDateTime|string(date-time)|false|none|The end date and time of the marketing event|
|eventCancelled|boolean|false|none|Indicates if the marketing event has been cancelled|
|eventCompleted|boolean|false|none|Indicates if the marketing event has been completed|
|eventDescription|string|false|none|The description of the marketing event|
|eventName|string|true|none|The name of the marketing event|
|eventOrganizer|string|false|none|The name of the organizer of the marketing event|
|eventStatus|string|false|none|The status of the marketing event|
|eventStatusV2|string|false|none|The version 2 status of the event, represented as a string.|
|eventType|string|false|none|The type of the marketing event|
|eventUrl|string|false|none|A URL in the external event application where the marketing event can be managed|
|externalEventId|string|false|none|The ID that is associated with this marketing event in the external event application|
|noShows|integer(int32)|false|none|Number of no-show contact records of a marketing event|
|objectId|string|true|none|The internal ID of the marketing event in HubSpot|
|registrants|integer(int32)|false|none|Number of registered contact records of a marketing event|
|startDateTime|string(date-time)|false|none|The start date and time of the marketing event|
|updatedAt|string(date-time)|true|none|The update date and time of the marketing event|

<h2 id="tocS_MarketingEventPublicUpdateRequestFullV2">MarketingEventPublicUpdateRequestFullV2</h2>
<!-- backwards compatibility -->
<a id="schemamarketingeventpublicupdaterequestfullv2"></a>
<a id="schema_MarketingEventPublicUpdateRequestFullV2"></a>
<a id="tocSmarketingeventpublicupdaterequestfullv2"></a>
<a id="tocsmarketingeventpublicupdaterequestfullv2"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customProperties|[[PropertyValue](#schemapropertyvalue)]|true|none|An array of custom properties associated with the event, where each property is defined by a PropertyValue object.|
|endDateTime|string(date-time)|false|none|The end date and time of the marketing event|
|eventCancelled|boolean|false|none|Indicates if the marketing event has been cancelled|
|eventDescription|string|false|none|The description of the marketing event|
|eventName|string|false|none|The name of the marketing event|
|eventOrganizer|string|false|none|The name of the organizer of the marketing event|
|eventType|string|false|none|The type of the marketing event|
|eventUrl|string|false|none|A URL in the external event application where the marketing event can be managed|
|objectId|string|true|none|The internal ID of the marketing event in HubSpot|
|startDateTime|string(date-time)|false|none|The start date and time of the marketing event|

<h2 id="tocS_MarketingEventPublicUpdateRequestV2">MarketingEventPublicUpdateRequestV2</h2>
<!-- backwards compatibility -->
<a id="schemamarketingeventpublicupdaterequestv2"></a>
<a id="schema_MarketingEventPublicUpdateRequestV2"></a>
<a id="tocSmarketingeventpublicupdaterequestv2"></a>
<a id="tocsmarketingeventpublicupdaterequestv2"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customProperties|[[PropertyValue](#schemapropertyvalue)]|true|none|An array of custom properties associated with the event.|
|endDateTime|string(date-time)|false|none|The end date and time of the marketing event|
|eventCancelled|boolean|false|none|Indicates if the marketing event has been cancelled|
|eventDescription|string|false|none|The description of the marketing event|
|eventName|string|false|none|The name of the marketing event|
|eventOrganizer|string|false|none|The name of the organizer of the marketing event|
|eventType|string|false|none|The type of the marketing event|
|eventUrl|string|false|none|A URL in the external event application where the marketing event can be managed|
|startDateTime|string(date-time)|false|none|The start date and time of the marketing event|

<h2 id="tocS_MarketingEventSubscriber">MarketingEventSubscriber</h2>
<!-- backwards compatibility -->
<a id="schemamarketingeventsubscriber"></a>
<a id="schema_MarketingEventSubscriber"></a>
<a id="tocSmarketingeventsubscriber"></a>
<a id="tocsmarketingeventsubscriber"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interactionDateTime|integer(int64)|true|none|Timestamp in milliseconds at which the contact subscribed to the event.|
|properties|object|true|none|The key-value set of the properties of the contact|
|vid|integer(int64)|true|none|The ID of the contact in HubSpot|

<h2 id="tocS_MarketingEventUpdateRequestParams">MarketingEventUpdateRequestParams</h2>
<!-- backwards compatibility -->
<a id="schemamarketingeventupdaterequestparams"></a>
<a id="schema_MarketingEventUpdateRequestParams"></a>
<a id="tocSmarketingeventupdaterequestparams"></a>
<a id="tocsmarketingeventupdaterequestparams"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customProperties|[[PropertyValue](#schemapropertyvalue)]|true|none|A list of PropertyValues. These can be whatever kind of property names and values you want. However, they must already exist on the HubSpot account's definition of the MarketingEvent Object. If they don't they will be filtered out and not set.<br>In order to do this you'll need to create a new PropertyGroup on the HubSpot account's MarketingEvent object for your specific app and create the Custom Property you want to track on that HubSpot account. Do not create any new default properties on the MarketingEvent object as that will apply to all HubSpot accounts.<br>|
|endDateTime|string(date-time)|false|none|The end date and time of the marketing event.|
|eventCancelled|boolean|false|none|Indicates if the marketing event has been cancelled. Defaults to `false`|
|eventCompleted|boolean|false|none|Indicates if the marketing event has been completed. Defaults to `false`|
|eventDescription|string|false|none|The description of the marketing event.|
|eventName|string|false|none|The name of the marketing event.|
|eventOrganizer|string|false|none|The name of the organizer of the marketing event.|
|eventType|string|false|none|Describes what type of event this is.  For example: `WEBINAR`, `CONFERENCE`, `WORKSHOP`|
|eventUrl|string|false|none|A URL in the external event application where the marketing event can be managed.|
|startDateTime|string(date-time)|false|none|The start date and time of the marketing event.|

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
|end|integer(int32)|true|none|An integer indicating the ending position of the masked substring.|
|label|string|true|none|none|
|start|integer(int32)|true|none|An integer indicating the starting position of the masked substring.|

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
|substrings|[[MaskedSubstring](#schemamaskedsubstring)]|true|none|An array of masked substring objects, each defining a specific portion of a string to be masked. Each object in the array specifies the start and end positions of the substring to be masked.|

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
|after|string|true|none|The ID element at the start of the page|
|link|string|false|none|Link to the next page|

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

<h2 id="tocS_ParticipationAssociations">ParticipationAssociations</h2>
<!-- backwards compatibility -->
<a id="schemaparticipationassociations"></a>
<a id="schema_ParticipationAssociations"></a>
<a id="tocSparticipationassociations"></a>
<a id="tocsparticipationassociations"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contact|[ContactAssociation](#schemacontactassociation)|true|none|none|
|marketingEvent|[MarketingEventAssociation](#schemamarketingeventassociation)|true|none|none|

<h2 id="tocS_ParticipationBreakdown">ParticipationBreakdown</h2>
<!-- backwards compatibility -->
<a id="schemaparticipationbreakdown"></a>
<a id="schema_ParticipationBreakdown"></a>
<a id="tocSparticipationbreakdown"></a>
<a id="tocsparticipationbreakdown"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associations|[ParticipationAssociations](#schemaparticipationassociations)|true|none|none|
|createdAt|string(date-time)|true|none|The creation time and date of the target marketing event|
|id|string|true|none|The internal ID of the target marketing event|
|properties|[ParticipationProperties](#schemaparticipationproperties)|true|none|none|

<h2 id="tocS_ParticipationProperties">ParticipationProperties</h2>
<!-- backwards compatibility -->
<a id="schemaparticipationproperties"></a>
<a id="schema_ParticipationProperties"></a>
<a id="tocSparticipationproperties"></a>
<a id="tocsparticipationproperties"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attendanceDurationSeconds|integer(int32)|false|none|The number of seconds the participation lasted|
|attendancePercentage|string|false|none|Percentage of the participation duration relative to the event duration|
|attendanceState|string|true|none|The state of the participation|
|occurredAt|integer(int64)|true|none|Timestamp of when the participation occurred|

#### Enumerated Values

|Property|Value|
|---|---|
|attendanceState|ATTENDED|
|attendanceState|CANCELLED|
|attendanceState|EMPTY|
|attendanceState|NO_SHOW|
|attendanceState|REGISTERED|

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
|before|string|true|none|A string that serves as a cursor indicating the position before the first item in the current set of results, used to fetch the previous set of results.|
|link|string|false|none|A string containing the URL link to the previous page of results.|

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
|dataSensitivity|string|true|none|Level of data sensitivity|
|isEncrypted|boolean|true|none|Indicates whether the property is encrypted|
|isLargeValue|boolean|true|none|Indicates whether the property value is stored as a large value in the storage|
|maskedSubstrings|[MaskedSubstrings](#schemamaskedsubstrings)|true|none|none|
|name|string|true|none|Name of custom property|
|persistenceTimestamp|integer(int64)|true|none|The timestamp that indicates when the value being written is persisted in storage|
|requestId|string|true|none|The ID of the request|
|selectedByUser|boolean|true|none|Indicates whether the property is selected|
|selectedByUserTimestamp|integer(int64)|true|none|Timestamp of when the property was selected by the user|
|source|string|true|none|Source of the property|
|sourceId|string|true|none|ID of the source of the property|
|sourceLabel|string|true|none|Label of the source of the property|
|sourceMetadata|string|true|none|Source metadata encoded as a base64 string|
|sourceUpstreamDeployable|string|true|none|Indicates which upstream service made the property change|
|sourceVid|[integer(int64)]|true|none|An array of integers representing IDs associated with the source of the property value.|
|timestamp|integer(int64)|true|none|Timestamp of the request|
|unit|string|true|none|The unit|
|updatedByUserId|integer(int32)|true|none|The ID of the user who last updated the property|
|useTimestampAsPersistenceTimestamp|boolean|true|none|Indicates if the persistence timestamp is the same as storage version timestamp|
|value|string|true|none|Custom property value|

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

<h2 id="tocS_PublicList">PublicList</h2>
<!-- backwards compatibility -->
<a id="schemapubliclist"></a>
<a id="schema_PublicList"></a>
<a id="tocSpubliclist"></a>
<a id="tocspubliclist"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|Timestamp of the creation of the list|
|createdById|string|false|none|The ID of the user who created the list|
|deletedAt|string(date-time)|false|none|Timestamp of the deletion of the list|
|filtersUpdatedAt|string(date-time)|false|none|Timestamp of the last update of the list filters|
|listId|string|true|none|An internal ID of the list|
|listVersion|integer(int32)|true|none|A number that represents a version of the list|
|name|string|true|none|The name of the list|
|objectTypeId|string|true|none|The internal ID of the object type of the list|
|processingStatus|string|true|none|Represents the current processing status of the list|
|processingType|string|true|none|Processing type of the list|
|size|integer(int64)|false|none|The size of the result list|
|updatedAt|string(date-time)|false|none|Timestamp of the last update of the list|
|updatedById|string|false|none|The ID of the user who last updated the list|

<h2 id="tocS_SearchPublicResponseWrapper">SearchPublicResponseWrapper</h2>
<!-- backwards compatibility -->
<a id="schemasearchpublicresponsewrapper"></a>
<a id="schema_SearchPublicResponseWrapper"></a>
<a id="tocSsearchpublicresponsewrapper"></a>
<a id="tocssearchpublicresponsewrapper"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|integer(int32)|true|none|The ID of the source application of the marketing event|
|externalAccountId|string|true|none|The account ID associated with this marketing event in the external application|
|externalEventId|string|true|none|The ID of the marketing event in the external event application|
|objectId|string|true|none|The internal ID of the marketing event in HubSpot|

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
|category|string|true|none|The category of the error|
|context|object|true|none|The object that contains details of the errors|
|errors|[[ErrorDetail](#schemaerrordetail)]|true|none|An array of ErrorDetail objects providing further information about the error.|
|id|string|false|none|The ID of the request|
|links|object|true|none|Results of the request|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|status|string|true|none|Status of the response|
|subCategory|object|false|none|The Sub-category of the error|

<h2 id="tocS_SubscriberEmailResponse">SubscriberEmailResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubscriberemailresponse"></a>
<a id="schema_SubscriberEmailResponse"></a>
<a id="tocSsubscriberemailresponse"></a>
<a id="tocssubscriberemailresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|The email of the contact|
|vid|integer(int64)|true|none|The internal ID of the contact|

<h2 id="tocS_SubscriberVidResponse">SubscriberVidResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubscribervidresponse"></a>
<a id="schema_SubscriberVidResponse"></a>
<a id="tocSsubscribervidresponse"></a>
<a id="tocssubscribervidresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vid|integer(int64)|true|none|The internal ID of the contact|
