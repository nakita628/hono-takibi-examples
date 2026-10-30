<h1 id="webhooks-webhooks">Webhooks Webhooks v2026-09</h1>

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

<h1 id="webhooks-webhooks-advanced">Advanced</h1>

## Create Snapshot

<a id="opIdpost-/webhooks-journal/snapshots/2026-09/crm_/webhooks-journal/snapshots/2026-03/crm"></a>

> Code samples

```bash
curl https://api.hubapi.com/webhooks-journal/snapshots/2026-09/crm \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /webhooks-journal/snapshots/2026-09/crm`

Create a batch of CRM object snapshots for the specified portal. This endpoint allows you to capture the state of CRM objects at a specific point in time, which can be useful for auditing or historical analysis. The request requires a list of CRM object snapshot requests, each specifying the portal ID, object ID, object type ID, and properties to include in the snapshot.

> Body parameter

```json
null
```

<h3 id="create-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CrmObjectSnapshotBatchRequest](#schemacrmobjectsnapshotbatchrequest)|true|none|
|» snapshotRequests|body|[[CrmObjectSnapshotRequest](#schemacrmobjectsnapshotrequest)]|true|An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object. This property is required.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CrmObjectSnapshotBatchResponse](#schemacrmobjectsnapshotbatchresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create Filter

<a id="opIdpost-/webhooks-journal/subscriptions/2026-09/filters_/webhooks-journal/subscriptions/2026-03/filters"></a>

> Code samples

```bash
curl https://api.hubapi.com/webhooks-journal/subscriptions/2026-09/filters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /webhooks-journal/subscriptions/2026-09/filters`

Create a new filter for a webhook subscription in your HubSpot account. This endpoint allows you to define specific conditions that a webhook event must meet to trigger the subscription. It is useful for managing and customizing the behavior of webhook subscriptions based on specific criteria.

> Body parameter

```json
null
```

<h3 id="create-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FilterCreateRequest](#schemafiltercreaterequest)|true|none|
|» filter|body|[Filter](#schemafilter)|true|Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. |
|» subscriptionId|body|integer(int64)|true|The unique identifier of the subscription to which the filter will be applied. It is an integer formatted as int64.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FilterCreateResponse](#schemafiltercreateresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="webhooks-webhooks-basic">Basic</h1>

## Read webhook settings

<a id="opIdget-/app-webhooks/2026-09/{appId}/settings_getAll"></a>

> Code samples

```bash
curl "https://api.hubapi.com/app-webhooks/2026-09/{appId}/settings?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /app-webhooks/2026-09/{appId}/settings`

Retrieve the webhook settings for the specified app, including the webhook’s target URL, throttle configuration, and create/update date.

<h3 id="read-webhook-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app whose webhook settings are being retrieved.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-webhook-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SettingsResponse](#schemasettingsresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Update webhook settings

<a id="opIdput-/app-webhooks/2026-09/{appId}/settings_configure"></a>

> Code samples

```bash
curl "https://api.hubapi.com/app-webhooks/2026-09/{appId}/settings?hapikey=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PUT /app-webhooks/2026-09/{appId}/settings`

Update webhook settings for the specified app.

> Body parameter

```json
null
```

<h3 id="update-webhook-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app whose webhook settings are to be updated.|
|body|body|[SettingsChangeRequest](#schemasettingschangerequest)|true|none|
|» targetUrl|body|string|true|The URL to which webhook events will be sent. It is a string.|
|» throttling|body|[ThrottlingSettings](#schemathrottlingsettings)|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-webhook-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SettingsResponse](#schemasettingsresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Delete webhook settings

<a id="opIddelete-/app-webhooks/2026-09/{appId}/settings_clear"></a>

> Code samples

```bash
curl "https://api.hubapi.com/app-webhooks/2026-09/{appId}/settings?hapikey=${API_KEY}" \
  -X DELETE
```

`DELETE /app-webhooks/2026-09/{appId}/settings`

Delete the webhook settings for the specified app. Event subscriptions will not be deleted, but will be paused until another webhook is created.

<h3 id="delete-webhook-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app whose webhook settings are to be deleted.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-webhook-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Read event subscriptions

<a id="opIdget-/app-webhooks/2026-09/{appId}/subscriptions_getAll"></a>

> Code samples

```bash
curl "https://api.hubapi.com/app-webhooks/2026-09/{appId}/subscriptions?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /app-webhooks/2026-09/{appId}/subscriptions`

Retrieve event subscriptions for the specified app.

<h3 id="read-event-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app for which to retrieve subscriptions.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-event-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SubscriptionListResponse](#schemasubscriptionlistresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Create an event subscription

<a id="opIdpost-/app-webhooks/2026-09/{appId}/subscriptions_create"></a>

> Code samples

```bash
curl "https://api.hubapi.com/app-webhooks/2026-09/{appId}/subscriptions?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /app-webhooks/2026-09/{appId}/subscriptions`

Create new event subscription for the specified app.

> Body parameter

```json
null
```

<h3 id="create-an-event-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app for which the webhook subscription is being created.|
|body|body|[SubscriptionCreateRequest](#schemasubscriptioncreaterequest)|true|none|
|» active|body|boolean|true|A boolean indicating whether the subscription is active.|
|» eventType|body|string|true|A string representing the type of event to subscribe to. Valid values include various property changes, creations, deletions, merges, restorations, association changes, and event completions.|
|» eventTypeName|body|string|false|A string providing a human-readable name for the event type.|
|» objectTypeId|body|string|false|A string representing the ID of the object type associated with the subscription.|
|» propertyName|body|string|false|A string indicating the specific property name related to the event type, if applicable.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» eventType|company.associationChange|
|» eventType|company.creation|
|» eventType|company.deletion|
|» eventType|company.merge|
|» eventType|company.propertyChange|
|» eventType|company.restore|
|» eventType|contact.associationChange|
|» eventType|contact.creation|
|» eventType|contact.deletion|
|» eventType|contact.merge|
|» eventType|contact.privacyDeletion|
|» eventType|contact.propertyChange|
|» eventType|contact.restore|
|» eventType|conversation.creation|
|» eventType|conversation.deletion|
|» eventType|conversation.newMessage|
|» eventType|conversation.privacyDeletion|
|» eventType|conversation.propertyChange|
|» eventType|deal.associationChange|
|» eventType|deal.creation|
|» eventType|deal.deletion|
|» eventType|deal.merge|
|» eventType|deal.propertyChange|
|» eventType|deal.restore|
|» eventType|event.completed|
|» eventType|line_item.associationChange|
|» eventType|line_item.creation|
|» eventType|line_item.deletion|
|» eventType|line_item.merge|
|» eventType|line_item.propertyChange|
|» eventType|line_item.restore|
|» eventType|object.associationChange|
|» eventType|object.creation|
|» eventType|object.deletion|
|» eventType|object.merge|
|» eventType|object.propertyChange|
|» eventType|object.restore|
|» eventType|product.creation|
|» eventType|product.deletion|
|» eventType|product.merge|
|» eventType|product.propertyChange|
|» eventType|product.restore|
|» eventType|ticket.associationChange|
|» eventType|ticket.creation|
|» eventType|ticket.deletion|
|» eventType|ticket.merge|
|» eventType|ticket.propertyChange|
|» eventType|ticket.restore|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-an-event-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[SubscriptionResponse](#schemasubscriptionresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Read an event subscription

<a id="opIdget-/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}_getById"></a>

> Code samples

```bash
curl "https://api.hubapi.com/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}`

Retrieve a specific event subscription by ID.

<h3 id="read-an-event-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app for which the subscription is configured.|
|subscriptionId|path|integer(int32)|true|The unique identifier of the subscription to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-an-event-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SubscriptionResponse](#schemasubscriptionresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Delete event subscription

<a id="opIddelete-/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}_archive"></a>

> Code samples

```bash
curl "https://api.hubapi.com/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}?hapikey=${API_KEY}" \
  -X DELETE
```

`DELETE /app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}`

Delete an existing event subscription by ID.

<h3 id="delete-event-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app for which the subscription is configured.|
|subscriptionId|path|integer(int32)|true|The unique identifier of the subscription to delete.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-event-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Update an event subscription

<a id="opIdpatch-/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}_update"></a>

> Code samples

```bash
curl "https://api.hubapi.com/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}?hapikey=${API_KEY}" \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PATCH /app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}`

Update an existing event subscription by ID.

> Body parameter

```json
null
```

<h3 id="update-an-event-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app for which the subscription is being updated.|
|subscriptionId|path|integer(int32)|true|The unique identifier of the subscription to update.|
|body|body|[SubscriptionPatchRequest](#schemasubscriptionpatchrequest)|true|none|
|» active|body|boolean|false|A boolean indicating whether the subscription is active. If true, the subscription is active; if false, it is inactive.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-an-event-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SubscriptionResponse](#schemasubscriptionresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Retrieve earliest

<a id="opIdget-/webhooks-journal/journal-local/2026-09/earliest_/webhooks-journal/journal-local/2026-03/earliest"></a>

> Code samples

```bash
curl https://api.hubapi.com/webhooks-journal/journal-local/2026-09/earliest
```

`GET /webhooks-journal/journal-local/2026-09/earliest`

Retrieve the earliest entry from the webhooks journal for the specified portal. This endpoint is useful for accessing the oldest records in the journal, which can be helpful for auditing or tracking purposes.

<h3 id="retrieve-earliest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|installPortalId|query|integer(int32)|false|The ID of the portal installation for which to retrieve the earliest journal entry. This parameter helps specify the context of the request.|

> Example responses

> default Response

```json
null
```

<h3 id="retrieve-earliest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve latest journal

<a id="opIdget-/webhooks-journal/journal-local/2026-09/latest_/webhooks-journal/journal-local/2026-03/latest"></a>

> Code samples

```bash
curl https://api.hubapi.com/webhooks-journal/journal-local/2026-09/latest
```

`GET /webhooks-journal/journal-local/2026-09/latest`

Retrieve the latest entries from the webhooks journal for the specified portal. This endpoint is useful for accessing the most recent webhook events that have been logged, allowing you to process or analyze them as needed.

<h3 id="retrieve-latest-journal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|installPortalId|query|integer(int32)|false|The ID of the installation portal to filter the webhook journal entries. It is an integer value.|

> Example responses

> default Response

```json
null
```

<h3 id="retrieve-latest-journal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve Next Batch

<a id="opIdget-/webhooks-journal/journal-local/2026-09/offset/{offset}/next_/webhooks-journal/journal-local/2026-03/offset/{offset}/next"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/journal-local/2026-09/offset/{offset}/next'
```

`GET /webhooks-journal/journal-local/2026-09/offset/{offset}/next`

Retrieve the next set of webhook journal entries starting from a specified offset. This endpoint is useful for paginating through webhook journal data in a sequential manner, allowing you to fetch entries beyond a given point.

<h3 id="retrieve-next-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|path|string|true|The offset string indicating the starting point for retrieving the next batch of journal entries.|
|installPortalId|query|integer(int32)|false|An integer representing the ID of the portal installation for which to retrieve the journal entries.|

> Example responses

> default Response

```json
null
```

<h3 id="retrieve-next-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve status

<a id="opIdget-/webhooks-journal/journal-local/2026-09/status/{statusId}_/webhooks-journal/journal-local/2026-03/status/{statusId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/journal-local/2026-09/status/{statusId}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/journal-local/2026-09/status/{statusId}`

Retrieve the status of a specific webhook journal entry using its unique status ID. This endpoint is useful for monitoring the progress or completion of webhook processing tasks.

<h3 id="retrieve-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|statusId|path|string(uuid)|true|The unique identifier of the status to retrieve. It is a UUID format string.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SnapshotStatusResponse](#schemasnapshotstatusresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve earliest

<a id="opIdget-/webhooks-journal/journal/2026-09/earliest_/webhooks-journal/journal/2026-03/earliest"></a>

> Code samples

```bash
curl https://api.hubapi.com/webhooks-journal/journal/2026-09/earliest
```

`GET /webhooks-journal/journal/2026-09/earliest`

Retrieve the earliest entry from the webhooks journal for the specified version. This endpoint is useful for accessing the oldest records available in the journal, which can be helpful for auditing or historical data analysis.

<h3 id="retrieve-earliest-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|installPortalId|query|integer(int32)|false|The ID of the installation portal for which to retrieve the earliest journal entry. This is an integer value.|

> Example responses

> default Response

```json
null
```

<h3 id="retrieve-earliest-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve latest journal

<a id="opIdget-/webhooks-journal/journal/2026-09/latest_/webhooks-journal/journal/2026-03/latest"></a>

> Code samples

```bash
curl https://api.hubapi.com/webhooks-journal/journal/2026-09/latest
```

`GET /webhooks-journal/journal/2026-09/latest`

Retrieve the latest entries from the webhooks journal for the specified portal. This endpoint is useful for accessing the most recent webhook events processed by your HubSpot account. It allows you to filter the results by the portal ID to ensure you are retrieving data relevant to a specific installation.

<h3 id="retrieve-latest-journal-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|installPortalId|query|integer(int32)|false|The unique identifier of the portal installation to filter the journal entries.|

> Example responses

> default Response

```json
null
```

<h3 id="retrieve-latest-journal-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve Next Batch

<a id="opIdget-/webhooks-journal/journal/2026-09/offset/{offset}/next_/webhooks-journal/journal/2026-03/offset/{offset}/next"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/journal/2026-09/offset/{offset}/next'
```

`GET /webhooks-journal/journal/2026-09/offset/{offset}/next`

Retrieve the next batch of webhook journal entries starting from a specified offset. This endpoint is useful for paginating through large sets of webhook data, allowing you to continue fetching entries from where you last left off.

<h3 id="retrieve-next-batch-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|path|string|true|The offset from which to start retrieving the next set of webhook journal entries. It is a string value.|
|installPortalId|query|integer(int32)|false|The ID of the portal installation for which the webhook journal entries are being retrieved. It is an integer value.|

> Example responses

> default Response

```json
null
```

<h3 id="retrieve-next-batch-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve status

<a id="opIdget-/webhooks-journal/journal/2026-09/status/{statusId}_/webhooks-journal/journal/2026-03/status/{statusId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/journal/2026-09/status/{statusId}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/journal/2026-09/status/{statusId}`

Retrieve the status of a specific webhook journal snapshot entry using its snapshot ID. This endpoint is useful for checking the current state of a webhooks journal snapshot, such as whether it is pending, in progress, successful, failed, or expired.

<h3 id="retrieve-status-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|statusId|path|string(uuid)|true|The unique identifier (UUID) of the webhook journal status to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-status-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SnapshotStatusResponse](#schemasnapshotstatusresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Existing Subscriptions

<a id="opIdget-/webhooks-journal/subscriptions/2026-09_/webhooks-journal/subscriptions/2026-03"></a>

> Code samples

```bash
curl https://api.hubapi.com/webhooks-journal/subscriptions/2026-09 \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/subscriptions/2026-09`

Fetch existing subscriptions for the authenticated app

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-existing-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseSubscriptionResponseMarch2027NoPaging](#schemacollectionresponsesubscriptionresponsemarch2027nopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Upsert Subscription

<a id="opIdpost-/webhooks-journal/subscriptions/2026-09_/webhooks-journal/subscriptions/2026-03"></a>

> Code samples

```bash
curl https://api.hubapi.com/webhooks-journal/subscriptions/2026-09 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /webhooks-journal/subscriptions/2026-09`

Create or update an existing subscription by specifying the fields and shapes of what events you need to listen to. Full documentation on potential subscription types can be found on the overview documentation page. 

> Body parameter

```json
null
```

<h3 id="upsert-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubscriptionUpsertRequest](#schemasubscriptionupsertrequest)|true|none|
|» *oneOf*|body|[ObjectSubscriptionUpsertRequest](#schemaobjectsubscriptionupsertrequest)|false|none|
|» *oneOf*|body|[AssociationSubscriptionUpsertRequest](#schemaassociationsubscriptionupsertrequest)|false|none|
|» *oneOf*|body|[AppLifecycleEventSubscriptionUpsertRequest](#schemaapplifecycleeventsubscriptionupsertrequest)|false|none|
|» *oneOf*|body|[ListMembershipSubscriptionUpsertRequest](#schemalistmembershipsubscriptionupsertrequest)|false|none|
|» *oneOf*|body|[GdprPrivacyDeletionSubscriptionUpsertRequest](#schemagdprprivacydeletionsubscriptionupsertrequest)|false|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="upsert-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SubscriptionResponse_1](#schemasubscriptionresponse_1)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve Filters

<a id="opIdget-/webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}_/webhooks-journal/subscriptions/2026-03/filters/subscription/{subscriptionId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}`

Retrieve the filters associated with a specific webhook subscription in the HubSpot account. This endpoint is useful for obtaining detailed information about the filters applied to a given subscription, identified by its subscription ID.

<h3 id="retrieve-filters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|integer(int64)|true|The unique identifier of the subscription for which to retrieve filters.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-filters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|An error occurred.|[Error](#schemaerror)|

<h3 id="retrieve-filters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FilterResponse](#schemafilterresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve filter

<a id="opIdget-/webhooks-journal/subscriptions/2026-09/filters/{filterId}_/webhooks-journal/subscriptions/2026-03/filters/{filterId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/subscriptions/2026-09/filters/{filterId}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/subscriptions/2026-09/filters/{filterId}`

Retrieve details of a specific filter associated with a webhook subscription in the HubSpot account. This endpoint is useful for accessing the configuration and conditions of a filter by its unique identifier.

<h3 id="retrieve-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filterId|path|integer(int64)|true|The unique identifier of the filter to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FilterResponse](#schemafilterresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete filter

<a id="opIddelete-/webhooks-journal/subscriptions/2026-09/filters/{filterId}_/webhooks-journal/subscriptions/2026-03/filters/{filterId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/subscriptions/2026-09/filters/{filterId}' \
  -X DELETE
```

`DELETE /webhooks-journal/subscriptions/2026-09/filters/{filterId}`

Delete a specific filter associated with a webhook journal subscription. This operation is useful for managing and cleaning up filters that are no longer needed in your subscription setup. The endpoint requires the unique identifier of the filter to be deleted.

<h3 id="delete-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filterId|path|integer(int64)|true|The unique identifier of the filter to delete. It is required to specify which filter should be removed from the subscription.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete subscription

<a id="opIddelete-/webhooks-journal/subscriptions/2026-09/portals/{portalId}_/webhooks-journal/subscriptions/2026-03/portals/{portalId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/subscriptions/2026-09/portals/{portalId}' \
  -X DELETE
```

`DELETE /webhooks-journal/subscriptions/2026-09/portals/{portalId}`

Delete a webhook journal subscription for a specific portal. This operation removes the subscription associated with the given portalId, and no content is returned upon successful deletion.

<h3 id="delete-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|portalId|path|integer(int64)|true|The unique identifier of the portal for which the subscription is to be deleted.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve subscription

<a id="opIdget-/webhooks-journal/subscriptions/2026-09/{subscriptionId}_/webhooks-journal/subscriptions/2026-03/{subscriptionId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/subscriptions/2026-09/{subscriptionId}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/subscriptions/2026-09/{subscriptionId}`

Retrieve details of a specific webhook subscription using its unique identifier. This endpoint is useful for obtaining information about a particular subscription's configuration and status within the HubSpot account.

<h3 id="retrieve-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|integer(int64)|true|The unique identifier of the subscription to retrieve. It is an integer value.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SubscriptionResponse_1](#schemasubscriptionresponse_1)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete subscription

<a id="opIddelete-/webhooks-journal/subscriptions/2026-09/{subscriptionId}_/webhooks-journal/subscriptions/2026-03/{subscriptionId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/subscriptions/2026-09/{subscriptionId}' \
  -X DELETE
```

`DELETE /webhooks-journal/subscriptions/2026-09/{subscriptionId}`

Delete a specific webhook journal subscription using its unique identifier. This operation is useful for managing and cleaning up subscriptions that are no longer needed or relevant.

<h3 id="delete-subscription-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|integer(int64)|true|The unique identifier of the subscription to delete.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-subscription-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="webhooks-webhooks-batch">Batch</h1>

## Batch create event subscriptions

<a id="opIdpost-/app-webhooks/2026-09/{appId}/subscriptions/batch/update_updateBatch"></a>

> Code samples

```bash
curl "https://api.hubapi.com/app-webhooks/2026-09/{appId}/subscriptions/batch/update?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /app-webhooks/2026-09/{appId}/subscriptions/batch/update`

Batch create event subscriptions for the specified app.

> Body parameter

```json
null
```

<h3 id="batch-create-event-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app for which the subscriptions are being updated.|
|body|body|[BatchInputSubscriptionBatchUpdateRequest](#schemabatchinputsubscriptionbatchupdaterequest)|true|none|
|» inputs|body|[[SubscriptionBatchUpdateRequest](#schemasubscriptionbatchupdaterequest)]|true|An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated. This property is required.|

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

<h3 id="batch-create-event-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseSubscriptionResponse](#schemabatchresponsesubscriptionresponse)|
|207|Multi-Status|multiple statuses|[BatchResponseSubscriptionResponseWithErrors](#schemabatchresponsesubscriptionresponsewitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Retrieve Batch

<a id="opIdget-/webhooks-journal/journal-local/2026-09/batch/earliest/{count}_/webhooks-journal/journal-local/2026-03/batch/earliest/{count}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/journal-local/2026-09/batch/earliest/{count}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/journal-local/2026-09/batch/earliest/{count}`

Retrieve the earliest batch of webhook journal entries based on the specified count. This endpoint is useful for fetching a specific number of the earliest entries in the webhook journal for analysis or processing.

<h3 id="retrieve-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|path|integer(int32)|true|The number of entries to retrieve in the batch. This must be an integer with a minimum value of 1.|
|installPortalId|query|integer(int32)|false|The ID of the portal where the webhook is installed. This is an integer value.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseJournalFetchResponse](#schemabatchresponsejournalfetchresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve latest batch

<a id="opIdget-/webhooks-journal/journal-local/2026-09/batch/latest/{count}_/webhooks-journal/journal-local/2026-03/batch/latest/{count}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/journal-local/2026-09/batch/latest/{count}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/journal-local/2026-09/batch/latest/{count}`

Retrieve the latest batch of webhook journal entries. This endpoint is useful for accessing the most recent data entries processed by the webhook journal. It requires specifying the number of entries to retrieve.

<h3 id="retrieve-latest-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|path|integer(int32)|true|The number of latest journal entries to retrieve. Must be an integer with a minimum value of 1.|
|installPortalId|query|integer(int32)|false|The ID of the portal where the webhooks are installed. This is an optional parameter.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-latest-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseJournalFetchResponse](#schemabatchresponsejournalfetchresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Batch read

<a id="opIdpost-/webhooks-journal/journal-local/2026-09/batch/read_/webhooks-journal/journal-local/2026-03/batch/read"></a>

> Code samples

```bash
curl https://api.hubapi.com/webhooks-journal/journal-local/2026-09/batch/read \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /webhooks-journal/journal-local/2026-09/batch/read`

Perform a batch read operation on the webhooks journal. This endpoint allows you to read multiple entries from the journal in a single request. It requires a JSON request body specifying the inputs to be read. The response includes the results of the batch read operation, and may return multiple statuses if there are errors.

> Body parameter

```json
null
```

<h3 id="batch-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|installPortalId|query|integer(int32)|false|An integer representing the ID of the portal installation. This parameter is used to specify the portal context for the request.|
|body|body|[BatchInputString](#schemabatchinputstring)|true|none|
|» inputs|body|[string]|true|An array of strings to be processed. This property is required.|

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

<h3 id="batch-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseJournalFetchResponse](#schemabatchresponsejournalfetchresponse)|
|207|Multi-Status|multiple statuses|[BatchResponseJournalFetchResponseWithErrors](#schemabatchresponsejournalfetchresponsewitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve batch

<a id="opIdget-/webhooks-journal/journal-local/2026-09/batch/{offset}/next/{count}_/webhooks-journal/journal-local/2026-03/batch/{offset}/next/{count}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/journal-local/2026-09/batch/{offset}/next/{count}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/journal-local/2026-09/batch/{offset}/next/{count}`

Retrieve a batch of webhook journal entries starting from a specified offset. This endpoint allows you to fetch a defined number of entries, facilitating the processing of webhook data in manageable chunks.

<h3 id="retrieve-batch-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|path|integer(int32)|true|The number of journal entries to retrieve in the batch. This is an integer and must be at least 1.|
|offset|path|string|true|The starting point for fetching the next batch of journal entries. This is a string value.|
|installPortalId|query|integer(int32)|false|The ID of the portal where the webhooks are installed. This is an integer value.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-batch-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseJournalFetchResponse](#schemabatchresponsejournalfetchresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve Batch

<a id="opIdget-/webhooks-journal/journal/2026-09/batch/earliest/{count}_/webhooks-journal/journal/2026-03/batch/earliest/{count}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/journal/2026-09/batch/earliest/{count}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/journal/2026-09/batch/earliest/{count}`

Retrieve the earliest batch of webhook journal entries up to the specified count. This endpoint is useful for fetching historical webhook data in batches, allowing you to process or analyze the earliest entries first.

<h3 id="retrieve-batch-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|path|integer(int32)|true|The number of webhook journal entries to retrieve. This must be an integer with a minimum value of 1.|
|installPortalId|query|integer(int32)|false|The ID of the portal where the webhook is installed. This is an integer value.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-batch-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseJournalFetchResponse](#schemabatchresponsejournalfetchresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve latest batch

<a id="opIdget-/webhooks-journal/journal/2026-09/batch/latest/{count}_/webhooks-journal/journal/2026-03/batch/latest/{count}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/journal/2026-09/batch/latest/{count}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/journal/2026-09/batch/latest/{count}`

Retrieve the latest batch of webhook journal entries. This endpoint allows you to specify the number of entries to fetch, providing a way to access recent webhook activity within your HubSpot account.

<h3 id="retrieve-latest-batch-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|path|integer(int32)|true|The number of webhook journal entries to retrieve. It is a required integer parameter with a minimum value of 1.|
|installPortalId|query|integer(int32)|false|The ID of the portal for which the webhook journal entries are being retrieved. It is an optional integer parameter.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-latest-batch-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseJournalFetchResponse](#schemabatchresponsejournalfetchresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Batch read

<a id="opIdpost-/webhooks-journal/journal/2026-09/batch/read_/webhooks-journal/journal/2026-03/batch/read"></a>

> Code samples

```bash
curl https://api.hubapi.com/webhooks-journal/journal/2026-09/batch/read \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /webhooks-journal/journal/2026-09/batch/read`

Perform a batch read operation on the webhooks journal for the specified date. This endpoint allows you to retrieve multiple entries from the webhooks journal in a single request, which can be useful for processing large amounts of data efficiently.

> Body parameter

```json
null
```

<h3 id="batch-read-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|installPortalId|query|integer(int32)|false|The ID of the portal where the webhooks are installed. This is an integer value.|
|body|body|[BatchInputString](#schemabatchinputstring)|true|none|
|» inputs|body|[string]|true|An array of strings to be processed. This property is required.|

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

<h3 id="batch-read-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseJournalFetchResponse](#schemabatchresponsejournalfetchresponse)|
|207|Multi-Status|multiple statuses|[BatchResponseJournalFetchResponseWithErrors](#schemabatchresponsejournalfetchresponsewitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch Batch Entries

<a id="opIdget-/webhooks-journal/journal/2026-09/batch/{offset}/next/{count}_/webhooks-journal/journal/2026-03/batch/{offset}/next/{count}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/journal/2026-09/batch/{offset}/next/{count}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/journal/2026-09/batch/{offset}/next/{count}`

Retrieve a batch of webhook journal entries starting from a specified offset. This endpoint allows you to fetch a specified number of entries, making it useful for paginating through large sets of webhook journal data.

<h3 id="fetch-batch-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|path|integer(int32)|true|The number of entries to retrieve in the batch. This is an integer and must be at least 1.|
|offset|path|string|true|The starting point in the journal from which entries will be fetched. This is a string value.|
|installPortalId|query|integer(int32)|false|An optional integer parameter to specify the portal ID for which the webhook journal entries should be retrieved.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="fetch-batch-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseJournalFetchResponse](#schemabatchresponsejournalfetchresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ActionOverrideRequest">ActionOverrideRequest</h2>
<!-- backwards compatibility -->
<a id="schemaactionoverriderequest"></a>
<a id="schema_ActionOverrideRequest"></a>
<a id="tocSactionoverriderequest"></a>
<a id="tocsactionoverriderequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associatedObjectTypeIds|[string]|false|none|An array of strings, each representing an associated object type ID relevant to the action override.|
|listIds|[integer(int64)]|false|none|An array of integers representing list IDs that are associated with the action override. The integers are in int64 format.|
|objectIds|[integer(int64)]|false|none|An array of integers, each representing an object ID for which the action override is applicable. The integers are in int64 format.|
|properties|[string]|false|none|An array of strings representing the properties to be overridden in the action. Each string corresponds to a property name.|

<h2 id="tocS_AppLifecycleEventSubscriptionUpsertRequest">AppLifecycleEventSubscriptionUpsertRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapplifecycleeventsubscriptionupsertrequest"></a>
<a id="schema_AppLifecycleEventSubscriptionUpsertRequest"></a>
<a id="tocSapplifecycleeventsubscriptionupsertrequest"></a>
<a id="tocsapplifecycleeventsubscriptionupsertrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTypeId|string|true|none|A string representing the unique identifier for the event type that the subscription pertains to. This value corresponds to an internal event classification at HubSpot. <br><br>4-1909196: App install event<br>4-1916193: App uninstall event|
|properties|[string]|true|none|An array of strings specifying the properties of the event associated with the subscription.|
|subscriptionType|string|true|none|A string indicating the type of subscription, which is 'APP_LIFECYCLE_EVENT' by default.|

#### Enumerated Values

|Property|Value|
|---|---|
|subscriptionType|APP_LIFECYCLE_EVENT|

<h2 id="tocS_AssociationSubscriptionUpsertRequest">AssociationSubscriptionUpsertRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociationsubscriptionupsertrequest"></a>
<a id="schema_AssociationSubscriptionUpsertRequest"></a>
<a id="tocSassociationsubscriptionupsertrequest"></a>
<a id="tocsassociationsubscriptionupsertrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[string]|true|none|An array of strings specifying the actions that trigger the subscription. Valid actions include  'ASSOCIATION_ADDED' and 'ASSOCIATION_REMOVED'.|
|associatedObjectTypeIds|[string]|true|none|An array of strings representing the type identifiers of the associated objects involved in the subscription. If present, events will only fire if the TO objectTypeId in the association is included in this array.  |
|objectIds|[integer(int64)]|true|none|An array of integers representing the unique identifiers of the objects involved in the subscription.|
|objectTypeId|string|true|none|A string representing the type identifier of the object involved in the subscription. For example "0-1" for Contacts. This corresponds to the FROM side of the association. An objectTypeId of "0-1" would match a CONTACT_TO_COMPANY association change.  |
|portalId|integer(int64)|true|none|An integer representing the unique identifier of the HubSpot portal.|
|subscriptionType|string|true|none|A string indicating the type of subscription, which is 'ASSOCIATION' by default.|

#### Enumerated Values

|Property|Value|
|---|---|
|actions|CREATE|
|actions|UPDATE|
|actions|DELETE|
|actions|MERGE|
|actions|RESTORE|
|actions|ASSOCIATION_ADDED|
|actions|ASSOCIATION_REMOVED|
|actions|SNAPSHOT|
|actions|APP_INSTALL|
|actions|APP_UNINSTALL|
|actions|ADDED_TO_LIST|
|actions|REMOVED_FROM_LIST|
|actions|GDPR_DELETE|
|subscriptionType|ASSOCIATION|

<h2 id="tocS_BatchInputString">BatchInputString</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputstring"></a>
<a id="schema_BatchInputString"></a>
<a id="tocSbatchinputstring"></a>
<a id="tocsbatchinputstring"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[string]|true|none|An array of strings to be processed. This property is required.|

<h2 id="tocS_BatchInputSubscriptionBatchUpdateRequest">BatchInputSubscriptionBatchUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputsubscriptionbatchupdaterequest"></a>
<a id="schema_BatchInputSubscriptionBatchUpdateRequest"></a>
<a id="tocSbatchinputsubscriptionbatchupdaterequest"></a>
<a id="tocsbatchinputsubscriptionbatchupdaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[SubscriptionBatchUpdateRequest](#schemasubscriptionbatchupdaterequest)]|true|none|An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated. This property is required.|

<h2 id="tocS_BatchResponseJournalFetchResponse">BatchResponseJournalFetchResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsejournalfetchresponse"></a>
<a id="schema_BatchResponseJournalFetchResponse"></a>
<a id="tocSbatchresponsejournalfetchresponse"></a>
<a id="tocsbatchresponsejournalfetchresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed, in ISO 8601 format.|
|links|object|false|none|A map of link names to associated URIs related to the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[JournalFetchResponse](#schemajournalfetchresponse)]|true|none|An array of results from the batch operation, each represented as a JournalFetchResponse object.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation started, in ISO 8601 format.|
|status|string|true|none|The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponseJournalFetchResponseWithErrors">BatchResponseJournalFetchResponseWithErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsejournalfetchresponsewitherrors"></a>
<a id="schema_BatchResponseJournalFetchResponseWithErrors"></a>
<a id="tocSbatchresponsejournalfetchresponsewitherrors"></a>
<a id="tocsbatchresponsejournalfetchresponsewitherrors"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch process was completed, in ISO 8601 format.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of standard errors that occurred during the batch process, providing details about each error.|
|links|object|false|none|A map of link names to associated URIs, providing additional context or actions related to the batch process.|
|numErrors|integer(int32)|false|none|The number of errors that occurred during the batch process.|
|requestedAt|string(date-time)|false|none|The date and time when the batch request was made, in ISO 8601 format.|
|results|[[JournalFetchResponse](#schemajournalfetchresponse)]|true|none|An array of journal fetch responses, each representing a result from the batch process.|
|startedAt|string(date-time)|true|none|The date and time when the batch process started, in ISO 8601 format.|
|status|string|true|none|The current status of the batch process. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponseSubscriptionResponse">BatchResponseSubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsesubscriptionresponse"></a>
<a id="schema_BatchResponseSubscriptionResponse"></a>
<a id="tocSbatchresponsesubscriptionresponse"></a>
<a id="tocsbatchresponsesubscriptionresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed, in ISO 8601 format.|
|links|object|false|none|A map of link names to associated URIs providing additional information about the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[SubscriptionResponse](#schemasubscriptionresponse)]|true|none|An array containing the results of the batch operation, with each item representing an individual subscription response.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation started, in ISO 8601 format.|
|status|string|true|none|The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponseSubscriptionResponseWithErrors">BatchResponseSubscriptionResponseWithErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsesubscriptionresponsewitherrors"></a>
<a id="schema_BatchResponseSubscriptionResponseWithErrors"></a>
<a id="tocSbatchresponsesubscriptionresponsewitherrors"></a>
<a id="tocsbatchresponsesubscriptionresponsewitherrors"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch processing was completed, in ISO 8601 format.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of StandardError objects detailing any errors that occurred during the batch processing.|
|links|object|false|none|A map of link names to associated URIs, providing additional resources or documentation related to the batch operation.|
|numErrors|integer(int32)|false|none|The total number of errors encountered during the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch request was initially made, in ISO 8601 format.|
|results|[[SubscriptionResponse](#schemasubscriptionresponse)]|true|none|An array of SubscriptionResponse objects representing the results of each subscription update processed in the batch.|
|startedAt|string(date-time)|true|none|The date and time when the batch processing began, in ISO 8601 format.|
|status|string|true|none|The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_CollectionResponseSubscriptionResponseMarch2027NoPaging">CollectionResponseSubscriptionResponseMarch2027NoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsesubscriptionresponsemarch2027nopaging"></a>
<a id="schema_CollectionResponseSubscriptionResponseMarch2027NoPaging"></a>
<a id="tocScollectionresponsesubscriptionresponsemarch2027nopaging"></a>
<a id="tocscollectionresponsesubscriptionresponsemarch2027nopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[SubscriptionResponseMarch2027](#schemasubscriptionresponsemarch2027)]|true|none|none|

<h2 id="tocS_Condition">Condition</h2>
<!-- backwards compatibility -->
<a id="schemacondition"></a>
<a id="schema_Condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterType|string|true|none|A string indicating the type of filter being applied. Valid value is 'CRM_OBJECT_PROPERTY'.|
|operator|string|true|none|A string specifying the operation to be performed in the condition. Valid values include 'EQ', 'N_EQ', 'LT', 'GT', 'LTE', 'GTE', 'CONTAINS', 'STARTS_WITH', 'ENDS_WITH', 'IN', 'NOT_IN', 'IS_EMPTY', and 'IS_NOT_EMPTY'.|
|property|string|true|none|A string representing the specific property of the CRM object that the condition applies to.|
|value|string|false|none|A string representing the value to be compared against the specified property when using single-value operators.|
|values|[string]|false|none|An array of strings used to specify multiple values for comparison when using operators that support multiple values, such as 'IN' or 'NOT_IN'.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|CRM_OBJECT_PROPERTY|
|operator|CONTAINS|
|operator|ENDS_WITH|
|operator|EQ|
|operator|GT|
|operator|GTE|
|operator|IN|
|operator|IS_EMPTY|
|operator|IS_NOT_EMPTY|
|operator|LT|
|operator|LTE|
|operator|N_EQ|
|operator|NOT_IN|
|operator|STARTS_WITH|

<h2 id="tocS_CrmObjectSnapshotBatchRequest">CrmObjectSnapshotBatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemacrmobjectsnapshotbatchrequest"></a>
<a id="schema_CrmObjectSnapshotBatchRequest"></a>
<a id="tocScrmobjectsnapshotbatchrequest"></a>
<a id="tocscrmobjectsnapshotbatchrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snapshotRequests|[[CrmObjectSnapshotRequest](#schemacrmobjectsnapshotrequest)]|true|none|An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object. This property is required.|

<h2 id="tocS_CrmObjectSnapshotBatchResponse">CrmObjectSnapshotBatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemacrmobjectsnapshotbatchresponse"></a>
<a id="schema_CrmObjectSnapshotBatchResponse"></a>
<a id="tocScrmobjectsnapshotbatchresponse"></a>
<a id="tocscrmobjectsnapshotbatchresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snapshotResponses|[[CrmObjectSnapshotResponse](#schemacrmobjectsnapshotresponse)]|true|none|An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object. This property is required.|

<h2 id="tocS_CrmObjectSnapshotRequest">CrmObjectSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemacrmobjectsnapshotrequest"></a>
<a id="schema_CrmObjectSnapshotRequest"></a>
<a id="tocScrmobjectsnapshotrequest"></a>
<a id="tocscrmobjectsnapshotrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|integer(int64)|true|none|An integer representing the unique identifier of the CRM object for which the snapshot is requested.|
|objectTypeId|string|true|none|A string representing the type identifier of the CRM object, specifying what kind of object it is within HubSpot.|
|portalId|integer(int64)|true|none|An integer representing the unique identifier of the HubSpot account (portal) where the CRM object resides.|
|properties|[string]|true|none|An array of strings, each representing a property of the CRM object that should be included in the snapshot.|

<h2 id="tocS_CrmObjectSnapshotResponse">CrmObjectSnapshotResponse</h2>
<!-- backwards compatibility -->
<a id="schemacrmobjectsnapshotresponse"></a>
<a id="schema_CrmObjectSnapshotResponse"></a>
<a id="tocScrmobjectsnapshotresponse"></a>
<a id="tocscrmobjectsnapshotresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|integer(int64)|true|none|An integer representing the unique identifier of the CRM object for which the snapshot is taken.|
|objectTypeId|string|true|none|A string indicating the type of the CRM object, such as contact, company, or deal.|
|portalId|integer(int64)|true|none|An integer representing the unique identifier of the HubSpot portal associated with the CRM object.|
|snapshotStatusId|string(uuid)|true|none|A UUID string representing the status identifier of the snapshot request, indicating the current state of the snapshot process.|

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
|conditions|[[Condition](#schemacondition)]|true|none|An array of conditions that define the criteria for the filter. Each condition specifies a property, an operator, and optionally a value or values.|

<h2 id="tocS_FilterCreateRequest">FilterCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemafiltercreaterequest"></a>
<a id="schema_FilterCreateRequest"></a>
<a id="tocSfiltercreaterequest"></a>
<a id="tocsfiltercreaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|[Filter](#schemafilter)|true|none|Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. |
|subscriptionId|integer(int64)|true|none|The unique identifier of the subscription to which the filter will be applied. It is an integer formatted as int64.|

<h2 id="tocS_FilterCreateResponse">FilterCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemafiltercreateresponse"></a>
<a id="schema_FilterCreateResponse"></a>
<a id="tocSfiltercreateresponse"></a>
<a id="tocsfiltercreateresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterId|integer(int64)|true|none|The unique identifier for the created filter. It is an integer formatted as int64.|

<h2 id="tocS_FilterResponse">FilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemafilterresponse"></a>
<a id="schema_FilterResponse"></a>
<a id="tocSfilterresponse"></a>
<a id="tocsfilterresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|integer(int64)|true|none|A Unix timestamp in milliseconds indicating when the filter was created.|
|filter|[Filter](#schemafilter)|true|none|Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. |
|id|integer(int64)|true|none|The unique identifier for the filter. It is an integer in int64 format.|

<h2 id="tocS_GdprPrivacyDeletionSubscriptionUpsertRequest">GdprPrivacyDeletionSubscriptionUpsertRequest</h2>
<!-- backwards compatibility -->
<a id="schemagdprprivacydeletionsubscriptionupsertrequest"></a>
<a id="schema_GdprPrivacyDeletionSubscriptionUpsertRequest"></a>
<a id="tocSgdprprivacydeletionsubscriptionupsertrequest"></a>
<a id="tocsgdprprivacydeletionsubscriptionupsertrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[string]|true|none|An array of strings specifying the actions that trigger the subscription. Valid action is 'GDPR_DELETE'. |
|objectTypeId|string|true|none|A string representing the unique identifier for the type of object associated with the subscription.|
|portalId|integer(int64)|true|none|An integer representing the unique identifier for the HubSpot portal that is being listened to for changes. |
|subscriptionType|string|true|none|A string indicating the type of subscription. GDPR_PRIVACY_DELETION is the only valid option for GdprPrivacyDeletionSubscriptionUpsertRequest. |

#### Enumerated Values

|Property|Value|
|---|---|
|actions|CREATE|
|actions|UPDATE|
|actions|DELETE|
|actions|MERGE|
|actions|RESTORE|
|actions|ASSOCIATION_ADDED|
|actions|ASSOCIATION_REMOVED|
|actions|SNAPSHOT|
|actions|APP_INSTALL|
|actions|APP_UNINSTALL|
|actions|ADDED_TO_LIST|
|actions|REMOVED_FROM_LIST|
|actions|GDPR_DELETE|
|subscriptionType|GDPR_PRIVACY_DELETION|

<h2 id="tocS_JournalFetchResponse">JournalFetchResponse</h2>
<!-- backwards compatibility -->
<a id="schemajournalfetchresponse"></a>
<a id="schema_JournalFetchResponse"></a>
<a id="tocSjournalfetchresponse"></a>
<a id="tocsjournalfetchresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentOffset|string(uuid)|true|none|The unique identifier for the current offset of the journal entry, formatted as a UUID.|
|expiresAt|string(date-time)|true|none|The date and time when the URL will expire, in ISO 8601 format.|
|url|string|true|none|The Pre-signed S3 URL where the journal entry can be accessed. It is a string.|

<h2 id="tocS_ListMembershipSubscriptionUpsertRequest">ListMembershipSubscriptionUpsertRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmembershipsubscriptionupsertrequest"></a>
<a id="schema_ListMembershipSubscriptionUpsertRequest"></a>
<a id="tocSlistmembershipsubscriptionupsertrequest"></a>
<a id="tocslistmembershipsubscriptionupsertrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[string]|true|none|An array of strings specifying the actions that trigger the subscription. Valid actions include 'ADDED_TO_LIST', and 'REMOVED_FROM_LIST'|
|listIds|[integer(int64)]|true|none|An array of integers representing the IDs of the lists involved in the subscription. Empty means listen to all lists.|
|objectIds|[integer(int64)]|true|none|An array of integers representing the IDs of the objects associated with the subscription. Empty means listen to all objectsIds.|
|portalId|integer(int64)|true|none|An integer representing the ID of the portal where the subscription is being managed.|
|subscriptionType|string|true|none|A string indicating the type of subscription. The default and only valid value is 'LIST_MEMBERSHIP'.|

#### Enumerated Values

|Property|Value|
|---|---|
|actions|CREATE|
|actions|UPDATE|
|actions|DELETE|
|actions|MERGE|
|actions|RESTORE|
|actions|ASSOCIATION_ADDED|
|actions|ASSOCIATION_REMOVED|
|actions|SNAPSHOT|
|actions|APP_INSTALL|
|actions|APP_UNINSTALL|
|actions|ADDED_TO_LIST|
|actions|REMOVED_FROM_LIST|
|actions|GDPR_DELETE|
|subscriptionType|LIST_MEMBERSHIP|

<h2 id="tocS_ObjectSubscriptionUpsertRequest">ObjectSubscriptionUpsertRequest</h2>
<!-- backwards compatibility -->
<a id="schemaobjectsubscriptionupsertrequest"></a>
<a id="schema_ObjectSubscriptionUpsertRequest"></a>
<a id="tocSobjectsubscriptionupsertrequest"></a>
<a id="tocsobjectsubscriptionupsertrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[string]|true|none|An array of strings specifying the actions that trigger the subscription. Valid actions include 'CREATE', 'UPDATE', 'DELETE', 'MERGE', 'RESTORE'.|
|objectIds|[integer(int64)]|true|none|An array of integers representing the IDs of the objects involved in the subscription. Empty means listen to all objectIds.|
|objectTypeId|string|true|none|A string that identifies the type of object for which the subscription is being created or updated. For example "0-1" for contacts.|
|portalId|integer(int64)|true|none|An integer representing the portal ID associated with the subscription.|
|properties|[string]|true|none|An array of strings listing the properties of the objects that are relevant to the subscription. Empty means listen to all properties.|
|subscriptionType|string|true|none|A string indicating the type of subscription. The default and only valid value is 'OBJECT'.|

#### Enumerated Values

|Property|Value|
|---|---|
|actions|CREATE|
|actions|UPDATE|
|actions|DELETE|
|actions|MERGE|
|actions|RESTORE|
|actions|ASSOCIATION_ADDED|
|actions|ASSOCIATION_REMOVED|
|actions|SNAPSHOT|
|actions|APP_INSTALL|
|actions|APP_UNINSTALL|
|actions|ADDED_TO_LIST|
|actions|REMOVED_FROM_LIST|
|actions|GDPR_DELETE|
|subscriptionType|OBJECT|

<h2 id="tocS_SettingsChangeRequest">SettingsChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemasettingschangerequest"></a>
<a id="schema_SettingsChangeRequest"></a>
<a id="tocSsettingschangerequest"></a>
<a id="tocssettingschangerequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetUrl|string|true|none|The URL to which webhook events will be sent. It is a string.|
|throttling|[ThrottlingSettings](#schemathrottlingsettings)|true|none|none|

<h2 id="tocS_SettingsResponse">SettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasettingsresponse"></a>
<a id="schema_SettingsResponse"></a>
<a id="tocSsettingsresponse"></a>
<a id="tocssettingsresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when the webhook settings were created, in ISO 8601 format.|
|targetUrl|string|true|none|The URL to which the webhook events will be sent. It is a string.|
|throttling|[ThrottlingSettings](#schemathrottlingsettings)|true|none|none|
|updatedAt|string(date-time)|false|none|The date and time when the webhook settings were last updated, in ISO 8601 format.|

<h2 id="tocS_SnapshotStatusResponse">SnapshotStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotstatusresponse"></a>
<a id="schema_SnapshotStatusResponse"></a>
<a id="tocSsnapshotstatusresponse"></a>
<a id="tocssnapshotstatusresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|integer(int64)|false|none|The timestamp indicating when the snapshot operation was completed, represented as a Unix timestamp in milliseconds.|
|errorCode|string|false|none|A code representing the error that occurred, if any. Possible values are 'TIMEOUT', 'VALIDATION_ERROR', 'INTERNAL_ERROR', and 'PERMISSION_DENIED'.|
|id|string(uuid)|true|none|The unique identifier for the snapshot operation, represented as a UUID.|
|initiatedAt|integer(int64)|true|none|The timestamp indicating when the snapshot operation was initiated, represented as a Unix timestamp in milliseconds.|
|message|string|false|none|A descriptive message providing additional information about the snapshot operation or error.|
|status|string|true|none|The current status of the snapshot. Valid values include 'PENDING', 'IN_PROGRESS', 'COMPLETED', 'FAILED', and 'EXPIRED'.|

#### Enumerated Values

|Property|Value|
|---|---|
|errorCode|INTERNAL_ERROR|
|errorCode|PERMISSION_DENIED|
|errorCode|TIMEOUT|
|errorCode|VALIDATION_ERROR|
|status|EXPIRED|
|status|FAILED|
|status|IN_PROGRESS|
|status|PENDING|
|status|SUCCESS|

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
|category|string|true|none|A string indicating the category of the error.|
|context|object|true|none|An object containing additional context about the error condition, with each property being an array of strings.|
|errors|[[ErrorDetail](#schemaerrordetail)]|true|none|An array of ErrorDetail objects providing further information about the error.|
|id|string|false|none|A string that uniquely identifies the error instance.|
|links|object|true|none|An object mapping link names to associated URIs that contain documentation about the error or recommended remediation steps.|
|message|string|true|none|A string containing a human-readable message describing the error.|
|status|string|true|none|A string representing the status of the error.|
|subCategory|object|false|none|An object providing more specific categorization of the error.|

<h2 id="tocS_SubscriptionBatchUpdateRequest">SubscriptionBatchUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionbatchupdaterequest"></a>
<a id="schema_SubscriptionBatchUpdateRequest"></a>
<a id="tocSsubscriptionbatchupdaterequest"></a>
<a id="tocssubscriptionbatchupdaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|A boolean indicating whether the subscription is active.|
|id|integer(int32)|true|none|The unique identifier for the subscription. It is an integer.|

<h2 id="tocS_SubscriptionCreateRequest">SubscriptionCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptioncreaterequest"></a>
<a id="schema_SubscriptionCreateRequest"></a>
<a id="tocSsubscriptioncreaterequest"></a>
<a id="tocssubscriptioncreaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|A boolean indicating whether the subscription is active.|
|eventType|string|true|none|A string representing the type of event to subscribe to. Valid values include various property changes, creations, deletions, merges, restorations, association changes, and event completions.|
|eventTypeName|string|false|none|A string providing a human-readable name for the event type.|
|objectTypeId|string|false|none|A string representing the ID of the object type associated with the subscription.|
|propertyName|string|false|none|A string indicating the specific property name related to the event type, if applicable.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|company.associationChange|
|eventType|company.creation|
|eventType|company.deletion|
|eventType|company.merge|
|eventType|company.propertyChange|
|eventType|company.restore|
|eventType|contact.associationChange|
|eventType|contact.creation|
|eventType|contact.deletion|
|eventType|contact.merge|
|eventType|contact.privacyDeletion|
|eventType|contact.propertyChange|
|eventType|contact.restore|
|eventType|conversation.creation|
|eventType|conversation.deletion|
|eventType|conversation.newMessage|
|eventType|conversation.privacyDeletion|
|eventType|conversation.propertyChange|
|eventType|deal.associationChange|
|eventType|deal.creation|
|eventType|deal.deletion|
|eventType|deal.merge|
|eventType|deal.propertyChange|
|eventType|deal.restore|
|eventType|event.completed|
|eventType|line_item.associationChange|
|eventType|line_item.creation|
|eventType|line_item.deletion|
|eventType|line_item.merge|
|eventType|line_item.propertyChange|
|eventType|line_item.restore|
|eventType|object.associationChange|
|eventType|object.creation|
|eventType|object.deletion|
|eventType|object.merge|
|eventType|object.propertyChange|
|eventType|object.restore|
|eventType|product.creation|
|eventType|product.deletion|
|eventType|product.merge|
|eventType|product.propertyChange|
|eventType|product.restore|
|eventType|ticket.associationChange|
|eventType|ticket.creation|
|eventType|ticket.deletion|
|eventType|ticket.merge|
|eventType|ticket.propertyChange|
|eventType|ticket.restore|

<h2 id="tocS_SubscriptionListResponse">SubscriptionListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionlistresponse"></a>
<a id="schema_SubscriptionListResponse"></a>
<a id="tocSsubscriptionlistresponse"></a>
<a id="tocssubscriptionlistresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[SubscriptionResponse](#schemasubscriptionresponse)]|true|none|An array of subscription responses, each detailing a specific subscription's properties and status.|

<h2 id="tocS_SubscriptionPatchRequest">SubscriptionPatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionpatchrequest"></a>
<a id="schema_SubscriptionPatchRequest"></a>
<a id="tocSsubscriptionpatchrequest"></a>
<a id="tocssubscriptionpatchrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|A boolean indicating whether the subscription is active. If true, the subscription is active; if false, it is inactive.|

<h2 id="tocS_SubscriptionResponse">SubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionresponse"></a>
<a id="schema_SubscriptionResponse"></a>
<a id="tocSsubscriptionresponse"></a>
<a id="tocssubscriptionresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|A boolean indicating whether the subscription is currently active.|
|createdAt|string(date-time)|true|none|The date and time when the subscription was created, in ISO 8601 format.|
|eventType|string|true|none|The type of event that triggers the subscription. Valid values include various property changes, creations, deletions, merges, restores, and association changes for different HubSpot objects.|
|eventTypeName|string|false|none|The name of the event type for the subscription.|
|id|string|true|none|The unique identifier for the subscription. It is an integer formatted as int64.|
|objectTypeId|string|false|none|The identifier for the object type associated with the subscription. It is a string.|
|propertyName|string|false|none|The name of the property associated with the subscription event, if applicable.|
|updatedAt|string(date-time)|false|none|The date and time when the subscription was last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|company.associationChange|
|eventType|company.creation|
|eventType|company.deletion|
|eventType|company.merge|
|eventType|company.propertyChange|
|eventType|company.restore|
|eventType|contact.associationChange|
|eventType|contact.creation|
|eventType|contact.deletion|
|eventType|contact.merge|
|eventType|contact.privacyDeletion|
|eventType|contact.propertyChange|
|eventType|contact.restore|
|eventType|conversation.creation|
|eventType|conversation.deletion|
|eventType|conversation.newMessage|
|eventType|conversation.privacyDeletion|
|eventType|conversation.propertyChange|
|eventType|deal.associationChange|
|eventType|deal.creation|
|eventType|deal.deletion|
|eventType|deal.merge|
|eventType|deal.propertyChange|
|eventType|deal.restore|
|eventType|event.completed|
|eventType|line_item.associationChange|
|eventType|line_item.creation|
|eventType|line_item.deletion|
|eventType|line_item.merge|
|eventType|line_item.propertyChange|
|eventType|line_item.restore|
|eventType|object.associationChange|
|eventType|object.creation|
|eventType|object.deletion|
|eventType|object.merge|
|eventType|object.propertyChange|
|eventType|object.restore|
|eventType|product.creation|
|eventType|product.deletion|
|eventType|product.merge|
|eventType|product.propertyChange|
|eventType|product.restore|
|eventType|ticket.associationChange|
|eventType|ticket.creation|
|eventType|ticket.deletion|
|eventType|ticket.merge|
|eventType|ticket.propertyChange|
|eventType|ticket.restore|

<h2 id="tocS_SubscriptionResponseMarch2027">SubscriptionResponseMarch2027</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionresponsemarch2027"></a>
<a id="schema_SubscriptionResponseMarch2027"></a>
<a id="tocSsubscriptionresponsemarch2027"></a>
<a id="tocssubscriptionresponsemarch2027"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionOverrides|object|false|none|none|
|actions|[string]|true|none|none|
|appId|integer(int64)|true|none|none|
|associatedObjectTypeIds|[string]|false|none|none|
|createdAt|string(date-time)|true|none|none|
|createdBy|integer(int64)|false|none|none|
|deletedAt|string(date-time)|false|none|none|
|id|integer(int64)|true|none|none|
|includeSensitivePropertiesChanged|boolean|false|none|none|
|listIds|[integer(int64)]|false|none|none|
|objectIds|[integer(int64)]|false|none|none|
|objectTypeId|string|true|none|none|
|portalId|integer(int64)|false|none|none|
|properties|[string]|false|none|none|
|subscriptionType|string|true|none|none|
|updatedAt|string(date-time)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|actions|CREATE|
|actions|UPDATE|
|actions|DELETE|
|actions|MERGE|
|actions|RESTORE|
|actions|ASSOCIATION_ADDED|
|actions|ASSOCIATION_REMOVED|
|actions|SNAPSHOT|
|actions|APP_INSTALL|
|actions|APP_UNINSTALL|
|actions|ADDED_TO_LIST|
|actions|REMOVED_FROM_LIST|
|actions|GDPR_DELETE|
|subscriptionType|APP_LIFECYCLE_EVENT|
|subscriptionType|ASSOCIATION|
|subscriptionType|EVENT|
|subscriptionType|GDPR_PRIVACY_DELETION|
|subscriptionType|LIST_MEMBERSHIP|
|subscriptionType|OBJECT|

<h2 id="tocS_SubscriptionResponse_1">SubscriptionResponse_1</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionresponse_1"></a>
<a id="schema_SubscriptionResponse_1"></a>
<a id="tocSsubscriptionresponse_1"></a>
<a id="tocssubscriptionresponse_1"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionOverrides|object|false|none|An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object.|
|actions|[string]|true|none|A list of actions that trigger the subscription. Possible values include 'CREATE', 'UPDATE', 'DELETE', 'MERGE', 'RESTORE', 'ASSOCIATION_ADDED', 'ASSOCIATION_REMOVED', 'SNAPSHOT', 'APP_INSTALL', 'APP_UNINSTALL', 'ADDED_TO_LIST', 'REMOVED_FROM_LIST', and 'GDPR_DELETE'.|
|appId|integer(int64)|true|none|The unique identifier for the app associated with the subscription. It is an integer formatted as int64.|
|associatedObjectTypeIds|[string]|false|none|A list of associated object type IDs. Each ID is a string.|
|createdAt|string(date-time)|true|none|The date and time when the subscription was created, in ISO 8601 format.|
|createdBy|integer(int64)|false|none|The ID of the user who created the subscription. It is an integer formatted as int64.|
|deletedAt|string(date-time)|false|none|The date and time when the subscription was deleted, in ISO 8601 format, if applicable.|
|id|integer(int64)|true|none|The unique identifier for the subscription. It is an integer formatted as int64.|
|listIds|[integer(int64)]|false|none|A list of list IDs associated with the subscription. Each ID is an integer formatted as int64.|
|objectIds|[integer(int64)]|false|none|A list of object IDs associated with the subscription. Each ID is an integer formatted as int64.|
|objectTypeId|string|true|none|The identifier for the object type associated with the subscription. It is a string.|
|portalId|integer(int64)|false|none|The unique identifier for the portal associated with the subscription. It is an integer formatted as int64.|
|properties|[string]|false|none|A list of property names associated with the subscription. Each property is a string.|
|subscriptionType|string|true|none|The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'.|
|updatedAt|string(date-time)|true|none|The date and time when the subscription was last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|actions|CREATE|
|actions|UPDATE|
|actions|DELETE|
|actions|MERGE|
|actions|RESTORE|
|actions|ASSOCIATION_ADDED|
|actions|ASSOCIATION_REMOVED|
|actions|SNAPSHOT|
|actions|APP_INSTALL|
|actions|APP_UNINSTALL|
|actions|ADDED_TO_LIST|
|actions|REMOVED_FROM_LIST|
|actions|GDPR_DELETE|
|subscriptionType|APP_LIFECYCLE_EVENT|
|subscriptionType|ASSOCIATION|
|subscriptionType|EVENT|
|subscriptionType|GDPR_PRIVACY_DELETION|
|subscriptionType|LIST_MEMBERSHIP|
|subscriptionType|OBJECT|

<h2 id="tocS_SubscriptionUpsertRequest">SubscriptionUpsertRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionupsertrequest"></a>
<a id="schema_SubscriptionUpsertRequest"></a>
<a id="tocSsubscriptionupsertrequest"></a>
<a id="tocssubscriptionupsertrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ObjectSubscriptionUpsertRequest](#schemaobjectsubscriptionupsertrequest)|false|none|none|
|*oneOf*|[AssociationSubscriptionUpsertRequest](#schemaassociationsubscriptionupsertrequest)|false|none|none|
|*oneOf*|[AppLifecycleEventSubscriptionUpsertRequest](#schemaapplifecycleeventsubscriptionupsertrequest)|false|none|none|
|*oneOf*|[ListMembershipSubscriptionUpsertRequest](#schemalistmembershipsubscriptionupsertrequest)|false|none|none|
|*oneOf*|[GdprPrivacyDeletionSubscriptionUpsertRequest](#schemagdprprivacydeletionsubscriptionupsertrequest)|false|none|none|

<h2 id="tocS_ThrottlingSettings">ThrottlingSettings</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingsettings"></a>
<a id="schema_ThrottlingSettings"></a>
<a id="tocSthrottlingsettings"></a>
<a id="tocsthrottlingsettings"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxConcurrentRequests|integer(int32)|true|none|The maximum number of concurrent requests allowed. This is an integer value.|
