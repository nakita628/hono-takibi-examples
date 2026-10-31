<h1 id="pubsub-lite-api">Pub/Sub Lite API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://pubsublite.googleapis.com/">https://pubsublite.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/pubsub/lite/docs">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="pubsub-lite-api-admin">admin</h1>

## pubsublite.admin.projects.locations.topics.get

<a id="opIdpubsublite.admin.projects.locations.topics.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/admin/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/admin/{name}`

Returns the topic configuration.

<h3 id="pubsubliteadminprojectslocationstopicsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the topic whose configuration to return.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "partitionConfig": {
    "capacity": {
      "publishMibPerSec": 0,
      "subscribeMibPerSec": 0
    },
    "count": "string",
    "scale": 0
  },
  "reservationConfig": {
    "throughputReservation": "string"
  },
  "retentionConfig": {
    "perPartitionBytes": "string",
    "period": "string"
  }
}
```

<h3 id="pubsubliteadminprojectslocationstopicsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Topic](#schematopic)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## pubsublite.admin.projects.locations.topics.delete

<a id="opIdpubsublite.admin.projects.locations.topics.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/admin/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/admin/{name}`

Deletes the specified topic.

<h3 id="pubsubliteadminprojectslocationstopicsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the topic to delete.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="pubsubliteadminprojectslocationstopicsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## pubsublite.admin.projects.locations.topics.patch

<a id="opIdpubsublite.admin.projects.locations.topics.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/admin/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "partitionConfig": {
      "capacity": {
        "publishMibPerSec": 0,
        "subscribeMibPerSec": 0
      },
      "count": "string",
      "scale": 0
    },
    "reservationConfig": {
      "throughputReservation": "string"
    },
    "retentionConfig": {
      "perPartitionBytes": "string",
      "period": "string"
    }
  }'
```

`PATCH /v1/admin/{name}`

Updates properties of the specified topic.

> Body parameter

```json
{
  "name": "string",
  "partitionConfig": {
    "capacity": {
      "publishMibPerSec": 0,
      "subscribeMibPerSec": 0
    },
    "count": "string",
    "scale": 0
  },
  "reservationConfig": {
    "throughputReservation": "string"
  },
  "retentionConfig": {
    "perPartitionBytes": "string",
    "period": "string"
  }
}
```

<h3 id="pubsubliteadminprojectslocationstopicspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the topic. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}|
|updateMask|query|string|false|Required. A mask specifying the topic fields to change.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Topic](#schematopic)|false|none|
|» name|body|string|false|The name of the topic. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}|
|» partitionConfig|body|[PartitionConfig](#schemapartitionconfig)|false|The settings for this topic's partitions.|
|» reservationConfig|body|[ReservationConfig](#schemareservationconfig)|false|The settings for this topic's Reservation usage.|
|» retentionConfig|body|[RetentionConfig](#schemaretentionconfig)|false|The settings for this topic's message retention.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "partitionConfig": {
    "capacity": {
      "publishMibPerSec": 0,
      "subscribeMibPerSec": 0
    },
    "count": "string",
    "scale": 0
  },
  "reservationConfig": {
    "throughputReservation": "string"
  },
  "retentionConfig": {
    "perPartitionBytes": "string",
    "period": "string"
  }
}
```

<h3 id="pubsubliteadminprojectslocationstopicspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Topic](#schematopic)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## pubsublite.admin.projects.locations.operations.list

<a id="opIdpubsublite.admin.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/admin/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/admin/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="pubsubliteadminprojectslocationsoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation's parent resource.|
|filter|query|string|false|The standard list filter.|
|pageSize|query|integer|false|The standard list page size.|
|pageToken|query|string|false|The standard list page token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

<h3 id="pubsubliteadminprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## pubsublite.admin.projects.locations.topics.getPartitions

<a id="opIdpubsublite.admin.projects.locations.topics.getPartitions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/admin/string/partitions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/admin/{name}/partitions`

Returns the partition information for the requested topic.

<h3 id="pubsubliteadminprojectslocationstopicsgetpartitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The topic whose partition information to return.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "partitionCount": "string"
}
```

<h3 id="pubsubliteadminprojectslocationstopicsgetpartitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TopicPartitions](#schematopicpartitions)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## pubsublite.admin.projects.locations.topics.subscriptions.list

<a id="opIdpubsublite.admin.projects.locations.topics.subscriptions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/admin/string/subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/admin/{name}/subscriptions`

Lists the subscriptions attached to the specified topic.

<h3 id="pubsubliteadminprojectslocationstopicssubscriptionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the topic whose subscriptions to list.|
|pageSize|query|integer|false|The maximum number of subscriptions to return. The service may return fewer than this value. If unset or zero, all subscriptions for the given topic will be returned.|
|pageToken|query|string|false|A page token, received from a previous `ListTopicSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopicSubscriptions` must match the call that provided the page token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "subscriptions": [
    "string"
  ]
}
```

<h3 id="pubsubliteadminprojectslocationstopicssubscriptionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTopicSubscriptionsResponse](#schemalisttopicsubscriptionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## pubsublite.admin.projects.locations.reservations.topics.list

<a id="opIdpubsublite.admin.projects.locations.reservations.topics.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/admin/string/topics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/admin/{name}/topics`

Lists the topics attached to the specified reservation.

<h3 id="pubsubliteadminprojectslocationsreservationstopicslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the reservation whose topics to list. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id}|
|pageSize|query|integer|false|The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the given reservation will be returned.|
|pageToken|query|string|false|A page token, received from a previous `ListReservationTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReservationTopics` must match the call that provided the page token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "topics": [
    "string"
  ]
}
```

<h3 id="pubsubliteadminprojectslocationsreservationstopicslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListReservationTopicsResponse](#schemalistreservationtopicsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## pubsublite.admin.projects.locations.operations.cancel

<a id="opIdpubsublite.admin.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/admin/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/admin/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="pubsubliteadminprojectslocationsoperationscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be cancelled.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CancelOperationRequest](#schemacanceloperationrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="pubsubliteadminprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## pubsublite.admin.projects.locations.subscriptions.seek

<a id="opIdpubsublite.admin.projects.locations.subscriptions.seek"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/admin/string:seek \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "namedTarget": "NAMED_TARGET_UNSPECIFIED",
    "timeTarget": {
      "eventTime": "string",
      "publishTime": "string"
    }
  }'
```

`POST /v1/admin/{name}:seek`

Performs an out-of-band seek for a subscription to a specified target, which may be timestamps or named positions within the message backlog. Seek translates these targets to cursors for each partition and orchestrates subscribers to start consuming messages from these seek cursors. If an operation is returned, the seek has been registered and subscribers will eventually receive messages from the seek cursors (i.e. eventual consistency), as long as they are using a minimum supported client library version and not a system that tracks cursors independently of Pub/Sub Lite (e.g. Apache Beam, Dataflow, Spark). The seek operation will fail for unsupported clients. If clients would like to know when subscribers react to the seek (or not), they can poll the operation. The seek operation will succeed and complete once subscribers are ready to receive messages from the seek cursors for all partitions of the topic. This means that the seek operation will not complete until all subscribers come online. If the previous seek operation has not yet completed, it will be aborted and the new invocation of seek will supersede it.

> Body parameter

```json
{
  "namedTarget": "NAMED_TARGET_UNSPECIFIED",
  "timeTarget": {
    "eventTime": "string",
    "publishTime": "string"
  }
}
```

<h3 id="pubsubliteadminprojectslocationssubscriptionsseek-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the subscription to seek.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[SeekSubscriptionRequest](#schemaseeksubscriptionrequest)|false|none|
|» namedTarget|body|string|false|Seek to a named position with respect to the message backlog.|
|» timeTarget|body|[TimeTarget](#schematimetarget)|false|Seek to the first message whose publish or event time is greater than or equal to the specified query time. If no such message can be located, will seek to the end of the message backlog.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» namedTarget|NAMED_TARGET_UNSPECIFIED|
|» namedTarget|TAIL|
|» namedTarget|HEAD|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="pubsubliteadminprojectslocationssubscriptionsseek-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## pubsublite.admin.projects.locations.reservations.list

<a id="opIdpubsublite.admin.projects.locations.reservations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/admin/string/reservations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/admin/{parent}/reservations`

Returns the list of reservations for the given project.

<h3 id="pubsubliteadminprojectslocationsreservationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent whose reservations are to be listed. Structured like `projects/{project_number}/locations/{location}`.|
|pageSize|query|integer|false|The maximum number of reservations to return. The service may return fewer than this value. If unset or zero, all reservations for the parent will be returned.|
|pageToken|query|string|false|A page token, received from a previous `ListReservations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReservations` must match the call that provided the page token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "reservations": [
    {
      "name": "string",
      "throughputCapacity": "string"
    }
  ]
}
```

<h3 id="pubsubliteadminprojectslocationsreservationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListReservationsResponse](#schemalistreservationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## pubsublite.admin.projects.locations.reservations.create

<a id="opIdpubsublite.admin.projects.locations.reservations.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/admin/string/reservations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "throughputCapacity": "string"
  }'
```

`POST /v1/admin/{parent}/reservations`

Creates a new reservation.

> Body parameter

```json
{
  "name": "string",
  "throughputCapacity": "string"
}
```

<h3 id="pubsubliteadminprojectslocationsreservationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent location in which to create the reservation. Structured like `projects/{project_number}/locations/{location}`.|
|reservationId|query|string|false|Required. The ID to use for the reservation, which will become the final component of the reservation's name. This value is structured like: `my-reservation-name`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Reservation](#schemareservation)|false|none|
|» name|body|string|false|The name of the reservation. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id}|
|» throughputCapacity|body|string(int64)|false|The reserved throughput capacity. Every unit of throughput capacity is equivalent to 1 MiB/s of published messages or 2 MiB/s of subscribed messages. Any topics which are declared as using capacity from a Reservation will consume resources from this reservation instead of being charged individually.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "throughputCapacity": "string"
}
```

<h3 id="pubsubliteadminprojectslocationsreservationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Reservation](#schemareservation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## pubsublite.admin.projects.locations.subscriptions.list

<a id="opIdpubsublite.admin.projects.locations.subscriptions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/admin/string/subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/admin/{parent}/subscriptions`

Returns the list of subscriptions for the given project.

<h3 id="pubsubliteadminprojectslocationssubscriptionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent whose subscriptions are to be listed. Structured like `projects/{project_number}/locations/{location}`.|
|pageSize|query|integer|false|The maximum number of subscriptions to return. The service may return fewer than this value. If unset or zero, all subscriptions for the parent will be returned.|
|pageToken|query|string|false|A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "subscriptions": [
    {
      "deliveryConfig": {
        "deliveryRequirement": "DELIVERY_REQUIREMENT_UNSPECIFIED"
      },
      "exportConfig": {
        "currentState": "STATE_UNSPECIFIED",
        "deadLetterTopic": "string",
        "desiredState": "STATE_UNSPECIFIED",
        "pubsubConfig": {
          "topic": "string"
        }
      },
      "name": "string",
      "topic": "string"
    }
  ]
}
```

<h3 id="pubsubliteadminprojectslocationssubscriptionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSubscriptionsResponse](#schemalistsubscriptionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## pubsublite.admin.projects.locations.subscriptions.create

<a id="opIdpubsublite.admin.projects.locations.subscriptions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/admin/string/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "deliveryConfig": {
      "deliveryRequirement": "DELIVERY_REQUIREMENT_UNSPECIFIED"
    },
    "exportConfig": {
      "deadLetterTopic": "string",
      "desiredState": "STATE_UNSPECIFIED",
      "pubsubConfig": {
        "topic": "string"
      }
    },
    "name": "string",
    "topic": "string"
  }'
```

`POST /v1/admin/{parent}/subscriptions`

Creates a new subscription.

> Body parameter

```json
{
  "deliveryConfig": {
    "deliveryRequirement": "DELIVERY_REQUIREMENT_UNSPECIFIED"
  },
  "exportConfig": {
    "deadLetterTopic": "string",
    "desiredState": "STATE_UNSPECIFIED",
    "pubsubConfig": {
      "topic": "string"
    }
  },
  "name": "string",
  "topic": "string"
}
```

<h3 id="pubsubliteadminprojectslocationssubscriptionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent location in which to create the subscription. Structured like `projects/{project_number}/locations/{location}`.|
|skipBacklog|query|boolean|false|If true, the newly created subscription will only receive messages published after the subscription was created. Otherwise, the entire message backlog will be received on the subscription. Defaults to false.|
|subscriptionId|query|string|false|Required. The ID to use for the subscription, which will become the final component of the subscription's name. This value is structured like: `my-sub-name`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Subscription](#schemasubscription)|false|none|
|» deliveryConfig|body|[DeliveryConfig](#schemadeliveryconfig)|false|The settings for this subscription's message delivery.|
|» exportConfig|body|[ExportConfig](#schemaexportconfig)|false|If present, messages are automatically written from the Pub/Sub Lite topic associated with this subscription to a destination.|
|» name|body|string|false|The name of the subscription. Structured like: projects/{project_number}/locations/{location}/subscriptions/{subscription_id}|
|» topic|body|string|false|The name of the topic this subscription is attached to. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "deliveryConfig": {
    "deliveryRequirement": "DELIVERY_REQUIREMENT_UNSPECIFIED"
  },
  "exportConfig": {
    "currentState": "STATE_UNSPECIFIED",
    "deadLetterTopic": "string",
    "desiredState": "STATE_UNSPECIFIED",
    "pubsubConfig": {
      "topic": "string"
    }
  },
  "name": "string",
  "topic": "string"
}
```

<h3 id="pubsubliteadminprojectslocationssubscriptionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Subscription](#schemasubscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## pubsublite.admin.projects.locations.topics.list

<a id="opIdpubsublite.admin.projects.locations.topics.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/admin/string/topics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/admin/{parent}/topics`

Returns the list of topics for the given project.

<h3 id="pubsubliteadminprojectslocationstopicslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent whose topics are to be listed. Structured like `projects/{project_number}/locations/{location}`.|
|pageSize|query|integer|false|The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the parent will be returned.|
|pageToken|query|string|false|A page token, received from a previous `ListTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopics` must match the call that provided the page token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "topics": [
    {
      "name": "string",
      "partitionConfig": {
        "capacity": {
          "publishMibPerSec": 0,
          "subscribeMibPerSec": 0
        },
        "count": "string",
        "scale": 0
      },
      "reservationConfig": {
        "throughputReservation": "string"
      },
      "retentionConfig": {
        "perPartitionBytes": "string",
        "period": "string"
      }
    }
  ]
}
```

<h3 id="pubsubliteadminprojectslocationstopicslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTopicsResponse](#schemalisttopicsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## pubsublite.admin.projects.locations.topics.create

<a id="opIdpubsublite.admin.projects.locations.topics.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/admin/string/topics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "partitionConfig": {
      "capacity": {
        "publishMibPerSec": 0,
        "subscribeMibPerSec": 0
      },
      "count": "string",
      "scale": 0
    },
    "reservationConfig": {
      "throughputReservation": "string"
    },
    "retentionConfig": {
      "perPartitionBytes": "string",
      "period": "string"
    }
  }'
```

`POST /v1/admin/{parent}/topics`

Creates a new topic.

> Body parameter

```json
{
  "name": "string",
  "partitionConfig": {
    "capacity": {
      "publishMibPerSec": 0,
      "subscribeMibPerSec": 0
    },
    "count": "string",
    "scale": 0
  },
  "reservationConfig": {
    "throughputReservation": "string"
  },
  "retentionConfig": {
    "perPartitionBytes": "string",
    "period": "string"
  }
}
```

<h3 id="pubsubliteadminprojectslocationstopicscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent location in which to create the topic. Structured like `projects/{project_number}/locations/{location}`.|
|topicId|query|string|false|Required. The ID to use for the topic, which will become the final component of the topic's name. This value is structured like: `my-topic-name`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Topic](#schematopic)|false|none|
|» name|body|string|false|The name of the topic. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}|
|» partitionConfig|body|[PartitionConfig](#schemapartitionconfig)|false|The settings for this topic's partitions.|
|» reservationConfig|body|[ReservationConfig](#schemareservationconfig)|false|The settings for this topic's Reservation usage.|
|» retentionConfig|body|[RetentionConfig](#schemaretentionconfig)|false|The settings for this topic's message retention.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "partitionConfig": {
    "capacity": {
      "publishMibPerSec": 0,
      "subscribeMibPerSec": 0
    },
    "count": "string",
    "scale": 0
  },
  "reservationConfig": {
    "throughputReservation": "string"
  },
  "retentionConfig": {
    "perPartitionBytes": "string",
    "period": "string"
  }
}
```

<h3 id="pubsubliteadminprojectslocationstopicscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Topic](#schematopic)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="pubsub-lite-api-cursor">cursor</h1>

## pubsublite.cursor.projects.locations.subscriptions.cursors.list

<a id="opIdpubsublite.cursor.projects.locations.subscriptions.cursors.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/cursor/string/cursors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/cursor/{parent}/cursors`

Returns all committed cursor information for a subscription.

<h3 id="pubsublitecursorprojectslocationssubscriptionscursorslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The subscription for which to retrieve cursors. Structured like `projects/{project_number}/locations/{location}/subscriptions/{subscription_id}`.|
|pageSize|query|integer|false|The maximum number of cursors to return. The service may return fewer than this value. If unset or zero, all cursors for the parent will be returned.|
|pageToken|query|string|false|A page token, received from a previous `ListPartitionCursors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPartitionCursors` must match the call that provided the page token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "partitionCursors": [
    {
      "cursor": {
        "offset": "string"
      },
      "partition": "string"
    }
  ]
}
```

<h3 id="pubsublitecursorprojectslocationssubscriptionscursorslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPartitionCursorsResponse](#schemalistpartitioncursorsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## pubsublite.cursor.projects.locations.subscriptions.commitCursor

<a id="opIdpubsublite.cursor.projects.locations.subscriptions.commitCursor"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/cursor/string:commitCursor \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cursor": {
      "offset": "string"
    },
    "partition": "string"
  }'
```

`POST /v1/cursor/{subscription}:commitCursor`

Updates the committed cursor.

> Body parameter

```json
{
  "cursor": {
    "offset": "string"
  },
  "partition": "string"
}
```

<h3 id="pubsublitecursorprojectslocationssubscriptionscommitcursor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscription|path|string|true|The subscription for which to update the cursor.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CommitCursorRequest](#schemacommitcursorrequest)|false|none|
|» cursor|body|[Cursor](#schemacursor)|false|The new value for the committed cursor.|
|» partition|body|string(int64)|false|The partition for which to update the cursor. Partitions are zero indexed, so `partition` must be in the range [0, topic.num_partitions).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="pubsublitecursorprojectslocationssubscriptionscommitcursor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CommitCursorResponse](#schemacommitcursorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="pubsub-lite-api-topicstats">topicStats</h1>

## pubsublite.topicStats.projects.locations.topics.computeHeadCursor

<a id="opIdpubsublite.topicStats.projects.locations.topics.computeHeadCursor"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/topicStats/string:computeHeadCursor \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "partition": "string"
  }'
```

`POST /v1/topicStats/{topic}:computeHeadCursor`

Compute the head cursor for the partition. The head cursor's offset is guaranteed to be less than or equal to all messages which have not yet been acknowledged as published, and greater than the offset of any message whose publish has already been acknowledged. It is zero if there have never been messages in the partition.

> Body parameter

```json
{
  "partition": "string"
}
```

<h3 id="pubsublitetopicstatsprojectslocationstopicscomputeheadcursor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topic|path|string|true|Required. The topic for which we should compute the head cursor.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ComputeHeadCursorRequest](#schemacomputeheadcursorrequest)|false|none|
|» partition|body|string(int64)|false|Required. The partition for which we should compute the head cursor.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "headCursor": {
    "offset": "string"
  }
}
```

<h3 id="pubsublitetopicstatsprojectslocationstopicscomputeheadcursor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ComputeHeadCursorResponse](#schemacomputeheadcursorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## pubsublite.topicStats.projects.locations.topics.computeMessageStats

<a id="opIdpubsublite.topicStats.projects.locations.topics.computeMessageStats"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/topicStats/string:computeMessageStats \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "endCursor": {
      "offset": "string"
    },
    "partition": "string",
    "startCursor": {
      "offset": "string"
    }
  }'
```

`POST /v1/topicStats/{topic}:computeMessageStats`

Compute statistics about a range of messages in a given topic and partition.

> Body parameter

```json
{
  "endCursor": {
    "offset": "string"
  },
  "partition": "string",
  "startCursor": {
    "offset": "string"
  }
}
```

<h3 id="pubsublitetopicstatsprojectslocationstopicscomputemessagestats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topic|path|string|true|Required. The topic for which we should compute message stats.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ComputeMessageStatsRequest](#schemacomputemessagestatsrequest)|false|none|
|» endCursor|body|[Cursor](#schemacursor)|false|The exclusive end of the range. The range is empty if end_cursor <= start_cursor. Specifying a start_cursor before the first message and an end_cursor after the last message will retrieve all messages.|
|» partition|body|string(int64)|false|Required. The partition for which we should compute message stats.|
|» startCursor|body|[Cursor](#schemacursor)|false|The inclusive start of the range.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "messageBytes": "string",
  "messageCount": "string",
  "minimumEventTime": "string",
  "minimumPublishTime": "string"
}
```

<h3 id="pubsublitetopicstatsprojectslocationstopicscomputemessagestats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ComputeMessageStatsResponse](#schemacomputemessagestatsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## pubsublite.topicStats.projects.locations.topics.computeTimeCursor

<a id="opIdpubsublite.topicStats.projects.locations.topics.computeTimeCursor"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/topicStats/string:computeTimeCursor \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "partition": "string",
    "target": {
      "eventTime": "string",
      "publishTime": "string"
    }
  }'
```

`POST /v1/topicStats/{topic}:computeTimeCursor`

Compute the corresponding cursor for a publish or event time in a topic partition.

> Body parameter

```json
{
  "partition": "string",
  "target": {
    "eventTime": "string",
    "publishTime": "string"
  }
}
```

<h3 id="pubsublitetopicstatsprojectslocationstopicscomputetimecursor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topic|path|string|true|Required. The topic for which we should compute the cursor.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ComputeTimeCursorRequest](#schemacomputetimecursorrequest)|false|none|
|» partition|body|string(int64)|false|Required. The partition for which we should compute the cursor.|
|» target|body|[TimeTarget](#schematimetarget)|false|Required. The target publish or event time. Specifying a future time will return an unset cursor.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "cursor": {
    "offset": "string"
  }
}
```

<h3 id="pubsublitetopicstatsprojectslocationstopicscomputetimecursor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ComputeTimeCursorResponse](#schemacomputetimecursorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_CancelOperationRequest">CancelOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceloperationrequest"></a>
<a id="schema_CancelOperationRequest"></a>
<a id="tocScanceloperationrequest"></a>
<a id="tocscanceloperationrequest"></a>

```json
{}
```

The request message for Operations.CancelOperation.

<h2 id="tocS_Capacity">Capacity</h2>
<!-- backwards compatibility -->
<a id="schemacapacity"></a>
<a id="schema_Capacity"></a>
<a id="tocScapacity"></a>
<a id="tocscapacity"></a>

```json
{
  "publishMibPerSec": 0,
  "subscribeMibPerSec": 0
}
```

The throughput capacity configuration for each partition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publishMibPerSec|integer(int32)|false|none|Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.|
|subscribeMibPerSec|integer(int32)|false|none|Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 32.|

<h2 id="tocS_CommitCursorRequest">CommitCursorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacommitcursorrequest"></a>
<a id="schema_CommitCursorRequest"></a>
<a id="tocScommitcursorrequest"></a>
<a id="tocscommitcursorrequest"></a>

```json
{
  "cursor": {
    "offset": "string"
  },
  "partition": "string"
}
```

Request for CommitCursor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|[Cursor](#schemacursor)|false|none|The new value for the committed cursor.|
|partition|string(int64)|false|none|The partition for which to update the cursor. Partitions are zero indexed, so `partition` must be in the range [0, topic.num_partitions).|

<h2 id="tocS_CommitCursorResponse">CommitCursorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacommitcursorresponse"></a>
<a id="schema_CommitCursorResponse"></a>
<a id="tocScommitcursorresponse"></a>
<a id="tocscommitcursorresponse"></a>

```json
{}
```

Response for CommitCursor.

<h2 id="tocS_ComputeHeadCursorRequest">ComputeHeadCursorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacomputeheadcursorrequest"></a>
<a id="schema_ComputeHeadCursorRequest"></a>
<a id="tocScomputeheadcursorrequest"></a>
<a id="tocscomputeheadcursorrequest"></a>

```json
{
  "partition": "string"
}
```

Compute the current head cursor for a partition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partition|string(int64)|false|none|Required. The partition for which we should compute the head cursor.|

<h2 id="tocS_ComputeHeadCursorResponse">ComputeHeadCursorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacomputeheadcursorresponse"></a>
<a id="schema_ComputeHeadCursorResponse"></a>
<a id="tocScomputeheadcursorresponse"></a>
<a id="tocscomputeheadcursorresponse"></a>

```json
{
  "headCursor": {
    "offset": "string"
  }
}
```

Response containing the head cursor for the requested topic and partition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headCursor|[Cursor](#schemacursor)|false|none|The head cursor.|

<h2 id="tocS_ComputeMessageStatsRequest">ComputeMessageStatsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacomputemessagestatsrequest"></a>
<a id="schema_ComputeMessageStatsRequest"></a>
<a id="tocScomputemessagestatsrequest"></a>
<a id="tocscomputemessagestatsrequest"></a>

```json
{
  "endCursor": {
    "offset": "string"
  },
  "partition": "string",
  "startCursor": {
    "offset": "string"
  }
}
```

Compute statistics about a range of messages in a given topic and partition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endCursor|[Cursor](#schemacursor)|false|none|The exclusive end of the range. The range is empty if end_cursor <= start_cursor. Specifying a start_cursor before the first message and an end_cursor after the last message will retrieve all messages.|
|partition|string(int64)|false|none|Required. The partition for which we should compute message stats.|
|startCursor|[Cursor](#schemacursor)|false|none|The inclusive start of the range.|

<h2 id="tocS_ComputeMessageStatsResponse">ComputeMessageStatsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacomputemessagestatsresponse"></a>
<a id="schema_ComputeMessageStatsResponse"></a>
<a id="tocScomputemessagestatsresponse"></a>
<a id="tocscomputemessagestatsresponse"></a>

```json
{
  "messageBytes": "string",
  "messageCount": "string",
  "minimumEventTime": "string",
  "minimumPublishTime": "string"
}
```

Response containing stats for messages in the requested topic and partition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageBytes|string(int64)|false|none|The number of quota bytes accounted to these messages.|
|messageCount|string(int64)|false|none|The count of messages.|
|minimumEventTime|string(google-datetime)|false|none|The minimum event timestamp across these messages. For the purposes of this computation, if a message does not have an event time, we use the publish time. The timestamp will be unset if there are no messages.|
|minimumPublishTime|string(google-datetime)|false|none|The minimum publish timestamp across these messages. Note that publish timestamps within a partition are not guaranteed to be non-decreasing. The timestamp will be unset if there are no messages.|

<h2 id="tocS_ComputeTimeCursorRequest">ComputeTimeCursorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacomputetimecursorrequest"></a>
<a id="schema_ComputeTimeCursorRequest"></a>
<a id="tocScomputetimecursorrequest"></a>
<a id="tocscomputetimecursorrequest"></a>

```json
{
  "partition": "string",
  "target": {
    "eventTime": "string",
    "publishTime": "string"
  }
}
```

Compute the corresponding cursor for a publish or event time in a topic partition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partition|string(int64)|false|none|Required. The partition for which we should compute the cursor.|
|target|[TimeTarget](#schematimetarget)|false|none|Required. The target publish or event time. Specifying a future time will return an unset cursor.|

<h2 id="tocS_ComputeTimeCursorResponse">ComputeTimeCursorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacomputetimecursorresponse"></a>
<a id="schema_ComputeTimeCursorResponse"></a>
<a id="tocScomputetimecursorresponse"></a>
<a id="tocscomputetimecursorresponse"></a>

```json
{
  "cursor": {
    "offset": "string"
  }
}
```

Response containing the cursor corresponding to a publish or event time in a topic partition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|[Cursor](#schemacursor)|false|none|If present, the cursor references the first message with time greater than or equal to the specified target time. If such a message cannot be found, the cursor will be unset (i.e. `cursor` is not present).|

<h2 id="tocS_Cursor">Cursor</h2>
<!-- backwards compatibility -->
<a id="schemacursor"></a>
<a id="schema_Cursor"></a>
<a id="tocScursor"></a>
<a id="tocscursor"></a>

```json
{
  "offset": "string"
}
```

A cursor that describes the position of a message within a topic partition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offset|string(int64)|false|none|The offset of a message within a topic partition. Must be greater than or equal 0.|

<h2 id="tocS_DeliveryConfig">DeliveryConfig</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryconfig"></a>
<a id="schema_DeliveryConfig"></a>
<a id="tocSdeliveryconfig"></a>
<a id="tocsdeliveryconfig"></a>

```json
{
  "deliveryRequirement": "DELIVERY_REQUIREMENT_UNSPECIFIED"
}
```

The settings for a subscription's message delivery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveryRequirement|string|false|none|The DeliveryRequirement for this subscription.|

#### Enumerated Values

|Property|Value|
|---|---|
|deliveryRequirement|DELIVERY_REQUIREMENT_UNSPECIFIED|
|deliveryRequirement|DELIVER_IMMEDIATELY|
|deliveryRequirement|DELIVER_AFTER_STORED|

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_ExportConfig">ExportConfig</h2>
<!-- backwards compatibility -->
<a id="schemaexportconfig"></a>
<a id="schema_ExportConfig"></a>
<a id="tocSexportconfig"></a>
<a id="tocsexportconfig"></a>

```json
{
  "currentState": "STATE_UNSPECIFIED",
  "deadLetterTopic": "string",
  "desiredState": "STATE_UNSPECIFIED",
  "pubsubConfig": {
    "topic": "string"
  }
}
```

Configuration for a Pub/Sub Lite subscription that writes messages to a destination. User subscriber clients must not connect to this subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentState|string|false|read-only|Output only. The current state of the export, which may be different to the desired state due to errors. This field is output only.|
|deadLetterTopic|string|false|none|Optional. The name of an optional Pub/Sub Lite topic to publish messages that can not be exported to the destination. For example, the message can not be published to the Pub/Sub service because it does not satisfy the constraints documented at https://cloud.google.com/pubsub/docs/publisher. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}. Must be within the same project and location as the subscription. The topic may be changed or removed.|
|desiredState|string|false|none|The desired state of this export. Setting this to values other than `ACTIVE` and `PAUSED` will result in an error.|
|pubsubConfig|[PubSubConfig](#schemapubsubconfig)|false|none|Messages are automatically written from the Pub/Sub Lite topic associated with this subscription to a Pub/Sub topic.|

#### Enumerated Values

|Property|Value|
|---|---|
|currentState|STATE_UNSPECIFIED|
|currentState|ACTIVE|
|currentState|PAUSED|
|currentState|PERMISSION_DENIED|
|currentState|NOT_FOUND|
|desiredState|STATE_UNSPECIFIED|
|desiredState|ACTIVE|
|desiredState|PAUSED|
|desiredState|PERMISSION_DENIED|
|desiredState|NOT_FOUND|

<h2 id="tocS_ListOperationsResponse">ListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistoperationsresponse"></a>
<a id="schema_ListOperationsResponse"></a>
<a id="tocSlistoperationsresponse"></a>
<a id="tocslistoperationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

The response message for Operations.ListOperations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The standard List next-page token.|
|operations|[[Operation](#schemaoperation)]|false|none|A list of operations that matches the specified filter in the request.|

<h2 id="tocS_ListPartitionCursorsResponse">ListPartitionCursorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpartitioncursorsresponse"></a>
<a id="schema_ListPartitionCursorsResponse"></a>
<a id="tocSlistpartitioncursorsresponse"></a>
<a id="tocslistpartitioncursorsresponse"></a>

```json
{
  "nextPageToken": "string",
  "partitionCursors": [
    {
      "cursor": {
        "offset": "string"
      },
      "partition": "string"
    }
  ]
}
```

Response for ListPartitionCursors

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|partitionCursors|[[PartitionCursor](#schemapartitioncursor)]|false|none|The partition cursors from this request.|

<h2 id="tocS_ListReservationTopicsResponse">ListReservationTopicsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreservationtopicsresponse"></a>
<a id="schema_ListReservationTopicsResponse"></a>
<a id="tocSlistreservationtopicsresponse"></a>
<a id="tocslistreservationtopicsresponse"></a>

```json
{
  "nextPageToken": "string",
  "topics": [
    "string"
  ]
}
```

Response for ListReservationTopics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.|
|topics|[string]|false|none|The names of topics attached to the reservation. The order of the topics is unspecified.|

<h2 id="tocS_ListReservationsResponse">ListReservationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreservationsresponse"></a>
<a id="schema_ListReservationsResponse"></a>
<a id="tocSlistreservationsresponse"></a>
<a id="tocslistreservationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "reservations": [
    {
      "name": "string",
      "throughputCapacity": "string"
    }
  ]
}
```

Response for ListReservations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.|
|reservations|[[Reservation](#schemareservation)]|false|none|The list of reservation in the requested parent. The order of the reservations is unspecified.|

<h2 id="tocS_ListSubscriptionsResponse">ListSubscriptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsubscriptionsresponse"></a>
<a id="schema_ListSubscriptionsResponse"></a>
<a id="tocSlistsubscriptionsresponse"></a>
<a id="tocslistsubscriptionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "subscriptions": [
    {
      "deliveryConfig": {
        "deliveryRequirement": "DELIVERY_REQUIREMENT_UNSPECIFIED"
      },
      "exportConfig": {
        "currentState": "STATE_UNSPECIFIED",
        "deadLetterTopic": "string",
        "desiredState": "STATE_UNSPECIFIED",
        "pubsubConfig": {
          "topic": "string"
        }
      },
      "name": "string",
      "topic": "string"
    }
  ]
}
```

Response for ListSubscriptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.|
|subscriptions|[[Subscription](#schemasubscription)]|false|none|The list of subscriptions in the requested parent. The order of the subscriptions is unspecified.|

<h2 id="tocS_ListTopicSubscriptionsResponse">ListTopicSubscriptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttopicsubscriptionsresponse"></a>
<a id="schema_ListTopicSubscriptionsResponse"></a>
<a id="tocSlisttopicsubscriptionsresponse"></a>
<a id="tocslisttopicsubscriptionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "subscriptions": [
    "string"
  ]
}
```

Response for ListTopicSubscriptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.|
|subscriptions|[string]|false|none|The names of subscriptions attached to the topic. The order of the subscriptions is unspecified.|

<h2 id="tocS_ListTopicsResponse">ListTopicsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttopicsresponse"></a>
<a id="schema_ListTopicsResponse"></a>
<a id="tocSlisttopicsresponse"></a>
<a id="tocslisttopicsresponse"></a>

```json
{
  "nextPageToken": "string",
  "topics": [
    {
      "name": "string",
      "partitionConfig": {
        "capacity": {
          "publishMibPerSec": 0,
          "subscribeMibPerSec": 0
        },
        "count": "string",
        "scale": 0
      },
      "reservationConfig": {
        "throughputReservation": "string"
      },
      "retentionConfig": {
        "perPartitionBytes": "string",
        "period": "string"
      }
    }
  ]
}
```

Response for ListTopics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.|
|topics|[[Topic](#schematopic)]|false|none|The list of topic in the requested parent. The order of the topics is unspecified.|

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

This resource represents a long-running operation that is the result of a network API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|false|none|If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.|
|error|[Status](#schemastatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_OperationMetadata">OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaoperationmetadata"></a>
<a id="schema_OperationMetadata"></a>
<a id="tocSoperationmetadata"></a>
<a id="tocsoperationmetadata"></a>

```json
{
  "createTime": "string",
  "endTime": "string",
  "target": "string",
  "verb": "string"
}
```

Metadata for long running operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The time the operation was created.|
|endTime|string(google-datetime)|false|none|The time the operation finished running. Not set if the operation has not completed.|
|target|string|false|none|Resource path for the target of the operation. For example, targets of seeks are subscription resources, structured like: projects/{project_number}/locations/{location}/subscriptions/{subscription_id}|
|verb|string|false|none|Name of the verb executed by the operation.|

<h2 id="tocS_PartitionConfig">PartitionConfig</h2>
<!-- backwards compatibility -->
<a id="schemapartitionconfig"></a>
<a id="schema_PartitionConfig"></a>
<a id="tocSpartitionconfig"></a>
<a id="tocspartitionconfig"></a>

```json
{
  "capacity": {
    "publishMibPerSec": 0,
    "subscribeMibPerSec": 0
  },
  "count": "string",
  "scale": 0
}
```

The settings for a topic's partitions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacity|[Capacity](#schemacapacity)|false|none|The capacity configuration.|
|count|string(int64)|false|none|The number of partitions in the topic. Must be at least 1. Once a topic has been created the number of partitions can be increased but not decreased. Message ordering is not guaranteed across a topic resize. For more information see https://cloud.google.com/pubsub/lite/docs/topics#scaling_capacity|
|scale|integer(int32)|false|none|DEPRECATED: Use capacity instead which can express a superset of configurations. Every partition in the topic is allocated throughput equivalent to `scale` times the standard partition throughput (4 MiB/s). This is also reflected in the cost of this topic; a topic with `scale` of 2 and count of 10 is charged for 20 partitions. This value must be in the range [1,4].|

<h2 id="tocS_PartitionCursor">PartitionCursor</h2>
<!-- backwards compatibility -->
<a id="schemapartitioncursor"></a>
<a id="schema_PartitionCursor"></a>
<a id="tocSpartitioncursor"></a>
<a id="tocspartitioncursor"></a>

```json
{
  "cursor": {
    "offset": "string"
  },
  "partition": "string"
}
```

A pair of a Cursor and the partition it is for.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|[Cursor](#schemacursor)|false|none|The value of the cursor.|
|partition|string(int64)|false|none|The partition this is for.|

<h2 id="tocS_PubSubConfig">PubSubConfig</h2>
<!-- backwards compatibility -->
<a id="schemapubsubconfig"></a>
<a id="schema_PubSubConfig"></a>
<a id="tocSpubsubconfig"></a>
<a id="tocspubsubconfig"></a>

```json
{
  "topic": "string"
}
```

Configuration for exporting to a Pub/Sub topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topic|string|false|none|The name of the Pub/Sub topic. Structured like: projects/{project_number}/topics/{topic_id}. The topic may be changed.|

<h2 id="tocS_Reservation">Reservation</h2>
<!-- backwards compatibility -->
<a id="schemareservation"></a>
<a id="schema_Reservation"></a>
<a id="tocSreservation"></a>
<a id="tocsreservation"></a>

```json
{
  "name": "string",
  "throughputCapacity": "string"
}
```

Metadata about a reservation resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the reservation. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id}|
|throughputCapacity|string(int64)|false|none|The reserved throughput capacity. Every unit of throughput capacity is equivalent to 1 MiB/s of published messages or 2 MiB/s of subscribed messages. Any topics which are declared as using capacity from a Reservation will consume resources from this reservation instead of being charged individually.|

<h2 id="tocS_ReservationConfig">ReservationConfig</h2>
<!-- backwards compatibility -->
<a id="schemareservationconfig"></a>
<a id="schema_ReservationConfig"></a>
<a id="tocSreservationconfig"></a>
<a id="tocsreservationconfig"></a>

```json
{
  "throughputReservation": "string"
}
```

The settings for this topic's Reservation usage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|throughputReservation|string|false|none|The Reservation to use for this topic's throughput capacity. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id}|

<h2 id="tocS_RetentionConfig">RetentionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaretentionconfig"></a>
<a id="schema_RetentionConfig"></a>
<a id="tocSretentionconfig"></a>
<a id="tocsretentionconfig"></a>

```json
{
  "perPartitionBytes": "string",
  "period": "string"
}
```

The settings for a topic's message retention.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|perPartitionBytes|string(int64)|false|none|The provisioned storage, in bytes, per partition. If the number of bytes stored in any of the topic's partitions grows beyond this value, older messages will be dropped to make room for newer ones, regardless of the value of `period`.|
|period|string(google-duration)|false|none|How long a published message is retained. If unset, messages will be retained as long as the bytes retained for each partition is below `per_partition_bytes`.|

<h2 id="tocS_SeekSubscriptionRequest">SeekSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaseeksubscriptionrequest"></a>
<a id="schema_SeekSubscriptionRequest"></a>
<a id="tocSseeksubscriptionrequest"></a>
<a id="tocsseeksubscriptionrequest"></a>

```json
{
  "namedTarget": "NAMED_TARGET_UNSPECIFIED",
  "timeTarget": {
    "eventTime": "string",
    "publishTime": "string"
  }
}
```

Request for SeekSubscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namedTarget|string|false|none|Seek to a named position with respect to the message backlog.|
|timeTarget|[TimeTarget](#schematimetarget)|false|none|Seek to the first message whose publish or event time is greater than or equal to the specified query time. If no such message can be located, will seek to the end of the message backlog.|

#### Enumerated Values

|Property|Value|
|---|---|
|namedTarget|NAMED_TARGET_UNSPECIFIED|
|namedTarget|TAIL|
|namedTarget|HEAD|

<h2 id="tocS_SeekSubscriptionResponse">SeekSubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaseeksubscriptionresponse"></a>
<a id="schema_SeekSubscriptionResponse"></a>
<a id="tocSseeksubscriptionresponse"></a>
<a id="tocsseeksubscriptionresponse"></a>

```json
{}
```

Response for SeekSubscription long running operation.

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "code": 0,
  "details": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "message": "string"
}
```

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "deliveryConfig": {
    "deliveryRequirement": "DELIVERY_REQUIREMENT_UNSPECIFIED"
  },
  "exportConfig": {
    "currentState": "STATE_UNSPECIFIED",
    "deadLetterTopic": "string",
    "desiredState": "STATE_UNSPECIFIED",
    "pubsubConfig": {
      "topic": "string"
    }
  },
  "name": "string",
  "topic": "string"
}
```

Metadata about a subscription resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveryConfig|[DeliveryConfig](#schemadeliveryconfig)|false|none|The settings for this subscription's message delivery.|
|exportConfig|[ExportConfig](#schemaexportconfig)|false|none|If present, messages are automatically written from the Pub/Sub Lite topic associated with this subscription to a destination.|
|name|string|false|none|The name of the subscription. Structured like: projects/{project_number}/locations/{location}/subscriptions/{subscription_id}|
|topic|string|false|none|The name of the topic this subscription is attached to. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}|

<h2 id="tocS_TimeTarget">TimeTarget</h2>
<!-- backwards compatibility -->
<a id="schematimetarget"></a>
<a id="schema_TimeTarget"></a>
<a id="tocStimetarget"></a>
<a id="tocstimetarget"></a>

```json
{
  "eventTime": "string",
  "publishTime": "string"
}
```

A target publish or event time. Can be used for seeking to or retrieving the corresponding cursor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTime|string(google-datetime)|false|none|Request the cursor of the first message with event time greater than or equal to `event_time`. If messages are missing an event time, the publish time is used as a fallback. As event times are user supplied, subsequent messages may have event times less than `event_time` and should be filtered by the client, if necessary.|
|publishTime|string(google-datetime)|false|none|Request the cursor of the first message with publish time greater than or equal to `publish_time`. All messages thereafter are guaranteed to have publish times >= `publish_time`.|

<h2 id="tocS_Topic">Topic</h2>
<!-- backwards compatibility -->
<a id="schematopic"></a>
<a id="schema_Topic"></a>
<a id="tocStopic"></a>
<a id="tocstopic"></a>

```json
{
  "name": "string",
  "partitionConfig": {
    "capacity": {
      "publishMibPerSec": 0,
      "subscribeMibPerSec": 0
    },
    "count": "string",
    "scale": 0
  },
  "reservationConfig": {
    "throughputReservation": "string"
  },
  "retentionConfig": {
    "perPartitionBytes": "string",
    "period": "string"
  }
}
```

Metadata about a topic resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the topic. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}|
|partitionConfig|[PartitionConfig](#schemapartitionconfig)|false|none|The settings for this topic's partitions.|
|reservationConfig|[ReservationConfig](#schemareservationconfig)|false|none|The settings for this topic's Reservation usage.|
|retentionConfig|[RetentionConfig](#schemaretentionconfig)|false|none|The settings for this topic's message retention.|

<h2 id="tocS_TopicPartitions">TopicPartitions</h2>
<!-- backwards compatibility -->
<a id="schematopicpartitions"></a>
<a id="schema_TopicPartitions"></a>
<a id="tocStopicpartitions"></a>
<a id="tocstopicpartitions"></a>

```json
{
  "partitionCount": "string"
}
```

Response for GetTopicPartitions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partitionCount|string(int64)|false|none|The number of partitions in the topic.|
