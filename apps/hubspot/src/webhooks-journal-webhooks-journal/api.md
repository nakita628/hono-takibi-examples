<h1 id="webhooks-journal-webhooks-journal">Webhooks Journal Webhooks Journal v2026-09</h1>

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

<h1 id="webhooks-journal-webhooks-journal-advanced">Advanced</h1>

## Create Snapshot

<a id="opIdpost-/webhooks-journal/snapshots/2026-09/crm"></a>

> Code samples

```bash
curl https://api.hubapi.com/webhooks-journal/snapshots/2026-09/crm \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /webhooks-journal/snapshots/2026-09/crm`

Create a batch of CRM object snapshots in HubSpot. This endpoint is used to capture the current state of specified CRM objects for later reference or analysis. It requires a JSON payload containing the details of the CRM objects to snapshot. This operation is exempt from daily and ten-secondly rate limits.

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

<a id="opIdpost-/webhooks-journal/subscriptions/2026-09/filters"></a>

> Code samples

```bash
curl https://api.hubapi.com/webhooks-journal/subscriptions/2026-09/filters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /webhooks-journal/subscriptions/2026-09/filters`

Create a new filter for a specific webhook subscription in the HubSpot account. This endpoint allows you to define conditions that determine when a webhook should be triggered. The filter is associated with a subscription identified by its ID, and the request must include the filter details.

> Body parameter

```json
null
```

<h3 id="create-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FilterCreateRequest](#schemafiltercreaterequest)|true|none|
|» filter|body|[Filter](#schemafilter)|true|Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. |
|» subscriptionId|body|integer(int64)|true|An integer representing the unique identifier of the subscription to which the filter will be applied. It is required and uses the int64 format.|

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

<h1 id="webhooks-journal-webhooks-journal-basic">Basic</h1>

## Retrieve earliest

<a id="opIdget-/webhooks-journal/journal-local/2026-09/earliest"></a>

> Code samples

```bash
curl https://api.hubapi.com/webhooks-journal/journal-local/2026-09/earliest
```

`GET /webhooks-journal/journal-local/2026-09/earliest`

Retrieve the earliest webhook journal entries for the specified portal. This endpoint can be used to access the oldest records available in the webhook journal, which may be useful for auditing or historical analysis.

<h3 id="retrieve-earliest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|installPortalId|query|integer(int32)|false|The ID of the installation portal to filter the journal entries by. This is an integer value.|

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

## Retrieve latest

<a id="opIdget-/webhooks-journal/journal-local/2026-09/latest"></a>

> Code samples

```bash
curl https://api.hubapi.com/webhooks-journal/journal-local/2026-09/latest
```

`GET /webhooks-journal/journal-local/2026-09/latest`

Retrieve the latest entries from the webhooks journal for the specified portal. This endpoint is useful for accessing the most recent webhook events that have been logged, allowing for real-time monitoring or debugging of webhook activities.

<h3 id="retrieve-latest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|installPortalId|query|integer(int32)|false|The ID of the portal for which to retrieve the latest webhook journal entries. It is an integer value.|

> Example responses

> default Response

```json
null
```

<h3 id="retrieve-latest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve Next Batch

<a id="opIdget-/webhooks-journal/journal-local/2026-09/offset/{offset}/next"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/journal-local/2026-09/offset/{offset}/next'
```

`GET /webhooks-journal/journal-local/2026-09/offset/{offset}/next`

Retrieve the next set of webhook journal entries starting from a specified offset. This endpoint is useful for paginating through large sets of webhook data, allowing you to continue from where a previous request left off.

<h3 id="retrieve-next-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|path|string|true|The offset from which to start retrieving the next batch of webhook journal entries. This is a string value that indicates the starting point for fetching entries.|
|installPortalId|query|integer(int32)|false|The ID of the portal installation. This is an integer value used to identify the specific portal installation for which the webhook journal entries are being retrieved.|

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

<a id="opIdget-/webhooks-journal/journal-local/2026-09/status/{statusId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/journal-local/2026-09/status/{statusId}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/journal-local/2026-09/status/{statusId}`

Retrieve the status of a specific webhook journal entry using its unique status ID. This endpoint is useful for monitoring the progress or outcome of webhook journal entries, allowing you to check if an entry is pending, in progress, completed, failed, or expired.

<h3 id="retrieve-status-parameters">Parameters</h3>

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

<h3 id="retrieve-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SnapshotStatusResponse](#schemasnapshotstatusresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve earliest entry

<a id="opIdget-/webhooks-journal/journal/2026-09/earliest"></a>

> Code samples

```bash
curl https://api.hubapi.com/webhooks-journal/journal/2026-09/earliest
```

`GET /webhooks-journal/journal/2026-09/earliest`

Retrieve the earliest entry from the webhooks journal for the specified portal. This endpoint is useful for accessing the first recorded webhook event in the journal, which can be helpful for auditing or debugging purposes.

<h3 id="retrieve-earliest-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|installPortalId|query|integer(int32)|false|The ID of the portal for which to retrieve the earliest webhook journal entry. This is an integer value.|

> Example responses

> default Response

```json
null
```

<h3 id="retrieve-earliest-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve latest journal

<a id="opIdget-/webhooks-journal/journal/2026-09/latest"></a>

> Code samples

```bash
curl https://api.hubapi.com/webhooks-journal/journal/2026-09/latest
```

`GET /webhooks-journal/journal/2026-09/latest`

Retrieve the latest entries from the webhooks journal for the specified portal. This endpoint is useful for accessing the most recent webhook events and their statuses, allowing you to monitor and debug webhook activity effectively.

<h3 id="retrieve-latest-journal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|installPortalId|query|integer(int32)|false|The ID of the portal for which the latest journal entries are to be retrieved. This parameter is optional and should be an integer.|

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

## Retrieve Next Entries

<a id="opIdget-/webhooks-journal/journal/2026-09/offset/{offset}/next"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/journal/2026-09/offset/{offset}/next'
```

`GET /webhooks-journal/journal/2026-09/offset/{offset}/next`

Retrieve the next set of entries from the webhooks journal starting from a specified offset. This endpoint is useful for paginating through journal entries to process or analyze webhook events sequentially.

<h3 id="retrieve-next-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|path|string|true|The offset from which to start retrieving the next set of journal entries. This is a string value.|
|installPortalId|query|integer(int32)|false|The ID of the portal where the webhook is installed. This is an integer value.|

> Example responses

> default Response

```json
null
```

<h3 id="retrieve-next-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve status

<a id="opIdget-/webhooks-journal/journal/2026-09/status/{statusId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/journal/2026-09/status/{statusId}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/journal/2026-09/status/{statusId}`

Retrieve the status of a specific webhook journal entry using its unique status ID. This endpoint provides detailed information about the status, including whether it is pending, in progress, completed, failed, or expired. It is useful for monitoring and managing the state of webhook journal entries.

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

## List subscriptions

<a id="opIdget-/webhooks-journal/subscriptions/2026-09"></a>

> Code samples

```bash
curl https://api.hubapi.com/webhooks-journal/subscriptions/2026-09 \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/subscriptions/2026-09`

Retrieve a list of webhook journal subscriptions. This endpoint provides access to subscription details without pagination, allowing you to view all current subscriptions in a single request. It is useful for managing and reviewing webhook subscriptions for your app.

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseSubscriptionResponseMarch2027NoPaging](#schemacollectionresponsesubscriptionresponsemarch2027nopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Upsert subscription

<a id="opIdpost-/webhooks-journal/subscriptions/2026-09"></a>

> Code samples

```bash
curl https://api.hubapi.com/webhooks-journal/subscriptions/2026-09 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /webhooks-journal/subscriptions/2026-09`

Create a new webhook journal subscription for the specified portal. This endpoint allows you to define the actions and object types that the subscription will monitor. It requires a request body with the subscription details.

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
|200|OK|successful operation|[SubscriptionResponse](#schemasubscriptionresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve filters

<a id="opIdget-/webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}`

Retrieve the filters associated with a specific webhook subscription. This endpoint allows you to view the filters applied to a subscription, which can help in managing and understanding the conditions set for webhook events.

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

<a id="opIdget-/webhooks-journal/subscriptions/2026-09/filters/{filterId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/subscriptions/2026-09/filters/{filterId}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/subscriptions/2026-09/filters/{filterId}`

Retrieve a specific filter associated with a webhook journal subscription. This endpoint allows you to access the details of the filter identified by the filterId, which is useful for managing and understanding the conditions applied to webhook events.

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

<a id="opIddelete-/webhooks-journal/subscriptions/2026-09/filters/{filterId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/subscriptions/2026-09/filters/{filterId}' \
  -X DELETE
```

`DELETE /webhooks-journal/subscriptions/2026-09/filters/{filterId}`

Remove a specific filter from the webhooks journal subscriptions. This operation is useful for managing and cleaning up filters that are no longer needed. Once deleted, the filter cannot be recovered.

<h3 id="delete-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filterId|path|integer(int64)|true|The unique identifier of the filter to delete. It must be an integer.|

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

## Delete Subscription

<a id="opIddelete-/webhooks-journal/subscriptions/2026-09/portals/{portalId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/subscriptions/2026-09/portals/{portalId}' \
  -X DELETE
```

`DELETE /webhooks-journal/subscriptions/2026-09/portals/{portalId}`

Delete a webhook journal subscription for a specific portal. This operation removes the subscription associated with the given portalId, ensuring that no further webhook events are sent for this portal. Use this endpoint to manage and clean up subscriptions that are no longer needed.

<h3 id="delete-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|portalId|path|integer(int64)|true|The unique identifier of the portal whose webhook journal subscription is to be deleted.|

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

<a id="opIdget-/webhooks-journal/subscriptions/2026-09/{subscriptionId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/subscriptions/2026-09/{subscriptionId}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/subscriptions/2026-09/{subscriptionId}`

Retrieve details of a specific webhook subscription using its unique identifier. This endpoint is useful for obtaining information about a particular subscription, such as its actions, object type, and associated properties.

<h3 id="retrieve-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|integer(int64)|true|The unique identifier of the subscription to retrieve. It must be an integer.|

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
|200|OK|successful operation|[SubscriptionResponse](#schemasubscriptionresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete subscription

<a id="opIddelete-/webhooks-journal/subscriptions/2026-09/{subscriptionId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/subscriptions/2026-09/{subscriptionId}' \
  -X DELETE
```

`DELETE /webhooks-journal/subscriptions/2026-09/{subscriptionId}`

Delete a specific webhook journal subscription using its unique identifier. This operation is useful for managing and cleaning up subscriptions that are no longer needed in your HubSpot account.

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

<h1 id="webhooks-journal-webhooks-journal-batch">Batch</h1>

## Fetch earliest batch

<a id="opIdget-/webhooks-journal/journal-local/2026-09/batch/earliest/{count}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/journal-local/2026-09/batch/earliest/{count}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/journal-local/2026-09/batch/earliest/{count}`

Retrieve the earliest batch of webhook journal entries. This endpoint is useful for accessing the oldest available data in the webhook journal, allowing users to process or analyze historical webhook events. The number of entries to fetch is specified by the 'count' path parameter.

<h3 id="fetch-earliest-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|path|integer(int32)|true|The number of webhook journal entries to retrieve. Must be an integer with a minimum value of 1.|
|installPortalId|query|integer(int32)|false|The ID of the installation portal for which to retrieve the webhook journal entries.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="fetch-earliest-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseJournalFetchResponse](#schemabatchresponsejournalfetchresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve Latest Batch

<a id="opIdget-/webhooks-journal/journal-local/2026-09/batch/latest/{count}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/journal-local/2026-09/batch/latest/{count}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/journal-local/2026-09/batch/latest/{count}`

Retrieve the latest batch of webhook journal entries. This endpoint allows you to specify the number of entries to fetch, providing a way to access the most recent webhook events processed by your HubSpot account.

<h3 id="retrieve-latest-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|path|integer(int32)|true|The number of journal entries to retrieve. Must be an integer with a minimum value of 1.|
|installPortalId|query|integer(int32)|false|The ID of the portal installation. This parameter is optional and can be used to filter results by a specific portal.|

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

<a id="opIdpost-/webhooks-journal/journal-local/2026-09/batch/read"></a>

> Code samples

```bash
curl https://api.hubapi.com/webhooks-journal/journal-local/2026-09/batch/read \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /webhooks-journal/journal-local/2026-09/batch/read`

Execute a batch read operation on the webhooks journal. This endpoint allows you to retrieve a batch of webhook journal entries by providing the necessary input data. It is useful for processing multiple records in a single request, streamlining data retrieval tasks.

> Body parameter

```json
null
```

<h3 id="batch-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|installPortalId|query|integer(int32)|false|An integer representing the ID of the portal where the installation occurred. This parameter is optional.|
|body|body|[BatchInputString](#schemabatchinputstring)|true|none|
|» inputs|body|[string]|true|An array of strings that are to be processed in the batch operation. This property is required.|

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

## Fetch Batch

<a id="opIdget-/webhooks-journal/journal-local/2026-09/batch/{offset}/next/{count}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/journal-local/2026-09/batch/{offset}/next/{count}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/journal-local/2026-09/batch/{offset}/next/{count}`

Retrieve a batch of webhook journal entries starting from a specified offset. This endpoint is useful for paginating through large sets of webhook data. The number of entries returned is determined by the 'count' parameter.

<h3 id="fetch-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|path|integer(int32)|true|An integer specifying the number of journal entries to retrieve. Must be at least 1.|
|offset|path|string|true|A string representing the starting point for fetching the batch of journal entries.|
|installPortalId|query|integer(int32)|false|An integer representing the ID of the portal installation to filter the webhook journal entries.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="fetch-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseJournalFetchResponse](#schemabatchresponsejournalfetchresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch Earliest Batch

<a id="opIdget-/webhooks-journal/journal/2026-09/batch/earliest/{count}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/journal/2026-09/batch/earliest/{count}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/journal/2026-09/batch/earliest/{count}`

Retrieve the earliest batch of webhook journal entries for a specified count. This endpoint is useful for accessing historical webhook data in batches, allowing you to process or analyze older entries. The number of entries retrieved is determined by the count parameter.

<h3 id="fetch-earliest-batch-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|path|integer(int32)|true|The number of earliest webhook journal entries to retrieve. Must be an integer with a minimum value of 1.|
|installPortalId|query|integer(int32)|false|The ID of the portal installation to filter the webhook journal entries.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="fetch-earliest-batch-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseJournalFetchResponse](#schemabatchresponsejournalfetchresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve batch

<a id="opIdget-/webhooks-journal/journal/2026-09/batch/latest/{count}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/journal/2026-09/batch/latest/{count}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/journal/2026-09/batch/latest/{count}`

Retrieve the latest batch of webhook journal entries up to the specified count. This endpoint is useful for fetching recent webhook data for analysis or processing. The count parameter determines the maximum number of entries to return.

<h3 id="retrieve-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|path|integer(int32)|true|The number of journal entries to retrieve. This must be an integer with a minimum value of 1.|
|installPortalId|query|integer(int32)|false|The ID of the portal installation. This parameter is optional and used to filter the results by a specific portal.|

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

## Batch read

<a id="opIdpost-/webhooks-journal/journal/2026-09/batch/read"></a>

> Code samples

```bash
curl https://api.hubapi.com/webhooks-journal/journal/2026-09/batch/read \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /webhooks-journal/journal/2026-09/batch/read`

Execute a batch read operation on the webhooks journal for the specified date, 2026-03. This endpoint allows you to retrieve multiple entries from the webhooks journal in a single request, which can be useful for processing large amounts of data efficiently. Ensure that the request body is provided in the required format.

> Body parameter

```json
null
```

<h3 id="batch-read-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|installPortalId|query|integer(int32)|false|An integer representing the ID of the portal installation to filter the webhook journal entries.|
|body|body|[BatchInputString](#schemabatchinputstring)|true|none|
|» inputs|body|[string]|true|An array of strings that are to be processed in the batch operation. This property is required.|

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

## Fetch Batch

<a id="opIdget-/webhooks-journal/journal/2026-09/batch/{offset}/next/{count}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/webhooks-journal/journal/2026-09/batch/{offset}/next/{count}' \
  -H 'Accept: application/json'
```

`GET /webhooks-journal/journal/2026-09/batch/{offset}/next/{count}`

Retrieve a batch of webhook journal entries starting from a specified offset. This endpoint allows you to fetch a defined number of entries, which can be useful for processing large datasets in manageable chunks.

<h3 id="fetch-batch-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|path|integer(int32)|true|The number of journal entries to retrieve. This must be an integer with a minimum value of 1.|
|offset|path|string|true|The offset from which to start fetching the journal entries. This is a string value.|
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

<h3 id="fetch-batch-1-responses">Responses</h3>

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
|associatedObjectTypeIds|[string]|false|none|An array of strings representing the IDs of the associated object types involved in the action.|
|listIds|[integer(int64)]|false|none|An array of integers (int64 format) representing the IDs of the lists involved in the action.|
|objectIds|[integer(int64)]|false|none|An array of integers (int64 format) representing the IDs of the objects involved in the action.|
|properties|[string]|false|none|An array of strings representing the properties to be overridden or specified for the action.|

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
|eventTypeId|string|true|none|A string representing the unique identifier for the event type that the subscription is related to.|
|properties|[string]|true|none|An array of strings specifying the properties associated with the event type that should be included in the subscription.|
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
|actions|[string]|true|none|An array of strings specifying the actions that trigger the subscription. Valid actions include 'CREATE', 'UPDATE', 'DELETE', 'MERGE', 'RESTORE', 'ASSOCIATION_ADDED', 'ASSOCIATION_REMOVED', 'SNAPSHOT', 'APP_INSTALL', 'APP_UNINSTALL', 'ADDED_TO_LIST', 'REMOVED_FROM_LIST', and 'GDPR_DELETE'.|
|associatedObjectTypeIds|[string]|true|none|An array of strings representing the type identifiers of the associated objects in the subscription.|
|objectIds|[integer(int64)]|true|none|An array of integers representing the unique identifiers of the objects involved in the subscription.|
|objectTypeId|string|true|none|A string representing the type identifier of the object involved in the subscription.|
|portalId|integer(int64)|true|none|An integer representing the unique identifier of the HubSpot portal.|
|subscriptionType|string|true|none|A string indicating the type of subscription, which is 'ASSOCIATION' for this component.|

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
|inputs|[string]|true|none|An array of strings that are to be processed in the batch operation. This property is required.|

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
|links|object|false|none|A map of link names to associated URIs, providing additional resources or information related to the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[JournalFetchResponse](#schemajournalfetchresponse)]|true|none|An array of results from the batch operation, each represented by a JournalFetchResponse object.|
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
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed, in ISO 8601 format.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of standard errors, detailing any issues encountered during the batch operation.|
|links|object|false|none|A map of link names to associated URIs, providing additional resources or documentation related to the batch operation.|
|numErrors|integer(int32)|false|none|The number of errors encountered during the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[JournalFetchResponse](#schemajournalfetchresponse)]|true|none|An array of journal fetch responses, each representing a successful fetch attempt.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation started, in ISO 8601 format.|
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
|filterType|string|true|none|A string indicating the type of filter applied. Valid value is 'CRM_OBJECT_PROPERTY'.|
|operator|string|true|none|A string specifying the operation used for comparison. Valid values include 'EQ', 'N_EQ', 'LT', 'GT', 'LTE', 'GTE', 'CONTAINS', 'STARTS_WITH', 'ENDS_WITH', 'IN', 'NOT_IN', 'IS_EMPTY', and 'IS_NOT_EMPTY'.|
|property|string|true|none|A string representing the property name that the condition is evaluating.|
|value|string|false|none|A string representing the value to compare against the specified property using the defined operator.|
|values|[string]|false|none|An array of strings containing multiple values for comparison when using operators like 'IN' or 'NOT_IN'.|

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
|snapshotResponses|[[CrmObjectSnapshotResponse](#schemacrmobjectsnapshotresponse)]|true|none|An array of responses for each CRM object snapshot request. Each item in the array is a CrmObjectSnapshotResponse object, detailing the outcome of a single snapshot request.|

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
|objectId|integer(int64)|true|none|An integer representing the unique identifier of the CRM object.|
|objectTypeId|string|true|none|A string representing the type identifier of the CRM object.|
|portalId|integer(int64)|true|none|An integer representing the unique identifier of the HubSpot portal.|
|properties|[string]|true|none|An array of strings specifying the properties of the CRM object to include in the snapshot.|

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
|objectId|integer(int64)|true|none|An integer representing the unique identifier of the CRM object for which the snapshot was taken. It is in int64 format.|
|objectTypeId|string|true|none|A string representing the type identifier of the CRM object involved in the snapshot.|
|portalId|integer(int64)|true|none|An integer representing the unique identifier of the HubSpot portal associated with the CRM object snapshot. It is in int64 format.|
|snapshotStatusId|string(uuid)|true|none|A string in UUID format representing the status identifier of the snapshot operation.|

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
|conditions|[[Condition](#schemacondition)]|true|none|An array of conditions that define the criteria for the filter. Each condition specifies a filter type, operator, property, and optional values.|

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
|subscriptionId|integer(int64)|true|none|An integer representing the unique identifier of the subscription to which the filter will be applied. It is required and uses the int64 format.|

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
|filterId|integer(int64)|true|none|The unique identifier for the created filter. It is an integer in int64 format.|

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
|id|integer(int64)|true|none|The unique identifier for the filter, represented as a 64-bit integer.|

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
|actions|[string]|true|none|An array of actions that can trigger the subscription, such as 'CREATE', 'UPDATE', 'DELETE', and 'GDPR_DELETE'.|
|objectTypeId|string|true|none|A string representing the unique identifier for the object type associated with the subscription.|
|portalId|integer(int64)|true|none|The unique identifier for the HubSpot portal, represented as a 64-bit integer.|
|subscriptionType|string|true|none|The type of subscription, which is fixed as 'GDPR_PRIVACY_DELETION'.|

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
|currentOffset|string(uuid)|true|none|A UUID string indicating the current offset for pagination purposes.|
|expiresAt|string(date-time)|true|none|The date and time when the URL will expire, in ISO 8601 format.|
|url|string|true|none|A string representing the URL where the journal data can be accessed.|

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
|actions|[string]|true|none|An array of strings specifying the actions that trigger the subscription. Valid actions include 'CREATE', 'UPDATE', 'DELETE', 'MERGE', 'RESTORE', 'ASSOCIATION_ADDED', 'ASSOCIATION_REMOVED', 'SNAPSHOT', 'APP_INSTALL', 'APP_UNINSTALL', 'ADDED_TO_LIST', 'REMOVED_FROM_LIST', and 'GDPR_DELETE'.|
|listIds|[integer(int64)]|true|none|An array of integers representing the unique identifiers of the lists involved in the subscription.|
|objectIds|[integer(int64)]|true|none|An array of integers representing the unique identifiers of the objects involved in the subscription.|
|portalId|integer(int64)|true|none|An integer representing the unique identifier of the portal in which the subscription is being managed.|
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
|actions|[string]|true|none|An array of strings specifying the actions that trigger the subscription. Valid actions include 'CREATE', 'UPDATE', 'DELETE', 'MERGE', 'RESTORE', 'ASSOCIATION_ADDED', 'ASSOCIATION_REMOVED', 'SNAPSHOT', 'APP_INSTALL', 'APP_UNINSTALL', 'ADDED_TO_LIST', 'REMOVED_FROM_LIST', and 'GDPR_DELETE'.|
|objectIds|[integer(int64)]|true|none|An array of integers specifying the unique identifiers of the objects involved in the subscription.|
|objectTypeId|string|true|none|A string representing the unique identifier of the object type for which the subscription is being created or updated.|
|portalId|integer(int64)|true|none|An integer representing the unique identifier of the HubSpot portal.|
|properties|[string]|true|none|An array of strings listing the properties of the objects that are relevant to the subscription.|
|subscriptionType|string|true|none|A string indicating the type of subscription, which is always 'OBJECT' for this request.|

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
|completedAt|integer(int64)|false|none|The timestamp when the snapshot was completed, represented as an integer in int64 format. This field may be null if the snapshot is not yet completed.|
|errorCode|string|false|none|An optional code indicating the error that occurred, if any. Possible values are 'TIMEOUT', 'VALIDATION_ERROR', 'INTERNAL_ERROR', and 'PERMISSION_DENIED'.|
|id|string(uuid)|true|none|A unique identifier for the snapshot, represented as a UUID.|
|initiatedAt|integer(int64)|true|none|The timestamp when the snapshot was initiated, represented as an integer in int64 format.|
|message|string|false|none|A descriptive message providing additional information about the snapshot status or error.|
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
|context|object|true|none|An object containing additional context about the error condition, with keys as context names and values as arrays of strings.|
|errors|[[ErrorDetail](#schemaerrordetail)]|true|none|An array of ErrorDetail objects that provide further information about the error.|
|id|string|false|none|A string that uniquely identifies this error instance.|
|links|object|true|none|An object mapping link names to associated URIs that provide documentation or remediation steps related to the error.|
|message|string|true|none|A string containing a human-readable message describing the error.|
|status|string|true|none|A string representing the status of the error.|
|subCategory|object|false|none|An object providing more specific details about the error category.|

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
|actionOverrides|object|false|none|An object containing overrides for actions, where each key is an action and the value is an ActionOverrideRequest object.|
|actions|[string]|true|none|An array of actions associated with the subscription. Valid actions include 'CREATE', 'UPDATE', 'DELETE', 'MERGE', 'RESTORE', 'ASSOCIATION_ADDED', 'ASSOCIATION_REMOVED', 'SNAPSHOT', 'APP_INSTALL', 'APP_UNINSTALL', 'ADDED_TO_LIST', 'REMOVED_FROM_LIST', and 'GDPR_DELETE'.|
|appId|integer(int64)|true|none|The unique identifier for the app associated with the subscription, represented as an integer.|
|associatedObjectTypeIds|[string]|false|none|An array of strings representing the IDs of associated object types.|
|createdAt|string(date-time)|true|none|The date and time when the subscription was created, in ISO 8601 format.|
|createdBy|integer(int64)|false|none|The unique identifier of the user who created the subscription, represented as an integer.|
|deletedAt|string(date-time)|false|none|The date and time when the subscription was deleted, in ISO 8601 format, if applicable.|
|id|integer(int64)|true|none|The unique identifier for the subscription, represented as an integer.|
|listIds|[integer(int64)]|false|none|An array of integers representing the IDs of lists associated with the subscription.|
|objectIds|[integer(int64)]|false|none|An array of integers representing the IDs of objects associated with the subscription.|
|objectTypeId|string|true|none|The identifier for the type of object associated with the subscription, represented as a string.|
|portalId|integer(int64)|false|none|The unique identifier for the portal associated with the subscription, represented as an integer.|
|properties|[string]|false|none|An array of strings representing the properties associated with the subscription.|
|subscriptionType|string|true|none|The type of subscription, indicating the nature of events it pertains to. Valid values include 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', and 'GDPR_PRIVACY_DELETION'.|
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
